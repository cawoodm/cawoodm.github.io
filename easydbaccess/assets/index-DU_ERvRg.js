(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const Ua="modulepreload",Wa=function(e){return"/easydbaccess/"+e},Ri={},Ha=function(t,r,s){let n=Promise.resolve();if(r&&r.length>0){let c=function($){return Promise.all($.map(S=>Promise.resolve(S).then(k=>({status:"fulfilled",value:k}),k=>({status:"rejected",reason:k}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),p=f?.nonce||f?.getAttribute("nonce");n=c(r.map($=>{if($=Wa($),$ in Ri)return;Ri[$]=!0;const S=$.endsWith(".css"),k=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${$}"]${k}`))return;const z=document.createElement("link");if(z.rel=S?"stylesheet":Ua,S||(z.as="script"),z.crossOrigin="",z.href=$,p&&z.setAttribute("nonce",p),document.head.appendChild(z),S)return new Promise((M,q)=>{z.addEventListener("load",M),z.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${$}`)))})}))}function a(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return n.then(c=>{for(const f of c||[])f.status==="rejected"&&a(f.reason);return t().catch(a)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ir=globalThis,Vs=Ir.ShadowRoot&&(Ir.ShadyCSS===void 0||Ir.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ys=Symbol(),zi=new WeakMap;let _o=class{constructor(t,r,s){if(this._$cssResult$=!0,s!==Ys)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Vs&&t===void 0){const s=r!==void 0&&r.length===1;s&&(t=zi.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&zi.set(r,t))}return t}toString(){return this.cssText}};const Ka=e=>new _o(typeof e=="string"?e:e+"",void 0,Ys),ot=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((s,n,a)=>s+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[a+1],e[0]);return new _o(r,e,Ys)},Va=(e,t)=>{if(Vs)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const s=document.createElement("style"),n=Ir.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=r.cssText,e.appendChild(s)}},Ii=Vs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return Ka(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ya,defineProperty:Xa,getOwnPropertyDescriptor:Ga,getOwnPropertyNames:Qa,getOwnPropertySymbols:Ja,getPrototypeOf:Za}=Object,Kr=globalThis,Li=Kr.trustedTypes,el=Li?Li.emptyScript:"",tl=Kr.reactiveElementPolyfillSupport,tr=(e,t)=>e,Mr={toAttribute(e,t){switch(t){case Boolean:e=e?el:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Xs=(e,t)=>!Ya(e,t),Bi={attribute:!0,type:String,converter:Mr,reflect:!1,useDefault:!1,hasChanged:Xs};Symbol.metadata??=Symbol("metadata"),Kr.litPropertyMetadata??=new WeakMap;let Bn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Bi){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(t,s,r);n!==void 0&&Xa(this.prototype,t,n)}}static getPropertyDescriptor(t,r,s){const{get:n,set:a}=Ga(this.prototype,t)??{get(){return this[r]},set(c){this[r]=c}};return{get:n,set(c){const f=n?.call(this);a?.call(this,c),this.requestUpdate(t,f,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Bi}static _$Ei(){if(this.hasOwnProperty(tr("elementProperties")))return;const t=Za(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(tr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(tr("properties"))){const r=this.properties,s=[...Qa(r),...Ja(r)];for(const n of s)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[s,n]of r)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[r,s]of this.elementProperties){const n=this._$Eu(r,s);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const n of s)r.unshift(Ii(n))}else t!==void 0&&r.push(Ii(t));return r}static _$Eu(t,r){const s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const s of r.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Va(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,s){this._$AK(t,s)}_$ET(t,r){const s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(n!==void 0&&s.reflect===!0){const a=(s.converter?.toAttribute!==void 0?s.converter:Mr).toAttribute(r,s.type);this._$Em=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,r){const s=this.constructor,n=s._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const a=s.getPropertyOptions(n),c=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Mr;this._$Em=n;const f=c.fromAttribute(r,a.type);this[n]=f??this._$Ej?.get(n)??f,this._$Em=null}}requestUpdate(t,r,s,n=!1,a){if(t!==void 0){const c=this.constructor;if(n===!1&&(a=this[t]),s??=c.getPropertyOptions(t),!((s.hasChanged??Xs)(a,r)||s.useDefault&&s.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(c._$Eu(t,s))))return;this.C(t,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:s,reflect:n,wrapped:a},c){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,c??r??this[t]),a!==!0||c!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s){const{wrapped:c}=a,f=this[n];c!==!0||this._$AL.has(n)||f===void 0||this.C(n,void 0,a,f)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(r)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Bn.elementStyles=[],Bn.shadowRootOptions={mode:"open"},Bn[tr("elementProperties")]=new Map,Bn[tr("finalized")]=new Map,tl?.({ReactiveElement:Bn}),(Kr.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gs=globalThis,Mi=e=>e,Nr=Gs.trustedTypes,Ni=Nr?Nr.createPolicy("lit-html",{createHTML:e=>e}):void 0,Po="$lit$",fn=`lit$${Math.random().toFixed(9).slice(2)}$`,Ao="?"+fn,nl=`<${Ao}>`,Sn=document,nr=()=>Sn.createComment(""),rr=e=>e===null||typeof e!="object"&&typeof e!="function",Qs=Array.isArray,rl=e=>Qs(e)||typeof e?.[Symbol.iterator]=="function",Ts=`[ 	
\f\r]`,er=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qi=/-->/g,Ui=/>/g,$n=RegExp(`>|${Ts}(?:([^\\s"'>=/]+)(${Ts}*=${Ts}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wi=/'/g,Hi=/"/g,To=/^(?:script|style|textarea|title)$/i,sl=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),H=sl(1),_n=Symbol.for("lit-noChange"),ze=Symbol.for("lit-nothing"),Ki=new WeakMap,En=Sn.createTreeWalker(Sn,129);function Do(e,t){if(!Qs(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ni!==void 0?Ni.createHTML(t):t}const il=(e,t)=>{const r=e.length-1,s=[];let n,a=t===2?"<svg>":t===3?"<math>":"",c=er;for(let f=0;f<r;f++){const p=e[f];let $,S,k=-1,z=0;for(;z<p.length&&(c.lastIndex=z,S=c.exec(p),S!==null);)z=c.lastIndex,c===er?S[1]==="!--"?c=qi:S[1]!==void 0?c=Ui:S[2]!==void 0?(To.test(S[2])&&(n=RegExp("</"+S[2],"g")),c=$n):S[3]!==void 0&&(c=$n):c===$n?S[0]===">"?(c=n??er,k=-1):S[1]===void 0?k=-2:(k=c.lastIndex-S[2].length,$=S[1],c=S[3]===void 0?$n:S[3]==='"'?Hi:Wi):c===Hi||c===Wi?c=$n:c===qi||c===Ui?c=er:(c=$n,n=void 0);const M=c===$n&&e[f+1].startsWith("/>")?" ":"";a+=c===er?p+nl:k>=0?(s.push($),p.slice(0,k)+Po+p.slice(k)+fn+M):p+fn+(k===-2?f:M)}return[Do(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class sr{constructor({strings:t,_$litType$:r},s){let n;this.parts=[];let a=0,c=0;const f=t.length-1,p=this.parts,[$,S]=il(t,r);if(this.el=sr.createElement($,s),En.currentNode=this.el.content,r===2||r===3){const k=this.el.content.firstChild;k.replaceWith(...k.childNodes)}for(;(n=En.nextNode())!==null&&p.length<f;){if(n.nodeType===1){if(n.hasAttributes())for(const k of n.getAttributeNames())if(k.endsWith(Po)){const z=S[c++],M=n.getAttribute(k).split(fn),q=/([.?@])?(.*)/.exec(z);p.push({type:1,index:a,name:q[2],strings:M,ctor:q[1]==="."?al:q[1]==="?"?ll:q[1]==="@"?cl:Vr}),n.removeAttribute(k)}else k.startsWith(fn)&&(p.push({type:6,index:a}),n.removeAttribute(k));if(To.test(n.tagName)){const k=n.textContent.split(fn),z=k.length-1;if(z>0){n.textContent=Nr?Nr.emptyScript:"";for(let M=0;M<z;M++)n.append(k[M],nr()),En.nextNode(),p.push({type:2,index:++a});n.append(k[z],nr())}}}else if(n.nodeType===8)if(n.data===Ao)p.push({type:2,index:a});else{let k=-1;for(;(k=n.data.indexOf(fn,k+1))!==-1;)p.push({type:7,index:a}),k+=fn.length-1}a++}}static createElement(t,r){const s=Sn.createElement("template");return s.innerHTML=t,s}}function Nn(e,t,r=e,s){if(t===_n)return t;let n=s!==void 0?r._$Co?.[s]:r._$Cl;const a=rr(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),a===void 0?n=void 0:(n=new a(e),n._$AT(e,r,s)),s!==void 0?(r._$Co??=[])[s]=n:r._$Cl=n),n!==void 0&&(t=Nn(e,n._$AS(e,t.values),n,s)),t}class ol{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:s}=this._$AD,n=(t?.creationScope??Sn).importNode(r,!0);En.currentNode=n;let a=En.nextNode(),c=0,f=0,p=s[0];for(;p!==void 0;){if(c===p.index){let $;p.type===2?$=new or(a,a.nextSibling,this,t):p.type===1?$=new p.ctor(a,p.name,p.strings,this,t):p.type===6&&($=new ul(a,this,t)),this._$AV.push($),p=s[++f]}c!==p?.index&&(a=En.nextNode(),c++)}return En.currentNode=Sn,n}p(t){let r=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,r),r+=s.strings.length-2):s._$AI(t[r])),r++}}class or{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,s,n){this.type=2,this._$AH=ze,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=s,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Nn(this,t,r),rr(t)?t===ze||t==null||t===""?(this._$AH!==ze&&this._$AR(),this._$AH=ze):t!==this._$AH&&t!==_n&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):rl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ze&&rr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Sn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=sr.createElement(Do(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(r);else{const a=new ol(n,this),c=a.u(this.options);a.p(r),this.T(c),this._$AH=a}}_$AC(t){let r=Ki.get(t.strings);return r===void 0&&Ki.set(t.strings,r=new sr(t)),r}k(t){Qs(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,n=0;for(const a of t)n===r.length?r.push(s=new or(this.O(nr()),this.O(nr()),this,this.options)):s=r[n],s._$AI(a),n++;n<r.length&&(this._$AR(s&&s._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const s=Mi(t).nextSibling;Mi(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Vr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,s,n,a){this.type=1,this._$AH=ze,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=ze}_$AI(t,r=this,s,n){const a=this.strings;let c=!1;if(a===void 0)t=Nn(this,t,r,0),c=!rr(t)||t!==this._$AH&&t!==_n,c&&(this._$AH=t);else{const f=t;let p,$;for(t=a[0],p=0;p<a.length-1;p++)$=Nn(this,f[s+p],r,p),$===_n&&($=this._$AH[p]),c||=!rr($)||$!==this._$AH[p],$===ze?t=ze:t!==ze&&(t+=($??"")+a[p+1]),this._$AH[p]=$}c&&!n&&this.j(t)}j(t){t===ze?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class al extends Vr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ze?void 0:t}}class ll extends Vr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ze)}}class cl extends Vr{constructor(t,r,s,n,a){super(t,r,s,n,a),this.type=5}_$AI(t,r=this){if((t=Nn(this,t,r,0)??ze)===_n)return;const s=this._$AH,n=t===ze&&s!==ze||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==ze&&(s===ze||n);n&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ul{constructor(t,r,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Nn(this,t)}}const dl=Gs.litHtmlPolyfillSupport;dl?.(sr,or),(Gs.litHtmlVersions??=[]).push("3.3.3");const fl=(e,t,r)=>{const s=r?.renderBefore??t;let n=s._$litPart$;if(n===void 0){const a=r?.renderBefore??null;s._$litPart$=n=new or(t.insertBefore(nr(),a),a,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Js=globalThis;let nt=class extends Bn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=fl(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _n}};nt._$litElement$=!0,nt.finalized=!0,Js.litElementHydrateSupport?.({LitElement:nt});const hl=Js.litElementPolyfillSupport;hl?.({LitElement:nt});(Js.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pl={attribute:!0,type:String,converter:Mr,reflect:!1,hasChanged:Xs},ml=(e=pl,t,r)=>{const{kind:s,metadata:n}=r;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),s==="accessor"){const{name:c}=r;return{set(f){const p=t.get.call(this);t.set.call(this,f),this.requestUpdate(c,p,e,!0,f)},init(f){return f!==void 0&&this.C(c,void 0,e,f),f}}}if(s==="setter"){const{name:c}=r;return function(f){const p=this[c];t.call(this,f),this.requestUpdate(c,p,e,!0,f)}}throw Error("Unsupported decorator location: "+s)};function Zt(e){return(t,r)=>typeof r=="object"?ml(e,t,r):((s,n,a)=>{const c=n.hasOwnProperty(a);return n.constructor.createProperty(a,s),c?Object.getOwnPropertyDescriptor(n,a):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ee(e){return Zt({...e,state:!0,attribute:!1})}/**
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
 */class Is extends wl{constructor(t){if(super(t),this.it=ze,t.type!==bl.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ze||t==null)return this._t=void 0,this.it=t;if(t===_n)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Is.directiveName="unsafeHTML",Is.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ls extends Is{}Ls.directiveName="unsafeSVG",Ls.resultType=2;const vl=yl(Ls);var xl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lr={exports:{}},Cl=Lr.exports,Vi;function El(){return Vi||(Vi=1,(function(e,t){(function(r,s){e.exports=s()})(Cl,function(){var r=function(i,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,u){l.__proto__=u}||function(l,u){for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(l[d]=u[d])})(i,o)},s=function(){return(s=Object.assign||function(i){for(var o,l=1,u=arguments.length;l<u;l++)for(var d in o=arguments[l])Object.prototype.hasOwnProperty.call(o,d)&&(i[d]=o[d]);return i}).apply(this,arguments)};function n(i,o,l){for(var u,d=0,h=o.length;d<h;d++)!u&&d in o||((u=u||Array.prototype.slice.call(o,0,d))[d]=o[d]);return i.concat(u||Array.prototype.slice.call(o))}var a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:xl,c=Object.keys,f=Array.isArray;function p(i,o){return typeof o!="object"||c(o).forEach(function(l){i[l]=o[l]}),i}typeof Promise>"u"||a.Promise||(a.Promise=Promise);var $=Object.getPrototypeOf,S={}.hasOwnProperty;function k(i,o){return S.call(i,o)}function z(i,o){typeof o=="function"&&(o=o($(i))),(typeof Reflect>"u"?c:Reflect.ownKeys)(o).forEach(function(l){q(i,l,o[l])})}var M=Object.defineProperty;function q(i,o,l,u){M(i,o,p(l&&k(l,"get")&&typeof l.get=="function"?{get:l.get,set:l.set,configurable:!0}:{value:l,configurable:!0,writable:!0},u))}function te(i){return{from:function(o){return i.prototype=Object.create(o.prototype),q(i.prototype,"constructor",i),{extend:z.bind(null,i.prototype)}}}}var ne=Object.getOwnPropertyDescriptor,ie=[].slice;function me(i,o,l){return ie.call(i,o,l)}function Re(i,o){return o(i)}function ae(i){if(!i)throw new Error("Assertion Failed")}function be(i){a.setImmediate?setImmediate(i):setTimeout(i,0)}function Te(i,o){if(typeof o=="string"&&k(i,o))return i[o];if(!o)return i;if(typeof o!="string"){for(var l=[],u=0,d=o.length;u<d;++u){var h=Te(i,o[u]);l.push(h)}return l}var g=o.indexOf(".");if(g!==-1){var y=i[o.substr(0,g)];return y==null?void 0:Te(y,o.substr(g+1))}}function We(i,o,l){if(i&&o!==void 0&&!("isFrozen"in Object&&Object.isFrozen(i)))if(typeof o!="string"&&"length"in o){ae(typeof l!="string"&&"length"in l);for(var u=0,d=o.length;u<d;++u)We(i,o[u],l[u])}else{var h,g,y=o.indexOf(".");y!==-1?(h=o.substr(0,y),(g=o.substr(y+1))===""?l===void 0?f(i)&&!isNaN(parseInt(h))?i.splice(h,1):delete i[h]:i[h]=l:We(y=!(y=i[h])||!k(i,h)?i[h]={}:y,g,l)):l===void 0?f(i)&&!isNaN(parseInt(o))?i.splice(o,1):delete i[o]:i[o]=l}}function Ot(i){var o,l={};for(o in i)k(i,o)&&(l[o]=i[o]);return l}var nn=[].concat;function Fn(i){return nn.apply([],i)}var Gt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Fn([8,16,32,64].map(function(i){return["Int","Uint","Float"].map(function(o){return o+i+"Array"})}))).filter(function(i){return a[i]}),m=new Set(Gt.map(function(i){return a[i]})),v=null;function O(i){return v=new WeakMap,i=(function o(l){if(!l||typeof l!="object")return l;var u=v.get(l);if(u)return u;if(f(l)){u=[],v.set(l,u);for(var d=0,h=l.length;d<h;++d)u.push(o(l[d]))}else if(m.has(l.constructor))u=l;else{var g,y=$(l);for(g in u=y===Object.prototype?{}:Object.create(y),v.set(l,u),l)k(l,g)&&(u[g]=o(l[g]))}return u})(i),v=null,i}var b={}.toString;function x(i){return b.call(i).slice(8,-1)}var le=typeof Symbol<"u"?Symbol.iterator:"@@iterator",de=typeof le=="symbol"?function(i){var o;return i!=null&&(o=i[le])&&o.apply(i)}:function(){return null};function N(i,o){return o=i.indexOf(o),0<=o&&i.splice(o,1),0<=o}var K={};function He(i){var o,l,u,d;if(arguments.length===1){if(f(i))return i.slice();if(this===K&&typeof i=="string")return[i];if(d=de(i)){for(l=[];!(u=d.next()).done;)l.push(u.value);return l}if(i==null)return[i];if(typeof(o=i.length)!="number")return[i];for(l=new Array(o);o--;)l[o]=i[o];return l}for(o=arguments.length,l=new Array(o);o--;)l[o]=arguments[o];return l}var rt=typeof Symbol<"u"?function(i){return i[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},$e=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Tt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat($e),qt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Be(i,o){this.name=i,this.message=o}function Fe(i,o){return i+". Errors: "+Object.keys(o).map(function(l){return o[l].toString()}).filter(function(l,u,d){return d.indexOf(l)===u}).join(`
`)}function ve(i,o,l,u){this.failures=o,this.failedKeys=u,this.successCount=l,this.message=Fe(i,o)}function Se(i,o){this.name="BulkError",this.failures=Object.keys(o).map(function(l){return o[l]}),this.failuresByPos=o,this.message=Fe(i,this.failures)}te(Be).from(Error).extend({toString:function(){return this.name+": "+this.message}}),te(ve).from(Be),te(Se).from(Be);var Ke=Tt.reduce(function(i,o){return i[o]=o+"Error",i},{}),Ee=Be,J=Tt.reduce(function(i,o){var l=o+"Error";function u(d,h){this.name=l,d?typeof d=="string"?(this.message="".concat(d).concat(h?`
 `+h:""),this.inner=h||null):typeof d=="object"&&(this.message="".concat(d.name," ").concat(d.message),this.inner=d):(this.message=qt[o]||l,this.inner=null)}return te(u).from(Ee),i[o]=u,i},{});J.Syntax=SyntaxError,J.Type=TypeError,J.Range=RangeError;var Ve=$e.reduce(function(i,o){return i[o+"Error"]=J[o],i},{}),Oe=Tt.reduce(function(i,o){return["Syntax","Type","Range"].indexOf(o)===-1&&(i[o+"Error"]=J[o]),i},{});function ue(){}function ge(i){return i}function $t(i,o){return i==null||i===ge?o:function(l){return o(i(l))}}function oe(i,o){return function(){i.apply(this,arguments),o.apply(this,arguments)}}function Ye(i,o){return i===ue?o:function(){var l=i.apply(this,arguments);l!==void 0&&(arguments[0]=l);var u=this.onsuccess,d=this.onerror;this.onsuccess=null,this.onerror=null;var h=o.apply(this,arguments);return u&&(this.onsuccess=this.onsuccess?oe(u,this.onsuccess):u),d&&(this.onerror=this.onerror?oe(d,this.onerror):d),h!==void 0?h:l}}function rn(i,o){return i===ue?o:function(){i.apply(this,arguments);var l=this.onsuccess,u=this.onerror;this.onsuccess=this.onerror=null,o.apply(this,arguments),l&&(this.onsuccess=this.onsuccess?oe(l,this.onsuccess):l),u&&(this.onerror=this.onerror?oe(u,this.onerror):u)}}function Rt(i,o){return i===ue?o:function(l){var u=i.apply(this,arguments);p(l,u);var d=this.onsuccess,h=this.onerror;return this.onsuccess=null,this.onerror=null,l=o.apply(this,arguments),d&&(this.onsuccess=this.onsuccess?oe(d,this.onsuccess):d),h&&(this.onerror=this.onerror?oe(h,this.onerror):h),u===void 0?l===void 0?void 0:l:p(u,l)}}function Ge(i,o){return i===ue?o:function(){return o.apply(this,arguments)!==!1&&i.apply(this,arguments)}}function Ct(i,o){return i===ue?o:function(){var l=i.apply(this,arguments);if(l&&typeof l.then=="function"){for(var u=this,d=arguments.length,h=new Array(d);d--;)h[d]=arguments[d];return l.then(function(){return o.apply(u,h)})}return o.apply(this,arguments)}}Oe.ModifyError=ve,Oe.DexieError=Be,Oe.BulkError=Se;var Ae=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Me(i){Ae=i}var yt={},Qe=100,Gt=typeof Promise>"u"?[]:(function(){var i=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[i,$(i),i];var o=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[o,$(o),i]})(),$e=Gt[0],Tt=Gt[1],Gt=Gt[2],Tt=Tt&&Tt.then,xe=$e&&$e.constructor,Et=!!Gt,Ne=function(i,o){Ze.push([i,o]),st&&(queueMicrotask(fe),st=!1)},ft=!0,st=!0,Je=[],Ie=[],ce=ge,Xe={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ue,pgp:!1,env:{},finalize:ue},Y=Xe,Ze=[],at=0,vt=[];function X(i){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var o=this._PSD=Y;if(typeof i!="function"){if(i!==yt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&it(this,this._value))}this._state=null,this._value=null,++o.ref,(function l(u,d){try{d(function(h){if(u._state===null){if(h===u)throw new TypeError("A promise cannot be resolved with itself.");var g=u._lib&&De();h&&typeof h.then=="function"?l(u,function(y,C){h instanceof X?h._then(y,C):h.then(y,C)}):(u._state=!0,u._value=h,sn(u)),g&&qe()}},it.bind(null,u))}catch(h){it(u,h)}})(this,i)}var Ut={get:function(){var i=Y,o=hr;function l(u,d){var h=this,g=!i.global&&(i!==Y||o!==hr),y=g&&!an(),C=new X(function(_,T){re(h,new Yt(ai(u,i,g,y),ai(d,i,g,y),_,T,i))});return this._consoleTask&&(C._consoleTask=this._consoleTask),C}return l.prototype=yt,l},set:function(i){q(this,"then",i&&i.prototype===yt?Ut:{get:function(){return i},set:Ut.set})}};function Yt(i,o,l,u,d){this.onFulfilled=typeof i=="function"?i:null,this.onRejected=typeof o=="function"?o:null,this.resolve=l,this.reject=u,this.psd=d}function it(i,o){var l,u;Ie.push(o),i._state===null&&(l=i._lib&&De(),o=ce(o),i._state=!1,i._value=o,u=i,Je.some(function(d){return d._value===u._value})||Je.push(u),sn(i),l&&qe())}function sn(i){var o=i._listeners;i._listeners=[];for(var l=0,u=o.length;l<u;++l)re(i,o[l]);var d=i._PSD;--d.ref||d.finalize(),at===0&&(++at,Ne(function(){--at==0&&_e()},[]))}function re(i,o){if(i._state!==null){var l=i._state?o.onFulfilled:o.onRejected;if(l===null)return(i._state?o.resolve:o.reject)(i._value);++o.psd.ref,++at,Ne(ke,[l,i,o])}else i._listeners.push(o)}function ke(i,o,l){try{var u,d=o._value;!o._state&&Ie.length&&(Ie=[]),u=Ae&&o._consoleTask?o._consoleTask.run(function(){return i(d)}):i(d),o._state||Ie.indexOf(d)!==-1||(function(h){for(var g=Je.length;g;)if(Je[--g]._value===h._value)return Je.splice(g,1)})(o),l.resolve(u)}catch(h){l.reject(h)}finally{--at==0&&_e(),--l.psd.ref||l.psd.finalize()}}function fe(){gn(Xe,function(){De()&&qe()})}function De(){var i=ft;return st=ft=!1,i}function qe(){var i,o,l;do for(;0<Ze.length;)for(i=Ze,Ze=[],l=i.length,o=0;o<l;++o){var u=i[o];u[0].apply(null,u[1])}while(0<Ze.length);st=ft=!0}function _e(){var i=Je;Je=[],i.forEach(function(u){u._PSD.onunhandled.call(null,u._value,u)});for(var o=vt.slice(0),l=o.length;l;)o[--l]()}function zt(i){return new X(yt,!1,i)}function Le(i,o){var l=Y;return function(){var u=De(),d=Y;try{return ln(l,!0),i.apply(this,arguments)}catch(h){o&&o(h)}finally{ln(d,!1),u&&qe()}}}z(X.prototype,{then:Ut,_then:function(i,o){re(this,new Yt(null,null,i,o,Y))},catch:function(i){if(arguments.length===1)return this.then(null,i);var o=i,l=arguments[1];return typeof o=="function"?this.then(null,function(u){return(u instanceof o?l:zt)(u)}):this.then(null,function(u){return(u&&u.name===o?l:zt)(u)})},finally:function(i){return this.then(function(o){return X.resolve(i()).then(function(){return o})},function(o){return X.resolve(i()).then(function(){return zt(o)})})},timeout:function(i,o){var l=this;return i<1/0?new X(function(u,d){var h=setTimeout(function(){return d(new J.Timeout(o))},i);l.then(u,d).finally(clearTimeout.bind(null,h))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&q(X.prototype,Symbol.toStringTag,"Dexie.Promise"),Xe.env=oi(),z(X,{all:function(){var i=He.apply(null,arguments).map(pr);return new X(function(o,l){i.length===0&&o([]);var u=i.length;i.forEach(function(d,h){return X.resolve(d).then(function(g){i[h]=g,--u||o(i)},l)})})},resolve:function(i){return i instanceof X?i:i&&typeof i.then=="function"?new X(function(o,l){i.then(o,l)}):new X(yt,!0,i)},reject:zt,race:function(){var i=He.apply(null,arguments).map(pr);return new X(function(o,l){i.map(function(u){return X.resolve(u).then(o,l)})})},PSD:{get:function(){return Y},set:function(i){return Y=i}},totalEchoes:{get:function(){return hr}},newPSD:on,usePSD:gn,scheduler:{get:function(){return Ne},set:function(i){Ne=i}},rejectionMapper:{get:function(){return ce},set:function(i){ce=i}},follow:function(i,o){return new X(function(l,u){return on(function(d,h){var g=Y;g.unhandleds=[],g.onunhandled=h,g.finalize=oe(function(){var y,C=this;y=function(){C.unhandleds.length===0?d():h(C.unhandleds[0])},vt.push(function _(){y(),vt.splice(vt.indexOf(_),1)}),++at,Ne(function(){--at==0&&_e()},[])},g.finalize),i()},o,l,u)})}}),xe&&(xe.allSettled&&q(X,"allSettled",function(){var i=He.apply(null,arguments).map(pr);return new X(function(o){i.length===0&&o([]);var l=i.length,u=new Array(l);i.forEach(function(d,h){return X.resolve(d).then(function(g){return u[h]={status:"fulfilled",value:g}},function(g){return u[h]={status:"rejected",reason:g}}).then(function(){return--l||o(u)})})})}),xe.any&&typeof AggregateError<"u"&&q(X,"any",function(){var i=He.apply(null,arguments).map(pr);return new X(function(o,l){i.length===0&&l(new AggregateError([]));var u=i.length,d=new Array(u);i.forEach(function(h,g){return X.resolve(h).then(function(y){return o(y)},function(y){d[g]=y,--u||l(new AggregateError(d))})})})}),xe.withResolvers&&(X.withResolvers=xe.withResolvers));var lt={awaits:0,echoes:0,id:0},va=0,dr=[],fr=0,hr=0,xa=0;function on(i,o,l,u){var d=Y,h=Object.create(d);return h.parent=d,h.ref=0,h.global=!1,h.id=++xa,Xe.env,h.env=Et?{Promise:X,PromiseProp:{value:X,configurable:!0,writable:!0},all:X.all,race:X.race,allSettled:X.allSettled,any:X.any,resolve:X.resolve,reject:X.reject}:{},o&&p(h,o),++d.ref,h.finalize=function(){--this.parent.ref||this.parent.finalize()},u=gn(h,i,l,u),h.ref===0&&h.finalize(),u}function On(){return lt.id||(lt.id=++va),++lt.awaits,lt.echoes+=Qe,lt.id}function an(){return!!lt.awaits&&(--lt.awaits==0&&(lt.id=0),lt.echoes=lt.awaits*Qe,!0)}function pr(i){return lt.echoes&&i&&i.constructor===xe?(On(),i.then(function(o){return an(),o},function(o){return an(),et(o)})):i}function $a(){var i=dr[dr.length-1];dr.pop(),ln(i,!1)}function ln(i,o){var l,u=Y;(o?!lt.echoes||fr++&&i===Y:!fr||--fr&&i===Y)||queueMicrotask(o?function(d){++hr,lt.echoes&&--lt.echoes!=0||(lt.echoes=lt.awaits=lt.id=0),dr.push(Y),ln(d,!0)}.bind(null,i):$a),i!==Y&&(Y=i,u===Xe&&(Xe.env=oi()),Et&&(l=Xe.env.Promise,o=i.env,(u.global||i.global)&&(Object.defineProperty(a,"Promise",o.PromiseProp),l.all=o.all,l.race=o.race,l.resolve=o.resolve,l.reject=o.reject,o.allSettled&&(l.allSettled=o.allSettled),o.any&&(l.any=o.any))))}function oi(){var i=a.Promise;return Et?{Promise:i,PromiseProp:Object.getOwnPropertyDescriptor(a,"Promise"),all:i.all,race:i.race,allSettled:i.allSettled,any:i.any,resolve:i.resolve,reject:i.reject}:{}}function gn(i,o,l,u,d){var h=Y;try{return ln(i,!0),o(l,u,d)}finally{ln(h,!1)}}function ai(i,o,l,u){return typeof i!="function"?i:function(){var d=Y;l&&On(),ln(o,!0);try{return i.apply(this,arguments)}finally{ln(d,!1),u&&queueMicrotask(an)}}}function ns(i){Promise===xe&&lt.echoes===0?fr===0?i():enqueueNativeMicroTask(i):setTimeout(i,0)}(""+Tt).indexOf("[native code]")===-1&&(On=an=ue);var et=X.reject,bn="￿",Xt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",li="String expected.",Rn=[],mr="__dbnames",rs="readonly",ss="readwrite";function yn(i,o){return i?o?function(){return i.apply(this,arguments)&&o.apply(this,arguments)}:i:o}var ci={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function gr(i){return typeof i!="string"||/\./.test(i)?function(o){return o}:function(o){return o[i]===void 0&&i in o&&delete(o=O(o))[i],o}}function ui(){throw J.Type()}function Ce(i,o){try{var l=di(i),u=di(o);if(l!==u)return l==="Array"?1:u==="Array"?-1:l==="binary"?1:u==="binary"?-1:l==="string"?1:u==="string"?-1:l==="Date"?1:u!=="Date"?NaN:-1;switch(l){case"number":case"Date":case"string":return o<i?1:i<o?-1:0;case"binary":return(function(d,h){for(var g=d.length,y=h.length,C=g<y?g:y,_=0;_<C;++_)if(d[_]!==h[_])return d[_]<h[_]?-1:1;return g===y?0:g<y?-1:1})(fi(i),fi(o));case"Array":return(function(d,h){for(var g=d.length,y=h.length,C=g<y?g:y,_=0;_<C;++_){var T=Ce(d[_],h[_]);if(T!==0)return T}return g===y?0:g<y?-1:1})(i,o)}}catch{}return NaN}function di(i){var o=typeof i;return o!="object"?o:ArrayBuffer.isView(i)?"binary":(i=x(i),i==="ArrayBuffer"?"binary":i)}function fi(i){return i instanceof Uint8Array?i:ArrayBuffer.isView(i)?new Uint8Array(i.buffer,i.byteOffset,i.byteLength):new Uint8Array(i)}var hi=(Ue.prototype._trans=function(i,o,l){var u=this._tx||Y.trans,d=this.name,h=Ae&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(i==="readonly"?"read":"write"," ").concat(this.name));function g(_,T,w){if(!w.schema[d])throw new J.NotFound("Table "+d+" not part of transaction");return o(w.idbtrans,w)}var y=De();try{var C=u&&u.db._novip===this.db._novip?u===Y.trans?u._promise(i,g,l):on(function(){return u._promise(i,g,l)},{trans:u,transless:Y.transless||Y}):(function _(T,w,j,E){if(T.idbdb&&(T._state.openComplete||Y.letThrough||T._vip)){var A=T._createTransaction(w,j,T._dbSchema);try{A.create(),T._state.PR1398_maxLoop=3}catch(D){return D.name===Ke.InvalidState&&T.isOpen()&&0<--T._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),T.close({disableAutoOpen:!1}),T.open().then(function(){return _(T,w,j,E)})):et(D)}return A._promise(w,function(D,P){return on(function(){return Y.trans=A,E(D,P,A)})}).then(function(D){if(w==="readwrite")try{A.idbtrans.commit()}catch{}return w==="readonly"?D:A._completion.then(function(){return D})})}if(T._state.openComplete)return et(new J.DatabaseClosed(T._state.dbOpenError));if(!T._state.isBeingOpened){if(!T._state.autoOpen)return et(new J.DatabaseClosed);T.open().catch(ue)}return T._state.dbReadyPromise.then(function(){return _(T,w,j,E)})})(this.db,i,[this.name],g);return h&&(C._consoleTask=h,C=C.catch(function(_){return console.trace(_),et(_)})),C}finally{y&&qe()}},Ue.prototype.get=function(i,o){var l=this;return i&&i.constructor===Object?this.where(i).first(o):i==null?et(new J.Type("Invalid argument to Table.get()")):this._trans("readonly",function(u){return l.core.get({trans:u,key:i}).then(function(d){return l.hook.reading.fire(d)})}).then(o)},Ue.prototype.where=function(i){if(typeof i=="string")return new this.db.WhereClause(this,i);if(f(i))return new this.db.WhereClause(this,"[".concat(i.join("+"),"]"));var o=c(i);if(o.length===1)return this.where(o[0]).equals(i[o[0]]);var l=this.schema.indexes.concat(this.schema.primKey).filter(function(y){if(y.compound&&o.every(function(_){return 0<=y.keyPath.indexOf(_)})){for(var C=0;C<o.length;++C)if(o.indexOf(y.keyPath[C])===-1)return!1;return!0}return!1}).sort(function(y,C){return y.keyPath.length-C.keyPath.length})[0];if(l&&this.db._maxKey!==bn){var h=l.keyPath.slice(0,o.length);return this.where(h).equals(h.map(function(C){return i[C]}))}!l&&Ae&&console.warn("The query ".concat(JSON.stringify(i)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(o.join("+"),"]"));var u=this.schema.idxByName;function d(y,C){return Ce(y,C)===0}var g=o.reduce(function(w,C){var _=w[0],T=w[1],w=u[C],j=i[C];return[_||w,_||!w?yn(T,w&&w.multi?function(E){return E=Te(E,C),f(E)&&E.some(function(A){return d(j,A)})}:function(E){return d(j,Te(E,C))}):T]},[null,null]),h=g[0],g=g[1];return h?this.where(h.name).equals(i[h.keyPath]).filter(g):l?this.filter(g):this.where(o).equals("")},Ue.prototype.filter=function(i){return this.toCollection().and(i)},Ue.prototype.count=function(i){return this.toCollection().count(i)},Ue.prototype.offset=function(i){return this.toCollection().offset(i)},Ue.prototype.limit=function(i){return this.toCollection().limit(i)},Ue.prototype.each=function(i){return this.toCollection().each(i)},Ue.prototype.toArray=function(i){return this.toCollection().toArray(i)},Ue.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ue.prototype.orderBy=function(i){return new this.db.Collection(new this.db.WhereClause(this,f(i)?"[".concat(i.join("+"),"]"):i))},Ue.prototype.reverse=function(){return this.toCollection().reverse()},Ue.prototype.mapToClass=function(i){var o,l=this.db,u=this.name;function d(){return o!==null&&o.apply(this,arguments)||this}(this.schema.mappedClass=i).prototype instanceof ui&&((function(C,_){if(typeof _!="function"&&_!==null)throw new TypeError("Class extends value "+String(_)+" is not a constructor or null");function T(){this.constructor=C}r(C,_),C.prototype=_===null?Object.create(_):(T.prototype=_.prototype,new T)})(d,o=i),Object.defineProperty(d.prototype,"db",{get:function(){return l},enumerable:!1,configurable:!0}),d.prototype.table=function(){return u},i=d);for(var h=new Set,g=i.prototype;g;g=$(g))Object.getOwnPropertyNames(g).forEach(function(C){return h.add(C)});function y(C){if(!C)return C;var _,T=Object.create(i.prototype);for(_ in C)if(!h.has(_))try{T[_]=C[_]}catch{}return T}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=y,this.hook("reading",y),i},Ue.prototype.defineClass=function(){return this.mapToClass(function(i){p(this,i)})},Ue.prototype.add=function(i,o){var l=this,u=this.schema.primKey,d=u.auto,h=u.keyPath,g=i;return h&&d&&(g=gr(h)(i)),this._trans("readwrite",function(y){return l.core.mutate({trans:y,type:"add",keys:o!=null?[o]:null,values:[g]})}).then(function(y){return y.numFailures?X.reject(y.failures[0]):y.lastResult}).then(function(y){if(h)try{We(i,h,y)}catch{}return y})},Ue.prototype.update=function(i,o){return typeof i!="object"||f(i)?this.where(":id").equals(i).modify(o):(i=Te(i,this.schema.primKey.keyPath),i===void 0?et(new J.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(i).modify(o))},Ue.prototype.put=function(i,o){var l=this,u=this.schema.primKey,d=u.auto,h=u.keyPath,g=i;return h&&d&&(g=gr(h)(i)),this._trans("readwrite",function(y){return l.core.mutate({trans:y,type:"put",values:[g],keys:o!=null?[o]:null})}).then(function(y){return y.numFailures?X.reject(y.failures[0]):y.lastResult}).then(function(y){if(h)try{We(i,h,y)}catch{}return y})},Ue.prototype.delete=function(i){var o=this;return this._trans("readwrite",function(l){return o.core.mutate({trans:l,type:"delete",keys:[i]})}).then(function(l){return l.numFailures?X.reject(l.failures[0]):void 0})},Ue.prototype.clear=function(){var i=this;return this._trans("readwrite",function(o){return i.core.mutate({trans:o,type:"deleteRange",range:ci})}).then(function(o){return o.numFailures?X.reject(o.failures[0]):void 0})},Ue.prototype.bulkGet=function(i){var o=this;return this._trans("readonly",function(l){return o.core.getMany({keys:i,trans:l}).then(function(u){return u.map(function(d){return o.hook.reading.fire(d)})})})},Ue.prototype.bulkAdd=function(i,o,l){var u=this,d=Array.isArray(o)?o:void 0,h=(l=l||(d?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(g){var _=u.schema.primKey,y=_.auto,_=_.keyPath;if(_&&d)throw new J.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(d&&d.length!==i.length)throw new J.InvalidArgument("Arguments objects and keys must have the same length");var C=i.length,_=_&&y?i.map(gr(_)):i;return u.core.mutate({trans:g,type:"add",keys:d,values:_,wantResults:h}).then(function(A){var w=A.numFailures,j=A.results,E=A.lastResult,A=A.failures;if(w===0)return h?j:E;throw new Se("".concat(u.name,".bulkAdd(): ").concat(w," of ").concat(C," operations failed"),A)})})},Ue.prototype.bulkPut=function(i,o,l){var u=this,d=Array.isArray(o)?o:void 0,h=(l=l||(d?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(g){var _=u.schema.primKey,y=_.auto,_=_.keyPath;if(_&&d)throw new J.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(d&&d.length!==i.length)throw new J.InvalidArgument("Arguments objects and keys must have the same length");var C=i.length,_=_&&y?i.map(gr(_)):i;return u.core.mutate({trans:g,type:"put",keys:d,values:_,wantResults:h}).then(function(A){var w=A.numFailures,j=A.results,E=A.lastResult,A=A.failures;if(w===0)return h?j:E;throw new Se("".concat(u.name,".bulkPut(): ").concat(w," of ").concat(C," operations failed"),A)})})},Ue.prototype.bulkUpdate=function(i){var o=this,l=this.core,u=i.map(function(g){return g.key}),d=i.map(function(g){return g.changes}),h=[];return this._trans("readwrite",function(g){return l.getMany({trans:g,keys:u,cache:"clone"}).then(function(y){var C=[],_=[];i.forEach(function(w,j){var E=w.key,A=w.changes,D=y[j];if(D){for(var P=0,R=Object.keys(A);P<R.length;P++){var I=R[P],L=A[I];if(I===o.schema.primKey.keyPath){if(Ce(L,E)!==0)throw new J.Constraint("Cannot update primary key in bulkUpdate()")}else We(D,I,L)}h.push(j),C.push(E),_.push(D)}});var T=C.length;return l.mutate({trans:g,type:"put",keys:C,values:_,updates:{keys:u,changeSpecs:d}}).then(function(w){var j=w.numFailures,E=w.failures;if(j===0)return T;for(var A=0,D=Object.keys(E);A<D.length;A++){var P,R=D[A],I=h[Number(R)];I!=null&&(P=E[R],delete E[R],E[I]=P)}throw new Se("".concat(o.name,".bulkUpdate(): ").concat(j," of ").concat(T," operations failed"),E)})})})},Ue.prototype.bulkDelete=function(i){var o=this,l=i.length;return this._trans("readwrite",function(u){return o.core.mutate({trans:u,type:"delete",keys:i})}).then(function(g){var d=g.numFailures,h=g.lastResult,g=g.failures;if(d===0)return h;throw new Se("".concat(o.name,".bulkDelete(): ").concat(d," of ").concat(l," operations failed"),g)})},Ue);function Ue(){}function Hn(i){function o(g,y){if(y){for(var C=arguments.length,_=new Array(C-1);--C;)_[C-1]=arguments[C];return l[g].subscribe.apply(null,_),i}if(typeof g=="string")return l[g]}var l={};o.addEventType=h;for(var u=1,d=arguments.length;u<d;++u)h(arguments[u]);return o;function h(g,y,C){if(typeof g!="object"){var _;y=y||Ge;var T={subscribers:[],fire:C=C||ue,subscribe:function(w){T.subscribers.indexOf(w)===-1&&(T.subscribers.push(w),T.fire=y(T.fire,w))},unsubscribe:function(w){T.subscribers=T.subscribers.filter(function(j){return j!==w}),T.fire=T.subscribers.reduce(y,C)}};return l[g]=o[g]=T}c(_=g).forEach(function(w){var j=_[w];if(f(j))h(w,_[w][0],_[w][1]);else{if(j!=="asap")throw new J.InvalidArgument("Invalid event config");var E=h(w,ge,function(){for(var A=arguments.length,D=new Array(A);A--;)D[A]=arguments[A];E.subscribers.forEach(function(P){be(function(){P.apply(null,D)})})})}})}}function Kn(i,o){return te(o).from({prototype:i}),o}function zn(i,o){return!(i.filter||i.algorithm||i.or)&&(o?i.justLimit:!i.replayFilter)}function is(i,o){i.filter=yn(i.filter,o)}function os(i,o,l){var u=i.replayFilter;i.replayFilter=u?function(){return yn(u(),o())}:o,i.justLimit=l&&!u}function br(i,o){if(i.isPrimKey)return o.primaryKey;var l=o.getIndexByKeyPath(i.index);if(!l)throw new J.Schema("KeyPath "+i.index+" on object store "+o.name+" is not indexed");return l}function pi(i,o,l){var u=br(i,o.schema);return o.openCursor({trans:l,values:!i.keysOnly,reverse:i.dir==="prev",unique:!!i.unique,query:{index:u,range:i.range}})}function yr(i,o,l,u){var d=i.replayFilter?yn(i.filter,i.replayFilter()):i.filter;if(i.or){var h={},g=function(y,C,_){var T,w;d&&!d(C,_,function(j){return C.stop(j)},function(j){return C.fail(j)})||((w=""+(T=C.primaryKey))=="[object ArrayBuffer]"&&(w=""+new Uint8Array(T)),k(h,w)||(h[w]=!0,o(y,C,_)))};return Promise.all([i.or._iterate(g,l),mi(pi(i,u,l),i.algorithm,g,!i.keysOnly&&i.valueMapper)])}return mi(pi(i,u,l),yn(i.algorithm,d),o,!i.keysOnly&&i.valueMapper)}function mi(i,o,l,u){var d=Le(u?function(h,g,y){return l(u(h),g,y)}:l);return i.then(function(h){if(h)return h.start(function(){var g=function(){return h.continue()};o&&!o(h,function(y){return g=y},function(y){h.stop(y),g=ue},function(y){h.fail(y),g=ue})||d(h.value,h,function(y){return g=y}),g()})})}var Gt=Symbol(),Vn=(gi.prototype.execute=function(i){if(this.add!==void 0){var o=this.add;if(f(o))return n(n([],f(i)?i:[],!0),o).sort();if(typeof o=="number")return(Number(i)||0)+o;if(typeof o=="bigint")try{return BigInt(i)+o}catch{return BigInt(0)+o}throw new TypeError("Invalid term ".concat(o))}if(this.remove!==void 0){var l=this.remove;if(f(l))return f(i)?i.filter(function(u){return!l.includes(u)}).sort():[];if(typeof l=="number")return Number(i)-l;if(typeof l=="bigint")try{return BigInt(i)-l}catch{return BigInt(0)-l}throw new TypeError("Invalid subtrahend ".concat(l))}return o=(o=this.replacePrefix)===null||o===void 0?void 0:o[0],o&&typeof i=="string"&&i.startsWith(o)?this.replacePrefix[1]+i.substring(o.length):i},gi);function gi(i){Object.assign(this,i)}var Ca=(Pe.prototype._read=function(i,o){var l=this._ctx;return l.error?l.table._trans(null,et.bind(null,l.error)):l.table._trans("readonly",i).then(o)},Pe.prototype._write=function(i){var o=this._ctx;return o.error?o.table._trans(null,et.bind(null,o.error)):o.table._trans("readwrite",i,"locked")},Pe.prototype._addAlgorithm=function(i){var o=this._ctx;o.algorithm=yn(o.algorithm,i)},Pe.prototype._iterate=function(i,o){return yr(this._ctx,i,o,this._ctx.table.core)},Pe.prototype.clone=function(i){var o=Object.create(this.constructor.prototype),l=Object.create(this._ctx);return i&&p(l,i),o._ctx=l,o},Pe.prototype.raw=function(){return this._ctx.valueMapper=null,this},Pe.prototype.each=function(i){var o=this._ctx;return this._read(function(l){return yr(o,i,l,o.table.core)})},Pe.prototype.count=function(i){var o=this;return this._read(function(l){var u=o._ctx,d=u.table.core;if(zn(u,!0))return d.count({trans:l,query:{index:br(u,d.schema),range:u.range}}).then(function(g){return Math.min(g,u.limit)});var h=0;return yr(u,function(){return++h,!1},l,d).then(function(){return h})}).then(i)},Pe.prototype.sortBy=function(i,o){var l=i.split(".").reverse(),u=l[0],d=l.length-1;function h(C,_){return _?h(C[l[_]],_-1):C[u]}var g=this._ctx.dir==="next"?1:-1;function y(C,_){return Ce(h(C,d),h(_,d))*g}return this.toArray(function(C){return C.sort(y)}).then(o)},Pe.prototype.toArray=function(i){var o=this;return this._read(function(l){var u=o._ctx;if(u.dir==="next"&&zn(u,!0)&&0<u.limit){var d=u.valueMapper,h=br(u,u.table.core.schema);return u.table.core.query({trans:l,limit:u.limit,values:!0,query:{index:h,range:u.range}}).then(function(y){return y=y.result,d?y.map(d):y})}var g=[];return yr(u,function(y){return g.push(y)},l,u.table.core).then(function(){return g})},i)},Pe.prototype.offset=function(i){var o=this._ctx;return i<=0||(o.offset+=i,zn(o)?os(o,function(){var l=i;return function(u,d){return l===0||(l===1?--l:d(function(){u.advance(l),l=0}),!1)}}):os(o,function(){var l=i;return function(){return--l<0}})),this},Pe.prototype.limit=function(i){return this._ctx.limit=Math.min(this._ctx.limit,i),os(this._ctx,function(){var o=i;return function(l,u,d){return--o<=0&&u(d),0<=o}},!0),this},Pe.prototype.until=function(i,o){return is(this._ctx,function(l,u,d){return!i(l.value)||(u(d),o)}),this},Pe.prototype.first=function(i){return this.limit(1).toArray(function(o){return o[0]}).then(i)},Pe.prototype.last=function(i){return this.reverse().first(i)},Pe.prototype.filter=function(i){var o;return is(this._ctx,function(l){return i(l.value)}),(o=this._ctx).isMatch=yn(o.isMatch,i),this},Pe.prototype.and=function(i){return this.filter(i)},Pe.prototype.or=function(i){return new this.db.WhereClause(this._ctx.table,i,this)},Pe.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Pe.prototype.desc=function(){return this.reverse()},Pe.prototype.eachKey=function(i){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){i(u.key,u)})},Pe.prototype.eachUniqueKey=function(i){return this._ctx.unique="unique",this.eachKey(i)},Pe.prototype.eachPrimaryKey=function(i){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){i(u.primaryKey,u)})},Pe.prototype.keys=function(i){var o=this._ctx;o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,d){l.push(d.key)}).then(function(){return l}).then(i)},Pe.prototype.primaryKeys=function(i){var o=this._ctx;if(o.dir==="next"&&zn(o,!0)&&0<o.limit)return this._read(function(u){var d=br(o,o.table.core.schema);return o.table.core.query({trans:u,values:!1,limit:o.limit,query:{index:d,range:o.range}})}).then(function(u){return u.result}).then(i);o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,d){l.push(d.primaryKey)}).then(function(){return l}).then(i)},Pe.prototype.uniqueKeys=function(i){return this._ctx.unique="unique",this.keys(i)},Pe.prototype.firstKey=function(i){return this.limit(1).keys(function(o){return o[0]}).then(i)},Pe.prototype.lastKey=function(i){return this.reverse().firstKey(i)},Pe.prototype.distinct=function(){var i=this._ctx,i=i.index&&i.table.schema.idxByName[i.index];if(!i||!i.multi)return this;var o={};return is(this._ctx,function(d){var u=d.primaryKey.toString(),d=k(o,u);return o[u]=!0,!d}),this},Pe.prototype.modify=function(i){var o=this,l=this._ctx;return this._write(function(u){var d,h,g;g=typeof i=="function"?i:(d=c(i),h=d.length,function(P){for(var R=!1,I=0;I<h;++I){var L=d[I],B=i[L],U=Te(P,L);B instanceof Vn?(We(P,L,B.execute(U)),R=!0):U!==B&&(We(P,L,B),R=!0)}return R});var y=l.table.core,w=y.schema.primaryKey,C=w.outbound,_=w.extractKey,T=200,w=o.db._options.modifyChunkSize;w&&(T=typeof w=="object"?w[y.name]||w["*"]||200:w);function j(P,L){var I=L.failures,L=L.numFailures;A+=P-L;for(var B=0,U=c(I);B<U.length;B++){var Q=U[B];E.push(I[Q])}}var E=[],A=0,D=[];return o.clone().primaryKeys().then(function(P){function R(L){var B=Math.min(T,P.length-L);return y.getMany({trans:u,keys:P.slice(L,L+B),cache:"immutable"}).then(function(U){for(var Q=[],W=[],V=C?[]:null,Z=[],G=0;G<B;++G){var se=U[G],pe={value:O(se),primKey:P[L+G]};g.call(pe,pe.value,pe)!==!1&&(pe.value==null?Z.push(P[L+G]):C||Ce(_(se),_(pe.value))===0?(W.push(pe.value),C&&V.push(P[L+G])):(Z.push(P[L+G]),Q.push(pe.value)))}return Promise.resolve(0<Q.length&&y.mutate({trans:u,type:"add",values:Q}).then(function(ye){for(var we in ye.failures)Z.splice(parseInt(we),1);j(Q.length,ye)})).then(function(){return(0<W.length||I&&typeof i=="object")&&y.mutate({trans:u,type:"put",keys:V,values:W,criteria:I,changeSpec:typeof i!="function"&&i,isAdditionalChunk:0<L}).then(function(ye){return j(W.length,ye)})}).then(function(){return(0<Z.length||I&&i===as)&&y.mutate({trans:u,type:"delete",keys:Z,criteria:I,isAdditionalChunk:0<L}).then(function(ye){return j(Z.length,ye)})}).then(function(){return P.length>L+B&&R(L+T)})})}var I=zn(l)&&l.limit===1/0&&(typeof i!="function"||i===as)&&{index:l.index,range:l.range};return R(0).then(function(){if(0<E.length)throw new ve("Error modifying one or more objects",E,A,D);return P.length})})})},Pe.prototype.delete=function(){var i=this._ctx,o=i.range;return zn(i)&&(i.isPrimKey||o.type===3)?this._write(function(l){var u=i.table.core.schema.primaryKey,d=o;return i.table.core.count({trans:l,query:{index:u,range:d}}).then(function(h){return i.table.core.mutate({trans:l,type:"deleteRange",range:d}).then(function(g){var y=g.failures;if(g.lastResult,g.results,g=g.numFailures,g)throw new ve("Could not delete some values",Object.keys(y).map(function(C){return y[C]}),h-g);return h-g})})}):this.modify(as)},Pe);function Pe(){}var as=function(i,o){return o.value=null};function Ea(i,o){return i<o?-1:i===o?0:1}function ka(i,o){return o<i?-1:i===o?0:1}function kt(i,o,l){return i=i instanceof yi?new i.Collection(i):i,i._ctx.error=new(l||TypeError)(o),i}function In(i){return new i.Collection(i,function(){return bi("")}).limit(0)}function wr(i,o,l,u){var d,h,g,y,C,_,T,w=l.length;if(!l.every(function(A){return typeof A=="string"}))return kt(i,li);function j(A){d=A==="next"?function(P){return P.toUpperCase()}:function(P){return P.toLowerCase()},h=A==="next"?function(P){return P.toLowerCase()}:function(P){return P.toUpperCase()},g=A==="next"?Ea:ka;var D=l.map(function(P){return{lower:h(P),upper:d(P)}}).sort(function(P,R){return g(P.lower,R.lower)});y=D.map(function(P){return P.upper}),C=D.map(function(P){return P.lower}),T=(_=A)==="next"?"":u}j("next"),i=new i.Collection(i,function(){return cn(y[0],C[w-1]+u)}),i._ondirectionchange=function(A){j(A)};var E=0;return i._addAlgorithm(function(A,D,P){var R=A.key;if(typeof R!="string")return!1;var I=h(R);if(o(I,C,E))return!0;for(var L=null,B=E;B<w;++B){var U=(function(Q,W,V,Z,G,se){for(var pe=Math.min(Q.length,Z.length),ye=-1,we=0;we<pe;++we){var St=W[we];if(St!==Z[we])return G(Q[we],V[we])<0?Q.substr(0,we)+V[we]+V.substr(we+1):G(Q[we],Z[we])<0?Q.substr(0,we)+Z[we]+V.substr(we+1):0<=ye?Q.substr(0,ye)+W[ye]+V.substr(ye+1):null;G(Q[we],St)<0&&(ye=we)}return pe<Z.length&&se==="next"?Q+V.substr(Q.length):pe<Q.length&&se==="prev"?Q.substr(0,V.length):ye<0?null:Q.substr(0,ye)+Z[ye]+V.substr(ye+1)})(R,I,y[B],C[B],g,_);U===null&&L===null?E=B+1:(L===null||0<g(L,U))&&(L=U)}return D(L!==null?function(){A.continue(L+T)}:P),!1}),i}function cn(i,o,l,u){return{type:2,lower:i,upper:o,lowerOpen:l,upperOpen:u}}function bi(i){return{type:1,lower:i,upper:i}}var yi=(Object.defineProperty(ct.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ct.prototype.between=function(i,o,l,u){l=l!==!1,u=u===!0;try{return 0<this._cmp(i,o)||this._cmp(i,o)===0&&(l||u)&&(!l||!u)?In(this):new this.Collection(this,function(){return cn(i,o,!l,!u)})}catch{return kt(this,Xt)}},ct.prototype.equals=function(i){return i==null?kt(this,Xt):new this.Collection(this,function(){return bi(i)})},ct.prototype.above=function(i){return i==null?kt(this,Xt):new this.Collection(this,function(){return cn(i,void 0,!0)})},ct.prototype.aboveOrEqual=function(i){return i==null?kt(this,Xt):new this.Collection(this,function(){return cn(i,void 0,!1)})},ct.prototype.below=function(i){return i==null?kt(this,Xt):new this.Collection(this,function(){return cn(void 0,i,!1,!0)})},ct.prototype.belowOrEqual=function(i){return i==null?kt(this,Xt):new this.Collection(this,function(){return cn(void 0,i)})},ct.prototype.startsWith=function(i){return typeof i!="string"?kt(this,li):this.between(i,i+bn,!0,!0)},ct.prototype.startsWithIgnoreCase=function(i){return i===""?this.startsWith(i):wr(this,function(o,l){return o.indexOf(l[0])===0},[i],bn)},ct.prototype.equalsIgnoreCase=function(i){return wr(this,function(o,l){return o===l[0]},[i],"")},ct.prototype.anyOfIgnoreCase=function(){var i=He.apply(K,arguments);return i.length===0?In(this):wr(this,function(o,l){return l.indexOf(o)!==-1},i,"")},ct.prototype.startsWithAnyOfIgnoreCase=function(){var i=He.apply(K,arguments);return i.length===0?In(this):wr(this,function(o,l){return l.some(function(u){return o.indexOf(u)===0})},i,bn)},ct.prototype.anyOf=function(){var i=this,o=He.apply(K,arguments),l=this._cmp;try{o.sort(l)}catch{return kt(this,Xt)}if(o.length===0)return In(this);var u=new this.Collection(this,function(){return cn(o[0],o[o.length-1])});u._ondirectionchange=function(h){l=h==="next"?i._ascending:i._descending,o.sort(l)};var d=0;return u._addAlgorithm(function(h,g,y){for(var C=h.key;0<l(C,o[d]);)if(++d===o.length)return g(y),!1;return l(C,o[d])===0||(g(function(){h.continue(o[d])}),!1)}),u},ct.prototype.notEqual=function(i){return this.inAnyRange([[-1/0,i],[i,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ct.prototype.noneOf=function(){var i=He.apply(K,arguments);if(i.length===0)return new this.Collection(this);try{i.sort(this._ascending)}catch{return kt(this,Xt)}var o=i.reduce(function(l,u){return l?l.concat([[l[l.length-1][1],u]]):[[-1/0,u]]},null);return o.push([i[i.length-1],this.db._maxKey]),this.inAnyRange(o,{includeLowers:!1,includeUppers:!1})},ct.prototype.inAnyRange=function(R,o){var l=this,u=this._cmp,d=this._ascending,h=this._descending,g=this._min,y=this._max;if(R.length===0)return In(this);if(!R.every(function(I){return I[0]!==void 0&&I[1]!==void 0&&d(I[0],I[1])<=0}))return kt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",J.InvalidArgument);var C=!o||o.includeLowers!==!1,_=o&&o.includeUppers===!0,T,w=d;function j(I,L){return w(I[0],L[0])}try{(T=R.reduce(function(I,L){for(var B=0,U=I.length;B<U;++B){var Q=I[B];if(u(L[0],Q[1])<0&&0<u(L[1],Q[0])){Q[0]=g(Q[0],L[0]),Q[1]=y(Q[1],L[1]);break}}return B===U&&I.push(L),I},[])).sort(j)}catch{return kt(this,Xt)}var E=0,A=_?function(I){return 0<d(I,T[E][1])}:function(I){return 0<=d(I,T[E][1])},D=C?function(I){return 0<h(I,T[E][0])}:function(I){return 0<=h(I,T[E][0])},P=A,R=new this.Collection(this,function(){return cn(T[0][0],T[T.length-1][1],!C,!_)});return R._ondirectionchange=function(I){w=I==="next"?(P=A,d):(P=D,h),T.sort(j)},R._addAlgorithm(function(I,L,B){for(var U,Q=I.key;P(Q);)if(++E===T.length)return L(B),!1;return!A(U=Q)&&!D(U)||(l._cmp(Q,T[E][1])===0||l._cmp(Q,T[E][0])===0||L(function(){w===d?I.continue(T[E][0]):I.continue(T[E][1])}),!1)}),R},ct.prototype.startsWithAnyOf=function(){var i=He.apply(K,arguments);return i.every(function(o){return typeof o=="string"})?i.length===0?In(this):this.inAnyRange(i.map(function(o){return[o,o+bn]})):kt(this,"startsWithAnyOf() only works with strings")},ct);function ct(){}function Wt(i){return Le(function(o){return Yn(o),i(o.target.error),!1})}function Yn(i){i.stopPropagation&&i.stopPropagation(),i.preventDefault&&i.preventDefault()}var Xn="storagemutated",ls="x-storagemutated-1",un=Hn(null,Xn),Sa=(Ht.prototype._lock=function(){return ae(!Y.global),++this._reculock,this._reculock!==1||Y.global||(Y.lockOwnerFor=this),this},Ht.prototype._unlock=function(){if(ae(!Y.global),--this._reculock==0)for(Y.global||(Y.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var i=this._blockedFuncs.shift();try{gn(i[1],i[0])}catch{}}return this},Ht.prototype._locked=function(){return this._reculock&&Y.lockOwnerFor!==this},Ht.prototype.create=function(i){var o=this;if(!this.mode)return this;var l=this.db.idbdb,u=this.db._state.dbOpenError;if(ae(!this.idbtrans),!i&&!l)switch(u&&u.name){case"DatabaseClosedError":throw new J.DatabaseClosed(u);case"MissingAPIError":throw new J.MissingAPI(u.message,u);default:throw new J.OpenFailed(u)}if(!this.active)throw new J.TransactionInactive;return ae(this._completion._state===null),(i=this.idbtrans=i||(this.db.core||l).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Le(function(d){Yn(d),o._reject(i.error)}),i.onabort=Le(function(d){Yn(d),o.active&&o._reject(new J.Abort(i.error)),o.active=!1,o.on("abort").fire(d)}),i.oncomplete=Le(function(){o.active=!1,o._resolve(),"mutatedParts"in i&&un.storagemutated.fire(i.mutatedParts)}),this},Ht.prototype._promise=function(i,o,l){var u=this;if(i==="readwrite"&&this.mode!=="readwrite")return et(new J.ReadOnly("Transaction is readonly"));if(!this.active)return et(new J.TransactionInactive);if(this._locked())return new X(function(h,g){u._blockedFuncs.push([function(){u._promise(i,o,l).then(h,g)},Y])});if(l)return on(function(){var h=new X(function(g,y){u._lock();var C=o(g,y,u);C&&C.then&&C.then(g,y)});return h.finally(function(){return u._unlock()}),h._lib=!0,h});var d=new X(function(h,g){var y=o(h,g,u);y&&y.then&&y.then(h,g)});return d._lib=!0,d},Ht.prototype._root=function(){return this.parent?this.parent._root():this},Ht.prototype.waitFor=function(i){var o,l=this._root(),u=X.resolve(i);l._waitingFor?l._waitingFor=l._waitingFor.then(function(){return u}):(l._waitingFor=u,l._waitingQueue=[],o=l.idbtrans.objectStore(l.storeNames[0]),(function h(){for(++l._spinCount;l._waitingQueue.length;)l._waitingQueue.shift()();l._waitingFor&&(o.get(-1/0).onsuccess=h)})());var d=l._waitingFor;return new X(function(h,g){u.then(function(y){return l._waitingQueue.push(Le(h.bind(null,y)))},function(y){return l._waitingQueue.push(Le(g.bind(null,y)))}).finally(function(){l._waitingFor===d&&(l._waitingFor=null)})})},Ht.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new J.Abort))},Ht.prototype.table=function(i){var o=this._memoizedTables||(this._memoizedTables={});if(k(o,i))return o[i];var l=this.schema[i];if(!l)throw new J.NotFound("Table "+i+" not part of transaction");return l=new this.db.Table(i,l,this),l.core=this.db.core.table(i),o[i]=l},Ht);function Ht(){}function cs(i,o,l,u,d,h,g){return{name:i,keyPath:o,unique:l,multi:u,auto:d,compound:h,src:(l&&!g?"&":"")+(u?"*":"")+(d?"++":"")+wi(o)}}function wi(i){return typeof i=="string"?i:i?"["+[].join.call(i,"+")+"]":""}function us(i,o,l){return{name:i,primKey:o,indexes:l,mappedClass:null,idxByName:(u=function(d){return[d.name,d]},l.reduce(function(d,h,g){return g=u(h,g),g&&(d[g[0]]=g[1]),d},{}))};var u}var Gn=function(i){try{return i.only([[]]),Gn=function(){return[[]]},[[]]}catch{return Gn=function(){return bn},bn}};function ds(i){return i==null?function(){}:typeof i=="string"?(o=i).split(".").length===1?function(l){return l[o]}:function(l){return Te(l,o)}:function(l){return Te(l,i)};var o}function vi(i){return[].slice.call(i)}var _a=0;function Qn(i){return i==null?":id":typeof i=="string"?i:"[".concat(i.join("+"),"]")}function Pa(i,o,C){function u(P){if(P.type===3)return null;if(P.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var E=P.lower,A=P.upper,D=P.lowerOpen,P=P.upperOpen;return E===void 0?A===void 0?null:o.upperBound(A,!!P):A===void 0?o.lowerBound(E,!!D):o.bound(E,A,!!D,!!P)}function d(j){var E,A=j.name;return{name:A,schema:j,mutate:function(D){var P=D.trans,R=D.type,I=D.keys,L=D.values,B=D.range;return new Promise(function(U,Q){U=Le(U);var W=P.objectStore(A),V=W.keyPath==null,Z=R==="put"||R==="add";if(!Z&&R!=="delete"&&R!=="deleteRange")throw new Error("Invalid operation type: "+R);var G,se=(I||L||{length:1}).length;if(I&&L&&I.length!==L.length)throw new Error("Given keys array must have same length as given values array.");if(se===0)return U({numFailures:0,failures:{},results:[],lastResult:void 0});function pe(wt){++St,Yn(wt)}var ye=[],we=[],St=0;if(R==="deleteRange"){if(B.type===4)return U({numFailures:St,failures:we,results:[],lastResult:void 0});B.type===3?ye.push(G=W.clear()):ye.push(G=W.delete(u(B)))}else{var V=Z?V?[L,I]:[L,null]:[I,null],he=V[0],pt=V[1];if(Z)for(var mt=0;mt<se;++mt)ye.push(G=pt&&pt[mt]!==void 0?W[R](he[mt],pt[mt]):W[R](he[mt])),G.onerror=pe;else for(mt=0;mt<se;++mt)ye.push(G=W[R](he[mt])),G.onerror=pe}function jr(wt){wt=wt.target.result,ye.forEach(function(xn,As){return xn.error!=null&&(we[As]=xn.error)}),U({numFailures:St,failures:we,results:R==="delete"?I:ye.map(function(xn){return xn.result}),lastResult:wt})}G.onerror=function(wt){pe(wt),jr(wt)},G.onsuccess=jr})},getMany:function(D){var P=D.trans,R=D.keys;return new Promise(function(I,L){I=Le(I);for(var B,U=P.objectStore(A),Q=R.length,W=new Array(Q),V=0,Z=0,G=function(ye){ye=ye.target,W[ye._pos]=ye.result,++Z===V&&I(W)},se=Wt(L),pe=0;pe<Q;++pe)R[pe]!=null&&((B=U.get(R[pe]))._pos=pe,B.onsuccess=G,B.onerror=se,++V);V===0&&I(W)})},get:function(D){var P=D.trans,R=D.key;return new Promise(function(I,L){I=Le(I);var B=P.objectStore(A).get(R);B.onsuccess=function(U){return I(U.target.result)},B.onerror=Wt(L)})},query:(E=_,function(D){return new Promise(function(P,R){P=Le(P);var I,L,B,V=D.trans,U=D.values,Q=D.limit,G=D.query,W=Q===1/0?void 0:Q,Z=G.index,G=G.range,V=V.objectStore(A),Z=Z.isPrimaryKey?V:V.index(Z.name),G=u(G);if(Q===0)return P({result:[]});E?((W=U?Z.getAll(G,W):Z.getAllKeys(G,W)).onsuccess=function(se){return P({result:se.target.result})},W.onerror=Wt(R)):(I=0,L=!U&&"openKeyCursor"in Z?Z.openKeyCursor(G):Z.openCursor(G),B=[],L.onsuccess=function(se){var pe=L.result;return pe?(B.push(U?pe.value:pe.primaryKey),++I===Q?P({result:B}):void pe.continue()):P({result:B})},L.onerror=Wt(R))})}),openCursor:function(D){var P=D.trans,R=D.values,I=D.query,L=D.reverse,B=D.unique;return new Promise(function(U,Q){U=Le(U);var Z=I.index,W=I.range,V=P.objectStore(A),V=Z.isPrimaryKey?V:V.index(Z.name),Z=L?B?"prevunique":"prev":B?"nextunique":"next",G=!R&&"openKeyCursor"in V?V.openKeyCursor(u(W),Z):V.openCursor(u(W),Z);G.onerror=Wt(Q),G.onsuccess=Le(function(se){var pe,ye,we,St,he=G.result;he?(he.___id=++_a,he.done=!1,pe=he.continue.bind(he),ye=(ye=he.continuePrimaryKey)&&ye.bind(he),we=he.advance.bind(he),St=function(){throw new Error("Cursor not stopped")},he.trans=P,he.stop=he.continue=he.continuePrimaryKey=he.advance=function(){throw new Error("Cursor not started")},he.fail=Le(Q),he.next=function(){var pt=this,mt=1;return this.start(function(){return mt--?pt.continue():pt.stop()}).then(function(){return pt})},he.start=function(pt){function mt(){if(G.result)try{pt()}catch(wt){he.fail(wt)}else he.done=!0,he.start=function(){throw new Error("Cursor behind last entry")},he.stop()}var jr=new Promise(function(wt,xn){wt=Le(wt),G.onerror=Wt(xn),he.fail=xn,he.stop=function(As){he.stop=he.continue=he.continuePrimaryKey=he.advance=St,wt(As)}});return G.onsuccess=Le(function(wt){G.onsuccess=mt,mt()}),he.continue=pe,he.continuePrimaryKey=ye,he.advance=we,mt(),jr},U(he)):U(null)},Q)})},count:function(D){var P=D.query,R=D.trans,I=P.index,L=P.range;return new Promise(function(B,U){var Q=R.objectStore(A),W=I.isPrimaryKey?Q:Q.index(I.name),Q=u(L),W=Q?W.count(Q):W.count();W.onsuccess=Le(function(V){return B(V.target.result)}),W.onerror=Wt(U)})}}}var h,g,y,T=(g=C,y=vi((h=i).objectStoreNames),{schema:{name:h.name,tables:y.map(function(j){return g.objectStore(j)}).map(function(j){var E=j.keyPath,P=j.autoIncrement,A=f(E),D={},P={name:j.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:E==null,compound:A,keyPath:E,autoIncrement:P,unique:!0,extractKey:ds(E)},indexes:vi(j.indexNames).map(function(R){return j.index(R)}).map(function(B){var I=B.name,L=B.unique,U=B.multiEntry,B=B.keyPath,U={name:I,compound:f(B),keyPath:B,unique:L,multiEntry:U,extractKey:ds(B)};return D[Qn(B)]=U}),getIndexByKeyPath:function(R){return D[Qn(R)]}};return D[":id"]=P.primaryKey,E!=null&&(D[Qn(E)]=P.primaryKey),P})},hasGetAll:0<y.length&&"getAll"in g.objectStore(y[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),C=T.schema,_=T.hasGetAll,T=C.tables.map(d),w={};return T.forEach(function(j){return w[j.name]=j}),{stack:"dbcore",transaction:i.transaction.bind(i),table:function(j){if(!w[j])throw new Error("Table '".concat(j,"' not found"));return w[j]},MIN_KEY:-1/0,MAX_KEY:Gn(o),schema:C}}function Aa(i,o,l,u){var d=l.IDBKeyRange;return l.indexedDB,{dbcore:(u=Pa(o,d,u),i.dbcore.reduce(function(h,g){return g=g.create,s(s({},h),g(h))},u))}}function vr(i,u){var l=u.db,u=Aa(i._middlewares,l,i._deps,u);i.core=u.dbcore,i.tables.forEach(function(d){var h=d.name;i.core.schema.tables.some(function(g){return g.name===h})&&(d.core=i.core.table(h),i[h]instanceof i.Table&&(i[h].core=d.core))})}function xr(i,o,l,u){l.forEach(function(d){var h=u[d];o.forEach(function(g){var y=(function C(_,T){return ne(_,T)||(_=$(_))&&C(_,T)})(g,d);(!y||"value"in y&&y.value===void 0)&&(g===i.Transaction.prototype||g instanceof i.Transaction?q(g,d,{get:function(){return this.table(d)},set:function(C){M(this,d,{value:C,writable:!0,configurable:!0,enumerable:!0})}}):g[d]=new i.Table(d,h))})})}function fs(i,o){o.forEach(function(l){for(var u in l)l[u]instanceof i.Table&&delete l[u]})}function Ta(i,o){return i._cfg.version-o._cfg.version}function Da(i,o,l,u){var d=i._dbSchema;l.objectStoreNames.contains("$meta")&&!d.$meta&&(d.$meta=us("$meta",$i("")[0],[]),i._storeNames.push("$meta"));var h=i._createTransaction("readwrite",i._storeNames,d);h.create(l),h._completion.catch(u);var g=h._reject.bind(h),y=Y.transless||Y;on(function(){return Y.trans=h,Y.transless=y,o!==0?(vr(i,l),_=o,((C=h).storeNames.includes("$meta")?C.table("$meta").get("version").then(function(T){return T??_}):X.resolve(_)).then(function(T){return j=T,E=h,A=l,D=[],T=(w=i)._versions,P=w._dbSchema=Cr(0,w.idbdb,A),(T=T.filter(function(R){return R._cfg.version>=j})).length!==0?(T.forEach(function(R){D.push(function(){var I=P,L=R._cfg.dbschema;Er(w,I,A),Er(w,L,A),P=w._dbSchema=L;var B=hs(I,L);B.add.forEach(function(Z){ps(A,Z[0],Z[1].primKey,Z[1].indexes)}),B.change.forEach(function(Z){if(Z.recreate)throw new J.Upgrade("Not yet support for changing primary key");var G=A.objectStore(Z.name);Z.add.forEach(function(se){return $r(G,se)}),Z.change.forEach(function(se){G.deleteIndex(se.name),$r(G,se)}),Z.del.forEach(function(se){return G.deleteIndex(se)})});var U=R._cfg.contentUpgrade;if(U&&R._cfg.version>j){vr(w,A),E._memoizedTables={};var Q=Ot(L);B.del.forEach(function(Z){Q[Z]=I[Z]}),fs(w,[w.Transaction.prototype]),xr(w,[w.Transaction.prototype],c(Q),Q),E.schema=Q;var W,V=rt(U);return V&&On(),B=X.follow(function(){var Z;(W=U(E))&&V&&(Z=an.bind(null,null),W.then(Z,Z))}),W&&typeof W.then=="function"?X.resolve(W):B.then(function(){return W})}}),D.push(function(I){var L,B,U=R._cfg.dbschema;L=U,B=I,[].slice.call(B.db.objectStoreNames).forEach(function(Q){return L[Q]==null&&B.db.deleteObjectStore(Q)}),fs(w,[w.Transaction.prototype]),xr(w,[w.Transaction.prototype],w._storeNames,w._dbSchema),E.schema=w._dbSchema}),D.push(function(I){w.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(w.idbdb.version/10)===R._cfg.version?(w.idbdb.deleteObjectStore("$meta"),delete w._dbSchema.$meta,w._storeNames=w._storeNames.filter(function(L){return L!=="$meta"})):I.objectStore("$meta").put(R._cfg.version,"version"))})}),(function R(){return D.length?X.resolve(D.shift()(E.idbtrans)).then(R):X.resolve()})().then(function(){xi(P,A)})):X.resolve();var w,j,E,A,D,P}).catch(g)):(c(d).forEach(function(T){ps(l,T,d[T].primKey,d[T].indexes)}),vr(i,l),void X.follow(function(){return i.on.populate.fire(h)}).catch(g));var C,_})}function ja(i,o){xi(i._dbSchema,o),o.db.version%10!=0||o.objectStoreNames.contains("$meta")||o.db.createObjectStore("$meta").add(Math.ceil(o.db.version/10-1),"version");var l=Cr(0,i.idbdb,o);Er(i,i._dbSchema,o);for(var u=0,d=hs(l,i._dbSchema).change;u<d.length;u++){var h=(function(g){if(g.change.length||g.recreate)return console.warn("Unable to patch indexes of table ".concat(g.name," because it has changes on the type of index or primary key.")),{value:void 0};var y=o.objectStore(g.name);g.add.forEach(function(C){Ae&&console.debug("Dexie upgrade patch: Creating missing index ".concat(g.name,".").concat(C.src)),$r(y,C)})})(d[u]);if(typeof h=="object")return h.value}}function hs(i,o){var l,u={del:[],add:[],change:[]};for(l in i)o[l]||u.del.push(l);for(l in o){var d=i[l],h=o[l];if(d){var g={name:l,def:h,recreate:!1,del:[],add:[],change:[]};if(""+(d.primKey.keyPath||"")!=""+(h.primKey.keyPath||"")||d.primKey.auto!==h.primKey.auto)g.recreate=!0,u.change.push(g);else{var y=d.idxByName,C=h.idxByName,_=void 0;for(_ in y)C[_]||g.del.push(_);for(_ in C){var T=y[_],w=C[_];T?T.src!==w.src&&g.change.push(w):g.add.push(w)}(0<g.del.length||0<g.add.length||0<g.change.length)&&u.change.push(g)}}else u.add.push([l,h])}return u}function ps(i,o,l,u){var d=i.db.createObjectStore(o,l.keyPath?{keyPath:l.keyPath,autoIncrement:l.auto}:{autoIncrement:l.auto});return u.forEach(function(h){return $r(d,h)}),d}function xi(i,o){c(i).forEach(function(l){o.db.objectStoreNames.contains(l)||(Ae&&console.debug("Dexie: Creating missing table",l),ps(o,l,i[l].primKey,i[l].indexes))})}function $r(i,o){i.createIndex(o.name,o.keyPath,{unique:o.unique,multiEntry:o.multi})}function Cr(i,o,l){var u={};return me(o.objectStoreNames,0).forEach(function(d){for(var h=l.objectStore(d),g=cs(wi(_=h.keyPath),_||"",!0,!1,!!h.autoIncrement,_&&typeof _!="string",!0),y=[],C=0;C<h.indexNames.length;++C){var T=h.index(h.indexNames[C]),_=T.keyPath,T=cs(T.name,_,!!T.unique,!!T.multiEntry,!1,_&&typeof _!="string",!1);y.push(T)}u[d]=us(d,g,y)}),u}function Er(i,o,l){for(var u=l.db.objectStoreNames,d=0;d<u.length;++d){var h=u[d],g=l.objectStore(h);i._hasGetAll="getAll"in g;for(var y=0;y<g.indexNames.length;++y){var C=g.indexNames[y],_=g.index(C).keyPath,T=typeof _=="string"?_:"["+me(_).join("+")+"]";!o[h]||(_=o[h].idxByName[T])&&(_.name=C,delete o[h].idxByName[T],o[h].idxByName[C]=_)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&a.WorkerGlobalScope&&a instanceof a.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(i._hasGetAll=!1)}function $i(i){return i.split(",").map(function(o,l){var u=(o=o.trim()).replace(/([&*]|\+\+)/g,""),d=/^\[/.test(u)?u.match(/^\[(.*)\]$/)[1].split("+"):u;return cs(u,d||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),f(d),l===0)})}var Fa=(kr.prototype._parseStoresSpec=function(i,o){c(i).forEach(function(l){if(i[l]!==null){var u=$i(i[l]),d=u.shift();if(d.unique=!0,d.multi)throw new J.Schema("Primary key cannot be multi-valued");u.forEach(function(h){if(h.auto)throw new J.Schema("Only primary key can be marked as autoIncrement (++)");if(!h.keyPath)throw new J.Schema("Index must have a name and cannot be an empty string")}),o[l]=us(l,d,u)}})},kr.prototype.stores=function(l){var o=this.db;this._cfg.storesSource=this._cfg.storesSource?p(this._cfg.storesSource,l):l;var l=o._versions,u={},d={};return l.forEach(function(h){p(u,h._cfg.storesSource),d=h._cfg.dbschema={},h._parseStoresSpec(u,d)}),o._dbSchema=d,fs(o,[o._allTables,o,o.Transaction.prototype]),xr(o,[o._allTables,o,o.Transaction.prototype,this._cfg.tables],c(d),d),o._storeNames=c(d),this},kr.prototype.upgrade=function(i){return this._cfg.contentUpgrade=Ct(this._cfg.contentUpgrade||ue,i),this},kr);function kr(){}function ms(i,o){var l=i._dbNamesDB;return l||(l=i._dbNamesDB=new Qt(mr,{addons:[],indexedDB:i,IDBKeyRange:o})).version(1).stores({dbnames:"name"}),l.table("dbnames")}function gs(i){return i&&typeof i.databases=="function"}function bs(i){return on(function(){return Y.letThrough=!0,i()})}function ys(i){return!("from"in i)}var ht=function(i,o){if(!this){var l=new ht;return i&&"d"in i&&p(l,i),l}p(this,arguments.length?{d:1,from:i,to:1<arguments.length?o:i}:{d:0})};function Jn(i,o,l){var u=Ce(o,l);if(!isNaN(u)){if(0<u)throw RangeError();if(ys(i))return p(i,{from:o,to:l,d:1});var d=i.l,u=i.r;if(Ce(l,i.from)<0)return d?Jn(d,o,l):i.l={from:o,to:l,d:1,l:null,r:null},Ei(i);if(0<Ce(o,i.to))return u?Jn(u,o,l):i.r={from:o,to:l,d:1,l:null,r:null},Ei(i);Ce(o,i.from)<0&&(i.from=o,i.l=null,i.d=u?u.d+1:1),0<Ce(l,i.to)&&(i.to=l,i.r=null,i.d=i.l?i.l.d+1:1),l=!i.r,d&&!i.l&&Zn(i,d),u&&l&&Zn(i,u)}}function Zn(i,o){ys(o)||(function l(u,C){var h=C.from,g=C.to,y=C.l,C=C.r;Jn(u,h,g),y&&l(u,y),C&&l(u,C)})(i,o)}function Ci(i,o){var l=Sr(o),u=l.next();if(u.done)return!1;for(var d=u.value,h=Sr(i),g=h.next(d.from),y=g.value;!u.done&&!g.done;){if(Ce(y.from,d.to)<=0&&0<=Ce(y.to,d.from))return!0;Ce(d.from,y.from)<0?d=(u=l.next(y.from)).value:y=(g=h.next(d.from)).value}return!1}function Sr(i){var o=ys(i)?null:{s:0,n:i};return{next:function(l){for(var u=0<arguments.length;o;)switch(o.s){case 0:if(o.s=1,u)for(;o.n.l&&Ce(l,o.n.from)<0;)o={up:o,n:o.n.l,s:1};else for(;o.n.l;)o={up:o,n:o.n.l,s:1};case 1:if(o.s=2,!u||Ce(l,o.n.to)<=0)return{value:o.n,done:!1};case 2:if(o.n.r){o.s=3,o={up:o,n:o.n.r,s:0};continue}case 3:o=o.up}return{done:!0}}}}function Ei(i){var o,l,u=(((o=i.r)===null||o===void 0?void 0:o.d)||0)-(((l=i.l)===null||l===void 0?void 0:l.d)||0),d=1<u?"r":u<-1?"l":"";d&&(o=d=="r"?"l":"r",l=s({},i),u=i[d],i.from=u.from,i.to=u.to,i[d]=u[d],l[d]=u[o],(i[o]=l).d=ki(l)),i.d=ki(i)}function ki(l){var o=l.r,l=l.l;return(o?l?Math.max(o.d,l.d):o.d:l?l.d:0)+1}function _r(i,o){return c(o).forEach(function(l){i[l]?Zn(i[l],o[l]):i[l]=(function u(d){var h,g,y={};for(h in d)k(d,h)&&(g=d[h],y[h]=!g||typeof g!="object"||m.has(g.constructor)?g:u(g));return y})(o[l])}),i}function ws(i,o){return i.all||o.all||Object.keys(i).some(function(l){return o[l]&&Ci(o[l],i[l])})}z(ht.prototype,((Tt={add:function(i){return Zn(this,i),this},addKey:function(i){return Jn(this,i,i),this},addKeys:function(i){var o=this;return i.forEach(function(l){return Jn(o,l,l)}),this},hasKey:function(i){var o=Sr(this).next(i).value;return o&&Ce(o.from,i)<=0&&0<=Ce(o.to,i)}})[le]=function(){return Sr(this)},Tt));var wn={},vs={},xs=!1;function Pr(i){_r(vs,i),xs||(xs=!0,setTimeout(function(){xs=!1,$s(vs,!(vs={}))},0))}function $s(i,o){o===void 0&&(o=!1);var l=new Set;if(i.all)for(var u=0,d=Object.values(wn);u<d.length;u++)Si(g=d[u],i,l,o);else for(var h in i){var g,y=/^idb\:\/\/(.*)\/(.*)\//.exec(h);y&&(h=y[1],y=y[2],(g=wn["idb://".concat(h,"/").concat(y)])&&Si(g,i,l,o))}l.forEach(function(C){return C()})}function Si(i,o,l,u){for(var d=[],h=0,g=Object.entries(i.queries.query);h<g.length;h++){for(var y=g[h],C=y[0],_=[],T=0,w=y[1];T<w.length;T++){var j=w[T];ws(o,j.obsSet)?j.subscribers.forEach(function(P){return l.add(P)}):u&&_.push(j)}u&&d.push([C,_])}if(u)for(var E=0,A=d;E<A.length;E++){var D=A[E],C=D[0],_=D[1];i.queries.query[C]=_}}function Oa(i){var o=i._state,l=i._deps.indexedDB;if(o.isBeingOpened||i.idbdb)return o.dbReadyPromise.then(function(){return o.dbOpenError?et(o.dbOpenError):i});o.isBeingOpened=!0,o.dbOpenError=null,o.openComplete=!1;var u=o.openCanceller,d=Math.round(10*i.verno),h=!1;function g(){if(o.openCanceller!==u)throw new J.DatabaseClosed("db.open() was cancelled")}function y(){return new X(function(j,E){if(g(),!l)throw new J.MissingAPI;var A=i.name,D=o.autoSchema||!d?l.open(A):l.open(A,d);if(!D)throw new J.MissingAPI;D.onerror=Wt(E),D.onblocked=Le(i._fireOnBlocked),D.onupgradeneeded=Le(function(P){var R;T=D.transaction,o.autoSchema&&!i._options.allowEmptyDB?(D.onerror=Yn,T.abort(),D.result.close(),(R=l.deleteDatabase(A)).onsuccess=R.onerror=Le(function(){E(new J.NoSuchDatabase("Database ".concat(A," doesnt exist")))})):(T.onerror=Wt(E),P=P.oldVersion>Math.pow(2,62)?0:P.oldVersion,w=P<1,i.idbdb=D.result,h&&ja(i,T),Da(i,P/10,T,E))},E),D.onsuccess=Le(function(){T=null;var P,R,I,L,B,U=i.idbdb=D.result,Q=me(U.objectStoreNames);if(0<Q.length)try{var W=U.transaction((L=Q).length===1?L[0]:L,"readonly");if(o.autoSchema)R=U,I=W,(P=i).verno=R.version/10,I=P._dbSchema=Cr(0,R,I),P._storeNames=me(R.objectStoreNames,0),xr(P,[P._allTables],c(I),I);else if(Er(i,i._dbSchema,W),((B=hs(Cr(0,(B=i).idbdb,W),B._dbSchema)).add.length||B.change.some(function(V){return V.add.length||V.change.length}))&&!h)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),U.close(),d=U.version+1,h=!0,j(y());vr(i,W)}catch{}Rn.push(i),U.onversionchange=Le(function(V){o.vcFired=!0,i.on("versionchange").fire(V)}),U.onclose=Le(function(V){i.on("close").fire(V)}),w&&(B=i._deps,W=A,U=B.indexedDB,B=B.IDBKeyRange,gs(U)||W===mr||ms(U,B).put({name:W}).catch(ue)),j()},E)}).catch(function(j){switch(j?.name){case"UnknownError":if(0<o.PR1398_maxLoop)return o.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),y();break;case"VersionError":if(0<d)return d=0,y()}return X.reject(j)})}var C,_=o.dbReadyResolve,T=null,w=!1;return X.race([u,(typeof navigator>"u"?X.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(j){function E(){return indexedDB.databases().finally(j)}C=setInterval(E,100),E()}).finally(function(){return clearInterval(C)}):Promise.resolve()).then(y)]).then(function(){return g(),o.onReadyBeingFired=[],X.resolve(bs(function(){return i.on.ready.fire(i.vip)})).then(function j(){if(0<o.onReadyBeingFired.length){var E=o.onReadyBeingFired.reduce(Ct,ue);return o.onReadyBeingFired=[],X.resolve(bs(function(){return E(i.vip)})).then(j)}})}).finally(function(){o.openCanceller===u&&(o.onReadyBeingFired=null,o.isBeingOpened=!1)}).catch(function(j){o.dbOpenError=j;try{T&&T.abort()}catch{}return u===o.openCanceller&&i._close(),et(j)}).finally(function(){o.openComplete=!0,_()}).then(function(){var j;return w&&(j={},i.tables.forEach(function(E){E.schema.indexes.forEach(function(A){A.name&&(j["idb://".concat(i.name,"/").concat(E.name,"/").concat(A.name)]=new ht(-1/0,[[[]]]))}),j["idb://".concat(i.name,"/").concat(E.name,"/")]=j["idb://".concat(i.name,"/").concat(E.name,"/:dels")]=new ht(-1/0,[[[]]])}),un(Xn).fire(j),$s(j,!0)),i})}function Cs(i){function o(h){return i.next(h)}var l=d(o),u=d(function(h){return i.throw(h)});function d(h){return function(C){var y=h(C),C=y.value;return y.done?C:C&&typeof C.then=="function"?C.then(l,u):f(C)?Promise.all(C).then(l,u):l(C)}}return d(o)()}function Ar(i,o,l){for(var u=f(i)?i.slice():[i],d=0;d<l;++d)u.push(o);return u}var Ra={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(i){return s(s({},i),{table:function(o){var l=i.table(o),u=l.schema,d={},h=[];function g(w,j,E){var A=Qn(w),D=d[A]=d[A]||[],P=w==null?0:typeof w=="string"?1:w.length,R=0<j,R=s(s({},E),{name:R?"".concat(A,"(virtual-from:").concat(E.name,")"):E.name,lowLevelIndex:E,isVirtual:R,keyTail:j,keyLength:P,extractKey:ds(w),unique:!R&&E.unique});return D.push(R),R.isPrimaryKey||h.push(R),1<P&&g(P===2?w[0]:w.slice(0,P-1),j+1,E),D.sort(function(I,L){return I.keyTail-L.keyTail}),R}o=g(u.primaryKey.keyPath,0,u.primaryKey),d[":id"]=[o];for(var y=0,C=u.indexes;y<C.length;y++){var _=C[y];g(_.keyPath,0,_)}function T(w){var j,E=w.query.index;return E.isVirtual?s(s({},w),{query:{index:E.lowLevelIndex,range:(j=w.query.range,E=E.keyTail,{type:j.type===1?2:j.type,lower:Ar(j.lower,j.lowerOpen?i.MAX_KEY:i.MIN_KEY,E),lowerOpen:!0,upper:Ar(j.upper,j.upperOpen?i.MIN_KEY:i.MAX_KEY,E),upperOpen:!0})}}):w}return s(s({},l),{schema:s(s({},u),{primaryKey:o,indexes:h,getIndexByKeyPath:function(w){return(w=d[Qn(w)])&&w[0]}}),count:function(w){return l.count(T(w))},query:function(w){return l.query(T(w))},openCursor:function(w){var j=w.query.index,E=j.keyTail,A=j.isVirtual,D=j.keyLength;return A?l.openCursor(T(w)).then(function(R){return R&&P(R)}):l.openCursor(w);function P(R){return Object.create(R,{continue:{value:function(I){I!=null?R.continue(Ar(I,w.reverse?i.MAX_KEY:i.MIN_KEY,E)):w.unique?R.continue(R.key.slice(0,D).concat(w.reverse?i.MIN_KEY:i.MAX_KEY,E)):R.continue()}},continuePrimaryKey:{value:function(I,L){R.continuePrimaryKey(Ar(I,i.MAX_KEY,E),L)}},primaryKey:{get:function(){return R.primaryKey}},key:{get:function(){var I=R.key;return D===1?I[0]:I.slice(0,D)}},value:{get:function(){return R.value}}})}}})}})}};function Es(i,o,l,u){return l=l||{},u=u||"",c(i).forEach(function(d){var h,g,y;k(o,d)?(h=i[d],g=o[d],typeof h=="object"&&typeof g=="object"&&h&&g?(y=x(h))!==x(g)?l[u+d]=o[d]:y==="Object"?Es(h,g,l,u+d+"."):h!==g&&(l[u+d]=o[d]):h!==g&&(l[u+d]=o[d])):l[u+d]=void 0}),c(o).forEach(function(d){k(i,d)||(l[u+d]=o[d])}),l}function ks(i,o){return o.type==="delete"?o.keys:o.keys||o.values.map(i.extractKey)}var za={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(i){return s(s({},i),{table:function(o){var l=i.table(o),u=l.schema.primaryKey;return s(s({},l),{mutate:function(d){var h=Y.trans,g=h.table(o).hook,y=g.deleting,C=g.creating,_=g.updating;switch(d.type){case"add":if(C.fire===ue)break;return h._promise("readwrite",function(){return T(d)},!0);case"put":if(C.fire===ue&&_.fire===ue)break;return h._promise("readwrite",function(){return T(d)},!0);case"delete":if(y.fire===ue)break;return h._promise("readwrite",function(){return T(d)},!0);case"deleteRange":if(y.fire===ue)break;return h._promise("readwrite",function(){return(function w(j,E,A){return l.query({trans:j,values:!1,query:{index:u,range:E},limit:A}).then(function(D){var P=D.result;return T({type:"delete",keys:P,trans:j}).then(function(R){return 0<R.numFailures?Promise.reject(R.failures[0]):P.length<A?{failures:[],numFailures:0,lastResult:void 0}:w(j,s(s({},E),{lower:P[P.length-1],lowerOpen:!0}),A)})})})(d.trans,d.range,1e4)},!0)}return l.mutate(d);function T(w){var j,E,A,D=Y.trans,P=w.keys||ks(u,w);if(!P)throw new Error("Keys missing");return(w=w.type==="add"||w.type==="put"?s(s({},w),{keys:P}):s({},w)).type!=="delete"&&(w.values=n([],w.values)),w.keys&&(w.keys=n([],w.keys)),j=l,A=P,((E=w).type==="add"?Promise.resolve([]):j.getMany({trans:E.trans,keys:A,cache:"immutable"})).then(function(R){var I=P.map(function(L,B){var U,Q,W,V=R[B],Z={onerror:null,onsuccess:null};return w.type==="delete"?y.fire.call(Z,L,V,D):w.type==="add"||V===void 0?(U=C.fire.call(Z,L,w.values[B],D),L==null&&U!=null&&(w.keys[B]=L=U,u.outbound||We(w.values[B],u.keyPath,L))):(U=Es(V,w.values[B]),(Q=_.fire.call(Z,U,L,V,D))&&(W=w.values[B],Object.keys(Q).forEach(function(G){k(W,G)?W[G]=Q[G]:We(W,G,Q[G])}))),Z});return l.mutate(w).then(function(L){for(var B=L.failures,U=L.results,Q=L.numFailures,L=L.lastResult,W=0;W<P.length;++W){var V=(U||P)[W],Z=I[W];V==null?Z.onerror&&Z.onerror(B[W]):Z.onsuccess&&Z.onsuccess(w.type==="put"&&R[W]?w.values[W]:V)}return{failures:B,results:U,numFailures:Q,lastResult:L}}).catch(function(L){return I.forEach(function(B){return B.onerror&&B.onerror(L)}),Promise.reject(L)})})}}})}})}};function _i(i,o,l){try{if(!o||o.keys.length<i.length)return null;for(var u=[],d=0,h=0;d<o.keys.length&&h<i.length;++d)Ce(o.keys[d],i[h])===0&&(u.push(l?O(o.values[d]):o.values[d]),++h);return u.length===i.length?u:null}catch{return null}}var Ia={stack:"dbcore",level:-1,create:function(i){return{table:function(o){var l=i.table(o);return s(s({},l),{getMany:function(u){if(!u.cache)return l.getMany(u);var d=_i(u.keys,u.trans._cache,u.cache==="clone");return d?X.resolve(d):l.getMany(u).then(function(h){return u.trans._cache={keys:u.keys,values:u.cache==="clone"?O(h):h},h})},mutate:function(u){return u.type!=="add"&&(u.trans._cache=null),l.mutate(u)}})}}}};function Pi(i,o){return i.trans.mode==="readonly"&&!!i.subscr&&!i.trans.explicit&&i.trans.db._options.cache!=="disabled"&&!o.schema.primaryKey.outbound}function Ai(i,o){switch(i){case"query":return o.values&&!o.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var La={stack:"dbcore",level:0,name:"Observability",create:function(i){var o=i.schema.name,l=new ht(i.MIN_KEY,i.MAX_KEY);return s(s({},i),{transaction:function(u,d,h){if(Y.subscr&&d!=="readonly")throw new J.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Y.querier));return i.transaction(u,d,h)},table:function(u){var d=i.table(u),h=d.schema,g=h.primaryKey,w=h.indexes,y=g.extractKey,C=g.outbound,_=g.autoIncrement&&w.filter(function(E){return E.compound&&E.keyPath.includes(g.keyPath)}),T=s(s({},d),{mutate:function(E){function A(G){return G="idb://".concat(o,"/").concat(u,"/").concat(G),L[G]||(L[G]=new ht)}var D,P,R,I=E.trans,L=E.mutatedParts||(E.mutatedParts={}),B=A(""),U=A(":dels"),Q=E.type,Z=E.type==="deleteRange"?[E.range]:E.type==="delete"?[E.keys]:E.values.length<50?[ks(g,E).filter(function(G){return G}),E.values]:[],W=Z[0],V=Z[1],Z=E.trans._cache;return f(W)?(B.addKeys(W),(Z=Q==="delete"||W.length===V.length?_i(W,Z):null)||U.addKeys(W),(Z||V)&&(D=A,P=Z,R=V,h.indexes.forEach(function(G){var se=D(G.name||"");function pe(we){return we!=null?G.extractKey(we):null}function ye(we){return G.multiEntry&&f(we)?we.forEach(function(St){return se.addKey(St)}):se.addKey(we)}(P||R).forEach(function(we,pt){var he=P&&pe(P[pt]),pt=R&&pe(R[pt]);Ce(he,pt)!==0&&(he!=null&&ye(he),pt!=null&&ye(pt))})}))):W?(V={from:(V=W.lower)!==null&&V!==void 0?V:i.MIN_KEY,to:(V=W.upper)!==null&&V!==void 0?V:i.MAX_KEY},U.add(V),B.add(V)):(B.add(l),U.add(l),h.indexes.forEach(function(G){return A(G.name).add(l)})),d.mutate(E).then(function(G){return!W||E.type!=="add"&&E.type!=="put"||(B.addKeys(G.results),_&&_.forEach(function(se){for(var pe=E.values.map(function(he){return se.extractKey(he)}),ye=se.keyPath.findIndex(function(he){return he===g.keyPath}),we=0,St=G.results.length;we<St;++we)pe[we][ye]=G.results[we];A(se.name).addKeys(pe)})),I.mutatedParts=_r(I.mutatedParts||{},L),G})}}),w=function(A){var D=A.query,A=D.index,D=D.range;return[A,new ht((A=D.lower)!==null&&A!==void 0?A:i.MIN_KEY,(D=D.upper)!==null&&D!==void 0?D:i.MAX_KEY)]},j={get:function(E){return[g,new ht(E.key)]},getMany:function(E){return[g,new ht().addKeys(E.keys)]},count:w,query:w,openCursor:w};return c(j).forEach(function(E){T[E]=function(A){var D=Y.subscr,P=!!D,R=Pi(Y,d)&&Ai(E,A)?A.obsSet={}:D;if(P){var I=function(V){return V="idb://".concat(o,"/").concat(u,"/").concat(V),R[V]||(R[V]=new ht)},L=I(""),B=I(":dels"),D=j[E](A),P=D[0],D=D[1];if((E==="query"&&P.isPrimaryKey&&!A.values?B:I(P.name||"")).add(D),!P.isPrimaryKey){if(E!=="count"){var U=E==="query"&&C&&A.values&&d.query(s(s({},A),{values:!1}));return d[E].apply(this,arguments).then(function(V){if(E==="query"){if(C&&A.values)return U.then(function(pe){return pe=pe.result,L.addKeys(pe),V});var Z=A.values?V.result.map(y):V.result;(A.values?L:B).addKeys(Z)}else if(E==="openCursor"){var G=V,se=A.values;return G&&Object.create(G,{key:{get:function(){return B.addKey(G.primaryKey),G.key}},primaryKey:{get:function(){var pe=G.primaryKey;return B.addKey(pe),pe}},value:{get:function(){return se&&L.addKey(G.primaryKey),G.value}}})}return V})}B.add(l)}}return d[E].apply(this,arguments)}}),T}})}};function Ti(i,o,l){if(l.numFailures===0)return o;if(o.type==="deleteRange")return null;var u=o.keys?o.keys.length:"values"in o&&o.values?o.values.length:1;return l.numFailures===u?null:(o=s({},o),f(o.keys)&&(o.keys=o.keys.filter(function(d,h){return!(h in l.failures)})),"values"in o&&f(o.values)&&(o.values=o.values.filter(function(d,h){return!(h in l.failures)})),o)}function Ss(i,o){return l=i,((u=o).lower===void 0||(u.lowerOpen?0<Ce(l,u.lower):0<=Ce(l,u.lower)))&&(i=i,(o=o).upper===void 0||(o.upperOpen?Ce(i,o.upper)<0:Ce(i,o.upper)<=0));var l,u}function Di(i,o,j,u,d,h){if(!j||j.length===0)return i;var g=o.query.index,y=g.multiEntry,C=o.query.range,_=u.schema.primaryKey.extractKey,T=g.extractKey,w=(g.lowLevelIndex||g).extractKey,j=j.reduce(function(E,A){var D=E,P=[];if(A.type==="add"||A.type==="put")for(var R=new ht,I=A.values.length-1;0<=I;--I){var L,B=A.values[I],U=_(B);R.hasKey(U)||(L=T(B),(y&&f(L)?L.some(function(G){return Ss(G,C)}):Ss(L,C))&&(R.addKey(U),P.push(B)))}switch(A.type){case"add":var Q=new ht().addKeys(o.values?E.map(function(se){return _(se)}):E),D=E.concat(o.values?P.filter(function(se){return se=_(se),!Q.hasKey(se)&&(Q.addKey(se),!0)}):P.map(function(se){return _(se)}).filter(function(se){return!Q.hasKey(se)&&(Q.addKey(se),!0)}));break;case"put":var W=new ht().addKeys(A.values.map(function(se){return _(se)}));D=E.filter(function(se){return!W.hasKey(o.values?_(se):se)}).concat(o.values?P:P.map(function(se){return _(se)}));break;case"delete":var V=new ht().addKeys(A.keys);D=E.filter(function(se){return!V.hasKey(o.values?_(se):se)});break;case"deleteRange":var Z=A.range;D=E.filter(function(se){return!Ss(_(se),Z)})}return D},i);return j===i?i:(j.sort(function(E,A){return Ce(w(E),w(A))||Ce(_(E),_(A))}),o.limit&&o.limit<1/0&&(j.length>o.limit?j.length=o.limit:i.length===o.limit&&j.length<o.limit&&(d.dirty=!0)),h?Object.freeze(j):j)}function ji(i,o){return Ce(i.lower,o.lower)===0&&Ce(i.upper,o.upper)===0&&!!i.lowerOpen==!!o.lowerOpen&&!!i.upperOpen==!!o.upperOpen}function Ba(i,o){return(function(l,u,d,h){if(l===void 0)return u!==void 0?-1:0;if(u===void 0)return 1;if((u=Ce(l,u))===0){if(d&&h)return 0;if(d)return 1;if(h)return-1}return u})(i.lower,o.lower,i.lowerOpen,o.lowerOpen)<=0&&0<=(function(l,u,d,h){if(l===void 0)return u!==void 0?1:0;if(u===void 0)return-1;if((u=Ce(l,u))===0){if(d&&h)return 0;if(d)return-1;if(h)return 1}return u})(i.upper,o.upper,i.upperOpen,o.upperOpen)}function Ma(i,o,l,u){i.subscribers.add(l),u.addEventListener("abort",function(){var d,h;i.subscribers.delete(l),i.subscribers.size===0&&(d=i,h=o,setTimeout(function(){d.subscribers.size===0&&N(h,d)},3e3))})}var Na={stack:"dbcore",level:0,name:"Cache",create:function(i){var o=i.schema.name;return s(s({},i),{transaction:function(l,u,d){var h,g,y=i.transaction(l,u,d);return u==="readwrite"&&(g=(h=new AbortController).signal,d=function(C){return function(){if(h.abort(),u==="readwrite"){for(var _=new Set,T=0,w=l;T<w.length;T++){var j=w[T],E=wn["idb://".concat(o,"/").concat(j)];if(E){var A=i.table(j),D=E.optimisticOps.filter(function(se){return se.trans===y});if(y._explicit&&C&&y.mutatedParts)for(var P=0,R=Object.values(E.queries.query);P<R.length;P++)for(var I=0,L=(Q=R[P]).slice();I<L.length;I++)ws((W=L[I]).obsSet,y.mutatedParts)&&(N(Q,W),W.subscribers.forEach(function(se){return _.add(se)}));else if(0<D.length){E.optimisticOps=E.optimisticOps.filter(function(se){return se.trans!==y});for(var B=0,U=Object.values(E.queries.query);B<U.length;B++)for(var Q,W,V,Z=0,G=(Q=U[B]).slice();Z<G.length;Z++)(W=G[Z]).res!=null&&y.mutatedParts&&(C&&!W.dirty?(V=Object.isFrozen(W.res),V=Di(W.res,W.req,D,A,W,V),W.dirty?(N(Q,W),W.subscribers.forEach(function(se){return _.add(se)})):V!==W.res&&(W.res=V,W.promise=X.resolve({result:V}))):(W.dirty&&N(Q,W),W.subscribers.forEach(function(se){return _.add(se)})))}}}_.forEach(function(se){return se()})}}},y.addEventListener("abort",d(!1),{signal:g}),y.addEventListener("error",d(!1),{signal:g}),y.addEventListener("complete",d(!0),{signal:g})),y},table:function(l){var u=i.table(l),d=u.schema.primaryKey;return s(s({},u),{mutate:function(h){var g=Y.trans;if(d.outbound||g.db._options.cache==="disabled"||g.explicit||g.idbtrans.mode!=="readwrite")return u.mutate(h);var y=wn["idb://".concat(o,"/").concat(l)];return y?(g=u.mutate(h),h.type!=="add"&&h.type!=="put"||!(50<=h.values.length||ks(d,h).some(function(C){return C==null}))?(y.optimisticOps.push(h),h.mutatedParts&&Pr(h.mutatedParts),g.then(function(C){0<C.numFailures&&(N(y.optimisticOps,h),(C=Ti(0,h,C))&&y.optimisticOps.push(C),h.mutatedParts&&Pr(h.mutatedParts))}),g.catch(function(){N(y.optimisticOps,h),h.mutatedParts&&Pr(h.mutatedParts)})):g.then(function(C){var _=Ti(0,s(s({},h),{values:h.values.map(function(T,w){var j;return C.failures[w]?T:(T=(j=d.keyPath)!==null&&j!==void 0&&j.includes(".")?O(T):s({},T),We(T,d.keyPath,C.results[w]),T)})}),C);y.optimisticOps.push(_),queueMicrotask(function(){return h.mutatedParts&&Pr(h.mutatedParts)})}),g):u.mutate(h)},query:function(h){if(!Pi(Y,u)||!Ai("query",h))return u.query(h);var g=((_=Y.trans)===null||_===void 0?void 0:_.db._options.cache)==="immutable",w=Y,y=w.requery,C=w.signal,_=(function(A,D,P,R){var I=wn["idb://".concat(A,"/").concat(D)];if(!I)return[];if(!(D=I.queries[P]))return[null,!1,I,null];var L=D[(R.query?R.query.index.name:null)||""];if(!L)return[null,!1,I,null];switch(P){case"query":var B=L.find(function(U){return U.req.limit===R.limit&&U.req.values===R.values&&ji(U.req.query.range,R.query.range)});return B?[B,!0,I,L]:[L.find(function(U){return("limit"in U.req?U.req.limit:1/0)>=R.limit&&(!R.values||U.req.values)&&Ba(U.req.query.range,R.query.range)}),!1,I,L];case"count":return B=L.find(function(U){return ji(U.req.query.range,R.query.range)}),[B,!!B,I,L]}})(o,l,"query",h),T=_[0],w=_[1],j=_[2],E=_[3];return T&&w?T.obsSet=h.obsSet:(w=u.query(h).then(function(A){var D=A.result;if(T&&(T.res=D),g){for(var P=0,R=D.length;P<R;++P)Object.freeze(D[P]);Object.freeze(D)}else A.result=O(D);return A}).catch(function(A){return E&&T&&N(E,T),Promise.reject(A)}),T={obsSet:h.obsSet,promise:w,subscribers:new Set,type:"query",req:h,dirty:!1},E?E.push(T):(E=[T],(j=j||(wn["idb://".concat(o,"/").concat(l)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[h.query.index.name||""]=E)),Ma(T,E,y,C),T.promise.then(function(A){return{result:Di(A.result,h,j?.optimisticOps,u,T,g)}})}})}})}};function Tr(i,o){return new Proxy(i,{get:function(l,u,d){return u==="db"?o:Reflect.get(l,u,d)}})}var Qt=(tt.prototype.version=function(i){if(isNaN(i)||i<.1)throw new J.Type("Given version is not a positive number");if(i=Math.round(10*i)/10,this.idbdb||this._state.isBeingOpened)throw new J.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,i);var o=this._versions,l=o.filter(function(u){return u._cfg.version===i})[0];return l||(l=new this.Version(i),o.push(l),o.sort(Ta),l.stores({}),this._state.autoSchema=!1,l)},tt.prototype._whenReady=function(i){var o=this;return this.idbdb&&(this._state.openComplete||Y.letThrough||this._vip)?i():new X(function(l,u){if(o._state.openComplete)return u(new J.DatabaseClosed(o._state.dbOpenError));if(!o._state.isBeingOpened){if(!o._state.autoOpen)return void u(new J.DatabaseClosed);o.open().catch(ue)}o._state.dbReadyPromise.then(l,u)}).then(i)},tt.prototype.use=function(i){var o=i.stack,l=i.create,u=i.level,d=i.name;return d&&this.unuse({stack:o,name:d}),i=this._middlewares[o]||(this._middlewares[o]=[]),i.push({stack:o,create:l,level:u??10,name:d}),i.sort(function(h,g){return h.level-g.level}),this},tt.prototype.unuse=function(i){var o=i.stack,l=i.name,u=i.create;return o&&this._middlewares[o]&&(this._middlewares[o]=this._middlewares[o].filter(function(d){return u?d.create!==u:!!l&&d.name!==l})),this},tt.prototype.open=function(){var i=this;return gn(Xe,function(){return Oa(i)})},tt.prototype._close=function(){var i=this._state,o=Rn.indexOf(this);if(0<=o&&Rn.splice(o,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}i.isBeingOpened||(i.dbReadyPromise=new X(function(l){i.dbReadyResolve=l}),i.openCanceller=new X(function(l,u){i.cancelOpen=u}))},tt.prototype.close=function(l){var o=(l===void 0?{disableAutoOpen:!0}:l).disableAutoOpen,l=this._state;o?(l.isBeingOpened&&l.cancelOpen(new J.DatabaseClosed),this._close(),l.autoOpen=!1,l.dbOpenError=new J.DatabaseClosed):(this._close(),l.autoOpen=this._options.autoOpen||l.isBeingOpened,l.openComplete=!1,l.dbOpenError=null)},tt.prototype.delete=function(i){var o=this;i===void 0&&(i={disableAutoOpen:!0});var l=0<arguments.length&&typeof arguments[0]!="object",u=this._state;return new X(function(d,h){function g(){o.close(i);var y=o._deps.indexedDB.deleteDatabase(o.name);y.onsuccess=Le(function(){var C,_,T;C=o._deps,_=o.name,T=C.indexedDB,C=C.IDBKeyRange,gs(T)||_===mr||ms(T,C).delete(_).catch(ue),d()}),y.onerror=Wt(h),y.onblocked=o._fireOnBlocked}if(l)throw new J.InvalidArgument("Invalid closeOptions argument to db.delete()");u.isBeingOpened?u.dbReadyPromise.then(g):g()})},tt.prototype.backendDB=function(){return this.idbdb},tt.prototype.isOpen=function(){return this.idbdb!==null},tt.prototype.hasBeenClosed=function(){var i=this._state.dbOpenError;return i&&i.name==="DatabaseClosed"},tt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},tt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(tt.prototype,"tables",{get:function(){var i=this;return c(this._allTables).map(function(o){return i._allTables[o]})},enumerable:!1,configurable:!0}),tt.prototype.transaction=function(){var i=function(o,l,u){var d=arguments.length;if(d<2)throw new J.InvalidArgument("Too few arguments");for(var h=new Array(d-1);--d;)h[d-1]=arguments[d];return u=h.pop(),[o,Fn(h),u]}.apply(this,arguments);return this._transaction.apply(this,i)},tt.prototype._transaction=function(i,o,l){var u=this,d=Y.trans;d&&d.db===this&&i.indexOf("!")===-1||(d=null);var h,g,y=i.indexOf("?")!==-1;i=i.replace("!","").replace("?","");try{if(g=o.map(function(_){if(_=_ instanceof u.Table?_.name:_,typeof _!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return _}),i=="r"||i===rs)h=rs;else{if(i!="rw"&&i!=ss)throw new J.InvalidArgument("Invalid transaction mode: "+i);h=ss}if(d){if(d.mode===rs&&h===ss){if(!y)throw new J.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");d=null}d&&g.forEach(function(_){if(d&&d.storeNames.indexOf(_)===-1){if(!y)throw new J.SubTransaction("Table "+_+" not included in parent transaction.");d=null}}),y&&d&&!d.active&&(d=null)}}catch(_){return d?d._promise(null,function(T,w){w(_)}):et(_)}var C=function _(T,w,j,E,A){return X.resolve().then(function(){var D=Y.transless||Y,P=T._createTransaction(w,j,T._dbSchema,E);if(P.explicit=!0,D={trans:P,transless:D},E)P.idbtrans=E.idbtrans;else try{P.create(),P.idbtrans._explicit=!0,T._state.PR1398_maxLoop=3}catch(L){return L.name===Ke.InvalidState&&T.isOpen()&&0<--T._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),T.close({disableAutoOpen:!1}),T.open().then(function(){return _(T,w,j,null,A)})):et(L)}var R,I=rt(A);return I&&On(),D=X.follow(function(){var L;(R=A.call(P,P))&&(I?(L=an.bind(null,null),R.then(L,L)):typeof R.next=="function"&&typeof R.throw=="function"&&(R=Cs(R)))},D),(R&&typeof R.then=="function"?X.resolve(R).then(function(L){return P.active?L:et(new J.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):D.then(function(){return R})).then(function(L){return E&&P._resolve(),P._completion.then(function(){return L})}).catch(function(L){return P._reject(L),et(L)})})}.bind(null,this,h,g,d,l);return d?d._promise(h,C,"lock"):Y.trans?gn(Y.transless,function(){return u._whenReady(C)}):this._whenReady(C)},tt.prototype.table=function(i){if(!k(this._allTables,i))throw new J.InvalidTable("Table ".concat(i," does not exist"));return this._allTables[i]},tt);function tt(i,o){var l=this;this._middlewares={},this.verno=0;var u=tt.dependencies;this._options=o=s({addons:tt.addons,autoOpen:!0,indexedDB:u.indexedDB,IDBKeyRange:u.IDBKeyRange,cache:"cloned"},o),this._deps={indexedDB:o.indexedDB,IDBKeyRange:o.IDBKeyRange},u=o.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var d,h,g,y,C,_={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ue,dbReadyPromise:null,cancelOpen:ue,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:o.autoOpen};_.dbReadyPromise=new X(function(w){_.dbReadyResolve=w}),_.openCanceller=new X(function(w,j){_.cancelOpen=j}),this._state=_,this.name=i,this.on=Hn(this,"populate","blocked","versionchange","close",{ready:[Ct,ue]}),this.on.ready.subscribe=Re(this.on.ready.subscribe,function(w){return function(j,E){tt.vip(function(){var A,D=l._state;D.openComplete?(D.dbOpenError||X.resolve().then(j),E&&w(j)):D.onReadyBeingFired?(D.onReadyBeingFired.push(j),E&&w(j)):(w(j),A=l,E||w(function P(){A.on.ready.unsubscribe(j),A.on.ready.unsubscribe(P)}))})}}),this.Collection=(d=this,Kn(Ca.prototype,function(R,P){this.db=d;var E=ci,A=null;if(P)try{E=P()}catch(I){A=I}var D=R._ctx,P=D.table,R=P.hook.reading.fire;this._ctx={table:P,index:D.index,isPrimKey:!D.index||P.schema.primKey.keyPath&&D.index===P.schema.primKey.name,range:E,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:A,or:D.or,valueMapper:R!==ge?R:null}})),this.Table=(h=this,Kn(hi.prototype,function(w,j,E){this.db=h,this._tx=E,this.name=w,this.schema=j,this.hook=h._allTables[w]?h._allTables[w].hook:Hn(null,{creating:[Ye,ue],reading:[$t,ge],updating:[Rt,ue],deleting:[rn,ue]})})),this.Transaction=(g=this,Kn(Sa.prototype,function(w,j,E,A,D){var P=this;this.db=g,this.mode=w,this.storeNames=j,this.schema=E,this.chromeTransactionDurability=A,this.idbtrans=null,this.on=Hn(this,"complete","error","abort"),this.parent=D||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new X(function(R,I){P._resolve=R,P._reject=I}),this._completion.then(function(){P.active=!1,P.on.complete.fire()},function(R){var I=P.active;return P.active=!1,P.on.error.fire(R),P.parent?P.parent._reject(R):I&&P.idbtrans&&P.idbtrans.abort(),et(R)})})),this.Version=(y=this,Kn(Fa.prototype,function(w){this.db=y,this._cfg={version:w,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(C=this,Kn(yi.prototype,function(w,j,E){if(this.db=C,this._ctx={table:w,index:j===":id"?null:j,or:E},this._cmp=this._ascending=Ce,this._descending=function(A,D){return Ce(D,A)},this._max=function(A,D){return 0<Ce(A,D)?A:D},this._min=function(A,D){return Ce(A,D)<0?A:D},this._IDBKeyRange=C._deps.IDBKeyRange,!this._IDBKeyRange)throw new J.MissingAPI})),this.on("versionchange",function(w){0<w.newVersion?console.warn("Another connection wants to upgrade database '".concat(l.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(l.name,"'. Closing db now to resume the delete request.")),l.close({disableAutoOpen:!1})}),this.on("blocked",function(w){!w.newVersion||w.newVersion<w.oldVersion?console.warn("Dexie.delete('".concat(l.name,"') was blocked")):console.warn("Upgrade '".concat(l.name,"' blocked by other connection holding version ").concat(w.oldVersion/10))}),this._maxKey=Gn(o.IDBKeyRange),this._createTransaction=function(w,j,E,A){return new l.Transaction(w,j,E,l._options.chromeTransactionDurability,A)},this._fireOnBlocked=function(w){l.on("blocked").fire(w),Rn.filter(function(j){return j.name===l.name&&j!==l&&!j._state.vcFired}).map(function(j){return j.on("versionchange").fire(w)})},this.use(Ia),this.use(Na),this.use(La),this.use(Ra),this.use(za);var T=new Proxy(this,{get:function(w,j,E){if(j==="_vip")return!0;if(j==="table")return function(D){return Tr(l.table(D),T)};var A=Reflect.get(w,j,E);return A instanceof hi?Tr(A,T):j==="tables"?A.map(function(D){return Tr(D,T)}):j==="_createTransaction"?function(){return Tr(A.apply(this,arguments),T)}:A}});this.vip=T,u.forEach(function(w){return w(l)})}var Dr,Tt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",qa=(_s.prototype.subscribe=function(i,o,l){return this._subscribe(i&&typeof i!="function"?i:{next:i,error:o,complete:l})},_s.prototype[Tt]=function(){return this},_s);function _s(i){this._subscribe=i}try{Dr={indexedDB:a.indexedDB||a.mozIndexedDB||a.webkitIndexedDB||a.msIndexedDB,IDBKeyRange:a.IDBKeyRange||a.webkitIDBKeyRange}}catch{Dr={indexedDB:null,IDBKeyRange:null}}function Fi(i){var o,l=!1,u=new qa(function(d){var h=rt(i),g,y=!1,C={},_={},T={get closed(){return y},unsubscribe:function(){y||(y=!0,g&&g.abort(),w&&un.storagemutated.unsubscribe(E))}};d.start&&d.start(T);var w=!1,j=function(){return ns(A)},E=function(D){_r(C,D),ws(_,C)&&j()},A=function(){var D,P,R;!y&&Dr.indexedDB&&(C={},D={},g&&g.abort(),g=new AbortController,R=(function(I){var L=De();try{h&&On();var B=on(i,I);return B=h?B.finally(an):B}finally{L&&qe()}})(P={subscr:D,signal:g.signal,requery:j,querier:i,trans:null}),Promise.resolve(R).then(function(I){l=!0,o=I,y||P.signal.aborted||(C={},(function(L){for(var B in L)if(k(L,B))return;return 1})(_=D)||w||(un(Xn,E),w=!0),ns(function(){return!y&&d.next&&d.next(I)}))},function(I){l=!1,["DatabaseClosedError","AbortError"].includes(I?.name)||y||ns(function(){y||d.error&&d.error(I)})}))};return setTimeout(j,0),T});return u.hasValue=function(){return l},u.getValue=function(){return o},u}var vn=Qt;function Ps(i){var o=dn;try{dn=!0,un.storagemutated.fire(i),$s(i,!0)}finally{dn=o}}z(vn,s(s({},Oe),{delete:function(i){return new vn(i,{addons:[]}).delete()},exists:function(i){return new vn(i,{addons:[]}).open().then(function(o){return o.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(i){try{return o=vn.dependencies,l=o.indexedDB,o=o.IDBKeyRange,(gs(l)?Promise.resolve(l.databases()).then(function(u){return u.map(function(d){return d.name}).filter(function(d){return d!==mr})}):ms(l,o).toCollection().primaryKeys()).then(i)}catch{return et(new J.MissingAPI)}var o,l},defineClass:function(){return function(i){p(this,i)}},ignoreTransaction:function(i){return Y.trans?gn(Y.transless,i):i()},vip:bs,async:function(i){return function(){try{var o=Cs(i.apply(this,arguments));return o&&typeof o.then=="function"?o:X.resolve(o)}catch(l){return et(l)}}},spawn:function(i,o,l){try{var u=Cs(i.apply(l,o||[]));return u&&typeof u.then=="function"?u:X.resolve(u)}catch(d){return et(d)}},currentTransaction:{get:function(){return Y.trans||null}},waitFor:function(i,o){return o=X.resolve(typeof i=="function"?vn.ignoreTransaction(i):i).timeout(o||6e4),Y.trans?Y.trans.waitFor(o):o},Promise:X,debug:{get:function(){return Ae},set:function(i){Me(i)}},derive:te,extend:p,props:z,override:Re,Events:Hn,on:un,liveQuery:Fi,extendObservabilitySet:_r,getByKeyPath:Te,setByKeyPath:We,delByKeyPath:function(i,o){typeof o=="string"?We(i,o,void 0):"length"in o&&[].map.call(o,function(l){We(i,l,void 0)})},shallowClone:Ot,deepClone:O,getObjectDiff:Es,cmp:Ce,asap:be,minKey:-1/0,addons:[],connections:Rn,errnames:Ke,dependencies:Dr,cache:wn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(i){return parseInt(i)}).reduce(function(i,o,l){return i+o/Math.pow(10,2*l)})})),vn.maxKey=Gn(vn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(un(Xn,function(i){dn||(i=new CustomEvent(ls,{detail:i}),dn=!0,dispatchEvent(i),dn=!1)}),addEventListener(ls,function(i){i=i.detail,dn||Ps(i)}));var Ln,dn=!1,Oi=function(){};return typeof BroadcastChannel<"u"&&((Oi=function(){(Ln=new BroadcastChannel(ls)).onmessage=function(i){return i.data&&Ps(i.data)}})(),typeof Ln.unref=="function"&&Ln.unref(),un(Xn,function(i){dn||Ln.postMessage(i)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(i){if(!Qt.disableBfCache&&i.persisted){Ae&&console.debug("Dexie: handling persisted pagehide"),Ln?.close();for(var o=0,l=Rn;o<l.length;o++)l[o].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(i){!Qt.disableBfCache&&i.persisted&&(Ae&&console.debug("Dexie: handling persisted pageshow"),Oi(),Ps({all:new ht(-1/0,[[]])}))})),X.rejectionMapper=function(i,o){return!i||i instanceof Be||i instanceof TypeError||i instanceof SyntaxError||!i.name||!Ve[i.name]?i:(o=new Ve[i.name](o||i.message,i),"stack"in i&&q(o,"stack",{get:function(){return this.inner.stack}}),o)},Me(Ae),s(Qt,Object.freeze({__proto__:null,Dexie:Qt,liveQuery:Fi,Entity:ui,cmp:Ce,PropModSymbol:Gt,PropModification:Vn,replacePrefix:function(i,o){return new Vn({replacePrefix:[i,o]})},add:function(i){return new Vn({add:i})},remove:function(i){return new Vn({remove:i})},default:Qt,RangeSet:ht,mergeRanges:Zn,rangesOverlap:Ci}),{default:Qt}),Qt})})(Lr)),Lr.exports}var kl=El();const Bs=$l(kl),Yi=Symbol.for("Dexie"),qr=globalThis[Yi]||(globalThis[Yi]=Bs);if(Bs.semVer!==qr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Bs.semVer} and ${qr.semVer}`);const{liveQuery:jo,mergeRanges:Wf,rangesOverlap:Hf,RangeSet:Kf,cmp:Vf,Entity:Yf,PropModSymbol:Xf,PropModification:Gf,replacePrefix:Qf,add:Jf,remove:Zf}=qr,Sl="easydb";let Fr=null;function _l(){if(Fr)return Fr;const e=new qr(Sl);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),Fr={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins")},Fr}function Or(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(s=>Fo(s,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const s=jo(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>s.unsubscribe()}}}function Pl(e,t){return{async find(r){const s=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return s.toArray();const n=Object.entries(r);return s.filter(a=>Fo(a,n)).toArray()},async findOne(r){const s=await e.get(r);return s&&s.tableId===t?s:null},async insert(r){const s={...r,tableId:t};return await e.add(s),s},async bulkInsert(r){if(r.length===0)return[];const s=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(s),s},async upsert(r){const s={...r,tableId:t};return await e.put(s),s},async patch(r,s){if(await e.update(r,s)===0)throw new Error(`row patch: no row ${r}`);const a=await e.get(r);if(!a)throw new Error(`row patch: row ${r} vanished after update`);return a},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=jo(()=>e.where("tableId").equals(t).toArray()).subscribe({next:a=>r(a)});return()=>n.unsubscribe()}}}function Fo(e,t){for(const[r,s]of t)if(e[r]!==s)return!1;return!0}function Al(e){return{workspaces:Or(e.workspaces),tables:Or(e.tables),settings:Or(e.settings),plugins:Or(e.plugins),rows:t=>Pl(e.rows,t)}}function Tl(e){const{base:t,providers:r,tableById:s,ctx:n}=e,a=new Map;return{...t,rows(c){const f=s(c),p=f?.source;if(p){const $=r.get(p.type);if($){const S=JSON.stringify(p),k=a.get(c);if(k&&k.key===S)return k.coll;const z=$.create(f,n);return a.set(c,{key:S,coll:z}),z}}return a.delete(c),t.rows(c)}}}function Dl(){const e=new Map;return{on(t,r){let s=e.get(t);return s||(s=new Set,e.set(t,s)),s.add(r),()=>{s.delete(r)}},emit(t,r){const s=e.get(t);if(s)for(const n of s)try{n(r)}catch(a){console.error(`[event:${String(t)}] listener threw`,a)}}}}const hn=ot`
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
`;function Dn(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const Xi=new WeakSet;function pn(e,t){if(Xi.has(t))return;Xi.add(t);let r=0,s=0,n=0,a=0,c=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",p=>{if(p.target.closest("button, input, textarea, select, a, label"))return;c=!0,r=p.clientX,s=p.clientY;const S=e.getBoundingClientRect();n=S.left,a=S.top,t.setPointerCapture(p.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",p=>{if(!c)return;const $=p.clientX-r,S=p.clientY-s,k=-e.offsetWidth+80,z=window.innerWidth-80,M=0,q=window.innerHeight-40,te=Math.max(k,Math.min(z,n+$)),ne=Math.max(M,Math.min(q,a+S));e.style.position="fixed",e.style.left=`${te}px`,e.style.top=`${ne}px`,e.style.margin="0"});const f=p=>{if(c){c=!1;try{t.releasePointerCapture(p.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",f),t.addEventListener("pointercancel",f)}var jl=Object.defineProperty,Fl=Object.getOwnPropertyDescriptor,Oo=(e,t,r,s)=>{for(var n=s>1?void 0:s?Fl(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&jl(t,r,n),n};let Dt=class extends nt{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),Dt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Dt.instance===this&&(Dt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&pn(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(s=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:s}})}choice(e,t,r="Choose"){return this.enqueue(s=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:s}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return H`
      <dialog @cancel=${this.onCancel} @keydown=${Dn}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):ze}
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
            ${e.message?H`<p class="message">${e.message}</p>`:ze}
            <div class="choices">
              ${e.options.map(t=>H`<button class="choice" @click=${()=>this.closeAndResolve(t)}>
                    ${t}
                  </button>`)}
            </div>
          </div>
        `}}};Dt.instance=null;Dt.styles=[hn,ot`
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
    `];Oo([ee()],Dt.prototype,"current",2);Dt=Oo([dt("host-dialogs")],Dt);const en=ot`
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
`;var Ol=Object.defineProperty,Rl=Object.getOwnPropertyDescriptor,Ro=(e,t,r,s)=>{for(var n=s>1?void 0:s?Rl(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Ol(t,r,n),n};let Jt=class extends nt{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),Jt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Jt.instance===this&&(Jt.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const s=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),s)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return H`
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
    `}};Jt.instance=null;Jt.styles=[en,ot`
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
    `];Ro([ee()],Jt.prototype,"toasts",2);Jt=Ro([dt("toast-host")],Jt);function zl(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let s=0,n;for(;(n=t.exec(e))!==null;)n.index>s&&r.push(e.slice(s,n.index)),r.push({url:n[0]}),s=n.index+n[0].length;return s<e.length&&r.push(e.slice(s)),r.length===0?e:r.map(a=>typeof a=="string"?a:H`<a href=${a.url} target="_blank" rel="noopener noreferrer">${a.url}</a>`)}function Il(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Ll(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map}}function Cn(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function Ds(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function Bl(e){return{registerHeaderButton:t=>Cn(e.headerButtons,t),registerFooterButton:t=>Cn(e.footerButtons,t),registerTableButton:t=>Cn(e.tableButtons,t),registerImporter:t=>Cn(e.importers,t),registerExporter:t=>Cn(e.exporters,t),registerUrlSource:t=>Cn(e.urlSources,t),registerDropHandler:t=>Cn(e.dropHandlers,t),registerCellRenderer:(t,r)=>Ds(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>Ds(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>Ds(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},dialogs:Ml}}const Ml={async alert(e,t){const r=Dt.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=Dt.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const s=Dt.instance;return s?s.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const s=Dt.instance;if(s)return s.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=Jt.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}};function Nl(e){const t=Bl(e.registries),r=e.registries.rowSources,s=a=>(r.set(a.type,a),()=>{r.get(a.type)===a&&r.delete(a.type)}),n={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:n,registerRowSource:s,backend:{fetch:async(a,c)=>{const f=await ql(e.store),p=c?.body instanceof ArrayBuffer;if(!f||p)return globalThis.fetch(a,c);const $={url:a};return c?.method&&($.method=c.method),c?.headers&&($.headers=c.headers),typeof c?.body=="string"&&($.body=c.body),globalThis.fetch(`${f}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify($)})},async saveFile(a,c,f){const p=typeof c=="string"?new Blob([c],{type:f??"application/octet-stream"}):c,$=URL.createObjectURL(p),S=document.createElement("a");S.href=$,S.download=a,S.rel="noopener",document.body.appendChild(S),S.click(),S.remove(),setTimeout(()=>URL.revokeObjectURL($),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function ql(e){const r=(await e.settings.findOne("server-sync:url"))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}const Ul={name:"csv-import",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"easyDBAccess built-ins"};function Wl(e){e.ui.registerImporter(Hl),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const s=rc(t).filter(sc);if(s.length===0)return!1;t.preventDefault();for(const n of s)await Kl(e,n);return!0})}const Hl={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return Yr(t)}};async function Kl(e,t){const r=e.workspaceId();if(!r)throw new Error("csv-import: no active workspace");const s=await t.text(),n=t.name.replace(/\.csv$/i,"")||"imported",a=(await e.store.tables.find()).find(S=>S.workspaceId===r&&S.name===n);let c,f;if(a){const S=await e.ui.dialogs.choice(`A table named "${n}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!S)return;S==="Append rows"?(f="append",c=a.id):S==="Overwrite rows"?(f="overwrite",c=a.id):(f="new",c=Rr())}else f="new",c=Rr();e.events.emit("import:before",{source:"csv",tableId:c});let p;if(f==="new"){const S=Yr(s),k=a?`${n} (${Date.now().toString(36)})`:n;await e.store.tables.insert({id:c,workspaceId:r,name:k,code:Ms(k),columns:S.columns,view:"table",updatedAt:Date.now()}),p=S.rows.map(z=>({id:Rr(),tableId:c,data:z,updatedAt:Date.now()}))}else{const S=a.columns;if(p=zo(s).rows.map(z=>{const M={};for(let q=0;q<S.length;q++){const te=S[q];M[te.field]=Bo(z[q]??"",te.type)}return{id:Rr(),tableId:c,data:M,updatedAt:Date.now()}}),f==="overwrite"){const z=e.store.rows(c),M=await z.find();await z.bulkRemove(M.map(q=>q.id))}}await e.store.rows(c).bulkInsert(p),e.events.emit("import:after",{source:"csv",tableId:c,rowCount:p.length})}function zo(e){const t=e.replace(/﻿/,""),r=Io(t),s=Lo(t,r);if(s.length===0)return{header:[],rows:[]};const n=s[0],a=s.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:n,rows:a}}function Yr(e){const t=e.replace(/﻿/,""),r=Io(t),s=Lo(t,r);if(s.length===0)return{columns:[],rows:[]};const n=s[0],a=s.slice(1).filter(z=>!(z.length===1&&z[0]==="")),c=n.map((z,M)=>Xl(z,M)),f=c.map(z=>z.field),p=a.map(z=>{const M={};for(let q=0;q<f.length;q++)M[f[q]]=z[q]??"";return M}),$=c.map((z,M)=>z.type?z.type:Gl(p.map(q=>q[f[M]]??"").filter(q=>q.length>0))),S=c.map((z,M)=>{const q=$[M]??"string",te={field:z.field,label:z.label,type:q},ne=Yl(q),ie=z.renderer??ne;return ie&&(te.renderer=ie),z.default!==void 0&&(te.default=z.default),z.max!=null&&(te.max=z.max),z.unique&&(te.unique=!0),z.notnull&&(te.notnull=!0),z.hidden&&(te.hidden=!0),te}),k=p.map(z=>{const M={};for(let q=0;q<f.length;q++){const te=f[q],ne=$[q]??"string";M[te]=Bo(z[te]??"",ne)}return M});return{columns:S,rows:k}}const Vl=new Set(["string","number","boolean","date","datetime"]),Gi={color:"color",image:"image"};function Yl(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function Xl(e,t){const r=e.trim();if(!r.includes(":"))return{field:Ms(r||`col_${t+1}`),label:r||`Column ${t+1}`};const s=r.split(":"),n=Ms(s[0]||`col_${t+1}`),a=(s[1]??s[0]??"").trim()||n,c={field:n,label:a},f=(s[2]??"").trim();f&&(Vl.has(f)?c.type=f:Gi[f]&&(c.type="string",c.renderer=Gi[f]));const p=(s[3]??"").trim();p&&(c.default=p);const $=(s[4]??"").trim();if($){const k=Number($);Number.isFinite(k)&&k>0&&(c.max=k)}const S=(s[5]??"").toLowerCase();return S.includes("u")&&(c.unique=!0),S.includes("n")&&(c.notnull=!0),S.includes("h")&&(c.hidden=!0),c}function Io(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const a of t)a in r&&(r[a]+=1);let s=",",n=-1;for(const a of[",",";","	"])(r[a]??0)>n&&(s=a,n=r[a]??0);return s}function Lo(e,t){const r=[];let s=[],n="",a=!1;for(let c=0;c<e.length;c++){const f=e[c];a?f==='"'?e[c+1]==='"'?(n+='"',c++):a=!1:n+=f:f==='"'?a=!0:f===t?(s.push(n),n=""):f===`
`||f==="\r"?(f==="\r"&&e[c+1]===`
`&&c++,s.push(n),r.push(s),s=[],n=""):n+=f}return(n.length>0||s.length>0)&&(s.push(n),r.push(s)),r}function Gl(e){return e.length===0?"string":e.every(Jl)?"boolean":e.every(Zl)?"number":e.every(tc)?"datetime":e.every(ec)?"date":"string"}const Ql=/^(true|false|yes|no|0|1)$/i;function Jl(e){return Ql.test(e.trim())}function Zl(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function ec(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function tc(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function Bo(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const s=Number(r);return Number.isFinite(s)?s:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return Mo(r);case"datetime":return nc(r);default:return e}}function Mo(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let s=parseInt(t[1],10),n=parseInt(t[2],10);const a=t[3];let c=parseInt(a,10);a.length===2&&(c+=2e3);let f,p;return s>12?(f=s,p=n):n>12?(p=s,f=n):(f=s,p=n),`${c.toString().padStart(4,"0")}-${p.toString().padStart(2,"0")}-${f.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function nc(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const s=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(s)return`${Mo(`${s[1]}/${s[2]}/${s[3]}`)}T${s[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const a=n.toISOString();return`${a.slice(0,10)}T${a.slice(11,16)}`}return e}function rc(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const s of Array.from(t.items))if(s.kind==="file"){const n=s.getAsFile();n&&r.push(n)}return r}return[]}function sc(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function Ms(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function Rr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const ic=Object.freeze(Object.defineProperty({__proto__:null,init:Wl,meta:Ul,parseCsv:Yr,parseCsvRaw:zo},Symbol.toStringTag,{value:"Module"})),oc={name:"csv-export",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"easyDBAccess built-ins"},ac={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Zs(e,t)}};function lc(e){e.ui.registerExporter(ac),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const s=await t.store.tables.findOne(r.tableId);if(!s)return;const n=await t.store.rows(s.id).find(),a=Zs(s,n);await t.backend.saveFile(`${s.code||s.name||"table"}.csv`,a,"text/csv")}})}function Zs(e,t){const r=e.columns.map(a=>a.field),s=e.columns.map(a=>Qi(a.label??a.field)),n=t.map(a=>r.map(c=>Qi(cc(a.data[c]))).join(","));return[s.join(","),...n].join(`\r
`)}function cc(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function Qi(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const uc=Object.freeze(Object.defineProperty({__proto__:null,init:lc,meta:oc,serializeCsv:Zs},Symbol.toStringTag,{value:"Module"}));var dc=Object.defineProperty,fc=Object.getOwnPropertyDescriptor,Wn=(e,t,r,s)=>{for(var n=s>1?void 0:s?fc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&dc(t,r,n),n};function Ns(e,t={}){return(_t.instance??hc()).open(e,t)}function hc(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function pc(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let _t=class extends nt{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,s)=>r?s:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),_t.instance=this}disconnectedCallback(){super.disconnectedCallback(),_t.instance===this&&(_t.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pn(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(()=>!0),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return H`
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
    `}};_t.instance=null;_t.styles=[hn,ot`
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
    `];Wn([ee()],_t.prototype,"items",2);Wn([ee()],_t.prototype,"selected",2);Wn([ee()],_t.prototype,"heading",2);Wn([ee()],_t.prototype,"message",2);Wn([ee()],_t.prototype,"confirmLabel",2);_t=Wn([dt("table-select-dialog")],_t);const mc={name:"json-import",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"easyDBAccess built-ins"};function gc(e){e.ui.registerImporter(bc),e.ui.registerDropHandler(async t=>{const s=Ec(t).filter(kc);if(s.length===0)return!1;t.preventDefault();for(const n of s)await yc(e,n);return!0})}const bc={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=Xr(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function yc(e,t){await ei(e,await t.text(),t.name)}async function ei(e,t,r){const s=e.workspaceId();if(!s)throw new Error("json-import: no active workspace");let n;try{n=JSON.parse(t)}catch(M){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${M.message}`)});return}const a=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=Xr(n,a);if(c.length===0)return;let f=c;if(c.length>1){const M=await Ns(c.map(q=>({name:q.name,size:q.rows.length})),{title:"Import tables",message:`"${r}" contains ${c.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!M)return;f=M.map(q=>c[q])}const p=(await e.store.tables.find()).filter(M=>M.workspaceId===s),$=new Set(f.map(M=>M.name)),S=p.filter(M=>$.has(M.name));let k;if(S.length===0&&f.length===1)k="append-new";else{const M=S.length>0?[`Overwrite matching (${S.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],q=await e.ui.dialogs.choice(`Importing ${f.length} table${f.length===1?"":"s"} from "${r}".${S.length>0?`

${S.length} table${S.length===1?"":"s"} share a name with existing data.`:""}`,M,"JSON import");if(!q)return;q.startsWith("Overwrite matching")?k="overwrite-matching":q==="Replace entire workspace"?k="replace-workspace":k="append-new"}if(k==="replace-workspace")for(const M of p){const q=e.store.rows(M.id),te=await q.find();await q.bulkRemove(te.map(ne=>ne.id)),await e.store.tables.remove(M.id)}const z=new Map(p.map(M=>[M.name,M]));for(const M of f){let q;const te=k==="overwrite-matching"?z.get(M.name):void 0;if(te){q=te.id;const me=e.store.rows(q),Re=await me.find();await me.bulkRemove(Re.map(ae=>ae.id)),await e.store.tables.patch(q,{columns:M.columns,...M.windowGeometry?{windowGeometry:M.windowGeometry}:{},...M.sortColumn?{sortColumn:M.sortColumn,sortAsc:M.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},updatedAt:Date.now()})}else q=to(),e.events.emit("import:before",{source:"json",tableId:q}),await e.store.tables.insert({id:q,workspaceId:s,name:M.name,code:Sc(M.name),columns:M.columns,view:"table",...M.windowGeometry?{windowGeometry:M.windowGeometry}:{},...M.sortColumn?{sortColumn:M.sortColumn,sortAsc:M.sortAsc??!0}:{},updatedAt:Date.now()});const ne=e.store.rows(q),ie=M.rows.map(me=>({id:to(),tableId:q,data:me,updatedAt:Date.now()}));await ne.bulkInsert(ie),e.events.emit("import:after",{source:"json",tableId:q,rowCount:M.rows.length})}}function Xr(e,t){if(It(e)&&Ji(e))return Zi(e);if(It(e)&&Array.isArray(e.tables)){const r=e,s=[];for(const n of r.tables){if(vc(n)){const a=n,c=It(a.windowGeometry)?a.windowGeometry:void 0,f=typeof a.sortColumn=="string"?a.sortColumn:void 0,p=typeof a.sortAsc=="boolean"?a.sortAsc:void 0;s.push({name:String(n.name),columns:n.columns.map(xc),rows:Array.isArray(n.rows)?n.rows.filter(It):[],...c?{windowGeometry:c}:{},...f?{sortColumn:f,sortAsc:p??!0}:{}});continue}It(n)&&Ji(n)&&s.push(...Zi(n))}return s}if(Array.isArray(e)){const r=e.filter(It);return r.length===0?[]:[{name:t,...eo(r)}]}return It(e)?[{name:t,...eo([e])}]:[]}function Ji(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!It(r))continue;const s=r;if(Array.isArray(s.dataArray)&&Array.isArray(s.columns))return!0}return!1}function Zi(e){const t=[];for(const[r,s]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!It(s))continue;const n=s;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const a=r.replace(/\.table\.json$/,""),c=n.columns.map(S=>wc(S)),f=c.map(S=>S.field),p=n.dataArray.filter(S=>Array.isArray(S)).map(S=>{const k={};for(let z=0;z<f.length;z++)k[f[z]]=S[z];return k}),$={name:a,columns:c,rows:p};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const S=n.elementRect;$.windowGeometry={x:S.x,y:S.y,w:S.width??600,h:S.height??400,z:S.zIndex??100,minimized:!!S.minimized,maximized:!!S.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<f.length&&($.sortColumn=f[n.sortColumn],$.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push($)}return t}function wc(e){const t=String(e.field??"col"),r=String(e.name??t),s=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:s};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function vc(e){return It(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function xc(e){if(!It(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let s=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(s==="color"||s==="image")&&(n=n??s,s="string");const a={field:r,label:String(t.label??r),type:s};return n&&(a.renderer=n),typeof t.script=="string"&&(a.script=t.script),a}function eo(e){const t=new Set;for(const n of e)for(const a of Object.keys(n))t.add(a);return{columns:Array.from(t).map(n=>({field:n,label:n,type:$c(e.map(a=>a[n]))})),rows:e}}function $c(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Cc(r))?"date":"string"}function Cc(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function It(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Ec(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const s of Array.from(t.items))if(s.kind==="file"){const n=s.getAsFile();n&&r.push(n)}return r}return[]}function kc(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function Sc(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function to(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const _c=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:ei,init:gc,meta:mc,parsedToTables:Xr},Symbol.toStringTag,{value:"Module"}));class Kt extends Error{constructor(t,r){const s=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(s),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function jn(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),s={};for(const[f,p]of t.searchParams)s[f]=p;let n,a=null,c=null;if(r.length>=2){c=decodeURIComponent(r[r.length-1]),a=decodeURIComponent(r[r.length-2]);const f=r.slice(0,r.length-2).join("/");n=t.origin+(f?"/"+f:"")}else r.length===1&&(a=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:a,table:c,query:s}}function Ur(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[s,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(s,String(n));return r.toString()}function Pc(e){const t=e?.next_url??null,r=e?.next,s=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],a=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(f=>Array.isArray(f)&&a?Object.fromEntries(a.map((p,$)=>[p,f[$]])):f),nextUrl:t,nextToken:s,hasMore:t!=null||s!=null,truncated:e?.truncated===!0}}function Ac(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function Tc(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],s={},n=e?.column_details;if(Array.isArray(n))for(const f of n)s[f.column??f.name]=f;else n&&typeof n=="object"&&Object.assign(s,n);for(const f of r)f in s||(s[f]={});return{columns:(r.length?r:Object.keys(s)).map(f=>{const p=s[f]||{},$=p.is_pk===!0||p.is_pk===1||t.includes(f),S={field:f,label:No(f),type:Ac(p.sqlite_type??p.type,f)};return(p.notnull===!0||p.notnull===1||$)&&(S.notnull=!0),$&&(S.unique=!0),p.hidden===!0&&(S.hidden=!0),S}),pks:t}}function No(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function ti(e){const t=[],r=new Set;for(const s of e)for(const n of Object.keys(s))r.has(n)||(r.add(n),t.push(n));return t.map(s=>({field:s,label:No(s),type:Dc(e.map(n=>n[s]))}))}function Dc(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&jc(r))?"datetime":"string"}function jc(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Fc(e){const t=new TextEncoder().encode(String(e));let r="";for(const s of t){const n=String.fromCharCode(s);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+s.toString(16).toUpperCase().padStart(2,"0")}return r}function Oc(e,t){return!t||t.length===0?null:t.map(r=>Fc(e[r])).join(",")}function Rc(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const s of t){if(typeof s=="string"){r.push(s);continue}if(s&&typeof s=="object"&&typeof s.name=="string"){if(s.name==="_memory")continue;r.push(typeof s.route=="string"&&s.route?s.route:s.name)}}return r}function zc(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],s=[];for(const n of r){if(typeof n=="string"){s.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&s.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return s}async function ar(e,t){let r;try{r=await e(t)}catch(n){const a=n?.message||"network error";throw new Kt({error:`Couldn't reach ${t} (${a}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Kt(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const s=await r.json();if(s&&s.ok===!1)throw new Kt(s,r.status);return s}async function qo(e,t){return Rc(await ar(e,`${t}/-/databases.json`))}async function no(e,t,r){return zc(await ar(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function Uo(e,t){const r=Ur(t,{_extra:"columns"}),s=await ar(e,r),{columns:n,pks:a}=Tc(s),c=!!s&&s.column_details!=null;return{columns:n,pks:a,count:s?.count??null,typed:c,raw:s}}function Wo(e,t){if(t.length===0)return e;const r=new Map(ti(t).map(s=>[s.field,s.type]));return e.map(s=>{if(s.type!=="string")return s;const n=r.get(s.field);return n&&n!=="string"?{...s,type:n}:s})}async function Gr(e,t,r={}){const s=r.maxRows??1e4,a={_size:r.pageSize??1e3,...r.extraParams||{}};let c=Ur(t,a);const f=[];let p=!1,$=!1,S=0;for(;c;){const k=await ar(e,c),z=Pc(k);f.push(...z.rows),p=p||z.truncated,S+=1;const M=z.nextUrl!=null?z.nextUrl:z.nextToken!=null?Ur(t,{_next:z.nextToken}):null;M&&f.length<s&&z.rows.length>0?c=M:($=M!=null&&z.rows.length>0,c=null)}return{rows:f,truncated:p,hasMore:$,pages:S}}function Ic(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function Ho(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function Ko(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function Qr(e,t,r,s){let n;try{n=await e(t,{method:"POST",headers:Ic(s),body:JSON.stringify(r)})}catch(c){throw new Kt({error:`Couldn't reach ${t} (${c?.message||"network error"}).`},0)}if(n&&n.ok===!1){let c=null;try{c=await n.json()}catch{}throw new Kt(c&&typeof c=="object"?c:{error:`HTTP ${n.status} for ${t}`},n.status)}const a=await n.json();if(a&&a.ok===!1)throw new Kt(a,n.status);return a}async function ro(e,t,r,s={}){const n=await Qr(e,Ho(t,"insert"),{rows:r,return:!0},s.token);return Array.isArray(n?.rows)?n.rows:[]}async function Lc(e,t,r,s,n={}){const a=await Qr(e,Ko(t,r,"update"),{update:s,return:!0},n.token);return a&&typeof a.row=="object"&&a.row?a.row:Array.isArray(a?.rows)&&a.rows[0]?a.rows[0]:null}async function so(e,t,r,s={}){await Qr(e,Ko(t,r,"delete"),{},s.token)}async function Bc(e,t,r,s={}){const n=await Qr(e,Ho(t,"upsert"),{rows:r,return:!0},s.token);return Array.isArray(n?.rows)?n.rows:[]}async function Mc(e,t){const r=Ur(t,{_extra:"primary_keys"}),s=await ar(e,r);return Array.isArray(s?.primary_keys)?s.primary_keys:[]}async function Vo(e,t,r={}){const s=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,s);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const a=await n.json(),c=a?.datasette?.version??a?.version??null;let f=null;try{f=(await(await e(`${t}/-/actor.json`,s)).json())?.actor??null}catch{}return{reachable:!0,version:c,actor:f,writable:!!(r.token&&f)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function ni(e,t){return t?(r,s)=>{const n=(s??{}).headers??{};return e(r,{...s??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}class Nc extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function Yo(e){return`datasette:token:${e}`}function qc(e,t){for(const[r,s]of Object.entries(t))if(r!=="data"&&e[r]!==s)return!1;return!0}function Uc(e,t){const r=e.source,s=r?.config??{},n={base:s.base,db:s.db,table:s.table,query:{}},a=Array.isArray(s.pks)&&s.pks.length>0?s.pks:["rowid"],c=r?.writable===!0,f=s.maxRows??1e4,p=s.pollIntervalMs??0,$=(ae,be)=>t.backend.fetch(ae,be);async function S(){const be=(await t.settings.findOne(Yo(s.base)))?.value;return typeof be=="string"&&be.length>0?be:void 0}const k=async(ae,be)=>ni($,await S())(ae,be);function z(ae){return{id:Oc(ae,a)??Wc(),tableId:e.id,data:ae,updatedAt:Date.now()}}function M(ae){if(!c)throw new Nc(ae)}function q(ae){const be={};for(const[Te,We]of Object.entries(ae))a.includes(Te)||(be[Te]=We);return be}const te=new Set;let ne=[],ie=!1,me=null;function Re(){return me||(me=(async()=>{try{const{rows:ae}=await Gr(k,n,{maxRows:f});ne=ae.map(z),ie=!0;for(const be of te)be(ne);return ne}finally{me=null}})(),me)}return{async find(ae){const be=ie?ne:await Re();return!ae||Object.keys(ae).length===0?be:be.filter(Te=>qc(Te,ae))},async findOne(ae){return(ie?ne:await Re()).find(Te=>Te.id===ae)??null},async insert(ae){M("insert");const[be]=await ro(k,n,[ae.data]),Te=z(be??ae.data);return t.events.emit("row:created",{tableId:e.id,row:Te}),Re(),Te},async bulkInsert(ae){if(ae.length===0)return[];M("insert");const be=await ro(k,n,ae.map(We=>We.data)),Te=(be.length?be:ae.map(We=>We.data)).map(z);return Re(),Te},async upsert(ae){M("upsert");const[be]=await Bc(k,n,[ae.data]),Te=z(be??ae.data);return Re(),Te},async patch(ae,be){M("update");const Te=be.data,We=q(Te??{}),Ot=await Lc(k,n,ae,We),nn=z(Ot??{...Te??{}});return t.events.emit("row:updated",{tableId:e.id,row:nn,prev:nn}),Re(),nn},async remove(ae){M("delete"),await so(k,n,ae),t.events.emit("row:deleted",{tableId:e.id,rowId:ae}),Re()},async bulkRemove(ae){if(ae.length!==0){M("delete");for(const be of ae)await so(k,n,be);Re()}},subscribe(ae){te.add(ae),ie?ae(ne):Re();let be=null;return p>0&&(be=setInterval(()=>void Re(),p)),()=>{te.delete(ae),be&&clearInterval(be)}},async refresh(){await Re()}}}function Wc(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Hc=Object.defineProperty,Kc=Object.getOwnPropertyDescriptor,lr=(e,t,r,s)=>{for(var n=s>1?void 0:s?Kc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Hc(t,r,n),n};const Vc="https://latest.datasette.io/ephemeral";let jt=class extends nt{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();t&&this.finish({url:t,token:this.token.trim()})}}connectedCallback(){super.connectedCallback(),jt.instance=this}disconnectedCallback(){super.disconnectedCallback(),jt.instance===this&&(jt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pn(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return H`
      <dialog @cancel=${this.onCancel} @keydown=${Dn}>
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
    `}};jt.instance=null;jt.styles=[hn,ot`
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
    `];lr([ee()],jt.prototype,"url",2);lr([ee()],jt.prototype,"token",2);lr([ee()],jt.prototype,"status",2);lr([ee()],jt.prototype,"statusKind",2);jt=lr([dt("datasette-connect-dialog")],jt);const qs=e=>e.replace(/^https?:\/\//,"");async function Xo(e,t,r){if(t.db&&t.table)return[{db:t.db,table:t.table,count:null,hidden:!1,pks:[]}];let s=[];if(t.db)for(const c of await no(e,t.base,t.db))c.hidden||s.push(c);else{const c=await qo(e,t.base);if(c.length===0)return[];let f=c;if(c.length>1){const p=await Ns(c.map($=>({name:$,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${qs(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!p)return null;f=p.map($=>c[$])}for(const p of f)try{for(const $ of await no(e,t.base,p))$.hidden||s.push($)}catch{}}if(s.length===0)return[];const n=new Set(s.map(c=>c.db)).size>1,a=await Ns(s.map(c=>({name:n?`${c.db}/${c.table}`:c.table,size:c.count,detail:n?void 0:c.db})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${qs(t.base)}.`,confirmLabel:r});return a?a.map(c=>s[c]):null}const Yc='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Xc={name:"datasette-source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"easyDBAccess built-ins",optional:!0},kn={maxImportRows:1e4,pageSize:1e3},Gc="https://latest.datasette.io/fixtures/facetable";function Qc(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:Yc,tooltip:"Connect a live, editable Datasette table",onClick:()=>tu(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>su(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:Uc}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const s=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Gc}`,"","Import from Datasette");s&&await io(t,s)}}),e.ui.registerDropHandler(async(t,r)=>{const s=t.dataTransfer?.getData("text/plain")||"";return Jc(s)?(t.preventDefault(),await io(r,s),!0):!1})}async function io(e,t){try{await ri(e,t)}catch(r){let s;r instanceof Kt?s=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:s=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(s,"Datasette import failed")}}function Jc(e){try{const t=jn(e);return!!(t.db&&t.table)}catch{return!1}}async function ri(e,t){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const s=jn(t),a=await Xo(S=>e.backend.fetch(S),s,"Import");if(a===null)return;if(a.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}if(s.db&&s.table&&a.length===1){const S=await oo(e,r,s);(S.hasMore||S.truncated)&&Zc(e,S);return}let c=0,f=0;const p=[],$=[];for(const S of a)try{const k=await oo(e,r,{base:s.base,db:S.db,table:S.table,query:{}});c+=1,f+=k.rowCount,(k.hasMore||k.truncated)&&p.push(`${S.db}/${S.table}`)}catch(k){$.push(`${S.db}/${S.table}: ${k?.message??String(k)}`)}eu(e,{imported:c,totalRows:f,capped:p,failed:$,requested:a.length})}async function oo(e,t,r){const s=`${r.db}/${r.table}`,n=ne=>e.backend.fetch(ne);let a=[],c=null,f=!1;try{const ne=await Uo(n,r);a=ne.columns,c=ne.count,f=ne.typed}catch{}const{rows:p,truncated:$,hasMore:S,pages:k}=await Gr(n,r,{maxRows:kn.maxImportRows,pageSize:kn.pageSize}),z=a.length===0?ti(p):f?a:Wo(a,p),M=Date.now(),q=Wr();e.events.emit("import:before",{source:"datasette",tableId:q}),await e.store.tables.insert({id:q,workspaceId:t,name:s,code:Qo(`${r.db}-${r.table}`),columns:z,view:"table",origin:{type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},updatedAt:M});const te=p.map(ne=>({id:Wr(),tableId:q,data:ne,updatedAt:M}));return await e.store.rows(q).bulkInsert(te),e.events.emit("import:after",{source:"datasette",tableId:q,rowCount:p.length}),{name:s,rowCount:p.length,hasMore:S,truncated:$,pages:k,count:c}}function Zc(e,t){const r=t.count!=null?` of ${t.count}`:"",s=t.name.split("/").pop()??t.name;e.ui.dialogs.toast(`Imported first ${t.rowCount}${r} rows from ${s} — more available (capped at ${kn.maxImportRows}). Live paging arrives with the Phase-2 connector.`,{kind:"warning",title:"Datasette import"})}function eu(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,s=`${t.imported} table${t.imported===1?"":"s"}`;if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${s} (${r}); ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${s} (${r}). ${t.capped.length} capped at ${kn.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${s} (${r}) from Datasette.`,{kind:"success",title:"Datasette import"})}async function tu(e){const t=jt.instance??nu(),r=(n,a)=>e.backend.fetch(n,a),s=await t.open({initialUrl:"https://datasette.io",async onTest(n,a){const c=jn(n),f=await Vo(r,c.base,{token:a||void 0});if(!f.reachable)return`Unreachable: ${f.error??"no response"}`;const p=f.version?` (Datasette ${f.version})`:"";return f.writable?`Reachable${p} — signed in, read-write.`:`Reachable${p} — read-only (no token / not authenticated).`}});if(s)try{await Go(e,s.url,s.token)}catch(n){const a=n instanceof Kt?n.message:n?.message??String(n);await e.ui.dialogs.alert(a,"Connect Datasette failed")}}function nu(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function Go(e,t,r){const s=e.workspaceId();if(!s)throw new Error("datasette-source: no active workspace");const n=jn(t),a=(k,z)=>e.backend.fetch(k,z),c=ni(a,r||void 0),f=await Vo(a,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:Yo(n.base),value:r});let p;try{p=await Xo(c,n,"Connect")}catch(k){const z=k instanceof Kt?k.message:k?.message??String(k);throw new Error(`Couldn't read tables from ${qs(n.base)}: ${z}`)}if(p===null)return;if(p.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}let $=0;for(const k of p)await ru(e,s,n.base,k,f.writable,r),$+=1;const S=f.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${$} live table${$===1?"":"s"} from Datasette (${S}).`,{kind:"success",title:"Connect Datasette"})}async function ru(e,t,r,s,n,a){const c={base:r,db:s.db,table:s.table,query:{}},f=ni((ie,me)=>e.backend.fetch(ie,me),a||void 0);let p=[],$=!1;try{const ie=await Uo(f,c);p=ie.columns,$=ie.typed}catch{}const{rows:S}=await Gr(f,c,{maxRows:50,pageSize:50}),k=p.length===0?ti(S):$?p:Wo(p,S);let z=s.pks;if(!z||z.length===0)try{z=await Mc(f,c)}catch{z=[]}const M=k.map(ie=>z.includes(ie.field)?{...ie,unique:!0,notnull:!0}:ie),q=(await e.store.tables.find()).find(ie=>{const me=ie.source?.config;return ie.workspaceId===t&&ie.source?.type==="datasette"&&me?.base===r&&me?.db===s.db&&me?.table===s.table}),te=q?.id??Wr(),ne={...q??{},id:te,workspaceId:t,name:`${s.db}/${s.table}`,code:Qo(`${s.db}-${s.table}`),columns:M,view:q?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:s.db,table:s.table,pks:z}},updatedAt:Date.now()};return q?await e.store.tables.upsert(ne):await e.store.tables.insert(ne),te}async function su(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const s=e.store.rows(t);typeof s.refresh=="function"&&await s.refresh();const n=await s.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await iu(e,r)}catch(s){const n=s instanceof Kt?s.message:s?.message??String(s);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function iu(e,t){const r=jn(t.origin.url),s=k=>e.backend.fetch(k),{rows:n,hasMore:a,truncated:c}=await Gr(s,r,{maxRows:kn.maxImportRows,pageSize:kn.pageSize}),f=Date.now(),p=e.store.rows(t.id),$=await p.find();await p.bulkRemove($.map(k=>k.id)),await p.bulkInsert(n.map(k=>({id:Wr(),tableId:t.id,data:k,updatedAt:f}))),await e.store.tables.patch(t.id,{updatedAt:f});const S=a||c?` (capped at ${kn.maxImportRows})`:"";e.ui.dialogs.toast(`Refreshed ${n.length} rows from ${r.db}/${r.table}${S}.`,{kind:a||c?"warning":"success",title:"Refresh"})}function Qo(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Wr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const ou=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:Go,importDatasette:ri,init:Qc,meta:Xc},Symbol.toStringTag,{value:"Module"})),au={name:"dump-export",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"easyDBAccess built-ins"};function lu(e){e.ui.registerFooterButton({id:"dump-export:dump",label:"Dump",icon:"archive",tooltip:"Export the current workspace as a JSON dump file",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await Jr(e);await e.backend.saveFile(`workspace-${t}.db.json`,r,"application/json")}})}async function Jr(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),s={workspaceId:t,exportedAt:Date.now(),tables:[]};for(const n of r){const a=await e.store.rows(n.id).find();s.tables.push({name:n.name,columns:n.columns,rows:a.map(c=>c.data),...n.windowGeometry?{windowGeometry:n.windowGeometry}:{},...n.sortColumn?{sortColumn:n.sortColumn,sortAsc:n.sortAsc??!0}:{}})}return JSON.stringify(s,null,2)}const cu=Object.freeze(Object.defineProperty({__proto__:null,init:lu,meta:au,serializeWorkspace:Jr},Symbol.toStringTag,{value:"Module"})),uu={name:"sql-export",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"easyDBAccess built-ins"};function du(e){e.ui.registerFooterButton({id:"sql-export:dump",label:"SQL",icon:"storage",tooltip:"Export the current workspace as a .sql script",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await Jo(e);await e.backend.saveFile(`workspace-${t}.sql`,r,"application/sql")}})}async function Jo(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),s=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const a=await e.store.rows(n.id).find();s.push(fu(n,a),"")}return s.push("COMMIT;",""),s.join(`
`)}function fu(e,t){const r=Us(e.code||e.name||`table_${e.id}`),s=['  "__id" TEXT PRIMARY KEY',...e.columns.map(a=>`  ${hu(a)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,s.join(`,
`),");"];if(t.length>0){const c=["__id",...e.columns.map(f=>f.field)].map(f=>`"${Us(f)}"`).join(", ");for(const f of t){const p=[ao(f.id),...e.columns.map($=>ao(f.data[$.field],$.type))];n.push(`INSERT INTO "${r}" (${c}) VALUES (${p.join(", ")});`)}}return n.join(`
`)}function hu(e){const t=[`"${Us(e.field)}"`,pu(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function pu(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function ao(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=mu(e);return r===null?"NULL":zr(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?zr(e.toISOString()):zr(typeof e=="string"?e:JSON.stringify(e))}function mu(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?lo(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const s=new Date(t);return Number.isFinite(s.getTime())?lo(s):null}return null}function lo(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${s}`}function zr(e){return`'${e.replace(/'/g,"''")}'`}function Us(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const gu=Object.freeze(Object.defineProperty({__proto__:null,init:du,meta:uu,serializeWorkspaceAsSql:Jo},Symbol.toStringTag,{value:"Module"})),bu={name:"gist-sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"easyDBAccess built-ins"},yu="gist:";function wu(e){e.ui.registerFooterButton({id:"gist-sync:push",label:"Push",icon:"cloud_upload",tooltip:"Push the current workspace to a GitHub Gist",onClick:async()=>{try{await $u(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerFooterButton({id:"gist-sync:pull",label:"Pull",icon:"cloud_download",tooltip:"Pull the latest tables from the configured Gist",onClick:async()=>{try{await Cu(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}})}async function Zo(e){const t=e.workspaceId();return`${yu}${t??"default"}`}async function vu(e){const t=await Zo(e),r=await e.store.settings.findOne(t);if(!r)return null;const s=r.value;return!s||!s.token||!s.user?null:{user:s.user,gistId:s.gistId??"",token:s.token}}async function ea(e,t){const r=await Zo(e);await e.store.settings.upsert({key:r,value:t})}function xu(e){const t={};for(const r of e.split(";")){const s=r.indexOf("=");if(s<0)continue;const n=r.slice(0,s).trim(),a=r.slice(s+1).trim();n&&(t[n]=a)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function ta(e){const t=await vu(e);if(t)return t;const r=await e.ui.dialogs.prompt(`Connection string format:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,"","Gist credentials");if(!r)return null;const s=xu(r);return s?(await ea(e,s),s):(await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist credentials"),null)}async function $u(e){const t=await ta(e);if(!t)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=(await e.store.tables.find()).filter(p=>p.workspaceId===r);if(s.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const n={},a=[];for(const p of s){const $=await e.store.rows(p.id).find(),S=JSON.stringify(Eu(p,$),null,2);S.length>1e8&&a.push(`${p.name} (${(S.length/1e6).toFixed(2)} MB)`),n[`${na(p.name)}.table.json`]={content:S}}if(a.length>0&&!await e.ui.dialogs.confirm(`These tables exceed Gist's 100 MB-per-file limit and will be rejected:

${a.join(`
`)}

Push anyway?`,"Gist size warning"))return;n["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1"},null,2)};let c;if(t.gistId){const p=await fetch(`https://api.github.com/gists/${t.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:n,description:`easyDBAccess workspace: ${r}`})});if(!p.ok)throw new Error(await Ws(p));c=await p.json()}else{const p=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:n})});if(!p.ok)throw new Error(await Ws(p));c=await p.json(),t.gistId=c.id,await ea(e,t)}const f=c.html_url??`https://gist.github.com/${t.user}/${c.id}`;e.ui.dialogs.toast(`Pushed ${s.length} table${s.length===1?"":"s"}.  ${f}`,{kind:"success",title:"Gist sync"})}async function Cu(e){const t=await ta(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!s.ok)throw new Error(await Ws(s));const n=await s.json(),a=Object.entries(n.files).filter(([$])=>$.endsWith(".table.json")&&!$.startsWith("_easydb"));if(a.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const c=(await e.store.tables.find()).filter($=>$.workspaceId===r),f=new Map(c.map($=>[$.name,$]));let p=0;for(const[,$]of a){const S=JSON.parse($.content);if(!S.name||!Array.isArray(S.columns))continue;let k;const z=f.get(S.name);if(z){k=await e.store.tables.patch(z.id,{columns:S.columns,updatedAt:Date.now()});const q=e.store.rows(z.id),te=await q.find();await q.bulkRemove(te.map(ne=>ne.id))}else k=await e.store.tables.insert({id:co(),workspaceId:r,name:S.name,code:na(S.name),columns:S.columns,view:"table",updatedAt:Date.now()});const M=(S.rows??[]).map(q=>({id:co(),tableId:k.id,data:q,updatedAt:Date.now()}));await e.store.rows(k.id).bulkInsert(M),p++}e.ui.dialogs.toast(`Pulled ${p} table${p===1?"":"s"} from gist ${t.gistId}.`,{kind:"success",title:"Gist sync"})}function Eu(e,t){return{name:e.name,columns:e.columns,rows:t.map(r=>r.data)}}async function Ws(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function na(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function co(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const ku=Object.freeze(Object.defineProperty({__proto__:null,init:wu,meta:bu},Symbol.toStringTag,{value:"Module"})),ra="server-sync:url";function sa(e){return`server-sync:etag:${e}`}async function ia(e){const r=(await e.store.settings.findOne(ra))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function Su(e,t){await e.store.settings.upsert({key:ra,value:t.replace(/\/+$/,"")})}async function oa(e,t){const s=(await e.store.settings.findOne(sa(t)))?.value;return typeof s=="string"?s:null}async function Pn(e,t,r){await e.store.settings.upsert({key:sa(t),value:r})}function Zr(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function uo(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function aa(e,t,r){const s=Xr(r,t),n=(await e.store.tables.find()).filter(c=>c.workspaceId===t);for(const c of n){const f=e.store.rows(c.id),p=await f.find();await f.bulkRemove(p.map($=>$.id)),await e.store.tables.remove(c.id)}let a=0;for(const c of s){const f=fo(),p=await e.store.tables.insert({id:f,workspaceId:t,name:c.name,code:_u(c.name),columns:c.columns,view:"table",...c.windowGeometry?{windowGeometry:c.windowGeometry}:{},...c.sortColumn?{sortColumn:c.sortColumn,sortAsc:c.sortAsc??!0}:{},updatedAt:Date.now()}),$=c.rows.map(S=>({id:fo(),tableId:p.id,data:S,updatedAt:Date.now()}));await e.store.rows(p.id).bulkInsert($),a++}return a}function _u(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function fo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Pu={name:"server-sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"easyDBAccess built-ins"};function Au(e){e.ui.registerFooterButton({id:"server-sync:push",label:"Sync ↑",icon:"cloud_sync",tooltip:"Push this workspace to the configured server",onClick:async()=>{try{await Tu(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Server sync"})}}}),e.ui.registerFooterButton({id:"server-sync:pull",label:"Sync ↓",icon:"cloud_sync",tooltip:"Pull this workspace from the configured server",onClick:async()=>{try{await Du(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Server sync"})}}})}async function Tu(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await la(e);if(!r)return;const s=await Jr(e),n=await oa(e,t),a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);let c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:a,body:s});if(c.status===412){const p=await c.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){p.currentEtag&&await Pn(e,t,p.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:s})}if(!c.ok)throw new Error(await ca(c));const f=Zr(c.headers.get("ETag"));f&&await Pn(e,t,f),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function Du(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await la(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await ca(n));const a=Zr(n.headers.get("ETag")),c=await n.json(),f=await aa(e,t,c);a&&await Pn(e,t,a),e.ui.dialogs.toast(`Pulled ${f} table${f===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function la(e){const t=await ia(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await Su(e,r),r.replace(/\/+$/,"")}async function ca(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const ju=Object.freeze(Object.defineProperty({__proto__:null,init:Au,meta:Pu},Symbol.toStringTag,{value:"Module"})),Fu={name:"new-table",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"easyDBAccess built-ins"};function Ou(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const Ru=Object.freeze(Object.defineProperty({__proto__:null,init:Ou,meta:Fu},Symbol.toStringTag,{value:"Module"})),zu={name:"plugin-manager-button",version:"0.1.0",description:"Registers a footer button that opens the Plugin Manager dialog.",author:"easyDBAccess built-ins"};function Iu(e){e.ui.registerFooterButton({id:"plugin-manager:open",label:"Plugins",icon:"extension",tooltip:"Add, disable, or remove plugins",onClick:()=>e.ui.openPluginManager()})}const Lu=Object.freeze(Object.defineProperty({__proto__:null,init:Iu,meta:zu},Symbol.toStringTag,{value:"Module"})),Bu={name:"core-renderers",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"easyDBAccess built-ins"};function Mu(e){customElements.get("cell-date")||customElements.define("cell-date",Nu),customElements.get("cell-datetime")||customElements.define("cell-datetime",qu),customElements.get("cell-boolean")||customElements.define("cell-boolean",Uu),customElements.get("cell-script")||customElements.define("cell-script",Hu),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class Nu extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="date",t.value=Vu(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class qu extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="datetime-local",t.value=Yu(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Uu extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="checkbox",t.checked=Wu(this._value),t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Wu(e){return e===!0||e==="true"||e===1||e==="1"}class Hu extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const a=document.createElement("span");a.textContent="(no script)",a.style.cssText="color:#9ca3af;font-style:italic",this.append(a);return}let r;try{r=Ku(t)}catch(a){this.append(js("compile error",a));return}let s;try{s=r(this._row)}catch(a){this.append(js("runtime error",a));return}if(typeof s!="string"){this.append(js("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=s,this.append(n)}}const ho=new Map;function Ku(e){const t=ho.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return ho.set(e,r),r}function js(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const s=t instanceof Error?t.message:String(t);r.title=s}return r}function Vu(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function Yu(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const s=new Date(t);if(Number.isNaN(s.getTime()))return"";const n=s.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const Xu=Object.freeze(Object.defineProperty({__proto__:null,init:Mu,meta:Bu},Symbol.toStringTag,{value:"Module"})),Gu={name:"cell-color",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"easyDBAccess built-ins"};function Qu(e){customElements.get("cell-color")||customElements.define("cell-color",Ju),e.ui.registerCellRenderer("color","cell-color")}class Ju extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,s){this.value=s}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Zu=Object.freeze(Object.defineProperty({__proto__:null,init:Qu,meta:Gu},Symbol.toStringTag,{value:"Module"})),ed={name:"cell-image",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"easyDBAccess built-ins"};function td(e){customElements.get("cell-image")||customElements.define("cell-image",nd),e.ui.registerCellRenderer("image","cell-image")}class nd extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const s=document.createElement("img");s.src=this._value,s.alt="",s.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(s)}else{const s=document.createElement("span");s.style.color="#9ca3af",s.textContent="no image",t.append(s);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const s=new FileReader;s.onload=()=>this.commit(String(s.result)),s.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const rd=Object.freeze(Object.defineProperty({__proto__:null,init:td,meta:ed},Symbol.toStringTag,{value:"Module"})),sd={name:"cell-link",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"easyDBAccess built-ins"};function id(e){customElements.get("cell-link")||customElements.define("cell-link",od),e.ui.registerCellRenderer("link","cell-link")}class od extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:ad(t),s=!this._editing&&!r?ld(t):null,n=!this._editing&&!r&&!s?cd(t):null;if(r||s||n){const a=document.createElement("span");a.style.cssText="display:inline-flex;align-items:center;gap:0.25rem;width:100%";const c=document.createElement("a");c.href=r?t:s?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(c.target="_blank",c.rel="noopener noreferrer"),c.textContent=t,c.style.cssText="color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",c.title=r?`Open ${t}`:s?`Email ${t}`:`Call ${t}`;const f=document.createElement("button");f.type="button",f.title="Edit",f.textContent="✎",f.style.cssText="background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",f.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),this._editing=!0,this.render()}),a.append(c,f),this.append(a)}else{const a=document.createElement("input");a.type="text",a.value=t,a.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",a.addEventListener("change",()=>this.commit(a.value)),a.addEventListener("keydown",c=>{c.key==="Enter"?(c.preventDefault(),this.commit(a.value)):c.key==="Escape"&&(this._editing=!1,this.render())}),this.append(a),this._editing&&setTimeout(()=>{a.focus(),a.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function ad(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function ld(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function cd(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const s=/[ ()\-.]/.test(t),n=t.startsWith("+");return!s&&!n&&r.length<10?null:t}const ud=Object.freeze(Object.defineProperty({__proto__:null,init:id,meta:sd},Symbol.toStringTag,{value:"Module"}));var dd=Object.defineProperty,fd=Object.getOwnPropertyDescriptor,mn=(e,t,r,s)=>{for(var n=s>1?void 0:s?fd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&dd(t,r,n),n};const hd="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",pd='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',po=[{label:"Northwind — sample database (JSON dump)",url:hd,kind:"json"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — global power plants",url:"https://global-power-plants.datasettes.com/global-power-plants/global-power-plants",kind:"datasette"}],md={name:"import-data",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"easyDBAccess built-ins",optional:!0};function gd(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:pd,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>bd(e)})}async function bd(e){const r=await(gt.instance??yd()).open({async listDatabases(a){const c=jn(a);return qo(f=>e.backend.fetch(f),c.base)}});if(!r)return;const{url:s,kind:n}=r;try{if(n==="datasette")await ri(e,s);else{const a=await e.backend.fetch(s);if(!a.ok)throw new Error(`HTTP ${a.status} ${a.statusText}`);const c=await a.text();await ei(e,c,go(s)),e.ui.dialogs.toast(`Imported ${go(s)}.`,{kind:"success",title:"Import"})}}catch(a){e.ui.dialogs.toast(`Could not import ${s}: ${a.message}`,{kind:"error",title:"Import"})}}function yd(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function wd(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),s=[...t.searchParams.keys()].some(a=>a.startsWith("_")),n=r.includes("datasette")||s;return/\.(json|csv)$/i.test(t.pathname)&&!s?"json":n?"datasette":"json"}catch{return"json"}}function mo(e,t){if(t!=="datasette"||!e)return!1;try{const r=jn(e);return!r.db&&!r.table}catch{return!1}}function go(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}let gt=class extends nt{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.resolvedKind,s=r==="datasette"&&this.selectedDb&&mo(t,r)?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:s,kind:r})}}get resolvedKind(){return this.kind==="auto"?wd(this.url.trim()):this.kind}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),gt.instance=this}disconnectedCallback(){super.disconnectedCallback(),gt.instance===this&&(gt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pn(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=po[t];r&&(this.url=r.url,this.kind=r.kind)}renderDbPicker(){return!this.listDatabases||!mo(this.url.trim(),this.resolvedKind)?ze:H`
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
      ${this.dbError?H`<p class="hint error">${this.dbError}</p>`:ze}
    `}render(){return H`
      <dialog @cancel=${this.onCancel} @keydown=${Dn}>
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
              <select .value=${String(this.presetIdx)} @change=${e=>this.onPresetChange(e)}>
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
              several tables, or a Datasette database/instance URL — let you choose which tables
              to import. Datasette tables import a read-only snapshot (capped at 10,000 rows each).
            </p>
          </div>
        </form>
      </dialog>
      ${ze}
    `}};gt.instance=null;gt.styles=[hn,ot`
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
    `];mn([ee()],gt.prototype,"url",2);mn([ee()],gt.prototype,"kind",2);mn([ee()],gt.prototype,"presetIdx",2);mn([ee()],gt.prototype,"dbList",2);mn([ee()],gt.prototype,"dbLoading",2);mn([ee()],gt.prototype,"dbError",2);mn([ee()],gt.prototype,"selectedDb",2);gt=mn([dt("import-dialog")],gt);const vd=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return gt},init:gd,meta:md},Symbol.toStringTag,{value:"Module"})),xd={name:"auto-sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"easyDBAccess built-ins",optional:!0},$d=6e4;let bo=null,Hs=!1;const Fs=new Map;function Cd(e){bo===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(bo=setInterval(()=>{ua(e)},$d)))}async function ua(e){if(Hs)return;const t=e.workspaceId();if(!t)return;const r=await ia(e);if(r)try{await Ed(e,r,t)}catch(s){console.warn("[auto-sync]",s)}}async function Ed(e,t,r){const s=await Jr(e),n=await oa(e,r),a=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(a.status===404){await yo(e,t,r,s,null);return}if(!a.ok)return;const c=Zr(a.headers.get("ETag")),f=await a.text();if(uo(s)===uo(f)){c&&c!==n&&await Pn(e,r,c);return}if(c&&c===n){await yo(e,t,r,s,n);return}if(!(c&&Fs.get(r)===c)){Hs=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const $=JSON.parse(f),S=await aa(e,r,$);c&&await Pn(e,r,c),Fs.delete(r),e.ui.dialogs.toast(`Pulled ${S} table${S===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else c&&Fs.set(r,c)}finally{Hs=!1}}}async function yo(e,t,r,s,n){const a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);const c=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:a,body:s});if(c.ok){const f=Zr(c.headers.get("ETag"));f&&await Pn(e,r,f);return}if(c.status===412){const f=await c.json().catch(()=>({}));f.currentEtag&&await Pn(e,r,f.currentEtag)}}const da=Object.freeze(Object.defineProperty({__proto__:null,load:Cd,meta:xd,tick:ua},Symbol.toStringTag,{value:"Module"})),fa=[Ru,ic,_c,ou,uc,cu,gu,ku,ju,Lu,Xu,Zu,rd,ud,vd,da],kd=fa;function Ks(e){return`builtin:${e}`}async function Sd(e){const t=[];for(const r of fa)if(!await _d(e,r)){t.push(r);try{await r.init?.(e)}catch(s){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"init",error:s})}}return async()=>{for(const r of t)try{await r.load?.(e)}catch(s){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"load",error:s})}}}async function _d(e,t){if(!t.meta?.optional)return!1;const r=t.meta.name;return r?(await e.store.plugins.findOne(Ks(r)))?.enabled===!1:!1}async function Pd(e){const t=e.workspaceId();if(!t)return async()=>{};const s=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const a of s)try{const c=await e.store.plugins.findOne(a);if(c&&c.enabled===!1)continue;let f=c?.cachedBody??"";if(f)Ad(e,a,f);else{try{f=await ha(a)}catch(S){await e.store.plugins.upsert({url:a,enabled:c?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${S.message}`}),e.events.emit("plugin:error",{url:a,phase:"fetch",error:S});continue}await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),cachedBody:f})}const p=new Blob([f],{type:"text/javascript"}),$=URL.createObjectURL(p);try{const S=await import($);await S.init?.(e),n.push({url:a,mod:S})}finally{setTimeout(()=>URL.revokeObjectURL($),5e3)}}catch(c){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`init: ${c.message}`}),e.events.emit("plugin:error",{url:a,phase:"init",error:c})}return async()=>{for(const{url:a,mod:c}of n)try{await c.load?.(e)}catch(f){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`load: ${f.message}`}),e.events.emit("plugin:error",{url:a,phase:"load",error:f})}}}async function ha(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function Ad(e,t,r){return(async()=>{try{const s=await ha(t);if(s===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:s})}catch{}})()}let Os=null;function je(){return Os||(Os=Td()),Os}async function Td(){const e=await _l(),t=Al(e),r=Dl(),s=Ll(),n=new Map;t.tables.subscribe(te=>{n.clear();for(const ne of te)n.set(ne.id,ne)});const a={...t.tables,insert:te=>(n.set(te.id,te),t.tables.insert(te)),upsert:te=>(n.set(te.id,te),t.tables.upsert(te))};let c=null;const f={get backend(){if(!c)throw new Error("[host] row-source ctx used before app init completed");return c.backend},events:r,settings:t.settings,workspaceId:()=>k},p=Tl({base:{...t,tables:a},providers:s.rowSources,tableById:te=>n.get(te),ctx:f}),$=Dd(),S=await p.workspaces.find();let k;if($){const te=jd($),ne=S.find(ie=>ie.id===te||ie.name===$);ne?k=ne.id:k=(await p.workspaces.insert({id:te,name:$,createdAt:Date.now(),pluginUrls:[]})).id}else S.length===0?k=(await p.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id:k=S[0].id;const z=Nl({store:p,events:r,registries:s,workspaceId:()=>k});c=z,r.on("import:after",({source:te,tableId:ne,rowCount:ie})=>{z.store.tables.findOne(ne).then(me=>{z.ui.dialogs.toast(`Imported ${ie} row${ie===1?"":"s"} into "${me?.name??ne}".`,{kind:"success",title:te.toUpperCase()+" import"})})}),r.on("plugin:error",({url:te,phase:ne,error:ie})=>{z.ui.dialogs.toast(`[${ne}] ${ie?.message??String(ie)}`,{kind:"error",title:`Plugin: ${te}`})});const M=await Sd(z),q=await Pd(z);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:k}),await M(),await q()}),{store:p,events:r,workspaceId:k,registries:s,api:z}}function Dd(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}function jd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var Fd=Object.defineProperty,Od=Object.getOwnPropertyDescriptor,es=(e,t,r,s)=>{for(var n=s>1?void 0:s?Od(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Fd(t,r,n),n};let qn=class extends nt{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pn(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=Yr(this.text)}catch(c){this.errorMsg=`Couldn't parse the CSV: ${c.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const s=await je(),n=crypto.randomUUID();await s.store.tables.insert({id:n,workspaceId:s.workspaceId,name:t,code:Rd(t),columns:r.columns,view:"table",updatedAt:Date.now()});const a=r.rows.map(c=>({id:crypto.randomUUID(),tableId:n,data:c,updatedAt:Date.now()}));await s.store.rows(n).bulkInsert(a),s.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return H`
      <dialog @cancel=${this.close} @keydown=${Dn}>
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
    `}};qn.styles=[hn,ot`
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
    `];es([ee()],qn.prototype,"name",2);es([ee()],qn.prototype,"text",2);es([ee()],qn.prototype,"errorMsg",2);qn=es([dt("csv-paste-dialog")],qn);function Rd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var zd=Object.defineProperty,Id=Object.getOwnPropertyDescriptor,si=(e,t,r,s)=>{for(var n=s>1?void 0:s?Id(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&zd(t,r,n),n};const Ld=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let Vt=class extends nt{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),Vt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Vt.instance===this&&(Vt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pn(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:Ld,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return H`
      <dialog @cancel=${this.onCancel} @keydown=${Dn}>
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
    `}};Vt.instance=null;Vt.styles=[hn,ot`
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
    `];si([ee()],Vt.prototype,"text",2);si([ee()],Vt.prototype,"columnLabel",2);Vt=si([dt("script-editor-dialog")],Vt);var Bd=Object.defineProperty,Md=Object.getOwnPropertyDescriptor,Mt=(e,t,r,s)=>{for(var n=s>1?void 0:s?Md(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Bd(t,r,n),n};const Nd=["string","number","boolean","date","datetime"];let Pt=class extends nt{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.columns=[],this.errorMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pn(this.dialogEl,e)}async open(e){this.errorMsg="";const t=await je();if(this.rendererOptions=[...t.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=t.events.on("app:ready",()=>{this.rendererOptions=[...t.registries.cellRenderers.keys()].sort()}),e){const r=await je(),s=await r.store.tables.findOne(e);if(!s)return;this.mode="edit",this.editTableId=e,this.name=s.name,this.columns=s.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,origField:a.field}));const n=await r.store.rows(e).find();this.previewRows=n.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const s=[...this.columns],[n]=s.splice(e,1);s.splice(r,0,n),this.columns=s}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const s=r.getBoundingClientRect(),n=e.clientY<s.top+s.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,s=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!s)return;const n=[...this.columns],[a]=n.splice(r,1);let c=t+(r<t?-1:0);s==="after"&&(c+=1),n.splice(c,0,a),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,s)=>s===e?{...r,...t}:r)}async editScript(e){const t=Vt.instance;if(!t)return;const r=this.columns[e];if(!r)return;const s=await t.open(r.script??"",r.label||r.field);s!==null&&this.patchColumn(e,{script:s.trim()?s:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const r=new Set;for(const a of this.columns){const c=a.field.trim();if(!c){this.errorMsg="Column field names cannot be empty.";return}if(r.has(c)){this.errorMsg=`Duplicate column field: ${c}`;return}r.add(c)}const s=await je(),n=this.columns.map(a=>{const c={field:a.field.trim(),label:a.label.trim()||a.field.trim(),type:a.type};return a.renderer&&(c.renderer=a.renderer),a.script&&(c.script=a.script),a.max!=null&&a.max>0&&(c.max=a.max),a.unique&&(c.unique=!0),a.notnull&&(c.notnull=!0),a.hidden&&(c.hidden=!0),c});if(this.mode==="edit"&&this.editTableId){const a=this.editTableId,c=await s.store.tables.findOne(a),f=new Map((c?.columns??[]).map($=>[$.field,$])),p=n.filter($=>{const S=f.get($.field);return $.unique&&!S?.unique||$.notnull&&!S?.notnull||$.max&&$.max>0&&$.max!==S?.max});if(p.length>0){const $=await s.store.rows(a).find(),S=Wd(p,$);if(S.length>0){this.errorMsg=`Cannot save: ${S.length} existing ${S.length===1?"row violates":"rows violate"} the new constraints.
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
      <dialog @cancel=${this.close} @keydown=${Dn}>
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
                    @change=${f=>{const p=f.target.value;this.patchColumn(s,{renderer:p||void 0})}}
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
                    @input=${f=>{const p=f.target.value;this.patchColumn(s,{max:p===""?void 0:Number(p)})}}
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
    `}};Pt.styles=[en,hn,ot`
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
  `];Mt([ee()],Pt.prototype,"mode",2);Mt([ee()],Pt.prototype,"editTableId",2);Mt([ee()],Pt.prototype,"name",2);Mt([ee()],Pt.prototype,"columns",2);Mt([ee()],Pt.prototype,"errorMsg",2);Mt([ee()],Pt.prototype,"dragSrcIdx",2);Mt([ee()],Pt.prototype,"dropTargetIdx",2);Mt([ee()],Pt.prototype,"dropEdge",2);Mt([ee()],Pt.prototype,"previewRows",2);Mt([ee()],Pt.prototype,"rendererOptions",2);Pt=Mt([dt("new-table-dialog")],Pt);function qd(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function Ud(e,t,r){const s=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&s)return`${e.label}: empty`;if(s)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!s){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function Wd(e,t){const r=[];for(const s of e)if(s.notnull&&t.forEach((n,a)=>{const c=n.data[s.field];(c==null||typeof c=="string"&&c.trim()==="")&&r.push(`Row ${a+1}: ${s.label} is empty.`)}),s.max!=null&&s.max>0&&t.forEach((n,a)=>{const c=n.data[s.field];typeof c=="string"&&c.length>s.max?r.push(`Row ${a+1}: ${s.label} length ${c.length} > max ${s.max}.`):typeof c=="number"&&c>s.max&&r.push(`Row ${a+1}: ${s.label} value ${c} > max ${s.max}.`)}),s.unique){const n=new Map;t.forEach((a,c)=>{const f=a.data[s.field];f==null||f===""||(n.has(f)?r.push(`Row ${c+1}: ${s.label} duplicates row ${n.get(f)+1} ("${String(f)}").`):n.set(f,c))})}return r}function Hd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Kd(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Vd=Object.defineProperty,Yd=Object.getOwnPropertyDescriptor,Ft=(e,t,r,s)=>{for(var n=s>1?void 0:s?Yd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Vd(t,r,n),n};let xt=class extends nt{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.builtinNames=[],this.optionalBuiltins=[],this.dirtyBuiltins=!1,this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pn(this.dialogEl,e)}async open(){const e=await je(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(a=>[a.url,a]));const s=[],n=[];for(const a of kd){const c=a.meta?.name;if(c)if(a.meta?.optional){const f=this.records.get(Ks(c));n.push({name:c,...a.meta?.description?{description:a.meta.description}:{},...a.meta?.author?{author:a.meta.author}:{},enabled:f?.enabled!==!1})}else s.push(c)}this.builtinNames=s,this.optionalBuiltins=n,this.dirtyBuiltins=!1,this.addUrl="",await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(),this.refreshServerRegistry()}async refreshCatalog(){const e=new URL("/plugins/catalog.json",location.origin).toString();try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),s=Array.isArray(r.plugins)?r.plugins:[];this.catalog=s.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await je()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const a=await fetch(n,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const c=await a.json(),f=Array.isArray(c.plugins)?c.plugins:[];this.serverCatalog=f.map(p=>({...p,absUrl:new URL(p.url,n).toString()})),this.serverCatalogError=null}catch(a){this.serverCatalog=[],this.serverCatalogError=a.message}}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await je()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await je();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await je(),s=this.records.get(e);await r.store.plugins.upsert({...s??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...s,url:e,enabled:t,lastFetched:s?.lastFetched??0}))}async removePlugin(e){const t=await je();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await je(),s=Ks(e),n=this.records.get(s);await r.store.plugins.upsert({...n??{url:s,lastFetched:0},url:s,enabled:t,lastFetched:n?.lastFetched??0}),this.optionalBuiltins=this.optionalBuiltins.map(a=>a.name===e?{...a,enabled:t}:a),this.dirtyBuiltins=!0}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await je();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const s=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:s});const n=new Blob([s],{type:"text/javascript"}),a=URL.createObjectURL(n);try{const f=await import(a);await f.init?.(t.api),await f.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(a),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const c=await t.store.plugins.find();this.records=new Map(c.map(f=>[f.url,f])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}render(){return H`
      <dialog @cancel=${this.close} @keydown=${Dn}>
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
    `}};xt.styles=[en,hn,ot`
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
    `];Ft([ee()],xt.prototype,"urls",2);Ft([ee()],xt.prototype,"records",2);Ft([ee()],xt.prototype,"addUrl",2);Ft([ee()],xt.prototype,"builtinNames",2);Ft([ee()],xt.prototype,"optionalBuiltins",2);Ft([ee()],xt.prototype,"dirtyBuiltins",2);Ft([ee()],xt.prototype,"catalog",2);Ft([ee()],xt.prototype,"catalogError",2);Ft([ee()],xt.prototype,"serverCatalog",2);Ft([ee()],xt.prototype,"serverCatalogError",2);Ft([ee()],xt.prototype,"installing",2);xt=Ft([dt("plugin-manager-dialog")],xt);/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let F={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&F.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let s=arguments[r];if(s==null)continue;s=Object(s);let n=Object.keys(Object(s));for(let a=0,c=n.length;a<c;a++){let f=n[a],p=Object.getOwnPropertyDescriptor(s,f);p!==void 0&&p.enumerable&&(t[f]=s[f])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,s=new Array(r);r--;)s[r]=[t[r],e[t[r]]];return s}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),s=document.createDocumentFragment();r.forEach(function(n){let a=n instanceof Node;s.appendChild(a?n:document.createTextNode(String(n)))}),this.appendChild(s)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,s=this;do for(r=t.length;--r>=0&&t.item(r)!==s;);while(r<0&&(s=s.parentElement));return s}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let s=document.createEvent("CustomEvent");return s.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),s}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),s=r.length>>>0;if(s===0)return!1;let n=t|0,a=Math.max(n>=0?n:s-Math.abs(n),0);function c(f,p){return f===p||typeof f=="number"&&typeof p=="number"&&isNaN(f)&&isNaN(p)}for(;a<s;){if(c(r[a],e))return!0;a++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>F.modifier=e),document.addEventListener("keyup",()=>F.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const s=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(s===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(s),a=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-a)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(s===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(s),a=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-a)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((s,n)=>{(s.startsWith("--")||s.startsWith("var"))&&(r[n]=F.getCssVariableValue(s))}),r.forEach(s=>{F.colorNames[s]?t[2]="#"+F.colorNames[s]:s.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=s:s.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=s:t[2]=s}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),s=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return s&&(t.size=s[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let s=e.indexOf(")");t=e.slice(0,s+1).replace(/\s+/g,""),t.startsWith("var")&&(t=F.getCssVariableValue(t)),r=e.slice(s+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let s=e.indexOf(" ");s>0?(t=e.slice(0,s+1).replace(/\s+/g,""),r=e.slice(s+1,e.length).trim()):t=e,t.startsWith("--")&&(t=F.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let s=r.indexOf(" ");r=r.slice(s+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:F.colorNames[r]?r="#"+F.colorNames[r]:r.match(/^(--|var)/)?r=F.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,s,n,a,c,f,p,$,S,k={};const z=/^#?([\da-f]{3}|[\da-f]{6})$/gi,M=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,q=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,te=this.colorNames;return te[t]&&(t=te[t]),t.match(z)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),s=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),k.rgb={r:parseInt(r,16),g:parseInt(s,16),b:parseInt(n,16)},k.hex=`#${r}${s}${n}`):(k.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},k.hex=`#${t}`),S=this.rgbToHsl(k.rgb.r,k.rgb.g,k.rgb.b),k.hsl=S,k.rgb.css=`rgb(${k.rgb.r},${k.rgb.g},${k.rgb.b})`):t.match(M)?(p=M.exec(t),k.rgb={css:t,r:p[1],g:p[2],b:p[3]},k.hex=this.rgbToHex(p[1],p[2],p[3]),S=this.rgbToHsl(p[1],p[2],p[3]),k.hsl=S):t.match(q)?(p=q.exec(t),a=p[1]/360,c=p[2].slice(0,p[2].length-1)/100,f=p[3].slice(0,p[3].length-1)/100,$=this.hslToRgb(a,c,f),k.rgb={css:`rgb(${$[0]},${$[1]},${$[2]})`,r:$[0],g:$[1],b:$[2]},k.hex=this.rgbToHex(k.rgb.r,k.rgb.g,k.rgb.b),k.hsl={css:`hsl(${p[1]},${p[2]},${p[3]})`,h:p[1],s:p[2],l:p[3]}):(k.hex="#f5f5f5",k.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},k.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),k},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),s=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),a=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(s)<=t?"#ffffff":"#000000",f=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",p=this.lighten(e,this.colorFilledDark),$=this.perceivedBrightness(p)<=t?"#ffffff":"#000000";return[r.hsl.css,s,n,a,c,f,p,$]},darken(e,t){const r=this.color(e).hsl,s=parseFloat(r.l),n=Math.round(s-s*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,s=parseFloat(r.l),n=Math.round(s+(100-s)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let s,n,a;if(t===0)s=n=a=r;else{let c=($,S,k)=>(k<0&&(k+=1),k>1&&(k-=1),k<.16666666666666666?$+(S-$)*6*k:k<.5?S:k<.6666666666666666?$+(S-$)*(.6666666666666666-k)*6:$),f=r<.5?r*(1+t):r+t-r*t,p=2*r-f;s=c(p,f,e+1/3),n=c(p,f,e),a=c(p,f,e-1/3)}return[Math.round(s*255),Math.round(n*255),Math.round(a*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let s=Math.max(e,t,r),n=Math.min(e,t,r),a,c,f=(s+n)/2;if(s===n)a=c=0;else{let p=s-n;switch(c=f>.5?p/(2-s-n):p/(s+n),s){case e:a=(t-r)/p+(t<r?6:0);break;case t:a=(r-e)/p+2;break;case r:a=(e-t)/p+4;break}a/=6}return a=Math.round(a*360),c=Math.round(c*100)+"%",f=Math.round(f*100)+"%",{css:"hsl("+a+","+c+","+f+")",h:a,s:c,l:f}},rgbToHex(e,t,r){let s=Number(e).toString(16),n=Number(t).toString(16),a=Number(r).toString(16);return s.length===1&&(s=`0${s}`),n.length===1&&(n=`0${n}`),a.length===1&&(a=`0${a}`),`#${s}${n}${a}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),s=r.filter(c=>c.match(/^(down|right|up|left)$/i));s.length&&(t.autoposition=s[0],r.splice(r.indexOf(s[0]),1));let n=r.filter(c=>c.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let a=r.filter(c=>c.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return a.length&&(t.offsetX=a[0].match(/^[+-]?\d*\.?\d+$/i)?`${a[0]}px`:a[0],a[1]?t.offsetY=a[1].match(/^[+-]?\d*\.?\d+$/i)?`${a[1]}px`:a[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(a[0]),1),a[1]&&r.splice(r.indexOf(a[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(te=>{typeof t[te]=="function"&&(t[te]=t[te].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,s=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),a=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},c=r==="window"?{x:1,y:1}:{x:a.width/r.offsetWidth,y:a.height/r.offsetHeight},f=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);a.width-=(parseFloat(f.borderLeftWidth)+parseFloat(f.borderRightWidth))*c.x,a.height-=(parseFloat(f.borderTopWidth)+parseFloat(f.borderBottomWidth))*c.y;let p;t.of?typeof t.of=="string"?p=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?p=t.of[0].getBoundingClientRect():p=t.of.getBoundingClientRect():p=a;let $=this.getScrollbarWidth(document.body),S=this.getScrollbarWidth(e.parentElement),k="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?k=p.left-a.left-parseFloat(f.borderLeftWidth)+"px":k="0px":t.at.startsWith("center")?t.of?k=p.left-a.left-parseFloat(f.borderLeftWidth)+p.width/2+"px":k=a.width/2+"px":t.at.startsWith("right-")&&(t.of?k=p.left-a.left-parseFloat(f.borderLeftWidth)+p.width+"px":k=a.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?k=p.left-a.left-parseFloat(f.borderLeftWidth)-s.width/2+"px":k=-s.width/2+"px":t.at.startsWith("center")?t.of?k=p.left-a.left-parseFloat(f.borderLeftWidth)-(s.width-p.width)/2+"px":k=a.width/2-s.width/2+"px":t.at.startsWith("right-")&&(t.of?k=p.left-a.left-parseFloat(f.borderLeftWidth)+(p.width-s.width/2)+"px":k=a.width-s.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?k=p.left-a.left-parseFloat(f.borderLeftWidth)-s.width+"px":k=-s.width+"px":t.at.startsWith("center")?t.of?k=p.left-a.left-parseFloat(f.borderLeftWidth)-s.width+p.width/2+"px":k=a.width/2-s.width+"px":t.at.startsWith("right-")&&(t.of?k=p.left-a.left-parseFloat(f.borderLeftWidth)+p.width-s.width+"px":k=a.width-s.width+"px",r!=="window"&&(k=parseFloat(k)-S.y+"px")));let z="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?z=p.top-a.top-parseFloat(f.borderTopWidth)+"px":z="0px":t.at.endsWith("center")?t.of?z=p.top-a.top-parseFloat(f.borderTopWidth)+p.height/2+"px":z=a.height/2+"px":t.at.endsWith("-bottom")&&(t.of?z=p.top-a.top-parseFloat(f.borderTopWidth)+p.height+"px":z=a.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?z=p.top-a.top-parseFloat(f.borderTopWidth)-s.height/2+"px":z=-s.height/2+"px":t.at.endsWith("center")?t.of?z=p.top-a.top-parseFloat(f.borderTopWidth)-s.height/2+p.height/2+"px":z=a.height/2-s.height/2+"px":t.at.endsWith("-bottom")&&(t.of?z=p.top-a.top-parseFloat(f.borderTopWidth)-s.height/2+p.height+"px":z=a.height-s.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?z=p.top-a.top-parseFloat(f.borderTopWidth)-s.height+"px":z=-s.height+"px":t.at.endsWith("center")?t.of?z=p.top-a.top-parseFloat(f.borderTopWidth)-s.height+p.height/2+"px":z=a.height/2-s.height+"px":t.at.endsWith("-bottom")&&(t.of?z=p.top-a.top-parseFloat(f.borderTopWidth)-s.height+p.height+"px":z=a.height-s.height+"px",r!=="window"?z=parseFloat(z)-S.x+"px":z=parseFloat(z)-$.x+"px")),e.style.left=c.x===1?k:parseFloat(k)/c.x+"px",e.style.top=c.y===1?z:parseFloat(z)/c.y+"px";let M=getComputedStyle(e),q={left:M.left,top:M.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(q=this.applyPositionAutopos(e,q,t)),(t.offsetX||t.offsetY)&&(q=this.applyPositionOffset(e,q,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(q=this.applyPositionMinMax(e,q,t)),t.modify&&(q=this.applyPositionModify(e,q,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const s=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(s);const n=Array.prototype.slice.call(document.querySelectorAll(`.${s}`)),a=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((c,f)=>{f>0&&f<=a&&(t.top=parseFloat(t.top)+n[--f].getBoundingClientRect().height+F.autopositionSpacing+"px")});break;case"up":n.forEach((c,f)=>{f>0&&f<=a&&(t.top=parseFloat(t.top)-n[--f].getBoundingClientRect().height-F.autopositionSpacing+"px")});break;case"right":n.forEach((c,f)=>{f>0&&f<=a&&(t.left=parseFloat(t.left)+n[--f].getBoundingClientRect().width+F.autopositionSpacing+"px")});break;case"left":n.forEach((c,f)=>{f>0&&f<=a&&(t.left=parseFloat(t.left)-n[--f].getBoundingClientRect().width-F.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const s=getComputedStyle(e);return{left:s.left,top:s.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const s=getComputedStyle(e);return{left:s.left,top:s.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const s=getComputedStyle(e);return{left:s.left,top:s.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(s=>{e.classList.contains(s)&&(t=s)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),s=document.createElement("button");s.className="btn btn"+t.color.slice(r),document.body.appendChild(s),t.color=getComputedStyle(s).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(s),s=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},s=typeof t=="object"?Object.assign(r,t):r,n=s.bgPanel,a=s.bgContent,c=s.colorHeader,f=s.colorContent,p=s.bgFooter,$=s.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[c]&&(c="#"+this.colorNames[c]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(z=>e.querySelector(z).style.color=this.getCssVariableValue(c)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(z=>z.style.color=this.getCssVariableValue(c)),this.colorNames[a]?e.content.style.background="#"+this.colorNames[a]:e.content.style.background=this.getCssVariableValue(a),this.colorNames[f]?e.content.style.color="#"+this.colorNames[f]:e.content.style.color=this.getCssVariableValue(f),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(f)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[p]?e.footer.style.background="#"+this.colorNames[p]:e.footer.style.background=this.getCssVariableValue(p),this.colorNames[$]?e.footer.style.color="#"+this.colorNames[$]:e.footer.style.color=this.getCssVariableValue($),s.border&&e.setBorder(s.border),s.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(s.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,s]of Object.entries(t))e.style[r]=typeof s=="string"?F.getCssVariableValue(s):s;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const s=document.createElement("script");s.src=e,s.type=t,document.head.appendChild(s),r&&(s.onload=r)}},ajax(e,t){let r,s,n=new XMLHttpRequest;const a={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let c=F.strToHtml(this.responseText);r.urlSelector&&(c=c.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(c)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},a,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},a,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&F.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}s=r.url.trim().split(/\s+/),r.url=encodeURI(s[0]),s.length>1&&(s.shift(),r.urlSelector=s.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&F.ajaxAutoresizeAutoreposition(t,r),F.ajaxAlwaysCallbacks.length&&F.ajaxAlwaysCallbacks.forEach(c=>{t?c.call(n,n,t):c.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const s={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(a,c){if(c){let f=F.strToHtml(a);c.contentRemove(),c.content.append(f)}}};if(t&&typeof e=="string")r=Object.assign({},s,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},s,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&F.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(a=>{if(a.ok)return a[r.bodyMethod]()}).then(a=>{t?r.done.call(a,a,t):r.done.call(a,a),t&&(r.autoresize||r.autoreposition)&&F.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const s=r.split(" "),n=Object.assign({},{width:s[0],height:s[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const s=Object.assign({},r);t.autoresize&&e.resize(s),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const s=document.createElement("div"),n=e.parentElement;s.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(s.style.width=r+"px",s.style.height=r+"px"):t==="ct"||t==="cb"?s.style.height=r+"px":(t==="lc"||t==="rc")&&(s.style.width=r+"px"),n!==document.body&&(s.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(s)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",s,n){if(typeof t=="function"&&(t=[t]),r)return t[r](a=>a.call(e,e,s,n));t.forEach(a=>a.call(e,e,s,n))},resetZi(){this.zi=((e=F.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=F.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){F.zi||(F.zi=((m=F.ziBase)=>{let v=m;return{next:()=>v++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${F.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let m=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;F.errorpanel(m)}return!1}let s=this.pOcontainer(e.container);if(typeof s=="object"&&s.length&&s.length>0&&(s=s[0]),!s)return this.errorReporting&&F.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(m=>{e[m]?typeof e[m]=="function"&&(e[m]=[e[m]]):e[m]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const a=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),f=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),p=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),$=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),S=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),k=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),z=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),M=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),q=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),te=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),ne=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),ie=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),me=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),Re=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),ae=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[a,c,f,p,$,S,k,z,M,q,te,ne,ie,me].forEach(m=>m.panel=n);const be=n.querySelector(".jsPanel-btn-close"),Te=n.querySelector(".jsPanel-btn-maximize"),We=n.querySelector(".jsPanel-btn-normalize"),Ot=n.querySelector(".jsPanel-btn-smallify"),nn=n.querySelector(".jsPanel-btn-minimize");be&&F.pointerup.forEach(m=>{be.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.close(null,!0)})}),Te&&F.pointerup.forEach(m=>{Te.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.maximize()})}),We&&F.pointerup.forEach(m=>{We.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.normalize()})}),Ot&&F.pointerup.forEach(m=>{Ot.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),nn&&F.pointerup.forEach(m=>{nn.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.minimize()})});let Fn=F.extensions;for(let m in Fn)Object.prototype.hasOwnProperty.call(Fn,m)&&(n[m]=Fn[m]);if(n.setBorder=m=>{let v=F.pOborder(m);return v[2].length||(v[2]=n.style.backgroundColor),v=v.join(" "),n.style.border=v,n.options.border=v,n},n.setBorderRadius=m=>{typeof m=="string"&&(m.startsWith("--")||m.startsWith("var"))&&(m=m.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),m=F.getCssVariableValue(m)),typeof m=="number"&&(m+="px"),n.style.borderRadius=m;const v=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=v.borderTopLeftRadius,n.header.style.borderTopRightRadius=v.borderTopRightRadius):(n.content.style.borderTopLeftRadius=v.borderTopLeftRadius,n.content.style.borderTopRightRadius=v.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=v.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=v.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=v.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=v.borderBottomLeftRadius),n},n.setTheme=(m=e.theme,v)=>{let O;if(n.status==="minimized"&&(O=!0,n.normalize()),F.clearTheme(n),typeof m=="object")e.border=void 0,F.applyCustomTheme(n,m);else if(typeof m=="string"){m==="none"&&(m="white");let b=F.getThemeDetails(m);F.applyColorTheme(n,b)}return O&&n.minimize(),v&&v.call(n,n),n},n.remove=(m,v,O)=>{n.parentElement.removeChild(n),document.getElementById(m)?O&&O.call(n,m,n):(n.removeMinimizedReplacement(),n.status="closed",v&&document.dispatchEvent(ae),document.dispatchEvent(Re),n.options.onclosed&&F.processCallbacks(n,n.options.onclosed,"every",v),F.autopositionRemaining(n),O&&O.call(m,m)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(m,v)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(me),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!F.processCallbacks(n,n.options.onbeforeclose,"some",n.status,v))return n;n.options.animateOut?(n.options.animateIn&&F.remClass(n,n.options.animateIn),F.setClass(n,n.options.animateOut),n.addEventListener("animationend",O=>{O.stopPropagation(),n.remove(n.id,v,m)})):n.remove(n.id,v,m)}},n.maximize=(m,v)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!F.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent($);const O=n.parentElement,b=F.pOcontainment(e.maximizedMargin);return O===document.body?(n.style.width=document.documentElement.clientWidth-b[1]-b[3]+"px",n.style.height=document.documentElement.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"):(n.style.width=O.clientWidth-b[1]-b[3]+"px",n.style.height=O.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"),Ot.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),v||n.front(),document.dispatchEvent(S),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onmaximized&&F.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=m=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!F.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(k),!document.getElementById("jsPanel-replacement-container")){const v=document.createElement("div");v.id="jsPanel-replacement-container",document.body.append(v)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(z),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let v=n.createMinimizedReplacement(),O,b,x;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(v);break;case"parentpanel":b=n.closest(".jsPanel-content").parentElement,x=b.querySelectorAll(".jsPanel-minimized-box"),O=x[x.length-1],O.append(v);break;case"parent":b=n.parentElement,O=b.querySelector(".jsPanel-minimized-container"),O||(O=document.createElement("div"),O.className="jsPanel-minimized-container",b.append(O)),O.append(v);break;default:document.querySelector(e.minimizeTo).append(v)}}return m&&m.call(n,n,n.statusBefore),e.onminimized&&F.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=m=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!F.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(f),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),Ot.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(p),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onnormalized&&F.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=m=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!F.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(M),n.style.overflow="hidden";const v=window.getComputedStyle(n),O=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(v.borderTopWidth)+parseFloat(v.borderBottomWidth)+O+"px",Ot.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(q),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(te),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const b=n.querySelectorAll(".jsPanel-minimized-box");return b[b.length-1].style.display="none",m&&m.call(n,n,n.statusBefore),e.onsmallified&&F.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=m=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!F.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(ne),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(p),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),Ot.style.transform="rotate(0deg)";const v=n.querySelectorAll(".jsPanel-minimized-box");v[v.length-1].style.display="flex",m&&m.call(n,n,n.statusBefore),e.onunsmallified&&F.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(m,v=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const O=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(b=>b.style.zIndex);Math.max(...O)>n.style.zIndex&&(n.style.zIndex=F.zi.next()),F.resetZi()}return document.dispatchEvent(ie),m&&m.call(n,n),e.onfronted&&v&&F.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(m,v=!1)=>{if(v||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),m&&typeof m=="function"&&!v)m.call(n,n,n.snappableTo);else if(m!==!1){let O=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const b=F.pOcontainment(n.options.dragit.containment),x=n.snappableTo;x.startsWith("left")?O[0]=b[3]:x.startsWith("right")&&(O[0]=-b[1]),x.endsWith("top")?O[1]=b[0]:x.endsWith("bottom")&&(O[1]=-b[2])}n.reposition(`${n.snappableTo} ${O[0]} ${O[1]}`)}v||(n.snapped=n.snappableTo)},n.move=(m,v)=>{let O=n.overlaps(m,"paddingbox"),b=n.parentElement;return m.appendChild(n),n.options.container=m,n.style.left=O.left+"px",n.style.top=O.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),v&&v.call(n,n,m,b),n},n.closeChildpanels=m=>(n.getChildpanels().forEach(v=>v.close()),m&&m.call(n,n),n),n.getChildpanels=m=>{const v=n.content.querySelectorAll(".jsPanel");return m&&v.forEach((O,b,x)=>{m.call(O,O,b,x)}),v},n.isChildpanel=m=>{const v=n.closest(".jsPanel-content"),O=v?v.parentElement:null;return m&&m.call(n,n,O),v?O:!1},n.contentRemove=m=>(F.emptyNode(n.content),m&&m.call(n,n),n),n.createMinimizedReplacement=()=>{const m=F.createMinimizedTemplate(),v=window.getComputedStyle(n.headertitle).color,O=window.getComputedStyle(n),b=e.iconfont,x=m.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?F.setStyles(m,{backgroundColor:O.backgroundColor,backgroundPositionX:O.backgroundPositionX,backgroundPositionY:O.backgroundPositionY,backgroundRepeat:O.backgroundRepeat,backgroundAttachment:O.backgroundAttachment,backgroundImage:O.backgroundImage,backgroundSize:O.backgroundSize,backgroundOrigin:O.backgroundOrigin,backgroundClip:O.backgroundClip}):m.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,m.id=n.id+"-min",m.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),m.querySelector(".jsPanel-headerlogo")),m.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),m.querySelector(".jsPanel-title")),m.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),m.querySelector(".jsPanel-title").style.color=v,x.style.color=v,x.querySelectorAll("button").forEach(le=>le.style.color=v),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(le=>{n.header.classList.contains(le)&&m.querySelector(".jsPanel-hdr").classList.add(le)}),n.setIconfont(b,m),n.dataset.btnnormalize==="enabled"?F.pointerup.forEach(le=>{m.querySelector(".jsPanel-btn-normalize").addEventListener(le,de=>{if(de.preventDefault(),de.button&&de.button>0)return!1;n.normalize()})}):x.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?F.pointerup.forEach(le=>{m.querySelector(".jsPanel-btn-maximize").addEventListener(le,de=>{if(de.preventDefault(),de.button&&de.button>0)return!1;n.maximize()})}):x.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?F.pointerup.forEach(le=>{m.querySelector(".jsPanel-btn-close").addEventListener(le,de=>{if(de.preventDefault(),de.button&&de.button>0)return!1;n.close(null,!0)})}):x.querySelector(".jsPanel-btn-close").style.display="none",m},n.removeMinimizedReplacement=()=>{const m=document.getElementById(`${n.id}-min`);m&&m.parentElement.removeChild(m)},n.drag=(m={})=>{let v,O,b;const x=new CustomEvent("jspaneldragstart",{detail:n.id}),le=new CustomEvent("jspaneldrag",{detail:n.id}),de=new CustomEvent("jspaneldragstop",{detail:n.id});[x,le,de].forEach(Be=>Be.panel=n);const N=Be=>{let Fe=Be.split("-");return Fe.forEach((ve,Se)=>{Fe[Se]=ve.charAt(0).toUpperCase()+ve.slice(1)}),"snap"+Fe.join("")};function K(Be){Be.relatedTarget===null&&F.pointermove.forEach(Fe=>{document.removeEventListener(Fe,O,!1),n.style.opacity=1})}let He=m.handles||F.defaults.dragit.handles,rt=m.cursor||F.defaults.dragit.cursor;function qt(Be){if(F.pointermove.forEach(Fe=>document.removeEventListener(Fe,O)),F.removeSnapAreas(),v){if(n.style.opacity=1,v=void 0,b.snap){switch(n.snappableTo){case"left-top":n.snap(b.snap.snapLeftTop);break;case"center-top":n.snap(b.snap.snapCenterTop);break;case"right-top":n.snap(b.snap.snapRightTop);break;case"right-center":n.snap(b.snap.snapRightCenter);break;case"right-bottom":n.snap(b.snap.snapRightBottom);break;case"center-bottom":n.snap(b.snap.snapCenterBottom);break;case"left-bottom":n.snap(b.snap.snapLeftBottom);break;case"left-center":n.snap(b.snap.snapLeftCenter);break}b.snap.callback&&n.snappableTo&&typeof b.snap.callback=="function"&&(b.snap.callback.call(n,n),b.snap.repositionOnSnap&&b.snap[N(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&b.snap.repositionOnSnap&&b.snap[N(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Fe=n.parentElement;n.move(n.droppableTo),b.drop.callback&&b.drop.callback.call(n,n,n.droppableTo,Fe)}if(document.dispatchEvent(de),b.stop.length){let Fe=window.getComputedStyle(n),ve={left:parseFloat(Fe.left),top:parseFloat(Fe.top),width:parseFloat(Fe.width),height:parseFloat(Fe.height)};F.processCallbacks(n,b.stop,!1,ve,Be)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Fe=>Fe.style.pointerEvents="auto"),document.removeEventListener(Be,qt)}return n.querySelectorAll(He).forEach(Be=>{Be.style.touchAction="none",Be.style.cursor=rt,F.pointerdown.forEach(Fe=>{Be.addEventListener(Fe,ve=>{if(ve.button&&ve.button>0||(b=Object.assign({},F.defaults.dragit,m),b.disableOnMaximized&&n.status==="maximized"))return!1;if((b.containment||b.containment===0)&&(b.containment=F.pOcontainment(b.containment)),b.grid&&Array.isArray(b.grid)&&b.grid.length===1&&(b.grid[1]=b.grid[0]),b.snap&&(typeof b.snap=="object"?b.snap=Object.assign({},F.defaultSnapConfig,b.snap):b.snap=F.defaultSnapConfig),ve.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(Ge=>Ge.style.pointerEvents="none");let Se=window.getComputedStyle(n),Ke=parseFloat(Se.left),Ee=parseFloat(Se.top),J=parseFloat(Se.width),Ve=parseFloat(Se.height),Oe=ve.touches?ve.touches[0].clientX:ve.clientX,ue=ve.touches?ve.touches[0].clientY:ve.clientY,ge=n.parentElement,$t=ge.getBoundingClientRect(),oe=window.getComputedStyle(ge),Ye=n.getScaleFactor(),rn=0,Rt=F.getScrollbarWidth(ge);O=Ge=>{if(Ge.preventDefault(),!v){if(document.dispatchEvent(x),n.style.opacity=b.opacity,n.snapped&&b.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let re=n.getBoundingClientRect(),ke=Oe-(re.left+re.width),fe=re.width/2;ke>-fe&&(rn=ke+fe)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),b.drop&&b.drop.dropZones){let re=b.drop.dropZones.map(fe=>F.pOcontainer(fe)),ke=[];re.forEach(function(fe){fe.length?fe.forEach(function(De){ke.push(De)}):ke.push(fe)}),ke=ke.filter(function(fe,De,qe){return qe.indexOf(fe)===De}),b.drop.dropZones=ke}b.start.length&&F.processCallbacks(n,b.start,!1,{left:Ke,top:Ee,width:J,height:Ve},Ge)}v=1;let Ct,Ae,Me,yt,Qe,$e,xe,Et,Ne,ft,st=Ge.touches?Ge.touches[0].clientX:Ge.clientX,Je=Ge.touches?Ge.touches[0].clientY:Ge.clientY,Ie=window.getComputedStyle(n),ce;if(ge===document.body){let re=n.getBoundingClientRect();Ne=window.innerWidth-parseInt(oe.borderLeftWidth,10)-parseInt(oe.borderRightWidth,10)-(re.left+re.width),ft=window.innerHeight-parseInt(oe.borderTopWidth,10)-parseInt(oe.borderBottomWidth,10)-(re.top+re.height)}else Ne=parseInt(oe.width,10)-parseInt(oe.borderLeftWidth,10)-parseInt(oe.borderRightWidth,10)-(parseInt(Ie.left,10)+parseInt(Ie.width,10)),ft=parseInt(oe.height,10)-parseInt(oe.borderTopWidth,10)-parseInt(oe.borderBottomWidth,10)-(parseInt(Ie.top,10)+parseInt(Ie.height,10));Ct=parseFloat(Ie.left),Me=parseFloat(Ie.top),Qe=Ne,xe=ft,b.snap&&(b.snap.trigger==="panel"?(Ae=Ct**2,yt=Me**2,$e=Qe**2,Et=xe**2):b.snap.trigger==="pointer"&&(n.options.container==="window"?(Ct=st,Me=Je,Qe=window.innerWidth-st,xe=window.innerHeight-Je,Ae=st**2,yt=Me**2,$e=Qe**2,Et=xe**2):(ce=n.overlaps(ge,"paddingbox",Ge),Ct=ce.pointer.left,Me=ce.pointer.top,Qe=ce.pointer.right,xe=ce.pointer.bottom,Ae=ce.pointer.left**2,yt=ce.pointer.top**2,$e=ce.pointer.right**2,Et=ce.pointer.bottom**2)));let Xe=Math.sqrt(Ae+yt),Y=Math.sqrt(Ae+Et),Ze=Math.sqrt($e+yt),at=Math.sqrt($e+Et),vt=Math.abs(Ct-Qe)/2,X=Math.abs(Me-xe)/2,Ut=Math.sqrt(Ae+X**2),Yt=Math.sqrt(yt+vt**2),it=Math.sqrt($e+X**2),sn=Math.sqrt(Et+vt**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(le),(!b.axis||b.axis==="x")&&(n.style.left=Ke+(st-Oe)/Ye.x+rn+"px"),(!b.axis||b.axis==="y")&&(n.style.top=Ee+(Je-ue)/Ye.y+"px"),b.grid){let re=b.grid,ke=b.axis,fe=re[0]*Math.round((Ke+(st-Oe))/re[0]),De=re[1]*Math.round((Ee+(Je-ue))/re[1]);(!ke||ke==="x")&&(n.style.left=`${fe}px`),(!ke||ke==="y")&&(n.style.top=`${De}px`)}if(b.containment||b.containment===0){let re=b.containment,ke,fe;if(n.options.container==="window")ke=window.innerWidth-parseFloat(Ie.width)-re[1]-Rt.y,fe=window.innerHeight-parseFloat(Ie.height)-re[2]-Rt.x;else{let De=parseFloat(oe.borderLeftWidth)+parseFloat(oe.borderRightWidth),qe=parseFloat(oe.borderTopWidth)+parseFloat(oe.borderBottomWidth);ke=$t.width/Ye.x-parseFloat(Ie.width)-re[1]-De-Rt.y,fe=$t.height/Ye.y-parseFloat(Ie.height)-re[2]-qe-Rt.x}parseFloat(n.style.left)<=re[3]&&(n.style.left=re[3]+"px"),parseFloat(n.style.top)<=re[0]&&(n.style.top=re[0]+"px"),parseFloat(n.style.left)>=ke&&(n.style.left=ke+"px"),parseFloat(n.style.top)>=fe&&(n.style.top=fe+"px")}if(b.drag.length){let re={left:Ct,top:Me,right:Qe,bottom:xe,width:parseFloat(Ie.width),height:parseFloat(Ie.height)};F.processCallbacks(n,b.drag,!1,re,Ge)}if(b.snap){let re=b.snap.sensitivity,ke=ge===document.body?window.innerWidth/8:$t.width/8,fe=ge===document.body?window.innerHeight/8:$t.height/8;n.snappableTo=!1,F.removeSnapAreas(),Xe<re?b.snap.snapLeftTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-top",F.createSnapArea(n,"lt",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ce.pointer.left>0&&ce.pointer.top>0?(n.snappableTo="left-top",F.createSnapArea(n,"lt",re)):(n.snappableTo=!1,F.removeSnapAreas()))):Y<re?b.snap.snapLeftBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-bottom",F.createSnapArea(n,"lb",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ce.pointer.left>0&&ce.pointer.bottom>0?(n.snappableTo="left-bottom",F.createSnapArea(n,"lb",re)):(n.snappableTo=!1,F.removeSnapAreas()))):Ze<re?b.snap.snapRightTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-top",F.createSnapArea(n,"rt",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ce.pointer.right>0&&ce.pointer.top>0?(n.snappableTo="right-top",F.createSnapArea(n,"rt",re)):(n.snappableTo=!1,F.removeSnapAreas()))):at<re?b.snap.snapRightBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-bottom",F.createSnapArea(n,"rb",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ce.pointer.right>0&&ce.pointer.bottom>0?(n.snappableTo="right-bottom",F.createSnapArea(n,"rb",re)):(n.snappableTo=!1,F.removeSnapAreas()))):Me<re&&Yt<ke?b.snap.snapCenterTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-top",F.createSnapArea(n,"ct",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ce.pointer.top>0?(n.snappableTo="center-top",F.createSnapArea(n,"ct",re)):(n.snappableTo=!1,F.removeSnapAreas()))):Ct<re&&Ut<fe?b.snap.snapLeftCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-center",F.createSnapArea(n,"lc",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ce.pointer.left>0?(n.snappableTo="left-center",F.createSnapArea(n,"lc",re)):(n.snappableTo=!1,F.removeSnapAreas()))):Qe<re&&it<fe?b.snap.snapRightCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-center",F.createSnapArea(n,"rc",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ce.pointer.right>0?(n.snappableTo="right-center",F.createSnapArea(n,"rc",re)):(n.snappableTo=!1,F.removeSnapAreas()))):xe<re&&sn<ke&&b.snap.snapCenterBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-bottom",F.createSnapArea(n,"cb",re)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ce.pointer.bottom>0?(n.snappableTo="center-bottom",F.createSnapArea(n,"cb",re)):(n.snappableTo=!1,F.removeSnapAreas())))}if(b.drop&&b.drop.dropZones){let re=F.isIE?"msElementsFromPoint":"elementsFromPoint",ke=document[re](Ge.clientX,Ge.clientY);Array.isArray(ke)||(ke=Array.prototype.slice.call(ke)),b.drop.dropZones.forEach(fe=>{ke.includes(fe)&&(n.droppableTo=fe)}),ke.includes(n.droppableTo)||(n.droppableTo=!1)}},F.pointermove.forEach(Ge=>document.addEventListener(Ge,O)),window.addEventListener("mouseout",K,!1)})}),F.pointerup.forEach(Fe=>{document.addEventListener(Fe,qt),window.removeEventListener("mouseout",K)}),m.disable&&(Be.style.pointerEvents="none")}),n},n.dragit=m=>{const v=Object.assign({},F.defaults.dragit,e.dragit),O=n.querySelectorAll(v.handles);return m==="disable"?O.forEach(b=>b.style.pointerEvents="none"):O.forEach(b=>b.style.pointerEvents="auto"),n},n.sizeit=(m={})=>{const v=new CustomEvent("jspanelresizestart",{detail:n.id}),O=new CustomEvent("jspanelresize",{detail:n.id}),b=new CustomEvent("jspanelresizestop",{detail:n.id});[v,O,b].forEach(ve=>ve.panel=n);let x={},le,de,N,K,He,rt;x.handles=m.handles||F.defaults.resizeit.handles,x.handles.split(",").forEach(ve=>{const Se=document.createElement("DIV");Se.className=`jsPanel-resizeit-handle jsPanel-resizeit-${ve.trim()}`,n.append(Se)});let qt=m.aspectRatio?m.aspectRatio:!1;function Be(ve){ve.relatedTarget===null&&F.pointermove.forEach(Se=>document.removeEventListener(Se,le,!1))}function Fe(ve){if(F.pointermove.forEach(Se=>document.removeEventListener(Se,le,!1)),ve.target.classList&&ve.target.classList.contains("jsPanel-resizeit-handle")){let Se,Ke,Ee=ve.target.className;if(Ee.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(Se=!0),Ee.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Ke=!0),x.grid&&Array.isArray(x.grid)){x.grid.length===1&&(x.grid[1]=x.grid[0]);const J=parseFloat(n.style.width),Ve=parseFloat(n.style.height),Oe=J%x.grid[0],ue=Ve%x.grid[1],ge=parseFloat(n.style.left),$t=parseFloat(n.style.top),oe=ge%x.grid[0],Ye=$t%x.grid[1];Oe<x.grid[0]/2?n.style.width=J-Oe+"px":n.style.width=J+(x.grid[0]-Oe)+"px",ue<x.grid[1]/2?n.style.height=Ve-ue+"px":n.style.height=Ve+(x.grid[1]-ue)+"px",Se&&(oe<x.grid[0]/2?n.style.left=ge-oe+"px":n.style.left=ge+(x.grid[0]-oe)+"px"),Ke&&(Ye<x.grid[1]/2?n.style.top=$t-Ye+"px":n.style.top=$t+(x.grid[1]-Ye)+"px")}}if(de){n.content.style.pointerEvents="inherit",de=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let Se=n.controlbar.querySelector(".jsPanel-btn-smallify"),Ke=n.getBoundingClientRect();if(Se&&Ke.height>rt+5&&(Se.style.transform="rotate(0deg)"),document.dispatchEvent(b),x.stop.length){let Ee=window.getComputedStyle(n),J={left:parseFloat(Ee.left),top:parseFloat(Ee.top),width:parseFloat(Ee.width),height:parseFloat(Ee.height)};F.processCallbacks(n,x.stop,!1,J,ve)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Se=>Se.style.pointerEvents="auto"),x.aspectRatio=qt,document.removeEventListener(ve,Fe)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(ve=>{ve.style.touchAction="none",F.pointerdown.forEach(Se=>{ve.addEventListener(Se,Ke=>{if(Ke.preventDefault(),Ke.stopPropagation(),Ke.button&&Ke.button>0)return!1;let Ee=1;if(x=Object.assign({},F.defaults.resizeit,m),(x.containment||x.containment===0)&&(x.containment=F.pOcontainment(x.containment)),x.aspectRatio&&x.aspectRatio===!0&&(x.aspectRatio="panel"),F.modifier){let fe=F.modifier;fe.altKey?x.aspectRatio="content":fe.ctrlKey?x.aspectRatio="panel":fe.shiftKey&&(x.aspectRatio=!1,Ee=2)}let J=typeof x.maxWidth=="function"?x.maxWidth():x.maxWidth||1e4,Ve=typeof x.maxHeight=="function"?x.maxHeight():x.maxHeight||1e4,Oe=typeof x.minWidth=="function"?x.minWidth():x.minWidth,ue=typeof x.minHeight=="function"?x.minHeight():x.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(fe=>fe.style.pointerEvents="none");const ge=n.parentElement,$t=ge.tagName.toLowerCase(),oe=n.getBoundingClientRect(),Ye=ge.getBoundingClientRect(),rn=window.getComputedStyle(ge,null),Rt=parseInt(rn.borderLeftWidth,10),Ge=parseInt(rn.borderTopWidth,10),Ct=rn.getPropertyValue("position"),Ae=Ke.clientX||Ke.clientX===0||Ke.touches[0].clientX,Me=Ke.clientY||Ke.clientY===0||Ke.touches[0].clientY,yt=Ae/Me,Qe=Ke.target.classList,$e=n.getScaleFactor(),xe=oe.width/oe.height,Et=n.content.getBoundingClientRect(),Ne=Et.width/Et.height,ft=n.header.getBoundingClientRect().height,st=n.footer.getBoundingClientRect().height||0;let Je=oe.left,Ie=oe.top,ce=1e4,Xe=1e4,Y=1e4,Ze=1e4;He=oe.width,rt=oe.height,$t!=="body"&&(Je=oe.left-Ye.left+ge.scrollLeft,Ie=oe.top-Ye.top+ge.scrollTop),$t==="body"&&x.containment?(ce=document.documentElement.clientWidth-oe.left,Y=document.documentElement.clientHeight-oe.top,Xe=oe.width+oe.left,Ze=oe.height+oe.top):x.containment&&(Ct==="static"?(ce=Ye.width-oe.left+Rt,Y=Ye.height+Ye.top-oe.top+Ge,Xe=oe.width+(oe.left-Ye.left)-Rt,Ze=oe.height+(oe.top-Ye.top)-Ge):(ce=ge.clientWidth-(oe.left-Ye.left)/$e.x+Rt,Y=ge.clientHeight-(oe.top-Ye.top)/$e.y+Ge,Xe=(oe.width+oe.left-Ye.left)/$e.x-Rt,Ze=n.clientHeight+(oe.top-Ye.top)/$e.y-Ge)),x.containment&&(Xe-=x.containment[3],Ze-=x.containment[0],ce-=x.containment[1],Y-=x.containment[2]);const at=window.getComputedStyle(n),vt=parseFloat(at.width)-oe.width,X=parseFloat(at.height)-oe.height;let Ut=parseFloat(at.left)-oe.left,Yt=parseFloat(at.top)-oe.top;ge!==document.body&&(Ut+=Ye.left,Yt+=Ye.top);let it=parseInt(at.borderTopWidth,10),sn=parseInt(at.borderRightWidth,10),re=parseInt(at.borderBottomWidth,10),ke=parseInt(at.borderLeftWidth,10);le=fe=>{fe.preventDefault(),de||(document.dispatchEvent(v),x.start.length&&F.processCallbacks(n,x.start,!1,{width:He,height:rt,left:Je,top:Ie},fe),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),oe.height>rt+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),de=1,document.dispatchEvent(O);let De=fe.touches?fe.touches[0].clientX:fe.clientX,qe=fe.touches?fe.touches[0].clientY:fe.clientY,_e;Qe.contains("jsPanel-resizeit-e")?(N=He+(De-Ae)*Ee/$e.x+vt,N>=ce&&(N=ce),N>=J&&(N=J),N<=Oe&&(N=Oe),n.style.width=N+"px",Ee===2&&(n.style.left=Je-(De-Ae)+"px"),x.aspectRatio==="content"?(n.style.height=(N-sn-ke)/Ne+ft+st+it+re+"px",x.containment&&(_e=n.overlaps(ge),_e.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*Ne+"px"))):x.aspectRatio==="panel"&&(n.style.height=N/xe+"px",x.containment&&(_e=n.overlaps(ge),_e.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*xe+"px")))):Qe.contains("jsPanel-resizeit-s")?(K=rt+(qe-Me)*Ee/$e.y+X,K>=Y&&(K=Y),K>=Ve&&(K=Ve),K<=ue&&(K=ue),n.style.height=K+"px",Ee===2&&(n.style.top=Ie-(qe-Me)+"px"),x.aspectRatio==="content"?(n.style.width=(K-ft-st-it-re)*Ne+it+re+"px",x.containment&&(_e=n.overlaps(ge),_e.right<=x.containment[1]&&(n.style.width=ce+"px",n.style.height=ce/Ne+"px"))):x.aspectRatio==="panel"&&(n.style.width=K*xe+"px",x.containment&&(_e=n.overlaps(ge),_e.right<=x.containment[1]&&(n.style.width=ce+"px",n.style.height=ce/xe+"px")))):Qe.contains("jsPanel-resizeit-w")?(N=He+(Ae-De)*Ee/$e.x+vt,N<=J&&N>=Oe&&N<=Xe&&(n.style.left=Je+(De-Ae)/$e.x+Ut+"px"),N>=Xe&&(N=Xe),N>=J&&(N=J),N<=Oe&&(N=Oe),n.style.width=N+"px",x.aspectRatio==="content"?(n.style.height=(N-sn-ke)/Ne+ft+st+it+re+"px",x.containment&&(_e=n.overlaps(ge),_e.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*Ne+"px"))):x.aspectRatio==="panel"&&(n.style.height=N/xe+"px",x.containment&&(_e=n.overlaps(ge),_e.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*xe+"px")))):Qe.contains("jsPanel-resizeit-n")?(K=rt+(Me-qe)*Ee/$e.y+X,K<=Ve&&K>=ue&&K<=Ze&&(n.style.top=Ie+(qe-Me)/$e.y+Yt+"px"),K>=Ze&&(K=Ze),K>=Ve&&(K=Ve),K<=ue&&(K=ue),n.style.height=K+"px",x.aspectRatio==="content"?(n.style.width=(K-ft-st-it-re)*Ne+it+re+"px",x.containment&&(_e=n.overlaps(ge),_e.right<=x.containment[1]&&(n.style.width=ce+"px",n.style.height=ce/Ne+"px"))):x.aspectRatio==="panel"&&(n.style.width=K*xe+"px",x.containment&&(_e=n.overlaps(ge),_e.right<=x.containment[1]&&(n.style.width=ce+"px",n.style.height=ce/xe+"px")))):Qe.contains("jsPanel-resizeit-se")?(N=He+(De-Ae)*Ee/$e.x+vt,N>=ce&&(N=ce),N>=J&&(N=J),N<=Oe&&(N=Oe),n.style.width=N+"px",Ee===2&&(n.style.left=Je-(De-Ae)+"px"),x.aspectRatio&&(n.style.height=N/xe+"px"),K=rt+(qe-Me)*Ee/$e.y+X,K>=Y&&(K=Y),K>=Ve&&(K=Ve),K<=ue&&(K=ue),n.style.height=K+"px",Ee===2&&(n.style.top=Ie-(qe-Me)+"px"),x.aspectRatio==="content"?(n.style.width=(K-ft-st-it-re)*Ne+it+re+"px",x.containment&&(_e=n.overlaps(ge),_e.right<=x.containment[1]&&(n.style.width=ce+"px",n.style.height=ce/Ne+"px"))):x.aspectRatio==="panel"&&(n.style.width=K*xe+"px",x.containment&&(_e=n.overlaps(ge),_e.right<=x.containment[1]&&(n.style.width=ce+"px",n.style.height=ce/xe+"px")))):Qe.contains("jsPanel-resizeit-sw")?(K=rt+(qe-Me)*Ee/$e.y+X,K>=Y&&(K=Y),K>=Ve&&(K=Ve),K<=ue&&(K=ue),n.style.height=K+"px",Ee===2&&(n.style.top=Ie-(qe-Me)+"px"),x.aspectRatio&&(n.style.width=K*xe+"px"),N=He+(Ae-De)*Ee/$e.x+vt,N<=J&&N>=Oe&&N<=Xe&&(n.style.left=Je+(De-Ae)/$e.x+Ut+"px"),N>=Xe&&(N=Xe),N>=J&&(N=J),N<=Oe&&(N=Oe),n.style.width=N+"px",x.aspectRatio==="content"?(n.style.height=(N-sn-ke)/Ne+ft+st+it+re+"px",x.containment&&(_e=n.overlaps(ge),_e.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*Ne+"px"))):x.aspectRatio==="panel"&&(n.style.height=N/xe+"px",x.containment&&(_e=n.overlaps(ge),_e.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*xe+"px")))):Qe.contains("jsPanel-resizeit-ne")?(N=He+(De-Ae)*Ee/$e.x+vt,N>=ce&&(N=ce),N>=J&&(N=J),N<=Oe&&(N=Oe),n.style.width=N+"px",Ee===2&&(n.style.left=Je-(De-Ae)+"px"),x.aspectRatio&&(n.style.height=N/xe+"px"),K=rt+(Me-qe)*Ee/$e.y+X,K<=Ve&&K>=ue&&K<=Ze&&(n.style.top=Ie+(qe-Me)/$e.y+Yt+"px"),K>=Ze&&(K=Ze),K>=Ve&&(K=Ve),K<=ue&&(K=ue),n.style.height=K+"px",x.aspectRatio==="content"?(n.style.width=(K-ft-st-it-re)*Ne+it+re+"px",x.containment&&(_e=n.overlaps(ge),_e.right<=x.containment[1]&&(n.style.width=ce+"px",n.style.height=ce/Ne+"px"))):x.aspectRatio==="panel"&&(n.style.width=K*xe+"px",x.containment&&(_e=n.overlaps(ge),_e.right<=x.containment[1]&&(n.style.width=ce+"px",n.style.height=ce/xe+"px")))):Qe.contains("jsPanel-resizeit-nw")&&(x.aspectRatio&&Qe.contains("jsPanel-resizeit-nw")&&(De=qe*yt,qe=De/yt),N=He+(Ae-De)*Ee/$e.x+vt,N<=J&&N>=Oe&&N<=Xe&&(n.style.left=Je+(De-Ae)/$e.x+Ut+"px"),N>=Xe&&(N=Xe),N>=J&&(N=J),N<=Oe&&(N=Oe),n.style.width=N+"px",x.aspectRatio&&(n.style.height=N/xe+"px"),K=rt+(Me-qe)*Ee/$e.y+X,K<=Ve&&K>=ue&&K<=Ze&&(n.style.top=Ie+(qe-Me)/$e.y+Yt+"px"),K>=Ze&&(K=Ze),K>=Ve&&(K=Ve),K<=ue&&(K=ue),n.style.height=K+"px",x.aspectRatio==="content"?n.style.width=(K-ft-st-it-re)*Ne+it+re+"px":x.aspectRatio==="panel"&&(n.style.width=K*xe+"px")),window.getSelection().removeAllRanges();const zt=window.getComputedStyle(n),Le={left:parseFloat(zt.left),top:parseFloat(zt.top),right:parseFloat(zt.right),bottom:parseFloat(zt.bottom),width:parseFloat(zt.width),height:parseFloat(zt.height)};x.resize.length&&F.processCallbacks(n,x.resize,!1,Le,fe)},F.pointermove.forEach(fe=>document.addEventListener(fe,le,!1)),window.addEventListener("mouseout",Be,!1)})}),F.pointerup.forEach(function(Se){document.addEventListener(Se,Fe),window.removeEventListener("mouseout",Be)}),m.disable&&(ve.style.pointerEvents="none")}),n},n.resizeit=m=>{const v=n.querySelectorAll(".jsPanel-resizeit-handle");return m==="disable"?v.forEach(O=>O.style.pointerEvents="none"):v.forEach(O=>O.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const m=n.getBoundingClientRect();return{x:m.width/n.offsetWidth,y:m.height/n.offsetHeight}},n.calcSizeFactors=()=>{const m=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(m.left)/(window.innerWidth-parseFloat(m.width)),n.vf=parseFloat(m.top)/(window.innerHeight-parseFloat(m.height));else if(n.parentElement){let v=n.parentElement.getBoundingClientRect();n.hf=parseFloat(m.left)/(v.width-parseFloat(m.width)),n.vf=parseFloat(m.top)/(v.height-parseFloat(m.height))}},n.saveCurrentDimensions=()=>{const m=window.getComputedStyle(n);n.currentData.width=m.width,n.currentData.height=m.height},n.saveCurrentPosition=()=>{const m=window.getComputedStyle(n);n.currentData.left=m.left,n.currentData.top=m.top},n.reposition=(...m)=>{let v=e.position,O=!0,b;return m.forEach(x=>{typeof x=="string"||typeof x=="object"?v=x:typeof x=="boolean"?O=x:typeof x=="function"&&(b=x)}),F.position(n,v),n.slaves&&n.slaves.size>0&&n.slaves.forEach(x=>x.reposition()),O&&n.saveCurrentPosition(),b&&b.call(n,n),n},n.repositionOnSnap=m=>{let v="0",O="0",b=F.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(m){case"left-top":v=b[3],O=b[0];break;case"right-top":v=-b[1],O=b[0];break;case"right-bottom":v=-b[1],O=-b[2];break;case"left-bottom":v=b[3],O=-b[2];break;case"center-top":v=b[3]/2-b[1]/2,O=b[0];break;case"center-bottom":v=b[3]/2-b[1]/2,O=-b[2];break;case"left-center":v=b[3],O=b[0]/2-b[2]/2;break;case"right-center":v=-b[1],O=b[0]/2-b[2]/2;break}F.position(n,m),F.setStyles(n,{left:`calc(${n.style.left} + ${v}px)`,top:`calc(${n.style.top} + ${O}px)`})},n.overlaps=(m,v,O)=>{let b=n.getBoundingClientRect(),x=getComputedStyle(n.parentElement),le=n.getScaleFactor(),de={top:0,right:0,bottom:0,left:0},N,K=0,He=0,rt=0,qt=0;n.options.container!=="window"&&v==="paddingbox"&&(de.top=parseInt(x.borderTopWidth,10)*le.y,de.right=parseInt(x.borderRightWidth,10)*le.x,de.bottom=parseInt(x.borderBottomWidth,10)*le.y,de.left=parseInt(x.borderLeftWidth,10)*le.x),typeof m=="string"?m==="window"?N={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:m==="parent"?N=n.parentElement.getBoundingClientRect():N=document.querySelector(m).getBoundingClientRect():N=m.getBoundingClientRect(),O&&(K=O.touches?O.touches[0].clientX:O.clientX,He=O.touches?O.touches[0].clientY:O.clientY,rt=K-N.left,qt=He-N.top);let Be=b.left<N.right&&b.right>N.left,Fe=b.top<N.bottom&&b.bottom>N.top;return{overlaps:Be&&Fe,top:b.top-N.top-de.top,right:N.right-b.right-de.right,bottom:N.bottom-b.bottom-de.bottom,left:b.left-N.left-de.left,parentBorderWidth:de,panelRect:b,referenceRect:N,pointer:{clientX:K,clientY:He,left:rt-de.left,top:qt-de.top,right:N.width-rt-de.right,bottom:N.height-qt-de.bottom}}},n.setSize=()=>{if(e.panelSize){const m=F.pOsize(n,e.panelSize);n.style.width=m.width,n.style.height=m.height}else if(e.contentSize){const m=F.pOsize(n,e.contentSize);n.content.style.width=m.width,n.content.style.height=m.height,n.style.width=m.width,n.content.style.width="100%"}return n},n.resize=(...m)=>{let v=window.getComputedStyle(n),O={width:v.width,height:v.height},b=!0,x;m.forEach(N=>{typeof N=="string"?O=N:typeof N=="object"?O=Object.assign(O,N):typeof N=="boolean"?b=N:typeof N=="function"&&(x=N)});let le=F.pOsize(n,O);n.style.width=le.width,n.style.height=le.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(N=>N.reposition()),b&&n.saveCurrentDimensions(),n.status="normalized";let de=n.controlbar.querySelector(".jsPanel-btn-smallify");return de&&(de.style.transform="rotate(0deg)"),x&&x.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=m=>{if(m.target===window){let v=n.status,O=e.onwindowresize,b,x;if(v==="maximized"&&O)n.maximize(!1,!0);else if(n.snapped&&v!=="minimized")n.snap(n.snapped,!0);else if(v==="normalized"||v==="smallified"||v==="maximized"){let le=typeof O;le==="boolean"?(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",x=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=x<=0?0:x+"px"):le==="function"?O.call(n,m,n):le==="object"&&(O.preset===!0&&(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",x=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=x<=0?0:x+"px"),O.callback.call(n,m,n))}else v==="smallifiedmax"&&O&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(le=>le.reposition())}},n.setControls=(m,v)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(O=>{const b=O.className.split("-"),x=b[b.length-1];n.getAttribute(`data-btn${x}`)!=="hidden"&&(O.style.display="block")}),m.forEach(O=>{const b=n.controlbar.querySelector(O);b&&(b.style.display="none")}),v&&v.call(n,n),n),n.setControlStatus=(m,v="enable",O)=>{const b=n.controlbar.querySelector(`.jsPanel-btn-${m}`);switch(v){case"disable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"disabled"),b.style.pointerEvents="none",b.style.opacity=.4,b.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"hidden"),b.style.display="none");break;case"show":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"enabled"),b.style.display="block",b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.getAttribute(`data-btn${m}`)==="hidden"&&(b.style.display="block"),n.setAttribute(`data-btn${m}`,"enabled"),b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(b),n.setAttribute(`data-btn${m}`,"removed");break}return O&&O.call(n,n),n},n.setControlSize=m=>{const v=m.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(b=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(x=>b.classList.remove(x)),b.classList.add(`jsPanel-btn-${v}`)}),v==="xl"?n.titlebar.style.fontSize="1.5rem":v==="lg"?n.titlebar.style.fontSize="1.25rem":v==="md"?n.titlebar.style.fontSize="1.05rem":v==="sm"?n.titlebar.style.fontSize=".9rem":v==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=m=>{if(n.options.headerControls.add){let x=n.options.headerControls.add;Array.isArray(x)||(x=[x]),x.forEach(le=>n.addControl(le))}let v=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(x=>{let le=x.className.match(/jsPanel-btn-[a-z\d]{3,}/i),de=le[0].substring(12);v.push(de)});const b=F.pOheaderControls(e.headerControls);return e.headerControls=b,v.forEach(x=>{b[x]&&n.setControlStatus(x,b[x])}),n.setControlSize(b.size),m&&m.call(n,n),n},n.setHeaderLogo=(m,v)=>{let O=[n.headerlogo],b=document.querySelector("#"+n.id+"-min");return b&&O.push(b.querySelector(".jsPanel-headerlogo")),typeof m=="string"?m.startsWith("<")?O.forEach(x=>x.innerHTML=m):O.forEach(x=>{F.emptyNode(x);let le=document.createElement("img");le.src=m,x.append(le)}):O.forEach(x=>{F.emptyNode(x),x.append(m)}),n.headerlogo.childNodes.forEach(x=>{x.nodeName&&x.nodeName==="IMG"&&x.setAttribute("draggable","false")}),v&&v.call(n,n),n},n.setHeaderRemove=m=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(v=>n.setAttribute(`data-btn${v}`,"removed")),m&&m.call(n,n),n),n.setHeaderTitle=(m,v)=>{let O=[n.headertitle],b=document.querySelector("#"+n.id+"-min");return b&&O.push(b.querySelector(".jsPanel-title")),typeof m=="string"?O.forEach(x=>x.innerHTML=m):typeof m=="function"?O.forEach(x=>{F.emptyNode(x),x.innerHTML=m()}):O.forEach(x=>{F.emptyNode(x),x.append(m)}),v&&v.call(n,n),n},n.setIconfont=(m,v=n,O)=>{if(m){let b,x;if(m==="fa"||m==="far"||m==="fal"||m==="fas"||m==="fad")b=[`${m} fa-window-close`,`${m} fa-window-maximize`,`${m} fa-window-restore`,`${m} fa-window-minimize`,`${m} fa-chevron-up`];else if(m==="material-icons")b=[m,m,m,m,m,m],x=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(m))b=[`custom-control-icon ${m[4]}`,`custom-control-icon ${m[3]}`,`custom-control-icon ${m[2]}`,`custom-control-icon ${m[1]}`,`custom-control-icon ${m[0]}`];else if(m==="bootstrap"||m==="glyphicon")b=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return v;v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(le=>F.emptyNode(le).innerHTML="<span></span>"),Array.prototype.slice.call(v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((le,de)=>{le.className=b[de],m==="material-icons"&&(le.textContent=x[de])})}return O&&O.call(v,v),v},n.addToolbar=(m,v,O)=>{if(m==="header"?m=n.headertoolbar:m==="footer"&&(m=n.footer),typeof v=="string")m.innerHTML=v;else if(Array.isArray(v))v.forEach(b=>{typeof b=="string"?m.innerHTML+=b:m.append(b)});else if(typeof v=="function"){let b=v.call(n,n);typeof b=="string"?m.innerHTML=b:m.append(b)}else m.append(v);return m.classList.add("active"),O&&O.call(n,n),n},n.addCloseControl=()=>{let m=document.createElement("button"),v=n.content.style.color;return m.classList.add("jsPanel-addCloseCtrl"),m.innerHTML=F.icons.close,m.style.color=v,n.options.rtl&&m.classList.add("rtl"),n.appendChild(m),F.pointerup.forEach(O=>{m.addEventListener(O,b=>{if(b.preventDefault(),b.button&&b.button>0)return!1;n.close(null,!0)})}),F.pointerdown.forEach(O=>{m.addEventListener(O,b=>b.preventDefault())}),n},n.addControl=m=>{if(!m.html)return n;m.position||(m.position=1);const v=n.controlbar.querySelectorAll(".jsPanel-btn").length;let O=document.createElement("button");O.innerHTML=m.html,O.className=`jsPanel-btn jsPanel-btn-${m.name} jsPanel-btn-${e.headerControls.size}`,O.style.color=n.header.style.color,m.position>v?n.controlbar.append(O):n.controlbar.insertBefore(O,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${m.position})`));const b=m.ariaLabel||m.name;return b&&O.setAttribute("aria-label",b),F.pointerup.forEach(x=>{O.addEventListener(x,le=>{if(le.preventDefault(),le.button&&le.button>0)return!1;m.handler.call(n,n,O)})}),m.afterInsert&&m.afterInsert.call(O,O),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(m=>{m.dir="rtl",e.rtl.lang&&(m.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),s.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),F.isIE){let m=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":m.forEach(v=>{v.style.height="34px"});break;case"xs":m.forEach(v=>{v.style.height="26px"});break;case"sm":m.forEach(v=>{v.style.height="30px"});break;case"lg":m.forEach(v=>{v.style.height="38px"});break;case"xl":m.forEach(v=>{v.style.height="42px"});break}}if(e.header==="auto-show-hide"){let m="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,m),this.setClass(n.content,m),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,F.setClass(n,m),F.remClass(n.content,m)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,F.remClass(n,m),F.setClass(n.content,m)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[m,v]of Object.entries(e.css))if(m==="panel")n.className+=` ${v}`;else{let O=n.querySelector(`.jsPanel-${m}`);O&&(O.className+=` ${v}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const m=e.contentOverflow.split(" ");m.length===1?n.content.style.overflow=m[0]:m.length===2&&(n.content.style.overflowX=m[0],n.content.style.overflowY=m[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let m=Object.assign({},F.defaultAutocloseConfig,e.autoclose);m.time&&typeof m.time=="number"&&(m.time+="ms");let v=n.progressbar.querySelector("div");v.addEventListener("animationend",O=>{O.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),m.progressbar&&(n.progressbar.classList.add("active"),m.background?F.colorNames[m.background]?n.progressbar.style.background="#"+F.colorNames[m.background]:n.progressbar.style.background=m.background:n.progressbar.classList.add("success-bg")),v.style.animation=`${m.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(p),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let m=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=m,e.dragit.snap===!0?(e.dragit.snap=F.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=m)}if(e.dragit?(["start","drag","stop"].forEach(m=>{e.dragit[m]?typeof e.dragit[m]=="function"&&(e.dragit[m]=[e.dragit[m]]):e.dragit[m]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",m=>{m.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(v=>{e.resizeit[v]?typeof e.resizeit[v]=="function"&&(e.resizeit[v]=[e.resizeit[v]]):e.resizeit[v]=[]}),n.sizeit(e.resizeit);let m;n.addEventListener("jspanelresizestart",v=>{v.panel===n&&(m=n.status)},!1),n.addEventListener("jspanelresizestop",v=>{v.panel===n&&(m==="smallified"||m==="smallifiedmax"||m==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(p),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(m=>{n.addEventListener(m,v=>{!v.target.closest(".jsPanel-btn-close")&&!v.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let m=e.onparentresize,v=typeof m,O=n.isChildpanel();if(O){const b=O.content;let x=[];n.parentResizeHandler=le=>{if(le.panel===O){x[0]=b.offsetWidth,x[1]=b.offsetHeight;let de=n.status,N,K;de==="maximized"&&m?n.maximize():n.snapped&&de!=="minimized"?n.snap(n.snapped,!0):de==="normalized"||de==="smallified"||de==="maximized"?v==="function"?m.call(n,n,{width:x[0],height:x[1]}):v==="object"&&m.preset===!0?(N=(x[0]-n.offsetWidth)*n.hf,n.style.left=N<=0?0:N+"px",K=(x[1]-n.offsetHeight)*n.vf,n.style.top=K<=0?0:K+"px",m.callback.call(n,n,{width:x[0],height:x[1]})):v==="boolean"&&(N=(x[0]-n.offsetWidth)*n.hf,n.style.left=N<=0?0:N+"px",K=(x[1]-n.offsetHeight)*n.vf,n.style.top=K<=0?0:K+"px"):de==="smallifiedmax"&&m&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(m=>m.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(m=>m.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(m=>m.call(n,n)):t.call(n,n)),document.dispatchEvent(a),n}};const Xd=.25,Gd=4;function Qd(e){return Math.min(Gd,Math.max(Xd,e))}function Jd(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const Rs={x:0,y:0,scale:1};function wo(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Zd(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function ef(e,t){let r={...Rs};t.style.transformOrigin="0 0";const s=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`};let n="none",a={...Rs},c=0,f=0,p=0,$=0,S=0,k=0;const z=(ne,ie)=>{const me=e.getBoundingClientRect();return{x:ne-me.left,y:ie-me.top}},M=ne=>{if(ne.touches.length===2){n="pinch",a={...r};const[ie,me]=[ne.touches[0],ne.touches[1]];p=wo(ie,me)||1;const Re=z((ie.clientX+me.clientX)/2,(ie.clientY+me.clientY)/2);$=(Re.x-r.x)/r.scale,S=(Re.y-r.y)/r.scale,ne.preventDefault();return}if(ne.touches.length===1&&!Zd(ne.target)){const ie=ne.timeStamp;if(ie-k<300){r={...Rs},s(),k=0,n="none",ne.preventDefault();return}k=ie,n="pan",a={...r},c=ne.touches[0].clientX,f=ne.touches[0].clientY}else n="none"},q=ne=>{if(n==="pan"&&ne.touches.length===1){const ie=ne.touches[0];r=Jd(a,ie.clientX-c,ie.clientY-f),s(),ne.preventDefault()}else if(n==="pinch"&&ne.touches.length>=2){const[ie,me]=[ne.touches[0],ne.touches[1]],Re=Qd(a.scale*(wo(ie,me)/p)),ae=z((ie.clientX+me.clientX)/2,(ie.clientY+me.clientY)/2);r={x:ae.x-$*Re,y:ae.y-S*Re,scale:Re},s(),ne.preventDefault()}},te=ne=>{ne.touches.length===0?n="none":ne.touches.length===1&&n==="pinch"&&(n="pan",a={...r},c=ne.touches[0].clientX,f=ne.touches[0].clientY)};return e.addEventListener("touchstart",M,{passive:!1}),e.addEventListener("touchmove",q,{passive:!1}),e.addEventListener("touchend",te),e.addEventListener("touchcancel",te),()=>{e.removeEventListener("touchstart",M),e.removeEventListener("touchmove",q),e.removeEventListener("touchend",te),e.removeEventListener("touchcancel",te)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pa=Symbol.for(""),tf=e=>{if(e?.r===pa)return e?._$litStatic$},nf=e=>({_$litStatic$:e,r:pa}),vo=new Map,rf=e=>(t,...r)=>{const s=r.length;let n,a;const c=[],f=[];let p,$=0,S=!1;for(;$<s;){for(p=t[$];$<s&&(a=r[$],(n=tf(a))!==void 0);)p+=n+t[++$],S=!0;$!==s&&f.push(a),c.push(p),$++}if($===s&&c.push(t[s]),S){const k=c.join("$$lit$$");(t=vo.get(k))===void 0&&(c.raw=c,vo.set(k,t=c)),r=f}return e(t,...r)},sf=rf(H);var of=Object.defineProperty,af=Object.getOwnPropertyDescriptor,ts=(e,t,r,s)=>{for(var n=s>1?void 0:s?af(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&of(t,r,n),n};let Lt=class extends nt{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r){return this.values=t,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(s=>{this.resolveFn=s,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),Lt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Lt.instance===this&&(Lt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(r=>r.value.toLowerCase().includes(e));return H`
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
    `}};Lt.instance=null;Lt.styles=[en,ot`
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
    `];ts([Zt({type:Array})],Lt.prototype,"values",2);ts([Zt({type:String})],Lt.prototype,"current",2);ts([ee()],Lt.prototype,"search",2);Lt=ts([dt("filter-popover")],Lt);var lf=Object.defineProperty,cf=Object.getOwnPropertyDescriptor,Nt=(e,t,r,s)=>{for(var n=s>1?void 0:s?cf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&lf(t,r,n),n};let At=class extends nt{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const s of this.options)if(s.toLowerCase().includes(t)&&(r.push(s),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return H`
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
            </button>`:ze}
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
          </ul>`:ze}
    `}};At.styles=ot`
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
  `;Nt([Zt({type:String})],At.prototype,"value",2);Nt([Zt({type:Array})],At.prototype,"options",2);Nt([Zt({type:String})],At.prototype,"placeholder",2);Nt([ee()],At.prototype,"open",2);Nt([ee()],At.prototype,"highlightIdx",2);Nt([ee()],At.prototype,"dropTop",2);Nt([ee()],At.prototype,"dropLeft",2);Nt([ee()],At.prototype,"dropMinWidth",2);Nt([ee()],At.prototype,"editing",2);Nt([Un("input")],At.prototype,"inputEl",2);At=Nt([dt("filter-combobox")],At);var uf=Object.defineProperty,df=Object.getOwnPropertyDescriptor,bt=(e,t,r,s)=>{for(var n=s>1?void 0:s?df(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&uf(t,r,n),n};let ut=class extends nt{constructor(){super(...arguments),this.tableId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;t.tableId===this.tableId&&(this.localQuery=t.query??"")}}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.()}async updated(e){e.has("tableId")&&this.tableId&&(this.unsubscribe?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells()}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",ff(t))}async bind(){if(!this.tableId)return;const e=await je(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(s=>{const n=s.find(a=>a.id===this.tableId);n&&this.applyTable(n)}),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(s=>this.rows=s);try{this.rows=await r.find()}catch(s){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${s?.message??String(s)}`,{kind:"error",title:"Load failed"})}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filters={...e.filters??{}}}async setCell(e,t,r){const s=await je();await this.commitCell(s,e,t,r)}async commitCell(e,t,r,s){const n=this.columns.find(a=>a.field===r);if(n){const a=hf(n,s,this.rows,t.id);if(a){await e.api.ui.dialogs.alert(a,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:s},updatedAt:Date.now()})}catch(a){await e.api.ui.dialogs.alert(a?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}renderCell(e,t){const r=e.data[t.field],s=t.renderer,n=s?this.cellRenderers?.get(s):void 0;if(n){const a=nf(n);return sf`<${a}
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
        />`}}async deleteRow(e){const t=await je();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await je(),s=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};await r.store.tables.patch(this.tableId,s)}filteredRows(){const e=Object.entries(this.filters).filter(([,s])=>s&&s.trim().length>0),t=this.globalQuery.trim().toLowerCase(),r=this.localQuery.trim().toLowerCase();return e.length===0&&t.length===0&&r.length===0?this.rows:this.rows.filter(s=>{const n=a=>Object.values(s.data).some(c=>c!=null&&String(c).toLowerCase().includes(a));return t.length>0&&!n(t)||r.length>0&&!n(r)?!1:e.every(([a,c])=>String(s.data[a]??"").toLowerCase().includes(c.toLowerCase()))})}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,s=this.columns.find(c=>c.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,a=[...e];return a.sort((c,f)=>gf(c.data[t],f.data[t],s)*n),a}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,s=Lt.instance;if(!s)return;const n=new Map;for(const f of this.rowsFacetedFor(t)){const p=f.data[t];if(p==null)continue;const $=String(p);n.set($,(n.get($)??0)+1)}const a=[...n.entries()].map(([f,p])=>({value:f,count:p})).sort((f,p)=>p.count-f.count||f.value.localeCompare(p.value)),c=await s.open(r.getBoundingClientRect(),a,this.filters[t]??"");c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>this.saveFilters(),250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,s])=>s&&s.trim().length>0&&r!==e).map(([r,s])=>[r,s.trim().toLowerCase()]);return t.length===0?this.rows:this.rows.filter(r=>t.every(([s,n])=>String(r.data[s]??"").toLowerCase().includes(n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,s=500;for(const n of this.visibleColumns){let a=!0;for(const f of t){const p=f.data[n.field];if(p==null)continue;if((typeof p=="string"?p:String(p)).length>=r){a=!1;break}}if(!a)continue;const c=new Set;for(const f of this.rowsFacetedFor(n.field)){const p=f.data[n.field];if(p==null||p==="")continue;const $=typeof p=="string"?p:String(p);if(!($.length>=r)&&(c.add($),c.size>=s))break}e.set(n.field,[...c].sort())}return e}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const s=r.offsetWidth;this.resizing={field:t,startX:e.clientX,startW:s};const n=c=>{if(!this.resizing)return;const f=c.clientX-this.resizing.startX,p=Math.max(40,this.resizing.startW+f);this.columns=this.columns.map($=>$.field===this.resizing.field?{...$,width:p}:$)},a=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",a);const c=this.resizing?.field;if(this.resizing=null,!c)return;await(await je()).store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",a)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const s=r.getBoundingClientRect(),n=e.clientX<s.left+s.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,s=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!s)return;const n=[...this.columns],a=n.findIndex($=>$.field===r);if(a<0)return;const[c]=n.splice(a,1);let f=n.findIndex($=>$.field===t);if(f<0){n.splice(a,0,c);return}s==="after"&&(f+=1),n.splice(f,0,c),await(await je()).store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await je(),t={};for(const[s,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[s]=n);const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,s=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,s+r);return{slice:e.slice(s,n),topPad:s*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows(),t=this.visibleColumns,{slice:r,topPad:s,bottomPad:n}=this.virtualSlice(e),a=this.computeFilterSuggestions();return H`
      <table>
        <colgroup>
          ${t.map(c=>H`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(c=>{const f=this.sortColumn===c.field&&this.sortDir,p=f==="asc"?"▲":f==="desc"?"▼":"⇅",$=`t-${c.type}`,S=this.dragSourceField===c.field,k=this.dropTargetField===c.field,z=k&&this.dropEdge==="before"?" drop-before":k&&this.dropEdge==="after"?" drop-after":"";return H`
                <th
                  class=${`${$}${f?" sorted":""}${S?" drag-source":""}${z}`}
                  title=${`${c.field} — click to sort, drag to reorder`}
                  draggable="true"
                  @click=${()=>this.toggleSort(c.field)}
                  @dragstart=${M=>this.onColDragStart(M,c.field)}
                  @dragover=${M=>this.onColDragOver(M,c.field,M.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(c.field)}
                  @drop=${M=>this.onColDrop(M,c.field)}
                  @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                >
                  ${c.label}<span class="sort-icon">${p}</span>
                  <button
                    class=${`funnel${this.filters[c.field]?" active":""}`}
                    title="Filter by value"
                    @click=${M=>this.openFilterPicker(M,c.field)}
                  >
                    <span class="mi sm">filter_list</span>
                  </button>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${M=>M.stopPropagation()}
                    @pointerdown=${M=>this.onResizeStart(M,c.field,M.currentTarget.parentElement)}
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
                    @filter-change=${p=>this.onFilterInput(c.field,p.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${s>0?H`<tr class="spacer" style=${`height:${s}px`}><td colspan=${t.length+1}></td></tr>`:""}
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
          ${n>0?H`<tr class="spacer" style=${`height:${n}px`}><td colspan=${t.length+1}></td></tr>`:""}
        </tbody>
      </table>
    `}};ut.styles=[en,ot`
    :host {
      display: block;
      overflow: auto;
      max-height: 60vh;
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
  `];bt([Zt({type:String})],ut.prototype,"tableId",2);bt([ee()],ut.prototype,"columns",2);bt([ee()],ut.prototype,"rows",2);bt([ee()],ut.prototype,"sortColumn",2);bt([ee()],ut.prototype,"sortDir",2);bt([ee()],ut.prototype,"filters",2);bt([ee()],ut.prototype,"globalQuery",2);bt([ee()],ut.prototype,"localQuery",2);bt([ee()],ut.prototype,"dragSourceField",2);bt([ee()],ut.prototype,"dropTargetField",2);bt([ee()],ut.prototype,"dropEdge",2);bt([ee()],ut.prototype,"resizing",2);bt([ee()],ut.prototype,"cellRenderers",2);bt([ee()],ut.prototype,"scrollY",2);bt([ee()],ut.prototype,"viewportHeight",2);ut=bt([dt("data-table")],ut);function ff(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function hf(e,t,r,s){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(a=>a.id!==s&&a.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function pf(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function mf(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const s=new Date(t);if(Number.isNaN(s.getTime()))return"";const n=s.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function gf(e,t,r){const s=e==null||e==="",n=t==null||t==="";if(s&&n)return 0;if(s)return 1;if(n)return-1;switch(r){case"number":{const a=Number(e),c=Number(t);return Number.isNaN(a)||Number.isNaN(c)?String(e).localeCompare(String(t)):a-c}case"boolean":return(e?1:0)-(t?1:0);case"date":{const a=new Date(String(e)).getTime(),c=new Date(String(t)).getTime();return Number.isNaN(a)||Number.isNaN(c)?String(e).localeCompare(String(t)):a-c}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}var bf=Object.defineProperty,yf=Object.getOwnPropertyDescriptor,cr=(e,t,r,s)=>{for(var n=s>1?void 0:s?yf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&bf(t,r,n),n};let An=class extends nt{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return H`<button
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
    />`}};An.styles=[en,ot`
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
    `];cr([Zt({type:String})],An.prototype,"tableId",2);cr([ee()],An.prototype,"query",2);cr([ee()],An.prototype,"open",2);cr([Un("input")],An.prototype,"inputEl",2);An=cr([dt("panel-search")],An);var wf=Object.defineProperty,vf=Object.getOwnPropertyDescriptor,ur=(e,t,r,s)=>{for(var n=s>1?void 0:s?vf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&wf(t,r,n),n};let Tn=class extends nt{constructor(){super(...arguments),this.tableId="",this.rowCount=0,this.tableButtons=[],this.table=null}async connectedCallback(){super.connectedCallback();const e=await je();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]);const t=e.store.rows(this.tableId);this.unsubRows=t.subscribe(r=>this.rowCount=r.length),this.rowCount=(await t.find()).length,this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(r=>{this.table=r.find(s=>s.id===this.tableId)??null})}disconnectedCallback(){super.disconnectedCallback(),this.unsubRows?.(),this.unsubTables?.()}async addRow(){const e=await je(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const s of t.columns)r[s.field]=xf(s);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}async runTableButton(e){const t=await je();try{await Promise.resolve(e.onClick(t.api,{tableId:this.tableId}))}catch(r){console.error(`[table-button:${e.id}]`,r)}}render(){return H`
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
    `}};Tn.styles=[en,ot`
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
  `];ur([Zt({type:String})],Tn.prototype,"tableId",2);ur([ee()],Tn.prototype,"rowCount",2);ur([ee()],Tn.prototype,"tableButtons",2);ur([ee()],Tn.prototype,"table",2);Tn=ur([dt("panel-footer")],Tn);function xf(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function $f(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}const Mn=new Map,Br=new Set,ma=new Set;let xo=!1;async function Cf(){if(xo)return;xo=!0;const e=await je(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");t&&r&&ef(t,r);const s=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);s.sort($o);for(const n of s)Co(n,e);e.store.tables.subscribe(n=>{const a=n.filter(p=>p.workspaceId===e.workspaceId),c=new Set(a.map(p=>p.id));for(const[p,$]of Mn)if(!c.has(p)){Mn.delete(p),Br.add(p),ma.add(p);try{$.status!=="closed"&&$.close()}catch{}}const f=a.filter(p=>!Mn.has(p.id)).sort($o);for(const p of f)Co(p,e)})}function $o(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const Ef=200,kf=100,Sf=720,_f=360,ga=34;function Pf(e,t){if(!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||e.w<Ef||e.h<kf)return null;const r=t.getBoundingClientRect();if(e.w>r.width)return null;const s=Math.max(0,Math.min(e.x,r.width-e.w)),n=Math.max(0,Math.min(e.y,r.height-ga));return{...e,x:s,y:n}}function Af(e,t){const r=t.clientWidth,s=t.clientHeight,n=e.offsetWidth,c=e.querySelector(".jsPanel-titlebar")?.offsetHeight||ga,f=parseFloat(e.style.left)||e.offsetLeft||0,p=parseFloat(e.style.top)||e.offsetTop||0,$=Math.max(0,Math.min(f,r-n)),S=Math.max(0,Math.min(p,s-c));$!==f&&(e.style.left=`${$}px`),S!==p&&(e.style.top=`${S}px`)}function Co(e,t){const r=document.createElement("data-table");r.tableId=e.id,r.style.height="100%";const s=document.createElement("panel-search");s.tableId=e.id;const n=document.createElement("panel-footer");n.tableId=e.id;const a=$f(),c=Pf(e.windowGeometry,a),f=`panel-${ba(e.id)}`,p=c?{my:"left-top",at:"left-top",offsetX:c.x,offsetY:c.y}:Df(),$=c?{panelSize:`${c.w} ${c.h}`}:{contentSize:`${Sf} ${_f}`},S=F.create({id:f,container:a,headerTitle:e.name,footerToolbar:n,theme:"primary",content:r,...$,position:p,minimizeTo:"parent",dragit:{containment:!1,drag:ie=>Af(ie,a),stop:()=>zs(e.id,t)},resizeit:{containment:!1,stop:()=>zs(e.id,t)},onfronted:()=>jf(e.id,t),onbeforeclose:()=>Br.has(e.id)?!0:((async()=>await t.api.ui.dialogs.confirm(e.source?`Remove the live table "${e.name}"? Its data stays on the Datasette server.`:`Delete table "${e.name}" and all its rows?`,"Confirm")&&(Br.add(e.id),Mn.get(e.id)?.close()))(),!1),onclosed:async()=>{Mn.delete(e.id),Br.delete(e.id),!ma.delete(e.id)&&await Ff(e.id,t)},onstatuschange:()=>zs(e.id,t)});Mn.set(e.id,S);const z=document.getElementById(f)?.querySelector(".jsPanel-controlbar");z&&z.prepend(s),c?.maximized&&typeof S.maximize=="function"?queueMicrotask(()=>S.maximize?.()):c?.minimized&&typeof S.minimize=="function"&&queueMicrotask(()=>S.minimize?.());let M=e.name,q=null;const te=ie=>{typeof S.setHeaderTitle=="function"&&S.setHeaderTitle(`${M} (${ie})`)};t.store.rows(e.id).find().then(ie=>te(ie.length)),q=t.store.rows(e.id).subscribe(ie=>te(ie.length)),t.store.tables.subscribe(ie=>{const me=ie.find(Re=>Re.id===e.id);me&&me.name!==M&&(M=me.name)});const ne=S.close.bind(S);S.close=()=>(q?.(),ne())}let Tf=0;function Df(){const e=Tf++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function zs(e,t){const r=document.getElementById(`panel-${ba(e)}`);if(!r)return;const s=r.dataset.status??"normalized";try{const a=(await t.store.tables.findOne(e))?.windowGeometry?.z??0,c={x:r.offsetLeft,y:r.offsetTop,w:r.offsetWidth,h:r.offsetHeight,z:a,minimized:s==="minimized",maximized:s==="maximized"};await t.store.tables.patch(e,{windowGeometry:c,updatedAt:Date.now()})}catch{}}async function jf(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const s=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...s,z:Date.now()},updatedAt:Date.now()})}catch{}}async function Ff(e,t){if(!(await t.store.tables.findOne(e))?.source){const s=t.store.rows(e),n=await s.find();await s.bulkRemove(n.map(a=>a.id))}await t.store.tables.remove(e)}function ba(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var Of=Object.defineProperty,Rf=Object.getOwnPropertyDescriptor,ya=(e,t,r,s)=>{for(var n=s>1?void 0:s?Rf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Of(t,r,n),n};let Hr=class extends nt{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await je();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(s=>s.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await Cf()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?H``:H`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on
      the page, or click <strong>+ New Table</strong> above.
    </div>`}};Hr.styles=ot`
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
  `;ya([ee()],Hr.prototype,"tables",2);Hr=ya([dt("table-list")],Hr);var zf=Object.defineProperty,If=Object.getOwnPropertyDescriptor,ii=(e,t,r,s)=>{for(var n=s>1?void 0:s?If(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&zf(t,r,n),n};let ir=class extends nt{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await je();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const s=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(s)}async addWorkspace(){const t=await(await je()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return H`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>H`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};ir.styles=[en,ot`
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
  `];ii([ee()],ir.prototype,"workspaces",2);ii([ee()],ir.prototype,"current",2);ir=ii([dt("workspace-selector")],ir);var Eo=Object.freeze,wa=Object.defineProperty,Lf=Object.getOwnPropertyDescriptor,tn=(e,t,r,s)=>{for(var n=s>1?void 0:s?Lf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&wa(t,r,n),n},Bf=(e,t)=>Eo(wa(e,"raw",{value:Eo(e.slice())})),ko;function Mf(e){return e?e.trimStart().startsWith("<svg")?H`<span class="icon-svg">${vl(e)}</span>`:H`<span class="mi sm">${e}</span>`:""}let Bt=class extends nt{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId)},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>{document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:this.searchQuery}}))},200)},this.onDragOver=e=>{So(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!So(e))return;e.preventDefault();const t=await je(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const s of[...t.registries.dropHandlers])try{if(await s(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=e=>{this.api&&Promise.resolve(e.onClick(this.api)).catch(t=>{console.error(`[footer-button:${e.id}]`,t)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager)}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}async bindRegistries(){const e=await je();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e))}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){const r=t==="header"||e.variant==="primary"?"primary":"slot";return H`
      <button class=${r} title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
        ${Mf(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return H(ko||(ko=Bf([`
      <header>
        <strong>easyDBAccess <span class="version">v0.0.30</span></strong>
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
            </button>`,this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Bt.styles=[en,ot`
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
    `];tn([Un("new-table-dialog")],Bt.prototype,"dialog",2);tn([Un("csv-paste-dialog")],Bt.prototype,"csvPasteDialog",2);tn([Un("plugin-manager-dialog")],Bt.prototype,"pluginManagerDialog",2);tn([Un("input.search")],Bt.prototype,"searchInput",2);tn([ee()],Bt.prototype,"footerButtons",2);tn([ee()],Bt.prototype,"headerButtons",2);tn([ee()],Bt.prototype,"searchQuery",2);tn([ee()],Bt.prototype,"searchOpen",2);Bt=tn([dt("app-shell")],Bt);function So(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([je(),Ha(()=>Promise.resolve().then(()=>da),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});
//# sourceMappingURL=index-DU_ERvRg.js.map
