(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const Xa="modulepreload",Ga=function(e){return"/easydbaccess/"+e},Bs={},Qa=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){let c=function(v){return Promise.all(v.map(A=>Promise.resolve(A).then($=>({status:"fulfilled",value:$}),$=>({status:"rejected",reason:$}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=d?.nonce||d?.getAttribute("nonce");n=c(r.map(v=>{if(v=Ga(v),v in Bs)return;Bs[v]=!0;const A=v.endsWith(".css"),$=A?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${$}`))return;const R=document.createElement("link");if(R.rel=A?"stylesheet":Xa,A||(R.as="script"),R.crossOrigin="",R.href=v,m&&R.setAttribute("nonce",m),document.head.appendChild(R),A)return new Promise((B,N)=>{R.addEventListener("load",B),R.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${v}`)))})}))}function a(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return n.then(c=>{for(const d of c||[])d.status==="rejected"&&a(d.reason);return t().catch(a)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mr=globalThis,Qi=Mr.ShadowRoot&&(Mr.ShadyCSS===void 0||Mr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ji=Symbol(),Ms=new WeakMap;let Do=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==Ji)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Qi&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=Ms.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ms.set(r,t))}return t}toString(){return this.cssText}};const Ja=e=>new Do(typeof e=="string"?e:e+"",void 0,Ji),st=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,a)=>i+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[a+1],e[0]);return new Do(r,e,Ji)},Za=(e,t)=>{if(Qi)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),n=Mr.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}},Ns=Qi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Ja(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:el,defineProperty:tl,getOwnPropertyDescriptor:nl,getOwnPropertyNames:rl,getOwnPropertySymbols:il,getPrototypeOf:sl}=Object,Xr=globalThis,qs=Xr.trustedTypes,ol=qs?qs.emptyScript:"",al=Xr.reactiveElementPolyfillSupport,ir=(e,t)=>e,Wr={toAttribute(e,t){switch(t){case Boolean:e=e?ol:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Zi=(e,t)=>!el(e,t),Us={attribute:!0,type:String,converter:Wr,reflect:!1,useDefault:!1,hasChanged:Zi};Symbol.metadata??=Symbol("metadata"),Xr.litPropertyMetadata??=new WeakMap;let Mn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Us){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&tl(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){const{get:n,set:a}=nl(this.prototype,t)??{get(){return this[r]},set(c){this[r]=c}};return{get:n,set(c){const d=n?.call(this);a?.call(this,c),this.requestUpdate(t,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Us}static _$Ei(){if(this.hasOwnProperty(ir("elementProperties")))return;const t=sl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ir("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ir("properties"))){const r=this.properties,i=[...rl(r),...il(r)];for(const n of i)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(Ns(n))}else t!==void 0&&r.push(Ns(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Za(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const a=(i.converter?.toAttribute!==void 0?i.converter:Wr).toAttribute(r,i.type);this._$Em=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,r){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const a=i.getPropertyOptions(n),c=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Wr;this._$Em=n;const d=c.fromAttribute(r,a.type);this[n]=d??this._$Ej?.get(n)??d,this._$Em=null}}requestUpdate(t,r,i,n=!1,a){if(t!==void 0){const c=this.constructor;if(n===!1&&(a=this[t]),i??=c.getPropertyOptions(t),!((i.hasChanged??Zi)(a,r)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(c._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:n,wrapped:a},c){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,c??r??this[t]),a!==!0||c!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,a]of i){const{wrapped:c}=a,d=this[n];c!==!0||this._$AL.has(n)||d===void 0||this.C(n,void 0,a,d)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Mn.elementStyles=[],Mn.shadowRootOptions={mode:"open"},Mn[ir("elementProperties")]=new Map,Mn[ir("finalized")]=new Map,al?.({ReactiveElement:Mn}),(Xr.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const es=globalThis,Ws=e=>e,Hr=es.trustedTypes,Hs=Hr?Hr.createPolicy("lit-html",{createHTML:e=>e}):void 0,jo="$lit$",bn=`lit$${Math.random().toFixed(9).slice(2)}$`,Fo="?"+bn,ll=`<${Fo}>`,Tn=document,sr=()=>Tn.createComment(""),or=e=>e===null||typeof e!="object"&&typeof e!="function",ts=Array.isArray,cl=e=>ts(e)||typeof e?.[Symbol.iterator]=="function",Ri=`[ 	
\f\r]`,nr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ks=/-->/g,Vs=/>/g,Sn=RegExp(`>|${Ri}(?:([^\\s"'>=/]+)(${Ri}*=${Ri}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ys=/'/g,Xs=/"/g,Oo=/^(?:script|style|textarea|title)$/i,ul=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),U=ul(1),Dn=Symbol.for("lit-noChange"),Fe=Symbol.for("lit-nothing"),Gs=new WeakMap,An=Tn.createTreeWalker(Tn,129);function Ro(e,t){if(!ts(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Hs!==void 0?Hs.createHTML(t):t}const dl=(e,t)=>{const r=e.length-1,i=[];let n,a=t===2?"<svg>":t===3?"<math>":"",c=nr;for(let d=0;d<r;d++){const m=e[d];let v,A,$=-1,R=0;for(;R<m.length&&(c.lastIndex=R,A=c.exec(m),A!==null);)R=c.lastIndex,c===nr?A[1]==="!--"?c=Ks:A[1]!==void 0?c=Vs:A[2]!==void 0?(Oo.test(A[2])&&(n=RegExp("</"+A[2],"g")),c=Sn):A[3]!==void 0&&(c=Sn):c===Sn?A[0]===">"?(c=n??nr,$=-1):A[1]===void 0?$=-2:($=c.lastIndex-A[2].length,v=A[1],c=A[3]===void 0?Sn:A[3]==='"'?Xs:Ys):c===Xs||c===Ys?c=Sn:c===Ks||c===Vs?c=nr:(c=Sn,n=void 0);const B=c===Sn&&e[d+1].startsWith("/>")?" ":"";a+=c===nr?m+ll:$>=0?(i.push(v),m.slice(0,$)+jo+m.slice($)+bn+B):m+bn+($===-2?d:B)}return[Ro(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class ar{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let a=0,c=0;const d=t.length-1,m=this.parts,[v,A]=dl(t,r);if(this.el=ar.createElement(v,i),An.currentNode=this.el.content,r===2||r===3){const $=this.el.content.firstChild;$.replaceWith(...$.childNodes)}for(;(n=An.nextNode())!==null&&m.length<d;){if(n.nodeType===1){if(n.hasAttributes())for(const $ of n.getAttributeNames())if($.endsWith(jo)){const R=A[c++],B=n.getAttribute($).split(bn),N=/([.?@])?(.*)/.exec(R);m.push({type:1,index:a,name:N[2],strings:B,ctor:N[1]==="."?fl:N[1]==="?"?pl:N[1]==="@"?ml:Gr}),n.removeAttribute($)}else $.startsWith(bn)&&(m.push({type:6,index:a}),n.removeAttribute($));if(Oo.test(n.tagName)){const $=n.textContent.split(bn),R=$.length-1;if(R>0){n.textContent=Hr?Hr.emptyScript:"";for(let B=0;B<R;B++)n.append($[B],sr()),An.nextNode(),m.push({type:2,index:++a});n.append($[R],sr())}}}else if(n.nodeType===8)if(n.data===Fo)m.push({type:2,index:a});else{let $=-1;for(;($=n.data.indexOf(bn,$+1))!==-1;)m.push({type:7,index:a}),$+=bn.length-1}a++}}static createElement(t,r){const i=Tn.createElement("template");return i.innerHTML=t,i}}function qn(e,t,r=e,i){if(t===Dn)return t;let n=i!==void 0?r._$Co?.[i]:r._$Cl;const a=or(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),a===void 0?n=void 0:(n=new a(e),n._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=n:r._$Cl=n),n!==void 0&&(t=qn(e,n._$AS(e,t.values),n,i)),t}class hl{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,n=(t?.creationScope??Tn).importNode(r,!0);An.currentNode=n;let a=An.nextNode(),c=0,d=0,m=i[0];for(;m!==void 0;){if(c===m.index){let v;m.type===2?v=new cr(a,a.nextSibling,this,t):m.type===1?v=new m.ctor(a,m.name,m.strings,this,t):m.type===6&&(v=new gl(a,this,t)),this._$AV.push(v),m=i[++d]}c!==m?.index&&(a=An.nextNode(),c++)}return An.currentNode=Tn,n}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class cr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=Fe,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=qn(this,t,r),or(t)?t===Fe||t==null||t===""?(this._$AH!==Fe&&this._$AR(),this._$AH=Fe):t!==this._$AH&&t!==Dn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):cl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Fe&&or(this._$AH)?this._$AA.nextSibling.data=t:this.T(Tn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ar.createElement(Ro(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(r);else{const a=new hl(n,this),c=a.u(this.options);a.p(r),this.T(c),this._$AH=a}}_$AC(t){let r=Gs.get(t.strings);return r===void 0&&Gs.set(t.strings,r=new ar(t)),r}k(t){ts(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const a of t)n===r.length?r.push(i=new cr(this.O(sr()),this.O(sr()),this,this.options)):i=r[n],i._$AI(a),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=Ws(t).nextSibling;Ws(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Gr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,a){this.type=1,this._$AH=Fe,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Fe}_$AI(t,r=this,i,n){const a=this.strings;let c=!1;if(a===void 0)t=qn(this,t,r,0),c=!or(t)||t!==this._$AH&&t!==Dn,c&&(this._$AH=t);else{const d=t;let m,v;for(t=a[0],m=0;m<a.length-1;m++)v=qn(this,d[i+m],r,m),v===Dn&&(v=this._$AH[m]),c||=!or(v)||v!==this._$AH[m],v===Fe?t=Fe:t!==Fe&&(t+=(v??"")+a[m+1]),this._$AH[m]=v}c&&!n&&this.j(t)}j(t){t===Fe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class fl extends Gr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Fe?void 0:t}}class pl extends Gr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Fe)}}class ml extends Gr{constructor(t,r,i,n,a){super(t,r,i,n,a),this.type=5}_$AI(t,r=this){if((t=qn(this,t,r,0)??Fe)===Dn)return;const i=this._$AH,n=t===Fe&&i!==Fe||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==Fe&&(i===Fe||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class gl{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){qn(this,t)}}const bl=es.litHtmlPolyfillSupport;bl?.(ar,cr),(es.litHtmlVersions??=[]).push("3.3.3");const yl=(e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const a=r?.renderBefore??null;i._$litPart$=n=new cr(t.insertBefore(sr(),a),a,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns=globalThis;let Qe=class extends Mn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=yl(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Dn}};Qe._$litElement$=!0,Qe.finalized=!0,ns.litElementHydrateSupport?.({LitElement:Qe});const wl=ns.litElementPolyfillSupport;wl?.({LitElement:Qe});(ns.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vl={attribute:!0,type:String,converter:Wr,reflect:!1,hasChanged:Zi},xl=(e=vl,t,r)=>{const{kind:i,metadata:n}=r;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),i==="accessor"){const{name:c}=r;return{set(d){const m=t.get.call(this);t.set.call(this,d),this.requestUpdate(c,m,e,!0,d)},init(d){return d!==void 0&&this.C(c,void 0,e,d),d}}}if(i==="setter"){const{name:c}=r;return function(d){const m=this[c];t.call(this,d),this.requestUpdate(c,m,e,!0,d)}}throw Error("Unsupported decorator location: "+i)};function Gt(e){return(t,r)=>typeof r=="object"?xl(e,t,r):((i,n,a)=>{const c=n.hasOwnProperty(a);return n.constructor.createProperty(a,i),c?Object.getOwnPropertyDescriptor(n,a):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Z(e){return Gt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $l=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wn(e,t){return(r,i,n)=>{const a=c=>c.renderRoot?.querySelector(e)??null;return $l(r,i,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kl={CHILD:2},Cl=e=>(...t)=>({_$litDirective$:e,values:t});class El{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ni extends El{constructor(t){if(super(t),this.it=Fe,t.type!==kl.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Fe||t==null)return this._t=void 0,this.it=t;if(t===Dn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Ni.directiveName="unsafeHTML",Ni.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class qi extends Ni{}qi.directiveName="unsafeSVG",qi.resultType=2;const Sl=Cl(qi);var _l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Al(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nr={exports:{}},Pl=Nr.exports,Qs;function Tl(){return Qs||(Qs=1,(function(e,t){(function(r,i){e.exports=i()})(Pl,function(){var r=function(s,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,u){l.__proto__=u}||function(l,u){for(var h in u)Object.prototype.hasOwnProperty.call(u,h)&&(l[h]=u[h])})(s,o)},i=function(){return(i=Object.assign||function(s){for(var o,l=1,u=arguments.length;l<u;l++)for(var h in o=arguments[l])Object.prototype.hasOwnProperty.call(o,h)&&(s[h]=o[h]);return s}).apply(this,arguments)};function n(s,o,l){for(var u,h=0,p=o.length;h<p;h++)!u&&h in o||((u=u||Array.prototype.slice.call(o,0,h))[h]=o[h]);return s.concat(u||Array.prototype.slice.call(o))}var a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:_l,c=Object.keys,d=Array.isArray;function m(s,o){return typeof o!="object"||c(o).forEach(function(l){s[l]=o[l]}),s}typeof Promise>"u"||a.Promise||(a.Promise=Promise);var v=Object.getPrototypeOf,A={}.hasOwnProperty;function $(s,o){return A.call(s,o)}function R(s,o){typeof o=="function"&&(o=o(v(s))),(typeof Reflect>"u"?c:Reflect.ownKeys)(o).forEach(function(l){N(s,l,o[l])})}var B=Object.defineProperty;function N(s,o,l,u){B(s,o,m(l&&$(l,"get")&&typeof l.get=="function"?{get:l.get,set:l.set,configurable:!0}:{value:l,configurable:!0,writable:!0},u))}function W(s){return{from:function(o){return s.prototype=Object.create(o.prototype),N(s.prototype,"constructor",s),{extend:R.bind(null,s.prototype)}}}}var ce=Object.getOwnPropertyDescriptor,de=[].slice;function De(s,o,l){return de.call(s,o,l)}function Be(s,o){return o(s)}function ie(s){if(!s)throw new Error("Assertion Failed")}function pe(s){a.setImmediate?setImmediate(s):setTimeout(s,0)}function Ce(s,o){if(typeof o=="string"&&$(s,o))return s[o];if(!o)return s;if(typeof o!="string"){for(var l=[],u=0,h=o.length;u<h;++u){var p=Ce(s,o[u]);l.push(p)}return l}var g=o.indexOf(".");if(g!==-1){var w=s[o.substr(0,g)];return w==null?void 0:Ce(w,o.substr(g+1))}}function be(s,o,l){if(s&&o!==void 0&&!("isFrozen"in Object&&Object.isFrozen(s)))if(typeof o!="string"&&"length"in o){ie(typeof l!="string"&&"length"in l);for(var u=0,h=o.length;u<h;++u)be(s,o[u],l[u])}else{var p,g,w=o.indexOf(".");w!==-1?(p=o.substr(0,w),(g=o.substr(w+1))===""?l===void 0?d(s)&&!isNaN(parseInt(p))?s.splice(p,1):delete s[p]:s[p]=l:be(w=!(w=s[p])||!$(s,p)?s[p]={}:w,g,l)):l===void 0?d(s)&&!isNaN(parseInt(o))?s.splice(o,1):delete s[o]:s[o]=l}}function yt(s){var o,l={};for(o in s)$(s,o)&&(l[o]=s[o]);return l}var xt=[].concat;function zt(s){return xt.apply([],s)}var Zt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(zt([8,16,32,64].map(function(s){return["Int","Uint","Float"].map(function(o){return o+s+"Array"})}))).filter(function(s){return a[s]}),f=new Set(Zt.map(function(s){return a[s]})),y=null;function P(s){return y=new WeakMap,s=(function o(l){if(!l||typeof l!="object")return l;var u=y.get(l);if(u)return u;if(d(l)){u=[],y.set(l,u);for(var h=0,p=l.length;h<p;++h)u.push(o(l[h]))}else if(f.has(l.constructor))u=l;else{var g,w=v(l);for(g in u=w===Object.prototype?{}:Object.create(w),y.set(l,u),l)$(l,g)&&(u[g]=o(l[g]))}return u})(s),y=null,s}var b={}.toString;function k(s){return b.call(s).slice(8,-1)}var oe=typeof Symbol<"u"?Symbol.iterator:"@@iterator",ue=typeof oe=="symbol"?function(s){var o;return s!=null&&(o=s[oe])&&o.apply(s)}:function(){return null};function q(s,o){return o=s.indexOf(o),0<=o&&s.splice(o,1),0<=o}var V={};function He(s){var o,l,u,h;if(arguments.length===1){if(d(s))return s.slice();if(this===V&&typeof s=="string")return[s];if(h=ue(s)){for(l=[];!(u=h.next()).done;)l.push(u.value);return l}if(s==null)return[s];if(typeof(o=s.length)!="number")return[s];for(l=new Array(o);o--;)l[o]=s[o];return l}for(o=arguments.length,l=new Array(o);o--;)l[o]=arguments[o];return l}var rt=typeof Symbol<"u"?function(s){return s[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},$e=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],jt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat($e),Wt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Me(s,o){this.name=s,this.message=o}function Re(s,o){return s+". Errors: "+Object.keys(o).map(function(l){return o[l].toString()}).filter(function(l,u,h){return h.indexOf(l)===u}).join(`
`)}function ve(s,o,l,u){this.failures=o,this.failedKeys=u,this.successCount=l,this.message=Re(s,o)}function _e(s,o){this.name="BulkError",this.failures=Object.keys(o).map(function(l){return o[l]}),this.failuresByPos=o,this.message=Re(s,this.failures)}W(Me).from(Error).extend({toString:function(){return this.name+": "+this.message}}),W(ve).from(Me),W(_e).from(Me);var Ke=jt.reduce(function(s,o){return s[o]=o+"Error",s},{}),Ee=Me,ee=jt.reduce(function(s,o){var l=o+"Error";function u(h,p){this.name=l,h?typeof h=="string"?(this.message="".concat(h).concat(p?`
 `+p:""),this.inner=p||null):typeof h=="object"&&(this.message="".concat(h.name," ").concat(h.message),this.inner=h):(this.message=Wt[o]||l,this.inner=null)}return W(u).from(Ee),s[o]=u,s},{});ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError;var Ve=$e.reduce(function(s,o){return s[o+"Error"]=ee[o],s},{}),ze=jt.reduce(function(s,o){return["Syntax","Type","Range"].indexOf(o)===-1&&(s[o+"Error"]=ee[o]),s},{});function le(){}function ge(s){return s}function Ct(s,o){return s==null||s===ge?o:function(l){return o(s(l))}}function se(s,o){return function(){s.apply(this,arguments),o.apply(this,arguments)}}function Ye(s,o){return s===le?o:function(){var l=s.apply(this,arguments);l!==void 0&&(arguments[0]=l);var u=this.onsuccess,h=this.onerror;this.onsuccess=null,this.onerror=null;var p=o.apply(this,arguments);return u&&(this.onsuccess=this.onsuccess?se(u,this.onsuccess):u),h&&(this.onerror=this.onerror?se(h,this.onerror):h),p!==void 0?p:l}}function cn(s,o){return s===le?o:function(){s.apply(this,arguments);var l=this.onsuccess,u=this.onerror;this.onsuccess=this.onerror=null,o.apply(this,arguments),l&&(this.onsuccess=this.onsuccess?se(l,this.onsuccess):l),u&&(this.onerror=this.onerror?se(u,this.onerror):u)}}function It(s,o){return s===le?o:function(l){var u=s.apply(this,arguments);m(l,u);var h=this.onsuccess,p=this.onerror;return this.onsuccess=null,this.onerror=null,l=o.apply(this,arguments),h&&(this.onsuccess=this.onsuccess?se(h,this.onsuccess):h),p&&(this.onerror=this.onerror?se(p,this.onerror):p),u===void 0?l===void 0?void 0:l:m(u,l)}}function Ge(s,o){return s===le?o:function(){return o.apply(this,arguments)!==!1&&s.apply(this,arguments)}}function Et(s,o){return s===le?o:function(){var l=s.apply(this,arguments);if(l&&typeof l.then=="function"){for(var u=this,h=arguments.length,p=new Array(h);h--;)p[h]=arguments[h];return l.then(function(){return o.apply(u,p)})}return o.apply(this,arguments)}}ze.ModifyError=ve,ze.DexieError=Me,ze.BulkError=_e;var Te=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ne(s){Te=s}var wt={},Je=100,Zt=typeof Promise>"u"?[]:(function(){var s=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[s,v(s),s];var o=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[o,v(o),s]})(),$e=Zt[0],jt=Zt[1],Zt=Zt[2],jt=jt&&jt.then,xe=$e&&$e.constructor,St=!!Zt,qe=function(s,o){et.push([s,o]),ot&&(queueMicrotask(he),ot=!1)},pt=!0,ot=!0,Ze=[],Ie=[],ae=ge,Xe={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:le,pgp:!1,env:{},finalize:le},X=Xe,et=[],lt=0,$t=[];function G(s){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var o=this._PSD=X;if(typeof s!="function"){if(s!==wt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&at(this,this._value))}this._state=null,this._value=null,++o.ref,(function l(u,h){try{h(function(p){if(u._state===null){if(p===u)throw new TypeError("A promise cannot be resolved with itself.");var g=u._lib&&Oe();p&&typeof p.then=="function"?l(u,function(w,C){p instanceof G?p._then(w,C):p.then(w,C)}):(u._state=!0,u._value=p,un(u)),g&&Ue()}},at.bind(null,u))}catch(p){at(u,p)}})(this,s)}var Ht={get:function(){var s=X,o=mr;function l(u,h){var p=this,g=!s.global&&(s!==X||o!==mr),w=g&&!hn(),C=new G(function(S,D){ne(p,new Qt(ds(u,s,g,w),ds(h,s,g,w),S,D,s))});return this._consoleTask&&(C._consoleTask=this._consoleTask),C}return l.prototype=wt,l},set:function(s){N(this,"then",s&&s.prototype===wt?Ht:{get:function(){return s},set:Ht.set})}};function Qt(s,o,l,u,h){this.onFulfilled=typeof s=="function"?s:null,this.onRejected=typeof o=="function"?o:null,this.resolve=l,this.reject=u,this.psd=h}function at(s,o){var l,u;Ie.push(o),s._state===null&&(l=s._lib&&Oe(),o=ae(o),s._state=!1,s._value=o,u=s,Ze.some(function(h){return h._value===u._value})||Ze.push(u),un(s),l&&Ue())}function un(s){var o=s._listeners;s._listeners=[];for(var l=0,u=o.length;l<u;++l)ne(s,o[l]);var h=s._PSD;--h.ref||h.finalize(),lt===0&&(++lt,qe(function(){--lt==0&&Ae()},[]))}function ne(s,o){if(s._state!==null){var l=s._state?o.onFulfilled:o.onRejected;if(l===null)return(s._state?o.resolve:o.reject)(s._value);++o.psd.ref,++lt,qe(Se,[l,s,o])}else s._listeners.push(o)}function Se(s,o,l){try{var u,h=o._value;!o._state&&Ie.length&&(Ie=[]),u=Te&&o._consoleTask?o._consoleTask.run(function(){return s(h)}):s(h),o._state||Ie.indexOf(h)!==-1||(function(p){for(var g=Ze.length;g;)if(Ze[--g]._value===p._value)return Ze.splice(g,1)})(o),l.resolve(u)}catch(p){l.reject(p)}finally{--lt==0&&Ae(),--l.psd.ref||l.psd.finalize()}}function he(){vn(Xe,function(){Oe()&&Ue()})}function Oe(){var s=pt;return ot=pt=!1,s}function Ue(){var s,o,l;do for(;0<et.length;)for(s=et,et=[],l=s.length,o=0;o<l;++o){var u=s[o];u[0].apply(null,u[1])}while(0<et.length);ot=pt=!0}function Ae(){var s=Ze;Ze=[],s.forEach(function(u){u._PSD.onunhandled.call(null,u._value,u)});for(var o=$t.slice(0),l=o.length;l;)o[--l]()}function Lt(s){return new G(wt,!1,s)}function Le(s,o){var l=X;return function(){var u=Oe(),h=X;try{return fn(l,!0),s.apply(this,arguments)}catch(p){o&&o(p)}finally{fn(h,!1),u&&Ue()}}}R(G.prototype,{then:Ht,_then:function(s,o){ne(this,new Qt(null,null,s,o,X))},catch:function(s){if(arguments.length===1)return this.then(null,s);var o=s,l=arguments[1];return typeof o=="function"?this.then(null,function(u){return(u instanceof o?l:Lt)(u)}):this.then(null,function(u){return(u&&u.name===o?l:Lt)(u)})},finally:function(s){return this.then(function(o){return G.resolve(s()).then(function(){return o})},function(o){return G.resolve(s()).then(function(){return Lt(o)})})},timeout:function(s,o){var l=this;return s<1/0?new G(function(u,h){var p=setTimeout(function(){return h(new ee.Timeout(o))},s);l.then(u,h).finally(clearTimeout.bind(null,p))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&N(G.prototype,Symbol.toStringTag,"Dexie.Promise"),Xe.env=us(),R(G,{all:function(){var s=He.apply(null,arguments).map(gr);return new G(function(o,l){s.length===0&&o([]);var u=s.length;s.forEach(function(h,p){return G.resolve(h).then(function(g){s[p]=g,--u||o(s)},l)})})},resolve:function(s){return s instanceof G?s:s&&typeof s.then=="function"?new G(function(o,l){s.then(o,l)}):new G(wt,!0,s)},reject:Lt,race:function(){var s=He.apply(null,arguments).map(gr);return new G(function(o,l){s.map(function(u){return G.resolve(u).then(o,l)})})},PSD:{get:function(){return X},set:function(s){return X=s}},totalEchoes:{get:function(){return mr}},newPSD:dn,usePSD:vn,scheduler:{get:function(){return qe},set:function(s){qe=s}},rejectionMapper:{get:function(){return ae},set:function(s){ae=s}},follow:function(s,o){return new G(function(l,u){return dn(function(h,p){var g=X;g.unhandleds=[],g.onunhandled=p,g.finalize=se(function(){var w,C=this;w=function(){C.unhandleds.length===0?h():p(C.unhandleds[0])},$t.push(function S(){w(),$t.splice($t.indexOf(S),1)}),++lt,qe(function(){--lt==0&&Ae()},[])},g.finalize),s()},o,l,u)})}}),xe&&(xe.allSettled&&N(G,"allSettled",function(){var s=He.apply(null,arguments).map(gr);return new G(function(o){s.length===0&&o([]);var l=s.length,u=new Array(l);s.forEach(function(h,p){return G.resolve(h).then(function(g){return u[p]={status:"fulfilled",value:g}},function(g){return u[p]={status:"rejected",reason:g}}).then(function(){return--l||o(u)})})})}),xe.any&&typeof AggregateError<"u"&&N(G,"any",function(){var s=He.apply(null,arguments).map(gr);return new G(function(o,l){s.length===0&&l(new AggregateError([]));var u=s.length,h=new Array(u);s.forEach(function(p,g){return G.resolve(p).then(function(w){return o(w)},function(w){h[g]=w,--u||l(new AggregateError(h))})})})}),xe.withResolvers&&(G.withResolvers=xe.withResolvers));var ct={awaits:0,echoes:0,id:0},Sa=0,fr=[],pr=0,mr=0,_a=0;function dn(s,o,l,u){var h=X,p=Object.create(h);return p.parent=h,p.ref=0,p.global=!1,p.id=++_a,Xe.env,p.env=St?{Promise:G,PromiseProp:{value:G,configurable:!0,writable:!0},all:G.all,race:G.race,allSettled:G.allSettled,any:G.any,resolve:G.resolve,reject:G.reject}:{},o&&m(p,o),++h.ref,p.finalize=function(){--this.parent.ref||this.parent.finalize()},u=vn(p,s,l,u),p.ref===0&&p.finalize(),u}function Rn(){return ct.id||(ct.id=++Sa),++ct.awaits,ct.echoes+=Je,ct.id}function hn(){return!!ct.awaits&&(--ct.awaits==0&&(ct.id=0),ct.echoes=ct.awaits*Je,!0)}function gr(s){return ct.echoes&&s&&s.constructor===xe?(Rn(),s.then(function(o){return hn(),o},function(o){return hn(),tt(o)})):s}function Aa(){var s=fr[fr.length-1];fr.pop(),fn(s,!1)}function fn(s,o){var l,u=X;(o?!ct.echoes||pr++&&s===X:!pr||--pr&&s===X)||queueMicrotask(o?function(h){++mr,ct.echoes&&--ct.echoes!=0||(ct.echoes=ct.awaits=ct.id=0),fr.push(X),fn(h,!0)}.bind(null,s):Aa),s!==X&&(X=s,u===Xe&&(Xe.env=us()),St&&(l=Xe.env.Promise,o=s.env,(u.global||s.global)&&(Object.defineProperty(a,"Promise",o.PromiseProp),l.all=o.all,l.race=o.race,l.resolve=o.resolve,l.reject=o.reject,o.allSettled&&(l.allSettled=o.allSettled),o.any&&(l.any=o.any))))}function us(){var s=a.Promise;return St?{Promise:s,PromiseProp:Object.getOwnPropertyDescriptor(a,"Promise"),all:s.all,race:s.race,allSettled:s.allSettled,any:s.any,resolve:s.resolve,reject:s.reject}:{}}function vn(s,o,l,u,h){var p=X;try{return fn(s,!0),o(l,u,h)}finally{fn(p,!1)}}function ds(s,o,l,u){return typeof s!="function"?s:function(){var h=X;l&&Rn(),fn(o,!0);try{return s.apply(this,arguments)}finally{fn(h,!1),u&&queueMicrotask(hn)}}}function ai(s){Promise===xe&&ct.echoes===0?pr===0?s():enqueueNativeMicroTask(s):setTimeout(s,0)}(""+jt).indexOf("[native code]")===-1&&(Rn=hn=le);var tt=G.reject,xn="￿",Jt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",hs="String expected.",zn=[],br="__dbnames",li="readonly",ci="readwrite";function $n(s,o){return s?o?function(){return s.apply(this,arguments)&&o.apply(this,arguments)}:s:o}var fs={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function yr(s){return typeof s!="string"||/\./.test(s)?function(o){return o}:function(o){return o[s]===void 0&&s in o&&delete(o=P(o))[s],o}}function ps(){throw ee.Type()}function ke(s,o){try{var l=ms(s),u=ms(o);if(l!==u)return l==="Array"?1:u==="Array"?-1:l==="binary"?1:u==="binary"?-1:l==="string"?1:u==="string"?-1:l==="Date"?1:u!=="Date"?NaN:-1;switch(l){case"number":case"Date":case"string":return o<s?1:s<o?-1:0;case"binary":return(function(h,p){for(var g=h.length,w=p.length,C=g<w?g:w,S=0;S<C;++S)if(h[S]!==p[S])return h[S]<p[S]?-1:1;return g===w?0:g<w?-1:1})(gs(s),gs(o));case"Array":return(function(h,p){for(var g=h.length,w=p.length,C=g<w?g:w,S=0;S<C;++S){var D=ke(h[S],p[S]);if(D!==0)return D}return g===w?0:g<w?-1:1})(s,o)}}catch{}return NaN}function ms(s){var o=typeof s;return o!="object"?o:ArrayBuffer.isView(s)?"binary":(s=k(s),s==="ArrayBuffer"?"binary":s)}function gs(s){return s instanceof Uint8Array?s:ArrayBuffer.isView(s)?new Uint8Array(s.buffer,s.byteOffset,s.byteLength):new Uint8Array(s)}var bs=(We.prototype._trans=function(s,o,l){var u=this._tx||X.trans,h=this.name,p=Te&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(s==="readonly"?"read":"write"," ").concat(this.name));function g(S,D,x){if(!x.schema[h])throw new ee.NotFound("Table "+h+" not part of transaction");return o(x.idbtrans,x)}var w=Oe();try{var C=u&&u.db._novip===this.db._novip?u===X.trans?u._promise(s,g,l):dn(function(){return u._promise(s,g,l)},{trans:u,transless:X.transless||X}):(function S(D,x,F,E){if(D.idbdb&&(D._state.openComplete||X.letThrough||D._vip)){var T=D._createTransaction(x,F,D._dbSchema);try{T.create(),D._state.PR1398_maxLoop=3}catch(j){return j.name===Ke.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return S(D,x,F,E)})):tt(j)}return T._promise(x,function(j,_){return dn(function(){return X.trans=T,E(j,_,T)})}).then(function(j){if(x==="readwrite")try{T.idbtrans.commit()}catch{}return x==="readonly"?j:T._completion.then(function(){return j})})}if(D._state.openComplete)return tt(new ee.DatabaseClosed(D._state.dbOpenError));if(!D._state.isBeingOpened){if(!D._state.autoOpen)return tt(new ee.DatabaseClosed);D.open().catch(le)}return D._state.dbReadyPromise.then(function(){return S(D,x,F,E)})})(this.db,s,[this.name],g);return p&&(C._consoleTask=p,C=C.catch(function(S){return console.trace(S),tt(S)})),C}finally{w&&Ue()}},We.prototype.get=function(s,o){var l=this;return s&&s.constructor===Object?this.where(s).first(o):s==null?tt(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(u){return l.core.get({trans:u,key:s}).then(function(h){return l.hook.reading.fire(h)})}).then(o)},We.prototype.where=function(s){if(typeof s=="string")return new this.db.WhereClause(this,s);if(d(s))return new this.db.WhereClause(this,"[".concat(s.join("+"),"]"));var o=c(s);if(o.length===1)return this.where(o[0]).equals(s[o[0]]);var l=this.schema.indexes.concat(this.schema.primKey).filter(function(w){if(w.compound&&o.every(function(S){return 0<=w.keyPath.indexOf(S)})){for(var C=0;C<o.length;++C)if(o.indexOf(w.keyPath[C])===-1)return!1;return!0}return!1}).sort(function(w,C){return w.keyPath.length-C.keyPath.length})[0];if(l&&this.db._maxKey!==xn){var p=l.keyPath.slice(0,o.length);return this.where(p).equals(p.map(function(C){return s[C]}))}!l&&Te&&console.warn("The query ".concat(JSON.stringify(s)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(o.join("+"),"]"));var u=this.schema.idxByName;function h(w,C){return ke(w,C)===0}var g=o.reduce(function(x,C){var S=x[0],D=x[1],x=u[C],F=s[C];return[S||x,S||!x?$n(D,x&&x.multi?function(E){return E=Ce(E,C),d(E)&&E.some(function(T){return h(F,T)})}:function(E){return h(F,Ce(E,C))}):D]},[null,null]),p=g[0],g=g[1];return p?this.where(p.name).equals(s[p.keyPath]).filter(g):l?this.filter(g):this.where(o).equals("")},We.prototype.filter=function(s){return this.toCollection().and(s)},We.prototype.count=function(s){return this.toCollection().count(s)},We.prototype.offset=function(s){return this.toCollection().offset(s)},We.prototype.limit=function(s){return this.toCollection().limit(s)},We.prototype.each=function(s){return this.toCollection().each(s)},We.prototype.toArray=function(s){return this.toCollection().toArray(s)},We.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},We.prototype.orderBy=function(s){return new this.db.Collection(new this.db.WhereClause(this,d(s)?"[".concat(s.join("+"),"]"):s))},We.prototype.reverse=function(){return this.toCollection().reverse()},We.prototype.mapToClass=function(s){var o,l=this.db,u=this.name;function h(){return o!==null&&o.apply(this,arguments)||this}(this.schema.mappedClass=s).prototype instanceof ps&&((function(C,S){if(typeof S!="function"&&S!==null)throw new TypeError("Class extends value "+String(S)+" is not a constructor or null");function D(){this.constructor=C}r(C,S),C.prototype=S===null?Object.create(S):(D.prototype=S.prototype,new D)})(h,o=s),Object.defineProperty(h.prototype,"db",{get:function(){return l},enumerable:!1,configurable:!0}),h.prototype.table=function(){return u},s=h);for(var p=new Set,g=s.prototype;g;g=v(g))Object.getOwnPropertyNames(g).forEach(function(C){return p.add(C)});function w(C){if(!C)return C;var S,D=Object.create(s.prototype);for(S in C)if(!p.has(S))try{D[S]=C[S]}catch{}return D}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=w,this.hook("reading",w),s},We.prototype.defineClass=function(){return this.mapToClass(function(s){m(this,s)})},We.prototype.add=function(s,o){var l=this,u=this.schema.primKey,h=u.auto,p=u.keyPath,g=s;return p&&h&&(g=yr(p)(s)),this._trans("readwrite",function(w){return l.core.mutate({trans:w,type:"add",keys:o!=null?[o]:null,values:[g]})}).then(function(w){return w.numFailures?G.reject(w.failures[0]):w.lastResult}).then(function(w){if(p)try{be(s,p,w)}catch{}return w})},We.prototype.update=function(s,o){return typeof s!="object"||d(s)?this.where(":id").equals(s).modify(o):(s=Ce(s,this.schema.primKey.keyPath),s===void 0?tt(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(s).modify(o))},We.prototype.put=function(s,o){var l=this,u=this.schema.primKey,h=u.auto,p=u.keyPath,g=s;return p&&h&&(g=yr(p)(s)),this._trans("readwrite",function(w){return l.core.mutate({trans:w,type:"put",values:[g],keys:o!=null?[o]:null})}).then(function(w){return w.numFailures?G.reject(w.failures[0]):w.lastResult}).then(function(w){if(p)try{be(s,p,w)}catch{}return w})},We.prototype.delete=function(s){var o=this;return this._trans("readwrite",function(l){return o.core.mutate({trans:l,type:"delete",keys:[s]})}).then(function(l){return l.numFailures?G.reject(l.failures[0]):void 0})},We.prototype.clear=function(){var s=this;return this._trans("readwrite",function(o){return s.core.mutate({trans:o,type:"deleteRange",range:fs})}).then(function(o){return o.numFailures?G.reject(o.failures[0]):void 0})},We.prototype.bulkGet=function(s){var o=this;return this._trans("readonly",function(l){return o.core.getMany({keys:s,trans:l}).then(function(u){return u.map(function(h){return o.hook.reading.fire(h)})})})},We.prototype.bulkAdd=function(s,o,l){var u=this,h=Array.isArray(o)?o:void 0,p=(l=l||(h?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(g){var S=u.schema.primKey,w=S.auto,S=S.keyPath;if(S&&h)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(h&&h.length!==s.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var C=s.length,S=S&&w?s.map(yr(S)):s;return u.core.mutate({trans:g,type:"add",keys:h,values:S,wantResults:p}).then(function(T){var x=T.numFailures,F=T.results,E=T.lastResult,T=T.failures;if(x===0)return p?F:E;throw new _e("".concat(u.name,".bulkAdd(): ").concat(x," of ").concat(C," operations failed"),T)})})},We.prototype.bulkPut=function(s,o,l){var u=this,h=Array.isArray(o)?o:void 0,p=(l=l||(h?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(g){var S=u.schema.primKey,w=S.auto,S=S.keyPath;if(S&&h)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(h&&h.length!==s.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var C=s.length,S=S&&w?s.map(yr(S)):s;return u.core.mutate({trans:g,type:"put",keys:h,values:S,wantResults:p}).then(function(T){var x=T.numFailures,F=T.results,E=T.lastResult,T=T.failures;if(x===0)return p?F:E;throw new _e("".concat(u.name,".bulkPut(): ").concat(x," of ").concat(C," operations failed"),T)})})},We.prototype.bulkUpdate=function(s){var o=this,l=this.core,u=s.map(function(g){return g.key}),h=s.map(function(g){return g.changes}),p=[];return this._trans("readwrite",function(g){return l.getMany({trans:g,keys:u,cache:"clone"}).then(function(w){var C=[],S=[];s.forEach(function(x,F){var E=x.key,T=x.changes,j=w[F];if(j){for(var _=0,z=Object.keys(T);_<z.length;_++){var I=z[_],L=T[I];if(I===o.schema.primKey.keyPath){if(ke(L,E)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else be(j,I,L)}p.push(F),C.push(E),S.push(j)}});var D=C.length;return l.mutate({trans:g,type:"put",keys:C,values:S,updates:{keys:u,changeSpecs:h}}).then(function(x){var F=x.numFailures,E=x.failures;if(F===0)return D;for(var T=0,j=Object.keys(E);T<j.length;T++){var _,z=j[T],I=p[Number(z)];I!=null&&(_=E[z],delete E[z],E[I]=_)}throw new _e("".concat(o.name,".bulkUpdate(): ").concat(F," of ").concat(D," operations failed"),E)})})})},We.prototype.bulkDelete=function(s){var o=this,l=s.length;return this._trans("readwrite",function(u){return o.core.mutate({trans:u,type:"delete",keys:s})}).then(function(g){var h=g.numFailures,p=g.lastResult,g=g.failures;if(h===0)return p;throw new _e("".concat(o.name,".bulkDelete(): ").concat(h," of ").concat(l," operations failed"),g)})},We);function We(){}function Vn(s){function o(g,w){if(w){for(var C=arguments.length,S=new Array(C-1);--C;)S[C-1]=arguments[C];return l[g].subscribe.apply(null,S),s}if(typeof g=="string")return l[g]}var l={};o.addEventType=p;for(var u=1,h=arguments.length;u<h;++u)p(arguments[u]);return o;function p(g,w,C){if(typeof g!="object"){var S;w=w||Ge;var D={subscribers:[],fire:C=C||le,subscribe:function(x){D.subscribers.indexOf(x)===-1&&(D.subscribers.push(x),D.fire=w(D.fire,x))},unsubscribe:function(x){D.subscribers=D.subscribers.filter(function(F){return F!==x}),D.fire=D.subscribers.reduce(w,C)}};return l[g]=o[g]=D}c(S=g).forEach(function(x){var F=S[x];if(d(F))p(x,S[x][0],S[x][1]);else{if(F!=="asap")throw new ee.InvalidArgument("Invalid event config");var E=p(x,ge,function(){for(var T=arguments.length,j=new Array(T);T--;)j[T]=arguments[T];E.subscribers.forEach(function(_){pe(function(){_.apply(null,j)})})})}})}}function Yn(s,o){return W(o).from({prototype:s}),o}function In(s,o){return!(s.filter||s.algorithm||s.or)&&(o?s.justLimit:!s.replayFilter)}function ui(s,o){s.filter=$n(s.filter,o)}function di(s,o,l){var u=s.replayFilter;s.replayFilter=u?function(){return $n(u(),o())}:o,s.justLimit=l&&!u}function wr(s,o){if(s.isPrimKey)return o.primaryKey;var l=o.getIndexByKeyPath(s.index);if(!l)throw new ee.Schema("KeyPath "+s.index+" on object store "+o.name+" is not indexed");return l}function ys(s,o,l){var u=wr(s,o.schema);return o.openCursor({trans:l,values:!s.keysOnly,reverse:s.dir==="prev",unique:!!s.unique,query:{index:u,range:s.range}})}function vr(s,o,l,u){var h=s.replayFilter?$n(s.filter,s.replayFilter()):s.filter;if(s.or){var p={},g=function(w,C,S){var D,x;h&&!h(C,S,function(F){return C.stop(F)},function(F){return C.fail(F)})||((x=""+(D=C.primaryKey))=="[object ArrayBuffer]"&&(x=""+new Uint8Array(D)),$(p,x)||(p[x]=!0,o(w,C,S)))};return Promise.all([s.or._iterate(g,l),ws(ys(s,u,l),s.algorithm,g,!s.keysOnly&&s.valueMapper)])}return ws(ys(s,u,l),$n(s.algorithm,h),o,!s.keysOnly&&s.valueMapper)}function ws(s,o,l,u){var h=Le(u?function(p,g,w){return l(u(p),g,w)}:l);return s.then(function(p){if(p)return p.start(function(){var g=function(){return p.continue()};o&&!o(p,function(w){return g=w},function(w){p.stop(w),g=le},function(w){p.fail(w),g=le})||h(p.value,p,function(w){return g=w}),g()})})}var Zt=Symbol(),Xn=(vs.prototype.execute=function(s){if(this.add!==void 0){var o=this.add;if(d(o))return n(n([],d(s)?s:[],!0),o).sort();if(typeof o=="number")return(Number(s)||0)+o;if(typeof o=="bigint")try{return BigInt(s)+o}catch{return BigInt(0)+o}throw new TypeError("Invalid term ".concat(o))}if(this.remove!==void 0){var l=this.remove;if(d(l))return d(s)?s.filter(function(u){return!l.includes(u)}).sort():[];if(typeof l=="number")return Number(s)-l;if(typeof l=="bigint")try{return BigInt(s)-l}catch{return BigInt(0)-l}throw new TypeError("Invalid subtrahend ".concat(l))}return o=(o=this.replacePrefix)===null||o===void 0?void 0:o[0],o&&typeof s=="string"&&s.startsWith(o)?this.replacePrefix[1]+s.substring(o.length):s},vs);function vs(s){Object.assign(this,s)}var Pa=(Pe.prototype._read=function(s,o){var l=this._ctx;return l.error?l.table._trans(null,tt.bind(null,l.error)):l.table._trans("readonly",s).then(o)},Pe.prototype._write=function(s){var o=this._ctx;return o.error?o.table._trans(null,tt.bind(null,o.error)):o.table._trans("readwrite",s,"locked")},Pe.prototype._addAlgorithm=function(s){var o=this._ctx;o.algorithm=$n(o.algorithm,s)},Pe.prototype._iterate=function(s,o){return vr(this._ctx,s,o,this._ctx.table.core)},Pe.prototype.clone=function(s){var o=Object.create(this.constructor.prototype),l=Object.create(this._ctx);return s&&m(l,s),o._ctx=l,o},Pe.prototype.raw=function(){return this._ctx.valueMapper=null,this},Pe.prototype.each=function(s){var o=this._ctx;return this._read(function(l){return vr(o,s,l,o.table.core)})},Pe.prototype.count=function(s){var o=this;return this._read(function(l){var u=o._ctx,h=u.table.core;if(In(u,!0))return h.count({trans:l,query:{index:wr(u,h.schema),range:u.range}}).then(function(g){return Math.min(g,u.limit)});var p=0;return vr(u,function(){return++p,!1},l,h).then(function(){return p})}).then(s)},Pe.prototype.sortBy=function(s,o){var l=s.split(".").reverse(),u=l[0],h=l.length-1;function p(C,S){return S?p(C[l[S]],S-1):C[u]}var g=this._ctx.dir==="next"?1:-1;function w(C,S){return ke(p(C,h),p(S,h))*g}return this.toArray(function(C){return C.sort(w)}).then(o)},Pe.prototype.toArray=function(s){var o=this;return this._read(function(l){var u=o._ctx;if(u.dir==="next"&&In(u,!0)&&0<u.limit){var h=u.valueMapper,p=wr(u,u.table.core.schema);return u.table.core.query({trans:l,limit:u.limit,values:!0,query:{index:p,range:u.range}}).then(function(w){return w=w.result,h?w.map(h):w})}var g=[];return vr(u,function(w){return g.push(w)},l,u.table.core).then(function(){return g})},s)},Pe.prototype.offset=function(s){var o=this._ctx;return s<=0||(o.offset+=s,In(o)?di(o,function(){var l=s;return function(u,h){return l===0||(l===1?--l:h(function(){u.advance(l),l=0}),!1)}}):di(o,function(){var l=s;return function(){return--l<0}})),this},Pe.prototype.limit=function(s){return this._ctx.limit=Math.min(this._ctx.limit,s),di(this._ctx,function(){var o=s;return function(l,u,h){return--o<=0&&u(h),0<=o}},!0),this},Pe.prototype.until=function(s,o){return ui(this._ctx,function(l,u,h){return!s(l.value)||(u(h),o)}),this},Pe.prototype.first=function(s){return this.limit(1).toArray(function(o){return o[0]}).then(s)},Pe.prototype.last=function(s){return this.reverse().first(s)},Pe.prototype.filter=function(s){var o;return ui(this._ctx,function(l){return s(l.value)}),(o=this._ctx).isMatch=$n(o.isMatch,s),this},Pe.prototype.and=function(s){return this.filter(s)},Pe.prototype.or=function(s){return new this.db.WhereClause(this._ctx.table,s,this)},Pe.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Pe.prototype.desc=function(){return this.reverse()},Pe.prototype.eachKey=function(s){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){s(u.key,u)})},Pe.prototype.eachUniqueKey=function(s){return this._ctx.unique="unique",this.eachKey(s)},Pe.prototype.eachPrimaryKey=function(s){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){s(u.primaryKey,u)})},Pe.prototype.keys=function(s){var o=this._ctx;o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,h){l.push(h.key)}).then(function(){return l}).then(s)},Pe.prototype.primaryKeys=function(s){var o=this._ctx;if(o.dir==="next"&&In(o,!0)&&0<o.limit)return this._read(function(u){var h=wr(o,o.table.core.schema);return o.table.core.query({trans:u,values:!1,limit:o.limit,query:{index:h,range:o.range}})}).then(function(u){return u.result}).then(s);o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,h){l.push(h.primaryKey)}).then(function(){return l}).then(s)},Pe.prototype.uniqueKeys=function(s){return this._ctx.unique="unique",this.keys(s)},Pe.prototype.firstKey=function(s){return this.limit(1).keys(function(o){return o[0]}).then(s)},Pe.prototype.lastKey=function(s){return this.reverse().firstKey(s)},Pe.prototype.distinct=function(){var s=this._ctx,s=s.index&&s.table.schema.idxByName[s.index];if(!s||!s.multi)return this;var o={};return ui(this._ctx,function(h){var u=h.primaryKey.toString(),h=$(o,u);return o[u]=!0,!h}),this},Pe.prototype.modify=function(s){var o=this,l=this._ctx;return this._write(function(u){var h,p,g;g=typeof s=="function"?s:(h=c(s),p=h.length,function(_){for(var z=!1,I=0;I<p;++I){var L=h[I],M=s[L],H=Ce(_,L);M instanceof Xn?(be(_,L,M.execute(H)),z=!0):H!==M&&(be(_,L,M),z=!0)}return z});var w=l.table.core,x=w.schema.primaryKey,C=x.outbound,S=x.extractKey,D=200,x=o.db._options.modifyChunkSize;x&&(D=typeof x=="object"?x[w.name]||x["*"]||200:x);function F(_,L){var I=L.failures,L=L.numFailures;T+=_-L;for(var M=0,H=c(I);M<H.length;M++){var J=H[M];E.push(I[J])}}var E=[],T=0,j=[];return o.clone().primaryKeys().then(function(_){function z(L){var M=Math.min(D,_.length-L);return w.getMany({trans:u,keys:_.slice(L,L+M),cache:"immutable"}).then(function(H){for(var J=[],K=[],Y=C?[]:null,te=[],Q=0;Q<M;++Q){var re=H[Q],me={value:P(re),primKey:_[L+Q]};g.call(me,me.value,me)!==!1&&(me.value==null?te.push(_[L+Q]):C||ke(S(re),S(me.value))===0?(K.push(me.value),C&&Y.push(_[L+Q])):(te.push(_[L+Q]),J.push(me.value)))}return Promise.resolve(0<J.length&&w.mutate({trans:u,type:"add",values:J}).then(function(ye){for(var we in ye.failures)te.splice(parseInt(we),1);F(J.length,ye)})).then(function(){return(0<K.length||I&&typeof s=="object")&&w.mutate({trans:u,type:"put",keys:Y,values:K,criteria:I,changeSpec:typeof s!="function"&&s,isAdditionalChunk:0<L}).then(function(ye){return F(K.length,ye)})}).then(function(){return(0<te.length||I&&s===hi)&&w.mutate({trans:u,type:"delete",keys:te,criteria:I,isAdditionalChunk:0<L}).then(function(ye){return F(te.length,ye)})}).then(function(){return _.length>L+M&&z(L+D)})})}var I=In(l)&&l.limit===1/0&&(typeof s!="function"||s===hi)&&{index:l.index,range:l.range};return z(0).then(function(){if(0<E.length)throw new ve("Error modifying one or more objects",E,T,j);return _.length})})})},Pe.prototype.delete=function(){var s=this._ctx,o=s.range;return In(s)&&(s.isPrimKey||o.type===3)?this._write(function(l){var u=s.table.core.schema.primaryKey,h=o;return s.table.core.count({trans:l,query:{index:u,range:h}}).then(function(p){return s.table.core.mutate({trans:l,type:"deleteRange",range:h}).then(function(g){var w=g.failures;if(g.lastResult,g.results,g=g.numFailures,g)throw new ve("Could not delete some values",Object.keys(w).map(function(C){return w[C]}),p-g);return p-g})})}):this.modify(hi)},Pe);function Pe(){}var hi=function(s,o){return o.value=null};function Ta(s,o){return s<o?-1:s===o?0:1}function Da(s,o){return o<s?-1:s===o?0:1}function _t(s,o,l){return s=s instanceof $s?new s.Collection(s):s,s._ctx.error=new(l||TypeError)(o),s}function Ln(s){return new s.Collection(s,function(){return xs("")}).limit(0)}function xr(s,o,l,u){var h,p,g,w,C,S,D,x=l.length;if(!l.every(function(T){return typeof T=="string"}))return _t(s,hs);function F(T){h=T==="next"?function(_){return _.toUpperCase()}:function(_){return _.toLowerCase()},p=T==="next"?function(_){return _.toLowerCase()}:function(_){return _.toUpperCase()},g=T==="next"?Ta:Da;var j=l.map(function(_){return{lower:p(_),upper:h(_)}}).sort(function(_,z){return g(_.lower,z.lower)});w=j.map(function(_){return _.upper}),C=j.map(function(_){return _.lower}),D=(S=T)==="next"?"":u}F("next"),s=new s.Collection(s,function(){return pn(w[0],C[x-1]+u)}),s._ondirectionchange=function(T){F(T)};var E=0;return s._addAlgorithm(function(T,j,_){var z=T.key;if(typeof z!="string")return!1;var I=p(z);if(o(I,C,E))return!0;for(var L=null,M=E;M<x;++M){var H=(function(J,K,Y,te,Q,re){for(var me=Math.min(J.length,te.length),ye=-1,we=0;we<me;++we){var At=K[we];if(At!==te[we])return Q(J[we],Y[we])<0?J.substr(0,we)+Y[we]+Y.substr(we+1):Q(J[we],te[we])<0?J.substr(0,we)+te[we]+Y.substr(we+1):0<=ye?J.substr(0,ye)+K[ye]+Y.substr(ye+1):null;Q(J[we],At)<0&&(ye=we)}return me<te.length&&re==="next"?J+Y.substr(J.length):me<J.length&&re==="prev"?J.substr(0,Y.length):ye<0?null:J.substr(0,ye)+te[ye]+Y.substr(ye+1)})(z,I,w[M],C[M],g,S);H===null&&L===null?E=M+1:(L===null||0<g(L,H))&&(L=H)}return j(L!==null?function(){T.continue(L+D)}:_),!1}),s}function pn(s,o,l,u){return{type:2,lower:s,upper:o,lowerOpen:l,upperOpen:u}}function xs(s){return{type:1,lower:s,upper:s}}var $s=(Object.defineProperty(ut.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ut.prototype.between=function(s,o,l,u){l=l!==!1,u=u===!0;try{return 0<this._cmp(s,o)||this._cmp(s,o)===0&&(l||u)&&(!l||!u)?Ln(this):new this.Collection(this,function(){return pn(s,o,!l,!u)})}catch{return _t(this,Jt)}},ut.prototype.equals=function(s){return s==null?_t(this,Jt):new this.Collection(this,function(){return xs(s)})},ut.prototype.above=function(s){return s==null?_t(this,Jt):new this.Collection(this,function(){return pn(s,void 0,!0)})},ut.prototype.aboveOrEqual=function(s){return s==null?_t(this,Jt):new this.Collection(this,function(){return pn(s,void 0,!1)})},ut.prototype.below=function(s){return s==null?_t(this,Jt):new this.Collection(this,function(){return pn(void 0,s,!1,!0)})},ut.prototype.belowOrEqual=function(s){return s==null?_t(this,Jt):new this.Collection(this,function(){return pn(void 0,s)})},ut.prototype.startsWith=function(s){return typeof s!="string"?_t(this,hs):this.between(s,s+xn,!0,!0)},ut.prototype.startsWithIgnoreCase=function(s){return s===""?this.startsWith(s):xr(this,function(o,l){return o.indexOf(l[0])===0},[s],xn)},ut.prototype.equalsIgnoreCase=function(s){return xr(this,function(o,l){return o===l[0]},[s],"")},ut.prototype.anyOfIgnoreCase=function(){var s=He.apply(V,arguments);return s.length===0?Ln(this):xr(this,function(o,l){return l.indexOf(o)!==-1},s,"")},ut.prototype.startsWithAnyOfIgnoreCase=function(){var s=He.apply(V,arguments);return s.length===0?Ln(this):xr(this,function(o,l){return l.some(function(u){return o.indexOf(u)===0})},s,xn)},ut.prototype.anyOf=function(){var s=this,o=He.apply(V,arguments),l=this._cmp;try{o.sort(l)}catch{return _t(this,Jt)}if(o.length===0)return Ln(this);var u=new this.Collection(this,function(){return pn(o[0],o[o.length-1])});u._ondirectionchange=function(p){l=p==="next"?s._ascending:s._descending,o.sort(l)};var h=0;return u._addAlgorithm(function(p,g,w){for(var C=p.key;0<l(C,o[h]);)if(++h===o.length)return g(w),!1;return l(C,o[h])===0||(g(function(){p.continue(o[h])}),!1)}),u},ut.prototype.notEqual=function(s){return this.inAnyRange([[-1/0,s],[s,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ut.prototype.noneOf=function(){var s=He.apply(V,arguments);if(s.length===0)return new this.Collection(this);try{s.sort(this._ascending)}catch{return _t(this,Jt)}var o=s.reduce(function(l,u){return l?l.concat([[l[l.length-1][1],u]]):[[-1/0,u]]},null);return o.push([s[s.length-1],this.db._maxKey]),this.inAnyRange(o,{includeLowers:!1,includeUppers:!1})},ut.prototype.inAnyRange=function(z,o){var l=this,u=this._cmp,h=this._ascending,p=this._descending,g=this._min,w=this._max;if(z.length===0)return Ln(this);if(!z.every(function(I){return I[0]!==void 0&&I[1]!==void 0&&h(I[0],I[1])<=0}))return _t(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var C=!o||o.includeLowers!==!1,S=o&&o.includeUppers===!0,D,x=h;function F(I,L){return x(I[0],L[0])}try{(D=z.reduce(function(I,L){for(var M=0,H=I.length;M<H;++M){var J=I[M];if(u(L[0],J[1])<0&&0<u(L[1],J[0])){J[0]=g(J[0],L[0]),J[1]=w(J[1],L[1]);break}}return M===H&&I.push(L),I},[])).sort(F)}catch{return _t(this,Jt)}var E=0,T=S?function(I){return 0<h(I,D[E][1])}:function(I){return 0<=h(I,D[E][1])},j=C?function(I){return 0<p(I,D[E][0])}:function(I){return 0<=p(I,D[E][0])},_=T,z=new this.Collection(this,function(){return pn(D[0][0],D[D.length-1][1],!C,!S)});return z._ondirectionchange=function(I){x=I==="next"?(_=T,h):(_=j,p),D.sort(F)},z._addAlgorithm(function(I,L,M){for(var H,J=I.key;_(J);)if(++E===D.length)return L(M),!1;return!T(H=J)&&!j(H)||(l._cmp(J,D[E][1])===0||l._cmp(J,D[E][0])===0||L(function(){x===h?I.continue(D[E][0]):I.continue(D[E][1])}),!1)}),z},ut.prototype.startsWithAnyOf=function(){var s=He.apply(V,arguments);return s.every(function(o){return typeof o=="string"})?s.length===0?Ln(this):this.inAnyRange(s.map(function(o){return[o,o+xn]})):_t(this,"startsWithAnyOf() only works with strings")},ut);function ut(){}function Kt(s){return Le(function(o){return Gn(o),s(o.target.error),!1})}function Gn(s){s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault()}var Qn="storagemutated",fi="x-storagemutated-1",mn=Vn(null,Qn),ja=(Vt.prototype._lock=function(){return ie(!X.global),++this._reculock,this._reculock!==1||X.global||(X.lockOwnerFor=this),this},Vt.prototype._unlock=function(){if(ie(!X.global),--this._reculock==0)for(X.global||(X.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var s=this._blockedFuncs.shift();try{vn(s[1],s[0])}catch{}}return this},Vt.prototype._locked=function(){return this._reculock&&X.lockOwnerFor!==this},Vt.prototype.create=function(s){var o=this;if(!this.mode)return this;var l=this.db.idbdb,u=this.db._state.dbOpenError;if(ie(!this.idbtrans),!s&&!l)switch(u&&u.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(u);case"MissingAPIError":throw new ee.MissingAPI(u.message,u);default:throw new ee.OpenFailed(u)}if(!this.active)throw new ee.TransactionInactive;return ie(this._completion._state===null),(s=this.idbtrans=s||(this.db.core||l).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Le(function(h){Gn(h),o._reject(s.error)}),s.onabort=Le(function(h){Gn(h),o.active&&o._reject(new ee.Abort(s.error)),o.active=!1,o.on("abort").fire(h)}),s.oncomplete=Le(function(){o.active=!1,o._resolve(),"mutatedParts"in s&&mn.storagemutated.fire(s.mutatedParts)}),this},Vt.prototype._promise=function(s,o,l){var u=this;if(s==="readwrite"&&this.mode!=="readwrite")return tt(new ee.ReadOnly("Transaction is readonly"));if(!this.active)return tt(new ee.TransactionInactive);if(this._locked())return new G(function(p,g){u._blockedFuncs.push([function(){u._promise(s,o,l).then(p,g)},X])});if(l)return dn(function(){var p=new G(function(g,w){u._lock();var C=o(g,w,u);C&&C.then&&C.then(g,w)});return p.finally(function(){return u._unlock()}),p._lib=!0,p});var h=new G(function(p,g){var w=o(p,g,u);w&&w.then&&w.then(p,g)});return h._lib=!0,h},Vt.prototype._root=function(){return this.parent?this.parent._root():this},Vt.prototype.waitFor=function(s){var o,l=this._root(),u=G.resolve(s);l._waitingFor?l._waitingFor=l._waitingFor.then(function(){return u}):(l._waitingFor=u,l._waitingQueue=[],o=l.idbtrans.objectStore(l.storeNames[0]),(function p(){for(++l._spinCount;l._waitingQueue.length;)l._waitingQueue.shift()();l._waitingFor&&(o.get(-1/0).onsuccess=p)})());var h=l._waitingFor;return new G(function(p,g){u.then(function(w){return l._waitingQueue.push(Le(p.bind(null,w)))},function(w){return l._waitingQueue.push(Le(g.bind(null,w)))}).finally(function(){l._waitingFor===h&&(l._waitingFor=null)})})},Vt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},Vt.prototype.table=function(s){var o=this._memoizedTables||(this._memoizedTables={});if($(o,s))return o[s];var l=this.schema[s];if(!l)throw new ee.NotFound("Table "+s+" not part of transaction");return l=new this.db.Table(s,l,this),l.core=this.db.core.table(s),o[s]=l},Vt);function Vt(){}function pi(s,o,l,u,h,p,g){return{name:s,keyPath:o,unique:l,multi:u,auto:h,compound:p,src:(l&&!g?"&":"")+(u?"*":"")+(h?"++":"")+ks(o)}}function ks(s){return typeof s=="string"?s:s?"["+[].join.call(s,"+")+"]":""}function mi(s,o,l){return{name:s,primKey:o,indexes:l,mappedClass:null,idxByName:(u=function(h){return[h.name,h]},l.reduce(function(h,p,g){return g=u(p,g),g&&(h[g[0]]=g[1]),h},{}))};var u}var Jn=function(s){try{return s.only([[]]),Jn=function(){return[[]]},[[]]}catch{return Jn=function(){return xn},xn}};function gi(s){return s==null?function(){}:typeof s=="string"?(o=s).split(".").length===1?function(l){return l[o]}:function(l){return Ce(l,o)}:function(l){return Ce(l,s)};var o}function Cs(s){return[].slice.call(s)}var Fa=0;function Zn(s){return s==null?":id":typeof s=="string"?s:"[".concat(s.join("+"),"]")}function Oa(s,o,C){function u(_){if(_.type===3)return null;if(_.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var E=_.lower,T=_.upper,j=_.lowerOpen,_=_.upperOpen;return E===void 0?T===void 0?null:o.upperBound(T,!!_):T===void 0?o.lowerBound(E,!!j):o.bound(E,T,!!j,!!_)}function h(F){var E,T=F.name;return{name:T,schema:F,mutate:function(j){var _=j.trans,z=j.type,I=j.keys,L=j.values,M=j.range;return new Promise(function(H,J){H=Le(H);var K=_.objectStore(T),Y=K.keyPath==null,te=z==="put"||z==="add";if(!te&&z!=="delete"&&z!=="deleteRange")throw new Error("Invalid operation type: "+z);var Q,re=(I||L||{length:1}).length;if(I&&L&&I.length!==L.length)throw new Error("Given keys array must have same length as given values array.");if(re===0)return H({numFailures:0,failures:{},results:[],lastResult:void 0});function me(vt){++At,Gn(vt)}var ye=[],we=[],At=0;if(z==="deleteRange"){if(M.type===4)return H({numFailures:At,failures:we,results:[],lastResult:void 0});M.type===3?ye.push(Q=K.clear()):ye.push(Q=K.delete(u(M)))}else{var Y=te?Y?[L,I]:[L,null]:[I,null],fe=Y[0],gt=Y[1];if(te)for(var bt=0;bt<re;++bt)ye.push(Q=gt&&gt[bt]!==void 0?K[z](fe[bt],gt[bt]):K[z](fe[bt])),Q.onerror=me;else for(bt=0;bt<re;++bt)ye.push(Q=K[z](fe[bt])),Q.onerror=me}function Or(vt){vt=vt.target.result,ye.forEach(function(En,Oi){return En.error!=null&&(we[Oi]=En.error)}),H({numFailures:At,failures:we,results:z==="delete"?I:ye.map(function(En){return En.result}),lastResult:vt})}Q.onerror=function(vt){me(vt),Or(vt)},Q.onsuccess=Or})},getMany:function(j){var _=j.trans,z=j.keys;return new Promise(function(I,L){I=Le(I);for(var M,H=_.objectStore(T),J=z.length,K=new Array(J),Y=0,te=0,Q=function(ye){ye=ye.target,K[ye._pos]=ye.result,++te===Y&&I(K)},re=Kt(L),me=0;me<J;++me)z[me]!=null&&((M=H.get(z[me]))._pos=me,M.onsuccess=Q,M.onerror=re,++Y);Y===0&&I(K)})},get:function(j){var _=j.trans,z=j.key;return new Promise(function(I,L){I=Le(I);var M=_.objectStore(T).get(z);M.onsuccess=function(H){return I(H.target.result)},M.onerror=Kt(L)})},query:(E=S,function(j){return new Promise(function(_,z){_=Le(_);var I,L,M,Y=j.trans,H=j.values,J=j.limit,Q=j.query,K=J===1/0?void 0:J,te=Q.index,Q=Q.range,Y=Y.objectStore(T),te=te.isPrimaryKey?Y:Y.index(te.name),Q=u(Q);if(J===0)return _({result:[]});E?((K=H?te.getAll(Q,K):te.getAllKeys(Q,K)).onsuccess=function(re){return _({result:re.target.result})},K.onerror=Kt(z)):(I=0,L=!H&&"openKeyCursor"in te?te.openKeyCursor(Q):te.openCursor(Q),M=[],L.onsuccess=function(re){var me=L.result;return me?(M.push(H?me.value:me.primaryKey),++I===J?_({result:M}):void me.continue()):_({result:M})},L.onerror=Kt(z))})}),openCursor:function(j){var _=j.trans,z=j.values,I=j.query,L=j.reverse,M=j.unique;return new Promise(function(H,J){H=Le(H);var te=I.index,K=I.range,Y=_.objectStore(T),Y=te.isPrimaryKey?Y:Y.index(te.name),te=L?M?"prevunique":"prev":M?"nextunique":"next",Q=!z&&"openKeyCursor"in Y?Y.openKeyCursor(u(K),te):Y.openCursor(u(K),te);Q.onerror=Kt(J),Q.onsuccess=Le(function(re){var me,ye,we,At,fe=Q.result;fe?(fe.___id=++Fa,fe.done=!1,me=fe.continue.bind(fe),ye=(ye=fe.continuePrimaryKey)&&ye.bind(fe),we=fe.advance.bind(fe),At=function(){throw new Error("Cursor not stopped")},fe.trans=_,fe.stop=fe.continue=fe.continuePrimaryKey=fe.advance=function(){throw new Error("Cursor not started")},fe.fail=Le(J),fe.next=function(){var gt=this,bt=1;return this.start(function(){return bt--?gt.continue():gt.stop()}).then(function(){return gt})},fe.start=function(gt){function bt(){if(Q.result)try{gt()}catch(vt){fe.fail(vt)}else fe.done=!0,fe.start=function(){throw new Error("Cursor behind last entry")},fe.stop()}var Or=new Promise(function(vt,En){vt=Le(vt),Q.onerror=Kt(En),fe.fail=En,fe.stop=function(Oi){fe.stop=fe.continue=fe.continuePrimaryKey=fe.advance=At,vt(Oi)}});return Q.onsuccess=Le(function(vt){Q.onsuccess=bt,bt()}),fe.continue=me,fe.continuePrimaryKey=ye,fe.advance=we,bt(),Or},H(fe)):H(null)},J)})},count:function(j){var _=j.query,z=j.trans,I=_.index,L=_.range;return new Promise(function(M,H){var J=z.objectStore(T),K=I.isPrimaryKey?J:J.index(I.name),J=u(L),K=J?K.count(J):K.count();K.onsuccess=Le(function(Y){return M(Y.target.result)}),K.onerror=Kt(H)})}}}var p,g,w,D=(g=C,w=Cs((p=s).objectStoreNames),{schema:{name:p.name,tables:w.map(function(F){return g.objectStore(F)}).map(function(F){var E=F.keyPath,_=F.autoIncrement,T=d(E),j={},_={name:F.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:E==null,compound:T,keyPath:E,autoIncrement:_,unique:!0,extractKey:gi(E)},indexes:Cs(F.indexNames).map(function(z){return F.index(z)}).map(function(M){var I=M.name,L=M.unique,H=M.multiEntry,M=M.keyPath,H={name:I,compound:d(M),keyPath:M,unique:L,multiEntry:H,extractKey:gi(M)};return j[Zn(M)]=H}),getIndexByKeyPath:function(z){return j[Zn(z)]}};return j[":id"]=_.primaryKey,E!=null&&(j[Zn(E)]=_.primaryKey),_})},hasGetAll:0<w.length&&"getAll"in g.objectStore(w[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),C=D.schema,S=D.hasGetAll,D=C.tables.map(h),x={};return D.forEach(function(F){return x[F.name]=F}),{stack:"dbcore",transaction:s.transaction.bind(s),table:function(F){if(!x[F])throw new Error("Table '".concat(F,"' not found"));return x[F]},MIN_KEY:-1/0,MAX_KEY:Jn(o),schema:C}}function Ra(s,o,l,u){var h=l.IDBKeyRange;return l.indexedDB,{dbcore:(u=Oa(o,h,u),s.dbcore.reduce(function(p,g){return g=g.create,i(i({},p),g(p))},u))}}function $r(s,u){var l=u.db,u=Ra(s._middlewares,l,s._deps,u);s.core=u.dbcore,s.tables.forEach(function(h){var p=h.name;s.core.schema.tables.some(function(g){return g.name===p})&&(h.core=s.core.table(p),s[p]instanceof s.Table&&(s[p].core=h.core))})}function kr(s,o,l,u){l.forEach(function(h){var p=u[h];o.forEach(function(g){var w=(function C(S,D){return ce(S,D)||(S=v(S))&&C(S,D)})(g,h);(!w||"value"in w&&w.value===void 0)&&(g===s.Transaction.prototype||g instanceof s.Transaction?N(g,h,{get:function(){return this.table(h)},set:function(C){B(this,h,{value:C,writable:!0,configurable:!0,enumerable:!0})}}):g[h]=new s.Table(h,p))})})}function bi(s,o){o.forEach(function(l){for(var u in l)l[u]instanceof s.Table&&delete l[u]})}function za(s,o){return s._cfg.version-o._cfg.version}function Ia(s,o,l,u){var h=s._dbSchema;l.objectStoreNames.contains("$meta")&&!h.$meta&&(h.$meta=mi("$meta",Ss("")[0],[]),s._storeNames.push("$meta"));var p=s._createTransaction("readwrite",s._storeNames,h);p.create(l),p._completion.catch(u);var g=p._reject.bind(p),w=X.transless||X;dn(function(){return X.trans=p,X.transless=w,o!==0?($r(s,l),S=o,((C=p).storeNames.includes("$meta")?C.table("$meta").get("version").then(function(D){return D??S}):G.resolve(S)).then(function(D){return F=D,E=p,T=l,j=[],D=(x=s)._versions,_=x._dbSchema=Er(0,x.idbdb,T),(D=D.filter(function(z){return z._cfg.version>=F})).length!==0?(D.forEach(function(z){j.push(function(){var I=_,L=z._cfg.dbschema;Sr(x,I,T),Sr(x,L,T),_=x._dbSchema=L;var M=yi(I,L);M.add.forEach(function(te){wi(T,te[0],te[1].primKey,te[1].indexes)}),M.change.forEach(function(te){if(te.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var Q=T.objectStore(te.name);te.add.forEach(function(re){return Cr(Q,re)}),te.change.forEach(function(re){Q.deleteIndex(re.name),Cr(Q,re)}),te.del.forEach(function(re){return Q.deleteIndex(re)})});var H=z._cfg.contentUpgrade;if(H&&z._cfg.version>F){$r(x,T),E._memoizedTables={};var J=yt(L);M.del.forEach(function(te){J[te]=I[te]}),bi(x,[x.Transaction.prototype]),kr(x,[x.Transaction.prototype],c(J),J),E.schema=J;var K,Y=rt(H);return Y&&Rn(),M=G.follow(function(){var te;(K=H(E))&&Y&&(te=hn.bind(null,null),K.then(te,te))}),K&&typeof K.then=="function"?G.resolve(K):M.then(function(){return K})}}),j.push(function(I){var L,M,H=z._cfg.dbschema;L=H,M=I,[].slice.call(M.db.objectStoreNames).forEach(function(J){return L[J]==null&&M.db.deleteObjectStore(J)}),bi(x,[x.Transaction.prototype]),kr(x,[x.Transaction.prototype],x._storeNames,x._dbSchema),E.schema=x._dbSchema}),j.push(function(I){x.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(x.idbdb.version/10)===z._cfg.version?(x.idbdb.deleteObjectStore("$meta"),delete x._dbSchema.$meta,x._storeNames=x._storeNames.filter(function(L){return L!=="$meta"})):I.objectStore("$meta").put(z._cfg.version,"version"))})}),(function z(){return j.length?G.resolve(j.shift()(E.idbtrans)).then(z):G.resolve()})().then(function(){Es(_,T)})):G.resolve();var x,F,E,T,j,_}).catch(g)):(c(h).forEach(function(D){wi(l,D,h[D].primKey,h[D].indexes)}),$r(s,l),void G.follow(function(){return s.on.populate.fire(p)}).catch(g));var C,S})}function La(s,o){Es(s._dbSchema,o),o.db.version%10!=0||o.objectStoreNames.contains("$meta")||o.db.createObjectStore("$meta").add(Math.ceil(o.db.version/10-1),"version");var l=Er(0,s.idbdb,o);Sr(s,s._dbSchema,o);for(var u=0,h=yi(l,s._dbSchema).change;u<h.length;u++){var p=(function(g){if(g.change.length||g.recreate)return console.warn("Unable to patch indexes of table ".concat(g.name," because it has changes on the type of index or primary key.")),{value:void 0};var w=o.objectStore(g.name);g.add.forEach(function(C){Te&&console.debug("Dexie upgrade patch: Creating missing index ".concat(g.name,".").concat(C.src)),Cr(w,C)})})(h[u]);if(typeof p=="object")return p.value}}function yi(s,o){var l,u={del:[],add:[],change:[]};for(l in s)o[l]||u.del.push(l);for(l in o){var h=s[l],p=o[l];if(h){var g={name:l,def:p,recreate:!1,del:[],add:[],change:[]};if(""+(h.primKey.keyPath||"")!=""+(p.primKey.keyPath||"")||h.primKey.auto!==p.primKey.auto)g.recreate=!0,u.change.push(g);else{var w=h.idxByName,C=p.idxByName,S=void 0;for(S in w)C[S]||g.del.push(S);for(S in C){var D=w[S],x=C[S];D?D.src!==x.src&&g.change.push(x):g.add.push(x)}(0<g.del.length||0<g.add.length||0<g.change.length)&&u.change.push(g)}}else u.add.push([l,p])}return u}function wi(s,o,l,u){var h=s.db.createObjectStore(o,l.keyPath?{keyPath:l.keyPath,autoIncrement:l.auto}:{autoIncrement:l.auto});return u.forEach(function(p){return Cr(h,p)}),h}function Es(s,o){c(s).forEach(function(l){o.db.objectStoreNames.contains(l)||(Te&&console.debug("Dexie: Creating missing table",l),wi(o,l,s[l].primKey,s[l].indexes))})}function Cr(s,o){s.createIndex(o.name,o.keyPath,{unique:o.unique,multiEntry:o.multi})}function Er(s,o,l){var u={};return De(o.objectStoreNames,0).forEach(function(h){for(var p=l.objectStore(h),g=pi(ks(S=p.keyPath),S||"",!0,!1,!!p.autoIncrement,S&&typeof S!="string",!0),w=[],C=0;C<p.indexNames.length;++C){var D=p.index(p.indexNames[C]),S=D.keyPath,D=pi(D.name,S,!!D.unique,!!D.multiEntry,!1,S&&typeof S!="string",!1);w.push(D)}u[h]=mi(h,g,w)}),u}function Sr(s,o,l){for(var u=l.db.objectStoreNames,h=0;h<u.length;++h){var p=u[h],g=l.objectStore(p);s._hasGetAll="getAll"in g;for(var w=0;w<g.indexNames.length;++w){var C=g.indexNames[w],S=g.index(C).keyPath,D=typeof S=="string"?S:"["+De(S).join("+")+"]";!o[p]||(S=o[p].idxByName[D])&&(S.name=C,delete o[p].idxByName[D],o[p].idxByName[C]=S)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&a.WorkerGlobalScope&&a instanceof a.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(s._hasGetAll=!1)}function Ss(s){return s.split(",").map(function(o,l){var u=(o=o.trim()).replace(/([&*]|\+\+)/g,""),h=/^\[/.test(u)?u.match(/^\[(.*)\]$/)[1].split("+"):u;return pi(u,h||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),d(h),l===0)})}var Ba=(_r.prototype._parseStoresSpec=function(s,o){c(s).forEach(function(l){if(s[l]!==null){var u=Ss(s[l]),h=u.shift();if(h.unique=!0,h.multi)throw new ee.Schema("Primary key cannot be multi-valued");u.forEach(function(p){if(p.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!p.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),o[l]=mi(l,h,u)}})},_r.prototype.stores=function(l){var o=this.db;this._cfg.storesSource=this._cfg.storesSource?m(this._cfg.storesSource,l):l;var l=o._versions,u={},h={};return l.forEach(function(p){m(u,p._cfg.storesSource),h=p._cfg.dbschema={},p._parseStoresSpec(u,h)}),o._dbSchema=h,bi(o,[o._allTables,o,o.Transaction.prototype]),kr(o,[o._allTables,o,o.Transaction.prototype,this._cfg.tables],c(h),h),o._storeNames=c(h),this},_r.prototype.upgrade=function(s){return this._cfg.contentUpgrade=Et(this._cfg.contentUpgrade||le,s),this},_r);function _r(){}function vi(s,o){var l=s._dbNamesDB;return l||(l=s._dbNamesDB=new en(br,{addons:[],indexedDB:s,IDBKeyRange:o})).version(1).stores({dbnames:"name"}),l.table("dbnames")}function xi(s){return s&&typeof s.databases=="function"}function $i(s){return dn(function(){return X.letThrough=!0,s()})}function ki(s){return!("from"in s)}var mt=function(s,o){if(!this){var l=new mt;return s&&"d"in s&&m(l,s),l}m(this,arguments.length?{d:1,from:s,to:1<arguments.length?o:s}:{d:0})};function er(s,o,l){var u=ke(o,l);if(!isNaN(u)){if(0<u)throw RangeError();if(ki(s))return m(s,{from:o,to:l,d:1});var h=s.l,u=s.r;if(ke(l,s.from)<0)return h?er(h,o,l):s.l={from:o,to:l,d:1,l:null,r:null},As(s);if(0<ke(o,s.to))return u?er(u,o,l):s.r={from:o,to:l,d:1,l:null,r:null},As(s);ke(o,s.from)<0&&(s.from=o,s.l=null,s.d=u?u.d+1:1),0<ke(l,s.to)&&(s.to=l,s.r=null,s.d=s.l?s.l.d+1:1),l=!s.r,h&&!s.l&&tr(s,h),u&&l&&tr(s,u)}}function tr(s,o){ki(o)||(function l(u,C){var p=C.from,g=C.to,w=C.l,C=C.r;er(u,p,g),w&&l(u,w),C&&l(u,C)})(s,o)}function _s(s,o){var l=Ar(o),u=l.next();if(u.done)return!1;for(var h=u.value,p=Ar(s),g=p.next(h.from),w=g.value;!u.done&&!g.done;){if(ke(w.from,h.to)<=0&&0<=ke(w.to,h.from))return!0;ke(h.from,w.from)<0?h=(u=l.next(w.from)).value:w=(g=p.next(h.from)).value}return!1}function Ar(s){var o=ki(s)?null:{s:0,n:s};return{next:function(l){for(var u=0<arguments.length;o;)switch(o.s){case 0:if(o.s=1,u)for(;o.n.l&&ke(l,o.n.from)<0;)o={up:o,n:o.n.l,s:1};else for(;o.n.l;)o={up:o,n:o.n.l,s:1};case 1:if(o.s=2,!u||ke(l,o.n.to)<=0)return{value:o.n,done:!1};case 2:if(o.n.r){o.s=3,o={up:o,n:o.n.r,s:0};continue}case 3:o=o.up}return{done:!0}}}}function As(s){var o,l,u=(((o=s.r)===null||o===void 0?void 0:o.d)||0)-(((l=s.l)===null||l===void 0?void 0:l.d)||0),h=1<u?"r":u<-1?"l":"";h&&(o=h=="r"?"l":"r",l=i({},s),u=s[h],s.from=u.from,s.to=u.to,s[h]=u[h],l[h]=u[o],(s[o]=l).d=Ps(l)),s.d=Ps(s)}function Ps(l){var o=l.r,l=l.l;return(o?l?Math.max(o.d,l.d):o.d:l?l.d:0)+1}function Pr(s,o){return c(o).forEach(function(l){s[l]?tr(s[l],o[l]):s[l]=(function u(h){var p,g,w={};for(p in h)$(h,p)&&(g=h[p],w[p]=!g||typeof g!="object"||f.has(g.constructor)?g:u(g));return w})(o[l])}),s}function Ci(s,o){return s.all||o.all||Object.keys(s).some(function(l){return o[l]&&_s(o[l],s[l])})}R(mt.prototype,((jt={add:function(s){return tr(this,s),this},addKey:function(s){return er(this,s,s),this},addKeys:function(s){var o=this;return s.forEach(function(l){return er(o,l,l)}),this},hasKey:function(s){var o=Ar(this).next(s).value;return o&&ke(o.from,s)<=0&&0<=ke(o.to,s)}})[oe]=function(){return Ar(this)},jt));var kn={},Ei={},Si=!1;function Tr(s){Pr(Ei,s),Si||(Si=!0,setTimeout(function(){Si=!1,_i(Ei,!(Ei={}))},0))}function _i(s,o){o===void 0&&(o=!1);var l=new Set;if(s.all)for(var u=0,h=Object.values(kn);u<h.length;u++)Ts(g=h[u],s,l,o);else for(var p in s){var g,w=/^idb\:\/\/(.*)\/(.*)\//.exec(p);w&&(p=w[1],w=w[2],(g=kn["idb://".concat(p,"/").concat(w)])&&Ts(g,s,l,o))}l.forEach(function(C){return C()})}function Ts(s,o,l,u){for(var h=[],p=0,g=Object.entries(s.queries.query);p<g.length;p++){for(var w=g[p],C=w[0],S=[],D=0,x=w[1];D<x.length;D++){var F=x[D];Ci(o,F.obsSet)?F.subscribers.forEach(function(_){return l.add(_)}):u&&S.push(F)}u&&h.push([C,S])}if(u)for(var E=0,T=h;E<T.length;E++){var j=T[E],C=j[0],S=j[1];s.queries.query[C]=S}}function Ma(s){var o=s._state,l=s._deps.indexedDB;if(o.isBeingOpened||s.idbdb)return o.dbReadyPromise.then(function(){return o.dbOpenError?tt(o.dbOpenError):s});o.isBeingOpened=!0,o.dbOpenError=null,o.openComplete=!1;var u=o.openCanceller,h=Math.round(10*s.verno),p=!1;function g(){if(o.openCanceller!==u)throw new ee.DatabaseClosed("db.open() was cancelled")}function w(){return new G(function(F,E){if(g(),!l)throw new ee.MissingAPI;var T=s.name,j=o.autoSchema||!h?l.open(T):l.open(T,h);if(!j)throw new ee.MissingAPI;j.onerror=Kt(E),j.onblocked=Le(s._fireOnBlocked),j.onupgradeneeded=Le(function(_){var z;D=j.transaction,o.autoSchema&&!s._options.allowEmptyDB?(j.onerror=Gn,D.abort(),j.result.close(),(z=l.deleteDatabase(T)).onsuccess=z.onerror=Le(function(){E(new ee.NoSuchDatabase("Database ".concat(T," doesnt exist")))})):(D.onerror=Kt(E),_=_.oldVersion>Math.pow(2,62)?0:_.oldVersion,x=_<1,s.idbdb=j.result,p&&La(s,D),Ia(s,_/10,D,E))},E),j.onsuccess=Le(function(){D=null;var _,z,I,L,M,H=s.idbdb=j.result,J=De(H.objectStoreNames);if(0<J.length)try{var K=H.transaction((L=J).length===1?L[0]:L,"readonly");if(o.autoSchema)z=H,I=K,(_=s).verno=z.version/10,I=_._dbSchema=Er(0,z,I),_._storeNames=De(z.objectStoreNames,0),kr(_,[_._allTables],c(I),I);else if(Sr(s,s._dbSchema,K),((M=yi(Er(0,(M=s).idbdb,K),M._dbSchema)).add.length||M.change.some(function(Y){return Y.add.length||Y.change.length}))&&!p)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),H.close(),h=H.version+1,p=!0,F(w());$r(s,K)}catch{}zn.push(s),H.onversionchange=Le(function(Y){o.vcFired=!0,s.on("versionchange").fire(Y)}),H.onclose=Le(function(Y){s.on("close").fire(Y)}),x&&(M=s._deps,K=T,H=M.indexedDB,M=M.IDBKeyRange,xi(H)||K===br||vi(H,M).put({name:K}).catch(le)),F()},E)}).catch(function(F){switch(F?.name){case"UnknownError":if(0<o.PR1398_maxLoop)return o.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),w();break;case"VersionError":if(0<h)return h=0,w()}return G.reject(F)})}var C,S=o.dbReadyResolve,D=null,x=!1;return G.race([u,(typeof navigator>"u"?G.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(F){function E(){return indexedDB.databases().finally(F)}C=setInterval(E,100),E()}).finally(function(){return clearInterval(C)}):Promise.resolve()).then(w)]).then(function(){return g(),o.onReadyBeingFired=[],G.resolve($i(function(){return s.on.ready.fire(s.vip)})).then(function F(){if(0<o.onReadyBeingFired.length){var E=o.onReadyBeingFired.reduce(Et,le);return o.onReadyBeingFired=[],G.resolve($i(function(){return E(s.vip)})).then(F)}})}).finally(function(){o.openCanceller===u&&(o.onReadyBeingFired=null,o.isBeingOpened=!1)}).catch(function(F){o.dbOpenError=F;try{D&&D.abort()}catch{}return u===o.openCanceller&&s._close(),tt(F)}).finally(function(){o.openComplete=!0,S()}).then(function(){var F;return x&&(F={},s.tables.forEach(function(E){E.schema.indexes.forEach(function(T){T.name&&(F["idb://".concat(s.name,"/").concat(E.name,"/").concat(T.name)]=new mt(-1/0,[[[]]]))}),F["idb://".concat(s.name,"/").concat(E.name,"/")]=F["idb://".concat(s.name,"/").concat(E.name,"/:dels")]=new mt(-1/0,[[[]]])}),mn(Qn).fire(F),_i(F,!0)),s})}function Ai(s){function o(p){return s.next(p)}var l=h(o),u=h(function(p){return s.throw(p)});function h(p){return function(C){var w=p(C),C=w.value;return w.done?C:C&&typeof C.then=="function"?C.then(l,u):d(C)?Promise.all(C).then(l,u):l(C)}}return h(o)()}function Dr(s,o,l){for(var u=d(s)?s.slice():[s],h=0;h<l;++h)u.push(o);return u}var Na={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(s){return i(i({},s),{table:function(o){var l=s.table(o),u=l.schema,h={},p=[];function g(x,F,E){var T=Zn(x),j=h[T]=h[T]||[],_=x==null?0:typeof x=="string"?1:x.length,z=0<F,z=i(i({},E),{name:z?"".concat(T,"(virtual-from:").concat(E.name,")"):E.name,lowLevelIndex:E,isVirtual:z,keyTail:F,keyLength:_,extractKey:gi(x),unique:!z&&E.unique});return j.push(z),z.isPrimaryKey||p.push(z),1<_&&g(_===2?x[0]:x.slice(0,_-1),F+1,E),j.sort(function(I,L){return I.keyTail-L.keyTail}),z}o=g(u.primaryKey.keyPath,0,u.primaryKey),h[":id"]=[o];for(var w=0,C=u.indexes;w<C.length;w++){var S=C[w];g(S.keyPath,0,S)}function D(x){var F,E=x.query.index;return E.isVirtual?i(i({},x),{query:{index:E.lowLevelIndex,range:(F=x.query.range,E=E.keyTail,{type:F.type===1?2:F.type,lower:Dr(F.lower,F.lowerOpen?s.MAX_KEY:s.MIN_KEY,E),lowerOpen:!0,upper:Dr(F.upper,F.upperOpen?s.MIN_KEY:s.MAX_KEY,E),upperOpen:!0})}}):x}return i(i({},l),{schema:i(i({},u),{primaryKey:o,indexes:p,getIndexByKeyPath:function(x){return(x=h[Zn(x)])&&x[0]}}),count:function(x){return l.count(D(x))},query:function(x){return l.query(D(x))},openCursor:function(x){var F=x.query.index,E=F.keyTail,T=F.isVirtual,j=F.keyLength;return T?l.openCursor(D(x)).then(function(z){return z&&_(z)}):l.openCursor(x);function _(z){return Object.create(z,{continue:{value:function(I){I!=null?z.continue(Dr(I,x.reverse?s.MAX_KEY:s.MIN_KEY,E)):x.unique?z.continue(z.key.slice(0,j).concat(x.reverse?s.MIN_KEY:s.MAX_KEY,E)):z.continue()}},continuePrimaryKey:{value:function(I,L){z.continuePrimaryKey(Dr(I,s.MAX_KEY,E),L)}},primaryKey:{get:function(){return z.primaryKey}},key:{get:function(){var I=z.key;return j===1?I[0]:I.slice(0,j)}},value:{get:function(){return z.value}}})}}})}})}};function Pi(s,o,l,u){return l=l||{},u=u||"",c(s).forEach(function(h){var p,g,w;$(o,h)?(p=s[h],g=o[h],typeof p=="object"&&typeof g=="object"&&p&&g?(w=k(p))!==k(g)?l[u+h]=o[h]:w==="Object"?Pi(p,g,l,u+h+"."):p!==g&&(l[u+h]=o[h]):p!==g&&(l[u+h]=o[h])):l[u+h]=void 0}),c(o).forEach(function(h){$(s,h)||(l[u+h]=o[h])}),l}function Ti(s,o){return o.type==="delete"?o.keys:o.keys||o.values.map(s.extractKey)}var qa={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(s){return i(i({},s),{table:function(o){var l=s.table(o),u=l.schema.primaryKey;return i(i({},l),{mutate:function(h){var p=X.trans,g=p.table(o).hook,w=g.deleting,C=g.creating,S=g.updating;switch(h.type){case"add":if(C.fire===le)break;return p._promise("readwrite",function(){return D(h)},!0);case"put":if(C.fire===le&&S.fire===le)break;return p._promise("readwrite",function(){return D(h)},!0);case"delete":if(w.fire===le)break;return p._promise("readwrite",function(){return D(h)},!0);case"deleteRange":if(w.fire===le)break;return p._promise("readwrite",function(){return(function x(F,E,T){return l.query({trans:F,values:!1,query:{index:u,range:E},limit:T}).then(function(j){var _=j.result;return D({type:"delete",keys:_,trans:F}).then(function(z){return 0<z.numFailures?Promise.reject(z.failures[0]):_.length<T?{failures:[],numFailures:0,lastResult:void 0}:x(F,i(i({},E),{lower:_[_.length-1],lowerOpen:!0}),T)})})})(h.trans,h.range,1e4)},!0)}return l.mutate(h);function D(x){var F,E,T,j=X.trans,_=x.keys||Ti(u,x);if(!_)throw new Error("Keys missing");return(x=x.type==="add"||x.type==="put"?i(i({},x),{keys:_}):i({},x)).type!=="delete"&&(x.values=n([],x.values)),x.keys&&(x.keys=n([],x.keys)),F=l,T=_,((E=x).type==="add"?Promise.resolve([]):F.getMany({trans:E.trans,keys:T,cache:"immutable"})).then(function(z){var I=_.map(function(L,M){var H,J,K,Y=z[M],te={onerror:null,onsuccess:null};return x.type==="delete"?w.fire.call(te,L,Y,j):x.type==="add"||Y===void 0?(H=C.fire.call(te,L,x.values[M],j),L==null&&H!=null&&(x.keys[M]=L=H,u.outbound||be(x.values[M],u.keyPath,L))):(H=Pi(Y,x.values[M]),(J=S.fire.call(te,H,L,Y,j))&&(K=x.values[M],Object.keys(J).forEach(function(Q){$(K,Q)?K[Q]=J[Q]:be(K,Q,J[Q])}))),te});return l.mutate(x).then(function(L){for(var M=L.failures,H=L.results,J=L.numFailures,L=L.lastResult,K=0;K<_.length;++K){var Y=(H||_)[K],te=I[K];Y==null?te.onerror&&te.onerror(M[K]):te.onsuccess&&te.onsuccess(x.type==="put"&&z[K]?x.values[K]:Y)}return{failures:M,results:H,numFailures:J,lastResult:L}}).catch(function(L){return I.forEach(function(M){return M.onerror&&M.onerror(L)}),Promise.reject(L)})})}}})}})}};function Ds(s,o,l){try{if(!o||o.keys.length<s.length)return null;for(var u=[],h=0,p=0;h<o.keys.length&&p<s.length;++h)ke(o.keys[h],s[p])===0&&(u.push(l?P(o.values[h]):o.values[h]),++p);return u.length===s.length?u:null}catch{return null}}var Ua={stack:"dbcore",level:-1,create:function(s){return{table:function(o){var l=s.table(o);return i(i({},l),{getMany:function(u){if(!u.cache)return l.getMany(u);var h=Ds(u.keys,u.trans._cache,u.cache==="clone");return h?G.resolve(h):l.getMany(u).then(function(p){return u.trans._cache={keys:u.keys,values:u.cache==="clone"?P(p):p},p})},mutate:function(u){return u.type!=="add"&&(u.trans._cache=null),l.mutate(u)}})}}}};function js(s,o){return s.trans.mode==="readonly"&&!!s.subscr&&!s.trans.explicit&&s.trans.db._options.cache!=="disabled"&&!o.schema.primaryKey.outbound}function Fs(s,o){switch(s){case"query":return o.values&&!o.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Wa={stack:"dbcore",level:0,name:"Observability",create:function(s){var o=s.schema.name,l=new mt(s.MIN_KEY,s.MAX_KEY);return i(i({},s),{transaction:function(u,h,p){if(X.subscr&&h!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(X.querier));return s.transaction(u,h,p)},table:function(u){var h=s.table(u),p=h.schema,g=p.primaryKey,x=p.indexes,w=g.extractKey,C=g.outbound,S=g.autoIncrement&&x.filter(function(E){return E.compound&&E.keyPath.includes(g.keyPath)}),D=i(i({},h),{mutate:function(E){function T(Q){return Q="idb://".concat(o,"/").concat(u,"/").concat(Q),L[Q]||(L[Q]=new mt)}var j,_,z,I=E.trans,L=E.mutatedParts||(E.mutatedParts={}),M=T(""),H=T(":dels"),J=E.type,te=E.type==="deleteRange"?[E.range]:E.type==="delete"?[E.keys]:E.values.length<50?[Ti(g,E).filter(function(Q){return Q}),E.values]:[],K=te[0],Y=te[1],te=E.trans._cache;return d(K)?(M.addKeys(K),(te=J==="delete"||K.length===Y.length?Ds(K,te):null)||H.addKeys(K),(te||Y)&&(j=T,_=te,z=Y,p.indexes.forEach(function(Q){var re=j(Q.name||"");function me(we){return we!=null?Q.extractKey(we):null}function ye(we){return Q.multiEntry&&d(we)?we.forEach(function(At){return re.addKey(At)}):re.addKey(we)}(_||z).forEach(function(we,gt){var fe=_&&me(_[gt]),gt=z&&me(z[gt]);ke(fe,gt)!==0&&(fe!=null&&ye(fe),gt!=null&&ye(gt))})}))):K?(Y={from:(Y=K.lower)!==null&&Y!==void 0?Y:s.MIN_KEY,to:(Y=K.upper)!==null&&Y!==void 0?Y:s.MAX_KEY},H.add(Y),M.add(Y)):(M.add(l),H.add(l),p.indexes.forEach(function(Q){return T(Q.name).add(l)})),h.mutate(E).then(function(Q){return!K||E.type!=="add"&&E.type!=="put"||(M.addKeys(Q.results),S&&S.forEach(function(re){for(var me=E.values.map(function(fe){return re.extractKey(fe)}),ye=re.keyPath.findIndex(function(fe){return fe===g.keyPath}),we=0,At=Q.results.length;we<At;++we)me[we][ye]=Q.results[we];T(re.name).addKeys(me)})),I.mutatedParts=Pr(I.mutatedParts||{},L),Q})}}),x=function(T){var j=T.query,T=j.index,j=j.range;return[T,new mt((T=j.lower)!==null&&T!==void 0?T:s.MIN_KEY,(j=j.upper)!==null&&j!==void 0?j:s.MAX_KEY)]},F={get:function(E){return[g,new mt(E.key)]},getMany:function(E){return[g,new mt().addKeys(E.keys)]},count:x,query:x,openCursor:x};return c(F).forEach(function(E){D[E]=function(T){var j=X.subscr,_=!!j,z=js(X,h)&&Fs(E,T)?T.obsSet={}:j;if(_){var I=function(Y){return Y="idb://".concat(o,"/").concat(u,"/").concat(Y),z[Y]||(z[Y]=new mt)},L=I(""),M=I(":dels"),j=F[E](T),_=j[0],j=j[1];if((E==="query"&&_.isPrimaryKey&&!T.values?M:I(_.name||"")).add(j),!_.isPrimaryKey){if(E!=="count"){var H=E==="query"&&C&&T.values&&h.query(i(i({},T),{values:!1}));return h[E].apply(this,arguments).then(function(Y){if(E==="query"){if(C&&T.values)return H.then(function(me){return me=me.result,L.addKeys(me),Y});var te=T.values?Y.result.map(w):Y.result;(T.values?L:M).addKeys(te)}else if(E==="openCursor"){var Q=Y,re=T.values;return Q&&Object.create(Q,{key:{get:function(){return M.addKey(Q.primaryKey),Q.key}},primaryKey:{get:function(){var me=Q.primaryKey;return M.addKey(me),me}},value:{get:function(){return re&&L.addKey(Q.primaryKey),Q.value}}})}return Y})}M.add(l)}}return h[E].apply(this,arguments)}}),D}})}};function Os(s,o,l){if(l.numFailures===0)return o;if(o.type==="deleteRange")return null;var u=o.keys?o.keys.length:"values"in o&&o.values?o.values.length:1;return l.numFailures===u?null:(o=i({},o),d(o.keys)&&(o.keys=o.keys.filter(function(h,p){return!(p in l.failures)})),"values"in o&&d(o.values)&&(o.values=o.values.filter(function(h,p){return!(p in l.failures)})),o)}function Di(s,o){return l=s,((u=o).lower===void 0||(u.lowerOpen?0<ke(l,u.lower):0<=ke(l,u.lower)))&&(s=s,(o=o).upper===void 0||(o.upperOpen?ke(s,o.upper)<0:ke(s,o.upper)<=0));var l,u}function Rs(s,o,F,u,h,p){if(!F||F.length===0)return s;var g=o.query.index,w=g.multiEntry,C=o.query.range,S=u.schema.primaryKey.extractKey,D=g.extractKey,x=(g.lowLevelIndex||g).extractKey,F=F.reduce(function(E,T){var j=E,_=[];if(T.type==="add"||T.type==="put")for(var z=new mt,I=T.values.length-1;0<=I;--I){var L,M=T.values[I],H=S(M);z.hasKey(H)||(L=D(M),(w&&d(L)?L.some(function(Q){return Di(Q,C)}):Di(L,C))&&(z.addKey(H),_.push(M)))}switch(T.type){case"add":var J=new mt().addKeys(o.values?E.map(function(re){return S(re)}):E),j=E.concat(o.values?_.filter(function(re){return re=S(re),!J.hasKey(re)&&(J.addKey(re),!0)}):_.map(function(re){return S(re)}).filter(function(re){return!J.hasKey(re)&&(J.addKey(re),!0)}));break;case"put":var K=new mt().addKeys(T.values.map(function(re){return S(re)}));j=E.filter(function(re){return!K.hasKey(o.values?S(re):re)}).concat(o.values?_:_.map(function(re){return S(re)}));break;case"delete":var Y=new mt().addKeys(T.keys);j=E.filter(function(re){return!Y.hasKey(o.values?S(re):re)});break;case"deleteRange":var te=T.range;j=E.filter(function(re){return!Di(S(re),te)})}return j},s);return F===s?s:(F.sort(function(E,T){return ke(x(E),x(T))||ke(S(E),S(T))}),o.limit&&o.limit<1/0&&(F.length>o.limit?F.length=o.limit:s.length===o.limit&&F.length<o.limit&&(h.dirty=!0)),p?Object.freeze(F):F)}function zs(s,o){return ke(s.lower,o.lower)===0&&ke(s.upper,o.upper)===0&&!!s.lowerOpen==!!o.lowerOpen&&!!s.upperOpen==!!o.upperOpen}function Ha(s,o){return(function(l,u,h,p){if(l===void 0)return u!==void 0?-1:0;if(u===void 0)return 1;if((u=ke(l,u))===0){if(h&&p)return 0;if(h)return 1;if(p)return-1}return u})(s.lower,o.lower,s.lowerOpen,o.lowerOpen)<=0&&0<=(function(l,u,h,p){if(l===void 0)return u!==void 0?1:0;if(u===void 0)return-1;if((u=ke(l,u))===0){if(h&&p)return 0;if(h)return-1;if(p)return 1}return u})(s.upper,o.upper,s.upperOpen,o.upperOpen)}function Ka(s,o,l,u){s.subscribers.add(l),u.addEventListener("abort",function(){var h,p;s.subscribers.delete(l),s.subscribers.size===0&&(h=s,p=o,setTimeout(function(){h.subscribers.size===0&&q(p,h)},3e3))})}var Va={stack:"dbcore",level:0,name:"Cache",create:function(s){var o=s.schema.name;return i(i({},s),{transaction:function(l,u,h){var p,g,w=s.transaction(l,u,h);return u==="readwrite"&&(g=(p=new AbortController).signal,h=function(C){return function(){if(p.abort(),u==="readwrite"){for(var S=new Set,D=0,x=l;D<x.length;D++){var F=x[D],E=kn["idb://".concat(o,"/").concat(F)];if(E){var T=s.table(F),j=E.optimisticOps.filter(function(re){return re.trans===w});if(w._explicit&&C&&w.mutatedParts)for(var _=0,z=Object.values(E.queries.query);_<z.length;_++)for(var I=0,L=(J=z[_]).slice();I<L.length;I++)Ci((K=L[I]).obsSet,w.mutatedParts)&&(q(J,K),K.subscribers.forEach(function(re){return S.add(re)}));else if(0<j.length){E.optimisticOps=E.optimisticOps.filter(function(re){return re.trans!==w});for(var M=0,H=Object.values(E.queries.query);M<H.length;M++)for(var J,K,Y,te=0,Q=(J=H[M]).slice();te<Q.length;te++)(K=Q[te]).res!=null&&w.mutatedParts&&(C&&!K.dirty?(Y=Object.isFrozen(K.res),Y=Rs(K.res,K.req,j,T,K,Y),K.dirty?(q(J,K),K.subscribers.forEach(function(re){return S.add(re)})):Y!==K.res&&(K.res=Y,K.promise=G.resolve({result:Y}))):(K.dirty&&q(J,K),K.subscribers.forEach(function(re){return S.add(re)})))}}}S.forEach(function(re){return re()})}}},w.addEventListener("abort",h(!1),{signal:g}),w.addEventListener("error",h(!1),{signal:g}),w.addEventListener("complete",h(!0),{signal:g})),w},table:function(l){var u=s.table(l),h=u.schema.primaryKey;return i(i({},u),{mutate:function(p){var g=X.trans;if(h.outbound||g.db._options.cache==="disabled"||g.explicit||g.idbtrans.mode!=="readwrite")return u.mutate(p);var w=kn["idb://".concat(o,"/").concat(l)];return w?(g=u.mutate(p),p.type!=="add"&&p.type!=="put"||!(50<=p.values.length||Ti(h,p).some(function(C){return C==null}))?(w.optimisticOps.push(p),p.mutatedParts&&Tr(p.mutatedParts),g.then(function(C){0<C.numFailures&&(q(w.optimisticOps,p),(C=Os(0,p,C))&&w.optimisticOps.push(C),p.mutatedParts&&Tr(p.mutatedParts))}),g.catch(function(){q(w.optimisticOps,p),p.mutatedParts&&Tr(p.mutatedParts)})):g.then(function(C){var S=Os(0,i(i({},p),{values:p.values.map(function(D,x){var F;return C.failures[x]?D:(D=(F=h.keyPath)!==null&&F!==void 0&&F.includes(".")?P(D):i({},D),be(D,h.keyPath,C.results[x]),D)})}),C);w.optimisticOps.push(S),queueMicrotask(function(){return p.mutatedParts&&Tr(p.mutatedParts)})}),g):u.mutate(p)},query:function(p){if(!js(X,u)||!Fs("query",p))return u.query(p);var g=((S=X.trans)===null||S===void 0?void 0:S.db._options.cache)==="immutable",x=X,w=x.requery,C=x.signal,S=(function(T,j,_,z){var I=kn["idb://".concat(T,"/").concat(j)];if(!I)return[];if(!(j=I.queries[_]))return[null,!1,I,null];var L=j[(z.query?z.query.index.name:null)||""];if(!L)return[null,!1,I,null];switch(_){case"query":var M=L.find(function(H){return H.req.limit===z.limit&&H.req.values===z.values&&zs(H.req.query.range,z.query.range)});return M?[M,!0,I,L]:[L.find(function(H){return("limit"in H.req?H.req.limit:1/0)>=z.limit&&(!z.values||H.req.values)&&Ha(H.req.query.range,z.query.range)}),!1,I,L];case"count":return M=L.find(function(H){return zs(H.req.query.range,z.query.range)}),[M,!!M,I,L]}})(o,l,"query",p),D=S[0],x=S[1],F=S[2],E=S[3];return D&&x?D.obsSet=p.obsSet:(x=u.query(p).then(function(T){var j=T.result;if(D&&(D.res=j),g){for(var _=0,z=j.length;_<z;++_)Object.freeze(j[_]);Object.freeze(j)}else T.result=P(j);return T}).catch(function(T){return E&&D&&q(E,D),Promise.reject(T)}),D={obsSet:p.obsSet,promise:x,subscribers:new Set,type:"query",req:p,dirty:!1},E?E.push(D):(E=[D],(F=F||(kn["idb://".concat(o,"/").concat(l)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[p.query.index.name||""]=E)),Ka(D,E,w,C),D.promise.then(function(T){return{result:Rs(T.result,p,F?.optimisticOps,u,D,g)}})}})}})}};function jr(s,o){return new Proxy(s,{get:function(l,u,h){return u==="db"?o:Reflect.get(l,u,h)}})}var en=(nt.prototype.version=function(s){if(isNaN(s)||s<.1)throw new ee.Type("Given version is not a positive number");if(s=Math.round(10*s)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,s);var o=this._versions,l=o.filter(function(u){return u._cfg.version===s})[0];return l||(l=new this.Version(s),o.push(l),o.sort(za),l.stores({}),this._state.autoSchema=!1,l)},nt.prototype._whenReady=function(s){var o=this;return this.idbdb&&(this._state.openComplete||X.letThrough||this._vip)?s():new G(function(l,u){if(o._state.openComplete)return u(new ee.DatabaseClosed(o._state.dbOpenError));if(!o._state.isBeingOpened){if(!o._state.autoOpen)return void u(new ee.DatabaseClosed);o.open().catch(le)}o._state.dbReadyPromise.then(l,u)}).then(s)},nt.prototype.use=function(s){var o=s.stack,l=s.create,u=s.level,h=s.name;return h&&this.unuse({stack:o,name:h}),s=this._middlewares[o]||(this._middlewares[o]=[]),s.push({stack:o,create:l,level:u??10,name:h}),s.sort(function(p,g){return p.level-g.level}),this},nt.prototype.unuse=function(s){var o=s.stack,l=s.name,u=s.create;return o&&this._middlewares[o]&&(this._middlewares[o]=this._middlewares[o].filter(function(h){return u?h.create!==u:!!l&&h.name!==l})),this},nt.prototype.open=function(){var s=this;return vn(Xe,function(){return Ma(s)})},nt.prototype._close=function(){var s=this._state,o=zn.indexOf(this);if(0<=o&&zn.splice(o,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}s.isBeingOpened||(s.dbReadyPromise=new G(function(l){s.dbReadyResolve=l}),s.openCanceller=new G(function(l,u){s.cancelOpen=u}))},nt.prototype.close=function(l){var o=(l===void 0?{disableAutoOpen:!0}:l).disableAutoOpen,l=this._state;o?(l.isBeingOpened&&l.cancelOpen(new ee.DatabaseClosed),this._close(),l.autoOpen=!1,l.dbOpenError=new ee.DatabaseClosed):(this._close(),l.autoOpen=this._options.autoOpen||l.isBeingOpened,l.openComplete=!1,l.dbOpenError=null)},nt.prototype.delete=function(s){var o=this;s===void 0&&(s={disableAutoOpen:!0});var l=0<arguments.length&&typeof arguments[0]!="object",u=this._state;return new G(function(h,p){function g(){o.close(s);var w=o._deps.indexedDB.deleteDatabase(o.name);w.onsuccess=Le(function(){var C,S,D;C=o._deps,S=o.name,D=C.indexedDB,C=C.IDBKeyRange,xi(D)||S===br||vi(D,C).delete(S).catch(le),h()}),w.onerror=Kt(p),w.onblocked=o._fireOnBlocked}if(l)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");u.isBeingOpened?u.dbReadyPromise.then(g):g()})},nt.prototype.backendDB=function(){return this.idbdb},nt.prototype.isOpen=function(){return this.idbdb!==null},nt.prototype.hasBeenClosed=function(){var s=this._state.dbOpenError;return s&&s.name==="DatabaseClosed"},nt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},nt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(nt.prototype,"tables",{get:function(){var s=this;return c(this._allTables).map(function(o){return s._allTables[o]})},enumerable:!1,configurable:!0}),nt.prototype.transaction=function(){var s=function(o,l,u){var h=arguments.length;if(h<2)throw new ee.InvalidArgument("Too few arguments");for(var p=new Array(h-1);--h;)p[h-1]=arguments[h];return u=p.pop(),[o,zt(p),u]}.apply(this,arguments);return this._transaction.apply(this,s)},nt.prototype._transaction=function(s,o,l){var u=this,h=X.trans;h&&h.db===this&&s.indexOf("!")===-1||(h=null);var p,g,w=s.indexOf("?")!==-1;s=s.replace("!","").replace("?","");try{if(g=o.map(function(S){if(S=S instanceof u.Table?S.name:S,typeof S!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return S}),s=="r"||s===li)p=li;else{if(s!="rw"&&s!=ci)throw new ee.InvalidArgument("Invalid transaction mode: "+s);p=ci}if(h){if(h.mode===li&&p===ci){if(!w)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");h=null}h&&g.forEach(function(S){if(h&&h.storeNames.indexOf(S)===-1){if(!w)throw new ee.SubTransaction("Table "+S+" not included in parent transaction.");h=null}}),w&&h&&!h.active&&(h=null)}}catch(S){return h?h._promise(null,function(D,x){x(S)}):tt(S)}var C=function S(D,x,F,E,T){return G.resolve().then(function(){var j=X.transless||X,_=D._createTransaction(x,F,D._dbSchema,E);if(_.explicit=!0,j={trans:_,transless:j},E)_.idbtrans=E.idbtrans;else try{_.create(),_.idbtrans._explicit=!0,D._state.PR1398_maxLoop=3}catch(L){return L.name===Ke.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return S(D,x,F,null,T)})):tt(L)}var z,I=rt(T);return I&&Rn(),j=G.follow(function(){var L;(z=T.call(_,_))&&(I?(L=hn.bind(null,null),z.then(L,L)):typeof z.next=="function"&&typeof z.throw=="function"&&(z=Ai(z)))},j),(z&&typeof z.then=="function"?G.resolve(z).then(function(L){return _.active?L:tt(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):j.then(function(){return z})).then(function(L){return E&&_._resolve(),_._completion.then(function(){return L})}).catch(function(L){return _._reject(L),tt(L)})})}.bind(null,this,p,g,h,l);return h?h._promise(p,C,"lock"):X.trans?vn(X.transless,function(){return u._whenReady(C)}):this._whenReady(C)},nt.prototype.table=function(s){if(!$(this._allTables,s))throw new ee.InvalidTable("Table ".concat(s," does not exist"));return this._allTables[s]},nt);function nt(s,o){var l=this;this._middlewares={},this.verno=0;var u=nt.dependencies;this._options=o=i({addons:nt.addons,autoOpen:!0,indexedDB:u.indexedDB,IDBKeyRange:u.IDBKeyRange,cache:"cloned"},o),this._deps={indexedDB:o.indexedDB,IDBKeyRange:o.IDBKeyRange},u=o.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var h,p,g,w,C,S={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:le,dbReadyPromise:null,cancelOpen:le,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:o.autoOpen};S.dbReadyPromise=new G(function(x){S.dbReadyResolve=x}),S.openCanceller=new G(function(x,F){S.cancelOpen=F}),this._state=S,this.name=s,this.on=Vn(this,"populate","blocked","versionchange","close",{ready:[Et,le]}),this.on.ready.subscribe=Be(this.on.ready.subscribe,function(x){return function(F,E){nt.vip(function(){var T,j=l._state;j.openComplete?(j.dbOpenError||G.resolve().then(F),E&&x(F)):j.onReadyBeingFired?(j.onReadyBeingFired.push(F),E&&x(F)):(x(F),T=l,E||x(function _(){T.on.ready.unsubscribe(F),T.on.ready.unsubscribe(_)}))})}}),this.Collection=(h=this,Yn(Pa.prototype,function(z,_){this.db=h;var E=fs,T=null;if(_)try{E=_()}catch(I){T=I}var j=z._ctx,_=j.table,z=_.hook.reading.fire;this._ctx={table:_,index:j.index,isPrimKey:!j.index||_.schema.primKey.keyPath&&j.index===_.schema.primKey.name,range:E,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:T,or:j.or,valueMapper:z!==ge?z:null}})),this.Table=(p=this,Yn(bs.prototype,function(x,F,E){this.db=p,this._tx=E,this.name=x,this.schema=F,this.hook=p._allTables[x]?p._allTables[x].hook:Vn(null,{creating:[Ye,le],reading:[Ct,ge],updating:[It,le],deleting:[cn,le]})})),this.Transaction=(g=this,Yn(ja.prototype,function(x,F,E,T,j){var _=this;this.db=g,this.mode=x,this.storeNames=F,this.schema=E,this.chromeTransactionDurability=T,this.idbtrans=null,this.on=Vn(this,"complete","error","abort"),this.parent=j||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new G(function(z,I){_._resolve=z,_._reject=I}),this._completion.then(function(){_.active=!1,_.on.complete.fire()},function(z){var I=_.active;return _.active=!1,_.on.error.fire(z),_.parent?_.parent._reject(z):I&&_.idbtrans&&_.idbtrans.abort(),tt(z)})})),this.Version=(w=this,Yn(Ba.prototype,function(x){this.db=w,this._cfg={version:x,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(C=this,Yn($s.prototype,function(x,F,E){if(this.db=C,this._ctx={table:x,index:F===":id"?null:F,or:E},this._cmp=this._ascending=ke,this._descending=function(T,j){return ke(j,T)},this._max=function(T,j){return 0<ke(T,j)?T:j},this._min=function(T,j){return ke(T,j)<0?T:j},this._IDBKeyRange=C._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function(x){0<x.newVersion?console.warn("Another connection wants to upgrade database '".concat(l.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(l.name,"'. Closing db now to resume the delete request.")),l.close({disableAutoOpen:!1})}),this.on("blocked",function(x){!x.newVersion||x.newVersion<x.oldVersion?console.warn("Dexie.delete('".concat(l.name,"') was blocked")):console.warn("Upgrade '".concat(l.name,"' blocked by other connection holding version ").concat(x.oldVersion/10))}),this._maxKey=Jn(o.IDBKeyRange),this._createTransaction=function(x,F,E,T){return new l.Transaction(x,F,E,l._options.chromeTransactionDurability,T)},this._fireOnBlocked=function(x){l.on("blocked").fire(x),zn.filter(function(F){return F.name===l.name&&F!==l&&!F._state.vcFired}).map(function(F){return F.on("versionchange").fire(x)})},this.use(Ua),this.use(Va),this.use(Wa),this.use(Na),this.use(qa);var D=new Proxy(this,{get:function(x,F,E){if(F==="_vip")return!0;if(F==="table")return function(j){return jr(l.table(j),D)};var T=Reflect.get(x,F,E);return T instanceof bs?jr(T,D):F==="tables"?T.map(function(j){return jr(j,D)}):F==="_createTransaction"?function(){return jr(T.apply(this,arguments),D)}:T}});this.vip=D,u.forEach(function(x){return x(l)})}var Fr,jt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Ya=(ji.prototype.subscribe=function(s,o,l){return this._subscribe(s&&typeof s!="function"?s:{next:s,error:o,complete:l})},ji.prototype[jt]=function(){return this},ji);function ji(s){this._subscribe=s}try{Fr={indexedDB:a.indexedDB||a.mozIndexedDB||a.webkitIndexedDB||a.msIndexedDB,IDBKeyRange:a.IDBKeyRange||a.webkitIDBKeyRange}}catch{Fr={indexedDB:null,IDBKeyRange:null}}function Is(s){var o,l=!1,u=new Ya(function(h){var p=rt(s),g,w=!1,C={},S={},D={get closed(){return w},unsubscribe:function(){w||(w=!0,g&&g.abort(),x&&mn.storagemutated.unsubscribe(E))}};h.start&&h.start(D);var x=!1,F=function(){return ai(T)},E=function(j){Pr(C,j),Ci(S,C)&&F()},T=function(){var j,_,z;!w&&Fr.indexedDB&&(C={},j={},g&&g.abort(),g=new AbortController,z=(function(I){var L=Oe();try{p&&Rn();var M=dn(s,I);return M=p?M.finally(hn):M}finally{L&&Ue()}})(_={subscr:j,signal:g.signal,requery:F,querier:s,trans:null}),Promise.resolve(z).then(function(I){l=!0,o=I,w||_.signal.aborted||(C={},(function(L){for(var M in L)if($(L,M))return;return 1})(S=j)||x||(mn(Qn,E),x=!0),ai(function(){return!w&&h.next&&h.next(I)}))},function(I){l=!1,["DatabaseClosedError","AbortError"].includes(I?.name)||w||ai(function(){w||h.error&&h.error(I)})}))};return setTimeout(F,0),D});return u.hasValue=function(){return l},u.getValue=function(){return o},u}var Cn=en;function Fi(s){var o=gn;try{gn=!0,mn.storagemutated.fire(s),_i(s,!0)}finally{gn=o}}R(Cn,i(i({},ze),{delete:function(s){return new Cn(s,{addons:[]}).delete()},exists:function(s){return new Cn(s,{addons:[]}).open().then(function(o){return o.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(s){try{return o=Cn.dependencies,l=o.indexedDB,o=o.IDBKeyRange,(xi(l)?Promise.resolve(l.databases()).then(function(u){return u.map(function(h){return h.name}).filter(function(h){return h!==br})}):vi(l,o).toCollection().primaryKeys()).then(s)}catch{return tt(new ee.MissingAPI)}var o,l},defineClass:function(){return function(s){m(this,s)}},ignoreTransaction:function(s){return X.trans?vn(X.transless,s):s()},vip:$i,async:function(s){return function(){try{var o=Ai(s.apply(this,arguments));return o&&typeof o.then=="function"?o:G.resolve(o)}catch(l){return tt(l)}}},spawn:function(s,o,l){try{var u=Ai(s.apply(l,o||[]));return u&&typeof u.then=="function"?u:G.resolve(u)}catch(h){return tt(h)}},currentTransaction:{get:function(){return X.trans||null}},waitFor:function(s,o){return o=G.resolve(typeof s=="function"?Cn.ignoreTransaction(s):s).timeout(o||6e4),X.trans?X.trans.waitFor(o):o},Promise:G,debug:{get:function(){return Te},set:function(s){Ne(s)}},derive:W,extend:m,props:R,override:Be,Events:Vn,on:mn,liveQuery:Is,extendObservabilitySet:Pr,getByKeyPath:Ce,setByKeyPath:be,delByKeyPath:function(s,o){typeof o=="string"?be(s,o,void 0):"length"in o&&[].map.call(o,function(l){be(s,l,void 0)})},shallowClone:yt,deepClone:P,getObjectDiff:Pi,cmp:ke,asap:pe,minKey:-1/0,addons:[],connections:zn,errnames:Ke,dependencies:Fr,cache:kn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(s){return parseInt(s)}).reduce(function(s,o,l){return s+o/Math.pow(10,2*l)})})),Cn.maxKey=Jn(Cn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(mn(Qn,function(s){gn||(s=new CustomEvent(fi,{detail:s}),gn=!0,dispatchEvent(s),gn=!1)}),addEventListener(fi,function(s){s=s.detail,gn||Fi(s)}));var Bn,gn=!1,Ls=function(){};return typeof BroadcastChannel<"u"&&((Ls=function(){(Bn=new BroadcastChannel(fi)).onmessage=function(s){return s.data&&Fi(s.data)}})(),typeof Bn.unref=="function"&&Bn.unref(),mn(Qn,function(s){gn||Bn.postMessage(s)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(s){if(!en.disableBfCache&&s.persisted){Te&&console.debug("Dexie: handling persisted pagehide"),Bn?.close();for(var o=0,l=zn;o<l.length;o++)l[o].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(s){!en.disableBfCache&&s.persisted&&(Te&&console.debug("Dexie: handling persisted pageshow"),Ls(),Fi({all:new mt(-1/0,[[]])}))})),G.rejectionMapper=function(s,o){return!s||s instanceof Me||s instanceof TypeError||s instanceof SyntaxError||!s.name||!Ve[s.name]?s:(o=new Ve[s.name](o||s.message,s),"stack"in s&&N(o,"stack",{get:function(){return this.inner.stack}}),o)},Ne(Te),i(en,Object.freeze({__proto__:null,Dexie:en,liveQuery:Is,Entity:ps,cmp:ke,PropModSymbol:Zt,PropModification:Xn,replacePrefix:function(s,o){return new Xn({replacePrefix:[s,o]})},add:function(s){return new Xn({add:s})},remove:function(s){return new Xn({remove:s})},default:en,RangeSet:mt,mergeRanges:tr,rangesOverlap:_s}),{default:en}),en})})(Nr)),Nr.exports}var Dl=Tl();const Ui=Al(Dl),Js=Symbol.for("Dexie"),Kr=globalThis[Js]||(globalThis[Js]=Ui);if(Ui.semVer!==Kr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Ui.semVer} and ${Kr.semVer}`);const{liveQuery:zo,mergeRanges:of,rangesOverlap:af,RangeSet:lf,cmp:cf,Entity:uf,PropModSymbol:df,PropModification:hf,replacePrefix:ff,add:pf,remove:mf}=Kr,jl="easydb";let Rr=null;function Fl(){if(Rr)return Rr;const e=new Kr(jl);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),Rr={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins")},Rr}function zr(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(i=>Io(i,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const i=zo(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>i.unsubscribe()}}}function Ol(e,t){return{async find(r){const i=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return i.toArray();const n=Object.entries(r);return i.filter(a=>Io(a,n)).toArray()},async findOne(r){const i=await e.get(r);return i&&i.tableId===t?i:null},async insert(r){const i={...r,tableId:t};return await e.add(i),i},async bulkInsert(r){if(r.length===0)return[];const i=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(i),i},async upsert(r){const i={...r,tableId:t};return await e.put(i),i},async patch(r,i){if(await e.update(r,i)===0)throw new Error(`row patch: no row ${r}`);const a=await e.get(r);if(!a)throw new Error(`row patch: row ${r} vanished after update`);return a},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=zo(()=>e.where("tableId").equals(t).toArray()).subscribe({next:a=>r(a)});return()=>n.unsubscribe()}}}function Io(e,t){for(const[r,i]of t)if(e[r]!==i)return!1;return!0}function Rl(e){return{workspaces:zr(e.workspaces),tables:zr(e.tables),settings:zr(e.settings),plugins:zr(e.plugins),rows:t=>Ol(e.rows,t)}}function zl(e){const{base:t,providers:r,tableById:i,ctx:n}=e,a=new Map;return{...t,rows(c){const d=i(c),m=d?.source;if(m){const v=r.get(m.type);if(v){const A=JSON.stringify(m),$=a.get(c);if($&&$.key===A)return $.coll;const R=v.create(d,n);return a.set(c,{key:A,coll:R}),R}}return a.delete(c),t.rows(c)}}}function Il(){const e=new Map;return{on(t,r){let i=e.get(t);return i||(i=new Set,e.set(t,i)),i.add(r),()=>{i.delete(r)}},emit(t,r){const i=e.get(t);if(i)for(const n of i)try{n(r)}catch(a){console.error(`[event:${String(t)}] listener threw`,a)}}}}const rn=st`
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
`;function wn(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const Zs=new WeakSet;function sn(e,t){if(Zs.has(t))return;Zs.add(t);let r=0,i=0,n=0,a=0,c=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",m=>{if(m.target.closest("button, input, textarea, select, a, label"))return;c=!0,r=m.clientX,i=m.clientY;const A=e.getBoundingClientRect();n=A.left,a=A.top,t.setPointerCapture(m.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",m=>{if(!c)return;const v=m.clientX-r,A=m.clientY-i,$=-e.offsetWidth+80,R=window.innerWidth-80,B=0,N=window.innerHeight-40,W=Math.max($,Math.min(R,n+v)),ce=Math.max(B,Math.min(N,a+A));e.style.position="fixed",e.style.left=`${W}px`,e.style.top=`${ce}px`,e.style.margin="0"});const d=m=>{if(c){c=!1;try{t.releasePointerCapture(m.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",d),t.addEventListener("pointercancel",d)}var Ll=Object.defineProperty,Bl=Object.getOwnPropertyDescriptor,Lo=(e,t,r,i)=>{for(var n=i>1?void 0:i?Bl(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Ll(t,r,n),n};let Ft=class extends Qe{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),Ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ft.instance===this&&(Ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&sn(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(i=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:i}})}choice(e,t,r="Choose"){return this.enqueue(i=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:i}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return U`
      <dialog @cancel=${this.onCancel} @keydown=${wn}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):Fe}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return U`
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
        `;case"prompt":return U`
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
        `;case"choice":return U`
          <div class="dialog-header">
            <h2>${e.title}</h2>
            <div class="header-actions">
              <button class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
            </div>
          </div>
          <div class="dialog-body">
            ${e.message?U`<p class="message">${e.message}</p>`:Fe}
            <div class="choices">
              ${e.options.map(t=>U`<button class="choice" @click=${()=>this.closeAndResolve(t)}>
                    ${t}
                  </button>`)}
            </div>
          </div>
        `}}};Ft.instance=null;Ft.styles=[rn,st`
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
    `];Lo([Z()],Ft.prototype,"current",2);Ft=Lo([dt("host-dialogs")],Ft);const on=st`
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
`;var Ml=Object.defineProperty,Nl=Object.getOwnPropertyDescriptor,Bo=(e,t,r,i)=>{for(var n=i>1?void 0:i?Nl(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Ml(t,r,n),n};let tn=class extends Qe{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),tn.instance=this}disconnectedCallback(){super.disconnectedCallback(),tn.instance===this&&(tn.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const i=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),i)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return U`
      ${this.toasts.map(e=>U`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${Ul(e.kind)}</span>
            <span class="body">
              ${e.title?U`<strong>${e.title}</strong>`:""}${ql(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};tn.instance=null;tn.styles=[on,st`
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
    `];Bo([Z()],tn.prototype,"toasts",2);tn=Bo([dt("toast-host")],tn);function ql(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let i=0,n;for(;(n=t.exec(e))!==null;)n.index>i&&r.push(e.slice(i,n.index)),r.push({url:n[0]}),i=n.index+n[0].length;return i<e.length&&r.push(e.slice(i)),r.length===0?e:r.map(a=>typeof a=="string"?a:U`<a href=${a.url} target="_blank" rel="noopener noreferrer">${a.url}</a>`)}function Ul(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Wl(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map}}function _n(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function zi(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function Hl(e){return{registerHeaderButton:t=>_n(e.headerButtons,t),registerFooterButton:t=>_n(e.footerButtons,t),registerTableButton:t=>_n(e.tableButtons,t),registerImporter:t=>_n(e.importers,t),registerExporter:t=>_n(e.exporters,t),registerUrlSource:t=>_n(e.urlSources,t),registerDropHandler:t=>_n(e.dropHandlers,t),registerCellRenderer:(t,r)=>zi(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>zi(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>zi(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},dialogs:Kl}}const Kl={async alert(e,t){const r=Ft.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=Ft.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const i=Ft.instance;return i?i.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const i=Ft.instance;if(i)return i.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=tn.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}};function Vl(e){const t=Hl(e.registries),r=e.registries.rowSources,i=a=>(r.set(a.type,a),()=>{r.get(a.type)===a&&r.delete(a.type)}),n={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:n,registerRowSource:i,backend:{fetch:async(a,c)=>{const d=await Yl(e.store),m=c?.body instanceof ArrayBuffer;if(!d||m)return globalThis.fetch(a,c);const v={url:a};return c?.method&&(v.method=c.method),c?.headers&&(v.headers=c.headers),typeof c?.body=="string"&&(v.body=c.body),globalThis.fetch(`${d}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)})},async saveFile(a,c,d){const m=typeof c=="string"?new Blob([c],{type:d??"application/octet-stream"}):c,v=URL.createObjectURL(m),A=document.createElement("a");A.href=v,A.download=a,A.rel="noopener",document.body.appendChild(A),A.click(),A.remove(),setTimeout(()=>URL.revokeObjectURL(v),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function Yl(e){const r=(await e.settings.findOne("server-sync:url"))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}const Xl={name:"csv-import",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"easyDBAccess built-ins"};function Gl(e){e.ui.registerImporter(Ql),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const i=cc(t).filter(uc);if(i.length===0)return!1;t.preventDefault();for(const n of i)await Jl(e,n);return!0})}const Ql={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return Qr(t)}};async function Jl(e,t){const r=t.name.replace(/\.csv$/i,"")||"imported";await rs(e,await t.text(),r)}async function rs(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("csv-import: no active workspace");const a=(r||"imported").replace(/\.csv$/i,"")||"imported",c=(await e.store.tables.find()).find($=>$.workspaceId===n&&$.name===a);let d,m;if(c){const $=await e.ui.dialogs.choice(`A table named "${a}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!$)return;$==="Append rows"?(m="append",d=c.id):$==="Overwrite rows"?(m="overwrite",d=c.id):(m="new",d=Ir())}else m="new",d=Ir();e.events.emit("import:before",{source:"csv",tableId:d});let v;if(m==="new"){const $=Qr(t);let R=$.columns,B=$.rows;if(i.editColumns){const W=await i.editColumns(R);if(W===null)return;B=dc(B,R,W),R=W}const N=c?`${a} (${Date.now().toString(36)})`:a;await e.store.tables.insert({id:d,workspaceId:n,name:N,code:Wi(N),columns:R,view:"table",updatedAt:Date.now()}),v=B.map(W=>({id:Ir(),tableId:d,data:W,updatedAt:Date.now()}))}else{const $=c.columns;if(v=Mo(t).rows.map(B=>{const N={};for(let W=0;W<$.length;W++){const ce=$[W];N[ce.field]=Uo(B[W]??"",ce.type)}return{id:Ir(),tableId:d,data:N,updatedAt:Date.now()}}),m==="overwrite"){const B=e.store.rows(d),N=await B.find();await B.bulkRemove(N.map(W=>W.id))}}await e.store.rows(d).bulkInsert(v),e.events.emit("import:after",{source:"csv",tableId:d,rowCount:v.length})}function Mo(e){const t=e.replace(/﻿/,""),r=No(t),i=qo(t,r);if(i.length===0)return{header:[],rows:[]};const n=i[0],a=i.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:n,rows:a}}function Qr(e){const t=e.replace(/﻿/,""),r=No(t),i=qo(t,r);if(i.length===0)return{columns:[],rows:[]};const n=i[0],a=i.slice(1).filter(R=>!(R.length===1&&R[0]==="")),c=n.map((R,B)=>tc(R,B)),d=Ho(c.map(R=>R.field)),m=a.map(R=>{const B={};for(let N=0;N<d.length;N++)B[d[N]]=R[N]??"";return B}),v=c.map((R,B)=>R.type?R.type:nc(m.map(N=>N[d[B]]??"").filter(N=>N.length>0))),A=c.map((R,B)=>{const N=v[B]??"string",W={field:d[B],label:R.label,type:N},ce=ec(N),de=R.renderer??ce;return de&&(W.renderer=de),R.default!==void 0&&(W.default=R.default),R.max!=null&&(W.max=R.max),R.unique&&(W.unique=!0),R.notnull&&(W.notnull=!0),R.hidden&&(W.hidden=!0),W}),$=m.map(R=>{const B={};for(let N=0;N<d.length;N++){const W=d[N],ce=v[N]??"string";B[W]=Uo(R[W]??"",ce)}return B});return{columns:A,rows:$}}const Zl=new Set(["string","number","boolean","date","datetime"]),eo={color:"color",image:"image"};function ec(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function tc(e,t){const r=e.trim();if(!r.includes(":"))return{field:Wi(r||`col_${t+1}`),label:r||`Column ${t+1}`};const i=r.split(":"),n=Wi(i[0]||`col_${t+1}`),a=(i[1]??i[0]??"").trim()||n,c={field:n,label:a},d=(i[2]??"").trim();d&&(Zl.has(d)?c.type=d:eo[d]&&(c.type="string",c.renderer=eo[d]));const m=(i[3]??"").trim();m&&(c.default=m);const v=(i[4]??"").trim();if(v){const $=Number(v);Number.isFinite($)&&$>0&&(c.max=$)}const A=(i[5]??"").toLowerCase();return A.includes("u")&&(c.unique=!0),A.includes("n")&&(c.notnull=!0),A.includes("h")&&(c.hidden=!0),c}function No(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const a of t)a in r&&(r[a]+=1);let i=",",n=-1;for(const a of[",",";","	"])(r[a]??0)>n&&(i=a,n=r[a]??0);return i}function qo(e,t){const r=[];let i=[],n="",a=!1;for(let c=0;c<e.length;c++){const d=e[c];a?d==='"'?e[c+1]==='"'?(n+='"',c++):a=!1:n+=d:d==='"'?a=!0:d===t?(i.push(n),n=""):d===`
`||d==="\r"?(d==="\r"&&e[c+1]===`
`&&c++,i.push(n),r.push(i),i=[],n=""):n+=d}return(n.length>0||i.length>0)&&(i.push(n),r.push(i)),r}function nc(e){return e.length===0?"string":e.every(ic)?"boolean":e.every(sc)?"number":e.every(ac)?"datetime":e.every(oc)?"date":"string"}const rc=/^(true|false|yes|no|0|1)$/i;function ic(e){return rc.test(e.trim())}function sc(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function oc(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function ac(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function Uo(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const i=Number(r);return Number.isFinite(i)?i:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return Wo(r);case"datetime":return lc(r);default:return e}}function Wo(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let i=parseInt(t[1],10),n=parseInt(t[2],10);const a=t[3];let c=parseInt(a,10);a.length===2&&(c+=2e3);let d,m;return i>12?(d=i,m=n):n>12?(m=i,d=n):(d=i,m=n),`${c.toString().padStart(4,"0")}-${m.toString().padStart(2,"0")}-${d.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function lc(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const i=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(i)return`${Wo(`${i[1]}/${i[2]}/${i[3]}`)}T${i[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const a=n.toISOString();return`${a.slice(0,10)}T${a.slice(11,16)}`}return e}function cc(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function uc(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function Ho(e){const t=new Map,r=new Set,i=[];for(const n of e){let a=n,c=t.get(n)??0;for(;r.has(a);)c+=1,a=`${n}_${c+1}`;t.set(n,c),r.add(a),i.push(a)}return i}function dc(e,t,r){return e.map(i=>{const n={};for(let a=0;a<t.length;a++)n[r[a].field]=i[t[a].field];return n})}function Wi(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function Ir(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const hc=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:Ho,importCsvText:rs,init:Gl,meta:Xl,parseCsv:Qr,parseCsvRaw:Mo},Symbol.toStringTag,{value:"Module"})),fc={name:"csv-export",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"easyDBAccess built-ins"},pc={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return is(e,t)}};function mc(e){e.ui.registerExporter(pc),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const i=await t.store.tables.findOne(r.tableId);if(!i)return;const n=await t.store.rows(i.id).find(),a=is(i,n);await t.backend.saveFile(`${i.code||i.name||"table"}.csv`,a,"text/csv")}})}function is(e,t){const r=e.columns.map(a=>a.field),i=e.columns.map(a=>to(a.label??a.field)),n=t.map(a=>r.map(c=>to(gc(a.data[c]))).join(","));return[i.join(","),...n].join(`\r
`)}function gc(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function to(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const bc=Object.freeze(Object.defineProperty({__proto__:null,init:mc,meta:fc,serializeCsv:is},Symbol.toStringTag,{value:"Module"}));var yc=Object.defineProperty,wc=Object.getOwnPropertyDescriptor,Hn=(e,t,r,i)=>{for(var n=i>1?void 0:i?wc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&yc(t,r,n),n};function Hi(e,t={}){return(Pt.instance??vc()).open(e,t)}function vc(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function xc(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Pt=class extends Qe{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,i)=>r?i:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Pt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Pt.instance===this&&(Pt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&sn(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(()=>!0),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return U`
      <dialog @cancel=${this.onCancel}>
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
            ${this.message?U`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,r)=>U`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${r}`}
                      .checked=${this.selected[r]??!1}
                      @change=${()=>this.toggle(r)}
                    />
                    <label for=${`tsel-${r}`}>
                      <span class="name">${t.name}</span>
                      <span class="size">${xc(t.size)}</span>
                      ${t.detail?U`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};Pt.instance=null;Pt.styles=[rn,st`
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
      input[type='checkbox'] {
        width: 1rem;
        height: 1rem;
      }
      button.primary:disabled {
        background: #93c5fd;
        cursor: default;
      }
    `];Hn([Z()],Pt.prototype,"items",2);Hn([Z()],Pt.prototype,"selected",2);Hn([Z()],Pt.prototype,"heading",2);Hn([Z()],Pt.prototype,"message",2);Hn([Z()],Pt.prototype,"confirmLabel",2);Pt=Hn([dt("table-select-dialog")],Pt);const $c={name:"json-import",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"easyDBAccess built-ins"};function kc(e){e.ui.registerImporter(Cc),e.ui.registerDropHandler(async t=>{const i=Dc(t).filter(jc);if(i.length===0)return!1;t.preventDefault();for(const n of i)await Ec(e,n);return!0})}const Cc={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=Jr(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function Ec(e,t){await ss(e,await t.text(),t.name)}async function ss(e,t,r){const i=e.workspaceId();if(!i)throw new Error("json-import: no active workspace");let n;try{n=JSON.parse(t)}catch(B){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${B.message}`)});return}const a=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=Jr(n,a);if(c.length===0)return;let d=c;if(c.length>1){const B=await Hi(c.map(N=>({name:N.name,size:N.rows.length})),{title:"Import tables",message:`"${r}" contains ${c.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!B)return;d=B.map(N=>c[N])}const m=(await e.store.tables.find()).filter(B=>B.workspaceId===i),v=new Set(d.map(B=>B.name)),A=m.filter(B=>v.has(B.name));let $;if(A.length===0&&d.length===1)$="append-new";else{const B=A.length>0?[`Overwrite matching (${A.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],N=await e.ui.dialogs.choice(`Importing ${d.length} table${d.length===1?"":"s"} from "${r}".${A.length>0?`

${A.length} table${A.length===1?"":"s"} share a name with existing data.`:""}`,B,"JSON import");if(!N)return;N.startsWith("Overwrite matching")?$="overwrite-matching":N==="Replace entire workspace"?$="replace-workspace":$="append-new"}if($==="replace-workspace")for(const B of m){const N=e.store.rows(B.id),W=await N.find();await N.bulkRemove(W.map(ce=>ce.id)),await e.store.tables.remove(B.id)}const R=new Map(m.map(B=>[B.name,B]));for(const B of d){let N;const W=$==="overwrite-matching"?R.get(B.name):void 0;if(W){N=W.id;const De=e.store.rows(N),Be=await De.find();await De.bulkRemove(Be.map(ie=>ie.id)),await e.store.tables.patch(N,{columns:B.columns,...B.windowGeometry?{windowGeometry:B.windowGeometry}:{},...B.sortColumn?{sortColumn:B.sortColumn,sortAsc:B.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},updatedAt:Date.now()})}else N=so(),e.events.emit("import:before",{source:"json",tableId:N}),await e.store.tables.insert({id:N,workspaceId:i,name:B.name,code:Fc(B.name),columns:B.columns,view:"table",...B.windowGeometry?{windowGeometry:B.windowGeometry}:{},...B.sortColumn?{sortColumn:B.sortColumn,sortAsc:B.sortAsc??!0}:{},updatedAt:Date.now()});const ce=e.store.rows(N),de=B.rows.map(De=>({id:so(),tableId:N,data:De,updatedAt:Date.now()}));await ce.bulkInsert(de),e.events.emit("import:after",{source:"json",tableId:N,rowCount:B.rows.length})}}function Jr(e,t){if(Bt(e)&&no(e))return ro(e);if(Bt(e)&&Array.isArray(e.tables)){const r=e,i=[];for(const n of r.tables){if(_c(n)){const a=n,c=Bt(a.windowGeometry)?a.windowGeometry:void 0,d=typeof a.sortColumn=="string"?a.sortColumn:void 0,m=typeof a.sortAsc=="boolean"?a.sortAsc:void 0;i.push({name:String(n.name),columns:n.columns.map(Ac),rows:Array.isArray(n.rows)?n.rows.filter(Bt):[],...c?{windowGeometry:c}:{},...d?{sortColumn:d,sortAsc:m??!0}:{}});continue}Bt(n)&&no(n)&&i.push(...ro(n))}return i}if(Array.isArray(e)){const r=e.filter(Bt);return r.length===0?[]:[{name:t,...io(r)}]}return Bt(e)?[{name:t,...io([e])}]:[]}function no(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!Bt(r))continue;const i=r;if(Array.isArray(i.dataArray)&&Array.isArray(i.columns))return!0}return!1}function ro(e){const t=[];for(const[r,i]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!Bt(i))continue;const n=i;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const a=r.replace(/\.table\.json$/,""),c=n.columns.map(A=>Sc(A)),d=c.map(A=>A.field),m=n.dataArray.filter(A=>Array.isArray(A)).map(A=>{const $={};for(let R=0;R<d.length;R++)$[d[R]]=A[R];return $}),v={name:a,columns:c,rows:m};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const A=n.elementRect;v.windowGeometry={x:A.x,y:A.y,w:A.width??600,h:A.height??400,z:A.zIndex??100,minimized:!!A.minimized,maximized:!!A.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<d.length&&(v.sortColumn=d[n.sortColumn],v.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(v)}return t}function Sc(e){const t=String(e.field??"col"),r=String(e.name??t),i=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:i};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function _c(e){return Bt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Ac(e){if(!Bt(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let i=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(i==="color"||i==="image")&&(n=n??i,i="string");const a={field:r,label:String(t.label??r),type:i};return n&&(a.renderer=n),typeof t.script=="string"&&(a.script=t.script),a}function io(e){const t=new Set;for(const n of e)for(const a of Object.keys(n))t.add(a);return{columns:Array.from(t).map(n=>({field:n,label:n,type:Pc(e.map(a=>a[n]))})),rows:e}}function Pc(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Tc(r))?"date":"string"}function Tc(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function Bt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Dc(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function jc(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function Fc(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function so(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Oc=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:ss,init:kc,meta:$c,parsedToTables:Jr},Symbol.toStringTag,{value:"Module"}));class Yt extends Error{constructor(t,r){const i=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(i),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function On(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),i={};for(const[d,m]of t.searchParams)i[d]=m;let n,a=null,c=null;if(r.length>=2){c=decodeURIComponent(r[r.length-1]),a=decodeURIComponent(r[r.length-2]);const d=r.slice(0,r.length-2).join("/");n=t.origin+(d?"/"+d:"")}else r.length===1&&(a=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:a,table:c,query:i}}function Vr(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[i,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(i,String(n));return r.toString()}function Rc(e){const t=e?.next_url??null,r=e?.next,i=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],a=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(d=>Array.isArray(d)&&a?Object.fromEntries(a.map((m,v)=>[m,d[v]])):d),nextUrl:t,nextToken:i,hasMore:t!=null||i!=null,truncated:e?.truncated===!0}}function zc(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function Ic(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],i={},n=e?.column_details;if(Array.isArray(n))for(const d of n)i[d.column??d.name]=d;else n&&typeof n=="object"&&Object.assign(i,n);for(const d of r)d in i||(i[d]={});return{columns:(r.length?r:Object.keys(i)).map(d=>{const m=i[d]||{},v=m.is_pk===!0||m.is_pk===1||t.includes(d),A={field:d,label:Ko(d),type:zc(m.sqlite_type??m.type,d)};return(m.notnull===!0||m.notnull===1||v)&&(A.notnull=!0),v&&(A.unique=!0),m.hidden===!0&&(A.hidden=!0),A}),pks:t}}function Ko(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function os(e){const t=[],r=new Set;for(const i of e)for(const n of Object.keys(i))r.has(n)||(r.add(n),t.push(n));return t.map(i=>({field:i,label:Ko(i),type:Lc(e.map(n=>n[i]))}))}function Lc(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Bc(r))?"datetime":"string"}function Bc(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Mc(e){const t=new TextEncoder().encode(String(e));let r="";for(const i of t){const n=String.fromCharCode(i);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+i.toString(16).toUpperCase().padStart(2,"0")}return r}function Nc(e,t){return!t||t.length===0?null:t.map(r=>Mc(e[r])).join(",")}function qc(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const i of t){if(typeof i=="string"){r.push(i);continue}if(i&&typeof i=="object"&&typeof i.name=="string"){if(i.name==="_memory")continue;r.push(typeof i.route=="string"&&i.route?i.route:i.name)}}return r}function Uc(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],i=[];for(const n of r){if(typeof n=="string"){i.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&i.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return i}async function ur(e,t){let r;try{r=await e(t)}catch(n){const a=n?.message||"network error";throw new Yt({error:`Couldn't reach ${t} (${a}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Yt(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const i=await r.json();if(i&&i.ok===!1)throw new Yt(i,r.status);return i}async function Vo(e,t){return qc(await ur(e,`${t}/-/databases.json`))}async function oo(e,t,r){return Uc(await ur(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function Yo(e,t){const r=Vr(t,{_extra:"columns"}),i=await ur(e,r),{columns:n,pks:a}=Ic(i),c=!!i&&i.column_details!=null;return{columns:n,pks:a,count:i?.count??null,typed:c,raw:i}}function Xo(e,t){if(t.length===0)return e;const r=new Map(os(t).map(i=>[i.field,i.type]));return e.map(i=>{if(i.type!=="string")return i;const n=r.get(i.field);return n&&n!=="string"?{...i,type:n}:i})}async function Zr(e,t,r={}){const i=r.maxRows??1e4,a={_size:r.pageSize??1e3,...r.extraParams||{}};let c=Vr(t,a);const d=[];let m=!1,v=!1,A=0;for(;c;){const $=await ur(e,c),R=Rc($);d.push(...R.rows),m=m||R.truncated,A+=1;const B=R.nextUrl!=null?R.nextUrl:R.nextToken!=null?Vr(t,{_next:R.nextToken}):null;B&&d.length<i&&R.rows.length>0?c=B:(v=B!=null&&R.rows.length>0,c=null)}return{rows:d,truncated:m,hasMore:v,pages:A}}function Wc(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function Go(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function Qo(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function ei(e,t,r,i){let n;try{n=await e(t,{method:"POST",headers:Wc(i),body:JSON.stringify(r)})}catch(c){throw new Yt({error:`Couldn't reach ${t} (${c?.message||"network error"}).`},0)}if(n&&n.ok===!1){let c=null;try{c=await n.json()}catch{}throw new Yt(c&&typeof c=="object"?c:{error:`HTTP ${n.status} for ${t}`},n.status)}const a=await n.json();if(a&&a.ok===!1)throw new Yt(a,n.status);return a}async function ao(e,t,r,i={}){const n=await ei(e,Go(t,"insert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function Hc(e,t,r,i,n={}){const a=await ei(e,Qo(t,r,"update"),{update:i,return:!0},n.token);return a&&typeof a.row=="object"&&a.row?a.row:Array.isArray(a?.rows)&&a.rows[0]?a.rows[0]:null}async function lo(e,t,r,i={}){await ei(e,Qo(t,r,"delete"),{},i.token)}async function Kc(e,t,r,i={}){const n=await ei(e,Go(t,"upsert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function Vc(e,t){const r=Vr(t,{_extra:"primary_keys"}),i=await ur(e,r);return Array.isArray(i?.primary_keys)?i.primary_keys:[]}async function Jo(e,t,r={}){const i=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,i);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const a=await n.json(),c=a?.datasette?.version??a?.version??null;let d=null;try{d=(await(await e(`${t}/-/actor.json`,i)).json())?.actor??null}catch{}return{reachable:!0,version:c,actor:d,writable:!!(r.token&&d)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function ti(e,t){return t?(r,i)=>{const n=(i??{}).headers??{};return e(r,{...i??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zo=Symbol.for(""),Yc=e=>{if(e?.r===Zo)return e?._$litStatic$},Xc=e=>({_$litStatic$:e,r:Zo}),co=new Map,Gc=e=>(t,...r)=>{const i=r.length;let n,a;const c=[],d=[];let m,v=0,A=!1;for(;v<i;){for(m=t[v];v<i&&(a=r[v],(n=Yc(a))!==void 0);)m+=n+t[++v],A=!0;v!==i&&d.push(a),c.push(m),v++}if(v===i&&c.push(t[i]),A){const $=c.join("$$lit$$");(t=co.get($))===void 0&&(c.raw=c,co.set($,t=c)),r=d}return e(t,...r)},Qc=Gc(U);var Jc=Object.defineProperty,Zc=Object.getOwnPropertyDescriptor,ni=(e,t,r,i)=>{for(var n=i>1?void 0:i?Zc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Jc(t,r,n),n};let Mt=class extends Qe{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r){return this.values=t,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(i=>{this.resolveFn=i,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),Mt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Mt.instance===this&&(Mt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(r=>r.value.toLowerCase().includes(e));return U`
      <header>
        <span class="mi sm">search</span>
        <input
          type="text"
          autofocus
          placeholder="Filter values…"
          .value=${this.search}
          @input=${r=>this.search=r.target.value}
        />
        <button
          class="icon"
          title="Close"
          @click=${()=>this.close(null)}
        >
          <span class="mi sm">close</span>
        </button>
      </header>
      ${t.length===0?U`<div class="empty">No matching values.</div>`:U`<ul>
            ${t.slice(0,500).map(r=>U`
                <li
                  class=${r.value===this.current?"selected":""}
                  @click=${()=>this.close(r.value)}
                >
                  <span class="label">${r.value||U`<em>(empty)</em>`}</span>
                  <span class="count">${r.count}</span>
                </li>
              `)}
          </ul>`}
      ${this.values.length>500?U`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button class="text" @click=${()=>this.close({clear:!0})}>Clear filter</button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};Mt.instance=null;Mt.styles=[on,st`
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
      li.selected {
        background: #dbeafe;
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
    `];ni([Gt({type:Array})],Mt.prototype,"values",2);ni([Gt({type:String})],Mt.prototype,"current",2);ni([Z()],Mt.prototype,"search",2);Mt=ni([dt("filter-popover")],Mt);var eu=Object.defineProperty,tu=Object.getOwnPropertyDescriptor,qt=(e,t,r,i)=>{for(var n=i>1?void 0:i?tu(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&eu(t,r,n),n};let Tt=class extends Qe{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const i of this.options)if(i.toLowerCase().includes(t)&&(r.push(i),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return U`
      <div class="wrap">
        <input
          type="text"
          placeholder=${this.placeholder}
          .value=${this.value}
          @focus=${()=>this.openDropdown()}
          @click=${()=>this.openDropdown()}
          @input=${this.onInput}
          @keydown=${this.onKeyDown}
        />
        ${this.value?U`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${r=>r.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:Fe}
      </div>
      ${this.open?U`<ul class="dropdown" style=${t}>
            ${e.length===0?U`<li class="empty">No matching values.</li>`:e.map((r,i)=>U`
                    <li
                      class=${i===this.highlightIdx?"highlighted":""}
                      @mousedown=${n=>n.preventDefault()}
                      @click=${()=>this.onPick(r)}
                    >
                      ${r}
                    </li>
                  `)}
          </ul>`:Fe}
    `}};Tt.styles=st`
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
    .dropdown li.empty {
      color: #9ca3af;
      font-style: italic;
      cursor: default;
    }
    .dropdown li.empty:hover {
      background: transparent;
    }
  `;qt([Gt({type:String})],Tt.prototype,"value",2);qt([Gt({type:Array})],Tt.prototype,"options",2);qt([Gt({type:String})],Tt.prototype,"placeholder",2);qt([Z()],Tt.prototype,"open",2);qt([Z()],Tt.prototype,"highlightIdx",2);qt([Z()],Tt.prototype,"dropTop",2);qt([Z()],Tt.prototype,"dropLeft",2);qt([Z()],Tt.prototype,"dropMinWidth",2);qt([Z()],Tt.prototype,"editing",2);qt([Wn("input")],Tt.prototype,"inputEl",2);Tt=qt([dt("filter-combobox")],Tt);var nu=Object.defineProperty,ru=Object.getOwnPropertyDescriptor,ht=(e,t,r,i)=>{for(var n=i>1?void 0:i?ru(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&nu(t,r,n),n};const iu=200;let it=class extends Qe{constructor(){super(...arguments),this.tableId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;t.tableId===this.tableId&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading)}}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.()}async updated(e){e.has("tableId")&&this.tableId&&(this.unsubscribe?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells()}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",su(t))}async bind(){if(!this.tableId)return;const e=await je(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const a=n.find(c=>c.id===this.tableId);a&&this.applyTable(a)}),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const i=window.setTimeout(()=>this.loading=!0,iu);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(i),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filters={...e.filters??{}}}async setCell(e,t,r){const i=await je();await this.commitCell(i,e,t,r)}async commitCell(e,t,r,i){const n=this.columns.find(a=>a.field===r);if(n){const a=ou(n,i,this.rows,t.id);if(a){await e.api.ui.dialogs.alert(a,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:i},updatedAt:Date.now()})}catch(a){await e.api.ui.dialogs.alert(a?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}renderCell(e,t){const r=e.data[t.field],i=t.renderer,n=i?this.cellRenderers?.get(i):void 0;if(n){const a=Xc(n);return Qc`<${a}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        @change=${c=>this.setCell(e,t.field,c.detail.value)}
      ></${a}>`}switch(t.type){case"boolean":return U`<input
          type="checkbox"
          .checked=${r===!0||r==="true"||r===1||r==="1"}
          @change=${c=>this.setCell(e,t.field,c.target.checked)}
        />`;case"date":return U`<input
          type="date"
          .value=${au(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"datetime":return U`<input
          type="datetime-local"
          .value=${lu(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"number":return U`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${a=>{const c=a.target.value;this.setCell(e,t.field,c===""?null:Number(c))}}
        />`;default:return U`<input
          type="text"
          .value=${String(r??"")}
          @change=${a=>this.setCell(e,t.field,a.target.value)}
        />`}}async deleteRow(e){const t=await je();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await je(),i=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};await r.store.tables.patch(this.tableId,i)}filteredRows(){const e=Object.entries(this.filters).filter(([,i])=>i&&i.trim().length>0),t=this.globalQuery.trim().toLowerCase(),r=this.localQuery.trim().toLowerCase();return e.length===0&&t.length===0&&r.length===0?this.rows:this.rows.filter(i=>{const n=a=>Object.values(i.data).some(c=>c!=null&&String(c).toLowerCase().includes(a));return t.length>0&&!n(t)||r.length>0&&!n(r)?!1:e.every(([a,c])=>String(i.data[a]??"").toLowerCase().includes(c.toLowerCase()))})}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,i=this.columns.find(c=>c.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,a=[...e];return a.sort((c,d)=>{const m=c.data[t],v=d.data[t],A=B=>B==null?0:B===""?1:2,$=A(m),R=A(v);return $!==2||R!==2?($-R)*n:cu(m,v,i)*n}),a}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,i=Mt.instance;if(!i)return;const n=new Map;for(const d of this.rowsFacetedFor(t)){const m=d.data[t];if(m==null)continue;const v=String(m);n.set(v,(n.get(v)??0)+1)}const a=[...n.entries()].map(([d,m])=>({value:d,count:m})).sort((d,m)=>m.count-d.count||d.value.localeCompare(m.value)),c=await i.open(r.getBoundingClientRect(),a,this.filters[t]??"");c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>this.saveFilters(),250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,i])=>i&&i.trim().length>0&&r!==e).map(([r,i])=>[r,i.trim().toLowerCase()]);return t.length===0?this.rows:this.rows.filter(r=>t.every(([i,n])=>String(r.data[i]??"").toLowerCase().includes(n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,i=500;for(const n of this.visibleColumns){let a=!0;for(const d of t){const m=d.data[n.field];if(m==null)continue;if((typeof m=="string"?m:String(m)).length>=r){a=!1;break}}if(!a)continue;const c=new Set;for(const d of this.rowsFacetedFor(n.field)){const m=d.data[n.field];if(m==null||m==="")continue;const v=typeof m=="string"?m:String(m);if(!(v.length>=r)&&(c.add(v),c.size>=i))break}e.set(n.field,[...c].sort())}return e}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const i=r.offsetWidth;this.resizing={field:t,startX:e.clientX,startW:i};const n=c=>{if(!this.resizing)return;const d=c.clientX-this.resizing.startX,m=Math.max(40,this.resizing.startW+d);this.columns=this.columns.map(v=>v.field===this.resizing.field?{...v,width:m}:v)},a=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",a);const c=this.resizing?.field;if(this.resizing=null,!c)return;await(await je()).store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",a)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientX<i.left+i.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,i=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!i)return;const n=[...this.columns],a=n.findIndex(v=>v.field===r);if(a<0)return;const[c]=n.splice(a,1);let d=n.findIndex(v=>v.field===t);if(d<0){n.splice(a,0,c);return}i==="after"&&(d+=1),n.splice(d,0,c),await(await je()).store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await je(),t={};for(const[i,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[i]=n);const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,i=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,i+r);return{slice:e.slice(i,n),topPad:i*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows(),t=this.visibleColumns,{slice:r,topPad:i,bottomPad:n}=this.virtualSlice(e),a=this.computeFilterSuggestions();return U`
      ${this.loading||this.externalLoading?U`<div class="load-bar" role="progressbar" aria-label="Loading rows">
            <div class="load-bar-fill"></div>
          </div>`:Fe}
      <table>
        <colgroup>
          ${t.map(c=>U`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(c=>{const d=this.sortColumn===c.field&&this.sortDir,m=d==="asc"?"▲":d==="desc"?"▼":"⇅",v=`t-${c.type}`,A=this.dragSourceField===c.field,$=this.dropTargetField===c.field,R=$&&this.dropEdge==="before"?" drop-before":$&&this.dropEdge==="after"?" drop-after":"";return U`
                <th
                  class=${`${v}${d?" sorted":""}${A?" drag-source":""}${R}`}
                  title=${`${c.field} — click to sort, drag to reorder`}
                  draggable="true"
                  @click=${()=>this.toggleSort(c.field)}
                  @dragstart=${B=>this.onColDragStart(B,c.field)}
                  @dragover=${B=>this.onColDragOver(B,c.field,B.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(c.field)}
                  @drop=${B=>this.onColDrop(B,c.field)}
                  @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                >
                  ${c.label}<span class="sort-icon">${m}</span>
                  <button
                    class=${`funnel${this.filters[c.field]?" active":""}`}
                    title="Filter by value"
                    @click=${B=>this.openFilterPicker(B,c.field)}
                  >
                    <span class="mi sm">filter_list</span>
                  </button>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${B=>B.stopPropagation()}
                    @pointerdown=${B=>this.onResizeStart(B,c.field,B.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:2rem"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(c=>{const d=a.get(c.field)??[];return U`
                <th>
                  <filter-combobox
                    .value=${this.filters[c.field]??""}
                    .options=${d}
                    placeholder="filter…"
                    @filter-change=${m=>this.onFilterInput(c.field,m.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${i>0?U`<tr class="spacer" style=${`height:${i}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${r.map(c=>U`
              <tr>
                ${t.map(d=>U`<td class=${`t-${d.type}${d.renderer?` r-${d.renderer}`:""}`}>
                      ${this.renderCell(c,d)}
                    </td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(c.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?U`<tr class="spacer" style=${`height:${n}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};it.styles=[on,st`
      :host {
        display: block;
        overflow: auto;
        max-height: 60vh;
      }
      /* Indeterminate loading bar, pinned to the top of the table's header while
       a (large / remote) table's rows are still loading. Sticky + high z-index
       so it rides above the sticky column headers (th z-index 1–2). */
      .load-bar {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 3;
        height: 3px;
        background: #dbeafe;
        overflow: hidden;
      }
      .load-bar-fill {
        height: 100%;
        width: 40%;
        background: #2563eb;
        border-radius: 2px;
        animation: eda-load-bar 1.1s ease-in-out infinite;
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
        width: 100%;
        border-collapse: collapse;
        font-size: 0.875rem;
      }
      th,
      td {
        border: 1px solid #e5e7eb;
        padding: 0.25rem 0.5rem;
        text-align: left;
        vertical-align: top;
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
      th[draggable='true'] {
        cursor: grab;
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
      th.t-number,
      td.t-number {
        text-align: right;
      }
      th.t-number .sort-icon {
        margin-left: 0.25rem;
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
      }
      .mi.sm {
        font-size: 1rem;
      }
    `];ht([Gt({type:String})],it.prototype,"tableId",2);ht([Z()],it.prototype,"columns",2);ht([Z()],it.prototype,"rows",2);ht([Z()],it.prototype,"sortColumn",2);ht([Z()],it.prototype,"sortDir",2);ht([Z()],it.prototype,"filters",2);ht([Z()],it.prototype,"globalQuery",2);ht([Z()],it.prototype,"localQuery",2);ht([Z()],it.prototype,"dragSourceField",2);ht([Z()],it.prototype,"dropTargetField",2);ht([Z()],it.prototype,"dropEdge",2);ht([Z()],it.prototype,"resizing",2);ht([Z()],it.prototype,"cellRenderers",2);ht([Z()],it.prototype,"scrollY",2);ht([Z()],it.prototype,"viewportHeight",2);ht([Z()],it.prototype,"loading",2);ht([Z()],it.prototype,"externalLoading",2);it=ht([dt("data-table")],it);function su(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function ou(e,t,r,i){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(a=>a.id!==i&&a.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function au(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function lu(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function cu(e,t,r){switch(r){case"number":{const i=Number(e),n=Number(t);return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const i=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function uo(e,t){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t}}))}class uu extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function ea(e){return`datasette:token:${e}`}function du(e,t){for(const[r,i]of Object.entries(t))if(r!=="data"&&e[r]!==i)return!1;return!0}function hu(e,t){const r=e.source,i=r?.config??{},n={base:i.base,db:i.db,table:i.table,query:{}},a=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],c=r?.writable===!0,d=i.maxRows??1e4,m=i.pollIntervalMs??0,v=(ie,pe)=>t.backend.fetch(ie,pe);async function A(){const pe=(await t.settings.findOne(ea(i.base)))?.value;return typeof pe=="string"&&pe.length>0?pe:void 0}const $=async(ie,pe)=>ti(v,await A())(ie,pe);function R(ie){return{id:Nc(ie,a)??fu(),tableId:e.id,data:ie,updatedAt:Date.now()}}function B(ie){if(!c)throw new uu(ie)}function N(ie){const pe={};for(const[Ce,be]of Object.entries(ie))a.includes(Ce)||(pe[Ce]=be);return pe}const W=new Set;let ce=[],de=!1,De=null;function Be(){return De||(De=(async()=>{try{const{rows:ie}=await Zr($,n,{maxRows:d});ce=ie.map(R),de=!0;for(const pe of W)pe(ce);return ce}finally{De=null}})(),De)}return{async find(ie){const pe=de?ce:await Be();return!ie||Object.keys(ie).length===0?pe:pe.filter(Ce=>du(Ce,ie))},async findOne(ie){return(de?ce:await Be()).find(Ce=>Ce.id===ie)??null},async insert(ie){B("insert");const[pe]=await ao($,n,[ie.data]),Ce=R(pe??ie.data);return t.events.emit("row:created",{tableId:e.id,row:Ce}),Be(),Ce},async bulkInsert(ie){if(ie.length===0)return[];B("insert");const pe=await ao($,n,ie.map(be=>be.data)),Ce=(pe.length?pe:ie.map(be=>be.data)).map(R);return Be(),Ce},async upsert(ie){B("upsert");const[pe]=await Kc($,n,[ie.data]),Ce=R(pe??ie.data);return Be(),Ce},async patch(ie,pe){B("update");const Ce=pe.data,be=N(Ce??{}),yt=await Hc($,n,ie,be),xt=R(yt??{...Ce??{}});return t.events.emit("row:updated",{tableId:e.id,row:xt,prev:xt}),Be(),xt},async remove(ie){B("delete"),await lo($,n,ie),t.events.emit("row:deleted",{tableId:e.id,rowId:ie}),Be()},async bulkRemove(ie){if(ie.length!==0){B("delete");for(const pe of ie)await lo($,n,pe);Be()}},subscribe(ie){W.add(ie),de?ie(ce):Be();let pe=null;return m>0&&(pe=setInterval(()=>void Be(),m)),()=>{W.delete(ie),pe&&clearInterval(pe)}},async refresh(){await Be()}}}function fu(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var pu=Object.defineProperty,mu=Object.getOwnPropertyDescriptor,dr=(e,t,r,i)=>{for(var n=i>1?void 0:i?mu(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&pu(t,r,n),n};const gu="https://latest.datasette.io/ephemeral";let Ot=class extends Qe{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();t&&this.finish({url:t,token:this.token.trim()})}}connectedCallback(){super.connectedCallback(),Ot.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ot.instance===this&&(Ot.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&sn(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return U`
      <dialog @cancel=${this.onCancel} @keydown=${wn}>
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
                placeholder="e.g. ${gu}"
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
    `}};Ot.instance=null;Ot.styles=[rn,st`
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
    `];dr([Z()],Ot.prototype,"url",2);dr([Z()],Ot.prototype,"token",2);dr([Z()],Ot.prototype,"status",2);dr([Z()],Ot.prototype,"statusKind",2);Ot=dr([dt("datasette-connect-dialog")],Ot);const Ki=e=>e.replace(/^https?:\/\//,"");async function ta(e,t,r,i={}){if(t.db&&t.table)return[{db:t.db,table:t.table,count:null,hidden:!1,pks:[]}];let n=[];if(t.db){for(const d of await oo(e,t.base,t.db))d.hidden||n.push(d);if(i.skipPicker)return n}else{const d=await Vo(e,t.base);if(d.length===0)return[];let m=d;if(d.length>1){const v=await Hi(d.map(A=>({name:A,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${Ki(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!v)return null;m=v.map(A=>d[A])}for(const v of m)try{for(const A of await oo(e,t.base,v))A.hidden||n.push(A)}catch{}}if(n.length===0)return[];const a=new Set(n.map(d=>d.db)).size>1,c=await Hi(n.map(d=>({name:a?`${d.db}/${d.table}`:d.table,size:d.count,detail:a?void 0:d.db})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${Ki(t.base)}.`,confirmLabel:r});return c?c.map(d=>n[d]):null}const bu='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',yu={name:"datasette-source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"easyDBAccess built-ins",optional:!0},Nn={maxImportRows:1e4,pageSize:1e3},wu="https://latest.datasette.io/fixtures/facetable";function vu(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:bu,tooltip:"Connect a live, editable Datasette table",onClick:()=>Su(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>Tu(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:hu}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const i=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${wu}`,"","Import from Datasette");i&&await ho(t,i)}}),e.ui.registerDropHandler(async(t,r)=>{const i=t.dataTransfer?.getData("text/plain")||"";return xu(i)?(t.preventDefault(),await ho(r,i),!0):!1})}async function ho(e,t){try{await as(e,t)}catch(r){let i;r instanceof Yt?i=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:i=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(i,"Datasette import failed")}}function xu(e){try{const t=On(e);return!!(t.db&&t.table)}catch{return!1}}function $u(e,t){if(!e.has(t))return t;for(let r=2;;r++){const i=`${t} (${r})`;if(!e.has(i))return i}}async function as(e,t,r={}){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=On(t),c=await ta(B=>e.backend.fetch(B),n,"Import",{skipPicker:r.skipTablePicker});if(c===null)return;if(c.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const d=[];let m=0;for(const B of c){const N={base:n.base,db:B.db,table:B.table,query:{}},W=await ku(e,i,N);if(W.skipped){m+=1;continue}d.push({tableId:W.tableId,ref:N,overwrite:W.overwrite})}let v=0,A=0;const $=[],R=[];for(const B of d)try{const N=await Cu(e,B.tableId,B.ref,B.overwrite);v+=1,A+=N.rowCount,(N.hasMore||N.truncated)&&$.push(`${B.ref.db}/${B.ref.table}`)}catch(N){R.push(`${B.ref.db}/${B.ref.table}: ${N?.message??String(N)}`)}Eu(e,{imported:v,skipped:m,totalRows:A,capped:$,failed:R,requested:c.length})}async function ku(e,t,r){const i=`${r.db}/${r.table}`,n={type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},a=(await e.store.tables.find()).filter(v=>v.workspaceId===t),c=a.find(v=>v.name===i);let d=i;if(c){const v=await e.ui.dialogs.choice(`A table named "${i}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!v||v==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(v==="Overwrite")return await e.store.tables.patch(c.id,{origin:n,updatedAt:Date.now()}),{tableId:c.id,overwrite:!0};d=$u(new Set(a.map(A=>A.name)),i)}const m=ri();return await e.store.tables.insert({id:m,workspaceId:t,name:d,code:ra(`${r.db}-${r.table}`),columns:[],view:"table",origin:n,updatedAt:Date.now()}),{tableId:m,overwrite:!1}}async function Cu(e,t,r,i){const n=`${r.db}/${r.table}`,a=c=>e.backend.fetch(c);uo(t,!0);try{let c=[],d=null,m=!1;try{const de=await Yo(a,r);c=de.columns,d=de.count,m=de.typed}catch{}const{rows:v,truncated:A,hasMore:$,pages:R}=await Zr(a,r,{maxRows:Nn.maxImportRows,pageSize:Nn.pageSize}),B=c.length===0?os(v):m?c:Xo(c,v),N=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t}),await e.store.tables.patch(t,{columns:B,updatedAt:N});const W=e.store.rows(t);if(i){const de=await W.find();await W.bulkRemove(de.map(De=>De.id))}const ce=v.map(de=>({id:ri(),tableId:t,data:de,updatedAt:N}));return await W.bulkInsert(ce),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:v.length}),{name:n,rowCount:v.length,hasMore:$,truncated:A,pages:R,count:d}}finally{uo(t,!1)}}function Eu(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,i=`${t.imported} table${t.imported===1?"":"s"}`,n=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${i} (${r});${n} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.capped.length} capped at ${Nn.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${i} (${r}) from Datasette.${n}`,{kind:"success",title:"Datasette import"})}async function Su(e){const t=Ot.instance??_u(),r=(n,a)=>e.backend.fetch(n,a),i=await t.open({initialUrl:"https://datasette.io",async onTest(n,a){const c=On(n),d=await Jo(r,c.base,{token:a||void 0});if(!d.reachable)return`Unreachable: ${d.error??"no response"}`;const m=d.version?` (Datasette ${d.version})`:"";return d.writable?`Reachable${m} — signed in, read-write.`:`Reachable${m} — read-only (no token / not authenticated).`}});if(i)try{await na(e,i.url,i.token)}catch(n){const a=n instanceof Yt?n.message:n?.message??String(n);await e.ui.dialogs.alert(a,"Connect Datasette failed")}}function _u(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function na(e,t,r){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=On(t),a=($,R)=>e.backend.fetch($,R),c=ti(a,r||void 0),d=await Jo(a,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:ea(n.base),value:r});let m;try{m=await ta(c,n,"Connect")}catch($){const R=$ instanceof Yt?$.message:$?.message??String($);throw new Error(`Couldn't read tables from ${Ki(n.base)}: ${R}`)}if(m===null)return;if(m.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const v=[];for(const $ of m){const R=await Au(e,i,n.base,$,d.writable,r);v.push({tableId:R,c:$})}const A=d.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${v.length} live table${v.length===1?"":"s"} from Datasette (${A}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:$,c:R}of v)Pu(e,$,n.base,R,r)}async function Au(e,t,r,i,n,a){const c=(await e.store.tables.find()).find(A=>{const $=A.source?.config;return A.workspaceId===t&&A.source?.type==="datasette"&&$?.base===r&&$?.db===i.db&&$?.table===i.table});let d=i.pks??[];if(d.length===0){const A=ti(($,R)=>e.backend.fetch($,R),a||void 0);try{d=await Vc(A,{base:r,db:i.db,table:i.table,query:{}})}catch{d=[]}}const m=c?.id??ri(),v={...c??{},id:m,workspaceId:t,name:`${i.db}/${i.table}`,code:ra(`${i.db}-${i.table}`),columns:c?.columns??[],view:c?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:i.db,table:i.table,pks:d}},updatedAt:Date.now()};return c?await e.store.tables.upsert(v):await e.store.tables.insert(v),m}async function Pu(e,t,r,i,n){const a={base:r,db:i.db,table:i.table,query:{}},c=ti((d,m)=>e.backend.fetch(d,m),n||void 0);try{let d=[],m=!1;try{const N=await Yo(c,a);d=N.columns,m=N.typed}catch{}const{rows:v}=await Zr(c,a,{maxRows:50,pageSize:50}),A=d.length===0?os(v):m?d:Xo(d,v);if(A.length===0)return;const $=await e.store.tables.findOne(t);if(!$)return;const R=$.source?.config?.pks??[],B=A.map(N=>R.includes(N.field)?{...N,unique:!0,notnull:!0}:N);await e.store.tables.patch(t,{columns:B,updatedAt:Date.now()})}catch{}}async function Tu(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const i=e.store.rows(t);typeof i.refresh=="function"&&await i.refresh();const n=await i.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await Du(e,r)}catch(i){const n=i instanceof Yt?i.message:i?.message??String(i);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function Du(e,t){const r=On(t.origin.url),i=$=>e.backend.fetch($),{rows:n,hasMore:a,truncated:c}=await Zr(i,r,{maxRows:Nn.maxImportRows,pageSize:Nn.pageSize}),d=Date.now(),m=e.store.rows(t.id),v=await m.find();await m.bulkRemove(v.map($=>$.id)),await m.bulkInsert(n.map($=>({id:ri(),tableId:t.id,data:$,updatedAt:d}))),await e.store.tables.patch(t.id,{updatedAt:d});const A=a||c?` (capped at ${Nn.maxImportRows})`:"";e.ui.dialogs.toast(`Refreshed ${n.length} rows from ${r.db}/${r.table}${A}.`,{kind:a||c?"warning":"success",title:"Refresh"})}function ra(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function ri(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const ju=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:na,importDatasette:as,init:vu,meta:yu},Symbol.toStringTag,{value:"Module"})),Fu={name:"dump-export",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"easyDBAccess built-ins"};function Ou(e){e.ui.registerFooterButton({id:"dump-export:dump",label:"Dump",icon:"archive",tooltip:"Export the current workspace as a JSON dump file",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await ii(e);await e.backend.saveFile(`workspace-${t}.db.json`,r,"application/json")}})}async function ii(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i={workspaceId:t,exportedAt:Date.now(),tables:[]};for(const n of r){const a=await e.store.rows(n.id).find();i.tables.push({name:n.name,columns:n.columns,rows:a.map(c=>c.data),...n.windowGeometry?{windowGeometry:n.windowGeometry}:{},...n.sortColumn?{sortColumn:n.sortColumn,sortAsc:n.sortAsc??!0}:{}})}return JSON.stringify(i,null,2)}const Ru=Object.freeze(Object.defineProperty({__proto__:null,init:Ou,meta:Fu,serializeWorkspace:ii},Symbol.toStringTag,{value:"Module"})),zu={name:"sql-export",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"easyDBAccess built-ins"};function Iu(e){e.ui.registerFooterButton({id:"sql-export:dump",label:"SQL",icon:"storage",tooltip:"Export the current workspace as a .sql script",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await ia(e);await e.backend.saveFile(`workspace-${t}.sql`,r,"application/sql")}})}async function ia(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const a=await e.store.rows(n.id).find();i.push(Lu(n,a),"")}return i.push("COMMIT;",""),i.join(`
`)}function Lu(e,t){const r=Vi(e.code||e.name||`table_${e.id}`),i=['  "__id" TEXT PRIMARY KEY',...e.columns.map(a=>`  ${Bu(a)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,i.join(`,
`),");"];if(t.length>0){const c=["__id",...e.columns.map(d=>d.field)].map(d=>`"${Vi(d)}"`).join(", ");for(const d of t){const m=[fo(d.id),...e.columns.map(v=>fo(d.data[v.field],v.type))];n.push(`INSERT INTO "${r}" (${c}) VALUES (${m.join(", ")});`)}}return n.join(`
`)}function Bu(e){const t=[`"${Vi(e.field)}"`,Mu(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function Mu(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function fo(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=Nu(e);return r===null?"NULL":Lr(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?Lr(e.toISOString()):Lr(typeof e=="string"?e:JSON.stringify(e))}function Nu(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?po(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const i=new Date(t);return Number.isFinite(i.getTime())?po(i):null}return null}function po(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),i=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${i}`}function Lr(e){return`'${e.replace(/'/g,"''")}'`}function Vi(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const qu=Object.freeze(Object.defineProperty({__proto__:null,init:Iu,meta:zu,serializeWorkspaceAsSql:ia},Symbol.toStringTag,{value:"Module"})),Uu={name:"gist-sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"easyDBAccess built-ins"},Wu="gist:";function Hu(e){e.ui.registerFooterButton({id:"gist-sync:push",label:"Push",icon:"cloud_upload",tooltip:"Push the current workspace to a GitHub Gist",onClick:async()=>{try{await Yu(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerFooterButton({id:"gist-sync:pull",label:"Pull",icon:"cloud_download",tooltip:"Pull the latest tables from the configured Gist",onClick:async()=>{try{await Xu(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}})}async function sa(e){const t=e.workspaceId();return`${Wu}${t??"default"}`}async function Ku(e){const t=await sa(e),r=await e.store.settings.findOne(t);if(!r)return null;const i=r.value;return!i||!i.token||!i.user?null:{user:i.user,gistId:i.gistId??"",token:i.token}}async function oa(e,t){const r=await sa(e);await e.store.settings.upsert({key:r,value:t})}function Vu(e){const t={};for(const r of e.split(";")){const i=r.indexOf("=");if(i<0)continue;const n=r.slice(0,i).trim(),a=r.slice(i+1).trim();n&&(t[n]=a)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function aa(e){const t=await Ku(e);if(t)return t;const r=await e.ui.dialogs.prompt(`Connection string format:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,"","Gist credentials");if(!r)return null;const i=Vu(r);return i?(await oa(e,i),i):(await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist credentials"),null)}async function Yu(e){const t=await aa(e);if(!t)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=(await e.store.tables.find()).filter(m=>m.workspaceId===r);if(i.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const n={},a=[];for(const m of i){const v=await e.store.rows(m.id).find(),A=JSON.stringify(Gu(m,v),null,2);A.length>1e8&&a.push(`${m.name} (${(A.length/1e6).toFixed(2)} MB)`),n[`${la(m.name)}.table.json`]={content:A}}if(a.length>0&&!await e.ui.dialogs.confirm(`These tables exceed Gist's 100 MB-per-file limit and will be rejected:

${a.join(`
`)}

Push anyway?`,"Gist size warning"))return;n["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1"},null,2)};let c;if(t.gistId){const m=await fetch(`https://api.github.com/gists/${t.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:n,description:`easyDBAccess workspace: ${r}`})});if(!m.ok)throw new Error(await Yi(m));c=await m.json()}else{const m=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:n})});if(!m.ok)throw new Error(await Yi(m));c=await m.json(),t.gistId=c.id,await oa(e,t)}const d=c.html_url??`https://gist.github.com/${t.user}/${c.id}`;e.ui.dialogs.toast(`Pushed ${i.length} table${i.length===1?"":"s"}.  ${d}`,{kind:"success",title:"Gist sync"})}async function Xu(e){const t=await aa(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!i.ok)throw new Error(await Yi(i));const n=await i.json(),a=Object.entries(n.files).filter(([v])=>v.endsWith(".table.json")&&!v.startsWith("_easydb"));if(a.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const c=(await e.store.tables.find()).filter(v=>v.workspaceId===r),d=new Map(c.map(v=>[v.name,v]));let m=0;for(const[,v]of a){const A=JSON.parse(v.content);if(!A.name||!Array.isArray(A.columns))continue;let $;const R=d.get(A.name);if(R){$=await e.store.tables.patch(R.id,{columns:A.columns,updatedAt:Date.now()});const N=e.store.rows(R.id),W=await N.find();await N.bulkRemove(W.map(ce=>ce.id))}else $=await e.store.tables.insert({id:mo(),workspaceId:r,name:A.name,code:la(A.name),columns:A.columns,view:"table",updatedAt:Date.now()});const B=(A.rows??[]).map(N=>({id:mo(),tableId:$.id,data:N,updatedAt:Date.now()}));await e.store.rows($.id).bulkInsert(B),m++}e.ui.dialogs.toast(`Pulled ${m} table${m===1?"":"s"} from gist ${t.gistId}.`,{kind:"success",title:"Gist sync"})}function Gu(e,t){return{name:e.name,columns:e.columns,rows:t.map(r=>r.data)}}async function Yi(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function la(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function mo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Qu=Object.freeze(Object.defineProperty({__proto__:null,init:Hu,meta:Uu},Symbol.toStringTag,{value:"Module"})),ca="server-sync:url";function ua(e){return`server-sync:etag:${e}`}async function da(e){const r=(await e.store.settings.findOne(ca))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function Ju(e,t){await e.store.settings.upsert({key:ca,value:t.replace(/\/+$/,"")})}async function ha(e,t){const i=(await e.store.settings.findOne(ua(t)))?.value;return typeof i=="string"?i:null}async function jn(e,t,r){await e.store.settings.upsert({key:ua(t),value:r})}function si(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function go(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function fa(e,t,r){const i=Jr(r,t),n=(await e.store.tables.find()).filter(c=>c.workspaceId===t);for(const c of n){const d=e.store.rows(c.id),m=await d.find();await d.bulkRemove(m.map(v=>v.id)),await e.store.tables.remove(c.id)}let a=0;for(const c of i){const d=bo(),m=await e.store.tables.insert({id:d,workspaceId:t,name:c.name,code:Zu(c.name),columns:c.columns,view:"table",...c.windowGeometry?{windowGeometry:c.windowGeometry}:{},...c.sortColumn?{sortColumn:c.sortColumn,sortAsc:c.sortAsc??!0}:{},updatedAt:Date.now()}),v=c.rows.map(A=>({id:bo(),tableId:m.id,data:A,updatedAt:Date.now()}));await e.store.rows(m.id).bulkInsert(v),a++}return a}function Zu(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function bo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const ed={name:"server-sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"easyDBAccess built-ins"};function td(e){e.ui.registerFooterButton({id:"server-sync:push",label:"Sync ↑",icon:"cloud_sync",tooltip:"Push this workspace to the configured server",onClick:async()=>{try{await nd(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Server sync"})}}}),e.ui.registerFooterButton({id:"server-sync:pull",label:"Sync ↓",icon:"cloud_sync",tooltip:"Pull this workspace from the configured server",onClick:async()=>{try{await rd(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Server sync"})}}})}async function nd(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await pa(e);if(!r)return;const i=await ii(e),n=await ha(e,t),a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);let c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:a,body:i});if(c.status===412){const m=await c.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){m.currentEtag&&await jn(e,t,m.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:i})}if(!c.ok)throw new Error(await ma(c));const d=si(c.headers.get("ETag"));d&&await jn(e,t,d),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function rd(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await pa(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await ma(n));const a=si(n.headers.get("ETag")),c=await n.json(),d=await fa(e,t,c);a&&await jn(e,t,a),e.ui.dialogs.toast(`Pulled ${d} table${d===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function pa(e){const t=await da(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await Ju(e,r),r.replace(/\/+$/,"")}async function ma(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const id=Object.freeze(Object.defineProperty({__proto__:null,init:td,meta:ed},Symbol.toStringTag,{value:"Module"})),sd={name:"new-table",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"easyDBAccess built-ins"};function od(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const ad=Object.freeze(Object.defineProperty({__proto__:null,init:od,meta:sd},Symbol.toStringTag,{value:"Module"})),ld={name:"plugin-manager-button",version:"0.1.0",description:"Registers a footer button that opens the Plugin Manager dialog.",author:"easyDBAccess built-ins"};function cd(e){e.ui.registerFooterButton({id:"plugin-manager:open",label:"Plugins",icon:"extension",tooltip:"Add, disable, or remove plugins",onClick:()=>e.ui.openPluginManager()})}const ud=Object.freeze(Object.defineProperty({__proto__:null,init:cd,meta:ld},Symbol.toStringTag,{value:"Module"})),dd={name:"core-renderers",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"easyDBAccess built-ins"};function hd(e){customElements.get("cell-date")||customElements.define("cell-date",fd),customElements.get("cell-datetime")||customElements.define("cell-datetime",pd),customElements.get("cell-boolean")||customElements.define("cell-boolean",md),customElements.get("cell-script")||customElements.define("cell-script",bd),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class fd extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="date",t.value=wd(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class pd extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="datetime-local",t.value=vd(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class md extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="checkbox",t.checked=gd(this._value),t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function gd(e){return e===!0||e==="true"||e===1||e==="1"}class bd extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const a=document.createElement("span");a.textContent="(no script)",a.style.cssText="color:#9ca3af;font-style:italic",this.append(a);return}let r;try{r=yd(t)}catch(a){this.append(Ii("compile error",a));return}let i;try{i=r(this._row)}catch(a){this.append(Ii("runtime error",a));return}if(typeof i!="string"){this.append(Ii("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=i,this.append(n)}}const yo=new Map;function yd(e){const t=yo.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return yo.set(e,r),r}function Ii(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const i=t instanceof Error?t.message:String(t);r.title=i}return r}function wd(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function vd(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const xd=Object.freeze(Object.defineProperty({__proto__:null,init:hd,meta:dd},Symbol.toStringTag,{value:"Module"})),$d={name:"cell-color",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"easyDBAccess built-ins"};function kd(e){customElements.get("cell-color")||customElements.define("cell-color",Cd),e.ui.registerCellRenderer("color","cell-color")}class Cd extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,i){this.value=i}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Ed=Object.freeze(Object.defineProperty({__proto__:null,init:kd,meta:$d},Symbol.toStringTag,{value:"Module"})),Sd={name:"cell-image",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"easyDBAccess built-ins"};function _d(e){customElements.get("cell-image")||customElements.define("cell-image",Ad),e.ui.registerCellRenderer("image","cell-image")}class Ad extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const i=document.createElement("img");i.src=this._value,i.alt="",i.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(i)}else{const i=document.createElement("span");i.style.color="#9ca3af",i.textContent="no image",t.append(i);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const i=new FileReader;i.onload=()=>this.commit(String(i.result)),i.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Pd=Object.freeze(Object.defineProperty({__proto__:null,init:_d,meta:Sd},Symbol.toStringTag,{value:"Module"})),Td={name:"cell-link",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"easyDBAccess built-ins"};function Dd(e){customElements.get("cell-link")||customElements.define("cell-link",jd),e.ui.registerCellRenderer("link","cell-link")}class jd extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:Fd(t),i=!this._editing&&!r?Od(t):null,n=!this._editing&&!r&&!i?Rd(t):null;if(r||i||n){const a=document.createElement("span");a.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const c=document.createElement("a");c.href=r?t:i?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(c.target="_blank",c.rel="noopener noreferrer"),c.textContent=t,c.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",c.title=r?`Open ${t}`:i?`Email ${t}`:`Call ${t}`;const d=document.createElement("button");d.type="button",d.title="Edit",d.textContent="✎",d.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",d.addEventListener("click",m=>{m.preventDefault(),m.stopPropagation(),this._editing=!0,this.render()}),a.append(c,d),this.append(a)}else{const a=document.createElement("input");a.type="text",a.value=t,a.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",a.addEventListener("change",()=>this.commit(a.value)),a.addEventListener("keydown",c=>{c.key==="Enter"?(c.preventDefault(),this.commit(a.value)):c.key==="Escape"&&(this._editing=!1,this.render())}),this.append(a),this._editing&&setTimeout(()=>{a.focus(),a.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Fd(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function Od(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function Rd(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const i=/[ ()\-.]/.test(t),n=t.startsWith("+");return!i&&!n&&r.length<10?null:t}const zd=Object.freeze(Object.defineProperty({__proto__:null,init:Dd,meta:Td},Symbol.toStringTag,{value:"Module"}));var Id=Object.defineProperty,Ld=Object.getOwnPropertyDescriptor,ga=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ld(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Id(t,r,n),n};function Bd(e){return(nn.instance??Md()).open(e)}function Md(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let nn=class extends Qe{constructor(){super(...arguments),this.rows=[],this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((r,i)=>{const n=this.rows[i].field.trim(),a=this.rows[i].label.trim()||n;return{...r,field:n,label:a}});this.finish(t)}}connectedCallback(){super.connectedCallback(),nn.instance=this}disconnectedCallback(){super.disconnectedCallback(),nn.instance===this&&(nn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&sn(this.dialogEl,e)}open(e){return this.source=e,this.rows=e.map(t=>({field:t.field,label:t.label})),new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((r,i)=>{const n=r.field.trim().toLowerCase();if(n===""){e.add(i);return}(t.get(n)??t.set(n,[]).get(n)).push(i)});for(const r of t.values())if(r.length>1)for(const i of r)e.add(i);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,r){this.rows=this.rows.map((i,n)=>n===e?{...i,[t]:r}:i)}render(){const e=this.invalidIndices(),t=e.size;return U`
      <dialog @cancel=${this.onCancel} @keydown=${wn}>
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
              or empty names are shown in red and must be fixed first.
            </p>
            <div class="grid">
              <div class="head">Name</div>
              <div class="head">Label</div>
              ${this.rows.map((r,i)=>U`
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
                `)}
            </div>
            <p class="err">
              ${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:Fe}
            </p>
          </div>
        </form>
      </dialog>
    `}};nn.instance=null;nn.styles=[rn,st`
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
        grid-template-columns: 1fr 1fr;
        gap: 0.4rem 0.75rem;
        margin-top: 0.6rem;
        max-height: 50vh;
        overflow: auto;
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
      input {
        font: inherit;
        padding: 0.35rem 0.45rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        width: 100%;
        box-sizing: border-box;
        background: white;
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
    `];ga([Z()],nn.prototype,"rows",2);nn=ga([dt("column-names-dialog")],nn);var Nd=Object.defineProperty,qd=Object.getOwnPropertyDescriptor,an=(e,t,r,i)=>{for(var n=i>1?void 0:i?qd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Nd(t,r,n),n};const Ud="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",Wd="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",Hd='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',wo=[{label:"Northwind — sample database (JSON dump)",url:Ud,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:Wd,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],Kd={name:"import-data",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"easyDBAccess built-ins",optional:!0};function Vd(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:Hd,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>Yd(e)})}async function Yd(e){const r=await(ft.instance??Xd()).open({async listDatabases(d){const m=On(d);return Vo(v=>e.backend.fetch(v),m.base)}});if(!r)return;const{url:i,kind:n,dbChosen:a,editColumns:c}=r;try{if(n==="datasette")await as(e,i,{skipTablePicker:a});else if(n==="csv"){const d=await e.backend.fetch(i);if(!d.ok)throw new Error(`HTTP ${d.status} ${d.statusText}`);const m=await d.text();await rs(e,m,Br(i),{editColumns:c?Bd:void 0}),e.ui.dialogs.toast(`Imported ${Br(i)}.`,{kind:"success",title:"Import"})}else{const d=await e.backend.fetch(i);if(!d.ok)throw new Error(`HTTP ${d.status} ${d.statusText}`);const m=await d.text();await ss(e,m,Br(i)),e.ui.dialogs.toast(`Imported ${Br(i)}.`,{kind:"success",title:"Import"})}}catch(d){e.ui.dialogs.toast(`Could not import ${i}: ${d.message}`,{kind:"error",title:"Import"})}}function Xd(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function Gd(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),i=[...t.searchParams.keys()].some(a=>a.startsWith("_")),n=r.includes("datasette")||i;return!i&&/\.csv$/i.test(t.pathname)?"csv":!i&&/\.json$/i.test(t.pathname)?"json":n?"datasette":"json"}catch{return"json"}}function vo(e,t){if(t!=="datasette"||!e)return!1;try{const r=On(e);return!r.db&&!r.table}catch{return!1}}function Br(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}let ft=class extends Qe{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.resolvedKind,i=r==="datasette"&&!!this.selectedDb&&vo(t,r),n=i?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t,a=r==="csv"&&this.editColumns;this.finish({url:n,kind:r,dbChosen:i,editColumns:a})}}get resolvedKind(){return this.kind==="auto"?Gd(this.url.trim()):this.kind}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),ft.instance===this&&(ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&sn(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.editColumns=!1,this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=wo[t];r&&(this.url=r.url,this.kind=r.kind)}renderDbPicker(){return!this.listDatabases||!vo(this.url.trim(),this.resolvedKind)?Fe:U`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?U`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>U`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:U`<option value="">— not loaded —</option>`}
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
      ${this.dbError?U`<p class="hint error">${this.dbError}</p>`:Fe}
    `}render(){return U`
      <dialog @cancel=${this.onCancel} @keydown=${wn}>
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
                ${wo.map((e,t)=>U`<option value=${String(t)} ?selected=${t===this.presetIdx}>
                      ${e.label}
                    </option>`)}
              </select>
            </label>

            <label>
              URL
              <input
                type="text"
                autofocus
                placeholder="https://… (JSON dump, .csv file, or Datasette table)"
                .value=${this.url}
                @input=${e=>{this.url=e.target.value,this.presetIdx=-1,this.resetDbList()}}
              />
            </label>

            <label>
              Import as
              <select
                .value=${this.kind}
                @change=${e=>{this.kind=e.target.value,this.resetDbList()}}
              >
                <option value="auto" ?selected=${this.kind==="auto"}>Auto-detect</option>
                <option value="json" ?selected=${this.kind==="json"}>JSON dump</option>
                <option value="csv" ?selected=${this.kind==="csv"}>CSV file</option>
                <option value="datasette" ?selected=${this.kind==="datasette"}>
                  Datasette (table or instance)
                </option>
              </select>
            </label>

            ${this.renderDbPicker()}

            ${this.resolvedKind==="csv"?U`<label class="check">
                  <input
                    type="checkbox"
                    .checked=${this.editColumns}
                    @change=${e=>this.editColumns=e.target.checked}
                  />
                  Edit columns before import (rename / fix duplicate names)
                </label>`:Fe}

            <p class="hint">
              Paste any URL or pick a sample above — a JSON dump, a <code>.csv</code> file, or a
              Datasette table/database/instance. For a Datasette instance root, click
              <em>List databases</em> to pick one first. Multi-table sources let you choose which
              tables to import; Datasette tables import a read-only snapshot (capped at 10,000 rows
              each).
            </p>
          </div>
        </form>
      </dialog>
      ${Fe}
    `}};ft.instance=null;ft.styles=[rn,st`
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
      select {
        font: inherit;
        padding: 0.45rem 0.55rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        width: 100%;
        box-sizing: border-box;
        background: white;
      }
      .row {
        display: flex;
        gap: 0.75rem;
      }
      .row > * {
        flex: 1;
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
    `];an([Z()],ft.prototype,"url",2);an([Z()],ft.prototype,"kind",2);an([Z()],ft.prototype,"presetIdx",2);an([Z()],ft.prototype,"dbList",2);an([Z()],ft.prototype,"dbLoading",2);an([Z()],ft.prototype,"dbError",2);an([Z()],ft.prototype,"selectedDb",2);an([Z()],ft.prototype,"editColumns",2);ft=an([dt("import-dialog")],ft);const Qd=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return ft},init:Vd,meta:Kd},Symbol.toStringTag,{value:"Module"})),Jd={name:"auto-sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"easyDBAccess built-ins",optional:!0},Zd=6e4;let xo=null,Xi=!1;const Li=new Map;function eh(e){xo===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(xo=setInterval(()=>{ba(e)},Zd)))}async function ba(e){if(Xi)return;const t=e.workspaceId();if(!t)return;const r=await da(e);if(r)try{await th(e,r,t)}catch(i){console.warn("[auto-sync]",i)}}async function th(e,t,r){const i=await ii(e),n=await ha(e,r),a=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(a.status===404){await $o(e,t,r,i,null);return}if(!a.ok)return;const c=si(a.headers.get("ETag")),d=await a.text();if(go(i)===go(d)){c&&c!==n&&await jn(e,r,c);return}if(c&&c===n){await $o(e,t,r,i,n);return}if(!(c&&Li.get(r)===c)){Xi=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const v=JSON.parse(d),A=await fa(e,r,v);c&&await jn(e,r,c),Li.delete(r),e.ui.dialogs.toast(`Pulled ${A} table${A===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else c&&Li.set(r,c)}finally{Xi=!1}}}async function $o(e,t,r,i,n){const a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);const c=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:a,body:i});if(c.ok){const d=si(c.headers.get("ETag"));d&&await jn(e,r,d);return}if(c.status===412){const d=await c.json().catch(()=>({}));d.currentEtag&&await jn(e,r,d.currentEtag)}}const ya=Object.freeze(Object.defineProperty({__proto__:null,load:eh,meta:Jd,tick:ba},Symbol.toStringTag,{value:"Module"})),wa=[ad,hc,Oc,ju,bc,Ru,qu,Qu,id,ud,xd,Ed,Pd,zd,Qd,ya],nh=wa;function Gi(e){return`builtin:${e}`}async function rh(e){const t=[];for(const r of wa)if(!await ih(e,r)){t.push(r);try{await r.init?.(e)}catch(i){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"init",error:i})}}return async()=>{for(const r of t)try{await r.load?.(e)}catch(i){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"load",error:i})}}}async function ih(e,t){if(!t.meta?.optional)return!1;const r=t.meta.name;return r?(await e.store.plugins.findOne(Gi(r)))?.enabled===!1:!1}async function sh(e){const t=e.workspaceId();if(!t)return async()=>{};const i=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const a of i)try{const c=await e.store.plugins.findOne(a);if(c&&c.enabled===!1)continue;let d=c?.cachedBody??"";if(d)oh(e,a,d);else{try{d=await va(a)}catch(A){await e.store.plugins.upsert({url:a,enabled:c?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${A.message}`}),e.events.emit("plugin:error",{url:a,phase:"fetch",error:A});continue}await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),cachedBody:d})}const m=new Blob([d],{type:"text/javascript"}),v=URL.createObjectURL(m);try{const A=await import(v);await A.init?.(e),n.push({url:a,mod:A})}finally{setTimeout(()=>URL.revokeObjectURL(v),5e3)}}catch(c){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`init: ${c.message}`}),e.events.emit("plugin:error",{url:a,phase:"init",error:c})}return async()=>{for(const{url:a,mod:c}of n)try{await c.load?.(e)}catch(d){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`load: ${d.message}`}),e.events.emit("plugin:error",{url:a,phase:"load",error:d})}}}async function va(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function oh(e,t,r){return(async()=>{try{const i=await va(t);if(i===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:i})}catch{}})()}let Bi=null;function je(){return Bi||(Bi=ah()),Bi}async function ah(){const e=await Fl(),t=Rl(e),r=Il(),i=Wl(),n=new Map;t.tables.subscribe(W=>{n.clear();for(const ce of W)n.set(ce.id,ce)});const a={...t.tables,insert:W=>(n.set(W.id,W),t.tables.insert(W)),upsert:W=>(n.set(W.id,W),t.tables.upsert(W))};let c=null;const d={get backend(){if(!c)throw new Error("[host] row-source ctx used before app init completed");return c.backend},events:r,settings:t.settings,workspaceId:()=>$},m=zl({base:{...t,tables:a},providers:i.rowSources,tableById:W=>n.get(W),ctx:d}),v=lh(),A=await m.workspaces.find();let $;if(v){const W=dh(v),ce=A.find(de=>de.id===W||de.name===v);ce?$=ce.id:$=(await m.workspaces.insert({id:W,name:v,createdAt:Date.now(),pluginUrls:[]})).id}else{const W=ch(),ce=W?A.find(de=>de.id===W):void 0;ce?$=ce.id:A.length>0?$=A[0].id:$=(await m.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}uh($);const R=Vl({store:m,events:r,registries:i,workspaceId:()=>$});c=R,r.on("import:after",({source:W,tableId:ce,rowCount:de})=>{W!=="datasette"&&R.store.tables.findOne(ce).then(De=>{R.ui.dialogs.toast(`Imported ${de} row${de===1?"":"s"} into "${De?.name??ce}".`,{kind:"success",title:W.toUpperCase()+" import"})})}),r.on("plugin:error",({url:W,phase:ce,error:de})=>{R.ui.dialogs.toast(`[${ce}] ${de?.message??String(de)}`,{kind:"error",title:`Plugin: ${W}`})});const B=await rh(R),N=await sh(R);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:$}),await B(),await N()}),{store:m,events:r,workspaceId:$,registries:i,api:R}}function lh(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const xa="eda:lastWorkspaceId";function ch(){try{return globalThis.localStorage?.getItem(xa)??null}catch{return null}}function uh(e){try{globalThis.localStorage?.setItem(xa,e)}catch{}}function dh(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var hh=Object.defineProperty,fh=Object.getOwnPropertyDescriptor,oi=(e,t,r,i)=>{for(var n=i>1?void 0:i?fh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&hh(t,r,n),n};let Un=class extends Qe{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&sn(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=Qr(this.text)}catch(c){this.errorMsg=`Couldn't parse the CSV: ${c.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const i=await je(),n=crypto.randomUUID();await i.store.tables.insert({id:n,workspaceId:i.workspaceId,name:t,code:ph(t),columns:r.columns,view:"table",updatedAt:Date.now()});const a=r.rows.map(c=>({id:crypto.randomUUID(),tableId:n,data:c,updatedAt:Date.now()}));await i.store.rows(n).bulkInsert(a),i.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return U`
      <dialog @cancel=${this.close} @keydown=${wn}>
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
            ${this.errorMsg?U`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};Un.styles=[rn,st`
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
    `];oi([Z()],Un.prototype,"name",2);oi([Z()],Un.prototype,"text",2);oi([Z()],Un.prototype,"errorMsg",2);Un=oi([dt("csv-paste-dialog")],Un);function ph(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var mh=Object.defineProperty,gh=Object.getOwnPropertyDescriptor,ls=(e,t,r,i)=>{for(var n=i>1?void 0:i?gh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&mh(t,r,n),n};const bh=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let Xt=class extends Qe{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),Xt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Xt.instance===this&&(Xt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&sn(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:bh,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return U`
      <dialog @cancel=${this.onCancel} @keydown=${wn}>
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
    `}};Xt.instance=null;Xt.styles=[rn,st`
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
    `];ls([Z()],Xt.prototype,"text",2);ls([Z()],Xt.prototype,"columnLabel",2);Xt=ls([dt("script-editor-dialog")],Xt);var yh=Object.defineProperty,wh=Object.getOwnPropertyDescriptor,Ut=(e,t,r,i)=>{for(var n=i>1?void 0:i?wh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&yh(t,r,n),n};const vh=["string","number","boolean","date","datetime"];let Dt=class extends Qe{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.columns=[],this.errorMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&sn(this.dialogEl,e)}async open(e){this.errorMsg="";const t=await je();if(this.rendererOptions=[...t.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=t.events.on("app:ready",()=>{this.rendererOptions=[...t.registries.cellRenderers.keys()].sort()}),e){const r=await je(),i=await r.store.tables.findOne(e);if(!i)return;this.mode="edit",this.editTableId=e,this.name=i.name,this.columns=i.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,origField:a.field}));const n=await r.store.rows(e).find();this.previewRows=n.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const i=[...this.columns],[n]=i.splice(e,1);i.splice(r,0,n),this.columns=i}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientY<i.top+i.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,i=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!i)return;const n=[...this.columns],[a]=n.splice(r,1);let c=t+(r<t?-1:0);i==="after"&&(c+=1),n.splice(c,0,a),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,i)=>i===e?{...r,...t}:r)}async editScript(e){const t=Xt.instance;if(!t)return;const r=this.columns[e];if(!r)return;const i=await t.open(r.script??"",r.label||r.field);i!==null&&this.patchColumn(e,{script:i.trim()?i:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const r=new Set;for(const a of this.columns){const c=a.field.trim();if(!c){this.errorMsg="Column field names cannot be empty.";return}if(r.has(c)){this.errorMsg=`Duplicate column field: ${c}`;return}r.add(c)}const i=await je(),n=this.columns.map(a=>{const c={field:a.field.trim(),label:a.label.trim()||a.field.trim(),type:a.type};return a.renderer&&(c.renderer=a.renderer),a.script&&(c.script=a.script),a.max!=null&&a.max>0&&(c.max=a.max),a.unique&&(c.unique=!0),a.notnull&&(c.notnull=!0),a.hidden&&(c.hidden=!0),c});if(this.mode==="edit"&&this.editTableId){const a=this.editTableId,c=await i.store.tables.findOne(a),d=new Map((c?.columns??[]).map(v=>[v.field,v])),m=n.filter(v=>{const A=d.get(v.field);return v.unique&&!A?.unique||v.notnull&&!A?.notnull||v.max&&v.max>0&&v.max!==A?.max});if(m.length>0){const v=await i.store.rows(a).find(),A=kh(m,v);if(A.length>0){this.errorMsg=`Cannot save: ${A.length} existing ${A.length===1?"row violates":"rows violate"} the new constraints.
${A.slice(0,5).join(`
`)}${A.length>5?`
…and ${A.length-5} more.`:""}`;return}}await i.store.tables.patch(a,{name:t,columns:n,updatedAt:Date.now()})}else await i.store.tables.insert({id:Eh(),workspaceId:i.workspaceId,name:t,code:Ch(t),columns:n,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return U`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const t of this.columns){if(!t.unique)continue;const r=new Set,i=new Set;for(const n of this.previewRows){const a=n.data[t.field];a==null||a===""||(r.has(a)&&i.add(a),r.add(a))}e.set(t.field,i)}return U`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${this.columns.map(t=>U`<th title=${t.field}>${t.label||t.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(t=>U`
                <tr>
                  ${this.columns.map(r=>{const i=t.data[r.field],n=$h(r,i,e.get(r.field));return U`<td
                      class=${n?"violation":""}
                      title=${n??""}
                    >${xh(i)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return U`
      <dialog @cancel=${this.close} @keydown=${wn}>
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
          <label>
            Name
            <input
              type="text"
              autofocus
              .value=${this.name}
              @input=${r=>this.name=r.target.value}
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
            ${this.columns.map((r,i)=>{const n=this.dragSrcIdx===i,a=this.dropTargetIdx===i,c=a&&this.dropEdge==="before"?" drop-before":a&&this.dropEdge==="after"?" drop-after":"";return U`
                <div
                  class=${`col-row${n?" drag-source":""}${c}`}
                  @dragover=${d=>this.onRowDragOver(d,i,d.currentTarget)}
                  @dragleave=${()=>this.onRowDragLeave(i)}
                  @drop=${d=>this.onRowDrop(d,i)}
                >
                  <span
                    class="drag-handle"
                    title="Drag to reorder"
                    draggable="true"
                    @dragstart=${d=>this.onRowDragStart(d,i)}
                    @dragend=${()=>this.onRowDragEnd()}
                  >
                    <span class="mi sm">drag_indicator</span>
                  </span>
                  <input
                    type="text"
                    .value=${r.field}
                    @input=${d=>this.patchColumn(i,{field:d.target.value})}
                  />
                  <input
                    type="text"
                    .value=${r.label}
                    @input=${d=>this.patchColumn(i,{label:d.target.value})}
                  />
                  <select
                    .value=${r.type}
                    @change=${d=>this.patchColumn(i,{type:d.target.value})}
                  >
                    ${vh.map(d=>U`<option value=${d} ?selected=${d===r.type}>${d}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${d=>{const m=d.target.value;this.patchColumn(i,{renderer:m||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(d=>U`<option value=${d} ?selected=${d===r.renderer}>${d}</option>`)}
                  </select>
                  ${r.renderer==="script"?U`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(i)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:U`<span></span>`}
                  <input
                    type="number"
                    min="0"
                    placeholder="—"
                    title="Max length (strings) or max value (numbers)"
                    .value=${r.max==null?"":String(r.max)}
                    @input=${d=>{const m=d.target.value;this.patchColumn(i,{max:m===""?void 0:Number(m)})}}
                  />
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Unique"
                      .checked=${!!r.unique}
                      @change=${d=>this.patchColumn(i,{unique:d.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Not null"
                      .checked=${!!r.notnull}
                      @change=${d=>this.patchColumn(i,{notnull:d.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Visible — uncheck to hide the column without losing its data"
                      .checked=${!r.hidden}
                      @change=${d=>this.patchColumn(i,{hidden:!d.target.checked})}
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

          ${this.renameDetected()?U`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?U`<div class="error">${this.errorMsg}</div>`:""}
          ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};Dt.styles=[on,rn,st`
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
  `];Ut([Z()],Dt.prototype,"mode",2);Ut([Z()],Dt.prototype,"editTableId",2);Ut([Z()],Dt.prototype,"name",2);Ut([Z()],Dt.prototype,"columns",2);Ut([Z()],Dt.prototype,"errorMsg",2);Ut([Z()],Dt.prototype,"dragSrcIdx",2);Ut([Z()],Dt.prototype,"dropTargetIdx",2);Ut([Z()],Dt.prototype,"dropEdge",2);Ut([Z()],Dt.prototype,"previewRows",2);Ut([Z()],Dt.prototype,"rendererOptions",2);Dt=Ut([dt("new-table-dialog")],Dt);function xh(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function $h(e,t,r){const i=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&i)return`${e.label}: empty`;if(i)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!i){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function kh(e,t){const r=[];for(const i of e)if(i.notnull&&t.forEach((n,a)=>{const c=n.data[i.field];(c==null||typeof c=="string"&&c.trim()==="")&&r.push(`Row ${a+1}: ${i.label} is empty.`)}),i.max!=null&&i.max>0&&t.forEach((n,a)=>{const c=n.data[i.field];typeof c=="string"&&c.length>i.max?r.push(`Row ${a+1}: ${i.label} length ${c.length} > max ${i.max}.`):typeof c=="number"&&c>i.max&&r.push(`Row ${a+1}: ${i.label} value ${c} > max ${i.max}.`)}),i.unique){const n=new Map;t.forEach((a,c)=>{const d=a.data[i.field];d==null||d===""||(n.has(d)?r.push(`Row ${c+1}: ${i.label} duplicates row ${n.get(d)+1} ("${String(d)}").`):n.set(d,c))})}return r}function Ch(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Eh(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Sh=Object.defineProperty,_h=Object.getOwnPropertyDescriptor,Rt=(e,t,r,i)=>{for(var n=i>1?void 0:i?_h(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Sh(t,r,n),n};let kt=class extends Qe{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.builtinNames=[],this.optionalBuiltins=[],this.dirtyBuiltins=!1,this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&sn(this.dialogEl,e)}async open(){const e=await je(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(a=>[a.url,a]));const i=[],n=[];for(const a of nh){const c=a.meta?.name;if(c)if(a.meta?.optional){const d=this.records.get(Gi(c));n.push({name:c,...a.meta?.description?{description:a.meta.description}:{},...a.meta?.author?{author:a.meta.author}:{},enabled:d?.enabled!==!1})}else i.push(c)}this.builtinNames=i,this.optionalBuiltins=n,this.dirtyBuiltins=!1,this.addUrl="",await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(),this.refreshServerRegistry()}async refreshCatalog(){const e=new URL("/plugins/catalog.json",location.origin).toString();try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),i=Array.isArray(r.plugins)?r.plugins:[];this.catalog=i.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await je()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const a=await fetch(n,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const c=await a.json(),d=Array.isArray(c.plugins)?c.plugins:[];this.serverCatalog=d.map(m=>({...m,absUrl:new URL(m.url,n).toString()})),this.serverCatalogError=null}catch(a){this.serverCatalog=[],this.serverCatalogError=a.message}}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await je()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await je();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await je(),i=this.records.get(e);await r.store.plugins.upsert({...i??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...i,url:e,enabled:t,lastFetched:i?.lastFetched??0}))}async removePlugin(e){const t=await je();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await je(),i=Gi(e),n=this.records.get(i);await r.store.plugins.upsert({...n??{url:i,lastFetched:0},url:i,enabled:t,lastFetched:n?.lastFetched??0}),this.optionalBuiltins=this.optionalBuiltins.map(a=>a.name===e?{...a,enabled:t}:a),this.dirtyBuiltins=!0}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await je();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const i=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:i});const n=new Blob([i],{type:"text/javascript"}),a=URL.createObjectURL(n);try{const d=await import(a);await d.init?.(t.api),await d.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(a),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const c=await t.store.plugins.find();this.records=new Map(c.map(d=>[d.url,d])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}render(){return U`
      <dialog @cancel=${this.close} @keydown=${wn}>
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
            Changes take effect after reload.
          </p>

          <div class="plugin-list">
            ${this.catalog.length>0?U`<div class="section-h">Available from this host</div>`:""}
            ${this.catalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return U`
                <div class="row available">
                  <span class="mi sm">extension</span>
                  <div>
                    <div>${e.name}</div>
                    <div class="meta">
                      ${e.description??e.absUrl}
                    </div>
                  </div>
                  <button
                    type="button"
                    class="install"
                    ?disabled=${t||r}
                    @click=${()=>this.installFromCatalog(e)}
                  >
                    <span class="mi sm">
                      ${t?"check":r?"hourglass_empty":"download"}
                    </span>
                    ${t?"Installed":r?"Installing…":"Install"}
                  </button>
                </div>
              `})}
            ${this.catalogError?U`<div class="meta err">
                  Host catalog unavailable: ${this.catalogError}
                </div>`:""}

            ${this.serverCatalog.length>0||this.serverCatalogError?U`<div class="section-h">From server</div>`:""}
            ${this.serverCatalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return U`
                <div class="row available">
                  <span class="mi sm">extension</span>
                  <div>
                    <div>${e.name}</div>
                    <div class="meta">
                      ${e.description??e.absUrl}
                    </div>
                  </div>
                  <button
                    type="button"
                    class="install"
                    ?disabled=${t||r}
                    @click=${()=>this.installFromCatalog(e)}
                  >
                    <span class="mi sm">
                      ${t?"check":r?"hourglass_empty":"download"}
                    </span>
                    ${t?"Installed":r?"Installing…":"Install"}
                  </button>
                </div>
              `})}
            ${this.serverCatalogError?U`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            ${this.optionalBuiltins.length>0?U`<div class="section-h">Optional built-ins</div>`:""}
            ${this.optionalBuiltins.map(e=>U`
                <div class="row">
                  <input
                    type="checkbox"
                    title="Enable / disable"
                    .checked=${e.enabled}
                    @change=${t=>this.toggleBuiltin(e.name,t.target.checked)}
                  />
                  <div>
                    <div>${e.name}</div>
                    <div class="meta">
                      ${e.description??"Built-in (optional)"}
                    </div>
                  </div>
                  <span class="meta">${e.enabled?"enabled":"disabled"}</span>
                </div>
              `)}

            <div class="section-h">Built-in</div>
            ${this.builtinNames.map(e=>U`
                <div class="row builtin">
                  <span class="mi sm">extension</span>
                  <div>
                    <div>${e}</div>
                    <div class="meta">Built-in</div>
                  </div>
                  <span class="meta">always on</span>
                </div>
              `)}

            ${this.urls.length>0?U`<div class="section-h">Installed (by URL)</div>`:""}
            ${this.urls.map(e=>{const t=this.records.get(e),r=t?.lastError?" error":"",i=t?.lastFetched?new Date(t.lastFetched).toLocaleString():"never";return U`
                <div class=${`row${r}`}>
                  <input
                    type="checkbox"
                    title="Enable / disable"
                    .checked=${t?.enabled!==!1}
                    @change=${n=>this.toggleEnabled(e,n.target.checked)}
                  />
                  <div>
                    <div class="url">${e}</div>
                    <div class=${`meta${t?.lastError?" err":""}`}>
                      ${t?.lastError??`Last fetched: ${i}`}
                    </div>
                  </div>
                  <button
                    type="button"
                    class="icon-only"
                    title="Remove plugin"
                    @click=${()=>this.removePlugin(e)}
                  >
                    <span class="mi sm">delete</span>
                  </button>
                </div>
              `})}
          </div>

          <div class="add">
            <input
              type="text"
              placeholder="https://example.com/my-plugin.js"
              .value=${this.addUrl}
              @input=${e=>this.addUrl=e.target.value}
            />
            <button type="submit" class="primary">
              <span class="mi sm">add</span> Add
            </button>
          </div>
          </div>
        </form>
      </dialog>
    `}};kt.styles=[on,rn,st`
      dialog {
        width: 640px;
        max-width: 92vw;
      }
      p.hint {
        margin: 0;
        color: #6b7280;
        font-size: 0.85rem;
      }
      .plugin-list {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        max-height: 50vh;
        overflow: auto;
      }
      .row {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 0.5rem;
        align-items: center;
        padding: 0.5rem 0.6rem;
        border: 1px solid #e5e7eb;
        border-radius: 0.3rem;
        background: #f9fafb;
      }
      .row.builtin {
        background: #f3f4f6;
        color: #6b7280;
      }
      .row.error {
        background: #fef2f2;
        border-color: #fecaca;
      }
      .row.available {
        background: #eff6ff;
        border-color: #bfdbfe;
      }
      .section-h {
        margin: 0.4rem 0 0.1rem;
        font-size: 0.78rem;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: #6b7280;
      }
      button.install {
        background: #10b981;
        color: white;
        border: 0;
        padding: 0.3rem 0.7rem;
        border-radius: 0.25rem;
        cursor: pointer;
        font: inherit;
        font-size: 0.85rem;
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
      }
      button.install:hover {
        background: #059669;
      }
      button.install:disabled {
        background: #d1d5db;
        cursor: default;
      }
      .url {
        font-family: ui-monospace, SFMono-Regular, monospace;
        font-size: 0.8rem;
        word-break: break-all;
      }
      .meta {
        font-size: 0.75rem;
        color: #6b7280;
      }
      .meta.err {
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
      button.icon-only {
        background: transparent;
        border: 0;
        cursor: pointer;
        color: #6b7280;
        padding: 0 0.2rem;
      }
      button.icon-only:hover {
        color: #111;
      }
    `];Rt([Z()],kt.prototype,"urls",2);Rt([Z()],kt.prototype,"records",2);Rt([Z()],kt.prototype,"addUrl",2);Rt([Z()],kt.prototype,"builtinNames",2);Rt([Z()],kt.prototype,"optionalBuiltins",2);Rt([Z()],kt.prototype,"dirtyBuiltins",2);Rt([Z()],kt.prototype,"catalog",2);Rt([Z()],kt.prototype,"catalogError",2);Rt([Z()],kt.prototype,"serverCatalog",2);Rt([Z()],kt.prototype,"serverCatalogError",2);Rt([Z()],kt.prototype,"installing",2);kt=Rt([dt("plugin-manager-dialog")],kt);/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let O={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&O.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let i=arguments[r];if(i==null)continue;i=Object(i);let n=Object.keys(Object(i));for(let a=0,c=n.length;a<c;a++){let d=n[a],m=Object.getOwnPropertyDescriptor(i,d);m!==void 0&&m.enumerable&&(t[d]=i[d])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,i=new Array(r);r--;)i[r]=[t[r],e[t[r]]];return i}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),i=document.createDocumentFragment();r.forEach(function(n){let a=n instanceof Node;i.appendChild(a?n:document.createTextNode(String(n)))}),this.appendChild(i)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,i=this;do for(r=t.length;--r>=0&&t.item(r)!==i;);while(r<0&&(i=i.parentElement));return i}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let i=document.createEvent("CustomEvent");return i.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),i}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),i=r.length>>>0;if(i===0)return!1;let n=t|0,a=Math.max(n>=0?n:i-Math.abs(n),0);function c(d,m){return d===m||typeof d=="number"&&typeof m=="number"&&isNaN(d)&&isNaN(m)}for(;a<i;){if(c(r[a],e))return!0;a++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>O.modifier=e),document.addEventListener("keyup",()=>O.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const i=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(i===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(i),a=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-a)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(i===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(i),a=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-a)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((i,n)=>{(i.startsWith("--")||i.startsWith("var"))&&(r[n]=O.getCssVariableValue(i))}),r.forEach(i=>{O.colorNames[i]?t[2]="#"+O.colorNames[i]:i.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=i:i.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=i:t[2]=i}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),i=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return i&&(t.size=i[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let i=e.indexOf(")");t=e.slice(0,i+1).replace(/\s+/g,""),t.startsWith("var")&&(t=O.getCssVariableValue(t)),r=e.slice(i+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let i=e.indexOf(" ");i>0?(t=e.slice(0,i+1).replace(/\s+/g,""),r=e.slice(i+1,e.length).trim()):t=e,t.startsWith("--")&&(t=O.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let i=r.indexOf(" ");r=r.slice(i+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:O.colorNames[r]?r="#"+O.colorNames[r]:r.match(/^(--|var)/)?r=O.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,i,n,a,c,d,m,v,A,$={};const R=/^#?([\da-f]{3}|[\da-f]{6})$/gi,B=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,N=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,W=this.colorNames;return W[t]&&(t=W[t]),t.match(R)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),i=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),$.rgb={r:parseInt(r,16),g:parseInt(i,16),b:parseInt(n,16)},$.hex=`#${r}${i}${n}`):($.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},$.hex=`#${t}`),A=this.rgbToHsl($.rgb.r,$.rgb.g,$.rgb.b),$.hsl=A,$.rgb.css=`rgb(${$.rgb.r},${$.rgb.g},${$.rgb.b})`):t.match(B)?(m=B.exec(t),$.rgb={css:t,r:m[1],g:m[2],b:m[3]},$.hex=this.rgbToHex(m[1],m[2],m[3]),A=this.rgbToHsl(m[1],m[2],m[3]),$.hsl=A):t.match(N)?(m=N.exec(t),a=m[1]/360,c=m[2].slice(0,m[2].length-1)/100,d=m[3].slice(0,m[3].length-1)/100,v=this.hslToRgb(a,c,d),$.rgb={css:`rgb(${v[0]},${v[1]},${v[2]})`,r:v[0],g:v[1],b:v[2]},$.hex=this.rgbToHex($.rgb.r,$.rgb.g,$.rgb.b),$.hsl={css:`hsl(${m[1]},${m[2]},${m[3]})`,h:m[1],s:m[2],l:m[3]}):($.hex="#f5f5f5",$.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},$.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),$},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),i=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),a=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(i)<=t?"#ffffff":"#000000",d=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",m=this.lighten(e,this.colorFilledDark),v=this.perceivedBrightness(m)<=t?"#ffffff":"#000000";return[r.hsl.css,i,n,a,c,d,m,v]},darken(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i-i*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i+(100-i)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let i,n,a;if(t===0)i=n=a=r;else{let c=(v,A,$)=>($<0&&($+=1),$>1&&($-=1),$<.16666666666666666?v+(A-v)*6*$:$<.5?A:$<.6666666666666666?v+(A-v)*(.6666666666666666-$)*6:v),d=r<.5?r*(1+t):r+t-r*t,m=2*r-d;i=c(m,d,e+1/3),n=c(m,d,e),a=c(m,d,e-1/3)}return[Math.round(i*255),Math.round(n*255),Math.round(a*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let i=Math.max(e,t,r),n=Math.min(e,t,r),a,c,d=(i+n)/2;if(i===n)a=c=0;else{let m=i-n;switch(c=d>.5?m/(2-i-n):m/(i+n),i){case e:a=(t-r)/m+(t<r?6:0);break;case t:a=(r-e)/m+2;break;case r:a=(e-t)/m+4;break}a/=6}return a=Math.round(a*360),c=Math.round(c*100)+"%",d=Math.round(d*100)+"%",{css:"hsl("+a+","+c+","+d+")",h:a,s:c,l:d}},rgbToHex(e,t,r){let i=Number(e).toString(16),n=Number(t).toString(16),a=Number(r).toString(16);return i.length===1&&(i=`0${i}`),n.length===1&&(n=`0${n}`),a.length===1&&(a=`0${a}`),`#${i}${n}${a}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),i=r.filter(c=>c.match(/^(down|right|up|left)$/i));i.length&&(t.autoposition=i[0],r.splice(r.indexOf(i[0]),1));let n=r.filter(c=>c.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let a=r.filter(c=>c.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return a.length&&(t.offsetX=a[0].match(/^[+-]?\d*\.?\d+$/i)?`${a[0]}px`:a[0],a[1]?t.offsetY=a[1].match(/^[+-]?\d*\.?\d+$/i)?`${a[1]}px`:a[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(a[0]),1),a[1]&&r.splice(r.indexOf(a[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(W=>{typeof t[W]=="function"&&(t[W]=t[W].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,i=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),a=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},c=r==="window"?{x:1,y:1}:{x:a.width/r.offsetWidth,y:a.height/r.offsetHeight},d=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);a.width-=(parseFloat(d.borderLeftWidth)+parseFloat(d.borderRightWidth))*c.x,a.height-=(parseFloat(d.borderTopWidth)+parseFloat(d.borderBottomWidth))*c.y;let m;t.of?typeof t.of=="string"?m=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?m=t.of[0].getBoundingClientRect():m=t.of.getBoundingClientRect():m=a;let v=this.getScrollbarWidth(document.body),A=this.getScrollbarWidth(e.parentElement),$="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?$=m.left-a.left-parseFloat(d.borderLeftWidth)+"px":$="0px":t.at.startsWith("center")?t.of?$=m.left-a.left-parseFloat(d.borderLeftWidth)+m.width/2+"px":$=a.width/2+"px":t.at.startsWith("right-")&&(t.of?$=m.left-a.left-parseFloat(d.borderLeftWidth)+m.width+"px":$=a.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?$=m.left-a.left-parseFloat(d.borderLeftWidth)-i.width/2+"px":$=-i.width/2+"px":t.at.startsWith("center")?t.of?$=m.left-a.left-parseFloat(d.borderLeftWidth)-(i.width-m.width)/2+"px":$=a.width/2-i.width/2+"px":t.at.startsWith("right-")&&(t.of?$=m.left-a.left-parseFloat(d.borderLeftWidth)+(m.width-i.width/2)+"px":$=a.width-i.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?$=m.left-a.left-parseFloat(d.borderLeftWidth)-i.width+"px":$=-i.width+"px":t.at.startsWith("center")?t.of?$=m.left-a.left-parseFloat(d.borderLeftWidth)-i.width+m.width/2+"px":$=a.width/2-i.width+"px":t.at.startsWith("right-")&&(t.of?$=m.left-a.left-parseFloat(d.borderLeftWidth)+m.width-i.width+"px":$=a.width-i.width+"px",r!=="window"&&($=parseFloat($)-A.y+"px")));let R="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?R=m.top-a.top-parseFloat(d.borderTopWidth)+"px":R="0px":t.at.endsWith("center")?t.of?R=m.top-a.top-parseFloat(d.borderTopWidth)+m.height/2+"px":R=a.height/2+"px":t.at.endsWith("-bottom")&&(t.of?R=m.top-a.top-parseFloat(d.borderTopWidth)+m.height+"px":R=a.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?R=m.top-a.top-parseFloat(d.borderTopWidth)-i.height/2+"px":R=-i.height/2+"px":t.at.endsWith("center")?t.of?R=m.top-a.top-parseFloat(d.borderTopWidth)-i.height/2+m.height/2+"px":R=a.height/2-i.height/2+"px":t.at.endsWith("-bottom")&&(t.of?R=m.top-a.top-parseFloat(d.borderTopWidth)-i.height/2+m.height+"px":R=a.height-i.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?R=m.top-a.top-parseFloat(d.borderTopWidth)-i.height+"px":R=-i.height+"px":t.at.endsWith("center")?t.of?R=m.top-a.top-parseFloat(d.borderTopWidth)-i.height+m.height/2+"px":R=a.height/2-i.height+"px":t.at.endsWith("-bottom")&&(t.of?R=m.top-a.top-parseFloat(d.borderTopWidth)-i.height+m.height+"px":R=a.height-i.height+"px",r!=="window"?R=parseFloat(R)-A.x+"px":R=parseFloat(R)-v.x+"px")),e.style.left=c.x===1?$:parseFloat($)/c.x+"px",e.style.top=c.y===1?R:parseFloat(R)/c.y+"px";let B=getComputedStyle(e),N={left:B.left,top:B.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(N=this.applyPositionAutopos(e,N,t)),(t.offsetX||t.offsetY)&&(N=this.applyPositionOffset(e,N,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(N=this.applyPositionMinMax(e,N,t)),t.modify&&(N=this.applyPositionModify(e,N,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const i=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(i);const n=Array.prototype.slice.call(document.querySelectorAll(`.${i}`)),a=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((c,d)=>{d>0&&d<=a&&(t.top=parseFloat(t.top)+n[--d].getBoundingClientRect().height+O.autopositionSpacing+"px")});break;case"up":n.forEach((c,d)=>{d>0&&d<=a&&(t.top=parseFloat(t.top)-n[--d].getBoundingClientRect().height-O.autopositionSpacing+"px")});break;case"right":n.forEach((c,d)=>{d>0&&d<=a&&(t.left=parseFloat(t.left)+n[--d].getBoundingClientRect().width+O.autopositionSpacing+"px")});break;case"left":n.forEach((c,d)=>{d>0&&d<=a&&(t.left=parseFloat(t.left)-n[--d].getBoundingClientRect().width-O.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const i=getComputedStyle(e);return{left:i.left,top:i.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(i=>{e.classList.contains(i)&&(t=i)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),i=document.createElement("button");i.className="btn btn"+t.color.slice(r),document.body.appendChild(i),t.color=getComputedStyle(i).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(i),i=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},i=typeof t=="object"?Object.assign(r,t):r,n=i.bgPanel,a=i.bgContent,c=i.colorHeader,d=i.colorContent,m=i.bgFooter,v=i.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[c]&&(c="#"+this.colorNames[c]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(R=>e.querySelector(R).style.color=this.getCssVariableValue(c)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(R=>R.style.color=this.getCssVariableValue(c)),this.colorNames[a]?e.content.style.background="#"+this.colorNames[a]:e.content.style.background=this.getCssVariableValue(a),this.colorNames[d]?e.content.style.color="#"+this.colorNames[d]:e.content.style.color=this.getCssVariableValue(d),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(d)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[m]?e.footer.style.background="#"+this.colorNames[m]:e.footer.style.background=this.getCssVariableValue(m),this.colorNames[v]?e.footer.style.color="#"+this.colorNames[v]:e.footer.style.color=this.getCssVariableValue(v),i.border&&e.setBorder(i.border),i.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(i.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,i]of Object.entries(t))e.style[r]=typeof i=="string"?O.getCssVariableValue(i):i;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const i=document.createElement("script");i.src=e,i.type=t,document.head.appendChild(i),r&&(i.onload=r)}},ajax(e,t){let r,i,n=new XMLHttpRequest;const a={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let c=O.strToHtml(this.responseText);r.urlSelector&&(c=c.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(c)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},a,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},a,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&O.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}i=r.url.trim().split(/\s+/),r.url=encodeURI(i[0]),i.length>1&&(i.shift(),r.urlSelector=i.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&O.ajaxAutoresizeAutoreposition(t,r),O.ajaxAlwaysCallbacks.length&&O.ajaxAlwaysCallbacks.forEach(c=>{t?c.call(n,n,t):c.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const i={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(a,c){if(c){let d=O.strToHtml(a);c.contentRemove(),c.content.append(d)}}};if(t&&typeof e=="string")r=Object.assign({},i,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},i,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&O.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(a=>{if(a.ok)return a[r.bodyMethod]()}).then(a=>{t?r.done.call(a,a,t):r.done.call(a,a),t&&(r.autoresize||r.autoreposition)&&O.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const i=r.split(" "),n=Object.assign({},{width:i[0],height:i[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const i=Object.assign({},r);t.autoresize&&e.resize(i),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const i=document.createElement("div"),n=e.parentElement;i.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(i.style.width=r+"px",i.style.height=r+"px"):t==="ct"||t==="cb"?i.style.height=r+"px":(t==="lc"||t==="rc")&&(i.style.width=r+"px"),n!==document.body&&(i.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(i)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",i,n){if(typeof t=="function"&&(t=[t]),r)return t[r](a=>a.call(e,e,i,n));t.forEach(a=>a.call(e,e,i,n))},resetZi(){this.zi=((e=O.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=O.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){O.zi||(O.zi=((f=O.ziBase)=>{let y=f;return{next:()=>y++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${O.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let f=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;O.errorpanel(f)}return!1}let i=this.pOcontainer(e.container);if(typeof i=="object"&&i.length&&i.length>0&&(i=i[0]),!i)return this.errorReporting&&O.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(f=>{e[f]?typeof e[f]=="function"&&(e[f]=[e[f]]):e[f]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const a=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),d=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),m=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),v=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),A=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),$=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),R=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),B=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),N=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),W=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),ce=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),de=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),De=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),Be=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),ie=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[a,c,d,m,v,A,$,R,B,N,W,ce,de,De].forEach(f=>f.panel=n);const pe=n.querySelector(".jsPanel-btn-close"),Ce=n.querySelector(".jsPanel-btn-maximize"),be=n.querySelector(".jsPanel-btn-normalize"),yt=n.querySelector(".jsPanel-btn-smallify"),xt=n.querySelector(".jsPanel-btn-minimize");pe&&O.pointerup.forEach(f=>{pe.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.close(null,!0)})}),Ce&&O.pointerup.forEach(f=>{Ce.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.maximize()})}),be&&O.pointerup.forEach(f=>{be.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.normalize()})}),yt&&O.pointerup.forEach(f=>{yt.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),xt&&O.pointerup.forEach(f=>{xt.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.minimize()})});let zt=O.extensions;for(let f in zt)Object.prototype.hasOwnProperty.call(zt,f)&&(n[f]=zt[f]);if(n.setBorder=f=>{let y=O.pOborder(f);return y[2].length||(y[2]=n.style.backgroundColor),y=y.join(" "),n.style.border=y,n.options.border=y,n},n.setBorderRadius=f=>{typeof f=="string"&&(f.startsWith("--")||f.startsWith("var"))&&(f=f.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),f=O.getCssVariableValue(f)),typeof f=="number"&&(f+="px"),n.style.borderRadius=f;const y=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=y.borderTopLeftRadius,n.header.style.borderTopRightRadius=y.borderTopRightRadius):(n.content.style.borderTopLeftRadius=y.borderTopLeftRadius,n.content.style.borderTopRightRadius=y.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=y.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=y.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=y.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=y.borderBottomLeftRadius),n},n.setTheme=(f=e.theme,y)=>{let P;if(n.status==="minimized"&&(P=!0,n.normalize()),O.clearTheme(n),typeof f=="object")e.border=void 0,O.applyCustomTheme(n,f);else if(typeof f=="string"){f==="none"&&(f="white");let b=O.getThemeDetails(f);O.applyColorTheme(n,b)}return P&&n.minimize(),y&&y.call(n,n),n},n.remove=(f,y,P)=>{n.parentElement.removeChild(n),document.getElementById(f)?P&&P.call(n,f,n):(n.removeMinimizedReplacement(),n.status="closed",y&&document.dispatchEvent(ie),document.dispatchEvent(Be),n.options.onclosed&&O.processCallbacks(n,n.options.onclosed,"every",y),O.autopositionRemaining(n),P&&P.call(f,f)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(f,y)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(De),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!O.processCallbacks(n,n.options.onbeforeclose,"some",n.status,y))return n;n.options.animateOut?(n.options.animateIn&&O.remClass(n,n.options.animateIn),O.setClass(n,n.options.animateOut),n.addEventListener("animationend",P=>{P.stopPropagation(),n.remove(n.id,y,f)})):n.remove(n.id,y,f)}},n.maximize=(f,y)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!O.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(v);const P=n.parentElement,b=O.pOcontainment(e.maximizedMargin);return P===document.body?(n.style.width=document.documentElement.clientWidth-b[1]-b[3]+"px",n.style.height=document.documentElement.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"):(n.style.width=P.clientWidth-b[1]-b[3]+"px",n.style.height=P.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"),yt.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),y||n.front(),document.dispatchEvent(A),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),f&&f.call(n,n,n.statusBefore),e.onmaximized&&O.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=f=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!O.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent($),!document.getElementById("jsPanel-replacement-container")){const y=document.createElement("div");y.id="jsPanel-replacement-container",document.body.append(y)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(R),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let y=n.createMinimizedReplacement(),P,b,k;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(y);break;case"parentpanel":b=n.closest(".jsPanel-content").parentElement,k=b.querySelectorAll(".jsPanel-minimized-box"),P=k[k.length-1],P.append(y);break;case"parent":b=n.parentElement,P=b.querySelector(".jsPanel-minimized-container"),P||(P=document.createElement("div"),P.className="jsPanel-minimized-container",b.append(P)),P.append(y);break;default:document.querySelector(e.minimizeTo).append(y)}}return f&&f.call(n,n,n.statusBefore),e.onminimized&&O.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=f=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!O.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(d),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),yt.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),f&&f.call(n,n,n.statusBefore),e.onnormalized&&O.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=f=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!O.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(B),n.style.overflow="hidden";const y=window.getComputedStyle(n),P=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(y.borderTopWidth)+parseFloat(y.borderBottomWidth)+P+"px",yt.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(N),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(W),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const b=n.querySelectorAll(".jsPanel-minimized-box");return b[b.length-1].style.display="none",f&&f.call(n,n,n.statusBefore),e.onsmallified&&O.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=f=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!O.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(ce),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),yt.style.transform="rotate(0deg)";const y=n.querySelectorAll(".jsPanel-minimized-box");y[y.length-1].style.display="flex",f&&f.call(n,n,n.statusBefore),e.onunsmallified&&O.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(f,y=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const P=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(b=>b.style.zIndex);Math.max(...P)>n.style.zIndex&&(n.style.zIndex=O.zi.next()),O.resetZi()}return document.dispatchEvent(de),f&&f.call(n,n),e.onfronted&&y&&O.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(f,y=!1)=>{if(y||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),f&&typeof f=="function"&&!y)f.call(n,n,n.snappableTo);else if(f!==!1){let P=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const b=O.pOcontainment(n.options.dragit.containment),k=n.snappableTo;k.startsWith("left")?P[0]=b[3]:k.startsWith("right")&&(P[0]=-b[1]),k.endsWith("top")?P[1]=b[0]:k.endsWith("bottom")&&(P[1]=-b[2])}n.reposition(`${n.snappableTo} ${P[0]} ${P[1]}`)}y||(n.snapped=n.snappableTo)},n.move=(f,y)=>{let P=n.overlaps(f,"paddingbox"),b=n.parentElement;return f.appendChild(n),n.options.container=f,n.style.left=P.left+"px",n.style.top=P.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),y&&y.call(n,n,f,b),n},n.closeChildpanels=f=>(n.getChildpanels().forEach(y=>y.close()),f&&f.call(n,n),n),n.getChildpanels=f=>{const y=n.content.querySelectorAll(".jsPanel");return f&&y.forEach((P,b,k)=>{f.call(P,P,b,k)}),y},n.isChildpanel=f=>{const y=n.closest(".jsPanel-content"),P=y?y.parentElement:null;return f&&f.call(n,n,P),y?P:!1},n.contentRemove=f=>(O.emptyNode(n.content),f&&f.call(n,n),n),n.createMinimizedReplacement=()=>{const f=O.createMinimizedTemplate(),y=window.getComputedStyle(n.headertitle).color,P=window.getComputedStyle(n),b=e.iconfont,k=f.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?O.setStyles(f,{backgroundColor:P.backgroundColor,backgroundPositionX:P.backgroundPositionX,backgroundPositionY:P.backgroundPositionY,backgroundRepeat:P.backgroundRepeat,backgroundAttachment:P.backgroundAttachment,backgroundImage:P.backgroundImage,backgroundSize:P.backgroundSize,backgroundOrigin:P.backgroundOrigin,backgroundClip:P.backgroundClip}):f.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,f.id=n.id+"-min",f.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),f.querySelector(".jsPanel-headerlogo")),f.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),f.querySelector(".jsPanel-title")),f.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),f.querySelector(".jsPanel-title").style.color=y,k.style.color=y,k.querySelectorAll("button").forEach(oe=>oe.style.color=y),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(oe=>{n.header.classList.contains(oe)&&f.querySelector(".jsPanel-hdr").classList.add(oe)}),n.setIconfont(b,f),n.dataset.btnnormalize==="enabled"?O.pointerup.forEach(oe=>{f.querySelector(".jsPanel-btn-normalize").addEventListener(oe,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;n.normalize()})}):k.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?O.pointerup.forEach(oe=>{f.querySelector(".jsPanel-btn-maximize").addEventListener(oe,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;n.maximize()})}):k.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?O.pointerup.forEach(oe=>{f.querySelector(".jsPanel-btn-close").addEventListener(oe,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;n.close(null,!0)})}):k.querySelector(".jsPanel-btn-close").style.display="none",f},n.removeMinimizedReplacement=()=>{const f=document.getElementById(`${n.id}-min`);f&&f.parentElement.removeChild(f)},n.drag=(f={})=>{let y,P,b;const k=new CustomEvent("jspaneldragstart",{detail:n.id}),oe=new CustomEvent("jspaneldrag",{detail:n.id}),ue=new CustomEvent("jspaneldragstop",{detail:n.id});[k,oe,ue].forEach(Me=>Me.panel=n);const q=Me=>{let Re=Me.split("-");return Re.forEach((ve,_e)=>{Re[_e]=ve.charAt(0).toUpperCase()+ve.slice(1)}),"snap"+Re.join("")};function V(Me){Me.relatedTarget===null&&O.pointermove.forEach(Re=>{document.removeEventListener(Re,P,!1),n.style.opacity=1})}let He=f.handles||O.defaults.dragit.handles,rt=f.cursor||O.defaults.dragit.cursor;function Wt(Me){if(O.pointermove.forEach(Re=>document.removeEventListener(Re,P)),O.removeSnapAreas(),y){if(n.style.opacity=1,y=void 0,b.snap){switch(n.snappableTo){case"left-top":n.snap(b.snap.snapLeftTop);break;case"center-top":n.snap(b.snap.snapCenterTop);break;case"right-top":n.snap(b.snap.snapRightTop);break;case"right-center":n.snap(b.snap.snapRightCenter);break;case"right-bottom":n.snap(b.snap.snapRightBottom);break;case"center-bottom":n.snap(b.snap.snapCenterBottom);break;case"left-bottom":n.snap(b.snap.snapLeftBottom);break;case"left-center":n.snap(b.snap.snapLeftCenter);break}b.snap.callback&&n.snappableTo&&typeof b.snap.callback=="function"&&(b.snap.callback.call(n,n),b.snap.repositionOnSnap&&b.snap[q(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&b.snap.repositionOnSnap&&b.snap[q(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Re=n.parentElement;n.move(n.droppableTo),b.drop.callback&&b.drop.callback.call(n,n,n.droppableTo,Re)}if(document.dispatchEvent(ue),b.stop.length){let Re=window.getComputedStyle(n),ve={left:parseFloat(Re.left),top:parseFloat(Re.top),width:parseFloat(Re.width),height:parseFloat(Re.height)};O.processCallbacks(n,b.stop,!1,ve,Me)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Re=>Re.style.pointerEvents="auto"),document.removeEventListener(Me,Wt)}return n.querySelectorAll(He).forEach(Me=>{Me.style.touchAction="none",Me.style.cursor=rt,O.pointerdown.forEach(Re=>{Me.addEventListener(Re,ve=>{if(ve.button&&ve.button>0||(b=Object.assign({},O.defaults.dragit,f),b.disableOnMaximized&&n.status==="maximized"))return!1;if((b.containment||b.containment===0)&&(b.containment=O.pOcontainment(b.containment)),b.grid&&Array.isArray(b.grid)&&b.grid.length===1&&(b.grid[1]=b.grid[0]),b.snap&&(typeof b.snap=="object"?b.snap=Object.assign({},O.defaultSnapConfig,b.snap):b.snap=O.defaultSnapConfig),ve.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(Ge=>Ge.style.pointerEvents="none");let _e=window.getComputedStyle(n),Ke=parseFloat(_e.left),Ee=parseFloat(_e.top),ee=parseFloat(_e.width),Ve=parseFloat(_e.height),ze=ve.touches?ve.touches[0].clientX:ve.clientX,le=ve.touches?ve.touches[0].clientY:ve.clientY,ge=n.parentElement,Ct=ge.getBoundingClientRect(),se=window.getComputedStyle(ge),Ye=n.getScaleFactor(),cn=0,It=O.getScrollbarWidth(ge);P=Ge=>{if(Ge.preventDefault(),!y){if(document.dispatchEvent(k),n.style.opacity=b.opacity,n.snapped&&b.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let ne=n.getBoundingClientRect(),Se=ze-(ne.left+ne.width),he=ne.width/2;Se>-he&&(cn=Se+he)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),b.drop&&b.drop.dropZones){let ne=b.drop.dropZones.map(he=>O.pOcontainer(he)),Se=[];ne.forEach(function(he){he.length?he.forEach(function(Oe){Se.push(Oe)}):Se.push(he)}),Se=Se.filter(function(he,Oe,Ue){return Ue.indexOf(he)===Oe}),b.drop.dropZones=Se}b.start.length&&O.processCallbacks(n,b.start,!1,{left:Ke,top:Ee,width:ee,height:Ve},Ge)}y=1;let Et,Te,Ne,wt,Je,$e,xe,St,qe,pt,ot=Ge.touches?Ge.touches[0].clientX:Ge.clientX,Ze=Ge.touches?Ge.touches[0].clientY:Ge.clientY,Ie=window.getComputedStyle(n),ae;if(ge===document.body){let ne=n.getBoundingClientRect();qe=window.innerWidth-parseInt(se.borderLeftWidth,10)-parseInt(se.borderRightWidth,10)-(ne.left+ne.width),pt=window.innerHeight-parseInt(se.borderTopWidth,10)-parseInt(se.borderBottomWidth,10)-(ne.top+ne.height)}else qe=parseInt(se.width,10)-parseInt(se.borderLeftWidth,10)-parseInt(se.borderRightWidth,10)-(parseInt(Ie.left,10)+parseInt(Ie.width,10)),pt=parseInt(se.height,10)-parseInt(se.borderTopWidth,10)-parseInt(se.borderBottomWidth,10)-(parseInt(Ie.top,10)+parseInt(Ie.height,10));Et=parseFloat(Ie.left),Ne=parseFloat(Ie.top),Je=qe,xe=pt,b.snap&&(b.snap.trigger==="panel"?(Te=Et**2,wt=Ne**2,$e=Je**2,St=xe**2):b.snap.trigger==="pointer"&&(n.options.container==="window"?(Et=ot,Ne=Ze,Je=window.innerWidth-ot,xe=window.innerHeight-Ze,Te=ot**2,wt=Ne**2,$e=Je**2,St=xe**2):(ae=n.overlaps(ge,"paddingbox",Ge),Et=ae.pointer.left,Ne=ae.pointer.top,Je=ae.pointer.right,xe=ae.pointer.bottom,Te=ae.pointer.left**2,wt=ae.pointer.top**2,$e=ae.pointer.right**2,St=ae.pointer.bottom**2)));let Xe=Math.sqrt(Te+wt),X=Math.sqrt(Te+St),et=Math.sqrt($e+wt),lt=Math.sqrt($e+St),$t=Math.abs(Et-Je)/2,G=Math.abs(Ne-xe)/2,Ht=Math.sqrt(Te+G**2),Qt=Math.sqrt(wt+$t**2),at=Math.sqrt($e+G**2),un=Math.sqrt(St+$t**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(oe),(!b.axis||b.axis==="x")&&(n.style.left=Ke+(ot-ze)/Ye.x+cn+"px"),(!b.axis||b.axis==="y")&&(n.style.top=Ee+(Ze-le)/Ye.y+"px"),b.grid){let ne=b.grid,Se=b.axis,he=ne[0]*Math.round((Ke+(ot-ze))/ne[0]),Oe=ne[1]*Math.round((Ee+(Ze-le))/ne[1]);(!Se||Se==="x")&&(n.style.left=`${he}px`),(!Se||Se==="y")&&(n.style.top=`${Oe}px`)}if(b.containment||b.containment===0){let ne=b.containment,Se,he;if(n.options.container==="window")Se=window.innerWidth-parseFloat(Ie.width)-ne[1]-It.y,he=window.innerHeight-parseFloat(Ie.height)-ne[2]-It.x;else{let Oe=parseFloat(se.borderLeftWidth)+parseFloat(se.borderRightWidth),Ue=parseFloat(se.borderTopWidth)+parseFloat(se.borderBottomWidth);Se=Ct.width/Ye.x-parseFloat(Ie.width)-ne[1]-Oe-It.y,he=Ct.height/Ye.y-parseFloat(Ie.height)-ne[2]-Ue-It.x}parseFloat(n.style.left)<=ne[3]&&(n.style.left=ne[3]+"px"),parseFloat(n.style.top)<=ne[0]&&(n.style.top=ne[0]+"px"),parseFloat(n.style.left)>=Se&&(n.style.left=Se+"px"),parseFloat(n.style.top)>=he&&(n.style.top=he+"px")}if(b.drag.length){let ne={left:Et,top:Ne,right:Je,bottom:xe,width:parseFloat(Ie.width),height:parseFloat(Ie.height)};O.processCallbacks(n,b.drag,!1,ne,Ge)}if(b.snap){let ne=b.snap.sensitivity,Se=ge===document.body?window.innerWidth/8:Ct.width/8,he=ge===document.body?window.innerHeight/8:Ct.height/8;n.snappableTo=!1,O.removeSnapAreas(),Xe<ne?b.snap.snapLeftTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-top",O.createSnapArea(n,"lt",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ae.pointer.left>0&&ae.pointer.top>0?(n.snappableTo="left-top",O.createSnapArea(n,"lt",ne)):(n.snappableTo=!1,O.removeSnapAreas()))):X<ne?b.snap.snapLeftBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-bottom",O.createSnapArea(n,"lb",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ae.pointer.left>0&&ae.pointer.bottom>0?(n.snappableTo="left-bottom",O.createSnapArea(n,"lb",ne)):(n.snappableTo=!1,O.removeSnapAreas()))):et<ne?b.snap.snapRightTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-top",O.createSnapArea(n,"rt",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ae.pointer.right>0&&ae.pointer.top>0?(n.snappableTo="right-top",O.createSnapArea(n,"rt",ne)):(n.snappableTo=!1,O.removeSnapAreas()))):lt<ne?b.snap.snapRightBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-bottom",O.createSnapArea(n,"rb",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ae.pointer.right>0&&ae.pointer.bottom>0?(n.snappableTo="right-bottom",O.createSnapArea(n,"rb",ne)):(n.snappableTo=!1,O.removeSnapAreas()))):Ne<ne&&Qt<Se?b.snap.snapCenterTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-top",O.createSnapArea(n,"ct",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ae.pointer.top>0?(n.snappableTo="center-top",O.createSnapArea(n,"ct",ne)):(n.snappableTo=!1,O.removeSnapAreas()))):Et<ne&&Ht<he?b.snap.snapLeftCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-center",O.createSnapArea(n,"lc",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ae.pointer.left>0?(n.snappableTo="left-center",O.createSnapArea(n,"lc",ne)):(n.snappableTo=!1,O.removeSnapAreas()))):Je<ne&&at<he?b.snap.snapRightCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-center",O.createSnapArea(n,"rc",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ae.pointer.right>0?(n.snappableTo="right-center",O.createSnapArea(n,"rc",ne)):(n.snappableTo=!1,O.removeSnapAreas()))):xe<ne&&un<Se&&b.snap.snapCenterBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-bottom",O.createSnapArea(n,"cb",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ae.pointer.bottom>0?(n.snappableTo="center-bottom",O.createSnapArea(n,"cb",ne)):(n.snappableTo=!1,O.removeSnapAreas())))}if(b.drop&&b.drop.dropZones){let ne=O.isIE?"msElementsFromPoint":"elementsFromPoint",Se=document[ne](Ge.clientX,Ge.clientY);Array.isArray(Se)||(Se=Array.prototype.slice.call(Se)),b.drop.dropZones.forEach(he=>{Se.includes(he)&&(n.droppableTo=he)}),Se.includes(n.droppableTo)||(n.droppableTo=!1)}},O.pointermove.forEach(Ge=>document.addEventListener(Ge,P)),window.addEventListener("mouseout",V,!1)})}),O.pointerup.forEach(Re=>{document.addEventListener(Re,Wt),window.removeEventListener("mouseout",V)}),f.disable&&(Me.style.pointerEvents="none")}),n},n.dragit=f=>{const y=Object.assign({},O.defaults.dragit,e.dragit),P=n.querySelectorAll(y.handles);return f==="disable"?P.forEach(b=>b.style.pointerEvents="none"):P.forEach(b=>b.style.pointerEvents="auto"),n},n.sizeit=(f={})=>{const y=new CustomEvent("jspanelresizestart",{detail:n.id}),P=new CustomEvent("jspanelresize",{detail:n.id}),b=new CustomEvent("jspanelresizestop",{detail:n.id});[y,P,b].forEach(ve=>ve.panel=n);let k={},oe,ue,q,V,He,rt;k.handles=f.handles||O.defaults.resizeit.handles,k.handles.split(",").forEach(ve=>{const _e=document.createElement("DIV");_e.className=`jsPanel-resizeit-handle jsPanel-resizeit-${ve.trim()}`,n.append(_e)});let Wt=f.aspectRatio?f.aspectRatio:!1;function Me(ve){ve.relatedTarget===null&&O.pointermove.forEach(_e=>document.removeEventListener(_e,oe,!1))}function Re(ve){if(O.pointermove.forEach(_e=>document.removeEventListener(_e,oe,!1)),ve.target.classList&&ve.target.classList.contains("jsPanel-resizeit-handle")){let _e,Ke,Ee=ve.target.className;if(Ee.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(_e=!0),Ee.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Ke=!0),k.grid&&Array.isArray(k.grid)){k.grid.length===1&&(k.grid[1]=k.grid[0]);const ee=parseFloat(n.style.width),Ve=parseFloat(n.style.height),ze=ee%k.grid[0],le=Ve%k.grid[1],ge=parseFloat(n.style.left),Ct=parseFloat(n.style.top),se=ge%k.grid[0],Ye=Ct%k.grid[1];ze<k.grid[0]/2?n.style.width=ee-ze+"px":n.style.width=ee+(k.grid[0]-ze)+"px",le<k.grid[1]/2?n.style.height=Ve-le+"px":n.style.height=Ve+(k.grid[1]-le)+"px",_e&&(se<k.grid[0]/2?n.style.left=ge-se+"px":n.style.left=ge+(k.grid[0]-se)+"px"),Ke&&(Ye<k.grid[1]/2?n.style.top=Ct-Ye+"px":n.style.top=Ct+(k.grid[1]-Ye)+"px")}}if(ue){n.content.style.pointerEvents="inherit",ue=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let _e=n.controlbar.querySelector(".jsPanel-btn-smallify"),Ke=n.getBoundingClientRect();if(_e&&Ke.height>rt+5&&(_e.style.transform="rotate(0deg)"),document.dispatchEvent(b),k.stop.length){let Ee=window.getComputedStyle(n),ee={left:parseFloat(Ee.left),top:parseFloat(Ee.top),width:parseFloat(Ee.width),height:parseFloat(Ee.height)};O.processCallbacks(n,k.stop,!1,ee,ve)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(_e=>_e.style.pointerEvents="auto"),k.aspectRatio=Wt,document.removeEventListener(ve,Re)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(ve=>{ve.style.touchAction="none",O.pointerdown.forEach(_e=>{ve.addEventListener(_e,Ke=>{if(Ke.preventDefault(),Ke.stopPropagation(),Ke.button&&Ke.button>0)return!1;let Ee=1;if(k=Object.assign({},O.defaults.resizeit,f),(k.containment||k.containment===0)&&(k.containment=O.pOcontainment(k.containment)),k.aspectRatio&&k.aspectRatio===!0&&(k.aspectRatio="panel"),O.modifier){let he=O.modifier;he.altKey?k.aspectRatio="content":he.ctrlKey?k.aspectRatio="panel":he.shiftKey&&(k.aspectRatio=!1,Ee=2)}let ee=typeof k.maxWidth=="function"?k.maxWidth():k.maxWidth||1e4,Ve=typeof k.maxHeight=="function"?k.maxHeight():k.maxHeight||1e4,ze=typeof k.minWidth=="function"?k.minWidth():k.minWidth,le=typeof k.minHeight=="function"?k.minHeight():k.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(he=>he.style.pointerEvents="none");const ge=n.parentElement,Ct=ge.tagName.toLowerCase(),se=n.getBoundingClientRect(),Ye=ge.getBoundingClientRect(),cn=window.getComputedStyle(ge,null),It=parseInt(cn.borderLeftWidth,10),Ge=parseInt(cn.borderTopWidth,10),Et=cn.getPropertyValue("position"),Te=Ke.clientX||Ke.clientX===0||Ke.touches[0].clientX,Ne=Ke.clientY||Ke.clientY===0||Ke.touches[0].clientY,wt=Te/Ne,Je=Ke.target.classList,$e=n.getScaleFactor(),xe=se.width/se.height,St=n.content.getBoundingClientRect(),qe=St.width/St.height,pt=n.header.getBoundingClientRect().height,ot=n.footer.getBoundingClientRect().height||0;let Ze=se.left,Ie=se.top,ae=1e4,Xe=1e4,X=1e4,et=1e4;He=se.width,rt=se.height,Ct!=="body"&&(Ze=se.left-Ye.left+ge.scrollLeft,Ie=se.top-Ye.top+ge.scrollTop),Ct==="body"&&k.containment?(ae=document.documentElement.clientWidth-se.left,X=document.documentElement.clientHeight-se.top,Xe=se.width+se.left,et=se.height+se.top):k.containment&&(Et==="static"?(ae=Ye.width-se.left+It,X=Ye.height+Ye.top-se.top+Ge,Xe=se.width+(se.left-Ye.left)-It,et=se.height+(se.top-Ye.top)-Ge):(ae=ge.clientWidth-(se.left-Ye.left)/$e.x+It,X=ge.clientHeight-(se.top-Ye.top)/$e.y+Ge,Xe=(se.width+se.left-Ye.left)/$e.x-It,et=n.clientHeight+(se.top-Ye.top)/$e.y-Ge)),k.containment&&(Xe-=k.containment[3],et-=k.containment[0],ae-=k.containment[1],X-=k.containment[2]);const lt=window.getComputedStyle(n),$t=parseFloat(lt.width)-se.width,G=parseFloat(lt.height)-se.height;let Ht=parseFloat(lt.left)-se.left,Qt=parseFloat(lt.top)-se.top;ge!==document.body&&(Ht+=Ye.left,Qt+=Ye.top);let at=parseInt(lt.borderTopWidth,10),un=parseInt(lt.borderRightWidth,10),ne=parseInt(lt.borderBottomWidth,10),Se=parseInt(lt.borderLeftWidth,10);oe=he=>{he.preventDefault(),ue||(document.dispatchEvent(y),k.start.length&&O.processCallbacks(n,k.start,!1,{width:He,height:rt,left:Ze,top:Ie},he),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),se.height>rt+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),ue=1,document.dispatchEvent(P);let Oe=he.touches?he.touches[0].clientX:he.clientX,Ue=he.touches?he.touches[0].clientY:he.clientY,Ae;Je.contains("jsPanel-resizeit-e")?(q=He+(Oe-Te)*Ee/$e.x+$t,q>=ae&&(q=ae),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",Ee===2&&(n.style.left=Ze-(Oe-Te)+"px"),k.aspectRatio==="content"?(n.style.height=(q-un-Se)/qe+pt+ot+at+ne+"px",k.containment&&(Ae=n.overlaps(ge),Ae.bottom<=k.containment[2]&&(n.style.height=X+"px",n.style.width=X*qe+"px"))):k.aspectRatio==="panel"&&(n.style.height=q/xe+"px",k.containment&&(Ae=n.overlaps(ge),Ae.bottom<=k.containment[2]&&(n.style.height=X+"px",n.style.width=X*xe+"px")))):Je.contains("jsPanel-resizeit-s")?(V=rt+(Ue-Ne)*Ee/$e.y+G,V>=X&&(V=X),V>=Ve&&(V=Ve),V<=le&&(V=le),n.style.height=V+"px",Ee===2&&(n.style.top=Ie-(Ue-Ne)+"px"),k.aspectRatio==="content"?(n.style.width=(V-pt-ot-at-ne)*qe+at+ne+"px",k.containment&&(Ae=n.overlaps(ge),Ae.right<=k.containment[1]&&(n.style.width=ae+"px",n.style.height=ae/qe+"px"))):k.aspectRatio==="panel"&&(n.style.width=V*xe+"px",k.containment&&(Ae=n.overlaps(ge),Ae.right<=k.containment[1]&&(n.style.width=ae+"px",n.style.height=ae/xe+"px")))):Je.contains("jsPanel-resizeit-w")?(q=He+(Te-Oe)*Ee/$e.x+$t,q<=ee&&q>=ze&&q<=Xe&&(n.style.left=Ze+(Oe-Te)/$e.x+Ht+"px"),q>=Xe&&(q=Xe),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",k.aspectRatio==="content"?(n.style.height=(q-un-Se)/qe+pt+ot+at+ne+"px",k.containment&&(Ae=n.overlaps(ge),Ae.bottom<=k.containment[2]&&(n.style.height=X+"px",n.style.width=X*qe+"px"))):k.aspectRatio==="panel"&&(n.style.height=q/xe+"px",k.containment&&(Ae=n.overlaps(ge),Ae.bottom<=k.containment[2]&&(n.style.height=X+"px",n.style.width=X*xe+"px")))):Je.contains("jsPanel-resizeit-n")?(V=rt+(Ne-Ue)*Ee/$e.y+G,V<=Ve&&V>=le&&V<=et&&(n.style.top=Ie+(Ue-Ne)/$e.y+Qt+"px"),V>=et&&(V=et),V>=Ve&&(V=Ve),V<=le&&(V=le),n.style.height=V+"px",k.aspectRatio==="content"?(n.style.width=(V-pt-ot-at-ne)*qe+at+ne+"px",k.containment&&(Ae=n.overlaps(ge),Ae.right<=k.containment[1]&&(n.style.width=ae+"px",n.style.height=ae/qe+"px"))):k.aspectRatio==="panel"&&(n.style.width=V*xe+"px",k.containment&&(Ae=n.overlaps(ge),Ae.right<=k.containment[1]&&(n.style.width=ae+"px",n.style.height=ae/xe+"px")))):Je.contains("jsPanel-resizeit-se")?(q=He+(Oe-Te)*Ee/$e.x+$t,q>=ae&&(q=ae),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",Ee===2&&(n.style.left=Ze-(Oe-Te)+"px"),k.aspectRatio&&(n.style.height=q/xe+"px"),V=rt+(Ue-Ne)*Ee/$e.y+G,V>=X&&(V=X),V>=Ve&&(V=Ve),V<=le&&(V=le),n.style.height=V+"px",Ee===2&&(n.style.top=Ie-(Ue-Ne)+"px"),k.aspectRatio==="content"?(n.style.width=(V-pt-ot-at-ne)*qe+at+ne+"px",k.containment&&(Ae=n.overlaps(ge),Ae.right<=k.containment[1]&&(n.style.width=ae+"px",n.style.height=ae/qe+"px"))):k.aspectRatio==="panel"&&(n.style.width=V*xe+"px",k.containment&&(Ae=n.overlaps(ge),Ae.right<=k.containment[1]&&(n.style.width=ae+"px",n.style.height=ae/xe+"px")))):Je.contains("jsPanel-resizeit-sw")?(V=rt+(Ue-Ne)*Ee/$e.y+G,V>=X&&(V=X),V>=Ve&&(V=Ve),V<=le&&(V=le),n.style.height=V+"px",Ee===2&&(n.style.top=Ie-(Ue-Ne)+"px"),k.aspectRatio&&(n.style.width=V*xe+"px"),q=He+(Te-Oe)*Ee/$e.x+$t,q<=ee&&q>=ze&&q<=Xe&&(n.style.left=Ze+(Oe-Te)/$e.x+Ht+"px"),q>=Xe&&(q=Xe),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",k.aspectRatio==="content"?(n.style.height=(q-un-Se)/qe+pt+ot+at+ne+"px",k.containment&&(Ae=n.overlaps(ge),Ae.bottom<=k.containment[2]&&(n.style.height=X+"px",n.style.width=X*qe+"px"))):k.aspectRatio==="panel"&&(n.style.height=q/xe+"px",k.containment&&(Ae=n.overlaps(ge),Ae.bottom<=k.containment[2]&&(n.style.height=X+"px",n.style.width=X*xe+"px")))):Je.contains("jsPanel-resizeit-ne")?(q=He+(Oe-Te)*Ee/$e.x+$t,q>=ae&&(q=ae),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",Ee===2&&(n.style.left=Ze-(Oe-Te)+"px"),k.aspectRatio&&(n.style.height=q/xe+"px"),V=rt+(Ne-Ue)*Ee/$e.y+G,V<=Ve&&V>=le&&V<=et&&(n.style.top=Ie+(Ue-Ne)/$e.y+Qt+"px"),V>=et&&(V=et),V>=Ve&&(V=Ve),V<=le&&(V=le),n.style.height=V+"px",k.aspectRatio==="content"?(n.style.width=(V-pt-ot-at-ne)*qe+at+ne+"px",k.containment&&(Ae=n.overlaps(ge),Ae.right<=k.containment[1]&&(n.style.width=ae+"px",n.style.height=ae/qe+"px"))):k.aspectRatio==="panel"&&(n.style.width=V*xe+"px",k.containment&&(Ae=n.overlaps(ge),Ae.right<=k.containment[1]&&(n.style.width=ae+"px",n.style.height=ae/xe+"px")))):Je.contains("jsPanel-resizeit-nw")&&(k.aspectRatio&&Je.contains("jsPanel-resizeit-nw")&&(Oe=Ue*wt,Ue=Oe/wt),q=He+(Te-Oe)*Ee/$e.x+$t,q<=ee&&q>=ze&&q<=Xe&&(n.style.left=Ze+(Oe-Te)/$e.x+Ht+"px"),q>=Xe&&(q=Xe),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",k.aspectRatio&&(n.style.height=q/xe+"px"),V=rt+(Ne-Ue)*Ee/$e.y+G,V<=Ve&&V>=le&&V<=et&&(n.style.top=Ie+(Ue-Ne)/$e.y+Qt+"px"),V>=et&&(V=et),V>=Ve&&(V=Ve),V<=le&&(V=le),n.style.height=V+"px",k.aspectRatio==="content"?n.style.width=(V-pt-ot-at-ne)*qe+at+ne+"px":k.aspectRatio==="panel"&&(n.style.width=V*xe+"px")),window.getSelection().removeAllRanges();const Lt=window.getComputedStyle(n),Le={left:parseFloat(Lt.left),top:parseFloat(Lt.top),right:parseFloat(Lt.right),bottom:parseFloat(Lt.bottom),width:parseFloat(Lt.width),height:parseFloat(Lt.height)};k.resize.length&&O.processCallbacks(n,k.resize,!1,Le,he)},O.pointermove.forEach(he=>document.addEventListener(he,oe,!1)),window.addEventListener("mouseout",Me,!1)})}),O.pointerup.forEach(function(_e){document.addEventListener(_e,Re),window.removeEventListener("mouseout",Me)}),f.disable&&(ve.style.pointerEvents="none")}),n},n.resizeit=f=>{const y=n.querySelectorAll(".jsPanel-resizeit-handle");return f==="disable"?y.forEach(P=>P.style.pointerEvents="none"):y.forEach(P=>P.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const f=n.getBoundingClientRect();return{x:f.width/n.offsetWidth,y:f.height/n.offsetHeight}},n.calcSizeFactors=()=>{const f=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(f.left)/(window.innerWidth-parseFloat(f.width)),n.vf=parseFloat(f.top)/(window.innerHeight-parseFloat(f.height));else if(n.parentElement){let y=n.parentElement.getBoundingClientRect();n.hf=parseFloat(f.left)/(y.width-parseFloat(f.width)),n.vf=parseFloat(f.top)/(y.height-parseFloat(f.height))}},n.saveCurrentDimensions=()=>{const f=window.getComputedStyle(n);n.currentData.width=f.width,n.currentData.height=f.height},n.saveCurrentPosition=()=>{const f=window.getComputedStyle(n);n.currentData.left=f.left,n.currentData.top=f.top},n.reposition=(...f)=>{let y=e.position,P=!0,b;return f.forEach(k=>{typeof k=="string"||typeof k=="object"?y=k:typeof k=="boolean"?P=k:typeof k=="function"&&(b=k)}),O.position(n,y),n.slaves&&n.slaves.size>0&&n.slaves.forEach(k=>k.reposition()),P&&n.saveCurrentPosition(),b&&b.call(n,n),n},n.repositionOnSnap=f=>{let y="0",P="0",b=O.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(f){case"left-top":y=b[3],P=b[0];break;case"right-top":y=-b[1],P=b[0];break;case"right-bottom":y=-b[1],P=-b[2];break;case"left-bottom":y=b[3],P=-b[2];break;case"center-top":y=b[3]/2-b[1]/2,P=b[0];break;case"center-bottom":y=b[3]/2-b[1]/2,P=-b[2];break;case"left-center":y=b[3],P=b[0]/2-b[2]/2;break;case"right-center":y=-b[1],P=b[0]/2-b[2]/2;break}O.position(n,f),O.setStyles(n,{left:`calc(${n.style.left} + ${y}px)`,top:`calc(${n.style.top} + ${P}px)`})},n.overlaps=(f,y,P)=>{let b=n.getBoundingClientRect(),k=getComputedStyle(n.parentElement),oe=n.getScaleFactor(),ue={top:0,right:0,bottom:0,left:0},q,V=0,He=0,rt=0,Wt=0;n.options.container!=="window"&&y==="paddingbox"&&(ue.top=parseInt(k.borderTopWidth,10)*oe.y,ue.right=parseInt(k.borderRightWidth,10)*oe.x,ue.bottom=parseInt(k.borderBottomWidth,10)*oe.y,ue.left=parseInt(k.borderLeftWidth,10)*oe.x),typeof f=="string"?f==="window"?q={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:f==="parent"?q=n.parentElement.getBoundingClientRect():q=document.querySelector(f).getBoundingClientRect():q=f.getBoundingClientRect(),P&&(V=P.touches?P.touches[0].clientX:P.clientX,He=P.touches?P.touches[0].clientY:P.clientY,rt=V-q.left,Wt=He-q.top);let Me=b.left<q.right&&b.right>q.left,Re=b.top<q.bottom&&b.bottom>q.top;return{overlaps:Me&&Re,top:b.top-q.top-ue.top,right:q.right-b.right-ue.right,bottom:q.bottom-b.bottom-ue.bottom,left:b.left-q.left-ue.left,parentBorderWidth:ue,panelRect:b,referenceRect:q,pointer:{clientX:V,clientY:He,left:rt-ue.left,top:Wt-ue.top,right:q.width-rt-ue.right,bottom:q.height-Wt-ue.bottom}}},n.setSize=()=>{if(e.panelSize){const f=O.pOsize(n,e.panelSize);n.style.width=f.width,n.style.height=f.height}else if(e.contentSize){const f=O.pOsize(n,e.contentSize);n.content.style.width=f.width,n.content.style.height=f.height,n.style.width=f.width,n.content.style.width="100%"}return n},n.resize=(...f)=>{let y=window.getComputedStyle(n),P={width:y.width,height:y.height},b=!0,k;f.forEach(q=>{typeof q=="string"?P=q:typeof q=="object"?P=Object.assign(P,q):typeof q=="boolean"?b=q:typeof q=="function"&&(k=q)});let oe=O.pOsize(n,P);n.style.width=oe.width,n.style.height=oe.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(q=>q.reposition()),b&&n.saveCurrentDimensions(),n.status="normalized";let ue=n.controlbar.querySelector(".jsPanel-btn-smallify");return ue&&(ue.style.transform="rotate(0deg)"),k&&k.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=f=>{if(f.target===window){let y=n.status,P=e.onwindowresize,b,k;if(y==="maximized"&&P)n.maximize(!1,!0);else if(n.snapped&&y!=="minimized")n.snap(n.snapped,!0);else if(y==="normalized"||y==="smallified"||y==="maximized"){let oe=typeof P;oe==="boolean"?(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",k=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=k<=0?0:k+"px"):oe==="function"?P.call(n,f,n):oe==="object"&&(P.preset===!0&&(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",k=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=k<=0?0:k+"px"),P.callback.call(n,f,n))}else y==="smallifiedmax"&&P&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(oe=>oe.reposition())}},n.setControls=(f,y)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(P=>{const b=P.className.split("-"),k=b[b.length-1];n.getAttribute(`data-btn${k}`)!=="hidden"&&(P.style.display="block")}),f.forEach(P=>{const b=n.controlbar.querySelector(P);b&&(b.style.display="none")}),y&&y.call(n,n),n),n.setControlStatus=(f,y="enable",P)=>{const b=n.controlbar.querySelector(`.jsPanel-btn-${f}`);switch(y){case"disable":n.getAttribute(`data-btn${f}`)!=="removed"&&(n.setAttribute(`data-btn${f}`,"disabled"),b.style.pointerEvents="none",b.style.opacity=.4,b.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${f}`)!=="removed"&&(n.setAttribute(`data-btn${f}`,"hidden"),b.style.display="none");break;case"show":n.getAttribute(`data-btn${f}`)!=="removed"&&(n.setAttribute(`data-btn${f}`,"enabled"),b.style.display="block",b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${f}`)!=="removed"&&(n.getAttribute(`data-btn${f}`)==="hidden"&&(b.style.display="block"),n.setAttribute(`data-btn${f}`,"enabled"),b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(b),n.setAttribute(`data-btn${f}`,"removed");break}return P&&P.call(n,n),n},n.setControlSize=f=>{const y=f.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(b=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(k=>b.classList.remove(k)),b.classList.add(`jsPanel-btn-${y}`)}),y==="xl"?n.titlebar.style.fontSize="1.5rem":y==="lg"?n.titlebar.style.fontSize="1.25rem":y==="md"?n.titlebar.style.fontSize="1.05rem":y==="sm"?n.titlebar.style.fontSize=".9rem":y==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=f=>{if(n.options.headerControls.add){let k=n.options.headerControls.add;Array.isArray(k)||(k=[k]),k.forEach(oe=>n.addControl(oe))}let y=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(k=>{let oe=k.className.match(/jsPanel-btn-[a-z\d]{3,}/i),ue=oe[0].substring(12);y.push(ue)});const b=O.pOheaderControls(e.headerControls);return e.headerControls=b,y.forEach(k=>{b[k]&&n.setControlStatus(k,b[k])}),n.setControlSize(b.size),f&&f.call(n,n),n},n.setHeaderLogo=(f,y)=>{let P=[n.headerlogo],b=document.querySelector("#"+n.id+"-min");return b&&P.push(b.querySelector(".jsPanel-headerlogo")),typeof f=="string"?f.startsWith("<")?P.forEach(k=>k.innerHTML=f):P.forEach(k=>{O.emptyNode(k);let oe=document.createElement("img");oe.src=f,k.append(oe)}):P.forEach(k=>{O.emptyNode(k),k.append(f)}),n.headerlogo.childNodes.forEach(k=>{k.nodeName&&k.nodeName==="IMG"&&k.setAttribute("draggable","false")}),y&&y.call(n,n),n},n.setHeaderRemove=f=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(y=>n.setAttribute(`data-btn${y}`,"removed")),f&&f.call(n,n),n),n.setHeaderTitle=(f,y)=>{let P=[n.headertitle],b=document.querySelector("#"+n.id+"-min");return b&&P.push(b.querySelector(".jsPanel-title")),typeof f=="string"?P.forEach(k=>k.innerHTML=f):typeof f=="function"?P.forEach(k=>{O.emptyNode(k),k.innerHTML=f()}):P.forEach(k=>{O.emptyNode(k),k.append(f)}),y&&y.call(n,n),n},n.setIconfont=(f,y=n,P)=>{if(f){let b,k;if(f==="fa"||f==="far"||f==="fal"||f==="fas"||f==="fad")b=[`${f} fa-window-close`,`${f} fa-window-maximize`,`${f} fa-window-restore`,`${f} fa-window-minimize`,`${f} fa-chevron-up`];else if(f==="material-icons")b=[f,f,f,f,f,f],k=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(f))b=[`custom-control-icon ${f[4]}`,`custom-control-icon ${f[3]}`,`custom-control-icon ${f[2]}`,`custom-control-icon ${f[1]}`,`custom-control-icon ${f[0]}`];else if(f==="bootstrap"||f==="glyphicon")b=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return y;y.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(oe=>O.emptyNode(oe).innerHTML="<span></span>"),Array.prototype.slice.call(y.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((oe,ue)=>{oe.className=b[ue],f==="material-icons"&&(oe.textContent=k[ue])})}return P&&P.call(y,y),y},n.addToolbar=(f,y,P)=>{if(f==="header"?f=n.headertoolbar:f==="footer"&&(f=n.footer),typeof y=="string")f.innerHTML=y;else if(Array.isArray(y))y.forEach(b=>{typeof b=="string"?f.innerHTML+=b:f.append(b)});else if(typeof y=="function"){let b=y.call(n,n);typeof b=="string"?f.innerHTML=b:f.append(b)}else f.append(y);return f.classList.add("active"),P&&P.call(n,n),n},n.addCloseControl=()=>{let f=document.createElement("button"),y=n.content.style.color;return f.classList.add("jsPanel-addCloseCtrl"),f.innerHTML=O.icons.close,f.style.color=y,n.options.rtl&&f.classList.add("rtl"),n.appendChild(f),O.pointerup.forEach(P=>{f.addEventListener(P,b=>{if(b.preventDefault(),b.button&&b.button>0)return!1;n.close(null,!0)})}),O.pointerdown.forEach(P=>{f.addEventListener(P,b=>b.preventDefault())}),n},n.addControl=f=>{if(!f.html)return n;f.position||(f.position=1);const y=n.controlbar.querySelectorAll(".jsPanel-btn").length;let P=document.createElement("button");P.innerHTML=f.html,P.className=`jsPanel-btn jsPanel-btn-${f.name} jsPanel-btn-${e.headerControls.size}`,P.style.color=n.header.style.color,f.position>y?n.controlbar.append(P):n.controlbar.insertBefore(P,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${f.position})`));const b=f.ariaLabel||f.name;return b&&P.setAttribute("aria-label",b),O.pointerup.forEach(k=>{P.addEventListener(k,oe=>{if(oe.preventDefault(),oe.button&&oe.button>0)return!1;f.handler.call(n,n,P)})}),f.afterInsert&&f.afterInsert.call(P,P),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(f=>{f.dir="rtl",e.rtl.lang&&(f.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),i.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),O.isIE){let f=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":f.forEach(y=>{y.style.height="34px"});break;case"xs":f.forEach(y=>{y.style.height="26px"});break;case"sm":f.forEach(y=>{y.style.height="30px"});break;case"lg":f.forEach(y=>{y.style.height="38px"});break;case"xl":f.forEach(y=>{y.style.height="42px"});break}}if(e.header==="auto-show-hide"){let f="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,f),this.setClass(n.content,f),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,O.setClass(n,f),O.remClass(n.content,f)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,O.remClass(n,f),O.setClass(n.content,f)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[f,y]of Object.entries(e.css))if(f==="panel")n.className+=` ${y}`;else{let P=n.querySelector(`.jsPanel-${f}`);P&&(P.className+=` ${y}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const f=e.contentOverflow.split(" ");f.length===1?n.content.style.overflow=f[0]:f.length===2&&(n.content.style.overflowX=f[0],n.content.style.overflowY=f[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let f=Object.assign({},O.defaultAutocloseConfig,e.autoclose);f.time&&typeof f.time=="number"&&(f.time+="ms");let y=n.progressbar.querySelector("div");y.addEventListener("animationend",P=>{P.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),f.progressbar&&(n.progressbar.classList.add("active"),f.background?O.colorNames[f.background]?n.progressbar.style.background="#"+O.colorNames[f.background]:n.progressbar.style.background=f.background:n.progressbar.classList.add("success-bg")),y.style.animation=`${f.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(m),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let f=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=f,e.dragit.snap===!0?(e.dragit.snap=O.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=f)}if(e.dragit?(["start","drag","stop"].forEach(f=>{e.dragit[f]?typeof e.dragit[f]=="function"&&(e.dragit[f]=[e.dragit[f]]):e.dragit[f]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",f=>{f.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(y=>{e.resizeit[y]?typeof e.resizeit[y]=="function"&&(e.resizeit[y]=[e.resizeit[y]]):e.resizeit[y]=[]}),n.sizeit(e.resizeit);let f;n.addEventListener("jspanelresizestart",y=>{y.panel===n&&(f=n.status)},!1),n.addEventListener("jspanelresizestop",y=>{y.panel===n&&(f==="smallified"||f==="smallifiedmax"||f==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(f=>{n.addEventListener(f,y=>{!y.target.closest(".jsPanel-btn-close")&&!y.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let f=e.onparentresize,y=typeof f,P=n.isChildpanel();if(P){const b=P.content;let k=[];n.parentResizeHandler=oe=>{if(oe.panel===P){k[0]=b.offsetWidth,k[1]=b.offsetHeight;let ue=n.status,q,V;ue==="maximized"&&f?n.maximize():n.snapped&&ue!=="minimized"?n.snap(n.snapped,!0):ue==="normalized"||ue==="smallified"||ue==="maximized"?y==="function"?f.call(n,n,{width:k[0],height:k[1]}):y==="object"&&f.preset===!0?(q=(k[0]-n.offsetWidth)*n.hf,n.style.left=q<=0?0:q+"px",V=(k[1]-n.offsetHeight)*n.vf,n.style.top=V<=0?0:V+"px",f.callback.call(n,n,{width:k[0],height:k[1]})):y==="boolean"&&(q=(k[0]-n.offsetWidth)*n.hf,n.style.left=q<=0?0:q+"px",V=(k[1]-n.offsetHeight)*n.vf,n.style.top=V<=0?0:V+"px"):ue==="smallifiedmax"&&f&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(f=>f.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(f=>f.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(f=>f.call(n,n)):t.call(n,n)),document.dispatchEvent(a),n}};const Ah=.25,Ph=4;function Th(e){return Math.min(Ph,Math.max(Ah,e))}function ko(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const rr={x:0,y:0,scale:1};function Co(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Dh(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function jh(e,t){let r={...rr};t.style.transformOrigin="0 0";const i=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`};let n="none",a={...rr},c=0,d=0,m=0,v=0,A=0,$=0;const R=(f,y)=>{const P=e.getBoundingClientRect();return{x:f-P.left,y:y-P.top}},B=f=>{if(f.touches.length===2){n="pinch",a={...r};const[y,P]=[f.touches[0],f.touches[1]];m=Co(y,P)||1;const b=R((y.clientX+P.clientX)/2,(y.clientY+P.clientY)/2);v=(b.x-r.x)/r.scale,A=(b.y-r.y)/r.scale,f.preventDefault();return}if(f.touches.length===1&&!Dh(f.target)){const y=f.timeStamp;if(y-$<300){r={...rr},i(),$=0,n="none",f.preventDefault();return}$=y,n="pan",a={...r},c=f.touches[0].clientX,d=f.touches[0].clientY}else n="none"},N=f=>{if(n==="pan"&&f.touches.length===1){const y=f.touches[0];r=ko(a,y.clientX-c,y.clientY-d),i(),f.preventDefault()}else if(n==="pinch"&&f.touches.length>=2){const[y,P]=[f.touches[0],f.touches[1]],b=Th(a.scale*(Co(y,P)/m)),k=R((y.clientX+P.clientX)/2,(y.clientY+P.clientY)/2);r={x:k.x-v*b,y:k.y-A*b,scale:b},i(),f.preventDefault()}},W=f=>{f.touches.length===0?n="none":f.touches.length===1&&n==="pinch"&&(n="pan",a={...r},c=f.touches[0].clientX,d=f.touches[0].clientY)};let ce=!1,de={...rr},De=0,Be=0,ie=!1;const pe=(f,y)=>{const P=e.getBoundingClientRect();return f>=P.left&&f<=P.right&&y>=P.top&&y<=P.bottom},Ce=f=>{if(!ce)return;const y=f.clientX-De,P=f.clientY-Be;!ie&&Math.hypot(y,P)<4||(ie=!0,document.body.style.cursor="grabbing",r=ko(de,y,P),i(),f.preventDefault())},be=()=>{ce&&(ce=!1,document.body.style.cursor="",window.removeEventListener("mousemove",Ce,!0),window.removeEventListener("mouseup",yt,!0))};function yt(){be()}const xt=f=>{f.button===2&&pe(f.clientX,f.clientY)&&(ce=!0,ie=!1,de={...r},De=f.clientX,Be=f.clientY,window.addEventListener("mousemove",Ce,!0),window.addEventListener("mouseup",yt,!0))},zt=f=>{ie&&(f.preventDefault(),ie=!1)};return e.addEventListener("touchstart",B,{passive:!1}),e.addEventListener("touchmove",N,{passive:!1}),e.addEventListener("touchend",W),e.addEventListener("touchcancel",W),window.addEventListener("mousedown",xt,!0),window.addEventListener("contextmenu",zt,!0),{snapshot:()=>({...r}),reset:()=>{r={...rr},i()},restore:f=>{r={...f},i()},dispose:()=>{e.removeEventListener("touchstart",B),e.removeEventListener("touchmove",N),e.removeEventListener("touchend",W),e.removeEventListener("touchcancel",W),window.removeEventListener("mousedown",xt,!0),window.removeEventListener("contextmenu",zt,!0),be()}}}var Fh=Object.defineProperty,Oh=Object.getOwnPropertyDescriptor,hr=(e,t,r,i)=>{for(var n=i>1?void 0:i?Oh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Fh(t,r,n),n};let Fn=class extends Qe{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return U`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return U`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};Fn.styles=[on,st`
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
    `];hr([Gt({type:String})],Fn.prototype,"tableId",2);hr([Z()],Fn.prototype,"query",2);hr([Z()],Fn.prototype,"open",2);hr([Wn("input")],Fn.prototype,"inputEl",2);Fn=hr([dt("panel-search")],Fn);var Rh=Object.defineProperty,zh=Object.getOwnPropertyDescriptor,Kn=(e,t,r,i)=>{for(var n=i>1?void 0:i?zh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Rh(t,r,n),n};let yn=class extends Qe{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1}async connectedCallback(){super.connectedCallback();const e=await je();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(r=>r.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await je();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await je(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const i of t.columns)r[i.field]=Ih(i);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}async runTableButton(e){const t=await je();try{await Promise.resolve(e.onClick(t.api,{tableId:this.tableId}))}catch(r){console.error(`[table-button:${e.id}]`,r)}}render(){return U`
      <button title="Add a blank row" @click=${this.addRow}>
        <span class="mi sm">add</span><span>Add row</span>
      </button>
      <button title="Edit columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span><span>Columns</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>U`<button title=${e.tooltip??e.label} @click=${()=>this.runTableButton(e)}>
              ${e.icon?U`<span class="mi sm">${e.icon}</span>`:""}
              <span>${e.label}</span>
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};yn.styles=[on,st`
      :host {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        width: 100%;
        padding: 0.35rem 0.55rem;
        box-sizing: border-box;
        font-size: 0.85rem;
      }
      button {
        font: inherit;
        padding: 0.2rem 0.55rem;
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
      .spacer {
        flex: 1;
      }
      .count {
        color: #6b7280;
      }
      .mi.sm {
        font-size: 0.95rem;
      }
    `];Kn([Gt({type:String})],yn.prototype,"tableId",2);Kn([Gt({type:Boolean})],yn.prototype,"active",2);Kn([Z()],yn.prototype,"rowCount",2);Kn([Z()],yn.prototype,"tableButtons",2);Kn([Z()],yn.prototype,"table",2);yn=Kn([dt("panel-footer")],yn);function Ih(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function Lh(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}const Pn=new Map,qr=new Set,$a=new Set;let Eo=!1,Ur=null;async function Bh(){if(Eo)return;Eo=!0;const e=await je(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");t&&r&&(Ur=jh(t,r));const i=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);i.sort(So);for(const n of i)_o(n,e);e.store.tables.subscribe(n=>{const a=n.filter(m=>m.workspaceId===e.workspaceId),c=new Set(a.map(m=>m.id));for(const[m,v]of Pn)if(!c.has(m)){Pn.delete(m),qr.add(m),$a.add(m);try{v.status!=="closed"&&v.close()}catch{}}const d=a.filter(m=>!Pn.has(m.id)).sort(So);for(const m of d)_o(m,e)})}function So(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const Mh=200,Nh=100,qh=720,Uh=360;function Wh(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<Mh||e.h<Nh?null:{...e}}function _o(e,t){const r=`panel-${ka(e.id)}`,i=Lh(),n=Wh(e.windowGeometry),a=n?.minimized===!0,c=()=>{const f=document.createElement("data-table");return f.tableId=e.id,f.style.height="100%",f},d=a?document.createElement("div"):c();let m=a?null:d,v=e.name,A=null;const $=f=>{typeof be.setHeaderTitle=="function"&&be.setHeaderTitle(`${v} (${f})`)},R=()=>{A||(A=t.store.rows(e.id).subscribe(f=>$(f.length)))},B=()=>{A?.(),A=null},N=()=>{B(),de.active=!1,m?.remove(),m=null},W=()=>{if(m)return;const f=document.getElementById(r)?.querySelector(".jsPanel-content");if(!f)return;f.replaceChildren();const y=c();f.appendChild(y),m=y,de.active=!0,R()},ce=document.createElement("panel-search");ce.tableId=e.id;const de=document.createElement("panel-footer");de.tableId=e.id,de.active=!a;let De=null,Be=!1;const ie=f=>{const y=f==="maximized";y&&!Be?(De=Ur?.snapshot()??null,Ur?.reset()):!y&&Be&&(De&&Ur?.restore(De),De=null),Be=y},pe=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:Kh(),Ce=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:`${qh} ${Uh}`},be=O.create({id:r,container:i,headerTitle:e.name,footerToolbar:de,theme:"primary",content:d,...Ce,position:pe,minimizeTo:"parent",dragit:{containment:!1,stop:()=>Mi(e.id,t)},resizeit:{containment:!1,stop:()=>Mi(e.id,t)},onfronted:()=>Vh(e.id,t),onbeforeclose:()=>qr.has(e.id)?!0:((async()=>await t.api.ui.dialogs.confirm(e.source?`Remove the live table "${e.name}"? Its data stays on the Datasette server.`:`Delete table "${e.name}" and all its rows?`,"Confirm")&&(qr.add(e.id),Pn.get(e.id)?.close()))(),!1),onclosed:async()=>{Pn.delete(e.id),qr.delete(e.id),!$a.delete(e.id)&&await Yh(e.id,t)},onstatuschange:f=>{f.status==="minimized"?N():(f.status==="normalized"||f.status==="maximized")&&W(),ie(f.status),Mi(e.id,t)}});Pn.set(e.id,be);const xt=document.getElementById(r)?.querySelector(".jsPanel-controlbar");xt&&xt.prepend(ce),n?.maximized&&typeof be.maximize=="function"?queueMicrotask(()=>be.maximize?.()):n?.minimized&&typeof be.minimize=="function"&&queueMicrotask(()=>be.minimize?.()),t.store.tables.subscribe(f=>{const y=f.find(P=>P.id===e.id);y&&y.name!==v&&(v=y.name,A&&t.store.rows(e.id).find().then(P=>$(P.length)))}),a||R();const zt=be.close.bind(be);be.close=()=>(B(),zt())}let Hh=0;function Kh(){const e=Hh++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function Mi(e,t){const r=document.getElementById(`panel-${ka(e)}`);if(!r)return;const i=Pn.get(e)?.status??"normalized";try{const a=(await t.store.tables.findOne(e))?.windowGeometry,c=i==="minimized",d=i==="maximized";let m=r.offsetLeft,v=r.offsetTop,A=r.offsetWidth,$=r.offsetHeight;(c||d)&&a&&(m=a.x,v=a.y,A=a.w,$=a.h),m<=-9e3&&(m=a?.x??40);const R={x:m,y:v,w:A,h:$,z:a?.z??0,minimized:c,maximized:d};await t.store.tables.patch(e,{windowGeometry:R,updatedAt:Date.now()})}catch{}}async function Vh(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const i=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...i,z:Date.now()},updatedAt:Date.now()})}catch{}}async function Yh(e,t){if(!(await t.store.tables.findOne(e))?.source){const i=t.store.rows(e),n=await i.find();await i.bulkRemove(n.map(a=>a.id))}await t.store.tables.remove(e)}function ka(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var Xh=Object.defineProperty,Gh=Object.getOwnPropertyDescriptor,Ca=(e,t,r,i)=>{for(var n=i>1?void 0:i?Gh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Xh(t,r,n),n};let Yr=class extends Qe{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await je();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(i=>i.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await Bh()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?U``:U`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on
      the page, or click <strong>+ New Table</strong> above.
    </div>`}};Yr.styles=st`
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
  `;Ca([Z()],Yr.prototype,"tables",2);Yr=Ca([dt("table-list")],Yr);var Qh=Object.defineProperty,Jh=Object.getOwnPropertyDescriptor,cs=(e,t,r,i)=>{for(var n=i>1?void 0:i?Jh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Qh(t,r,n),n};let lr=class extends Qe{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await je();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const i=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(i)}async addWorkspace(){const t=await(await je()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return U`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>U`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};lr.styles=[on,st`
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
  `];cs([Z()],lr.prototype,"workspaces",2);cs([Z()],lr.prototype,"current",2);lr=cs([dt("workspace-selector")],lr);var Ao=Object.freeze,Ea=Object.defineProperty,Zh=Object.getOwnPropertyDescriptor,ln=(e,t,r,i)=>{for(var n=i>1?void 0:i?Zh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Ea(t,r,n),n},ef=(e,t)=>Ao(Ea(e,"raw",{value:Ao(e.slice())})),Po;function tf(e){return e?e.trimStart().startsWith("<svg")?U`<span class="icon-svg">${Sl(e)}</span>`:U`<span class="mi sm">${e}</span>`:""}let Nt=class extends Qe{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId)},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{To(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!To(e))return;e.preventDefault();const t=await je(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const i of[...t.registries.dropHandlers])try{if(await i(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=e=>{this.api&&Promise.resolve(e.onClick(this.api)).catch(t=>{console.error(`[footer-button:${e.id}]`,t)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager)}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await je();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e))}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){const r=t==="header"||e.variant==="primary"?"primary":"slot";return U`
      <button class=${r} title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
        ${tf(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return U(Po||(Po=ef([`
      <header>
        <strong>easyDBAccess <span class="version">v0.0.42</span></strong>
        `,`
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
      <script-editor-dialog><\/script-editor-dialog>
      <host-dialogs></host-dialogs>
      <toast-host></toast-host>
    `])),this.headerButtons.map(e=>this.renderSlotButton(e,"header")),this.searchOpen?U`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?U`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:U`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              @click=${this.openSearch}
            >
              <span class="mi">search</span>
            </button>`,this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Nt.styles=[on,st`
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
    `];ln([Wn("new-table-dialog")],Nt.prototype,"dialog",2);ln([Wn("csv-paste-dialog")],Nt.prototype,"csvPasteDialog",2);ln([Wn("plugin-manager-dialog")],Nt.prototype,"pluginManagerDialog",2);ln([Wn("input.search")],Nt.prototype,"searchInput",2);ln([Z()],Nt.prototype,"footerButtons",2);ln([Z()],Nt.prototype,"headerButtons",2);ln([Z()],Nt.prototype,"searchQuery",2);ln([Z()],Nt.prototype,"searchOpen",2);Nt=ln([dt("app-shell")],Nt);function To(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([je(),Qa(()=>Promise.resolve().then(()=>ya),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});
//# sourceMappingURL=index-DVxnh1sb.js.map
