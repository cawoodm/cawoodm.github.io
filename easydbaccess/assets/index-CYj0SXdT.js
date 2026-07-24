(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const ul="modulepreload",dl=function(e){return"/easydbaccess/"+e},Ks={},hl=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){let c=function(w){return Promise.all(w.map(_=>Promise.resolve(_).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=d?.nonce||d?.getAttribute("nonce");n=c(r.map(w=>{if(w=dl(w),w in Ks)return;Ks[w]=!0;const _=w.endsWith(".css"),x=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${w}"]${x}`))return;const O=document.createElement("link");if(O.rel=_?"stylesheet":ul,_||(O.as="script"),O.crossOrigin="",O.href=w,f&&O.setAttribute("nonce",f),document.head.appendChild(O),_)return new Promise((W,L)=>{O.addEventListener("load",W),O.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${w}`)))})}))}function a(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return n.then(c=>{for(const d of c||[])d.status==="rejected"&&a(d.reason);return t().catch(a)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vr=globalThis,is=Vr.ShadowRoot&&(Vr.ShadyCSS===void 0||Vr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ss=Symbol(),Vs=new WeakMap;let Ho=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==ss)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(is&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=Vs.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Vs.set(r,t))}return t}toString(){return this.cssText}};const fl=e=>new Ho(typeof e=="string"?e:e+"",void 0,ss),Ze=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,a)=>i+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[a+1],e[0]);return new Ho(r,e,ss)},pl=(e,t)=>{if(is)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),n=Vr.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}},Ys=is?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return fl(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ml,defineProperty:gl,getOwnPropertyDescriptor:bl,getOwnPropertyNames:yl,getOwnPropertySymbols:wl,getPrototypeOf:vl}=Object,ri=globalThis,Xs=ri.trustedTypes,xl=Xs?Xs.emptyScript:"",$l=ri.reactiveElementPolyfillSupport,ur=(e,t)=>e,Qr={toAttribute(e,t){switch(t){case Boolean:e=e?xl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},os=(e,t)=>!ml(e,t),Gs={attribute:!0,type:String,converter:Qr,reflect:!1,useDefault:!1,hasChanged:os};Symbol.metadata??=Symbol("metadata"),ri.litPropertyMetadata??=new WeakMap;let Wn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Gs){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&gl(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){const{get:n,set:a}=bl(this.prototype,t)??{get(){return this[r]},set(c){this[r]=c}};return{get:n,set(c){const d=n?.call(this);a?.call(this,c),this.requestUpdate(t,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Gs}static _$Ei(){if(this.hasOwnProperty(ur("elementProperties")))return;const t=vl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ur("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ur("properties"))){const r=this.properties,i=[...yl(r),...wl(r)];for(const n of i)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(Ys(n))}else t!==void 0&&r.push(Ys(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pl(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const a=(i.converter?.toAttribute!==void 0?i.converter:Qr).toAttribute(r,i.type);this._$Em=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,r){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const a=i.getPropertyOptions(n),c=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Qr;this._$Em=n;const d=c.fromAttribute(r,a.type);this[n]=d??this._$Ej?.get(n)??d,this._$Em=null}}requestUpdate(t,r,i,n=!1,a){if(t!==void 0){const c=this.constructor;if(n===!1&&(a=this[t]),i??=c.getPropertyOptions(t),!((i.hasChanged??os)(a,r)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(c._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:n,wrapped:a},c){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,c??r??this[t]),a!==!0||c!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,a]of i){const{wrapped:c}=a,d=this[n];c!==!0||this._$AL.has(n)||d===void 0||this.C(n,void 0,a,d)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Wn.elementStyles=[],Wn.shadowRootOptions={mode:"open"},Wn[ur("elementProperties")]=new Map,Wn[ur("finalized")]=new Map,$l?.({ReactiveElement:Wn}),(ri.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const as=globalThis,Qs=e=>e,Jr=as.trustedTypes,Js=Jr?Jr.createPolicy("lit-html",{createHTML:e=>e}):void 0,Wo="$lit$",wn=`lit$${Math.random().toFixed(9).slice(2)}$`,Ko="?"+wn,kl=`<${Ko}>`,On=document,dr=()=>On.createComment(""),hr=e=>e===null||typeof e!="object"&&typeof e!="function",ls=Array.isArray,Cl=e=>ls(e)||typeof e?.[Symbol.iterator]=="function",Ni=`[ 	
\f\r]`,lr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zs=/-->/g,eo=/>/g,Pn=RegExp(`>|${Ni}(?:([^\\s"'>=/]+)(${Ni}*=${Ni}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),to=/'/g,no=/"/g,Vo=/^(?:script|style|textarea|title)$/i,El=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),M=El(1),Fn=Symbol.for("lit-noChange"),Se=Symbol.for("lit-nothing"),ro=new WeakMap,Dn=On.createTreeWalker(On,129);function Yo(e,t){if(!ls(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Js!==void 0?Js.createHTML(t):t}const Sl=(e,t)=>{const r=e.length-1,i=[];let n,a=t===2?"<svg>":t===3?"<math>":"",c=lr;for(let d=0;d<r;d++){const f=e[d];let w,_,x=-1,O=0;for(;O<f.length&&(c.lastIndex=O,_=c.exec(f),_!==null);)O=c.lastIndex,c===lr?_[1]==="!--"?c=Zs:_[1]!==void 0?c=eo:_[2]!==void 0?(Vo.test(_[2])&&(n=RegExp("</"+_[2],"g")),c=Pn):_[3]!==void 0&&(c=Pn):c===Pn?_[0]===">"?(c=n??lr,x=-1):_[1]===void 0?x=-2:(x=c.lastIndex-_[2].length,w=_[1],c=_[3]===void 0?Pn:_[3]==='"'?no:to):c===no||c===to?c=Pn:c===Zs||c===eo?c=lr:(c=Pn,n=void 0);const W=c===Pn&&e[d+1].startsWith("/>")?" ":"";a+=c===lr?f+kl:x>=0?(i.push(w),f.slice(0,x)+Wo+f.slice(x)+wn+W):f+wn+(x===-2?d:W)}return[Yo(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class fr{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let a=0,c=0;const d=t.length-1,f=this.parts,[w,_]=Sl(t,r);if(this.el=fr.createElement(w,i),Dn.currentNode=this.el.content,r===2||r===3){const x=this.el.content.firstChild;x.replaceWith(...x.childNodes)}for(;(n=Dn.nextNode())!==null&&f.length<d;){if(n.nodeType===1){if(n.hasAttributes())for(const x of n.getAttributeNames())if(x.endsWith(Wo)){const O=_[c++],W=n.getAttribute(x).split(wn),L=/([.?@])?(.*)/.exec(O);f.push({type:1,index:a,name:L[2],strings:W,ctor:L[1]==="."?Al:L[1]==="?"?Pl:L[1]==="@"?Tl:ii}),n.removeAttribute(x)}else x.startsWith(wn)&&(f.push({type:6,index:a}),n.removeAttribute(x));if(Vo.test(n.tagName)){const x=n.textContent.split(wn),O=x.length-1;if(O>0){n.textContent=Jr?Jr.emptyScript:"";for(let W=0;W<O;W++)n.append(x[W],dr()),Dn.nextNode(),f.push({type:2,index:++a});n.append(x[O],dr())}}}else if(n.nodeType===8)if(n.data===Ko)f.push({type:2,index:a});else{let x=-1;for(;(x=n.data.indexOf(wn,x+1))!==-1;)f.push({type:7,index:a}),x+=wn.length-1}a++}}static createElement(t,r){const i=On.createElement("template");return i.innerHTML=t,i}}function Vn(e,t,r=e,i){if(t===Fn)return t;let n=i!==void 0?r._$Co?.[i]:r._$Cl;const a=hr(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),a===void 0?n=void 0:(n=new a(e),n._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=n:r._$Cl=n),n!==void 0&&(t=Vn(e,n._$AS(e,t.values),n,i)),t}class _l{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,n=(t?.creationScope??On).importNode(r,!0);Dn.currentNode=n;let a=Dn.nextNode(),c=0,d=0,f=i[0];for(;f!==void 0;){if(c===f.index){let w;f.type===2?w=new mr(a,a.nextSibling,this,t):f.type===1?w=new f.ctor(a,f.name,f.strings,this,t):f.type===6&&(w=new Dl(a,this,t)),this._$AV.push(w),f=i[++d]}c!==f?.index&&(a=Dn.nextNode(),c++)}return Dn.currentNode=On,n}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class mr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=Se,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Vn(this,t,r),hr(t)?t===Se||t==null||t===""?(this._$AH!==Se&&this._$AR(),this._$AH=Se):t!==this._$AH&&t!==Fn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Cl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Se&&hr(this._$AH)?this._$AA.nextSibling.data=t:this.T(On.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=fr.createElement(Yo(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(r);else{const a=new _l(n,this),c=a.u(this.options);a.p(r),this.T(c),this._$AH=a}}_$AC(t){let r=ro.get(t.strings);return r===void 0&&ro.set(t.strings,r=new fr(t)),r}k(t){ls(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const a of t)n===r.length?r.push(i=new mr(this.O(dr()),this.O(dr()),this,this.options)):i=r[n],i._$AI(a),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=Qs(t).nextSibling;Qs(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ii{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,a){this.type=1,this._$AH=Se,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Se}_$AI(t,r=this,i,n){const a=this.strings;let c=!1;if(a===void 0)t=Vn(this,t,r,0),c=!hr(t)||t!==this._$AH&&t!==Fn,c&&(this._$AH=t);else{const d=t;let f,w;for(t=a[0],f=0;f<a.length-1;f++)w=Vn(this,d[i+f],r,f),w===Fn&&(w=this._$AH[f]),c||=!hr(w)||w!==this._$AH[f],w===Se?t=Se:t!==Se&&(t+=(w??"")+a[f+1]),this._$AH[f]=w}c&&!n&&this.j(t)}j(t){t===Se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Al extends ii{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Se?void 0:t}}class Pl extends ii{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Se)}}class Tl extends ii{constructor(t,r,i,n,a){super(t,r,i,n,a),this.type=5}_$AI(t,r=this){if((t=Vn(this,t,r,0)??Se)===Fn)return;const i=this._$AH,n=t===Se&&i!==Se||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==Se&&(i===Se||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Dl{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Vn(this,t)}}const jl=as.litHtmlPolyfillSupport;jl?.(fr,mr),(as.litHtmlVersions??=[]).push("3.3.3");const Rl=(e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const a=r?.renderBefore??null;i._$litPart$=n=new mr(t.insertBefore(dr(),a),a,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cs=globalThis;let Qe=class extends Wn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Rl(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Fn}};Qe._$litElement$=!0,Qe.finalized=!0,cs.litElementHydrateSupport?.({LitElement:Qe});const Ol=cs.litElementPolyfillSupport;Ol?.({LitElement:Qe});(cs.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fl={attribute:!0,type:String,converter:Qr,reflect:!1,hasChanged:os},Il=(e=Fl,t,r)=>{const{kind:i,metadata:n}=r;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),i==="accessor"){const{name:c}=r;return{set(d){const f=t.get.call(this);t.set.call(this,d),this.requestUpdate(c,f,e,!0,d)},init(d){return d!==void 0&&this.C(c,void 0,e,d),d}}}if(i==="setter"){const{name:c}=r;return function(d){const f=this[c];t.call(this,d),this.requestUpdate(c,f,e,!0,d)}}throw Error("Unsupported decorator location: "+i)};function Ut(e){return(t,r)=>typeof r=="object"?Il(e,t,r):((i,n,a)=>{const c=n.hasOwnProperty(a);return n.constructor.createProperty(a,i),c?Object.getOwnPropertyDescriptor(n,a):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(e){return Ut({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zl=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Xn(e,t){return(r,i,n)=>{const a=c=>c.renderRoot?.querySelector(e)??null;return zl(r,i,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ll={CHILD:2},Xo=e=>(...t)=>({_$litDirective$:e,values:t});class Bl{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Zr extends Bl{constructor(t){if(super(t),this.it=Se,t.type!==Ll.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Se||t==null)return this._t=void 0,this.it=t;if(t===Fn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Zr.directiveName="unsafeHTML",Zr.resultType=1;const qi=Xo(Zr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xi extends Zr{}Xi.directiveName="unsafeSVG",Xi.resultType=2;const Ml=Xo(Xi);var Nl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ql(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yr={exports:{}},Ul=Yr.exports,io;function Hl(){return io||(io=1,(function(e,t){(function(r,i){e.exports=i()})(Ul,function(){var r=function(s,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,u){l.__proto__=u}||function(l,u){for(var h in u)Object.prototype.hasOwnProperty.call(u,h)&&(l[h]=u[h])})(s,o)},i=function(){return(i=Object.assign||function(s){for(var o,l=1,u=arguments.length;l<u;l++)for(var h in o=arguments[l])Object.prototype.hasOwnProperty.call(o,h)&&(s[h]=o[h]);return s}).apply(this,arguments)};function n(s,o,l){for(var u,h=0,p=o.length;h<p;h++)!u&&h in o||((u=u||Array.prototype.slice.call(o,0,h))[h]=o[h]);return s.concat(u||Array.prototype.slice.call(o))}var a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Nl,c=Object.keys,d=Array.isArray;function f(s,o){return typeof o!="object"||c(o).forEach(function(l){s[l]=o[l]}),s}typeof Promise>"u"||a.Promise||(a.Promise=Promise);var w=Object.getPrototypeOf,_={}.hasOwnProperty;function x(s,o){return _.call(s,o)}function O(s,o){typeof o=="function"&&(o=o(w(s))),(typeof Reflect>"u"?c:Reflect.ownKeys)(o).forEach(function(l){L(s,l,o[l])})}var W=Object.defineProperty;function L(s,o,l,u){W(s,o,f(l&&x(l,"get")&&typeof l.get=="function"?{get:l.get,set:l.set,configurable:!0}:{value:l,configurable:!0,writable:!0},u))}function U(s){return{from:function(o){return s.prototype=Object.create(o.prototype),L(s.prototype,"constructor",s),{extend:O.bind(null,s.prototype)}}}}var ae=Object.getOwnPropertyDescriptor,de=[].slice;function we(s,o,l){return de.call(s,o,l)}function ze(s,o){return o(s)}function ie(s){if(!s)throw new Error("Assertion Failed")}function ce(s){a.setImmediate?setImmediate(s):setTimeout(s,0)}function ve(s,o){if(typeof o=="string"&&x(s,o))return s[o];if(!o)return s;if(typeof o!="string"){for(var l=[],u=0,h=o.length;u<h;++u){var p=ve(s,o[u]);l.push(p)}return l}var b=o.indexOf(".");if(b!==-1){var v=s[o.substr(0,b)];return v==null?void 0:ve(v,o.substr(b+1))}}function Re(s,o,l){if(s&&o!==void 0&&!("isFrozen"in Object&&Object.isFrozen(s)))if(typeof o!="string"&&"length"in o){ie(typeof l!="string"&&"length"in l);for(var u=0,h=o.length;u<h;++u)Re(s,o[u],l[u])}else{var p,b,v=o.indexOf(".");v!==-1?(p=o.substr(0,v),(b=o.substr(v+1))===""?l===void 0?d(s)&&!isNaN(parseInt(p))?s.splice(p,1):delete s[p]:s[p]=l:Re(v=!(v=s[p])||!x(s,p)?s[p]={}:v,b,l)):l===void 0?d(s)&&!isNaN(parseInt(o))?s.splice(o,1):delete s[o]:s[o]=l}}function Me(s){var o,l={};for(o in s)x(s,o)&&(l[o]=s[o]);return l}var xt=[].concat;function Ot(s){return xt.apply([],s)}var rn="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Ot([8,16,32,64].map(function(s){return["Int","Uint","Float"].map(function(o){return o+s+"Array"})}))).filter(function(s){return a[s]}),m=new Set(rn.map(function(s){return a[s]})),y=null;function C(s){return y=new WeakMap,s=(function o(l){if(!l||typeof l!="object")return l;var u=y.get(l);if(u)return u;if(d(l)){u=[],y.set(l,u);for(var h=0,p=l.length;h<p;++h)u.push(o(l[h]))}else if(m.has(l.constructor))u=l;else{var b,v=w(l);for(b in u=v===Object.prototype?{}:Object.create(v),y.set(l,u),l)x(l,b)&&(u[b]=o(l[b]))}return u})(s),y=null,s}var g={}.toString;function k(s){return g.call(s).slice(8,-1)}var se=typeof Symbol<"u"?Symbol.iterator:"@@iterator",he=typeof se=="symbol"?function(s){var o;return s!=null&&(o=s[se])&&o.apply(s)}:function(){return null};function q(s,o){return o=s.indexOf(o),0<=o&&s.splice(o,1),0<=o}var Y={};function Ke(s){var o,l,u,h;if(arguments.length===1){if(d(s))return s.slice();if(this===Y&&typeof s=="string")return[s];if(h=he(s)){for(l=[];!(u=h.next()).done;)l.push(u.value);return l}if(s==null)return[s];if(typeof(o=s.length)!="number")return[s];for(l=new Array(o);o--;)l[o]=s[o];return l}for(o=arguments.length,l=new Array(o);o--;)l[o]=arguments[o];return l}var ot=typeof Symbol<"u"?function(s){return s[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Ce=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Ft=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Ce),Kt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Ne(s,o){this.name=s,this.message=o}function Fe(s,o){return s+". Errors: "+Object.keys(o).map(function(l){return o[l].toString()}).filter(function(l,u,h){return h.indexOf(l)===u}).join(`
`)}function xe(s,o,l,u){this.failures=o,this.failedKeys=u,this.successCount=l,this.message=Fe(s,o)}function Pe(s,o){this.name="BulkError",this.failures=Object.keys(o).map(function(l){return o[l]}),this.failuresByPos=o,this.message=Fe(s,this.failures)}U(Ne).from(Error).extend({toString:function(){return this.name+": "+this.message}}),U(xe).from(Ne),U(Pe).from(Ne);var Ve=Ft.reduce(function(s,o){return s[o]=o+"Error",s},{}),_e=Ne,ee=Ft.reduce(function(s,o){var l=o+"Error";function u(h,p){this.name=l,h?typeof h=="string"?(this.message="".concat(h).concat(p?`
 `+p:""),this.inner=p||null):typeof h=="object"&&(this.message="".concat(h.name," ").concat(h.message),this.inner=h):(this.message=Kt[o]||l,this.inner=null)}return U(u).from(_e),s[o]=u,s},{});ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError;var Ye=Ce.reduce(function(s,o){return s[o+"Error"]=ee[o],s},{}),Ie=Ft.reduce(function(s,o){return["Syntax","Type","Range"].indexOf(o)===-1&&(s[o+"Error"]=ee[o]),s},{});function ue(){}function ge(s){return s}function Ct(s,o){return s==null||s===ge?o:function(l){return o(s(l))}}function oe(s,o){return function(){s.apply(this,arguments),o.apply(this,arguments)}}function Xe(s,o){return s===ue?o:function(){var l=s.apply(this,arguments);l!==void 0&&(arguments[0]=l);var u=this.onsuccess,h=this.onerror;this.onsuccess=null,this.onerror=null;var p=o.apply(this,arguments);return u&&(this.onsuccess=this.onsuccess?oe(u,this.onsuccess):u),h&&(this.onerror=this.onerror?oe(h,this.onerror):h),p!==void 0?p:l}}function dn(s,o){return s===ue?o:function(){s.apply(this,arguments);var l=this.onsuccess,u=this.onerror;this.onsuccess=this.onerror=null,o.apply(this,arguments),l&&(this.onsuccess=this.onsuccess?oe(l,this.onsuccess):l),u&&(this.onerror=this.onerror?oe(u,this.onerror):u)}}function Bt(s,o){return s===ue?o:function(l){var u=s.apply(this,arguments);f(l,u);var h=this.onsuccess,p=this.onerror;return this.onsuccess=null,this.onerror=null,l=o.apply(this,arguments),h&&(this.onsuccess=this.onsuccess?oe(h,this.onsuccess):h),p&&(this.onerror=this.onerror?oe(p,this.onerror):p),u===void 0?l===void 0?void 0:l:f(u,l)}}function Je(s,o){return s===ue?o:function(){return o.apply(this,arguments)!==!1&&s.apply(this,arguments)}}function Et(s,o){return s===ue?o:function(){var l=s.apply(this,arguments);if(l&&typeof l.then=="function"){for(var u=this,h=arguments.length,p=new Array(h);h--;)p[h]=arguments[h];return l.then(function(){return o.apply(u,p)})}return o.apply(this,arguments)}}Ie.ModifyError=xe,Ie.DexieError=Ne,Ie.BulkError=Pe;var je=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function qe(s){je=s}var wt={},et=100,rn=typeof Promise>"u"?[]:(function(){var s=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[s,w(s),s];var o=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[o,w(o),s]})(),Ce=rn[0],Ft=rn[1],rn=rn[2],Ft=Ft&&Ft.then,$e=Ce&&Ce.constructor,St=!!rn,Ue=function(s,o){nt.push([s,o]),lt&&(queueMicrotask(fe),lt=!1)},mt=!0,lt=!0,tt=[],Le=[],le=ge,Ge={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ue,pgp:!1,env:{},finalize:ue},G=Ge,nt=[],dt=0,$t=[];function Q(s){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var o=this._PSD=G;if(typeof s!="function"){if(s!==wt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&ct(this,this._value))}this._state=null,this._value=null,++o.ref,(function l(u,h){try{h(function(p){if(u._state===null){if(p===u)throw new TypeError("A promise cannot be resolved with itself.");var b=u._lib&&Oe();p&&typeof p.then=="function"?l(u,function(v,E){p instanceof Q?p._then(v,E):p.then(v,E)}):(u._state=!0,u._value=p,hn(u)),b&&He()}},ct.bind(null,u))}catch(p){ct(u,p)}})(this,s)}var Vt={get:function(){var s=G,o=kr;function l(u,h){var p=this,b=!s.global&&(s!==G||o!==kr),v=b&&!pn(),E=new Q(function(A,D){ne(p,new tn(ys(u,s,b,v),ys(h,s,b,v),A,D,s))});return this._consoleTask&&(E._consoleTask=this._consoleTask),E}return l.prototype=wt,l},set:function(s){L(this,"then",s&&s.prototype===wt?Vt:{get:function(){return s},set:Vt.set})}};function tn(s,o,l,u,h){this.onFulfilled=typeof s=="function"?s:null,this.onRejected=typeof o=="function"?o:null,this.resolve=l,this.reject=u,this.psd=h}function ct(s,o){var l,u;Le.push(o),s._state===null&&(l=s._lib&&Oe(),o=le(o),s._state=!1,s._value=o,u=s,tt.some(function(h){return h._value===u._value})||tt.push(u),hn(s),l&&He())}function hn(s){var o=s._listeners;s._listeners=[];for(var l=0,u=o.length;l<u;++l)ne(s,o[l]);var h=s._PSD;--h.ref||h.finalize(),dt===0&&(++dt,Ue(function(){--dt==0&&Te()},[]))}function ne(s,o){if(s._state!==null){var l=s._state?o.onFulfilled:o.onRejected;if(l===null)return(s._state?o.resolve:o.reject)(s._value);++o.psd.ref,++dt,Ue(Ae,[l,s,o])}else s._listeners.push(o)}function Ae(s,o,l){try{var u,h=o._value;!o._state&&Le.length&&(Le=[]),u=je&&o._consoleTask?o._consoleTask.run(function(){return s(h)}):s(h),o._state||Le.indexOf(h)!==-1||(function(p){for(var b=tt.length;b;)if(tt[--b]._value===p._value)return tt.splice(b,1)})(o),l.resolve(u)}catch(p){l.reject(p)}finally{--dt==0&&Te(),--l.psd.ref||l.psd.finalize()}}function fe(){kn(Ge,function(){Oe()&&He()})}function Oe(){var s=mt;return lt=mt=!1,s}function He(){var s,o,l;do for(;0<nt.length;)for(s=nt,nt=[],l=s.length,o=0;o<l;++o){var u=s[o];u[0].apply(null,u[1])}while(0<nt.length);lt=mt=!0}function Te(){var s=tt;tt=[],s.forEach(function(u){u._PSD.onunhandled.call(null,u._value,u)});for(var o=$t.slice(0),l=o.length;l;)o[--l]()}function Mt(s){return new Q(wt,!1,s)}function Be(s,o){var l=G;return function(){var u=Oe(),h=G;try{return mn(l,!0),s.apply(this,arguments)}catch(p){o&&o(p)}finally{mn(h,!1),u&&He()}}}O(Q.prototype,{then:Vt,_then:function(s,o){ne(this,new tn(null,null,s,o,G))},catch:function(s){if(arguments.length===1)return this.then(null,s);var o=s,l=arguments[1];return typeof o=="function"?this.then(null,function(u){return(u instanceof o?l:Mt)(u)}):this.then(null,function(u){return(u&&u.name===o?l:Mt)(u)})},finally:function(s){return this.then(function(o){return Q.resolve(s()).then(function(){return o})},function(o){return Q.resolve(s()).then(function(){return Mt(o)})})},timeout:function(s,o){var l=this;return s<1/0?new Q(function(u,h){var p=setTimeout(function(){return h(new ee.Timeout(o))},s);l.then(u,h).finally(clearTimeout.bind(null,p))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&L(Q.prototype,Symbol.toStringTag,"Dexie.Promise"),Ge.env=bs(),O(Q,{all:function(){var s=Ke.apply(null,arguments).map(Cr);return new Q(function(o,l){s.length===0&&o([]);var u=s.length;s.forEach(function(h,p){return Q.resolve(h).then(function(b){s[p]=b,--u||o(s)},l)})})},resolve:function(s){return s instanceof Q?s:s&&typeof s.then=="function"?new Q(function(o,l){s.then(o,l)}):new Q(wt,!0,s)},reject:Mt,race:function(){var s=Ke.apply(null,arguments).map(Cr);return new Q(function(o,l){s.map(function(u){return Q.resolve(u).then(o,l)})})},PSD:{get:function(){return G},set:function(s){return G=s}},totalEchoes:{get:function(){return kr}},newPSD:fn,usePSD:kn,scheduler:{get:function(){return Ue},set:function(s){Ue=s}},rejectionMapper:{get:function(){return le},set:function(s){le=s}},follow:function(s,o){return new Q(function(l,u){return fn(function(h,p){var b=G;b.unhandleds=[],b.onunhandled=p,b.finalize=oe(function(){var v,E=this;v=function(){E.unhandleds.length===0?h():p(E.unhandleds[0])},$t.push(function A(){v(),$t.splice($t.indexOf(A),1)}),++dt,Ue(function(){--dt==0&&Te()},[])},b.finalize),s()},o,l,u)})}}),$e&&($e.allSettled&&L(Q,"allSettled",function(){var s=Ke.apply(null,arguments).map(Cr);return new Q(function(o){s.length===0&&o([]);var l=s.length,u=new Array(l);s.forEach(function(h,p){return Q.resolve(h).then(function(b){return u[p]={status:"fulfilled",value:b}},function(b){return u[p]={status:"rejected",reason:b}}).then(function(){return--l||o(u)})})})}),$e.any&&typeof AggregateError<"u"&&L(Q,"any",function(){var s=Ke.apply(null,arguments).map(Cr);return new Q(function(o,l){s.length===0&&l(new AggregateError([]));var u=s.length,h=new Array(u);s.forEach(function(p,b){return Q.resolve(p).then(function(v){return o(v)},function(v){h[b]=v,--u||l(new AggregateError(h))})})})}),$e.withResolvers&&(Q.withResolvers=$e.withResolvers));var ht={awaits:0,echoes:0,id:0},Na=0,xr=[],$r=0,kr=0,qa=0;function fn(s,o,l,u){var h=G,p=Object.create(h);return p.parent=h,p.ref=0,p.global=!1,p.id=++qa,Ge.env,p.env=St?{Promise:Q,PromiseProp:{value:Q,configurable:!0,writable:!0},all:Q.all,race:Q.race,allSettled:Q.allSettled,any:Q.any,resolve:Q.resolve,reject:Q.reject}:{},o&&f(p,o),++h.ref,p.finalize=function(){--this.parent.ref||this.parent.finalize()},u=kn(p,s,l,u),p.ref===0&&p.finalize(),u}function Bn(){return ht.id||(ht.id=++Na),++ht.awaits,ht.echoes+=et,ht.id}function pn(){return!!ht.awaits&&(--ht.awaits==0&&(ht.id=0),ht.echoes=ht.awaits*et,!0)}function Cr(s){return ht.echoes&&s&&s.constructor===$e?(Bn(),s.then(function(o){return pn(),o},function(o){return pn(),rt(o)})):s}function Ua(){var s=xr[xr.length-1];xr.pop(),mn(s,!1)}function mn(s,o){var l,u=G;(o?!ht.echoes||$r++&&s===G:!$r||--$r&&s===G)||queueMicrotask(o?function(h){++kr,ht.echoes&&--ht.echoes!=0||(ht.echoes=ht.awaits=ht.id=0),xr.push(G),mn(h,!0)}.bind(null,s):Ua),s!==G&&(G=s,u===Ge&&(Ge.env=bs()),St&&(l=Ge.env.Promise,o=s.env,(u.global||s.global)&&(Object.defineProperty(a,"Promise",o.PromiseProp),l.all=o.all,l.race=o.race,l.resolve=o.resolve,l.reject=o.reject,o.allSettled&&(l.allSettled=o.allSettled),o.any&&(l.any=o.any))))}function bs(){var s=a.Promise;return St?{Promise:s,PromiseProp:Object.getOwnPropertyDescriptor(a,"Promise"),all:s.all,race:s.race,allSettled:s.allSettled,any:s.any,resolve:s.resolve,reject:s.reject}:{}}function kn(s,o,l,u,h){var p=G;try{return mn(s,!0),o(l,u,h)}finally{mn(p,!1)}}function ys(s,o,l,u){return typeof s!="function"?s:function(){var h=G;l&&Bn(),mn(o,!0);try{return s.apply(this,arguments)}finally{mn(h,!1),u&&queueMicrotask(pn)}}}function fi(s){Promise===$e&&ht.echoes===0?$r===0?s():enqueueNativeMicroTask(s):setTimeout(s,0)}(""+Ft).indexOf("[native code]")===-1&&(Bn=pn=ue);var rt=Q.reject,Cn="￿",nn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ws="String expected.",Mn=[],Er="__dbnames",pi="readonly",mi="readwrite";function En(s,o){return s?o?function(){return s.apply(this,arguments)&&o.apply(this,arguments)}:s:o}var vs={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Sr(s){return typeof s!="string"||/\./.test(s)?function(o){return o}:function(o){return o[s]===void 0&&s in o&&delete(o=C(o))[s],o}}function xs(){throw ee.Type()}function Ee(s,o){try{var l=$s(s),u=$s(o);if(l!==u)return l==="Array"?1:u==="Array"?-1:l==="binary"?1:u==="binary"?-1:l==="string"?1:u==="string"?-1:l==="Date"?1:u!=="Date"?NaN:-1;switch(l){case"number":case"Date":case"string":return o<s?1:s<o?-1:0;case"binary":return(function(h,p){for(var b=h.length,v=p.length,E=b<v?b:v,A=0;A<E;++A)if(h[A]!==p[A])return h[A]<p[A]?-1:1;return b===v?0:b<v?-1:1})(ks(s),ks(o));case"Array":return(function(h,p){for(var b=h.length,v=p.length,E=b<v?b:v,A=0;A<E;++A){var D=Ee(h[A],p[A]);if(D!==0)return D}return b===v?0:b<v?-1:1})(s,o)}}catch{}return NaN}function $s(s){var o=typeof s;return o!="object"?o:ArrayBuffer.isView(s)?"binary":(s=k(s),s==="ArrayBuffer"?"binary":s)}function ks(s){return s instanceof Uint8Array?s:ArrayBuffer.isView(s)?new Uint8Array(s.buffer,s.byteOffset,s.byteLength):new Uint8Array(s)}var Cs=(We.prototype._trans=function(s,o,l){var u=this._tx||G.trans,h=this.name,p=je&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(s==="readonly"?"read":"write"," ").concat(this.name));function b(A,D,$){if(!$.schema[h])throw new ee.NotFound("Table "+h+" not part of transaction");return o($.idbtrans,$)}var v=Oe();try{var E=u&&u.db._novip===this.db._novip?u===G.trans?u._promise(s,b,l):fn(function(){return u._promise(s,b,l)},{trans:u,transless:G.transless||G}):(function A(D,$,R,S){if(D.idbdb&&(D._state.openComplete||G.letThrough||D._vip)){var T=D._createTransaction($,R,D._dbSchema);try{T.create(),D._state.PR1398_maxLoop=3}catch(j){return j.name===Ve.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return A(D,$,R,S)})):rt(j)}return T._promise($,function(j,P){return fn(function(){return G.trans=T,S(j,P,T)})}).then(function(j){if($==="readwrite")try{T.idbtrans.commit()}catch{}return $==="readonly"?j:T._completion.then(function(){return j})})}if(D._state.openComplete)return rt(new ee.DatabaseClosed(D._state.dbOpenError));if(!D._state.isBeingOpened){if(!D._state.autoOpen)return rt(new ee.DatabaseClosed);D.open().catch(ue)}return D._state.dbReadyPromise.then(function(){return A(D,$,R,S)})})(this.db,s,[this.name],b);return p&&(E._consoleTask=p,E=E.catch(function(A){return console.trace(A),rt(A)})),E}finally{v&&He()}},We.prototype.get=function(s,o){var l=this;return s&&s.constructor===Object?this.where(s).first(o):s==null?rt(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(u){return l.core.get({trans:u,key:s}).then(function(h){return l.hook.reading.fire(h)})}).then(o)},We.prototype.where=function(s){if(typeof s=="string")return new this.db.WhereClause(this,s);if(d(s))return new this.db.WhereClause(this,"[".concat(s.join("+"),"]"));var o=c(s);if(o.length===1)return this.where(o[0]).equals(s[o[0]]);var l=this.schema.indexes.concat(this.schema.primKey).filter(function(v){if(v.compound&&o.every(function(A){return 0<=v.keyPath.indexOf(A)})){for(var E=0;E<o.length;++E)if(o.indexOf(v.keyPath[E])===-1)return!1;return!0}return!1}).sort(function(v,E){return v.keyPath.length-E.keyPath.length})[0];if(l&&this.db._maxKey!==Cn){var p=l.keyPath.slice(0,o.length);return this.where(p).equals(p.map(function(E){return s[E]}))}!l&&je&&console.warn("The query ".concat(JSON.stringify(s)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(o.join("+"),"]"));var u=this.schema.idxByName;function h(v,E){return Ee(v,E)===0}var b=o.reduce(function($,E){var A=$[0],D=$[1],$=u[E],R=s[E];return[A||$,A||!$?En(D,$&&$.multi?function(S){return S=ve(S,E),d(S)&&S.some(function(T){return h(R,T)})}:function(S){return h(R,ve(S,E))}):D]},[null,null]),p=b[0],b=b[1];return p?this.where(p.name).equals(s[p.keyPath]).filter(b):l?this.filter(b):this.where(o).equals("")},We.prototype.filter=function(s){return this.toCollection().and(s)},We.prototype.count=function(s){return this.toCollection().count(s)},We.prototype.offset=function(s){return this.toCollection().offset(s)},We.prototype.limit=function(s){return this.toCollection().limit(s)},We.prototype.each=function(s){return this.toCollection().each(s)},We.prototype.toArray=function(s){return this.toCollection().toArray(s)},We.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},We.prototype.orderBy=function(s){return new this.db.Collection(new this.db.WhereClause(this,d(s)?"[".concat(s.join("+"),"]"):s))},We.prototype.reverse=function(){return this.toCollection().reverse()},We.prototype.mapToClass=function(s){var o,l=this.db,u=this.name;function h(){return o!==null&&o.apply(this,arguments)||this}(this.schema.mappedClass=s).prototype instanceof xs&&((function(E,A){if(typeof A!="function"&&A!==null)throw new TypeError("Class extends value "+String(A)+" is not a constructor or null");function D(){this.constructor=E}r(E,A),E.prototype=A===null?Object.create(A):(D.prototype=A.prototype,new D)})(h,o=s),Object.defineProperty(h.prototype,"db",{get:function(){return l},enumerable:!1,configurable:!0}),h.prototype.table=function(){return u},s=h);for(var p=new Set,b=s.prototype;b;b=w(b))Object.getOwnPropertyNames(b).forEach(function(E){return p.add(E)});function v(E){if(!E)return E;var A,D=Object.create(s.prototype);for(A in E)if(!p.has(A))try{D[A]=E[A]}catch{}return D}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=v,this.hook("reading",v),s},We.prototype.defineClass=function(){return this.mapToClass(function(s){f(this,s)})},We.prototype.add=function(s,o){var l=this,u=this.schema.primKey,h=u.auto,p=u.keyPath,b=s;return p&&h&&(b=Sr(p)(s)),this._trans("readwrite",function(v){return l.core.mutate({trans:v,type:"add",keys:o!=null?[o]:null,values:[b]})}).then(function(v){return v.numFailures?Q.reject(v.failures[0]):v.lastResult}).then(function(v){if(p)try{Re(s,p,v)}catch{}return v})},We.prototype.update=function(s,o){return typeof s!="object"||d(s)?this.where(":id").equals(s).modify(o):(s=ve(s,this.schema.primKey.keyPath),s===void 0?rt(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(s).modify(o))},We.prototype.put=function(s,o){var l=this,u=this.schema.primKey,h=u.auto,p=u.keyPath,b=s;return p&&h&&(b=Sr(p)(s)),this._trans("readwrite",function(v){return l.core.mutate({trans:v,type:"put",values:[b],keys:o!=null?[o]:null})}).then(function(v){return v.numFailures?Q.reject(v.failures[0]):v.lastResult}).then(function(v){if(p)try{Re(s,p,v)}catch{}return v})},We.prototype.delete=function(s){var o=this;return this._trans("readwrite",function(l){return o.core.mutate({trans:l,type:"delete",keys:[s]})}).then(function(l){return l.numFailures?Q.reject(l.failures[0]):void 0})},We.prototype.clear=function(){var s=this;return this._trans("readwrite",function(o){return s.core.mutate({trans:o,type:"deleteRange",range:vs})}).then(function(o){return o.numFailures?Q.reject(o.failures[0]):void 0})},We.prototype.bulkGet=function(s){var o=this;return this._trans("readonly",function(l){return o.core.getMany({keys:s,trans:l}).then(function(u){return u.map(function(h){return o.hook.reading.fire(h)})})})},We.prototype.bulkAdd=function(s,o,l){var u=this,h=Array.isArray(o)?o:void 0,p=(l=l||(h?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(b){var A=u.schema.primKey,v=A.auto,A=A.keyPath;if(A&&h)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(h&&h.length!==s.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var E=s.length,A=A&&v?s.map(Sr(A)):s;return u.core.mutate({trans:b,type:"add",keys:h,values:A,wantResults:p}).then(function(T){var $=T.numFailures,R=T.results,S=T.lastResult,T=T.failures;if($===0)return p?R:S;throw new Pe("".concat(u.name,".bulkAdd(): ").concat($," of ").concat(E," operations failed"),T)})})},We.prototype.bulkPut=function(s,o,l){var u=this,h=Array.isArray(o)?o:void 0,p=(l=l||(h?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(b){var A=u.schema.primKey,v=A.auto,A=A.keyPath;if(A&&h)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(h&&h.length!==s.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var E=s.length,A=A&&v?s.map(Sr(A)):s;return u.core.mutate({trans:b,type:"put",keys:h,values:A,wantResults:p}).then(function(T){var $=T.numFailures,R=T.results,S=T.lastResult,T=T.failures;if($===0)return p?R:S;throw new Pe("".concat(u.name,".bulkPut(): ").concat($," of ").concat(E," operations failed"),T)})})},We.prototype.bulkUpdate=function(s){var o=this,l=this.core,u=s.map(function(b){return b.key}),h=s.map(function(b){return b.changes}),p=[];return this._trans("readwrite",function(b){return l.getMany({trans:b,keys:u,cache:"clone"}).then(function(v){var E=[],A=[];s.forEach(function($,R){var S=$.key,T=$.changes,j=v[R];if(j){for(var P=0,I=Object.keys(T);P<I.length;P++){var z=I[P],B=T[z];if(z===o.schema.primKey.keyPath){if(Ee(B,S)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else Re(j,z,B)}p.push(R),E.push(S),A.push(j)}});var D=E.length;return l.mutate({trans:b,type:"put",keys:E,values:A,updates:{keys:u,changeSpecs:h}}).then(function($){var R=$.numFailures,S=$.failures;if(R===0)return D;for(var T=0,j=Object.keys(S);T<j.length;T++){var P,I=j[T],z=p[Number(I)];z!=null&&(P=S[I],delete S[I],S[z]=P)}throw new Pe("".concat(o.name,".bulkUpdate(): ").concat(R," of ").concat(D," operations failed"),S)})})})},We.prototype.bulkDelete=function(s){var o=this,l=s.length;return this._trans("readwrite",function(u){return o.core.mutate({trans:u,type:"delete",keys:s})}).then(function(b){var h=b.numFailures,p=b.lastResult,b=b.failures;if(h===0)return p;throw new Pe("".concat(o.name,".bulkDelete(): ").concat(h," of ").concat(l," operations failed"),b)})},We);function We(){}function Zn(s){function o(b,v){if(v){for(var E=arguments.length,A=new Array(E-1);--E;)A[E-1]=arguments[E];return l[b].subscribe.apply(null,A),s}if(typeof b=="string")return l[b]}var l={};o.addEventType=p;for(var u=1,h=arguments.length;u<h;++u)p(arguments[u]);return o;function p(b,v,E){if(typeof b!="object"){var A;v=v||Je;var D={subscribers:[],fire:E=E||ue,subscribe:function($){D.subscribers.indexOf($)===-1&&(D.subscribers.push($),D.fire=v(D.fire,$))},unsubscribe:function($){D.subscribers=D.subscribers.filter(function(R){return R!==$}),D.fire=D.subscribers.reduce(v,E)}};return l[b]=o[b]=D}c(A=b).forEach(function($){var R=A[$];if(d(R))p($,A[$][0],A[$][1]);else{if(R!=="asap")throw new ee.InvalidArgument("Invalid event config");var S=p($,ge,function(){for(var T=arguments.length,j=new Array(T);T--;)j[T]=arguments[T];S.subscribers.forEach(function(P){ce(function(){P.apply(null,j)})})})}})}}function er(s,o){return U(o).from({prototype:s}),o}function Nn(s,o){return!(s.filter||s.algorithm||s.or)&&(o?s.justLimit:!s.replayFilter)}function gi(s,o){s.filter=En(s.filter,o)}function bi(s,o,l){var u=s.replayFilter;s.replayFilter=u?function(){return En(u(),o())}:o,s.justLimit=l&&!u}function _r(s,o){if(s.isPrimKey)return o.primaryKey;var l=o.getIndexByKeyPath(s.index);if(!l)throw new ee.Schema("KeyPath "+s.index+" on object store "+o.name+" is not indexed");return l}function Es(s,o,l){var u=_r(s,o.schema);return o.openCursor({trans:l,values:!s.keysOnly,reverse:s.dir==="prev",unique:!!s.unique,query:{index:u,range:s.range}})}function Ar(s,o,l,u){var h=s.replayFilter?En(s.filter,s.replayFilter()):s.filter;if(s.or){var p={},b=function(v,E,A){var D,$;h&&!h(E,A,function(R){return E.stop(R)},function(R){return E.fail(R)})||(($=""+(D=E.primaryKey))=="[object ArrayBuffer]"&&($=""+new Uint8Array(D)),x(p,$)||(p[$]=!0,o(v,E,A)))};return Promise.all([s.or._iterate(b,l),Ss(Es(s,u,l),s.algorithm,b,!s.keysOnly&&s.valueMapper)])}return Ss(Es(s,u,l),En(s.algorithm,h),o,!s.keysOnly&&s.valueMapper)}function Ss(s,o,l,u){var h=Be(u?function(p,b,v){return l(u(p),b,v)}:l);return s.then(function(p){if(p)return p.start(function(){var b=function(){return p.continue()};o&&!o(p,function(v){return b=v},function(v){p.stop(v),b=ue},function(v){p.fail(v),b=ue})||h(p.value,p,function(v){return b=v}),b()})})}var rn=Symbol(),tr=(_s.prototype.execute=function(s){if(this.add!==void 0){var o=this.add;if(d(o))return n(n([],d(s)?s:[],!0),o).sort();if(typeof o=="number")return(Number(s)||0)+o;if(typeof o=="bigint")try{return BigInt(s)+o}catch{return BigInt(0)+o}throw new TypeError("Invalid term ".concat(o))}if(this.remove!==void 0){var l=this.remove;if(d(l))return d(s)?s.filter(function(u){return!l.includes(u)}).sort():[];if(typeof l=="number")return Number(s)-l;if(typeof l=="bigint")try{return BigInt(s)-l}catch{return BigInt(0)-l}throw new TypeError("Invalid subtrahend ".concat(l))}return o=(o=this.replacePrefix)===null||o===void 0?void 0:o[0],o&&typeof s=="string"&&s.startsWith(o)?this.replacePrefix[1]+s.substring(o.length):s},_s);function _s(s){Object.assign(this,s)}var Ha=(De.prototype._read=function(s,o){var l=this._ctx;return l.error?l.table._trans(null,rt.bind(null,l.error)):l.table._trans("readonly",s).then(o)},De.prototype._write=function(s){var o=this._ctx;return o.error?o.table._trans(null,rt.bind(null,o.error)):o.table._trans("readwrite",s,"locked")},De.prototype._addAlgorithm=function(s){var o=this._ctx;o.algorithm=En(o.algorithm,s)},De.prototype._iterate=function(s,o){return Ar(this._ctx,s,o,this._ctx.table.core)},De.prototype.clone=function(s){var o=Object.create(this.constructor.prototype),l=Object.create(this._ctx);return s&&f(l,s),o._ctx=l,o},De.prototype.raw=function(){return this._ctx.valueMapper=null,this},De.prototype.each=function(s){var o=this._ctx;return this._read(function(l){return Ar(o,s,l,o.table.core)})},De.prototype.count=function(s){var o=this;return this._read(function(l){var u=o._ctx,h=u.table.core;if(Nn(u,!0))return h.count({trans:l,query:{index:_r(u,h.schema),range:u.range}}).then(function(b){return Math.min(b,u.limit)});var p=0;return Ar(u,function(){return++p,!1},l,h).then(function(){return p})}).then(s)},De.prototype.sortBy=function(s,o){var l=s.split(".").reverse(),u=l[0],h=l.length-1;function p(E,A){return A?p(E[l[A]],A-1):E[u]}var b=this._ctx.dir==="next"?1:-1;function v(E,A){return Ee(p(E,h),p(A,h))*b}return this.toArray(function(E){return E.sort(v)}).then(o)},De.prototype.toArray=function(s){var o=this;return this._read(function(l){var u=o._ctx;if(u.dir==="next"&&Nn(u,!0)&&0<u.limit){var h=u.valueMapper,p=_r(u,u.table.core.schema);return u.table.core.query({trans:l,limit:u.limit,values:!0,query:{index:p,range:u.range}}).then(function(v){return v=v.result,h?v.map(h):v})}var b=[];return Ar(u,function(v){return b.push(v)},l,u.table.core).then(function(){return b})},s)},De.prototype.offset=function(s){var o=this._ctx;return s<=0||(o.offset+=s,Nn(o)?bi(o,function(){var l=s;return function(u,h){return l===0||(l===1?--l:h(function(){u.advance(l),l=0}),!1)}}):bi(o,function(){var l=s;return function(){return--l<0}})),this},De.prototype.limit=function(s){return this._ctx.limit=Math.min(this._ctx.limit,s),bi(this._ctx,function(){var o=s;return function(l,u,h){return--o<=0&&u(h),0<=o}},!0),this},De.prototype.until=function(s,o){return gi(this._ctx,function(l,u,h){return!s(l.value)||(u(h),o)}),this},De.prototype.first=function(s){return this.limit(1).toArray(function(o){return o[0]}).then(s)},De.prototype.last=function(s){return this.reverse().first(s)},De.prototype.filter=function(s){var o;return gi(this._ctx,function(l){return s(l.value)}),(o=this._ctx).isMatch=En(o.isMatch,s),this},De.prototype.and=function(s){return this.filter(s)},De.prototype.or=function(s){return new this.db.WhereClause(this._ctx.table,s,this)},De.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},De.prototype.desc=function(){return this.reverse()},De.prototype.eachKey=function(s){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){s(u.key,u)})},De.prototype.eachUniqueKey=function(s){return this._ctx.unique="unique",this.eachKey(s)},De.prototype.eachPrimaryKey=function(s){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){s(u.primaryKey,u)})},De.prototype.keys=function(s){var o=this._ctx;o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,h){l.push(h.key)}).then(function(){return l}).then(s)},De.prototype.primaryKeys=function(s){var o=this._ctx;if(o.dir==="next"&&Nn(o,!0)&&0<o.limit)return this._read(function(u){var h=_r(o,o.table.core.schema);return o.table.core.query({trans:u,values:!1,limit:o.limit,query:{index:h,range:o.range}})}).then(function(u){return u.result}).then(s);o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,h){l.push(h.primaryKey)}).then(function(){return l}).then(s)},De.prototype.uniqueKeys=function(s){return this._ctx.unique="unique",this.keys(s)},De.prototype.firstKey=function(s){return this.limit(1).keys(function(o){return o[0]}).then(s)},De.prototype.lastKey=function(s){return this.reverse().firstKey(s)},De.prototype.distinct=function(){var s=this._ctx,s=s.index&&s.table.schema.idxByName[s.index];if(!s||!s.multi)return this;var o={};return gi(this._ctx,function(h){var u=h.primaryKey.toString(),h=x(o,u);return o[u]=!0,!h}),this},De.prototype.modify=function(s){var o=this,l=this._ctx;return this._write(function(u){var h,p,b;b=typeof s=="function"?s:(h=c(s),p=h.length,function(P){for(var I=!1,z=0;z<p;++z){var B=h[z],N=s[B],K=ve(P,B);N instanceof tr?(Re(P,B,N.execute(K)),I=!0):K!==N&&(Re(P,B,N),I=!0)}return I});var v=l.table.core,$=v.schema.primaryKey,E=$.outbound,A=$.extractKey,D=200,$=o.db._options.modifyChunkSize;$&&(D=typeof $=="object"?$[v.name]||$["*"]||200:$);function R(P,B){var z=B.failures,B=B.numFailures;T+=P-B;for(var N=0,K=c(z);N<K.length;N++){var Z=K[N];S.push(z[Z])}}var S=[],T=0,j=[];return o.clone().primaryKeys().then(function(P){function I(B){var N=Math.min(D,P.length-B);return v.getMany({trans:u,keys:P.slice(B,B+N),cache:"immutable"}).then(function(K){for(var Z=[],V=[],X=E?[]:null,te=[],J=0;J<N;++J){var re=K[J],me={value:C(re),primKey:P[B+J]};b.call(me,me.value,me)!==!1&&(me.value==null?te.push(P[B+J]):E||Ee(A(re),A(me.value))===0?(V.push(me.value),E&&X.push(P[B+J])):(te.push(P[B+J]),Z.push(me.value)))}return Promise.resolve(0<Z.length&&v.mutate({trans:u,type:"add",values:Z}).then(function(be){for(var ye in be.failures)te.splice(parseInt(ye),1);R(Z.length,be)})).then(function(){return(0<V.length||z&&typeof s=="object")&&v.mutate({trans:u,type:"put",keys:X,values:V,criteria:z,changeSpec:typeof s!="function"&&s,isAdditionalChunk:0<B}).then(function(be){return R(V.length,be)})}).then(function(){return(0<te.length||z&&s===yi)&&v.mutate({trans:u,type:"delete",keys:te,criteria:z,isAdditionalChunk:0<B}).then(function(be){return R(te.length,be)})}).then(function(){return P.length>B+N&&I(B+D)})})}var z=Nn(l)&&l.limit===1/0&&(typeof s!="function"||s===yi)&&{index:l.index,range:l.range};return I(0).then(function(){if(0<S.length)throw new xe("Error modifying one or more objects",S,T,j);return P.length})})})},De.prototype.delete=function(){var s=this._ctx,o=s.range;return Nn(s)&&(s.isPrimKey||o.type===3)?this._write(function(l){var u=s.table.core.schema.primaryKey,h=o;return s.table.core.count({trans:l,query:{index:u,range:h}}).then(function(p){return s.table.core.mutate({trans:l,type:"deleteRange",range:h}).then(function(b){var v=b.failures;if(b.lastResult,b.results,b=b.numFailures,b)throw new xe("Could not delete some values",Object.keys(v).map(function(E){return v[E]}),p-b);return p-b})})}):this.modify(yi)},De);function De(){}var yi=function(s,o){return o.value=null};function Wa(s,o){return s<o?-1:s===o?0:1}function Ka(s,o){return o<s?-1:s===o?0:1}function _t(s,o,l){return s=s instanceof Ps?new s.Collection(s):s,s._ctx.error=new(l||TypeError)(o),s}function qn(s){return new s.Collection(s,function(){return As("")}).limit(0)}function Pr(s,o,l,u){var h,p,b,v,E,A,D,$=l.length;if(!l.every(function(T){return typeof T=="string"}))return _t(s,ws);function R(T){h=T==="next"?function(P){return P.toUpperCase()}:function(P){return P.toLowerCase()},p=T==="next"?function(P){return P.toLowerCase()}:function(P){return P.toUpperCase()},b=T==="next"?Wa:Ka;var j=l.map(function(P){return{lower:p(P),upper:h(P)}}).sort(function(P,I){return b(P.lower,I.lower)});v=j.map(function(P){return P.upper}),E=j.map(function(P){return P.lower}),D=(A=T)==="next"?"":u}R("next"),s=new s.Collection(s,function(){return gn(v[0],E[$-1]+u)}),s._ondirectionchange=function(T){R(T)};var S=0;return s._addAlgorithm(function(T,j,P){var I=T.key;if(typeof I!="string")return!1;var z=p(I);if(o(z,E,S))return!0;for(var B=null,N=S;N<$;++N){var K=(function(Z,V,X,te,J,re){for(var me=Math.min(Z.length,te.length),be=-1,ye=0;ye<me;++ye){var At=V[ye];if(At!==te[ye])return J(Z[ye],X[ye])<0?Z.substr(0,ye)+X[ye]+X.substr(ye+1):J(Z[ye],te[ye])<0?Z.substr(0,ye)+te[ye]+X.substr(ye+1):0<=be?Z.substr(0,be)+V[be]+X.substr(be+1):null;J(Z[ye],At)<0&&(be=ye)}return me<te.length&&re==="next"?Z+X.substr(Z.length):me<Z.length&&re==="prev"?Z.substr(0,X.length):be<0?null:Z.substr(0,be)+te[be]+X.substr(be+1)})(I,z,v[N],E[N],b,A);K===null&&B===null?S=N+1:(B===null||0<b(B,K))&&(B=K)}return j(B!==null?function(){T.continue(B+D)}:P),!1}),s}function gn(s,o,l,u){return{type:2,lower:s,upper:o,lowerOpen:l,upperOpen:u}}function As(s){return{type:1,lower:s,upper:s}}var Ps=(Object.defineProperty(ft.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ft.prototype.between=function(s,o,l,u){l=l!==!1,u=u===!0;try{return 0<this._cmp(s,o)||this._cmp(s,o)===0&&(l||u)&&(!l||!u)?qn(this):new this.Collection(this,function(){return gn(s,o,!l,!u)})}catch{return _t(this,nn)}},ft.prototype.equals=function(s){return s==null?_t(this,nn):new this.Collection(this,function(){return As(s)})},ft.prototype.above=function(s){return s==null?_t(this,nn):new this.Collection(this,function(){return gn(s,void 0,!0)})},ft.prototype.aboveOrEqual=function(s){return s==null?_t(this,nn):new this.Collection(this,function(){return gn(s,void 0,!1)})},ft.prototype.below=function(s){return s==null?_t(this,nn):new this.Collection(this,function(){return gn(void 0,s,!1,!0)})},ft.prototype.belowOrEqual=function(s){return s==null?_t(this,nn):new this.Collection(this,function(){return gn(void 0,s)})},ft.prototype.startsWith=function(s){return typeof s!="string"?_t(this,ws):this.between(s,s+Cn,!0,!0)},ft.prototype.startsWithIgnoreCase=function(s){return s===""?this.startsWith(s):Pr(this,function(o,l){return o.indexOf(l[0])===0},[s],Cn)},ft.prototype.equalsIgnoreCase=function(s){return Pr(this,function(o,l){return o===l[0]},[s],"")},ft.prototype.anyOfIgnoreCase=function(){var s=Ke.apply(Y,arguments);return s.length===0?qn(this):Pr(this,function(o,l){return l.indexOf(o)!==-1},s,"")},ft.prototype.startsWithAnyOfIgnoreCase=function(){var s=Ke.apply(Y,arguments);return s.length===0?qn(this):Pr(this,function(o,l){return l.some(function(u){return o.indexOf(u)===0})},s,Cn)},ft.prototype.anyOf=function(){var s=this,o=Ke.apply(Y,arguments),l=this._cmp;try{o.sort(l)}catch{return _t(this,nn)}if(o.length===0)return qn(this);var u=new this.Collection(this,function(){return gn(o[0],o[o.length-1])});u._ondirectionchange=function(p){l=p==="next"?s._ascending:s._descending,o.sort(l)};var h=0;return u._addAlgorithm(function(p,b,v){for(var E=p.key;0<l(E,o[h]);)if(++h===o.length)return b(v),!1;return l(E,o[h])===0||(b(function(){p.continue(o[h])}),!1)}),u},ft.prototype.notEqual=function(s){return this.inAnyRange([[-1/0,s],[s,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ft.prototype.noneOf=function(){var s=Ke.apply(Y,arguments);if(s.length===0)return new this.Collection(this);try{s.sort(this._ascending)}catch{return _t(this,nn)}var o=s.reduce(function(l,u){return l?l.concat([[l[l.length-1][1],u]]):[[-1/0,u]]},null);return o.push([s[s.length-1],this.db._maxKey]),this.inAnyRange(o,{includeLowers:!1,includeUppers:!1})},ft.prototype.inAnyRange=function(I,o){var l=this,u=this._cmp,h=this._ascending,p=this._descending,b=this._min,v=this._max;if(I.length===0)return qn(this);if(!I.every(function(z){return z[0]!==void 0&&z[1]!==void 0&&h(z[0],z[1])<=0}))return _t(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var E=!o||o.includeLowers!==!1,A=o&&o.includeUppers===!0,D,$=h;function R(z,B){return $(z[0],B[0])}try{(D=I.reduce(function(z,B){for(var N=0,K=z.length;N<K;++N){var Z=z[N];if(u(B[0],Z[1])<0&&0<u(B[1],Z[0])){Z[0]=b(Z[0],B[0]),Z[1]=v(Z[1],B[1]);break}}return N===K&&z.push(B),z},[])).sort(R)}catch{return _t(this,nn)}var S=0,T=A?function(z){return 0<h(z,D[S][1])}:function(z){return 0<=h(z,D[S][1])},j=E?function(z){return 0<p(z,D[S][0])}:function(z){return 0<=p(z,D[S][0])},P=T,I=new this.Collection(this,function(){return gn(D[0][0],D[D.length-1][1],!E,!A)});return I._ondirectionchange=function(z){$=z==="next"?(P=T,h):(P=j,p),D.sort(R)},I._addAlgorithm(function(z,B,N){for(var K,Z=z.key;P(Z);)if(++S===D.length)return B(N),!1;return!T(K=Z)&&!j(K)||(l._cmp(Z,D[S][1])===0||l._cmp(Z,D[S][0])===0||B(function(){$===h?z.continue(D[S][0]):z.continue(D[S][1])}),!1)}),I},ft.prototype.startsWithAnyOf=function(){var s=Ke.apply(Y,arguments);return s.every(function(o){return typeof o=="string"})?s.length===0?qn(this):this.inAnyRange(s.map(function(o){return[o,o+Cn]})):_t(this,"startsWithAnyOf() only works with strings")},ft);function ft(){}function Yt(s){return Be(function(o){return nr(o),s(o.target.error),!1})}function nr(s){s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault()}var rr="storagemutated",wi="x-storagemutated-1",bn=Zn(null,rr),Va=(Xt.prototype._lock=function(){return ie(!G.global),++this._reculock,this._reculock!==1||G.global||(G.lockOwnerFor=this),this},Xt.prototype._unlock=function(){if(ie(!G.global),--this._reculock==0)for(G.global||(G.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var s=this._blockedFuncs.shift();try{kn(s[1],s[0])}catch{}}return this},Xt.prototype._locked=function(){return this._reculock&&G.lockOwnerFor!==this},Xt.prototype.create=function(s){var o=this;if(!this.mode)return this;var l=this.db.idbdb,u=this.db._state.dbOpenError;if(ie(!this.idbtrans),!s&&!l)switch(u&&u.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(u);case"MissingAPIError":throw new ee.MissingAPI(u.message,u);default:throw new ee.OpenFailed(u)}if(!this.active)throw new ee.TransactionInactive;return ie(this._completion._state===null),(s=this.idbtrans=s||(this.db.core||l).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Be(function(h){nr(h),o._reject(s.error)}),s.onabort=Be(function(h){nr(h),o.active&&o._reject(new ee.Abort(s.error)),o.active=!1,o.on("abort").fire(h)}),s.oncomplete=Be(function(){o.active=!1,o._resolve(),"mutatedParts"in s&&bn.storagemutated.fire(s.mutatedParts)}),this},Xt.prototype._promise=function(s,o,l){var u=this;if(s==="readwrite"&&this.mode!=="readwrite")return rt(new ee.ReadOnly("Transaction is readonly"));if(!this.active)return rt(new ee.TransactionInactive);if(this._locked())return new Q(function(p,b){u._blockedFuncs.push([function(){u._promise(s,o,l).then(p,b)},G])});if(l)return fn(function(){var p=new Q(function(b,v){u._lock();var E=o(b,v,u);E&&E.then&&E.then(b,v)});return p.finally(function(){return u._unlock()}),p._lib=!0,p});var h=new Q(function(p,b){var v=o(p,b,u);v&&v.then&&v.then(p,b)});return h._lib=!0,h},Xt.prototype._root=function(){return this.parent?this.parent._root():this},Xt.prototype.waitFor=function(s){var o,l=this._root(),u=Q.resolve(s);l._waitingFor?l._waitingFor=l._waitingFor.then(function(){return u}):(l._waitingFor=u,l._waitingQueue=[],o=l.idbtrans.objectStore(l.storeNames[0]),(function p(){for(++l._spinCount;l._waitingQueue.length;)l._waitingQueue.shift()();l._waitingFor&&(o.get(-1/0).onsuccess=p)})());var h=l._waitingFor;return new Q(function(p,b){u.then(function(v){return l._waitingQueue.push(Be(p.bind(null,v)))},function(v){return l._waitingQueue.push(Be(b.bind(null,v)))}).finally(function(){l._waitingFor===h&&(l._waitingFor=null)})})},Xt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},Xt.prototype.table=function(s){var o=this._memoizedTables||(this._memoizedTables={});if(x(o,s))return o[s];var l=this.schema[s];if(!l)throw new ee.NotFound("Table "+s+" not part of transaction");return l=new this.db.Table(s,l,this),l.core=this.db.core.table(s),o[s]=l},Xt);function Xt(){}function vi(s,o,l,u,h,p,b){return{name:s,keyPath:o,unique:l,multi:u,auto:h,compound:p,src:(l&&!b?"&":"")+(u?"*":"")+(h?"++":"")+Ts(o)}}function Ts(s){return typeof s=="string"?s:s?"["+[].join.call(s,"+")+"]":""}function xi(s,o,l){return{name:s,primKey:o,indexes:l,mappedClass:null,idxByName:(u=function(h){return[h.name,h]},l.reduce(function(h,p,b){return b=u(p,b),b&&(h[b[0]]=b[1]),h},{}))};var u}var ir=function(s){try{return s.only([[]]),ir=function(){return[[]]},[[]]}catch{return ir=function(){return Cn},Cn}};function $i(s){return s==null?function(){}:typeof s=="string"?(o=s).split(".").length===1?function(l){return l[o]}:function(l){return ve(l,o)}:function(l){return ve(l,s)};var o}function Ds(s){return[].slice.call(s)}var Ya=0;function sr(s){return s==null?":id":typeof s=="string"?s:"[".concat(s.join("+"),"]")}function Xa(s,o,E){function u(P){if(P.type===3)return null;if(P.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var S=P.lower,T=P.upper,j=P.lowerOpen,P=P.upperOpen;return S===void 0?T===void 0?null:o.upperBound(T,!!P):T===void 0?o.lowerBound(S,!!j):o.bound(S,T,!!j,!!P)}function h(R){var S,T=R.name;return{name:T,schema:R,mutate:function(j){var P=j.trans,I=j.type,z=j.keys,B=j.values,N=j.range;return new Promise(function(K,Z){K=Be(K);var V=P.objectStore(T),X=V.keyPath==null,te=I==="put"||I==="add";if(!te&&I!=="delete"&&I!=="deleteRange")throw new Error("Invalid operation type: "+I);var J,re=(z||B||{length:1}).length;if(z&&B&&z.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(re===0)return K({numFailures:0,failures:{},results:[],lastResult:void 0});function me(vt){++At,nr(vt)}var be=[],ye=[],At=0;if(I==="deleteRange"){if(N.type===4)return K({numFailures:At,failures:ye,results:[],lastResult:void 0});N.type===3?be.push(J=V.clear()):be.push(J=V.delete(u(N)))}else{var X=te?X?[B,z]:[B,null]:[z,null],pe=X[0],bt=X[1];if(te)for(var yt=0;yt<re;++yt)be.push(J=bt&&bt[yt]!==void 0?V[I](pe[yt],bt[yt]):V[I](pe[yt])),J.onerror=me;else for(yt=0;yt<re;++yt)be.push(J=V[I](pe[yt])),J.onerror=me}function qr(vt){vt=vt.target.result,be.forEach(function(An,Mi){return An.error!=null&&(ye[Mi]=An.error)}),K({numFailures:At,failures:ye,results:I==="delete"?z:be.map(function(An){return An.result}),lastResult:vt})}J.onerror=function(vt){me(vt),qr(vt)},J.onsuccess=qr})},getMany:function(j){var P=j.trans,I=j.keys;return new Promise(function(z,B){z=Be(z);for(var N,K=P.objectStore(T),Z=I.length,V=new Array(Z),X=0,te=0,J=function(be){be=be.target,V[be._pos]=be.result,++te===X&&z(V)},re=Yt(B),me=0;me<Z;++me)I[me]!=null&&((N=K.get(I[me]))._pos=me,N.onsuccess=J,N.onerror=re,++X);X===0&&z(V)})},get:function(j){var P=j.trans,I=j.key;return new Promise(function(z,B){z=Be(z);var N=P.objectStore(T).get(I);N.onsuccess=function(K){return z(K.target.result)},N.onerror=Yt(B)})},query:(S=A,function(j){return new Promise(function(P,I){P=Be(P);var z,B,N,X=j.trans,K=j.values,Z=j.limit,J=j.query,V=Z===1/0?void 0:Z,te=J.index,J=J.range,X=X.objectStore(T),te=te.isPrimaryKey?X:X.index(te.name),J=u(J);if(Z===0)return P({result:[]});S?((V=K?te.getAll(J,V):te.getAllKeys(J,V)).onsuccess=function(re){return P({result:re.target.result})},V.onerror=Yt(I)):(z=0,B=!K&&"openKeyCursor"in te?te.openKeyCursor(J):te.openCursor(J),N=[],B.onsuccess=function(re){var me=B.result;return me?(N.push(K?me.value:me.primaryKey),++z===Z?P({result:N}):void me.continue()):P({result:N})},B.onerror=Yt(I))})}),openCursor:function(j){var P=j.trans,I=j.values,z=j.query,B=j.reverse,N=j.unique;return new Promise(function(K,Z){K=Be(K);var te=z.index,V=z.range,X=P.objectStore(T),X=te.isPrimaryKey?X:X.index(te.name),te=B?N?"prevunique":"prev":N?"nextunique":"next",J=!I&&"openKeyCursor"in X?X.openKeyCursor(u(V),te):X.openCursor(u(V),te);J.onerror=Yt(Z),J.onsuccess=Be(function(re){var me,be,ye,At,pe=J.result;pe?(pe.___id=++Ya,pe.done=!1,me=pe.continue.bind(pe),be=(be=pe.continuePrimaryKey)&&be.bind(pe),ye=pe.advance.bind(pe),At=function(){throw new Error("Cursor not stopped")},pe.trans=P,pe.stop=pe.continue=pe.continuePrimaryKey=pe.advance=function(){throw new Error("Cursor not started")},pe.fail=Be(Z),pe.next=function(){var bt=this,yt=1;return this.start(function(){return yt--?bt.continue():bt.stop()}).then(function(){return bt})},pe.start=function(bt){function yt(){if(J.result)try{bt()}catch(vt){pe.fail(vt)}else pe.done=!0,pe.start=function(){throw new Error("Cursor behind last entry")},pe.stop()}var qr=new Promise(function(vt,An){vt=Be(vt),J.onerror=Yt(An),pe.fail=An,pe.stop=function(Mi){pe.stop=pe.continue=pe.continuePrimaryKey=pe.advance=At,vt(Mi)}});return J.onsuccess=Be(function(vt){J.onsuccess=yt,yt()}),pe.continue=me,pe.continuePrimaryKey=be,pe.advance=ye,yt(),qr},K(pe)):K(null)},Z)})},count:function(j){var P=j.query,I=j.trans,z=P.index,B=P.range;return new Promise(function(N,K){var Z=I.objectStore(T),V=z.isPrimaryKey?Z:Z.index(z.name),Z=u(B),V=Z?V.count(Z):V.count();V.onsuccess=Be(function(X){return N(X.target.result)}),V.onerror=Yt(K)})}}}var p,b,v,D=(b=E,v=Ds((p=s).objectStoreNames),{schema:{name:p.name,tables:v.map(function(R){return b.objectStore(R)}).map(function(R){var S=R.keyPath,P=R.autoIncrement,T=d(S),j={},P={name:R.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:S==null,compound:T,keyPath:S,autoIncrement:P,unique:!0,extractKey:$i(S)},indexes:Ds(R.indexNames).map(function(I){return R.index(I)}).map(function(N){var z=N.name,B=N.unique,K=N.multiEntry,N=N.keyPath,K={name:z,compound:d(N),keyPath:N,unique:B,multiEntry:K,extractKey:$i(N)};return j[sr(N)]=K}),getIndexByKeyPath:function(I){return j[sr(I)]}};return j[":id"]=P.primaryKey,S!=null&&(j[sr(S)]=P.primaryKey),P})},hasGetAll:0<v.length&&"getAll"in b.objectStore(v[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),E=D.schema,A=D.hasGetAll,D=E.tables.map(h),$={};return D.forEach(function(R){return $[R.name]=R}),{stack:"dbcore",transaction:s.transaction.bind(s),table:function(R){if(!$[R])throw new Error("Table '".concat(R,"' not found"));return $[R]},MIN_KEY:-1/0,MAX_KEY:ir(o),schema:E}}function Ga(s,o,l,u){var h=l.IDBKeyRange;return l.indexedDB,{dbcore:(u=Xa(o,h,u),s.dbcore.reduce(function(p,b){return b=b.create,i(i({},p),b(p))},u))}}function Tr(s,u){var l=u.db,u=Ga(s._middlewares,l,s._deps,u);s.core=u.dbcore,s.tables.forEach(function(h){var p=h.name;s.core.schema.tables.some(function(b){return b.name===p})&&(h.core=s.core.table(p),s[p]instanceof s.Table&&(s[p].core=h.core))})}function Dr(s,o,l,u){l.forEach(function(h){var p=u[h];o.forEach(function(b){var v=(function E(A,D){return ae(A,D)||(A=w(A))&&E(A,D)})(b,h);(!v||"value"in v&&v.value===void 0)&&(b===s.Transaction.prototype||b instanceof s.Transaction?L(b,h,{get:function(){return this.table(h)},set:function(E){W(this,h,{value:E,writable:!0,configurable:!0,enumerable:!0})}}):b[h]=new s.Table(h,p))})})}function ki(s,o){o.forEach(function(l){for(var u in l)l[u]instanceof s.Table&&delete l[u]})}function Qa(s,o){return s._cfg.version-o._cfg.version}function Ja(s,o,l,u){var h=s._dbSchema;l.objectStoreNames.contains("$meta")&&!h.$meta&&(h.$meta=xi("$meta",Rs("")[0],[]),s._storeNames.push("$meta"));var p=s._createTransaction("readwrite",s._storeNames,h);p.create(l),p._completion.catch(u);var b=p._reject.bind(p),v=G.transless||G;fn(function(){return G.trans=p,G.transless=v,o!==0?(Tr(s,l),A=o,((E=p).storeNames.includes("$meta")?E.table("$meta").get("version").then(function(D){return D??A}):Q.resolve(A)).then(function(D){return R=D,S=p,T=l,j=[],D=($=s)._versions,P=$._dbSchema=Rr(0,$.idbdb,T),(D=D.filter(function(I){return I._cfg.version>=R})).length!==0?(D.forEach(function(I){j.push(function(){var z=P,B=I._cfg.dbschema;Or($,z,T),Or($,B,T),P=$._dbSchema=B;var N=Ci(z,B);N.add.forEach(function(te){Ei(T,te[0],te[1].primKey,te[1].indexes)}),N.change.forEach(function(te){if(te.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var J=T.objectStore(te.name);te.add.forEach(function(re){return jr(J,re)}),te.change.forEach(function(re){J.deleteIndex(re.name),jr(J,re)}),te.del.forEach(function(re){return J.deleteIndex(re)})});var K=I._cfg.contentUpgrade;if(K&&I._cfg.version>R){Tr($,T),S._memoizedTables={};var Z=Me(B);N.del.forEach(function(te){Z[te]=z[te]}),ki($,[$.Transaction.prototype]),Dr($,[$.Transaction.prototype],c(Z),Z),S.schema=Z;var V,X=ot(K);return X&&Bn(),N=Q.follow(function(){var te;(V=K(S))&&X&&(te=pn.bind(null,null),V.then(te,te))}),V&&typeof V.then=="function"?Q.resolve(V):N.then(function(){return V})}}),j.push(function(z){var B,N,K=I._cfg.dbschema;B=K,N=z,[].slice.call(N.db.objectStoreNames).forEach(function(Z){return B[Z]==null&&N.db.deleteObjectStore(Z)}),ki($,[$.Transaction.prototype]),Dr($,[$.Transaction.prototype],$._storeNames,$._dbSchema),S.schema=$._dbSchema}),j.push(function(z){$.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil($.idbdb.version/10)===I._cfg.version?($.idbdb.deleteObjectStore("$meta"),delete $._dbSchema.$meta,$._storeNames=$._storeNames.filter(function(B){return B!=="$meta"})):z.objectStore("$meta").put(I._cfg.version,"version"))})}),(function I(){return j.length?Q.resolve(j.shift()(S.idbtrans)).then(I):Q.resolve()})().then(function(){js(P,T)})):Q.resolve();var $,R,S,T,j,P}).catch(b)):(c(h).forEach(function(D){Ei(l,D,h[D].primKey,h[D].indexes)}),Tr(s,l),void Q.follow(function(){return s.on.populate.fire(p)}).catch(b));var E,A})}function Za(s,o){js(s._dbSchema,o),o.db.version%10!=0||o.objectStoreNames.contains("$meta")||o.db.createObjectStore("$meta").add(Math.ceil(o.db.version/10-1),"version");var l=Rr(0,s.idbdb,o);Or(s,s._dbSchema,o);for(var u=0,h=Ci(l,s._dbSchema).change;u<h.length;u++){var p=(function(b){if(b.change.length||b.recreate)return console.warn("Unable to patch indexes of table ".concat(b.name," because it has changes on the type of index or primary key.")),{value:void 0};var v=o.objectStore(b.name);b.add.forEach(function(E){je&&console.debug("Dexie upgrade patch: Creating missing index ".concat(b.name,".").concat(E.src)),jr(v,E)})})(h[u]);if(typeof p=="object")return p.value}}function Ci(s,o){var l,u={del:[],add:[],change:[]};for(l in s)o[l]||u.del.push(l);for(l in o){var h=s[l],p=o[l];if(h){var b={name:l,def:p,recreate:!1,del:[],add:[],change:[]};if(""+(h.primKey.keyPath||"")!=""+(p.primKey.keyPath||"")||h.primKey.auto!==p.primKey.auto)b.recreate=!0,u.change.push(b);else{var v=h.idxByName,E=p.idxByName,A=void 0;for(A in v)E[A]||b.del.push(A);for(A in E){var D=v[A],$=E[A];D?D.src!==$.src&&b.change.push($):b.add.push($)}(0<b.del.length||0<b.add.length||0<b.change.length)&&u.change.push(b)}}else u.add.push([l,p])}return u}function Ei(s,o,l,u){var h=s.db.createObjectStore(o,l.keyPath?{keyPath:l.keyPath,autoIncrement:l.auto}:{autoIncrement:l.auto});return u.forEach(function(p){return jr(h,p)}),h}function js(s,o){c(s).forEach(function(l){o.db.objectStoreNames.contains(l)||(je&&console.debug("Dexie: Creating missing table",l),Ei(o,l,s[l].primKey,s[l].indexes))})}function jr(s,o){s.createIndex(o.name,o.keyPath,{unique:o.unique,multiEntry:o.multi})}function Rr(s,o,l){var u={};return we(o.objectStoreNames,0).forEach(function(h){for(var p=l.objectStore(h),b=vi(Ts(A=p.keyPath),A||"",!0,!1,!!p.autoIncrement,A&&typeof A!="string",!0),v=[],E=0;E<p.indexNames.length;++E){var D=p.index(p.indexNames[E]),A=D.keyPath,D=vi(D.name,A,!!D.unique,!!D.multiEntry,!1,A&&typeof A!="string",!1);v.push(D)}u[h]=xi(h,b,v)}),u}function Or(s,o,l){for(var u=l.db.objectStoreNames,h=0;h<u.length;++h){var p=u[h],b=l.objectStore(p);s._hasGetAll="getAll"in b;for(var v=0;v<b.indexNames.length;++v){var E=b.indexNames[v],A=b.index(E).keyPath,D=typeof A=="string"?A:"["+we(A).join("+")+"]";!o[p]||(A=o[p].idxByName[D])&&(A.name=E,delete o[p].idxByName[D],o[p].idxByName[E]=A)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&a.WorkerGlobalScope&&a instanceof a.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(s._hasGetAll=!1)}function Rs(s){return s.split(",").map(function(o,l){var u=(o=o.trim()).replace(/([&*]|\+\+)/g,""),h=/^\[/.test(u)?u.match(/^\[(.*)\]$/)[1].split("+"):u;return vi(u,h||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),d(h),l===0)})}var el=(Fr.prototype._parseStoresSpec=function(s,o){c(s).forEach(function(l){if(s[l]!==null){var u=Rs(s[l]),h=u.shift();if(h.unique=!0,h.multi)throw new ee.Schema("Primary key cannot be multi-valued");u.forEach(function(p){if(p.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!p.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),o[l]=xi(l,h,u)}})},Fr.prototype.stores=function(l){var o=this.db;this._cfg.storesSource=this._cfg.storesSource?f(this._cfg.storesSource,l):l;var l=o._versions,u={},h={};return l.forEach(function(p){f(u,p._cfg.storesSource),h=p._cfg.dbschema={},p._parseStoresSpec(u,h)}),o._dbSchema=h,ki(o,[o._allTables,o,o.Transaction.prototype]),Dr(o,[o._allTables,o,o.Transaction.prototype,this._cfg.tables],c(h),h),o._storeNames=c(h),this},Fr.prototype.upgrade=function(s){return this._cfg.contentUpgrade=Et(this._cfg.contentUpgrade||ue,s),this},Fr);function Fr(){}function Si(s,o){var l=s._dbNamesDB;return l||(l=s._dbNamesDB=new sn(Er,{addons:[],indexedDB:s,IDBKeyRange:o})).version(1).stores({dbnames:"name"}),l.table("dbnames")}function _i(s){return s&&typeof s.databases=="function"}function Ai(s){return fn(function(){return G.letThrough=!0,s()})}function Pi(s){return!("from"in s)}var gt=function(s,o){if(!this){var l=new gt;return s&&"d"in s&&f(l,s),l}f(this,arguments.length?{d:1,from:s,to:1<arguments.length?o:s}:{d:0})};function or(s,o,l){var u=Ee(o,l);if(!isNaN(u)){if(0<u)throw RangeError();if(Pi(s))return f(s,{from:o,to:l,d:1});var h=s.l,u=s.r;if(Ee(l,s.from)<0)return h?or(h,o,l):s.l={from:o,to:l,d:1,l:null,r:null},Fs(s);if(0<Ee(o,s.to))return u?or(u,o,l):s.r={from:o,to:l,d:1,l:null,r:null},Fs(s);Ee(o,s.from)<0&&(s.from=o,s.l=null,s.d=u?u.d+1:1),0<Ee(l,s.to)&&(s.to=l,s.r=null,s.d=s.l?s.l.d+1:1),l=!s.r,h&&!s.l&&ar(s,h),u&&l&&ar(s,u)}}function ar(s,o){Pi(o)||(function l(u,E){var p=E.from,b=E.to,v=E.l,E=E.r;or(u,p,b),v&&l(u,v),E&&l(u,E)})(s,o)}function Os(s,o){var l=Ir(o),u=l.next();if(u.done)return!1;for(var h=u.value,p=Ir(s),b=p.next(h.from),v=b.value;!u.done&&!b.done;){if(Ee(v.from,h.to)<=0&&0<=Ee(v.to,h.from))return!0;Ee(h.from,v.from)<0?h=(u=l.next(v.from)).value:v=(b=p.next(h.from)).value}return!1}function Ir(s){var o=Pi(s)?null:{s:0,n:s};return{next:function(l){for(var u=0<arguments.length;o;)switch(o.s){case 0:if(o.s=1,u)for(;o.n.l&&Ee(l,o.n.from)<0;)o={up:o,n:o.n.l,s:1};else for(;o.n.l;)o={up:o,n:o.n.l,s:1};case 1:if(o.s=2,!u||Ee(l,o.n.to)<=0)return{value:o.n,done:!1};case 2:if(o.n.r){o.s=3,o={up:o,n:o.n.r,s:0};continue}case 3:o=o.up}return{done:!0}}}}function Fs(s){var o,l,u=(((o=s.r)===null||o===void 0?void 0:o.d)||0)-(((l=s.l)===null||l===void 0?void 0:l.d)||0),h=1<u?"r":u<-1?"l":"";h&&(o=h=="r"?"l":"r",l=i({},s),u=s[h],s.from=u.from,s.to=u.to,s[h]=u[h],l[h]=u[o],(s[o]=l).d=Is(l)),s.d=Is(s)}function Is(l){var o=l.r,l=l.l;return(o?l?Math.max(o.d,l.d):o.d:l?l.d:0)+1}function zr(s,o){return c(o).forEach(function(l){s[l]?ar(s[l],o[l]):s[l]=(function u(h){var p,b,v={};for(p in h)x(h,p)&&(b=h[p],v[p]=!b||typeof b!="object"||m.has(b.constructor)?b:u(b));return v})(o[l])}),s}function Ti(s,o){return s.all||o.all||Object.keys(s).some(function(l){return o[l]&&Os(o[l],s[l])})}O(gt.prototype,((Ft={add:function(s){return ar(this,s),this},addKey:function(s){return or(this,s,s),this},addKeys:function(s){var o=this;return s.forEach(function(l){return or(o,l,l)}),this},hasKey:function(s){var o=Ir(this).next(s).value;return o&&Ee(o.from,s)<=0&&0<=Ee(o.to,s)}})[se]=function(){return Ir(this)},Ft));var Sn={},Di={},ji=!1;function Lr(s){zr(Di,s),ji||(ji=!0,setTimeout(function(){ji=!1,Ri(Di,!(Di={}))},0))}function Ri(s,o){o===void 0&&(o=!1);var l=new Set;if(s.all)for(var u=0,h=Object.values(Sn);u<h.length;u++)zs(b=h[u],s,l,o);else for(var p in s){var b,v=/^idb\:\/\/(.*)\/(.*)\//.exec(p);v&&(p=v[1],v=v[2],(b=Sn["idb://".concat(p,"/").concat(v)])&&zs(b,s,l,o))}l.forEach(function(E){return E()})}function zs(s,o,l,u){for(var h=[],p=0,b=Object.entries(s.queries.query);p<b.length;p++){for(var v=b[p],E=v[0],A=[],D=0,$=v[1];D<$.length;D++){var R=$[D];Ti(o,R.obsSet)?R.subscribers.forEach(function(P){return l.add(P)}):u&&A.push(R)}u&&h.push([E,A])}if(u)for(var S=0,T=h;S<T.length;S++){var j=T[S],E=j[0],A=j[1];s.queries.query[E]=A}}function tl(s){var o=s._state,l=s._deps.indexedDB;if(o.isBeingOpened||s.idbdb)return o.dbReadyPromise.then(function(){return o.dbOpenError?rt(o.dbOpenError):s});o.isBeingOpened=!0,o.dbOpenError=null,o.openComplete=!1;var u=o.openCanceller,h=Math.round(10*s.verno),p=!1;function b(){if(o.openCanceller!==u)throw new ee.DatabaseClosed("db.open() was cancelled")}function v(){return new Q(function(R,S){if(b(),!l)throw new ee.MissingAPI;var T=s.name,j=o.autoSchema||!h?l.open(T):l.open(T,h);if(!j)throw new ee.MissingAPI;j.onerror=Yt(S),j.onblocked=Be(s._fireOnBlocked),j.onupgradeneeded=Be(function(P){var I;D=j.transaction,o.autoSchema&&!s._options.allowEmptyDB?(j.onerror=nr,D.abort(),j.result.close(),(I=l.deleteDatabase(T)).onsuccess=I.onerror=Be(function(){S(new ee.NoSuchDatabase("Database ".concat(T," doesnt exist")))})):(D.onerror=Yt(S),P=P.oldVersion>Math.pow(2,62)?0:P.oldVersion,$=P<1,s.idbdb=j.result,p&&Za(s,D),Ja(s,P/10,D,S))},S),j.onsuccess=Be(function(){D=null;var P,I,z,B,N,K=s.idbdb=j.result,Z=we(K.objectStoreNames);if(0<Z.length)try{var V=K.transaction((B=Z).length===1?B[0]:B,"readonly");if(o.autoSchema)I=K,z=V,(P=s).verno=I.version/10,z=P._dbSchema=Rr(0,I,z),P._storeNames=we(I.objectStoreNames,0),Dr(P,[P._allTables],c(z),z);else if(Or(s,s._dbSchema,V),((N=Ci(Rr(0,(N=s).idbdb,V),N._dbSchema)).add.length||N.change.some(function(X){return X.add.length||X.change.length}))&&!p)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),K.close(),h=K.version+1,p=!0,R(v());Tr(s,V)}catch{}Mn.push(s),K.onversionchange=Be(function(X){o.vcFired=!0,s.on("versionchange").fire(X)}),K.onclose=Be(function(X){s.on("close").fire(X)}),$&&(N=s._deps,V=T,K=N.indexedDB,N=N.IDBKeyRange,_i(K)||V===Er||Si(K,N).put({name:V}).catch(ue)),R()},S)}).catch(function(R){switch(R?.name){case"UnknownError":if(0<o.PR1398_maxLoop)return o.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),v();break;case"VersionError":if(0<h)return h=0,v()}return Q.reject(R)})}var E,A=o.dbReadyResolve,D=null,$=!1;return Q.race([u,(typeof navigator>"u"?Q.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(R){function S(){return indexedDB.databases().finally(R)}E=setInterval(S,100),S()}).finally(function(){return clearInterval(E)}):Promise.resolve()).then(v)]).then(function(){return b(),o.onReadyBeingFired=[],Q.resolve(Ai(function(){return s.on.ready.fire(s.vip)})).then(function R(){if(0<o.onReadyBeingFired.length){var S=o.onReadyBeingFired.reduce(Et,ue);return o.onReadyBeingFired=[],Q.resolve(Ai(function(){return S(s.vip)})).then(R)}})}).finally(function(){o.openCanceller===u&&(o.onReadyBeingFired=null,o.isBeingOpened=!1)}).catch(function(R){o.dbOpenError=R;try{D&&D.abort()}catch{}return u===o.openCanceller&&s._close(),rt(R)}).finally(function(){o.openComplete=!0,A()}).then(function(){var R;return $&&(R={},s.tables.forEach(function(S){S.schema.indexes.forEach(function(T){T.name&&(R["idb://".concat(s.name,"/").concat(S.name,"/").concat(T.name)]=new gt(-1/0,[[[]]]))}),R["idb://".concat(s.name,"/").concat(S.name,"/")]=R["idb://".concat(s.name,"/").concat(S.name,"/:dels")]=new gt(-1/0,[[[]]])}),bn(rr).fire(R),Ri(R,!0)),s})}function Oi(s){function o(p){return s.next(p)}var l=h(o),u=h(function(p){return s.throw(p)});function h(p){return function(E){var v=p(E),E=v.value;return v.done?E:E&&typeof E.then=="function"?E.then(l,u):d(E)?Promise.all(E).then(l,u):l(E)}}return h(o)()}function Br(s,o,l){for(var u=d(s)?s.slice():[s],h=0;h<l;++h)u.push(o);return u}var nl={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(s){return i(i({},s),{table:function(o){var l=s.table(o),u=l.schema,h={},p=[];function b($,R,S){var T=sr($),j=h[T]=h[T]||[],P=$==null?0:typeof $=="string"?1:$.length,I=0<R,I=i(i({},S),{name:I?"".concat(T,"(virtual-from:").concat(S.name,")"):S.name,lowLevelIndex:S,isVirtual:I,keyTail:R,keyLength:P,extractKey:$i($),unique:!I&&S.unique});return j.push(I),I.isPrimaryKey||p.push(I),1<P&&b(P===2?$[0]:$.slice(0,P-1),R+1,S),j.sort(function(z,B){return z.keyTail-B.keyTail}),I}o=b(u.primaryKey.keyPath,0,u.primaryKey),h[":id"]=[o];for(var v=0,E=u.indexes;v<E.length;v++){var A=E[v];b(A.keyPath,0,A)}function D($){var R,S=$.query.index;return S.isVirtual?i(i({},$),{query:{index:S.lowLevelIndex,range:(R=$.query.range,S=S.keyTail,{type:R.type===1?2:R.type,lower:Br(R.lower,R.lowerOpen?s.MAX_KEY:s.MIN_KEY,S),lowerOpen:!0,upper:Br(R.upper,R.upperOpen?s.MIN_KEY:s.MAX_KEY,S),upperOpen:!0})}}):$}return i(i({},l),{schema:i(i({},u),{primaryKey:o,indexes:p,getIndexByKeyPath:function($){return($=h[sr($)])&&$[0]}}),count:function($){return l.count(D($))},query:function($){return l.query(D($))},openCursor:function($){var R=$.query.index,S=R.keyTail,T=R.isVirtual,j=R.keyLength;return T?l.openCursor(D($)).then(function(I){return I&&P(I)}):l.openCursor($);function P(I){return Object.create(I,{continue:{value:function(z){z!=null?I.continue(Br(z,$.reverse?s.MAX_KEY:s.MIN_KEY,S)):$.unique?I.continue(I.key.slice(0,j).concat($.reverse?s.MIN_KEY:s.MAX_KEY,S)):I.continue()}},continuePrimaryKey:{value:function(z,B){I.continuePrimaryKey(Br(z,s.MAX_KEY,S),B)}},primaryKey:{get:function(){return I.primaryKey}},key:{get:function(){var z=I.key;return j===1?z[0]:z.slice(0,j)}},value:{get:function(){return I.value}}})}}})}})}};function Fi(s,o,l,u){return l=l||{},u=u||"",c(s).forEach(function(h){var p,b,v;x(o,h)?(p=s[h],b=o[h],typeof p=="object"&&typeof b=="object"&&p&&b?(v=k(p))!==k(b)?l[u+h]=o[h]:v==="Object"?Fi(p,b,l,u+h+"."):p!==b&&(l[u+h]=o[h]):p!==b&&(l[u+h]=o[h])):l[u+h]=void 0}),c(o).forEach(function(h){x(s,h)||(l[u+h]=o[h])}),l}function Ii(s,o){return o.type==="delete"?o.keys:o.keys||o.values.map(s.extractKey)}var rl={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(s){return i(i({},s),{table:function(o){var l=s.table(o),u=l.schema.primaryKey;return i(i({},l),{mutate:function(h){var p=G.trans,b=p.table(o).hook,v=b.deleting,E=b.creating,A=b.updating;switch(h.type){case"add":if(E.fire===ue)break;return p._promise("readwrite",function(){return D(h)},!0);case"put":if(E.fire===ue&&A.fire===ue)break;return p._promise("readwrite",function(){return D(h)},!0);case"delete":if(v.fire===ue)break;return p._promise("readwrite",function(){return D(h)},!0);case"deleteRange":if(v.fire===ue)break;return p._promise("readwrite",function(){return(function $(R,S,T){return l.query({trans:R,values:!1,query:{index:u,range:S},limit:T}).then(function(j){var P=j.result;return D({type:"delete",keys:P,trans:R}).then(function(I){return 0<I.numFailures?Promise.reject(I.failures[0]):P.length<T?{failures:[],numFailures:0,lastResult:void 0}:$(R,i(i({},S),{lower:P[P.length-1],lowerOpen:!0}),T)})})})(h.trans,h.range,1e4)},!0)}return l.mutate(h);function D($){var R,S,T,j=G.trans,P=$.keys||Ii(u,$);if(!P)throw new Error("Keys missing");return($=$.type==="add"||$.type==="put"?i(i({},$),{keys:P}):i({},$)).type!=="delete"&&($.values=n([],$.values)),$.keys&&($.keys=n([],$.keys)),R=l,T=P,((S=$).type==="add"?Promise.resolve([]):R.getMany({trans:S.trans,keys:T,cache:"immutable"})).then(function(I){var z=P.map(function(B,N){var K,Z,V,X=I[N],te={onerror:null,onsuccess:null};return $.type==="delete"?v.fire.call(te,B,X,j):$.type==="add"||X===void 0?(K=E.fire.call(te,B,$.values[N],j),B==null&&K!=null&&($.keys[N]=B=K,u.outbound||Re($.values[N],u.keyPath,B))):(K=Fi(X,$.values[N]),(Z=A.fire.call(te,K,B,X,j))&&(V=$.values[N],Object.keys(Z).forEach(function(J){x(V,J)?V[J]=Z[J]:Re(V,J,Z[J])}))),te});return l.mutate($).then(function(B){for(var N=B.failures,K=B.results,Z=B.numFailures,B=B.lastResult,V=0;V<P.length;++V){var X=(K||P)[V],te=z[V];X==null?te.onerror&&te.onerror(N[V]):te.onsuccess&&te.onsuccess($.type==="put"&&I[V]?$.values[V]:X)}return{failures:N,results:K,numFailures:Z,lastResult:B}}).catch(function(B){return z.forEach(function(N){return N.onerror&&N.onerror(B)}),Promise.reject(B)})})}}})}})}};function Ls(s,o,l){try{if(!o||o.keys.length<s.length)return null;for(var u=[],h=0,p=0;h<o.keys.length&&p<s.length;++h)Ee(o.keys[h],s[p])===0&&(u.push(l?C(o.values[h]):o.values[h]),++p);return u.length===s.length?u:null}catch{return null}}var il={stack:"dbcore",level:-1,create:function(s){return{table:function(o){var l=s.table(o);return i(i({},l),{getMany:function(u){if(!u.cache)return l.getMany(u);var h=Ls(u.keys,u.trans._cache,u.cache==="clone");return h?Q.resolve(h):l.getMany(u).then(function(p){return u.trans._cache={keys:u.keys,values:u.cache==="clone"?C(p):p},p})},mutate:function(u){return u.type!=="add"&&(u.trans._cache=null),l.mutate(u)}})}}}};function Bs(s,o){return s.trans.mode==="readonly"&&!!s.subscr&&!s.trans.explicit&&s.trans.db._options.cache!=="disabled"&&!o.schema.primaryKey.outbound}function Ms(s,o){switch(s){case"query":return o.values&&!o.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var sl={stack:"dbcore",level:0,name:"Observability",create:function(s){var o=s.schema.name,l=new gt(s.MIN_KEY,s.MAX_KEY);return i(i({},s),{transaction:function(u,h,p){if(G.subscr&&h!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(G.querier));return s.transaction(u,h,p)},table:function(u){var h=s.table(u),p=h.schema,b=p.primaryKey,$=p.indexes,v=b.extractKey,E=b.outbound,A=b.autoIncrement&&$.filter(function(S){return S.compound&&S.keyPath.includes(b.keyPath)}),D=i(i({},h),{mutate:function(S){function T(J){return J="idb://".concat(o,"/").concat(u,"/").concat(J),B[J]||(B[J]=new gt)}var j,P,I,z=S.trans,B=S.mutatedParts||(S.mutatedParts={}),N=T(""),K=T(":dels"),Z=S.type,te=S.type==="deleteRange"?[S.range]:S.type==="delete"?[S.keys]:S.values.length<50?[Ii(b,S).filter(function(J){return J}),S.values]:[],V=te[0],X=te[1],te=S.trans._cache;return d(V)?(N.addKeys(V),(te=Z==="delete"||V.length===X.length?Ls(V,te):null)||K.addKeys(V),(te||X)&&(j=T,P=te,I=X,p.indexes.forEach(function(J){var re=j(J.name||"");function me(ye){return ye!=null?J.extractKey(ye):null}function be(ye){return J.multiEntry&&d(ye)?ye.forEach(function(At){return re.addKey(At)}):re.addKey(ye)}(P||I).forEach(function(ye,bt){var pe=P&&me(P[bt]),bt=I&&me(I[bt]);Ee(pe,bt)!==0&&(pe!=null&&be(pe),bt!=null&&be(bt))})}))):V?(X={from:(X=V.lower)!==null&&X!==void 0?X:s.MIN_KEY,to:(X=V.upper)!==null&&X!==void 0?X:s.MAX_KEY},K.add(X),N.add(X)):(N.add(l),K.add(l),p.indexes.forEach(function(J){return T(J.name).add(l)})),h.mutate(S).then(function(J){return!V||S.type!=="add"&&S.type!=="put"||(N.addKeys(J.results),A&&A.forEach(function(re){for(var me=S.values.map(function(pe){return re.extractKey(pe)}),be=re.keyPath.findIndex(function(pe){return pe===b.keyPath}),ye=0,At=J.results.length;ye<At;++ye)me[ye][be]=J.results[ye];T(re.name).addKeys(me)})),z.mutatedParts=zr(z.mutatedParts||{},B),J})}}),$=function(T){var j=T.query,T=j.index,j=j.range;return[T,new gt((T=j.lower)!==null&&T!==void 0?T:s.MIN_KEY,(j=j.upper)!==null&&j!==void 0?j:s.MAX_KEY)]},R={get:function(S){return[b,new gt(S.key)]},getMany:function(S){return[b,new gt().addKeys(S.keys)]},count:$,query:$,openCursor:$};return c(R).forEach(function(S){D[S]=function(T){var j=G.subscr,P=!!j,I=Bs(G,h)&&Ms(S,T)?T.obsSet={}:j;if(P){var z=function(X){return X="idb://".concat(o,"/").concat(u,"/").concat(X),I[X]||(I[X]=new gt)},B=z(""),N=z(":dels"),j=R[S](T),P=j[0],j=j[1];if((S==="query"&&P.isPrimaryKey&&!T.values?N:z(P.name||"")).add(j),!P.isPrimaryKey){if(S!=="count"){var K=S==="query"&&E&&T.values&&h.query(i(i({},T),{values:!1}));return h[S].apply(this,arguments).then(function(X){if(S==="query"){if(E&&T.values)return K.then(function(me){return me=me.result,B.addKeys(me),X});var te=T.values?X.result.map(v):X.result;(T.values?B:N).addKeys(te)}else if(S==="openCursor"){var J=X,re=T.values;return J&&Object.create(J,{key:{get:function(){return N.addKey(J.primaryKey),J.key}},primaryKey:{get:function(){var me=J.primaryKey;return N.addKey(me),me}},value:{get:function(){return re&&B.addKey(J.primaryKey),J.value}}})}return X})}N.add(l)}}return h[S].apply(this,arguments)}}),D}})}};function Ns(s,o,l){if(l.numFailures===0)return o;if(o.type==="deleteRange")return null;var u=o.keys?o.keys.length:"values"in o&&o.values?o.values.length:1;return l.numFailures===u?null:(o=i({},o),d(o.keys)&&(o.keys=o.keys.filter(function(h,p){return!(p in l.failures)})),"values"in o&&d(o.values)&&(o.values=o.values.filter(function(h,p){return!(p in l.failures)})),o)}function zi(s,o){return l=s,((u=o).lower===void 0||(u.lowerOpen?0<Ee(l,u.lower):0<=Ee(l,u.lower)))&&(s=s,(o=o).upper===void 0||(o.upperOpen?Ee(s,o.upper)<0:Ee(s,o.upper)<=0));var l,u}function qs(s,o,R,u,h,p){if(!R||R.length===0)return s;var b=o.query.index,v=b.multiEntry,E=o.query.range,A=u.schema.primaryKey.extractKey,D=b.extractKey,$=(b.lowLevelIndex||b).extractKey,R=R.reduce(function(S,T){var j=S,P=[];if(T.type==="add"||T.type==="put")for(var I=new gt,z=T.values.length-1;0<=z;--z){var B,N=T.values[z],K=A(N);I.hasKey(K)||(B=D(N),(v&&d(B)?B.some(function(J){return zi(J,E)}):zi(B,E))&&(I.addKey(K),P.push(N)))}switch(T.type){case"add":var Z=new gt().addKeys(o.values?S.map(function(re){return A(re)}):S),j=S.concat(o.values?P.filter(function(re){return re=A(re),!Z.hasKey(re)&&(Z.addKey(re),!0)}):P.map(function(re){return A(re)}).filter(function(re){return!Z.hasKey(re)&&(Z.addKey(re),!0)}));break;case"put":var V=new gt().addKeys(T.values.map(function(re){return A(re)}));j=S.filter(function(re){return!V.hasKey(o.values?A(re):re)}).concat(o.values?P:P.map(function(re){return A(re)}));break;case"delete":var X=new gt().addKeys(T.keys);j=S.filter(function(re){return!X.hasKey(o.values?A(re):re)});break;case"deleteRange":var te=T.range;j=S.filter(function(re){return!zi(A(re),te)})}return j},s);return R===s?s:(R.sort(function(S,T){return Ee($(S),$(T))||Ee(A(S),A(T))}),o.limit&&o.limit<1/0&&(R.length>o.limit?R.length=o.limit:s.length===o.limit&&R.length<o.limit&&(h.dirty=!0)),p?Object.freeze(R):R)}function Us(s,o){return Ee(s.lower,o.lower)===0&&Ee(s.upper,o.upper)===0&&!!s.lowerOpen==!!o.lowerOpen&&!!s.upperOpen==!!o.upperOpen}function ol(s,o){return(function(l,u,h,p){if(l===void 0)return u!==void 0?-1:0;if(u===void 0)return 1;if((u=Ee(l,u))===0){if(h&&p)return 0;if(h)return 1;if(p)return-1}return u})(s.lower,o.lower,s.lowerOpen,o.lowerOpen)<=0&&0<=(function(l,u,h,p){if(l===void 0)return u!==void 0?1:0;if(u===void 0)return-1;if((u=Ee(l,u))===0){if(h&&p)return 0;if(h)return-1;if(p)return 1}return u})(s.upper,o.upper,s.upperOpen,o.upperOpen)}function al(s,o,l,u){s.subscribers.add(l),u.addEventListener("abort",function(){var h,p;s.subscribers.delete(l),s.subscribers.size===0&&(h=s,p=o,setTimeout(function(){h.subscribers.size===0&&q(p,h)},3e3))})}var ll={stack:"dbcore",level:0,name:"Cache",create:function(s){var o=s.schema.name;return i(i({},s),{transaction:function(l,u,h){var p,b,v=s.transaction(l,u,h);return u==="readwrite"&&(b=(p=new AbortController).signal,h=function(E){return function(){if(p.abort(),u==="readwrite"){for(var A=new Set,D=0,$=l;D<$.length;D++){var R=$[D],S=Sn["idb://".concat(o,"/").concat(R)];if(S){var T=s.table(R),j=S.optimisticOps.filter(function(re){return re.trans===v});if(v._explicit&&E&&v.mutatedParts)for(var P=0,I=Object.values(S.queries.query);P<I.length;P++)for(var z=0,B=(Z=I[P]).slice();z<B.length;z++)Ti((V=B[z]).obsSet,v.mutatedParts)&&(q(Z,V),V.subscribers.forEach(function(re){return A.add(re)}));else if(0<j.length){S.optimisticOps=S.optimisticOps.filter(function(re){return re.trans!==v});for(var N=0,K=Object.values(S.queries.query);N<K.length;N++)for(var Z,V,X,te=0,J=(Z=K[N]).slice();te<J.length;te++)(V=J[te]).res!=null&&v.mutatedParts&&(E&&!V.dirty?(X=Object.isFrozen(V.res),X=qs(V.res,V.req,j,T,V,X),V.dirty?(q(Z,V),V.subscribers.forEach(function(re){return A.add(re)})):X!==V.res&&(V.res=X,V.promise=Q.resolve({result:X}))):(V.dirty&&q(Z,V),V.subscribers.forEach(function(re){return A.add(re)})))}}}A.forEach(function(re){return re()})}}},v.addEventListener("abort",h(!1),{signal:b}),v.addEventListener("error",h(!1),{signal:b}),v.addEventListener("complete",h(!0),{signal:b})),v},table:function(l){var u=s.table(l),h=u.schema.primaryKey;return i(i({},u),{mutate:function(p){var b=G.trans;if(h.outbound||b.db._options.cache==="disabled"||b.explicit||b.idbtrans.mode!=="readwrite")return u.mutate(p);var v=Sn["idb://".concat(o,"/").concat(l)];return v?(b=u.mutate(p),p.type!=="add"&&p.type!=="put"||!(50<=p.values.length||Ii(h,p).some(function(E){return E==null}))?(v.optimisticOps.push(p),p.mutatedParts&&Lr(p.mutatedParts),b.then(function(E){0<E.numFailures&&(q(v.optimisticOps,p),(E=Ns(0,p,E))&&v.optimisticOps.push(E),p.mutatedParts&&Lr(p.mutatedParts))}),b.catch(function(){q(v.optimisticOps,p),p.mutatedParts&&Lr(p.mutatedParts)})):b.then(function(E){var A=Ns(0,i(i({},p),{values:p.values.map(function(D,$){var R;return E.failures[$]?D:(D=(R=h.keyPath)!==null&&R!==void 0&&R.includes(".")?C(D):i({},D),Re(D,h.keyPath,E.results[$]),D)})}),E);v.optimisticOps.push(A),queueMicrotask(function(){return p.mutatedParts&&Lr(p.mutatedParts)})}),b):u.mutate(p)},query:function(p){if(!Bs(G,u)||!Ms("query",p))return u.query(p);var b=((A=G.trans)===null||A===void 0?void 0:A.db._options.cache)==="immutable",$=G,v=$.requery,E=$.signal,A=(function(T,j,P,I){var z=Sn["idb://".concat(T,"/").concat(j)];if(!z)return[];if(!(j=z.queries[P]))return[null,!1,z,null];var B=j[(I.query?I.query.index.name:null)||""];if(!B)return[null,!1,z,null];switch(P){case"query":var N=B.find(function(K){return K.req.limit===I.limit&&K.req.values===I.values&&Us(K.req.query.range,I.query.range)});return N?[N,!0,z,B]:[B.find(function(K){return("limit"in K.req?K.req.limit:1/0)>=I.limit&&(!I.values||K.req.values)&&ol(K.req.query.range,I.query.range)}),!1,z,B];case"count":return N=B.find(function(K){return Us(K.req.query.range,I.query.range)}),[N,!!N,z,B]}})(o,l,"query",p),D=A[0],$=A[1],R=A[2],S=A[3];return D&&$?D.obsSet=p.obsSet:($=u.query(p).then(function(T){var j=T.result;if(D&&(D.res=j),b){for(var P=0,I=j.length;P<I;++P)Object.freeze(j[P]);Object.freeze(j)}else T.result=C(j);return T}).catch(function(T){return S&&D&&q(S,D),Promise.reject(T)}),D={obsSet:p.obsSet,promise:$,subscribers:new Set,type:"query",req:p,dirty:!1},S?S.push(D):(S=[D],(R=R||(Sn["idb://".concat(o,"/").concat(l)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[p.query.index.name||""]=S)),al(D,S,v,E),D.promise.then(function(T){return{result:qs(T.result,p,R?.optimisticOps,u,D,b)}})}})}})}};function Mr(s,o){return new Proxy(s,{get:function(l,u,h){return u==="db"?o:Reflect.get(l,u,h)}})}var sn=(it.prototype.version=function(s){if(isNaN(s)||s<.1)throw new ee.Type("Given version is not a positive number");if(s=Math.round(10*s)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,s);var o=this._versions,l=o.filter(function(u){return u._cfg.version===s})[0];return l||(l=new this.Version(s),o.push(l),o.sort(Qa),l.stores({}),this._state.autoSchema=!1,l)},it.prototype._whenReady=function(s){var o=this;return this.idbdb&&(this._state.openComplete||G.letThrough||this._vip)?s():new Q(function(l,u){if(o._state.openComplete)return u(new ee.DatabaseClosed(o._state.dbOpenError));if(!o._state.isBeingOpened){if(!o._state.autoOpen)return void u(new ee.DatabaseClosed);o.open().catch(ue)}o._state.dbReadyPromise.then(l,u)}).then(s)},it.prototype.use=function(s){var o=s.stack,l=s.create,u=s.level,h=s.name;return h&&this.unuse({stack:o,name:h}),s=this._middlewares[o]||(this._middlewares[o]=[]),s.push({stack:o,create:l,level:u??10,name:h}),s.sort(function(p,b){return p.level-b.level}),this},it.prototype.unuse=function(s){var o=s.stack,l=s.name,u=s.create;return o&&this._middlewares[o]&&(this._middlewares[o]=this._middlewares[o].filter(function(h){return u?h.create!==u:!!l&&h.name!==l})),this},it.prototype.open=function(){var s=this;return kn(Ge,function(){return tl(s)})},it.prototype._close=function(){var s=this._state,o=Mn.indexOf(this);if(0<=o&&Mn.splice(o,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}s.isBeingOpened||(s.dbReadyPromise=new Q(function(l){s.dbReadyResolve=l}),s.openCanceller=new Q(function(l,u){s.cancelOpen=u}))},it.prototype.close=function(l){var o=(l===void 0?{disableAutoOpen:!0}:l).disableAutoOpen,l=this._state;o?(l.isBeingOpened&&l.cancelOpen(new ee.DatabaseClosed),this._close(),l.autoOpen=!1,l.dbOpenError=new ee.DatabaseClosed):(this._close(),l.autoOpen=this._options.autoOpen||l.isBeingOpened,l.openComplete=!1,l.dbOpenError=null)},it.prototype.delete=function(s){var o=this;s===void 0&&(s={disableAutoOpen:!0});var l=0<arguments.length&&typeof arguments[0]!="object",u=this._state;return new Q(function(h,p){function b(){o.close(s);var v=o._deps.indexedDB.deleteDatabase(o.name);v.onsuccess=Be(function(){var E,A,D;E=o._deps,A=o.name,D=E.indexedDB,E=E.IDBKeyRange,_i(D)||A===Er||Si(D,E).delete(A).catch(ue),h()}),v.onerror=Yt(p),v.onblocked=o._fireOnBlocked}if(l)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");u.isBeingOpened?u.dbReadyPromise.then(b):b()})},it.prototype.backendDB=function(){return this.idbdb},it.prototype.isOpen=function(){return this.idbdb!==null},it.prototype.hasBeenClosed=function(){var s=this._state.dbOpenError;return s&&s.name==="DatabaseClosed"},it.prototype.hasFailed=function(){return this._state.dbOpenError!==null},it.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(it.prototype,"tables",{get:function(){var s=this;return c(this._allTables).map(function(o){return s._allTables[o]})},enumerable:!1,configurable:!0}),it.prototype.transaction=function(){var s=function(o,l,u){var h=arguments.length;if(h<2)throw new ee.InvalidArgument("Too few arguments");for(var p=new Array(h-1);--h;)p[h-1]=arguments[h];return u=p.pop(),[o,Ot(p),u]}.apply(this,arguments);return this._transaction.apply(this,s)},it.prototype._transaction=function(s,o,l){var u=this,h=G.trans;h&&h.db===this&&s.indexOf("!")===-1||(h=null);var p,b,v=s.indexOf("?")!==-1;s=s.replace("!","").replace("?","");try{if(b=o.map(function(A){if(A=A instanceof u.Table?A.name:A,typeof A!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return A}),s=="r"||s===pi)p=pi;else{if(s!="rw"&&s!=mi)throw new ee.InvalidArgument("Invalid transaction mode: "+s);p=mi}if(h){if(h.mode===pi&&p===mi){if(!v)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");h=null}h&&b.forEach(function(A){if(h&&h.storeNames.indexOf(A)===-1){if(!v)throw new ee.SubTransaction("Table "+A+" not included in parent transaction.");h=null}}),v&&h&&!h.active&&(h=null)}}catch(A){return h?h._promise(null,function(D,$){$(A)}):rt(A)}var E=function A(D,$,R,S,T){return Q.resolve().then(function(){var j=G.transless||G,P=D._createTransaction($,R,D._dbSchema,S);if(P.explicit=!0,j={trans:P,transless:j},S)P.idbtrans=S.idbtrans;else try{P.create(),P.idbtrans._explicit=!0,D._state.PR1398_maxLoop=3}catch(B){return B.name===Ve.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return A(D,$,R,null,T)})):rt(B)}var I,z=ot(T);return z&&Bn(),j=Q.follow(function(){var B;(I=T.call(P,P))&&(z?(B=pn.bind(null,null),I.then(B,B)):typeof I.next=="function"&&typeof I.throw=="function"&&(I=Oi(I)))},j),(I&&typeof I.then=="function"?Q.resolve(I).then(function(B){return P.active?B:rt(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):j.then(function(){return I})).then(function(B){return S&&P._resolve(),P._completion.then(function(){return B})}).catch(function(B){return P._reject(B),rt(B)})})}.bind(null,this,p,b,h,l);return h?h._promise(p,E,"lock"):G.trans?kn(G.transless,function(){return u._whenReady(E)}):this._whenReady(E)},it.prototype.table=function(s){if(!x(this._allTables,s))throw new ee.InvalidTable("Table ".concat(s," does not exist"));return this._allTables[s]},it);function it(s,o){var l=this;this._middlewares={},this.verno=0;var u=it.dependencies;this._options=o=i({addons:it.addons,autoOpen:!0,indexedDB:u.indexedDB,IDBKeyRange:u.IDBKeyRange,cache:"cloned"},o),this._deps={indexedDB:o.indexedDB,IDBKeyRange:o.IDBKeyRange},u=o.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var h,p,b,v,E,A={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ue,dbReadyPromise:null,cancelOpen:ue,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:o.autoOpen};A.dbReadyPromise=new Q(function($){A.dbReadyResolve=$}),A.openCanceller=new Q(function($,R){A.cancelOpen=R}),this._state=A,this.name=s,this.on=Zn(this,"populate","blocked","versionchange","close",{ready:[Et,ue]}),this.on.ready.subscribe=ze(this.on.ready.subscribe,function($){return function(R,S){it.vip(function(){var T,j=l._state;j.openComplete?(j.dbOpenError||Q.resolve().then(R),S&&$(R)):j.onReadyBeingFired?(j.onReadyBeingFired.push(R),S&&$(R)):($(R),T=l,S||$(function P(){T.on.ready.unsubscribe(R),T.on.ready.unsubscribe(P)}))})}}),this.Collection=(h=this,er(Ha.prototype,function(I,P){this.db=h;var S=vs,T=null;if(P)try{S=P()}catch(z){T=z}var j=I._ctx,P=j.table,I=P.hook.reading.fire;this._ctx={table:P,index:j.index,isPrimKey:!j.index||P.schema.primKey.keyPath&&j.index===P.schema.primKey.name,range:S,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:T,or:j.or,valueMapper:I!==ge?I:null}})),this.Table=(p=this,er(Cs.prototype,function($,R,S){this.db=p,this._tx=S,this.name=$,this.schema=R,this.hook=p._allTables[$]?p._allTables[$].hook:Zn(null,{creating:[Xe,ue],reading:[Ct,ge],updating:[Bt,ue],deleting:[dn,ue]})})),this.Transaction=(b=this,er(Va.prototype,function($,R,S,T,j){var P=this;this.db=b,this.mode=$,this.storeNames=R,this.schema=S,this.chromeTransactionDurability=T,this.idbtrans=null,this.on=Zn(this,"complete","error","abort"),this.parent=j||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new Q(function(I,z){P._resolve=I,P._reject=z}),this._completion.then(function(){P.active=!1,P.on.complete.fire()},function(I){var z=P.active;return P.active=!1,P.on.error.fire(I),P.parent?P.parent._reject(I):z&&P.idbtrans&&P.idbtrans.abort(),rt(I)})})),this.Version=(v=this,er(el.prototype,function($){this.db=v,this._cfg={version:$,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(E=this,er(Ps.prototype,function($,R,S){if(this.db=E,this._ctx={table:$,index:R===":id"?null:R,or:S},this._cmp=this._ascending=Ee,this._descending=function(T,j){return Ee(j,T)},this._max=function(T,j){return 0<Ee(T,j)?T:j},this._min=function(T,j){return Ee(T,j)<0?T:j},this._IDBKeyRange=E._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function($){0<$.newVersion?console.warn("Another connection wants to upgrade database '".concat(l.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(l.name,"'. Closing db now to resume the delete request.")),l.close({disableAutoOpen:!1})}),this.on("blocked",function($){!$.newVersion||$.newVersion<$.oldVersion?console.warn("Dexie.delete('".concat(l.name,"') was blocked")):console.warn("Upgrade '".concat(l.name,"' blocked by other connection holding version ").concat($.oldVersion/10))}),this._maxKey=ir(o.IDBKeyRange),this._createTransaction=function($,R,S,T){return new l.Transaction($,R,S,l._options.chromeTransactionDurability,T)},this._fireOnBlocked=function($){l.on("blocked").fire($),Mn.filter(function(R){return R.name===l.name&&R!==l&&!R._state.vcFired}).map(function(R){return R.on("versionchange").fire($)})},this.use(il),this.use(ll),this.use(sl),this.use(nl),this.use(rl);var D=new Proxy(this,{get:function($,R,S){if(R==="_vip")return!0;if(R==="table")return function(j){return Mr(l.table(j),D)};var T=Reflect.get($,R,S);return T instanceof Cs?Mr(T,D):R==="tables"?T.map(function(j){return Mr(j,D)}):R==="_createTransaction"?function(){return Mr(T.apply(this,arguments),D)}:T}});this.vip=D,u.forEach(function($){return $(l)})}var Nr,Ft=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",cl=(Li.prototype.subscribe=function(s,o,l){return this._subscribe(s&&typeof s!="function"?s:{next:s,error:o,complete:l})},Li.prototype[Ft]=function(){return this},Li);function Li(s){this._subscribe=s}try{Nr={indexedDB:a.indexedDB||a.mozIndexedDB||a.webkitIndexedDB||a.msIndexedDB,IDBKeyRange:a.IDBKeyRange||a.webkitIDBKeyRange}}catch{Nr={indexedDB:null,IDBKeyRange:null}}function Hs(s){var o,l=!1,u=new cl(function(h){var p=ot(s),b,v=!1,E={},A={},D={get closed(){return v},unsubscribe:function(){v||(v=!0,b&&b.abort(),$&&bn.storagemutated.unsubscribe(S))}};h.start&&h.start(D);var $=!1,R=function(){return fi(T)},S=function(j){zr(E,j),Ti(A,E)&&R()},T=function(){var j,P,I;!v&&Nr.indexedDB&&(E={},j={},b&&b.abort(),b=new AbortController,I=(function(z){var B=Oe();try{p&&Bn();var N=fn(s,z);return N=p?N.finally(pn):N}finally{B&&He()}})(P={subscr:j,signal:b.signal,requery:R,querier:s,trans:null}),Promise.resolve(I).then(function(z){l=!0,o=z,v||P.signal.aborted||(E={},(function(B){for(var N in B)if(x(B,N))return;return 1})(A=j)||$||(bn(rr,S),$=!0),fi(function(){return!v&&h.next&&h.next(z)}))},function(z){l=!1,["DatabaseClosedError","AbortError"].includes(z?.name)||v||fi(function(){v||h.error&&h.error(z)})}))};return setTimeout(R,0),D});return u.hasValue=function(){return l},u.getValue=function(){return o},u}var _n=sn;function Bi(s){var o=yn;try{yn=!0,bn.storagemutated.fire(s),Ri(s,!0)}finally{yn=o}}O(_n,i(i({},Ie),{delete:function(s){return new _n(s,{addons:[]}).delete()},exists:function(s){return new _n(s,{addons:[]}).open().then(function(o){return o.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(s){try{return o=_n.dependencies,l=o.indexedDB,o=o.IDBKeyRange,(_i(l)?Promise.resolve(l.databases()).then(function(u){return u.map(function(h){return h.name}).filter(function(h){return h!==Er})}):Si(l,o).toCollection().primaryKeys()).then(s)}catch{return rt(new ee.MissingAPI)}var o,l},defineClass:function(){return function(s){f(this,s)}},ignoreTransaction:function(s){return G.trans?kn(G.transless,s):s()},vip:Ai,async:function(s){return function(){try{var o=Oi(s.apply(this,arguments));return o&&typeof o.then=="function"?o:Q.resolve(o)}catch(l){return rt(l)}}},spawn:function(s,o,l){try{var u=Oi(s.apply(l,o||[]));return u&&typeof u.then=="function"?u:Q.resolve(u)}catch(h){return rt(h)}},currentTransaction:{get:function(){return G.trans||null}},waitFor:function(s,o){return o=Q.resolve(typeof s=="function"?_n.ignoreTransaction(s):s).timeout(o||6e4),G.trans?G.trans.waitFor(o):o},Promise:Q,debug:{get:function(){return je},set:function(s){qe(s)}},derive:U,extend:f,props:O,override:ze,Events:Zn,on:bn,liveQuery:Hs,extendObservabilitySet:zr,getByKeyPath:ve,setByKeyPath:Re,delByKeyPath:function(s,o){typeof o=="string"?Re(s,o,void 0):"length"in o&&[].map.call(o,function(l){Re(s,l,void 0)})},shallowClone:Me,deepClone:C,getObjectDiff:Fi,cmp:Ee,asap:ce,minKey:-1/0,addons:[],connections:Mn,errnames:Ve,dependencies:Nr,cache:Sn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(s){return parseInt(s)}).reduce(function(s,o,l){return s+o/Math.pow(10,2*l)})})),_n.maxKey=ir(_n.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(bn(rr,function(s){yn||(s=new CustomEvent(wi,{detail:s}),yn=!0,dispatchEvent(s),yn=!1)}),addEventListener(wi,function(s){s=s.detail,yn||Bi(s)}));var Un,yn=!1,Ws=function(){};return typeof BroadcastChannel<"u"&&((Ws=function(){(Un=new BroadcastChannel(wi)).onmessage=function(s){return s.data&&Bi(s.data)}})(),typeof Un.unref=="function"&&Un.unref(),bn(rr,function(s){yn||Un.postMessage(s)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(s){if(!sn.disableBfCache&&s.persisted){je&&console.debug("Dexie: handling persisted pagehide"),Un?.close();for(var o=0,l=Mn;o<l.length;o++)l[o].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(s){!sn.disableBfCache&&s.persisted&&(je&&console.debug("Dexie: handling persisted pageshow"),Ws(),Bi({all:new gt(-1/0,[[]])}))})),Q.rejectionMapper=function(s,o){return!s||s instanceof Ne||s instanceof TypeError||s instanceof SyntaxError||!s.name||!Ye[s.name]?s:(o=new Ye[s.name](o||s.message,s),"stack"in s&&L(o,"stack",{get:function(){return this.inner.stack}}),o)},qe(je),i(sn,Object.freeze({__proto__:null,Dexie:sn,liveQuery:Hs,Entity:xs,cmp:Ee,PropModSymbol:rn,PropModification:tr,replacePrefix:function(s,o){return new tr({replacePrefix:[s,o]})},add:function(s){return new tr({add:s})},remove:function(s){return new tr({remove:s})},default:sn,RangeSet:gt,mergeRanges:ar,rangesOverlap:Os}),{default:sn}),sn})})(Yr)),Yr.exports}var Wl=Hl();const Gi=ql(Wl),so=Symbol.for("Dexie"),ei=globalThis[so]||(globalThis[so]=Gi);if(Gi.semVer!==ei.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Gi.semVer} and ${ei.semVer}`);const{liveQuery:Go,mergeRanges:Vf,rangesOverlap:Yf,RangeSet:Xf,cmp:Gf,Entity:Qf,PropModSymbol:Jf,PropModification:Zf,replacePrefix:ep,add:tp,remove:np}=ei,Kl="easydb";let Ur=null;function Vl(){if(Ur)return Ur;const e=new ei(Kl);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>Yl()),Ur={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},Ur}function Yl(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function Hn(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(i=>Qo(i,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const i=Go(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>i.unsubscribe()}}}function Xl(e,t){return{async find(r){const i=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return i.toArray();const n=Object.entries(r);return i.filter(a=>Qo(a,n)).toArray()},async findOne(r){const i=await e.get(r);return i&&i.tableId===t?i:null},async insert(r){const i={...r,tableId:t};return await e.add(i),i},async bulkInsert(r){if(r.length===0)return[];const i=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(i),i},async upsert(r){const i={...r,tableId:t};return await e.put(i),i},async patch(r,i){if(await e.update(r,i)===0)throw new Error(`row patch: no row ${r}`);const a=await e.get(r);if(!a)throw new Error(`row patch: row ${r} vanished after update`);return a},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=Go(()=>e.where("tableId").equals(t).toArray()).subscribe({next:a=>r(a)});return()=>n.unsubscribe()}}}function Qo(e,t){for(const[r,i]of t)if(e[r]!==i)return!1;return!0}function Gl(e){return{workspaces:Hn(e.workspaces),tables:Hn(e.tables),settings:Hn(e.settings),plugins:Hn(e.plugins),viewTemplates:Hn(e.viewTemplates),viewInstances:Hn(e.viewInstances),rows:t=>Xl(e.rows,t)}}function Ql(e){const{base:t,providers:r,tableById:i,ctx:n}=e,a=new Map;return{...t,rows(c){const d=i(c),f=d?.source;if(f){const w=r.get(f.type);if(w){const _=JSON.stringify(f),x=a.get(c);if(x&&x.key===_)return x.coll;const O=w.create(d,n);return a.set(c,{key:_,coll:O}),O}}return a.delete(c),t.rows(c)}}}function Jl(){const e=new Map;return{on(t,r){let i=e.get(t);return i||(i=new Set,e.set(t,i)),i.add(r),()=>{i.delete(r)}},emit(t,r){const i=e.get(t);if(i)for(const n of i)try{n(r)}catch(a){console.error(`[event:${String(t)}] listener threw`,a)}}}}const Zt=Ze`
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
`;function xn(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const oo=new WeakSet;function en(e,t){if(oo.has(t))return;oo.add(t);let r=0,i=0,n=0,a=0,c=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",f=>{if(f.target.closest("button, input, textarea, select, a, label"))return;c=!0,r=f.clientX,i=f.clientY;const _=e.getBoundingClientRect();n=_.left,a=_.top,t.setPointerCapture(f.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",f=>{if(!c)return;const w=f.clientX-r,_=f.clientY-i,x=-e.offsetWidth+80,O=window.innerWidth-80,W=0,L=window.innerHeight-40,U=Math.max(x,Math.min(O,n+w)),ae=Math.max(W,Math.min(L,a+_));e.style.position="fixed",e.style.left=`${U}px`,e.style.top=`${ae}px`,e.style.margin="0"});const d=f=>{if(c){c=!1;try{t.releasePointerCapture(f.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",d),t.addEventListener("pointercancel",d)}var Zl=Object.defineProperty,ec=Object.getOwnPropertyDescriptor,Jo=(e,t,r,i)=>{for(var n=i>1?void 0:i?ec(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Zl(t,r,n),n};let It=class extends Qe{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),It.instance=this}disconnectedCallback(){super.disconnectedCallback(),It.instance===this&&(It.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&en(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(i=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:i}})}choice(e,t,r="Choose"){return this.enqueue(i=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:i}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return M`
      <dialog @cancel=${this.onCancel} @keydown=${xn}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):Se}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return M`
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
        `;case"prompt":return M`
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
        `;case"choice":return M`
          <div class="dialog-header">
            <h2>${e.title}</h2>
            <div class="header-actions">
              <button class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
            </div>
          </div>
          <div class="dialog-body">
            ${e.message?M`<p class="message">${e.message}</p>`:Se}
            <div class="choices">
              ${e.options.map(t=>M`<button class="choice" @click=${()=>this.closeAndResolve(t)}>
                    ${t}
                  </button>`)}
            </div>
          </div>
        `}}};It.instance=null;It.styles=[Zt,Ze`
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
    `];Jo([H()],It.prototype,"current",2);It=Jo([at("host-dialogs")],It);const ln=Ze`
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
`;var tc=Object.defineProperty,nc=Object.getOwnPropertyDescriptor,Zo=(e,t,r,i)=>{for(var n=i>1?void 0:i?nc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&tc(t,r,n),n};let on=class extends Qe{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),on.instance=this}disconnectedCallback(){super.disconnectedCallback(),on.instance===this&&(on.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const i=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),i)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return M`
      ${this.toasts.map(e=>M`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${ic(e.kind)}</span>
            <span class="body">
              ${e.title?M`<strong>${e.title}</strong>`:""}${rc(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};on.instance=null;on.styles=[ln,Ze`
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
    `];Zo([H()],on.prototype,"toasts",2);on=Zo([at("toast-host")],on);function rc(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let i=0,n;for(;(n=t.exec(e))!==null;)n.index>i&&r.push(e.slice(i,n.index)),r.push({url:n[0]}),i=n.index+n[0].length;return i<e.length&&r.push(e.slice(i)),r.length===0?e:r.map(a=>typeof a=="string"?a:M`<a href=${a.url} target="_blank" rel="noopener noreferrer">${a.url}</a>`)}function ic(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function sc(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map}}function Tn(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function Ui(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function oc(e){return{registerHeaderButton:t=>Tn(e.headerButtons,t),registerFooterButton:t=>Tn(e.footerButtons,t),registerTableButton:t=>Tn(e.tableButtons,t),registerImporter:t=>Tn(e.importers,t),registerExporter:t=>Tn(e.exporters,t),registerUrlSource:t=>Tn(e.urlSources,t),registerDropHandler:t=>Tn(e.dropHandlers,t),registerCellRenderer:(t,r)=>Ui(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>Ui(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>Ui(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},dialogs:ac}}const ac={async alert(e,t){const r=It.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=It.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const i=It.instance;return i?i.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const i=It.instance;if(i)return i.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=on.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}};function lc(e){const t=oc(e.registries),r=e.registries.rowSources,i=a=>(r.set(a.type,a),()=>{r.get(a.type)===a&&r.delete(a.type)}),n={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:n,registerRowSource:i,backend:{fetch:async(a,c)=>{const d=await cc(e.store),f=c?.body instanceof ArrayBuffer;if(!d||f)return globalThis.fetch(a,c);const w={url:a};return c?.method&&(w.method=c.method),c?.headers&&(w.headers=c.headers),typeof c?.body=="string"&&(w.body=c.body),globalThis.fetch(`${d}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)})},async saveFile(a,c,d){const f=typeof c=="string"?new Blob([c],{type:d??"application/octet-stream"}):c,w=URL.createObjectURL(f),_=document.createElement("a");_.href=w,_.download=a,_.rel="noopener",document.body.appendChild(_),_.click(),_.remove(),setTimeout(()=>URL.revokeObjectURL(w),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function cc(e){const r=(await e.settings.findOne("server-sync:url"))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}const uc={name:"csv-import",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"easyDBAccess built-ins"};function dc(e){e.ui.registerImporter(hc),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const i=Cc(t).filter(Ec);if(i.length===0)return!1;t.preventDefault();for(const n of i)await fc(e,n);return!0})}const hc={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return gr(t)}};async function fc(e,t){const r=t.name.replace(/\.csv$/i,"")||"imported";await us(e,await t.text(),r)}async function us(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("csv-import: no active workspace");const a=(r||"imported").replace(/\.csv$/i,"")||"imported",c=(await e.store.tables.find()).find(x=>x.workspaceId===n&&x.name===a);let d,f;if(c){const x=await e.ui.dialogs.choice(`A table named "${a}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!x)return;x==="Append rows"?(f="append",d=c.id):x==="Overwrite rows"?(f="overwrite",d=c.id):(f="new",d=Hr())}else f="new",d=Hr();e.events.emit("import:before",{source:"csv",tableId:d});let w;if(f==="new"){const x=gr(t);let O=x.columns,W=x.rows;if(i.editColumns){const U=await i.editColumns(O);if(U===null)return;W=Sc(W,O,U),O=U}const L=c?`${a} (${Date.now().toString(36)})`:a;await e.store.tables.insert({id:d,workspaceId:n,name:L,code:Qi(L),columns:O,view:"table",...i.origin?{origin:i.origin}:{},updatedAt:Date.now()}),w=W.map(U=>({id:Hr(),tableId:d,data:U,updatedAt:Date.now()}))}else{const x=c.columns;if(w=ea(t).rows.map(W=>{const L={};for(let U=0;U<x.length;U++){const ae=x[U];L[ae.field]=ra(W[U]??"",ae.type)}return{id:Hr(),tableId:d,data:L,updatedAt:Date.now()}}),f==="overwrite"){const W=e.store.rows(d),L=await W.find();await W.bulkRemove(L.map(U=>U.id))}}await e.store.rows(d).bulkInsert(w),e.events.emit("import:after",{source:"csv",tableId:d,rowCount:w.length})}function ea(e){const t=e.replace(/﻿/,""),r=ta(t),i=na(t,r);if(i.length===0)return{header:[],rows:[]};const n=i[0],a=i.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:n,rows:a}}function gr(e){const t=e.replace(/﻿/,""),r=ta(t),i=na(t,r);if(i.length===0)return{columns:[],rows:[]};const n=i[0],a=i.slice(1).filter(O=>!(O.length===1&&O[0]==="")),c=n.map((O,W)=>gc(O,W)),d=sa(c.map(O=>O.field)),f=a.map(O=>{const W={};for(let L=0;L<d.length;L++)W[d[L]]=O[L]??"";return W}),w=c.map((O,W)=>O.type?O.type:bc(f.map(L=>L[d[W]]??"").filter(L=>L.length>0))),_=c.map((O,W)=>{const L=w[W]??"string",U={field:d[W],label:O.label,type:L},ae=mc(L),de=O.renderer??ae;return de&&(U.renderer=de),O.default!==void 0&&(U.default=O.default),O.max!=null&&(U.max=O.max),O.unique&&(U.unique=!0),O.notnull&&(U.notnull=!0),O.hidden&&(U.hidden=!0),U}),x=f.map(O=>{const W={};for(let L=0;L<d.length;L++){const U=d[L],ae=w[L]??"string";W[U]=ra(O[U]??"",ae)}return W});return{columns:_,rows:x}}const pc=new Set(["string","number","boolean","date","datetime"]),ao={color:"color",image:"image"};function mc(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function gc(e,t){const r=e.trim();if(!r.includes(":"))return{field:Qi(r||`col_${t+1}`),label:r||`Column ${t+1}`};const i=r.split(":"),n=Qi(i[0]||`col_${t+1}`),a=(i[1]??i[0]??"").trim()||n,c={field:n,label:a},d=(i[2]??"").trim();d&&(pc.has(d)?c.type=d:ao[d]&&(c.type="string",c.renderer=ao[d]));const f=(i[3]??"").trim();f&&(c.default=f);const w=(i[4]??"").trim();if(w){const x=Number(w);Number.isFinite(x)&&x>0&&(c.max=x)}const _=(i[5]??"").toLowerCase();return _.includes("u")&&(c.unique=!0),_.includes("n")&&(c.notnull=!0),_.includes("h")&&(c.hidden=!0),c}function ta(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const a of t)a in r&&(r[a]+=1);let i=",",n=-1;for(const a of[",",";","	"])(r[a]??0)>n&&(i=a,n=r[a]??0);return i}function na(e,t){const r=[];let i=[],n="",a=!1;for(let c=0;c<e.length;c++){const d=e[c];a?d==='"'?e[c+1]==='"'?(n+='"',c++):a=!1:n+=d:d==='"'?a=!0:d===t?(i.push(n),n=""):d===`
`||d==="\r"?(d==="\r"&&e[c+1]===`
`&&c++,i.push(n),r.push(i),i=[],n=""):n+=d}return(n.length>0||i.length>0)&&(i.push(n),r.push(i)),r}function bc(e){return e.length===0?"string":e.every(wc)?"boolean":e.every(vc)?"number":e.every($c)?"datetime":e.every(xc)?"date":"string"}const yc=/^(true|false|yes|no|0|1)$/i;function wc(e){return yc.test(e.trim())}function vc(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function xc(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function $c(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function ra(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const i=Number(r);return Number.isFinite(i)?i:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return ia(r);case"datetime":return kc(r);default:return e}}function ia(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let i=parseInt(t[1],10),n=parseInt(t[2],10);const a=t[3];let c=parseInt(a,10);a.length===2&&(c+=2e3);let d,f;return i>12?(d=i,f=n):n>12?(f=i,d=n):(d=i,f=n),`${c.toString().padStart(4,"0")}-${f.toString().padStart(2,"0")}-${d.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function kc(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const i=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(i)return`${ia(`${i[1]}/${i[2]}/${i[3]}`)}T${i[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const a=n.toISOString();return`${a.slice(0,10)}T${a.slice(11,16)}`}return e}function Cc(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function Ec(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function sa(e){const t=new Map,r=new Set,i=[];for(const n of e){let a=n,c=t.get(n)??0;for(;r.has(a);)c+=1,a=`${n}_${c+1}`;t.set(n,c),r.add(a),i.push(a)}return i}function Sc(e,t,r){return e.map(i=>{const n={};for(let a=0;a<t.length;a++)n[r[a].field]=i[t[a].field];return n})}function Qi(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function Hr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const _c=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:sa,importCsvText:us,init:dc,meta:uc,parseCsv:gr,parseCsvRaw:ea},Symbol.toStringTag,{value:"Module"})),Ac={name:"csv-export",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"easyDBAccess built-ins"},Pc={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return ds(e,t)}};function Tc(e){e.ui.registerExporter(Pc),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const i=await t.store.tables.findOne(r.tableId);if(!i)return;const n=await t.store.rows(i.id).find(),a=ds(i,n);await t.backend.saveFile(`${i.code||i.name||"table"}.csv`,a,"text/csv")}})}function ds(e,t){const r=e.columns.map(a=>a.field),i=e.columns.map(a=>lo(a.label??a.field)),n=t.map(a=>r.map(c=>lo(Dc(a.data[c]))).join(","));return[i.join(","),...n].join(`\r
`)}function Dc(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function lo(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const jc=Object.freeze(Object.defineProperty({__proto__:null,init:Tc,meta:Ac,serializeCsv:ds},Symbol.toStringTag,{value:"Module"}));var Rc=Object.defineProperty,Oc=Object.getOwnPropertyDescriptor,Gn=(e,t,r,i)=>{for(var n=i>1?void 0:i?Oc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Rc(t,r,n),n};function Ji(e,t={}){return(Tt.instance??Fc()).open(e,t)}function Fc(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function Ic(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Tt=class extends Qe{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,i)=>r?i:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Tt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Tt.instance===this&&(Tt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(()=>!0),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return M`
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
            ${this.message?M`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,r)=>M`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${r}`}
                      .checked=${this.selected[r]??!1}
                      @change=${()=>this.toggle(r)}
                    />
                    <label for=${`tsel-${r}`}>
                      <span class="name">${t.name}</span>
                      <span class="size">${Ic(t.size)}</span>
                      ${t.detail?M`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};Tt.instance=null;Tt.styles=[Zt,Ze`
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
    `];Gn([H()],Tt.prototype,"items",2);Gn([H()],Tt.prototype,"selected",2);Gn([H()],Tt.prototype,"heading",2);Gn([H()],Tt.prototype,"message",2);Gn([H()],Tt.prototype,"confirmLabel",2);Tt=Gn([at("table-select-dialog")],Tt);const zc={name:"json-import",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"easyDBAccess built-ins"};function Lc(e){e.ui.registerImporter(Bc),e.ui.registerDropHandler(async t=>{const i=Kc(t).filter(Vc);if(i.length===0)return!1;t.preventDefault();for(const n of i)await Mc(e,n);return!0})}const Bc={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=br(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function Mc(e,t){await hs(e,await t.text(),t.name)}async function hs(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("json-import: no active workspace");let a;try{a=JSON.parse(t)}catch(L){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${L.message}`)});return}const c=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",d=br(a,c);if(d.length===0)return;let f=d;if(d.length>1){const L=await Ji(d.map(U=>({name:U.name,size:U.rows.length})),{title:"Import tables",message:`"${r}" contains ${d.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!L)return;f=L.map(U=>d[U])}const w=(await e.store.tables.find()).filter(L=>L.workspaceId===n),_=new Set(f.map(L=>L.name)),x=w.filter(L=>_.has(L.name));let O;if(x.length===0&&f.length===1)O="append-new";else{const L=x.length>0?[`Overwrite matching (${x.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],U=await e.ui.dialogs.choice(`Importing ${f.length} table${f.length===1?"":"s"} from "${r}".${x.length>0?`

${x.length} table${x.length===1?"":"s"} share a name with existing data.`:""}`,L,"JSON import");if(!U)return;U.startsWith("Overwrite matching")?O="overwrite-matching":U==="Replace entire workspace"?O="replace-workspace":O="append-new"}if(O==="replace-workspace")for(const L of w){const U=e.store.rows(L.id),ae=await U.find();await U.bulkRemove(ae.map(de=>de.id)),await e.store.tables.remove(L.id)}const W=new Map(w.map(L=>[L.name,L]));for(const L of f){const U=L.source,ae=L.origin??(!U&&i.originUrl?{type:"json",url:i.originUrl}:void 0);let de;const we=O==="overwrite-matching"?W.get(L.name):void 0;if(we){if(de=we.id,!we.source){const ie=e.store.rows(de),ce=await ie.find();await ie.bulkRemove(ce.map(ve=>ve.id))}await e.store.tables.patch(de,{columns:L.columns,...L.windowGeometry?{windowGeometry:L.windowGeometry}:{},...L.sortColumn?{sortColumn:L.sortColumn,sortAsc:L.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},source:U??void 0,origin:ae??void 0,updatedAt:Date.now()})}else de=fo(),e.events.emit("import:before",{source:"json",tableId:de}),await e.store.tables.insert({id:de,workspaceId:n,name:L.name,code:Yc(L.name),columns:L.columns,view:"table",...L.windowGeometry?{windowGeometry:L.windowGeometry}:{},...L.sortColumn?{sortColumn:L.sortColumn,sortAsc:L.sortAsc??!0}:{},...U?{source:U}:{},...ae?{origin:ae}:{},updatedAt:Date.now()});let ze=0;if(!U){const ie=e.store.rows(de),ce=L.rows.map(ve=>({id:fo(),tableId:de,data:ve,updatedAt:Date.now()}));await ie.bulkInsert(ce),ze=ce.length}e.events.emit("import:after",{source:"json",tableId:de,rowCount:ze})}}function br(e,t){if(Pt(e)&&co(e))return uo(e);if(Pt(e)&&Array.isArray(e.tables)){const r=e,i=[];for(const n of r.tables){if(qc(n)){const a=n,c=Pt(a.windowGeometry)?a.windowGeometry:void 0,d=typeof a.sortColumn=="string"?a.sortColumn:void 0,f=typeof a.sortAsc=="boolean"?a.sortAsc:void 0,w=Pt(a.source)&&typeof a.source.type=="string"?a.source:void 0,_=Pt(a.origin)&&typeof a.origin.type=="string"&&typeof a.origin.url=="string"?a.origin:void 0;i.push({name:String(n.name),columns:n.columns.map(Uc),rows:Array.isArray(n.rows)?n.rows.filter(Pt):[],...c?{windowGeometry:c}:{},...d?{sortColumn:d,sortAsc:f??!0}:{},...w?{source:w}:{},..._?{origin:_}:{}});continue}Pt(n)&&co(n)&&i.push(...uo(n))}return i}if(Array.isArray(e)){const r=e.filter(Pt);return r.length===0?[]:[{name:t,...ho(r)}]}return Pt(e)?[{name:t,...ho([e])}]:[]}function co(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!Pt(r))continue;const i=r;if(Array.isArray(i.dataArray)&&Array.isArray(i.columns))return!0}return!1}function uo(e){const t=[];for(const[r,i]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!Pt(i))continue;const n=i;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const a=r.replace(/\.table\.json$/,""),c=n.columns.map(_=>Nc(_)),d=c.map(_=>_.field),f=n.dataArray.filter(_=>Array.isArray(_)).map(_=>{const x={};for(let O=0;O<d.length;O++)x[d[O]]=_[O];return x}),w={name:a,columns:c,rows:f};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const _=n.elementRect;w.windowGeometry={x:_.x,y:_.y,w:_.width??600,h:_.height??400,z:_.zIndex??100,minimized:!!_.minimized,maximized:!!_.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<d.length&&(w.sortColumn=d[n.sortColumn],w.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(w)}return t}function Nc(e){const t=String(e.field??"col"),r=String(e.name??t),i=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:i};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function qc(e){return Pt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Uc(e){if(!Pt(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let i=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(i==="color"||i==="image")&&(n=n??i,i="string");const a={field:r,label:String(t.label??r),type:i};return n&&(a.renderer=n),typeof t.script=="string"&&(a.script=t.script),a}function ho(e){const t=new Set;for(const n of e)for(const a of Object.keys(n))t.add(a);return{columns:Array.from(t).map(n=>({field:n,label:n,type:Hc(e.map(a=>a[n]))})),rows:e}}function Hc(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Wc(r))?"date":"string"}function Wc(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function Pt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Kc(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function Vc(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function Yc(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function fo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Xc=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:hs,init:Lc,meta:zc,parsedToTables:br},Symbol.toStringTag,{value:"Module"}));class Gt extends Error{constructor(t,r){const i=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(i),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function Ln(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),i={};for(const[d,f]of t.searchParams)i[d]=f;let n,a=null,c=null;if(r.length>=2){c=decodeURIComponent(r[r.length-1]),a=decodeURIComponent(r[r.length-2]);const d=r.slice(0,r.length-2).join("/");n=t.origin+(d?"/"+d:"")}else r.length===1&&(a=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:a,table:c,query:i}}function ti(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[i,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(i,String(n));return r.toString()}function Gc(e){const t=e?.next_url??null,r=e?.next,i=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],a=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(d=>Array.isArray(d)&&a?Object.fromEntries(a.map((f,w)=>[f,d[w]])):d),nextUrl:t,nextToken:i,hasMore:t!=null||i!=null,truncated:e?.truncated===!0}}function Qc(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function Jc(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],i={},n=e?.column_details;if(Array.isArray(n))for(const d of n)i[d.column??d.name]=d;else n&&typeof n=="object"&&Object.assign(i,n);for(const d of r)d in i||(i[d]={});return{columns:(r.length?r:Object.keys(i)).map(d=>{const f=i[d]||{},w=f.is_pk===!0||f.is_pk===1||t.includes(d),_={field:d,label:oa(d),type:Qc(f.sqlite_type??f.type,d)};return(f.notnull===!0||f.notnull===1||w)&&(_.notnull=!0),w&&(_.unique=!0),f.hidden===!0&&(_.hidden=!0),_}),pks:t}}function oa(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function fs(e){const t=[],r=new Set;for(const i of e)for(const n of Object.keys(i))r.has(n)||(r.add(n),t.push(n));return t.map(i=>({field:i,label:oa(i),type:Zc(e.map(n=>n[i]))}))}function Zc(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&eu(r))?"datetime":"string"}function eu(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function tu(e){const t=new TextEncoder().encode(String(e));let r="";for(const i of t){const n=String.fromCharCode(i);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+i.toString(16).toUpperCase().padStart(2,"0")}return r}function nu(e,t){return!t||t.length===0?null:t.map(r=>tu(e[r])).join(",")}function ru(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const i of t){if(typeof i=="string"){r.push(i);continue}if(i&&typeof i=="object"&&typeof i.name=="string"){if(i.name==="_memory")continue;r.push(typeof i.route=="string"&&i.route?i.route:i.name)}}return r}function iu(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],i=[];for(const n of r){if(typeof n=="string"){i.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&i.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return i}async function yr(e,t){let r;try{r=await e(t)}catch(n){const a=n?.message||"network error";throw new Gt({error:`Couldn't reach ${t} (${a}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Gt(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const i=await r.json();if(i&&i.ok===!1)throw new Gt(i,r.status);return i}async function aa(e,t){return ru(await yr(e,`${t}/-/databases.json`))}async function po(e,t,r){return iu(await yr(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function la(e,t){const r=ti(t,{_extra:"columns"}),i=await yr(e,r),{columns:n,pks:a}=Jc(i),c=!!i&&i.column_details!=null;return{columns:n,pks:a,count:i?.count??null,typed:c,raw:i}}function ca(e,t){if(t.length===0)return e;const r=new Map(fs(t).map(i=>[i.field,i.type]));return e.map(i=>{if(i.type!=="string")return i;const n=r.get(i.field);return n&&n!=="string"?{...i,type:n}:i})}async function si(e,t,r={}){const i=r.maxRows??1e4,a={_size:r.pageSize??1e3,...r.extraParams||{}};let c=ti(t,a);const d=[];let f=!1,w=!1,_=0;for(;c;){const x=await yr(e,c),O=Gc(x);d.push(...O.rows),f=f||O.truncated,_+=1,r.onProgress?.(d.length);const W=O.nextUrl!=null?O.nextUrl:O.nextToken!=null?ti(t,{_next:O.nextToken}):null;W&&d.length<i&&O.rows.length>0?c=W:(w=W!=null&&O.rows.length>0,c=null)}return{rows:d,truncated:f,hasMore:w,pages:_}}function su(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function ua(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function da(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function oi(e,t,r,i){let n;try{n=await e(t,{method:"POST",headers:su(i),body:JSON.stringify(r)})}catch(c){throw new Gt({error:`Couldn't reach ${t} (${c?.message||"network error"}).`},0)}if(n&&n.ok===!1){let c=null;try{c=await n.json()}catch{}throw new Gt(c&&typeof c=="object"?c:{error:`HTTP ${n.status} for ${t}`},n.status)}const a=await n.json();if(a&&a.ok===!1)throw new Gt(a,n.status);return a}async function mo(e,t,r,i={}){const n=await oi(e,ua(t,"insert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function ou(e,t,r,i,n={}){const a=await oi(e,da(t,r,"update"),{update:i,return:!0},n.token);return a&&typeof a.row=="object"&&a.row?a.row:Array.isArray(a?.rows)&&a.rows[0]?a.rows[0]:null}async function go(e,t,r,i={}){await oi(e,da(t,r,"delete"),{},i.token)}async function au(e,t,r,i={}){const n=await oi(e,ua(t,"upsert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function lu(e,t){const r=ti(t,{_extra:"primary_keys"}),i=await yr(e,r);return Array.isArray(i?.primary_keys)?i.primary_keys:[]}async function ha(e,t,r={}){const i=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,i);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const a=await n.json(),c=a?.datasette?.version??a?.version??null;let d=null;try{d=(await(await e(`${t}/-/actor.json`,i)).json())?.actor??null}catch{}return{reachable:!0,version:c,actor:d,writable:!!(r.token&&d)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function ai(e,t){return t?(r,i)=>{const n=(i??{}).headers??{};return e(r,{...i??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fa=Symbol.for(""),cu=e=>{if(e?.r===fa)return e?._$litStatic$},uu=e=>({_$litStatic$:e,r:fa}),bo=new Map,du=e=>(t,...r)=>{const i=r.length;let n,a;const c=[],d=[];let f,w=0,_=!1;for(;w<i;){for(f=t[w];w<i&&(a=r[w],(n=cu(a))!==void 0);)f+=n+t[++w],_=!0;w!==i&&d.push(a),c.push(f),w++}if(w===i&&c.push(t[i]),_){const x=c.join("$$lit$$");(t=bo.get(x))===void 0&&(c.raw=c,bo.set(x,t=c)),r=d}return e(t,...r)},hu=du(M);var fu=Object.defineProperty,pu=Object.getOwnPropertyDescriptor,li=(e,t,r,i)=>{for(var n=i>1?void 0:i?pu(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&fu(t,r,n),n};let Nt=class extends Qe{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r){return this.values=t,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(i=>{this.resolveFn=i,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),Nt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Nt.instance===this&&(Nt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(r=>r.value.toLowerCase().includes(e));return M`
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
      ${t.length===0?M`<div class="empty">No matching values.</div>`:M`<ul>
            ${t.slice(0,500).map(r=>M`
                <li
                  class=${r.value===this.current?"selected":""}
                  @click=${()=>this.close(r.value)}
                >
                  <span class="label">${r.value||M`<em>(empty)</em>`}</span>
                  <span class="count">${r.count}</span>
                </li>
              `)}
          </ul>`}
      ${this.values.length>500?M`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button class="text" @click=${()=>this.close({clear:!0})}>Clear filter</button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};Nt.instance=null;Nt.styles=[ln,Ze`
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
    `];li([Ut({type:Array})],Nt.prototype,"values",2);li([Ut({type:String})],Nt.prototype,"current",2);li([H()],Nt.prototype,"search",2);Nt=li([at("filter-popover")],Nt);var mu=Object.defineProperty,gu=Object.getOwnPropertyDescriptor,Ht=(e,t,r,i)=>{for(var n=i>1?void 0:i?gu(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&mu(t,r,n),n};let jt=class extends Qe{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const i of this.options)if(i.toLowerCase().includes(t)&&(r.push(i),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return M`
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
        ${this.value?M`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${r=>r.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:Se}
      </div>
      ${this.open?M`<ul class="dropdown" style=${t}>
            ${e.length===0?M`<li class="empty">No matching values.</li>`:e.map((r,i)=>M`
                    <li
                      class=${i===this.highlightIdx?"highlighted":""}
                      @mousedown=${n=>n.preventDefault()}
                      @click=${()=>this.onPick(r)}
                    >
                      ${r}
                    </li>
                  `)}
          </ul>`:Se}
    `}};jt.styles=Ze`
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
  `;Ht([Ut({type:String})],jt.prototype,"value",2);Ht([Ut({type:Array})],jt.prototype,"options",2);Ht([Ut({type:String})],jt.prototype,"placeholder",2);Ht([H()],jt.prototype,"open",2);Ht([H()],jt.prototype,"highlightIdx",2);Ht([H()],jt.prototype,"dropTop",2);Ht([H()],jt.prototype,"dropLeft",2);Ht([H()],jt.prototype,"dropMinWidth",2);Ht([H()],jt.prototype,"editing",2);Ht([Xn("input")],jt.prototype,"inputEl",2);jt=Ht([at("filter-combobox")],jt);var bu=Object.defineProperty,yu=Object.getOwnPropertyDescriptor,ut=(e,t,r,i)=>{for(var n=i>1?void 0:i?yu(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&bu(t,r,n),n};const wu=200;let st=class extends Qe{constructor(){super(...arguments),this.tableId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;t.tableId===this.tableId&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.()}async updated(e){e.has("tableId")&&this.tableId&&(this.unsubscribe?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells()}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",vu(t))}async bind(){if(!this.tableId)return;const e=await ke(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const a=n.find(c=>c.id===this.tableId);a&&this.applyTable(a)}),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const i=window.setTimeout(()=>this.loading=!0,wu);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(i),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filters={...e.filters??{}}}async setCell(e,t,r){const i=await ke();await this.commitCell(i,e,t,r)}async commitCell(e,t,r,i){const n=this.columns.find(a=>a.field===r);if(n){const a=xu(n,i,this.rows,t.id);if(a){await e.api.ui.dialogs.alert(a,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:i},updatedAt:Date.now()})}catch(a){await e.api.ui.dialogs.alert(a?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}renderCell(e,t){const r=e.data[t.field],i=t.renderer,n=i?this.cellRenderers?.get(i):void 0;if(n){const a=uu(n);return hu`<${a}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        @change=${c=>this.setCell(e,t.field,c.detail.value)}
      ></${a}>`}switch(t.type){case"boolean":return M`<input
          type="checkbox"
          .checked=${r===!0||r==="true"||r===1||r==="1"}
          @change=${c=>this.setCell(e,t.field,c.target.checked)}
        />`;case"date":return M`<input
          type="date"
          .value=${$u(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"datetime":return M`<input
          type="datetime-local"
          .value=${ku(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"number":return M`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${a=>{const c=a.target.value;this.setCell(e,t.field,c===""?null:Number(c))}}
        />`;default:return M`<input
          type="text"
          .value=${String(r??"")}
          @change=${a=>this.setCell(e,t.field,a.target.value)}
        />`}}async deleteRow(e){const t=await ke();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await ke(),i=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};await r.store.tables.patch(this.tableId,i)}filteredRows(){const e=Object.entries(this.filters).filter(([,i])=>i&&i.trim().length>0),t=this.globalQuery.trim().toLowerCase(),r=this.localQuery.trim().toLowerCase();return e.length===0&&t.length===0&&r.length===0?this.rows:this.rows.filter(i=>{const n=a=>Object.values(i.data).some(c=>c!=null&&String(c).toLowerCase().includes(a));return t.length>0&&!n(t)||r.length>0&&!n(r)?!1:e.every(([a,c])=>String(i.data[a]??"").toLowerCase().includes(c.toLowerCase()))})}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,i=this.columns.find(c=>c.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,a=[...e];return a.sort((c,d)=>{const f=c.data[t],w=d.data[t],_=W=>W==null?0:W===""?1:2,x=_(f),O=_(w);return x!==2||O!==2?(x-O)*n:Cu(f,w,i)*n}),a}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,i=Nt.instance;if(!i)return;const n=new Map;for(const d of this.rowsFacetedFor(t)){const f=d.data[t];if(f==null)continue;const w=String(f);n.set(w,(n.get(w)??0)+1)}const a=[...n.entries()].map(([d,f])=>({value:d,count:f})).sort((d,f)=>f.count-d.count||d.value.localeCompare(f.value)),c=await i.open(r.getBoundingClientRect(),a,this.filters[t]??"");c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>this.saveFilters(),250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,i])=>i&&i.trim().length>0&&r!==e).map(([r,i])=>[r,i.trim().toLowerCase()]);return t.length===0?this.rows:this.rows.filter(r=>t.every(([i,n])=>String(r.data[i]??"").toLowerCase().includes(n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,i=500;for(const n of this.visibleColumns){let a=!0;for(const d of t){const f=d.data[n.field];if(f==null)continue;if((typeof f=="string"?f:String(f)).length>=r){a=!1;break}}if(!a)continue;const c=new Set;for(const d of this.rowsFacetedFor(n.field)){const f=d.data[n.field];if(f==null||f==="")continue;const w=typeof f=="string"?f:String(f);if(!(w.length>=r)&&(c.add(w),c.size>=i))break}e.set(n.field,[...c].sort())}return e}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const i=r.offsetWidth;this.resizing={field:t,startX:e.clientX,startW:i};const n=c=>{if(!this.resizing)return;const d=c.clientX-this.resizing.startX,f=Math.max(40,this.resizing.startW+d);this.columns=this.columns.map(w=>w.field===this.resizing.field?{...w,width:f}:w)},a=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",a);const c=this.resizing?.field;if(this.resizing=null,!c)return;await(await ke()).store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",a)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientX<i.left+i.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,i=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!i)return;const n=[...this.columns],a=n.findIndex(w=>w.field===r);if(a<0)return;const[c]=n.splice(a,1);let d=n.findIndex(w=>w.field===t);if(d<0){n.splice(a,0,c);return}i==="after"&&(d+=1),n.splice(d,0,c),await(await ke()).store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await ke(),t={};for(const[i,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[i]=n);const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,i=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,i+r);return{slice:e.slice(i,n),topPad:i*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows(),t=this.visibleColumns,{slice:r,topPad:i,bottomPad:n}=this.virtualSlice(e),a=this.computeFilterSuggestions(),c=this.externalLoading?this.externalProgress:null;return M`
      ${this.loading||this.externalLoading?M`<div
            class="load-bar"
            role="progressbar"
            aria-label="Loading rows"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${c!=null?Math.round(c*100):Se}
          >
            <div
              class="load-bar-fill ${c!=null?"determinate":""}"
              style=${c!=null?`width:${Math.max(2,Math.round(c*100))}%`:Se}
            ></div>
          </div>`:Se}
      <table>
        <colgroup>
          ${t.map(d=>M`<col style=${d.width!=null?`width: ${d.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(d=>{const f=this.sortColumn===d.field&&this.sortDir,w=f==="asc"?"▲":f==="desc"?"▼":"⇅",_=`t-${d.type}`,x=this.dragSourceField===d.field,O=this.dropTargetField===d.field,W=O&&this.dropEdge==="before"?" drop-before":O&&this.dropEdge==="after"?" drop-after":"";return M`
                <th
                  class=${`${_}${f?" sorted":""}${x?" drag-source":""}${W}`}
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
            ${t.map(d=>{const f=a.get(d.field)??[];return M`
                <th>
                  <filter-combobox
                    .value=${this.filters[d.field]??""}
                    .options=${f}
                    placeholder="filter…"
                    @filter-change=${w=>this.onFilterInput(d.field,w.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${i>0?M`<tr class="spacer" style=${`height:${i}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${r.map(d=>M`
              <tr>
                ${t.map(f=>M`<td class=${`t-${f.type}${f.renderer?` r-${f.renderer}`:""}`}>
                      ${this.renderCell(d,f)}
                    </td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(d.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?M`<tr class="spacer" style=${`height:${n}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};st.styles=[ln,Ze`
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
    `];ut([Ut({type:String})],st.prototype,"tableId",2);ut([H()],st.prototype,"columns",2);ut([H()],st.prototype,"rows",2);ut([H()],st.prototype,"sortColumn",2);ut([H()],st.prototype,"sortDir",2);ut([H()],st.prototype,"filters",2);ut([H()],st.prototype,"globalQuery",2);ut([H()],st.prototype,"localQuery",2);ut([H()],st.prototype,"dragSourceField",2);ut([H()],st.prototype,"dropTargetField",2);ut([H()],st.prototype,"dropEdge",2);ut([H()],st.prototype,"resizing",2);ut([H()],st.prototype,"cellRenderers",2);ut([H()],st.prototype,"scrollY",2);ut([H()],st.prototype,"viewportHeight",2);ut([H()],st.prototype,"loading",2);ut([H()],st.prototype,"externalLoading",2);ut([H()],st.prototype,"externalProgress",2);st=ut([at("data-table")],st);function vu(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function xu(e,t,r,i){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(a=>a.id!==i&&a.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function $u(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function ku(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function Cu(e,t,r){switch(r){case"number":{const i=Number(e),n=Number(t);return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const i=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function Hi(e,t,r){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:r}}))}class Eu extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function pa(e){return`datasette:token:${e}`}function Su(e,t){for(const[r,i]of Object.entries(t))if(r!=="data"&&e[r]!==i)return!1;return!0}function _u(e,t){const r=e.source,i=r?.config??{},n={base:i.base,db:i.db,table:i.table,query:{}},a=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],c=r?.writable===!0,d=i.maxRows??1e4,f=i.pollIntervalMs??0,w=(ie,ce)=>t.backend.fetch(ie,ce);async function _(){const ce=(await t.settings.findOne(pa(i.base)))?.value;return typeof ce=="string"&&ce.length>0?ce:void 0}const x=async(ie,ce)=>ai(w,await _())(ie,ce);function O(ie){return{id:nu(ie,a)??Au(),tableId:e.id,data:ie,updatedAt:Date.now()}}function W(ie){if(!c)throw new Eu(ie)}function L(ie){const ce={};for(const[ve,Re]of Object.entries(ie))a.includes(ve)||(ce[ve]=Re);return ce}const U=new Set;let ae=[],de=!1,we=null;function ze(){return we||(we=(async()=>{try{const{rows:ie}=await si(x,n,{maxRows:d});ae=ie.map(O),de=!0;for(const ce of U)ce(ae);return ae}finally{we=null}})(),we)}return{async find(ie){const ce=de?ae:await ze();return!ie||Object.keys(ie).length===0?ce:ce.filter(ve=>Su(ve,ie))},async findOne(ie){return(de?ae:await ze()).find(ve=>ve.id===ie)??null},async insert(ie){W("insert");const[ce]=await mo(x,n,[ie.data]),ve=O(ce??ie.data);return t.events.emit("row:created",{tableId:e.id,row:ve}),ze(),ve},async bulkInsert(ie){if(ie.length===0)return[];W("insert");const ce=await mo(x,n,ie.map(Re=>Re.data)),ve=(ce.length?ce:ie.map(Re=>Re.data)).map(O);return ze(),ve},async upsert(ie){W("upsert");const[ce]=await au(x,n,[ie.data]),ve=O(ce??ie.data);return ze(),ve},async patch(ie,ce){W("update");const ve=ce.data,Re=L(ve??{}),Me=await ou(x,n,ie,Re),xt=O(Me??{...ve??{}});return t.events.emit("row:updated",{tableId:e.id,row:xt,prev:xt}),ze(),xt},async remove(ie){W("delete"),await go(x,n,ie),t.events.emit("row:deleted",{tableId:e.id,rowId:ie}),ze()},async bulkRemove(ie){if(ie.length!==0){W("delete");for(const ce of ie)await go(x,n,ce);ze()}},subscribe(ie){U.add(ie),de?ie(ae):ze();let ce=null;return f>0&&(ce=setInterval(()=>void ze(),f)),()=>{U.delete(ie),ce&&clearInterval(ce)}},async refresh(){await ze()}}}function Au(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Pu=Object.defineProperty,Tu=Object.getOwnPropertyDescriptor,wr=(e,t,r,i)=>{for(var n=i>1?void 0:i?Tu(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Pu(t,r,n),n};const Du="https://latest.datasette.io/ephemeral";let zt=class extends Qe{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();t&&this.finish({url:t,token:this.token.trim()})}}connectedCallback(){super.connectedCallback(),zt.instance=this}disconnectedCallback(){super.disconnectedCallback(),zt.instance===this&&(zt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return M`
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
                placeholder="e.g. ${Du}"
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
    `}};zt.instance=null;zt.styles=[Zt,Ze`
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
    `];wr([H()],zt.prototype,"url",2);wr([H()],zt.prototype,"token",2);wr([H()],zt.prototype,"status",2);wr([H()],zt.prototype,"statusKind",2);zt=wr([at("datasette-connect-dialog")],zt);const Zi=e=>e.replace(/^https?:\/\//,"");async function ma(e,t,r,i={}){if(t.db&&t.table)return[{db:t.db,table:t.table,count:null,hidden:!1,pks:[]}];let n=[];if(t.db){for(const d of await po(e,t.base,t.db))d.hidden||n.push(d);if(i.skipPicker)return n}else{const d=await aa(e,t.base);if(d.length===0)return[];let f=d;if(d.length>1){const w=await Ji(d.map(_=>({name:_,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${Zi(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!w)return null;f=w.map(_=>d[_])}for(const w of f)try{for(const _ of await po(e,t.base,w))_.hidden||n.push(_)}catch{}}if(n.length===0)return[];const a=new Set(n.map(d=>d.db)).size>1,c=await Ji(n.map(d=>({name:a?`${d.db}/${d.table}`:d.table,size:d.count,detail:a?void 0:d.db})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${Zi(t.base)}.`,confirmLabel:r});return c?c.map(d=>n[d]):null}const ju='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Ru={name:"datasette-source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"easyDBAccess built-ins",optional:!0},jn={maxImportRows:1e4,pageSize:1e3},Ou="https://latest.datasette.io/fixtures/facetable";function Fu(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:ju,tooltip:"Connect a live, editable Datasette table",onClick:()=>Nu(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>Wu(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:_u}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const i=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Ou}`,"","Import from Datasette");i&&await yo(t,i)}}),e.ui.registerDropHandler(async(t,r)=>{const i=t.dataTransfer?.getData("text/plain")||"";return Iu(i)?(t.preventDefault(),await yo(r,i),!0):!1})}async function yo(e,t){try{await ps(e,t)}catch(r){let i;r instanceof Gt?i=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:i=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(i,"Datasette import failed")}}function Iu(e){try{const t=Ln(e);return!!(t.db&&t.table)}catch{return!1}}function zu(e,t){if(!e.has(t))return t;for(let r=2;;r++){const i=`${t} (${r})`;if(!e.has(i))return i}}async function ps(e,t,r={}){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=Ln(t),c=await ma(W=>e.backend.fetch(W),n,"Import",{skipPicker:r.skipTablePicker});if(c===null)return;if(c.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const d=[];let f=0;for(const W of c){const L={base:n.base,db:W.db,table:W.table,query:{}},U=await Lu(e,i,L);if(U.skipped){f+=1;continue}d.push({tableId:U.tableId,ref:L,overwrite:U.overwrite})}let w=0,_=0;const x=[],O=[];for(const W of d)try{const L=await Bu(e,W.tableId,W.ref,W.overwrite);w+=1,_+=L.rowCount,(L.hasMore||L.truncated)&&x.push(`${W.ref.db}/${W.ref.table}`)}catch(L){O.push(`${W.ref.db}/${W.ref.table}: ${L?.message??String(L)}`)}Mu(e,{imported:w,skipped:f,totalRows:_,capped:x,failed:O,requested:c.length})}async function Lu(e,t,r){const i=`${r.db}/${r.table}`,n={type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},a=(await e.store.tables.find()).filter(w=>w.workspaceId===t),c=a.find(w=>w.name===i);let d=i;if(c){const w=await e.ui.dialogs.choice(`A table named "${i}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!w||w==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(w==="Overwrite")return await e.store.tables.patch(c.id,{origin:n,updatedAt:Date.now()}),{tableId:c.id,overwrite:!0};d=zu(new Set(a.map(_=>_.name)),i)}const f=ci();return await e.store.tables.insert({id:f,workspaceId:t,name:d,code:ba(`${r.db}-${r.table}`),columns:[],view:"table",origin:n,updatedAt:Date.now()}),{tableId:f,overwrite:!1}}async function Bu(e,t,r,i){const n=`${r.db}/${r.table}`,a=c=>e.backend.fetch(c);Hi(t,!0);try{let c=[],d=null,f=!1;try{const we=await la(a,r);c=we.columns,d=we.count,f=we.typed}catch{}const w=d&&d>0?Math.min(d,jn.maxImportRows):0,{rows:_,truncated:x,hasMore:O,pages:W}=await si(a,r,{maxRows:jn.maxImportRows,pageSize:jn.pageSize,onProgress:we=>{w>0&&Hi(t,!0,Math.min(1,we/w))}}),L=c.length===0?fs(_):f?c:ca(c,_),U=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t}),await e.store.tables.patch(t,{columns:L,updatedAt:U});const ae=e.store.rows(t);if(i){const we=await ae.find();await ae.bulkRemove(we.map(ze=>ze.id))}const de=_.map(we=>({id:ci(),tableId:t,data:we,updatedAt:U}));return await ae.bulkInsert(de),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:_.length}),{name:n,rowCount:_.length,hasMore:O,truncated:x,pages:W,count:d}}finally{Hi(t,!1)}}function Mu(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,i=`${t.imported} table${t.imported===1?"":"s"}`,n=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${i} (${r});${n} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.capped.length} capped at ${jn.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${i} (${r}) from Datasette.${n}`,{kind:"success",title:"Datasette import"})}async function Nu(e){const t=zt.instance??qu(),r=(n,a)=>e.backend.fetch(n,a),i=await t.open({initialUrl:"https://datasette.io",async onTest(n,a){const c=Ln(n),d=await ha(r,c.base,{token:a||void 0});if(!d.reachable)return`Unreachable: ${d.error??"no response"}`;const f=d.version?` (Datasette ${d.version})`:"";return d.writable?`Reachable${f} — signed in, read-write.`:`Reachable${f} — read-only (no token / not authenticated).`}});if(i)try{await ga(e,i.url,i.token)}catch(n){const a=n instanceof Gt?n.message:n?.message??String(n);await e.ui.dialogs.alert(a,"Connect Datasette failed")}}function qu(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function ga(e,t,r){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=Ln(t),a=(x,O)=>e.backend.fetch(x,O),c=ai(a,r||void 0),d=await ha(a,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:pa(n.base),value:r});let f;try{f=await ma(c,n,"Connect")}catch(x){const O=x instanceof Gt?x.message:x?.message??String(x);throw new Error(`Couldn't read tables from ${Zi(n.base)}: ${O}`)}if(f===null)return;if(f.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const w=[];for(const x of f){const O=await Uu(e,i,n.base,x,d.writable,r);w.push({tableId:O,c:x})}const _=d.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${w.length} live table${w.length===1?"":"s"} from Datasette (${_}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:x,c:O}of w)Hu(e,x,n.base,O,r)}async function Uu(e,t,r,i,n,a){const c=(await e.store.tables.find()).find(_=>{const x=_.source?.config;return _.workspaceId===t&&_.source?.type==="datasette"&&x?.base===r&&x?.db===i.db&&x?.table===i.table});let d=i.pks??[];if(d.length===0){const _=ai((x,O)=>e.backend.fetch(x,O),a||void 0);try{d=await lu(_,{base:r,db:i.db,table:i.table,query:{}})}catch{d=[]}}const f=c?.id??ci(),w={...c??{},id:f,workspaceId:t,name:`${i.db}/${i.table}`,code:ba(`${i.db}-${i.table}`),columns:c?.columns??[],view:c?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:i.db,table:i.table,pks:d}},updatedAt:Date.now()};return c?await e.store.tables.upsert(w):await e.store.tables.insert(w),f}async function Hu(e,t,r,i,n){const a={base:r,db:i.db,table:i.table,query:{}},c=ai((d,f)=>e.backend.fetch(d,f),n||void 0);try{let d=[],f=!1;try{const L=await la(c,a);d=L.columns,f=L.typed}catch{}const{rows:w}=await si(c,a,{maxRows:50,pageSize:50}),_=d.length===0?fs(w):f?d:ca(d,w);if(_.length===0)return;const x=await e.store.tables.findOne(t);if(!x)return;const O=x.source?.config?.pks??[],W=_.map(L=>O.includes(L.field)?{...L,unique:!0,notnull:!0}:L);await e.store.tables.patch(t,{columns:W,updatedAt:Date.now()})}catch{}}async function Wu(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const i=e.store.rows(t);typeof i.refresh=="function"&&await i.refresh();const n=await i.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await Ku(e,r)}catch(i){const n=i instanceof Gt?i.message:i?.message??String(i);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function Ku(e,t){const r=Ln(t.origin.url),i=x=>e.backend.fetch(x),{rows:n,hasMore:a,truncated:c}=await si(i,r,{maxRows:jn.maxImportRows,pageSize:jn.pageSize}),d=Date.now(),f=e.store.rows(t.id),w=await f.find();await f.bulkRemove(w.map(x=>x.id)),await f.bulkInsert(n.map(x=>({id:ci(),tableId:t.id,data:x,updatedAt:d}))),await e.store.tables.patch(t.id,{updatedAt:d});const _=a||c?` (capped at ${jn.maxImportRows})`:"";e.ui.dialogs.toast(`Refreshed ${n.length} rows from ${r.db}/${r.table}${_}.`,{kind:a||c?"warning":"success",title:"Refresh"})}function ba(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function ci(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Vu=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:ga,importDatasette:ps,init:Fu,meta:Ru},Symbol.toStringTag,{value:"Module"})),Yu={name:"dump-export",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"easyDBAccess built-ins"};function Xu(e){e.ui.registerFooterButton({id:"dump-export:dump",label:"Dump",icon:"archive",tooltip:"Export the current workspace as a JSON dump file",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await ui(e);await e.backend.saveFile(`workspace-${t}.db.json`,r,"application/json")}})}async function ui(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i={workspaceId:t,exportedAt:Date.now(),tables:[]};for(const n of r){const a=await e.store.rows(n.id).find();i.tables.push({name:n.name,columns:n.columns,rows:a.map(c=>c.data),...n.windowGeometry?{windowGeometry:n.windowGeometry}:{},...n.sortColumn?{sortColumn:n.sortColumn,sortAsc:n.sortAsc??!0}:{},...n.source?{source:n.source}:{},...n.origin?{origin:n.origin}:{}})}return JSON.stringify(i,null,2)}const Gu=Object.freeze(Object.defineProperty({__proto__:null,init:Xu,meta:Yu,serializeWorkspace:ui},Symbol.toStringTag,{value:"Module"})),Qu={name:"sql-export",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"easyDBAccess built-ins"};function Ju(e){e.ui.registerFooterButton({id:"sql-export:dump",label:"SQL",icon:"storage",tooltip:"Export the current workspace as a .sql script",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await ya(e);await e.backend.saveFile(`workspace-${t}.sql`,r,"application/sql")}})}async function ya(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const a=await e.store.rows(n.id).find();i.push(Zu(n,a),"")}return i.push("COMMIT;",""),i.join(`
`)}function Zu(e,t){const r=es(e.code||e.name||`table_${e.id}`),i=['  "__id" TEXT PRIMARY KEY',...e.columns.map(a=>`  ${ed(a)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,i.join(`,
`),");"];if(t.length>0){const c=["__id",...e.columns.map(d=>d.field)].map(d=>`"${es(d)}"`).join(", ");for(const d of t){const f=[wo(d.id),...e.columns.map(w=>wo(d.data[w.field],w.type))];n.push(`INSERT INTO "${r}" (${c}) VALUES (${f.join(", ")});`)}}return n.join(`
`)}function ed(e){const t=[`"${es(e.field)}"`,td(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function td(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function wo(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=nd(e);return r===null?"NULL":Wr(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?Wr(e.toISOString()):Wr(typeof e=="string"?e:JSON.stringify(e))}function nd(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?vo(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const i=new Date(t);return Number.isFinite(i.getTime())?vo(i):null}return null}function vo(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),i=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${i}`}function Wr(e){return`'${e.replace(/'/g,"''")}'`}function es(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const rd=Object.freeze(Object.defineProperty({__proto__:null,init:Ju,meta:Qu,serializeWorkspaceAsSql:ya},Symbol.toStringTag,{value:"Module"})),id={name:"gist-sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"easyDBAccess built-ins"},sd="gist:";function od(e){e.ui.registerFooterButton({id:"gist-sync:push",label:"Push",icon:"cloud_upload",tooltip:"Push the current workspace to a GitHub Gist",onClick:async()=>{try{await cd(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerFooterButton({id:"gist-sync:pull",label:"Pull",icon:"cloud_download",tooltip:"Pull the latest tables from the configured Gist",onClick:async()=>{try{await ud(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}})}async function wa(e){const t=e.workspaceId();return`${sd}${t??"default"}`}async function ad(e){const t=await wa(e),r=await e.store.settings.findOne(t);if(!r)return null;const i=r.value;return!i||!i.token||!i.user?null:{user:i.user,gistId:i.gistId??"",token:i.token}}async function va(e,t){const r=await wa(e);await e.store.settings.upsert({key:r,value:t})}function ld(e){const t={};for(const r of e.split(";")){const i=r.indexOf("=");if(i<0)continue;const n=r.slice(0,i).trim(),a=r.slice(i+1).trim();n&&(t[n]=a)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function xa(e){const t=await ad(e);if(t)return t;const r=await e.ui.dialogs.prompt(`Connection string format:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,"","Gist credentials");if(!r)return null;const i=ld(r);return i?(await va(e,i),i):(await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist credentials"),null)}async function cd(e){const t=await xa(e);if(!t)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=(await e.store.tables.find()).filter(f=>f.workspaceId===r);if(i.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const n={},a=[];for(const f of i){const w=await e.store.rows(f.id).find(),_=JSON.stringify(dd(f,w),null,2);_.length>1e8&&a.push(`${f.name} (${(_.length/1e6).toFixed(2)} MB)`),n[`${$a(f.name)}.table.json`]={content:_}}if(a.length>0&&!await e.ui.dialogs.confirm(`These tables exceed Gist's 100 MB-per-file limit and will be rejected:

${a.join(`
`)}

Push anyway?`,"Gist size warning"))return;n["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1"},null,2)};let c;if(t.gistId){const f=await fetch(`https://api.github.com/gists/${t.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:n,description:`easyDBAccess workspace: ${r}`})});if(!f.ok)throw new Error(await ts(f));c=await f.json()}else{const f=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:n})});if(!f.ok)throw new Error(await ts(f));c=await f.json(),t.gistId=c.id,await va(e,t)}const d=c.html_url??`https://gist.github.com/${t.user}/${c.id}`;e.ui.dialogs.toast(`Pushed ${i.length} table${i.length===1?"":"s"}.  ${d}`,{kind:"success",title:"Gist sync"})}async function ud(e){const t=await xa(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!i.ok)throw new Error(await ts(i));const n=await i.json(),a=Object.entries(n.files).filter(([w])=>w.endsWith(".table.json")&&!w.startsWith("_easydb"));if(a.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const c=(await e.store.tables.find()).filter(w=>w.workspaceId===r),d=new Map(c.map(w=>[w.name,w]));let f=0;for(const[,w]of a){const _=JSON.parse(w.content);if(!_.name||!Array.isArray(_.columns))continue;let x;const O=d.get(_.name);if(O){x=await e.store.tables.patch(O.id,{columns:_.columns,updatedAt:Date.now()});const L=e.store.rows(O.id),U=await L.find();await L.bulkRemove(U.map(ae=>ae.id))}else x=await e.store.tables.insert({id:xo(),workspaceId:r,name:_.name,code:$a(_.name),columns:_.columns,view:"table",updatedAt:Date.now()});const W=(_.rows??[]).map(L=>({id:xo(),tableId:x.id,data:L,updatedAt:Date.now()}));await e.store.rows(x.id).bulkInsert(W),f++}e.ui.dialogs.toast(`Pulled ${f} table${f===1?"":"s"} from gist ${t.gistId}.`,{kind:"success",title:"Gist sync"})}function dd(e,t){return{name:e.name,columns:e.columns,rows:t.map(r=>r.data)}}async function ts(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function $a(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function xo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const hd=Object.freeze(Object.defineProperty({__proto__:null,init:od,meta:id},Symbol.toStringTag,{value:"Module"})),ka="server-sync:url";function Ca(e){return`server-sync:etag:${e}`}async function Ea(e){const r=(await e.store.settings.findOne(ka))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function fd(e,t){await e.store.settings.upsert({key:ka,value:t.replace(/\/+$/,"")})}async function Sa(e,t){const i=(await e.store.settings.findOne(Ca(t)))?.value;return typeof i=="string"?i:null}async function In(e,t,r){await e.store.settings.upsert({key:Ca(t),value:r})}function di(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function $o(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function _a(e,t,r){const i=br(r,t),n=(await e.store.tables.find()).filter(c=>c.workspaceId===t);for(const c of n){const d=e.store.rows(c.id),f=await d.find();await d.bulkRemove(f.map(w=>w.id)),await e.store.tables.remove(c.id)}let a=0;for(const c of i){const d=ko(),f=await e.store.tables.insert({id:d,workspaceId:t,name:c.name,code:pd(c.name),columns:c.columns,view:"table",...c.windowGeometry?{windowGeometry:c.windowGeometry}:{},...c.sortColumn?{sortColumn:c.sortColumn,sortAsc:c.sortAsc??!0}:{},updatedAt:Date.now()}),w=c.rows.map(_=>({id:ko(),tableId:f.id,data:_,updatedAt:Date.now()}));await e.store.rows(f.id).bulkInsert(w),a++}return a}function pd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function ko(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const md={name:"server-sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"easyDBAccess built-ins"};function gd(e){e.ui.registerFooterButton({id:"server-sync:push",label:"Sync ↑",icon:"cloud_sync",tooltip:"Push this workspace to the configured server",onClick:async()=>{try{await bd(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Server sync"})}}}),e.ui.registerFooterButton({id:"server-sync:pull",label:"Sync ↓",icon:"cloud_sync",tooltip:"Pull this workspace from the configured server",onClick:async()=>{try{await yd(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Server sync"})}}})}async function bd(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Aa(e);if(!r)return;const i=await ui(e),n=await Sa(e,t),a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);let c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:a,body:i});if(c.status===412){const f=await c.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){f.currentEtag&&await In(e,t,f.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:i})}if(!c.ok)throw new Error(await Pa(c));const d=di(c.headers.get("ETag"));d&&await In(e,t,d),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function yd(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Aa(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await Pa(n));const a=di(n.headers.get("ETag")),c=await n.json(),d=await _a(e,t,c);a&&await In(e,t,a),e.ui.dialogs.toast(`Pulled ${d} table${d===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function Aa(e){const t=await Ea(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await fd(e,r),r.replace(/\/+$/,"")}async function Pa(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const wd=Object.freeze(Object.defineProperty({__proto__:null,init:gd,meta:md},Symbol.toStringTag,{value:"Module"})),vd={name:"new-table",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"easyDBAccess built-ins"};function xd(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const $d=Object.freeze(Object.defineProperty({__proto__:null,init:xd,meta:vd},Symbol.toStringTag,{value:"Module"})),kd={name:"plugin-manager-button",version:"0.1.0",description:"Registers a footer button that opens the Plugin Manager dialog.",author:"easyDBAccess built-ins"};function Cd(e){e.ui.registerFooterButton({id:"plugin-manager:open",label:"Plugins",icon:"extension",tooltip:"Add, disable, or remove plugins",onClick:()=>e.ui.openPluginManager()})}const Ed=Object.freeze(Object.defineProperty({__proto__:null,init:Cd,meta:kd},Symbol.toStringTag,{value:"Module"})),Sd={name:"core-renderers",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"easyDBAccess built-ins"};function _d(e){customElements.get("cell-date")||customElements.define("cell-date",Ad),customElements.get("cell-datetime")||customElements.define("cell-datetime",Pd),customElements.get("cell-boolean")||customElements.define("cell-boolean",Td),customElements.get("cell-script")||customElements.define("cell-script",jd),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class Ad extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="date",t.value=Od(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Pd extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="datetime-local",t.value=Fd(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Td extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="checkbox",t.checked=Dd(this._value),t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Dd(e){return e===!0||e==="true"||e===1||e==="1"}class jd extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const a=document.createElement("span");a.textContent="(no script)",a.style.cssText="color:#9ca3af;font-style:italic",this.append(a);return}let r;try{r=Rd(t)}catch(a){this.append(Wi("compile error",a));return}let i;try{i=r(this._row)}catch(a){this.append(Wi("runtime error",a));return}if(typeof i!="string"){this.append(Wi("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=i,this.append(n)}}const Co=new Map;function Rd(e){const t=Co.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return Co.set(e,r),r}function Wi(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const i=t instanceof Error?t.message:String(t);r.title=i}return r}function Od(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function Fd(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const Id=Object.freeze(Object.defineProperty({__proto__:null,init:_d,meta:Sd},Symbol.toStringTag,{value:"Module"})),zd={name:"cell-color",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"easyDBAccess built-ins"};function Ld(e){customElements.get("cell-color")||customElements.define("cell-color",Bd),e.ui.registerCellRenderer("color","cell-color")}class Bd extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,i){this.value=i}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Md=Object.freeze(Object.defineProperty({__proto__:null,init:Ld,meta:zd},Symbol.toStringTag,{value:"Module"})),Nd={name:"cell-image",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"easyDBAccess built-ins"};function qd(e){customElements.get("cell-image")||customElements.define("cell-image",Ud),e.ui.registerCellRenderer("image","cell-image")}class Ud extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const i=document.createElement("img");i.src=this._value,i.alt="",i.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(i)}else{const i=document.createElement("span");i.style.color="#9ca3af",i.textContent="no image",t.append(i);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const i=new FileReader;i.onload=()=>this.commit(String(i.result)),i.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Hd=Object.freeze(Object.defineProperty({__proto__:null,init:qd,meta:Nd},Symbol.toStringTag,{value:"Module"})),Wd={name:"cell-link",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"easyDBAccess built-ins"};function Kd(e){customElements.get("cell-link")||customElements.define("cell-link",Vd),e.ui.registerCellRenderer("link","cell-link")}class Vd extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:Yd(t),i=!this._editing&&!r?Xd(t):null,n=!this._editing&&!r&&!i?Gd(t):null;if(r||i||n){const a=document.createElement("span");a.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const c=document.createElement("a");c.href=r?t:i?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(c.target="_blank",c.rel="noopener noreferrer"),c.textContent=t,c.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",c.title=r?`Open ${t}`:i?`Email ${t}`:`Call ${t}`;const d=document.createElement("button");d.type="button",d.title="Edit",d.textContent="✎",d.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",d.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation(),this._editing=!0,this.render()}),a.append(c,d),this.append(a)}else{const a=document.createElement("input");a.type="text",a.value=t,a.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",a.addEventListener("change",()=>this.commit(a.value)),a.addEventListener("keydown",c=>{c.key==="Enter"?(c.preventDefault(),this.commit(a.value)):c.key==="Escape"&&(this._editing=!1,this.render())}),this.append(a),this._editing&&setTimeout(()=>{a.focus(),a.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Yd(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function Xd(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function Gd(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const i=/[ ()\-.]/.test(t),n=t.startsWith("+");return!i&&!n&&r.length<10?null:t}const Qd=Object.freeze(Object.defineProperty({__proto__:null,init:Kd,meta:Wd},Symbol.toStringTag,{value:"Module"}));var Jd=Object.defineProperty,Zd=Object.getOwnPropertyDescriptor,Ta=(e,t,r,i)=>{for(var n=i>1?void 0:i?Zd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Jd(t,r,n),n};function eh(e){return(an.instance??th()).open(e)}function th(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let an=class extends Qe{constructor(){super(...arguments),this.rows=[],this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((r,i)=>{const n=this.rows[i].field.trim(),a=this.rows[i].label.trim()||n;return{...r,field:n,label:a}});this.finish(t)}}connectedCallback(){super.connectedCallback(),an.instance=this}disconnectedCallback(){super.disconnectedCallback(),an.instance===this&&(an.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}open(e){return this.source=e,this.rows=e.map(t=>({field:t.field,label:t.label})),new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((r,i)=>{const n=r.field.trim().toLowerCase();if(n===""){e.add(i);return}(t.get(n)??t.set(n,[]).get(n)).push(i)});for(const r of t.values())if(r.length>1)for(const i of r)e.add(i);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,r){this.rows=this.rows.map((i,n)=>n===e?{...i,[t]:r}:i)}render(){const e=this.invalidIndices(),t=e.size;return M`
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
              ${this.rows.map((r,i)=>M`
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
              ${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:Se}
            </p>
          </div>
        </form>
      </dialog>
    `}};an.instance=null;an.styles=[Zt,Ze`
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
    `];Ta([H()],an.prototype,"rows",2);an=Ta([at("column-names-dialog")],an);var nh=Object.defineProperty,rh=Object.getOwnPropertyDescriptor,cn=(e,t,r,i)=>{for(var n=i>1?void 0:i?rh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&nh(t,r,n),n};const ih="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",sh="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",oh='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',Eo=[{label:"Northwind — sample database (JSON dump)",url:ih,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:sh,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],ah={name:"import-data",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"easyDBAccess built-ins",optional:!0};function lh(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:oh,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>dh(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:r})=>ch(t,r)})}async function ch(e,t){const r=await e.store.tables.findOne(t),i=r?.origin;if(i?.url)try{const n=await e.backend.fetch(i.url);if(!n.ok)throw new Error(`HTTP ${n.status} ${n.statusText}`);const a=await n.text();let c;if(i.type==="csv")c=gr(a).rows;else{const w=br(JSON.parse(a),r.name),_=w.find(x=>x.name===r.name)??(w.length===1?w[0]:void 0);if(!_)throw new Error(`"${r.name}" is no longer in the dump at ${i.url}`);c=_.rows}const d=e.store.rows(t),f=await d.find();await d.bulkRemove(f.map(w=>w.id)),await d.bulkInsert(c.map(w=>({id:uh(),tableId:t,data:w,updatedAt:Date.now()}))),e.ui.dialogs.toast(`Refreshed "${r.name}" (${c.length} rows).`,{kind:"success",title:"Refresh"})}catch(n){e.ui.dialogs.toast(`Couldn't refresh "${r?.name??t}": ${n.message}`,{kind:"error",title:"Refresh"})}}function uh(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function dh(e){const r=await(pt.instance??hh()).open({async listDatabases(d){const f=Ln(d);return aa(w=>e.backend.fetch(w),f.base)}});if(!r)return;const{url:i,kind:n,dbChosen:a,editColumns:c}=r;try{if(n==="datasette")await ps(e,i,{skipTablePicker:a});else if(n==="csv"){const d=await e.backend.fetch(i);if(!d.ok)throw new Error(`HTTP ${d.status} ${d.statusText}`);const f=await d.text();await us(e,f,Kr(i),{editColumns:c?eh:void 0,origin:{type:"csv",url:i}}),e.ui.dialogs.toast(`Imported ${Kr(i)}.`,{kind:"success",title:"Import"})}else{const d=await e.backend.fetch(i);if(!d.ok)throw new Error(`HTTP ${d.status} ${d.statusText}`);const f=await d.text();await hs(e,f,Kr(i),{originUrl:i}),e.ui.dialogs.toast(`Imported ${Kr(i)}.`,{kind:"success",title:"Import"})}}catch(d){e.ui.dialogs.toast(`Could not import ${i}: ${d.message}`,{kind:"error",title:"Import"})}}function hh(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function fh(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),i=[...t.searchParams.keys()].some(a=>a.startsWith("_")),n=r.includes("datasette")||i;return!i&&/\.csv$/i.test(t.pathname)?"csv":!i&&/\.json$/i.test(t.pathname)?"json":n?"datasette":"json"}catch{return"json"}}function So(e,t){if(t!=="datasette"||!e)return!1;try{const r=Ln(e);return!r.db&&!r.table}catch{return!1}}function Kr(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}let pt=class extends Qe{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.resolvedKind,i=r==="datasette"&&!!this.selectedDb&&So(t,r),n=i?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t,a=r==="csv"&&this.editColumns;this.finish({url:n,kind:r,dbChosen:i,editColumns:a})}}get resolvedKind(){return this.kind==="auto"?fh(this.url.trim()):this.kind}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),pt.instance=this}disconnectedCallback(){super.disconnectedCallback(),pt.instance===this&&(pt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.editColumns=!1,this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=Eo[t];r&&(this.url=r.url,this.kind=r.kind)}renderDbPicker(){return!this.listDatabases||!So(this.url.trim(),this.resolvedKind)?Se:M`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?M`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>M`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:M`<option value="">— not loaded —</option>`}
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
      ${this.dbError?M`<p class="hint error">${this.dbError}</p>`:Se}
    `}render(){return M`
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
                ${Eo.map((e,t)=>M`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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

            ${this.resolvedKind==="csv"?M`<label class="check">
                  <input
                    type="checkbox"
                    .checked=${this.editColumns}
                    @change=${e=>this.editColumns=e.target.checked}
                  />
                  Edit columns before import (rename / fix duplicate names)
                </label>`:Se}

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
      ${Se}
    `}};pt.instance=null;pt.styles=[Zt,Ze`
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
    `];cn([H()],pt.prototype,"url",2);cn([H()],pt.prototype,"kind",2);cn([H()],pt.prototype,"presetIdx",2);cn([H()],pt.prototype,"dbList",2);cn([H()],pt.prototype,"dbLoading",2);cn([H()],pt.prototype,"dbError",2);cn([H()],pt.prototype,"selectedDb",2);cn([H()],pt.prototype,"editColumns",2);pt=cn([at("import-dialog")],pt);const ph=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return pt},init:lh,meta:ah},Symbol.toStringTag,{value:"Module"})),mh={name:"auto-sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"easyDBAccess built-ins",optional:!0},gh=6e4;let _o=null,ns=!1;const Ki=new Map;function bh(e){_o===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(_o=setInterval(()=>{Da(e)},gh)))}async function Da(e){if(ns)return;const t=e.workspaceId();if(!t)return;const r=await Ea(e);if(r)try{await yh(e,r,t)}catch(i){console.warn("[auto-sync]",i)}}async function yh(e,t,r){const i=await ui(e),n=await Sa(e,r),a=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(a.status===404){await Ao(e,t,r,i,null);return}if(!a.ok)return;const c=di(a.headers.get("ETag")),d=await a.text();if($o(i)===$o(d)){c&&c!==n&&await In(e,r,c);return}if(c&&c===n){await Ao(e,t,r,i,n);return}if(!(c&&Ki.get(r)===c)){ns=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const w=JSON.parse(d),_=await _a(e,r,w);c&&await In(e,r,c),Ki.delete(r),e.ui.dialogs.toast(`Pulled ${_} table${_===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else c&&Ki.set(r,c)}finally{ns=!1}}}async function Ao(e,t,r,i,n){const a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);const c=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:a,body:i});if(c.ok){const d=di(c.headers.get("ETag"));d&&await In(e,r,d);return}if(c.status===412){const d=await c.json().catch(()=>({}));d.currentEtag&&await In(e,r,d.currentEtag)}}const ja=Object.freeze(Object.defineProperty({__proto__:null,load:bh,meta:mh,tick:Da},Symbol.toStringTag,{value:"Module"}));/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let F={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&F.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let i=arguments[r];if(i==null)continue;i=Object(i);let n=Object.keys(Object(i));for(let a=0,c=n.length;a<c;a++){let d=n[a],f=Object.getOwnPropertyDescriptor(i,d);f!==void 0&&f.enumerable&&(t[d]=i[d])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,i=new Array(r);r--;)i[r]=[t[r],e[t[r]]];return i}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),i=document.createDocumentFragment();r.forEach(function(n){let a=n instanceof Node;i.appendChild(a?n:document.createTextNode(String(n)))}),this.appendChild(i)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,i=this;do for(r=t.length;--r>=0&&t.item(r)!==i;);while(r<0&&(i=i.parentElement));return i}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let i=document.createEvent("CustomEvent");return i.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),i}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),i=r.length>>>0;if(i===0)return!1;let n=t|0,a=Math.max(n>=0?n:i-Math.abs(n),0);function c(d,f){return d===f||typeof d=="number"&&typeof f=="number"&&isNaN(d)&&isNaN(f)}for(;a<i;){if(c(r[a],e))return!0;a++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>F.modifier=e),document.addEventListener("keyup",()=>F.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const i=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(i===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(i),a=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-a)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(i===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(i),a=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-a)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((i,n)=>{(i.startsWith("--")||i.startsWith("var"))&&(r[n]=F.getCssVariableValue(i))}),r.forEach(i=>{F.colorNames[i]?t[2]="#"+F.colorNames[i]:i.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=i:i.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=i:t[2]=i}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),i=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return i&&(t.size=i[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let i=e.indexOf(")");t=e.slice(0,i+1).replace(/\s+/g,""),t.startsWith("var")&&(t=F.getCssVariableValue(t)),r=e.slice(i+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let i=e.indexOf(" ");i>0?(t=e.slice(0,i+1).replace(/\s+/g,""),r=e.slice(i+1,e.length).trim()):t=e,t.startsWith("--")&&(t=F.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let i=r.indexOf(" ");r=r.slice(i+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:F.colorNames[r]?r="#"+F.colorNames[r]:r.match(/^(--|var)/)?r=F.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,i,n,a,c,d,f,w,_,x={};const O=/^#?([\da-f]{3}|[\da-f]{6})$/gi,W=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,L=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,U=this.colorNames;return U[t]&&(t=U[t]),t.match(O)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),i=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),x.rgb={r:parseInt(r,16),g:parseInt(i,16),b:parseInt(n,16)},x.hex=`#${r}${i}${n}`):(x.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},x.hex=`#${t}`),_=this.rgbToHsl(x.rgb.r,x.rgb.g,x.rgb.b),x.hsl=_,x.rgb.css=`rgb(${x.rgb.r},${x.rgb.g},${x.rgb.b})`):t.match(W)?(f=W.exec(t),x.rgb={css:t,r:f[1],g:f[2],b:f[3]},x.hex=this.rgbToHex(f[1],f[2],f[3]),_=this.rgbToHsl(f[1],f[2],f[3]),x.hsl=_):t.match(L)?(f=L.exec(t),a=f[1]/360,c=f[2].slice(0,f[2].length-1)/100,d=f[3].slice(0,f[3].length-1)/100,w=this.hslToRgb(a,c,d),x.rgb={css:`rgb(${w[0]},${w[1]},${w[2]})`,r:w[0],g:w[1],b:w[2]},x.hex=this.rgbToHex(x.rgb.r,x.rgb.g,x.rgb.b),x.hsl={css:`hsl(${f[1]},${f[2]},${f[3]})`,h:f[1],s:f[2],l:f[3]}):(x.hex="#f5f5f5",x.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},x.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),x},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),i=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),a=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(i)<=t?"#ffffff":"#000000",d=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",f=this.lighten(e,this.colorFilledDark),w=this.perceivedBrightness(f)<=t?"#ffffff":"#000000";return[r.hsl.css,i,n,a,c,d,f,w]},darken(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i-i*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i+(100-i)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let i,n,a;if(t===0)i=n=a=r;else{let c=(w,_,x)=>(x<0&&(x+=1),x>1&&(x-=1),x<.16666666666666666?w+(_-w)*6*x:x<.5?_:x<.6666666666666666?w+(_-w)*(.6666666666666666-x)*6:w),d=r<.5?r*(1+t):r+t-r*t,f=2*r-d;i=c(f,d,e+1/3),n=c(f,d,e),a=c(f,d,e-1/3)}return[Math.round(i*255),Math.round(n*255),Math.round(a*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let i=Math.max(e,t,r),n=Math.min(e,t,r),a,c,d=(i+n)/2;if(i===n)a=c=0;else{let f=i-n;switch(c=d>.5?f/(2-i-n):f/(i+n),i){case e:a=(t-r)/f+(t<r?6:0);break;case t:a=(r-e)/f+2;break;case r:a=(e-t)/f+4;break}a/=6}return a=Math.round(a*360),c=Math.round(c*100)+"%",d=Math.round(d*100)+"%",{css:"hsl("+a+","+c+","+d+")",h:a,s:c,l:d}},rgbToHex(e,t,r){let i=Number(e).toString(16),n=Number(t).toString(16),a=Number(r).toString(16);return i.length===1&&(i=`0${i}`),n.length===1&&(n=`0${n}`),a.length===1&&(a=`0${a}`),`#${i}${n}${a}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),i=r.filter(c=>c.match(/^(down|right|up|left)$/i));i.length&&(t.autoposition=i[0],r.splice(r.indexOf(i[0]),1));let n=r.filter(c=>c.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let a=r.filter(c=>c.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return a.length&&(t.offsetX=a[0].match(/^[+-]?\d*\.?\d+$/i)?`${a[0]}px`:a[0],a[1]?t.offsetY=a[1].match(/^[+-]?\d*\.?\d+$/i)?`${a[1]}px`:a[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(a[0]),1),a[1]&&r.splice(r.indexOf(a[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(U=>{typeof t[U]=="function"&&(t[U]=t[U].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,i=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),a=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},c=r==="window"?{x:1,y:1}:{x:a.width/r.offsetWidth,y:a.height/r.offsetHeight},d=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);a.width-=(parseFloat(d.borderLeftWidth)+parseFloat(d.borderRightWidth))*c.x,a.height-=(parseFloat(d.borderTopWidth)+parseFloat(d.borderBottomWidth))*c.y;let f;t.of?typeof t.of=="string"?f=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?f=t.of[0].getBoundingClientRect():f=t.of.getBoundingClientRect():f=a;let w=this.getScrollbarWidth(document.body),_=this.getScrollbarWidth(e.parentElement),x="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?x=f.left-a.left-parseFloat(d.borderLeftWidth)+"px":x="0px":t.at.startsWith("center")?t.of?x=f.left-a.left-parseFloat(d.borderLeftWidth)+f.width/2+"px":x=a.width/2+"px":t.at.startsWith("right-")&&(t.of?x=f.left-a.left-parseFloat(d.borderLeftWidth)+f.width+"px":x=a.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?x=f.left-a.left-parseFloat(d.borderLeftWidth)-i.width/2+"px":x=-i.width/2+"px":t.at.startsWith("center")?t.of?x=f.left-a.left-parseFloat(d.borderLeftWidth)-(i.width-f.width)/2+"px":x=a.width/2-i.width/2+"px":t.at.startsWith("right-")&&(t.of?x=f.left-a.left-parseFloat(d.borderLeftWidth)+(f.width-i.width/2)+"px":x=a.width-i.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?x=f.left-a.left-parseFloat(d.borderLeftWidth)-i.width+"px":x=-i.width+"px":t.at.startsWith("center")?t.of?x=f.left-a.left-parseFloat(d.borderLeftWidth)-i.width+f.width/2+"px":x=a.width/2-i.width+"px":t.at.startsWith("right-")&&(t.of?x=f.left-a.left-parseFloat(d.borderLeftWidth)+f.width-i.width+"px":x=a.width-i.width+"px",r!=="window"&&(x=parseFloat(x)-_.y+"px")));let O="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?O=f.top-a.top-parseFloat(d.borderTopWidth)+"px":O="0px":t.at.endsWith("center")?t.of?O=f.top-a.top-parseFloat(d.borderTopWidth)+f.height/2+"px":O=a.height/2+"px":t.at.endsWith("-bottom")&&(t.of?O=f.top-a.top-parseFloat(d.borderTopWidth)+f.height+"px":O=a.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?O=f.top-a.top-parseFloat(d.borderTopWidth)-i.height/2+"px":O=-i.height/2+"px":t.at.endsWith("center")?t.of?O=f.top-a.top-parseFloat(d.borderTopWidth)-i.height/2+f.height/2+"px":O=a.height/2-i.height/2+"px":t.at.endsWith("-bottom")&&(t.of?O=f.top-a.top-parseFloat(d.borderTopWidth)-i.height/2+f.height+"px":O=a.height-i.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?O=f.top-a.top-parseFloat(d.borderTopWidth)-i.height+"px":O=-i.height+"px":t.at.endsWith("center")?t.of?O=f.top-a.top-parseFloat(d.borderTopWidth)-i.height+f.height/2+"px":O=a.height/2-i.height+"px":t.at.endsWith("-bottom")&&(t.of?O=f.top-a.top-parseFloat(d.borderTopWidth)-i.height+f.height+"px":O=a.height-i.height+"px",r!=="window"?O=parseFloat(O)-_.x+"px":O=parseFloat(O)-w.x+"px")),e.style.left=c.x===1?x:parseFloat(x)/c.x+"px",e.style.top=c.y===1?O:parseFloat(O)/c.y+"px";let W=getComputedStyle(e),L={left:W.left,top:W.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(L=this.applyPositionAutopos(e,L,t)),(t.offsetX||t.offsetY)&&(L=this.applyPositionOffset(e,L,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(L=this.applyPositionMinMax(e,L,t)),t.modify&&(L=this.applyPositionModify(e,L,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const i=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(i);const n=Array.prototype.slice.call(document.querySelectorAll(`.${i}`)),a=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((c,d)=>{d>0&&d<=a&&(t.top=parseFloat(t.top)+n[--d].getBoundingClientRect().height+F.autopositionSpacing+"px")});break;case"up":n.forEach((c,d)=>{d>0&&d<=a&&(t.top=parseFloat(t.top)-n[--d].getBoundingClientRect().height-F.autopositionSpacing+"px")});break;case"right":n.forEach((c,d)=>{d>0&&d<=a&&(t.left=parseFloat(t.left)+n[--d].getBoundingClientRect().width+F.autopositionSpacing+"px")});break;case"left":n.forEach((c,d)=>{d>0&&d<=a&&(t.left=parseFloat(t.left)-n[--d].getBoundingClientRect().width-F.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const i=getComputedStyle(e);return{left:i.left,top:i.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(i=>{e.classList.contains(i)&&(t=i)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),i=document.createElement("button");i.className="btn btn"+t.color.slice(r),document.body.appendChild(i),t.color=getComputedStyle(i).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(i),i=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},i=typeof t=="object"?Object.assign(r,t):r,n=i.bgPanel,a=i.bgContent,c=i.colorHeader,d=i.colorContent,f=i.bgFooter,w=i.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[c]&&(c="#"+this.colorNames[c]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(O=>e.querySelector(O).style.color=this.getCssVariableValue(c)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(O=>O.style.color=this.getCssVariableValue(c)),this.colorNames[a]?e.content.style.background="#"+this.colorNames[a]:e.content.style.background=this.getCssVariableValue(a),this.colorNames[d]?e.content.style.color="#"+this.colorNames[d]:e.content.style.color=this.getCssVariableValue(d),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(d)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[f]?e.footer.style.background="#"+this.colorNames[f]:e.footer.style.background=this.getCssVariableValue(f),this.colorNames[w]?e.footer.style.color="#"+this.colorNames[w]:e.footer.style.color=this.getCssVariableValue(w),i.border&&e.setBorder(i.border),i.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(i.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,i]of Object.entries(t))e.style[r]=typeof i=="string"?F.getCssVariableValue(i):i;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const i=document.createElement("script");i.src=e,i.type=t,document.head.appendChild(i),r&&(i.onload=r)}},ajax(e,t){let r,i,n=new XMLHttpRequest;const a={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let c=F.strToHtml(this.responseText);r.urlSelector&&(c=c.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(c)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},a,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},a,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&F.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}i=r.url.trim().split(/\s+/),r.url=encodeURI(i[0]),i.length>1&&(i.shift(),r.urlSelector=i.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&F.ajaxAutoresizeAutoreposition(t,r),F.ajaxAlwaysCallbacks.length&&F.ajaxAlwaysCallbacks.forEach(c=>{t?c.call(n,n,t):c.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const i={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(a,c){if(c){let d=F.strToHtml(a);c.contentRemove(),c.content.append(d)}}};if(t&&typeof e=="string")r=Object.assign({},i,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},i,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&F.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(a=>{if(a.ok)return a[r.bodyMethod]()}).then(a=>{t?r.done.call(a,a,t):r.done.call(a,a),t&&(r.autoresize||r.autoreposition)&&F.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const i=r.split(" "),n=Object.assign({},{width:i[0],height:i[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const i=Object.assign({},r);t.autoresize&&e.resize(i),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const i=document.createElement("div"),n=e.parentElement;i.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(i.style.width=r+"px",i.style.height=r+"px"):t==="ct"||t==="cb"?i.style.height=r+"px":(t==="lc"||t==="rc")&&(i.style.width=r+"px"),n!==document.body&&(i.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(i)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",i,n){if(typeof t=="function"&&(t=[t]),r)return t[r](a=>a.call(e,e,i,n));t.forEach(a=>a.call(e,e,i,n))},resetZi(){this.zi=((e=F.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=F.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){F.zi||(F.zi=((m=F.ziBase)=>{let y=m;return{next:()=>y++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${F.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let m=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;F.errorpanel(m)}return!1}let i=this.pOcontainer(e.container);if(typeof i=="object"&&i.length&&i.length>0&&(i=i[0]),!i)return this.errorReporting&&F.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(m=>{e[m]?typeof e[m]=="function"&&(e[m]=[e[m]]):e[m]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const a=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),d=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),f=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),w=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),_=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),x=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),O=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),W=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),L=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),U=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),ae=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),de=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),we=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),ze=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),ie=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[a,c,d,f,w,_,x,O,W,L,U,ae,de,we].forEach(m=>m.panel=n);const ce=n.querySelector(".jsPanel-btn-close"),ve=n.querySelector(".jsPanel-btn-maximize"),Re=n.querySelector(".jsPanel-btn-normalize"),Me=n.querySelector(".jsPanel-btn-smallify"),xt=n.querySelector(".jsPanel-btn-minimize");ce&&F.pointerup.forEach(m=>{ce.addEventListener(m,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.close(null,!0)})}),ve&&F.pointerup.forEach(m=>{ve.addEventListener(m,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.maximize()})}),Re&&F.pointerup.forEach(m=>{Re.addEventListener(m,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.normalize()})}),Me&&F.pointerup.forEach(m=>{Me.addEventListener(m,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),xt&&F.pointerup.forEach(m=>{xt.addEventListener(m,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.minimize()})});let Ot=F.extensions;for(let m in Ot)Object.prototype.hasOwnProperty.call(Ot,m)&&(n[m]=Ot[m]);if(n.setBorder=m=>{let y=F.pOborder(m);return y[2].length||(y[2]=n.style.backgroundColor),y=y.join(" "),n.style.border=y,n.options.border=y,n},n.setBorderRadius=m=>{typeof m=="string"&&(m.startsWith("--")||m.startsWith("var"))&&(m=m.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),m=F.getCssVariableValue(m)),typeof m=="number"&&(m+="px"),n.style.borderRadius=m;const y=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=y.borderTopLeftRadius,n.header.style.borderTopRightRadius=y.borderTopRightRadius):(n.content.style.borderTopLeftRadius=y.borderTopLeftRadius,n.content.style.borderTopRightRadius=y.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=y.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=y.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=y.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=y.borderBottomLeftRadius),n},n.setTheme=(m=e.theme,y)=>{let C;if(n.status==="minimized"&&(C=!0,n.normalize()),F.clearTheme(n),typeof m=="object")e.border=void 0,F.applyCustomTheme(n,m);else if(typeof m=="string"){m==="none"&&(m="white");let g=F.getThemeDetails(m);F.applyColorTheme(n,g)}return C&&n.minimize(),y&&y.call(n,n),n},n.remove=(m,y,C)=>{n.parentElement.removeChild(n),document.getElementById(m)?C&&C.call(n,m,n):(n.removeMinimizedReplacement(),n.status="closed",y&&document.dispatchEvent(ie),document.dispatchEvent(ze),n.options.onclosed&&F.processCallbacks(n,n.options.onclosed,"every",y),F.autopositionRemaining(n),C&&C.call(m,m)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(m,y)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(we),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!F.processCallbacks(n,n.options.onbeforeclose,"some",n.status,y))return n;n.options.animateOut?(n.options.animateIn&&F.remClass(n,n.options.animateIn),F.setClass(n,n.options.animateOut),n.addEventListener("animationend",C=>{C.stopPropagation(),n.remove(n.id,y,m)})):n.remove(n.id,y,m)}},n.maximize=(m,y)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!F.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(w);const C=n.parentElement,g=F.pOcontainment(e.maximizedMargin);return C===document.body?(n.style.width=document.documentElement.clientWidth-g[1]-g[3]+"px",n.style.height=document.documentElement.clientHeight-g[0]-g[2]+"px",n.style.left=g[3]+"px",n.style.top=g[0]+"px"):(n.style.width=C.clientWidth-g[1]-g[3]+"px",n.style.height=C.clientHeight-g[0]-g[2]+"px",n.style.left=g[3]+"px",n.style.top=g[0]+"px"),Me.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),y||n.front(),document.dispatchEvent(_),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onmaximized&&F.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=m=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!F.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(x),!document.getElementById("jsPanel-replacement-container")){const y=document.createElement("div");y.id="jsPanel-replacement-container",document.body.append(y)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(O),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let y=n.createMinimizedReplacement(),C,g,k;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(y);break;case"parentpanel":g=n.closest(".jsPanel-content").parentElement,k=g.querySelectorAll(".jsPanel-minimized-box"),C=k[k.length-1],C.append(y);break;case"parent":g=n.parentElement,C=g.querySelector(".jsPanel-minimized-container"),C||(C=document.createElement("div"),C.className="jsPanel-minimized-container",g.append(C)),C.append(y);break;default:document.querySelector(e.minimizeTo).append(y)}}return m&&m.call(n,n,n.statusBefore),e.onminimized&&F.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=m=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!F.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(d),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),Me.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(f),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onnormalized&&F.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=m=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!F.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(W),n.style.overflow="hidden";const y=window.getComputedStyle(n),C=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(y.borderTopWidth)+parseFloat(y.borderBottomWidth)+C+"px",Me.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(L),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(U),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const g=n.querySelectorAll(".jsPanel-minimized-box");return g[g.length-1].style.display="none",m&&m.call(n,n,n.statusBefore),e.onsmallified&&F.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=m=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!F.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(ae),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(f),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),Me.style.transform="rotate(0deg)";const y=n.querySelectorAll(".jsPanel-minimized-box");y[y.length-1].style.display="flex",m&&m.call(n,n,n.statusBefore),e.onunsmallified&&F.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(m,y=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const C=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(g=>g.style.zIndex);Math.max(...C)>n.style.zIndex&&(n.style.zIndex=F.zi.next()),F.resetZi()}return document.dispatchEvent(de),m&&m.call(n,n),e.onfronted&&y&&F.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(m,y=!1)=>{if(y||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),m&&typeof m=="function"&&!y)m.call(n,n,n.snappableTo);else if(m!==!1){let C=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const g=F.pOcontainment(n.options.dragit.containment),k=n.snappableTo;k.startsWith("left")?C[0]=g[3]:k.startsWith("right")&&(C[0]=-g[1]),k.endsWith("top")?C[1]=g[0]:k.endsWith("bottom")&&(C[1]=-g[2])}n.reposition(`${n.snappableTo} ${C[0]} ${C[1]}`)}y||(n.snapped=n.snappableTo)},n.move=(m,y)=>{let C=n.overlaps(m,"paddingbox"),g=n.parentElement;return m.appendChild(n),n.options.container=m,n.style.left=C.left+"px",n.style.top=C.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),y&&y.call(n,n,m,g),n},n.closeChildpanels=m=>(n.getChildpanels().forEach(y=>y.close()),m&&m.call(n,n),n),n.getChildpanels=m=>{const y=n.content.querySelectorAll(".jsPanel");return m&&y.forEach((C,g,k)=>{m.call(C,C,g,k)}),y},n.isChildpanel=m=>{const y=n.closest(".jsPanel-content"),C=y?y.parentElement:null;return m&&m.call(n,n,C),y?C:!1},n.contentRemove=m=>(F.emptyNode(n.content),m&&m.call(n,n),n),n.createMinimizedReplacement=()=>{const m=F.createMinimizedTemplate(),y=window.getComputedStyle(n.headertitle).color,C=window.getComputedStyle(n),g=e.iconfont,k=m.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?F.setStyles(m,{backgroundColor:C.backgroundColor,backgroundPositionX:C.backgroundPositionX,backgroundPositionY:C.backgroundPositionY,backgroundRepeat:C.backgroundRepeat,backgroundAttachment:C.backgroundAttachment,backgroundImage:C.backgroundImage,backgroundSize:C.backgroundSize,backgroundOrigin:C.backgroundOrigin,backgroundClip:C.backgroundClip}):m.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,m.id=n.id+"-min",m.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),m.querySelector(".jsPanel-headerlogo")),m.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),m.querySelector(".jsPanel-title")),m.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),m.querySelector(".jsPanel-title").style.color=y,k.style.color=y,k.querySelectorAll("button").forEach(se=>se.style.color=y),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(se=>{n.header.classList.contains(se)&&m.querySelector(".jsPanel-hdr").classList.add(se)}),n.setIconfont(g,m),n.dataset.btnnormalize==="enabled"?F.pointerup.forEach(se=>{m.querySelector(".jsPanel-btn-normalize").addEventListener(se,he=>{if(he.preventDefault(),he.button&&he.button>0)return!1;n.normalize()})}):k.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?F.pointerup.forEach(se=>{m.querySelector(".jsPanel-btn-maximize").addEventListener(se,he=>{if(he.preventDefault(),he.button&&he.button>0)return!1;n.maximize()})}):k.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?F.pointerup.forEach(se=>{m.querySelector(".jsPanel-btn-close").addEventListener(se,he=>{if(he.preventDefault(),he.button&&he.button>0)return!1;n.close(null,!0)})}):k.querySelector(".jsPanel-btn-close").style.display="none",m},n.removeMinimizedReplacement=()=>{const m=document.getElementById(`${n.id}-min`);m&&m.parentElement.removeChild(m)},n.drag=(m={})=>{let y,C,g;const k=new CustomEvent("jspaneldragstart",{detail:n.id}),se=new CustomEvent("jspaneldrag",{detail:n.id}),he=new CustomEvent("jspaneldragstop",{detail:n.id});[k,se,he].forEach(Ne=>Ne.panel=n);const q=Ne=>{let Fe=Ne.split("-");return Fe.forEach((xe,Pe)=>{Fe[Pe]=xe.charAt(0).toUpperCase()+xe.slice(1)}),"snap"+Fe.join("")};function Y(Ne){Ne.relatedTarget===null&&F.pointermove.forEach(Fe=>{document.removeEventListener(Fe,C,!1),n.style.opacity=1})}let Ke=m.handles||F.defaults.dragit.handles,ot=m.cursor||F.defaults.dragit.cursor;function Kt(Ne){if(F.pointermove.forEach(Fe=>document.removeEventListener(Fe,C)),F.removeSnapAreas(),y){if(n.style.opacity=1,y=void 0,g.snap){switch(n.snappableTo){case"left-top":n.snap(g.snap.snapLeftTop);break;case"center-top":n.snap(g.snap.snapCenterTop);break;case"right-top":n.snap(g.snap.snapRightTop);break;case"right-center":n.snap(g.snap.snapRightCenter);break;case"right-bottom":n.snap(g.snap.snapRightBottom);break;case"center-bottom":n.snap(g.snap.snapCenterBottom);break;case"left-bottom":n.snap(g.snap.snapLeftBottom);break;case"left-center":n.snap(g.snap.snapLeftCenter);break}g.snap.callback&&n.snappableTo&&typeof g.snap.callback=="function"&&(g.snap.callback.call(n,n),g.snap.repositionOnSnap&&g.snap[q(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&g.snap.repositionOnSnap&&g.snap[q(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Fe=n.parentElement;n.move(n.droppableTo),g.drop.callback&&g.drop.callback.call(n,n,n.droppableTo,Fe)}if(document.dispatchEvent(he),g.stop.length){let Fe=window.getComputedStyle(n),xe={left:parseFloat(Fe.left),top:parseFloat(Fe.top),width:parseFloat(Fe.width),height:parseFloat(Fe.height)};F.processCallbacks(n,g.stop,!1,xe,Ne)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Fe=>Fe.style.pointerEvents="auto"),document.removeEventListener(Ne,Kt)}return n.querySelectorAll(Ke).forEach(Ne=>{Ne.style.touchAction="none",Ne.style.cursor=ot,F.pointerdown.forEach(Fe=>{Ne.addEventListener(Fe,xe=>{if(xe.button&&xe.button>0||(g=Object.assign({},F.defaults.dragit,m),g.disableOnMaximized&&n.status==="maximized"))return!1;if((g.containment||g.containment===0)&&(g.containment=F.pOcontainment(g.containment)),g.grid&&Array.isArray(g.grid)&&g.grid.length===1&&(g.grid[1]=g.grid[0]),g.snap&&(typeof g.snap=="object"?g.snap=Object.assign({},F.defaultSnapConfig,g.snap):g.snap=F.defaultSnapConfig),xe.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(Je=>Je.style.pointerEvents="none");let Pe=window.getComputedStyle(n),Ve=parseFloat(Pe.left),_e=parseFloat(Pe.top),ee=parseFloat(Pe.width),Ye=parseFloat(Pe.height),Ie=xe.touches?xe.touches[0].clientX:xe.clientX,ue=xe.touches?xe.touches[0].clientY:xe.clientY,ge=n.parentElement,Ct=ge.getBoundingClientRect(),oe=window.getComputedStyle(ge),Xe=n.getScaleFactor(),dn=0,Bt=F.getScrollbarWidth(ge);C=Je=>{if(Je.preventDefault(),!y){if(document.dispatchEvent(k),n.style.opacity=g.opacity,n.snapped&&g.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let ne=n.getBoundingClientRect(),Ae=Ie-(ne.left+ne.width),fe=ne.width/2;Ae>-fe&&(dn=Ae+fe)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),g.drop&&g.drop.dropZones){let ne=g.drop.dropZones.map(fe=>F.pOcontainer(fe)),Ae=[];ne.forEach(function(fe){fe.length?fe.forEach(function(Oe){Ae.push(Oe)}):Ae.push(fe)}),Ae=Ae.filter(function(fe,Oe,He){return He.indexOf(fe)===Oe}),g.drop.dropZones=Ae}g.start.length&&F.processCallbacks(n,g.start,!1,{left:Ve,top:_e,width:ee,height:Ye},Je)}y=1;let Et,je,qe,wt,et,Ce,$e,St,Ue,mt,lt=Je.touches?Je.touches[0].clientX:Je.clientX,tt=Je.touches?Je.touches[0].clientY:Je.clientY,Le=window.getComputedStyle(n),le;if(ge===document.body){let ne=n.getBoundingClientRect();Ue=window.innerWidth-parseInt(oe.borderLeftWidth,10)-parseInt(oe.borderRightWidth,10)-(ne.left+ne.width),mt=window.innerHeight-parseInt(oe.borderTopWidth,10)-parseInt(oe.borderBottomWidth,10)-(ne.top+ne.height)}else Ue=parseInt(oe.width,10)-parseInt(oe.borderLeftWidth,10)-parseInt(oe.borderRightWidth,10)-(parseInt(Le.left,10)+parseInt(Le.width,10)),mt=parseInt(oe.height,10)-parseInt(oe.borderTopWidth,10)-parseInt(oe.borderBottomWidth,10)-(parseInt(Le.top,10)+parseInt(Le.height,10));Et=parseFloat(Le.left),qe=parseFloat(Le.top),et=Ue,$e=mt,g.snap&&(g.snap.trigger==="panel"?(je=Et**2,wt=qe**2,Ce=et**2,St=$e**2):g.snap.trigger==="pointer"&&(n.options.container==="window"?(Et=lt,qe=tt,et=window.innerWidth-lt,$e=window.innerHeight-tt,je=lt**2,wt=qe**2,Ce=et**2,St=$e**2):(le=n.overlaps(ge,"paddingbox",Je),Et=le.pointer.left,qe=le.pointer.top,et=le.pointer.right,$e=le.pointer.bottom,je=le.pointer.left**2,wt=le.pointer.top**2,Ce=le.pointer.right**2,St=le.pointer.bottom**2)));let Ge=Math.sqrt(je+wt),G=Math.sqrt(je+St),nt=Math.sqrt(Ce+wt),dt=Math.sqrt(Ce+St),$t=Math.abs(Et-et)/2,Q=Math.abs(qe-$e)/2,Vt=Math.sqrt(je+Q**2),tn=Math.sqrt(wt+$t**2),ct=Math.sqrt(Ce+Q**2),hn=Math.sqrt(St+$t**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(se),(!g.axis||g.axis==="x")&&(n.style.left=Ve+(lt-Ie)/Xe.x+dn+"px"),(!g.axis||g.axis==="y")&&(n.style.top=_e+(tt-ue)/Xe.y+"px"),g.grid){let ne=g.grid,Ae=g.axis,fe=ne[0]*Math.round((Ve+(lt-Ie))/ne[0]),Oe=ne[1]*Math.round((_e+(tt-ue))/ne[1]);(!Ae||Ae==="x")&&(n.style.left=`${fe}px`),(!Ae||Ae==="y")&&(n.style.top=`${Oe}px`)}if(g.containment||g.containment===0){let ne=g.containment,Ae,fe;if(n.options.container==="window")Ae=window.innerWidth-parseFloat(Le.width)-ne[1]-Bt.y,fe=window.innerHeight-parseFloat(Le.height)-ne[2]-Bt.x;else{let Oe=parseFloat(oe.borderLeftWidth)+parseFloat(oe.borderRightWidth),He=parseFloat(oe.borderTopWidth)+parseFloat(oe.borderBottomWidth);Ae=Ct.width/Xe.x-parseFloat(Le.width)-ne[1]-Oe-Bt.y,fe=Ct.height/Xe.y-parseFloat(Le.height)-ne[2]-He-Bt.x}parseFloat(n.style.left)<=ne[3]&&(n.style.left=ne[3]+"px"),parseFloat(n.style.top)<=ne[0]&&(n.style.top=ne[0]+"px"),parseFloat(n.style.left)>=Ae&&(n.style.left=Ae+"px"),parseFloat(n.style.top)>=fe&&(n.style.top=fe+"px")}if(g.drag.length){let ne={left:Et,top:qe,right:et,bottom:$e,width:parseFloat(Le.width),height:parseFloat(Le.height)};F.processCallbacks(n,g.drag,!1,ne,Je)}if(g.snap){let ne=g.snap.sensitivity,Ae=ge===document.body?window.innerWidth/8:Ct.width/8,fe=ge===document.body?window.innerHeight/8:Ct.height/8;n.snappableTo=!1,F.removeSnapAreas(),Ge<ne?g.snap.snapLeftTop!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="left-top",F.createSnapArea(n,"lt",ne)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(le.pointer.left>0&&le.pointer.top>0?(n.snappableTo="left-top",F.createSnapArea(n,"lt",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):G<ne?g.snap.snapLeftBottom!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="left-bottom",F.createSnapArea(n,"lb",ne)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(le.pointer.left>0&&le.pointer.bottom>0?(n.snappableTo="left-bottom",F.createSnapArea(n,"lb",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):nt<ne?g.snap.snapRightTop!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="right-top",F.createSnapArea(n,"rt",ne)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(le.pointer.right>0&&le.pointer.top>0?(n.snappableTo="right-top",F.createSnapArea(n,"rt",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):dt<ne?g.snap.snapRightBottom!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="right-bottom",F.createSnapArea(n,"rb",ne)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(le.pointer.right>0&&le.pointer.bottom>0?(n.snappableTo="right-bottom",F.createSnapArea(n,"rb",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):qe<ne&&tn<Ae?g.snap.snapCenterTop!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="center-top",F.createSnapArea(n,"ct",ne)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(le.pointer.top>0?(n.snappableTo="center-top",F.createSnapArea(n,"ct",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):Et<ne&&Vt<fe?g.snap.snapLeftCenter!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="left-center",F.createSnapArea(n,"lc",ne)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(le.pointer.left>0?(n.snappableTo="left-center",F.createSnapArea(n,"lc",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):et<ne&&ct<fe?g.snap.snapRightCenter!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="right-center",F.createSnapArea(n,"rc",ne)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(le.pointer.right>0?(n.snappableTo="right-center",F.createSnapArea(n,"rc",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):$e<ne&&hn<Ae&&g.snap.snapCenterBottom!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="center-bottom",F.createSnapArea(n,"cb",ne)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(le.pointer.bottom>0?(n.snappableTo="center-bottom",F.createSnapArea(n,"cb",ne)):(n.snappableTo=!1,F.removeSnapAreas())))}if(g.drop&&g.drop.dropZones){let ne=F.isIE?"msElementsFromPoint":"elementsFromPoint",Ae=document[ne](Je.clientX,Je.clientY);Array.isArray(Ae)||(Ae=Array.prototype.slice.call(Ae)),g.drop.dropZones.forEach(fe=>{Ae.includes(fe)&&(n.droppableTo=fe)}),Ae.includes(n.droppableTo)||(n.droppableTo=!1)}},F.pointermove.forEach(Je=>document.addEventListener(Je,C)),window.addEventListener("mouseout",Y,!1)})}),F.pointerup.forEach(Fe=>{document.addEventListener(Fe,Kt),window.removeEventListener("mouseout",Y)}),m.disable&&(Ne.style.pointerEvents="none")}),n},n.dragit=m=>{const y=Object.assign({},F.defaults.dragit,e.dragit),C=n.querySelectorAll(y.handles);return m==="disable"?C.forEach(g=>g.style.pointerEvents="none"):C.forEach(g=>g.style.pointerEvents="auto"),n},n.sizeit=(m={})=>{const y=new CustomEvent("jspanelresizestart",{detail:n.id}),C=new CustomEvent("jspanelresize",{detail:n.id}),g=new CustomEvent("jspanelresizestop",{detail:n.id});[y,C,g].forEach(xe=>xe.panel=n);let k={},se,he,q,Y,Ke,ot;k.handles=m.handles||F.defaults.resizeit.handles,k.handles.split(",").forEach(xe=>{const Pe=document.createElement("DIV");Pe.className=`jsPanel-resizeit-handle jsPanel-resizeit-${xe.trim()}`,n.append(Pe)});let Kt=m.aspectRatio?m.aspectRatio:!1;function Ne(xe){xe.relatedTarget===null&&F.pointermove.forEach(Pe=>document.removeEventListener(Pe,se,!1))}function Fe(xe){if(F.pointermove.forEach(Pe=>document.removeEventListener(Pe,se,!1)),xe.target.classList&&xe.target.classList.contains("jsPanel-resizeit-handle")){let Pe,Ve,_e=xe.target.className;if(_e.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(Pe=!0),_e.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Ve=!0),k.grid&&Array.isArray(k.grid)){k.grid.length===1&&(k.grid[1]=k.grid[0]);const ee=parseFloat(n.style.width),Ye=parseFloat(n.style.height),Ie=ee%k.grid[0],ue=Ye%k.grid[1],ge=parseFloat(n.style.left),Ct=parseFloat(n.style.top),oe=ge%k.grid[0],Xe=Ct%k.grid[1];Ie<k.grid[0]/2?n.style.width=ee-Ie+"px":n.style.width=ee+(k.grid[0]-Ie)+"px",ue<k.grid[1]/2?n.style.height=Ye-ue+"px":n.style.height=Ye+(k.grid[1]-ue)+"px",Pe&&(oe<k.grid[0]/2?n.style.left=ge-oe+"px":n.style.left=ge+(k.grid[0]-oe)+"px"),Ve&&(Xe<k.grid[1]/2?n.style.top=Ct-Xe+"px":n.style.top=Ct+(k.grid[1]-Xe)+"px")}}if(he){n.content.style.pointerEvents="inherit",he=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let Pe=n.controlbar.querySelector(".jsPanel-btn-smallify"),Ve=n.getBoundingClientRect();if(Pe&&Ve.height>ot+5&&(Pe.style.transform="rotate(0deg)"),document.dispatchEvent(g),k.stop.length){let _e=window.getComputedStyle(n),ee={left:parseFloat(_e.left),top:parseFloat(_e.top),width:parseFloat(_e.width),height:parseFloat(_e.height)};F.processCallbacks(n,k.stop,!1,ee,xe)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Pe=>Pe.style.pointerEvents="auto"),k.aspectRatio=Kt,document.removeEventListener(xe,Fe)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(xe=>{xe.style.touchAction="none",F.pointerdown.forEach(Pe=>{xe.addEventListener(Pe,Ve=>{if(Ve.preventDefault(),Ve.stopPropagation(),Ve.button&&Ve.button>0)return!1;let _e=1;if(k=Object.assign({},F.defaults.resizeit,m),(k.containment||k.containment===0)&&(k.containment=F.pOcontainment(k.containment)),k.aspectRatio&&k.aspectRatio===!0&&(k.aspectRatio="panel"),F.modifier){let fe=F.modifier;fe.altKey?k.aspectRatio="content":fe.ctrlKey?k.aspectRatio="panel":fe.shiftKey&&(k.aspectRatio=!1,_e=2)}let ee=typeof k.maxWidth=="function"?k.maxWidth():k.maxWidth||1e4,Ye=typeof k.maxHeight=="function"?k.maxHeight():k.maxHeight||1e4,Ie=typeof k.minWidth=="function"?k.minWidth():k.minWidth,ue=typeof k.minHeight=="function"?k.minHeight():k.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(fe=>fe.style.pointerEvents="none");const ge=n.parentElement,Ct=ge.tagName.toLowerCase(),oe=n.getBoundingClientRect(),Xe=ge.getBoundingClientRect(),dn=window.getComputedStyle(ge,null),Bt=parseInt(dn.borderLeftWidth,10),Je=parseInt(dn.borderTopWidth,10),Et=dn.getPropertyValue("position"),je=Ve.clientX||Ve.clientX===0||Ve.touches[0].clientX,qe=Ve.clientY||Ve.clientY===0||Ve.touches[0].clientY,wt=je/qe,et=Ve.target.classList,Ce=n.getScaleFactor(),$e=oe.width/oe.height,St=n.content.getBoundingClientRect(),Ue=St.width/St.height,mt=n.header.getBoundingClientRect().height,lt=n.footer.getBoundingClientRect().height||0;let tt=oe.left,Le=oe.top,le=1e4,Ge=1e4,G=1e4,nt=1e4;Ke=oe.width,ot=oe.height,Ct!=="body"&&(tt=oe.left-Xe.left+ge.scrollLeft,Le=oe.top-Xe.top+ge.scrollTop),Ct==="body"&&k.containment?(le=document.documentElement.clientWidth-oe.left,G=document.documentElement.clientHeight-oe.top,Ge=oe.width+oe.left,nt=oe.height+oe.top):k.containment&&(Et==="static"?(le=Xe.width-oe.left+Bt,G=Xe.height+Xe.top-oe.top+Je,Ge=oe.width+(oe.left-Xe.left)-Bt,nt=oe.height+(oe.top-Xe.top)-Je):(le=ge.clientWidth-(oe.left-Xe.left)/Ce.x+Bt,G=ge.clientHeight-(oe.top-Xe.top)/Ce.y+Je,Ge=(oe.width+oe.left-Xe.left)/Ce.x-Bt,nt=n.clientHeight+(oe.top-Xe.top)/Ce.y-Je)),k.containment&&(Ge-=k.containment[3],nt-=k.containment[0],le-=k.containment[1],G-=k.containment[2]);const dt=window.getComputedStyle(n),$t=parseFloat(dt.width)-oe.width,Q=parseFloat(dt.height)-oe.height;let Vt=parseFloat(dt.left)-oe.left,tn=parseFloat(dt.top)-oe.top;ge!==document.body&&(Vt+=Xe.left,tn+=Xe.top);let ct=parseInt(dt.borderTopWidth,10),hn=parseInt(dt.borderRightWidth,10),ne=parseInt(dt.borderBottomWidth,10),Ae=parseInt(dt.borderLeftWidth,10);se=fe=>{fe.preventDefault(),he||(document.dispatchEvent(y),k.start.length&&F.processCallbacks(n,k.start,!1,{width:Ke,height:ot,left:tt,top:Le},fe),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),oe.height>ot+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),he=1,document.dispatchEvent(C);let Oe=fe.touches?fe.touches[0].clientX:fe.clientX,He=fe.touches?fe.touches[0].clientY:fe.clientY,Te;et.contains("jsPanel-resizeit-e")?(q=Ke+(Oe-je)*_e/Ce.x+$t,q>=le&&(q=le),q>=ee&&(q=ee),q<=Ie&&(q=Ie),n.style.width=q+"px",_e===2&&(n.style.left=tt-(Oe-je)+"px"),k.aspectRatio==="content"?(n.style.height=(q-hn-Ae)/Ue+mt+lt+ct+ne+"px",k.containment&&(Te=n.overlaps(ge),Te.bottom<=k.containment[2]&&(n.style.height=G+"px",n.style.width=G*Ue+"px"))):k.aspectRatio==="panel"&&(n.style.height=q/$e+"px",k.containment&&(Te=n.overlaps(ge),Te.bottom<=k.containment[2]&&(n.style.height=G+"px",n.style.width=G*$e+"px")))):et.contains("jsPanel-resizeit-s")?(Y=ot+(He-qe)*_e/Ce.y+Q,Y>=G&&(Y=G),Y>=Ye&&(Y=Ye),Y<=ue&&(Y=ue),n.style.height=Y+"px",_e===2&&(n.style.top=Le-(He-qe)+"px"),k.aspectRatio==="content"?(n.style.width=(Y-mt-lt-ct-ne)*Ue+ct+ne+"px",k.containment&&(Te=n.overlaps(ge),Te.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/Ue+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*$e+"px",k.containment&&(Te=n.overlaps(ge),Te.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/$e+"px")))):et.contains("jsPanel-resizeit-w")?(q=Ke+(je-Oe)*_e/Ce.x+$t,q<=ee&&q>=Ie&&q<=Ge&&(n.style.left=tt+(Oe-je)/Ce.x+Vt+"px"),q>=Ge&&(q=Ge),q>=ee&&(q=ee),q<=Ie&&(q=Ie),n.style.width=q+"px",k.aspectRatio==="content"?(n.style.height=(q-hn-Ae)/Ue+mt+lt+ct+ne+"px",k.containment&&(Te=n.overlaps(ge),Te.bottom<=k.containment[2]&&(n.style.height=G+"px",n.style.width=G*Ue+"px"))):k.aspectRatio==="panel"&&(n.style.height=q/$e+"px",k.containment&&(Te=n.overlaps(ge),Te.bottom<=k.containment[2]&&(n.style.height=G+"px",n.style.width=G*$e+"px")))):et.contains("jsPanel-resizeit-n")?(Y=ot+(qe-He)*_e/Ce.y+Q,Y<=Ye&&Y>=ue&&Y<=nt&&(n.style.top=Le+(He-qe)/Ce.y+tn+"px"),Y>=nt&&(Y=nt),Y>=Ye&&(Y=Ye),Y<=ue&&(Y=ue),n.style.height=Y+"px",k.aspectRatio==="content"?(n.style.width=(Y-mt-lt-ct-ne)*Ue+ct+ne+"px",k.containment&&(Te=n.overlaps(ge),Te.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/Ue+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*$e+"px",k.containment&&(Te=n.overlaps(ge),Te.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/$e+"px")))):et.contains("jsPanel-resizeit-se")?(q=Ke+(Oe-je)*_e/Ce.x+$t,q>=le&&(q=le),q>=ee&&(q=ee),q<=Ie&&(q=Ie),n.style.width=q+"px",_e===2&&(n.style.left=tt-(Oe-je)+"px"),k.aspectRatio&&(n.style.height=q/$e+"px"),Y=ot+(He-qe)*_e/Ce.y+Q,Y>=G&&(Y=G),Y>=Ye&&(Y=Ye),Y<=ue&&(Y=ue),n.style.height=Y+"px",_e===2&&(n.style.top=Le-(He-qe)+"px"),k.aspectRatio==="content"?(n.style.width=(Y-mt-lt-ct-ne)*Ue+ct+ne+"px",k.containment&&(Te=n.overlaps(ge),Te.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/Ue+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*$e+"px",k.containment&&(Te=n.overlaps(ge),Te.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/$e+"px")))):et.contains("jsPanel-resizeit-sw")?(Y=ot+(He-qe)*_e/Ce.y+Q,Y>=G&&(Y=G),Y>=Ye&&(Y=Ye),Y<=ue&&(Y=ue),n.style.height=Y+"px",_e===2&&(n.style.top=Le-(He-qe)+"px"),k.aspectRatio&&(n.style.width=Y*$e+"px"),q=Ke+(je-Oe)*_e/Ce.x+$t,q<=ee&&q>=Ie&&q<=Ge&&(n.style.left=tt+(Oe-je)/Ce.x+Vt+"px"),q>=Ge&&(q=Ge),q>=ee&&(q=ee),q<=Ie&&(q=Ie),n.style.width=q+"px",k.aspectRatio==="content"?(n.style.height=(q-hn-Ae)/Ue+mt+lt+ct+ne+"px",k.containment&&(Te=n.overlaps(ge),Te.bottom<=k.containment[2]&&(n.style.height=G+"px",n.style.width=G*Ue+"px"))):k.aspectRatio==="panel"&&(n.style.height=q/$e+"px",k.containment&&(Te=n.overlaps(ge),Te.bottom<=k.containment[2]&&(n.style.height=G+"px",n.style.width=G*$e+"px")))):et.contains("jsPanel-resizeit-ne")?(q=Ke+(Oe-je)*_e/Ce.x+$t,q>=le&&(q=le),q>=ee&&(q=ee),q<=Ie&&(q=Ie),n.style.width=q+"px",_e===2&&(n.style.left=tt-(Oe-je)+"px"),k.aspectRatio&&(n.style.height=q/$e+"px"),Y=ot+(qe-He)*_e/Ce.y+Q,Y<=Ye&&Y>=ue&&Y<=nt&&(n.style.top=Le+(He-qe)/Ce.y+tn+"px"),Y>=nt&&(Y=nt),Y>=Ye&&(Y=Ye),Y<=ue&&(Y=ue),n.style.height=Y+"px",k.aspectRatio==="content"?(n.style.width=(Y-mt-lt-ct-ne)*Ue+ct+ne+"px",k.containment&&(Te=n.overlaps(ge),Te.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/Ue+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*$e+"px",k.containment&&(Te=n.overlaps(ge),Te.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/$e+"px")))):et.contains("jsPanel-resizeit-nw")&&(k.aspectRatio&&et.contains("jsPanel-resizeit-nw")&&(Oe=He*wt,He=Oe/wt),q=Ke+(je-Oe)*_e/Ce.x+$t,q<=ee&&q>=Ie&&q<=Ge&&(n.style.left=tt+(Oe-je)/Ce.x+Vt+"px"),q>=Ge&&(q=Ge),q>=ee&&(q=ee),q<=Ie&&(q=Ie),n.style.width=q+"px",k.aspectRatio&&(n.style.height=q/$e+"px"),Y=ot+(qe-He)*_e/Ce.y+Q,Y<=Ye&&Y>=ue&&Y<=nt&&(n.style.top=Le+(He-qe)/Ce.y+tn+"px"),Y>=nt&&(Y=nt),Y>=Ye&&(Y=Ye),Y<=ue&&(Y=ue),n.style.height=Y+"px",k.aspectRatio==="content"?n.style.width=(Y-mt-lt-ct-ne)*Ue+ct+ne+"px":k.aspectRatio==="panel"&&(n.style.width=Y*$e+"px")),window.getSelection().removeAllRanges();const Mt=window.getComputedStyle(n),Be={left:parseFloat(Mt.left),top:parseFloat(Mt.top),right:parseFloat(Mt.right),bottom:parseFloat(Mt.bottom),width:parseFloat(Mt.width),height:parseFloat(Mt.height)};k.resize.length&&F.processCallbacks(n,k.resize,!1,Be,fe)},F.pointermove.forEach(fe=>document.addEventListener(fe,se,!1)),window.addEventListener("mouseout",Ne,!1)})}),F.pointerup.forEach(function(Pe){document.addEventListener(Pe,Fe),window.removeEventListener("mouseout",Ne)}),m.disable&&(xe.style.pointerEvents="none")}),n},n.resizeit=m=>{const y=n.querySelectorAll(".jsPanel-resizeit-handle");return m==="disable"?y.forEach(C=>C.style.pointerEvents="none"):y.forEach(C=>C.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const m=n.getBoundingClientRect();return{x:m.width/n.offsetWidth,y:m.height/n.offsetHeight}},n.calcSizeFactors=()=>{const m=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(m.left)/(window.innerWidth-parseFloat(m.width)),n.vf=parseFloat(m.top)/(window.innerHeight-parseFloat(m.height));else if(n.parentElement){let y=n.parentElement.getBoundingClientRect();n.hf=parseFloat(m.left)/(y.width-parseFloat(m.width)),n.vf=parseFloat(m.top)/(y.height-parseFloat(m.height))}},n.saveCurrentDimensions=()=>{const m=window.getComputedStyle(n);n.currentData.width=m.width,n.currentData.height=m.height},n.saveCurrentPosition=()=>{const m=window.getComputedStyle(n);n.currentData.left=m.left,n.currentData.top=m.top},n.reposition=(...m)=>{let y=e.position,C=!0,g;return m.forEach(k=>{typeof k=="string"||typeof k=="object"?y=k:typeof k=="boolean"?C=k:typeof k=="function"&&(g=k)}),F.position(n,y),n.slaves&&n.slaves.size>0&&n.slaves.forEach(k=>k.reposition()),C&&n.saveCurrentPosition(),g&&g.call(n,n),n},n.repositionOnSnap=m=>{let y="0",C="0",g=F.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(m){case"left-top":y=g[3],C=g[0];break;case"right-top":y=-g[1],C=g[0];break;case"right-bottom":y=-g[1],C=-g[2];break;case"left-bottom":y=g[3],C=-g[2];break;case"center-top":y=g[3]/2-g[1]/2,C=g[0];break;case"center-bottom":y=g[3]/2-g[1]/2,C=-g[2];break;case"left-center":y=g[3],C=g[0]/2-g[2]/2;break;case"right-center":y=-g[1],C=g[0]/2-g[2]/2;break}F.position(n,m),F.setStyles(n,{left:`calc(${n.style.left} + ${y}px)`,top:`calc(${n.style.top} + ${C}px)`})},n.overlaps=(m,y,C)=>{let g=n.getBoundingClientRect(),k=getComputedStyle(n.parentElement),se=n.getScaleFactor(),he={top:0,right:0,bottom:0,left:0},q,Y=0,Ke=0,ot=0,Kt=0;n.options.container!=="window"&&y==="paddingbox"&&(he.top=parseInt(k.borderTopWidth,10)*se.y,he.right=parseInt(k.borderRightWidth,10)*se.x,he.bottom=parseInt(k.borderBottomWidth,10)*se.y,he.left=parseInt(k.borderLeftWidth,10)*se.x),typeof m=="string"?m==="window"?q={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:m==="parent"?q=n.parentElement.getBoundingClientRect():q=document.querySelector(m).getBoundingClientRect():q=m.getBoundingClientRect(),C&&(Y=C.touches?C.touches[0].clientX:C.clientX,Ke=C.touches?C.touches[0].clientY:C.clientY,ot=Y-q.left,Kt=Ke-q.top);let Ne=g.left<q.right&&g.right>q.left,Fe=g.top<q.bottom&&g.bottom>q.top;return{overlaps:Ne&&Fe,top:g.top-q.top-he.top,right:q.right-g.right-he.right,bottom:q.bottom-g.bottom-he.bottom,left:g.left-q.left-he.left,parentBorderWidth:he,panelRect:g,referenceRect:q,pointer:{clientX:Y,clientY:Ke,left:ot-he.left,top:Kt-he.top,right:q.width-ot-he.right,bottom:q.height-Kt-he.bottom}}},n.setSize=()=>{if(e.panelSize){const m=F.pOsize(n,e.panelSize);n.style.width=m.width,n.style.height=m.height}else if(e.contentSize){const m=F.pOsize(n,e.contentSize);n.content.style.width=m.width,n.content.style.height=m.height,n.style.width=m.width,n.content.style.width="100%"}return n},n.resize=(...m)=>{let y=window.getComputedStyle(n),C={width:y.width,height:y.height},g=!0,k;m.forEach(q=>{typeof q=="string"?C=q:typeof q=="object"?C=Object.assign(C,q):typeof q=="boolean"?g=q:typeof q=="function"&&(k=q)});let se=F.pOsize(n,C);n.style.width=se.width,n.style.height=se.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(q=>q.reposition()),g&&n.saveCurrentDimensions(),n.status="normalized";let he=n.controlbar.querySelector(".jsPanel-btn-smallify");return he&&(he.style.transform="rotate(0deg)"),k&&k.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=m=>{if(m.target===window){let y=n.status,C=e.onwindowresize,g,k;if(y==="maximized"&&C)n.maximize(!1,!0);else if(n.snapped&&y!=="minimized")n.snap(n.snapped,!0);else if(y==="normalized"||y==="smallified"||y==="maximized"){let se=typeof C;se==="boolean"?(g=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=g<=0?0:g+"px",k=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=k<=0?0:k+"px"):se==="function"?C.call(n,m,n):se==="object"&&(C.preset===!0&&(g=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=g<=0?0:g+"px",k=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=k<=0?0:k+"px"),C.callback.call(n,m,n))}else y==="smallifiedmax"&&C&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(se=>se.reposition())}},n.setControls=(m,y)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(C=>{const g=C.className.split("-"),k=g[g.length-1];n.getAttribute(`data-btn${k}`)!=="hidden"&&(C.style.display="block")}),m.forEach(C=>{const g=n.controlbar.querySelector(C);g&&(g.style.display="none")}),y&&y.call(n,n),n),n.setControlStatus=(m,y="enable",C)=>{const g=n.controlbar.querySelector(`.jsPanel-btn-${m}`);switch(y){case"disable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"disabled"),g.style.pointerEvents="none",g.style.opacity=.4,g.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"hidden"),g.style.display="none");break;case"show":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"enabled"),g.style.display="block",g.style.pointerEvents="auto",g.style.opacity=1,g.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.getAttribute(`data-btn${m}`)==="hidden"&&(g.style.display="block"),n.setAttribute(`data-btn${m}`,"enabled"),g.style.pointerEvents="auto",g.style.opacity=1,g.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(g),n.setAttribute(`data-btn${m}`,"removed");break}return C&&C.call(n,n),n},n.setControlSize=m=>{const y=m.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(g=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(k=>g.classList.remove(k)),g.classList.add(`jsPanel-btn-${y}`)}),y==="xl"?n.titlebar.style.fontSize="1.5rem":y==="lg"?n.titlebar.style.fontSize="1.25rem":y==="md"?n.titlebar.style.fontSize="1.05rem":y==="sm"?n.titlebar.style.fontSize=".9rem":y==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=m=>{if(n.options.headerControls.add){let k=n.options.headerControls.add;Array.isArray(k)||(k=[k]),k.forEach(se=>n.addControl(se))}let y=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(k=>{let se=k.className.match(/jsPanel-btn-[a-z\d]{3,}/i),he=se[0].substring(12);y.push(he)});const g=F.pOheaderControls(e.headerControls);return e.headerControls=g,y.forEach(k=>{g[k]&&n.setControlStatus(k,g[k])}),n.setControlSize(g.size),m&&m.call(n,n),n},n.setHeaderLogo=(m,y)=>{let C=[n.headerlogo],g=document.querySelector("#"+n.id+"-min");return g&&C.push(g.querySelector(".jsPanel-headerlogo")),typeof m=="string"?m.startsWith("<")?C.forEach(k=>k.innerHTML=m):C.forEach(k=>{F.emptyNode(k);let se=document.createElement("img");se.src=m,k.append(se)}):C.forEach(k=>{F.emptyNode(k),k.append(m)}),n.headerlogo.childNodes.forEach(k=>{k.nodeName&&k.nodeName==="IMG"&&k.setAttribute("draggable","false")}),y&&y.call(n,n),n},n.setHeaderRemove=m=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(y=>n.setAttribute(`data-btn${y}`,"removed")),m&&m.call(n,n),n),n.setHeaderTitle=(m,y)=>{let C=[n.headertitle],g=document.querySelector("#"+n.id+"-min");return g&&C.push(g.querySelector(".jsPanel-title")),typeof m=="string"?C.forEach(k=>k.innerHTML=m):typeof m=="function"?C.forEach(k=>{F.emptyNode(k),k.innerHTML=m()}):C.forEach(k=>{F.emptyNode(k),k.append(m)}),y&&y.call(n,n),n},n.setIconfont=(m,y=n,C)=>{if(m){let g,k;if(m==="fa"||m==="far"||m==="fal"||m==="fas"||m==="fad")g=[`${m} fa-window-close`,`${m} fa-window-maximize`,`${m} fa-window-restore`,`${m} fa-window-minimize`,`${m} fa-chevron-up`];else if(m==="material-icons")g=[m,m,m,m,m,m],k=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(m))g=[`custom-control-icon ${m[4]}`,`custom-control-icon ${m[3]}`,`custom-control-icon ${m[2]}`,`custom-control-icon ${m[1]}`,`custom-control-icon ${m[0]}`];else if(m==="bootstrap"||m==="glyphicon")g=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return y;y.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(se=>F.emptyNode(se).innerHTML="<span></span>"),Array.prototype.slice.call(y.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((se,he)=>{se.className=g[he],m==="material-icons"&&(se.textContent=k[he])})}return C&&C.call(y,y),y},n.addToolbar=(m,y,C)=>{if(m==="header"?m=n.headertoolbar:m==="footer"&&(m=n.footer),typeof y=="string")m.innerHTML=y;else if(Array.isArray(y))y.forEach(g=>{typeof g=="string"?m.innerHTML+=g:m.append(g)});else if(typeof y=="function"){let g=y.call(n,n);typeof g=="string"?m.innerHTML=g:m.append(g)}else m.append(y);return m.classList.add("active"),C&&C.call(n,n),n},n.addCloseControl=()=>{let m=document.createElement("button"),y=n.content.style.color;return m.classList.add("jsPanel-addCloseCtrl"),m.innerHTML=F.icons.close,m.style.color=y,n.options.rtl&&m.classList.add("rtl"),n.appendChild(m),F.pointerup.forEach(C=>{m.addEventListener(C,g=>{if(g.preventDefault(),g.button&&g.button>0)return!1;n.close(null,!0)})}),F.pointerdown.forEach(C=>{m.addEventListener(C,g=>g.preventDefault())}),n},n.addControl=m=>{if(!m.html)return n;m.position||(m.position=1);const y=n.controlbar.querySelectorAll(".jsPanel-btn").length;let C=document.createElement("button");C.innerHTML=m.html,C.className=`jsPanel-btn jsPanel-btn-${m.name} jsPanel-btn-${e.headerControls.size}`,C.style.color=n.header.style.color,m.position>y?n.controlbar.append(C):n.controlbar.insertBefore(C,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${m.position})`));const g=m.ariaLabel||m.name;return g&&C.setAttribute("aria-label",g),F.pointerup.forEach(k=>{C.addEventListener(k,se=>{if(se.preventDefault(),se.button&&se.button>0)return!1;m.handler.call(n,n,C)})}),m.afterInsert&&m.afterInsert.call(C,C),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(m=>{m.dir="rtl",e.rtl.lang&&(m.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),i.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),F.isIE){let m=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":m.forEach(y=>{y.style.height="34px"});break;case"xs":m.forEach(y=>{y.style.height="26px"});break;case"sm":m.forEach(y=>{y.style.height="30px"});break;case"lg":m.forEach(y=>{y.style.height="38px"});break;case"xl":m.forEach(y=>{y.style.height="42px"});break}}if(e.header==="auto-show-hide"){let m="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,m),this.setClass(n.content,m),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,F.setClass(n,m),F.remClass(n.content,m)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,F.remClass(n,m),F.setClass(n.content,m)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[m,y]of Object.entries(e.css))if(m==="panel")n.className+=` ${y}`;else{let C=n.querySelector(`.jsPanel-${m}`);C&&(C.className+=` ${y}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const m=e.contentOverflow.split(" ");m.length===1?n.content.style.overflow=m[0]:m.length===2&&(n.content.style.overflowX=m[0],n.content.style.overflowY=m[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let m=Object.assign({},F.defaultAutocloseConfig,e.autoclose);m.time&&typeof m.time=="number"&&(m.time+="ms");let y=n.progressbar.querySelector("div");y.addEventListener("animationend",C=>{C.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),m.progressbar&&(n.progressbar.classList.add("active"),m.background?F.colorNames[m.background]?n.progressbar.style.background="#"+F.colorNames[m.background]:n.progressbar.style.background=m.background:n.progressbar.classList.add("success-bg")),y.style.animation=`${m.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(f),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let m=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=m,e.dragit.snap===!0?(e.dragit.snap=F.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=m)}if(e.dragit?(["start","drag","stop"].forEach(m=>{e.dragit[m]?typeof e.dragit[m]=="function"&&(e.dragit[m]=[e.dragit[m]]):e.dragit[m]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",m=>{m.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(y=>{e.resizeit[y]?typeof e.resizeit[y]=="function"&&(e.resizeit[y]=[e.resizeit[y]]):e.resizeit[y]=[]}),n.sizeit(e.resizeit);let m;n.addEventListener("jspanelresizestart",y=>{y.panel===n&&(m=n.status)},!1),n.addEventListener("jspanelresizestop",y=>{y.panel===n&&(m==="smallified"||m==="smallifiedmax"||m==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(f),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(m=>{n.addEventListener(m,y=>{!y.target.closest(".jsPanel-btn-close")&&!y.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let m=e.onparentresize,y=typeof m,C=n.isChildpanel();if(C){const g=C.content;let k=[];n.parentResizeHandler=se=>{if(se.panel===C){k[0]=g.offsetWidth,k[1]=g.offsetHeight;let he=n.status,q,Y;he==="maximized"&&m?n.maximize():n.snapped&&he!=="minimized"?n.snap(n.snapped,!0):he==="normalized"||he==="smallified"||he==="maximized"?y==="function"?m.call(n,n,{width:k[0],height:k[1]}):y==="object"&&m.preset===!0?(q=(k[0]-n.offsetWidth)*n.hf,n.style.left=q<=0?0:q+"px",Y=(k[1]-n.offsetHeight)*n.vf,n.style.top=Y<=0?0:Y+"px",m.callback.call(n,n,{width:k[0],height:k[1]})):y==="boolean"&&(q=(k[0]-n.offsetWidth)*n.hf,n.style.left=q<=0?0:q+"px",Y=(k[1]-n.offsetHeight)*n.vf,n.style.top=Y<=0?0:Y+"px"):he==="smallifiedmax"&&m&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(m=>m.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(m=>m.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(m=>m.call(n,n)):t.call(n,n)),document.dispatchEvent(a),n}};const Ra=/\$([A-Za-z_][A-Za-z0-9_]*)/g;function Po(...e){const t=new Set;for(const r of e)if(r)for(const i of r.matchAll(Ra))t.add(i[1]);return[...t]}function wh(e,t,r){return e.replace(Ra,(i,n)=>{const a=r[n];if(!a)return"";const c=t.data[a];return c==null?"":String(c)})}function To(e){return e==null||e===""}function vh(e,t){const r=Object.entries(t).filter(([,i])=>i!=null&&String(i).trim()!=="");return r.length===0?e:e.filter(i=>r.every(([n,a])=>String(i.data[n]??"").toLowerCase().includes(String(a).toLowerCase())))}function xh(e,t,r=!0){if(!t)return e;const i=r?1:-1;return[...e].sort((n,a)=>{const c=n.data[t],d=a.data[t],f=To(c),w=To(d);if(f||w)return f===w?0:f?1:-1;const _=Number(c),x=Number(d);return!Number.isNaN(_)&&!Number.isNaN(x)?(_-x)*i:String(c).localeCompare(String(d),void 0,{numeric:!0,sensitivity:"base"})*i})}function $h(e,t){return xh(vh(e,t.filters??{}),t.sortColumn,t.sortAsc??!0)}function kh(e){return!!e&&e.trim().length>0}var Ch=Object.defineProperty,Eh=Object.getOwnPropertyDescriptor,Qn=(e,t,r,i)=>{for(var n=i>1?void 0:i?Eh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Ch(t,r,n),n};function Sh(e){(Dt.instance??_h()).open(e)}function _h(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function Do(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let Dt=class extends Qe{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()}}connectedCallback(){super.connectedCallback(),Dt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Dt.instance===this&&(Dt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(e){this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await ke(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(r=>r.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((r,i)=>r.name.localeCompare(i.name))}openInstance(e){document.dispatchEvent(new CustomEvent("easydb:open-view",{detail:{instanceId:e}})),this.close()}async editInstance(e){const r=await(await ke()).store.viewTemplates.findOne(e.templateId),i=r?Po(r.headerHtml,r.rowHtml,r.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:r?.name??"template",name:e.name,tokens:i,mapping:{...e.mapping}},this.mode="instance"}async deleteInstance(e){await(await ke()).store.viewInstances.remove(e),document.dispatchEvent(new CustomEvent("easydb:close-view",{detail:{instanceId:e}})),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await ke();e.id?await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}):await t.store.viewTemplates.insert({id:Do(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}),await this.refresh(),this.mode="list"}useTemplate(e){const t=Po(e.headerHtml,e.rowHtml,e.footerHtml),r={};for(const i of t)r[i]=this.autoMap(i);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:r},this.mode="instance"}autoMap(e){const t=e.toLowerCase();return this.columns.find(i=>i.field.toLowerCase()===t||(i.label??"").toLowerCase()===t)?.field??""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await ke();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const r=this.columns.filter(n=>!n.hidden).map(n=>n.field),i={id:Do(),workspaceId:t.workspaceId,tableId:this.tableId,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:r,mapping:{...e.mapping},updatedAt:Date.now()};await t.store.viewInstances.insert(i),this.openInstance(i.id)}renderList(){return M`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>M`<li>
                <span class="name">${e.name}</span>
                <button class="mini" @click=${()=>this.openInstance(e.id)}>Open</button>
                <button class="mini" @click=${()=>void this.editInstance(e)}>Edit</button>
                <button class="mini danger" @click=${()=>void this.deleteInstance(e.id)}>
                  Delete
                </button>
              </li>`)}
        </ul>
      </div>
      <div class="section">
        <h3>View templates (workspace)</h3>
        <ul class="list">
          ${this.templates.map(e=>M`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?M`<span class="badge">built-in</span>`:Se}
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
    `}renderTemplate(){const e=this.tDraft,t=r=>i=>{this.tDraft={...e,[r]:i.target.value}};return M`
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
    `}renderInstance(){const e=this.iDraft;return M`
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
        ${e.tokens.length===0?M`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>M`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${r=>this.iDraft={...e,mapping:{...e.mapping,[t]:r.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(r=>M`<option value=${r.field} ?selected=${e.mapping[t]===r.field}>
                          ${r.label||r.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">
        ${e.id?M`Editing name and column mapping. The snapshotted sort, filters and visible columns
            are kept.`:M`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?M`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="button" class="primary" @click=${()=>void this.saveTemplate()}>
              Save
            </button>`:this.mode==="instance"?M`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="button" class="primary" @click=${()=>void this.saveInstance()}>
                ${this.iDraft?.id?"Save":"Create view"}
              </button>`:M`<button type="button" class="ghost" @click=${this.close}>Close</button>`;return M`
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
    `}};Dt.instance=null;Dt.styles=[Zt,Ze`
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
    `];Qn([H()],Dt.prototype,"mode",2);Qn([H()],Dt.prototype,"instances",2);Qn([H()],Dt.prototype,"templates",2);Qn([H()],Dt.prototype,"tDraft",2);Qn([H()],Dt.prototype,"iDraft",2);Dt=Qn([at("views-dialog")],Dt);var Ah=Object.defineProperty,Ph=Object.getOwnPropertyDescriptor,$n=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ph(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Ah(t,r,n),n};let Jt=class extends Qe{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.rows=[],this.allRows=[]}async connectedCallback(){super.connectedCallback(),await this.load()}disconnectedCallback(){super.disconnectedCallback(),this.rowsUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async load(){if(!this.viewInstanceId)return;const e=await ke(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const r=await e.store.tables.findOne(t.tableId),i=new Map((r?.columns??[]).map(a=>[a.field,a]));this.columns=t.visibleColumns.map(a=>i.get(a)??{field:a,label:a,type:"string"});const n=e.store.rows(t.tableId);this.rowsUnsub=n.subscribe(a=>{this.allRows=a,this.recompute()}),this.allRows=await n.find(),this.recompute(),this.loaded=!0}recompute(){this.instance&&(this.rows=$h(this.allRows,this.instance))}renderTable(){return this.rows.length===0?M`<div class="vw-empty">No rows.</div>`:M`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>M`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>M`<tr>
                ${this.columns.map(t=>{const r=e.data[t.field];return M`<td>${r==null?"":String(r)}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}render(){if(!this.loaded)return M`<div class="vw-loading">Loading…</div>`;if(this.error)return M`<div class="vw-empty">${this.error}</div>`;const e=this.template;if(!e)return M`<div class="vw-empty">This view's template is missing.</div>`;if(kh(e.rowHtml)){const t=this.instance?.mapping??{},r=this.rows.map(n=>wh(e.rowHtml,n,t)).join(""),i=(e.headerHtml??"")+r+(e.footerHtml??"");return M`<div class="vw-root">${qi(i)}</div>`}return M`<div class="vw-root">
      ${e.headerHtml?.trim()?M`<div class="vw-html">${qi(e.headerHtml)}</div>`:Se}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?M`<div class="vw-html">${qi(e.footerHtml)}</div>`:Se}
    </div>`}};Jt.styles=Ze`
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
  `;$n([Ut({type:String})],Jt.prototype,"viewInstanceId",2);$n([H()],Jt.prototype,"loaded",2);$n([H()],Jt.prototype,"error",2);$n([H()],Jt.prototype,"instance",2);$n([H()],Jt.prototype,"template",2);$n([H()],Jt.prototype,"columns",2);$n([H()],Jt.prototype,"rows",2);Jt=$n([at("view-window")],Jt);const Th={name:"views",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",optional:!0},Dh="grid_view",jo="RSS Feed",jh='<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',Rh=['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>',"</div>"].join(""),Oh="</div>";function Fh(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:Dh,tooltip:"Views — display this table through a template",onClick:(t,{tableId:r})=>Sh(r)}),document.addEventListener("easydb:open-view",t=>{const r=t.detail?.instanceId;r&&Ro(e,r)}),document.addEventListener("easydb:close-view",t=>{const r=t.detail?.instanceId;r&&Oo(r)}),document.addEventListener("easydb:reload-view",t=>{const r=t.detail?.instanceId;r&&Kn.has(r)&&(Oo(r),Ro(e,r))})}async function Ih(e){await zh(e)}async function zh(e){const t=e.workspaceId();if(!t)return;const r=`views:seeded:rss:${t}`;if((await e.store.settings.findOne(r))?.value)return;(await e.store.viewTemplates.find({workspaceId:t})).some(a=>a.builtin&&a.name===jo)||await e.store.viewTemplates.insert({id:Mh(),workspaceId:t,name:jo,headerHtml:jh,rowHtml:Rh,footerHtml:Oh,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({key:r,value:!0})}const Kn=new Map;function Lh(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}async function Ro(e,t){const r=Kn.get(t);if(r){try{r.front?.()}catch{}return}const i=await e.store.viewInstances.findOne(t);if(!i)return;const n=document.createElement("view-window");n.viewInstanceId=t,n.style.height="100%";const a=i.windowGeometry,c=`view-panel-${Bh(t)}`,d=a?{panelSize:`${a.w} ${a.h}`}:{contentSize:"480 520"},f=a?{my:"left-top",at:"left-top",offsetX:a.x,offsetY:a.y}:{my:"center-top",at:"center-top",offsetY:60},w=F.create({id:c,container:Lh(),headerTitle:i.name,theme:"#0891b2",content:n,...d,position:f,dragit:{containment:!1,stop:()=>void Fo(e,t,c)},resizeit:{containment:!1,stop:()=>void Fo(e,t,c)},onclosed:()=>{Kn.delete(t)}});Kn.set(t,w)}function Oo(e){const t=Kn.get(e);if(t){Kn.delete(e);try{t.close?.()}catch{}}}async function Fo(e,t,r){const i=document.getElementById(r);if(i)try{await e.store.viewInstances.patch(t,{windowGeometry:{x:i.offsetLeft,y:i.offsetTop,w:i.offsetWidth,h:i.offsetHeight,z:0,minimized:!1,maximized:!1},updatedAt:Date.now()})}catch{}}function Bh(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Mh(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Nh=Object.freeze(Object.defineProperty({__proto__:null,init:Fh,load:Ih,meta:Th},Symbol.toStringTag,{value:"Module"})),Oa=[$d,_c,Xc,Vu,jc,Gu,rd,hd,wd,Ed,Id,Md,Hd,Qd,ph,ja,Nh],qh=Oa;function rs(e){return`builtin:${e}`}async function Uh(e){const t=[];for(const r of Oa)if(!await Hh(e,r)){t.push(r);try{await r.init?.(e)}catch(i){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"init",error:i})}}return async()=>{for(const r of t)try{await r.load?.(e)}catch(i){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"load",error:i})}}}async function Hh(e,t){if(!t.meta?.optional)return!1;const r=t.meta.name;return r?(await e.store.plugins.findOne(rs(r)))?.enabled===!1:!1}async function Wh(e){const t=e.workspaceId();if(!t)return async()=>{};const i=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const a of i)try{const c=await e.store.plugins.findOne(a);if(c&&c.enabled===!1)continue;let d=c?.cachedBody??"";if(d)Kh(e,a,d);else{try{d=await Fa(a)}catch(_){await e.store.plugins.upsert({url:a,enabled:c?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${_.message}`}),e.events.emit("plugin:error",{url:a,phase:"fetch",error:_});continue}await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),cachedBody:d})}const f=new Blob([d],{type:"text/javascript"}),w=URL.createObjectURL(f);try{const _=await import(w);await _.init?.(e),n.push({url:a,mod:_})}finally{setTimeout(()=>URL.revokeObjectURL(w),5e3)}}catch(c){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`init: ${c.message}`}),e.events.emit("plugin:error",{url:a,phase:"init",error:c})}return async()=>{for(const{url:a,mod:c}of n)try{await c.load?.(e)}catch(d){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`load: ${d.message}`}),e.events.emit("plugin:error",{url:a,phase:"load",error:d})}}}async function Fa(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function Kh(e,t,r){return(async()=>{try{const i=await Fa(t);if(i===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:i})}catch{}})()}let Vi=null;function ke(){return Vi||(Vi=Vh()),Vi}async function Vh(){const e=await Vl(),t=Gl(e),r=Jl(),i=sc(),n=new Map;t.tables.subscribe(U=>{n.clear();for(const ae of U)n.set(ae.id,ae)});const a={...t.tables,insert:U=>(n.set(U.id,U),t.tables.insert(U)),upsert:U=>(n.set(U.id,U),t.tables.upsert(U))};let c=null;const d={get backend(){if(!c)throw new Error("[host] row-source ctx used before app init completed");return c.backend},events:r,settings:t.settings,workspaceId:()=>x},f=Ql({base:{...t,tables:a},providers:i.rowSources,tableById:U=>n.get(U),ctx:d}),w=Yh(),_=await f.workspaces.find();let x;if(w){const U=Qh(w),ae=_.find(de=>de.id===U||de.name===w);ae?x=ae.id:x=(await f.workspaces.insert({id:U,name:w,createdAt:Date.now(),pluginUrls:[]})).id}else{const U=Xh(),ae=U?_.find(de=>de.id===U):void 0;ae?x=ae.id:_.length>0?x=_[0].id:x=(await f.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}Gh(x);const O=lc({store:f,events:r,registries:i,workspaceId:()=>x});c=O,r.on("import:after",({source:U,tableId:ae,rowCount:de})=>{U!=="datasette"&&O.store.tables.findOne(ae).then(we=>{O.ui.dialogs.toast(`Imported ${de} row${de===1?"":"s"} into "${we?.name??ae}".`,{kind:"success",title:U.toUpperCase()+" import"})})}),r.on("plugin:error",({url:U,phase:ae,error:de})=>{O.ui.dialogs.toast(`[${ae}] ${de?.message??String(de)}`,{kind:"error",title:`Plugin: ${U}`})});const W=await Uh(O),L=await Wh(O);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:x}),await W(),await L()}),{store:f,events:r,workspaceId:x,registries:i,api:O}}function Yh(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const Ia="eda:lastWorkspaceId";function Xh(){try{return globalThis.localStorage?.getItem(Ia)??null}catch{return null}}function Gh(e){try{globalThis.localStorage?.setItem(Ia,e)}catch{}}function Qh(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var Jh=Object.defineProperty,Zh=Object.getOwnPropertyDescriptor,hi=(e,t,r,i)=>{for(var n=i>1?void 0:i?Zh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Jh(t,r,n),n};let Yn=class extends Qe{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=gr(this.text)}catch(c){this.errorMsg=`Couldn't parse the CSV: ${c.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const i=await ke(),n=crypto.randomUUID();await i.store.tables.insert({id:n,workspaceId:i.workspaceId,name:t,code:ef(t),columns:r.columns,view:"table",updatedAt:Date.now()});const a=r.rows.map(c=>({id:crypto.randomUUID(),tableId:n,data:c,updatedAt:Date.now()}));await i.store.rows(n).bulkInsert(a),i.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return M`
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
            ${this.errorMsg?M`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};Yn.styles=[Zt,Ze`
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
    `];hi([H()],Yn.prototype,"name",2);hi([H()],Yn.prototype,"text",2);hi([H()],Yn.prototype,"errorMsg",2);Yn=hi([at("csv-paste-dialog")],Yn);function ef(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var tf=Object.defineProperty,nf=Object.getOwnPropertyDescriptor,ms=(e,t,r,i)=>{for(var n=i>1?void 0:i?nf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&tf(t,r,n),n};const rf=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let Qt=class extends Qe{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),Qt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Qt.instance===this&&(Qt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:rf,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return M`
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
    `}};Qt.instance=null;Qt.styles=[Zt,Ze`
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
    `];ms([H()],Qt.prototype,"text",2);ms([H()],Qt.prototype,"columnLabel",2);Qt=ms([at("script-editor-dialog")],Qt);var sf=Object.defineProperty,of=Object.getOwnPropertyDescriptor,Wt=(e,t,r,i)=>{for(var n=i>1?void 0:i?of(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&sf(t,r,n),n};const af=["string","number","boolean","date","datetime"];let Rt=class extends Qe{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.columns=[],this.errorMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(e){this.errorMsg="";const t=await ke();if(this.rendererOptions=[...t.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=t.events.on("app:ready",()=>{this.rendererOptions=[...t.registries.cellRenderers.keys()].sort()}),e){const r=await ke(),i=await r.store.tables.findOne(e);if(!i)return;this.mode="edit",this.editTableId=e,this.name=i.name,this.columns=i.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,origField:a.field}));const n=await r.store.rows(e).find();this.previewRows=n.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const i=[...this.columns],[n]=i.splice(e,1);i.splice(r,0,n),this.columns=i}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientY<i.top+i.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,i=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!i)return;const n=[...this.columns],[a]=n.splice(r,1);let c=t+(r<t?-1:0);i==="after"&&(c+=1),n.splice(c,0,a),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,i)=>i===e?{...r,...t}:r)}async editScript(e){const t=Qt.instance;if(!t)return;const r=this.columns[e];if(!r)return;const i=await t.open(r.script??"",r.label||r.field);i!==null&&this.patchColumn(e,{script:i.trim()?i:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const r=new Set;for(const a of this.columns){const c=a.field.trim();if(!c){this.errorMsg="Column field names cannot be empty.";return}if(r.has(c)){this.errorMsg=`Duplicate column field: ${c}`;return}r.add(c)}const i=await ke(),n=this.columns.map(a=>{const c={field:a.field.trim(),label:a.label.trim()||a.field.trim(),type:a.type};return a.renderer&&(c.renderer=a.renderer),a.script&&(c.script=a.script),a.max!=null&&a.max>0&&(c.max=a.max),a.unique&&(c.unique=!0),a.notnull&&(c.notnull=!0),a.hidden&&(c.hidden=!0),c});if(this.mode==="edit"&&this.editTableId){const a=this.editTableId,c=await i.store.tables.findOne(a),d=new Map((c?.columns??[]).map(w=>[w.field,w])),f=n.filter(w=>{const _=d.get(w.field);return w.unique&&!_?.unique||w.notnull&&!_?.notnull||w.max&&w.max>0&&w.max!==_?.max});if(f.length>0){const w=await i.store.rows(a).find(),_=uf(f,w);if(_.length>0){this.errorMsg=`Cannot save: ${_.length} existing ${_.length===1?"row violates":"rows violate"} the new constraints.
${_.slice(0,5).join(`
`)}${_.length>5?`
…and ${_.length-5} more.`:""}`;return}}await i.store.tables.patch(a,{name:t,columns:n,updatedAt:Date.now()})}else await i.store.tables.insert({id:hf(),workspaceId:i.workspaceId,name:t,code:df(t),columns:n,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return M`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const t of this.columns){if(!t.unique)continue;const r=new Set,i=new Set;for(const n of this.previewRows){const a=n.data[t.field];a==null||a===""||(r.has(a)&&i.add(a),r.add(a))}e.set(t.field,i)}return M`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${this.columns.map(t=>M`<th title=${t.field}>${t.label||t.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(t=>M`
                <tr>
                  ${this.columns.map(r=>{const i=t.data[r.field],n=cf(r,i,e.get(r.field));return M`<td
                      class=${n?"violation":""}
                      title=${n??""}
                    >${lf(i)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return M`
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
            ${this.columns.map((r,i)=>{const n=this.dragSrcIdx===i,a=this.dropTargetIdx===i,c=a&&this.dropEdge==="before"?" drop-before":a&&this.dropEdge==="after"?" drop-after":"";return M`
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
                    ${af.map(d=>M`<option value=${d} ?selected=${d===r.type}>${d}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${d=>{const f=d.target.value;this.patchColumn(i,{renderer:f||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(d=>M`<option value=${d} ?selected=${d===r.renderer}>${d}</option>`)}
                  </select>
                  ${r.renderer==="script"?M`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(i)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:M`<span></span>`}
                  <input
                    type="number"
                    min="0"
                    placeholder="—"
                    title="Max length (strings) or max value (numbers)"
                    .value=${r.max==null?"":String(r.max)}
                    @input=${d=>{const f=d.target.value;this.patchColumn(i,{max:f===""?void 0:Number(f)})}}
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

          ${this.renameDetected()?M`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?M`<div class="error">${this.errorMsg}</div>`:""}
          ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};Rt.styles=[ln,Zt,Ze`
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
  `];Wt([H()],Rt.prototype,"mode",2);Wt([H()],Rt.prototype,"editTableId",2);Wt([H()],Rt.prototype,"name",2);Wt([H()],Rt.prototype,"columns",2);Wt([H()],Rt.prototype,"errorMsg",2);Wt([H()],Rt.prototype,"dragSrcIdx",2);Wt([H()],Rt.prototype,"dropTargetIdx",2);Wt([H()],Rt.prototype,"dropEdge",2);Wt([H()],Rt.prototype,"previewRows",2);Wt([H()],Rt.prototype,"rendererOptions",2);Rt=Wt([at("new-table-dialog")],Rt);function lf(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function cf(e,t,r){const i=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&i)return`${e.label}: empty`;if(i)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!i){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function uf(e,t){const r=[];for(const i of e)if(i.notnull&&t.forEach((n,a)=>{const c=n.data[i.field];(c==null||typeof c=="string"&&c.trim()==="")&&r.push(`Row ${a+1}: ${i.label} is empty.`)}),i.max!=null&&i.max>0&&t.forEach((n,a)=>{const c=n.data[i.field];typeof c=="string"&&c.length>i.max?r.push(`Row ${a+1}: ${i.label} length ${c.length} > max ${i.max}.`):typeof c=="number"&&c>i.max&&r.push(`Row ${a+1}: ${i.label} value ${c} > max ${i.max}.`)}),i.unique){const n=new Map;t.forEach((a,c)=>{const d=a.data[i.field];d==null||d===""||(n.has(d)?r.push(`Row ${c+1}: ${i.label} duplicates row ${n.get(d)+1} ("${String(d)}").`):n.set(d,c))})}return r}function df(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function hf(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var ff=Object.defineProperty,pf=Object.getOwnPropertyDescriptor,Lt=(e,t,r,i)=>{for(var n=i>1?void 0:i?pf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&ff(t,r,n),n};let kt=class extends Qe{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.builtinNames=[],this.optionalBuiltins=[],this.dirtyBuiltins=!1,this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(){const e=await ke(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(a=>[a.url,a]));const i=[],n=[];for(const a of qh){const c=a.meta?.name;if(c)if(a.meta?.optional){const d=this.records.get(rs(c));n.push({name:c,...a.meta?.description?{description:a.meta.description}:{},...a.meta?.author?{author:a.meta.author}:{},enabled:d?.enabled!==!1})}else i.push(c)}this.builtinNames=i,this.optionalBuiltins=n,this.dirtyBuiltins=!1,this.addUrl="",await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(),this.refreshServerRegistry()}async refreshCatalog(){const e=new URL("/plugins/catalog.json",location.origin).toString();try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),i=Array.isArray(r.plugins)?r.plugins:[];this.catalog=i.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await ke()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const a=await fetch(n,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const c=await a.json(),d=Array.isArray(c.plugins)?c.plugins:[];this.serverCatalog=d.map(f=>({...f,absUrl:new URL(f.url,n).toString()})),this.serverCatalogError=null}catch(a){this.serverCatalog=[],this.serverCatalogError=a.message}}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await ke()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await ke();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await ke(),i=this.records.get(e);await r.store.plugins.upsert({...i??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...i,url:e,enabled:t,lastFetched:i?.lastFetched??0}))}async removePlugin(e){const t=await ke();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await ke(),i=rs(e),n=this.records.get(i);await r.store.plugins.upsert({...n??{url:i,lastFetched:0},url:i,enabled:t,lastFetched:n?.lastFetched??0}),this.optionalBuiltins=this.optionalBuiltins.map(a=>a.name===e?{...a,enabled:t}:a),this.dirtyBuiltins=!0}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await ke();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const i=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:i});const n=new Blob([i],{type:"text/javascript"}),a=URL.createObjectURL(n);try{const d=await import(a);await d.init?.(t.api),await d.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(a),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const c=await t.store.plugins.find();this.records=new Map(c.map(d=>[d.url,d])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}render(){return M`
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
            ${this.catalog.length>0?M`<div class="section-h">Available from this host</div>`:""}
            ${this.catalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return M`
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
            ${this.catalogError?M`<div class="meta err">
                  Host catalog unavailable: ${this.catalogError}
                </div>`:""}

            ${this.serverCatalog.length>0||this.serverCatalogError?M`<div class="section-h">From server</div>`:""}
            ${this.serverCatalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return M`
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
            ${this.serverCatalogError?M`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            ${this.optionalBuiltins.length>0?M`<div class="section-h">Optional built-ins</div>`:""}
            ${this.optionalBuiltins.map(e=>M`
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
            ${this.builtinNames.map(e=>M`
                <div class="row builtin">
                  <span class="mi sm">extension</span>
                  <div>
                    <div>${e}</div>
                    <div class="meta">Built-in</div>
                  </div>
                  <span class="meta">always on</span>
                </div>
              `)}

            ${this.urls.length>0?M`<div class="section-h">Installed (by URL)</div>`:""}
            ${this.urls.map(e=>{const t=this.records.get(e),r=t?.lastError?" error":"",i=t?.lastFetched?new Date(t.lastFetched).toLocaleString():"never";return M`
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
    `}};kt.styles=[ln,Zt,Ze`
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
    `];Lt([H()],kt.prototype,"urls",2);Lt([H()],kt.prototype,"records",2);Lt([H()],kt.prototype,"addUrl",2);Lt([H()],kt.prototype,"builtinNames",2);Lt([H()],kt.prototype,"optionalBuiltins",2);Lt([H()],kt.prototype,"dirtyBuiltins",2);Lt([H()],kt.prototype,"catalog",2);Lt([H()],kt.prototype,"catalogError",2);Lt([H()],kt.prototype,"serverCatalog",2);Lt([H()],kt.prototype,"serverCatalogError",2);Lt([H()],kt.prototype,"installing",2);kt=Lt([at("plugin-manager-dialog")],kt);const mf=.25,gf=4;function bf(e){return Math.min(gf,Math.max(mf,e))}function Io(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const cr={x:0,y:0,scale:1};function zo(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function yf(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function wf(e,t){let r={...cr};t.style.transformOrigin="0 0";const i=new Set,n=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`;for(const y of i)y({...r})};let a="none",c={...cr},d=0,f=0,w=0,_=0,x=0,O=0;const W=(y,C)=>{const g=e.getBoundingClientRect();return{x:y-g.left,y:C-g.top}},L=y=>{if(y.touches.length===2){a="pinch",c={...r};const[C,g]=[y.touches[0],y.touches[1]];w=zo(C,g)||1;const k=W((C.clientX+g.clientX)/2,(C.clientY+g.clientY)/2);_=(k.x-r.x)/r.scale,x=(k.y-r.y)/r.scale,y.preventDefault();return}if(y.touches.length===1&&!yf(y.target)){const C=y.timeStamp;if(C-O<300){r={...cr},n(),O=0,a="none",y.preventDefault();return}O=C,a="pan",c={...r},d=y.touches[0].clientX,f=y.touches[0].clientY}else a="none"},U=y=>{if(a==="pan"&&y.touches.length===1){const C=y.touches[0];r=Io(c,C.clientX-d,C.clientY-f),n(),y.preventDefault()}else if(a==="pinch"&&y.touches.length>=2){const[C,g]=[y.touches[0],y.touches[1]],k=bf(c.scale*(zo(C,g)/w)),se=W((C.clientX+g.clientX)/2,(C.clientY+g.clientY)/2);r={x:se.x-_*k,y:se.y-x*k,scale:k},n(),y.preventDefault()}},ae=y=>{y.touches.length===0?a="none":y.touches.length===1&&a==="pinch"&&(a="pan",c={...r},d=y.touches[0].clientX,f=y.touches[0].clientY)};let de=!1,we={...cr},ze=0,ie=0,ce=!1;const ve=(y,C)=>{const g=e.getBoundingClientRect();return y>=g.left&&y<=g.right&&C>=g.top&&C<=g.bottom},Re=y=>{if(!de)return;const C=y.clientX-ze,g=y.clientY-ie;!ce&&Math.hypot(C,g)<4||(ce=!0,document.body.style.cursor="grabbing",r=Io(we,C,g),n(),y.preventDefault())},Me=()=>{de&&(de=!1,document.body.style.cursor="",window.removeEventListener("mousemove",Re,!0),window.removeEventListener("mouseup",xt,!0))};function xt(){Me()}const Ot=y=>{y.button===2&&ve(y.clientX,y.clientY)&&(de=!0,ce=!1,we={...r},ze=y.clientX,ie=y.clientY,window.addEventListener("mousemove",Re,!0),window.addEventListener("mouseup",xt,!0))},m=y=>{ce&&(y.preventDefault(),ce=!1)};return e.addEventListener("touchstart",L,{passive:!1}),e.addEventListener("touchmove",U,{passive:!1}),e.addEventListener("touchend",ae),e.addEventListener("touchcancel",ae),window.addEventListener("mousedown",Ot,!0),window.addEventListener("contextmenu",m,!0),{snapshot:()=>({...r}),reset:()=>{r={...cr},n()},restore:y=>{r={...y},n()},subscribe:y=>(i.add(y),()=>i.delete(y)),dispose:()=>{e.removeEventListener("touchstart",L),e.removeEventListener("touchmove",U),e.removeEventListener("touchend",ae),e.removeEventListener("touchcancel",ae),window.removeEventListener("mousedown",Ot,!0),window.removeEventListener("contextmenu",m,!0),Me()}}}var vf=Object.defineProperty,xf=Object.getOwnPropertyDescriptor,vr=(e,t,r,i)=>{for(var n=i>1?void 0:i?xf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&vf(t,r,n),n};let zn=class extends Qe{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return M`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return M`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};zn.styles=[ln,Ze`
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
    `];vr([Ut({type:String})],zn.prototype,"tableId",2);vr([H()],zn.prototype,"query",2);vr([H()],zn.prototype,"open",2);vr([Xn("input")],zn.prototype,"inputEl",2);zn=vr([at("panel-search")],zn);var $f=Object.defineProperty,kf=Object.getOwnPropertyDescriptor,Jn=(e,t,r,i)=>{for(var n=i>1?void 0:i?kf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&$f(t,r,n),n};let vn=class extends Qe{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1}async connectedCallback(){super.connectedCallback();const e=await ke();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(r=>r.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await ke();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await ke(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const i of t.columns)r[i.field]=Cf(i);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}async runTableButton(e){const t=await ke();try{await Promise.resolve(e.onClick(t.api,{tableId:this.tableId}))}catch(r){console.error(`[table-button:${e.id}]`,r)}}render(){return M`
      <button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
        <span class="mi sm">add</span>
      </button>
      <button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>M`<button
              title=${e.tooltip??e.label}
              aria-label=${e.label}
              @click=${()=>this.runTableButton(e)}
            >
              ${e.icon?M`<span class="mi sm">${e.icon}</span>`:M`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};vn.styles=[ln,Ze`
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
      .spacer {
        flex: 1;
      }
      .count {
        color: #6b7280;
      }
      .mi.sm {
        font-size: 0.95rem;
      }
    `];Jn([Ut({type:String})],vn.prototype,"tableId",2);Jn([Ut({type:Boolean})],vn.prototype,"active",2);Jn([H()],vn.prototype,"rowCount",2);Jn([H()],vn.prototype,"tableButtons",2);Jn([H()],vn.prototype,"table",2);vn=Jn([at("panel-footer")],vn);function Cf(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function Ef(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Sf(e){const t=document.querySelector("app-shell")?.shadowRoot,r=t?.querySelector("header"),i=t?.querySelector("footer");r&&(e.style.top=`${r.offsetHeight}px`),i&&(e.style.bottom=`${i.offsetHeight}px`)}const Rn=new Map,Xr=new Set,za=new Set;let Lo=!1,Gr=null;async function _f(){if(Lo)return;Lo=!0;const e=await ke(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");if(t&&r){Gr=wf(t,r);const n=()=>Sf(t);n(),window.addEventListener("resize",n);const a=document.querySelector("app-shell")?.shadowRoot,c=a?.querySelector("header"),d=a?.querySelector("footer");if(typeof ResizeObserver<"u"&&(c||d)){const f=new ResizeObserver(n);c&&f.observe(c),d&&f.observe(d)}}const i=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);i.sort(Bo);for(const n of i)Mo(n,e);e.store.tables.subscribe(n=>{const a=n.filter(f=>f.workspaceId===e.workspaceId),c=new Set(a.map(f=>f.id));for(const[f,w]of Rn)if(!c.has(f)){Rn.delete(f),Xr.add(f),za.add(f);try{w.status!=="closed"&&w.close()}catch{}}const d=a.filter(f=>!Rn.has(f.id)).sort(Bo);for(const f of d)Mo(f,e)})}function Bo(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const Af=200,Pf=100,Tf=720,Df=360;function jf(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<Af||e.h<Pf?null:{...e}}function Mo(e,t){const r=`panel-${La(e.id)}`,i=Ef(),n=jf(e.windowGeometry),a=n?.minimized===!0,c=()=>{const C=document.createElement("data-table");return C.tableId=e.id,C.style.height="100%",C},d=a?document.createElement("div"):c();let f=a?null:d,w=e.name,_=null;const x=C=>{typeof Me.setHeaderTitle=="function"&&Me.setHeaderTitle(`${w} (${C})`)},O=()=>{_||(_=t.store.rows(e.id).subscribe(C=>x(C.length)))},W=()=>{_?.(),_=null},L=()=>{W(),de.active=!1,f?.remove(),f=null},U=()=>{if(f)return;const C=document.getElementById(r)?.querySelector(".jsPanel-content");if(!C)return;C.replaceChildren();const g=c();C.appendChild(g),f=g,de.active=!0,O()},ae=document.createElement("panel-search");ae.tableId=e.id;const de=document.createElement("panel-footer");de.tableId=e.id,de.active=!a;let we=null;const ze=C=>{const g=document.getElementById(r);g&&(g.style.transformOrigin="0 0",g.style.transform=`translate(${-C.x/C.scale}px, ${-C.y/C.scale}px) scale(${1/C.scale})`)},ie=()=>{we||!Gr||(ze(Gr.snapshot()),we=Gr.subscribe(ze))},ce=()=>{we?.(),we=null;const C=document.getElementById(r);C&&(C.style.transform="",C.style.transformOrigin="")},ve=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:Of(),Re=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:`${Tf} ${Df}`},Me=F.create({id:r,container:i,headerTitle:e.name,footerToolbar:de,theme:"primary",content:d,...Re,position:ve,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>Yi(e.id,t)},resizeit:{containment:!1,stop:()=>Yi(e.id,t)},onfronted:()=>Ff(e.id,t),onbeforeclose:()=>Xr.has(e.id)?!0:((async()=>await t.api.ui.dialogs.confirm(e.source?`Remove the live table "${e.name}"? Its data stays on the Datasette server.`:`Delete table "${e.name}" and all its rows?`,"Confirm")&&(Xr.add(e.id),Rn.get(e.id)?.close()))(),!1),onclosed:async()=>{Rn.delete(e.id),Xr.delete(e.id),!za.delete(e.id)&&await If(e.id,t)},onstatuschange:C=>{C.status==="minimized"?L():(C.status==="normalized"||C.status==="maximized")&&U(),C.status==="maximized"?ie():ce(),Yi(e.id,t)}});Rn.set(e.id,Me);const xt=document.getElementById(r),Ot=xt?.querySelector(".jsPanel-controlbar");Ot&&Ot.prepend(ae);const m=xt?.querySelector(".jsPanel-titlebar");m&&(m.tabIndex=-1,m.style.outline="none",m.addEventListener("pointerdown",()=>m.focus())),n?.maximized&&typeof Me.maximize=="function"?queueMicrotask(()=>Me.maximize?.()):n?.minimized&&typeof Me.minimize=="function"&&queueMicrotask(()=>Me.minimize?.()),t.store.tables.subscribe(C=>{const g=C.find(k=>k.id===e.id);g&&g.name!==w&&(w=g.name,_&&t.store.rows(e.id).find().then(k=>x(k.length)))}),a||O();const y=Me.close.bind(Me);Me.close=()=>(W(),y())}let Rf=0;function Of(){const e=Rf++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function Yi(e,t){const r=document.getElementById(`panel-${La(e)}`);if(!r)return;const i=Rn.get(e)?.status??"normalized";try{const a=(await t.store.tables.findOne(e))?.windowGeometry,c=i==="minimized",d=i==="maximized";let f=r.offsetLeft,w=r.offsetTop,_=r.offsetWidth,x=r.offsetHeight;(c||d)&&a&&(f=a.x,w=a.y,_=a.w,x=a.h),f<=-9e3&&(f=a?.x??40);const O={x:f,y:w,w:_,h:x,z:a?.z??0,minimized:c,maximized:d};await t.store.tables.patch(e,{windowGeometry:O,updatedAt:Date.now()})}catch{}}async function Ff(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const i=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...i,z:Date.now()},updatedAt:Date.now()})}catch{}}async function If(e,t){if(!(await t.store.tables.findOne(e))?.source){const i=t.store.rows(e),n=await i.find();await i.bulkRemove(n.map(a=>a.id))}await t.store.tables.remove(e)}function La(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var zf=Object.defineProperty,Lf=Object.getOwnPropertyDescriptor,Ba=(e,t,r,i)=>{for(var n=i>1?void 0:i?Lf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&zf(t,r,n),n};let ni=class extends Qe{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await ke();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(i=>i.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await _f()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?M``:M`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on
      the page, or click <strong>+ New Table</strong> above.
    </div>`}};ni.styles=Ze`
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
  `;Ba([H()],ni.prototype,"tables",2);ni=Ba([at("table-list")],ni);var Bf=Object.defineProperty,Mf=Object.getOwnPropertyDescriptor,gs=(e,t,r,i)=>{for(var n=i>1?void 0:i?Mf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Bf(t,r,n),n};let pr=class extends Qe{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await ke();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const i=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(i)}async addWorkspace(){const t=await(await ke()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return M`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>M`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};pr.styles=[ln,Ze`
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
  `];gs([H()],pr.prototype,"workspaces",2);gs([H()],pr.prototype,"current",2);pr=gs([at("workspace-selector")],pr);var No=Object.freeze,Ma=Object.defineProperty,Nf=Object.getOwnPropertyDescriptor,un=(e,t,r,i)=>{for(var n=i>1?void 0:i?Nf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Ma(t,r,n),n},qf=(e,t)=>No(Ma(e,"raw",{value:No(e.slice())})),qo;function Uf(e){return e?e.trimStart().startsWith("<svg")?M`<span class="icon-svg">${Ml(e)}</span>`:M`<span class="mi sm">${e}</span>`:""}let qt=class extends Qe{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId)},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{Uo(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!Uo(e))return;e.preventDefault();const t=await ke(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const i of[...t.registries.dropHandlers])try{if(await i(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=e=>{this.api&&Promise.resolve(e.onClick(this.api)).catch(t=>{console.error(`[footer-button:${e.id}]`,t)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager)}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await ke();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e))}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){const r=t==="header"||e.variant==="primary"?"primary":"slot";return M`
      <button class=${r} title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
        ${Uf(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return M(qo||(qo=qf([`
      <header>
        <strong>easyDBAccess <span class="version">v0.0.53</span></strong>
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
    `])),this.headerButtons.map(e=>this.renderSlotButton(e,"header")),this.searchOpen?M`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?M`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:M`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              @click=${this.openSearch}
            >
              <span class="mi">search</span>
            </button>`,this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};qt.styles=[ln,Ze`
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
    `];un([Xn("new-table-dialog")],qt.prototype,"dialog",2);un([Xn("csv-paste-dialog")],qt.prototype,"csvPasteDialog",2);un([Xn("plugin-manager-dialog")],qt.prototype,"pluginManagerDialog",2);un([Xn("input.search")],qt.prototype,"searchInput",2);un([H()],qt.prototype,"footerButtons",2);un([H()],qt.prototype,"headerButtons",2);un([H()],qt.prototype,"searchQuery",2);un([H()],qt.prototype,"searchOpen",2);qt=un([at("app-shell")],qt);function Uo(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([ke(),hl(()=>Promise.resolve().then(()=>ja),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});
//# sourceMappingURL=index-CYj0SXdT.js.map
