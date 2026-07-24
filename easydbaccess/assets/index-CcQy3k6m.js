(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const Ua="modulepreload",Wa=function(e){return"/easydbaccess/"+e},Ri={},Ha=function(t,r,s){let n=Promise.resolve();if(r&&r.length>0){let c=function($){return Promise.all($.map(S=>Promise.resolve(S).then(C=>({status:"fulfilled",value:C}),C=>({status:"rejected",reason:C}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),m=f?.nonce||f?.getAttribute("nonce");n=c(r.map($=>{if($=Wa($),$ in Ri)return;Ri[$]=!0;const S=$.endsWith(".css"),C=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${$}"]${C}`))return;const z=document.createElement("link");if(z.rel=S?"stylesheet":Ua,S||(z.as="script"),z.crossOrigin="",z.href=$,m&&z.setAttribute("nonce",m),document.head.appendChild(z),S)return new Promise((B,q)=>{z.addEventListener("load",B),z.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${$}`)))})}))}function a(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return n.then(c=>{for(const f of c||[])f.status==="rejected"&&a(f.reason);return t().catch(a)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lr=globalThis,Vs=Lr.ShadowRoot&&(Lr.ShadyCSS===void 0||Lr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ys=Symbol(),zi=new WeakMap;let Po=class{constructor(t,r,s){if(this._$cssResult$=!0,s!==Ys)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Vs&&t===void 0){const s=r!==void 0&&r.length===1;s&&(t=zi.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&zi.set(r,t))}return t}toString(){return this.cssText}};const Ka=e=>new Po(typeof e=="string"?e:e+"",void 0,Ys),at=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((s,n,a)=>s+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[a+1],e[0]);return new Po(r,e,Ys)},Va=(e,t)=>{if(Vs)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const s=document.createElement("style"),n=Lr.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=r.cssText,e.appendChild(s)}},Ii=Vs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return Ka(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ya,defineProperty:Xa,getOwnPropertyDescriptor:Ga,getOwnPropertyNames:Qa,getOwnPropertySymbols:Ja,getPrototypeOf:Za}=Object,Vr=globalThis,Li=Vr.trustedTypes,el=Li?Li.emptyScript:"",tl=Vr.reactiveElementPolyfillSupport,tr=(e,t)=>e,Nr={toAttribute(e,t){switch(t){case Boolean:e=e?el:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Xs=(e,t)=>!Ya(e,t),Bi={attribute:!0,type:String,converter:Nr,reflect:!1,useDefault:!1,hasChanged:Xs};Symbol.metadata??=Symbol("metadata"),Vr.litPropertyMetadata??=new WeakMap;let Mn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Bi){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(t,s,r);n!==void 0&&Xa(this.prototype,t,n)}}static getPropertyDescriptor(t,r,s){const{get:n,set:a}=Ga(this.prototype,t)??{get(){return this[r]},set(c){this[r]=c}};return{get:n,set(c){const f=n?.call(this);a?.call(this,c),this.requestUpdate(t,f,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Bi}static _$Ei(){if(this.hasOwnProperty(tr("elementProperties")))return;const t=Za(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(tr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(tr("properties"))){const r=this.properties,s=[...Qa(r),...Ja(r)];for(const n of s)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[s,n]of r)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[r,s]of this.elementProperties){const n=this._$Eu(r,s);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const n of s)r.unshift(Ii(n))}else t!==void 0&&r.push(Ii(t));return r}static _$Eu(t,r){const s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const s of r.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Va(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,s){this._$AK(t,s)}_$ET(t,r){const s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(n!==void 0&&s.reflect===!0){const a=(s.converter?.toAttribute!==void 0?s.converter:Nr).toAttribute(r,s.type);this._$Em=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,r){const s=this.constructor,n=s._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const a=s.getPropertyOptions(n),c=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Nr;this._$Em=n;const f=c.fromAttribute(r,a.type);this[n]=f??this._$Ej?.get(n)??f,this._$Em=null}}requestUpdate(t,r,s,n=!1,a){if(t!==void 0){const c=this.constructor;if(n===!1&&(a=this[t]),s??=c.getPropertyOptions(t),!((s.hasChanged??Xs)(a,r)||s.useDefault&&s.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(c._$Eu(t,s))))return;this.C(t,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:s,reflect:n,wrapped:a},c){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,c??r??this[t]),a!==!0||c!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s){const{wrapped:c}=a,f=this[n];c!==!0||this._$AL.has(n)||f===void 0||this.C(n,void 0,a,f)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(r)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Mn.elementStyles=[],Mn.shadowRootOptions={mode:"open"},Mn[tr("elementProperties")]=new Map,Mn[tr("finalized")]=new Map,tl?.({ReactiveElement:Mn}),(Vr.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gs=globalThis,Mi=e=>e,qr=Gs.trustedTypes,Ni=qr?qr.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ao="$lit$",hn=`lit$${Math.random().toFixed(9).slice(2)}$`,Do="?"+hn,nl=`<${Do}>`,Pn=document,nr=()=>Pn.createComment(""),rr=e=>e===null||typeof e!="object"&&typeof e!="function",Qs=Array.isArray,rl=e=>Qs(e)||typeof e?.[Symbol.iterator]=="function",Ts=`[ 	
\f\r]`,er=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qi=/-->/g,Ui=/>/g,Cn=RegExp(`>|${Ts}(?:([^\\s"'>=/]+)(${Ts}*=${Ts}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wi=/'/g,Hi=/"/g,To=/^(?:script|style|textarea|title)$/i,sl=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),H=sl(1),An=Symbol.for("lit-noChange"),Re=Symbol.for("lit-nothing"),Ki=new WeakMap,kn=Pn.createTreeWalker(Pn,129);function jo(e,t){if(!Qs(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ni!==void 0?Ni.createHTML(t):t}const il=(e,t)=>{const r=e.length-1,s=[];let n,a=t===2?"<svg>":t===3?"<math>":"",c=er;for(let f=0;f<r;f++){const m=e[f];let $,S,C=-1,z=0;for(;z<m.length&&(c.lastIndex=z,S=c.exec(m),S!==null);)z=c.lastIndex,c===er?S[1]==="!--"?c=qi:S[1]!==void 0?c=Ui:S[2]!==void 0?(To.test(S[2])&&(n=RegExp("</"+S[2],"g")),c=Cn):S[3]!==void 0&&(c=Cn):c===Cn?S[0]===">"?(c=n??er,C=-1):S[1]===void 0?C=-2:(C=c.lastIndex-S[2].length,$=S[1],c=S[3]===void 0?Cn:S[3]==='"'?Hi:Wi):c===Hi||c===Wi?c=Cn:c===qi||c===Ui?c=er:(c=Cn,n=void 0);const B=c===Cn&&e[f+1].startsWith("/>")?" ":"";a+=c===er?m+nl:C>=0?(s.push($),m.slice(0,C)+Ao+m.slice(C)+hn+B):m+hn+(C===-2?f:B)}return[jo(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class sr{constructor({strings:t,_$litType$:r},s){let n;this.parts=[];let a=0,c=0;const f=t.length-1,m=this.parts,[$,S]=il(t,r);if(this.el=sr.createElement($,s),kn.currentNode=this.el.content,r===2||r===3){const C=this.el.content.firstChild;C.replaceWith(...C.childNodes)}for(;(n=kn.nextNode())!==null&&m.length<f;){if(n.nodeType===1){if(n.hasAttributes())for(const C of n.getAttributeNames())if(C.endsWith(Ao)){const z=S[c++],B=n.getAttribute(C).split(hn),q=/([.?@])?(.*)/.exec(z);m.push({type:1,index:a,name:q[2],strings:B,ctor:q[1]==="."?al:q[1]==="?"?ll:q[1]==="@"?cl:Yr}),n.removeAttribute(C)}else C.startsWith(hn)&&(m.push({type:6,index:a}),n.removeAttribute(C));if(To.test(n.tagName)){const C=n.textContent.split(hn),z=C.length-1;if(z>0){n.textContent=qr?qr.emptyScript:"";for(let B=0;B<z;B++)n.append(C[B],nr()),kn.nextNode(),m.push({type:2,index:++a});n.append(C[z],nr())}}}else if(n.nodeType===8)if(n.data===Do)m.push({type:2,index:a});else{let C=-1;for(;(C=n.data.indexOf(hn,C+1))!==-1;)m.push({type:7,index:a}),C+=hn.length-1}a++}}static createElement(t,r){const s=Pn.createElement("template");return s.innerHTML=t,s}}function Nn(e,t,r=e,s){if(t===An)return t;let n=s!==void 0?r._$Co?.[s]:r._$Cl;const a=rr(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),a===void 0?n=void 0:(n=new a(e),n._$AT(e,r,s)),s!==void 0?(r._$Co??=[])[s]=n:r._$Cl=n),n!==void 0&&(t=Nn(e,n._$AS(e,t.values),n,s)),t}class ol{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:s}=this._$AD,n=(t?.creationScope??Pn).importNode(r,!0);kn.currentNode=n;let a=kn.nextNode(),c=0,f=0,m=s[0];for(;m!==void 0;){if(c===m.index){let $;m.type===2?$=new or(a,a.nextSibling,this,t):m.type===1?$=new m.ctor(a,m.name,m.strings,this,t):m.type===6&&($=new ul(a,this,t)),this._$AV.push($),m=s[++f]}c!==m?.index&&(a=kn.nextNode(),c++)}return kn.currentNode=Pn,n}p(t){let r=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,r),r+=s.strings.length-2):s._$AI(t[r])),r++}}class or{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,s,n){this.type=2,this._$AH=Re,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=s,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Nn(this,t,r),rr(t)?t===Re||t==null||t===""?(this._$AH!==Re&&this._$AR(),this._$AH=Re):t!==this._$AH&&t!==An&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):rl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Re&&rr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Pn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=sr.createElement(jo(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(r);else{const a=new ol(n,this),c=a.u(this.options);a.p(r),this.T(c),this._$AH=a}}_$AC(t){let r=Ki.get(t.strings);return r===void 0&&Ki.set(t.strings,r=new sr(t)),r}k(t){Qs(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,n=0;for(const a of t)n===r.length?r.push(s=new or(this.O(nr()),this.O(nr()),this,this.options)):s=r[n],s._$AI(a),n++;n<r.length&&(this._$AR(s&&s._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const s=Mi(t).nextSibling;Mi(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Yr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,s,n,a){this.type=1,this._$AH=Re,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Re}_$AI(t,r=this,s,n){const a=this.strings;let c=!1;if(a===void 0)t=Nn(this,t,r,0),c=!rr(t)||t!==this._$AH&&t!==An,c&&(this._$AH=t);else{const f=t;let m,$;for(t=a[0],m=0;m<a.length-1;m++)$=Nn(this,f[s+m],r,m),$===An&&($=this._$AH[m]),c||=!rr($)||$!==this._$AH[m],$===Re?t=Re:t!==Re&&(t+=($??"")+a[m+1]),this._$AH[m]=$}c&&!n&&this.j(t)}j(t){t===Re?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class al extends Yr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Re?void 0:t}}class ll extends Yr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Re)}}class cl extends Yr{constructor(t,r,s,n,a){super(t,r,s,n,a),this.type=5}_$AI(t,r=this){if((t=Nn(this,t,r,0)??Re)===An)return;const s=this._$AH,n=t===Re&&s!==Re||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==Re&&(s===Re||n);n&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ul{constructor(t,r,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Nn(this,t)}}const dl=Gs.litHtmlPolyfillSupport;dl?.(sr,or),(Gs.litHtmlVersions??=[]).push("3.3.3");const fl=(e,t,r)=>{const s=r?.renderBefore??t;let n=s._$litPart$;if(n===void 0){const a=r?.renderBefore??null;s._$litPart$=n=new or(t.insertBefore(nr(),a),a,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Js=globalThis;let nt=class extends Mn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=fl(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return An}};nt._$litElement$=!0,nt.finalized=!0,Js.litElementHydrateSupport?.({LitElement:nt});const hl=Js.litElementPolyfillSupport;hl?.({LitElement:nt});(Js.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pl={attribute:!0,type:String,converter:Nr,reflect:!1,hasChanged:Xs},ml=(e=pl,t,r)=>{const{kind:s,metadata:n}=r;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),s==="accessor"){const{name:c}=r;return{set(f){const m=t.get.call(this);t.set.call(this,f),this.requestUpdate(c,m,e,!0,f)},init(f){return f!==void 0&&this.C(c,void 0,e,f),f}}}if(s==="setter"){const{name:c}=r;return function(f){const m=this[c];t.call(this,f),this.requestUpdate(c,m,e,!0,f)}}throw Error("Unsupported decorator location: "+s)};function tn(e){return(t,r)=>typeof r=="object"?ml(e,t,r):((s,n,a)=>{const c=n.hasOwnProperty(a);return n.constructor.createProperty(a,s),c?Object.getOwnPropertyDescriptor(n,a):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function J(e){return tn({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gl=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Un(e,t){return(r,s,n)=>{const a=c=>c.renderRoot?.querySelector(e)??null;return gl(r,s,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bl={CHILD:2},yl=e=>(...t)=>({_$litDirective$:e,values:t});class wl{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,s){this._$Ct=t,this._$AM=r,this._$Ci=s}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Is extends wl{constructor(t){if(super(t),this.it=Re,t.type!==bl.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Re||t==null)return this._t=void 0,this.it=t;if(t===An)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Is.directiveName="unsafeHTML",Is.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ls extends Is{}Ls.directiveName="unsafeSVG",Ls.resultType=2;const vl=yl(Ls);var xl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Br={exports:{}},Cl=Br.exports,Vi;function El(){return Vi||(Vi=1,(function(e,t){(function(r,s){e.exports=s()})(Cl,function(){var r=function(i,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,u){l.__proto__=u}||function(l,u){for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(l[d]=u[d])})(i,o)},s=function(){return(s=Object.assign||function(i){for(var o,l=1,u=arguments.length;l<u;l++)for(var d in o=arguments[l])Object.prototype.hasOwnProperty.call(o,d)&&(i[d]=o[d]);return i}).apply(this,arguments)};function n(i,o,l){for(var u,d=0,p=o.length;d<p;d++)!u&&d in o||((u=u||Array.prototype.slice.call(o,0,d))[d]=o[d]);return i.concat(u||Array.prototype.slice.call(o))}var a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:xl,c=Object.keys,f=Array.isArray;function m(i,o){return typeof o!="object"||c(o).forEach(function(l){i[l]=o[l]}),i}typeof Promise>"u"||a.Promise||(a.Promise=Promise);var $=Object.getPrototypeOf,S={}.hasOwnProperty;function C(i,o){return S.call(i,o)}function z(i,o){typeof o=="function"&&(o=o($(i))),(typeof Reflect>"u"?c:Reflect.ownKeys)(o).forEach(function(l){q(i,l,o[l])})}var B=Object.defineProperty;function q(i,o,l,u){B(i,o,m(l&&C(l,"get")&&typeof l.get=="function"?{get:l.get,set:l.set,configurable:!0}:{value:l,configurable:!0,writable:!0},u))}function te(i){return{from:function(o){return i.prototype=Object.create(o.prototype),q(i.prototype,"constructor",i),{extend:z.bind(null,i.prototype)}}}}var oe=Object.getOwnPropertyDescriptor,fe=[].slice;function Se(i,o,l){return fe.call(i,o,l)}function Xe(i,o){return o(i)}function ne(i){if(!i)throw new Error("Assertion Failed")}function de(i){a.setImmediate?setImmediate(i):setTimeout(i,0)}function Ce(i,o){if(typeof o=="string"&&C(i,o))return i[o];if(!o)return i;if(typeof o!="string"){for(var l=[],u=0,d=o.length;u<d;++u){var p=Ce(i,o[u]);l.push(p)}return l}var g=o.indexOf(".");if(g!==-1){var y=i[o.substr(0,g)];return y==null?void 0:Ce(y,o.substr(g+1))}}function ze(i,o,l){if(i&&o!==void 0&&!("isFrozen"in Object&&Object.isFrozen(i)))if(typeof o!="string"&&"length"in o){ne(typeof l!="string"&&"length"in l);for(var u=0,d=o.length;u<d;++u)ze(i,o[u],l[u])}else{var p,g,y=o.indexOf(".");y!==-1?(p=o.substr(0,y),(g=o.substr(y+1))===""?l===void 0?f(i)&&!isNaN(parseInt(p))?i.splice(p,1):delete i[p]:i[p]=l:ze(y=!(y=i[p])||!C(i,p)?i[p]={}:y,g,l)):l===void 0?f(i)&&!isNaN(parseInt(o))?i.splice(o,1):delete i[o]:i[o]=l}}function vt(i){var o,l={};for(o in i)C(i,o)&&(l[o]=i[o]);return l}var Rt=[].concat;function Xt(i){return Rt.apply([],i)}var Jt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Xt([8,16,32,64].map(function(i){return["Int","Uint","Float"].map(function(o){return o+i+"Array"})}))).filter(function(i){return a[i]}),h=new Set(Jt.map(function(i){return a[i]})),w=null;function T(i){return w=new WeakMap,i=(function o(l){if(!l||typeof l!="object")return l;var u=w.get(l);if(u)return u;if(f(l)){u=[],w.set(l,u);for(var d=0,p=l.length;d<p;++d)u.push(o(l[d]))}else if(h.has(l.constructor))u=l;else{var g,y=$(l);for(g in u=y===Object.prototype?{}:Object.create(y),w.set(l,u),l)C(l,g)&&(u[g]=o(l[g]))}return u})(i),w=null,i}var b={}.toString;function x(i){return b.call(i).slice(8,-1)}var ae=typeof Symbol<"u"?Symbol.iterator:"@@iterator",ue=typeof ae=="symbol"?function(i){var o;return i!=null&&(o=i[ae])&&o.apply(i)}:function(){return null};function N(i,o){return o=i.indexOf(o),0<=o&&i.splice(o,1),0<=o}var K={};function We(i){var o,l,u,d;if(arguments.length===1){if(f(i))return i.slice();if(this===K&&typeof i=="string")return[i];if(d=ue(i)){for(l=[];!(u=d.next()).done;)l.push(u.value);return l}if(i==null)return[i];if(typeof(o=i.length)!="number")return[i];for(l=new Array(o);o--;)l[o]=i[o];return l}for(o=arguments.length,l=new Array(o);o--;)l[o]=arguments[o];return l}var rt=typeof Symbol<"u"?function(i){return i[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},xe=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Tt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(xe),Ut={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Be(i,o){this.name=i,this.message=o}function Fe(i,o){return i+". Errors: "+Object.keys(o).map(function(l){return o[l].toString()}).filter(function(l,u,d){return d.indexOf(l)===u}).join(`
`)}function we(i,o,l,u){this.failures=o,this.failedKeys=u,this.successCount=l,this.message=Fe(i,o)}function _e(i,o){this.name="BulkError",this.failures=Object.keys(o).map(function(l){return o[l]}),this.failuresByPos=o,this.message=Fe(i,this.failures)}te(Be).from(Error).extend({toString:function(){return this.name+": "+this.message}}),te(we).from(Be),te(_e).from(Be);var He=Tt.reduce(function(i,o){return i[o]=o+"Error",i},{}),Ee=Be,Z=Tt.reduce(function(i,o){var l=o+"Error";function u(d,p){this.name=l,d?typeof d=="string"?(this.message="".concat(d).concat(p?`
 `+p:""),this.inner=p||null):typeof d=="object"&&(this.message="".concat(d.name," ").concat(d.message),this.inner=d):(this.message=Ut[o]||l,this.inner=null)}return te(u).from(Ee),i[o]=u,i},{});Z.Syntax=SyntaxError,Z.Type=TypeError,Z.Range=RangeError;var Ke=xe.reduce(function(i,o){return i[o+"Error"]=Z[o],i},{}),Oe=Tt.reduce(function(i,o){return["Syntax","Type","Range"].indexOf(o)===-1&&(i[o+"Error"]=Z[o]),i},{});function ce(){}function ge(i){return i}function Ct(i,o){return i==null||i===ge?o:function(l){return o(i(l))}}function ie(i,o){return function(){i.apply(this,arguments),o.apply(this,arguments)}}function Ve(i,o){return i===ce?o:function(){var l=i.apply(this,arguments);l!==void 0&&(arguments[0]=l);var u=this.onsuccess,d=this.onerror;this.onsuccess=null,this.onerror=null;var p=o.apply(this,arguments);return u&&(this.onsuccess=this.onsuccess?ie(u,this.onsuccess):u),d&&(this.onerror=this.onerror?ie(d,this.onerror):d),p!==void 0?p:l}}function sn(i,o){return i===ce?o:function(){i.apply(this,arguments);var l=this.onsuccess,u=this.onerror;this.onsuccess=this.onerror=null,o.apply(this,arguments),l&&(this.onsuccess=this.onsuccess?ie(l,this.onsuccess):l),u&&(this.onerror=this.onerror?ie(u,this.onerror):u)}}function zt(i,o){return i===ce?o:function(l){var u=i.apply(this,arguments);m(l,u);var d=this.onsuccess,p=this.onerror;return this.onsuccess=null,this.onerror=null,l=o.apply(this,arguments),d&&(this.onsuccess=this.onsuccess?ie(d,this.onsuccess):d),p&&(this.onerror=this.onerror?ie(p,this.onerror):p),u===void 0?l===void 0?void 0:l:m(u,l)}}function Ge(i,o){return i===ce?o:function(){return o.apply(this,arguments)!==!1&&i.apply(this,arguments)}}function Et(i,o){return i===ce?o:function(){var l=i.apply(this,arguments);if(l&&typeof l.then=="function"){for(var u=this,d=arguments.length,p=new Array(d);d--;)p[d]=arguments[d];return l.then(function(){return o.apply(u,p)})}return o.apply(this,arguments)}}Oe.ModifyError=we,Oe.DexieError=Be,Oe.BulkError=_e;var De=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Me(i){De=i}var yt={},Qe=100,Jt=typeof Promise>"u"?[]:(function(){var i=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[i,$(i),i];var o=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[o,$(o),i]})(),xe=Jt[0],Tt=Jt[1],Jt=Jt[2],Tt=Tt&&Tt.then,ve=xe&&xe.constructor,kt=!!Jt,Ne=function(i,o){Ze.push([i,o]),st&&(queueMicrotask(he),st=!1)},ht=!0,st=!0,Je=[],Ie=[],le=ge,Ye={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ce,pgp:!1,env:{},finalize:ce},Y=Ye,Ze=[],lt=0,xt=[];function X(i){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var o=this._PSD=Y;if(typeof i!="function"){if(i!==yt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&it(this,this._value))}this._state=null,this._value=null,++o.ref,(function l(u,d){try{d(function(p){if(u._state===null){if(p===u)throw new TypeError("A promise cannot be resolved with itself.");var g=u._lib&&Te();p&&typeof p.then=="function"?l(u,function(y,E){p instanceof X?p._then(y,E):p.then(y,E)}):(u._state=!0,u._value=p,on(u)),g&&qe()}},it.bind(null,u))}catch(p){it(u,p)}})(this,i)}var Wt={get:function(){var i=Y,o=hr;function l(u,d){var p=this,g=!i.global&&(i!==Y||o!==hr),y=g&&!ln(),E=new X(function(_,D){re(p,new Gt(ai(u,i,g,y),ai(d,i,g,y),_,D,i))});return this._consoleTask&&(E._consoleTask=this._consoleTask),E}return l.prototype=yt,l},set:function(i){q(this,"then",i&&i.prototype===yt?Wt:{get:function(){return i},set:Wt.set})}};function Gt(i,o,l,u,d){this.onFulfilled=typeof i=="function"?i:null,this.onRejected=typeof o=="function"?o:null,this.resolve=l,this.reject=u,this.psd=d}function it(i,o){var l,u;Ie.push(o),i._state===null&&(l=i._lib&&Te(),o=le(o),i._state=!1,i._value=o,u=i,Je.some(function(d){return d._value===u._value})||Je.push(u),on(i),l&&qe())}function on(i){var o=i._listeners;i._listeners=[];for(var l=0,u=o.length;l<u;++l)re(i,o[l]);var d=i._PSD;--d.ref||d.finalize(),lt===0&&(++lt,Ne(function(){--lt==0&&Pe()},[]))}function re(i,o){if(i._state!==null){var l=i._state?o.onFulfilled:o.onRejected;if(l===null)return(i._state?o.resolve:o.reject)(i._value);++o.psd.ref,++lt,Ne(ke,[l,i,o])}else i._listeners.push(o)}function ke(i,o,l){try{var u,d=o._value;!o._state&&Ie.length&&(Ie=[]),u=De&&o._consoleTask?o._consoleTask.run(function(){return i(d)}):i(d),o._state||Ie.indexOf(d)!==-1||(function(p){for(var g=Je.length;g;)if(Je[--g]._value===p._value)return Je.splice(g,1)})(o),l.resolve(u)}catch(p){l.reject(p)}finally{--lt==0&&Pe(),--l.psd.ref||l.psd.finalize()}}function he(){bn(Ye,function(){Te()&&qe()})}function Te(){var i=ht;return st=ht=!1,i}function qe(){var i,o,l;do for(;0<Ze.length;)for(i=Ze,Ze=[],l=i.length,o=0;o<l;++o){var u=i[o];u[0].apply(null,u[1])}while(0<Ze.length);st=ht=!0}function Pe(){var i=Je;Je=[],i.forEach(function(u){u._PSD.onunhandled.call(null,u._value,u)});for(var o=xt.slice(0),l=o.length;l;)o[--l]()}function It(i){return new X(yt,!1,i)}function Le(i,o){var l=Y;return function(){var u=Te(),d=Y;try{return cn(l,!0),i.apply(this,arguments)}catch(p){o&&o(p)}finally{cn(d,!1),u&&qe()}}}z(X.prototype,{then:Wt,_then:function(i,o){re(this,new Gt(null,null,i,o,Y))},catch:function(i){if(arguments.length===1)return this.then(null,i);var o=i,l=arguments[1];return typeof o=="function"?this.then(null,function(u){return(u instanceof o?l:It)(u)}):this.then(null,function(u){return(u&&u.name===o?l:It)(u)})},finally:function(i){return this.then(function(o){return X.resolve(i()).then(function(){return o})},function(o){return X.resolve(i()).then(function(){return It(o)})})},timeout:function(i,o){var l=this;return i<1/0?new X(function(u,d){var p=setTimeout(function(){return d(new Z.Timeout(o))},i);l.then(u,d).finally(clearTimeout.bind(null,p))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&q(X.prototype,Symbol.toStringTag,"Dexie.Promise"),Ye.env=oi(),z(X,{all:function(){var i=We.apply(null,arguments).map(pr);return new X(function(o,l){i.length===0&&o([]);var u=i.length;i.forEach(function(d,p){return X.resolve(d).then(function(g){i[p]=g,--u||o(i)},l)})})},resolve:function(i){return i instanceof X?i:i&&typeof i.then=="function"?new X(function(o,l){i.then(o,l)}):new X(yt,!0,i)},reject:It,race:function(){var i=We.apply(null,arguments).map(pr);return new X(function(o,l){i.map(function(u){return X.resolve(u).then(o,l)})})},PSD:{get:function(){return Y},set:function(i){return Y=i}},totalEchoes:{get:function(){return hr}},newPSD:an,usePSD:bn,scheduler:{get:function(){return Ne},set:function(i){Ne=i}},rejectionMapper:{get:function(){return le},set:function(i){le=i}},follow:function(i,o){return new X(function(l,u){return an(function(d,p){var g=Y;g.unhandleds=[],g.onunhandled=p,g.finalize=ie(function(){var y,E=this;y=function(){E.unhandleds.length===0?d():p(E.unhandleds[0])},xt.push(function _(){y(),xt.splice(xt.indexOf(_),1)}),++lt,Ne(function(){--lt==0&&Pe()},[])},g.finalize),i()},o,l,u)})}}),ve&&(ve.allSettled&&q(X,"allSettled",function(){var i=We.apply(null,arguments).map(pr);return new X(function(o){i.length===0&&o([]);var l=i.length,u=new Array(l);i.forEach(function(d,p){return X.resolve(d).then(function(g){return u[p]={status:"fulfilled",value:g}},function(g){return u[p]={status:"rejected",reason:g}}).then(function(){return--l||o(u)})})})}),ve.any&&typeof AggregateError<"u"&&q(X,"any",function(){var i=We.apply(null,arguments).map(pr);return new X(function(o,l){i.length===0&&l(new AggregateError([]));var u=i.length,d=new Array(u);i.forEach(function(p,g){return X.resolve(p).then(function(y){return o(y)},function(y){d[g]=y,--u||l(new AggregateError(d))})})})}),ve.withResolvers&&(X.withResolvers=ve.withResolvers));var ct={awaits:0,echoes:0,id:0},va=0,dr=[],fr=0,hr=0,xa=0;function an(i,o,l,u){var d=Y,p=Object.create(d);return p.parent=d,p.ref=0,p.global=!1,p.id=++xa,Ye.env,p.env=kt?{Promise:X,PromiseProp:{value:X,configurable:!0,writable:!0},all:X.all,race:X.race,allSettled:X.allSettled,any:X.any,resolve:X.resolve,reject:X.reject}:{},o&&m(p,o),++d.ref,p.finalize=function(){--this.parent.ref||this.parent.finalize()},u=bn(p,i,l,u),p.ref===0&&p.finalize(),u}function Rn(){return ct.id||(ct.id=++va),++ct.awaits,ct.echoes+=Qe,ct.id}function ln(){return!!ct.awaits&&(--ct.awaits==0&&(ct.id=0),ct.echoes=ct.awaits*Qe,!0)}function pr(i){return ct.echoes&&i&&i.constructor===ve?(Rn(),i.then(function(o){return ln(),o},function(o){return ln(),et(o)})):i}function $a(){var i=dr[dr.length-1];dr.pop(),cn(i,!1)}function cn(i,o){var l,u=Y;(o?!ct.echoes||fr++&&i===Y:!fr||--fr&&i===Y)||queueMicrotask(o?function(d){++hr,ct.echoes&&--ct.echoes!=0||(ct.echoes=ct.awaits=ct.id=0),dr.push(Y),cn(d,!0)}.bind(null,i):$a),i!==Y&&(Y=i,u===Ye&&(Ye.env=oi()),kt&&(l=Ye.env.Promise,o=i.env,(u.global||i.global)&&(Object.defineProperty(a,"Promise",o.PromiseProp),l.all=o.all,l.race=o.race,l.resolve=o.resolve,l.reject=o.reject,o.allSettled&&(l.allSettled=o.allSettled),o.any&&(l.any=o.any))))}function oi(){var i=a.Promise;return kt?{Promise:i,PromiseProp:Object.getOwnPropertyDescriptor(a,"Promise"),all:i.all,race:i.race,allSettled:i.allSettled,any:i.any,resolve:i.resolve,reject:i.reject}:{}}function bn(i,o,l,u,d){var p=Y;try{return cn(i,!0),o(l,u,d)}finally{cn(p,!1)}}function ai(i,o,l,u){return typeof i!="function"?i:function(){var d=Y;l&&Rn(),cn(o,!0);try{return i.apply(this,arguments)}finally{cn(d,!1),u&&queueMicrotask(ln)}}}function rs(i){Promise===ve&&ct.echoes===0?fr===0?i():enqueueNativeMicroTask(i):setTimeout(i,0)}(""+Tt).indexOf("[native code]")===-1&&(Rn=ln=ce);var et=X.reject,yn="￿",Qt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",li="String expected.",zn=[],mr="__dbnames",ss="readonly",is="readwrite";function wn(i,o){return i?o?function(){return i.apply(this,arguments)&&o.apply(this,arguments)}:i:o}var ci={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function gr(i){return typeof i!="string"||/\./.test(i)?function(o){return o}:function(o){return o[i]===void 0&&i in o&&delete(o=T(o))[i],o}}function ui(){throw Z.Type()}function $e(i,o){try{var l=di(i),u=di(o);if(l!==u)return l==="Array"?1:u==="Array"?-1:l==="binary"?1:u==="binary"?-1:l==="string"?1:u==="string"?-1:l==="Date"?1:u!=="Date"?NaN:-1;switch(l){case"number":case"Date":case"string":return o<i?1:i<o?-1:0;case"binary":return(function(d,p){for(var g=d.length,y=p.length,E=g<y?g:y,_=0;_<E;++_)if(d[_]!==p[_])return d[_]<p[_]?-1:1;return g===y?0:g<y?-1:1})(fi(i),fi(o));case"Array":return(function(d,p){for(var g=d.length,y=p.length,E=g<y?g:y,_=0;_<E;++_){var D=$e(d[_],p[_]);if(D!==0)return D}return g===y?0:g<y?-1:1})(i,o)}}catch{}return NaN}function di(i){var o=typeof i;return o!="object"?o:ArrayBuffer.isView(i)?"binary":(i=x(i),i==="ArrayBuffer"?"binary":i)}function fi(i){return i instanceof Uint8Array?i:ArrayBuffer.isView(i)?new Uint8Array(i.buffer,i.byteOffset,i.byteLength):new Uint8Array(i)}var hi=(Ue.prototype._trans=function(i,o,l){var u=this._tx||Y.trans,d=this.name,p=De&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(i==="readonly"?"read":"write"," ").concat(this.name));function g(_,D,v){if(!v.schema[d])throw new Z.NotFound("Table "+d+" not part of transaction");return o(v.idbtrans,v)}var y=Te();try{var E=u&&u.db._novip===this.db._novip?u===Y.trans?u._promise(i,g,l):an(function(){return u._promise(i,g,l)},{trans:u,transless:Y.transless||Y}):(function _(D,v,F,k){if(D.idbdb&&(D._state.openComplete||Y.letThrough||D._vip)){var A=D._createTransaction(v,F,D._dbSchema);try{A.create(),D._state.PR1398_maxLoop=3}catch(j){return j.name===He.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return _(D,v,F,k)})):et(j)}return A._promise(v,function(j,P){return an(function(){return Y.trans=A,k(j,P,A)})}).then(function(j){if(v==="readwrite")try{A.idbtrans.commit()}catch{}return v==="readonly"?j:A._completion.then(function(){return j})})}if(D._state.openComplete)return et(new Z.DatabaseClosed(D._state.dbOpenError));if(!D._state.isBeingOpened){if(!D._state.autoOpen)return et(new Z.DatabaseClosed);D.open().catch(ce)}return D._state.dbReadyPromise.then(function(){return _(D,v,F,k)})})(this.db,i,[this.name],g);return p&&(E._consoleTask=p,E=E.catch(function(_){return console.trace(_),et(_)})),E}finally{y&&qe()}},Ue.prototype.get=function(i,o){var l=this;return i&&i.constructor===Object?this.where(i).first(o):i==null?et(new Z.Type("Invalid argument to Table.get()")):this._trans("readonly",function(u){return l.core.get({trans:u,key:i}).then(function(d){return l.hook.reading.fire(d)})}).then(o)},Ue.prototype.where=function(i){if(typeof i=="string")return new this.db.WhereClause(this,i);if(f(i))return new this.db.WhereClause(this,"[".concat(i.join("+"),"]"));var o=c(i);if(o.length===1)return this.where(o[0]).equals(i[o[0]]);var l=this.schema.indexes.concat(this.schema.primKey).filter(function(y){if(y.compound&&o.every(function(_){return 0<=y.keyPath.indexOf(_)})){for(var E=0;E<o.length;++E)if(o.indexOf(y.keyPath[E])===-1)return!1;return!0}return!1}).sort(function(y,E){return y.keyPath.length-E.keyPath.length})[0];if(l&&this.db._maxKey!==yn){var p=l.keyPath.slice(0,o.length);return this.where(p).equals(p.map(function(E){return i[E]}))}!l&&De&&console.warn("The query ".concat(JSON.stringify(i)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(o.join("+"),"]"));var u=this.schema.idxByName;function d(y,E){return $e(y,E)===0}var g=o.reduce(function(v,E){var _=v[0],D=v[1],v=u[E],F=i[E];return[_||v,_||!v?wn(D,v&&v.multi?function(k){return k=Ce(k,E),f(k)&&k.some(function(A){return d(F,A)})}:function(k){return d(F,Ce(k,E))}):D]},[null,null]),p=g[0],g=g[1];return p?this.where(p.name).equals(i[p.keyPath]).filter(g):l?this.filter(g):this.where(o).equals("")},Ue.prototype.filter=function(i){return this.toCollection().and(i)},Ue.prototype.count=function(i){return this.toCollection().count(i)},Ue.prototype.offset=function(i){return this.toCollection().offset(i)},Ue.prototype.limit=function(i){return this.toCollection().limit(i)},Ue.prototype.each=function(i){return this.toCollection().each(i)},Ue.prototype.toArray=function(i){return this.toCollection().toArray(i)},Ue.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ue.prototype.orderBy=function(i){return new this.db.Collection(new this.db.WhereClause(this,f(i)?"[".concat(i.join("+"),"]"):i))},Ue.prototype.reverse=function(){return this.toCollection().reverse()},Ue.prototype.mapToClass=function(i){var o,l=this.db,u=this.name;function d(){return o!==null&&o.apply(this,arguments)||this}(this.schema.mappedClass=i).prototype instanceof ui&&((function(E,_){if(typeof _!="function"&&_!==null)throw new TypeError("Class extends value "+String(_)+" is not a constructor or null");function D(){this.constructor=E}r(E,_),E.prototype=_===null?Object.create(_):(D.prototype=_.prototype,new D)})(d,o=i),Object.defineProperty(d.prototype,"db",{get:function(){return l},enumerable:!1,configurable:!0}),d.prototype.table=function(){return u},i=d);for(var p=new Set,g=i.prototype;g;g=$(g))Object.getOwnPropertyNames(g).forEach(function(E){return p.add(E)});function y(E){if(!E)return E;var _,D=Object.create(i.prototype);for(_ in E)if(!p.has(_))try{D[_]=E[_]}catch{}return D}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=y,this.hook("reading",y),i},Ue.prototype.defineClass=function(){return this.mapToClass(function(i){m(this,i)})},Ue.prototype.add=function(i,o){var l=this,u=this.schema.primKey,d=u.auto,p=u.keyPath,g=i;return p&&d&&(g=gr(p)(i)),this._trans("readwrite",function(y){return l.core.mutate({trans:y,type:"add",keys:o!=null?[o]:null,values:[g]})}).then(function(y){return y.numFailures?X.reject(y.failures[0]):y.lastResult}).then(function(y){if(p)try{ze(i,p,y)}catch{}return y})},Ue.prototype.update=function(i,o){return typeof i!="object"||f(i)?this.where(":id").equals(i).modify(o):(i=Ce(i,this.schema.primKey.keyPath),i===void 0?et(new Z.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(i).modify(o))},Ue.prototype.put=function(i,o){var l=this,u=this.schema.primKey,d=u.auto,p=u.keyPath,g=i;return p&&d&&(g=gr(p)(i)),this._trans("readwrite",function(y){return l.core.mutate({trans:y,type:"put",values:[g],keys:o!=null?[o]:null})}).then(function(y){return y.numFailures?X.reject(y.failures[0]):y.lastResult}).then(function(y){if(p)try{ze(i,p,y)}catch{}return y})},Ue.prototype.delete=function(i){var o=this;return this._trans("readwrite",function(l){return o.core.mutate({trans:l,type:"delete",keys:[i]})}).then(function(l){return l.numFailures?X.reject(l.failures[0]):void 0})},Ue.prototype.clear=function(){var i=this;return this._trans("readwrite",function(o){return i.core.mutate({trans:o,type:"deleteRange",range:ci})}).then(function(o){return o.numFailures?X.reject(o.failures[0]):void 0})},Ue.prototype.bulkGet=function(i){var o=this;return this._trans("readonly",function(l){return o.core.getMany({keys:i,trans:l}).then(function(u){return u.map(function(d){return o.hook.reading.fire(d)})})})},Ue.prototype.bulkAdd=function(i,o,l){var u=this,d=Array.isArray(o)?o:void 0,p=(l=l||(d?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(g){var _=u.schema.primKey,y=_.auto,_=_.keyPath;if(_&&d)throw new Z.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(d&&d.length!==i.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var E=i.length,_=_&&y?i.map(gr(_)):i;return u.core.mutate({trans:g,type:"add",keys:d,values:_,wantResults:p}).then(function(A){var v=A.numFailures,F=A.results,k=A.lastResult,A=A.failures;if(v===0)return p?F:k;throw new _e("".concat(u.name,".bulkAdd(): ").concat(v," of ").concat(E," operations failed"),A)})})},Ue.prototype.bulkPut=function(i,o,l){var u=this,d=Array.isArray(o)?o:void 0,p=(l=l||(d?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(g){var _=u.schema.primKey,y=_.auto,_=_.keyPath;if(_&&d)throw new Z.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(d&&d.length!==i.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var E=i.length,_=_&&y?i.map(gr(_)):i;return u.core.mutate({trans:g,type:"put",keys:d,values:_,wantResults:p}).then(function(A){var v=A.numFailures,F=A.results,k=A.lastResult,A=A.failures;if(v===0)return p?F:k;throw new _e("".concat(u.name,".bulkPut(): ").concat(v," of ").concat(E," operations failed"),A)})})},Ue.prototype.bulkUpdate=function(i){var o=this,l=this.core,u=i.map(function(g){return g.key}),d=i.map(function(g){return g.changes}),p=[];return this._trans("readwrite",function(g){return l.getMany({trans:g,keys:u,cache:"clone"}).then(function(y){var E=[],_=[];i.forEach(function(v,F){var k=v.key,A=v.changes,j=y[F];if(j){for(var P=0,R=Object.keys(A);P<R.length;P++){var I=R[P],L=A[I];if(I===o.schema.primKey.keyPath){if($e(L,k)!==0)throw new Z.Constraint("Cannot update primary key in bulkUpdate()")}else ze(j,I,L)}p.push(F),E.push(k),_.push(j)}});var D=E.length;return l.mutate({trans:g,type:"put",keys:E,values:_,updates:{keys:u,changeSpecs:d}}).then(function(v){var F=v.numFailures,k=v.failures;if(F===0)return D;for(var A=0,j=Object.keys(k);A<j.length;A++){var P,R=j[A],I=p[Number(R)];I!=null&&(P=k[R],delete k[R],k[I]=P)}throw new _e("".concat(o.name,".bulkUpdate(): ").concat(F," of ").concat(D," operations failed"),k)})})})},Ue.prototype.bulkDelete=function(i){var o=this,l=i.length;return this._trans("readwrite",function(u){return o.core.mutate({trans:u,type:"delete",keys:i})}).then(function(g){var d=g.numFailures,p=g.lastResult,g=g.failures;if(d===0)return p;throw new _e("".concat(o.name,".bulkDelete(): ").concat(d," of ").concat(l," operations failed"),g)})},Ue);function Ue(){}function Hn(i){function o(g,y){if(y){for(var E=arguments.length,_=new Array(E-1);--E;)_[E-1]=arguments[E];return l[g].subscribe.apply(null,_),i}if(typeof g=="string")return l[g]}var l={};o.addEventType=p;for(var u=1,d=arguments.length;u<d;++u)p(arguments[u]);return o;function p(g,y,E){if(typeof g!="object"){var _;y=y||Ge;var D={subscribers:[],fire:E=E||ce,subscribe:function(v){D.subscribers.indexOf(v)===-1&&(D.subscribers.push(v),D.fire=y(D.fire,v))},unsubscribe:function(v){D.subscribers=D.subscribers.filter(function(F){return F!==v}),D.fire=D.subscribers.reduce(y,E)}};return l[g]=o[g]=D}c(_=g).forEach(function(v){var F=_[v];if(f(F))p(v,_[v][0],_[v][1]);else{if(F!=="asap")throw new Z.InvalidArgument("Invalid event config");var k=p(v,ge,function(){for(var A=arguments.length,j=new Array(A);A--;)j[A]=arguments[A];k.subscribers.forEach(function(P){de(function(){P.apply(null,j)})})})}})}}function Kn(i,o){return te(o).from({prototype:i}),o}function In(i,o){return!(i.filter||i.algorithm||i.or)&&(o?i.justLimit:!i.replayFilter)}function os(i,o){i.filter=wn(i.filter,o)}function as(i,o,l){var u=i.replayFilter;i.replayFilter=u?function(){return wn(u(),o())}:o,i.justLimit=l&&!u}function br(i,o){if(i.isPrimKey)return o.primaryKey;var l=o.getIndexByKeyPath(i.index);if(!l)throw new Z.Schema("KeyPath "+i.index+" on object store "+o.name+" is not indexed");return l}function pi(i,o,l){var u=br(i,o.schema);return o.openCursor({trans:l,values:!i.keysOnly,reverse:i.dir==="prev",unique:!!i.unique,query:{index:u,range:i.range}})}function yr(i,o,l,u){var d=i.replayFilter?wn(i.filter,i.replayFilter()):i.filter;if(i.or){var p={},g=function(y,E,_){var D,v;d&&!d(E,_,function(F){return E.stop(F)},function(F){return E.fail(F)})||((v=""+(D=E.primaryKey))=="[object ArrayBuffer]"&&(v=""+new Uint8Array(D)),C(p,v)||(p[v]=!0,o(y,E,_)))};return Promise.all([i.or._iterate(g,l),mi(pi(i,u,l),i.algorithm,g,!i.keysOnly&&i.valueMapper)])}return mi(pi(i,u,l),wn(i.algorithm,d),o,!i.keysOnly&&i.valueMapper)}function mi(i,o,l,u){var d=Le(u?function(p,g,y){return l(u(p),g,y)}:l);return i.then(function(p){if(p)return p.start(function(){var g=function(){return p.continue()};o&&!o(p,function(y){return g=y},function(y){p.stop(y),g=ce},function(y){p.fail(y),g=ce})||d(p.value,p,function(y){return g=y}),g()})})}var Jt=Symbol(),Vn=(gi.prototype.execute=function(i){if(this.add!==void 0){var o=this.add;if(f(o))return n(n([],f(i)?i:[],!0),o).sort();if(typeof o=="number")return(Number(i)||0)+o;if(typeof o=="bigint")try{return BigInt(i)+o}catch{return BigInt(0)+o}throw new TypeError("Invalid term ".concat(o))}if(this.remove!==void 0){var l=this.remove;if(f(l))return f(i)?i.filter(function(u){return!l.includes(u)}).sort():[];if(typeof l=="number")return Number(i)-l;if(typeof l=="bigint")try{return BigInt(i)-l}catch{return BigInt(0)-l}throw new TypeError("Invalid subtrahend ".concat(l))}return o=(o=this.replacePrefix)===null||o===void 0?void 0:o[0],o&&typeof i=="string"&&i.startsWith(o)?this.replacePrefix[1]+i.substring(o.length):i},gi);function gi(i){Object.assign(this,i)}var Ca=(Ae.prototype._read=function(i,o){var l=this._ctx;return l.error?l.table._trans(null,et.bind(null,l.error)):l.table._trans("readonly",i).then(o)},Ae.prototype._write=function(i){var o=this._ctx;return o.error?o.table._trans(null,et.bind(null,o.error)):o.table._trans("readwrite",i,"locked")},Ae.prototype._addAlgorithm=function(i){var o=this._ctx;o.algorithm=wn(o.algorithm,i)},Ae.prototype._iterate=function(i,o){return yr(this._ctx,i,o,this._ctx.table.core)},Ae.prototype.clone=function(i){var o=Object.create(this.constructor.prototype),l=Object.create(this._ctx);return i&&m(l,i),o._ctx=l,o},Ae.prototype.raw=function(){return this._ctx.valueMapper=null,this},Ae.prototype.each=function(i){var o=this._ctx;return this._read(function(l){return yr(o,i,l,o.table.core)})},Ae.prototype.count=function(i){var o=this;return this._read(function(l){var u=o._ctx,d=u.table.core;if(In(u,!0))return d.count({trans:l,query:{index:br(u,d.schema),range:u.range}}).then(function(g){return Math.min(g,u.limit)});var p=0;return yr(u,function(){return++p,!1},l,d).then(function(){return p})}).then(i)},Ae.prototype.sortBy=function(i,o){var l=i.split(".").reverse(),u=l[0],d=l.length-1;function p(E,_){return _?p(E[l[_]],_-1):E[u]}var g=this._ctx.dir==="next"?1:-1;function y(E,_){return $e(p(E,d),p(_,d))*g}return this.toArray(function(E){return E.sort(y)}).then(o)},Ae.prototype.toArray=function(i){var o=this;return this._read(function(l){var u=o._ctx;if(u.dir==="next"&&In(u,!0)&&0<u.limit){var d=u.valueMapper,p=br(u,u.table.core.schema);return u.table.core.query({trans:l,limit:u.limit,values:!0,query:{index:p,range:u.range}}).then(function(y){return y=y.result,d?y.map(d):y})}var g=[];return yr(u,function(y){return g.push(y)},l,u.table.core).then(function(){return g})},i)},Ae.prototype.offset=function(i){var o=this._ctx;return i<=0||(o.offset+=i,In(o)?as(o,function(){var l=i;return function(u,d){return l===0||(l===1?--l:d(function(){u.advance(l),l=0}),!1)}}):as(o,function(){var l=i;return function(){return--l<0}})),this},Ae.prototype.limit=function(i){return this._ctx.limit=Math.min(this._ctx.limit,i),as(this._ctx,function(){var o=i;return function(l,u,d){return--o<=0&&u(d),0<=o}},!0),this},Ae.prototype.until=function(i,o){return os(this._ctx,function(l,u,d){return!i(l.value)||(u(d),o)}),this},Ae.prototype.first=function(i){return this.limit(1).toArray(function(o){return o[0]}).then(i)},Ae.prototype.last=function(i){return this.reverse().first(i)},Ae.prototype.filter=function(i){var o;return os(this._ctx,function(l){return i(l.value)}),(o=this._ctx).isMatch=wn(o.isMatch,i),this},Ae.prototype.and=function(i){return this.filter(i)},Ae.prototype.or=function(i){return new this.db.WhereClause(this._ctx.table,i,this)},Ae.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Ae.prototype.desc=function(){return this.reverse()},Ae.prototype.eachKey=function(i){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){i(u.key,u)})},Ae.prototype.eachUniqueKey=function(i){return this._ctx.unique="unique",this.eachKey(i)},Ae.prototype.eachPrimaryKey=function(i){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){i(u.primaryKey,u)})},Ae.prototype.keys=function(i){var o=this._ctx;o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,d){l.push(d.key)}).then(function(){return l}).then(i)},Ae.prototype.primaryKeys=function(i){var o=this._ctx;if(o.dir==="next"&&In(o,!0)&&0<o.limit)return this._read(function(u){var d=br(o,o.table.core.schema);return o.table.core.query({trans:u,values:!1,limit:o.limit,query:{index:d,range:o.range}})}).then(function(u){return u.result}).then(i);o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,d){l.push(d.primaryKey)}).then(function(){return l}).then(i)},Ae.prototype.uniqueKeys=function(i){return this._ctx.unique="unique",this.keys(i)},Ae.prototype.firstKey=function(i){return this.limit(1).keys(function(o){return o[0]}).then(i)},Ae.prototype.lastKey=function(i){return this.reverse().firstKey(i)},Ae.prototype.distinct=function(){var i=this._ctx,i=i.index&&i.table.schema.idxByName[i.index];if(!i||!i.multi)return this;var o={};return os(this._ctx,function(d){var u=d.primaryKey.toString(),d=C(o,u);return o[u]=!0,!d}),this},Ae.prototype.modify=function(i){var o=this,l=this._ctx;return this._write(function(u){var d,p,g;g=typeof i=="function"?i:(d=c(i),p=d.length,function(P){for(var R=!1,I=0;I<p;++I){var L=d[I],M=i[L],U=Ce(P,L);M instanceof Vn?(ze(P,L,M.execute(U)),R=!0):U!==M&&(ze(P,L,M),R=!0)}return R});var y=l.table.core,v=y.schema.primaryKey,E=v.outbound,_=v.extractKey,D=200,v=o.db._options.modifyChunkSize;v&&(D=typeof v=="object"?v[y.name]||v["*"]||200:v);function F(P,L){var I=L.failures,L=L.numFailures;A+=P-L;for(var M=0,U=c(I);M<U.length;M++){var Q=U[M];k.push(I[Q])}}var k=[],A=0,j=[];return o.clone().primaryKeys().then(function(P){function R(L){var M=Math.min(D,P.length-L);return y.getMany({trans:u,keys:P.slice(L,L+M),cache:"immutable"}).then(function(U){for(var Q=[],W=[],V=E?[]:null,ee=[],G=0;G<M;++G){var se=U[G],me={value:T(se),primKey:P[L+G]};g.call(me,me.value,me)!==!1&&(me.value==null?ee.push(P[L+G]):E||$e(_(se),_(me.value))===0?(W.push(me.value),E&&V.push(P[L+G])):(ee.push(P[L+G]),Q.push(me.value)))}return Promise.resolve(0<Q.length&&y.mutate({trans:u,type:"add",values:Q}).then(function(be){for(var ye in be.failures)ee.splice(parseInt(ye),1);F(Q.length,be)})).then(function(){return(0<W.length||I&&typeof i=="object")&&y.mutate({trans:u,type:"put",keys:V,values:W,criteria:I,changeSpec:typeof i!="function"&&i,isAdditionalChunk:0<L}).then(function(be){return F(W.length,be)})}).then(function(){return(0<ee.length||I&&i===ls)&&y.mutate({trans:u,type:"delete",keys:ee,criteria:I,isAdditionalChunk:0<L}).then(function(be){return F(ee.length,be)})}).then(function(){return P.length>L+M&&R(L+D)})})}var I=In(l)&&l.limit===1/0&&(typeof i!="function"||i===ls)&&{index:l.index,range:l.range};return R(0).then(function(){if(0<k.length)throw new we("Error modifying one or more objects",k,A,j);return P.length})})})},Ae.prototype.delete=function(){var i=this._ctx,o=i.range;return In(i)&&(i.isPrimKey||o.type===3)?this._write(function(l){var u=i.table.core.schema.primaryKey,d=o;return i.table.core.count({trans:l,query:{index:u,range:d}}).then(function(p){return i.table.core.mutate({trans:l,type:"deleteRange",range:d}).then(function(g){var y=g.failures;if(g.lastResult,g.results,g=g.numFailures,g)throw new we("Could not delete some values",Object.keys(y).map(function(E){return y[E]}),p-g);return p-g})})}):this.modify(ls)},Ae);function Ae(){}var ls=function(i,o){return o.value=null};function Ea(i,o){return i<o?-1:i===o?0:1}function ka(i,o){return o<i?-1:i===o?0:1}function St(i,o,l){return i=i instanceof yi?new i.Collection(i):i,i._ctx.error=new(l||TypeError)(o),i}function Ln(i){return new i.Collection(i,function(){return bi("")}).limit(0)}function wr(i,o,l,u){var d,p,g,y,E,_,D,v=l.length;if(!l.every(function(A){return typeof A=="string"}))return St(i,li);function F(A){d=A==="next"?function(P){return P.toUpperCase()}:function(P){return P.toLowerCase()},p=A==="next"?function(P){return P.toLowerCase()}:function(P){return P.toUpperCase()},g=A==="next"?Ea:ka;var j=l.map(function(P){return{lower:p(P),upper:d(P)}}).sort(function(P,R){return g(P.lower,R.lower)});y=j.map(function(P){return P.upper}),E=j.map(function(P){return P.lower}),D=(_=A)==="next"?"":u}F("next"),i=new i.Collection(i,function(){return un(y[0],E[v-1]+u)}),i._ondirectionchange=function(A){F(A)};var k=0;return i._addAlgorithm(function(A,j,P){var R=A.key;if(typeof R!="string")return!1;var I=p(R);if(o(I,E,k))return!0;for(var L=null,M=k;M<v;++M){var U=(function(Q,W,V,ee,G,se){for(var me=Math.min(Q.length,ee.length),be=-1,ye=0;ye<me;++ye){var _t=W[ye];if(_t!==ee[ye])return G(Q[ye],V[ye])<0?Q.substr(0,ye)+V[ye]+V.substr(ye+1):G(Q[ye],ee[ye])<0?Q.substr(0,ye)+ee[ye]+V.substr(ye+1):0<=be?Q.substr(0,be)+W[be]+V.substr(be+1):null;G(Q[ye],_t)<0&&(be=ye)}return me<ee.length&&se==="next"?Q+V.substr(Q.length):me<Q.length&&se==="prev"?Q.substr(0,V.length):be<0?null:Q.substr(0,be)+ee[be]+V.substr(be+1)})(R,I,y[M],E[M],g,_);U===null&&L===null?k=M+1:(L===null||0<g(L,U))&&(L=U)}return j(L!==null?function(){A.continue(L+D)}:P),!1}),i}function un(i,o,l,u){return{type:2,lower:i,upper:o,lowerOpen:l,upperOpen:u}}function bi(i){return{type:1,lower:i,upper:i}}var yi=(Object.defineProperty(ut.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ut.prototype.between=function(i,o,l,u){l=l!==!1,u=u===!0;try{return 0<this._cmp(i,o)||this._cmp(i,o)===0&&(l||u)&&(!l||!u)?Ln(this):new this.Collection(this,function(){return un(i,o,!l,!u)})}catch{return St(this,Qt)}},ut.prototype.equals=function(i){return i==null?St(this,Qt):new this.Collection(this,function(){return bi(i)})},ut.prototype.above=function(i){return i==null?St(this,Qt):new this.Collection(this,function(){return un(i,void 0,!0)})},ut.prototype.aboveOrEqual=function(i){return i==null?St(this,Qt):new this.Collection(this,function(){return un(i,void 0,!1)})},ut.prototype.below=function(i){return i==null?St(this,Qt):new this.Collection(this,function(){return un(void 0,i,!1,!0)})},ut.prototype.belowOrEqual=function(i){return i==null?St(this,Qt):new this.Collection(this,function(){return un(void 0,i)})},ut.prototype.startsWith=function(i){return typeof i!="string"?St(this,li):this.between(i,i+yn,!0,!0)},ut.prototype.startsWithIgnoreCase=function(i){return i===""?this.startsWith(i):wr(this,function(o,l){return o.indexOf(l[0])===0},[i],yn)},ut.prototype.equalsIgnoreCase=function(i){return wr(this,function(o,l){return o===l[0]},[i],"")},ut.prototype.anyOfIgnoreCase=function(){var i=We.apply(K,arguments);return i.length===0?Ln(this):wr(this,function(o,l){return l.indexOf(o)!==-1},i,"")},ut.prototype.startsWithAnyOfIgnoreCase=function(){var i=We.apply(K,arguments);return i.length===0?Ln(this):wr(this,function(o,l){return l.some(function(u){return o.indexOf(u)===0})},i,yn)},ut.prototype.anyOf=function(){var i=this,o=We.apply(K,arguments),l=this._cmp;try{o.sort(l)}catch{return St(this,Qt)}if(o.length===0)return Ln(this);var u=new this.Collection(this,function(){return un(o[0],o[o.length-1])});u._ondirectionchange=function(p){l=p==="next"?i._ascending:i._descending,o.sort(l)};var d=0;return u._addAlgorithm(function(p,g,y){for(var E=p.key;0<l(E,o[d]);)if(++d===o.length)return g(y),!1;return l(E,o[d])===0||(g(function(){p.continue(o[d])}),!1)}),u},ut.prototype.notEqual=function(i){return this.inAnyRange([[-1/0,i],[i,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ut.prototype.noneOf=function(){var i=We.apply(K,arguments);if(i.length===0)return new this.Collection(this);try{i.sort(this._ascending)}catch{return St(this,Qt)}var o=i.reduce(function(l,u){return l?l.concat([[l[l.length-1][1],u]]):[[-1/0,u]]},null);return o.push([i[i.length-1],this.db._maxKey]),this.inAnyRange(o,{includeLowers:!1,includeUppers:!1})},ut.prototype.inAnyRange=function(R,o){var l=this,u=this._cmp,d=this._ascending,p=this._descending,g=this._min,y=this._max;if(R.length===0)return Ln(this);if(!R.every(function(I){return I[0]!==void 0&&I[1]!==void 0&&d(I[0],I[1])<=0}))return St(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Z.InvalidArgument);var E=!o||o.includeLowers!==!1,_=o&&o.includeUppers===!0,D,v=d;function F(I,L){return v(I[0],L[0])}try{(D=R.reduce(function(I,L){for(var M=0,U=I.length;M<U;++M){var Q=I[M];if(u(L[0],Q[1])<0&&0<u(L[1],Q[0])){Q[0]=g(Q[0],L[0]),Q[1]=y(Q[1],L[1]);break}}return M===U&&I.push(L),I},[])).sort(F)}catch{return St(this,Qt)}var k=0,A=_?function(I){return 0<d(I,D[k][1])}:function(I){return 0<=d(I,D[k][1])},j=E?function(I){return 0<p(I,D[k][0])}:function(I){return 0<=p(I,D[k][0])},P=A,R=new this.Collection(this,function(){return un(D[0][0],D[D.length-1][1],!E,!_)});return R._ondirectionchange=function(I){v=I==="next"?(P=A,d):(P=j,p),D.sort(F)},R._addAlgorithm(function(I,L,M){for(var U,Q=I.key;P(Q);)if(++k===D.length)return L(M),!1;return!A(U=Q)&&!j(U)||(l._cmp(Q,D[k][1])===0||l._cmp(Q,D[k][0])===0||L(function(){v===d?I.continue(D[k][0]):I.continue(D[k][1])}),!1)}),R},ut.prototype.startsWithAnyOf=function(){var i=We.apply(K,arguments);return i.every(function(o){return typeof o=="string"})?i.length===0?Ln(this):this.inAnyRange(i.map(function(o){return[o,o+yn]})):St(this,"startsWithAnyOf() only works with strings")},ut);function ut(){}function Ht(i){return Le(function(o){return Yn(o),i(o.target.error),!1})}function Yn(i){i.stopPropagation&&i.stopPropagation(),i.preventDefault&&i.preventDefault()}var Xn="storagemutated",cs="x-storagemutated-1",dn=Hn(null,Xn),Sa=(Kt.prototype._lock=function(){return ne(!Y.global),++this._reculock,this._reculock!==1||Y.global||(Y.lockOwnerFor=this),this},Kt.prototype._unlock=function(){if(ne(!Y.global),--this._reculock==0)for(Y.global||(Y.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var i=this._blockedFuncs.shift();try{bn(i[1],i[0])}catch{}}return this},Kt.prototype._locked=function(){return this._reculock&&Y.lockOwnerFor!==this},Kt.prototype.create=function(i){var o=this;if(!this.mode)return this;var l=this.db.idbdb,u=this.db._state.dbOpenError;if(ne(!this.idbtrans),!i&&!l)switch(u&&u.name){case"DatabaseClosedError":throw new Z.DatabaseClosed(u);case"MissingAPIError":throw new Z.MissingAPI(u.message,u);default:throw new Z.OpenFailed(u)}if(!this.active)throw new Z.TransactionInactive;return ne(this._completion._state===null),(i=this.idbtrans=i||(this.db.core||l).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Le(function(d){Yn(d),o._reject(i.error)}),i.onabort=Le(function(d){Yn(d),o.active&&o._reject(new Z.Abort(i.error)),o.active=!1,o.on("abort").fire(d)}),i.oncomplete=Le(function(){o.active=!1,o._resolve(),"mutatedParts"in i&&dn.storagemutated.fire(i.mutatedParts)}),this},Kt.prototype._promise=function(i,o,l){var u=this;if(i==="readwrite"&&this.mode!=="readwrite")return et(new Z.ReadOnly("Transaction is readonly"));if(!this.active)return et(new Z.TransactionInactive);if(this._locked())return new X(function(p,g){u._blockedFuncs.push([function(){u._promise(i,o,l).then(p,g)},Y])});if(l)return an(function(){var p=new X(function(g,y){u._lock();var E=o(g,y,u);E&&E.then&&E.then(g,y)});return p.finally(function(){return u._unlock()}),p._lib=!0,p});var d=new X(function(p,g){var y=o(p,g,u);y&&y.then&&y.then(p,g)});return d._lib=!0,d},Kt.prototype._root=function(){return this.parent?this.parent._root():this},Kt.prototype.waitFor=function(i){var o,l=this._root(),u=X.resolve(i);l._waitingFor?l._waitingFor=l._waitingFor.then(function(){return u}):(l._waitingFor=u,l._waitingQueue=[],o=l.idbtrans.objectStore(l.storeNames[0]),(function p(){for(++l._spinCount;l._waitingQueue.length;)l._waitingQueue.shift()();l._waitingFor&&(o.get(-1/0).onsuccess=p)})());var d=l._waitingFor;return new X(function(p,g){u.then(function(y){return l._waitingQueue.push(Le(p.bind(null,y)))},function(y){return l._waitingQueue.push(Le(g.bind(null,y)))}).finally(function(){l._waitingFor===d&&(l._waitingFor=null)})})},Kt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new Z.Abort))},Kt.prototype.table=function(i){var o=this._memoizedTables||(this._memoizedTables={});if(C(o,i))return o[i];var l=this.schema[i];if(!l)throw new Z.NotFound("Table "+i+" not part of transaction");return l=new this.db.Table(i,l,this),l.core=this.db.core.table(i),o[i]=l},Kt);function Kt(){}function us(i,o,l,u,d,p,g){return{name:i,keyPath:o,unique:l,multi:u,auto:d,compound:p,src:(l&&!g?"&":"")+(u?"*":"")+(d?"++":"")+wi(o)}}function wi(i){return typeof i=="string"?i:i?"["+[].join.call(i,"+")+"]":""}function ds(i,o,l){return{name:i,primKey:o,indexes:l,mappedClass:null,idxByName:(u=function(d){return[d.name,d]},l.reduce(function(d,p,g){return g=u(p,g),g&&(d[g[0]]=g[1]),d},{}))};var u}var Gn=function(i){try{return i.only([[]]),Gn=function(){return[[]]},[[]]}catch{return Gn=function(){return yn},yn}};function fs(i){return i==null?function(){}:typeof i=="string"?(o=i).split(".").length===1?function(l){return l[o]}:function(l){return Ce(l,o)}:function(l){return Ce(l,i)};var o}function vi(i){return[].slice.call(i)}var _a=0;function Qn(i){return i==null?":id":typeof i=="string"?i:"[".concat(i.join("+"),"]")}function Pa(i,o,E){function u(P){if(P.type===3)return null;if(P.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var k=P.lower,A=P.upper,j=P.lowerOpen,P=P.upperOpen;return k===void 0?A===void 0?null:o.upperBound(A,!!P):A===void 0?o.lowerBound(k,!!j):o.bound(k,A,!!j,!!P)}function d(F){var k,A=F.name;return{name:A,schema:F,mutate:function(j){var P=j.trans,R=j.type,I=j.keys,L=j.values,M=j.range;return new Promise(function(U,Q){U=Le(U);var W=P.objectStore(A),V=W.keyPath==null,ee=R==="put"||R==="add";if(!ee&&R!=="delete"&&R!=="deleteRange")throw new Error("Invalid operation type: "+R);var G,se=(I||L||{length:1}).length;if(I&&L&&I.length!==L.length)throw new Error("Given keys array must have same length as given values array.");if(se===0)return U({numFailures:0,failures:{},results:[],lastResult:void 0});function me(wt){++_t,Yn(wt)}var be=[],ye=[],_t=0;if(R==="deleteRange"){if(M.type===4)return U({numFailures:_t,failures:ye,results:[],lastResult:void 0});M.type===3?be.push(G=W.clear()):be.push(G=W.delete(u(M)))}else{var V=ee?V?[L,I]:[L,null]:[I,null],pe=V[0],mt=V[1];if(ee)for(var gt=0;gt<se;++gt)be.push(G=mt&&mt[gt]!==void 0?W[R](pe[gt],mt[gt]):W[R](pe[gt])),G.onerror=me;else for(gt=0;gt<se;++gt)be.push(G=W[R](pe[gt])),G.onerror=me}function jr(wt){wt=wt.target.result,be.forEach(function($n,Ds){return $n.error!=null&&(ye[Ds]=$n.error)}),U({numFailures:_t,failures:ye,results:R==="delete"?I:be.map(function($n){return $n.result}),lastResult:wt})}G.onerror=function(wt){me(wt),jr(wt)},G.onsuccess=jr})},getMany:function(j){var P=j.trans,R=j.keys;return new Promise(function(I,L){I=Le(I);for(var M,U=P.objectStore(A),Q=R.length,W=new Array(Q),V=0,ee=0,G=function(be){be=be.target,W[be._pos]=be.result,++ee===V&&I(W)},se=Ht(L),me=0;me<Q;++me)R[me]!=null&&((M=U.get(R[me]))._pos=me,M.onsuccess=G,M.onerror=se,++V);V===0&&I(W)})},get:function(j){var P=j.trans,R=j.key;return new Promise(function(I,L){I=Le(I);var M=P.objectStore(A).get(R);M.onsuccess=function(U){return I(U.target.result)},M.onerror=Ht(L)})},query:(k=_,function(j){return new Promise(function(P,R){P=Le(P);var I,L,M,V=j.trans,U=j.values,Q=j.limit,G=j.query,W=Q===1/0?void 0:Q,ee=G.index,G=G.range,V=V.objectStore(A),ee=ee.isPrimaryKey?V:V.index(ee.name),G=u(G);if(Q===0)return P({result:[]});k?((W=U?ee.getAll(G,W):ee.getAllKeys(G,W)).onsuccess=function(se){return P({result:se.target.result})},W.onerror=Ht(R)):(I=0,L=!U&&"openKeyCursor"in ee?ee.openKeyCursor(G):ee.openCursor(G),M=[],L.onsuccess=function(se){var me=L.result;return me?(M.push(U?me.value:me.primaryKey),++I===Q?P({result:M}):void me.continue()):P({result:M})},L.onerror=Ht(R))})}),openCursor:function(j){var P=j.trans,R=j.values,I=j.query,L=j.reverse,M=j.unique;return new Promise(function(U,Q){U=Le(U);var ee=I.index,W=I.range,V=P.objectStore(A),V=ee.isPrimaryKey?V:V.index(ee.name),ee=L?M?"prevunique":"prev":M?"nextunique":"next",G=!R&&"openKeyCursor"in V?V.openKeyCursor(u(W),ee):V.openCursor(u(W),ee);G.onerror=Ht(Q),G.onsuccess=Le(function(se){var me,be,ye,_t,pe=G.result;pe?(pe.___id=++_a,pe.done=!1,me=pe.continue.bind(pe),be=(be=pe.continuePrimaryKey)&&be.bind(pe),ye=pe.advance.bind(pe),_t=function(){throw new Error("Cursor not stopped")},pe.trans=P,pe.stop=pe.continue=pe.continuePrimaryKey=pe.advance=function(){throw new Error("Cursor not started")},pe.fail=Le(Q),pe.next=function(){var mt=this,gt=1;return this.start(function(){return gt--?mt.continue():mt.stop()}).then(function(){return mt})},pe.start=function(mt){function gt(){if(G.result)try{mt()}catch(wt){pe.fail(wt)}else pe.done=!0,pe.start=function(){throw new Error("Cursor behind last entry")},pe.stop()}var jr=new Promise(function(wt,$n){wt=Le(wt),G.onerror=Ht($n),pe.fail=$n,pe.stop=function(Ds){pe.stop=pe.continue=pe.continuePrimaryKey=pe.advance=_t,wt(Ds)}});return G.onsuccess=Le(function(wt){G.onsuccess=gt,gt()}),pe.continue=me,pe.continuePrimaryKey=be,pe.advance=ye,gt(),jr},U(pe)):U(null)},Q)})},count:function(j){var P=j.query,R=j.trans,I=P.index,L=P.range;return new Promise(function(M,U){var Q=R.objectStore(A),W=I.isPrimaryKey?Q:Q.index(I.name),Q=u(L),W=Q?W.count(Q):W.count();W.onsuccess=Le(function(V){return M(V.target.result)}),W.onerror=Ht(U)})}}}var p,g,y,D=(g=E,y=vi((p=i).objectStoreNames),{schema:{name:p.name,tables:y.map(function(F){return g.objectStore(F)}).map(function(F){var k=F.keyPath,P=F.autoIncrement,A=f(k),j={},P={name:F.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:k==null,compound:A,keyPath:k,autoIncrement:P,unique:!0,extractKey:fs(k)},indexes:vi(F.indexNames).map(function(R){return F.index(R)}).map(function(M){var I=M.name,L=M.unique,U=M.multiEntry,M=M.keyPath,U={name:I,compound:f(M),keyPath:M,unique:L,multiEntry:U,extractKey:fs(M)};return j[Qn(M)]=U}),getIndexByKeyPath:function(R){return j[Qn(R)]}};return j[":id"]=P.primaryKey,k!=null&&(j[Qn(k)]=P.primaryKey),P})},hasGetAll:0<y.length&&"getAll"in g.objectStore(y[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),E=D.schema,_=D.hasGetAll,D=E.tables.map(d),v={};return D.forEach(function(F){return v[F.name]=F}),{stack:"dbcore",transaction:i.transaction.bind(i),table:function(F){if(!v[F])throw new Error("Table '".concat(F,"' not found"));return v[F]},MIN_KEY:-1/0,MAX_KEY:Gn(o),schema:E}}function Aa(i,o,l,u){var d=l.IDBKeyRange;return l.indexedDB,{dbcore:(u=Pa(o,d,u),i.dbcore.reduce(function(p,g){return g=g.create,s(s({},p),g(p))},u))}}function vr(i,u){var l=u.db,u=Aa(i._middlewares,l,i._deps,u);i.core=u.dbcore,i.tables.forEach(function(d){var p=d.name;i.core.schema.tables.some(function(g){return g.name===p})&&(d.core=i.core.table(p),i[p]instanceof i.Table&&(i[p].core=d.core))})}function xr(i,o,l,u){l.forEach(function(d){var p=u[d];o.forEach(function(g){var y=(function E(_,D){return oe(_,D)||(_=$(_))&&E(_,D)})(g,d);(!y||"value"in y&&y.value===void 0)&&(g===i.Transaction.prototype||g instanceof i.Transaction?q(g,d,{get:function(){return this.table(d)},set:function(E){B(this,d,{value:E,writable:!0,configurable:!0,enumerable:!0})}}):g[d]=new i.Table(d,p))})})}function hs(i,o){o.forEach(function(l){for(var u in l)l[u]instanceof i.Table&&delete l[u]})}function Da(i,o){return i._cfg.version-o._cfg.version}function Ta(i,o,l,u){var d=i._dbSchema;l.objectStoreNames.contains("$meta")&&!d.$meta&&(d.$meta=ds("$meta",$i("")[0],[]),i._storeNames.push("$meta"));var p=i._createTransaction("readwrite",i._storeNames,d);p.create(l),p._completion.catch(u);var g=p._reject.bind(p),y=Y.transless||Y;an(function(){return Y.trans=p,Y.transless=y,o!==0?(vr(i,l),_=o,((E=p).storeNames.includes("$meta")?E.table("$meta").get("version").then(function(D){return D??_}):X.resolve(_)).then(function(D){return F=D,k=p,A=l,j=[],D=(v=i)._versions,P=v._dbSchema=Cr(0,v.idbdb,A),(D=D.filter(function(R){return R._cfg.version>=F})).length!==0?(D.forEach(function(R){j.push(function(){var I=P,L=R._cfg.dbschema;Er(v,I,A),Er(v,L,A),P=v._dbSchema=L;var M=ps(I,L);M.add.forEach(function(ee){ms(A,ee[0],ee[1].primKey,ee[1].indexes)}),M.change.forEach(function(ee){if(ee.recreate)throw new Z.Upgrade("Not yet support for changing primary key");var G=A.objectStore(ee.name);ee.add.forEach(function(se){return $r(G,se)}),ee.change.forEach(function(se){G.deleteIndex(se.name),$r(G,se)}),ee.del.forEach(function(se){return G.deleteIndex(se)})});var U=R._cfg.contentUpgrade;if(U&&R._cfg.version>F){vr(v,A),k._memoizedTables={};var Q=vt(L);M.del.forEach(function(ee){Q[ee]=I[ee]}),hs(v,[v.Transaction.prototype]),xr(v,[v.Transaction.prototype],c(Q),Q),k.schema=Q;var W,V=rt(U);return V&&Rn(),M=X.follow(function(){var ee;(W=U(k))&&V&&(ee=ln.bind(null,null),W.then(ee,ee))}),W&&typeof W.then=="function"?X.resolve(W):M.then(function(){return W})}}),j.push(function(I){var L,M,U=R._cfg.dbschema;L=U,M=I,[].slice.call(M.db.objectStoreNames).forEach(function(Q){return L[Q]==null&&M.db.deleteObjectStore(Q)}),hs(v,[v.Transaction.prototype]),xr(v,[v.Transaction.prototype],v._storeNames,v._dbSchema),k.schema=v._dbSchema}),j.push(function(I){v.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(v.idbdb.version/10)===R._cfg.version?(v.idbdb.deleteObjectStore("$meta"),delete v._dbSchema.$meta,v._storeNames=v._storeNames.filter(function(L){return L!=="$meta"})):I.objectStore("$meta").put(R._cfg.version,"version"))})}),(function R(){return j.length?X.resolve(j.shift()(k.idbtrans)).then(R):X.resolve()})().then(function(){xi(P,A)})):X.resolve();var v,F,k,A,j,P}).catch(g)):(c(d).forEach(function(D){ms(l,D,d[D].primKey,d[D].indexes)}),vr(i,l),void X.follow(function(){return i.on.populate.fire(p)}).catch(g));var E,_})}function ja(i,o){xi(i._dbSchema,o),o.db.version%10!=0||o.objectStoreNames.contains("$meta")||o.db.createObjectStore("$meta").add(Math.ceil(o.db.version/10-1),"version");var l=Cr(0,i.idbdb,o);Er(i,i._dbSchema,o);for(var u=0,d=ps(l,i._dbSchema).change;u<d.length;u++){var p=(function(g){if(g.change.length||g.recreate)return console.warn("Unable to patch indexes of table ".concat(g.name," because it has changes on the type of index or primary key.")),{value:void 0};var y=o.objectStore(g.name);g.add.forEach(function(E){De&&console.debug("Dexie upgrade patch: Creating missing index ".concat(g.name,".").concat(E.src)),$r(y,E)})})(d[u]);if(typeof p=="object")return p.value}}function ps(i,o){var l,u={del:[],add:[],change:[]};for(l in i)o[l]||u.del.push(l);for(l in o){var d=i[l],p=o[l];if(d){var g={name:l,def:p,recreate:!1,del:[],add:[],change:[]};if(""+(d.primKey.keyPath||"")!=""+(p.primKey.keyPath||"")||d.primKey.auto!==p.primKey.auto)g.recreate=!0,u.change.push(g);else{var y=d.idxByName,E=p.idxByName,_=void 0;for(_ in y)E[_]||g.del.push(_);for(_ in E){var D=y[_],v=E[_];D?D.src!==v.src&&g.change.push(v):g.add.push(v)}(0<g.del.length||0<g.add.length||0<g.change.length)&&u.change.push(g)}}else u.add.push([l,p])}return u}function ms(i,o,l,u){var d=i.db.createObjectStore(o,l.keyPath?{keyPath:l.keyPath,autoIncrement:l.auto}:{autoIncrement:l.auto});return u.forEach(function(p){return $r(d,p)}),d}function xi(i,o){c(i).forEach(function(l){o.db.objectStoreNames.contains(l)||(De&&console.debug("Dexie: Creating missing table",l),ms(o,l,i[l].primKey,i[l].indexes))})}function $r(i,o){i.createIndex(o.name,o.keyPath,{unique:o.unique,multiEntry:o.multi})}function Cr(i,o,l){var u={};return Se(o.objectStoreNames,0).forEach(function(d){for(var p=l.objectStore(d),g=us(wi(_=p.keyPath),_||"",!0,!1,!!p.autoIncrement,_&&typeof _!="string",!0),y=[],E=0;E<p.indexNames.length;++E){var D=p.index(p.indexNames[E]),_=D.keyPath,D=us(D.name,_,!!D.unique,!!D.multiEntry,!1,_&&typeof _!="string",!1);y.push(D)}u[d]=ds(d,g,y)}),u}function Er(i,o,l){for(var u=l.db.objectStoreNames,d=0;d<u.length;++d){var p=u[d],g=l.objectStore(p);i._hasGetAll="getAll"in g;for(var y=0;y<g.indexNames.length;++y){var E=g.indexNames[y],_=g.index(E).keyPath,D=typeof _=="string"?_:"["+Se(_).join("+")+"]";!o[p]||(_=o[p].idxByName[D])&&(_.name=E,delete o[p].idxByName[D],o[p].idxByName[E]=_)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&a.WorkerGlobalScope&&a instanceof a.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(i._hasGetAll=!1)}function $i(i){return i.split(",").map(function(o,l){var u=(o=o.trim()).replace(/([&*]|\+\+)/g,""),d=/^\[/.test(u)?u.match(/^\[(.*)\]$/)[1].split("+"):u;return us(u,d||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),f(d),l===0)})}var Fa=(kr.prototype._parseStoresSpec=function(i,o){c(i).forEach(function(l){if(i[l]!==null){var u=$i(i[l]),d=u.shift();if(d.unique=!0,d.multi)throw new Z.Schema("Primary key cannot be multi-valued");u.forEach(function(p){if(p.auto)throw new Z.Schema("Only primary key can be marked as autoIncrement (++)");if(!p.keyPath)throw new Z.Schema("Index must have a name and cannot be an empty string")}),o[l]=ds(l,d,u)}})},kr.prototype.stores=function(l){var o=this.db;this._cfg.storesSource=this._cfg.storesSource?m(this._cfg.storesSource,l):l;var l=o._versions,u={},d={};return l.forEach(function(p){m(u,p._cfg.storesSource),d=p._cfg.dbschema={},p._parseStoresSpec(u,d)}),o._dbSchema=d,hs(o,[o._allTables,o,o.Transaction.prototype]),xr(o,[o._allTables,o,o.Transaction.prototype,this._cfg.tables],c(d),d),o._storeNames=c(d),this},kr.prototype.upgrade=function(i){return this._cfg.contentUpgrade=Et(this._cfg.contentUpgrade||ce,i),this},kr);function kr(){}function gs(i,o){var l=i._dbNamesDB;return l||(l=i._dbNamesDB=new Zt(mr,{addons:[],indexedDB:i,IDBKeyRange:o})).version(1).stores({dbnames:"name"}),l.table("dbnames")}function bs(i){return i&&typeof i.databases=="function"}function ys(i){return an(function(){return Y.letThrough=!0,i()})}function ws(i){return!("from"in i)}var pt=function(i,o){if(!this){var l=new pt;return i&&"d"in i&&m(l,i),l}m(this,arguments.length?{d:1,from:i,to:1<arguments.length?o:i}:{d:0})};function Jn(i,o,l){var u=$e(o,l);if(!isNaN(u)){if(0<u)throw RangeError();if(ws(i))return m(i,{from:o,to:l,d:1});var d=i.l,u=i.r;if($e(l,i.from)<0)return d?Jn(d,o,l):i.l={from:o,to:l,d:1,l:null,r:null},Ei(i);if(0<$e(o,i.to))return u?Jn(u,o,l):i.r={from:o,to:l,d:1,l:null,r:null},Ei(i);$e(o,i.from)<0&&(i.from=o,i.l=null,i.d=u?u.d+1:1),0<$e(l,i.to)&&(i.to=l,i.r=null,i.d=i.l?i.l.d+1:1),l=!i.r,d&&!i.l&&Zn(i,d),u&&l&&Zn(i,u)}}function Zn(i,o){ws(o)||(function l(u,E){var p=E.from,g=E.to,y=E.l,E=E.r;Jn(u,p,g),y&&l(u,y),E&&l(u,E)})(i,o)}function Ci(i,o){var l=Sr(o),u=l.next();if(u.done)return!1;for(var d=u.value,p=Sr(i),g=p.next(d.from),y=g.value;!u.done&&!g.done;){if($e(y.from,d.to)<=0&&0<=$e(y.to,d.from))return!0;$e(d.from,y.from)<0?d=(u=l.next(y.from)).value:y=(g=p.next(d.from)).value}return!1}function Sr(i){var o=ws(i)?null:{s:0,n:i};return{next:function(l){for(var u=0<arguments.length;o;)switch(o.s){case 0:if(o.s=1,u)for(;o.n.l&&$e(l,o.n.from)<0;)o={up:o,n:o.n.l,s:1};else for(;o.n.l;)o={up:o,n:o.n.l,s:1};case 1:if(o.s=2,!u||$e(l,o.n.to)<=0)return{value:o.n,done:!1};case 2:if(o.n.r){o.s=3,o={up:o,n:o.n.r,s:0};continue}case 3:o=o.up}return{done:!0}}}}function Ei(i){var o,l,u=(((o=i.r)===null||o===void 0?void 0:o.d)||0)-(((l=i.l)===null||l===void 0?void 0:l.d)||0),d=1<u?"r":u<-1?"l":"";d&&(o=d=="r"?"l":"r",l=s({},i),u=i[d],i.from=u.from,i.to=u.to,i[d]=u[d],l[d]=u[o],(i[o]=l).d=ki(l)),i.d=ki(i)}function ki(l){var o=l.r,l=l.l;return(o?l?Math.max(o.d,l.d):o.d:l?l.d:0)+1}function _r(i,o){return c(o).forEach(function(l){i[l]?Zn(i[l],o[l]):i[l]=(function u(d){var p,g,y={};for(p in d)C(d,p)&&(g=d[p],y[p]=!g||typeof g!="object"||h.has(g.constructor)?g:u(g));return y})(o[l])}),i}function vs(i,o){return i.all||o.all||Object.keys(i).some(function(l){return o[l]&&Ci(o[l],i[l])})}z(pt.prototype,((Tt={add:function(i){return Zn(this,i),this},addKey:function(i){return Jn(this,i,i),this},addKeys:function(i){var o=this;return i.forEach(function(l){return Jn(o,l,l)}),this},hasKey:function(i){var o=Sr(this).next(i).value;return o&&$e(o.from,i)<=0&&0<=$e(o.to,i)}})[ae]=function(){return Sr(this)},Tt));var vn={},xs={},$s=!1;function Pr(i){_r(xs,i),$s||($s=!0,setTimeout(function(){$s=!1,Cs(xs,!(xs={}))},0))}function Cs(i,o){o===void 0&&(o=!1);var l=new Set;if(i.all)for(var u=0,d=Object.values(vn);u<d.length;u++)Si(g=d[u],i,l,o);else for(var p in i){var g,y=/^idb\:\/\/(.*)\/(.*)\//.exec(p);y&&(p=y[1],y=y[2],(g=vn["idb://".concat(p,"/").concat(y)])&&Si(g,i,l,o))}l.forEach(function(E){return E()})}function Si(i,o,l,u){for(var d=[],p=0,g=Object.entries(i.queries.query);p<g.length;p++){for(var y=g[p],E=y[0],_=[],D=0,v=y[1];D<v.length;D++){var F=v[D];vs(o,F.obsSet)?F.subscribers.forEach(function(P){return l.add(P)}):u&&_.push(F)}u&&d.push([E,_])}if(u)for(var k=0,A=d;k<A.length;k++){var j=A[k],E=j[0],_=j[1];i.queries.query[E]=_}}function Oa(i){var o=i._state,l=i._deps.indexedDB;if(o.isBeingOpened||i.idbdb)return o.dbReadyPromise.then(function(){return o.dbOpenError?et(o.dbOpenError):i});o.isBeingOpened=!0,o.dbOpenError=null,o.openComplete=!1;var u=o.openCanceller,d=Math.round(10*i.verno),p=!1;function g(){if(o.openCanceller!==u)throw new Z.DatabaseClosed("db.open() was cancelled")}function y(){return new X(function(F,k){if(g(),!l)throw new Z.MissingAPI;var A=i.name,j=o.autoSchema||!d?l.open(A):l.open(A,d);if(!j)throw new Z.MissingAPI;j.onerror=Ht(k),j.onblocked=Le(i._fireOnBlocked),j.onupgradeneeded=Le(function(P){var R;D=j.transaction,o.autoSchema&&!i._options.allowEmptyDB?(j.onerror=Yn,D.abort(),j.result.close(),(R=l.deleteDatabase(A)).onsuccess=R.onerror=Le(function(){k(new Z.NoSuchDatabase("Database ".concat(A," doesnt exist")))})):(D.onerror=Ht(k),P=P.oldVersion>Math.pow(2,62)?0:P.oldVersion,v=P<1,i.idbdb=j.result,p&&ja(i,D),Ta(i,P/10,D,k))},k),j.onsuccess=Le(function(){D=null;var P,R,I,L,M,U=i.idbdb=j.result,Q=Se(U.objectStoreNames);if(0<Q.length)try{var W=U.transaction((L=Q).length===1?L[0]:L,"readonly");if(o.autoSchema)R=U,I=W,(P=i).verno=R.version/10,I=P._dbSchema=Cr(0,R,I),P._storeNames=Se(R.objectStoreNames,0),xr(P,[P._allTables],c(I),I);else if(Er(i,i._dbSchema,W),((M=ps(Cr(0,(M=i).idbdb,W),M._dbSchema)).add.length||M.change.some(function(V){return V.add.length||V.change.length}))&&!p)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),U.close(),d=U.version+1,p=!0,F(y());vr(i,W)}catch{}zn.push(i),U.onversionchange=Le(function(V){o.vcFired=!0,i.on("versionchange").fire(V)}),U.onclose=Le(function(V){i.on("close").fire(V)}),v&&(M=i._deps,W=A,U=M.indexedDB,M=M.IDBKeyRange,bs(U)||W===mr||gs(U,M).put({name:W}).catch(ce)),F()},k)}).catch(function(F){switch(F?.name){case"UnknownError":if(0<o.PR1398_maxLoop)return o.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),y();break;case"VersionError":if(0<d)return d=0,y()}return X.reject(F)})}var E,_=o.dbReadyResolve,D=null,v=!1;return X.race([u,(typeof navigator>"u"?X.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(F){function k(){return indexedDB.databases().finally(F)}E=setInterval(k,100),k()}).finally(function(){return clearInterval(E)}):Promise.resolve()).then(y)]).then(function(){return g(),o.onReadyBeingFired=[],X.resolve(ys(function(){return i.on.ready.fire(i.vip)})).then(function F(){if(0<o.onReadyBeingFired.length){var k=o.onReadyBeingFired.reduce(Et,ce);return o.onReadyBeingFired=[],X.resolve(ys(function(){return k(i.vip)})).then(F)}})}).finally(function(){o.openCanceller===u&&(o.onReadyBeingFired=null,o.isBeingOpened=!1)}).catch(function(F){o.dbOpenError=F;try{D&&D.abort()}catch{}return u===o.openCanceller&&i._close(),et(F)}).finally(function(){o.openComplete=!0,_()}).then(function(){var F;return v&&(F={},i.tables.forEach(function(k){k.schema.indexes.forEach(function(A){A.name&&(F["idb://".concat(i.name,"/").concat(k.name,"/").concat(A.name)]=new pt(-1/0,[[[]]]))}),F["idb://".concat(i.name,"/").concat(k.name,"/")]=F["idb://".concat(i.name,"/").concat(k.name,"/:dels")]=new pt(-1/0,[[[]]])}),dn(Xn).fire(F),Cs(F,!0)),i})}function Es(i){function o(p){return i.next(p)}var l=d(o),u=d(function(p){return i.throw(p)});function d(p){return function(E){var y=p(E),E=y.value;return y.done?E:E&&typeof E.then=="function"?E.then(l,u):f(E)?Promise.all(E).then(l,u):l(E)}}return d(o)()}function Ar(i,o,l){for(var u=f(i)?i.slice():[i],d=0;d<l;++d)u.push(o);return u}var Ra={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(i){return s(s({},i),{table:function(o){var l=i.table(o),u=l.schema,d={},p=[];function g(v,F,k){var A=Qn(v),j=d[A]=d[A]||[],P=v==null?0:typeof v=="string"?1:v.length,R=0<F,R=s(s({},k),{name:R?"".concat(A,"(virtual-from:").concat(k.name,")"):k.name,lowLevelIndex:k,isVirtual:R,keyTail:F,keyLength:P,extractKey:fs(v),unique:!R&&k.unique});return j.push(R),R.isPrimaryKey||p.push(R),1<P&&g(P===2?v[0]:v.slice(0,P-1),F+1,k),j.sort(function(I,L){return I.keyTail-L.keyTail}),R}o=g(u.primaryKey.keyPath,0,u.primaryKey),d[":id"]=[o];for(var y=0,E=u.indexes;y<E.length;y++){var _=E[y];g(_.keyPath,0,_)}function D(v){var F,k=v.query.index;return k.isVirtual?s(s({},v),{query:{index:k.lowLevelIndex,range:(F=v.query.range,k=k.keyTail,{type:F.type===1?2:F.type,lower:Ar(F.lower,F.lowerOpen?i.MAX_KEY:i.MIN_KEY,k),lowerOpen:!0,upper:Ar(F.upper,F.upperOpen?i.MIN_KEY:i.MAX_KEY,k),upperOpen:!0})}}):v}return s(s({},l),{schema:s(s({},u),{primaryKey:o,indexes:p,getIndexByKeyPath:function(v){return(v=d[Qn(v)])&&v[0]}}),count:function(v){return l.count(D(v))},query:function(v){return l.query(D(v))},openCursor:function(v){var F=v.query.index,k=F.keyTail,A=F.isVirtual,j=F.keyLength;return A?l.openCursor(D(v)).then(function(R){return R&&P(R)}):l.openCursor(v);function P(R){return Object.create(R,{continue:{value:function(I){I!=null?R.continue(Ar(I,v.reverse?i.MAX_KEY:i.MIN_KEY,k)):v.unique?R.continue(R.key.slice(0,j).concat(v.reverse?i.MIN_KEY:i.MAX_KEY,k)):R.continue()}},continuePrimaryKey:{value:function(I,L){R.continuePrimaryKey(Ar(I,i.MAX_KEY,k),L)}},primaryKey:{get:function(){return R.primaryKey}},key:{get:function(){var I=R.key;return j===1?I[0]:I.slice(0,j)}},value:{get:function(){return R.value}}})}}})}})}};function ks(i,o,l,u){return l=l||{},u=u||"",c(i).forEach(function(d){var p,g,y;C(o,d)?(p=i[d],g=o[d],typeof p=="object"&&typeof g=="object"&&p&&g?(y=x(p))!==x(g)?l[u+d]=o[d]:y==="Object"?ks(p,g,l,u+d+"."):p!==g&&(l[u+d]=o[d]):p!==g&&(l[u+d]=o[d])):l[u+d]=void 0}),c(o).forEach(function(d){C(i,d)||(l[u+d]=o[d])}),l}function Ss(i,o){return o.type==="delete"?o.keys:o.keys||o.values.map(i.extractKey)}var za={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(i){return s(s({},i),{table:function(o){var l=i.table(o),u=l.schema.primaryKey;return s(s({},l),{mutate:function(d){var p=Y.trans,g=p.table(o).hook,y=g.deleting,E=g.creating,_=g.updating;switch(d.type){case"add":if(E.fire===ce)break;return p._promise("readwrite",function(){return D(d)},!0);case"put":if(E.fire===ce&&_.fire===ce)break;return p._promise("readwrite",function(){return D(d)},!0);case"delete":if(y.fire===ce)break;return p._promise("readwrite",function(){return D(d)},!0);case"deleteRange":if(y.fire===ce)break;return p._promise("readwrite",function(){return(function v(F,k,A){return l.query({trans:F,values:!1,query:{index:u,range:k},limit:A}).then(function(j){var P=j.result;return D({type:"delete",keys:P,trans:F}).then(function(R){return 0<R.numFailures?Promise.reject(R.failures[0]):P.length<A?{failures:[],numFailures:0,lastResult:void 0}:v(F,s(s({},k),{lower:P[P.length-1],lowerOpen:!0}),A)})})})(d.trans,d.range,1e4)},!0)}return l.mutate(d);function D(v){var F,k,A,j=Y.trans,P=v.keys||Ss(u,v);if(!P)throw new Error("Keys missing");return(v=v.type==="add"||v.type==="put"?s(s({},v),{keys:P}):s({},v)).type!=="delete"&&(v.values=n([],v.values)),v.keys&&(v.keys=n([],v.keys)),F=l,A=P,((k=v).type==="add"?Promise.resolve([]):F.getMany({trans:k.trans,keys:A,cache:"immutable"})).then(function(R){var I=P.map(function(L,M){var U,Q,W,V=R[M],ee={onerror:null,onsuccess:null};return v.type==="delete"?y.fire.call(ee,L,V,j):v.type==="add"||V===void 0?(U=E.fire.call(ee,L,v.values[M],j),L==null&&U!=null&&(v.keys[M]=L=U,u.outbound||ze(v.values[M],u.keyPath,L))):(U=ks(V,v.values[M]),(Q=_.fire.call(ee,U,L,V,j))&&(W=v.values[M],Object.keys(Q).forEach(function(G){C(W,G)?W[G]=Q[G]:ze(W,G,Q[G])}))),ee});return l.mutate(v).then(function(L){for(var M=L.failures,U=L.results,Q=L.numFailures,L=L.lastResult,W=0;W<P.length;++W){var V=(U||P)[W],ee=I[W];V==null?ee.onerror&&ee.onerror(M[W]):ee.onsuccess&&ee.onsuccess(v.type==="put"&&R[W]?v.values[W]:V)}return{failures:M,results:U,numFailures:Q,lastResult:L}}).catch(function(L){return I.forEach(function(M){return M.onerror&&M.onerror(L)}),Promise.reject(L)})})}}})}})}};function _i(i,o,l){try{if(!o||o.keys.length<i.length)return null;for(var u=[],d=0,p=0;d<o.keys.length&&p<i.length;++d)$e(o.keys[d],i[p])===0&&(u.push(l?T(o.values[d]):o.values[d]),++p);return u.length===i.length?u:null}catch{return null}}var Ia={stack:"dbcore",level:-1,create:function(i){return{table:function(o){var l=i.table(o);return s(s({},l),{getMany:function(u){if(!u.cache)return l.getMany(u);var d=_i(u.keys,u.trans._cache,u.cache==="clone");return d?X.resolve(d):l.getMany(u).then(function(p){return u.trans._cache={keys:u.keys,values:u.cache==="clone"?T(p):p},p})},mutate:function(u){return u.type!=="add"&&(u.trans._cache=null),l.mutate(u)}})}}}};function Pi(i,o){return i.trans.mode==="readonly"&&!!i.subscr&&!i.trans.explicit&&i.trans.db._options.cache!=="disabled"&&!o.schema.primaryKey.outbound}function Ai(i,o){switch(i){case"query":return o.values&&!o.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var La={stack:"dbcore",level:0,name:"Observability",create:function(i){var o=i.schema.name,l=new pt(i.MIN_KEY,i.MAX_KEY);return s(s({},i),{transaction:function(u,d,p){if(Y.subscr&&d!=="readonly")throw new Z.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Y.querier));return i.transaction(u,d,p)},table:function(u){var d=i.table(u),p=d.schema,g=p.primaryKey,v=p.indexes,y=g.extractKey,E=g.outbound,_=g.autoIncrement&&v.filter(function(k){return k.compound&&k.keyPath.includes(g.keyPath)}),D=s(s({},d),{mutate:function(k){function A(G){return G="idb://".concat(o,"/").concat(u,"/").concat(G),L[G]||(L[G]=new pt)}var j,P,R,I=k.trans,L=k.mutatedParts||(k.mutatedParts={}),M=A(""),U=A(":dels"),Q=k.type,ee=k.type==="deleteRange"?[k.range]:k.type==="delete"?[k.keys]:k.values.length<50?[Ss(g,k).filter(function(G){return G}),k.values]:[],W=ee[0],V=ee[1],ee=k.trans._cache;return f(W)?(M.addKeys(W),(ee=Q==="delete"||W.length===V.length?_i(W,ee):null)||U.addKeys(W),(ee||V)&&(j=A,P=ee,R=V,p.indexes.forEach(function(G){var se=j(G.name||"");function me(ye){return ye!=null?G.extractKey(ye):null}function be(ye){return G.multiEntry&&f(ye)?ye.forEach(function(_t){return se.addKey(_t)}):se.addKey(ye)}(P||R).forEach(function(ye,mt){var pe=P&&me(P[mt]),mt=R&&me(R[mt]);$e(pe,mt)!==0&&(pe!=null&&be(pe),mt!=null&&be(mt))})}))):W?(V={from:(V=W.lower)!==null&&V!==void 0?V:i.MIN_KEY,to:(V=W.upper)!==null&&V!==void 0?V:i.MAX_KEY},U.add(V),M.add(V)):(M.add(l),U.add(l),p.indexes.forEach(function(G){return A(G.name).add(l)})),d.mutate(k).then(function(G){return!W||k.type!=="add"&&k.type!=="put"||(M.addKeys(G.results),_&&_.forEach(function(se){for(var me=k.values.map(function(pe){return se.extractKey(pe)}),be=se.keyPath.findIndex(function(pe){return pe===g.keyPath}),ye=0,_t=G.results.length;ye<_t;++ye)me[ye][be]=G.results[ye];A(se.name).addKeys(me)})),I.mutatedParts=_r(I.mutatedParts||{},L),G})}}),v=function(A){var j=A.query,A=j.index,j=j.range;return[A,new pt((A=j.lower)!==null&&A!==void 0?A:i.MIN_KEY,(j=j.upper)!==null&&j!==void 0?j:i.MAX_KEY)]},F={get:function(k){return[g,new pt(k.key)]},getMany:function(k){return[g,new pt().addKeys(k.keys)]},count:v,query:v,openCursor:v};return c(F).forEach(function(k){D[k]=function(A){var j=Y.subscr,P=!!j,R=Pi(Y,d)&&Ai(k,A)?A.obsSet={}:j;if(P){var I=function(V){return V="idb://".concat(o,"/").concat(u,"/").concat(V),R[V]||(R[V]=new pt)},L=I(""),M=I(":dels"),j=F[k](A),P=j[0],j=j[1];if((k==="query"&&P.isPrimaryKey&&!A.values?M:I(P.name||"")).add(j),!P.isPrimaryKey){if(k!=="count"){var U=k==="query"&&E&&A.values&&d.query(s(s({},A),{values:!1}));return d[k].apply(this,arguments).then(function(V){if(k==="query"){if(E&&A.values)return U.then(function(me){return me=me.result,L.addKeys(me),V});var ee=A.values?V.result.map(y):V.result;(A.values?L:M).addKeys(ee)}else if(k==="openCursor"){var G=V,se=A.values;return G&&Object.create(G,{key:{get:function(){return M.addKey(G.primaryKey),G.key}},primaryKey:{get:function(){var me=G.primaryKey;return M.addKey(me),me}},value:{get:function(){return se&&L.addKey(G.primaryKey),G.value}}})}return V})}M.add(l)}}return d[k].apply(this,arguments)}}),D}})}};function Di(i,o,l){if(l.numFailures===0)return o;if(o.type==="deleteRange")return null;var u=o.keys?o.keys.length:"values"in o&&o.values?o.values.length:1;return l.numFailures===u?null:(o=s({},o),f(o.keys)&&(o.keys=o.keys.filter(function(d,p){return!(p in l.failures)})),"values"in o&&f(o.values)&&(o.values=o.values.filter(function(d,p){return!(p in l.failures)})),o)}function _s(i,o){return l=i,((u=o).lower===void 0||(u.lowerOpen?0<$e(l,u.lower):0<=$e(l,u.lower)))&&(i=i,(o=o).upper===void 0||(o.upperOpen?$e(i,o.upper)<0:$e(i,o.upper)<=0));var l,u}function Ti(i,o,F,u,d,p){if(!F||F.length===0)return i;var g=o.query.index,y=g.multiEntry,E=o.query.range,_=u.schema.primaryKey.extractKey,D=g.extractKey,v=(g.lowLevelIndex||g).extractKey,F=F.reduce(function(k,A){var j=k,P=[];if(A.type==="add"||A.type==="put")for(var R=new pt,I=A.values.length-1;0<=I;--I){var L,M=A.values[I],U=_(M);R.hasKey(U)||(L=D(M),(y&&f(L)?L.some(function(G){return _s(G,E)}):_s(L,E))&&(R.addKey(U),P.push(M)))}switch(A.type){case"add":var Q=new pt().addKeys(o.values?k.map(function(se){return _(se)}):k),j=k.concat(o.values?P.filter(function(se){return se=_(se),!Q.hasKey(se)&&(Q.addKey(se),!0)}):P.map(function(se){return _(se)}).filter(function(se){return!Q.hasKey(se)&&(Q.addKey(se),!0)}));break;case"put":var W=new pt().addKeys(A.values.map(function(se){return _(se)}));j=k.filter(function(se){return!W.hasKey(o.values?_(se):se)}).concat(o.values?P:P.map(function(se){return _(se)}));break;case"delete":var V=new pt().addKeys(A.keys);j=k.filter(function(se){return!V.hasKey(o.values?_(se):se)});break;case"deleteRange":var ee=A.range;j=k.filter(function(se){return!_s(_(se),ee)})}return j},i);return F===i?i:(F.sort(function(k,A){return $e(v(k),v(A))||$e(_(k),_(A))}),o.limit&&o.limit<1/0&&(F.length>o.limit?F.length=o.limit:i.length===o.limit&&F.length<o.limit&&(d.dirty=!0)),p?Object.freeze(F):F)}function ji(i,o){return $e(i.lower,o.lower)===0&&$e(i.upper,o.upper)===0&&!!i.lowerOpen==!!o.lowerOpen&&!!i.upperOpen==!!o.upperOpen}function Ba(i,o){return(function(l,u,d,p){if(l===void 0)return u!==void 0?-1:0;if(u===void 0)return 1;if((u=$e(l,u))===0){if(d&&p)return 0;if(d)return 1;if(p)return-1}return u})(i.lower,o.lower,i.lowerOpen,o.lowerOpen)<=0&&0<=(function(l,u,d,p){if(l===void 0)return u!==void 0?1:0;if(u===void 0)return-1;if((u=$e(l,u))===0){if(d&&p)return 0;if(d)return-1;if(p)return 1}return u})(i.upper,o.upper,i.upperOpen,o.upperOpen)}function Ma(i,o,l,u){i.subscribers.add(l),u.addEventListener("abort",function(){var d,p;i.subscribers.delete(l),i.subscribers.size===0&&(d=i,p=o,setTimeout(function(){d.subscribers.size===0&&N(p,d)},3e3))})}var Na={stack:"dbcore",level:0,name:"Cache",create:function(i){var o=i.schema.name;return s(s({},i),{transaction:function(l,u,d){var p,g,y=i.transaction(l,u,d);return u==="readwrite"&&(g=(p=new AbortController).signal,d=function(E){return function(){if(p.abort(),u==="readwrite"){for(var _=new Set,D=0,v=l;D<v.length;D++){var F=v[D],k=vn["idb://".concat(o,"/").concat(F)];if(k){var A=i.table(F),j=k.optimisticOps.filter(function(se){return se.trans===y});if(y._explicit&&E&&y.mutatedParts)for(var P=0,R=Object.values(k.queries.query);P<R.length;P++)for(var I=0,L=(Q=R[P]).slice();I<L.length;I++)vs((W=L[I]).obsSet,y.mutatedParts)&&(N(Q,W),W.subscribers.forEach(function(se){return _.add(se)}));else if(0<j.length){k.optimisticOps=k.optimisticOps.filter(function(se){return se.trans!==y});for(var M=0,U=Object.values(k.queries.query);M<U.length;M++)for(var Q,W,V,ee=0,G=(Q=U[M]).slice();ee<G.length;ee++)(W=G[ee]).res!=null&&y.mutatedParts&&(E&&!W.dirty?(V=Object.isFrozen(W.res),V=Ti(W.res,W.req,j,A,W,V),W.dirty?(N(Q,W),W.subscribers.forEach(function(se){return _.add(se)})):V!==W.res&&(W.res=V,W.promise=X.resolve({result:V}))):(W.dirty&&N(Q,W),W.subscribers.forEach(function(se){return _.add(se)})))}}}_.forEach(function(se){return se()})}}},y.addEventListener("abort",d(!1),{signal:g}),y.addEventListener("error",d(!1),{signal:g}),y.addEventListener("complete",d(!0),{signal:g})),y},table:function(l){var u=i.table(l),d=u.schema.primaryKey;return s(s({},u),{mutate:function(p){var g=Y.trans;if(d.outbound||g.db._options.cache==="disabled"||g.explicit||g.idbtrans.mode!=="readwrite")return u.mutate(p);var y=vn["idb://".concat(o,"/").concat(l)];return y?(g=u.mutate(p),p.type!=="add"&&p.type!=="put"||!(50<=p.values.length||Ss(d,p).some(function(E){return E==null}))?(y.optimisticOps.push(p),p.mutatedParts&&Pr(p.mutatedParts),g.then(function(E){0<E.numFailures&&(N(y.optimisticOps,p),(E=Di(0,p,E))&&y.optimisticOps.push(E),p.mutatedParts&&Pr(p.mutatedParts))}),g.catch(function(){N(y.optimisticOps,p),p.mutatedParts&&Pr(p.mutatedParts)})):g.then(function(E){var _=Di(0,s(s({},p),{values:p.values.map(function(D,v){var F;return E.failures[v]?D:(D=(F=d.keyPath)!==null&&F!==void 0&&F.includes(".")?T(D):s({},D),ze(D,d.keyPath,E.results[v]),D)})}),E);y.optimisticOps.push(_),queueMicrotask(function(){return p.mutatedParts&&Pr(p.mutatedParts)})}),g):u.mutate(p)},query:function(p){if(!Pi(Y,u)||!Ai("query",p))return u.query(p);var g=((_=Y.trans)===null||_===void 0?void 0:_.db._options.cache)==="immutable",v=Y,y=v.requery,E=v.signal,_=(function(A,j,P,R){var I=vn["idb://".concat(A,"/").concat(j)];if(!I)return[];if(!(j=I.queries[P]))return[null,!1,I,null];var L=j[(R.query?R.query.index.name:null)||""];if(!L)return[null,!1,I,null];switch(P){case"query":var M=L.find(function(U){return U.req.limit===R.limit&&U.req.values===R.values&&ji(U.req.query.range,R.query.range)});return M?[M,!0,I,L]:[L.find(function(U){return("limit"in U.req?U.req.limit:1/0)>=R.limit&&(!R.values||U.req.values)&&Ba(U.req.query.range,R.query.range)}),!1,I,L];case"count":return M=L.find(function(U){return ji(U.req.query.range,R.query.range)}),[M,!!M,I,L]}})(o,l,"query",p),D=_[0],v=_[1],F=_[2],k=_[3];return D&&v?D.obsSet=p.obsSet:(v=u.query(p).then(function(A){var j=A.result;if(D&&(D.res=j),g){for(var P=0,R=j.length;P<R;++P)Object.freeze(j[P]);Object.freeze(j)}else A.result=T(j);return A}).catch(function(A){return k&&D&&N(k,D),Promise.reject(A)}),D={obsSet:p.obsSet,promise:v,subscribers:new Set,type:"query",req:p,dirty:!1},k?k.push(D):(k=[D],(F=F||(vn["idb://".concat(o,"/").concat(l)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[p.query.index.name||""]=k)),Ma(D,k,y,E),D.promise.then(function(A){return{result:Ti(A.result,p,F?.optimisticOps,u,D,g)}})}})}})}};function Dr(i,o){return new Proxy(i,{get:function(l,u,d){return u==="db"?o:Reflect.get(l,u,d)}})}var Zt=(tt.prototype.version=function(i){if(isNaN(i)||i<.1)throw new Z.Type("Given version is not a positive number");if(i=Math.round(10*i)/10,this.idbdb||this._state.isBeingOpened)throw new Z.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,i);var o=this._versions,l=o.filter(function(u){return u._cfg.version===i})[0];return l||(l=new this.Version(i),o.push(l),o.sort(Da),l.stores({}),this._state.autoSchema=!1,l)},tt.prototype._whenReady=function(i){var o=this;return this.idbdb&&(this._state.openComplete||Y.letThrough||this._vip)?i():new X(function(l,u){if(o._state.openComplete)return u(new Z.DatabaseClosed(o._state.dbOpenError));if(!o._state.isBeingOpened){if(!o._state.autoOpen)return void u(new Z.DatabaseClosed);o.open().catch(ce)}o._state.dbReadyPromise.then(l,u)}).then(i)},tt.prototype.use=function(i){var o=i.stack,l=i.create,u=i.level,d=i.name;return d&&this.unuse({stack:o,name:d}),i=this._middlewares[o]||(this._middlewares[o]=[]),i.push({stack:o,create:l,level:u??10,name:d}),i.sort(function(p,g){return p.level-g.level}),this},tt.prototype.unuse=function(i){var o=i.stack,l=i.name,u=i.create;return o&&this._middlewares[o]&&(this._middlewares[o]=this._middlewares[o].filter(function(d){return u?d.create!==u:!!l&&d.name!==l})),this},tt.prototype.open=function(){var i=this;return bn(Ye,function(){return Oa(i)})},tt.prototype._close=function(){var i=this._state,o=zn.indexOf(this);if(0<=o&&zn.splice(o,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}i.isBeingOpened||(i.dbReadyPromise=new X(function(l){i.dbReadyResolve=l}),i.openCanceller=new X(function(l,u){i.cancelOpen=u}))},tt.prototype.close=function(l){var o=(l===void 0?{disableAutoOpen:!0}:l).disableAutoOpen,l=this._state;o?(l.isBeingOpened&&l.cancelOpen(new Z.DatabaseClosed),this._close(),l.autoOpen=!1,l.dbOpenError=new Z.DatabaseClosed):(this._close(),l.autoOpen=this._options.autoOpen||l.isBeingOpened,l.openComplete=!1,l.dbOpenError=null)},tt.prototype.delete=function(i){var o=this;i===void 0&&(i={disableAutoOpen:!0});var l=0<arguments.length&&typeof arguments[0]!="object",u=this._state;return new X(function(d,p){function g(){o.close(i);var y=o._deps.indexedDB.deleteDatabase(o.name);y.onsuccess=Le(function(){var E,_,D;E=o._deps,_=o.name,D=E.indexedDB,E=E.IDBKeyRange,bs(D)||_===mr||gs(D,E).delete(_).catch(ce),d()}),y.onerror=Ht(p),y.onblocked=o._fireOnBlocked}if(l)throw new Z.InvalidArgument("Invalid closeOptions argument to db.delete()");u.isBeingOpened?u.dbReadyPromise.then(g):g()})},tt.prototype.backendDB=function(){return this.idbdb},tt.prototype.isOpen=function(){return this.idbdb!==null},tt.prototype.hasBeenClosed=function(){var i=this._state.dbOpenError;return i&&i.name==="DatabaseClosed"},tt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},tt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(tt.prototype,"tables",{get:function(){var i=this;return c(this._allTables).map(function(o){return i._allTables[o]})},enumerable:!1,configurable:!0}),tt.prototype.transaction=function(){var i=function(o,l,u){var d=arguments.length;if(d<2)throw new Z.InvalidArgument("Too few arguments");for(var p=new Array(d-1);--d;)p[d-1]=arguments[d];return u=p.pop(),[o,Xt(p),u]}.apply(this,arguments);return this._transaction.apply(this,i)},tt.prototype._transaction=function(i,o,l){var u=this,d=Y.trans;d&&d.db===this&&i.indexOf("!")===-1||(d=null);var p,g,y=i.indexOf("?")!==-1;i=i.replace("!","").replace("?","");try{if(g=o.map(function(_){if(_=_ instanceof u.Table?_.name:_,typeof _!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return _}),i=="r"||i===ss)p=ss;else{if(i!="rw"&&i!=is)throw new Z.InvalidArgument("Invalid transaction mode: "+i);p=is}if(d){if(d.mode===ss&&p===is){if(!y)throw new Z.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");d=null}d&&g.forEach(function(_){if(d&&d.storeNames.indexOf(_)===-1){if(!y)throw new Z.SubTransaction("Table "+_+" not included in parent transaction.");d=null}}),y&&d&&!d.active&&(d=null)}}catch(_){return d?d._promise(null,function(D,v){v(_)}):et(_)}var E=function _(D,v,F,k,A){return X.resolve().then(function(){var j=Y.transless||Y,P=D._createTransaction(v,F,D._dbSchema,k);if(P.explicit=!0,j={trans:P,transless:j},k)P.idbtrans=k.idbtrans;else try{P.create(),P.idbtrans._explicit=!0,D._state.PR1398_maxLoop=3}catch(L){return L.name===He.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return _(D,v,F,null,A)})):et(L)}var R,I=rt(A);return I&&Rn(),j=X.follow(function(){var L;(R=A.call(P,P))&&(I?(L=ln.bind(null,null),R.then(L,L)):typeof R.next=="function"&&typeof R.throw=="function"&&(R=Es(R)))},j),(R&&typeof R.then=="function"?X.resolve(R).then(function(L){return P.active?L:et(new Z.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):j.then(function(){return R})).then(function(L){return k&&P._resolve(),P._completion.then(function(){return L})}).catch(function(L){return P._reject(L),et(L)})})}.bind(null,this,p,g,d,l);return d?d._promise(p,E,"lock"):Y.trans?bn(Y.transless,function(){return u._whenReady(E)}):this._whenReady(E)},tt.prototype.table=function(i){if(!C(this._allTables,i))throw new Z.InvalidTable("Table ".concat(i," does not exist"));return this._allTables[i]},tt);function tt(i,o){var l=this;this._middlewares={},this.verno=0;var u=tt.dependencies;this._options=o=s({addons:tt.addons,autoOpen:!0,indexedDB:u.indexedDB,IDBKeyRange:u.IDBKeyRange,cache:"cloned"},o),this._deps={indexedDB:o.indexedDB,IDBKeyRange:o.IDBKeyRange},u=o.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var d,p,g,y,E,_={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ce,dbReadyPromise:null,cancelOpen:ce,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:o.autoOpen};_.dbReadyPromise=new X(function(v){_.dbReadyResolve=v}),_.openCanceller=new X(function(v,F){_.cancelOpen=F}),this._state=_,this.name=i,this.on=Hn(this,"populate","blocked","versionchange","close",{ready:[Et,ce]}),this.on.ready.subscribe=Xe(this.on.ready.subscribe,function(v){return function(F,k){tt.vip(function(){var A,j=l._state;j.openComplete?(j.dbOpenError||X.resolve().then(F),k&&v(F)):j.onReadyBeingFired?(j.onReadyBeingFired.push(F),k&&v(F)):(v(F),A=l,k||v(function P(){A.on.ready.unsubscribe(F),A.on.ready.unsubscribe(P)}))})}}),this.Collection=(d=this,Kn(Ca.prototype,function(R,P){this.db=d;var k=ci,A=null;if(P)try{k=P()}catch(I){A=I}var j=R._ctx,P=j.table,R=P.hook.reading.fire;this._ctx={table:P,index:j.index,isPrimKey:!j.index||P.schema.primKey.keyPath&&j.index===P.schema.primKey.name,range:k,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:A,or:j.or,valueMapper:R!==ge?R:null}})),this.Table=(p=this,Kn(hi.prototype,function(v,F,k){this.db=p,this._tx=k,this.name=v,this.schema=F,this.hook=p._allTables[v]?p._allTables[v].hook:Hn(null,{creating:[Ve,ce],reading:[Ct,ge],updating:[zt,ce],deleting:[sn,ce]})})),this.Transaction=(g=this,Kn(Sa.prototype,function(v,F,k,A,j){var P=this;this.db=g,this.mode=v,this.storeNames=F,this.schema=k,this.chromeTransactionDurability=A,this.idbtrans=null,this.on=Hn(this,"complete","error","abort"),this.parent=j||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new X(function(R,I){P._resolve=R,P._reject=I}),this._completion.then(function(){P.active=!1,P.on.complete.fire()},function(R){var I=P.active;return P.active=!1,P.on.error.fire(R),P.parent?P.parent._reject(R):I&&P.idbtrans&&P.idbtrans.abort(),et(R)})})),this.Version=(y=this,Kn(Fa.prototype,function(v){this.db=y,this._cfg={version:v,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(E=this,Kn(yi.prototype,function(v,F,k){if(this.db=E,this._ctx={table:v,index:F===":id"?null:F,or:k},this._cmp=this._ascending=$e,this._descending=function(A,j){return $e(j,A)},this._max=function(A,j){return 0<$e(A,j)?A:j},this._min=function(A,j){return $e(A,j)<0?A:j},this._IDBKeyRange=E._deps.IDBKeyRange,!this._IDBKeyRange)throw new Z.MissingAPI})),this.on("versionchange",function(v){0<v.newVersion?console.warn("Another connection wants to upgrade database '".concat(l.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(l.name,"'. Closing db now to resume the delete request.")),l.close({disableAutoOpen:!1})}),this.on("blocked",function(v){!v.newVersion||v.newVersion<v.oldVersion?console.warn("Dexie.delete('".concat(l.name,"') was blocked")):console.warn("Upgrade '".concat(l.name,"' blocked by other connection holding version ").concat(v.oldVersion/10))}),this._maxKey=Gn(o.IDBKeyRange),this._createTransaction=function(v,F,k,A){return new l.Transaction(v,F,k,l._options.chromeTransactionDurability,A)},this._fireOnBlocked=function(v){l.on("blocked").fire(v),zn.filter(function(F){return F.name===l.name&&F!==l&&!F._state.vcFired}).map(function(F){return F.on("versionchange").fire(v)})},this.use(Ia),this.use(Na),this.use(La),this.use(Ra),this.use(za);var D=new Proxy(this,{get:function(v,F,k){if(F==="_vip")return!0;if(F==="table")return function(j){return Dr(l.table(j),D)};var A=Reflect.get(v,F,k);return A instanceof hi?Dr(A,D):F==="tables"?A.map(function(j){return Dr(j,D)}):F==="_createTransaction"?function(){return Dr(A.apply(this,arguments),D)}:A}});this.vip=D,u.forEach(function(v){return v(l)})}var Tr,Tt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",qa=(Ps.prototype.subscribe=function(i,o,l){return this._subscribe(i&&typeof i!="function"?i:{next:i,error:o,complete:l})},Ps.prototype[Tt]=function(){return this},Ps);function Ps(i){this._subscribe=i}try{Tr={indexedDB:a.indexedDB||a.mozIndexedDB||a.webkitIndexedDB||a.msIndexedDB,IDBKeyRange:a.IDBKeyRange||a.webkitIDBKeyRange}}catch{Tr={indexedDB:null,IDBKeyRange:null}}function Fi(i){var o,l=!1,u=new qa(function(d){var p=rt(i),g,y=!1,E={},_={},D={get closed(){return y},unsubscribe:function(){y||(y=!0,g&&g.abort(),v&&dn.storagemutated.unsubscribe(k))}};d.start&&d.start(D);var v=!1,F=function(){return rs(A)},k=function(j){_r(E,j),vs(_,E)&&F()},A=function(){var j,P,R;!y&&Tr.indexedDB&&(E={},j={},g&&g.abort(),g=new AbortController,R=(function(I){var L=Te();try{p&&Rn();var M=an(i,I);return M=p?M.finally(ln):M}finally{L&&qe()}})(P={subscr:j,signal:g.signal,requery:F,querier:i,trans:null}),Promise.resolve(R).then(function(I){l=!0,o=I,y||P.signal.aborted||(E={},(function(L){for(var M in L)if(C(L,M))return;return 1})(_=j)||v||(dn(Xn,k),v=!0),rs(function(){return!y&&d.next&&d.next(I)}))},function(I){l=!1,["DatabaseClosedError","AbortError"].includes(I?.name)||y||rs(function(){y||d.error&&d.error(I)})}))};return setTimeout(F,0),D});return u.hasValue=function(){return l},u.getValue=function(){return o},u}var xn=Zt;function As(i){var o=fn;try{fn=!0,dn.storagemutated.fire(i),Cs(i,!0)}finally{fn=o}}z(xn,s(s({},Oe),{delete:function(i){return new xn(i,{addons:[]}).delete()},exists:function(i){return new xn(i,{addons:[]}).open().then(function(o){return o.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(i){try{return o=xn.dependencies,l=o.indexedDB,o=o.IDBKeyRange,(bs(l)?Promise.resolve(l.databases()).then(function(u){return u.map(function(d){return d.name}).filter(function(d){return d!==mr})}):gs(l,o).toCollection().primaryKeys()).then(i)}catch{return et(new Z.MissingAPI)}var o,l},defineClass:function(){return function(i){m(this,i)}},ignoreTransaction:function(i){return Y.trans?bn(Y.transless,i):i()},vip:ys,async:function(i){return function(){try{var o=Es(i.apply(this,arguments));return o&&typeof o.then=="function"?o:X.resolve(o)}catch(l){return et(l)}}},spawn:function(i,o,l){try{var u=Es(i.apply(l,o||[]));return u&&typeof u.then=="function"?u:X.resolve(u)}catch(d){return et(d)}},currentTransaction:{get:function(){return Y.trans||null}},waitFor:function(i,o){return o=X.resolve(typeof i=="function"?xn.ignoreTransaction(i):i).timeout(o||6e4),Y.trans?Y.trans.waitFor(o):o},Promise:X,debug:{get:function(){return De},set:function(i){Me(i)}},derive:te,extend:m,props:z,override:Xe,Events:Hn,on:dn,liveQuery:Fi,extendObservabilitySet:_r,getByKeyPath:Ce,setByKeyPath:ze,delByKeyPath:function(i,o){typeof o=="string"?ze(i,o,void 0):"length"in o&&[].map.call(o,function(l){ze(i,l,void 0)})},shallowClone:vt,deepClone:T,getObjectDiff:ks,cmp:$e,asap:de,minKey:-1/0,addons:[],connections:zn,errnames:He,dependencies:Tr,cache:vn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(i){return parseInt(i)}).reduce(function(i,o,l){return i+o/Math.pow(10,2*l)})})),xn.maxKey=Gn(xn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(dn(Xn,function(i){fn||(i=new CustomEvent(cs,{detail:i}),fn=!0,dispatchEvent(i),fn=!1)}),addEventListener(cs,function(i){i=i.detail,fn||As(i)}));var Bn,fn=!1,Oi=function(){};return typeof BroadcastChannel<"u"&&((Oi=function(){(Bn=new BroadcastChannel(cs)).onmessage=function(i){return i.data&&As(i.data)}})(),typeof Bn.unref=="function"&&Bn.unref(),dn(Xn,function(i){fn||Bn.postMessage(i)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(i){if(!Zt.disableBfCache&&i.persisted){De&&console.debug("Dexie: handling persisted pagehide"),Bn?.close();for(var o=0,l=zn;o<l.length;o++)l[o].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(i){!Zt.disableBfCache&&i.persisted&&(De&&console.debug("Dexie: handling persisted pageshow"),Oi(),As({all:new pt(-1/0,[[]])}))})),X.rejectionMapper=function(i,o){return!i||i instanceof Be||i instanceof TypeError||i instanceof SyntaxError||!i.name||!Ke[i.name]?i:(o=new Ke[i.name](o||i.message,i),"stack"in i&&q(o,"stack",{get:function(){return this.inner.stack}}),o)},Me(De),s(Zt,Object.freeze({__proto__:null,Dexie:Zt,liveQuery:Fi,Entity:ui,cmp:$e,PropModSymbol:Jt,PropModification:Vn,replacePrefix:function(i,o){return new Vn({replacePrefix:[i,o]})},add:function(i){return new Vn({add:i})},remove:function(i){return new Vn({remove:i})},default:Zt,RangeSet:pt,mergeRanges:Zn,rangesOverlap:Ci}),{default:Zt}),Zt})})(Br)),Br.exports}var kl=El();const Bs=$l(kl),Yi=Symbol.for("Dexie"),Ur=globalThis[Yi]||(globalThis[Yi]=Bs);if(Bs.semVer!==Ur.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Bs.semVer} and ${Ur.semVer}`);const{liveQuery:Fo,mergeRanges:Uf,rangesOverlap:Wf,RangeSet:Hf,cmp:Kf,Entity:Vf,PropModSymbol:Yf,PropModification:Xf,replacePrefix:Gf,add:Qf,remove:Jf}=Ur,Sl="easydb";let Fr=null;function _l(){if(Fr)return Fr;const e=new Ur(Sl);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),Fr={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins")},Fr}function Or(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(s=>Oo(s,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const s=Fo(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>s.unsubscribe()}}}function Pl(e,t){return{async find(r){const s=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return s.toArray();const n=Object.entries(r);return s.filter(a=>Oo(a,n)).toArray()},async findOne(r){const s=await e.get(r);return s&&s.tableId===t?s:null},async insert(r){const s={...r,tableId:t};return await e.add(s),s},async bulkInsert(r){if(r.length===0)return[];const s=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(s),s},async upsert(r){const s={...r,tableId:t};return await e.put(s),s},async patch(r,s){if(await e.update(r,s)===0)throw new Error(`row patch: no row ${r}`);const a=await e.get(r);if(!a)throw new Error(`row patch: row ${r} vanished after update`);return a},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=Fo(()=>e.where("tableId").equals(t).toArray()).subscribe({next:a=>r(a)});return()=>n.unsubscribe()}}}function Oo(e,t){for(const[r,s]of t)if(e[r]!==s)return!1;return!0}function Al(e){return{workspaces:Or(e.workspaces),tables:Or(e.tables),settings:Or(e.settings),plugins:Or(e.plugins),rows:t=>Pl(e.rows,t)}}function Dl(e){const{base:t,providers:r,tableById:s,ctx:n}=e,a=new Map;return{...t,rows(c){const f=s(c),m=f?.source;if(m){const $=r.get(m.type);if($){const S=JSON.stringify(m),C=a.get(c);if(C&&C.key===S)return C.coll;const z=$.create(f,n);return a.set(c,{key:S,coll:z}),z}}return a.delete(c),t.rows(c)}}}function Tl(){const e=new Map;return{on(t,r){let s=e.get(t);return s||(s=new Set,e.set(t,s)),s.add(r),()=>{s.delete(r)}},emit(t,r){const s=e.get(t);if(s)for(const n of s)try{n(r)}catch(a){console.error(`[event:${String(t)}] listener threw`,a)}}}}const pn=at`
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
`;function Fn(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const Xi=new WeakSet;function mn(e,t){if(Xi.has(t))return;Xi.add(t);let r=0,s=0,n=0,a=0,c=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",m=>{if(m.target.closest("button, input, textarea, select, a, label"))return;c=!0,r=m.clientX,s=m.clientY;const S=e.getBoundingClientRect();n=S.left,a=S.top,t.setPointerCapture(m.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",m=>{if(!c)return;const $=m.clientX-r,S=m.clientY-s,C=-e.offsetWidth+80,z=window.innerWidth-80,B=0,q=window.innerHeight-40,te=Math.max(C,Math.min(z,n+$)),oe=Math.max(B,Math.min(q,a+S));e.style.position="fixed",e.style.left=`${te}px`,e.style.top=`${oe}px`,e.style.margin="0"});const f=m=>{if(c){c=!1;try{t.releasePointerCapture(m.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",f),t.addEventListener("pointercancel",f)}var jl=Object.defineProperty,Fl=Object.getOwnPropertyDescriptor,Ro=(e,t,r,s)=>{for(var n=s>1?void 0:s?Fl(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&jl(t,r,n),n};let jt=class extends nt{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),jt.instance=this}disconnectedCallback(){super.disconnectedCallback(),jt.instance===this&&(jt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&mn(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(s=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:s}})}choice(e,t,r="Choose"){return this.enqueue(s=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:s}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return H`
      <dialog @cancel=${this.onCancel} @keydown=${Fn}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):Re}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return H`
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
        `;case"prompt":return H`
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
        `;case"choice":return H`
          <div class="dialog-header">
            <h2>${e.title}</h2>
            <div class="header-actions">
              <button class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
            </div>
          </div>
          <div class="dialog-body">
            ${e.message?H`<p class="message">${e.message}</p>`:Re}
            <div class="choices">
              ${e.options.map(t=>H`<button class="choice" @click=${()=>this.closeAndResolve(t)}>
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
    `];Ro([J()],jt.prototype,"current",2);jt=Ro([dt("host-dialogs")],jt);const nn=at`
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
`;var Ol=Object.defineProperty,Rl=Object.getOwnPropertyDescriptor,zo=(e,t,r,s)=>{for(var n=s>1?void 0:s?Rl(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Ol(t,r,n),n};let en=class extends nt{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),en.instance=this}disconnectedCallback(){super.disconnectedCallback(),en.instance===this&&(en.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const s=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),s)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return H`
      ${this.toasts.map(e=>H`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${Il(e.kind)}</span>
            <span class="body">
              ${e.title?H`<strong>${e.title}</strong>`:""}${zl(e.message)}
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
    `];zo([J()],en.prototype,"toasts",2);en=zo([dt("toast-host")],en);function zl(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let s=0,n;for(;(n=t.exec(e))!==null;)n.index>s&&r.push(e.slice(s,n.index)),r.push({url:n[0]}),s=n.index+n[0].length;return s<e.length&&r.push(e.slice(s)),r.length===0?e:r.map(a=>typeof a=="string"?a:H`<a href=${a.url} target="_blank" rel="noopener noreferrer">${a.url}</a>`)}function Il(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Ll(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map}}function En(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function js(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function Bl(e){return{registerHeaderButton:t=>En(e.headerButtons,t),registerFooterButton:t=>En(e.footerButtons,t),registerTableButton:t=>En(e.tableButtons,t),registerImporter:t=>En(e.importers,t),registerExporter:t=>En(e.exporters,t),registerUrlSource:t=>En(e.urlSources,t),registerDropHandler:t=>En(e.dropHandlers,t),registerCellRenderer:(t,r)=>js(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>js(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>js(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},dialogs:Ml}}const Ml={async alert(e,t){const r=jt.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=jt.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const s=jt.instance;return s?s.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const s=jt.instance;if(s)return s.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=en.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}};function Nl(e){const t=Bl(e.registries),r=e.registries.rowSources,s=a=>(r.set(a.type,a),()=>{r.get(a.type)===a&&r.delete(a.type)}),n={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:n,registerRowSource:s,backend:{fetch:async(a,c)=>{const f=await ql(e.store),m=c?.body instanceof ArrayBuffer;if(!f||m)return globalThis.fetch(a,c);const $={url:a};return c?.method&&($.method=c.method),c?.headers&&($.headers=c.headers),typeof c?.body=="string"&&($.body=c.body),globalThis.fetch(`${f}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify($)})},async saveFile(a,c,f){const m=typeof c=="string"?new Blob([c],{type:f??"application/octet-stream"}):c,$=URL.createObjectURL(m),S=document.createElement("a");S.href=$,S.download=a,S.rel="noopener",document.body.appendChild(S),S.click(),S.remove(),setTimeout(()=>URL.revokeObjectURL($),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function ql(e){const r=(await e.settings.findOne("server-sync:url"))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}const Ul={name:"csv-import",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"easyDBAccess built-ins"};function Wl(e){e.ui.registerImporter(Hl),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const s=rc(t).filter(sc);if(s.length===0)return!1;t.preventDefault();for(const n of s)await Kl(e,n);return!0})}const Hl={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return Xr(t)}};async function Kl(e,t){const r=e.workspaceId();if(!r)throw new Error("csv-import: no active workspace");const s=await t.text(),n=t.name.replace(/\.csv$/i,"")||"imported",a=(await e.store.tables.find()).find(S=>S.workspaceId===r&&S.name===n);let c,f;if(a){const S=await e.ui.dialogs.choice(`A table named "${n}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!S)return;S==="Append rows"?(f="append",c=a.id):S==="Overwrite rows"?(f="overwrite",c=a.id):(f="new",c=Rr())}else f="new",c=Rr();e.events.emit("import:before",{source:"csv",tableId:c});let m;if(f==="new"){const S=Xr(s),C=a?`${n} (${Date.now().toString(36)})`:n;await e.store.tables.insert({id:c,workspaceId:r,name:C,code:Ms(C),columns:S.columns,view:"table",updatedAt:Date.now()}),m=S.rows.map(z=>({id:Rr(),tableId:c,data:z,updatedAt:Date.now()}))}else{const S=a.columns;if(m=Io(s).rows.map(z=>{const B={};for(let q=0;q<S.length;q++){const te=S[q];B[te.field]=Mo(z[q]??"",te.type)}return{id:Rr(),tableId:c,data:B,updatedAt:Date.now()}}),f==="overwrite"){const z=e.store.rows(c),B=await z.find();await z.bulkRemove(B.map(q=>q.id))}}await e.store.rows(c).bulkInsert(m),e.events.emit("import:after",{source:"csv",tableId:c,rowCount:m.length})}function Io(e){const t=e.replace(/﻿/,""),r=Lo(t),s=Bo(t,r);if(s.length===0)return{header:[],rows:[]};const n=s[0],a=s.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:n,rows:a}}function Xr(e){const t=e.replace(/﻿/,""),r=Lo(t),s=Bo(t,r);if(s.length===0)return{columns:[],rows:[]};const n=s[0],a=s.slice(1).filter(z=>!(z.length===1&&z[0]==="")),c=n.map((z,B)=>Xl(z,B)),f=c.map(z=>z.field),m=a.map(z=>{const B={};for(let q=0;q<f.length;q++)B[f[q]]=z[q]??"";return B}),$=c.map((z,B)=>z.type?z.type:Gl(m.map(q=>q[f[B]]??"").filter(q=>q.length>0))),S=c.map((z,B)=>{const q=$[B]??"string",te={field:z.field,label:z.label,type:q},oe=Yl(q),fe=z.renderer??oe;return fe&&(te.renderer=fe),z.default!==void 0&&(te.default=z.default),z.max!=null&&(te.max=z.max),z.unique&&(te.unique=!0),z.notnull&&(te.notnull=!0),z.hidden&&(te.hidden=!0),te}),C=m.map(z=>{const B={};for(let q=0;q<f.length;q++){const te=f[q],oe=$[q]??"string";B[te]=Mo(z[te]??"",oe)}return B});return{columns:S,rows:C}}const Vl=new Set(["string","number","boolean","date","datetime"]),Gi={color:"color",image:"image"};function Yl(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function Xl(e,t){const r=e.trim();if(!r.includes(":"))return{field:Ms(r||`col_${t+1}`),label:r||`Column ${t+1}`};const s=r.split(":"),n=Ms(s[0]||`col_${t+1}`),a=(s[1]??s[0]??"").trim()||n,c={field:n,label:a},f=(s[2]??"").trim();f&&(Vl.has(f)?c.type=f:Gi[f]&&(c.type="string",c.renderer=Gi[f]));const m=(s[3]??"").trim();m&&(c.default=m);const $=(s[4]??"").trim();if($){const C=Number($);Number.isFinite(C)&&C>0&&(c.max=C)}const S=(s[5]??"").toLowerCase();return S.includes("u")&&(c.unique=!0),S.includes("n")&&(c.notnull=!0),S.includes("h")&&(c.hidden=!0),c}function Lo(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const a of t)a in r&&(r[a]+=1);let s=",",n=-1;for(const a of[",",";","	"])(r[a]??0)>n&&(s=a,n=r[a]??0);return s}function Bo(e,t){const r=[];let s=[],n="",a=!1;for(let c=0;c<e.length;c++){const f=e[c];a?f==='"'?e[c+1]==='"'?(n+='"',c++):a=!1:n+=f:f==='"'?a=!0:f===t?(s.push(n),n=""):f===`
`||f==="\r"?(f==="\r"&&e[c+1]===`
`&&c++,s.push(n),r.push(s),s=[],n=""):n+=f}return(n.length>0||s.length>0)&&(s.push(n),r.push(s)),r}function Gl(e){return e.length===0?"string":e.every(Jl)?"boolean":e.every(Zl)?"number":e.every(tc)?"datetime":e.every(ec)?"date":"string"}const Ql=/^(true|false|yes|no|0|1)$/i;function Jl(e){return Ql.test(e.trim())}function Zl(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function ec(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function tc(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function Mo(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const s=Number(r);return Number.isFinite(s)?s:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return No(r);case"datetime":return nc(r);default:return e}}function No(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let s=parseInt(t[1],10),n=parseInt(t[2],10);const a=t[3];let c=parseInt(a,10);a.length===2&&(c+=2e3);let f,m;return s>12?(f=s,m=n):n>12?(m=s,f=n):(f=s,m=n),`${c.toString().padStart(4,"0")}-${m.toString().padStart(2,"0")}-${f.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function nc(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const s=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(s)return`${No(`${s[1]}/${s[2]}/${s[3]}`)}T${s[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const a=n.toISOString();return`${a.slice(0,10)}T${a.slice(11,16)}`}return e}function rc(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const s of Array.from(t.items))if(s.kind==="file"){const n=s.getAsFile();n&&r.push(n)}return r}return[]}function sc(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function Ms(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function Rr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const ic=Object.freeze(Object.defineProperty({__proto__:null,init:Wl,meta:Ul,parseCsv:Xr,parseCsvRaw:Io},Symbol.toStringTag,{value:"Module"})),oc={name:"csv-export",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"easyDBAccess built-ins"},ac={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Zs(e,t)}};function lc(e){e.ui.registerExporter(ac),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const s=await t.store.tables.findOne(r.tableId);if(!s)return;const n=await t.store.rows(s.id).find(),a=Zs(s,n);await t.backend.saveFile(`${s.code||s.name||"table"}.csv`,a,"text/csv")}})}function Zs(e,t){const r=e.columns.map(a=>a.field),s=e.columns.map(a=>Qi(a.label??a.field)),n=t.map(a=>r.map(c=>Qi(cc(a.data[c]))).join(","));return[s.join(","),...n].join(`\r
`)}function cc(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function Qi(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const uc=Object.freeze(Object.defineProperty({__proto__:null,init:lc,meta:oc,serializeCsv:Zs},Symbol.toStringTag,{value:"Module"}));var dc=Object.defineProperty,fc=Object.getOwnPropertyDescriptor,Wn=(e,t,r,s)=>{for(var n=s>1?void 0:s?fc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&dc(t,r,n),n};function Ns(e,t={}){return(Pt.instance??hc()).open(e,t)}function hc(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function pc(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Pt=class extends nt{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,s)=>r?s:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Pt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Pt.instance===this&&(Pt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mn(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(()=>!0),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return H`
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
            ${this.message?H`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,r)=>H`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${r}`}
                      .checked=${this.selected[r]??!1}
                      @change=${()=>this.toggle(r)}
                    />
                    <label for=${`tsel-${r}`}>
                      <span class="name">${t.name}</span>
                      <span class="size">${pc(t.size)}</span>
                      ${t.detail?H`<span class="detail">${t.detail}</span>`:""}
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
    `];Wn([J()],Pt.prototype,"items",2);Wn([J()],Pt.prototype,"selected",2);Wn([J()],Pt.prototype,"heading",2);Wn([J()],Pt.prototype,"message",2);Wn([J()],Pt.prototype,"confirmLabel",2);Pt=Wn([dt("table-select-dialog")],Pt);const mc={name:"json-import",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"easyDBAccess built-ins"};function gc(e){e.ui.registerImporter(bc),e.ui.registerDropHandler(async t=>{const s=Ec(t).filter(kc);if(s.length===0)return!1;t.preventDefault();for(const n of s)await yc(e,n);return!0})}const bc={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=Gr(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function yc(e,t){await ei(e,await t.text(),t.name)}async function ei(e,t,r){const s=e.workspaceId();if(!s)throw new Error("json-import: no active workspace");let n;try{n=JSON.parse(t)}catch(B){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${B.message}`)});return}const a=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=Gr(n,a);if(c.length===0)return;let f=c;if(c.length>1){const B=await Ns(c.map(q=>({name:q.name,size:q.rows.length})),{title:"Import tables",message:`"${r}" contains ${c.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!B)return;f=B.map(q=>c[q])}const m=(await e.store.tables.find()).filter(B=>B.workspaceId===s),$=new Set(f.map(B=>B.name)),S=m.filter(B=>$.has(B.name));let C;if(S.length===0&&f.length===1)C="append-new";else{const B=S.length>0?[`Overwrite matching (${S.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],q=await e.ui.dialogs.choice(`Importing ${f.length} table${f.length===1?"":"s"} from "${r}".${S.length>0?`

${S.length} table${S.length===1?"":"s"} share a name with existing data.`:""}`,B,"JSON import");if(!q)return;q.startsWith("Overwrite matching")?C="overwrite-matching":q==="Replace entire workspace"?C="replace-workspace":C="append-new"}if(C==="replace-workspace")for(const B of m){const q=e.store.rows(B.id),te=await q.find();await q.bulkRemove(te.map(oe=>oe.id)),await e.store.tables.remove(B.id)}const z=new Map(m.map(B=>[B.name,B]));for(const B of f){let q;const te=C==="overwrite-matching"?z.get(B.name):void 0;if(te){q=te.id;const Se=e.store.rows(q),Xe=await Se.find();await Se.bulkRemove(Xe.map(ne=>ne.id)),await e.store.tables.patch(q,{columns:B.columns,...B.windowGeometry?{windowGeometry:B.windowGeometry}:{},...B.sortColumn?{sortColumn:B.sortColumn,sortAsc:B.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},updatedAt:Date.now()})}else q=to(),e.events.emit("import:before",{source:"json",tableId:q}),await e.store.tables.insert({id:q,workspaceId:s,name:B.name,code:Sc(B.name),columns:B.columns,view:"table",...B.windowGeometry?{windowGeometry:B.windowGeometry}:{},...B.sortColumn?{sortColumn:B.sortColumn,sortAsc:B.sortAsc??!0}:{},updatedAt:Date.now()});const oe=e.store.rows(q),fe=B.rows.map(Se=>({id:to(),tableId:q,data:Se,updatedAt:Date.now()}));await oe.bulkInsert(fe),e.events.emit("import:after",{source:"json",tableId:q,rowCount:B.rows.length})}}function Gr(e,t){if(Lt(e)&&Ji(e))return Zi(e);if(Lt(e)&&Array.isArray(e.tables)){const r=e,s=[];for(const n of r.tables){if(vc(n)){const a=n,c=Lt(a.windowGeometry)?a.windowGeometry:void 0,f=typeof a.sortColumn=="string"?a.sortColumn:void 0,m=typeof a.sortAsc=="boolean"?a.sortAsc:void 0;s.push({name:String(n.name),columns:n.columns.map(xc),rows:Array.isArray(n.rows)?n.rows.filter(Lt):[],...c?{windowGeometry:c}:{},...f?{sortColumn:f,sortAsc:m??!0}:{}});continue}Lt(n)&&Ji(n)&&s.push(...Zi(n))}return s}if(Array.isArray(e)){const r=e.filter(Lt);return r.length===0?[]:[{name:t,...eo(r)}]}return Lt(e)?[{name:t,...eo([e])}]:[]}function Ji(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!Lt(r))continue;const s=r;if(Array.isArray(s.dataArray)&&Array.isArray(s.columns))return!0}return!1}function Zi(e){const t=[];for(const[r,s]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!Lt(s))continue;const n=s;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const a=r.replace(/\.table\.json$/,""),c=n.columns.map(S=>wc(S)),f=c.map(S=>S.field),m=n.dataArray.filter(S=>Array.isArray(S)).map(S=>{const C={};for(let z=0;z<f.length;z++)C[f[z]]=S[z];return C}),$={name:a,columns:c,rows:m};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const S=n.elementRect;$.windowGeometry={x:S.x,y:S.y,w:S.width??600,h:S.height??400,z:S.zIndex??100,minimized:!!S.minimized,maximized:!!S.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<f.length&&($.sortColumn=f[n.sortColumn],$.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push($)}return t}function wc(e){const t=String(e.field??"col"),r=String(e.name??t),s=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:s};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function vc(e){return Lt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function xc(e){if(!Lt(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let s=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(s==="color"||s==="image")&&(n=n??s,s="string");const a={field:r,label:String(t.label??r),type:s};return n&&(a.renderer=n),typeof t.script=="string"&&(a.script=t.script),a}function eo(e){const t=new Set;for(const n of e)for(const a of Object.keys(n))t.add(a);return{columns:Array.from(t).map(n=>({field:n,label:n,type:$c(e.map(a=>a[n]))})),rows:e}}function $c(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Cc(r))?"date":"string"}function Cc(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function Lt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Ec(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const s of Array.from(t.items))if(s.kind==="file"){const n=s.getAsFile();n&&r.push(n)}return r}return[]}function kc(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function Sc(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function to(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const _c=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:ei,init:gc,meta:mc,parsedToTables:Gr},Symbol.toStringTag,{value:"Module"}));class Vt extends Error{constructor(t,r){const s=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(s),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function On(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),s={};for(const[f,m]of t.searchParams)s[f]=m;let n,a=null,c=null;if(r.length>=2){c=decodeURIComponent(r[r.length-1]),a=decodeURIComponent(r[r.length-2]);const f=r.slice(0,r.length-2).join("/");n=t.origin+(f?"/"+f:"")}else r.length===1&&(a=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:a,table:c,query:s}}function Wr(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[s,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(s,String(n));return r.toString()}function Pc(e){const t=e?.next_url??null,r=e?.next,s=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],a=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(f=>Array.isArray(f)&&a?Object.fromEntries(a.map((m,$)=>[m,f[$]])):f),nextUrl:t,nextToken:s,hasMore:t!=null||s!=null,truncated:e?.truncated===!0}}function Ac(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function Dc(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],s={},n=e?.column_details;if(Array.isArray(n))for(const f of n)s[f.column??f.name]=f;else n&&typeof n=="object"&&Object.assign(s,n);for(const f of r)f in s||(s[f]={});return{columns:(r.length?r:Object.keys(s)).map(f=>{const m=s[f]||{},$=m.is_pk===!0||m.is_pk===1||t.includes(f),S={field:f,label:qo(f),type:Ac(m.sqlite_type??m.type,f)};return(m.notnull===!0||m.notnull===1||$)&&(S.notnull=!0),$&&(S.unique=!0),m.hidden===!0&&(S.hidden=!0),S}),pks:t}}function qo(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function ti(e){const t=[],r=new Set;for(const s of e)for(const n of Object.keys(s))r.has(n)||(r.add(n),t.push(n));return t.map(s=>({field:s,label:qo(s),type:Tc(e.map(n=>n[s]))}))}function Tc(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&jc(r))?"datetime":"string"}function jc(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Fc(e){const t=new TextEncoder().encode(String(e));let r="";for(const s of t){const n=String.fromCharCode(s);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+s.toString(16).toUpperCase().padStart(2,"0")}return r}function Oc(e,t){return!t||t.length===0?null:t.map(r=>Fc(e[r])).join(",")}function Rc(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const s of t){if(typeof s=="string"){r.push(s);continue}if(s&&typeof s=="object"&&typeof s.name=="string"){if(s.name==="_memory")continue;r.push(typeof s.route=="string"&&s.route?s.route:s.name)}}return r}function zc(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],s=[];for(const n of r){if(typeof n=="string"){s.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&s.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return s}async function ar(e,t){let r;try{r=await e(t)}catch(n){const a=n?.message||"network error";throw new Vt({error:`Couldn't reach ${t} (${a}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Vt(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const s=await r.json();if(s&&s.ok===!1)throw new Vt(s,r.status);return s}async function Uo(e,t){return Rc(await ar(e,`${t}/-/databases.json`))}async function no(e,t,r){return zc(await ar(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function Wo(e,t){const r=Wr(t,{_extra:"columns"}),s=await ar(e,r),{columns:n,pks:a}=Dc(s),c=!!s&&s.column_details!=null;return{columns:n,pks:a,count:s?.count??null,typed:c,raw:s}}function Ho(e,t){if(t.length===0)return e;const r=new Map(ti(t).map(s=>[s.field,s.type]));return e.map(s=>{if(s.type!=="string")return s;const n=r.get(s.field);return n&&n!=="string"?{...s,type:n}:s})}async function Qr(e,t,r={}){const s=r.maxRows??1e4,a={_size:r.pageSize??1e3,...r.extraParams||{}};let c=Wr(t,a);const f=[];let m=!1,$=!1,S=0;for(;c;){const C=await ar(e,c),z=Pc(C);f.push(...z.rows),m=m||z.truncated,S+=1;const B=z.nextUrl!=null?z.nextUrl:z.nextToken!=null?Wr(t,{_next:z.nextToken}):null;B&&f.length<s&&z.rows.length>0?c=B:($=B!=null&&z.rows.length>0,c=null)}return{rows:f,truncated:m,hasMore:$,pages:S}}function Ic(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function Ko(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function Vo(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function Jr(e,t,r,s){let n;try{n=await e(t,{method:"POST",headers:Ic(s),body:JSON.stringify(r)})}catch(c){throw new Vt({error:`Couldn't reach ${t} (${c?.message||"network error"}).`},0)}if(n&&n.ok===!1){let c=null;try{c=await n.json()}catch{}throw new Vt(c&&typeof c=="object"?c:{error:`HTTP ${n.status} for ${t}`},n.status)}const a=await n.json();if(a&&a.ok===!1)throw new Vt(a,n.status);return a}async function ro(e,t,r,s={}){const n=await Jr(e,Ko(t,"insert"),{rows:r,return:!0},s.token);return Array.isArray(n?.rows)?n.rows:[]}async function Lc(e,t,r,s,n={}){const a=await Jr(e,Vo(t,r,"update"),{update:s,return:!0},n.token);return a&&typeof a.row=="object"&&a.row?a.row:Array.isArray(a?.rows)&&a.rows[0]?a.rows[0]:null}async function so(e,t,r,s={}){await Jr(e,Vo(t,r,"delete"),{},s.token)}async function Bc(e,t,r,s={}){const n=await Jr(e,Ko(t,"upsert"),{rows:r,return:!0},s.token);return Array.isArray(n?.rows)?n.rows:[]}async function Mc(e,t){const r=Wr(t,{_extra:"primary_keys"}),s=await ar(e,r);return Array.isArray(s?.primary_keys)?s.primary_keys:[]}async function Yo(e,t,r={}){const s=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,s);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const a=await n.json(),c=a?.datasette?.version??a?.version??null;let f=null;try{f=(await(await e(`${t}/-/actor.json`,s)).json())?.actor??null}catch{}return{reachable:!0,version:c,actor:f,writable:!!(r.token&&f)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function ni(e,t){return t?(r,s)=>{const n=(s??{}).headers??{};return e(r,{...s??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}class Nc extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function Xo(e){return`datasette:token:${e}`}function qc(e,t){for(const[r,s]of Object.entries(t))if(r!=="data"&&e[r]!==s)return!1;return!0}function Uc(e,t){const r=e.source,s=r?.config??{},n={base:s.base,db:s.db,table:s.table,query:{}},a=Array.isArray(s.pks)&&s.pks.length>0?s.pks:["rowid"],c=r?.writable===!0,f=s.maxRows??1e4,m=s.pollIntervalMs??0,$=(ne,de)=>t.backend.fetch(ne,de);async function S(){const de=(await t.settings.findOne(Xo(s.base)))?.value;return typeof de=="string"&&de.length>0?de:void 0}const C=async(ne,de)=>ni($,await S())(ne,de);function z(ne){return{id:Oc(ne,a)??Wc(),tableId:e.id,data:ne,updatedAt:Date.now()}}function B(ne){if(!c)throw new Nc(ne)}function q(ne){const de={};for(const[Ce,ze]of Object.entries(ne))a.includes(Ce)||(de[Ce]=ze);return de}const te=new Set;let oe=[],fe=!1,Se=null;function Xe(){return Se||(Se=(async()=>{try{const{rows:ne}=await Qr(C,n,{maxRows:f});oe=ne.map(z),fe=!0;for(const de of te)de(oe);return oe}finally{Se=null}})(),Se)}return{async find(ne){const de=fe?oe:await Xe();return!ne||Object.keys(ne).length===0?de:de.filter(Ce=>qc(Ce,ne))},async findOne(ne){return(fe?oe:await Xe()).find(Ce=>Ce.id===ne)??null},async insert(ne){B("insert");const[de]=await ro(C,n,[ne.data]),Ce=z(de??ne.data);return t.events.emit("row:created",{tableId:e.id,row:Ce}),Xe(),Ce},async bulkInsert(ne){if(ne.length===0)return[];B("insert");const de=await ro(C,n,ne.map(ze=>ze.data)),Ce=(de.length?de:ne.map(ze=>ze.data)).map(z);return Xe(),Ce},async upsert(ne){B("upsert");const[de]=await Bc(C,n,[ne.data]),Ce=z(de??ne.data);return Xe(),Ce},async patch(ne,de){B("update");const Ce=de.data,ze=q(Ce??{}),vt=await Lc(C,n,ne,ze),Rt=z(vt??{...Ce??{}});return t.events.emit("row:updated",{tableId:e.id,row:Rt,prev:Rt}),Xe(),Rt},async remove(ne){B("delete"),await so(C,n,ne),t.events.emit("row:deleted",{tableId:e.id,rowId:ne}),Xe()},async bulkRemove(ne){if(ne.length!==0){B("delete");for(const de of ne)await so(C,n,de);Xe()}},subscribe(ne){te.add(ne),fe?ne(oe):Xe();let de=null;return m>0&&(de=setInterval(()=>void Xe(),m)),()=>{te.delete(ne),de&&clearInterval(de)}},async refresh(){await Xe()}}}function Wc(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Hc=Object.defineProperty,Kc=Object.getOwnPropertyDescriptor,lr=(e,t,r,s)=>{for(var n=s>1?void 0:s?Kc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Hc(t,r,n),n};const Vc="https://latest.datasette.io/ephemeral";let Ft=class extends nt{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();t&&this.finish({url:t,token:this.token.trim()})}}connectedCallback(){super.connectedCallback(),Ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ft.instance===this&&(Ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mn(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return H`
      <dialog @cancel=${this.onCancel} @keydown=${Fn}>
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
                placeholder="e.g. ${Vc}"
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
    `];lr([J()],Ft.prototype,"url",2);lr([J()],Ft.prototype,"token",2);lr([J()],Ft.prototype,"status",2);lr([J()],Ft.prototype,"statusKind",2);Ft=lr([dt("datasette-connect-dialog")],Ft);const qs=e=>e.replace(/^https?:\/\//,"");async function Go(e,t,r){if(t.db&&t.table)return[{db:t.db,table:t.table,count:null,hidden:!1,pks:[]}];let s=[];if(t.db)for(const c of await no(e,t.base,t.db))c.hidden||s.push(c);else{const c=await Uo(e,t.base);if(c.length===0)return[];let f=c;if(c.length>1){const m=await Ns(c.map($=>({name:$,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${qs(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!m)return null;f=m.map($=>c[$])}for(const m of f)try{for(const $ of await no(e,t.base,m))$.hidden||s.push($)}catch{}}if(s.length===0)return[];const n=new Set(s.map(c=>c.db)).size>1,a=await Ns(s.map(c=>({name:n?`${c.db}/${c.table}`:c.table,size:c.count,detail:n?void 0:c.db})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${qs(t.base)}.`,confirmLabel:r});return a?a.map(c=>s[c]):null}const Yc='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Xc={name:"datasette-source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"easyDBAccess built-ins",optional:!0},Sn={maxImportRows:1e4,pageSize:1e3},Gc="https://latest.datasette.io/fixtures/facetable";function Qc(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:Yc,tooltip:"Connect a live, editable Datasette table",onClick:()=>tu(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>su(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:Uc}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const s=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Gc}`,"","Import from Datasette");s&&await io(t,s)}}),e.ui.registerDropHandler(async(t,r)=>{const s=t.dataTransfer?.getData("text/plain")||"";return Jc(s)?(t.preventDefault(),await io(r,s),!0):!1})}async function io(e,t){try{await ri(e,t)}catch(r){let s;r instanceof Vt?s=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:s=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(s,"Datasette import failed")}}function Jc(e){try{const t=On(e);return!!(t.db&&t.table)}catch{return!1}}async function ri(e,t){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const s=On(t),a=await Go(S=>e.backend.fetch(S),s,"Import");if(a===null)return;if(a.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}if(s.db&&s.table&&a.length===1){const S=await oo(e,r,s);(S.hasMore||S.truncated)&&Zc(e,S);return}let c=0,f=0;const m=[],$=[];for(const S of a)try{const C=await oo(e,r,{base:s.base,db:S.db,table:S.table,query:{}});c+=1,f+=C.rowCount,(C.hasMore||C.truncated)&&m.push(`${S.db}/${S.table}`)}catch(C){$.push(`${S.db}/${S.table}: ${C?.message??String(C)}`)}eu(e,{imported:c,totalRows:f,capped:m,failed:$,requested:a.length})}async function oo(e,t,r){const s=`${r.db}/${r.table}`,n=oe=>e.backend.fetch(oe);let a=[],c=null,f=!1;try{const oe=await Wo(n,r);a=oe.columns,c=oe.count,f=oe.typed}catch{}const{rows:m,truncated:$,hasMore:S,pages:C}=await Qr(n,r,{maxRows:Sn.maxImportRows,pageSize:Sn.pageSize}),z=a.length===0?ti(m):f?a:Ho(a,m),B=Date.now(),q=Hr();e.events.emit("import:before",{source:"datasette",tableId:q}),await e.store.tables.insert({id:q,workspaceId:t,name:s,code:Jo(`${r.db}-${r.table}`),columns:z,view:"table",origin:{type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},updatedAt:B});const te=m.map(oe=>({id:Hr(),tableId:q,data:oe,updatedAt:B}));return await e.store.rows(q).bulkInsert(te),e.events.emit("import:after",{source:"datasette",tableId:q,rowCount:m.length}),{name:s,rowCount:m.length,hasMore:S,truncated:$,pages:C,count:c}}function Zc(e,t){const r=t.count!=null?` of ${t.count}`:"",s=t.name.split("/").pop()??t.name;e.ui.dialogs.toast(`Imported first ${t.rowCount}${r} rows from ${s} — more available (capped at ${Sn.maxImportRows}). Live paging arrives with the Phase-2 connector.`,{kind:"warning",title:"Datasette import"})}function eu(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,s=`${t.imported} table${t.imported===1?"":"s"}`;if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${s} (${r}); ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${s} (${r}). ${t.capped.length} capped at ${Sn.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${s} (${r}) from Datasette.`,{kind:"success",title:"Datasette import"})}async function tu(e){const t=Ft.instance??nu(),r=(n,a)=>e.backend.fetch(n,a),s=await t.open({initialUrl:"https://datasette.io",async onTest(n,a){const c=On(n),f=await Yo(r,c.base,{token:a||void 0});if(!f.reachable)return`Unreachable: ${f.error??"no response"}`;const m=f.version?` (Datasette ${f.version})`:"";return f.writable?`Reachable${m} — signed in, read-write.`:`Reachable${m} — read-only (no token / not authenticated).`}});if(s)try{await Qo(e,s.url,s.token)}catch(n){const a=n instanceof Vt?n.message:n?.message??String(n);await e.ui.dialogs.alert(a,"Connect Datasette failed")}}function nu(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function Qo(e,t,r){const s=e.workspaceId();if(!s)throw new Error("datasette-source: no active workspace");const n=On(t),a=(C,z)=>e.backend.fetch(C,z),c=ni(a,r||void 0),f=await Yo(a,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:Xo(n.base),value:r});let m;try{m=await Go(c,n,"Connect")}catch(C){const z=C instanceof Vt?C.message:C?.message??String(C);throw new Error(`Couldn't read tables from ${qs(n.base)}: ${z}`)}if(m===null)return;if(m.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}let $=0;for(const C of m)await ru(e,s,n.base,C,f.writable,r),$+=1;const S=f.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${$} live table${$===1?"":"s"} from Datasette (${S}).`,{kind:"success",title:"Connect Datasette"})}async function ru(e,t,r,s,n,a){const c={base:r,db:s.db,table:s.table,query:{}},f=ni((fe,Se)=>e.backend.fetch(fe,Se),a||void 0);let m=[],$=!1;try{const fe=await Wo(f,c);m=fe.columns,$=fe.typed}catch{}const{rows:S}=await Qr(f,c,{maxRows:50,pageSize:50}),C=m.length===0?ti(S):$?m:Ho(m,S);let z=s.pks;if(!z||z.length===0)try{z=await Mc(f,c)}catch{z=[]}const B=C.map(fe=>z.includes(fe.field)?{...fe,unique:!0,notnull:!0}:fe),q=(await e.store.tables.find()).find(fe=>{const Se=fe.source?.config;return fe.workspaceId===t&&fe.source?.type==="datasette"&&Se?.base===r&&Se?.db===s.db&&Se?.table===s.table}),te=q?.id??Hr(),oe={...q??{},id:te,workspaceId:t,name:`${s.db}/${s.table}`,code:Jo(`${s.db}-${s.table}`),columns:B,view:q?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:s.db,table:s.table,pks:z}},updatedAt:Date.now()};return q?await e.store.tables.upsert(oe):await e.store.tables.insert(oe),te}async function su(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const s=e.store.rows(t);typeof s.refresh=="function"&&await s.refresh();const n=await s.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await iu(e,r)}catch(s){const n=s instanceof Vt?s.message:s?.message??String(s);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function iu(e,t){const r=On(t.origin.url),s=C=>e.backend.fetch(C),{rows:n,hasMore:a,truncated:c}=await Qr(s,r,{maxRows:Sn.maxImportRows,pageSize:Sn.pageSize}),f=Date.now(),m=e.store.rows(t.id),$=await m.find();await m.bulkRemove($.map(C=>C.id)),await m.bulkInsert(n.map(C=>({id:Hr(),tableId:t.id,data:C,updatedAt:f}))),await e.store.tables.patch(t.id,{updatedAt:f});const S=a||c?` (capped at ${Sn.maxImportRows})`:"";e.ui.dialogs.toast(`Refreshed ${n.length} rows from ${r.db}/${r.table}${S}.`,{kind:a||c?"warning":"success",title:"Refresh"})}function Jo(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Hr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const ou=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:Qo,importDatasette:ri,init:Qc,meta:Xc},Symbol.toStringTag,{value:"Module"})),au={name:"dump-export",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"easyDBAccess built-ins"};function lu(e){e.ui.registerFooterButton({id:"dump-export:dump",label:"Dump",icon:"archive",tooltip:"Export the current workspace as a JSON dump file",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await Zr(e);await e.backend.saveFile(`workspace-${t}.db.json`,r,"application/json")}})}async function Zr(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),s={workspaceId:t,exportedAt:Date.now(),tables:[]};for(const n of r){const a=await e.store.rows(n.id).find();s.tables.push({name:n.name,columns:n.columns,rows:a.map(c=>c.data),...n.windowGeometry?{windowGeometry:n.windowGeometry}:{},...n.sortColumn?{sortColumn:n.sortColumn,sortAsc:n.sortAsc??!0}:{}})}return JSON.stringify(s,null,2)}const cu=Object.freeze(Object.defineProperty({__proto__:null,init:lu,meta:au,serializeWorkspace:Zr},Symbol.toStringTag,{value:"Module"})),uu={name:"sql-export",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"easyDBAccess built-ins"};function du(e){e.ui.registerFooterButton({id:"sql-export:dump",label:"SQL",icon:"storage",tooltip:"Export the current workspace as a .sql script",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await Zo(e);await e.backend.saveFile(`workspace-${t}.sql`,r,"application/sql")}})}async function Zo(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),s=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const a=await e.store.rows(n.id).find();s.push(fu(n,a),"")}return s.push("COMMIT;",""),s.join(`
`)}function fu(e,t){const r=Us(e.code||e.name||`table_${e.id}`),s=['  "__id" TEXT PRIMARY KEY',...e.columns.map(a=>`  ${hu(a)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,s.join(`,
`),");"];if(t.length>0){const c=["__id",...e.columns.map(f=>f.field)].map(f=>`"${Us(f)}"`).join(", ");for(const f of t){const m=[ao(f.id),...e.columns.map($=>ao(f.data[$.field],$.type))];n.push(`INSERT INTO "${r}" (${c}) VALUES (${m.join(", ")});`)}}return n.join(`
`)}function hu(e){const t=[`"${Us(e.field)}"`,pu(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function pu(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function ao(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=mu(e);return r===null?"NULL":zr(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?zr(e.toISOString()):zr(typeof e=="string"?e:JSON.stringify(e))}function mu(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?lo(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const s=new Date(t);return Number.isFinite(s.getTime())?lo(s):null}return null}function lo(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${s}`}function zr(e){return`'${e.replace(/'/g,"''")}'`}function Us(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const gu=Object.freeze(Object.defineProperty({__proto__:null,init:du,meta:uu,serializeWorkspaceAsSql:Zo},Symbol.toStringTag,{value:"Module"})),bu={name:"gist-sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"easyDBAccess built-ins"},yu="gist:";function wu(e){e.ui.registerFooterButton({id:"gist-sync:push",label:"Push",icon:"cloud_upload",tooltip:"Push the current workspace to a GitHub Gist",onClick:async()=>{try{await $u(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerFooterButton({id:"gist-sync:pull",label:"Pull",icon:"cloud_download",tooltip:"Pull the latest tables from the configured Gist",onClick:async()=>{try{await Cu(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}})}async function ea(e){const t=e.workspaceId();return`${yu}${t??"default"}`}async function vu(e){const t=await ea(e),r=await e.store.settings.findOne(t);if(!r)return null;const s=r.value;return!s||!s.token||!s.user?null:{user:s.user,gistId:s.gistId??"",token:s.token}}async function ta(e,t){const r=await ea(e);await e.store.settings.upsert({key:r,value:t})}function xu(e){const t={};for(const r of e.split(";")){const s=r.indexOf("=");if(s<0)continue;const n=r.slice(0,s).trim(),a=r.slice(s+1).trim();n&&(t[n]=a)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function na(e){const t=await vu(e);if(t)return t;const r=await e.ui.dialogs.prompt(`Connection string format:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,"","Gist credentials");if(!r)return null;const s=xu(r);return s?(await ta(e,s),s):(await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist credentials"),null)}async function $u(e){const t=await na(e);if(!t)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=(await e.store.tables.find()).filter(m=>m.workspaceId===r);if(s.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const n={},a=[];for(const m of s){const $=await e.store.rows(m.id).find(),S=JSON.stringify(Eu(m,$),null,2);S.length>1e8&&a.push(`${m.name} (${(S.length/1e6).toFixed(2)} MB)`),n[`${ra(m.name)}.table.json`]={content:S}}if(a.length>0&&!await e.ui.dialogs.confirm(`These tables exceed Gist's 100 MB-per-file limit and will be rejected:

${a.join(`
`)}

Push anyway?`,"Gist size warning"))return;n["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1"},null,2)};let c;if(t.gistId){const m=await fetch(`https://api.github.com/gists/${t.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:n,description:`easyDBAccess workspace: ${r}`})});if(!m.ok)throw new Error(await Ws(m));c=await m.json()}else{const m=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:n})});if(!m.ok)throw new Error(await Ws(m));c=await m.json(),t.gistId=c.id,await ta(e,t)}const f=c.html_url??`https://gist.github.com/${t.user}/${c.id}`;e.ui.dialogs.toast(`Pushed ${s.length} table${s.length===1?"":"s"}.  ${f}`,{kind:"success",title:"Gist sync"})}async function Cu(e){const t=await na(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!s.ok)throw new Error(await Ws(s));const n=await s.json(),a=Object.entries(n.files).filter(([$])=>$.endsWith(".table.json")&&!$.startsWith("_easydb"));if(a.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const c=(await e.store.tables.find()).filter($=>$.workspaceId===r),f=new Map(c.map($=>[$.name,$]));let m=0;for(const[,$]of a){const S=JSON.parse($.content);if(!S.name||!Array.isArray(S.columns))continue;let C;const z=f.get(S.name);if(z){C=await e.store.tables.patch(z.id,{columns:S.columns,updatedAt:Date.now()});const q=e.store.rows(z.id),te=await q.find();await q.bulkRemove(te.map(oe=>oe.id))}else C=await e.store.tables.insert({id:co(),workspaceId:r,name:S.name,code:ra(S.name),columns:S.columns,view:"table",updatedAt:Date.now()});const B=(S.rows??[]).map(q=>({id:co(),tableId:C.id,data:q,updatedAt:Date.now()}));await e.store.rows(C.id).bulkInsert(B),m++}e.ui.dialogs.toast(`Pulled ${m} table${m===1?"":"s"} from gist ${t.gistId}.`,{kind:"success",title:"Gist sync"})}function Eu(e,t){return{name:e.name,columns:e.columns,rows:t.map(r=>r.data)}}async function Ws(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function ra(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function co(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const ku=Object.freeze(Object.defineProperty({__proto__:null,init:wu,meta:bu},Symbol.toStringTag,{value:"Module"})),sa="server-sync:url";function ia(e){return`server-sync:etag:${e}`}async function oa(e){const r=(await e.store.settings.findOne(sa))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function Su(e,t){await e.store.settings.upsert({key:sa,value:t.replace(/\/+$/,"")})}async function aa(e,t){const s=(await e.store.settings.findOne(ia(t)))?.value;return typeof s=="string"?s:null}async function Dn(e,t,r){await e.store.settings.upsert({key:ia(t),value:r})}function es(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function uo(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function la(e,t,r){const s=Gr(r,t),n=(await e.store.tables.find()).filter(c=>c.workspaceId===t);for(const c of n){const f=e.store.rows(c.id),m=await f.find();await f.bulkRemove(m.map($=>$.id)),await e.store.tables.remove(c.id)}let a=0;for(const c of s){const f=fo(),m=await e.store.tables.insert({id:f,workspaceId:t,name:c.name,code:_u(c.name),columns:c.columns,view:"table",...c.windowGeometry?{windowGeometry:c.windowGeometry}:{},...c.sortColumn?{sortColumn:c.sortColumn,sortAsc:c.sortAsc??!0}:{},updatedAt:Date.now()}),$=c.rows.map(S=>({id:fo(),tableId:m.id,data:S,updatedAt:Date.now()}));await e.store.rows(m.id).bulkInsert($),a++}return a}function _u(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function fo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Pu={name:"server-sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"easyDBAccess built-ins"};function Au(e){e.ui.registerFooterButton({id:"server-sync:push",label:"Sync ↑",icon:"cloud_sync",tooltip:"Push this workspace to the configured server",onClick:async()=>{try{await Du(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Server sync"})}}}),e.ui.registerFooterButton({id:"server-sync:pull",label:"Sync ↓",icon:"cloud_sync",tooltip:"Pull this workspace from the configured server",onClick:async()=>{try{await Tu(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Server sync"})}}})}async function Du(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await ca(e);if(!r)return;const s=await Zr(e),n=await aa(e,t),a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);let c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:a,body:s});if(c.status===412){const m=await c.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){m.currentEtag&&await Dn(e,t,m.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:s})}if(!c.ok)throw new Error(await ua(c));const f=es(c.headers.get("ETag"));f&&await Dn(e,t,f),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function Tu(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await ca(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await ua(n));const a=es(n.headers.get("ETag")),c=await n.json(),f=await la(e,t,c);a&&await Dn(e,t,a),e.ui.dialogs.toast(`Pulled ${f} table${f===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function ca(e){const t=await oa(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await Su(e,r),r.replace(/\/+$/,"")}async function ua(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const ju=Object.freeze(Object.defineProperty({__proto__:null,init:Au,meta:Pu},Symbol.toStringTag,{value:"Module"})),Fu={name:"new-table",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"easyDBAccess built-ins"};function Ou(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const Ru=Object.freeze(Object.defineProperty({__proto__:null,init:Ou,meta:Fu},Symbol.toStringTag,{value:"Module"})),zu={name:"plugin-manager-button",version:"0.1.0",description:"Registers a footer button that opens the Plugin Manager dialog.",author:"easyDBAccess built-ins"};function Iu(e){e.ui.registerFooterButton({id:"plugin-manager:open",label:"Plugins",icon:"extension",tooltip:"Add, disable, or remove plugins",onClick:()=>e.ui.openPluginManager()})}const Lu=Object.freeze(Object.defineProperty({__proto__:null,init:Iu,meta:zu},Symbol.toStringTag,{value:"Module"})),Bu={name:"core-renderers",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"easyDBAccess built-ins"};function Mu(e){customElements.get("cell-date")||customElements.define("cell-date",Nu),customElements.get("cell-datetime")||customElements.define("cell-datetime",qu),customElements.get("cell-boolean")||customElements.define("cell-boolean",Uu),customElements.get("cell-script")||customElements.define("cell-script",Hu),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class Nu extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="date",t.value=Vu(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class qu extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="datetime-local",t.value=Yu(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Uu extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="checkbox",t.checked=Wu(this._value),t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Wu(e){return e===!0||e==="true"||e===1||e==="1"}class Hu extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const a=document.createElement("span");a.textContent="(no script)",a.style.cssText="color:#9ca3af;font-style:italic",this.append(a);return}let r;try{r=Ku(t)}catch(a){this.append(Fs("compile error",a));return}let s;try{s=r(this._row)}catch(a){this.append(Fs("runtime error",a));return}if(typeof s!="string"){this.append(Fs("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=s,this.append(n)}}const ho=new Map;function Ku(e){const t=ho.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return ho.set(e,r),r}function Fs(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const s=t instanceof Error?t.message:String(t);r.title=s}return r}function Vu(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function Yu(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const s=new Date(t);if(Number.isNaN(s.getTime()))return"";const n=s.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const Xu=Object.freeze(Object.defineProperty({__proto__:null,init:Mu,meta:Bu},Symbol.toStringTag,{value:"Module"})),Gu={name:"cell-color",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"easyDBAccess built-ins"};function Qu(e){customElements.get("cell-color")||customElements.define("cell-color",Ju),e.ui.registerCellRenderer("color","cell-color")}class Ju extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,s){this.value=s}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Zu=Object.freeze(Object.defineProperty({__proto__:null,init:Qu,meta:Gu},Symbol.toStringTag,{value:"Module"})),ed={name:"cell-image",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"easyDBAccess built-ins"};function td(e){customElements.get("cell-image")||customElements.define("cell-image",nd),e.ui.registerCellRenderer("image","cell-image")}class nd extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const s=document.createElement("img");s.src=this._value,s.alt="",s.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(s)}else{const s=document.createElement("span");s.style.color="#9ca3af",s.textContent="no image",t.append(s);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const s=new FileReader;s.onload=()=>this.commit(String(s.result)),s.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const rd=Object.freeze(Object.defineProperty({__proto__:null,init:td,meta:ed},Symbol.toStringTag,{value:"Module"})),sd={name:"cell-link",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"easyDBAccess built-ins"};function id(e){customElements.get("cell-link")||customElements.define("cell-link",od),e.ui.registerCellRenderer("link","cell-link")}class od extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:ad(t),s=!this._editing&&!r?ld(t):null,n=!this._editing&&!r&&!s?cd(t):null;if(r||s||n){const a=document.createElement("span");a.style.cssText="display:inline-flex;align-items:center;gap:0.25rem;width:100%";const c=document.createElement("a");c.href=r?t:s?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(c.target="_blank",c.rel="noopener noreferrer"),c.textContent=t,c.style.cssText="color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",c.title=r?`Open ${t}`:s?`Email ${t}`:`Call ${t}`;const f=document.createElement("button");f.type="button",f.title="Edit",f.textContent="✎",f.style.cssText="background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",f.addEventListener("click",m=>{m.preventDefault(),m.stopPropagation(),this._editing=!0,this.render()}),a.append(c,f),this.append(a)}else{const a=document.createElement("input");a.type="text",a.value=t,a.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",a.addEventListener("change",()=>this.commit(a.value)),a.addEventListener("keydown",c=>{c.key==="Enter"?(c.preventDefault(),this.commit(a.value)):c.key==="Escape"&&(this._editing=!1,this.render())}),this.append(a),this._editing&&setTimeout(()=>{a.focus(),a.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function ad(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function ld(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function cd(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const s=/[ ()\-.]/.test(t),n=t.startsWith("+");return!s&&!n&&r.length<10?null:t}const ud=Object.freeze(Object.defineProperty({__proto__:null,init:id,meta:sd},Symbol.toStringTag,{value:"Module"}));var dd=Object.defineProperty,fd=Object.getOwnPropertyDescriptor,gn=(e,t,r,s)=>{for(var n=s>1?void 0:s?fd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&dd(t,r,n),n};const hd="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",pd='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',po=[{label:"Northwind — sample database (JSON dump)",url:hd,kind:"json"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],md={name:"import-data",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"easyDBAccess built-ins",optional:!0};function gd(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:pd,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>bd(e)})}async function bd(e){const r=await(bt.instance??yd()).open({async listDatabases(a){const c=On(a);return Uo(f=>e.backend.fetch(f),c.base)}});if(!r)return;const{url:s,kind:n}=r;try{if(n==="datasette")await ri(e,s);else{const a=await e.backend.fetch(s);if(!a.ok)throw new Error(`HTTP ${a.status} ${a.statusText}`);const c=await a.text();await ei(e,c,go(s)),e.ui.dialogs.toast(`Imported ${go(s)}.`,{kind:"success",title:"Import"})}}catch(a){e.ui.dialogs.toast(`Could not import ${s}: ${a.message}`,{kind:"error",title:"Import"})}}function yd(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function wd(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),s=[...t.searchParams.keys()].some(a=>a.startsWith("_")),n=r.includes("datasette")||s;return/\.(json|csv)$/i.test(t.pathname)&&!s?"json":n?"datasette":"json"}catch{return"json"}}function mo(e,t){if(t!=="datasette"||!e)return!1;try{const r=On(e);return!r.db&&!r.table}catch{return!1}}function go(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}let bt=class extends nt{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.resolvedKind,s=r==="datasette"&&this.selectedDb&&mo(t,r)?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:s,kind:r})}}get resolvedKind(){return this.kind==="auto"?wd(this.url.trim()):this.kind}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),bt.instance=this}disconnectedCallback(){super.disconnectedCallback(),bt.instance===this&&(bt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mn(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=po[t];r&&(this.url=r.url,this.kind=r.kind)}renderDbPicker(){return!this.listDatabases||!mo(this.url.trim(),this.resolvedKind)?Re:H`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?H`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>H`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:H`<option value="">— not loaded —</option>`}
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
      ${this.dbError?H`<p class="hint error">${this.dbError}</p>`:Re}
    `}render(){return H`
      <dialog @cancel=${this.onCancel} @keydown=${Fn}>
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
                ${po.map((e,t)=>H`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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
      ${Re}
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
    `];gn([J()],bt.prototype,"url",2);gn([J()],bt.prototype,"kind",2);gn([J()],bt.prototype,"presetIdx",2);gn([J()],bt.prototype,"dbList",2);gn([J()],bt.prototype,"dbLoading",2);gn([J()],bt.prototype,"dbError",2);gn([J()],bt.prototype,"selectedDb",2);bt=gn([dt("import-dialog")],bt);const vd=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return bt},init:gd,meta:md},Symbol.toStringTag,{value:"Module"})),xd={name:"auto-sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"easyDBAccess built-ins",optional:!0},$d=6e4;let bo=null,Hs=!1;const Os=new Map;function Cd(e){bo===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(bo=setInterval(()=>{da(e)},$d)))}async function da(e){if(Hs)return;const t=e.workspaceId();if(!t)return;const r=await oa(e);if(r)try{await Ed(e,r,t)}catch(s){console.warn("[auto-sync]",s)}}async function Ed(e,t,r){const s=await Zr(e),n=await aa(e,r),a=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(a.status===404){await yo(e,t,r,s,null);return}if(!a.ok)return;const c=es(a.headers.get("ETag")),f=await a.text();if(uo(s)===uo(f)){c&&c!==n&&await Dn(e,r,c);return}if(c&&c===n){await yo(e,t,r,s,n);return}if(!(c&&Os.get(r)===c)){Hs=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const $=JSON.parse(f),S=await la(e,r,$);c&&await Dn(e,r,c),Os.delete(r),e.ui.dialogs.toast(`Pulled ${S} table${S===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else c&&Os.set(r,c)}finally{Hs=!1}}}async function yo(e,t,r,s,n){const a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);const c=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:a,body:s});if(c.ok){const f=es(c.headers.get("ETag"));f&&await Dn(e,r,f);return}if(c.status===412){const f=await c.json().catch(()=>({}));f.currentEtag&&await Dn(e,r,f.currentEtag)}}const fa=Object.freeze(Object.defineProperty({__proto__:null,load:Cd,meta:xd,tick:da},Symbol.toStringTag,{value:"Module"})),ha=[Ru,ic,_c,ou,uc,cu,gu,ku,ju,Lu,Xu,Zu,rd,ud,vd,fa],kd=ha;function Ks(e){return`builtin:${e}`}async function Sd(e){const t=[];for(const r of ha)if(!await _d(e,r)){t.push(r);try{await r.init?.(e)}catch(s){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"init",error:s})}}return async()=>{for(const r of t)try{await r.load?.(e)}catch(s){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"load",error:s})}}}async function _d(e,t){if(!t.meta?.optional)return!1;const r=t.meta.name;return r?(await e.store.plugins.findOne(Ks(r)))?.enabled===!1:!1}async function Pd(e){const t=e.workspaceId();if(!t)return async()=>{};const s=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const a of s)try{const c=await e.store.plugins.findOne(a);if(c&&c.enabled===!1)continue;let f=c?.cachedBody??"";if(f)Ad(e,a,f);else{try{f=await pa(a)}catch(S){await e.store.plugins.upsert({url:a,enabled:c?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${S.message}`}),e.events.emit("plugin:error",{url:a,phase:"fetch",error:S});continue}await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),cachedBody:f})}const m=new Blob([f],{type:"text/javascript"}),$=URL.createObjectURL(m);try{const S=await import($);await S.init?.(e),n.push({url:a,mod:S})}finally{setTimeout(()=>URL.revokeObjectURL($),5e3)}}catch(c){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`init: ${c.message}`}),e.events.emit("plugin:error",{url:a,phase:"init",error:c})}return async()=>{for(const{url:a,mod:c}of n)try{await c.load?.(e)}catch(f){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`load: ${f.message}`}),e.events.emit("plugin:error",{url:a,phase:"load",error:f})}}}async function pa(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function Ad(e,t,r){return(async()=>{try{const s=await pa(t);if(s===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:s})}catch{}})()}let Rs=null;function je(){return Rs||(Rs=Dd()),Rs}async function Dd(){const e=await _l(),t=Al(e),r=Tl(),s=Ll(),n=new Map;t.tables.subscribe(te=>{n.clear();for(const oe of te)n.set(oe.id,oe)});const a={...t.tables,insert:te=>(n.set(te.id,te),t.tables.insert(te)),upsert:te=>(n.set(te.id,te),t.tables.upsert(te))};let c=null;const f={get backend(){if(!c)throw new Error("[host] row-source ctx used before app init completed");return c.backend},events:r,settings:t.settings,workspaceId:()=>C},m=Dl({base:{...t,tables:a},providers:s.rowSources,tableById:te=>n.get(te),ctx:f}),$=Td(),S=await m.workspaces.find();let C;if($){const te=jd($),oe=S.find(fe=>fe.id===te||fe.name===$);oe?C=oe.id:C=(await m.workspaces.insert({id:te,name:$,createdAt:Date.now(),pluginUrls:[]})).id}else S.length===0?C=(await m.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id:C=S[0].id;const z=Nl({store:m,events:r,registries:s,workspaceId:()=>C});c=z,r.on("import:after",({source:te,tableId:oe,rowCount:fe})=>{z.store.tables.findOne(oe).then(Se=>{z.ui.dialogs.toast(`Imported ${fe} row${fe===1?"":"s"} into "${Se?.name??oe}".`,{kind:"success",title:te.toUpperCase()+" import"})})}),r.on("plugin:error",({url:te,phase:oe,error:fe})=>{z.ui.dialogs.toast(`[${oe}] ${fe?.message??String(fe)}`,{kind:"error",title:`Plugin: ${te}`})});const B=await Sd(z),q=await Pd(z);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:C}),await B(),await q()}),{store:m,events:r,workspaceId:C,registries:s,api:z}}function Td(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}function jd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var Fd=Object.defineProperty,Od=Object.getOwnPropertyDescriptor,ts=(e,t,r,s)=>{for(var n=s>1?void 0:s?Od(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Fd(t,r,n),n};let qn=class extends nt{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mn(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=Xr(this.text)}catch(c){this.errorMsg=`Couldn't parse the CSV: ${c.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const s=await je(),n=crypto.randomUUID();await s.store.tables.insert({id:n,workspaceId:s.workspaceId,name:t,code:Rd(t),columns:r.columns,view:"table",updatedAt:Date.now()});const a=r.rows.map(c=>({id:crypto.randomUUID(),tableId:n,data:c,updatedAt:Date.now()}));await s.store.rows(n).bulkInsert(a),s.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return H`
      <dialog @cancel=${this.close} @keydown=${Fn}>
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
            ${this.errorMsg?H`<div class="error">${this.errorMsg}</div>`:""}
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
    `];ts([J()],qn.prototype,"name",2);ts([J()],qn.prototype,"text",2);ts([J()],qn.prototype,"errorMsg",2);qn=ts([dt("csv-paste-dialog")],qn);function Rd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var zd=Object.defineProperty,Id=Object.getOwnPropertyDescriptor,si=(e,t,r,s)=>{for(var n=s>1?void 0:s?Id(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&zd(t,r,n),n};const Ld=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let Yt=class extends nt{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),Yt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Yt.instance===this&&(Yt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mn(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:Ld,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return H`
      <dialog @cancel=${this.onCancel} @keydown=${Fn}>
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
    `];si([J()],Yt.prototype,"text",2);si([J()],Yt.prototype,"columnLabel",2);Yt=si([dt("script-editor-dialog")],Yt);var Bd=Object.defineProperty,Md=Object.getOwnPropertyDescriptor,Nt=(e,t,r,s)=>{for(var n=s>1?void 0:s?Md(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Bd(t,r,n),n};const Nd=["string","number","boolean","date","datetime"];let At=class extends nt{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.columns=[],this.errorMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mn(this.dialogEl,e)}async open(e){this.errorMsg="";const t=await je();if(this.rendererOptions=[...t.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=t.events.on("app:ready",()=>{this.rendererOptions=[...t.registries.cellRenderers.keys()].sort()}),e){const r=await je(),s=await r.store.tables.findOne(e);if(!s)return;this.mode="edit",this.editTableId=e,this.name=s.name,this.columns=s.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,origField:a.field}));const n=await r.store.rows(e).find();this.previewRows=n.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const s=[...this.columns],[n]=s.splice(e,1);s.splice(r,0,n),this.columns=s}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const s=r.getBoundingClientRect(),n=e.clientY<s.top+s.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,s=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!s)return;const n=[...this.columns],[a]=n.splice(r,1);let c=t+(r<t?-1:0);s==="after"&&(c+=1),n.splice(c,0,a),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,s)=>s===e?{...r,...t}:r)}async editScript(e){const t=Yt.instance;if(!t)return;const r=this.columns[e];if(!r)return;const s=await t.open(r.script??"",r.label||r.field);s!==null&&this.patchColumn(e,{script:s.trim()?s:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const r=new Set;for(const a of this.columns){const c=a.field.trim();if(!c){this.errorMsg="Column field names cannot be empty.";return}if(r.has(c)){this.errorMsg=`Duplicate column field: ${c}`;return}r.add(c)}const s=await je(),n=this.columns.map(a=>{const c={field:a.field.trim(),label:a.label.trim()||a.field.trim(),type:a.type};return a.renderer&&(c.renderer=a.renderer),a.script&&(c.script=a.script),a.max!=null&&a.max>0&&(c.max=a.max),a.unique&&(c.unique=!0),a.notnull&&(c.notnull=!0),a.hidden&&(c.hidden=!0),c});if(this.mode==="edit"&&this.editTableId){const a=this.editTableId,c=await s.store.tables.findOne(a),f=new Map((c?.columns??[]).map($=>[$.field,$])),m=n.filter($=>{const S=f.get($.field);return $.unique&&!S?.unique||$.notnull&&!S?.notnull||$.max&&$.max>0&&$.max!==S?.max});if(m.length>0){const $=await s.store.rows(a).find(),S=Wd(m,$);if(S.length>0){this.errorMsg=`Cannot save: ${S.length} existing ${S.length===1?"row violates":"rows violate"} the new constraints.
${S.slice(0,5).join(`
`)}${S.length>5?`
…and ${S.length-5} more.`:""}`;return}}await s.store.tables.patch(a,{name:t,columns:n,updatedAt:Date.now()})}else await s.store.tables.insert({id:Kd(),workspaceId:s.workspaceId,name:t,code:Hd(t),columns:n,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return H`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const t of this.columns){if(!t.unique)continue;const r=new Set,s=new Set;for(const n of this.previewRows){const a=n.data[t.field];a==null||a===""||(r.has(a)&&s.add(a),r.add(a))}e.set(t.field,s)}return H`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${this.columns.map(t=>H`<th title=${t.field}>${t.label||t.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(t=>H`
                <tr>
                  ${this.columns.map(r=>{const s=t.data[r.field],n=Ud(r,s,e.get(r.field));return H`<td
                      class=${n?"violation":""}
                      title=${n??""}
                    >${qd(s)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return H`
      <dialog @cancel=${this.close} @keydown=${Fn}>
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
            ${this.columns.map((r,s)=>{const n=this.dragSrcIdx===s,a=this.dropTargetIdx===s,c=a&&this.dropEdge==="before"?" drop-before":a&&this.dropEdge==="after"?" drop-after":"";return H`
                <div
                  class=${`col-row${n?" drag-source":""}${c}`}
                  @dragover=${f=>this.onRowDragOver(f,s,f.currentTarget)}
                  @dragleave=${()=>this.onRowDragLeave(s)}
                  @drop=${f=>this.onRowDrop(f,s)}
                >
                  <span
                    class="drag-handle"
                    title="Drag to reorder"
                    draggable="true"
                    @dragstart=${f=>this.onRowDragStart(f,s)}
                    @dragend=${()=>this.onRowDragEnd()}
                  >
                    <span class="mi sm">drag_indicator</span>
                  </span>
                  <input
                    type="text"
                    .value=${r.field}
                    @input=${f=>this.patchColumn(s,{field:f.target.value})}
                  />
                  <input
                    type="text"
                    .value=${r.label}
                    @input=${f=>this.patchColumn(s,{label:f.target.value})}
                  />
                  <select
                    .value=${r.type}
                    @change=${f=>this.patchColumn(s,{type:f.target.value})}
                  >
                    ${Nd.map(f=>H`<option value=${f} ?selected=${f===r.type}>${f}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${f=>{const m=f.target.value;this.patchColumn(s,{renderer:m||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(f=>H`<option value=${f} ?selected=${f===r.renderer}>${f}</option>`)}
                  </select>
                  ${r.renderer==="script"?H`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(s)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:H`<span></span>`}
                  <input
                    type="number"
                    min="0"
                    placeholder="—"
                    title="Max length (strings) or max value (numbers)"
                    .value=${r.max==null?"":String(r.max)}
                    @input=${f=>{const m=f.target.value;this.patchColumn(s,{max:m===""?void 0:Number(m)})}}
                  />
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Unique"
                      .checked=${!!r.unique}
                      @change=${f=>this.patchColumn(s,{unique:f.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Not null"
                      .checked=${!!r.notnull}
                      @change=${f=>this.patchColumn(s,{notnull:f.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Visible — uncheck to hide the column without losing its data"
                      .checked=${!r.hidden}
                      @change=${f=>this.patchColumn(s,{hidden:!f.target.checked})}
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

          ${this.renameDetected()?H`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?H`<div class="error">${this.errorMsg}</div>`:""}
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
  `];Nt([J()],At.prototype,"mode",2);Nt([J()],At.prototype,"editTableId",2);Nt([J()],At.prototype,"name",2);Nt([J()],At.prototype,"columns",2);Nt([J()],At.prototype,"errorMsg",2);Nt([J()],At.prototype,"dragSrcIdx",2);Nt([J()],At.prototype,"dropTargetIdx",2);Nt([J()],At.prototype,"dropEdge",2);Nt([J()],At.prototype,"previewRows",2);Nt([J()],At.prototype,"rendererOptions",2);At=Nt([dt("new-table-dialog")],At);function qd(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function Ud(e,t,r){const s=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&s)return`${e.label}: empty`;if(s)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!s){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function Wd(e,t){const r=[];for(const s of e)if(s.notnull&&t.forEach((n,a)=>{const c=n.data[s.field];(c==null||typeof c=="string"&&c.trim()==="")&&r.push(`Row ${a+1}: ${s.label} is empty.`)}),s.max!=null&&s.max>0&&t.forEach((n,a)=>{const c=n.data[s.field];typeof c=="string"&&c.length>s.max?r.push(`Row ${a+1}: ${s.label} length ${c.length} > max ${s.max}.`):typeof c=="number"&&c>s.max&&r.push(`Row ${a+1}: ${s.label} value ${c} > max ${s.max}.`)}),s.unique){const n=new Map;t.forEach((a,c)=>{const f=a.data[s.field];f==null||f===""||(n.has(f)?r.push(`Row ${c+1}: ${s.label} duplicates row ${n.get(f)+1} ("${String(f)}").`):n.set(f,c))})}return r}function Hd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Kd(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Vd=Object.defineProperty,Yd=Object.getOwnPropertyDescriptor,Ot=(e,t,r,s)=>{for(var n=s>1?void 0:s?Yd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Vd(t,r,n),n};let $t=class extends nt{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.builtinNames=[],this.optionalBuiltins=[],this.dirtyBuiltins=!1,this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mn(this.dialogEl,e)}async open(){const e=await je(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(a=>[a.url,a]));const s=[],n=[];for(const a of kd){const c=a.meta?.name;if(c)if(a.meta?.optional){const f=this.records.get(Ks(c));n.push({name:c,...a.meta?.description?{description:a.meta.description}:{},...a.meta?.author?{author:a.meta.author}:{},enabled:f?.enabled!==!1})}else s.push(c)}this.builtinNames=s,this.optionalBuiltins=n,this.dirtyBuiltins=!1,this.addUrl="",await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(),this.refreshServerRegistry()}async refreshCatalog(){const e=new URL("/plugins/catalog.json",location.origin).toString();try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),s=Array.isArray(r.plugins)?r.plugins:[];this.catalog=s.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await je()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const a=await fetch(n,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const c=await a.json(),f=Array.isArray(c.plugins)?c.plugins:[];this.serverCatalog=f.map(m=>({...m,absUrl:new URL(m.url,n).toString()})),this.serverCatalogError=null}catch(a){this.serverCatalog=[],this.serverCatalogError=a.message}}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await je()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await je();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await je(),s=this.records.get(e);await r.store.plugins.upsert({...s??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...s,url:e,enabled:t,lastFetched:s?.lastFetched??0}))}async removePlugin(e){const t=await je();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await je(),s=Ks(e),n=this.records.get(s);await r.store.plugins.upsert({...n??{url:s,lastFetched:0},url:s,enabled:t,lastFetched:n?.lastFetched??0}),this.optionalBuiltins=this.optionalBuiltins.map(a=>a.name===e?{...a,enabled:t}:a),this.dirtyBuiltins=!0}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await je();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const s=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:s});const n=new Blob([s],{type:"text/javascript"}),a=URL.createObjectURL(n);try{const f=await import(a);await f.init?.(t.api),await f.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(a),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const c=await t.store.plugins.find();this.records=new Map(c.map(f=>[f.url,f])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}render(){return H`
      <dialog @cancel=${this.close} @keydown=${Fn}>
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
            ${this.catalog.length>0?H`<div class="section-h">Available from this host</div>`:""}
            ${this.catalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return H`
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
            ${this.catalogError?H`<div class="meta err">
                  Host catalog unavailable: ${this.catalogError}
                </div>`:""}

            ${this.serverCatalog.length>0||this.serverCatalogError?H`<div class="section-h">From server</div>`:""}
            ${this.serverCatalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return H`
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
            ${this.serverCatalogError?H`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            ${this.optionalBuiltins.length>0?H`<div class="section-h">Optional built-ins</div>`:""}
            ${this.optionalBuiltins.map(e=>H`
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
            ${this.builtinNames.map(e=>H`
                <div class="row builtin">
                  <span class="mi sm">extension</span>
                  <div>
                    <div>${e}</div>
                    <div class="meta">Built-in</div>
                  </div>
                  <span class="meta">always on</span>
                </div>
              `)}

            ${this.urls.length>0?H`<div class="section-h">Installed (by URL)</div>`:""}
            ${this.urls.map(e=>{const t=this.records.get(e),r=t?.lastError?" error":"",s=t?.lastFetched?new Date(t.lastFetched).toLocaleString():"never";return H`
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
                      ${t?.lastError??`Last fetched: ${s}`}
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
 */let O={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&O.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let s=arguments[r];if(s==null)continue;s=Object(s);let n=Object.keys(Object(s));for(let a=0,c=n.length;a<c;a++){let f=n[a],m=Object.getOwnPropertyDescriptor(s,f);m!==void 0&&m.enumerable&&(t[f]=s[f])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,s=new Array(r);r--;)s[r]=[t[r],e[t[r]]];return s}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),s=document.createDocumentFragment();r.forEach(function(n){let a=n instanceof Node;s.appendChild(a?n:document.createTextNode(String(n)))}),this.appendChild(s)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,s=this;do for(r=t.length;--r>=0&&t.item(r)!==s;);while(r<0&&(s=s.parentElement));return s}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let s=document.createEvent("CustomEvent");return s.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),s}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),s=r.length>>>0;if(s===0)return!1;let n=t|0,a=Math.max(n>=0?n:s-Math.abs(n),0);function c(f,m){return f===m||typeof f=="number"&&typeof m=="number"&&isNaN(f)&&isNaN(m)}for(;a<s;){if(c(r[a],e))return!0;a++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>O.modifier=e),document.addEventListener("keyup",()=>O.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const s=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(s===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(s),a=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-a)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(s===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(s),a=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-a)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((s,n)=>{(s.startsWith("--")||s.startsWith("var"))&&(r[n]=O.getCssVariableValue(s))}),r.forEach(s=>{O.colorNames[s]?t[2]="#"+O.colorNames[s]:s.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=s:s.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=s:t[2]=s}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),s=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return s&&(t.size=s[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let s=e.indexOf(")");t=e.slice(0,s+1).replace(/\s+/g,""),t.startsWith("var")&&(t=O.getCssVariableValue(t)),r=e.slice(s+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let s=e.indexOf(" ");s>0?(t=e.slice(0,s+1).replace(/\s+/g,""),r=e.slice(s+1,e.length).trim()):t=e,t.startsWith("--")&&(t=O.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let s=r.indexOf(" ");r=r.slice(s+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:O.colorNames[r]?r="#"+O.colorNames[r]:r.match(/^(--|var)/)?r=O.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,s,n,a,c,f,m,$,S,C={};const z=/^#?([\da-f]{3}|[\da-f]{6})$/gi,B=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,q=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,te=this.colorNames;return te[t]&&(t=te[t]),t.match(z)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),s=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),C.rgb={r:parseInt(r,16),g:parseInt(s,16),b:parseInt(n,16)},C.hex=`#${r}${s}${n}`):(C.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},C.hex=`#${t}`),S=this.rgbToHsl(C.rgb.r,C.rgb.g,C.rgb.b),C.hsl=S,C.rgb.css=`rgb(${C.rgb.r},${C.rgb.g},${C.rgb.b})`):t.match(B)?(m=B.exec(t),C.rgb={css:t,r:m[1],g:m[2],b:m[3]},C.hex=this.rgbToHex(m[1],m[2],m[3]),S=this.rgbToHsl(m[1],m[2],m[3]),C.hsl=S):t.match(q)?(m=q.exec(t),a=m[1]/360,c=m[2].slice(0,m[2].length-1)/100,f=m[3].slice(0,m[3].length-1)/100,$=this.hslToRgb(a,c,f),C.rgb={css:`rgb(${$[0]},${$[1]},${$[2]})`,r:$[0],g:$[1],b:$[2]},C.hex=this.rgbToHex(C.rgb.r,C.rgb.g,C.rgb.b),C.hsl={css:`hsl(${m[1]},${m[2]},${m[3]})`,h:m[1],s:m[2],l:m[3]}):(C.hex="#f5f5f5",C.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},C.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),C},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),s=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),a=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(s)<=t?"#ffffff":"#000000",f=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",m=this.lighten(e,this.colorFilledDark),$=this.perceivedBrightness(m)<=t?"#ffffff":"#000000";return[r.hsl.css,s,n,a,c,f,m,$]},darken(e,t){const r=this.color(e).hsl,s=parseFloat(r.l),n=Math.round(s-s*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,s=parseFloat(r.l),n=Math.round(s+(100-s)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let s,n,a;if(t===0)s=n=a=r;else{let c=($,S,C)=>(C<0&&(C+=1),C>1&&(C-=1),C<.16666666666666666?$+(S-$)*6*C:C<.5?S:C<.6666666666666666?$+(S-$)*(.6666666666666666-C)*6:$),f=r<.5?r*(1+t):r+t-r*t,m=2*r-f;s=c(m,f,e+1/3),n=c(m,f,e),a=c(m,f,e-1/3)}return[Math.round(s*255),Math.round(n*255),Math.round(a*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let s=Math.max(e,t,r),n=Math.min(e,t,r),a,c,f=(s+n)/2;if(s===n)a=c=0;else{let m=s-n;switch(c=f>.5?m/(2-s-n):m/(s+n),s){case e:a=(t-r)/m+(t<r?6:0);break;case t:a=(r-e)/m+2;break;case r:a=(e-t)/m+4;break}a/=6}return a=Math.round(a*360),c=Math.round(c*100)+"%",f=Math.round(f*100)+"%",{css:"hsl("+a+","+c+","+f+")",h:a,s:c,l:f}},rgbToHex(e,t,r){let s=Number(e).toString(16),n=Number(t).toString(16),a=Number(r).toString(16);return s.length===1&&(s=`0${s}`),n.length===1&&(n=`0${n}`),a.length===1&&(a=`0${a}`),`#${s}${n}${a}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),s=r.filter(c=>c.match(/^(down|right|up|left)$/i));s.length&&(t.autoposition=s[0],r.splice(r.indexOf(s[0]),1));let n=r.filter(c=>c.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let a=r.filter(c=>c.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return a.length&&(t.offsetX=a[0].match(/^[+-]?\d*\.?\d+$/i)?`${a[0]}px`:a[0],a[1]?t.offsetY=a[1].match(/^[+-]?\d*\.?\d+$/i)?`${a[1]}px`:a[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(a[0]),1),a[1]&&r.splice(r.indexOf(a[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(te=>{typeof t[te]=="function"&&(t[te]=t[te].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,s=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),a=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},c=r==="window"?{x:1,y:1}:{x:a.width/r.offsetWidth,y:a.height/r.offsetHeight},f=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);a.width-=(parseFloat(f.borderLeftWidth)+parseFloat(f.borderRightWidth))*c.x,a.height-=(parseFloat(f.borderTopWidth)+parseFloat(f.borderBottomWidth))*c.y;let m;t.of?typeof t.of=="string"?m=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?m=t.of[0].getBoundingClientRect():m=t.of.getBoundingClientRect():m=a;let $=this.getScrollbarWidth(document.body),S=this.getScrollbarWidth(e.parentElement),C="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?C=m.left-a.left-parseFloat(f.borderLeftWidth)+"px":C="0px":t.at.startsWith("center")?t.of?C=m.left-a.left-parseFloat(f.borderLeftWidth)+m.width/2+"px":C=a.width/2+"px":t.at.startsWith("right-")&&(t.of?C=m.left-a.left-parseFloat(f.borderLeftWidth)+m.width+"px":C=a.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?C=m.left-a.left-parseFloat(f.borderLeftWidth)-s.width/2+"px":C=-s.width/2+"px":t.at.startsWith("center")?t.of?C=m.left-a.left-parseFloat(f.borderLeftWidth)-(s.width-m.width)/2+"px":C=a.width/2-s.width/2+"px":t.at.startsWith("right-")&&(t.of?C=m.left-a.left-parseFloat(f.borderLeftWidth)+(m.width-s.width/2)+"px":C=a.width-s.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?C=m.left-a.left-parseFloat(f.borderLeftWidth)-s.width+"px":C=-s.width+"px":t.at.startsWith("center")?t.of?C=m.left-a.left-parseFloat(f.borderLeftWidth)-s.width+m.width/2+"px":C=a.width/2-s.width+"px":t.at.startsWith("right-")&&(t.of?C=m.left-a.left-parseFloat(f.borderLeftWidth)+m.width-s.width+"px":C=a.width-s.width+"px",r!=="window"&&(C=parseFloat(C)-S.y+"px")));let z="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?z=m.top-a.top-parseFloat(f.borderTopWidth)+"px":z="0px":t.at.endsWith("center")?t.of?z=m.top-a.top-parseFloat(f.borderTopWidth)+m.height/2+"px":z=a.height/2+"px":t.at.endsWith("-bottom")&&(t.of?z=m.top-a.top-parseFloat(f.borderTopWidth)+m.height+"px":z=a.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?z=m.top-a.top-parseFloat(f.borderTopWidth)-s.height/2+"px":z=-s.height/2+"px":t.at.endsWith("center")?t.of?z=m.top-a.top-parseFloat(f.borderTopWidth)-s.height/2+m.height/2+"px":z=a.height/2-s.height/2+"px":t.at.endsWith("-bottom")&&(t.of?z=m.top-a.top-parseFloat(f.borderTopWidth)-s.height/2+m.height+"px":z=a.height-s.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?z=m.top-a.top-parseFloat(f.borderTopWidth)-s.height+"px":z=-s.height+"px":t.at.endsWith("center")?t.of?z=m.top-a.top-parseFloat(f.borderTopWidth)-s.height+m.height/2+"px":z=a.height/2-s.height+"px":t.at.endsWith("-bottom")&&(t.of?z=m.top-a.top-parseFloat(f.borderTopWidth)-s.height+m.height+"px":z=a.height-s.height+"px",r!=="window"?z=parseFloat(z)-S.x+"px":z=parseFloat(z)-$.x+"px")),e.style.left=c.x===1?C:parseFloat(C)/c.x+"px",e.style.top=c.y===1?z:parseFloat(z)/c.y+"px";let B=getComputedStyle(e),q={left:B.left,top:B.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(q=this.applyPositionAutopos(e,q,t)),(t.offsetX||t.offsetY)&&(q=this.applyPositionOffset(e,q,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(q=this.applyPositionMinMax(e,q,t)),t.modify&&(q=this.applyPositionModify(e,q,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const s=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(s);const n=Array.prototype.slice.call(document.querySelectorAll(`.${s}`)),a=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((c,f)=>{f>0&&f<=a&&(t.top=parseFloat(t.top)+n[--f].getBoundingClientRect().height+O.autopositionSpacing+"px")});break;case"up":n.forEach((c,f)=>{f>0&&f<=a&&(t.top=parseFloat(t.top)-n[--f].getBoundingClientRect().height-O.autopositionSpacing+"px")});break;case"right":n.forEach((c,f)=>{f>0&&f<=a&&(t.left=parseFloat(t.left)+n[--f].getBoundingClientRect().width+O.autopositionSpacing+"px")});break;case"left":n.forEach((c,f)=>{f>0&&f<=a&&(t.left=parseFloat(t.left)-n[--f].getBoundingClientRect().width-O.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const s=getComputedStyle(e);return{left:s.left,top:s.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const s=getComputedStyle(e);return{left:s.left,top:s.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const s=getComputedStyle(e);return{left:s.left,top:s.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(s=>{e.classList.contains(s)&&(t=s)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),s=document.createElement("button");s.className="btn btn"+t.color.slice(r),document.body.appendChild(s),t.color=getComputedStyle(s).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(s),s=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},s=typeof t=="object"?Object.assign(r,t):r,n=s.bgPanel,a=s.bgContent,c=s.colorHeader,f=s.colorContent,m=s.bgFooter,$=s.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[c]&&(c="#"+this.colorNames[c]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(z=>e.querySelector(z).style.color=this.getCssVariableValue(c)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(z=>z.style.color=this.getCssVariableValue(c)),this.colorNames[a]?e.content.style.background="#"+this.colorNames[a]:e.content.style.background=this.getCssVariableValue(a),this.colorNames[f]?e.content.style.color="#"+this.colorNames[f]:e.content.style.color=this.getCssVariableValue(f),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(f)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[m]?e.footer.style.background="#"+this.colorNames[m]:e.footer.style.background=this.getCssVariableValue(m),this.colorNames[$]?e.footer.style.color="#"+this.colorNames[$]:e.footer.style.color=this.getCssVariableValue($),s.border&&e.setBorder(s.border),s.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(s.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,s]of Object.entries(t))e.style[r]=typeof s=="string"?O.getCssVariableValue(s):s;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const s=document.createElement("script");s.src=e,s.type=t,document.head.appendChild(s),r&&(s.onload=r)}},ajax(e,t){let r,s,n=new XMLHttpRequest;const a={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let c=O.strToHtml(this.responseText);r.urlSelector&&(c=c.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(c)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},a,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},a,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&O.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}s=r.url.trim().split(/\s+/),r.url=encodeURI(s[0]),s.length>1&&(s.shift(),r.urlSelector=s.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&O.ajaxAutoresizeAutoreposition(t,r),O.ajaxAlwaysCallbacks.length&&O.ajaxAlwaysCallbacks.forEach(c=>{t?c.call(n,n,t):c.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const s={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(a,c){if(c){let f=O.strToHtml(a);c.contentRemove(),c.content.append(f)}}};if(t&&typeof e=="string")r=Object.assign({},s,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},s,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&O.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(a=>{if(a.ok)return a[r.bodyMethod]()}).then(a=>{t?r.done.call(a,a,t):r.done.call(a,a),t&&(r.autoresize||r.autoreposition)&&O.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const s=r.split(" "),n=Object.assign({},{width:s[0],height:s[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const s=Object.assign({},r);t.autoresize&&e.resize(s),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const s=document.createElement("div"),n=e.parentElement;s.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(s.style.width=r+"px",s.style.height=r+"px"):t==="ct"||t==="cb"?s.style.height=r+"px":(t==="lc"||t==="rc")&&(s.style.width=r+"px"),n!==document.body&&(s.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(s)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",s,n){if(typeof t=="function"&&(t=[t]),r)return t[r](a=>a.call(e,e,s,n));t.forEach(a=>a.call(e,e,s,n))},resetZi(){this.zi=((e=O.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=O.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){O.zi||(O.zi=((h=O.ziBase)=>{let w=h;return{next:()=>w++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${O.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let h=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;O.errorpanel(h)}return!1}let s=this.pOcontainer(e.container);if(typeof s=="object"&&s.length&&s.length>0&&(s=s[0]),!s)return this.errorReporting&&O.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(h=>{e[h]?typeof e[h]=="function"&&(e[h]=[e[h]]):e[h]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const a=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),f=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),m=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),$=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),S=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),C=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),z=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),B=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),q=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),te=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),oe=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),fe=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),Se=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),Xe=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),ne=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[a,c,f,m,$,S,C,z,B,q,te,oe,fe,Se].forEach(h=>h.panel=n);const de=n.querySelector(".jsPanel-btn-close"),Ce=n.querySelector(".jsPanel-btn-maximize"),ze=n.querySelector(".jsPanel-btn-normalize"),vt=n.querySelector(".jsPanel-btn-smallify"),Rt=n.querySelector(".jsPanel-btn-minimize");de&&O.pointerup.forEach(h=>{de.addEventListener(h,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.close(null,!0)})}),Ce&&O.pointerup.forEach(h=>{Ce.addEventListener(h,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.maximize()})}),ze&&O.pointerup.forEach(h=>{ze.addEventListener(h,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.normalize()})}),vt&&O.pointerup.forEach(h=>{vt.addEventListener(h,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),Rt&&O.pointerup.forEach(h=>{Rt.addEventListener(h,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.minimize()})});let Xt=O.extensions;for(let h in Xt)Object.prototype.hasOwnProperty.call(Xt,h)&&(n[h]=Xt[h]);if(n.setBorder=h=>{let w=O.pOborder(h);return w[2].length||(w[2]=n.style.backgroundColor),w=w.join(" "),n.style.border=w,n.options.border=w,n},n.setBorderRadius=h=>{typeof h=="string"&&(h.startsWith("--")||h.startsWith("var"))&&(h=h.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),h=O.getCssVariableValue(h)),typeof h=="number"&&(h+="px"),n.style.borderRadius=h;const w=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=w.borderTopLeftRadius,n.header.style.borderTopRightRadius=w.borderTopRightRadius):(n.content.style.borderTopLeftRadius=w.borderTopLeftRadius,n.content.style.borderTopRightRadius=w.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=w.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=w.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=w.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=w.borderBottomLeftRadius),n},n.setTheme=(h=e.theme,w)=>{let T;if(n.status==="minimized"&&(T=!0,n.normalize()),O.clearTheme(n),typeof h=="object")e.border=void 0,O.applyCustomTheme(n,h);else if(typeof h=="string"){h==="none"&&(h="white");let b=O.getThemeDetails(h);O.applyColorTheme(n,b)}return T&&n.minimize(),w&&w.call(n,n),n},n.remove=(h,w,T)=>{n.parentElement.removeChild(n),document.getElementById(h)?T&&T.call(n,h,n):(n.removeMinimizedReplacement(),n.status="closed",w&&document.dispatchEvent(ne),document.dispatchEvent(Xe),n.options.onclosed&&O.processCallbacks(n,n.options.onclosed,"every",w),O.autopositionRemaining(n),T&&T.call(h,h)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(h,w)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(Se),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!O.processCallbacks(n,n.options.onbeforeclose,"some",n.status,w))return n;n.options.animateOut?(n.options.animateIn&&O.remClass(n,n.options.animateIn),O.setClass(n,n.options.animateOut),n.addEventListener("animationend",T=>{T.stopPropagation(),n.remove(n.id,w,h)})):n.remove(n.id,w,h)}},n.maximize=(h,w)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!O.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent($);const T=n.parentElement,b=O.pOcontainment(e.maximizedMargin);return T===document.body?(n.style.width=document.documentElement.clientWidth-b[1]-b[3]+"px",n.style.height=document.documentElement.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"):(n.style.width=T.clientWidth-b[1]-b[3]+"px",n.style.height=T.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"),vt.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),w||n.front(),document.dispatchEvent(S),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),h&&h.call(n,n,n.statusBefore),e.onmaximized&&O.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=h=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!O.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(C),!document.getElementById("jsPanel-replacement-container")){const w=document.createElement("div");w.id="jsPanel-replacement-container",document.body.append(w)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(z),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let w=n.createMinimizedReplacement(),T,b,x;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(w);break;case"parentpanel":b=n.closest(".jsPanel-content").parentElement,x=b.querySelectorAll(".jsPanel-minimized-box"),T=x[x.length-1],T.append(w);break;case"parent":b=n.parentElement,T=b.querySelector(".jsPanel-minimized-container"),T||(T=document.createElement("div"),T.className="jsPanel-minimized-container",b.append(T)),T.append(w);break;default:document.querySelector(e.minimizeTo).append(w)}}return h&&h.call(n,n,n.statusBefore),e.onminimized&&O.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=h=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!O.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(f),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),vt.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),h&&h.call(n,n,n.statusBefore),e.onnormalized&&O.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=h=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!O.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(B),n.style.overflow="hidden";const w=window.getComputedStyle(n),T=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(w.borderTopWidth)+parseFloat(w.borderBottomWidth)+T+"px",vt.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(q),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(te),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const b=n.querySelectorAll(".jsPanel-minimized-box");return b[b.length-1].style.display="none",h&&h.call(n,n,n.statusBefore),e.onsmallified&&O.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=h=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!O.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(oe),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),vt.style.transform="rotate(0deg)";const w=n.querySelectorAll(".jsPanel-minimized-box");w[w.length-1].style.display="flex",h&&h.call(n,n,n.statusBefore),e.onunsmallified&&O.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(h,w=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const T=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(b=>b.style.zIndex);Math.max(...T)>n.style.zIndex&&(n.style.zIndex=O.zi.next()),O.resetZi()}return document.dispatchEvent(fe),h&&h.call(n,n),e.onfronted&&w&&O.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(h,w=!1)=>{if(w||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),h&&typeof h=="function"&&!w)h.call(n,n,n.snappableTo);else if(h!==!1){let T=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const b=O.pOcontainment(n.options.dragit.containment),x=n.snappableTo;x.startsWith("left")?T[0]=b[3]:x.startsWith("right")&&(T[0]=-b[1]),x.endsWith("top")?T[1]=b[0]:x.endsWith("bottom")&&(T[1]=-b[2])}n.reposition(`${n.snappableTo} ${T[0]} ${T[1]}`)}w||(n.snapped=n.snappableTo)},n.move=(h,w)=>{let T=n.overlaps(h,"paddingbox"),b=n.parentElement;return h.appendChild(n),n.options.container=h,n.style.left=T.left+"px",n.style.top=T.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),w&&w.call(n,n,h,b),n},n.closeChildpanels=h=>(n.getChildpanels().forEach(w=>w.close()),h&&h.call(n,n),n),n.getChildpanels=h=>{const w=n.content.querySelectorAll(".jsPanel");return h&&w.forEach((T,b,x)=>{h.call(T,T,b,x)}),w},n.isChildpanel=h=>{const w=n.closest(".jsPanel-content"),T=w?w.parentElement:null;return h&&h.call(n,n,T),w?T:!1},n.contentRemove=h=>(O.emptyNode(n.content),h&&h.call(n,n),n),n.createMinimizedReplacement=()=>{const h=O.createMinimizedTemplate(),w=window.getComputedStyle(n.headertitle).color,T=window.getComputedStyle(n),b=e.iconfont,x=h.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?O.setStyles(h,{backgroundColor:T.backgroundColor,backgroundPositionX:T.backgroundPositionX,backgroundPositionY:T.backgroundPositionY,backgroundRepeat:T.backgroundRepeat,backgroundAttachment:T.backgroundAttachment,backgroundImage:T.backgroundImage,backgroundSize:T.backgroundSize,backgroundOrigin:T.backgroundOrigin,backgroundClip:T.backgroundClip}):h.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,h.id=n.id+"-min",h.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),h.querySelector(".jsPanel-headerlogo")),h.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),h.querySelector(".jsPanel-title")),h.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),h.querySelector(".jsPanel-title").style.color=w,x.style.color=w,x.querySelectorAll("button").forEach(ae=>ae.style.color=w),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(ae=>{n.header.classList.contains(ae)&&h.querySelector(".jsPanel-hdr").classList.add(ae)}),n.setIconfont(b,h),n.dataset.btnnormalize==="enabled"?O.pointerup.forEach(ae=>{h.querySelector(".jsPanel-btn-normalize").addEventListener(ae,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;n.normalize()})}):x.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?O.pointerup.forEach(ae=>{h.querySelector(".jsPanel-btn-maximize").addEventListener(ae,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;n.maximize()})}):x.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?O.pointerup.forEach(ae=>{h.querySelector(".jsPanel-btn-close").addEventListener(ae,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;n.close(null,!0)})}):x.querySelector(".jsPanel-btn-close").style.display="none",h},n.removeMinimizedReplacement=()=>{const h=document.getElementById(`${n.id}-min`);h&&h.parentElement.removeChild(h)},n.drag=(h={})=>{let w,T,b;const x=new CustomEvent("jspaneldragstart",{detail:n.id}),ae=new CustomEvent("jspaneldrag",{detail:n.id}),ue=new CustomEvent("jspaneldragstop",{detail:n.id});[x,ae,ue].forEach(Be=>Be.panel=n);const N=Be=>{let Fe=Be.split("-");return Fe.forEach((we,_e)=>{Fe[_e]=we.charAt(0).toUpperCase()+we.slice(1)}),"snap"+Fe.join("")};function K(Be){Be.relatedTarget===null&&O.pointermove.forEach(Fe=>{document.removeEventListener(Fe,T,!1),n.style.opacity=1})}let We=h.handles||O.defaults.dragit.handles,rt=h.cursor||O.defaults.dragit.cursor;function Ut(Be){if(O.pointermove.forEach(Fe=>document.removeEventListener(Fe,T)),O.removeSnapAreas(),w){if(n.style.opacity=1,w=void 0,b.snap){switch(n.snappableTo){case"left-top":n.snap(b.snap.snapLeftTop);break;case"center-top":n.snap(b.snap.snapCenterTop);break;case"right-top":n.snap(b.snap.snapRightTop);break;case"right-center":n.snap(b.snap.snapRightCenter);break;case"right-bottom":n.snap(b.snap.snapRightBottom);break;case"center-bottom":n.snap(b.snap.snapCenterBottom);break;case"left-bottom":n.snap(b.snap.snapLeftBottom);break;case"left-center":n.snap(b.snap.snapLeftCenter);break}b.snap.callback&&n.snappableTo&&typeof b.snap.callback=="function"&&(b.snap.callback.call(n,n),b.snap.repositionOnSnap&&b.snap[N(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&b.snap.repositionOnSnap&&b.snap[N(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Fe=n.parentElement;n.move(n.droppableTo),b.drop.callback&&b.drop.callback.call(n,n,n.droppableTo,Fe)}if(document.dispatchEvent(ue),b.stop.length){let Fe=window.getComputedStyle(n),we={left:parseFloat(Fe.left),top:parseFloat(Fe.top),width:parseFloat(Fe.width),height:parseFloat(Fe.height)};O.processCallbacks(n,b.stop,!1,we,Be)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Fe=>Fe.style.pointerEvents="auto"),document.removeEventListener(Be,Ut)}return n.querySelectorAll(We).forEach(Be=>{Be.style.touchAction="none",Be.style.cursor=rt,O.pointerdown.forEach(Fe=>{Be.addEventListener(Fe,we=>{if(we.button&&we.button>0||(b=Object.assign({},O.defaults.dragit,h),b.disableOnMaximized&&n.status==="maximized"))return!1;if((b.containment||b.containment===0)&&(b.containment=O.pOcontainment(b.containment)),b.grid&&Array.isArray(b.grid)&&b.grid.length===1&&(b.grid[1]=b.grid[0]),b.snap&&(typeof b.snap=="object"?b.snap=Object.assign({},O.defaultSnapConfig,b.snap):b.snap=O.defaultSnapConfig),we.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(Ge=>Ge.style.pointerEvents="none");let _e=window.getComputedStyle(n),He=parseFloat(_e.left),Ee=parseFloat(_e.top),Z=parseFloat(_e.width),Ke=parseFloat(_e.height),Oe=we.touches?we.touches[0].clientX:we.clientX,ce=we.touches?we.touches[0].clientY:we.clientY,ge=n.parentElement,Ct=ge.getBoundingClientRect(),ie=window.getComputedStyle(ge),Ve=n.getScaleFactor(),sn=0,zt=O.getScrollbarWidth(ge);T=Ge=>{if(Ge.preventDefault(),!w){if(document.dispatchEvent(x),n.style.opacity=b.opacity,n.snapped&&b.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let re=n.getBoundingClientRect(),ke=Oe-(re.left+re.width),he=re.width/2;ke>-he&&(sn=ke+he)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),b.drop&&b.drop.dropZones){let re=b.drop.dropZones.map(he=>O.pOcontainer(he)),ke=[];re.forEach(function(he){he.length?he.forEach(function(Te){ke.push(Te)}):ke.push(he)}),ke=ke.filter(function(he,Te,qe){return qe.indexOf(he)===Te}),b.drop.dropZones=ke}b.start.length&&O.processCallbacks(n,b.start,!1,{left:He,top:Ee,width:Z,height:Ke},Ge)}w=1;let Et,De,Me,yt,Qe,xe,ve,kt,Ne,ht,st=Ge.touches?Ge.touches[0].clientX:Ge.clientX,Je=Ge.touches?Ge.touches[0].clientY:Ge.clientY,Ie=window.getComputedStyle(n),le;if(ge===document.body){let re=n.getBoundingClientRect();Ne=window.innerWidth-parseInt(ie.borderLeftWidth,10)-parseInt(ie.borderRightWidth,10)-(re.left+re.width),ht=window.innerHeight-parseInt(ie.borderTopWidth,10)-parseInt(ie.borderBottomWidth,10)-(re.top+re.height)}else Ne=parseInt(ie.width,10)-parseInt(ie.borderLeftWidth,10)-parseInt(ie.borderRightWidth,10)-(parseInt(Ie.left,10)+parseInt(Ie.width,10)),ht=parseInt(ie.height,10)-parseInt(ie.borderTopWidth,10)-parseInt(ie.borderBottomWidth,10)-(parseInt(Ie.top,10)+parseInt(Ie.height,10));Et=parseFloat(Ie.left),Me=parseFloat(Ie.top),Qe=Ne,ve=ht,b.snap&&(b.snap.trigger==="panel"?(De=Et**2,yt=Me**2,xe=Qe**2,kt=ve**2):b.snap.trigger==="pointer"&&(n.options.container==="window"?(Et=st,Me=Je,Qe=window.innerWidth-st,ve=window.innerHeight-Je,De=st**2,yt=Me**2,xe=Qe**2,kt=ve**2):(le=n.overlaps(ge,"paddingbox",Ge),Et=le.pointer.left,Me=le.pointer.top,Qe=le.pointer.right,ve=le.pointer.bottom,De=le.pointer.left**2,yt=le.pointer.top**2,xe=le.pointer.right**2,kt=le.pointer.bottom**2)));let Ye=Math.sqrt(De+yt),Y=Math.sqrt(De+kt),Ze=Math.sqrt(xe+yt),lt=Math.sqrt(xe+kt),xt=Math.abs(Et-Qe)/2,X=Math.abs(Me-ve)/2,Wt=Math.sqrt(De+X**2),Gt=Math.sqrt(yt+xt**2),it=Math.sqrt(xe+X**2),on=Math.sqrt(kt+xt**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(ae),(!b.axis||b.axis==="x")&&(n.style.left=He+(st-Oe)/Ve.x+sn+"px"),(!b.axis||b.axis==="y")&&(n.style.top=Ee+(Je-ce)/Ve.y+"px"),b.grid){let re=b.grid,ke=b.axis,he=re[0]*Math.round((He+(st-Oe))/re[0]),Te=re[1]*Math.round((Ee+(Je-ce))/re[1]);(!ke||ke==="x")&&(n.style.left=`${he}px`),(!ke||ke==="y")&&(n.style.top=`${Te}px`)}if(b.containment||b.containment===0){let re=b.containment,ke,he;if(n.options.container==="window")ke=window.innerWidth-parseFloat(Ie.width)-re[1]-zt.y,he=window.innerHeight-parseFloat(Ie.height)-re[2]-zt.x;else{let Te=parseFloat(ie.borderLeftWidth)+parseFloat(ie.borderRightWidth),qe=parseFloat(ie.borderTopWidth)+parseFloat(ie.borderBottomWidth);ke=Ct.width/Ve.x-parseFloat(Ie.width)-re[1]-Te-zt.y,he=Ct.height/Ve.y-parseFloat(Ie.height)-re[2]-qe-zt.x}parseFloat(n.style.left)<=re[3]&&(n.style.left=re[3]+"px"),parseFloat(n.style.top)<=re[0]&&(n.style.top=re[0]+"px"),parseFloat(n.style.left)>=ke&&(n.style.left=ke+"px"),parseFloat(n.style.top)>=he&&(n.style.top=he+"px")}if(b.drag.length){let re={left:Et,top:Me,right:Qe,bottom:ve,width:parseFloat(Ie.width),height:parseFloat(Ie.height)};O.processCallbacks(n,b.drag,!1,re,Ge)}if(b.snap){let re=b.snap.sensitivity,ke=ge===document.body?window.innerWidth/8:Ct.width/8,he=ge===document.body?window.innerHeight/8:Ct.height/8;n.snappableTo=!1,O.removeSnapAreas(),Ye<re?b.snap.snapLeftTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-top",O.createSnapArea(n,"lt",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.left>0&&le.pointer.top>0?(n.snappableTo="left-top",O.createSnapArea(n,"lt",re)):(n.snappableTo=!1,O.removeSnapAreas()))):Y<re?b.snap.snapLeftBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-bottom",O.createSnapArea(n,"lb",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.left>0&&le.pointer.bottom>0?(n.snappableTo="left-bottom",O.createSnapArea(n,"lb",re)):(n.snappableTo=!1,O.removeSnapAreas()))):Ze<re?b.snap.snapRightTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-top",O.createSnapArea(n,"rt",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.right>0&&le.pointer.top>0?(n.snappableTo="right-top",O.createSnapArea(n,"rt",re)):(n.snappableTo=!1,O.removeSnapAreas()))):lt<re?b.snap.snapRightBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-bottom",O.createSnapArea(n,"rb",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.right>0&&le.pointer.bottom>0?(n.snappableTo="right-bottom",O.createSnapArea(n,"rb",re)):(n.snappableTo=!1,O.removeSnapAreas()))):Me<re&&Gt<ke?b.snap.snapCenterTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-top",O.createSnapArea(n,"ct",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.top>0?(n.snappableTo="center-top",O.createSnapArea(n,"ct",re)):(n.snappableTo=!1,O.removeSnapAreas()))):Et<re&&Wt<he?b.snap.snapLeftCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-center",O.createSnapArea(n,"lc",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.left>0?(n.snappableTo="left-center",O.createSnapArea(n,"lc",re)):(n.snappableTo=!1,O.removeSnapAreas()))):Qe<re&&it<he?b.snap.snapRightCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-center",O.createSnapArea(n,"rc",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.right>0?(n.snappableTo="right-center",O.createSnapArea(n,"rc",re)):(n.snappableTo=!1,O.removeSnapAreas()))):ve<re&&on<ke&&b.snap.snapCenterBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-bottom",O.createSnapArea(n,"cb",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.bottom>0?(n.snappableTo="center-bottom",O.createSnapArea(n,"cb",re)):(n.snappableTo=!1,O.removeSnapAreas())))}if(b.drop&&b.drop.dropZones){let re=O.isIE?"msElementsFromPoint":"elementsFromPoint",ke=document[re](Ge.clientX,Ge.clientY);Array.isArray(ke)||(ke=Array.prototype.slice.call(ke)),b.drop.dropZones.forEach(he=>{ke.includes(he)&&(n.droppableTo=he)}),ke.includes(n.droppableTo)||(n.droppableTo=!1)}},O.pointermove.forEach(Ge=>document.addEventListener(Ge,T)),window.addEventListener("mouseout",K,!1)})}),O.pointerup.forEach(Fe=>{document.addEventListener(Fe,Ut),window.removeEventListener("mouseout",K)}),h.disable&&(Be.style.pointerEvents="none")}),n},n.dragit=h=>{const w=Object.assign({},O.defaults.dragit,e.dragit),T=n.querySelectorAll(w.handles);return h==="disable"?T.forEach(b=>b.style.pointerEvents="none"):T.forEach(b=>b.style.pointerEvents="auto"),n},n.sizeit=(h={})=>{const w=new CustomEvent("jspanelresizestart",{detail:n.id}),T=new CustomEvent("jspanelresize",{detail:n.id}),b=new CustomEvent("jspanelresizestop",{detail:n.id});[w,T,b].forEach(we=>we.panel=n);let x={},ae,ue,N,K,We,rt;x.handles=h.handles||O.defaults.resizeit.handles,x.handles.split(",").forEach(we=>{const _e=document.createElement("DIV");_e.className=`jsPanel-resizeit-handle jsPanel-resizeit-${we.trim()}`,n.append(_e)});let Ut=h.aspectRatio?h.aspectRatio:!1;function Be(we){we.relatedTarget===null&&O.pointermove.forEach(_e=>document.removeEventListener(_e,ae,!1))}function Fe(we){if(O.pointermove.forEach(_e=>document.removeEventListener(_e,ae,!1)),we.target.classList&&we.target.classList.contains("jsPanel-resizeit-handle")){let _e,He,Ee=we.target.className;if(Ee.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(_e=!0),Ee.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(He=!0),x.grid&&Array.isArray(x.grid)){x.grid.length===1&&(x.grid[1]=x.grid[0]);const Z=parseFloat(n.style.width),Ke=parseFloat(n.style.height),Oe=Z%x.grid[0],ce=Ke%x.grid[1],ge=parseFloat(n.style.left),Ct=parseFloat(n.style.top),ie=ge%x.grid[0],Ve=Ct%x.grid[1];Oe<x.grid[0]/2?n.style.width=Z-Oe+"px":n.style.width=Z+(x.grid[0]-Oe)+"px",ce<x.grid[1]/2?n.style.height=Ke-ce+"px":n.style.height=Ke+(x.grid[1]-ce)+"px",_e&&(ie<x.grid[0]/2?n.style.left=ge-ie+"px":n.style.left=ge+(x.grid[0]-ie)+"px"),He&&(Ve<x.grid[1]/2?n.style.top=Ct-Ve+"px":n.style.top=Ct+(x.grid[1]-Ve)+"px")}}if(ue){n.content.style.pointerEvents="inherit",ue=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let _e=n.controlbar.querySelector(".jsPanel-btn-smallify"),He=n.getBoundingClientRect();if(_e&&He.height>rt+5&&(_e.style.transform="rotate(0deg)"),document.dispatchEvent(b),x.stop.length){let Ee=window.getComputedStyle(n),Z={left:parseFloat(Ee.left),top:parseFloat(Ee.top),width:parseFloat(Ee.width),height:parseFloat(Ee.height)};O.processCallbacks(n,x.stop,!1,Z,we)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(_e=>_e.style.pointerEvents="auto"),x.aspectRatio=Ut,document.removeEventListener(we,Fe)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(we=>{we.style.touchAction="none",O.pointerdown.forEach(_e=>{we.addEventListener(_e,He=>{if(He.preventDefault(),He.stopPropagation(),He.button&&He.button>0)return!1;let Ee=1;if(x=Object.assign({},O.defaults.resizeit,h),(x.containment||x.containment===0)&&(x.containment=O.pOcontainment(x.containment)),x.aspectRatio&&x.aspectRatio===!0&&(x.aspectRatio="panel"),O.modifier){let he=O.modifier;he.altKey?x.aspectRatio="content":he.ctrlKey?x.aspectRatio="panel":he.shiftKey&&(x.aspectRatio=!1,Ee=2)}let Z=typeof x.maxWidth=="function"?x.maxWidth():x.maxWidth||1e4,Ke=typeof x.maxHeight=="function"?x.maxHeight():x.maxHeight||1e4,Oe=typeof x.minWidth=="function"?x.minWidth():x.minWidth,ce=typeof x.minHeight=="function"?x.minHeight():x.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(he=>he.style.pointerEvents="none");const ge=n.parentElement,Ct=ge.tagName.toLowerCase(),ie=n.getBoundingClientRect(),Ve=ge.getBoundingClientRect(),sn=window.getComputedStyle(ge,null),zt=parseInt(sn.borderLeftWidth,10),Ge=parseInt(sn.borderTopWidth,10),Et=sn.getPropertyValue("position"),De=He.clientX||He.clientX===0||He.touches[0].clientX,Me=He.clientY||He.clientY===0||He.touches[0].clientY,yt=De/Me,Qe=He.target.classList,xe=n.getScaleFactor(),ve=ie.width/ie.height,kt=n.content.getBoundingClientRect(),Ne=kt.width/kt.height,ht=n.header.getBoundingClientRect().height,st=n.footer.getBoundingClientRect().height||0;let Je=ie.left,Ie=ie.top,le=1e4,Ye=1e4,Y=1e4,Ze=1e4;We=ie.width,rt=ie.height,Ct!=="body"&&(Je=ie.left-Ve.left+ge.scrollLeft,Ie=ie.top-Ve.top+ge.scrollTop),Ct==="body"&&x.containment?(le=document.documentElement.clientWidth-ie.left,Y=document.documentElement.clientHeight-ie.top,Ye=ie.width+ie.left,Ze=ie.height+ie.top):x.containment&&(Et==="static"?(le=Ve.width-ie.left+zt,Y=Ve.height+Ve.top-ie.top+Ge,Ye=ie.width+(ie.left-Ve.left)-zt,Ze=ie.height+(ie.top-Ve.top)-Ge):(le=ge.clientWidth-(ie.left-Ve.left)/xe.x+zt,Y=ge.clientHeight-(ie.top-Ve.top)/xe.y+Ge,Ye=(ie.width+ie.left-Ve.left)/xe.x-zt,Ze=n.clientHeight+(ie.top-Ve.top)/xe.y-Ge)),x.containment&&(Ye-=x.containment[3],Ze-=x.containment[0],le-=x.containment[1],Y-=x.containment[2]);const lt=window.getComputedStyle(n),xt=parseFloat(lt.width)-ie.width,X=parseFloat(lt.height)-ie.height;let Wt=parseFloat(lt.left)-ie.left,Gt=parseFloat(lt.top)-ie.top;ge!==document.body&&(Wt+=Ve.left,Gt+=Ve.top);let it=parseInt(lt.borderTopWidth,10),on=parseInt(lt.borderRightWidth,10),re=parseInt(lt.borderBottomWidth,10),ke=parseInt(lt.borderLeftWidth,10);ae=he=>{he.preventDefault(),ue||(document.dispatchEvent(w),x.start.length&&O.processCallbacks(n,x.start,!1,{width:We,height:rt,left:Je,top:Ie},he),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),ie.height>rt+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),ue=1,document.dispatchEvent(T);let Te=he.touches?he.touches[0].clientX:he.clientX,qe=he.touches?he.touches[0].clientY:he.clientY,Pe;Qe.contains("jsPanel-resizeit-e")?(N=We+(Te-De)*Ee/xe.x+xt,N>=le&&(N=le),N>=Z&&(N=Z),N<=Oe&&(N=Oe),n.style.width=N+"px",Ee===2&&(n.style.left=Je-(Te-De)+"px"),x.aspectRatio==="content"?(n.style.height=(N-on-ke)/Ne+ht+st+it+re+"px",x.containment&&(Pe=n.overlaps(ge),Pe.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*Ne+"px"))):x.aspectRatio==="panel"&&(n.style.height=N/ve+"px",x.containment&&(Pe=n.overlaps(ge),Pe.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*ve+"px")))):Qe.contains("jsPanel-resizeit-s")?(K=rt+(qe-Me)*Ee/xe.y+X,K>=Y&&(K=Y),K>=Ke&&(K=Ke),K<=ce&&(K=ce),n.style.height=K+"px",Ee===2&&(n.style.top=Ie-(qe-Me)+"px"),x.aspectRatio==="content"?(n.style.width=(K-ht-st-it-re)*Ne+it+re+"px",x.containment&&(Pe=n.overlaps(ge),Pe.right<=x.containment[1]&&(n.style.width=le+"px",n.style.height=le/Ne+"px"))):x.aspectRatio==="panel"&&(n.style.width=K*ve+"px",x.containment&&(Pe=n.overlaps(ge),Pe.right<=x.containment[1]&&(n.style.width=le+"px",n.style.height=le/ve+"px")))):Qe.contains("jsPanel-resizeit-w")?(N=We+(De-Te)*Ee/xe.x+xt,N<=Z&&N>=Oe&&N<=Ye&&(n.style.left=Je+(Te-De)/xe.x+Wt+"px"),N>=Ye&&(N=Ye),N>=Z&&(N=Z),N<=Oe&&(N=Oe),n.style.width=N+"px",x.aspectRatio==="content"?(n.style.height=(N-on-ke)/Ne+ht+st+it+re+"px",x.containment&&(Pe=n.overlaps(ge),Pe.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*Ne+"px"))):x.aspectRatio==="panel"&&(n.style.height=N/ve+"px",x.containment&&(Pe=n.overlaps(ge),Pe.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*ve+"px")))):Qe.contains("jsPanel-resizeit-n")?(K=rt+(Me-qe)*Ee/xe.y+X,K<=Ke&&K>=ce&&K<=Ze&&(n.style.top=Ie+(qe-Me)/xe.y+Gt+"px"),K>=Ze&&(K=Ze),K>=Ke&&(K=Ke),K<=ce&&(K=ce),n.style.height=K+"px",x.aspectRatio==="content"?(n.style.width=(K-ht-st-it-re)*Ne+it+re+"px",x.containment&&(Pe=n.overlaps(ge),Pe.right<=x.containment[1]&&(n.style.width=le+"px",n.style.height=le/Ne+"px"))):x.aspectRatio==="panel"&&(n.style.width=K*ve+"px",x.containment&&(Pe=n.overlaps(ge),Pe.right<=x.containment[1]&&(n.style.width=le+"px",n.style.height=le/ve+"px")))):Qe.contains("jsPanel-resizeit-se")?(N=We+(Te-De)*Ee/xe.x+xt,N>=le&&(N=le),N>=Z&&(N=Z),N<=Oe&&(N=Oe),n.style.width=N+"px",Ee===2&&(n.style.left=Je-(Te-De)+"px"),x.aspectRatio&&(n.style.height=N/ve+"px"),K=rt+(qe-Me)*Ee/xe.y+X,K>=Y&&(K=Y),K>=Ke&&(K=Ke),K<=ce&&(K=ce),n.style.height=K+"px",Ee===2&&(n.style.top=Ie-(qe-Me)+"px"),x.aspectRatio==="content"?(n.style.width=(K-ht-st-it-re)*Ne+it+re+"px",x.containment&&(Pe=n.overlaps(ge),Pe.right<=x.containment[1]&&(n.style.width=le+"px",n.style.height=le/Ne+"px"))):x.aspectRatio==="panel"&&(n.style.width=K*ve+"px",x.containment&&(Pe=n.overlaps(ge),Pe.right<=x.containment[1]&&(n.style.width=le+"px",n.style.height=le/ve+"px")))):Qe.contains("jsPanel-resizeit-sw")?(K=rt+(qe-Me)*Ee/xe.y+X,K>=Y&&(K=Y),K>=Ke&&(K=Ke),K<=ce&&(K=ce),n.style.height=K+"px",Ee===2&&(n.style.top=Ie-(qe-Me)+"px"),x.aspectRatio&&(n.style.width=K*ve+"px"),N=We+(De-Te)*Ee/xe.x+xt,N<=Z&&N>=Oe&&N<=Ye&&(n.style.left=Je+(Te-De)/xe.x+Wt+"px"),N>=Ye&&(N=Ye),N>=Z&&(N=Z),N<=Oe&&(N=Oe),n.style.width=N+"px",x.aspectRatio==="content"?(n.style.height=(N-on-ke)/Ne+ht+st+it+re+"px",x.containment&&(Pe=n.overlaps(ge),Pe.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*Ne+"px"))):x.aspectRatio==="panel"&&(n.style.height=N/ve+"px",x.containment&&(Pe=n.overlaps(ge),Pe.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*ve+"px")))):Qe.contains("jsPanel-resizeit-ne")?(N=We+(Te-De)*Ee/xe.x+xt,N>=le&&(N=le),N>=Z&&(N=Z),N<=Oe&&(N=Oe),n.style.width=N+"px",Ee===2&&(n.style.left=Je-(Te-De)+"px"),x.aspectRatio&&(n.style.height=N/ve+"px"),K=rt+(Me-qe)*Ee/xe.y+X,K<=Ke&&K>=ce&&K<=Ze&&(n.style.top=Ie+(qe-Me)/xe.y+Gt+"px"),K>=Ze&&(K=Ze),K>=Ke&&(K=Ke),K<=ce&&(K=ce),n.style.height=K+"px",x.aspectRatio==="content"?(n.style.width=(K-ht-st-it-re)*Ne+it+re+"px",x.containment&&(Pe=n.overlaps(ge),Pe.right<=x.containment[1]&&(n.style.width=le+"px",n.style.height=le/Ne+"px"))):x.aspectRatio==="panel"&&(n.style.width=K*ve+"px",x.containment&&(Pe=n.overlaps(ge),Pe.right<=x.containment[1]&&(n.style.width=le+"px",n.style.height=le/ve+"px")))):Qe.contains("jsPanel-resizeit-nw")&&(x.aspectRatio&&Qe.contains("jsPanel-resizeit-nw")&&(Te=qe*yt,qe=Te/yt),N=We+(De-Te)*Ee/xe.x+xt,N<=Z&&N>=Oe&&N<=Ye&&(n.style.left=Je+(Te-De)/xe.x+Wt+"px"),N>=Ye&&(N=Ye),N>=Z&&(N=Z),N<=Oe&&(N=Oe),n.style.width=N+"px",x.aspectRatio&&(n.style.height=N/ve+"px"),K=rt+(Me-qe)*Ee/xe.y+X,K<=Ke&&K>=ce&&K<=Ze&&(n.style.top=Ie+(qe-Me)/xe.y+Gt+"px"),K>=Ze&&(K=Ze),K>=Ke&&(K=Ke),K<=ce&&(K=ce),n.style.height=K+"px",x.aspectRatio==="content"?n.style.width=(K-ht-st-it-re)*Ne+it+re+"px":x.aspectRatio==="panel"&&(n.style.width=K*ve+"px")),window.getSelection().removeAllRanges();const It=window.getComputedStyle(n),Le={left:parseFloat(It.left),top:parseFloat(It.top),right:parseFloat(It.right),bottom:parseFloat(It.bottom),width:parseFloat(It.width),height:parseFloat(It.height)};x.resize.length&&O.processCallbacks(n,x.resize,!1,Le,he)},O.pointermove.forEach(he=>document.addEventListener(he,ae,!1)),window.addEventListener("mouseout",Be,!1)})}),O.pointerup.forEach(function(_e){document.addEventListener(_e,Fe),window.removeEventListener("mouseout",Be)}),h.disable&&(we.style.pointerEvents="none")}),n},n.resizeit=h=>{const w=n.querySelectorAll(".jsPanel-resizeit-handle");return h==="disable"?w.forEach(T=>T.style.pointerEvents="none"):w.forEach(T=>T.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const h=n.getBoundingClientRect();return{x:h.width/n.offsetWidth,y:h.height/n.offsetHeight}},n.calcSizeFactors=()=>{const h=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(h.left)/(window.innerWidth-parseFloat(h.width)),n.vf=parseFloat(h.top)/(window.innerHeight-parseFloat(h.height));else if(n.parentElement){let w=n.parentElement.getBoundingClientRect();n.hf=parseFloat(h.left)/(w.width-parseFloat(h.width)),n.vf=parseFloat(h.top)/(w.height-parseFloat(h.height))}},n.saveCurrentDimensions=()=>{const h=window.getComputedStyle(n);n.currentData.width=h.width,n.currentData.height=h.height},n.saveCurrentPosition=()=>{const h=window.getComputedStyle(n);n.currentData.left=h.left,n.currentData.top=h.top},n.reposition=(...h)=>{let w=e.position,T=!0,b;return h.forEach(x=>{typeof x=="string"||typeof x=="object"?w=x:typeof x=="boolean"?T=x:typeof x=="function"&&(b=x)}),O.position(n,w),n.slaves&&n.slaves.size>0&&n.slaves.forEach(x=>x.reposition()),T&&n.saveCurrentPosition(),b&&b.call(n,n),n},n.repositionOnSnap=h=>{let w="0",T="0",b=O.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(h){case"left-top":w=b[3],T=b[0];break;case"right-top":w=-b[1],T=b[0];break;case"right-bottom":w=-b[1],T=-b[2];break;case"left-bottom":w=b[3],T=-b[2];break;case"center-top":w=b[3]/2-b[1]/2,T=b[0];break;case"center-bottom":w=b[3]/2-b[1]/2,T=-b[2];break;case"left-center":w=b[3],T=b[0]/2-b[2]/2;break;case"right-center":w=-b[1],T=b[0]/2-b[2]/2;break}O.position(n,h),O.setStyles(n,{left:`calc(${n.style.left} + ${w}px)`,top:`calc(${n.style.top} + ${T}px)`})},n.overlaps=(h,w,T)=>{let b=n.getBoundingClientRect(),x=getComputedStyle(n.parentElement),ae=n.getScaleFactor(),ue={top:0,right:0,bottom:0,left:0},N,K=0,We=0,rt=0,Ut=0;n.options.container!=="window"&&w==="paddingbox"&&(ue.top=parseInt(x.borderTopWidth,10)*ae.y,ue.right=parseInt(x.borderRightWidth,10)*ae.x,ue.bottom=parseInt(x.borderBottomWidth,10)*ae.y,ue.left=parseInt(x.borderLeftWidth,10)*ae.x),typeof h=="string"?h==="window"?N={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:h==="parent"?N=n.parentElement.getBoundingClientRect():N=document.querySelector(h).getBoundingClientRect():N=h.getBoundingClientRect(),T&&(K=T.touches?T.touches[0].clientX:T.clientX,We=T.touches?T.touches[0].clientY:T.clientY,rt=K-N.left,Ut=We-N.top);let Be=b.left<N.right&&b.right>N.left,Fe=b.top<N.bottom&&b.bottom>N.top;return{overlaps:Be&&Fe,top:b.top-N.top-ue.top,right:N.right-b.right-ue.right,bottom:N.bottom-b.bottom-ue.bottom,left:b.left-N.left-ue.left,parentBorderWidth:ue,panelRect:b,referenceRect:N,pointer:{clientX:K,clientY:We,left:rt-ue.left,top:Ut-ue.top,right:N.width-rt-ue.right,bottom:N.height-Ut-ue.bottom}}},n.setSize=()=>{if(e.panelSize){const h=O.pOsize(n,e.panelSize);n.style.width=h.width,n.style.height=h.height}else if(e.contentSize){const h=O.pOsize(n,e.contentSize);n.content.style.width=h.width,n.content.style.height=h.height,n.style.width=h.width,n.content.style.width="100%"}return n},n.resize=(...h)=>{let w=window.getComputedStyle(n),T={width:w.width,height:w.height},b=!0,x;h.forEach(N=>{typeof N=="string"?T=N:typeof N=="object"?T=Object.assign(T,N):typeof N=="boolean"?b=N:typeof N=="function"&&(x=N)});let ae=O.pOsize(n,T);n.style.width=ae.width,n.style.height=ae.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(N=>N.reposition()),b&&n.saveCurrentDimensions(),n.status="normalized";let ue=n.controlbar.querySelector(".jsPanel-btn-smallify");return ue&&(ue.style.transform="rotate(0deg)"),x&&x.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=h=>{if(h.target===window){let w=n.status,T=e.onwindowresize,b,x;if(w==="maximized"&&T)n.maximize(!1,!0);else if(n.snapped&&w!=="minimized")n.snap(n.snapped,!0);else if(w==="normalized"||w==="smallified"||w==="maximized"){let ae=typeof T;ae==="boolean"?(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",x=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=x<=0?0:x+"px"):ae==="function"?T.call(n,h,n):ae==="object"&&(T.preset===!0&&(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",x=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=x<=0?0:x+"px"),T.callback.call(n,h,n))}else w==="smallifiedmax"&&T&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(ae=>ae.reposition())}},n.setControls=(h,w)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(T=>{const b=T.className.split("-"),x=b[b.length-1];n.getAttribute(`data-btn${x}`)!=="hidden"&&(T.style.display="block")}),h.forEach(T=>{const b=n.controlbar.querySelector(T);b&&(b.style.display="none")}),w&&w.call(n,n),n),n.setControlStatus=(h,w="enable",T)=>{const b=n.controlbar.querySelector(`.jsPanel-btn-${h}`);switch(w){case"disable":n.getAttribute(`data-btn${h}`)!=="removed"&&(n.setAttribute(`data-btn${h}`,"disabled"),b.style.pointerEvents="none",b.style.opacity=.4,b.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${h}`)!=="removed"&&(n.setAttribute(`data-btn${h}`,"hidden"),b.style.display="none");break;case"show":n.getAttribute(`data-btn${h}`)!=="removed"&&(n.setAttribute(`data-btn${h}`,"enabled"),b.style.display="block",b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${h}`)!=="removed"&&(n.getAttribute(`data-btn${h}`)==="hidden"&&(b.style.display="block"),n.setAttribute(`data-btn${h}`,"enabled"),b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(b),n.setAttribute(`data-btn${h}`,"removed");break}return T&&T.call(n,n),n},n.setControlSize=h=>{const w=h.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(b=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(x=>b.classList.remove(x)),b.classList.add(`jsPanel-btn-${w}`)}),w==="xl"?n.titlebar.style.fontSize="1.5rem":w==="lg"?n.titlebar.style.fontSize="1.25rem":w==="md"?n.titlebar.style.fontSize="1.05rem":w==="sm"?n.titlebar.style.fontSize=".9rem":w==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=h=>{if(n.options.headerControls.add){let x=n.options.headerControls.add;Array.isArray(x)||(x=[x]),x.forEach(ae=>n.addControl(ae))}let w=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(x=>{let ae=x.className.match(/jsPanel-btn-[a-z\d]{3,}/i),ue=ae[0].substring(12);w.push(ue)});const b=O.pOheaderControls(e.headerControls);return e.headerControls=b,w.forEach(x=>{b[x]&&n.setControlStatus(x,b[x])}),n.setControlSize(b.size),h&&h.call(n,n),n},n.setHeaderLogo=(h,w)=>{let T=[n.headerlogo],b=document.querySelector("#"+n.id+"-min");return b&&T.push(b.querySelector(".jsPanel-headerlogo")),typeof h=="string"?h.startsWith("<")?T.forEach(x=>x.innerHTML=h):T.forEach(x=>{O.emptyNode(x);let ae=document.createElement("img");ae.src=h,x.append(ae)}):T.forEach(x=>{O.emptyNode(x),x.append(h)}),n.headerlogo.childNodes.forEach(x=>{x.nodeName&&x.nodeName==="IMG"&&x.setAttribute("draggable","false")}),w&&w.call(n,n),n},n.setHeaderRemove=h=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(w=>n.setAttribute(`data-btn${w}`,"removed")),h&&h.call(n,n),n),n.setHeaderTitle=(h,w)=>{let T=[n.headertitle],b=document.querySelector("#"+n.id+"-min");return b&&T.push(b.querySelector(".jsPanel-title")),typeof h=="string"?T.forEach(x=>x.innerHTML=h):typeof h=="function"?T.forEach(x=>{O.emptyNode(x),x.innerHTML=h()}):T.forEach(x=>{O.emptyNode(x),x.append(h)}),w&&w.call(n,n),n},n.setIconfont=(h,w=n,T)=>{if(h){let b,x;if(h==="fa"||h==="far"||h==="fal"||h==="fas"||h==="fad")b=[`${h} fa-window-close`,`${h} fa-window-maximize`,`${h} fa-window-restore`,`${h} fa-window-minimize`,`${h} fa-chevron-up`];else if(h==="material-icons")b=[h,h,h,h,h,h],x=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(h))b=[`custom-control-icon ${h[4]}`,`custom-control-icon ${h[3]}`,`custom-control-icon ${h[2]}`,`custom-control-icon ${h[1]}`,`custom-control-icon ${h[0]}`];else if(h==="bootstrap"||h==="glyphicon")b=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return w;w.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(ae=>O.emptyNode(ae).innerHTML="<span></span>"),Array.prototype.slice.call(w.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((ae,ue)=>{ae.className=b[ue],h==="material-icons"&&(ae.textContent=x[ue])})}return T&&T.call(w,w),w},n.addToolbar=(h,w,T)=>{if(h==="header"?h=n.headertoolbar:h==="footer"&&(h=n.footer),typeof w=="string")h.innerHTML=w;else if(Array.isArray(w))w.forEach(b=>{typeof b=="string"?h.innerHTML+=b:h.append(b)});else if(typeof w=="function"){let b=w.call(n,n);typeof b=="string"?h.innerHTML=b:h.append(b)}else h.append(w);return h.classList.add("active"),T&&T.call(n,n),n},n.addCloseControl=()=>{let h=document.createElement("button"),w=n.content.style.color;return h.classList.add("jsPanel-addCloseCtrl"),h.innerHTML=O.icons.close,h.style.color=w,n.options.rtl&&h.classList.add("rtl"),n.appendChild(h),O.pointerup.forEach(T=>{h.addEventListener(T,b=>{if(b.preventDefault(),b.button&&b.button>0)return!1;n.close(null,!0)})}),O.pointerdown.forEach(T=>{h.addEventListener(T,b=>b.preventDefault())}),n},n.addControl=h=>{if(!h.html)return n;h.position||(h.position=1);const w=n.controlbar.querySelectorAll(".jsPanel-btn").length;let T=document.createElement("button");T.innerHTML=h.html,T.className=`jsPanel-btn jsPanel-btn-${h.name} jsPanel-btn-${e.headerControls.size}`,T.style.color=n.header.style.color,h.position>w?n.controlbar.append(T):n.controlbar.insertBefore(T,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${h.position})`));const b=h.ariaLabel||h.name;return b&&T.setAttribute("aria-label",b),O.pointerup.forEach(x=>{T.addEventListener(x,ae=>{if(ae.preventDefault(),ae.button&&ae.button>0)return!1;h.handler.call(n,n,T)})}),h.afterInsert&&h.afterInsert.call(T,T),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(h=>{h.dir="rtl",e.rtl.lang&&(h.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),s.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),O.isIE){let h=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":h.forEach(w=>{w.style.height="34px"});break;case"xs":h.forEach(w=>{w.style.height="26px"});break;case"sm":h.forEach(w=>{w.style.height="30px"});break;case"lg":h.forEach(w=>{w.style.height="38px"});break;case"xl":h.forEach(w=>{w.style.height="42px"});break}}if(e.header==="auto-show-hide"){let h="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,h),this.setClass(n.content,h),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,O.setClass(n,h),O.remClass(n.content,h)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,O.remClass(n,h),O.setClass(n.content,h)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[h,w]of Object.entries(e.css))if(h==="panel")n.className+=` ${w}`;else{let T=n.querySelector(`.jsPanel-${h}`);T&&(T.className+=` ${w}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const h=e.contentOverflow.split(" ");h.length===1?n.content.style.overflow=h[0]:h.length===2&&(n.content.style.overflowX=h[0],n.content.style.overflowY=h[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let h=Object.assign({},O.defaultAutocloseConfig,e.autoclose);h.time&&typeof h.time=="number"&&(h.time+="ms");let w=n.progressbar.querySelector("div");w.addEventListener("animationend",T=>{T.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),h.progressbar&&(n.progressbar.classList.add("active"),h.background?O.colorNames[h.background]?n.progressbar.style.background="#"+O.colorNames[h.background]:n.progressbar.style.background=h.background:n.progressbar.classList.add("success-bg")),w.style.animation=`${h.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(m),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let h=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=h,e.dragit.snap===!0?(e.dragit.snap=O.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=h)}if(e.dragit?(["start","drag","stop"].forEach(h=>{e.dragit[h]?typeof e.dragit[h]=="function"&&(e.dragit[h]=[e.dragit[h]]):e.dragit[h]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",h=>{h.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(w=>{e.resizeit[w]?typeof e.resizeit[w]=="function"&&(e.resizeit[w]=[e.resizeit[w]]):e.resizeit[w]=[]}),n.sizeit(e.resizeit);let h;n.addEventListener("jspanelresizestart",w=>{w.panel===n&&(h=n.status)},!1),n.addEventListener("jspanelresizestop",w=>{w.panel===n&&(h==="smallified"||h==="smallifiedmax"||h==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(h=>{n.addEventListener(h,w=>{!w.target.closest(".jsPanel-btn-close")&&!w.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let h=e.onparentresize,w=typeof h,T=n.isChildpanel();if(T){const b=T.content;let x=[];n.parentResizeHandler=ae=>{if(ae.panel===T){x[0]=b.offsetWidth,x[1]=b.offsetHeight;let ue=n.status,N,K;ue==="maximized"&&h?n.maximize():n.snapped&&ue!=="minimized"?n.snap(n.snapped,!0):ue==="normalized"||ue==="smallified"||ue==="maximized"?w==="function"?h.call(n,n,{width:x[0],height:x[1]}):w==="object"&&h.preset===!0?(N=(x[0]-n.offsetWidth)*n.hf,n.style.left=N<=0?0:N+"px",K=(x[1]-n.offsetHeight)*n.vf,n.style.top=K<=0?0:K+"px",h.callback.call(n,n,{width:x[0],height:x[1]})):w==="boolean"&&(N=(x[0]-n.offsetWidth)*n.hf,n.style.left=N<=0?0:N+"px",K=(x[1]-n.offsetHeight)*n.vf,n.style.top=K<=0?0:K+"px"):ue==="smallifiedmax"&&h&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(h=>h.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(h=>h.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(h=>h.call(n,n)):t.call(n,n)),document.dispatchEvent(a),n}};const Xd=.25,Gd=4;function Qd(e){return Math.min(Gd,Math.max(Xd,e))}function wo(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const Ir={x:0,y:0,scale:1};function vo(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Jd(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function Zd(e,t){let r={...Ir};t.style.transformOrigin="0 0";const s=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`};let n="none",a={...Ir},c=0,f=0,m=0,$=0,S=0,C=0;const z=(h,w)=>{const T=e.getBoundingClientRect();return{x:h-T.left,y:w-T.top}},B=h=>{if(h.touches.length===2){n="pinch",a={...r};const[w,T]=[h.touches[0],h.touches[1]];m=vo(w,T)||1;const b=z((w.clientX+T.clientX)/2,(w.clientY+T.clientY)/2);$=(b.x-r.x)/r.scale,S=(b.y-r.y)/r.scale,h.preventDefault();return}if(h.touches.length===1&&!Jd(h.target)){const w=h.timeStamp;if(w-C<300){r={...Ir},s(),C=0,n="none",h.preventDefault();return}C=w,n="pan",a={...r},c=h.touches[0].clientX,f=h.touches[0].clientY}else n="none"},q=h=>{if(n==="pan"&&h.touches.length===1){const w=h.touches[0];r=wo(a,w.clientX-c,w.clientY-f),s(),h.preventDefault()}else if(n==="pinch"&&h.touches.length>=2){const[w,T]=[h.touches[0],h.touches[1]],b=Qd(a.scale*(vo(w,T)/m)),x=z((w.clientX+T.clientX)/2,(w.clientY+T.clientY)/2);r={x:x.x-$*b,y:x.y-S*b,scale:b},s(),h.preventDefault()}},te=h=>{h.touches.length===0?n="none":h.touches.length===1&&n==="pinch"&&(n="pan",a={...r},c=h.touches[0].clientX,f=h.touches[0].clientY)};let oe=!1,fe={...Ir},Se=0,Xe=0,ne=!1;const de=(h,w)=>{const T=e.getBoundingClientRect();return h>=T.left&&h<=T.right&&w>=T.top&&w<=T.bottom},Ce=h=>{if(!oe)return;const w=h.clientX-Se,T=h.clientY-Xe;!ne&&Math.hypot(w,T)<4||(ne=!0,document.body.style.cursor="grabbing",r=wo(fe,w,T),s(),h.preventDefault())},ze=()=>{oe&&(oe=!1,document.body.style.cursor="",window.removeEventListener("mousemove",Ce,!0),window.removeEventListener("mouseup",vt,!0))};function vt(){ze()}const Rt=h=>{h.button===2&&de(h.clientX,h.clientY)&&(oe=!0,ne=!1,fe={...r},Se=h.clientX,Xe=h.clientY,window.addEventListener("mousemove",Ce,!0),window.addEventListener("mouseup",vt,!0))},Xt=h=>{ne&&(h.preventDefault(),ne=!1)};return e.addEventListener("touchstart",B,{passive:!1}),e.addEventListener("touchmove",q,{passive:!1}),e.addEventListener("touchend",te),e.addEventListener("touchcancel",te),window.addEventListener("mousedown",Rt,!0),window.addEventListener("contextmenu",Xt,!0),()=>{e.removeEventListener("touchstart",B),e.removeEventListener("touchmove",q),e.removeEventListener("touchend",te),e.removeEventListener("touchcancel",te),window.removeEventListener("mousedown",Rt,!0),window.removeEventListener("contextmenu",Xt,!0),ze()}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ma=Symbol.for(""),ef=e=>{if(e?.r===ma)return e?._$litStatic$},tf=e=>({_$litStatic$:e,r:ma}),xo=new Map,nf=e=>(t,...r)=>{const s=r.length;let n,a;const c=[],f=[];let m,$=0,S=!1;for(;$<s;){for(m=t[$];$<s&&(a=r[$],(n=ef(a))!==void 0);)m+=n+t[++$],S=!0;$!==s&&f.push(a),c.push(m),$++}if($===s&&c.push(t[s]),S){const C=c.join("$$lit$$");(t=xo.get(C))===void 0&&(c.raw=c,xo.set(C,t=c)),r=f}return e(t,...r)},rf=nf(H);var sf=Object.defineProperty,of=Object.getOwnPropertyDescriptor,ns=(e,t,r,s)=>{for(var n=s>1?void 0:s?of(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&sf(t,r,n),n};let Bt=class extends nt{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r){return this.values=t,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(s=>{this.resolveFn=s,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),Bt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Bt.instance===this&&(Bt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(r=>r.value.toLowerCase().includes(e));return H`
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
      ${t.length===0?H`<div class="empty">No matching values.</div>`:H`<ul>
            ${t.slice(0,500).map(r=>H`
                <li
                  class=${r.value===this.current?"selected":""}
                  @click=${()=>this.close(r.value)}
                >
                  <span class="label">${r.value||H`<em>(empty)</em>`}</span>
                  <span class="count">${r.count}</span>
                </li>
              `)}
          </ul>`}
      ${this.values.length>500?H`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
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
    `];ns([tn({type:Array})],Bt.prototype,"values",2);ns([tn({type:String})],Bt.prototype,"current",2);ns([J()],Bt.prototype,"search",2);Bt=ns([dt("filter-popover")],Bt);var af=Object.defineProperty,lf=Object.getOwnPropertyDescriptor,qt=(e,t,r,s)=>{for(var n=s>1?void 0:s?lf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&af(t,r,n),n};let Dt=class extends nt{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const s of this.options)if(s.toLowerCase().includes(t)&&(r.push(s),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return H`
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
        ${this.value?H`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${r=>r.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:Re}
      </div>
      ${this.open?H`<ul class="dropdown" style=${t}>
            ${e.length===0?H`<li class="empty">No matching values.</li>`:e.map((r,s)=>H`
                    <li
                      class=${s===this.highlightIdx?"highlighted":""}
                      @mousedown=${n=>n.preventDefault()}
                      @click=${()=>this.onPick(r)}
                    >
                      ${r}
                    </li>
                  `)}
          </ul>`:Re}
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
  `;qt([tn({type:String})],Dt.prototype,"value",2);qt([tn({type:Array})],Dt.prototype,"options",2);qt([tn({type:String})],Dt.prototype,"placeholder",2);qt([J()],Dt.prototype,"open",2);qt([J()],Dt.prototype,"highlightIdx",2);qt([J()],Dt.prototype,"dropTop",2);qt([J()],Dt.prototype,"dropLeft",2);qt([J()],Dt.prototype,"dropMinWidth",2);qt([J()],Dt.prototype,"editing",2);qt([Un("input")],Dt.prototype,"inputEl",2);Dt=qt([dt("filter-combobox")],Dt);var cf=Object.defineProperty,uf=Object.getOwnPropertyDescriptor,ft=(e,t,r,s)=>{for(var n=s>1?void 0:s?uf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&cf(t,r,n),n};const df=200;let ot=class extends nt{constructor(){super(...arguments),this.tableId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;t.tableId===this.tableId&&(this.localQuery=t.query??"")}}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.()}async updated(e){e.has("tableId")&&this.tableId&&(this.unsubscribe?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells()}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",ff(t))}async bind(){if(!this.tableId)return;const e=await je(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const a=n.find(c=>c.id===this.tableId);a&&this.applyTable(a)}),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const s=window.setTimeout(()=>this.loading=!0,df);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(s),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filters={...e.filters??{}}}async setCell(e,t,r){const s=await je();await this.commitCell(s,e,t,r)}async commitCell(e,t,r,s){const n=this.columns.find(a=>a.field===r);if(n){const a=hf(n,s,this.rows,t.id);if(a){await e.api.ui.dialogs.alert(a,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:s},updatedAt:Date.now()})}catch(a){await e.api.ui.dialogs.alert(a?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}renderCell(e,t){const r=e.data[t.field],s=t.renderer,n=s?this.cellRenderers?.get(s):void 0;if(n){const a=tf(n);return rf`<${a}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        @change=${c=>this.setCell(e,t.field,c.detail.value)}
      ></${a}>`}switch(t.type){case"boolean":return H`<input
          type="checkbox"
          .checked=${r===!0||r==="true"||r===1||r==="1"}
          @change=${c=>this.setCell(e,t.field,c.target.checked)}
        />`;case"date":return H`<input
          type="date"
          .value=${pf(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"datetime":return H`<input
          type="datetime-local"
          .value=${mf(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"number":return H`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${a=>{const c=a.target.value;this.setCell(e,t.field,c===""?null:Number(c))}}
        />`;default:return H`<input
          type="text"
          .value=${String(r??"")}
          @change=${a=>this.setCell(e,t.field,a.target.value)}
        />`}}async deleteRow(e){const t=await je();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await je(),s=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};await r.store.tables.patch(this.tableId,s)}filteredRows(){const e=Object.entries(this.filters).filter(([,s])=>s&&s.trim().length>0),t=this.globalQuery.trim().toLowerCase(),r=this.localQuery.trim().toLowerCase();return e.length===0&&t.length===0&&r.length===0?this.rows:this.rows.filter(s=>{const n=a=>Object.values(s.data).some(c=>c!=null&&String(c).toLowerCase().includes(a));return t.length>0&&!n(t)||r.length>0&&!n(r)?!1:e.every(([a,c])=>String(s.data[a]??"").toLowerCase().includes(c.toLowerCase()))})}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,s=this.columns.find(c=>c.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,a=[...e];return a.sort((c,f)=>{const m=c.data[t],$=f.data[t],S=m==null||m==="",C=$==null||$==="";return S||C?S===C?0:S?1:-1:gf(m,$,s)*n}),a}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,s=Bt.instance;if(!s)return;const n=new Map;for(const f of this.rowsFacetedFor(t)){const m=f.data[t];if(m==null)continue;const $=String(m);n.set($,(n.get($)??0)+1)}const a=[...n.entries()].map(([f,m])=>({value:f,count:m})).sort((f,m)=>m.count-f.count||f.value.localeCompare(m.value)),c=await s.open(r.getBoundingClientRect(),a,this.filters[t]??"");c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>this.saveFilters(),250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,s])=>s&&s.trim().length>0&&r!==e).map(([r,s])=>[r,s.trim().toLowerCase()]);return t.length===0?this.rows:this.rows.filter(r=>t.every(([s,n])=>String(r.data[s]??"").toLowerCase().includes(n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,s=500;for(const n of this.visibleColumns){let a=!0;for(const f of t){const m=f.data[n.field];if(m==null)continue;if((typeof m=="string"?m:String(m)).length>=r){a=!1;break}}if(!a)continue;const c=new Set;for(const f of this.rowsFacetedFor(n.field)){const m=f.data[n.field];if(m==null||m==="")continue;const $=typeof m=="string"?m:String(m);if(!($.length>=r)&&(c.add($),c.size>=s))break}e.set(n.field,[...c].sort())}return e}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const s=r.offsetWidth;this.resizing={field:t,startX:e.clientX,startW:s};const n=c=>{if(!this.resizing)return;const f=c.clientX-this.resizing.startX,m=Math.max(40,this.resizing.startW+f);this.columns=this.columns.map($=>$.field===this.resizing.field?{...$,width:m}:$)},a=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",a);const c=this.resizing?.field;if(this.resizing=null,!c)return;await(await je()).store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",a)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const s=r.getBoundingClientRect(),n=e.clientX<s.left+s.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,s=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!s)return;const n=[...this.columns],a=n.findIndex($=>$.field===r);if(a<0)return;const[c]=n.splice(a,1);let f=n.findIndex($=>$.field===t);if(f<0){n.splice(a,0,c);return}s==="after"&&(f+=1),n.splice(f,0,c),await(await je()).store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await je(),t={};for(const[s,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[s]=n);const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,s=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,s+r);return{slice:e.slice(s,n),topPad:s*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows(),t=this.visibleColumns,{slice:r,topPad:s,bottomPad:n}=this.virtualSlice(e),a=this.computeFilterSuggestions();return H`
      ${this.loading?H`<div class="load-bar" role="progressbar" aria-label="Loading rows">
            <div class="load-bar-fill"></div>
          </div>`:Re}
      <table>
        <colgroup>
          ${t.map(c=>H`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(c=>{const f=this.sortColumn===c.field&&this.sortDir,m=f==="asc"?"▲":f==="desc"?"▼":"⇅",$=`t-${c.type}`,S=this.dragSourceField===c.field,C=this.dropTargetField===c.field,z=C&&this.dropEdge==="before"?" drop-before":C&&this.dropEdge==="after"?" drop-after":"";return H`
                <th
                  class=${`${$}${f?" sorted":""}${S?" drag-source":""}${z}`}
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
            ${t.map(c=>{const f=a.get(c.field)??[];return H`
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
          ${s>0?H`<tr class="spacer" style=${`height:${s}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${r.map(c=>H`
              <tr>
                ${t.map(f=>H`<td class=${`t-${f.type}`}>${this.renderCell(c,f)}</td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(c.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?H`<tr class="spacer" style=${`height:${n}px`}>
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
    `];ft([tn({type:String})],ot.prototype,"tableId",2);ft([J()],ot.prototype,"columns",2);ft([J()],ot.prototype,"rows",2);ft([J()],ot.prototype,"sortColumn",2);ft([J()],ot.prototype,"sortDir",2);ft([J()],ot.prototype,"filters",2);ft([J()],ot.prototype,"globalQuery",2);ft([J()],ot.prototype,"localQuery",2);ft([J()],ot.prototype,"dragSourceField",2);ft([J()],ot.prototype,"dropTargetField",2);ft([J()],ot.prototype,"dropEdge",2);ft([J()],ot.prototype,"resizing",2);ft([J()],ot.prototype,"cellRenderers",2);ft([J()],ot.prototype,"scrollY",2);ft([J()],ot.prototype,"viewportHeight",2);ft([J()],ot.prototype,"loading",2);ot=ft([dt("data-table")],ot);function ff(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function hf(e,t,r,s){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(a=>a.id!==s&&a.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function pf(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function mf(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const s=new Date(t);if(Number.isNaN(s.getTime()))return"";const n=s.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function gf(e,t,r){switch(r){case"number":{const s=Number(e),n=Number(t);return Number.isNaN(s)||Number.isNaN(n)?String(e).localeCompare(String(t)):s-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const s=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(s)||Number.isNaN(n)?String(e).localeCompare(String(t)):s-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}var bf=Object.defineProperty,yf=Object.getOwnPropertyDescriptor,cr=(e,t,r,s)=>{for(var n=s>1?void 0:s?yf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&bf(t,r,n),n};let Tn=class extends nt{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return H`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return H`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};Tn.styles=[nn,at`
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
    `];cr([tn({type:String})],Tn.prototype,"tableId",2);cr([J()],Tn.prototype,"query",2);cr([J()],Tn.prototype,"open",2);cr([Un("input")],Tn.prototype,"inputEl",2);Tn=cr([dt("panel-search")],Tn);var wf=Object.defineProperty,vf=Object.getOwnPropertyDescriptor,ur=(e,t,r,s)=>{for(var n=s>1?void 0:s?vf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&wf(t,r,n),n};let jn=class extends nt{constructor(){super(...arguments),this.tableId="",this.rowCount=0,this.tableButtons=[],this.table=null}async connectedCallback(){super.connectedCallback();const e=await je();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]);const t=e.store.rows(this.tableId);this.unsubRows=t.subscribe(r=>this.rowCount=r.length),this.rowCount=(await t.find()).length,this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(r=>{this.table=r.find(s=>s.id===this.tableId)??null})}disconnectedCallback(){super.disconnectedCallback(),this.unsubRows?.(),this.unsubTables?.()}async addRow(){const e=await je(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const s of t.columns)r[s.field]=xf(s);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}async runTableButton(e){const t=await je();try{await Promise.resolve(e.onClick(t.api,{tableId:this.tableId}))}catch(r){console.error(`[table-button:${e.id}]`,r)}}render(){return H`
      <button title="Add a blank row" @click=${this.addRow}>
        <span class="mi sm">add</span><span>Add row</span>
      </button>
      <button title="Edit columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span><span>Columns</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>H`<button title=${e.tooltip??e.label} @click=${()=>this.runTableButton(e)}>
            ${e.icon?H`<span class="mi sm">${e.icon}</span>`:""}
            <span>${e.label}</span>
          </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};jn.styles=[nn,at`
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
  `];ur([tn({type:String})],jn.prototype,"tableId",2);ur([J()],jn.prototype,"rowCount",2);ur([J()],jn.prototype,"tableButtons",2);ur([J()],jn.prototype,"table",2);jn=ur([dt("panel-footer")],jn);function xf(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function $f(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}const _n=new Map,Mr=new Set,ga=new Set;let $o=!1;async function Cf(){if($o)return;$o=!0;const e=await je(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");t&&r&&Zd(t,r);const s=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);s.sort(Co);for(const n of s)Eo(n,e);e.store.tables.subscribe(n=>{const a=n.filter(m=>m.workspaceId===e.workspaceId),c=new Set(a.map(m=>m.id));for(const[m,$]of _n)if(!c.has(m)){_n.delete(m),Mr.add(m),ga.add(m);try{$.status!=="closed"&&$.close()}catch{}}const f=a.filter(m=>!_n.has(m.id)).sort(Co);for(const m of f)Eo(m,e)})}function Co(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const Ef=200,kf=100,Sf=720,_f=360;function Pf(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<Ef||e.h<kf?null:{...e}}function Eo(e,t){const r=`panel-${ba(e.id)}`,s=document.createElement("data-table");s.tableId=e.id,s.style.height="100%";let n=s;const a=()=>{n?.remove(),n=null},c=()=>{if(n)return;const ne=document.getElementById(r)?.querySelector(".jsPanel-content");if(!ne)return;const de=document.createElement("data-table");de.tableId=e.id,de.style.height="100%",ne.appendChild(de),n=de},f=document.createElement("panel-search");f.tableId=e.id;const m=document.createElement("panel-footer");m.tableId=e.id;const $=$f(),S=Pf(e.windowGeometry),C=S?{my:"left-top",at:"left-top",offsetX:S.x,offsetY:S.y}:Df(),z=S?{panelSize:`${S.w} ${S.h}`}:{contentSize:`${Sf} ${_f}`},B=O.create({id:r,container:$,headerTitle:e.name,footerToolbar:m,theme:"primary",content:s,...z,position:C,minimizeTo:"parent",dragit:{containment:!1,stop:()=>zs(e.id,t)},resizeit:{containment:!1,stop:()=>zs(e.id,t)},onfronted:()=>Tf(e.id,t),onbeforeclose:()=>Mr.has(e.id)?!0:((async()=>await t.api.ui.dialogs.confirm(e.source?`Remove the live table "${e.name}"? Its data stays on the Datasette server.`:`Delete table "${e.name}" and all its rows?`,"Confirm")&&(Mr.add(e.id),_n.get(e.id)?.close()))(),!1),onclosed:async()=>{_n.delete(e.id),Mr.delete(e.id),!ga.delete(e.id)&&await jf(e.id,t)},onstatuschange:ne=>{ne.status==="minimized"?a():(ne.status==="normalized"||ne.status==="maximized")&&c(),zs(e.id,t)}});_n.set(e.id,B);const te=document.getElementById(r)?.querySelector(".jsPanel-controlbar");te&&te.prepend(f),S?.maximized&&typeof B.maximize=="function"?queueMicrotask(()=>B.maximize?.()):S?.minimized&&typeof B.minimize=="function"&&queueMicrotask(()=>B.minimize?.());let oe=e.name,fe=null;const Se=ne=>{typeof B.setHeaderTitle=="function"&&B.setHeaderTitle(`${oe} (${ne})`)};t.store.rows(e.id).find().then(ne=>Se(ne.length)),fe=t.store.rows(e.id).subscribe(ne=>Se(ne.length)),t.store.tables.subscribe(ne=>{const de=ne.find(Ce=>Ce.id===e.id);de&&de.name!==oe&&(oe=de.name)});const Xe=B.close.bind(B);B.close=()=>(fe?.(),Xe())}let Af=0;function Df(){const e=Af++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function zs(e,t){const r=document.getElementById(`panel-${ba(e)}`);if(!r)return;const s=_n.get(e)?.status??"normalized";try{const a=(await t.store.tables.findOne(e))?.windowGeometry,c=s==="minimized",f=s==="maximized";let m=r.offsetLeft,$=r.offsetTop,S=r.offsetWidth,C=r.offsetHeight;(c||f)&&a&&(m=a.x,$=a.y,S=a.w,C=a.h),m<=-9e3&&(m=a?.x??40);const z={x:m,y:$,w:S,h:C,z:a?.z??0,minimized:c,maximized:f};await t.store.tables.patch(e,{windowGeometry:z,updatedAt:Date.now()})}catch{}}async function Tf(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const s=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...s,z:Date.now()},updatedAt:Date.now()})}catch{}}async function jf(e,t){if(!(await t.store.tables.findOne(e))?.source){const s=t.store.rows(e),n=await s.find();await s.bulkRemove(n.map(a=>a.id))}await t.store.tables.remove(e)}function ba(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var Ff=Object.defineProperty,Of=Object.getOwnPropertyDescriptor,ya=(e,t,r,s)=>{for(var n=s>1?void 0:s?Of(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Ff(t,r,n),n};let Kr=class extends nt{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await je();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(s=>s.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await Cf()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?H``:H`<div class="empty">
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
  `;ya([J()],Kr.prototype,"tables",2);Kr=ya([dt("table-list")],Kr);var Rf=Object.defineProperty,zf=Object.getOwnPropertyDescriptor,ii=(e,t,r,s)=>{for(var n=s>1?void 0:s?zf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Rf(t,r,n),n};let ir=class extends nt{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await je();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const s=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(s)}async addWorkspace(){const t=await(await je()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return H`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>H`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};ir.styles=[nn,at`
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
  `];ii([J()],ir.prototype,"workspaces",2);ii([J()],ir.prototype,"current",2);ir=ii([dt("workspace-selector")],ir);var ko=Object.freeze,wa=Object.defineProperty,If=Object.getOwnPropertyDescriptor,rn=(e,t,r,s)=>{for(var n=s>1?void 0:s?If(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&wa(t,r,n),n},Lf=(e,t)=>ko(wa(e,"raw",{value:ko(e.slice())})),So;function Bf(e){return e?e.trimStart().startsWith("<svg")?H`<span class="icon-svg">${vl(e)}</span>`:H`<span class="mi sm">${e}</span>`:""}let Mt=class extends nt{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId)},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>{document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:this.searchQuery}}))},200)},this.onDragOver=e=>{_o(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!_o(e))return;e.preventDefault();const t=await je(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const s of[...t.registries.dropHandlers])try{if(await s(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=e=>{this.api&&Promise.resolve(e.onClick(this.api)).catch(t=>{console.error(`[footer-button:${e.id}]`,t)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager)}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}async bindRegistries(){const e=await je();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e))}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){const r=t==="header"||e.variant==="primary"?"primary":"slot";return H`
      <button class=${r} title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
        ${Bf(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return H(So||(So=Lf([`
      <header>
        <strong>easyDBAccess <span class="version">v0.0.33</span></strong>
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
    `])),this.headerButtons.map(e=>this.renderSlotButton(e,"header")),this.searchOpen?H`<input
              class="search"
              type="search"
              placeholder="search all tables…"
              .value=${this.searchQuery}
              @input=${this.onSearchInput}
              @blur=${this.closeSearchOnBlur}
            />`:H`<button
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
      input.search {
        background: #374151;
        color: white;
        border: 1px solid #4b5563;
        padding: 0.3rem 0.6rem;
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
    `];rn([Un("new-table-dialog")],Mt.prototype,"dialog",2);rn([Un("csv-paste-dialog")],Mt.prototype,"csvPasteDialog",2);rn([Un("plugin-manager-dialog")],Mt.prototype,"pluginManagerDialog",2);rn([Un("input.search")],Mt.prototype,"searchInput",2);rn([J()],Mt.prototype,"footerButtons",2);rn([J()],Mt.prototype,"headerButtons",2);rn([J()],Mt.prototype,"searchQuery",2);rn([J()],Mt.prototype,"searchOpen",2);Mt=rn([dt("app-shell")],Mt);function _o(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([je(),Ha(()=>Promise.resolve().then(()=>fa),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});
//# sourceMappingURL=index-CcQy3k6m.js.map
