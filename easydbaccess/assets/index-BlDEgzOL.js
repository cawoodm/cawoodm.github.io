(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const td="modulepreload",nd=function(e){return"/easydbaccess/"+e},Go={},In=function(t,r,s){let n=Promise.resolve();if(r&&r.length>0){let a=function(p){return Promise.all(p.map(x=>Promise.resolve(x).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=c?.nonce||c?.getAttribute("nonce");n=a(r.map(p=>{if(p=nd(p),p in Go)return;Go[p]=!0;const x=p.endsWith(".css"),y=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${y}`))return;const $=document.createElement("link");if($.rel=x?"stylesheet":td,x||($.as="script"),$.crossOrigin="",$.href=p,u&&$.setAttribute("nonce",u),document.head.appendChild($),x)return new Promise((B,F)=>{$.addEventListener("load",B),$.addEventListener("error",()=>F(new Error(`Unable to preload CSS for ${p}`)))})}))}function o(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return n.then(a=>{for(const c of a||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gs=globalThis,Xi=gs.ShadowRoot&&(gs.ShadyCSS===void 0||gs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qi=Symbol(),Yo=new WeakMap;let al=class{constructor(t,r,s){if(this._$cssResult$=!0,s!==Qi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Xi&&t===void 0){const s=r!==void 0&&r.length===1;s&&(t=Yo.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Yo.set(r,t))}return t}toString(){return this.cssText}};const rd=e=>new al(typeof e=="string"?e:e+"",void 0,Qi),qe=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((s,n,o)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new al(r,e,Qi)},sd=(e,t)=>{if(Xi)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const s=document.createElement("style"),n=gs.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=r.cssText,e.appendChild(s)}},Xo=Xi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return rd(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:id,defineProperty:od,getOwnPropertyDescriptor:ad,getOwnPropertyNames:ld,getOwnPropertySymbols:cd,getPrototypeOf:dd}=Object,Is=globalThis,Qo=Is.trustedTypes,ud=Qo?Qo.emptyScript:"",hd=Is.reactiveElementPolyfillSupport,Tr=(e,t)=>e,ys={toAttribute(e,t){switch(t){case Boolean:e=e?ud:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ji=(e,t)=>!id(e,t),Jo={attribute:!0,type:String,converter:ys,reflect:!1,useDefault:!1,hasChanged:Ji};Symbol.metadata??=Symbol("metadata"),Is.litPropertyMetadata??=new WeakMap;let sr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Jo){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(t,s,r);n!==void 0&&od(this.prototype,t,n)}}static getPropertyDescriptor(t,r,s){const{get:n,set:o}=ad(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get:n,set(a){const c=n?.call(this);o?.call(this,a),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Jo}static _$Ei(){if(this.hasOwnProperty(Tr("elementProperties")))return;const t=dd(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Tr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Tr("properties"))){const r=this.properties,s=[...ld(r),...cd(r)];for(const n of s)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[s,n]of r)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[r,s]of this.elementProperties){const n=this._$Eu(r,s);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const n of s)r.unshift(Xo(n))}else t!==void 0&&r.push(Xo(t));return r}static _$Eu(t,r){const s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const s of r.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return sd(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,s){this._$AK(t,s)}_$ET(t,r){const s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(n!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:ys).toAttribute(r,s.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,r){const s=this.constructor,n=s._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const o=s.getPropertyOptions(n),a=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ys;this._$Em=n;const c=a.fromAttribute(r,o.type);this[n]=c??this._$Ej?.get(n)??c,this._$Em=null}}requestUpdate(t,r,s,n=!1,o){if(t!==void 0){const a=this.constructor;if(n===!1&&(o=this[t]),s??=a.getPropertyOptions(t),!((s.hasChanged??Ji)(o,r)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:s,reflect:n,wrapped:o},a){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??r??this[t]),o!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s){const{wrapped:a}=o,c=this[n];a!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,o,c)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(r)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};sr.elementStyles=[],sr.shadowRootOptions={mode:"open"},sr[Tr("elementProperties")]=new Map,sr[Tr("finalized")]=new Map,hd?.({ReactiveElement:sr}),(Is.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zi=globalThis,Zo=e=>e,ws=Zi.trustedTypes,ea=ws?ws.createPolicy("lit-html",{createHTML:e=>e}):void 0,ll="$lit$",Pn=`lit$${Math.random().toFixed(9).slice(2)}$`,cl="?"+Pn,fd=`<${cl}>`,Vn=document,Ar=()=>Vn.createComment(""),Pr=e=>e===null||typeof e!="object"&&typeof e!="function",eo=Array.isArray,pd=e=>eo(e)||typeof e?.[Symbol.iterator]=="function",yi=`[ 	
\f\r]`,Er=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ta=/-->/g,na=/>/g,Hn=RegExp(`>|${yi}(?:([^\\s"'>=/]+)(${yi}*=${yi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ra=/'/g,sa=/"/g,dl=/^(?:script|style|textarea|title)$/i,md=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),A=md(1),Gn=Symbol.for("lit-noChange"),me=Symbol.for("lit-nothing"),ia=new WeakMap,Kn=Vn.createTreeWalker(Vn,129);function ul(e,t){if(!eo(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ea!==void 0?ea.createHTML(t):t}const gd=(e,t)=>{const r=e.length-1,s=[];let n,o=t===2?"<svg>":t===3?"<math>":"",a=Er;for(let c=0;c<r;c++){const u=e[c];let p,x,y=-1,$=0;for(;$<u.length&&(a.lastIndex=$,x=a.exec(u),x!==null);)$=a.lastIndex,a===Er?x[1]==="!--"?a=ta:x[1]!==void 0?a=na:x[2]!==void 0?(dl.test(x[2])&&(n=RegExp("</"+x[2],"g")),a=Hn):x[3]!==void 0&&(a=Hn):a===Hn?x[0]===">"?(a=n??Er,y=-1):x[1]===void 0?y=-2:(y=a.lastIndex-x[2].length,p=x[1],a=x[3]===void 0?Hn:x[3]==='"'?sa:ra):a===sa||a===ra?a=Hn:a===ta||a===na?a=Er:(a=Hn,n=void 0);const B=a===Hn&&e[c+1].startsWith("/>")?" ":"";o+=a===Er?u+fd:y>=0?(s.push(p),u.slice(0,y)+ll+u.slice(y)+Pn+B):u+Pn+(y===-2?c:B)}return[ul(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class Ir{constructor({strings:t,_$litType$:r},s){let n;this.parts=[];let o=0,a=0;const c=t.length-1,u=this.parts,[p,x]=gd(t,r);if(this.el=Ir.createElement(p,s),Kn.currentNode=this.el.content,r===2||r===3){const y=this.el.content.firstChild;y.replaceWith(...y.childNodes)}for(;(n=Kn.nextNode())!==null&&u.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const y of n.getAttributeNames())if(y.endsWith(ll)){const $=x[a++],B=n.getAttribute(y).split(Pn),F=/([.?@])?(.*)/.exec($);u.push({type:1,index:o,name:F[2],strings:B,ctor:F[1]==="."?yd:F[1]==="?"?wd:F[1]==="@"?vd:Rs}),n.removeAttribute(y)}else y.startsWith(Pn)&&(u.push({type:6,index:o}),n.removeAttribute(y));if(dl.test(n.tagName)){const y=n.textContent.split(Pn),$=y.length-1;if($>0){n.textContent=ws?ws.emptyScript:"";for(let B=0;B<$;B++)n.append(y[B],Ar()),Kn.nextNode(),u.push({type:2,index:++o});n.append(y[$],Ar())}}}else if(n.nodeType===8)if(n.data===cl)u.push({type:2,index:o});else{let y=-1;for(;(y=n.data.indexOf(Pn,y+1))!==-1;)u.push({type:7,index:o}),y+=Pn.length-1}o++}}static createElement(t,r){const s=Vn.createElement("template");return s.innerHTML=t,s}}function or(e,t,r=e,s){if(t===Gn)return t;let n=s!==void 0?r._$Co?.[s]:r._$Cl;const o=Pr(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(e),n._$AT(e,r,s)),s!==void 0?(r._$Co??=[])[s]=n:r._$Cl=n),n!==void 0&&(t=or(e,n._$AS(e,t.values),n,s)),t}class bd{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:s}=this._$AD,n=(t?.creationScope??Vn).importNode(r,!0);Kn.currentNode=n;let o=Kn.nextNode(),a=0,c=0,u=s[0];for(;u!==void 0;){if(a===u.index){let p;u.type===2?p=new Or(o,o.nextSibling,this,t):u.type===1?p=new u.ctor(o,u.name,u.strings,this,t):u.type===6&&(p=new xd(o,this,t)),this._$AV.push(p),u=s[++c]}a!==u?.index&&(o=Kn.nextNode(),a++)}return Kn.currentNode=Vn,n}p(t){let r=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,r),r+=s.strings.length-2):s._$AI(t[r])),r++}}class Or{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,s,n){this.type=2,this._$AH=me,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=s,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=or(this,t,r),Pr(t)?t===me||t==null||t===""?(this._$AH!==me&&this._$AR(),this._$AH=me):t!==this._$AH&&t!==Gn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):pd(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==me&&Pr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Vn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Ir.createElement(ul(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(r);else{const o=new bd(n,this),a=o.u(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(t){let r=ia.get(t.strings);return r===void 0&&ia.set(t.strings,r=new Ir(t)),r}k(t){eo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,n=0;for(const o of t)n===r.length?r.push(s=new Or(this.O(Ar()),this.O(Ar()),this,this.options)):s=r[n],s._$AI(o),n++;n<r.length&&(this._$AR(s&&s._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const s=Zo(t).nextSibling;Zo(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Rs{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,s,n,o){this.type=1,this._$AH=me,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=me}_$AI(t,r=this,s,n){const o=this.strings;let a=!1;if(o===void 0)t=or(this,t,r,0),a=!Pr(t)||t!==this._$AH&&t!==Gn,a&&(this._$AH=t);else{const c=t;let u,p;for(t=o[0],u=0;u<o.length-1;u++)p=or(this,c[s+u],r,u),p===Gn&&(p=this._$AH[u]),a||=!Pr(p)||p!==this._$AH[u],p===me?t=me:t!==me&&(t+=(p??"")+o[u+1]),this._$AH[u]=p}a&&!n&&this.j(t)}j(t){t===me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class yd extends Rs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===me?void 0:t}}class wd extends Rs{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==me)}}class vd extends Rs{constructor(t,r,s,n,o){super(t,r,s,n,o),this.type=5}_$AI(t,r=this){if((t=or(this,t,r,0)??me)===Gn)return;const s=this._$AH,n=t===me&&s!==me||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==me&&(s===me||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class xd{constructor(t,r,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){or(this,t)}}const $d=Zi.litHtmlPolyfillSupport;$d?.(Ir,Or),(Zi.litHtmlVersions??=[]).push("3.3.3");const kd=(e,t,r)=>{const s=r?.renderBefore??t;let n=s._$litPart$;if(n===void 0){const o=r?.renderBefore??null;s._$litPart$=n=new Or(t.insertBefore(Ar(),o),o,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const to=globalThis;let Ne=class extends sr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kd(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Gn}};Ne._$litElement$=!0,Ne.finalized=!0,to.litElementHydrateSupport?.({LitElement:Ne});const Cd=to.litElementPolyfillSupport;Cd?.({LitElement:Ne});(to.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ed={attribute:!0,type:String,converter:ys,reflect:!1,hasChanged:Ji},Sd=(e=Ed,t,r)=>{const{kind:s,metadata:n}=r;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),s==="accessor"){const{name:a}=r;return{set(c){const u=t.get.call(this);t.set.call(this,c),this.requestUpdate(a,u,e,!0,c)},init(c){return c!==void 0&&this.C(a,void 0,e,c),c}}}if(s==="setter"){const{name:a}=r;return function(c){const u=this[a];t.call(this,c),this.requestUpdate(a,u,e,!0,c)}}throw Error("Unsupported decorator location: "+s)};function Mt(e){return(t,r)=>typeof r=="object"?Sd(e,t,r):((s,n,o)=>{const a=n.hasOwnProperty(o);return n.constructor.createProperty(o,s),a?Object.getOwnPropertyDescriptor(n,o):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function q(e){return Mt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _d=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fn(e,t){return(r,s,n)=>{const o=a=>a.renderRoot?.querySelector(e)??null;return _d(r,s,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Td={CHILD:2},hl=e=>(...t)=>({_$litDirective$:e,values:t});class Ad{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,s){this._$Ct=t,this._$AM=r,this._$Ci=s}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class vs extends Ad{constructor(t){if(super(t),this.it=me,t.type!==Td.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===me||t==null)return this._t=void 0,this.it=t;if(t===Gn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}vs.directiveName="unsafeHTML",vs.resultType=1;const ir=hl(vs);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Di extends vs{}Di.directiveName="unsafeSVG",Di.resultType=2;const no=hl(Di);var Pd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Id(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bs={exports:{}},Rd=bs.exports,oa;function Dd(){return oa||(oa=1,(function(e,t){(function(r,s){e.exports=s()})(Rd,function(){var r=function(i,l){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,h){d.__proto__=h}||function(d,h){for(var f in h)Object.prototype.hasOwnProperty.call(h,f)&&(d[f]=h[f])})(i,l)},s=function(){return(s=Object.assign||function(i){for(var l,d=1,h=arguments.length;d<h;d++)for(var f in l=arguments[d])Object.prototype.hasOwnProperty.call(l,f)&&(i[f]=l[f]);return i}).apply(this,arguments)};function n(i,l,d){for(var h,f=0,m=l.length;f<m;f++)!h&&f in l||((h=h||Array.prototype.slice.call(l,0,f))[f]=l[f]);return i.concat(h||Array.prototype.slice.call(l))}var o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Pd,a=Object.keys,c=Array.isArray;function u(i,l){return typeof l!="object"||a(l).forEach(function(d){i[d]=l[d]}),i}typeof Promise>"u"||o.Promise||(o.Promise=Promise);var p=Object.getPrototypeOf,x={}.hasOwnProperty;function y(i,l){return x.call(i,l)}function $(i,l){typeof l=="function"&&(l=l(p(i))),(typeof Reflect>"u"?a:Reflect.ownKeys)(l).forEach(function(d){F(i,d,l[d])})}var B=Object.defineProperty;function F(i,l,d,h){B(i,l,u(d&&y(d,"get")&&typeof d.get=="function"?{get:d.get,set:d.set,configurable:!0}:{value:d,configurable:!0,writable:!0},h))}function L(i){return{from:function(l){return i.prototype=Object.create(l.prototype),F(i.prototype,"constructor",i),{extend:$.bind(null,i.prototype)}}}}var H=Object.getOwnPropertyDescriptor,G=[].slice;function ue(i,l,d){return G.call(i,l,d)}function ie(i,l){return l(i)}function oe(i){if(!i)throw new Error("Assertion Failed")}function V(i){o.setImmediate?setImmediate(i):setTimeout(i,0)}function J(i,l){if(typeof l=="string"&&y(i,l))return i[l];if(!l)return i;if(typeof l!="string"){for(var d=[],h=0,f=l.length;h<f;++h){var m=J(i,l[h]);d.push(m)}return d}var w=l.indexOf(".");if(w!==-1){var C=i[l.substr(0,w)];return C==null?void 0:J(C,l.substr(w+1))}}function he(i,l,d){if(i&&l!==void 0&&!("isFrozen"in Object&&Object.isFrozen(i)))if(typeof l!="string"&&"length"in l){oe(typeof d!="string"&&"length"in d);for(var h=0,f=l.length;h<f;++h)he(i,l[h],d[h])}else{var m,w,C=l.indexOf(".");C!==-1?(m=l.substr(0,C),(w=l.substr(C+1))===""?d===void 0?c(i)&&!isNaN(parseInt(m))?i.splice(m,1):delete i[m]:i[m]=d:he(C=!(C=i[m])||!y(i,m)?i[m]={}:C,w,d)):d===void 0?c(i)&&!isNaN(parseInt(l))?i.splice(l,1):delete i[l]:i[l]=d}}function $e(i){var l,d={};for(l in i)y(i,l)&&(d[l]=i[l]);return d}var Te=[].concat;function Ie(i){return Te.apply([],i)}var gn="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Ie([8,16,32,64].map(function(i){return["Int","Uint","Float"].map(function(l){return l+i+"Array"})}))).filter(function(i){return o[i]}),g=new Set(gn.map(function(i){return o[i]})),v=null;function S(i){return v=new WeakMap,i=(function l(d){if(!d||typeof d!="object")return d;var h=v.get(d);if(h)return h;if(c(d)){h=[],v.set(d,h);for(var f=0,m=d.length;f<m;++f)h.push(l(d[f]))}else if(g.has(d.constructor))h=d;else{var w,C=p(d);for(w in h=C===Object.prototype?{}:Object.create(C),v.set(d,h),d)y(d,w)&&(h[w]=l(d[w]))}return h})(i),v=null,i}var b={}.toString;function k(i){return b.call(i).slice(8,-1)}var ne=typeof Symbol<"u"?Symbol.iterator:"@@iterator",pe=typeof ne=="symbol"?function(i){var l;return i!=null&&(l=i[ne])&&l.apply(i)}:function(){return null};function K(i,l){return l=i.indexOf(l),0<=l&&i.splice(l,1),0<=l}var Q={};function Xe(i){var l,d,h,f;if(arguments.length===1){if(c(i))return i.slice();if(this===Q&&typeof i=="string")return[i];if(f=pe(i)){for(d=[];!(h=f.next()).done;)d.push(h.value);return d}if(i==null)return[i];if(typeof(l=i.length)!="number")return[i];for(d=new Array(l);l--;)d[l]=i[l];return d}for(l=arguments.length,d=new Array(l);l--;)d[l]=arguments[l];return d}var ct=typeof Symbol<"u"?function(i){return i[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Ae=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Nt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Ae),on={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function We(i,l){this.name=i,this.message=l}function Me(i,l){return i+". Errors: "+Object.keys(l).map(function(d){return l[d].toString()}).filter(function(d,h,f){return f.indexOf(d)===h}).join(`
`)}function Se(i,l,d,h){this.failures=l,this.failedKeys=h,this.successCount=d,this.message=Me(i,l)}function Oe(i,l){this.name="BulkError",this.failures=Object.keys(l).map(function(d){return l[d]}),this.failuresByPos=l,this.message=Me(i,this.failures)}L(We).from(Error).extend({toString:function(){return this.name+": "+this.message}}),L(Se).from(We),L(Oe).from(We);var Qe=Nt.reduce(function(i,l){return i[l]=l+"Error",i},{}),Re=We,ae=Nt.reduce(function(i,l){var d=l+"Error";function h(f,m){this.name=d,f?typeof f=="string"?(this.message="".concat(f).concat(m?`
 `+m:""),this.inner=m||null):typeof f=="object"&&(this.message="".concat(f.name," ").concat(f.message),this.inner=f):(this.message=on[l]||d,this.inner=null)}return L(h).from(Re),i[l]=h,i},{});ae.Syntax=SyntaxError,ae.Type=TypeError,ae.Range=RangeError;var Je=Ae.reduce(function(i,l){return i[l+"Error"]=ae[l],i},{}),Be=Nt.reduce(function(i,l){return["Syntax","Type","Range"].indexOf(l)===-1&&(i[l+"Error"]=ae[l]),i},{});function ye(){}function ke(i){return i}function Pt(i,l){return i==null||i===ke?l:function(d){return l(i(d))}}function fe(i,l){return function(){i.apply(this,arguments),l.apply(this,arguments)}}function Ze(i,l){return i===ye?l:function(){var d=i.apply(this,arguments);d!==void 0&&(arguments[0]=d);var h=this.onsuccess,f=this.onerror;this.onsuccess=null,this.onerror=null;var m=l.apply(this,arguments);return h&&(this.onsuccess=this.onsuccess?fe(h,this.onsuccess):h),f&&(this.onerror=this.onerror?fe(f,this.onerror):f),m!==void 0?m:d}}function xn(i,l){return i===ye?l:function(){i.apply(this,arguments);var d=this.onsuccess,h=this.onerror;this.onsuccess=this.onerror=null,l.apply(this,arguments),d&&(this.onsuccess=this.onsuccess?fe(d,this.onsuccess):d),h&&(this.onerror=this.onerror?fe(h,this.onerror):h)}}function tn(i,l){return i===ye?l:function(d){var h=i.apply(this,arguments);u(d,h);var f=this.onsuccess,m=this.onerror;return this.onsuccess=null,this.onerror=null,d=l.apply(this,arguments),f&&(this.onsuccess=this.onsuccess?fe(f,this.onsuccess):f),m&&(this.onerror=this.onerror?fe(m,this.onerror):m),h===void 0?d===void 0?void 0:d:u(h,d)}}function nt(i,l){return i===ye?l:function(){return l.apply(this,arguments)!==!1&&i.apply(this,arguments)}}function It(i,l){return i===ye?l:function(){var d=i.apply(this,arguments);if(d&&typeof d.then=="function"){for(var h=this,f=arguments.length,m=new Array(f);f--;)m[f]=arguments[f];return d.then(function(){return l.apply(h,m)})}return l.apply(this,arguments)}}Be.ModifyError=Se,Be.DexieError=We,Be.BulkError=Oe;var Le=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ke(i){Le=i}var kt={},st=100,gn=typeof Promise>"u"?[]:(function(){var i=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[i,p(i),i];var l=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[l,p(l),i]})(),Ae=gn[0],Nt=gn[1],gn=gn[2],Nt=Nt&&Nt.then,_e=Ae&&Ae.constructor,Rt=!!gn,Ve=function(i,l){ot.push([i,l]),ht&&(queueMicrotask(we),ht=!1)},yt=!0,ht=!0,it=[],Ue=[],ge=ke,et={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ye,pgp:!1,env:{},finalize:ye},ee=et,ot=[],pt=0,St=[];function te(i){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var l=this._PSD=ee;if(typeof i!="function"){if(i!==kt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&ft(this,this._value))}this._state=null,this._value=null,++l.ref,(function d(h,f){try{f(function(m){if(h._state===null){if(m===h)throw new TypeError("A promise cannot be resolved with itself.");var w=h._lib&&Fe();m&&typeof m.then=="function"?d(h,function(C,_){m instanceof te?m._then(C,_):m.then(C,_)}):(h._state=!0,h._value=m,$n(h)),w&&Ge()}},ft.bind(null,h))}catch(m){ft(h,m)}})(this,i)}var an={get:function(){var i=ee,l=Wr;function d(h,f){var m=this,w=!i.global&&(i!==ee||l!==Wr),C=w&&!Cn(),_=new te(function(P,D){ce(m,new pn(vo(h,i,w,C),vo(f,i,w,C),P,D,i))});return this._consoleTask&&(_._consoleTask=this._consoleTask),_}return d.prototype=kt,d},set:function(i){F(this,"then",i&&i.prototype===kt?an:{get:function(){return i},set:an.set})}};function pn(i,l,d,h,f){this.onFulfilled=typeof i=="function"?i:null,this.onRejected=typeof l=="function"?l:null,this.resolve=d,this.reject=h,this.psd=f}function ft(i,l){var d,h;Ue.push(l),i._state===null&&(d=i._lib&&Fe(),l=ge(l),i._state=!1,i._value=l,h=i,it.some(function(f){return f._value===h._value})||it.push(h),$n(i),d&&Ge())}function $n(i){var l=i._listeners;i._listeners=[];for(var d=0,h=l.length;d<h;++d)ce(i,l[d]);var f=i._PSD;--f.ref||f.finalize(),pt===0&&(++pt,Ve(function(){--pt==0&&je()},[]))}function ce(i,l){if(i._state!==null){var d=i._state?l.onFulfilled:l.onRejected;if(d===null)return(i._state?l.resolve:l.reject)(i._value);++l.psd.ref,++pt,Ve(De,[d,i,l])}else i._listeners.push(l)}function De(i,l,d){try{var h,f=l._value;!l._state&&Ue.length&&(Ue=[]),h=Le&&l._consoleTask?l._consoleTask.run(function(){return i(f)}):i(f),l._state||Ue.indexOf(f)!==-1||(function(m){for(var w=it.length;w;)if(it[--w]._value===m._value)return it.splice(w,1)})(l),d.resolve(h)}catch(m){d.reject(m)}finally{--pt==0&&je(),--d.psd.ref||d.psd.finalize()}}function we(){Ln(et,function(){Fe()&&Ge()})}function Fe(){var i=yt;return ht=yt=!1,i}function Ge(){var i,l,d;do for(;0<ot.length;)for(i=ot,ot=[],d=i.length,l=0;l<d;++l){var h=i[l];h[0].apply(null,h[1])}while(0<ot.length);ht=yt=!0}function je(){var i=it;it=[],i.forEach(function(h){h._PSD.onunhandled.call(null,h._value,h)});for(var l=St.slice(0),d=l.length;d;)l[--d]()}function nn(i){return new te(kt,!1,i)}function He(i,l){var d=ee;return function(){var h=Fe(),f=ee;try{return En(d,!0),i.apply(this,arguments)}catch(m){l&&l(m)}finally{En(f,!1),h&&Ge()}}}$(te.prototype,{then:an,_then:function(i,l){ce(this,new pn(null,null,i,l,ee))},catch:function(i){if(arguments.length===1)return this.then(null,i);var l=i,d=arguments[1];return typeof l=="function"?this.then(null,function(h){return(h instanceof l?d:nn)(h)}):this.then(null,function(h){return(h&&h.name===l?d:nn)(h)})},finally:function(i){return this.then(function(l){return te.resolve(i()).then(function(){return l})},function(l){return te.resolve(i()).then(function(){return nn(l)})})},timeout:function(i,l){var d=this;return i<1/0?new te(function(h,f){var m=setTimeout(function(){return f(new ae.Timeout(l))},i);d.then(h,f).finally(clearTimeout.bind(null,m))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&F(te.prototype,Symbol.toStringTag,"Dexie.Promise"),et.env=wo(),$(te,{all:function(){var i=Xe.apply(null,arguments).map(Kr);return new te(function(l,d){i.length===0&&l([]);var h=i.length;i.forEach(function(f,m){return te.resolve(f).then(function(w){i[m]=w,--h||l(i)},d)})})},resolve:function(i){return i instanceof te?i:i&&typeof i.then=="function"?new te(function(l,d){i.then(l,d)}):new te(kt,!0,i)},reject:nn,race:function(){var i=Xe.apply(null,arguments).map(Kr);return new te(function(l,d){i.map(function(h){return te.resolve(h).then(l,d)})})},PSD:{get:function(){return ee},set:function(i){return ee=i}},totalEchoes:{get:function(){return Wr}},newPSD:kn,usePSD:Ln,scheduler:{get:function(){return Ve},set:function(i){Ve=i}},rejectionMapper:{get:function(){return ge},set:function(i){ge=i}},follow:function(i,l){return new te(function(d,h){return kn(function(f,m){var w=ee;w.unhandleds=[],w.onunhandled=m,w.finalize=fe(function(){var C,_=this;C=function(){_.unhandleds.length===0?f():m(_.unhandleds[0])},St.push(function P(){C(),St.splice(St.indexOf(P),1)}),++pt,Ve(function(){--pt==0&&je()},[])},w.finalize),i()},l,d,h)})}}),_e&&(_e.allSettled&&F(te,"allSettled",function(){var i=Xe.apply(null,arguments).map(Kr);return new te(function(l){i.length===0&&l([]);var d=i.length,h=new Array(d);i.forEach(function(f,m){return te.resolve(f).then(function(w){return h[m]={status:"fulfilled",value:w}},function(w){return h[m]={status:"rejected",reason:w}}).then(function(){return--d||l(h)})})})}),_e.any&&typeof AggregateError<"u"&&F(te,"any",function(){var i=Xe.apply(null,arguments).map(Kr);return new te(function(l,d){i.length===0&&d(new AggregateError([]));var h=i.length,f=new Array(h);i.forEach(function(m,w){return te.resolve(m).then(function(C){return l(C)},function(C){f[w]=C,--h||d(new AggregateError(f))})})})}),_e.withResolvers&&(te.withResolvers=_e.withResolvers));var mt={awaits:0,echoes:0,id:0},Rc=0,Hr=[],qr=0,Wr=0,Dc=0;function kn(i,l,d,h){var f=ee,m=Object.create(f);return m.parent=f,m.ref=0,m.global=!1,m.id=++Dc,et.env,m.env=Rt?{Promise:te,PromiseProp:{value:te,configurable:!0,writable:!0},all:te.all,race:te.race,allSettled:te.allSettled,any:te.any,resolve:te.resolve,reject:te.reject}:{},l&&u(m,l),++f.ref,m.finalize=function(){--this.parent.ref||this.parent.finalize()},h=Ln(m,i,d,h),m.ref===0&&m.finalize(),h}function Jn(){return mt.id||(mt.id=++Rc),++mt.awaits,mt.echoes+=st,mt.id}function Cn(){return!!mt.awaits&&(--mt.awaits==0&&(mt.id=0),mt.echoes=mt.awaits*st,!0)}function Kr(i){return mt.echoes&&i&&i.constructor===_e?(Jn(),i.then(function(l){return Cn(),l},function(l){return Cn(),at(l)})):i}function Oc(){var i=Hr[Hr.length-1];Hr.pop(),En(i,!1)}function En(i,l){var d,h=ee;(l?!mt.echoes||qr++&&i===ee:!qr||--qr&&i===ee)||queueMicrotask(l?function(f){++Wr,mt.echoes&&--mt.echoes!=0||(mt.echoes=mt.awaits=mt.id=0),Hr.push(ee),En(f,!0)}.bind(null,i):Oc),i!==ee&&(ee=i,h===et&&(et.env=wo()),Rt&&(d=et.env.Promise,l=i.env,(h.global||i.global)&&(Object.defineProperty(o,"Promise",l.PromiseProp),d.all=l.all,d.race=l.race,d.resolve=l.resolve,d.reject=l.reject,l.allSettled&&(d.allSettled=l.allSettled),l.any&&(d.any=l.any))))}function wo(){var i=o.Promise;return Rt?{Promise:i,PromiseProp:Object.getOwnPropertyDescriptor(o,"Promise"),all:i.all,race:i.race,allSettled:i.allSettled,any:i.any,resolve:i.resolve,reject:i.reject}:{}}function Ln(i,l,d,h,f){var m=ee;try{return En(i,!0),l(d,h,f)}finally{En(m,!1)}}function vo(i,l,d,h){return typeof i!="function"?i:function(){var f=ee;d&&Jn(),En(l,!0);try{return i.apply(this,arguments)}finally{En(f,!1),h&&queueMicrotask(Cn)}}}function qs(i){Promise===_e&&mt.echoes===0?qr===0?i():enqueueNativeMicroTask(i):setTimeout(i,0)}(""+Nt).indexOf("[native code]")===-1&&(Jn=Cn=ye);var at=te.reject,Fn="￿",mn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",xo="String expected.",Zn=[],Vr="__dbnames",Ws="readonly",Ks="readwrite";function Mn(i,l){return i?l?function(){return i.apply(this,arguments)&&l.apply(this,arguments)}:i:l}var $o={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Gr(i){return typeof i!="string"||/\./.test(i)?function(l){return l}:function(l){return l[i]===void 0&&i in l&&delete(l=S(l))[i],l}}function ko(){throw ae.Type()}function Pe(i,l){try{var d=Co(i),h=Co(l);if(d!==h)return d==="Array"?1:h==="Array"?-1:d==="binary"?1:h==="binary"?-1:d==="string"?1:h==="string"?-1:d==="Date"?1:h!=="Date"?NaN:-1;switch(d){case"number":case"Date":case"string":return l<i?1:i<l?-1:0;case"binary":return(function(f,m){for(var w=f.length,C=m.length,_=w<C?w:C,P=0;P<_;++P)if(f[P]!==m[P])return f[P]<m[P]?-1:1;return w===C?0:w<C?-1:1})(Eo(i),Eo(l));case"Array":return(function(f,m){for(var w=f.length,C=m.length,_=w<C?w:C,P=0;P<_;++P){var D=Pe(f[P],m[P]);if(D!==0)return D}return w===C?0:w<C?-1:1})(i,l)}}catch{}return NaN}function Co(i){var l=typeof i;return l!="object"?l:ArrayBuffer.isView(i)?"binary":(i=k(i),i==="ArrayBuffer"?"binary":i)}function Eo(i){return i instanceof Uint8Array?i:ArrayBuffer.isView(i)?new Uint8Array(i.buffer,i.byteOffset,i.byteLength):new Uint8Array(i)}var So=(Ye.prototype._trans=function(i,l,d){var h=this._tx||ee.trans,f=this.name,m=Le&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(i==="readonly"?"read":"write"," ").concat(this.name));function w(P,D,E){if(!E.schema[f])throw new ae.NotFound("Table "+f+" not part of transaction");return l(E.idbtrans,E)}var C=Fe();try{var _=h&&h.db._novip===this.db._novip?h===ee.trans?h._promise(i,w,d):kn(function(){return h._promise(i,w,d)},{trans:h,transless:ee.transless||ee}):(function P(D,E,j,T){if(D.idbdb&&(D._state.openComplete||ee.letThrough||D._vip)){var R=D._createTransaction(E,j,D._dbSchema);try{R.create(),D._state.PR1398_maxLoop=3}catch(O){return O.name===Qe.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return P(D,E,j,T)})):at(O)}return R._promise(E,function(O,I){return kn(function(){return ee.trans=R,T(O,I,R)})}).then(function(O){if(E==="readwrite")try{R.idbtrans.commit()}catch{}return E==="readonly"?O:R._completion.then(function(){return O})})}if(D._state.openComplete)return at(new ae.DatabaseClosed(D._state.dbOpenError));if(!D._state.isBeingOpened){if(!D._state.autoOpen)return at(new ae.DatabaseClosed);D.open().catch(ye)}return D._state.dbReadyPromise.then(function(){return P(D,E,j,T)})})(this.db,i,[this.name],w);return m&&(_._consoleTask=m,_=_.catch(function(P){return console.trace(P),at(P)})),_}finally{C&&Ge()}},Ye.prototype.get=function(i,l){var d=this;return i&&i.constructor===Object?this.where(i).first(l):i==null?at(new ae.Type("Invalid argument to Table.get()")):this._trans("readonly",function(h){return d.core.get({trans:h,key:i}).then(function(f){return d.hook.reading.fire(f)})}).then(l)},Ye.prototype.where=function(i){if(typeof i=="string")return new this.db.WhereClause(this,i);if(c(i))return new this.db.WhereClause(this,"[".concat(i.join("+"),"]"));var l=a(i);if(l.length===1)return this.where(l[0]).equals(i[l[0]]);var d=this.schema.indexes.concat(this.schema.primKey).filter(function(C){if(C.compound&&l.every(function(P){return 0<=C.keyPath.indexOf(P)})){for(var _=0;_<l.length;++_)if(l.indexOf(C.keyPath[_])===-1)return!1;return!0}return!1}).sort(function(C,_){return C.keyPath.length-_.keyPath.length})[0];if(d&&this.db._maxKey!==Fn){var m=d.keyPath.slice(0,l.length);return this.where(m).equals(m.map(function(_){return i[_]}))}!d&&Le&&console.warn("The query ".concat(JSON.stringify(i)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(l.join("+"),"]"));var h=this.schema.idxByName;function f(C,_){return Pe(C,_)===0}var w=l.reduce(function(E,_){var P=E[0],D=E[1],E=h[_],j=i[_];return[P||E,P||!E?Mn(D,E&&E.multi?function(T){return T=J(T,_),c(T)&&T.some(function(R){return f(j,R)})}:function(T){return f(j,J(T,_))}):D]},[null,null]),m=w[0],w=w[1];return m?this.where(m.name).equals(i[m.keyPath]).filter(w):d?this.filter(w):this.where(l).equals("")},Ye.prototype.filter=function(i){return this.toCollection().and(i)},Ye.prototype.count=function(i){return this.toCollection().count(i)},Ye.prototype.offset=function(i){return this.toCollection().offset(i)},Ye.prototype.limit=function(i){return this.toCollection().limit(i)},Ye.prototype.each=function(i){return this.toCollection().each(i)},Ye.prototype.toArray=function(i){return this.toCollection().toArray(i)},Ye.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ye.prototype.orderBy=function(i){return new this.db.Collection(new this.db.WhereClause(this,c(i)?"[".concat(i.join("+"),"]"):i))},Ye.prototype.reverse=function(){return this.toCollection().reverse()},Ye.prototype.mapToClass=function(i){var l,d=this.db,h=this.name;function f(){return l!==null&&l.apply(this,arguments)||this}(this.schema.mappedClass=i).prototype instanceof ko&&((function(_,P){if(typeof P!="function"&&P!==null)throw new TypeError("Class extends value "+String(P)+" is not a constructor or null");function D(){this.constructor=_}r(_,P),_.prototype=P===null?Object.create(P):(D.prototype=P.prototype,new D)})(f,l=i),Object.defineProperty(f.prototype,"db",{get:function(){return d},enumerable:!1,configurable:!0}),f.prototype.table=function(){return h},i=f);for(var m=new Set,w=i.prototype;w;w=p(w))Object.getOwnPropertyNames(w).forEach(function(_){return m.add(_)});function C(_){if(!_)return _;var P,D=Object.create(i.prototype);for(P in _)if(!m.has(P))try{D[P]=_[P]}catch{}return D}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=C,this.hook("reading",C),i},Ye.prototype.defineClass=function(){return this.mapToClass(function(i){u(this,i)})},Ye.prototype.add=function(i,l){var d=this,h=this.schema.primKey,f=h.auto,m=h.keyPath,w=i;return m&&f&&(w=Gr(m)(i)),this._trans("readwrite",function(C){return d.core.mutate({trans:C,type:"add",keys:l!=null?[l]:null,values:[w]})}).then(function(C){return C.numFailures?te.reject(C.failures[0]):C.lastResult}).then(function(C){if(m)try{he(i,m,C)}catch{}return C})},Ye.prototype.update=function(i,l){return typeof i!="object"||c(i)?this.where(":id").equals(i).modify(l):(i=J(i,this.schema.primKey.keyPath),i===void 0?at(new ae.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(i).modify(l))},Ye.prototype.put=function(i,l){var d=this,h=this.schema.primKey,f=h.auto,m=h.keyPath,w=i;return m&&f&&(w=Gr(m)(i)),this._trans("readwrite",function(C){return d.core.mutate({trans:C,type:"put",values:[w],keys:l!=null?[l]:null})}).then(function(C){return C.numFailures?te.reject(C.failures[0]):C.lastResult}).then(function(C){if(m)try{he(i,m,C)}catch{}return C})},Ye.prototype.delete=function(i){var l=this;return this._trans("readwrite",function(d){return l.core.mutate({trans:d,type:"delete",keys:[i]})}).then(function(d){return d.numFailures?te.reject(d.failures[0]):void 0})},Ye.prototype.clear=function(){var i=this;return this._trans("readwrite",function(l){return i.core.mutate({trans:l,type:"deleteRange",range:$o})}).then(function(l){return l.numFailures?te.reject(l.failures[0]):void 0})},Ye.prototype.bulkGet=function(i){var l=this;return this._trans("readonly",function(d){return l.core.getMany({keys:i,trans:d}).then(function(h){return h.map(function(f){return l.hook.reading.fire(f)})})})},Ye.prototype.bulkAdd=function(i,l,d){var h=this,f=Array.isArray(l)?l:void 0,m=(d=d||(f?void 0:l))?d.allKeys:void 0;return this._trans("readwrite",function(w){var P=h.schema.primKey,C=P.auto,P=P.keyPath;if(P&&f)throw new ae.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(f&&f.length!==i.length)throw new ae.InvalidArgument("Arguments objects and keys must have the same length");var _=i.length,P=P&&C?i.map(Gr(P)):i;return h.core.mutate({trans:w,type:"add",keys:f,values:P,wantResults:m}).then(function(R){var E=R.numFailures,j=R.results,T=R.lastResult,R=R.failures;if(E===0)return m?j:T;throw new Oe("".concat(h.name,".bulkAdd(): ").concat(E," of ").concat(_," operations failed"),R)})})},Ye.prototype.bulkPut=function(i,l,d){var h=this,f=Array.isArray(l)?l:void 0,m=(d=d||(f?void 0:l))?d.allKeys:void 0;return this._trans("readwrite",function(w){var P=h.schema.primKey,C=P.auto,P=P.keyPath;if(P&&f)throw new ae.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(f&&f.length!==i.length)throw new ae.InvalidArgument("Arguments objects and keys must have the same length");var _=i.length,P=P&&C?i.map(Gr(P)):i;return h.core.mutate({trans:w,type:"put",keys:f,values:P,wantResults:m}).then(function(R){var E=R.numFailures,j=R.results,T=R.lastResult,R=R.failures;if(E===0)return m?j:T;throw new Oe("".concat(h.name,".bulkPut(): ").concat(E," of ").concat(_," operations failed"),R)})})},Ye.prototype.bulkUpdate=function(i){var l=this,d=this.core,h=i.map(function(w){return w.key}),f=i.map(function(w){return w.changes}),m=[];return this._trans("readwrite",function(w){return d.getMany({trans:w,keys:h,cache:"clone"}).then(function(C){var _=[],P=[];i.forEach(function(E,j){var T=E.key,R=E.changes,O=C[j];if(O){for(var I=0,M=Object.keys(R);I<M.length;I++){var N=M[I],U=R[N];if(N===l.schema.primKey.keyPath){if(Pe(U,T)!==0)throw new ae.Constraint("Cannot update primary key in bulkUpdate()")}else he(O,N,U)}m.push(j),_.push(T),P.push(O)}});var D=_.length;return d.mutate({trans:w,type:"put",keys:_,values:P,updates:{keys:h,changeSpecs:f}}).then(function(E){var j=E.numFailures,T=E.failures;if(j===0)return D;for(var R=0,O=Object.keys(T);R<O.length;R++){var I,M=O[R],N=m[Number(M)];N!=null&&(I=T[M],delete T[M],T[N]=I)}throw new Oe("".concat(l.name,".bulkUpdate(): ").concat(j," of ").concat(D," operations failed"),T)})})})},Ye.prototype.bulkDelete=function(i){var l=this,d=i.length;return this._trans("readwrite",function(h){return l.core.mutate({trans:h,type:"delete",keys:i})}).then(function(w){var f=w.numFailures,m=w.lastResult,w=w.failures;if(f===0)return m;throw new Oe("".concat(l.name,".bulkDelete(): ").concat(f," of ").concat(d," operations failed"),w)})},Ye);function Ye(){}function gr(i){function l(w,C){if(C){for(var _=arguments.length,P=new Array(_-1);--_;)P[_-1]=arguments[_];return d[w].subscribe.apply(null,P),i}if(typeof w=="string")return d[w]}var d={};l.addEventType=m;for(var h=1,f=arguments.length;h<f;++h)m(arguments[h]);return l;function m(w,C,_){if(typeof w!="object"){var P;C=C||nt;var D={subscribers:[],fire:_=_||ye,subscribe:function(E){D.subscribers.indexOf(E)===-1&&(D.subscribers.push(E),D.fire=C(D.fire,E))},unsubscribe:function(E){D.subscribers=D.subscribers.filter(function(j){return j!==E}),D.fire=D.subscribers.reduce(C,_)}};return d[w]=l[w]=D}a(P=w).forEach(function(E){var j=P[E];if(c(j))m(E,P[E][0],P[E][1]);else{if(j!=="asap")throw new ae.InvalidArgument("Invalid event config");var T=m(E,ke,function(){for(var R=arguments.length,O=new Array(R);R--;)O[R]=arguments[R];T.subscribers.forEach(function(I){V(function(){I.apply(null,O)})})})}})}}function br(i,l){return L(l).from({prototype:i}),l}function er(i,l){return!(i.filter||i.algorithm||i.or)&&(l?i.justLimit:!i.replayFilter)}function Vs(i,l){i.filter=Mn(i.filter,l)}function Gs(i,l,d){var h=i.replayFilter;i.replayFilter=h?function(){return Mn(h(),l())}:l,i.justLimit=d&&!h}function Yr(i,l){if(i.isPrimKey)return l.primaryKey;var d=l.getIndexByKeyPath(i.index);if(!d)throw new ae.Schema("KeyPath "+i.index+" on object store "+l.name+" is not indexed");return d}function _o(i,l,d){var h=Yr(i,l.schema);return l.openCursor({trans:d,values:!i.keysOnly,reverse:i.dir==="prev",unique:!!i.unique,query:{index:h,range:i.range}})}function Xr(i,l,d,h){var f=i.replayFilter?Mn(i.filter,i.replayFilter()):i.filter;if(i.or){var m={},w=function(C,_,P){var D,E;f&&!f(_,P,function(j){return _.stop(j)},function(j){return _.fail(j)})||((E=""+(D=_.primaryKey))=="[object ArrayBuffer]"&&(E=""+new Uint8Array(D)),y(m,E)||(m[E]=!0,l(C,_,P)))};return Promise.all([i.or._iterate(w,d),To(_o(i,h,d),i.algorithm,w,!i.keysOnly&&i.valueMapper)])}return To(_o(i,h,d),Mn(i.algorithm,f),l,!i.keysOnly&&i.valueMapper)}function To(i,l,d,h){var f=He(h?function(m,w,C){return d(h(m),w,C)}:d);return i.then(function(m){if(m)return m.start(function(){var w=function(){return m.continue()};l&&!l(m,function(C){return w=C},function(C){m.stop(C),w=ye},function(C){m.fail(C),w=ye})||f(m.value,m,function(C){return w=C}),w()})})}var gn=Symbol(),yr=(Ao.prototype.execute=function(i){if(this.add!==void 0){var l=this.add;if(c(l))return n(n([],c(i)?i:[],!0),l).sort();if(typeof l=="number")return(Number(i)||0)+l;if(typeof l=="bigint")try{return BigInt(i)+l}catch{return BigInt(0)+l}throw new TypeError("Invalid term ".concat(l))}if(this.remove!==void 0){var d=this.remove;if(c(d))return c(i)?i.filter(function(h){return!d.includes(h)}).sort():[];if(typeof d=="number")return Number(i)-d;if(typeof d=="bigint")try{return BigInt(i)-d}catch{return BigInt(0)-d}throw new TypeError("Invalid subtrahend ".concat(d))}return l=(l=this.replacePrefix)===null||l===void 0?void 0:l[0],l&&typeof i=="string"&&i.startsWith(l)?this.replacePrefix[1]+i.substring(l.length):i},Ao);function Ao(i){Object.assign(this,i)}var jc=(ze.prototype._read=function(i,l){var d=this._ctx;return d.error?d.table._trans(null,at.bind(null,d.error)):d.table._trans("readonly",i).then(l)},ze.prototype._write=function(i){var l=this._ctx;return l.error?l.table._trans(null,at.bind(null,l.error)):l.table._trans("readwrite",i,"locked")},ze.prototype._addAlgorithm=function(i){var l=this._ctx;l.algorithm=Mn(l.algorithm,i)},ze.prototype._iterate=function(i,l){return Xr(this._ctx,i,l,this._ctx.table.core)},ze.prototype.clone=function(i){var l=Object.create(this.constructor.prototype),d=Object.create(this._ctx);return i&&u(d,i),l._ctx=d,l},ze.prototype.raw=function(){return this._ctx.valueMapper=null,this},ze.prototype.each=function(i){var l=this._ctx;return this._read(function(d){return Xr(l,i,d,l.table.core)})},ze.prototype.count=function(i){var l=this;return this._read(function(d){var h=l._ctx,f=h.table.core;if(er(h,!0))return f.count({trans:d,query:{index:Yr(h,f.schema),range:h.range}}).then(function(w){return Math.min(w,h.limit)});var m=0;return Xr(h,function(){return++m,!1},d,f).then(function(){return m})}).then(i)},ze.prototype.sortBy=function(i,l){var d=i.split(".").reverse(),h=d[0],f=d.length-1;function m(_,P){return P?m(_[d[P]],P-1):_[h]}var w=this._ctx.dir==="next"?1:-1;function C(_,P){return Pe(m(_,f),m(P,f))*w}return this.toArray(function(_){return _.sort(C)}).then(l)},ze.prototype.toArray=function(i){var l=this;return this._read(function(d){var h=l._ctx;if(h.dir==="next"&&er(h,!0)&&0<h.limit){var f=h.valueMapper,m=Yr(h,h.table.core.schema);return h.table.core.query({trans:d,limit:h.limit,values:!0,query:{index:m,range:h.range}}).then(function(C){return C=C.result,f?C.map(f):C})}var w=[];return Xr(h,function(C){return w.push(C)},d,h.table.core).then(function(){return w})},i)},ze.prototype.offset=function(i){var l=this._ctx;return i<=0||(l.offset+=i,er(l)?Gs(l,function(){var d=i;return function(h,f){return d===0||(d===1?--d:f(function(){h.advance(d),d=0}),!1)}}):Gs(l,function(){var d=i;return function(){return--d<0}})),this},ze.prototype.limit=function(i){return this._ctx.limit=Math.min(this._ctx.limit,i),Gs(this._ctx,function(){var l=i;return function(d,h,f){return--l<=0&&h(f),0<=l}},!0),this},ze.prototype.until=function(i,l){return Vs(this._ctx,function(d,h,f){return!i(d.value)||(h(f),l)}),this},ze.prototype.first=function(i){return this.limit(1).toArray(function(l){return l[0]}).then(i)},ze.prototype.last=function(i){return this.reverse().first(i)},ze.prototype.filter=function(i){var l;return Vs(this._ctx,function(d){return i(d.value)}),(l=this._ctx).isMatch=Mn(l.isMatch,i),this},ze.prototype.and=function(i){return this.filter(i)},ze.prototype.or=function(i){return new this.db.WhereClause(this._ctx.table,i,this)},ze.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},ze.prototype.desc=function(){return this.reverse()},ze.prototype.eachKey=function(i){var l=this._ctx;return l.keysOnly=!l.isMatch,this.each(function(d,h){i(h.key,h)})},ze.prototype.eachUniqueKey=function(i){return this._ctx.unique="unique",this.eachKey(i)},ze.prototype.eachPrimaryKey=function(i){var l=this._ctx;return l.keysOnly=!l.isMatch,this.each(function(d,h){i(h.primaryKey,h)})},ze.prototype.keys=function(i){var l=this._ctx;l.keysOnly=!l.isMatch;var d=[];return this.each(function(h,f){d.push(f.key)}).then(function(){return d}).then(i)},ze.prototype.primaryKeys=function(i){var l=this._ctx;if(l.dir==="next"&&er(l,!0)&&0<l.limit)return this._read(function(h){var f=Yr(l,l.table.core.schema);return l.table.core.query({trans:h,values:!1,limit:l.limit,query:{index:f,range:l.range}})}).then(function(h){return h.result}).then(i);l.keysOnly=!l.isMatch;var d=[];return this.each(function(h,f){d.push(f.primaryKey)}).then(function(){return d}).then(i)},ze.prototype.uniqueKeys=function(i){return this._ctx.unique="unique",this.keys(i)},ze.prototype.firstKey=function(i){return this.limit(1).keys(function(l){return l[0]}).then(i)},ze.prototype.lastKey=function(i){return this.reverse().firstKey(i)},ze.prototype.distinct=function(){var i=this._ctx,i=i.index&&i.table.schema.idxByName[i.index];if(!i||!i.multi)return this;var l={};return Vs(this._ctx,function(f){var h=f.primaryKey.toString(),f=y(l,h);return l[h]=!0,!f}),this},ze.prototype.modify=function(i){var l=this,d=this._ctx;return this._write(function(h){var f,m,w;w=typeof i=="function"?i:(f=a(i),m=f.length,function(I){for(var M=!1,N=0;N<m;++N){var U=f[N],W=i[U],Y=J(I,U);W instanceof yr?(he(I,U,W.execute(Y)),M=!0):Y!==W&&(he(I,U,W),M=!0)}return M});var C=d.table.core,E=C.schema.primaryKey,_=E.outbound,P=E.extractKey,D=200,E=l.db._options.modifyChunkSize;E&&(D=typeof E=="object"?E[C.name]||E["*"]||200:E);function j(I,U){var N=U.failures,U=U.numFailures;R+=I-U;for(var W=0,Y=a(N);W<Y.length;W++){var se=Y[W];T.push(N[se])}}var T=[],R=0,O=[];return l.clone().primaryKeys().then(function(I){function M(U){var W=Math.min(D,I.length-U);return C.getMany({trans:h,keys:I.slice(U,U+W),cache:"immutable"}).then(function(Y){for(var se=[],X=[],Z=_?[]:null,le=[],re=0;re<W;++re){var de=Y[re],xe={value:S(de),primKey:I[U+re]};w.call(xe,xe.value,xe)!==!1&&(xe.value==null?le.push(I[U+re]):_||Pe(P(de),P(xe.value))===0?(X.push(xe.value),_&&Z.push(I[U+re])):(le.push(I[U+re]),se.push(xe.value)))}return Promise.resolve(0<se.length&&C.mutate({trans:h,type:"add",values:se}).then(function(Ce){for(var Ee in Ce.failures)le.splice(parseInt(Ee),1);j(se.length,Ce)})).then(function(){return(0<X.length||N&&typeof i=="object")&&C.mutate({trans:h,type:"put",keys:Z,values:X,criteria:N,changeSpec:typeof i!="function"&&i,isAdditionalChunk:0<U}).then(function(Ce){return j(X.length,Ce)})}).then(function(){return(0<le.length||N&&i===Ys)&&C.mutate({trans:h,type:"delete",keys:le,criteria:N,isAdditionalChunk:0<U}).then(function(Ce){return j(le.length,Ce)})}).then(function(){return I.length>U+W&&M(U+D)})})}var N=er(d)&&d.limit===1/0&&(typeof i!="function"||i===Ys)&&{index:d.index,range:d.range};return M(0).then(function(){if(0<T.length)throw new Se("Error modifying one or more objects",T,R,O);return I.length})})})},ze.prototype.delete=function(){var i=this._ctx,l=i.range;return er(i)&&(i.isPrimKey||l.type===3)?this._write(function(d){var h=i.table.core.schema.primaryKey,f=l;return i.table.core.count({trans:d,query:{index:h,range:f}}).then(function(m){return i.table.core.mutate({trans:d,type:"deleteRange",range:f}).then(function(w){var C=w.failures;if(w.lastResult,w.results,w=w.numFailures,w)throw new Se("Could not delete some values",Object.keys(C).map(function(_){return C[_]}),m-w);return m-w})})}):this.modify(Ys)},ze);function ze(){}var Ys=function(i,l){return l.value=null};function zc(i,l){return i<l?-1:i===l?0:1}function Lc(i,l){return l<i?-1:i===l?0:1}function Dt(i,l,d){return i=i instanceof Io?new i.Collection(i):i,i._ctx.error=new(d||TypeError)(l),i}function tr(i){return new i.Collection(i,function(){return Po("")}).limit(0)}function Qr(i,l,d,h){var f,m,w,C,_,P,D,E=d.length;if(!d.every(function(R){return typeof R=="string"}))return Dt(i,xo);function j(R){f=R==="next"?function(I){return I.toUpperCase()}:function(I){return I.toLowerCase()},m=R==="next"?function(I){return I.toLowerCase()}:function(I){return I.toUpperCase()},w=R==="next"?zc:Lc;var O=d.map(function(I){return{lower:m(I),upper:f(I)}}).sort(function(I,M){return w(I.lower,M.lower)});C=O.map(function(I){return I.upper}),_=O.map(function(I){return I.lower}),D=(P=R)==="next"?"":h}j("next"),i=new i.Collection(i,function(){return Sn(C[0],_[E-1]+h)}),i._ondirectionchange=function(R){j(R)};var T=0;return i._addAlgorithm(function(R,O,I){var M=R.key;if(typeof M!="string")return!1;var N=m(M);if(l(N,_,T))return!0;for(var U=null,W=T;W<E;++W){var Y=(function(se,X,Z,le,re,de){for(var xe=Math.min(se.length,le.length),Ce=-1,Ee=0;Ee<xe;++Ee){var Ot=X[Ee];if(Ot!==le[Ee])return re(se[Ee],Z[Ee])<0?se.substr(0,Ee)+Z[Ee]+Z.substr(Ee+1):re(se[Ee],le[Ee])<0?se.substr(0,Ee)+le[Ee]+Z.substr(Ee+1):0<=Ce?se.substr(0,Ce)+X[Ce]+Z.substr(Ce+1):null;re(se[Ee],Ot)<0&&(Ce=Ee)}return xe<le.length&&de==="next"?se+Z.substr(se.length):xe<se.length&&de==="prev"?se.substr(0,Z.length):Ce<0?null:se.substr(0,Ce)+le[Ce]+Z.substr(Ce+1)})(M,N,C[W],_[W],w,P);Y===null&&U===null?T=W+1:(U===null||0<w(U,Y))&&(U=Y)}return O(U!==null?function(){R.continue(U+D)}:I),!1}),i}function Sn(i,l,d,h){return{type:2,lower:i,upper:l,lowerOpen:d,upperOpen:h}}function Po(i){return{type:1,lower:i,upper:i}}var Io=(Object.defineProperty(gt.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),gt.prototype.between=function(i,l,d,h){d=d!==!1,h=h===!0;try{return 0<this._cmp(i,l)||this._cmp(i,l)===0&&(d||h)&&(!d||!h)?tr(this):new this.Collection(this,function(){return Sn(i,l,!d,!h)})}catch{return Dt(this,mn)}},gt.prototype.equals=function(i){return i==null?Dt(this,mn):new this.Collection(this,function(){return Po(i)})},gt.prototype.above=function(i){return i==null?Dt(this,mn):new this.Collection(this,function(){return Sn(i,void 0,!0)})},gt.prototype.aboveOrEqual=function(i){return i==null?Dt(this,mn):new this.Collection(this,function(){return Sn(i,void 0,!1)})},gt.prototype.below=function(i){return i==null?Dt(this,mn):new this.Collection(this,function(){return Sn(void 0,i,!1,!0)})},gt.prototype.belowOrEqual=function(i){return i==null?Dt(this,mn):new this.Collection(this,function(){return Sn(void 0,i)})},gt.prototype.startsWith=function(i){return typeof i!="string"?Dt(this,xo):this.between(i,i+Fn,!0,!0)},gt.prototype.startsWithIgnoreCase=function(i){return i===""?this.startsWith(i):Qr(this,function(l,d){return l.indexOf(d[0])===0},[i],Fn)},gt.prototype.equalsIgnoreCase=function(i){return Qr(this,function(l,d){return l===d[0]},[i],"")},gt.prototype.anyOfIgnoreCase=function(){var i=Xe.apply(Q,arguments);return i.length===0?tr(this):Qr(this,function(l,d){return d.indexOf(l)!==-1},i,"")},gt.prototype.startsWithAnyOfIgnoreCase=function(){var i=Xe.apply(Q,arguments);return i.length===0?tr(this):Qr(this,function(l,d){return d.some(function(h){return l.indexOf(h)===0})},i,Fn)},gt.prototype.anyOf=function(){var i=this,l=Xe.apply(Q,arguments),d=this._cmp;try{l.sort(d)}catch{return Dt(this,mn)}if(l.length===0)return tr(this);var h=new this.Collection(this,function(){return Sn(l[0],l[l.length-1])});h._ondirectionchange=function(m){d=m==="next"?i._ascending:i._descending,l.sort(d)};var f=0;return h._addAlgorithm(function(m,w,C){for(var _=m.key;0<d(_,l[f]);)if(++f===l.length)return w(C),!1;return d(_,l[f])===0||(w(function(){m.continue(l[f])}),!1)}),h},gt.prototype.notEqual=function(i){return this.inAnyRange([[-1/0,i],[i,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},gt.prototype.noneOf=function(){var i=Xe.apply(Q,arguments);if(i.length===0)return new this.Collection(this);try{i.sort(this._ascending)}catch{return Dt(this,mn)}var l=i.reduce(function(d,h){return d?d.concat([[d[d.length-1][1],h]]):[[-1/0,h]]},null);return l.push([i[i.length-1],this.db._maxKey]),this.inAnyRange(l,{includeLowers:!1,includeUppers:!1})},gt.prototype.inAnyRange=function(M,l){var d=this,h=this._cmp,f=this._ascending,m=this._descending,w=this._min,C=this._max;if(M.length===0)return tr(this);if(!M.every(function(N){return N[0]!==void 0&&N[1]!==void 0&&f(N[0],N[1])<=0}))return Dt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ae.InvalidArgument);var _=!l||l.includeLowers!==!1,P=l&&l.includeUppers===!0,D,E=f;function j(N,U){return E(N[0],U[0])}try{(D=M.reduce(function(N,U){for(var W=0,Y=N.length;W<Y;++W){var se=N[W];if(h(U[0],se[1])<0&&0<h(U[1],se[0])){se[0]=w(se[0],U[0]),se[1]=C(se[1],U[1]);break}}return W===Y&&N.push(U),N},[])).sort(j)}catch{return Dt(this,mn)}var T=0,R=P?function(N){return 0<f(N,D[T][1])}:function(N){return 0<=f(N,D[T][1])},O=_?function(N){return 0<m(N,D[T][0])}:function(N){return 0<=m(N,D[T][0])},I=R,M=new this.Collection(this,function(){return Sn(D[0][0],D[D.length-1][1],!_,!P)});return M._ondirectionchange=function(N){E=N==="next"?(I=R,f):(I=O,m),D.sort(j)},M._addAlgorithm(function(N,U,W){for(var Y,se=N.key;I(se);)if(++T===D.length)return U(W),!1;return!R(Y=se)&&!O(Y)||(d._cmp(se,D[T][1])===0||d._cmp(se,D[T][0])===0||U(function(){E===f?N.continue(D[T][0]):N.continue(D[T][1])}),!1)}),M},gt.prototype.startsWithAnyOf=function(){var i=Xe.apply(Q,arguments);return i.every(function(l){return typeof l=="string"})?i.length===0?tr(this):this.inAnyRange(i.map(function(l){return[l,l+Fn]})):Dt(this,"startsWithAnyOf() only works with strings")},gt);function gt(){}function ln(i){return He(function(l){return wr(l),i(l.target.error),!1})}function wr(i){i.stopPropagation&&i.stopPropagation(),i.preventDefault&&i.preventDefault()}var vr="storagemutated",Xs="x-storagemutated-1",_n=gr(null,vr),Fc=(cn.prototype._lock=function(){return oe(!ee.global),++this._reculock,this._reculock!==1||ee.global||(ee.lockOwnerFor=this),this},cn.prototype._unlock=function(){if(oe(!ee.global),--this._reculock==0)for(ee.global||(ee.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var i=this._blockedFuncs.shift();try{Ln(i[1],i[0])}catch{}}return this},cn.prototype._locked=function(){return this._reculock&&ee.lockOwnerFor!==this},cn.prototype.create=function(i){var l=this;if(!this.mode)return this;var d=this.db.idbdb,h=this.db._state.dbOpenError;if(oe(!this.idbtrans),!i&&!d)switch(h&&h.name){case"DatabaseClosedError":throw new ae.DatabaseClosed(h);case"MissingAPIError":throw new ae.MissingAPI(h.message,h);default:throw new ae.OpenFailed(h)}if(!this.active)throw new ae.TransactionInactive;return oe(this._completion._state===null),(i=this.idbtrans=i||(this.db.core||d).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=He(function(f){wr(f),l._reject(i.error)}),i.onabort=He(function(f){wr(f),l.active&&l._reject(new ae.Abort(i.error)),l.active=!1,l.on("abort").fire(f)}),i.oncomplete=He(function(){l.active=!1,l._resolve(),"mutatedParts"in i&&_n.storagemutated.fire(i.mutatedParts)}),this},cn.prototype._promise=function(i,l,d){var h=this;if(i==="readwrite"&&this.mode!=="readwrite")return at(new ae.ReadOnly("Transaction is readonly"));if(!this.active)return at(new ae.TransactionInactive);if(this._locked())return new te(function(m,w){h._blockedFuncs.push([function(){h._promise(i,l,d).then(m,w)},ee])});if(d)return kn(function(){var m=new te(function(w,C){h._lock();var _=l(w,C,h);_&&_.then&&_.then(w,C)});return m.finally(function(){return h._unlock()}),m._lib=!0,m});var f=new te(function(m,w){var C=l(m,w,h);C&&C.then&&C.then(m,w)});return f._lib=!0,f},cn.prototype._root=function(){return this.parent?this.parent._root():this},cn.prototype.waitFor=function(i){var l,d=this._root(),h=te.resolve(i);d._waitingFor?d._waitingFor=d._waitingFor.then(function(){return h}):(d._waitingFor=h,d._waitingQueue=[],l=d.idbtrans.objectStore(d.storeNames[0]),(function m(){for(++d._spinCount;d._waitingQueue.length;)d._waitingQueue.shift()();d._waitingFor&&(l.get(-1/0).onsuccess=m)})());var f=d._waitingFor;return new te(function(m,w){h.then(function(C){return d._waitingQueue.push(He(m.bind(null,C)))},function(C){return d._waitingQueue.push(He(w.bind(null,C)))}).finally(function(){d._waitingFor===f&&(d._waitingFor=null)})})},cn.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ae.Abort))},cn.prototype.table=function(i){var l=this._memoizedTables||(this._memoizedTables={});if(y(l,i))return l[i];var d=this.schema[i];if(!d)throw new ae.NotFound("Table "+i+" not part of transaction");return d=new this.db.Table(i,d,this),d.core=this.db.core.table(i),l[i]=d},cn);function cn(){}function Qs(i,l,d,h,f,m,w){return{name:i,keyPath:l,unique:d,multi:h,auto:f,compound:m,src:(d&&!w?"&":"")+(h?"*":"")+(f?"++":"")+Ro(l)}}function Ro(i){return typeof i=="string"?i:i?"["+[].join.call(i,"+")+"]":""}function Js(i,l,d){return{name:i,primKey:l,indexes:d,mappedClass:null,idxByName:(h=function(f){return[f.name,f]},d.reduce(function(f,m,w){return w=h(m,w),w&&(f[w[0]]=w[1]),f},{}))};var h}var xr=function(i){try{return i.only([[]]),xr=function(){return[[]]},[[]]}catch{return xr=function(){return Fn},Fn}};function Zs(i){return i==null?function(){}:typeof i=="string"?(l=i).split(".").length===1?function(d){return d[l]}:function(d){return J(d,l)}:function(d){return J(d,i)};var l}function Do(i){return[].slice.call(i)}var Mc=0;function $r(i){return i==null?":id":typeof i=="string"?i:"[".concat(i.join("+"),"]")}function Bc(i,l,_){function h(I){if(I.type===3)return null;if(I.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var T=I.lower,R=I.upper,O=I.lowerOpen,I=I.upperOpen;return T===void 0?R===void 0?null:l.upperBound(R,!!I):R===void 0?l.lowerBound(T,!!O):l.bound(T,R,!!O,!!I)}function f(j){var T,R=j.name;return{name:R,schema:j,mutate:function(O){var I=O.trans,M=O.type,N=O.keys,U=O.values,W=O.range;return new Promise(function(Y,se){Y=He(Y);var X=I.objectStore(R),Z=X.keyPath==null,le=M==="put"||M==="add";if(!le&&M!=="delete"&&M!=="deleteRange")throw new Error("Invalid operation type: "+M);var re,de=(N||U||{length:1}).length;if(N&&U&&N.length!==U.length)throw new Error("Given keys array must have same length as given values array.");if(de===0)return Y({numFailures:0,failures:{},results:[],lastResult:void 0});function xe(Ct){++Ot,wr(Ct)}var Ce=[],Ee=[],Ot=0;if(M==="deleteRange"){if(W.type===4)return Y({numFailures:Ot,failures:Ee,results:[],lastResult:void 0});W.type===3?Ce.push(re=X.clear()):Ce.push(re=X.delete(h(W)))}else{var Z=le?Z?[U,N]:[U,null]:[N,null],ve=Z[0],vt=Z[1];if(le)for(var xt=0;xt<de;++xt)Ce.push(re=vt&&vt[xt]!==void 0?X[M](ve[xt],vt[xt]):X[M](ve[xt])),re.onerror=xe;else for(xt=0;xt<de;++xt)Ce.push(re=X[M](ve[xt])),re.onerror=xe}function ds(Ct){Ct=Ct.target.result,Ce.forEach(function(Un,bi){return Un.error!=null&&(Ee[bi]=Un.error)}),Y({numFailures:Ot,failures:Ee,results:M==="delete"?N:Ce.map(function(Un){return Un.result}),lastResult:Ct})}re.onerror=function(Ct){xe(Ct),ds(Ct)},re.onsuccess=ds})},getMany:function(O){var I=O.trans,M=O.keys;return new Promise(function(N,U){N=He(N);for(var W,Y=I.objectStore(R),se=M.length,X=new Array(se),Z=0,le=0,re=function(Ce){Ce=Ce.target,X[Ce._pos]=Ce.result,++le===Z&&N(X)},de=ln(U),xe=0;xe<se;++xe)M[xe]!=null&&((W=Y.get(M[xe]))._pos=xe,W.onsuccess=re,W.onerror=de,++Z);Z===0&&N(X)})},get:function(O){var I=O.trans,M=O.key;return new Promise(function(N,U){N=He(N);var W=I.objectStore(R).get(M);W.onsuccess=function(Y){return N(Y.target.result)},W.onerror=ln(U)})},query:(T=P,function(O){return new Promise(function(I,M){I=He(I);var N,U,W,Z=O.trans,Y=O.values,se=O.limit,re=O.query,X=se===1/0?void 0:se,le=re.index,re=re.range,Z=Z.objectStore(R),le=le.isPrimaryKey?Z:Z.index(le.name),re=h(re);if(se===0)return I({result:[]});T?((X=Y?le.getAll(re,X):le.getAllKeys(re,X)).onsuccess=function(de){return I({result:de.target.result})},X.onerror=ln(M)):(N=0,U=!Y&&"openKeyCursor"in le?le.openKeyCursor(re):le.openCursor(re),W=[],U.onsuccess=function(de){var xe=U.result;return xe?(W.push(Y?xe.value:xe.primaryKey),++N===se?I({result:W}):void xe.continue()):I({result:W})},U.onerror=ln(M))})}),openCursor:function(O){var I=O.trans,M=O.values,N=O.query,U=O.reverse,W=O.unique;return new Promise(function(Y,se){Y=He(Y);var le=N.index,X=N.range,Z=I.objectStore(R),Z=le.isPrimaryKey?Z:Z.index(le.name),le=U?W?"prevunique":"prev":W?"nextunique":"next",re=!M&&"openKeyCursor"in Z?Z.openKeyCursor(h(X),le):Z.openCursor(h(X),le);re.onerror=ln(se),re.onsuccess=He(function(de){var xe,Ce,Ee,Ot,ve=re.result;ve?(ve.___id=++Mc,ve.done=!1,xe=ve.continue.bind(ve),Ce=(Ce=ve.continuePrimaryKey)&&Ce.bind(ve),Ee=ve.advance.bind(ve),Ot=function(){throw new Error("Cursor not stopped")},ve.trans=I,ve.stop=ve.continue=ve.continuePrimaryKey=ve.advance=function(){throw new Error("Cursor not started")},ve.fail=He(se),ve.next=function(){var vt=this,xt=1;return this.start(function(){return xt--?vt.continue():vt.stop()}).then(function(){return vt})},ve.start=function(vt){function xt(){if(re.result)try{vt()}catch(Ct){ve.fail(Ct)}else ve.done=!0,ve.start=function(){throw new Error("Cursor behind last entry")},ve.stop()}var ds=new Promise(function(Ct,Un){Ct=He(Ct),re.onerror=ln(Un),ve.fail=Un,ve.stop=function(bi){ve.stop=ve.continue=ve.continuePrimaryKey=ve.advance=Ot,Ct(bi)}});return re.onsuccess=He(function(Ct){re.onsuccess=xt,xt()}),ve.continue=xe,ve.continuePrimaryKey=Ce,ve.advance=Ee,xt(),ds},Y(ve)):Y(null)},se)})},count:function(O){var I=O.query,M=O.trans,N=I.index,U=I.range;return new Promise(function(W,Y){var se=M.objectStore(R),X=N.isPrimaryKey?se:se.index(N.name),se=h(U),X=se?X.count(se):X.count();X.onsuccess=He(function(Z){return W(Z.target.result)}),X.onerror=ln(Y)})}}}var m,w,C,D=(w=_,C=Do((m=i).objectStoreNames),{schema:{name:m.name,tables:C.map(function(j){return w.objectStore(j)}).map(function(j){var T=j.keyPath,I=j.autoIncrement,R=c(T),O={},I={name:j.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:T==null,compound:R,keyPath:T,autoIncrement:I,unique:!0,extractKey:Zs(T)},indexes:Do(j.indexNames).map(function(M){return j.index(M)}).map(function(W){var N=W.name,U=W.unique,Y=W.multiEntry,W=W.keyPath,Y={name:N,compound:c(W),keyPath:W,unique:U,multiEntry:Y,extractKey:Zs(W)};return O[$r(W)]=Y}),getIndexByKeyPath:function(M){return O[$r(M)]}};return O[":id"]=I.primaryKey,T!=null&&(O[$r(T)]=I.primaryKey),I})},hasGetAll:0<C.length&&"getAll"in w.objectStore(C[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),_=D.schema,P=D.hasGetAll,D=_.tables.map(f),E={};return D.forEach(function(j){return E[j.name]=j}),{stack:"dbcore",transaction:i.transaction.bind(i),table:function(j){if(!E[j])throw new Error("Table '".concat(j,"' not found"));return E[j]},MIN_KEY:-1/0,MAX_KEY:xr(l),schema:_}}function Nc(i,l,d,h){var f=d.IDBKeyRange;return d.indexedDB,{dbcore:(h=Bc(l,f,h),i.dbcore.reduce(function(m,w){return w=w.create,s(s({},m),w(m))},h))}}function Jr(i,h){var d=h.db,h=Nc(i._middlewares,d,i._deps,h);i.core=h.dbcore,i.tables.forEach(function(f){var m=f.name;i.core.schema.tables.some(function(w){return w.name===m})&&(f.core=i.core.table(m),i[m]instanceof i.Table&&(i[m].core=f.core))})}function Zr(i,l,d,h){d.forEach(function(f){var m=h[f];l.forEach(function(w){var C=(function _(P,D){return H(P,D)||(P=p(P))&&_(P,D)})(w,f);(!C||"value"in C&&C.value===void 0)&&(w===i.Transaction.prototype||w instanceof i.Transaction?F(w,f,{get:function(){return this.table(f)},set:function(_){B(this,f,{value:_,writable:!0,configurable:!0,enumerable:!0})}}):w[f]=new i.Table(f,m))})})}function ei(i,l){l.forEach(function(d){for(var h in d)d[h]instanceof i.Table&&delete d[h]})}function Uc(i,l){return i._cfg.version-l._cfg.version}function Hc(i,l,d,h){var f=i._dbSchema;d.objectStoreNames.contains("$meta")&&!f.$meta&&(f.$meta=Js("$meta",jo("")[0],[]),i._storeNames.push("$meta"));var m=i._createTransaction("readwrite",i._storeNames,f);m.create(d),m._completion.catch(h);var w=m._reject.bind(m),C=ee.transless||ee;kn(function(){return ee.trans=m,ee.transless=C,l!==0?(Jr(i,d),P=l,((_=m).storeNames.includes("$meta")?_.table("$meta").get("version").then(function(D){return D??P}):te.resolve(P)).then(function(D){return j=D,T=m,R=d,O=[],D=(E=i)._versions,I=E._dbSchema=ts(0,E.idbdb,R),(D=D.filter(function(M){return M._cfg.version>=j})).length!==0?(D.forEach(function(M){O.push(function(){var N=I,U=M._cfg.dbschema;ns(E,N,R),ns(E,U,R),I=E._dbSchema=U;var W=ti(N,U);W.add.forEach(function(le){ni(R,le[0],le[1].primKey,le[1].indexes)}),W.change.forEach(function(le){if(le.recreate)throw new ae.Upgrade("Not yet support for changing primary key");var re=R.objectStore(le.name);le.add.forEach(function(de){return es(re,de)}),le.change.forEach(function(de){re.deleteIndex(de.name),es(re,de)}),le.del.forEach(function(de){return re.deleteIndex(de)})});var Y=M._cfg.contentUpgrade;if(Y&&M._cfg.version>j){Jr(E,R),T._memoizedTables={};var se=$e(U);W.del.forEach(function(le){se[le]=N[le]}),ei(E,[E.Transaction.prototype]),Zr(E,[E.Transaction.prototype],a(se),se),T.schema=se;var X,Z=ct(Y);return Z&&Jn(),W=te.follow(function(){var le;(X=Y(T))&&Z&&(le=Cn.bind(null,null),X.then(le,le))}),X&&typeof X.then=="function"?te.resolve(X):W.then(function(){return X})}}),O.push(function(N){var U,W,Y=M._cfg.dbschema;U=Y,W=N,[].slice.call(W.db.objectStoreNames).forEach(function(se){return U[se]==null&&W.db.deleteObjectStore(se)}),ei(E,[E.Transaction.prototype]),Zr(E,[E.Transaction.prototype],E._storeNames,E._dbSchema),T.schema=E._dbSchema}),O.push(function(N){E.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(E.idbdb.version/10)===M._cfg.version?(E.idbdb.deleteObjectStore("$meta"),delete E._dbSchema.$meta,E._storeNames=E._storeNames.filter(function(U){return U!=="$meta"})):N.objectStore("$meta").put(M._cfg.version,"version"))})}),(function M(){return O.length?te.resolve(O.shift()(T.idbtrans)).then(M):te.resolve()})().then(function(){Oo(I,R)})):te.resolve();var E,j,T,R,O,I}).catch(w)):(a(f).forEach(function(D){ni(d,D,f[D].primKey,f[D].indexes)}),Jr(i,d),void te.follow(function(){return i.on.populate.fire(m)}).catch(w));var _,P})}function qc(i,l){Oo(i._dbSchema,l),l.db.version%10!=0||l.objectStoreNames.contains("$meta")||l.db.createObjectStore("$meta").add(Math.ceil(l.db.version/10-1),"version");var d=ts(0,i.idbdb,l);ns(i,i._dbSchema,l);for(var h=0,f=ti(d,i._dbSchema).change;h<f.length;h++){var m=(function(w){if(w.change.length||w.recreate)return console.warn("Unable to patch indexes of table ".concat(w.name," because it has changes on the type of index or primary key.")),{value:void 0};var C=l.objectStore(w.name);w.add.forEach(function(_){Le&&console.debug("Dexie upgrade patch: Creating missing index ".concat(w.name,".").concat(_.src)),es(C,_)})})(f[h]);if(typeof m=="object")return m.value}}function ti(i,l){var d,h={del:[],add:[],change:[]};for(d in i)l[d]||h.del.push(d);for(d in l){var f=i[d],m=l[d];if(f){var w={name:d,def:m,recreate:!1,del:[],add:[],change:[]};if(""+(f.primKey.keyPath||"")!=""+(m.primKey.keyPath||"")||f.primKey.auto!==m.primKey.auto)w.recreate=!0,h.change.push(w);else{var C=f.idxByName,_=m.idxByName,P=void 0;for(P in C)_[P]||w.del.push(P);for(P in _){var D=C[P],E=_[P];D?D.src!==E.src&&w.change.push(E):w.add.push(E)}(0<w.del.length||0<w.add.length||0<w.change.length)&&h.change.push(w)}}else h.add.push([d,m])}return h}function ni(i,l,d,h){var f=i.db.createObjectStore(l,d.keyPath?{keyPath:d.keyPath,autoIncrement:d.auto}:{autoIncrement:d.auto});return h.forEach(function(m){return es(f,m)}),f}function Oo(i,l){a(i).forEach(function(d){l.db.objectStoreNames.contains(d)||(Le&&console.debug("Dexie: Creating missing table",d),ni(l,d,i[d].primKey,i[d].indexes))})}function es(i,l){i.createIndex(l.name,l.keyPath,{unique:l.unique,multiEntry:l.multi})}function ts(i,l,d){var h={};return ue(l.objectStoreNames,0).forEach(function(f){for(var m=d.objectStore(f),w=Qs(Ro(P=m.keyPath),P||"",!0,!1,!!m.autoIncrement,P&&typeof P!="string",!0),C=[],_=0;_<m.indexNames.length;++_){var D=m.index(m.indexNames[_]),P=D.keyPath,D=Qs(D.name,P,!!D.unique,!!D.multiEntry,!1,P&&typeof P!="string",!1);C.push(D)}h[f]=Js(f,w,C)}),h}function ns(i,l,d){for(var h=d.db.objectStoreNames,f=0;f<h.length;++f){var m=h[f],w=d.objectStore(m);i._hasGetAll="getAll"in w;for(var C=0;C<w.indexNames.length;++C){var _=w.indexNames[C],P=w.index(_).keyPath,D=typeof P=="string"?P:"["+ue(P).join("+")+"]";!l[m]||(P=l[m].idxByName[D])&&(P.name=_,delete l[m].idxByName[D],l[m].idxByName[_]=P)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&o.WorkerGlobalScope&&o instanceof o.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(i._hasGetAll=!1)}function jo(i){return i.split(",").map(function(l,d){var h=(l=l.trim()).replace(/([&*]|\+\+)/g,""),f=/^\[/.test(h)?h.match(/^\[(.*)\]$/)[1].split("+"):h;return Qs(h,f||null,/\&/.test(l),/\*/.test(l),/\+\+/.test(l),c(f),d===0)})}var Wc=(rs.prototype._parseStoresSpec=function(i,l){a(i).forEach(function(d){if(i[d]!==null){var h=jo(i[d]),f=h.shift();if(f.unique=!0,f.multi)throw new ae.Schema("Primary key cannot be multi-valued");h.forEach(function(m){if(m.auto)throw new ae.Schema("Only primary key can be marked as autoIncrement (++)");if(!m.keyPath)throw new ae.Schema("Index must have a name and cannot be an empty string")}),l[d]=Js(d,f,h)}})},rs.prototype.stores=function(d){var l=this.db;this._cfg.storesSource=this._cfg.storesSource?u(this._cfg.storesSource,d):d;var d=l._versions,h={},f={};return d.forEach(function(m){u(h,m._cfg.storesSource),f=m._cfg.dbschema={},m._parseStoresSpec(h,f)}),l._dbSchema=f,ei(l,[l._allTables,l,l.Transaction.prototype]),Zr(l,[l._allTables,l,l.Transaction.prototype,this._cfg.tables],a(f),f),l._storeNames=a(f),this},rs.prototype.upgrade=function(i){return this._cfg.contentUpgrade=It(this._cfg.contentUpgrade||ye,i),this},rs);function rs(){}function ri(i,l){var d=i._dbNamesDB;return d||(d=i._dbNamesDB=new bn(Vr,{addons:[],indexedDB:i,IDBKeyRange:l})).version(1).stores({dbnames:"name"}),d.table("dbnames")}function si(i){return i&&typeof i.databases=="function"}function ii(i){return kn(function(){return ee.letThrough=!0,i()})}function oi(i){return!("from"in i)}var wt=function(i,l){if(!this){var d=new wt;return i&&"d"in i&&u(d,i),d}u(this,arguments.length?{d:1,from:i,to:1<arguments.length?l:i}:{d:0})};function kr(i,l,d){var h=Pe(l,d);if(!isNaN(h)){if(0<h)throw RangeError();if(oi(i))return u(i,{from:l,to:d,d:1});var f=i.l,h=i.r;if(Pe(d,i.from)<0)return f?kr(f,l,d):i.l={from:l,to:d,d:1,l:null,r:null},Lo(i);if(0<Pe(l,i.to))return h?kr(h,l,d):i.r={from:l,to:d,d:1,l:null,r:null},Lo(i);Pe(l,i.from)<0&&(i.from=l,i.l=null,i.d=h?h.d+1:1),0<Pe(d,i.to)&&(i.to=d,i.r=null,i.d=i.l?i.l.d+1:1),d=!i.r,f&&!i.l&&Cr(i,f),h&&d&&Cr(i,h)}}function Cr(i,l){oi(l)||(function d(h,_){var m=_.from,w=_.to,C=_.l,_=_.r;kr(h,m,w),C&&d(h,C),_&&d(h,_)})(i,l)}function zo(i,l){var d=ss(l),h=d.next();if(h.done)return!1;for(var f=h.value,m=ss(i),w=m.next(f.from),C=w.value;!h.done&&!w.done;){if(Pe(C.from,f.to)<=0&&0<=Pe(C.to,f.from))return!0;Pe(f.from,C.from)<0?f=(h=d.next(C.from)).value:C=(w=m.next(f.from)).value}return!1}function ss(i){var l=oi(i)?null:{s:0,n:i};return{next:function(d){for(var h=0<arguments.length;l;)switch(l.s){case 0:if(l.s=1,h)for(;l.n.l&&Pe(d,l.n.from)<0;)l={up:l,n:l.n.l,s:1};else for(;l.n.l;)l={up:l,n:l.n.l,s:1};case 1:if(l.s=2,!h||Pe(d,l.n.to)<=0)return{value:l.n,done:!1};case 2:if(l.n.r){l.s=3,l={up:l,n:l.n.r,s:0};continue}case 3:l=l.up}return{done:!0}}}}function Lo(i){var l,d,h=(((l=i.r)===null||l===void 0?void 0:l.d)||0)-(((d=i.l)===null||d===void 0?void 0:d.d)||0),f=1<h?"r":h<-1?"l":"";f&&(l=f=="r"?"l":"r",d=s({},i),h=i[f],i.from=h.from,i.to=h.to,i[f]=h[f],d[f]=h[l],(i[l]=d).d=Fo(d)),i.d=Fo(i)}function Fo(d){var l=d.r,d=d.l;return(l?d?Math.max(l.d,d.d):l.d:d?d.d:0)+1}function is(i,l){return a(l).forEach(function(d){i[d]?Cr(i[d],l[d]):i[d]=(function h(f){var m,w,C={};for(m in f)y(f,m)&&(w=f[m],C[m]=!w||typeof w!="object"||g.has(w.constructor)?w:h(w));return C})(l[d])}),i}function ai(i,l){return i.all||l.all||Object.keys(i).some(function(d){return l[d]&&zo(l[d],i[d])})}$(wt.prototype,((Nt={add:function(i){return Cr(this,i),this},addKey:function(i){return kr(this,i,i),this},addKeys:function(i){var l=this;return i.forEach(function(d){return kr(l,d,d)}),this},hasKey:function(i){var l=ss(this).next(i).value;return l&&Pe(l.from,i)<=0&&0<=Pe(l.to,i)}})[ne]=function(){return ss(this)},Nt));var Bn={},li={},ci=!1;function os(i){is(li,i),ci||(ci=!0,setTimeout(function(){ci=!1,di(li,!(li={}))},0))}function di(i,l){l===void 0&&(l=!1);var d=new Set;if(i.all)for(var h=0,f=Object.values(Bn);h<f.length;h++)Mo(w=f[h],i,d,l);else for(var m in i){var w,C=/^idb\:\/\/(.*)\/(.*)\//.exec(m);C&&(m=C[1],C=C[2],(w=Bn["idb://".concat(m,"/").concat(C)])&&Mo(w,i,d,l))}d.forEach(function(_){return _()})}function Mo(i,l,d,h){for(var f=[],m=0,w=Object.entries(i.queries.query);m<w.length;m++){for(var C=w[m],_=C[0],P=[],D=0,E=C[1];D<E.length;D++){var j=E[D];ai(l,j.obsSet)?j.subscribers.forEach(function(I){return d.add(I)}):h&&P.push(j)}h&&f.push([_,P])}if(h)for(var T=0,R=f;T<R.length;T++){var O=R[T],_=O[0],P=O[1];i.queries.query[_]=P}}function Kc(i){var l=i._state,d=i._deps.indexedDB;if(l.isBeingOpened||i.idbdb)return l.dbReadyPromise.then(function(){return l.dbOpenError?at(l.dbOpenError):i});l.isBeingOpened=!0,l.dbOpenError=null,l.openComplete=!1;var h=l.openCanceller,f=Math.round(10*i.verno),m=!1;function w(){if(l.openCanceller!==h)throw new ae.DatabaseClosed("db.open() was cancelled")}function C(){return new te(function(j,T){if(w(),!d)throw new ae.MissingAPI;var R=i.name,O=l.autoSchema||!f?d.open(R):d.open(R,f);if(!O)throw new ae.MissingAPI;O.onerror=ln(T),O.onblocked=He(i._fireOnBlocked),O.onupgradeneeded=He(function(I){var M;D=O.transaction,l.autoSchema&&!i._options.allowEmptyDB?(O.onerror=wr,D.abort(),O.result.close(),(M=d.deleteDatabase(R)).onsuccess=M.onerror=He(function(){T(new ae.NoSuchDatabase("Database ".concat(R," doesnt exist")))})):(D.onerror=ln(T),I=I.oldVersion>Math.pow(2,62)?0:I.oldVersion,E=I<1,i.idbdb=O.result,m&&qc(i,D),Hc(i,I/10,D,T))},T),O.onsuccess=He(function(){D=null;var I,M,N,U,W,Y=i.idbdb=O.result,se=ue(Y.objectStoreNames);if(0<se.length)try{var X=Y.transaction((U=se).length===1?U[0]:U,"readonly");if(l.autoSchema)M=Y,N=X,(I=i).verno=M.version/10,N=I._dbSchema=ts(0,M,N),I._storeNames=ue(M.objectStoreNames,0),Zr(I,[I._allTables],a(N),N);else if(ns(i,i._dbSchema,X),((W=ti(ts(0,(W=i).idbdb,X),W._dbSchema)).add.length||W.change.some(function(Z){return Z.add.length||Z.change.length}))&&!m)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),Y.close(),f=Y.version+1,m=!0,j(C());Jr(i,X)}catch{}Zn.push(i),Y.onversionchange=He(function(Z){l.vcFired=!0,i.on("versionchange").fire(Z)}),Y.onclose=He(function(Z){i.on("close").fire(Z)}),E&&(W=i._deps,X=R,Y=W.indexedDB,W=W.IDBKeyRange,si(Y)||X===Vr||ri(Y,W).put({name:X}).catch(ye)),j()},T)}).catch(function(j){switch(j?.name){case"UnknownError":if(0<l.PR1398_maxLoop)return l.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),C();break;case"VersionError":if(0<f)return f=0,C()}return te.reject(j)})}var _,P=l.dbReadyResolve,D=null,E=!1;return te.race([h,(typeof navigator>"u"?te.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(j){function T(){return indexedDB.databases().finally(j)}_=setInterval(T,100),T()}).finally(function(){return clearInterval(_)}):Promise.resolve()).then(C)]).then(function(){return w(),l.onReadyBeingFired=[],te.resolve(ii(function(){return i.on.ready.fire(i.vip)})).then(function j(){if(0<l.onReadyBeingFired.length){var T=l.onReadyBeingFired.reduce(It,ye);return l.onReadyBeingFired=[],te.resolve(ii(function(){return T(i.vip)})).then(j)}})}).finally(function(){l.openCanceller===h&&(l.onReadyBeingFired=null,l.isBeingOpened=!1)}).catch(function(j){l.dbOpenError=j;try{D&&D.abort()}catch{}return h===l.openCanceller&&i._close(),at(j)}).finally(function(){l.openComplete=!0,P()}).then(function(){var j;return E&&(j={},i.tables.forEach(function(T){T.schema.indexes.forEach(function(R){R.name&&(j["idb://".concat(i.name,"/").concat(T.name,"/").concat(R.name)]=new wt(-1/0,[[[]]]))}),j["idb://".concat(i.name,"/").concat(T.name,"/")]=j["idb://".concat(i.name,"/").concat(T.name,"/:dels")]=new wt(-1/0,[[[]]])}),_n(vr).fire(j),di(j,!0)),i})}function ui(i){function l(m){return i.next(m)}var d=f(l),h=f(function(m){return i.throw(m)});function f(m){return function(_){var C=m(_),_=C.value;return C.done?_:_&&typeof _.then=="function"?_.then(d,h):c(_)?Promise.all(_).then(d,h):d(_)}}return f(l)()}function as(i,l,d){for(var h=c(i)?i.slice():[i],f=0;f<d;++f)h.push(l);return h}var Vc={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(i){return s(s({},i),{table:function(l){var d=i.table(l),h=d.schema,f={},m=[];function w(E,j,T){var R=$r(E),O=f[R]=f[R]||[],I=E==null?0:typeof E=="string"?1:E.length,M=0<j,M=s(s({},T),{name:M?"".concat(R,"(virtual-from:").concat(T.name,")"):T.name,lowLevelIndex:T,isVirtual:M,keyTail:j,keyLength:I,extractKey:Zs(E),unique:!M&&T.unique});return O.push(M),M.isPrimaryKey||m.push(M),1<I&&w(I===2?E[0]:E.slice(0,I-1),j+1,T),O.sort(function(N,U){return N.keyTail-U.keyTail}),M}l=w(h.primaryKey.keyPath,0,h.primaryKey),f[":id"]=[l];for(var C=0,_=h.indexes;C<_.length;C++){var P=_[C];w(P.keyPath,0,P)}function D(E){var j,T=E.query.index;return T.isVirtual?s(s({},E),{query:{index:T.lowLevelIndex,range:(j=E.query.range,T=T.keyTail,{type:j.type===1?2:j.type,lower:as(j.lower,j.lowerOpen?i.MAX_KEY:i.MIN_KEY,T),lowerOpen:!0,upper:as(j.upper,j.upperOpen?i.MIN_KEY:i.MAX_KEY,T),upperOpen:!0})}}):E}return s(s({},d),{schema:s(s({},h),{primaryKey:l,indexes:m,getIndexByKeyPath:function(E){return(E=f[$r(E)])&&E[0]}}),count:function(E){return d.count(D(E))},query:function(E){return d.query(D(E))},openCursor:function(E){var j=E.query.index,T=j.keyTail,R=j.isVirtual,O=j.keyLength;return R?d.openCursor(D(E)).then(function(M){return M&&I(M)}):d.openCursor(E);function I(M){return Object.create(M,{continue:{value:function(N){N!=null?M.continue(as(N,E.reverse?i.MAX_KEY:i.MIN_KEY,T)):E.unique?M.continue(M.key.slice(0,O).concat(E.reverse?i.MIN_KEY:i.MAX_KEY,T)):M.continue()}},continuePrimaryKey:{value:function(N,U){M.continuePrimaryKey(as(N,i.MAX_KEY,T),U)}},primaryKey:{get:function(){return M.primaryKey}},key:{get:function(){var N=M.key;return O===1?N[0]:N.slice(0,O)}},value:{get:function(){return M.value}}})}}})}})}};function hi(i,l,d,h){return d=d||{},h=h||"",a(i).forEach(function(f){var m,w,C;y(l,f)?(m=i[f],w=l[f],typeof m=="object"&&typeof w=="object"&&m&&w?(C=k(m))!==k(w)?d[h+f]=l[f]:C==="Object"?hi(m,w,d,h+f+"."):m!==w&&(d[h+f]=l[f]):m!==w&&(d[h+f]=l[f])):d[h+f]=void 0}),a(l).forEach(function(f){y(i,f)||(d[h+f]=l[f])}),d}function fi(i,l){return l.type==="delete"?l.keys:l.keys||l.values.map(i.extractKey)}var Gc={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(i){return s(s({},i),{table:function(l){var d=i.table(l),h=d.schema.primaryKey;return s(s({},d),{mutate:function(f){var m=ee.trans,w=m.table(l).hook,C=w.deleting,_=w.creating,P=w.updating;switch(f.type){case"add":if(_.fire===ye)break;return m._promise("readwrite",function(){return D(f)},!0);case"put":if(_.fire===ye&&P.fire===ye)break;return m._promise("readwrite",function(){return D(f)},!0);case"delete":if(C.fire===ye)break;return m._promise("readwrite",function(){return D(f)},!0);case"deleteRange":if(C.fire===ye)break;return m._promise("readwrite",function(){return(function E(j,T,R){return d.query({trans:j,values:!1,query:{index:h,range:T},limit:R}).then(function(O){var I=O.result;return D({type:"delete",keys:I,trans:j}).then(function(M){return 0<M.numFailures?Promise.reject(M.failures[0]):I.length<R?{failures:[],numFailures:0,lastResult:void 0}:E(j,s(s({},T),{lower:I[I.length-1],lowerOpen:!0}),R)})})})(f.trans,f.range,1e4)},!0)}return d.mutate(f);function D(E){var j,T,R,O=ee.trans,I=E.keys||fi(h,E);if(!I)throw new Error("Keys missing");return(E=E.type==="add"||E.type==="put"?s(s({},E),{keys:I}):s({},E)).type!=="delete"&&(E.values=n([],E.values)),E.keys&&(E.keys=n([],E.keys)),j=d,R=I,((T=E).type==="add"?Promise.resolve([]):j.getMany({trans:T.trans,keys:R,cache:"immutable"})).then(function(M){var N=I.map(function(U,W){var Y,se,X,Z=M[W],le={onerror:null,onsuccess:null};return E.type==="delete"?C.fire.call(le,U,Z,O):E.type==="add"||Z===void 0?(Y=_.fire.call(le,U,E.values[W],O),U==null&&Y!=null&&(E.keys[W]=U=Y,h.outbound||he(E.values[W],h.keyPath,U))):(Y=hi(Z,E.values[W]),(se=P.fire.call(le,Y,U,Z,O))&&(X=E.values[W],Object.keys(se).forEach(function(re){y(X,re)?X[re]=se[re]:he(X,re,se[re])}))),le});return d.mutate(E).then(function(U){for(var W=U.failures,Y=U.results,se=U.numFailures,U=U.lastResult,X=0;X<I.length;++X){var Z=(Y||I)[X],le=N[X];Z==null?le.onerror&&le.onerror(W[X]):le.onsuccess&&le.onsuccess(E.type==="put"&&M[X]?E.values[X]:Z)}return{failures:W,results:Y,numFailures:se,lastResult:U}}).catch(function(U){return N.forEach(function(W){return W.onerror&&W.onerror(U)}),Promise.reject(U)})})}}})}})}};function Bo(i,l,d){try{if(!l||l.keys.length<i.length)return null;for(var h=[],f=0,m=0;f<l.keys.length&&m<i.length;++f)Pe(l.keys[f],i[m])===0&&(h.push(d?S(l.values[f]):l.values[f]),++m);return h.length===i.length?h:null}catch{return null}}var Yc={stack:"dbcore",level:-1,create:function(i){return{table:function(l){var d=i.table(l);return s(s({},d),{getMany:function(h){if(!h.cache)return d.getMany(h);var f=Bo(h.keys,h.trans._cache,h.cache==="clone");return f?te.resolve(f):d.getMany(h).then(function(m){return h.trans._cache={keys:h.keys,values:h.cache==="clone"?S(m):m},m})},mutate:function(h){return h.type!=="add"&&(h.trans._cache=null),d.mutate(h)}})}}}};function No(i,l){return i.trans.mode==="readonly"&&!!i.subscr&&!i.trans.explicit&&i.trans.db._options.cache!=="disabled"&&!l.schema.primaryKey.outbound}function Uo(i,l){switch(i){case"query":return l.values&&!l.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Xc={stack:"dbcore",level:0,name:"Observability",create:function(i){var l=i.schema.name,d=new wt(i.MIN_KEY,i.MAX_KEY);return s(s({},i),{transaction:function(h,f,m){if(ee.subscr&&f!=="readonly")throw new ae.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ee.querier));return i.transaction(h,f,m)},table:function(h){var f=i.table(h),m=f.schema,w=m.primaryKey,E=m.indexes,C=w.extractKey,_=w.outbound,P=w.autoIncrement&&E.filter(function(T){return T.compound&&T.keyPath.includes(w.keyPath)}),D=s(s({},f),{mutate:function(T){function R(re){return re="idb://".concat(l,"/").concat(h,"/").concat(re),U[re]||(U[re]=new wt)}var O,I,M,N=T.trans,U=T.mutatedParts||(T.mutatedParts={}),W=R(""),Y=R(":dels"),se=T.type,le=T.type==="deleteRange"?[T.range]:T.type==="delete"?[T.keys]:T.values.length<50?[fi(w,T).filter(function(re){return re}),T.values]:[],X=le[0],Z=le[1],le=T.trans._cache;return c(X)?(W.addKeys(X),(le=se==="delete"||X.length===Z.length?Bo(X,le):null)||Y.addKeys(X),(le||Z)&&(O=R,I=le,M=Z,m.indexes.forEach(function(re){var de=O(re.name||"");function xe(Ee){return Ee!=null?re.extractKey(Ee):null}function Ce(Ee){return re.multiEntry&&c(Ee)?Ee.forEach(function(Ot){return de.addKey(Ot)}):de.addKey(Ee)}(I||M).forEach(function(Ee,vt){var ve=I&&xe(I[vt]),vt=M&&xe(M[vt]);Pe(ve,vt)!==0&&(ve!=null&&Ce(ve),vt!=null&&Ce(vt))})}))):X?(Z={from:(Z=X.lower)!==null&&Z!==void 0?Z:i.MIN_KEY,to:(Z=X.upper)!==null&&Z!==void 0?Z:i.MAX_KEY},Y.add(Z),W.add(Z)):(W.add(d),Y.add(d),m.indexes.forEach(function(re){return R(re.name).add(d)})),f.mutate(T).then(function(re){return!X||T.type!=="add"&&T.type!=="put"||(W.addKeys(re.results),P&&P.forEach(function(de){for(var xe=T.values.map(function(ve){return de.extractKey(ve)}),Ce=de.keyPath.findIndex(function(ve){return ve===w.keyPath}),Ee=0,Ot=re.results.length;Ee<Ot;++Ee)xe[Ee][Ce]=re.results[Ee];R(de.name).addKeys(xe)})),N.mutatedParts=is(N.mutatedParts||{},U),re})}}),E=function(R){var O=R.query,R=O.index,O=O.range;return[R,new wt((R=O.lower)!==null&&R!==void 0?R:i.MIN_KEY,(O=O.upper)!==null&&O!==void 0?O:i.MAX_KEY)]},j={get:function(T){return[w,new wt(T.key)]},getMany:function(T){return[w,new wt().addKeys(T.keys)]},count:E,query:E,openCursor:E};return a(j).forEach(function(T){D[T]=function(R){var O=ee.subscr,I=!!O,M=No(ee,f)&&Uo(T,R)?R.obsSet={}:O;if(I){var N=function(Z){return Z="idb://".concat(l,"/").concat(h,"/").concat(Z),M[Z]||(M[Z]=new wt)},U=N(""),W=N(":dels"),O=j[T](R),I=O[0],O=O[1];if((T==="query"&&I.isPrimaryKey&&!R.values?W:N(I.name||"")).add(O),!I.isPrimaryKey){if(T!=="count"){var Y=T==="query"&&_&&R.values&&f.query(s(s({},R),{values:!1}));return f[T].apply(this,arguments).then(function(Z){if(T==="query"){if(_&&R.values)return Y.then(function(xe){return xe=xe.result,U.addKeys(xe),Z});var le=R.values?Z.result.map(C):Z.result;(R.values?U:W).addKeys(le)}else if(T==="openCursor"){var re=Z,de=R.values;return re&&Object.create(re,{key:{get:function(){return W.addKey(re.primaryKey),re.key}},primaryKey:{get:function(){var xe=re.primaryKey;return W.addKey(xe),xe}},value:{get:function(){return de&&U.addKey(re.primaryKey),re.value}}})}return Z})}W.add(d)}}return f[T].apply(this,arguments)}}),D}})}};function Ho(i,l,d){if(d.numFailures===0)return l;if(l.type==="deleteRange")return null;var h=l.keys?l.keys.length:"values"in l&&l.values?l.values.length:1;return d.numFailures===h?null:(l=s({},l),c(l.keys)&&(l.keys=l.keys.filter(function(f,m){return!(m in d.failures)})),"values"in l&&c(l.values)&&(l.values=l.values.filter(function(f,m){return!(m in d.failures)})),l)}function pi(i,l){return d=i,((h=l).lower===void 0||(h.lowerOpen?0<Pe(d,h.lower):0<=Pe(d,h.lower)))&&(i=i,(l=l).upper===void 0||(l.upperOpen?Pe(i,l.upper)<0:Pe(i,l.upper)<=0));var d,h}function qo(i,l,j,h,f,m){if(!j||j.length===0)return i;var w=l.query.index,C=w.multiEntry,_=l.query.range,P=h.schema.primaryKey.extractKey,D=w.extractKey,E=(w.lowLevelIndex||w).extractKey,j=j.reduce(function(T,R){var O=T,I=[];if(R.type==="add"||R.type==="put")for(var M=new wt,N=R.values.length-1;0<=N;--N){var U,W=R.values[N],Y=P(W);M.hasKey(Y)||(U=D(W),(C&&c(U)?U.some(function(re){return pi(re,_)}):pi(U,_))&&(M.addKey(Y),I.push(W)))}switch(R.type){case"add":var se=new wt().addKeys(l.values?T.map(function(de){return P(de)}):T),O=T.concat(l.values?I.filter(function(de){return de=P(de),!se.hasKey(de)&&(se.addKey(de),!0)}):I.map(function(de){return P(de)}).filter(function(de){return!se.hasKey(de)&&(se.addKey(de),!0)}));break;case"put":var X=new wt().addKeys(R.values.map(function(de){return P(de)}));O=T.filter(function(de){return!X.hasKey(l.values?P(de):de)}).concat(l.values?I:I.map(function(de){return P(de)}));break;case"delete":var Z=new wt().addKeys(R.keys);O=T.filter(function(de){return!Z.hasKey(l.values?P(de):de)});break;case"deleteRange":var le=R.range;O=T.filter(function(de){return!pi(P(de),le)})}return O},i);return j===i?i:(j.sort(function(T,R){return Pe(E(T),E(R))||Pe(P(T),P(R))}),l.limit&&l.limit<1/0&&(j.length>l.limit?j.length=l.limit:i.length===l.limit&&j.length<l.limit&&(f.dirty=!0)),m?Object.freeze(j):j)}function Wo(i,l){return Pe(i.lower,l.lower)===0&&Pe(i.upper,l.upper)===0&&!!i.lowerOpen==!!l.lowerOpen&&!!i.upperOpen==!!l.upperOpen}function Qc(i,l){return(function(d,h,f,m){if(d===void 0)return h!==void 0?-1:0;if(h===void 0)return 1;if((h=Pe(d,h))===0){if(f&&m)return 0;if(f)return 1;if(m)return-1}return h})(i.lower,l.lower,i.lowerOpen,l.lowerOpen)<=0&&0<=(function(d,h,f,m){if(d===void 0)return h!==void 0?1:0;if(h===void 0)return-1;if((h=Pe(d,h))===0){if(f&&m)return 0;if(f)return-1;if(m)return 1}return h})(i.upper,l.upper,i.upperOpen,l.upperOpen)}function Jc(i,l,d,h){i.subscribers.add(d),h.addEventListener("abort",function(){var f,m;i.subscribers.delete(d),i.subscribers.size===0&&(f=i,m=l,setTimeout(function(){f.subscribers.size===0&&K(m,f)},3e3))})}var Zc={stack:"dbcore",level:0,name:"Cache",create:function(i){var l=i.schema.name;return s(s({},i),{transaction:function(d,h,f){var m,w,C=i.transaction(d,h,f);return h==="readwrite"&&(w=(m=new AbortController).signal,f=function(_){return function(){if(m.abort(),h==="readwrite"){for(var P=new Set,D=0,E=d;D<E.length;D++){var j=E[D],T=Bn["idb://".concat(l,"/").concat(j)];if(T){var R=i.table(j),O=T.optimisticOps.filter(function(de){return de.trans===C});if(C._explicit&&_&&C.mutatedParts)for(var I=0,M=Object.values(T.queries.query);I<M.length;I++)for(var N=0,U=(se=M[I]).slice();N<U.length;N++)ai((X=U[N]).obsSet,C.mutatedParts)&&(K(se,X),X.subscribers.forEach(function(de){return P.add(de)}));else if(0<O.length){T.optimisticOps=T.optimisticOps.filter(function(de){return de.trans!==C});for(var W=0,Y=Object.values(T.queries.query);W<Y.length;W++)for(var se,X,Z,le=0,re=(se=Y[W]).slice();le<re.length;le++)(X=re[le]).res!=null&&C.mutatedParts&&(_&&!X.dirty?(Z=Object.isFrozen(X.res),Z=qo(X.res,X.req,O,R,X,Z),X.dirty?(K(se,X),X.subscribers.forEach(function(de){return P.add(de)})):Z!==X.res&&(X.res=Z,X.promise=te.resolve({result:Z}))):(X.dirty&&K(se,X),X.subscribers.forEach(function(de){return P.add(de)})))}}}P.forEach(function(de){return de()})}}},C.addEventListener("abort",f(!1),{signal:w}),C.addEventListener("error",f(!1),{signal:w}),C.addEventListener("complete",f(!0),{signal:w})),C},table:function(d){var h=i.table(d),f=h.schema.primaryKey;return s(s({},h),{mutate:function(m){var w=ee.trans;if(f.outbound||w.db._options.cache==="disabled"||w.explicit||w.idbtrans.mode!=="readwrite")return h.mutate(m);var C=Bn["idb://".concat(l,"/").concat(d)];return C?(w=h.mutate(m),m.type!=="add"&&m.type!=="put"||!(50<=m.values.length||fi(f,m).some(function(_){return _==null}))?(C.optimisticOps.push(m),m.mutatedParts&&os(m.mutatedParts),w.then(function(_){0<_.numFailures&&(K(C.optimisticOps,m),(_=Ho(0,m,_))&&C.optimisticOps.push(_),m.mutatedParts&&os(m.mutatedParts))}),w.catch(function(){K(C.optimisticOps,m),m.mutatedParts&&os(m.mutatedParts)})):w.then(function(_){var P=Ho(0,s(s({},m),{values:m.values.map(function(D,E){var j;return _.failures[E]?D:(D=(j=f.keyPath)!==null&&j!==void 0&&j.includes(".")?S(D):s({},D),he(D,f.keyPath,_.results[E]),D)})}),_);C.optimisticOps.push(P),queueMicrotask(function(){return m.mutatedParts&&os(m.mutatedParts)})}),w):h.mutate(m)},query:function(m){if(!No(ee,h)||!Uo("query",m))return h.query(m);var w=((P=ee.trans)===null||P===void 0?void 0:P.db._options.cache)==="immutable",E=ee,C=E.requery,_=E.signal,P=(function(R,O,I,M){var N=Bn["idb://".concat(R,"/").concat(O)];if(!N)return[];if(!(O=N.queries[I]))return[null,!1,N,null];var U=O[(M.query?M.query.index.name:null)||""];if(!U)return[null,!1,N,null];switch(I){case"query":var W=U.find(function(Y){return Y.req.limit===M.limit&&Y.req.values===M.values&&Wo(Y.req.query.range,M.query.range)});return W?[W,!0,N,U]:[U.find(function(Y){return("limit"in Y.req?Y.req.limit:1/0)>=M.limit&&(!M.values||Y.req.values)&&Qc(Y.req.query.range,M.query.range)}),!1,N,U];case"count":return W=U.find(function(Y){return Wo(Y.req.query.range,M.query.range)}),[W,!!W,N,U]}})(l,d,"query",m),D=P[0],E=P[1],j=P[2],T=P[3];return D&&E?D.obsSet=m.obsSet:(E=h.query(m).then(function(R){var O=R.result;if(D&&(D.res=O),w){for(var I=0,M=O.length;I<M;++I)Object.freeze(O[I]);Object.freeze(O)}else R.result=S(O);return R}).catch(function(R){return T&&D&&K(T,D),Promise.reject(R)}),D={obsSet:m.obsSet,promise:E,subscribers:new Set,type:"query",req:m,dirty:!1},T?T.push(D):(T=[D],(j=j||(Bn["idb://".concat(l,"/").concat(d)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[m.query.index.name||""]=T)),Jc(D,T,C,_),D.promise.then(function(R){return{result:qo(R.result,m,j?.optimisticOps,h,D,w)}})}})}})}};function ls(i,l){return new Proxy(i,{get:function(d,h,f){return h==="db"?l:Reflect.get(d,h,f)}})}var bn=(lt.prototype.version=function(i){if(isNaN(i)||i<.1)throw new ae.Type("Given version is not a positive number");if(i=Math.round(10*i)/10,this.idbdb||this._state.isBeingOpened)throw new ae.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,i);var l=this._versions,d=l.filter(function(h){return h._cfg.version===i})[0];return d||(d=new this.Version(i),l.push(d),l.sort(Uc),d.stores({}),this._state.autoSchema=!1,d)},lt.prototype._whenReady=function(i){var l=this;return this.idbdb&&(this._state.openComplete||ee.letThrough||this._vip)?i():new te(function(d,h){if(l._state.openComplete)return h(new ae.DatabaseClosed(l._state.dbOpenError));if(!l._state.isBeingOpened){if(!l._state.autoOpen)return void h(new ae.DatabaseClosed);l.open().catch(ye)}l._state.dbReadyPromise.then(d,h)}).then(i)},lt.prototype.use=function(i){var l=i.stack,d=i.create,h=i.level,f=i.name;return f&&this.unuse({stack:l,name:f}),i=this._middlewares[l]||(this._middlewares[l]=[]),i.push({stack:l,create:d,level:h??10,name:f}),i.sort(function(m,w){return m.level-w.level}),this},lt.prototype.unuse=function(i){var l=i.stack,d=i.name,h=i.create;return l&&this._middlewares[l]&&(this._middlewares[l]=this._middlewares[l].filter(function(f){return h?f.create!==h:!!d&&f.name!==d})),this},lt.prototype.open=function(){var i=this;return Ln(et,function(){return Kc(i)})},lt.prototype._close=function(){var i=this._state,l=Zn.indexOf(this);if(0<=l&&Zn.splice(l,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}i.isBeingOpened||(i.dbReadyPromise=new te(function(d){i.dbReadyResolve=d}),i.openCanceller=new te(function(d,h){i.cancelOpen=h}))},lt.prototype.close=function(d){var l=(d===void 0?{disableAutoOpen:!0}:d).disableAutoOpen,d=this._state;l?(d.isBeingOpened&&d.cancelOpen(new ae.DatabaseClosed),this._close(),d.autoOpen=!1,d.dbOpenError=new ae.DatabaseClosed):(this._close(),d.autoOpen=this._options.autoOpen||d.isBeingOpened,d.openComplete=!1,d.dbOpenError=null)},lt.prototype.delete=function(i){var l=this;i===void 0&&(i={disableAutoOpen:!0});var d=0<arguments.length&&typeof arguments[0]!="object",h=this._state;return new te(function(f,m){function w(){l.close(i);var C=l._deps.indexedDB.deleteDatabase(l.name);C.onsuccess=He(function(){var _,P,D;_=l._deps,P=l.name,D=_.indexedDB,_=_.IDBKeyRange,si(D)||P===Vr||ri(D,_).delete(P).catch(ye),f()}),C.onerror=ln(m),C.onblocked=l._fireOnBlocked}if(d)throw new ae.InvalidArgument("Invalid closeOptions argument to db.delete()");h.isBeingOpened?h.dbReadyPromise.then(w):w()})},lt.prototype.backendDB=function(){return this.idbdb},lt.prototype.isOpen=function(){return this.idbdb!==null},lt.prototype.hasBeenClosed=function(){var i=this._state.dbOpenError;return i&&i.name==="DatabaseClosed"},lt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},lt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(lt.prototype,"tables",{get:function(){var i=this;return a(this._allTables).map(function(l){return i._allTables[l]})},enumerable:!1,configurable:!0}),lt.prototype.transaction=function(){var i=function(l,d,h){var f=arguments.length;if(f<2)throw new ae.InvalidArgument("Too few arguments");for(var m=new Array(f-1);--f;)m[f-1]=arguments[f];return h=m.pop(),[l,Ie(m),h]}.apply(this,arguments);return this._transaction.apply(this,i)},lt.prototype._transaction=function(i,l,d){var h=this,f=ee.trans;f&&f.db===this&&i.indexOf("!")===-1||(f=null);var m,w,C=i.indexOf("?")!==-1;i=i.replace("!","").replace("?","");try{if(w=l.map(function(P){if(P=P instanceof h.Table?P.name:P,typeof P!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return P}),i=="r"||i===Ws)m=Ws;else{if(i!="rw"&&i!=Ks)throw new ae.InvalidArgument("Invalid transaction mode: "+i);m=Ks}if(f){if(f.mode===Ws&&m===Ks){if(!C)throw new ae.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");f=null}f&&w.forEach(function(P){if(f&&f.storeNames.indexOf(P)===-1){if(!C)throw new ae.SubTransaction("Table "+P+" not included in parent transaction.");f=null}}),C&&f&&!f.active&&(f=null)}}catch(P){return f?f._promise(null,function(D,E){E(P)}):at(P)}var _=function P(D,E,j,T,R){return te.resolve().then(function(){var O=ee.transless||ee,I=D._createTransaction(E,j,D._dbSchema,T);if(I.explicit=!0,O={trans:I,transless:O},T)I.idbtrans=T.idbtrans;else try{I.create(),I.idbtrans._explicit=!0,D._state.PR1398_maxLoop=3}catch(U){return U.name===Qe.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return P(D,E,j,null,R)})):at(U)}var M,N=ct(R);return N&&Jn(),O=te.follow(function(){var U;(M=R.call(I,I))&&(N?(U=Cn.bind(null,null),M.then(U,U)):typeof M.next=="function"&&typeof M.throw=="function"&&(M=ui(M)))},O),(M&&typeof M.then=="function"?te.resolve(M).then(function(U){return I.active?U:at(new ae.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):O.then(function(){return M})).then(function(U){return T&&I._resolve(),I._completion.then(function(){return U})}).catch(function(U){return I._reject(U),at(U)})})}.bind(null,this,m,w,f,d);return f?f._promise(m,_,"lock"):ee.trans?Ln(ee.transless,function(){return h._whenReady(_)}):this._whenReady(_)},lt.prototype.table=function(i){if(!y(this._allTables,i))throw new ae.InvalidTable("Table ".concat(i," does not exist"));return this._allTables[i]},lt);function lt(i,l){var d=this;this._middlewares={},this.verno=0;var h=lt.dependencies;this._options=l=s({addons:lt.addons,autoOpen:!0,indexedDB:h.indexedDB,IDBKeyRange:h.IDBKeyRange,cache:"cloned"},l),this._deps={indexedDB:l.indexedDB,IDBKeyRange:l.IDBKeyRange},h=l.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var f,m,w,C,_,P={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ye,dbReadyPromise:null,cancelOpen:ye,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:l.autoOpen};P.dbReadyPromise=new te(function(E){P.dbReadyResolve=E}),P.openCanceller=new te(function(E,j){P.cancelOpen=j}),this._state=P,this.name=i,this.on=gr(this,"populate","blocked","versionchange","close",{ready:[It,ye]}),this.on.ready.subscribe=ie(this.on.ready.subscribe,function(E){return function(j,T){lt.vip(function(){var R,O=d._state;O.openComplete?(O.dbOpenError||te.resolve().then(j),T&&E(j)):O.onReadyBeingFired?(O.onReadyBeingFired.push(j),T&&E(j)):(E(j),R=d,T||E(function I(){R.on.ready.unsubscribe(j),R.on.ready.unsubscribe(I)}))})}}),this.Collection=(f=this,br(jc.prototype,function(M,I){this.db=f;var T=$o,R=null;if(I)try{T=I()}catch(N){R=N}var O=M._ctx,I=O.table,M=I.hook.reading.fire;this._ctx={table:I,index:O.index,isPrimKey:!O.index||I.schema.primKey.keyPath&&O.index===I.schema.primKey.name,range:T,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:R,or:O.or,valueMapper:M!==ke?M:null}})),this.Table=(m=this,br(So.prototype,function(E,j,T){this.db=m,this._tx=T,this.name=E,this.schema=j,this.hook=m._allTables[E]?m._allTables[E].hook:gr(null,{creating:[Ze,ye],reading:[Pt,ke],updating:[tn,ye],deleting:[xn,ye]})})),this.Transaction=(w=this,br(Fc.prototype,function(E,j,T,R,O){var I=this;this.db=w,this.mode=E,this.storeNames=j,this.schema=T,this.chromeTransactionDurability=R,this.idbtrans=null,this.on=gr(this,"complete","error","abort"),this.parent=O||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new te(function(M,N){I._resolve=M,I._reject=N}),this._completion.then(function(){I.active=!1,I.on.complete.fire()},function(M){var N=I.active;return I.active=!1,I.on.error.fire(M),I.parent?I.parent._reject(M):N&&I.idbtrans&&I.idbtrans.abort(),at(M)})})),this.Version=(C=this,br(Wc.prototype,function(E){this.db=C,this._cfg={version:E,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(_=this,br(Io.prototype,function(E,j,T){if(this.db=_,this._ctx={table:E,index:j===":id"?null:j,or:T},this._cmp=this._ascending=Pe,this._descending=function(R,O){return Pe(O,R)},this._max=function(R,O){return 0<Pe(R,O)?R:O},this._min=function(R,O){return Pe(R,O)<0?R:O},this._IDBKeyRange=_._deps.IDBKeyRange,!this._IDBKeyRange)throw new ae.MissingAPI})),this.on("versionchange",function(E){0<E.newVersion?console.warn("Another connection wants to upgrade database '".concat(d.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(d.name,"'. Closing db now to resume the delete request.")),d.close({disableAutoOpen:!1})}),this.on("blocked",function(E){!E.newVersion||E.newVersion<E.oldVersion?console.warn("Dexie.delete('".concat(d.name,"') was blocked")):console.warn("Upgrade '".concat(d.name,"' blocked by other connection holding version ").concat(E.oldVersion/10))}),this._maxKey=xr(l.IDBKeyRange),this._createTransaction=function(E,j,T,R){return new d.Transaction(E,j,T,d._options.chromeTransactionDurability,R)},this._fireOnBlocked=function(E){d.on("blocked").fire(E),Zn.filter(function(j){return j.name===d.name&&j!==d&&!j._state.vcFired}).map(function(j){return j.on("versionchange").fire(E)})},this.use(Yc),this.use(Zc),this.use(Xc),this.use(Vc),this.use(Gc);var D=new Proxy(this,{get:function(E,j,T){if(j==="_vip")return!0;if(j==="table")return function(O){return ls(d.table(O),D)};var R=Reflect.get(E,j,T);return R instanceof So?ls(R,D):j==="tables"?R.map(function(O){return ls(O,D)}):j==="_createTransaction"?function(){return ls(R.apply(this,arguments),D)}:R}});this.vip=D,h.forEach(function(E){return E(d)})}var cs,Nt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",ed=(mi.prototype.subscribe=function(i,l,d){return this._subscribe(i&&typeof i!="function"?i:{next:i,error:l,complete:d})},mi.prototype[Nt]=function(){return this},mi);function mi(i){this._subscribe=i}try{cs={indexedDB:o.indexedDB||o.mozIndexedDB||o.webkitIndexedDB||o.msIndexedDB,IDBKeyRange:o.IDBKeyRange||o.webkitIDBKeyRange}}catch{cs={indexedDB:null,IDBKeyRange:null}}function Ko(i){var l,d=!1,h=new ed(function(f){var m=ct(i),w,C=!1,_={},P={},D={get closed(){return C},unsubscribe:function(){C||(C=!0,w&&w.abort(),E&&_n.storagemutated.unsubscribe(T))}};f.start&&f.start(D);var E=!1,j=function(){return qs(R)},T=function(O){is(_,O),ai(P,_)&&j()},R=function(){var O,I,M;!C&&cs.indexedDB&&(_={},O={},w&&w.abort(),w=new AbortController,M=(function(N){var U=Fe();try{m&&Jn();var W=kn(i,N);return W=m?W.finally(Cn):W}finally{U&&Ge()}})(I={subscr:O,signal:w.signal,requery:j,querier:i,trans:null}),Promise.resolve(M).then(function(N){d=!0,l=N,C||I.signal.aborted||(_={},(function(U){for(var W in U)if(y(U,W))return;return 1})(P=O)||E||(_n(vr,T),E=!0),qs(function(){return!C&&f.next&&f.next(N)}))},function(N){d=!1,["DatabaseClosedError","AbortError"].includes(N?.name)||C||qs(function(){C||f.error&&f.error(N)})}))};return setTimeout(j,0),D});return h.hasValue=function(){return d},h.getValue=function(){return l},h}var Nn=bn;function gi(i){var l=Tn;try{Tn=!0,_n.storagemutated.fire(i),di(i,!0)}finally{Tn=l}}$(Nn,s(s({},Be),{delete:function(i){return new Nn(i,{addons:[]}).delete()},exists:function(i){return new Nn(i,{addons:[]}).open().then(function(l){return l.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(i){try{return l=Nn.dependencies,d=l.indexedDB,l=l.IDBKeyRange,(si(d)?Promise.resolve(d.databases()).then(function(h){return h.map(function(f){return f.name}).filter(function(f){return f!==Vr})}):ri(d,l).toCollection().primaryKeys()).then(i)}catch{return at(new ae.MissingAPI)}var l,d},defineClass:function(){return function(i){u(this,i)}},ignoreTransaction:function(i){return ee.trans?Ln(ee.transless,i):i()},vip:ii,async:function(i){return function(){try{var l=ui(i.apply(this,arguments));return l&&typeof l.then=="function"?l:te.resolve(l)}catch(d){return at(d)}}},spawn:function(i,l,d){try{var h=ui(i.apply(d,l||[]));return h&&typeof h.then=="function"?h:te.resolve(h)}catch(f){return at(f)}},currentTransaction:{get:function(){return ee.trans||null}},waitFor:function(i,l){return l=te.resolve(typeof i=="function"?Nn.ignoreTransaction(i):i).timeout(l||6e4),ee.trans?ee.trans.waitFor(l):l},Promise:te,debug:{get:function(){return Le},set:function(i){Ke(i)}},derive:L,extend:u,props:$,override:ie,Events:gr,on:_n,liveQuery:Ko,extendObservabilitySet:is,getByKeyPath:J,setByKeyPath:he,delByKeyPath:function(i,l){typeof l=="string"?he(i,l,void 0):"length"in l&&[].map.call(l,function(d){he(i,d,void 0)})},shallowClone:$e,deepClone:S,getObjectDiff:hi,cmp:Pe,asap:V,minKey:-1/0,addons:[],connections:Zn,errnames:Qe,dependencies:cs,cache:Bn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(i){return parseInt(i)}).reduce(function(i,l,d){return i+l/Math.pow(10,2*d)})})),Nn.maxKey=xr(Nn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(_n(vr,function(i){Tn||(i=new CustomEvent(Xs,{detail:i}),Tn=!0,dispatchEvent(i),Tn=!1)}),addEventListener(Xs,function(i){i=i.detail,Tn||gi(i)}));var nr,Tn=!1,Vo=function(){};return typeof BroadcastChannel<"u"&&((Vo=function(){(nr=new BroadcastChannel(Xs)).onmessage=function(i){return i.data&&gi(i.data)}})(),typeof nr.unref=="function"&&nr.unref(),_n(vr,function(i){Tn||nr.postMessage(i)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(i){if(!bn.disableBfCache&&i.persisted){Le&&console.debug("Dexie: handling persisted pagehide"),nr?.close();for(var l=0,d=Zn;l<d.length;l++)d[l].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(i){!bn.disableBfCache&&i.persisted&&(Le&&console.debug("Dexie: handling persisted pageshow"),Vo(),gi({all:new wt(-1/0,[[]])}))})),te.rejectionMapper=function(i,l){return!i||i instanceof We||i instanceof TypeError||i instanceof SyntaxError||!i.name||!Je[i.name]?i:(l=new Je[i.name](l||i.message,i),"stack"in i&&F(l,"stack",{get:function(){return this.inner.stack}}),l)},Ke(Le),s(bn,Object.freeze({__proto__:null,Dexie:bn,liveQuery:Ko,Entity:ko,cmp:Pe,PropModSymbol:gn,PropModification:yr,replacePrefix:function(i,l){return new yr({replacePrefix:[i,l]})},add:function(i){return new yr({add:i})},remove:function(i){return new yr({remove:i})},default:bn,RangeSet:wt,mergeRanges:Cr,rangesOverlap:zo}),{default:bn}),bn})})(bs)),bs.exports}var Od=Dd();const Oi=Id(Od),aa=Symbol.for("Dexie"),xs=globalThis[aa]||(globalThis[aa]=Oi);if(Oi.semVer!==xs.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Oi.semVer} and ${xs.semVer}`);const{liveQuery:fl,mergeRanges:nb,rangesOverlap:rb,RangeSet:sb,cmp:ib,Entity:ob,PropModSymbol:ab,PropModification:lb,replacePrefix:cb,add:db,remove:ub}=xs,jd="easydb";let us=null;function zd(){if(us)return us;const e=new xs(jd);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>Ld()),us={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},us}function Ld(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function rr(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(s=>pl(s,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const s=fl(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>s.unsubscribe()}}}function Fd(e,t){return{async find(r){const s=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return s.toArray();const n=Object.entries(r);return s.filter(o=>pl(o,n)).toArray()},async findOne(r){const s=await e.get(r);return s&&s.tableId===t?s:null},async insert(r){const s={...r,tableId:t};return await e.add(s),s},async bulkInsert(r){if(r.length===0)return[];const s=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(s),s},async upsert(r){const s={...r,tableId:t};return await e.put(s),s},async patch(r,s){if(await e.update(r,s)===0)throw new Error(`row patch: no row ${r}`);const o=await e.get(r);if(!o)throw new Error(`row patch: row ${r} vanished after update`);return o},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=fl(()=>e.where("tableId").equals(t).toArray()).subscribe({next:o=>r(o)});return()=>n.unsubscribe()}}}function pl(e,t){for(const[r,s]of t)if(e[r]!==s)return!1;return!0}function Md(e){return{workspaces:rr(e.workspaces),tables:rr(e.tables),settings:rr(e.settings),plugins:rr(e.plugins),viewTemplates:rr(e.viewTemplates),viewInstances:rr(e.viewInstances),rows:t=>Fd(e.rows,t)}}function Bd(e){const{base:t,providers:r,tableById:s,ctx:n}=e,o=new Map;return{...t,rows(a){const c=s(a),u=c?.source;if(u){const p=r.get(u.type);if(p){const x=JSON.stringify(u),y=o.get(a);if(y&&y.key===x)return y.coll;const $=p.create(c,n);return o.set(a,{key:x,coll:$}),$}}return o.delete(a),t.rows(a)}}}function Nd(){const e=new Map;return{on(t,r){let s=e.get(t);return s||(s=new Set,e.set(t,s)),s.add(r),()=>{s.delete(r)}},emit(t,r){const s=e.get(t);if(s)for(const n of s)try{n(r)}catch(o){console.error(`[event:${String(t)}] listener threw`,o)}}}}const Gt=qe`
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
`;function Yt(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const la=new WeakSet;function Xt(e,t){if(la.has(t))return;la.add(t);let r=0,s=0,n=0,o=0,a=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",u=>{if(u.target.closest("button, input, textarea, select, a, label"))return;a=!0,r=u.clientX,s=u.clientY;const x=e.getBoundingClientRect();n=x.left,o=x.top,t.setPointerCapture(u.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",u=>{if(!a)return;const p=u.clientX-r,x=u.clientY-s,y=-e.offsetWidth+80,$=window.innerWidth-80,B=0,F=window.innerHeight-40,L=Math.max(y,Math.min($,n+p)),H=Math.max(B,Math.min(F,o+x));e.style.position="fixed",e.style.left=`${L}px`,e.style.top=`${H}px`,e.style.margin="0"});const c=u=>{if(a){a=!1;try{t.releasePointerCapture(u.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c)}var Ud=Object.defineProperty,Hd=Object.getOwnPropertyDescriptor,ml=(e,t,r,s)=>{for(var n=s>1?void 0:s?Hd(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&Ud(t,r,n),n};let Ht=class extends Ne{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitChoice=e=>{if(e.preventDefault(),this.current?.kind!=="choice")return;const t=this.current.options[0];t!==void 0&&this.closeAndResolve(t)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),Ht.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ht.instance===this&&(Ht.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&Xt(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(s=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:s}})}choice(e,t,r="Choose"){return this.enqueue(s=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:s}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return A`
      <dialog @cancel=${this.onCancel} @keydown=${Yt}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):me}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return A`
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
        `;case"prompt":return A`
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
        `;case"choice":return A`
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
              ${e.message?A`<p class="message">${e.message}</p>`:me}
              <div class="choices">
                ${e.options.map((t,r)=>r===0?A`<button type="submit" class="choice primary" autofocus>${t}</button>`:A`<button
                        type="button"
                        class="choice"
                        @click=${()=>this.closeAndResolve(t)}
                      >
                        ${t}
                      </button>`)}
              </div>
            </div>
          </form>
        `}}};Ht.instance=null;Ht.styles=[Gt,qe`
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
    `];ml([q()],Ht.prototype,"current",2);Ht=ml([tt("host-dialogs")],Ht);const Qt=qe`
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
`;var qd=Object.defineProperty,Wd=Object.getOwnPropertyDescriptor,gl=(e,t,r,s)=>{for(var n=s>1?void 0:s?Wd(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&qd(t,r,n),n};let wn=class extends Ne{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),wn.instance=this}disconnectedCallback(){super.disconnectedCallback(),wn.instance===this&&(wn.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const s=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),s)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return A`
      ${this.toasts.map(e=>A`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${Vd(e.kind)}</span>
            <span class="body">
              ${e.title?A`<strong>${e.title}</strong>`:""}${Kd(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};wn.instance=null;wn.styles=[Qt,qe`
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
    `];gl([q()],wn.prototype,"toasts",2);wn=gl([tt("toast-host")],wn);function Kd(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let s=0,n;for(;(n=t.exec(e))!==null;)n.index>s&&r.push(e.slice(s,n.index)),r.push({url:n[0]}),s=n.index+n[0].length;return s<e.length&&r.push(e.slice(s)),r.length===0?e:r.map(o=>typeof o=="string"?o:A`<a href=${o.url} target="_blank" rel="noopener noreferrer">${o.url}</a>`)}function Vd(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Gd(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map,commands:[]}}function An(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function wi(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function Yd(e){return{registerHeaderButton:t=>An(e.headerButtons,t),registerFooterButton:t=>An(e.footerButtons,t),registerTableButton:t=>An(e.tableButtons,t),registerImporter:t=>An(e.importers,t),registerExporter:t=>An(e.exporters,t),registerUrlSource:t=>An(e.urlSources,t),registerDropHandler:t=>An(e.dropHandlers,t),registerCellRenderer:(t,r)=>wi(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>wi(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>wi(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerCommand:t=>An(e.commands,t),openCommandPalette:()=>{document.dispatchEvent(new CustomEvent("easydb:open-command-palette"))},registerSettings:(t,r,s)=>(e.settings.set(t,{name:r,fields:s}),()=>{e.settings.get(t)?.name===r&&e.settings.delete(t)}),dialogs:Xd}}const Xd={async alert(e,t){const r=Ht.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=Ht.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const s=Ht.instance;return s?s.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const s=Ht.instance;if(s)return s.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=wn.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},ro="/easydbaccess/settings.json",bl="/easydbaccess/secrets.txt";function jr(e){try{return globalThis.localStorage??null}catch{return null}}function Ds(e){const t=jr();if(!t)return{};const r=t.getItem(ro);if(!r)return{};try{const s=JSON.parse(r);return s&&typeof s=="object"?s:{}}catch{return{}}}function so(e,t){return Ds()[e]}function Qd(e,t,r){const s=jr();if(!s)return;const n=Ds();n[e]=t,s.setItem(ro,JSON.stringify(n))}function Jd(e,t){const r=jr();if(!r)return;const s=Ds();e in s&&(delete s[e],r.setItem(ro,JSON.stringify(s)))}function ji(e,t){return e in Ds()}function Os(e){return jr()?.getItem(bl)??""}function yl(e,t){jr()?.setItem(bl,e)}function js(e){const t={};for(const r of e.split(/\r?\n/)){const s=r.trim();if(!s||s.startsWith("#"))continue;const n=s.indexOf(":");if(n<0)continue;const o=s.slice(0,n).trim(),a=s.slice(n+1).trim();o&&(t[o]=a)}return t}function wl(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(r,s)=>{const n=t[s.trim()];return n===void 0?r:n})}function Zd(e){const t=Yd(e.registries),r=e.registries.rowSources,s=a=>(r.set(a.type,a),()=>{r.get(a.type)===a&&r.delete(a.type)}),n=tu(e.store,e.registries),o={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:o,registerRowSource:s,settings:n,backend:{fetch:async(a,c)=>{const u=await eu(e.store),p=c?.body instanceof ArrayBuffer;if(!u||p)return globalThis.fetch(a,c);const x={url:a};return c?.method&&(x.method=c.method),c?.headers&&(x.headers=c.headers),typeof c?.body=="string"&&(x.body=c.body),globalThis.fetch(`${u}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)})},async saveFile(a,c,u){const p=typeof c=="string"?new Blob([c],{type:u??"application/octet-stream"}):c,x=URL.createObjectURL(p),y=document.createElement("a");y.href=x,y.download=a,y.rel="noopener",document.body.appendChild(y),y.click(),y.remove(),setTimeout(()=>URL.revokeObjectURL(x),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function eu(e){const t="server-sync:url";let r=ji(t)?so(t):void 0;return r===void 0&&(r=(await e.settings.findOne(t))?.value),typeof r!="string"||r.length===0?null:wl(r,js(Os())).replace(/\/+$/,"")}function tu(e,t){const r=(o,a)=>`${o}:${a}`,s=(o,a)=>t.settings.get(o)?.fields.find(c=>c.key===a),n=o=>typeof o=="string"?wl(o,js(Os())):o;return{async get(o,a){const c=r(o,a);let u;if(ji(c))u=so(c);else{const p=await e.settings.findOne(c);u=p?p.value:s(o,a)?.default}return n(u)},async set(o,a,c,u){const p=r(o,a);(u??s(o,a)?.scope??"workspace")==="user"?(Qd(p,c),await e.settings.remove(p).catch(()=>{})):(await e.settings.upsert({key:p,value:c}),Jd(p))},async placement(o,a){const c=r(o,a);return ji(c)?"user":await e.settings.findOne(c)?"workspace":null}}}const nu={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV or TSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function ru(e){e.ui.registerImporter(su),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const s=gu(t).filter(bu);if(s.length===0)return!1;t.preventDefault();for(const n of s)await iu(e,n);return!0})}const su={id:"csv",label:"CSV / TSV",accept:[".csv",".tsv",".tab","text/csv","text/tab-separated-values"],async parse(e){const t=typeof e=="string"?e:await e.text();return Qn(t)}};async function iu(e,t){await $s(e,await t.text(),t.name)}async function $s(e,t,r,s={}){const n=e.workspaceId();if(!n)throw new Error("csv-import: no active workspace");const o=Tl(r||"imported")||"imported",a=Al(r),c=(await e.store.tables.find()).find($=>$.workspaceId===n&&$.name===o);let u,p;if(c){const $=await e.ui.dialogs.choice(`A table named "${o}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!$)return;$==="Append rows"?(p="append",u=c.id):$==="Overwrite rows"?(p="overwrite",u=c.id):(p="new",u=hs())}else p="new",u=hs();e.events.emit("import:before",{source:"csv",tableId:u});let x;if(p==="new"){const $=Qn(t,{maxRows:s.maxRows,separator:a});let B=$.columns,F=$.rows;if(s.editColumns){const H=await s.editColumns(B);if(H===null)return;F=yu(F,B,H),B=H}s.maxRows!=null&&(F=F.slice(0,s.maxRows));const L=c?`${o} (${Date.now().toString(36)})`:o;await e.store.tables.insert({id:u,workspaceId:n,name:L,code:zi(L),columns:B,view:"table",...s.origin?{origin:s.origin}:{},updatedAt:Date.now()}),x=F.map(H=>({id:hs(),tableId:u,data:H,updatedAt:Date.now()}))}else{const $=c.columns,B=vl(t,{maxRows:s.maxRows,separator:a});if(x=(s.maxRows!=null?B.rows.slice(0,s.maxRows):B.rows).map(L=>{const H={};for(let G=0;G<$.length;G++){const ue=$[G];H[ue.field]=El(L[G]??"",ue.type)}return{id:hs(),tableId:u,data:H,updatedAt:Date.now()}}),p==="overwrite"){const L=e.store.rows(u),H=await L.find();await L.bulkRemove(H.map(G=>G.id))}}await e.store.rows(u).bulkInsert(x),e.events.emit("import:after",{source:"csv",tableId:u,rowCount:x.length})}function vl(e,t={}){const r=e.replace(/﻿/,""),s=t.separator??kl(r),n=Cl(r,s,xl(t.maxRows));if(n.length===0)return{header:[],rows:[]};const o=n[0],a=n.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:o,rows:a}}function xl(e){return e!=null?e+1:void 0}async function $l(e,t){const s=new TextDecoder,n=t+1;let o="",a=0,c=!1,u=0;for(;u<e.size;){const p=new Uint8Array(await e.slice(u,u+1048576).arrayBuffer());u+=1048576;const x=s.decode(p,{stream:!0});for(let y=0;y<x.length;y++){const $=x[y];if($==='"')c=!c;else if($===`
`&&!c&&(a+=1,a>=n))return o+x.slice(0,y+1)}o+=x}return o}function Qn(e,t={}){const r=e.replace(/﻿/,""),s=t.separator??kl(r),n=Cl(r,s,xl(t.maxRows));if(n.length===0)return{columns:[],rows:[]};const o=n[0],a=n.slice(1).filter(B=>!(B.length===1&&B[0]==="")),c=o.map((B,F)=>lu(B,F)),u=Pl(c.map(B=>B.field)),p=a.map(B=>{const F={};for(let L=0;L<u.length;L++)F[u[L]]=B[L]??"";return F}),x=c.map((B,F)=>B.type?B.type:cu(p.map(L=>L[u[F]]??"").filter(L=>L.length>0))),y=c.map((B,F)=>{const L=x[F]??"string",H={field:u[F],label:B.label,type:L},G=au(L),ue=B.renderer??G;return ue&&(H.renderer=ue),B.default!==void 0&&(H.default=B.default),B.max!=null&&(H.max=B.max),B.unique&&(H.unique=!0),B.notnull&&(H.notnull=!0),B.hidden&&(H.hidden=!0),H}),$=p.map(B=>{const F={};for(let L=0;L<u.length;L++){const H=u[L],G=x[L]??"string";F[H]=El(B[H]??"",G)}return F});return{columns:y,rows:$}}const ou=new Set(["string","number","boolean","date","datetime"]),ca={color:"color",image:"image"};function au(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function lu(e,t){const r=e.trim();if(!r.includes(":"))return{field:zi(r||`col_${t+1}`),label:r||`Column ${t+1}`};const s=r.split(":"),n=zi(s[0]||`col_${t+1}`),o=(s[1]??s[0]??"").trim()||n,a={field:n,label:o},c=(s[2]??"").trim();c&&(ou.has(c)?a.type=c:ca[c]&&(a.type="string",a.renderer=ca[c]));const u=(s[3]??"").trim();u&&(a.default=u);const p=(s[4]??"").trim();if(p){const y=Number(p);Number.isFinite(y)&&y>0&&(a.max=y)}const x=(s[5]??"").toLowerCase();return x.includes("u")&&(a.unique=!0),x.includes("n")&&(a.notnull=!0),x.includes("h")&&(a.hidden=!0),a}function kl(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const o of t)o in r&&(r[o]+=1);let s=",",n=-1;for(const o of[",",";","	"])(r[o]??0)>n&&(s=o,n=r[o]??0);return s}function Cl(e,t,r){const s=[];let n=[],o="",a=!1;for(let c=0;c<e.length;c++){const u=e[c];if(a)u==='"'?e[c+1]==='"'?(o+='"',c++):a=!1:o+=u;else if(u==='"')a=!0;else if(u===t)n.push(o),o="";else if(u===`
`||u==="\r"){if(u==="\r"&&e[c+1]===`
`&&c++,n.push(o),s.push(n),n=[],o="",r!=null&&s.length>=r)return s}else o+=u}return(o.length>0||n.length>0)&&(n.push(o),s.push(n)),s}function cu(e){return e.length===0?"string":e.every(uu)?"boolean":e.every(hu)?"number":e.every(pu)?"datetime":e.every(fu)?"date":"string"}const du=/^(true|false|yes|no|0|1)$/i;function uu(e){return du.test(e.trim())}function hu(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function fu(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function pu(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function El(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const s=Number(r);return Number.isFinite(s)?s:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return Sl(r);case"datetime":return mu(r);default:return e}}function Sl(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let s=parseInt(t[1],10),n=parseInt(t[2],10);const o=t[3];let a=parseInt(o,10);o.length===2&&(a+=2e3);let c,u;return s>12?(c=s,u=n):n>12?(u=s,c=n):(c=s,u=n),`${a.toString().padStart(4,"0")}-${u.toString().padStart(2,"0")}-${c.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function mu(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const s=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(s)return`${Sl(`${s[1]}/${s[2]}/${s[3]}`)}T${s[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const o=n.toISOString();return`${o.slice(0,10)}T${o.slice(11,16)}`}return e}function gu(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const s of Array.from(t.items))if(s.kind==="file"){const n=s.getAsFile();n&&r.push(n)}return r}return[]}const _l=/\.(csv|tsv|tab)$/i;function Tl(e){return e.replace(_l,"")}function Al(e){return/\.(tsv|tab)$/i.test(e)?"	":void 0}function bu(e){return!!(_l.test(e.name)||e.type==="text/csv"||e.type==="application/csv"||e.type==="text/tab-separated-values")}function Pl(e){const t=new Map,r=new Set,s=[];for(const n of e){let o=n,a=t.get(n)??0;for(;r.has(o);)a+=1,o=`${n}_${a+1}`;t.set(n,a),r.add(o),s.push(o)}return s}function yu(e,t,r){return e.map(s=>{const n={};for(let o=0;o<t.length;o++)n[r[o].field]=s[t[o].field];return n})}function zi(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function hs(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const wu=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:Pl,importCsvText:$s,init:ru,meta:nu,parseCsv:Qn,parseCsvRaw:vl,readCsvHead:$l,separatorForName:Al,stripDelimitedExt:Tl},Symbol.toStringTag,{value:"Module"})),vu={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},xu={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return io(e,t)}};function $u(e){e.ui.registerExporter(xu),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const s=await t.store.tables.findOne(r.tableId);if(!s)return;const n=await t.store.rows(s.id).find(),o=io(s,n);await t.backend.saveFile(`${s.code||s.name||"table"}.csv`,o,"text/csv")}})}function io(e,t){const r=e.columns.map(o=>o.field),s=e.columns.map(o=>da(o.label??o.field)),n=t.map(o=>r.map(a=>da(ku(o.data[a]))).join(","));return[s.join(","),...n].join(`\r
`)}function ku(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function da(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const Cu=Object.freeze(Object.defineProperty({__proto__:null,init:$u,meta:vu,serializeCsv:io},Symbol.toStringTag,{value:"Module"}));var Eu=Object.defineProperty,Su=Object.getOwnPropertyDescriptor,dr=(e,t,r,s)=>{for(var n=s>1?void 0:s?Su(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&Eu(t,r,n),n};function Li(e,t={}){return(jt.instance??_u()).open(e,t)}function _u(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function Tu(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let jt=class extends Ne{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,s)=>r?s:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),jt.instance=this}disconnectedCallback(){super.disconnectedCallback(),jt.instance===this&&(jt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(r=>!r.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return A`
      <dialog @cancel=${this.onCancel} @keydown=${Yt}>
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
            ${this.message?A`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,r)=>A`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${r}`}
                      .checked=${this.selected[r]??!1}
                      @change=${()=>this.toggle(r)}
                    />
                    <label for=${`tsel-${r}`}>
                      <span class="name">${t.name}</span>
                      ${t.hidden?A`<span class="tag-hidden">hidden</span>`:""}
                      <span class="size">${Tu(t.size)}</span>
                      ${t.detail?A`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};jt.instance=null;jt.styles=[Gt,qe`
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
    `];dr([q()],jt.prototype,"items",2);dr([q()],jt.prototype,"selected",2);dr([q()],jt.prototype,"heading",2);dr([q()],jt.prototype,"message",2);dr([q()],jt.prototype,"confirmLabel",2);jt=dr([tt("table-select-dialog")],jt);const Au={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function Pu(e){e.ui.registerImporter(Iu),e.ui.registerDropHandler(async t=>{const s=Mu(t).filter(Bu);if(s.length===0)return!1;t.preventDefault();for(const n of s)await Ru(e,n);return!0})}const Iu={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=zr(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function Ru(e,t){await ks(e,await t.text(),t.name)}async function ks(e,t,r,s={}){const n=e.workspaceId();if(!n)throw new Error("json-import: no active workspace");let o;try{o=JSON.parse(t)}catch(H){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${H.message}`)});return}const a=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=zr(o,a);if(c.length===0)return;let u=c;if(c.length>1){const H=await Li(c.map(G=>({name:G.name,size:G.rows.length})),{title:"Import tables",message:`"${r}" contains ${c.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!H)return;u=H.map(G=>c[G])}const p=(await e.store.tables.find()).filter(H=>H.workspaceId===n),x=new Set(u.map(H=>H.name)),y=p.filter(H=>x.has(H.name));let $;if(y.length===0&&u.length===1)$="append-new";else{const H=y.length>0?[`Overwrite matching (${y.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],G=await e.ui.dialogs.choice(`Importing ${u.length} table${u.length===1?"":"s"} from "${r}".${y.length>0?`

${y.length} table${y.length===1?"":"s"} share a name with existing data.`:""}`,H,"JSON import");if(!G)return;G.startsWith("Overwrite matching")?$="overwrite-matching":G==="Replace entire workspace"?$="replace-workspace":$="append-new"}const B=2e3,F=u.reduce((H,G)=>H+(G.source?0:Math.min(G.rows.length,s.maxRows??1/0)),0);let L=null;if(F>=B){const{TopProgress:H}=await In(async()=>{const{TopProgress:G}=await Promise.resolve().then(()=>gc);return{TopProgress:G}},void 0);L=H.begin(`Importing ${r}…`)}try{if($==="replace-workspace")for(const ie of p){const oe=e.store.rows(ie.id),V=await oe.find();await oe.bulkRemove(V.map(J=>J.id)),await e.store.tables.remove(ie.id)}const H=new Map(p.map(ie=>[ie.name,ie])),G=new Map;let ue=0;for(const ie of u){const oe=ie.source,V=ie.origin??(!oe&&s.originUrl?{type:"json",url:s.originUrl}:void 0);let J;const he=$==="overwrite-matching"?H.get(ie.name):void 0;if(he){if(J=he.id,!he.source){const Te=e.store.rows(J),Ie=await Te.find();await Te.bulkRemove(Ie.map(g=>g.id))}await e.store.tables.patch(J,{columns:ie.columns,...ie.title?{title:ie.title}:{},...ie.windowGeometry?{windowGeometry:ie.windowGeometry}:{},...ie.sortColumn?{sortColumn:ie.sortColumn,sortAsc:ie.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...ie.filters?{filters:ie.filters}:{},...ie.labelColumn?{labelColumn:ie.labelColumn}:{},...ie.info?{info:ie.info}:{},...ie.deletedColumns?{deletedColumns:ie.deletedColumns}:{},source:oe??void 0,origin:V??void 0,updatedAt:Date.now()})}else J=pa(),e.events.emit("import:before",{source:"json",tableId:J}),await e.store.tables.insert({id:J,workspaceId:n,name:ie.name,code:Nu(ie.name),columns:ie.columns,view:"table",...ie.title?{title:ie.title}:{},...ie.windowGeometry?{windowGeometry:ie.windowGeometry}:{},...ie.sortColumn?{sortColumn:ie.sortColumn,sortAsc:ie.sortAsc??!0}:{},...ie.filters?{filters:ie.filters}:{},...ie.labelColumn?{labelColumn:ie.labelColumn}:{},...ie.info?{info:ie.info}:{},...ie.deletedColumns?{deletedColumns:ie.deletedColumns}:{},...oe?{source:oe}:{},...V?{origin:V}:{},updatedAt:Date.now()});G.set(ie.name,J);let $e=0;if(!oe){const Te=e.store.rows(J),g=(s.maxRows!=null?ie.rows.slice(0,s.maxRows):ie.rows).map(v=>({id:pa(),tableId:J,data:v,updatedAt:Date.now()}));await Te.bulkInsert(g),$e=g.length,ue+=$e,L?.fraction(F>0?ue/F:1)}e.events.emit("import:after",{source:"json",tableId:J,rowCount:$e})}await Du(e,o,n,G,$==="replace-workspace")}finally{L?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function Du(e,t,r,s,n){if(!bt(t))return;const o=t,a=Array.isArray(o.viewTemplates)?o.viewTemplates:[],c=Array.isArray(o.viewInstances)?o.viewInstances:[];if(!(a.length===0&&c.length===0)){if(n){const u=(await e.store.viewInstances.find()).filter(p=>p.workspaceId===r);await e.store.viewInstances.bulkRemove(u.map(p=>p.id))}for(const u of a)!bt(u)||typeof u.id!="string"||await e.store.viewTemplates.upsert({...u,workspaceId:r});for(const u of c){if(!bt(u)||typeof u.id!="string")continue;const p=(u.tableName?s.get(u.tableName):void 0)??u.tableId;p&&await e.store.viewInstances.upsert({...u,workspaceId:r,tableId:p})}}}function zr(e,t){if(bt(e)&&ua(e))return ha(e);if(bt(e)&&Array.isArray(e.tables)){const r=e,s=[];for(const n of r.tables){if(ju(n)){const o=n,a=bt(o.windowGeometry)?o.windowGeometry:void 0,c=typeof o.sortColumn=="string"?o.sortColumn:void 0,u=typeof o.sortAsc=="boolean"?o.sortAsc:void 0,p=typeof o.title=="string"?o.title:void 0,x=bt(o.filters)?o.filters:void 0,y=typeof o.labelColumn=="string"?o.labelColumn:void 0,$=bt(o.info)?o.info:void 0,B=Array.isArray(o.deletedColumns)?o.deletedColumns.filter(H=>typeof H=="string"):void 0,F=bt(o.source)&&typeof o.source.type=="string"?o.source:void 0,L=bt(o.origin)&&typeof o.origin.type=="string"&&typeof o.origin.url=="string"?o.origin:void 0;s.push({name:String(n.name),columns:n.columns.map(zu),rows:Array.isArray(n.rows)?n.rows.filter(bt):[],...p?{title:p}:{},...a?{windowGeometry:a}:{},...c?{sortColumn:c,sortAsc:u??!0}:{},...x?{filters:x}:{},...y?{labelColumn:y}:{},...$?{info:$}:{},...B?{deletedColumns:B}:{},...F?{source:F}:{},...L?{origin:L}:{}});continue}bt(n)&&ua(n)&&s.push(...ha(n))}return s}if(Array.isArray(e)){const r=e.filter(bt);return r.length===0?[]:[{name:t,...fa(r)}]}return bt(e)?[{name:t,...fa([e])}]:[]}function ua(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!bt(r))continue;const s=r;if(Array.isArray(s.dataArray)&&Array.isArray(s.columns))return!0}return!1}function ha(e){const t=[];for(const[r,s]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!bt(s))continue;const n=s;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const o=r.replace(/\.table\.json$/,""),a=n.columns.map(x=>Ou(x)),c=a.map(x=>x.field),u=n.dataArray.filter(x=>Array.isArray(x)).map(x=>{const y={};for(let $=0;$<c.length;$++)y[c[$]]=x[$];return y}),p={name:o,columns:a,rows:u};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const x=n.elementRect;p.windowGeometry={x:x.x,y:x.y,w:x.width??600,h:x.height??400,z:x.zIndex??100,minimized:!!x.minimized,maximized:!!x.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<c.length&&(p.sortColumn=c[n.sortColumn],p.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(p)}return t}function Ou(e){const t=String(e.field??"col"),r=String(e.name??t),s=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:s};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function ju(e){return bt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function zu(e){if(!bt(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let s=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(s==="color"||s==="image")&&(n=n??s,s="string");const o={field:r,label:String(t.label??r),type:s};return n&&(o.renderer=n),typeof t.script=="string"&&(o.script=t.script),o}function fa(e){const t=new Set;for(const n of e)for(const o of Object.keys(n))t.add(o);return{columns:Array.from(t).map(n=>({field:n,label:n,type:Lu(e.map(o=>o[n]))})),rows:e}}function Lu(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Fu(r))?"date":"string"}function Fu(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function bt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Mu(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const s of Array.from(t.items))if(s.kind==="file"){const n=s.getAsFile();n&&r.push(n)}return r}return[]}function Bu(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function Nu(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function pa(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Uu=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:ks,init:Pu,meta:Au,parsedToTables:zr},Symbol.toStringTag,{value:"Module"}));var Hu=Object.defineProperty,qu=Object.getOwnPropertyDescriptor,Lr=(e,t,r,s)=>{for(var n=s>1?void 0:s?qu(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&Hu(t,r,n),n};const Wu="https://latest.datasette.io/ephemeral";let Wt=class extends Ne{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,r)}catch(s){this.status=s?.message??String(s),this.statusKind="err";return}}this.finish({url:t,token:r})}}connectedCallback(){super.connectedCallback(),Wt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Wt.instance===this&&(Wt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return A`
      <dialog @cancel=${this.onCancel} @keydown=${Yt}>
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
                placeholder="e.g. ${Wu}"
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
    `}};Wt.instance=null;Wt.styles=[Gt,qe`
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
    `];Lr([q()],Wt.prototype,"url",2);Lr([q()],Wt.prototype,"token",2);Lr([q()],Wt.prototype,"status",2);Lr([q()],Wt.prototype,"statusKind",2);Wt=Lr([tt("datasette-connect-dialog")],Wt);function Il(e,t,r=[]){const s=new Set(e.map(c=>c.field)),n=new Set(r),o=[...e],a=[];for(const c of t)s.has(c.field)||n.has(c.field)||(o.push(c),a.push(c.field),s.add(c.field));return{columns:o,newFields:a}}function ma(e,t){return JSON.stringify(t.map(r=>e[r]))}function Ku(e,t){return t.every(r=>e[r]!==null&&e[r]!==void 0)}function Vu(e){const{oldRows:t,freshRows:r,pks:s,userAddedFields:n,deletedRemoteFields:o=[]}=e,a=new Set(o),c=y=>{const $={...y};for(const B of a)delete $[B];return $};if(!(s.length>0&&r.every(y=>Ku(y,s))))return{data:r.map(c),merged:!1};const p=new Map;for(const y of t){const $=ma(y.data,s);p.has($)||p.set($,y)}return{data:r.map(y=>{const $=c(y),B=ma(y,s),F=p.get(B);if(F)for(const L of n)Object.prototype.hasOwnProperty.call(F.data,L)&&($[L]=F.data[L]);return $}),merged:!0}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rl=Symbol.for(""),Gu=e=>{if(e?.r===Rl)return e?._$litStatic$},Yu=e=>({_$litStatic$:e,r:Rl}),ga=new Map,Xu=e=>(t,...r)=>{const s=r.length;let n,o;const a=[],c=[];let u,p=0,x=!1;for(;p<s;){for(u=t[p];p<s&&(o=r[p],(n=Gu(o))!==void 0);)u+=n+t[++p],x=!0;p!==s&&c.push(o),a.push(u),p++}if(p===s&&a.push(t[s]),x){const y=a.join("$$lit$$");(t=ga.get(y))===void 0&&(a.raw=a,ga.set(y,t=a)),r=c}return e(t,...r)},Qu=Xu(A);function ba(e){return e==null||String(e).trim()===""}function Dl(e){const t=[];let r="",s=!1,n=!1,o=!1,a=!1,c=!1,u=!0;const p=()=>{const x=o?r:r.trim();(s||a)&&t.push(c?{term:x,negate:a,prefix:c}:{term:x,negate:a}),r="",s=!1,n=!1,o=!1,a=!1,c=!1,u=!0};for(let x=0;x<e.length;x++){const y=e[x];if(y==='"'){if(n&&e[x+1]==='"'){r+='"',s=!0,x++;continue}n=!n,o=!0,s=!0,u=!1;continue}if(y===","&&!n){p();continue}if(y==="!"&&!n&&u&&!a&&!c){a=!0;continue}if(y==="^"&&!n&&u&&!c){c=!0;continue}u&&!n&&/\s/.test(y)||(u=!1),r+=y,/\s/.test(y)||(s=!0)}return p(),t}function Ju(e){return e.includes(",")||e.includes('"')||e!==e.trim()||e===""||e.startsWith("!")||e.startsWith("^")}function Ol(e){return e.map(t=>{const r=t.term===""&&t.negate?"":Ju(t.term)?`"${t.term.replace(/"/g,'""')}"`:t.term;return(t.negate?"!":"")+(t.prefix?"^":"")+r}).join(",")}function ya(e,t){const r=t.term;if(r.trim()===""||!t.prefix&&r.toUpperCase()==="NULL")return ba(e);const s=String(e??"").toLowerCase(),n=r.toLowerCase();return t.prefix?s.startsWith(n):s.includes(n)}function Fi(e,t){const r=Dl(t);if(r.length===0)return!0;for(const n of r)if(n.negate&&ya(e,n))return!1;const s=r.filter(n=>!n.negate);return s.length===0?!0:s.some(n=>ya(e,n))}var Zu=Object.defineProperty,eh=Object.getOwnPropertyDescriptor,ur=(e,t,r,s)=>{for(var n=s>1?void 0:s?eh(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&Zu(t,r,n),n};function vi(e){return Ol([{...e,negate:!1}])}let zt=class extends Ne{constructor(){super(...arguments),this.values=[],this.blanks=0,this.current="",this.search="",this.states=new Map,this.resolveFn=null,this.onChange=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r,s=0,n){return this.values=t,this.blanks=s,this.onChange=n??null,this.states=new Map(Dl(r??"").map(o=>[vi(o),{state:o.negate?"not":"on",token:o}])),this.current=r??"",this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(o=>{this.resolveFn=o,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}cycle(e){const t={term:e,negate:!1},r=vi(t),s=new Map(this.states),n=s.get(r);n===void 0?s.set(r,{state:"on",token:t}):n.state==="on"?s.set(r,{state:"not",token:n.token}):s.delete(r),this.states=s;const o=[...s.values()].map(a=>({...a.token,negate:a.state==="not"}));this.current=Ol(o),this.onChange?.(this.current)}close(e){this.onChange=null,document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),zt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),zt.instance===this&&(zt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(a=>a.value.toLowerCase().includes(e)),r=this.blanks>0&&"(blanks)".includes(e),s=a=>this.states.get(vi({term:a,negate:!1}))?.state,n=a=>A`
      <span class=${`cb${a?` ${a}`:""}`}
        >${a==="on"?"✓":a==="not"?"✕":""}</span
      >
    `,o=a=>a==="on"?"Included — click to exclude":a==="not"?"Excluded — click to clear":"Click to include → exclude → off";return A`
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
      ${t.length===0&&!r?A`<div class="empty">No matching values.</div>`:A`<ul>
            ${r?A`
                  <li
                    class="blanks"
                    title=${o(s("NULL"))}
                    @click=${()=>this.cycle("NULL")}
                  >
                    <span class="left">
                      ${n(s("NULL"))}
                      <span class="label"><em>(Blanks)</em></span>
                    </span>
                    <span class="count">${this.blanks}</span>
                  </li>
                `:""}
            ${t.slice(0,500).map(a=>{const c=s(a.value);return A`
                <li title=${o(c)} @click=${()=>this.cycle(a.value)}>
                  <span class="left">
                    ${n(c)}
                    <span class="label">${a.value}</span>
                  </span>
                  <span class="count">${a.count}</span>
                </li>
              `})}
          </ul>`}
      ${this.values.length>500?A`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button
          class="text"
          @click=${()=>{this.states=new Map,this.close({clear:!0})}}
        >
          Clear filter
        </button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};zt.instance=null;zt.styles=[Qt,qe`
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
    `];ur([Mt({type:Array})],zt.prototype,"values",2);ur([Mt({type:Number})],zt.prototype,"blanks",2);ur([Mt({type:String})],zt.prototype,"current",2);ur([q()],zt.prototype,"search",2);ur([q()],zt.prototype,"states",2);zt=ur([tt("filter-popover")],zt);var th=Object.defineProperty,nh=Object.getOwnPropertyDescriptor,sn=(e,t,r,s)=>{for(var n=s>1?void 0:s?nh(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&th(t,r,n),n};let Ft=class extends Ne{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const s of this.options)if(s.toLowerCase().includes(t)&&(r.push(s),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=this.open&&e.length>0,r=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return A`
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
        ${this.value?A`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${s=>s.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:me}
      </div>
      ${t?A`<ul
            class="dropdown"
            style=${r}
            @mousedown=${s=>s.preventDefault()}
          >
            ${e.map((s,n)=>A`
                <li
                  class=${n===this.highlightIdx?"highlighted":""}
                  @mousedown=${o=>o.preventDefault()}
                  @click=${()=>this.onPick(s)}
                >
                  ${s}
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
  `;sn([Mt({type:String})],Ft.prototype,"value",2);sn([Mt({type:Array})],Ft.prototype,"options",2);sn([Mt({type:String})],Ft.prototype,"placeholder",2);sn([q()],Ft.prototype,"open",2);sn([q()],Ft.prototype,"highlightIdx",2);sn([q()],Ft.prototype,"dropTop",2);sn([q()],Ft.prototype,"dropLeft",2);sn([q()],Ft.prototype,"dropMinWidth",2);sn([q()],Ft.prototype,"editing",2);sn([fn("input")],Ft.prototype,"inputEl",2);Ft=sn([tt("filter-combobox")],Ft);function rh(e){const t=e.trim(),r=t.split(/\s+/).filter(Boolean);if(!r.some(c=>c==="AND"||c==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:r.map(c=>c.toLowerCase())};const n=[];let o=[];for(const c of r)c==="OR"?(n.push(o),o=[]):c==="AND"||o.push(c.toLowerCase());n.push(o);const a=n.filter(c=>c.length>0);return a.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:a}}function Cs(e,t,r){const s=rh(t);if(s.kind==="boolean")return e.filter(u=>s.groups.some(p=>p.every(x=>r(u,x))));const{phrase:n,words:o}=s;if(o.length<=1)return n===""?e:e.filter(u=>r(u,n));const a=e.filter(u=>r(u,n));if(a.length>0)return a;const c=e.filter(u=>o.every(p=>r(u,p)));return c.length>0?c:e.filter(u=>o.some(p=>r(u,p)))}const Es="easydb:visible-count";function jl(e,t,r){e&&document.dispatchEvent(new CustomEvent(Es,{detail:{key:e,count:t,total:r}}))}function zl(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}var sh=Object.defineProperty,ih=Object.getOwnPropertyDescriptor,ut=(e,t,r,s)=>{for(var n=s>1?void 0:s?ih(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&sh(t,r,n),n};function wa(e,t){return Object.values(e.data).some(r=>r!=null&&String(r).toLowerCase().includes(t))}const oh=200,ah=10,xi=32;let rt=class extends Ne{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}get readOnlyView(){return this.viewMode&&!!this.viewInst?.readonly}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.()}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells(),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,r=this.rows.length;t===this.lastEmittedCount&&r===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=r,jl(e,t,r))}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",lh(t))}async bind(){if(!this.tableId)return;const e=await be(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const o=n.find(a=>a.id===this.tableId);o&&(this.tableColumns=o.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(n=>{const o=n.find(a=>a.id===this.viewInstanceId);o&&(this.viewInst=o,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const o=n.find(a=>a.id===this.tableId);o&&this.applyTable(o)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const s=window.setTimeout(()=>this.loading=!0,oh);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(s),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(s=>[s.field,s])),r=e.columnWidths??{};this.columns=e.visibleColumns.map(s=>t.get(s)).filter(s=>!!s).map(s=>{const n=r[s.field];return typeof n=="number"?{...s,width:n}:s}),this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,r){const s=await be();await this.commitCell(s,e,t,r)}async commitCell(e,t,r,s){const n=this.columns.find(o=>o.field===r);if(n){const o=ch(n,s,this.rows,t.id);if(o){await e.api.ui.dialogs.alert(o,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:s},updatedAt:Date.now()})}catch(o){await e.api.ui.dialogs.alert(o?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const r=e.target;typeof t=="boolean"?r.checked=t:r.value=t,r.blur()}renderReadonlyCell(e,t){return e.type==="boolean"?A`<input type="checkbox" .checked=${t===!0||t==="true"||t===1||t==="1"} disabled />`:t==null||t===""?A``:e.type==="date"?A`${$i(t)}`:e.type==="datetime"?A`${ki(t).replace("T"," ")}`:A`${String(t)}`}renderCell(e,t){const r=e.data[t.field],s=t.renderer,n=s?this.cellRenderers?.get(s):void 0;if(n){const o=Yu(n);return Qu`<${o}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        .readonly=${this.readOnlyView}
        @change=${a=>this.setCell(e,t.field,a.detail.value)}
      ></${o}>`}if(this.readOnlyView)return this.renderReadonlyCell(t,r);switch(t.type){case"boolean":{const o=r===!0||r==="true"||r===1||r==="1";return A`<input
          type="checkbox"
          .checked=${o}
          @keydown=${a=>this.cancelCellEdit(a,o)}
          @change=${a=>this.setCell(e,t.field,a.target.checked)}
        />`}case"date":return A`<input
          type="date"
          .value=${$i(r)}
          @keydown=${o=>this.cancelCellEdit(o,$i(r))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"datetime":return A`<input
          type="datetime-local"
          .value=${ki(r)}
          @keydown=${o=>this.cancelCellEdit(o,ki(r))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"number":return A`<input
          type="number"
          .value=${r==null?"":String(r)}
          @keydown=${o=>this.cancelCellEdit(o,r==null?"":String(r))}
          @change=${o=>{const a=o.target.value;this.setCell(e,t.field,a===""?null:Number(a))}}
        />`;default:return A`<input
          type="text"
          .value=${String(r??"")}
          @keydown=${o=>this.cancelCellEdit(o,String(r??""))}
          @change=${o=>this.setCell(e,t.field,o.target.value)}
        />`}}async deleteRow(e){const t=await be();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await be(),s=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,s):await r.store.tables.patch(this.tableId,s)}filteredRows(){const e=Object.entries(this.filters).filter(([,n])=>n&&n.trim().length>0),t=this.globalQuery.trim(),r=this.localQuery.trim();if(e.length===0&&t.length===0&&r.length===0)return this.rows;let s=this.rows;return e.length>0&&(s=s.filter(n=>e.every(([o,a])=>Fi(n.data[o],a)))),r&&(s=Cs(s,r,wa)),t&&(s=Cs(s,t,wa)),s}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,s=this.columns.find(a=>a.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,o=[...e];return o.sort((a,c)=>{const u=a.data[t],p=c.data[t],x=B=>B==null?0:B===""?1:2,y=x(u),$=x(p);return y!==2||$!==2?(y-$)*n:dh(u,p,s)*n}),o}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,s=zt.instance;if(!s)return;const n=new Map;let o=0;for(const u of this.rowsFacetedFor(t)){const p=u.data[t];if(p==null||String(p).trim()===""){o++;continue}const x=String(p);n.set(x,(n.get(x)??0)+1)}const a=[...n.entries()].map(([u,p])=>({value:u,count:p})).sort((u,p)=>p.count-u.count||u.value.localeCompare(p.value)),c=await s.open(r.getBoundingClientRect(),a,this.filters[t]??"",o,u=>this.onFilterInput(t,u));c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,s])=>s&&s.trim().length>0&&r!==e);return t.length===0?this.rows:this.rows.filter(r=>t.every(([s,n])=>Fi(r.data[s],n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,s=500;for(const n of this.visibleColumns){let o=!0;for(const c of t){const u=c.data[n.field];if(u==null)continue;if((typeof u=="string"?u:String(u)).length>=r){o=!1;break}}if(!o)continue;const a=new Set;for(const c of this.rowsFacetedFor(n.field)){const u=c.data[n.field];if(u==null||u==="")continue;const p=typeof u=="string"?u:String(u);if(!(p.length>=r)&&(a.add(p),a.size>=s))break}e.set(n.field,[...a].sort())}return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),r=this.visibleColumns,s=new Map;r.forEach((n,o)=>{if(n.width!=null)return;const a=t[o];a&&s.set(n.field,Math.round(a.getBoundingClientRect().width))}),s.size!==0&&(this.columns=this.columns.map(n=>s.has(n.field)?{...n,width:s.get(n.field)}:n))}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const s=r.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:s};const n=a=>{if(!this.resizing)return;const c=a.clientX-this.resizing.startX,u=Math.max(ah,this.resizing.startW+c);this.columns=this.columns.map(p=>p.field===this.resizing.field?{...p,width:u}:p)},o=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",o);const a=this.resizing?.field;if(this.resizing=null,!a)return;const c=await be();if(this.viewMode){const u={...this.viewInst?.columnWidths??{}};for(const p of this.columns)typeof p.width=="number"&&(u[p.field]=p.width);await c.store.viewInstances.patch(this.viewInstanceId,{columnWidths:u,updatedAt:Date.now()})}else await c.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",o)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const s=r.getBoundingClientRect(),n=e.clientX<s.left+s.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,s=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!s)return;const n=[...this.columns],o=n.findIndex(p=>p.field===r);if(o<0)return;const[a]=n.splice(o,1);let c=n.findIndex(p=>p.field===t);if(c<0){n.splice(o,0,a);return}s==="after"&&(c+=1),n.splice(c,0,a);const u=await be();this.viewMode?await u.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:n.map(p=>p.field),updatedAt:Date.now()}):await u.store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await be(),t={};for(const[s,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[s]=n);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}tableSizingStyle(e){return e.length===0||!e.every(r=>typeof r.width=="number")?null:`table-layout: fixed; width: ${e.reduce((r,s)=>r+(s.width??0),0)+xi}px; min-width: 0`}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,s=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,s+r);return{slice:e.slice(s,n),topPad:s*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:r,topPad:s,bottomPad:n}=this.virtualSlice(e),o=this.computeFilterSuggestions(),a=this.externalLoading?this.externalProgress:null;return A`
      ${this.loading||this.externalLoading?A`<div
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
          ${t.map(c=>A`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:${xi}px" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(c=>{const u=c.sortable!==!1,p=this.sortColumn===c.field&&this.sortDir,x=u?p==="asc"?"▲":p==="desc"?"▼":"⇅":"",y=`t-${c.type}`,$=this.dragSourceField===c.field,B=this.dropTargetField===c.field,F=B&&this.dropEdge==="before"?" drop-before":B&&this.dropEdge==="after"?" drop-after":"",L=(c.description?`${c.description}
`:"")+(c.units?`Units: ${c.units}
`:"")+`${c.field} — ${u?"click to sort, ":"not sortable · "}drag to reorder`;return A`
                <th
                  class=${`${y}${p?" sorted":""}${$?" drag-source":""}${F}${u?"":" no-sort"}`}
                  title=${L}
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
                      >${c.label}${c.units?A`<span class="col-units"> (${c.units})</span>`:""}</span
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
            <th style="width:${xi}px"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(c=>{const u=o.get(c.field)??[];return A`
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
          ${s>0?A`<tr class="spacer" style=${`height:${s}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${r.map(c=>A`
              <tr>
                ${t.map(u=>A`<td class=${`t-${u.type}${u.renderer?` r-${u.renderer}`:""}`}>
                      ${this.renderCell(c,u)}
                    </td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(c.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?A`<tr class="spacer" style=${`height:${n}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};rt.styles=[Qt,qe`
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
    `];ut([Mt({type:String})],rt.prototype,"tableId",2);ut([Mt({type:String})],rt.prototype,"viewInstanceId",2);ut([q()],rt.prototype,"columns",2);ut([q()],rt.prototype,"rows",2);ut([q()],rt.prototype,"sortColumn",2);ut([q()],rt.prototype,"sortDir",2);ut([q()],rt.prototype,"filters",2);ut([q()],rt.prototype,"globalQuery",2);ut([q()],rt.prototype,"localQuery",2);ut([q()],rt.prototype,"dragSourceField",2);ut([q()],rt.prototype,"dropTargetField",2);ut([q()],rt.prototype,"dropEdge",2);ut([q()],rt.prototype,"resizing",2);ut([q()],rt.prototype,"cellRenderers",2);ut([q()],rt.prototype,"scrollY",2);ut([q()],rt.prototype,"viewportHeight",2);ut([q()],rt.prototype,"loading",2);ut([q()],rt.prototype,"externalLoading",2);ut([q()],rt.prototype,"externalProgress",2);rt=ut([tt("data-table")],rt);function lh(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function ch(e,t,r,s){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(o=>o.id!==s&&o.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function $i(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function ki(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const s=new Date(t);if(Number.isNaN(s.getTime()))return"";const n=s.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function dh(e,t,r){switch(r){case"number":{const s=Number(e),n=Number(t);return Number.isNaN(s)||Number.isNaN(n)?String(e).localeCompare(String(t)):s-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const s=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(s)||Number.isNaN(n)?String(e).localeCompare(String(t)):s-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function dn(e,t,r){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:r}}))}class Kt extends Error{constructor(t,r){const s=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(s),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function hn(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),s={};for(const[c,u]of t.searchParams)s[c]=u;let n,o=null,a=null;if(r.length>=2){a=decodeURIComponent(r[r.length-1]),o=decodeURIComponent(r[r.length-2]);const c=r.slice(0,r.length-2).join("/");n=t.origin+(c?"/"+c:"")}else r.length===1&&(o=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:o,table:a,query:s}}function ar(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[s,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(s,String(n));return r.toString()}function uh(e){const t=e?.next_url??null,r=e?.next,s=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],o=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(c=>Array.isArray(c)&&o?Object.fromEntries(o.map((u,p)=>[u,c[p]])):c),nextUrl:t,nextToken:s,hasMore:t!=null||s!=null,truncated:e?.truncated===!0}}function hh(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function va(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],s={},n=e?.column_details;if(Array.isArray(n))for(const c of n)s[c.column??c.name]=c;else n&&typeof n=="object"&&Object.assign(s,n);for(const c of r)c in s||(s[c]={});const a=(r.length?r:Object.keys(s)).map(c=>{const u=s[c]||{},p=u.is_pk===!0||u.is_pk===1||t.includes(c),x={field:c,label:Ll(c),type:hh(u.sqlite_type??u.type,c)};return(u.notnull===!0||u.notnull===1||p)&&(x.notnull=!0),p&&(x.unique=!0),(u.hidden===!0||u.hidden===1)&&(x.hidden=!0),u.default!=null&&u.default!==""&&(x.default=u.default),x});if(t.length===0){const c=a.filter(u=>u.unique).map(u=>u.field);c.length&&t.push(...c)}return{columns:a,pks:t}}function Ll(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function zs(e){const t=[],r=new Set;for(const s of e)for(const n of Object.keys(s))r.has(n)||(r.add(n),t.push(n));return t.map(s=>({field:s,label:Ll(s),type:fh(e.map(n=>n[s]))}))}function fh(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&ph(r))?"datetime":"string"}function ph(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function mh(e){const t=new TextEncoder().encode(String(e));let r="";for(const s of t){const n=String.fromCharCode(s);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+s.toString(16).toUpperCase().padStart(2,"0")}return r}function gh(e,t){return!t||t.length===0?null:t.map(r=>mh(e[r])).join(",")}function bh(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const s of t){if(typeof s=="string"){r.push(s);continue}if(s&&typeof s=="object"&&typeof s.name=="string"){if(s.name==="_memory")continue;r.push(typeof s.route=="string"&&s.route?s.route:s.name)}}return r}function yh(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],s=[];for(const n of r){if(typeof n=="string"){s.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&s.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return s}async function Rn(e,t){let r;try{r=await e(t)}catch(n){const o=n?.message||"network error";throw new Kt({error:`Couldn't reach ${t} (${o}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Kt(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const s=await r.json();if(s&&s.ok===!1)throw new Kt(s,r.status);return s}async function oo(e,t){return bh(await Rn(e,`${t}/-/databases.json`))}async function Ss(e,t,r){return yh(await Rn(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function Ls(e,t){const r=ar(t,{_extra:"column_details"}),s=await Rn(e,r);let{columns:n,pks:o}=va(s),a=!!s&&s.column_details!=null,c=s?.count??null,u=s;if(n.length===0){const p=ar(t,{_extra:"columns"}),x=await Rn(e,p);({columns:n,pks:o}=va(x)),a=!!x&&x.column_details!=null,c=x?.count??c,u=x}return{columns:n,pks:o,count:c,typed:a,raw:u}}async function Mi(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const r=await Ls(e,t);return{db:t.db,table:t.table,count:r.count,hidden:!1,pks:r.pks}}function wh(e,t,r){const s=e&&typeof e=="object"?e:{},n=t&&r&&s.databases?.[t]?.tables?.[r]||t&&r&&s.databases?.[t]?.tables?.[r.toLowerCase()]||{},o=t&&s.databases?.[t]||{},a=F=>n[F]??o[F]??s[F],c={columns:{},units:{}};typeof n.sort=="string"&&(c.sort=n.sort),typeof n.sort_desc=="string"&&(c.sortDesc=n.sort_desc),typeof n.size=="number"&&(c.size=n.size),Array.isArray(n.sortable_columns)&&(c.sortableColumns=n.sortable_columns.slice()),typeof n.label_column=="string"&&(c.labelColumn=n.label_column),n.hidden===!0&&(c.hidden=!0),typeof n.description=="string"&&(c.description=n.description),typeof n.description_html=="string"&&(c.descriptionHtml=n.description_html);const u=a("source"),p=a("source_url"),x=a("license"),y=a("license_url"),$=a("about"),B=a("about_url");if(typeof u=="string"&&(c.source=u),typeof p=="string"&&(c.sourceUrl=p),typeof x=="string"&&(c.license=x),typeof y=="string"&&(c.licenseUrl=y),typeof $=="string"&&(c.about=$),typeof B=="string"&&(c.aboutUrl=B),n.columns&&typeof n.columns=="object")for(const[F,L]of Object.entries(n.columns))typeof L=="string"&&(c.columns[F]=L);if(n.units&&typeof n.units=="object")for(const[F,L]of Object.entries(n.units))typeof L=="string"&&(c.units[F]=L);return c}const xa=new Map;async function vh(e,t){let r=xa.get(t);return r||(r=Rn(e,`${t}/-/metadata.json`).catch(()=>({})),xa.set(t,r)),r}async function ao(e,t){const r=await vh(e,t.base);return wh(r,t.db,t.table)}function xh(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function lo(e,t){const r=e.sortableColumns!=null?new Set(e.sortableColumns):null,s=t.map(c=>{const u=e.columns[c.field],p=e.units[c.field],x=r?r.has(c.field):void 0;return u==null&&p==null&&x===void 0?c:{...c,...u!=null?{description:u}:{},...p!=null?{units:p}:{},...x!==void 0?{sortable:x}:{}}}),n=new Set(t.map(c=>c.field)),o={};e.sort&&n.has(e.sort)?(o.sortColumn=e.sort,o.sortAsc=!0):e.sortDesc&&n.has(e.sortDesc)&&(o.sortColumn=e.sortDesc,o.sortAsc=!1);const a=xh(e);return a&&(o.info=a),e.labelColumn&&n.has(e.labelColumn)&&(o.labelColumn=e.labelColumn),{columns:s,patch:o}}function co(e,t){if(t.length===0)return e;const r=new Map(zs(t).map(s=>[s.field,s.type]));return e.map(s=>{if(s.type!=="string")return s;const n=r.get(s.field);return n&&n!=="string"?{...s,type:n}:s})}async function Fr(e,t,r={}){const s=r.maxRows??1e4,o={_size:r.pageSize??1e3,...r.extraParams||{}};let a=r.startUrl??ar(t,o);const c=[];let u=!1,p=!1,x=0,y,$;for(;a;){let B;try{B=await Rn(e,a)}catch(H){if(c.length===0&&!r.startUrl)throw H;y=H instanceof Kt&&H.status?`stopped after ${c.length} rows: HTTP ${H.status}`:`stopped after ${c.length} rows: ${H?.message??String(H)}`,p=!0,$=a;break}const F=uh(B);c.push(...F.rows),u=u||F.truncated,x+=1,r.onProgress?.(c.length);const L=F.nextUrl!=null?F.nextUrl:F.nextToken!=null?ar(t,{_next:F.nextToken}):null;L&&c.length<s&&F.rows.length>0?a=L:(p=L!=null&&F.rows.length>0,p&&($=L??void 0),a=null)}return{rows:c,truncated:u,hasMore:p,pages:x,error:y,nextUrl:$}}function $h(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function Fl(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function Ml(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function Fs(e,t,r,s){let n;try{n=await e(t,{method:"POST",headers:$h(s),body:JSON.stringify(r)})}catch(a){throw new Kt({error:`Couldn't reach ${t} (${a?.message||"network error"}).`},0)}if(n&&n.ok===!1){let a=null;try{a=await n.json()}catch{}throw new Kt(a&&typeof a=="object"?a:{error:`HTTP ${n.status} for ${t}`},n.status)}const o=await n.json();if(o&&o.ok===!1)throw new Kt(o,n.status);return o}async function $a(e,t,r,s={}){const n=await Fs(e,Fl(t,"insert"),{rows:r,return:!0},s.token);return Array.isArray(n?.rows)?n.rows:[]}async function kh(e,t,r,s,n={}){const o=await Fs(e,Ml(t,r,"update"),{update:s,return:!0},n.token);return o&&typeof o.row=="object"&&o.row?o.row:Array.isArray(o?.rows)&&o.rows[0]?o.rows[0]:null}async function ka(e,t,r,s={}){await Fs(e,Ml(t,r,"delete"),{},s.token)}async function Ch(e,t,r,s={}){const n=await Fs(e,Fl(t,"upsert"),{rows:r,return:!0},s.token);return Array.isArray(n?.rows)?n.rows:[]}async function Eh(e,t){const r=ar(t,{_extra:"primary_keys"}),s=await Rn(e,r);return Array.isArray(s?.primary_keys)?s.primary_keys:[]}async function Bl(e,t){try{const r=await Rn(e,ar(t,{_extra:"count"}));return typeof r?.count=="number"?r.count:null}catch{return null}}async function Nl(e,t,r={}){const s=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,s);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const o=await n.json(),a=o?.datasette?.version??o?.version??null;let c=null;try{c=(await(await e(`${t}/-/actor.json`,s)).json())?.actor??null}catch{}return{reachable:!0,version:a,actor:c,writable:!!(r.token&&c)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function lr(e,t){return t?(r,s)=>{const n=(s??{}).headers??{};return e(r,{...s??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}class Sh extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function Ul(e){return`datasette:token:${e}`}function _h(e,t){for(const[r,s]of Object.entries(t))if(r!=="data"&&e[r]!==s)return!1;return!0}function Th(e,t){const r=e.source,s=r?.config??{},n={base:s.base,db:s.db,table:s.table,query:{}},o=Array.isArray(s.pks)&&s.pks.length>0?s.pks:["rowid"],a=r?.writable===!0,c=s.maxRows??1e4,u=s.pollIntervalMs??0,p=(oe,V)=>t.backend.fetch(oe,V);async function x(){const V=(await t.settings.findOne(Ul(s.base)))?.value;return typeof V=="string"&&V.length>0?V:void 0}const y=async(oe,V)=>lr(p,await x())(oe,V);function $(oe){return{id:gh(oe,o)??Ah(),tableId:e.id,data:oe,updatedAt:Date.now()}}function B(oe){if(!a)throw new Sh(oe)}function F(oe){const V={};for(const[J,he]of Object.entries(oe))o.includes(J)||(V[J]=he);return V}const L=new Set;let H=[],G=!1,ue=null;function ie(){return ue||(ue=(async()=>{try{const{rows:oe}=await Fr(y,n,{maxRows:c});H=oe.map($),G=!0;for(const V of L)V(H);return H}finally{ue=null}})(),ue)}return{async find(oe){const V=G?H:await ie();return!oe||Object.keys(oe).length===0?V:V.filter(J=>_h(J,oe))},async findOne(oe){return(G?H:await ie()).find(J=>J.id===oe)??null},async insert(oe){B("insert");const[V]=await $a(y,n,[oe.data]),J=$(V??oe.data);return t.events.emit("row:created",{tableId:e.id,row:J}),ie(),J},async bulkInsert(oe){if(oe.length===0)return[];B("insert");const V=await $a(y,n,oe.map(he=>he.data)),J=(V.length?V:oe.map(he=>he.data)).map($);return ie(),J},async upsert(oe){B("upsert");const[V]=await Ch(y,n,[oe.data]),J=$(V??oe.data);return ie(),J},async patch(oe,V){B("update");const J=V.data,he=F(J??{}),$e=await kh(y,n,oe,he),Te=$($e??{...J??{}});return t.events.emit("row:updated",{tableId:e.id,row:Te,prev:Te}),ie(),Te},async remove(oe){B("delete"),await ka(y,n,oe),t.events.emit("row:deleted",{tableId:e.id,rowId:oe}),ie()},async bulkRemove(oe){if(oe.length!==0){B("delete");for(const V of oe)await ka(y,n,V);ie()}},subscribe(oe){L.add(oe),G?oe(H):ie();let V=null;return u>0&&(V=setInterval(()=>void ie(),u)),()=>{L.delete(oe),V&&clearInterval(V)}},async refresh(){await ie()}}}function Ah(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const _s=e=>e.replace(/^https?:\/\//,""),Ph=e=>new Promise(t=>setTimeout(t,e));function Ih(){const e=globalThis.__eda_resumeDelayMs;return typeof e=="number"&&e>=0?e:6e4}function Rh(e,t,r){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(r)}`}function uo(e,t,r,s){const n={...e.info??{}};return!n.source&&!n.sourceUrl&&(n.source=`${_s(t)}/${r}/${s}`,n.sourceUrl=Rh(t,r,s)),{...e,info:n}}function ho(e,t,r,s){if(!(!e||!t))return{nextUrl:t,loadedRows:r,...s!=null?{totalCount:s}:{}}}async function Hl(e,t,r,s={}){if(t.db&&t.table)return[await Mi(e,t)];let n=[];if(t.db){if(n.push(...await Ss(e,t.base,t.db)),s.skipPicker)return n.filter(c=>!c.hidden)}else{const c=await oo(e,t.base);if(c.length===0)return[];let u=c;if(c.length>1){const p=await Li(c.map(x=>({name:x,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${_s(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!p)return null;u=p.map(x=>c[x])}for(const p of u)try{n.push(...await Ss(e,t.base,p))}catch{}}if(n.length===0)return[];const o=new Set(n.map(c=>c.db)).size>1,a=await Li(n.map(c=>({name:o?`${c.db}/${c.table}`:c.table,size:c.count,detail:o?void 0:c.db,hidden:c.hidden})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${_s(t.base)}.`,confirmLabel:r});return a?a.map(c=>n[c]):null}const Dh='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Oh={id:"datasette-source",name:"Datasette",type:"source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-source.ts"},qt={maxImportRows:1e4,pageSize:1e3},jh="https://latest.datasette.io/fixtures/facetable";function zh(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:Dh,tooltip:"Connect a live, editable Datasette table",onClick:()=>Nh(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>Wh(t,r)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:r})=>Vh(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:Th}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const s=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${jh}`,"","Import from Datasette");s&&await Ca(t,s)}}),e.ui.registerDropHandler(async(t,r)=>{const s=t.dataTransfer?.getData("text/plain")||"";return Lh(s)?(t.preventDefault(),await Ca(r,s),!0):!1})}async function Ca(e,t){try{await fo(e,t)}catch(r){let s;r instanceof Kt?s=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:s=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(s,"Datasette import failed")}}function Lh(e){try{const t=hn(e);return!!(t.db&&t.table)}catch{return!1}}function ql(e,t){if(!e.has(t))return t;for(let r=2;;r++){const s=`${t} (${r})`;if(!e.has(s))return s}}async function fo(e,t,r={}){const s=e.workspaceId();if(!s)throw new Error("datasette-source: no active workspace");const n=hn(t),a=await Hl(F=>e.backend.fetch(F),n,"Import",{skipPicker:r.skipTablePicker});if(a===null)return;if(a.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const c=[];let u=0;for(const F of a){const L={base:n.base,db:F.db,table:F.table,query:{}},H=await Fh(e,s,L);if(H.skipped){u+=1;continue}c.push({tableId:H.tableId,ref:L,overwrite:H.overwrite,knownCount:F.count})}let p=0,x=0;const y=[],$=[],B=[];for(const F of c)try{const L=await Mh(e,F.tableId,F.ref,F.overwrite,F.knownCount);p+=1,x+=L.rowCount,L.error?$.push(`${F.ref.db}/${F.ref.table} (${L.error})`):(L.hasMore||L.truncated)&&y.push(`${F.ref.db}/${F.ref.table}`)}catch(L){B.push(`${F.ref.db}/${F.ref.table}: ${L?.message??String(L)}`)}Bh(e,{imported:p,skipped:u,totalRows:x,capped:y,partial:$,failed:B,requested:a.length})}async function Fh(e,t,r){const s=`${r.db}/${r.table}`,n={type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},o=(await e.store.tables.find()).filter(p=>p.workspaceId===t),a=o.find(p=>p.name.toLowerCase()===s.toLowerCase());let c=s;if(a){const p=await e.ui.dialogs.choice(`A table named "${s}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!p||p==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(p==="Overwrite")return await e.store.tables.patch(a.id,{origin:n,updatedAt:Date.now()}),{tableId:a.id,overwrite:!0};c=ql(new Set(o.map(x=>x.name)),s)}const u=Mr();return await e.store.tables.insert({id:u,workspaceId:t,name:c,code:Kl(`${r.db}-${r.table}`),columns:[],view:"table",origin:n,updatedAt:Date.now()}),{tableId:u,overwrite:!1}}async function Mh(e,t,r,s,n=null){const o=`${r.db}/${r.table}`,a=c=>e.backend.fetch(c);dn(t,!0);try{let c=[],u=n,p=!1,x=[];try{const ne=await Ls(a,r);c=ne.columns,u=u??ne.count,p=ne.typed,x=ne.pks??[]}catch{}u==null&&(u=await Bl(a,r));const y=u&&u>0?Math.min(u,qt.maxImportRows):0,$=[];let B=!1,F=!1,L=0,H,G,ue;for(;;){const ne=await Fr(a,r,{maxRows:Math.max(0,qt.maxImportRows-$.length),pageSize:qt.pageSize,...ue?{startUrl:ue}:{},onProgress:K=>{y>0&&dn(t,!0,Math.min(1,($.length+K)/y))}});if($.push(...ne.rows),B=B||ne.truncated,L+=ne.pages,F=ne.hasMore,H=ne.error,G=ne.nextUrl,!ne.error||!ne.nextUrl||$.length>=qt.maxImportRows||await e.ui.dialogs.choice(`Import of "${o}" paused after ${$.length.toLocaleString()} rows (${ne.error}). Datasette may be rate-limiting a large import. Wait 60 seconds and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,["Resume in 60s","Cancel"],"Import paused — rate limited?")!=="Resume in 60s")break;dn(t,!0),e.ui.dialogs.toast(`Resuming "${o}" in 60s…`,{kind:"info",title:"Import paused"}),await Ph(Ih()),ue=ne.nextUrl,H=void 0,G=void 0}let oe=c.length===0?zs($):p?c:co(c,$),V={};try{const ne=await ao(a,r),pe=lo(ne,oe);oe=pe.columns,V=pe.patch}catch{}V=uo(V,r.base,r.db,r.table);const J=await e.store.tables.findOne(t),he=J?.columns??[],$e=he.length===0,{columns:Te}=Il(he,oe,J?.deletedColumns),Ie=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const g=ho(H,G,$.length,u),v=x.length>0&&J?.origin?{origin:{...J.origin,pks:x}}:{},S=$e?{columns:Te,...V,...v,importResume:g,updatedAt:Ie}:{columns:Te,...V.info?{info:V.info}:{},...v,importResume:g,updatedAt:Ie};await e.store.tables.patch(t,S);const b=e.store.rows(t);if(s){const ne=await b.find();await b.bulkRemove(ne.map(pe=>pe.id))}const k=$.map(ne=>({id:Mr(),tableId:t,data:ne,updatedAt:Ie}));return await b.bulkInsert(k),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:$.length}),{name:o,rowCount:$.length,hasMore:F,truncated:B,pages:L,count:u,error:H}}finally{dn(t,!1)}}function Bh(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,s=`${t.imported} table${t.imported===1?"":"s"}`,n=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${s} (${r});${n} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${s} (${r}).${n} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${s} (${r}).${n} ${t.capped.length} capped at ${qt.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${s} (${r}) from Datasette.${n}`,{kind:"success",title:"Datasette import"})}async function Nh(e){const t=Wt.instance??Uh(),r=(n,o)=>e.backend.fetch(n,o),s=await t.open({initialUrl:"https://datasette.io",async onTest(n,o){const a=hn(n),c=await Nl(r,a.base,{token:o||void 0});if(a.db&&a.table){await Mi(lr(r,o||void 0),a);const p=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${p} — table found, signed in, read-write.`:`Reachable${p} — table found, read-only (no token / not authenticated).`}if(!c.reachable)return`Unreachable: ${c.error??"no response"}`;const u=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${u} — signed in, read-write.`:`Reachable${u} — read-only (no token / not authenticated).`},async onConnect(n,o){const a=hn(n);a.db&&a.table&&await Mi(lr(r,o||void 0),a)}});if(s)try{await Wl(e,s.url,s.token)}catch(n){const o=n instanceof Kt?n.message:n?.message??String(n);await e.ui.dialogs.alert(o,"Connect Datasette failed")}}function Uh(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function Wl(e,t,r){const s=e.workspaceId();if(!s)throw new Error("datasette-source: no active workspace");const n=hn(t),o=(y,$)=>e.backend.fetch(y,$),a=lr(o,r||void 0),c=await Nl(o,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:Ul(n.base),value:r});let u;try{u=await Hl(a,n,"Connect")}catch(y){const $=y instanceof Kt?y.message:y?.message??String(y);throw new Error(`Couldn't read tables from ${_s(n.base)}: ${$}`)}if(u===null)return;if(u.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const p=[];for(const y of u){const $=await Hh(e,s,n.base,y,c.writable,r);$!==null&&p.push({tableId:$,c:y})}if(p.length===0)return;const x=c.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${p.length} live table${p.length===1?"":"s"} from Datasette (${x}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:y,c:$}of p)qh(e,y,n.base,$,r)}async function Hh(e,t,r,s,n,o){const a=(await e.store.tables.find()).filter($=>$.workspaceId===t);let c=`${s.db}/${s.table}`,u=a.find($=>{const B=$.source?.config;return $.source?.type==="datasette"&&B?.base===r&&B?.db===s.db&&B?.table===s.table});if(!u){const $=a.find(B=>B.name.toLowerCase()===c.toLowerCase());if($){const B=await e.ui.dialogs.choice(`A table named "${c}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!B||B==="Skip")return null;B==="Overwrite"?u=$:c=ql(new Set(a.map(F=>F.name)),c)}}let p=s.pks??[];if(p.length===0){const $=lr((B,F)=>e.backend.fetch(B,F),o||void 0);try{p=await Eh($,{base:r,db:s.db,table:s.table,query:{}})}catch{p=[]}}const x=u?.id??Mr(),y={...u??{},id:x,workspaceId:t,name:c,code:Kl(`${s.db}-${s.table}`),columns:u?.columns??[],view:u?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:s.db,table:s.table,pks:p}},updatedAt:Date.now()};return u?await e.store.tables.upsert(y):await e.store.tables.insert(y),x}async function qh(e,t,r,s,n){const o={base:r,db:s.db,table:s.table,query:{}},a=lr((c,u)=>e.backend.fetch(c,u),n||void 0);try{let c=[],u=!1;try{const L=await Ls(a,o);c=L.columns,u=L.typed}catch{}const{rows:p}=await Fr(a,o,{maxRows:50,pageSize:50}),x=c.length===0?zs(p):u?c:co(c,p);if(x.length===0)return;const y=await e.store.tables.findOne(t);if(!y)return;const $=y.source?.config?.pks??[];let B=x.map(L=>$.includes(L.field)?{...L,unique:!0,notnull:!0}:L),F={};try{const L=await ao(a,o),H=lo(L,B);B=H.columns,F=H.patch}catch{}F=uo(F,o.base,s.db,s.table),await e.store.tables.patch(t,{columns:B,...F,updatedAt:Date.now()})}catch{}}async function Wh(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const s=e.store.rows(t);typeof s.refresh=="function"&&await s.refresh();const n=await s.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await Kh(e,r)}catch(s){const n=s instanceof Kt?s.message:s?.message??String(s);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function Kh(e,t){const r=hn(t.origin.url),s=u=>e.backend.fetch(u);dn(t.id,!0);let n,o=[];try{let u=[],p=null,x=!1;try{const k=await Ls(s,r);u=k.columns,p=k.count,x=k.typed}catch{}p==null&&(p=await Bl(s,r));const y=p&&p>0?Math.min(p,qt.maxImportRows):0,{rows:$,hasMore:B,truncated:F,error:L,nextUrl:H}=await Fr(s,r,{maxRows:qt.maxImportRows,pageSize:qt.pageSize,onProgress:k=>{y>0&&dn(t.id,!0,Math.min(1,k/y))}});let G=u.length===0?zs($):x?u:co(u,$),ue={};try{const k=await ao(s,r),ne=lo(k,G);G=ne.columns,ue=ne.patch}catch{}ue=uo(ue,r.base,r.db,r.table);const ie=t.columns.length===0,oe=Il(t.columns,G,t.deletedColumns);o=oe.newFields;const V=Date.now(),J=ho(L,H,$.length,p),he=ie?{columns:oe.columns,...ue,importResume:J,updatedAt:V}:{columns:oe.columns,...ue.info?{info:ue.info}:{},importResume:J,updatedAt:V};await e.store.tables.patch(t.id,he);const $e=t.origin?.pks??[],Te=new Set(G.map(k=>k.field)),Ie=t.columns.map(k=>k.field).filter(k=>!Te.has(k)&&!$e.includes(k)),g=(t.deletedColumns??[]).filter(k=>Te.has(k)),v=e.store.rows(t.id),S=await v.find(),{data:b}=Vu({oldRows:S.map(k=>({data:k.data})),freshRows:$,pks:$e,userAddedFields:Ie,deletedRemoteFields:g});await v.bulkRemove(S.map(k=>k.id)),await v.bulkInsert(b.map(k=>({id:Mr(),tableId:t.id,data:k,updatedAt:V}))),n={rowCount:b.length,hasMore:B,truncated:F,error:L}}finally{dn(t.id,!1)}const a=[];n.error?a.push(`partial (${n.error})`):(n.hasMore||n.truncated)&&a.push(`capped at ${qt.maxImportRows}`),o.length>0&&a.push(`${o.length} new column${o.length===1?"":"s"}`);const c=a.length?` — ${a.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${n.rowCount} rows from ${r.db}/${r.table}${c}.`,{kind:n.error||n.hasMore||n.truncated||o.length>0?"warning":"success",title:"Refresh"}),o.length>0&&Gh(t.id,r,o)}async function Vh(e,t){const r=await e.store.tables.findOne(t),s=r?.importResume;if(!r||!r.origin?.url||!s)return;const n=hn(r.origin.url),o=$=>e.backend.fetch($),a=s.loadedRows,c=s.totalCount??null,u=c&&c>0?Math.min(c,qt.maxImportRows):0;dn(t,!0,u>0?Math.min(1,a/u):void 0);let p=0,x;try{const $=await Fr(o,n,{startUrl:s.nextUrl,maxRows:Math.max(0,qt.maxImportRows-a),pageSize:qt.pageSize,onProgress:L=>{u>0&&dn(t,!0,Math.min(1,(a+L)/u))}});p=$.rows.length;const B=Date.now();await e.store.rows(t).bulkInsert($.rows.map(L=>({id:Mr(),tableId:t,data:L,updatedAt:B}))),x={error:$.error,nextUrl:$.nextUrl};const F=ho($.error,$.nextUrl,a+p,c);await e.store.tables.patch(t,{importResume:F,updatedAt:B})}catch($){const B=$ instanceof Kt?$.message:$?.message??String($);e.ui.dialogs.toast(`Couldn't resume ${n.db}/${n.table}: ${B}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{dn(t,!1)}const y=a+p;x.error?e.ui.dialogs.toast(`Resumed ${n.db}/${n.table}: +${p} rows (${y} total) — interrupted again (${x.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${n.db}/${n.table}: +${p} rows (${y} total).`,{kind:"success",title:"Resume import"})}function Gh(e,t,r){const s=r.join(", "),n=r.length!==1,o=`Refreshing ${t.db}/${t.table} revealed ${r.length} new column${n?"s":""}: ${s}. Review, reorder or hide ${n?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:o}}))}function Kl(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Mr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Yh=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:Wl,importDatasette:fo,init:zh,meta:Oh},Symbol.toStringTag,{value:"Module"}));function Vl(e){let t;try{t=new URL(e)}catch{return e}const r=t.hostname.toLowerCase();if(r==="github.com"||r==="www.github.com"){const s=t.pathname.split("/").filter(Boolean);if(s.length>=5&&(s[2]==="blob"||s[2]==="raw")){const n=s[0],o=s[1];let a=s.slice(3);return a.length>=3&&a[0]==="refs"&&(a[1]==="heads"||a[1]==="tags")&&(a=a.slice(2)),`https://raw.githubusercontent.com/${[n,o,...a].join("/")}`}}return e}async function Gl(e,t){const r=Number(e.headers?.get?.("content-length")),s=e.body?.getReader?.();if(s&&Number.isFinite(r)&&r>0){const n=[];let o=0;for(;;){const{done:u,value:p}=await s.read();if(u)break;p&&(n.push(p),o+=p.length,t?.(Math.min(1,o/r)))}const a=new Uint8Array(o);let c=0;for(const u of n)a.set(u,c),c+=u.length;return new TextDecoder().decode(a)}return await e.text()}const Xh={id:"url-source",name:"URL Reference",type:"source",version:"0.1.0",description:'Backs a table with a live read-only fetch of a plain CSV or JSON URL — a "reference" table whose rows are never persisted locally.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/url-source.ts"};function Qh(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"url",create:Yl}),e.ui.registerTableButton({id:"url-source:refresh",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this reference from its source URL",visible:t=>t.source?.type==="url",onClick:async(t,{tableId:r})=>{try{const s=t.store.rows(r);typeof s.refresh=="function"&&await s.refresh(),t.ui.dialogs.toast("Reference refreshed.",{kind:"success",title:"Refresh"})}catch(s){t.ui.dialogs.toast(`Refresh failed: ${s.message}`,{kind:"error",title:"Refresh"})}}})}class qn extends Error{constructor(t){super(`This is a reference (read-only) table — ${t} is not permitted. Import a copy to edit.`),this.name="ReadOnlyReferenceError"}}function Jh(e,t){for(const[r,s]of Object.entries(t))if(r!=="data"&&e[r]!==s)return!1;return!0}function Zh(e){const t=r=>typeof r=="object"&&r!==null&&!Array.isArray(r);if(Array.isArray(e))return e.filter(t);if(t(e)){for(const r of["rows","records","data"]){const s=e[r];if(Array.isArray(s))return s.filter(t)}for(const r of Object.values(e))if(Array.isArray(r))return r.filter(t)}return[]}function Yl(e,t){const r=e.source?.config??{},s=typeof r.url=="string"?r.url:"",n=r.format==="json"?"json":"csv",o=new Set;let a=[],c=!1,u=null;function p($){return $.map((B,F)=>({id:`url:${F}`,tableId:e.id,data:B,updatedAt:0}))}async function x(){if(!s)throw new Error("This reference table has no URL configured.");let $;try{$=await t.backend.fetch(Vl(s))}catch(F){throw new Error(`Could not reach ${s}: ${F?.message??String(F)}`)}if(!$.ok)throw new Error(`Could not load ${s}: HTTP ${$.status} ${$.statusText}`);let B;try{B=await Gl($)}catch(F){throw new Error(`Could not read response from ${s}: ${F?.message??String(F)}`)}try{return n==="json"?Zh(JSON.parse(B)):Qn(B).rows}catch(F){throw new Error(`Could not parse ${n.toUpperCase()} from ${s}: ${F?.message??String(F)}`)}}function y(){return u||(u=(async()=>{try{const $=await x();a=p($),c=!0;for(const B of o)B(a);return a}finally{u=null}})(),u)}return{async find($){const B=c?a:await y();return!$||Object.keys($).length===0?B:B.filter(F=>Jh(F,$))},async findOne($){return(c?a:await y()).find(F=>F.id===$)??null},async insert(){throw new qn("insert")},async bulkInsert(){throw new qn("insert")},async upsert(){throw new qn("upsert")},async patch(){throw new qn("update")},async remove(){throw new qn("delete")},async bulkRemove(){throw new qn("delete")},subscribe($){return o.add($),c?$(a):y(),()=>{o.delete($)}},async refresh(){c=!1,a=[],await y()}}}const ef=Object.freeze(Object.defineProperty({__proto__:null,ReadOnlyReferenceError:qn,createUrlCollection:Yl,init:Qh,meta:Xh},Symbol.toStringTag,{value:"Module"})),tf={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function nf(){}async function Xl(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),s=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const o=await e.store.rows(n.id).find();s.push(rf(n,o),"")}return s.push("COMMIT;",""),s.join(`
`)}function rf(e,t){const r=Bi(e.code||e.name||`table_${e.id}`),s=['  "__id" TEXT PRIMARY KEY',...e.columns.map(o=>`  ${sf(o)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,s.join(`,
`),");"];if(t.length>0){const a=["__id",...e.columns.map(c=>c.field)].map(c=>`"${Bi(c)}"`).join(", ");for(const c of t){const u=[Ea(c.id),...e.columns.map(p=>Ea(c.data[p.field],p.type))];n.push(`INSERT INTO "${r}" (${a}) VALUES (${u.join(", ")});`)}}return n.join(`
`)}function sf(e){const t=[`"${Bi(e.field)}"`,of(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function of(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function Ea(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=af(e);return r===null?"NULL":fs(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?fs(e.toISOString()):fs(typeof e=="string"?e:JSON.stringify(e))}function af(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?Sa(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const s=new Date(t);return Number.isFinite(s.getTime())?Sa(s):null}return null}function Sa(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${s}`}function fs(e){return`'${e.replace(/'/g,"''")}'`}function Bi(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const lf=Object.freeze(Object.defineProperty({__proto__:null,init:nf,meta:tf,serializeWorkspaceAsSql:Xl},Symbol.toStringTag,{value:"Module"})),cf={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function df(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,r)=>{const s=t.workspaceId();if(!s)return;const{AnchoredMenu:n}=await In(async()=>{const{AnchoredMenu:c}=await import("./anchored-menu-zyyXkt_x.js");return{AnchoredMenu:c}},[]),o=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),a=await n.open(o,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(a)try{if(a==="json"){const c=await Ms(t);await t.backend.saveFile(`workspace-${s}.db.json`,c,"application/json")}else if(a==="sql"){const c=await Xl(t);await t.backend.saveFile(`workspace-${s}.sql`,c,"application/sql")}}catch(c){t.ui.dialogs.toast(`Export failed: ${c.message}`,{kind:"error",title:"Export"})}}})}async function Ms(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(a=>a.workspaceId===t),s=(await e.store.viewTemplates.find()).filter(a=>a.workspaceId===t),n=(await e.store.viewInstances.find()).filter(a=>a.workspaceId===t),o={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:s,viewInstances:n};for(const a of r){const c=await e.store.rows(a.id).find();o.tables.push({name:a.name,columns:a.columns,rows:c.map(u=>u.data),...a.title?{title:a.title}:{},...a.windowGeometry?{windowGeometry:a.windowGeometry}:{},...a.sortColumn?{sortColumn:a.sortColumn,sortAsc:a.sortAsc??!0}:{},...a.filters?{filters:a.filters}:{},...a.labelColumn?{labelColumn:a.labelColumn}:{},...a.info?{info:a.info}:{},...a.deletedColumns?{deletedColumns:a.deletedColumns}:{},...a.source?{source:a.source}:{},...a.origin?{origin:a.origin}:{}})}return JSON.stringify(o,null,2)}const uf=Object.freeze(Object.defineProperty({__proto__:null,init:df,meta:cf,serializeWorkspace:Ms},Symbol.toStringTag,{value:"Module"})),hf={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},ff="gist:",_a='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function pf(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).'}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:_a,tooltip:"Gist sync — push, pull, share…",onClick:async(t,r)=>{const{AnchoredMenu:s}=await In(async()=>{const{AnchoredMenu:a}=await import("./anchored-menu-zyyXkt_x.js");return{AnchoredMenu:a}},[]),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await s.open(n,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(o)try{if(o==="push"||o==="pull"){const a=await s.open(n,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!a)return;const c=a;o==="push"?await vf(t,c):await Jl(t,c)}else o==="share"?await yf(t):o==="view"&&await wf(t)}catch(a){t.ui.dialogs.toast(`Gist ${o} failed: ${a.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:_a,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,r)=>{const{AnchoredMenu:s}=await In(async()=>{const{AnchoredMenu:a}=await import("./anchored-menu-zyyXkt_x.js");return{AnchoredMenu:a}},[]),n=r.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await s.open(n,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(o)try{o==="push"?await xf(t,r.tableId):o==="pull"?await $f(t,r.tableId):o==="view"&&await kf(t,r.tableId)}catch(a){t.ui.dialogs.toast(`Gist ${o} failed: ${a.message}`,{kind:"error",title:"Gist sync"})}}})}async function mf(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let r;try{r=atob(t)}catch{return}const s=gf(r);if(!s){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${s.gistId||"(new)"} (owner: ${s.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await po(e,s),await Jl(e))}async function Ql(e){const t=e.workspaceId();return`${ff}${t??"default"}`}async function Br(e){const[t,r,s]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&s)return{user:t,gistId:r??"",token:s};const o=(await e.store.settings.findOne(await Ql(e)))?.value;if(o?.user&&o?.token){const a={user:o.user,gistId:o.gistId??"",token:o.token};return await po(e,a),a}return null}async function po(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({key:await Ql(e),value:t})}function gf(e){const t={};for(const r of e.split(";")){const s=r.indexOf("=");if(s<0)continue;const n=r.slice(0,s).trim(),o=r.slice(s+1).trim();n&&(t[n]=o)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function mo(e){const t=await Br(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function bf(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function yf(e){const t=await Br(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const s=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(bf(t)))}`,{GistShareDialog:n}=await In(async()=>{const{GistShareDialog:o}=await import("./gist-share-dialog-BY-a1vMc.js");return{GistShareDialog:o}},[]);await n.open(s)}async function wf(e){const t=await Br(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}async function vf(e,t="all"){const r=await mo(e);if(!r)return;const s=e.workspaceId();if(!s)throw new Error("no active workspace");const n=t!=="settings",o=t!=="data",a=(await e.store.tables.find()).filter(L=>L.workspaceId===s);if(n&&a.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const c=1e8,u=1e7,p={},x=[],y=[];if(n)for(const L of a){const H=L.source!=null?[]:await e.store.rows(L.id).find(),G=JSON.stringify(Zl(L,H),null,2),ue=`${L.name} (${(G.length/1e6).toFixed(2)} MB)`;G.length>c?x.push(ue):G.length>u&&y.push(ue),p[`${Nr(L.name)}.table.json`]={content:G}}if(x.length>0||y.length>0){const L=[];if(x.length>0&&L.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${x.join(`
`)}`),y.length>0&&L.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${y.join(`
`)}`),!await e.ui.dialogs.confirm(`${L.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(o){const L=(await e.store.viewTemplates.find()).filter(ue=>ue.workspaceId===s),H=(await e.store.viewInstances.find()).filter(ue=>ue.workspaceId===s),G=await e.store.settings.find();p["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:s,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:L,viewInstances:H,settings:G},null,2)}}let $;if(r.gistId){const L=await fetch(`https://api.github.com/gists/${r.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:p,description:`easyDBAccess workspace: ${s}`})});if(!L.ok)throw new Error(await Rr(L));$=await L.json()}else{const L=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${s}`,files:p})});if(!L.ok)throw new Error(await Rr(L));$=await L.json(),r.gistId=$.id,await po(e,r)}const B=$.html_url??`https://gist.github.com/${r.user}/${$.id}`,F=t==="settings"?"settings":t==="data"?`${a.length} table${a.length===1?"":"s"} (data only)`:`${a.length} table${a.length===1?"":"s"}`;e.ui.dialogs.toast(`Pushed ${F}.  ${B}`,{kind:"success",title:"Gist sync"})}async function Jl(e,t="all"){const r=t!=="settings",s=t!=="data",n=await mo(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const o=e.workspaceId();if(!o)throw new Error("no active workspace");const a=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!a.ok)throw new Error(await Rr(a));const c=await a.json(),u=Object.entries(c.files).filter(([G])=>G.endsWith(".table.json")&&!G.startsWith("_easydb"));if(r&&u.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const p=(await e.store.tables.find()).filter(G=>G.workspaceId===o),x=new Map(p.map(G=>[G.name.toLowerCase(),G]));let y=0;const $=[],B=new Map;if(r){const{TopProgress:G}=await In(async()=>{const{TopProgress:ie}=await Promise.resolve().then(()=>gc);return{TopProgress:ie}},void 0),ue=G.begin("Pulling from gist…");try{for(const[ie,[oe,V]]of u.entries())try{const J=await Ts(V),he=JSON.parse(J);if(!he.name||!Array.isArray(he.columns))throw new Error("unexpected file shape (missing name/columns)");let $e;const Te=x.get(he.name.toLowerCase());if(Te){if($e=await e.store.tables.patch(Te.id,{title:he.title,columns:he.columns,...Ni(he),updatedAt:Date.now()}),$e.source==null){const Ie=e.store.rows(Te.id),g=await Ie.find();await Ie.bulkRemove(g.map(v=>v.id))}}else $e=await e.store.tables.insert({id:Ui(),workspaceId:o,name:he.name,title:he.title,code:Nr(he.name),columns:he.columns,view:he.view??"table",...Ni(he),updatedAt:Date.now()});if($e.source==null){const Ie=(he.rows??[]).map(g=>({id:Ui(),tableId:$e.id,data:g,updatedAt:Date.now()}));await e.store.rows($e.id).bulkInsert(Ie)}B.set(he.name,$e.id),y++}catch(J){$.push({file:oe,error:J.message})}finally{ue.fraction((ie+1)/u.length)}}finally{ue.done()}}let F=0,L="";const H=s?c.files["_easydb.workspace.json"]:void 0;if(H)try{const G=await Ts(H),ue=JSON.parse(G),ie=ue.viewTemplates??[],oe=ue.viewInstances??[],V=ue.settings??[];for(const J of ie)await e.store.viewTemplates.upsert({...J,workspaceId:o});for(const J of oe){let he;J.tableName&&(he=B.get(J.tableName)??x.get(J.tableName)?.id),he??=J.tableId,he&&(await e.store.viewInstances.upsert({...J,workspaceId:o,tableId:he}),F++)}for(const J of V)await e.store.settings.upsert(J)}catch(G){L=`Workspace metadata import failed: ${G.message}`}if($.length>0){const G=$.map(ue=>`• ${ue.file}: ${ue.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${y} of ${u.length} tables. ${$.length} failed:
${G}${L?`
${L}`:""}`,{kind:"warning",title:"Gist sync"})}else{const G=F>0?` (+${F} views)`:"",ue=t==="settings"?`Pulled settings${G}.`:`Pulled ${y} table${y===1?"":"s"}.${G}`;e.ui.dialogs.toast(ue,{kind:"success",title:"Gist sync"}),L&&e.ui.dialogs.toast(L,{kind:"warning",title:"Gist sync"})}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function xf(e,t){const r=await mo(e);if(!r)return;if(!r.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const s=await e.store.tables.findOne(t);if(!s)return;const n=s.source!=null?[]:await e.store.rows(t).find(),o=JSON.stringify(Zl(s,n),null,2),a={[`${Nr(s.name)}.table.json`]:{content:o}},c=await fetch(`https://api.github.com/gists/${r.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:a})});if(!c.ok)throw new Error(await Rr(c));e.ui.dialogs.toast(`Pushed "${s.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function $f(e,t){const r=await Br(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const s=await e.store.tables.findOne(t);if(!s)return;const n=`${Nr(s.name)}.table.json`,o=await fetch(`https://api.github.com/gists/${r.gistId}`,{headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await Rr(o));const c=(await o.json()).files[n];if(!c){await e.ui.dialogs.alert(`No file "${n}" in the gist for this table.`,"Gist sync");return}const u=await Ts(c),p=JSON.parse(u);if(!p.name||!Array.isArray(p.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:p.title,columns:p.columns,...Ni(p),updatedAt:Date.now()})).source==null){const y=e.store.rows(t),$=await y.find();await y.bulkRemove($.map(F=>F.id));const B=(p.rows??[]).map(F=>({id:Ui(),tableId:t,data:F,updatedAt:Date.now()}));await y.bulkInsert(B)}e.ui.dialogs.toast(`Pulled "${s.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function kf(e,t){const r=await Br(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const s=await e.store.tables.findOne(t);if(!s)return;const n=`file-${Nr(s.name)}-table-json`;window.open(`https://gist.github.com/${r.user}/${r.gistId}#${n}`,"_blank","noopener")}function Zl(e,t){const r=e.columns.map(n=>n.field),s=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:s?[]:t.map(n=>{const o={};for(const a of r)o[a]=n.data[a];return o})}}function Ni(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function Ts(e,t=r=>fetch(r)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const r=await t(e.raw_url);if(!r.ok)throw new Error(`raw fetch failed: ${r.status} ${r.statusText}`);return r.text()}async function Rr(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function Nr(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Ui(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Cf=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:Ts,init:pf,load:mf,meta:hf},Symbol.toStringTag,{value:"Module"})),ec="server-sync:url";function tc(e){return`server-sync:etag:${e}`}async function nc(e){const r=(await e.store.settings.findOne(ec))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function Ef(e,t){await e.store.settings.upsert({key:ec,value:t.replace(/\/+$/,"")})}async function rc(e,t){const s=(await e.store.settings.findOne(tc(t)))?.value;return typeof s=="string"?s:null}async function Yn(e,t,r){await e.store.settings.upsert({key:tc(t),value:r})}function Bs(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function Ta(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function sc(e,t,r){const s=zr(r,t),n=(await e.store.tables.find()).filter(a=>a.workspaceId===t);for(const a of n){const c=e.store.rows(a.id),u=await c.find();await c.bulkRemove(u.map(p=>p.id)),await e.store.tables.remove(a.id)}let o=0;for(const a of s){const c=Aa(),u=await e.store.tables.insert({id:c,workspaceId:t,name:a.name,code:ic(a.name),columns:a.columns,view:"table",...a.windowGeometry?{windowGeometry:a.windowGeometry}:{},...a.sortColumn?{sortColumn:a.sortColumn,sortAsc:a.sortAsc??!0}:{},updatedAt:Date.now()}),p=a.rows.map(x=>({id:Aa(),tableId:u.id,data:x,updatedAt:Date.now()}));await e.store.rows(u.id).bulkInsert(p),o++}return o}function ic(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Aa(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Sf={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function _f(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,r)=>{const{AnchoredMenu:s}=await In(async()=>{const{AnchoredMenu:a}=await import("./anchored-menu-zyyXkt_x.js");return{AnchoredMenu:a}},[]),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await s.open(n,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(o)try{o==="push"?await Tf(t):o==="pull"&&await Af(t)}catch(a){t.ui.dialogs.toast(`${o==="push"?"Push":"Pull"} failed: ${a.message}`,{kind:"error",title:"Server sync"})}}})}async function Tf(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await oc(e);if(!r)return;const s=await Ms(e),n=await rc(e,t),o={"Content-Type":"application/json"};n&&(o["If-Match"]=`"${n}"`);let a=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:o,body:s});if(a.status===412){const u=await a.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){u.currentEtag&&await Yn(e,t,u.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}a=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:s})}if(!a.ok)throw new Error(await ac(a));const c=Bs(a.headers.get("ETag"));c&&await Yn(e,t,c),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function Af(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await oc(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await ac(n));const o=Bs(n.headers.get("ETag")),a=await n.json(),c=await sc(e,t,a);o&&await Yn(e,t,o),e.ui.dialogs.toast(`Pulled ${c} table${c===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function oc(e){const t=await nc(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await Ef(e,r),r.replace(/\/+$/,"")}async function ac(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Pf=Object.freeze(Object.defineProperty({__proto__:null,init:_f,meta:Sf},Symbol.toStringTag,{value:"Module"})),If={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function Rf(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const Df=Object.freeze(Object.defineProperty({__proto__:null,init:Rf,meta:If},Symbol.toStringTag,{value:"Module"}));function lc(e,t="Edit"){const r=document.createElement("button");return r.type="button",r.title=t,r.textContent="✎",r.className="cell-pencil",r.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",r.addEventListener("mouseenter",()=>r.style.color="#374151"),r.addEventListener("mouseleave",()=>r.style.color="#9ca3af"),r.addEventListener("click",s=>{s.preventDefault(),s.stopPropagation(),e()}),r}function cc(e,t){const r=document.createElement("span");return r.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%",e.style.flex="1 1 auto",e.style.minWidth="0",e.style.overflow="hidden",r.append(e,t),r}function dc(e){const t=document.createElement("input");t.type="text",t.value=e.value,t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0;text-overflow:ellipsis";const r=()=>{e.isLive(t)&&e.onCommit(t.value)};return t.addEventListener("keydown",s=>{s.key==="Enter"?(s.preventDefault(),r()):s.key==="Escape"&&(s.preventDefault(),e.onCancel())}),t.addEventListener("blur",r),setTimeout(()=>{t.focus(),t.select()},0),t}const Of={id:"core-renderers",name:"Core Renderers",type:"cell-renderer",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/core-renderers.ts",fixed:!0};function jf(e){customElements.get("cell-date")||customElements.define("cell-date",zf),customElements.get("cell-datetime")||customElements.define("cell-datetime",Lf),customElements.get("cell-boolean")||customElements.define("cell-boolean",Ff),customElements.get("cell-script")||customElements.define("cell-script",Bf),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class zf extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._readonly){this.textContent=Ia(this._value);return}const t=document.createElement("input");t.type="date",t.value=Ia(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Lf extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._readonly){this.textContent=Ra(this._value).replace("T"," ");return}const t=document.createElement("input");t.type="datetime-local",t.value=Ra(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Ff extends HTMLElement{constructor(){super(...arguments),this._value=!1,this._readonly=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");if(t.type="checkbox",t.checked=Mf(this._value),this._readonly){t.disabled=!0,t.style.cssText="transform:translateY(1px)",this.append(t);return}t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Mf(e){return e===!0||e==="true"||e===1||e==="1"}class Bf extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={},this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set column(t){this._column=t,!this._editing&&this.render()}get column(){return this._column}set row(t){this._row=t??{},!this._editing&&this.render()}get row(){return this._row}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this.style.display="block",this.style.minWidth="0",this.style.overflow="hidden",this._editing){const t=dc({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(t),this._editor=t;return}this.append(this._readonly?this.renderOutput():cc(this.renderOutput(),this.pencil()))}pencil(){return lc(()=>{this._editing=!0,this.render()},"Edit the stored value")}renderOutput(){const t=this._column?.script;if(!t||!t.trim()){const o=document.createElement("span");return o.textContent="(no script)",o.style.cssText="color:#9ca3af;font-style:italic",o}let r;try{r=Nf(t)}catch(o){return Ci("compile error",o)}let s;try{s=r(this._row)}catch(o){return Ci("runtime error",o)}if(typeof s!="string")return Ci("render(row) did not return a string",null);const n=document.createElement("span");return n.style.cssText="display:block;width:100%",n.innerHTML=s,n}commit(t){const r=t!==this._value;this._value=t,this._editing=!1,this.render(),r&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Pa=new Map;function Nf(e){const t=Pa.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return Pa.set(e,r),r}function Ci(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const s=t instanceof Error?t.message:String(t);r.title=s}return r}function Ia(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function Ra(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const s=new Date(t);if(Number.isNaN(s.getTime()))return"";const n=s.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const Uf=Object.freeze(Object.defineProperty({__proto__:null,init:jf,meta:Of},Symbol.toStringTag,{value:"Module"})),Hf={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function qf(e){customElements.get("cell-color")||customElements.define("cell-color",Wf),e.ui.registerCellRenderer("color","cell-color")}class Wf extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,s){this.value=s}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Kf=Object.freeze(Object.defineProperty({__proto__:null,init:qf,meta:Hf},Symbol.toStringTag,{value:"Module"})),Vf={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function Gf(e){customElements.get("cell-image")||customElements.define("cell-image",Yf),e.ui.registerCellRenderer("image","cell-image")}class Yf extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t??"",this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this.style.display="block",this.style.minWidth="0",this.style.overflow="hidden",this._editing){const s=document.createElement("span");s.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const n=dc({value:this._value,onCommit:a=>this.commit(a),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:a=>this._editor===a}),o=document.createElement("button");o.type="button",o.textContent="upload",o.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",o.addEventListener("mousedown",a=>a.preventDefault()),o.addEventListener("click",()=>this.pickFile()),s.append(n,o),this.append(s),this._editor=n;return}const t=document.createElement("span");if(t.style.cssText="display:flex;align-items:center;gap:0.4rem;min-width:0",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const s=document.createElement("img");s.src=this._value,s.alt="",s.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(s)}else{const s=document.createElement("span");if(s.style.color="#9ca3af",s.textContent="no image",t.append(s),!this._readonly){const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}}this.append(this._readonly?t:cc(t,this.pencil()))}pencil(){return lc(()=>{this._editing=!0,this.render()},"Edit the image URL")}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const s=new FileReader;s.onload=()=>this.commit(String(s.result)),s.readAsDataURL(r)}),t.click()}commit(t){const r=t!==this._value;this._value=t,this._editing=!1,this.render(),r&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Xf=Object.freeze(Object.defineProperty({__proto__:null,init:Gf,meta:Vf},Symbol.toStringTag,{value:"Module"}));/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let z={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&z.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let s=arguments[r];if(s==null)continue;s=Object(s);let n=Object.keys(Object(s));for(let o=0,a=n.length;o<a;o++){let c=n[o],u=Object.getOwnPropertyDescriptor(s,c);u!==void 0&&u.enumerable&&(t[c]=s[c])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,s=new Array(r);r--;)s[r]=[t[r],e[t[r]]];return s}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),s=document.createDocumentFragment();r.forEach(function(n){let o=n instanceof Node;s.appendChild(o?n:document.createTextNode(String(n)))}),this.appendChild(s)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,s=this;do for(r=t.length;--r>=0&&t.item(r)!==s;);while(r<0&&(s=s.parentElement));return s}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let s=document.createEvent("CustomEvent");return s.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),s}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),s=r.length>>>0;if(s===0)return!1;let n=t|0,o=Math.max(n>=0?n:s-Math.abs(n),0);function a(c,u){return c===u||typeof c=="number"&&typeof u=="number"&&isNaN(c)&&isNaN(u)}for(;o<s;){if(a(r[o],e))return!0;o++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>z.modifier=e),document.addEventListener("keyup",()=>z.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const s=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(s===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(s),o=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-o)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(s===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(s),o=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-o)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((s,n)=>{(s.startsWith("--")||s.startsWith("var"))&&(r[n]=z.getCssVariableValue(s))}),r.forEach(s=>{z.colorNames[s]?t[2]="#"+z.colorNames[s]:s.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=s:s.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=s:t[2]=s}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),s=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return s&&(t.size=s[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let s=e.indexOf(")");t=e.slice(0,s+1).replace(/\s+/g,""),t.startsWith("var")&&(t=z.getCssVariableValue(t)),r=e.slice(s+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let s=e.indexOf(" ");s>0?(t=e.slice(0,s+1).replace(/\s+/g,""),r=e.slice(s+1,e.length).trim()):t=e,t.startsWith("--")&&(t=z.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let s=r.indexOf(" ");r=r.slice(s+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:z.colorNames[r]?r="#"+z.colorNames[r]:r.match(/^(--|var)/)?r=z.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,s,n,o,a,c,u,p,x,y={};const $=/^#?([\da-f]{3}|[\da-f]{6})$/gi,B=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,F=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,L=this.colorNames;return L[t]&&(t=L[t]),t.match($)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),s=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),y.rgb={r:parseInt(r,16),g:parseInt(s,16),b:parseInt(n,16)},y.hex=`#${r}${s}${n}`):(y.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},y.hex=`#${t}`),x=this.rgbToHsl(y.rgb.r,y.rgb.g,y.rgb.b),y.hsl=x,y.rgb.css=`rgb(${y.rgb.r},${y.rgb.g},${y.rgb.b})`):t.match(B)?(u=B.exec(t),y.rgb={css:t,r:u[1],g:u[2],b:u[3]},y.hex=this.rgbToHex(u[1],u[2],u[3]),x=this.rgbToHsl(u[1],u[2],u[3]),y.hsl=x):t.match(F)?(u=F.exec(t),o=u[1]/360,a=u[2].slice(0,u[2].length-1)/100,c=u[3].slice(0,u[3].length-1)/100,p=this.hslToRgb(o,a,c),y.rgb={css:`rgb(${p[0]},${p[1]},${p[2]})`,r:p[0],g:p[1],b:p[2]},y.hex=this.rgbToHex(y.rgb.r,y.rgb.g,y.rgb.b),y.hsl={css:`hsl(${u[1]},${u[2]},${u[3]})`,h:u[1],s:u[2],l:u[3]}):(y.hex="#f5f5f5",y.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},y.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),y},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),s=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),o=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",a=this.perceivedBrightness(s)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",u=this.lighten(e,this.colorFilledDark),p=this.perceivedBrightness(u)<=t?"#ffffff":"#000000";return[r.hsl.css,s,n,o,a,c,u,p]},darken(e,t){const r=this.color(e).hsl,s=parseFloat(r.l),n=Math.round(s-s*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,s=parseFloat(r.l),n=Math.round(s+(100-s)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let s,n,o;if(t===0)s=n=o=r;else{let a=(p,x,y)=>(y<0&&(y+=1),y>1&&(y-=1),y<.16666666666666666?p+(x-p)*6*y:y<.5?x:y<.6666666666666666?p+(x-p)*(.6666666666666666-y)*6:p),c=r<.5?r*(1+t):r+t-r*t,u=2*r-c;s=a(u,c,e+1/3),n=a(u,c,e),o=a(u,c,e-1/3)}return[Math.round(s*255),Math.round(n*255),Math.round(o*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let s=Math.max(e,t,r),n=Math.min(e,t,r),o,a,c=(s+n)/2;if(s===n)o=a=0;else{let u=s-n;switch(a=c>.5?u/(2-s-n):u/(s+n),s){case e:o=(t-r)/u+(t<r?6:0);break;case t:o=(r-e)/u+2;break;case r:o=(e-t)/u+4;break}o/=6}return o=Math.round(o*360),a=Math.round(a*100)+"%",c=Math.round(c*100)+"%",{css:"hsl("+o+","+a+","+c+")",h:o,s:a,l:c}},rgbToHex(e,t,r){let s=Number(e).toString(16),n=Number(t).toString(16),o=Number(r).toString(16);return s.length===1&&(s=`0${s}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${s}${n}${o}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),s=r.filter(a=>a.match(/^(down|right|up|left)$/i));s.length&&(t.autoposition=s[0],r.splice(r.indexOf(s[0]),1));let n=r.filter(a=>a.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let o=r.filter(a=>a.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return o.length&&(t.offsetX=o[0].match(/^[+-]?\d*\.?\d+$/i)?`${o[0]}px`:o[0],o[1]?t.offsetY=o[1].match(/^[+-]?\d*\.?\d+$/i)?`${o[1]}px`:o[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(o[0]),1),o[1]&&r.splice(r.indexOf(o[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(L=>{typeof t[L]=="function"&&(t[L]=t[L].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,s=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),o=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},a=r==="window"?{x:1,y:1}:{x:o.width/r.offsetWidth,y:o.height/r.offsetHeight},c=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);o.width-=(parseFloat(c.borderLeftWidth)+parseFloat(c.borderRightWidth))*a.x,o.height-=(parseFloat(c.borderTopWidth)+parseFloat(c.borderBottomWidth))*a.y;let u;t.of?typeof t.of=="string"?u=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?u=t.of[0].getBoundingClientRect():u=t.of.getBoundingClientRect():u=o;let p=this.getScrollbarWidth(document.body),x=this.getScrollbarWidth(e.parentElement),y="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?y=u.left-o.left-parseFloat(c.borderLeftWidth)+"px":y="0px":t.at.startsWith("center")?t.of?y=u.left-o.left-parseFloat(c.borderLeftWidth)+u.width/2+"px":y=o.width/2+"px":t.at.startsWith("right-")&&(t.of?y=u.left-o.left-parseFloat(c.borderLeftWidth)+u.width+"px":y=o.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?y=u.left-o.left-parseFloat(c.borderLeftWidth)-s.width/2+"px":y=-s.width/2+"px":t.at.startsWith("center")?t.of?y=u.left-o.left-parseFloat(c.borderLeftWidth)-(s.width-u.width)/2+"px":y=o.width/2-s.width/2+"px":t.at.startsWith("right-")&&(t.of?y=u.left-o.left-parseFloat(c.borderLeftWidth)+(u.width-s.width/2)+"px":y=o.width-s.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?y=u.left-o.left-parseFloat(c.borderLeftWidth)-s.width+"px":y=-s.width+"px":t.at.startsWith("center")?t.of?y=u.left-o.left-parseFloat(c.borderLeftWidth)-s.width+u.width/2+"px":y=o.width/2-s.width+"px":t.at.startsWith("right-")&&(t.of?y=u.left-o.left-parseFloat(c.borderLeftWidth)+u.width-s.width+"px":y=o.width-s.width+"px",r!=="window"&&(y=parseFloat(y)-x.y+"px")));let $="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?$=u.top-o.top-parseFloat(c.borderTopWidth)+"px":$="0px":t.at.endsWith("center")?t.of?$=u.top-o.top-parseFloat(c.borderTopWidth)+u.height/2+"px":$=o.height/2+"px":t.at.endsWith("-bottom")&&(t.of?$=u.top-o.top-parseFloat(c.borderTopWidth)+u.height+"px":$=o.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?$=u.top-o.top-parseFloat(c.borderTopWidth)-s.height/2+"px":$=-s.height/2+"px":t.at.endsWith("center")?t.of?$=u.top-o.top-parseFloat(c.borderTopWidth)-s.height/2+u.height/2+"px":$=o.height/2-s.height/2+"px":t.at.endsWith("-bottom")&&(t.of?$=u.top-o.top-parseFloat(c.borderTopWidth)-s.height/2+u.height+"px":$=o.height-s.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?$=u.top-o.top-parseFloat(c.borderTopWidth)-s.height+"px":$=-s.height+"px":t.at.endsWith("center")?t.of?$=u.top-o.top-parseFloat(c.borderTopWidth)-s.height+u.height/2+"px":$=o.height/2-s.height+"px":t.at.endsWith("-bottom")&&(t.of?$=u.top-o.top-parseFloat(c.borderTopWidth)-s.height+u.height+"px":$=o.height-s.height+"px",r!=="window"?$=parseFloat($)-x.x+"px":$=parseFloat($)-p.x+"px")),e.style.left=a.x===1?y:parseFloat(y)/a.x+"px",e.style.top=a.y===1?$:parseFloat($)/a.y+"px";let B=getComputedStyle(e),F={left:B.left,top:B.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(F=this.applyPositionAutopos(e,F,t)),(t.offsetX||t.offsetY)&&(F=this.applyPositionOffset(e,F,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(F=this.applyPositionMinMax(e,F,t)),t.modify&&(F=this.applyPositionModify(e,F,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const s=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(s);const n=Array.prototype.slice.call(document.querySelectorAll(`.${s}`)),o=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((a,c)=>{c>0&&c<=o&&(t.top=parseFloat(t.top)+n[--c].getBoundingClientRect().height+z.autopositionSpacing+"px")});break;case"up":n.forEach((a,c)=>{c>0&&c<=o&&(t.top=parseFloat(t.top)-n[--c].getBoundingClientRect().height-z.autopositionSpacing+"px")});break;case"right":n.forEach((a,c)=>{c>0&&c<=o&&(t.left=parseFloat(t.left)+n[--c].getBoundingClientRect().width+z.autopositionSpacing+"px")});break;case"left":n.forEach((a,c)=>{c>0&&c<=o&&(t.left=parseFloat(t.left)-n[--c].getBoundingClientRect().width-z.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const s=getComputedStyle(e);return{left:s.left,top:s.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const s=getComputedStyle(e);return{left:s.left,top:s.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const s=getComputedStyle(e);return{left:s.left,top:s.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(s=>{e.classList.contains(s)&&(t=s)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),s=document.createElement("button");s.className="btn btn"+t.color.slice(r),document.body.appendChild(s),t.color=getComputedStyle(s).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(s),s=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},s=typeof t=="object"?Object.assign(r,t):r,n=s.bgPanel,o=s.bgContent,a=s.colorHeader,c=s.colorContent,u=s.bgFooter,p=s.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[a]&&(a="#"+this.colorNames[a]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach($=>e.querySelector($).style.color=this.getCssVariableValue(a)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach($=>$.style.color=this.getCssVariableValue(a)),this.colorNames[o]?e.content.style.background="#"+this.colorNames[o]:e.content.style.background=this.getCssVariableValue(o),this.colorNames[c]?e.content.style.color="#"+this.colorNames[c]:e.content.style.color=this.getCssVariableValue(c),this.perceivedBrightness(a)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[u]?e.footer.style.background="#"+this.colorNames[u]:e.footer.style.background=this.getCssVariableValue(u),this.colorNames[p]?e.footer.style.color="#"+this.colorNames[p]:e.footer.style.color=this.getCssVariableValue(p),s.border&&e.setBorder(s.border),s.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(s.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,s]of Object.entries(t))e.style[r]=typeof s=="string"?z.getCssVariableValue(s):s;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const s=document.createElement("script");s.src=e,s.type=t,document.head.appendChild(s),r&&(s.onload=r)}},ajax(e,t){let r,s,n=new XMLHttpRequest;const o={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let a=z.strToHtml(this.responseText);r.urlSelector&&(a=a.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(a)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},o,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},o,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&z.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}s=r.url.trim().split(/\s+/),r.url=encodeURI(s[0]),s.length>1&&(s.shift(),r.urlSelector=s.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&z.ajaxAutoresizeAutoreposition(t,r),z.ajaxAlwaysCallbacks.length&&z.ajaxAlwaysCallbacks.forEach(a=>{t?a.call(n,n,t):a.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const s={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(o,a){if(a){let c=z.strToHtml(o);a.contentRemove(),a.content.append(c)}}};if(t&&typeof e=="string")r=Object.assign({},s,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},s,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&z.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(o=>{if(o.ok)return o[r.bodyMethod]()}).then(o=>{t?r.done.call(o,o,t):r.done.call(o,o),t&&(r.autoresize||r.autoreposition)&&z.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const s=r.split(" "),n=Object.assign({},{width:s[0],height:s[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const s=Object.assign({},r);t.autoresize&&e.resize(s),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const s=document.createElement("div"),n=e.parentElement;s.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(s.style.width=r+"px",s.style.height=r+"px"):t==="ct"||t==="cb"?s.style.height=r+"px":(t==="lc"||t==="rc")&&(s.style.width=r+"px"),n!==document.body&&(s.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(s)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",s,n){if(typeof t=="function"&&(t=[t]),r)return t[r](o=>o.call(e,e,s,n));t.forEach(o=>o.call(e,e,s,n))},resetZi(){this.zi=((e=z.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=z.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){z.zi||(z.zi=((g=z.ziBase)=>{let v=g;return{next:()=>v++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${z.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let g=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;z.errorpanel(g)}return!1}let s=this.pOcontainer(e.container);if(typeof s=="object"&&s.length&&s.length>0&&(s=s[0]),!s)return this.errorReporting&&z.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(g=>{e[g]?typeof e[g]=="function"&&(e[g]=[e[g]]):e[g]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const o=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),a=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),u=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),p=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),x=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),y=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),$=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),B=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),F=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),L=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),H=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),G=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),ue=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),ie=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),oe=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[o,a,c,u,p,x,y,$,B,F,L,H,G,ue].forEach(g=>g.panel=n);const V=n.querySelector(".jsPanel-btn-close"),J=n.querySelector(".jsPanel-btn-maximize"),he=n.querySelector(".jsPanel-btn-normalize"),$e=n.querySelector(".jsPanel-btn-smallify"),Te=n.querySelector(".jsPanel-btn-minimize");V&&z.pointerup.forEach(g=>{V.addEventListener(g,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.close(null,!0)})}),J&&z.pointerup.forEach(g=>{J.addEventListener(g,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.maximize()})}),he&&z.pointerup.forEach(g=>{he.addEventListener(g,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.normalize()})}),$e&&z.pointerup.forEach(g=>{$e.addEventListener(g,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),Te&&z.pointerup.forEach(g=>{Te.addEventListener(g,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.minimize()})});let Ie=z.extensions;for(let g in Ie)Object.prototype.hasOwnProperty.call(Ie,g)&&(n[g]=Ie[g]);if(n.setBorder=g=>{let v=z.pOborder(g);return v[2].length||(v[2]=n.style.backgroundColor),v=v.join(" "),n.style.border=v,n.options.border=v,n},n.setBorderRadius=g=>{typeof g=="string"&&(g.startsWith("--")||g.startsWith("var"))&&(g=g.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),g=z.getCssVariableValue(g)),typeof g=="number"&&(g+="px"),n.style.borderRadius=g;const v=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=v.borderTopLeftRadius,n.header.style.borderTopRightRadius=v.borderTopRightRadius):(n.content.style.borderTopLeftRadius=v.borderTopLeftRadius,n.content.style.borderTopRightRadius=v.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=v.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=v.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=v.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=v.borderBottomLeftRadius),n},n.setTheme=(g=e.theme,v)=>{let S;if(n.status==="minimized"&&(S=!0,n.normalize()),z.clearTheme(n),typeof g=="object")e.border=void 0,z.applyCustomTheme(n,g);else if(typeof g=="string"){g==="none"&&(g="white");let b=z.getThemeDetails(g);z.applyColorTheme(n,b)}return S&&n.minimize(),v&&v.call(n,n),n},n.remove=(g,v,S)=>{n.parentElement.removeChild(n),document.getElementById(g)?S&&S.call(n,g,n):(n.removeMinimizedReplacement(),n.status="closed",v&&document.dispatchEvent(oe),document.dispatchEvent(ie),n.options.onclosed&&z.processCallbacks(n,n.options.onclosed,"every",v),z.autopositionRemaining(n),S&&S.call(g,g)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(g,v)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(ue),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!z.processCallbacks(n,n.options.onbeforeclose,"some",n.status,v))return n;n.options.animateOut?(n.options.animateIn&&z.remClass(n,n.options.animateIn),z.setClass(n,n.options.animateOut),n.addEventListener("animationend",S=>{S.stopPropagation(),n.remove(n.id,v,g)})):n.remove(n.id,v,g)}},n.maximize=(g,v)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!z.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(p);const S=n.parentElement,b=z.pOcontainment(e.maximizedMargin);return S===document.body?(n.style.width=document.documentElement.clientWidth-b[1]-b[3]+"px",n.style.height=document.documentElement.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"):(n.style.width=S.clientWidth-b[1]-b[3]+"px",n.style.height=S.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"),$e.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),v||n.front(),document.dispatchEvent(x),document.dispatchEvent(a),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),g&&g.call(n,n,n.statusBefore),e.onmaximized&&z.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=g=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!z.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(y),!document.getElementById("jsPanel-replacement-container")){const v=document.createElement("div");v.id="jsPanel-replacement-container",document.body.append(v)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent($),document.dispatchEvent(a),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let v=n.createMinimizedReplacement(),S,b,k;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(v);break;case"parentpanel":b=n.closest(".jsPanel-content").parentElement,k=b.querySelectorAll(".jsPanel-minimized-box"),S=k[k.length-1],S.append(v);break;case"parent":b=n.parentElement,S=b.querySelector(".jsPanel-minimized-container"),S||(S=document.createElement("div"),S.className="jsPanel-minimized-container",b.append(S)),S.append(v);break;default:document.querySelector(e.minimizeTo).append(v)}}return g&&g.call(n,n,n.statusBefore),e.onminimized&&z.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=g=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!z.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(c),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),$e.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(u),document.dispatchEvent(a),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),g&&g.call(n,n,n.statusBefore),e.onnormalized&&z.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=g=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!z.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(B),n.style.overflow="hidden";const v=window.getComputedStyle(n),S=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(v.borderTopWidth)+parseFloat(v.borderBottomWidth)+S+"px",$e.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(F),document.dispatchEvent(a),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(L),document.dispatchEvent(a),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const b=n.querySelectorAll(".jsPanel-minimized-box");return b[b.length-1].style.display="none",g&&g.call(n,n,n.statusBefore),e.onsmallified&&z.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=g=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!z.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(H),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(u),document.dispatchEvent(a),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),$e.style.transform="rotate(0deg)";const v=n.querySelectorAll(".jsPanel-minimized-box");v[v.length-1].style.display="flex",g&&g.call(n,n,n.statusBefore),e.onunsmallified&&z.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(g,v=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const S=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(b=>b.style.zIndex);Math.max(...S)>n.style.zIndex&&(n.style.zIndex=z.zi.next()),z.resetZi()}return document.dispatchEvent(G),g&&g.call(n,n),e.onfronted&&v&&z.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(g,v=!1)=>{if(v||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),g&&typeof g=="function"&&!v)g.call(n,n,n.snappableTo);else if(g!==!1){let S=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const b=z.pOcontainment(n.options.dragit.containment),k=n.snappableTo;k.startsWith("left")?S[0]=b[3]:k.startsWith("right")&&(S[0]=-b[1]),k.endsWith("top")?S[1]=b[0]:k.endsWith("bottom")&&(S[1]=-b[2])}n.reposition(`${n.snappableTo} ${S[0]} ${S[1]}`)}v||(n.snapped=n.snappableTo)},n.move=(g,v)=>{let S=n.overlaps(g,"paddingbox"),b=n.parentElement;return g.appendChild(n),n.options.container=g,n.style.left=S.left+"px",n.style.top=S.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),v&&v.call(n,n,g,b),n},n.closeChildpanels=g=>(n.getChildpanels().forEach(v=>v.close()),g&&g.call(n,n),n),n.getChildpanels=g=>{const v=n.content.querySelectorAll(".jsPanel");return g&&v.forEach((S,b,k)=>{g.call(S,S,b,k)}),v},n.isChildpanel=g=>{const v=n.closest(".jsPanel-content"),S=v?v.parentElement:null;return g&&g.call(n,n,S),v?S:!1},n.contentRemove=g=>(z.emptyNode(n.content),g&&g.call(n,n),n),n.createMinimizedReplacement=()=>{const g=z.createMinimizedTemplate(),v=window.getComputedStyle(n.headertitle).color,S=window.getComputedStyle(n),b=e.iconfont,k=g.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?z.setStyles(g,{backgroundColor:S.backgroundColor,backgroundPositionX:S.backgroundPositionX,backgroundPositionY:S.backgroundPositionY,backgroundRepeat:S.backgroundRepeat,backgroundAttachment:S.backgroundAttachment,backgroundImage:S.backgroundImage,backgroundSize:S.backgroundSize,backgroundOrigin:S.backgroundOrigin,backgroundClip:S.backgroundClip}):g.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,g.id=n.id+"-min",g.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),g.querySelector(".jsPanel-headerlogo")),g.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),g.querySelector(".jsPanel-title")),g.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),g.querySelector(".jsPanel-title").style.color=v,k.style.color=v,k.querySelectorAll("button").forEach(ne=>ne.style.color=v),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(ne=>{n.header.classList.contains(ne)&&g.querySelector(".jsPanel-hdr").classList.add(ne)}),n.setIconfont(b,g),n.dataset.btnnormalize==="enabled"?z.pointerup.forEach(ne=>{g.querySelector(".jsPanel-btn-normalize").addEventListener(ne,pe=>{if(pe.preventDefault(),pe.button&&pe.button>0)return!1;n.normalize()})}):k.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?z.pointerup.forEach(ne=>{g.querySelector(".jsPanel-btn-maximize").addEventListener(ne,pe=>{if(pe.preventDefault(),pe.button&&pe.button>0)return!1;n.maximize()})}):k.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?z.pointerup.forEach(ne=>{g.querySelector(".jsPanel-btn-close").addEventListener(ne,pe=>{if(pe.preventDefault(),pe.button&&pe.button>0)return!1;n.close(null,!0)})}):k.querySelector(".jsPanel-btn-close").style.display="none",g},n.removeMinimizedReplacement=()=>{const g=document.getElementById(`${n.id}-min`);g&&g.parentElement.removeChild(g)},n.drag=(g={})=>{let v,S,b;const k=new CustomEvent("jspaneldragstart",{detail:n.id}),ne=new CustomEvent("jspaneldrag",{detail:n.id}),pe=new CustomEvent("jspaneldragstop",{detail:n.id});[k,ne,pe].forEach(We=>We.panel=n);const K=We=>{let Me=We.split("-");return Me.forEach((Se,Oe)=>{Me[Oe]=Se.charAt(0).toUpperCase()+Se.slice(1)}),"snap"+Me.join("")};function Q(We){We.relatedTarget===null&&z.pointermove.forEach(Me=>{document.removeEventListener(Me,S,!1),n.style.opacity=1})}let Xe=g.handles||z.defaults.dragit.handles,ct=g.cursor||z.defaults.dragit.cursor;function on(We){if(z.pointermove.forEach(Me=>document.removeEventListener(Me,S)),z.removeSnapAreas(),v){if(n.style.opacity=1,v=void 0,b.snap){switch(n.snappableTo){case"left-top":n.snap(b.snap.snapLeftTop);break;case"center-top":n.snap(b.snap.snapCenterTop);break;case"right-top":n.snap(b.snap.snapRightTop);break;case"right-center":n.snap(b.snap.snapRightCenter);break;case"right-bottom":n.snap(b.snap.snapRightBottom);break;case"center-bottom":n.snap(b.snap.snapCenterBottom);break;case"left-bottom":n.snap(b.snap.snapLeftBottom);break;case"left-center":n.snap(b.snap.snapLeftCenter);break}b.snap.callback&&n.snappableTo&&typeof b.snap.callback=="function"&&(b.snap.callback.call(n,n),b.snap.repositionOnSnap&&b.snap[K(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&b.snap.repositionOnSnap&&b.snap[K(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Me=n.parentElement;n.move(n.droppableTo),b.drop.callback&&b.drop.callback.call(n,n,n.droppableTo,Me)}if(document.dispatchEvent(pe),b.stop.length){let Me=window.getComputedStyle(n),Se={left:parseFloat(Me.left),top:parseFloat(Me.top),width:parseFloat(Me.width),height:parseFloat(Me.height)};z.processCallbacks(n,b.stop,!1,Se,We)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Me=>Me.style.pointerEvents="auto"),document.removeEventListener(We,on)}return n.querySelectorAll(Xe).forEach(We=>{We.style.touchAction="none",We.style.cursor=ct,z.pointerdown.forEach(Me=>{We.addEventListener(Me,Se=>{if(Se.button&&Se.button>0||(b=Object.assign({},z.defaults.dragit,g),b.disableOnMaximized&&n.status==="maximized"))return!1;if((b.containment||b.containment===0)&&(b.containment=z.pOcontainment(b.containment)),b.grid&&Array.isArray(b.grid)&&b.grid.length===1&&(b.grid[1]=b.grid[0]),b.snap&&(typeof b.snap=="object"?b.snap=Object.assign({},z.defaultSnapConfig,b.snap):b.snap=z.defaultSnapConfig),Se.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(nt=>nt.style.pointerEvents="none");let Oe=window.getComputedStyle(n),Qe=parseFloat(Oe.left),Re=parseFloat(Oe.top),ae=parseFloat(Oe.width),Je=parseFloat(Oe.height),Be=Se.touches?Se.touches[0].clientX:Se.clientX,ye=Se.touches?Se.touches[0].clientY:Se.clientY,ke=n.parentElement,Pt=ke.getBoundingClientRect(),fe=window.getComputedStyle(ke),Ze=n.getScaleFactor(),xn=0,tn=z.getScrollbarWidth(ke);S=nt=>{if(nt.preventDefault(),!v){if(document.dispatchEvent(k),n.style.opacity=b.opacity,n.snapped&&b.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let ce=n.getBoundingClientRect(),De=Be-(ce.left+ce.width),we=ce.width/2;De>-we&&(xn=De+we)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),b.drop&&b.drop.dropZones){let ce=b.drop.dropZones.map(we=>z.pOcontainer(we)),De=[];ce.forEach(function(we){we.length?we.forEach(function(Fe){De.push(Fe)}):De.push(we)}),De=De.filter(function(we,Fe,Ge){return Ge.indexOf(we)===Fe}),b.drop.dropZones=De}b.start.length&&z.processCallbacks(n,b.start,!1,{left:Qe,top:Re,width:ae,height:Je},nt)}v=1;let It,Le,Ke,kt,st,Ae,_e,Rt,Ve,yt,ht=nt.touches?nt.touches[0].clientX:nt.clientX,it=nt.touches?nt.touches[0].clientY:nt.clientY,Ue=window.getComputedStyle(n),ge;if(ke===document.body){let ce=n.getBoundingClientRect();Ve=window.innerWidth-parseInt(fe.borderLeftWidth,10)-parseInt(fe.borderRightWidth,10)-(ce.left+ce.width),yt=window.innerHeight-parseInt(fe.borderTopWidth,10)-parseInt(fe.borderBottomWidth,10)-(ce.top+ce.height)}else Ve=parseInt(fe.width,10)-parseInt(fe.borderLeftWidth,10)-parseInt(fe.borderRightWidth,10)-(parseInt(Ue.left,10)+parseInt(Ue.width,10)),yt=parseInt(fe.height,10)-parseInt(fe.borderTopWidth,10)-parseInt(fe.borderBottomWidth,10)-(parseInt(Ue.top,10)+parseInt(Ue.height,10));It=parseFloat(Ue.left),Ke=parseFloat(Ue.top),st=Ve,_e=yt,b.snap&&(b.snap.trigger==="panel"?(Le=It**2,kt=Ke**2,Ae=st**2,Rt=_e**2):b.snap.trigger==="pointer"&&(n.options.container==="window"?(It=ht,Ke=it,st=window.innerWidth-ht,_e=window.innerHeight-it,Le=ht**2,kt=Ke**2,Ae=st**2,Rt=_e**2):(ge=n.overlaps(ke,"paddingbox",nt),It=ge.pointer.left,Ke=ge.pointer.top,st=ge.pointer.right,_e=ge.pointer.bottom,Le=ge.pointer.left**2,kt=ge.pointer.top**2,Ae=ge.pointer.right**2,Rt=ge.pointer.bottom**2)));let et=Math.sqrt(Le+kt),ee=Math.sqrt(Le+Rt),ot=Math.sqrt(Ae+kt),pt=Math.sqrt(Ae+Rt),St=Math.abs(It-st)/2,te=Math.abs(Ke-_e)/2,an=Math.sqrt(Le+te**2),pn=Math.sqrt(kt+St**2),ft=Math.sqrt(Ae+te**2),$n=Math.sqrt(Rt+St**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(ne),(!b.axis||b.axis==="x")&&(n.style.left=Qe+(ht-Be)/Ze.x+xn+"px"),(!b.axis||b.axis==="y")&&(n.style.top=Re+(it-ye)/Ze.y+"px"),b.grid){let ce=b.grid,De=b.axis,we=ce[0]*Math.round((Qe+(ht-Be))/ce[0]),Fe=ce[1]*Math.round((Re+(it-ye))/ce[1]);(!De||De==="x")&&(n.style.left=`${we}px`),(!De||De==="y")&&(n.style.top=`${Fe}px`)}if(b.containment||b.containment===0){let ce=b.containment,De,we;if(n.options.container==="window")De=window.innerWidth-parseFloat(Ue.width)-ce[1]-tn.y,we=window.innerHeight-parseFloat(Ue.height)-ce[2]-tn.x;else{let Fe=parseFloat(fe.borderLeftWidth)+parseFloat(fe.borderRightWidth),Ge=parseFloat(fe.borderTopWidth)+parseFloat(fe.borderBottomWidth);De=Pt.width/Ze.x-parseFloat(Ue.width)-ce[1]-Fe-tn.y,we=Pt.height/Ze.y-parseFloat(Ue.height)-ce[2]-Ge-tn.x}parseFloat(n.style.left)<=ce[3]&&(n.style.left=ce[3]+"px"),parseFloat(n.style.top)<=ce[0]&&(n.style.top=ce[0]+"px"),parseFloat(n.style.left)>=De&&(n.style.left=De+"px"),parseFloat(n.style.top)>=we&&(n.style.top=we+"px")}if(b.drag.length){let ce={left:It,top:Ke,right:st,bottom:_e,width:parseFloat(Ue.width),height:parseFloat(Ue.height)};z.processCallbacks(n,b.drag,!1,ce,nt)}if(b.snap){let ce=b.snap.sensitivity,De=ke===document.body?window.innerWidth/8:Pt.width/8,we=ke===document.body?window.innerHeight/8:Pt.height/8;n.snappableTo=!1,z.removeSnapAreas(),et<ce?b.snap.snapLeftTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-top",z.createSnapArea(n,"lt",ce)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ge.pointer.left>0&&ge.pointer.top>0?(n.snappableTo="left-top",z.createSnapArea(n,"lt",ce)):(n.snappableTo=!1,z.removeSnapAreas()))):ee<ce?b.snap.snapLeftBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-bottom",z.createSnapArea(n,"lb",ce)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ge.pointer.left>0&&ge.pointer.bottom>0?(n.snappableTo="left-bottom",z.createSnapArea(n,"lb",ce)):(n.snappableTo=!1,z.removeSnapAreas()))):ot<ce?b.snap.snapRightTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-top",z.createSnapArea(n,"rt",ce)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ge.pointer.right>0&&ge.pointer.top>0?(n.snappableTo="right-top",z.createSnapArea(n,"rt",ce)):(n.snappableTo=!1,z.removeSnapAreas()))):pt<ce?b.snap.snapRightBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-bottom",z.createSnapArea(n,"rb",ce)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ge.pointer.right>0&&ge.pointer.bottom>0?(n.snappableTo="right-bottom",z.createSnapArea(n,"rb",ce)):(n.snappableTo=!1,z.removeSnapAreas()))):Ke<ce&&pn<De?b.snap.snapCenterTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-top",z.createSnapArea(n,"ct",ce)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ge.pointer.top>0?(n.snappableTo="center-top",z.createSnapArea(n,"ct",ce)):(n.snappableTo=!1,z.removeSnapAreas()))):It<ce&&an<we?b.snap.snapLeftCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-center",z.createSnapArea(n,"lc",ce)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ge.pointer.left>0?(n.snappableTo="left-center",z.createSnapArea(n,"lc",ce)):(n.snappableTo=!1,z.removeSnapAreas()))):st<ce&&ft<we?b.snap.snapRightCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-center",z.createSnapArea(n,"rc",ce)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ge.pointer.right>0?(n.snappableTo="right-center",z.createSnapArea(n,"rc",ce)):(n.snappableTo=!1,z.removeSnapAreas()))):_e<ce&&$n<De&&b.snap.snapCenterBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-bottom",z.createSnapArea(n,"cb",ce)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ge.pointer.bottom>0?(n.snappableTo="center-bottom",z.createSnapArea(n,"cb",ce)):(n.snappableTo=!1,z.removeSnapAreas())))}if(b.drop&&b.drop.dropZones){let ce=z.isIE?"msElementsFromPoint":"elementsFromPoint",De=document[ce](nt.clientX,nt.clientY);Array.isArray(De)||(De=Array.prototype.slice.call(De)),b.drop.dropZones.forEach(we=>{De.includes(we)&&(n.droppableTo=we)}),De.includes(n.droppableTo)||(n.droppableTo=!1)}},z.pointermove.forEach(nt=>document.addEventListener(nt,S)),window.addEventListener("mouseout",Q,!1)})}),z.pointerup.forEach(Me=>{document.addEventListener(Me,on),window.removeEventListener("mouseout",Q)}),g.disable&&(We.style.pointerEvents="none")}),n},n.dragit=g=>{const v=Object.assign({},z.defaults.dragit,e.dragit),S=n.querySelectorAll(v.handles);return g==="disable"?S.forEach(b=>b.style.pointerEvents="none"):S.forEach(b=>b.style.pointerEvents="auto"),n},n.sizeit=(g={})=>{const v=new CustomEvent("jspanelresizestart",{detail:n.id}),S=new CustomEvent("jspanelresize",{detail:n.id}),b=new CustomEvent("jspanelresizestop",{detail:n.id});[v,S,b].forEach(Se=>Se.panel=n);let k={},ne,pe,K,Q,Xe,ct;k.handles=g.handles||z.defaults.resizeit.handles,k.handles.split(",").forEach(Se=>{const Oe=document.createElement("DIV");Oe.className=`jsPanel-resizeit-handle jsPanel-resizeit-${Se.trim()}`,n.append(Oe)});let on=g.aspectRatio?g.aspectRatio:!1;function We(Se){Se.relatedTarget===null&&z.pointermove.forEach(Oe=>document.removeEventListener(Oe,ne,!1))}function Me(Se){if(z.pointermove.forEach(Oe=>document.removeEventListener(Oe,ne,!1)),Se.target.classList&&Se.target.classList.contains("jsPanel-resizeit-handle")){let Oe,Qe,Re=Se.target.className;if(Re.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(Oe=!0),Re.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Qe=!0),k.grid&&Array.isArray(k.grid)){k.grid.length===1&&(k.grid[1]=k.grid[0]);const ae=parseFloat(n.style.width),Je=parseFloat(n.style.height),Be=ae%k.grid[0],ye=Je%k.grid[1],ke=parseFloat(n.style.left),Pt=parseFloat(n.style.top),fe=ke%k.grid[0],Ze=Pt%k.grid[1];Be<k.grid[0]/2?n.style.width=ae-Be+"px":n.style.width=ae+(k.grid[0]-Be)+"px",ye<k.grid[1]/2?n.style.height=Je-ye+"px":n.style.height=Je+(k.grid[1]-ye)+"px",Oe&&(fe<k.grid[0]/2?n.style.left=ke-fe+"px":n.style.left=ke+(k.grid[0]-fe)+"px"),Qe&&(Ze<k.grid[1]/2?n.style.top=Pt-Ze+"px":n.style.top=Pt+(k.grid[1]-Ze)+"px")}}if(pe){n.content.style.pointerEvents="inherit",pe=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let Oe=n.controlbar.querySelector(".jsPanel-btn-smallify"),Qe=n.getBoundingClientRect();if(Oe&&Qe.height>ct+5&&(Oe.style.transform="rotate(0deg)"),document.dispatchEvent(b),k.stop.length){let Re=window.getComputedStyle(n),ae={left:parseFloat(Re.left),top:parseFloat(Re.top),width:parseFloat(Re.width),height:parseFloat(Re.height)};z.processCallbacks(n,k.stop,!1,ae,Se)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Oe=>Oe.style.pointerEvents="auto"),k.aspectRatio=on,document.removeEventListener(Se,Me)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(Se=>{Se.style.touchAction="none",z.pointerdown.forEach(Oe=>{Se.addEventListener(Oe,Qe=>{if(Qe.preventDefault(),Qe.stopPropagation(),Qe.button&&Qe.button>0)return!1;let Re=1;if(k=Object.assign({},z.defaults.resizeit,g),(k.containment||k.containment===0)&&(k.containment=z.pOcontainment(k.containment)),k.aspectRatio&&k.aspectRatio===!0&&(k.aspectRatio="panel"),z.modifier){let we=z.modifier;we.altKey?k.aspectRatio="content":we.ctrlKey?k.aspectRatio="panel":we.shiftKey&&(k.aspectRatio=!1,Re=2)}let ae=typeof k.maxWidth=="function"?k.maxWidth():k.maxWidth||1e4,Je=typeof k.maxHeight=="function"?k.maxHeight():k.maxHeight||1e4,Be=typeof k.minWidth=="function"?k.minWidth():k.minWidth,ye=typeof k.minHeight=="function"?k.minHeight():k.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(we=>we.style.pointerEvents="none");const ke=n.parentElement,Pt=ke.tagName.toLowerCase(),fe=n.getBoundingClientRect(),Ze=ke.getBoundingClientRect(),xn=window.getComputedStyle(ke,null),tn=parseInt(xn.borderLeftWidth,10),nt=parseInt(xn.borderTopWidth,10),It=xn.getPropertyValue("position"),Le=Qe.clientX||Qe.clientX===0||Qe.touches[0].clientX,Ke=Qe.clientY||Qe.clientY===0||Qe.touches[0].clientY,kt=Le/Ke,st=Qe.target.classList,Ae=n.getScaleFactor(),_e=fe.width/fe.height,Rt=n.content.getBoundingClientRect(),Ve=Rt.width/Rt.height,yt=n.header.getBoundingClientRect().height,ht=n.footer.getBoundingClientRect().height||0;let it=fe.left,Ue=fe.top,ge=1e4,et=1e4,ee=1e4,ot=1e4;Xe=fe.width,ct=fe.height,Pt!=="body"&&(it=fe.left-Ze.left+ke.scrollLeft,Ue=fe.top-Ze.top+ke.scrollTop),Pt==="body"&&k.containment?(ge=document.documentElement.clientWidth-fe.left,ee=document.documentElement.clientHeight-fe.top,et=fe.width+fe.left,ot=fe.height+fe.top):k.containment&&(It==="static"?(ge=Ze.width-fe.left+tn,ee=Ze.height+Ze.top-fe.top+nt,et=fe.width+(fe.left-Ze.left)-tn,ot=fe.height+(fe.top-Ze.top)-nt):(ge=ke.clientWidth-(fe.left-Ze.left)/Ae.x+tn,ee=ke.clientHeight-(fe.top-Ze.top)/Ae.y+nt,et=(fe.width+fe.left-Ze.left)/Ae.x-tn,ot=n.clientHeight+(fe.top-Ze.top)/Ae.y-nt)),k.containment&&(et-=k.containment[3],ot-=k.containment[0],ge-=k.containment[1],ee-=k.containment[2]);const pt=window.getComputedStyle(n),St=parseFloat(pt.width)-fe.width,te=parseFloat(pt.height)-fe.height;let an=parseFloat(pt.left)-fe.left,pn=parseFloat(pt.top)-fe.top;ke!==document.body&&(an+=Ze.left,pn+=Ze.top);let ft=parseInt(pt.borderTopWidth,10),$n=parseInt(pt.borderRightWidth,10),ce=parseInt(pt.borderBottomWidth,10),De=parseInt(pt.borderLeftWidth,10);ne=we=>{we.preventDefault(),pe||(document.dispatchEvent(v),k.start.length&&z.processCallbacks(n,k.start,!1,{width:Xe,height:ct,left:it,top:Ue},we),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),fe.height>ct+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),pe=1,document.dispatchEvent(S);let Fe=we.touches?we.touches[0].clientX:we.clientX,Ge=we.touches?we.touches[0].clientY:we.clientY,je;st.contains("jsPanel-resizeit-e")?(K=Xe+(Fe-Le)*Re/Ae.x+St,K>=ge&&(K=ge),K>=ae&&(K=ae),K<=Be&&(K=Be),n.style.width=K+"px",Re===2&&(n.style.left=it-(Fe-Le)+"px"),k.aspectRatio==="content"?(n.style.height=(K-$n-De)/Ve+yt+ht+ft+ce+"px",k.containment&&(je=n.overlaps(ke),je.bottom<=k.containment[2]&&(n.style.height=ee+"px",n.style.width=ee*Ve+"px"))):k.aspectRatio==="panel"&&(n.style.height=K/_e+"px",k.containment&&(je=n.overlaps(ke),je.bottom<=k.containment[2]&&(n.style.height=ee+"px",n.style.width=ee*_e+"px")))):st.contains("jsPanel-resizeit-s")?(Q=ct+(Ge-Ke)*Re/Ae.y+te,Q>=ee&&(Q=ee),Q>=Je&&(Q=Je),Q<=ye&&(Q=ye),n.style.height=Q+"px",Re===2&&(n.style.top=Ue-(Ge-Ke)+"px"),k.aspectRatio==="content"?(n.style.width=(Q-yt-ht-ft-ce)*Ve+ft+ce+"px",k.containment&&(je=n.overlaps(ke),je.right<=k.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/Ve+"px"))):k.aspectRatio==="panel"&&(n.style.width=Q*_e+"px",k.containment&&(je=n.overlaps(ke),je.right<=k.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/_e+"px")))):st.contains("jsPanel-resizeit-w")?(K=Xe+(Le-Fe)*Re/Ae.x+St,K<=ae&&K>=Be&&K<=et&&(n.style.left=it+(Fe-Le)/Ae.x+an+"px"),K>=et&&(K=et),K>=ae&&(K=ae),K<=Be&&(K=Be),n.style.width=K+"px",k.aspectRatio==="content"?(n.style.height=(K-$n-De)/Ve+yt+ht+ft+ce+"px",k.containment&&(je=n.overlaps(ke),je.bottom<=k.containment[2]&&(n.style.height=ee+"px",n.style.width=ee*Ve+"px"))):k.aspectRatio==="panel"&&(n.style.height=K/_e+"px",k.containment&&(je=n.overlaps(ke),je.bottom<=k.containment[2]&&(n.style.height=ee+"px",n.style.width=ee*_e+"px")))):st.contains("jsPanel-resizeit-n")?(Q=ct+(Ke-Ge)*Re/Ae.y+te,Q<=Je&&Q>=ye&&Q<=ot&&(n.style.top=Ue+(Ge-Ke)/Ae.y+pn+"px"),Q>=ot&&(Q=ot),Q>=Je&&(Q=Je),Q<=ye&&(Q=ye),n.style.height=Q+"px",k.aspectRatio==="content"?(n.style.width=(Q-yt-ht-ft-ce)*Ve+ft+ce+"px",k.containment&&(je=n.overlaps(ke),je.right<=k.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/Ve+"px"))):k.aspectRatio==="panel"&&(n.style.width=Q*_e+"px",k.containment&&(je=n.overlaps(ke),je.right<=k.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/_e+"px")))):st.contains("jsPanel-resizeit-se")?(K=Xe+(Fe-Le)*Re/Ae.x+St,K>=ge&&(K=ge),K>=ae&&(K=ae),K<=Be&&(K=Be),n.style.width=K+"px",Re===2&&(n.style.left=it-(Fe-Le)+"px"),k.aspectRatio&&(n.style.height=K/_e+"px"),Q=ct+(Ge-Ke)*Re/Ae.y+te,Q>=ee&&(Q=ee),Q>=Je&&(Q=Je),Q<=ye&&(Q=ye),n.style.height=Q+"px",Re===2&&(n.style.top=Ue-(Ge-Ke)+"px"),k.aspectRatio==="content"?(n.style.width=(Q-yt-ht-ft-ce)*Ve+ft+ce+"px",k.containment&&(je=n.overlaps(ke),je.right<=k.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/Ve+"px"))):k.aspectRatio==="panel"&&(n.style.width=Q*_e+"px",k.containment&&(je=n.overlaps(ke),je.right<=k.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/_e+"px")))):st.contains("jsPanel-resizeit-sw")?(Q=ct+(Ge-Ke)*Re/Ae.y+te,Q>=ee&&(Q=ee),Q>=Je&&(Q=Je),Q<=ye&&(Q=ye),n.style.height=Q+"px",Re===2&&(n.style.top=Ue-(Ge-Ke)+"px"),k.aspectRatio&&(n.style.width=Q*_e+"px"),K=Xe+(Le-Fe)*Re/Ae.x+St,K<=ae&&K>=Be&&K<=et&&(n.style.left=it+(Fe-Le)/Ae.x+an+"px"),K>=et&&(K=et),K>=ae&&(K=ae),K<=Be&&(K=Be),n.style.width=K+"px",k.aspectRatio==="content"?(n.style.height=(K-$n-De)/Ve+yt+ht+ft+ce+"px",k.containment&&(je=n.overlaps(ke),je.bottom<=k.containment[2]&&(n.style.height=ee+"px",n.style.width=ee*Ve+"px"))):k.aspectRatio==="panel"&&(n.style.height=K/_e+"px",k.containment&&(je=n.overlaps(ke),je.bottom<=k.containment[2]&&(n.style.height=ee+"px",n.style.width=ee*_e+"px")))):st.contains("jsPanel-resizeit-ne")?(K=Xe+(Fe-Le)*Re/Ae.x+St,K>=ge&&(K=ge),K>=ae&&(K=ae),K<=Be&&(K=Be),n.style.width=K+"px",Re===2&&(n.style.left=it-(Fe-Le)+"px"),k.aspectRatio&&(n.style.height=K/_e+"px"),Q=ct+(Ke-Ge)*Re/Ae.y+te,Q<=Je&&Q>=ye&&Q<=ot&&(n.style.top=Ue+(Ge-Ke)/Ae.y+pn+"px"),Q>=ot&&(Q=ot),Q>=Je&&(Q=Je),Q<=ye&&(Q=ye),n.style.height=Q+"px",k.aspectRatio==="content"?(n.style.width=(Q-yt-ht-ft-ce)*Ve+ft+ce+"px",k.containment&&(je=n.overlaps(ke),je.right<=k.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/Ve+"px"))):k.aspectRatio==="panel"&&(n.style.width=Q*_e+"px",k.containment&&(je=n.overlaps(ke),je.right<=k.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/_e+"px")))):st.contains("jsPanel-resizeit-nw")&&(k.aspectRatio&&st.contains("jsPanel-resizeit-nw")&&(Fe=Ge*kt,Ge=Fe/kt),K=Xe+(Le-Fe)*Re/Ae.x+St,K<=ae&&K>=Be&&K<=et&&(n.style.left=it+(Fe-Le)/Ae.x+an+"px"),K>=et&&(K=et),K>=ae&&(K=ae),K<=Be&&(K=Be),n.style.width=K+"px",k.aspectRatio&&(n.style.height=K/_e+"px"),Q=ct+(Ke-Ge)*Re/Ae.y+te,Q<=Je&&Q>=ye&&Q<=ot&&(n.style.top=Ue+(Ge-Ke)/Ae.y+pn+"px"),Q>=ot&&(Q=ot),Q>=Je&&(Q=Je),Q<=ye&&(Q=ye),n.style.height=Q+"px",k.aspectRatio==="content"?n.style.width=(Q-yt-ht-ft-ce)*Ve+ft+ce+"px":k.aspectRatio==="panel"&&(n.style.width=Q*_e+"px")),window.getSelection().removeAllRanges();const nn=window.getComputedStyle(n),He={left:parseFloat(nn.left),top:parseFloat(nn.top),right:parseFloat(nn.right),bottom:parseFloat(nn.bottom),width:parseFloat(nn.width),height:parseFloat(nn.height)};k.resize.length&&z.processCallbacks(n,k.resize,!1,He,we)},z.pointermove.forEach(we=>document.addEventListener(we,ne,!1)),window.addEventListener("mouseout",We,!1)})}),z.pointerup.forEach(function(Oe){document.addEventListener(Oe,Me),window.removeEventListener("mouseout",We)}),g.disable&&(Se.style.pointerEvents="none")}),n},n.resizeit=g=>{const v=n.querySelectorAll(".jsPanel-resizeit-handle");return g==="disable"?v.forEach(S=>S.style.pointerEvents="none"):v.forEach(S=>S.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const g=n.getBoundingClientRect();return{x:g.width/n.offsetWidth,y:g.height/n.offsetHeight}},n.calcSizeFactors=()=>{const g=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(g.left)/(window.innerWidth-parseFloat(g.width)),n.vf=parseFloat(g.top)/(window.innerHeight-parseFloat(g.height));else if(n.parentElement){let v=n.parentElement.getBoundingClientRect();n.hf=parseFloat(g.left)/(v.width-parseFloat(g.width)),n.vf=parseFloat(g.top)/(v.height-parseFloat(g.height))}},n.saveCurrentDimensions=()=>{const g=window.getComputedStyle(n);n.currentData.width=g.width,n.currentData.height=g.height},n.saveCurrentPosition=()=>{const g=window.getComputedStyle(n);n.currentData.left=g.left,n.currentData.top=g.top},n.reposition=(...g)=>{let v=e.position,S=!0,b;return g.forEach(k=>{typeof k=="string"||typeof k=="object"?v=k:typeof k=="boolean"?S=k:typeof k=="function"&&(b=k)}),z.position(n,v),n.slaves&&n.slaves.size>0&&n.slaves.forEach(k=>k.reposition()),S&&n.saveCurrentPosition(),b&&b.call(n,n),n},n.repositionOnSnap=g=>{let v="0",S="0",b=z.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(g){case"left-top":v=b[3],S=b[0];break;case"right-top":v=-b[1],S=b[0];break;case"right-bottom":v=-b[1],S=-b[2];break;case"left-bottom":v=b[3],S=-b[2];break;case"center-top":v=b[3]/2-b[1]/2,S=b[0];break;case"center-bottom":v=b[3]/2-b[1]/2,S=-b[2];break;case"left-center":v=b[3],S=b[0]/2-b[2]/2;break;case"right-center":v=-b[1],S=b[0]/2-b[2]/2;break}z.position(n,g),z.setStyles(n,{left:`calc(${n.style.left} + ${v}px)`,top:`calc(${n.style.top} + ${S}px)`})},n.overlaps=(g,v,S)=>{let b=n.getBoundingClientRect(),k=getComputedStyle(n.parentElement),ne=n.getScaleFactor(),pe={top:0,right:0,bottom:0,left:0},K,Q=0,Xe=0,ct=0,on=0;n.options.container!=="window"&&v==="paddingbox"&&(pe.top=parseInt(k.borderTopWidth,10)*ne.y,pe.right=parseInt(k.borderRightWidth,10)*ne.x,pe.bottom=parseInt(k.borderBottomWidth,10)*ne.y,pe.left=parseInt(k.borderLeftWidth,10)*ne.x),typeof g=="string"?g==="window"?K={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:g==="parent"?K=n.parentElement.getBoundingClientRect():K=document.querySelector(g).getBoundingClientRect():K=g.getBoundingClientRect(),S&&(Q=S.touches?S.touches[0].clientX:S.clientX,Xe=S.touches?S.touches[0].clientY:S.clientY,ct=Q-K.left,on=Xe-K.top);let We=b.left<K.right&&b.right>K.left,Me=b.top<K.bottom&&b.bottom>K.top;return{overlaps:We&&Me,top:b.top-K.top-pe.top,right:K.right-b.right-pe.right,bottom:K.bottom-b.bottom-pe.bottom,left:b.left-K.left-pe.left,parentBorderWidth:pe,panelRect:b,referenceRect:K,pointer:{clientX:Q,clientY:Xe,left:ct-pe.left,top:on-pe.top,right:K.width-ct-pe.right,bottom:K.height-on-pe.bottom}}},n.setSize=()=>{if(e.panelSize){const g=z.pOsize(n,e.panelSize);n.style.width=g.width,n.style.height=g.height}else if(e.contentSize){const g=z.pOsize(n,e.contentSize);n.content.style.width=g.width,n.content.style.height=g.height,n.style.width=g.width,n.content.style.width="100%"}return n},n.resize=(...g)=>{let v=window.getComputedStyle(n),S={width:v.width,height:v.height},b=!0,k;g.forEach(K=>{typeof K=="string"?S=K:typeof K=="object"?S=Object.assign(S,K):typeof K=="boolean"?b=K:typeof K=="function"&&(k=K)});let ne=z.pOsize(n,S);n.style.width=ne.width,n.style.height=ne.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(K=>K.reposition()),b&&n.saveCurrentDimensions(),n.status="normalized";let pe=n.controlbar.querySelector(".jsPanel-btn-smallify");return pe&&(pe.style.transform="rotate(0deg)"),k&&k.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=g=>{if(g.target===window){let v=n.status,S=e.onwindowresize,b,k;if(v==="maximized"&&S)n.maximize(!1,!0);else if(n.snapped&&v!=="minimized")n.snap(n.snapped,!0);else if(v==="normalized"||v==="smallified"||v==="maximized"){let ne=typeof S;ne==="boolean"?(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",k=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=k<=0?0:k+"px"):ne==="function"?S.call(n,g,n):ne==="object"&&(S.preset===!0&&(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",k=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=k<=0?0:k+"px"),S.callback.call(n,g,n))}else v==="smallifiedmax"&&S&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(ne=>ne.reposition())}},n.setControls=(g,v)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(S=>{const b=S.className.split("-"),k=b[b.length-1];n.getAttribute(`data-btn${k}`)!=="hidden"&&(S.style.display="block")}),g.forEach(S=>{const b=n.controlbar.querySelector(S);b&&(b.style.display="none")}),v&&v.call(n,n),n),n.setControlStatus=(g,v="enable",S)=>{const b=n.controlbar.querySelector(`.jsPanel-btn-${g}`);switch(v){case"disable":n.getAttribute(`data-btn${g}`)!=="removed"&&(n.setAttribute(`data-btn${g}`,"disabled"),b.style.pointerEvents="none",b.style.opacity=.4,b.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${g}`)!=="removed"&&(n.setAttribute(`data-btn${g}`,"hidden"),b.style.display="none");break;case"show":n.getAttribute(`data-btn${g}`)!=="removed"&&(n.setAttribute(`data-btn${g}`,"enabled"),b.style.display="block",b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${g}`)!=="removed"&&(n.getAttribute(`data-btn${g}`)==="hidden"&&(b.style.display="block"),n.setAttribute(`data-btn${g}`,"enabled"),b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(b),n.setAttribute(`data-btn${g}`,"removed");break}return S&&S.call(n,n),n},n.setControlSize=g=>{const v=g.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(b=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(k=>b.classList.remove(k)),b.classList.add(`jsPanel-btn-${v}`)}),v==="xl"?n.titlebar.style.fontSize="1.5rem":v==="lg"?n.titlebar.style.fontSize="1.25rem":v==="md"?n.titlebar.style.fontSize="1.05rem":v==="sm"?n.titlebar.style.fontSize=".9rem":v==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=g=>{if(n.options.headerControls.add){let k=n.options.headerControls.add;Array.isArray(k)||(k=[k]),k.forEach(ne=>n.addControl(ne))}let v=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(k=>{let ne=k.className.match(/jsPanel-btn-[a-z\d]{3,}/i),pe=ne[0].substring(12);v.push(pe)});const b=z.pOheaderControls(e.headerControls);return e.headerControls=b,v.forEach(k=>{b[k]&&n.setControlStatus(k,b[k])}),n.setControlSize(b.size),g&&g.call(n,n),n},n.setHeaderLogo=(g,v)=>{let S=[n.headerlogo],b=document.querySelector("#"+n.id+"-min");return b&&S.push(b.querySelector(".jsPanel-headerlogo")),typeof g=="string"?g.startsWith("<")?S.forEach(k=>k.innerHTML=g):S.forEach(k=>{z.emptyNode(k);let ne=document.createElement("img");ne.src=g,k.append(ne)}):S.forEach(k=>{z.emptyNode(k),k.append(g)}),n.headerlogo.childNodes.forEach(k=>{k.nodeName&&k.nodeName==="IMG"&&k.setAttribute("draggable","false")}),v&&v.call(n,n),n},n.setHeaderRemove=g=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(v=>n.setAttribute(`data-btn${v}`,"removed")),g&&g.call(n,n),n),n.setHeaderTitle=(g,v)=>{let S=[n.headertitle],b=document.querySelector("#"+n.id+"-min");return b&&S.push(b.querySelector(".jsPanel-title")),typeof g=="string"?S.forEach(k=>k.innerHTML=g):typeof g=="function"?S.forEach(k=>{z.emptyNode(k),k.innerHTML=g()}):S.forEach(k=>{z.emptyNode(k),k.append(g)}),v&&v.call(n,n),n},n.setIconfont=(g,v=n,S)=>{if(g){let b,k;if(g==="fa"||g==="far"||g==="fal"||g==="fas"||g==="fad")b=[`${g} fa-window-close`,`${g} fa-window-maximize`,`${g} fa-window-restore`,`${g} fa-window-minimize`,`${g} fa-chevron-up`];else if(g==="material-icons")b=[g,g,g,g,g,g],k=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(g))b=[`custom-control-icon ${g[4]}`,`custom-control-icon ${g[3]}`,`custom-control-icon ${g[2]}`,`custom-control-icon ${g[1]}`,`custom-control-icon ${g[0]}`];else if(g==="bootstrap"||g==="glyphicon")b=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return v;v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(ne=>z.emptyNode(ne).innerHTML="<span></span>"),Array.prototype.slice.call(v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((ne,pe)=>{ne.className=b[pe],g==="material-icons"&&(ne.textContent=k[pe])})}return S&&S.call(v,v),v},n.addToolbar=(g,v,S)=>{if(g==="header"?g=n.headertoolbar:g==="footer"&&(g=n.footer),typeof v=="string")g.innerHTML=v;else if(Array.isArray(v))v.forEach(b=>{typeof b=="string"?g.innerHTML+=b:g.append(b)});else if(typeof v=="function"){let b=v.call(n,n);typeof b=="string"?g.innerHTML=b:g.append(b)}else g.append(v);return g.classList.add("active"),S&&S.call(n,n),n},n.addCloseControl=()=>{let g=document.createElement("button"),v=n.content.style.color;return g.classList.add("jsPanel-addCloseCtrl"),g.innerHTML=z.icons.close,g.style.color=v,n.options.rtl&&g.classList.add("rtl"),n.appendChild(g),z.pointerup.forEach(S=>{g.addEventListener(S,b=>{if(b.preventDefault(),b.button&&b.button>0)return!1;n.close(null,!0)})}),z.pointerdown.forEach(S=>{g.addEventListener(S,b=>b.preventDefault())}),n},n.addControl=g=>{if(!g.html)return n;g.position||(g.position=1);const v=n.controlbar.querySelectorAll(".jsPanel-btn").length;let S=document.createElement("button");S.innerHTML=g.html,S.className=`jsPanel-btn jsPanel-btn-${g.name} jsPanel-btn-${e.headerControls.size}`,S.style.color=n.header.style.color,g.position>v?n.controlbar.append(S):n.controlbar.insertBefore(S,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${g.position})`));const b=g.ariaLabel||g.name;return b&&S.setAttribute("aria-label",b),z.pointerup.forEach(k=>{S.addEventListener(k,ne=>{if(ne.preventDefault(),ne.button&&ne.button>0)return!1;g.handler.call(n,n,S)})}),g.afterInsert&&g.afterInsert.call(S,S),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(g=>{g.dir="rtl",e.rtl.lang&&(g.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),s.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),z.isIE){let g=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":g.forEach(v=>{v.style.height="34px"});break;case"xs":g.forEach(v=>{v.style.height="26px"});break;case"sm":g.forEach(v=>{v.style.height="30px"});break;case"lg":g.forEach(v=>{v.style.height="38px"});break;case"xl":g.forEach(v=>{v.style.height="42px"});break}}if(e.header==="auto-show-hide"){let g="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,g),this.setClass(n.content,g),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,z.setClass(n,g),z.remClass(n.content,g)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,z.remClass(n,g),z.setClass(n.content,g)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[g,v]of Object.entries(e.css))if(g==="panel")n.className+=` ${v}`;else{let S=n.querySelector(`.jsPanel-${g}`);S&&(S.className+=` ${v}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const g=e.contentOverflow.split(" ");g.length===1?n.content.style.overflow=g[0]:g.length===2&&(n.content.style.overflowX=g[0],n.content.style.overflowY=g[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let g=Object.assign({},z.defaultAutocloseConfig,e.autoclose);g.time&&typeof g.time=="number"&&(g.time+="ms");let v=n.progressbar.querySelector("div");v.addEventListener("animationend",S=>{S.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),g.progressbar&&(n.progressbar.classList.add("active"),g.background?z.colorNames[g.background]?n.progressbar.style.background="#"+z.colorNames[g.background]:n.progressbar.style.background=g.background:n.progressbar.classList.add("success-bg")),v.style.animation=`${g.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(u),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let g=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=g,e.dragit.snap===!0?(e.dragit.snap=z.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=g)}if(e.dragit?(["start","drag","stop"].forEach(g=>{e.dragit[g]?typeof e.dragit[g]=="function"&&(e.dragit[g]=[e.dragit[g]]):e.dragit[g]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",g=>{g.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(v=>{e.resizeit[v]?typeof e.resizeit[v]=="function"&&(e.resizeit[v]=[e.resizeit[v]]):e.resizeit[v]=[]}),n.sizeit(e.resizeit);let g;n.addEventListener("jspanelresizestart",v=>{v.panel===n&&(g=n.status)},!1),n.addEventListener("jspanelresizestop",v=>{v.panel===n&&(g==="smallified"||g==="smallifiedmax"||g==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(u),document.dispatchEvent(a),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(g=>{n.addEventListener(g,v=>{!v.target.closest(".jsPanel-btn-close")&&!v.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let g=e.onparentresize,v=typeof g,S=n.isChildpanel();if(S){const b=S.content;let k=[];n.parentResizeHandler=ne=>{if(ne.panel===S){k[0]=b.offsetWidth,k[1]=b.offsetHeight;let pe=n.status,K,Q;pe==="maximized"&&g?n.maximize():n.snapped&&pe!=="minimized"?n.snap(n.snapped,!0):pe==="normalized"||pe==="smallified"||pe==="maximized"?v==="function"?g.call(n,n,{width:k[0],height:k[1]}):v==="object"&&g.preset===!0?(K=(k[0]-n.offsetWidth)*n.hf,n.style.left=K<=0?0:K+"px",Q=(k[1]-n.offsetHeight)*n.vf,n.style.top=Q<=0?0:Q+"px",g.callback.call(n,n,{width:k[0],height:k[1]})):v==="boolean"&&(K=(k[0]-n.offsetWidth)*n.hf,n.style.left=K<=0?0:K+"px",Q=(k[1]-n.offsetHeight)*n.vf,n.style.top=Q<=0?0:Q+"px"):pe==="smallifiedmax"&&g&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(g=>g.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(g=>g.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(g=>g.call(n,n)):t.call(n,n)),document.dispatchEvent(o),n}};const Qf={id:"html-preview",name:"HTML Preview",type:"cell-renderer",version:"0.3.0",description:`Shows a cell's HTML as a plain-text preview (first N characters); click to edit the raw HTML in a dialog, or use the popup icon to view the full rendered HTML in a window. Apply by setting a column's renderer to "html-preview". For direct in-cell rendering use the "html" renderer instead.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-preview.ts"};let Hi=30;async function Da(e){const t=await e.settings.get("html-preview","maxChars");typeof t=="number"&&Number.isFinite(t)&&t>0&&(Hi=Math.floor(t))}function Jf(e){customElements.get("html-preview-cell")||customElements.define("html-preview-cell",ep),e.ui.registerCellRenderer("html-preview","html-preview-cell"),e.ui.registerSettings("html-preview","HTML Preview",[{key:"maxChars",label:"Max characters shown",type:"number",default:30,scope:"workspace",description:"HTML-preview cells show the first N characters of the text; use the popup icon on the right to open the full rendered HTML in a window. Applies to cells rendered after the change (reload to refresh all)."}]),Da(e),e.events.on("app:ready",()=>void Da(e))}function Oa(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let ja=0;function Zf(e){const t=document.createElement("div");return t.innerHTML=e,(t.textContent??"").replace(/\s+/g," ").trim()}class ep extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML"}set value(t){const r=t??"";this._value!==r&&(this._value=r,this.render())}get value(){return this._value}set column(t){this._label=t?.label??"HTML"}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const a=document.createElement("span");a.style.cssText="color:#9ca3af;cursor:text",a.textContent="empty",a.title="Click to edit the HTML",a.addEventListener("click",()=>this.openEditor()),this.append(a);return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%";const r=document.createElement("span"),s=Zf(this._value);r.textContent=s.length>Hi?s.slice(0,Hi)+"…":s,r.title="Click to edit the HTML",r.style.cssText="flex:0 1 auto;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:text",r.addEventListener("click",a=>{a.stopPropagation(),this.openEditor()});const n=document.createElement("span");n.style.cssText="flex:1 1 auto";const o=document.createElement("button");o.type="button",o.title="Open the HTML in a window",o.setAttribute("aria-label","Open the HTML in a window"),o.innerHTML='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>',o.style.cssText="flex:none;display:inline-flex;align-items:center;justify-content:center;padding:1px;background:none;border:0;color:#9ca3af;cursor:pointer;line-height:0",o.addEventListener("mouseenter",()=>o.style.color="#4b5563"),o.addEventListener("mouseleave",()=>o.style.color="#9ca3af"),o.addEventListener("click",a=>{a.stopPropagation(),this.openWindow()}),t.append(r,n,o),this.append(t)}openWindow(){const t=document.createElement("div");t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box",t.innerHTML=this._value,z.create({id:`easydb-html-popup-${++ja}`,container:Oa(),headerTitle:this._label,theme:"#7c3aed",content:t,contentSize:"520 400",position:"center-top 0 60",minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1},resizeit:{containment:!1}})}openEditor(){const t=document.createElement("div");t.style.cssText="display:flex;flex-direction:column;gap:0.5rem;height:100%;box-sizing:border-box;padding:0.5rem";const r=document.createElement("textarea");r.value=this._value,r.style.cssText="flex:1 1 auto;width:100%;box-sizing:border-box;resize:none;font-family:monospace;font-size:0.85rem";const s=document.createElement("div");s.style.cssText="display:flex;justify-content:flex-end;gap:0.5rem;flex:none";const n=document.createElement("button");n.type="button",n.textContent="Cancel",n.style.cssText="padding:0.3rem 0.8rem;cursor:pointer";const o=document.createElement("button");o.type="button",o.textContent="Save",o.style.cssText="padding:0.3rem 0.8rem;cursor:pointer;background:#7c3aed;color:#fff;border:0;border-radius:0.25rem",s.append(n,o),t.append(r,s);const a=z.create({id:`easydb-html-edit-${++ja}`,container:Oa(),headerTitle:`Edit ${this._label}`,theme:"#7c3aed",content:t,contentSize:"520 400",position:"center",minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1},resizeit:{containment:!1}});n.addEventListener("click",()=>a.close()),o.addEventListener("click",()=>{this._value=r.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:r.value},bubbles:!0,composed:!0})),a.close(),this.render()}),r.addEventListener("keydown",c=>{c.key==="Enter"&&(c.ctrlKey||c.metaKey)?(c.preventDefault(),o.click()):c.key==="Escape"&&(c.preventDefault(),a.close())}),setTimeout(()=>r.focus(),0)}}const tp=Object.freeze(Object.defineProperty({__proto__:null,init:Jf,meta:Qf},Symbol.toStringTag,{value:"Module"})),np={id:"html-render",name:"HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's value directly as HTML (unescaped, in full, no popup). Apply by setting a column's renderer to "html". For a truncated preview use "html-preview".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-render.ts"};function rp(e){customElements.get("html-render-cell")||customElements.define("html-render-cell",sp),e.ui.registerCellRenderer("html","html-render-cell")}class sp extends HTMLElement{constructor(){super(...arguments),this._value="",this.editing=!1}set value(t){const r=t??"";this._value!==r&&(this._value=r,this.editing||this.render())}get value(){return this._value}connectedCallback(){this.editing||this.render()}render(){this.innerHTML="";const t=document.createElement("span");t.style.cssText="display:inline-block;min-width:1ch;cursor:text",t.title="Click to edit",this._value?t.innerHTML=this._value:(t.style.color="#9ca3af",t.textContent="empty"),t.addEventListener("click",()=>this.beginEdit()),this.append(t)}beginEdit(){this.editing=!0,this.innerHTML="";const t=document.createElement("input");t.type="text",t.value=this._value,t.style.cssText="width:100%;box-sizing:border-box";let r=!1;const s=()=>{r||(r=!0,this.editing=!1,this._value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:t.value},bubbles:!0,composed:!0})),this.render())};t.addEventListener("blur",s),t.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),t.blur()):n.key==="Escape"&&(n.preventDefault(),r=!0,this.editing=!1,this.render())}),this.append(t),t.focus(),t.select()}}const ip=Object.freeze(Object.defineProperty({__proto__:null,init:rp,meta:np},Symbol.toStringTag,{value:"Module"})),op={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function ap(e){customElements.get("cell-link")||customElements.define("cell-link",lp),e.ui.registerCellRenderer("link","cell-link")}class lp extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._editor=null}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="",this._editor=null;const t=this._value,r=this._editing?null:cp(t),s=!this._editing&&!r?dp(t):null,n=!this._editing&&!r&&!s?up(t):null;if(r||s||n){const o=document.createElement("span");o.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const a=document.createElement("a");a.href=r?t:s?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(a.target="_blank",a.rel="noopener noreferrer"),a.textContent=t,a.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",a.title=r?`Open ${t}`:s?`Email ${t}`:`Call ${t}`;const c=document.createElement("button");c.type="button",c.title="Edit",c.textContent="✎",c.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",c.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),this._editing=!0,this.render()}),o.append(a,c),this.append(o)}else{const o=document.createElement("input");o.type="text",o.value=t,o.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",o.addEventListener("change",()=>{this._editor===o&&this.commit(o.value)}),o.addEventListener("keydown",a=>{a.key==="Enter"?(a.preventDefault(),this.commit(o.value)):a.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),o.addEventListener("blur",()=>{this._editor===o&&this.commit(o.value)}),this.append(o),this._editor=o,this._editing&&setTimeout(()=>{o.focus(),o.select()},0)}}commit(t){const r=t!==this._value;this._value=t,this._editing=!1,this.render(),r&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function cp(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function dp(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function up(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const s=/[ ()\-.]/.test(t),n=t.startsWith("+");return!s&&!n&&r.length<10?null:t}const hp=Object.freeze(Object.defineProperty({__proto__:null,init:ap,meta:op},Symbol.toStringTag,{value:"Module"}));var fp=Object.defineProperty,pp=Object.getOwnPropertyDescriptor,Ns=(e,t,r,s)=>{for(var n=s>1?void 0:s?pp(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&fp(t,r,n),n};function mp(e,t,r){(rn.instance??bp()).show(e,t,r)}function gp(e){if(!e)return null;if(e.source){const t=e.source.type,r=e.source.writable?"Edits you make are written back to the source.":"It is read-only — edits are not saved back to the source.";return{label:`Connected (live ${t})`,note:`This table is connected to a live ${t} backend: its rows are fetched from the source on demand and are not stored locally. ${r} Closing its window just disconnects the view — the source data is untouched.`}}return e.origin?{label:"Imported (snapshot)",note:"This table is a local snapshot imported once from its origin. The rows live in this browser, so edits stay local; use Refresh to re-fetch the latest data from the origin.",url:e.origin.url}:{label:"Local",note:"This table was created in the app and is stored locally in your browser."}}function bp(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let rn=class extends Ne{constructor(){super(...arguments),this.name="",this.info=null,this.provenance=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),rn.instance=this}disconnectedCallback(){super.disconnectedCallback(),rn.instance===this&&(rn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}show(e,t,r){this.name=e,this.info=t,this.provenance=r??null,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,r){if(!t&&!r)return me;const s=r?A`<a href=${r} target="_blank" rel="noopener noreferrer">${t||r}</a>`:A`${t}`;return A`<dt>${e}</dt>
      <dd>${s}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl),r=gp(this.provenance);return A`
      <dialog @cancel=${this.close} @keydown=${Yt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${this.name}</h2>
            <div class="header-actions">
              <button type="submit" class="ghost">Close</button>
            </div>
          </div>
          <div class="dialog-body">
            ${r?A`<div class="kind">
                  <span class="kind-label">${r.label}</span>
                  <p class="kind-note">${r.note}</p>
                  ${r.url?A`<div class="kind-origin">
                        <a href=${r.url} target="_blank" rel="noopener noreferrer">${r.url}</a>
                      </div>`:me}
                </div>`:me}
            ${e?.descriptionHtml?A`<div class="desc">${ir(e.descriptionHtml)}</div>`:e?.description?A`<div class="desc">${e.description}</div>`:me}
            ${t?A`<dl>
                  ${this.row("Source",e?.source,e?.sourceUrl)}
                  ${this.row("License",e?.license,e?.licenseUrl)}
                  ${this.row("About",e?.about,e?.aboutUrl)}
                </dl>`:me}
            ${!e?.description&&!e?.descriptionHtml&&!t&&!r?A`<p class="empty">No additional information.</p>`:me}
          </div>
        </form>
      </dialog>
    `}};rn.instance=null;rn.styles=[Gt,qe`
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
    `];Ns([q()],rn.prototype,"name",2);Ns([q()],rn.prototype,"info",2);Ns([q()],rn.prototype,"provenance",2);rn=Ns([tt("table-info-dialog")],rn);const yp=.25,wp=4;function vp(e){return Math.min(wp,Math.max(yp,e))}function za(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const Sr={x:0,y:0,scale:1};function La(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function xp(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function $p(e,t){let r={...Sr};t.style.transformOrigin="0 0";const s=new Set,n=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`;for(const v of s)v({...r})};let o="none",a={...Sr},c=0,u=0,p=0,x=0,y=0,$=0;const B=(v,S)=>{const b=e.getBoundingClientRect();return{x:v-b.left,y:S-b.top}},F=v=>{if(v.touches.length===2){o="pinch",a={...r};const[S,b]=[v.touches[0],v.touches[1]];p=La(S,b)||1;const k=B((S.clientX+b.clientX)/2,(S.clientY+b.clientY)/2);x=(k.x-r.x)/r.scale,y=(k.y-r.y)/r.scale,v.preventDefault();return}if(v.touches.length===1&&!xp(v.target)){const S=v.timeStamp;if(S-$<300){r={...Sr},n(),$=0,o="none",v.preventDefault();return}$=S,o="pan",a={...r},c=v.touches[0].clientX,u=v.touches[0].clientY}else o="none"},L=v=>{if(o==="pan"&&v.touches.length===1){const S=v.touches[0];r=za(a,S.clientX-c,S.clientY-u),n(),v.preventDefault()}else if(o==="pinch"&&v.touches.length>=2){const[S,b]=[v.touches[0],v.touches[1]],k=vp(a.scale*(La(S,b)/p)),ne=B((S.clientX+b.clientX)/2,(S.clientY+b.clientY)/2);r={x:ne.x-x*k,y:ne.y-y*k,scale:k},n(),v.preventDefault()}},H=v=>{v.touches.length===0?o="none":v.touches.length===1&&o==="pinch"&&(o="pan",a={...r},c=v.touches[0].clientX,u=v.touches[0].clientY)};let G=!1,ue={...Sr},ie=0,oe=0,V=!1;const J=(v,S)=>{const b=e.getBoundingClientRect();return v>=b.left&&v<=b.right&&S>=b.top&&S<=b.bottom},he=v=>{if(!G)return;const S=v.clientX-ie,b=v.clientY-oe;!V&&Math.hypot(S,b)<4||(V=!0,document.body.style.cursor="grabbing",r=za(ue,S,b),n(),v.preventDefault())},$e=()=>{G&&(G=!1,document.body.style.cursor="",window.removeEventListener("mousemove",he,!0),window.removeEventListener("mouseup",Te,!0))};function Te(){$e()}const Ie=v=>{v.button===2&&J(v.clientX,v.clientY)&&(G=!0,V=!1,ue={...r},ie=v.clientX,oe=v.clientY,window.addEventListener("mousemove",he,!0),window.addEventListener("mouseup",Te,!0))},g=v=>{V&&(v.preventDefault(),V=!1)};return e.addEventListener("touchstart",F,{passive:!1}),e.addEventListener("touchmove",L,{passive:!1}),e.addEventListener("touchend",H),e.addEventListener("touchcancel",H),window.addEventListener("mousedown",Ie,!0),window.addEventListener("contextmenu",g,!0),{snapshot:()=>({...r}),reset:()=>{r={...Sr},n()},restore:v=>{r={...v},n()},subscribe:v=>(s.add(v),()=>s.delete(v)),dispose:()=>{e.removeEventListener("touchstart",F),e.removeEventListener("touchmove",L),e.removeEventListener("touchend",H),e.removeEventListener("touchcancel",H),window.removeEventListener("mousedown",Ie,!0),window.removeEventListener("contextmenu",g,!0),$e()}}}function uc(e,t){let r=null;const s=n=>{const o=document.getElementById(e);o&&(o.style.transformOrigin="0 0",o.style.transform=`translate(${-n.x/n.scale}px, ${-n.y/n.scale}px) scale(${1/n.scale})`)};return{enter(){const n=t();r||!n||(s(n.snapshot()),r=n.subscribe(s))},exit(){r?.(),r=null;const n=document.getElementById(e);n&&(n.style.transform="",n.style.transformOrigin="")}}}function kp(){for(const e of document.querySelectorAll(".jsPanel"))e.status==="maximized"&&e.maximize?.(void 0,!0)}function Cp(e){let t=0;const r=()=>{t||(t=requestAnimationFrame(()=>{t=0,kp()}))},s=typeof ResizeObserver<"u"?new ResizeObserver(r):null;return s?.observe(e),window.addEventListener("resize",r),()=>{t&&cancelAnimationFrame(t),t=0,s?.disconnect(),window.removeEventListener("resize",r)}}const Ep="input, textarea, select, button, a, .jsPanel-controlbar",Sp=".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",Ei=new WeakMap;function hc(e){const t=e.status==="maximized";for(const r of e.querySelectorAll(Sp))Ei.has(r)||Ei.set(r,r.style.cursor||"move"),r.style.cursor=t?"pointer":Ei.get(r)??"move"}function _p(){for(const e of document.querySelectorAll(".jsPanel"))hc(e)}function Tp(){const e=r=>{let s=null;for(const o of r.composedPath())if(o instanceof HTMLElement){if(o.matches(Ep))return;if(o.classList.contains("jsPanel-titlebar")){s=o;break}}if(!s)return;const n=s.closest(".jsPanel");n&&(n.status==="maximized"||n.status==="minimized"?n.normalize?.():n.maximize?.())},t=r=>{const s=r.detail,n=typeof s=="string"?document.getElementById(s):null;n?hc(n):_p()};return document.addEventListener("dblclick",e,!0),document.addEventListener("jspanelstatuschange",t),document.addEventListener("jspanelloaded",t),()=>{document.removeEventListener("dblclick",e,!0),document.removeEventListener("jspanelstatuschange",t),document.removeEventListener("jspanelloaded",t)}}const Ap=200,Pp=100;function Ip(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<Ap||e.h<Pp?null:{...e}}var Rp=Object.defineProperty,Dp=Object.getOwnPropertyDescriptor,Ur=(e,t,r,s)=>{for(var n=s>1?void 0:s?Dp(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&Rp(t,r,n),n};let Xn=class extends Ne{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return A`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return A`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};Xn.styles=[Qt,qe`
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
    `];Ur([Mt({type:String})],Xn.prototype,"tableId",2);Ur([q()],Xn.prototype,"query",2);Ur([q()],Xn.prototype,"open",2);Ur([fn("input")],Xn.prototype,"inputEl",2);Xn=Ur([tt("panel-search")],Xn);var Op=Object.defineProperty,jp=Object.getOwnPropertyDescriptor,hr=(e,t,r,s)=>{for(var n=s>1?void 0:s?jp(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&Op(t,r,n),n};let Dn=class extends Ne{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const r=t?.currentTarget??void 0,s=await be();try{await Promise.resolve(e.onClick(s.api,{tableId:this.tableId,anchor:r}))}catch(n){console.error(`[table-button:${e.id}]`,n)}}}async connectedCallback(){super.connectedCallback();const e=await be();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(r=>r.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await be();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await be(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const s of t.columns)r[s.field]=zp(s);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}render(){return A`
      <button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
        <span class="mi sm">add</span>
      </button>
      <button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>A`<button
              class=${e.danger?"danger":""}
              title=${e.tooltip??e.label}
              aria-label=${e.label}
              @click=${t=>this.runTableButton(e,t)}
            >
              ${e.icon?e.icon.trimStart().startsWith("<svg")?A`<span class="icon-svg">${no(e.icon)}</span>`:A`<span class="mi sm">${e.icon}</span>`:A`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Dn.styles=[Qt,qe`
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
    `];hr([Mt({type:String})],Dn.prototype,"tableId",2);hr([Mt({type:Boolean})],Dn.prototype,"active",2);hr([q()],Dn.prototype,"rowCount",2);hr([q()],Dn.prototype,"tableButtons",2);hr([q()],Dn.prototype,"table",2);Dn=hr([tt("panel-footer")],Dn);function zp(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function Si(e){return e.title?.trim()?e.title.trim():e.name}function Lp(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Fp(e){const t=document.querySelector("app-shell")?.shadowRoot,r=t?.querySelector("header"),s=t?.querySelector("footer");r&&(e.style.top=`${r.offsetHeight}px`),s&&(e.style.bottom=`${s.offsetHeight}px`)}const yn=new Map,fc=new Set;let Fa=!1,go=null;function pc(){return go}function Mp(e){const t=yn.get(e);return t?(t.status==="minimized"&&t.normalize?.(),t.front?.(),!0):(Bp(e),!0)}async function Bp(e){const t=await be(),r=await t.store.tables.findOne(e);r?.windowGeometry?.closed&&await t.store.tables.patch(e,{windowGeometry:{...r.windowGeometry,closed:!1},updatedAt:Date.now()})}async function Np(e){const t=await be();await Yp(e,t)}async function Up(){if(Fa)return;Fa=!0;const e=await be(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");if(t&&r){go=$p(t,r);const n=()=>Fp(t);n(),window.addEventListener("resize",n);const o=document.querySelector("app-shell")?.shadowRoot,a=o?.querySelector("header"),c=o?.querySelector("footer");if(typeof ResizeObserver<"u"&&(a||c)){const u=new ResizeObserver(n);a&&u.observe(a),c&&u.observe(c)}Cp(r)}Tp();const s=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);s.sort(_i);for(const n of s)n.windowGeometry?.closed||Ma(n,e);e.store.tables.subscribe(n=>{const o=n.filter(u=>u.workspaceId===e.workspaceId),a=new Map(o.map(u=>[u.id,u]));for(const[u,p]of yn){const x=a.get(u);if(!x||x.windowGeometry?.closed){yn.delete(u),fc.add(u);try{p.status!=="closed"&&p.close()}catch{}}}const c=o.filter(u=>!yn.has(u.id)&&!u.windowGeometry?.closed).sort(_i);for(const u of c)Ma(u,e)}),document.addEventListener("easydb:restack-windows",()=>{let n=0;const o=async()=>{const a=(await e.store.tables.find()).filter(c=>c.workspaceId===e.workspaceId&&!c.windowGeometry?.minimized).sort(_i);if(n<12&&!a.every(c=>yn.has(c.id))){n++,setTimeout(()=>void o(),80);return}for(const c of a)try{yn.get(c.id)?.front?.()}catch{}};o()})}function _i(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const Hp=720,qp=360;function Ma(e,t){const r=`panel-${mc(e.id)}`,s=Lp(),n=Ip(e.windowGeometry),o=n?.minimized===!0,a=()=>{const S=document.createElement("data-table");return S.tableId=e.id,S.style.height="100%",S},c=o?document.createElement("div"):a();let u=o?null:c,p=Si(e),x=-1,y=-1;const $=()=>{typeof V.setHeaderTitle=="function"&&V.setHeaderTitle(p+zl(x,y))},B=S=>{const b=S.detail;b.key===e.id&&(x=b.count,y=b.total,$())};document.addEventListener(Es,B);const F=()=>{G.active=!1,u?.remove(),u=null},L=()=>{if(u)return;const S=document.getElementById(r)?.querySelector(".jsPanel-content");if(!S)return;S.replaceChildren();const b=a();S.appendChild(b),u=b,G.active=!0},H=document.createElement("panel-search");H.tableId=e.id;const G=document.createElement("panel-footer");G.tableId=e.id,G.active=!o;const ue=uc(r,()=>go),ie=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:Kp(),oe=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:`${Hp} ${qp}`},V=z.create({id:r,container:s,headerTitle:p,footerToolbar:G,theme:"primary",content:c,...oe,position:ie,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>Ti(e.id,t)},resizeit:{containment:!1,stop:()=>Ti(e.id,t)},onfronted:()=>Gp(e.id,t),onclosed:async()=>{if(yn.delete(e.id),fc.delete(e.id))return;const S=await t.store.tables.findOne(e.id);if(!S)return;const b=S.windowGeometry??{x:60,y:60,w:720,h:360,z:1,minimized:!1,maximized:!1};await t.store.tables.patch(e.id,{windowGeometry:{...b,closed:!0},updatedAt:Date.now()})},onstatuschange:S=>{S.status==="minimized"?F():(S.status==="normalized"||S.status==="maximized")&&L(),S.status==="maximized"?ue.enter():ue.exit(),Ti(e.id,t)}});yn.set(e.id,V);const J=document.getElementById(r),he=J?.querySelector(".jsPanel-controlbar");he&&he.prepend(H);const $e=J?.querySelector(".jsPanel-titlebar");$e&&($e.tabIndex=-1,$e.style.outline="none",$e.addEventListener("pointerdown",()=>$e.focus()));let Te=null;const Ie=document.createElement("button");Ie.type="button",Ie.title="Table info",Ie.setAttribute("aria-label","Table info"),Ie.className="eda-info-btn",Ie.textContent="ⓘ",Ie.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",Ie.addEventListener("click",S=>{S.stopPropagation(),Te&&mp(p,Te.info??{},{source:Te.source,origin:Te.origin})}),he?.prepend(Ie);const g=S=>{Te=S??null;const b=!!(S?.info||S?.source||S?.origin);Ie.style.display=b?"inline-flex":"none"};g(e),n?.maximized&&typeof V.maximize=="function"?queueMicrotask(()=>V.maximize?.()):n?.minimized&&typeof V.minimize=="function"&&queueMicrotask(()=>V.minimize?.()),t.store.tables.subscribe(S=>{const b=S.find(k=>k.id===e.id);b&&(g(b),Si(b)!==p&&(p=Si(b),$()))});const v=V.close.bind(V);V.close=()=>(document.removeEventListener(Es,B),v())}let Wp=0;function Kp(){const e=Wp++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function Ti(e,t){const r=document.getElementById(`panel-${mc(e)}`);if(!r)return;const s=yn.get(e)?.status??"normalized";try{const o=(await t.store.tables.findOne(e))?.windowGeometry,a=s==="minimized",c=s==="maximized";let u=r.offsetLeft,p=r.offsetTop,x=r.offsetWidth,y=r.offsetHeight;(a||c)&&o&&(u=o.x,p=o.y,x=o.w,y=o.h),u<=-9e3&&(u=o?.x??40);const $={x:u,y:p,w:x,h:y,z:o?.z??0,minimized:a,maximized:c};await t.store.tables.patch(e,{windowGeometry:$,updatedAt:Date.now()})}catch{}}let Ai=0;function Vp(){return Ai=Math.max(Date.now(),Ai+1),Ai}async function Gp(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const s=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...s,z:Vp()},updatedAt:Date.now()})}catch{}}async function Yp(e,t){if(!(await t.store.tables.findOne(e))?.source){const s=t.store.rows(e),n=await s.find();await s.bulkRemove(n.map(o=>o.id))}await t.store.tables.remove(e)}function mc(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}const Xp={id:"delete-table",name:"Delete Table",type:"ui",version:"0.1.0",description:"Adds a trash button to each table window that permanently deletes the table and its rows (with confirmation).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/delete-table.ts"};function Qp(e){e.ui.registerTableButton({id:"delete-table:delete",label:"Delete",icon:"delete",tooltip:"Delete this table permanently",onClick:async(t,r)=>{const s=await t.store.tables.findOne(r.tableId);!s||!await t.ui.dialogs.confirm(s.source?`Delete the live table "${s.name}"? Its data stays on the server — only the local connection is removed.`:`Permanently delete table "${s.name}" and all its rows? This can't be undone.`,"Delete table")||(await Np(r.tableId),t.ui.dialogs.toast(`Deleted "${s.name}".`,{kind:"success",title:"Delete table"}))}})}const Jp=Object.freeze(Object.defineProperty({__proto__:null,init:Qp,meta:Xp},Symbol.toStringTag,{value:"Module"}));var Zp=Object.defineProperty,em=Object.getOwnPropertyDescriptor,Us=(e,t,r,s)=>{for(var n=s>1?void 0:s?em(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&Zp(t,r,n),n};let ps=null;function tm(){return ps||(ps=document.createElement("top-progress"),document.body.appendChild(ps)),ps}let On=class extends Ne{constructor(){super(...arguments),this.visible=!1,this.frac=null,this.label="",this.active=new Set}static begin(e=""){return tm().begin(e)}begin(e){const t=Symbol("progress");return this.active.add(t),this.label=e,this.frac=null,this.visible=!0,{fraction:r=>{this.active.has(t)&&(this.frac=r)},done:()=>{this.active.delete(t),this.active.size===0&&(this.visible=!1,this.frac=null,this.label="")}}}render(){if(!this.visible)return A``;const e=this.frac!=null;return A`<div
      class="track"
      role="progressbar"
      aria-label=${this.label||"Loading"}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${e?Math.round(this.frac*100):""}
    >
      ${e?A`<div
            class="bar determinate"
            style="width:${Math.round(this.frac*100)}%"
          ></div>`:A`<div class="bar indet"></div>`}
    </div>`}};On.styles=qe`
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
  `;Us([q()],On.prototype,"visible",2);Us([q()],On.prototype,"frac",2);Us([q()],On.prototype,"label",2);On=Us([tt("top-progress")],On);const gc=Object.freeze(Object.defineProperty({__proto__:null,get TopProgress(){return On}},Symbol.toStringTag,{value:"Module"}));var nm=Object.defineProperty,rm=Object.getOwnPropertyDescriptor,bc=(e,t,r,s)=>{for(var n=s>1?void 0:s?rm(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&nm(t,r,n),n};function Ba(e){return(vn.instance??sm()).open(e)}function sm(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let vn=class extends Ne{constructor(){super(...arguments),this.rows=[],this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((r,s)=>{const n=this.rows[s],o=n.field.trim(),a=n.label.trim()||o;return{...r,field:o,label:a,hidden:n.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),vn.instance=this}disconnectedCallback(){super.disconnectedCallback(),vn.instance===this&&(vn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}open(e){return this.source=e,this.rows=e.map(t=>({field:t.field,label:t.label,hidden:!!t.hidden})),new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((r,s)=>{const n=r.field.trim().toLowerCase();if(n===""){e.add(s);return}(t.get(n)??t.set(n,[]).get(n)).push(s)});for(const r of t.values())if(r.length>1)for(const s of r)e.add(s);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,r){this.rows=this.rows.map((s,n)=>n===e?{...s,[t]:r}:s)}setHidden(e,t){this.rows=this.rows.map((r,s)=>s===e?{...r,hidden:t}:r)}render(){const e=this.invalidIndices(),t=e.size;return A`
      <dialog @cancel=${this.onCancel} @keydown=${Yt}>
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
              ${this.rows.map((r,s)=>A`
                  <input
                    class=${e.has(s)?"invalid":""}
                    .value=${r.field}
                    aria-label=${`Column ${s+1} name`}
                    @input=${n=>this.updateRow(s,"field",n.target.value)}
                  />
                  <input
                    .value=${r.label}
                    aria-label=${`Column ${s+1} label`}
                    @input=${n=>this.updateRow(s,"label",n.target.value)}
                  />
                  <div class="hidecell">
                    <input
                      type="checkbox"
                      .checked=${r.hidden}
                      aria-label=${`Hide column ${s+1}`}
                      @change=${n=>this.setHidden(s,n.target.checked)}
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
    `}};vn.instance=null;vn.styles=[Gt,qe`
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
    `];bc([q()],vn.prototype,"rows",2);vn=bc([tt("column-names-dialog")],vn);var im=Object.defineProperty,om=Object.getOwnPropertyDescriptor,Jt=(e,t,r,s)=>{for(var n=s>1?void 0:s?om(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&im(t,r,n),n};const am="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",lm="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",cm='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',Na=[{label:"Northwind — sample database (JSON dump)",url:am,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:lm,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],dm={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function um(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:cm,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>mm(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:r})=>pm(t,r)})}const Ua=50*1024*1024;function Ha(e){try{return new URL(e).host}catch{return e}}async function hm(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}async function fm(e,t,r={}){const s=Vl(t),n=r.slowMs??2e3;let o=setTimeout(()=>{o=void 0,r.onSlow?.()},n);const a=()=>{o!==void 0&&(clearTimeout(o),o=void 0)};try{let c;try{c=await e.backend.fetch(s)}catch(p){throw new Error(`Could not reach ${Ha(s)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${p.message}]`)}if(!c.ok){const p=await hm(c);throw new Error(`HTTP ${c.status} ${c.statusText||""}`.trim()+(p?` — ${p}`:""))}const u=Number(c.headers.get("content-length"));if(Number.isFinite(u)&&u>Ua)throw new Error(`Response is ${(u/(1024*1024)).toFixed(1)} MB, over the ${Ua/(1024*1024)} MB browser import limit. Import a smaller extract, or use a server/Datasette connection for large datasets.`);try{return await Gl(c,r.onProgress)}catch(p){throw new Error(`Failed reading the response body from ${Ha(s)}: ${p.message}`)}}finally{a()}}async function As(e,t,r){const s={handle:null};try{return await fm(e,t,{onSlow:()=>{s.handle=On.begin(r)},onProgress:n=>s.handle?.fraction(n)})}finally{s.handle?.done()}}async function pm(e,t){const r=await e.store.tables.findOne(t),s=r?.origin;if(s?.url)try{const n=await As(e,s.url,`Reading ${r?.name??"data"}…`);let o;if(s.type==="csv")o=Qn(n).rows;else{const u=zr(JSON.parse(n),r.name),p=u.find(x=>x.name===r.name)??(u.length===1?u[0]:void 0);if(!p)throw new Error(`"${r.name}" is no longer in the dump at ${s.url}`);o=p.rows}const a=e.store.rows(t),c=await a.find();await a.bulkRemove(c.map(u=>u.id)),await a.bulkInsert(o.map(u=>({id:yc(),tableId:t,data:u,updatedAt:Date.now()}))),e.ui.dialogs.toast(`Refreshed "${r.name}" (${o.length} rows).`,{kind:"success",title:"Refresh"})}catch(n){e.ui.dialogs.toast(`Couldn't refresh "${r?.name??t}": ${n.message}`,{kind:"error",title:"Refresh"})}}function yc(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function mm(e){const r=await(dt.instance??vm()).open({async listDatabases(y){const $=hn(y);return oo(B=>e.backend.fetch(B),$.base)}});if(!r)return;const{url:s,file:n,kind:o,dbChosen:a,editColumns:c,maxRows:u,mode:p}=r,x=n?.name??s;try{if(p==="reference"&&!n){o==="datasette"?await wm(e,s):await wc(e,s,o);return}if(n){if(o==="csv"){const y=u!=null?await $l(n,u):await n.text();await $s(e,y,n.name,{editColumns:c?Ba:void 0,maxRows:u})}else{const y=await n.text();await ks(e,y,n.name,{maxRows:u})}e.ui.dialogs.toast(`Imported ${n.name}.`,{kind:"success",title:"Import"});return}if(o==="datasette")await fo(e,s,{skipTablePicker:a});else if(o==="csv"){const y=await As(e,s,`Reading ${Wn(s)}…`);await $s(e,y,Wn(s),{editColumns:c?Ba:void 0,maxRows:u,origin:{type:"csv",url:s}}),e.ui.dialogs.toast(`Imported ${Wn(s)}.`,{kind:"success",title:"Import"})}else{const y=await As(e,s,`Reading ${Wn(s)}…`);await ks(e,y,Wn(s),{originUrl:s,maxRows:u}),e.ui.dialogs.toast(`Imported ${Wn(s)}.`,{kind:"success",title:"Import"})}}catch(y){e.ui.dialogs.toast(`Could not import ${x}: ${y.message}`,{kind:"error",title:"Import"})}}function gm(e){const t=JSON.parse(e),r=s=>Array.isArray(s)&&s.every(n=>n!=null&&typeof n=="object"&&!Array.isArray(n));if(r(t))return t;if(t&&typeof t=="object"){const s=t;for(const n of["rows","records","data"])if(r(s[n]))return s[n];for(const n of Object.values(s))if(r(n))return n}return[]}function bm(e){const t=gm(e).slice(0,50),r=n=>typeof n=="number"?"number":typeof n=="boolean"?"boolean":"string",s=new Map;for(const n of t)for(const[o,a]of Object.entries(n))!s.has(o)&&a!=null?s.set(o,r(a)):s.has(o)||s.set(o,"string");return[...s.entries()].map(([n,o])=>({field:n,label:n,type:o}))}function ym(e,t,r){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(r)}.json?_size=max`}async function wm(e,t){const r=hn(t),s=c=>e.backend.fetch(c),n=[];if(r.db&&r.table)n.push({db:r.db,table:r.table});else if(r.db)for(const c of await Ss(s,r.base,r.db))c.hidden||n.push({db:c.db,table:c.table});else for(const c of await oo(s,r.base))for(const u of await Ss(s,r.base,c))u.hidden||n.push({db:u.db,table:u.table});if(n.length===0)throw new Error("No tables found to reference at that URL.");let o=0;const a=[];for(const c of n)try{await wc(e,ym(r.base,c.db,c.table),"json",{nameHint:`${c.db}/${c.table}`,silent:!0}),o++}catch(u){a.push(`${c.table}: ${u.message}`)}e.ui.dialogs.toast(`Referenced ${o} table${o===1?"":"s"}${a.length?` — ${a.length} failed`:""}.`,{kind:a.length?"warning":"success",title:"Reference"})}async function wc(e,t,r,s={}){const n=e.workspaceId();if(!n)throw new Error("No active workspace.");const o=s.nameHint??Wn(t),a=await As(e,t,`Reading ${o}…`),c=r==="csv"?Qn(a).columns:bm(a);if(c.length===0)throw new Error("No columns found in the referenced data.");const u=new Set((await e.store.tables.find()).filter(y=>y.workspaceId===n).map(y=>y.name.toLowerCase()));let p=o;for(let y=2;u.has(p.toLowerCase());y++)p=`${o}-${y}`;const x={id:yc(),workspaceId:n,name:p,code:ic(p),columns:c,view:"table",source:{type:"url",config:{url:t,format:r}},updatedAt:Date.now()};await e.store.tables.insert(x),s.silent||e.ui.dialogs.toast(`Referenced ${p} — live, read-only.`,{kind:"success",title:"Reference"})}function vm(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function xm(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),s=[...t.searchParams.keys()].some(o=>o.startsWith("_")),n=r.includes("datasette")||s;return!s&&/\.(csv|tsv|tab)$/i.test(t.pathname)?"csv":!s&&/\.json$/i.test(t.pathname)?"json":n?"datasette":"json"}catch{return"json"}}function qa(e,t){if(t!=="datasette"||!e)return!1;try{const r=hn(e);return!r.db&&!r.table}catch{return!1}}function Wn(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}function $m(e){return/\.(csv|tsv|tab)$/i.test(e)?"csv":"json"}let dt=class extends Ne{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const r=this.resolvedKind,s=this.maxRows,n=r==="csv"&&this.editColumns,o=this.file?"copy":this.mode;if(this.file){this.finish({url:"",file:this.file,kind:r,editColumns:n,maxRows:s,mode:o});return}const a=r==="datasette"&&!!this.selectedDb&&qa(t,r),c=a?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:c,kind:r,dbChosen:a,editColumns:n,maxRows:s,mode:o})}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?$m(this.file.name):xm(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),dt.instance=this}disconnectedCallback(){super.disconnectedCallback(),dt.instance===this&&(dt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=Na[t];r&&(this.url=r.url,this.kind=r.kind)}onFileChange(e){const r=e.target.files?.[0]??null;this.file=r,r&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!qa(this.url.trim(),this.resolvedKind)?me:A`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?A`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>A`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:A`<option value="">— not loaded —</option>`}
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
      ${this.dbError?A`<p class="hint error">${this.dbError}</p>`:me}
    `}render(){return A`
      <dialog @cancel=${this.onCancel} @keydown=${Yt}>
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
                ${Na.map((e,t)=>A`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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
            ${this.file?A`<p class="hint">
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
            ${this.file?A`<p class="hint">Uploaded files can only be imported as a Copy.</p>`:me}
            ${this.renderDbPicker()}
            ${this.resolvedKind==="csv"?A`<label class="check">
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
            ${this.resolvedKind==="datasette"&&this.maxRows!=null?A`<p class="hint">
                  Row limit applies to CSV/JSON imports; Datasette snapshots use their own
                  10,000-row cap.
                </p>`:me}

            <p class="hint">
              Paste any URL or pick a sample above — a JSON dump, a <code>.csv</code> or <code>.tsv</code> file, or a
              Datasette table/database/instance. For a Datasette instance root, click
              <em>List databases</em> to pick one first. Multi-table sources let you choose which
              tables to import; Datasette tables import a read-only snapshot (capped at 10,000 rows
              each).
            </p>
          </div>
        </form>
      </dialog>
      ${me}
    `}};dt.instance=null;dt.styles=[Gt,qe`
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
    `];Jt([q()],dt.prototype,"url",2);Jt([q()],dt.prototype,"kind",2);Jt([q()],dt.prototype,"presetIdx",2);Jt([q()],dt.prototype,"dbList",2);Jt([q()],dt.prototype,"dbLoading",2);Jt([q()],dt.prototype,"dbError",2);Jt([q()],dt.prototype,"selectedDb",2);Jt([q()],dt.prototype,"editColumns",2);Jt([q()],dt.prototype,"file",2);Jt([q()],dt.prototype,"maxRowsInput",2);Jt([q()],dt.prototype,"mode",2);dt=Jt([tt("import-dialog")],dt);const km=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return dt},init:um,meta:dm},Symbol.toStringTag,{value:"Module"})),Cm={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},Em=6e4;let Wa=null,qi=!1;const Pi=new Map;function Sm(e){Wa===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(Wa=setInterval(()=>{vc(e)},Em)))}async function vc(e){if(qi)return;const t=e.workspaceId();if(!t)return;const r=await nc(e);if(r)try{await _m(e,r,t)}catch(s){console.warn("[auto-sync]",s)}}async function _m(e,t,r){const s=await Ms(e),n=await rc(e,r),o=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(o.status===404){await Ka(e,t,r,s,null);return}if(!o.ok)return;const a=Bs(o.headers.get("ETag")),c=await o.text();if(Ta(s)===Ta(c)){a&&a!==n&&await Yn(e,r,a);return}if(a&&a===n){await Ka(e,t,r,s,n);return}if(!(a&&Pi.get(r)===a)){qi=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const p=JSON.parse(c),x=await sc(e,r,p);a&&await Yn(e,r,a),Pi.delete(r),e.ui.dialogs.toast(`Pulled ${x} table${x===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else a&&Pi.set(r,a)}finally{qi=!1}}}async function Ka(e,t,r,s,n){const o={"Content-Type":"application/json"};n&&(o["If-Match"]=`"${n}"`);const a=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:o,body:s});if(a.ok){const c=Bs(a.headers.get("ETag"));c&&await Yn(e,r,c);return}if(a.status===412){const c=await a.json().catch(()=>({}));c.currentEtag&&await Yn(e,r,c.currentEtag)}}const xc=Object.freeze(Object.defineProperty({__proto__:null,load:Sm,meta:Cm,tick:vc},Symbol.toStringTag,{value:"Module"})),$c=/\$([A-Za-z_][A-Za-z0-9_]*)/g;function Va(...e){const t=new Set;for(const r of e)if(r)for(const s of r.matchAll($c))t.add(s[1]);return[...t]}function Tm(e,t,r){return e.replace($c,(s,n)=>{const o=r[n];if(!o)return"";const a=t.data[o];return a==null?"":String(a)})}function Ga(e){return e==null||e===""}function Am(e,t){const r=Object.entries(t).filter(([,s])=>s!=null&&String(s).trim()!=="");return r.length===0?e:e.filter(s=>r.every(([n,o])=>Fi(s.data[n],o)))}function Pm(e,t,r=!0){if(!t)return e;const s=r?1:-1;return[...e].sort((n,o)=>{const a=n.data[t],c=o.data[t],u=Ga(a),p=Ga(c);if(u||p)return u===p?0:u?1:-1;const x=Number(a),y=Number(c);return!Number.isNaN(x)&&!Number.isNaN(y)?(x-y)*s:String(a).localeCompare(String(c),void 0,{numeric:!0,sensitivity:"base"})*s})}function Im(e,t){return Pm(Am(e,t.filters??{}),t.sortColumn,t.sortAsc??!0)}function Rm(e){return!!e&&e.trim().length>0}var Dm=Object.defineProperty,Om=Object.getOwnPropertyDescriptor,fr=(e,t,r,s)=>{for(var n=s>1?void 0:s?Om(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&Dm(t,r,n),n};function Wi(e,t){(Lt.instance??jm()).open(e,t)}function jm(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function Ya(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let Lt=class extends Ne{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),Lt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Lt.instance===this&&(Lt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const r=this.templates.find(s=>s.id===t.editTemplateId);r&&this.editTemplate(r)}else if(t?.editInstanceId){const r=this.instances.find(s=>s.id===t.editInstanceId);r&&await this.editInstance(r)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await be(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(r=>r.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((r,s)=>r.name.localeCompare(s.name))}async openInstance(e){await(await be()).store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()}),this.close()}async editInstance(e){const r=await(await be()).store.viewTemplates.findOne(e.templateId),s=r?Va(r.headerHtml,r.rowHtml,r.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:r?.name??"template",name:e.name,tokens:s,mapping:{...e.mapping},limit:e.limit??0,readonly:e.readonly??!1},this.mode="instance"}async deleteInstance(e){await(await be()).store.viewInstances.remove(e),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async deleteTemplate(e){const t=await be();await t.api.ui.dialogs.confirm(`Delete the template "${e.name}"? Views already created from it keep working.`,"Delete template")&&(await t.store.viewTemplates.remove(e.id),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh())}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await be();if(e.id){const r=this.templates.find(s=>s.id===e.id)?.builtin;await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,...r?{builtin:!1}:{},updatedAt:Date.now()})}else await t.store.viewTemplates.insert({id:Ya(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()});document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=Va(e.headerHtml,e.rowHtml,e.footerHtml),r={};for(const s of t)r[s]=this.autoMap(s);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:r,limit:0,readonly:!1},this.mode="instance"}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),r=this.columns.find(c=>c.field.toLowerCase()===t||(c.label??"").toLowerCase()===t);if(r)return r.field;const s=this.table?.labelColumn;if(s&&(t==="title"||t==="name"||t==="label"))return s;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(c=>c.type==="date"||c.type==="datetime");const o=["url","link","href","website","homepage","uri","site","web"];if(o.includes(t)){const c=this.firstColumn(u=>u.renderer==="link");return c||this.firstColumn(u=>{const p=u.field.toLowerCase(),x=(u.label??"").toLowerCase();return o.some(y=>p.includes(y)||x.includes(y))})}const a=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(a.includes(t)){const c=this.firstColumn(y=>{if(y.type!=="string")return!1;const $=y.field.toLowerCase(),B=(y.label??"").toLowerCase();return a.some(F=>$.includes(F)||B.includes(F))});if(c)return c;const u=this.columns.filter(y=>y.type==="string"),p=u[0];if(!p)return"";let x=p;for(const y of u)(y.max??0)>(x.max??0)&&(x=y);return x.field}return""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await be();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},limit:e.limit>0?e.limit:void 0,readonly:e.readonly,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const r=this.columns.filter(n=>!n.hidden).map(n=>n.field),s={id:Ya(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:r,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{},...e.readonly?{readonly:!0}:{}};await t.store.viewInstances.insert(s),await this.openInstance(s.id)}renderList(){return A`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>A`<li>
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
          ${this.templates.map(e=>A`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?A`<span class="badge">built-in</span>`:me}
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
    `}renderTemplate(){const e=this.tDraft,t=r=>s=>{this.tDraft={...e,[r]:s.target.value}};return A`
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
    `}renderInstance(){const e=this.iDraft;return A`
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
        ${e.tokens.length===0?A`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>A`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${r=>this.iDraft={...e,mapping:{...e.mapping,[t]:r.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(r=>A`<option value=${r.field} ?selected=${e.mapping[t]===r.field}>
                          ${r.label||r.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">
        ${e.id?A`Editing name and column mapping. The snapshotted sort, filters and visible columns
            are kept.`:A`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?A`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="submit" class="primary">Save</button>`:this.mode==="instance"?A`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="submit" class="primary">
                ${this.iDraft?.id?"Save":"Create view"}
              </button>`:A`<button type="submit" class="ghost">Close</button>`;return A`
      <dialog @cancel=${this.close} @keydown=${Yt}>
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
    `}};Lt.instance=null;Lt.styles=[Gt,qe`
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
    `];fr([q()],Lt.prototype,"mode",2);fr([q()],Lt.prototype,"instances",2);fr([q()],Lt.prototype,"templates",2);fr([q()],Lt.prototype,"tDraft",2);fr([q()],Lt.prototype,"iDraft",2);Lt=fr([tt("views-dialog")],Lt);const zm={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},Lm="grid_view",Xa="RSS Feed",Ki='<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',Vi=['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>',"</div>"].join(""),Gi="</div>";function Fm(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:Lm,tooltip:"Views — display this table through a template",onClick:(t,{tableId:r})=>Wi(r)})}async function Mm(e){await Nm(e)}function Bm(){let e=5381;const t=`${Ki}\0${Vi}\0${Gi}`;for(let r=0;r<t.length;r++)e=(e<<5)+e+t.charCodeAt(r)|0;return(e>>>0).toString(36)}async function Nm(e){const t=e.workspaceId();if(!t)return;const r=`views:seeded:rss:${t}`,s=`views:sig:rss:${t}`,n=Bm(),o=(await e.store.viewTemplates.find({workspaceId:t})).find(c=>c.builtin&&c.name===Xa);if(o){(await e.store.settings.findOne(s))?.value!==n&&(await e.store.viewTemplates.patch(o.id,{headerHtml:Ki,rowHtml:Vi,footerHtml:Gi,updatedAt:Date.now()}),await e.store.settings.upsert({key:s,value:n})),await e.store.settings.upsert({key:r,value:!0});return}(await e.store.settings.findOne(r))?.value||(await e.store.viewTemplates.insert({id:Um(),workspaceId:t,name:Xa,headerHtml:Ki,rowHtml:Vi,footerHtml:Gi,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({key:r,value:!0}),await e.store.settings.upsert({key:s,value:n}))}function Um(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Hm=Object.freeze(Object.defineProperty({__proto__:null,init:Fm,load:Mm,meta:zm},Symbol.toStringTag,{value:"Module"})),qm={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function Wm(e){e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,r)=>{const n=Array.from(t.dataTransfer?.files??[]).find(c=>c.name.toLowerCase()==="secrets.txt");if(!n)return!1;const o=await n.text(),a=Object.keys(js(o)).length;return Os().trim().length>0&&!await r.ui.dialogs.confirm(`Replace your current secrets with ${a} secret${a===1?"":"s"} from "${n.name}"?`,"Import secrets")||(yl(o),r.ui.dialogs.toast(`Imported ${a} secret${a===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const Km=Object.freeze(Object.defineProperty({__proto__:null,init:Wm,meta:qm},Symbol.toStringTag,{value:"Module"})),Vm=[Km,Df,wu,Uu,Yh,ef,Cu,uf,lf,Cf,Pf,Uf,Kf,Xf,tp,ip,hp,Jp,km,xc,Hm];function Gm(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const kc=Vm.map(e=>{const t=Gm(e);return{id:t.id,meta:t,module:e}}),Ym=kc;function Yi(e){return`builtin:${e}`}async function Xm(e){const t=[];for(const r of kc)if(!await Qm(e,r)){t.push(r);try{await r.module.init?.(e)}catch(s){e.events.emit("plugin:error",{url:r.id,phase:"init",error:s})}}return async()=>{for(const r of t)try{await r.module.load?.(e)}catch(s){e.events.emit("plugin:error",{url:r.id,phase:"load",error:s})}}}async function Qm(e,t){return t.meta.fixed?!1:(await e.store.plugins.findOne(Yi(t.id)))?.enabled===!1}function pr(){const e=z.getPanels;return typeof e!="function"?[]:Array.from(e.call(z)??[])}function Jm(){for(const e of pr())e.close?.()}function Zm(){for(const e of pr())e.minimize?.()}function eg(){for(const e of pr())e.normalize?.()}function tg(){for(const e of pr())e.maximize?.()}function Cc(){const e=document.getElementById("easydb-panels"),t=e?.clientWidth??window.innerWidth,r=e?.clientHeight??window.innerHeight,s=pc()?.snapshot(),n=s?.scale&&s.scale>0?s.scale:1,o=s?.x??0,a=s?.y??0;return{x:-o/n,y:-a/n,w:t/n,h:r/n}}function Ec(e,t,r,s,n){e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(r)}px`,e.style.width=`${Math.round(s)}px`,e.style.height=`${Math.round(n)}px`}function ng(){const e=pr().reverse();if(e.length===0)return;const t=Cc(),r=32,s=Math.min(680,Math.max(320,t.w*.6)),n=Math.min(480,Math.max(240,t.h*.6));e.forEach((o,a)=>{o.normalize?.(),Ec(o,t.x+24+a*r,t.y+24+a*r,s,n)})}function rg(){const e=pr().reverse(),t=e.length;if(t===0)return;const r=Cc(),s=Math.ceil(Math.sqrt(t)),n=Math.ceil(t/s),o=8,a=(r.w-o*(s+1))/s,c=(r.h-o*(n+1))/n;e.forEach((u,p)=>{u.normalize?.();const x=p%s,y=Math.floor(p/s);Ec(u,r.x+o+x*(a+o),r.y+o+y*(c+o),a,c)})}function sg(e){const t=[{id:"windows:minimize-all",title:"Minimize all windows",icon:"remove",run:Zm},{id:"windows:restore-all",title:"Restore all windows",icon:"crop_square",run:eg},{id:"windows:maximize-all",title:"Maximize all windows",icon:"fullscreen",run:tg},{id:"windows:cascade",title:"Cascade windows",icon:"view_agenda",run:ng},{id:"windows:tile",title:"Tile windows",icon:"grid_view",run:rg},{id:"windows:close-all",title:"Close all windows",icon:"close",run:Jm}];for(const n of t)e.ui.registerCommand({id:n.id,title:n.title,group:"Windows",icon:n.icon,run:n.run});const r="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md",s="https://github.com/cawoodm/easydbaccess/tree/main/docs";e.ui.registerCommand({id:"app:search",title:"Search all tables",group:"App",icon:"search",keywords:["find","global search","filter"],run:()=>{document.dispatchEvent(new CustomEvent("easydb:focus-search"))}}),e.ui.registerCommand({id:"app:plugins",title:"Plugins",group:"App",icon:"extension",keywords:["plugin manager","install","extensions"],run:n=>n.ui.openPluginManager()}),e.ui.registerCommand({id:"app:changelog",title:"Changelog",group:"App",icon:"history",keywords:["releases","version","whats new"],run:()=>{window.open(r,"_blank","noopener")}}),e.ui.registerCommand({id:"app:docs",title:"Documentation",group:"App",icon:"menu_book",keywords:["docs","help","guide","manual"],run:()=>{window.open(s,"_blank","noopener")}})}async function ig(e){const t=e.workspaceId();if(!t)return async()=>{};const s=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const o of s)try{const a=await e.store.plugins.findOne(o);if(a&&a.enabled===!1)continue;let c=a?.cachedBody??"";if(c)og(e,o,c);else{try{c=await Sc(o)}catch(x){await e.store.plugins.upsert({url:o,enabled:a?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${x.message}`}),e.events.emit("plugin:error",{url:o,phase:"fetch",error:x});continue}await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),cachedBody:c})}const u=new Blob([c],{type:"text/javascript"}),p=URL.createObjectURL(u);try{const x=await import(p);await x.init?.(e),n.push({url:o,mod:x})}finally{setTimeout(()=>URL.revokeObjectURL(p),5e3)}}catch(a){await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),lastError:`init: ${a.message}`}),e.events.emit("plugin:error",{url:o,phase:"init",error:a})}return async()=>{for(const{url:o,mod:a}of n)try{await a.load?.(e)}catch(c){await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),lastError:`load: ${c.message}`}),e.events.emit("plugin:error",{url:o,phase:"load",error:c})}}}async function Sc(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function og(e,t,r){return(async()=>{try{const s=await Sc(t);if(s===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:s})}catch{}})()}let Ii=null;function be(){return Ii||(Ii=ag()),Ii}async function ag(){const e=await zd(),t=Md(e),r=Nd(),s=Gd(),n=new Map;t.tables.subscribe(L=>{n.clear();for(const H of L)n.set(H.id,H)});const o={...t.tables,insert:L=>(n.set(L.id,L),t.tables.insert(L)),upsert:L=>(n.set(L.id,L),t.tables.upsert(L))};let a=null;const c={get backend(){if(!a)throw new Error("[host] row-source ctx used before app init completed");return a.backend},events:r,settings:t.settings,workspaceId:()=>y},u=Bd({base:{...t,tables:o},providers:s.rowSources,tableById:L=>n.get(L),ctx:c}),p=lg(),x=await u.workspaces.find();let y;if(p){const L=ug(p),H=x.find(G=>G.id===L||G.name===p);H?y=H.id:y=(await u.workspaces.insert({id:L,name:p,createdAt:Date.now(),pluginUrls:[]})).id}else{const L=cg(),H=L?x.find(G=>G.id===L):void 0;H?y=H.id:x.length>0?y=x[0].id:y=(await u.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}dg(y);const $=Zd({store:u,events:r,registries:s,workspaceId:()=>y});a=$,sg($),r.on("import:after",({source:L,tableId:H,rowCount:G})=>{L!=="datasette"&&$.store.tables.findOne(H).then(ue=>{$.ui.dialogs.toast(`Imported ${G} row${G===1?"":"s"} into "${ue?.name??H}".`,{kind:"success",title:L.toUpperCase()+" import"})})}),r.on("plugin:error",({url:L,phase:H,error:G})=>{$.ui.dialogs.toast(`[${H}] ${G?.message??String(G)}`,{kind:"error",title:`Plugin: ${L}`})});const B=await Xm($),F=await ig($);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:y}),await B(),await F()}),{store:u,events:r,workspaceId:y,registries:s,api:$}}function lg(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const _c="eda:lastWorkspaceId";function cg(){try{return globalThis.localStorage?.getItem(_c)??null}catch{return null}}function dg(e){try{globalThis.localStorage?.setItem(_c,e)}catch{}}function ug(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var hg=Object.defineProperty,fg=Object.getOwnPropertyDescriptor,Hs=(e,t,r,s)=>{for(var n=s>1?void 0:s?fg(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&hg(t,r,n),n};let cr=class extends Ne{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=Qn(this.text)}catch(a){this.errorMsg=`Couldn't parse the CSV: ${a.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const s=await be(),n=crypto.randomUUID();await s.store.tables.insert({id:n,workspaceId:s.workspaceId,name:t,code:pg(t),columns:r.columns,view:"table",updatedAt:Date.now()});const o=r.rows.map(a=>({id:crypto.randomUUID(),tableId:n,data:a,updatedAt:Date.now()}));await s.store.rows(n).bulkInsert(o),s.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return A`
      <dialog @cancel=${this.close} @keydown=${Yt}>
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
            ${this.errorMsg?A`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};cr.styles=[Gt,qe`
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
    `];Hs([q()],cr.prototype,"name",2);Hs([q()],cr.prototype,"text",2);Hs([q()],cr.prototype,"errorMsg",2);cr=Hs([tt("csv-paste-dialog")],cr);function pg(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var mg=Object.defineProperty,gg=Object.getOwnPropertyDescriptor,bo=(e,t,r,s)=>{for(var n=s>1?void 0:s?gg(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&mg(t,r,n),n};const bg=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let un=class extends Ne{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),un.instance=this}disconnectedCallback(){super.disconnectedCallback(),un.instance===this&&(un.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:bg,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return A`
      <dialog @cancel=${this.onCancel} @keydown=${Yt}>
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
              Define <code>function render(row) { … }</code>. <code>row</code> is
              the full row object; return an HTML string. Throws or non-string
              returns show a small error chip in the cell.
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
    `}};un.instance=null;un.styles=[Gt,qe`
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
        font: 0.85rem ui-monospace, SFMono-Regular, monospace;
        padding: 0.6rem 0.75rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        min-height: 320px;
        resize: vertical;
        tab-size: 2;
      }
    `];bo([q()],un.prototype,"text",2);bo([q()],un.prototype,"columnLabel",2);un=bo([tt("script-editor-dialog")],un);var yg=Object.defineProperty,wg=Object.getOwnPropertyDescriptor,Bt=(e,t,r,s)=>{for(var n=s>1?void 0:s?wg(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&yg(t,r,n),n};const vg=["string","number","boolean","date","datetime"];let Et=class extends Ne{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const r=await be();if(this.rendererOptions=[...r.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=r.events.on("app:ready",()=>{this.rendererOptions=[...r.registries.cellRenderers.keys()].sort()}),e){const s=await be(),n=await s.store.tables.findOne(e);if(!n)return;this.mode="edit",this.editTableId=e,this.name=n.name,this.tableTitle=n.title??"",this.columns=n.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,origField:a.field}));const o=await s.store.rows(e).find();this.previewRows=o.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const s=[...this.columns],[n]=s.splice(e,1);s.splice(r,0,n),this.columns=s}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const s=r.getBoundingClientRect(),n=e.clientY<s.top+s.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,s=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!s)return;const n=[...this.columns],[o]=n.splice(r,1);let a=t+(r<t?-1:0);s==="after"&&(a+=1),n.splice(a,0,o),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,s)=>s===e?{...r,...t}:r)}async editScript(e){const t=un.instance;if(!t)return;const r=this.columns[e];if(!r)return;const s=await t.open(r.script??"",r.label||r.field);s!==null&&this.patchColumn(e,{script:s.trim()?s:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const r=await be(),s=(await r.store.tables.find()).filter(p=>p.workspaceId===r.workspaceId),n=t.toLowerCase(),o=s.find(p=>p.name.toLowerCase()===n&&p.id!==this.editTableId);if(o){this.errorMsg=`A table named "${o.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const a=new Set;for(const p of this.columns){const x=p.field.trim();if(!x){this.errorMsg="Column field names cannot be empty.";return}if(a.has(x)){this.errorMsg=`Duplicate column field: ${x}`;return}a.add(x)}const c=this.tableTitle.trim(),u=this.columns.map(p=>{const x={field:p.field.trim(),label:p.label.trim()||p.field.trim(),type:p.type};return p.renderer&&(x.renderer=p.renderer),p.script&&(x.script=p.script),p.max!=null&&p.max>0&&(x.max=p.max),p.unique&&(x.unique=!0),p.notnull&&(x.notnull=!0),p.hidden&&(x.hidden=!0),x});if(this.mode==="edit"&&this.editTableId){const p=this.editTableId,x=await r.store.tables.findOne(p),y=new Map((x?.columns??[]).map(V=>[V.field,V])),$=u.filter(V=>{const J=y.get(V.field);return V.unique&&!J?.unique||V.notnull&&!J?.notnull||V.max&&V.max>0&&V.max!==J?.max});if($.length>0){const V=await r.store.rows(p).find(),J=kg($,V);if(J.length>0){this.errorMsg=`Cannot save: ${J.length} existing ${J.length===1?"row violates":"rows violate"} the new constraints.
${J.slice(0,5).join(`
`)}${J.length>5?`
…and ${J.length-5} more.`:""}`;return}}const B=new Set(this.columns.map(V=>V.origField).filter(V=>!!V)),F=new Set(u.map(V=>V.field)),L=(x?.columns??[]).map(V=>V.field).filter(V=>!B.has(V)),H=x?.deletedColumns??[],G=[...new Set([...H,...L])].filter(V=>!F.has(V)),ue={name:t,title:c,columns:u,updatedAt:Date.now()};(G.length>0||H.length>0)&&(ue.deletedColumns=G);const ie=x?.name;await r.store.tables.patch(p,ue);const oe=L.filter(V=>!F.has(V));if(oe.length>0){const V=await r.store.rows(p).find();for(const J of V){let he=!1;const $e={...J.data};for(const Te of oe)Te in $e&&(delete $e[Te],he=!0);he&&await r.store.rows(p).patch(J.id,{data:$e,updatedAt:Date.now()})}}if(ie!==void 0&&ie!==t){const V=(await r.store.viewInstances.find()).filter(J=>J.tableId===p);for(const J of V)J.tableName!==t&&await r.store.viewInstances.patch(J.id,{tableName:t,updatedAt:Date.now()})}}else await r.store.tables.insert({id:Eg(),workspaceId:r.workspaceId,name:t,title:c,code:Cg(t),columns:u,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return A`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const r of this.columns){if(!r.unique)continue;const s=new Set,n=new Set;for(const o of this.previewRows){const a=o.data[r.field];a==null||a===""||(s.has(a)&&n.add(a),s.add(a))}e.set(r.field,n)}const t=this.columns.filter(r=>!r.hidden);return A`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${t.map(r=>A`<th title=${r.field}>${r.label||r.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(r=>A`
                <tr>
                  ${t.map(s=>{const n=r.data[s.field],o=$g(s,n,e.get(s.field));return A`<td
                      class=${o?"violation":""}
                      title=${o??""}
                    >${xg(n)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return A`
      <dialog @cancel=${this.close} @keydown=${Yt}>
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
          ${this.noticeMsg?A`<div class="notice">${this.noticeMsg}</div>`:""}
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
            ${this.columns.map((r,s)=>{const n=this.dragSrcIdx===s,o=this.dropTargetIdx===s,a=o&&this.dropEdge==="before"?" drop-before":o&&this.dropEdge==="after"?" drop-after":"";return A`
                <div
                  class=${`col-row${n?" drag-source":""}${a}`}
                  @dragover=${c=>this.onRowDragOver(c,s,c.currentTarget)}
                  @dragleave=${()=>this.onRowDragLeave(s)}
                  @drop=${c=>this.onRowDrop(c,s)}
                >
                  <span
                    class="drag-handle"
                    title="Drag to reorder"
                    draggable="true"
                    @dragstart=${c=>this.onRowDragStart(c,s)}
                    @dragend=${()=>this.onRowDragEnd()}
                  >
                    <span class="mi sm">drag_indicator</span>
                  </span>
                  <input
                    type="text"
                    .value=${r.field}
                    @input=${c=>this.patchColumn(s,{field:c.target.value})}
                  />
                  <input
                    type="text"
                    .value=${r.label}
                    @input=${c=>this.patchColumn(s,{label:c.target.value})}
                  />
                  <select
                    .value=${r.type}
                    @change=${c=>this.patchColumn(s,{type:c.target.value})}
                  >
                    ${vg.map(c=>A`<option value=${c} ?selected=${c===r.type}>${c}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${c=>{const u=c.target.value;this.patchColumn(s,{renderer:u||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(c=>A`<option value=${c} ?selected=${c===r.renderer}>${c}</option>`)}
                  </select>
                  ${r.renderer==="script"?A`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(s)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:A`<span></span>`}
                  <input
                    type="number"
                    min="0"
                    placeholder="—"
                    title="Max length (strings) or max value (numbers)"
                    .value=${r.max==null?"":String(r.max)}
                    @input=${c=>{const u=c.target.value;this.patchColumn(s,{max:u===""?void 0:Number(u)})}}
                  />
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Unique"
                      .checked=${!!r.unique}
                      @change=${c=>this.patchColumn(s,{unique:c.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Not null"
                      .checked=${!!r.notnull}
                      @change=${c=>this.patchColumn(s,{notnull:c.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Visible — uncheck to hide the column without losing its data"
                      .checked=${!r.hidden}
                      @change=${c=>this.patchColumn(s,{hidden:!c.target.checked})}
                    />
                  </span>
                  <button
                    type="button"
                    class="icon-btn"
                    title="Move up"
                    ?disabled=${s===0}
                    @click=${()=>this.moveColumn(s,-1)}
                  >
                    <span class="mi sm">arrow_upward</span>
                  </button>
                  <button
                    type="button"
                    class="icon-btn"
                    title="Move down"
                    ?disabled=${s===this.columns.length-1}
                    @click=${()=>this.moveColumn(s,1)}
                  >
                    <span class="mi sm">arrow_downward</span>
                  </button>
                  <button
                    type="button"
                    class="icon-btn row-del"
                    title="Remove column"
                    @click=${()=>this.removeColumn(s)}
                  >
                    <span class="mi sm">delete</span>
                  </button>
                </div>
              `})}
          </div>

          <button type="button" class="add" @click=${this.addColumn}>+ Add column</button>

          ${this.renameDetected()?A`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?A`<div class="error">${this.errorMsg}</div>`:""}
          ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};Et.styles=[Qt,Gt,qe`
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
  `];Bt([q()],Et.prototype,"mode",2);Bt([q()],Et.prototype,"editTableId",2);Bt([q()],Et.prototype,"name",2);Bt([q()],Et.prototype,"tableTitle",2);Bt([q()],Et.prototype,"columns",2);Bt([q()],Et.prototype,"errorMsg",2);Bt([q()],Et.prototype,"noticeMsg",2);Bt([q()],Et.prototype,"dragSrcIdx",2);Bt([q()],Et.prototype,"dropTargetIdx",2);Bt([q()],Et.prototype,"dropEdge",2);Bt([q()],Et.prototype,"previewRows",2);Bt([q()],Et.prototype,"rendererOptions",2);Et=Bt([tt("new-table-dialog")],Et);function xg(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function $g(e,t,r){const s=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&s)return`${e.label}: empty`;if(s)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!s){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function kg(e,t){const r=[];for(const s of e)if(s.notnull&&t.forEach((n,o)=>{const a=n.data[s.field];(a==null||typeof a=="string"&&a.trim()==="")&&r.push(`Row ${o+1}: ${s.label} is empty.`)}),s.max!=null&&s.max>0&&t.forEach((n,o)=>{const a=n.data[s.field];typeof a=="string"&&a.length>s.max?r.push(`Row ${o+1}: ${s.label} length ${a.length} > max ${s.max}.`):typeof a=="number"&&a>s.max&&r.push(`Row ${o+1}: ${s.label} value ${a} > max ${s.max}.`)}),s.unique){const n=new Map;t.forEach((o,a)=>{const c=o.data[s.field];c==null||c===""||(n.has(c)?r.push(`Row ${a+1}: ${s.label} duplicates row ${n.get(c)+1} ("${String(c)}").`):n.set(c,a))})}return r}function Cg(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Eg(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Sg=Object.defineProperty,_g=Object.getOwnPropertyDescriptor,At=(e,t,r,s)=>{for(var n=s>1?void 0:s?_g(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&Sg(t,r,n),n};const Tg='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',Ag=A`<span class="mi sm">extension</span>`,Qa="plugin:catalogUrls";function ms(){return new URL("/easydbaccess/plugins/catalog.json",location.origin).toString()}const Pg=[["installed","Installed"],["built-in","Built-in"],["available","Available"],["fixed","Fixed"]],Tc=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],Ig=new Map(Tc);let $t=class extends Ne{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[ms()],this.activeCatalogUrl=ms(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}async open(){const e=await be(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(o=>[o.url,o]));const s=await e.store.settings.findOne(Qa),n=Array.isArray(s?.value)?s.value.filter(o=>typeof o=="string"):[];this.catalogUrls=n.length>0?n:[ms()],this.activeCatalogUrl=this.catalogUrls[0]??ms(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),s=Array.isArray(r.plugins)?r.plugins:[];this.catalog=s.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await be()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const o=await fetch(n,{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);const a=await o.json(),c=Array.isArray(a.plugins)?a.plugins:[];this.serverCatalog=c.map(u=>({...u,absUrl:new URL(u.url,n).toString()})),this.serverCatalogError=null}catch(o){this.serverCatalog=[],this.serverCatalogError=o.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await be()).store.settings.upsert({key:Qa,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await be()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await be();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await be(),s=this.records.get(e);await r.store.plugins.upsert({...s??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...s,url:e,enabled:t,lastFetched:s?.lastFetched??0}))}async removePlugin(e){const t=await be();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await be(),s=Yi(e),n=this.records.get(s);await r.store.plugins.upsert({...n??{url:s,lastFetched:0},url:s,enabled:t,lastFetched:n?.lastFetched??0}),this.records=new Map(this.records.set(s,{...n,url:s,enabled:t,lastFetched:n?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await be()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await be();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const s=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:s});const n=new Blob([s],{type:"text/javascript"}),o=URL.createObjectURL(n);try{const c=await import(o);await c.init?.(t.api),await c.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(o),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const a=await t.store.plugins.find();this.records=new Map(a.map(c=>[c.url,c])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}cycleState(e,t){const r=e.get(t),s=new Map(e);return r===void 0?s.set(t,"on"):r==="on"?s.set(t,"not"):s.delete(t),s}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}buildRows(){const e=new Map,t=new Map;for(const{id:r,meta:s}of Ym){const n=s.fixed?!0:this.records.get(Yi(r))?.enabled!==!1,o=s.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${r}`,{id:r,name:s.name,...s.type?{type:s.type}:{},...s.description?{meta:s.description}:{meta:"Built-in plugin"},...s.author?{author:s.author}:{},...s.icon?{icon:s.icon}:{},...s.repo?{repo:s.repo}:{},categories:new Set(o),enabled:n,fixed:!!s.fixed})}for(const r of[...this.catalog,...this.serverCatalog]){const s=this.urls.includes(r.absUrl),n=this.records.get(r.absUrl),o=s?["available","installed"]:["available"],a=e.get(r.id);e.set(r.id,{id:r.id,name:r.name,url:r.absUrl,...r.type?{type:r.type}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},...r.author?{author:r.author}:{},meta:r.description??r.absUrl,categories:a?new Set([...a.categories,...o]):new Set(o),enabled:n?.enabled!==!1,installing:this.installing.has(r.absUrl)}),t.set(r.absUrl,r.id)}for(const r of this.urls){const s=t.get(r);if(s){e.get(s).categories.add("installed");continue}const n=this.records.get(r),o=n?.lastFetched?new Date(n.lastFetched).toLocaleString():"never";e.set(`url:${r}`,{id:r,name:r,urlOnly:!0,url:r,meta:n?.lastError??`Last fetched: ${o}`,metaIsError:!!n?.lastError,categories:new Set(["installed"]),enabled:n?.enabled!==!1})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),r=[],s=[];for(const[c,u]of this.filterStates)(u==="on"?r:s).push(c);const n=[],o=[];for(const[c,u]of this.typeFilters)(u==="on"?n:o).push(c);const a=e.filter(c=>!(c.fixed&&this.filterStates.get("fixed")!=="on"||r.length&&!r.some(u=>c.categories.has(u))||s.some(u=>c.categories.has(u))||n.length&&!(c.type&&n.includes(c.type))||c.type&&o.includes(c.type)));return t?a.filter(c=>[c.id,c.name,c.type,c.meta,c.author].some(u=>u?.toLowerCase().includes(t))):a}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),r=!!e.url&&e.categories.has("installed"),s=!!e.url&&!e.categories.has("installed");return A`
      <div class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}`}>
        <span class="row-icon">${e.icon?ir(e.icon):Ag}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?A`<span class="row-id">${e.id}</span>`:""}${e.type?A`<span class="row-type" title="Plugin type"
                  >${Ig.get(e.type)??e.type}</span
                >`:""}
          </div>
          ${e.meta?A`<div class=${`meta${e.metaIsError?" err":""}`}>${e.meta}</div>`:""}
        </div>
        <div class="row-author">${e.author??""}</div>
        ${e.repo?A`<a
              class="row-repo"
              href=${e.repo}
              target="_blank"
              rel="noopener noreferrer"
              title="View source on GitHub"
              >${ir(Tg)}</a
            >`:A`<span></span>`}
        ${e.fixed?A`<span class="mi sm lock-icon" title="Always on — cannot be disabled">lock</span>`:t?A`<label class="switch" title="Enable / disable">
                <input
                  type="checkbox"
                  .checked=${e.enabled}
                  @change=${n=>this.onRowToggle(e,n.target.checked)}
                />
                <span class="slider"></span>
              </label>`:A`<span></span>`}
        ${s?A`<button
              type="button"
              class="install"
              ?disabled=${e.installing}
              @click=${()=>this.installFromCatalog({absUrl:e.url,name:e.name})}
            >
              <span class="mi sm">${e.installing?"hourglass_empty":"download"}</span>
              ${e.installing?"Installing…":"Install"}
            </button>`:r?A`<button
                type="button"
                class="uninstall"
                @click=${()=>this.removePlugin(e.url)}
              >
                <span class="mi sm">delete</span> Uninstall
              </button>`:A`<span></span>`}
      </div>
    `}render(){const e=this.filteredRows;return A`
      <dialog @cancel=${this.close} @keydown=${Yt}>
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
              Plugins are JavaScript modules loaded by URL into this workspace.
              Enable/disable changes take effect after reload; installing a
              plugin activates it immediately.
            </p>

            <div class="filters">
              ${Pg.map(([t,r])=>{const s=this.filterStates.get(t),n=s==="on"?`Showing only ${r} plugins — click to exclude`:s==="not"?`Hiding ${r} plugins — click to clear`:`Filter by ${r} — click: show only → exclude → off`;return A`
                  <button
                    type="button"
                    class=${`tri${s?` ${s}`:""}`}
                    title=${n}
                    aria-pressed=${s!==void 0}
                    @click=${()=>this.cycleFilter(t)}
                  >
                    <span class="tri-mark"
                      >${s==="on"?"✓":s==="not"?"≠":""}</span
                    >${r}
                  </button>
                `})}
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
              ${Tc.map(([t,r])=>{const s=this.typeFilters.get(t),n=s==="on"?`Showing only ${r} plugins — click to exclude`:s==="not"?`Hiding ${r} plugins — click to clear`:`Filter by ${r} — click: show only → exclude → off`;return A`
                  <button
                    type="button"
                    class=${`tri${s?` ${s}`:""}`}
                    title=${n}
                    aria-pressed=${s!==void 0}
                    @click=${()=>this.cycleTypeFilter(t)}
                  >
                    <span class="tri-mark"
                      >${s==="on"?"✓":s==="not"?"≠":""}</span
                    >${r}
                  </button>
                `})}
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
                ${this.catalogUrls.map(t=>A`<option value=${t}></option>`)}
              </datalist>
              <button type="button" class="ghost" @click=${this.reloadCatalogSource}>
                <span class="mi sm">refresh</span> Reload
              </button>
            </div>
            ${this.catalogError?A`<div class="meta err">Catalog unavailable: ${this.catalogError}</div>`:""}
            ${this.serverCatalogError?A`<div class="meta err">Server registry unavailable: ${this.serverCatalogError}</div>`:""}

            <div class="plugin-list">
              ${e.length===0?A`<p class="hint">No plugins match the current filters/search.</p>`:""}
              ${e.map(t=>this.renderRow(t))}
            </div>

            <div class="add">
              <input
                type="text"
                placeholder="https://example.com/my-plugin.js"
                .value=${this.addUrl}
                @input=${t=>this.addUrl=t.target.value}
              />
              <button type="submit" class="primary">
                <span class="mi sm">add</span> Add
              </button>
            </div>
          </div>
        </form>
      </dialog>
    `}};$t.styles=[Qt,Gt,qe`
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
    `];At([q()],$t.prototype,"urls",2);At([q()],$t.prototype,"records",2);At([q()],$t.prototype,"addUrl",2);At([q()],$t.prototype,"catalog",2);At([q()],$t.prototype,"catalogError",2);At([q()],$t.prototype,"serverCatalog",2);At([q()],$t.prototype,"serverCatalogError",2);At([q()],$t.prototype,"installing",2);At([q()],$t.prototype,"catalogUrls",2);At([q()],$t.prototype,"activeCatalogUrl",2);At([q()],$t.prototype,"search",2);At([q()],$t.prototype,"filterStates",2);At([q()],$t.prototype,"typeFilters",2);$t=At([tt("plugin-manager-dialog")],$t);var Rg=Object.defineProperty,Dg=Object.getOwnPropertyDescriptor,zn=(e,t,r,s)=>{for(var n=s>1?void 0:s?Dg(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&Rg(t,r,n),n};const _r="__general__";let Vt=class extends Ne{constructor(){super(...arguments),this.tabs=[],this.active=_r,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.secretError="",this.dialogEl=null,this.attemptClose=e=>{const t=this.invalidSecrets();if(t.length>0){e?.preventDefault();const r=t[0];this.active=r.tab.id,this.secretError=`“${r.field.label}” must be empty or a \${secret:name} reference. Move the value into the secrets store (General tab) and reference it, so the raw secret is never saved or synced.`;return}this.secretError="",this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.attemptClose()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}async open(){const e=await be(),t=[...e.registries.settings];this.tabs=t.map(([o,a])=>({id:o,name:a.name,fields:a.fields}));const r=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=r?.title??"";const s={},n={};for(const o of this.tabs)for(const a of o.fields){const c=`${o.id}:${a.key}`,u=await e.api.settings.placement(o.id,a.key);u==="user"?(s[c]=so(c),n[c]="user"):u==="workspace"?(s[c]=(await e.store.settings.findOne(c))?.value,n[c]="workspace"):(s[c]=a.default,n[c]=a.scope??"workspace")}this.values=s,this.placements=n,this.secretsText=Os(),this.active=_r,await this.updateComplete,this.dialogEl?.showModal()}static rawSecret(e){return typeof e=="string"&&e!==""&&!e.includes("${secret:")}invalidSecrets(){const e=[];for(const t of this.tabs)for(const r of t.fields)r.type==="secret"&&Vt.rawSecret(this.values[`${t.id}:${r.key}`])&&e.push({tab:t,field:r});return e}async setValue(e,t,r){const s=`${e.id}:${t.key}`;this.values={...this.values,[s]:r},this.secretError&&this.invalidSecrets().length===0&&(this.secretError=""),await(await be()).api.settings.set(e.id,t.key,r,this.placements[s])}async toggleScope(e,t,r){const s=`${e.id}:${t.key}`,n=r?"user":"workspace";this.placements={...this.placements,[s]:n},await(await be()).api.settings.set(e.id,t.key,this.values[s],n)}onSecretsInput(e){this.secretsText=e.target.value,yl(this.secretsText)}downloadSecrets(){const e=new Blob([this.secretsText],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download="secrets.txt",r.click(),URL.revokeObjectURL(t)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await be();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const r=`${e.id}:${t.key}`,s=this.values[r];switch(t.type){case"text":return A`<textarea
          .value=${String(s??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        ></textarea>`;case"number":return A`<input
          type="number"
          .value=${s==null?"":String(s)}
          @change=${n=>{const o=n.target.value;this.setValue(e,t,o===""?void 0:Number(o))}}
        />`;case"boolean":return A`<label class="scope"
          ><input
            type="checkbox"
            .checked=${!!s}
            @change=${n=>this.setValue(e,t,n.target.checked)}
          />
          enabled</label
        >`;case"date":return A`<input
          type="date"
          .value=${String(s??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        />`;case"secret":return this.renderSecretControl(e,t,s);case"option":return A`<div class="radios">
          ${(t.options??[]).map(n=>A`<label
              ><input
                type="radio"
                name=${r}
                .checked=${s===n}
                @change=${()=>this.setValue(e,t,n)}
              />${n}</label
            >`)}
        </div>`;case"selection":{const n=Array.isArray(s)?s:[];return A`<div class="checks">
          ${(t.options??[]).map(o=>A`<label
              ><input
                type="checkbox"
                .checked=${n.includes(o)}
                @change=${a=>{const u=a.target.checked?[...n,o]:n.filter(p=>p!==o);this.setValue(e,t,u)}}
              />${o}</label
            >`)}
        </div>`}case"string":default:return A`<input
          type="text"
          .value=${String(s??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        />`}}renderSecretControl(e,t,r){const s=Object.keys(js(this.secretsText)),n=Vt.rawSecret(r);return A`<div class="secret-row">
      <input
        type="text"
        class=${n?"invalid":""}
        placeholder="value or \${secret:name}"
        .value=${String(r??"")}
        @change=${o=>this.setValue(e,t,o.target.value)}
      />
      ${s.length>0?A`<select
            title="Insert a secret reference"
            @change=${o=>{const a=o.target.value;a&&this.setValue(e,t,`\${secret:${a}}`),o.target.value=""}}
          >
            <option value="">🔑 secret…</option>
            ${s.map(o=>A`<option value=${o}>${o}</option>`)}
          </select>`:me}
    </div>`}renderField(e,t){const r=`${e.id}:${t.key}`;return A`<div class="field">
      <div class="field-head">
        <label>${t.label}</label>
        <label class="scope" title="Store on this device only (not synced)">
          <input
            type="checkbox"
            .checked=${this.placements[r]==="user"}
            @change=${s=>this.toggleScope(e,t,s.target.checked)}
          />
          user
        </label>
      </div>
      ${this.renderControl(e,t)}
      ${t.description?A`<p class="desc">${t.description}</p>`:me}
    </div>`}renderGeneral(){return A`
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
    `}renderPanel(){if(this.active===_r)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?A`
      <h3>${e.name}</h3>
      ${e.fields.length===0?A`<p class="empty">This plugin registered no settings.</p>`:e.fields.map(t=>this.renderField(e,t))}
    `:me}render(){return A`
      <dialog @cancel=${this.attemptClose} @keydown=${Yt}>
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
          ${this.secretError?A`<div class="secret-error" role="alert">${this.secretError}</div>`:me}
          <div class="dialog-body">
            <div class="layout">
              <nav class="tabs">
                <button
                  type="button"
                  class=${this.active===_r?"active":""}
                  @click=${()=>this.active=_r}
                >
                  General
                </button>
                ${this.tabs.map(e=>A`<button
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
    `}};Vt.styles=[Qt,Gt,qe`
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
    `];zn([q()],Vt.prototype,"tabs",2);zn([q()],Vt.prototype,"active",2);zn([q()],Vt.prototype,"values",2);zn([q()],Vt.prototype,"placements",2);zn([q()],Vt.prototype,"secretsText",2);zn([q()],Vt.prototype,"workspaceTitle",2);zn([q()],Vt.prototype,"secretError",2);Vt=zn([tt("settings-dialog")],Vt);var Og=Object.defineProperty,jg=Object.getOwnPropertyDescriptor,Zt=(e,t,r,s)=>{for(var n=s>1?void 0:s?jg(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&Og(t,r,n),n};let _t=class extends Ne{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await be(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const r=await e.store.tables.findOne(t.tableId);this.tableColumns=r?.columns??[],r&&t.tableName!==r.name&&e.store.viewInstances.patch(t.id,{tableName:r.name});const s=new Map(this.tableColumns.map(o=>[o.field,o]));this.columns=t.visibleColumns.map(o=>s.get(o)??{field:o,label:o,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(o=>{const a=o.find(c=>c.id===this.viewInstanceId);if(a){if(a.tableId!==this.instance?.tableId){this.instance=a,this.reload();return}this.instance=a,this.recompute()}});const n=e.store.rows(t.tableId);this.rowsUnsub=n.subscribe(o=>{this.allRows=o,this.recompute()}),this.allRows=await n.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;let e=Im(this.allRows,this.instance);const t=(o,a)=>Object.values(o.data).some(c=>c!=null&&String(c).toLowerCase().includes(a)),r=this.searchQuery.trim(),s=this.globalQuery.trim();r&&(e=Cs(e,r,t)),s&&(e=Cs(e,s,t));const n=this.instance.limit??0;n>0&&e.length>n&&(e=e.slice(0,n)),this.rows=e,this.templateOn&&jl(this.viewInstanceId,e.length,this.allRows.length)}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await be()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||Wi(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&Wi(this.instance.tableId,{editInstanceId:this.instance.id})}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,s=t.includes(e)?t.filter(o=>o!==e):[...t,e];if(s.length===0)return;await(await be()).store.viewInstances.patch(this.instance.id,{visibleColumns:s,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:s}}renderTable(){return this.rows.length===0?A`<div class="vw-empty">No rows.</div>`:A`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>A`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>A`<tr>
                ${this.columns.map(t=>{const r=e.data[t.field];return A`<td>${r==null?"":String(r)}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}renderTemplated(){const e=this.template;if(!e)return A`<div class="vw-empty">This view's template is missing.</div>`;if(Rm(e.rowHtml)){const t=this.instance?.mapping??{},r=this.rows.map(n=>Tm(e.rowHtml,n,t)).join(""),s=(e.headerHtml??"")+r+(e.footerHtml??"");return A`<div class="vw-root">${ir(s)}</div>`}return A`<div class="vw-root">
      ${e.headerHtml?.trim()?A`<div class="vw-html">${ir(e.headerHtml)}</div>`:me}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?A`<div class="vw-html">${ir(e.footerHtml)}</div>`:me}
    </div>`}renderFooter(){if(!this.instance)return me;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return A`<div class="vw-footer">
      ${!e&&this.showColsMenu?A`<div class="cols-menu">
            ${this.tableColumns.map(r=>A`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(r.field)}
                    @change=${()=>void this.toggleColumn(r.field)}
                  />${r.label||r.field}</label
                >`)}
          </div>`:me}
      ${e?me:A`<button
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
      ${this.template?A`<button
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
    </div>`}render(){if(!this.loaded)return A`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return A`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const t=this.templateOn?A`<div class="vw-body scroll">${this.renderTemplated()}</div>`:A`<div class="vw-body grid">
          <data-table
            .tableId=${this.instance?.tableId??""}
            .viewInstanceId=${this.viewInstanceId}
          ></data-table>
        </div>`;return A`${t}${this.renderFooter()}`}};_t.styles=[Qt,qe`
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
    `];Zt([Mt({type:String})],_t.prototype,"viewInstanceId",2);Zt([q()],_t.prototype,"loaded",2);Zt([q()],_t.prototype,"error",2);Zt([q()],_t.prototype,"instance",2);Zt([q()],_t.prototype,"template",2);Zt([q()],_t.prototype,"columns",2);Zt([q()],_t.prototype,"tableColumns",2);Zt([q()],_t.prototype,"rows",2);Zt([q()],_t.prototype,"showColsMenu",2);Zt([q()],_t.prototype,"searchQuery",2);Zt([q()],_t.prototype,"globalQuery",2);_t=Zt([tt("view-window")],_t);const Ut=new Map;function zg(e){const t=Ut.get(e);if(!t)return!1;const r=t.panel;return r.status==="minimized"&&r.normalize?.(),r.front?.(),!0}let Ja=!1;function Za(e){e.panel.setHeaderTitle?.(e.name+zl(e.count,e.total))}function Lg(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Fg(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Ac(e){return`view-panel-${Fg(e)}`}async function Mg(){if(Ja)return;Ja=!0;const e=await be(),t=r=>r.filter(s=>s.workspaceId===e.workspaceId&&s.open);for(const r of t(await e.store.viewInstances.find()))el(r,e);e.store.viewInstances.subscribe(r=>{const s=new Map(t(r).map(n=>[n.id,n]));for(const n of[...Ut.keys()])s.has(n)||Ng(n);for(const[n,o]of s)Ut.has(n)||el(o,e)}),e.store.tables.subscribe(r=>void Bg(e,r)),document.addEventListener(Es,r=>{const s=r.detail,n=Ut.get(s.key);n&&(n.count=s.count,n.total=s.total,Za(n))}),document.addEventListener("easydb:reload-view",r=>{const s=r.detail?.instanceId;if(!s)return;const n=Ut.get(s);n&&(async()=>{const o=await e.store.viewInstances.findOne(s);o&&(n.name=o.name,Za(n)),n.el.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of Ut.values())r.reload()})}async function Bg(e,t){const r=t.filter(a=>a.workspaceId===e.workspaceId),s=new Set(r.map(a=>a.id)),n=new Map;for(const a of r)n.has(a.name)||n.set(a.name,a);const o=await e.store.viewInstances.find();for(const a of o){if(a.workspaceId!==e.workspaceId||s.has(a.tableId)||!a.tableName)continue;const c=n.get(a.tableName);c&&await e.store.viewInstances.patch(a.id,{tableId:c.id,updatedAt:Date.now()})}}function el(e,t){if(Ut.has(e.id))return;const r=Ac(e.id),s=document.createElement("view-window");s.viewInstanceId=e.id,s.style.height="100%";const n=e.windowGeometry,o=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:"480 520"},a=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:{my:"center-top",at:"center-top",offsetY:60},c=uc(r,pc),u=z.create({id:r,container:Lg(),headerTitle:e.name,theme:"#0891b2",content:s,...o,position:a,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>void Ri(e.id)},resizeit:{containment:!1,stop:()=>void Ri(e.id)},onstatuschange:$=>{$.status==="maximized"?c.enter():c.exit(),Ri(e.id)},onclosed:()=>{Ut.delete(e.id),c.exit(),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});Ut.set(e.id,{panel:u,el:s,name:e.name,count:-1,total:-1});const p=document.getElementById(r),x=document.createElement("panel-search");x.tableId=e.id,p?.querySelector(".jsPanel-controlbar")?.prepend(x);const y=p?.querySelector(".jsPanel-titlebar");y&&(y.tabIndex=-1,y.style.outline="none",y.addEventListener("pointerdown",()=>y.focus())),n?.maximized?queueMicrotask(()=>u.maximize?.()):n?.minimized&&queueMicrotask(()=>u.minimize?.())}function Ng(e){const t=Ut.get(e);if(t){Ut.delete(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}async function Ri(e){const t=document.getElementById(Ac(e)),r=Ut.get(e);if(!t||!r)return;const s=r.panel.status,n=s==="minimized",o=s==="maximized";try{const a=await be(),c=(await a.store.viewInstances.findOne(e))?.windowGeometry;let u=t.offsetLeft,p=t.offsetTop,x=t.offsetWidth,y=t.offsetHeight;(n||o)&&c&&(u=c.x,p=c.y,x=c.w,y=c.h),u<=-9e3&&(u=c?.x??40);const $={x:u,y:p,w:x,h:y,z:0,minimized:n,maximized:o};await a.store.viewInstances.patch(e,{windowGeometry:$,updatedAt:Date.now()})}catch{}}var Ug=Object.defineProperty,Hg=Object.getOwnPropertyDescriptor,mr=(e,t,r,s)=>{for(var n=s>1?void 0:s?Hg(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&Ug(t,r,n),n};const qg={Windows:0,Actions:1,App:2,Tables:3,Views:4};function tl(e){return qg[e]??3}function Wg(e){return e?e.trimStart().startsWith("<svg")?A`<span class="cmd-svg">${no(e)}</span>`:A`<span class="mi sm">${e}</span>`:A`<span class="mi sm">chevron_right</span>`}let jn=class extends Ne{constructor(){super(...arguments),this.search="",this.items=[],this.selected=0,this.api=null}async open(){const e=await be();this.api=e.api,this.items=await this.buildItems(),this.search="",this.selected=0,await this.updateComplete,this.dialogEl&&!this.dialogEl.open&&this.dialogEl.showModal(),this.inputEl?.focus()}async buildItems(){const e=await be(),t=e.api,r=[];for(const o of e.registries.commands)r.push({id:o.id,title:o.title,group:o.group??"Commands",...o.icon?{icon:o.icon}:{},haystack:[o.title,o.group,...o.keywords??[]].join(" ").toLowerCase(),run:()=>o.run(t)});for(const o of[...e.registries.headerButtons,...e.registries.footerButtons])r.push({id:`button:${o.id}`,title:o.label,group:"Actions",...o.icon?{icon:o.icon}:{},haystack:`${o.label} ${o.tooltip??""}`.toLowerCase(),run:()=>o.onClick(t)});const s=await t.store.tables.find({workspaceId:e.workspaceId});s.sort((o,a)=>o.name.localeCompare(a.name));for(const o of s)r.push({id:`goto:${o.id}`,title:`Go to: ${o.name}`,group:"Tables",icon:"table_chart",haystack:`${o.name} go to table`.toLowerCase(),run:()=>{Mp(o.id)}});const n=await t.store.viewInstances.find({workspaceId:e.workspaceId});n.sort((o,a)=>o.name.localeCompare(a.name));for(const o of n)r.push({id:`goto-view:${o.id}`,title:`Go to view: ${o.name}`,group:"Views",icon:"view_quilt",haystack:`${o.name} go to view`.toLowerCase(),run:async()=>{await t.store.viewInstances.patch(o.id,{open:!0,updatedAt:Date.now()}),zg(o.id)}});return r.map((o,a)=>({it:o,i:a})).sort((o,a)=>tl(o.it.group)-tl(a.it.group)||o.i-a.i).map(({it:o})=>o)}get filtered(){const e=this.search.trim().toLowerCase();return e?this.items.filter(t=>t.haystack.includes(e)):this.items}close(){this.dialogEl?.close()}onInput(e){this.search=e.target.value,this.selected=0}onKeydown(e){const t=this.filtered;if(e.key==="ArrowDown")e.preventDefault(),this.selected=t.length?(this.selected+1)%t.length:0;else if(e.key==="ArrowUp")e.preventDefault(),this.selected=t.length?(this.selected-1+t.length)%t.length:0;else if(e.key==="Enter"){e.preventDefault();const r=t[this.selected];r&&this.execute(r)}}async execute(e){this.close();try{await e.run()}catch(t){console.error(`[command:${e.id}]`,t)}}render(){const e=this.filtered;let t="";return A`
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
          ${e.length===0?A`<div class="empty">No matching commands.</div>`:e.map((r,s)=>{const n=r.group!==t?(t=r.group,r.group):null;return A`
                  ${n?A`<div class="group-head">${n}</div>`:""}
                  <div
                    class=${`item${s===this.selected?" sel":""}`}
                    @mousemove=${()=>this.selected=s}
                    @click=${()=>this.execute(r)}
                  >
                    ${Wg(r.icon)}
                    <span class="title">${r.title}</span>
                  </div>
                `})}
        </div>
      </dialog>
    `}};jn.styles=[Qt,qe`
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
    `];mr([q()],jn.prototype,"search",2);mr([q()],jn.prototype,"items",2);mr([q()],jn.prototype,"selected",2);mr([fn("dialog")],jn.prototype,"dialogEl",2);mr([fn("input")],jn.prototype,"inputEl",2);jn=mr([tt("command-palette-dialog")],jn);var Kg=Object.defineProperty,Vg=Object.getOwnPropertyDescriptor,Pc=(e,t,r,s)=>{for(var n=s>1?void 0:s?Vg(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&Kg(t,r,n),n};let Ps=class extends Ne{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await be();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(s=>s.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await Up(),await Mg()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?A``:A`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};Ps.styles=qe`
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
  `;Pc([q()],Ps.prototype,"tables",2);Ps=Pc([tt("table-list")],Ps);var Gg=Object.defineProperty,Yg=Object.getOwnPropertyDescriptor,yo=(e,t,r,s)=>{for(var n=s>1?void 0:s?Yg(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&Gg(t,r,n),n};let Dr=class extends Ne{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await be();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const s=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(s)}async addWorkspace(){const t=await(await be()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return A`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>A`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};Dr.styles=[Qt,qe`
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
  `];yo([q()],Dr.prototype,"workspaces",2);yo([q()],Dr.prototype,"current",2);Dr=yo([tt("workspace-selector")],Dr);var nl=Object.freeze,Ic=Object.defineProperty,Xg=Object.getOwnPropertyDescriptor,en=(e,t,r,s)=>{for(var n=s>1?void 0:s?Xg(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,r,n):a(n))||n);return s&&n&&Ic(t,r,n),n},Qg=(e,t)=>nl(Ic(e,"raw",{value:nl(e.slice())})),rl;function sl(e){return e?e.trimStart().startsWith("<svg")?A`<span class="icon-svg">${no(e)}</span>`:A`<span class="mi sm">${e}</span>`:""}let Tt=class extends Ne{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.onOpenCommandPalette=()=>{this.commandPaletteDialog?.open()},this.onGlobalKeydown=e=>{(e.ctrlKey||e.metaKey)&&!e.altKey&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.commandPaletteDialog?.open())},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{ol(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!ol(e))return;e.preventDefault();const t=await be(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const s of[...t.registries.dropHandlers])try{if(await s(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=(e,t)=>{if(!this.api)return;const r=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:r})).catch(s=>{console.error(`[footer-button:${e.id}]`,s)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),document.addEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.addEventListener("easydb:focus-search",this.openSearch),document.addEventListener("keydown",this.onGlobalKeydown),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),document.removeEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.removeEventListener("easydb:focus-search",this.openSearch),document.removeEventListener("keydown",this.onGlobalKeydown),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await be();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const r=t.find(s=>s.id===e.workspaceId);this.workspaceTitle=r?.title?.trim()??"",Jg(this.workspaceTitle)})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return A`
        <button class="icon-btn" title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
          ${sl(e.icon)}
        </button>
      `;const r=t==="header"||e.variant==="primary"?"primary":"slot";return A`
      <button class=${r} title=${e.tooltip??e.label} @click=${s=>this.runSlot(e,s)}>
        ${sl(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return A(rl||(rl=Qg([`
      <header>
        <strong
          >`,`
          <a
            class="version-link"
            href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener"
            title="View the changelog on GitHub"
            ><span class="version">v0.0.160</span></a
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
    `])),this.workspaceTitle||"easyDBAccess",this.headerButtons.filter(e=>e.variant!=="secondary").map(e=>this.renderSlotButton(e,"header")),this.searchOpen?A`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?A`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:A`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              @click=${this.openSearch}
            >
              <span class="mi">search</span>
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Tt.styles=[Qt,qe`
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
    `];en([fn("new-table-dialog")],Tt.prototype,"dialog",2);en([fn("csv-paste-dialog")],Tt.prototype,"csvPasteDialog",2);en([fn("plugin-manager-dialog")],Tt.prototype,"pluginManagerDialog",2);en([fn("settings-dialog")],Tt.prototype,"settingsDialog",2);en([fn("command-palette-dialog")],Tt.prototype,"commandPaletteDialog",2);en([fn("input.search")],Tt.prototype,"searchInput",2);en([q()],Tt.prototype,"footerButtons",2);en([q()],Tt.prototype,"headerButtons",2);en([q()],Tt.prototype,"searchQuery",2);en([q()],Tt.prototype,"searchOpen",2);en([q()],Tt.prototype,"workspaceTitle",2);Tt=en([tt("app-shell")],Tt);const il=document.title;function Jg(e){const t=e.trim();document.title=t?`${t} — ${il}`:il}function ol(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([be(),In(()=>Promise.resolve().then(()=>xc),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{qe as a,A as b,Yt as c,Gt as d,Qt as e,Ne as i,Xt as m,q as r,tt as t};
//# sourceMappingURL=index-BlDEgzOL.js.map
