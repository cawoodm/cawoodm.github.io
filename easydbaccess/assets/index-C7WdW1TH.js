(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const al="modulepreload",ll=function(e){return"/easydbaccess/"+e},Ks={},cl=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){let c=function(w){return Promise.all(w.map(S=>Promise.resolve(S).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=d?.nonce||d?.getAttribute("nonce");n=c(r.map(w=>{if(w=ll(w),w in Ks)return;Ks[w]=!0;const S=w.endsWith(".css"),x=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${w}"]${x}`))return;const O=document.createElement("link");if(O.rel=S?"stylesheet":al,S||(O.as="script"),O.crossOrigin="",O.href=w,p&&O.setAttribute("nonce",p),document.head.appendChild(O),S)return new Promise((W,L)=>{O.addEventListener("load",W),O.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${w}`)))})}))}function a(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return n.then(c=>{for(const d of c||[])d.status==="rejected"&&a(d.reason);return t().catch(a)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vr=globalThis,is=Vr.ShadowRoot&&(Vr.ShadyCSS===void 0||Vr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ss=Symbol(),Vs=new WeakMap;let No=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==ss)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(is&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=Vs.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Vs.set(r,t))}return t}toString(){return this.cssText}};const ul=e=>new No(typeof e=="string"?e:e+"",void 0,ss),Je=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,a)=>i+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[a+1],e[0]);return new No(r,e,ss)},dl=(e,t)=>{if(is)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),n=Vr.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}},Ys=is?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return ul(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:hl,defineProperty:fl,getOwnPropertyDescriptor:pl,getOwnPropertyNames:ml,getOwnPropertySymbols:gl,getPrototypeOf:bl}=Object,ri=globalThis,Xs=ri.trustedTypes,yl=Xs?Xs.emptyScript:"",wl=ri.reactiveElementPolyfillSupport,cr=(e,t)=>e,Qr={toAttribute(e,t){switch(t){case Boolean:e=e?yl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},os=(e,t)=>!hl(e,t),Gs={attribute:!0,type:String,converter:Qr,reflect:!1,useDefault:!1,hasChanged:os};Symbol.metadata??=Symbol("metadata"),ri.litPropertyMetadata??=new WeakMap;let Wn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Gs){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&fl(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){const{get:n,set:a}=pl(this.prototype,t)??{get(){return this[r]},set(c){this[r]=c}};return{get:n,set(c){const d=n?.call(this);a?.call(this,c),this.requestUpdate(t,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Gs}static _$Ei(){if(this.hasOwnProperty(cr("elementProperties")))return;const t=bl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(cr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(cr("properties"))){const r=this.properties,i=[...ml(r),...gl(r)];for(const n of i)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(Ys(n))}else t!==void 0&&r.push(Ys(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dl(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const a=(i.converter?.toAttribute!==void 0?i.converter:Qr).toAttribute(r,i.type);this._$Em=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,r){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const a=i.getPropertyOptions(n),c=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Qr;this._$Em=n;const d=c.fromAttribute(r,a.type);this[n]=d??this._$Ej?.get(n)??d,this._$Em=null}}requestUpdate(t,r,i,n=!1,a){if(t!==void 0){const c=this.constructor;if(n===!1&&(a=this[t]),i??=c.getPropertyOptions(t),!((i.hasChanged??os)(a,r)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(c._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:n,wrapped:a},c){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,c??r??this[t]),a!==!0||c!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,a]of i){const{wrapped:c}=a,d=this[n];c!==!0||this._$AL.has(n)||d===void 0||this.C(n,void 0,a,d)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Wn.elementStyles=[],Wn.shadowRootOptions={mode:"open"},Wn[cr("elementProperties")]=new Map,Wn[cr("finalized")]=new Map,wl?.({ReactiveElement:Wn}),(ri.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const as=globalThis,Qs=e=>e,Jr=as.trustedTypes,Js=Jr?Jr.createPolicy("lit-html",{createHTML:e=>e}):void 0,qo="$lit$",wn=`lit$${Math.random().toFixed(9).slice(2)}$`,Uo="?"+wn,vl=`<${Uo}>`,On=document,dr=()=>On.createComment(""),hr=e=>e===null||typeof e!="object"&&typeof e!="function",ls=Array.isArray,xl=e=>ls(e)||typeof e?.[Symbol.iterator]=="function",Ni=`[ 	
\f\r]`,ar=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zs=/-->/g,eo=/>/g,Pn=RegExp(`>|${Ni}(?:([^\\s"'>=/]+)(${Ni}*=${Ni}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),to=/'/g,no=/"/g,Ho=/^(?:script|style|textarea|title)$/i,$l=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),N=$l(1),Fn=Symbol.for("lit-noChange"),_e=Symbol.for("lit-nothing"),ro=new WeakMap,Dn=On.createTreeWalker(On,129);function Wo(e,t){if(!ls(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Js!==void 0?Js.createHTML(t):t}const kl=(e,t)=>{const r=e.length-1,i=[];let n,a=t===2?"<svg>":t===3?"<math>":"",c=ar;for(let d=0;d<r;d++){const p=e[d];let w,S,x=-1,O=0;for(;O<p.length&&(c.lastIndex=O,S=c.exec(p),S!==null);)O=c.lastIndex,c===ar?S[1]==="!--"?c=Zs:S[1]!==void 0?c=eo:S[2]!==void 0?(Ho.test(S[2])&&(n=RegExp("</"+S[2],"g")),c=Pn):S[3]!==void 0&&(c=Pn):c===Pn?S[0]===">"?(c=n??ar,x=-1):S[1]===void 0?x=-2:(x=c.lastIndex-S[2].length,w=S[1],c=S[3]===void 0?Pn:S[3]==='"'?no:to):c===no||c===to?c=Pn:c===Zs||c===eo?c=ar:(c=Pn,n=void 0);const W=c===Pn&&e[d+1].startsWith("/>")?" ":"";a+=c===ar?p+vl:x>=0?(i.push(w),p.slice(0,x)+qo+p.slice(x)+wn+W):p+wn+(x===-2?d:W)}return[Wo(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class fr{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let a=0,c=0;const d=t.length-1,p=this.parts,[w,S]=kl(t,r);if(this.el=fr.createElement(w,i),Dn.currentNode=this.el.content,r===2||r===3){const x=this.el.content.firstChild;x.replaceWith(...x.childNodes)}for(;(n=Dn.nextNode())!==null&&p.length<d;){if(n.nodeType===1){if(n.hasAttributes())for(const x of n.getAttributeNames())if(x.endsWith(qo)){const O=S[c++],W=n.getAttribute(x).split(wn),L=/([.?@])?(.*)/.exec(O);p.push({type:1,index:a,name:L[2],strings:W,ctor:L[1]==="."?El:L[1]==="?"?Sl:L[1]==="@"?_l:ii}),n.removeAttribute(x)}else x.startsWith(wn)&&(p.push({type:6,index:a}),n.removeAttribute(x));if(Ho.test(n.tagName)){const x=n.textContent.split(wn),O=x.length-1;if(O>0){n.textContent=Jr?Jr.emptyScript:"";for(let W=0;W<O;W++)n.append(x[W],dr()),Dn.nextNode(),p.push({type:2,index:++a});n.append(x[O],dr())}}}else if(n.nodeType===8)if(n.data===Uo)p.push({type:2,index:a});else{let x=-1;for(;(x=n.data.indexOf(wn,x+1))!==-1;)p.push({type:7,index:a}),x+=wn.length-1}a++}}static createElement(t,r){const i=On.createElement("template");return i.innerHTML=t,i}}function Kn(e,t,r=e,i){if(t===Fn)return t;let n=i!==void 0?r._$Co?.[i]:r._$Cl;const a=hr(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),a===void 0?n=void 0:(n=new a(e),n._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=n:r._$Cl=n),n!==void 0&&(t=Kn(e,n._$AS(e,t.values),n,i)),t}class Cl{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,n=(t?.creationScope??On).importNode(r,!0);Dn.currentNode=n;let a=Dn.nextNode(),c=0,d=0,p=i[0];for(;p!==void 0;){if(c===p.index){let w;p.type===2?w=new mr(a,a.nextSibling,this,t):p.type===1?w=new p.ctor(a,p.name,p.strings,this,t):p.type===6&&(w=new Al(a,this,t)),this._$AV.push(w),p=i[++d]}c!==p?.index&&(a=Dn.nextNode(),c++)}return Dn.currentNode=On,n}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class mr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=_e,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Kn(this,t,r),hr(t)?t===_e||t==null||t===""?(this._$AH!==_e&&this._$AR(),this._$AH=_e):t!==this._$AH&&t!==Fn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_e&&hr(this._$AH)?this._$AA.nextSibling.data=t:this.T(On.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=fr.createElement(Wo(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(r);else{const a=new Cl(n,this),c=a.u(this.options);a.p(r),this.T(c),this._$AH=a}}_$AC(t){let r=ro.get(t.strings);return r===void 0&&ro.set(t.strings,r=new fr(t)),r}k(t){ls(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const a of t)n===r.length?r.push(i=new mr(this.O(dr()),this.O(dr()),this,this.options)):i=r[n],i._$AI(a),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=Qs(t).nextSibling;Qs(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ii{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,a){this.type=1,this._$AH=_e,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_e}_$AI(t,r=this,i,n){const a=this.strings;let c=!1;if(a===void 0)t=Kn(this,t,r,0),c=!hr(t)||t!==this._$AH&&t!==Fn,c&&(this._$AH=t);else{const d=t;let p,w;for(t=a[0],p=0;p<a.length-1;p++)w=Kn(this,d[i+p],r,p),w===Fn&&(w=this._$AH[p]),c||=!hr(w)||w!==this._$AH[p],w===_e?t=_e:t!==_e&&(t+=(w??"")+a[p+1]),this._$AH[p]=w}c&&!n&&this.j(t)}j(t){t===_e?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class El extends ii{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_e?void 0:t}}class Sl extends ii{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_e)}}class _l extends ii{constructor(t,r,i,n,a){super(t,r,i,n,a),this.type=5}_$AI(t,r=this){if((t=Kn(this,t,r,0)??_e)===Fn)return;const i=this._$AH,n=t===_e&&i!==_e||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==_e&&(i===_e||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Al{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Kn(this,t)}}const Pl=as.litHtmlPolyfillSupport;Pl?.(fr,mr),(as.litHtmlVersions??=[]).push("3.3.3");const Tl=(e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const a=r?.renderBefore??null;i._$litPart$=n=new mr(t.insertBefore(dr(),a),a,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cs=globalThis;let Ge=class extends Wn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tl(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Fn}};Ge._$litElement$=!0,Ge.finalized=!0,cs.litElementHydrateSupport?.({LitElement:Ge});const Dl=cs.litElementPolyfillSupport;Dl?.({LitElement:Ge});(cs.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jl={attribute:!0,type:String,converter:Qr,reflect:!1,hasChanged:os},Rl=(e=jl,t,r)=>{const{kind:i,metadata:n}=r;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),i==="accessor"){const{name:c}=r;return{set(d){const p=t.get.call(this);t.set.call(this,d),this.requestUpdate(c,p,e,!0,d)},init(d){return d!==void 0&&this.C(c,void 0,e,d),d}}}if(i==="setter"){const{name:c}=r;return function(d){const p=this[c];t.call(this,d),this.requestUpdate(c,p,e,!0,d)}}throw Error("Unsupported decorator location: "+i)};function Ut(e){return(t,r)=>typeof r=="object"?Rl(e,t,r):((i,n,a)=>{const c=n.hasOwnProperty(a);return n.constructor.createProperty(a,i),c?Object.getOwnPropertyDescriptor(n,a):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(e){return Ut({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ol=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Yn(e,t){return(r,i,n)=>{const a=c=>c.renderRoot?.querySelector(e)??null;return Ol(r,i,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fl={CHILD:2},Ko=e=>(...t)=>({_$litDirective$:e,values:t});class Il{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Zr extends Il{constructor(t){if(super(t),this.it=_e,t.type!==Fl.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===_e||t==null)return this._t=void 0,this.it=t;if(t===Fn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Zr.directiveName="unsafeHTML",Zr.resultType=1;const qi=Ko(Zr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xi extends Zr{}Xi.directiveName="unsafeSVG",Xi.resultType=2;const zl=Ko(Xi);var Ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yr={exports:{}},Ml=Yr.exports,io;function Nl(){return io||(io=1,(function(e,t){(function(r,i){e.exports=i()})(Ml,function(){var r=function(s,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,u){l.__proto__=u}||function(l,u){for(var h in u)Object.prototype.hasOwnProperty.call(u,h)&&(l[h]=u[h])})(s,o)},i=function(){return(i=Object.assign||function(s){for(var o,l=1,u=arguments.length;l<u;l++)for(var h in o=arguments[l])Object.prototype.hasOwnProperty.call(o,h)&&(s[h]=o[h]);return s}).apply(this,arguments)};function n(s,o,l){for(var u,h=0,m=o.length;h<m;h++)!u&&h in o||((u=u||Array.prototype.slice.call(o,0,h))[h]=o[h]);return s.concat(u||Array.prototype.slice.call(o))}var a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Ll,c=Object.keys,d=Array.isArray;function p(s,o){return typeof o!="object"||c(o).forEach(function(l){s[l]=o[l]}),s}typeof Promise>"u"||a.Promise||(a.Promise=Promise);var w=Object.getPrototypeOf,S={}.hasOwnProperty;function x(s,o){return S.call(s,o)}function O(s,o){typeof o=="function"&&(o=o(w(s))),(typeof Reflect>"u"?c:Reflect.ownKeys)(o).forEach(function(l){L(s,l,o[l])})}var W=Object.defineProperty;function L(s,o,l,u){W(s,o,p(l&&x(l,"get")&&typeof l.get=="function"?{get:l.get,set:l.set,configurable:!0}:{value:l,configurable:!0,writable:!0},u))}function U(s){return{from:function(o){return s.prototype=Object.create(o.prototype),L(s.prototype,"constructor",s),{extend:O.bind(null,s.prototype)}}}}var oe=Object.getOwnPropertyDescriptor,de=[].slice;function xe(s,o,l){return de.call(s,o,l)}function Fe(s,o){return o(s)}function ie(s){if(!s)throw new Error("Assertion Failed")}function he(s){a.setImmediate?setImmediate(s):setTimeout(s,0)}function be(s,o){if(typeof o=="string"&&x(s,o))return s[o];if(!o)return s;if(typeof o!="string"){for(var l=[],u=0,h=o.length;u<h;++u){var m=be(s,o[u]);l.push(m)}return l}var g=o.indexOf(".");if(g!==-1){var v=s[o.substr(0,g)];return v==null?void 0:be(v,o.substr(g+1))}}function ye(s,o,l){if(s&&o!==void 0&&!("isFrozen"in Object&&Object.isFrozen(s)))if(typeof o!="string"&&"length"in o){ie(typeof l!="string"&&"length"in l);for(var u=0,h=o.length;u<h;++u)ye(s,o[u],l[u])}else{var m,g,v=o.indexOf(".");v!==-1?(m=o.substr(0,v),(g=o.substr(v+1))===""?l===void 0?d(s)&&!isNaN(parseInt(m))?s.splice(m,1):delete s[m]:s[m]=l:ye(v=!(v=s[m])||!x(s,m)?s[m]={}:v,g,l)):l===void 0?d(s)&&!isNaN(parseInt(o))?s.splice(o,1):delete s[o]:s[o]=l}}function ft(s){var o,l={};for(o in s)x(s,o)&&(l[o]=s[o]);return l}var $t=[].concat;function wt(s){return $t.apply([],s)}var rn="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(wt([8,16,32,64].map(function(s){return["Int","Uint","Float"].map(function(o){return o+s+"Array"})}))).filter(function(s){return a[s]}),f=new Set(rn.map(function(s){return a[s]})),y=null;function A(s){return y=new WeakMap,s=(function o(l){if(!l||typeof l!="object")return l;var u=y.get(l);if(u)return u;if(d(l)){u=[],y.set(l,u);for(var h=0,m=l.length;h<m;++h)u.push(o(l[h]))}else if(f.has(l.constructor))u=l;else{var g,v=w(l);for(g in u=v===Object.prototype?{}:Object.create(v),y.set(l,u),l)x(l,g)&&(u[g]=o(l[g]))}return u})(s),y=null,s}var b={}.toString;function k(s){return b.call(s).slice(8,-1)}var ae=typeof Symbol<"u"?Symbol.iterator:"@@iterator",ue=typeof ae=="symbol"?function(s){var o;return s!=null&&(o=s[ae])&&o.apply(s)}:function(){return null};function q(s,o){return o=s.indexOf(o),0<=o&&s.splice(o,1),0<=o}var Y={};function We(s){var o,l,u,h;if(arguments.length===1){if(d(s))return s.slice();if(this===Y&&typeof s=="string")return[s];if(h=ue(s)){for(l=[];!(u=h.next()).done;)l.push(u.value);return l}if(s==null)return[s];if(typeof(o=s.length)!="number")return[s];for(l=new Array(o);o--;)l[o]=s[o];return l}for(o=arguments.length,l=new Array(o);o--;)l[o]=arguments[o];return l}var st=typeof Symbol<"u"?function(s){return s[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Ce=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Ft=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Ce),Kt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Me(s,o){this.name=s,this.message=o}function Ie(s,o){return s+". Errors: "+Object.keys(o).map(function(l){return o[l].toString()}).filter(function(l,u,h){return h.indexOf(l)===u}).join(`
`)}function $e(s,o,l,u){this.failures=o,this.failedKeys=u,this.successCount=l,this.message=Ie(s,o)}function Te(s,o){this.name="BulkError",this.failures=Object.keys(o).map(function(l){return o[l]}),this.failuresByPos=o,this.message=Ie(s,this.failures)}U(Me).from(Error).extend({toString:function(){return this.name+": "+this.message}}),U($e).from(Me),U(Te).from(Me);var Ke=Ft.reduce(function(s,o){return s[o]=o+"Error",s},{}),Ae=Me,ee=Ft.reduce(function(s,o){var l=o+"Error";function u(h,m){this.name=l,h?typeof h=="string"?(this.message="".concat(h).concat(m?`
 `+m:""),this.inner=m||null):typeof h=="object"&&(this.message="".concat(h.name," ").concat(h.message),this.inner=h):(this.message=Kt[o]||l,this.inner=null)}return U(u).from(Ae),s[o]=u,s},{});ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError;var Ve=Ce.reduce(function(s,o){return s[o+"Error"]=ee[o],s},{}),ze=Ft.reduce(function(s,o){return["Syntax","Type","Range"].indexOf(o)===-1&&(s[o+"Error"]=ee[o]),s},{});function ce(){}function ge(s){return s}function Et(s,o){return s==null||s===ge?o:function(l){return o(s(l))}}function se(s,o){return function(){s.apply(this,arguments),o.apply(this,arguments)}}function Ye(s,o){return s===ce?o:function(){var l=s.apply(this,arguments);l!==void 0&&(arguments[0]=l);var u=this.onsuccess,h=this.onerror;this.onsuccess=null,this.onerror=null;var m=o.apply(this,arguments);return u&&(this.onsuccess=this.onsuccess?se(u,this.onsuccess):u),h&&(this.onerror=this.onerror?se(h,this.onerror):h),m!==void 0?m:l}}function dn(s,o){return s===ce?o:function(){s.apply(this,arguments);var l=this.onsuccess,u=this.onerror;this.onsuccess=this.onerror=null,o.apply(this,arguments),l&&(this.onsuccess=this.onsuccess?se(l,this.onsuccess):l),u&&(this.onerror=this.onerror?se(u,this.onerror):u)}}function Bt(s,o){return s===ce?o:function(l){var u=s.apply(this,arguments);p(l,u);var h=this.onsuccess,m=this.onerror;return this.onsuccess=null,this.onerror=null,l=o.apply(this,arguments),h&&(this.onsuccess=this.onsuccess?se(h,this.onsuccess):h),m&&(this.onerror=this.onerror?se(m,this.onerror):m),u===void 0?l===void 0?void 0:l:p(u,l)}}function Qe(s,o){return s===ce?o:function(){return o.apply(this,arguments)!==!1&&s.apply(this,arguments)}}function St(s,o){return s===ce?o:function(){var l=s.apply(this,arguments);if(l&&typeof l.then=="function"){for(var u=this,h=arguments.length,m=new Array(h);h--;)m[h]=arguments[h];return l.then(function(){return o.apply(u,m)})}return o.apply(this,arguments)}}ze.ModifyError=$e,ze.DexieError=Me,ze.BulkError=Te;var Re=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ne(s){Re=s}var vt={},Ze=100,rn=typeof Promise>"u"?[]:(function(){var s=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[s,w(s),s];var o=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[o,w(o),s]})(),Ce=rn[0],Ft=rn[1],rn=rn[2],Ft=Ft&&Ft.then,ke=Ce&&Ce.constructor,_t=!!rn,qe=function(s,o){tt.push([s,o]),at&&(queueMicrotask(fe),at=!1)},mt=!0,at=!0,et=[],Le=[],le=ge,Xe={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ce,pgp:!1,env:{},finalize:ce},G=Xe,tt=[],ut=0,kt=[];function Q(s){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var o=this._PSD=G;if(typeof s!="function"){if(s!==vt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&lt(this,this._value))}this._state=null,this._value=null,++o.ref,(function l(u,h){try{h(function(m){if(u._state===null){if(m===u)throw new TypeError("A promise cannot be resolved with itself.");var g=u._lib&&Oe();m&&typeof m.then=="function"?l(u,function(v,C){m instanceof Q?m._then(v,C):m.then(v,C)}):(u._state=!0,u._value=m,hn(u)),g&&Ue()}},lt.bind(null,u))}catch(m){lt(u,m)}})(this,s)}var Vt={get:function(){var s=G,o=kr;function l(u,h){var m=this,g=!s.global&&(s!==G||o!==kr),v=g&&!pn(),C=new Q(function(_,D){ne(m,new tn(ys(u,s,g,v),ys(h,s,g,v),_,D,s))});return this._consoleTask&&(C._consoleTask=this._consoleTask),C}return l.prototype=vt,l},set:function(s){L(this,"then",s&&s.prototype===vt?Vt:{get:function(){return s},set:Vt.set})}};function tn(s,o,l,u,h){this.onFulfilled=typeof s=="function"?s:null,this.onRejected=typeof o=="function"?o:null,this.resolve=l,this.reject=u,this.psd=h}function lt(s,o){var l,u;Le.push(o),s._state===null&&(l=s._lib&&Oe(),o=le(o),s._state=!1,s._value=o,u=s,et.some(function(h){return h._value===u._value})||et.push(u),hn(s),l&&Ue())}function hn(s){var o=s._listeners;s._listeners=[];for(var l=0,u=o.length;l<u;++l)ne(s,o[l]);var h=s._PSD;--h.ref||h.finalize(),ut===0&&(++ut,qe(function(){--ut==0&&De()},[]))}function ne(s,o){if(s._state!==null){var l=s._state?o.onFulfilled:o.onRejected;if(l===null)return(s._state?o.resolve:o.reject)(s._value);++o.psd.ref,++ut,qe(Pe,[l,s,o])}else s._listeners.push(o)}function Pe(s,o,l){try{var u,h=o._value;!o._state&&Le.length&&(Le=[]),u=Re&&o._consoleTask?o._consoleTask.run(function(){return s(h)}):s(h),o._state||Le.indexOf(h)!==-1||(function(m){for(var g=et.length;g;)if(et[--g]._value===m._value)return et.splice(g,1)})(o),l.resolve(u)}catch(m){l.reject(m)}finally{--ut==0&&De(),--l.psd.ref||l.psd.finalize()}}function fe(){kn(Xe,function(){Oe()&&Ue()})}function Oe(){var s=mt;return at=mt=!1,s}function Ue(){var s,o,l;do for(;0<tt.length;)for(s=tt,tt=[],l=s.length,o=0;o<l;++o){var u=s[o];u[0].apply(null,u[1])}while(0<tt.length);at=mt=!0}function De(){var s=et;et=[],s.forEach(function(u){u._PSD.onunhandled.call(null,u._value,u)});for(var o=kt.slice(0),l=o.length;l;)o[--l]()}function Mt(s){return new Q(vt,!1,s)}function Be(s,o){var l=G;return function(){var u=Oe(),h=G;try{return mn(l,!0),s.apply(this,arguments)}catch(m){o&&o(m)}finally{mn(h,!1),u&&Ue()}}}O(Q.prototype,{then:Vt,_then:function(s,o){ne(this,new tn(null,null,s,o,G))},catch:function(s){if(arguments.length===1)return this.then(null,s);var o=s,l=arguments[1];return typeof o=="function"?this.then(null,function(u){return(u instanceof o?l:Mt)(u)}):this.then(null,function(u){return(u&&u.name===o?l:Mt)(u)})},finally:function(s){return this.then(function(o){return Q.resolve(s()).then(function(){return o})},function(o){return Q.resolve(s()).then(function(){return Mt(o)})})},timeout:function(s,o){var l=this;return s<1/0?new Q(function(u,h){var m=setTimeout(function(){return h(new ee.Timeout(o))},s);l.then(u,h).finally(clearTimeout.bind(null,m))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&L(Q.prototype,Symbol.toStringTag,"Dexie.Promise"),Xe.env=bs(),O(Q,{all:function(){var s=We.apply(null,arguments).map(Cr);return new Q(function(o,l){s.length===0&&o([]);var u=s.length;s.forEach(function(h,m){return Q.resolve(h).then(function(g){s[m]=g,--u||o(s)},l)})})},resolve:function(s){return s instanceof Q?s:s&&typeof s.then=="function"?new Q(function(o,l){s.then(o,l)}):new Q(vt,!0,s)},reject:Mt,race:function(){var s=We.apply(null,arguments).map(Cr);return new Q(function(o,l){s.map(function(u){return Q.resolve(u).then(o,l)})})},PSD:{get:function(){return G},set:function(s){return G=s}},totalEchoes:{get:function(){return kr}},newPSD:fn,usePSD:kn,scheduler:{get:function(){return qe},set:function(s){qe=s}},rejectionMapper:{get:function(){return le},set:function(s){le=s}},follow:function(s,o){return new Q(function(l,u){return fn(function(h,m){var g=G;g.unhandleds=[],g.onunhandled=m,g.finalize=se(function(){var v,C=this;v=function(){C.unhandleds.length===0?h():m(C.unhandleds[0])},kt.push(function _(){v(),kt.splice(kt.indexOf(_),1)}),++ut,qe(function(){--ut==0&&De()},[])},g.finalize),s()},o,l,u)})}}),ke&&(ke.allSettled&&L(Q,"allSettled",function(){var s=We.apply(null,arguments).map(Cr);return new Q(function(o){s.length===0&&o([]);var l=s.length,u=new Array(l);s.forEach(function(h,m){return Q.resolve(h).then(function(g){return u[m]={status:"fulfilled",value:g}},function(g){return u[m]={status:"rejected",reason:g}}).then(function(){return--l||o(u)})})})}),ke.any&&typeof AggregateError<"u"&&L(Q,"any",function(){var s=We.apply(null,arguments).map(Cr);return new Q(function(o,l){s.length===0&&l(new AggregateError([]));var u=s.length,h=new Array(u);s.forEach(function(m,g){return Q.resolve(m).then(function(v){return o(v)},function(v){h[g]=v,--u||l(new AggregateError(h))})})})}),ke.withResolvers&&(Q.withResolvers=ke.withResolvers));var dt={awaits:0,echoes:0,id:0},La=0,xr=[],$r=0,kr=0,Ba=0;function fn(s,o,l,u){var h=G,m=Object.create(h);return m.parent=h,m.ref=0,m.global=!1,m.id=++Ba,Xe.env,m.env=_t?{Promise:Q,PromiseProp:{value:Q,configurable:!0,writable:!0},all:Q.all,race:Q.race,allSettled:Q.allSettled,any:Q.any,resolve:Q.resolve,reject:Q.reject}:{},o&&p(m,o),++h.ref,m.finalize=function(){--this.parent.ref||this.parent.finalize()},u=kn(m,s,l,u),m.ref===0&&m.finalize(),u}function Bn(){return dt.id||(dt.id=++La),++dt.awaits,dt.echoes+=Ze,dt.id}function pn(){return!!dt.awaits&&(--dt.awaits==0&&(dt.id=0),dt.echoes=dt.awaits*Ze,!0)}function Cr(s){return dt.echoes&&s&&s.constructor===ke?(Bn(),s.then(function(o){return pn(),o},function(o){return pn(),nt(o)})):s}function Ma(){var s=xr[xr.length-1];xr.pop(),mn(s,!1)}function mn(s,o){var l,u=G;(o?!dt.echoes||$r++&&s===G:!$r||--$r&&s===G)||queueMicrotask(o?function(h){++kr,dt.echoes&&--dt.echoes!=0||(dt.echoes=dt.awaits=dt.id=0),xr.push(G),mn(h,!0)}.bind(null,s):Ma),s!==G&&(G=s,u===Xe&&(Xe.env=bs()),_t&&(l=Xe.env.Promise,o=s.env,(u.global||s.global)&&(Object.defineProperty(a,"Promise",o.PromiseProp),l.all=o.all,l.race=o.race,l.resolve=o.resolve,l.reject=o.reject,o.allSettled&&(l.allSettled=o.allSettled),o.any&&(l.any=o.any))))}function bs(){var s=a.Promise;return _t?{Promise:s,PromiseProp:Object.getOwnPropertyDescriptor(a,"Promise"),all:s.all,race:s.race,allSettled:s.allSettled,any:s.any,resolve:s.resolve,reject:s.reject}:{}}function kn(s,o,l,u,h){var m=G;try{return mn(s,!0),o(l,u,h)}finally{mn(m,!1)}}function ys(s,o,l,u){return typeof s!="function"?s:function(){var h=G;l&&Bn(),mn(o,!0);try{return s.apply(this,arguments)}finally{mn(h,!1),u&&queueMicrotask(pn)}}}function fi(s){Promise===ke&&dt.echoes===0?$r===0?s():enqueueNativeMicroTask(s):setTimeout(s,0)}(""+Ft).indexOf("[native code]")===-1&&(Bn=pn=ce);var nt=Q.reject,Cn="￿",nn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ws="String expected.",Mn=[],Er="__dbnames",pi="readonly",mi="readwrite";function En(s,o){return s?o?function(){return s.apply(this,arguments)&&o.apply(this,arguments)}:s:o}var vs={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Sr(s){return typeof s!="string"||/\./.test(s)?function(o){return o}:function(o){return o[s]===void 0&&s in o&&delete(o=A(o))[s],o}}function xs(){throw ee.Type()}function Ee(s,o){try{var l=$s(s),u=$s(o);if(l!==u)return l==="Array"?1:u==="Array"?-1:l==="binary"?1:u==="binary"?-1:l==="string"?1:u==="string"?-1:l==="Date"?1:u!=="Date"?NaN:-1;switch(l){case"number":case"Date":case"string":return o<s?1:s<o?-1:0;case"binary":return(function(h,m){for(var g=h.length,v=m.length,C=g<v?g:v,_=0;_<C;++_)if(h[_]!==m[_])return h[_]<m[_]?-1:1;return g===v?0:g<v?-1:1})(ks(s),ks(o));case"Array":return(function(h,m){for(var g=h.length,v=m.length,C=g<v?g:v,_=0;_<C;++_){var D=Ee(h[_],m[_]);if(D!==0)return D}return g===v?0:g<v?-1:1})(s,o)}}catch{}return NaN}function $s(s){var o=typeof s;return o!="object"?o:ArrayBuffer.isView(s)?"binary":(s=k(s),s==="ArrayBuffer"?"binary":s)}function ks(s){return s instanceof Uint8Array?s:ArrayBuffer.isView(s)?new Uint8Array(s.buffer,s.byteOffset,s.byteLength):new Uint8Array(s)}var Cs=(He.prototype._trans=function(s,o,l){var u=this._tx||G.trans,h=this.name,m=Re&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(s==="readonly"?"read":"write"," ").concat(this.name));function g(_,D,$){if(!$.schema[h])throw new ee.NotFound("Table "+h+" not part of transaction");return o($.idbtrans,$)}var v=Oe();try{var C=u&&u.db._novip===this.db._novip?u===G.trans?u._promise(s,g,l):fn(function(){return u._promise(s,g,l)},{trans:u,transless:G.transless||G}):(function _(D,$,R,E){if(D.idbdb&&(D._state.openComplete||G.letThrough||D._vip)){var T=D._createTransaction($,R,D._dbSchema);try{T.create(),D._state.PR1398_maxLoop=3}catch(j){return j.name===Ke.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return _(D,$,R,E)})):nt(j)}return T._promise($,function(j,P){return fn(function(){return G.trans=T,E(j,P,T)})}).then(function(j){if($==="readwrite")try{T.idbtrans.commit()}catch{}return $==="readonly"?j:T._completion.then(function(){return j})})}if(D._state.openComplete)return nt(new ee.DatabaseClosed(D._state.dbOpenError));if(!D._state.isBeingOpened){if(!D._state.autoOpen)return nt(new ee.DatabaseClosed);D.open().catch(ce)}return D._state.dbReadyPromise.then(function(){return _(D,$,R,E)})})(this.db,s,[this.name],g);return m&&(C._consoleTask=m,C=C.catch(function(_){return console.trace(_),nt(_)})),C}finally{v&&Ue()}},He.prototype.get=function(s,o){var l=this;return s&&s.constructor===Object?this.where(s).first(o):s==null?nt(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(u){return l.core.get({trans:u,key:s}).then(function(h){return l.hook.reading.fire(h)})}).then(o)},He.prototype.where=function(s){if(typeof s=="string")return new this.db.WhereClause(this,s);if(d(s))return new this.db.WhereClause(this,"[".concat(s.join("+"),"]"));var o=c(s);if(o.length===1)return this.where(o[0]).equals(s[o[0]]);var l=this.schema.indexes.concat(this.schema.primKey).filter(function(v){if(v.compound&&o.every(function(_){return 0<=v.keyPath.indexOf(_)})){for(var C=0;C<o.length;++C)if(o.indexOf(v.keyPath[C])===-1)return!1;return!0}return!1}).sort(function(v,C){return v.keyPath.length-C.keyPath.length})[0];if(l&&this.db._maxKey!==Cn){var m=l.keyPath.slice(0,o.length);return this.where(m).equals(m.map(function(C){return s[C]}))}!l&&Re&&console.warn("The query ".concat(JSON.stringify(s)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(o.join("+"),"]"));var u=this.schema.idxByName;function h(v,C){return Ee(v,C)===0}var g=o.reduce(function($,C){var _=$[0],D=$[1],$=u[C],R=s[C];return[_||$,_||!$?En(D,$&&$.multi?function(E){return E=be(E,C),d(E)&&E.some(function(T){return h(R,T)})}:function(E){return h(R,be(E,C))}):D]},[null,null]),m=g[0],g=g[1];return m?this.where(m.name).equals(s[m.keyPath]).filter(g):l?this.filter(g):this.where(o).equals("")},He.prototype.filter=function(s){return this.toCollection().and(s)},He.prototype.count=function(s){return this.toCollection().count(s)},He.prototype.offset=function(s){return this.toCollection().offset(s)},He.prototype.limit=function(s){return this.toCollection().limit(s)},He.prototype.each=function(s){return this.toCollection().each(s)},He.prototype.toArray=function(s){return this.toCollection().toArray(s)},He.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},He.prototype.orderBy=function(s){return new this.db.Collection(new this.db.WhereClause(this,d(s)?"[".concat(s.join("+"),"]"):s))},He.prototype.reverse=function(){return this.toCollection().reverse()},He.prototype.mapToClass=function(s){var o,l=this.db,u=this.name;function h(){return o!==null&&o.apply(this,arguments)||this}(this.schema.mappedClass=s).prototype instanceof xs&&((function(C,_){if(typeof _!="function"&&_!==null)throw new TypeError("Class extends value "+String(_)+" is not a constructor or null");function D(){this.constructor=C}r(C,_),C.prototype=_===null?Object.create(_):(D.prototype=_.prototype,new D)})(h,o=s),Object.defineProperty(h.prototype,"db",{get:function(){return l},enumerable:!1,configurable:!0}),h.prototype.table=function(){return u},s=h);for(var m=new Set,g=s.prototype;g;g=w(g))Object.getOwnPropertyNames(g).forEach(function(C){return m.add(C)});function v(C){if(!C)return C;var _,D=Object.create(s.prototype);for(_ in C)if(!m.has(_))try{D[_]=C[_]}catch{}return D}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=v,this.hook("reading",v),s},He.prototype.defineClass=function(){return this.mapToClass(function(s){p(this,s)})},He.prototype.add=function(s,o){var l=this,u=this.schema.primKey,h=u.auto,m=u.keyPath,g=s;return m&&h&&(g=Sr(m)(s)),this._trans("readwrite",function(v){return l.core.mutate({trans:v,type:"add",keys:o!=null?[o]:null,values:[g]})}).then(function(v){return v.numFailures?Q.reject(v.failures[0]):v.lastResult}).then(function(v){if(m)try{ye(s,m,v)}catch{}return v})},He.prototype.update=function(s,o){return typeof s!="object"||d(s)?this.where(":id").equals(s).modify(o):(s=be(s,this.schema.primKey.keyPath),s===void 0?nt(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(s).modify(o))},He.prototype.put=function(s,o){var l=this,u=this.schema.primKey,h=u.auto,m=u.keyPath,g=s;return m&&h&&(g=Sr(m)(s)),this._trans("readwrite",function(v){return l.core.mutate({trans:v,type:"put",values:[g],keys:o!=null?[o]:null})}).then(function(v){return v.numFailures?Q.reject(v.failures[0]):v.lastResult}).then(function(v){if(m)try{ye(s,m,v)}catch{}return v})},He.prototype.delete=function(s){var o=this;return this._trans("readwrite",function(l){return o.core.mutate({trans:l,type:"delete",keys:[s]})}).then(function(l){return l.numFailures?Q.reject(l.failures[0]):void 0})},He.prototype.clear=function(){var s=this;return this._trans("readwrite",function(o){return s.core.mutate({trans:o,type:"deleteRange",range:vs})}).then(function(o){return o.numFailures?Q.reject(o.failures[0]):void 0})},He.prototype.bulkGet=function(s){var o=this;return this._trans("readonly",function(l){return o.core.getMany({keys:s,trans:l}).then(function(u){return u.map(function(h){return o.hook.reading.fire(h)})})})},He.prototype.bulkAdd=function(s,o,l){var u=this,h=Array.isArray(o)?o:void 0,m=(l=l||(h?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(g){var _=u.schema.primKey,v=_.auto,_=_.keyPath;if(_&&h)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(h&&h.length!==s.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var C=s.length,_=_&&v?s.map(Sr(_)):s;return u.core.mutate({trans:g,type:"add",keys:h,values:_,wantResults:m}).then(function(T){var $=T.numFailures,R=T.results,E=T.lastResult,T=T.failures;if($===0)return m?R:E;throw new Te("".concat(u.name,".bulkAdd(): ").concat($," of ").concat(C," operations failed"),T)})})},He.prototype.bulkPut=function(s,o,l){var u=this,h=Array.isArray(o)?o:void 0,m=(l=l||(h?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(g){var _=u.schema.primKey,v=_.auto,_=_.keyPath;if(_&&h)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(h&&h.length!==s.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var C=s.length,_=_&&v?s.map(Sr(_)):s;return u.core.mutate({trans:g,type:"put",keys:h,values:_,wantResults:m}).then(function(T){var $=T.numFailures,R=T.results,E=T.lastResult,T=T.failures;if($===0)return m?R:E;throw new Te("".concat(u.name,".bulkPut(): ").concat($," of ").concat(C," operations failed"),T)})})},He.prototype.bulkUpdate=function(s){var o=this,l=this.core,u=s.map(function(g){return g.key}),h=s.map(function(g){return g.changes}),m=[];return this._trans("readwrite",function(g){return l.getMany({trans:g,keys:u,cache:"clone"}).then(function(v){var C=[],_=[];s.forEach(function($,R){var E=$.key,T=$.changes,j=v[R];if(j){for(var P=0,I=Object.keys(T);P<I.length;P++){var z=I[P],B=T[z];if(z===o.schema.primKey.keyPath){if(Ee(B,E)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else ye(j,z,B)}m.push(R),C.push(E),_.push(j)}});var D=C.length;return l.mutate({trans:g,type:"put",keys:C,values:_,updates:{keys:u,changeSpecs:h}}).then(function($){var R=$.numFailures,E=$.failures;if(R===0)return D;for(var T=0,j=Object.keys(E);T<j.length;T++){var P,I=j[T],z=m[Number(I)];z!=null&&(P=E[I],delete E[I],E[z]=P)}throw new Te("".concat(o.name,".bulkUpdate(): ").concat(R," of ").concat(D," operations failed"),E)})})})},He.prototype.bulkDelete=function(s){var o=this,l=s.length;return this._trans("readwrite",function(u){return o.core.mutate({trans:u,type:"delete",keys:s})}).then(function(g){var h=g.numFailures,m=g.lastResult,g=g.failures;if(h===0)return m;throw new Te("".concat(o.name,".bulkDelete(): ").concat(h," of ").concat(l," operations failed"),g)})},He);function He(){}function Jn(s){function o(g,v){if(v){for(var C=arguments.length,_=new Array(C-1);--C;)_[C-1]=arguments[C];return l[g].subscribe.apply(null,_),s}if(typeof g=="string")return l[g]}var l={};o.addEventType=m;for(var u=1,h=arguments.length;u<h;++u)m(arguments[u]);return o;function m(g,v,C){if(typeof g!="object"){var _;v=v||Qe;var D={subscribers:[],fire:C=C||ce,subscribe:function($){D.subscribers.indexOf($)===-1&&(D.subscribers.push($),D.fire=v(D.fire,$))},unsubscribe:function($){D.subscribers=D.subscribers.filter(function(R){return R!==$}),D.fire=D.subscribers.reduce(v,C)}};return l[g]=o[g]=D}c(_=g).forEach(function($){var R=_[$];if(d(R))m($,_[$][0],_[$][1]);else{if(R!=="asap")throw new ee.InvalidArgument("Invalid event config");var E=m($,ge,function(){for(var T=arguments.length,j=new Array(T);T--;)j[T]=arguments[T];E.subscribers.forEach(function(P){he(function(){P.apply(null,j)})})})}})}}function Zn(s,o){return U(o).from({prototype:s}),o}function Nn(s,o){return!(s.filter||s.algorithm||s.or)&&(o?s.justLimit:!s.replayFilter)}function gi(s,o){s.filter=En(s.filter,o)}function bi(s,o,l){var u=s.replayFilter;s.replayFilter=u?function(){return En(u(),o())}:o,s.justLimit=l&&!u}function _r(s,o){if(s.isPrimKey)return o.primaryKey;var l=o.getIndexByKeyPath(s.index);if(!l)throw new ee.Schema("KeyPath "+s.index+" on object store "+o.name+" is not indexed");return l}function Es(s,o,l){var u=_r(s,o.schema);return o.openCursor({trans:l,values:!s.keysOnly,reverse:s.dir==="prev",unique:!!s.unique,query:{index:u,range:s.range}})}function Ar(s,o,l,u){var h=s.replayFilter?En(s.filter,s.replayFilter()):s.filter;if(s.or){var m={},g=function(v,C,_){var D,$;h&&!h(C,_,function(R){return C.stop(R)},function(R){return C.fail(R)})||(($=""+(D=C.primaryKey))=="[object ArrayBuffer]"&&($=""+new Uint8Array(D)),x(m,$)||(m[$]=!0,o(v,C,_)))};return Promise.all([s.or._iterate(g,l),Ss(Es(s,u,l),s.algorithm,g,!s.keysOnly&&s.valueMapper)])}return Ss(Es(s,u,l),En(s.algorithm,h),o,!s.keysOnly&&s.valueMapper)}function Ss(s,o,l,u){var h=Be(u?function(m,g,v){return l(u(m),g,v)}:l);return s.then(function(m){if(m)return m.start(function(){var g=function(){return m.continue()};o&&!o(m,function(v){return g=v},function(v){m.stop(v),g=ce},function(v){m.fail(v),g=ce})||h(m.value,m,function(v){return g=v}),g()})})}var rn=Symbol(),er=(_s.prototype.execute=function(s){if(this.add!==void 0){var o=this.add;if(d(o))return n(n([],d(s)?s:[],!0),o).sort();if(typeof o=="number")return(Number(s)||0)+o;if(typeof o=="bigint")try{return BigInt(s)+o}catch{return BigInt(0)+o}throw new TypeError("Invalid term ".concat(o))}if(this.remove!==void 0){var l=this.remove;if(d(l))return d(s)?s.filter(function(u){return!l.includes(u)}).sort():[];if(typeof l=="number")return Number(s)-l;if(typeof l=="bigint")try{return BigInt(s)-l}catch{return BigInt(0)-l}throw new TypeError("Invalid subtrahend ".concat(l))}return o=(o=this.replacePrefix)===null||o===void 0?void 0:o[0],o&&typeof s=="string"&&s.startsWith(o)?this.replacePrefix[1]+s.substring(o.length):s},_s);function _s(s){Object.assign(this,s)}var Na=(je.prototype._read=function(s,o){var l=this._ctx;return l.error?l.table._trans(null,nt.bind(null,l.error)):l.table._trans("readonly",s).then(o)},je.prototype._write=function(s){var o=this._ctx;return o.error?o.table._trans(null,nt.bind(null,o.error)):o.table._trans("readwrite",s,"locked")},je.prototype._addAlgorithm=function(s){var o=this._ctx;o.algorithm=En(o.algorithm,s)},je.prototype._iterate=function(s,o){return Ar(this._ctx,s,o,this._ctx.table.core)},je.prototype.clone=function(s){var o=Object.create(this.constructor.prototype),l=Object.create(this._ctx);return s&&p(l,s),o._ctx=l,o},je.prototype.raw=function(){return this._ctx.valueMapper=null,this},je.prototype.each=function(s){var o=this._ctx;return this._read(function(l){return Ar(o,s,l,o.table.core)})},je.prototype.count=function(s){var o=this;return this._read(function(l){var u=o._ctx,h=u.table.core;if(Nn(u,!0))return h.count({trans:l,query:{index:_r(u,h.schema),range:u.range}}).then(function(g){return Math.min(g,u.limit)});var m=0;return Ar(u,function(){return++m,!1},l,h).then(function(){return m})}).then(s)},je.prototype.sortBy=function(s,o){var l=s.split(".").reverse(),u=l[0],h=l.length-1;function m(C,_){return _?m(C[l[_]],_-1):C[u]}var g=this._ctx.dir==="next"?1:-1;function v(C,_){return Ee(m(C,h),m(_,h))*g}return this.toArray(function(C){return C.sort(v)}).then(o)},je.prototype.toArray=function(s){var o=this;return this._read(function(l){var u=o._ctx;if(u.dir==="next"&&Nn(u,!0)&&0<u.limit){var h=u.valueMapper,m=_r(u,u.table.core.schema);return u.table.core.query({trans:l,limit:u.limit,values:!0,query:{index:m,range:u.range}}).then(function(v){return v=v.result,h?v.map(h):v})}var g=[];return Ar(u,function(v){return g.push(v)},l,u.table.core).then(function(){return g})},s)},je.prototype.offset=function(s){var o=this._ctx;return s<=0||(o.offset+=s,Nn(o)?bi(o,function(){var l=s;return function(u,h){return l===0||(l===1?--l:h(function(){u.advance(l),l=0}),!1)}}):bi(o,function(){var l=s;return function(){return--l<0}})),this},je.prototype.limit=function(s){return this._ctx.limit=Math.min(this._ctx.limit,s),bi(this._ctx,function(){var o=s;return function(l,u,h){return--o<=0&&u(h),0<=o}},!0),this},je.prototype.until=function(s,o){return gi(this._ctx,function(l,u,h){return!s(l.value)||(u(h),o)}),this},je.prototype.first=function(s){return this.limit(1).toArray(function(o){return o[0]}).then(s)},je.prototype.last=function(s){return this.reverse().first(s)},je.prototype.filter=function(s){var o;return gi(this._ctx,function(l){return s(l.value)}),(o=this._ctx).isMatch=En(o.isMatch,s),this},je.prototype.and=function(s){return this.filter(s)},je.prototype.or=function(s){return new this.db.WhereClause(this._ctx.table,s,this)},je.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},je.prototype.desc=function(){return this.reverse()},je.prototype.eachKey=function(s){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){s(u.key,u)})},je.prototype.eachUniqueKey=function(s){return this._ctx.unique="unique",this.eachKey(s)},je.prototype.eachPrimaryKey=function(s){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){s(u.primaryKey,u)})},je.prototype.keys=function(s){var o=this._ctx;o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,h){l.push(h.key)}).then(function(){return l}).then(s)},je.prototype.primaryKeys=function(s){var o=this._ctx;if(o.dir==="next"&&Nn(o,!0)&&0<o.limit)return this._read(function(u){var h=_r(o,o.table.core.schema);return o.table.core.query({trans:u,values:!1,limit:o.limit,query:{index:h,range:o.range}})}).then(function(u){return u.result}).then(s);o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,h){l.push(h.primaryKey)}).then(function(){return l}).then(s)},je.prototype.uniqueKeys=function(s){return this._ctx.unique="unique",this.keys(s)},je.prototype.firstKey=function(s){return this.limit(1).keys(function(o){return o[0]}).then(s)},je.prototype.lastKey=function(s){return this.reverse().firstKey(s)},je.prototype.distinct=function(){var s=this._ctx,s=s.index&&s.table.schema.idxByName[s.index];if(!s||!s.multi)return this;var o={};return gi(this._ctx,function(h){var u=h.primaryKey.toString(),h=x(o,u);return o[u]=!0,!h}),this},je.prototype.modify=function(s){var o=this,l=this._ctx;return this._write(function(u){var h,m,g;g=typeof s=="function"?s:(h=c(s),m=h.length,function(P){for(var I=!1,z=0;z<m;++z){var B=h[z],M=s[B],K=be(P,B);M instanceof er?(ye(P,B,M.execute(K)),I=!0):K!==M&&(ye(P,B,M),I=!0)}return I});var v=l.table.core,$=v.schema.primaryKey,C=$.outbound,_=$.extractKey,D=200,$=o.db._options.modifyChunkSize;$&&(D=typeof $=="object"?$[v.name]||$["*"]||200:$);function R(P,B){var z=B.failures,B=B.numFailures;T+=P-B;for(var M=0,K=c(z);M<K.length;M++){var Z=K[M];E.push(z[Z])}}var E=[],T=0,j=[];return o.clone().primaryKeys().then(function(P){function I(B){var M=Math.min(D,P.length-B);return v.getMany({trans:u,keys:P.slice(B,B+M),cache:"immutable"}).then(function(K){for(var Z=[],V=[],X=C?[]:null,te=[],J=0;J<M;++J){var re=K[J],me={value:A(re),primKey:P[B+J]};g.call(me,me.value,me)!==!1&&(me.value==null?te.push(P[B+J]):C||Ee(_(re),_(me.value))===0?(V.push(me.value),C&&X.push(P[B+J])):(te.push(P[B+J]),Z.push(me.value)))}return Promise.resolve(0<Z.length&&v.mutate({trans:u,type:"add",values:Z}).then(function(we){for(var ve in we.failures)te.splice(parseInt(ve),1);R(Z.length,we)})).then(function(){return(0<V.length||z&&typeof s=="object")&&v.mutate({trans:u,type:"put",keys:X,values:V,criteria:z,changeSpec:typeof s!="function"&&s,isAdditionalChunk:0<B}).then(function(we){return R(V.length,we)})}).then(function(){return(0<te.length||z&&s===yi)&&v.mutate({trans:u,type:"delete",keys:te,criteria:z,isAdditionalChunk:0<B}).then(function(we){return R(te.length,we)})}).then(function(){return P.length>B+M&&I(B+D)})})}var z=Nn(l)&&l.limit===1/0&&(typeof s!="function"||s===yi)&&{index:l.index,range:l.range};return I(0).then(function(){if(0<E.length)throw new $e("Error modifying one or more objects",E,T,j);return P.length})})})},je.prototype.delete=function(){var s=this._ctx,o=s.range;return Nn(s)&&(s.isPrimKey||o.type===3)?this._write(function(l){var u=s.table.core.schema.primaryKey,h=o;return s.table.core.count({trans:l,query:{index:u,range:h}}).then(function(m){return s.table.core.mutate({trans:l,type:"deleteRange",range:h}).then(function(g){var v=g.failures;if(g.lastResult,g.results,g=g.numFailures,g)throw new $e("Could not delete some values",Object.keys(v).map(function(C){return v[C]}),m-g);return m-g})})}):this.modify(yi)},je);function je(){}var yi=function(s,o){return o.value=null};function qa(s,o){return s<o?-1:s===o?0:1}function Ua(s,o){return o<s?-1:s===o?0:1}function At(s,o,l){return s=s instanceof Ps?new s.Collection(s):s,s._ctx.error=new(l||TypeError)(o),s}function qn(s){return new s.Collection(s,function(){return As("")}).limit(0)}function Pr(s,o,l,u){var h,m,g,v,C,_,D,$=l.length;if(!l.every(function(T){return typeof T=="string"}))return At(s,ws);function R(T){h=T==="next"?function(P){return P.toUpperCase()}:function(P){return P.toLowerCase()},m=T==="next"?function(P){return P.toLowerCase()}:function(P){return P.toUpperCase()},g=T==="next"?qa:Ua;var j=l.map(function(P){return{lower:m(P),upper:h(P)}}).sort(function(P,I){return g(P.lower,I.lower)});v=j.map(function(P){return P.upper}),C=j.map(function(P){return P.lower}),D=(_=T)==="next"?"":u}R("next"),s=new s.Collection(s,function(){return gn(v[0],C[$-1]+u)}),s._ondirectionchange=function(T){R(T)};var E=0;return s._addAlgorithm(function(T,j,P){var I=T.key;if(typeof I!="string")return!1;var z=m(I);if(o(z,C,E))return!0;for(var B=null,M=E;M<$;++M){var K=(function(Z,V,X,te,J,re){for(var me=Math.min(Z.length,te.length),we=-1,ve=0;ve<me;++ve){var Pt=V[ve];if(Pt!==te[ve])return J(Z[ve],X[ve])<0?Z.substr(0,ve)+X[ve]+X.substr(ve+1):J(Z[ve],te[ve])<0?Z.substr(0,ve)+te[ve]+X.substr(ve+1):0<=we?Z.substr(0,we)+V[we]+X.substr(we+1):null;J(Z[ve],Pt)<0&&(we=ve)}return me<te.length&&re==="next"?Z+X.substr(Z.length):me<Z.length&&re==="prev"?Z.substr(0,X.length):we<0?null:Z.substr(0,we)+te[we]+X.substr(we+1)})(I,z,v[M],C[M],g,_);K===null&&B===null?E=M+1:(B===null||0<g(B,K))&&(B=K)}return j(B!==null?function(){T.continue(B+D)}:P),!1}),s}function gn(s,o,l,u){return{type:2,lower:s,upper:o,lowerOpen:l,upperOpen:u}}function As(s){return{type:1,lower:s,upper:s}}var Ps=(Object.defineProperty(ht.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ht.prototype.between=function(s,o,l,u){l=l!==!1,u=u===!0;try{return 0<this._cmp(s,o)||this._cmp(s,o)===0&&(l||u)&&(!l||!u)?qn(this):new this.Collection(this,function(){return gn(s,o,!l,!u)})}catch{return At(this,nn)}},ht.prototype.equals=function(s){return s==null?At(this,nn):new this.Collection(this,function(){return As(s)})},ht.prototype.above=function(s){return s==null?At(this,nn):new this.Collection(this,function(){return gn(s,void 0,!0)})},ht.prototype.aboveOrEqual=function(s){return s==null?At(this,nn):new this.Collection(this,function(){return gn(s,void 0,!1)})},ht.prototype.below=function(s){return s==null?At(this,nn):new this.Collection(this,function(){return gn(void 0,s,!1,!0)})},ht.prototype.belowOrEqual=function(s){return s==null?At(this,nn):new this.Collection(this,function(){return gn(void 0,s)})},ht.prototype.startsWith=function(s){return typeof s!="string"?At(this,ws):this.between(s,s+Cn,!0,!0)},ht.prototype.startsWithIgnoreCase=function(s){return s===""?this.startsWith(s):Pr(this,function(o,l){return o.indexOf(l[0])===0},[s],Cn)},ht.prototype.equalsIgnoreCase=function(s){return Pr(this,function(o,l){return o===l[0]},[s],"")},ht.prototype.anyOfIgnoreCase=function(){var s=We.apply(Y,arguments);return s.length===0?qn(this):Pr(this,function(o,l){return l.indexOf(o)!==-1},s,"")},ht.prototype.startsWithAnyOfIgnoreCase=function(){var s=We.apply(Y,arguments);return s.length===0?qn(this):Pr(this,function(o,l){return l.some(function(u){return o.indexOf(u)===0})},s,Cn)},ht.prototype.anyOf=function(){var s=this,o=We.apply(Y,arguments),l=this._cmp;try{o.sort(l)}catch{return At(this,nn)}if(o.length===0)return qn(this);var u=new this.Collection(this,function(){return gn(o[0],o[o.length-1])});u._ondirectionchange=function(m){l=m==="next"?s._ascending:s._descending,o.sort(l)};var h=0;return u._addAlgorithm(function(m,g,v){for(var C=m.key;0<l(C,o[h]);)if(++h===o.length)return g(v),!1;return l(C,o[h])===0||(g(function(){m.continue(o[h])}),!1)}),u},ht.prototype.notEqual=function(s){return this.inAnyRange([[-1/0,s],[s,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ht.prototype.noneOf=function(){var s=We.apply(Y,arguments);if(s.length===0)return new this.Collection(this);try{s.sort(this._ascending)}catch{return At(this,nn)}var o=s.reduce(function(l,u){return l?l.concat([[l[l.length-1][1],u]]):[[-1/0,u]]},null);return o.push([s[s.length-1],this.db._maxKey]),this.inAnyRange(o,{includeLowers:!1,includeUppers:!1})},ht.prototype.inAnyRange=function(I,o){var l=this,u=this._cmp,h=this._ascending,m=this._descending,g=this._min,v=this._max;if(I.length===0)return qn(this);if(!I.every(function(z){return z[0]!==void 0&&z[1]!==void 0&&h(z[0],z[1])<=0}))return At(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var C=!o||o.includeLowers!==!1,_=o&&o.includeUppers===!0,D,$=h;function R(z,B){return $(z[0],B[0])}try{(D=I.reduce(function(z,B){for(var M=0,K=z.length;M<K;++M){var Z=z[M];if(u(B[0],Z[1])<0&&0<u(B[1],Z[0])){Z[0]=g(Z[0],B[0]),Z[1]=v(Z[1],B[1]);break}}return M===K&&z.push(B),z},[])).sort(R)}catch{return At(this,nn)}var E=0,T=_?function(z){return 0<h(z,D[E][1])}:function(z){return 0<=h(z,D[E][1])},j=C?function(z){return 0<m(z,D[E][0])}:function(z){return 0<=m(z,D[E][0])},P=T,I=new this.Collection(this,function(){return gn(D[0][0],D[D.length-1][1],!C,!_)});return I._ondirectionchange=function(z){$=z==="next"?(P=T,h):(P=j,m),D.sort(R)},I._addAlgorithm(function(z,B,M){for(var K,Z=z.key;P(Z);)if(++E===D.length)return B(M),!1;return!T(K=Z)&&!j(K)||(l._cmp(Z,D[E][1])===0||l._cmp(Z,D[E][0])===0||B(function(){$===h?z.continue(D[E][0]):z.continue(D[E][1])}),!1)}),I},ht.prototype.startsWithAnyOf=function(){var s=We.apply(Y,arguments);return s.every(function(o){return typeof o=="string"})?s.length===0?qn(this):this.inAnyRange(s.map(function(o){return[o,o+Cn]})):At(this,"startsWithAnyOf() only works with strings")},ht);function ht(){}function Yt(s){return Be(function(o){return tr(o),s(o.target.error),!1})}function tr(s){s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault()}var nr="storagemutated",wi="x-storagemutated-1",bn=Jn(null,nr),Ha=(Xt.prototype._lock=function(){return ie(!G.global),++this._reculock,this._reculock!==1||G.global||(G.lockOwnerFor=this),this},Xt.prototype._unlock=function(){if(ie(!G.global),--this._reculock==0)for(G.global||(G.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var s=this._blockedFuncs.shift();try{kn(s[1],s[0])}catch{}}return this},Xt.prototype._locked=function(){return this._reculock&&G.lockOwnerFor!==this},Xt.prototype.create=function(s){var o=this;if(!this.mode)return this;var l=this.db.idbdb,u=this.db._state.dbOpenError;if(ie(!this.idbtrans),!s&&!l)switch(u&&u.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(u);case"MissingAPIError":throw new ee.MissingAPI(u.message,u);default:throw new ee.OpenFailed(u)}if(!this.active)throw new ee.TransactionInactive;return ie(this._completion._state===null),(s=this.idbtrans=s||(this.db.core||l).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Be(function(h){tr(h),o._reject(s.error)}),s.onabort=Be(function(h){tr(h),o.active&&o._reject(new ee.Abort(s.error)),o.active=!1,o.on("abort").fire(h)}),s.oncomplete=Be(function(){o.active=!1,o._resolve(),"mutatedParts"in s&&bn.storagemutated.fire(s.mutatedParts)}),this},Xt.prototype._promise=function(s,o,l){var u=this;if(s==="readwrite"&&this.mode!=="readwrite")return nt(new ee.ReadOnly("Transaction is readonly"));if(!this.active)return nt(new ee.TransactionInactive);if(this._locked())return new Q(function(m,g){u._blockedFuncs.push([function(){u._promise(s,o,l).then(m,g)},G])});if(l)return fn(function(){var m=new Q(function(g,v){u._lock();var C=o(g,v,u);C&&C.then&&C.then(g,v)});return m.finally(function(){return u._unlock()}),m._lib=!0,m});var h=new Q(function(m,g){var v=o(m,g,u);v&&v.then&&v.then(m,g)});return h._lib=!0,h},Xt.prototype._root=function(){return this.parent?this.parent._root():this},Xt.prototype.waitFor=function(s){var o,l=this._root(),u=Q.resolve(s);l._waitingFor?l._waitingFor=l._waitingFor.then(function(){return u}):(l._waitingFor=u,l._waitingQueue=[],o=l.idbtrans.objectStore(l.storeNames[0]),(function m(){for(++l._spinCount;l._waitingQueue.length;)l._waitingQueue.shift()();l._waitingFor&&(o.get(-1/0).onsuccess=m)})());var h=l._waitingFor;return new Q(function(m,g){u.then(function(v){return l._waitingQueue.push(Be(m.bind(null,v)))},function(v){return l._waitingQueue.push(Be(g.bind(null,v)))}).finally(function(){l._waitingFor===h&&(l._waitingFor=null)})})},Xt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},Xt.prototype.table=function(s){var o=this._memoizedTables||(this._memoizedTables={});if(x(o,s))return o[s];var l=this.schema[s];if(!l)throw new ee.NotFound("Table "+s+" not part of transaction");return l=new this.db.Table(s,l,this),l.core=this.db.core.table(s),o[s]=l},Xt);function Xt(){}function vi(s,o,l,u,h,m,g){return{name:s,keyPath:o,unique:l,multi:u,auto:h,compound:m,src:(l&&!g?"&":"")+(u?"*":"")+(h?"++":"")+Ts(o)}}function Ts(s){return typeof s=="string"?s:s?"["+[].join.call(s,"+")+"]":""}function xi(s,o,l){return{name:s,primKey:o,indexes:l,mappedClass:null,idxByName:(u=function(h){return[h.name,h]},l.reduce(function(h,m,g){return g=u(m,g),g&&(h[g[0]]=g[1]),h},{}))};var u}var rr=function(s){try{return s.only([[]]),rr=function(){return[[]]},[[]]}catch{return rr=function(){return Cn},Cn}};function $i(s){return s==null?function(){}:typeof s=="string"?(o=s).split(".").length===1?function(l){return l[o]}:function(l){return be(l,o)}:function(l){return be(l,s)};var o}function Ds(s){return[].slice.call(s)}var Wa=0;function ir(s){return s==null?":id":typeof s=="string"?s:"[".concat(s.join("+"),"]")}function Ka(s,o,C){function u(P){if(P.type===3)return null;if(P.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var E=P.lower,T=P.upper,j=P.lowerOpen,P=P.upperOpen;return E===void 0?T===void 0?null:o.upperBound(T,!!P):T===void 0?o.lowerBound(E,!!j):o.bound(E,T,!!j,!!P)}function h(R){var E,T=R.name;return{name:T,schema:R,mutate:function(j){var P=j.trans,I=j.type,z=j.keys,B=j.values,M=j.range;return new Promise(function(K,Z){K=Be(K);var V=P.objectStore(T),X=V.keyPath==null,te=I==="put"||I==="add";if(!te&&I!=="delete"&&I!=="deleteRange")throw new Error("Invalid operation type: "+I);var J,re=(z||B||{length:1}).length;if(z&&B&&z.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(re===0)return K({numFailures:0,failures:{},results:[],lastResult:void 0});function me(xt){++Pt,tr(xt)}var we=[],ve=[],Pt=0;if(I==="deleteRange"){if(M.type===4)return K({numFailures:Pt,failures:ve,results:[],lastResult:void 0});M.type===3?we.push(J=V.clear()):we.push(J=V.delete(u(M)))}else{var X=te?X?[B,z]:[B,null]:[z,null],pe=X[0],bt=X[1];if(te)for(var yt=0;yt<re;++yt)we.push(J=bt&&bt[yt]!==void 0?V[I](pe[yt],bt[yt]):V[I](pe[yt])),J.onerror=me;else for(yt=0;yt<re;++yt)we.push(J=V[I](pe[yt])),J.onerror=me}function qr(xt){xt=xt.target.result,we.forEach(function(An,Mi){return An.error!=null&&(ve[Mi]=An.error)}),K({numFailures:Pt,failures:ve,results:I==="delete"?z:we.map(function(An){return An.result}),lastResult:xt})}J.onerror=function(xt){me(xt),qr(xt)},J.onsuccess=qr})},getMany:function(j){var P=j.trans,I=j.keys;return new Promise(function(z,B){z=Be(z);for(var M,K=P.objectStore(T),Z=I.length,V=new Array(Z),X=0,te=0,J=function(we){we=we.target,V[we._pos]=we.result,++te===X&&z(V)},re=Yt(B),me=0;me<Z;++me)I[me]!=null&&((M=K.get(I[me]))._pos=me,M.onsuccess=J,M.onerror=re,++X);X===0&&z(V)})},get:function(j){var P=j.trans,I=j.key;return new Promise(function(z,B){z=Be(z);var M=P.objectStore(T).get(I);M.onsuccess=function(K){return z(K.target.result)},M.onerror=Yt(B)})},query:(E=_,function(j){return new Promise(function(P,I){P=Be(P);var z,B,M,X=j.trans,K=j.values,Z=j.limit,J=j.query,V=Z===1/0?void 0:Z,te=J.index,J=J.range,X=X.objectStore(T),te=te.isPrimaryKey?X:X.index(te.name),J=u(J);if(Z===0)return P({result:[]});E?((V=K?te.getAll(J,V):te.getAllKeys(J,V)).onsuccess=function(re){return P({result:re.target.result})},V.onerror=Yt(I)):(z=0,B=!K&&"openKeyCursor"in te?te.openKeyCursor(J):te.openCursor(J),M=[],B.onsuccess=function(re){var me=B.result;return me?(M.push(K?me.value:me.primaryKey),++z===Z?P({result:M}):void me.continue()):P({result:M})},B.onerror=Yt(I))})}),openCursor:function(j){var P=j.trans,I=j.values,z=j.query,B=j.reverse,M=j.unique;return new Promise(function(K,Z){K=Be(K);var te=z.index,V=z.range,X=P.objectStore(T),X=te.isPrimaryKey?X:X.index(te.name),te=B?M?"prevunique":"prev":M?"nextunique":"next",J=!I&&"openKeyCursor"in X?X.openKeyCursor(u(V),te):X.openCursor(u(V),te);J.onerror=Yt(Z),J.onsuccess=Be(function(re){var me,we,ve,Pt,pe=J.result;pe?(pe.___id=++Wa,pe.done=!1,me=pe.continue.bind(pe),we=(we=pe.continuePrimaryKey)&&we.bind(pe),ve=pe.advance.bind(pe),Pt=function(){throw new Error("Cursor not stopped")},pe.trans=P,pe.stop=pe.continue=pe.continuePrimaryKey=pe.advance=function(){throw new Error("Cursor not started")},pe.fail=Be(Z),pe.next=function(){var bt=this,yt=1;return this.start(function(){return yt--?bt.continue():bt.stop()}).then(function(){return bt})},pe.start=function(bt){function yt(){if(J.result)try{bt()}catch(xt){pe.fail(xt)}else pe.done=!0,pe.start=function(){throw new Error("Cursor behind last entry")},pe.stop()}var qr=new Promise(function(xt,An){xt=Be(xt),J.onerror=Yt(An),pe.fail=An,pe.stop=function(Mi){pe.stop=pe.continue=pe.continuePrimaryKey=pe.advance=Pt,xt(Mi)}});return J.onsuccess=Be(function(xt){J.onsuccess=yt,yt()}),pe.continue=me,pe.continuePrimaryKey=we,pe.advance=ve,yt(),qr},K(pe)):K(null)},Z)})},count:function(j){var P=j.query,I=j.trans,z=P.index,B=P.range;return new Promise(function(M,K){var Z=I.objectStore(T),V=z.isPrimaryKey?Z:Z.index(z.name),Z=u(B),V=Z?V.count(Z):V.count();V.onsuccess=Be(function(X){return M(X.target.result)}),V.onerror=Yt(K)})}}}var m,g,v,D=(g=C,v=Ds((m=s).objectStoreNames),{schema:{name:m.name,tables:v.map(function(R){return g.objectStore(R)}).map(function(R){var E=R.keyPath,P=R.autoIncrement,T=d(E),j={},P={name:R.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:E==null,compound:T,keyPath:E,autoIncrement:P,unique:!0,extractKey:$i(E)},indexes:Ds(R.indexNames).map(function(I){return R.index(I)}).map(function(M){var z=M.name,B=M.unique,K=M.multiEntry,M=M.keyPath,K={name:z,compound:d(M),keyPath:M,unique:B,multiEntry:K,extractKey:$i(M)};return j[ir(M)]=K}),getIndexByKeyPath:function(I){return j[ir(I)]}};return j[":id"]=P.primaryKey,E!=null&&(j[ir(E)]=P.primaryKey),P})},hasGetAll:0<v.length&&"getAll"in g.objectStore(v[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),C=D.schema,_=D.hasGetAll,D=C.tables.map(h),$={};return D.forEach(function(R){return $[R.name]=R}),{stack:"dbcore",transaction:s.transaction.bind(s),table:function(R){if(!$[R])throw new Error("Table '".concat(R,"' not found"));return $[R]},MIN_KEY:-1/0,MAX_KEY:rr(o),schema:C}}function Va(s,o,l,u){var h=l.IDBKeyRange;return l.indexedDB,{dbcore:(u=Ka(o,h,u),s.dbcore.reduce(function(m,g){return g=g.create,i(i({},m),g(m))},u))}}function Tr(s,u){var l=u.db,u=Va(s._middlewares,l,s._deps,u);s.core=u.dbcore,s.tables.forEach(function(h){var m=h.name;s.core.schema.tables.some(function(g){return g.name===m})&&(h.core=s.core.table(m),s[m]instanceof s.Table&&(s[m].core=h.core))})}function Dr(s,o,l,u){l.forEach(function(h){var m=u[h];o.forEach(function(g){var v=(function C(_,D){return oe(_,D)||(_=w(_))&&C(_,D)})(g,h);(!v||"value"in v&&v.value===void 0)&&(g===s.Transaction.prototype||g instanceof s.Transaction?L(g,h,{get:function(){return this.table(h)},set:function(C){W(this,h,{value:C,writable:!0,configurable:!0,enumerable:!0})}}):g[h]=new s.Table(h,m))})})}function ki(s,o){o.forEach(function(l){for(var u in l)l[u]instanceof s.Table&&delete l[u]})}function Ya(s,o){return s._cfg.version-o._cfg.version}function Xa(s,o,l,u){var h=s._dbSchema;l.objectStoreNames.contains("$meta")&&!h.$meta&&(h.$meta=xi("$meta",Rs("")[0],[]),s._storeNames.push("$meta"));var m=s._createTransaction("readwrite",s._storeNames,h);m.create(l),m._completion.catch(u);var g=m._reject.bind(m),v=G.transless||G;fn(function(){return G.trans=m,G.transless=v,o!==0?(Tr(s,l),_=o,((C=m).storeNames.includes("$meta")?C.table("$meta").get("version").then(function(D){return D??_}):Q.resolve(_)).then(function(D){return R=D,E=m,T=l,j=[],D=($=s)._versions,P=$._dbSchema=Rr(0,$.idbdb,T),(D=D.filter(function(I){return I._cfg.version>=R})).length!==0?(D.forEach(function(I){j.push(function(){var z=P,B=I._cfg.dbschema;Or($,z,T),Or($,B,T),P=$._dbSchema=B;var M=Ci(z,B);M.add.forEach(function(te){Ei(T,te[0],te[1].primKey,te[1].indexes)}),M.change.forEach(function(te){if(te.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var J=T.objectStore(te.name);te.add.forEach(function(re){return jr(J,re)}),te.change.forEach(function(re){J.deleteIndex(re.name),jr(J,re)}),te.del.forEach(function(re){return J.deleteIndex(re)})});var K=I._cfg.contentUpgrade;if(K&&I._cfg.version>R){Tr($,T),E._memoizedTables={};var Z=ft(B);M.del.forEach(function(te){Z[te]=z[te]}),ki($,[$.Transaction.prototype]),Dr($,[$.Transaction.prototype],c(Z),Z),E.schema=Z;var V,X=st(K);return X&&Bn(),M=Q.follow(function(){var te;(V=K(E))&&X&&(te=pn.bind(null,null),V.then(te,te))}),V&&typeof V.then=="function"?Q.resolve(V):M.then(function(){return V})}}),j.push(function(z){var B,M,K=I._cfg.dbschema;B=K,M=z,[].slice.call(M.db.objectStoreNames).forEach(function(Z){return B[Z]==null&&M.db.deleteObjectStore(Z)}),ki($,[$.Transaction.prototype]),Dr($,[$.Transaction.prototype],$._storeNames,$._dbSchema),E.schema=$._dbSchema}),j.push(function(z){$.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil($.idbdb.version/10)===I._cfg.version?($.idbdb.deleteObjectStore("$meta"),delete $._dbSchema.$meta,$._storeNames=$._storeNames.filter(function(B){return B!=="$meta"})):z.objectStore("$meta").put(I._cfg.version,"version"))})}),(function I(){return j.length?Q.resolve(j.shift()(E.idbtrans)).then(I):Q.resolve()})().then(function(){js(P,T)})):Q.resolve();var $,R,E,T,j,P}).catch(g)):(c(h).forEach(function(D){Ei(l,D,h[D].primKey,h[D].indexes)}),Tr(s,l),void Q.follow(function(){return s.on.populate.fire(m)}).catch(g));var C,_})}function Ga(s,o){js(s._dbSchema,o),o.db.version%10!=0||o.objectStoreNames.contains("$meta")||o.db.createObjectStore("$meta").add(Math.ceil(o.db.version/10-1),"version");var l=Rr(0,s.idbdb,o);Or(s,s._dbSchema,o);for(var u=0,h=Ci(l,s._dbSchema).change;u<h.length;u++){var m=(function(g){if(g.change.length||g.recreate)return console.warn("Unable to patch indexes of table ".concat(g.name," because it has changes on the type of index or primary key.")),{value:void 0};var v=o.objectStore(g.name);g.add.forEach(function(C){Re&&console.debug("Dexie upgrade patch: Creating missing index ".concat(g.name,".").concat(C.src)),jr(v,C)})})(h[u]);if(typeof m=="object")return m.value}}function Ci(s,o){var l,u={del:[],add:[],change:[]};for(l in s)o[l]||u.del.push(l);for(l in o){var h=s[l],m=o[l];if(h){var g={name:l,def:m,recreate:!1,del:[],add:[],change:[]};if(""+(h.primKey.keyPath||"")!=""+(m.primKey.keyPath||"")||h.primKey.auto!==m.primKey.auto)g.recreate=!0,u.change.push(g);else{var v=h.idxByName,C=m.idxByName,_=void 0;for(_ in v)C[_]||g.del.push(_);for(_ in C){var D=v[_],$=C[_];D?D.src!==$.src&&g.change.push($):g.add.push($)}(0<g.del.length||0<g.add.length||0<g.change.length)&&u.change.push(g)}}else u.add.push([l,m])}return u}function Ei(s,o,l,u){var h=s.db.createObjectStore(o,l.keyPath?{keyPath:l.keyPath,autoIncrement:l.auto}:{autoIncrement:l.auto});return u.forEach(function(m){return jr(h,m)}),h}function js(s,o){c(s).forEach(function(l){o.db.objectStoreNames.contains(l)||(Re&&console.debug("Dexie: Creating missing table",l),Ei(o,l,s[l].primKey,s[l].indexes))})}function jr(s,o){s.createIndex(o.name,o.keyPath,{unique:o.unique,multiEntry:o.multi})}function Rr(s,o,l){var u={};return xe(o.objectStoreNames,0).forEach(function(h){for(var m=l.objectStore(h),g=vi(Ts(_=m.keyPath),_||"",!0,!1,!!m.autoIncrement,_&&typeof _!="string",!0),v=[],C=0;C<m.indexNames.length;++C){var D=m.index(m.indexNames[C]),_=D.keyPath,D=vi(D.name,_,!!D.unique,!!D.multiEntry,!1,_&&typeof _!="string",!1);v.push(D)}u[h]=xi(h,g,v)}),u}function Or(s,o,l){for(var u=l.db.objectStoreNames,h=0;h<u.length;++h){var m=u[h],g=l.objectStore(m);s._hasGetAll="getAll"in g;for(var v=0;v<g.indexNames.length;++v){var C=g.indexNames[v],_=g.index(C).keyPath,D=typeof _=="string"?_:"["+xe(_).join("+")+"]";!o[m]||(_=o[m].idxByName[D])&&(_.name=C,delete o[m].idxByName[D],o[m].idxByName[C]=_)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&a.WorkerGlobalScope&&a instanceof a.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(s._hasGetAll=!1)}function Rs(s){return s.split(",").map(function(o,l){var u=(o=o.trim()).replace(/([&*]|\+\+)/g,""),h=/^\[/.test(u)?u.match(/^\[(.*)\]$/)[1].split("+"):u;return vi(u,h||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),d(h),l===0)})}var Qa=(Fr.prototype._parseStoresSpec=function(s,o){c(s).forEach(function(l){if(s[l]!==null){var u=Rs(s[l]),h=u.shift();if(h.unique=!0,h.multi)throw new ee.Schema("Primary key cannot be multi-valued");u.forEach(function(m){if(m.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!m.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),o[l]=xi(l,h,u)}})},Fr.prototype.stores=function(l){var o=this.db;this._cfg.storesSource=this._cfg.storesSource?p(this._cfg.storesSource,l):l;var l=o._versions,u={},h={};return l.forEach(function(m){p(u,m._cfg.storesSource),h=m._cfg.dbschema={},m._parseStoresSpec(u,h)}),o._dbSchema=h,ki(o,[o._allTables,o,o.Transaction.prototype]),Dr(o,[o._allTables,o,o.Transaction.prototype,this._cfg.tables],c(h),h),o._storeNames=c(h),this},Fr.prototype.upgrade=function(s){return this._cfg.contentUpgrade=St(this._cfg.contentUpgrade||ce,s),this},Fr);function Fr(){}function Si(s,o){var l=s._dbNamesDB;return l||(l=s._dbNamesDB=new sn(Er,{addons:[],indexedDB:s,IDBKeyRange:o})).version(1).stores({dbnames:"name"}),l.table("dbnames")}function _i(s){return s&&typeof s.databases=="function"}function Ai(s){return fn(function(){return G.letThrough=!0,s()})}function Pi(s){return!("from"in s)}var gt=function(s,o){if(!this){var l=new gt;return s&&"d"in s&&p(l,s),l}p(this,arguments.length?{d:1,from:s,to:1<arguments.length?o:s}:{d:0})};function sr(s,o,l){var u=Ee(o,l);if(!isNaN(u)){if(0<u)throw RangeError();if(Pi(s))return p(s,{from:o,to:l,d:1});var h=s.l,u=s.r;if(Ee(l,s.from)<0)return h?sr(h,o,l):s.l={from:o,to:l,d:1,l:null,r:null},Fs(s);if(0<Ee(o,s.to))return u?sr(u,o,l):s.r={from:o,to:l,d:1,l:null,r:null},Fs(s);Ee(o,s.from)<0&&(s.from=o,s.l=null,s.d=u?u.d+1:1),0<Ee(l,s.to)&&(s.to=l,s.r=null,s.d=s.l?s.l.d+1:1),l=!s.r,h&&!s.l&&or(s,h),u&&l&&or(s,u)}}function or(s,o){Pi(o)||(function l(u,C){var m=C.from,g=C.to,v=C.l,C=C.r;sr(u,m,g),v&&l(u,v),C&&l(u,C)})(s,o)}function Os(s,o){var l=Ir(o),u=l.next();if(u.done)return!1;for(var h=u.value,m=Ir(s),g=m.next(h.from),v=g.value;!u.done&&!g.done;){if(Ee(v.from,h.to)<=0&&0<=Ee(v.to,h.from))return!0;Ee(h.from,v.from)<0?h=(u=l.next(v.from)).value:v=(g=m.next(h.from)).value}return!1}function Ir(s){var o=Pi(s)?null:{s:0,n:s};return{next:function(l){for(var u=0<arguments.length;o;)switch(o.s){case 0:if(o.s=1,u)for(;o.n.l&&Ee(l,o.n.from)<0;)o={up:o,n:o.n.l,s:1};else for(;o.n.l;)o={up:o,n:o.n.l,s:1};case 1:if(o.s=2,!u||Ee(l,o.n.to)<=0)return{value:o.n,done:!1};case 2:if(o.n.r){o.s=3,o={up:o,n:o.n.r,s:0};continue}case 3:o=o.up}return{done:!0}}}}function Fs(s){var o,l,u=(((o=s.r)===null||o===void 0?void 0:o.d)||0)-(((l=s.l)===null||l===void 0?void 0:l.d)||0),h=1<u?"r":u<-1?"l":"";h&&(o=h=="r"?"l":"r",l=i({},s),u=s[h],s.from=u.from,s.to=u.to,s[h]=u[h],l[h]=u[o],(s[o]=l).d=Is(l)),s.d=Is(s)}function Is(l){var o=l.r,l=l.l;return(o?l?Math.max(o.d,l.d):o.d:l?l.d:0)+1}function zr(s,o){return c(o).forEach(function(l){s[l]?or(s[l],o[l]):s[l]=(function u(h){var m,g,v={};for(m in h)x(h,m)&&(g=h[m],v[m]=!g||typeof g!="object"||f.has(g.constructor)?g:u(g));return v})(o[l])}),s}function Ti(s,o){return s.all||o.all||Object.keys(s).some(function(l){return o[l]&&Os(o[l],s[l])})}O(gt.prototype,((Ft={add:function(s){return or(this,s),this},addKey:function(s){return sr(this,s,s),this},addKeys:function(s){var o=this;return s.forEach(function(l){return sr(o,l,l)}),this},hasKey:function(s){var o=Ir(this).next(s).value;return o&&Ee(o.from,s)<=0&&0<=Ee(o.to,s)}})[ae]=function(){return Ir(this)},Ft));var Sn={},Di={},ji=!1;function Lr(s){zr(Di,s),ji||(ji=!0,setTimeout(function(){ji=!1,Ri(Di,!(Di={}))},0))}function Ri(s,o){o===void 0&&(o=!1);var l=new Set;if(s.all)for(var u=0,h=Object.values(Sn);u<h.length;u++)zs(g=h[u],s,l,o);else for(var m in s){var g,v=/^idb\:\/\/(.*)\/(.*)\//.exec(m);v&&(m=v[1],v=v[2],(g=Sn["idb://".concat(m,"/").concat(v)])&&zs(g,s,l,o))}l.forEach(function(C){return C()})}function zs(s,o,l,u){for(var h=[],m=0,g=Object.entries(s.queries.query);m<g.length;m++){for(var v=g[m],C=v[0],_=[],D=0,$=v[1];D<$.length;D++){var R=$[D];Ti(o,R.obsSet)?R.subscribers.forEach(function(P){return l.add(P)}):u&&_.push(R)}u&&h.push([C,_])}if(u)for(var E=0,T=h;E<T.length;E++){var j=T[E],C=j[0],_=j[1];s.queries.query[C]=_}}function Ja(s){var o=s._state,l=s._deps.indexedDB;if(o.isBeingOpened||s.idbdb)return o.dbReadyPromise.then(function(){return o.dbOpenError?nt(o.dbOpenError):s});o.isBeingOpened=!0,o.dbOpenError=null,o.openComplete=!1;var u=o.openCanceller,h=Math.round(10*s.verno),m=!1;function g(){if(o.openCanceller!==u)throw new ee.DatabaseClosed("db.open() was cancelled")}function v(){return new Q(function(R,E){if(g(),!l)throw new ee.MissingAPI;var T=s.name,j=o.autoSchema||!h?l.open(T):l.open(T,h);if(!j)throw new ee.MissingAPI;j.onerror=Yt(E),j.onblocked=Be(s._fireOnBlocked),j.onupgradeneeded=Be(function(P){var I;D=j.transaction,o.autoSchema&&!s._options.allowEmptyDB?(j.onerror=tr,D.abort(),j.result.close(),(I=l.deleteDatabase(T)).onsuccess=I.onerror=Be(function(){E(new ee.NoSuchDatabase("Database ".concat(T," doesnt exist")))})):(D.onerror=Yt(E),P=P.oldVersion>Math.pow(2,62)?0:P.oldVersion,$=P<1,s.idbdb=j.result,m&&Ga(s,D),Xa(s,P/10,D,E))},E),j.onsuccess=Be(function(){D=null;var P,I,z,B,M,K=s.idbdb=j.result,Z=xe(K.objectStoreNames);if(0<Z.length)try{var V=K.transaction((B=Z).length===1?B[0]:B,"readonly");if(o.autoSchema)I=K,z=V,(P=s).verno=I.version/10,z=P._dbSchema=Rr(0,I,z),P._storeNames=xe(I.objectStoreNames,0),Dr(P,[P._allTables],c(z),z);else if(Or(s,s._dbSchema,V),((M=Ci(Rr(0,(M=s).idbdb,V),M._dbSchema)).add.length||M.change.some(function(X){return X.add.length||X.change.length}))&&!m)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),K.close(),h=K.version+1,m=!0,R(v());Tr(s,V)}catch{}Mn.push(s),K.onversionchange=Be(function(X){o.vcFired=!0,s.on("versionchange").fire(X)}),K.onclose=Be(function(X){s.on("close").fire(X)}),$&&(M=s._deps,V=T,K=M.indexedDB,M=M.IDBKeyRange,_i(K)||V===Er||Si(K,M).put({name:V}).catch(ce)),R()},E)}).catch(function(R){switch(R?.name){case"UnknownError":if(0<o.PR1398_maxLoop)return o.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),v();break;case"VersionError":if(0<h)return h=0,v()}return Q.reject(R)})}var C,_=o.dbReadyResolve,D=null,$=!1;return Q.race([u,(typeof navigator>"u"?Q.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(R){function E(){return indexedDB.databases().finally(R)}C=setInterval(E,100),E()}).finally(function(){return clearInterval(C)}):Promise.resolve()).then(v)]).then(function(){return g(),o.onReadyBeingFired=[],Q.resolve(Ai(function(){return s.on.ready.fire(s.vip)})).then(function R(){if(0<o.onReadyBeingFired.length){var E=o.onReadyBeingFired.reduce(St,ce);return o.onReadyBeingFired=[],Q.resolve(Ai(function(){return E(s.vip)})).then(R)}})}).finally(function(){o.openCanceller===u&&(o.onReadyBeingFired=null,o.isBeingOpened=!1)}).catch(function(R){o.dbOpenError=R;try{D&&D.abort()}catch{}return u===o.openCanceller&&s._close(),nt(R)}).finally(function(){o.openComplete=!0,_()}).then(function(){var R;return $&&(R={},s.tables.forEach(function(E){E.schema.indexes.forEach(function(T){T.name&&(R["idb://".concat(s.name,"/").concat(E.name,"/").concat(T.name)]=new gt(-1/0,[[[]]]))}),R["idb://".concat(s.name,"/").concat(E.name,"/")]=R["idb://".concat(s.name,"/").concat(E.name,"/:dels")]=new gt(-1/0,[[[]]])}),bn(nr).fire(R),Ri(R,!0)),s})}function Oi(s){function o(m){return s.next(m)}var l=h(o),u=h(function(m){return s.throw(m)});function h(m){return function(C){var v=m(C),C=v.value;return v.done?C:C&&typeof C.then=="function"?C.then(l,u):d(C)?Promise.all(C).then(l,u):l(C)}}return h(o)()}function Br(s,o,l){for(var u=d(s)?s.slice():[s],h=0;h<l;++h)u.push(o);return u}var Za={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(s){return i(i({},s),{table:function(o){var l=s.table(o),u=l.schema,h={},m=[];function g($,R,E){var T=ir($),j=h[T]=h[T]||[],P=$==null?0:typeof $=="string"?1:$.length,I=0<R,I=i(i({},E),{name:I?"".concat(T,"(virtual-from:").concat(E.name,")"):E.name,lowLevelIndex:E,isVirtual:I,keyTail:R,keyLength:P,extractKey:$i($),unique:!I&&E.unique});return j.push(I),I.isPrimaryKey||m.push(I),1<P&&g(P===2?$[0]:$.slice(0,P-1),R+1,E),j.sort(function(z,B){return z.keyTail-B.keyTail}),I}o=g(u.primaryKey.keyPath,0,u.primaryKey),h[":id"]=[o];for(var v=0,C=u.indexes;v<C.length;v++){var _=C[v];g(_.keyPath,0,_)}function D($){var R,E=$.query.index;return E.isVirtual?i(i({},$),{query:{index:E.lowLevelIndex,range:(R=$.query.range,E=E.keyTail,{type:R.type===1?2:R.type,lower:Br(R.lower,R.lowerOpen?s.MAX_KEY:s.MIN_KEY,E),lowerOpen:!0,upper:Br(R.upper,R.upperOpen?s.MIN_KEY:s.MAX_KEY,E),upperOpen:!0})}}):$}return i(i({},l),{schema:i(i({},u),{primaryKey:o,indexes:m,getIndexByKeyPath:function($){return($=h[ir($)])&&$[0]}}),count:function($){return l.count(D($))},query:function($){return l.query(D($))},openCursor:function($){var R=$.query.index,E=R.keyTail,T=R.isVirtual,j=R.keyLength;return T?l.openCursor(D($)).then(function(I){return I&&P(I)}):l.openCursor($);function P(I){return Object.create(I,{continue:{value:function(z){z!=null?I.continue(Br(z,$.reverse?s.MAX_KEY:s.MIN_KEY,E)):$.unique?I.continue(I.key.slice(0,j).concat($.reverse?s.MIN_KEY:s.MAX_KEY,E)):I.continue()}},continuePrimaryKey:{value:function(z,B){I.continuePrimaryKey(Br(z,s.MAX_KEY,E),B)}},primaryKey:{get:function(){return I.primaryKey}},key:{get:function(){var z=I.key;return j===1?z[0]:z.slice(0,j)}},value:{get:function(){return I.value}}})}}})}})}};function Fi(s,o,l,u){return l=l||{},u=u||"",c(s).forEach(function(h){var m,g,v;x(o,h)?(m=s[h],g=o[h],typeof m=="object"&&typeof g=="object"&&m&&g?(v=k(m))!==k(g)?l[u+h]=o[h]:v==="Object"?Fi(m,g,l,u+h+"."):m!==g&&(l[u+h]=o[h]):m!==g&&(l[u+h]=o[h])):l[u+h]=void 0}),c(o).forEach(function(h){x(s,h)||(l[u+h]=o[h])}),l}function Ii(s,o){return o.type==="delete"?o.keys:o.keys||o.values.map(s.extractKey)}var el={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(s){return i(i({},s),{table:function(o){var l=s.table(o),u=l.schema.primaryKey;return i(i({},l),{mutate:function(h){var m=G.trans,g=m.table(o).hook,v=g.deleting,C=g.creating,_=g.updating;switch(h.type){case"add":if(C.fire===ce)break;return m._promise("readwrite",function(){return D(h)},!0);case"put":if(C.fire===ce&&_.fire===ce)break;return m._promise("readwrite",function(){return D(h)},!0);case"delete":if(v.fire===ce)break;return m._promise("readwrite",function(){return D(h)},!0);case"deleteRange":if(v.fire===ce)break;return m._promise("readwrite",function(){return(function $(R,E,T){return l.query({trans:R,values:!1,query:{index:u,range:E},limit:T}).then(function(j){var P=j.result;return D({type:"delete",keys:P,trans:R}).then(function(I){return 0<I.numFailures?Promise.reject(I.failures[0]):P.length<T?{failures:[],numFailures:0,lastResult:void 0}:$(R,i(i({},E),{lower:P[P.length-1],lowerOpen:!0}),T)})})})(h.trans,h.range,1e4)},!0)}return l.mutate(h);function D($){var R,E,T,j=G.trans,P=$.keys||Ii(u,$);if(!P)throw new Error("Keys missing");return($=$.type==="add"||$.type==="put"?i(i({},$),{keys:P}):i({},$)).type!=="delete"&&($.values=n([],$.values)),$.keys&&($.keys=n([],$.keys)),R=l,T=P,((E=$).type==="add"?Promise.resolve([]):R.getMany({trans:E.trans,keys:T,cache:"immutable"})).then(function(I){var z=P.map(function(B,M){var K,Z,V,X=I[M],te={onerror:null,onsuccess:null};return $.type==="delete"?v.fire.call(te,B,X,j):$.type==="add"||X===void 0?(K=C.fire.call(te,B,$.values[M],j),B==null&&K!=null&&($.keys[M]=B=K,u.outbound||ye($.values[M],u.keyPath,B))):(K=Fi(X,$.values[M]),(Z=_.fire.call(te,K,B,X,j))&&(V=$.values[M],Object.keys(Z).forEach(function(J){x(V,J)?V[J]=Z[J]:ye(V,J,Z[J])}))),te});return l.mutate($).then(function(B){for(var M=B.failures,K=B.results,Z=B.numFailures,B=B.lastResult,V=0;V<P.length;++V){var X=(K||P)[V],te=z[V];X==null?te.onerror&&te.onerror(M[V]):te.onsuccess&&te.onsuccess($.type==="put"&&I[V]?$.values[V]:X)}return{failures:M,results:K,numFailures:Z,lastResult:B}}).catch(function(B){return z.forEach(function(M){return M.onerror&&M.onerror(B)}),Promise.reject(B)})})}}})}})}};function Ls(s,o,l){try{if(!o||o.keys.length<s.length)return null;for(var u=[],h=0,m=0;h<o.keys.length&&m<s.length;++h)Ee(o.keys[h],s[m])===0&&(u.push(l?A(o.values[h]):o.values[h]),++m);return u.length===s.length?u:null}catch{return null}}var tl={stack:"dbcore",level:-1,create:function(s){return{table:function(o){var l=s.table(o);return i(i({},l),{getMany:function(u){if(!u.cache)return l.getMany(u);var h=Ls(u.keys,u.trans._cache,u.cache==="clone");return h?Q.resolve(h):l.getMany(u).then(function(m){return u.trans._cache={keys:u.keys,values:u.cache==="clone"?A(m):m},m})},mutate:function(u){return u.type!=="add"&&(u.trans._cache=null),l.mutate(u)}})}}}};function Bs(s,o){return s.trans.mode==="readonly"&&!!s.subscr&&!s.trans.explicit&&s.trans.db._options.cache!=="disabled"&&!o.schema.primaryKey.outbound}function Ms(s,o){switch(s){case"query":return o.values&&!o.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var nl={stack:"dbcore",level:0,name:"Observability",create:function(s){var o=s.schema.name,l=new gt(s.MIN_KEY,s.MAX_KEY);return i(i({},s),{transaction:function(u,h,m){if(G.subscr&&h!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(G.querier));return s.transaction(u,h,m)},table:function(u){var h=s.table(u),m=h.schema,g=m.primaryKey,$=m.indexes,v=g.extractKey,C=g.outbound,_=g.autoIncrement&&$.filter(function(E){return E.compound&&E.keyPath.includes(g.keyPath)}),D=i(i({},h),{mutate:function(E){function T(J){return J="idb://".concat(o,"/").concat(u,"/").concat(J),B[J]||(B[J]=new gt)}var j,P,I,z=E.trans,B=E.mutatedParts||(E.mutatedParts={}),M=T(""),K=T(":dels"),Z=E.type,te=E.type==="deleteRange"?[E.range]:E.type==="delete"?[E.keys]:E.values.length<50?[Ii(g,E).filter(function(J){return J}),E.values]:[],V=te[0],X=te[1],te=E.trans._cache;return d(V)?(M.addKeys(V),(te=Z==="delete"||V.length===X.length?Ls(V,te):null)||K.addKeys(V),(te||X)&&(j=T,P=te,I=X,m.indexes.forEach(function(J){var re=j(J.name||"");function me(ve){return ve!=null?J.extractKey(ve):null}function we(ve){return J.multiEntry&&d(ve)?ve.forEach(function(Pt){return re.addKey(Pt)}):re.addKey(ve)}(P||I).forEach(function(ve,bt){var pe=P&&me(P[bt]),bt=I&&me(I[bt]);Ee(pe,bt)!==0&&(pe!=null&&we(pe),bt!=null&&we(bt))})}))):V?(X={from:(X=V.lower)!==null&&X!==void 0?X:s.MIN_KEY,to:(X=V.upper)!==null&&X!==void 0?X:s.MAX_KEY},K.add(X),M.add(X)):(M.add(l),K.add(l),m.indexes.forEach(function(J){return T(J.name).add(l)})),h.mutate(E).then(function(J){return!V||E.type!=="add"&&E.type!=="put"||(M.addKeys(J.results),_&&_.forEach(function(re){for(var me=E.values.map(function(pe){return re.extractKey(pe)}),we=re.keyPath.findIndex(function(pe){return pe===g.keyPath}),ve=0,Pt=J.results.length;ve<Pt;++ve)me[ve][we]=J.results[ve];T(re.name).addKeys(me)})),z.mutatedParts=zr(z.mutatedParts||{},B),J})}}),$=function(T){var j=T.query,T=j.index,j=j.range;return[T,new gt((T=j.lower)!==null&&T!==void 0?T:s.MIN_KEY,(j=j.upper)!==null&&j!==void 0?j:s.MAX_KEY)]},R={get:function(E){return[g,new gt(E.key)]},getMany:function(E){return[g,new gt().addKeys(E.keys)]},count:$,query:$,openCursor:$};return c(R).forEach(function(E){D[E]=function(T){var j=G.subscr,P=!!j,I=Bs(G,h)&&Ms(E,T)?T.obsSet={}:j;if(P){var z=function(X){return X="idb://".concat(o,"/").concat(u,"/").concat(X),I[X]||(I[X]=new gt)},B=z(""),M=z(":dels"),j=R[E](T),P=j[0],j=j[1];if((E==="query"&&P.isPrimaryKey&&!T.values?M:z(P.name||"")).add(j),!P.isPrimaryKey){if(E!=="count"){var K=E==="query"&&C&&T.values&&h.query(i(i({},T),{values:!1}));return h[E].apply(this,arguments).then(function(X){if(E==="query"){if(C&&T.values)return K.then(function(me){return me=me.result,B.addKeys(me),X});var te=T.values?X.result.map(v):X.result;(T.values?B:M).addKeys(te)}else if(E==="openCursor"){var J=X,re=T.values;return J&&Object.create(J,{key:{get:function(){return M.addKey(J.primaryKey),J.key}},primaryKey:{get:function(){var me=J.primaryKey;return M.addKey(me),me}},value:{get:function(){return re&&B.addKey(J.primaryKey),J.value}}})}return X})}M.add(l)}}return h[E].apply(this,arguments)}}),D}})}};function Ns(s,o,l){if(l.numFailures===0)return o;if(o.type==="deleteRange")return null;var u=o.keys?o.keys.length:"values"in o&&o.values?o.values.length:1;return l.numFailures===u?null:(o=i({},o),d(o.keys)&&(o.keys=o.keys.filter(function(h,m){return!(m in l.failures)})),"values"in o&&d(o.values)&&(o.values=o.values.filter(function(h,m){return!(m in l.failures)})),o)}function zi(s,o){return l=s,((u=o).lower===void 0||(u.lowerOpen?0<Ee(l,u.lower):0<=Ee(l,u.lower)))&&(s=s,(o=o).upper===void 0||(o.upperOpen?Ee(s,o.upper)<0:Ee(s,o.upper)<=0));var l,u}function qs(s,o,R,u,h,m){if(!R||R.length===0)return s;var g=o.query.index,v=g.multiEntry,C=o.query.range,_=u.schema.primaryKey.extractKey,D=g.extractKey,$=(g.lowLevelIndex||g).extractKey,R=R.reduce(function(E,T){var j=E,P=[];if(T.type==="add"||T.type==="put")for(var I=new gt,z=T.values.length-1;0<=z;--z){var B,M=T.values[z],K=_(M);I.hasKey(K)||(B=D(M),(v&&d(B)?B.some(function(J){return zi(J,C)}):zi(B,C))&&(I.addKey(K),P.push(M)))}switch(T.type){case"add":var Z=new gt().addKeys(o.values?E.map(function(re){return _(re)}):E),j=E.concat(o.values?P.filter(function(re){return re=_(re),!Z.hasKey(re)&&(Z.addKey(re),!0)}):P.map(function(re){return _(re)}).filter(function(re){return!Z.hasKey(re)&&(Z.addKey(re),!0)}));break;case"put":var V=new gt().addKeys(T.values.map(function(re){return _(re)}));j=E.filter(function(re){return!V.hasKey(o.values?_(re):re)}).concat(o.values?P:P.map(function(re){return _(re)}));break;case"delete":var X=new gt().addKeys(T.keys);j=E.filter(function(re){return!X.hasKey(o.values?_(re):re)});break;case"deleteRange":var te=T.range;j=E.filter(function(re){return!zi(_(re),te)})}return j},s);return R===s?s:(R.sort(function(E,T){return Ee($(E),$(T))||Ee(_(E),_(T))}),o.limit&&o.limit<1/0&&(R.length>o.limit?R.length=o.limit:s.length===o.limit&&R.length<o.limit&&(h.dirty=!0)),m?Object.freeze(R):R)}function Us(s,o){return Ee(s.lower,o.lower)===0&&Ee(s.upper,o.upper)===0&&!!s.lowerOpen==!!o.lowerOpen&&!!s.upperOpen==!!o.upperOpen}function rl(s,o){return(function(l,u,h,m){if(l===void 0)return u!==void 0?-1:0;if(u===void 0)return 1;if((u=Ee(l,u))===0){if(h&&m)return 0;if(h)return 1;if(m)return-1}return u})(s.lower,o.lower,s.lowerOpen,o.lowerOpen)<=0&&0<=(function(l,u,h,m){if(l===void 0)return u!==void 0?1:0;if(u===void 0)return-1;if((u=Ee(l,u))===0){if(h&&m)return 0;if(h)return-1;if(m)return 1}return u})(s.upper,o.upper,s.upperOpen,o.upperOpen)}function il(s,o,l,u){s.subscribers.add(l),u.addEventListener("abort",function(){var h,m;s.subscribers.delete(l),s.subscribers.size===0&&(h=s,m=o,setTimeout(function(){h.subscribers.size===0&&q(m,h)},3e3))})}var sl={stack:"dbcore",level:0,name:"Cache",create:function(s){var o=s.schema.name;return i(i({},s),{transaction:function(l,u,h){var m,g,v=s.transaction(l,u,h);return u==="readwrite"&&(g=(m=new AbortController).signal,h=function(C){return function(){if(m.abort(),u==="readwrite"){for(var _=new Set,D=0,$=l;D<$.length;D++){var R=$[D],E=Sn["idb://".concat(o,"/").concat(R)];if(E){var T=s.table(R),j=E.optimisticOps.filter(function(re){return re.trans===v});if(v._explicit&&C&&v.mutatedParts)for(var P=0,I=Object.values(E.queries.query);P<I.length;P++)for(var z=0,B=(Z=I[P]).slice();z<B.length;z++)Ti((V=B[z]).obsSet,v.mutatedParts)&&(q(Z,V),V.subscribers.forEach(function(re){return _.add(re)}));else if(0<j.length){E.optimisticOps=E.optimisticOps.filter(function(re){return re.trans!==v});for(var M=0,K=Object.values(E.queries.query);M<K.length;M++)for(var Z,V,X,te=0,J=(Z=K[M]).slice();te<J.length;te++)(V=J[te]).res!=null&&v.mutatedParts&&(C&&!V.dirty?(X=Object.isFrozen(V.res),X=qs(V.res,V.req,j,T,V,X),V.dirty?(q(Z,V),V.subscribers.forEach(function(re){return _.add(re)})):X!==V.res&&(V.res=X,V.promise=Q.resolve({result:X}))):(V.dirty&&q(Z,V),V.subscribers.forEach(function(re){return _.add(re)})))}}}_.forEach(function(re){return re()})}}},v.addEventListener("abort",h(!1),{signal:g}),v.addEventListener("error",h(!1),{signal:g}),v.addEventListener("complete",h(!0),{signal:g})),v},table:function(l){var u=s.table(l),h=u.schema.primaryKey;return i(i({},u),{mutate:function(m){var g=G.trans;if(h.outbound||g.db._options.cache==="disabled"||g.explicit||g.idbtrans.mode!=="readwrite")return u.mutate(m);var v=Sn["idb://".concat(o,"/").concat(l)];return v?(g=u.mutate(m),m.type!=="add"&&m.type!=="put"||!(50<=m.values.length||Ii(h,m).some(function(C){return C==null}))?(v.optimisticOps.push(m),m.mutatedParts&&Lr(m.mutatedParts),g.then(function(C){0<C.numFailures&&(q(v.optimisticOps,m),(C=Ns(0,m,C))&&v.optimisticOps.push(C),m.mutatedParts&&Lr(m.mutatedParts))}),g.catch(function(){q(v.optimisticOps,m),m.mutatedParts&&Lr(m.mutatedParts)})):g.then(function(C){var _=Ns(0,i(i({},m),{values:m.values.map(function(D,$){var R;return C.failures[$]?D:(D=(R=h.keyPath)!==null&&R!==void 0&&R.includes(".")?A(D):i({},D),ye(D,h.keyPath,C.results[$]),D)})}),C);v.optimisticOps.push(_),queueMicrotask(function(){return m.mutatedParts&&Lr(m.mutatedParts)})}),g):u.mutate(m)},query:function(m){if(!Bs(G,u)||!Ms("query",m))return u.query(m);var g=((_=G.trans)===null||_===void 0?void 0:_.db._options.cache)==="immutable",$=G,v=$.requery,C=$.signal,_=(function(T,j,P,I){var z=Sn["idb://".concat(T,"/").concat(j)];if(!z)return[];if(!(j=z.queries[P]))return[null,!1,z,null];var B=j[(I.query?I.query.index.name:null)||""];if(!B)return[null,!1,z,null];switch(P){case"query":var M=B.find(function(K){return K.req.limit===I.limit&&K.req.values===I.values&&Us(K.req.query.range,I.query.range)});return M?[M,!0,z,B]:[B.find(function(K){return("limit"in K.req?K.req.limit:1/0)>=I.limit&&(!I.values||K.req.values)&&rl(K.req.query.range,I.query.range)}),!1,z,B];case"count":return M=B.find(function(K){return Us(K.req.query.range,I.query.range)}),[M,!!M,z,B]}})(o,l,"query",m),D=_[0],$=_[1],R=_[2],E=_[3];return D&&$?D.obsSet=m.obsSet:($=u.query(m).then(function(T){var j=T.result;if(D&&(D.res=j),g){for(var P=0,I=j.length;P<I;++P)Object.freeze(j[P]);Object.freeze(j)}else T.result=A(j);return T}).catch(function(T){return E&&D&&q(E,D),Promise.reject(T)}),D={obsSet:m.obsSet,promise:$,subscribers:new Set,type:"query",req:m,dirty:!1},E?E.push(D):(E=[D],(R=R||(Sn["idb://".concat(o,"/").concat(l)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[m.query.index.name||""]=E)),il(D,E,v,C),D.promise.then(function(T){return{result:qs(T.result,m,R?.optimisticOps,u,D,g)}})}})}})}};function Mr(s,o){return new Proxy(s,{get:function(l,u,h){return u==="db"?o:Reflect.get(l,u,h)}})}var sn=(rt.prototype.version=function(s){if(isNaN(s)||s<.1)throw new ee.Type("Given version is not a positive number");if(s=Math.round(10*s)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,s);var o=this._versions,l=o.filter(function(u){return u._cfg.version===s})[0];return l||(l=new this.Version(s),o.push(l),o.sort(Ya),l.stores({}),this._state.autoSchema=!1,l)},rt.prototype._whenReady=function(s){var o=this;return this.idbdb&&(this._state.openComplete||G.letThrough||this._vip)?s():new Q(function(l,u){if(o._state.openComplete)return u(new ee.DatabaseClosed(o._state.dbOpenError));if(!o._state.isBeingOpened){if(!o._state.autoOpen)return void u(new ee.DatabaseClosed);o.open().catch(ce)}o._state.dbReadyPromise.then(l,u)}).then(s)},rt.prototype.use=function(s){var o=s.stack,l=s.create,u=s.level,h=s.name;return h&&this.unuse({stack:o,name:h}),s=this._middlewares[o]||(this._middlewares[o]=[]),s.push({stack:o,create:l,level:u??10,name:h}),s.sort(function(m,g){return m.level-g.level}),this},rt.prototype.unuse=function(s){var o=s.stack,l=s.name,u=s.create;return o&&this._middlewares[o]&&(this._middlewares[o]=this._middlewares[o].filter(function(h){return u?h.create!==u:!!l&&h.name!==l})),this},rt.prototype.open=function(){var s=this;return kn(Xe,function(){return Ja(s)})},rt.prototype._close=function(){var s=this._state,o=Mn.indexOf(this);if(0<=o&&Mn.splice(o,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}s.isBeingOpened||(s.dbReadyPromise=new Q(function(l){s.dbReadyResolve=l}),s.openCanceller=new Q(function(l,u){s.cancelOpen=u}))},rt.prototype.close=function(l){var o=(l===void 0?{disableAutoOpen:!0}:l).disableAutoOpen,l=this._state;o?(l.isBeingOpened&&l.cancelOpen(new ee.DatabaseClosed),this._close(),l.autoOpen=!1,l.dbOpenError=new ee.DatabaseClosed):(this._close(),l.autoOpen=this._options.autoOpen||l.isBeingOpened,l.openComplete=!1,l.dbOpenError=null)},rt.prototype.delete=function(s){var o=this;s===void 0&&(s={disableAutoOpen:!0});var l=0<arguments.length&&typeof arguments[0]!="object",u=this._state;return new Q(function(h,m){function g(){o.close(s);var v=o._deps.indexedDB.deleteDatabase(o.name);v.onsuccess=Be(function(){var C,_,D;C=o._deps,_=o.name,D=C.indexedDB,C=C.IDBKeyRange,_i(D)||_===Er||Si(D,C).delete(_).catch(ce),h()}),v.onerror=Yt(m),v.onblocked=o._fireOnBlocked}if(l)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");u.isBeingOpened?u.dbReadyPromise.then(g):g()})},rt.prototype.backendDB=function(){return this.idbdb},rt.prototype.isOpen=function(){return this.idbdb!==null},rt.prototype.hasBeenClosed=function(){var s=this._state.dbOpenError;return s&&s.name==="DatabaseClosed"},rt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},rt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(rt.prototype,"tables",{get:function(){var s=this;return c(this._allTables).map(function(o){return s._allTables[o]})},enumerable:!1,configurable:!0}),rt.prototype.transaction=function(){var s=function(o,l,u){var h=arguments.length;if(h<2)throw new ee.InvalidArgument("Too few arguments");for(var m=new Array(h-1);--h;)m[h-1]=arguments[h];return u=m.pop(),[o,wt(m),u]}.apply(this,arguments);return this._transaction.apply(this,s)},rt.prototype._transaction=function(s,o,l){var u=this,h=G.trans;h&&h.db===this&&s.indexOf("!")===-1||(h=null);var m,g,v=s.indexOf("?")!==-1;s=s.replace("!","").replace("?","");try{if(g=o.map(function(_){if(_=_ instanceof u.Table?_.name:_,typeof _!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return _}),s=="r"||s===pi)m=pi;else{if(s!="rw"&&s!=mi)throw new ee.InvalidArgument("Invalid transaction mode: "+s);m=mi}if(h){if(h.mode===pi&&m===mi){if(!v)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");h=null}h&&g.forEach(function(_){if(h&&h.storeNames.indexOf(_)===-1){if(!v)throw new ee.SubTransaction("Table "+_+" not included in parent transaction.");h=null}}),v&&h&&!h.active&&(h=null)}}catch(_){return h?h._promise(null,function(D,$){$(_)}):nt(_)}var C=function _(D,$,R,E,T){return Q.resolve().then(function(){var j=G.transless||G,P=D._createTransaction($,R,D._dbSchema,E);if(P.explicit=!0,j={trans:P,transless:j},E)P.idbtrans=E.idbtrans;else try{P.create(),P.idbtrans._explicit=!0,D._state.PR1398_maxLoop=3}catch(B){return B.name===Ke.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return _(D,$,R,null,T)})):nt(B)}var I,z=st(T);return z&&Bn(),j=Q.follow(function(){var B;(I=T.call(P,P))&&(z?(B=pn.bind(null,null),I.then(B,B)):typeof I.next=="function"&&typeof I.throw=="function"&&(I=Oi(I)))},j),(I&&typeof I.then=="function"?Q.resolve(I).then(function(B){return P.active?B:nt(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):j.then(function(){return I})).then(function(B){return E&&P._resolve(),P._completion.then(function(){return B})}).catch(function(B){return P._reject(B),nt(B)})})}.bind(null,this,m,g,h,l);return h?h._promise(m,C,"lock"):G.trans?kn(G.transless,function(){return u._whenReady(C)}):this._whenReady(C)},rt.prototype.table=function(s){if(!x(this._allTables,s))throw new ee.InvalidTable("Table ".concat(s," does not exist"));return this._allTables[s]},rt);function rt(s,o){var l=this;this._middlewares={},this.verno=0;var u=rt.dependencies;this._options=o=i({addons:rt.addons,autoOpen:!0,indexedDB:u.indexedDB,IDBKeyRange:u.IDBKeyRange,cache:"cloned"},o),this._deps={indexedDB:o.indexedDB,IDBKeyRange:o.IDBKeyRange},u=o.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var h,m,g,v,C,_={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ce,dbReadyPromise:null,cancelOpen:ce,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:o.autoOpen};_.dbReadyPromise=new Q(function($){_.dbReadyResolve=$}),_.openCanceller=new Q(function($,R){_.cancelOpen=R}),this._state=_,this.name=s,this.on=Jn(this,"populate","blocked","versionchange","close",{ready:[St,ce]}),this.on.ready.subscribe=Fe(this.on.ready.subscribe,function($){return function(R,E){rt.vip(function(){var T,j=l._state;j.openComplete?(j.dbOpenError||Q.resolve().then(R),E&&$(R)):j.onReadyBeingFired?(j.onReadyBeingFired.push(R),E&&$(R)):($(R),T=l,E||$(function P(){T.on.ready.unsubscribe(R),T.on.ready.unsubscribe(P)}))})}}),this.Collection=(h=this,Zn(Na.prototype,function(I,P){this.db=h;var E=vs,T=null;if(P)try{E=P()}catch(z){T=z}var j=I._ctx,P=j.table,I=P.hook.reading.fire;this._ctx={table:P,index:j.index,isPrimKey:!j.index||P.schema.primKey.keyPath&&j.index===P.schema.primKey.name,range:E,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:T,or:j.or,valueMapper:I!==ge?I:null}})),this.Table=(m=this,Zn(Cs.prototype,function($,R,E){this.db=m,this._tx=E,this.name=$,this.schema=R,this.hook=m._allTables[$]?m._allTables[$].hook:Jn(null,{creating:[Ye,ce],reading:[Et,ge],updating:[Bt,ce],deleting:[dn,ce]})})),this.Transaction=(g=this,Zn(Ha.prototype,function($,R,E,T,j){var P=this;this.db=g,this.mode=$,this.storeNames=R,this.schema=E,this.chromeTransactionDurability=T,this.idbtrans=null,this.on=Jn(this,"complete","error","abort"),this.parent=j||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new Q(function(I,z){P._resolve=I,P._reject=z}),this._completion.then(function(){P.active=!1,P.on.complete.fire()},function(I){var z=P.active;return P.active=!1,P.on.error.fire(I),P.parent?P.parent._reject(I):z&&P.idbtrans&&P.idbtrans.abort(),nt(I)})})),this.Version=(v=this,Zn(Qa.prototype,function($){this.db=v,this._cfg={version:$,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(C=this,Zn(Ps.prototype,function($,R,E){if(this.db=C,this._ctx={table:$,index:R===":id"?null:R,or:E},this._cmp=this._ascending=Ee,this._descending=function(T,j){return Ee(j,T)},this._max=function(T,j){return 0<Ee(T,j)?T:j},this._min=function(T,j){return Ee(T,j)<0?T:j},this._IDBKeyRange=C._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function($){0<$.newVersion?console.warn("Another connection wants to upgrade database '".concat(l.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(l.name,"'. Closing db now to resume the delete request.")),l.close({disableAutoOpen:!1})}),this.on("blocked",function($){!$.newVersion||$.newVersion<$.oldVersion?console.warn("Dexie.delete('".concat(l.name,"') was blocked")):console.warn("Upgrade '".concat(l.name,"' blocked by other connection holding version ").concat($.oldVersion/10))}),this._maxKey=rr(o.IDBKeyRange),this._createTransaction=function($,R,E,T){return new l.Transaction($,R,E,l._options.chromeTransactionDurability,T)},this._fireOnBlocked=function($){l.on("blocked").fire($),Mn.filter(function(R){return R.name===l.name&&R!==l&&!R._state.vcFired}).map(function(R){return R.on("versionchange").fire($)})},this.use(tl),this.use(sl),this.use(nl),this.use(Za),this.use(el);var D=new Proxy(this,{get:function($,R,E){if(R==="_vip")return!0;if(R==="table")return function(j){return Mr(l.table(j),D)};var T=Reflect.get($,R,E);return T instanceof Cs?Mr(T,D):R==="tables"?T.map(function(j){return Mr(j,D)}):R==="_createTransaction"?function(){return Mr(T.apply(this,arguments),D)}:T}});this.vip=D,u.forEach(function($){return $(l)})}var Nr,Ft=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",ol=(Li.prototype.subscribe=function(s,o,l){return this._subscribe(s&&typeof s!="function"?s:{next:s,error:o,complete:l})},Li.prototype[Ft]=function(){return this},Li);function Li(s){this._subscribe=s}try{Nr={indexedDB:a.indexedDB||a.mozIndexedDB||a.webkitIndexedDB||a.msIndexedDB,IDBKeyRange:a.IDBKeyRange||a.webkitIDBKeyRange}}catch{Nr={indexedDB:null,IDBKeyRange:null}}function Hs(s){var o,l=!1,u=new ol(function(h){var m=st(s),g,v=!1,C={},_={},D={get closed(){return v},unsubscribe:function(){v||(v=!0,g&&g.abort(),$&&bn.storagemutated.unsubscribe(E))}};h.start&&h.start(D);var $=!1,R=function(){return fi(T)},E=function(j){zr(C,j),Ti(_,C)&&R()},T=function(){var j,P,I;!v&&Nr.indexedDB&&(C={},j={},g&&g.abort(),g=new AbortController,I=(function(z){var B=Oe();try{m&&Bn();var M=fn(s,z);return M=m?M.finally(pn):M}finally{B&&Ue()}})(P={subscr:j,signal:g.signal,requery:R,querier:s,trans:null}),Promise.resolve(I).then(function(z){l=!0,o=z,v||P.signal.aborted||(C={},(function(B){for(var M in B)if(x(B,M))return;return 1})(_=j)||$||(bn(nr,E),$=!0),fi(function(){return!v&&h.next&&h.next(z)}))},function(z){l=!1,["DatabaseClosedError","AbortError"].includes(z?.name)||v||fi(function(){v||h.error&&h.error(z)})}))};return setTimeout(R,0),D});return u.hasValue=function(){return l},u.getValue=function(){return o},u}var _n=sn;function Bi(s){var o=yn;try{yn=!0,bn.storagemutated.fire(s),Ri(s,!0)}finally{yn=o}}O(_n,i(i({},ze),{delete:function(s){return new _n(s,{addons:[]}).delete()},exists:function(s){return new _n(s,{addons:[]}).open().then(function(o){return o.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(s){try{return o=_n.dependencies,l=o.indexedDB,o=o.IDBKeyRange,(_i(l)?Promise.resolve(l.databases()).then(function(u){return u.map(function(h){return h.name}).filter(function(h){return h!==Er})}):Si(l,o).toCollection().primaryKeys()).then(s)}catch{return nt(new ee.MissingAPI)}var o,l},defineClass:function(){return function(s){p(this,s)}},ignoreTransaction:function(s){return G.trans?kn(G.transless,s):s()},vip:Ai,async:function(s){return function(){try{var o=Oi(s.apply(this,arguments));return o&&typeof o.then=="function"?o:Q.resolve(o)}catch(l){return nt(l)}}},spawn:function(s,o,l){try{var u=Oi(s.apply(l,o||[]));return u&&typeof u.then=="function"?u:Q.resolve(u)}catch(h){return nt(h)}},currentTransaction:{get:function(){return G.trans||null}},waitFor:function(s,o){return o=Q.resolve(typeof s=="function"?_n.ignoreTransaction(s):s).timeout(o||6e4),G.trans?G.trans.waitFor(o):o},Promise:Q,debug:{get:function(){return Re},set:function(s){Ne(s)}},derive:U,extend:p,props:O,override:Fe,Events:Jn,on:bn,liveQuery:Hs,extendObservabilitySet:zr,getByKeyPath:be,setByKeyPath:ye,delByKeyPath:function(s,o){typeof o=="string"?ye(s,o,void 0):"length"in o&&[].map.call(o,function(l){ye(s,l,void 0)})},shallowClone:ft,deepClone:A,getObjectDiff:Fi,cmp:Ee,asap:he,minKey:-1/0,addons:[],connections:Mn,errnames:Ke,dependencies:Nr,cache:Sn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(s){return parseInt(s)}).reduce(function(s,o,l){return s+o/Math.pow(10,2*l)})})),_n.maxKey=rr(_n.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(bn(nr,function(s){yn||(s=new CustomEvent(wi,{detail:s}),yn=!0,dispatchEvent(s),yn=!1)}),addEventListener(wi,function(s){s=s.detail,yn||Bi(s)}));var Un,yn=!1,Ws=function(){};return typeof BroadcastChannel<"u"&&((Ws=function(){(Un=new BroadcastChannel(wi)).onmessage=function(s){return s.data&&Bi(s.data)}})(),typeof Un.unref=="function"&&Un.unref(),bn(nr,function(s){yn||Un.postMessage(s)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(s){if(!sn.disableBfCache&&s.persisted){Re&&console.debug("Dexie: handling persisted pagehide"),Un?.close();for(var o=0,l=Mn;o<l.length;o++)l[o].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(s){!sn.disableBfCache&&s.persisted&&(Re&&console.debug("Dexie: handling persisted pageshow"),Ws(),Bi({all:new gt(-1/0,[[]])}))})),Q.rejectionMapper=function(s,o){return!s||s instanceof Me||s instanceof TypeError||s instanceof SyntaxError||!s.name||!Ve[s.name]?s:(o=new Ve[s.name](o||s.message,s),"stack"in s&&L(o,"stack",{get:function(){return this.inner.stack}}),o)},Ne(Re),i(sn,Object.freeze({__proto__:null,Dexie:sn,liveQuery:Hs,Entity:xs,cmp:Ee,PropModSymbol:rn,PropModification:er,replacePrefix:function(s,o){return new er({replacePrefix:[s,o]})},add:function(s){return new er({add:s})},remove:function(s){return new er({remove:s})},default:sn,RangeSet:gt,mergeRanges:or,rangesOverlap:Os}),{default:sn}),sn})})(Yr)),Yr.exports}var ql=Nl();const Gi=Bl(ql),so=Symbol.for("Dexie"),ei=globalThis[so]||(globalThis[so]=Gi);if(Gi.semVer!==ei.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Gi.semVer} and ${ei.semVer}`);const{liveQuery:Vo,mergeRanges:Vf,rangesOverlap:Yf,RangeSet:Xf,cmp:Gf,Entity:Qf,PropModSymbol:Jf,PropModification:Zf,replacePrefix:ep,add:tp,remove:np}=ei,Ul="easydb";let Ur=null;function Hl(){if(Ur)return Ur;const e=new ei(Ul);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>Wl()),Ur={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},Ur}function Wl(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function Hn(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(i=>Yo(i,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const i=Vo(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>i.unsubscribe()}}}function Kl(e,t){return{async find(r){const i=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return i.toArray();const n=Object.entries(r);return i.filter(a=>Yo(a,n)).toArray()},async findOne(r){const i=await e.get(r);return i&&i.tableId===t?i:null},async insert(r){const i={...r,tableId:t};return await e.add(i),i},async bulkInsert(r){if(r.length===0)return[];const i=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(i),i},async upsert(r){const i={...r,tableId:t};return await e.put(i),i},async patch(r,i){if(await e.update(r,i)===0)throw new Error(`row patch: no row ${r}`);const a=await e.get(r);if(!a)throw new Error(`row patch: row ${r} vanished after update`);return a},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=Vo(()=>e.where("tableId").equals(t).toArray()).subscribe({next:a=>r(a)});return()=>n.unsubscribe()}}}function Yo(e,t){for(const[r,i]of t)if(e[r]!==i)return!1;return!0}function Vl(e){return{workspaces:Hn(e.workspaces),tables:Hn(e.tables),settings:Hn(e.settings),plugins:Hn(e.plugins),viewTemplates:Hn(e.viewTemplates),viewInstances:Hn(e.viewInstances),rows:t=>Kl(e.rows,t)}}function Yl(e){const{base:t,providers:r,tableById:i,ctx:n}=e,a=new Map;return{...t,rows(c){const d=i(c),p=d?.source;if(p){const w=r.get(p.type);if(w){const S=JSON.stringify(p),x=a.get(c);if(x&&x.key===S)return x.coll;const O=w.create(d,n);return a.set(c,{key:S,coll:O}),O}}return a.delete(c),t.rows(c)}}}function Xl(){const e=new Map;return{on(t,r){let i=e.get(t);return i||(i=new Set,e.set(t,i)),i.add(r),()=>{i.delete(r)}},emit(t,r){const i=e.get(t);if(i)for(const n of i)try{n(r)}catch(a){console.error(`[event:${String(t)}] listener threw`,a)}}}}const Zt=Je`
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
`;function xn(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const oo=new WeakSet;function en(e,t){if(oo.has(t))return;oo.add(t);let r=0,i=0,n=0,a=0,c=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",p=>{if(p.target.closest("button, input, textarea, select, a, label"))return;c=!0,r=p.clientX,i=p.clientY;const S=e.getBoundingClientRect();n=S.left,a=S.top,t.setPointerCapture(p.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",p=>{if(!c)return;const w=p.clientX-r,S=p.clientY-i,x=-e.offsetWidth+80,O=window.innerWidth-80,W=0,L=window.innerHeight-40,U=Math.max(x,Math.min(O,n+w)),oe=Math.max(W,Math.min(L,a+S));e.style.position="fixed",e.style.left=`${U}px`,e.style.top=`${oe}px`,e.style.margin="0"});const d=p=>{if(c){c=!1;try{t.releasePointerCapture(p.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",d),t.addEventListener("pointercancel",d)}var Gl=Object.defineProperty,Ql=Object.getOwnPropertyDescriptor,Xo=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ql(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Gl(t,r,n),n};let It=class extends Ge{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),It.instance=this}disconnectedCallback(){super.disconnectedCallback(),It.instance===this&&(It.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&en(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(i=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:i}})}choice(e,t,r="Choose"){return this.enqueue(i=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:i}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return N`
      <dialog @cancel=${this.onCancel} @keydown=${xn}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):_e}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return N`
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
        `;case"prompt":return N`
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
        `;case"choice":return N`
          <div class="dialog-header">
            <h2>${e.title}</h2>
            <div class="header-actions">
              <button class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
            </div>
          </div>
          <div class="dialog-body">
            ${e.message?N`<p class="message">${e.message}</p>`:_e}
            <div class="choices">
              ${e.options.map(t=>N`<button class="choice" @click=${()=>this.closeAndResolve(t)}>
                    ${t}
                  </button>`)}
            </div>
          </div>
        `}}};It.instance=null;It.styles=[Zt,Je`
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
    `];Xo([H()],It.prototype,"current",2);It=Xo([ot("host-dialogs")],It);const ln=Je`
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
`;var Jl=Object.defineProperty,Zl=Object.getOwnPropertyDescriptor,Go=(e,t,r,i)=>{for(var n=i>1?void 0:i?Zl(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Jl(t,r,n),n};let on=class extends Ge{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),on.instance=this}disconnectedCallback(){super.disconnectedCallback(),on.instance===this&&(on.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const i=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),i)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return N`
      ${this.toasts.map(e=>N`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${tc(e.kind)}</span>
            <span class="body">
              ${e.title?N`<strong>${e.title}</strong>`:""}${ec(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};on.instance=null;on.styles=[ln,Je`
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
    `];Go([H()],on.prototype,"toasts",2);on=Go([ot("toast-host")],on);function ec(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let i=0,n;for(;(n=t.exec(e))!==null;)n.index>i&&r.push(e.slice(i,n.index)),r.push({url:n[0]}),i=n.index+n[0].length;return i<e.length&&r.push(e.slice(i)),r.length===0?e:r.map(a=>typeof a=="string"?a:N`<a href=${a.url} target="_blank" rel="noopener noreferrer">${a.url}</a>`)}function tc(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function nc(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map}}function Tn(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function Ui(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function rc(e){return{registerHeaderButton:t=>Tn(e.headerButtons,t),registerFooterButton:t=>Tn(e.footerButtons,t),registerTableButton:t=>Tn(e.tableButtons,t),registerImporter:t=>Tn(e.importers,t),registerExporter:t=>Tn(e.exporters,t),registerUrlSource:t=>Tn(e.urlSources,t),registerDropHandler:t=>Tn(e.dropHandlers,t),registerCellRenderer:(t,r)=>Ui(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>Ui(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>Ui(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},dialogs:ic}}const ic={async alert(e,t){const r=It.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=It.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const i=It.instance;return i?i.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const i=It.instance;if(i)return i.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=on.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}};function sc(e){const t=rc(e.registries),r=e.registries.rowSources,i=a=>(r.set(a.type,a),()=>{r.get(a.type)===a&&r.delete(a.type)}),n={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:n,registerRowSource:i,backend:{fetch:async(a,c)=>{const d=await oc(e.store),p=c?.body instanceof ArrayBuffer;if(!d||p)return globalThis.fetch(a,c);const w={url:a};return c?.method&&(w.method=c.method),c?.headers&&(w.headers=c.headers),typeof c?.body=="string"&&(w.body=c.body),globalThis.fetch(`${d}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)})},async saveFile(a,c,d){const p=typeof c=="string"?new Blob([c],{type:d??"application/octet-stream"}):c,w=URL.createObjectURL(p),S=document.createElement("a");S.href=w,S.download=a,S.rel="noopener",document.body.appendChild(S),S.click(),S.remove(),setTimeout(()=>URL.revokeObjectURL(w),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function oc(e){const r=(await e.settings.findOne("server-sync:url"))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}const ac={name:"csv-import",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"easyDBAccess built-ins"};function lc(e){e.ui.registerImporter(cc),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const i=xc(t).filter($c);if(i.length===0)return!1;t.preventDefault();for(const n of i)await uc(e,n);return!0})}const cc={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return gr(t)}};async function uc(e,t){const r=t.name.replace(/\.csv$/i,"")||"imported";await us(e,await t.text(),r)}async function us(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("csv-import: no active workspace");const a=(r||"imported").replace(/\.csv$/i,"")||"imported",c=(await e.store.tables.find()).find(x=>x.workspaceId===n&&x.name===a);let d,p;if(c){const x=await e.ui.dialogs.choice(`A table named "${a}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!x)return;x==="Append rows"?(p="append",d=c.id):x==="Overwrite rows"?(p="overwrite",d=c.id):(p="new",d=Hr())}else p="new",d=Hr();e.events.emit("import:before",{source:"csv",tableId:d});let w;if(p==="new"){const x=gr(t);let O=x.columns,W=x.rows;if(i.editColumns){const U=await i.editColumns(O);if(U===null)return;W=kc(W,O,U),O=U}const L=c?`${a} (${Date.now().toString(36)})`:a;await e.store.tables.insert({id:d,workspaceId:n,name:L,code:Qi(L),columns:O,view:"table",...i.origin?{origin:i.origin}:{},updatedAt:Date.now()}),w=W.map(U=>({id:Hr(),tableId:d,data:U,updatedAt:Date.now()}))}else{const x=c.columns;if(w=Qo(t).rows.map(W=>{const L={};for(let U=0;U<x.length;U++){const oe=x[U];L[oe.field]=ea(W[U]??"",oe.type)}return{id:Hr(),tableId:d,data:L,updatedAt:Date.now()}}),p==="overwrite"){const W=e.store.rows(d),L=await W.find();await W.bulkRemove(L.map(U=>U.id))}}await e.store.rows(d).bulkInsert(w),e.events.emit("import:after",{source:"csv",tableId:d,rowCount:w.length})}function Qo(e){const t=e.replace(/﻿/,""),r=Jo(t),i=Zo(t,r);if(i.length===0)return{header:[],rows:[]};const n=i[0],a=i.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:n,rows:a}}function gr(e){const t=e.replace(/﻿/,""),r=Jo(t),i=Zo(t,r);if(i.length===0)return{columns:[],rows:[]};const n=i[0],a=i.slice(1).filter(O=>!(O.length===1&&O[0]==="")),c=n.map((O,W)=>fc(O,W)),d=na(c.map(O=>O.field)),p=a.map(O=>{const W={};for(let L=0;L<d.length;L++)W[d[L]]=O[L]??"";return W}),w=c.map((O,W)=>O.type?O.type:pc(p.map(L=>L[d[W]]??"").filter(L=>L.length>0))),S=c.map((O,W)=>{const L=w[W]??"string",U={field:d[W],label:O.label,type:L},oe=hc(L),de=O.renderer??oe;return de&&(U.renderer=de),O.default!==void 0&&(U.default=O.default),O.max!=null&&(U.max=O.max),O.unique&&(U.unique=!0),O.notnull&&(U.notnull=!0),O.hidden&&(U.hidden=!0),U}),x=p.map(O=>{const W={};for(let L=0;L<d.length;L++){const U=d[L],oe=w[L]??"string";W[U]=ea(O[U]??"",oe)}return W});return{columns:S,rows:x}}const dc=new Set(["string","number","boolean","date","datetime"]),ao={color:"color",image:"image"};function hc(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function fc(e,t){const r=e.trim();if(!r.includes(":"))return{field:Qi(r||`col_${t+1}`),label:r||`Column ${t+1}`};const i=r.split(":"),n=Qi(i[0]||`col_${t+1}`),a=(i[1]??i[0]??"").trim()||n,c={field:n,label:a},d=(i[2]??"").trim();d&&(dc.has(d)?c.type=d:ao[d]&&(c.type="string",c.renderer=ao[d]));const p=(i[3]??"").trim();p&&(c.default=p);const w=(i[4]??"").trim();if(w){const x=Number(w);Number.isFinite(x)&&x>0&&(c.max=x)}const S=(i[5]??"").toLowerCase();return S.includes("u")&&(c.unique=!0),S.includes("n")&&(c.notnull=!0),S.includes("h")&&(c.hidden=!0),c}function Jo(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const a of t)a in r&&(r[a]+=1);let i=",",n=-1;for(const a of[",",";","	"])(r[a]??0)>n&&(i=a,n=r[a]??0);return i}function Zo(e,t){const r=[];let i=[],n="",a=!1;for(let c=0;c<e.length;c++){const d=e[c];a?d==='"'?e[c+1]==='"'?(n+='"',c++):a=!1:n+=d:d==='"'?a=!0:d===t?(i.push(n),n=""):d===`
`||d==="\r"?(d==="\r"&&e[c+1]===`
`&&c++,i.push(n),r.push(i),i=[],n=""):n+=d}return(n.length>0||i.length>0)&&(i.push(n),r.push(i)),r}function pc(e){return e.length===0?"string":e.every(gc)?"boolean":e.every(bc)?"number":e.every(wc)?"datetime":e.every(yc)?"date":"string"}const mc=/^(true|false|yes|no|0|1)$/i;function gc(e){return mc.test(e.trim())}function bc(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function yc(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function wc(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function ea(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const i=Number(r);return Number.isFinite(i)?i:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return ta(r);case"datetime":return vc(r);default:return e}}function ta(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let i=parseInt(t[1],10),n=parseInt(t[2],10);const a=t[3];let c=parseInt(a,10);a.length===2&&(c+=2e3);let d,p;return i>12?(d=i,p=n):n>12?(p=i,d=n):(d=i,p=n),`${c.toString().padStart(4,"0")}-${p.toString().padStart(2,"0")}-${d.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function vc(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const i=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(i)return`${ta(`${i[1]}/${i[2]}/${i[3]}`)}T${i[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const a=n.toISOString();return`${a.slice(0,10)}T${a.slice(11,16)}`}return e}function xc(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function $c(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function na(e){const t=new Map,r=new Set,i=[];for(const n of e){let a=n,c=t.get(n)??0;for(;r.has(a);)c+=1,a=`${n}_${c+1}`;t.set(n,c),r.add(a),i.push(a)}return i}function kc(e,t,r){return e.map(i=>{const n={};for(let a=0;a<t.length;a++)n[r[a].field]=i[t[a].field];return n})}function Qi(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function Hr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Cc=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:na,importCsvText:us,init:lc,meta:ac,parseCsv:gr,parseCsvRaw:Qo},Symbol.toStringTag,{value:"Module"})),Ec={name:"csv-export",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"easyDBAccess built-ins"},Sc={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return ds(e,t)}};function _c(e){e.ui.registerExporter(Sc),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const i=await t.store.tables.findOne(r.tableId);if(!i)return;const n=await t.store.rows(i.id).find(),a=ds(i,n);await t.backend.saveFile(`${i.code||i.name||"table"}.csv`,a,"text/csv")}})}function ds(e,t){const r=e.columns.map(a=>a.field),i=e.columns.map(a=>lo(a.label??a.field)),n=t.map(a=>r.map(c=>lo(Ac(a.data[c]))).join(","));return[i.join(","),...n].join(`\r
`)}function Ac(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function lo(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const Pc=Object.freeze(Object.defineProperty({__proto__:null,init:_c,meta:Ec,serializeCsv:ds},Symbol.toStringTag,{value:"Module"}));var Tc=Object.defineProperty,Dc=Object.getOwnPropertyDescriptor,Xn=(e,t,r,i)=>{for(var n=i>1?void 0:i?Dc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Tc(t,r,n),n};function Ji(e,t={}){return(Dt.instance??jc()).open(e,t)}function jc(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function Rc(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Dt=class extends Ge{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,i)=>r?i:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Dt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Dt.instance===this&&(Dt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(()=>!0),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return N`
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
            ${this.message?N`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,r)=>N`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${r}`}
                      .checked=${this.selected[r]??!1}
                      @change=${()=>this.toggle(r)}
                    />
                    <label for=${`tsel-${r}`}>
                      <span class="name">${t.name}</span>
                      <span class="size">${Rc(t.size)}</span>
                      ${t.detail?N`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};Dt.instance=null;Dt.styles=[Zt,Je`
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
    `];Xn([H()],Dt.prototype,"items",2);Xn([H()],Dt.prototype,"selected",2);Xn([H()],Dt.prototype,"heading",2);Xn([H()],Dt.prototype,"message",2);Xn([H()],Dt.prototype,"confirmLabel",2);Dt=Xn([ot("table-select-dialog")],Dt);const Oc={name:"json-import",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"easyDBAccess built-ins"};function Fc(e){e.ui.registerImporter(Ic),e.ui.registerDropHandler(async t=>{const i=Uc(t).filter(Hc);if(i.length===0)return!1;t.preventDefault();for(const n of i)await zc(e,n);return!0})}const Ic={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=br(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function zc(e,t){await hs(e,await t.text(),t.name)}async function hs(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("json-import: no active workspace");let a;try{a=JSON.parse(t)}catch(L){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${L.message}`)});return}const c=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",d=br(a,c);if(d.length===0)return;let p=d;if(d.length>1){const L=await Ji(d.map(U=>({name:U.name,size:U.rows.length})),{title:"Import tables",message:`"${r}" contains ${d.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!L)return;p=L.map(U=>d[U])}const w=(await e.store.tables.find()).filter(L=>L.workspaceId===n),S=new Set(p.map(L=>L.name)),x=w.filter(L=>S.has(L.name));let O;if(x.length===0&&p.length===1)O="append-new";else{const L=x.length>0?[`Overwrite matching (${x.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],U=await e.ui.dialogs.choice(`Importing ${p.length} table${p.length===1?"":"s"} from "${r}".${x.length>0?`

${x.length} table${x.length===1?"":"s"} share a name with existing data.`:""}`,L,"JSON import");if(!U)return;U.startsWith("Overwrite matching")?O="overwrite-matching":U==="Replace entire workspace"?O="replace-workspace":O="append-new"}if(O==="replace-workspace")for(const L of w){const U=e.store.rows(L.id),oe=await U.find();await U.bulkRemove(oe.map(de=>de.id)),await e.store.tables.remove(L.id)}const W=new Map(w.map(L=>[L.name,L]));for(const L of p){const U=L.source,oe=L.origin??(!U&&i.originUrl?{type:"json",url:i.originUrl}:void 0);let de;const xe=O==="overwrite-matching"?W.get(L.name):void 0;if(xe){if(de=xe.id,!xe.source){const ie=e.store.rows(de),he=await ie.find();await ie.bulkRemove(he.map(be=>be.id))}await e.store.tables.patch(de,{columns:L.columns,...L.windowGeometry?{windowGeometry:L.windowGeometry}:{},...L.sortColumn?{sortColumn:L.sortColumn,sortAsc:L.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},source:U??void 0,origin:oe??void 0,updatedAt:Date.now()})}else de=fo(),e.events.emit("import:before",{source:"json",tableId:de}),await e.store.tables.insert({id:de,workspaceId:n,name:L.name,code:Wc(L.name),columns:L.columns,view:"table",...L.windowGeometry?{windowGeometry:L.windowGeometry}:{},...L.sortColumn?{sortColumn:L.sortColumn,sortAsc:L.sortAsc??!0}:{},...U?{source:U}:{},...oe?{origin:oe}:{},updatedAt:Date.now()});let Fe=0;if(!U){const ie=e.store.rows(de),he=L.rows.map(be=>({id:fo(),tableId:de,data:be,updatedAt:Date.now()}));await ie.bulkInsert(he),Fe=he.length}e.events.emit("import:after",{source:"json",tableId:de,rowCount:Fe})}}function br(e,t){if(Tt(e)&&co(e))return uo(e);if(Tt(e)&&Array.isArray(e.tables)){const r=e,i=[];for(const n of r.tables){if(Bc(n)){const a=n,c=Tt(a.windowGeometry)?a.windowGeometry:void 0,d=typeof a.sortColumn=="string"?a.sortColumn:void 0,p=typeof a.sortAsc=="boolean"?a.sortAsc:void 0,w=Tt(a.source)&&typeof a.source.type=="string"?a.source:void 0,S=Tt(a.origin)&&typeof a.origin.type=="string"&&typeof a.origin.url=="string"?a.origin:void 0;i.push({name:String(n.name),columns:n.columns.map(Mc),rows:Array.isArray(n.rows)?n.rows.filter(Tt):[],...c?{windowGeometry:c}:{},...d?{sortColumn:d,sortAsc:p??!0}:{},...w?{source:w}:{},...S?{origin:S}:{}});continue}Tt(n)&&co(n)&&i.push(...uo(n))}return i}if(Array.isArray(e)){const r=e.filter(Tt);return r.length===0?[]:[{name:t,...ho(r)}]}return Tt(e)?[{name:t,...ho([e])}]:[]}function co(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!Tt(r))continue;const i=r;if(Array.isArray(i.dataArray)&&Array.isArray(i.columns))return!0}return!1}function uo(e){const t=[];for(const[r,i]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!Tt(i))continue;const n=i;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const a=r.replace(/\.table\.json$/,""),c=n.columns.map(S=>Lc(S)),d=c.map(S=>S.field),p=n.dataArray.filter(S=>Array.isArray(S)).map(S=>{const x={};for(let O=0;O<d.length;O++)x[d[O]]=S[O];return x}),w={name:a,columns:c,rows:p};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const S=n.elementRect;w.windowGeometry={x:S.x,y:S.y,w:S.width??600,h:S.height??400,z:S.zIndex??100,minimized:!!S.minimized,maximized:!!S.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<d.length&&(w.sortColumn=d[n.sortColumn],w.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(w)}return t}function Lc(e){const t=String(e.field??"col"),r=String(e.name??t),i=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:i};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function Bc(e){return Tt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Mc(e){if(!Tt(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let i=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(i==="color"||i==="image")&&(n=n??i,i="string");const a={field:r,label:String(t.label??r),type:i};return n&&(a.renderer=n),typeof t.script=="string"&&(a.script=t.script),a}function ho(e){const t=new Set;for(const n of e)for(const a of Object.keys(n))t.add(a);return{columns:Array.from(t).map(n=>({field:n,label:n,type:Nc(e.map(a=>a[n]))})),rows:e}}function Nc(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&qc(r))?"date":"string"}function qc(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function Tt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Uc(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function Hc(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function Wc(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function fo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Kc=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:hs,init:Fc,meta:Oc,parsedToTables:br},Symbol.toStringTag,{value:"Module"}));class Gt extends Error{constructor(t,r){const i=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(i),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function Ln(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),i={};for(const[d,p]of t.searchParams)i[d]=p;let n,a=null,c=null;if(r.length>=2){c=decodeURIComponent(r[r.length-1]),a=decodeURIComponent(r[r.length-2]);const d=r.slice(0,r.length-2).join("/");n=t.origin+(d?"/"+d:"")}else r.length===1&&(a=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:a,table:c,query:i}}function ti(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[i,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(i,String(n));return r.toString()}function Vc(e){const t=e?.next_url??null,r=e?.next,i=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],a=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(d=>Array.isArray(d)&&a?Object.fromEntries(a.map((p,w)=>[p,d[w]])):d),nextUrl:t,nextToken:i,hasMore:t!=null||i!=null,truncated:e?.truncated===!0}}function Yc(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function Xc(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],i={},n=e?.column_details;if(Array.isArray(n))for(const d of n)i[d.column??d.name]=d;else n&&typeof n=="object"&&Object.assign(i,n);for(const d of r)d in i||(i[d]={});return{columns:(r.length?r:Object.keys(i)).map(d=>{const p=i[d]||{},w=p.is_pk===!0||p.is_pk===1||t.includes(d),S={field:d,label:ra(d),type:Yc(p.sqlite_type??p.type,d)};return(p.notnull===!0||p.notnull===1||w)&&(S.notnull=!0),w&&(S.unique=!0),p.hidden===!0&&(S.hidden=!0),S}),pks:t}}function ra(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function fs(e){const t=[],r=new Set;for(const i of e)for(const n of Object.keys(i))r.has(n)||(r.add(n),t.push(n));return t.map(i=>({field:i,label:ra(i),type:Gc(e.map(n=>n[i]))}))}function Gc(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Qc(r))?"datetime":"string"}function Qc(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Jc(e){const t=new TextEncoder().encode(String(e));let r="";for(const i of t){const n=String.fromCharCode(i);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+i.toString(16).toUpperCase().padStart(2,"0")}return r}function Zc(e,t){return!t||t.length===0?null:t.map(r=>Jc(e[r])).join(",")}function eu(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const i of t){if(typeof i=="string"){r.push(i);continue}if(i&&typeof i=="object"&&typeof i.name=="string"){if(i.name==="_memory")continue;r.push(typeof i.route=="string"&&i.route?i.route:i.name)}}return r}function tu(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],i=[];for(const n of r){if(typeof n=="string"){i.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&i.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return i}async function yr(e,t){let r;try{r=await e(t)}catch(n){const a=n?.message||"network error";throw new Gt({error:`Couldn't reach ${t} (${a}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Gt(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const i=await r.json();if(i&&i.ok===!1)throw new Gt(i,r.status);return i}async function ia(e,t){return eu(await yr(e,`${t}/-/databases.json`))}async function po(e,t,r){return tu(await yr(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function sa(e,t){const r=ti(t,{_extra:"columns"}),i=await yr(e,r),{columns:n,pks:a}=Xc(i),c=!!i&&i.column_details!=null;return{columns:n,pks:a,count:i?.count??null,typed:c,raw:i}}function oa(e,t){if(t.length===0)return e;const r=new Map(fs(t).map(i=>[i.field,i.type]));return e.map(i=>{if(i.type!=="string")return i;const n=r.get(i.field);return n&&n!=="string"?{...i,type:n}:i})}async function si(e,t,r={}){const i=r.maxRows??1e4,a={_size:r.pageSize??1e3,...r.extraParams||{}};let c=ti(t,a);const d=[];let p=!1,w=!1,S=0;for(;c;){const x=await yr(e,c),O=Vc(x);d.push(...O.rows),p=p||O.truncated,S+=1,r.onProgress?.(d.length);const W=O.nextUrl!=null?O.nextUrl:O.nextToken!=null?ti(t,{_next:O.nextToken}):null;W&&d.length<i&&O.rows.length>0?c=W:(w=W!=null&&O.rows.length>0,c=null)}return{rows:d,truncated:p,hasMore:w,pages:S}}function nu(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function aa(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function la(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function oi(e,t,r,i){let n;try{n=await e(t,{method:"POST",headers:nu(i),body:JSON.stringify(r)})}catch(c){throw new Gt({error:`Couldn't reach ${t} (${c?.message||"network error"}).`},0)}if(n&&n.ok===!1){let c=null;try{c=await n.json()}catch{}throw new Gt(c&&typeof c=="object"?c:{error:`HTTP ${n.status} for ${t}`},n.status)}const a=await n.json();if(a&&a.ok===!1)throw new Gt(a,n.status);return a}async function mo(e,t,r,i={}){const n=await oi(e,aa(t,"insert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function ru(e,t,r,i,n={}){const a=await oi(e,la(t,r,"update"),{update:i,return:!0},n.token);return a&&typeof a.row=="object"&&a.row?a.row:Array.isArray(a?.rows)&&a.rows[0]?a.rows[0]:null}async function go(e,t,r,i={}){await oi(e,la(t,r,"delete"),{},i.token)}async function iu(e,t,r,i={}){const n=await oi(e,aa(t,"upsert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function su(e,t){const r=ti(t,{_extra:"primary_keys"}),i=await yr(e,r);return Array.isArray(i?.primary_keys)?i.primary_keys:[]}async function ca(e,t,r={}){const i=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,i);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const a=await n.json(),c=a?.datasette?.version??a?.version??null;let d=null;try{d=(await(await e(`${t}/-/actor.json`,i)).json())?.actor??null}catch{}return{reachable:!0,version:c,actor:d,writable:!!(r.token&&d)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function ai(e,t){return t?(r,i)=>{const n=(i??{}).headers??{};return e(r,{...i??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ua=Symbol.for(""),ou=e=>{if(e?.r===ua)return e?._$litStatic$},au=e=>({_$litStatic$:e,r:ua}),bo=new Map,lu=e=>(t,...r)=>{const i=r.length;let n,a;const c=[],d=[];let p,w=0,S=!1;for(;w<i;){for(p=t[w];w<i&&(a=r[w],(n=ou(a))!==void 0);)p+=n+t[++w],S=!0;w!==i&&d.push(a),c.push(p),w++}if(w===i&&c.push(t[i]),S){const x=c.join("$$lit$$");(t=bo.get(x))===void 0&&(c.raw=c,bo.set(x,t=c)),r=d}return e(t,...r)},cu=lu(N);var uu=Object.defineProperty,du=Object.getOwnPropertyDescriptor,li=(e,t,r,i)=>{for(var n=i>1?void 0:i?du(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&uu(t,r,n),n};let Nt=class extends Ge{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r){return this.values=t,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(i=>{this.resolveFn=i,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),Nt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Nt.instance===this&&(Nt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(r=>r.value.toLowerCase().includes(e));return N`
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
      ${t.length===0?N`<div class="empty">No matching values.</div>`:N`<ul>
            ${t.slice(0,500).map(r=>N`
                <li
                  class=${r.value===this.current?"selected":""}
                  @click=${()=>this.close(r.value)}
                >
                  <span class="label">${r.value||N`<em>(empty)</em>`}</span>
                  <span class="count">${r.count}</span>
                </li>
              `)}
          </ul>`}
      ${this.values.length>500?N`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button class="text" @click=${()=>this.close({clear:!0})}>Clear filter</button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};Nt.instance=null;Nt.styles=[ln,Je`
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
    `];li([Ut({type:Array})],Nt.prototype,"values",2);li([Ut({type:String})],Nt.prototype,"current",2);li([H()],Nt.prototype,"search",2);Nt=li([ot("filter-popover")],Nt);var hu=Object.defineProperty,fu=Object.getOwnPropertyDescriptor,Ht=(e,t,r,i)=>{for(var n=i>1?void 0:i?fu(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&hu(t,r,n),n};let Rt=class extends Ge{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const i of this.options)if(i.toLowerCase().includes(t)&&(r.push(i),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return N`
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
        ${this.value?N`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${r=>r.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:_e}
      </div>
      ${this.open?N`<ul class="dropdown" style=${t}>
            ${e.length===0?N`<li class="empty">No matching values.</li>`:e.map((r,i)=>N`
                    <li
                      class=${i===this.highlightIdx?"highlighted":""}
                      @mousedown=${n=>n.preventDefault()}
                      @click=${()=>this.onPick(r)}
                    >
                      ${r}
                    </li>
                  `)}
          </ul>`:_e}
    `}};Rt.styles=Je`
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
  `;Ht([Ut({type:String})],Rt.prototype,"value",2);Ht([Ut({type:Array})],Rt.prototype,"options",2);Ht([Ut({type:String})],Rt.prototype,"placeholder",2);Ht([H()],Rt.prototype,"open",2);Ht([H()],Rt.prototype,"highlightIdx",2);Ht([H()],Rt.prototype,"dropTop",2);Ht([H()],Rt.prototype,"dropLeft",2);Ht([H()],Rt.prototype,"dropMinWidth",2);Ht([H()],Rt.prototype,"editing",2);Ht([Yn("input")],Rt.prototype,"inputEl",2);Rt=Ht([ot("filter-combobox")],Rt);var pu=Object.defineProperty,mu=Object.getOwnPropertyDescriptor,ct=(e,t,r,i)=>{for(var n=i>1?void 0:i?mu(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&pu(t,r,n),n};const gu=200;let it=class extends Ge{constructor(){super(...arguments),this.tableId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;t.tableId===this.tableId&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.()}async updated(e){e.has("tableId")&&this.tableId&&(this.unsubscribe?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells()}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",bu(t))}async bind(){if(!this.tableId)return;const e=await Se(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const a=n.find(c=>c.id===this.tableId);a&&this.applyTable(a)}),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const i=window.setTimeout(()=>this.loading=!0,gu);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(i),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filters={...e.filters??{}}}async setCell(e,t,r){const i=await Se();await this.commitCell(i,e,t,r)}async commitCell(e,t,r,i){const n=this.columns.find(a=>a.field===r);if(n){const a=yu(n,i,this.rows,t.id);if(a){await e.api.ui.dialogs.alert(a,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:i},updatedAt:Date.now()})}catch(a){await e.api.ui.dialogs.alert(a?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}renderCell(e,t){const r=e.data[t.field],i=t.renderer,n=i?this.cellRenderers?.get(i):void 0;if(n){const a=au(n);return cu`<${a}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        @change=${c=>this.setCell(e,t.field,c.detail.value)}
      ></${a}>`}switch(t.type){case"boolean":return N`<input
          type="checkbox"
          .checked=${r===!0||r==="true"||r===1||r==="1"}
          @change=${c=>this.setCell(e,t.field,c.target.checked)}
        />`;case"date":return N`<input
          type="date"
          .value=${wu(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"datetime":return N`<input
          type="datetime-local"
          .value=${vu(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"number":return N`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${a=>{const c=a.target.value;this.setCell(e,t.field,c===""?null:Number(c))}}
        />`;default:return N`<input
          type="text"
          .value=${String(r??"")}
          @change=${a=>this.setCell(e,t.field,a.target.value)}
        />`}}async deleteRow(e){const t=await Se();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await Se(),i=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};await r.store.tables.patch(this.tableId,i)}filteredRows(){const e=Object.entries(this.filters).filter(([,i])=>i&&i.trim().length>0),t=this.globalQuery.trim().toLowerCase(),r=this.localQuery.trim().toLowerCase();return e.length===0&&t.length===0&&r.length===0?this.rows:this.rows.filter(i=>{const n=a=>Object.values(i.data).some(c=>c!=null&&String(c).toLowerCase().includes(a));return t.length>0&&!n(t)||r.length>0&&!n(r)?!1:e.every(([a,c])=>String(i.data[a]??"").toLowerCase().includes(c.toLowerCase()))})}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,i=this.columns.find(c=>c.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,a=[...e];return a.sort((c,d)=>{const p=c.data[t],w=d.data[t],S=W=>W==null?0:W===""?1:2,x=S(p),O=S(w);return x!==2||O!==2?(x-O)*n:xu(p,w,i)*n}),a}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,i=Nt.instance;if(!i)return;const n=new Map;for(const d of this.rowsFacetedFor(t)){const p=d.data[t];if(p==null)continue;const w=String(p);n.set(w,(n.get(w)??0)+1)}const a=[...n.entries()].map(([d,p])=>({value:d,count:p})).sort((d,p)=>p.count-d.count||d.value.localeCompare(p.value)),c=await i.open(r.getBoundingClientRect(),a,this.filters[t]??"");c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>this.saveFilters(),250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,i])=>i&&i.trim().length>0&&r!==e).map(([r,i])=>[r,i.trim().toLowerCase()]);return t.length===0?this.rows:this.rows.filter(r=>t.every(([i,n])=>String(r.data[i]??"").toLowerCase().includes(n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,i=500;for(const n of this.visibleColumns){let a=!0;for(const d of t){const p=d.data[n.field];if(p==null)continue;if((typeof p=="string"?p:String(p)).length>=r){a=!1;break}}if(!a)continue;const c=new Set;for(const d of this.rowsFacetedFor(n.field)){const p=d.data[n.field];if(p==null||p==="")continue;const w=typeof p=="string"?p:String(p);if(!(w.length>=r)&&(c.add(w),c.size>=i))break}e.set(n.field,[...c].sort())}return e}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const i=r.offsetWidth;this.resizing={field:t,startX:e.clientX,startW:i};const n=c=>{if(!this.resizing)return;const d=c.clientX-this.resizing.startX,p=Math.max(40,this.resizing.startW+d);this.columns=this.columns.map(w=>w.field===this.resizing.field?{...w,width:p}:w)},a=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",a);const c=this.resizing?.field;if(this.resizing=null,!c)return;await(await Se()).store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",a)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientX<i.left+i.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,i=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!i)return;const n=[...this.columns],a=n.findIndex(w=>w.field===r);if(a<0)return;const[c]=n.splice(a,1);let d=n.findIndex(w=>w.field===t);if(d<0){n.splice(a,0,c);return}i==="after"&&(d+=1),n.splice(d,0,c),await(await Se()).store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await Se(),t={};for(const[i,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[i]=n);const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,i=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,i+r);return{slice:e.slice(i,n),topPad:i*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows(),t=this.visibleColumns,{slice:r,topPad:i,bottomPad:n}=this.virtualSlice(e),a=this.computeFilterSuggestions(),c=this.externalLoading?this.externalProgress:null;return N`
      ${this.loading||this.externalLoading?N`<div
            class="load-bar"
            role="progressbar"
            aria-label="Loading rows"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${c!=null?Math.round(c*100):_e}
          >
            <div
              class="load-bar-fill ${c!=null?"determinate":""}"
              style=${c!=null?`width:${Math.max(2,Math.round(c*100))}%`:_e}
            ></div>
          </div>`:_e}
      <table>
        <colgroup>
          ${t.map(d=>N`<col style=${d.width!=null?`width: ${d.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(d=>{const p=this.sortColumn===d.field&&this.sortDir,w=p==="asc"?"▲":p==="desc"?"▼":"⇅",S=`t-${d.type}`,x=this.dragSourceField===d.field,O=this.dropTargetField===d.field,W=O&&this.dropEdge==="before"?" drop-before":O&&this.dropEdge==="after"?" drop-after":"";return N`
                <th
                  class=${`${S}${p?" sorted":""}${x?" drag-source":""}${W}`}
                  title=${`${d.field} — click to sort, drag to reorder`}
                  draggable="true"
                  @click=${()=>this.toggleSort(d.field)}
                  @dragstart=${L=>this.onColDragStart(L,d.field)}
                  @dragover=${L=>this.onColDragOver(L,d.field,L.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(d.field)}
                  @drop=${L=>this.onColDrop(L,d.field)}
                  @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                >
                  ${d.label}<span class="sort-icon">${w}</span>
                  <button
                    class=${`funnel${this.filters[d.field]?" active":""}`}
                    title="Filter by value"
                    @click=${L=>this.openFilterPicker(L,d.field)}
                  >
                    <span class="mi sm">filter_list</span>
                  </button>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${L=>L.stopPropagation()}
                    @pointerdown=${L=>this.onResizeStart(L,d.field,L.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:2rem"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(d=>{const p=a.get(d.field)??[];return N`
                <th>
                  <filter-combobox
                    .value=${this.filters[d.field]??""}
                    .options=${p}
                    placeholder="filter…"
                    @filter-change=${w=>this.onFilterInput(d.field,w.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${i>0?N`<tr class="spacer" style=${`height:${i}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${r.map(d=>N`
              <tr>
                ${t.map(p=>N`<td class=${`t-${p.type}${p.renderer?` r-${p.renderer}`:""}`}>
                      ${this.renderCell(d,p)}
                    </td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(d.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?N`<tr class="spacer" style=${`height:${n}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};it.styles=[ln,Je`
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
    `];ct([Ut({type:String})],it.prototype,"tableId",2);ct([H()],it.prototype,"columns",2);ct([H()],it.prototype,"rows",2);ct([H()],it.prototype,"sortColumn",2);ct([H()],it.prototype,"sortDir",2);ct([H()],it.prototype,"filters",2);ct([H()],it.prototype,"globalQuery",2);ct([H()],it.prototype,"localQuery",2);ct([H()],it.prototype,"dragSourceField",2);ct([H()],it.prototype,"dropTargetField",2);ct([H()],it.prototype,"dropEdge",2);ct([H()],it.prototype,"resizing",2);ct([H()],it.prototype,"cellRenderers",2);ct([H()],it.prototype,"scrollY",2);ct([H()],it.prototype,"viewportHeight",2);ct([H()],it.prototype,"loading",2);ct([H()],it.prototype,"externalLoading",2);ct([H()],it.prototype,"externalProgress",2);it=ct([ot("data-table")],it);function bu(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function yu(e,t,r,i){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(a=>a.id!==i&&a.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function wu(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function vu(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function xu(e,t,r){switch(r){case"number":{const i=Number(e),n=Number(t);return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const i=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function Hi(e,t,r){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:r}}))}class $u extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function da(e){return`datasette:token:${e}`}function ku(e,t){for(const[r,i]of Object.entries(t))if(r!=="data"&&e[r]!==i)return!1;return!0}function Cu(e,t){const r=e.source,i=r?.config??{},n={base:i.base,db:i.db,table:i.table,query:{}},a=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],c=r?.writable===!0,d=i.maxRows??1e4,p=i.pollIntervalMs??0,w=(ie,he)=>t.backend.fetch(ie,he);async function S(){const he=(await t.settings.findOne(da(i.base)))?.value;return typeof he=="string"&&he.length>0?he:void 0}const x=async(ie,he)=>ai(w,await S())(ie,he);function O(ie){return{id:Zc(ie,a)??Eu(),tableId:e.id,data:ie,updatedAt:Date.now()}}function W(ie){if(!c)throw new $u(ie)}function L(ie){const he={};for(const[be,ye]of Object.entries(ie))a.includes(be)||(he[be]=ye);return he}const U=new Set;let oe=[],de=!1,xe=null;function Fe(){return xe||(xe=(async()=>{try{const{rows:ie}=await si(x,n,{maxRows:d});oe=ie.map(O),de=!0;for(const he of U)he(oe);return oe}finally{xe=null}})(),xe)}return{async find(ie){const he=de?oe:await Fe();return!ie||Object.keys(ie).length===0?he:he.filter(be=>ku(be,ie))},async findOne(ie){return(de?oe:await Fe()).find(be=>be.id===ie)??null},async insert(ie){W("insert");const[he]=await mo(x,n,[ie.data]),be=O(he??ie.data);return t.events.emit("row:created",{tableId:e.id,row:be}),Fe(),be},async bulkInsert(ie){if(ie.length===0)return[];W("insert");const he=await mo(x,n,ie.map(ye=>ye.data)),be=(he.length?he:ie.map(ye=>ye.data)).map(O);return Fe(),be},async upsert(ie){W("upsert");const[he]=await iu(x,n,[ie.data]),be=O(he??ie.data);return Fe(),be},async patch(ie,he){W("update");const be=he.data,ye=L(be??{}),ft=await ru(x,n,ie,ye),$t=O(ft??{...be??{}});return t.events.emit("row:updated",{tableId:e.id,row:$t,prev:$t}),Fe(),$t},async remove(ie){W("delete"),await go(x,n,ie),t.events.emit("row:deleted",{tableId:e.id,rowId:ie}),Fe()},async bulkRemove(ie){if(ie.length!==0){W("delete");for(const he of ie)await go(x,n,he);Fe()}},subscribe(ie){U.add(ie),de?ie(oe):Fe();let he=null;return p>0&&(he=setInterval(()=>void Fe(),p)),()=>{U.delete(ie),he&&clearInterval(he)}},async refresh(){await Fe()}}}function Eu(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Su=Object.defineProperty,_u=Object.getOwnPropertyDescriptor,wr=(e,t,r,i)=>{for(var n=i>1?void 0:i?_u(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Su(t,r,n),n};const Au="https://latest.datasette.io/ephemeral";let zt=class extends Ge{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();t&&this.finish({url:t,token:this.token.trim()})}}connectedCallback(){super.connectedCallback(),zt.instance=this}disconnectedCallback(){super.disconnectedCallback(),zt.instance===this&&(zt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return N`
      <dialog @cancel=${this.onCancel} @keydown=${xn}>
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
                placeholder="e.g. ${Au}"
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
    `}};zt.instance=null;zt.styles=[Zt,Je`
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
    `];wr([H()],zt.prototype,"url",2);wr([H()],zt.prototype,"token",2);wr([H()],zt.prototype,"status",2);wr([H()],zt.prototype,"statusKind",2);zt=wr([ot("datasette-connect-dialog")],zt);const Zi=e=>e.replace(/^https?:\/\//,"");async function ha(e,t,r,i={}){if(t.db&&t.table)return[{db:t.db,table:t.table,count:null,hidden:!1,pks:[]}];let n=[];if(t.db){for(const d of await po(e,t.base,t.db))d.hidden||n.push(d);if(i.skipPicker)return n}else{const d=await ia(e,t.base);if(d.length===0)return[];let p=d;if(d.length>1){const w=await Ji(d.map(S=>({name:S,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${Zi(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!w)return null;p=w.map(S=>d[S])}for(const w of p)try{for(const S of await po(e,t.base,w))S.hidden||n.push(S)}catch{}}if(n.length===0)return[];const a=new Set(n.map(d=>d.db)).size>1,c=await Ji(n.map(d=>({name:a?`${d.db}/${d.table}`:d.table,size:d.count,detail:a?void 0:d.db})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${Zi(t.base)}.`,confirmLabel:r});return c?c.map(d=>n[d]):null}const Pu='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Tu={name:"datasette-source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"easyDBAccess built-ins",optional:!0},jn={maxImportRows:1e4,pageSize:1e3},Du="https://latest.datasette.io/fixtures/facetable";function ju(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:Pu,tooltip:"Connect a live, editable Datasette table",onClick:()=>Lu(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>qu(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:Cu}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const i=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Du}`,"","Import from Datasette");i&&await yo(t,i)}}),e.ui.registerDropHandler(async(t,r)=>{const i=t.dataTransfer?.getData("text/plain")||"";return Ru(i)?(t.preventDefault(),await yo(r,i),!0):!1})}async function yo(e,t){try{await ps(e,t)}catch(r){let i;r instanceof Gt?i=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:i=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(i,"Datasette import failed")}}function Ru(e){try{const t=Ln(e);return!!(t.db&&t.table)}catch{return!1}}function Ou(e,t){if(!e.has(t))return t;for(let r=2;;r++){const i=`${t} (${r})`;if(!e.has(i))return i}}async function ps(e,t,r={}){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=Ln(t),c=await ha(W=>e.backend.fetch(W),n,"Import",{skipPicker:r.skipTablePicker});if(c===null)return;if(c.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const d=[];let p=0;for(const W of c){const L={base:n.base,db:W.db,table:W.table,query:{}},U=await Fu(e,i,L);if(U.skipped){p+=1;continue}d.push({tableId:U.tableId,ref:L,overwrite:U.overwrite})}let w=0,S=0;const x=[],O=[];for(const W of d)try{const L=await Iu(e,W.tableId,W.ref,W.overwrite);w+=1,S+=L.rowCount,(L.hasMore||L.truncated)&&x.push(`${W.ref.db}/${W.ref.table}`)}catch(L){O.push(`${W.ref.db}/${W.ref.table}: ${L?.message??String(L)}`)}zu(e,{imported:w,skipped:p,totalRows:S,capped:x,failed:O,requested:c.length})}async function Fu(e,t,r){const i=`${r.db}/${r.table}`,n={type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},a=(await e.store.tables.find()).filter(w=>w.workspaceId===t),c=a.find(w=>w.name===i);let d=i;if(c){const w=await e.ui.dialogs.choice(`A table named "${i}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!w||w==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(w==="Overwrite")return await e.store.tables.patch(c.id,{origin:n,updatedAt:Date.now()}),{tableId:c.id,overwrite:!0};d=Ou(new Set(a.map(S=>S.name)),i)}const p=ci();return await e.store.tables.insert({id:p,workspaceId:t,name:d,code:pa(`${r.db}-${r.table}`),columns:[],view:"table",origin:n,updatedAt:Date.now()}),{tableId:p,overwrite:!1}}async function Iu(e,t,r,i){const n=`${r.db}/${r.table}`,a=c=>e.backend.fetch(c);Hi(t,!0);try{let c=[],d=null,p=!1;try{const xe=await sa(a,r);c=xe.columns,d=xe.count,p=xe.typed}catch{}const w=d&&d>0?Math.min(d,jn.maxImportRows):0,{rows:S,truncated:x,hasMore:O,pages:W}=await si(a,r,{maxRows:jn.maxImportRows,pageSize:jn.pageSize,onProgress:xe=>{w>0&&Hi(t,!0,Math.min(1,xe/w))}}),L=c.length===0?fs(S):p?c:oa(c,S),U=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t}),await e.store.tables.patch(t,{columns:L,updatedAt:U});const oe=e.store.rows(t);if(i){const xe=await oe.find();await oe.bulkRemove(xe.map(Fe=>Fe.id))}const de=S.map(xe=>({id:ci(),tableId:t,data:xe,updatedAt:U}));return await oe.bulkInsert(de),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:S.length}),{name:n,rowCount:S.length,hasMore:O,truncated:x,pages:W,count:d}}finally{Hi(t,!1)}}function zu(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,i=`${t.imported} table${t.imported===1?"":"s"}`,n=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${i} (${r});${n} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.capped.length} capped at ${jn.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${i} (${r}) from Datasette.${n}`,{kind:"success",title:"Datasette import"})}async function Lu(e){const t=zt.instance??Bu(),r=(n,a)=>e.backend.fetch(n,a),i=await t.open({initialUrl:"https://datasette.io",async onTest(n,a){const c=Ln(n),d=await ca(r,c.base,{token:a||void 0});if(!d.reachable)return`Unreachable: ${d.error??"no response"}`;const p=d.version?` (Datasette ${d.version})`:"";return d.writable?`Reachable${p} — signed in, read-write.`:`Reachable${p} — read-only (no token / not authenticated).`}});if(i)try{await fa(e,i.url,i.token)}catch(n){const a=n instanceof Gt?n.message:n?.message??String(n);await e.ui.dialogs.alert(a,"Connect Datasette failed")}}function Bu(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function fa(e,t,r){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=Ln(t),a=(x,O)=>e.backend.fetch(x,O),c=ai(a,r||void 0),d=await ca(a,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:da(n.base),value:r});let p;try{p=await ha(c,n,"Connect")}catch(x){const O=x instanceof Gt?x.message:x?.message??String(x);throw new Error(`Couldn't read tables from ${Zi(n.base)}: ${O}`)}if(p===null)return;if(p.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const w=[];for(const x of p){const O=await Mu(e,i,n.base,x,d.writable,r);w.push({tableId:O,c:x})}const S=d.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${w.length} live table${w.length===1?"":"s"} from Datasette (${S}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:x,c:O}of w)Nu(e,x,n.base,O,r)}async function Mu(e,t,r,i,n,a){const c=(await e.store.tables.find()).find(S=>{const x=S.source?.config;return S.workspaceId===t&&S.source?.type==="datasette"&&x?.base===r&&x?.db===i.db&&x?.table===i.table});let d=i.pks??[];if(d.length===0){const S=ai((x,O)=>e.backend.fetch(x,O),a||void 0);try{d=await su(S,{base:r,db:i.db,table:i.table,query:{}})}catch{d=[]}}const p=c?.id??ci(),w={...c??{},id:p,workspaceId:t,name:`${i.db}/${i.table}`,code:pa(`${i.db}-${i.table}`),columns:c?.columns??[],view:c?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:i.db,table:i.table,pks:d}},updatedAt:Date.now()};return c?await e.store.tables.upsert(w):await e.store.tables.insert(w),p}async function Nu(e,t,r,i,n){const a={base:r,db:i.db,table:i.table,query:{}},c=ai((d,p)=>e.backend.fetch(d,p),n||void 0);try{let d=[],p=!1;try{const L=await sa(c,a);d=L.columns,p=L.typed}catch{}const{rows:w}=await si(c,a,{maxRows:50,pageSize:50}),S=d.length===0?fs(w):p?d:oa(d,w);if(S.length===0)return;const x=await e.store.tables.findOne(t);if(!x)return;const O=x.source?.config?.pks??[],W=S.map(L=>O.includes(L.field)?{...L,unique:!0,notnull:!0}:L);await e.store.tables.patch(t,{columns:W,updatedAt:Date.now()})}catch{}}async function qu(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const i=e.store.rows(t);typeof i.refresh=="function"&&await i.refresh();const n=await i.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await Uu(e,r)}catch(i){const n=i instanceof Gt?i.message:i?.message??String(i);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function Uu(e,t){const r=Ln(t.origin.url),i=x=>e.backend.fetch(x),{rows:n,hasMore:a,truncated:c}=await si(i,r,{maxRows:jn.maxImportRows,pageSize:jn.pageSize}),d=Date.now(),p=e.store.rows(t.id),w=await p.find();await p.bulkRemove(w.map(x=>x.id)),await p.bulkInsert(n.map(x=>({id:ci(),tableId:t.id,data:x,updatedAt:d}))),await e.store.tables.patch(t.id,{updatedAt:d});const S=a||c?` (capped at ${jn.maxImportRows})`:"";e.ui.dialogs.toast(`Refreshed ${n.length} rows from ${r.db}/${r.table}${S}.`,{kind:a||c?"warning":"success",title:"Refresh"})}function pa(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function ci(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Hu=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:fa,importDatasette:ps,init:ju,meta:Tu},Symbol.toStringTag,{value:"Module"})),Wu={name:"dump-export",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"easyDBAccess built-ins"};function Ku(e){e.ui.registerFooterButton({id:"dump-export:dump",label:"Dump",icon:"archive",tooltip:"Export the current workspace as a JSON dump file",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await ui(e);await e.backend.saveFile(`workspace-${t}.db.json`,r,"application/json")}})}async function ui(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i={workspaceId:t,exportedAt:Date.now(),tables:[]};for(const n of r){const a=await e.store.rows(n.id).find();i.tables.push({name:n.name,columns:n.columns,rows:a.map(c=>c.data),...n.windowGeometry?{windowGeometry:n.windowGeometry}:{},...n.sortColumn?{sortColumn:n.sortColumn,sortAsc:n.sortAsc??!0}:{},...n.source?{source:n.source}:{},...n.origin?{origin:n.origin}:{}})}return JSON.stringify(i,null,2)}const Vu=Object.freeze(Object.defineProperty({__proto__:null,init:Ku,meta:Wu,serializeWorkspace:ui},Symbol.toStringTag,{value:"Module"})),Yu={name:"sql-export",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"easyDBAccess built-ins"};function Xu(e){e.ui.registerFooterButton({id:"sql-export:dump",label:"SQL",icon:"storage",tooltip:"Export the current workspace as a .sql script",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await ma(e);await e.backend.saveFile(`workspace-${t}.sql`,r,"application/sql")}})}async function ma(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const a=await e.store.rows(n.id).find();i.push(Gu(n,a),"")}return i.push("COMMIT;",""),i.join(`
`)}function Gu(e,t){const r=es(e.code||e.name||`table_${e.id}`),i=['  "__id" TEXT PRIMARY KEY',...e.columns.map(a=>`  ${Qu(a)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,i.join(`,
`),");"];if(t.length>0){const c=["__id",...e.columns.map(d=>d.field)].map(d=>`"${es(d)}"`).join(", ");for(const d of t){const p=[wo(d.id),...e.columns.map(w=>wo(d.data[w.field],w.type))];n.push(`INSERT INTO "${r}" (${c}) VALUES (${p.join(", ")});`)}}return n.join(`
`)}function Qu(e){const t=[`"${es(e.field)}"`,Ju(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function Ju(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function wo(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=Zu(e);return r===null?"NULL":Wr(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?Wr(e.toISOString()):Wr(typeof e=="string"?e:JSON.stringify(e))}function Zu(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?vo(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const i=new Date(t);return Number.isFinite(i.getTime())?vo(i):null}return null}function vo(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),i=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${i}`}function Wr(e){return`'${e.replace(/'/g,"''")}'`}function es(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const ed=Object.freeze(Object.defineProperty({__proto__:null,init:Xu,meta:Yu,serializeWorkspaceAsSql:ma},Symbol.toStringTag,{value:"Module"})),td={name:"gist-sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"easyDBAccess built-ins"},nd="gist:";function rd(e){e.ui.registerFooterButton({id:"gist-sync:push",label:"Push",icon:"cloud_upload",tooltip:"Push the current workspace to a GitHub Gist",onClick:async()=>{try{await od(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerFooterButton({id:"gist-sync:pull",label:"Pull",icon:"cloud_download",tooltip:"Pull the latest tables from the configured Gist",onClick:async()=>{try{await ad(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}})}async function ga(e){const t=e.workspaceId();return`${nd}${t??"default"}`}async function id(e){const t=await ga(e),r=await e.store.settings.findOne(t);if(!r)return null;const i=r.value;return!i||!i.token||!i.user?null:{user:i.user,gistId:i.gistId??"",token:i.token}}async function ba(e,t){const r=await ga(e);await e.store.settings.upsert({key:r,value:t})}function sd(e){const t={};for(const r of e.split(";")){const i=r.indexOf("=");if(i<0)continue;const n=r.slice(0,i).trim(),a=r.slice(i+1).trim();n&&(t[n]=a)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function ya(e){const t=await id(e);if(t)return t;const r=await e.ui.dialogs.prompt(`Connection string format:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,"","Gist credentials");if(!r)return null;const i=sd(r);return i?(await ba(e,i),i):(await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist credentials"),null)}async function od(e){const t=await ya(e);if(!t)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=(await e.store.tables.find()).filter(p=>p.workspaceId===r);if(i.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const n={},a=[];for(const p of i){const w=await e.store.rows(p.id).find(),S=JSON.stringify(ld(p,w),null,2);S.length>1e8&&a.push(`${p.name} (${(S.length/1e6).toFixed(2)} MB)`),n[`${wa(p.name)}.table.json`]={content:S}}if(a.length>0&&!await e.ui.dialogs.confirm(`These tables exceed Gist's 100 MB-per-file limit and will be rejected:

${a.join(`
`)}

Push anyway?`,"Gist size warning"))return;n["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1"},null,2)};let c;if(t.gistId){const p=await fetch(`https://api.github.com/gists/${t.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:n,description:`easyDBAccess workspace: ${r}`})});if(!p.ok)throw new Error(await ts(p));c=await p.json()}else{const p=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:n})});if(!p.ok)throw new Error(await ts(p));c=await p.json(),t.gistId=c.id,await ba(e,t)}const d=c.html_url??`https://gist.github.com/${t.user}/${c.id}`;e.ui.dialogs.toast(`Pushed ${i.length} table${i.length===1?"":"s"}.  ${d}`,{kind:"success",title:"Gist sync"})}async function ad(e){const t=await ya(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!i.ok)throw new Error(await ts(i));const n=await i.json(),a=Object.entries(n.files).filter(([w])=>w.endsWith(".table.json")&&!w.startsWith("_easydb"));if(a.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const c=(await e.store.tables.find()).filter(w=>w.workspaceId===r),d=new Map(c.map(w=>[w.name,w]));let p=0;for(const[,w]of a){const S=JSON.parse(w.content);if(!S.name||!Array.isArray(S.columns))continue;let x;const O=d.get(S.name);if(O){x=await e.store.tables.patch(O.id,{columns:S.columns,updatedAt:Date.now()});const L=e.store.rows(O.id),U=await L.find();await L.bulkRemove(U.map(oe=>oe.id))}else x=await e.store.tables.insert({id:xo(),workspaceId:r,name:S.name,code:wa(S.name),columns:S.columns,view:"table",updatedAt:Date.now()});const W=(S.rows??[]).map(L=>({id:xo(),tableId:x.id,data:L,updatedAt:Date.now()}));await e.store.rows(x.id).bulkInsert(W),p++}e.ui.dialogs.toast(`Pulled ${p} table${p===1?"":"s"} from gist ${t.gistId}.`,{kind:"success",title:"Gist sync"})}function ld(e,t){return{name:e.name,columns:e.columns,rows:t.map(r=>r.data)}}async function ts(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function wa(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function xo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const cd=Object.freeze(Object.defineProperty({__proto__:null,init:rd,meta:td},Symbol.toStringTag,{value:"Module"})),va="server-sync:url";function xa(e){return`server-sync:etag:${e}`}async function $a(e){const r=(await e.store.settings.findOne(va))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function ud(e,t){await e.store.settings.upsert({key:va,value:t.replace(/\/+$/,"")})}async function ka(e,t){const i=(await e.store.settings.findOne(xa(t)))?.value;return typeof i=="string"?i:null}async function In(e,t,r){await e.store.settings.upsert({key:xa(t),value:r})}function di(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function $o(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function Ca(e,t,r){const i=br(r,t),n=(await e.store.tables.find()).filter(c=>c.workspaceId===t);for(const c of n){const d=e.store.rows(c.id),p=await d.find();await d.bulkRemove(p.map(w=>w.id)),await e.store.tables.remove(c.id)}let a=0;for(const c of i){const d=ko(),p=await e.store.tables.insert({id:d,workspaceId:t,name:c.name,code:dd(c.name),columns:c.columns,view:"table",...c.windowGeometry?{windowGeometry:c.windowGeometry}:{},...c.sortColumn?{sortColumn:c.sortColumn,sortAsc:c.sortAsc??!0}:{},updatedAt:Date.now()}),w=c.rows.map(S=>({id:ko(),tableId:p.id,data:S,updatedAt:Date.now()}));await e.store.rows(p.id).bulkInsert(w),a++}return a}function dd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function ko(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const hd={name:"server-sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"easyDBAccess built-ins"};function fd(e){e.ui.registerFooterButton({id:"server-sync:push",label:"Sync ↑",icon:"cloud_sync",tooltip:"Push this workspace to the configured server",onClick:async()=>{try{await pd(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Server sync"})}}}),e.ui.registerFooterButton({id:"server-sync:pull",label:"Sync ↓",icon:"cloud_sync",tooltip:"Pull this workspace from the configured server",onClick:async()=>{try{await md(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Server sync"})}}})}async function pd(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Ea(e);if(!r)return;const i=await ui(e),n=await ka(e,t),a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);let c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:a,body:i});if(c.status===412){const p=await c.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){p.currentEtag&&await In(e,t,p.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:i})}if(!c.ok)throw new Error(await Sa(c));const d=di(c.headers.get("ETag"));d&&await In(e,t,d),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function md(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Ea(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await Sa(n));const a=di(n.headers.get("ETag")),c=await n.json(),d=await Ca(e,t,c);a&&await In(e,t,a),e.ui.dialogs.toast(`Pulled ${d} table${d===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function Ea(e){const t=await $a(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await ud(e,r),r.replace(/\/+$/,"")}async function Sa(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const gd=Object.freeze(Object.defineProperty({__proto__:null,init:fd,meta:hd},Symbol.toStringTag,{value:"Module"})),bd={name:"new-table",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"easyDBAccess built-ins"};function yd(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const wd=Object.freeze(Object.defineProperty({__proto__:null,init:yd,meta:bd},Symbol.toStringTag,{value:"Module"})),vd={name:"plugin-manager-button",version:"0.1.0",description:"Registers a footer button that opens the Plugin Manager dialog.",author:"easyDBAccess built-ins"};function xd(e){e.ui.registerFooterButton({id:"plugin-manager:open",label:"Plugins",icon:"extension",tooltip:"Add, disable, or remove plugins",onClick:()=>e.ui.openPluginManager()})}const $d=Object.freeze(Object.defineProperty({__proto__:null,init:xd,meta:vd},Symbol.toStringTag,{value:"Module"})),kd={name:"core-renderers",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"easyDBAccess built-ins"};function Cd(e){customElements.get("cell-date")||customElements.define("cell-date",Ed),customElements.get("cell-datetime")||customElements.define("cell-datetime",Sd),customElements.get("cell-boolean")||customElements.define("cell-boolean",_d),customElements.get("cell-script")||customElements.define("cell-script",Pd),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class Ed extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="date",t.value=Dd(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Sd extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="datetime-local",t.value=jd(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class _d extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="checkbox",t.checked=Ad(this._value),t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Ad(e){return e===!0||e==="true"||e===1||e==="1"}class Pd extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const a=document.createElement("span");a.textContent="(no script)",a.style.cssText="color:#9ca3af;font-style:italic",this.append(a);return}let r;try{r=Td(t)}catch(a){this.append(Wi("compile error",a));return}let i;try{i=r(this._row)}catch(a){this.append(Wi("runtime error",a));return}if(typeof i!="string"){this.append(Wi("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=i,this.append(n)}}const Co=new Map;function Td(e){const t=Co.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return Co.set(e,r),r}function Wi(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const i=t instanceof Error?t.message:String(t);r.title=i}return r}function Dd(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function jd(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const Rd=Object.freeze(Object.defineProperty({__proto__:null,init:Cd,meta:kd},Symbol.toStringTag,{value:"Module"})),Od={name:"cell-color",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"easyDBAccess built-ins"};function Fd(e){customElements.get("cell-color")||customElements.define("cell-color",Id),e.ui.registerCellRenderer("color","cell-color")}class Id extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,i){this.value=i}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const zd=Object.freeze(Object.defineProperty({__proto__:null,init:Fd,meta:Od},Symbol.toStringTag,{value:"Module"})),Ld={name:"cell-image",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"easyDBAccess built-ins"};function Bd(e){customElements.get("cell-image")||customElements.define("cell-image",Md),e.ui.registerCellRenderer("image","cell-image")}class Md extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const i=document.createElement("img");i.src=this._value,i.alt="",i.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(i)}else{const i=document.createElement("span");i.style.color="#9ca3af",i.textContent="no image",t.append(i);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const i=new FileReader;i.onload=()=>this.commit(String(i.result)),i.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Nd=Object.freeze(Object.defineProperty({__proto__:null,init:Bd,meta:Ld},Symbol.toStringTag,{value:"Module"})),qd={name:"cell-link",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"easyDBAccess built-ins"};function Ud(e){customElements.get("cell-link")||customElements.define("cell-link",Hd),e.ui.registerCellRenderer("link","cell-link")}class Hd extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:Wd(t),i=!this._editing&&!r?Kd(t):null,n=!this._editing&&!r&&!i?Vd(t):null;if(r||i||n){const a=document.createElement("span");a.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const c=document.createElement("a");c.href=r?t:i?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(c.target="_blank",c.rel="noopener noreferrer"),c.textContent=t,c.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",c.title=r?`Open ${t}`:i?`Email ${t}`:`Call ${t}`;const d=document.createElement("button");d.type="button",d.title="Edit",d.textContent="✎",d.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",d.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),this._editing=!0,this.render()}),a.append(c,d),this.append(a)}else{const a=document.createElement("input");a.type="text",a.value=t,a.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",a.addEventListener("change",()=>this.commit(a.value)),a.addEventListener("keydown",c=>{c.key==="Enter"?(c.preventDefault(),this.commit(a.value)):c.key==="Escape"&&(this._editing=!1,this.render())}),this.append(a),this._editing&&setTimeout(()=>{a.focus(),a.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Wd(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function Kd(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function Vd(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const i=/[ ()\-.]/.test(t),n=t.startsWith("+");return!i&&!n&&r.length<10?null:t}const Yd=Object.freeze(Object.defineProperty({__proto__:null,init:Ud,meta:qd},Symbol.toStringTag,{value:"Module"}));var Xd=Object.defineProperty,Gd=Object.getOwnPropertyDescriptor,_a=(e,t,r,i)=>{for(var n=i>1?void 0:i?Gd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Xd(t,r,n),n};function Qd(e){return(an.instance??Jd()).open(e)}function Jd(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let an=class extends Ge{constructor(){super(...arguments),this.rows=[],this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((r,i)=>{const n=this.rows[i].field.trim(),a=this.rows[i].label.trim()||n;return{...r,field:n,label:a}});this.finish(t)}}connectedCallback(){super.connectedCallback(),an.instance=this}disconnectedCallback(){super.disconnectedCallback(),an.instance===this&&(an.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}open(e){return this.source=e,this.rows=e.map(t=>({field:t.field,label:t.label})),new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((r,i)=>{const n=r.field.trim().toLowerCase();if(n===""){e.add(i);return}(t.get(n)??t.set(n,[]).get(n)).push(i)});for(const r of t.values())if(r.length>1)for(const i of r)e.add(i);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,r){this.rows=this.rows.map((i,n)=>n===e?{...i,[t]:r}:i)}render(){const e=this.invalidIndices(),t=e.size;return N`
      <dialog @cancel=${this.onCancel} @keydown=${xn}>
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
              ${this.rows.map((r,i)=>N`
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
              ${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:_e}
            </p>
          </div>
        </form>
      </dialog>
    `}};an.instance=null;an.styles=[Zt,Je`
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
    `];_a([H()],an.prototype,"rows",2);an=_a([ot("column-names-dialog")],an);var Zd=Object.defineProperty,eh=Object.getOwnPropertyDescriptor,cn=(e,t,r,i)=>{for(var n=i>1?void 0:i?eh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Zd(t,r,n),n};const th="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",nh="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",rh='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',Eo=[{label:"Northwind — sample database (JSON dump)",url:th,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:nh,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],ih={name:"import-data",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"easyDBAccess built-ins",optional:!0};function sh(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:rh,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>lh(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:r})=>oh(t,r)})}async function oh(e,t){const r=await e.store.tables.findOne(t),i=r?.origin;if(i?.url)try{const n=await e.backend.fetch(i.url);if(!n.ok)throw new Error(`HTTP ${n.status} ${n.statusText}`);const a=await n.text();let c;if(i.type==="csv")c=gr(a).rows;else{const w=br(JSON.parse(a),r.name),S=w.find(x=>x.name===r.name)??(w.length===1?w[0]:void 0);if(!S)throw new Error(`"${r.name}" is no longer in the dump at ${i.url}`);c=S.rows}const d=e.store.rows(t),p=await d.find();await d.bulkRemove(p.map(w=>w.id)),await d.bulkInsert(c.map(w=>({id:ah(),tableId:t,data:w,updatedAt:Date.now()}))),e.ui.dialogs.toast(`Refreshed "${r.name}" (${c.length} rows).`,{kind:"success",title:"Refresh"})}catch(n){e.ui.dialogs.toast(`Couldn't refresh "${r?.name??t}": ${n.message}`,{kind:"error",title:"Refresh"})}}function ah(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function lh(e){const r=await(pt.instance??ch()).open({async listDatabases(d){const p=Ln(d);return ia(w=>e.backend.fetch(w),p.base)}});if(!r)return;const{url:i,kind:n,dbChosen:a,editColumns:c}=r;try{if(n==="datasette")await ps(e,i,{skipTablePicker:a});else if(n==="csv"){const d=await e.backend.fetch(i);if(!d.ok)throw new Error(`HTTP ${d.status} ${d.statusText}`);const p=await d.text();await us(e,p,Kr(i),{editColumns:c?Qd:void 0,origin:{type:"csv",url:i}}),e.ui.dialogs.toast(`Imported ${Kr(i)}.`,{kind:"success",title:"Import"})}else{const d=await e.backend.fetch(i);if(!d.ok)throw new Error(`HTTP ${d.status} ${d.statusText}`);const p=await d.text();await hs(e,p,Kr(i),{originUrl:i}),e.ui.dialogs.toast(`Imported ${Kr(i)}.`,{kind:"success",title:"Import"})}}catch(d){e.ui.dialogs.toast(`Could not import ${i}: ${d.message}`,{kind:"error",title:"Import"})}}function ch(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function uh(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),i=[...t.searchParams.keys()].some(a=>a.startsWith("_")),n=r.includes("datasette")||i;return!i&&/\.csv$/i.test(t.pathname)?"csv":!i&&/\.json$/i.test(t.pathname)?"json":n?"datasette":"json"}catch{return"json"}}function So(e,t){if(t!=="datasette"||!e)return!1;try{const r=Ln(e);return!r.db&&!r.table}catch{return!1}}function Kr(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}let pt=class extends Ge{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.resolvedKind,i=r==="datasette"&&!!this.selectedDb&&So(t,r),n=i?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t,a=r==="csv"&&this.editColumns;this.finish({url:n,kind:r,dbChosen:i,editColumns:a})}}get resolvedKind(){return this.kind==="auto"?uh(this.url.trim()):this.kind}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),pt.instance=this}disconnectedCallback(){super.disconnectedCallback(),pt.instance===this&&(pt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.editColumns=!1,this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=Eo[t];r&&(this.url=r.url,this.kind=r.kind)}renderDbPicker(){return!this.listDatabases||!So(this.url.trim(),this.resolvedKind)?_e:N`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?N`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>N`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:N`<option value="">— not loaded —</option>`}
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
      ${this.dbError?N`<p class="hint error">${this.dbError}</p>`:_e}
    `}render(){return N`
      <dialog @cancel=${this.onCancel} @keydown=${xn}>
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
                ${Eo.map((e,t)=>N`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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

            ${this.resolvedKind==="csv"?N`<label class="check">
                  <input
                    type="checkbox"
                    .checked=${this.editColumns}
                    @change=${e=>this.editColumns=e.target.checked}
                  />
                  Edit columns before import (rename / fix duplicate names)
                </label>`:_e}

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
      ${_e}
    `}};pt.instance=null;pt.styles=[Zt,Je`
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
    `];cn([H()],pt.prototype,"url",2);cn([H()],pt.prototype,"kind",2);cn([H()],pt.prototype,"presetIdx",2);cn([H()],pt.prototype,"dbList",2);cn([H()],pt.prototype,"dbLoading",2);cn([H()],pt.prototype,"dbError",2);cn([H()],pt.prototype,"selectedDb",2);cn([H()],pt.prototype,"editColumns",2);pt=cn([ot("import-dialog")],pt);const dh=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return pt},init:sh,meta:ih},Symbol.toStringTag,{value:"Module"})),hh={name:"auto-sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"easyDBAccess built-ins",optional:!0},fh=6e4;let _o=null,ns=!1;const Ki=new Map;function ph(e){_o===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(_o=setInterval(()=>{Aa(e)},fh)))}async function Aa(e){if(ns)return;const t=e.workspaceId();if(!t)return;const r=await $a(e);if(r)try{await mh(e,r,t)}catch(i){console.warn("[auto-sync]",i)}}async function mh(e,t,r){const i=await ui(e),n=await ka(e,r),a=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(a.status===404){await Ao(e,t,r,i,null);return}if(!a.ok)return;const c=di(a.headers.get("ETag")),d=await a.text();if($o(i)===$o(d)){c&&c!==n&&await In(e,r,c);return}if(c&&c===n){await Ao(e,t,r,i,n);return}if(!(c&&Ki.get(r)===c)){ns=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const w=JSON.parse(d),S=await Ca(e,r,w);c&&await In(e,r,c),Ki.delete(r),e.ui.dialogs.toast(`Pulled ${S} table${S===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else c&&Ki.set(r,c)}finally{ns=!1}}}async function Ao(e,t,r,i,n){const a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);const c=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:a,body:i});if(c.ok){const d=di(c.headers.get("ETag"));d&&await In(e,r,d);return}if(c.status===412){const d=await c.json().catch(()=>({}));d.currentEtag&&await In(e,r,d.currentEtag)}}const Pa=Object.freeze(Object.defineProperty({__proto__:null,load:ph,meta:hh,tick:Aa},Symbol.toStringTag,{value:"Module"}));/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let F={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&F.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let i=arguments[r];if(i==null)continue;i=Object(i);let n=Object.keys(Object(i));for(let a=0,c=n.length;a<c;a++){let d=n[a],p=Object.getOwnPropertyDescriptor(i,d);p!==void 0&&p.enumerable&&(t[d]=i[d])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,i=new Array(r);r--;)i[r]=[t[r],e[t[r]]];return i}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),i=document.createDocumentFragment();r.forEach(function(n){let a=n instanceof Node;i.appendChild(a?n:document.createTextNode(String(n)))}),this.appendChild(i)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,i=this;do for(r=t.length;--r>=0&&t.item(r)!==i;);while(r<0&&(i=i.parentElement));return i}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let i=document.createEvent("CustomEvent");return i.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),i}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),i=r.length>>>0;if(i===0)return!1;let n=t|0,a=Math.max(n>=0?n:i-Math.abs(n),0);function c(d,p){return d===p||typeof d=="number"&&typeof p=="number"&&isNaN(d)&&isNaN(p)}for(;a<i;){if(c(r[a],e))return!0;a++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>F.modifier=e),document.addEventListener("keyup",()=>F.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const i=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(i===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(i),a=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-a)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(i===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(i),a=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-a)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((i,n)=>{(i.startsWith("--")||i.startsWith("var"))&&(r[n]=F.getCssVariableValue(i))}),r.forEach(i=>{F.colorNames[i]?t[2]="#"+F.colorNames[i]:i.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=i:i.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=i:t[2]=i}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),i=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return i&&(t.size=i[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let i=e.indexOf(")");t=e.slice(0,i+1).replace(/\s+/g,""),t.startsWith("var")&&(t=F.getCssVariableValue(t)),r=e.slice(i+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let i=e.indexOf(" ");i>0?(t=e.slice(0,i+1).replace(/\s+/g,""),r=e.slice(i+1,e.length).trim()):t=e,t.startsWith("--")&&(t=F.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let i=r.indexOf(" ");r=r.slice(i+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:F.colorNames[r]?r="#"+F.colorNames[r]:r.match(/^(--|var)/)?r=F.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,i,n,a,c,d,p,w,S,x={};const O=/^#?([\da-f]{3}|[\da-f]{6})$/gi,W=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,L=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,U=this.colorNames;return U[t]&&(t=U[t]),t.match(O)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),i=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),x.rgb={r:parseInt(r,16),g:parseInt(i,16),b:parseInt(n,16)},x.hex=`#${r}${i}${n}`):(x.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},x.hex=`#${t}`),S=this.rgbToHsl(x.rgb.r,x.rgb.g,x.rgb.b),x.hsl=S,x.rgb.css=`rgb(${x.rgb.r},${x.rgb.g},${x.rgb.b})`):t.match(W)?(p=W.exec(t),x.rgb={css:t,r:p[1],g:p[2],b:p[3]},x.hex=this.rgbToHex(p[1],p[2],p[3]),S=this.rgbToHsl(p[1],p[2],p[3]),x.hsl=S):t.match(L)?(p=L.exec(t),a=p[1]/360,c=p[2].slice(0,p[2].length-1)/100,d=p[3].slice(0,p[3].length-1)/100,w=this.hslToRgb(a,c,d),x.rgb={css:`rgb(${w[0]},${w[1]},${w[2]})`,r:w[0],g:w[1],b:w[2]},x.hex=this.rgbToHex(x.rgb.r,x.rgb.g,x.rgb.b),x.hsl={css:`hsl(${p[1]},${p[2]},${p[3]})`,h:p[1],s:p[2],l:p[3]}):(x.hex="#f5f5f5",x.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},x.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),x},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),i=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),a=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(i)<=t?"#ffffff":"#000000",d=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",p=this.lighten(e,this.colorFilledDark),w=this.perceivedBrightness(p)<=t?"#ffffff":"#000000";return[r.hsl.css,i,n,a,c,d,p,w]},darken(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i-i*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i+(100-i)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let i,n,a;if(t===0)i=n=a=r;else{let c=(w,S,x)=>(x<0&&(x+=1),x>1&&(x-=1),x<.16666666666666666?w+(S-w)*6*x:x<.5?S:x<.6666666666666666?w+(S-w)*(.6666666666666666-x)*6:w),d=r<.5?r*(1+t):r+t-r*t,p=2*r-d;i=c(p,d,e+1/3),n=c(p,d,e),a=c(p,d,e-1/3)}return[Math.round(i*255),Math.round(n*255),Math.round(a*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let i=Math.max(e,t,r),n=Math.min(e,t,r),a,c,d=(i+n)/2;if(i===n)a=c=0;else{let p=i-n;switch(c=d>.5?p/(2-i-n):p/(i+n),i){case e:a=(t-r)/p+(t<r?6:0);break;case t:a=(r-e)/p+2;break;case r:a=(e-t)/p+4;break}a/=6}return a=Math.round(a*360),c=Math.round(c*100)+"%",d=Math.round(d*100)+"%",{css:"hsl("+a+","+c+","+d+")",h:a,s:c,l:d}},rgbToHex(e,t,r){let i=Number(e).toString(16),n=Number(t).toString(16),a=Number(r).toString(16);return i.length===1&&(i=`0${i}`),n.length===1&&(n=`0${n}`),a.length===1&&(a=`0${a}`),`#${i}${n}${a}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),i=r.filter(c=>c.match(/^(down|right|up|left)$/i));i.length&&(t.autoposition=i[0],r.splice(r.indexOf(i[0]),1));let n=r.filter(c=>c.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let a=r.filter(c=>c.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return a.length&&(t.offsetX=a[0].match(/^[+-]?\d*\.?\d+$/i)?`${a[0]}px`:a[0],a[1]?t.offsetY=a[1].match(/^[+-]?\d*\.?\d+$/i)?`${a[1]}px`:a[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(a[0]),1),a[1]&&r.splice(r.indexOf(a[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(U=>{typeof t[U]=="function"&&(t[U]=t[U].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,i=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),a=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},c=r==="window"?{x:1,y:1}:{x:a.width/r.offsetWidth,y:a.height/r.offsetHeight},d=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);a.width-=(parseFloat(d.borderLeftWidth)+parseFloat(d.borderRightWidth))*c.x,a.height-=(parseFloat(d.borderTopWidth)+parseFloat(d.borderBottomWidth))*c.y;let p;t.of?typeof t.of=="string"?p=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?p=t.of[0].getBoundingClientRect():p=t.of.getBoundingClientRect():p=a;let w=this.getScrollbarWidth(document.body),S=this.getScrollbarWidth(e.parentElement),x="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?x=p.left-a.left-parseFloat(d.borderLeftWidth)+"px":x="0px":t.at.startsWith("center")?t.of?x=p.left-a.left-parseFloat(d.borderLeftWidth)+p.width/2+"px":x=a.width/2+"px":t.at.startsWith("right-")&&(t.of?x=p.left-a.left-parseFloat(d.borderLeftWidth)+p.width+"px":x=a.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?x=p.left-a.left-parseFloat(d.borderLeftWidth)-i.width/2+"px":x=-i.width/2+"px":t.at.startsWith("center")?t.of?x=p.left-a.left-parseFloat(d.borderLeftWidth)-(i.width-p.width)/2+"px":x=a.width/2-i.width/2+"px":t.at.startsWith("right-")&&(t.of?x=p.left-a.left-parseFloat(d.borderLeftWidth)+(p.width-i.width/2)+"px":x=a.width-i.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?x=p.left-a.left-parseFloat(d.borderLeftWidth)-i.width+"px":x=-i.width+"px":t.at.startsWith("center")?t.of?x=p.left-a.left-parseFloat(d.borderLeftWidth)-i.width+p.width/2+"px":x=a.width/2-i.width+"px":t.at.startsWith("right-")&&(t.of?x=p.left-a.left-parseFloat(d.borderLeftWidth)+p.width-i.width+"px":x=a.width-i.width+"px",r!=="window"&&(x=parseFloat(x)-S.y+"px")));let O="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?O=p.top-a.top-parseFloat(d.borderTopWidth)+"px":O="0px":t.at.endsWith("center")?t.of?O=p.top-a.top-parseFloat(d.borderTopWidth)+p.height/2+"px":O=a.height/2+"px":t.at.endsWith("-bottom")&&(t.of?O=p.top-a.top-parseFloat(d.borderTopWidth)+p.height+"px":O=a.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?O=p.top-a.top-parseFloat(d.borderTopWidth)-i.height/2+"px":O=-i.height/2+"px":t.at.endsWith("center")?t.of?O=p.top-a.top-parseFloat(d.borderTopWidth)-i.height/2+p.height/2+"px":O=a.height/2-i.height/2+"px":t.at.endsWith("-bottom")&&(t.of?O=p.top-a.top-parseFloat(d.borderTopWidth)-i.height/2+p.height+"px":O=a.height-i.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?O=p.top-a.top-parseFloat(d.borderTopWidth)-i.height+"px":O=-i.height+"px":t.at.endsWith("center")?t.of?O=p.top-a.top-parseFloat(d.borderTopWidth)-i.height+p.height/2+"px":O=a.height/2-i.height+"px":t.at.endsWith("-bottom")&&(t.of?O=p.top-a.top-parseFloat(d.borderTopWidth)-i.height+p.height+"px":O=a.height-i.height+"px",r!=="window"?O=parseFloat(O)-S.x+"px":O=parseFloat(O)-w.x+"px")),e.style.left=c.x===1?x:parseFloat(x)/c.x+"px",e.style.top=c.y===1?O:parseFloat(O)/c.y+"px";let W=getComputedStyle(e),L={left:W.left,top:W.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(L=this.applyPositionAutopos(e,L,t)),(t.offsetX||t.offsetY)&&(L=this.applyPositionOffset(e,L,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(L=this.applyPositionMinMax(e,L,t)),t.modify&&(L=this.applyPositionModify(e,L,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const i=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(i);const n=Array.prototype.slice.call(document.querySelectorAll(`.${i}`)),a=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((c,d)=>{d>0&&d<=a&&(t.top=parseFloat(t.top)+n[--d].getBoundingClientRect().height+F.autopositionSpacing+"px")});break;case"up":n.forEach((c,d)=>{d>0&&d<=a&&(t.top=parseFloat(t.top)-n[--d].getBoundingClientRect().height-F.autopositionSpacing+"px")});break;case"right":n.forEach((c,d)=>{d>0&&d<=a&&(t.left=parseFloat(t.left)+n[--d].getBoundingClientRect().width+F.autopositionSpacing+"px")});break;case"left":n.forEach((c,d)=>{d>0&&d<=a&&(t.left=parseFloat(t.left)-n[--d].getBoundingClientRect().width-F.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const i=getComputedStyle(e);return{left:i.left,top:i.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(i=>{e.classList.contains(i)&&(t=i)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),i=document.createElement("button");i.className="btn btn"+t.color.slice(r),document.body.appendChild(i),t.color=getComputedStyle(i).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(i),i=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},i=typeof t=="object"?Object.assign(r,t):r,n=i.bgPanel,a=i.bgContent,c=i.colorHeader,d=i.colorContent,p=i.bgFooter,w=i.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[c]&&(c="#"+this.colorNames[c]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(O=>e.querySelector(O).style.color=this.getCssVariableValue(c)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(O=>O.style.color=this.getCssVariableValue(c)),this.colorNames[a]?e.content.style.background="#"+this.colorNames[a]:e.content.style.background=this.getCssVariableValue(a),this.colorNames[d]?e.content.style.color="#"+this.colorNames[d]:e.content.style.color=this.getCssVariableValue(d),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(d)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[p]?e.footer.style.background="#"+this.colorNames[p]:e.footer.style.background=this.getCssVariableValue(p),this.colorNames[w]?e.footer.style.color="#"+this.colorNames[w]:e.footer.style.color=this.getCssVariableValue(w),i.border&&e.setBorder(i.border),i.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(i.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,i]of Object.entries(t))e.style[r]=typeof i=="string"?F.getCssVariableValue(i):i;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const i=document.createElement("script");i.src=e,i.type=t,document.head.appendChild(i),r&&(i.onload=r)}},ajax(e,t){let r,i,n=new XMLHttpRequest;const a={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let c=F.strToHtml(this.responseText);r.urlSelector&&(c=c.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(c)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},a,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},a,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&F.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}i=r.url.trim().split(/\s+/),r.url=encodeURI(i[0]),i.length>1&&(i.shift(),r.urlSelector=i.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&F.ajaxAutoresizeAutoreposition(t,r),F.ajaxAlwaysCallbacks.length&&F.ajaxAlwaysCallbacks.forEach(c=>{t?c.call(n,n,t):c.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const i={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(a,c){if(c){let d=F.strToHtml(a);c.contentRemove(),c.content.append(d)}}};if(t&&typeof e=="string")r=Object.assign({},i,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},i,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&F.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(a=>{if(a.ok)return a[r.bodyMethod]()}).then(a=>{t?r.done.call(a,a,t):r.done.call(a,a),t&&(r.autoresize||r.autoreposition)&&F.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const i=r.split(" "),n=Object.assign({},{width:i[0],height:i[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const i=Object.assign({},r);t.autoresize&&e.resize(i),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const i=document.createElement("div"),n=e.parentElement;i.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(i.style.width=r+"px",i.style.height=r+"px"):t==="ct"||t==="cb"?i.style.height=r+"px":(t==="lc"||t==="rc")&&(i.style.width=r+"px"),n!==document.body&&(i.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(i)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",i,n){if(typeof t=="function"&&(t=[t]),r)return t[r](a=>a.call(e,e,i,n));t.forEach(a=>a.call(e,e,i,n))},resetZi(){this.zi=((e=F.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=F.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){F.zi||(F.zi=((f=F.ziBase)=>{let y=f;return{next:()=>y++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${F.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let f=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;F.errorpanel(f)}return!1}let i=this.pOcontainer(e.container);if(typeof i=="object"&&i.length&&i.length>0&&(i=i[0]),!i)return this.errorReporting&&F.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(f=>{e[f]?typeof e[f]=="function"&&(e[f]=[e[f]]):e[f]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const a=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),d=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),p=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),w=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),S=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),x=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),O=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),W=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),L=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),U=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),oe=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),de=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),xe=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),Fe=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),ie=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[a,c,d,p,w,S,x,O,W,L,U,oe,de,xe].forEach(f=>f.panel=n);const he=n.querySelector(".jsPanel-btn-close"),be=n.querySelector(".jsPanel-btn-maximize"),ye=n.querySelector(".jsPanel-btn-normalize"),ft=n.querySelector(".jsPanel-btn-smallify"),$t=n.querySelector(".jsPanel-btn-minimize");he&&F.pointerup.forEach(f=>{he.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.close(null,!0)})}),be&&F.pointerup.forEach(f=>{be.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.maximize()})}),ye&&F.pointerup.forEach(f=>{ye.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.normalize()})}),ft&&F.pointerup.forEach(f=>{ft.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),$t&&F.pointerup.forEach(f=>{$t.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.minimize()})});let wt=F.extensions;for(let f in wt)Object.prototype.hasOwnProperty.call(wt,f)&&(n[f]=wt[f]);if(n.setBorder=f=>{let y=F.pOborder(f);return y[2].length||(y[2]=n.style.backgroundColor),y=y.join(" "),n.style.border=y,n.options.border=y,n},n.setBorderRadius=f=>{typeof f=="string"&&(f.startsWith("--")||f.startsWith("var"))&&(f=f.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),f=F.getCssVariableValue(f)),typeof f=="number"&&(f+="px"),n.style.borderRadius=f;const y=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=y.borderTopLeftRadius,n.header.style.borderTopRightRadius=y.borderTopRightRadius):(n.content.style.borderTopLeftRadius=y.borderTopLeftRadius,n.content.style.borderTopRightRadius=y.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=y.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=y.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=y.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=y.borderBottomLeftRadius),n},n.setTheme=(f=e.theme,y)=>{let A;if(n.status==="minimized"&&(A=!0,n.normalize()),F.clearTheme(n),typeof f=="object")e.border=void 0,F.applyCustomTheme(n,f);else if(typeof f=="string"){f==="none"&&(f="white");let b=F.getThemeDetails(f);F.applyColorTheme(n,b)}return A&&n.minimize(),y&&y.call(n,n),n},n.remove=(f,y,A)=>{n.parentElement.removeChild(n),document.getElementById(f)?A&&A.call(n,f,n):(n.removeMinimizedReplacement(),n.status="closed",y&&document.dispatchEvent(ie),document.dispatchEvent(Fe),n.options.onclosed&&F.processCallbacks(n,n.options.onclosed,"every",y),F.autopositionRemaining(n),A&&A.call(f,f)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(f,y)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(xe),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!F.processCallbacks(n,n.options.onbeforeclose,"some",n.status,y))return n;n.options.animateOut?(n.options.animateIn&&F.remClass(n,n.options.animateIn),F.setClass(n,n.options.animateOut),n.addEventListener("animationend",A=>{A.stopPropagation(),n.remove(n.id,y,f)})):n.remove(n.id,y,f)}},n.maximize=(f,y)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!F.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(w);const A=n.parentElement,b=F.pOcontainment(e.maximizedMargin);return A===document.body?(n.style.width=document.documentElement.clientWidth-b[1]-b[3]+"px",n.style.height=document.documentElement.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"):(n.style.width=A.clientWidth-b[1]-b[3]+"px",n.style.height=A.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"),ft.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),y||n.front(),document.dispatchEvent(S),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),f&&f.call(n,n,n.statusBefore),e.onmaximized&&F.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=f=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!F.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(x),!document.getElementById("jsPanel-replacement-container")){const y=document.createElement("div");y.id="jsPanel-replacement-container",document.body.append(y)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(O),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let y=n.createMinimizedReplacement(),A,b,k;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(y);break;case"parentpanel":b=n.closest(".jsPanel-content").parentElement,k=b.querySelectorAll(".jsPanel-minimized-box"),A=k[k.length-1],A.append(y);break;case"parent":b=n.parentElement,A=b.querySelector(".jsPanel-minimized-container"),A||(A=document.createElement("div"),A.className="jsPanel-minimized-container",b.append(A)),A.append(y);break;default:document.querySelector(e.minimizeTo).append(y)}}return f&&f.call(n,n,n.statusBefore),e.onminimized&&F.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=f=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!F.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(d),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),ft.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(p),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),f&&f.call(n,n,n.statusBefore),e.onnormalized&&F.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=f=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!F.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(W),n.style.overflow="hidden";const y=window.getComputedStyle(n),A=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(y.borderTopWidth)+parseFloat(y.borderBottomWidth)+A+"px",ft.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(L),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(U),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const b=n.querySelectorAll(".jsPanel-minimized-box");return b[b.length-1].style.display="none",f&&f.call(n,n,n.statusBefore),e.onsmallified&&F.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=f=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!F.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(oe),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(p),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),ft.style.transform="rotate(0deg)";const y=n.querySelectorAll(".jsPanel-minimized-box");y[y.length-1].style.display="flex",f&&f.call(n,n,n.statusBefore),e.onunsmallified&&F.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(f,y=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const A=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(b=>b.style.zIndex);Math.max(...A)>n.style.zIndex&&(n.style.zIndex=F.zi.next()),F.resetZi()}return document.dispatchEvent(de),f&&f.call(n,n),e.onfronted&&y&&F.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(f,y=!1)=>{if(y||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),f&&typeof f=="function"&&!y)f.call(n,n,n.snappableTo);else if(f!==!1){let A=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const b=F.pOcontainment(n.options.dragit.containment),k=n.snappableTo;k.startsWith("left")?A[0]=b[3]:k.startsWith("right")&&(A[0]=-b[1]),k.endsWith("top")?A[1]=b[0]:k.endsWith("bottom")&&(A[1]=-b[2])}n.reposition(`${n.snappableTo} ${A[0]} ${A[1]}`)}y||(n.snapped=n.snappableTo)},n.move=(f,y)=>{let A=n.overlaps(f,"paddingbox"),b=n.parentElement;return f.appendChild(n),n.options.container=f,n.style.left=A.left+"px",n.style.top=A.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),y&&y.call(n,n,f,b),n},n.closeChildpanels=f=>(n.getChildpanels().forEach(y=>y.close()),f&&f.call(n,n),n),n.getChildpanels=f=>{const y=n.content.querySelectorAll(".jsPanel");return f&&y.forEach((A,b,k)=>{f.call(A,A,b,k)}),y},n.isChildpanel=f=>{const y=n.closest(".jsPanel-content"),A=y?y.parentElement:null;return f&&f.call(n,n,A),y?A:!1},n.contentRemove=f=>(F.emptyNode(n.content),f&&f.call(n,n),n),n.createMinimizedReplacement=()=>{const f=F.createMinimizedTemplate(),y=window.getComputedStyle(n.headertitle).color,A=window.getComputedStyle(n),b=e.iconfont,k=f.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?F.setStyles(f,{backgroundColor:A.backgroundColor,backgroundPositionX:A.backgroundPositionX,backgroundPositionY:A.backgroundPositionY,backgroundRepeat:A.backgroundRepeat,backgroundAttachment:A.backgroundAttachment,backgroundImage:A.backgroundImage,backgroundSize:A.backgroundSize,backgroundOrigin:A.backgroundOrigin,backgroundClip:A.backgroundClip}):f.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,f.id=n.id+"-min",f.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),f.querySelector(".jsPanel-headerlogo")),f.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),f.querySelector(".jsPanel-title")),f.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),f.querySelector(".jsPanel-title").style.color=y,k.style.color=y,k.querySelectorAll("button").forEach(ae=>ae.style.color=y),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(ae=>{n.header.classList.contains(ae)&&f.querySelector(".jsPanel-hdr").classList.add(ae)}),n.setIconfont(b,f),n.dataset.btnnormalize==="enabled"?F.pointerup.forEach(ae=>{f.querySelector(".jsPanel-btn-normalize").addEventListener(ae,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;n.normalize()})}):k.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?F.pointerup.forEach(ae=>{f.querySelector(".jsPanel-btn-maximize").addEventListener(ae,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;n.maximize()})}):k.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?F.pointerup.forEach(ae=>{f.querySelector(".jsPanel-btn-close").addEventListener(ae,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;n.close(null,!0)})}):k.querySelector(".jsPanel-btn-close").style.display="none",f},n.removeMinimizedReplacement=()=>{const f=document.getElementById(`${n.id}-min`);f&&f.parentElement.removeChild(f)},n.drag=(f={})=>{let y,A,b;const k=new CustomEvent("jspaneldragstart",{detail:n.id}),ae=new CustomEvent("jspaneldrag",{detail:n.id}),ue=new CustomEvent("jspaneldragstop",{detail:n.id});[k,ae,ue].forEach(Me=>Me.panel=n);const q=Me=>{let Ie=Me.split("-");return Ie.forEach(($e,Te)=>{Ie[Te]=$e.charAt(0).toUpperCase()+$e.slice(1)}),"snap"+Ie.join("")};function Y(Me){Me.relatedTarget===null&&F.pointermove.forEach(Ie=>{document.removeEventListener(Ie,A,!1),n.style.opacity=1})}let We=f.handles||F.defaults.dragit.handles,st=f.cursor||F.defaults.dragit.cursor;function Kt(Me){if(F.pointermove.forEach(Ie=>document.removeEventListener(Ie,A)),F.removeSnapAreas(),y){if(n.style.opacity=1,y=void 0,b.snap){switch(n.snappableTo){case"left-top":n.snap(b.snap.snapLeftTop);break;case"center-top":n.snap(b.snap.snapCenterTop);break;case"right-top":n.snap(b.snap.snapRightTop);break;case"right-center":n.snap(b.snap.snapRightCenter);break;case"right-bottom":n.snap(b.snap.snapRightBottom);break;case"center-bottom":n.snap(b.snap.snapCenterBottom);break;case"left-bottom":n.snap(b.snap.snapLeftBottom);break;case"left-center":n.snap(b.snap.snapLeftCenter);break}b.snap.callback&&n.snappableTo&&typeof b.snap.callback=="function"&&(b.snap.callback.call(n,n),b.snap.repositionOnSnap&&b.snap[q(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&b.snap.repositionOnSnap&&b.snap[q(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Ie=n.parentElement;n.move(n.droppableTo),b.drop.callback&&b.drop.callback.call(n,n,n.droppableTo,Ie)}if(document.dispatchEvent(ue),b.stop.length){let Ie=window.getComputedStyle(n),$e={left:parseFloat(Ie.left),top:parseFloat(Ie.top),width:parseFloat(Ie.width),height:parseFloat(Ie.height)};F.processCallbacks(n,b.stop,!1,$e,Me)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Ie=>Ie.style.pointerEvents="auto"),document.removeEventListener(Me,Kt)}return n.querySelectorAll(We).forEach(Me=>{Me.style.touchAction="none",Me.style.cursor=st,F.pointerdown.forEach(Ie=>{Me.addEventListener(Ie,$e=>{if($e.button&&$e.button>0||(b=Object.assign({},F.defaults.dragit,f),b.disableOnMaximized&&n.status==="maximized"))return!1;if((b.containment||b.containment===0)&&(b.containment=F.pOcontainment(b.containment)),b.grid&&Array.isArray(b.grid)&&b.grid.length===1&&(b.grid[1]=b.grid[0]),b.snap&&(typeof b.snap=="object"?b.snap=Object.assign({},F.defaultSnapConfig,b.snap):b.snap=F.defaultSnapConfig),$e.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(Qe=>Qe.style.pointerEvents="none");let Te=window.getComputedStyle(n),Ke=parseFloat(Te.left),Ae=parseFloat(Te.top),ee=parseFloat(Te.width),Ve=parseFloat(Te.height),ze=$e.touches?$e.touches[0].clientX:$e.clientX,ce=$e.touches?$e.touches[0].clientY:$e.clientY,ge=n.parentElement,Et=ge.getBoundingClientRect(),se=window.getComputedStyle(ge),Ye=n.getScaleFactor(),dn=0,Bt=F.getScrollbarWidth(ge);A=Qe=>{if(Qe.preventDefault(),!y){if(document.dispatchEvent(k),n.style.opacity=b.opacity,n.snapped&&b.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let ne=n.getBoundingClientRect(),Pe=ze-(ne.left+ne.width),fe=ne.width/2;Pe>-fe&&(dn=Pe+fe)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),b.drop&&b.drop.dropZones){let ne=b.drop.dropZones.map(fe=>F.pOcontainer(fe)),Pe=[];ne.forEach(function(fe){fe.length?fe.forEach(function(Oe){Pe.push(Oe)}):Pe.push(fe)}),Pe=Pe.filter(function(fe,Oe,Ue){return Ue.indexOf(fe)===Oe}),b.drop.dropZones=Pe}b.start.length&&F.processCallbacks(n,b.start,!1,{left:Ke,top:Ae,width:ee,height:Ve},Qe)}y=1;let St,Re,Ne,vt,Ze,Ce,ke,_t,qe,mt,at=Qe.touches?Qe.touches[0].clientX:Qe.clientX,et=Qe.touches?Qe.touches[0].clientY:Qe.clientY,Le=window.getComputedStyle(n),le;if(ge===document.body){let ne=n.getBoundingClientRect();qe=window.innerWidth-parseInt(se.borderLeftWidth,10)-parseInt(se.borderRightWidth,10)-(ne.left+ne.width),mt=window.innerHeight-parseInt(se.borderTopWidth,10)-parseInt(se.borderBottomWidth,10)-(ne.top+ne.height)}else qe=parseInt(se.width,10)-parseInt(se.borderLeftWidth,10)-parseInt(se.borderRightWidth,10)-(parseInt(Le.left,10)+parseInt(Le.width,10)),mt=parseInt(se.height,10)-parseInt(se.borderTopWidth,10)-parseInt(se.borderBottomWidth,10)-(parseInt(Le.top,10)+parseInt(Le.height,10));St=parseFloat(Le.left),Ne=parseFloat(Le.top),Ze=qe,ke=mt,b.snap&&(b.snap.trigger==="panel"?(Re=St**2,vt=Ne**2,Ce=Ze**2,_t=ke**2):b.snap.trigger==="pointer"&&(n.options.container==="window"?(St=at,Ne=et,Ze=window.innerWidth-at,ke=window.innerHeight-et,Re=at**2,vt=Ne**2,Ce=Ze**2,_t=ke**2):(le=n.overlaps(ge,"paddingbox",Qe),St=le.pointer.left,Ne=le.pointer.top,Ze=le.pointer.right,ke=le.pointer.bottom,Re=le.pointer.left**2,vt=le.pointer.top**2,Ce=le.pointer.right**2,_t=le.pointer.bottom**2)));let Xe=Math.sqrt(Re+vt),G=Math.sqrt(Re+_t),tt=Math.sqrt(Ce+vt),ut=Math.sqrt(Ce+_t),kt=Math.abs(St-Ze)/2,Q=Math.abs(Ne-ke)/2,Vt=Math.sqrt(Re+Q**2),tn=Math.sqrt(vt+kt**2),lt=Math.sqrt(Ce+Q**2),hn=Math.sqrt(_t+kt**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(ae),(!b.axis||b.axis==="x")&&(n.style.left=Ke+(at-ze)/Ye.x+dn+"px"),(!b.axis||b.axis==="y")&&(n.style.top=Ae+(et-ce)/Ye.y+"px"),b.grid){let ne=b.grid,Pe=b.axis,fe=ne[0]*Math.round((Ke+(at-ze))/ne[0]),Oe=ne[1]*Math.round((Ae+(et-ce))/ne[1]);(!Pe||Pe==="x")&&(n.style.left=`${fe}px`),(!Pe||Pe==="y")&&(n.style.top=`${Oe}px`)}if(b.containment||b.containment===0){let ne=b.containment,Pe,fe;if(n.options.container==="window")Pe=window.innerWidth-parseFloat(Le.width)-ne[1]-Bt.y,fe=window.innerHeight-parseFloat(Le.height)-ne[2]-Bt.x;else{let Oe=parseFloat(se.borderLeftWidth)+parseFloat(se.borderRightWidth),Ue=parseFloat(se.borderTopWidth)+parseFloat(se.borderBottomWidth);Pe=Et.width/Ye.x-parseFloat(Le.width)-ne[1]-Oe-Bt.y,fe=Et.height/Ye.y-parseFloat(Le.height)-ne[2]-Ue-Bt.x}parseFloat(n.style.left)<=ne[3]&&(n.style.left=ne[3]+"px"),parseFloat(n.style.top)<=ne[0]&&(n.style.top=ne[0]+"px"),parseFloat(n.style.left)>=Pe&&(n.style.left=Pe+"px"),parseFloat(n.style.top)>=fe&&(n.style.top=fe+"px")}if(b.drag.length){let ne={left:St,top:Ne,right:Ze,bottom:ke,width:parseFloat(Le.width),height:parseFloat(Le.height)};F.processCallbacks(n,b.drag,!1,ne,Qe)}if(b.snap){let ne=b.snap.sensitivity,Pe=ge===document.body?window.innerWidth/8:Et.width/8,fe=ge===document.body?window.innerHeight/8:Et.height/8;n.snappableTo=!1,F.removeSnapAreas(),Xe<ne?b.snap.snapLeftTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-top",F.createSnapArea(n,"lt",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.left>0&&le.pointer.top>0?(n.snappableTo="left-top",F.createSnapArea(n,"lt",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):G<ne?b.snap.snapLeftBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-bottom",F.createSnapArea(n,"lb",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.left>0&&le.pointer.bottom>0?(n.snappableTo="left-bottom",F.createSnapArea(n,"lb",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):tt<ne?b.snap.snapRightTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-top",F.createSnapArea(n,"rt",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.right>0&&le.pointer.top>0?(n.snappableTo="right-top",F.createSnapArea(n,"rt",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):ut<ne?b.snap.snapRightBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-bottom",F.createSnapArea(n,"rb",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.right>0&&le.pointer.bottom>0?(n.snappableTo="right-bottom",F.createSnapArea(n,"rb",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):Ne<ne&&tn<Pe?b.snap.snapCenterTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-top",F.createSnapArea(n,"ct",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.top>0?(n.snappableTo="center-top",F.createSnapArea(n,"ct",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):St<ne&&Vt<fe?b.snap.snapLeftCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-center",F.createSnapArea(n,"lc",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.left>0?(n.snappableTo="left-center",F.createSnapArea(n,"lc",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):Ze<ne&&lt<fe?b.snap.snapRightCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-center",F.createSnapArea(n,"rc",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.right>0?(n.snappableTo="right-center",F.createSnapArea(n,"rc",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):ke<ne&&hn<Pe&&b.snap.snapCenterBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-bottom",F.createSnapArea(n,"cb",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.bottom>0?(n.snappableTo="center-bottom",F.createSnapArea(n,"cb",ne)):(n.snappableTo=!1,F.removeSnapAreas())))}if(b.drop&&b.drop.dropZones){let ne=F.isIE?"msElementsFromPoint":"elementsFromPoint",Pe=document[ne](Qe.clientX,Qe.clientY);Array.isArray(Pe)||(Pe=Array.prototype.slice.call(Pe)),b.drop.dropZones.forEach(fe=>{Pe.includes(fe)&&(n.droppableTo=fe)}),Pe.includes(n.droppableTo)||(n.droppableTo=!1)}},F.pointermove.forEach(Qe=>document.addEventListener(Qe,A)),window.addEventListener("mouseout",Y,!1)})}),F.pointerup.forEach(Ie=>{document.addEventListener(Ie,Kt),window.removeEventListener("mouseout",Y)}),f.disable&&(Me.style.pointerEvents="none")}),n},n.dragit=f=>{const y=Object.assign({},F.defaults.dragit,e.dragit),A=n.querySelectorAll(y.handles);return f==="disable"?A.forEach(b=>b.style.pointerEvents="none"):A.forEach(b=>b.style.pointerEvents="auto"),n},n.sizeit=(f={})=>{const y=new CustomEvent("jspanelresizestart",{detail:n.id}),A=new CustomEvent("jspanelresize",{detail:n.id}),b=new CustomEvent("jspanelresizestop",{detail:n.id});[y,A,b].forEach($e=>$e.panel=n);let k={},ae,ue,q,Y,We,st;k.handles=f.handles||F.defaults.resizeit.handles,k.handles.split(",").forEach($e=>{const Te=document.createElement("DIV");Te.className=`jsPanel-resizeit-handle jsPanel-resizeit-${$e.trim()}`,n.append(Te)});let Kt=f.aspectRatio?f.aspectRatio:!1;function Me($e){$e.relatedTarget===null&&F.pointermove.forEach(Te=>document.removeEventListener(Te,ae,!1))}function Ie($e){if(F.pointermove.forEach(Te=>document.removeEventListener(Te,ae,!1)),$e.target.classList&&$e.target.classList.contains("jsPanel-resizeit-handle")){let Te,Ke,Ae=$e.target.className;if(Ae.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(Te=!0),Ae.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Ke=!0),k.grid&&Array.isArray(k.grid)){k.grid.length===1&&(k.grid[1]=k.grid[0]);const ee=parseFloat(n.style.width),Ve=parseFloat(n.style.height),ze=ee%k.grid[0],ce=Ve%k.grid[1],ge=parseFloat(n.style.left),Et=parseFloat(n.style.top),se=ge%k.grid[0],Ye=Et%k.grid[1];ze<k.grid[0]/2?n.style.width=ee-ze+"px":n.style.width=ee+(k.grid[0]-ze)+"px",ce<k.grid[1]/2?n.style.height=Ve-ce+"px":n.style.height=Ve+(k.grid[1]-ce)+"px",Te&&(se<k.grid[0]/2?n.style.left=ge-se+"px":n.style.left=ge+(k.grid[0]-se)+"px"),Ke&&(Ye<k.grid[1]/2?n.style.top=Et-Ye+"px":n.style.top=Et+(k.grid[1]-Ye)+"px")}}if(ue){n.content.style.pointerEvents="inherit",ue=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let Te=n.controlbar.querySelector(".jsPanel-btn-smallify"),Ke=n.getBoundingClientRect();if(Te&&Ke.height>st+5&&(Te.style.transform="rotate(0deg)"),document.dispatchEvent(b),k.stop.length){let Ae=window.getComputedStyle(n),ee={left:parseFloat(Ae.left),top:parseFloat(Ae.top),width:parseFloat(Ae.width),height:parseFloat(Ae.height)};F.processCallbacks(n,k.stop,!1,ee,$e)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Te=>Te.style.pointerEvents="auto"),k.aspectRatio=Kt,document.removeEventListener($e,Ie)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach($e=>{$e.style.touchAction="none",F.pointerdown.forEach(Te=>{$e.addEventListener(Te,Ke=>{if(Ke.preventDefault(),Ke.stopPropagation(),Ke.button&&Ke.button>0)return!1;let Ae=1;if(k=Object.assign({},F.defaults.resizeit,f),(k.containment||k.containment===0)&&(k.containment=F.pOcontainment(k.containment)),k.aspectRatio&&k.aspectRatio===!0&&(k.aspectRatio="panel"),F.modifier){let fe=F.modifier;fe.altKey?k.aspectRatio="content":fe.ctrlKey?k.aspectRatio="panel":fe.shiftKey&&(k.aspectRatio=!1,Ae=2)}let ee=typeof k.maxWidth=="function"?k.maxWidth():k.maxWidth||1e4,Ve=typeof k.maxHeight=="function"?k.maxHeight():k.maxHeight||1e4,ze=typeof k.minWidth=="function"?k.minWidth():k.minWidth,ce=typeof k.minHeight=="function"?k.minHeight():k.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(fe=>fe.style.pointerEvents="none");const ge=n.parentElement,Et=ge.tagName.toLowerCase(),se=n.getBoundingClientRect(),Ye=ge.getBoundingClientRect(),dn=window.getComputedStyle(ge,null),Bt=parseInt(dn.borderLeftWidth,10),Qe=parseInt(dn.borderTopWidth,10),St=dn.getPropertyValue("position"),Re=Ke.clientX||Ke.clientX===0||Ke.touches[0].clientX,Ne=Ke.clientY||Ke.clientY===0||Ke.touches[0].clientY,vt=Re/Ne,Ze=Ke.target.classList,Ce=n.getScaleFactor(),ke=se.width/se.height,_t=n.content.getBoundingClientRect(),qe=_t.width/_t.height,mt=n.header.getBoundingClientRect().height,at=n.footer.getBoundingClientRect().height||0;let et=se.left,Le=se.top,le=1e4,Xe=1e4,G=1e4,tt=1e4;We=se.width,st=se.height,Et!=="body"&&(et=se.left-Ye.left+ge.scrollLeft,Le=se.top-Ye.top+ge.scrollTop),Et==="body"&&k.containment?(le=document.documentElement.clientWidth-se.left,G=document.documentElement.clientHeight-se.top,Xe=se.width+se.left,tt=se.height+se.top):k.containment&&(St==="static"?(le=Ye.width-se.left+Bt,G=Ye.height+Ye.top-se.top+Qe,Xe=se.width+(se.left-Ye.left)-Bt,tt=se.height+(se.top-Ye.top)-Qe):(le=ge.clientWidth-(se.left-Ye.left)/Ce.x+Bt,G=ge.clientHeight-(se.top-Ye.top)/Ce.y+Qe,Xe=(se.width+se.left-Ye.left)/Ce.x-Bt,tt=n.clientHeight+(se.top-Ye.top)/Ce.y-Qe)),k.containment&&(Xe-=k.containment[3],tt-=k.containment[0],le-=k.containment[1],G-=k.containment[2]);const ut=window.getComputedStyle(n),kt=parseFloat(ut.width)-se.width,Q=parseFloat(ut.height)-se.height;let Vt=parseFloat(ut.left)-se.left,tn=parseFloat(ut.top)-se.top;ge!==document.body&&(Vt+=Ye.left,tn+=Ye.top);let lt=parseInt(ut.borderTopWidth,10),hn=parseInt(ut.borderRightWidth,10),ne=parseInt(ut.borderBottomWidth,10),Pe=parseInt(ut.borderLeftWidth,10);ae=fe=>{fe.preventDefault(),ue||(document.dispatchEvent(y),k.start.length&&F.processCallbacks(n,k.start,!1,{width:We,height:st,left:et,top:Le},fe),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),se.height>st+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),ue=1,document.dispatchEvent(A);let Oe=fe.touches?fe.touches[0].clientX:fe.clientX,Ue=fe.touches?fe.touches[0].clientY:fe.clientY,De;Ze.contains("jsPanel-resizeit-e")?(q=We+(Oe-Re)*Ae/Ce.x+kt,q>=le&&(q=le),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",Ae===2&&(n.style.left=et-(Oe-Re)+"px"),k.aspectRatio==="content"?(n.style.height=(q-hn-Pe)/qe+mt+at+lt+ne+"px",k.containment&&(De=n.overlaps(ge),De.bottom<=k.containment[2]&&(n.style.height=G+"px",n.style.width=G*qe+"px"))):k.aspectRatio==="panel"&&(n.style.height=q/ke+"px",k.containment&&(De=n.overlaps(ge),De.bottom<=k.containment[2]&&(n.style.height=G+"px",n.style.width=G*ke+"px")))):Ze.contains("jsPanel-resizeit-s")?(Y=st+(Ue-Ne)*Ae/Ce.y+Q,Y>=G&&(Y=G),Y>=Ve&&(Y=Ve),Y<=ce&&(Y=ce),n.style.height=Y+"px",Ae===2&&(n.style.top=Le-(Ue-Ne)+"px"),k.aspectRatio==="content"?(n.style.width=(Y-mt-at-lt-ne)*qe+lt+ne+"px",k.containment&&(De=n.overlaps(ge),De.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/qe+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*ke+"px",k.containment&&(De=n.overlaps(ge),De.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/ke+"px")))):Ze.contains("jsPanel-resizeit-w")?(q=We+(Re-Oe)*Ae/Ce.x+kt,q<=ee&&q>=ze&&q<=Xe&&(n.style.left=et+(Oe-Re)/Ce.x+Vt+"px"),q>=Xe&&(q=Xe),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",k.aspectRatio==="content"?(n.style.height=(q-hn-Pe)/qe+mt+at+lt+ne+"px",k.containment&&(De=n.overlaps(ge),De.bottom<=k.containment[2]&&(n.style.height=G+"px",n.style.width=G*qe+"px"))):k.aspectRatio==="panel"&&(n.style.height=q/ke+"px",k.containment&&(De=n.overlaps(ge),De.bottom<=k.containment[2]&&(n.style.height=G+"px",n.style.width=G*ke+"px")))):Ze.contains("jsPanel-resizeit-n")?(Y=st+(Ne-Ue)*Ae/Ce.y+Q,Y<=Ve&&Y>=ce&&Y<=tt&&(n.style.top=Le+(Ue-Ne)/Ce.y+tn+"px"),Y>=tt&&(Y=tt),Y>=Ve&&(Y=Ve),Y<=ce&&(Y=ce),n.style.height=Y+"px",k.aspectRatio==="content"?(n.style.width=(Y-mt-at-lt-ne)*qe+lt+ne+"px",k.containment&&(De=n.overlaps(ge),De.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/qe+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*ke+"px",k.containment&&(De=n.overlaps(ge),De.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/ke+"px")))):Ze.contains("jsPanel-resizeit-se")?(q=We+(Oe-Re)*Ae/Ce.x+kt,q>=le&&(q=le),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",Ae===2&&(n.style.left=et-(Oe-Re)+"px"),k.aspectRatio&&(n.style.height=q/ke+"px"),Y=st+(Ue-Ne)*Ae/Ce.y+Q,Y>=G&&(Y=G),Y>=Ve&&(Y=Ve),Y<=ce&&(Y=ce),n.style.height=Y+"px",Ae===2&&(n.style.top=Le-(Ue-Ne)+"px"),k.aspectRatio==="content"?(n.style.width=(Y-mt-at-lt-ne)*qe+lt+ne+"px",k.containment&&(De=n.overlaps(ge),De.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/qe+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*ke+"px",k.containment&&(De=n.overlaps(ge),De.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/ke+"px")))):Ze.contains("jsPanel-resizeit-sw")?(Y=st+(Ue-Ne)*Ae/Ce.y+Q,Y>=G&&(Y=G),Y>=Ve&&(Y=Ve),Y<=ce&&(Y=ce),n.style.height=Y+"px",Ae===2&&(n.style.top=Le-(Ue-Ne)+"px"),k.aspectRatio&&(n.style.width=Y*ke+"px"),q=We+(Re-Oe)*Ae/Ce.x+kt,q<=ee&&q>=ze&&q<=Xe&&(n.style.left=et+(Oe-Re)/Ce.x+Vt+"px"),q>=Xe&&(q=Xe),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",k.aspectRatio==="content"?(n.style.height=(q-hn-Pe)/qe+mt+at+lt+ne+"px",k.containment&&(De=n.overlaps(ge),De.bottom<=k.containment[2]&&(n.style.height=G+"px",n.style.width=G*qe+"px"))):k.aspectRatio==="panel"&&(n.style.height=q/ke+"px",k.containment&&(De=n.overlaps(ge),De.bottom<=k.containment[2]&&(n.style.height=G+"px",n.style.width=G*ke+"px")))):Ze.contains("jsPanel-resizeit-ne")?(q=We+(Oe-Re)*Ae/Ce.x+kt,q>=le&&(q=le),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",Ae===2&&(n.style.left=et-(Oe-Re)+"px"),k.aspectRatio&&(n.style.height=q/ke+"px"),Y=st+(Ne-Ue)*Ae/Ce.y+Q,Y<=Ve&&Y>=ce&&Y<=tt&&(n.style.top=Le+(Ue-Ne)/Ce.y+tn+"px"),Y>=tt&&(Y=tt),Y>=Ve&&(Y=Ve),Y<=ce&&(Y=ce),n.style.height=Y+"px",k.aspectRatio==="content"?(n.style.width=(Y-mt-at-lt-ne)*qe+lt+ne+"px",k.containment&&(De=n.overlaps(ge),De.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/qe+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*ke+"px",k.containment&&(De=n.overlaps(ge),De.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/ke+"px")))):Ze.contains("jsPanel-resizeit-nw")&&(k.aspectRatio&&Ze.contains("jsPanel-resizeit-nw")&&(Oe=Ue*vt,Ue=Oe/vt),q=We+(Re-Oe)*Ae/Ce.x+kt,q<=ee&&q>=ze&&q<=Xe&&(n.style.left=et+(Oe-Re)/Ce.x+Vt+"px"),q>=Xe&&(q=Xe),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",k.aspectRatio&&(n.style.height=q/ke+"px"),Y=st+(Ne-Ue)*Ae/Ce.y+Q,Y<=Ve&&Y>=ce&&Y<=tt&&(n.style.top=Le+(Ue-Ne)/Ce.y+tn+"px"),Y>=tt&&(Y=tt),Y>=Ve&&(Y=Ve),Y<=ce&&(Y=ce),n.style.height=Y+"px",k.aspectRatio==="content"?n.style.width=(Y-mt-at-lt-ne)*qe+lt+ne+"px":k.aspectRatio==="panel"&&(n.style.width=Y*ke+"px")),window.getSelection().removeAllRanges();const Mt=window.getComputedStyle(n),Be={left:parseFloat(Mt.left),top:parseFloat(Mt.top),right:parseFloat(Mt.right),bottom:parseFloat(Mt.bottom),width:parseFloat(Mt.width),height:parseFloat(Mt.height)};k.resize.length&&F.processCallbacks(n,k.resize,!1,Be,fe)},F.pointermove.forEach(fe=>document.addEventListener(fe,ae,!1)),window.addEventListener("mouseout",Me,!1)})}),F.pointerup.forEach(function(Te){document.addEventListener(Te,Ie),window.removeEventListener("mouseout",Me)}),f.disable&&($e.style.pointerEvents="none")}),n},n.resizeit=f=>{const y=n.querySelectorAll(".jsPanel-resizeit-handle");return f==="disable"?y.forEach(A=>A.style.pointerEvents="none"):y.forEach(A=>A.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const f=n.getBoundingClientRect();return{x:f.width/n.offsetWidth,y:f.height/n.offsetHeight}},n.calcSizeFactors=()=>{const f=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(f.left)/(window.innerWidth-parseFloat(f.width)),n.vf=parseFloat(f.top)/(window.innerHeight-parseFloat(f.height));else if(n.parentElement){let y=n.parentElement.getBoundingClientRect();n.hf=parseFloat(f.left)/(y.width-parseFloat(f.width)),n.vf=parseFloat(f.top)/(y.height-parseFloat(f.height))}},n.saveCurrentDimensions=()=>{const f=window.getComputedStyle(n);n.currentData.width=f.width,n.currentData.height=f.height},n.saveCurrentPosition=()=>{const f=window.getComputedStyle(n);n.currentData.left=f.left,n.currentData.top=f.top},n.reposition=(...f)=>{let y=e.position,A=!0,b;return f.forEach(k=>{typeof k=="string"||typeof k=="object"?y=k:typeof k=="boolean"?A=k:typeof k=="function"&&(b=k)}),F.position(n,y),n.slaves&&n.slaves.size>0&&n.slaves.forEach(k=>k.reposition()),A&&n.saveCurrentPosition(),b&&b.call(n,n),n},n.repositionOnSnap=f=>{let y="0",A="0",b=F.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(f){case"left-top":y=b[3],A=b[0];break;case"right-top":y=-b[1],A=b[0];break;case"right-bottom":y=-b[1],A=-b[2];break;case"left-bottom":y=b[3],A=-b[2];break;case"center-top":y=b[3]/2-b[1]/2,A=b[0];break;case"center-bottom":y=b[3]/2-b[1]/2,A=-b[2];break;case"left-center":y=b[3],A=b[0]/2-b[2]/2;break;case"right-center":y=-b[1],A=b[0]/2-b[2]/2;break}F.position(n,f),F.setStyles(n,{left:`calc(${n.style.left} + ${y}px)`,top:`calc(${n.style.top} + ${A}px)`})},n.overlaps=(f,y,A)=>{let b=n.getBoundingClientRect(),k=getComputedStyle(n.parentElement),ae=n.getScaleFactor(),ue={top:0,right:0,bottom:0,left:0},q,Y=0,We=0,st=0,Kt=0;n.options.container!=="window"&&y==="paddingbox"&&(ue.top=parseInt(k.borderTopWidth,10)*ae.y,ue.right=parseInt(k.borderRightWidth,10)*ae.x,ue.bottom=parseInt(k.borderBottomWidth,10)*ae.y,ue.left=parseInt(k.borderLeftWidth,10)*ae.x),typeof f=="string"?f==="window"?q={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:f==="parent"?q=n.parentElement.getBoundingClientRect():q=document.querySelector(f).getBoundingClientRect():q=f.getBoundingClientRect(),A&&(Y=A.touches?A.touches[0].clientX:A.clientX,We=A.touches?A.touches[0].clientY:A.clientY,st=Y-q.left,Kt=We-q.top);let Me=b.left<q.right&&b.right>q.left,Ie=b.top<q.bottom&&b.bottom>q.top;return{overlaps:Me&&Ie,top:b.top-q.top-ue.top,right:q.right-b.right-ue.right,bottom:q.bottom-b.bottom-ue.bottom,left:b.left-q.left-ue.left,parentBorderWidth:ue,panelRect:b,referenceRect:q,pointer:{clientX:Y,clientY:We,left:st-ue.left,top:Kt-ue.top,right:q.width-st-ue.right,bottom:q.height-Kt-ue.bottom}}},n.setSize=()=>{if(e.panelSize){const f=F.pOsize(n,e.panelSize);n.style.width=f.width,n.style.height=f.height}else if(e.contentSize){const f=F.pOsize(n,e.contentSize);n.content.style.width=f.width,n.content.style.height=f.height,n.style.width=f.width,n.content.style.width="100%"}return n},n.resize=(...f)=>{let y=window.getComputedStyle(n),A={width:y.width,height:y.height},b=!0,k;f.forEach(q=>{typeof q=="string"?A=q:typeof q=="object"?A=Object.assign(A,q):typeof q=="boolean"?b=q:typeof q=="function"&&(k=q)});let ae=F.pOsize(n,A);n.style.width=ae.width,n.style.height=ae.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(q=>q.reposition()),b&&n.saveCurrentDimensions(),n.status="normalized";let ue=n.controlbar.querySelector(".jsPanel-btn-smallify");return ue&&(ue.style.transform="rotate(0deg)"),k&&k.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=f=>{if(f.target===window){let y=n.status,A=e.onwindowresize,b,k;if(y==="maximized"&&A)n.maximize(!1,!0);else if(n.snapped&&y!=="minimized")n.snap(n.snapped,!0);else if(y==="normalized"||y==="smallified"||y==="maximized"){let ae=typeof A;ae==="boolean"?(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",k=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=k<=0?0:k+"px"):ae==="function"?A.call(n,f,n):ae==="object"&&(A.preset===!0&&(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",k=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=k<=0?0:k+"px"),A.callback.call(n,f,n))}else y==="smallifiedmax"&&A&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(ae=>ae.reposition())}},n.setControls=(f,y)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(A=>{const b=A.className.split("-"),k=b[b.length-1];n.getAttribute(`data-btn${k}`)!=="hidden"&&(A.style.display="block")}),f.forEach(A=>{const b=n.controlbar.querySelector(A);b&&(b.style.display="none")}),y&&y.call(n,n),n),n.setControlStatus=(f,y="enable",A)=>{const b=n.controlbar.querySelector(`.jsPanel-btn-${f}`);switch(y){case"disable":n.getAttribute(`data-btn${f}`)!=="removed"&&(n.setAttribute(`data-btn${f}`,"disabled"),b.style.pointerEvents="none",b.style.opacity=.4,b.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${f}`)!=="removed"&&(n.setAttribute(`data-btn${f}`,"hidden"),b.style.display="none");break;case"show":n.getAttribute(`data-btn${f}`)!=="removed"&&(n.setAttribute(`data-btn${f}`,"enabled"),b.style.display="block",b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${f}`)!=="removed"&&(n.getAttribute(`data-btn${f}`)==="hidden"&&(b.style.display="block"),n.setAttribute(`data-btn${f}`,"enabled"),b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(b),n.setAttribute(`data-btn${f}`,"removed");break}return A&&A.call(n,n),n},n.setControlSize=f=>{const y=f.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(b=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(k=>b.classList.remove(k)),b.classList.add(`jsPanel-btn-${y}`)}),y==="xl"?n.titlebar.style.fontSize="1.5rem":y==="lg"?n.titlebar.style.fontSize="1.25rem":y==="md"?n.titlebar.style.fontSize="1.05rem":y==="sm"?n.titlebar.style.fontSize=".9rem":y==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=f=>{if(n.options.headerControls.add){let k=n.options.headerControls.add;Array.isArray(k)||(k=[k]),k.forEach(ae=>n.addControl(ae))}let y=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(k=>{let ae=k.className.match(/jsPanel-btn-[a-z\d]{3,}/i),ue=ae[0].substring(12);y.push(ue)});const b=F.pOheaderControls(e.headerControls);return e.headerControls=b,y.forEach(k=>{b[k]&&n.setControlStatus(k,b[k])}),n.setControlSize(b.size),f&&f.call(n,n),n},n.setHeaderLogo=(f,y)=>{let A=[n.headerlogo],b=document.querySelector("#"+n.id+"-min");return b&&A.push(b.querySelector(".jsPanel-headerlogo")),typeof f=="string"?f.startsWith("<")?A.forEach(k=>k.innerHTML=f):A.forEach(k=>{F.emptyNode(k);let ae=document.createElement("img");ae.src=f,k.append(ae)}):A.forEach(k=>{F.emptyNode(k),k.append(f)}),n.headerlogo.childNodes.forEach(k=>{k.nodeName&&k.nodeName==="IMG"&&k.setAttribute("draggable","false")}),y&&y.call(n,n),n},n.setHeaderRemove=f=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(y=>n.setAttribute(`data-btn${y}`,"removed")),f&&f.call(n,n),n),n.setHeaderTitle=(f,y)=>{let A=[n.headertitle],b=document.querySelector("#"+n.id+"-min");return b&&A.push(b.querySelector(".jsPanel-title")),typeof f=="string"?A.forEach(k=>k.innerHTML=f):typeof f=="function"?A.forEach(k=>{F.emptyNode(k),k.innerHTML=f()}):A.forEach(k=>{F.emptyNode(k),k.append(f)}),y&&y.call(n,n),n},n.setIconfont=(f,y=n,A)=>{if(f){let b,k;if(f==="fa"||f==="far"||f==="fal"||f==="fas"||f==="fad")b=[`${f} fa-window-close`,`${f} fa-window-maximize`,`${f} fa-window-restore`,`${f} fa-window-minimize`,`${f} fa-chevron-up`];else if(f==="material-icons")b=[f,f,f,f,f,f],k=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(f))b=[`custom-control-icon ${f[4]}`,`custom-control-icon ${f[3]}`,`custom-control-icon ${f[2]}`,`custom-control-icon ${f[1]}`,`custom-control-icon ${f[0]}`];else if(f==="bootstrap"||f==="glyphicon")b=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return y;y.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(ae=>F.emptyNode(ae).innerHTML="<span></span>"),Array.prototype.slice.call(y.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((ae,ue)=>{ae.className=b[ue],f==="material-icons"&&(ae.textContent=k[ue])})}return A&&A.call(y,y),y},n.addToolbar=(f,y,A)=>{if(f==="header"?f=n.headertoolbar:f==="footer"&&(f=n.footer),typeof y=="string")f.innerHTML=y;else if(Array.isArray(y))y.forEach(b=>{typeof b=="string"?f.innerHTML+=b:f.append(b)});else if(typeof y=="function"){let b=y.call(n,n);typeof b=="string"?f.innerHTML=b:f.append(b)}else f.append(y);return f.classList.add("active"),A&&A.call(n,n),n},n.addCloseControl=()=>{let f=document.createElement("button"),y=n.content.style.color;return f.classList.add("jsPanel-addCloseCtrl"),f.innerHTML=F.icons.close,f.style.color=y,n.options.rtl&&f.classList.add("rtl"),n.appendChild(f),F.pointerup.forEach(A=>{f.addEventListener(A,b=>{if(b.preventDefault(),b.button&&b.button>0)return!1;n.close(null,!0)})}),F.pointerdown.forEach(A=>{f.addEventListener(A,b=>b.preventDefault())}),n},n.addControl=f=>{if(!f.html)return n;f.position||(f.position=1);const y=n.controlbar.querySelectorAll(".jsPanel-btn").length;let A=document.createElement("button");A.innerHTML=f.html,A.className=`jsPanel-btn jsPanel-btn-${f.name} jsPanel-btn-${e.headerControls.size}`,A.style.color=n.header.style.color,f.position>y?n.controlbar.append(A):n.controlbar.insertBefore(A,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${f.position})`));const b=f.ariaLabel||f.name;return b&&A.setAttribute("aria-label",b),F.pointerup.forEach(k=>{A.addEventListener(k,ae=>{if(ae.preventDefault(),ae.button&&ae.button>0)return!1;f.handler.call(n,n,A)})}),f.afterInsert&&f.afterInsert.call(A,A),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(f=>{f.dir="rtl",e.rtl.lang&&(f.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),i.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),F.isIE){let f=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":f.forEach(y=>{y.style.height="34px"});break;case"xs":f.forEach(y=>{y.style.height="26px"});break;case"sm":f.forEach(y=>{y.style.height="30px"});break;case"lg":f.forEach(y=>{y.style.height="38px"});break;case"xl":f.forEach(y=>{y.style.height="42px"});break}}if(e.header==="auto-show-hide"){let f="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,f),this.setClass(n.content,f),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,F.setClass(n,f),F.remClass(n.content,f)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,F.remClass(n,f),F.setClass(n.content,f)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[f,y]of Object.entries(e.css))if(f==="panel")n.className+=` ${y}`;else{let A=n.querySelector(`.jsPanel-${f}`);A&&(A.className+=` ${y}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const f=e.contentOverflow.split(" ");f.length===1?n.content.style.overflow=f[0]:f.length===2&&(n.content.style.overflowX=f[0],n.content.style.overflowY=f[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let f=Object.assign({},F.defaultAutocloseConfig,e.autoclose);f.time&&typeof f.time=="number"&&(f.time+="ms");let y=n.progressbar.querySelector("div");y.addEventListener("animationend",A=>{A.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),f.progressbar&&(n.progressbar.classList.add("active"),f.background?F.colorNames[f.background]?n.progressbar.style.background="#"+F.colorNames[f.background]:n.progressbar.style.background=f.background:n.progressbar.classList.add("success-bg")),y.style.animation=`${f.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(p),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let f=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=f,e.dragit.snap===!0?(e.dragit.snap=F.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=f)}if(e.dragit?(["start","drag","stop"].forEach(f=>{e.dragit[f]?typeof e.dragit[f]=="function"&&(e.dragit[f]=[e.dragit[f]]):e.dragit[f]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",f=>{f.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(y=>{e.resizeit[y]?typeof e.resizeit[y]=="function"&&(e.resizeit[y]=[e.resizeit[y]]):e.resizeit[y]=[]}),n.sizeit(e.resizeit);let f;n.addEventListener("jspanelresizestart",y=>{y.panel===n&&(f=n.status)},!1),n.addEventListener("jspanelresizestop",y=>{y.panel===n&&(f==="smallified"||f==="smallifiedmax"||f==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(p),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(f=>{n.addEventListener(f,y=>{!y.target.closest(".jsPanel-btn-close")&&!y.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let f=e.onparentresize,y=typeof f,A=n.isChildpanel();if(A){const b=A.content;let k=[];n.parentResizeHandler=ae=>{if(ae.panel===A){k[0]=b.offsetWidth,k[1]=b.offsetHeight;let ue=n.status,q,Y;ue==="maximized"&&f?n.maximize():n.snapped&&ue!=="minimized"?n.snap(n.snapped,!0):ue==="normalized"||ue==="smallified"||ue==="maximized"?y==="function"?f.call(n,n,{width:k[0],height:k[1]}):y==="object"&&f.preset===!0?(q=(k[0]-n.offsetWidth)*n.hf,n.style.left=q<=0?0:q+"px",Y=(k[1]-n.offsetHeight)*n.vf,n.style.top=Y<=0?0:Y+"px",f.callback.call(n,n,{width:k[0],height:k[1]})):y==="boolean"&&(q=(k[0]-n.offsetWidth)*n.hf,n.style.left=q<=0?0:q+"px",Y=(k[1]-n.offsetHeight)*n.vf,n.style.top=Y<=0?0:Y+"px"):ue==="smallifiedmax"&&f&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(f=>f.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(f=>f.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(f=>f.call(n,n)):t.call(n,n)),document.dispatchEvent(a),n}};const Ta=/\$([A-Za-z_][A-Za-z0-9_]*)/g;function gh(...e){const t=new Set;for(const r of e)if(r)for(const i of r.matchAll(Ta))t.add(i[1]);return[...t]}function bh(e,t,r){return e.replace(Ta,(i,n)=>{const a=r[n];if(!a)return"";const c=t.data[a];return c==null?"":String(c)})}function Po(e){return e==null||e===""}function yh(e,t){const r=Object.entries(t).filter(([,i])=>i!=null&&String(i).trim()!=="");return r.length===0?e:e.filter(i=>r.every(([n,a])=>String(i.data[n]??"").toLowerCase().includes(String(a).toLowerCase())))}function wh(e,t,r=!0){if(!t)return e;const i=r?1:-1;return[...e].sort((n,a)=>{const c=n.data[t],d=a.data[t],p=Po(c),w=Po(d);if(p||w)return p===w?0:p?1:-1;const S=Number(c),x=Number(d);return!Number.isNaN(S)&&!Number.isNaN(x)?(S-x)*i:String(c).localeCompare(String(d),void 0,{numeric:!0,sensitivity:"base"})*i})}function vh(e,t){return wh(yh(e,t.filters??{}),t.sortColumn,t.sortAsc??!0)}function xh(e){return!!e&&e.trim().length>0}var $h=Object.defineProperty,kh=Object.getOwnPropertyDescriptor,Gn=(e,t,r,i)=>{for(var n=i>1?void 0:i?kh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&$h(t,r,n),n};function Ch(e){(jt.instance??Eh()).open(e)}function Eh(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function To(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let jt=class extends Ge{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()}}connectedCallback(){super.connectedCallback(),jt.instance=this}disconnectedCallback(){super.disconnectedCallback(),jt.instance===this&&(jt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(e){this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await Se(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(r=>r.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((r,i)=>r.name.localeCompare(i.name))}openInstance(e){document.dispatchEvent(new CustomEvent("easydb:open-view",{detail:{instanceId:e}})),this.close()}async deleteInstance(e){await(await Se()).store.viewInstances.remove(e),document.dispatchEvent(new CustomEvent("easydb:close-view",{detail:{instanceId:e}})),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await Se();e.id?await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}):await t.store.viewTemplates.insert({id:To(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}),await this.refresh(),this.mode="list"}useTemplate(e){const t=gh(e.headerHtml,e.rowHtml,e.footerHtml),r={};for(const i of t)r[i]=this.autoMap(i);this.iDraft={templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:r},this.mode="instance"}autoMap(e){const t=e.toLowerCase();return this.columns.find(i=>i.field.toLowerCase()===t||(i.label??"").toLowerCase()===t)?.field??""}async createInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await Se(),r=this.columns.filter(n=>!n.hidden).map(n=>n.field),i={id:To(),workspaceId:t.workspaceId,tableId:this.tableId,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:r,mapping:{...e.mapping},updatedAt:Date.now()};await t.store.viewInstances.insert(i),this.openInstance(i.id)}renderList(){return N`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>N`<li>
                <span class="name">${e.name}</span>
                <button class="mini" @click=${()=>this.openInstance(e.id)}>Open</button>
                <button class="mini danger" @click=${()=>void this.deleteInstance(e.id)}>
                  Delete
                </button>
              </li>`)}
        </ul>
      </div>
      <div class="section">
        <h3>View templates (workspace)</h3>
        <ul class="list">
          ${this.templates.map(e=>N`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?N`<span class="badge">built-in</span>`:_e}
                <button class="mini" @click=${()=>this.useTemplate(e)}>Use</button>
                <button class="mini" @click=${()=>this.editTemplate(e)}>Edit</button>
                <button class="mini" @click=${()=>this.copyTemplate(e)}>Copy</button>
              </li>`)}
        </ul>
        <div>
          <button class="mini" @click=${()=>this.newTemplate()}>+ New template</button>
        </div>
        <p class="hint">
          A template's row HTML uses <code>$TOKEN</code> placeholders (e.g. <code>$TITLE</code>).
          Leave row HTML blank to show a read-only columns table with the header/footer HTML around
          it.
        </p>
      </div>
    `}renderTemplate(){const e=this.tDraft,t=r=>i=>{this.tDraft={...e,[r]:i.target.value}};return N`
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
    `}renderInstance(){const e=this.iDraft;return N`
      <label class="field">
        View name
        <input
          type="text"
          .value=${e.name}
          @input=${t=>this.iDraft={...e,name:t.target.value}}
        />
      </label>
      <div class="section">
        <h3>Map placeholders to columns</h3>
        ${e.tokens.length===0?N`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>N`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${r=>this.iDraft={...e,mapping:{...e.mapping,[t]:r.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(r=>N`<option value=${r.field} ?selected=${e.mapping[t]===r.field}>
                          ${r.label||r.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">The view snapshots this table's current sort, filters and visible columns.</p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`New view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?N`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="button" class="primary" @click=${()=>void this.saveTemplate()}>
              Save
            </button>`:this.mode==="instance"?N`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="button" class="primary" @click=${()=>void this.createInstance()}>
                Create view
              </button>`:N`<button type="button" class="ghost" @click=${this.close}>Close</button>`;return N`
      <dialog @cancel=${this.close}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <div class="dialog-header">
          <h2>${e}</h2>
          <div class="header-actions">${t}</div>
        </div>
        <div class="dialog-body">
          ${this.mode==="template"?this.renderTemplate():this.mode==="instance"?this.renderInstance():this.renderList()}
        </div>
      </dialog>
    `}};jt.instance=null;jt.styles=[Zt,Je`
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
    `];Gn([H()],jt.prototype,"mode",2);Gn([H()],jt.prototype,"instances",2);Gn([H()],jt.prototype,"templates",2);Gn([H()],jt.prototype,"tDraft",2);Gn([H()],jt.prototype,"iDraft",2);jt=Gn([ot("views-dialog")],jt);var Sh=Object.defineProperty,_h=Object.getOwnPropertyDescriptor,$n=(e,t,r,i)=>{for(var n=i>1?void 0:i?_h(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Sh(t,r,n),n};let Jt=class extends Ge{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.rows=[],this.allRows=[]}async connectedCallback(){super.connectedCallback(),await this.load()}disconnectedCallback(){super.disconnectedCallback(),this.rowsUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async load(){if(!this.viewInstanceId)return;const e=await Se(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const r=await e.store.tables.findOne(t.tableId),i=new Map((r?.columns??[]).map(a=>[a.field,a]));this.columns=t.visibleColumns.map(a=>i.get(a)??{field:a,label:a,type:"string"});const n=e.store.rows(t.tableId);this.rowsUnsub=n.subscribe(a=>{this.allRows=a,this.recompute()}),this.allRows=await n.find(),this.recompute(),this.loaded=!0}recompute(){this.instance&&(this.rows=vh(this.allRows,this.instance))}renderTable(){return this.rows.length===0?N`<div class="vw-empty">No rows.</div>`:N`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>N`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>N`<tr>
                ${this.columns.map(t=>{const r=e.data[t.field];return N`<td>${r==null?"":String(r)}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}render(){if(!this.loaded)return N`<div class="vw-loading">Loading…</div>`;if(this.error)return N`<div class="vw-empty">${this.error}</div>`;const e=this.template;if(!e)return N`<div class="vw-empty">This view's template is missing.</div>`;if(xh(e.rowHtml)){const t=this.instance?.mapping??{},r=this.rows.map(n=>bh(e.rowHtml,n,t)).join(""),i=(e.headerHtml??"")+r+(e.footerHtml??"");return N`<div class="vw-root">${qi(i)}</div>`}return N`<div class="vw-root">
      ${e.headerHtml?.trim()?N`<div class="vw-html">${qi(e.headerHtml)}</div>`:_e}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?N`<div class="vw-html">${qi(e.footerHtml)}</div>`:_e}
    </div>`}};Jt.styles=Je`
    :host {
      display: block;
      overflow: auto;
      height: 100%;
      background: #f8fafc;
      font-family: system-ui, sans-serif;
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
  `;$n([Ut({type:String})],Jt.prototype,"viewInstanceId",2);$n([H()],Jt.prototype,"loaded",2);$n([H()],Jt.prototype,"error",2);$n([H()],Jt.prototype,"instance",2);$n([H()],Jt.prototype,"template",2);$n([H()],Jt.prototype,"columns",2);$n([H()],Jt.prototype,"rows",2);Jt=$n([ot("view-window")],Jt);const Ah={name:"views",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",optional:!0},Ph='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 3h8v8H3V3zm10 0h8v5h-8V3zM3 13h8v8H3v-8zm10 3h8v5h-8v-5z"/></svg>',Do="RSS Feed",Th='<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',Dh=['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;">$DESCRIPTION</div>',"</div>"].join(""),jh="</div>";function Rh(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:Ph,tooltip:"Views — display this table through a template",onClick:(t,{tableId:r})=>Ch(r)}),document.addEventListener("easydb:open-view",t=>{const r=t.detail?.instanceId;r&&zh(e,r)}),document.addEventListener("easydb:close-view",t=>{const r=t.detail?.instanceId;r&&Lh(r)})}async function Oh(e){await Fh(e)}async function Fh(e){const t=e.workspaceId();if(!t)return;const r=`views:seeded:rss:${t}`;if((await e.store.settings.findOne(r))?.value)return;(await e.store.viewTemplates.find({workspaceId:t})).some(a=>a.builtin&&a.name===Do)||await e.store.viewTemplates.insert({id:Mh(),workspaceId:t,name:Do,headerHtml:Th,rowHtml:Dh,footerHtml:jh,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({key:r,value:!0})}const ur=new Map;function Ih(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}async function zh(e,t){const r=ur.get(t);if(r){try{r.front?.()}catch{}return}const i=await e.store.viewInstances.findOne(t);if(!i)return;const n=document.createElement("view-window");n.viewInstanceId=t,n.style.height="100%";const a=i.windowGeometry,c=`view-panel-${Bh(t)}`,d=a?{panelSize:`${a.w} ${a.h}`}:{contentSize:"480 520"},p=a?{my:"left-top",at:"left-top",offsetX:a.x,offsetY:a.y}:{my:"center-top",at:"center-top",offsetY:60},w=F.create({id:c,container:Ih(),headerTitle:i.name,theme:"#0891b2",content:n,...d,position:p,dragit:{containment:!1,stop:()=>void jo(e,t,c)},resizeit:{containment:!1,stop:()=>void jo(e,t,c)},onclosed:()=>{ur.delete(t)}});ur.set(t,w)}function Lh(e){const t=ur.get(e);if(t){ur.delete(e);try{t.close?.()}catch{}}}async function jo(e,t,r){const i=document.getElementById(r);if(i)try{await e.store.viewInstances.patch(t,{windowGeometry:{x:i.offsetLeft,y:i.offsetTop,w:i.offsetWidth,h:i.offsetHeight,z:0,minimized:!1,maximized:!1},updatedAt:Date.now()})}catch{}}function Bh(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Mh(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Nh=Object.freeze(Object.defineProperty({__proto__:null,init:Rh,load:Oh,meta:Ah},Symbol.toStringTag,{value:"Module"})),Da=[wd,Cc,Kc,Hu,Pc,Vu,ed,cd,gd,$d,Rd,zd,Nd,Yd,dh,Pa,Nh],qh=Da;function rs(e){return`builtin:${e}`}async function Uh(e){const t=[];for(const r of Da)if(!await Hh(e,r)){t.push(r);try{await r.init?.(e)}catch(i){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"init",error:i})}}return async()=>{for(const r of t)try{await r.load?.(e)}catch(i){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"load",error:i})}}}async function Hh(e,t){if(!t.meta?.optional)return!1;const r=t.meta.name;return r?(await e.store.plugins.findOne(rs(r)))?.enabled===!1:!1}async function Wh(e){const t=e.workspaceId();if(!t)return async()=>{};const i=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const a of i)try{const c=await e.store.plugins.findOne(a);if(c&&c.enabled===!1)continue;let d=c?.cachedBody??"";if(d)Kh(e,a,d);else{try{d=await ja(a)}catch(S){await e.store.plugins.upsert({url:a,enabled:c?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${S.message}`}),e.events.emit("plugin:error",{url:a,phase:"fetch",error:S});continue}await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),cachedBody:d})}const p=new Blob([d],{type:"text/javascript"}),w=URL.createObjectURL(p);try{const S=await import(w);await S.init?.(e),n.push({url:a,mod:S})}finally{setTimeout(()=>URL.revokeObjectURL(w),5e3)}}catch(c){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`init: ${c.message}`}),e.events.emit("plugin:error",{url:a,phase:"init",error:c})}return async()=>{for(const{url:a,mod:c}of n)try{await c.load?.(e)}catch(d){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`load: ${d.message}`}),e.events.emit("plugin:error",{url:a,phase:"load",error:d})}}}async function ja(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function Kh(e,t,r){return(async()=>{try{const i=await ja(t);if(i===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:i})}catch{}})()}let Vi=null;function Se(){return Vi||(Vi=Vh()),Vi}async function Vh(){const e=await Hl(),t=Vl(e),r=Xl(),i=nc(),n=new Map;t.tables.subscribe(U=>{n.clear();for(const oe of U)n.set(oe.id,oe)});const a={...t.tables,insert:U=>(n.set(U.id,U),t.tables.insert(U)),upsert:U=>(n.set(U.id,U),t.tables.upsert(U))};let c=null;const d={get backend(){if(!c)throw new Error("[host] row-source ctx used before app init completed");return c.backend},events:r,settings:t.settings,workspaceId:()=>x},p=Yl({base:{...t,tables:a},providers:i.rowSources,tableById:U=>n.get(U),ctx:d}),w=Yh(),S=await p.workspaces.find();let x;if(w){const U=Qh(w),oe=S.find(de=>de.id===U||de.name===w);oe?x=oe.id:x=(await p.workspaces.insert({id:U,name:w,createdAt:Date.now(),pluginUrls:[]})).id}else{const U=Xh(),oe=U?S.find(de=>de.id===U):void 0;oe?x=oe.id:S.length>0?x=S[0].id:x=(await p.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}Gh(x);const O=sc({store:p,events:r,registries:i,workspaceId:()=>x});c=O,r.on("import:after",({source:U,tableId:oe,rowCount:de})=>{U!=="datasette"&&O.store.tables.findOne(oe).then(xe=>{O.ui.dialogs.toast(`Imported ${de} row${de===1?"":"s"} into "${xe?.name??oe}".`,{kind:"success",title:U.toUpperCase()+" import"})})}),r.on("plugin:error",({url:U,phase:oe,error:de})=>{O.ui.dialogs.toast(`[${oe}] ${de?.message??String(de)}`,{kind:"error",title:`Plugin: ${U}`})});const W=await Uh(O),L=await Wh(O);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:x}),await W(),await L()}),{store:p,events:r,workspaceId:x,registries:i,api:O}}function Yh(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const Ra="eda:lastWorkspaceId";function Xh(){try{return globalThis.localStorage?.getItem(Ra)??null}catch{return null}}function Gh(e){try{globalThis.localStorage?.setItem(Ra,e)}catch{}}function Qh(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var Jh=Object.defineProperty,Zh=Object.getOwnPropertyDescriptor,hi=(e,t,r,i)=>{for(var n=i>1?void 0:i?Zh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Jh(t,r,n),n};let Vn=class extends Ge{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=gr(this.text)}catch(c){this.errorMsg=`Couldn't parse the CSV: ${c.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const i=await Se(),n=crypto.randomUUID();await i.store.tables.insert({id:n,workspaceId:i.workspaceId,name:t,code:ef(t),columns:r.columns,view:"table",updatedAt:Date.now()});const a=r.rows.map(c=>({id:crypto.randomUUID(),tableId:n,data:c,updatedAt:Date.now()}));await i.store.rows(n).bulkInsert(a),i.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return N`
      <dialog @cancel=${this.close} @keydown=${xn}>
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
            ${this.errorMsg?N`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};Vn.styles=[Zt,Je`
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
    `];hi([H()],Vn.prototype,"name",2);hi([H()],Vn.prototype,"text",2);hi([H()],Vn.prototype,"errorMsg",2);Vn=hi([ot("csv-paste-dialog")],Vn);function ef(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var tf=Object.defineProperty,nf=Object.getOwnPropertyDescriptor,ms=(e,t,r,i)=>{for(var n=i>1?void 0:i?nf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&tf(t,r,n),n};const rf=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let Qt=class extends Ge{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),Qt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Qt.instance===this&&(Qt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:rf,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return N`
      <dialog @cancel=${this.onCancel} @keydown=${xn}>
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
    `}};Qt.instance=null;Qt.styles=[Zt,Je`
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
    `];ms([H()],Qt.prototype,"text",2);ms([H()],Qt.prototype,"columnLabel",2);Qt=ms([ot("script-editor-dialog")],Qt);var sf=Object.defineProperty,of=Object.getOwnPropertyDescriptor,Wt=(e,t,r,i)=>{for(var n=i>1?void 0:i?of(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&sf(t,r,n),n};const af=["string","number","boolean","date","datetime"];let Ot=class extends Ge{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.columns=[],this.errorMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(e){this.errorMsg="";const t=await Se();if(this.rendererOptions=[...t.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=t.events.on("app:ready",()=>{this.rendererOptions=[...t.registries.cellRenderers.keys()].sort()}),e){const r=await Se(),i=await r.store.tables.findOne(e);if(!i)return;this.mode="edit",this.editTableId=e,this.name=i.name,this.columns=i.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,origField:a.field}));const n=await r.store.rows(e).find();this.previewRows=n.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const i=[...this.columns],[n]=i.splice(e,1);i.splice(r,0,n),this.columns=i}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientY<i.top+i.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,i=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!i)return;const n=[...this.columns],[a]=n.splice(r,1);let c=t+(r<t?-1:0);i==="after"&&(c+=1),n.splice(c,0,a),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,i)=>i===e?{...r,...t}:r)}async editScript(e){const t=Qt.instance;if(!t)return;const r=this.columns[e];if(!r)return;const i=await t.open(r.script??"",r.label||r.field);i!==null&&this.patchColumn(e,{script:i.trim()?i:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const r=new Set;for(const a of this.columns){const c=a.field.trim();if(!c){this.errorMsg="Column field names cannot be empty.";return}if(r.has(c)){this.errorMsg=`Duplicate column field: ${c}`;return}r.add(c)}const i=await Se(),n=this.columns.map(a=>{const c={field:a.field.trim(),label:a.label.trim()||a.field.trim(),type:a.type};return a.renderer&&(c.renderer=a.renderer),a.script&&(c.script=a.script),a.max!=null&&a.max>0&&(c.max=a.max),a.unique&&(c.unique=!0),a.notnull&&(c.notnull=!0),a.hidden&&(c.hidden=!0),c});if(this.mode==="edit"&&this.editTableId){const a=this.editTableId,c=await i.store.tables.findOne(a),d=new Map((c?.columns??[]).map(w=>[w.field,w])),p=n.filter(w=>{const S=d.get(w.field);return w.unique&&!S?.unique||w.notnull&&!S?.notnull||w.max&&w.max>0&&w.max!==S?.max});if(p.length>0){const w=await i.store.rows(a).find(),S=uf(p,w);if(S.length>0){this.errorMsg=`Cannot save: ${S.length} existing ${S.length===1?"row violates":"rows violate"} the new constraints.
${S.slice(0,5).join(`
`)}${S.length>5?`
…and ${S.length-5} more.`:""}`;return}}await i.store.tables.patch(a,{name:t,columns:n,updatedAt:Date.now()})}else await i.store.tables.insert({id:hf(),workspaceId:i.workspaceId,name:t,code:df(t),columns:n,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return N`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const t of this.columns){if(!t.unique)continue;const r=new Set,i=new Set;for(const n of this.previewRows){const a=n.data[t.field];a==null||a===""||(r.has(a)&&i.add(a),r.add(a))}e.set(t.field,i)}return N`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${this.columns.map(t=>N`<th title=${t.field}>${t.label||t.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(t=>N`
                <tr>
                  ${this.columns.map(r=>{const i=t.data[r.field],n=cf(r,i,e.get(r.field));return N`<td
                      class=${n?"violation":""}
                      title=${n??""}
                    >${lf(i)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return N`
      <dialog @cancel=${this.close} @keydown=${xn}>
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
            ${this.columns.map((r,i)=>{const n=this.dragSrcIdx===i,a=this.dropTargetIdx===i,c=a&&this.dropEdge==="before"?" drop-before":a&&this.dropEdge==="after"?" drop-after":"";return N`
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
                    ${af.map(d=>N`<option value=${d} ?selected=${d===r.type}>${d}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${d=>{const p=d.target.value;this.patchColumn(i,{renderer:p||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(d=>N`<option value=${d} ?selected=${d===r.renderer}>${d}</option>`)}
                  </select>
                  ${r.renderer==="script"?N`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(i)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:N`<span></span>`}
                  <input
                    type="number"
                    min="0"
                    placeholder="—"
                    title="Max length (strings) or max value (numbers)"
                    .value=${r.max==null?"":String(r.max)}
                    @input=${d=>{const p=d.target.value;this.patchColumn(i,{max:p===""?void 0:Number(p)})}}
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

          ${this.renameDetected()?N`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?N`<div class="error">${this.errorMsg}</div>`:""}
          ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};Ot.styles=[ln,Zt,Je`
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
  `];Wt([H()],Ot.prototype,"mode",2);Wt([H()],Ot.prototype,"editTableId",2);Wt([H()],Ot.prototype,"name",2);Wt([H()],Ot.prototype,"columns",2);Wt([H()],Ot.prototype,"errorMsg",2);Wt([H()],Ot.prototype,"dragSrcIdx",2);Wt([H()],Ot.prototype,"dropTargetIdx",2);Wt([H()],Ot.prototype,"dropEdge",2);Wt([H()],Ot.prototype,"previewRows",2);Wt([H()],Ot.prototype,"rendererOptions",2);Ot=Wt([ot("new-table-dialog")],Ot);function lf(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function cf(e,t,r){const i=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&i)return`${e.label}: empty`;if(i)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!i){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function uf(e,t){const r=[];for(const i of e)if(i.notnull&&t.forEach((n,a)=>{const c=n.data[i.field];(c==null||typeof c=="string"&&c.trim()==="")&&r.push(`Row ${a+1}: ${i.label} is empty.`)}),i.max!=null&&i.max>0&&t.forEach((n,a)=>{const c=n.data[i.field];typeof c=="string"&&c.length>i.max?r.push(`Row ${a+1}: ${i.label} length ${c.length} > max ${i.max}.`):typeof c=="number"&&c>i.max&&r.push(`Row ${a+1}: ${i.label} value ${c} > max ${i.max}.`)}),i.unique){const n=new Map;t.forEach((a,c)=>{const d=a.data[i.field];d==null||d===""||(n.has(d)?r.push(`Row ${c+1}: ${i.label} duplicates row ${n.get(d)+1} ("${String(d)}").`):n.set(d,c))})}return r}function df(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function hf(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var ff=Object.defineProperty,pf=Object.getOwnPropertyDescriptor,Lt=(e,t,r,i)=>{for(var n=i>1?void 0:i?pf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&ff(t,r,n),n};let Ct=class extends Ge{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.builtinNames=[],this.optionalBuiltins=[],this.dirtyBuiltins=!1,this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(){const e=await Se(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(a=>[a.url,a]));const i=[],n=[];for(const a of qh){const c=a.meta?.name;if(c)if(a.meta?.optional){const d=this.records.get(rs(c));n.push({name:c,...a.meta?.description?{description:a.meta.description}:{},...a.meta?.author?{author:a.meta.author}:{},enabled:d?.enabled!==!1})}else i.push(c)}this.builtinNames=i,this.optionalBuiltins=n,this.dirtyBuiltins=!1,this.addUrl="",await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(),this.refreshServerRegistry()}async refreshCatalog(){const e=new URL("/plugins/catalog.json",location.origin).toString();try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),i=Array.isArray(r.plugins)?r.plugins:[];this.catalog=i.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await Se()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const a=await fetch(n,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const c=await a.json(),d=Array.isArray(c.plugins)?c.plugins:[];this.serverCatalog=d.map(p=>({...p,absUrl:new URL(p.url,n).toString()})),this.serverCatalogError=null}catch(a){this.serverCatalog=[],this.serverCatalogError=a.message}}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await Se()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await Se();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await Se(),i=this.records.get(e);await r.store.plugins.upsert({...i??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...i,url:e,enabled:t,lastFetched:i?.lastFetched??0}))}async removePlugin(e){const t=await Se();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await Se(),i=rs(e),n=this.records.get(i);await r.store.plugins.upsert({...n??{url:i,lastFetched:0},url:i,enabled:t,lastFetched:n?.lastFetched??0}),this.optionalBuiltins=this.optionalBuiltins.map(a=>a.name===e?{...a,enabled:t}:a),this.dirtyBuiltins=!0}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await Se();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const i=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:i});const n=new Blob([i],{type:"text/javascript"}),a=URL.createObjectURL(n);try{const d=await import(a);await d.init?.(t.api),await d.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(a),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const c=await t.store.plugins.find();this.records=new Map(c.map(d=>[d.url,d])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}render(){return N`
      <dialog @cancel=${this.close} @keydown=${xn}>
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
            ${this.catalog.length>0?N`<div class="section-h">Available from this host</div>`:""}
            ${this.catalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return N`
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
            ${this.catalogError?N`<div class="meta err">
                  Host catalog unavailable: ${this.catalogError}
                </div>`:""}

            ${this.serverCatalog.length>0||this.serverCatalogError?N`<div class="section-h">From server</div>`:""}
            ${this.serverCatalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return N`
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
            ${this.serverCatalogError?N`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            ${this.optionalBuiltins.length>0?N`<div class="section-h">Optional built-ins</div>`:""}
            ${this.optionalBuiltins.map(e=>N`
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
            ${this.builtinNames.map(e=>N`
                <div class="row builtin">
                  <span class="mi sm">extension</span>
                  <div>
                    <div>${e}</div>
                    <div class="meta">Built-in</div>
                  </div>
                  <span class="meta">always on</span>
                </div>
              `)}

            ${this.urls.length>0?N`<div class="section-h">Installed (by URL)</div>`:""}
            ${this.urls.map(e=>{const t=this.records.get(e),r=t?.lastError?" error":"",i=t?.lastFetched?new Date(t.lastFetched).toLocaleString():"never";return N`
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
    `}};Ct.styles=[ln,Zt,Je`
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
    `];Lt([H()],Ct.prototype,"urls",2);Lt([H()],Ct.prototype,"records",2);Lt([H()],Ct.prototype,"addUrl",2);Lt([H()],Ct.prototype,"builtinNames",2);Lt([H()],Ct.prototype,"optionalBuiltins",2);Lt([H()],Ct.prototype,"dirtyBuiltins",2);Lt([H()],Ct.prototype,"catalog",2);Lt([H()],Ct.prototype,"catalogError",2);Lt([H()],Ct.prototype,"serverCatalog",2);Lt([H()],Ct.prototype,"serverCatalogError",2);Lt([H()],Ct.prototype,"installing",2);Ct=Lt([ot("plugin-manager-dialog")],Ct);const mf=.25,gf=4;function bf(e){return Math.min(gf,Math.max(mf,e))}function Ro(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const lr={x:0,y:0,scale:1};function Oo(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function yf(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function wf(e,t){let r={...lr};t.style.transformOrigin="0 0";const i=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`};let n="none",a={...lr},c=0,d=0,p=0,w=0,S=0,x=0;const O=(f,y)=>{const A=e.getBoundingClientRect();return{x:f-A.left,y:y-A.top}},W=f=>{if(f.touches.length===2){n="pinch",a={...r};const[y,A]=[f.touches[0],f.touches[1]];p=Oo(y,A)||1;const b=O((y.clientX+A.clientX)/2,(y.clientY+A.clientY)/2);w=(b.x-r.x)/r.scale,S=(b.y-r.y)/r.scale,f.preventDefault();return}if(f.touches.length===1&&!yf(f.target)){const y=f.timeStamp;if(y-x<300){r={...lr},i(),x=0,n="none",f.preventDefault();return}x=y,n="pan",a={...r},c=f.touches[0].clientX,d=f.touches[0].clientY}else n="none"},L=f=>{if(n==="pan"&&f.touches.length===1){const y=f.touches[0];r=Ro(a,y.clientX-c,y.clientY-d),i(),f.preventDefault()}else if(n==="pinch"&&f.touches.length>=2){const[y,A]=[f.touches[0],f.touches[1]],b=bf(a.scale*(Oo(y,A)/p)),k=O((y.clientX+A.clientX)/2,(y.clientY+A.clientY)/2);r={x:k.x-w*b,y:k.y-S*b,scale:b},i(),f.preventDefault()}},U=f=>{f.touches.length===0?n="none":f.touches.length===1&&n==="pinch"&&(n="pan",a={...r},c=f.touches[0].clientX,d=f.touches[0].clientY)};let oe=!1,de={...lr},xe=0,Fe=0,ie=!1;const he=(f,y)=>{const A=e.getBoundingClientRect();return f>=A.left&&f<=A.right&&y>=A.top&&y<=A.bottom},be=f=>{if(!oe)return;const y=f.clientX-xe,A=f.clientY-Fe;!ie&&Math.hypot(y,A)<4||(ie=!0,document.body.style.cursor="grabbing",r=Ro(de,y,A),i(),f.preventDefault())},ye=()=>{oe&&(oe=!1,document.body.style.cursor="",window.removeEventListener("mousemove",be,!0),window.removeEventListener("mouseup",ft,!0))};function ft(){ye()}const $t=f=>{f.button===2&&he(f.clientX,f.clientY)&&(oe=!0,ie=!1,de={...r},xe=f.clientX,Fe=f.clientY,window.addEventListener("mousemove",be,!0),window.addEventListener("mouseup",ft,!0))},wt=f=>{ie&&(f.preventDefault(),ie=!1)};return e.addEventListener("touchstart",W,{passive:!1}),e.addEventListener("touchmove",L,{passive:!1}),e.addEventListener("touchend",U),e.addEventListener("touchcancel",U),window.addEventListener("mousedown",$t,!0),window.addEventListener("contextmenu",wt,!0),{snapshot:()=>({...r}),reset:()=>{r={...lr},i()},restore:f=>{r={...f},i()},dispose:()=>{e.removeEventListener("touchstart",W),e.removeEventListener("touchmove",L),e.removeEventListener("touchend",U),e.removeEventListener("touchcancel",U),window.removeEventListener("mousedown",$t,!0),window.removeEventListener("contextmenu",wt,!0),ye()}}}var vf=Object.defineProperty,xf=Object.getOwnPropertyDescriptor,vr=(e,t,r,i)=>{for(var n=i>1?void 0:i?xf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&vf(t,r,n),n};let zn=class extends Ge{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return N`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return N`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};zn.styles=[ln,Je`
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
    `];vr([Ut({type:String})],zn.prototype,"tableId",2);vr([H()],zn.prototype,"query",2);vr([H()],zn.prototype,"open",2);vr([Yn("input")],zn.prototype,"inputEl",2);zn=vr([ot("panel-search")],zn);var $f=Object.defineProperty,kf=Object.getOwnPropertyDescriptor,Qn=(e,t,r,i)=>{for(var n=i>1?void 0:i?kf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&$f(t,r,n),n};let vn=class extends Ge{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1}async connectedCallback(){super.connectedCallback();const e=await Se();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(r=>r.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await Se();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await Se(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const i of t.columns)r[i.field]=Cf(i);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}async runTableButton(e){const t=await Se();try{await Promise.resolve(e.onClick(t.api,{tableId:this.tableId}))}catch(r){console.error(`[table-button:${e.id}]`,r)}}render(){return N`
      <button title="Add a blank row" @click=${this.addRow}>
        <span class="mi sm">add</span><span>Add row</span>
      </button>
      <button title="Edit columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span><span>Columns</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>N`<button title=${e.tooltip??e.label} @click=${()=>this.runTableButton(e)}>
              ${e.icon?N`<span class="mi sm">${e.icon}</span>`:""}
              <span>${e.label}</span>
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};vn.styles=[ln,Je`
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
    `];Qn([Ut({type:String})],vn.prototype,"tableId",2);Qn([Ut({type:Boolean})],vn.prototype,"active",2);Qn([H()],vn.prototype,"rowCount",2);Qn([H()],vn.prototype,"tableButtons",2);Qn([H()],vn.prototype,"table",2);vn=Qn([ot("panel-footer")],vn);function Cf(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function Ef(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Sf(e){const t=document.querySelector("app-shell")?.shadowRoot,r=t?.querySelector("header"),i=t?.querySelector("footer");r&&(e.style.top=`${r.offsetHeight}px`),i&&(e.style.bottom=`${i.offsetHeight}px`)}const Rn=new Map,Xr=new Set,Oa=new Set;let Fo=!1,Gr=null;async function _f(){if(Fo)return;Fo=!0;const e=await Se(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");if(t&&r){Gr=wf(t,r);const n=()=>Sf(t);n(),window.addEventListener("resize",n);const a=document.querySelector("app-shell")?.shadowRoot,c=a?.querySelector("header"),d=a?.querySelector("footer");if(typeof ResizeObserver<"u"&&(c||d)){const p=new ResizeObserver(n);c&&p.observe(c),d&&p.observe(d)}}const i=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);i.sort(Io);for(const n of i)zo(n,e);e.store.tables.subscribe(n=>{const a=n.filter(p=>p.workspaceId===e.workspaceId),c=new Set(a.map(p=>p.id));for(const[p,w]of Rn)if(!c.has(p)){Rn.delete(p),Xr.add(p),Oa.add(p);try{w.status!=="closed"&&w.close()}catch{}}const d=a.filter(p=>!Rn.has(p.id)).sort(Io);for(const p of d)zo(p,e)})}function Io(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const Af=200,Pf=100,Tf=720,Df=360;function jf(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<Af||e.h<Pf?null:{...e}}function zo(e,t){const r=`panel-${Fa(e.id)}`,i=Ef(),n=jf(e.windowGeometry),a=n?.minimized===!0,c=()=>{const y=document.createElement("data-table");return y.tableId=e.id,y.style.height="100%",y},d=a?document.createElement("div"):c();let p=a?null:d,w=e.name,S=null;const x=y=>{typeof ye.setHeaderTitle=="function"&&ye.setHeaderTitle(`${w} (${y})`)},O=()=>{S||(S=t.store.rows(e.id).subscribe(y=>x(y.length)))},W=()=>{S?.(),S=null},L=()=>{W(),de.active=!1,p?.remove(),p=null},U=()=>{if(p)return;const y=document.getElementById(r)?.querySelector(".jsPanel-content");if(!y)return;y.replaceChildren();const A=c();y.appendChild(A),p=A,de.active=!0,O()},oe=document.createElement("panel-search");oe.tableId=e.id;const de=document.createElement("panel-footer");de.tableId=e.id,de.active=!a;let xe=null,Fe=!1;const ie=y=>{const A=y==="maximized";A&&!Fe?(xe=Gr?.snapshot()??null,Gr?.reset()):!A&&Fe&&(xe&&Gr?.restore(xe),xe=null),Fe=A},he=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:Of(),be=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:`${Tf} ${Df}`},ye=F.create({id:r,container:i,headerTitle:e.name,footerToolbar:de,theme:"primary",content:d,...be,position:he,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>Yi(e.id,t)},resizeit:{containment:!1,stop:()=>Yi(e.id,t)},onfronted:()=>Ff(e.id,t),onbeforeclose:()=>Xr.has(e.id)?!0:((async()=>await t.api.ui.dialogs.confirm(e.source?`Remove the live table "${e.name}"? Its data stays on the Datasette server.`:`Delete table "${e.name}" and all its rows?`,"Confirm")&&(Xr.add(e.id),Rn.get(e.id)?.close()))(),!1),onclosed:async()=>{Rn.delete(e.id),Xr.delete(e.id),!Oa.delete(e.id)&&await If(e.id,t)},onstatuschange:y=>{y.status==="minimized"?L():(y.status==="normalized"||y.status==="maximized")&&U(),ie(y.status),Yi(e.id,t)}});Rn.set(e.id,ye);const ft=document.getElementById(r),$t=ft?.querySelector(".jsPanel-controlbar");$t&&$t.prepend(oe);const wt=ft?.querySelector(".jsPanel-titlebar");wt&&(wt.tabIndex=-1,wt.style.outline="none",wt.addEventListener("pointerdown",()=>wt.focus())),n?.maximized&&typeof ye.maximize=="function"?queueMicrotask(()=>ye.maximize?.()):n?.minimized&&typeof ye.minimize=="function"&&queueMicrotask(()=>ye.minimize?.()),t.store.tables.subscribe(y=>{const A=y.find(b=>b.id===e.id);A&&A.name!==w&&(w=A.name,S&&t.store.rows(e.id).find().then(b=>x(b.length)))}),a||O();const f=ye.close.bind(ye);ye.close=()=>(W(),f())}let Rf=0;function Of(){const e=Rf++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function Yi(e,t){const r=document.getElementById(`panel-${Fa(e)}`);if(!r)return;const i=Rn.get(e)?.status??"normalized";try{const a=(await t.store.tables.findOne(e))?.windowGeometry,c=i==="minimized",d=i==="maximized";let p=r.offsetLeft,w=r.offsetTop,S=r.offsetWidth,x=r.offsetHeight;(c||d)&&a&&(p=a.x,w=a.y,S=a.w,x=a.h),p<=-9e3&&(p=a?.x??40);const O={x:p,y:w,w:S,h:x,z:a?.z??0,minimized:c,maximized:d};await t.store.tables.patch(e,{windowGeometry:O,updatedAt:Date.now()})}catch{}}async function Ff(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const i=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...i,z:Date.now()},updatedAt:Date.now()})}catch{}}async function If(e,t){if(!(await t.store.tables.findOne(e))?.source){const i=t.store.rows(e),n=await i.find();await i.bulkRemove(n.map(a=>a.id))}await t.store.tables.remove(e)}function Fa(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var zf=Object.defineProperty,Lf=Object.getOwnPropertyDescriptor,Ia=(e,t,r,i)=>{for(var n=i>1?void 0:i?Lf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&zf(t,r,n),n};let ni=class extends Ge{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await Se();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(i=>i.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await _f()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?N``:N`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on
      the page, or click <strong>+ New Table</strong> above.
    </div>`}};ni.styles=Je`
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
  `;Ia([H()],ni.prototype,"tables",2);ni=Ia([ot("table-list")],ni);var Bf=Object.defineProperty,Mf=Object.getOwnPropertyDescriptor,gs=(e,t,r,i)=>{for(var n=i>1?void 0:i?Mf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Bf(t,r,n),n};let pr=class extends Ge{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await Se();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const i=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(i)}async addWorkspace(){const t=await(await Se()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return N`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>N`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};pr.styles=[ln,Je`
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
  `];gs([H()],pr.prototype,"workspaces",2);gs([H()],pr.prototype,"current",2);pr=gs([ot("workspace-selector")],pr);var Lo=Object.freeze,za=Object.defineProperty,Nf=Object.getOwnPropertyDescriptor,un=(e,t,r,i)=>{for(var n=i>1?void 0:i?Nf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&za(t,r,n),n},qf=(e,t)=>Lo(za(e,"raw",{value:Lo(e.slice())})),Bo;function Uf(e){return e?e.trimStart().startsWith("<svg")?N`<span class="icon-svg">${zl(e)}</span>`:N`<span class="mi sm">${e}</span>`:""}let qt=class extends Ge{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId)},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{Mo(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!Mo(e))return;e.preventDefault();const t=await Se(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const i of[...t.registries.dropHandlers])try{if(await i(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=e=>{this.api&&Promise.resolve(e.onClick(this.api)).catch(t=>{console.error(`[footer-button:${e.id}]`,t)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager)}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await Se();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e))}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){const r=t==="header"||e.variant==="primary"?"primary":"slot";return N`
      <button class=${r} title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
        ${Uf(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return N(Bo||(Bo=qf([`
      <header>
        <strong>easyDBAccess <span class="version">v0.0.49</span></strong>
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
    `])),this.headerButtons.map(e=>this.renderSlotButton(e,"header")),this.searchOpen?N`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?N`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:N`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              @click=${this.openSearch}
            >
              <span class="mi">search</span>
            </button>`,this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};qt.styles=[ln,Je`
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
    `];un([Yn("new-table-dialog")],qt.prototype,"dialog",2);un([Yn("csv-paste-dialog")],qt.prototype,"csvPasteDialog",2);un([Yn("plugin-manager-dialog")],qt.prototype,"pluginManagerDialog",2);un([Yn("input.search")],qt.prototype,"searchInput",2);un([H()],qt.prototype,"footerButtons",2);un([H()],qt.prototype,"headerButtons",2);un([H()],qt.prototype,"searchQuery",2);un([H()],qt.prototype,"searchOpen",2);qt=un([ot("app-shell")],qt);function Mo(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([Se(),cl(()=>Promise.resolve().then(()=>Pa),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});
//# sourceMappingURL=index-C7WdW1TH.js.map
