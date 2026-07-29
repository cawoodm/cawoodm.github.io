(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const fd="modulepreload",pd=function(e){return"/easydbaccess/"+e},Jo={},$n=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){let a=function(p){return Promise.all(p.map(x=>Promise.resolve(x).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=c?.nonce||c?.getAttribute("nonce");n=a(r.map(p=>{if(p=pd(p),p in Jo)return;Jo[p]=!0;const x=p.endsWith(".css"),b=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${b}`))return;const k=document.createElement("link");if(k.rel=x?"stylesheet":fd,x||(k.as="script"),k.crossOrigin="",k.href=p,u&&k.setAttribute("nonce",u),document.head.appendChild(k),x)return new Promise((M,F)=>{k.addEventListener("load",M),k.addEventListener("error",()=>F(new Error(`Unable to preload CSS for ${p}`)))})}))}function o(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return n.then(a=>{for(const c of a||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi=globalThis,Qs=bi.ShadowRoot&&(bi.ShadyCSS===void 0||bi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Js=Symbol(),Zo=new WeakMap;let ml=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==Js)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Qs&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=Zo.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Zo.set(r,t))}return t}toString(){return this.cssText}};const md=e=>new ml(typeof e=="string"?e:e+"",void 0,Js),qe=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,o)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new ml(r,e,Js)},gd=(e,t)=>{if(Qs)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),n=bi.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}},ea=Qs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return md(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:bd,defineProperty:yd,getOwnPropertyDescriptor:wd,getOwnPropertyNames:vd,getOwnPropertySymbols:xd,getPrototypeOf:$d}=Object,Ri=globalThis,ta=Ri.trustedTypes,kd=ta?ta.emptyScript:"",Cd=Ri.reactiveElementPolyfillSupport,Ar=(e,t)=>e,wi={toAttribute(e,t){switch(t){case Boolean:e=e?kd:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Zs=(e,t)=>!bd(e,t),na={attribute:!0,type:String,converter:wi,reflect:!1,useDefault:!1,hasChanged:Zs};Symbol.metadata??=Symbol("metadata"),Ri.litPropertyMetadata??=new WeakMap;let sr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=na){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&yd(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){const{get:n,set:o}=wd(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get:n,set(a){const c=n?.call(this);o?.call(this,a),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??na}static _$Ei(){if(this.hasOwnProperty(Ar("elementProperties")))return;const t=$d(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ar("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ar("properties"))){const r=this.properties,i=[...vd(r),...xd(r)];for(const n of i)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(ea(n))}else t!==void 0&&r.push(ea(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gd(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:wi).toAttribute(r,i.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,r){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const o=i.getPropertyOptions(n),a=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:wi;this._$Em=n;const c=a.fromAttribute(r,o.type);this[n]=c??this._$Ej?.get(n)??c,this._$Em=null}}requestUpdate(t,r,i,n=!1,o){if(t!==void 0){const a=this.constructor;if(n===!1&&(o=this[t]),i??=a.getPropertyOptions(t),!((i.hasChanged??Zs)(o,r)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:n,wrapped:o},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??r??this[t]),o!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i){const{wrapped:a}=o,c=this[n];a!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,o,c)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};sr.elementStyles=[],sr.shadowRootOptions={mode:"open"},sr[Ar("elementProperties")]=new Map,sr[Ar("finalized")]=new Map,Cd?.({ReactiveElement:sr}),(Ri.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eo=globalThis,ra=e=>e,vi=eo.trustedTypes,ia=vi?vi.createPolicy("lit-html",{createHTML:e=>e}):void 0,gl="$lit$",Rn=`lit$${Math.random().toFixed(9).slice(2)}$`,bl="?"+Rn,Ed=`<${bl}>`,Gn=document,Pr=()=>Gn.createComment(""),Ir=e=>e===null||typeof e!="object"&&typeof e!="function",to=Array.isArray,Sd=e=>to(e)||typeof e?.[Symbol.iterator]=="function",ws=`[ 	
\f\r]`,Sr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sa=/-->/g,oa=/>/g,qn=RegExp(`>|${ws}(?:([^\\s"'>=/]+)(${ws}*=${ws}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),aa=/'/g,la=/"/g,yl=/^(?:script|style|textarea|title)$/i,_d=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),T=_d(1),Yn=Symbol.for("lit-noChange"),me=Symbol.for("lit-nothing"),ca=new WeakMap,Vn=Gn.createTreeWalker(Gn,129);function wl(e,t){if(!to(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ia!==void 0?ia.createHTML(t):t}const Td=(e,t)=>{const r=e.length-1,i=[];let n,o=t===2?"<svg>":t===3?"<math>":"",a=Sr;for(let c=0;c<r;c++){const u=e[c];let p,x,b=-1,k=0;for(;k<u.length&&(a.lastIndex=k,x=a.exec(u),x!==null);)k=a.lastIndex,a===Sr?x[1]==="!--"?a=sa:x[1]!==void 0?a=oa:x[2]!==void 0?(yl.test(x[2])&&(n=RegExp("</"+x[2],"g")),a=qn):x[3]!==void 0&&(a=qn):a===qn?x[0]===">"?(a=n??Sr,b=-1):x[1]===void 0?b=-2:(b=a.lastIndex-x[2].length,p=x[1],a=x[3]===void 0?qn:x[3]==='"'?la:aa):a===la||a===aa?a=qn:a===sa||a===oa?a=Sr:(a=qn,n=void 0);const M=a===qn&&e[c+1].startsWith("/>")?" ":"";o+=a===Sr?u+Ed:b>=0?(i.push(p),u.slice(0,b)+gl+u.slice(b)+Rn+M):u+Rn+(b===-2?c:M)}return[wl(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class Rr{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let o=0,a=0;const c=t.length-1,u=this.parts,[p,x]=Td(t,r);if(this.el=Rr.createElement(p,i),Vn.currentNode=this.el.content,r===2||r===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(n=Vn.nextNode())!==null&&u.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const b of n.getAttributeNames())if(b.endsWith(gl)){const k=x[a++],M=n.getAttribute(b).split(Rn),F=/([.?@])?(.*)/.exec(k);u.push({type:1,index:o,name:F[2],strings:M,ctor:F[1]==="."?Pd:F[1]==="?"?Id:F[1]==="@"?Rd:Di}),n.removeAttribute(b)}else b.startsWith(Rn)&&(u.push({type:6,index:o}),n.removeAttribute(b));if(yl.test(n.tagName)){const b=n.textContent.split(Rn),k=b.length-1;if(k>0){n.textContent=vi?vi.emptyScript:"";for(let M=0;M<k;M++)n.append(b[M],Pr()),Vn.nextNode(),u.push({type:2,index:++o});n.append(b[k],Pr())}}}else if(n.nodeType===8)if(n.data===bl)u.push({type:2,index:o});else{let b=-1;for(;(b=n.data.indexOf(Rn,b+1))!==-1;)u.push({type:7,index:o}),b+=Rn.length-1}o++}}static createElement(t,r){const i=Gn.createElement("template");return i.innerHTML=t,i}}function ar(e,t,r=e,i){if(t===Yn)return t;let n=i!==void 0?r._$Co?.[i]:r._$Cl;const o=Ir(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(e),n._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=n:r._$Cl=n),n!==void 0&&(t=ar(e,n._$AS(e,t.values),n,i)),t}class Ad{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,n=(t?.creationScope??Gn).importNode(r,!0);Vn.currentNode=n;let o=Vn.nextNode(),a=0,c=0,u=i[0];for(;u!==void 0;){if(a===u.index){let p;u.type===2?p=new jr(o,o.nextSibling,this,t):u.type===1?p=new u.ctor(o,u.name,u.strings,this,t):u.type===6&&(p=new Dd(o,this,t)),this._$AV.push(p),u=i[++c]}a!==u?.index&&(o=Vn.nextNode(),a++)}return Vn.currentNode=Gn,n}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class jr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=me,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ar(this,t,r),Ir(t)?t===me||t==null||t===""?(this._$AH!==me&&this._$AR(),this._$AH=me):t!==this._$AH&&t!==Yn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Sd(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==me&&Ir(this._$AH)?this._$AA.nextSibling.data=t:this.T(Gn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Rr.createElement(wl(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(r);else{const o=new Ad(n,this),a=o.u(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(t){let r=ca.get(t.strings);return r===void 0&&ca.set(t.strings,r=new Rr(t)),r}k(t){to(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const o of t)n===r.length?r.push(i=new jr(this.O(Pr()),this.O(Pr()),this,this.options)):i=r[n],i._$AI(o),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=ra(t).nextSibling;ra(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Di{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,o){this.type=1,this._$AH=me,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=me}_$AI(t,r=this,i,n){const o=this.strings;let a=!1;if(o===void 0)t=ar(this,t,r,0),a=!Ir(t)||t!==this._$AH&&t!==Yn,a&&(this._$AH=t);else{const c=t;let u,p;for(t=o[0],u=0;u<o.length-1;u++)p=ar(this,c[i+u],r,u),p===Yn&&(p=this._$AH[u]),a||=!Ir(p)||p!==this._$AH[u],p===me?t=me:t!==me&&(t+=(p??"")+o[u+1]),this._$AH[u]=p}a&&!n&&this.j(t)}j(t){t===me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pd extends Di{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===me?void 0:t}}class Id extends Di{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==me)}}class Rd extends Di{constructor(t,r,i,n,o){super(t,r,i,n,o),this.type=5}_$AI(t,r=this){if((t=ar(this,t,r,0)??me)===Yn)return;const i=this._$AH,n=t===me&&i!==me||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==me&&(i===me||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Dd{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ar(this,t)}}const Od=eo.litHtmlPolyfillSupport;Od?.(Rr,jr),(eo.litHtmlVersions??=[]).push("3.3.3");const jd=(e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const o=r?.renderBefore??null;i._$litPart$=n=new jr(t.insertBefore(Pr(),o),o,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const no=globalThis;let Ne=class extends sr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=jd(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Yn}};Ne._$litElement$=!0,Ne.finalized=!0,no.litElementHydrateSupport?.({LitElement:Ne});const zd=no.litElementPolyfillSupport;zd?.({LitElement:Ne});(no.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ld={attribute:!0,type:String,converter:wi,reflect:!1,hasChanged:Zs},Fd=(e=Ld,t,r)=>{const{kind:i,metadata:n}=r;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),i==="accessor"){const{name:a}=r;return{set(c){const u=t.get.call(this);t.set.call(this,c),this.requestUpdate(a,u,e,!0,c)},init(c){return c!==void 0&&this.C(a,void 0,e,c),c}}}if(i==="setter"){const{name:a}=r;return function(c){const u=this[a];t.call(this,c),this.requestUpdate(a,u,e,!0,c)}}throw Error("Unsupported decorator location: "+i)};function Mt(e){return(t,r)=>typeof r=="object"?Fd(e,t,r):((i,n,o)=>{const a=n.hasOwnProperty(o);return n.constructor.createProperty(o,i),a?Object.getOwnPropertyDescriptor(n,o):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function q(e){return Mt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Md=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pn(e,t){return(r,i,n)=>{const o=a=>a.renderRoot?.querySelector(e)??null;return Md(r,i,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bd={CHILD:2},vl=e=>(...t)=>({_$litDirective$:e,values:t});class Nd{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class xi extends Nd{constructor(t){if(super(t),this.it=me,t.type!==Bd.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===me||t==null)return this._t=void 0,this.it=t;if(t===Yn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}xi.directiveName="unsafeHTML",xi.resultType=1;const or=vl(xi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ds extends xi{}Ds.directiveName="unsafeSVG",Ds.resultType=2;const ro=vl(Ds);var Ud=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yi={exports:{}},qd=yi.exports,da;function Wd(){return da||(da=1,(function(e,t){(function(r,i){e.exports=i()})(qd,function(){var r=function(s,l){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,h){d.__proto__=h}||function(d,h){for(var f in h)Object.prototype.hasOwnProperty.call(h,f)&&(d[f]=h[f])})(s,l)},i=function(){return(i=Object.assign||function(s){for(var l,d=1,h=arguments.length;d<h;d++)for(var f in l=arguments[d])Object.prototype.hasOwnProperty.call(l,f)&&(s[f]=l[f]);return s}).apply(this,arguments)};function n(s,l,d){for(var h,f=0,m=l.length;f<m;f++)!h&&f in l||((h=h||Array.prototype.slice.call(l,0,f))[f]=l[f]);return s.concat(h||Array.prototype.slice.call(l))}var o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Ud,a=Object.keys,c=Array.isArray;function u(s,l){return typeof l!="object"||a(l).forEach(function(d){s[d]=l[d]}),s}typeof Promise>"u"||o.Promise||(o.Promise=Promise);var p=Object.getPrototypeOf,x={}.hasOwnProperty;function b(s,l){return x.call(s,l)}function k(s,l){typeof l=="function"&&(l=l(p(s))),(typeof Reflect>"u"?a:Reflect.ownKeys)(l).forEach(function(d){F(s,d,l[d])})}var M=Object.defineProperty;function F(s,l,d,h){M(s,l,u(d&&b(d,"get")&&typeof d.get=="function"?{get:d.get,set:d.set,configurable:!0}:{value:d,configurable:!0,writable:!0},h))}function R(s){return{from:function(l){return s.prototype=Object.create(l.prototype),F(s.prototype,"constructor",s),{extend:k.bind(null,s.prototype)}}}}var H=Object.getOwnPropertyDescriptor,V=[].slice;function ue(s,l,d){return V.call(s,l,d)}function se(s,l){return l(s)}function oe(s){if(!s)throw new Error("Assertion Failed")}function G(s){o.setImmediate?setImmediate(s):setTimeout(s,0)}function J(s,l){if(typeof l=="string"&&b(s,l))return s[l];if(!l)return s;if(typeof l!="string"){for(var d=[],h=0,f=l.length;h<f;++h){var m=J(s,l[h]);d.push(m)}return d}var w=l.indexOf(".");if(w!==-1){var C=s[l.substr(0,w)];return C==null?void 0:J(C,l.substr(w+1))}}function he(s,l,d){if(s&&l!==void 0&&!("isFrozen"in Object&&Object.isFrozen(s)))if(typeof l!="string"&&"length"in l){oe(typeof d!="string"&&"length"in d);for(var h=0,f=l.length;h<f;++h)he(s,l[h],d[h])}else{var m,w,C=l.indexOf(".");C!==-1?(m=l.substr(0,C),(w=l.substr(C+1))===""?d===void 0?c(s)&&!isNaN(parseInt(m))?s.splice(m,1):delete s[m]:s[m]=d:he(C=!(C=s[m])||!b(s,m)?s[m]={}:C,w,d)):d===void 0?c(s)&&!isNaN(parseInt(l))?s.splice(l,1):delete s[l]:s[l]=d}}function $e(s){var l,d={};for(l in s)b(s,l)&&(d[l]=s[l]);return d}var Te=[].concat;function Ie(s){return Te.apply([],s)}var bn="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Ie([8,16,32,64].map(function(s){return["Int","Uint","Float"].map(function(l){return l+s+"Array"})}))).filter(function(s){return o[s]}),g=new Set(bn.map(function(s){return o[s]})),v=null;function S(s){return v=new WeakMap,s=(function l(d){if(!d||typeof d!="object")return d;var h=v.get(d);if(h)return h;if(c(d)){h=[],v.set(d,h);for(var f=0,m=d.length;f<m;++f)h.push(l(d[f]))}else if(g.has(d.constructor))h=d;else{var w,C=p(d);for(w in h=C===Object.prototype?{}:Object.create(C),v.set(d,h),d)b(d,w)&&(h[w]=l(d[w]))}return h})(s),v=null,s}var y={}.toString;function $(s){return y.call(s).slice(8,-1)}var ne=typeof Symbol<"u"?Symbol.iterator:"@@iterator",pe=typeof ne=="symbol"?function(s){var l;return s!=null&&(l=s[ne])&&l.apply(s)}:function(){return null};function K(s,l){return l=s.indexOf(l),0<=l&&s.splice(l,1),0<=l}var Q={};function Xe(s){var l,d,h,f;if(arguments.length===1){if(c(s))return s.slice();if(this===Q&&typeof s=="string")return[s];if(f=pe(s)){for(d=[];!(h=f.next()).done;)d.push(h.value);return d}if(s==null)return[s];if(typeof(l=s.length)!="number")return[s];for(d=new Array(l);l--;)d[l]=s[l];return d}for(l=arguments.length,d=new Array(l);l--;)d[l]=arguments[l];return d}var ct=typeof Symbol<"u"?function(s){return s[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Ae=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Nt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Ae),an={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function We(s,l){this.name=s,this.message=l}function Me(s,l){return s+". Errors: "+Object.keys(l).map(function(d){return l[d].toString()}).filter(function(d,h,f){return f.indexOf(d)===h}).join(`
`)}function Se(s,l,d,h){this.failures=l,this.failedKeys=h,this.successCount=d,this.message=Me(s,l)}function Oe(s,l){this.name="BulkError",this.failures=Object.keys(l).map(function(d){return l[d]}),this.failuresByPos=l,this.message=Me(s,this.failures)}R(We).from(Error).extend({toString:function(){return this.name+": "+this.message}}),R(Se).from(We),R(Oe).from(We);var Qe=Nt.reduce(function(s,l){return s[l]=l+"Error",s},{}),Re=We,ae=Nt.reduce(function(s,l){var d=l+"Error";function h(f,m){this.name=d,f?typeof f=="string"?(this.message="".concat(f).concat(m?`
 `+m:""),this.inner=m||null):typeof f=="object"&&(this.message="".concat(f.name," ").concat(f.message),this.inner=f):(this.message=an[l]||d,this.inner=null)}return R(h).from(Re),s[l]=h,s},{});ae.Syntax=SyntaxError,ae.Type=TypeError,ae.Range=RangeError;var Je=Ae.reduce(function(s,l){return s[l+"Error"]=ae[l],s},{}),Be=Nt.reduce(function(s,l){return["Syntax","Type","Range"].indexOf(l)===-1&&(s[l+"Error"]=ae[l]),s},{});function ye(){}function ke(s){return s}function Pt(s,l){return s==null||s===ke?l:function(d){return l(s(d))}}function fe(s,l){return function(){s.apply(this,arguments),l.apply(this,arguments)}}function Ze(s,l){return s===ye?l:function(){var d=s.apply(this,arguments);d!==void 0&&(arguments[0]=d);var h=this.onsuccess,f=this.onerror;this.onsuccess=null,this.onerror=null;var m=l.apply(this,arguments);return h&&(this.onsuccess=this.onsuccess?fe(h,this.onsuccess):h),f&&(this.onerror=this.onerror?fe(f,this.onerror):f),m!==void 0?m:d}}function kn(s,l){return s===ye?l:function(){s.apply(this,arguments);var d=this.onsuccess,h=this.onerror;this.onsuccess=this.onerror=null,l.apply(this,arguments),d&&(this.onsuccess=this.onsuccess?fe(d,this.onsuccess):d),h&&(this.onerror=this.onerror?fe(h,this.onerror):h)}}function nn(s,l){return s===ye?l:function(d){var h=s.apply(this,arguments);u(d,h);var f=this.onsuccess,m=this.onerror;return this.onsuccess=null,this.onerror=null,d=l.apply(this,arguments),f&&(this.onsuccess=this.onsuccess?fe(f,this.onsuccess):f),m&&(this.onerror=this.onerror?fe(m,this.onerror):m),h===void 0?d===void 0?void 0:d:u(h,d)}}function nt(s,l){return s===ye?l:function(){return l.apply(this,arguments)!==!1&&s.apply(this,arguments)}}function It(s,l){return s===ye?l:function(){var d=s.apply(this,arguments);if(d&&typeof d.then=="function"){for(var h=this,f=arguments.length,m=new Array(f);f--;)m[f]=arguments[f];return d.then(function(){return l.apply(h,m)})}return l.apply(this,arguments)}}Be.ModifyError=Se,Be.DexieError=We,Be.BulkError=Oe;var Le=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ke(s){Le=s}var kt={},it=100,bn=typeof Promise>"u"?[]:(function(){var s=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[s,p(s),s];var l=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[l,p(l),s]})(),Ae=bn[0],Nt=bn[1],bn=bn[2],Nt=Nt&&Nt.then,_e=Ae&&Ae.constructor,Rt=!!bn,Ve=function(s,l){ot.push([s,l]),ht&&(queueMicrotask(we),ht=!1)},wt=!0,ht=!0,st=[],Ue=[],ge=ke,et={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ye,pgp:!1,env:{},finalize:ye},ee=et,ot=[],pt=0,_t=[];function te(s){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var l=this._PSD=ee;if(typeof s!="function"){if(s!==kt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&ft(this,this._value))}this._state=null,this._value=null,++l.ref,(function d(h,f){try{f(function(m){if(h._state===null){if(m===h)throw new TypeError("A promise cannot be resolved with itself.");var w=h._lib&&Fe();m&&typeof m.then=="function"?d(h,function(C,_){m instanceof te?m._then(C,_):m.then(C,_)}):(h._state=!0,h._value=m,Cn(h)),w&&Ge()}},ft.bind(null,h))}catch(m){ft(h,m)}})(this,s)}var ln={get:function(){var s=ee,l=Kr;function d(h,f){var m=this,w=!s.global&&(s!==ee||l!==Kr),C=w&&!Sn(),_=new te(function(P,O){ce(m,new mn(Co(h,s,w,C),Co(f,s,w,C),P,O,s))});return this._consoleTask&&(_._consoleTask=this._consoleTask),_}return d.prototype=kt,d},set:function(s){F(this,"then",s&&s.prototype===kt?ln:{get:function(){return s},set:ln.set})}};function mn(s,l,d,h,f){this.onFulfilled=typeof s=="function"?s:null,this.onRejected=typeof l=="function"?l:null,this.resolve=d,this.reject=h,this.psd=f}function ft(s,l){var d,h;Ue.push(l),s._state===null&&(d=s._lib&&Fe(),l=ge(l),s._state=!1,s._value=l,h=s,st.some(function(f){return f._value===h._value})||st.push(h),Cn(s),d&&Ge())}function Cn(s){var l=s._listeners;s._listeners=[];for(var d=0,h=l.length;d<h;++d)ce(s,l[d]);var f=s._PSD;--f.ref||f.finalize(),pt===0&&(++pt,Ve(function(){--pt==0&&je()},[]))}function ce(s,l){if(s._state!==null){var d=s._state?l.onFulfilled:l.onRejected;if(d===null)return(s._state?l.resolve:l.reject)(s._value);++l.psd.ref,++pt,Ve(De,[d,s,l])}else s._listeners.push(l)}function De(s,l,d){try{var h,f=l._value;!l._state&&Ue.length&&(Ue=[]),h=Le&&l._consoleTask?l._consoleTask.run(function(){return s(f)}):s(f),l._state||Ue.indexOf(f)!==-1||(function(m){for(var w=st.length;w;)if(st[--w]._value===m._value)return st.splice(w,1)})(l),d.resolve(h)}catch(m){d.reject(m)}finally{--pt==0&&je(),--d.psd.ref||d.psd.finalize()}}function we(){Fn(et,function(){Fe()&&Ge()})}function Fe(){var s=wt;return ht=wt=!1,s}function Ge(){var s,l,d;do for(;0<ot.length;)for(s=ot,ot=[],d=s.length,l=0;l<d;++l){var h=s[l];h[0].apply(null,h[1])}while(0<ot.length);ht=wt=!0}function je(){var s=st;st=[],s.forEach(function(h){h._PSD.onunhandled.call(null,h._value,h)});for(var l=_t.slice(0),d=l.length;d;)l[--d]()}function rn(s){return new te(kt,!1,s)}function He(s,l){var d=ee;return function(){var h=Fe(),f=ee;try{return _n(d,!0),s.apply(this,arguments)}catch(m){l&&l(m)}finally{_n(f,!1),h&&Ge()}}}k(te.prototype,{then:ln,_then:function(s,l){ce(this,new mn(null,null,s,l,ee))},catch:function(s){if(arguments.length===1)return this.then(null,s);var l=s,d=arguments[1];return typeof l=="function"?this.then(null,function(h){return(h instanceof l?d:rn)(h)}):this.then(null,function(h){return(h&&h.name===l?d:rn)(h)})},finally:function(s){return this.then(function(l){return te.resolve(s()).then(function(){return l})},function(l){return te.resolve(s()).then(function(){return rn(l)})})},timeout:function(s,l){var d=this;return s<1/0?new te(function(h,f){var m=setTimeout(function(){return f(new ae.Timeout(l))},s);d.then(h,f).finally(clearTimeout.bind(null,m))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&F(te.prototype,Symbol.toStringTag,"Dexie.Promise"),et.env=ko(),k(te,{all:function(){var s=Xe.apply(null,arguments).map(Vr);return new te(function(l,d){s.length===0&&l([]);var h=s.length;s.forEach(function(f,m){return te.resolve(f).then(function(w){s[m]=w,--h||l(s)},d)})})},resolve:function(s){return s instanceof te?s:s&&typeof s.then=="function"?new te(function(l,d){s.then(l,d)}):new te(kt,!0,s)},reject:rn,race:function(){var s=Xe.apply(null,arguments).map(Vr);return new te(function(l,d){s.map(function(h){return te.resolve(h).then(l,d)})})},PSD:{get:function(){return ee},set:function(s){return ee=s}},totalEchoes:{get:function(){return Kr}},newPSD:En,usePSD:Fn,scheduler:{get:function(){return Ve},set:function(s){Ve=s}},rejectionMapper:{get:function(){return ge},set:function(s){ge=s}},follow:function(s,l){return new te(function(d,h){return En(function(f,m){var w=ee;w.unhandleds=[],w.onunhandled=m,w.finalize=fe(function(){var C,_=this;C=function(){_.unhandleds.length===0?f():m(_.unhandleds[0])},_t.push(function P(){C(),_t.splice(_t.indexOf(P),1)}),++pt,Ve(function(){--pt==0&&je()},[])},w.finalize),s()},l,d,h)})}}),_e&&(_e.allSettled&&F(te,"allSettled",function(){var s=Xe.apply(null,arguments).map(Vr);return new te(function(l){s.length===0&&l([]);var d=s.length,h=new Array(d);s.forEach(function(f,m){return te.resolve(f).then(function(w){return h[m]={status:"fulfilled",value:w}},function(w){return h[m]={status:"rejected",reason:w}}).then(function(){return--d||l(h)})})})}),_e.any&&typeof AggregateError<"u"&&F(te,"any",function(){var s=Xe.apply(null,arguments).map(Vr);return new te(function(l,d){s.length===0&&d(new AggregateError([]));var h=s.length,f=new Array(h);s.forEach(function(m,w){return te.resolve(m).then(function(C){return l(C)},function(C){f[w]=C,--h||d(new AggregateError(f))})})})}),_e.withResolvers&&(te.withResolvers=_e.withResolvers));var mt={awaits:0,echoes:0,id:0},qc=0,qr=[],Wr=0,Kr=0,Wc=0;function En(s,l,d,h){var f=ee,m=Object.create(f);return m.parent=f,m.ref=0,m.global=!1,m.id=++Wc,et.env,m.env=Rt?{Promise:te,PromiseProp:{value:te,configurable:!0,writable:!0},all:te.all,race:te.race,allSettled:te.allSettled,any:te.any,resolve:te.resolve,reject:te.reject}:{},l&&u(m,l),++f.ref,m.finalize=function(){--this.parent.ref||this.parent.finalize()},h=Fn(m,s,d,h),m.ref===0&&m.finalize(),h}function Zn(){return mt.id||(mt.id=++qc),++mt.awaits,mt.echoes+=it,mt.id}function Sn(){return!!mt.awaits&&(--mt.awaits==0&&(mt.id=0),mt.echoes=mt.awaits*it,!0)}function Vr(s){return mt.echoes&&s&&s.constructor===_e?(Zn(),s.then(function(l){return Sn(),l},function(l){return Sn(),at(l)})):s}function Kc(){var s=qr[qr.length-1];qr.pop(),_n(s,!1)}function _n(s,l){var d,h=ee;(l?!mt.echoes||Wr++&&s===ee:!Wr||--Wr&&s===ee)||queueMicrotask(l?function(f){++Kr,mt.echoes&&--mt.echoes!=0||(mt.echoes=mt.awaits=mt.id=0),qr.push(ee),_n(f,!0)}.bind(null,s):Kc),s!==ee&&(ee=s,h===et&&(et.env=ko()),Rt&&(d=et.env.Promise,l=s.env,(h.global||s.global)&&(Object.defineProperty(o,"Promise",l.PromiseProp),d.all=l.all,d.race=l.race,d.resolve=l.resolve,d.reject=l.reject,l.allSettled&&(d.allSettled=l.allSettled),l.any&&(d.any=l.any))))}function ko(){var s=o.Promise;return Rt?{Promise:s,PromiseProp:Object.getOwnPropertyDescriptor(o,"Promise"),all:s.all,race:s.race,allSettled:s.allSettled,any:s.any,resolve:s.resolve,reject:s.reject}:{}}function Fn(s,l,d,h,f){var m=ee;try{return _n(s,!0),l(d,h,f)}finally{_n(m,!1)}}function Co(s,l,d,h){return typeof s!="function"?s:function(){var f=ee;d&&Zn(),_n(l,!0);try{return s.apply(this,arguments)}finally{_n(f,!1),h&&queueMicrotask(Sn)}}}function Wi(s){Promise===_e&&mt.echoes===0?Wr===0?s():enqueueNativeMicroTask(s):setTimeout(s,0)}(""+Nt).indexOf("[native code]")===-1&&(Zn=Sn=ye);var at=te.reject,Mn="￿",gn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Eo="String expected.",er=[],Gr="__dbnames",Ki="readonly",Vi="readwrite";function Bn(s,l){return s?l?function(){return s.apply(this,arguments)&&l.apply(this,arguments)}:s:l}var So={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Yr(s){return typeof s!="string"||/\./.test(s)?function(l){return l}:function(l){return l[s]===void 0&&s in l&&delete(l=S(l))[s],l}}function _o(){throw ae.Type()}function Pe(s,l){try{var d=To(s),h=To(l);if(d!==h)return d==="Array"?1:h==="Array"?-1:d==="binary"?1:h==="binary"?-1:d==="string"?1:h==="string"?-1:d==="Date"?1:h!=="Date"?NaN:-1;switch(d){case"number":case"Date":case"string":return l<s?1:s<l?-1:0;case"binary":return(function(f,m){for(var w=f.length,C=m.length,_=w<C?w:C,P=0;P<_;++P)if(f[P]!==m[P])return f[P]<m[P]?-1:1;return w===C?0:w<C?-1:1})(Ao(s),Ao(l));case"Array":return(function(f,m){for(var w=f.length,C=m.length,_=w<C?w:C,P=0;P<_;++P){var O=Pe(f[P],m[P]);if(O!==0)return O}return w===C?0:w<C?-1:1})(s,l)}}catch{}return NaN}function To(s){var l=typeof s;return l!="object"?l:ArrayBuffer.isView(s)?"binary":(s=$(s),s==="ArrayBuffer"?"binary":s)}function Ao(s){return s instanceof Uint8Array?s:ArrayBuffer.isView(s)?new Uint8Array(s.buffer,s.byteOffset,s.byteLength):new Uint8Array(s)}var Po=(Ye.prototype._trans=function(s,l,d){var h=this._tx||ee.trans,f=this.name,m=Le&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(s==="readonly"?"read":"write"," ").concat(this.name));function w(P,O,E){if(!E.schema[f])throw new ae.NotFound("Table "+f+" not part of transaction");return l(E.idbtrans,E)}var C=Fe();try{var _=h&&h.db._novip===this.db._novip?h===ee.trans?h._promise(s,w,d):En(function(){return h._promise(s,w,d)},{trans:h,transless:ee.transless||ee}):(function P(O,E,z,A){if(O.idbdb&&(O._state.openComplete||ee.letThrough||O._vip)){var D=O._createTransaction(E,z,O._dbSchema);try{D.create(),O._state.PR1398_maxLoop=3}catch(j){return j.name===Qe.InvalidState&&O.isOpen()&&0<--O._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),O.close({disableAutoOpen:!1}),O.open().then(function(){return P(O,E,z,A)})):at(j)}return D._promise(E,function(j,I){return En(function(){return ee.trans=D,A(j,I,D)})}).then(function(j){if(E==="readwrite")try{D.idbtrans.commit()}catch{}return E==="readonly"?j:D._completion.then(function(){return j})})}if(O._state.openComplete)return at(new ae.DatabaseClosed(O._state.dbOpenError));if(!O._state.isBeingOpened){if(!O._state.autoOpen)return at(new ae.DatabaseClosed);O.open().catch(ye)}return O._state.dbReadyPromise.then(function(){return P(O,E,z,A)})})(this.db,s,[this.name],w);return m&&(_._consoleTask=m,_=_.catch(function(P){return console.trace(P),at(P)})),_}finally{C&&Ge()}},Ye.prototype.get=function(s,l){var d=this;return s&&s.constructor===Object?this.where(s).first(l):s==null?at(new ae.Type("Invalid argument to Table.get()")):this._trans("readonly",function(h){return d.core.get({trans:h,key:s}).then(function(f){return d.hook.reading.fire(f)})}).then(l)},Ye.prototype.where=function(s){if(typeof s=="string")return new this.db.WhereClause(this,s);if(c(s))return new this.db.WhereClause(this,"[".concat(s.join("+"),"]"));var l=a(s);if(l.length===1)return this.where(l[0]).equals(s[l[0]]);var d=this.schema.indexes.concat(this.schema.primKey).filter(function(C){if(C.compound&&l.every(function(P){return 0<=C.keyPath.indexOf(P)})){for(var _=0;_<l.length;++_)if(l.indexOf(C.keyPath[_])===-1)return!1;return!0}return!1}).sort(function(C,_){return C.keyPath.length-_.keyPath.length})[0];if(d&&this.db._maxKey!==Mn){var m=d.keyPath.slice(0,l.length);return this.where(m).equals(m.map(function(_){return s[_]}))}!d&&Le&&console.warn("The query ".concat(JSON.stringify(s)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(l.join("+"),"]"));var h=this.schema.idxByName;function f(C,_){return Pe(C,_)===0}var w=l.reduce(function(E,_){var P=E[0],O=E[1],E=h[_],z=s[_];return[P||E,P||!E?Bn(O,E&&E.multi?function(A){return A=J(A,_),c(A)&&A.some(function(D){return f(z,D)})}:function(A){return f(z,J(A,_))}):O]},[null,null]),m=w[0],w=w[1];return m?this.where(m.name).equals(s[m.keyPath]).filter(w):d?this.filter(w):this.where(l).equals("")},Ye.prototype.filter=function(s){return this.toCollection().and(s)},Ye.prototype.count=function(s){return this.toCollection().count(s)},Ye.prototype.offset=function(s){return this.toCollection().offset(s)},Ye.prototype.limit=function(s){return this.toCollection().limit(s)},Ye.prototype.each=function(s){return this.toCollection().each(s)},Ye.prototype.toArray=function(s){return this.toCollection().toArray(s)},Ye.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ye.prototype.orderBy=function(s){return new this.db.Collection(new this.db.WhereClause(this,c(s)?"[".concat(s.join("+"),"]"):s))},Ye.prototype.reverse=function(){return this.toCollection().reverse()},Ye.prototype.mapToClass=function(s){var l,d=this.db,h=this.name;function f(){return l!==null&&l.apply(this,arguments)||this}(this.schema.mappedClass=s).prototype instanceof _o&&((function(_,P){if(typeof P!="function"&&P!==null)throw new TypeError("Class extends value "+String(P)+" is not a constructor or null");function O(){this.constructor=_}r(_,P),_.prototype=P===null?Object.create(P):(O.prototype=P.prototype,new O)})(f,l=s),Object.defineProperty(f.prototype,"db",{get:function(){return d},enumerable:!1,configurable:!0}),f.prototype.table=function(){return h},s=f);for(var m=new Set,w=s.prototype;w;w=p(w))Object.getOwnPropertyNames(w).forEach(function(_){return m.add(_)});function C(_){if(!_)return _;var P,O=Object.create(s.prototype);for(P in _)if(!m.has(P))try{O[P]=_[P]}catch{}return O}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=C,this.hook("reading",C),s},Ye.prototype.defineClass=function(){return this.mapToClass(function(s){u(this,s)})},Ye.prototype.add=function(s,l){var d=this,h=this.schema.primKey,f=h.auto,m=h.keyPath,w=s;return m&&f&&(w=Yr(m)(s)),this._trans("readwrite",function(C){return d.core.mutate({trans:C,type:"add",keys:l!=null?[l]:null,values:[w]})}).then(function(C){return C.numFailures?te.reject(C.failures[0]):C.lastResult}).then(function(C){if(m)try{he(s,m,C)}catch{}return C})},Ye.prototype.update=function(s,l){return typeof s!="object"||c(s)?this.where(":id").equals(s).modify(l):(s=J(s,this.schema.primKey.keyPath),s===void 0?at(new ae.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(s).modify(l))},Ye.prototype.put=function(s,l){var d=this,h=this.schema.primKey,f=h.auto,m=h.keyPath,w=s;return m&&f&&(w=Yr(m)(s)),this._trans("readwrite",function(C){return d.core.mutate({trans:C,type:"put",values:[w],keys:l!=null?[l]:null})}).then(function(C){return C.numFailures?te.reject(C.failures[0]):C.lastResult}).then(function(C){if(m)try{he(s,m,C)}catch{}return C})},Ye.prototype.delete=function(s){var l=this;return this._trans("readwrite",function(d){return l.core.mutate({trans:d,type:"delete",keys:[s]})}).then(function(d){return d.numFailures?te.reject(d.failures[0]):void 0})},Ye.prototype.clear=function(){var s=this;return this._trans("readwrite",function(l){return s.core.mutate({trans:l,type:"deleteRange",range:So})}).then(function(l){return l.numFailures?te.reject(l.failures[0]):void 0})},Ye.prototype.bulkGet=function(s){var l=this;return this._trans("readonly",function(d){return l.core.getMany({keys:s,trans:d}).then(function(h){return h.map(function(f){return l.hook.reading.fire(f)})})})},Ye.prototype.bulkAdd=function(s,l,d){var h=this,f=Array.isArray(l)?l:void 0,m=(d=d||(f?void 0:l))?d.allKeys:void 0;return this._trans("readwrite",function(w){var P=h.schema.primKey,C=P.auto,P=P.keyPath;if(P&&f)throw new ae.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(f&&f.length!==s.length)throw new ae.InvalidArgument("Arguments objects and keys must have the same length");var _=s.length,P=P&&C?s.map(Yr(P)):s;return h.core.mutate({trans:w,type:"add",keys:f,values:P,wantResults:m}).then(function(D){var E=D.numFailures,z=D.results,A=D.lastResult,D=D.failures;if(E===0)return m?z:A;throw new Oe("".concat(h.name,".bulkAdd(): ").concat(E," of ").concat(_," operations failed"),D)})})},Ye.prototype.bulkPut=function(s,l,d){var h=this,f=Array.isArray(l)?l:void 0,m=(d=d||(f?void 0:l))?d.allKeys:void 0;return this._trans("readwrite",function(w){var P=h.schema.primKey,C=P.auto,P=P.keyPath;if(P&&f)throw new ae.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(f&&f.length!==s.length)throw new ae.InvalidArgument("Arguments objects and keys must have the same length");var _=s.length,P=P&&C?s.map(Yr(P)):s;return h.core.mutate({trans:w,type:"put",keys:f,values:P,wantResults:m}).then(function(D){var E=D.numFailures,z=D.results,A=D.lastResult,D=D.failures;if(E===0)return m?z:A;throw new Oe("".concat(h.name,".bulkPut(): ").concat(E," of ").concat(_," operations failed"),D)})})},Ye.prototype.bulkUpdate=function(s){var l=this,d=this.core,h=s.map(function(w){return w.key}),f=s.map(function(w){return w.changes}),m=[];return this._trans("readwrite",function(w){return d.getMany({trans:w,keys:h,cache:"clone"}).then(function(C){var _=[],P=[];s.forEach(function(E,z){var A=E.key,D=E.changes,j=C[z];if(j){for(var I=0,B=Object.keys(D);I<B.length;I++){var N=B[I],U=D[N];if(N===l.schema.primKey.keyPath){if(Pe(U,A)!==0)throw new ae.Constraint("Cannot update primary key in bulkUpdate()")}else he(j,N,U)}m.push(z),_.push(A),P.push(j)}});var O=_.length;return d.mutate({trans:w,type:"put",keys:_,values:P,updates:{keys:h,changeSpecs:f}}).then(function(E){var z=E.numFailures,A=E.failures;if(z===0)return O;for(var D=0,j=Object.keys(A);D<j.length;D++){var I,B=j[D],N=m[Number(B)];N!=null&&(I=A[B],delete A[B],A[N]=I)}throw new Oe("".concat(l.name,".bulkUpdate(): ").concat(z," of ").concat(O," operations failed"),A)})})})},Ye.prototype.bulkDelete=function(s){var l=this,d=s.length;return this._trans("readwrite",function(h){return l.core.mutate({trans:h,type:"delete",keys:s})}).then(function(w){var f=w.numFailures,m=w.lastResult,w=w.failures;if(f===0)return m;throw new Oe("".concat(l.name,".bulkDelete(): ").concat(f," of ").concat(d," operations failed"),w)})},Ye);function Ye(){}function br(s){function l(w,C){if(C){for(var _=arguments.length,P=new Array(_-1);--_;)P[_-1]=arguments[_];return d[w].subscribe.apply(null,P),s}if(typeof w=="string")return d[w]}var d={};l.addEventType=m;for(var h=1,f=arguments.length;h<f;++h)m(arguments[h]);return l;function m(w,C,_){if(typeof w!="object"){var P;C=C||nt;var O={subscribers:[],fire:_=_||ye,subscribe:function(E){O.subscribers.indexOf(E)===-1&&(O.subscribers.push(E),O.fire=C(O.fire,E))},unsubscribe:function(E){O.subscribers=O.subscribers.filter(function(z){return z!==E}),O.fire=O.subscribers.reduce(C,_)}};return d[w]=l[w]=O}a(P=w).forEach(function(E){var z=P[E];if(c(z))m(E,P[E][0],P[E][1]);else{if(z!=="asap")throw new ae.InvalidArgument("Invalid event config");var A=m(E,ke,function(){for(var D=arguments.length,j=new Array(D);D--;)j[D]=arguments[D];A.subscribers.forEach(function(I){G(function(){I.apply(null,j)})})})}})}}function yr(s,l){return R(l).from({prototype:s}),l}function tr(s,l){return!(s.filter||s.algorithm||s.or)&&(l?s.justLimit:!s.replayFilter)}function Gi(s,l){s.filter=Bn(s.filter,l)}function Yi(s,l,d){var h=s.replayFilter;s.replayFilter=h?function(){return Bn(h(),l())}:l,s.justLimit=d&&!h}function Xr(s,l){if(s.isPrimKey)return l.primaryKey;var d=l.getIndexByKeyPath(s.index);if(!d)throw new ae.Schema("KeyPath "+s.index+" on object store "+l.name+" is not indexed");return d}function Io(s,l,d){var h=Xr(s,l.schema);return l.openCursor({trans:d,values:!s.keysOnly,reverse:s.dir==="prev",unique:!!s.unique,query:{index:h,range:s.range}})}function Qr(s,l,d,h){var f=s.replayFilter?Bn(s.filter,s.replayFilter()):s.filter;if(s.or){var m={},w=function(C,_,P){var O,E;f&&!f(_,P,function(z){return _.stop(z)},function(z){return _.fail(z)})||((E=""+(O=_.primaryKey))=="[object ArrayBuffer]"&&(E=""+new Uint8Array(O)),b(m,E)||(m[E]=!0,l(C,_,P)))};return Promise.all([s.or._iterate(w,d),Ro(Io(s,h,d),s.algorithm,w,!s.keysOnly&&s.valueMapper)])}return Ro(Io(s,h,d),Bn(s.algorithm,f),l,!s.keysOnly&&s.valueMapper)}function Ro(s,l,d,h){var f=He(h?function(m,w,C){return d(h(m),w,C)}:d);return s.then(function(m){if(m)return m.start(function(){var w=function(){return m.continue()};l&&!l(m,function(C){return w=C},function(C){m.stop(C),w=ye},function(C){m.fail(C),w=ye})||f(m.value,m,function(C){return w=C}),w()})})}var bn=Symbol(),wr=(Do.prototype.execute=function(s){if(this.add!==void 0){var l=this.add;if(c(l))return n(n([],c(s)?s:[],!0),l).sort();if(typeof l=="number")return(Number(s)||0)+l;if(typeof l=="bigint")try{return BigInt(s)+l}catch{return BigInt(0)+l}throw new TypeError("Invalid term ".concat(l))}if(this.remove!==void 0){var d=this.remove;if(c(d))return c(s)?s.filter(function(h){return!d.includes(h)}).sort():[];if(typeof d=="number")return Number(s)-d;if(typeof d=="bigint")try{return BigInt(s)-d}catch{return BigInt(0)-d}throw new TypeError("Invalid subtrahend ".concat(d))}return l=(l=this.replacePrefix)===null||l===void 0?void 0:l[0],l&&typeof s=="string"&&s.startsWith(l)?this.replacePrefix[1]+s.substring(l.length):s},Do);function Do(s){Object.assign(this,s)}var Vc=(ze.prototype._read=function(s,l){var d=this._ctx;return d.error?d.table._trans(null,at.bind(null,d.error)):d.table._trans("readonly",s).then(l)},ze.prototype._write=function(s){var l=this._ctx;return l.error?l.table._trans(null,at.bind(null,l.error)):l.table._trans("readwrite",s,"locked")},ze.prototype._addAlgorithm=function(s){var l=this._ctx;l.algorithm=Bn(l.algorithm,s)},ze.prototype._iterate=function(s,l){return Qr(this._ctx,s,l,this._ctx.table.core)},ze.prototype.clone=function(s){var l=Object.create(this.constructor.prototype),d=Object.create(this._ctx);return s&&u(d,s),l._ctx=d,l},ze.prototype.raw=function(){return this._ctx.valueMapper=null,this},ze.prototype.each=function(s){var l=this._ctx;return this._read(function(d){return Qr(l,s,d,l.table.core)})},ze.prototype.count=function(s){var l=this;return this._read(function(d){var h=l._ctx,f=h.table.core;if(tr(h,!0))return f.count({trans:d,query:{index:Xr(h,f.schema),range:h.range}}).then(function(w){return Math.min(w,h.limit)});var m=0;return Qr(h,function(){return++m,!1},d,f).then(function(){return m})}).then(s)},ze.prototype.sortBy=function(s,l){var d=s.split(".").reverse(),h=d[0],f=d.length-1;function m(_,P){return P?m(_[d[P]],P-1):_[h]}var w=this._ctx.dir==="next"?1:-1;function C(_,P){return Pe(m(_,f),m(P,f))*w}return this.toArray(function(_){return _.sort(C)}).then(l)},ze.prototype.toArray=function(s){var l=this;return this._read(function(d){var h=l._ctx;if(h.dir==="next"&&tr(h,!0)&&0<h.limit){var f=h.valueMapper,m=Xr(h,h.table.core.schema);return h.table.core.query({trans:d,limit:h.limit,values:!0,query:{index:m,range:h.range}}).then(function(C){return C=C.result,f?C.map(f):C})}var w=[];return Qr(h,function(C){return w.push(C)},d,h.table.core).then(function(){return w})},s)},ze.prototype.offset=function(s){var l=this._ctx;return s<=0||(l.offset+=s,tr(l)?Yi(l,function(){var d=s;return function(h,f){return d===0||(d===1?--d:f(function(){h.advance(d),d=0}),!1)}}):Yi(l,function(){var d=s;return function(){return--d<0}})),this},ze.prototype.limit=function(s){return this._ctx.limit=Math.min(this._ctx.limit,s),Yi(this._ctx,function(){var l=s;return function(d,h,f){return--l<=0&&h(f),0<=l}},!0),this},ze.prototype.until=function(s,l){return Gi(this._ctx,function(d,h,f){return!s(d.value)||(h(f),l)}),this},ze.prototype.first=function(s){return this.limit(1).toArray(function(l){return l[0]}).then(s)},ze.prototype.last=function(s){return this.reverse().first(s)},ze.prototype.filter=function(s){var l;return Gi(this._ctx,function(d){return s(d.value)}),(l=this._ctx).isMatch=Bn(l.isMatch,s),this},ze.prototype.and=function(s){return this.filter(s)},ze.prototype.or=function(s){return new this.db.WhereClause(this._ctx.table,s,this)},ze.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},ze.prototype.desc=function(){return this.reverse()},ze.prototype.eachKey=function(s){var l=this._ctx;return l.keysOnly=!l.isMatch,this.each(function(d,h){s(h.key,h)})},ze.prototype.eachUniqueKey=function(s){return this._ctx.unique="unique",this.eachKey(s)},ze.prototype.eachPrimaryKey=function(s){var l=this._ctx;return l.keysOnly=!l.isMatch,this.each(function(d,h){s(h.primaryKey,h)})},ze.prototype.keys=function(s){var l=this._ctx;l.keysOnly=!l.isMatch;var d=[];return this.each(function(h,f){d.push(f.key)}).then(function(){return d}).then(s)},ze.prototype.primaryKeys=function(s){var l=this._ctx;if(l.dir==="next"&&tr(l,!0)&&0<l.limit)return this._read(function(h){var f=Xr(l,l.table.core.schema);return l.table.core.query({trans:h,values:!1,limit:l.limit,query:{index:f,range:l.range}})}).then(function(h){return h.result}).then(s);l.keysOnly=!l.isMatch;var d=[];return this.each(function(h,f){d.push(f.primaryKey)}).then(function(){return d}).then(s)},ze.prototype.uniqueKeys=function(s){return this._ctx.unique="unique",this.keys(s)},ze.prototype.firstKey=function(s){return this.limit(1).keys(function(l){return l[0]}).then(s)},ze.prototype.lastKey=function(s){return this.reverse().firstKey(s)},ze.prototype.distinct=function(){var s=this._ctx,s=s.index&&s.table.schema.idxByName[s.index];if(!s||!s.multi)return this;var l={};return Gi(this._ctx,function(f){var h=f.primaryKey.toString(),f=b(l,h);return l[h]=!0,!f}),this},ze.prototype.modify=function(s){var l=this,d=this._ctx;return this._write(function(h){var f,m,w;w=typeof s=="function"?s:(f=a(s),m=f.length,function(I){for(var B=!1,N=0;N<m;++N){var U=f[N],W=s[U],Y=J(I,U);W instanceof wr?(he(I,U,W.execute(Y)),B=!0):Y!==W&&(he(I,U,W),B=!0)}return B});var C=d.table.core,E=C.schema.primaryKey,_=E.outbound,P=E.extractKey,O=200,E=l.db._options.modifyChunkSize;E&&(O=typeof E=="object"?E[C.name]||E["*"]||200:E);function z(I,U){var N=U.failures,U=U.numFailures;D+=I-U;for(var W=0,Y=a(N);W<Y.length;W++){var ie=Y[W];A.push(N[ie])}}var A=[],D=0,j=[];return l.clone().primaryKeys().then(function(I){function B(U){var W=Math.min(O,I.length-U);return C.getMany({trans:h,keys:I.slice(U,U+W),cache:"immutable"}).then(function(Y){for(var ie=[],X=[],Z=_?[]:null,le=[],re=0;re<W;++re){var de=Y[re],xe={value:S(de),primKey:I[U+re]};w.call(xe,xe.value,xe)!==!1&&(xe.value==null?le.push(I[U+re]):_||Pe(P(de),P(xe.value))===0?(X.push(xe.value),_&&Z.push(I[U+re])):(le.push(I[U+re]),ie.push(xe.value)))}return Promise.resolve(0<ie.length&&C.mutate({trans:h,type:"add",values:ie}).then(function(Ce){for(var Ee in Ce.failures)le.splice(parseInt(Ee),1);z(ie.length,Ce)})).then(function(){return(0<X.length||N&&typeof s=="object")&&C.mutate({trans:h,type:"put",keys:Z,values:X,criteria:N,changeSpec:typeof s!="function"&&s,isAdditionalChunk:0<U}).then(function(Ce){return z(X.length,Ce)})}).then(function(){return(0<le.length||N&&s===Xi)&&C.mutate({trans:h,type:"delete",keys:le,criteria:N,isAdditionalChunk:0<U}).then(function(Ce){return z(le.length,Ce)})}).then(function(){return I.length>U+W&&B(U+O)})})}var N=tr(d)&&d.limit===1/0&&(typeof s!="function"||s===Xi)&&{index:d.index,range:d.range};return B(0).then(function(){if(0<A.length)throw new Se("Error modifying one or more objects",A,D,j);return I.length})})})},ze.prototype.delete=function(){var s=this._ctx,l=s.range;return tr(s)&&(s.isPrimKey||l.type===3)?this._write(function(d){var h=s.table.core.schema.primaryKey,f=l;return s.table.core.count({trans:d,query:{index:h,range:f}}).then(function(m){return s.table.core.mutate({trans:d,type:"deleteRange",range:f}).then(function(w){var C=w.failures;if(w.lastResult,w.results,w=w.numFailures,w)throw new Se("Could not delete some values",Object.keys(C).map(function(_){return C[_]}),m-w);return m-w})})}):this.modify(Xi)},ze);function ze(){}var Xi=function(s,l){return l.value=null};function Gc(s,l){return s<l?-1:s===l?0:1}function Yc(s,l){return l<s?-1:s===l?0:1}function Dt(s,l,d){return s=s instanceof jo?new s.Collection(s):s,s._ctx.error=new(d||TypeError)(l),s}function nr(s){return new s.Collection(s,function(){return Oo("")}).limit(0)}function Jr(s,l,d,h){var f,m,w,C,_,P,O,E=d.length;if(!d.every(function(D){return typeof D=="string"}))return Dt(s,Eo);function z(D){f=D==="next"?function(I){return I.toUpperCase()}:function(I){return I.toLowerCase()},m=D==="next"?function(I){return I.toLowerCase()}:function(I){return I.toUpperCase()},w=D==="next"?Gc:Yc;var j=d.map(function(I){return{lower:m(I),upper:f(I)}}).sort(function(I,B){return w(I.lower,B.lower)});C=j.map(function(I){return I.upper}),_=j.map(function(I){return I.lower}),O=(P=D)==="next"?"":h}z("next"),s=new s.Collection(s,function(){return Tn(C[0],_[E-1]+h)}),s._ondirectionchange=function(D){z(D)};var A=0;return s._addAlgorithm(function(D,j,I){var B=D.key;if(typeof B!="string")return!1;var N=m(B);if(l(N,_,A))return!0;for(var U=null,W=A;W<E;++W){var Y=(function(ie,X,Z,le,re,de){for(var xe=Math.min(ie.length,le.length),Ce=-1,Ee=0;Ee<xe;++Ee){var Ot=X[Ee];if(Ot!==le[Ee])return re(ie[Ee],Z[Ee])<0?ie.substr(0,Ee)+Z[Ee]+Z.substr(Ee+1):re(ie[Ee],le[Ee])<0?ie.substr(0,Ee)+le[Ee]+Z.substr(Ee+1):0<=Ce?ie.substr(0,Ce)+X[Ce]+Z.substr(Ce+1):null;re(ie[Ee],Ot)<0&&(Ce=Ee)}return xe<le.length&&de==="next"?ie+Z.substr(ie.length):xe<ie.length&&de==="prev"?ie.substr(0,Z.length):Ce<0?null:ie.substr(0,Ce)+le[Ce]+Z.substr(Ce+1)})(B,N,C[W],_[W],w,P);Y===null&&U===null?A=W+1:(U===null||0<w(U,Y))&&(U=Y)}return j(U!==null?function(){D.continue(U+O)}:I),!1}),s}function Tn(s,l,d,h){return{type:2,lower:s,upper:l,lowerOpen:d,upperOpen:h}}function Oo(s){return{type:1,lower:s,upper:s}}var jo=(Object.defineProperty(gt.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),gt.prototype.between=function(s,l,d,h){d=d!==!1,h=h===!0;try{return 0<this._cmp(s,l)||this._cmp(s,l)===0&&(d||h)&&(!d||!h)?nr(this):new this.Collection(this,function(){return Tn(s,l,!d,!h)})}catch{return Dt(this,gn)}},gt.prototype.equals=function(s){return s==null?Dt(this,gn):new this.Collection(this,function(){return Oo(s)})},gt.prototype.above=function(s){return s==null?Dt(this,gn):new this.Collection(this,function(){return Tn(s,void 0,!0)})},gt.prototype.aboveOrEqual=function(s){return s==null?Dt(this,gn):new this.Collection(this,function(){return Tn(s,void 0,!1)})},gt.prototype.below=function(s){return s==null?Dt(this,gn):new this.Collection(this,function(){return Tn(void 0,s,!1,!0)})},gt.prototype.belowOrEqual=function(s){return s==null?Dt(this,gn):new this.Collection(this,function(){return Tn(void 0,s)})},gt.prototype.startsWith=function(s){return typeof s!="string"?Dt(this,Eo):this.between(s,s+Mn,!0,!0)},gt.prototype.startsWithIgnoreCase=function(s){return s===""?this.startsWith(s):Jr(this,function(l,d){return l.indexOf(d[0])===0},[s],Mn)},gt.prototype.equalsIgnoreCase=function(s){return Jr(this,function(l,d){return l===d[0]},[s],"")},gt.prototype.anyOfIgnoreCase=function(){var s=Xe.apply(Q,arguments);return s.length===0?nr(this):Jr(this,function(l,d){return d.indexOf(l)!==-1},s,"")},gt.prototype.startsWithAnyOfIgnoreCase=function(){var s=Xe.apply(Q,arguments);return s.length===0?nr(this):Jr(this,function(l,d){return d.some(function(h){return l.indexOf(h)===0})},s,Mn)},gt.prototype.anyOf=function(){var s=this,l=Xe.apply(Q,arguments),d=this._cmp;try{l.sort(d)}catch{return Dt(this,gn)}if(l.length===0)return nr(this);var h=new this.Collection(this,function(){return Tn(l[0],l[l.length-1])});h._ondirectionchange=function(m){d=m==="next"?s._ascending:s._descending,l.sort(d)};var f=0;return h._addAlgorithm(function(m,w,C){for(var _=m.key;0<d(_,l[f]);)if(++f===l.length)return w(C),!1;return d(_,l[f])===0||(w(function(){m.continue(l[f])}),!1)}),h},gt.prototype.notEqual=function(s){return this.inAnyRange([[-1/0,s],[s,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},gt.prototype.noneOf=function(){var s=Xe.apply(Q,arguments);if(s.length===0)return new this.Collection(this);try{s.sort(this._ascending)}catch{return Dt(this,gn)}var l=s.reduce(function(d,h){return d?d.concat([[d[d.length-1][1],h]]):[[-1/0,h]]},null);return l.push([s[s.length-1],this.db._maxKey]),this.inAnyRange(l,{includeLowers:!1,includeUppers:!1})},gt.prototype.inAnyRange=function(B,l){var d=this,h=this._cmp,f=this._ascending,m=this._descending,w=this._min,C=this._max;if(B.length===0)return nr(this);if(!B.every(function(N){return N[0]!==void 0&&N[1]!==void 0&&f(N[0],N[1])<=0}))return Dt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ae.InvalidArgument);var _=!l||l.includeLowers!==!1,P=l&&l.includeUppers===!0,O,E=f;function z(N,U){return E(N[0],U[0])}try{(O=B.reduce(function(N,U){for(var W=0,Y=N.length;W<Y;++W){var ie=N[W];if(h(U[0],ie[1])<0&&0<h(U[1],ie[0])){ie[0]=w(ie[0],U[0]),ie[1]=C(ie[1],U[1]);break}}return W===Y&&N.push(U),N},[])).sort(z)}catch{return Dt(this,gn)}var A=0,D=P?function(N){return 0<f(N,O[A][1])}:function(N){return 0<=f(N,O[A][1])},j=_?function(N){return 0<m(N,O[A][0])}:function(N){return 0<=m(N,O[A][0])},I=D,B=new this.Collection(this,function(){return Tn(O[0][0],O[O.length-1][1],!_,!P)});return B._ondirectionchange=function(N){E=N==="next"?(I=D,f):(I=j,m),O.sort(z)},B._addAlgorithm(function(N,U,W){for(var Y,ie=N.key;I(ie);)if(++A===O.length)return U(W),!1;return!D(Y=ie)&&!j(Y)||(d._cmp(ie,O[A][1])===0||d._cmp(ie,O[A][0])===0||U(function(){E===f?N.continue(O[A][0]):N.continue(O[A][1])}),!1)}),B},gt.prototype.startsWithAnyOf=function(){var s=Xe.apply(Q,arguments);return s.every(function(l){return typeof l=="string"})?s.length===0?nr(this):this.inAnyRange(s.map(function(l){return[l,l+Mn]})):Dt(this,"startsWithAnyOf() only works with strings")},gt);function gt(){}function cn(s){return He(function(l){return vr(l),s(l.target.error),!1})}function vr(s){s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault()}var xr="storagemutated",Qi="x-storagemutated-1",An=br(null,xr),Xc=(dn.prototype._lock=function(){return oe(!ee.global),++this._reculock,this._reculock!==1||ee.global||(ee.lockOwnerFor=this),this},dn.prototype._unlock=function(){if(oe(!ee.global),--this._reculock==0)for(ee.global||(ee.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var s=this._blockedFuncs.shift();try{Fn(s[1],s[0])}catch{}}return this},dn.prototype._locked=function(){return this._reculock&&ee.lockOwnerFor!==this},dn.prototype.create=function(s){var l=this;if(!this.mode)return this;var d=this.db.idbdb,h=this.db._state.dbOpenError;if(oe(!this.idbtrans),!s&&!d)switch(h&&h.name){case"DatabaseClosedError":throw new ae.DatabaseClosed(h);case"MissingAPIError":throw new ae.MissingAPI(h.message,h);default:throw new ae.OpenFailed(h)}if(!this.active)throw new ae.TransactionInactive;return oe(this._completion._state===null),(s=this.idbtrans=s||(this.db.core||d).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=He(function(f){vr(f),l._reject(s.error)}),s.onabort=He(function(f){vr(f),l.active&&l._reject(new ae.Abort(s.error)),l.active=!1,l.on("abort").fire(f)}),s.oncomplete=He(function(){l.active=!1,l._resolve(),"mutatedParts"in s&&An.storagemutated.fire(s.mutatedParts)}),this},dn.prototype._promise=function(s,l,d){var h=this;if(s==="readwrite"&&this.mode!=="readwrite")return at(new ae.ReadOnly("Transaction is readonly"));if(!this.active)return at(new ae.TransactionInactive);if(this._locked())return new te(function(m,w){h._blockedFuncs.push([function(){h._promise(s,l,d).then(m,w)},ee])});if(d)return En(function(){var m=new te(function(w,C){h._lock();var _=l(w,C,h);_&&_.then&&_.then(w,C)});return m.finally(function(){return h._unlock()}),m._lib=!0,m});var f=new te(function(m,w){var C=l(m,w,h);C&&C.then&&C.then(m,w)});return f._lib=!0,f},dn.prototype._root=function(){return this.parent?this.parent._root():this},dn.prototype.waitFor=function(s){var l,d=this._root(),h=te.resolve(s);d._waitingFor?d._waitingFor=d._waitingFor.then(function(){return h}):(d._waitingFor=h,d._waitingQueue=[],l=d.idbtrans.objectStore(d.storeNames[0]),(function m(){for(++d._spinCount;d._waitingQueue.length;)d._waitingQueue.shift()();d._waitingFor&&(l.get(-1/0).onsuccess=m)})());var f=d._waitingFor;return new te(function(m,w){h.then(function(C){return d._waitingQueue.push(He(m.bind(null,C)))},function(C){return d._waitingQueue.push(He(w.bind(null,C)))}).finally(function(){d._waitingFor===f&&(d._waitingFor=null)})})},dn.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ae.Abort))},dn.prototype.table=function(s){var l=this._memoizedTables||(this._memoizedTables={});if(b(l,s))return l[s];var d=this.schema[s];if(!d)throw new ae.NotFound("Table "+s+" not part of transaction");return d=new this.db.Table(s,d,this),d.core=this.db.core.table(s),l[s]=d},dn);function dn(){}function Ji(s,l,d,h,f,m,w){return{name:s,keyPath:l,unique:d,multi:h,auto:f,compound:m,src:(d&&!w?"&":"")+(h?"*":"")+(f?"++":"")+zo(l)}}function zo(s){return typeof s=="string"?s:s?"["+[].join.call(s,"+")+"]":""}function Zi(s,l,d){return{name:s,primKey:l,indexes:d,mappedClass:null,idxByName:(h=function(f){return[f.name,f]},d.reduce(function(f,m,w){return w=h(m,w),w&&(f[w[0]]=w[1]),f},{}))};var h}var $r=function(s){try{return s.only([[]]),$r=function(){return[[]]},[[]]}catch{return $r=function(){return Mn},Mn}};function es(s){return s==null?function(){}:typeof s=="string"?(l=s).split(".").length===1?function(d){return d[l]}:function(d){return J(d,l)}:function(d){return J(d,s)};var l}function Lo(s){return[].slice.call(s)}var Qc=0;function kr(s){return s==null?":id":typeof s=="string"?s:"[".concat(s.join("+"),"]")}function Jc(s,l,_){function h(I){if(I.type===3)return null;if(I.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var A=I.lower,D=I.upper,j=I.lowerOpen,I=I.upperOpen;return A===void 0?D===void 0?null:l.upperBound(D,!!I):D===void 0?l.lowerBound(A,!!j):l.bound(A,D,!!j,!!I)}function f(z){var A,D=z.name;return{name:D,schema:z,mutate:function(j){var I=j.trans,B=j.type,N=j.keys,U=j.values,W=j.range;return new Promise(function(Y,ie){Y=He(Y);var X=I.objectStore(D),Z=X.keyPath==null,le=B==="put"||B==="add";if(!le&&B!=="delete"&&B!=="deleteRange")throw new Error("Invalid operation type: "+B);var re,de=(N||U||{length:1}).length;if(N&&U&&N.length!==U.length)throw new Error("Given keys array must have same length as given values array.");if(de===0)return Y({numFailures:0,failures:{},results:[],lastResult:void 0});function xe(Ct){++Ot,vr(Ct)}var Ce=[],Ee=[],Ot=0;if(B==="deleteRange"){if(W.type===4)return Y({numFailures:Ot,failures:Ee,results:[],lastResult:void 0});W.type===3?Ce.push(re=X.clear()):Ce.push(re=X.delete(h(W)))}else{var Z=le?Z?[U,N]:[U,null]:[N,null],ve=Z[0],xt=Z[1];if(le)for(var $t=0;$t<de;++$t)Ce.push(re=xt&&xt[$t]!==void 0?X[B](ve[$t],xt[$t]):X[B](ve[$t])),re.onerror=xe;else for($t=0;$t<de;++$t)Ce.push(re=X[B](ve[$t])),re.onerror=xe}function ui(Ct){Ct=Ct.target.result,Ce.forEach(function(Hn,ys){return Hn.error!=null&&(Ee[ys]=Hn.error)}),Y({numFailures:Ot,failures:Ee,results:B==="delete"?N:Ce.map(function(Hn){return Hn.result}),lastResult:Ct})}re.onerror=function(Ct){xe(Ct),ui(Ct)},re.onsuccess=ui})},getMany:function(j){var I=j.trans,B=j.keys;return new Promise(function(N,U){N=He(N);for(var W,Y=I.objectStore(D),ie=B.length,X=new Array(ie),Z=0,le=0,re=function(Ce){Ce=Ce.target,X[Ce._pos]=Ce.result,++le===Z&&N(X)},de=cn(U),xe=0;xe<ie;++xe)B[xe]!=null&&((W=Y.get(B[xe]))._pos=xe,W.onsuccess=re,W.onerror=de,++Z);Z===0&&N(X)})},get:function(j){var I=j.trans,B=j.key;return new Promise(function(N,U){N=He(N);var W=I.objectStore(D).get(B);W.onsuccess=function(Y){return N(Y.target.result)},W.onerror=cn(U)})},query:(A=P,function(j){return new Promise(function(I,B){I=He(I);var N,U,W,Z=j.trans,Y=j.values,ie=j.limit,re=j.query,X=ie===1/0?void 0:ie,le=re.index,re=re.range,Z=Z.objectStore(D),le=le.isPrimaryKey?Z:Z.index(le.name),re=h(re);if(ie===0)return I({result:[]});A?((X=Y?le.getAll(re,X):le.getAllKeys(re,X)).onsuccess=function(de){return I({result:de.target.result})},X.onerror=cn(B)):(N=0,U=!Y&&"openKeyCursor"in le?le.openKeyCursor(re):le.openCursor(re),W=[],U.onsuccess=function(de){var xe=U.result;return xe?(W.push(Y?xe.value:xe.primaryKey),++N===ie?I({result:W}):void xe.continue()):I({result:W})},U.onerror=cn(B))})}),openCursor:function(j){var I=j.trans,B=j.values,N=j.query,U=j.reverse,W=j.unique;return new Promise(function(Y,ie){Y=He(Y);var le=N.index,X=N.range,Z=I.objectStore(D),Z=le.isPrimaryKey?Z:Z.index(le.name),le=U?W?"prevunique":"prev":W?"nextunique":"next",re=!B&&"openKeyCursor"in Z?Z.openKeyCursor(h(X),le):Z.openCursor(h(X),le);re.onerror=cn(ie),re.onsuccess=He(function(de){var xe,Ce,Ee,Ot,ve=re.result;ve?(ve.___id=++Qc,ve.done=!1,xe=ve.continue.bind(ve),Ce=(Ce=ve.continuePrimaryKey)&&Ce.bind(ve),Ee=ve.advance.bind(ve),Ot=function(){throw new Error("Cursor not stopped")},ve.trans=I,ve.stop=ve.continue=ve.continuePrimaryKey=ve.advance=function(){throw new Error("Cursor not started")},ve.fail=He(ie),ve.next=function(){var xt=this,$t=1;return this.start(function(){return $t--?xt.continue():xt.stop()}).then(function(){return xt})},ve.start=function(xt){function $t(){if(re.result)try{xt()}catch(Ct){ve.fail(Ct)}else ve.done=!0,ve.start=function(){throw new Error("Cursor behind last entry")},ve.stop()}var ui=new Promise(function(Ct,Hn){Ct=He(Ct),re.onerror=cn(Hn),ve.fail=Hn,ve.stop=function(ys){ve.stop=ve.continue=ve.continuePrimaryKey=ve.advance=Ot,Ct(ys)}});return re.onsuccess=He(function(Ct){re.onsuccess=$t,$t()}),ve.continue=xe,ve.continuePrimaryKey=Ce,ve.advance=Ee,$t(),ui},Y(ve)):Y(null)},ie)})},count:function(j){var I=j.query,B=j.trans,N=I.index,U=I.range;return new Promise(function(W,Y){var ie=B.objectStore(D),X=N.isPrimaryKey?ie:ie.index(N.name),ie=h(U),X=ie?X.count(ie):X.count();X.onsuccess=He(function(Z){return W(Z.target.result)}),X.onerror=cn(Y)})}}}var m,w,C,O=(w=_,C=Lo((m=s).objectStoreNames),{schema:{name:m.name,tables:C.map(function(z){return w.objectStore(z)}).map(function(z){var A=z.keyPath,I=z.autoIncrement,D=c(A),j={},I={name:z.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:A==null,compound:D,keyPath:A,autoIncrement:I,unique:!0,extractKey:es(A)},indexes:Lo(z.indexNames).map(function(B){return z.index(B)}).map(function(W){var N=W.name,U=W.unique,Y=W.multiEntry,W=W.keyPath,Y={name:N,compound:c(W),keyPath:W,unique:U,multiEntry:Y,extractKey:es(W)};return j[kr(W)]=Y}),getIndexByKeyPath:function(B){return j[kr(B)]}};return j[":id"]=I.primaryKey,A!=null&&(j[kr(A)]=I.primaryKey),I})},hasGetAll:0<C.length&&"getAll"in w.objectStore(C[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),_=O.schema,P=O.hasGetAll,O=_.tables.map(f),E={};return O.forEach(function(z){return E[z.name]=z}),{stack:"dbcore",transaction:s.transaction.bind(s),table:function(z){if(!E[z])throw new Error("Table '".concat(z,"' not found"));return E[z]},MIN_KEY:-1/0,MAX_KEY:$r(l),schema:_}}function Zc(s,l,d,h){var f=d.IDBKeyRange;return d.indexedDB,{dbcore:(h=Jc(l,f,h),s.dbcore.reduce(function(m,w){return w=w.create,i(i({},m),w(m))},h))}}function Zr(s,h){var d=h.db,h=Zc(s._middlewares,d,s._deps,h);s.core=h.dbcore,s.tables.forEach(function(f){var m=f.name;s.core.schema.tables.some(function(w){return w.name===m})&&(f.core=s.core.table(m),s[m]instanceof s.Table&&(s[m].core=f.core))})}function ei(s,l,d,h){d.forEach(function(f){var m=h[f];l.forEach(function(w){var C=(function _(P,O){return H(P,O)||(P=p(P))&&_(P,O)})(w,f);(!C||"value"in C&&C.value===void 0)&&(w===s.Transaction.prototype||w instanceof s.Transaction?F(w,f,{get:function(){return this.table(f)},set:function(_){M(this,f,{value:_,writable:!0,configurable:!0,enumerable:!0})}}):w[f]=new s.Table(f,m))})})}function ts(s,l){l.forEach(function(d){for(var h in d)d[h]instanceof s.Table&&delete d[h]})}function ed(s,l){return s._cfg.version-l._cfg.version}function td(s,l,d,h){var f=s._dbSchema;d.objectStoreNames.contains("$meta")&&!f.$meta&&(f.$meta=Zi("$meta",Mo("")[0],[]),s._storeNames.push("$meta"));var m=s._createTransaction("readwrite",s._storeNames,f);m.create(d),m._completion.catch(h);var w=m._reject.bind(m),C=ee.transless||ee;En(function(){return ee.trans=m,ee.transless=C,l!==0?(Zr(s,d),P=l,((_=m).storeNames.includes("$meta")?_.table("$meta").get("version").then(function(O){return O??P}):te.resolve(P)).then(function(O){return z=O,A=m,D=d,j=[],O=(E=s)._versions,I=E._dbSchema=ni(0,E.idbdb,D),(O=O.filter(function(B){return B._cfg.version>=z})).length!==0?(O.forEach(function(B){j.push(function(){var N=I,U=B._cfg.dbschema;ri(E,N,D),ri(E,U,D),I=E._dbSchema=U;var W=ns(N,U);W.add.forEach(function(le){rs(D,le[0],le[1].primKey,le[1].indexes)}),W.change.forEach(function(le){if(le.recreate)throw new ae.Upgrade("Not yet support for changing primary key");var re=D.objectStore(le.name);le.add.forEach(function(de){return ti(re,de)}),le.change.forEach(function(de){re.deleteIndex(de.name),ti(re,de)}),le.del.forEach(function(de){return re.deleteIndex(de)})});var Y=B._cfg.contentUpgrade;if(Y&&B._cfg.version>z){Zr(E,D),A._memoizedTables={};var ie=$e(U);W.del.forEach(function(le){ie[le]=N[le]}),ts(E,[E.Transaction.prototype]),ei(E,[E.Transaction.prototype],a(ie),ie),A.schema=ie;var X,Z=ct(Y);return Z&&Zn(),W=te.follow(function(){var le;(X=Y(A))&&Z&&(le=Sn.bind(null,null),X.then(le,le))}),X&&typeof X.then=="function"?te.resolve(X):W.then(function(){return X})}}),j.push(function(N){var U,W,Y=B._cfg.dbschema;U=Y,W=N,[].slice.call(W.db.objectStoreNames).forEach(function(ie){return U[ie]==null&&W.db.deleteObjectStore(ie)}),ts(E,[E.Transaction.prototype]),ei(E,[E.Transaction.prototype],E._storeNames,E._dbSchema),A.schema=E._dbSchema}),j.push(function(N){E.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(E.idbdb.version/10)===B._cfg.version?(E.idbdb.deleteObjectStore("$meta"),delete E._dbSchema.$meta,E._storeNames=E._storeNames.filter(function(U){return U!=="$meta"})):N.objectStore("$meta").put(B._cfg.version,"version"))})}),(function B(){return j.length?te.resolve(j.shift()(A.idbtrans)).then(B):te.resolve()})().then(function(){Fo(I,D)})):te.resolve();var E,z,A,D,j,I}).catch(w)):(a(f).forEach(function(O){rs(d,O,f[O].primKey,f[O].indexes)}),Zr(s,d),void te.follow(function(){return s.on.populate.fire(m)}).catch(w));var _,P})}function nd(s,l){Fo(s._dbSchema,l),l.db.version%10!=0||l.objectStoreNames.contains("$meta")||l.db.createObjectStore("$meta").add(Math.ceil(l.db.version/10-1),"version");var d=ni(0,s.idbdb,l);ri(s,s._dbSchema,l);for(var h=0,f=ns(d,s._dbSchema).change;h<f.length;h++){var m=(function(w){if(w.change.length||w.recreate)return console.warn("Unable to patch indexes of table ".concat(w.name," because it has changes on the type of index or primary key.")),{value:void 0};var C=l.objectStore(w.name);w.add.forEach(function(_){Le&&console.debug("Dexie upgrade patch: Creating missing index ".concat(w.name,".").concat(_.src)),ti(C,_)})})(f[h]);if(typeof m=="object")return m.value}}function ns(s,l){var d,h={del:[],add:[],change:[]};for(d in s)l[d]||h.del.push(d);for(d in l){var f=s[d],m=l[d];if(f){var w={name:d,def:m,recreate:!1,del:[],add:[],change:[]};if(""+(f.primKey.keyPath||"")!=""+(m.primKey.keyPath||"")||f.primKey.auto!==m.primKey.auto)w.recreate=!0,h.change.push(w);else{var C=f.idxByName,_=m.idxByName,P=void 0;for(P in C)_[P]||w.del.push(P);for(P in _){var O=C[P],E=_[P];O?O.src!==E.src&&w.change.push(E):w.add.push(E)}(0<w.del.length||0<w.add.length||0<w.change.length)&&h.change.push(w)}}else h.add.push([d,m])}return h}function rs(s,l,d,h){var f=s.db.createObjectStore(l,d.keyPath?{keyPath:d.keyPath,autoIncrement:d.auto}:{autoIncrement:d.auto});return h.forEach(function(m){return ti(f,m)}),f}function Fo(s,l){a(s).forEach(function(d){l.db.objectStoreNames.contains(d)||(Le&&console.debug("Dexie: Creating missing table",d),rs(l,d,s[d].primKey,s[d].indexes))})}function ti(s,l){s.createIndex(l.name,l.keyPath,{unique:l.unique,multiEntry:l.multi})}function ni(s,l,d){var h={};return ue(l.objectStoreNames,0).forEach(function(f){for(var m=d.objectStore(f),w=Ji(zo(P=m.keyPath),P||"",!0,!1,!!m.autoIncrement,P&&typeof P!="string",!0),C=[],_=0;_<m.indexNames.length;++_){var O=m.index(m.indexNames[_]),P=O.keyPath,O=Ji(O.name,P,!!O.unique,!!O.multiEntry,!1,P&&typeof P!="string",!1);C.push(O)}h[f]=Zi(f,w,C)}),h}function ri(s,l,d){for(var h=d.db.objectStoreNames,f=0;f<h.length;++f){var m=h[f],w=d.objectStore(m);s._hasGetAll="getAll"in w;for(var C=0;C<w.indexNames.length;++C){var _=w.indexNames[C],P=w.index(_).keyPath,O=typeof P=="string"?P:"["+ue(P).join("+")+"]";!l[m]||(P=l[m].idxByName[O])&&(P.name=_,delete l[m].idxByName[O],l[m].idxByName[_]=P)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&o.WorkerGlobalScope&&o instanceof o.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(s._hasGetAll=!1)}function Mo(s){return s.split(",").map(function(l,d){var h=(l=l.trim()).replace(/([&*]|\+\+)/g,""),f=/^\[/.test(h)?h.match(/^\[(.*)\]$/)[1].split("+"):h;return Ji(h,f||null,/\&/.test(l),/\*/.test(l),/\+\+/.test(l),c(f),d===0)})}var rd=(ii.prototype._parseStoresSpec=function(s,l){a(s).forEach(function(d){if(s[d]!==null){var h=Mo(s[d]),f=h.shift();if(f.unique=!0,f.multi)throw new ae.Schema("Primary key cannot be multi-valued");h.forEach(function(m){if(m.auto)throw new ae.Schema("Only primary key can be marked as autoIncrement (++)");if(!m.keyPath)throw new ae.Schema("Index must have a name and cannot be an empty string")}),l[d]=Zi(d,f,h)}})},ii.prototype.stores=function(d){var l=this.db;this._cfg.storesSource=this._cfg.storesSource?u(this._cfg.storesSource,d):d;var d=l._versions,h={},f={};return d.forEach(function(m){u(h,m._cfg.storesSource),f=m._cfg.dbschema={},m._parseStoresSpec(h,f)}),l._dbSchema=f,ts(l,[l._allTables,l,l.Transaction.prototype]),ei(l,[l._allTables,l,l.Transaction.prototype,this._cfg.tables],a(f),f),l._storeNames=a(f),this},ii.prototype.upgrade=function(s){return this._cfg.contentUpgrade=It(this._cfg.contentUpgrade||ye,s),this},ii);function ii(){}function is(s,l){var d=s._dbNamesDB;return d||(d=s._dbNamesDB=new yn(Gr,{addons:[],indexedDB:s,IDBKeyRange:l})).version(1).stores({dbnames:"name"}),d.table("dbnames")}function ss(s){return s&&typeof s.databases=="function"}function os(s){return En(function(){return ee.letThrough=!0,s()})}function as(s){return!("from"in s)}var vt=function(s,l){if(!this){var d=new vt;return s&&"d"in s&&u(d,s),d}u(this,arguments.length?{d:1,from:s,to:1<arguments.length?l:s}:{d:0})};function Cr(s,l,d){var h=Pe(l,d);if(!isNaN(h)){if(0<h)throw RangeError();if(as(s))return u(s,{from:l,to:d,d:1});var f=s.l,h=s.r;if(Pe(d,s.from)<0)return f?Cr(f,l,d):s.l={from:l,to:d,d:1,l:null,r:null},No(s);if(0<Pe(l,s.to))return h?Cr(h,l,d):s.r={from:l,to:d,d:1,l:null,r:null},No(s);Pe(l,s.from)<0&&(s.from=l,s.l=null,s.d=h?h.d+1:1),0<Pe(d,s.to)&&(s.to=d,s.r=null,s.d=s.l?s.l.d+1:1),d=!s.r,f&&!s.l&&Er(s,f),h&&d&&Er(s,h)}}function Er(s,l){as(l)||(function d(h,_){var m=_.from,w=_.to,C=_.l,_=_.r;Cr(h,m,w),C&&d(h,C),_&&d(h,_)})(s,l)}function Bo(s,l){var d=si(l),h=d.next();if(h.done)return!1;for(var f=h.value,m=si(s),w=m.next(f.from),C=w.value;!h.done&&!w.done;){if(Pe(C.from,f.to)<=0&&0<=Pe(C.to,f.from))return!0;Pe(f.from,C.from)<0?f=(h=d.next(C.from)).value:C=(w=m.next(f.from)).value}return!1}function si(s){var l=as(s)?null:{s:0,n:s};return{next:function(d){for(var h=0<arguments.length;l;)switch(l.s){case 0:if(l.s=1,h)for(;l.n.l&&Pe(d,l.n.from)<0;)l={up:l,n:l.n.l,s:1};else for(;l.n.l;)l={up:l,n:l.n.l,s:1};case 1:if(l.s=2,!h||Pe(d,l.n.to)<=0)return{value:l.n,done:!1};case 2:if(l.n.r){l.s=3,l={up:l,n:l.n.r,s:0};continue}case 3:l=l.up}return{done:!0}}}}function No(s){var l,d,h=(((l=s.r)===null||l===void 0?void 0:l.d)||0)-(((d=s.l)===null||d===void 0?void 0:d.d)||0),f=1<h?"r":h<-1?"l":"";f&&(l=f=="r"?"l":"r",d=i({},s),h=s[f],s.from=h.from,s.to=h.to,s[f]=h[f],d[f]=h[l],(s[l]=d).d=Uo(d)),s.d=Uo(s)}function Uo(d){var l=d.r,d=d.l;return(l?d?Math.max(l.d,d.d):l.d:d?d.d:0)+1}function oi(s,l){return a(l).forEach(function(d){s[d]?Er(s[d],l[d]):s[d]=(function h(f){var m,w,C={};for(m in f)b(f,m)&&(w=f[m],C[m]=!w||typeof w!="object"||g.has(w.constructor)?w:h(w));return C})(l[d])}),s}function ls(s,l){return s.all||l.all||Object.keys(s).some(function(d){return l[d]&&Bo(l[d],s[d])})}k(vt.prototype,((Nt={add:function(s){return Er(this,s),this},addKey:function(s){return Cr(this,s,s),this},addKeys:function(s){var l=this;return s.forEach(function(d){return Cr(l,d,d)}),this},hasKey:function(s){var l=si(this).next(s).value;return l&&Pe(l.from,s)<=0&&0<=Pe(l.to,s)}})[ne]=function(){return si(this)},Nt));var Nn={},cs={},ds=!1;function ai(s){oi(cs,s),ds||(ds=!0,setTimeout(function(){ds=!1,us(cs,!(cs={}))},0))}function us(s,l){l===void 0&&(l=!1);var d=new Set;if(s.all)for(var h=0,f=Object.values(Nn);h<f.length;h++)Ho(w=f[h],s,d,l);else for(var m in s){var w,C=/^idb\:\/\/(.*)\/(.*)\//.exec(m);C&&(m=C[1],C=C[2],(w=Nn["idb://".concat(m,"/").concat(C)])&&Ho(w,s,d,l))}d.forEach(function(_){return _()})}function Ho(s,l,d,h){for(var f=[],m=0,w=Object.entries(s.queries.query);m<w.length;m++){for(var C=w[m],_=C[0],P=[],O=0,E=C[1];O<E.length;O++){var z=E[O];ls(l,z.obsSet)?z.subscribers.forEach(function(I){return d.add(I)}):h&&P.push(z)}h&&f.push([_,P])}if(h)for(var A=0,D=f;A<D.length;A++){var j=D[A],_=j[0],P=j[1];s.queries.query[_]=P}}function id(s){var l=s._state,d=s._deps.indexedDB;if(l.isBeingOpened||s.idbdb)return l.dbReadyPromise.then(function(){return l.dbOpenError?at(l.dbOpenError):s});l.isBeingOpened=!0,l.dbOpenError=null,l.openComplete=!1;var h=l.openCanceller,f=Math.round(10*s.verno),m=!1;function w(){if(l.openCanceller!==h)throw new ae.DatabaseClosed("db.open() was cancelled")}function C(){return new te(function(z,A){if(w(),!d)throw new ae.MissingAPI;var D=s.name,j=l.autoSchema||!f?d.open(D):d.open(D,f);if(!j)throw new ae.MissingAPI;j.onerror=cn(A),j.onblocked=He(s._fireOnBlocked),j.onupgradeneeded=He(function(I){var B;O=j.transaction,l.autoSchema&&!s._options.allowEmptyDB?(j.onerror=vr,O.abort(),j.result.close(),(B=d.deleteDatabase(D)).onsuccess=B.onerror=He(function(){A(new ae.NoSuchDatabase("Database ".concat(D," doesnt exist")))})):(O.onerror=cn(A),I=I.oldVersion>Math.pow(2,62)?0:I.oldVersion,E=I<1,s.idbdb=j.result,m&&nd(s,O),td(s,I/10,O,A))},A),j.onsuccess=He(function(){O=null;var I,B,N,U,W,Y=s.idbdb=j.result,ie=ue(Y.objectStoreNames);if(0<ie.length)try{var X=Y.transaction((U=ie).length===1?U[0]:U,"readonly");if(l.autoSchema)B=Y,N=X,(I=s).verno=B.version/10,N=I._dbSchema=ni(0,B,N),I._storeNames=ue(B.objectStoreNames,0),ei(I,[I._allTables],a(N),N);else if(ri(s,s._dbSchema,X),((W=ns(ni(0,(W=s).idbdb,X),W._dbSchema)).add.length||W.change.some(function(Z){return Z.add.length||Z.change.length}))&&!m)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),Y.close(),f=Y.version+1,m=!0,z(C());Zr(s,X)}catch{}er.push(s),Y.onversionchange=He(function(Z){l.vcFired=!0,s.on("versionchange").fire(Z)}),Y.onclose=He(function(Z){s.on("close").fire(Z)}),E&&(W=s._deps,X=D,Y=W.indexedDB,W=W.IDBKeyRange,ss(Y)||X===Gr||is(Y,W).put({name:X}).catch(ye)),z()},A)}).catch(function(z){switch(z?.name){case"UnknownError":if(0<l.PR1398_maxLoop)return l.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),C();break;case"VersionError":if(0<f)return f=0,C()}return te.reject(z)})}var _,P=l.dbReadyResolve,O=null,E=!1;return te.race([h,(typeof navigator>"u"?te.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(z){function A(){return indexedDB.databases().finally(z)}_=setInterval(A,100),A()}).finally(function(){return clearInterval(_)}):Promise.resolve()).then(C)]).then(function(){return w(),l.onReadyBeingFired=[],te.resolve(os(function(){return s.on.ready.fire(s.vip)})).then(function z(){if(0<l.onReadyBeingFired.length){var A=l.onReadyBeingFired.reduce(It,ye);return l.onReadyBeingFired=[],te.resolve(os(function(){return A(s.vip)})).then(z)}})}).finally(function(){l.openCanceller===h&&(l.onReadyBeingFired=null,l.isBeingOpened=!1)}).catch(function(z){l.dbOpenError=z;try{O&&O.abort()}catch{}return h===l.openCanceller&&s._close(),at(z)}).finally(function(){l.openComplete=!0,P()}).then(function(){var z;return E&&(z={},s.tables.forEach(function(A){A.schema.indexes.forEach(function(D){D.name&&(z["idb://".concat(s.name,"/").concat(A.name,"/").concat(D.name)]=new vt(-1/0,[[[]]]))}),z["idb://".concat(s.name,"/").concat(A.name,"/")]=z["idb://".concat(s.name,"/").concat(A.name,"/:dels")]=new vt(-1/0,[[[]]])}),An(xr).fire(z),us(z,!0)),s})}function hs(s){function l(m){return s.next(m)}var d=f(l),h=f(function(m){return s.throw(m)});function f(m){return function(_){var C=m(_),_=C.value;return C.done?_:_&&typeof _.then=="function"?_.then(d,h):c(_)?Promise.all(_).then(d,h):d(_)}}return f(l)()}function li(s,l,d){for(var h=c(s)?s.slice():[s],f=0;f<d;++f)h.push(l);return h}var sd={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(s){return i(i({},s),{table:function(l){var d=s.table(l),h=d.schema,f={},m=[];function w(E,z,A){var D=kr(E),j=f[D]=f[D]||[],I=E==null?0:typeof E=="string"?1:E.length,B=0<z,B=i(i({},A),{name:B?"".concat(D,"(virtual-from:").concat(A.name,")"):A.name,lowLevelIndex:A,isVirtual:B,keyTail:z,keyLength:I,extractKey:es(E),unique:!B&&A.unique});return j.push(B),B.isPrimaryKey||m.push(B),1<I&&w(I===2?E[0]:E.slice(0,I-1),z+1,A),j.sort(function(N,U){return N.keyTail-U.keyTail}),B}l=w(h.primaryKey.keyPath,0,h.primaryKey),f[":id"]=[l];for(var C=0,_=h.indexes;C<_.length;C++){var P=_[C];w(P.keyPath,0,P)}function O(E){var z,A=E.query.index;return A.isVirtual?i(i({},E),{query:{index:A.lowLevelIndex,range:(z=E.query.range,A=A.keyTail,{type:z.type===1?2:z.type,lower:li(z.lower,z.lowerOpen?s.MAX_KEY:s.MIN_KEY,A),lowerOpen:!0,upper:li(z.upper,z.upperOpen?s.MIN_KEY:s.MAX_KEY,A),upperOpen:!0})}}):E}return i(i({},d),{schema:i(i({},h),{primaryKey:l,indexes:m,getIndexByKeyPath:function(E){return(E=f[kr(E)])&&E[0]}}),count:function(E){return d.count(O(E))},query:function(E){return d.query(O(E))},openCursor:function(E){var z=E.query.index,A=z.keyTail,D=z.isVirtual,j=z.keyLength;return D?d.openCursor(O(E)).then(function(B){return B&&I(B)}):d.openCursor(E);function I(B){return Object.create(B,{continue:{value:function(N){N!=null?B.continue(li(N,E.reverse?s.MAX_KEY:s.MIN_KEY,A)):E.unique?B.continue(B.key.slice(0,j).concat(E.reverse?s.MIN_KEY:s.MAX_KEY,A)):B.continue()}},continuePrimaryKey:{value:function(N,U){B.continuePrimaryKey(li(N,s.MAX_KEY,A),U)}},primaryKey:{get:function(){return B.primaryKey}},key:{get:function(){var N=B.key;return j===1?N[0]:N.slice(0,j)}},value:{get:function(){return B.value}}})}}})}})}};function fs(s,l,d,h){return d=d||{},h=h||"",a(s).forEach(function(f){var m,w,C;b(l,f)?(m=s[f],w=l[f],typeof m=="object"&&typeof w=="object"&&m&&w?(C=$(m))!==$(w)?d[h+f]=l[f]:C==="Object"?fs(m,w,d,h+f+"."):m!==w&&(d[h+f]=l[f]):m!==w&&(d[h+f]=l[f])):d[h+f]=void 0}),a(l).forEach(function(f){b(s,f)||(d[h+f]=l[f])}),d}function ps(s,l){return l.type==="delete"?l.keys:l.keys||l.values.map(s.extractKey)}var od={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(s){return i(i({},s),{table:function(l){var d=s.table(l),h=d.schema.primaryKey;return i(i({},d),{mutate:function(f){var m=ee.trans,w=m.table(l).hook,C=w.deleting,_=w.creating,P=w.updating;switch(f.type){case"add":if(_.fire===ye)break;return m._promise("readwrite",function(){return O(f)},!0);case"put":if(_.fire===ye&&P.fire===ye)break;return m._promise("readwrite",function(){return O(f)},!0);case"delete":if(C.fire===ye)break;return m._promise("readwrite",function(){return O(f)},!0);case"deleteRange":if(C.fire===ye)break;return m._promise("readwrite",function(){return(function E(z,A,D){return d.query({trans:z,values:!1,query:{index:h,range:A},limit:D}).then(function(j){var I=j.result;return O({type:"delete",keys:I,trans:z}).then(function(B){return 0<B.numFailures?Promise.reject(B.failures[0]):I.length<D?{failures:[],numFailures:0,lastResult:void 0}:E(z,i(i({},A),{lower:I[I.length-1],lowerOpen:!0}),D)})})})(f.trans,f.range,1e4)},!0)}return d.mutate(f);function O(E){var z,A,D,j=ee.trans,I=E.keys||ps(h,E);if(!I)throw new Error("Keys missing");return(E=E.type==="add"||E.type==="put"?i(i({},E),{keys:I}):i({},E)).type!=="delete"&&(E.values=n([],E.values)),E.keys&&(E.keys=n([],E.keys)),z=d,D=I,((A=E).type==="add"?Promise.resolve([]):z.getMany({trans:A.trans,keys:D,cache:"immutable"})).then(function(B){var N=I.map(function(U,W){var Y,ie,X,Z=B[W],le={onerror:null,onsuccess:null};return E.type==="delete"?C.fire.call(le,U,Z,j):E.type==="add"||Z===void 0?(Y=_.fire.call(le,U,E.values[W],j),U==null&&Y!=null&&(E.keys[W]=U=Y,h.outbound||he(E.values[W],h.keyPath,U))):(Y=fs(Z,E.values[W]),(ie=P.fire.call(le,Y,U,Z,j))&&(X=E.values[W],Object.keys(ie).forEach(function(re){b(X,re)?X[re]=ie[re]:he(X,re,ie[re])}))),le});return d.mutate(E).then(function(U){for(var W=U.failures,Y=U.results,ie=U.numFailures,U=U.lastResult,X=0;X<I.length;++X){var Z=(Y||I)[X],le=N[X];Z==null?le.onerror&&le.onerror(W[X]):le.onsuccess&&le.onsuccess(E.type==="put"&&B[X]?E.values[X]:Z)}return{failures:W,results:Y,numFailures:ie,lastResult:U}}).catch(function(U){return N.forEach(function(W){return W.onerror&&W.onerror(U)}),Promise.reject(U)})})}}})}})}};function qo(s,l,d){try{if(!l||l.keys.length<s.length)return null;for(var h=[],f=0,m=0;f<l.keys.length&&m<s.length;++f)Pe(l.keys[f],s[m])===0&&(h.push(d?S(l.values[f]):l.values[f]),++m);return h.length===s.length?h:null}catch{return null}}var ad={stack:"dbcore",level:-1,create:function(s){return{table:function(l){var d=s.table(l);return i(i({},d),{getMany:function(h){if(!h.cache)return d.getMany(h);var f=qo(h.keys,h.trans._cache,h.cache==="clone");return f?te.resolve(f):d.getMany(h).then(function(m){return h.trans._cache={keys:h.keys,values:h.cache==="clone"?S(m):m},m})},mutate:function(h){return h.type!=="add"&&(h.trans._cache=null),d.mutate(h)}})}}}};function Wo(s,l){return s.trans.mode==="readonly"&&!!s.subscr&&!s.trans.explicit&&s.trans.db._options.cache!=="disabled"&&!l.schema.primaryKey.outbound}function Ko(s,l){switch(s){case"query":return l.values&&!l.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var ld={stack:"dbcore",level:0,name:"Observability",create:function(s){var l=s.schema.name,d=new vt(s.MIN_KEY,s.MAX_KEY);return i(i({},s),{transaction:function(h,f,m){if(ee.subscr&&f!=="readonly")throw new ae.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ee.querier));return s.transaction(h,f,m)},table:function(h){var f=s.table(h),m=f.schema,w=m.primaryKey,E=m.indexes,C=w.extractKey,_=w.outbound,P=w.autoIncrement&&E.filter(function(A){return A.compound&&A.keyPath.includes(w.keyPath)}),O=i(i({},f),{mutate:function(A){function D(re){return re="idb://".concat(l,"/").concat(h,"/").concat(re),U[re]||(U[re]=new vt)}var j,I,B,N=A.trans,U=A.mutatedParts||(A.mutatedParts={}),W=D(""),Y=D(":dels"),ie=A.type,le=A.type==="deleteRange"?[A.range]:A.type==="delete"?[A.keys]:A.values.length<50?[ps(w,A).filter(function(re){return re}),A.values]:[],X=le[0],Z=le[1],le=A.trans._cache;return c(X)?(W.addKeys(X),(le=ie==="delete"||X.length===Z.length?qo(X,le):null)||Y.addKeys(X),(le||Z)&&(j=D,I=le,B=Z,m.indexes.forEach(function(re){var de=j(re.name||"");function xe(Ee){return Ee!=null?re.extractKey(Ee):null}function Ce(Ee){return re.multiEntry&&c(Ee)?Ee.forEach(function(Ot){return de.addKey(Ot)}):de.addKey(Ee)}(I||B).forEach(function(Ee,xt){var ve=I&&xe(I[xt]),xt=B&&xe(B[xt]);Pe(ve,xt)!==0&&(ve!=null&&Ce(ve),xt!=null&&Ce(xt))})}))):X?(Z={from:(Z=X.lower)!==null&&Z!==void 0?Z:s.MIN_KEY,to:(Z=X.upper)!==null&&Z!==void 0?Z:s.MAX_KEY},Y.add(Z),W.add(Z)):(W.add(d),Y.add(d),m.indexes.forEach(function(re){return D(re.name).add(d)})),f.mutate(A).then(function(re){return!X||A.type!=="add"&&A.type!=="put"||(W.addKeys(re.results),P&&P.forEach(function(de){for(var xe=A.values.map(function(ve){return de.extractKey(ve)}),Ce=de.keyPath.findIndex(function(ve){return ve===w.keyPath}),Ee=0,Ot=re.results.length;Ee<Ot;++Ee)xe[Ee][Ce]=re.results[Ee];D(de.name).addKeys(xe)})),N.mutatedParts=oi(N.mutatedParts||{},U),re})}}),E=function(D){var j=D.query,D=j.index,j=j.range;return[D,new vt((D=j.lower)!==null&&D!==void 0?D:s.MIN_KEY,(j=j.upper)!==null&&j!==void 0?j:s.MAX_KEY)]},z={get:function(A){return[w,new vt(A.key)]},getMany:function(A){return[w,new vt().addKeys(A.keys)]},count:E,query:E,openCursor:E};return a(z).forEach(function(A){O[A]=function(D){var j=ee.subscr,I=!!j,B=Wo(ee,f)&&Ko(A,D)?D.obsSet={}:j;if(I){var N=function(Z){return Z="idb://".concat(l,"/").concat(h,"/").concat(Z),B[Z]||(B[Z]=new vt)},U=N(""),W=N(":dels"),j=z[A](D),I=j[0],j=j[1];if((A==="query"&&I.isPrimaryKey&&!D.values?W:N(I.name||"")).add(j),!I.isPrimaryKey){if(A!=="count"){var Y=A==="query"&&_&&D.values&&f.query(i(i({},D),{values:!1}));return f[A].apply(this,arguments).then(function(Z){if(A==="query"){if(_&&D.values)return Y.then(function(xe){return xe=xe.result,U.addKeys(xe),Z});var le=D.values?Z.result.map(C):Z.result;(D.values?U:W).addKeys(le)}else if(A==="openCursor"){var re=Z,de=D.values;return re&&Object.create(re,{key:{get:function(){return W.addKey(re.primaryKey),re.key}},primaryKey:{get:function(){var xe=re.primaryKey;return W.addKey(xe),xe}},value:{get:function(){return de&&U.addKey(re.primaryKey),re.value}}})}return Z})}W.add(d)}}return f[A].apply(this,arguments)}}),O}})}};function Vo(s,l,d){if(d.numFailures===0)return l;if(l.type==="deleteRange")return null;var h=l.keys?l.keys.length:"values"in l&&l.values?l.values.length:1;return d.numFailures===h?null:(l=i({},l),c(l.keys)&&(l.keys=l.keys.filter(function(f,m){return!(m in d.failures)})),"values"in l&&c(l.values)&&(l.values=l.values.filter(function(f,m){return!(m in d.failures)})),l)}function ms(s,l){return d=s,((h=l).lower===void 0||(h.lowerOpen?0<Pe(d,h.lower):0<=Pe(d,h.lower)))&&(s=s,(l=l).upper===void 0||(l.upperOpen?Pe(s,l.upper)<0:Pe(s,l.upper)<=0));var d,h}function Go(s,l,z,h,f,m){if(!z||z.length===0)return s;var w=l.query.index,C=w.multiEntry,_=l.query.range,P=h.schema.primaryKey.extractKey,O=w.extractKey,E=(w.lowLevelIndex||w).extractKey,z=z.reduce(function(A,D){var j=A,I=[];if(D.type==="add"||D.type==="put")for(var B=new vt,N=D.values.length-1;0<=N;--N){var U,W=D.values[N],Y=P(W);B.hasKey(Y)||(U=O(W),(C&&c(U)?U.some(function(re){return ms(re,_)}):ms(U,_))&&(B.addKey(Y),I.push(W)))}switch(D.type){case"add":var ie=new vt().addKeys(l.values?A.map(function(de){return P(de)}):A),j=A.concat(l.values?I.filter(function(de){return de=P(de),!ie.hasKey(de)&&(ie.addKey(de),!0)}):I.map(function(de){return P(de)}).filter(function(de){return!ie.hasKey(de)&&(ie.addKey(de),!0)}));break;case"put":var X=new vt().addKeys(D.values.map(function(de){return P(de)}));j=A.filter(function(de){return!X.hasKey(l.values?P(de):de)}).concat(l.values?I:I.map(function(de){return P(de)}));break;case"delete":var Z=new vt().addKeys(D.keys);j=A.filter(function(de){return!Z.hasKey(l.values?P(de):de)});break;case"deleteRange":var le=D.range;j=A.filter(function(de){return!ms(P(de),le)})}return j},s);return z===s?s:(z.sort(function(A,D){return Pe(E(A),E(D))||Pe(P(A),P(D))}),l.limit&&l.limit<1/0&&(z.length>l.limit?z.length=l.limit:s.length===l.limit&&z.length<l.limit&&(f.dirty=!0)),m?Object.freeze(z):z)}function Yo(s,l){return Pe(s.lower,l.lower)===0&&Pe(s.upper,l.upper)===0&&!!s.lowerOpen==!!l.lowerOpen&&!!s.upperOpen==!!l.upperOpen}function cd(s,l){return(function(d,h,f,m){if(d===void 0)return h!==void 0?-1:0;if(h===void 0)return 1;if((h=Pe(d,h))===0){if(f&&m)return 0;if(f)return 1;if(m)return-1}return h})(s.lower,l.lower,s.lowerOpen,l.lowerOpen)<=0&&0<=(function(d,h,f,m){if(d===void 0)return h!==void 0?1:0;if(h===void 0)return-1;if((h=Pe(d,h))===0){if(f&&m)return 0;if(f)return-1;if(m)return 1}return h})(s.upper,l.upper,s.upperOpen,l.upperOpen)}function dd(s,l,d,h){s.subscribers.add(d),h.addEventListener("abort",function(){var f,m;s.subscribers.delete(d),s.subscribers.size===0&&(f=s,m=l,setTimeout(function(){f.subscribers.size===0&&K(m,f)},3e3))})}var ud={stack:"dbcore",level:0,name:"Cache",create:function(s){var l=s.schema.name;return i(i({},s),{transaction:function(d,h,f){var m,w,C=s.transaction(d,h,f);return h==="readwrite"&&(w=(m=new AbortController).signal,f=function(_){return function(){if(m.abort(),h==="readwrite"){for(var P=new Set,O=0,E=d;O<E.length;O++){var z=E[O],A=Nn["idb://".concat(l,"/").concat(z)];if(A){var D=s.table(z),j=A.optimisticOps.filter(function(de){return de.trans===C});if(C._explicit&&_&&C.mutatedParts)for(var I=0,B=Object.values(A.queries.query);I<B.length;I++)for(var N=0,U=(ie=B[I]).slice();N<U.length;N++)ls((X=U[N]).obsSet,C.mutatedParts)&&(K(ie,X),X.subscribers.forEach(function(de){return P.add(de)}));else if(0<j.length){A.optimisticOps=A.optimisticOps.filter(function(de){return de.trans!==C});for(var W=0,Y=Object.values(A.queries.query);W<Y.length;W++)for(var ie,X,Z,le=0,re=(ie=Y[W]).slice();le<re.length;le++)(X=re[le]).res!=null&&C.mutatedParts&&(_&&!X.dirty?(Z=Object.isFrozen(X.res),Z=Go(X.res,X.req,j,D,X,Z),X.dirty?(K(ie,X),X.subscribers.forEach(function(de){return P.add(de)})):Z!==X.res&&(X.res=Z,X.promise=te.resolve({result:Z}))):(X.dirty&&K(ie,X),X.subscribers.forEach(function(de){return P.add(de)})))}}}P.forEach(function(de){return de()})}}},C.addEventListener("abort",f(!1),{signal:w}),C.addEventListener("error",f(!1),{signal:w}),C.addEventListener("complete",f(!0),{signal:w})),C},table:function(d){var h=s.table(d),f=h.schema.primaryKey;return i(i({},h),{mutate:function(m){var w=ee.trans;if(f.outbound||w.db._options.cache==="disabled"||w.explicit||w.idbtrans.mode!=="readwrite")return h.mutate(m);var C=Nn["idb://".concat(l,"/").concat(d)];return C?(w=h.mutate(m),m.type!=="add"&&m.type!=="put"||!(50<=m.values.length||ps(f,m).some(function(_){return _==null}))?(C.optimisticOps.push(m),m.mutatedParts&&ai(m.mutatedParts),w.then(function(_){0<_.numFailures&&(K(C.optimisticOps,m),(_=Vo(0,m,_))&&C.optimisticOps.push(_),m.mutatedParts&&ai(m.mutatedParts))}),w.catch(function(){K(C.optimisticOps,m),m.mutatedParts&&ai(m.mutatedParts)})):w.then(function(_){var P=Vo(0,i(i({},m),{values:m.values.map(function(O,E){var z;return _.failures[E]?O:(O=(z=f.keyPath)!==null&&z!==void 0&&z.includes(".")?S(O):i({},O),he(O,f.keyPath,_.results[E]),O)})}),_);C.optimisticOps.push(P),queueMicrotask(function(){return m.mutatedParts&&ai(m.mutatedParts)})}),w):h.mutate(m)},query:function(m){if(!Wo(ee,h)||!Ko("query",m))return h.query(m);var w=((P=ee.trans)===null||P===void 0?void 0:P.db._options.cache)==="immutable",E=ee,C=E.requery,_=E.signal,P=(function(D,j,I,B){var N=Nn["idb://".concat(D,"/").concat(j)];if(!N)return[];if(!(j=N.queries[I]))return[null,!1,N,null];var U=j[(B.query?B.query.index.name:null)||""];if(!U)return[null,!1,N,null];switch(I){case"query":var W=U.find(function(Y){return Y.req.limit===B.limit&&Y.req.values===B.values&&Yo(Y.req.query.range,B.query.range)});return W?[W,!0,N,U]:[U.find(function(Y){return("limit"in Y.req?Y.req.limit:1/0)>=B.limit&&(!B.values||Y.req.values)&&cd(Y.req.query.range,B.query.range)}),!1,N,U];case"count":return W=U.find(function(Y){return Yo(Y.req.query.range,B.query.range)}),[W,!!W,N,U]}})(l,d,"query",m),O=P[0],E=P[1],z=P[2],A=P[3];return O&&E?O.obsSet=m.obsSet:(E=h.query(m).then(function(D){var j=D.result;if(O&&(O.res=j),w){for(var I=0,B=j.length;I<B;++I)Object.freeze(j[I]);Object.freeze(j)}else D.result=S(j);return D}).catch(function(D){return A&&O&&K(A,O),Promise.reject(D)}),O={obsSet:m.obsSet,promise:E,subscribers:new Set,type:"query",req:m,dirty:!1},A?A.push(O):(A=[O],(z=z||(Nn["idb://".concat(l,"/").concat(d)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[m.query.index.name||""]=A)),dd(O,A,C,_),O.promise.then(function(D){return{result:Go(D.result,m,z?.optimisticOps,h,O,w)}})}})}})}};function ci(s,l){return new Proxy(s,{get:function(d,h,f){return h==="db"?l:Reflect.get(d,h,f)}})}var yn=(lt.prototype.version=function(s){if(isNaN(s)||s<.1)throw new ae.Type("Given version is not a positive number");if(s=Math.round(10*s)/10,this.idbdb||this._state.isBeingOpened)throw new ae.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,s);var l=this._versions,d=l.filter(function(h){return h._cfg.version===s})[0];return d||(d=new this.Version(s),l.push(d),l.sort(ed),d.stores({}),this._state.autoSchema=!1,d)},lt.prototype._whenReady=function(s){var l=this;return this.idbdb&&(this._state.openComplete||ee.letThrough||this._vip)?s():new te(function(d,h){if(l._state.openComplete)return h(new ae.DatabaseClosed(l._state.dbOpenError));if(!l._state.isBeingOpened){if(!l._state.autoOpen)return void h(new ae.DatabaseClosed);l.open().catch(ye)}l._state.dbReadyPromise.then(d,h)}).then(s)},lt.prototype.use=function(s){var l=s.stack,d=s.create,h=s.level,f=s.name;return f&&this.unuse({stack:l,name:f}),s=this._middlewares[l]||(this._middlewares[l]=[]),s.push({stack:l,create:d,level:h??10,name:f}),s.sort(function(m,w){return m.level-w.level}),this},lt.prototype.unuse=function(s){var l=s.stack,d=s.name,h=s.create;return l&&this._middlewares[l]&&(this._middlewares[l]=this._middlewares[l].filter(function(f){return h?f.create!==h:!!d&&f.name!==d})),this},lt.prototype.open=function(){var s=this;return Fn(et,function(){return id(s)})},lt.prototype._close=function(){var s=this._state,l=er.indexOf(this);if(0<=l&&er.splice(l,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}s.isBeingOpened||(s.dbReadyPromise=new te(function(d){s.dbReadyResolve=d}),s.openCanceller=new te(function(d,h){s.cancelOpen=h}))},lt.prototype.close=function(d){var l=(d===void 0?{disableAutoOpen:!0}:d).disableAutoOpen,d=this._state;l?(d.isBeingOpened&&d.cancelOpen(new ae.DatabaseClosed),this._close(),d.autoOpen=!1,d.dbOpenError=new ae.DatabaseClosed):(this._close(),d.autoOpen=this._options.autoOpen||d.isBeingOpened,d.openComplete=!1,d.dbOpenError=null)},lt.prototype.delete=function(s){var l=this;s===void 0&&(s={disableAutoOpen:!0});var d=0<arguments.length&&typeof arguments[0]!="object",h=this._state;return new te(function(f,m){function w(){l.close(s);var C=l._deps.indexedDB.deleteDatabase(l.name);C.onsuccess=He(function(){var _,P,O;_=l._deps,P=l.name,O=_.indexedDB,_=_.IDBKeyRange,ss(O)||P===Gr||is(O,_).delete(P).catch(ye),f()}),C.onerror=cn(m),C.onblocked=l._fireOnBlocked}if(d)throw new ae.InvalidArgument("Invalid closeOptions argument to db.delete()");h.isBeingOpened?h.dbReadyPromise.then(w):w()})},lt.prototype.backendDB=function(){return this.idbdb},lt.prototype.isOpen=function(){return this.idbdb!==null},lt.prototype.hasBeenClosed=function(){var s=this._state.dbOpenError;return s&&s.name==="DatabaseClosed"},lt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},lt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(lt.prototype,"tables",{get:function(){var s=this;return a(this._allTables).map(function(l){return s._allTables[l]})},enumerable:!1,configurable:!0}),lt.prototype.transaction=function(){var s=function(l,d,h){var f=arguments.length;if(f<2)throw new ae.InvalidArgument("Too few arguments");for(var m=new Array(f-1);--f;)m[f-1]=arguments[f];return h=m.pop(),[l,Ie(m),h]}.apply(this,arguments);return this._transaction.apply(this,s)},lt.prototype._transaction=function(s,l,d){var h=this,f=ee.trans;f&&f.db===this&&s.indexOf("!")===-1||(f=null);var m,w,C=s.indexOf("?")!==-1;s=s.replace("!","").replace("?","");try{if(w=l.map(function(P){if(P=P instanceof h.Table?P.name:P,typeof P!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return P}),s=="r"||s===Ki)m=Ki;else{if(s!="rw"&&s!=Vi)throw new ae.InvalidArgument("Invalid transaction mode: "+s);m=Vi}if(f){if(f.mode===Ki&&m===Vi){if(!C)throw new ae.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");f=null}f&&w.forEach(function(P){if(f&&f.storeNames.indexOf(P)===-1){if(!C)throw new ae.SubTransaction("Table "+P+" not included in parent transaction.");f=null}}),C&&f&&!f.active&&(f=null)}}catch(P){return f?f._promise(null,function(O,E){E(P)}):at(P)}var _=function P(O,E,z,A,D){return te.resolve().then(function(){var j=ee.transless||ee,I=O._createTransaction(E,z,O._dbSchema,A);if(I.explicit=!0,j={trans:I,transless:j},A)I.idbtrans=A.idbtrans;else try{I.create(),I.idbtrans._explicit=!0,O._state.PR1398_maxLoop=3}catch(U){return U.name===Qe.InvalidState&&O.isOpen()&&0<--O._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),O.close({disableAutoOpen:!1}),O.open().then(function(){return P(O,E,z,null,D)})):at(U)}var B,N=ct(D);return N&&Zn(),j=te.follow(function(){var U;(B=D.call(I,I))&&(N?(U=Sn.bind(null,null),B.then(U,U)):typeof B.next=="function"&&typeof B.throw=="function"&&(B=hs(B)))},j),(B&&typeof B.then=="function"?te.resolve(B).then(function(U){return I.active?U:at(new ae.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):j.then(function(){return B})).then(function(U){return A&&I._resolve(),I._completion.then(function(){return U})}).catch(function(U){return I._reject(U),at(U)})})}.bind(null,this,m,w,f,d);return f?f._promise(m,_,"lock"):ee.trans?Fn(ee.transless,function(){return h._whenReady(_)}):this._whenReady(_)},lt.prototype.table=function(s){if(!b(this._allTables,s))throw new ae.InvalidTable("Table ".concat(s," does not exist"));return this._allTables[s]},lt);function lt(s,l){var d=this;this._middlewares={},this.verno=0;var h=lt.dependencies;this._options=l=i({addons:lt.addons,autoOpen:!0,indexedDB:h.indexedDB,IDBKeyRange:h.IDBKeyRange,cache:"cloned"},l),this._deps={indexedDB:l.indexedDB,IDBKeyRange:l.IDBKeyRange},h=l.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var f,m,w,C,_,P={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ye,dbReadyPromise:null,cancelOpen:ye,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:l.autoOpen};P.dbReadyPromise=new te(function(E){P.dbReadyResolve=E}),P.openCanceller=new te(function(E,z){P.cancelOpen=z}),this._state=P,this.name=s,this.on=br(this,"populate","blocked","versionchange","close",{ready:[It,ye]}),this.on.ready.subscribe=se(this.on.ready.subscribe,function(E){return function(z,A){lt.vip(function(){var D,j=d._state;j.openComplete?(j.dbOpenError||te.resolve().then(z),A&&E(z)):j.onReadyBeingFired?(j.onReadyBeingFired.push(z),A&&E(z)):(E(z),D=d,A||E(function I(){D.on.ready.unsubscribe(z),D.on.ready.unsubscribe(I)}))})}}),this.Collection=(f=this,yr(Vc.prototype,function(B,I){this.db=f;var A=So,D=null;if(I)try{A=I()}catch(N){D=N}var j=B._ctx,I=j.table,B=I.hook.reading.fire;this._ctx={table:I,index:j.index,isPrimKey:!j.index||I.schema.primKey.keyPath&&j.index===I.schema.primKey.name,range:A,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:D,or:j.or,valueMapper:B!==ke?B:null}})),this.Table=(m=this,yr(Po.prototype,function(E,z,A){this.db=m,this._tx=A,this.name=E,this.schema=z,this.hook=m._allTables[E]?m._allTables[E].hook:br(null,{creating:[Ze,ye],reading:[Pt,ke],updating:[nn,ye],deleting:[kn,ye]})})),this.Transaction=(w=this,yr(Xc.prototype,function(E,z,A,D,j){var I=this;this.db=w,this.mode=E,this.storeNames=z,this.schema=A,this.chromeTransactionDurability=D,this.idbtrans=null,this.on=br(this,"complete","error","abort"),this.parent=j||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new te(function(B,N){I._resolve=B,I._reject=N}),this._completion.then(function(){I.active=!1,I.on.complete.fire()},function(B){var N=I.active;return I.active=!1,I.on.error.fire(B),I.parent?I.parent._reject(B):N&&I.idbtrans&&I.idbtrans.abort(),at(B)})})),this.Version=(C=this,yr(rd.prototype,function(E){this.db=C,this._cfg={version:E,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(_=this,yr(jo.prototype,function(E,z,A){if(this.db=_,this._ctx={table:E,index:z===":id"?null:z,or:A},this._cmp=this._ascending=Pe,this._descending=function(D,j){return Pe(j,D)},this._max=function(D,j){return 0<Pe(D,j)?D:j},this._min=function(D,j){return Pe(D,j)<0?D:j},this._IDBKeyRange=_._deps.IDBKeyRange,!this._IDBKeyRange)throw new ae.MissingAPI})),this.on("versionchange",function(E){0<E.newVersion?console.warn("Another connection wants to upgrade database '".concat(d.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(d.name,"'. Closing db now to resume the delete request.")),d.close({disableAutoOpen:!1})}),this.on("blocked",function(E){!E.newVersion||E.newVersion<E.oldVersion?console.warn("Dexie.delete('".concat(d.name,"') was blocked")):console.warn("Upgrade '".concat(d.name,"' blocked by other connection holding version ").concat(E.oldVersion/10))}),this._maxKey=$r(l.IDBKeyRange),this._createTransaction=function(E,z,A,D){return new d.Transaction(E,z,A,d._options.chromeTransactionDurability,D)},this._fireOnBlocked=function(E){d.on("blocked").fire(E),er.filter(function(z){return z.name===d.name&&z!==d&&!z._state.vcFired}).map(function(z){return z.on("versionchange").fire(E)})},this.use(ad),this.use(ud),this.use(ld),this.use(sd),this.use(od);var O=new Proxy(this,{get:function(E,z,A){if(z==="_vip")return!0;if(z==="table")return function(j){return ci(d.table(j),O)};var D=Reflect.get(E,z,A);return D instanceof Po?ci(D,O):z==="tables"?D.map(function(j){return ci(j,O)}):z==="_createTransaction"?function(){return ci(D.apply(this,arguments),O)}:D}});this.vip=O,h.forEach(function(E){return E(d)})}var di,Nt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",hd=(gs.prototype.subscribe=function(s,l,d){return this._subscribe(s&&typeof s!="function"?s:{next:s,error:l,complete:d})},gs.prototype[Nt]=function(){return this},gs);function gs(s){this._subscribe=s}try{di={indexedDB:o.indexedDB||o.mozIndexedDB||o.webkitIndexedDB||o.msIndexedDB,IDBKeyRange:o.IDBKeyRange||o.webkitIDBKeyRange}}catch{di={indexedDB:null,IDBKeyRange:null}}function Xo(s){var l,d=!1,h=new hd(function(f){var m=ct(s),w,C=!1,_={},P={},O={get closed(){return C},unsubscribe:function(){C||(C=!0,w&&w.abort(),E&&An.storagemutated.unsubscribe(A))}};f.start&&f.start(O);var E=!1,z=function(){return Wi(D)},A=function(j){oi(_,j),ls(P,_)&&z()},D=function(){var j,I,B;!C&&di.indexedDB&&(_={},j={},w&&w.abort(),w=new AbortController,B=(function(N){var U=Fe();try{m&&Zn();var W=En(s,N);return W=m?W.finally(Sn):W}finally{U&&Ge()}})(I={subscr:j,signal:w.signal,requery:z,querier:s,trans:null}),Promise.resolve(B).then(function(N){d=!0,l=N,C||I.signal.aborted||(_={},(function(U){for(var W in U)if(b(U,W))return;return 1})(P=j)||E||(An(xr,A),E=!0),Wi(function(){return!C&&f.next&&f.next(N)}))},function(N){d=!1,["DatabaseClosedError","AbortError"].includes(N?.name)||C||Wi(function(){C||f.error&&f.error(N)})}))};return setTimeout(z,0),O});return h.hasValue=function(){return d},h.getValue=function(){return l},h}var Un=yn;function bs(s){var l=Pn;try{Pn=!0,An.storagemutated.fire(s),us(s,!0)}finally{Pn=l}}k(Un,i(i({},Be),{delete:function(s){return new Un(s,{addons:[]}).delete()},exists:function(s){return new Un(s,{addons:[]}).open().then(function(l){return l.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(s){try{return l=Un.dependencies,d=l.indexedDB,l=l.IDBKeyRange,(ss(d)?Promise.resolve(d.databases()).then(function(h){return h.map(function(f){return f.name}).filter(function(f){return f!==Gr})}):is(d,l).toCollection().primaryKeys()).then(s)}catch{return at(new ae.MissingAPI)}var l,d},defineClass:function(){return function(s){u(this,s)}},ignoreTransaction:function(s){return ee.trans?Fn(ee.transless,s):s()},vip:os,async:function(s){return function(){try{var l=hs(s.apply(this,arguments));return l&&typeof l.then=="function"?l:te.resolve(l)}catch(d){return at(d)}}},spawn:function(s,l,d){try{var h=hs(s.apply(d,l||[]));return h&&typeof h.then=="function"?h:te.resolve(h)}catch(f){return at(f)}},currentTransaction:{get:function(){return ee.trans||null}},waitFor:function(s,l){return l=te.resolve(typeof s=="function"?Un.ignoreTransaction(s):s).timeout(l||6e4),ee.trans?ee.trans.waitFor(l):l},Promise:te,debug:{get:function(){return Le},set:function(s){Ke(s)}},derive:R,extend:u,props:k,override:se,Events:br,on:An,liveQuery:Xo,extendObservabilitySet:oi,getByKeyPath:J,setByKeyPath:he,delByKeyPath:function(s,l){typeof l=="string"?he(s,l,void 0):"length"in l&&[].map.call(l,function(d){he(s,d,void 0)})},shallowClone:$e,deepClone:S,getObjectDiff:fs,cmp:Pe,asap:G,minKey:-1/0,addons:[],connections:er,errnames:Qe,dependencies:di,cache:Nn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(s){return parseInt(s)}).reduce(function(s,l,d){return s+l/Math.pow(10,2*d)})})),Un.maxKey=$r(Un.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(An(xr,function(s){Pn||(s=new CustomEvent(Qi,{detail:s}),Pn=!0,dispatchEvent(s),Pn=!1)}),addEventListener(Qi,function(s){s=s.detail,Pn||bs(s)}));var rr,Pn=!1,Qo=function(){};return typeof BroadcastChannel<"u"&&((Qo=function(){(rr=new BroadcastChannel(Qi)).onmessage=function(s){return s.data&&bs(s.data)}})(),typeof rr.unref=="function"&&rr.unref(),An(xr,function(s){Pn||rr.postMessage(s)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(s){if(!yn.disableBfCache&&s.persisted){Le&&console.debug("Dexie: handling persisted pagehide"),rr?.close();for(var l=0,d=er;l<d.length;l++)d[l].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(s){!yn.disableBfCache&&s.persisted&&(Le&&console.debug("Dexie: handling persisted pageshow"),Qo(),bs({all:new vt(-1/0,[[]])}))})),te.rejectionMapper=function(s,l){return!s||s instanceof We||s instanceof TypeError||s instanceof SyntaxError||!s.name||!Je[s.name]?s:(l=new Je[s.name](l||s.message,s),"stack"in s&&F(l,"stack",{get:function(){return this.inner.stack}}),l)},Ke(Le),i(yn,Object.freeze({__proto__:null,Dexie:yn,liveQuery:Xo,Entity:_o,cmp:Pe,PropModSymbol:bn,PropModification:wr,replacePrefix:function(s,l){return new wr({replacePrefix:[s,l]})},add:function(s){return new wr({add:s})},remove:function(s){return new wr({remove:s})},default:yn,RangeSet:vt,mergeRanges:Er,rangesOverlap:Bo}),{default:yn}),yn})})(yi)),yi.exports}var Kd=Wd();const Os=Hd(Kd),ua=Symbol.for("Dexie"),$i=globalThis[ua]||(globalThis[ua]=Os);if(Os.semVer!==$i.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Os.semVer} and ${$i.semVer}`);const{liveQuery:xl,mergeRanges:yb,rangesOverlap:wb,RangeSet:vb,cmp:xb,Entity:$b,PropModSymbol:kb,PropModification:Cb,replacePrefix:Eb,add:Sb,remove:_b}=$i,Vd="easydb";let hi=null;function Gd(){if(hi)return hi;const e=new $i(Vd);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>Yd()),hi={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},hi}function Yd(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function ir(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(i=>$l(i,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const i=xl(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>i.unsubscribe()}}}function Xd(e,t){return{async find(r){const i=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return i.toArray();const n=Object.entries(r);return i.filter(o=>$l(o,n)).toArray()},async findOne(r){const i=await e.get(r);return i&&i.tableId===t?i:null},async insert(r){const i={...r,tableId:t};return await e.add(i),i},async bulkInsert(r){if(r.length===0)return[];const i=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(i),i},async upsert(r){const i={...r,tableId:t};return await e.put(i),i},async patch(r,i){if(await e.update(r,i)===0)throw new Error(`row patch: no row ${r}`);const o=await e.get(r);if(!o)throw new Error(`row patch: row ${r} vanished after update`);return o},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=xl(()=>e.where("tableId").equals(t).toArray()).subscribe({next:o=>r(o)});return()=>n.unsubscribe()}}}function $l(e,t){for(const[r,i]of t)if(e[r]!==i)return!1;return!0}function Qd(e){return{workspaces:ir(e.workspaces),tables:ir(e.tables),settings:ir(e.settings),plugins:ir(e.plugins),viewTemplates:ir(e.viewTemplates),viewInstances:ir(e.viewInstances),rows:t=>Xd(e.rows,t)}}function Jd(e){const{base:t,providers:r,tableById:i,ctx:n}=e,o=new Map;return{...t,rows(a){const c=i(a),u=c?.source;if(u){const p=r.get(u.type);if(p){const x=JSON.stringify(u),b=o.get(a);if(b&&b.key===x)return b.coll;const k=p.create(c,n);return o.set(a,{key:x,coll:k}),k}}return o.delete(a),t.rows(a)}}}function Zd(){const e=new Map;return{on(t,r){let i=e.get(t);return i||(i=new Set,e.set(t,i)),i.add(r),()=>{i.delete(r)}},emit(t,r){const i=e.get(t);if(i)for(const n of i)try{n(r)}catch(o){console.error(`[event:${String(t)}] listener threw`,o)}}}}const Yt=qe`
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
`;function Xt(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const ha=new WeakSet;function Qt(e,t){if(ha.has(t))return;ha.add(t);let r=0,i=0,n=0,o=0,a=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",u=>{if(u.target.closest("button, input, textarea, select, a, label"))return;a=!0,r=u.clientX,i=u.clientY;const x=e.getBoundingClientRect();n=x.left,o=x.top,t.setPointerCapture(u.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",u=>{if(!a)return;const p=u.clientX-r,x=u.clientY-i,b=-e.offsetWidth+80,k=window.innerWidth-80,M=0,F=window.innerHeight-40,R=Math.max(b,Math.min(k,n+p)),H=Math.max(M,Math.min(F,o+x));e.style.position="fixed",e.style.left=`${R}px`,e.style.top=`${H}px`,e.style.margin="0"});const c=u=>{if(a){a=!1;try{t.releasePointerCapture(u.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c)}var eu=Object.defineProperty,tu=Object.getOwnPropertyDescriptor,kl=(e,t,r,i)=>{for(var n=i>1?void 0:i?tu(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&eu(t,r,n),n};let qt=class extends Ne{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitChoice=e=>{if(e.preventDefault(),this.current?.kind!=="choice")return;const t=this.current.options[0];t!==void 0&&this.closeAndResolve(t)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),qt.instance=this}disconnectedCallback(){super.disconnectedCallback(),qt.instance===this&&(qt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&Qt(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(i=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:i}})}choice(e,t,r="Choose"){return this.enqueue(i=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:i}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return T`
      <dialog @cancel=${this.onCancel} @keydown=${Xt}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):me}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return T`
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
        `;case"prompt":return T`
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
        `;case"choice":return T`
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
              ${e.message?T`<p class="message">${e.message}</p>`:me}
              <div class="choices">
                ${e.options.map((t,r)=>r===0?T`<button type="submit" class="choice primary" autofocus>${t}</button>`:T`<button
                        type="button"
                        class="choice"
                        @click=${()=>this.closeAndResolve(t)}
                      >
                        ${t}
                      </button>`)}
              </div>
            </div>
          </form>
        `}}};qt.instance=null;qt.styles=[Yt,qe`
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
    `];kl([q()],qt.prototype,"current",2);qt=kl([tt("host-dialogs")],qt);const Jt=qe`
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
`;var nu=Object.defineProperty,ru=Object.getOwnPropertyDescriptor,Cl=(e,t,r,i)=>{for(var n=i>1?void 0:i?ru(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&nu(t,r,n),n};let vn=class extends Ne{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),vn.instance=this}disconnectedCallback(){super.disconnectedCallback(),vn.instance===this&&(vn.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const i=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),i)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return T`
      ${this.toasts.map(e=>T`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${su(e.kind)}</span>
            <span class="body">
              ${e.title?T`<strong>${e.title}</strong>`:""}${iu(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};vn.instance=null;vn.styles=[Jt,qe`
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
    `];Cl([q()],vn.prototype,"toasts",2);vn=Cl([tt("toast-host")],vn);function iu(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let i=0,n;for(;(n=t.exec(e))!==null;)n.index>i&&r.push(e.slice(i,n.index)),r.push({url:n[0]}),i=n.index+n[0].length;return i<e.length&&r.push(e.slice(i)),r.length===0?e:r.map(o=>typeof o=="string"?o:T`<a href=${o.url} target="_blank" rel="noopener noreferrer">${o.url}</a>`)}function su(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function ou(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map,commands:[]}}function In(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function vs(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function au(e){return{registerHeaderButton:t=>In(e.headerButtons,t),registerFooterButton:t=>In(e.footerButtons,t),registerTableButton:t=>In(e.tableButtons,t),registerImporter:t=>In(e.importers,t),registerExporter:t=>In(e.exporters,t),registerUrlSource:t=>In(e.urlSources,t),registerDropHandler:t=>In(e.dropHandlers,t),registerCellRenderer:(t,r)=>vs(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>vs(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>vs(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerCommand:t=>In(e.commands,t),openCommandPalette:()=>{document.dispatchEvent(new CustomEvent("easydb:open-command-palette"))},registerSettings:(t,r,i)=>(e.settings.set(t,{name:r,fields:i}),()=>{e.settings.get(t)?.name===r&&e.settings.delete(t)}),dialogs:lu}}const lu={async alert(e,t){const r=qt.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=qt.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const i=qt.instance;return i?i.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const i=qt.instance;if(i)return i.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=vn.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},io="/easydbaccess/settings.json",El="/easydbaccess/secrets.txt";function zr(e){try{return globalThis.localStorage??null}catch{return null}}function Oi(e){const t=zr();if(!t)return{};const r=t.getItem(io);if(!r)return{};try{const i=JSON.parse(r);return i&&typeof i=="object"?i:{}}catch{return{}}}function so(e,t){return Oi()[e]}function cu(e,t,r){const i=zr();if(!i)return;const n=Oi();n[e]=t,i.setItem(io,JSON.stringify(n))}function du(e,t){const r=zr();if(!r)return;const i=Oi();e in i&&(delete i[e],r.setItem(io,JSON.stringify(i)))}function js(e,t){return e in Oi()}function ji(e){return zr()?.getItem(El)??""}function Sl(e,t){zr()?.setItem(El,e)}function zi(e){const t={};for(const r of e.split(/\r?\n/)){const i=r.trim();if(!i||i.startsWith("#"))continue;const n=i.indexOf(":");if(n<0)continue;const o=i.slice(0,n).trim(),a=i.slice(n+1).trim();o&&(t[o]=a)}return t}function _l(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(r,i)=>{const n=t[i.trim()];return n===void 0?r:n})}function uu(e){const t=au(e.registries),r=e.registries.rowSources,i=a=>(r.set(a.type,a),()=>{r.get(a.type)===a&&r.delete(a.type)}),n=fu(e.store,e.registries),o={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:o,registerRowSource:i,settings:n,backend:{fetch:async(a,c)=>{const u=await hu(e.store),p=c?.body instanceof ArrayBuffer;if(!u||p)return globalThis.fetch(a,c);const x={url:a};return c?.method&&(x.method=c.method),c?.headers&&(x.headers=c.headers),typeof c?.body=="string"&&(x.body=c.body),globalThis.fetch(`${u}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)})},async saveFile(a,c,u){const p=typeof c=="string"?new Blob([c],{type:u??"application/octet-stream"}):c,x=URL.createObjectURL(p),b=document.createElement("a");b.href=x,b.download=a,b.rel="noopener",document.body.appendChild(b),b.click(),b.remove(),setTimeout(()=>URL.revokeObjectURL(x),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function hu(e){const t="server-sync:url";let r=js(t)?so(t):void 0;return r===void 0&&(r=(await e.settings.findOne(t))?.value),typeof r!="string"||r.length===0?null:_l(r,zi(ji())).replace(/\/+$/,"")}function fu(e,t){const r=(o,a)=>`${o}:${a}`,i=(o,a)=>t.settings.get(o)?.fields.find(c=>c.key===a),n=o=>typeof o=="string"?_l(o,zi(ji())):o;return{async get(o,a){const c=r(o,a);let u;if(js(c))u=so(c);else{const p=await e.settings.findOne(c);u=p?p.value:i(o,a)?.default}return n(u)},async set(o,a,c,u){const p=r(o,a);(u??i(o,a)?.scope??"workspace")==="user"?(cu(p,c),await e.settings.remove(p).catch(()=>{})):(await e.settings.upsert({key:p,value:c}),du(p))},async placement(o,a){const c=r(o,a);return js(c)?"user":await e.settings.findOne(c)?"workspace":null}}}function fa(e,t){return e.has(t)?e.get(t)!=="0":!1}function pu(){if(typeof location>"u")return"off";const e=new URLSearchParams(location.search);return fa(e,"safemode")?"all-optional":fa(e,"safemode1")?"url-plugins":"off"}const Ut=pu(),mu={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV or TSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function gu(e){e.ui.registerImporter(bu),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const i=Au(t).filter(Pu);if(i.length===0)return!1;t.preventDefault();for(const n of i)await yu(e,n);return!0})}const bu={id:"csv",label:"CSV / TSV",accept:[".csv",".tsv",".tab","text/csv","text/tab-separated-values"],async parse(e){const t=typeof e=="string"?e:await e.text();return Jn(t)}};async function yu(e,t){await ki(e,await t.text(),t.name)}async function ki(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("csv-import: no active workspace");const o=zl(r||"imported")||"imported",a=Ll(r),c=(await e.store.tables.find()).find(k=>k.workspaceId===n&&k.name===o);let u,p;if(c){const k=await e.ui.dialogs.choice(`A table named "${o}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!k)return;k==="Append rows"?(p="append",u=c.id):k==="Overwrite rows"?(p="overwrite",u=c.id):(p="new",u=fi())}else p="new",u=fi();e.events.emit("import:before",{source:"csv",tableId:u});let x;if(p==="new"){const k=Jn(t,{maxRows:i.maxRows,separator:a});let M=k.columns,F=k.rows;if(i.editColumns){const H=await i.editColumns(M);if(H===null)return;F=Iu(F,M,H),M=H}i.maxRows!=null&&(F=F.slice(0,i.maxRows));const R=c?`${o} (${Date.now().toString(36)})`:o;await e.store.tables.insert({id:u,workspaceId:n,name:R,code:zs(R),columns:M,view:"table",...i.origin?{origin:i.origin}:{},updatedAt:Date.now()}),x=F.map(H=>({id:fi(),tableId:u,data:H,updatedAt:Date.now()}))}else{const k=c.columns,M=Tl(t,{maxRows:i.maxRows,separator:a});if(x=(i.maxRows!=null?M.rows.slice(0,i.maxRows):M.rows).map(R=>{const H={};for(let V=0;V<k.length;V++){const ue=k[V];H[ue.field]=Dl(R[V]??"",ue.type)}return{id:fi(),tableId:u,data:H,updatedAt:Date.now()}}),p==="overwrite"){const R=e.store.rows(u),H=await R.find();await R.bulkRemove(H.map(V=>V.id))}}await e.store.rows(u).bulkInsert(x),e.events.emit("import:after",{source:"csv",tableId:u,rowCount:x.length})}function Tl(e,t={}){const r=e.replace(/﻿/,""),i=t.separator??Il(r),n=Rl(r,i,Al(t.maxRows));if(n.length===0)return{header:[],rows:[]};const o=n[0],a=n.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:o,rows:a}}function Al(e){return e!=null?e+1:void 0}async function Pl(e,t){const i=new TextDecoder,n=t+1;let o="",a=0,c=!1,u=0;for(;u<e.size;){const p=new Uint8Array(await e.slice(u,u+1048576).arrayBuffer());u+=1048576;const x=i.decode(p,{stream:!0});for(let b=0;b<x.length;b++){const k=x[b];if(k==='"')c=!c;else if(k===`
`&&!c&&(a+=1,a>=n))return o+x.slice(0,b+1)}o+=x}return o}function Jn(e,t={}){const r=e.replace(/﻿/,""),i=t.separator??Il(r),n=Rl(r,i,Al(t.maxRows));if(n.length===0)return{columns:[],rows:[]};const o=n[0],a=n.slice(1).filter(M=>!(M.length===1&&M[0]==="")),c=o.map((M,F)=>xu(M,F)),u=Fl(c.map(M=>M.field)),p=a.map(M=>{const F={};for(let R=0;R<u.length;R++)F[u[R]]=M[R]??"";return F}),x=c.map((M,F)=>M.type?M.type:$u(p.map(R=>R[u[F]]??"").filter(R=>R.length>0))),b=c.map((M,F)=>{const R=x[F]??"string",H={field:u[F],label:M.label,type:R},V=vu(R),ue=M.renderer??V;return ue&&(H.renderer=ue),M.default!==void 0&&(H.default=M.default),M.max!=null&&(H.max=M.max),M.unique&&(H.unique=!0),M.notnull&&(H.notnull=!0),M.hidden&&(H.hidden=!0),H}),k=p.map(M=>{const F={};for(let R=0;R<u.length;R++){const H=u[R],V=x[R]??"string";F[H]=Dl(M[H]??"",V)}return F});return{columns:b,rows:k}}const wu=new Set(["string","number","boolean","date","datetime"]),pa={color:"color",image:"image"};function vu(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function xu(e,t){const r=e.trim();if(!r.includes(":"))return{field:zs(r||`col_${t+1}`),label:r||`Column ${t+1}`};const i=r.split(":"),n=zs(i[0]||`col_${t+1}`),o=(i[1]??i[0]??"").trim()||n,a={field:n,label:o},c=(i[2]??"").trim();c&&(wu.has(c)?a.type=c:pa[c]&&(a.type="string",a.renderer=pa[c]));const u=(i[3]??"").trim();u&&(a.default=u);const p=(i[4]??"").trim();if(p){const b=Number(p);Number.isFinite(b)&&b>0&&(a.max=b)}const x=(i[5]??"").toLowerCase();return x.includes("u")&&(a.unique=!0),x.includes("n")&&(a.notnull=!0),x.includes("h")&&(a.hidden=!0),a}function Il(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const o of t)o in r&&(r[o]+=1);let i=",",n=-1;for(const o of[",",";","	"])(r[o]??0)>n&&(i=o,n=r[o]??0);return i}function Rl(e,t,r){const i=[];let n=[],o="",a=!1;for(let c=0;c<e.length;c++){const u=e[c];if(a)u==='"'?e[c+1]==='"'?(o+='"',c++):a=!1:o+=u;else if(u==='"')a=!0;else if(u===t)n.push(o),o="";else if(u===`
`||u==="\r"){if(u==="\r"&&e[c+1]===`
`&&c++,n.push(o),i.push(n),n=[],o="",r!=null&&i.length>=r)return i}else o+=u}return(o.length>0||n.length>0)&&(n.push(o),i.push(n)),i}function $u(e){return e.length===0?"string":e.every(Cu)?"boolean":e.every(Eu)?"number":e.every(_u)?"datetime":e.every(Su)?"date":"string"}const ku=/^(true|false|yes|no|0|1)$/i;function Cu(e){return ku.test(e.trim())}function Eu(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function Su(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function _u(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function Dl(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const i=Number(r);return Number.isFinite(i)?i:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return Ol(r);case"datetime":return Tu(r);default:return e}}function Ol(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let i=parseInt(t[1],10),n=parseInt(t[2],10);const o=t[3];let a=parseInt(o,10);o.length===2&&(a+=2e3);let c,u;return i>12?(c=i,u=n):n>12?(u=i,c=n):(c=i,u=n),`${a.toString().padStart(4,"0")}-${u.toString().padStart(2,"0")}-${c.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function Tu(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const i=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(i)return`${Ol(`${i[1]}/${i[2]}/${i[3]}`)}T${i[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const o=n.toISOString();return`${o.slice(0,10)}T${o.slice(11,16)}`}return e}function Au(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}const jl=/\.(csv|tsv|tab)$/i;function zl(e){return e.replace(jl,"")}function Ll(e){return/\.(tsv|tab)$/i.test(e)?"	":void 0}function Pu(e){return!!(jl.test(e.name)||e.type==="text/csv"||e.type==="application/csv"||e.type==="text/tab-separated-values")}function Fl(e){const t=new Map,r=new Set,i=[];for(const n of e){let o=n,a=t.get(n)??0;for(;r.has(o);)a+=1,o=`${n}_${a+1}`;t.set(n,a),r.add(o),i.push(o)}return i}function Iu(e,t,r){return e.map(i=>{const n={};for(let o=0;o<t.length;o++)n[r[o].field]=i[t[o].field];return n})}function zs(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function fi(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Ru=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:Fl,importCsvText:ki,init:gu,meta:mu,parseCsv:Jn,parseCsvRaw:Tl,readCsvHead:Pl,separatorForName:Ll,stripDelimitedExt:zl},Symbol.toStringTag,{value:"Module"})),Du={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"CSV serializer for the per-table export menu (see dump-export.ts) and the importer/exporter registry.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},Ou={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return oo(e,t)}};function ju(e){e.ui.registerExporter(Ou)}function oo(e,t){const r=e.columns.map(o=>o.field),i=e.columns.map(o=>ma(o.label??o.field)),n=t.map(o=>r.map(a=>ma(zu(o.data[a]))).join(","));return[i.join(","),...n].join(`\r
`)}function zu(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function ma(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const Lu=Object.freeze(Object.defineProperty({__proto__:null,init:ju,meta:Du,serializeCsv:oo},Symbol.toStringTag,{value:"Module"}));var Fu=Object.defineProperty,Mu=Object.getOwnPropertyDescriptor,ur=(e,t,r,i)=>{for(var n=i>1?void 0:i?Mu(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Fu(t,r,n),n};function Ls(e,t={}){return(jt.instance??Bu()).open(e,t)}function Bu(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function Nu(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let jt=class extends Ne{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,i)=>r?i:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),jt.instance=this}disconnectedCallback(){super.disconnectedCallback(),jt.instance===this&&(jt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(r=>!r.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return T`
      <dialog @cancel=${this.onCancel} @keydown=${Xt}>
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
            ${this.message?T`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,r)=>T`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${r}`}
                      .checked=${this.selected[r]??!1}
                      @change=${()=>this.toggle(r)}
                    />
                    <label for=${`tsel-${r}`}>
                      <span class="name">${t.name}</span>
                      ${t.hidden?T`<span class="tag-hidden">hidden</span>`:""}
                      <span class="size">${Nu(t.size)}</span>
                      ${t.detail?T`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};jt.instance=null;jt.styles=[Yt,qe`
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
    `];ur([q()],jt.prototype,"items",2);ur([q()],jt.prototype,"selected",2);ur([q()],jt.prototype,"heading",2);ur([q()],jt.prototype,"message",2);ur([q()],jt.prototype,"confirmLabel",2);jt=ur([tt("table-select-dialog")],jt);const Uu={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function Hu(e){e.ui.registerImporter(qu),e.ui.registerDropHandler(async t=>{const i=Ju(t).filter(Zu);if(i.length===0)return!1;t.preventDefault();for(const n of i)await Wu(e,n);return!0})}const qu={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=Lr(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function Wu(e,t){await Ci(e,await t.text(),t.name)}async function Ci(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("json-import: no active workspace");let o;try{o=JSON.parse(t)}catch(H){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${H.message}`)});return}const a=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=Lr(o,a);if(c.length===0)return;let u=c;if(c.length>1){const H=await Ls(c.map(V=>({name:V.name,size:V.rows.length})),{title:"Import tables",message:`"${r}" contains ${c.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!H)return;u=H.map(V=>c[V])}const p=(await e.store.tables.find()).filter(H=>H.workspaceId===n),x=new Set(u.map(H=>H.name)),b=p.filter(H=>x.has(H.name));let k;if(b.length===0&&u.length===1)k="append-new";else{const H=b.length>0?[`Overwrite matching (${b.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],V=await e.ui.dialogs.choice(`Importing ${u.length} table${u.length===1?"":"s"} from "${r}".${b.length>0?`

${b.length} table${b.length===1?"":"s"} share a name with existing data.`:""}`,H,"JSON import");if(!V)return;V.startsWith("Overwrite matching")?k="overwrite-matching":V==="Replace entire workspace"?k="replace-workspace":k="append-new"}const M=2e3,F=u.reduce((H,V)=>H+(V.source?0:Math.min(V.rows.length,i.maxRows??1/0)),0);let R=null;if(F>=M){const{TopProgress:H}=await $n(async()=>{const{TopProgress:V}=await Promise.resolve().then(()=>Ac);return{TopProgress:V}},void 0);R=H.begin(`Importing ${r}…`)}try{if(k==="replace-workspace")for(const se of p){const oe=e.store.rows(se.id),G=await oe.find();await oe.bulkRemove(G.map(J=>J.id)),await e.store.tables.remove(se.id)}const H=new Map(p.map(se=>[se.name,se])),V=new Map;let ue=0;for(const se of u){const oe=se.source,G=se.origin??(!oe&&i.originUrl?{type:"json",url:i.originUrl}:void 0);let J;const he=k==="overwrite-matching"?H.get(se.name):void 0;if(he){if(J=he.id,!he.source){const Te=e.store.rows(J),Ie=await Te.find();await Te.bulkRemove(Ie.map(g=>g.id))}await e.store.tables.patch(J,{columns:se.columns,...se.title?{title:se.title}:{},...se.windowGeometry?{windowGeometry:se.windowGeometry}:{},...se.sortColumn?{sortColumn:se.sortColumn,sortAsc:se.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...se.filters?{filters:se.filters}:{},...se.labelColumn?{labelColumn:se.labelColumn}:{},...se.info?{info:se.info}:{},...se.deletedColumns?{deletedColumns:se.deletedColumns}:{},source:oe??void 0,origin:G??void 0,updatedAt:Date.now()})}else J=wa(),e.events.emit("import:before",{source:"json",tableId:J}),await e.store.tables.insert({id:J,workspaceId:n,name:se.name,code:eh(se.name),columns:se.columns,view:"table",...se.title?{title:se.title}:{},...se.windowGeometry?{windowGeometry:se.windowGeometry}:{},...se.sortColumn?{sortColumn:se.sortColumn,sortAsc:se.sortAsc??!0}:{},...se.filters?{filters:se.filters}:{},...se.labelColumn?{labelColumn:se.labelColumn}:{},...se.info?{info:se.info}:{},...se.deletedColumns?{deletedColumns:se.deletedColumns}:{},...oe?{source:oe}:{},...G?{origin:G}:{},updatedAt:Date.now()});V.set(se.name,J);let $e=0;if(!oe){const Te=e.store.rows(J),g=(i.maxRows!=null?se.rows.slice(0,i.maxRows):se.rows).map(v=>({id:wa(),tableId:J,data:v,updatedAt:Date.now()}));await Te.bulkInsert(g),$e=g.length,ue+=$e,R?.fraction(F>0?ue/F:1)}e.events.emit("import:after",{source:"json",tableId:J,rowCount:$e})}await Ku(e,o,n,V,k==="replace-workspace")}finally{R?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function Ku(e,t,r,i,n){if(!bt(t))return;const o=t,a=Array.isArray(o.viewTemplates)?o.viewTemplates:[],c=Array.isArray(o.viewInstances)?o.viewInstances:[];if(!(a.length===0&&c.length===0)){if(n){const u=(await e.store.viewInstances.find()).filter(p=>p.workspaceId===r);await e.store.viewInstances.bulkRemove(u.map(p=>p.id))}for(const u of a)!bt(u)||typeof u.id!="string"||await e.store.viewTemplates.upsert({...u,workspaceId:r});for(const u of c){if(!bt(u)||typeof u.id!="string")continue;const p=(u.tableName?i.get(u.tableName):void 0)??u.tableId;p&&await e.store.viewInstances.upsert({...u,workspaceId:r,tableId:p})}}}function Lr(e,t){if(bt(e)&&ga(e))return ba(e);if(bt(e)&&Array.isArray(e.tables)){const r=e,i=[];for(const n of r.tables){if(Gu(n)){const o=n,a=bt(o.windowGeometry)?o.windowGeometry:void 0,c=typeof o.sortColumn=="string"?o.sortColumn:void 0,u=typeof o.sortAsc=="boolean"?o.sortAsc:void 0,p=typeof o.title=="string"?o.title:void 0,x=bt(o.filters)?o.filters:void 0,b=typeof o.labelColumn=="string"?o.labelColumn:void 0,k=bt(o.info)?o.info:void 0,M=Array.isArray(o.deletedColumns)?o.deletedColumns.filter(H=>typeof H=="string"):void 0,F=bt(o.source)&&typeof o.source.type=="string"?o.source:void 0,R=bt(o.origin)&&typeof o.origin.type=="string"&&typeof o.origin.url=="string"?o.origin:void 0;i.push({name:String(n.name),columns:n.columns.map(Yu),rows:Array.isArray(n.rows)?n.rows.filter(bt):[],...p?{title:p}:{},...a?{windowGeometry:a}:{},...c?{sortColumn:c,sortAsc:u??!0}:{},...x?{filters:x}:{},...b?{labelColumn:b}:{},...k?{info:k}:{},...M?{deletedColumns:M}:{},...F?{source:F}:{},...R?{origin:R}:{}});continue}bt(n)&&ga(n)&&i.push(...ba(n))}return i}if(Array.isArray(e)){const r=e.filter(bt);return r.length===0?[]:[{name:t,...ya(r)}]}return bt(e)?[{name:t,...ya([e])}]:[]}function ga(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!bt(r))continue;const i=r;if(Array.isArray(i.dataArray)&&Array.isArray(i.columns))return!0}return!1}function ba(e){const t=[];for(const[r,i]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!bt(i))continue;const n=i;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const o=r.replace(/\.table\.json$/,""),a=n.columns.map(x=>Vu(x)),c=a.map(x=>x.field),u=n.dataArray.filter(x=>Array.isArray(x)).map(x=>{const b={};for(let k=0;k<c.length;k++)b[c[k]]=x[k];return b}),p={name:o,columns:a,rows:u};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const x=n.elementRect;p.windowGeometry={x:x.x,y:x.y,w:x.width??600,h:x.height??400,z:x.zIndex??100,minimized:!!x.minimized,maximized:!!x.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<c.length&&(p.sortColumn=c[n.sortColumn],p.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(p)}return t}function Vu(e){const t=String(e.field??"col"),r=String(e.name??t),i=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:i};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function Gu(e){return bt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Yu(e){if(!bt(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let i=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(i==="color"||i==="image")&&(n=n??i,i="string");const o={field:r,label:String(t.label??r),type:i};return n&&(o.renderer=n),typeof t.script=="string"&&(o.script=t.script),o}function ya(e){const t=new Set;for(const n of e)for(const o of Object.keys(n))t.add(o);return{columns:Array.from(t).map(n=>({field:n,label:n,type:Xu(e.map(o=>o[n]))})),rows:e}}function Xu(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Qu(r))?"date":"string"}function Qu(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function bt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Ju(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function Zu(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function eh(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function wa(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const th=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:Ci,init:Hu,meta:Uu,parsedToTables:Lr},Symbol.toStringTag,{value:"Module"}));var nh=Object.defineProperty,rh=Object.getOwnPropertyDescriptor,Fr=(e,t,r,i)=>{for(var n=i>1?void 0:i?rh(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&nh(t,r,n),n};const ih="https://latest.datasette.io/ephemeral";let Kt=class extends Ne{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,r)}catch(i){this.status=i?.message??String(i),this.statusKind="err";return}}this.finish({url:t,token:r})}}connectedCallback(){super.connectedCallback(),Kt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Kt.instance===this&&(Kt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return T`
      <dialog @cancel=${this.onCancel} @keydown=${Xt}>
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
                placeholder="e.g. ${ih}"
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
    `}};Kt.instance=null;Kt.styles=[Yt,qe`
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
    `];Fr([q()],Kt.prototype,"url",2);Fr([q()],Kt.prototype,"token",2);Fr([q()],Kt.prototype,"status",2);Fr([q()],Kt.prototype,"statusKind",2);Kt=Fr([tt("datasette-connect-dialog")],Kt);function Ml(e,t,r=[]){const i=new Set(e.map(c=>c.field)),n=new Set(r),o=[...e],a=[];for(const c of t)i.has(c.field)||n.has(c.field)||(o.push(c),a.push(c.field),i.add(c.field));return{columns:o,newFields:a}}function va(e,t){return JSON.stringify(t.map(r=>e[r]))}function sh(e,t){return t.every(r=>e[r]!==null&&e[r]!==void 0)}function oh(e){const{oldRows:t,freshRows:r,pks:i,userAddedFields:n,deletedRemoteFields:o=[]}=e,a=new Set(o),c=b=>{const k={...b};for(const M of a)delete k[M];return k};if(!(i.length>0&&r.every(b=>sh(b,i))))return{data:r.map(c),merged:!1};const p=new Map;for(const b of t){const k=va(b.data,i);p.has(k)||p.set(k,b)}return{data:r.map(b=>{const k=c(b),M=va(b,i),F=p.get(M);if(F)for(const R of n)Object.prototype.hasOwnProperty.call(F.data,R)&&(k[R]=F.data[R]);return k}),merged:!0}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bl=Symbol.for(""),ah=e=>{if(e?.r===Bl)return e?._$litStatic$},xa=e=>({_$litStatic$:e,r:Bl}),$a=new Map,lh=e=>(t,...r)=>{const i=r.length;let n,o;const a=[],c=[];let u,p=0,x=!1;for(;p<i;){for(u=t[p];p<i&&(o=r[p],(n=ah(o))!==void 0);)u+=n+t[++p],x=!0;p!==i&&c.push(o),a.push(u),p++}if(p===i&&a.push(t[i]),x){const b=a.join("$$lit$$");(t=$a.get(b))===void 0&&(a.raw=a,$a.set(b,t=a)),r=c}return e(t,...r)},ka=lh(T);function Ca(e){return e==null||String(e).trim()===""}function Nl(e){const t=[];let r="",i=!1,n=!1,o=!1,a=!1,c=!1,u=!0;const p=()=>{const x=o?r:r.trim();(i||a)&&t.push(c?{term:x,negate:a,prefix:c}:{term:x,negate:a}),r="",i=!1,n=!1,o=!1,a=!1,c=!1,u=!0};for(let x=0;x<e.length;x++){const b=e[x];if(b==='"'){if(n&&e[x+1]==='"'){r+='"',i=!0,x++;continue}n=!n,o=!0,i=!0,u=!1;continue}if(b===","&&!n){p();continue}if(b==="!"&&!n&&u&&!a&&!c){a=!0;continue}if(b==="^"&&!n&&u&&!c){c=!0;continue}u&&!n&&/\s/.test(b)||(u=!1),r+=b,/\s/.test(b)||(i=!0)}return p(),t}function ch(e){return e.includes(",")||e.includes('"')||e!==e.trim()||e===""||e.startsWith("!")||e.startsWith("^")}function Ul(e){return e.map(t=>{const r=t.term===""&&t.negate?"":ch(t.term)?`"${t.term.replace(/"/g,'""')}"`:t.term;return(t.negate?"!":"")+(t.prefix?"^":"")+r}).join(",")}function Ea(e,t){const r=t.term;if(r.trim()===""||!t.prefix&&r.toUpperCase()==="NULL")return Ca(e);const i=String(e??"").toLowerCase(),n=r.toLowerCase();return t.prefix?i.startsWith(n):i.includes(n)}function Fs(e,t){const r=Nl(t);if(r.length===0)return!0;for(const n of r)if(n.negate&&Ea(e,n))return!1;const i=r.filter(n=>!n.negate);return i.length===0?!0:i.some(n=>Ea(e,n))}var dh=Object.defineProperty,uh=Object.getOwnPropertyDescriptor,hr=(e,t,r,i)=>{for(var n=i>1?void 0:i?uh(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&dh(t,r,n),n};function xs(e){return Ul([{...e,negate:!1}])}let zt=class extends Ne{constructor(){super(...arguments),this.values=[],this.blanks=0,this.current="",this.search="",this.states=new Map,this.resolveFn=null,this.onChange=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r,i=0,n){return this.values=t,this.blanks=i,this.onChange=n??null,this.states=new Map(Nl(r??"").map(o=>[xs(o),{state:o.negate?"not":"on",token:o}])),this.current=r??"",this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(o=>{this.resolveFn=o,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}cycle(e){const t={term:e,negate:!1},r=xs(t),i=new Map(this.states),n=i.get(r);n===void 0?i.set(r,{state:"on",token:t}):n.state==="on"?i.set(r,{state:"not",token:n.token}):i.delete(r),this.states=i;const o=[...i.values()].map(a=>({...a.token,negate:a.state==="not"}));this.current=Ul(o),this.onChange?.(this.current)}close(e){this.onChange=null,document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),zt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),zt.instance===this&&(zt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(a=>a.value.toLowerCase().includes(e)),r=this.blanks>0&&"(blanks)".includes(e),i=a=>this.states.get(xs({term:a,negate:!1}))?.state,n=a=>T`
      <span class=${`cb${a?` ${a}`:""}`}
        >${a==="on"?"✓":a==="not"?"✕":""}</span
      >
    `,o=a=>a==="on"?"Included — click to exclude":a==="not"?"Excluded — click to clear":"Click to include → exclude → off";return T`
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
      ${t.length===0&&!r?T`<div class="empty">No matching values.</div>`:T`<ul>
            ${r?T`
                  <li
                    class="blanks"
                    title=${o(i("NULL"))}
                    @click=${()=>this.cycle("NULL")}
                  >
                    <span class="left">
                      ${n(i("NULL"))}
                      <span class="label"><em>(Blanks)</em></span>
                    </span>
                    <span class="count">${this.blanks}</span>
                  </li>
                `:""}
            ${t.slice(0,500).map(a=>{const c=i(a.value);return T`
                <li title=${o(c)} @click=${()=>this.cycle(a.value)}>
                  <span class="left">
                    ${n(c)}
                    <span class="label">${a.value}</span>
                  </span>
                  <span class="count">${a.count}</span>
                </li>
              `})}
          </ul>`}
      ${this.values.length>500?T`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button
          class="text"
          @click=${()=>{this.states=new Map,this.close({clear:!0})}}
        >
          Clear filter
        </button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};zt.instance=null;zt.styles=[Jt,qe`
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
    `];hr([Mt({type:Array})],zt.prototype,"values",2);hr([Mt({type:Number})],zt.prototype,"blanks",2);hr([Mt({type:String})],zt.prototype,"current",2);hr([q()],zt.prototype,"search",2);hr([q()],zt.prototype,"states",2);zt=hr([tt("filter-popover")],zt);var hh=Object.defineProperty,fh=Object.getOwnPropertyDescriptor,on=(e,t,r,i)=>{for(var n=i>1?void 0:i?fh(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&hh(t,r,n),n};let Ft=class extends Ne{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const i of this.options)if(i.toLowerCase().includes(t)&&(r.push(i),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=this.open&&e.length>0,r=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return T`
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
        ${this.value?T`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${i=>i.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:me}
      </div>
      ${t?T`<ul
            class="dropdown"
            style=${r}
            @mousedown=${i=>i.preventDefault()}
          >
            ${e.map((i,n)=>T`
                <li
                  class=${n===this.highlightIdx?"highlighted":""}
                  @mousedown=${o=>o.preventDefault()}
                  @click=${()=>this.onPick(i)}
                >
                  ${i}
                </li>
              `)}
          </ul>`:me}
    `}};Ft.styles=qe`
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
  `;on([Mt({type:String})],Ft.prototype,"value",2);on([Mt({type:Array})],Ft.prototype,"options",2);on([Mt({type:String})],Ft.prototype,"placeholder",2);on([q()],Ft.prototype,"open",2);on([q()],Ft.prototype,"highlightIdx",2);on([q()],Ft.prototype,"dropTop",2);on([q()],Ft.prototype,"dropLeft",2);on([q()],Ft.prototype,"dropMinWidth",2);on([q()],Ft.prototype,"editing",2);on([pn("input")],Ft.prototype,"inputEl",2);Ft=on([tt("filter-combobox")],Ft);function ph(e){const t=e.trim(),r=t.split(/\s+/).filter(Boolean);if(!r.some(c=>c==="AND"||c==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:r.map(c=>c.toLowerCase())};const n=[];let o=[];for(const c of r)c==="OR"?(n.push(o),o=[]):c==="AND"||o.push(c.toLowerCase());n.push(o);const a=n.filter(c=>c.length>0);return a.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:a}}function Ei(e,t,r){const i=ph(t);if(i.kind==="boolean")return e.filter(u=>i.groups.some(p=>p.every(x=>r(u,x))));const{phrase:n,words:o}=i;if(o.length<=1)return n===""?e:e.filter(u=>r(u,n));const a=e.filter(u=>r(u,n));if(a.length>0)return a;const c=e.filter(u=>o.every(p=>r(u,p)));return c.length>0?c:e.filter(u=>o.some(p=>r(u,p)))}const Sa=new Map;function mh(e){const t=Sa.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return Sa.set(e,r),r}function Hl(e,t){if(!e||!e.trim())return{ok:!1,label:"no script",message:""};let r;try{r=mh(e)}catch(i){return{ok:!1,label:"compile error",message:_a(i)}}try{return{ok:!0,value:r(t)}}catch(i){return{ok:!1,label:"runtime error",message:_a(i)}}}function _a(e){return e instanceof Error?e.message:String(e)}const Si="easydb:visible-count";function ql(e,t,r){e&&document.dispatchEvent(new CustomEvent(Si,{detail:{key:e,count:t,total:r}}))}function Wl(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}var gh=Object.defineProperty,bh=Object.getOwnPropertyDescriptor,ut=(e,t,r,i)=>{for(var n=i>1?void 0:i?bh(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&gh(t,r,n),n};function Ta(e,t){return Object.values(e.data).some(r=>r!=null&&String(r).toLowerCase().includes(t))}const yh=200,wh=10,$s=32;let rt=class extends Ne{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}get readOnlyView(){return this.viewMode&&!!this.viewInst?.readonly}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.()}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells(),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,r=this.rows.length;t===this.lastEmittedCount&&r===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=r,ql(e,t,r))}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",vh(t))}async bind(){if(!this.tableId)return;const e=await be(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const o=n.find(a=>a.id===this.tableId);o&&(this.tableColumns=o.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(n=>{const o=n.find(a=>a.id===this.viewInstanceId);o&&(this.viewInst=o,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const o=n.find(a=>a.id===this.tableId);o&&this.applyTable(o)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const i=window.setTimeout(()=>this.loading=!0,yh);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(i),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(i=>[i.field,i])),r=e.columnWidths??{};this.columns=e.visibleColumns.map(i=>t.get(i)).filter(i=>!!i).map(i=>{const n=r[i.field];return typeof n=="number"?{...i,width:n}:i}),this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,r){const i=await be();await this.commitCell(i,e,t,r)}async commitCell(e,t,r,i){const n=this.columns.find(o=>o.field===r);if(n){const o=xh(n,i,this.rows,t.id);if(o){await e.api.ui.dialogs.alert(o,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:i},updatedAt:Date.now()})}catch(o){await e.api.ui.dialogs.alert(o?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const r=e.target;typeof t=="boolean"?r.checked=t:r.value=t,r.blur()}renderReadonlyCell(e,t){return e.type==="boolean"?T`<input type="checkbox" .checked=${t===!0||t==="true"||t===1||t==="1"} disabled />`:t==null||t===""?T``:e.type==="date"?T`${ks(t)}`:e.type==="datetime"?T`${Cs(t).replace("T"," ")}`:T`${String(t)}`}renderScriptedCell(e,t){const r=Hl(t.script,e.data);if(!r.ok)return T`<span class="script-err" title=${r.message}>⚠ ${r.label}</span>`;const i=t.renderer?this.cellRenderers?.get(t.renderer):void 0;if(!i)return T`${r.value==null?"":String(r.value)}`;const n=xa(i);return ka`<${n}
      .value=${r.value??""}
      .column=${t}
      .row=${e.data}
      .readonly=${!0}
    ></${n}>`}renderCell(e,t){const r=e.data[t.field];if(t.script?.trim()&&t.renderer!=="script")return this.renderScriptedCell(e,t);const i=t.renderer,n=i?this.cellRenderers?.get(i):void 0;if(n){const o=xa(n);return ka`<${o}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        .readonly=${this.readOnlyView}
        @change=${a=>this.setCell(e,t.field,a.detail.value)}
      ></${o}>`}if(this.readOnlyView)return this.renderReadonlyCell(t,r);switch(t.type){case"boolean":{const o=r===!0||r==="true"||r===1||r==="1";return T`<input
          type="checkbox"
          .checked=${o}
          @keydown=${a=>this.cancelCellEdit(a,o)}
          @change=${a=>this.setCell(e,t.field,a.target.checked)}
        />`}case"date":return T`<input
          type="date"
          .value=${ks(r)}
          @keydown=${o=>this.cancelCellEdit(o,ks(r))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"datetime":return T`<input
          type="datetime-local"
          .value=${Cs(r)}
          @keydown=${o=>this.cancelCellEdit(o,Cs(r))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"number":return T`<input
          type="number"
          .value=${r==null?"":String(r)}
          @keydown=${o=>this.cancelCellEdit(o,r==null?"":String(r))}
          @change=${o=>{const a=o.target.value;this.setCell(e,t.field,a===""?null:Number(a))}}
        />`;default:return T`<input
          type="text"
          .value=${String(r??"")}
          @keydown=${o=>this.cancelCellEdit(o,String(r??""))}
          @change=${o=>this.setCell(e,t.field,o.target.value)}
        />`}}async deleteRow(e){const t=await be();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await be(),i=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,i):await r.store.tables.patch(this.tableId,i)}filteredRows(){const e=Object.entries(this.filters).filter(([,n])=>n&&n.trim().length>0),t=this.globalQuery.trim(),r=this.localQuery.trim();if(e.length===0&&t.length===0&&r.length===0)return this.rows;let i=this.rows;return e.length>0&&(i=i.filter(n=>e.every(([o,a])=>Fs(n.data[o],a)))),r&&(i=Ei(i,r,Ta)),t&&(i=Ei(i,t,Ta)),i}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,i=this.columns.find(a=>a.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,o=[...e];return o.sort((a,c)=>{const u=a.data[t],p=c.data[t],x=M=>M==null?0:M===""?1:2,b=x(u),k=x(p);return b!==2||k!==2?(b-k)*n:$h(u,p,i)*n}),o}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,i=zt.instance;if(!i)return;const n=new Map;let o=0;for(const u of this.rowsFacetedFor(t)){const p=u.data[t];if(p==null||String(p).trim()===""){o++;continue}const x=String(p);n.set(x,(n.get(x)??0)+1)}const a=[...n.entries()].map(([u,p])=>({value:u,count:p})).sort((u,p)=>p.count-u.count||u.value.localeCompare(p.value)),c=await i.open(r.getBoundingClientRect(),a,this.filters[t]??"",o,u=>this.onFilterInput(t,u));c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,i])=>i&&i.trim().length>0&&r!==e);return t.length===0?this.rows:this.rows.filter(r=>t.every(([i,n])=>Fs(r.data[i],n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,i=500;for(const n of this.visibleColumns){let o=!0;for(const c of t){const u=c.data[n.field];if(u==null)continue;if((typeof u=="string"?u:String(u)).length>=r){o=!1;break}}if(!o)continue;const a=new Set;for(const c of this.rowsFacetedFor(n.field)){const u=c.data[n.field];if(u==null||u==="")continue;const p=typeof u=="string"?u:String(u);if(!(p.length>=r)&&(a.add(p),a.size>=i))break}e.set(n.field,[...a].sort())}return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),r=this.visibleColumns,i=new Map;r.forEach((n,o)=>{if(n.width!=null)return;const a=t[o];a&&i.set(n.field,Math.round(a.getBoundingClientRect().width))}),i.size!==0&&(this.columns=this.columns.map(n=>i.has(n.field)?{...n,width:i.get(n.field)}:n))}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const i=r.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:i};const n=a=>{if(!this.resizing)return;const c=a.clientX-this.resizing.startX,u=Math.max(wh,this.resizing.startW+c);this.columns=this.columns.map(p=>p.field===this.resizing.field?{...p,width:u}:p)},o=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",o);const a=this.resizing?.field;if(this.resizing=null,!a)return;const c=await be();if(this.viewMode){const u={...this.viewInst?.columnWidths??{}};for(const p of this.columns)typeof p.width=="number"&&(u[p.field]=p.width);await c.store.viewInstances.patch(this.viewInstanceId,{columnWidths:u,updatedAt:Date.now()})}else await c.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",o)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientX<i.left+i.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,i=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!i)return;const n=[...this.columns],o=n.findIndex(p=>p.field===r);if(o<0)return;const[a]=n.splice(o,1);let c=n.findIndex(p=>p.field===t);if(c<0){n.splice(o,0,a);return}i==="after"&&(c+=1),n.splice(c,0,a);const u=await be();this.viewMode?await u.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:n.map(p=>p.field),updatedAt:Date.now()}):await u.store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await be(),t={};for(const[i,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[i]=n);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}tableSizingStyle(e){return e.length===0||!e.every(r=>typeof r.width=="number")?null:`table-layout: fixed; width: ${e.reduce((r,i)=>r+(i.width??0),0)+$s}px; min-width: 0`}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,i=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,i+r);return{slice:e.slice(i,n),topPad:i*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:r,topPad:i,bottomPad:n}=this.virtualSlice(e),o=this.computeFilterSuggestions(),a=this.externalLoading?this.externalProgress:null;return T`
      ${this.loading||this.externalLoading?T`<div
            class="load-bar"
            role="progressbar"
            aria-label="Loading rows"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${a!=null?Math.round(a*100):me}
          >
            <div
              class="load-bar-fill ${a!=null?"determinate":""}"
              style=${a!=null?`width:${Math.max(2,Math.round(a*100))}%`:me}
            ></div>
          </div>`:me}
      <table style=${this.tableSizingStyle(t)??me}>
        <colgroup>
          ${t.map(c=>T`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:${$s}px" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(c=>{const u=c.sortable!==!1,p=this.sortColumn===c.field&&this.sortDir,x=u?p==="asc"?"▲":p==="desc"?"▼":"⇅":"",b=`t-${c.type}`,k=this.dragSourceField===c.field,M=this.dropTargetField===c.field,F=M&&this.dropEdge==="before"?" drop-before":M&&this.dropEdge==="after"?" drop-after":"",R=(c.description?`${c.description}
`:"")+(c.units?`Units: ${c.units}
`:"")+`${c.field} — ${u?"click to sort, ":"not sortable · "}drag to reorder`;return T`
                <th
                  class=${`${b}${p?" sorted":""}${k?" drag-source":""}${F}${u?"":" no-sort"}`}
                  title=${R}
                  @click=${()=>u&&this.toggleSort(c.field)}
                  @dragover=${H=>this.onColDragOver(H,c.field,H.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(c.field)}
                  @drop=${H=>this.onColDrop(H,c.field)}
                >
                  <div class="col-head">
                    <span
                      class="col-grip mi sm"
                      title="Drag to reorder column"
                      draggable="true"
                      @click=${H=>H.stopPropagation()}
                      @dragstart=${H=>this.onColDragStart(H,c.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label"
                      >${c.label}${c.units?T`<span class="col-units"> (${c.units})</span>`:""}</span
                    ><span class="sort-icon">${x}</span>
                    <button
                      class=${`funnel${this.filters[c.field]?" active":""}`}
                      title="Filter by value"
                      @click=${H=>this.openFilterPicker(H,c.field)}
                    >
                      <span class="mi sm">filter_list</span>
                    </button>
                  </div>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${H=>H.stopPropagation()}
                    @pointerdown=${H=>this.onResizeStart(H,c.field,H.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:${$s}px"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(c=>{const u=o.get(c.field)??[];return T`
                <th>
                  <filter-combobox
                    .value=${this.filters[c.field]??""}
                    .options=${u}
                    placeholder="filter…"
                    title="Filter: text = contains, ^text = starts with, !text = does not contain, NULL = empty, !NULL = has a value. Comma-separate for several values (a,b = a OR b; !a,!b excludes both); quote a value containing a comma."
                    @filter-change=${p=>this.onFilterInput(c.field,p.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${i>0?T`<tr class="spacer" style=${`height:${i}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${r.map(c=>T`
              <tr>
                ${t.map(u=>T`<td class=${`t-${u.type}${u.renderer?` r-${u.renderer}`:""}`}>
                      ${this.renderCell(c,u)}
                    </td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(c.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?T`<tr class="spacer" style=${`height:${n}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};rt.styles=[Jt,qe`
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
      /* Null / empty cell highlight — picks them out at a glance without
       shouting like full red. */
      td.is-null {
        background: #fef2f2;
      }
      td.is-null input[type='text'] {
        background: transparent;
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
    `];ut([Mt({type:String})],rt.prototype,"tableId",2);ut([Mt({type:String})],rt.prototype,"viewInstanceId",2);ut([q()],rt.prototype,"columns",2);ut([q()],rt.prototype,"rows",2);ut([q()],rt.prototype,"sortColumn",2);ut([q()],rt.prototype,"sortDir",2);ut([q()],rt.prototype,"filters",2);ut([q()],rt.prototype,"globalQuery",2);ut([q()],rt.prototype,"localQuery",2);ut([q()],rt.prototype,"dragSourceField",2);ut([q()],rt.prototype,"dropTargetField",2);ut([q()],rt.prototype,"dropEdge",2);ut([q()],rt.prototype,"resizing",2);ut([q()],rt.prototype,"cellRenderers",2);ut([q()],rt.prototype,"scrollY",2);ut([q()],rt.prototype,"viewportHeight",2);ut([q()],rt.prototype,"loading",2);ut([q()],rt.prototype,"externalLoading",2);ut([q()],rt.prototype,"externalProgress",2);rt=ut([tt("data-table")],rt);function vh(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function xh(e,t,r,i){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(o=>o.id!==i&&o.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function ks(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function Cs(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function $h(e,t,r){switch(r){case"number":{const i=Number(e),n=Number(t);return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const i=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function un(e,t,r){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:r}}))}class Vt extends Error{constructor(t,r){const i=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(i),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function fn(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),i={};for(const[c,u]of t.searchParams)i[c]=u;let n,o=null,a=null;if(r.length>=2){a=decodeURIComponent(r[r.length-1]),o=decodeURIComponent(r[r.length-2]);const c=r.slice(0,r.length-2).join("/");n=t.origin+(c?"/"+c:"")}else r.length===1&&(o=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:o,table:a,query:i}}function lr(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[i,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(i,String(n));return r.toString()}function kh(e){const t=e?.next_url??null,r=e?.next,i=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],o=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(c=>Array.isArray(c)&&o?Object.fromEntries(o.map((u,p)=>[u,c[p]])):c),nextUrl:t,nextToken:i,hasMore:t!=null||i!=null,truncated:e?.truncated===!0}}function Ch(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function Aa(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],i={},n=e?.column_details;if(Array.isArray(n))for(const c of n)i[c.column??c.name]=c;else n&&typeof n=="object"&&Object.assign(i,n);for(const c of r)c in i||(i[c]={});const a=(r.length?r:Object.keys(i)).map(c=>{const u=i[c]||{},p=u.is_pk===!0||u.is_pk===1||t.includes(c),x={field:c,label:Kl(c),type:Ch(u.sqlite_type??u.type,c)};return(u.notnull===!0||u.notnull===1||p)&&(x.notnull=!0),p&&(x.unique=!0),(u.hidden===!0||u.hidden===1)&&(x.hidden=!0),u.default!=null&&u.default!==""&&(x.default=u.default),x});if(t.length===0){const c=a.filter(u=>u.unique).map(u=>u.field);c.length&&t.push(...c)}return{columns:a,pks:t}}function Kl(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function Li(e){const t=[],r=new Set;for(const i of e)for(const n of Object.keys(i))r.has(n)||(r.add(n),t.push(n));return t.map(i=>({field:i,label:Kl(i),type:Eh(e.map(n=>n[i]))}))}function Eh(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Sh(r))?"datetime":"string"}function Sh(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function _h(e){const t=new TextEncoder().encode(String(e));let r="";for(const i of t){const n=String.fromCharCode(i);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+i.toString(16).toUpperCase().padStart(2,"0")}return r}function Th(e,t){return!t||t.length===0?null:t.map(r=>_h(e[r])).join(",")}function Ah(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const i of t){if(typeof i=="string"){r.push(i);continue}if(i&&typeof i=="object"&&typeof i.name=="string"){if(i.name==="_memory")continue;r.push(typeof i.route=="string"&&i.route?i.route:i.name)}}return r}function Ph(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],i=[];for(const n of r){if(typeof n=="string"){i.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&i.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return i}async function Dn(e,t){let r;try{r=await e(t)}catch(n){const o=n?.message||"network error";throw new Vt({error:`Couldn't reach ${t} (${o}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Vt(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const i=await r.json();if(i&&i.ok===!1)throw new Vt(i,r.status);return i}async function ao(e,t){return Ah(await Dn(e,`${t}/-/databases.json`))}async function _i(e,t,r){return Ph(await Dn(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function Fi(e,t){const r=lr(t,{_extra:"column_details"}),i=await Dn(e,r);let{columns:n,pks:o}=Aa(i),a=!!i&&i.column_details!=null,c=i?.count??null,u=i;if(n.length===0){const p=lr(t,{_extra:"columns"}),x=await Dn(e,p);({columns:n,pks:o}=Aa(x)),a=!!x&&x.column_details!=null,c=x?.count??c,u=x}return{columns:n,pks:o,count:c,typed:a,raw:u}}async function Ms(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const r=await Fi(e,t);return{db:t.db,table:t.table,count:r.count,hidden:!1,pks:r.pks}}function Ih(e,t,r){const i=e&&typeof e=="object"?e:{},n=t&&r&&i.databases?.[t]?.tables?.[r]||t&&r&&i.databases?.[t]?.tables?.[r.toLowerCase()]||{},o=t&&i.databases?.[t]||{},a=F=>n[F]??o[F]??i[F],c={columns:{},units:{}};typeof n.sort=="string"&&(c.sort=n.sort),typeof n.sort_desc=="string"&&(c.sortDesc=n.sort_desc),typeof n.size=="number"&&(c.size=n.size),Array.isArray(n.sortable_columns)&&(c.sortableColumns=n.sortable_columns.slice()),typeof n.label_column=="string"&&(c.labelColumn=n.label_column),n.hidden===!0&&(c.hidden=!0),typeof n.description=="string"&&(c.description=n.description),typeof n.description_html=="string"&&(c.descriptionHtml=n.description_html);const u=a("source"),p=a("source_url"),x=a("license"),b=a("license_url"),k=a("about"),M=a("about_url");if(typeof u=="string"&&(c.source=u),typeof p=="string"&&(c.sourceUrl=p),typeof x=="string"&&(c.license=x),typeof b=="string"&&(c.licenseUrl=b),typeof k=="string"&&(c.about=k),typeof M=="string"&&(c.aboutUrl=M),n.columns&&typeof n.columns=="object")for(const[F,R]of Object.entries(n.columns))typeof R=="string"&&(c.columns[F]=R);if(n.units&&typeof n.units=="object")for(const[F,R]of Object.entries(n.units))typeof R=="string"&&(c.units[F]=R);return c}const Pa=new Map;async function Rh(e,t){let r=Pa.get(t);return r||(r=Dn(e,`${t}/-/metadata.json`).catch(()=>({})),Pa.set(t,r)),r}async function lo(e,t){const r=await Rh(e,t.base);return Ih(r,t.db,t.table)}function Dh(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function co(e,t){const r=e.sortableColumns!=null?new Set(e.sortableColumns):null,i=t.map(c=>{const u=e.columns[c.field],p=e.units[c.field],x=r?r.has(c.field):void 0;return u==null&&p==null&&x===void 0?c:{...c,...u!=null?{description:u}:{},...p!=null?{units:p}:{},...x!==void 0?{sortable:x}:{}}}),n=new Set(t.map(c=>c.field)),o={};e.sort&&n.has(e.sort)?(o.sortColumn=e.sort,o.sortAsc=!0):e.sortDesc&&n.has(e.sortDesc)&&(o.sortColumn=e.sortDesc,o.sortAsc=!1);const a=Dh(e);return a&&(o.info=a),e.labelColumn&&n.has(e.labelColumn)&&(o.labelColumn=e.labelColumn),{columns:i,patch:o}}function uo(e,t){if(t.length===0)return e;const r=new Map(Li(t).map(i=>[i.field,i.type]));return e.map(i=>{if(i.type!=="string")return i;const n=r.get(i.field);return n&&n!=="string"?{...i,type:n}:i})}async function Mr(e,t,r={}){const i=r.maxRows??1e4,o={_size:r.pageSize??1e3,...r.extraParams||{}};let a=r.startUrl??lr(t,o);const c=[];let u=!1,p=!1,x=0,b,k;for(;a;){let M;try{M=await Dn(e,a)}catch(H){if(c.length===0&&!r.startUrl)throw H;b=H instanceof Vt&&H.status?`stopped after ${c.length} rows: HTTP ${H.status}`:`stopped after ${c.length} rows: ${H?.message??String(H)}`,p=!0,k=a;break}const F=kh(M);c.push(...F.rows),u=u||F.truncated,x+=1,r.onProgress?.(c.length);const R=F.nextUrl!=null?F.nextUrl:F.nextToken!=null?lr(t,{_next:F.nextToken}):null;R&&c.length<i&&F.rows.length>0?a=R:(p=R!=null&&F.rows.length>0,p&&(k=R??void 0),a=null)}return{rows:c,truncated:u,hasMore:p,pages:x,error:b,nextUrl:k}}function Oh(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function Vl(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function Gl(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function Mi(e,t,r,i){let n;try{n=await e(t,{method:"POST",headers:Oh(i),body:JSON.stringify(r)})}catch(a){throw new Vt({error:`Couldn't reach ${t} (${a?.message||"network error"}).`},0)}if(n&&n.ok===!1){let a=null;try{a=await n.json()}catch{}throw new Vt(a&&typeof a=="object"?a:{error:`HTTP ${n.status} for ${t}`},n.status)}const o=await n.json();if(o&&o.ok===!1)throw new Vt(o,n.status);return o}async function Ia(e,t,r,i={}){const n=await Mi(e,Vl(t,"insert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function jh(e,t,r,i,n={}){const o=await Mi(e,Gl(t,r,"update"),{update:i,return:!0},n.token);return o&&typeof o.row=="object"&&o.row?o.row:Array.isArray(o?.rows)&&o.rows[0]?o.rows[0]:null}async function Ra(e,t,r,i={}){await Mi(e,Gl(t,r,"delete"),{},i.token)}async function zh(e,t,r,i={}){const n=await Mi(e,Vl(t,"upsert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function Lh(e,t){const r=lr(t,{_extra:"primary_keys"}),i=await Dn(e,r);return Array.isArray(i?.primary_keys)?i.primary_keys:[]}async function Yl(e,t){try{const r=await Dn(e,lr(t,{_extra:"count"}));return typeof r?.count=="number"?r.count:null}catch{return null}}async function Xl(e,t,r={}){const i=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,i);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const o=await n.json(),a=o?.datasette?.version??o?.version??null;let c=null;try{c=(await(await e(`${t}/-/actor.json`,i)).json())?.actor??null}catch{}return{reachable:!0,version:a,actor:c,writable:!!(r.token&&c)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function cr(e,t){return t?(r,i)=>{const n=(i??{}).headers??{};return e(r,{...i??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}class Fh extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function Ql(e){return`datasette:token:${e}`}function Mh(e,t){for(const[r,i]of Object.entries(t))if(r!=="data"&&e[r]!==i)return!1;return!0}function Bh(e,t){const r=e.source,i=r?.config??{},n={base:i.base,db:i.db,table:i.table,query:{}},o=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],a=r?.writable===!0,c=i.maxRows??1e4,u=i.pollIntervalMs??0,p=(oe,G)=>t.backend.fetch(oe,G);async function x(){const G=(await t.settings.findOne(Ql(i.base)))?.value;return typeof G=="string"&&G.length>0?G:void 0}const b=async(oe,G)=>cr(p,await x())(oe,G);function k(oe){return{id:Th(oe,o)??Nh(),tableId:e.id,data:oe,updatedAt:Date.now()}}function M(oe){if(!a)throw new Fh(oe)}function F(oe){const G={};for(const[J,he]of Object.entries(oe))o.includes(J)||(G[J]=he);return G}const R=new Set;let H=[],V=!1,ue=null;function se(){return ue||(ue=(async()=>{try{const{rows:oe}=await Mr(b,n,{maxRows:c});H=oe.map(k),V=!0;for(const G of R)G(H);return H}finally{ue=null}})(),ue)}return{async find(oe){const G=V?H:await se();return!oe||Object.keys(oe).length===0?G:G.filter(J=>Mh(J,oe))},async findOne(oe){return(V?H:await se()).find(J=>J.id===oe)??null},async insert(oe){M("insert");const[G]=await Ia(b,n,[oe.data]),J=k(G??oe.data);return t.events.emit("row:created",{tableId:e.id,row:J}),se(),J},async bulkInsert(oe){if(oe.length===0)return[];M("insert");const G=await Ia(b,n,oe.map(he=>he.data)),J=(G.length?G:oe.map(he=>he.data)).map(k);return se(),J},async upsert(oe){M("upsert");const[G]=await zh(b,n,[oe.data]),J=k(G??oe.data);return se(),J},async patch(oe,G){M("update");const J=G.data,he=F(J??{}),$e=await jh(b,n,oe,he),Te=k($e??{...J??{}});return t.events.emit("row:updated",{tableId:e.id,row:Te,prev:Te}),se(),Te},async remove(oe){M("delete"),await Ra(b,n,oe),t.events.emit("row:deleted",{tableId:e.id,rowId:oe}),se()},async bulkRemove(oe){if(oe.length!==0){M("delete");for(const G of oe)await Ra(b,n,G);se()}},subscribe(oe){R.add(oe),V?oe(H):se();let G=null;return u>0&&(G=setInterval(()=>void se(),u)),()=>{R.delete(oe),G&&clearInterval(G)}},async refresh(){await se()}}}function Nh(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Ti=e=>e.replace(/^https?:\/\//,""),Uh=e=>new Promise(t=>setTimeout(t,e));function Hh(){const e=globalThis.__eda_resumeDelayMs;return typeof e=="number"&&e>=0?e:6e4}function qh(e,t,r){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(r)}`}function ho(e,t,r,i){const n={...e.info??{}};return!n.source&&!n.sourceUrl&&(n.source=`${Ti(t)}/${r}/${i}`,n.sourceUrl=qh(t,r,i)),{...e,info:n}}function fo(e,t,r,i){if(!(!e||!t))return{nextUrl:t,loadedRows:r,...i!=null?{totalCount:i}:{}}}async function Jl(e,t,r,i={}){if(t.db&&t.table)return[await Ms(e,t)];let n=[];if(t.db){if(n.push(...await _i(e,t.base,t.db)),i.skipPicker)return n.filter(c=>!c.hidden)}else{const c=await ao(e,t.base);if(c.length===0)return[];let u=c;if(c.length>1){const p=await Ls(c.map(x=>({name:x,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${Ti(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!p)return null;u=p.map(x=>c[x])}for(const p of u)try{n.push(...await _i(e,t.base,p))}catch{}}if(n.length===0)return[];const o=new Set(n.map(c=>c.db)).size>1,a=await Ls(n.map(c=>({name:o?`${c.db}/${c.table}`:c.table,size:c.count,detail:o?void 0:c.db,hidden:c.hidden})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${Ti(t.base)}.`,confirmLabel:r});return a?a.map(c=>n[c]):null}const Wh='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Kh={id:"datasette-source",name:"Datasette",type:"source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-source.ts"},Wt={maxImportRows:1e4,pageSize:1e3},Vh="https://latest.datasette.io/fixtures/facetable";function Gh(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:Wh,tooltip:"Connect a live, editable Datasette table",onClick:()=>Zh(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>rf(t,r)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:r})=>of(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:Bh}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const i=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Vh}`,"","Import from Datasette");i&&await Da(t,i)}}),e.ui.registerDropHandler(async(t,r)=>{const i=t.dataTransfer?.getData("text/plain")||"";return Yh(i)?(t.preventDefault(),await Da(r,i),!0):!1})}async function Da(e,t){try{await po(e,t)}catch(r){let i;r instanceof Vt?i=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:i=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(i,"Datasette import failed")}}function Yh(e){try{const t=fn(e);return!!(t.db&&t.table)}catch{return!1}}function Zl(e,t){if(!e.has(t))return t;for(let r=2;;r++){const i=`${t} (${r})`;if(!e.has(i))return i}}async function po(e,t,r={}){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=fn(t),a=await Jl(F=>e.backend.fetch(F),n,"Import",{skipPicker:r.skipTablePicker});if(a===null)return;if(a.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const c=[];let u=0;for(const F of a){const R={base:n.base,db:F.db,table:F.table,query:{}},H=await Xh(e,i,R);if(H.skipped){u+=1;continue}c.push({tableId:H.tableId,ref:R,overwrite:H.overwrite,knownCount:F.count})}let p=0,x=0;const b=[],k=[],M=[];for(const F of c)try{const R=await Qh(e,F.tableId,F.ref,F.overwrite,F.knownCount);p+=1,x+=R.rowCount,R.error?k.push(`${F.ref.db}/${F.ref.table} (${R.error})`):(R.hasMore||R.truncated)&&b.push(`${F.ref.db}/${F.ref.table}`)}catch(R){M.push(`${F.ref.db}/${F.ref.table}: ${R?.message??String(R)}`)}Jh(e,{imported:p,skipped:u,totalRows:x,capped:b,partial:k,failed:M,requested:a.length})}async function Xh(e,t,r){const i=`${r.db}/${r.table}`,n={type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},o=(await e.store.tables.find()).filter(p=>p.workspaceId===t),a=o.find(p=>p.name.toLowerCase()===i.toLowerCase());let c=i;if(a){const p=await e.ui.dialogs.choice(`A table named "${i}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!p||p==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(p==="Overwrite")return await e.store.tables.patch(a.id,{origin:n,updatedAt:Date.now()}),{tableId:a.id,overwrite:!0};c=Zl(new Set(o.map(x=>x.name)),i)}const u=Br();return await e.store.tables.insert({id:u,workspaceId:t,name:c,code:tc(`${r.db}-${r.table}`),columns:[],view:"table",origin:n,updatedAt:Date.now()}),{tableId:u,overwrite:!1}}async function Qh(e,t,r,i,n=null){const o=`${r.db}/${r.table}`,a=c=>e.backend.fetch(c);un(t,!0);try{let c=[],u=n,p=!1,x=[];try{const ne=await Fi(a,r);c=ne.columns,u=u??ne.count,p=ne.typed,x=ne.pks??[]}catch{}u==null&&(u=await Yl(a,r));const b=u&&u>0?Math.min(u,Wt.maxImportRows):0,k=[];let M=!1,F=!1,R=0,H,V,ue;for(;;){const ne=await Mr(a,r,{maxRows:Math.max(0,Wt.maxImportRows-k.length),pageSize:Wt.pageSize,...ue?{startUrl:ue}:{},onProgress:K=>{b>0&&un(t,!0,Math.min(1,(k.length+K)/b))}});if(k.push(...ne.rows),M=M||ne.truncated,R+=ne.pages,F=ne.hasMore,H=ne.error,V=ne.nextUrl,!ne.error||!ne.nextUrl||k.length>=Wt.maxImportRows||await e.ui.dialogs.choice(`Import of "${o}" paused after ${k.length.toLocaleString()} rows (${ne.error}). Datasette may be rate-limiting a large import. Wait 60 seconds and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,["Resume in 60s","Cancel"],"Import paused — rate limited?")!=="Resume in 60s")break;un(t,!0),e.ui.dialogs.toast(`Resuming "${o}" in 60s…`,{kind:"info",title:"Import paused"}),await Uh(Hh()),ue=ne.nextUrl,H=void 0,V=void 0}let oe=c.length===0?Li(k):p?c:uo(c,k),G={};try{const ne=await lo(a,r),pe=co(ne,oe);oe=pe.columns,G=pe.patch}catch{}G=ho(G,r.base,r.db,r.table);const J=await e.store.tables.findOne(t),he=J?.columns??[],$e=he.length===0,{columns:Te}=Ml(he,oe,J?.deletedColumns),Ie=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const g=fo(H,V,k.length,u),v=x.length>0&&J?.origin?{origin:{...J.origin,pks:x}}:{},S=$e?{columns:Te,...G,...v,importResume:g,updatedAt:Ie}:{columns:Te,...G.info?{info:G.info}:{},...v,importResume:g,updatedAt:Ie};await e.store.tables.patch(t,S);const y=e.store.rows(t);if(i){const ne=await y.find();await y.bulkRemove(ne.map(pe=>pe.id))}const $=k.map(ne=>({id:Br(),tableId:t,data:ne,updatedAt:Ie}));return await y.bulkInsert($),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:k.length}),{name:o,rowCount:k.length,hasMore:F,truncated:M,pages:R,count:u,error:H}}finally{un(t,!1)}}function Jh(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,i=`${t.imported} table${t.imported===1?"":"s"}`,n=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${i} (${r});${n} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.capped.length} capped at ${Wt.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${i} (${r}) from Datasette.${n}`,{kind:"success",title:"Datasette import"})}async function Zh(e){const t=Kt.instance??ef(),r=(n,o)=>e.backend.fetch(n,o),i=await t.open({initialUrl:"https://datasette.io",async onTest(n,o){const a=fn(n),c=await Xl(r,a.base,{token:o||void 0});if(a.db&&a.table){await Ms(cr(r,o||void 0),a);const p=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${p} — table found, signed in, read-write.`:`Reachable${p} — table found, read-only (no token / not authenticated).`}if(!c.reachable)return`Unreachable: ${c.error??"no response"}`;const u=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${u} — signed in, read-write.`:`Reachable${u} — read-only (no token / not authenticated).`},async onConnect(n,o){const a=fn(n);a.db&&a.table&&await Ms(cr(r,o||void 0),a)}});if(i)try{await ec(e,i.url,i.token)}catch(n){const o=n instanceof Vt?n.message:n?.message??String(n);await e.ui.dialogs.alert(o,"Connect Datasette failed")}}function ef(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function ec(e,t,r){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=fn(t),o=(b,k)=>e.backend.fetch(b,k),a=cr(o,r||void 0),c=await Xl(o,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:Ql(n.base),value:r});let u;try{u=await Jl(a,n,"Connect")}catch(b){const k=b instanceof Vt?b.message:b?.message??String(b);throw new Error(`Couldn't read tables from ${Ti(n.base)}: ${k}`)}if(u===null)return;if(u.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const p=[];for(const b of u){const k=await tf(e,i,n.base,b,c.writable,r);k!==null&&p.push({tableId:k,c:b})}if(p.length===0)return;const x=c.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${p.length} live table${p.length===1?"":"s"} from Datasette (${x}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:b,c:k}of p)nf(e,b,n.base,k,r)}async function tf(e,t,r,i,n,o){const a=(await e.store.tables.find()).filter(k=>k.workspaceId===t);let c=`${i.db}/${i.table}`,u=a.find(k=>{const M=k.source?.config;return k.source?.type==="datasette"&&M?.base===r&&M?.db===i.db&&M?.table===i.table});if(!u){const k=a.find(M=>M.name.toLowerCase()===c.toLowerCase());if(k){const M=await e.ui.dialogs.choice(`A table named "${c}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!M||M==="Skip")return null;M==="Overwrite"?u=k:c=Zl(new Set(a.map(F=>F.name)),c)}}let p=i.pks??[];if(p.length===0){const k=cr((M,F)=>e.backend.fetch(M,F),o||void 0);try{p=await Lh(k,{base:r,db:i.db,table:i.table,query:{}})}catch{p=[]}}const x=u?.id??Br(),b={...u??{},id:x,workspaceId:t,name:c,code:tc(`${i.db}-${i.table}`),columns:u?.columns??[],view:u?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:i.db,table:i.table,pks:p}},updatedAt:Date.now()};return u?await e.store.tables.upsert(b):await e.store.tables.insert(b),x}async function nf(e,t,r,i,n){const o={base:r,db:i.db,table:i.table,query:{}},a=cr((c,u)=>e.backend.fetch(c,u),n||void 0);try{let c=[],u=!1;try{const R=await Fi(a,o);c=R.columns,u=R.typed}catch{}const{rows:p}=await Mr(a,o,{maxRows:50,pageSize:50}),x=c.length===0?Li(p):u?c:uo(c,p);if(x.length===0)return;const b=await e.store.tables.findOne(t);if(!b)return;const k=b.source?.config?.pks??[];let M=x.map(R=>k.includes(R.field)?{...R,unique:!0,notnull:!0}:R),F={};try{const R=await lo(a,o),H=co(R,M);M=H.columns,F=H.patch}catch{}F=ho(F,o.base,i.db,i.table),await e.store.tables.patch(t,{columns:M,...F,updatedAt:Date.now()})}catch{}}async function rf(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const i=e.store.rows(t);typeof i.refresh=="function"&&await i.refresh();const n=await i.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await sf(e,r)}catch(i){const n=i instanceof Vt?i.message:i?.message??String(i);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function sf(e,t){const r=fn(t.origin.url),i=u=>e.backend.fetch(u);un(t.id,!0);let n,o=[];try{let u=[],p=null,x=!1;try{const $=await Fi(i,r);u=$.columns,p=$.count,x=$.typed}catch{}p==null&&(p=await Yl(i,r));const b=p&&p>0?Math.min(p,Wt.maxImportRows):0,{rows:k,hasMore:M,truncated:F,error:R,nextUrl:H}=await Mr(i,r,{maxRows:Wt.maxImportRows,pageSize:Wt.pageSize,onProgress:$=>{b>0&&un(t.id,!0,Math.min(1,$/b))}});let V=u.length===0?Li(k):x?u:uo(u,k),ue={};try{const $=await lo(i,r),ne=co($,V);V=ne.columns,ue=ne.patch}catch{}ue=ho(ue,r.base,r.db,r.table);const se=t.columns.length===0,oe=Ml(t.columns,V,t.deletedColumns);o=oe.newFields;const G=Date.now(),J=fo(R,H,k.length,p),he=se?{columns:oe.columns,...ue,importResume:J,updatedAt:G}:{columns:oe.columns,...ue.info?{info:ue.info}:{},importResume:J,updatedAt:G};await e.store.tables.patch(t.id,he);const $e=t.origin?.pks??[],Te=new Set(V.map($=>$.field)),Ie=t.columns.map($=>$.field).filter($=>!Te.has($)&&!$e.includes($)),g=(t.deletedColumns??[]).filter($=>Te.has($)),v=e.store.rows(t.id),S=await v.find(),{data:y}=oh({oldRows:S.map($=>({data:$.data})),freshRows:k,pks:$e,userAddedFields:Ie,deletedRemoteFields:g});await v.bulkRemove(S.map($=>$.id)),await v.bulkInsert(y.map($=>({id:Br(),tableId:t.id,data:$,updatedAt:G}))),n={rowCount:y.length,hasMore:M,truncated:F,error:R}}finally{un(t.id,!1)}const a=[];n.error?a.push(`partial (${n.error})`):(n.hasMore||n.truncated)&&a.push(`capped at ${Wt.maxImportRows}`),o.length>0&&a.push(`${o.length} new column${o.length===1?"":"s"}`);const c=a.length?` — ${a.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${n.rowCount} rows from ${r.db}/${r.table}${c}.`,{kind:n.error||n.hasMore||n.truncated||o.length>0?"warning":"success",title:"Refresh"}),o.length>0&&af(t.id,r,o)}async function of(e,t){const r=await e.store.tables.findOne(t),i=r?.importResume;if(!r||!r.origin?.url||!i)return;const n=fn(r.origin.url),o=k=>e.backend.fetch(k),a=i.loadedRows,c=i.totalCount??null,u=c&&c>0?Math.min(c,Wt.maxImportRows):0;un(t,!0,u>0?Math.min(1,a/u):void 0);let p=0,x;try{const k=await Mr(o,n,{startUrl:i.nextUrl,maxRows:Math.max(0,Wt.maxImportRows-a),pageSize:Wt.pageSize,onProgress:R=>{u>0&&un(t,!0,Math.min(1,(a+R)/u))}});p=k.rows.length;const M=Date.now();await e.store.rows(t).bulkInsert(k.rows.map(R=>({id:Br(),tableId:t,data:R,updatedAt:M}))),x={error:k.error,nextUrl:k.nextUrl};const F=fo(k.error,k.nextUrl,a+p,c);await e.store.tables.patch(t,{importResume:F,updatedAt:M})}catch(k){const M=k instanceof Vt?k.message:k?.message??String(k);e.ui.dialogs.toast(`Couldn't resume ${n.db}/${n.table}: ${M}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{un(t,!1)}const b=a+p;x.error?e.ui.dialogs.toast(`Resumed ${n.db}/${n.table}: +${p} rows (${b} total) — interrupted again (${x.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${n.db}/${n.table}: +${p} rows (${b} total).`,{kind:"success",title:"Resume import"})}function af(e,t,r){const i=r.join(", "),n=r.length!==1,o=`Refreshing ${t.db}/${t.table} revealed ${r.length} new column${n?"s":""}: ${i}. Review, reorder or hide ${n?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:o}}))}function tc(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Br(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const lf=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:ec,importDatasette:po,init:Gh,meta:Kh},Symbol.toStringTag,{value:"Module"}));function mo(e){let t;try{t=new URL(e)}catch{return e}const r=t.hostname.toLowerCase();if(r==="github.com"||r==="www.github.com"){const i=t.pathname.split("/").filter(Boolean);if(i.length>=5&&(i[2]==="blob"||i[2]==="raw")){const n=i[0],o=i[1];let a=i.slice(3);return a.length>=3&&a[0]==="refs"&&(a[1]==="heads"||a[1]==="tags")&&(a=a.slice(2)),`https://raw.githubusercontent.com/${[n,o,...a].join("/")}`}}return e}function nc(e){if(e.length>1024)return!1;const t=e.split(`
`);return t[0]?.startsWith("version https://git-lfs.github.com/spec/v1")===!0&&t.some(r=>r.startsWith("oid "))&&t.some(r=>r.startsWith("size "))}function rc(e){const t=mo(e);let r;try{r=new URL(t)}catch{return null}if(r.hostname.toLowerCase()!=="raw.githubusercontent.com")return null;const i=r.pathname.replace(/^\/+/,"");return i.split("/").filter(Boolean).length<4?null:`https://media.githubusercontent.com/media/${i}`}async function ic(e,t){const r=Number(e.headers?.get?.("content-length")),i=e.body?.getReader?.();if(i&&Number.isFinite(r)&&r>0){const n=[];let o=0;for(;;){const{done:u,value:p}=await i.read();if(u)break;p&&(n.push(p),o+=p.length,t?.(Math.min(1,o/r)))}const a=new Uint8Array(o);let c=0;for(const u of n)a.set(u,c),c+=u.length;return new TextDecoder().decode(a)}return await e.text()}const cf={id:"url-source",name:"URL Reference",type:"source",version:"0.1.0",description:'Backs a table with a live read-only fetch of a plain CSV or JSON URL — a "reference" table whose rows are never persisted locally.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/url-source.ts"};function df(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"url",create:sc}),e.ui.registerTableButton({id:"url-source:refresh",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this reference from its source URL",visible:t=>t.source?.type==="url",onClick:async(t,{tableId:r})=>{try{const i=t.store.rows(r);typeof i.refresh=="function"&&await i.refresh(),t.ui.dialogs.toast("Reference refreshed.",{kind:"success",title:"Refresh"})}catch(i){t.ui.dialogs.toast(`Refresh failed: ${i.message}`,{kind:"error",title:"Refresh"})}}})}class Wn extends Error{constructor(t){super(`This is a reference (read-only) table — ${t} is not permitted. Import a copy to edit.`),this.name="ReadOnlyReferenceError"}}function uf(e,t){for(const[r,i]of Object.entries(t))if(r!=="data"&&e[r]!==i)return!1;return!0}function hf(e){const t=r=>typeof r=="object"&&r!==null&&!Array.isArray(r);if(Array.isArray(e))return e.filter(t);if(t(e)){for(const r of["rows","records","data"]){const i=e[r];if(Array.isArray(i))return i.filter(t)}for(const r of Object.values(e))if(Array.isArray(r))return r.filter(t)}return[]}function sc(e,t){const r=e.source?.config??{},i=typeof r.url=="string"?r.url:"",n=r.format==="json"?"json":"csv",o=new Set;let a=[],c=!1,u=null;function p(M){return M.map((F,R)=>({id:`url:${R}`,tableId:e.id,data:F,updatedAt:0}))}async function x(M){let F;try{F=await t.backend.fetch(M)}catch(R){throw new Error(`Could not reach ${i}: ${R?.message??String(R)}`)}if(!F.ok)throw new Error(`Could not load ${i}: HTTP ${F.status} ${F.statusText}`);try{return await ic(F)}catch(R){throw new Error(`Could not read response from ${i}: ${R?.message??String(R)}`)}}async function b(){if(!i)throw new Error("This reference table has no URL configured.");const M=mo(i);let F=await x(M);if(nc(F)){const R=rc(M);R&&(F=await x(R))}try{return n==="json"?hf(JSON.parse(F)):Jn(F).rows}catch(R){throw new Error(`Could not parse ${n.toUpperCase()} from ${i}: ${R?.message??String(R)}`)}}function k(){return u||(u=(async()=>{try{const M=await b();a=p(M),c=!0;for(const F of o)F(a);return a}finally{u=null}})(),u)}return{async find(M){const F=c?a:await k();return!M||Object.keys(M).length===0?F:F.filter(R=>uf(R,M))},async findOne(M){return(c?a:await k()).find(R=>R.id===M)??null},async insert(){throw new Wn("insert")},async bulkInsert(){throw new Wn("insert")},async upsert(){throw new Wn("upsert")},async patch(){throw new Wn("update")},async remove(){throw new Wn("delete")},async bulkRemove(){throw new Wn("delete")},subscribe(M){return o.add(M),c?M(a):k(),()=>{o.delete(M)}},async refresh(){c=!1,a=[],await k()}}}const ff=Object.freeze(Object.defineProperty({__proto__:null,ReadOnlyReferenceError:Wn,createUrlCollection:sc,init:df,meta:cf},Symbol.toStringTag,{value:"Module"})),pf={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function mf(){}async function oc(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const o=await e.store.rows(n.id).find();i.push(lc(n,o),"")}return i.push("COMMIT;",""),i.join(`
`)}function ac(e,t){return["-- easyDBAccess table export",`-- table:    ${e.name}`,`-- exported: ${new Date().toISOString()}`,"","BEGIN;","",lc(e,t),"","COMMIT;",""].join(`
`)}function lc(e,t){const r=Bs(e.code||e.name||`table_${e.id}`),i=['  "__id" TEXT PRIMARY KEY',...e.columns.map(o=>`  ${gf(o)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,i.join(`,
`),");"];if(t.length>0){const a=["__id",...e.columns.map(c=>c.field)].map(c=>`"${Bs(c)}"`).join(", ");for(const c of t){const u=[Oa(c.id),...e.columns.map(p=>Oa(c.data[p.field],p.type))];n.push(`INSERT INTO "${r}" (${a}) VALUES (${u.join(", ")});`)}}return n.join(`
`)}function gf(e){const t=[`"${Bs(e.field)}"`,bf(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function bf(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function Oa(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=yf(e);return r===null?"NULL":pi(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?pi(e.toISOString()):pi(typeof e=="string"?e:JSON.stringify(e))}function yf(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?ja(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const i=new Date(t);return Number.isFinite(i.getTime())?ja(i):null}return null}function ja(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),i=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${i}`}function pi(e){return`'${e.replace(/'/g,"''")}'`}function Bs(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const wf=Object.freeze(Object.defineProperty({__proto__:null,init:mf,meta:pf,serializeTableAsSql:ac,serializeWorkspaceAsSql:oc},Symbol.toStringTag,{value:"Module"})),cc="server-sync:url";function dc(e){return`server-sync:etag:${e}`}async function uc(e){const r=(await e.store.settings.findOne(cc))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function vf(e,t){await e.store.settings.upsert({key:cc,value:t.replace(/\/+$/,"")})}async function hc(e,t){const i=(await e.store.settings.findOne(dc(t)))?.value;return typeof i=="string"?i:null}async function Xn(e,t,r){await e.store.settings.upsert({key:dc(t),value:r})}function Bi(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function za(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function fc(e,t,r){const i=Lr(r,t),n=(await e.store.tables.find()).filter(a=>a.workspaceId===t);for(const a of n){const c=e.store.rows(a.id),u=await c.find();await c.bulkRemove(u.map(p=>p.id)),await e.store.tables.remove(a.id)}let o=0;for(const a of i){const c=La(),u=await e.store.tables.insert({id:c,workspaceId:t,name:a.name,code:go(a.name),columns:a.columns,view:"table",...a.windowGeometry?{windowGeometry:a.windowGeometry}:{},...a.sortColumn?{sortColumn:a.sortColumn,sortAsc:a.sortAsc??!0}:{},updatedAt:Date.now()}),p=a.rows.map(x=>({id:La(),tableId:u.id,data:x,updatedAt:Date.now()}));await e.store.rows(u.id).bulkInsert(p),o++}return o}function go(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function La(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const pc=/\$([A-Za-z_][A-Za-z0-9_]*)/g;function Fa(...e){const t=new Set;for(const r of e)if(r)for(const i of r.matchAll(pc))t.add(i[1]);return[...t]}function xf(e,t,r){return e.replace(pc,(i,n)=>{const o=r[n];if(!o)return"";const a=t.data[o];return a==null?"":String(a)})}function Ma(e){return e==null||e===""}function $f(e,t){const r=Object.entries(t).filter(([,i])=>i!=null&&String(i).trim()!=="");return r.length===0?e:e.filter(i=>r.every(([n,o])=>Fs(i.data[n],o)))}function kf(e,t,r=!0){if(!t)return e;const i=r?1:-1;return[...e].sort((n,o)=>{const a=n.data[t],c=o.data[t],u=Ma(a),p=Ma(c);if(u||p)return u===p?0:u?1:-1;const x=Number(a),b=Number(c);return!Number.isNaN(x)&&!Number.isNaN(b)?(x-b)*i:String(a).localeCompare(String(c),void 0,{numeric:!0,sensitivity:"base"})*i})}function mc(e,t){return kf($f(e,t.filters??{}),t.sortColumn,t.sortAsc??!0)}function Cf(e){return!!e&&e.trim().length>0}function Ef(e,t){return t==="raw"||t==="structure"?e.columns:e.columns.filter(r=>r.hidden!==!0)}function Sf(e,t){return t==="raw"||t==="structure"?e:{...e,columns:Ef(e,t)}}function _f(e,t,r){return r==="structure"?[]:r==="raw"?t:mc(t,{filters:e.filters??{},sortColumn:e.sortColumn,sortAsc:e.sortAsc})}function bo(e,t){const r=e.columns.map(n=>n.field),i=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:i?[]:t.map(n=>{const o={};for(const a of r)o[a]=n.data[a];return o})}}const Tf={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file, and — per table — CSV/JSON/SQL with a Raw vs. Visible vs. Structure Only choice.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function Af(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,r)=>{const i=t.workspaceId();if(!i)return;const{AnchoredMenu:n}=await $n(async()=>{const{AnchoredMenu:c}=await import("./anchored-menu-OvUfo6fz.js");return{AnchoredMenu:c}},[]),o=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),a=await n.open(o,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(a)try{if(a==="json"){const c=await Ni(t);await t.backend.saveFile(`workspace-${i}.db.json`,c,"application/json")}else if(a==="sql"){const c=await oc(t);await t.backend.saveFile(`workspace-${i}.sql`,c,"application/sql")}}catch(c){t.ui.dialogs.toast(`Export failed: ${c.message}`,{kind:"error",title:"Export"})}}}),e.ui.registerTableButton({id:"table-export:menu",label:"Export",icon:"file_download",tooltip:"Export this table as CSV, JSON, or SQL",onClick:async(t,r)=>{const{AnchoredMenu:i}=await $n(async()=>{const{AnchoredMenu:p}=await import("./anchored-menu-OvUfo6fz.js");return{AnchoredMenu:p}},[]),n=r.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(n,[{id:"csv",label:"CSV (.csv)",icon:"table_chart"},{id:"json",label:"JSON (.table.json)",icon:"data_object"},{id:"sql",label:"SQL (.sql)",icon:"storage"}]);if(!o)return;const a=await t.store.tables.findOne(r.tableId);if(!a)return;const c=await t.ui.dialogs.choice(`Export "${a.name}" as ${o.toUpperCase()} — which rows/columns?`,["Visible Data","Raw Data","Structure Only"],"Export table");if(!c)return;const u=c==="Visible Data"?"visible":c==="Raw Data"?"raw":"structure";try{const p=await t.store.rows(a.id).find(),x=Sf(a,u),b=_f(a,p,u),k=go(a.code||a.name||"table"),M=u!=="structure"&&a.source!=null&&p.length===0;if(o==="csv")M&&t.ui.dialogs.toast(`"${a.name}" is a live table with no local rows — exporting column definitions only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${k}.csv`,oo(x,b),"text/csv");else if(o==="json"){const F=JSON.stringify(bo(x,b),null,2);await t.backend.saveFile(`${k}.table.json`,F,"application/json")}else o==="sql"&&(M&&t.ui.dialogs.toast(`"${a.name}" is a live table with no local rows — exporting the CREATE TABLE only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${k}.sql`,ac(x,b),"application/sql"))}catch(p){t.ui.dialogs.toast(`Export failed: ${p.message}`,{kind:"error",title:"Export"})}}})}async function Ni(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(a=>a.workspaceId===t),i=(await e.store.viewTemplates.find()).filter(a=>a.workspaceId===t),n=(await e.store.viewInstances.find()).filter(a=>a.workspaceId===t),o={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:i,viewInstances:n};for(const a of r){const c=await e.store.rows(a.id).find();o.tables.push({name:a.name,columns:a.columns,rows:c.map(u=>u.data),...a.title?{title:a.title}:{},...a.windowGeometry?{windowGeometry:a.windowGeometry}:{},...a.sortColumn?{sortColumn:a.sortColumn,sortAsc:a.sortAsc??!0}:{},...a.filters?{filters:a.filters}:{},...a.labelColumn?{labelColumn:a.labelColumn}:{},...a.info?{info:a.info}:{},...a.deletedColumns?{deletedColumns:a.deletedColumns}:{},...a.source?{source:a.source}:{},...a.origin?{origin:a.origin}:{}})}return JSON.stringify(o,null,2)}const Pf=Object.freeze(Object.defineProperty({__proto__:null,init:Af,meta:Tf,serializeWorkspace:Ni},Symbol.toStringTag,{value:"Module"})),If={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},Rf="gist:",Ba='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function Df(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).'}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:Ba,tooltip:"Gist sync — push, pull, share…",onClick:async(t,r)=>{const{AnchoredMenu:i}=await $n(async()=>{const{AnchoredMenu:a}=await import("./anchored-menu-OvUfo6fz.js");return{AnchoredMenu:a}},[]),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(n,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(o)try{if(o==="push"||o==="pull"){const a=await i.open(n,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!a)return;const c=a;o==="push"?await Mf(t,c):await bc(t,c)}else o==="share"?await Lf(t):o==="view"&&await Ff(t)}catch(a){t.ui.dialogs.toast(`Gist ${o} failed: ${a.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:Ba,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,r)=>{const{AnchoredMenu:i}=await $n(async()=>{const{AnchoredMenu:a}=await import("./anchored-menu-OvUfo6fz.js");return{AnchoredMenu:a}},[]),n=r.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(n,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(o)try{o==="push"?await Bf(t,r.tableId):o==="pull"?await Nf(t,r.tableId):o==="view"&&await Uf(t,r.tableId)}catch(a){t.ui.dialogs.toast(`Gist ${o} failed: ${a.message}`,{kind:"error",title:"Gist sync"})}}})}async function Of(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let r;try{r=atob(t)}catch{return}const i=jf(r);if(!i){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${i.gistId||"(new)"} (owner: ${i.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await yo(e,i),await bc(e))}async function gc(e){const t=e.workspaceId();return`${Rf}${t??"default"}`}async function Nr(e){const[t,r,i]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&i)return{user:t,gistId:r??"",token:i};const o=(await e.store.settings.findOne(await gc(e)))?.value;if(o?.user&&o?.token){const a={user:o.user,gistId:o.gistId??"",token:o.token};return await yo(e,a),a}return null}async function yo(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({key:await gc(e),value:t})}function jf(e){const t={};for(const r of e.split(";")){const i=r.indexOf("=");if(i<0)continue;const n=r.slice(0,i).trim(),o=r.slice(i+1).trim();n&&(t[n]=o)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function wo(e){const t=await Nr(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function zf(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function Lf(e){const t=await Nr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const i=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(zf(t)))}`,{GistShareDialog:n}=await $n(async()=>{const{GistShareDialog:o}=await import("./gist-share-dialog-ZGI7M40T.js");return{GistShareDialog:o}},[]);await n.open(i)}async function Ff(e){const t=await Nr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}async function Mf(e,t="all"){const r=await wo(e);if(!r)return;const i=e.workspaceId();if(!i)throw new Error("no active workspace");const n=t!=="settings",o=t!=="data",a=(await e.store.tables.find()).filter(R=>R.workspaceId===i);if(n&&a.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const c=1e8,u=1e7,p={},x=[],b=[];if(n)for(const R of a){const H=R.source!=null?[]:await e.store.rows(R.id).find(),V=JSON.stringify(bo(R,H),null,2),ue=`${R.name} (${(V.length/1e6).toFixed(2)} MB)`;V.length>c?x.push(ue):V.length>u&&b.push(ue),p[`${Ur(R.name)}.table.json`]={content:V}}if(x.length>0||b.length>0){const R=[];if(x.length>0&&R.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${x.join(`
`)}`),b.length>0&&R.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${b.join(`
`)}`),!await e.ui.dialogs.confirm(`${R.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(o){const R=(await e.store.viewTemplates.find()).filter(ue=>ue.workspaceId===i),H=(await e.store.viewInstances.find()).filter(ue=>ue.workspaceId===i),V=await e.store.settings.find();p["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:i,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:R,viewInstances:H,settings:V},null,2)}}let k;if(r.gistId){const R=await fetch(`https://api.github.com/gists/${r.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:p,description:`easyDBAccess workspace: ${i}`})});if(!R.ok)throw new Error(await Dr(R));k=await R.json()}else{const R=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${i}`,files:p})});if(!R.ok)throw new Error(await Dr(R));k=await R.json(),r.gistId=k.id,await yo(e,r)}const M=k.html_url??`https://gist.github.com/${r.user}/${k.id}`,F=t==="settings"?"settings":t==="data"?`${a.length} table${a.length===1?"":"s"} (data only)`:`${a.length} table${a.length===1?"":"s"}`;e.ui.dialogs.toast(`Pushed ${F}.  ${M}`,{kind:"success",title:"Gist sync"})}async function bc(e,t="all"){const r=t!=="settings",i=t!=="data",n=await wo(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const o=e.workspaceId();if(!o)throw new Error("no active workspace");const a=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!a.ok)throw new Error(await Dr(a));const c=await a.json(),u=Object.entries(c.files).filter(([V])=>V.endsWith(".table.json")&&!V.startsWith("_easydb"));if(r&&u.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const p=(await e.store.tables.find()).filter(V=>V.workspaceId===o),x=new Map(p.map(V=>[V.name.toLowerCase(),V]));let b=0;const k=[],M=new Map;if(r){const{TopProgress:V}=await $n(async()=>{const{TopProgress:se}=await Promise.resolve().then(()=>Ac);return{TopProgress:se}},void 0),ue=V.begin("Pulling from gist…");try{for(const[se,[oe,G]]of u.entries())try{const J=await Ai(G),he=JSON.parse(J);if(!he.name||!Array.isArray(he.columns))throw new Error("unexpected file shape (missing name/columns)");let $e;const Te=x.get(he.name.toLowerCase());if(Te){if($e=await e.store.tables.patch(Te.id,{title:he.title,columns:he.columns,...Ns(he),updatedAt:Date.now()}),$e.source==null){const Ie=e.store.rows(Te.id),g=await Ie.find();await Ie.bulkRemove(g.map(v=>v.id))}}else $e=await e.store.tables.insert({id:Us(),workspaceId:o,name:he.name,title:he.title,code:Ur(he.name),columns:he.columns,view:he.view??"table",...Ns(he),updatedAt:Date.now()});if($e.source==null){const Ie=(he.rows??[]).map(g=>({id:Us(),tableId:$e.id,data:g,updatedAt:Date.now()}));await e.store.rows($e.id).bulkInsert(Ie)}M.set(he.name,$e.id),b++}catch(J){k.push({file:oe,error:J.message})}finally{ue.fraction((se+1)/u.length)}}finally{ue.done()}}let F=0,R="";const H=i?c.files["_easydb.workspace.json"]:void 0;if(H)try{const V=await Ai(H),ue=JSON.parse(V),se=ue.viewTemplates??[],oe=ue.viewInstances??[],G=ue.settings??[];for(const J of se)await e.store.viewTemplates.upsert({...J,workspaceId:o});for(const J of oe){let he;J.tableName&&(he=M.get(J.tableName)??x.get(J.tableName)?.id),he??=J.tableId,he&&(await e.store.viewInstances.upsert({...J,workspaceId:o,tableId:he}),F++)}for(const J of G)await e.store.settings.upsert(J)}catch(V){R=`Workspace metadata import failed: ${V.message}`}if(k.length>0){const V=k.map(ue=>`• ${ue.file}: ${ue.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${b} of ${u.length} tables. ${k.length} failed:
${V}${R?`
${R}`:""}`,{kind:"warning",title:"Gist sync"})}else{const V=F>0?` (+${F} views)`:"",ue=t==="settings"?`Pulled settings${V}.`:`Pulled ${b} table${b===1?"":"s"}.${V}`;e.ui.dialogs.toast(ue,{kind:"success",title:"Gist sync"}),R&&e.ui.dialogs.toast(R,{kind:"warning",title:"Gist sync"})}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function Bf(e,t){const r=await wo(e);if(!r)return;if(!r.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=i.source!=null?[]:await e.store.rows(t).find(),o=JSON.stringify(bo(i,n),null,2),a={[`${Ur(i.name)}.table.json`]:{content:o}},c=await fetch(`https://api.github.com/gists/${r.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:a})});if(!c.ok)throw new Error(await Dr(c));e.ui.dialogs.toast(`Pushed "${i.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function Nf(e,t){const r=await Nr(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=`${Ur(i.name)}.table.json`,o=await fetch(`https://api.github.com/gists/${r.gistId}`,{headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await Dr(o));const c=(await o.json()).files[n];if(!c){await e.ui.dialogs.alert(`No file "${n}" in the gist for this table.`,"Gist sync");return}const u=await Ai(c),p=JSON.parse(u);if(!p.name||!Array.isArray(p.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:p.title,columns:p.columns,...Ns(p),updatedAt:Date.now()})).source==null){const b=e.store.rows(t),k=await b.find();await b.bulkRemove(k.map(F=>F.id));const M=(p.rows??[]).map(F=>({id:Us(),tableId:t,data:F,updatedAt:Date.now()}));await b.bulkInsert(M)}e.ui.dialogs.toast(`Pulled "${i.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function Uf(e,t){const r=await Nr(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=`file-${Ur(i.name)}-table-json`;window.open(`https://gist.github.com/${r.user}/${r.gistId}#${n}`,"_blank","noopener")}function Ns(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function Ai(e,t=r=>fetch(r)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const r=await t(e.raw_url);if(!r.ok)throw new Error(`raw fetch failed: ${r.status} ${r.statusText}`);return r.text()}async function Dr(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function Ur(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Us(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Hf=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:Ai,init:Df,load:Of,meta:If},Symbol.toStringTag,{value:"Module"})),qf={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function Wf(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,r)=>{const{AnchoredMenu:i}=await $n(async()=>{const{AnchoredMenu:a}=await import("./anchored-menu-OvUfo6fz.js");return{AnchoredMenu:a}},[]),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(n,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(o)try{o==="push"?await Kf(t):o==="pull"&&await Vf(t)}catch(a){t.ui.dialogs.toast(`${o==="push"?"Push":"Pull"} failed: ${a.message}`,{kind:"error",title:"Server sync"})}}})}async function Kf(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await yc(e);if(!r)return;const i=await Ni(e),n=await hc(e,t),o={"Content-Type":"application/json"};n&&(o["If-Match"]=`"${n}"`);let a=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:o,body:i});if(a.status===412){const u=await a.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){u.currentEtag&&await Xn(e,t,u.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}a=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:i})}if(!a.ok)throw new Error(await wc(a));const c=Bi(a.headers.get("ETag"));c&&await Xn(e,t,c),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function Vf(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await yc(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await wc(n));const o=Bi(n.headers.get("ETag")),a=await n.json(),c=await fc(e,t,a);o&&await Xn(e,t,o),e.ui.dialogs.toast(`Pulled ${c} table${c===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function yc(e){const t=await uc(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await vf(e,r),r.replace(/\/+$/,"")}async function wc(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Gf=Object.freeze(Object.defineProperty({__proto__:null,init:Wf,meta:qf},Symbol.toStringTag,{value:"Module"})),Yf={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function Xf(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const Qf=Object.freeze(Object.defineProperty({__proto__:null,init:Xf,meta:Yf},Symbol.toStringTag,{value:"Module"}));function vc(e,t="Edit"){const r=document.createElement("button");return r.type="button",r.title=t,r.textContent="✎",r.className="cell-pencil",r.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",r.addEventListener("mouseenter",()=>r.style.color="#374151"),r.addEventListener("mouseleave",()=>r.style.color="#9ca3af"),r.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),e()}),r}function xc(e,t){const r=document.createElement("span");return r.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%",e.style.flex="1 1 auto",e.style.minWidth="0",e.style.overflow="hidden",r.append(e,t),r}function $c(e){const t=document.createElement("input");t.type="text",t.value=e.value,t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0;text-overflow:ellipsis";const r=()=>{e.isLive(t)&&e.onCommit(t.value)};return t.addEventListener("keydown",i=>{i.key==="Enter"?(i.preventDefault(),r()):i.key==="Escape"&&(i.preventDefault(),e.onCancel())}),t.addEventListener("blur",r),setTimeout(()=>{t.focus(),t.select()},0),t}const Jf={id:"core-renderers",name:"Core Renderers",type:"cell-renderer",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/core-renderers.ts",fixed:!0};function Zf(e){customElements.get("cell-date")||customElements.define("cell-date",ep),customElements.get("cell-datetime")||customElements.define("cell-datetime",tp),customElements.get("cell-boolean")||customElements.define("cell-boolean",np),customElements.get("cell-script")||customElements.define("cell-script",ip),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class ep extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._readonly){this.textContent=Ua(this._value);return}const t=document.createElement("input");t.type="date",t.value=Ua(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class tp extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._readonly){this.textContent=Ha(this._value).replace("T"," ");return}const t=document.createElement("input");t.type="datetime-local",t.value=Ha(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class np extends HTMLElement{constructor(){super(...arguments),this._value=!1,this._readonly=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");if(t.type="checkbox",t.checked=rp(this._value),this._readonly){t.disabled=!0,t.style.cssText="transform:translateY(1px)",this.append(t);return}t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function rp(e){return e===!0||e==="true"||e===1||e==="1"}class ip extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={},this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set column(t){this._column=t,!this._editing&&this.render()}get column(){return this._column}set row(t){this._row=t??{},!this._editing&&this.render()}get row(){return this._row}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this.style.display="block",this.style.minWidth="0",this.style.overflow="hidden",this._editing){const t=$c({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(t),this._editor=t;return}this.append(this._readonly?this.renderOutput():xc(this.renderOutput(),this.pencil()))}pencil(){return vc(()=>{this._editing=!0,this.render()},"Edit the stored value")}renderOutput(){const t=this._column?.script;if(!t||!t.trim()){const o=document.createElement("span");return o.textContent="(no script)",o.style.cssText="color:#9ca3af;font-style:italic",o}const r=Hl(t,this._row);if(!r.ok)return Na(r.label,r.message);const i=r.value;if(typeof i!="string")return Na("render(row) did not return a string",null);const n=document.createElement("span");return n.style.cssText="display:block;width:100%",n.innerHTML=i,n}commit(t){const r=t!==this._value;this._value=t,this._editing=!1,this.render(),r&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Na(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const i=t instanceof Error?t.message:String(t);r.title=i}return r}function Ua(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function Ha(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const sp=Object.freeze(Object.defineProperty({__proto__:null,init:Zf,meta:Jf},Symbol.toStringTag,{value:"Module"})),op={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function ap(e){customElements.get("cell-color")||customElements.define("cell-color",lp),e.ui.registerCellRenderer("color","cell-color")}class lp extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,i){this.value=i}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const cp=Object.freeze(Object.defineProperty({__proto__:null,init:ap,meta:op},Symbol.toStringTag,{value:"Module"})),dp={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function up(e){customElements.get("cell-image")||customElements.define("cell-image",hp),e.ui.registerCellRenderer("image","cell-image")}class hp extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t??"",this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this.style.display="block",this.style.minWidth="0",this.style.overflow="hidden",this._editing){const i=document.createElement("span");i.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const n=$c({value:this._value,onCommit:a=>this.commit(a),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:a=>this._editor===a}),o=document.createElement("button");o.type="button",o.textContent="upload",o.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",o.addEventListener("mousedown",a=>a.preventDefault()),o.addEventListener("click",()=>this.pickFile()),i.append(n,o),this.append(i),this._editor=n;return}const t=document.createElement("span");if(t.style.cssText="display:flex;align-items:center;gap:0.4rem;min-width:0",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const i=document.createElement("img");i.src=this._value,i.alt="",i.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(i)}else{const i=document.createElement("span");if(i.style.color="#9ca3af",i.textContent="no image",t.append(i),!this._readonly){const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}}this.append(this._readonly?t:xc(t,this.pencil()))}pencil(){return vc(()=>{this._editing=!0,this.render()},"Edit the image URL")}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const i=new FileReader;i.onload=()=>this.commit(String(i.result)),i.readAsDataURL(r)}),t.click()}commit(t){const r=t!==this._value;this._value=t,this._editing=!1,this.render(),r&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const fp=Object.freeze(Object.defineProperty({__proto__:null,init:up,meta:dp},Symbol.toStringTag,{value:"Module"}));/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let L={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&L.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let i=arguments[r];if(i==null)continue;i=Object(i);let n=Object.keys(Object(i));for(let o=0,a=n.length;o<a;o++){let c=n[o],u=Object.getOwnPropertyDescriptor(i,c);u!==void 0&&u.enumerable&&(t[c]=i[c])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,i=new Array(r);r--;)i[r]=[t[r],e[t[r]]];return i}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),i=document.createDocumentFragment();r.forEach(function(n){let o=n instanceof Node;i.appendChild(o?n:document.createTextNode(String(n)))}),this.appendChild(i)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,i=this;do for(r=t.length;--r>=0&&t.item(r)!==i;);while(r<0&&(i=i.parentElement));return i}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let i=document.createEvent("CustomEvent");return i.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),i}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),i=r.length>>>0;if(i===0)return!1;let n=t|0,o=Math.max(n>=0?n:i-Math.abs(n),0);function a(c,u){return c===u||typeof c=="number"&&typeof u=="number"&&isNaN(c)&&isNaN(u)}for(;o<i;){if(a(r[o],e))return!0;o++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>L.modifier=e),document.addEventListener("keyup",()=>L.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const i=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(i===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(i),o=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-o)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(i===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(i),o=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-o)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((i,n)=>{(i.startsWith("--")||i.startsWith("var"))&&(r[n]=L.getCssVariableValue(i))}),r.forEach(i=>{L.colorNames[i]?t[2]="#"+L.colorNames[i]:i.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=i:i.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=i:t[2]=i}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),i=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return i&&(t.size=i[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let i=e.indexOf(")");t=e.slice(0,i+1).replace(/\s+/g,""),t.startsWith("var")&&(t=L.getCssVariableValue(t)),r=e.slice(i+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let i=e.indexOf(" ");i>0?(t=e.slice(0,i+1).replace(/\s+/g,""),r=e.slice(i+1,e.length).trim()):t=e,t.startsWith("--")&&(t=L.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let i=r.indexOf(" ");r=r.slice(i+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:L.colorNames[r]?r="#"+L.colorNames[r]:r.match(/^(--|var)/)?r=L.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,i,n,o,a,c,u,p,x,b={};const k=/^#?([\da-f]{3}|[\da-f]{6})$/gi,M=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,F=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,R=this.colorNames;return R[t]&&(t=R[t]),t.match(k)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),i=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),b.rgb={r:parseInt(r,16),g:parseInt(i,16),b:parseInt(n,16)},b.hex=`#${r}${i}${n}`):(b.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},b.hex=`#${t}`),x=this.rgbToHsl(b.rgb.r,b.rgb.g,b.rgb.b),b.hsl=x,b.rgb.css=`rgb(${b.rgb.r},${b.rgb.g},${b.rgb.b})`):t.match(M)?(u=M.exec(t),b.rgb={css:t,r:u[1],g:u[2],b:u[3]},b.hex=this.rgbToHex(u[1],u[2],u[3]),x=this.rgbToHsl(u[1],u[2],u[3]),b.hsl=x):t.match(F)?(u=F.exec(t),o=u[1]/360,a=u[2].slice(0,u[2].length-1)/100,c=u[3].slice(0,u[3].length-1)/100,p=this.hslToRgb(o,a,c),b.rgb={css:`rgb(${p[0]},${p[1]},${p[2]})`,r:p[0],g:p[1],b:p[2]},b.hex=this.rgbToHex(b.rgb.r,b.rgb.g,b.rgb.b),b.hsl={css:`hsl(${u[1]},${u[2]},${u[3]})`,h:u[1],s:u[2],l:u[3]}):(b.hex="#f5f5f5",b.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},b.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),b},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),i=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),o=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",a=this.perceivedBrightness(i)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",u=this.lighten(e,this.colorFilledDark),p=this.perceivedBrightness(u)<=t?"#ffffff":"#000000";return[r.hsl.css,i,n,o,a,c,u,p]},darken(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i-i*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i+(100-i)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let i,n,o;if(t===0)i=n=o=r;else{let a=(p,x,b)=>(b<0&&(b+=1),b>1&&(b-=1),b<.16666666666666666?p+(x-p)*6*b:b<.5?x:b<.6666666666666666?p+(x-p)*(.6666666666666666-b)*6:p),c=r<.5?r*(1+t):r+t-r*t,u=2*r-c;i=a(u,c,e+1/3),n=a(u,c,e),o=a(u,c,e-1/3)}return[Math.round(i*255),Math.round(n*255),Math.round(o*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let i=Math.max(e,t,r),n=Math.min(e,t,r),o,a,c=(i+n)/2;if(i===n)o=a=0;else{let u=i-n;switch(a=c>.5?u/(2-i-n):u/(i+n),i){case e:o=(t-r)/u+(t<r?6:0);break;case t:o=(r-e)/u+2;break;case r:o=(e-t)/u+4;break}o/=6}return o=Math.round(o*360),a=Math.round(a*100)+"%",c=Math.round(c*100)+"%",{css:"hsl("+o+","+a+","+c+")",h:o,s:a,l:c}},rgbToHex(e,t,r){let i=Number(e).toString(16),n=Number(t).toString(16),o=Number(r).toString(16);return i.length===1&&(i=`0${i}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${i}${n}${o}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),i=r.filter(a=>a.match(/^(down|right|up|left)$/i));i.length&&(t.autoposition=i[0],r.splice(r.indexOf(i[0]),1));let n=r.filter(a=>a.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let o=r.filter(a=>a.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return o.length&&(t.offsetX=o[0].match(/^[+-]?\d*\.?\d+$/i)?`${o[0]}px`:o[0],o[1]?t.offsetY=o[1].match(/^[+-]?\d*\.?\d+$/i)?`${o[1]}px`:o[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(o[0]),1),o[1]&&r.splice(r.indexOf(o[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(R=>{typeof t[R]=="function"&&(t[R]=t[R].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,i=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),o=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},a=r==="window"?{x:1,y:1}:{x:o.width/r.offsetWidth,y:o.height/r.offsetHeight},c=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);o.width-=(parseFloat(c.borderLeftWidth)+parseFloat(c.borderRightWidth))*a.x,o.height-=(parseFloat(c.borderTopWidth)+parseFloat(c.borderBottomWidth))*a.y;let u;t.of?typeof t.of=="string"?u=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?u=t.of[0].getBoundingClientRect():u=t.of.getBoundingClientRect():u=o;let p=this.getScrollbarWidth(document.body),x=this.getScrollbarWidth(e.parentElement),b="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?b=u.left-o.left-parseFloat(c.borderLeftWidth)+"px":b="0px":t.at.startsWith("center")?t.of?b=u.left-o.left-parseFloat(c.borderLeftWidth)+u.width/2+"px":b=o.width/2+"px":t.at.startsWith("right-")&&(t.of?b=u.left-o.left-parseFloat(c.borderLeftWidth)+u.width+"px":b=o.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?b=u.left-o.left-parseFloat(c.borderLeftWidth)-i.width/2+"px":b=-i.width/2+"px":t.at.startsWith("center")?t.of?b=u.left-o.left-parseFloat(c.borderLeftWidth)-(i.width-u.width)/2+"px":b=o.width/2-i.width/2+"px":t.at.startsWith("right-")&&(t.of?b=u.left-o.left-parseFloat(c.borderLeftWidth)+(u.width-i.width/2)+"px":b=o.width-i.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?b=u.left-o.left-parseFloat(c.borderLeftWidth)-i.width+"px":b=-i.width+"px":t.at.startsWith("center")?t.of?b=u.left-o.left-parseFloat(c.borderLeftWidth)-i.width+u.width/2+"px":b=o.width/2-i.width+"px":t.at.startsWith("right-")&&(t.of?b=u.left-o.left-parseFloat(c.borderLeftWidth)+u.width-i.width+"px":b=o.width-i.width+"px",r!=="window"&&(b=parseFloat(b)-x.y+"px")));let k="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?k=u.top-o.top-parseFloat(c.borderTopWidth)+"px":k="0px":t.at.endsWith("center")?t.of?k=u.top-o.top-parseFloat(c.borderTopWidth)+u.height/2+"px":k=o.height/2+"px":t.at.endsWith("-bottom")&&(t.of?k=u.top-o.top-parseFloat(c.borderTopWidth)+u.height+"px":k=o.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?k=u.top-o.top-parseFloat(c.borderTopWidth)-i.height/2+"px":k=-i.height/2+"px":t.at.endsWith("center")?t.of?k=u.top-o.top-parseFloat(c.borderTopWidth)-i.height/2+u.height/2+"px":k=o.height/2-i.height/2+"px":t.at.endsWith("-bottom")&&(t.of?k=u.top-o.top-parseFloat(c.borderTopWidth)-i.height/2+u.height+"px":k=o.height-i.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?k=u.top-o.top-parseFloat(c.borderTopWidth)-i.height+"px":k=-i.height+"px":t.at.endsWith("center")?t.of?k=u.top-o.top-parseFloat(c.borderTopWidth)-i.height+u.height/2+"px":k=o.height/2-i.height+"px":t.at.endsWith("-bottom")&&(t.of?k=u.top-o.top-parseFloat(c.borderTopWidth)-i.height+u.height+"px":k=o.height-i.height+"px",r!=="window"?k=parseFloat(k)-x.x+"px":k=parseFloat(k)-p.x+"px")),e.style.left=a.x===1?b:parseFloat(b)/a.x+"px",e.style.top=a.y===1?k:parseFloat(k)/a.y+"px";let M=getComputedStyle(e),F={left:M.left,top:M.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(F=this.applyPositionAutopos(e,F,t)),(t.offsetX||t.offsetY)&&(F=this.applyPositionOffset(e,F,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(F=this.applyPositionMinMax(e,F,t)),t.modify&&(F=this.applyPositionModify(e,F,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const i=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(i);const n=Array.prototype.slice.call(document.querySelectorAll(`.${i}`)),o=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((a,c)=>{c>0&&c<=o&&(t.top=parseFloat(t.top)+n[--c].getBoundingClientRect().height+L.autopositionSpacing+"px")});break;case"up":n.forEach((a,c)=>{c>0&&c<=o&&(t.top=parseFloat(t.top)-n[--c].getBoundingClientRect().height-L.autopositionSpacing+"px")});break;case"right":n.forEach((a,c)=>{c>0&&c<=o&&(t.left=parseFloat(t.left)+n[--c].getBoundingClientRect().width+L.autopositionSpacing+"px")});break;case"left":n.forEach((a,c)=>{c>0&&c<=o&&(t.left=parseFloat(t.left)-n[--c].getBoundingClientRect().width-L.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const i=getComputedStyle(e);return{left:i.left,top:i.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(i=>{e.classList.contains(i)&&(t=i)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),i=document.createElement("button");i.className="btn btn"+t.color.slice(r),document.body.appendChild(i),t.color=getComputedStyle(i).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(i),i=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},i=typeof t=="object"?Object.assign(r,t):r,n=i.bgPanel,o=i.bgContent,a=i.colorHeader,c=i.colorContent,u=i.bgFooter,p=i.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[a]&&(a="#"+this.colorNames[a]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(k=>e.querySelector(k).style.color=this.getCssVariableValue(a)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(k=>k.style.color=this.getCssVariableValue(a)),this.colorNames[o]?e.content.style.background="#"+this.colorNames[o]:e.content.style.background=this.getCssVariableValue(o),this.colorNames[c]?e.content.style.color="#"+this.colorNames[c]:e.content.style.color=this.getCssVariableValue(c),this.perceivedBrightness(a)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[u]?e.footer.style.background="#"+this.colorNames[u]:e.footer.style.background=this.getCssVariableValue(u),this.colorNames[p]?e.footer.style.color="#"+this.colorNames[p]:e.footer.style.color=this.getCssVariableValue(p),i.border&&e.setBorder(i.border),i.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(i.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,i]of Object.entries(t))e.style[r]=typeof i=="string"?L.getCssVariableValue(i):i;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const i=document.createElement("script");i.src=e,i.type=t,document.head.appendChild(i),r&&(i.onload=r)}},ajax(e,t){let r,i,n=new XMLHttpRequest;const o={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let a=L.strToHtml(this.responseText);r.urlSelector&&(a=a.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(a)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},o,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},o,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&L.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}i=r.url.trim().split(/\s+/),r.url=encodeURI(i[0]),i.length>1&&(i.shift(),r.urlSelector=i.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&L.ajaxAutoresizeAutoreposition(t,r),L.ajaxAlwaysCallbacks.length&&L.ajaxAlwaysCallbacks.forEach(a=>{t?a.call(n,n,t):a.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const i={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(o,a){if(a){let c=L.strToHtml(o);a.contentRemove(),a.content.append(c)}}};if(t&&typeof e=="string")r=Object.assign({},i,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},i,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&L.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(o=>{if(o.ok)return o[r.bodyMethod]()}).then(o=>{t?r.done.call(o,o,t):r.done.call(o,o),t&&(r.autoresize||r.autoreposition)&&L.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const i=r.split(" "),n=Object.assign({},{width:i[0],height:i[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const i=Object.assign({},r);t.autoresize&&e.resize(i),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
                                <div class="jsPanel-headerbar">
                                    <div class="jsPanel-headerlogo"></div>
                                    <div class="jsPanel-titlebar">
                                        <div class="jsPanel-title"></div>
                                    </div>
                                    <div class="jsPanel-controlbar">
                                        <button type="button" class="jsPanel-btn jsPanel-btn-smallify" aria-label="Smallify">${this.icons.smallify}</button>
                                        <button type="button" class="jsPanel-btn jsPanel-btn-minimize" aria-label="Minimize">${this.icons.minimize}</button>
                                        <button type="button" class="jsPanel-btn jsPanel-btn-normalize" aria-label="Normalize">${this.icons.normalize}</button>
                                        <button type="button" class="jsPanel-btn jsPanel-btn-maximize" aria-label="Maximize">${this.icons.maximize}</button>
                                        <button type="button" class="jsPanel-btn jsPanel-btn-close" aria-label="Close">${this.icons.close}</button>
                                    </div>
                                </div>
                                <div class="jsPanel-hdr-toolbar"></div>
                            </div>
                            <div class="jsPanel-progressbar">
                                <div class="jsPanel-progressbar-slider"></div>
                            </div>
                            <div class="jsPanel-content"></div>
                            <div class="jsPanel-minimized-box"></div>
                            <div class="jsPanel-ftr"></div>`,t},createMinimizedTemplate(){const e=document.createElement("div");return e.className="jsPanel-replacement",e.innerHTML=`<div class="jsPanel-hdr">
                                <div class="jsPanel-headerbar">
                                    <div class="jsPanel-headerlogo"></div>
                                    <div class="jsPanel-titlebar">
                                        <div class="jsPanel-title"></div>
                                    </div>
                                    <div class="jsPanel-controlbar">
                                        <button type="button" class="jsPanel-btn jsPanel-btn-sm jsPanel-btn-normalize" aria-label="Normalize">${this.icons.normalize}</button>
                                        <button type="button" class="jsPanel-btn jsPanel-btn-sm jsPanel-btn-maximize" aria-label="Maximize">${this.icons.maximize}</button>
                                        <button type="button" class="jsPanel-btn jsPanel-btn-sm jsPanel-btn-close" aria-label="Close">${this.icons.close}</button>
                                    </div>
                                </div>
                            </div>`,e},createSnapArea(e,t,r){const i=document.createElement("div"),n=e.parentElement;i.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(i.style.width=r+"px",i.style.height=r+"px"):t==="ct"||t==="cb"?i.style.height=r+"px":(t==="lc"||t==="rc")&&(i.style.width=r+"px"),n!==document.body&&(i.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(i)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",i,n){if(typeof t=="function"&&(t=[t]),r)return t[r](o=>o.call(e,e,i,n));t.forEach(o=>o.call(e,e,i,n))},resetZi(){this.zi=((e=L.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=L.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){L.zi||(L.zi=((g=L.ziBase)=>{let v=g;return{next:()=>v++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${L.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let g=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;L.errorpanel(g)}return!1}let i=this.pOcontainer(e.container);if(typeof i=="object"&&i.length&&i.length>0&&(i=i[0]),!i)return this.errorReporting&&L.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(g=>{e[g]?typeof e[g]=="function"&&(e[g]=[e[g]]):e[g]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const o=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),a=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),u=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),p=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),x=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),b=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),k=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),M=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),F=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),R=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),H=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),V=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),ue=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),se=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),oe=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[o,a,c,u,p,x,b,k,M,F,R,H,V,ue].forEach(g=>g.panel=n);const G=n.querySelector(".jsPanel-btn-close"),J=n.querySelector(".jsPanel-btn-maximize"),he=n.querySelector(".jsPanel-btn-normalize"),$e=n.querySelector(".jsPanel-btn-smallify"),Te=n.querySelector(".jsPanel-btn-minimize");G&&L.pointerup.forEach(g=>{G.addEventListener(g,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.close(null,!0)})}),J&&L.pointerup.forEach(g=>{J.addEventListener(g,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.maximize()})}),he&&L.pointerup.forEach(g=>{he.addEventListener(g,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.normalize()})}),$e&&L.pointerup.forEach(g=>{$e.addEventListener(g,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),Te&&L.pointerup.forEach(g=>{Te.addEventListener(g,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.minimize()})});let Ie=L.extensions;for(let g in Ie)Object.prototype.hasOwnProperty.call(Ie,g)&&(n[g]=Ie[g]);if(n.setBorder=g=>{let v=L.pOborder(g);return v[2].length||(v[2]=n.style.backgroundColor),v=v.join(" "),n.style.border=v,n.options.border=v,n},n.setBorderRadius=g=>{typeof g=="string"&&(g.startsWith("--")||g.startsWith("var"))&&(g=g.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),g=L.getCssVariableValue(g)),typeof g=="number"&&(g+="px"),n.style.borderRadius=g;const v=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=v.borderTopLeftRadius,n.header.style.borderTopRightRadius=v.borderTopRightRadius):(n.content.style.borderTopLeftRadius=v.borderTopLeftRadius,n.content.style.borderTopRightRadius=v.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=v.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=v.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=v.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=v.borderBottomLeftRadius),n},n.setTheme=(g=e.theme,v)=>{let S;if(n.status==="minimized"&&(S=!0,n.normalize()),L.clearTheme(n),typeof g=="object")e.border=void 0,L.applyCustomTheme(n,g);else if(typeof g=="string"){g==="none"&&(g="white");let y=L.getThemeDetails(g);L.applyColorTheme(n,y)}return S&&n.minimize(),v&&v.call(n,n),n},n.remove=(g,v,S)=>{n.parentElement.removeChild(n),document.getElementById(g)?S&&S.call(n,g,n):(n.removeMinimizedReplacement(),n.status="closed",v&&document.dispatchEvent(oe),document.dispatchEvent(se),n.options.onclosed&&L.processCallbacks(n,n.options.onclosed,"every",v),L.autopositionRemaining(n),S&&S.call(g,g)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(g,v)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(ue),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!L.processCallbacks(n,n.options.onbeforeclose,"some",n.status,v))return n;n.options.animateOut?(n.options.animateIn&&L.remClass(n,n.options.animateIn),L.setClass(n,n.options.animateOut),n.addEventListener("animationend",S=>{S.stopPropagation(),n.remove(n.id,v,g)})):n.remove(n.id,v,g)}},n.maximize=(g,v)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!L.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(p);const S=n.parentElement,y=L.pOcontainment(e.maximizedMargin);return S===document.body?(n.style.width=document.documentElement.clientWidth-y[1]-y[3]+"px",n.style.height=document.documentElement.clientHeight-y[0]-y[2]+"px",n.style.left=y[3]+"px",n.style.top=y[0]+"px"):(n.style.width=S.clientWidth-y[1]-y[3]+"px",n.style.height=S.clientHeight-y[0]-y[2]+"px",n.style.left=y[3]+"px",n.style.top=y[0]+"px"),$e.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),v||n.front(),document.dispatchEvent(x),document.dispatchEvent(a),e.onstatuschange&&L.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),g&&g.call(n,n,n.statusBefore),e.onmaximized&&L.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=g=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!L.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(b),!document.getElementById("jsPanel-replacement-container")){const v=document.createElement("div");v.id="jsPanel-replacement-container",document.body.append(v)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(k),document.dispatchEvent(a),e.onstatuschange&&L.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let v=n.createMinimizedReplacement(),S,y,$;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(v);break;case"parentpanel":y=n.closest(".jsPanel-content").parentElement,$=y.querySelectorAll(".jsPanel-minimized-box"),S=$[$.length-1],S.append(v);break;case"parent":y=n.parentElement,S=y.querySelector(".jsPanel-minimized-container"),S||(S=document.createElement("div"),S.className="jsPanel-minimized-container",y.append(S)),S.append(v);break;default:document.querySelector(e.minimizeTo).append(v)}}return g&&g.call(n,n,n.statusBefore),e.onminimized&&L.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=g=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!L.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(c),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),$e.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(u),document.dispatchEvent(a),e.onstatuschange&&L.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),g&&g.call(n,n,n.statusBefore),e.onnormalized&&L.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=g=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!L.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(M),n.style.overflow="hidden";const v=window.getComputedStyle(n),S=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(v.borderTopWidth)+parseFloat(v.borderBottomWidth)+S+"px",$e.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(F),document.dispatchEvent(a),e.onstatuschange&&L.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(R),document.dispatchEvent(a),e.onstatuschange&&L.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const y=n.querySelectorAll(".jsPanel-minimized-box");return y[y.length-1].style.display="none",g&&g.call(n,n,n.statusBefore),e.onsmallified&&L.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=g=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!L.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(H),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(u),document.dispatchEvent(a),e.onstatuschange&&L.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),$e.style.transform="rotate(0deg)";const v=n.querySelectorAll(".jsPanel-minimized-box");v[v.length-1].style.display="flex",g&&g.call(n,n,n.statusBefore),e.onunsmallified&&L.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(g,v=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const S=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(y=>y.style.zIndex);Math.max(...S)>n.style.zIndex&&(n.style.zIndex=L.zi.next()),L.resetZi()}return document.dispatchEvent(V),g&&g.call(n,n),e.onfronted&&v&&L.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(g,v=!1)=>{if(v||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),g&&typeof g=="function"&&!v)g.call(n,n,n.snappableTo);else if(g!==!1){let S=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const y=L.pOcontainment(n.options.dragit.containment),$=n.snappableTo;$.startsWith("left")?S[0]=y[3]:$.startsWith("right")&&(S[0]=-y[1]),$.endsWith("top")?S[1]=y[0]:$.endsWith("bottom")&&(S[1]=-y[2])}n.reposition(`${n.snappableTo} ${S[0]} ${S[1]}`)}v||(n.snapped=n.snappableTo)},n.move=(g,v)=>{let S=n.overlaps(g,"paddingbox"),y=n.parentElement;return g.appendChild(n),n.options.container=g,n.style.left=S.left+"px",n.style.top=S.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),v&&v.call(n,n,g,y),n},n.closeChildpanels=g=>(n.getChildpanels().forEach(v=>v.close()),g&&g.call(n,n),n),n.getChildpanels=g=>{const v=n.content.querySelectorAll(".jsPanel");return g&&v.forEach((S,y,$)=>{g.call(S,S,y,$)}),v},n.isChildpanel=g=>{const v=n.closest(".jsPanel-content"),S=v?v.parentElement:null;return g&&g.call(n,n,S),v?S:!1},n.contentRemove=g=>(L.emptyNode(n.content),g&&g.call(n,n),n),n.createMinimizedReplacement=()=>{const g=L.createMinimizedTemplate(),v=window.getComputedStyle(n.headertitle).color,S=window.getComputedStyle(n),y=e.iconfont,$=g.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?L.setStyles(g,{backgroundColor:S.backgroundColor,backgroundPositionX:S.backgroundPositionX,backgroundPositionY:S.backgroundPositionY,backgroundRepeat:S.backgroundRepeat,backgroundAttachment:S.backgroundAttachment,backgroundImage:S.backgroundImage,backgroundSize:S.backgroundSize,backgroundOrigin:S.backgroundOrigin,backgroundClip:S.backgroundClip}):g.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,g.id=n.id+"-min",g.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),g.querySelector(".jsPanel-headerlogo")),g.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),g.querySelector(".jsPanel-title")),g.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),g.querySelector(".jsPanel-title").style.color=v,$.style.color=v,$.querySelectorAll("button").forEach(ne=>ne.style.color=v),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(ne=>{n.header.classList.contains(ne)&&g.querySelector(".jsPanel-hdr").classList.add(ne)}),n.setIconfont(y,g),n.dataset.btnnormalize==="enabled"?L.pointerup.forEach(ne=>{g.querySelector(".jsPanel-btn-normalize").addEventListener(ne,pe=>{if(pe.preventDefault(),pe.button&&pe.button>0)return!1;n.normalize()})}):$.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?L.pointerup.forEach(ne=>{g.querySelector(".jsPanel-btn-maximize").addEventListener(ne,pe=>{if(pe.preventDefault(),pe.button&&pe.button>0)return!1;n.maximize()})}):$.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?L.pointerup.forEach(ne=>{g.querySelector(".jsPanel-btn-close").addEventListener(ne,pe=>{if(pe.preventDefault(),pe.button&&pe.button>0)return!1;n.close(null,!0)})}):$.querySelector(".jsPanel-btn-close").style.display="none",g},n.removeMinimizedReplacement=()=>{const g=document.getElementById(`${n.id}-min`);g&&g.parentElement.removeChild(g)},n.drag=(g={})=>{let v,S,y;const $=new CustomEvent("jspaneldragstart",{detail:n.id}),ne=new CustomEvent("jspaneldrag",{detail:n.id}),pe=new CustomEvent("jspaneldragstop",{detail:n.id});[$,ne,pe].forEach(We=>We.panel=n);const K=We=>{let Me=We.split("-");return Me.forEach((Se,Oe)=>{Me[Oe]=Se.charAt(0).toUpperCase()+Se.slice(1)}),"snap"+Me.join("")};function Q(We){We.relatedTarget===null&&L.pointermove.forEach(Me=>{document.removeEventListener(Me,S,!1),n.style.opacity=1})}let Xe=g.handles||L.defaults.dragit.handles,ct=g.cursor||L.defaults.dragit.cursor;function an(We){if(L.pointermove.forEach(Me=>document.removeEventListener(Me,S)),L.removeSnapAreas(),v){if(n.style.opacity=1,v=void 0,y.snap){switch(n.snappableTo){case"left-top":n.snap(y.snap.snapLeftTop);break;case"center-top":n.snap(y.snap.snapCenterTop);break;case"right-top":n.snap(y.snap.snapRightTop);break;case"right-center":n.snap(y.snap.snapRightCenter);break;case"right-bottom":n.snap(y.snap.snapRightBottom);break;case"center-bottom":n.snap(y.snap.snapCenterBottom);break;case"left-bottom":n.snap(y.snap.snapLeftBottom);break;case"left-center":n.snap(y.snap.snapLeftCenter);break}y.snap.callback&&n.snappableTo&&typeof y.snap.callback=="function"&&(y.snap.callback.call(n,n),y.snap.repositionOnSnap&&y.snap[K(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&y.snap.repositionOnSnap&&y.snap[K(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Me=n.parentElement;n.move(n.droppableTo),y.drop.callback&&y.drop.callback.call(n,n,n.droppableTo,Me)}if(document.dispatchEvent(pe),y.stop.length){let Me=window.getComputedStyle(n),Se={left:parseFloat(Me.left),top:parseFloat(Me.top),width:parseFloat(Me.width),height:parseFloat(Me.height)};L.processCallbacks(n,y.stop,!1,Se,We)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Me=>Me.style.pointerEvents="auto"),document.removeEventListener(We,an)}return n.querySelectorAll(Xe).forEach(We=>{We.style.touchAction="none",We.style.cursor=ct,L.pointerdown.forEach(Me=>{We.addEventListener(Me,Se=>{if(Se.button&&Se.button>0||(y=Object.assign({},L.defaults.dragit,g),y.disableOnMaximized&&n.status==="maximized"))return!1;if((y.containment||y.containment===0)&&(y.containment=L.pOcontainment(y.containment)),y.grid&&Array.isArray(y.grid)&&y.grid.length===1&&(y.grid[1]=y.grid[0]),y.snap&&(typeof y.snap=="object"?y.snap=Object.assign({},L.defaultSnapConfig,y.snap):y.snap=L.defaultSnapConfig),Se.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(nt=>nt.style.pointerEvents="none");let Oe=window.getComputedStyle(n),Qe=parseFloat(Oe.left),Re=parseFloat(Oe.top),ae=parseFloat(Oe.width),Je=parseFloat(Oe.height),Be=Se.touches?Se.touches[0].clientX:Se.clientX,ye=Se.touches?Se.touches[0].clientY:Se.clientY,ke=n.parentElement,Pt=ke.getBoundingClientRect(),fe=window.getComputedStyle(ke),Ze=n.getScaleFactor(),kn=0,nn=L.getScrollbarWidth(ke);S=nt=>{if(nt.preventDefault(),!v){if(document.dispatchEvent($),n.style.opacity=y.opacity,n.snapped&&y.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let ce=n.getBoundingClientRect(),De=Be-(ce.left+ce.width),we=ce.width/2;De>-we&&(kn=De+we)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),y.drop&&y.drop.dropZones){let ce=y.drop.dropZones.map(we=>L.pOcontainer(we)),De=[];ce.forEach(function(we){we.length?we.forEach(function(Fe){De.push(Fe)}):De.push(we)}),De=De.filter(function(we,Fe,Ge){return Ge.indexOf(we)===Fe}),y.drop.dropZones=De}y.start.length&&L.processCallbacks(n,y.start,!1,{left:Qe,top:Re,width:ae,height:Je},nt)}v=1;let It,Le,Ke,kt,it,Ae,_e,Rt,Ve,wt,ht=nt.touches?nt.touches[0].clientX:nt.clientX,st=nt.touches?nt.touches[0].clientY:nt.clientY,Ue=window.getComputedStyle(n),ge;if(ke===document.body){let ce=n.getBoundingClientRect();Ve=window.innerWidth-parseInt(fe.borderLeftWidth,10)-parseInt(fe.borderRightWidth,10)-(ce.left+ce.width),wt=window.innerHeight-parseInt(fe.borderTopWidth,10)-parseInt(fe.borderBottomWidth,10)-(ce.top+ce.height)}else Ve=parseInt(fe.width,10)-parseInt(fe.borderLeftWidth,10)-parseInt(fe.borderRightWidth,10)-(parseInt(Ue.left,10)+parseInt(Ue.width,10)),wt=parseInt(fe.height,10)-parseInt(fe.borderTopWidth,10)-parseInt(fe.borderBottomWidth,10)-(parseInt(Ue.top,10)+parseInt(Ue.height,10));It=parseFloat(Ue.left),Ke=parseFloat(Ue.top),it=Ve,_e=wt,y.snap&&(y.snap.trigger==="panel"?(Le=It**2,kt=Ke**2,Ae=it**2,Rt=_e**2):y.snap.trigger==="pointer"&&(n.options.container==="window"?(It=ht,Ke=st,it=window.innerWidth-ht,_e=window.innerHeight-st,Le=ht**2,kt=Ke**2,Ae=it**2,Rt=_e**2):(ge=n.overlaps(ke,"paddingbox",nt),It=ge.pointer.left,Ke=ge.pointer.top,it=ge.pointer.right,_e=ge.pointer.bottom,Le=ge.pointer.left**2,kt=ge.pointer.top**2,Ae=ge.pointer.right**2,Rt=ge.pointer.bottom**2)));let et=Math.sqrt(Le+kt),ee=Math.sqrt(Le+Rt),ot=Math.sqrt(Ae+kt),pt=Math.sqrt(Ae+Rt),_t=Math.abs(It-it)/2,te=Math.abs(Ke-_e)/2,ln=Math.sqrt(Le+te**2),mn=Math.sqrt(kt+_t**2),ft=Math.sqrt(Ae+te**2),Cn=Math.sqrt(Rt+_t**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(ne),(!y.axis||y.axis==="x")&&(n.style.left=Qe+(ht-Be)/Ze.x+kn+"px"),(!y.axis||y.axis==="y")&&(n.style.top=Re+(st-ye)/Ze.y+"px"),y.grid){let ce=y.grid,De=y.axis,we=ce[0]*Math.round((Qe+(ht-Be))/ce[0]),Fe=ce[1]*Math.round((Re+(st-ye))/ce[1]);(!De||De==="x")&&(n.style.left=`${we}px`),(!De||De==="y")&&(n.style.top=`${Fe}px`)}if(y.containment||y.containment===0){let ce=y.containment,De,we;if(n.options.container==="window")De=window.innerWidth-parseFloat(Ue.width)-ce[1]-nn.y,we=window.innerHeight-parseFloat(Ue.height)-ce[2]-nn.x;else{let Fe=parseFloat(fe.borderLeftWidth)+parseFloat(fe.borderRightWidth),Ge=parseFloat(fe.borderTopWidth)+parseFloat(fe.borderBottomWidth);De=Pt.width/Ze.x-parseFloat(Ue.width)-ce[1]-Fe-nn.y,we=Pt.height/Ze.y-parseFloat(Ue.height)-ce[2]-Ge-nn.x}parseFloat(n.style.left)<=ce[3]&&(n.style.left=ce[3]+"px"),parseFloat(n.style.top)<=ce[0]&&(n.style.top=ce[0]+"px"),parseFloat(n.style.left)>=De&&(n.style.left=De+"px"),parseFloat(n.style.top)>=we&&(n.style.top=we+"px")}if(y.drag.length){let ce={left:It,top:Ke,right:it,bottom:_e,width:parseFloat(Ue.width),height:parseFloat(Ue.height)};L.processCallbacks(n,y.drag,!1,ce,nt)}if(y.snap){let ce=y.snap.sensitivity,De=ke===document.body?window.innerWidth/8:Pt.width/8,we=ke===document.body?window.innerHeight/8:Pt.height/8;n.snappableTo=!1,L.removeSnapAreas(),et<ce?y.snap.snapLeftTop!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="left-top",L.createSnapArea(n,"lt",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(ge.pointer.left>0&&ge.pointer.top>0?(n.snappableTo="left-top",L.createSnapArea(n,"lt",ce)):(n.snappableTo=!1,L.removeSnapAreas()))):ee<ce?y.snap.snapLeftBottom!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="left-bottom",L.createSnapArea(n,"lb",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(ge.pointer.left>0&&ge.pointer.bottom>0?(n.snappableTo="left-bottom",L.createSnapArea(n,"lb",ce)):(n.snappableTo=!1,L.removeSnapAreas()))):ot<ce?y.snap.snapRightTop!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="right-top",L.createSnapArea(n,"rt",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(ge.pointer.right>0&&ge.pointer.top>0?(n.snappableTo="right-top",L.createSnapArea(n,"rt",ce)):(n.snappableTo=!1,L.removeSnapAreas()))):pt<ce?y.snap.snapRightBottom!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="right-bottom",L.createSnapArea(n,"rb",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(ge.pointer.right>0&&ge.pointer.bottom>0?(n.snappableTo="right-bottom",L.createSnapArea(n,"rb",ce)):(n.snappableTo=!1,L.removeSnapAreas()))):Ke<ce&&mn<De?y.snap.snapCenterTop!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="center-top",L.createSnapArea(n,"ct",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(ge.pointer.top>0?(n.snappableTo="center-top",L.createSnapArea(n,"ct",ce)):(n.snappableTo=!1,L.removeSnapAreas()))):It<ce&&ln<we?y.snap.snapLeftCenter!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="left-center",L.createSnapArea(n,"lc",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(ge.pointer.left>0?(n.snappableTo="left-center",L.createSnapArea(n,"lc",ce)):(n.snappableTo=!1,L.removeSnapAreas()))):it<ce&&ft<we?y.snap.snapRightCenter!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="right-center",L.createSnapArea(n,"rc",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(ge.pointer.right>0?(n.snappableTo="right-center",L.createSnapArea(n,"rc",ce)):(n.snappableTo=!1,L.removeSnapAreas()))):_e<ce&&Cn<De&&y.snap.snapCenterBottom!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="center-bottom",L.createSnapArea(n,"cb",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(ge.pointer.bottom>0?(n.snappableTo="center-bottom",L.createSnapArea(n,"cb",ce)):(n.snappableTo=!1,L.removeSnapAreas())))}if(y.drop&&y.drop.dropZones){let ce=L.isIE?"msElementsFromPoint":"elementsFromPoint",De=document[ce](nt.clientX,nt.clientY);Array.isArray(De)||(De=Array.prototype.slice.call(De)),y.drop.dropZones.forEach(we=>{De.includes(we)&&(n.droppableTo=we)}),De.includes(n.droppableTo)||(n.droppableTo=!1)}},L.pointermove.forEach(nt=>document.addEventListener(nt,S)),window.addEventListener("mouseout",Q,!1)})}),L.pointerup.forEach(Me=>{document.addEventListener(Me,an),window.removeEventListener("mouseout",Q)}),g.disable&&(We.style.pointerEvents="none")}),n},n.dragit=g=>{const v=Object.assign({},L.defaults.dragit,e.dragit),S=n.querySelectorAll(v.handles);return g==="disable"?S.forEach(y=>y.style.pointerEvents="none"):S.forEach(y=>y.style.pointerEvents="auto"),n},n.sizeit=(g={})=>{const v=new CustomEvent("jspanelresizestart",{detail:n.id}),S=new CustomEvent("jspanelresize",{detail:n.id}),y=new CustomEvent("jspanelresizestop",{detail:n.id});[v,S,y].forEach(Se=>Se.panel=n);let $={},ne,pe,K,Q,Xe,ct;$.handles=g.handles||L.defaults.resizeit.handles,$.handles.split(",").forEach(Se=>{const Oe=document.createElement("DIV");Oe.className=`jsPanel-resizeit-handle jsPanel-resizeit-${Se.trim()}`,n.append(Oe)});let an=g.aspectRatio?g.aspectRatio:!1;function We(Se){Se.relatedTarget===null&&L.pointermove.forEach(Oe=>document.removeEventListener(Oe,ne,!1))}function Me(Se){if(L.pointermove.forEach(Oe=>document.removeEventListener(Oe,ne,!1)),Se.target.classList&&Se.target.classList.contains("jsPanel-resizeit-handle")){let Oe,Qe,Re=Se.target.className;if(Re.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(Oe=!0),Re.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Qe=!0),$.grid&&Array.isArray($.grid)){$.grid.length===1&&($.grid[1]=$.grid[0]);const ae=parseFloat(n.style.width),Je=parseFloat(n.style.height),Be=ae%$.grid[0],ye=Je%$.grid[1],ke=parseFloat(n.style.left),Pt=parseFloat(n.style.top),fe=ke%$.grid[0],Ze=Pt%$.grid[1];Be<$.grid[0]/2?n.style.width=ae-Be+"px":n.style.width=ae+($.grid[0]-Be)+"px",ye<$.grid[1]/2?n.style.height=Je-ye+"px":n.style.height=Je+($.grid[1]-ye)+"px",Oe&&(fe<$.grid[0]/2?n.style.left=ke-fe+"px":n.style.left=ke+($.grid[0]-fe)+"px"),Qe&&(Ze<$.grid[1]/2?n.style.top=Pt-Ze+"px":n.style.top=Pt+($.grid[1]-Ze)+"px")}}if(pe){n.content.style.pointerEvents="inherit",pe=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let Oe=n.controlbar.querySelector(".jsPanel-btn-smallify"),Qe=n.getBoundingClientRect();if(Oe&&Qe.height>ct+5&&(Oe.style.transform="rotate(0deg)"),document.dispatchEvent(y),$.stop.length){let Re=window.getComputedStyle(n),ae={left:parseFloat(Re.left),top:parseFloat(Re.top),width:parseFloat(Re.width),height:parseFloat(Re.height)};L.processCallbacks(n,$.stop,!1,ae,Se)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Oe=>Oe.style.pointerEvents="auto"),$.aspectRatio=an,document.removeEventListener(Se,Me)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(Se=>{Se.style.touchAction="none",L.pointerdown.forEach(Oe=>{Se.addEventListener(Oe,Qe=>{if(Qe.preventDefault(),Qe.stopPropagation(),Qe.button&&Qe.button>0)return!1;let Re=1;if($=Object.assign({},L.defaults.resizeit,g),($.containment||$.containment===0)&&($.containment=L.pOcontainment($.containment)),$.aspectRatio&&$.aspectRatio===!0&&($.aspectRatio="panel"),L.modifier){let we=L.modifier;we.altKey?$.aspectRatio="content":we.ctrlKey?$.aspectRatio="panel":we.shiftKey&&($.aspectRatio=!1,Re=2)}let ae=typeof $.maxWidth=="function"?$.maxWidth():$.maxWidth||1e4,Je=typeof $.maxHeight=="function"?$.maxHeight():$.maxHeight||1e4,Be=typeof $.minWidth=="function"?$.minWidth():$.minWidth,ye=typeof $.minHeight=="function"?$.minHeight():$.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(we=>we.style.pointerEvents="none");const ke=n.parentElement,Pt=ke.tagName.toLowerCase(),fe=n.getBoundingClientRect(),Ze=ke.getBoundingClientRect(),kn=window.getComputedStyle(ke,null),nn=parseInt(kn.borderLeftWidth,10),nt=parseInt(kn.borderTopWidth,10),It=kn.getPropertyValue("position"),Le=Qe.clientX||Qe.clientX===0||Qe.touches[0].clientX,Ke=Qe.clientY||Qe.clientY===0||Qe.touches[0].clientY,kt=Le/Ke,it=Qe.target.classList,Ae=n.getScaleFactor(),_e=fe.width/fe.height,Rt=n.content.getBoundingClientRect(),Ve=Rt.width/Rt.height,wt=n.header.getBoundingClientRect().height,ht=n.footer.getBoundingClientRect().height||0;let st=fe.left,Ue=fe.top,ge=1e4,et=1e4,ee=1e4,ot=1e4;Xe=fe.width,ct=fe.height,Pt!=="body"&&(st=fe.left-Ze.left+ke.scrollLeft,Ue=fe.top-Ze.top+ke.scrollTop),Pt==="body"&&$.containment?(ge=document.documentElement.clientWidth-fe.left,ee=document.documentElement.clientHeight-fe.top,et=fe.width+fe.left,ot=fe.height+fe.top):$.containment&&(It==="static"?(ge=Ze.width-fe.left+nn,ee=Ze.height+Ze.top-fe.top+nt,et=fe.width+(fe.left-Ze.left)-nn,ot=fe.height+(fe.top-Ze.top)-nt):(ge=ke.clientWidth-(fe.left-Ze.left)/Ae.x+nn,ee=ke.clientHeight-(fe.top-Ze.top)/Ae.y+nt,et=(fe.width+fe.left-Ze.left)/Ae.x-nn,ot=n.clientHeight+(fe.top-Ze.top)/Ae.y-nt)),$.containment&&(et-=$.containment[3],ot-=$.containment[0],ge-=$.containment[1],ee-=$.containment[2]);const pt=window.getComputedStyle(n),_t=parseFloat(pt.width)-fe.width,te=parseFloat(pt.height)-fe.height;let ln=parseFloat(pt.left)-fe.left,mn=parseFloat(pt.top)-fe.top;ke!==document.body&&(ln+=Ze.left,mn+=Ze.top);let ft=parseInt(pt.borderTopWidth,10),Cn=parseInt(pt.borderRightWidth,10),ce=parseInt(pt.borderBottomWidth,10),De=parseInt(pt.borderLeftWidth,10);ne=we=>{we.preventDefault(),pe||(document.dispatchEvent(v),$.start.length&&L.processCallbacks(n,$.start,!1,{width:Xe,height:ct,left:st,top:Ue},we),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),fe.height>ct+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),pe=1,document.dispatchEvent(S);let Fe=we.touches?we.touches[0].clientX:we.clientX,Ge=we.touches?we.touches[0].clientY:we.clientY,je;it.contains("jsPanel-resizeit-e")?(K=Xe+(Fe-Le)*Re/Ae.x+_t,K>=ge&&(K=ge),K>=ae&&(K=ae),K<=Be&&(K=Be),n.style.width=K+"px",Re===2&&(n.style.left=st-(Fe-Le)+"px"),$.aspectRatio==="content"?(n.style.height=(K-Cn-De)/Ve+wt+ht+ft+ce+"px",$.containment&&(je=n.overlaps(ke),je.bottom<=$.containment[2]&&(n.style.height=ee+"px",n.style.width=ee*Ve+"px"))):$.aspectRatio==="panel"&&(n.style.height=K/_e+"px",$.containment&&(je=n.overlaps(ke),je.bottom<=$.containment[2]&&(n.style.height=ee+"px",n.style.width=ee*_e+"px")))):it.contains("jsPanel-resizeit-s")?(Q=ct+(Ge-Ke)*Re/Ae.y+te,Q>=ee&&(Q=ee),Q>=Je&&(Q=Je),Q<=ye&&(Q=ye),n.style.height=Q+"px",Re===2&&(n.style.top=Ue-(Ge-Ke)+"px"),$.aspectRatio==="content"?(n.style.width=(Q-wt-ht-ft-ce)*Ve+ft+ce+"px",$.containment&&(je=n.overlaps(ke),je.right<=$.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/Ve+"px"))):$.aspectRatio==="panel"&&(n.style.width=Q*_e+"px",$.containment&&(je=n.overlaps(ke),je.right<=$.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/_e+"px")))):it.contains("jsPanel-resizeit-w")?(K=Xe+(Le-Fe)*Re/Ae.x+_t,K<=ae&&K>=Be&&K<=et&&(n.style.left=st+(Fe-Le)/Ae.x+ln+"px"),K>=et&&(K=et),K>=ae&&(K=ae),K<=Be&&(K=Be),n.style.width=K+"px",$.aspectRatio==="content"?(n.style.height=(K-Cn-De)/Ve+wt+ht+ft+ce+"px",$.containment&&(je=n.overlaps(ke),je.bottom<=$.containment[2]&&(n.style.height=ee+"px",n.style.width=ee*Ve+"px"))):$.aspectRatio==="panel"&&(n.style.height=K/_e+"px",$.containment&&(je=n.overlaps(ke),je.bottom<=$.containment[2]&&(n.style.height=ee+"px",n.style.width=ee*_e+"px")))):it.contains("jsPanel-resizeit-n")?(Q=ct+(Ke-Ge)*Re/Ae.y+te,Q<=Je&&Q>=ye&&Q<=ot&&(n.style.top=Ue+(Ge-Ke)/Ae.y+mn+"px"),Q>=ot&&(Q=ot),Q>=Je&&(Q=Je),Q<=ye&&(Q=ye),n.style.height=Q+"px",$.aspectRatio==="content"?(n.style.width=(Q-wt-ht-ft-ce)*Ve+ft+ce+"px",$.containment&&(je=n.overlaps(ke),je.right<=$.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/Ve+"px"))):$.aspectRatio==="panel"&&(n.style.width=Q*_e+"px",$.containment&&(je=n.overlaps(ke),je.right<=$.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/_e+"px")))):it.contains("jsPanel-resizeit-se")?(K=Xe+(Fe-Le)*Re/Ae.x+_t,K>=ge&&(K=ge),K>=ae&&(K=ae),K<=Be&&(K=Be),n.style.width=K+"px",Re===2&&(n.style.left=st-(Fe-Le)+"px"),$.aspectRatio&&(n.style.height=K/_e+"px"),Q=ct+(Ge-Ke)*Re/Ae.y+te,Q>=ee&&(Q=ee),Q>=Je&&(Q=Je),Q<=ye&&(Q=ye),n.style.height=Q+"px",Re===2&&(n.style.top=Ue-(Ge-Ke)+"px"),$.aspectRatio==="content"?(n.style.width=(Q-wt-ht-ft-ce)*Ve+ft+ce+"px",$.containment&&(je=n.overlaps(ke),je.right<=$.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/Ve+"px"))):$.aspectRatio==="panel"&&(n.style.width=Q*_e+"px",$.containment&&(je=n.overlaps(ke),je.right<=$.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/_e+"px")))):it.contains("jsPanel-resizeit-sw")?(Q=ct+(Ge-Ke)*Re/Ae.y+te,Q>=ee&&(Q=ee),Q>=Je&&(Q=Je),Q<=ye&&(Q=ye),n.style.height=Q+"px",Re===2&&(n.style.top=Ue-(Ge-Ke)+"px"),$.aspectRatio&&(n.style.width=Q*_e+"px"),K=Xe+(Le-Fe)*Re/Ae.x+_t,K<=ae&&K>=Be&&K<=et&&(n.style.left=st+(Fe-Le)/Ae.x+ln+"px"),K>=et&&(K=et),K>=ae&&(K=ae),K<=Be&&(K=Be),n.style.width=K+"px",$.aspectRatio==="content"?(n.style.height=(K-Cn-De)/Ve+wt+ht+ft+ce+"px",$.containment&&(je=n.overlaps(ke),je.bottom<=$.containment[2]&&(n.style.height=ee+"px",n.style.width=ee*Ve+"px"))):$.aspectRatio==="panel"&&(n.style.height=K/_e+"px",$.containment&&(je=n.overlaps(ke),je.bottom<=$.containment[2]&&(n.style.height=ee+"px",n.style.width=ee*_e+"px")))):it.contains("jsPanel-resizeit-ne")?(K=Xe+(Fe-Le)*Re/Ae.x+_t,K>=ge&&(K=ge),K>=ae&&(K=ae),K<=Be&&(K=Be),n.style.width=K+"px",Re===2&&(n.style.left=st-(Fe-Le)+"px"),$.aspectRatio&&(n.style.height=K/_e+"px"),Q=ct+(Ke-Ge)*Re/Ae.y+te,Q<=Je&&Q>=ye&&Q<=ot&&(n.style.top=Ue+(Ge-Ke)/Ae.y+mn+"px"),Q>=ot&&(Q=ot),Q>=Je&&(Q=Je),Q<=ye&&(Q=ye),n.style.height=Q+"px",$.aspectRatio==="content"?(n.style.width=(Q-wt-ht-ft-ce)*Ve+ft+ce+"px",$.containment&&(je=n.overlaps(ke),je.right<=$.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/Ve+"px"))):$.aspectRatio==="panel"&&(n.style.width=Q*_e+"px",$.containment&&(je=n.overlaps(ke),je.right<=$.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/_e+"px")))):it.contains("jsPanel-resizeit-nw")&&($.aspectRatio&&it.contains("jsPanel-resizeit-nw")&&(Fe=Ge*kt,Ge=Fe/kt),K=Xe+(Le-Fe)*Re/Ae.x+_t,K<=ae&&K>=Be&&K<=et&&(n.style.left=st+(Fe-Le)/Ae.x+ln+"px"),K>=et&&(K=et),K>=ae&&(K=ae),K<=Be&&(K=Be),n.style.width=K+"px",$.aspectRatio&&(n.style.height=K/_e+"px"),Q=ct+(Ke-Ge)*Re/Ae.y+te,Q<=Je&&Q>=ye&&Q<=ot&&(n.style.top=Ue+(Ge-Ke)/Ae.y+mn+"px"),Q>=ot&&(Q=ot),Q>=Je&&(Q=Je),Q<=ye&&(Q=ye),n.style.height=Q+"px",$.aspectRatio==="content"?n.style.width=(Q-wt-ht-ft-ce)*Ve+ft+ce+"px":$.aspectRatio==="panel"&&(n.style.width=Q*_e+"px")),window.getSelection().removeAllRanges();const rn=window.getComputedStyle(n),He={left:parseFloat(rn.left),top:parseFloat(rn.top),right:parseFloat(rn.right),bottom:parseFloat(rn.bottom),width:parseFloat(rn.width),height:parseFloat(rn.height)};$.resize.length&&L.processCallbacks(n,$.resize,!1,He,we)},L.pointermove.forEach(we=>document.addEventListener(we,ne,!1)),window.addEventListener("mouseout",We,!1)})}),L.pointerup.forEach(function(Oe){document.addEventListener(Oe,Me),window.removeEventListener("mouseout",We)}),g.disable&&(Se.style.pointerEvents="none")}),n},n.resizeit=g=>{const v=n.querySelectorAll(".jsPanel-resizeit-handle");return g==="disable"?v.forEach(S=>S.style.pointerEvents="none"):v.forEach(S=>S.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const g=n.getBoundingClientRect();return{x:g.width/n.offsetWidth,y:g.height/n.offsetHeight}},n.calcSizeFactors=()=>{const g=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(g.left)/(window.innerWidth-parseFloat(g.width)),n.vf=parseFloat(g.top)/(window.innerHeight-parseFloat(g.height));else if(n.parentElement){let v=n.parentElement.getBoundingClientRect();n.hf=parseFloat(g.left)/(v.width-parseFloat(g.width)),n.vf=parseFloat(g.top)/(v.height-parseFloat(g.height))}},n.saveCurrentDimensions=()=>{const g=window.getComputedStyle(n);n.currentData.width=g.width,n.currentData.height=g.height},n.saveCurrentPosition=()=>{const g=window.getComputedStyle(n);n.currentData.left=g.left,n.currentData.top=g.top},n.reposition=(...g)=>{let v=e.position,S=!0,y;return g.forEach($=>{typeof $=="string"||typeof $=="object"?v=$:typeof $=="boolean"?S=$:typeof $=="function"&&(y=$)}),L.position(n,v),n.slaves&&n.slaves.size>0&&n.slaves.forEach($=>$.reposition()),S&&n.saveCurrentPosition(),y&&y.call(n,n),n},n.repositionOnSnap=g=>{let v="0",S="0",y=L.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(g){case"left-top":v=y[3],S=y[0];break;case"right-top":v=-y[1],S=y[0];break;case"right-bottom":v=-y[1],S=-y[2];break;case"left-bottom":v=y[3],S=-y[2];break;case"center-top":v=y[3]/2-y[1]/2,S=y[0];break;case"center-bottom":v=y[3]/2-y[1]/2,S=-y[2];break;case"left-center":v=y[3],S=y[0]/2-y[2]/2;break;case"right-center":v=-y[1],S=y[0]/2-y[2]/2;break}L.position(n,g),L.setStyles(n,{left:`calc(${n.style.left} + ${v}px)`,top:`calc(${n.style.top} + ${S}px)`})},n.overlaps=(g,v,S)=>{let y=n.getBoundingClientRect(),$=getComputedStyle(n.parentElement),ne=n.getScaleFactor(),pe={top:0,right:0,bottom:0,left:0},K,Q=0,Xe=0,ct=0,an=0;n.options.container!=="window"&&v==="paddingbox"&&(pe.top=parseInt($.borderTopWidth,10)*ne.y,pe.right=parseInt($.borderRightWidth,10)*ne.x,pe.bottom=parseInt($.borderBottomWidth,10)*ne.y,pe.left=parseInt($.borderLeftWidth,10)*ne.x),typeof g=="string"?g==="window"?K={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:g==="parent"?K=n.parentElement.getBoundingClientRect():K=document.querySelector(g).getBoundingClientRect():K=g.getBoundingClientRect(),S&&(Q=S.touches?S.touches[0].clientX:S.clientX,Xe=S.touches?S.touches[0].clientY:S.clientY,ct=Q-K.left,an=Xe-K.top);let We=y.left<K.right&&y.right>K.left,Me=y.top<K.bottom&&y.bottom>K.top;return{overlaps:We&&Me,top:y.top-K.top-pe.top,right:K.right-y.right-pe.right,bottom:K.bottom-y.bottom-pe.bottom,left:y.left-K.left-pe.left,parentBorderWidth:pe,panelRect:y,referenceRect:K,pointer:{clientX:Q,clientY:Xe,left:ct-pe.left,top:an-pe.top,right:K.width-ct-pe.right,bottom:K.height-an-pe.bottom}}},n.setSize=()=>{if(e.panelSize){const g=L.pOsize(n,e.panelSize);n.style.width=g.width,n.style.height=g.height}else if(e.contentSize){const g=L.pOsize(n,e.contentSize);n.content.style.width=g.width,n.content.style.height=g.height,n.style.width=g.width,n.content.style.width="100%"}return n},n.resize=(...g)=>{let v=window.getComputedStyle(n),S={width:v.width,height:v.height},y=!0,$;g.forEach(K=>{typeof K=="string"?S=K:typeof K=="object"?S=Object.assign(S,K):typeof K=="boolean"?y=K:typeof K=="function"&&($=K)});let ne=L.pOsize(n,S);n.style.width=ne.width,n.style.height=ne.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(K=>K.reposition()),y&&n.saveCurrentDimensions(),n.status="normalized";let pe=n.controlbar.querySelector(".jsPanel-btn-smallify");return pe&&(pe.style.transform="rotate(0deg)"),$&&$.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=g=>{if(g.target===window){let v=n.status,S=e.onwindowresize,y,$;if(v==="maximized"&&S)n.maximize(!1,!0);else if(n.snapped&&v!=="minimized")n.snap(n.snapped,!0);else if(v==="normalized"||v==="smallified"||v==="maximized"){let ne=typeof S;ne==="boolean"?(y=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=y<=0?0:y+"px",$=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=$<=0?0:$+"px"):ne==="function"?S.call(n,g,n):ne==="object"&&(S.preset===!0&&(y=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=y<=0?0:y+"px",$=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=$<=0?0:$+"px"),S.callback.call(n,g,n))}else v==="smallifiedmax"&&S&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(ne=>ne.reposition())}},n.setControls=(g,v)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(S=>{const y=S.className.split("-"),$=y[y.length-1];n.getAttribute(`data-btn${$}`)!=="hidden"&&(S.style.display="block")}),g.forEach(S=>{const y=n.controlbar.querySelector(S);y&&(y.style.display="none")}),v&&v.call(n,n),n),n.setControlStatus=(g,v="enable",S)=>{const y=n.controlbar.querySelector(`.jsPanel-btn-${g}`);switch(v){case"disable":n.getAttribute(`data-btn${g}`)!=="removed"&&(n.setAttribute(`data-btn${g}`,"disabled"),y.style.pointerEvents="none",y.style.opacity=.4,y.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${g}`)!=="removed"&&(n.setAttribute(`data-btn${g}`,"hidden"),y.style.display="none");break;case"show":n.getAttribute(`data-btn${g}`)!=="removed"&&(n.setAttribute(`data-btn${g}`,"enabled"),y.style.display="block",y.style.pointerEvents="auto",y.style.opacity=1,y.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${g}`)!=="removed"&&(n.getAttribute(`data-btn${g}`)==="hidden"&&(y.style.display="block"),n.setAttribute(`data-btn${g}`,"enabled"),y.style.pointerEvents="auto",y.style.opacity=1,y.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(y),n.setAttribute(`data-btn${g}`,"removed");break}return S&&S.call(n,n),n},n.setControlSize=g=>{const v=g.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(y=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach($=>y.classList.remove($)),y.classList.add(`jsPanel-btn-${v}`)}),v==="xl"?n.titlebar.style.fontSize="1.5rem":v==="lg"?n.titlebar.style.fontSize="1.25rem":v==="md"?n.titlebar.style.fontSize="1.05rem":v==="sm"?n.titlebar.style.fontSize=".9rem":v==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=g=>{if(n.options.headerControls.add){let $=n.options.headerControls.add;Array.isArray($)||($=[$]),$.forEach(ne=>n.addControl(ne))}let v=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach($=>{let ne=$.className.match(/jsPanel-btn-[a-z\d]{3,}/i),pe=ne[0].substring(12);v.push(pe)});const y=L.pOheaderControls(e.headerControls);return e.headerControls=y,v.forEach($=>{y[$]&&n.setControlStatus($,y[$])}),n.setControlSize(y.size),g&&g.call(n,n),n},n.setHeaderLogo=(g,v)=>{let S=[n.headerlogo],y=document.querySelector("#"+n.id+"-min");return y&&S.push(y.querySelector(".jsPanel-headerlogo")),typeof g=="string"?g.startsWith("<")?S.forEach($=>$.innerHTML=g):S.forEach($=>{L.emptyNode($);let ne=document.createElement("img");ne.src=g,$.append(ne)}):S.forEach($=>{L.emptyNode($),$.append(g)}),n.headerlogo.childNodes.forEach($=>{$.nodeName&&$.nodeName==="IMG"&&$.setAttribute("draggable","false")}),v&&v.call(n,n),n},n.setHeaderRemove=g=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(v=>n.setAttribute(`data-btn${v}`,"removed")),g&&g.call(n,n),n),n.setHeaderTitle=(g,v)=>{let S=[n.headertitle],y=document.querySelector("#"+n.id+"-min");return y&&S.push(y.querySelector(".jsPanel-title")),typeof g=="string"?S.forEach($=>$.innerHTML=g):typeof g=="function"?S.forEach($=>{L.emptyNode($),$.innerHTML=g()}):S.forEach($=>{L.emptyNode($),$.append(g)}),v&&v.call(n,n),n},n.setIconfont=(g,v=n,S)=>{if(g){let y,$;if(g==="fa"||g==="far"||g==="fal"||g==="fas"||g==="fad")y=[`${g} fa-window-close`,`${g} fa-window-maximize`,`${g} fa-window-restore`,`${g} fa-window-minimize`,`${g} fa-chevron-up`];else if(g==="material-icons")y=[g,g,g,g,g,g],$=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(g))y=[`custom-control-icon ${g[4]}`,`custom-control-icon ${g[3]}`,`custom-control-icon ${g[2]}`,`custom-control-icon ${g[1]}`,`custom-control-icon ${g[0]}`];else if(g==="bootstrap"||g==="glyphicon")y=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return v;v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(ne=>L.emptyNode(ne).innerHTML="<span></span>"),Array.prototype.slice.call(v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((ne,pe)=>{ne.className=y[pe],g==="material-icons"&&(ne.textContent=$[pe])})}return S&&S.call(v,v),v},n.addToolbar=(g,v,S)=>{if(g==="header"?g=n.headertoolbar:g==="footer"&&(g=n.footer),typeof v=="string")g.innerHTML=v;else if(Array.isArray(v))v.forEach(y=>{typeof y=="string"?g.innerHTML+=y:g.append(y)});else if(typeof v=="function"){let y=v.call(n,n);typeof y=="string"?g.innerHTML=y:g.append(y)}else g.append(v);return g.classList.add("active"),S&&S.call(n,n),n},n.addCloseControl=()=>{let g=document.createElement("button"),v=n.content.style.color;return g.classList.add("jsPanel-addCloseCtrl"),g.innerHTML=L.icons.close,g.style.color=v,n.options.rtl&&g.classList.add("rtl"),n.appendChild(g),L.pointerup.forEach(S=>{g.addEventListener(S,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.close(null,!0)})}),L.pointerdown.forEach(S=>{g.addEventListener(S,y=>y.preventDefault())}),n},n.addControl=g=>{if(!g.html)return n;g.position||(g.position=1);const v=n.controlbar.querySelectorAll(".jsPanel-btn").length;let S=document.createElement("button");S.innerHTML=g.html,S.className=`jsPanel-btn jsPanel-btn-${g.name} jsPanel-btn-${e.headerControls.size}`,S.style.color=n.header.style.color,g.position>v?n.controlbar.append(S):n.controlbar.insertBefore(S,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${g.position})`));const y=g.ariaLabel||g.name;return y&&S.setAttribute("aria-label",y),L.pointerup.forEach($=>{S.addEventListener($,ne=>{if(ne.preventDefault(),ne.button&&ne.button>0)return!1;g.handler.call(n,n,S)})}),g.afterInsert&&g.afterInsert.call(S,S),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(g=>{g.dir="rtl",e.rtl.lang&&(g.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),i.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),L.isIE){let g=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":g.forEach(v=>{v.style.height="34px"});break;case"xs":g.forEach(v=>{v.style.height="26px"});break;case"sm":g.forEach(v=>{v.style.height="30px"});break;case"lg":g.forEach(v=>{v.style.height="38px"});break;case"xl":g.forEach(v=>{v.style.height="42px"});break}}if(e.header==="auto-show-hide"){let g="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,g),this.setClass(n.content,g),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,L.setClass(n,g),L.remClass(n.content,g)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,L.remClass(n,g),L.setClass(n.content,g)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[g,v]of Object.entries(e.css))if(g==="panel")n.className+=` ${v}`;else{let S=n.querySelector(`.jsPanel-${g}`);S&&(S.className+=` ${v}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const g=e.contentOverflow.split(" ");g.length===1?n.content.style.overflow=g[0]:g.length===2&&(n.content.style.overflowX=g[0],n.content.style.overflowY=g[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let g=Object.assign({},L.defaultAutocloseConfig,e.autoclose);g.time&&typeof g.time=="number"&&(g.time+="ms");let v=n.progressbar.querySelector("div");v.addEventListener("animationend",S=>{S.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),g.progressbar&&(n.progressbar.classList.add("active"),g.background?L.colorNames[g.background]?n.progressbar.style.background="#"+L.colorNames[g.background]:n.progressbar.style.background=g.background:n.progressbar.classList.add("success-bg")),v.style.animation=`${g.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(u),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let g=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=g,e.dragit.snap===!0?(e.dragit.snap=L.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=g)}if(e.dragit?(["start","drag","stop"].forEach(g=>{e.dragit[g]?typeof e.dragit[g]=="function"&&(e.dragit[g]=[e.dragit[g]]):e.dragit[g]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",g=>{g.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(v=>{e.resizeit[v]?typeof e.resizeit[v]=="function"&&(e.resizeit[v]=[e.resizeit[v]]):e.resizeit[v]=[]}),n.sizeit(e.resizeit);let g;n.addEventListener("jspanelresizestart",v=>{v.panel===n&&(g=n.status)},!1),n.addEventListener("jspanelresizestop",v=>{v.panel===n&&(g==="smallified"||g==="smallifiedmax"||g==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(u),document.dispatchEvent(a),e.onstatuschange&&L.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(g=>{n.addEventListener(g,v=>{!v.target.closest(".jsPanel-btn-close")&&!v.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let g=e.onparentresize,v=typeof g,S=n.isChildpanel();if(S){const y=S.content;let $=[];n.parentResizeHandler=ne=>{if(ne.panel===S){$[0]=y.offsetWidth,$[1]=y.offsetHeight;let pe=n.status,K,Q;pe==="maximized"&&g?n.maximize():n.snapped&&pe!=="minimized"?n.snap(n.snapped,!0):pe==="normalized"||pe==="smallified"||pe==="maximized"?v==="function"?g.call(n,n,{width:$[0],height:$[1]}):v==="object"&&g.preset===!0?(K=($[0]-n.offsetWidth)*n.hf,n.style.left=K<=0?0:K+"px",Q=($[1]-n.offsetHeight)*n.vf,n.style.top=Q<=0?0:Q+"px",g.callback.call(n,n,{width:$[0],height:$[1]})):v==="boolean"&&(K=($[0]-n.offsetWidth)*n.hf,n.style.left=K<=0?0:K+"px",Q=($[1]-n.offsetHeight)*n.vf,n.style.top=Q<=0?0:Q+"px"):pe==="smallifiedmax"&&g&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(g=>g.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(g=>g.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(g=>g.call(n,n)):t.call(n,n)),document.dispatchEvent(o),n}};const pp=/<\/?[a-z][a-z0-9]*(\s[^<>]*)?\/?>|&[a-z][a-z0-9]*;|&#\d+;|&#x[0-9a-f]+;/i;function kc(e){return pp.test(e)}function mp(e){return e.replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&apos;|&#39;/gi,"'").replace(/&nbsp;/gi," ").replace(/&#x([0-9a-f]+);/gi,(t,r)=>String.fromCodePoint(parseInt(r,16))).replace(/&#(\d+);/g,(t,r)=>String.fromCodePoint(Number(r))).replace(/&amp;/gi,"&")}function gp(e){if(typeof document<"u"){const t=document.createElement("div");return t.innerHTML=e,t.textContent??""}return mp(e.replace(/<[^>]*>/g,""))}function bp(e){return(kc(e)?gp(e):e).replace(/\s+/g," ").trim()}const yp={id:"html-preview",name:"HTML Preview",type:"cell-renderer",version:"0.3.0",description:`Shows a cell's HTML as a plain-text preview (first N characters); click to edit the raw HTML in a dialog, or use the popup icon to view the full rendered HTML in a window. Apply by setting a column's renderer to "html-preview". For direct in-cell rendering use the "html" renderer instead.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-preview.ts"};let Hs=30;async function qa(e){const t=await e.settings.get("html-preview","maxChars");typeof t=="number"&&Number.isFinite(t)&&t>0&&(Hs=Math.floor(t))}function wp(e){customElements.get("html-preview-cell")||customElements.define("html-preview-cell",vp),e.ui.registerCellRenderer("html-preview","html-preview-cell"),e.ui.registerSettings("html-preview","HTML Preview",[{key:"maxChars",label:"Max characters shown",type:"number",default:30,scope:"workspace",description:"HTML-preview cells show the first N characters of the text; use the popup icon on the right to open the full rendered HTML in a window. Applies to cells rendered after the change (reload to refresh all)."}]),qa(e),e.events.on("app:ready",()=>void qa(e))}function Wa(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let Ka=0;class vp extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML"}set value(t){const r=t??"";this._value!==r&&(this._value=r,this.render())}get value(){return this._value}set column(t){this._label=t?.label??"HTML"}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const a=document.createElement("span");a.style.cssText="color:#9ca3af;cursor:text",a.textContent="empty",a.title="Click to edit the HTML",a.addEventListener("click",()=>this.openEditor()),this.append(a);return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%";const r=document.createElement("span"),i=bp(this._value);r.textContent=i.length>Hs?i.slice(0,Hs)+"…":i,r.title="Click to edit the HTML",r.style.cssText="flex:0 1 auto;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:text",r.addEventListener("click",a=>{a.stopPropagation(),this.openEditor()});const n=document.createElement("span");n.style.cssText="flex:1 1 auto";const o=document.createElement("button");o.type="button",o.title="Open the HTML in a window",o.setAttribute("aria-label","Open the HTML in a window"),o.innerHTML='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>',o.style.cssText="flex:none;display:inline-flex;align-items:center;justify-content:center;padding:1px;background:none;border:0;color:#9ca3af;cursor:pointer;line-height:0",o.addEventListener("mouseenter",()=>o.style.color="#4b5563"),o.addEventListener("mouseleave",()=>o.style.color="#9ca3af"),o.addEventListener("click",a=>{a.stopPropagation(),this.openWindow()}),t.append(r,n,o),this.append(t)}openWindow(){const t=document.createElement("div");if(t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box",kc(this._value))t.innerHTML=this._value;else{const r=document.createElement("pre");r.style.cssText="white-space:pre-wrap;word-break:break-word;margin:0;font-family:ui-monospace, monospace;",r.textContent=this._value,t.append(r)}L.create({id:`easydb-html-popup-${++Ka}`,container:Wa(),headerTitle:this._label,theme:"#7c3aed",content:t,contentSize:"520 400",position:"center-top 0 60",minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1},resizeit:{containment:!1}})}openEditor(){const t=document.createElement("div");t.style.cssText="display:flex;flex-direction:column;gap:0.5rem;height:100%;box-sizing:border-box;padding:0.5rem";const r=document.createElement("textarea");r.value=this._value,r.style.cssText="flex:1 1 auto;width:100%;box-sizing:border-box;resize:none;font-family:monospace;font-size:0.85rem";const i=document.createElement("div");i.style.cssText="display:flex;justify-content:flex-end;gap:0.5rem;flex:none";const n=document.createElement("button");n.type="button",n.textContent="Cancel",n.style.cssText="padding:0.3rem 0.8rem;cursor:pointer";const o=document.createElement("button");o.type="button",o.textContent="Save",o.style.cssText="padding:0.3rem 0.8rem;cursor:pointer;background:#7c3aed;color:#fff;border:0;border-radius:0.25rem",i.append(n,o),t.append(r,i);const a=L.create({id:`easydb-html-edit-${++Ka}`,container:Wa(),headerTitle:`Edit ${this._label}`,theme:"#7c3aed",content:t,contentSize:"520 400",position:"center",minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1},resizeit:{containment:!1}});n.addEventListener("click",()=>a.close()),o.addEventListener("click",()=>{this._value=r.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:r.value},bubbles:!0,composed:!0})),a.close(),this.render()}),r.addEventListener("keydown",c=>{c.key==="Enter"&&(c.ctrlKey||c.metaKey)?(c.preventDefault(),o.click()):c.key==="Escape"&&(c.preventDefault(),a.close())}),setTimeout(()=>r.focus(),0)}}const xp=Object.freeze(Object.defineProperty({__proto__:null,init:wp,meta:yp},Symbol.toStringTag,{value:"Module"})),$p={id:"html-render",name:"HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's value directly as HTML (unescaped, in full, no popup). Apply by setting a column's renderer to "html". For a truncated preview use "html-preview".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-render.ts"};function kp(e){customElements.get("html-render-cell")||customElements.define("html-render-cell",Cp),e.ui.registerCellRenderer("html","html-render-cell")}class Cp extends HTMLElement{constructor(){super(...arguments),this._value="",this.editing=!1}set value(t){const r=t??"";this._value!==r&&(this._value=r,this.editing||this.render())}get value(){return this._value}connectedCallback(){this.editing||this.render()}render(){this.innerHTML="";const t=document.createElement("span");t.style.cssText="display:inline-block;min-width:1ch;cursor:text",t.title="Click to edit",this._value?t.innerHTML=this._value:(t.style.color="#9ca3af",t.textContent="empty"),t.addEventListener("click",()=>this.beginEdit()),this.append(t)}beginEdit(){this.editing=!0,this.innerHTML="";const t=document.createElement("input");t.type="text",t.value=this._value,t.style.cssText="width:100%;box-sizing:border-box";let r=!1;const i=()=>{r||(r=!0,this.editing=!1,this._value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:t.value},bubbles:!0,composed:!0})),this.render())};t.addEventListener("blur",i),t.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),t.blur()):n.key==="Escape"&&(n.preventDefault(),r=!0,this.editing=!1,this.render())}),this.append(t),t.focus(),t.select()}}const Ep=Object.freeze(Object.defineProperty({__proto__:null,init:kp,meta:$p},Symbol.toStringTag,{value:"Module"})),Sp={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function _p(e){customElements.get("cell-link")||customElements.define("cell-link",Tp),e.ui.registerCellRenderer("link","cell-link")}class Tp extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._editor=null}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="",this._editor=null;const t=this._value,r=this._editing?null:Ap(t),i=!this._editing&&!r?Pp(t):null,n=!this._editing&&!r&&!i?Ip(t):null;if(r||i||n){const o=document.createElement("span");o.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const a=document.createElement("a");a.href=r?t:i?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(a.target="_blank",a.rel="noopener noreferrer"),a.textContent=t,a.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",a.title=r?`Open ${t}`:i?`Email ${t}`:`Call ${t}`;const c=document.createElement("button");c.type="button",c.title="Edit",c.textContent="✎",c.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",c.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),this._editing=!0,this.render()}),o.append(a,c),this.append(o)}else{const o=document.createElement("input");o.type="text",o.value=t,o.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",o.addEventListener("change",()=>{this._editor===o&&this.commit(o.value)}),o.addEventListener("keydown",a=>{a.key==="Enter"?(a.preventDefault(),this.commit(o.value)):a.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),o.addEventListener("blur",()=>{this._editor===o&&this.commit(o.value)}),this.append(o),this._editor=o,this._editing&&setTimeout(()=>{o.focus(),o.select()},0)}}commit(t){const r=t!==this._value;this._value=t,this._editing=!1,this.render(),r&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Ap(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function Pp(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function Ip(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const i=/[ ()\-.]/.test(t),n=t.startsWith("+");return!i&&!n&&r.length<10?null:t}const Rp=Object.freeze(Object.defineProperty({__proto__:null,init:_p,meta:Sp},Symbol.toStringTag,{value:"Module"}));var Dp=Object.defineProperty,Op=Object.getOwnPropertyDescriptor,Ui=(e,t,r,i)=>{for(var n=i>1?void 0:i?Op(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Dp(t,r,n),n};function jp(e,t,r){(sn.instance??Lp()).show(e,t,r)}function zp(e){if(!e)return null;if(e.source){const t=e.source.type,r=e.source.writable?"Edits you make are written back to the source.":"It is read-only — edits are not saved back to the source.";return{label:`Connected (live ${t})`,note:`This table is connected to a live ${t} backend: its rows are fetched from the source on demand and are not stored locally. ${r} Closing its window just disconnects the view — the source data is untouched.`}}return e.origin?{label:"Imported (snapshot)",note:"This table is a local snapshot imported once from its origin. The rows live in this browser, so edits stay local; use Refresh to re-fetch the latest data from the origin.",url:e.origin.url}:{label:"Local",note:"This table was created in the app and is stored locally in your browser."}}function Lp(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let sn=class extends Ne{constructor(){super(...arguments),this.name="",this.info=null,this.provenance=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),sn.instance=this}disconnectedCallback(){super.disconnectedCallback(),sn.instance===this&&(sn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}show(e,t,r){this.name=e,this.info=t,this.provenance=r??null,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,r){if(!t&&!r)return me;const i=r?T`<a href=${r} target="_blank" rel="noopener noreferrer">${t||r}</a>`:T`${t}`;return T`<dt>${e}</dt>
      <dd>${i}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl),r=zp(this.provenance);return T`
      <dialog @cancel=${this.close} @keydown=${Xt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${this.name}</h2>
            <div class="header-actions">
              <button type="submit" class="ghost">Close</button>
            </div>
          </div>
          <div class="dialog-body">
            ${r?T`<div class="kind">
                  <span class="kind-label">${r.label}</span>
                  <p class="kind-note">${r.note}</p>
                  ${r.url?T`<div class="kind-origin">
                        <a href=${r.url} target="_blank" rel="noopener noreferrer">${r.url}</a>
                      </div>`:me}
                </div>`:me}
            ${e?.descriptionHtml?T`<div class="desc">${or(e.descriptionHtml)}</div>`:e?.description?T`<div class="desc">${e.description}</div>`:me}
            ${t?T`<dl>
                  ${this.row("Source",e?.source,e?.sourceUrl)}
                  ${this.row("License",e?.license,e?.licenseUrl)}
                  ${this.row("About",e?.about,e?.aboutUrl)}
                </dl>`:me}
            ${!e?.description&&!e?.descriptionHtml&&!t&&!r?T`<p class="empty">No additional information.</p>`:me}
          </div>
        </form>
      </dialog>
    `}};sn.instance=null;sn.styles=[Yt,qe`
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
    `];Ui([q()],sn.prototype,"name",2);Ui([q()],sn.prototype,"info",2);Ui([q()],sn.prototype,"provenance",2);sn=Ui([tt("table-info-dialog")],sn);const Fp=.25,Mp=4;function Bp(e){return Math.min(Mp,Math.max(Fp,e))}function Va(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const _r={x:0,y:0,scale:1};function Ga(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Np(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function Up(e,t){let r={..._r};t.style.transformOrigin="0 0";const i=new Set,n=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`;for(const v of i)v({...r})};let o="none",a={..._r},c=0,u=0,p=0,x=0,b=0,k=0;const M=(v,S)=>{const y=e.getBoundingClientRect();return{x:v-y.left,y:S-y.top}},F=v=>{if(v.touches.length===2){o="pinch",a={...r};const[S,y]=[v.touches[0],v.touches[1]];p=Ga(S,y)||1;const $=M((S.clientX+y.clientX)/2,(S.clientY+y.clientY)/2);x=($.x-r.x)/r.scale,b=($.y-r.y)/r.scale,v.preventDefault();return}if(v.touches.length===1&&!Np(v.target)){const S=v.timeStamp;if(S-k<300){r={..._r},n(),k=0,o="none",v.preventDefault();return}k=S,o="pan",a={...r},c=v.touches[0].clientX,u=v.touches[0].clientY}else o="none"},R=v=>{if(o==="pan"&&v.touches.length===1){const S=v.touches[0];r=Va(a,S.clientX-c,S.clientY-u),n(),v.preventDefault()}else if(o==="pinch"&&v.touches.length>=2){const[S,y]=[v.touches[0],v.touches[1]],$=Bp(a.scale*(Ga(S,y)/p)),ne=M((S.clientX+y.clientX)/2,(S.clientY+y.clientY)/2);r={x:ne.x-x*$,y:ne.y-b*$,scale:$},n(),v.preventDefault()}},H=v=>{v.touches.length===0?o="none":v.touches.length===1&&o==="pinch"&&(o="pan",a={...r},c=v.touches[0].clientX,u=v.touches[0].clientY)};let V=!1,ue={..._r},se=0,oe=0,G=!1;const J=(v,S)=>{const y=e.getBoundingClientRect();return v>=y.left&&v<=y.right&&S>=y.top&&S<=y.bottom},he=v=>{if(!V)return;const S=v.clientX-se,y=v.clientY-oe;!G&&Math.hypot(S,y)<4||(G=!0,document.body.style.cursor="grabbing",r=Va(ue,S,y),n(),v.preventDefault())},$e=()=>{V&&(V=!1,document.body.style.cursor="",window.removeEventListener("mousemove",he,!0),window.removeEventListener("mouseup",Te,!0))};function Te(){$e()}const Ie=v=>{v.button===2&&J(v.clientX,v.clientY)&&(V=!0,G=!1,ue={...r},se=v.clientX,oe=v.clientY,window.addEventListener("mousemove",he,!0),window.addEventListener("mouseup",Te,!0))},g=v=>{G&&(v.preventDefault(),G=!1)};return e.addEventListener("touchstart",F,{passive:!1}),e.addEventListener("touchmove",R,{passive:!1}),e.addEventListener("touchend",H),e.addEventListener("touchcancel",H),window.addEventListener("mousedown",Ie,!0),window.addEventListener("contextmenu",g,!0),{snapshot:()=>({...r}),reset:()=>{r={..._r},n()},restore:v=>{r={...v},n()},subscribe:v=>(i.add(v),()=>i.delete(v)),dispose:()=>{e.removeEventListener("touchstart",F),e.removeEventListener("touchmove",R),e.removeEventListener("touchend",H),e.removeEventListener("touchcancel",H),window.removeEventListener("mousedown",Ie,!0),window.removeEventListener("contextmenu",g,!0),$e()}}}function Cc(e,t){let r=null;const i=n=>{const o=document.getElementById(e);o&&(o.style.transformOrigin="0 0",o.style.transform=`translate(${-n.x/n.scale}px, ${-n.y/n.scale}px) scale(${1/n.scale})`)};return{enter(){const n=t();r||!n||(i(n.snapshot()),r=n.subscribe(i))},exit(){r?.(),r=null;const n=document.getElementById(e);n&&(n.style.transform="",n.style.transformOrigin="")}}}function Hp(){for(const e of document.querySelectorAll(".jsPanel"))e.status==="maximized"&&e.maximize?.(void 0,!0)}function qp(e){let t=0;const r=()=>{t||(t=requestAnimationFrame(()=>{t=0,Hp()}))},i=typeof ResizeObserver<"u"?new ResizeObserver(r):null;return i?.observe(e),window.addEventListener("resize",r),()=>{t&&cancelAnimationFrame(t),t=0,i?.disconnect(),window.removeEventListener("resize",r)}}const Wp="input, textarea, select, button, a, .jsPanel-controlbar",Kp=".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",Es=new WeakMap;function Ec(e){const t=e.status==="maximized";for(const r of e.querySelectorAll(Kp))Es.has(r)||Es.set(r,r.style.cursor||"move"),r.style.cursor=t?"pointer":Es.get(r)??"move"}function Vp(){for(const e of document.querySelectorAll(".jsPanel"))Ec(e)}function Gp(){const e=r=>{let i=null;for(const o of r.composedPath())if(o instanceof HTMLElement){if(o.matches(Wp))return;if(o.classList.contains("jsPanel-titlebar")){i=o;break}}if(!i)return;const n=i.closest(".jsPanel");n&&(n.status==="maximized"||n.status==="minimized"?n.normalize?.():n.maximize?.())},t=r=>{const i=r.detail,n=typeof i=="string"?document.getElementById(i):null;n?Ec(n):Vp()};return document.addEventListener("dblclick",e,!0),document.addEventListener("jspanelstatuschange",t),document.addEventListener("jspanelloaded",t),()=>{document.removeEventListener("dblclick",e,!0),document.removeEventListener("jspanelstatuschange",t),document.removeEventListener("jspanelloaded",t)}}const Yp=200,Xp=100;function Qp(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<Yp||e.h<Xp?null:{...e}}var Jp=Object.defineProperty,Zp=Object.getOwnPropertyDescriptor,Hr=(e,t,r,i)=>{for(var n=i>1?void 0:i?Zp(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Jp(t,r,n),n};let Qn=class extends Ne{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return T`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return T`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};Qn.styles=[Jt,qe`
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
    `];Hr([Mt({type:String})],Qn.prototype,"tableId",2);Hr([q()],Qn.prototype,"query",2);Hr([q()],Qn.prototype,"open",2);Hr([pn("input")],Qn.prototype,"inputEl",2);Qn=Hr([tt("panel-search")],Qn);var em=Object.defineProperty,tm=Object.getOwnPropertyDescriptor,fr=(e,t,r,i)=>{for(var n=i>1?void 0:i?tm(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&em(t,r,n),n};let On=class extends Ne{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const r=t?.currentTarget??void 0,i=await be();try{await Promise.resolve(e.onClick(i.api,{tableId:this.tableId,anchor:r}))}catch(n){console.error(`[table-button:${e.id}]`,n)}}}async connectedCallback(){super.connectedCallback();const e=await be();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(r=>r.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await be();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await be(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const i of t.columns)r[i.field]=nm(i);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}render(){return T`
      <button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
        <span class="mi sm">add</span>
      </button>
      <button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>T`<button
              class=${e.danger?"danger":""}
              title=${e.tooltip??e.label}
              aria-label=${e.label}
              @click=${t=>this.runTableButton(e,t)}
            >
              ${e.icon?e.icon.trimStart().startsWith("<svg")?T`<span class="icon-svg">${ro(e.icon)}</span>`:T`<span class="mi sm">${e.icon}</span>`:T`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};On.styles=[Jt,qe`
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
    `];fr([Mt({type:String})],On.prototype,"tableId",2);fr([Mt({type:Boolean})],On.prototype,"active",2);fr([q()],On.prototype,"rowCount",2);fr([q()],On.prototype,"tableButtons",2);fr([q()],On.prototype,"table",2);On=fr([tt("panel-footer")],On);function nm(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function Ss(e){return e.title?.trim()?e.title.trim():e.name}function rm(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function im(e){const t=document.querySelector("app-shell")?.shadowRoot,r=t?.querySelector("header"),i=t?.querySelector("footer");r&&(e.style.top=`${r.offsetHeight}px`),i&&(e.style.bottom=`${i.offsetHeight}px`)}const wn=new Map,Sc=new Set;let Ya=!1,vo=null;function _c(){return vo}function sm(e){const t=wn.get(e);return t?(t.status==="minimized"&&t.normalize?.(),t.front?.(),!0):(om(e),!0)}async function om(e){const t=await be(),r=await t.store.tables.findOne(e);r?.windowGeometry?.closed&&await t.store.tables.patch(e,{windowGeometry:{...r.windowGeometry,closed:!1},updatedAt:Date.now()})}async function am(e){const t=await be();await mm(e,t)}async function lm(){if(Ya)return;Ya=!0;const e=await be(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");if(t&&r){vo=Up(t,r);const n=()=>im(t);n(),window.addEventListener("resize",n);const o=document.querySelector("app-shell")?.shadowRoot,a=o?.querySelector("header"),c=o?.querySelector("footer");if(typeof ResizeObserver<"u"&&(a||c)){const u=new ResizeObserver(n);a&&u.observe(a),c&&u.observe(c)}qp(r)}Gp();const i=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);i.sort(_s);for(const n of i)n.windowGeometry?.closed||Xa(n,e);e.store.tables.subscribe(n=>{const o=n.filter(u=>u.workspaceId===e.workspaceId),a=new Map(o.map(u=>[u.id,u]));for(const[u,p]of wn){const x=a.get(u);if(!x||x.windowGeometry?.closed){wn.delete(u),Sc.add(u);try{p.status!=="closed"&&p.close()}catch{}}}const c=o.filter(u=>!wn.has(u.id)&&!u.windowGeometry?.closed).sort(_s);for(const u of c)Xa(u,e)}),document.addEventListener("easydb:restack-windows",()=>{let n=0;const o=async()=>{const a=(await e.store.tables.find()).filter(c=>c.workspaceId===e.workspaceId&&!c.windowGeometry?.minimized).sort(_s);if(n<12&&!a.every(c=>wn.has(c.id))){n++,setTimeout(()=>void o(),80);return}for(const c of a)try{wn.get(c.id)?.front?.()}catch{}};o()})}function _s(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const cm=720,dm=360;function Xa(e,t){const r=`panel-${Tc(e.id)}`,i=rm(),n=Qp(e.windowGeometry),o=n?.minimized===!0,a=()=>{const S=document.createElement("data-table");return S.tableId=e.id,S.style.height="100%",S},c=o?document.createElement("div"):a();let u=o?null:c,p=Ss(e),x=-1,b=-1;const k=()=>{typeof G.setHeaderTitle=="function"&&G.setHeaderTitle(p+Wl(x,b))},M=S=>{const y=S.detail;y.key===e.id&&(x=y.count,b=y.total,k())};document.addEventListener(Si,M);const F=()=>{V.active=!1,u?.remove(),u=null},R=()=>{if(u)return;const S=document.getElementById(r)?.querySelector(".jsPanel-content");if(!S)return;S.replaceChildren();const y=a();S.appendChild(y),u=y,V.active=!0},H=document.createElement("panel-search");H.tableId=e.id;const V=document.createElement("panel-footer");V.tableId=e.id,V.active=!o;const ue=Cc(r,()=>vo),se=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:hm(),oe=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:`${cm} ${dm}`},G=L.create({id:r,container:i,headerTitle:p,footerToolbar:V,theme:"primary",content:c,...oe,position:se,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>Ts(e.id,t)},resizeit:{containment:!1,stop:()=>Ts(e.id,t)},onfronted:()=>pm(e.id,t),onclosed:async()=>{if(wn.delete(e.id),Sc.delete(e.id))return;const S=await t.store.tables.findOne(e.id);if(!S)return;const y=S.windowGeometry??{x:60,y:60,w:720,h:360,z:1,minimized:!1,maximized:!1};await t.store.tables.patch(e.id,{windowGeometry:{...y,closed:!0},updatedAt:Date.now()})},onstatuschange:S=>{S.status==="minimized"?F():(S.status==="normalized"||S.status==="maximized")&&R(),S.status==="maximized"?ue.enter():ue.exit(),Ts(e.id,t)}});wn.set(e.id,G);const J=document.getElementById(r),he=J?.querySelector(".jsPanel-controlbar");he&&he.prepend(H);const $e=J?.querySelector(".jsPanel-titlebar");$e&&($e.tabIndex=-1,$e.style.outline="none",$e.addEventListener("pointerdown",()=>$e.focus()));let Te=null;const Ie=document.createElement("button");Ie.type="button",Ie.title="Table info",Ie.setAttribute("aria-label","Table info"),Ie.className="eda-info-btn",Ie.textContent="ⓘ",Ie.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",Ie.addEventListener("click",S=>{S.stopPropagation(),Te&&jp(p,Te.info??{},{source:Te.source,origin:Te.origin})}),he?.prepend(Ie);const g=S=>{Te=S??null;const y=!!(S?.info||S?.source||S?.origin);Ie.style.display=y?"inline-flex":"none"};g(e),n?.maximized&&typeof G.maximize=="function"?queueMicrotask(()=>G.maximize?.()):n?.minimized&&typeof G.minimize=="function"&&queueMicrotask(()=>G.minimize?.()),t.store.tables.subscribe(S=>{const y=S.find($=>$.id===e.id);y&&(g(y),Ss(y)!==p&&(p=Ss(y),k()))});const v=G.close.bind(G);G.close=()=>(document.removeEventListener(Si,M),v())}let um=0;function hm(){const e=um++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function Ts(e,t){const r=document.getElementById(`panel-${Tc(e)}`);if(!r)return;const i=wn.get(e)?.status??"normalized";try{const o=(await t.store.tables.findOne(e))?.windowGeometry,a=i==="minimized",c=i==="maximized";let u=r.offsetLeft,p=r.offsetTop,x=r.offsetWidth,b=r.offsetHeight;(a||c)&&o&&(u=o.x,p=o.y,x=o.w,b=o.h),u<=-9e3&&(u=o?.x??40);const k={x:u,y:p,w:x,h:b,z:o?.z??0,minimized:a,maximized:c};await t.store.tables.patch(e,{windowGeometry:k,updatedAt:Date.now()})}catch{}}let As=0;function fm(){return As=Math.max(Date.now(),As+1),As}async function pm(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const i=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...i,z:fm()},updatedAt:Date.now()})}catch{}}async function mm(e,t){if(!(await t.store.tables.findOne(e))?.source){const i=t.store.rows(e),n=await i.find();await i.bulkRemove(n.map(o=>o.id))}await t.store.tables.remove(e)}function Tc(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}const gm={id:"delete-table",name:"Delete Table",type:"ui",version:"0.1.0",description:"Adds a trash button to each table window that permanently deletes the table and its rows (with confirmation).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/delete-table.ts"};function bm(e){e.ui.registerTableButton({id:"delete-table:delete",label:"Delete",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="#7f1d1d" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',tooltip:"Delete this table permanently",onClick:async(t,r)=>{const i=await t.store.tables.findOne(r.tableId);!i||!await t.ui.dialogs.confirm(i.source?`Delete the live table "${i.name}"? Its data stays on the server — only the local connection is removed.`:`Permanently delete table "${i.name}" and all its rows? This can't be undone.`,"Delete table")||(await am(r.tableId),t.ui.dialogs.toast(`Deleted "${i.name}".`,{kind:"success",title:"Delete table"}))}})}const ym=Object.freeze(Object.defineProperty({__proto__:null,init:bm,meta:gm},Symbol.toStringTag,{value:"Module"}));var wm=Object.defineProperty,vm=Object.getOwnPropertyDescriptor,Hi=(e,t,r,i)=>{for(var n=i>1?void 0:i?vm(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&wm(t,r,n),n};let mi=null;function xm(){return mi||(mi=document.createElement("top-progress"),document.body.appendChild(mi)),mi}let jn=class extends Ne{constructor(){super(...arguments),this.visible=!1,this.frac=null,this.label="",this.active=new Set}static begin(e=""){return xm().begin(e)}begin(e){const t=Symbol("progress");return this.active.add(t),this.label=e,this.frac=null,this.visible=!0,{fraction:r=>{this.active.has(t)&&(this.frac=r)},done:()=>{this.active.delete(t),this.active.size===0&&(this.visible=!1,this.frac=null,this.label="")}}}render(){if(!this.visible)return T``;const e=this.frac!=null;return T`<div
      class="track"
      role="progressbar"
      aria-label=${this.label||"Loading"}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${e?Math.round(this.frac*100):""}
    >
      ${e?T`<div
            class="bar determinate"
            style="width:${Math.round(this.frac*100)}%"
          ></div>`:T`<div class="bar indet"></div>`}
    </div>`}};jn.styles=qe`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      z-index: 10000;
      pointer-events: none;
    }
    .track {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }
    .bar {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      background: #2563eb;
    }
    .bar.determinate {
      transition: width 0.15s ease;
    }
    .bar.indet {
      width: 35%;
      animation: eda-top-progress 1.1s ease-in-out infinite;
    }
    @keyframes eda-top-progress {
      0% {
        left: -35%;
      }
      100% {
        left: 100%;
      }
    }
  `;Hi([q()],jn.prototype,"visible",2);Hi([q()],jn.prototype,"frac",2);Hi([q()],jn.prototype,"label",2);jn=Hi([tt("top-progress")],jn);const Ac=Object.freeze(Object.defineProperty({__proto__:null,get TopProgress(){return jn}},Symbol.toStringTag,{value:"Module"}));var $m=Object.defineProperty,km=Object.getOwnPropertyDescriptor,Pc=(e,t,r,i)=>{for(var n=i>1?void 0:i?km(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&$m(t,r,n),n};function Qa(e){return(xn.instance??Cm()).open(e)}function Cm(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let xn=class extends Ne{constructor(){super(...arguments),this.rows=[],this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((r,i)=>{const n=this.rows[i],o=n.field.trim(),a=n.label.trim()||o;return{...r,field:o,label:a,hidden:n.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),xn.instance=this}disconnectedCallback(){super.disconnectedCallback(),xn.instance===this&&(xn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}open(e){return this.source=e,this.rows=e.map(t=>({field:t.field,label:t.label,hidden:!!t.hidden})),new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((r,i)=>{const n=r.field.trim().toLowerCase();if(n===""){e.add(i);return}(t.get(n)??t.set(n,[]).get(n)).push(i)});for(const r of t.values())if(r.length>1)for(const i of r)e.add(i);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,r){this.rows=this.rows.map((i,n)=>n===e?{...i,[t]:r}:i)}setHidden(e,t){this.rows=this.rows.map((r,i)=>i===e?{...r,hidden:t}:r)}render(){const e=this.invalidIndices(),t=e.size;return T`
      <dialog @cancel=${this.onCancel} @keydown=${Xt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish(null)}>
          ×
        </button>
        <form @submit=${this.submit}>
          <div class="dialog-header">
            <h2>Edit columns</h2>
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
                @keydown=${r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),this.toggleAllHidden())}}
              >
                Hide
              </div>
              ${this.rows.map((r,i)=>T`
                  <input
                    class=${e.has(i)?"invalid":""}
                    .value=${r.field}
                    aria-label=${`Column ${i+1} name`}
                    @input=${n=>this.updateRow(i,"field",n.target.value)}
                  />
                  <input
                    .value=${r.label}
                    aria-label=${`Column ${i+1} label`}
                    @input=${n=>this.updateRow(i,"label",n.target.value)}
                  />
                  <div class="hidecell">
                    <input
                      type="checkbox"
                      .checked=${r.hidden}
                      aria-label=${`Hide column ${i+1}`}
                      @change=${n=>this.setHidden(i,n.target.checked)}
                    />
                  </div>
                `)}
            </div>
            <p class="err">
              ${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:me}
            </p>
          </div>
        </form>
      </dialog>
    `}};xn.instance=null;xn.styles=[Yt,qe`
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
    `];Pc([q()],xn.prototype,"rows",2);xn=Pc([tt("column-names-dialog")],xn);const Ja=50*1024*1024;function Za(e){try{return new URL(e).host}catch{return e}}async function Em(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}async function Sm(e,t,r={}){const i=mo(t),n=r.slowMs??2e3;let o=setTimeout(()=>{o=void 0,r.onSlow?.()},n);const a=()=>{o!==void 0&&(clearTimeout(o),o=void 0)},c=async u=>{let p;try{p=await e.backend.fetch(u)}catch(b){throw new Error(`Could not reach ${Za(u)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${b.message}]`)}if(!p.ok){const b=await Em(p);throw new Error(`HTTP ${p.status} ${p.statusText||""}`.trim()+(b?` — ${b}`:""))}const x=Number(p.headers.get("content-length"));if(Number.isFinite(x)&&x>Ja)throw p.body?.cancel().catch(()=>{}),new Error(`Response is ${(x/(1024*1024)).toFixed(1)} MB, over the ${Ja/(1024*1024)} MB browser import limit. Import a smaller extract, or use a server/Datasette connection for large datasets.`);try{return await ic(p,r.onProgress)}catch(b){throw new Error(`Failed reading the response body from ${Za(u)}: ${b.message}`)}};try{const u=await c(i);if(nc(u)){const p=rc(i);if(p)return await c(p)}return u}finally{a()}}var _m=Object.defineProperty,Tm=Object.getOwnPropertyDescriptor,Zt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Tm(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&_m(t,r,n),n};const Am="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",Pm="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",Im='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',el=[{label:"Northwind — sample database (JSON dump)",url:Am,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:Pm,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],Rm={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function Dm(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:Im,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>jm(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:r})=>Om(t,r)})}async function Pi(e,t,r){const i={handle:null};try{return await Sm(e,t,{onSlow:()=>{i.handle=jn.begin(r)},onProgress:n=>i.handle?.fraction(n)})}finally{i.handle?.done()}}async function Om(e,t){const r=await e.store.tables.findOne(t),i=r?.origin;if(i?.url)try{const n=await Pi(e,i.url,`Reading ${r?.name??"data"}…`);let o;if(i.type==="csv")o=Jn(n).rows;else{const u=Lr(JSON.parse(n),r.name),p=u.find(x=>x.name===r.name)??(u.length===1?u[0]:void 0);if(!p)throw new Error(`"${r.name}" is no longer in the dump at ${i.url}`);o=p.rows}const a=e.store.rows(t),c=await a.find();await a.bulkRemove(c.map(u=>u.id)),await a.bulkInsert(o.map(u=>({id:Ic(),tableId:t,data:u,updatedAt:Date.now()}))),e.ui.dialogs.toast(`Refreshed "${r.name}" (${o.length} rows).`,{kind:"success",title:"Refresh"})}catch(n){e.ui.dialogs.toast(`Couldn't refresh "${r?.name??t}": ${n.message}`,{kind:"error",title:"Refresh"})}}function Ic(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function jm(e){const r=await(dt.instance??Bm()).open({async listDatabases(b){const k=fn(b);return ao(M=>e.backend.fetch(M),k.base)}});if(!r)return;const{url:i,file:n,kind:o,dbChosen:a,editColumns:c,maxRows:u,mode:p}=r,x=n?.name??i;try{if(p==="reference"&&!n){o==="datasette"?await Mm(e,i):await Rc(e,i,o);return}if(n){if(o==="csv"){const b=u!=null?await Pl(n,u):await n.text();await ki(e,b,n.name,{editColumns:c?Qa:void 0,maxRows:u})}else{const b=await n.text();await Ci(e,b,n.name,{maxRows:u})}e.ui.dialogs.toast(`Imported ${n.name}.`,{kind:"success",title:"Import"});return}if(o==="datasette")await po(e,i,{skipTablePicker:a});else if(o==="csv"){const b=await Pi(e,i,`Reading ${Kn(i)}…`);await ki(e,b,Kn(i),{editColumns:c?Qa:void 0,maxRows:u,origin:{type:"csv",url:i}}),e.ui.dialogs.toast(`Imported ${Kn(i)}.`,{kind:"success",title:"Import"})}else{const b=await Pi(e,i,`Reading ${Kn(i)}…`);await Ci(e,b,Kn(i),{originUrl:i,maxRows:u}),e.ui.dialogs.toast(`Imported ${Kn(i)}.`,{kind:"success",title:"Import"})}}catch(b){e.ui.dialogs.toast(`Could not import ${x}: ${b.message}`,{kind:"error",title:"Import"})}}function zm(e){const t=JSON.parse(e),r=i=>Array.isArray(i)&&i.every(n=>n!=null&&typeof n=="object"&&!Array.isArray(n));if(r(t))return t;if(t&&typeof t=="object"){const i=t;for(const n of["rows","records","data"])if(r(i[n]))return i[n];for(const n of Object.values(i))if(r(n))return n}return[]}function Lm(e){const t=zm(e).slice(0,50),r=n=>typeof n=="number"?"number":typeof n=="boolean"?"boolean":"string",i=new Map;for(const n of t)for(const[o,a]of Object.entries(n))!i.has(o)&&a!=null?i.set(o,r(a)):i.has(o)||i.set(o,"string");return[...i.entries()].map(([n,o])=>({field:n,label:n,type:o}))}function Fm(e,t,r){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(r)}.json?_size=max`}async function Mm(e,t){const r=fn(t),i=c=>e.backend.fetch(c),n=[];if(r.db&&r.table)n.push({db:r.db,table:r.table});else if(r.db)for(const c of await _i(i,r.base,r.db))c.hidden||n.push({db:c.db,table:c.table});else for(const c of await ao(i,r.base))for(const u of await _i(i,r.base,c))u.hidden||n.push({db:u.db,table:u.table});if(n.length===0)throw new Error("No tables found to reference at that URL.");let o=0;const a=[];for(const c of n)try{await Rc(e,Fm(r.base,c.db,c.table),"json",{nameHint:`${c.db}/${c.table}`,silent:!0}),o++}catch(u){a.push(`${c.table}: ${u.message}`)}e.ui.dialogs.toast(`Referenced ${o} table${o===1?"":"s"}${a.length?` — ${a.length} failed`:""}.`,{kind:a.length?"warning":"success",title:"Reference"})}async function Rc(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("No active workspace.");const o=i.nameHint??Kn(t),a=await Pi(e,t,`Reading ${o}…`),c=r==="csv"?Jn(a).columns:Lm(a);if(c.length===0)throw new Error("No columns found in the referenced data.");const u=new Set((await e.store.tables.find()).filter(b=>b.workspaceId===n).map(b=>b.name.toLowerCase()));let p=o;for(let b=2;u.has(p.toLowerCase());b++)p=`${o}-${b}`;const x={id:Ic(),workspaceId:n,name:p,code:go(p),columns:c,view:"table",source:{type:"url",config:{url:t,format:r}},updatedAt:Date.now()};await e.store.tables.insert(x),i.silent||e.ui.dialogs.toast(`Referenced ${p} — live, read-only.`,{kind:"success",title:"Reference"})}function Bm(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function Nm(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),i=[...t.searchParams.keys()].some(o=>o.startsWith("_")),n=r.includes("datasette")||i;return!i&&/\.(csv|tsv|tab)$/i.test(t.pathname)?"csv":!i&&/\.json$/i.test(t.pathname)?"json":n?"datasette":"json"}catch{return"json"}}function tl(e,t){if(t!=="datasette"||!e)return!1;try{const r=fn(e);return!r.db&&!r.table}catch{return!1}}function Kn(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}function Um(e){return/\.(csv|tsv|tab)$/i.test(e)?"csv":"json"}let dt=class extends Ne{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const r=this.resolvedKind,i=this.maxRows,n=r==="csv"&&this.editColumns,o=this.file?"copy":this.mode;if(this.file){this.finish({url:"",file:this.file,kind:r,editColumns:n,maxRows:i,mode:o});return}const a=r==="datasette"&&!!this.selectedDb&&tl(t,r),c=a?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:c,kind:r,dbChosen:a,editColumns:n,maxRows:i,mode:o})}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?Um(this.file.name):Nm(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),dt.instance=this}disconnectedCallback(){super.disconnectedCallback(),dt.instance===this&&(dt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=el[t];r&&(this.url=r.url,this.kind=r.kind)}onFileChange(e){const r=e.target.files?.[0]??null;this.file=r,r&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!tl(this.url.trim(),this.resolvedKind)?me:T`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?T`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>T`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:T`<option value="">— not loaded —</option>`}
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
      ${this.dbError?T`<p class="hint error">${this.dbError}</p>`:me}
    `}render(){return T`
      <dialog @cancel=${this.onCancel} @keydown=${Xt}>
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
              Sample source
              <select
                .value=${String(this.presetIdx)}
                @change=${e=>this.onPresetChange(e)}
              >
                <option value="-1" ?selected=${this.presetIdx===-1}>— choose a sample —</option>
                ${el.map((e,t)=>T`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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
                accept=".csv,.tsv,.tab,.json,.txt,text/csv,text/tab-separated-values,application/json"
                @change=${e=>this.onFileChange(e)}
              />
            </label>
            ${this.file?T`<p class="hint">
                  Importing <strong>${this.file.name}</strong> as
                  ${this.resolvedKind.toUpperCase()}.
                </p>`:me}

            <label>
              Import as
              <select
                .value=${this.kind}
                @change=${e=>{this.kind=e.target.value,this.resetDbList()}}
              >
                <option value="auto" ?selected=${this.kind==="auto"}>Auto-detect</option>
                <option value="json" ?selected=${this.kind==="json"}>JSON dump</option>
                <option value="csv" ?selected=${this.kind==="csv"}>CSV / TSV file</option>
                <option value="datasette" ?selected=${this.kind==="datasette"}>
                  Datasette (table or instance)
                </option>
              </select>
            </label>

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
            ${this.file?T`<p class="hint">Uploaded files can only be imported as a Copy.</p>`:me}
            ${this.renderDbPicker()}
            ${this.resolvedKind==="csv"?T`<label class="check">
                  <input
                    type="checkbox"
                    .checked=${this.editColumns}
                    @change=${e=>this.editColumns=e.target.checked}
                  />
                  Edit columns before import (rename / hide / fix duplicate names)
                </label>`:me}

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
            ${this.resolvedKind==="datasette"&&this.maxRows!=null?T`<p class="hint">
                  Row limit applies to CSV/JSON imports; Datasette snapshots use their own
                  10,000-row cap.
                </p>`:me}

            <p class="hint">
              Paste any URL or pick a sample above — a JSON dump, a <code>.csv</code> or
              <code>.tsv</code> file, or a Datasette table/database/instance. For a Datasette
              instance root, click <em>List databases</em> to pick one first. Multi-table sources
              let you choose which tables to import; Datasette tables import a read-only snapshot
              (capped at 10,000 rows each).
            </p>
          </div>
        </form>
      </dialog>
      ${me}
    `}};dt.instance=null;dt.styles=[Yt,qe`
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
    `];Zt([q()],dt.prototype,"url",2);Zt([q()],dt.prototype,"kind",2);Zt([q()],dt.prototype,"presetIdx",2);Zt([q()],dt.prototype,"dbList",2);Zt([q()],dt.prototype,"dbLoading",2);Zt([q()],dt.prototype,"dbError",2);Zt([q()],dt.prototype,"selectedDb",2);Zt([q()],dt.prototype,"editColumns",2);Zt([q()],dt.prototype,"file",2);Zt([q()],dt.prototype,"maxRowsInput",2);Zt([q()],dt.prototype,"mode",2);dt=Zt([tt("import-dialog")],dt);const Hm=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return dt},init:Dm,meta:Rm},Symbol.toStringTag,{value:"Module"})),qm={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},Wm=6e4;let nl=null,qs=!1;const Ps=new Map;function Km(e){nl===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(nl=setInterval(()=>{Dc(e)},Wm)))}async function Dc(e){if(qs)return;const t=e.workspaceId();if(!t)return;const r=await uc(e);if(r)try{await Vm(e,r,t)}catch(i){console.warn("[auto-sync]",i)}}async function Vm(e,t,r){const i=await Ni(e),n=await hc(e,r),o=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(o.status===404){await rl(e,t,r,i,null);return}if(!o.ok)return;const a=Bi(o.headers.get("ETag")),c=await o.text();if(za(i)===za(c)){a&&a!==n&&await Xn(e,r,a);return}if(a&&a===n){await rl(e,t,r,i,n);return}if(!(a&&Ps.get(r)===a)){qs=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const p=JSON.parse(c),x=await fc(e,r,p);a&&await Xn(e,r,a),Ps.delete(r),e.ui.dialogs.toast(`Pulled ${x} table${x===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else a&&Ps.set(r,a)}finally{qs=!1}}}async function rl(e,t,r,i,n){const o={"Content-Type":"application/json"};n&&(o["If-Match"]=`"${n}"`);const a=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:o,body:i});if(a.ok){const c=Bi(a.headers.get("ETag"));c&&await Xn(e,r,c);return}if(a.status===412){const c=await a.json().catch(()=>({}));c.currentEtag&&await Xn(e,r,c.currentEtag)}}const Oc=Object.freeze(Object.defineProperty({__proto__:null,load:Km,meta:qm,tick:Dc},Symbol.toStringTag,{value:"Module"}));var Gm=Object.defineProperty,Ym=Object.getOwnPropertyDescriptor,pr=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ym(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Gm(t,r,n),n};function Ws(e,t){(Lt.instance??Xm()).open(e,t)}function Xm(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function il(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let Lt=class extends Ne{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),Lt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Lt.instance===this&&(Lt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const r=this.templates.find(i=>i.id===t.editTemplateId);r&&this.editTemplate(r)}else if(t?.editInstanceId){const r=this.instances.find(i=>i.id===t.editInstanceId);r&&await this.editInstance(r)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await be(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(r=>r.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((r,i)=>r.name.localeCompare(i.name))}async openInstance(e){await(await be()).store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()}),this.close()}async editInstance(e){const r=await(await be()).store.viewTemplates.findOne(e.templateId),i=r?Fa(r.headerHtml,r.rowHtml,r.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:r?.name??"template",name:e.name,tokens:i,mapping:{...e.mapping},limit:e.limit??0,readonly:e.readonly??!1},this.mode="instance"}async deleteInstance(e){await(await be()).store.viewInstances.remove(e),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async deleteTemplate(e){const t=await be();await t.api.ui.dialogs.confirm(`Delete the template "${e.name}"? Views already created from it keep working.`,"Delete template")&&(await t.store.viewTemplates.remove(e.id),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh())}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await be();if(e.id){const r=this.templates.find(i=>i.id===e.id)?.builtin;await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,...r?{builtin:!1}:{},updatedAt:Date.now()})}else await t.store.viewTemplates.insert({id:il(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()});document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=Fa(e.headerHtml,e.rowHtml,e.footerHtml),r={};for(const i of t)r[i]=this.autoMap(i);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:r,limit:0,readonly:!1},this.mode="instance"}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),r=this.columns.find(c=>c.field.toLowerCase()===t||(c.label??"").toLowerCase()===t);if(r)return r.field;const i=this.table?.labelColumn;if(i&&(t==="title"||t==="name"||t==="label"))return i;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(c=>c.type==="date"||c.type==="datetime");const o=["url","link","href","website","homepage","uri","site","web"];if(o.includes(t)){const c=this.firstColumn(u=>u.renderer==="link");return c||this.firstColumn(u=>{const p=u.field.toLowerCase(),x=(u.label??"").toLowerCase();return o.some(b=>p.includes(b)||x.includes(b))})}const a=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(a.includes(t)){const c=this.firstColumn(b=>{if(b.type!=="string")return!1;const k=b.field.toLowerCase(),M=(b.label??"").toLowerCase();return a.some(F=>k.includes(F)||M.includes(F))});if(c)return c;const u=this.columns.filter(b=>b.type==="string"),p=u[0];if(!p)return"";let x=p;for(const b of u)(b.max??0)>(x.max??0)&&(x=b);return x.field}return""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await be();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},limit:e.limit>0?e.limit:void 0,readonly:e.readonly,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const r=this.columns.filter(n=>!n.hidden).map(n=>n.field),i={id:il(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:r,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{},...e.readonly?{readonly:!0}:{}};await t.store.viewInstances.insert(i),await this.openInstance(i.id)}renderList(){return T`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>T`<li>
                <span class="name">${e.name}</span>
                <button type="button" class="mini" @click=${()=>this.openInstance(e.id)}>
                  Open
                </button>
                <button type="button" class="mini" @click=${()=>void this.editInstance(e)}>
                  Edit
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
          ${this.templates.map(e=>T`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?T`<span class="badge">built-in</span>`:me}
                <button type="button" class="mini" @click=${()=>this.useTemplate(e)}>Use</button>
                <button type="button" class="mini" @click=${()=>this.editTemplate(e)}>Edit</button>
                <button type="button" class="mini" @click=${()=>this.copyTemplate(e)}>Copy</button>
                <button
                  type="button"
                  class="mini danger"
                  title="Delete this template"
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
    `}renderTemplate(){const e=this.tDraft,t=r=>i=>{this.tDraft={...e,[r]:i.target.value}};return T`
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
    `}renderInstance(){const e=this.iDraft;return T`
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
        ${e.tokens.length===0?T`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>T`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${r=>this.iDraft={...e,mapping:{...e.mapping,[t]:r.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(r=>T`<option value=${r.field} ?selected=${e.mapping[t]===r.field}>
                          ${r.label||r.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">
        ${e.id?T`Editing name and column mapping. The snapshotted sort, filters and visible columns
            are kept.`:T`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?T`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="submit" class="primary">Save</button>`:this.mode==="instance"?T`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="submit" class="primary">
                ${this.iDraft?.id?"Save":"Create view"}
              </button>`:T`<button type="submit" class="ghost">Close</button>`;return T`
      <dialog @cancel=${this.close} @keydown=${Xt}>
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
    `}};Lt.instance=null;Lt.styles=[Yt,qe`
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
    `];pr([q()],Lt.prototype,"mode",2);pr([q()],Lt.prototype,"instances",2);pr([q()],Lt.prototype,"templates",2);pr([q()],Lt.prototype,"tDraft",2);pr([q()],Lt.prototype,"iDraft",2);Lt=pr([tt("views-dialog")],Lt);const Qm={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},Jm="grid_view",sl="RSS Feed",Ks='<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',Vs=['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>',"</div>"].join(""),Gs="</div>";function Zm(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:Jm,tooltip:"Views — display this table through a template",onClick:(t,{tableId:r})=>Ws(r)})}async function eg(e){await ng(e)}function tg(){let e=5381;const t=`${Ks}\0${Vs}\0${Gs}`;for(let r=0;r<t.length;r++)e=(e<<5)+e+t.charCodeAt(r)|0;return(e>>>0).toString(36)}async function ng(e){const t=e.workspaceId();if(!t)return;const r=`views:seeded:rss:${t}`,i=`views:sig:rss:${t}`,n=tg(),o=(await e.store.viewTemplates.find({workspaceId:t})).find(c=>c.builtin&&c.name===sl);if(o){(await e.store.settings.findOne(i))?.value!==n&&(await e.store.viewTemplates.patch(o.id,{headerHtml:Ks,rowHtml:Vs,footerHtml:Gs,updatedAt:Date.now()}),await e.store.settings.upsert({key:i,value:n})),await e.store.settings.upsert({key:r,value:!0});return}(await e.store.settings.findOne(r))?.value||(await e.store.viewTemplates.insert({id:rg(),workspaceId:t,name:sl,headerHtml:Ks,rowHtml:Vs,footerHtml:Gs,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({key:r,value:!0}),await e.store.settings.upsert({key:i,value:n}))}function rg(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const ig=Object.freeze(Object.defineProperty({__proto__:null,init:Zm,load:eg,meta:Qm},Symbol.toStringTag,{value:"Module"})),sg={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function og(e){e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,r)=>{const n=Array.from(t.dataTransfer?.files??[]).find(c=>c.name.toLowerCase()==="secrets.txt");if(!n)return!1;const o=await n.text(),a=Object.keys(zi(o)).length;return ji().trim().length>0&&!await r.ui.dialogs.confirm(`Replace your current secrets with ${a} secret${a===1?"":"s"} from "${n.name}"?`,"Import secrets")||(Sl(o),r.ui.dialogs.toast(`Imported ${a} secret${a===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const ag=Object.freeze(Object.defineProperty({__proto__:null,init:og,meta:sg},Symbol.toStringTag,{value:"Module"})),lg=[ag,Qf,Ru,th,lf,ff,Lu,Pf,wf,Hf,Gf,sp,cp,fp,xp,Ep,Rp,ym,Hm,Oc,ig];function cg(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const jc=lg.map(e=>{const t=cg(e);return{id:t.id,meta:t,module:e}}),dg=jc;function Ys(e){return`builtin:${e}`}async function ug(e){const t=[];for(const r of jc)if(!await hg(e,r)){t.push(r);try{await r.module.init?.(e)}catch(i){e.events.emit("plugin:error",{url:r.id,phase:"init",error:i})}}return async()=>{for(const r of t)try{await r.module.load?.(e)}catch(i){e.events.emit("plugin:error",{url:r.id,phase:"load",error:i})}}}async function hg(e,t){return t.meta.fixed?!1:Ut==="all-optional"?!0:(await e.store.plugins.findOne(Ys(t.id)))?.enabled===!1}function mr(){const e=L.getPanels;return typeof e!="function"?[]:Array.from(e.call(L)??[])}function fg(){for(const e of mr())e.close?.()}function pg(){for(const e of mr())e.minimize?.()}function mg(){for(const e of mr())e.normalize?.()}function gg(){for(const e of mr())e.maximize?.()}function zc(){const e=document.getElementById("easydb-panels"),t=e?.clientWidth??window.innerWidth,r=e?.clientHeight??window.innerHeight,i=_c()?.snapshot(),n=i?.scale&&i.scale>0?i.scale:1,o=i?.x??0,a=i?.y??0;return{x:-o/n,y:-a/n,w:t/n,h:r/n}}function Lc(e,t,r,i,n){e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(r)}px`,e.style.width=`${Math.round(i)}px`,e.style.height=`${Math.round(n)}px`}function bg(){const e=mr().reverse();if(e.length===0)return;const t=zc(),r=32,i=Math.min(680,Math.max(320,t.w*.6)),n=Math.min(480,Math.max(240,t.h*.6));e.forEach((o,a)=>{o.normalize?.(),Lc(o,t.x+24+a*r,t.y+24+a*r,i,n)})}function yg(){const e=mr().reverse(),t=e.length;if(t===0)return;const r=zc(),i=Math.ceil(Math.sqrt(t)),n=Math.ceil(t/i),o=8,a=(r.w-o*(i+1))/i,c=(r.h-o*(n+1))/n;e.forEach((u,p)=>{u.normalize?.();const x=p%i,b=Math.floor(p/i);Lc(u,r.x+o+x*(a+o),r.y+o+b*(c+o),a,c)})}function wg(e){const t=[{id:"windows:minimize-all",title:"Minimize all windows",icon:"remove",run:pg},{id:"windows:restore-all",title:"Restore all windows",icon:"crop_square",run:mg},{id:"windows:maximize-all",title:"Maximize all windows",icon:"fullscreen",run:gg},{id:"windows:cascade",title:"Cascade windows",icon:"view_agenda",run:bg},{id:"windows:tile",title:"Tile windows",icon:"grid_view",run:yg},{id:"windows:close-all",title:"Close all windows",icon:"close",run:fg}];for(const n of t)e.ui.registerCommand({id:n.id,title:n.title,group:"Windows",icon:n.icon,run:n.run});const r="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md",i="https://github.com/cawoodm/easydbaccess/tree/main/docs";e.ui.registerCommand({id:"app:search",title:"Search all tables",group:"App",icon:"search",keywords:["find","global search","filter"],run:()=>{document.dispatchEvent(new CustomEvent("easydb:focus-search"))}}),e.ui.registerCommand({id:"app:plugins",title:"Plugins",group:"App",icon:"extension",keywords:["plugin manager","install","extensions"],run:n=>n.ui.openPluginManager()}),e.ui.registerCommand({id:"app:changelog",title:"Changelog",group:"App",icon:"history",keywords:["releases","version","whats new"],run:()=>{window.open(r,"_blank","noopener")}}),e.ui.registerCommand({id:"app:docs",title:"Documentation",group:"App",icon:"menu_book",keywords:["docs","help","guide","manual"],run:()=>{window.open(i,"_blank","noopener")}})}async function vg(e){if(Ut==="url-plugins"||Ut==="all-optional")return async()=>{};const t=e.workspaceId();if(!t)return async()=>{};const i=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const o of i)try{const a=await e.store.plugins.findOne(o);if(a&&a.enabled===!1)continue;let c=a?.cachedBody??"";if(c)xg(e,o,c);else{try{c=await Fc(o)}catch(x){await e.store.plugins.upsert({url:o,enabled:a?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${x.message}`}),e.events.emit("plugin:error",{url:o,phase:"fetch",error:x});continue}await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),cachedBody:c})}const u=new Blob([c],{type:"text/javascript"}),p=URL.createObjectURL(u);try{const x=await import(p);await x.init?.(e),n.push({url:o,mod:x})}finally{setTimeout(()=>URL.revokeObjectURL(p),5e3)}}catch(a){await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),lastError:`init: ${a.message}`}),e.events.emit("plugin:error",{url:o,phase:"init",error:a})}return async()=>{for(const{url:o,mod:a}of n)try{await a.load?.(e)}catch(c){await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),lastError:`load: ${c.message}`}),e.events.emit("plugin:error",{url:o,phase:"load",error:c})}}}async function Fc(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function xg(e,t,r){return(async()=>{try{const i=await Fc(t);if(i===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:i})}catch{}})()}let Is=null;function be(){return Is||(Is=$g()),Is}async function $g(){const e=await Gd(),t=Qd(e),r=Zd(),i=ou(),n=new Map;t.tables.subscribe(R=>{n.clear();for(const H of R)n.set(H.id,H)});const o={...t.tables,insert:R=>(n.set(R.id,R),t.tables.insert(R)),upsert:R=>(n.set(R.id,R),t.tables.upsert(R))};let a=null;const c={get backend(){if(!a)throw new Error("[host] row-source ctx used before app init completed");return a.backend},events:r,settings:t.settings,workspaceId:()=>b},u=Jd({base:{...t,tables:o},providers:i.rowSources,tableById:R=>n.get(R),ctx:c}),p=kg(),x=await u.workspaces.find();let b;if(p){const R=Sg(p),H=x.find(V=>V.id===R||V.name===p);H?b=H.id:b=(await u.workspaces.insert({id:R,name:p,createdAt:Date.now(),pluginUrls:[]})).id}else{const R=Cg(),H=R?x.find(V=>V.id===R):void 0;H?b=H.id:x.length>0?b=x[0].id:b=(await u.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}Eg(b);const k=uu({store:u,events:r,registries:i,workspaceId:()=>b});a=k,wg(k),r.on("import:after",({source:R,tableId:H,rowCount:V})=>{R!=="datasette"&&k.store.tables.findOne(H).then(ue=>{k.ui.dialogs.toast(`Imported ${V} row${V===1?"":"s"} into "${ue?.name??H}".`,{kind:"success",title:R.toUpperCase()+" import"})})}),r.on("plugin:error",({url:R,phase:H,error:V})=>{k.ui.dialogs.toast(`[${H}] ${V?.message??String(V)}`,{kind:"error",title:`Plugin: ${R}`})});const M=await ug(k),F=await vg(k);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:b}),await M(),await F(),Ut==="all-optional"?k.ui.dialogs.toast("Safe mode is ON: only fixed built-ins (Settings, core rendering) loaded. All other built-in plugins and URL-installed plugins are disabled for this session only — nothing was changed. Disable the culprit below, then reload without ?safemode.",{kind:"warning",title:"Safe mode"}):Ut==="url-plugins"&&k.ui.dialogs.toast("Safe mode (URL plugins) is ON: URL-installed plugins were not loaded this session. Built-in plugins are unaffected. Reload without ?safemode1 to restore them.",{kind:"warning",title:"Safe mode"}),Ut!=="off"&&k.ui.openPluginManager()}),{store:u,events:r,workspaceId:b,registries:i,api:k}}function kg(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const Mc="eda:lastWorkspaceId";function Cg(){try{return globalThis.localStorage?.getItem(Mc)??null}catch{return null}}function Eg(e){try{globalThis.localStorage?.setItem(Mc,e)}catch{}}function Sg(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var _g=Object.defineProperty,Tg=Object.getOwnPropertyDescriptor,qi=(e,t,r,i)=>{for(var n=i>1?void 0:i?Tg(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&_g(t,r,n),n};let dr=class extends Ne{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=Jn(this.text)}catch(a){this.errorMsg=`Couldn't parse the CSV: ${a.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const i=await be(),n=crypto.randomUUID();await i.store.tables.insert({id:n,workspaceId:i.workspaceId,name:t,code:Ag(t),columns:r.columns,view:"table",updatedAt:Date.now()});const o=r.rows.map(a=>({id:crypto.randomUUID(),tableId:n,data:a,updatedAt:Date.now()}));await i.store.rows(n).bulkInsert(o),i.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return T`
      <dialog @cancel=${this.close} @keydown=${Xt}>
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
            ${this.errorMsg?T`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};dr.styles=[Yt,qe`
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
    `];qi([q()],dr.prototype,"name",2);qi([q()],dr.prototype,"text",2);qi([q()],dr.prototype,"errorMsg",2);dr=qi([tt("csv-paste-dialog")],dr);function Ag(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var Pg=Object.defineProperty,Ig=Object.getOwnPropertyDescriptor,xo=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ig(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Pg(t,r,n),n};const Rg=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return the value this column should display. With the "script" renderer
  // the returned string is injected as raw HTML instead.
  return row.name ?? '';
}
`;let hn=class extends Ne{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),hn.instance=this}disconnectedCallback(){super.disconnectedCallback(),hn.instance===this&&(hn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:Rg,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return T`
      <dialog @cancel=${this.onCancel} @keydown=${Xt}>
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
              computed value instead of the stored one — and the cell becomes read-only. With the
              <code>script</code> renderer the returned string is injected as raw HTML instead. A
              script that throws shows a small error chip in the cell.
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
    `}};hn.instance=null;hn.styles=[Yt,qe`
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
    `];xo([q()],hn.prototype,"text",2);xo([q()],hn.prototype,"columnLabel",2);hn=xo([tt("script-editor-dialog")],hn);var Dg=Object.defineProperty,Og=Object.getOwnPropertyDescriptor,Bt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Og(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Dg(t,r,n),n};const jg=["string","number","boolean","date","datetime"];let Et=class extends Ne{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const r=await be();if(this.rendererOptions=[...r.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=r.events.on("app:ready",()=>{this.rendererOptions=[...r.registries.cellRenderers.keys()].sort()}),e){const i=await be(),n=await i.store.tables.findOne(e);if(!n)return;this.mode="edit",this.editTableId=e,this.name=n.name,this.tableTitle=n.title??"",this.columns=n.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,origField:a.field}));const o=await i.store.rows(e).find();this.previewRows=o.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const i=[...this.columns],[n]=i.splice(e,1);i.splice(r,0,n),this.columns=i}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientY<i.top+i.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,i=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!i)return;const n=[...this.columns],[o]=n.splice(r,1);let a=t+(r<t?-1:0);i==="after"&&(a+=1),n.splice(a,0,o),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,i)=>i===e?{...r,...t}:r)}async editScript(e){const t=hn.instance;if(!t)return;const r=this.columns[e];if(!r)return;const i=await t.open(r.script??"",r.label||r.field);i!==null&&this.patchColumn(e,{script:i.trim()?i:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const r=await be(),i=(await r.store.tables.find()).filter(p=>p.workspaceId===r.workspaceId),n=t.toLowerCase(),o=i.find(p=>p.name.toLowerCase()===n&&p.id!==this.editTableId);if(o){this.errorMsg=`A table named "${o.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const a=new Set;for(const p of this.columns){const x=p.field.trim();if(!x){this.errorMsg="Column field names cannot be empty.";return}if(a.has(x)){this.errorMsg=`Duplicate column field: ${x}`;return}a.add(x)}const c=this.tableTitle.trim(),u=this.columns.map(p=>{const x={field:p.field.trim(),label:p.label.trim()||p.field.trim(),type:p.type};return p.renderer&&(x.renderer=p.renderer),p.script&&(x.script=p.script),p.max!=null&&p.max>0&&(x.max=p.max),p.unique&&(x.unique=!0),p.notnull&&(x.notnull=!0),p.hidden&&(x.hidden=!0),x});if(this.mode==="edit"&&this.editTableId){const p=this.editTableId,x=await r.store.tables.findOne(p),b=new Map((x?.columns??[]).map(G=>[G.field,G])),k=u.filter(G=>{const J=b.get(G.field);return G.unique&&!J?.unique||G.notnull&&!J?.notnull||G.max&&G.max>0&&G.max!==J?.max});if(k.length>0){const G=await r.store.rows(p).find(),J=Fg(k,G);if(J.length>0){this.errorMsg=`Cannot save: ${J.length} existing ${J.length===1?"row violates":"rows violate"} the new constraints.
${J.slice(0,5).join(`
`)}${J.length>5?`
…and ${J.length-5} more.`:""}`;return}}const M=new Set(this.columns.map(G=>G.origField).filter(G=>!!G)),F=new Set(u.map(G=>G.field)),R=(x?.columns??[]).map(G=>G.field).filter(G=>!M.has(G)),H=x?.deletedColumns??[],V=[...new Set([...H,...R])].filter(G=>!F.has(G)),ue={name:t,title:c,columns:u,updatedAt:Date.now()};(V.length>0||H.length>0)&&(ue.deletedColumns=V);const se=x?.name;await r.store.tables.patch(p,ue);const oe=R.filter(G=>!F.has(G));if(oe.length>0){const G=await r.store.rows(p).find();for(const J of G){let he=!1;const $e={...J.data};for(const Te of oe)Te in $e&&(delete $e[Te],he=!0);he&&await r.store.rows(p).patch(J.id,{data:$e,updatedAt:Date.now()})}}if(se!==void 0&&se!==t){const G=(await r.store.viewInstances.find()).filter(J=>J.tableId===p);for(const J of G)J.tableName!==t&&await r.store.viewInstances.patch(J.id,{tableName:t,updatedAt:Date.now()})}}else await r.store.tables.insert({id:Bg(),workspaceId:r.workspaceId,name:t,title:c,code:Mg(t),columns:u,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return T`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const r of this.columns){if(!r.unique)continue;const i=new Set,n=new Set;for(const o of this.previewRows){const a=o.data[r.field];a==null||a===""||(i.has(a)&&n.add(a),i.add(a))}e.set(r.field,n)}const t=this.columns.filter(r=>!r.hidden);return T`
      <div class="preview">
        <h3>
          Live preview — first ${this.previewRows.length}
          row${this.previewRows.length===1?"":"s"}
        </h3>
        <table>
          <thead>
            <tr>
              ${t.map(r=>T`<th title=${r.field}>${r.label||r.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(r=>T`
                <tr>
                  ${t.map(i=>{const n=r.data[i.field],o=Lg(i,n,e.get(i.field));return T`<td class=${o?"violation":""} title=${o??""}>
                      ${zg(n)}
                    </td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return T`
      <dialog @cancel=${this.close} @keydown=${Xt}>
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
            ${this.noticeMsg?T`<div class="notice">${this.noticeMsg}</div>`:""}
            <label>
              Name
              <input
                type="text"
                autofocus
                .value=${this.name}
                @input=${r=>this.name=r.target.value}
              />
            </label>
            <label>
              Title <span style="color:#9ca3af">(optional — shown in the window title)</span>
              <input
                type="text"
                .value=${this.tableTitle}
                @input=${r=>this.tableTitle=r.target.value}
              />
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
                <span></span>
                <span></span>
                <span></span>
              </div>
              ${this.columns.map((r,i)=>{const n=this.dragSrcIdx===i,o=this.dropTargetIdx===i,a=o&&this.dropEdge==="before"?" drop-before":o&&this.dropEdge==="after"?" drop-after":"";return T`
                  <div
                    class=${`col-row${n?" drag-source":""}${a}`}
                    @dragover=${c=>this.onRowDragOver(c,i,c.currentTarget)}
                    @dragleave=${()=>this.onRowDragLeave(i)}
                    @drop=${c=>this.onRowDrop(c,i)}
                  >
                    <span
                      class="drag-handle"
                      title="Drag to reorder"
                      draggable="true"
                      @dragstart=${c=>this.onRowDragStart(c,i)}
                      @dragend=${()=>this.onRowDragEnd()}
                    >
                      <span class="mi sm">drag_indicator</span>
                    </span>
                    <input
                      type="text"
                      .value=${r.field}
                      @input=${c=>this.patchColumn(i,{field:c.target.value})}
                    />
                    <input
                      type="text"
                      .value=${r.label}
                      @input=${c=>this.patchColumn(i,{label:c.target.value})}
                    />
                    <select
                      .value=${r.type}
                      @change=${c=>this.patchColumn(i,{type:c.target.value})}
                    >
                      ${jg.map(c=>T`<option value=${c} ?selected=${c===r.type}>${c}</option>`)}
                    </select>
                    <select
                      title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                      .value=${r.renderer??""}
                      @change=${c=>{const u=c.target.value;this.patchColumn(i,{renderer:u||void 0})}}
                    >
                      <option value="" ?selected=${!r.renderer}>— none —</option>
                      ${this.rendererOptions.map(c=>T`<option value=${c} ?selected=${c===r.renderer}>${c}</option>`)}
                    </select>
                    <button
                      type="button"
                      class=${`icon-btn${r.script?.trim()?" has-script":""}`}
                      title=${r.script?.trim()?"Edit the script — its render(row) output is what this column displays":"Add a script: render(row) computes what this column displays"}
                      @click=${()=>this.editScript(i)}
                    >
                      <span class="mi sm">${r.script?.trim()?"code":"edit"}</span>
                    </button>
                    <input
                      type="number"
                      min="0"
                      placeholder="—"
                      title="Max length (strings) or max value (numbers)"
                      .value=${r.max==null?"":String(r.max)}
                      @input=${c=>{const u=c.target.value;this.patchColumn(i,{max:u===""?void 0:Number(u)})}}
                    />
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Unique"
                        .checked=${!!r.unique}
                        @change=${c=>this.patchColumn(i,{unique:c.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Not null"
                        .checked=${!!r.notnull}
                        @change=${c=>this.patchColumn(i,{notnull:c.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Visible — uncheck to hide the column without losing its data"
                        .checked=${!r.hidden}
                        @change=${c=>this.patchColumn(i,{hidden:!c.target.checked})}
                      />
                    </span>
                    <button
                      type="button"
                      class="icon-btn"
                      title="Move up"
                      ?disabled=${i===0}
                      @click=${()=>this.moveColumn(i,-1)}
                    >
                      <span class="mi sm">arrow_upward</span>
                    </button>
                    <button
                      type="button"
                      class="icon-btn"
                      title="Move down"
                      ?disabled=${i===this.columns.length-1}
                      @click=${()=>this.moveColumn(i,1)}
                    >
                      <span class="mi sm">arrow_downward</span>
                    </button>
                    <button
                      type="button"
                      class="icon-btn row-del"
                      title="Remove column"
                      @click=${()=>this.removeColumn(i)}
                    >
                      <span class="mi sm">delete</span>
                    </button>
                  </div>
                `})}
            </div>

            <button type="button" class="add" @click=${this.addColumn}>+ Add column</button>

            ${this.renameDetected()?T`<div class="hint">
                  Renamed fields will appear empty for existing rows — the row data isn't migrated
                  automatically.
                </div>`:""}
            ${this.errorMsg?T`<div class="error">${this.errorMsg}</div>`:""}
            ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};Et.styles=[Jt,Yt,qe`
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
        grid-template-columns: 1.25rem 1fr 1fr 7rem 7rem 1.5rem 4rem 1.5rem 1.5rem 1.5rem 1.5rem 1.5rem 1.5rem;
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
       columns are computed without opening each editor. */
      button.icon-btn.has-script {
        color: #2563eb;
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
    `];Bt([q()],Et.prototype,"mode",2);Bt([q()],Et.prototype,"editTableId",2);Bt([q()],Et.prototype,"name",2);Bt([q()],Et.prototype,"tableTitle",2);Bt([q()],Et.prototype,"columns",2);Bt([q()],Et.prototype,"errorMsg",2);Bt([q()],Et.prototype,"noticeMsg",2);Bt([q()],Et.prototype,"dragSrcIdx",2);Bt([q()],Et.prototype,"dropTargetIdx",2);Bt([q()],Et.prototype,"dropEdge",2);Bt([q()],Et.prototype,"previewRows",2);Bt([q()],Et.prototype,"rendererOptions",2);Et=Bt([tt("new-table-dialog")],Et);function zg(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function Lg(e,t,r){const i=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&i)return`${e.label}: empty`;if(i)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!i){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function Fg(e,t){const r=[];for(const i of e)if(i.notnull&&t.forEach((n,o)=>{const a=n.data[i.field];(a==null||typeof a=="string"&&a.trim()==="")&&r.push(`Row ${o+1}: ${i.label} is empty.`)}),i.max!=null&&i.max>0&&t.forEach((n,o)=>{const a=n.data[i.field];typeof a=="string"&&a.length>i.max?r.push(`Row ${o+1}: ${i.label} length ${a.length} > max ${i.max}.`):typeof a=="number"&&a>i.max&&r.push(`Row ${o+1}: ${i.label} value ${a} > max ${i.max}.`)}),i.unique){const n=new Map;t.forEach((o,a)=>{const c=o.data[i.field];c==null||c===""||(n.has(c)?r.push(`Row ${a+1}: ${i.label} duplicates row ${n.get(c)+1} ("${String(c)}").`):n.set(c,a))})}return r}function Mg(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Bg(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Ng=Object.defineProperty,Ug=Object.getOwnPropertyDescriptor,St=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ug(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Ng(t,r,n),n};const Hg='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',qg=T`<span class="mi sm">extension</span>`,ol="plugin:catalogUrls";function gi(){return new URL("/easydbaccess/plugins/catalog.json",location.origin).toString()}const Wg=[["installed","Installed"],["built-in","Built-in"],["fixed","Fixed"]],Bc=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],Kg=new Map(Bc),Vg={off:"Filter by status — click: only enabled → only disabled → off",on:"Showing only enabled plugins — click to show only disabled",not:"Showing only disabled plugins — click to clear"};let yt=class extends Ne{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[gi()],this.activeCatalogUrl=gi(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}async open(){const e=await be(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(o=>[o.url,o]));const i=await e.store.settings.findOne(ol),n=Array.isArray(i?.value)?i.value.filter(o=>typeof o=="string"):[];this.catalogUrls=n.length>0?n:[gi()],this.activeCatalogUrl=this.catalogUrls[0]??gi(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),i=Array.isArray(r.plugins)?r.plugins:[];this.catalog=i.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await be()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const o=await fetch(n,{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);const a=await o.json(),c=Array.isArray(a.plugins)?a.plugins:[];this.serverCatalog=c.map(u=>({...u,absUrl:new URL(u.url,n).toString()})),this.serverCatalogError=null}catch(o){this.serverCatalog=[],this.serverCatalogError=o.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await be()).store.settings.upsert({key:ol,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await be()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await be();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await be(),i=this.records.get(e);await r.store.plugins.upsert({...i??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...i,url:e,enabled:t,lastFetched:i?.lastFetched??0}))}async removePlugin(e){const t=await be();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await be(),i=Ys(e),n=this.records.get(i);await r.store.plugins.upsert({...n??{url:i,lastFetched:0},url:i,enabled:t,lastFetched:n?.lastFetched??0}),this.records=new Map(this.records.set(i,{...n,url:i,enabled:t,lastFetched:n?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await be()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await be();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const i=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:i});const n=new Blob([i],{type:"text/javascript"}),o=URL.createObjectURL(n);try{const c=await import(o);await c.init?.(t.api),await c.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(o),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const a=await t.store.plugins.find();this.records=new Map(a.map(c=>[c.url,c])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}renderTri(e,t,r,i="",n){const o=n?n[t??"off"]:t==="on"?`Showing only ${e} plugins — click to exclude`:t==="not"?`Hiding ${e} plugins — click to clear`:`Filter by ${e} — click: show only → exclude → off`;return T`
      <button
        type="button"
        class=${`tri${i?` ${i}`:""}${t?` ${t}`:""}`}
        title=${o}
        aria-pressed=${t!==void 0}
        @click=${r}
      >
        <span class="tri-mark">${t==="on"?"✓":t==="not"?"≠":""}</span>${e}
      </button>
    `}cycleState(e,t){const r=e.get(t),i=new Map(e);return r===void 0?i.set(t,"on"):r==="on"?i.set(t,"not"):i.delete(t),i}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}cycleStatusFilter(){this.statusFilter=this.statusFilter===void 0?"on":this.statusFilter==="on"?"not":void 0}buildRows(){const e=new Map,t=new Map;for(const{id:r,meta:i}of dg){const n=i.fixed?!0:this.records.get(Ys(r))?.enabled!==!1,o=!i.fixed&&Ut==="all-optional",a=i.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${r}`,{id:r,name:i.name,...i.type?{type:i.type}:{},...i.description?{meta:i.description}:{meta:"Built-in plugin"},...i.author?{author:i.author}:{},...i.icon?{icon:i.icon}:{},...i.repo?{repo:i.repo}:{},categories:new Set(a),enabled:n,status:n&&!o?"enabled":"disabled",fixed:!!i.fixed,...o?{skipped:!0}:{}})}for(const r of[...this.catalog,...this.serverCatalog]){const i=this.urls.includes(r.absUrl),n=this.records.get(r.absUrl),o=i?["available","installed"]:["available"],a=e.get(r.id),c=n?.enabled!==!1,u=i&&Ut!=="off";e.set(r.id,{id:r.id,name:r.name,url:r.absUrl,...r.type?{type:r.type}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},...r.author?{author:r.author}:{},meta:r.description??r.absUrl,categories:a?new Set([...a.categories,...o]):new Set(o),enabled:c,...i?{status:c&&!u?"enabled":"disabled"}:{},...u?{skipped:!0}:{},installing:this.installing.has(r.absUrl)}),t.set(r.absUrl,r.id)}for(const r of this.urls){const i=t.get(r);if(i){e.get(i).categories.add("installed");continue}const n=this.records.get(r),o=n?.lastFetched?new Date(n.lastFetched).toLocaleString():"never",a=n?.enabled!==!1;e.set(`url:${r}`,{id:r,name:r,urlOnly:!0,url:r,meta:n?.lastError??`Last fetched: ${o}`,metaIsError:!!n?.lastError,categories:new Set(["installed"]),enabled:a,status:a&&Ut==="off"?"enabled":"disabled",...Ut!=="off"?{skipped:!0}:{}})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),r=[],i=[];for(const[u,p]of this.filterStates)(p==="on"?r:i).push(u);const n=[],o=[];for(const[u,p]of this.typeFilters)(p==="on"?n:o).push(u);const a=this.statusFilter==="on"?"enabled":this.statusFilter==="not"?"disabled":void 0,c=e.filter(u=>!(r.length&&!r.some(p=>u.categories.has(p))||i.some(p=>u.categories.has(p))||n.length&&!(u.type&&n.includes(u.type))||u.type&&o.includes(u.type)||a&&u.status!==a));return t?c.filter(u=>[u.id,u.name,u.type,u.meta,u.author].some(p=>p?.toLowerCase().includes(t))):c}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),r=!!e.url&&e.categories.has("installed"),i=!!e.url&&!e.categories.has("installed");return T`
      <div
        class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}${e.skipped?" skipped":""}`}
      >
        <span class="row-icon">${e.icon?or(e.icon):qg}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?T`<span class="row-id">${e.id}</span>`:""}${e.type?T`<span class="row-type" title="Plugin type"
                  >${Kg.get(e.type)??e.type}</span
                >`:""}${e.skipped?T`<span
                  class="row-skipped"
                  title="Safe mode kept this plugin from loading this session — your saved setting is unchanged"
                  >skipped</span
                >`:""}
          </div>
          ${e.meta?T`<div class=${`meta${e.metaIsError?" err":""}`}>${e.meta}</div>`:""}
        </div>
        <div class="row-author">${e.author??""}</div>
        ${e.repo?T`<a
              class="row-repo"
              href=${e.repo}
              target="_blank"
              rel="noopener noreferrer"
              title="View source on GitHub"
              >${or(Hg)}</a
            >`:T`<span></span>`}
        ${e.fixed?T`<span class="mi sm lock-icon" title="Always on — cannot be disabled">lock</span>`:t?T`<label
                class="switch"
                title=${e.skipped?"Your saved setting — safe mode is what stopped this plugin loading now":"Enable / disable"}
              >
                <input
                  type="checkbox"
                  .checked=${e.enabled}
                  @change=${n=>this.onRowToggle(e,n.target.checked)}
                />
                <span class="slider"></span>
              </label>`:T`<span></span>`}
        ${i?T`<button
              type="button"
              class="install"
              ?disabled=${e.installing}
              @click=${()=>this.installFromCatalog({absUrl:e.url,name:e.name})}
            >
              <span class="mi sm">${e.installing?"hourglass_empty":"download"}</span>
              ${e.installing?"Installing…":"Install"}
            </button>`:r?T`<button
                type="button"
                class="uninstall"
                @click=${()=>this.removePlugin(e.url)}
              >
                <span class="mi sm">delete</span> Uninstall
              </button>`:T`<span></span>`}
      </div>
    `}render(){const e=this.filteredRows;return T`
      <dialog @cancel=${this.close} @keydown=${Xt}>
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
            ${Ut!=="off"?T`<p class="safemode">
                  <strong>Safe mode is on.</strong>
                  ${Ut==="all-optional"?T`<code>?safemode</code> skipped every URL plugin and every optional
                        built-in for this session.`:T`<code>?safemode1</code> skipped every URL plugin for this session.`}
                  Plugins marked <span class="row-skipped">skipped</span> are not running. The
                  toggles below still show — and change — your saved settings, which safe mode never
                  touches. Reload without the flag to run them again.
                </p>`:""}

            <div class="filters">
              <div class="chips">
                ${Wg.map(([t,r])=>this.renderTri(r,this.filterStates.get(t),()=>this.cycleFilter(t)))}
                ${this.renderTri("Enabled",this.statusFilter,()=>this.cycleStatusFilter(),"status",Vg)}
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
              ${Bc.map(([t,r])=>this.renderTri(r,this.typeFilters.get(t),()=>this.cycleTypeFilter(t)))}
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
                ${this.catalogUrls.map(t=>T`<option value=${t}></option>`)}
              </datalist>
              <button type="button" class="ghost" @click=${this.reloadCatalogSource}>
                <span class="mi sm">refresh</span> Reload
              </button>
            </div>
            ${this.catalogError?T`<div class="meta err">Catalog unavailable: ${this.catalogError}</div>`:""}
            ${this.serverCatalogError?T`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            <div class="plugin-list">
              ${e.length===0?T`<p class="hint">No plugins match the current filters/search.</p>`:""}
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
    `}};yt.styles=[Jt,Yt,qe`
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
    `];St([q()],yt.prototype,"urls",2);St([q()],yt.prototype,"records",2);St([q()],yt.prototype,"addUrl",2);St([q()],yt.prototype,"catalog",2);St([q()],yt.prototype,"catalogError",2);St([q()],yt.prototype,"serverCatalog",2);St([q()],yt.prototype,"serverCatalogError",2);St([q()],yt.prototype,"installing",2);St([q()],yt.prototype,"catalogUrls",2);St([q()],yt.prototype,"activeCatalogUrl",2);St([q()],yt.prototype,"search",2);St([q()],yt.prototype,"filterStates",2);St([q()],yt.prototype,"typeFilters",2);St([q()],yt.prototype,"statusFilter",2);yt=St([tt("plugin-manager-dialog")],yt);var Gg=Object.defineProperty,Yg=Object.getOwnPropertyDescriptor,Ln=(e,t,r,i)=>{for(var n=i>1?void 0:i?Yg(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Gg(t,r,n),n};const Tr="__general__";let Gt=class extends Ne{constructor(){super(...arguments),this.tabs=[],this.active=Tr,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.secretError="",this.dialogEl=null,this.attemptClose=e=>{const t=this.invalidSecrets();if(t.length>0){e?.preventDefault();const r=t[0];this.active=r.tab.id,this.secretError=`“${r.field.label}” must be empty or a \${secret:name} reference. Move the value into the secrets store (General tab) and reference it, so the raw secret is never saved or synced.`;return}this.secretError="",this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.attemptClose()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}async open(){const e=await be(),t=[...e.registries.settings];this.tabs=t.map(([o,a])=>({id:o,name:a.name,fields:a.fields}));const r=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=r?.title??"";const i={},n={};for(const o of this.tabs)for(const a of o.fields){const c=`${o.id}:${a.key}`,u=await e.api.settings.placement(o.id,a.key);u==="user"?(i[c]=so(c),n[c]="user"):u==="workspace"?(i[c]=(await e.store.settings.findOne(c))?.value,n[c]="workspace"):(i[c]=a.default,n[c]=a.scope??"workspace")}this.values=i,this.placements=n,this.secretsText=ji(),this.active=Tr,await this.updateComplete,this.dialogEl?.showModal()}static rawSecret(e){return typeof e=="string"&&e!==""&&!e.includes("${secret:")}invalidSecrets(){const e=[];for(const t of this.tabs)for(const r of t.fields)r.type==="secret"&&Gt.rawSecret(this.values[`${t.id}:${r.key}`])&&e.push({tab:t,field:r});return e}async setValue(e,t,r){const i=`${e.id}:${t.key}`;this.values={...this.values,[i]:r},this.secretError&&this.invalidSecrets().length===0&&(this.secretError=""),await(await be()).api.settings.set(e.id,t.key,r,this.placements[i])}async toggleScope(e,t,r){const i=`${e.id}:${t.key}`,n=r?"user":"workspace";this.placements={...this.placements,[i]:n},await(await be()).api.settings.set(e.id,t.key,this.values[i],n)}onSecretsInput(e){this.secretsText=e.target.value,Sl(this.secretsText)}downloadSecrets(){const e=new Blob([this.secretsText],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download="secrets.txt",r.click(),URL.revokeObjectURL(t)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await be();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const r=`${e.id}:${t.key}`,i=this.values[r];switch(t.type){case"text":return T`<textarea
          .value=${String(i??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        ></textarea>`;case"number":return T`<input
          type="number"
          .value=${i==null?"":String(i)}
          @change=${n=>{const o=n.target.value;this.setValue(e,t,o===""?void 0:Number(o))}}
        />`;case"boolean":return T`<label class="scope"
          ><input
            type="checkbox"
            .checked=${!!i}
            @change=${n=>this.setValue(e,t,n.target.checked)}
          />
          enabled</label
        >`;case"date":return T`<input
          type="date"
          .value=${String(i??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        />`;case"secret":return this.renderSecretControl(e,t,i);case"option":return T`<div class="radios">
          ${(t.options??[]).map(n=>T`<label
              ><input
                type="radio"
                name=${r}
                .checked=${i===n}
                @change=${()=>this.setValue(e,t,n)}
              />${n}</label
            >`)}
        </div>`;case"selection":{const n=Array.isArray(i)?i:[];return T`<div class="checks">
          ${(t.options??[]).map(o=>T`<label
              ><input
                type="checkbox"
                .checked=${n.includes(o)}
                @change=${a=>{const u=a.target.checked?[...n,o]:n.filter(p=>p!==o);this.setValue(e,t,u)}}
              />${o}</label
            >`)}
        </div>`}case"string":default:return T`<input
          type="text"
          .value=${String(i??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        />`}}renderSecretControl(e,t,r){const i=Object.keys(zi(this.secretsText)),n=Gt.rawSecret(r);return T`<div class="secret-row">
      <input
        type="text"
        class=${n?"invalid":""}
        placeholder="value or \${secret:name}"
        .value=${String(r??"")}
        @change=${o=>this.setValue(e,t,o.target.value)}
      />
      ${i.length>0?T`<select
            title="Insert a secret reference"
            @change=${o=>{const a=o.target.value;a&&this.setValue(e,t,`\${secret:${a}}`),o.target.value=""}}
          >
            <option value="">🔑 secret…</option>
            ${i.map(o=>T`<option value=${o}>${o}</option>`)}
          </select>`:me}
    </div>`}renderField(e,t){const r=`${e.id}:${t.key}`;return T`<div class="field">
      <div class="field-head">
        <label>${t.label}</label>
        <label class="scope" title="Store on this device only (not synced)">
          <input
            type="checkbox"
            .checked=${this.placements[r]==="user"}
            @change=${i=>this.toggleScope(e,t,i.target.checked)}
          />
          user
        </label>
      </div>
      ${this.renderControl(e,t)}
      ${t.description?T`<p class="desc">${t.description}</p>`:me}
    </div>`}renderGeneral(){return T`
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
    `}renderPanel(){if(this.active===Tr)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?T`
      <h3>${e.name}</h3>
      ${e.fields.length===0?T`<p class="empty">This plugin registered no settings.</p>`:e.fields.map(t=>this.renderField(e,t))}
    `:me}render(){return T`
      <dialog @cancel=${this.attemptClose} @keydown=${Xt}>
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
          ${this.secretError?T`<div class="secret-error" role="alert">${this.secretError}</div>`:me}
          <div class="dialog-body">
            <div class="layout">
              <nav class="tabs">
                <button
                  type="button"
                  class=${this.active===Tr?"active":""}
                  @click=${()=>this.active=Tr}
                >
                  General
                </button>
                ${this.tabs.map(e=>T`<button
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
    `}};Gt.styles=[Jt,Yt,qe`
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
    `];Ln([q()],Gt.prototype,"tabs",2);Ln([q()],Gt.prototype,"active",2);Ln([q()],Gt.prototype,"values",2);Ln([q()],Gt.prototype,"placements",2);Ln([q()],Gt.prototype,"secretsText",2);Ln([q()],Gt.prototype,"workspaceTitle",2);Ln([q()],Gt.prototype,"secretError",2);Gt=Ln([tt("settings-dialog")],Gt);var Xg=Object.defineProperty,Qg=Object.getOwnPropertyDescriptor,en=(e,t,r,i)=>{for(var n=i>1?void 0:i?Qg(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Xg(t,r,n),n};let Tt=class extends Ne{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await be(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const r=await e.store.tables.findOne(t.tableId);this.tableColumns=r?.columns??[],r&&t.tableName!==r.name&&e.store.viewInstances.patch(t.id,{tableName:r.name});const i=new Map(this.tableColumns.map(o=>[o.field,o]));this.columns=t.visibleColumns.map(o=>i.get(o)??{field:o,label:o,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(o=>{const a=o.find(c=>c.id===this.viewInstanceId);if(a){if(a.tableId!==this.instance?.tableId){this.instance=a,this.reload();return}this.instance=a,this.recompute()}});const n=e.store.rows(t.tableId);this.rowsUnsub=n.subscribe(o=>{this.allRows=o,this.recompute()}),this.allRows=await n.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;let e=mc(this.allRows,this.instance);const t=(o,a)=>Object.values(o.data).some(c=>c!=null&&String(c).toLowerCase().includes(a)),r=this.searchQuery.trim(),i=this.globalQuery.trim();r&&(e=Ei(e,r,t)),i&&(e=Ei(e,i,t));const n=this.instance.limit??0;n>0&&e.length>n&&(e=e.slice(0,n)),this.rows=e,this.templateOn&&ql(this.viewInstanceId,e.length,this.allRows.length)}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await be()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||Ws(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&Ws(this.instance.tableId,{editInstanceId:this.instance.id})}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,i=t.includes(e)?t.filter(o=>o!==e):[...t,e];if(i.length===0)return;await(await be()).store.viewInstances.patch(this.instance.id,{visibleColumns:i,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:i}}renderTable(){return this.rows.length===0?T`<div class="vw-empty">No rows.</div>`:T`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>T`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>T`<tr>
                ${this.columns.map(t=>{const r=e.data[t.field];return T`<td>${r==null?"":String(r)}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}renderTemplated(){const e=this.template;if(!e)return T`<div class="vw-empty">This view's template is missing.</div>`;if(Cf(e.rowHtml)){const t=this.instance?.mapping??{},r=this.rows.map(n=>xf(e.rowHtml,n,t)).join(""),i=(e.headerHtml??"")+r+(e.footerHtml??"");return T`<div class="vw-root">${or(i)}</div>`}return T`<div class="vw-root">
      ${e.headerHtml?.trim()?T`<div class="vw-html">${or(e.headerHtml)}</div>`:me}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?T`<div class="vw-html">${or(e.footerHtml)}</div>`:me}
    </div>`}renderFooter(){if(!this.instance)return me;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return T`<div class="vw-footer">
      ${!e&&this.showColsMenu?T`<div class="cols-menu">
            ${this.tableColumns.map(r=>T`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(r.field)}
                    @change=${()=>void this.toggleColumn(r.field)}
                  />${r.label||r.field}</label
                >`)}
          </div>`:me}
      ${e?me:T`<button
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
      ${this.template?T`<button
            class="edit-template"
            aria-label="Edit template"
            title=${`Edit the "${this.template.name}" template`}
            @click=${()=>this.editTemplate()}
          >
            <span class="mi">code</span>
          </button>`:me}
      <button
        class=${e?"":"active"}
        title=${e?"Show as a table (turn the template off)":"Show through the template"}
        aria-label="Toggle template"
        aria-pressed=${e?"false":"true"}
        @click=${()=>void this.toggleTemplate()}
      >
        <span class="mi">table_view</span>
      </button>
    </div>`}render(){if(!this.loaded)return T`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return T`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const t=this.templateOn?T`<div class="vw-body scroll">${this.renderTemplated()}</div>`:T`<div class="vw-body grid">
          <data-table
            .tableId=${this.instance?.tableId??""}
            .viewInstanceId=${this.viewInstanceId}
          ></data-table>
        </div>`;return T`${t}${this.renderFooter()}`}};Tt.styles=[Jt,qe`
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
      }
      table.vw-table th {
        background: #f9fafb;
        position: sticky;
        top: 0;
      }
      .vw-html {
        padding: 0.5rem 0.75rem;
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
    `];en([Mt({type:String})],Tt.prototype,"viewInstanceId",2);en([q()],Tt.prototype,"loaded",2);en([q()],Tt.prototype,"error",2);en([q()],Tt.prototype,"instance",2);en([q()],Tt.prototype,"template",2);en([q()],Tt.prototype,"columns",2);en([q()],Tt.prototype,"tableColumns",2);en([q()],Tt.prototype,"rows",2);en([q()],Tt.prototype,"showColsMenu",2);en([q()],Tt.prototype,"searchQuery",2);en([q()],Tt.prototype,"globalQuery",2);Tt=en([tt("view-window")],Tt);const Ht=new Map;function Jg(e){const t=Ht.get(e);if(!t)return!1;const r=t.panel;return r.status==="minimized"&&r.normalize?.(),r.front?.(),!0}let al=!1;function Xs(e){e.panel.setHeaderTitle?.(e.name+Wl(e.count,e.total))}function Zg(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function eb(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Nc(e){return`view-panel-${eb(e)}`}async function tb(){if(al)return;al=!0;const e=await be(),t=r=>r.filter(i=>i.workspaceId===e.workspaceId&&i.open);for(const r of t(await e.store.viewInstances.find()))ll(r,e);e.store.viewInstances.subscribe(r=>{const i=new Map(t(r).map(n=>[n.id,n]));for(const n of[...Ht.keys()])i.has(n)||rb(n);for(const[n,o]of i)Ht.has(n)||ll(o,e)}),e.store.tables.subscribe(r=>void nb(e,r)),document.addEventListener(Si,r=>{const i=r.detail,n=Ht.get(i.key);n&&n.el&&(n.count=i.count,n.total=i.total,Xs(n))}),document.addEventListener("easydb:reload-view",r=>{const i=r.detail?.instanceId;if(!i)return;const n=Ht.get(i);n&&(async()=>{const o=await e.store.viewInstances.findOne(i);o&&(n.name=o.name,Xs(n)),n.el?.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of Ht.values())r?.reload()})}async function nb(e,t){const r=t.filter(a=>a.workspaceId===e.workspaceId),i=new Set(r.map(a=>a.id)),n=new Map;for(const a of r)n.has(a.name)||n.set(a.name,a);const o=await e.store.viewInstances.find();for(const a of o){if(a.workspaceId!==e.workspaceId||i.has(a.tableId)||!a.tableName)continue;const c=n.get(a.tableName);c&&await e.store.viewInstances.patch(a.id,{tableId:c.id,updatedAt:Date.now()})}}function ll(e,t){if(Ht.has(e.id))return;const r=Nc(e.id),i=e.windowGeometry,n=i?.minimized===!0,o=()=>{const V=document.createElement("view-window");return V.viewInstanceId=e.id,V.style.height="100%",V},a=n?document.createElement("div"):o();let c;const u=()=>{c&&(c.el?.remove(),c.el=null,c.count=-1,c.total=-1,Xs(c))},p=()=>{if(!c||c.el)return;const V=document.getElementById(r)?.querySelector(".jsPanel-content");if(!V)return;V.replaceChildren();const ue=o();V.appendChild(ue),c.el=ue},x=i?{panelSize:`${i.w} ${i.h}`}:{contentSize:"480 520"},b=i?{my:"left-top",at:"left-top",offsetX:i.x,offsetY:i.y}:{my:"center-top",at:"center-top",offsetY:60},k=Cc(r,_c),M=L.create({id:r,container:Zg(),headerTitle:e.name,theme:"#0891b2",content:a,...x,position:b,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>void Rs(e.id)},resizeit:{containment:!1,stop:()=>void Rs(e.id)},onstatuschange:V=>{V.status==="maximized"?k.enter():k.exit(),V.status==="minimized"?u():(V.status==="normalized"||V.status==="maximized")&&p(),Rs(e.id)},onclosed:()=>{Ht.delete(e.id),k.exit(),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});c={panel:M,el:n?null:a,name:e.name,count:-1,total:-1},Ht.set(e.id,c);const F=document.getElementById(r),R=document.createElement("panel-search");R.tableId=e.id,F?.querySelector(".jsPanel-controlbar")?.prepend(R);const H=F?.querySelector(".jsPanel-titlebar");H&&(H.tabIndex=-1,H.style.outline="none",H.addEventListener("pointerdown",()=>H.focus())),i?.maximized?queueMicrotask(()=>M.maximize?.()):i?.minimized&&queueMicrotask(()=>M.minimize?.())}function rb(e){const t=Ht.get(e);if(t){Ht.delete(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}async function Rs(e){const t=document.getElementById(Nc(e)),r=Ht.get(e);if(!t||!r)return;const i=r.panel.status,n=i==="minimized",o=i==="maximized";try{const a=await be(),c=(await a.store.viewInstances.findOne(e))?.windowGeometry;let u=t.offsetLeft,p=t.offsetTop,x=t.offsetWidth,b=t.offsetHeight;(n||o)&&c&&(u=c.x,p=c.y,x=c.w,b=c.h),u<=-9e3&&(u=c?.x??40);const k={x:u,y:p,w:x,h:b,z:0,minimized:n,maximized:o};await a.store.viewInstances.patch(e,{windowGeometry:k,updatedAt:Date.now()})}catch{}}var ib=Object.defineProperty,sb=Object.getOwnPropertyDescriptor,gr=(e,t,r,i)=>{for(var n=i>1?void 0:i?sb(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&ib(t,r,n),n};const ob={Windows:0,Actions:1,App:2,Tables:3,Views:4};function cl(e){return ob[e]??3}function ab(e){return e?e.trimStart().startsWith("<svg")?T`<span class="cmd-svg">${ro(e)}</span>`:T`<span class="mi sm">${e}</span>`:T`<span class="mi sm">chevron_right</span>`}let zn=class extends Ne{constructor(){super(...arguments),this.search="",this.items=[],this.selected=0,this.api=null}async open(){const e=await be();this.api=e.api,this.items=await this.buildItems(),this.search="",this.selected=0,await this.updateComplete,this.dialogEl&&!this.dialogEl.open&&this.dialogEl.showModal(),this.inputEl?.focus()}async buildItems(){const e=await be(),t=e.api,r=[];for(const o of e.registries.commands)r.push({id:o.id,title:o.title,group:o.group??"Commands",...o.icon?{icon:o.icon}:{},haystack:[o.title,o.group,...o.keywords??[]].join(" ").toLowerCase(),run:()=>o.run(t)});for(const o of[...e.registries.headerButtons,...e.registries.footerButtons])r.push({id:`button:${o.id}`,title:o.label,group:"Actions",...o.icon?{icon:o.icon}:{},haystack:`${o.label} ${o.tooltip??""}`.toLowerCase(),run:()=>o.onClick(t)});const i=await t.store.tables.find({workspaceId:e.workspaceId});i.sort((o,a)=>o.name.localeCompare(a.name));for(const o of i)r.push({id:`goto:${o.id}`,title:`Go to: ${o.name}`,group:"Tables",icon:"table_chart",haystack:`${o.name} go to table`.toLowerCase(),run:()=>{sm(o.id)}});const n=await t.store.viewInstances.find({workspaceId:e.workspaceId});n.sort((o,a)=>o.name.localeCompare(a.name));for(const o of n)r.push({id:`goto-view:${o.id}`,title:`Go to view: ${o.name}`,group:"Views",icon:"view_quilt",haystack:`${o.name} go to view`.toLowerCase(),run:async()=>{await t.store.viewInstances.patch(o.id,{open:!0,updatedAt:Date.now()}),Jg(o.id)}});return r.map((o,a)=>({it:o,i:a})).sort((o,a)=>cl(o.it.group)-cl(a.it.group)||o.i-a.i).map(({it:o})=>o)}get filtered(){const e=this.search.trim().toLowerCase();return e?this.items.filter(t=>t.haystack.includes(e)):this.items}close(){this.dialogEl?.close()}onInput(e){this.search=e.target.value,this.selected=0}onKeydown(e){const t=this.filtered;if(e.key==="ArrowDown")e.preventDefault(),this.selected=t.length?(this.selected+1)%t.length:0;else if(e.key==="ArrowUp")e.preventDefault(),this.selected=t.length?(this.selected-1+t.length)%t.length:0;else if(e.key==="Enter"){e.preventDefault();const r=t[this.selected];r&&this.execute(r)}}async execute(e){this.close();try{await e.run()}catch(t){console.error(`[command:${e.id}]`,t)}}render(){const e=this.filtered;let t="";return T`
      <dialog @keydown=${this.onKeydown} @close=${()=>this.search=""}>
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
          ${e.length===0?T`<div class="empty">No matching commands.</div>`:e.map((r,i)=>{const n=r.group!==t?(t=r.group,r.group):null;return T`
                  ${n?T`<div class="group-head">${n}</div>`:""}
                  <div
                    class=${`item${i===this.selected?" sel":""}`}
                    @mousemove=${()=>this.selected=i}
                    @click=${()=>this.execute(r)}
                  >
                    ${ab(r.icon)}
                    <span class="title">${r.title}</span>
                  </div>
                `})}
        </div>
      </dialog>
    `}};zn.styles=[Jt,qe`
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
    `];gr([q()],zn.prototype,"search",2);gr([q()],zn.prototype,"items",2);gr([q()],zn.prototype,"selected",2);gr([pn("dialog")],zn.prototype,"dialogEl",2);gr([pn("input")],zn.prototype,"inputEl",2);zn=gr([tt("command-palette-dialog")],zn);var lb=Object.defineProperty,cb=Object.getOwnPropertyDescriptor,Uc=(e,t,r,i)=>{for(var n=i>1?void 0:i?cb(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&lb(t,r,n),n};let Ii=class extends Ne{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await be();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(i=>i.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await lm(),await tb()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?T``:T`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};Ii.styles=qe`
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
  `;Uc([q()],Ii.prototype,"tables",2);Ii=Uc([tt("table-list")],Ii);var db=Object.defineProperty,ub=Object.getOwnPropertyDescriptor,$o=(e,t,r,i)=>{for(var n=i>1?void 0:i?ub(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&db(t,r,n),n};let Or=class extends Ne{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await be();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const i=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(i)}async addWorkspace(){const t=await(await be()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return T`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>T`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};Or.styles=[Jt,qe`
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
  `];$o([q()],Or.prototype,"workspaces",2);$o([q()],Or.prototype,"current",2);Or=$o([tt("workspace-selector")],Or);var dl=Object.freeze,Hc=Object.defineProperty,hb=Object.getOwnPropertyDescriptor,tn=(e,t,r,i)=>{for(var n=i>1?void 0:i?hb(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Hc(t,r,n),n},fb=(e,t)=>dl(Hc(e,"raw",{value:dl(e.slice())})),ul;function hl(e){return e?e.trimStart().startsWith("<svg")?T`<span class="icon-svg">${ro(e)}</span>`:T`<span class="mi sm">${e}</span>`:""}let At=class extends Ne{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.onOpenCommandPalette=()=>{this.commandPaletteDialog?.open()},this.onGlobalKeydown=e=>{(e.ctrlKey||e.metaKey)&&!e.altKey&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.commandPaletteDialog?.open())},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{pl(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!pl(e))return;e.preventDefault();const t=await be(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const i of[...t.registries.dropHandlers])try{if(await i(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=(e,t)=>{if(!this.api)return;const r=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:r})).catch(i=>{console.error(`[footer-button:${e.id}]`,i)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),document.addEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.addEventListener("easydb:focus-search",this.openSearch),document.addEventListener("keydown",this.onGlobalKeydown),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),document.removeEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.removeEventListener("easydb:focus-search",this.openSearch),document.removeEventListener("keydown",this.onGlobalKeydown),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await be();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const r=t.find(i=>i.id===e.workspaceId);this.workspaceTitle=r?.title?.trim()??"",pb(this.workspaceTitle)})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return T`
        <button class="icon-btn" title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
          ${hl(e.icon)}
        </button>
      `;const r=t==="header"||e.variant==="primary"?"primary":"slot";return T`
      <button class=${r} title=${e.tooltip??e.label} @click=${i=>this.runSlot(e,i)}>
        ${hl(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return T(ul||(ul=fb([`
      <header>
        <strong
          >`,`
          <a
            class="version-link"
            href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener"
            title="View the changelog on GitHub"
            ><span class="version">v0.0.181</span></a
          ></strong
        >
        `,`
        `,`
        <button
          class="icon-btn"
          title="Add, disable, or remove plugins"
          @click=`,`
        >
          <span class="mi">extension</span>
        </button>
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
    `])),this.workspaceTitle||"easyDBAccess",this.headerButtons.filter(e=>e.variant!=="secondary").map(e=>this.renderSlotButton(e,"header")),this.searchOpen?T`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?T`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:T`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              @click=${this.openSearch}
            >
              <span class="mi">search</span>
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};At.styles=[Jt,qe`
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
      button.icon-btn {
        background: transparent;
        color: white;
        border: 1px solid #4b5563;
        padding: 0.3rem 0.6rem;
        border-radius: 0.25rem;
        font: inherit;
        cursor: pointer;
        line-height: 1;
      }
      button.icon-btn:hover {
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
    `];tn([pn("new-table-dialog")],At.prototype,"dialog",2);tn([pn("csv-paste-dialog")],At.prototype,"csvPasteDialog",2);tn([pn("plugin-manager-dialog")],At.prototype,"pluginManagerDialog",2);tn([pn("settings-dialog")],At.prototype,"settingsDialog",2);tn([pn("command-palette-dialog")],At.prototype,"commandPaletteDialog",2);tn([pn("input.search")],At.prototype,"searchInput",2);tn([q()],At.prototype,"footerButtons",2);tn([q()],At.prototype,"headerButtons",2);tn([q()],At.prototype,"searchQuery",2);tn([q()],At.prototype,"searchOpen",2);tn([q()],At.prototype,"workspaceTitle",2);At=tn([tt("app-shell")],At);const fl=document.title;function pb(e){const t=e.trim();document.title=t?`${t} — ${fl}`:fl}function pl(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([be(),$n(()=>Promise.resolve().then(()=>Oc),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{qe as a,T as b,Xt as c,Yt as d,Jt as e,Ne as i,Qt as m,q as r,tt as t};
//# sourceMappingURL=index-Cf3un1fd.js.map
