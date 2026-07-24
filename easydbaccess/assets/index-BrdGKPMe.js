(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const qa="modulepreload",Ua=function(e){return"/easydbaccess/"+e},Rs={},Wa=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){let c=function($){return Promise.all($.map(S=>Promise.resolve(S).then(k=>({status:"fulfilled",value:k}),k=>({status:"rejected",reason:k}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),m=f?.nonce||f?.getAttribute("nonce");n=c(r.map($=>{if($=Ua($),$ in Rs)return;Rs[$]=!0;const S=$.endsWith(".css"),k=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${$}"]${k}`))return;const O=document.createElement("link");if(O.rel=S?"stylesheet":qa,S||(O.as="script"),O.crossOrigin="",O.href=$,m&&O.setAttribute("nonce",m),document.head.appendChild(O),S)return new Promise((B,q)=>{O.addEventListener("load",B),O.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${$}`)))})}))}function a(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return n.then(c=>{for(const f of c||[])f.status==="rejected"&&a(f.reason);return t().catch(a)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lr=globalThis,Vi=Lr.ShadowRoot&&(Lr.ShadyCSS===void 0||Lr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yi=Symbol(),zs=new WeakMap;let _o=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==Yi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Vi&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=zs.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&zs.set(r,t))}return t}toString(){return this.cssText}};const Ha=e=>new _o(typeof e=="string"?e:e+"",void 0,Yi),at=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,a)=>i+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[a+1],e[0]);return new _o(r,e,Yi)},Ka=(e,t)=>{if(Vi)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),n=Lr.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}},Is=Vi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Ha(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Va,defineProperty:Ya,getOwnPropertyDescriptor:Xa,getOwnPropertyNames:Ga,getOwnPropertySymbols:Qa,getPrototypeOf:Ja}=Object,Vr=globalThis,Ls=Vr.trustedTypes,Za=Ls?Ls.emptyScript:"",el=Vr.reactiveElementPolyfillSupport,tr=(e,t)=>e,Nr={toAttribute(e,t){switch(t){case Boolean:e=e?Za:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Xi=(e,t)=>!Va(e,t),Bs={attribute:!0,type:String,converter:Nr,reflect:!1,useDefault:!1,hasChanged:Xi};Symbol.metadata??=Symbol("metadata"),Vr.litPropertyMetadata??=new WeakMap;let Bn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Bs){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&Ya(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){const{get:n,set:a}=Xa(this.prototype,t)??{get(){return this[r]},set(c){this[r]=c}};return{get:n,set(c){const f=n?.call(this);a?.call(this,c),this.requestUpdate(t,f,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Bs}static _$Ei(){if(this.hasOwnProperty(tr("elementProperties")))return;const t=Ja(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(tr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(tr("properties"))){const r=this.properties,i=[...Ga(r),...Qa(r)];for(const n of i)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(Is(n))}else t!==void 0&&r.push(Is(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ka(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const a=(i.converter?.toAttribute!==void 0?i.converter:Nr).toAttribute(r,i.type);this._$Em=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,r){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const a=i.getPropertyOptions(n),c=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Nr;this._$Em=n;const f=c.fromAttribute(r,a.type);this[n]=f??this._$Ej?.get(n)??f,this._$Em=null}}requestUpdate(t,r,i,n=!1,a){if(t!==void 0){const c=this.constructor;if(n===!1&&(a=this[t]),i??=c.getPropertyOptions(t),!((i.hasChanged??Xi)(a,r)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(c._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:n,wrapped:a},c){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,c??r??this[t]),a!==!0||c!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,a]of i){const{wrapped:c}=a,f=this[n];c!==!0||this._$AL.has(n)||f===void 0||this.C(n,void 0,a,f)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Bn.elementStyles=[],Bn.shadowRootOptions={mode:"open"},Bn[tr("elementProperties")]=new Map,Bn[tr("finalized")]=new Map,el?.({ReactiveElement:Bn}),(Vr.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gi=globalThis,Ms=e=>e,qr=Gi.trustedTypes,Ns=qr?qr.createPolicy("lit-html",{createHTML:e=>e}):void 0,Po="$lit$",hn=`lit$${Math.random().toFixed(9).slice(2)}$`,Ao="?"+hn,tl=`<${Ao}>`,_n=document,nr=()=>_n.createComment(""),rr=e=>e===null||typeof e!="object"&&typeof e!="function",Qi=Array.isArray,nl=e=>Qi(e)||typeof e?.[Symbol.iterator]=="function",Ti=`[ 	
\f\r]`,er=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qs=/-->/g,Us=/>/g,kn=RegExp(`>|${Ti}(?:([^\\s"'>=/]+)(${Ti}*=${Ti}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ws=/'/g,Hs=/"/g,Do=/^(?:script|style|textarea|title)$/i,rl=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),U=rl(1),Pn=Symbol.for("lit-noChange"),ze=Symbol.for("lit-nothing"),Ks=new WeakMap,En=_n.createTreeWalker(_n,129);function To(e,t){if(!Qi(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ns!==void 0?Ns.createHTML(t):t}const il=(e,t)=>{const r=e.length-1,i=[];let n,a=t===2?"<svg>":t===3?"<math>":"",c=er;for(let f=0;f<r;f++){const m=e[f];let $,S,k=-1,O=0;for(;O<m.length&&(c.lastIndex=O,S=c.exec(m),S!==null);)O=c.lastIndex,c===er?S[1]==="!--"?c=qs:S[1]!==void 0?c=Us:S[2]!==void 0?(Do.test(S[2])&&(n=RegExp("</"+S[2],"g")),c=kn):S[3]!==void 0&&(c=kn):c===kn?S[0]===">"?(c=n??er,k=-1):S[1]===void 0?k=-2:(k=c.lastIndex-S[2].length,$=S[1],c=S[3]===void 0?kn:S[3]==='"'?Hs:Ws):c===Hs||c===Ws?c=kn:c===qs||c===Us?c=er:(c=kn,n=void 0);const B=c===kn&&e[f+1].startsWith("/>")?" ":"";a+=c===er?m+tl:k>=0?(i.push($),m.slice(0,k)+Po+m.slice(k)+hn+B):m+hn+(k===-2?f:B)}return[To(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class ir{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let a=0,c=0;const f=t.length-1,m=this.parts,[$,S]=il(t,r);if(this.el=ir.createElement($,i),En.currentNode=this.el.content,r===2||r===3){const k=this.el.content.firstChild;k.replaceWith(...k.childNodes)}for(;(n=En.nextNode())!==null&&m.length<f;){if(n.nodeType===1){if(n.hasAttributes())for(const k of n.getAttributeNames())if(k.endsWith(Po)){const O=S[c++],B=n.getAttribute(k).split(hn),q=/([.?@])?(.*)/.exec(O);m.push({type:1,index:a,name:q[2],strings:B,ctor:q[1]==="."?ol:q[1]==="?"?al:q[1]==="@"?ll:Yr}),n.removeAttribute(k)}else k.startsWith(hn)&&(m.push({type:6,index:a}),n.removeAttribute(k));if(Do.test(n.tagName)){const k=n.textContent.split(hn),O=k.length-1;if(O>0){n.textContent=qr?qr.emptyScript:"";for(let B=0;B<O;B++)n.append(k[B],nr()),En.nextNode(),m.push({type:2,index:++a});n.append(k[O],nr())}}}else if(n.nodeType===8)if(n.data===Ao)m.push({type:2,index:a});else{let k=-1;for(;(k=n.data.indexOf(hn,k+1))!==-1;)m.push({type:7,index:a}),k+=hn.length-1}a++}}static createElement(t,r){const i=_n.createElement("template");return i.innerHTML=t,i}}function Nn(e,t,r=e,i){if(t===Pn)return t;let n=i!==void 0?r._$Co?.[i]:r._$Cl;const a=rr(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),a===void 0?n=void 0:(n=new a(e),n._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=n:r._$Cl=n),n!==void 0&&(t=Nn(e,n._$AS(e,t.values),n,i)),t}class sl{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,n=(t?.creationScope??_n).importNode(r,!0);En.currentNode=n;let a=En.nextNode(),c=0,f=0,m=i[0];for(;m!==void 0;){if(c===m.index){let $;m.type===2?$=new or(a,a.nextSibling,this,t):m.type===1?$=new m.ctor(a,m.name,m.strings,this,t):m.type===6&&($=new cl(a,this,t)),this._$AV.push($),m=i[++f]}c!==m?.index&&(a=En.nextNode(),c++)}return En.currentNode=_n,n}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class or{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=ze,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Nn(this,t,r),rr(t)?t===ze||t==null||t===""?(this._$AH!==ze&&this._$AR(),this._$AH=ze):t!==this._$AH&&t!==Pn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):nl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ze&&rr(this._$AH)?this._$AA.nextSibling.data=t:this.T(_n.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ir.createElement(To(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(r);else{const a=new sl(n,this),c=a.u(this.options);a.p(r),this.T(c),this._$AH=a}}_$AC(t){let r=Ks.get(t.strings);return r===void 0&&Ks.set(t.strings,r=new ir(t)),r}k(t){Qi(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const a of t)n===r.length?r.push(i=new or(this.O(nr()),this.O(nr()),this,this.options)):i=r[n],i._$AI(a),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=Ms(t).nextSibling;Ms(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Yr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,a){this.type=1,this._$AH=ze,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ze}_$AI(t,r=this,i,n){const a=this.strings;let c=!1;if(a===void 0)t=Nn(this,t,r,0),c=!rr(t)||t!==this._$AH&&t!==Pn,c&&(this._$AH=t);else{const f=t;let m,$;for(t=a[0],m=0;m<a.length-1;m++)$=Nn(this,f[i+m],r,m),$===Pn&&($=this._$AH[m]),c||=!rr($)||$!==this._$AH[m],$===ze?t=ze:t!==ze&&(t+=($??"")+a[m+1]),this._$AH[m]=$}c&&!n&&this.j(t)}j(t){t===ze?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ol extends Yr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ze?void 0:t}}class al extends Yr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ze)}}class ll extends Yr{constructor(t,r,i,n,a){super(t,r,i,n,a),this.type=5}_$AI(t,r=this){if((t=Nn(this,t,r,0)??ze)===Pn)return;const i=this._$AH,n=t===ze&&i!==ze||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==ze&&(i===ze||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class cl{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Nn(this,t)}}const ul=Gi.litHtmlPolyfillSupport;ul?.(ir,or),(Gi.litHtmlVersions??=[]).push("3.3.3");const dl=(e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const a=r?.renderBefore??null;i._$litPart$=n=new or(t.insertBefore(nr(),a),a,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ji=globalThis;let nt=class extends Bn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=dl(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Pn}};nt._$litElement$=!0,nt.finalized=!0,Ji.litElementHydrateSupport?.({LitElement:nt});const fl=Ji.litElementPolyfillSupport;fl?.({LitElement:nt});(Ji.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hl={attribute:!0,type:String,converter:Nr,reflect:!1,hasChanged:Xi},pl=(e=hl,t,r)=>{const{kind:i,metadata:n}=r;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),i==="accessor"){const{name:c}=r;return{set(f){const m=t.get.call(this);t.set.call(this,f),this.requestUpdate(c,m,e,!0,f)},init(f){return f!==void 0&&this.C(c,void 0,e,f),f}}}if(i==="setter"){const{name:c}=r;return function(f){const m=this[c];t.call(this,f),this.requestUpdate(c,m,e,!0,f)}}throw Error("Unsupported decorator location: "+i)};function tn(e){return(t,r)=>typeof r=="object"?pl(e,t,r):((i,n,a)=>{const c=n.hasOwnProperty(a);return n.constructor.createProperty(a,i),c?Object.getOwnPropertyDescriptor(n,a):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function J(e){return tn({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ml=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Un(e,t){return(r,i,n)=>{const a=c=>c.renderRoot?.querySelector(e)??null;return ml(r,i,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gl={CHILD:2},bl=e=>(...t)=>({_$litDirective$:e,values:t});class yl{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ii extends yl{constructor(t){if(super(t),this.it=ze,t.type!==gl.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ze||t==null)return this._t=void 0,this.it=t;if(t===Pn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Ii.directiveName="unsafeHTML",Ii.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Li extends Ii{}Li.directiveName="unsafeSVG",Li.resultType=2;const wl=bl(Li);var vl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Br={exports:{}},$l=Br.exports,Vs;function kl(){return Vs||(Vs=1,(function(e,t){(function(r,i){e.exports=i()})($l,function(){var r=function(s,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,u){l.__proto__=u}||function(l,u){for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(l[d]=u[d])})(s,o)},i=function(){return(i=Object.assign||function(s){for(var o,l=1,u=arguments.length;l<u;l++)for(var d in o=arguments[l])Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d]);return s}).apply(this,arguments)};function n(s,o,l){for(var u,d=0,p=o.length;d<p;d++)!u&&d in o||((u=u||Array.prototype.slice.call(o,0,d))[d]=o[d]);return s.concat(u||Array.prototype.slice.call(o))}var a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:vl,c=Object.keys,f=Array.isArray;function m(s,o){return typeof o!="object"||c(o).forEach(function(l){s[l]=o[l]}),s}typeof Promise>"u"||a.Promise||(a.Promise=Promise);var $=Object.getPrototypeOf,S={}.hasOwnProperty;function k(s,o){return S.call(s,o)}function O(s,o){typeof o=="function"&&(o=o($(s))),(typeof Reflect>"u"?c:Reflect.ownKeys)(o).forEach(function(l){q(s,l,o[l])})}var B=Object.defineProperty;function q(s,o,l,u){B(s,o,m(l&&k(l,"get")&&typeof l.get=="function"?{get:l.get,set:l.set,configurable:!0}:{value:l,configurable:!0,writable:!0},u))}function Z(s){return{from:function(o){return s.prototype=Object.create(o.prototype),q(s.prototype,"constructor",s),{extend:O.bind(null,s.prototype)}}}}var de=Object.getOwnPropertyDescriptor,fe=[].slice;function be(s,o,l){return fe.call(s,o,l)}function Ie(s,o){return o(s)}function ne(s){if(!s)throw new Error("Assertion Failed")}function ie(s){a.setImmediate?setImmediate(s):setTimeout(s,0)}function ye(s,o){if(typeof o=="string"&&k(s,o))return s[o];if(!o)return s;if(typeof o!="string"){for(var l=[],u=0,d=o.length;u<d;++u){var p=ye(s,o[u]);l.push(p)}return l}var g=o.indexOf(".");if(g!==-1){var y=s[o.substr(0,g)];return y==null?void 0:ye(y,o.substr(g+1))}}function Te(s,o,l){if(s&&o!==void 0&&!("isFrozen"in Object&&Object.isFrozen(s)))if(typeof o!="string"&&"length"in o){ne(typeof l!="string"&&"length"in l);for(var u=0,d=o.length;u<d;++u)Te(s,o[u],l[u])}else{var p,g,y=o.indexOf(".");y!==-1?(p=o.substr(0,y),(g=o.substr(y+1))===""?l===void 0?f(s)&&!isNaN(parseInt(p))?s.splice(p,1):delete s[p]:s[p]=l:Te(y=!(y=s[p])||!k(s,p)?s[p]={}:y,g,l)):l===void 0?f(s)&&!isNaN(parseInt(o))?s.splice(o,1):delete s[o]:s[o]=l}}function vt(s){var o,l={};for(o in s)k(s,o)&&(l[o]=s[o]);return l}var Rt=[].concat;function Xt(s){return Rt.apply([],s)}var Jt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Xt([8,16,32,64].map(function(s){return["Int","Uint","Float"].map(function(o){return o+s+"Array"})}))).filter(function(s){return a[s]}),h=new Set(Jt.map(function(s){return a[s]})),w=null;function T(s){return w=new WeakMap,s=(function o(l){if(!l||typeof l!="object")return l;var u=w.get(l);if(u)return u;if(f(l)){u=[],w.set(l,u);for(var d=0,p=l.length;d<p;++d)u.push(o(l[d]))}else if(h.has(l.constructor))u=l;else{var g,y=$(l);for(g in u=y===Object.prototype?{}:Object.create(y),w.set(l,u),l)k(l,g)&&(u[g]=o(l[g]))}return u})(s),w=null,s}var b={}.toString;function x(s){return b.call(s).slice(8,-1)}var ae=typeof Symbol<"u"?Symbol.iterator:"@@iterator",ue=typeof ae=="symbol"?function(s){var o;return s!=null&&(o=s[ae])&&o.apply(s)}:function(){return null};function N(s,o){return o=s.indexOf(o),0<=o&&s.splice(o,1),0<=o}var K={};function He(s){var o,l,u,d;if(arguments.length===1){if(f(s))return s.slice();if(this===K&&typeof s=="string")return[s];if(d=ue(s)){for(l=[];!(u=d.next()).done;)l.push(u.value);return l}if(s==null)return[s];if(typeof(o=s.length)!="number")return[s];for(l=new Array(o);o--;)l[o]=s[o];return l}for(o=arguments.length,l=new Array(o);o--;)l[o]=arguments[o];return l}var rt=typeof Symbol<"u"?function(s){return s[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},ke=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Tt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(ke),Ut={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Me(s,o){this.name=s,this.message=o}function Oe(s,o){return s+". Errors: "+Object.keys(o).map(function(l){return o[l].toString()}).filter(function(l,u,d){return d.indexOf(l)===u}).join(`
`)}function xe(s,o,l,u){this.failures=o,this.failedKeys=u,this.successCount=l,this.message=Oe(s,o)}function _e(s,o){this.name="BulkError",this.failures=Object.keys(o).map(function(l){return o[l]}),this.failuresByPos=o,this.message=Oe(s,this.failures)}Z(Me).from(Error).extend({toString:function(){return this.name+": "+this.message}}),Z(xe).from(Me),Z(_e).from(Me);var Ke=Tt.reduce(function(s,o){return s[o]=o+"Error",s},{}),Ee=Me,ee=Tt.reduce(function(s,o){var l=o+"Error";function u(d,p){this.name=l,d?typeof d=="string"?(this.message="".concat(d).concat(p?`
 `+p:""),this.inner=p||null):typeof d=="object"&&(this.message="".concat(d.name," ").concat(d.message),this.inner=d):(this.message=Ut[o]||l,this.inner=null)}return Z(u).from(Ee),s[o]=u,s},{});ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError;var Ve=ke.reduce(function(s,o){return s[o+"Error"]=ee[o],s},{}),Re=Tt.reduce(function(s,o){return["Syntax","Type","Range"].indexOf(o)===-1&&(s[o+"Error"]=ee[o]),s},{});function ce(){}function ge(s){return s}function kt(s,o){return s==null||s===ge?o:function(l){return o(s(l))}}function oe(s,o){return function(){s.apply(this,arguments),o.apply(this,arguments)}}function Ye(s,o){return s===ce?o:function(){var l=s.apply(this,arguments);l!==void 0&&(arguments[0]=l);var u=this.onsuccess,d=this.onerror;this.onsuccess=null,this.onerror=null;var p=o.apply(this,arguments);return u&&(this.onsuccess=this.onsuccess?oe(u,this.onsuccess):u),d&&(this.onerror=this.onerror?oe(d,this.onerror):d),p!==void 0?p:l}}function sn(s,o){return s===ce?o:function(){s.apply(this,arguments);var l=this.onsuccess,u=this.onerror;this.onsuccess=this.onerror=null,o.apply(this,arguments),l&&(this.onsuccess=this.onsuccess?oe(l,this.onsuccess):l),u&&(this.onerror=this.onerror?oe(u,this.onerror):u)}}function zt(s,o){return s===ce?o:function(l){var u=s.apply(this,arguments);m(l,u);var d=this.onsuccess,p=this.onerror;return this.onsuccess=null,this.onerror=null,l=o.apply(this,arguments),d&&(this.onsuccess=this.onsuccess?oe(d,this.onsuccess):d),p&&(this.onerror=this.onerror?oe(p,this.onerror):p),u===void 0?l===void 0?void 0:l:m(u,l)}}function Ge(s,o){return s===ce?o:function(){return o.apply(this,arguments)!==!1&&s.apply(this,arguments)}}function Ct(s,o){return s===ce?o:function(){var l=s.apply(this,arguments);if(l&&typeof l.then=="function"){for(var u=this,d=arguments.length,p=new Array(d);d--;)p[d]=arguments[d];return l.then(function(){return o.apply(u,p)})}return o.apply(this,arguments)}}Re.ModifyError=xe,Re.DexieError=Me,Re.BulkError=_e;var De=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ne(s){De=s}var yt={},Qe=100,Jt=typeof Promise>"u"?[]:(function(){var s=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[s,$(s),s];var o=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[o,$(o),s]})(),ke=Jt[0],Tt=Jt[1],Jt=Jt[2],Tt=Tt&&Tt.then,$e=ke&&ke.constructor,Et=!!Jt,qe=function(s,o){Ze.push([s,o]),it&&(queueMicrotask(he),it=!1)},ht=!0,it=!0,Je=[],Le=[],le=ge,Xe={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ce,pgp:!1,env:{},finalize:ce},Y=Xe,Ze=[],lt=0,xt=[];function X(s){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var o=this._PSD=Y;if(typeof s!="function"){if(s!==yt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&st(this,this._value))}this._state=null,this._value=null,++o.ref,(function l(u,d){try{d(function(p){if(u._state===null){if(p===u)throw new TypeError("A promise cannot be resolved with itself.");var g=u._lib&&je();p&&typeof p.then=="function"?l(u,function(y,C){p instanceof X?p._then(y,C):p.then(y,C)}):(u._state=!0,u._value=p,on(u)),g&&Ue()}},st.bind(null,u))}catch(p){st(u,p)}})(this,s)}var Wt={get:function(){var s=Y,o=hr;function l(u,d){var p=this,g=!s.global&&(s!==Y||o!==hr),y=g&&!ln(),C=new X(function(_,D){re(p,new Gt(as(u,s,g,y),as(d,s,g,y),_,D,s))});return this._consoleTask&&(C._consoleTask=this._consoleTask),C}return l.prototype=yt,l},set:function(s){q(this,"then",s&&s.prototype===yt?Wt:{get:function(){return s},set:Wt.set})}};function Gt(s,o,l,u,d){this.onFulfilled=typeof s=="function"?s:null,this.onRejected=typeof o=="function"?o:null,this.resolve=l,this.reject=u,this.psd=d}function st(s,o){var l,u;Le.push(o),s._state===null&&(l=s._lib&&je(),o=le(o),s._state=!1,s._value=o,u=s,Je.some(function(d){return d._value===u._value})||Je.push(u),on(s),l&&Ue())}function on(s){var o=s._listeners;s._listeners=[];for(var l=0,u=o.length;l<u;++l)re(s,o[l]);var d=s._PSD;--d.ref||d.finalize(),lt===0&&(++lt,qe(function(){--lt==0&&Pe()},[]))}function re(s,o){if(s._state!==null){var l=s._state?o.onFulfilled:o.onRejected;if(l===null)return(s._state?o.resolve:o.reject)(s._value);++o.psd.ref,++lt,qe(Se,[l,s,o])}else s._listeners.push(o)}function Se(s,o,l){try{var u,d=o._value;!o._state&&Le.length&&(Le=[]),u=De&&o._consoleTask?o._consoleTask.run(function(){return s(d)}):s(d),o._state||Le.indexOf(d)!==-1||(function(p){for(var g=Je.length;g;)if(Je[--g]._value===p._value)return Je.splice(g,1)})(o),l.resolve(u)}catch(p){l.reject(p)}finally{--lt==0&&Pe(),--l.psd.ref||l.psd.finalize()}}function he(){bn(Xe,function(){je()&&Ue()})}function je(){var s=ht;return it=ht=!1,s}function Ue(){var s,o,l;do for(;0<Ze.length;)for(s=Ze,Ze=[],l=s.length,o=0;o<l;++o){var u=s[o];u[0].apply(null,u[1])}while(0<Ze.length);it=ht=!0}function Pe(){var s=Je;Je=[],s.forEach(function(u){u._PSD.onunhandled.call(null,u._value,u)});for(var o=xt.slice(0),l=o.length;l;)o[--l]()}function It(s){return new X(yt,!1,s)}function Be(s,o){var l=Y;return function(){var u=je(),d=Y;try{return cn(l,!0),s.apply(this,arguments)}catch(p){o&&o(p)}finally{cn(d,!1),u&&Ue()}}}O(X.prototype,{then:Wt,_then:function(s,o){re(this,new Gt(null,null,s,o,Y))},catch:function(s){if(arguments.length===1)return this.then(null,s);var o=s,l=arguments[1];return typeof o=="function"?this.then(null,function(u){return(u instanceof o?l:It)(u)}):this.then(null,function(u){return(u&&u.name===o?l:It)(u)})},finally:function(s){return this.then(function(o){return X.resolve(s()).then(function(){return o})},function(o){return X.resolve(s()).then(function(){return It(o)})})},timeout:function(s,o){var l=this;return s<1/0?new X(function(u,d){var p=setTimeout(function(){return d(new ee.Timeout(o))},s);l.then(u,d).finally(clearTimeout.bind(null,p))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&q(X.prototype,Symbol.toStringTag,"Dexie.Promise"),Xe.env=os(),O(X,{all:function(){var s=He.apply(null,arguments).map(pr);return new X(function(o,l){s.length===0&&o([]);var u=s.length;s.forEach(function(d,p){return X.resolve(d).then(function(g){s[p]=g,--u||o(s)},l)})})},resolve:function(s){return s instanceof X?s:s&&typeof s.then=="function"?new X(function(o,l){s.then(o,l)}):new X(yt,!0,s)},reject:It,race:function(){var s=He.apply(null,arguments).map(pr);return new X(function(o,l){s.map(function(u){return X.resolve(u).then(o,l)})})},PSD:{get:function(){return Y},set:function(s){return Y=s}},totalEchoes:{get:function(){return hr}},newPSD:an,usePSD:bn,scheduler:{get:function(){return qe},set:function(s){qe=s}},rejectionMapper:{get:function(){return le},set:function(s){le=s}},follow:function(s,o){return new X(function(l,u){return an(function(d,p){var g=Y;g.unhandleds=[],g.onunhandled=p,g.finalize=oe(function(){var y,C=this;y=function(){C.unhandleds.length===0?d():p(C.unhandleds[0])},xt.push(function _(){y(),xt.splice(xt.indexOf(_),1)}),++lt,qe(function(){--lt==0&&Pe()},[])},g.finalize),s()},o,l,u)})}}),$e&&($e.allSettled&&q(X,"allSettled",function(){var s=He.apply(null,arguments).map(pr);return new X(function(o){s.length===0&&o([]);var l=s.length,u=new Array(l);s.forEach(function(d,p){return X.resolve(d).then(function(g){return u[p]={status:"fulfilled",value:g}},function(g){return u[p]={status:"rejected",reason:g}}).then(function(){return--l||o(u)})})})}),$e.any&&typeof AggregateError<"u"&&q(X,"any",function(){var s=He.apply(null,arguments).map(pr);return new X(function(o,l){s.length===0&&l(new AggregateError([]));var u=s.length,d=new Array(u);s.forEach(function(p,g){return X.resolve(p).then(function(y){return o(y)},function(y){d[g]=y,--u||l(new AggregateError(d))})})})}),$e.withResolvers&&(X.withResolvers=$e.withResolvers));var ct={awaits:0,echoes:0,id:0},wa=0,dr=[],fr=0,hr=0,va=0;function an(s,o,l,u){var d=Y,p=Object.create(d);return p.parent=d,p.ref=0,p.global=!1,p.id=++va,Xe.env,p.env=Et?{Promise:X,PromiseProp:{value:X,configurable:!0,writable:!0},all:X.all,race:X.race,allSettled:X.allSettled,any:X.any,resolve:X.resolve,reject:X.reject}:{},o&&m(p,o),++d.ref,p.finalize=function(){--this.parent.ref||this.parent.finalize()},u=bn(p,s,l,u),p.ref===0&&p.finalize(),u}function On(){return ct.id||(ct.id=++wa),++ct.awaits,ct.echoes+=Qe,ct.id}function ln(){return!!ct.awaits&&(--ct.awaits==0&&(ct.id=0),ct.echoes=ct.awaits*Qe,!0)}function pr(s){return ct.echoes&&s&&s.constructor===$e?(On(),s.then(function(o){return ln(),o},function(o){return ln(),et(o)})):s}function xa(){var s=dr[dr.length-1];dr.pop(),cn(s,!1)}function cn(s,o){var l,u=Y;(o?!ct.echoes||fr++&&s===Y:!fr||--fr&&s===Y)||queueMicrotask(o?function(d){++hr,ct.echoes&&--ct.echoes!=0||(ct.echoes=ct.awaits=ct.id=0),dr.push(Y),cn(d,!0)}.bind(null,s):xa),s!==Y&&(Y=s,u===Xe&&(Xe.env=os()),Et&&(l=Xe.env.Promise,o=s.env,(u.global||s.global)&&(Object.defineProperty(a,"Promise",o.PromiseProp),l.all=o.all,l.race=o.race,l.resolve=o.resolve,l.reject=o.reject,o.allSettled&&(l.allSettled=o.allSettled),o.any&&(l.any=o.any))))}function os(){var s=a.Promise;return Et?{Promise:s,PromiseProp:Object.getOwnPropertyDescriptor(a,"Promise"),all:s.all,race:s.race,allSettled:s.allSettled,any:s.any,resolve:s.resolve,reject:s.reject}:{}}function bn(s,o,l,u,d){var p=Y;try{return cn(s,!0),o(l,u,d)}finally{cn(p,!1)}}function as(s,o,l,u){return typeof s!="function"?s:function(){var d=Y;l&&On(),cn(o,!0);try{return s.apply(this,arguments)}finally{cn(d,!1),u&&queueMicrotask(ln)}}}function ri(s){Promise===$e&&ct.echoes===0?fr===0?s():enqueueNativeMicroTask(s):setTimeout(s,0)}(""+Tt).indexOf("[native code]")===-1&&(On=ln=ce);var et=X.reject,yn="￿",Qt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ls="String expected.",Rn=[],mr="__dbnames",ii="readonly",si="readwrite";function wn(s,o){return s?o?function(){return s.apply(this,arguments)&&o.apply(this,arguments)}:s:o}var cs={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function gr(s){return typeof s!="string"||/\./.test(s)?function(o){return o}:function(o){return o[s]===void 0&&s in o&&delete(o=T(o))[s],o}}function us(){throw ee.Type()}function Ce(s,o){try{var l=ds(s),u=ds(o);if(l!==u)return l==="Array"?1:u==="Array"?-1:l==="binary"?1:u==="binary"?-1:l==="string"?1:u==="string"?-1:l==="Date"?1:u!=="Date"?NaN:-1;switch(l){case"number":case"Date":case"string":return o<s?1:s<o?-1:0;case"binary":return(function(d,p){for(var g=d.length,y=p.length,C=g<y?g:y,_=0;_<C;++_)if(d[_]!==p[_])return d[_]<p[_]?-1:1;return g===y?0:g<y?-1:1})(fs(s),fs(o));case"Array":return(function(d,p){for(var g=d.length,y=p.length,C=g<y?g:y,_=0;_<C;++_){var D=Ce(d[_],p[_]);if(D!==0)return D}return g===y?0:g<y?-1:1})(s,o)}}catch{}return NaN}function ds(s){var o=typeof s;return o!="object"?o:ArrayBuffer.isView(s)?"binary":(s=x(s),s==="ArrayBuffer"?"binary":s)}function fs(s){return s instanceof Uint8Array?s:ArrayBuffer.isView(s)?new Uint8Array(s.buffer,s.byteOffset,s.byteLength):new Uint8Array(s)}var hs=(We.prototype._trans=function(s,o,l){var u=this._tx||Y.trans,d=this.name,p=De&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(s==="readonly"?"read":"write"," ").concat(this.name));function g(_,D,v){if(!v.schema[d])throw new ee.NotFound("Table "+d+" not part of transaction");return o(v.idbtrans,v)}var y=je();try{var C=u&&u.db._novip===this.db._novip?u===Y.trans?u._promise(s,g,l):an(function(){return u._promise(s,g,l)},{trans:u,transless:Y.transless||Y}):(function _(D,v,F,E){if(D.idbdb&&(D._state.openComplete||Y.letThrough||D._vip)){var A=D._createTransaction(v,F,D._dbSchema);try{A.create(),D._state.PR1398_maxLoop=3}catch(j){return j.name===Ke.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return _(D,v,F,E)})):et(j)}return A._promise(v,function(j,P){return an(function(){return Y.trans=A,E(j,P,A)})}).then(function(j){if(v==="readwrite")try{A.idbtrans.commit()}catch{}return v==="readonly"?j:A._completion.then(function(){return j})})}if(D._state.openComplete)return et(new ee.DatabaseClosed(D._state.dbOpenError));if(!D._state.isBeingOpened){if(!D._state.autoOpen)return et(new ee.DatabaseClosed);D.open().catch(ce)}return D._state.dbReadyPromise.then(function(){return _(D,v,F,E)})})(this.db,s,[this.name],g);return p&&(C._consoleTask=p,C=C.catch(function(_){return console.trace(_),et(_)})),C}finally{y&&Ue()}},We.prototype.get=function(s,o){var l=this;return s&&s.constructor===Object?this.where(s).first(o):s==null?et(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(u){return l.core.get({trans:u,key:s}).then(function(d){return l.hook.reading.fire(d)})}).then(o)},We.prototype.where=function(s){if(typeof s=="string")return new this.db.WhereClause(this,s);if(f(s))return new this.db.WhereClause(this,"[".concat(s.join("+"),"]"));var o=c(s);if(o.length===1)return this.where(o[0]).equals(s[o[0]]);var l=this.schema.indexes.concat(this.schema.primKey).filter(function(y){if(y.compound&&o.every(function(_){return 0<=y.keyPath.indexOf(_)})){for(var C=0;C<o.length;++C)if(o.indexOf(y.keyPath[C])===-1)return!1;return!0}return!1}).sort(function(y,C){return y.keyPath.length-C.keyPath.length})[0];if(l&&this.db._maxKey!==yn){var p=l.keyPath.slice(0,o.length);return this.where(p).equals(p.map(function(C){return s[C]}))}!l&&De&&console.warn("The query ".concat(JSON.stringify(s)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(o.join("+"),"]"));var u=this.schema.idxByName;function d(y,C){return Ce(y,C)===0}var g=o.reduce(function(v,C){var _=v[0],D=v[1],v=u[C],F=s[C];return[_||v,_||!v?wn(D,v&&v.multi?function(E){return E=ye(E,C),f(E)&&E.some(function(A){return d(F,A)})}:function(E){return d(F,ye(E,C))}):D]},[null,null]),p=g[0],g=g[1];return p?this.where(p.name).equals(s[p.keyPath]).filter(g):l?this.filter(g):this.where(o).equals("")},We.prototype.filter=function(s){return this.toCollection().and(s)},We.prototype.count=function(s){return this.toCollection().count(s)},We.prototype.offset=function(s){return this.toCollection().offset(s)},We.prototype.limit=function(s){return this.toCollection().limit(s)},We.prototype.each=function(s){return this.toCollection().each(s)},We.prototype.toArray=function(s){return this.toCollection().toArray(s)},We.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},We.prototype.orderBy=function(s){return new this.db.Collection(new this.db.WhereClause(this,f(s)?"[".concat(s.join("+"),"]"):s))},We.prototype.reverse=function(){return this.toCollection().reverse()},We.prototype.mapToClass=function(s){var o,l=this.db,u=this.name;function d(){return o!==null&&o.apply(this,arguments)||this}(this.schema.mappedClass=s).prototype instanceof us&&((function(C,_){if(typeof _!="function"&&_!==null)throw new TypeError("Class extends value "+String(_)+" is not a constructor or null");function D(){this.constructor=C}r(C,_),C.prototype=_===null?Object.create(_):(D.prototype=_.prototype,new D)})(d,o=s),Object.defineProperty(d.prototype,"db",{get:function(){return l},enumerable:!1,configurable:!0}),d.prototype.table=function(){return u},s=d);for(var p=new Set,g=s.prototype;g;g=$(g))Object.getOwnPropertyNames(g).forEach(function(C){return p.add(C)});function y(C){if(!C)return C;var _,D=Object.create(s.prototype);for(_ in C)if(!p.has(_))try{D[_]=C[_]}catch{}return D}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=y,this.hook("reading",y),s},We.prototype.defineClass=function(){return this.mapToClass(function(s){m(this,s)})},We.prototype.add=function(s,o){var l=this,u=this.schema.primKey,d=u.auto,p=u.keyPath,g=s;return p&&d&&(g=gr(p)(s)),this._trans("readwrite",function(y){return l.core.mutate({trans:y,type:"add",keys:o!=null?[o]:null,values:[g]})}).then(function(y){return y.numFailures?X.reject(y.failures[0]):y.lastResult}).then(function(y){if(p)try{Te(s,p,y)}catch{}return y})},We.prototype.update=function(s,o){return typeof s!="object"||f(s)?this.where(":id").equals(s).modify(o):(s=ye(s,this.schema.primKey.keyPath),s===void 0?et(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(s).modify(o))},We.prototype.put=function(s,o){var l=this,u=this.schema.primKey,d=u.auto,p=u.keyPath,g=s;return p&&d&&(g=gr(p)(s)),this._trans("readwrite",function(y){return l.core.mutate({trans:y,type:"put",values:[g],keys:o!=null?[o]:null})}).then(function(y){return y.numFailures?X.reject(y.failures[0]):y.lastResult}).then(function(y){if(p)try{Te(s,p,y)}catch{}return y})},We.prototype.delete=function(s){var o=this;return this._trans("readwrite",function(l){return o.core.mutate({trans:l,type:"delete",keys:[s]})}).then(function(l){return l.numFailures?X.reject(l.failures[0]):void 0})},We.prototype.clear=function(){var s=this;return this._trans("readwrite",function(o){return s.core.mutate({trans:o,type:"deleteRange",range:cs})}).then(function(o){return o.numFailures?X.reject(o.failures[0]):void 0})},We.prototype.bulkGet=function(s){var o=this;return this._trans("readonly",function(l){return o.core.getMany({keys:s,trans:l}).then(function(u){return u.map(function(d){return o.hook.reading.fire(d)})})})},We.prototype.bulkAdd=function(s,o,l){var u=this,d=Array.isArray(o)?o:void 0,p=(l=l||(d?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(g){var _=u.schema.primKey,y=_.auto,_=_.keyPath;if(_&&d)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(d&&d.length!==s.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var C=s.length,_=_&&y?s.map(gr(_)):s;return u.core.mutate({trans:g,type:"add",keys:d,values:_,wantResults:p}).then(function(A){var v=A.numFailures,F=A.results,E=A.lastResult,A=A.failures;if(v===0)return p?F:E;throw new _e("".concat(u.name,".bulkAdd(): ").concat(v," of ").concat(C," operations failed"),A)})})},We.prototype.bulkPut=function(s,o,l){var u=this,d=Array.isArray(o)?o:void 0,p=(l=l||(d?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(g){var _=u.schema.primKey,y=_.auto,_=_.keyPath;if(_&&d)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(d&&d.length!==s.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var C=s.length,_=_&&y?s.map(gr(_)):s;return u.core.mutate({trans:g,type:"put",keys:d,values:_,wantResults:p}).then(function(A){var v=A.numFailures,F=A.results,E=A.lastResult,A=A.failures;if(v===0)return p?F:E;throw new _e("".concat(u.name,".bulkPut(): ").concat(v," of ").concat(C," operations failed"),A)})})},We.prototype.bulkUpdate=function(s){var o=this,l=this.core,u=s.map(function(g){return g.key}),d=s.map(function(g){return g.changes}),p=[];return this._trans("readwrite",function(g){return l.getMany({trans:g,keys:u,cache:"clone"}).then(function(y){var C=[],_=[];s.forEach(function(v,F){var E=v.key,A=v.changes,j=y[F];if(j){for(var P=0,z=Object.keys(A);P<z.length;P++){var I=z[P],L=A[I];if(I===o.schema.primKey.keyPath){if(Ce(L,E)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else Te(j,I,L)}p.push(F),C.push(E),_.push(j)}});var D=C.length;return l.mutate({trans:g,type:"put",keys:C,values:_,updates:{keys:u,changeSpecs:d}}).then(function(v){var F=v.numFailures,E=v.failures;if(F===0)return D;for(var A=0,j=Object.keys(E);A<j.length;A++){var P,z=j[A],I=p[Number(z)];I!=null&&(P=E[z],delete E[z],E[I]=P)}throw new _e("".concat(o.name,".bulkUpdate(): ").concat(F," of ").concat(D," operations failed"),E)})})})},We.prototype.bulkDelete=function(s){var o=this,l=s.length;return this._trans("readwrite",function(u){return o.core.mutate({trans:u,type:"delete",keys:s})}).then(function(g){var d=g.numFailures,p=g.lastResult,g=g.failures;if(d===0)return p;throw new _e("".concat(o.name,".bulkDelete(): ").concat(d," of ").concat(l," operations failed"),g)})},We);function We(){}function Hn(s){function o(g,y){if(y){for(var C=arguments.length,_=new Array(C-1);--C;)_[C-1]=arguments[C];return l[g].subscribe.apply(null,_),s}if(typeof g=="string")return l[g]}var l={};o.addEventType=p;for(var u=1,d=arguments.length;u<d;++u)p(arguments[u]);return o;function p(g,y,C){if(typeof g!="object"){var _;y=y||Ge;var D={subscribers:[],fire:C=C||ce,subscribe:function(v){D.subscribers.indexOf(v)===-1&&(D.subscribers.push(v),D.fire=y(D.fire,v))},unsubscribe:function(v){D.subscribers=D.subscribers.filter(function(F){return F!==v}),D.fire=D.subscribers.reduce(y,C)}};return l[g]=o[g]=D}c(_=g).forEach(function(v){var F=_[v];if(f(F))p(v,_[v][0],_[v][1]);else{if(F!=="asap")throw new ee.InvalidArgument("Invalid event config");var E=p(v,ge,function(){for(var A=arguments.length,j=new Array(A);A--;)j[A]=arguments[A];E.subscribers.forEach(function(P){ie(function(){P.apply(null,j)})})})}})}}function Kn(s,o){return Z(o).from({prototype:s}),o}function zn(s,o){return!(s.filter||s.algorithm||s.or)&&(o?s.justLimit:!s.replayFilter)}function oi(s,o){s.filter=wn(s.filter,o)}function ai(s,o,l){var u=s.replayFilter;s.replayFilter=u?function(){return wn(u(),o())}:o,s.justLimit=l&&!u}function br(s,o){if(s.isPrimKey)return o.primaryKey;var l=o.getIndexByKeyPath(s.index);if(!l)throw new ee.Schema("KeyPath "+s.index+" on object store "+o.name+" is not indexed");return l}function ps(s,o,l){var u=br(s,o.schema);return o.openCursor({trans:l,values:!s.keysOnly,reverse:s.dir==="prev",unique:!!s.unique,query:{index:u,range:s.range}})}function yr(s,o,l,u){var d=s.replayFilter?wn(s.filter,s.replayFilter()):s.filter;if(s.or){var p={},g=function(y,C,_){var D,v;d&&!d(C,_,function(F){return C.stop(F)},function(F){return C.fail(F)})||((v=""+(D=C.primaryKey))=="[object ArrayBuffer]"&&(v=""+new Uint8Array(D)),k(p,v)||(p[v]=!0,o(y,C,_)))};return Promise.all([s.or._iterate(g,l),ms(ps(s,u,l),s.algorithm,g,!s.keysOnly&&s.valueMapper)])}return ms(ps(s,u,l),wn(s.algorithm,d),o,!s.keysOnly&&s.valueMapper)}function ms(s,o,l,u){var d=Be(u?function(p,g,y){return l(u(p),g,y)}:l);return s.then(function(p){if(p)return p.start(function(){var g=function(){return p.continue()};o&&!o(p,function(y){return g=y},function(y){p.stop(y),g=ce},function(y){p.fail(y),g=ce})||d(p.value,p,function(y){return g=y}),g()})})}var Jt=Symbol(),Vn=(gs.prototype.execute=function(s){if(this.add!==void 0){var o=this.add;if(f(o))return n(n([],f(s)?s:[],!0),o).sort();if(typeof o=="number")return(Number(s)||0)+o;if(typeof o=="bigint")try{return BigInt(s)+o}catch{return BigInt(0)+o}throw new TypeError("Invalid term ".concat(o))}if(this.remove!==void 0){var l=this.remove;if(f(l))return f(s)?s.filter(function(u){return!l.includes(u)}).sort():[];if(typeof l=="number")return Number(s)-l;if(typeof l=="bigint")try{return BigInt(s)-l}catch{return BigInt(0)-l}throw new TypeError("Invalid subtrahend ".concat(l))}return o=(o=this.replacePrefix)===null||o===void 0?void 0:o[0],o&&typeof s=="string"&&s.startsWith(o)?this.replacePrefix[1]+s.substring(o.length):s},gs);function gs(s){Object.assign(this,s)}var $a=(Ae.prototype._read=function(s,o){var l=this._ctx;return l.error?l.table._trans(null,et.bind(null,l.error)):l.table._trans("readonly",s).then(o)},Ae.prototype._write=function(s){var o=this._ctx;return o.error?o.table._trans(null,et.bind(null,o.error)):o.table._trans("readwrite",s,"locked")},Ae.prototype._addAlgorithm=function(s){var o=this._ctx;o.algorithm=wn(o.algorithm,s)},Ae.prototype._iterate=function(s,o){return yr(this._ctx,s,o,this._ctx.table.core)},Ae.prototype.clone=function(s){var o=Object.create(this.constructor.prototype),l=Object.create(this._ctx);return s&&m(l,s),o._ctx=l,o},Ae.prototype.raw=function(){return this._ctx.valueMapper=null,this},Ae.prototype.each=function(s){var o=this._ctx;return this._read(function(l){return yr(o,s,l,o.table.core)})},Ae.prototype.count=function(s){var o=this;return this._read(function(l){var u=o._ctx,d=u.table.core;if(zn(u,!0))return d.count({trans:l,query:{index:br(u,d.schema),range:u.range}}).then(function(g){return Math.min(g,u.limit)});var p=0;return yr(u,function(){return++p,!1},l,d).then(function(){return p})}).then(s)},Ae.prototype.sortBy=function(s,o){var l=s.split(".").reverse(),u=l[0],d=l.length-1;function p(C,_){return _?p(C[l[_]],_-1):C[u]}var g=this._ctx.dir==="next"?1:-1;function y(C,_){return Ce(p(C,d),p(_,d))*g}return this.toArray(function(C){return C.sort(y)}).then(o)},Ae.prototype.toArray=function(s){var o=this;return this._read(function(l){var u=o._ctx;if(u.dir==="next"&&zn(u,!0)&&0<u.limit){var d=u.valueMapper,p=br(u,u.table.core.schema);return u.table.core.query({trans:l,limit:u.limit,values:!0,query:{index:p,range:u.range}}).then(function(y){return y=y.result,d?y.map(d):y})}var g=[];return yr(u,function(y){return g.push(y)},l,u.table.core).then(function(){return g})},s)},Ae.prototype.offset=function(s){var o=this._ctx;return s<=0||(o.offset+=s,zn(o)?ai(o,function(){var l=s;return function(u,d){return l===0||(l===1?--l:d(function(){u.advance(l),l=0}),!1)}}):ai(o,function(){var l=s;return function(){return--l<0}})),this},Ae.prototype.limit=function(s){return this._ctx.limit=Math.min(this._ctx.limit,s),ai(this._ctx,function(){var o=s;return function(l,u,d){return--o<=0&&u(d),0<=o}},!0),this},Ae.prototype.until=function(s,o){return oi(this._ctx,function(l,u,d){return!s(l.value)||(u(d),o)}),this},Ae.prototype.first=function(s){return this.limit(1).toArray(function(o){return o[0]}).then(s)},Ae.prototype.last=function(s){return this.reverse().first(s)},Ae.prototype.filter=function(s){var o;return oi(this._ctx,function(l){return s(l.value)}),(o=this._ctx).isMatch=wn(o.isMatch,s),this},Ae.prototype.and=function(s){return this.filter(s)},Ae.prototype.or=function(s){return new this.db.WhereClause(this._ctx.table,s,this)},Ae.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Ae.prototype.desc=function(){return this.reverse()},Ae.prototype.eachKey=function(s){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){s(u.key,u)})},Ae.prototype.eachUniqueKey=function(s){return this._ctx.unique="unique",this.eachKey(s)},Ae.prototype.eachPrimaryKey=function(s){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){s(u.primaryKey,u)})},Ae.prototype.keys=function(s){var o=this._ctx;o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,d){l.push(d.key)}).then(function(){return l}).then(s)},Ae.prototype.primaryKeys=function(s){var o=this._ctx;if(o.dir==="next"&&zn(o,!0)&&0<o.limit)return this._read(function(u){var d=br(o,o.table.core.schema);return o.table.core.query({trans:u,values:!1,limit:o.limit,query:{index:d,range:o.range}})}).then(function(u){return u.result}).then(s);o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,d){l.push(d.primaryKey)}).then(function(){return l}).then(s)},Ae.prototype.uniqueKeys=function(s){return this._ctx.unique="unique",this.keys(s)},Ae.prototype.firstKey=function(s){return this.limit(1).keys(function(o){return o[0]}).then(s)},Ae.prototype.lastKey=function(s){return this.reverse().firstKey(s)},Ae.prototype.distinct=function(){var s=this._ctx,s=s.index&&s.table.schema.idxByName[s.index];if(!s||!s.multi)return this;var o={};return oi(this._ctx,function(d){var u=d.primaryKey.toString(),d=k(o,u);return o[u]=!0,!d}),this},Ae.prototype.modify=function(s){var o=this,l=this._ctx;return this._write(function(u){var d,p,g;g=typeof s=="function"?s:(d=c(s),p=d.length,function(P){for(var z=!1,I=0;I<p;++I){var L=d[I],M=s[L],W=ye(P,L);M instanceof Vn?(Te(P,L,M.execute(W)),z=!0):W!==M&&(Te(P,L,M),z=!0)}return z});var y=l.table.core,v=y.schema.primaryKey,C=v.outbound,_=v.extractKey,D=200,v=o.db._options.modifyChunkSize;v&&(D=typeof v=="object"?v[y.name]||v["*"]||200:v);function F(P,L){var I=L.failures,L=L.numFailures;A+=P-L;for(var M=0,W=c(I);M<W.length;M++){var Q=W[M];E.push(I[Q])}}var E=[],A=0,j=[];return o.clone().primaryKeys().then(function(P){function z(L){var M=Math.min(D,P.length-L);return y.getMany({trans:u,keys:P.slice(L,L+M),cache:"immutable"}).then(function(W){for(var Q=[],H=[],V=C?[]:null,te=[],G=0;G<M;++G){var se=W[G],me={value:T(se),primKey:P[L+G]};g.call(me,me.value,me)!==!1&&(me.value==null?te.push(P[L+G]):C||Ce(_(se),_(me.value))===0?(H.push(me.value),C&&V.push(P[L+G])):(te.push(P[L+G]),Q.push(me.value)))}return Promise.resolve(0<Q.length&&y.mutate({trans:u,type:"add",values:Q}).then(function(we){for(var ve in we.failures)te.splice(parseInt(ve),1);F(Q.length,we)})).then(function(){return(0<H.length||I&&typeof s=="object")&&y.mutate({trans:u,type:"put",keys:V,values:H,criteria:I,changeSpec:typeof s!="function"&&s,isAdditionalChunk:0<L}).then(function(we){return F(H.length,we)})}).then(function(){return(0<te.length||I&&s===li)&&y.mutate({trans:u,type:"delete",keys:te,criteria:I,isAdditionalChunk:0<L}).then(function(we){return F(te.length,we)})}).then(function(){return P.length>L+M&&z(L+D)})})}var I=zn(l)&&l.limit===1/0&&(typeof s!="function"||s===li)&&{index:l.index,range:l.range};return z(0).then(function(){if(0<E.length)throw new xe("Error modifying one or more objects",E,A,j);return P.length})})})},Ae.prototype.delete=function(){var s=this._ctx,o=s.range;return zn(s)&&(s.isPrimKey||o.type===3)?this._write(function(l){var u=s.table.core.schema.primaryKey,d=o;return s.table.core.count({trans:l,query:{index:u,range:d}}).then(function(p){return s.table.core.mutate({trans:l,type:"deleteRange",range:d}).then(function(g){var y=g.failures;if(g.lastResult,g.results,g=g.numFailures,g)throw new xe("Could not delete some values",Object.keys(y).map(function(C){return y[C]}),p-g);return p-g})})}):this.modify(li)},Ae);function Ae(){}var li=function(s,o){return o.value=null};function ka(s,o){return s<o?-1:s===o?0:1}function Ca(s,o){return o<s?-1:s===o?0:1}function St(s,o,l){return s=s instanceof ys?new s.Collection(s):s,s._ctx.error=new(l||TypeError)(o),s}function In(s){return new s.Collection(s,function(){return bs("")}).limit(0)}function wr(s,o,l,u){var d,p,g,y,C,_,D,v=l.length;if(!l.every(function(A){return typeof A=="string"}))return St(s,ls);function F(A){d=A==="next"?function(P){return P.toUpperCase()}:function(P){return P.toLowerCase()},p=A==="next"?function(P){return P.toLowerCase()}:function(P){return P.toUpperCase()},g=A==="next"?ka:Ca;var j=l.map(function(P){return{lower:p(P),upper:d(P)}}).sort(function(P,z){return g(P.lower,z.lower)});y=j.map(function(P){return P.upper}),C=j.map(function(P){return P.lower}),D=(_=A)==="next"?"":u}F("next"),s=new s.Collection(s,function(){return un(y[0],C[v-1]+u)}),s._ondirectionchange=function(A){F(A)};var E=0;return s._addAlgorithm(function(A,j,P){var z=A.key;if(typeof z!="string")return!1;var I=p(z);if(o(I,C,E))return!0;for(var L=null,M=E;M<v;++M){var W=(function(Q,H,V,te,G,se){for(var me=Math.min(Q.length,te.length),we=-1,ve=0;ve<me;++ve){var _t=H[ve];if(_t!==te[ve])return G(Q[ve],V[ve])<0?Q.substr(0,ve)+V[ve]+V.substr(ve+1):G(Q[ve],te[ve])<0?Q.substr(0,ve)+te[ve]+V.substr(ve+1):0<=we?Q.substr(0,we)+H[we]+V.substr(we+1):null;G(Q[ve],_t)<0&&(we=ve)}return me<te.length&&se==="next"?Q+V.substr(Q.length):me<Q.length&&se==="prev"?Q.substr(0,V.length):we<0?null:Q.substr(0,we)+te[we]+V.substr(we+1)})(z,I,y[M],C[M],g,_);W===null&&L===null?E=M+1:(L===null||0<g(L,W))&&(L=W)}return j(L!==null?function(){A.continue(L+D)}:P),!1}),s}function un(s,o,l,u){return{type:2,lower:s,upper:o,lowerOpen:l,upperOpen:u}}function bs(s){return{type:1,lower:s,upper:s}}var ys=(Object.defineProperty(ut.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ut.prototype.between=function(s,o,l,u){l=l!==!1,u=u===!0;try{return 0<this._cmp(s,o)||this._cmp(s,o)===0&&(l||u)&&(!l||!u)?In(this):new this.Collection(this,function(){return un(s,o,!l,!u)})}catch{return St(this,Qt)}},ut.prototype.equals=function(s){return s==null?St(this,Qt):new this.Collection(this,function(){return bs(s)})},ut.prototype.above=function(s){return s==null?St(this,Qt):new this.Collection(this,function(){return un(s,void 0,!0)})},ut.prototype.aboveOrEqual=function(s){return s==null?St(this,Qt):new this.Collection(this,function(){return un(s,void 0,!1)})},ut.prototype.below=function(s){return s==null?St(this,Qt):new this.Collection(this,function(){return un(void 0,s,!1,!0)})},ut.prototype.belowOrEqual=function(s){return s==null?St(this,Qt):new this.Collection(this,function(){return un(void 0,s)})},ut.prototype.startsWith=function(s){return typeof s!="string"?St(this,ls):this.between(s,s+yn,!0,!0)},ut.prototype.startsWithIgnoreCase=function(s){return s===""?this.startsWith(s):wr(this,function(o,l){return o.indexOf(l[0])===0},[s],yn)},ut.prototype.equalsIgnoreCase=function(s){return wr(this,function(o,l){return o===l[0]},[s],"")},ut.prototype.anyOfIgnoreCase=function(){var s=He.apply(K,arguments);return s.length===0?In(this):wr(this,function(o,l){return l.indexOf(o)!==-1},s,"")},ut.prototype.startsWithAnyOfIgnoreCase=function(){var s=He.apply(K,arguments);return s.length===0?In(this):wr(this,function(o,l){return l.some(function(u){return o.indexOf(u)===0})},s,yn)},ut.prototype.anyOf=function(){var s=this,o=He.apply(K,arguments),l=this._cmp;try{o.sort(l)}catch{return St(this,Qt)}if(o.length===0)return In(this);var u=new this.Collection(this,function(){return un(o[0],o[o.length-1])});u._ondirectionchange=function(p){l=p==="next"?s._ascending:s._descending,o.sort(l)};var d=0;return u._addAlgorithm(function(p,g,y){for(var C=p.key;0<l(C,o[d]);)if(++d===o.length)return g(y),!1;return l(C,o[d])===0||(g(function(){p.continue(o[d])}),!1)}),u},ut.prototype.notEqual=function(s){return this.inAnyRange([[-1/0,s],[s,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ut.prototype.noneOf=function(){var s=He.apply(K,arguments);if(s.length===0)return new this.Collection(this);try{s.sort(this._ascending)}catch{return St(this,Qt)}var o=s.reduce(function(l,u){return l?l.concat([[l[l.length-1][1],u]]):[[-1/0,u]]},null);return o.push([s[s.length-1],this.db._maxKey]),this.inAnyRange(o,{includeLowers:!1,includeUppers:!1})},ut.prototype.inAnyRange=function(z,o){var l=this,u=this._cmp,d=this._ascending,p=this._descending,g=this._min,y=this._max;if(z.length===0)return In(this);if(!z.every(function(I){return I[0]!==void 0&&I[1]!==void 0&&d(I[0],I[1])<=0}))return St(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var C=!o||o.includeLowers!==!1,_=o&&o.includeUppers===!0,D,v=d;function F(I,L){return v(I[0],L[0])}try{(D=z.reduce(function(I,L){for(var M=0,W=I.length;M<W;++M){var Q=I[M];if(u(L[0],Q[1])<0&&0<u(L[1],Q[0])){Q[0]=g(Q[0],L[0]),Q[1]=y(Q[1],L[1]);break}}return M===W&&I.push(L),I},[])).sort(F)}catch{return St(this,Qt)}var E=0,A=_?function(I){return 0<d(I,D[E][1])}:function(I){return 0<=d(I,D[E][1])},j=C?function(I){return 0<p(I,D[E][0])}:function(I){return 0<=p(I,D[E][0])},P=A,z=new this.Collection(this,function(){return un(D[0][0],D[D.length-1][1],!C,!_)});return z._ondirectionchange=function(I){v=I==="next"?(P=A,d):(P=j,p),D.sort(F)},z._addAlgorithm(function(I,L,M){for(var W,Q=I.key;P(Q);)if(++E===D.length)return L(M),!1;return!A(W=Q)&&!j(W)||(l._cmp(Q,D[E][1])===0||l._cmp(Q,D[E][0])===0||L(function(){v===d?I.continue(D[E][0]):I.continue(D[E][1])}),!1)}),z},ut.prototype.startsWithAnyOf=function(){var s=He.apply(K,arguments);return s.every(function(o){return typeof o=="string"})?s.length===0?In(this):this.inAnyRange(s.map(function(o){return[o,o+yn]})):St(this,"startsWithAnyOf() only works with strings")},ut);function ut(){}function Ht(s){return Be(function(o){return Yn(o),s(o.target.error),!1})}function Yn(s){s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault()}var Xn="storagemutated",ci="x-storagemutated-1",dn=Hn(null,Xn),Ea=(Kt.prototype._lock=function(){return ne(!Y.global),++this._reculock,this._reculock!==1||Y.global||(Y.lockOwnerFor=this),this},Kt.prototype._unlock=function(){if(ne(!Y.global),--this._reculock==0)for(Y.global||(Y.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var s=this._blockedFuncs.shift();try{bn(s[1],s[0])}catch{}}return this},Kt.prototype._locked=function(){return this._reculock&&Y.lockOwnerFor!==this},Kt.prototype.create=function(s){var o=this;if(!this.mode)return this;var l=this.db.idbdb,u=this.db._state.dbOpenError;if(ne(!this.idbtrans),!s&&!l)switch(u&&u.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(u);case"MissingAPIError":throw new ee.MissingAPI(u.message,u);default:throw new ee.OpenFailed(u)}if(!this.active)throw new ee.TransactionInactive;return ne(this._completion._state===null),(s=this.idbtrans=s||(this.db.core||l).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Be(function(d){Yn(d),o._reject(s.error)}),s.onabort=Be(function(d){Yn(d),o.active&&o._reject(new ee.Abort(s.error)),o.active=!1,o.on("abort").fire(d)}),s.oncomplete=Be(function(){o.active=!1,o._resolve(),"mutatedParts"in s&&dn.storagemutated.fire(s.mutatedParts)}),this},Kt.prototype._promise=function(s,o,l){var u=this;if(s==="readwrite"&&this.mode!=="readwrite")return et(new ee.ReadOnly("Transaction is readonly"));if(!this.active)return et(new ee.TransactionInactive);if(this._locked())return new X(function(p,g){u._blockedFuncs.push([function(){u._promise(s,o,l).then(p,g)},Y])});if(l)return an(function(){var p=new X(function(g,y){u._lock();var C=o(g,y,u);C&&C.then&&C.then(g,y)});return p.finally(function(){return u._unlock()}),p._lib=!0,p});var d=new X(function(p,g){var y=o(p,g,u);y&&y.then&&y.then(p,g)});return d._lib=!0,d},Kt.prototype._root=function(){return this.parent?this.parent._root():this},Kt.prototype.waitFor=function(s){var o,l=this._root(),u=X.resolve(s);l._waitingFor?l._waitingFor=l._waitingFor.then(function(){return u}):(l._waitingFor=u,l._waitingQueue=[],o=l.idbtrans.objectStore(l.storeNames[0]),(function p(){for(++l._spinCount;l._waitingQueue.length;)l._waitingQueue.shift()();l._waitingFor&&(o.get(-1/0).onsuccess=p)})());var d=l._waitingFor;return new X(function(p,g){u.then(function(y){return l._waitingQueue.push(Be(p.bind(null,y)))},function(y){return l._waitingQueue.push(Be(g.bind(null,y)))}).finally(function(){l._waitingFor===d&&(l._waitingFor=null)})})},Kt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},Kt.prototype.table=function(s){var o=this._memoizedTables||(this._memoizedTables={});if(k(o,s))return o[s];var l=this.schema[s];if(!l)throw new ee.NotFound("Table "+s+" not part of transaction");return l=new this.db.Table(s,l,this),l.core=this.db.core.table(s),o[s]=l},Kt);function Kt(){}function ui(s,o,l,u,d,p,g){return{name:s,keyPath:o,unique:l,multi:u,auto:d,compound:p,src:(l&&!g?"&":"")+(u?"*":"")+(d?"++":"")+ws(o)}}function ws(s){return typeof s=="string"?s:s?"["+[].join.call(s,"+")+"]":""}function di(s,o,l){return{name:s,primKey:o,indexes:l,mappedClass:null,idxByName:(u=function(d){return[d.name,d]},l.reduce(function(d,p,g){return g=u(p,g),g&&(d[g[0]]=g[1]),d},{}))};var u}var Gn=function(s){try{return s.only([[]]),Gn=function(){return[[]]},[[]]}catch{return Gn=function(){return yn},yn}};function fi(s){return s==null?function(){}:typeof s=="string"?(o=s).split(".").length===1?function(l){return l[o]}:function(l){return ye(l,o)}:function(l){return ye(l,s)};var o}function vs(s){return[].slice.call(s)}var Sa=0;function Qn(s){return s==null?":id":typeof s=="string"?s:"[".concat(s.join("+"),"]")}function _a(s,o,C){function u(P){if(P.type===3)return null;if(P.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var E=P.lower,A=P.upper,j=P.lowerOpen,P=P.upperOpen;return E===void 0?A===void 0?null:o.upperBound(A,!!P):A===void 0?o.lowerBound(E,!!j):o.bound(E,A,!!j,!!P)}function d(F){var E,A=F.name;return{name:A,schema:F,mutate:function(j){var P=j.trans,z=j.type,I=j.keys,L=j.values,M=j.range;return new Promise(function(W,Q){W=Be(W);var H=P.objectStore(A),V=H.keyPath==null,te=z==="put"||z==="add";if(!te&&z!=="delete"&&z!=="deleteRange")throw new Error("Invalid operation type: "+z);var G,se=(I||L||{length:1}).length;if(I&&L&&I.length!==L.length)throw new Error("Given keys array must have same length as given values array.");if(se===0)return W({numFailures:0,failures:{},results:[],lastResult:void 0});function me(wt){++_t,Yn(wt)}var we=[],ve=[],_t=0;if(z==="deleteRange"){if(M.type===4)return W({numFailures:_t,failures:ve,results:[],lastResult:void 0});M.type===3?we.push(G=H.clear()):we.push(G=H.delete(u(M)))}else{var V=te?V?[L,I]:[L,null]:[I,null],pe=V[0],mt=V[1];if(te)for(var gt=0;gt<se;++gt)we.push(G=mt&&mt[gt]!==void 0?H[z](pe[gt],mt[gt]):H[z](pe[gt])),G.onerror=me;else for(gt=0;gt<se;++gt)we.push(G=H[z](pe[gt])),G.onerror=me}function jr(wt){wt=wt.target.result,we.forEach(function($n,Di){return $n.error!=null&&(ve[Di]=$n.error)}),W({numFailures:_t,failures:ve,results:z==="delete"?I:we.map(function($n){return $n.result}),lastResult:wt})}G.onerror=function(wt){me(wt),jr(wt)},G.onsuccess=jr})},getMany:function(j){var P=j.trans,z=j.keys;return new Promise(function(I,L){I=Be(I);for(var M,W=P.objectStore(A),Q=z.length,H=new Array(Q),V=0,te=0,G=function(we){we=we.target,H[we._pos]=we.result,++te===V&&I(H)},se=Ht(L),me=0;me<Q;++me)z[me]!=null&&((M=W.get(z[me]))._pos=me,M.onsuccess=G,M.onerror=se,++V);V===0&&I(H)})},get:function(j){var P=j.trans,z=j.key;return new Promise(function(I,L){I=Be(I);var M=P.objectStore(A).get(z);M.onsuccess=function(W){return I(W.target.result)},M.onerror=Ht(L)})},query:(E=_,function(j){return new Promise(function(P,z){P=Be(P);var I,L,M,V=j.trans,W=j.values,Q=j.limit,G=j.query,H=Q===1/0?void 0:Q,te=G.index,G=G.range,V=V.objectStore(A),te=te.isPrimaryKey?V:V.index(te.name),G=u(G);if(Q===0)return P({result:[]});E?((H=W?te.getAll(G,H):te.getAllKeys(G,H)).onsuccess=function(se){return P({result:se.target.result})},H.onerror=Ht(z)):(I=0,L=!W&&"openKeyCursor"in te?te.openKeyCursor(G):te.openCursor(G),M=[],L.onsuccess=function(se){var me=L.result;return me?(M.push(W?me.value:me.primaryKey),++I===Q?P({result:M}):void me.continue()):P({result:M})},L.onerror=Ht(z))})}),openCursor:function(j){var P=j.trans,z=j.values,I=j.query,L=j.reverse,M=j.unique;return new Promise(function(W,Q){W=Be(W);var te=I.index,H=I.range,V=P.objectStore(A),V=te.isPrimaryKey?V:V.index(te.name),te=L?M?"prevunique":"prev":M?"nextunique":"next",G=!z&&"openKeyCursor"in V?V.openKeyCursor(u(H),te):V.openCursor(u(H),te);G.onerror=Ht(Q),G.onsuccess=Be(function(se){var me,we,ve,_t,pe=G.result;pe?(pe.___id=++Sa,pe.done=!1,me=pe.continue.bind(pe),we=(we=pe.continuePrimaryKey)&&we.bind(pe),ve=pe.advance.bind(pe),_t=function(){throw new Error("Cursor not stopped")},pe.trans=P,pe.stop=pe.continue=pe.continuePrimaryKey=pe.advance=function(){throw new Error("Cursor not started")},pe.fail=Be(Q),pe.next=function(){var mt=this,gt=1;return this.start(function(){return gt--?mt.continue():mt.stop()}).then(function(){return mt})},pe.start=function(mt){function gt(){if(G.result)try{mt()}catch(wt){pe.fail(wt)}else pe.done=!0,pe.start=function(){throw new Error("Cursor behind last entry")},pe.stop()}var jr=new Promise(function(wt,$n){wt=Be(wt),G.onerror=Ht($n),pe.fail=$n,pe.stop=function(Di){pe.stop=pe.continue=pe.continuePrimaryKey=pe.advance=_t,wt(Di)}});return G.onsuccess=Be(function(wt){G.onsuccess=gt,gt()}),pe.continue=me,pe.continuePrimaryKey=we,pe.advance=ve,gt(),jr},W(pe)):W(null)},Q)})},count:function(j){var P=j.query,z=j.trans,I=P.index,L=P.range;return new Promise(function(M,W){var Q=z.objectStore(A),H=I.isPrimaryKey?Q:Q.index(I.name),Q=u(L),H=Q?H.count(Q):H.count();H.onsuccess=Be(function(V){return M(V.target.result)}),H.onerror=Ht(W)})}}}var p,g,y,D=(g=C,y=vs((p=s).objectStoreNames),{schema:{name:p.name,tables:y.map(function(F){return g.objectStore(F)}).map(function(F){var E=F.keyPath,P=F.autoIncrement,A=f(E),j={},P={name:F.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:E==null,compound:A,keyPath:E,autoIncrement:P,unique:!0,extractKey:fi(E)},indexes:vs(F.indexNames).map(function(z){return F.index(z)}).map(function(M){var I=M.name,L=M.unique,W=M.multiEntry,M=M.keyPath,W={name:I,compound:f(M),keyPath:M,unique:L,multiEntry:W,extractKey:fi(M)};return j[Qn(M)]=W}),getIndexByKeyPath:function(z){return j[Qn(z)]}};return j[":id"]=P.primaryKey,E!=null&&(j[Qn(E)]=P.primaryKey),P})},hasGetAll:0<y.length&&"getAll"in g.objectStore(y[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),C=D.schema,_=D.hasGetAll,D=C.tables.map(d),v={};return D.forEach(function(F){return v[F.name]=F}),{stack:"dbcore",transaction:s.transaction.bind(s),table:function(F){if(!v[F])throw new Error("Table '".concat(F,"' not found"));return v[F]},MIN_KEY:-1/0,MAX_KEY:Gn(o),schema:C}}function Pa(s,o,l,u){var d=l.IDBKeyRange;return l.indexedDB,{dbcore:(u=_a(o,d,u),s.dbcore.reduce(function(p,g){return g=g.create,i(i({},p),g(p))},u))}}function vr(s,u){var l=u.db,u=Pa(s._middlewares,l,s._deps,u);s.core=u.dbcore,s.tables.forEach(function(d){var p=d.name;s.core.schema.tables.some(function(g){return g.name===p})&&(d.core=s.core.table(p),s[p]instanceof s.Table&&(s[p].core=d.core))})}function xr(s,o,l,u){l.forEach(function(d){var p=u[d];o.forEach(function(g){var y=(function C(_,D){return de(_,D)||(_=$(_))&&C(_,D)})(g,d);(!y||"value"in y&&y.value===void 0)&&(g===s.Transaction.prototype||g instanceof s.Transaction?q(g,d,{get:function(){return this.table(d)},set:function(C){B(this,d,{value:C,writable:!0,configurable:!0,enumerable:!0})}}):g[d]=new s.Table(d,p))})})}function hi(s,o){o.forEach(function(l){for(var u in l)l[u]instanceof s.Table&&delete l[u]})}function Aa(s,o){return s._cfg.version-o._cfg.version}function Da(s,o,l,u){var d=s._dbSchema;l.objectStoreNames.contains("$meta")&&!d.$meta&&(d.$meta=di("$meta",$s("")[0],[]),s._storeNames.push("$meta"));var p=s._createTransaction("readwrite",s._storeNames,d);p.create(l),p._completion.catch(u);var g=p._reject.bind(p),y=Y.transless||Y;an(function(){return Y.trans=p,Y.transless=y,o!==0?(vr(s,l),_=o,((C=p).storeNames.includes("$meta")?C.table("$meta").get("version").then(function(D){return D??_}):X.resolve(_)).then(function(D){return F=D,E=p,A=l,j=[],D=(v=s)._versions,P=v._dbSchema=kr(0,v.idbdb,A),(D=D.filter(function(z){return z._cfg.version>=F})).length!==0?(D.forEach(function(z){j.push(function(){var I=P,L=z._cfg.dbschema;Cr(v,I,A),Cr(v,L,A),P=v._dbSchema=L;var M=pi(I,L);M.add.forEach(function(te){mi(A,te[0],te[1].primKey,te[1].indexes)}),M.change.forEach(function(te){if(te.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var G=A.objectStore(te.name);te.add.forEach(function(se){return $r(G,se)}),te.change.forEach(function(se){G.deleteIndex(se.name),$r(G,se)}),te.del.forEach(function(se){return G.deleteIndex(se)})});var W=z._cfg.contentUpgrade;if(W&&z._cfg.version>F){vr(v,A),E._memoizedTables={};var Q=vt(L);M.del.forEach(function(te){Q[te]=I[te]}),hi(v,[v.Transaction.prototype]),xr(v,[v.Transaction.prototype],c(Q),Q),E.schema=Q;var H,V=rt(W);return V&&On(),M=X.follow(function(){var te;(H=W(E))&&V&&(te=ln.bind(null,null),H.then(te,te))}),H&&typeof H.then=="function"?X.resolve(H):M.then(function(){return H})}}),j.push(function(I){var L,M,W=z._cfg.dbschema;L=W,M=I,[].slice.call(M.db.objectStoreNames).forEach(function(Q){return L[Q]==null&&M.db.deleteObjectStore(Q)}),hi(v,[v.Transaction.prototype]),xr(v,[v.Transaction.prototype],v._storeNames,v._dbSchema),E.schema=v._dbSchema}),j.push(function(I){v.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(v.idbdb.version/10)===z._cfg.version?(v.idbdb.deleteObjectStore("$meta"),delete v._dbSchema.$meta,v._storeNames=v._storeNames.filter(function(L){return L!=="$meta"})):I.objectStore("$meta").put(z._cfg.version,"version"))})}),(function z(){return j.length?X.resolve(j.shift()(E.idbtrans)).then(z):X.resolve()})().then(function(){xs(P,A)})):X.resolve();var v,F,E,A,j,P}).catch(g)):(c(d).forEach(function(D){mi(l,D,d[D].primKey,d[D].indexes)}),vr(s,l),void X.follow(function(){return s.on.populate.fire(p)}).catch(g));var C,_})}function Ta(s,o){xs(s._dbSchema,o),o.db.version%10!=0||o.objectStoreNames.contains("$meta")||o.db.createObjectStore("$meta").add(Math.ceil(o.db.version/10-1),"version");var l=kr(0,s.idbdb,o);Cr(s,s._dbSchema,o);for(var u=0,d=pi(l,s._dbSchema).change;u<d.length;u++){var p=(function(g){if(g.change.length||g.recreate)return console.warn("Unable to patch indexes of table ".concat(g.name," because it has changes on the type of index or primary key.")),{value:void 0};var y=o.objectStore(g.name);g.add.forEach(function(C){De&&console.debug("Dexie upgrade patch: Creating missing index ".concat(g.name,".").concat(C.src)),$r(y,C)})})(d[u]);if(typeof p=="object")return p.value}}function pi(s,o){var l,u={del:[],add:[],change:[]};for(l in s)o[l]||u.del.push(l);for(l in o){var d=s[l],p=o[l];if(d){var g={name:l,def:p,recreate:!1,del:[],add:[],change:[]};if(""+(d.primKey.keyPath||"")!=""+(p.primKey.keyPath||"")||d.primKey.auto!==p.primKey.auto)g.recreate=!0,u.change.push(g);else{var y=d.idxByName,C=p.idxByName,_=void 0;for(_ in y)C[_]||g.del.push(_);for(_ in C){var D=y[_],v=C[_];D?D.src!==v.src&&g.change.push(v):g.add.push(v)}(0<g.del.length||0<g.add.length||0<g.change.length)&&u.change.push(g)}}else u.add.push([l,p])}return u}function mi(s,o,l,u){var d=s.db.createObjectStore(o,l.keyPath?{keyPath:l.keyPath,autoIncrement:l.auto}:{autoIncrement:l.auto});return u.forEach(function(p){return $r(d,p)}),d}function xs(s,o){c(s).forEach(function(l){o.db.objectStoreNames.contains(l)||(De&&console.debug("Dexie: Creating missing table",l),mi(o,l,s[l].primKey,s[l].indexes))})}function $r(s,o){s.createIndex(o.name,o.keyPath,{unique:o.unique,multiEntry:o.multi})}function kr(s,o,l){var u={};return be(o.objectStoreNames,0).forEach(function(d){for(var p=l.objectStore(d),g=ui(ws(_=p.keyPath),_||"",!0,!1,!!p.autoIncrement,_&&typeof _!="string",!0),y=[],C=0;C<p.indexNames.length;++C){var D=p.index(p.indexNames[C]),_=D.keyPath,D=ui(D.name,_,!!D.unique,!!D.multiEntry,!1,_&&typeof _!="string",!1);y.push(D)}u[d]=di(d,g,y)}),u}function Cr(s,o,l){for(var u=l.db.objectStoreNames,d=0;d<u.length;++d){var p=u[d],g=l.objectStore(p);s._hasGetAll="getAll"in g;for(var y=0;y<g.indexNames.length;++y){var C=g.indexNames[y],_=g.index(C).keyPath,D=typeof _=="string"?_:"["+be(_).join("+")+"]";!o[p]||(_=o[p].idxByName[D])&&(_.name=C,delete o[p].idxByName[D],o[p].idxByName[C]=_)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&a.WorkerGlobalScope&&a instanceof a.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(s._hasGetAll=!1)}function $s(s){return s.split(",").map(function(o,l){var u=(o=o.trim()).replace(/([&*]|\+\+)/g,""),d=/^\[/.test(u)?u.match(/^\[(.*)\]$/)[1].split("+"):u;return ui(u,d||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),f(d),l===0)})}var ja=(Er.prototype._parseStoresSpec=function(s,o){c(s).forEach(function(l){if(s[l]!==null){var u=$s(s[l]),d=u.shift();if(d.unique=!0,d.multi)throw new ee.Schema("Primary key cannot be multi-valued");u.forEach(function(p){if(p.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!p.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),o[l]=di(l,d,u)}})},Er.prototype.stores=function(l){var o=this.db;this._cfg.storesSource=this._cfg.storesSource?m(this._cfg.storesSource,l):l;var l=o._versions,u={},d={};return l.forEach(function(p){m(u,p._cfg.storesSource),d=p._cfg.dbschema={},p._parseStoresSpec(u,d)}),o._dbSchema=d,hi(o,[o._allTables,o,o.Transaction.prototype]),xr(o,[o._allTables,o,o.Transaction.prototype,this._cfg.tables],c(d),d),o._storeNames=c(d),this},Er.prototype.upgrade=function(s){return this._cfg.contentUpgrade=Ct(this._cfg.contentUpgrade||ce,s),this},Er);function Er(){}function gi(s,o){var l=s._dbNamesDB;return l||(l=s._dbNamesDB=new Zt(mr,{addons:[],indexedDB:s,IDBKeyRange:o})).version(1).stores({dbnames:"name"}),l.table("dbnames")}function bi(s){return s&&typeof s.databases=="function"}function yi(s){return an(function(){return Y.letThrough=!0,s()})}function wi(s){return!("from"in s)}var pt=function(s,o){if(!this){var l=new pt;return s&&"d"in s&&m(l,s),l}m(this,arguments.length?{d:1,from:s,to:1<arguments.length?o:s}:{d:0})};function Jn(s,o,l){var u=Ce(o,l);if(!isNaN(u)){if(0<u)throw RangeError();if(wi(s))return m(s,{from:o,to:l,d:1});var d=s.l,u=s.r;if(Ce(l,s.from)<0)return d?Jn(d,o,l):s.l={from:o,to:l,d:1,l:null,r:null},Cs(s);if(0<Ce(o,s.to))return u?Jn(u,o,l):s.r={from:o,to:l,d:1,l:null,r:null},Cs(s);Ce(o,s.from)<0&&(s.from=o,s.l=null,s.d=u?u.d+1:1),0<Ce(l,s.to)&&(s.to=l,s.r=null,s.d=s.l?s.l.d+1:1),l=!s.r,d&&!s.l&&Zn(s,d),u&&l&&Zn(s,u)}}function Zn(s,o){wi(o)||(function l(u,C){var p=C.from,g=C.to,y=C.l,C=C.r;Jn(u,p,g),y&&l(u,y),C&&l(u,C)})(s,o)}function ks(s,o){var l=Sr(o),u=l.next();if(u.done)return!1;for(var d=u.value,p=Sr(s),g=p.next(d.from),y=g.value;!u.done&&!g.done;){if(Ce(y.from,d.to)<=0&&0<=Ce(y.to,d.from))return!0;Ce(d.from,y.from)<0?d=(u=l.next(y.from)).value:y=(g=p.next(d.from)).value}return!1}function Sr(s){var o=wi(s)?null:{s:0,n:s};return{next:function(l){for(var u=0<arguments.length;o;)switch(o.s){case 0:if(o.s=1,u)for(;o.n.l&&Ce(l,o.n.from)<0;)o={up:o,n:o.n.l,s:1};else for(;o.n.l;)o={up:o,n:o.n.l,s:1};case 1:if(o.s=2,!u||Ce(l,o.n.to)<=0)return{value:o.n,done:!1};case 2:if(o.n.r){o.s=3,o={up:o,n:o.n.r,s:0};continue}case 3:o=o.up}return{done:!0}}}}function Cs(s){var o,l,u=(((o=s.r)===null||o===void 0?void 0:o.d)||0)-(((l=s.l)===null||l===void 0?void 0:l.d)||0),d=1<u?"r":u<-1?"l":"";d&&(o=d=="r"?"l":"r",l=i({},s),u=s[d],s.from=u.from,s.to=u.to,s[d]=u[d],l[d]=u[o],(s[o]=l).d=Es(l)),s.d=Es(s)}function Es(l){var o=l.r,l=l.l;return(o?l?Math.max(o.d,l.d):o.d:l?l.d:0)+1}function _r(s,o){return c(o).forEach(function(l){s[l]?Zn(s[l],o[l]):s[l]=(function u(d){var p,g,y={};for(p in d)k(d,p)&&(g=d[p],y[p]=!g||typeof g!="object"||h.has(g.constructor)?g:u(g));return y})(o[l])}),s}function vi(s,o){return s.all||o.all||Object.keys(s).some(function(l){return o[l]&&ks(o[l],s[l])})}O(pt.prototype,((Tt={add:function(s){return Zn(this,s),this},addKey:function(s){return Jn(this,s,s),this},addKeys:function(s){var o=this;return s.forEach(function(l){return Jn(o,l,l)}),this},hasKey:function(s){var o=Sr(this).next(s).value;return o&&Ce(o.from,s)<=0&&0<=Ce(o.to,s)}})[ae]=function(){return Sr(this)},Tt));var vn={},xi={},$i=!1;function Pr(s){_r(xi,s),$i||($i=!0,setTimeout(function(){$i=!1,ki(xi,!(xi={}))},0))}function ki(s,o){o===void 0&&(o=!1);var l=new Set;if(s.all)for(var u=0,d=Object.values(vn);u<d.length;u++)Ss(g=d[u],s,l,o);else for(var p in s){var g,y=/^idb\:\/\/(.*)\/(.*)\//.exec(p);y&&(p=y[1],y=y[2],(g=vn["idb://".concat(p,"/").concat(y)])&&Ss(g,s,l,o))}l.forEach(function(C){return C()})}function Ss(s,o,l,u){for(var d=[],p=0,g=Object.entries(s.queries.query);p<g.length;p++){for(var y=g[p],C=y[0],_=[],D=0,v=y[1];D<v.length;D++){var F=v[D];vi(o,F.obsSet)?F.subscribers.forEach(function(P){return l.add(P)}):u&&_.push(F)}u&&d.push([C,_])}if(u)for(var E=0,A=d;E<A.length;E++){var j=A[E],C=j[0],_=j[1];s.queries.query[C]=_}}function Fa(s){var o=s._state,l=s._deps.indexedDB;if(o.isBeingOpened||s.idbdb)return o.dbReadyPromise.then(function(){return o.dbOpenError?et(o.dbOpenError):s});o.isBeingOpened=!0,o.dbOpenError=null,o.openComplete=!1;var u=o.openCanceller,d=Math.round(10*s.verno),p=!1;function g(){if(o.openCanceller!==u)throw new ee.DatabaseClosed("db.open() was cancelled")}function y(){return new X(function(F,E){if(g(),!l)throw new ee.MissingAPI;var A=s.name,j=o.autoSchema||!d?l.open(A):l.open(A,d);if(!j)throw new ee.MissingAPI;j.onerror=Ht(E),j.onblocked=Be(s._fireOnBlocked),j.onupgradeneeded=Be(function(P){var z;D=j.transaction,o.autoSchema&&!s._options.allowEmptyDB?(j.onerror=Yn,D.abort(),j.result.close(),(z=l.deleteDatabase(A)).onsuccess=z.onerror=Be(function(){E(new ee.NoSuchDatabase("Database ".concat(A," doesnt exist")))})):(D.onerror=Ht(E),P=P.oldVersion>Math.pow(2,62)?0:P.oldVersion,v=P<1,s.idbdb=j.result,p&&Ta(s,D),Da(s,P/10,D,E))},E),j.onsuccess=Be(function(){D=null;var P,z,I,L,M,W=s.idbdb=j.result,Q=be(W.objectStoreNames);if(0<Q.length)try{var H=W.transaction((L=Q).length===1?L[0]:L,"readonly");if(o.autoSchema)z=W,I=H,(P=s).verno=z.version/10,I=P._dbSchema=kr(0,z,I),P._storeNames=be(z.objectStoreNames,0),xr(P,[P._allTables],c(I),I);else if(Cr(s,s._dbSchema,H),((M=pi(kr(0,(M=s).idbdb,H),M._dbSchema)).add.length||M.change.some(function(V){return V.add.length||V.change.length}))&&!p)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),W.close(),d=W.version+1,p=!0,F(y());vr(s,H)}catch{}Rn.push(s),W.onversionchange=Be(function(V){o.vcFired=!0,s.on("versionchange").fire(V)}),W.onclose=Be(function(V){s.on("close").fire(V)}),v&&(M=s._deps,H=A,W=M.indexedDB,M=M.IDBKeyRange,bi(W)||H===mr||gi(W,M).put({name:H}).catch(ce)),F()},E)}).catch(function(F){switch(F?.name){case"UnknownError":if(0<o.PR1398_maxLoop)return o.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),y();break;case"VersionError":if(0<d)return d=0,y()}return X.reject(F)})}var C,_=o.dbReadyResolve,D=null,v=!1;return X.race([u,(typeof navigator>"u"?X.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(F){function E(){return indexedDB.databases().finally(F)}C=setInterval(E,100),E()}).finally(function(){return clearInterval(C)}):Promise.resolve()).then(y)]).then(function(){return g(),o.onReadyBeingFired=[],X.resolve(yi(function(){return s.on.ready.fire(s.vip)})).then(function F(){if(0<o.onReadyBeingFired.length){var E=o.onReadyBeingFired.reduce(Ct,ce);return o.onReadyBeingFired=[],X.resolve(yi(function(){return E(s.vip)})).then(F)}})}).finally(function(){o.openCanceller===u&&(o.onReadyBeingFired=null,o.isBeingOpened=!1)}).catch(function(F){o.dbOpenError=F;try{D&&D.abort()}catch{}return u===o.openCanceller&&s._close(),et(F)}).finally(function(){o.openComplete=!0,_()}).then(function(){var F;return v&&(F={},s.tables.forEach(function(E){E.schema.indexes.forEach(function(A){A.name&&(F["idb://".concat(s.name,"/").concat(E.name,"/").concat(A.name)]=new pt(-1/0,[[[]]]))}),F["idb://".concat(s.name,"/").concat(E.name,"/")]=F["idb://".concat(s.name,"/").concat(E.name,"/:dels")]=new pt(-1/0,[[[]]])}),dn(Xn).fire(F),ki(F,!0)),s})}function Ci(s){function o(p){return s.next(p)}var l=d(o),u=d(function(p){return s.throw(p)});function d(p){return function(C){var y=p(C),C=y.value;return y.done?C:C&&typeof C.then=="function"?C.then(l,u):f(C)?Promise.all(C).then(l,u):l(C)}}return d(o)()}function Ar(s,o,l){for(var u=f(s)?s.slice():[s],d=0;d<l;++d)u.push(o);return u}var Oa={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(s){return i(i({},s),{table:function(o){var l=s.table(o),u=l.schema,d={},p=[];function g(v,F,E){var A=Qn(v),j=d[A]=d[A]||[],P=v==null?0:typeof v=="string"?1:v.length,z=0<F,z=i(i({},E),{name:z?"".concat(A,"(virtual-from:").concat(E.name,")"):E.name,lowLevelIndex:E,isVirtual:z,keyTail:F,keyLength:P,extractKey:fi(v),unique:!z&&E.unique});return j.push(z),z.isPrimaryKey||p.push(z),1<P&&g(P===2?v[0]:v.slice(0,P-1),F+1,E),j.sort(function(I,L){return I.keyTail-L.keyTail}),z}o=g(u.primaryKey.keyPath,0,u.primaryKey),d[":id"]=[o];for(var y=0,C=u.indexes;y<C.length;y++){var _=C[y];g(_.keyPath,0,_)}function D(v){var F,E=v.query.index;return E.isVirtual?i(i({},v),{query:{index:E.lowLevelIndex,range:(F=v.query.range,E=E.keyTail,{type:F.type===1?2:F.type,lower:Ar(F.lower,F.lowerOpen?s.MAX_KEY:s.MIN_KEY,E),lowerOpen:!0,upper:Ar(F.upper,F.upperOpen?s.MIN_KEY:s.MAX_KEY,E),upperOpen:!0})}}):v}return i(i({},l),{schema:i(i({},u),{primaryKey:o,indexes:p,getIndexByKeyPath:function(v){return(v=d[Qn(v)])&&v[0]}}),count:function(v){return l.count(D(v))},query:function(v){return l.query(D(v))},openCursor:function(v){var F=v.query.index,E=F.keyTail,A=F.isVirtual,j=F.keyLength;return A?l.openCursor(D(v)).then(function(z){return z&&P(z)}):l.openCursor(v);function P(z){return Object.create(z,{continue:{value:function(I){I!=null?z.continue(Ar(I,v.reverse?s.MAX_KEY:s.MIN_KEY,E)):v.unique?z.continue(z.key.slice(0,j).concat(v.reverse?s.MIN_KEY:s.MAX_KEY,E)):z.continue()}},continuePrimaryKey:{value:function(I,L){z.continuePrimaryKey(Ar(I,s.MAX_KEY,E),L)}},primaryKey:{get:function(){return z.primaryKey}},key:{get:function(){var I=z.key;return j===1?I[0]:I.slice(0,j)}},value:{get:function(){return z.value}}})}}})}})}};function Ei(s,o,l,u){return l=l||{},u=u||"",c(s).forEach(function(d){var p,g,y;k(o,d)?(p=s[d],g=o[d],typeof p=="object"&&typeof g=="object"&&p&&g?(y=x(p))!==x(g)?l[u+d]=o[d]:y==="Object"?Ei(p,g,l,u+d+"."):p!==g&&(l[u+d]=o[d]):p!==g&&(l[u+d]=o[d])):l[u+d]=void 0}),c(o).forEach(function(d){k(s,d)||(l[u+d]=o[d])}),l}function Si(s,o){return o.type==="delete"?o.keys:o.keys||o.values.map(s.extractKey)}var Ra={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(s){return i(i({},s),{table:function(o){var l=s.table(o),u=l.schema.primaryKey;return i(i({},l),{mutate:function(d){var p=Y.trans,g=p.table(o).hook,y=g.deleting,C=g.creating,_=g.updating;switch(d.type){case"add":if(C.fire===ce)break;return p._promise("readwrite",function(){return D(d)},!0);case"put":if(C.fire===ce&&_.fire===ce)break;return p._promise("readwrite",function(){return D(d)},!0);case"delete":if(y.fire===ce)break;return p._promise("readwrite",function(){return D(d)},!0);case"deleteRange":if(y.fire===ce)break;return p._promise("readwrite",function(){return(function v(F,E,A){return l.query({trans:F,values:!1,query:{index:u,range:E},limit:A}).then(function(j){var P=j.result;return D({type:"delete",keys:P,trans:F}).then(function(z){return 0<z.numFailures?Promise.reject(z.failures[0]):P.length<A?{failures:[],numFailures:0,lastResult:void 0}:v(F,i(i({},E),{lower:P[P.length-1],lowerOpen:!0}),A)})})})(d.trans,d.range,1e4)},!0)}return l.mutate(d);function D(v){var F,E,A,j=Y.trans,P=v.keys||Si(u,v);if(!P)throw new Error("Keys missing");return(v=v.type==="add"||v.type==="put"?i(i({},v),{keys:P}):i({},v)).type!=="delete"&&(v.values=n([],v.values)),v.keys&&(v.keys=n([],v.keys)),F=l,A=P,((E=v).type==="add"?Promise.resolve([]):F.getMany({trans:E.trans,keys:A,cache:"immutable"})).then(function(z){var I=P.map(function(L,M){var W,Q,H,V=z[M],te={onerror:null,onsuccess:null};return v.type==="delete"?y.fire.call(te,L,V,j):v.type==="add"||V===void 0?(W=C.fire.call(te,L,v.values[M],j),L==null&&W!=null&&(v.keys[M]=L=W,u.outbound||Te(v.values[M],u.keyPath,L))):(W=Ei(V,v.values[M]),(Q=_.fire.call(te,W,L,V,j))&&(H=v.values[M],Object.keys(Q).forEach(function(G){k(H,G)?H[G]=Q[G]:Te(H,G,Q[G])}))),te});return l.mutate(v).then(function(L){for(var M=L.failures,W=L.results,Q=L.numFailures,L=L.lastResult,H=0;H<P.length;++H){var V=(W||P)[H],te=I[H];V==null?te.onerror&&te.onerror(M[H]):te.onsuccess&&te.onsuccess(v.type==="put"&&z[H]?v.values[H]:V)}return{failures:M,results:W,numFailures:Q,lastResult:L}}).catch(function(L){return I.forEach(function(M){return M.onerror&&M.onerror(L)}),Promise.reject(L)})})}}})}})}};function _s(s,o,l){try{if(!o||o.keys.length<s.length)return null;for(var u=[],d=0,p=0;d<o.keys.length&&p<s.length;++d)Ce(o.keys[d],s[p])===0&&(u.push(l?T(o.values[d]):o.values[d]),++p);return u.length===s.length?u:null}catch{return null}}var za={stack:"dbcore",level:-1,create:function(s){return{table:function(o){var l=s.table(o);return i(i({},l),{getMany:function(u){if(!u.cache)return l.getMany(u);var d=_s(u.keys,u.trans._cache,u.cache==="clone");return d?X.resolve(d):l.getMany(u).then(function(p){return u.trans._cache={keys:u.keys,values:u.cache==="clone"?T(p):p},p})},mutate:function(u){return u.type!=="add"&&(u.trans._cache=null),l.mutate(u)}})}}}};function Ps(s,o){return s.trans.mode==="readonly"&&!!s.subscr&&!s.trans.explicit&&s.trans.db._options.cache!=="disabled"&&!o.schema.primaryKey.outbound}function As(s,o){switch(s){case"query":return o.values&&!o.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Ia={stack:"dbcore",level:0,name:"Observability",create:function(s){var o=s.schema.name,l=new pt(s.MIN_KEY,s.MAX_KEY);return i(i({},s),{transaction:function(u,d,p){if(Y.subscr&&d!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Y.querier));return s.transaction(u,d,p)},table:function(u){var d=s.table(u),p=d.schema,g=p.primaryKey,v=p.indexes,y=g.extractKey,C=g.outbound,_=g.autoIncrement&&v.filter(function(E){return E.compound&&E.keyPath.includes(g.keyPath)}),D=i(i({},d),{mutate:function(E){function A(G){return G="idb://".concat(o,"/").concat(u,"/").concat(G),L[G]||(L[G]=new pt)}var j,P,z,I=E.trans,L=E.mutatedParts||(E.mutatedParts={}),M=A(""),W=A(":dels"),Q=E.type,te=E.type==="deleteRange"?[E.range]:E.type==="delete"?[E.keys]:E.values.length<50?[Si(g,E).filter(function(G){return G}),E.values]:[],H=te[0],V=te[1],te=E.trans._cache;return f(H)?(M.addKeys(H),(te=Q==="delete"||H.length===V.length?_s(H,te):null)||W.addKeys(H),(te||V)&&(j=A,P=te,z=V,p.indexes.forEach(function(G){var se=j(G.name||"");function me(ve){return ve!=null?G.extractKey(ve):null}function we(ve){return G.multiEntry&&f(ve)?ve.forEach(function(_t){return se.addKey(_t)}):se.addKey(ve)}(P||z).forEach(function(ve,mt){var pe=P&&me(P[mt]),mt=z&&me(z[mt]);Ce(pe,mt)!==0&&(pe!=null&&we(pe),mt!=null&&we(mt))})}))):H?(V={from:(V=H.lower)!==null&&V!==void 0?V:s.MIN_KEY,to:(V=H.upper)!==null&&V!==void 0?V:s.MAX_KEY},W.add(V),M.add(V)):(M.add(l),W.add(l),p.indexes.forEach(function(G){return A(G.name).add(l)})),d.mutate(E).then(function(G){return!H||E.type!=="add"&&E.type!=="put"||(M.addKeys(G.results),_&&_.forEach(function(se){for(var me=E.values.map(function(pe){return se.extractKey(pe)}),we=se.keyPath.findIndex(function(pe){return pe===g.keyPath}),ve=0,_t=G.results.length;ve<_t;++ve)me[ve][we]=G.results[ve];A(se.name).addKeys(me)})),I.mutatedParts=_r(I.mutatedParts||{},L),G})}}),v=function(A){var j=A.query,A=j.index,j=j.range;return[A,new pt((A=j.lower)!==null&&A!==void 0?A:s.MIN_KEY,(j=j.upper)!==null&&j!==void 0?j:s.MAX_KEY)]},F={get:function(E){return[g,new pt(E.key)]},getMany:function(E){return[g,new pt().addKeys(E.keys)]},count:v,query:v,openCursor:v};return c(F).forEach(function(E){D[E]=function(A){var j=Y.subscr,P=!!j,z=Ps(Y,d)&&As(E,A)?A.obsSet={}:j;if(P){var I=function(V){return V="idb://".concat(o,"/").concat(u,"/").concat(V),z[V]||(z[V]=new pt)},L=I(""),M=I(":dels"),j=F[E](A),P=j[0],j=j[1];if((E==="query"&&P.isPrimaryKey&&!A.values?M:I(P.name||"")).add(j),!P.isPrimaryKey){if(E!=="count"){var W=E==="query"&&C&&A.values&&d.query(i(i({},A),{values:!1}));return d[E].apply(this,arguments).then(function(V){if(E==="query"){if(C&&A.values)return W.then(function(me){return me=me.result,L.addKeys(me),V});var te=A.values?V.result.map(y):V.result;(A.values?L:M).addKeys(te)}else if(E==="openCursor"){var G=V,se=A.values;return G&&Object.create(G,{key:{get:function(){return M.addKey(G.primaryKey),G.key}},primaryKey:{get:function(){var me=G.primaryKey;return M.addKey(me),me}},value:{get:function(){return se&&L.addKey(G.primaryKey),G.value}}})}return V})}M.add(l)}}return d[E].apply(this,arguments)}}),D}})}};function Ds(s,o,l){if(l.numFailures===0)return o;if(o.type==="deleteRange")return null;var u=o.keys?o.keys.length:"values"in o&&o.values?o.values.length:1;return l.numFailures===u?null:(o=i({},o),f(o.keys)&&(o.keys=o.keys.filter(function(d,p){return!(p in l.failures)})),"values"in o&&f(o.values)&&(o.values=o.values.filter(function(d,p){return!(p in l.failures)})),o)}function _i(s,o){return l=s,((u=o).lower===void 0||(u.lowerOpen?0<Ce(l,u.lower):0<=Ce(l,u.lower)))&&(s=s,(o=o).upper===void 0||(o.upperOpen?Ce(s,o.upper)<0:Ce(s,o.upper)<=0));var l,u}function Ts(s,o,F,u,d,p){if(!F||F.length===0)return s;var g=o.query.index,y=g.multiEntry,C=o.query.range,_=u.schema.primaryKey.extractKey,D=g.extractKey,v=(g.lowLevelIndex||g).extractKey,F=F.reduce(function(E,A){var j=E,P=[];if(A.type==="add"||A.type==="put")for(var z=new pt,I=A.values.length-1;0<=I;--I){var L,M=A.values[I],W=_(M);z.hasKey(W)||(L=D(M),(y&&f(L)?L.some(function(G){return _i(G,C)}):_i(L,C))&&(z.addKey(W),P.push(M)))}switch(A.type){case"add":var Q=new pt().addKeys(o.values?E.map(function(se){return _(se)}):E),j=E.concat(o.values?P.filter(function(se){return se=_(se),!Q.hasKey(se)&&(Q.addKey(se),!0)}):P.map(function(se){return _(se)}).filter(function(se){return!Q.hasKey(se)&&(Q.addKey(se),!0)}));break;case"put":var H=new pt().addKeys(A.values.map(function(se){return _(se)}));j=E.filter(function(se){return!H.hasKey(o.values?_(se):se)}).concat(o.values?P:P.map(function(se){return _(se)}));break;case"delete":var V=new pt().addKeys(A.keys);j=E.filter(function(se){return!V.hasKey(o.values?_(se):se)});break;case"deleteRange":var te=A.range;j=E.filter(function(se){return!_i(_(se),te)})}return j},s);return F===s?s:(F.sort(function(E,A){return Ce(v(E),v(A))||Ce(_(E),_(A))}),o.limit&&o.limit<1/0&&(F.length>o.limit?F.length=o.limit:s.length===o.limit&&F.length<o.limit&&(d.dirty=!0)),p?Object.freeze(F):F)}function js(s,o){return Ce(s.lower,o.lower)===0&&Ce(s.upper,o.upper)===0&&!!s.lowerOpen==!!o.lowerOpen&&!!s.upperOpen==!!o.upperOpen}function La(s,o){return(function(l,u,d,p){if(l===void 0)return u!==void 0?-1:0;if(u===void 0)return 1;if((u=Ce(l,u))===0){if(d&&p)return 0;if(d)return 1;if(p)return-1}return u})(s.lower,o.lower,s.lowerOpen,o.lowerOpen)<=0&&0<=(function(l,u,d,p){if(l===void 0)return u!==void 0?1:0;if(u===void 0)return-1;if((u=Ce(l,u))===0){if(d&&p)return 0;if(d)return-1;if(p)return 1}return u})(s.upper,o.upper,s.upperOpen,o.upperOpen)}function Ba(s,o,l,u){s.subscribers.add(l),u.addEventListener("abort",function(){var d,p;s.subscribers.delete(l),s.subscribers.size===0&&(d=s,p=o,setTimeout(function(){d.subscribers.size===0&&N(p,d)},3e3))})}var Ma={stack:"dbcore",level:0,name:"Cache",create:function(s){var o=s.schema.name;return i(i({},s),{transaction:function(l,u,d){var p,g,y=s.transaction(l,u,d);return u==="readwrite"&&(g=(p=new AbortController).signal,d=function(C){return function(){if(p.abort(),u==="readwrite"){for(var _=new Set,D=0,v=l;D<v.length;D++){var F=v[D],E=vn["idb://".concat(o,"/").concat(F)];if(E){var A=s.table(F),j=E.optimisticOps.filter(function(se){return se.trans===y});if(y._explicit&&C&&y.mutatedParts)for(var P=0,z=Object.values(E.queries.query);P<z.length;P++)for(var I=0,L=(Q=z[P]).slice();I<L.length;I++)vi((H=L[I]).obsSet,y.mutatedParts)&&(N(Q,H),H.subscribers.forEach(function(se){return _.add(se)}));else if(0<j.length){E.optimisticOps=E.optimisticOps.filter(function(se){return se.trans!==y});for(var M=0,W=Object.values(E.queries.query);M<W.length;M++)for(var Q,H,V,te=0,G=(Q=W[M]).slice();te<G.length;te++)(H=G[te]).res!=null&&y.mutatedParts&&(C&&!H.dirty?(V=Object.isFrozen(H.res),V=Ts(H.res,H.req,j,A,H,V),H.dirty?(N(Q,H),H.subscribers.forEach(function(se){return _.add(se)})):V!==H.res&&(H.res=V,H.promise=X.resolve({result:V}))):(H.dirty&&N(Q,H),H.subscribers.forEach(function(se){return _.add(se)})))}}}_.forEach(function(se){return se()})}}},y.addEventListener("abort",d(!1),{signal:g}),y.addEventListener("error",d(!1),{signal:g}),y.addEventListener("complete",d(!0),{signal:g})),y},table:function(l){var u=s.table(l),d=u.schema.primaryKey;return i(i({},u),{mutate:function(p){var g=Y.trans;if(d.outbound||g.db._options.cache==="disabled"||g.explicit||g.idbtrans.mode!=="readwrite")return u.mutate(p);var y=vn["idb://".concat(o,"/").concat(l)];return y?(g=u.mutate(p),p.type!=="add"&&p.type!=="put"||!(50<=p.values.length||Si(d,p).some(function(C){return C==null}))?(y.optimisticOps.push(p),p.mutatedParts&&Pr(p.mutatedParts),g.then(function(C){0<C.numFailures&&(N(y.optimisticOps,p),(C=Ds(0,p,C))&&y.optimisticOps.push(C),p.mutatedParts&&Pr(p.mutatedParts))}),g.catch(function(){N(y.optimisticOps,p),p.mutatedParts&&Pr(p.mutatedParts)})):g.then(function(C){var _=Ds(0,i(i({},p),{values:p.values.map(function(D,v){var F;return C.failures[v]?D:(D=(F=d.keyPath)!==null&&F!==void 0&&F.includes(".")?T(D):i({},D),Te(D,d.keyPath,C.results[v]),D)})}),C);y.optimisticOps.push(_),queueMicrotask(function(){return p.mutatedParts&&Pr(p.mutatedParts)})}),g):u.mutate(p)},query:function(p){if(!Ps(Y,u)||!As("query",p))return u.query(p);var g=((_=Y.trans)===null||_===void 0?void 0:_.db._options.cache)==="immutable",v=Y,y=v.requery,C=v.signal,_=(function(A,j,P,z){var I=vn["idb://".concat(A,"/").concat(j)];if(!I)return[];if(!(j=I.queries[P]))return[null,!1,I,null];var L=j[(z.query?z.query.index.name:null)||""];if(!L)return[null,!1,I,null];switch(P){case"query":var M=L.find(function(W){return W.req.limit===z.limit&&W.req.values===z.values&&js(W.req.query.range,z.query.range)});return M?[M,!0,I,L]:[L.find(function(W){return("limit"in W.req?W.req.limit:1/0)>=z.limit&&(!z.values||W.req.values)&&La(W.req.query.range,z.query.range)}),!1,I,L];case"count":return M=L.find(function(W){return js(W.req.query.range,z.query.range)}),[M,!!M,I,L]}})(o,l,"query",p),D=_[0],v=_[1],F=_[2],E=_[3];return D&&v?D.obsSet=p.obsSet:(v=u.query(p).then(function(A){var j=A.result;if(D&&(D.res=j),g){for(var P=0,z=j.length;P<z;++P)Object.freeze(j[P]);Object.freeze(j)}else A.result=T(j);return A}).catch(function(A){return E&&D&&N(E,D),Promise.reject(A)}),D={obsSet:p.obsSet,promise:v,subscribers:new Set,type:"query",req:p,dirty:!1},E?E.push(D):(E=[D],(F=F||(vn["idb://".concat(o,"/").concat(l)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[p.query.index.name||""]=E)),Ba(D,E,y,C),D.promise.then(function(A){return{result:Ts(A.result,p,F?.optimisticOps,u,D,g)}})}})}})}};function Dr(s,o){return new Proxy(s,{get:function(l,u,d){return u==="db"?o:Reflect.get(l,u,d)}})}var Zt=(tt.prototype.version=function(s){if(isNaN(s)||s<.1)throw new ee.Type("Given version is not a positive number");if(s=Math.round(10*s)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,s);var o=this._versions,l=o.filter(function(u){return u._cfg.version===s})[0];return l||(l=new this.Version(s),o.push(l),o.sort(Aa),l.stores({}),this._state.autoSchema=!1,l)},tt.prototype._whenReady=function(s){var o=this;return this.idbdb&&(this._state.openComplete||Y.letThrough||this._vip)?s():new X(function(l,u){if(o._state.openComplete)return u(new ee.DatabaseClosed(o._state.dbOpenError));if(!o._state.isBeingOpened){if(!o._state.autoOpen)return void u(new ee.DatabaseClosed);o.open().catch(ce)}o._state.dbReadyPromise.then(l,u)}).then(s)},tt.prototype.use=function(s){var o=s.stack,l=s.create,u=s.level,d=s.name;return d&&this.unuse({stack:o,name:d}),s=this._middlewares[o]||(this._middlewares[o]=[]),s.push({stack:o,create:l,level:u??10,name:d}),s.sort(function(p,g){return p.level-g.level}),this},tt.prototype.unuse=function(s){var o=s.stack,l=s.name,u=s.create;return o&&this._middlewares[o]&&(this._middlewares[o]=this._middlewares[o].filter(function(d){return u?d.create!==u:!!l&&d.name!==l})),this},tt.prototype.open=function(){var s=this;return bn(Xe,function(){return Fa(s)})},tt.prototype._close=function(){var s=this._state,o=Rn.indexOf(this);if(0<=o&&Rn.splice(o,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}s.isBeingOpened||(s.dbReadyPromise=new X(function(l){s.dbReadyResolve=l}),s.openCanceller=new X(function(l,u){s.cancelOpen=u}))},tt.prototype.close=function(l){var o=(l===void 0?{disableAutoOpen:!0}:l).disableAutoOpen,l=this._state;o?(l.isBeingOpened&&l.cancelOpen(new ee.DatabaseClosed),this._close(),l.autoOpen=!1,l.dbOpenError=new ee.DatabaseClosed):(this._close(),l.autoOpen=this._options.autoOpen||l.isBeingOpened,l.openComplete=!1,l.dbOpenError=null)},tt.prototype.delete=function(s){var o=this;s===void 0&&(s={disableAutoOpen:!0});var l=0<arguments.length&&typeof arguments[0]!="object",u=this._state;return new X(function(d,p){function g(){o.close(s);var y=o._deps.indexedDB.deleteDatabase(o.name);y.onsuccess=Be(function(){var C,_,D;C=o._deps,_=o.name,D=C.indexedDB,C=C.IDBKeyRange,bi(D)||_===mr||gi(D,C).delete(_).catch(ce),d()}),y.onerror=Ht(p),y.onblocked=o._fireOnBlocked}if(l)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");u.isBeingOpened?u.dbReadyPromise.then(g):g()})},tt.prototype.backendDB=function(){return this.idbdb},tt.prototype.isOpen=function(){return this.idbdb!==null},tt.prototype.hasBeenClosed=function(){var s=this._state.dbOpenError;return s&&s.name==="DatabaseClosed"},tt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},tt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(tt.prototype,"tables",{get:function(){var s=this;return c(this._allTables).map(function(o){return s._allTables[o]})},enumerable:!1,configurable:!0}),tt.prototype.transaction=function(){var s=function(o,l,u){var d=arguments.length;if(d<2)throw new ee.InvalidArgument("Too few arguments");for(var p=new Array(d-1);--d;)p[d-1]=arguments[d];return u=p.pop(),[o,Xt(p),u]}.apply(this,arguments);return this._transaction.apply(this,s)},tt.prototype._transaction=function(s,o,l){var u=this,d=Y.trans;d&&d.db===this&&s.indexOf("!")===-1||(d=null);var p,g,y=s.indexOf("?")!==-1;s=s.replace("!","").replace("?","");try{if(g=o.map(function(_){if(_=_ instanceof u.Table?_.name:_,typeof _!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return _}),s=="r"||s===ii)p=ii;else{if(s!="rw"&&s!=si)throw new ee.InvalidArgument("Invalid transaction mode: "+s);p=si}if(d){if(d.mode===ii&&p===si){if(!y)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");d=null}d&&g.forEach(function(_){if(d&&d.storeNames.indexOf(_)===-1){if(!y)throw new ee.SubTransaction("Table "+_+" not included in parent transaction.");d=null}}),y&&d&&!d.active&&(d=null)}}catch(_){return d?d._promise(null,function(D,v){v(_)}):et(_)}var C=function _(D,v,F,E,A){return X.resolve().then(function(){var j=Y.transless||Y,P=D._createTransaction(v,F,D._dbSchema,E);if(P.explicit=!0,j={trans:P,transless:j},E)P.idbtrans=E.idbtrans;else try{P.create(),P.idbtrans._explicit=!0,D._state.PR1398_maxLoop=3}catch(L){return L.name===Ke.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return _(D,v,F,null,A)})):et(L)}var z,I=rt(A);return I&&On(),j=X.follow(function(){var L;(z=A.call(P,P))&&(I?(L=ln.bind(null,null),z.then(L,L)):typeof z.next=="function"&&typeof z.throw=="function"&&(z=Ci(z)))},j),(z&&typeof z.then=="function"?X.resolve(z).then(function(L){return P.active?L:et(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):j.then(function(){return z})).then(function(L){return E&&P._resolve(),P._completion.then(function(){return L})}).catch(function(L){return P._reject(L),et(L)})})}.bind(null,this,p,g,d,l);return d?d._promise(p,C,"lock"):Y.trans?bn(Y.transless,function(){return u._whenReady(C)}):this._whenReady(C)},tt.prototype.table=function(s){if(!k(this._allTables,s))throw new ee.InvalidTable("Table ".concat(s," does not exist"));return this._allTables[s]},tt);function tt(s,o){var l=this;this._middlewares={},this.verno=0;var u=tt.dependencies;this._options=o=i({addons:tt.addons,autoOpen:!0,indexedDB:u.indexedDB,IDBKeyRange:u.IDBKeyRange,cache:"cloned"},o),this._deps={indexedDB:o.indexedDB,IDBKeyRange:o.IDBKeyRange},u=o.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var d,p,g,y,C,_={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ce,dbReadyPromise:null,cancelOpen:ce,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:o.autoOpen};_.dbReadyPromise=new X(function(v){_.dbReadyResolve=v}),_.openCanceller=new X(function(v,F){_.cancelOpen=F}),this._state=_,this.name=s,this.on=Hn(this,"populate","blocked","versionchange","close",{ready:[Ct,ce]}),this.on.ready.subscribe=Ie(this.on.ready.subscribe,function(v){return function(F,E){tt.vip(function(){var A,j=l._state;j.openComplete?(j.dbOpenError||X.resolve().then(F),E&&v(F)):j.onReadyBeingFired?(j.onReadyBeingFired.push(F),E&&v(F)):(v(F),A=l,E||v(function P(){A.on.ready.unsubscribe(F),A.on.ready.unsubscribe(P)}))})}}),this.Collection=(d=this,Kn($a.prototype,function(z,P){this.db=d;var E=cs,A=null;if(P)try{E=P()}catch(I){A=I}var j=z._ctx,P=j.table,z=P.hook.reading.fire;this._ctx={table:P,index:j.index,isPrimKey:!j.index||P.schema.primKey.keyPath&&j.index===P.schema.primKey.name,range:E,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:A,or:j.or,valueMapper:z!==ge?z:null}})),this.Table=(p=this,Kn(hs.prototype,function(v,F,E){this.db=p,this._tx=E,this.name=v,this.schema=F,this.hook=p._allTables[v]?p._allTables[v].hook:Hn(null,{creating:[Ye,ce],reading:[kt,ge],updating:[zt,ce],deleting:[sn,ce]})})),this.Transaction=(g=this,Kn(Ea.prototype,function(v,F,E,A,j){var P=this;this.db=g,this.mode=v,this.storeNames=F,this.schema=E,this.chromeTransactionDurability=A,this.idbtrans=null,this.on=Hn(this,"complete","error","abort"),this.parent=j||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new X(function(z,I){P._resolve=z,P._reject=I}),this._completion.then(function(){P.active=!1,P.on.complete.fire()},function(z){var I=P.active;return P.active=!1,P.on.error.fire(z),P.parent?P.parent._reject(z):I&&P.idbtrans&&P.idbtrans.abort(),et(z)})})),this.Version=(y=this,Kn(ja.prototype,function(v){this.db=y,this._cfg={version:v,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(C=this,Kn(ys.prototype,function(v,F,E){if(this.db=C,this._ctx={table:v,index:F===":id"?null:F,or:E},this._cmp=this._ascending=Ce,this._descending=function(A,j){return Ce(j,A)},this._max=function(A,j){return 0<Ce(A,j)?A:j},this._min=function(A,j){return Ce(A,j)<0?A:j},this._IDBKeyRange=C._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function(v){0<v.newVersion?console.warn("Another connection wants to upgrade database '".concat(l.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(l.name,"'. Closing db now to resume the delete request.")),l.close({disableAutoOpen:!1})}),this.on("blocked",function(v){!v.newVersion||v.newVersion<v.oldVersion?console.warn("Dexie.delete('".concat(l.name,"') was blocked")):console.warn("Upgrade '".concat(l.name,"' blocked by other connection holding version ").concat(v.oldVersion/10))}),this._maxKey=Gn(o.IDBKeyRange),this._createTransaction=function(v,F,E,A){return new l.Transaction(v,F,E,l._options.chromeTransactionDurability,A)},this._fireOnBlocked=function(v){l.on("blocked").fire(v),Rn.filter(function(F){return F.name===l.name&&F!==l&&!F._state.vcFired}).map(function(F){return F.on("versionchange").fire(v)})},this.use(za),this.use(Ma),this.use(Ia),this.use(Oa),this.use(Ra);var D=new Proxy(this,{get:function(v,F,E){if(F==="_vip")return!0;if(F==="table")return function(j){return Dr(l.table(j),D)};var A=Reflect.get(v,F,E);return A instanceof hs?Dr(A,D):F==="tables"?A.map(function(j){return Dr(j,D)}):F==="_createTransaction"?function(){return Dr(A.apply(this,arguments),D)}:A}});this.vip=D,u.forEach(function(v){return v(l)})}var Tr,Tt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Na=(Pi.prototype.subscribe=function(s,o,l){return this._subscribe(s&&typeof s!="function"?s:{next:s,error:o,complete:l})},Pi.prototype[Tt]=function(){return this},Pi);function Pi(s){this._subscribe=s}try{Tr={indexedDB:a.indexedDB||a.mozIndexedDB||a.webkitIndexedDB||a.msIndexedDB,IDBKeyRange:a.IDBKeyRange||a.webkitIDBKeyRange}}catch{Tr={indexedDB:null,IDBKeyRange:null}}function Fs(s){var o,l=!1,u=new Na(function(d){var p=rt(s),g,y=!1,C={},_={},D={get closed(){return y},unsubscribe:function(){y||(y=!0,g&&g.abort(),v&&dn.storagemutated.unsubscribe(E))}};d.start&&d.start(D);var v=!1,F=function(){return ri(A)},E=function(j){_r(C,j),vi(_,C)&&F()},A=function(){var j,P,z;!y&&Tr.indexedDB&&(C={},j={},g&&g.abort(),g=new AbortController,z=(function(I){var L=je();try{p&&On();var M=an(s,I);return M=p?M.finally(ln):M}finally{L&&Ue()}})(P={subscr:j,signal:g.signal,requery:F,querier:s,trans:null}),Promise.resolve(z).then(function(I){l=!0,o=I,y||P.signal.aborted||(C={},(function(L){for(var M in L)if(k(L,M))return;return 1})(_=j)||v||(dn(Xn,E),v=!0),ri(function(){return!y&&d.next&&d.next(I)}))},function(I){l=!1,["DatabaseClosedError","AbortError"].includes(I?.name)||y||ri(function(){y||d.error&&d.error(I)})}))};return setTimeout(F,0),D});return u.hasValue=function(){return l},u.getValue=function(){return o},u}var xn=Zt;function Ai(s){var o=fn;try{fn=!0,dn.storagemutated.fire(s),ki(s,!0)}finally{fn=o}}O(xn,i(i({},Re),{delete:function(s){return new xn(s,{addons:[]}).delete()},exists:function(s){return new xn(s,{addons:[]}).open().then(function(o){return o.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(s){try{return o=xn.dependencies,l=o.indexedDB,o=o.IDBKeyRange,(bi(l)?Promise.resolve(l.databases()).then(function(u){return u.map(function(d){return d.name}).filter(function(d){return d!==mr})}):gi(l,o).toCollection().primaryKeys()).then(s)}catch{return et(new ee.MissingAPI)}var o,l},defineClass:function(){return function(s){m(this,s)}},ignoreTransaction:function(s){return Y.trans?bn(Y.transless,s):s()},vip:yi,async:function(s){return function(){try{var o=Ci(s.apply(this,arguments));return o&&typeof o.then=="function"?o:X.resolve(o)}catch(l){return et(l)}}},spawn:function(s,o,l){try{var u=Ci(s.apply(l,o||[]));return u&&typeof u.then=="function"?u:X.resolve(u)}catch(d){return et(d)}},currentTransaction:{get:function(){return Y.trans||null}},waitFor:function(s,o){return o=X.resolve(typeof s=="function"?xn.ignoreTransaction(s):s).timeout(o||6e4),Y.trans?Y.trans.waitFor(o):o},Promise:X,debug:{get:function(){return De},set:function(s){Ne(s)}},derive:Z,extend:m,props:O,override:Ie,Events:Hn,on:dn,liveQuery:Fs,extendObservabilitySet:_r,getByKeyPath:ye,setByKeyPath:Te,delByKeyPath:function(s,o){typeof o=="string"?Te(s,o,void 0):"length"in o&&[].map.call(o,function(l){Te(s,l,void 0)})},shallowClone:vt,deepClone:T,getObjectDiff:Ei,cmp:Ce,asap:ie,minKey:-1/0,addons:[],connections:Rn,errnames:Ke,dependencies:Tr,cache:vn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(s){return parseInt(s)}).reduce(function(s,o,l){return s+o/Math.pow(10,2*l)})})),xn.maxKey=Gn(xn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(dn(Xn,function(s){fn||(s=new CustomEvent(ci,{detail:s}),fn=!0,dispatchEvent(s),fn=!1)}),addEventListener(ci,function(s){s=s.detail,fn||Ai(s)}));var Ln,fn=!1,Os=function(){};return typeof BroadcastChannel<"u"&&((Os=function(){(Ln=new BroadcastChannel(ci)).onmessage=function(s){return s.data&&Ai(s.data)}})(),typeof Ln.unref=="function"&&Ln.unref(),dn(Xn,function(s){fn||Ln.postMessage(s)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(s){if(!Zt.disableBfCache&&s.persisted){De&&console.debug("Dexie: handling persisted pagehide"),Ln?.close();for(var o=0,l=Rn;o<l.length;o++)l[o].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(s){!Zt.disableBfCache&&s.persisted&&(De&&console.debug("Dexie: handling persisted pageshow"),Os(),Ai({all:new pt(-1/0,[[]])}))})),X.rejectionMapper=function(s,o){return!s||s instanceof Me||s instanceof TypeError||s instanceof SyntaxError||!s.name||!Ve[s.name]?s:(o=new Ve[s.name](o||s.message,s),"stack"in s&&q(o,"stack",{get:function(){return this.inner.stack}}),o)},Ne(De),i(Zt,Object.freeze({__proto__:null,Dexie:Zt,liveQuery:Fs,Entity:us,cmp:Ce,PropModSymbol:Jt,PropModification:Vn,replacePrefix:function(s,o){return new Vn({replacePrefix:[s,o]})},add:function(s){return new Vn({add:s})},remove:function(s){return new Vn({remove:s})},default:Zt,RangeSet:pt,mergeRanges:Zn,rangesOverlap:ks}),{default:Zt}),Zt})})(Br)),Br.exports}var Cl=kl();const Bi=xl(Cl),Ys=Symbol.for("Dexie"),Ur=globalThis[Ys]||(globalThis[Ys]=Bi);if(Bi.semVer!==Ur.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Bi.semVer} and ${Ur.semVer}`);const{liveQuery:jo,mergeRanges:Wf,rangesOverlap:Hf,RangeSet:Kf,cmp:Vf,Entity:Yf,PropModSymbol:Xf,PropModification:Gf,replacePrefix:Qf,add:Jf,remove:Zf}=Ur,El="easydb";let Fr=null;function Sl(){if(Fr)return Fr;const e=new Ur(El);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),Fr={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins")},Fr}function Or(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(i=>Fo(i,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const i=jo(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>i.unsubscribe()}}}function _l(e,t){return{async find(r){const i=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return i.toArray();const n=Object.entries(r);return i.filter(a=>Fo(a,n)).toArray()},async findOne(r){const i=await e.get(r);return i&&i.tableId===t?i:null},async insert(r){const i={...r,tableId:t};return await e.add(i),i},async bulkInsert(r){if(r.length===0)return[];const i=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(i),i},async upsert(r){const i={...r,tableId:t};return await e.put(i),i},async patch(r,i){if(await e.update(r,i)===0)throw new Error(`row patch: no row ${r}`);const a=await e.get(r);if(!a)throw new Error(`row patch: row ${r} vanished after update`);return a},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=jo(()=>e.where("tableId").equals(t).toArray()).subscribe({next:a=>r(a)});return()=>n.unsubscribe()}}}function Fo(e,t){for(const[r,i]of t)if(e[r]!==i)return!1;return!0}function Pl(e){return{workspaces:Or(e.workspaces),tables:Or(e.tables),settings:Or(e.settings),plugins:Or(e.plugins),rows:t=>_l(e.rows,t)}}function Al(e){const{base:t,providers:r,tableById:i,ctx:n}=e,a=new Map;return{...t,rows(c){const f=i(c),m=f?.source;if(m){const $=r.get(m.type);if($){const S=JSON.stringify(m),k=a.get(c);if(k&&k.key===S)return k.coll;const O=$.create(f,n);return a.set(c,{key:S,coll:O}),O}}return a.delete(c),t.rows(c)}}}function Dl(){const e=new Map;return{on(t,r){let i=e.get(t);return i||(i=new Set,e.set(t,i)),i.add(r),()=>{i.delete(r)}},emit(t,r){const i=e.get(t);if(i)for(const n of i)try{n(r)}catch(a){console.error(`[event:${String(t)}] listener threw`,a)}}}}const pn=at`
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
`;function jn(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const Xs=new WeakSet;function mn(e,t){if(Xs.has(t))return;Xs.add(t);let r=0,i=0,n=0,a=0,c=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",m=>{if(m.target.closest("button, input, textarea, select, a, label"))return;c=!0,r=m.clientX,i=m.clientY;const S=e.getBoundingClientRect();n=S.left,a=S.top,t.setPointerCapture(m.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",m=>{if(!c)return;const $=m.clientX-r,S=m.clientY-i,k=-e.offsetWidth+80,O=window.innerWidth-80,B=0,q=window.innerHeight-40,Z=Math.max(k,Math.min(O,n+$)),de=Math.max(B,Math.min(q,a+S));e.style.position="fixed",e.style.left=`${Z}px`,e.style.top=`${de}px`,e.style.margin="0"});const f=m=>{if(c){c=!1;try{t.releasePointerCapture(m.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",f),t.addEventListener("pointercancel",f)}var Tl=Object.defineProperty,jl=Object.getOwnPropertyDescriptor,Oo=(e,t,r,i)=>{for(var n=i>1?void 0:i?jl(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Tl(t,r,n),n};let jt=class extends nt{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),jt.instance=this}disconnectedCallback(){super.disconnectedCallback(),jt.instance===this&&(jt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&mn(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(i=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:i}})}choice(e,t,r="Choose"){return this.enqueue(i=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:i}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return U`
      <dialog @cancel=${this.onCancel} @keydown=${jn}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):ze}
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
            ${e.message?U`<p class="message">${e.message}</p>`:ze}
            <div class="choices">
              ${e.options.map(t=>U`<button class="choice" @click=${()=>this.closeAndResolve(t)}>
                    ${t}
                  </button>`)}
            </div>
          </div>
        `}}};jt.instance=null;jt.styles=[pn,at`
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
    `];Oo([J()],jt.prototype,"current",2);jt=Oo([dt("host-dialogs")],jt);const nn=at`
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
`;var Fl=Object.defineProperty,Ol=Object.getOwnPropertyDescriptor,Ro=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ol(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Fl(t,r,n),n};let en=class extends nt{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),en.instance=this}disconnectedCallback(){super.disconnectedCallback(),en.instance===this&&(en.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const i=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),i)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return U`
      ${this.toasts.map(e=>U`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${zl(e.kind)}</span>
            <span class="body">
              ${e.title?U`<strong>${e.title}</strong>`:""}${Rl(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};en.instance=null;en.styles=[nn,at`
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
    `];Ro([J()],en.prototype,"toasts",2);en=Ro([dt("toast-host")],en);function Rl(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let i=0,n;for(;(n=t.exec(e))!==null;)n.index>i&&r.push(e.slice(i,n.index)),r.push({url:n[0]}),i=n.index+n[0].length;return i<e.length&&r.push(e.slice(i)),r.length===0?e:r.map(a=>typeof a=="string"?a:U`<a href=${a.url} target="_blank" rel="noopener noreferrer">${a.url}</a>`)}function zl(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Il(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map}}function Cn(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function ji(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function Ll(e){return{registerHeaderButton:t=>Cn(e.headerButtons,t),registerFooterButton:t=>Cn(e.footerButtons,t),registerTableButton:t=>Cn(e.tableButtons,t),registerImporter:t=>Cn(e.importers,t),registerExporter:t=>Cn(e.exporters,t),registerUrlSource:t=>Cn(e.urlSources,t),registerDropHandler:t=>Cn(e.dropHandlers,t),registerCellRenderer:(t,r)=>ji(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>ji(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>ji(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},dialogs:Bl}}const Bl={async alert(e,t){const r=jt.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=jt.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const i=jt.instance;return i?i.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const i=jt.instance;if(i)return i.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=en.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}};function Ml(e){const t=Ll(e.registries),r=e.registries.rowSources,i=a=>(r.set(a.type,a),()=>{r.get(a.type)===a&&r.delete(a.type)}),n={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:n,registerRowSource:i,backend:{fetch:async(a,c)=>{const f=await Nl(e.store),m=c?.body instanceof ArrayBuffer;if(!f||m)return globalThis.fetch(a,c);const $={url:a};return c?.method&&($.method=c.method),c?.headers&&($.headers=c.headers),typeof c?.body=="string"&&($.body=c.body),globalThis.fetch(`${f}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify($)})},async saveFile(a,c,f){const m=typeof c=="string"?new Blob([c],{type:f??"application/octet-stream"}):c,$=URL.createObjectURL(m),S=document.createElement("a");S.href=$,S.download=a,S.rel="noopener",document.body.appendChild(S),S.click(),S.remove(),setTimeout(()=>URL.revokeObjectURL($),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function Nl(e){const r=(await e.settings.findOne("server-sync:url"))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}const ql={name:"csv-import",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"easyDBAccess built-ins"};function Ul(e){e.ui.registerImporter(Wl),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const i=nc(t).filter(rc);if(i.length===0)return!1;t.preventDefault();for(const n of i)await Hl(e,n);return!0})}const Wl={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return Xr(t)}};async function Hl(e,t){const r=e.workspaceId();if(!r)throw new Error("csv-import: no active workspace");const i=await t.text(),n=t.name.replace(/\.csv$/i,"")||"imported",a=(await e.store.tables.find()).find(S=>S.workspaceId===r&&S.name===n);let c,f;if(a){const S=await e.ui.dialogs.choice(`A table named "${n}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!S)return;S==="Append rows"?(f="append",c=a.id):S==="Overwrite rows"?(f="overwrite",c=a.id):(f="new",c=Rr())}else f="new",c=Rr();e.events.emit("import:before",{source:"csv",tableId:c});let m;if(f==="new"){const S=Xr(i),k=a?`${n} (${Date.now().toString(36)})`:n;await e.store.tables.insert({id:c,workspaceId:r,name:k,code:Mi(k),columns:S.columns,view:"table",updatedAt:Date.now()}),m=S.rows.map(O=>({id:Rr(),tableId:c,data:O,updatedAt:Date.now()}))}else{const S=a.columns;if(m=zo(i).rows.map(O=>{const B={};for(let q=0;q<S.length;q++){const Z=S[q];B[Z.field]=Bo(O[q]??"",Z.type)}return{id:Rr(),tableId:c,data:B,updatedAt:Date.now()}}),f==="overwrite"){const O=e.store.rows(c),B=await O.find();await O.bulkRemove(B.map(q=>q.id))}}await e.store.rows(c).bulkInsert(m),e.events.emit("import:after",{source:"csv",tableId:c,rowCount:m.length})}function zo(e){const t=e.replace(/﻿/,""),r=Io(t),i=Lo(t,r);if(i.length===0)return{header:[],rows:[]};const n=i[0],a=i.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:n,rows:a}}function Xr(e){const t=e.replace(/﻿/,""),r=Io(t),i=Lo(t,r);if(i.length===0)return{columns:[],rows:[]};const n=i[0],a=i.slice(1).filter(O=>!(O.length===1&&O[0]==="")),c=n.map((O,B)=>Yl(O,B)),f=c.map(O=>O.field),m=a.map(O=>{const B={};for(let q=0;q<f.length;q++)B[f[q]]=O[q]??"";return B}),$=c.map((O,B)=>O.type?O.type:Xl(m.map(q=>q[f[B]]??"").filter(q=>q.length>0))),S=c.map((O,B)=>{const q=$[B]??"string",Z={field:O.field,label:O.label,type:q},de=Vl(q),fe=O.renderer??de;return fe&&(Z.renderer=fe),O.default!==void 0&&(Z.default=O.default),O.max!=null&&(Z.max=O.max),O.unique&&(Z.unique=!0),O.notnull&&(Z.notnull=!0),O.hidden&&(Z.hidden=!0),Z}),k=m.map(O=>{const B={};for(let q=0;q<f.length;q++){const Z=f[q],de=$[q]??"string";B[Z]=Bo(O[Z]??"",de)}return B});return{columns:S,rows:k}}const Kl=new Set(["string","number","boolean","date","datetime"]),Gs={color:"color",image:"image"};function Vl(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function Yl(e,t){const r=e.trim();if(!r.includes(":"))return{field:Mi(r||`col_${t+1}`),label:r||`Column ${t+1}`};const i=r.split(":"),n=Mi(i[0]||`col_${t+1}`),a=(i[1]??i[0]??"").trim()||n,c={field:n,label:a},f=(i[2]??"").trim();f&&(Kl.has(f)?c.type=f:Gs[f]&&(c.type="string",c.renderer=Gs[f]));const m=(i[3]??"").trim();m&&(c.default=m);const $=(i[4]??"").trim();if($){const k=Number($);Number.isFinite(k)&&k>0&&(c.max=k)}const S=(i[5]??"").toLowerCase();return S.includes("u")&&(c.unique=!0),S.includes("n")&&(c.notnull=!0),S.includes("h")&&(c.hidden=!0),c}function Io(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const a of t)a in r&&(r[a]+=1);let i=",",n=-1;for(const a of[",",";","	"])(r[a]??0)>n&&(i=a,n=r[a]??0);return i}function Lo(e,t){const r=[];let i=[],n="",a=!1;for(let c=0;c<e.length;c++){const f=e[c];a?f==='"'?e[c+1]==='"'?(n+='"',c++):a=!1:n+=f:f==='"'?a=!0:f===t?(i.push(n),n=""):f===`
`||f==="\r"?(f==="\r"&&e[c+1]===`
`&&c++,i.push(n),r.push(i),i=[],n=""):n+=f}return(n.length>0||i.length>0)&&(i.push(n),r.push(i)),r}function Xl(e){return e.length===0?"string":e.every(Ql)?"boolean":e.every(Jl)?"number":e.every(ec)?"datetime":e.every(Zl)?"date":"string"}const Gl=/^(true|false|yes|no|0|1)$/i;function Ql(e){return Gl.test(e.trim())}function Jl(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function Zl(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function ec(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function Bo(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const i=Number(r);return Number.isFinite(i)?i:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return Mo(r);case"datetime":return tc(r);default:return e}}function Mo(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let i=parseInt(t[1],10),n=parseInt(t[2],10);const a=t[3];let c=parseInt(a,10);a.length===2&&(c+=2e3);let f,m;return i>12?(f=i,m=n):n>12?(m=i,f=n):(f=i,m=n),`${c.toString().padStart(4,"0")}-${m.toString().padStart(2,"0")}-${f.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function tc(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const i=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(i)return`${Mo(`${i[1]}/${i[2]}/${i[3]}`)}T${i[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const a=n.toISOString();return`${a.slice(0,10)}T${a.slice(11,16)}`}return e}function nc(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function rc(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function Mi(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function Rr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const ic=Object.freeze(Object.defineProperty({__proto__:null,init:Ul,meta:ql,parseCsv:Xr,parseCsvRaw:zo},Symbol.toStringTag,{value:"Module"})),sc={name:"csv-export",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"easyDBAccess built-ins"},oc={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Zi(e,t)}};function ac(e){e.ui.registerExporter(oc),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const i=await t.store.tables.findOne(r.tableId);if(!i)return;const n=await t.store.rows(i.id).find(),a=Zi(i,n);await t.backend.saveFile(`${i.code||i.name||"table"}.csv`,a,"text/csv")}})}function Zi(e,t){const r=e.columns.map(a=>a.field),i=e.columns.map(a=>Qs(a.label??a.field)),n=t.map(a=>r.map(c=>Qs(lc(a.data[c]))).join(","));return[i.join(","),...n].join(`\r
`)}function lc(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function Qs(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const cc=Object.freeze(Object.defineProperty({__proto__:null,init:ac,meta:sc,serializeCsv:Zi},Symbol.toStringTag,{value:"Module"}));var uc=Object.defineProperty,dc=Object.getOwnPropertyDescriptor,Wn=(e,t,r,i)=>{for(var n=i>1?void 0:i?dc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&uc(t,r,n),n};function Ni(e,t={}){return(Pt.instance??fc()).open(e,t)}function fc(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function hc(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Pt=class extends nt{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,i)=>r?i:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Pt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Pt.instance===this&&(Pt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mn(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(()=>!0),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return U`
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
                      <span class="size">${hc(t.size)}</span>
                      ${t.detail?U`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};Pt.instance=null;Pt.styles=[pn,at`
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
    `];Wn([J()],Pt.prototype,"items",2);Wn([J()],Pt.prototype,"selected",2);Wn([J()],Pt.prototype,"heading",2);Wn([J()],Pt.prototype,"message",2);Wn([J()],Pt.prototype,"confirmLabel",2);Pt=Wn([dt("table-select-dialog")],Pt);const pc={name:"json-import",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"easyDBAccess built-ins"};function mc(e){e.ui.registerImporter(gc),e.ui.registerDropHandler(async t=>{const i=kc(t).filter(Cc);if(i.length===0)return!1;t.preventDefault();for(const n of i)await bc(e,n);return!0})}const gc={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=Gr(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function bc(e,t){await es(e,await t.text(),t.name)}async function es(e,t,r){const i=e.workspaceId();if(!i)throw new Error("json-import: no active workspace");let n;try{n=JSON.parse(t)}catch(B){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${B.message}`)});return}const a=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=Gr(n,a);if(c.length===0)return;let f=c;if(c.length>1){const B=await Ni(c.map(q=>({name:q.name,size:q.rows.length})),{title:"Import tables",message:`"${r}" contains ${c.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!B)return;f=B.map(q=>c[q])}const m=(await e.store.tables.find()).filter(B=>B.workspaceId===i),$=new Set(f.map(B=>B.name)),S=m.filter(B=>$.has(B.name));let k;if(S.length===0&&f.length===1)k="append-new";else{const B=S.length>0?[`Overwrite matching (${S.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],q=await e.ui.dialogs.choice(`Importing ${f.length} table${f.length===1?"":"s"} from "${r}".${S.length>0?`

${S.length} table${S.length===1?"":"s"} share a name with existing data.`:""}`,B,"JSON import");if(!q)return;q.startsWith("Overwrite matching")?k="overwrite-matching":q==="Replace entire workspace"?k="replace-workspace":k="append-new"}if(k==="replace-workspace")for(const B of m){const q=e.store.rows(B.id),Z=await q.find();await q.bulkRemove(Z.map(de=>de.id)),await e.store.tables.remove(B.id)}const O=new Map(m.map(B=>[B.name,B]));for(const B of f){let q;const Z=k==="overwrite-matching"?O.get(B.name):void 0;if(Z){q=Z.id;const be=e.store.rows(q),Ie=await be.find();await be.bulkRemove(Ie.map(ne=>ne.id)),await e.store.tables.patch(q,{columns:B.columns,...B.windowGeometry?{windowGeometry:B.windowGeometry}:{},...B.sortColumn?{sortColumn:B.sortColumn,sortAsc:B.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},updatedAt:Date.now()})}else q=to(),e.events.emit("import:before",{source:"json",tableId:q}),await e.store.tables.insert({id:q,workspaceId:i,name:B.name,code:Ec(B.name),columns:B.columns,view:"table",...B.windowGeometry?{windowGeometry:B.windowGeometry}:{},...B.sortColumn?{sortColumn:B.sortColumn,sortAsc:B.sortAsc??!0}:{},updatedAt:Date.now()});const de=e.store.rows(q),fe=B.rows.map(be=>({id:to(),tableId:q,data:be,updatedAt:Date.now()}));await de.bulkInsert(fe),e.events.emit("import:after",{source:"json",tableId:q,rowCount:B.rows.length})}}function Gr(e,t){if(Lt(e)&&Js(e))return Zs(e);if(Lt(e)&&Array.isArray(e.tables)){const r=e,i=[];for(const n of r.tables){if(wc(n)){const a=n,c=Lt(a.windowGeometry)?a.windowGeometry:void 0,f=typeof a.sortColumn=="string"?a.sortColumn:void 0,m=typeof a.sortAsc=="boolean"?a.sortAsc:void 0;i.push({name:String(n.name),columns:n.columns.map(vc),rows:Array.isArray(n.rows)?n.rows.filter(Lt):[],...c?{windowGeometry:c}:{},...f?{sortColumn:f,sortAsc:m??!0}:{}});continue}Lt(n)&&Js(n)&&i.push(...Zs(n))}return i}if(Array.isArray(e)){const r=e.filter(Lt);return r.length===0?[]:[{name:t,...eo(r)}]}return Lt(e)?[{name:t,...eo([e])}]:[]}function Js(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!Lt(r))continue;const i=r;if(Array.isArray(i.dataArray)&&Array.isArray(i.columns))return!0}return!1}function Zs(e){const t=[];for(const[r,i]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!Lt(i))continue;const n=i;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const a=r.replace(/\.table\.json$/,""),c=n.columns.map(S=>yc(S)),f=c.map(S=>S.field),m=n.dataArray.filter(S=>Array.isArray(S)).map(S=>{const k={};for(let O=0;O<f.length;O++)k[f[O]]=S[O];return k}),$={name:a,columns:c,rows:m};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const S=n.elementRect;$.windowGeometry={x:S.x,y:S.y,w:S.width??600,h:S.height??400,z:S.zIndex??100,minimized:!!S.minimized,maximized:!!S.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<f.length&&($.sortColumn=f[n.sortColumn],$.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push($)}return t}function yc(e){const t=String(e.field??"col"),r=String(e.name??t),i=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:i};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function wc(e){return Lt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function vc(e){if(!Lt(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let i=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(i==="color"||i==="image")&&(n=n??i,i="string");const a={field:r,label:String(t.label??r),type:i};return n&&(a.renderer=n),typeof t.script=="string"&&(a.script=t.script),a}function eo(e){const t=new Set;for(const n of e)for(const a of Object.keys(n))t.add(a);return{columns:Array.from(t).map(n=>({field:n,label:n,type:xc(e.map(a=>a[n]))})),rows:e}}function xc(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&$c(r))?"date":"string"}function $c(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function Lt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function kc(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function Cc(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function Ec(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function to(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Sc=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:es,init:mc,meta:pc,parsedToTables:Gr},Symbol.toStringTag,{value:"Module"}));class Vt extends Error{constructor(t,r){const i=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(i),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function Fn(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),i={};for(const[f,m]of t.searchParams)i[f]=m;let n,a=null,c=null;if(r.length>=2){c=decodeURIComponent(r[r.length-1]),a=decodeURIComponent(r[r.length-2]);const f=r.slice(0,r.length-2).join("/");n=t.origin+(f?"/"+f:"")}else r.length===1&&(a=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:a,table:c,query:i}}function Wr(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[i,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(i,String(n));return r.toString()}function _c(e){const t=e?.next_url??null,r=e?.next,i=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],a=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(f=>Array.isArray(f)&&a?Object.fromEntries(a.map((m,$)=>[m,f[$]])):f),nextUrl:t,nextToken:i,hasMore:t!=null||i!=null,truncated:e?.truncated===!0}}function Pc(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function Ac(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],i={},n=e?.column_details;if(Array.isArray(n))for(const f of n)i[f.column??f.name]=f;else n&&typeof n=="object"&&Object.assign(i,n);for(const f of r)f in i||(i[f]={});return{columns:(r.length?r:Object.keys(i)).map(f=>{const m=i[f]||{},$=m.is_pk===!0||m.is_pk===1||t.includes(f),S={field:f,label:No(f),type:Pc(m.sqlite_type??m.type,f)};return(m.notnull===!0||m.notnull===1||$)&&(S.notnull=!0),$&&(S.unique=!0),m.hidden===!0&&(S.hidden=!0),S}),pks:t}}function No(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function ts(e){const t=[],r=new Set;for(const i of e)for(const n of Object.keys(i))r.has(n)||(r.add(n),t.push(n));return t.map(i=>({field:i,label:No(i),type:Dc(e.map(n=>n[i]))}))}function Dc(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Tc(r))?"datetime":"string"}function Tc(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function jc(e){const t=new TextEncoder().encode(String(e));let r="";for(const i of t){const n=String.fromCharCode(i);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+i.toString(16).toUpperCase().padStart(2,"0")}return r}function Fc(e,t){return!t||t.length===0?null:t.map(r=>jc(e[r])).join(",")}function Oc(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const i of t){if(typeof i=="string"){r.push(i);continue}if(i&&typeof i=="object"&&typeof i.name=="string"){if(i.name==="_memory")continue;r.push(typeof i.route=="string"&&i.route?i.route:i.name)}}return r}function Rc(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],i=[];for(const n of r){if(typeof n=="string"){i.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&i.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return i}async function ar(e,t){let r;try{r=await e(t)}catch(n){const a=n?.message||"network error";throw new Vt({error:`Couldn't reach ${t} (${a}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Vt(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const i=await r.json();if(i&&i.ok===!1)throw new Vt(i,r.status);return i}async function qo(e,t){return Oc(await ar(e,`${t}/-/databases.json`))}async function no(e,t,r){return Rc(await ar(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function Uo(e,t){const r=Wr(t,{_extra:"columns"}),i=await ar(e,r),{columns:n,pks:a}=Ac(i),c=!!i&&i.column_details!=null;return{columns:n,pks:a,count:i?.count??null,typed:c,raw:i}}function Wo(e,t){if(t.length===0)return e;const r=new Map(ts(t).map(i=>[i.field,i.type]));return e.map(i=>{if(i.type!=="string")return i;const n=r.get(i.field);return n&&n!=="string"?{...i,type:n}:i})}async function Qr(e,t,r={}){const i=r.maxRows??1e4,a={_size:r.pageSize??1e3,...r.extraParams||{}};let c=Wr(t,a);const f=[];let m=!1,$=!1,S=0;for(;c;){const k=await ar(e,c),O=_c(k);f.push(...O.rows),m=m||O.truncated,S+=1;const B=O.nextUrl!=null?O.nextUrl:O.nextToken!=null?Wr(t,{_next:O.nextToken}):null;B&&f.length<i&&O.rows.length>0?c=B:($=B!=null&&O.rows.length>0,c=null)}return{rows:f,truncated:m,hasMore:$,pages:S}}function zc(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function Ho(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function Ko(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function Jr(e,t,r,i){let n;try{n=await e(t,{method:"POST",headers:zc(i),body:JSON.stringify(r)})}catch(c){throw new Vt({error:`Couldn't reach ${t} (${c?.message||"network error"}).`},0)}if(n&&n.ok===!1){let c=null;try{c=await n.json()}catch{}throw new Vt(c&&typeof c=="object"?c:{error:`HTTP ${n.status} for ${t}`},n.status)}const a=await n.json();if(a&&a.ok===!1)throw new Vt(a,n.status);return a}async function ro(e,t,r,i={}){const n=await Jr(e,Ho(t,"insert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function Ic(e,t,r,i,n={}){const a=await Jr(e,Ko(t,r,"update"),{update:i,return:!0},n.token);return a&&typeof a.row=="object"&&a.row?a.row:Array.isArray(a?.rows)&&a.rows[0]?a.rows[0]:null}async function io(e,t,r,i={}){await Jr(e,Ko(t,r,"delete"),{},i.token)}async function Lc(e,t,r,i={}){const n=await Jr(e,Ho(t,"upsert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function Bc(e,t){const r=Wr(t,{_extra:"primary_keys"}),i=await ar(e,r);return Array.isArray(i?.primary_keys)?i.primary_keys:[]}async function Vo(e,t,r={}){const i=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,i);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const a=await n.json(),c=a?.datasette?.version??a?.version??null;let f=null;try{f=(await(await e(`${t}/-/actor.json`,i)).json())?.actor??null}catch{}return{reachable:!0,version:c,actor:f,writable:!!(r.token&&f)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function ns(e,t){return t?(r,i)=>{const n=(i??{}).headers??{};return e(r,{...i??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}class Mc extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function Yo(e){return`datasette:token:${e}`}function Nc(e,t){for(const[r,i]of Object.entries(t))if(r!=="data"&&e[r]!==i)return!1;return!0}function qc(e,t){const r=e.source,i=r?.config??{},n={base:i.base,db:i.db,table:i.table,query:{}},a=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],c=r?.writable===!0,f=i.maxRows??1e4,m=i.pollIntervalMs??0,$=(ne,ie)=>t.backend.fetch(ne,ie);async function S(){const ie=(await t.settings.findOne(Yo(i.base)))?.value;return typeof ie=="string"&&ie.length>0?ie:void 0}const k=async(ne,ie)=>ns($,await S())(ne,ie);function O(ne){return{id:Fc(ne,a)??Uc(),tableId:e.id,data:ne,updatedAt:Date.now()}}function B(ne){if(!c)throw new Mc(ne)}function q(ne){const ie={};for(const[ye,Te]of Object.entries(ne))a.includes(ye)||(ie[ye]=Te);return ie}const Z=new Set;let de=[],fe=!1,be=null;function Ie(){return be||(be=(async()=>{try{const{rows:ne}=await Qr(k,n,{maxRows:f});de=ne.map(O),fe=!0;for(const ie of Z)ie(de);return de}finally{be=null}})(),be)}return{async find(ne){const ie=fe?de:await Ie();return!ne||Object.keys(ne).length===0?ie:ie.filter(ye=>Nc(ye,ne))},async findOne(ne){return(fe?de:await Ie()).find(ye=>ye.id===ne)??null},async insert(ne){B("insert");const[ie]=await ro(k,n,[ne.data]),ye=O(ie??ne.data);return t.events.emit("row:created",{tableId:e.id,row:ye}),Ie(),ye},async bulkInsert(ne){if(ne.length===0)return[];B("insert");const ie=await ro(k,n,ne.map(Te=>Te.data)),ye=(ie.length?ie:ne.map(Te=>Te.data)).map(O);return Ie(),ye},async upsert(ne){B("upsert");const[ie]=await Lc(k,n,[ne.data]),ye=O(ie??ne.data);return Ie(),ye},async patch(ne,ie){B("update");const ye=ie.data,Te=q(ye??{}),vt=await Ic(k,n,ne,Te),Rt=O(vt??{...ye??{}});return t.events.emit("row:updated",{tableId:e.id,row:Rt,prev:Rt}),Ie(),Rt},async remove(ne){B("delete"),await io(k,n,ne),t.events.emit("row:deleted",{tableId:e.id,rowId:ne}),Ie()},async bulkRemove(ne){if(ne.length!==0){B("delete");for(const ie of ne)await io(k,n,ie);Ie()}},subscribe(ne){Z.add(ne),fe?ne(de):Ie();let ie=null;return m>0&&(ie=setInterval(()=>void Ie(),m)),()=>{Z.delete(ne),ie&&clearInterval(ie)}},async refresh(){await Ie()}}}function Uc(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Wc=Object.defineProperty,Hc=Object.getOwnPropertyDescriptor,lr=(e,t,r,i)=>{for(var n=i>1?void 0:i?Hc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Wc(t,r,n),n};const Kc="https://latest.datasette.io/ephemeral";let Ft=class extends nt{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();t&&this.finish({url:t,token:this.token.trim()})}}connectedCallback(){super.connectedCallback(),Ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ft.instance===this&&(Ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mn(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return U`
      <dialog @cancel=${this.onCancel} @keydown=${jn}>
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
                placeholder="e.g. ${Kc}"
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
    `}};Ft.instance=null;Ft.styles=[pn,at`
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
    `];lr([J()],Ft.prototype,"url",2);lr([J()],Ft.prototype,"token",2);lr([J()],Ft.prototype,"status",2);lr([J()],Ft.prototype,"statusKind",2);Ft=lr([dt("datasette-connect-dialog")],Ft);const qi=e=>e.replace(/^https?:\/\//,"");async function Xo(e,t,r,i={}){if(t.db&&t.table)return[{db:t.db,table:t.table,count:null,hidden:!1,pks:[]}];let n=[];if(t.db){for(const f of await no(e,t.base,t.db))f.hidden||n.push(f);if(i.skipPicker)return n}else{const f=await qo(e,t.base);if(f.length===0)return[];let m=f;if(f.length>1){const $=await Ni(f.map(S=>({name:S,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${qi(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!$)return null;m=$.map(S=>f[S])}for(const $ of m)try{for(const S of await no(e,t.base,$))S.hidden||n.push(S)}catch{}}if(n.length===0)return[];const a=new Set(n.map(f=>f.db)).size>1,c=await Ni(n.map(f=>({name:a?`${f.db}/${f.table}`:f.table,size:f.count,detail:a?void 0:f.db})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${qi(t.base)}.`,confirmLabel:r});return c?c.map(f=>n[f]):null}const Vc='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Yc={name:"datasette-source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"easyDBAccess built-ins",optional:!0},Mn={maxImportRows:1e4,pageSize:1e3},Xc="https://latest.datasette.io/fixtures/facetable";function Gc(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:Vc,tooltip:"Connect a live, editable Datasette table",onClick:()=>nu(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>su(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:qc}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const i=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Xc}`,"","Import from Datasette");i&&await so(t,i)}}),e.ui.registerDropHandler(async(t,r)=>{const i=t.dataTransfer?.getData("text/plain")||"";return Qc(i)?(t.preventDefault(),await so(r,i),!0):!1})}async function so(e,t){try{await rs(e,t)}catch(r){let i;r instanceof Vt?i=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:i=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(i,"Datasette import failed")}}function Qc(e){try{const t=Fn(e);return!!(t.db&&t.table)}catch{return!1}}function Jc(e){return{name:e,rowCount:0,hasMore:!1,truncated:!1,pages:0,count:null,skipped:!0}}function Zc(e,t){if(!e.has(t))return t;for(let r=2;;r++){const i=`${t} (${r})`;if(!e.has(i))return i}}async function rs(e,t,r={}){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=Fn(t),c=await Xo(O=>e.backend.fetch(O),n,"Import",{skipPicker:r.skipTablePicker});if(c===null)return;if(c.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}let f=0,m=0,$=0;const S=[],k=[];for(const O of c)try{const B=await eu(e,i,{base:n.base,db:O.db,table:O.table,query:{}});if(B.skipped){m+=1;continue}f+=1,$+=B.rowCount,(B.hasMore||B.truncated)&&S.push(`${O.db}/${O.table}`)}catch(B){k.push(`${O.db}/${O.table}: ${B?.message??String(B)}`)}tu(e,{imported:f,skipped:m,totalRows:$,capped:S,failed:k,requested:c.length})}async function eu(e,t,r){const i=`${r.db}/${r.table}`,n=ie=>e.backend.fetch(ie),a=(await e.store.tables.find()).filter(ie=>ie.workspaceId===t),c=a.find(ie=>ie.name===i);let f=i,m;if(c){const ie=await e.ui.dialogs.choice(`A table named "${i}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!ie||ie==="Skip")return Jc(i);ie==="Overwrite"?m=c.id:f=Zc(new Set(a.map(ye=>ye.name)),i)}let $=[],S=null,k=!1;try{const ie=await Uo(n,r);$=ie.columns,S=ie.count,k=ie.typed}catch{}const{rows:O,truncated:B,hasMore:q,pages:Z}=await Qr(n,r,{maxRows:Mn.maxImportRows,pageSize:Mn.pageSize}),de=$.length===0?ts(O):k?$:Wo($,O),fe=Date.now(),be=m??Hr(),Ie={type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`};if(e.events.emit("import:before",{source:"datasette",tableId:be}),m){await e.store.tables.patch(m,{columns:de,origin:Ie,updatedAt:fe});const ie=e.store.rows(m),ye=await ie.find();await ie.bulkRemove(ye.map(Te=>Te.id))}else await e.store.tables.insert({id:be,workspaceId:t,name:f,code:Qo(`${r.db}-${r.table}`),columns:de,view:"table",origin:Ie,updatedAt:fe});const ne=O.map(ie=>({id:Hr(),tableId:be,data:ie,updatedAt:fe}));return await e.store.rows(be).bulkInsert(ne),e.events.emit("import:after",{source:"datasette",tableId:be,rowCount:O.length}),{name:f,rowCount:O.length,hasMore:q,truncated:B,pages:Z,count:S}}function tu(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,i=`${t.imported} table${t.imported===1?"":"s"}`,n=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${i} (${r});${n} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.capped.length} capped at ${Mn.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${i} (${r}) from Datasette.${n}`,{kind:"success",title:"Datasette import"})}async function nu(e){const t=Ft.instance??ru(),r=(n,a)=>e.backend.fetch(n,a),i=await t.open({initialUrl:"https://datasette.io",async onTest(n,a){const c=Fn(n),f=await Vo(r,c.base,{token:a||void 0});if(!f.reachable)return`Unreachable: ${f.error??"no response"}`;const m=f.version?` (Datasette ${f.version})`:"";return f.writable?`Reachable${m} — signed in, read-write.`:`Reachable${m} — read-only (no token / not authenticated).`}});if(i)try{await Go(e,i.url,i.token)}catch(n){const a=n instanceof Vt?n.message:n?.message??String(n);await e.ui.dialogs.alert(a,"Connect Datasette failed")}}function ru(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function Go(e,t,r){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=Fn(t),a=(k,O)=>e.backend.fetch(k,O),c=ns(a,r||void 0),f=await Vo(a,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:Yo(n.base),value:r});let m;try{m=await Xo(c,n,"Connect")}catch(k){const O=k instanceof Vt?k.message:k?.message??String(k);throw new Error(`Couldn't read tables from ${qi(n.base)}: ${O}`)}if(m===null)return;if(m.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}let $=0;for(const k of m)await iu(e,i,n.base,k,f.writable,r),$+=1;const S=f.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${$} live table${$===1?"":"s"} from Datasette (${S}).`,{kind:"success",title:"Connect Datasette"})}async function iu(e,t,r,i,n,a){const c={base:r,db:i.db,table:i.table,query:{}},f=ns((fe,be)=>e.backend.fetch(fe,be),a||void 0);let m=[],$=!1;try{const fe=await Uo(f,c);m=fe.columns,$=fe.typed}catch{}const{rows:S}=await Qr(f,c,{maxRows:50,pageSize:50}),k=m.length===0?ts(S):$?m:Wo(m,S);let O=i.pks;if(!O||O.length===0)try{O=await Bc(f,c)}catch{O=[]}const B=k.map(fe=>O.includes(fe.field)?{...fe,unique:!0,notnull:!0}:fe),q=(await e.store.tables.find()).find(fe=>{const be=fe.source?.config;return fe.workspaceId===t&&fe.source?.type==="datasette"&&be?.base===r&&be?.db===i.db&&be?.table===i.table}),Z=q?.id??Hr(),de={...q??{},id:Z,workspaceId:t,name:`${i.db}/${i.table}`,code:Qo(`${i.db}-${i.table}`),columns:B,view:q?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:i.db,table:i.table,pks:O}},updatedAt:Date.now()};return q?await e.store.tables.upsert(de):await e.store.tables.insert(de),Z}async function su(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const i=e.store.rows(t);typeof i.refresh=="function"&&await i.refresh();const n=await i.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await ou(e,r)}catch(i){const n=i instanceof Vt?i.message:i?.message??String(i);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function ou(e,t){const r=Fn(t.origin.url),i=k=>e.backend.fetch(k),{rows:n,hasMore:a,truncated:c}=await Qr(i,r,{maxRows:Mn.maxImportRows,pageSize:Mn.pageSize}),f=Date.now(),m=e.store.rows(t.id),$=await m.find();await m.bulkRemove($.map(k=>k.id)),await m.bulkInsert(n.map(k=>({id:Hr(),tableId:t.id,data:k,updatedAt:f}))),await e.store.tables.patch(t.id,{updatedAt:f});const S=a||c?` (capped at ${Mn.maxImportRows})`:"";e.ui.dialogs.toast(`Refreshed ${n.length} rows from ${r.db}/${r.table}${S}.`,{kind:a||c?"warning":"success",title:"Refresh"})}function Qo(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Hr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const au=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:Go,importDatasette:rs,init:Gc,meta:Yc},Symbol.toStringTag,{value:"Module"})),lu={name:"dump-export",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"easyDBAccess built-ins"};function cu(e){e.ui.registerFooterButton({id:"dump-export:dump",label:"Dump",icon:"archive",tooltip:"Export the current workspace as a JSON dump file",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await Zr(e);await e.backend.saveFile(`workspace-${t}.db.json`,r,"application/json")}})}async function Zr(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i={workspaceId:t,exportedAt:Date.now(),tables:[]};for(const n of r){const a=await e.store.rows(n.id).find();i.tables.push({name:n.name,columns:n.columns,rows:a.map(c=>c.data),...n.windowGeometry?{windowGeometry:n.windowGeometry}:{},...n.sortColumn?{sortColumn:n.sortColumn,sortAsc:n.sortAsc??!0}:{}})}return JSON.stringify(i,null,2)}const uu=Object.freeze(Object.defineProperty({__proto__:null,init:cu,meta:lu,serializeWorkspace:Zr},Symbol.toStringTag,{value:"Module"})),du={name:"sql-export",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"easyDBAccess built-ins"};function fu(e){e.ui.registerFooterButton({id:"sql-export:dump",label:"SQL",icon:"storage",tooltip:"Export the current workspace as a .sql script",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await Jo(e);await e.backend.saveFile(`workspace-${t}.sql`,r,"application/sql")}})}async function Jo(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const a=await e.store.rows(n.id).find();i.push(hu(n,a),"")}return i.push("COMMIT;",""),i.join(`
`)}function hu(e,t){const r=Ui(e.code||e.name||`table_${e.id}`),i=['  "__id" TEXT PRIMARY KEY',...e.columns.map(a=>`  ${pu(a)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,i.join(`,
`),");"];if(t.length>0){const c=["__id",...e.columns.map(f=>f.field)].map(f=>`"${Ui(f)}"`).join(", ");for(const f of t){const m=[oo(f.id),...e.columns.map($=>oo(f.data[$.field],$.type))];n.push(`INSERT INTO "${r}" (${c}) VALUES (${m.join(", ")});`)}}return n.join(`
`)}function pu(e){const t=[`"${Ui(e.field)}"`,mu(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function mu(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function oo(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=gu(e);return r===null?"NULL":zr(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?zr(e.toISOString()):zr(typeof e=="string"?e:JSON.stringify(e))}function gu(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?ao(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const i=new Date(t);return Number.isFinite(i.getTime())?ao(i):null}return null}function ao(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),i=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${i}`}function zr(e){return`'${e.replace(/'/g,"''")}'`}function Ui(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const bu=Object.freeze(Object.defineProperty({__proto__:null,init:fu,meta:du,serializeWorkspaceAsSql:Jo},Symbol.toStringTag,{value:"Module"})),yu={name:"gist-sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"easyDBAccess built-ins"},wu="gist:";function vu(e){e.ui.registerFooterButton({id:"gist-sync:push",label:"Push",icon:"cloud_upload",tooltip:"Push the current workspace to a GitHub Gist",onClick:async()=>{try{await ku(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerFooterButton({id:"gist-sync:pull",label:"Pull",icon:"cloud_download",tooltip:"Pull the latest tables from the configured Gist",onClick:async()=>{try{await Cu(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}})}async function Zo(e){const t=e.workspaceId();return`${wu}${t??"default"}`}async function xu(e){const t=await Zo(e),r=await e.store.settings.findOne(t);if(!r)return null;const i=r.value;return!i||!i.token||!i.user?null:{user:i.user,gistId:i.gistId??"",token:i.token}}async function ea(e,t){const r=await Zo(e);await e.store.settings.upsert({key:r,value:t})}function $u(e){const t={};for(const r of e.split(";")){const i=r.indexOf("=");if(i<0)continue;const n=r.slice(0,i).trim(),a=r.slice(i+1).trim();n&&(t[n]=a)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function ta(e){const t=await xu(e);if(t)return t;const r=await e.ui.dialogs.prompt(`Connection string format:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,"","Gist credentials");if(!r)return null;const i=$u(r);return i?(await ea(e,i),i):(await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist credentials"),null)}async function ku(e){const t=await ta(e);if(!t)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=(await e.store.tables.find()).filter(m=>m.workspaceId===r);if(i.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const n={},a=[];for(const m of i){const $=await e.store.rows(m.id).find(),S=JSON.stringify(Eu(m,$),null,2);S.length>1e8&&a.push(`${m.name} (${(S.length/1e6).toFixed(2)} MB)`),n[`${na(m.name)}.table.json`]={content:S}}if(a.length>0&&!await e.ui.dialogs.confirm(`These tables exceed Gist's 100 MB-per-file limit and will be rejected:

${a.join(`
`)}

Push anyway?`,"Gist size warning"))return;n["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1"},null,2)};let c;if(t.gistId){const m=await fetch(`https://api.github.com/gists/${t.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:n,description:`easyDBAccess workspace: ${r}`})});if(!m.ok)throw new Error(await Wi(m));c=await m.json()}else{const m=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:n})});if(!m.ok)throw new Error(await Wi(m));c=await m.json(),t.gistId=c.id,await ea(e,t)}const f=c.html_url??`https://gist.github.com/${t.user}/${c.id}`;e.ui.dialogs.toast(`Pushed ${i.length} table${i.length===1?"":"s"}.  ${f}`,{kind:"success",title:"Gist sync"})}async function Cu(e){const t=await ta(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!i.ok)throw new Error(await Wi(i));const n=await i.json(),a=Object.entries(n.files).filter(([$])=>$.endsWith(".table.json")&&!$.startsWith("_easydb"));if(a.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const c=(await e.store.tables.find()).filter($=>$.workspaceId===r),f=new Map(c.map($=>[$.name,$]));let m=0;for(const[,$]of a){const S=JSON.parse($.content);if(!S.name||!Array.isArray(S.columns))continue;let k;const O=f.get(S.name);if(O){k=await e.store.tables.patch(O.id,{columns:S.columns,updatedAt:Date.now()});const q=e.store.rows(O.id),Z=await q.find();await q.bulkRemove(Z.map(de=>de.id))}else k=await e.store.tables.insert({id:lo(),workspaceId:r,name:S.name,code:na(S.name),columns:S.columns,view:"table",updatedAt:Date.now()});const B=(S.rows??[]).map(q=>({id:lo(),tableId:k.id,data:q,updatedAt:Date.now()}));await e.store.rows(k.id).bulkInsert(B),m++}e.ui.dialogs.toast(`Pulled ${m} table${m===1?"":"s"} from gist ${t.gistId}.`,{kind:"success",title:"Gist sync"})}function Eu(e,t){return{name:e.name,columns:e.columns,rows:t.map(r=>r.data)}}async function Wi(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function na(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function lo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Su=Object.freeze(Object.defineProperty({__proto__:null,init:vu,meta:yu},Symbol.toStringTag,{value:"Module"})),ra="server-sync:url";function ia(e){return`server-sync:etag:${e}`}async function sa(e){const r=(await e.store.settings.findOne(ra))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function _u(e,t){await e.store.settings.upsert({key:ra,value:t.replace(/\/+$/,"")})}async function oa(e,t){const i=(await e.store.settings.findOne(ia(t)))?.value;return typeof i=="string"?i:null}async function An(e,t,r){await e.store.settings.upsert({key:ia(t),value:r})}function ei(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function co(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function aa(e,t,r){const i=Gr(r,t),n=(await e.store.tables.find()).filter(c=>c.workspaceId===t);for(const c of n){const f=e.store.rows(c.id),m=await f.find();await f.bulkRemove(m.map($=>$.id)),await e.store.tables.remove(c.id)}let a=0;for(const c of i){const f=uo(),m=await e.store.tables.insert({id:f,workspaceId:t,name:c.name,code:Pu(c.name),columns:c.columns,view:"table",...c.windowGeometry?{windowGeometry:c.windowGeometry}:{},...c.sortColumn?{sortColumn:c.sortColumn,sortAsc:c.sortAsc??!0}:{},updatedAt:Date.now()}),$=c.rows.map(S=>({id:uo(),tableId:m.id,data:S,updatedAt:Date.now()}));await e.store.rows(m.id).bulkInsert($),a++}return a}function Pu(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function uo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Au={name:"server-sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"easyDBAccess built-ins"};function Du(e){e.ui.registerFooterButton({id:"server-sync:push",label:"Sync ↑",icon:"cloud_sync",tooltip:"Push this workspace to the configured server",onClick:async()=>{try{await Tu(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Server sync"})}}}),e.ui.registerFooterButton({id:"server-sync:pull",label:"Sync ↓",icon:"cloud_sync",tooltip:"Pull this workspace from the configured server",onClick:async()=>{try{await ju(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Server sync"})}}})}async function Tu(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await la(e);if(!r)return;const i=await Zr(e),n=await oa(e,t),a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);let c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:a,body:i});if(c.status===412){const m=await c.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){m.currentEtag&&await An(e,t,m.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:i})}if(!c.ok)throw new Error(await ca(c));const f=ei(c.headers.get("ETag"));f&&await An(e,t,f),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function ju(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await la(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await ca(n));const a=ei(n.headers.get("ETag")),c=await n.json(),f=await aa(e,t,c);a&&await An(e,t,a),e.ui.dialogs.toast(`Pulled ${f} table${f===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function la(e){const t=await sa(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await _u(e,r),r.replace(/\/+$/,"")}async function ca(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Fu=Object.freeze(Object.defineProperty({__proto__:null,init:Du,meta:Au},Symbol.toStringTag,{value:"Module"})),Ou={name:"new-table",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"easyDBAccess built-ins"};function Ru(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const zu=Object.freeze(Object.defineProperty({__proto__:null,init:Ru,meta:Ou},Symbol.toStringTag,{value:"Module"})),Iu={name:"plugin-manager-button",version:"0.1.0",description:"Registers a footer button that opens the Plugin Manager dialog.",author:"easyDBAccess built-ins"};function Lu(e){e.ui.registerFooterButton({id:"plugin-manager:open",label:"Plugins",icon:"extension",tooltip:"Add, disable, or remove plugins",onClick:()=>e.ui.openPluginManager()})}const Bu=Object.freeze(Object.defineProperty({__proto__:null,init:Lu,meta:Iu},Symbol.toStringTag,{value:"Module"})),Mu={name:"core-renderers",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"easyDBAccess built-ins"};function Nu(e){customElements.get("cell-date")||customElements.define("cell-date",qu),customElements.get("cell-datetime")||customElements.define("cell-datetime",Uu),customElements.get("cell-boolean")||customElements.define("cell-boolean",Wu),customElements.get("cell-script")||customElements.define("cell-script",Ku),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class qu extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="date",t.value=Yu(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Uu extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="datetime-local",t.value=Xu(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Wu extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="checkbox",t.checked=Hu(this._value),t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Hu(e){return e===!0||e==="true"||e===1||e==="1"}class Ku extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const a=document.createElement("span");a.textContent="(no script)",a.style.cssText="color:#9ca3af;font-style:italic",this.append(a);return}let r;try{r=Vu(t)}catch(a){this.append(Fi("compile error",a));return}let i;try{i=r(this._row)}catch(a){this.append(Fi("runtime error",a));return}if(typeof i!="string"){this.append(Fi("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=i,this.append(n)}}const fo=new Map;function Vu(e){const t=fo.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return fo.set(e,r),r}function Fi(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const i=t instanceof Error?t.message:String(t);r.title=i}return r}function Yu(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function Xu(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const Gu=Object.freeze(Object.defineProperty({__proto__:null,init:Nu,meta:Mu},Symbol.toStringTag,{value:"Module"})),Qu={name:"cell-color",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"easyDBAccess built-ins"};function Ju(e){customElements.get("cell-color")||customElements.define("cell-color",Zu),e.ui.registerCellRenderer("color","cell-color")}class Zu extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,i){this.value=i}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const ed=Object.freeze(Object.defineProperty({__proto__:null,init:Ju,meta:Qu},Symbol.toStringTag,{value:"Module"})),td={name:"cell-image",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"easyDBAccess built-ins"};function nd(e){customElements.get("cell-image")||customElements.define("cell-image",rd),e.ui.registerCellRenderer("image","cell-image")}class rd extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const i=document.createElement("img");i.src=this._value,i.alt="",i.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(i)}else{const i=document.createElement("span");i.style.color="#9ca3af",i.textContent="no image",t.append(i);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const i=new FileReader;i.onload=()=>this.commit(String(i.result)),i.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const id=Object.freeze(Object.defineProperty({__proto__:null,init:nd,meta:td},Symbol.toStringTag,{value:"Module"})),sd={name:"cell-link",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"easyDBAccess built-ins"};function od(e){customElements.get("cell-link")||customElements.define("cell-link",ad),e.ui.registerCellRenderer("link","cell-link")}class ad extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:ld(t),i=!this._editing&&!r?cd(t):null,n=!this._editing&&!r&&!i?ud(t):null;if(r||i||n){const a=document.createElement("span");a.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const c=document.createElement("a");c.href=r?t:i?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(c.target="_blank",c.rel="noopener noreferrer"),c.textContent=t,c.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",c.title=r?`Open ${t}`:i?`Email ${t}`:`Call ${t}`;const f=document.createElement("button");f.type="button",f.title="Edit",f.textContent="✎",f.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",f.addEventListener("click",m=>{m.preventDefault(),m.stopPropagation(),this._editing=!0,this.render()}),a.append(c,f),this.append(a)}else{const a=document.createElement("input");a.type="text",a.value=t,a.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",a.addEventListener("change",()=>this.commit(a.value)),a.addEventListener("keydown",c=>{c.key==="Enter"?(c.preventDefault(),this.commit(a.value)):c.key==="Escape"&&(this._editing=!1,this.render())}),this.append(a),this._editing&&setTimeout(()=>{a.focus(),a.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function ld(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function cd(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function ud(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const i=/[ ()\-.]/.test(t),n=t.startsWith("+");return!i&&!n&&r.length<10?null:t}const dd=Object.freeze(Object.defineProperty({__proto__:null,init:od,meta:sd},Symbol.toStringTag,{value:"Module"}));var fd=Object.defineProperty,hd=Object.getOwnPropertyDescriptor,gn=(e,t,r,i)=>{for(var n=i>1?void 0:i?hd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&fd(t,r,n),n};const pd="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",md='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',ho=[{label:"Northwind — sample database (JSON dump)",url:pd,kind:"json"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],gd={name:"import-data",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"easyDBAccess built-ins",optional:!0};function bd(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:md,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>yd(e)})}async function yd(e){const r=await(bt.instance??wd()).open({async listDatabases(c){const f=Fn(c);return qo(m=>e.backend.fetch(m),f.base)}});if(!r)return;const{url:i,kind:n,dbChosen:a}=r;try{if(n==="datasette")await rs(e,i,{skipTablePicker:a});else{const c=await e.backend.fetch(i);if(!c.ok)throw new Error(`HTTP ${c.status} ${c.statusText}`);const f=await c.text();await es(e,f,mo(i)),e.ui.dialogs.toast(`Imported ${mo(i)}.`,{kind:"success",title:"Import"})}}catch(c){e.ui.dialogs.toast(`Could not import ${i}: ${c.message}`,{kind:"error",title:"Import"})}}function wd(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function vd(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),i=[...t.searchParams.keys()].some(a=>a.startsWith("_")),n=r.includes("datasette")||i;return/\.(json|csv)$/i.test(t.pathname)&&!i?"json":n?"datasette":"json"}catch{return"json"}}function po(e,t){if(t!=="datasette"||!e)return!1;try{const r=Fn(e);return!r.db&&!r.table}catch{return!1}}function mo(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}let bt=class extends nt{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.resolvedKind,i=r==="datasette"&&!!this.selectedDb&&po(t,r),n=i?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:n,kind:r,dbChosen:i})}}get resolvedKind(){return this.kind==="auto"?vd(this.url.trim()):this.kind}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),bt.instance=this}disconnectedCallback(){super.disconnectedCallback(),bt.instance===this&&(bt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mn(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=ho[t];r&&(this.url=r.url,this.kind=r.kind)}renderDbPicker(){return!this.listDatabases||!po(this.url.trim(),this.resolvedKind)?ze:U`
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
      ${this.dbError?U`<p class="hint error">${this.dbError}</p>`:ze}
    `}render(){return U`
      <dialog @cancel=${this.onCancel} @keydown=${jn}>
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
                ${ho.map((e,t)=>U`<option value=${String(t)} ?selected=${t===this.presetIdx}>
                      ${e.label}
                    </option>`)}
              </select>
            </label>

            <label>
              URL
              <input
                type="text"
                autofocus
                placeholder="https://… (JSON dump or Datasette table)"
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
                <option value="datasette" ?selected=${this.kind==="datasette"}>
                  Datasette (table or instance)
                </option>
              </select>
            </label>

            ${this.renderDbPicker()}

            <p class="hint">
              Paste any URL or pick a sample above. For a Datasette instance root, click
              <em>List databases</em> to pick one first. Multi-table sources — a JSON dump with
              several tables, or a Datasette database/instance URL — let you choose which tables to
              import. Datasette tables import a read-only snapshot (capped at 10,000 rows each).
            </p>
          </div>
        </form>
      </dialog>
      ${ze}
    `}};bt.instance=null;bt.styles=[pn,at`
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
    `];gn([J()],bt.prototype,"url",2);gn([J()],bt.prototype,"kind",2);gn([J()],bt.prototype,"presetIdx",2);gn([J()],bt.prototype,"dbList",2);gn([J()],bt.prototype,"dbLoading",2);gn([J()],bt.prototype,"dbError",2);gn([J()],bt.prototype,"selectedDb",2);bt=gn([dt("import-dialog")],bt);const xd=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return bt},init:bd,meta:gd},Symbol.toStringTag,{value:"Module"})),$d={name:"auto-sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"easyDBAccess built-ins",optional:!0},kd=6e4;let go=null,Hi=!1;const Oi=new Map;function Cd(e){go===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(go=setInterval(()=>{ua(e)},kd)))}async function ua(e){if(Hi)return;const t=e.workspaceId();if(!t)return;const r=await sa(e);if(r)try{await Ed(e,r,t)}catch(i){console.warn("[auto-sync]",i)}}async function Ed(e,t,r){const i=await Zr(e),n=await oa(e,r),a=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(a.status===404){await bo(e,t,r,i,null);return}if(!a.ok)return;const c=ei(a.headers.get("ETag")),f=await a.text();if(co(i)===co(f)){c&&c!==n&&await An(e,r,c);return}if(c&&c===n){await bo(e,t,r,i,n);return}if(!(c&&Oi.get(r)===c)){Hi=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const $=JSON.parse(f),S=await aa(e,r,$);c&&await An(e,r,c),Oi.delete(r),e.ui.dialogs.toast(`Pulled ${S} table${S===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else c&&Oi.set(r,c)}finally{Hi=!1}}}async function bo(e,t,r,i,n){const a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);const c=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:a,body:i});if(c.ok){const f=ei(c.headers.get("ETag"));f&&await An(e,r,f);return}if(c.status===412){const f=await c.json().catch(()=>({}));f.currentEtag&&await An(e,r,f.currentEtag)}}const da=Object.freeze(Object.defineProperty({__proto__:null,load:Cd,meta:$d,tick:ua},Symbol.toStringTag,{value:"Module"})),fa=[zu,ic,Sc,au,cc,uu,bu,Su,Fu,Bu,Gu,ed,id,dd,xd,da],Sd=fa;function Ki(e){return`builtin:${e}`}async function _d(e){const t=[];for(const r of fa)if(!await Pd(e,r)){t.push(r);try{await r.init?.(e)}catch(i){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"init",error:i})}}return async()=>{for(const r of t)try{await r.load?.(e)}catch(i){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"load",error:i})}}}async function Pd(e,t){if(!t.meta?.optional)return!1;const r=t.meta.name;return r?(await e.store.plugins.findOne(Ki(r)))?.enabled===!1:!1}async function Ad(e){const t=e.workspaceId();if(!t)return async()=>{};const i=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const a of i)try{const c=await e.store.plugins.findOne(a);if(c&&c.enabled===!1)continue;let f=c?.cachedBody??"";if(f)Dd(e,a,f);else{try{f=await ha(a)}catch(S){await e.store.plugins.upsert({url:a,enabled:c?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${S.message}`}),e.events.emit("plugin:error",{url:a,phase:"fetch",error:S});continue}await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),cachedBody:f})}const m=new Blob([f],{type:"text/javascript"}),$=URL.createObjectURL(m);try{const S=await import($);await S.init?.(e),n.push({url:a,mod:S})}finally{setTimeout(()=>URL.revokeObjectURL($),5e3)}}catch(c){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`init: ${c.message}`}),e.events.emit("plugin:error",{url:a,phase:"init",error:c})}return async()=>{for(const{url:a,mod:c}of n)try{await c.load?.(e)}catch(f){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`load: ${f.message}`}),e.events.emit("plugin:error",{url:a,phase:"load",error:f})}}}async function ha(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function Dd(e,t,r){return(async()=>{try{const i=await ha(t);if(i===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:i})}catch{}})()}let Ri=null;function Fe(){return Ri||(Ri=Td()),Ri}async function Td(){const e=await Sl(),t=Pl(e),r=Dl(),i=Il(),n=new Map;t.tables.subscribe(Z=>{n.clear();for(const de of Z)n.set(de.id,de)});const a={...t.tables,insert:Z=>(n.set(Z.id,Z),t.tables.insert(Z)),upsert:Z=>(n.set(Z.id,Z),t.tables.upsert(Z))};let c=null;const f={get backend(){if(!c)throw new Error("[host] row-source ctx used before app init completed");return c.backend},events:r,settings:t.settings,workspaceId:()=>k},m=Al({base:{...t,tables:a},providers:i.rowSources,tableById:Z=>n.get(Z),ctx:f}),$=jd(),S=await m.workspaces.find();let k;if($){const Z=Fd($),de=S.find(fe=>fe.id===Z||fe.name===$);de?k=de.id:k=(await m.workspaces.insert({id:Z,name:$,createdAt:Date.now(),pluginUrls:[]})).id}else S.length===0?k=(await m.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id:k=S[0].id;const O=Ml({store:m,events:r,registries:i,workspaceId:()=>k});c=O,r.on("import:after",({source:Z,tableId:de,rowCount:fe})=>{Z!=="datasette"&&O.store.tables.findOne(de).then(be=>{O.ui.dialogs.toast(`Imported ${fe} row${fe===1?"":"s"} into "${be?.name??de}".`,{kind:"success",title:Z.toUpperCase()+" import"})})}),r.on("plugin:error",({url:Z,phase:de,error:fe})=>{O.ui.dialogs.toast(`[${de}] ${fe?.message??String(fe)}`,{kind:"error",title:`Plugin: ${Z}`})});const B=await _d(O),q=await Ad(O);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:k}),await B(),await q()}),{store:m,events:r,workspaceId:k,registries:i,api:O}}function jd(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}function Fd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var Od=Object.defineProperty,Rd=Object.getOwnPropertyDescriptor,ti=(e,t,r,i)=>{for(var n=i>1?void 0:i?Rd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Od(t,r,n),n};let qn=class extends nt{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mn(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=Xr(this.text)}catch(c){this.errorMsg=`Couldn't parse the CSV: ${c.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const i=await Fe(),n=crypto.randomUUID();await i.store.tables.insert({id:n,workspaceId:i.workspaceId,name:t,code:zd(t),columns:r.columns,view:"table",updatedAt:Date.now()});const a=r.rows.map(c=>({id:crypto.randomUUID(),tableId:n,data:c,updatedAt:Date.now()}));await i.store.rows(n).bulkInsert(a),i.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return U`
      <dialog @cancel=${this.close} @keydown=${jn}>
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
    `}};qn.styles=[pn,at`
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
    `];ti([J()],qn.prototype,"name",2);ti([J()],qn.prototype,"text",2);ti([J()],qn.prototype,"errorMsg",2);qn=ti([dt("csv-paste-dialog")],qn);function zd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var Id=Object.defineProperty,Ld=Object.getOwnPropertyDescriptor,is=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ld(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Id(t,r,n),n};const Bd=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let Yt=class extends nt{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),Yt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Yt.instance===this&&(Yt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mn(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:Bd,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return U`
      <dialog @cancel=${this.onCancel} @keydown=${jn}>
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
    `}};Yt.instance=null;Yt.styles=[pn,at`
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
    `];is([J()],Yt.prototype,"text",2);is([J()],Yt.prototype,"columnLabel",2);Yt=is([dt("script-editor-dialog")],Yt);var Md=Object.defineProperty,Nd=Object.getOwnPropertyDescriptor,Nt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Nd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Md(t,r,n),n};const qd=["string","number","boolean","date","datetime"];let At=class extends nt{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.columns=[],this.errorMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mn(this.dialogEl,e)}async open(e){this.errorMsg="";const t=await Fe();if(this.rendererOptions=[...t.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=t.events.on("app:ready",()=>{this.rendererOptions=[...t.registries.cellRenderers.keys()].sort()}),e){const r=await Fe(),i=await r.store.tables.findOne(e);if(!i)return;this.mode="edit",this.editTableId=e,this.name=i.name,this.columns=i.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,origField:a.field}));const n=await r.store.rows(e).find();this.previewRows=n.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const i=[...this.columns],[n]=i.splice(e,1);i.splice(r,0,n),this.columns=i}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientY<i.top+i.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,i=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!i)return;const n=[...this.columns],[a]=n.splice(r,1);let c=t+(r<t?-1:0);i==="after"&&(c+=1),n.splice(c,0,a),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,i)=>i===e?{...r,...t}:r)}async editScript(e){const t=Yt.instance;if(!t)return;const r=this.columns[e];if(!r)return;const i=await t.open(r.script??"",r.label||r.field);i!==null&&this.patchColumn(e,{script:i.trim()?i:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const r=new Set;for(const a of this.columns){const c=a.field.trim();if(!c){this.errorMsg="Column field names cannot be empty.";return}if(r.has(c)){this.errorMsg=`Duplicate column field: ${c}`;return}r.add(c)}const i=await Fe(),n=this.columns.map(a=>{const c={field:a.field.trim(),label:a.label.trim()||a.field.trim(),type:a.type};return a.renderer&&(c.renderer=a.renderer),a.script&&(c.script=a.script),a.max!=null&&a.max>0&&(c.max=a.max),a.unique&&(c.unique=!0),a.notnull&&(c.notnull=!0),a.hidden&&(c.hidden=!0),c});if(this.mode==="edit"&&this.editTableId){const a=this.editTableId,c=await i.store.tables.findOne(a),f=new Map((c?.columns??[]).map($=>[$.field,$])),m=n.filter($=>{const S=f.get($.field);return $.unique&&!S?.unique||$.notnull&&!S?.notnull||$.max&&$.max>0&&$.max!==S?.max});if(m.length>0){const $=await i.store.rows(a).find(),S=Hd(m,$);if(S.length>0){this.errorMsg=`Cannot save: ${S.length} existing ${S.length===1?"row violates":"rows violate"} the new constraints.
${S.slice(0,5).join(`
`)}${S.length>5?`
…and ${S.length-5} more.`:""}`;return}}await i.store.tables.patch(a,{name:t,columns:n,updatedAt:Date.now()})}else await i.store.tables.insert({id:Vd(),workspaceId:i.workspaceId,name:t,code:Kd(t),columns:n,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return U`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const t of this.columns){if(!t.unique)continue;const r=new Set,i=new Set;for(const n of this.previewRows){const a=n.data[t.field];a==null||a===""||(r.has(a)&&i.add(a),r.add(a))}e.set(t.field,i)}return U`
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
                  ${this.columns.map(r=>{const i=t.data[r.field],n=Wd(r,i,e.get(r.field));return U`<td
                      class=${n?"violation":""}
                      title=${n??""}
                    >${Ud(i)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return U`
      <dialog @cancel=${this.close} @keydown=${jn}>
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
                  @dragover=${f=>this.onRowDragOver(f,i,f.currentTarget)}
                  @dragleave=${()=>this.onRowDragLeave(i)}
                  @drop=${f=>this.onRowDrop(f,i)}
                >
                  <span
                    class="drag-handle"
                    title="Drag to reorder"
                    draggable="true"
                    @dragstart=${f=>this.onRowDragStart(f,i)}
                    @dragend=${()=>this.onRowDragEnd()}
                  >
                    <span class="mi sm">drag_indicator</span>
                  </span>
                  <input
                    type="text"
                    .value=${r.field}
                    @input=${f=>this.patchColumn(i,{field:f.target.value})}
                  />
                  <input
                    type="text"
                    .value=${r.label}
                    @input=${f=>this.patchColumn(i,{label:f.target.value})}
                  />
                  <select
                    .value=${r.type}
                    @change=${f=>this.patchColumn(i,{type:f.target.value})}
                  >
                    ${qd.map(f=>U`<option value=${f} ?selected=${f===r.type}>${f}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${f=>{const m=f.target.value;this.patchColumn(i,{renderer:m||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(f=>U`<option value=${f} ?selected=${f===r.renderer}>${f}</option>`)}
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
                    @input=${f=>{const m=f.target.value;this.patchColumn(i,{max:m===""?void 0:Number(m)})}}
                  />
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Unique"
                      .checked=${!!r.unique}
                      @change=${f=>this.patchColumn(i,{unique:f.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Not null"
                      .checked=${!!r.notnull}
                      @change=${f=>this.patchColumn(i,{notnull:f.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Visible — uncheck to hide the column without losing its data"
                      .checked=${!r.hidden}
                      @change=${f=>this.patchColumn(i,{hidden:!f.target.checked})}
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
    `}};At.styles=[nn,pn,at`
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
  `];Nt([J()],At.prototype,"mode",2);Nt([J()],At.prototype,"editTableId",2);Nt([J()],At.prototype,"name",2);Nt([J()],At.prototype,"columns",2);Nt([J()],At.prototype,"errorMsg",2);Nt([J()],At.prototype,"dragSrcIdx",2);Nt([J()],At.prototype,"dropTargetIdx",2);Nt([J()],At.prototype,"dropEdge",2);Nt([J()],At.prototype,"previewRows",2);Nt([J()],At.prototype,"rendererOptions",2);At=Nt([dt("new-table-dialog")],At);function Ud(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function Wd(e,t,r){const i=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&i)return`${e.label}: empty`;if(i)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!i){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function Hd(e,t){const r=[];for(const i of e)if(i.notnull&&t.forEach((n,a)=>{const c=n.data[i.field];(c==null||typeof c=="string"&&c.trim()==="")&&r.push(`Row ${a+1}: ${i.label} is empty.`)}),i.max!=null&&i.max>0&&t.forEach((n,a)=>{const c=n.data[i.field];typeof c=="string"&&c.length>i.max?r.push(`Row ${a+1}: ${i.label} length ${c.length} > max ${i.max}.`):typeof c=="number"&&c>i.max&&r.push(`Row ${a+1}: ${i.label} value ${c} > max ${i.max}.`)}),i.unique){const n=new Map;t.forEach((a,c)=>{const f=a.data[i.field];f==null||f===""||(n.has(f)?r.push(`Row ${c+1}: ${i.label} duplicates row ${n.get(f)+1} ("${String(f)}").`):n.set(f,c))})}return r}function Kd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Vd(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Yd=Object.defineProperty,Xd=Object.getOwnPropertyDescriptor,Ot=(e,t,r,i)=>{for(var n=i>1?void 0:i?Xd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Yd(t,r,n),n};let $t=class extends nt{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.builtinNames=[],this.optionalBuiltins=[],this.dirtyBuiltins=!1,this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mn(this.dialogEl,e)}async open(){const e=await Fe(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(a=>[a.url,a]));const i=[],n=[];for(const a of Sd){const c=a.meta?.name;if(c)if(a.meta?.optional){const f=this.records.get(Ki(c));n.push({name:c,...a.meta?.description?{description:a.meta.description}:{},...a.meta?.author?{author:a.meta.author}:{},enabled:f?.enabled!==!1})}else i.push(c)}this.builtinNames=i,this.optionalBuiltins=n,this.dirtyBuiltins=!1,this.addUrl="",await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(),this.refreshServerRegistry()}async refreshCatalog(){const e=new URL("/plugins/catalog.json",location.origin).toString();try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),i=Array.isArray(r.plugins)?r.plugins:[];this.catalog=i.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await Fe()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const a=await fetch(n,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const c=await a.json(),f=Array.isArray(c.plugins)?c.plugins:[];this.serverCatalog=f.map(m=>({...m,absUrl:new URL(m.url,n).toString()})),this.serverCatalogError=null}catch(a){this.serverCatalog=[],this.serverCatalogError=a.message}}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await Fe()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await Fe();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await Fe(),i=this.records.get(e);await r.store.plugins.upsert({...i??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...i,url:e,enabled:t,lastFetched:i?.lastFetched??0}))}async removePlugin(e){const t=await Fe();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await Fe(),i=Ki(e),n=this.records.get(i);await r.store.plugins.upsert({...n??{url:i,lastFetched:0},url:i,enabled:t,lastFetched:n?.lastFetched??0}),this.optionalBuiltins=this.optionalBuiltins.map(a=>a.name===e?{...a,enabled:t}:a),this.dirtyBuiltins=!0}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await Fe();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const i=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:i});const n=new Blob([i],{type:"text/javascript"}),a=URL.createObjectURL(n);try{const f=await import(a);await f.init?.(t.api),await f.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(a),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const c=await t.store.plugins.find();this.records=new Map(c.map(f=>[f.url,f])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}render(){return U`
      <dialog @cancel=${this.close} @keydown=${jn}>
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
    `}};$t.styles=[nn,pn,at`
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
    `];Ot([J()],$t.prototype,"urls",2);Ot([J()],$t.prototype,"records",2);Ot([J()],$t.prototype,"addUrl",2);Ot([J()],$t.prototype,"builtinNames",2);Ot([J()],$t.prototype,"optionalBuiltins",2);Ot([J()],$t.prototype,"dirtyBuiltins",2);Ot([J()],$t.prototype,"catalog",2);Ot([J()],$t.prototype,"catalogError",2);Ot([J()],$t.prototype,"serverCatalog",2);Ot([J()],$t.prototype,"serverCatalogError",2);Ot([J()],$t.prototype,"installing",2);$t=Ot([dt("plugin-manager-dialog")],$t);/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let R={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&R.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let i=arguments[r];if(i==null)continue;i=Object(i);let n=Object.keys(Object(i));for(let a=0,c=n.length;a<c;a++){let f=n[a],m=Object.getOwnPropertyDescriptor(i,f);m!==void 0&&m.enumerable&&(t[f]=i[f])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,i=new Array(r);r--;)i[r]=[t[r],e[t[r]]];return i}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),i=document.createDocumentFragment();r.forEach(function(n){let a=n instanceof Node;i.appendChild(a?n:document.createTextNode(String(n)))}),this.appendChild(i)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,i=this;do for(r=t.length;--r>=0&&t.item(r)!==i;);while(r<0&&(i=i.parentElement));return i}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let i=document.createEvent("CustomEvent");return i.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),i}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),i=r.length>>>0;if(i===0)return!1;let n=t|0,a=Math.max(n>=0?n:i-Math.abs(n),0);function c(f,m){return f===m||typeof f=="number"&&typeof m=="number"&&isNaN(f)&&isNaN(m)}for(;a<i;){if(c(r[a],e))return!0;a++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>R.modifier=e),document.addEventListener("keyup",()=>R.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const i=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(i===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(i),a=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-a)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(i===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(i),a=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-a)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((i,n)=>{(i.startsWith("--")||i.startsWith("var"))&&(r[n]=R.getCssVariableValue(i))}),r.forEach(i=>{R.colorNames[i]?t[2]="#"+R.colorNames[i]:i.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=i:i.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=i:t[2]=i}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),i=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return i&&(t.size=i[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let i=e.indexOf(")");t=e.slice(0,i+1).replace(/\s+/g,""),t.startsWith("var")&&(t=R.getCssVariableValue(t)),r=e.slice(i+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let i=e.indexOf(" ");i>0?(t=e.slice(0,i+1).replace(/\s+/g,""),r=e.slice(i+1,e.length).trim()):t=e,t.startsWith("--")&&(t=R.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let i=r.indexOf(" ");r=r.slice(i+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:R.colorNames[r]?r="#"+R.colorNames[r]:r.match(/^(--|var)/)?r=R.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,i,n,a,c,f,m,$,S,k={};const O=/^#?([\da-f]{3}|[\da-f]{6})$/gi,B=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,q=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,Z=this.colorNames;return Z[t]&&(t=Z[t]),t.match(O)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),i=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),k.rgb={r:parseInt(r,16),g:parseInt(i,16),b:parseInt(n,16)},k.hex=`#${r}${i}${n}`):(k.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},k.hex=`#${t}`),S=this.rgbToHsl(k.rgb.r,k.rgb.g,k.rgb.b),k.hsl=S,k.rgb.css=`rgb(${k.rgb.r},${k.rgb.g},${k.rgb.b})`):t.match(B)?(m=B.exec(t),k.rgb={css:t,r:m[1],g:m[2],b:m[3]},k.hex=this.rgbToHex(m[1],m[2],m[3]),S=this.rgbToHsl(m[1],m[2],m[3]),k.hsl=S):t.match(q)?(m=q.exec(t),a=m[1]/360,c=m[2].slice(0,m[2].length-1)/100,f=m[3].slice(0,m[3].length-1)/100,$=this.hslToRgb(a,c,f),k.rgb={css:`rgb(${$[0]},${$[1]},${$[2]})`,r:$[0],g:$[1],b:$[2]},k.hex=this.rgbToHex(k.rgb.r,k.rgb.g,k.rgb.b),k.hsl={css:`hsl(${m[1]},${m[2]},${m[3]})`,h:m[1],s:m[2],l:m[3]}):(k.hex="#f5f5f5",k.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},k.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),k},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),i=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),a=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(i)<=t?"#ffffff":"#000000",f=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",m=this.lighten(e,this.colorFilledDark),$=this.perceivedBrightness(m)<=t?"#ffffff":"#000000";return[r.hsl.css,i,n,a,c,f,m,$]},darken(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i-i*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i+(100-i)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let i,n,a;if(t===0)i=n=a=r;else{let c=($,S,k)=>(k<0&&(k+=1),k>1&&(k-=1),k<.16666666666666666?$+(S-$)*6*k:k<.5?S:k<.6666666666666666?$+(S-$)*(.6666666666666666-k)*6:$),f=r<.5?r*(1+t):r+t-r*t,m=2*r-f;i=c(m,f,e+1/3),n=c(m,f,e),a=c(m,f,e-1/3)}return[Math.round(i*255),Math.round(n*255),Math.round(a*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let i=Math.max(e,t,r),n=Math.min(e,t,r),a,c,f=(i+n)/2;if(i===n)a=c=0;else{let m=i-n;switch(c=f>.5?m/(2-i-n):m/(i+n),i){case e:a=(t-r)/m+(t<r?6:0);break;case t:a=(r-e)/m+2;break;case r:a=(e-t)/m+4;break}a/=6}return a=Math.round(a*360),c=Math.round(c*100)+"%",f=Math.round(f*100)+"%",{css:"hsl("+a+","+c+","+f+")",h:a,s:c,l:f}},rgbToHex(e,t,r){let i=Number(e).toString(16),n=Number(t).toString(16),a=Number(r).toString(16);return i.length===1&&(i=`0${i}`),n.length===1&&(n=`0${n}`),a.length===1&&(a=`0${a}`),`#${i}${n}${a}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),i=r.filter(c=>c.match(/^(down|right|up|left)$/i));i.length&&(t.autoposition=i[0],r.splice(r.indexOf(i[0]),1));let n=r.filter(c=>c.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let a=r.filter(c=>c.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return a.length&&(t.offsetX=a[0].match(/^[+-]?\d*\.?\d+$/i)?`${a[0]}px`:a[0],a[1]?t.offsetY=a[1].match(/^[+-]?\d*\.?\d+$/i)?`${a[1]}px`:a[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(a[0]),1),a[1]&&r.splice(r.indexOf(a[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(Z=>{typeof t[Z]=="function"&&(t[Z]=t[Z].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,i=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),a=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},c=r==="window"?{x:1,y:1}:{x:a.width/r.offsetWidth,y:a.height/r.offsetHeight},f=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);a.width-=(parseFloat(f.borderLeftWidth)+parseFloat(f.borderRightWidth))*c.x,a.height-=(parseFloat(f.borderTopWidth)+parseFloat(f.borderBottomWidth))*c.y;let m;t.of?typeof t.of=="string"?m=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?m=t.of[0].getBoundingClientRect():m=t.of.getBoundingClientRect():m=a;let $=this.getScrollbarWidth(document.body),S=this.getScrollbarWidth(e.parentElement),k="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?k=m.left-a.left-parseFloat(f.borderLeftWidth)+"px":k="0px":t.at.startsWith("center")?t.of?k=m.left-a.left-parseFloat(f.borderLeftWidth)+m.width/2+"px":k=a.width/2+"px":t.at.startsWith("right-")&&(t.of?k=m.left-a.left-parseFloat(f.borderLeftWidth)+m.width+"px":k=a.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?k=m.left-a.left-parseFloat(f.borderLeftWidth)-i.width/2+"px":k=-i.width/2+"px":t.at.startsWith("center")?t.of?k=m.left-a.left-parseFloat(f.borderLeftWidth)-(i.width-m.width)/2+"px":k=a.width/2-i.width/2+"px":t.at.startsWith("right-")&&(t.of?k=m.left-a.left-parseFloat(f.borderLeftWidth)+(m.width-i.width/2)+"px":k=a.width-i.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?k=m.left-a.left-parseFloat(f.borderLeftWidth)-i.width+"px":k=-i.width+"px":t.at.startsWith("center")?t.of?k=m.left-a.left-parseFloat(f.borderLeftWidth)-i.width+m.width/2+"px":k=a.width/2-i.width+"px":t.at.startsWith("right-")&&(t.of?k=m.left-a.left-parseFloat(f.borderLeftWidth)+m.width-i.width+"px":k=a.width-i.width+"px",r!=="window"&&(k=parseFloat(k)-S.y+"px")));let O="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?O=m.top-a.top-parseFloat(f.borderTopWidth)+"px":O="0px":t.at.endsWith("center")?t.of?O=m.top-a.top-parseFloat(f.borderTopWidth)+m.height/2+"px":O=a.height/2+"px":t.at.endsWith("-bottom")&&(t.of?O=m.top-a.top-parseFloat(f.borderTopWidth)+m.height+"px":O=a.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?O=m.top-a.top-parseFloat(f.borderTopWidth)-i.height/2+"px":O=-i.height/2+"px":t.at.endsWith("center")?t.of?O=m.top-a.top-parseFloat(f.borderTopWidth)-i.height/2+m.height/2+"px":O=a.height/2-i.height/2+"px":t.at.endsWith("-bottom")&&(t.of?O=m.top-a.top-parseFloat(f.borderTopWidth)-i.height/2+m.height+"px":O=a.height-i.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?O=m.top-a.top-parseFloat(f.borderTopWidth)-i.height+"px":O=-i.height+"px":t.at.endsWith("center")?t.of?O=m.top-a.top-parseFloat(f.borderTopWidth)-i.height+m.height/2+"px":O=a.height/2-i.height+"px":t.at.endsWith("-bottom")&&(t.of?O=m.top-a.top-parseFloat(f.borderTopWidth)-i.height+m.height+"px":O=a.height-i.height+"px",r!=="window"?O=parseFloat(O)-S.x+"px":O=parseFloat(O)-$.x+"px")),e.style.left=c.x===1?k:parseFloat(k)/c.x+"px",e.style.top=c.y===1?O:parseFloat(O)/c.y+"px";let B=getComputedStyle(e),q={left:B.left,top:B.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(q=this.applyPositionAutopos(e,q,t)),(t.offsetX||t.offsetY)&&(q=this.applyPositionOffset(e,q,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(q=this.applyPositionMinMax(e,q,t)),t.modify&&(q=this.applyPositionModify(e,q,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const i=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(i);const n=Array.prototype.slice.call(document.querySelectorAll(`.${i}`)),a=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((c,f)=>{f>0&&f<=a&&(t.top=parseFloat(t.top)+n[--f].getBoundingClientRect().height+R.autopositionSpacing+"px")});break;case"up":n.forEach((c,f)=>{f>0&&f<=a&&(t.top=parseFloat(t.top)-n[--f].getBoundingClientRect().height-R.autopositionSpacing+"px")});break;case"right":n.forEach((c,f)=>{f>0&&f<=a&&(t.left=parseFloat(t.left)+n[--f].getBoundingClientRect().width+R.autopositionSpacing+"px")});break;case"left":n.forEach((c,f)=>{f>0&&f<=a&&(t.left=parseFloat(t.left)-n[--f].getBoundingClientRect().width-R.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const i=getComputedStyle(e);return{left:i.left,top:i.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(i=>{e.classList.contains(i)&&(t=i)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),i=document.createElement("button");i.className="btn btn"+t.color.slice(r),document.body.appendChild(i),t.color=getComputedStyle(i).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(i),i=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},i=typeof t=="object"?Object.assign(r,t):r,n=i.bgPanel,a=i.bgContent,c=i.colorHeader,f=i.colorContent,m=i.bgFooter,$=i.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[c]&&(c="#"+this.colorNames[c]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(O=>e.querySelector(O).style.color=this.getCssVariableValue(c)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(O=>O.style.color=this.getCssVariableValue(c)),this.colorNames[a]?e.content.style.background="#"+this.colorNames[a]:e.content.style.background=this.getCssVariableValue(a),this.colorNames[f]?e.content.style.color="#"+this.colorNames[f]:e.content.style.color=this.getCssVariableValue(f),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(f)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[m]?e.footer.style.background="#"+this.colorNames[m]:e.footer.style.background=this.getCssVariableValue(m),this.colorNames[$]?e.footer.style.color="#"+this.colorNames[$]:e.footer.style.color=this.getCssVariableValue($),i.border&&e.setBorder(i.border),i.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(i.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,i]of Object.entries(t))e.style[r]=typeof i=="string"?R.getCssVariableValue(i):i;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const i=document.createElement("script");i.src=e,i.type=t,document.head.appendChild(i),r&&(i.onload=r)}},ajax(e,t){let r,i,n=new XMLHttpRequest;const a={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let c=R.strToHtml(this.responseText);r.urlSelector&&(c=c.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(c)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},a,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},a,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&R.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}i=r.url.trim().split(/\s+/),r.url=encodeURI(i[0]),i.length>1&&(i.shift(),r.urlSelector=i.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&R.ajaxAutoresizeAutoreposition(t,r),R.ajaxAlwaysCallbacks.length&&R.ajaxAlwaysCallbacks.forEach(c=>{t?c.call(n,n,t):c.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const i={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(a,c){if(c){let f=R.strToHtml(a);c.contentRemove(),c.content.append(f)}}};if(t&&typeof e=="string")r=Object.assign({},i,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},i,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&R.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(a=>{if(a.ok)return a[r.bodyMethod]()}).then(a=>{t?r.done.call(a,a,t):r.done.call(a,a),t&&(r.autoresize||r.autoreposition)&&R.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const i=r.split(" "),n=Object.assign({},{width:i[0],height:i[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const i=Object.assign({},r);t.autoresize&&e.resize(i),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const i=document.createElement("div"),n=e.parentElement;i.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(i.style.width=r+"px",i.style.height=r+"px"):t==="ct"||t==="cb"?i.style.height=r+"px":(t==="lc"||t==="rc")&&(i.style.width=r+"px"),n!==document.body&&(i.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(i)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",i,n){if(typeof t=="function"&&(t=[t]),r)return t[r](a=>a.call(e,e,i,n));t.forEach(a=>a.call(e,e,i,n))},resetZi(){this.zi=((e=R.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=R.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){R.zi||(R.zi=((h=R.ziBase)=>{let w=h;return{next:()=>w++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${R.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let h=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;R.errorpanel(h)}return!1}let i=this.pOcontainer(e.container);if(typeof i=="object"&&i.length&&i.length>0&&(i=i[0]),!i)return this.errorReporting&&R.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(h=>{e[h]?typeof e[h]=="function"&&(e[h]=[e[h]]):e[h]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const a=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),f=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),m=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),$=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),S=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),k=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),O=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),B=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),q=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),Z=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),de=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),fe=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),be=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),Ie=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),ne=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[a,c,f,m,$,S,k,O,B,q,Z,de,fe,be].forEach(h=>h.panel=n);const ie=n.querySelector(".jsPanel-btn-close"),ye=n.querySelector(".jsPanel-btn-maximize"),Te=n.querySelector(".jsPanel-btn-normalize"),vt=n.querySelector(".jsPanel-btn-smallify"),Rt=n.querySelector(".jsPanel-btn-minimize");ie&&R.pointerup.forEach(h=>{ie.addEventListener(h,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.close(null,!0)})}),ye&&R.pointerup.forEach(h=>{ye.addEventListener(h,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.maximize()})}),Te&&R.pointerup.forEach(h=>{Te.addEventListener(h,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.normalize()})}),vt&&R.pointerup.forEach(h=>{vt.addEventListener(h,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),Rt&&R.pointerup.forEach(h=>{Rt.addEventListener(h,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.minimize()})});let Xt=R.extensions;for(let h in Xt)Object.prototype.hasOwnProperty.call(Xt,h)&&(n[h]=Xt[h]);if(n.setBorder=h=>{let w=R.pOborder(h);return w[2].length||(w[2]=n.style.backgroundColor),w=w.join(" "),n.style.border=w,n.options.border=w,n},n.setBorderRadius=h=>{typeof h=="string"&&(h.startsWith("--")||h.startsWith("var"))&&(h=h.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),h=R.getCssVariableValue(h)),typeof h=="number"&&(h+="px"),n.style.borderRadius=h;const w=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=w.borderTopLeftRadius,n.header.style.borderTopRightRadius=w.borderTopRightRadius):(n.content.style.borderTopLeftRadius=w.borderTopLeftRadius,n.content.style.borderTopRightRadius=w.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=w.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=w.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=w.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=w.borderBottomLeftRadius),n},n.setTheme=(h=e.theme,w)=>{let T;if(n.status==="minimized"&&(T=!0,n.normalize()),R.clearTheme(n),typeof h=="object")e.border=void 0,R.applyCustomTheme(n,h);else if(typeof h=="string"){h==="none"&&(h="white");let b=R.getThemeDetails(h);R.applyColorTheme(n,b)}return T&&n.minimize(),w&&w.call(n,n),n},n.remove=(h,w,T)=>{n.parentElement.removeChild(n),document.getElementById(h)?T&&T.call(n,h,n):(n.removeMinimizedReplacement(),n.status="closed",w&&document.dispatchEvent(ne),document.dispatchEvent(Ie),n.options.onclosed&&R.processCallbacks(n,n.options.onclosed,"every",w),R.autopositionRemaining(n),T&&T.call(h,h)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(h,w)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(be),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!R.processCallbacks(n,n.options.onbeforeclose,"some",n.status,w))return n;n.options.animateOut?(n.options.animateIn&&R.remClass(n,n.options.animateIn),R.setClass(n,n.options.animateOut),n.addEventListener("animationend",T=>{T.stopPropagation(),n.remove(n.id,w,h)})):n.remove(n.id,w,h)}},n.maximize=(h,w)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!R.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent($);const T=n.parentElement,b=R.pOcontainment(e.maximizedMargin);return T===document.body?(n.style.width=document.documentElement.clientWidth-b[1]-b[3]+"px",n.style.height=document.documentElement.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"):(n.style.width=T.clientWidth-b[1]-b[3]+"px",n.style.height=T.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"),vt.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),w||n.front(),document.dispatchEvent(S),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),h&&h.call(n,n,n.statusBefore),e.onmaximized&&R.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=h=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!R.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(k),!document.getElementById("jsPanel-replacement-container")){const w=document.createElement("div");w.id="jsPanel-replacement-container",document.body.append(w)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(O),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let w=n.createMinimizedReplacement(),T,b,x;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(w);break;case"parentpanel":b=n.closest(".jsPanel-content").parentElement,x=b.querySelectorAll(".jsPanel-minimized-box"),T=x[x.length-1],T.append(w);break;case"parent":b=n.parentElement,T=b.querySelector(".jsPanel-minimized-container"),T||(T=document.createElement("div"),T.className="jsPanel-minimized-container",b.append(T)),T.append(w);break;default:document.querySelector(e.minimizeTo).append(w)}}return h&&h.call(n,n,n.statusBefore),e.onminimized&&R.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=h=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!R.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(f),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),vt.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),h&&h.call(n,n,n.statusBefore),e.onnormalized&&R.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=h=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!R.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(B),n.style.overflow="hidden";const w=window.getComputedStyle(n),T=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(w.borderTopWidth)+parseFloat(w.borderBottomWidth)+T+"px",vt.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(q),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(Z),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const b=n.querySelectorAll(".jsPanel-minimized-box");return b[b.length-1].style.display="none",h&&h.call(n,n,n.statusBefore),e.onsmallified&&R.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=h=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!R.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(de),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),vt.style.transform="rotate(0deg)";const w=n.querySelectorAll(".jsPanel-minimized-box");w[w.length-1].style.display="flex",h&&h.call(n,n,n.statusBefore),e.onunsmallified&&R.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(h,w=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const T=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(b=>b.style.zIndex);Math.max(...T)>n.style.zIndex&&(n.style.zIndex=R.zi.next()),R.resetZi()}return document.dispatchEvent(fe),h&&h.call(n,n),e.onfronted&&w&&R.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(h,w=!1)=>{if(w||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),h&&typeof h=="function"&&!w)h.call(n,n,n.snappableTo);else if(h!==!1){let T=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const b=R.pOcontainment(n.options.dragit.containment),x=n.snappableTo;x.startsWith("left")?T[0]=b[3]:x.startsWith("right")&&(T[0]=-b[1]),x.endsWith("top")?T[1]=b[0]:x.endsWith("bottom")&&(T[1]=-b[2])}n.reposition(`${n.snappableTo} ${T[0]} ${T[1]}`)}w||(n.snapped=n.snappableTo)},n.move=(h,w)=>{let T=n.overlaps(h,"paddingbox"),b=n.parentElement;return h.appendChild(n),n.options.container=h,n.style.left=T.left+"px",n.style.top=T.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),w&&w.call(n,n,h,b),n},n.closeChildpanels=h=>(n.getChildpanels().forEach(w=>w.close()),h&&h.call(n,n),n),n.getChildpanels=h=>{const w=n.content.querySelectorAll(".jsPanel");return h&&w.forEach((T,b,x)=>{h.call(T,T,b,x)}),w},n.isChildpanel=h=>{const w=n.closest(".jsPanel-content"),T=w?w.parentElement:null;return h&&h.call(n,n,T),w?T:!1},n.contentRemove=h=>(R.emptyNode(n.content),h&&h.call(n,n),n),n.createMinimizedReplacement=()=>{const h=R.createMinimizedTemplate(),w=window.getComputedStyle(n.headertitle).color,T=window.getComputedStyle(n),b=e.iconfont,x=h.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?R.setStyles(h,{backgroundColor:T.backgroundColor,backgroundPositionX:T.backgroundPositionX,backgroundPositionY:T.backgroundPositionY,backgroundRepeat:T.backgroundRepeat,backgroundAttachment:T.backgroundAttachment,backgroundImage:T.backgroundImage,backgroundSize:T.backgroundSize,backgroundOrigin:T.backgroundOrigin,backgroundClip:T.backgroundClip}):h.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,h.id=n.id+"-min",h.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),h.querySelector(".jsPanel-headerlogo")),h.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),h.querySelector(".jsPanel-title")),h.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),h.querySelector(".jsPanel-title").style.color=w,x.style.color=w,x.querySelectorAll("button").forEach(ae=>ae.style.color=w),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(ae=>{n.header.classList.contains(ae)&&h.querySelector(".jsPanel-hdr").classList.add(ae)}),n.setIconfont(b,h),n.dataset.btnnormalize==="enabled"?R.pointerup.forEach(ae=>{h.querySelector(".jsPanel-btn-normalize").addEventListener(ae,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;n.normalize()})}):x.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?R.pointerup.forEach(ae=>{h.querySelector(".jsPanel-btn-maximize").addEventListener(ae,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;n.maximize()})}):x.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?R.pointerup.forEach(ae=>{h.querySelector(".jsPanel-btn-close").addEventListener(ae,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;n.close(null,!0)})}):x.querySelector(".jsPanel-btn-close").style.display="none",h},n.removeMinimizedReplacement=()=>{const h=document.getElementById(`${n.id}-min`);h&&h.parentElement.removeChild(h)},n.drag=(h={})=>{let w,T,b;const x=new CustomEvent("jspaneldragstart",{detail:n.id}),ae=new CustomEvent("jspaneldrag",{detail:n.id}),ue=new CustomEvent("jspaneldragstop",{detail:n.id});[x,ae,ue].forEach(Me=>Me.panel=n);const N=Me=>{let Oe=Me.split("-");return Oe.forEach((xe,_e)=>{Oe[_e]=xe.charAt(0).toUpperCase()+xe.slice(1)}),"snap"+Oe.join("")};function K(Me){Me.relatedTarget===null&&R.pointermove.forEach(Oe=>{document.removeEventListener(Oe,T,!1),n.style.opacity=1})}let He=h.handles||R.defaults.dragit.handles,rt=h.cursor||R.defaults.dragit.cursor;function Ut(Me){if(R.pointermove.forEach(Oe=>document.removeEventListener(Oe,T)),R.removeSnapAreas(),w){if(n.style.opacity=1,w=void 0,b.snap){switch(n.snappableTo){case"left-top":n.snap(b.snap.snapLeftTop);break;case"center-top":n.snap(b.snap.snapCenterTop);break;case"right-top":n.snap(b.snap.snapRightTop);break;case"right-center":n.snap(b.snap.snapRightCenter);break;case"right-bottom":n.snap(b.snap.snapRightBottom);break;case"center-bottom":n.snap(b.snap.snapCenterBottom);break;case"left-bottom":n.snap(b.snap.snapLeftBottom);break;case"left-center":n.snap(b.snap.snapLeftCenter);break}b.snap.callback&&n.snappableTo&&typeof b.snap.callback=="function"&&(b.snap.callback.call(n,n),b.snap.repositionOnSnap&&b.snap[N(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&b.snap.repositionOnSnap&&b.snap[N(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Oe=n.parentElement;n.move(n.droppableTo),b.drop.callback&&b.drop.callback.call(n,n,n.droppableTo,Oe)}if(document.dispatchEvent(ue),b.stop.length){let Oe=window.getComputedStyle(n),xe={left:parseFloat(Oe.left),top:parseFloat(Oe.top),width:parseFloat(Oe.width),height:parseFloat(Oe.height)};R.processCallbacks(n,b.stop,!1,xe,Me)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Oe=>Oe.style.pointerEvents="auto"),document.removeEventListener(Me,Ut)}return n.querySelectorAll(He).forEach(Me=>{Me.style.touchAction="none",Me.style.cursor=rt,R.pointerdown.forEach(Oe=>{Me.addEventListener(Oe,xe=>{if(xe.button&&xe.button>0||(b=Object.assign({},R.defaults.dragit,h),b.disableOnMaximized&&n.status==="maximized"))return!1;if((b.containment||b.containment===0)&&(b.containment=R.pOcontainment(b.containment)),b.grid&&Array.isArray(b.grid)&&b.grid.length===1&&(b.grid[1]=b.grid[0]),b.snap&&(typeof b.snap=="object"?b.snap=Object.assign({},R.defaultSnapConfig,b.snap):b.snap=R.defaultSnapConfig),xe.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(Ge=>Ge.style.pointerEvents="none");let _e=window.getComputedStyle(n),Ke=parseFloat(_e.left),Ee=parseFloat(_e.top),ee=parseFloat(_e.width),Ve=parseFloat(_e.height),Re=xe.touches?xe.touches[0].clientX:xe.clientX,ce=xe.touches?xe.touches[0].clientY:xe.clientY,ge=n.parentElement,kt=ge.getBoundingClientRect(),oe=window.getComputedStyle(ge),Ye=n.getScaleFactor(),sn=0,zt=R.getScrollbarWidth(ge);T=Ge=>{if(Ge.preventDefault(),!w){if(document.dispatchEvent(x),n.style.opacity=b.opacity,n.snapped&&b.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let re=n.getBoundingClientRect(),Se=Re-(re.left+re.width),he=re.width/2;Se>-he&&(sn=Se+he)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),b.drop&&b.drop.dropZones){let re=b.drop.dropZones.map(he=>R.pOcontainer(he)),Se=[];re.forEach(function(he){he.length?he.forEach(function(je){Se.push(je)}):Se.push(he)}),Se=Se.filter(function(he,je,Ue){return Ue.indexOf(he)===je}),b.drop.dropZones=Se}b.start.length&&R.processCallbacks(n,b.start,!1,{left:Ke,top:Ee,width:ee,height:Ve},Ge)}w=1;let Ct,De,Ne,yt,Qe,ke,$e,Et,qe,ht,it=Ge.touches?Ge.touches[0].clientX:Ge.clientX,Je=Ge.touches?Ge.touches[0].clientY:Ge.clientY,Le=window.getComputedStyle(n),le;if(ge===document.body){let re=n.getBoundingClientRect();qe=window.innerWidth-parseInt(oe.borderLeftWidth,10)-parseInt(oe.borderRightWidth,10)-(re.left+re.width),ht=window.innerHeight-parseInt(oe.borderTopWidth,10)-parseInt(oe.borderBottomWidth,10)-(re.top+re.height)}else qe=parseInt(oe.width,10)-parseInt(oe.borderLeftWidth,10)-parseInt(oe.borderRightWidth,10)-(parseInt(Le.left,10)+parseInt(Le.width,10)),ht=parseInt(oe.height,10)-parseInt(oe.borderTopWidth,10)-parseInt(oe.borderBottomWidth,10)-(parseInt(Le.top,10)+parseInt(Le.height,10));Ct=parseFloat(Le.left),Ne=parseFloat(Le.top),Qe=qe,$e=ht,b.snap&&(b.snap.trigger==="panel"?(De=Ct**2,yt=Ne**2,ke=Qe**2,Et=$e**2):b.snap.trigger==="pointer"&&(n.options.container==="window"?(Ct=it,Ne=Je,Qe=window.innerWidth-it,$e=window.innerHeight-Je,De=it**2,yt=Ne**2,ke=Qe**2,Et=$e**2):(le=n.overlaps(ge,"paddingbox",Ge),Ct=le.pointer.left,Ne=le.pointer.top,Qe=le.pointer.right,$e=le.pointer.bottom,De=le.pointer.left**2,yt=le.pointer.top**2,ke=le.pointer.right**2,Et=le.pointer.bottom**2)));let Xe=Math.sqrt(De+yt),Y=Math.sqrt(De+Et),Ze=Math.sqrt(ke+yt),lt=Math.sqrt(ke+Et),xt=Math.abs(Ct-Qe)/2,X=Math.abs(Ne-$e)/2,Wt=Math.sqrt(De+X**2),Gt=Math.sqrt(yt+xt**2),st=Math.sqrt(ke+X**2),on=Math.sqrt(Et+xt**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(ae),(!b.axis||b.axis==="x")&&(n.style.left=Ke+(it-Re)/Ye.x+sn+"px"),(!b.axis||b.axis==="y")&&(n.style.top=Ee+(Je-ce)/Ye.y+"px"),b.grid){let re=b.grid,Se=b.axis,he=re[0]*Math.round((Ke+(it-Re))/re[0]),je=re[1]*Math.round((Ee+(Je-ce))/re[1]);(!Se||Se==="x")&&(n.style.left=`${he}px`),(!Se||Se==="y")&&(n.style.top=`${je}px`)}if(b.containment||b.containment===0){let re=b.containment,Se,he;if(n.options.container==="window")Se=window.innerWidth-parseFloat(Le.width)-re[1]-zt.y,he=window.innerHeight-parseFloat(Le.height)-re[2]-zt.x;else{let je=parseFloat(oe.borderLeftWidth)+parseFloat(oe.borderRightWidth),Ue=parseFloat(oe.borderTopWidth)+parseFloat(oe.borderBottomWidth);Se=kt.width/Ye.x-parseFloat(Le.width)-re[1]-je-zt.y,he=kt.height/Ye.y-parseFloat(Le.height)-re[2]-Ue-zt.x}parseFloat(n.style.left)<=re[3]&&(n.style.left=re[3]+"px"),parseFloat(n.style.top)<=re[0]&&(n.style.top=re[0]+"px"),parseFloat(n.style.left)>=Se&&(n.style.left=Se+"px"),parseFloat(n.style.top)>=he&&(n.style.top=he+"px")}if(b.drag.length){let re={left:Ct,top:Ne,right:Qe,bottom:$e,width:parseFloat(Le.width),height:parseFloat(Le.height)};R.processCallbacks(n,b.drag,!1,re,Ge)}if(b.snap){let re=b.snap.sensitivity,Se=ge===document.body?window.innerWidth/8:kt.width/8,he=ge===document.body?window.innerHeight/8:kt.height/8;n.snappableTo=!1,R.removeSnapAreas(),Xe<re?b.snap.snapLeftTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-top",R.createSnapArea(n,"lt",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.left>0&&le.pointer.top>0?(n.snappableTo="left-top",R.createSnapArea(n,"lt",re)):(n.snappableTo=!1,R.removeSnapAreas()))):Y<re?b.snap.snapLeftBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-bottom",R.createSnapArea(n,"lb",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.left>0&&le.pointer.bottom>0?(n.snappableTo="left-bottom",R.createSnapArea(n,"lb",re)):(n.snappableTo=!1,R.removeSnapAreas()))):Ze<re?b.snap.snapRightTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-top",R.createSnapArea(n,"rt",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.right>0&&le.pointer.top>0?(n.snappableTo="right-top",R.createSnapArea(n,"rt",re)):(n.snappableTo=!1,R.removeSnapAreas()))):lt<re?b.snap.snapRightBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-bottom",R.createSnapArea(n,"rb",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.right>0&&le.pointer.bottom>0?(n.snappableTo="right-bottom",R.createSnapArea(n,"rb",re)):(n.snappableTo=!1,R.removeSnapAreas()))):Ne<re&&Gt<Se?b.snap.snapCenterTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-top",R.createSnapArea(n,"ct",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.top>0?(n.snappableTo="center-top",R.createSnapArea(n,"ct",re)):(n.snappableTo=!1,R.removeSnapAreas()))):Ct<re&&Wt<he?b.snap.snapLeftCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-center",R.createSnapArea(n,"lc",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.left>0?(n.snappableTo="left-center",R.createSnapArea(n,"lc",re)):(n.snappableTo=!1,R.removeSnapAreas()))):Qe<re&&st<he?b.snap.snapRightCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-center",R.createSnapArea(n,"rc",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.right>0?(n.snappableTo="right-center",R.createSnapArea(n,"rc",re)):(n.snappableTo=!1,R.removeSnapAreas()))):$e<re&&on<Se&&b.snap.snapCenterBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-bottom",R.createSnapArea(n,"cb",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.bottom>0?(n.snappableTo="center-bottom",R.createSnapArea(n,"cb",re)):(n.snappableTo=!1,R.removeSnapAreas())))}if(b.drop&&b.drop.dropZones){let re=R.isIE?"msElementsFromPoint":"elementsFromPoint",Se=document[re](Ge.clientX,Ge.clientY);Array.isArray(Se)||(Se=Array.prototype.slice.call(Se)),b.drop.dropZones.forEach(he=>{Se.includes(he)&&(n.droppableTo=he)}),Se.includes(n.droppableTo)||(n.droppableTo=!1)}},R.pointermove.forEach(Ge=>document.addEventListener(Ge,T)),window.addEventListener("mouseout",K,!1)})}),R.pointerup.forEach(Oe=>{document.addEventListener(Oe,Ut),window.removeEventListener("mouseout",K)}),h.disable&&(Me.style.pointerEvents="none")}),n},n.dragit=h=>{const w=Object.assign({},R.defaults.dragit,e.dragit),T=n.querySelectorAll(w.handles);return h==="disable"?T.forEach(b=>b.style.pointerEvents="none"):T.forEach(b=>b.style.pointerEvents="auto"),n},n.sizeit=(h={})=>{const w=new CustomEvent("jspanelresizestart",{detail:n.id}),T=new CustomEvent("jspanelresize",{detail:n.id}),b=new CustomEvent("jspanelresizestop",{detail:n.id});[w,T,b].forEach(xe=>xe.panel=n);let x={},ae,ue,N,K,He,rt;x.handles=h.handles||R.defaults.resizeit.handles,x.handles.split(",").forEach(xe=>{const _e=document.createElement("DIV");_e.className=`jsPanel-resizeit-handle jsPanel-resizeit-${xe.trim()}`,n.append(_e)});let Ut=h.aspectRatio?h.aspectRatio:!1;function Me(xe){xe.relatedTarget===null&&R.pointermove.forEach(_e=>document.removeEventListener(_e,ae,!1))}function Oe(xe){if(R.pointermove.forEach(_e=>document.removeEventListener(_e,ae,!1)),xe.target.classList&&xe.target.classList.contains("jsPanel-resizeit-handle")){let _e,Ke,Ee=xe.target.className;if(Ee.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(_e=!0),Ee.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Ke=!0),x.grid&&Array.isArray(x.grid)){x.grid.length===1&&(x.grid[1]=x.grid[0]);const ee=parseFloat(n.style.width),Ve=parseFloat(n.style.height),Re=ee%x.grid[0],ce=Ve%x.grid[1],ge=parseFloat(n.style.left),kt=parseFloat(n.style.top),oe=ge%x.grid[0],Ye=kt%x.grid[1];Re<x.grid[0]/2?n.style.width=ee-Re+"px":n.style.width=ee+(x.grid[0]-Re)+"px",ce<x.grid[1]/2?n.style.height=Ve-ce+"px":n.style.height=Ve+(x.grid[1]-ce)+"px",_e&&(oe<x.grid[0]/2?n.style.left=ge-oe+"px":n.style.left=ge+(x.grid[0]-oe)+"px"),Ke&&(Ye<x.grid[1]/2?n.style.top=kt-Ye+"px":n.style.top=kt+(x.grid[1]-Ye)+"px")}}if(ue){n.content.style.pointerEvents="inherit",ue=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let _e=n.controlbar.querySelector(".jsPanel-btn-smallify"),Ke=n.getBoundingClientRect();if(_e&&Ke.height>rt+5&&(_e.style.transform="rotate(0deg)"),document.dispatchEvent(b),x.stop.length){let Ee=window.getComputedStyle(n),ee={left:parseFloat(Ee.left),top:parseFloat(Ee.top),width:parseFloat(Ee.width),height:parseFloat(Ee.height)};R.processCallbacks(n,x.stop,!1,ee,xe)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(_e=>_e.style.pointerEvents="auto"),x.aspectRatio=Ut,document.removeEventListener(xe,Oe)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(xe=>{xe.style.touchAction="none",R.pointerdown.forEach(_e=>{xe.addEventListener(_e,Ke=>{if(Ke.preventDefault(),Ke.stopPropagation(),Ke.button&&Ke.button>0)return!1;let Ee=1;if(x=Object.assign({},R.defaults.resizeit,h),(x.containment||x.containment===0)&&(x.containment=R.pOcontainment(x.containment)),x.aspectRatio&&x.aspectRatio===!0&&(x.aspectRatio="panel"),R.modifier){let he=R.modifier;he.altKey?x.aspectRatio="content":he.ctrlKey?x.aspectRatio="panel":he.shiftKey&&(x.aspectRatio=!1,Ee=2)}let ee=typeof x.maxWidth=="function"?x.maxWidth():x.maxWidth||1e4,Ve=typeof x.maxHeight=="function"?x.maxHeight():x.maxHeight||1e4,Re=typeof x.minWidth=="function"?x.minWidth():x.minWidth,ce=typeof x.minHeight=="function"?x.minHeight():x.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(he=>he.style.pointerEvents="none");const ge=n.parentElement,kt=ge.tagName.toLowerCase(),oe=n.getBoundingClientRect(),Ye=ge.getBoundingClientRect(),sn=window.getComputedStyle(ge,null),zt=parseInt(sn.borderLeftWidth,10),Ge=parseInt(sn.borderTopWidth,10),Ct=sn.getPropertyValue("position"),De=Ke.clientX||Ke.clientX===0||Ke.touches[0].clientX,Ne=Ke.clientY||Ke.clientY===0||Ke.touches[0].clientY,yt=De/Ne,Qe=Ke.target.classList,ke=n.getScaleFactor(),$e=oe.width/oe.height,Et=n.content.getBoundingClientRect(),qe=Et.width/Et.height,ht=n.header.getBoundingClientRect().height,it=n.footer.getBoundingClientRect().height||0;let Je=oe.left,Le=oe.top,le=1e4,Xe=1e4,Y=1e4,Ze=1e4;He=oe.width,rt=oe.height,kt!=="body"&&(Je=oe.left-Ye.left+ge.scrollLeft,Le=oe.top-Ye.top+ge.scrollTop),kt==="body"&&x.containment?(le=document.documentElement.clientWidth-oe.left,Y=document.documentElement.clientHeight-oe.top,Xe=oe.width+oe.left,Ze=oe.height+oe.top):x.containment&&(Ct==="static"?(le=Ye.width-oe.left+zt,Y=Ye.height+Ye.top-oe.top+Ge,Xe=oe.width+(oe.left-Ye.left)-zt,Ze=oe.height+(oe.top-Ye.top)-Ge):(le=ge.clientWidth-(oe.left-Ye.left)/ke.x+zt,Y=ge.clientHeight-(oe.top-Ye.top)/ke.y+Ge,Xe=(oe.width+oe.left-Ye.left)/ke.x-zt,Ze=n.clientHeight+(oe.top-Ye.top)/ke.y-Ge)),x.containment&&(Xe-=x.containment[3],Ze-=x.containment[0],le-=x.containment[1],Y-=x.containment[2]);const lt=window.getComputedStyle(n),xt=parseFloat(lt.width)-oe.width,X=parseFloat(lt.height)-oe.height;let Wt=parseFloat(lt.left)-oe.left,Gt=parseFloat(lt.top)-oe.top;ge!==document.body&&(Wt+=Ye.left,Gt+=Ye.top);let st=parseInt(lt.borderTopWidth,10),on=parseInt(lt.borderRightWidth,10),re=parseInt(lt.borderBottomWidth,10),Se=parseInt(lt.borderLeftWidth,10);ae=he=>{he.preventDefault(),ue||(document.dispatchEvent(w),x.start.length&&R.processCallbacks(n,x.start,!1,{width:He,height:rt,left:Je,top:Le},he),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),oe.height>rt+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),ue=1,document.dispatchEvent(T);let je=he.touches?he.touches[0].clientX:he.clientX,Ue=he.touches?he.touches[0].clientY:he.clientY,Pe;Qe.contains("jsPanel-resizeit-e")?(N=He+(je-De)*Ee/ke.x+xt,N>=le&&(N=le),N>=ee&&(N=ee),N<=Re&&(N=Re),n.style.width=N+"px",Ee===2&&(n.style.left=Je-(je-De)+"px"),x.aspectRatio==="content"?(n.style.height=(N-on-Se)/qe+ht+it+st+re+"px",x.containment&&(Pe=n.overlaps(ge),Pe.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*qe+"px"))):x.aspectRatio==="panel"&&(n.style.height=N/$e+"px",x.containment&&(Pe=n.overlaps(ge),Pe.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*$e+"px")))):Qe.contains("jsPanel-resizeit-s")?(K=rt+(Ue-Ne)*Ee/ke.y+X,K>=Y&&(K=Y),K>=Ve&&(K=Ve),K<=ce&&(K=ce),n.style.height=K+"px",Ee===2&&(n.style.top=Le-(Ue-Ne)+"px"),x.aspectRatio==="content"?(n.style.width=(K-ht-it-st-re)*qe+st+re+"px",x.containment&&(Pe=n.overlaps(ge),Pe.right<=x.containment[1]&&(n.style.width=le+"px",n.style.height=le/qe+"px"))):x.aspectRatio==="panel"&&(n.style.width=K*$e+"px",x.containment&&(Pe=n.overlaps(ge),Pe.right<=x.containment[1]&&(n.style.width=le+"px",n.style.height=le/$e+"px")))):Qe.contains("jsPanel-resizeit-w")?(N=He+(De-je)*Ee/ke.x+xt,N<=ee&&N>=Re&&N<=Xe&&(n.style.left=Je+(je-De)/ke.x+Wt+"px"),N>=Xe&&(N=Xe),N>=ee&&(N=ee),N<=Re&&(N=Re),n.style.width=N+"px",x.aspectRatio==="content"?(n.style.height=(N-on-Se)/qe+ht+it+st+re+"px",x.containment&&(Pe=n.overlaps(ge),Pe.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*qe+"px"))):x.aspectRatio==="panel"&&(n.style.height=N/$e+"px",x.containment&&(Pe=n.overlaps(ge),Pe.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*$e+"px")))):Qe.contains("jsPanel-resizeit-n")?(K=rt+(Ne-Ue)*Ee/ke.y+X,K<=Ve&&K>=ce&&K<=Ze&&(n.style.top=Le+(Ue-Ne)/ke.y+Gt+"px"),K>=Ze&&(K=Ze),K>=Ve&&(K=Ve),K<=ce&&(K=ce),n.style.height=K+"px",x.aspectRatio==="content"?(n.style.width=(K-ht-it-st-re)*qe+st+re+"px",x.containment&&(Pe=n.overlaps(ge),Pe.right<=x.containment[1]&&(n.style.width=le+"px",n.style.height=le/qe+"px"))):x.aspectRatio==="panel"&&(n.style.width=K*$e+"px",x.containment&&(Pe=n.overlaps(ge),Pe.right<=x.containment[1]&&(n.style.width=le+"px",n.style.height=le/$e+"px")))):Qe.contains("jsPanel-resizeit-se")?(N=He+(je-De)*Ee/ke.x+xt,N>=le&&(N=le),N>=ee&&(N=ee),N<=Re&&(N=Re),n.style.width=N+"px",Ee===2&&(n.style.left=Je-(je-De)+"px"),x.aspectRatio&&(n.style.height=N/$e+"px"),K=rt+(Ue-Ne)*Ee/ke.y+X,K>=Y&&(K=Y),K>=Ve&&(K=Ve),K<=ce&&(K=ce),n.style.height=K+"px",Ee===2&&(n.style.top=Le-(Ue-Ne)+"px"),x.aspectRatio==="content"?(n.style.width=(K-ht-it-st-re)*qe+st+re+"px",x.containment&&(Pe=n.overlaps(ge),Pe.right<=x.containment[1]&&(n.style.width=le+"px",n.style.height=le/qe+"px"))):x.aspectRatio==="panel"&&(n.style.width=K*$e+"px",x.containment&&(Pe=n.overlaps(ge),Pe.right<=x.containment[1]&&(n.style.width=le+"px",n.style.height=le/$e+"px")))):Qe.contains("jsPanel-resizeit-sw")?(K=rt+(Ue-Ne)*Ee/ke.y+X,K>=Y&&(K=Y),K>=Ve&&(K=Ve),K<=ce&&(K=ce),n.style.height=K+"px",Ee===2&&(n.style.top=Le-(Ue-Ne)+"px"),x.aspectRatio&&(n.style.width=K*$e+"px"),N=He+(De-je)*Ee/ke.x+xt,N<=ee&&N>=Re&&N<=Xe&&(n.style.left=Je+(je-De)/ke.x+Wt+"px"),N>=Xe&&(N=Xe),N>=ee&&(N=ee),N<=Re&&(N=Re),n.style.width=N+"px",x.aspectRatio==="content"?(n.style.height=(N-on-Se)/qe+ht+it+st+re+"px",x.containment&&(Pe=n.overlaps(ge),Pe.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*qe+"px"))):x.aspectRatio==="panel"&&(n.style.height=N/$e+"px",x.containment&&(Pe=n.overlaps(ge),Pe.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*$e+"px")))):Qe.contains("jsPanel-resizeit-ne")?(N=He+(je-De)*Ee/ke.x+xt,N>=le&&(N=le),N>=ee&&(N=ee),N<=Re&&(N=Re),n.style.width=N+"px",Ee===2&&(n.style.left=Je-(je-De)+"px"),x.aspectRatio&&(n.style.height=N/$e+"px"),K=rt+(Ne-Ue)*Ee/ke.y+X,K<=Ve&&K>=ce&&K<=Ze&&(n.style.top=Le+(Ue-Ne)/ke.y+Gt+"px"),K>=Ze&&(K=Ze),K>=Ve&&(K=Ve),K<=ce&&(K=ce),n.style.height=K+"px",x.aspectRatio==="content"?(n.style.width=(K-ht-it-st-re)*qe+st+re+"px",x.containment&&(Pe=n.overlaps(ge),Pe.right<=x.containment[1]&&(n.style.width=le+"px",n.style.height=le/qe+"px"))):x.aspectRatio==="panel"&&(n.style.width=K*$e+"px",x.containment&&(Pe=n.overlaps(ge),Pe.right<=x.containment[1]&&(n.style.width=le+"px",n.style.height=le/$e+"px")))):Qe.contains("jsPanel-resizeit-nw")&&(x.aspectRatio&&Qe.contains("jsPanel-resizeit-nw")&&(je=Ue*yt,Ue=je/yt),N=He+(De-je)*Ee/ke.x+xt,N<=ee&&N>=Re&&N<=Xe&&(n.style.left=Je+(je-De)/ke.x+Wt+"px"),N>=Xe&&(N=Xe),N>=ee&&(N=ee),N<=Re&&(N=Re),n.style.width=N+"px",x.aspectRatio&&(n.style.height=N/$e+"px"),K=rt+(Ne-Ue)*Ee/ke.y+X,K<=Ve&&K>=ce&&K<=Ze&&(n.style.top=Le+(Ue-Ne)/ke.y+Gt+"px"),K>=Ze&&(K=Ze),K>=Ve&&(K=Ve),K<=ce&&(K=ce),n.style.height=K+"px",x.aspectRatio==="content"?n.style.width=(K-ht-it-st-re)*qe+st+re+"px":x.aspectRatio==="panel"&&(n.style.width=K*$e+"px")),window.getSelection().removeAllRanges();const It=window.getComputedStyle(n),Be={left:parseFloat(It.left),top:parseFloat(It.top),right:parseFloat(It.right),bottom:parseFloat(It.bottom),width:parseFloat(It.width),height:parseFloat(It.height)};x.resize.length&&R.processCallbacks(n,x.resize,!1,Be,he)},R.pointermove.forEach(he=>document.addEventListener(he,ae,!1)),window.addEventListener("mouseout",Me,!1)})}),R.pointerup.forEach(function(_e){document.addEventListener(_e,Oe),window.removeEventListener("mouseout",Me)}),h.disable&&(xe.style.pointerEvents="none")}),n},n.resizeit=h=>{const w=n.querySelectorAll(".jsPanel-resizeit-handle");return h==="disable"?w.forEach(T=>T.style.pointerEvents="none"):w.forEach(T=>T.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const h=n.getBoundingClientRect();return{x:h.width/n.offsetWidth,y:h.height/n.offsetHeight}},n.calcSizeFactors=()=>{const h=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(h.left)/(window.innerWidth-parseFloat(h.width)),n.vf=parseFloat(h.top)/(window.innerHeight-parseFloat(h.height));else if(n.parentElement){let w=n.parentElement.getBoundingClientRect();n.hf=parseFloat(h.left)/(w.width-parseFloat(h.width)),n.vf=parseFloat(h.top)/(w.height-parseFloat(h.height))}},n.saveCurrentDimensions=()=>{const h=window.getComputedStyle(n);n.currentData.width=h.width,n.currentData.height=h.height},n.saveCurrentPosition=()=>{const h=window.getComputedStyle(n);n.currentData.left=h.left,n.currentData.top=h.top},n.reposition=(...h)=>{let w=e.position,T=!0,b;return h.forEach(x=>{typeof x=="string"||typeof x=="object"?w=x:typeof x=="boolean"?T=x:typeof x=="function"&&(b=x)}),R.position(n,w),n.slaves&&n.slaves.size>0&&n.slaves.forEach(x=>x.reposition()),T&&n.saveCurrentPosition(),b&&b.call(n,n),n},n.repositionOnSnap=h=>{let w="0",T="0",b=R.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(h){case"left-top":w=b[3],T=b[0];break;case"right-top":w=-b[1],T=b[0];break;case"right-bottom":w=-b[1],T=-b[2];break;case"left-bottom":w=b[3],T=-b[2];break;case"center-top":w=b[3]/2-b[1]/2,T=b[0];break;case"center-bottom":w=b[3]/2-b[1]/2,T=-b[2];break;case"left-center":w=b[3],T=b[0]/2-b[2]/2;break;case"right-center":w=-b[1],T=b[0]/2-b[2]/2;break}R.position(n,h),R.setStyles(n,{left:`calc(${n.style.left} + ${w}px)`,top:`calc(${n.style.top} + ${T}px)`})},n.overlaps=(h,w,T)=>{let b=n.getBoundingClientRect(),x=getComputedStyle(n.parentElement),ae=n.getScaleFactor(),ue={top:0,right:0,bottom:0,left:0},N,K=0,He=0,rt=0,Ut=0;n.options.container!=="window"&&w==="paddingbox"&&(ue.top=parseInt(x.borderTopWidth,10)*ae.y,ue.right=parseInt(x.borderRightWidth,10)*ae.x,ue.bottom=parseInt(x.borderBottomWidth,10)*ae.y,ue.left=parseInt(x.borderLeftWidth,10)*ae.x),typeof h=="string"?h==="window"?N={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:h==="parent"?N=n.parentElement.getBoundingClientRect():N=document.querySelector(h).getBoundingClientRect():N=h.getBoundingClientRect(),T&&(K=T.touches?T.touches[0].clientX:T.clientX,He=T.touches?T.touches[0].clientY:T.clientY,rt=K-N.left,Ut=He-N.top);let Me=b.left<N.right&&b.right>N.left,Oe=b.top<N.bottom&&b.bottom>N.top;return{overlaps:Me&&Oe,top:b.top-N.top-ue.top,right:N.right-b.right-ue.right,bottom:N.bottom-b.bottom-ue.bottom,left:b.left-N.left-ue.left,parentBorderWidth:ue,panelRect:b,referenceRect:N,pointer:{clientX:K,clientY:He,left:rt-ue.left,top:Ut-ue.top,right:N.width-rt-ue.right,bottom:N.height-Ut-ue.bottom}}},n.setSize=()=>{if(e.panelSize){const h=R.pOsize(n,e.panelSize);n.style.width=h.width,n.style.height=h.height}else if(e.contentSize){const h=R.pOsize(n,e.contentSize);n.content.style.width=h.width,n.content.style.height=h.height,n.style.width=h.width,n.content.style.width="100%"}return n},n.resize=(...h)=>{let w=window.getComputedStyle(n),T={width:w.width,height:w.height},b=!0,x;h.forEach(N=>{typeof N=="string"?T=N:typeof N=="object"?T=Object.assign(T,N):typeof N=="boolean"?b=N:typeof N=="function"&&(x=N)});let ae=R.pOsize(n,T);n.style.width=ae.width,n.style.height=ae.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(N=>N.reposition()),b&&n.saveCurrentDimensions(),n.status="normalized";let ue=n.controlbar.querySelector(".jsPanel-btn-smallify");return ue&&(ue.style.transform="rotate(0deg)"),x&&x.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=h=>{if(h.target===window){let w=n.status,T=e.onwindowresize,b,x;if(w==="maximized"&&T)n.maximize(!1,!0);else if(n.snapped&&w!=="minimized")n.snap(n.snapped,!0);else if(w==="normalized"||w==="smallified"||w==="maximized"){let ae=typeof T;ae==="boolean"?(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",x=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=x<=0?0:x+"px"):ae==="function"?T.call(n,h,n):ae==="object"&&(T.preset===!0&&(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",x=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=x<=0?0:x+"px"),T.callback.call(n,h,n))}else w==="smallifiedmax"&&T&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(ae=>ae.reposition())}},n.setControls=(h,w)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(T=>{const b=T.className.split("-"),x=b[b.length-1];n.getAttribute(`data-btn${x}`)!=="hidden"&&(T.style.display="block")}),h.forEach(T=>{const b=n.controlbar.querySelector(T);b&&(b.style.display="none")}),w&&w.call(n,n),n),n.setControlStatus=(h,w="enable",T)=>{const b=n.controlbar.querySelector(`.jsPanel-btn-${h}`);switch(w){case"disable":n.getAttribute(`data-btn${h}`)!=="removed"&&(n.setAttribute(`data-btn${h}`,"disabled"),b.style.pointerEvents="none",b.style.opacity=.4,b.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${h}`)!=="removed"&&(n.setAttribute(`data-btn${h}`,"hidden"),b.style.display="none");break;case"show":n.getAttribute(`data-btn${h}`)!=="removed"&&(n.setAttribute(`data-btn${h}`,"enabled"),b.style.display="block",b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${h}`)!=="removed"&&(n.getAttribute(`data-btn${h}`)==="hidden"&&(b.style.display="block"),n.setAttribute(`data-btn${h}`,"enabled"),b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(b),n.setAttribute(`data-btn${h}`,"removed");break}return T&&T.call(n,n),n},n.setControlSize=h=>{const w=h.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(b=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(x=>b.classList.remove(x)),b.classList.add(`jsPanel-btn-${w}`)}),w==="xl"?n.titlebar.style.fontSize="1.5rem":w==="lg"?n.titlebar.style.fontSize="1.25rem":w==="md"?n.titlebar.style.fontSize="1.05rem":w==="sm"?n.titlebar.style.fontSize=".9rem":w==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=h=>{if(n.options.headerControls.add){let x=n.options.headerControls.add;Array.isArray(x)||(x=[x]),x.forEach(ae=>n.addControl(ae))}let w=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(x=>{let ae=x.className.match(/jsPanel-btn-[a-z\d]{3,}/i),ue=ae[0].substring(12);w.push(ue)});const b=R.pOheaderControls(e.headerControls);return e.headerControls=b,w.forEach(x=>{b[x]&&n.setControlStatus(x,b[x])}),n.setControlSize(b.size),h&&h.call(n,n),n},n.setHeaderLogo=(h,w)=>{let T=[n.headerlogo],b=document.querySelector("#"+n.id+"-min");return b&&T.push(b.querySelector(".jsPanel-headerlogo")),typeof h=="string"?h.startsWith("<")?T.forEach(x=>x.innerHTML=h):T.forEach(x=>{R.emptyNode(x);let ae=document.createElement("img");ae.src=h,x.append(ae)}):T.forEach(x=>{R.emptyNode(x),x.append(h)}),n.headerlogo.childNodes.forEach(x=>{x.nodeName&&x.nodeName==="IMG"&&x.setAttribute("draggable","false")}),w&&w.call(n,n),n},n.setHeaderRemove=h=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(w=>n.setAttribute(`data-btn${w}`,"removed")),h&&h.call(n,n),n),n.setHeaderTitle=(h,w)=>{let T=[n.headertitle],b=document.querySelector("#"+n.id+"-min");return b&&T.push(b.querySelector(".jsPanel-title")),typeof h=="string"?T.forEach(x=>x.innerHTML=h):typeof h=="function"?T.forEach(x=>{R.emptyNode(x),x.innerHTML=h()}):T.forEach(x=>{R.emptyNode(x),x.append(h)}),w&&w.call(n,n),n},n.setIconfont=(h,w=n,T)=>{if(h){let b,x;if(h==="fa"||h==="far"||h==="fal"||h==="fas"||h==="fad")b=[`${h} fa-window-close`,`${h} fa-window-maximize`,`${h} fa-window-restore`,`${h} fa-window-minimize`,`${h} fa-chevron-up`];else if(h==="material-icons")b=[h,h,h,h,h,h],x=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(h))b=[`custom-control-icon ${h[4]}`,`custom-control-icon ${h[3]}`,`custom-control-icon ${h[2]}`,`custom-control-icon ${h[1]}`,`custom-control-icon ${h[0]}`];else if(h==="bootstrap"||h==="glyphicon")b=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return w;w.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(ae=>R.emptyNode(ae).innerHTML="<span></span>"),Array.prototype.slice.call(w.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((ae,ue)=>{ae.className=b[ue],h==="material-icons"&&(ae.textContent=x[ue])})}return T&&T.call(w,w),w},n.addToolbar=(h,w,T)=>{if(h==="header"?h=n.headertoolbar:h==="footer"&&(h=n.footer),typeof w=="string")h.innerHTML=w;else if(Array.isArray(w))w.forEach(b=>{typeof b=="string"?h.innerHTML+=b:h.append(b)});else if(typeof w=="function"){let b=w.call(n,n);typeof b=="string"?h.innerHTML=b:h.append(b)}else h.append(w);return h.classList.add("active"),T&&T.call(n,n),n},n.addCloseControl=()=>{let h=document.createElement("button"),w=n.content.style.color;return h.classList.add("jsPanel-addCloseCtrl"),h.innerHTML=R.icons.close,h.style.color=w,n.options.rtl&&h.classList.add("rtl"),n.appendChild(h),R.pointerup.forEach(T=>{h.addEventListener(T,b=>{if(b.preventDefault(),b.button&&b.button>0)return!1;n.close(null,!0)})}),R.pointerdown.forEach(T=>{h.addEventListener(T,b=>b.preventDefault())}),n},n.addControl=h=>{if(!h.html)return n;h.position||(h.position=1);const w=n.controlbar.querySelectorAll(".jsPanel-btn").length;let T=document.createElement("button");T.innerHTML=h.html,T.className=`jsPanel-btn jsPanel-btn-${h.name} jsPanel-btn-${e.headerControls.size}`,T.style.color=n.header.style.color,h.position>w?n.controlbar.append(T):n.controlbar.insertBefore(T,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${h.position})`));const b=h.ariaLabel||h.name;return b&&T.setAttribute("aria-label",b),R.pointerup.forEach(x=>{T.addEventListener(x,ae=>{if(ae.preventDefault(),ae.button&&ae.button>0)return!1;h.handler.call(n,n,T)})}),h.afterInsert&&h.afterInsert.call(T,T),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(h=>{h.dir="rtl",e.rtl.lang&&(h.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),i.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),R.isIE){let h=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":h.forEach(w=>{w.style.height="34px"});break;case"xs":h.forEach(w=>{w.style.height="26px"});break;case"sm":h.forEach(w=>{w.style.height="30px"});break;case"lg":h.forEach(w=>{w.style.height="38px"});break;case"xl":h.forEach(w=>{w.style.height="42px"});break}}if(e.header==="auto-show-hide"){let h="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,h),this.setClass(n.content,h),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,R.setClass(n,h),R.remClass(n.content,h)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,R.remClass(n,h),R.setClass(n.content,h)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[h,w]of Object.entries(e.css))if(h==="panel")n.className+=` ${w}`;else{let T=n.querySelector(`.jsPanel-${h}`);T&&(T.className+=` ${w}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const h=e.contentOverflow.split(" ");h.length===1?n.content.style.overflow=h[0]:h.length===2&&(n.content.style.overflowX=h[0],n.content.style.overflowY=h[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let h=Object.assign({},R.defaultAutocloseConfig,e.autoclose);h.time&&typeof h.time=="number"&&(h.time+="ms");let w=n.progressbar.querySelector("div");w.addEventListener("animationend",T=>{T.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),h.progressbar&&(n.progressbar.classList.add("active"),h.background?R.colorNames[h.background]?n.progressbar.style.background="#"+R.colorNames[h.background]:n.progressbar.style.background=h.background:n.progressbar.classList.add("success-bg")),w.style.animation=`${h.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(m),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let h=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=h,e.dragit.snap===!0?(e.dragit.snap=R.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=h)}if(e.dragit?(["start","drag","stop"].forEach(h=>{e.dragit[h]?typeof e.dragit[h]=="function"&&(e.dragit[h]=[e.dragit[h]]):e.dragit[h]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",h=>{h.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(w=>{e.resizeit[w]?typeof e.resizeit[w]=="function"&&(e.resizeit[w]=[e.resizeit[w]]):e.resizeit[w]=[]}),n.sizeit(e.resizeit);let h;n.addEventListener("jspanelresizestart",w=>{w.panel===n&&(h=n.status)},!1),n.addEventListener("jspanelresizestop",w=>{w.panel===n&&(h==="smallified"||h==="smallifiedmax"||h==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(h=>{n.addEventListener(h,w=>{!w.target.closest(".jsPanel-btn-close")&&!w.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let h=e.onparentresize,w=typeof h,T=n.isChildpanel();if(T){const b=T.content;let x=[];n.parentResizeHandler=ae=>{if(ae.panel===T){x[0]=b.offsetWidth,x[1]=b.offsetHeight;let ue=n.status,N,K;ue==="maximized"&&h?n.maximize():n.snapped&&ue!=="minimized"?n.snap(n.snapped,!0):ue==="normalized"||ue==="smallified"||ue==="maximized"?w==="function"?h.call(n,n,{width:x[0],height:x[1]}):w==="object"&&h.preset===!0?(N=(x[0]-n.offsetWidth)*n.hf,n.style.left=N<=0?0:N+"px",K=(x[1]-n.offsetHeight)*n.vf,n.style.top=K<=0?0:K+"px",h.callback.call(n,n,{width:x[0],height:x[1]})):w==="boolean"&&(N=(x[0]-n.offsetWidth)*n.hf,n.style.left=N<=0?0:N+"px",K=(x[1]-n.offsetHeight)*n.vf,n.style.top=K<=0?0:K+"px"):ue==="smallifiedmax"&&h&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(h=>h.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(h=>h.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(h=>h.call(n,n)):t.call(n,n)),document.dispatchEvent(a),n}};const Gd=.25,Qd=4;function Jd(e){return Math.min(Qd,Math.max(Gd,e))}function yo(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const Ir={x:0,y:0,scale:1};function wo(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Zd(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function ef(e,t){let r={...Ir};t.style.transformOrigin="0 0";const i=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`};let n="none",a={...Ir},c=0,f=0,m=0,$=0,S=0,k=0;const O=(h,w)=>{const T=e.getBoundingClientRect();return{x:h-T.left,y:w-T.top}},B=h=>{if(h.touches.length===2){n="pinch",a={...r};const[w,T]=[h.touches[0],h.touches[1]];m=wo(w,T)||1;const b=O((w.clientX+T.clientX)/2,(w.clientY+T.clientY)/2);$=(b.x-r.x)/r.scale,S=(b.y-r.y)/r.scale,h.preventDefault();return}if(h.touches.length===1&&!Zd(h.target)){const w=h.timeStamp;if(w-k<300){r={...Ir},i(),k=0,n="none",h.preventDefault();return}k=w,n="pan",a={...r},c=h.touches[0].clientX,f=h.touches[0].clientY}else n="none"},q=h=>{if(n==="pan"&&h.touches.length===1){const w=h.touches[0];r=yo(a,w.clientX-c,w.clientY-f),i(),h.preventDefault()}else if(n==="pinch"&&h.touches.length>=2){const[w,T]=[h.touches[0],h.touches[1]],b=Jd(a.scale*(wo(w,T)/m)),x=O((w.clientX+T.clientX)/2,(w.clientY+T.clientY)/2);r={x:x.x-$*b,y:x.y-S*b,scale:b},i(),h.preventDefault()}},Z=h=>{h.touches.length===0?n="none":h.touches.length===1&&n==="pinch"&&(n="pan",a={...r},c=h.touches[0].clientX,f=h.touches[0].clientY)};let de=!1,fe={...Ir},be=0,Ie=0,ne=!1;const ie=(h,w)=>{const T=e.getBoundingClientRect();return h>=T.left&&h<=T.right&&w>=T.top&&w<=T.bottom},ye=h=>{if(!de)return;const w=h.clientX-be,T=h.clientY-Ie;!ne&&Math.hypot(w,T)<4||(ne=!0,document.body.style.cursor="grabbing",r=yo(fe,w,T),i(),h.preventDefault())},Te=()=>{de&&(de=!1,document.body.style.cursor="",window.removeEventListener("mousemove",ye,!0),window.removeEventListener("mouseup",vt,!0))};function vt(){Te()}const Rt=h=>{h.button===2&&ie(h.clientX,h.clientY)&&(de=!0,ne=!1,fe={...r},be=h.clientX,Ie=h.clientY,window.addEventListener("mousemove",ye,!0),window.addEventListener("mouseup",vt,!0))},Xt=h=>{ne&&(h.preventDefault(),ne=!1)};return e.addEventListener("touchstart",B,{passive:!1}),e.addEventListener("touchmove",q,{passive:!1}),e.addEventListener("touchend",Z),e.addEventListener("touchcancel",Z),window.addEventListener("mousedown",Rt,!0),window.addEventListener("contextmenu",Xt,!0),()=>{e.removeEventListener("touchstart",B),e.removeEventListener("touchmove",q),e.removeEventListener("touchend",Z),e.removeEventListener("touchcancel",Z),window.removeEventListener("mousedown",Rt,!0),window.removeEventListener("contextmenu",Xt,!0),Te()}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pa=Symbol.for(""),tf=e=>{if(e?.r===pa)return e?._$litStatic$},nf=e=>({_$litStatic$:e,r:pa}),vo=new Map,rf=e=>(t,...r)=>{const i=r.length;let n,a;const c=[],f=[];let m,$=0,S=!1;for(;$<i;){for(m=t[$];$<i&&(a=r[$],(n=tf(a))!==void 0);)m+=n+t[++$],S=!0;$!==i&&f.push(a),c.push(m),$++}if($===i&&c.push(t[i]),S){const k=c.join("$$lit$$");(t=vo.get(k))===void 0&&(c.raw=c,vo.set(k,t=c)),r=f}return e(t,...r)},sf=rf(U);var of=Object.defineProperty,af=Object.getOwnPropertyDescriptor,ni=(e,t,r,i)=>{for(var n=i>1?void 0:i?af(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&of(t,r,n),n};let Bt=class extends nt{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r){return this.values=t,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(i=>{this.resolveFn=i,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),Bt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Bt.instance===this&&(Bt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(r=>r.value.toLowerCase().includes(e));return U`
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
    `}};Bt.instance=null;Bt.styles=[nn,at`
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
    `];ni([tn({type:Array})],Bt.prototype,"values",2);ni([tn({type:String})],Bt.prototype,"current",2);ni([J()],Bt.prototype,"search",2);Bt=ni([dt("filter-popover")],Bt);var lf=Object.defineProperty,cf=Object.getOwnPropertyDescriptor,qt=(e,t,r,i)=>{for(var n=i>1?void 0:i?cf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&lf(t,r,n),n};let Dt=class extends nt{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const i of this.options)if(i.toLowerCase().includes(t)&&(r.push(i),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return U`
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
            </button>`:ze}
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
          </ul>`:ze}
    `}};Dt.styles=at`
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
  `;qt([tn({type:String})],Dt.prototype,"value",2);qt([tn({type:Array})],Dt.prototype,"options",2);qt([tn({type:String})],Dt.prototype,"placeholder",2);qt([J()],Dt.prototype,"open",2);qt([J()],Dt.prototype,"highlightIdx",2);qt([J()],Dt.prototype,"dropTop",2);qt([J()],Dt.prototype,"dropLeft",2);qt([J()],Dt.prototype,"dropMinWidth",2);qt([J()],Dt.prototype,"editing",2);qt([Un("input")],Dt.prototype,"inputEl",2);Dt=qt([dt("filter-combobox")],Dt);var uf=Object.defineProperty,df=Object.getOwnPropertyDescriptor,ft=(e,t,r,i)=>{for(var n=i>1?void 0:i?df(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&uf(t,r,n),n};const ff=200;let ot=class extends nt{constructor(){super(...arguments),this.tableId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;t.tableId===this.tableId&&(this.localQuery=t.query??"")}}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.()}async updated(e){e.has("tableId")&&this.tableId&&(this.unsubscribe?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells()}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",hf(t))}async bind(){if(!this.tableId)return;const e=await Fe(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const a=n.find(c=>c.id===this.tableId);a&&this.applyTable(a)}),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const i=window.setTimeout(()=>this.loading=!0,ff);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(i),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filters={...e.filters??{}}}async setCell(e,t,r){const i=await Fe();await this.commitCell(i,e,t,r)}async commitCell(e,t,r,i){const n=this.columns.find(a=>a.field===r);if(n){const a=pf(n,i,this.rows,t.id);if(a){await e.api.ui.dialogs.alert(a,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:i},updatedAt:Date.now()})}catch(a){await e.api.ui.dialogs.alert(a?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}renderCell(e,t){const r=e.data[t.field],i=t.renderer,n=i?this.cellRenderers?.get(i):void 0;if(n){const a=nf(n);return sf`<${a}
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
          .value=${mf(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"datetime":return U`<input
          type="datetime-local"
          .value=${gf(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"number":return U`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${a=>{const c=a.target.value;this.setCell(e,t.field,c===""?null:Number(c))}}
        />`;default:return U`<input
          type="text"
          .value=${String(r??"")}
          @change=${a=>this.setCell(e,t.field,a.target.value)}
        />`}}async deleteRow(e){const t=await Fe();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await Fe(),i=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};await r.store.tables.patch(this.tableId,i)}filteredRows(){const e=Object.entries(this.filters).filter(([,i])=>i&&i.trim().length>0),t=this.globalQuery.trim().toLowerCase(),r=this.localQuery.trim().toLowerCase();return e.length===0&&t.length===0&&r.length===0?this.rows:this.rows.filter(i=>{const n=a=>Object.values(i.data).some(c=>c!=null&&String(c).toLowerCase().includes(a));return t.length>0&&!n(t)||r.length>0&&!n(r)?!1:e.every(([a,c])=>String(i.data[a]??"").toLowerCase().includes(c.toLowerCase()))})}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,i=this.columns.find(c=>c.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,a=[...e];return a.sort((c,f)=>{const m=c.data[t],$=f.data[t],S=m==null||m==="",k=$==null||$==="";return S||k?S===k?0:S?1:-1:bf(m,$,i)*n}),a}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,i=Bt.instance;if(!i)return;const n=new Map;for(const f of this.rowsFacetedFor(t)){const m=f.data[t];if(m==null)continue;const $=String(m);n.set($,(n.get($)??0)+1)}const a=[...n.entries()].map(([f,m])=>({value:f,count:m})).sort((f,m)=>m.count-f.count||f.value.localeCompare(m.value)),c=await i.open(r.getBoundingClientRect(),a,this.filters[t]??"");c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>this.saveFilters(),250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,i])=>i&&i.trim().length>0&&r!==e).map(([r,i])=>[r,i.trim().toLowerCase()]);return t.length===0?this.rows:this.rows.filter(r=>t.every(([i,n])=>String(r.data[i]??"").toLowerCase().includes(n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,i=500;for(const n of this.visibleColumns){let a=!0;for(const f of t){const m=f.data[n.field];if(m==null)continue;if((typeof m=="string"?m:String(m)).length>=r){a=!1;break}}if(!a)continue;const c=new Set;for(const f of this.rowsFacetedFor(n.field)){const m=f.data[n.field];if(m==null||m==="")continue;const $=typeof m=="string"?m:String(m);if(!($.length>=r)&&(c.add($),c.size>=i))break}e.set(n.field,[...c].sort())}return e}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const i=r.offsetWidth;this.resizing={field:t,startX:e.clientX,startW:i};const n=c=>{if(!this.resizing)return;const f=c.clientX-this.resizing.startX,m=Math.max(40,this.resizing.startW+f);this.columns=this.columns.map($=>$.field===this.resizing.field?{...$,width:m}:$)},a=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",a);const c=this.resizing?.field;if(this.resizing=null,!c)return;await(await Fe()).store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",a)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientX<i.left+i.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,i=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!i)return;const n=[...this.columns],a=n.findIndex($=>$.field===r);if(a<0)return;const[c]=n.splice(a,1);let f=n.findIndex($=>$.field===t);if(f<0){n.splice(a,0,c);return}i==="after"&&(f+=1),n.splice(f,0,c),await(await Fe()).store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await Fe(),t={};for(const[i,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[i]=n);const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,i=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,i+r);return{slice:e.slice(i,n),topPad:i*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows(),t=this.visibleColumns,{slice:r,topPad:i,bottomPad:n}=this.virtualSlice(e),a=this.computeFilterSuggestions();return U`
      ${this.loading?U`<div class="load-bar" role="progressbar" aria-label="Loading rows">
            <div class="load-bar-fill"></div>
          </div>`:ze}
      <table>
        <colgroup>
          ${t.map(c=>U`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(c=>{const f=this.sortColumn===c.field&&this.sortDir,m=f==="asc"?"▲":f==="desc"?"▼":"⇅",$=`t-${c.type}`,S=this.dragSourceField===c.field,k=this.dropTargetField===c.field,O=k&&this.dropEdge==="before"?" drop-before":k&&this.dropEdge==="after"?" drop-after":"";return U`
                <th
                  class=${`${$}${f?" sorted":""}${S?" drag-source":""}${O}`}
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
            ${t.map(c=>{const f=a.get(c.field)??[];return U`
                <th>
                  <filter-combobox
                    .value=${this.filters[c.field]??""}
                    .options=${f}
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
                ${t.map(f=>U`<td class=${`t-${f.type}${f.renderer?` r-${f.renderer}`:""}`}>
                      ${this.renderCell(c,f)}
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
    `}};ot.styles=[nn,at`
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
    `];ft([tn({type:String})],ot.prototype,"tableId",2);ft([J()],ot.prototype,"columns",2);ft([J()],ot.prototype,"rows",2);ft([J()],ot.prototype,"sortColumn",2);ft([J()],ot.prototype,"sortDir",2);ft([J()],ot.prototype,"filters",2);ft([J()],ot.prototype,"globalQuery",2);ft([J()],ot.prototype,"localQuery",2);ft([J()],ot.prototype,"dragSourceField",2);ft([J()],ot.prototype,"dropTargetField",2);ft([J()],ot.prototype,"dropEdge",2);ft([J()],ot.prototype,"resizing",2);ft([J()],ot.prototype,"cellRenderers",2);ft([J()],ot.prototype,"scrollY",2);ft([J()],ot.prototype,"viewportHeight",2);ft([J()],ot.prototype,"loading",2);ot=ft([dt("data-table")],ot);function hf(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function pf(e,t,r,i){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(a=>a.id!==i&&a.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function mf(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function gf(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function bf(e,t,r){switch(r){case"number":{const i=Number(e),n=Number(t);return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const i=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}var yf=Object.defineProperty,wf=Object.getOwnPropertyDescriptor,cr=(e,t,r,i)=>{for(var n=i>1?void 0:i?wf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&yf(t,r,n),n};let Dn=class extends nt{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return U`<button
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
    />`}};Dn.styles=[nn,at`
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
    `];cr([tn({type:String})],Dn.prototype,"tableId",2);cr([J()],Dn.prototype,"query",2);cr([J()],Dn.prototype,"open",2);cr([Un("input")],Dn.prototype,"inputEl",2);Dn=cr([dt("panel-search")],Dn);var vf=Object.defineProperty,xf=Object.getOwnPropertyDescriptor,ur=(e,t,r,i)=>{for(var n=i>1?void 0:i?xf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&vf(t,r,n),n};let Tn=class extends nt{constructor(){super(...arguments),this.tableId="",this.rowCount=0,this.tableButtons=[],this.table=null}async connectedCallback(){super.connectedCallback();const e=await Fe();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]);const t=e.store.rows(this.tableId);this.unsubRows=t.subscribe(r=>this.rowCount=r.length),this.rowCount=(await t.find()).length,this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(r=>{this.table=r.find(i=>i.id===this.tableId)??null})}disconnectedCallback(){super.disconnectedCallback(),this.unsubRows?.(),this.unsubTables?.()}async addRow(){const e=await Fe(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const i of t.columns)r[i.field]=$f(i);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}async runTableButton(e){const t=await Fe();try{await Promise.resolve(e.onClick(t.api,{tableId:this.tableId}))}catch(r){console.error(`[table-button:${e.id}]`,r)}}render(){return U`
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
    `}};Tn.styles=[nn,at`
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
  `];ur([tn({type:String})],Tn.prototype,"tableId",2);ur([J()],Tn.prototype,"rowCount",2);ur([J()],Tn.prototype,"tableButtons",2);ur([J()],Tn.prototype,"table",2);Tn=ur([dt("panel-footer")],Tn);function $f(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function kf(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}const Sn=new Map,Mr=new Set,ma=new Set;let xo=!1;async function Cf(){if(xo)return;xo=!0;const e=await Fe(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");t&&r&&ef(t,r);const i=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);i.sort($o);for(const n of i)ko(n,e);e.store.tables.subscribe(n=>{const a=n.filter(m=>m.workspaceId===e.workspaceId),c=new Set(a.map(m=>m.id));for(const[m,$]of Sn)if(!c.has(m)){Sn.delete(m),Mr.add(m),ma.add(m);try{$.status!=="closed"&&$.close()}catch{}}const f=a.filter(m=>!Sn.has(m.id)).sort($o);for(const m of f)ko(m,e)})}function $o(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const Ef=200,Sf=100,_f=720,Pf=360;function Af(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<Ef||e.h<Sf?null:{...e}}function ko(e,t){const r=`panel-${ga(e.id)}`,i=document.createElement("data-table");i.tableId=e.id,i.style.height="100%";let n=i;const a=()=>{n?.remove(),n=null},c=()=>{if(n)return;const ne=document.getElementById(r)?.querySelector(".jsPanel-content");if(!ne)return;const ie=document.createElement("data-table");ie.tableId=e.id,ie.style.height="100%",ne.appendChild(ie),n=ie},f=document.createElement("panel-search");f.tableId=e.id;const m=document.createElement("panel-footer");m.tableId=e.id;const $=kf(),S=Af(e.windowGeometry),k=S?{my:"left-top",at:"left-top",offsetX:S.x,offsetY:S.y}:Tf(),O=S?{panelSize:`${S.w} ${S.h}`}:{contentSize:`${_f} ${Pf}`},B=R.create({id:r,container:$,headerTitle:e.name,footerToolbar:m,theme:"primary",content:i,...O,position:k,minimizeTo:"parent",dragit:{containment:!1,stop:()=>zi(e.id,t)},resizeit:{containment:!1,stop:()=>zi(e.id,t)},onfronted:()=>jf(e.id,t),onbeforeclose:()=>Mr.has(e.id)?!0:((async()=>await t.api.ui.dialogs.confirm(e.source?`Remove the live table "${e.name}"? Its data stays on the Datasette server.`:`Delete table "${e.name}" and all its rows?`,"Confirm")&&(Mr.add(e.id),Sn.get(e.id)?.close()))(),!1),onclosed:async()=>{Sn.delete(e.id),Mr.delete(e.id),!ma.delete(e.id)&&await Ff(e.id,t)},onstatuschange:ne=>{ne.status==="minimized"?a():(ne.status==="normalized"||ne.status==="maximized")&&c(),zi(e.id,t)}});Sn.set(e.id,B);const Z=document.getElementById(r)?.querySelector(".jsPanel-controlbar");Z&&Z.prepend(f),S?.maximized&&typeof B.maximize=="function"?queueMicrotask(()=>B.maximize?.()):S?.minimized&&typeof B.minimize=="function"&&queueMicrotask(()=>B.minimize?.());let de=e.name,fe=null;const be=ne=>{typeof B.setHeaderTitle=="function"&&B.setHeaderTitle(`${de} (${ne})`)};t.store.rows(e.id).find().then(ne=>be(ne.length)),fe=t.store.rows(e.id).subscribe(ne=>be(ne.length)),t.store.tables.subscribe(ne=>{const ie=ne.find(ye=>ye.id===e.id);ie&&ie.name!==de&&(de=ie.name)});const Ie=B.close.bind(B);B.close=()=>(fe?.(),Ie())}let Df=0;function Tf(){const e=Df++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function zi(e,t){const r=document.getElementById(`panel-${ga(e)}`);if(!r)return;const i=Sn.get(e)?.status??"normalized";try{const a=(await t.store.tables.findOne(e))?.windowGeometry,c=i==="minimized",f=i==="maximized";let m=r.offsetLeft,$=r.offsetTop,S=r.offsetWidth,k=r.offsetHeight;(c||f)&&a&&(m=a.x,$=a.y,S=a.w,k=a.h),m<=-9e3&&(m=a?.x??40);const O={x:m,y:$,w:S,h:k,z:a?.z??0,minimized:c,maximized:f};await t.store.tables.patch(e,{windowGeometry:O,updatedAt:Date.now()})}catch{}}async function jf(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const i=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...i,z:Date.now()},updatedAt:Date.now()})}catch{}}async function Ff(e,t){if(!(await t.store.tables.findOne(e))?.source){const i=t.store.rows(e),n=await i.find();await i.bulkRemove(n.map(a=>a.id))}await t.store.tables.remove(e)}function ga(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var Of=Object.defineProperty,Rf=Object.getOwnPropertyDescriptor,ba=(e,t,r,i)=>{for(var n=i>1?void 0:i?Rf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Of(t,r,n),n};let Kr=class extends nt{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await Fe();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(i=>i.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await Cf()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?U``:U`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on
      the page, or click <strong>+ New Table</strong> above.
    </div>`}};Kr.styles=at`
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
  `;ba([J()],Kr.prototype,"tables",2);Kr=ba([dt("table-list")],Kr);var zf=Object.defineProperty,If=Object.getOwnPropertyDescriptor,ss=(e,t,r,i)=>{for(var n=i>1?void 0:i?If(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&zf(t,r,n),n};let sr=class extends nt{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await Fe();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const i=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(i)}async addWorkspace(){const t=await(await Fe()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return U`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>U`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};sr.styles=[nn,at`
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
  `];ss([J()],sr.prototype,"workspaces",2);ss([J()],sr.prototype,"current",2);sr=ss([dt("workspace-selector")],sr);var Co=Object.freeze,ya=Object.defineProperty,Lf=Object.getOwnPropertyDescriptor,rn=(e,t,r,i)=>{for(var n=i>1?void 0:i?Lf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&ya(t,r,n),n},Bf=(e,t)=>Co(ya(e,"raw",{value:Co(e.slice())})),Eo;function Mf(e){return e?e.trimStart().startsWith("<svg")?U`<span class="icon-svg">${wl(e)}</span>`:U`<span class="mi sm">${e}</span>`:""}let Mt=class extends nt{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId)},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{So(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!So(e))return;e.preventDefault();const t=await Fe(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const i of[...t.registries.dropHandlers])try{if(await i(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=e=>{this.api&&Promise.resolve(e.onClick(this.api)).catch(t=>{console.error(`[footer-button:${e.id}]`,t)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager)}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await Fe();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e))}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){const r=t==="header"||e.variant==="primary"?"primary":"slot";return U`
      <button class=${r} title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
        ${Mf(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return U(Eo||(Eo=Bf([`
      <header>
        <strong>easyDBAccess <span class="version">v0.0.35</span></strong>
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
            </button>`,this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Mt.styles=[nn,at`
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
    `];rn([Un("new-table-dialog")],Mt.prototype,"dialog",2);rn([Un("csv-paste-dialog")],Mt.prototype,"csvPasteDialog",2);rn([Un("plugin-manager-dialog")],Mt.prototype,"pluginManagerDialog",2);rn([Un("input.search")],Mt.prototype,"searchInput",2);rn([J()],Mt.prototype,"footerButtons",2);rn([J()],Mt.prototype,"headerButtons",2);rn([J()],Mt.prototype,"searchQuery",2);rn([J()],Mt.prototype,"searchOpen",2);Mt=rn([dt("app-shell")],Mt);function So(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([Fe(),Wa(()=>Promise.resolve().then(()=>da),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});
//# sourceMappingURL=index-BrdGKPMe.js.map
