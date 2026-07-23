(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const La="modulepreload",Ma=function(e){return"/easydbaccess2/"+e},Fs={},Na=function(t,r,s){let n=Promise.resolve();if(r&&r.length>0){let c=function(k){return Promise.all(k.map(S=>Promise.resolve(S).then(j=>({status:"fulfilled",value:j}),j=>({status:"rejected",reason:j}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),m=f?.nonce||f?.getAttribute("nonce");n=c(r.map(k=>{if(k=Ma(k),k in Fs)return;Fs[k]=!0;const S=k.endsWith(".css"),j=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${k}"]${j}`))return;const B=document.createElement("link");if(B.rel=S?"stylesheet":La,S||(B.as="script"),B.crossOrigin="",B.href=k,m&&B.setAttribute("nonce",m),document.head.appendChild(B),S)return new Promise((M,q)=>{B.addEventListener("load",M),B.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${k}`)))})}))}function a(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return n.then(c=>{for(const f of c||[])f.status==="rejected"&&a(f.reason);return t().catch(a)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tr=globalThis,Wi=Tr.ShadowRoot&&(Tr.ShadyCSS===void 0||Tr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hi=Symbol(),Os=new WeakMap;let Eo=class{constructor(t,r,s){if(this._$cssResult$=!0,s!==Hi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Wi&&t===void 0){const s=r!==void 0&&r.length===1;s&&(t=Os.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Os.set(r,t))}return t}toString(){return this.cssText}};const qa=e=>new Eo(typeof e=="string"?e:e+"",void 0,Hi),it=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((s,n,a)=>s+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[a+1],e[0]);return new Eo(r,e,Hi)},Ua=(e,t)=>{if(Wi)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const s=document.createElement("style"),n=Tr.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=r.cssText,e.appendChild(s)}},Rs=Wi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return qa(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Wa,defineProperty:Ha,getOwnPropertyDescriptor:Ka,getOwnPropertyNames:Va,getOwnPropertySymbols:Ya,getPrototypeOf:Ga}=Object,Mr=globalThis,zs=Mr.trustedTypes,Xa=zs?zs.emptyScript:"",Qa=Mr.reactiveElementPolyfillSupport,Xn=(e,t)=>e,Or={toAttribute(e,t){switch(t){case Boolean:e=e?Xa:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ki=(e,t)=>!Wa(e,t),Is={attribute:!0,type:String,converter:Or,reflect:!1,useDefault:!1,hasChanged:Ki};Symbol.metadata??=Symbol("metadata"),Mr.litPropertyMetadata??=new WeakMap;let Fn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Is){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(t,s,r);n!==void 0&&Ha(this.prototype,t,n)}}static getPropertyDescriptor(t,r,s){const{get:n,set:a}=Ka(this.prototype,t)??{get(){return this[r]},set(c){this[r]=c}};return{get:n,set(c){const f=n?.call(this);a?.call(this,c),this.requestUpdate(t,f,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Is}static _$Ei(){if(this.hasOwnProperty(Xn("elementProperties")))return;const t=Ga(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Xn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xn("properties"))){const r=this.properties,s=[...Va(r),...Ya(r)];for(const n of s)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[s,n]of r)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[r,s]of this.elementProperties){const n=this._$Eu(r,s);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const n of s)r.unshift(Rs(n))}else t!==void 0&&r.push(Rs(t));return r}static _$Eu(t,r){const s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const s of r.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ua(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,s){this._$AK(t,s)}_$ET(t,r){const s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(n!==void 0&&s.reflect===!0){const a=(s.converter?.toAttribute!==void 0?s.converter:Or).toAttribute(r,s.type);this._$Em=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,r){const s=this.constructor,n=s._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const a=s.getPropertyOptions(n),c=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Or;this._$Em=n;const f=c.fromAttribute(r,a.type);this[n]=f??this._$Ej?.get(n)??f,this._$Em=null}}requestUpdate(t,r,s,n=!1,a){if(t!==void 0){const c=this.constructor;if(n===!1&&(a=this[t]),s??=c.getPropertyOptions(t),!((s.hasChanged??Ki)(a,r)||s.useDefault&&s.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(c._$Eu(t,s))))return;this.C(t,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:s,reflect:n,wrapped:a},c){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,c??r??this[t]),a!==!0||c!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s){const{wrapped:c}=a,f=this[n];c!==!0||this._$AL.has(n)||f===void 0||this.C(n,void 0,a,f)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(r)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Fn.elementStyles=[],Fn.shadowRootOptions={mode:"open"},Fn[Xn("elementProperties")]=new Map,Fn[Xn("finalized")]=new Map,Qa?.({ReactiveElement:Fn}),(Mr.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vi=globalThis,Bs=e=>e,Rr=Vi.trustedTypes,Ls=Rr?Rr.createPolicy("lit-html",{createHTML:e=>e}):void 0,ko="$lit$",cn=`lit$${Math.random().toFixed(9).slice(2)}$`,So="?"+cn,Ja=`<${So}>`,Cn=document,Qn=()=>Cn.createComment(""),Jn=e=>e===null||typeof e!="object"&&typeof e!="function",Yi=Array.isArray,Za=e=>Yi(e)||typeof e?.[Symbol.iterator]=="function",Ai=`[ 	
\f\r]`,Gn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ms=/-->/g,Ns=/>/g,vn=RegExp(`>|${Ai}(?:([^\\s"'>=/]+)(${Ai}*=${Ai}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qs=/'/g,Us=/"/g,_o=/^(?:script|style|textarea|title)$/i,el=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),V=el(1),En=Symbol.for("lit-noChange"),Ne=Symbol.for("lit-nothing"),Ws=new WeakMap,$n=Cn.createTreeWalker(Cn,129);function Ao(e,t){if(!Yi(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ls!==void 0?Ls.createHTML(t):t}const tl=(e,t)=>{const r=e.length-1,s=[];let n,a=t===2?"<svg>":t===3?"<math>":"",c=Gn;for(let f=0;f<r;f++){const m=e[f];let k,S,j=-1,B=0;for(;B<m.length&&(c.lastIndex=B,S=c.exec(m),S!==null);)B=c.lastIndex,c===Gn?S[1]==="!--"?c=Ms:S[1]!==void 0?c=Ns:S[2]!==void 0?(_o.test(S[2])&&(n=RegExp("</"+S[2],"g")),c=vn):S[3]!==void 0&&(c=vn):c===vn?S[0]===">"?(c=n??Gn,j=-1):S[1]===void 0?j=-2:(j=c.lastIndex-S[2].length,k=S[1],c=S[3]===void 0?vn:S[3]==='"'?Us:qs):c===Us||c===qs?c=vn:c===Ms||c===Ns?c=Gn:(c=vn,n=void 0);const M=c===vn&&e[f+1].startsWith("/>")?" ":"";a+=c===Gn?m+Ja:j>=0?(s.push(k),m.slice(0,j)+ko+m.slice(j)+cn+M):m+cn+(j===-2?f:M)}return[Ao(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class Zn{constructor({strings:t,_$litType$:r},s){let n;this.parts=[];let a=0,c=0;const f=t.length-1,m=this.parts,[k,S]=tl(t,r);if(this.el=Zn.createElement(k,s),$n.currentNode=this.el.content,r===2||r===3){const j=this.el.content.firstChild;j.replaceWith(...j.childNodes)}for(;(n=$n.nextNode())!==null&&m.length<f;){if(n.nodeType===1){if(n.hasAttributes())for(const j of n.getAttributeNames())if(j.endsWith(ko)){const B=S[c++],M=n.getAttribute(j).split(cn),q=/([.?@])?(.*)/.exec(B);m.push({type:1,index:a,name:q[2],strings:M,ctor:q[1]==="."?rl:q[1]==="?"?il:q[1]==="@"?sl:Nr}),n.removeAttribute(j)}else j.startsWith(cn)&&(m.push({type:6,index:a}),n.removeAttribute(j));if(_o.test(n.tagName)){const j=n.textContent.split(cn),B=j.length-1;if(B>0){n.textContent=Rr?Rr.emptyScript:"";for(let M=0;M<B;M++)n.append(j[M],Qn()),$n.nextNode(),m.push({type:2,index:++a});n.append(j[B],Qn())}}}else if(n.nodeType===8)if(n.data===So)m.push({type:2,index:a});else{let j=-1;for(;(j=n.data.indexOf(cn,j+1))!==-1;)m.push({type:7,index:a}),j+=cn.length-1}a++}}static createElement(t,r){const s=Cn.createElement("template");return s.innerHTML=t,s}}function Rn(e,t,r=e,s){if(t===En)return t;let n=s!==void 0?r._$Co?.[s]:r._$Cl;const a=Jn(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),a===void 0?n=void 0:(n=new a(e),n._$AT(e,r,s)),s!==void 0?(r._$Co??=[])[s]=n:r._$Cl=n),n!==void 0&&(t=Rn(e,n._$AS(e,t.values),n,s)),t}class nl{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:s}=this._$AD,n=(t?.creationScope??Cn).importNode(r,!0);$n.currentNode=n;let a=$n.nextNode(),c=0,f=0,m=s[0];for(;m!==void 0;){if(c===m.index){let k;m.type===2?k=new tr(a,a.nextSibling,this,t):m.type===1?k=new m.ctor(a,m.name,m.strings,this,t):m.type===6&&(k=new ol(a,this,t)),this._$AV.push(k),m=s[++f]}c!==m?.index&&(a=$n.nextNode(),c++)}return $n.currentNode=Cn,n}p(t){let r=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,r),r+=s.strings.length-2):s._$AI(t[r])),r++}}class tr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,s,n){this.type=2,this._$AH=Ne,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=s,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Rn(this,t,r),Jn(t)?t===Ne||t==null||t===""?(this._$AH!==Ne&&this._$AR(),this._$AH=Ne):t!==this._$AH&&t!==En&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Za(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Ne&&Jn(this._$AH)?this._$AA.nextSibling.data=t:this.T(Cn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Zn.createElement(Ao(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(r);else{const a=new nl(n,this),c=a.u(this.options);a.p(r),this.T(c),this._$AH=a}}_$AC(t){let r=Ws.get(t.strings);return r===void 0&&Ws.set(t.strings,r=new Zn(t)),r}k(t){Yi(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,n=0;for(const a of t)n===r.length?r.push(s=new tr(this.O(Qn()),this.O(Qn()),this,this.options)):s=r[n],s._$AI(a),n++;n<r.length&&(this._$AR(s&&s._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const s=Bs(t).nextSibling;Bs(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Nr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,s,n,a){this.type=1,this._$AH=Ne,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Ne}_$AI(t,r=this,s,n){const a=this.strings;let c=!1;if(a===void 0)t=Rn(this,t,r,0),c=!Jn(t)||t!==this._$AH&&t!==En,c&&(this._$AH=t);else{const f=t;let m,k;for(t=a[0],m=0;m<a.length-1;m++)k=Rn(this,f[s+m],r,m),k===En&&(k=this._$AH[m]),c||=!Jn(k)||k!==this._$AH[m],k===Ne?t=Ne:t!==Ne&&(t+=(k??"")+a[m+1]),this._$AH[m]=k}c&&!n&&this.j(t)}j(t){t===Ne?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rl extends Nr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ne?void 0:t}}class il extends Nr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Ne)}}class sl extends Nr{constructor(t,r,s,n,a){super(t,r,s,n,a),this.type=5}_$AI(t,r=this){if((t=Rn(this,t,r,0)??Ne)===En)return;const s=this._$AH,n=t===Ne&&s!==Ne||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==Ne&&(s===Ne||n);n&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ol{constructor(t,r,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Rn(this,t)}}const al=Vi.litHtmlPolyfillSupport;al?.(Zn,tr),(Vi.litHtmlVersions??=[]).push("3.3.3");const ll=(e,t,r)=>{const s=r?.renderBefore??t;let n=s._$litPart$;if(n===void 0){const a=r?.renderBefore??null;s._$litPart$=n=new tr(t.insertBefore(Qn(),a),a,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gi=globalThis;let Ze=class extends Fn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ll(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return En}};Ze._$litElement$=!0,Ze.finalized=!0,Gi.litElementHydrateSupport?.({LitElement:Ze});const cl=Gi.litElementPolyfillSupport;cl?.({LitElement:Ze});(Gi.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ul={attribute:!0,type:String,converter:Or,reflect:!1,hasChanged:Ki},dl=(e=ul,t,r)=>{const{kind:s,metadata:n}=r;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),s==="accessor"){const{name:c}=r;return{set(f){const m=t.get.call(this);t.set.call(this,f),this.requestUpdate(c,m,e,!0,f)},init(f){return f!==void 0&&this.C(c,void 0,e,f),f}}}if(s==="setter"){const{name:c}=r;return function(f){const m=this[c];t.call(this,f),this.requestUpdate(c,m,e,!0,f)}}throw Error("Unsupported decorator location: "+s)};function Jt(e){return(t,r)=>typeof r=="object"?dl(e,t,r):((s,n,a)=>{const c=n.hasOwnProperty(a);return n.constructor.createProperty(a,s),c?Object.getOwnPropertyDescriptor(n,a):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ee(e){return Jt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fl=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qr(e,t){return(r,s,n)=>{const a=c=>c.renderRoot?.querySelector(e)??null;return fl(r,s,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hl={CHILD:2},pl=e=>(...t)=>({_$litDirective$:e,values:t});class ml{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,s){this._$Ct=t,this._$AM=r,this._$Ci=s}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Oi extends ml{constructor(t){if(super(t),this.it=Ne,t.type!==hl.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Ne||t==null)return this._t=void 0,this.it=t;if(t===En)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Oi.directiveName="unsafeHTML",Oi.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ri extends Oi{}Ri.directiveName="unsafeSVG",Ri.resultType=2;const gl=pl(Ri);var bl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dr={exports:{}},wl=Dr.exports,Hs;function vl(){return Hs||(Hs=1,(function(e,t){(function(r,s){e.exports=s()})(wl,function(){var r=function(i,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,u){l.__proto__=u}||function(l,u){for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(l[d]=u[d])})(i,o)},s=function(){return(s=Object.assign||function(i){for(var o,l=1,u=arguments.length;l<u;l++)for(var d in o=arguments[l])Object.prototype.hasOwnProperty.call(o,d)&&(i[d]=o[d]);return i}).apply(this,arguments)};function n(i,o,l){for(var u,d=0,h=o.length;d<h;d++)!u&&d in o||((u=u||Array.prototype.slice.call(o,0,d))[d]=o[d]);return i.concat(u||Array.prototype.slice.call(o))}var a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:bl,c=Object.keys,f=Array.isArray;function m(i,o){return typeof o!="object"||c(o).forEach(function(l){i[l]=o[l]}),i}typeof Promise>"u"||a.Promise||(a.Promise=Promise);var k=Object.getPrototypeOf,S={}.hasOwnProperty;function j(i,o){return S.call(i,o)}function B(i,o){typeof o=="function"&&(o=o(k(i))),(typeof Reflect>"u"?c:Reflect.ownKeys)(o).forEach(function(l){q(i,l,o[l])})}var M=Object.defineProperty;function q(i,o,l,u){M(i,o,m(l&&j(l,"get")&&typeof l.get=="function"?{get:l.get,set:l.set,configurable:!0}:{value:l,configurable:!0,writable:!0},u))}function ne(i){return{from:function(o){return i.prototype=Object.create(o.prototype),q(i.prototype,"constructor",i),{extend:B.bind(null,i.prototype)}}}}var ue=Object.getOwnPropertyDescriptor,$e=[].slice;function ie(i,o,l){return $e.call(i,o,l)}function pe(i,o){return o(i)}function Fe(i){if(!i)throw new Error("Assertion Failed")}function vt(i){a.setImmediate?setImmediate(i):setTimeout(i,0)}function bt(i,o){if(typeof o=="string"&&j(i,o))return i[o];if(!o)return i;if(typeof o!="string"){for(var l=[],u=0,d=o.length;u<d;++u){var h=bt(i,o[u]);l.push(h)}return l}var g=o.indexOf(".");if(g!==-1){var y=i[o.substr(0,g)];return y==null?void 0:bt(y,o.substr(g+1))}}function et(i,o,l){if(i&&o!==void 0&&!("isFrozen"in Object&&Object.isFrozen(i)))if(typeof o!="string"&&"length"in o){Fe(typeof l!="string"&&"length"in l);for(var u=0,d=o.length;u<d;++u)et(i,o[u],l[u])}else{var h,g,y=o.indexOf(".");y!==-1?(h=o.substr(0,y),(g=o.substr(y+1))===""?l===void 0?f(i)&&!isNaN(parseInt(h))?i.splice(h,1):delete i[h]:i[h]=l:et(y=!(y=i[h])||!j(i,h)?i[h]={}:y,g,l)):l===void 0?f(i)&&!isNaN(parseInt(o))?i.splice(o,1):delete i[o]:i[o]=l}}function Kt(i){var o,l={};for(o in i)j(i,o)&&(l[o]=i[o]);return l}var ir=[].concat;function _n(i){return ir.apply([],i)}var Gt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(_n([8,16,32,64].map(function(i){return["Int","Uint","Float"].map(function(o){return o+i+"Array"})}))).filter(function(i){return a[i]}),p=new Set(Gt.map(function(i){return a[i]})),v=null;function O(i){return v=new WeakMap,i=(function o(l){if(!l||typeof l!="object")return l;var u=v.get(l);if(u)return u;if(f(l)){u=[],v.set(l,u);for(var d=0,h=l.length;d<h;++d)u.push(o(l[d]))}else if(p.has(l.constructor))u=l;else{var g,y=k(l);for(g in u=y===Object.prototype?{}:Object.create(y),v.set(l,u),l)j(l,g)&&(u[g]=o(l[g]))}return u})(i),v=null,i}var b={}.toString;function x(i){return b.call(i).slice(8,-1)}var oe=typeof Symbol<"u"?Symbol.iterator:"@@iterator",ce=typeof oe=="symbol"?function(i){var o;return i!=null&&(o=i[oe])&&o.apply(i)}:function(){return null};function N(i,o){return o=i.indexOf(o),0<=o&&i.splice(o,1),0<=o}var H={};function qe(i){var o,l,u,d;if(arguments.length===1){if(f(i))return i.slice();if(this===H&&typeof i=="string")return[i];if(d=ce(i)){for(l=[];!(u=d.next()).done;)l.push(u.value);return l}if(i==null)return[i];if(typeof(o=i.length)!="number")return[i];for(l=new Array(o);o--;)l[o]=i[o];return l}for(o=arguments.length,l=new Array(o);o--;)l[o]=arguments[o];return l}var tt=typeof Symbol<"u"?function(i){return i[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},ve=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Pt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(ve),Mt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function ze(i,o){this.name=i,this.message=o}function Te(i,o){return i+". Errors: "+Object.keys(o).map(function(l){return o[l].toString()}).filter(function(l,u,d){return d.indexOf(l)===u}).join(`
`)}function ye(i,o,l,u){this.failures=o,this.failedKeys=u,this.successCount=l,this.message=Te(i,o)}function ke(i,o){this.name="BulkError",this.failures=Object.keys(o).map(function(l){return o[l]}),this.failuresByPos=o,this.message=Te(i,this.failures)}ne(ze).from(Error).extend({toString:function(){return this.name+": "+this.message}}),ne(ye).from(ze),ne(ke).from(ze);var Ue=Pt.reduce(function(i,o){return i[o]=o+"Error",i},{}),Ce=ze,J=Pt.reduce(function(i,o){var l=o+"Error";function u(d,h){this.name=l,d?typeof d=="string"?(this.message="".concat(d).concat(h?`
 `+h:""),this.inner=h||null):typeof d=="object"&&(this.message="".concat(d.name," ").concat(d.message),this.inner=d):(this.message=Mt[o]||l,this.inner=null)}return ne(u).from(Ce),i[o]=u,i},{});J.Syntax=SyntaxError,J.Type=TypeError,J.Range=RangeError;var We=ve.reduce(function(i,o){return i[o+"Error"]=J[o],i},{}),De=Pt.reduce(function(i,o){return["Syntax","Type","Range"].indexOf(o)===-1&&(i[o+"Error"]=J[o]),i},{});function le(){}function me(i){return i}function xt(i,o){return i==null||i===me?o:function(l){return o(i(l))}}function se(i,o){return function(){i.apply(this,arguments),o.apply(this,arguments)}}function He(i,o){return i===le?o:function(){var l=i.apply(this,arguments);l!==void 0&&(arguments[0]=l);var u=this.onsuccess,d=this.onerror;this.onsuccess=null,this.onerror=null;var h=o.apply(this,arguments);return u&&(this.onsuccess=this.onsuccess?se(u,this.onsuccess):u),d&&(this.onerror=this.onerror?se(d,this.onerror):d),h!==void 0?h:l}}function en(i,o){return i===le?o:function(){i.apply(this,arguments);var l=this.onsuccess,u=this.onerror;this.onsuccess=this.onerror=null,o.apply(this,arguments),l&&(this.onsuccess=this.onsuccess?se(l,this.onsuccess):l),u&&(this.onerror=this.onerror?se(u,this.onerror):u)}}function Ot(i,o){return i===le?o:function(l){var u=i.apply(this,arguments);m(l,u);var d=this.onsuccess,h=this.onerror;return this.onsuccess=null,this.onerror=null,l=o.apply(this,arguments),d&&(this.onsuccess=this.onsuccess?se(d,this.onsuccess):d),h&&(this.onerror=this.onerror?se(h,this.onerror):h),u===void 0?l===void 0?void 0:l:m(u,l)}}function Ve(i,o){return i===le?o:function(){return o.apply(this,arguments)!==!1&&i.apply(this,arguments)}}function $t(i,o){return i===le?o:function(){var l=i.apply(this,arguments);if(l&&typeof l.then=="function"){for(var u=this,d=arguments.length,h=new Array(d);d--;)h[d]=arguments[d];return l.then(function(){return o.apply(u,h)})}return o.apply(this,arguments)}}De.ModifyError=ye,De.DexieError=ze,De.BulkError=ke;var Ae=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ie(i){Ae=i}var mt={},Ye=100,Gt=typeof Promise>"u"?[]:(function(){var i=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[i,k(i),i];var o=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[o,k(o),i]})(),ve=Gt[0],Pt=Gt[1],Gt=Gt[2],Pt=Pt&&Pt.then,we=ve&&ve.constructor,Ct=!!Gt,Be=function(i,o){Xe.push([i,o]),nt&&(queueMicrotask(de),nt=!1)},ut=!0,nt=!0,Ge=[],Oe=[],ae=me,Ke={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:le,pgp:!1,env:{},finalize:le},Y=Ke,Xe=[],st=0,yt=[];function G(i){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var o=this._PSD=Y;if(typeof i!="function"){if(i!==mt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&rt(this,this._value))}this._state=null,this._value=null,++o.ref,(function l(u,d){try{d(function(h){if(u._state===null){if(h===u)throw new TypeError("A promise cannot be resolved with itself.");var g=u._lib&&Pe();h&&typeof h.then=="function"?l(u,function(y,$){h instanceof G?h._then(y,$):h.then(y,$)}):(u._state=!0,u._value=h,tn(u)),g&&Le()}},rt.bind(null,u))}catch(h){rt(u,h)}})(this,i)}var Nt={get:function(){var i=Y,o=ar;function l(u,d){var h=this,g=!i.global&&(i!==Y||o!==ar),y=g&&!rn(),$=new G(function(E,P){te(h,new Vt(ss(u,i,g,y),ss(d,i,g,y),E,P,i))});return this._consoleTask&&($._consoleTask=this._consoleTask),$}return l.prototype=mt,l},set:function(i){q(this,"then",i&&i.prototype===mt?Nt:{get:function(){return i},set:Nt.set})}};function Vt(i,o,l,u,d){this.onFulfilled=typeof i=="function"?i:null,this.onRejected=typeof o=="function"?o:null,this.resolve=l,this.reject=u,this.psd=d}function rt(i,o){var l,u;Oe.push(o),i._state===null&&(l=i._lib&&Pe(),o=ae(o),i._state=!1,i._value=o,u=i,Ge.some(function(d){return d._value===u._value})||Ge.push(u),tn(i),l&&Le())}function tn(i){var o=i._listeners;i._listeners=[];for(var l=0,u=o.length;l<u;++l)te(i,o[l]);var d=i._PSD;--d.ref||d.finalize(),st===0&&(++st,Be(function(){--st==0&&Se()},[]))}function te(i,o){if(i._state!==null){var l=i._state?o.onFulfilled:o.onRejected;if(l===null)return(i._state?o.resolve:o.reject)(i._value);++o.psd.ref,++st,Be(Ee,[l,i,o])}else i._listeners.push(o)}function Ee(i,o,l){try{var u,d=o._value;!o._state&&Oe.length&&(Oe=[]),u=Ae&&o._consoleTask?o._consoleTask.run(function(){return i(d)}):i(d),o._state||Oe.indexOf(d)!==-1||(function(h){for(var g=Ge.length;g;)if(Ge[--g]._value===h._value)return Ge.splice(g,1)})(o),l.resolve(u)}catch(h){l.reject(h)}finally{--st==0&&Se(),--l.psd.ref||l.psd.finalize()}}function de(){pn(Ke,function(){Pe()&&Le()})}function Pe(){var i=ut;return nt=ut=!1,i}function Le(){var i,o,l;do for(;0<Xe.length;)for(i=Xe,Xe=[],l=i.length,o=0;o<l;++o){var u=i[o];u[0].apply(null,u[1])}while(0<Xe.length);nt=ut=!0}function Se(){var i=Ge;Ge=[],i.forEach(function(u){u._PSD.onunhandled.call(null,u._value,u)});for(var o=yt.slice(0),l=o.length;l;)o[--l]()}function Rt(i){return new G(mt,!1,i)}function Re(i,o){var l=Y;return function(){var u=Pe(),d=Y;try{return sn(l,!0),i.apply(this,arguments)}catch(h){o&&o(h)}finally{sn(d,!1),u&&Le()}}}B(G.prototype,{then:Nt,_then:function(i,o){te(this,new Vt(null,null,i,o,Y))},catch:function(i){if(arguments.length===1)return this.then(null,i);var o=i,l=arguments[1];return typeof o=="function"?this.then(null,function(u){return(u instanceof o?l:Rt)(u)}):this.then(null,function(u){return(u&&u.name===o?l:Rt)(u)})},finally:function(i){return this.then(function(o){return G.resolve(i()).then(function(){return o})},function(o){return G.resolve(i()).then(function(){return Rt(o)})})},timeout:function(i,o){var l=this;return i<1/0?new G(function(u,d){var h=setTimeout(function(){return d(new J.Timeout(o))},i);l.then(u,d).finally(clearTimeout.bind(null,h))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&q(G.prototype,Symbol.toStringTag,"Dexie.Promise"),Ke.env=is(),B(G,{all:function(){var i=qe.apply(null,arguments).map(lr);return new G(function(o,l){i.length===0&&o([]);var u=i.length;i.forEach(function(d,h){return G.resolve(d).then(function(g){i[h]=g,--u||o(i)},l)})})},resolve:function(i){return i instanceof G?i:i&&typeof i.then=="function"?new G(function(o,l){i.then(o,l)}):new G(mt,!0,i)},reject:Rt,race:function(){var i=qe.apply(null,arguments).map(lr);return new G(function(o,l){i.map(function(u){return G.resolve(u).then(o,l)})})},PSD:{get:function(){return Y},set:function(i){return Y=i}},totalEchoes:{get:function(){return ar}},newPSD:nn,usePSD:pn,scheduler:{get:function(){return Be},set:function(i){Be=i}},rejectionMapper:{get:function(){return ae},set:function(i){ae=i}},follow:function(i,o){return new G(function(l,u){return nn(function(d,h){var g=Y;g.unhandleds=[],g.onunhandled=h,g.finalize=se(function(){var y,$=this;y=function(){$.unhandleds.length===0?d():h($.unhandleds[0])},yt.push(function E(){y(),yt.splice(yt.indexOf(E),1)}),++st,Be(function(){--st==0&&Se()},[])},g.finalize),i()},o,l,u)})}}),we&&(we.allSettled&&q(G,"allSettled",function(){var i=qe.apply(null,arguments).map(lr);return new G(function(o){i.length===0&&o([]);var l=i.length,u=new Array(l);i.forEach(function(d,h){return G.resolve(d).then(function(g){return u[h]={status:"fulfilled",value:g}},function(g){return u[h]={status:"rejected",reason:g}}).then(function(){return--l||o(u)})})})}),we.any&&typeof AggregateError<"u"&&q(G,"any",function(){var i=qe.apply(null,arguments).map(lr);return new G(function(o,l){i.length===0&&l(new AggregateError([]));var u=i.length,d=new Array(u);i.forEach(function(h,g){return G.resolve(h).then(function(y){return o(y)},function(y){d[g]=y,--u||l(new AggregateError(d))})})})}),we.withResolvers&&(G.withResolvers=we.withResolvers));var ot={awaits:0,echoes:0,id:0},ga=0,sr=[],or=0,ar=0,ba=0;function nn(i,o,l,u){var d=Y,h=Object.create(d);return h.parent=d,h.ref=0,h.global=!1,h.id=++ba,Ke.env,h.env=Ct?{Promise:G,PromiseProp:{value:G,configurable:!0,writable:!0},all:G.all,race:G.race,allSettled:G.allSettled,any:G.any,resolve:G.resolve,reject:G.reject}:{},o&&m(h,o),++d.ref,h.finalize=function(){--this.parent.ref||this.parent.finalize()},u=pn(h,i,l,u),h.ref===0&&h.finalize(),u}function An(){return ot.id||(ot.id=++ga),++ot.awaits,ot.echoes+=Ye,ot.id}function rn(){return!!ot.awaits&&(--ot.awaits==0&&(ot.id=0),ot.echoes=ot.awaits*Ye,!0)}function lr(i){return ot.echoes&&i&&i.constructor===we?(An(),i.then(function(o){return rn(),o},function(o){return rn(),Qe(o)})):i}function ya(){var i=sr[sr.length-1];sr.pop(),sn(i,!1)}function sn(i,o){var l,u=Y;(o?!ot.echoes||or++&&i===Y:!or||--or&&i===Y)||queueMicrotask(o?function(d){++ar,ot.echoes&&--ot.echoes!=0||(ot.echoes=ot.awaits=ot.id=0),sr.push(Y),sn(d,!0)}.bind(null,i):ya),i!==Y&&(Y=i,u===Ke&&(Ke.env=is()),Ct&&(l=Ke.env.Promise,o=i.env,(u.global||i.global)&&(Object.defineProperty(a,"Promise",o.PromiseProp),l.all=o.all,l.race=o.race,l.resolve=o.resolve,l.reject=o.reject,o.allSettled&&(l.allSettled=o.allSettled),o.any&&(l.any=o.any))))}function is(){var i=a.Promise;return Ct?{Promise:i,PromiseProp:Object.getOwnPropertyDescriptor(a,"Promise"),all:i.all,race:i.race,allSettled:i.allSettled,any:i.any,resolve:i.resolve,reject:i.reject}:{}}function pn(i,o,l,u,d){var h=Y;try{return sn(i,!0),o(l,u,d)}finally{sn(h,!1)}}function ss(i,o,l,u){return typeof i!="function"?i:function(){var d=Y;l&&An(),sn(o,!0);try{return i.apply(this,arguments)}finally{sn(d,!1),u&&queueMicrotask(rn)}}}function ei(i){Promise===we&&ot.echoes===0?or===0?i():enqueueNativeMicroTask(i):setTimeout(i,0)}(""+Pt).indexOf("[native code]")===-1&&(An=rn=le);var Qe=G.reject,mn="￿",Yt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",os="String expected.",Pn=[],cr="__dbnames",ti="readonly",ni="readwrite";function gn(i,o){return i?o?function(){return i.apply(this,arguments)&&o.apply(this,arguments)}:i:o}var as={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function ur(i){return typeof i!="string"||/\./.test(i)?function(o){return o}:function(o){return o[i]===void 0&&i in o&&delete(o=O(o))[i],o}}function ls(){throw J.Type()}function xe(i,o){try{var l=cs(i),u=cs(o);if(l!==u)return l==="Array"?1:u==="Array"?-1:l==="binary"?1:u==="binary"?-1:l==="string"?1:u==="string"?-1:l==="Date"?1:u!=="Date"?NaN:-1;switch(l){case"number":case"Date":case"string":return o<i?1:i<o?-1:0;case"binary":return(function(d,h){for(var g=d.length,y=h.length,$=g<y?g:y,E=0;E<$;++E)if(d[E]!==h[E])return d[E]<h[E]?-1:1;return g===y?0:g<y?-1:1})(us(i),us(o));case"Array":return(function(d,h){for(var g=d.length,y=h.length,$=g<y?g:y,E=0;E<$;++E){var P=xe(d[E],h[E]);if(P!==0)return P}return g===y?0:g<y?-1:1})(i,o)}}catch{}return NaN}function cs(i){var o=typeof i;return o!="object"?o:ArrayBuffer.isView(i)?"binary":(i=x(i),i==="ArrayBuffer"?"binary":i)}function us(i){return i instanceof Uint8Array?i:ArrayBuffer.isView(i)?new Uint8Array(i.buffer,i.byteOffset,i.byteLength):new Uint8Array(i)}var ds=(Me.prototype._trans=function(i,o,l){var u=this._tx||Y.trans,d=this.name,h=Ae&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(i==="readonly"?"read":"write"," ").concat(this.name));function g(E,P,w){if(!w.schema[d])throw new J.NotFound("Table "+d+" not part of transaction");return o(w.idbtrans,w)}var y=Pe();try{var $=u&&u.db._novip===this.db._novip?u===Y.trans?u._promise(i,g,l):nn(function(){return u._promise(i,g,l)},{trans:u,transless:Y.transless||Y}):(function E(P,w,D,C){if(P.idbdb&&(P._state.openComplete||Y.letThrough||P._vip)){var A=P._createTransaction(w,D,P._dbSchema);try{A.create(),P._state.PR1398_maxLoop=3}catch(T){return T.name===Ue.InvalidState&&P.isOpen()&&0<--P._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),P.close({disableAutoOpen:!1}),P.open().then(function(){return E(P,w,D,C)})):Qe(T)}return A._promise(w,function(T,_){return nn(function(){return Y.trans=A,C(T,_,A)})}).then(function(T){if(w==="readwrite")try{A.idbtrans.commit()}catch{}return w==="readonly"?T:A._completion.then(function(){return T})})}if(P._state.openComplete)return Qe(new J.DatabaseClosed(P._state.dbOpenError));if(!P._state.isBeingOpened){if(!P._state.autoOpen)return Qe(new J.DatabaseClosed);P.open().catch(le)}return P._state.dbReadyPromise.then(function(){return E(P,w,D,C)})})(this.db,i,[this.name],g);return h&&($._consoleTask=h,$=$.catch(function(E){return console.trace(E),Qe(E)})),$}finally{y&&Le()}},Me.prototype.get=function(i,o){var l=this;return i&&i.constructor===Object?this.where(i).first(o):i==null?Qe(new J.Type("Invalid argument to Table.get()")):this._trans("readonly",function(u){return l.core.get({trans:u,key:i}).then(function(d){return l.hook.reading.fire(d)})}).then(o)},Me.prototype.where=function(i){if(typeof i=="string")return new this.db.WhereClause(this,i);if(f(i))return new this.db.WhereClause(this,"[".concat(i.join("+"),"]"));var o=c(i);if(o.length===1)return this.where(o[0]).equals(i[o[0]]);var l=this.schema.indexes.concat(this.schema.primKey).filter(function(y){if(y.compound&&o.every(function(E){return 0<=y.keyPath.indexOf(E)})){for(var $=0;$<o.length;++$)if(o.indexOf(y.keyPath[$])===-1)return!1;return!0}return!1}).sort(function(y,$){return y.keyPath.length-$.keyPath.length})[0];if(l&&this.db._maxKey!==mn){var h=l.keyPath.slice(0,o.length);return this.where(h).equals(h.map(function($){return i[$]}))}!l&&Ae&&console.warn("The query ".concat(JSON.stringify(i)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(o.join("+"),"]"));var u=this.schema.idxByName;function d(y,$){return xe(y,$)===0}var g=o.reduce(function(w,$){var E=w[0],P=w[1],w=u[$],D=i[$];return[E||w,E||!w?gn(P,w&&w.multi?function(C){return C=bt(C,$),f(C)&&C.some(function(A){return d(D,A)})}:function(C){return d(D,bt(C,$))}):P]},[null,null]),h=g[0],g=g[1];return h?this.where(h.name).equals(i[h.keyPath]).filter(g):l?this.filter(g):this.where(o).equals("")},Me.prototype.filter=function(i){return this.toCollection().and(i)},Me.prototype.count=function(i){return this.toCollection().count(i)},Me.prototype.offset=function(i){return this.toCollection().offset(i)},Me.prototype.limit=function(i){return this.toCollection().limit(i)},Me.prototype.each=function(i){return this.toCollection().each(i)},Me.prototype.toArray=function(i){return this.toCollection().toArray(i)},Me.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Me.prototype.orderBy=function(i){return new this.db.Collection(new this.db.WhereClause(this,f(i)?"[".concat(i.join("+"),"]"):i))},Me.prototype.reverse=function(){return this.toCollection().reverse()},Me.prototype.mapToClass=function(i){var o,l=this.db,u=this.name;function d(){return o!==null&&o.apply(this,arguments)||this}(this.schema.mappedClass=i).prototype instanceof ls&&((function($,E){if(typeof E!="function"&&E!==null)throw new TypeError("Class extends value "+String(E)+" is not a constructor or null");function P(){this.constructor=$}r($,E),$.prototype=E===null?Object.create(E):(P.prototype=E.prototype,new P)})(d,o=i),Object.defineProperty(d.prototype,"db",{get:function(){return l},enumerable:!1,configurable:!0}),d.prototype.table=function(){return u},i=d);for(var h=new Set,g=i.prototype;g;g=k(g))Object.getOwnPropertyNames(g).forEach(function($){return h.add($)});function y($){if(!$)return $;var E,P=Object.create(i.prototype);for(E in $)if(!h.has(E))try{P[E]=$[E]}catch{}return P}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=y,this.hook("reading",y),i},Me.prototype.defineClass=function(){return this.mapToClass(function(i){m(this,i)})},Me.prototype.add=function(i,o){var l=this,u=this.schema.primKey,d=u.auto,h=u.keyPath,g=i;return h&&d&&(g=ur(h)(i)),this._trans("readwrite",function(y){return l.core.mutate({trans:y,type:"add",keys:o!=null?[o]:null,values:[g]})}).then(function(y){return y.numFailures?G.reject(y.failures[0]):y.lastResult}).then(function(y){if(h)try{et(i,h,y)}catch{}return y})},Me.prototype.update=function(i,o){return typeof i!="object"||f(i)?this.where(":id").equals(i).modify(o):(i=bt(i,this.schema.primKey.keyPath),i===void 0?Qe(new J.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(i).modify(o))},Me.prototype.put=function(i,o){var l=this,u=this.schema.primKey,d=u.auto,h=u.keyPath,g=i;return h&&d&&(g=ur(h)(i)),this._trans("readwrite",function(y){return l.core.mutate({trans:y,type:"put",values:[g],keys:o!=null?[o]:null})}).then(function(y){return y.numFailures?G.reject(y.failures[0]):y.lastResult}).then(function(y){if(h)try{et(i,h,y)}catch{}return y})},Me.prototype.delete=function(i){var o=this;return this._trans("readwrite",function(l){return o.core.mutate({trans:l,type:"delete",keys:[i]})}).then(function(l){return l.numFailures?G.reject(l.failures[0]):void 0})},Me.prototype.clear=function(){var i=this;return this._trans("readwrite",function(o){return i.core.mutate({trans:o,type:"deleteRange",range:as})}).then(function(o){return o.numFailures?G.reject(o.failures[0]):void 0})},Me.prototype.bulkGet=function(i){var o=this;return this._trans("readonly",function(l){return o.core.getMany({keys:i,trans:l}).then(function(u){return u.map(function(d){return o.hook.reading.fire(d)})})})},Me.prototype.bulkAdd=function(i,o,l){var u=this,d=Array.isArray(o)?o:void 0,h=(l=l||(d?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(g){var E=u.schema.primKey,y=E.auto,E=E.keyPath;if(E&&d)throw new J.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(d&&d.length!==i.length)throw new J.InvalidArgument("Arguments objects and keys must have the same length");var $=i.length,E=E&&y?i.map(ur(E)):i;return u.core.mutate({trans:g,type:"add",keys:d,values:E,wantResults:h}).then(function(A){var w=A.numFailures,D=A.results,C=A.lastResult,A=A.failures;if(w===0)return h?D:C;throw new ke("".concat(u.name,".bulkAdd(): ").concat(w," of ").concat($," operations failed"),A)})})},Me.prototype.bulkPut=function(i,o,l){var u=this,d=Array.isArray(o)?o:void 0,h=(l=l||(d?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(g){var E=u.schema.primKey,y=E.auto,E=E.keyPath;if(E&&d)throw new J.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(d&&d.length!==i.length)throw new J.InvalidArgument("Arguments objects and keys must have the same length");var $=i.length,E=E&&y?i.map(ur(E)):i;return u.core.mutate({trans:g,type:"put",keys:d,values:E,wantResults:h}).then(function(A){var w=A.numFailures,D=A.results,C=A.lastResult,A=A.failures;if(w===0)return h?D:C;throw new ke("".concat(u.name,".bulkPut(): ").concat(w," of ").concat($," operations failed"),A)})})},Me.prototype.bulkUpdate=function(i){var o=this,l=this.core,u=i.map(function(g){return g.key}),d=i.map(function(g){return g.changes}),h=[];return this._trans("readwrite",function(g){return l.getMany({trans:g,keys:u,cache:"clone"}).then(function(y){var $=[],E=[];i.forEach(function(w,D){var C=w.key,A=w.changes,T=y[D];if(T){for(var _=0,R=Object.keys(A);_<R.length;_++){var z=R[_],I=A[z];if(z===o.schema.primKey.keyPath){if(xe(I,C)!==0)throw new J.Constraint("Cannot update primary key in bulkUpdate()")}else et(T,z,I)}h.push(D),$.push(C),E.push(T)}});var P=$.length;return l.mutate({trans:g,type:"put",keys:$,values:E,updates:{keys:u,changeSpecs:d}}).then(function(w){var D=w.numFailures,C=w.failures;if(D===0)return P;for(var A=0,T=Object.keys(C);A<T.length;A++){var _,R=T[A],z=h[Number(R)];z!=null&&(_=C[R],delete C[R],C[z]=_)}throw new ke("".concat(o.name,".bulkUpdate(): ").concat(D," of ").concat(P," operations failed"),C)})})})},Me.prototype.bulkDelete=function(i){var o=this,l=i.length;return this._trans("readwrite",function(u){return o.core.mutate({trans:u,type:"delete",keys:i})}).then(function(g){var d=g.numFailures,h=g.lastResult,g=g.failures;if(d===0)return h;throw new ke("".concat(o.name,".bulkDelete(): ").concat(d," of ").concat(l," operations failed"),g)})},Me);function Me(){}function Mn(i){function o(g,y){if(y){for(var $=arguments.length,E=new Array($-1);--$;)E[$-1]=arguments[$];return l[g].subscribe.apply(null,E),i}if(typeof g=="string")return l[g]}var l={};o.addEventType=h;for(var u=1,d=arguments.length;u<d;++u)h(arguments[u]);return o;function h(g,y,$){if(typeof g!="object"){var E;y=y||Ve;var P={subscribers:[],fire:$=$||le,subscribe:function(w){P.subscribers.indexOf(w)===-1&&(P.subscribers.push(w),P.fire=y(P.fire,w))},unsubscribe:function(w){P.subscribers=P.subscribers.filter(function(D){return D!==w}),P.fire=P.subscribers.reduce(y,$)}};return l[g]=o[g]=P}c(E=g).forEach(function(w){var D=E[w];if(f(D))h(w,E[w][0],E[w][1]);else{if(D!=="asap")throw new J.InvalidArgument("Invalid event config");var C=h(w,me,function(){for(var A=arguments.length,T=new Array(A);A--;)T[A]=arguments[A];C.subscribers.forEach(function(_){vt(function(){_.apply(null,T)})})})}})}}function Nn(i,o){return ne(o).from({prototype:i}),o}function jn(i,o){return!(i.filter||i.algorithm||i.or)&&(o?i.justLimit:!i.replayFilter)}function ri(i,o){i.filter=gn(i.filter,o)}function ii(i,o,l){var u=i.replayFilter;i.replayFilter=u?function(){return gn(u(),o())}:o,i.justLimit=l&&!u}function dr(i,o){if(i.isPrimKey)return o.primaryKey;var l=o.getIndexByKeyPath(i.index);if(!l)throw new J.Schema("KeyPath "+i.index+" on object store "+o.name+" is not indexed");return l}function fs(i,o,l){var u=dr(i,o.schema);return o.openCursor({trans:l,values:!i.keysOnly,reverse:i.dir==="prev",unique:!!i.unique,query:{index:u,range:i.range}})}function fr(i,o,l,u){var d=i.replayFilter?gn(i.filter,i.replayFilter()):i.filter;if(i.or){var h={},g=function(y,$,E){var P,w;d&&!d($,E,function(D){return $.stop(D)},function(D){return $.fail(D)})||((w=""+(P=$.primaryKey))=="[object ArrayBuffer]"&&(w=""+new Uint8Array(P)),j(h,w)||(h[w]=!0,o(y,$,E)))};return Promise.all([i.or._iterate(g,l),hs(fs(i,u,l),i.algorithm,g,!i.keysOnly&&i.valueMapper)])}return hs(fs(i,u,l),gn(i.algorithm,d),o,!i.keysOnly&&i.valueMapper)}function hs(i,o,l,u){var d=Re(u?function(h,g,y){return l(u(h),g,y)}:l);return i.then(function(h){if(h)return h.start(function(){var g=function(){return h.continue()};o&&!o(h,function(y){return g=y},function(y){h.stop(y),g=le},function(y){h.fail(y),g=le})||d(h.value,h,function(y){return g=y}),g()})})}var Gt=Symbol(),qn=(ps.prototype.execute=function(i){if(this.add!==void 0){var o=this.add;if(f(o))return n(n([],f(i)?i:[],!0),o).sort();if(typeof o=="number")return(Number(i)||0)+o;if(typeof o=="bigint")try{return BigInt(i)+o}catch{return BigInt(0)+o}throw new TypeError("Invalid term ".concat(o))}if(this.remove!==void 0){var l=this.remove;if(f(l))return f(i)?i.filter(function(u){return!l.includes(u)}).sort():[];if(typeof l=="number")return Number(i)-l;if(typeof l=="bigint")try{return BigInt(i)-l}catch{return BigInt(0)-l}throw new TypeError("Invalid subtrahend ".concat(l))}return o=(o=this.replacePrefix)===null||o===void 0?void 0:o[0],o&&typeof i=="string"&&i.startsWith(o)?this.replacePrefix[1]+i.substring(o.length):i},ps);function ps(i){Object.assign(this,i)}var wa=(_e.prototype._read=function(i,o){var l=this._ctx;return l.error?l.table._trans(null,Qe.bind(null,l.error)):l.table._trans("readonly",i).then(o)},_e.prototype._write=function(i){var o=this._ctx;return o.error?o.table._trans(null,Qe.bind(null,o.error)):o.table._trans("readwrite",i,"locked")},_e.prototype._addAlgorithm=function(i){var o=this._ctx;o.algorithm=gn(o.algorithm,i)},_e.prototype._iterate=function(i,o){return fr(this._ctx,i,o,this._ctx.table.core)},_e.prototype.clone=function(i){var o=Object.create(this.constructor.prototype),l=Object.create(this._ctx);return i&&m(l,i),o._ctx=l,o},_e.prototype.raw=function(){return this._ctx.valueMapper=null,this},_e.prototype.each=function(i){var o=this._ctx;return this._read(function(l){return fr(o,i,l,o.table.core)})},_e.prototype.count=function(i){var o=this;return this._read(function(l){var u=o._ctx,d=u.table.core;if(jn(u,!0))return d.count({trans:l,query:{index:dr(u,d.schema),range:u.range}}).then(function(g){return Math.min(g,u.limit)});var h=0;return fr(u,function(){return++h,!1},l,d).then(function(){return h})}).then(i)},_e.prototype.sortBy=function(i,o){var l=i.split(".").reverse(),u=l[0],d=l.length-1;function h($,E){return E?h($[l[E]],E-1):$[u]}var g=this._ctx.dir==="next"?1:-1;function y($,E){return xe(h($,d),h(E,d))*g}return this.toArray(function($){return $.sort(y)}).then(o)},_e.prototype.toArray=function(i){var o=this;return this._read(function(l){var u=o._ctx;if(u.dir==="next"&&jn(u,!0)&&0<u.limit){var d=u.valueMapper,h=dr(u,u.table.core.schema);return u.table.core.query({trans:l,limit:u.limit,values:!0,query:{index:h,range:u.range}}).then(function(y){return y=y.result,d?y.map(d):y})}var g=[];return fr(u,function(y){return g.push(y)},l,u.table.core).then(function(){return g})},i)},_e.prototype.offset=function(i){var o=this._ctx;return i<=0||(o.offset+=i,jn(o)?ii(o,function(){var l=i;return function(u,d){return l===0||(l===1?--l:d(function(){u.advance(l),l=0}),!1)}}):ii(o,function(){var l=i;return function(){return--l<0}})),this},_e.prototype.limit=function(i){return this._ctx.limit=Math.min(this._ctx.limit,i),ii(this._ctx,function(){var o=i;return function(l,u,d){return--o<=0&&u(d),0<=o}},!0),this},_e.prototype.until=function(i,o){return ri(this._ctx,function(l,u,d){return!i(l.value)||(u(d),o)}),this},_e.prototype.first=function(i){return this.limit(1).toArray(function(o){return o[0]}).then(i)},_e.prototype.last=function(i){return this.reverse().first(i)},_e.prototype.filter=function(i){var o;return ri(this._ctx,function(l){return i(l.value)}),(o=this._ctx).isMatch=gn(o.isMatch,i),this},_e.prototype.and=function(i){return this.filter(i)},_e.prototype.or=function(i){return new this.db.WhereClause(this._ctx.table,i,this)},_e.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},_e.prototype.desc=function(){return this.reverse()},_e.prototype.eachKey=function(i){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){i(u.key,u)})},_e.prototype.eachUniqueKey=function(i){return this._ctx.unique="unique",this.eachKey(i)},_e.prototype.eachPrimaryKey=function(i){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){i(u.primaryKey,u)})},_e.prototype.keys=function(i){var o=this._ctx;o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,d){l.push(d.key)}).then(function(){return l}).then(i)},_e.prototype.primaryKeys=function(i){var o=this._ctx;if(o.dir==="next"&&jn(o,!0)&&0<o.limit)return this._read(function(u){var d=dr(o,o.table.core.schema);return o.table.core.query({trans:u,values:!1,limit:o.limit,query:{index:d,range:o.range}})}).then(function(u){return u.result}).then(i);o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,d){l.push(d.primaryKey)}).then(function(){return l}).then(i)},_e.prototype.uniqueKeys=function(i){return this._ctx.unique="unique",this.keys(i)},_e.prototype.firstKey=function(i){return this.limit(1).keys(function(o){return o[0]}).then(i)},_e.prototype.lastKey=function(i){return this.reverse().firstKey(i)},_e.prototype.distinct=function(){var i=this._ctx,i=i.index&&i.table.schema.idxByName[i.index];if(!i||!i.multi)return this;var o={};return ri(this._ctx,function(d){var u=d.primaryKey.toString(),d=j(o,u);return o[u]=!0,!d}),this},_e.prototype.modify=function(i){var o=this,l=this._ctx;return this._write(function(u){var d,h,g;g=typeof i=="function"?i:(d=c(i),h=d.length,function(_){for(var R=!1,z=0;z<h;++z){var I=d[z],L=i[I],U=bt(_,I);L instanceof qn?(et(_,I,L.execute(U)),R=!0):U!==L&&(et(_,I,L),R=!0)}return R});var y=l.table.core,w=y.schema.primaryKey,$=w.outbound,E=w.extractKey,P=200,w=o.db._options.modifyChunkSize;w&&(P=typeof w=="object"?w[y.name]||w["*"]||200:w);function D(_,I){var z=I.failures,I=I.numFailures;A+=_-I;for(var L=0,U=c(z);L<U.length;L++){var Q=U[L];C.push(z[Q])}}var C=[],A=0,T=[];return o.clone().primaryKeys().then(function(_){function R(I){var L=Math.min(P,_.length-I);return y.getMany({trans:u,keys:_.slice(I,I+L),cache:"immutable"}).then(function(U){for(var Q=[],W=[],K=$?[]:null,Z=[],X=0;X<L;++X){var re=U[X],he={value:O(re),primKey:_[I+X]};g.call(he,he.value,he)!==!1&&(he.value==null?Z.push(_[I+X]):$||xe(E(re),E(he.value))===0?(W.push(he.value),$&&K.push(_[I+X])):(Z.push(_[I+X]),Q.push(he.value)))}return Promise.resolve(0<Q.length&&y.mutate({trans:u,type:"add",values:Q}).then(function(ge){for(var be in ge.failures)Z.splice(parseInt(be),1);D(Q.length,ge)})).then(function(){return(0<W.length||z&&typeof i=="object")&&y.mutate({trans:u,type:"put",keys:K,values:W,criteria:z,changeSpec:typeof i!="function"&&i,isAdditionalChunk:0<I}).then(function(ge){return D(W.length,ge)})}).then(function(){return(0<Z.length||z&&i===si)&&y.mutate({trans:u,type:"delete",keys:Z,criteria:z,isAdditionalChunk:0<I}).then(function(ge){return D(Z.length,ge)})}).then(function(){return _.length>I+L&&R(I+P)})})}var z=jn(l)&&l.limit===1/0&&(typeof i!="function"||i===si)&&{index:l.index,range:l.range};return R(0).then(function(){if(0<C.length)throw new ye("Error modifying one or more objects",C,A,T);return _.length})})})},_e.prototype.delete=function(){var i=this._ctx,o=i.range;return jn(i)&&(i.isPrimKey||o.type===3)?this._write(function(l){var u=i.table.core.schema.primaryKey,d=o;return i.table.core.count({trans:l,query:{index:u,range:d}}).then(function(h){return i.table.core.mutate({trans:l,type:"deleteRange",range:d}).then(function(g){var y=g.failures;if(g.lastResult,g.results,g=g.numFailures,g)throw new ye("Could not delete some values",Object.keys(y).map(function($){return y[$]}),h-g);return h-g})})}):this.modify(si)},_e);function _e(){}var si=function(i,o){return o.value=null};function va(i,o){return i<o?-1:i===o?0:1}function xa(i,o){return o<i?-1:i===o?0:1}function Et(i,o,l){return i=i instanceof gs?new i.Collection(i):i,i._ctx.error=new(l||TypeError)(o),i}function Tn(i){return new i.Collection(i,function(){return ms("")}).limit(0)}function hr(i,o,l,u){var d,h,g,y,$,E,P,w=l.length;if(!l.every(function(A){return typeof A=="string"}))return Et(i,os);function D(A){d=A==="next"?function(_){return _.toUpperCase()}:function(_){return _.toLowerCase()},h=A==="next"?function(_){return _.toLowerCase()}:function(_){return _.toUpperCase()},g=A==="next"?va:xa;var T=l.map(function(_){return{lower:h(_),upper:d(_)}}).sort(function(_,R){return g(_.lower,R.lower)});y=T.map(function(_){return _.upper}),$=T.map(function(_){return _.lower}),P=(E=A)==="next"?"":u}D("next"),i=new i.Collection(i,function(){return on(y[0],$[w-1]+u)}),i._ondirectionchange=function(A){D(A)};var C=0;return i._addAlgorithm(function(A,T,_){var R=A.key;if(typeof R!="string")return!1;var z=h(R);if(o(z,$,C))return!0;for(var I=null,L=C;L<w;++L){var U=(function(Q,W,K,Z,X,re){for(var he=Math.min(Q.length,Z.length),ge=-1,be=0;be<he;++be){var kt=W[be];if(kt!==Z[be])return X(Q[be],K[be])<0?Q.substr(0,be)+K[be]+K.substr(be+1):X(Q[be],Z[be])<0?Q.substr(0,be)+Z[be]+K.substr(be+1):0<=ge?Q.substr(0,ge)+W[ge]+K.substr(ge+1):null;X(Q[be],kt)<0&&(ge=be)}return he<Z.length&&re==="next"?Q+K.substr(Q.length):he<Q.length&&re==="prev"?Q.substr(0,K.length):ge<0?null:Q.substr(0,ge)+Z[ge]+K.substr(ge+1)})(R,z,y[L],$[L],g,E);U===null&&I===null?C=L+1:(I===null||0<g(I,U))&&(I=U)}return T(I!==null?function(){A.continue(I+P)}:_),!1}),i}function on(i,o,l,u){return{type:2,lower:i,upper:o,lowerOpen:l,upperOpen:u}}function ms(i){return{type:1,lower:i,upper:i}}var gs=(Object.defineProperty(at.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),at.prototype.between=function(i,o,l,u){l=l!==!1,u=u===!0;try{return 0<this._cmp(i,o)||this._cmp(i,o)===0&&(l||u)&&(!l||!u)?Tn(this):new this.Collection(this,function(){return on(i,o,!l,!u)})}catch{return Et(this,Yt)}},at.prototype.equals=function(i){return i==null?Et(this,Yt):new this.Collection(this,function(){return ms(i)})},at.prototype.above=function(i){return i==null?Et(this,Yt):new this.Collection(this,function(){return on(i,void 0,!0)})},at.prototype.aboveOrEqual=function(i){return i==null?Et(this,Yt):new this.Collection(this,function(){return on(i,void 0,!1)})},at.prototype.below=function(i){return i==null?Et(this,Yt):new this.Collection(this,function(){return on(void 0,i,!1,!0)})},at.prototype.belowOrEqual=function(i){return i==null?Et(this,Yt):new this.Collection(this,function(){return on(void 0,i)})},at.prototype.startsWith=function(i){return typeof i!="string"?Et(this,os):this.between(i,i+mn,!0,!0)},at.prototype.startsWithIgnoreCase=function(i){return i===""?this.startsWith(i):hr(this,function(o,l){return o.indexOf(l[0])===0},[i],mn)},at.prototype.equalsIgnoreCase=function(i){return hr(this,function(o,l){return o===l[0]},[i],"")},at.prototype.anyOfIgnoreCase=function(){var i=qe.apply(H,arguments);return i.length===0?Tn(this):hr(this,function(o,l){return l.indexOf(o)!==-1},i,"")},at.prototype.startsWithAnyOfIgnoreCase=function(){var i=qe.apply(H,arguments);return i.length===0?Tn(this):hr(this,function(o,l){return l.some(function(u){return o.indexOf(u)===0})},i,mn)},at.prototype.anyOf=function(){var i=this,o=qe.apply(H,arguments),l=this._cmp;try{o.sort(l)}catch{return Et(this,Yt)}if(o.length===0)return Tn(this);var u=new this.Collection(this,function(){return on(o[0],o[o.length-1])});u._ondirectionchange=function(h){l=h==="next"?i._ascending:i._descending,o.sort(l)};var d=0;return u._addAlgorithm(function(h,g,y){for(var $=h.key;0<l($,o[d]);)if(++d===o.length)return g(y),!1;return l($,o[d])===0||(g(function(){h.continue(o[d])}),!1)}),u},at.prototype.notEqual=function(i){return this.inAnyRange([[-1/0,i],[i,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},at.prototype.noneOf=function(){var i=qe.apply(H,arguments);if(i.length===0)return new this.Collection(this);try{i.sort(this._ascending)}catch{return Et(this,Yt)}var o=i.reduce(function(l,u){return l?l.concat([[l[l.length-1][1],u]]):[[-1/0,u]]},null);return o.push([i[i.length-1],this.db._maxKey]),this.inAnyRange(o,{includeLowers:!1,includeUppers:!1})},at.prototype.inAnyRange=function(R,o){var l=this,u=this._cmp,d=this._ascending,h=this._descending,g=this._min,y=this._max;if(R.length===0)return Tn(this);if(!R.every(function(z){return z[0]!==void 0&&z[1]!==void 0&&d(z[0],z[1])<=0}))return Et(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",J.InvalidArgument);var $=!o||o.includeLowers!==!1,E=o&&o.includeUppers===!0,P,w=d;function D(z,I){return w(z[0],I[0])}try{(P=R.reduce(function(z,I){for(var L=0,U=z.length;L<U;++L){var Q=z[L];if(u(I[0],Q[1])<0&&0<u(I[1],Q[0])){Q[0]=g(Q[0],I[0]),Q[1]=y(Q[1],I[1]);break}}return L===U&&z.push(I),z},[])).sort(D)}catch{return Et(this,Yt)}var C=0,A=E?function(z){return 0<d(z,P[C][1])}:function(z){return 0<=d(z,P[C][1])},T=$?function(z){return 0<h(z,P[C][0])}:function(z){return 0<=h(z,P[C][0])},_=A,R=new this.Collection(this,function(){return on(P[0][0],P[P.length-1][1],!$,!E)});return R._ondirectionchange=function(z){w=z==="next"?(_=A,d):(_=T,h),P.sort(D)},R._addAlgorithm(function(z,I,L){for(var U,Q=z.key;_(Q);)if(++C===P.length)return I(L),!1;return!A(U=Q)&&!T(U)||(l._cmp(Q,P[C][1])===0||l._cmp(Q,P[C][0])===0||I(function(){w===d?z.continue(P[C][0]):z.continue(P[C][1])}),!1)}),R},at.prototype.startsWithAnyOf=function(){var i=qe.apply(H,arguments);return i.every(function(o){return typeof o=="string"})?i.length===0?Tn(this):this.inAnyRange(i.map(function(o){return[o,o+mn]})):Et(this,"startsWithAnyOf() only works with strings")},at);function at(){}function qt(i){return Re(function(o){return Un(o),i(o.target.error),!1})}function Un(i){i.stopPropagation&&i.stopPropagation(),i.preventDefault&&i.preventDefault()}var Wn="storagemutated",oi="x-storagemutated-1",an=Mn(null,Wn),$a=(Ut.prototype._lock=function(){return Fe(!Y.global),++this._reculock,this._reculock!==1||Y.global||(Y.lockOwnerFor=this),this},Ut.prototype._unlock=function(){if(Fe(!Y.global),--this._reculock==0)for(Y.global||(Y.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var i=this._blockedFuncs.shift();try{pn(i[1],i[0])}catch{}}return this},Ut.prototype._locked=function(){return this._reculock&&Y.lockOwnerFor!==this},Ut.prototype.create=function(i){var o=this;if(!this.mode)return this;var l=this.db.idbdb,u=this.db._state.dbOpenError;if(Fe(!this.idbtrans),!i&&!l)switch(u&&u.name){case"DatabaseClosedError":throw new J.DatabaseClosed(u);case"MissingAPIError":throw new J.MissingAPI(u.message,u);default:throw new J.OpenFailed(u)}if(!this.active)throw new J.TransactionInactive;return Fe(this._completion._state===null),(i=this.idbtrans=i||(this.db.core||l).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Re(function(d){Un(d),o._reject(i.error)}),i.onabort=Re(function(d){Un(d),o.active&&o._reject(new J.Abort(i.error)),o.active=!1,o.on("abort").fire(d)}),i.oncomplete=Re(function(){o.active=!1,o._resolve(),"mutatedParts"in i&&an.storagemutated.fire(i.mutatedParts)}),this},Ut.prototype._promise=function(i,o,l){var u=this;if(i==="readwrite"&&this.mode!=="readwrite")return Qe(new J.ReadOnly("Transaction is readonly"));if(!this.active)return Qe(new J.TransactionInactive);if(this._locked())return new G(function(h,g){u._blockedFuncs.push([function(){u._promise(i,o,l).then(h,g)},Y])});if(l)return nn(function(){var h=new G(function(g,y){u._lock();var $=o(g,y,u);$&&$.then&&$.then(g,y)});return h.finally(function(){return u._unlock()}),h._lib=!0,h});var d=new G(function(h,g){var y=o(h,g,u);y&&y.then&&y.then(h,g)});return d._lib=!0,d},Ut.prototype._root=function(){return this.parent?this.parent._root():this},Ut.prototype.waitFor=function(i){var o,l=this._root(),u=G.resolve(i);l._waitingFor?l._waitingFor=l._waitingFor.then(function(){return u}):(l._waitingFor=u,l._waitingQueue=[],o=l.idbtrans.objectStore(l.storeNames[0]),(function h(){for(++l._spinCount;l._waitingQueue.length;)l._waitingQueue.shift()();l._waitingFor&&(o.get(-1/0).onsuccess=h)})());var d=l._waitingFor;return new G(function(h,g){u.then(function(y){return l._waitingQueue.push(Re(h.bind(null,y)))},function(y){return l._waitingQueue.push(Re(g.bind(null,y)))}).finally(function(){l._waitingFor===d&&(l._waitingFor=null)})})},Ut.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new J.Abort))},Ut.prototype.table=function(i){var o=this._memoizedTables||(this._memoizedTables={});if(j(o,i))return o[i];var l=this.schema[i];if(!l)throw new J.NotFound("Table "+i+" not part of transaction");return l=new this.db.Table(i,l,this),l.core=this.db.core.table(i),o[i]=l},Ut);function Ut(){}function ai(i,o,l,u,d,h,g){return{name:i,keyPath:o,unique:l,multi:u,auto:d,compound:h,src:(l&&!g?"&":"")+(u?"*":"")+(d?"++":"")+bs(o)}}function bs(i){return typeof i=="string"?i:i?"["+[].join.call(i,"+")+"]":""}function li(i,o,l){return{name:i,primKey:o,indexes:l,mappedClass:null,idxByName:(u=function(d){return[d.name,d]},l.reduce(function(d,h,g){return g=u(h,g),g&&(d[g[0]]=g[1]),d},{}))};var u}var Hn=function(i){try{return i.only([[]]),Hn=function(){return[[]]},[[]]}catch{return Hn=function(){return mn},mn}};function ci(i){return i==null?function(){}:typeof i=="string"?(o=i).split(".").length===1?function(l){return l[o]}:function(l){return bt(l,o)}:function(l){return bt(l,i)};var o}function ys(i){return[].slice.call(i)}var Ca=0;function Kn(i){return i==null?":id":typeof i=="string"?i:"[".concat(i.join("+"),"]")}function Ea(i,o,$){function u(_){if(_.type===3)return null;if(_.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var C=_.lower,A=_.upper,T=_.lowerOpen,_=_.upperOpen;return C===void 0?A===void 0?null:o.upperBound(A,!!_):A===void 0?o.lowerBound(C,!!T):o.bound(C,A,!!T,!!_)}function d(D){var C,A=D.name;return{name:A,schema:D,mutate:function(T){var _=T.trans,R=T.type,z=T.keys,I=T.values,L=T.range;return new Promise(function(U,Q){U=Re(U);var W=_.objectStore(A),K=W.keyPath==null,Z=R==="put"||R==="add";if(!Z&&R!=="delete"&&R!=="deleteRange")throw new Error("Invalid operation type: "+R);var X,re=(z||I||{length:1}).length;if(z&&I&&z.length!==I.length)throw new Error("Given keys array must have same length as given values array.");if(re===0)return U({numFailures:0,failures:{},results:[],lastResult:void 0});function he(gt){++kt,Un(gt)}var ge=[],be=[],kt=0;if(R==="deleteRange"){if(L.type===4)return U({numFailures:kt,failures:be,results:[],lastResult:void 0});L.type===3?ge.push(X=W.clear()):ge.push(X=W.delete(u(L)))}else{var K=Z?K?[I,z]:[I,null]:[z,null],fe=K[0],ft=K[1];if(Z)for(var ht=0;ht<re;++ht)ge.push(X=ft&&ft[ht]!==void 0?W[R](fe[ht],ft[ht]):W[R](fe[ht])),X.onerror=he;else for(ht=0;ht<re;++ht)ge.push(X=W[R](fe[ht])),X.onerror=he}function Sr(gt){gt=gt.target.result,ge.forEach(function(wn,_i){return wn.error!=null&&(be[_i]=wn.error)}),U({numFailures:kt,failures:be,results:R==="delete"?z:ge.map(function(wn){return wn.result}),lastResult:gt})}X.onerror=function(gt){he(gt),Sr(gt)},X.onsuccess=Sr})},getMany:function(T){var _=T.trans,R=T.keys;return new Promise(function(z,I){z=Re(z);for(var L,U=_.objectStore(A),Q=R.length,W=new Array(Q),K=0,Z=0,X=function(ge){ge=ge.target,W[ge._pos]=ge.result,++Z===K&&z(W)},re=qt(I),he=0;he<Q;++he)R[he]!=null&&((L=U.get(R[he]))._pos=he,L.onsuccess=X,L.onerror=re,++K);K===0&&z(W)})},get:function(T){var _=T.trans,R=T.key;return new Promise(function(z,I){z=Re(z);var L=_.objectStore(A).get(R);L.onsuccess=function(U){return z(U.target.result)},L.onerror=qt(I)})},query:(C=E,function(T){return new Promise(function(_,R){_=Re(_);var z,I,L,K=T.trans,U=T.values,Q=T.limit,X=T.query,W=Q===1/0?void 0:Q,Z=X.index,X=X.range,K=K.objectStore(A),Z=Z.isPrimaryKey?K:K.index(Z.name),X=u(X);if(Q===0)return _({result:[]});C?((W=U?Z.getAll(X,W):Z.getAllKeys(X,W)).onsuccess=function(re){return _({result:re.target.result})},W.onerror=qt(R)):(z=0,I=!U&&"openKeyCursor"in Z?Z.openKeyCursor(X):Z.openCursor(X),L=[],I.onsuccess=function(re){var he=I.result;return he?(L.push(U?he.value:he.primaryKey),++z===Q?_({result:L}):void he.continue()):_({result:L})},I.onerror=qt(R))})}),openCursor:function(T){var _=T.trans,R=T.values,z=T.query,I=T.reverse,L=T.unique;return new Promise(function(U,Q){U=Re(U);var Z=z.index,W=z.range,K=_.objectStore(A),K=Z.isPrimaryKey?K:K.index(Z.name),Z=I?L?"prevunique":"prev":L?"nextunique":"next",X=!R&&"openKeyCursor"in K?K.openKeyCursor(u(W),Z):K.openCursor(u(W),Z);X.onerror=qt(Q),X.onsuccess=Re(function(re){var he,ge,be,kt,fe=X.result;fe?(fe.___id=++Ca,fe.done=!1,he=fe.continue.bind(fe),ge=(ge=fe.continuePrimaryKey)&&ge.bind(fe),be=fe.advance.bind(fe),kt=function(){throw new Error("Cursor not stopped")},fe.trans=_,fe.stop=fe.continue=fe.continuePrimaryKey=fe.advance=function(){throw new Error("Cursor not started")},fe.fail=Re(Q),fe.next=function(){var ft=this,ht=1;return this.start(function(){return ht--?ft.continue():ft.stop()}).then(function(){return ft})},fe.start=function(ft){function ht(){if(X.result)try{ft()}catch(gt){fe.fail(gt)}else fe.done=!0,fe.start=function(){throw new Error("Cursor behind last entry")},fe.stop()}var Sr=new Promise(function(gt,wn){gt=Re(gt),X.onerror=qt(wn),fe.fail=wn,fe.stop=function(_i){fe.stop=fe.continue=fe.continuePrimaryKey=fe.advance=kt,gt(_i)}});return X.onsuccess=Re(function(gt){X.onsuccess=ht,ht()}),fe.continue=he,fe.continuePrimaryKey=ge,fe.advance=be,ht(),Sr},U(fe)):U(null)},Q)})},count:function(T){var _=T.query,R=T.trans,z=_.index,I=_.range;return new Promise(function(L,U){var Q=R.objectStore(A),W=z.isPrimaryKey?Q:Q.index(z.name),Q=u(I),W=Q?W.count(Q):W.count();W.onsuccess=Re(function(K){return L(K.target.result)}),W.onerror=qt(U)})}}}var h,g,y,P=(g=$,y=ys((h=i).objectStoreNames),{schema:{name:h.name,tables:y.map(function(D){return g.objectStore(D)}).map(function(D){var C=D.keyPath,_=D.autoIncrement,A=f(C),T={},_={name:D.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:C==null,compound:A,keyPath:C,autoIncrement:_,unique:!0,extractKey:ci(C)},indexes:ys(D.indexNames).map(function(R){return D.index(R)}).map(function(L){var z=L.name,I=L.unique,U=L.multiEntry,L=L.keyPath,U={name:z,compound:f(L),keyPath:L,unique:I,multiEntry:U,extractKey:ci(L)};return T[Kn(L)]=U}),getIndexByKeyPath:function(R){return T[Kn(R)]}};return T[":id"]=_.primaryKey,C!=null&&(T[Kn(C)]=_.primaryKey),_})},hasGetAll:0<y.length&&"getAll"in g.objectStore(y[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),$=P.schema,E=P.hasGetAll,P=$.tables.map(d),w={};return P.forEach(function(D){return w[D.name]=D}),{stack:"dbcore",transaction:i.transaction.bind(i),table:function(D){if(!w[D])throw new Error("Table '".concat(D,"' not found"));return w[D]},MIN_KEY:-1/0,MAX_KEY:Hn(o),schema:$}}function ka(i,o,l,u){var d=l.IDBKeyRange;return l.indexedDB,{dbcore:(u=Ea(o,d,u),i.dbcore.reduce(function(h,g){return g=g.create,s(s({},h),g(h))},u))}}function pr(i,u){var l=u.db,u=ka(i._middlewares,l,i._deps,u);i.core=u.dbcore,i.tables.forEach(function(d){var h=d.name;i.core.schema.tables.some(function(g){return g.name===h})&&(d.core=i.core.table(h),i[h]instanceof i.Table&&(i[h].core=d.core))})}function mr(i,o,l,u){l.forEach(function(d){var h=u[d];o.forEach(function(g){var y=(function $(E,P){return ue(E,P)||(E=k(E))&&$(E,P)})(g,d);(!y||"value"in y&&y.value===void 0)&&(g===i.Transaction.prototype||g instanceof i.Transaction?q(g,d,{get:function(){return this.table(d)},set:function($){M(this,d,{value:$,writable:!0,configurable:!0,enumerable:!0})}}):g[d]=new i.Table(d,h))})})}function ui(i,o){o.forEach(function(l){for(var u in l)l[u]instanceof i.Table&&delete l[u]})}function Sa(i,o){return i._cfg.version-o._cfg.version}function _a(i,o,l,u){var d=i._dbSchema;l.objectStoreNames.contains("$meta")&&!d.$meta&&(d.$meta=li("$meta",vs("")[0],[]),i._storeNames.push("$meta"));var h=i._createTransaction("readwrite",i._storeNames,d);h.create(l),h._completion.catch(u);var g=h._reject.bind(h),y=Y.transless||Y;nn(function(){return Y.trans=h,Y.transless=y,o!==0?(pr(i,l),E=o,(($=h).storeNames.includes("$meta")?$.table("$meta").get("version").then(function(P){return P??E}):G.resolve(E)).then(function(P){return D=P,C=h,A=l,T=[],P=(w=i)._versions,_=w._dbSchema=br(0,w.idbdb,A),(P=P.filter(function(R){return R._cfg.version>=D})).length!==0?(P.forEach(function(R){T.push(function(){var z=_,I=R._cfg.dbschema;yr(w,z,A),yr(w,I,A),_=w._dbSchema=I;var L=di(z,I);L.add.forEach(function(Z){fi(A,Z[0],Z[1].primKey,Z[1].indexes)}),L.change.forEach(function(Z){if(Z.recreate)throw new J.Upgrade("Not yet support for changing primary key");var X=A.objectStore(Z.name);Z.add.forEach(function(re){return gr(X,re)}),Z.change.forEach(function(re){X.deleteIndex(re.name),gr(X,re)}),Z.del.forEach(function(re){return X.deleteIndex(re)})});var U=R._cfg.contentUpgrade;if(U&&R._cfg.version>D){pr(w,A),C._memoizedTables={};var Q=Kt(I);L.del.forEach(function(Z){Q[Z]=z[Z]}),ui(w,[w.Transaction.prototype]),mr(w,[w.Transaction.prototype],c(Q),Q),C.schema=Q;var W,K=tt(U);return K&&An(),L=G.follow(function(){var Z;(W=U(C))&&K&&(Z=rn.bind(null,null),W.then(Z,Z))}),W&&typeof W.then=="function"?G.resolve(W):L.then(function(){return W})}}),T.push(function(z){var I,L,U=R._cfg.dbschema;I=U,L=z,[].slice.call(L.db.objectStoreNames).forEach(function(Q){return I[Q]==null&&L.db.deleteObjectStore(Q)}),ui(w,[w.Transaction.prototype]),mr(w,[w.Transaction.prototype],w._storeNames,w._dbSchema),C.schema=w._dbSchema}),T.push(function(z){w.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(w.idbdb.version/10)===R._cfg.version?(w.idbdb.deleteObjectStore("$meta"),delete w._dbSchema.$meta,w._storeNames=w._storeNames.filter(function(I){return I!=="$meta"})):z.objectStore("$meta").put(R._cfg.version,"version"))})}),(function R(){return T.length?G.resolve(T.shift()(C.idbtrans)).then(R):G.resolve()})().then(function(){ws(_,A)})):G.resolve();var w,D,C,A,T,_}).catch(g)):(c(d).forEach(function(P){fi(l,P,d[P].primKey,d[P].indexes)}),pr(i,l),void G.follow(function(){return i.on.populate.fire(h)}).catch(g));var $,E})}function Aa(i,o){ws(i._dbSchema,o),o.db.version%10!=0||o.objectStoreNames.contains("$meta")||o.db.createObjectStore("$meta").add(Math.ceil(o.db.version/10-1),"version");var l=br(0,i.idbdb,o);yr(i,i._dbSchema,o);for(var u=0,d=di(l,i._dbSchema).change;u<d.length;u++){var h=(function(g){if(g.change.length||g.recreate)return console.warn("Unable to patch indexes of table ".concat(g.name," because it has changes on the type of index or primary key.")),{value:void 0};var y=o.objectStore(g.name);g.add.forEach(function($){Ae&&console.debug("Dexie upgrade patch: Creating missing index ".concat(g.name,".").concat($.src)),gr(y,$)})})(d[u]);if(typeof h=="object")return h.value}}function di(i,o){var l,u={del:[],add:[],change:[]};for(l in i)o[l]||u.del.push(l);for(l in o){var d=i[l],h=o[l];if(d){var g={name:l,def:h,recreate:!1,del:[],add:[],change:[]};if(""+(d.primKey.keyPath||"")!=""+(h.primKey.keyPath||"")||d.primKey.auto!==h.primKey.auto)g.recreate=!0,u.change.push(g);else{var y=d.idxByName,$=h.idxByName,E=void 0;for(E in y)$[E]||g.del.push(E);for(E in $){var P=y[E],w=$[E];P?P.src!==w.src&&g.change.push(w):g.add.push(w)}(0<g.del.length||0<g.add.length||0<g.change.length)&&u.change.push(g)}}else u.add.push([l,h])}return u}function fi(i,o,l,u){var d=i.db.createObjectStore(o,l.keyPath?{keyPath:l.keyPath,autoIncrement:l.auto}:{autoIncrement:l.auto});return u.forEach(function(h){return gr(d,h)}),d}function ws(i,o){c(i).forEach(function(l){o.db.objectStoreNames.contains(l)||(Ae&&console.debug("Dexie: Creating missing table",l),fi(o,l,i[l].primKey,i[l].indexes))})}function gr(i,o){i.createIndex(o.name,o.keyPath,{unique:o.unique,multiEntry:o.multi})}function br(i,o,l){var u={};return ie(o.objectStoreNames,0).forEach(function(d){for(var h=l.objectStore(d),g=ai(bs(E=h.keyPath),E||"",!0,!1,!!h.autoIncrement,E&&typeof E!="string",!0),y=[],$=0;$<h.indexNames.length;++$){var P=h.index(h.indexNames[$]),E=P.keyPath,P=ai(P.name,E,!!P.unique,!!P.multiEntry,!1,E&&typeof E!="string",!1);y.push(P)}u[d]=li(d,g,y)}),u}function yr(i,o,l){for(var u=l.db.objectStoreNames,d=0;d<u.length;++d){var h=u[d],g=l.objectStore(h);i._hasGetAll="getAll"in g;for(var y=0;y<g.indexNames.length;++y){var $=g.indexNames[y],E=g.index($).keyPath,P=typeof E=="string"?E:"["+ie(E).join("+")+"]";!o[h]||(E=o[h].idxByName[P])&&(E.name=$,delete o[h].idxByName[P],o[h].idxByName[$]=E)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&a.WorkerGlobalScope&&a instanceof a.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(i._hasGetAll=!1)}function vs(i){return i.split(",").map(function(o,l){var u=(o=o.trim()).replace(/([&*]|\+\+)/g,""),d=/^\[/.test(u)?u.match(/^\[(.*)\]$/)[1].split("+"):u;return ai(u,d||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),f(d),l===0)})}var Pa=(wr.prototype._parseStoresSpec=function(i,o){c(i).forEach(function(l){if(i[l]!==null){var u=vs(i[l]),d=u.shift();if(d.unique=!0,d.multi)throw new J.Schema("Primary key cannot be multi-valued");u.forEach(function(h){if(h.auto)throw new J.Schema("Only primary key can be marked as autoIncrement (++)");if(!h.keyPath)throw new J.Schema("Index must have a name and cannot be an empty string")}),o[l]=li(l,d,u)}})},wr.prototype.stores=function(l){var o=this.db;this._cfg.storesSource=this._cfg.storesSource?m(this._cfg.storesSource,l):l;var l=o._versions,u={},d={};return l.forEach(function(h){m(u,h._cfg.storesSource),d=h._cfg.dbschema={},h._parseStoresSpec(u,d)}),o._dbSchema=d,ui(o,[o._allTables,o,o.Transaction.prototype]),mr(o,[o._allTables,o,o.Transaction.prototype,this._cfg.tables],c(d),d),o._storeNames=c(d),this},wr.prototype.upgrade=function(i){return this._cfg.contentUpgrade=$t(this._cfg.contentUpgrade||le,i),this},wr);function wr(){}function hi(i,o){var l=i._dbNamesDB;return l||(l=i._dbNamesDB=new Xt(cr,{addons:[],indexedDB:i,IDBKeyRange:o})).version(1).stores({dbnames:"name"}),l.table("dbnames")}function pi(i){return i&&typeof i.databases=="function"}function mi(i){return nn(function(){return Y.letThrough=!0,i()})}function gi(i){return!("from"in i)}var dt=function(i,o){if(!this){var l=new dt;return i&&"d"in i&&m(l,i),l}m(this,arguments.length?{d:1,from:i,to:1<arguments.length?o:i}:{d:0})};function Vn(i,o,l){var u=xe(o,l);if(!isNaN(u)){if(0<u)throw RangeError();if(gi(i))return m(i,{from:o,to:l,d:1});var d=i.l,u=i.r;if(xe(l,i.from)<0)return d?Vn(d,o,l):i.l={from:o,to:l,d:1,l:null,r:null},$s(i);if(0<xe(o,i.to))return u?Vn(u,o,l):i.r={from:o,to:l,d:1,l:null,r:null},$s(i);xe(o,i.from)<0&&(i.from=o,i.l=null,i.d=u?u.d+1:1),0<xe(l,i.to)&&(i.to=l,i.r=null,i.d=i.l?i.l.d+1:1),l=!i.r,d&&!i.l&&Yn(i,d),u&&l&&Yn(i,u)}}function Yn(i,o){gi(o)||(function l(u,$){var h=$.from,g=$.to,y=$.l,$=$.r;Vn(u,h,g),y&&l(u,y),$&&l(u,$)})(i,o)}function xs(i,o){var l=vr(o),u=l.next();if(u.done)return!1;for(var d=u.value,h=vr(i),g=h.next(d.from),y=g.value;!u.done&&!g.done;){if(xe(y.from,d.to)<=0&&0<=xe(y.to,d.from))return!0;xe(d.from,y.from)<0?d=(u=l.next(y.from)).value:y=(g=h.next(d.from)).value}return!1}function vr(i){var o=gi(i)?null:{s:0,n:i};return{next:function(l){for(var u=0<arguments.length;o;)switch(o.s){case 0:if(o.s=1,u)for(;o.n.l&&xe(l,o.n.from)<0;)o={up:o,n:o.n.l,s:1};else for(;o.n.l;)o={up:o,n:o.n.l,s:1};case 1:if(o.s=2,!u||xe(l,o.n.to)<=0)return{value:o.n,done:!1};case 2:if(o.n.r){o.s=3,o={up:o,n:o.n.r,s:0};continue}case 3:o=o.up}return{done:!0}}}}function $s(i){var o,l,u=(((o=i.r)===null||o===void 0?void 0:o.d)||0)-(((l=i.l)===null||l===void 0?void 0:l.d)||0),d=1<u?"r":u<-1?"l":"";d&&(o=d=="r"?"l":"r",l=s({},i),u=i[d],i.from=u.from,i.to=u.to,i[d]=u[d],l[d]=u[o],(i[o]=l).d=Cs(l)),i.d=Cs(i)}function Cs(l){var o=l.r,l=l.l;return(o?l?Math.max(o.d,l.d):o.d:l?l.d:0)+1}function xr(i,o){return c(o).forEach(function(l){i[l]?Yn(i[l],o[l]):i[l]=(function u(d){var h,g,y={};for(h in d)j(d,h)&&(g=d[h],y[h]=!g||typeof g!="object"||p.has(g.constructor)?g:u(g));return y})(o[l])}),i}function bi(i,o){return i.all||o.all||Object.keys(i).some(function(l){return o[l]&&xs(o[l],i[l])})}B(dt.prototype,((Pt={add:function(i){return Yn(this,i),this},addKey:function(i){return Vn(this,i,i),this},addKeys:function(i){var o=this;return i.forEach(function(l){return Vn(o,l,l)}),this},hasKey:function(i){var o=vr(this).next(i).value;return o&&xe(o.from,i)<=0&&0<=xe(o.to,i)}})[oe]=function(){return vr(this)},Pt));var bn={},yi={},wi=!1;function $r(i){xr(yi,i),wi||(wi=!0,setTimeout(function(){wi=!1,vi(yi,!(yi={}))},0))}function vi(i,o){o===void 0&&(o=!1);var l=new Set;if(i.all)for(var u=0,d=Object.values(bn);u<d.length;u++)Es(g=d[u],i,l,o);else for(var h in i){var g,y=/^idb\:\/\/(.*)\/(.*)\//.exec(h);y&&(h=y[1],y=y[2],(g=bn["idb://".concat(h,"/").concat(y)])&&Es(g,i,l,o))}l.forEach(function($){return $()})}function Es(i,o,l,u){for(var d=[],h=0,g=Object.entries(i.queries.query);h<g.length;h++){for(var y=g[h],$=y[0],E=[],P=0,w=y[1];P<w.length;P++){var D=w[P];bi(o,D.obsSet)?D.subscribers.forEach(function(_){return l.add(_)}):u&&E.push(D)}u&&d.push([$,E])}if(u)for(var C=0,A=d;C<A.length;C++){var T=A[C],$=T[0],E=T[1];i.queries.query[$]=E}}function ja(i){var o=i._state,l=i._deps.indexedDB;if(o.isBeingOpened||i.idbdb)return o.dbReadyPromise.then(function(){return o.dbOpenError?Qe(o.dbOpenError):i});o.isBeingOpened=!0,o.dbOpenError=null,o.openComplete=!1;var u=o.openCanceller,d=Math.round(10*i.verno),h=!1;function g(){if(o.openCanceller!==u)throw new J.DatabaseClosed("db.open() was cancelled")}function y(){return new G(function(D,C){if(g(),!l)throw new J.MissingAPI;var A=i.name,T=o.autoSchema||!d?l.open(A):l.open(A,d);if(!T)throw new J.MissingAPI;T.onerror=qt(C),T.onblocked=Re(i._fireOnBlocked),T.onupgradeneeded=Re(function(_){var R;P=T.transaction,o.autoSchema&&!i._options.allowEmptyDB?(T.onerror=Un,P.abort(),T.result.close(),(R=l.deleteDatabase(A)).onsuccess=R.onerror=Re(function(){C(new J.NoSuchDatabase("Database ".concat(A," doesnt exist")))})):(P.onerror=qt(C),_=_.oldVersion>Math.pow(2,62)?0:_.oldVersion,w=_<1,i.idbdb=T.result,h&&Aa(i,P),_a(i,_/10,P,C))},C),T.onsuccess=Re(function(){P=null;var _,R,z,I,L,U=i.idbdb=T.result,Q=ie(U.objectStoreNames);if(0<Q.length)try{var W=U.transaction((I=Q).length===1?I[0]:I,"readonly");if(o.autoSchema)R=U,z=W,(_=i).verno=R.version/10,z=_._dbSchema=br(0,R,z),_._storeNames=ie(R.objectStoreNames,0),mr(_,[_._allTables],c(z),z);else if(yr(i,i._dbSchema,W),((L=di(br(0,(L=i).idbdb,W),L._dbSchema)).add.length||L.change.some(function(K){return K.add.length||K.change.length}))&&!h)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),U.close(),d=U.version+1,h=!0,D(y());pr(i,W)}catch{}Pn.push(i),U.onversionchange=Re(function(K){o.vcFired=!0,i.on("versionchange").fire(K)}),U.onclose=Re(function(K){i.on("close").fire(K)}),w&&(L=i._deps,W=A,U=L.indexedDB,L=L.IDBKeyRange,pi(U)||W===cr||hi(U,L).put({name:W}).catch(le)),D()},C)}).catch(function(D){switch(D?.name){case"UnknownError":if(0<o.PR1398_maxLoop)return o.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),y();break;case"VersionError":if(0<d)return d=0,y()}return G.reject(D)})}var $,E=o.dbReadyResolve,P=null,w=!1;return G.race([u,(typeof navigator>"u"?G.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(D){function C(){return indexedDB.databases().finally(D)}$=setInterval(C,100),C()}).finally(function(){return clearInterval($)}):Promise.resolve()).then(y)]).then(function(){return g(),o.onReadyBeingFired=[],G.resolve(mi(function(){return i.on.ready.fire(i.vip)})).then(function D(){if(0<o.onReadyBeingFired.length){var C=o.onReadyBeingFired.reduce($t,le);return o.onReadyBeingFired=[],G.resolve(mi(function(){return C(i.vip)})).then(D)}})}).finally(function(){o.openCanceller===u&&(o.onReadyBeingFired=null,o.isBeingOpened=!1)}).catch(function(D){o.dbOpenError=D;try{P&&P.abort()}catch{}return u===o.openCanceller&&i._close(),Qe(D)}).finally(function(){o.openComplete=!0,E()}).then(function(){var D;return w&&(D={},i.tables.forEach(function(C){C.schema.indexes.forEach(function(A){A.name&&(D["idb://".concat(i.name,"/").concat(C.name,"/").concat(A.name)]=new dt(-1/0,[[[]]]))}),D["idb://".concat(i.name,"/").concat(C.name,"/")]=D["idb://".concat(i.name,"/").concat(C.name,"/:dels")]=new dt(-1/0,[[[]]])}),an(Wn).fire(D),vi(D,!0)),i})}function xi(i){function o(h){return i.next(h)}var l=d(o),u=d(function(h){return i.throw(h)});function d(h){return function($){var y=h($),$=y.value;return y.done?$:$&&typeof $.then=="function"?$.then(l,u):f($)?Promise.all($).then(l,u):l($)}}return d(o)()}function Cr(i,o,l){for(var u=f(i)?i.slice():[i],d=0;d<l;++d)u.push(o);return u}var Ta={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(i){return s(s({},i),{table:function(o){var l=i.table(o),u=l.schema,d={},h=[];function g(w,D,C){var A=Kn(w),T=d[A]=d[A]||[],_=w==null?0:typeof w=="string"?1:w.length,R=0<D,R=s(s({},C),{name:R?"".concat(A,"(virtual-from:").concat(C.name,")"):C.name,lowLevelIndex:C,isVirtual:R,keyTail:D,keyLength:_,extractKey:ci(w),unique:!R&&C.unique});return T.push(R),R.isPrimaryKey||h.push(R),1<_&&g(_===2?w[0]:w.slice(0,_-1),D+1,C),T.sort(function(z,I){return z.keyTail-I.keyTail}),R}o=g(u.primaryKey.keyPath,0,u.primaryKey),d[":id"]=[o];for(var y=0,$=u.indexes;y<$.length;y++){var E=$[y];g(E.keyPath,0,E)}function P(w){var D,C=w.query.index;return C.isVirtual?s(s({},w),{query:{index:C.lowLevelIndex,range:(D=w.query.range,C=C.keyTail,{type:D.type===1?2:D.type,lower:Cr(D.lower,D.lowerOpen?i.MAX_KEY:i.MIN_KEY,C),lowerOpen:!0,upper:Cr(D.upper,D.upperOpen?i.MIN_KEY:i.MAX_KEY,C),upperOpen:!0})}}):w}return s(s({},l),{schema:s(s({},u),{primaryKey:o,indexes:h,getIndexByKeyPath:function(w){return(w=d[Kn(w)])&&w[0]}}),count:function(w){return l.count(P(w))},query:function(w){return l.query(P(w))},openCursor:function(w){var D=w.query.index,C=D.keyTail,A=D.isVirtual,T=D.keyLength;return A?l.openCursor(P(w)).then(function(R){return R&&_(R)}):l.openCursor(w);function _(R){return Object.create(R,{continue:{value:function(z){z!=null?R.continue(Cr(z,w.reverse?i.MAX_KEY:i.MIN_KEY,C)):w.unique?R.continue(R.key.slice(0,T).concat(w.reverse?i.MIN_KEY:i.MAX_KEY,C)):R.continue()}},continuePrimaryKey:{value:function(z,I){R.continuePrimaryKey(Cr(z,i.MAX_KEY,C),I)}},primaryKey:{get:function(){return R.primaryKey}},key:{get:function(){var z=R.key;return T===1?z[0]:z.slice(0,T)}},value:{get:function(){return R.value}}})}}})}})}};function $i(i,o,l,u){return l=l||{},u=u||"",c(i).forEach(function(d){var h,g,y;j(o,d)?(h=i[d],g=o[d],typeof h=="object"&&typeof g=="object"&&h&&g?(y=x(h))!==x(g)?l[u+d]=o[d]:y==="Object"?$i(h,g,l,u+d+"."):h!==g&&(l[u+d]=o[d]):h!==g&&(l[u+d]=o[d])):l[u+d]=void 0}),c(o).forEach(function(d){j(i,d)||(l[u+d]=o[d])}),l}function Ci(i,o){return o.type==="delete"?o.keys:o.keys||o.values.map(i.extractKey)}var Da={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(i){return s(s({},i),{table:function(o){var l=i.table(o),u=l.schema.primaryKey;return s(s({},l),{mutate:function(d){var h=Y.trans,g=h.table(o).hook,y=g.deleting,$=g.creating,E=g.updating;switch(d.type){case"add":if($.fire===le)break;return h._promise("readwrite",function(){return P(d)},!0);case"put":if($.fire===le&&E.fire===le)break;return h._promise("readwrite",function(){return P(d)},!0);case"delete":if(y.fire===le)break;return h._promise("readwrite",function(){return P(d)},!0);case"deleteRange":if(y.fire===le)break;return h._promise("readwrite",function(){return(function w(D,C,A){return l.query({trans:D,values:!1,query:{index:u,range:C},limit:A}).then(function(T){var _=T.result;return P({type:"delete",keys:_,trans:D}).then(function(R){return 0<R.numFailures?Promise.reject(R.failures[0]):_.length<A?{failures:[],numFailures:0,lastResult:void 0}:w(D,s(s({},C),{lower:_[_.length-1],lowerOpen:!0}),A)})})})(d.trans,d.range,1e4)},!0)}return l.mutate(d);function P(w){var D,C,A,T=Y.trans,_=w.keys||Ci(u,w);if(!_)throw new Error("Keys missing");return(w=w.type==="add"||w.type==="put"?s(s({},w),{keys:_}):s({},w)).type!=="delete"&&(w.values=n([],w.values)),w.keys&&(w.keys=n([],w.keys)),D=l,A=_,((C=w).type==="add"?Promise.resolve([]):D.getMany({trans:C.trans,keys:A,cache:"immutable"})).then(function(R){var z=_.map(function(I,L){var U,Q,W,K=R[L],Z={onerror:null,onsuccess:null};return w.type==="delete"?y.fire.call(Z,I,K,T):w.type==="add"||K===void 0?(U=$.fire.call(Z,I,w.values[L],T),I==null&&U!=null&&(w.keys[L]=I=U,u.outbound||et(w.values[L],u.keyPath,I))):(U=$i(K,w.values[L]),(Q=E.fire.call(Z,U,I,K,T))&&(W=w.values[L],Object.keys(Q).forEach(function(X){j(W,X)?W[X]=Q[X]:et(W,X,Q[X])}))),Z});return l.mutate(w).then(function(I){for(var L=I.failures,U=I.results,Q=I.numFailures,I=I.lastResult,W=0;W<_.length;++W){var K=(U||_)[W],Z=z[W];K==null?Z.onerror&&Z.onerror(L[W]):Z.onsuccess&&Z.onsuccess(w.type==="put"&&R[W]?w.values[W]:K)}return{failures:L,results:U,numFailures:Q,lastResult:I}}).catch(function(I){return z.forEach(function(L){return L.onerror&&L.onerror(I)}),Promise.reject(I)})})}}})}})}};function ks(i,o,l){try{if(!o||o.keys.length<i.length)return null;for(var u=[],d=0,h=0;d<o.keys.length&&h<i.length;++d)xe(o.keys[d],i[h])===0&&(u.push(l?O(o.values[d]):o.values[d]),++h);return u.length===i.length?u:null}catch{return null}}var Fa={stack:"dbcore",level:-1,create:function(i){return{table:function(o){var l=i.table(o);return s(s({},l),{getMany:function(u){if(!u.cache)return l.getMany(u);var d=ks(u.keys,u.trans._cache,u.cache==="clone");return d?G.resolve(d):l.getMany(u).then(function(h){return u.trans._cache={keys:u.keys,values:u.cache==="clone"?O(h):h},h})},mutate:function(u){return u.type!=="add"&&(u.trans._cache=null),l.mutate(u)}})}}}};function Ss(i,o){return i.trans.mode==="readonly"&&!!i.subscr&&!i.trans.explicit&&i.trans.db._options.cache!=="disabled"&&!o.schema.primaryKey.outbound}function _s(i,o){switch(i){case"query":return o.values&&!o.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Oa={stack:"dbcore",level:0,name:"Observability",create:function(i){var o=i.schema.name,l=new dt(i.MIN_KEY,i.MAX_KEY);return s(s({},i),{transaction:function(u,d,h){if(Y.subscr&&d!=="readonly")throw new J.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Y.querier));return i.transaction(u,d,h)},table:function(u){var d=i.table(u),h=d.schema,g=h.primaryKey,w=h.indexes,y=g.extractKey,$=g.outbound,E=g.autoIncrement&&w.filter(function(C){return C.compound&&C.keyPath.includes(g.keyPath)}),P=s(s({},d),{mutate:function(C){function A(X){return X="idb://".concat(o,"/").concat(u,"/").concat(X),I[X]||(I[X]=new dt)}var T,_,R,z=C.trans,I=C.mutatedParts||(C.mutatedParts={}),L=A(""),U=A(":dels"),Q=C.type,Z=C.type==="deleteRange"?[C.range]:C.type==="delete"?[C.keys]:C.values.length<50?[Ci(g,C).filter(function(X){return X}),C.values]:[],W=Z[0],K=Z[1],Z=C.trans._cache;return f(W)?(L.addKeys(W),(Z=Q==="delete"||W.length===K.length?ks(W,Z):null)||U.addKeys(W),(Z||K)&&(T=A,_=Z,R=K,h.indexes.forEach(function(X){var re=T(X.name||"");function he(be){return be!=null?X.extractKey(be):null}function ge(be){return X.multiEntry&&f(be)?be.forEach(function(kt){return re.addKey(kt)}):re.addKey(be)}(_||R).forEach(function(be,ft){var fe=_&&he(_[ft]),ft=R&&he(R[ft]);xe(fe,ft)!==0&&(fe!=null&&ge(fe),ft!=null&&ge(ft))})}))):W?(K={from:(K=W.lower)!==null&&K!==void 0?K:i.MIN_KEY,to:(K=W.upper)!==null&&K!==void 0?K:i.MAX_KEY},U.add(K),L.add(K)):(L.add(l),U.add(l),h.indexes.forEach(function(X){return A(X.name).add(l)})),d.mutate(C).then(function(X){return!W||C.type!=="add"&&C.type!=="put"||(L.addKeys(X.results),E&&E.forEach(function(re){for(var he=C.values.map(function(fe){return re.extractKey(fe)}),ge=re.keyPath.findIndex(function(fe){return fe===g.keyPath}),be=0,kt=X.results.length;be<kt;++be)he[be][ge]=X.results[be];A(re.name).addKeys(he)})),z.mutatedParts=xr(z.mutatedParts||{},I),X})}}),w=function(A){var T=A.query,A=T.index,T=T.range;return[A,new dt((A=T.lower)!==null&&A!==void 0?A:i.MIN_KEY,(T=T.upper)!==null&&T!==void 0?T:i.MAX_KEY)]},D={get:function(C){return[g,new dt(C.key)]},getMany:function(C){return[g,new dt().addKeys(C.keys)]},count:w,query:w,openCursor:w};return c(D).forEach(function(C){P[C]=function(A){var T=Y.subscr,_=!!T,R=Ss(Y,d)&&_s(C,A)?A.obsSet={}:T;if(_){var z=function(K){return K="idb://".concat(o,"/").concat(u,"/").concat(K),R[K]||(R[K]=new dt)},I=z(""),L=z(":dels"),T=D[C](A),_=T[0],T=T[1];if((C==="query"&&_.isPrimaryKey&&!A.values?L:z(_.name||"")).add(T),!_.isPrimaryKey){if(C!=="count"){var U=C==="query"&&$&&A.values&&d.query(s(s({},A),{values:!1}));return d[C].apply(this,arguments).then(function(K){if(C==="query"){if($&&A.values)return U.then(function(he){return he=he.result,I.addKeys(he),K});var Z=A.values?K.result.map(y):K.result;(A.values?I:L).addKeys(Z)}else if(C==="openCursor"){var X=K,re=A.values;return X&&Object.create(X,{key:{get:function(){return L.addKey(X.primaryKey),X.key}},primaryKey:{get:function(){var he=X.primaryKey;return L.addKey(he),he}},value:{get:function(){return re&&I.addKey(X.primaryKey),X.value}}})}return K})}L.add(l)}}return d[C].apply(this,arguments)}}),P}})}};function As(i,o,l){if(l.numFailures===0)return o;if(o.type==="deleteRange")return null;var u=o.keys?o.keys.length:"values"in o&&o.values?o.values.length:1;return l.numFailures===u?null:(o=s({},o),f(o.keys)&&(o.keys=o.keys.filter(function(d,h){return!(h in l.failures)})),"values"in o&&f(o.values)&&(o.values=o.values.filter(function(d,h){return!(h in l.failures)})),o)}function Ei(i,o){return l=i,((u=o).lower===void 0||(u.lowerOpen?0<xe(l,u.lower):0<=xe(l,u.lower)))&&(i=i,(o=o).upper===void 0||(o.upperOpen?xe(i,o.upper)<0:xe(i,o.upper)<=0));var l,u}function Ps(i,o,D,u,d,h){if(!D||D.length===0)return i;var g=o.query.index,y=g.multiEntry,$=o.query.range,E=u.schema.primaryKey.extractKey,P=g.extractKey,w=(g.lowLevelIndex||g).extractKey,D=D.reduce(function(C,A){var T=C,_=[];if(A.type==="add"||A.type==="put")for(var R=new dt,z=A.values.length-1;0<=z;--z){var I,L=A.values[z],U=E(L);R.hasKey(U)||(I=P(L),(y&&f(I)?I.some(function(X){return Ei(X,$)}):Ei(I,$))&&(R.addKey(U),_.push(L)))}switch(A.type){case"add":var Q=new dt().addKeys(o.values?C.map(function(re){return E(re)}):C),T=C.concat(o.values?_.filter(function(re){return re=E(re),!Q.hasKey(re)&&(Q.addKey(re),!0)}):_.map(function(re){return E(re)}).filter(function(re){return!Q.hasKey(re)&&(Q.addKey(re),!0)}));break;case"put":var W=new dt().addKeys(A.values.map(function(re){return E(re)}));T=C.filter(function(re){return!W.hasKey(o.values?E(re):re)}).concat(o.values?_:_.map(function(re){return E(re)}));break;case"delete":var K=new dt().addKeys(A.keys);T=C.filter(function(re){return!K.hasKey(o.values?E(re):re)});break;case"deleteRange":var Z=A.range;T=C.filter(function(re){return!Ei(E(re),Z)})}return T},i);return D===i?i:(D.sort(function(C,A){return xe(w(C),w(A))||xe(E(C),E(A))}),o.limit&&o.limit<1/0&&(D.length>o.limit?D.length=o.limit:i.length===o.limit&&D.length<o.limit&&(d.dirty=!0)),h?Object.freeze(D):D)}function js(i,o){return xe(i.lower,o.lower)===0&&xe(i.upper,o.upper)===0&&!!i.lowerOpen==!!o.lowerOpen&&!!i.upperOpen==!!o.upperOpen}function Ra(i,o){return(function(l,u,d,h){if(l===void 0)return u!==void 0?-1:0;if(u===void 0)return 1;if((u=xe(l,u))===0){if(d&&h)return 0;if(d)return 1;if(h)return-1}return u})(i.lower,o.lower,i.lowerOpen,o.lowerOpen)<=0&&0<=(function(l,u,d,h){if(l===void 0)return u!==void 0?1:0;if(u===void 0)return-1;if((u=xe(l,u))===0){if(d&&h)return 0;if(d)return-1;if(h)return 1}return u})(i.upper,o.upper,i.upperOpen,o.upperOpen)}function za(i,o,l,u){i.subscribers.add(l),u.addEventListener("abort",function(){var d,h;i.subscribers.delete(l),i.subscribers.size===0&&(d=i,h=o,setTimeout(function(){d.subscribers.size===0&&N(h,d)},3e3))})}var Ia={stack:"dbcore",level:0,name:"Cache",create:function(i){var o=i.schema.name;return s(s({},i),{transaction:function(l,u,d){var h,g,y=i.transaction(l,u,d);return u==="readwrite"&&(g=(h=new AbortController).signal,d=function($){return function(){if(h.abort(),u==="readwrite"){for(var E=new Set,P=0,w=l;P<w.length;P++){var D=w[P],C=bn["idb://".concat(o,"/").concat(D)];if(C){var A=i.table(D),T=C.optimisticOps.filter(function(re){return re.trans===y});if(y._explicit&&$&&y.mutatedParts)for(var _=0,R=Object.values(C.queries.query);_<R.length;_++)for(var z=0,I=(Q=R[_]).slice();z<I.length;z++)bi((W=I[z]).obsSet,y.mutatedParts)&&(N(Q,W),W.subscribers.forEach(function(re){return E.add(re)}));else if(0<T.length){C.optimisticOps=C.optimisticOps.filter(function(re){return re.trans!==y});for(var L=0,U=Object.values(C.queries.query);L<U.length;L++)for(var Q,W,K,Z=0,X=(Q=U[L]).slice();Z<X.length;Z++)(W=X[Z]).res!=null&&y.mutatedParts&&($&&!W.dirty?(K=Object.isFrozen(W.res),K=Ps(W.res,W.req,T,A,W,K),W.dirty?(N(Q,W),W.subscribers.forEach(function(re){return E.add(re)})):K!==W.res&&(W.res=K,W.promise=G.resolve({result:K}))):(W.dirty&&N(Q,W),W.subscribers.forEach(function(re){return E.add(re)})))}}}E.forEach(function(re){return re()})}}},y.addEventListener("abort",d(!1),{signal:g}),y.addEventListener("error",d(!1),{signal:g}),y.addEventListener("complete",d(!0),{signal:g})),y},table:function(l){var u=i.table(l),d=u.schema.primaryKey;return s(s({},u),{mutate:function(h){var g=Y.trans;if(d.outbound||g.db._options.cache==="disabled"||g.explicit||g.idbtrans.mode!=="readwrite")return u.mutate(h);var y=bn["idb://".concat(o,"/").concat(l)];return y?(g=u.mutate(h),h.type!=="add"&&h.type!=="put"||!(50<=h.values.length||Ci(d,h).some(function($){return $==null}))?(y.optimisticOps.push(h),h.mutatedParts&&$r(h.mutatedParts),g.then(function($){0<$.numFailures&&(N(y.optimisticOps,h),($=As(0,h,$))&&y.optimisticOps.push($),h.mutatedParts&&$r(h.mutatedParts))}),g.catch(function(){N(y.optimisticOps,h),h.mutatedParts&&$r(h.mutatedParts)})):g.then(function($){var E=As(0,s(s({},h),{values:h.values.map(function(P,w){var D;return $.failures[w]?P:(P=(D=d.keyPath)!==null&&D!==void 0&&D.includes(".")?O(P):s({},P),et(P,d.keyPath,$.results[w]),P)})}),$);y.optimisticOps.push(E),queueMicrotask(function(){return h.mutatedParts&&$r(h.mutatedParts)})}),g):u.mutate(h)},query:function(h){if(!Ss(Y,u)||!_s("query",h))return u.query(h);var g=((E=Y.trans)===null||E===void 0?void 0:E.db._options.cache)==="immutable",w=Y,y=w.requery,$=w.signal,E=(function(A,T,_,R){var z=bn["idb://".concat(A,"/").concat(T)];if(!z)return[];if(!(T=z.queries[_]))return[null,!1,z,null];var I=T[(R.query?R.query.index.name:null)||""];if(!I)return[null,!1,z,null];switch(_){case"query":var L=I.find(function(U){return U.req.limit===R.limit&&U.req.values===R.values&&js(U.req.query.range,R.query.range)});return L?[L,!0,z,I]:[I.find(function(U){return("limit"in U.req?U.req.limit:1/0)>=R.limit&&(!R.values||U.req.values)&&Ra(U.req.query.range,R.query.range)}),!1,z,I];case"count":return L=I.find(function(U){return js(U.req.query.range,R.query.range)}),[L,!!L,z,I]}})(o,l,"query",h),P=E[0],w=E[1],D=E[2],C=E[3];return P&&w?P.obsSet=h.obsSet:(w=u.query(h).then(function(A){var T=A.result;if(P&&(P.res=T),g){for(var _=0,R=T.length;_<R;++_)Object.freeze(T[_]);Object.freeze(T)}else A.result=O(T);return A}).catch(function(A){return C&&P&&N(C,P),Promise.reject(A)}),P={obsSet:h.obsSet,promise:w,subscribers:new Set,type:"query",req:h,dirty:!1},C?C.push(P):(C=[P],(D=D||(bn["idb://".concat(o,"/").concat(l)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[h.query.index.name||""]=C)),za(P,C,y,$),P.promise.then(function(A){return{result:Ps(A.result,h,D?.optimisticOps,u,P,g)}})}})}})}};function Er(i,o){return new Proxy(i,{get:function(l,u,d){return u==="db"?o:Reflect.get(l,u,d)}})}var Xt=(Je.prototype.version=function(i){if(isNaN(i)||i<.1)throw new J.Type("Given version is not a positive number");if(i=Math.round(10*i)/10,this.idbdb||this._state.isBeingOpened)throw new J.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,i);var o=this._versions,l=o.filter(function(u){return u._cfg.version===i})[0];return l||(l=new this.Version(i),o.push(l),o.sort(Sa),l.stores({}),this._state.autoSchema=!1,l)},Je.prototype._whenReady=function(i){var o=this;return this.idbdb&&(this._state.openComplete||Y.letThrough||this._vip)?i():new G(function(l,u){if(o._state.openComplete)return u(new J.DatabaseClosed(o._state.dbOpenError));if(!o._state.isBeingOpened){if(!o._state.autoOpen)return void u(new J.DatabaseClosed);o.open().catch(le)}o._state.dbReadyPromise.then(l,u)}).then(i)},Je.prototype.use=function(i){var o=i.stack,l=i.create,u=i.level,d=i.name;return d&&this.unuse({stack:o,name:d}),i=this._middlewares[o]||(this._middlewares[o]=[]),i.push({stack:o,create:l,level:u??10,name:d}),i.sort(function(h,g){return h.level-g.level}),this},Je.prototype.unuse=function(i){var o=i.stack,l=i.name,u=i.create;return o&&this._middlewares[o]&&(this._middlewares[o]=this._middlewares[o].filter(function(d){return u?d.create!==u:!!l&&d.name!==l})),this},Je.prototype.open=function(){var i=this;return pn(Ke,function(){return ja(i)})},Je.prototype._close=function(){var i=this._state,o=Pn.indexOf(this);if(0<=o&&Pn.splice(o,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}i.isBeingOpened||(i.dbReadyPromise=new G(function(l){i.dbReadyResolve=l}),i.openCanceller=new G(function(l,u){i.cancelOpen=u}))},Je.prototype.close=function(l){var o=(l===void 0?{disableAutoOpen:!0}:l).disableAutoOpen,l=this._state;o?(l.isBeingOpened&&l.cancelOpen(new J.DatabaseClosed),this._close(),l.autoOpen=!1,l.dbOpenError=new J.DatabaseClosed):(this._close(),l.autoOpen=this._options.autoOpen||l.isBeingOpened,l.openComplete=!1,l.dbOpenError=null)},Je.prototype.delete=function(i){var o=this;i===void 0&&(i={disableAutoOpen:!0});var l=0<arguments.length&&typeof arguments[0]!="object",u=this._state;return new G(function(d,h){function g(){o.close(i);var y=o._deps.indexedDB.deleteDatabase(o.name);y.onsuccess=Re(function(){var $,E,P;$=o._deps,E=o.name,P=$.indexedDB,$=$.IDBKeyRange,pi(P)||E===cr||hi(P,$).delete(E).catch(le),d()}),y.onerror=qt(h),y.onblocked=o._fireOnBlocked}if(l)throw new J.InvalidArgument("Invalid closeOptions argument to db.delete()");u.isBeingOpened?u.dbReadyPromise.then(g):g()})},Je.prototype.backendDB=function(){return this.idbdb},Je.prototype.isOpen=function(){return this.idbdb!==null},Je.prototype.hasBeenClosed=function(){var i=this._state.dbOpenError;return i&&i.name==="DatabaseClosed"},Je.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Je.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Je.prototype,"tables",{get:function(){var i=this;return c(this._allTables).map(function(o){return i._allTables[o]})},enumerable:!1,configurable:!0}),Je.prototype.transaction=function(){var i=function(o,l,u){var d=arguments.length;if(d<2)throw new J.InvalidArgument("Too few arguments");for(var h=new Array(d-1);--d;)h[d-1]=arguments[d];return u=h.pop(),[o,_n(h),u]}.apply(this,arguments);return this._transaction.apply(this,i)},Je.prototype._transaction=function(i,o,l){var u=this,d=Y.trans;d&&d.db===this&&i.indexOf("!")===-1||(d=null);var h,g,y=i.indexOf("?")!==-1;i=i.replace("!","").replace("?","");try{if(g=o.map(function(E){if(E=E instanceof u.Table?E.name:E,typeof E!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return E}),i=="r"||i===ti)h=ti;else{if(i!="rw"&&i!=ni)throw new J.InvalidArgument("Invalid transaction mode: "+i);h=ni}if(d){if(d.mode===ti&&h===ni){if(!y)throw new J.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");d=null}d&&g.forEach(function(E){if(d&&d.storeNames.indexOf(E)===-1){if(!y)throw new J.SubTransaction("Table "+E+" not included in parent transaction.");d=null}}),y&&d&&!d.active&&(d=null)}}catch(E){return d?d._promise(null,function(P,w){w(E)}):Qe(E)}var $=function E(P,w,D,C,A){return G.resolve().then(function(){var T=Y.transless||Y,_=P._createTransaction(w,D,P._dbSchema,C);if(_.explicit=!0,T={trans:_,transless:T},C)_.idbtrans=C.idbtrans;else try{_.create(),_.idbtrans._explicit=!0,P._state.PR1398_maxLoop=3}catch(I){return I.name===Ue.InvalidState&&P.isOpen()&&0<--P._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),P.close({disableAutoOpen:!1}),P.open().then(function(){return E(P,w,D,null,A)})):Qe(I)}var R,z=tt(A);return z&&An(),T=G.follow(function(){var I;(R=A.call(_,_))&&(z?(I=rn.bind(null,null),R.then(I,I)):typeof R.next=="function"&&typeof R.throw=="function"&&(R=xi(R)))},T),(R&&typeof R.then=="function"?G.resolve(R).then(function(I){return _.active?I:Qe(new J.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):T.then(function(){return R})).then(function(I){return C&&_._resolve(),_._completion.then(function(){return I})}).catch(function(I){return _._reject(I),Qe(I)})})}.bind(null,this,h,g,d,l);return d?d._promise(h,$,"lock"):Y.trans?pn(Y.transless,function(){return u._whenReady($)}):this._whenReady($)},Je.prototype.table=function(i){if(!j(this._allTables,i))throw new J.InvalidTable("Table ".concat(i," does not exist"));return this._allTables[i]},Je);function Je(i,o){var l=this;this._middlewares={},this.verno=0;var u=Je.dependencies;this._options=o=s({addons:Je.addons,autoOpen:!0,indexedDB:u.indexedDB,IDBKeyRange:u.IDBKeyRange,cache:"cloned"},o),this._deps={indexedDB:o.indexedDB,IDBKeyRange:o.IDBKeyRange},u=o.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var d,h,g,y,$,E={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:le,dbReadyPromise:null,cancelOpen:le,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:o.autoOpen};E.dbReadyPromise=new G(function(w){E.dbReadyResolve=w}),E.openCanceller=new G(function(w,D){E.cancelOpen=D}),this._state=E,this.name=i,this.on=Mn(this,"populate","blocked","versionchange","close",{ready:[$t,le]}),this.on.ready.subscribe=pe(this.on.ready.subscribe,function(w){return function(D,C){Je.vip(function(){var A,T=l._state;T.openComplete?(T.dbOpenError||G.resolve().then(D),C&&w(D)):T.onReadyBeingFired?(T.onReadyBeingFired.push(D),C&&w(D)):(w(D),A=l,C||w(function _(){A.on.ready.unsubscribe(D),A.on.ready.unsubscribe(_)}))})}}),this.Collection=(d=this,Nn(wa.prototype,function(R,_){this.db=d;var C=as,A=null;if(_)try{C=_()}catch(z){A=z}var T=R._ctx,_=T.table,R=_.hook.reading.fire;this._ctx={table:_,index:T.index,isPrimKey:!T.index||_.schema.primKey.keyPath&&T.index===_.schema.primKey.name,range:C,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:A,or:T.or,valueMapper:R!==me?R:null}})),this.Table=(h=this,Nn(ds.prototype,function(w,D,C){this.db=h,this._tx=C,this.name=w,this.schema=D,this.hook=h._allTables[w]?h._allTables[w].hook:Mn(null,{creating:[He,le],reading:[xt,me],updating:[Ot,le],deleting:[en,le]})})),this.Transaction=(g=this,Nn($a.prototype,function(w,D,C,A,T){var _=this;this.db=g,this.mode=w,this.storeNames=D,this.schema=C,this.chromeTransactionDurability=A,this.idbtrans=null,this.on=Mn(this,"complete","error","abort"),this.parent=T||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new G(function(R,z){_._resolve=R,_._reject=z}),this._completion.then(function(){_.active=!1,_.on.complete.fire()},function(R){var z=_.active;return _.active=!1,_.on.error.fire(R),_.parent?_.parent._reject(R):z&&_.idbtrans&&_.idbtrans.abort(),Qe(R)})})),this.Version=(y=this,Nn(Pa.prototype,function(w){this.db=y,this._cfg={version:w,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=($=this,Nn(gs.prototype,function(w,D,C){if(this.db=$,this._ctx={table:w,index:D===":id"?null:D,or:C},this._cmp=this._ascending=xe,this._descending=function(A,T){return xe(T,A)},this._max=function(A,T){return 0<xe(A,T)?A:T},this._min=function(A,T){return xe(A,T)<0?A:T},this._IDBKeyRange=$._deps.IDBKeyRange,!this._IDBKeyRange)throw new J.MissingAPI})),this.on("versionchange",function(w){0<w.newVersion?console.warn("Another connection wants to upgrade database '".concat(l.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(l.name,"'. Closing db now to resume the delete request.")),l.close({disableAutoOpen:!1})}),this.on("blocked",function(w){!w.newVersion||w.newVersion<w.oldVersion?console.warn("Dexie.delete('".concat(l.name,"') was blocked")):console.warn("Upgrade '".concat(l.name,"' blocked by other connection holding version ").concat(w.oldVersion/10))}),this._maxKey=Hn(o.IDBKeyRange),this._createTransaction=function(w,D,C,A){return new l.Transaction(w,D,C,l._options.chromeTransactionDurability,A)},this._fireOnBlocked=function(w){l.on("blocked").fire(w),Pn.filter(function(D){return D.name===l.name&&D!==l&&!D._state.vcFired}).map(function(D){return D.on("versionchange").fire(w)})},this.use(Fa),this.use(Ia),this.use(Oa),this.use(Ta),this.use(Da);var P=new Proxy(this,{get:function(w,D,C){if(D==="_vip")return!0;if(D==="table")return function(T){return Er(l.table(T),P)};var A=Reflect.get(w,D,C);return A instanceof ds?Er(A,P):D==="tables"?A.map(function(T){return Er(T,P)}):D==="_createTransaction"?function(){return Er(A.apply(this,arguments),P)}:A}});this.vip=P,u.forEach(function(w){return w(l)})}var kr,Pt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Ba=(ki.prototype.subscribe=function(i,o,l){return this._subscribe(i&&typeof i!="function"?i:{next:i,error:o,complete:l})},ki.prototype[Pt]=function(){return this},ki);function ki(i){this._subscribe=i}try{kr={indexedDB:a.indexedDB||a.mozIndexedDB||a.webkitIndexedDB||a.msIndexedDB,IDBKeyRange:a.IDBKeyRange||a.webkitIDBKeyRange}}catch{kr={indexedDB:null,IDBKeyRange:null}}function Ts(i){var o,l=!1,u=new Ba(function(d){var h=tt(i),g,y=!1,$={},E={},P={get closed(){return y},unsubscribe:function(){y||(y=!0,g&&g.abort(),w&&an.storagemutated.unsubscribe(C))}};d.start&&d.start(P);var w=!1,D=function(){return ei(A)},C=function(T){xr($,T),bi(E,$)&&D()},A=function(){var T,_,R;!y&&kr.indexedDB&&($={},T={},g&&g.abort(),g=new AbortController,R=(function(z){var I=Pe();try{h&&An();var L=nn(i,z);return L=h?L.finally(rn):L}finally{I&&Le()}})(_={subscr:T,signal:g.signal,requery:D,querier:i,trans:null}),Promise.resolve(R).then(function(z){l=!0,o=z,y||_.signal.aborted||($={},(function(I){for(var L in I)if(j(I,L))return;return 1})(E=T)||w||(an(Wn,C),w=!0),ei(function(){return!y&&d.next&&d.next(z)}))},function(z){l=!1,["DatabaseClosedError","AbortError"].includes(z?.name)||y||ei(function(){y||d.error&&d.error(z)})}))};return setTimeout(D,0),P});return u.hasValue=function(){return l},u.getValue=function(){return o},u}var yn=Xt;function Si(i){var o=ln;try{ln=!0,an.storagemutated.fire(i),vi(i,!0)}finally{ln=o}}B(yn,s(s({},De),{delete:function(i){return new yn(i,{addons:[]}).delete()},exists:function(i){return new yn(i,{addons:[]}).open().then(function(o){return o.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(i){try{return o=yn.dependencies,l=o.indexedDB,o=o.IDBKeyRange,(pi(l)?Promise.resolve(l.databases()).then(function(u){return u.map(function(d){return d.name}).filter(function(d){return d!==cr})}):hi(l,o).toCollection().primaryKeys()).then(i)}catch{return Qe(new J.MissingAPI)}var o,l},defineClass:function(){return function(i){m(this,i)}},ignoreTransaction:function(i){return Y.trans?pn(Y.transless,i):i()},vip:mi,async:function(i){return function(){try{var o=xi(i.apply(this,arguments));return o&&typeof o.then=="function"?o:G.resolve(o)}catch(l){return Qe(l)}}},spawn:function(i,o,l){try{var u=xi(i.apply(l,o||[]));return u&&typeof u.then=="function"?u:G.resolve(u)}catch(d){return Qe(d)}},currentTransaction:{get:function(){return Y.trans||null}},waitFor:function(i,o){return o=G.resolve(typeof i=="function"?yn.ignoreTransaction(i):i).timeout(o||6e4),Y.trans?Y.trans.waitFor(o):o},Promise:G,debug:{get:function(){return Ae},set:function(i){Ie(i)}},derive:ne,extend:m,props:B,override:pe,Events:Mn,on:an,liveQuery:Ts,extendObservabilitySet:xr,getByKeyPath:bt,setByKeyPath:et,delByKeyPath:function(i,o){typeof o=="string"?et(i,o,void 0):"length"in o&&[].map.call(o,function(l){et(i,l,void 0)})},shallowClone:Kt,deepClone:O,getObjectDiff:$i,cmp:xe,asap:vt,minKey:-1/0,addons:[],connections:Pn,errnames:Ue,dependencies:kr,cache:bn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(i){return parseInt(i)}).reduce(function(i,o,l){return i+o/Math.pow(10,2*l)})})),yn.maxKey=Hn(yn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(an(Wn,function(i){ln||(i=new CustomEvent(oi,{detail:i}),ln=!0,dispatchEvent(i),ln=!1)}),addEventListener(oi,function(i){i=i.detail,ln||Si(i)}));var Dn,ln=!1,Ds=function(){};return typeof BroadcastChannel<"u"&&((Ds=function(){(Dn=new BroadcastChannel(oi)).onmessage=function(i){return i.data&&Si(i.data)}})(),typeof Dn.unref=="function"&&Dn.unref(),an(Wn,function(i){ln||Dn.postMessage(i)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(i){if(!Xt.disableBfCache&&i.persisted){Ae&&console.debug("Dexie: handling persisted pagehide"),Dn?.close();for(var o=0,l=Pn;o<l.length;o++)l[o].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(i){!Xt.disableBfCache&&i.persisted&&(Ae&&console.debug("Dexie: handling persisted pageshow"),Ds(),Si({all:new dt(-1/0,[[]])}))})),G.rejectionMapper=function(i,o){return!i||i instanceof ze||i instanceof TypeError||i instanceof SyntaxError||!i.name||!We[i.name]?i:(o=new We[i.name](o||i.message,i),"stack"in i&&q(o,"stack",{get:function(){return this.inner.stack}}),o)},Ie(Ae),s(Xt,Object.freeze({__proto__:null,Dexie:Xt,liveQuery:Ts,Entity:ls,cmp:xe,PropModSymbol:Gt,PropModification:qn,replacePrefix:function(i,o){return new qn({replacePrefix:[i,o]})},add:function(i){return new qn({add:i})},remove:function(i){return new qn({remove:i})},default:Xt,RangeSet:dt,mergeRanges:Yn,rangesOverlap:xs}),{default:Xt}),Xt})})(Dr)),Dr.exports}var xl=vl();const zi=yl(xl),Ks=Symbol.for("Dexie"),zr=globalThis[Ks]||(globalThis[Ks]=zi);if(zi.semVer!==zr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${zi.semVer} and ${zr.semVer}`);const{liveQuery:Po,mergeRanges:Df,rangesOverlap:Ff,RangeSet:Of,cmp:Rf,Entity:zf,PropModSymbol:If,PropModification:Bf,replacePrefix:Lf,add:Mf,remove:Nf}=zr,$l="easydb";let _r=null;function Cl(){if(_r)return _r;const e=new zr($l);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),_r={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins")},_r}function Ar(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(s=>jo(s,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const s=Po(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>s.unsubscribe()}}}function El(e,t){return{async find(r){const s=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return s.toArray();const n=Object.entries(r);return s.filter(a=>jo(a,n)).toArray()},async findOne(r){const s=await e.get(r);return s&&s.tableId===t?s:null},async insert(r){const s={...r,tableId:t};return await e.add(s),s},async bulkInsert(r){if(r.length===0)return[];const s=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(s),s},async upsert(r){const s={...r,tableId:t};return await e.put(s),s},async patch(r,s){if(await e.update(r,s)===0)throw new Error(`row patch: no row ${r}`);const a=await e.get(r);if(!a)throw new Error(`row patch: row ${r} vanished after update`);return a},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=Po(()=>e.where("tableId").equals(t).toArray()).subscribe({next:a=>r(a)});return()=>n.unsubscribe()}}}function jo(e,t){for(const[r,s]of t)if(e[r]!==s)return!1;return!0}function kl(e){return{workspaces:Ar(e.workspaces),tables:Ar(e.tables),settings:Ar(e.settings),plugins:Ar(e.plugins),rows:t=>El(e.rows,t)}}function Sl(e){const{base:t,providers:r,tableById:s,ctx:n}=e;return{...t,rows(a){const c=s(a),f=c?.source;if(f){const m=r.get(f.type);if(m)return m.create(c,n)}return t.rows(a)}}}function _l(){const e=new Map;return{on(t,r){let s=e.get(t);return s||(s=new Set,e.set(t,s)),s.add(r),()=>{s.delete(r)}},emit(t,r){const s=e.get(t);if(s)for(const n of s)try{n(r)}catch(a){console.error(`[event:${String(t)}] listener threw`,a)}}}}const dn=it`
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
`;function Sn(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const Vs=new WeakSet;function fn(e,t){if(Vs.has(t))return;Vs.add(t);let r=0,s=0,n=0,a=0,c=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",m=>{if(m.target.closest("button, input, textarea, select, a, label"))return;c=!0,r=m.clientX,s=m.clientY;const S=e.getBoundingClientRect();n=S.left,a=S.top,t.setPointerCapture(m.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",m=>{if(!c)return;const k=m.clientX-r,S=m.clientY-s,j=-e.offsetWidth+80,B=window.innerWidth-80,M=0,q=window.innerHeight-40,ne=Math.max(j,Math.min(B,n+k)),ue=Math.max(M,Math.min(q,a+S));e.style.position="fixed",e.style.left=`${ne}px`,e.style.top=`${ue}px`,e.style.margin="0"});const f=m=>{if(c){c=!1;try{t.releasePointerCapture(m.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",f),t.addEventListener("pointercancel",f)}var Al=Object.defineProperty,Pl=Object.getOwnPropertyDescriptor,To=(e,t,r,s)=>{for(var n=s>1?void 0:s?Pl(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Al(t,r,n),n};let jt=class extends Ze{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),jt.instance=this}disconnectedCallback(){super.disconnectedCallback(),jt.instance===this&&(jt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&fn(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(s=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:s}})}choice(e,t,r="Choose"){return this.enqueue(s=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:s}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return V`
      <dialog @cancel=${this.onCancel} @keydown=${Sn}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):Ne}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return V`
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
        `;case"prompt":return V`
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
        `;case"choice":return V`
          <div class="dialog-header">
            <h2>${e.title}</h2>
            <div class="header-actions">
              <button class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
            </div>
          </div>
          <div class="dialog-body">
            ${e.message?V`<p class="message">${e.message}</p>`:Ne}
            <div class="choices">
              ${e.options.map(t=>V`<button class="choice" @click=${()=>this.closeAndResolve(t)}>
                    ${t}
                  </button>`)}
            </div>
          </div>
        `}}};jt.instance=null;jt.styles=[dn,it`
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
    `];To([ee()],jt.prototype,"current",2);jt=To([ct("host-dialogs")],jt);const Zt=it`
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
`;var jl=Object.defineProperty,Tl=Object.getOwnPropertyDescriptor,Do=(e,t,r,s)=>{for(var n=s>1?void 0:s?Tl(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&jl(t,r,n),n};let Qt=class extends Ze{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),Qt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Qt.instance===this&&(Qt.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const s=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),s)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return V`
      ${this.toasts.map(e=>V`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${Fl(e.kind)}</span>
            <span class="body">
              ${e.title?V`<strong>${e.title}</strong>`:""}${Dl(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};Qt.instance=null;Qt.styles=[Zt,it`
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
    `];Do([ee()],Qt.prototype,"toasts",2);Qt=Do([ct("toast-host")],Qt);function Dl(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let s=0,n;for(;(n=t.exec(e))!==null;)n.index>s&&r.push(e.slice(s,n.index)),r.push({url:n[0]}),s=n.index+n[0].length;return s<e.length&&r.push(e.slice(s)),r.length===0?e:r.map(a=>typeof a=="string"?a:V`<a href=${a.url} target="_blank" rel="noopener noreferrer">${a.url}</a>`)}function Fl(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Ol(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map}}function xn(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function Pi(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function Rl(e){return{registerHeaderButton:t=>xn(e.headerButtons,t),registerFooterButton:t=>xn(e.footerButtons,t),registerTableButton:t=>xn(e.tableButtons,t),registerImporter:t=>xn(e.importers,t),registerExporter:t=>xn(e.exporters,t),registerUrlSource:t=>xn(e.urlSources,t),registerDropHandler:t=>xn(e.dropHandlers,t),registerCellRenderer:(t,r)=>Pi(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>Pi(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>Pi(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},dialogs:zl}}const zl={async alert(e,t){const r=jt.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=jt.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const s=jt.instance;return s?s.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const s=jt.instance;if(s)return s.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=Qt.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}};function Il(e){const t=Rl(e.registries),r=e.registries.rowSources,s=a=>(r.set(a.type,a),()=>{r.get(a.type)===a&&r.delete(a.type)}),n={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:n,registerRowSource:s,backend:{fetch:async(a,c)=>{const f=await Bl(e.store),m=c?.body instanceof ArrayBuffer;if(!f||m)return globalThis.fetch(a,c);const k={url:a};return c?.method&&(k.method=c.method),c?.headers&&(k.headers=c.headers),typeof c?.body=="string"&&(k.body=c.body),globalThis.fetch(`${f}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)})},async saveFile(a,c,f){const m=typeof c=="string"?new Blob([c],{type:f??"application/octet-stream"}):c,k=URL.createObjectURL(m),S=document.createElement("a");S.href=k,S.download=a,S.rel="noopener",document.body.appendChild(S),S.click(),S.remove(),setTimeout(()=>URL.revokeObjectURL(k),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function Bl(e){const r=(await e.settings.findOne("server-sync:url"))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}const Ll={name:"csv-import",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"easyDBAccess built-ins"};function Ml(e){e.ui.registerImporter(Nl),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const s=Zl(t).filter(ec);if(s.length===0)return!1;t.preventDefault();for(const n of s)await ql(e,n);return!0})}const Nl={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return Ur(t)}};async function ql(e,t){const r=e.workspaceId();if(!r)throw new Error("csv-import: no active workspace");const s=await t.text(),n=t.name.replace(/\.csv$/i,"")||"imported",a=(await e.store.tables.find()).find(S=>S.workspaceId===r&&S.name===n);let c,f;if(a){const S=await e.ui.dialogs.choice(`A table named "${n}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!S)return;S==="Append rows"?(f="append",c=a.id):S==="Overwrite rows"?(f="overwrite",c=a.id):(f="new",c=Pr())}else f="new",c=Pr();e.events.emit("import:before",{source:"csv",tableId:c});let m;if(f==="new"){const S=Ur(s),j=a?`${n} (${Date.now().toString(36)})`:n;await e.store.tables.insert({id:c,workspaceId:r,name:j,code:Ii(j),columns:S.columns,view:"table",updatedAt:Date.now()}),m=S.rows.map(B=>({id:Pr(),tableId:c,data:B,updatedAt:Date.now()}))}else{const S=a.columns;if(m=Fo(s).rows.map(B=>{const M={};for(let q=0;q<S.length;q++){const ne=S[q];M[ne.field]=zo(B[q]??"",ne.type)}return{id:Pr(),tableId:c,data:M,updatedAt:Date.now()}}),f==="overwrite"){const B=e.store.rows(c),M=await B.find();await B.bulkRemove(M.map(q=>q.id))}}await e.store.rows(c).bulkInsert(m),e.events.emit("import:after",{source:"csv",tableId:c,rowCount:m.length})}function Fo(e){const t=e.replace(/﻿/,""),r=Oo(t),s=Ro(t,r);if(s.length===0)return{header:[],rows:[]};const n=s[0],a=s.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:n,rows:a}}function Ur(e){const t=e.replace(/﻿/,""),r=Oo(t),s=Ro(t,r);if(s.length===0)return{columns:[],rows:[]};const n=s[0],a=s.slice(1).filter(B=>!(B.length===1&&B[0]==="")),c=n.map((B,M)=>Hl(B,M)),f=c.map(B=>B.field),m=a.map(B=>{const M={};for(let q=0;q<f.length;q++)M[f[q]]=B[q]??"";return M}),k=c.map((B,M)=>B.type?B.type:Kl(m.map(q=>q[f[M]]??"").filter(q=>q.length>0))),S=c.map((B,M)=>{const q=k[M]??"string",ne={field:B.field,label:B.label,type:q},ue=Wl(q),$e=B.renderer??ue;return $e&&(ne.renderer=$e),B.default!==void 0&&(ne.default=B.default),B.max!=null&&(ne.max=B.max),B.unique&&(ne.unique=!0),B.notnull&&(ne.notnull=!0),B.hidden&&(ne.hidden=!0),ne}),j=m.map(B=>{const M={};for(let q=0;q<f.length;q++){const ne=f[q],ue=k[q]??"string";M[ne]=zo(B[ne]??"",ue)}return M});return{columns:S,rows:j}}const Ul=new Set(["string","number","boolean","date","datetime"]),Ys={color:"color",image:"image"};function Wl(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function Hl(e,t){const r=e.trim();if(!r.includes(":"))return{field:Ii(r||`col_${t+1}`),label:r||`Column ${t+1}`};const s=r.split(":"),n=Ii(s[0]||`col_${t+1}`),a=(s[1]??s[0]??"").trim()||n,c={field:n,label:a},f=(s[2]??"").trim();f&&(Ul.has(f)?c.type=f:Ys[f]&&(c.type="string",c.renderer=Ys[f]));const m=(s[3]??"").trim();m&&(c.default=m);const k=(s[4]??"").trim();if(k){const j=Number(k);Number.isFinite(j)&&j>0&&(c.max=j)}const S=(s[5]??"").toLowerCase();return S.includes("u")&&(c.unique=!0),S.includes("n")&&(c.notnull=!0),S.includes("h")&&(c.hidden=!0),c}function Oo(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const a of t)a in r&&(r[a]+=1);let s=",",n=-1;for(const a of[",",";","	"])(r[a]??0)>n&&(s=a,n=r[a]??0);return s}function Ro(e,t){const r=[];let s=[],n="",a=!1;for(let c=0;c<e.length;c++){const f=e[c];a?f==='"'?e[c+1]==='"'?(n+='"',c++):a=!1:n+=f:f==='"'?a=!0:f===t?(s.push(n),n=""):f===`
`||f==="\r"?(f==="\r"&&e[c+1]===`
`&&c++,s.push(n),r.push(s),s=[],n=""):n+=f}return(n.length>0||s.length>0)&&(s.push(n),r.push(s)),r}function Kl(e){return e.length===0?"string":e.every(Yl)?"boolean":e.every(Gl)?"number":e.every(Ql)?"datetime":e.every(Xl)?"date":"string"}const Vl=/^(true|false|yes|no|0|1)$/i;function Yl(e){return Vl.test(e.trim())}function Gl(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function Xl(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Ql(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function zo(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const s=Number(r);return Number.isFinite(s)?s:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return Io(r);case"datetime":return Jl(r);default:return e}}function Io(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let s=parseInt(t[1],10),n=parseInt(t[2],10);const a=t[3];let c=parseInt(a,10);a.length===2&&(c+=2e3);let f,m;return s>12?(f=s,m=n):n>12?(m=s,f=n):(f=s,m=n),`${c.toString().padStart(4,"0")}-${m.toString().padStart(2,"0")}-${f.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function Jl(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const s=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(s)return`${Io(`${s[1]}/${s[2]}/${s[3]}`)}T${s[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const a=n.toISOString();return`${a.slice(0,10)}T${a.slice(11,16)}`}return e}function Zl(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const s of Array.from(t.items))if(s.kind==="file"){const n=s.getAsFile();n&&r.push(n)}return r}return[]}function ec(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function Ii(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function Pr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const tc=Object.freeze(Object.defineProperty({__proto__:null,init:Ml,meta:Ll,parseCsv:Ur,parseCsvRaw:Fo},Symbol.toStringTag,{value:"Module"})),nc={name:"csv-export",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"easyDBAccess built-ins"},rc={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Xi(e,t)}};function ic(e){e.ui.registerExporter(rc),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const s=await t.store.tables.findOne(r.tableId);if(!s)return;const n=await t.store.rows(s.id).find(),a=Xi(s,n);await t.backend.saveFile(`${s.code||s.name||"table"}.csv`,a,"text/csv")}})}function Xi(e,t){const r=e.columns.map(a=>a.field),s=e.columns.map(a=>Gs(a.label??a.field)),n=t.map(a=>r.map(c=>Gs(sc(a.data[c]))).join(","));return[s.join(","),...n].join(`\r
`)}function sc(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function Gs(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const oc=Object.freeze(Object.defineProperty({__proto__:null,init:ic,meta:nc,serializeCsv:Xi},Symbol.toStringTag,{value:"Module"}));var ac=Object.defineProperty,lc=Object.getOwnPropertyDescriptor,Ln=(e,t,r,s)=>{for(var n=s>1?void 0:s?lc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&ac(t,r,n),n};function Bi(e,t={}){return(St.instance??cc()).open(e,t)}function cc(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function uc(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let St=class extends Ze{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,s)=>r?s:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),St.instance=this}disconnectedCallback(){super.disconnectedCallback(),St.instance===this&&(St.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&fn(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(()=>!0),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return V`
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
            ${this.message?V`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,r)=>V`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${r}`}
                      .checked=${this.selected[r]??!1}
                      @change=${()=>this.toggle(r)}
                    />
                    <label for=${`tsel-${r}`}>
                      <span class="name">${t.name}</span>
                      <span class="size">${uc(t.size)}</span>
                      ${t.detail?V`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};St.instance=null;St.styles=[dn,it`
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
    `];Ln([ee()],St.prototype,"items",2);Ln([ee()],St.prototype,"selected",2);Ln([ee()],St.prototype,"heading",2);Ln([ee()],St.prototype,"message",2);Ln([ee()],St.prototype,"confirmLabel",2);St=Ln([ct("table-select-dialog")],St);const dc={name:"json-import",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"easyDBAccess built-ins"};function fc(e){e.ui.registerImporter(hc),e.ui.registerDropHandler(async t=>{const s=vc(t).filter(xc);if(s.length===0)return!1;t.preventDefault();for(const n of s)await pc(e,n);return!0})}const hc={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=Wr(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function pc(e,t){await Qi(e,await t.text(),t.name)}async function Qi(e,t,r){const s=e.workspaceId();if(!s)throw new Error("json-import: no active workspace");let n;try{n=JSON.parse(t)}catch(M){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${M.message}`)});return}const a=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=Wr(n,a);if(c.length===0)return;let f=c;if(c.length>1){const M=await Bi(c.map(q=>({name:q.name,size:q.rows.length})),{title:"Import tables",message:`"${r}" contains ${c.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!M)return;f=M.map(q=>c[q])}const m=(await e.store.tables.find()).filter(M=>M.workspaceId===s),k=new Set(f.map(M=>M.name)),S=m.filter(M=>k.has(M.name));let j;if(S.length===0&&f.length===1)j="append-new";else{const M=S.length>0?[`Overwrite matching (${S.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],q=await e.ui.dialogs.choice(`Importing ${f.length} table${f.length===1?"":"s"} from "${r}".${S.length>0?`

${S.length} table${S.length===1?"":"s"} share a name with existing data.`:""}`,M,"JSON import");if(!q)return;q.startsWith("Overwrite matching")?j="overwrite-matching":q==="Replace entire workspace"?j="replace-workspace":j="append-new"}if(j==="replace-workspace")for(const M of m){const q=e.store.rows(M.id),ne=await q.find();await q.bulkRemove(ne.map(ue=>ue.id)),await e.store.tables.remove(M.id)}const B=new Map(m.map(M=>[M.name,M]));for(const M of f){let q;const ne=j==="overwrite-matching"?B.get(M.name):void 0;if(ne){q=ne.id;const ie=e.store.rows(q),pe=await ie.find();await ie.bulkRemove(pe.map(Fe=>Fe.id)),await e.store.tables.patch(q,{columns:M.columns,...M.windowGeometry?{windowGeometry:M.windowGeometry}:{},...M.sortColumn?{sortColumn:M.sortColumn,sortAsc:M.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},updatedAt:Date.now()})}else q=Zs(),e.events.emit("import:before",{source:"json",tableId:q}),await e.store.tables.insert({id:q,workspaceId:s,name:M.name,code:$c(M.name),columns:M.columns,view:"table",...M.windowGeometry?{windowGeometry:M.windowGeometry}:{},...M.sortColumn?{sortColumn:M.sortColumn,sortAsc:M.sortAsc??!0}:{},updatedAt:Date.now()});const ue=e.store.rows(q),$e=M.rows.map(ie=>({id:Zs(),tableId:q,data:ie,updatedAt:Date.now()}));await ue.bulkInsert($e),e.events.emit("import:after",{source:"json",tableId:q,rowCount:M.rows.length})}}function Wr(e,t){if(zt(e)&&Xs(e))return Qs(e);if(zt(e)&&Array.isArray(e.tables)){const r=e,s=[];for(const n of r.tables){if(gc(n)){const a=n,c=zt(a.windowGeometry)?a.windowGeometry:void 0,f=typeof a.sortColumn=="string"?a.sortColumn:void 0,m=typeof a.sortAsc=="boolean"?a.sortAsc:void 0;s.push({name:String(n.name),columns:n.columns.map(bc),rows:Array.isArray(n.rows)?n.rows.filter(zt):[],...c?{windowGeometry:c}:{},...f?{sortColumn:f,sortAsc:m??!0}:{}});continue}zt(n)&&Xs(n)&&s.push(...Qs(n))}return s}if(Array.isArray(e)){const r=e.filter(zt);return r.length===0?[]:[{name:t,...Js(r)}]}return zt(e)?[{name:t,...Js([e])}]:[]}function Xs(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!zt(r))continue;const s=r;if(Array.isArray(s.dataArray)&&Array.isArray(s.columns))return!0}return!1}function Qs(e){const t=[];for(const[r,s]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!zt(s))continue;const n=s;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const a=r.replace(/\.table\.json$/,""),c=n.columns.map(S=>mc(S)),f=c.map(S=>S.field),m=n.dataArray.filter(S=>Array.isArray(S)).map(S=>{const j={};for(let B=0;B<f.length;B++)j[f[B]]=S[B];return j}),k={name:a,columns:c,rows:m};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const S=n.elementRect;k.windowGeometry={x:S.x,y:S.y,w:S.width??600,h:S.height??400,z:S.zIndex??100,minimized:!!S.minimized,maximized:!!S.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<f.length&&(k.sortColumn=f[n.sortColumn],k.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(k)}return t}function mc(e){const t=String(e.field??"col"),r=String(e.name??t),s=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:s};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function gc(e){return zt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function bc(e){if(!zt(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let s=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(s==="color"||s==="image")&&(n=n??s,s="string");const a={field:r,label:String(t.label??r),type:s};return n&&(a.renderer=n),typeof t.script=="string"&&(a.script=t.script),a}function Js(e){const t=new Set;for(const n of e)for(const a of Object.keys(n))t.add(a);return{columns:Array.from(t).map(n=>({field:n,label:n,type:yc(e.map(a=>a[n]))})),rows:e}}function yc(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&wc(r))?"date":"string"}function wc(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function zt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function vc(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const s of Array.from(t.items))if(s.kind==="file"){const n=s.getAsFile();n&&r.push(n)}return r}return[]}function xc(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function $c(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Zs(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Cc=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:Qi,init:fc,meta:dc,parsedToTables:Wr},Symbol.toStringTag,{value:"Module"}));class un extends Error{constructor(t,r){const s=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(s),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function Hr(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),s={};for(const[f,m]of t.searchParams)s[f]=m;let n,a=null,c=null;if(r.length>=2){c=decodeURIComponent(r[r.length-1]),a=decodeURIComponent(r[r.length-2]);const f=r.slice(0,r.length-2).join("/");n=t.origin+(f?"/"+f:"")}else r.length===1&&(a=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:a,table:c,query:s}}function Ir(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[s,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(s,String(n));return r.toString()}function Ec(e){const t=e?.next_url??null,r=e?.next,s=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],a=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(f=>Array.isArray(f)&&a?Object.fromEntries(a.map((m,k)=>[m,f[k]])):f),nextUrl:t,nextToken:s,hasMore:t!=null||s!=null,truncated:e?.truncated===!0}}function kc(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function Sc(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],s={},n=e?.column_details;if(Array.isArray(n))for(const f of n)s[f.column??f.name]=f;else n&&typeof n=="object"&&Object.assign(s,n);for(const f of r)f in s||(s[f]={});return{columns:(r.length?r:Object.keys(s)).map(f=>{const m=s[f]||{},k=m.is_pk===!0||m.is_pk===1||t.includes(f),S={field:f,label:Bo(f),type:kc(m.sqlite_type??m.type,f)};return(m.notnull===!0||m.notnull===1||k)&&(S.notnull=!0),k&&(S.unique=!0),m.hidden===!0&&(S.hidden=!0),S}),pks:t}}function Bo(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function Ji(e){const t=[],r=new Set;for(const s of e)for(const n of Object.keys(s))r.has(n)||(r.add(n),t.push(n));return t.map(s=>({field:s,label:Bo(s),type:_c(e.map(n=>n[s]))}))}function _c(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Ac(r))?"datetime":"string"}function Ac(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Pc(e){const t=new TextEncoder().encode(String(e));let r="";for(const s of t){const n=String.fromCharCode(s);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+s.toString(16).toUpperCase().padStart(2,"0")}return r}function jc(e,t){return!t||t.length===0?null:t.map(r=>Pc(e[r])).join(",")}function Tc(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const s of t){if(typeof s=="string"){r.push(s);continue}if(s&&typeof s=="object"&&typeof s.name=="string"){if(s.name==="_memory")continue;r.push(typeof s.route=="string"&&s.route?s.route:s.name)}}return r}function Dc(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],s=[];for(const n of r){if(typeof n=="string"){s.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&s.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return s}async function nr(e,t){let r;try{r=await e(t)}catch(n){const a=n?.message||"network error";throw new un({error:`Couldn't reach ${t} (${a}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new un(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const s=await r.json();if(s&&s.ok===!1)throw new un(s,r.status);return s}async function Fc(e,t){return Tc(await nr(e,`${t}/-/databases.json`))}async function eo(e,t,r){return Dc(await nr(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function Lo(e,t){const r=Ir(t,{_size:0,_extra:"columns"}),s=await nr(e,r),{columns:n,pks:a}=Sc(s),c=!!s&&s.column_details!=null;return{columns:n,pks:a,count:s?.count??null,typed:c,raw:s}}function Mo(e,t){if(t.length===0)return e;const r=new Map(Ji(t).map(s=>[s.field,s.type]));return e.map(s=>{if(s.type!=="string")return s;const n=r.get(s.field);return n&&n!=="string"?{...s,type:n}:s})}async function Zi(e,t,r={}){const s=r.maxRows??1e4,a={_size:r.pageSize??1e3,...r.extraParams||{}};let c=Ir(t,a);const f=[];let m=!1,k=!1,S=0;for(;c;){const j=await nr(e,c),B=Ec(j);f.push(...B.rows),m=m||B.truncated,S+=1;const M=B.nextUrl!=null?B.nextUrl:B.nextToken!=null?Ir(t,{...a,_next:B.nextToken}):null;M&&f.length<s&&B.rows.length>0?c=M:(k=M!=null&&B.rows.length>0,c=null)}return{rows:f,truncated:m,hasMore:k,pages:S}}function Oc(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function No(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function qo(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function Kr(e,t,r,s){let n;try{n=await e(t,{method:"POST",headers:Oc(s),body:JSON.stringify(r)})}catch(c){throw new un({error:`Couldn't reach ${t} (${c?.message||"network error"}).`},0)}if(n&&n.ok===!1){let c=null;try{c=await n.json()}catch{}throw new un(c&&typeof c=="object"?c:{error:`HTTP ${n.status} for ${t}`},n.status)}const a=await n.json();if(a&&a.ok===!1)throw new un(a,n.status);return a}async function to(e,t,r,s={}){const n=await Kr(e,No(t,"insert"),{rows:r,return:!0},s.token);return Array.isArray(n?.rows)?n.rows:[]}async function Rc(e,t,r,s,n={}){const a=await Kr(e,qo(t,r,"update"),{update:s,return:!0},n.token);return a&&typeof a.row=="object"&&a.row?a.row:Array.isArray(a?.rows)&&a.rows[0]?a.rows[0]:null}async function no(e,t,r,s={}){await Kr(e,qo(t,r,"delete"),{},s.token)}async function zc(e,t,r,s={}){const n=await Kr(e,No(t,"upsert"),{rows:r,return:!0},s.token);return Array.isArray(n?.rows)?n.rows:[]}async function Ic(e,t){const r=Ir(t,{_size:0,_extra:"primary_keys"}),s=await nr(e,r);return Array.isArray(s?.primary_keys)?s.primary_keys:[]}async function Uo(e,t,r={}){const s=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,s);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const a=await n.json(),c=a?.datasette?.version??a?.version??null;let f=null;try{f=(await(await e(`${t}/-/actor.json`,s)).json())?.actor??null}catch{}return{reachable:!0,version:c,actor:f,writable:!!(r.token&&f)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function es(e,t){return t?(r,s)=>{const n=(s??{}).headers??{};return e(r,{...s??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}class Bc extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function Wo(e){return`datasette:token:${e}`}function Lc(e,t){for(const[r,s]of Object.entries(t))if(r!=="data"&&e[r]!==s)return!1;return!0}function Mc(e,t){const r=e.source,s=r?.config??{},n={base:s.base,db:s.db,table:s.table,query:{}},a=Array.isArray(s.pks)&&s.pks.length>0?s.pks:["rowid"],c=r?.writable===!0,f=s.maxRows??1e4,m=s.pollIntervalMs??0,k=(ie,pe)=>t.backend.fetch(ie,pe);async function S(){const pe=(await t.settings.findOne(Wo(s.base)))?.value;return typeof pe=="string"&&pe.length>0?pe:void 0}const j=async(ie,pe)=>es(k,await S())(ie,pe);function B(ie){return{id:jc(ie,a)??Nc(),tableId:e.id,data:ie,updatedAt:Date.now()}}function M(ie){if(!c)throw new Bc(ie)}function q(ie){const pe={};for(const[Fe,vt]of Object.entries(ie))a.includes(Fe)||(pe[Fe]=vt);return pe}const ne=new Set;let ue=[];async function $e(){const{rows:ie}=await Zi(j,n,{maxRows:f});ue=ie.map(B);for(const pe of ne)pe(ue);return ue}return{async find(ie){const pe=await $e();return!ie||Object.keys(ie).length===0?pe:pe.filter(Fe=>Lc(Fe,ie))},async findOne(ie){return(ue.length?ue:await $e()).find(Fe=>Fe.id===ie)??null},async insert(ie){M("insert");const[pe]=await to(j,n,[ie.data]),Fe=B(pe??ie.data);return t.events.emit("row:created",{tableId:e.id,row:Fe}),$e(),Fe},async bulkInsert(ie){if(ie.length===0)return[];M("insert");const pe=await to(j,n,ie.map(vt=>vt.data)),Fe=(pe.length?pe:ie.map(vt=>vt.data)).map(B);return $e(),Fe},async upsert(ie){M("upsert");const[pe]=await zc(j,n,[ie.data]),Fe=B(pe??ie.data);return $e(),Fe},async patch(ie,pe){M("update");const Fe=pe.data,vt=q(Fe??{}),bt=await Rc(j,n,ie,vt),et=B(bt??{...Fe??{}});return t.events.emit("row:updated",{tableId:e.id,row:et,prev:et}),$e(),et},async remove(ie){M("delete"),await no(j,n,ie),t.events.emit("row:deleted",{tableId:e.id,rowId:ie}),$e()},async bulkRemove(ie){if(ie.length!==0){M("delete");for(const pe of ie)await no(j,n,pe);$e()}},subscribe(ie){ne.add(ie),$e();let pe=null;return m>0&&(pe=setInterval(()=>void $e(),m)),()=>{ne.delete(ie),pe&&clearInterval(pe)}}}}function Nc(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var qc=Object.defineProperty,Uc=Object.getOwnPropertyDescriptor,rr=(e,t,r,s)=>{for(var n=s>1?void 0:s?Uc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&qc(t,r,n),n};const Wc="https://latest.datasette.io/ephemeral";let Tt=class extends Ze{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();t&&this.finish({url:t,token:this.token.trim()})}}connectedCallback(){super.connectedCallback(),Tt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Tt.instance===this&&(Tt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&fn(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return V`
      <dialog @cancel=${this.onCancel} @keydown=${Sn}>
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
              URL
              <input
                type="text"
                autofocus
                placeholder="e.g. ${Wc}"
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
              Opens a live table backed by the remote Datasette — reads stay remote, and edits
              write back when the token grants them. The token is stored on this device only and
              is never synced or exported. A blank token opens the table read-only.
            </p>
          </div>
        </form>
      </dialog>
    `}};Tt.instance=null;Tt.styles=[dn,it`
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
      }
    `];rr([ee()],Tt.prototype,"url",2);rr([ee()],Tt.prototype,"token",2);rr([ee()],Tt.prototype,"status",2);rr([ee()],Tt.prototype,"statusKind",2);Tt=rr([ct("datasette-connect-dialog")],Tt);const ro=e=>e.replace(/^https?:\/\//,"");async function Ho(e,t,r){if(t.db&&t.table)return[{db:t.db,table:t.table,count:null,hidden:!1,pks:[]}];let s=[];if(t.db)for(const c of await eo(e,t.base,t.db))c.hidden||s.push(c);else{const c=await Fc(e,t.base);if(c.length===0)return[];let f=c;if(c.length>1){const m=await Bi(c.map(k=>({name:k,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${ro(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!m)return null;f=m.map(k=>c[k])}for(const m of f)try{for(const k of await eo(e,t.base,m))k.hidden||s.push(k)}catch{}}if(s.length===0)return[];const n=new Set(s.map(c=>c.db)).size>1,a=await Bi(s.map(c=>({name:n?`${c.db}/${c.table}`:c.table,size:c.count,detail:n?void 0:c.db})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${ro(t.base)}.`,confirmLabel:r});return a?a.map(c=>s[c]):null}const Hc='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Kc={name:"datasette-source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"easyDBAccess built-ins",optional:!0},Br={maxImportRows:1e4,pageSize:1e3},Vc="https://latest.datasette.io/fixtures/facetable";function Yc(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:Hc,tooltip:"Connect a live, editable Datasette table",onClick:()=>Jc(e)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:Mc}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const s=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Vc}`,"","Import from Datasette");s&&await io(t,s)}}),e.ui.registerDropHandler(async(t,r)=>{const s=t.dataTransfer?.getData("text/plain")||"";return Gc(s)?(t.preventDefault(),await io(r,s),!0):!1})}async function io(e,t){try{await ts(e,t)}catch(r){let s;r instanceof un?s=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:s=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(s,"Datasette import failed")}}function Gc(e){try{const t=Hr(e);return!!(t.db&&t.table)}catch{return!1}}async function ts(e,t){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const s=Hr(t),a=await Ho(S=>e.backend.fetch(S),s,"Import");if(a===null)return;if(a.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}if(s.db&&s.table&&a.length===1){const S=await so(e,r,s);(S.hasMore||S.truncated)&&Xc(e,S);return}let c=0,f=0;const m=[],k=[];for(const S of a)try{const j=await so(e,r,{base:s.base,db:S.db,table:S.table,query:{}});c+=1,f+=j.rowCount,(j.hasMore||j.truncated)&&m.push(`${S.db}/${S.table}`)}catch(j){k.push(`${S.db}/${S.table}: ${j?.message??String(j)}`)}Qc(e,{imported:c,totalRows:f,capped:m,failed:k,requested:a.length})}async function so(e,t,r){const s=`${r.db}/${r.table}`,n=ue=>e.backend.fetch(ue);let a=[],c=null,f=!1;try{const ue=await Lo(n,r);a=ue.columns,c=ue.count,f=ue.typed}catch{}const{rows:m,truncated:k,hasMore:S,pages:j}=await Zi(n,r,{maxRows:Br.maxImportRows,pageSize:Br.pageSize}),B=a.length===0?Ji(m):f?a:Mo(a,m),M=Date.now(),q=Li();e.events.emit("import:before",{source:"datasette",tableId:q}),await e.store.tables.insert({id:q,workspaceId:t,name:s,code:Vo(`${r.db}-${r.table}`),columns:B,view:"table",updatedAt:M});const ne=m.map(ue=>({id:Li(),tableId:q,data:ue,updatedAt:M}));return await e.store.rows(q).bulkInsert(ne),e.events.emit("import:after",{source:"datasette",tableId:q,rowCount:m.length}),{name:s,rowCount:m.length,hasMore:S,truncated:k,pages:j,count:c}}function Xc(e,t){const r=t.count!=null?` of ${t.count}`:"",s=t.name.split("/").pop()??t.name;e.ui.dialogs.toast(`Imported first ${t.rowCount}${r} rows from ${s} — more available (capped at ${Br.maxImportRows}). Live paging arrives with the Phase-2 connector.`,{kind:"warning",title:"Datasette import"})}function Qc(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,s=`${t.imported} table${t.imported===1?"":"s"}`;if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${s} (${r}); ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${s} (${r}). ${t.capped.length} capped at ${Br.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${s} (${r}) from Datasette.`,{kind:"success",title:"Datasette import"})}async function Jc(e){const t=Tt.instance??Zc(),r=(n,a)=>e.backend.fetch(n,a),s=await t.open({async onTest(n,a){const c=Hr(n),f=await Uo(r,c.base,{token:a||void 0});if(!f.reachable)return`Unreachable: ${f.error??"no response"}`;const m=f.version?` (Datasette ${f.version})`:"";return f.writable?`Reachable${m} — signed in, read-write.`:`Reachable${m} — read-only (no token / not authenticated).`}});if(s)try{await Ko(e,s.url,s.token)}catch(n){const a=n instanceof un?n.message:n?.message??String(n);await e.ui.dialogs.alert(a,"Connect Datasette failed")}}function Zc(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function Ko(e,t,r){const s=e.workspaceId();if(!s)throw new Error("datasette-source: no active workspace");const n=Hr(t),a=(j,B)=>e.backend.fetch(j,B),c=es(a,r||void 0),f=await Uo(a,n.base,{token:r||void 0});if(!f.reachable)throw new Error(`Couldn't reach ${n.base}${f.error?`: ${f.error}`:""}.`);r&&await e.store.settings.upsert({key:Wo(n.base),value:r});const m=await Ho(c,n,"Connect");if(m===null)return;if(m.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}let k=0;for(const j of m)await eu(e,s,n.base,j,f.writable,r),k+=1;const S=f.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${k} live table${k===1?"":"s"} from Datasette (${S}).`,{kind:"success",title:"Connect Datasette"})}async function eu(e,t,r,s,n,a){const c={base:r,db:s.db,table:s.table,query:{}},f=es((ne,ue)=>e.backend.fetch(ne,ue),a||void 0);let m=[],k=!1;try{const ne=await Lo(f,c);m=ne.columns,k=ne.typed}catch{}const{rows:S}=await Zi(f,c,{maxRows:50,pageSize:50}),j=m.length===0?Ji(S):k?m:Mo(m,S);let B=s.pks;if(!B||B.length===0)try{B=await Ic(f,c)}catch{B=[]}const M=j.map(ne=>B.includes(ne.field)?{...ne,unique:!0,notnull:!0}:ne),q=Li();return await e.store.tables.insert({id:q,workspaceId:t,name:`${s.db}/${s.table}`,code:Vo(`${s.db}-${s.table}`),columns:M,view:"table",source:{type:"datasette",writable:n,config:{base:r,db:s.db,table:s.table,pks:B}},updatedAt:Date.now()}),q}function Vo(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Li(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const tu=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:Ko,importDatasette:ts,init:Yc,meta:Kc},Symbol.toStringTag,{value:"Module"})),nu={name:"dump-export",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"easyDBAccess built-ins"};function ru(e){e.ui.registerFooterButton({id:"dump-export:dump",label:"Dump",icon:"archive",tooltip:"Export the current workspace as a JSON dump file",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await Vr(e);await e.backend.saveFile(`workspace-${t}.db.json`,r,"application/json")}})}async function Vr(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),s={workspaceId:t,exportedAt:Date.now(),tables:[]};for(const n of r){const a=await e.store.rows(n.id).find();s.tables.push({name:n.name,columns:n.columns,rows:a.map(c=>c.data),...n.windowGeometry?{windowGeometry:n.windowGeometry}:{},...n.sortColumn?{sortColumn:n.sortColumn,sortAsc:n.sortAsc??!0}:{}})}return JSON.stringify(s,null,2)}const iu=Object.freeze(Object.defineProperty({__proto__:null,init:ru,meta:nu,serializeWorkspace:Vr},Symbol.toStringTag,{value:"Module"})),su={name:"sql-export",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"easyDBAccess built-ins"};function ou(e){e.ui.registerFooterButton({id:"sql-export:dump",label:"SQL",icon:"storage",tooltip:"Export the current workspace as a .sql script",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await Yo(e);await e.backend.saveFile(`workspace-${t}.sql`,r,"application/sql")}})}async function Yo(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),s=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const a=await e.store.rows(n.id).find();s.push(au(n,a),"")}return s.push("COMMIT;",""),s.join(`
`)}function au(e,t){const r=Mi(e.code||e.name||`table_${e.id}`),s=['  "__id" TEXT PRIMARY KEY',...e.columns.map(a=>`  ${lu(a)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,s.join(`,
`),");"];if(t.length>0){const c=["__id",...e.columns.map(f=>f.field)].map(f=>`"${Mi(f)}"`).join(", ");for(const f of t){const m=[oo(f.id),...e.columns.map(k=>oo(f.data[k.field],k.type))];n.push(`INSERT INTO "${r}" (${c}) VALUES (${m.join(", ")});`)}}return n.join(`
`)}function lu(e){const t=[`"${Mi(e.field)}"`,cu(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function cu(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function oo(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=uu(e);return r===null?"NULL":jr(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?jr(e.toISOString()):jr(typeof e=="string"?e:JSON.stringify(e))}function uu(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?ao(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const s=new Date(t);return Number.isFinite(s.getTime())?ao(s):null}return null}function ao(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${s}`}function jr(e){return`'${e.replace(/'/g,"''")}'`}function Mi(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const du=Object.freeze(Object.defineProperty({__proto__:null,init:ou,meta:su,serializeWorkspaceAsSql:Yo},Symbol.toStringTag,{value:"Module"})),fu={name:"gist-sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"easyDBAccess built-ins"},hu="gist:";function pu(e){e.ui.registerFooterButton({id:"gist-sync:push",label:"Push",icon:"cloud_upload",tooltip:"Push the current workspace to a GitHub Gist",onClick:async()=>{try{await bu(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerFooterButton({id:"gist-sync:pull",label:"Pull",icon:"cloud_download",tooltip:"Pull the latest tables from the configured Gist",onClick:async()=>{try{await yu(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}})}async function Go(e){const t=e.workspaceId();return`${hu}${t??"default"}`}async function mu(e){const t=await Go(e),r=await e.store.settings.findOne(t);if(!r)return null;const s=r.value;return!s||!s.token||!s.user?null:{user:s.user,gistId:s.gistId??"",token:s.token}}async function Xo(e,t){const r=await Go(e);await e.store.settings.upsert({key:r,value:t})}function gu(e){const t={};for(const r of e.split(";")){const s=r.indexOf("=");if(s<0)continue;const n=r.slice(0,s).trim(),a=r.slice(s+1).trim();n&&(t[n]=a)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function Qo(e){const t=await mu(e);if(t)return t;const r=await e.ui.dialogs.prompt(`Connection string format:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,"","Gist credentials");if(!r)return null;const s=gu(r);return s?(await Xo(e,s),s):(await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist credentials"),null)}async function bu(e){const t=await Qo(e);if(!t)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=(await e.store.tables.find()).filter(m=>m.workspaceId===r);if(s.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const n={},a=[];for(const m of s){const k=await e.store.rows(m.id).find(),S=JSON.stringify(wu(m,k),null,2);S.length>1e8&&a.push(`${m.name} (${(S.length/1e6).toFixed(2)} MB)`),n[`${Jo(m.name)}.table.json`]={content:S}}if(a.length>0&&!await e.ui.dialogs.confirm(`These tables exceed Gist's 100 MB-per-file limit and will be rejected:

${a.join(`
`)}

Push anyway?`,"Gist size warning"))return;n["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1"},null,2)};let c;if(t.gistId){const m=await fetch(`https://api.github.com/gists/${t.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:n,description:`easyDBAccess workspace: ${r}`})});if(!m.ok)throw new Error(await Ni(m));c=await m.json()}else{const m=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:n})});if(!m.ok)throw new Error(await Ni(m));c=await m.json(),t.gistId=c.id,await Xo(e,t)}const f=c.html_url??`https://gist.github.com/${t.user}/${c.id}`;e.ui.dialogs.toast(`Pushed ${s.length} table${s.length===1?"":"s"}.  ${f}`,{kind:"success",title:"Gist sync"})}async function yu(e){const t=await Qo(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!s.ok)throw new Error(await Ni(s));const n=await s.json(),a=Object.entries(n.files).filter(([k])=>k.endsWith(".table.json")&&!k.startsWith("_easydb"));if(a.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const c=(await e.store.tables.find()).filter(k=>k.workspaceId===r),f=new Map(c.map(k=>[k.name,k]));let m=0;for(const[,k]of a){const S=JSON.parse(k.content);if(!S.name||!Array.isArray(S.columns))continue;let j;const B=f.get(S.name);if(B){j=await e.store.tables.patch(B.id,{columns:S.columns,updatedAt:Date.now()});const q=e.store.rows(B.id),ne=await q.find();await q.bulkRemove(ne.map(ue=>ue.id))}else j=await e.store.tables.insert({id:lo(),workspaceId:r,name:S.name,code:Jo(S.name),columns:S.columns,view:"table",updatedAt:Date.now()});const M=(S.rows??[]).map(q=>({id:lo(),tableId:j.id,data:q,updatedAt:Date.now()}));await e.store.rows(j.id).bulkInsert(M),m++}e.ui.dialogs.toast(`Pulled ${m} table${m===1?"":"s"} from gist ${t.gistId}.`,{kind:"success",title:"Gist sync"})}function wu(e,t){return{name:e.name,columns:e.columns,rows:t.map(r=>r.data)}}async function Ni(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function Jo(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function lo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const vu=Object.freeze(Object.defineProperty({__proto__:null,init:pu,meta:fu},Symbol.toStringTag,{value:"Module"})),Zo="server-sync:url";function ea(e){return`server-sync:etag:${e}`}async function ta(e){const r=(await e.store.settings.findOne(Zo))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function xu(e,t){await e.store.settings.upsert({key:Zo,value:t.replace(/\/+$/,"")})}async function na(e,t){const s=(await e.store.settings.findOne(ea(t)))?.value;return typeof s=="string"?s:null}async function kn(e,t,r){await e.store.settings.upsert({key:ea(t),value:r})}function Yr(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function co(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function ra(e,t,r){const s=Wr(r,t),n=(await e.store.tables.find()).filter(c=>c.workspaceId===t);for(const c of n){const f=e.store.rows(c.id),m=await f.find();await f.bulkRemove(m.map(k=>k.id)),await e.store.tables.remove(c.id)}let a=0;for(const c of s){const f=uo(),m=await e.store.tables.insert({id:f,workspaceId:t,name:c.name,code:$u(c.name),columns:c.columns,view:"table",...c.windowGeometry?{windowGeometry:c.windowGeometry}:{},...c.sortColumn?{sortColumn:c.sortColumn,sortAsc:c.sortAsc??!0}:{},updatedAt:Date.now()}),k=c.rows.map(S=>({id:uo(),tableId:m.id,data:S,updatedAt:Date.now()}));await e.store.rows(m.id).bulkInsert(k),a++}return a}function $u(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function uo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Cu={name:"server-sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"easyDBAccess built-ins"};function Eu(e){e.ui.registerFooterButton({id:"server-sync:push",label:"Sync ↑",icon:"cloud_upload",tooltip:"Push this workspace to the configured server",onClick:async()=>{try{await ku(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Server sync"})}}}),e.ui.registerFooterButton({id:"server-sync:pull",label:"Sync ↓",icon:"cloud_download",tooltip:"Pull this workspace from the configured server",onClick:async()=>{try{await Su(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Server sync"})}}})}async function ku(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await ia(e);if(!r)return;const s=await Vr(e),n=await na(e,t),a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);let c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:a,body:s});if(c.status===412){const m=await c.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){m.currentEtag&&await kn(e,t,m.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:s})}if(!c.ok)throw new Error(await sa(c));const f=Yr(c.headers.get("ETag"));f&&await kn(e,t,f),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function Su(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await ia(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await sa(n));const a=Yr(n.headers.get("ETag")),c=await n.json(),f=await ra(e,t,c);a&&await kn(e,t,a),e.ui.dialogs.toast(`Pulled ${f} table${f===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function ia(e){const t=await ta(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await xu(e,r),r.replace(/\/+$/,"")}async function sa(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const _u=Object.freeze(Object.defineProperty({__proto__:null,init:Eu,meta:Cu},Symbol.toStringTag,{value:"Module"})),Au={name:"new-table",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"easyDBAccess built-ins"};function Pu(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const ju=Object.freeze(Object.defineProperty({__proto__:null,init:Pu,meta:Au},Symbol.toStringTag,{value:"Module"})),Tu={name:"plugin-manager-button",version:"0.1.0",description:"Registers a footer button that opens the Plugin Manager dialog.",author:"easyDBAccess built-ins"};function Du(e){e.ui.registerFooterButton({id:"plugin-manager:open",label:"Plugins",icon:"extension",tooltip:"Add, disable, or remove plugins",onClick:()=>e.ui.openPluginManager()})}const Fu=Object.freeze(Object.defineProperty({__proto__:null,init:Du,meta:Tu},Symbol.toStringTag,{value:"Module"})),Ou={name:"core-renderers",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"easyDBAccess built-ins"};function Ru(e){customElements.get("cell-date")||customElements.define("cell-date",zu),customElements.get("cell-datetime")||customElements.define("cell-datetime",Iu),customElements.get("cell-boolean")||customElements.define("cell-boolean",Bu),customElements.get("cell-script")||customElements.define("cell-script",Mu),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class zu extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="date",t.value=qu(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Iu extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="datetime-local",t.value=Uu(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Bu extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="checkbox",t.checked=Lu(this._value),t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Lu(e){return e===!0||e==="true"||e===1||e==="1"}class Mu extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const a=document.createElement("span");a.textContent="(no script)",a.style.cssText="color:#9ca3af;font-style:italic",this.append(a);return}let r;try{r=Nu(t)}catch(a){this.append(ji("compile error",a));return}let s;try{s=r(this._row)}catch(a){this.append(ji("runtime error",a));return}if(typeof s!="string"){this.append(ji("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=s,this.append(n)}}const fo=new Map;function Nu(e){const t=fo.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return fo.set(e,r),r}function ji(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const s=t instanceof Error?t.message:String(t);r.title=s}return r}function qu(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function Uu(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const s=new Date(t);if(Number.isNaN(s.getTime()))return"";const n=s.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const Wu=Object.freeze(Object.defineProperty({__proto__:null,init:Ru,meta:Ou},Symbol.toStringTag,{value:"Module"})),Hu={name:"cell-color",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"easyDBAccess built-ins"};function Ku(e){customElements.get("cell-color")||customElements.define("cell-color",Vu),e.ui.registerCellRenderer("color","cell-color")}class Vu extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,s){this.value=s}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Yu=Object.freeze(Object.defineProperty({__proto__:null,init:Ku,meta:Hu},Symbol.toStringTag,{value:"Module"})),Gu={name:"cell-image",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"easyDBAccess built-ins"};function Xu(e){customElements.get("cell-image")||customElements.define("cell-image",Qu),e.ui.registerCellRenderer("image","cell-image")}class Qu extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const s=document.createElement("img");s.src=this._value,s.alt="",s.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(s)}else{const s=document.createElement("span");s.style.color="#9ca3af",s.textContent="no image",t.append(s);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const s=new FileReader;s.onload=()=>this.commit(String(s.result)),s.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Ju=Object.freeze(Object.defineProperty({__proto__:null,init:Xu,meta:Gu},Symbol.toStringTag,{value:"Module"})),Zu={name:"cell-link",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"easyDBAccess built-ins"};function ed(e){customElements.get("cell-link")||customElements.define("cell-link",td),e.ui.registerCellRenderer("link","cell-link")}class td extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:nd(t),s=!this._editing&&!r?rd(t):null,n=!this._editing&&!r&&!s?id(t):null;if(r||s||n){const a=document.createElement("span");a.style.cssText="display:inline-flex;align-items:center;gap:0.25rem;width:100%";const c=document.createElement("a");c.href=r?t:s?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(c.target="_blank",c.rel="noopener noreferrer"),c.textContent=t,c.style.cssText="color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",c.title=r?`Open ${t}`:s?`Email ${t}`:`Call ${t}`;const f=document.createElement("button");f.type="button",f.title="Edit",f.textContent="✎",f.style.cssText="background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",f.addEventListener("click",m=>{m.preventDefault(),m.stopPropagation(),this._editing=!0,this.render()}),a.append(c,f),this.append(a)}else{const a=document.createElement("input");a.type="text",a.value=t,a.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",a.addEventListener("change",()=>this.commit(a.value)),a.addEventListener("keydown",c=>{c.key==="Enter"?(c.preventDefault(),this.commit(a.value)):c.key==="Escape"&&(this._editing=!1,this.render())}),this.append(a),this._editing&&setTimeout(()=>{a.focus(),a.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function nd(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function rd(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function id(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const s=/[ ()\-.]/.test(t),n=t.startsWith("+");return!s&&!n&&r.length<10?null:t}const sd=Object.freeze(Object.defineProperty({__proto__:null,init:ed,meta:Zu},Symbol.toStringTag,{value:"Module"}));var od=Object.defineProperty,ad=Object.getOwnPropertyDescriptor,Gr=(e,t,r,s)=>{for(var n=s>1?void 0:s?ad(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&od(t,r,n),n};const ld="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",cd='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',ho=[{label:"Northwind — sample database (JSON dump)",url:ld,kind:"json"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — global power plants",url:"https://global-power-plants.datasettes.com/global-power-plants/global-power-plants",kind:"datasette"}],ud={name:"import-data",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"easyDBAccess built-ins",optional:!0};function dd(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:cd,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>fd(e)})}async function fd(e){const r=await(Dt.instance??hd()).open();if(!r)return;const{url:s,kind:n}=r;try{if(n==="datasette")await ts(e,s);else{const a=await e.backend.fetch(s);if(!a.ok)throw new Error(`HTTP ${a.status} ${a.statusText}`);const c=await a.text();await Qi(e,c,po(s)),e.ui.dialogs.toast(`Imported ${po(s)}.`,{kind:"success",title:"Import"})}}catch(a){e.ui.dialogs.toast(`Could not import ${s}: ${a.message}`,{kind:"error",title:"Import"})}}function hd(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function pd(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),s=[...t.searchParams.keys()].some(a=>a.startsWith("_")),n=r.includes("datasette")||s;return/\.(json|csv)$/i.test(t.pathname)&&!s?"json":n?"datasette":"json"}catch{return"json"}}function po(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}let Dt=class extends Ze{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.kind==="auto"?pd(t):this.kind;this.finish({url:t,kind:r})}}connectedCallback(){super.connectedCallback(),Dt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Dt.instance===this&&(Dt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&fn(this.dialogEl,e)}open(){return this.url="",this.kind="auto",this.presetIdx=-1,new Promise(e=>{this.resolveFn=e,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t;const r=ho[t];r&&(this.url=r.url,this.kind=r.kind)}render(){return V`
      <dialog @cancel=${this.onCancel} @keydown=${Sn}>
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
                ${ho.map((e,t)=>V`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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
                @input=${e=>{this.url=e.target.value,this.presetIdx=-1}}
              />
            </label>

            <label>
              Import as
              <select
                .value=${this.kind}
                @change=${e=>{this.kind=e.target.value}}
              >
                <option value="auto" ?selected=${this.kind==="auto"}>Auto-detect</option>
                <option value="json" ?selected=${this.kind==="json"}>JSON dump</option>
                <option value="datasette" ?selected=${this.kind==="datasette"}>
                  Datasette (table or instance)
                </option>
              </select>
            </label>

            <p class="hint">
              Paste any URL or pick a sample above. Multi-table sources — a JSON dump with
              several tables, or a Datasette database/instance URL — let you choose which tables
              to import. Datasette tables import a read-only snapshot (capped at 10,000 rows each).
            </p>
          </div>
        </form>
      </dialog>
      ${Ne}
    `}};Dt.instance=null;Dt.styles=[dn,it`
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
    `];Gr([ee()],Dt.prototype,"url",2);Gr([ee()],Dt.prototype,"kind",2);Gr([ee()],Dt.prototype,"presetIdx",2);Dt=Gr([ct("import-dialog")],Dt);const md=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return Dt},init:dd,meta:ud},Symbol.toStringTag,{value:"Module"})),gd={name:"auto-sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"easyDBAccess built-ins",optional:!0},bd=6e4;let mo=null,qi=!1;const Ti=new Map;function yd(e){mo===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(mo=setInterval(()=>{oa(e)},bd)))}async function oa(e){if(qi)return;const t=e.workspaceId();if(!t)return;const r=await ta(e);if(r)try{await wd(e,r,t)}catch(s){console.warn("[auto-sync]",s)}}async function wd(e,t,r){const s=await Vr(e),n=await na(e,r),a=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(a.status===404){await go(e,t,r,s,null);return}if(!a.ok)return;const c=Yr(a.headers.get("ETag")),f=await a.text();if(co(s)===co(f)){c&&c!==n&&await kn(e,r,c);return}if(c&&c===n){await go(e,t,r,s,n);return}if(!(c&&Ti.get(r)===c)){qi=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const k=JSON.parse(f),S=await ra(e,r,k);c&&await kn(e,r,c),Ti.delete(r),e.ui.dialogs.toast(`Pulled ${S} table${S===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else c&&Ti.set(r,c)}finally{qi=!1}}}async function go(e,t,r,s,n){const a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);const c=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:a,body:s});if(c.ok){const f=Yr(c.headers.get("ETag"));f&&await kn(e,r,f);return}if(c.status===412){const f=await c.json().catch(()=>({}));f.currentEtag&&await kn(e,r,f.currentEtag)}}const aa=Object.freeze(Object.defineProperty({__proto__:null,load:yd,meta:gd,tick:oa},Symbol.toStringTag,{value:"Module"})),la=[ju,tc,Cc,tu,oc,iu,du,vu,_u,Fu,Wu,Yu,Ju,sd,md,aa],vd=la;function Ui(e){return`builtin:${e}`}async function xd(e){const t=[];for(const r of la)if(!await $d(e,r)){t.push(r);try{await r.init?.(e)}catch(s){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"init",error:s})}}return async()=>{for(const r of t)try{await r.load?.(e)}catch(s){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"load",error:s})}}}async function $d(e,t){if(!t.meta?.optional)return!1;const r=t.meta.name;return r?(await e.store.plugins.findOne(Ui(r)))?.enabled===!1:!1}async function Cd(e){const t=e.workspaceId();if(!t)return async()=>{};const s=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const a of s)try{const c=await e.store.plugins.findOne(a);if(c&&c.enabled===!1)continue;let f=c?.cachedBody??"";if(f)Ed(e,a,f);else{try{f=await ca(a)}catch(S){await e.store.plugins.upsert({url:a,enabled:c?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${S.message}`}),e.events.emit("plugin:error",{url:a,phase:"fetch",error:S});continue}await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),cachedBody:f})}const m=new Blob([f],{type:"text/javascript"}),k=URL.createObjectURL(m);try{const S=await import(k);await S.init?.(e),n.push({url:a,mod:S})}finally{setTimeout(()=>URL.revokeObjectURL(k),5e3)}}catch(c){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`init: ${c.message}`}),e.events.emit("plugin:error",{url:a,phase:"init",error:c})}return async()=>{for(const{url:a,mod:c}of n)try{await c.load?.(e)}catch(f){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`load: ${f.message}`}),e.events.emit("plugin:error",{url:a,phase:"load",error:f})}}}async function ca(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function Ed(e,t,r){return(async()=>{try{const s=await ca(t);if(s===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:s})}catch{}})()}let Di=null;function je(){return Di||(Di=kd()),Di}async function kd(){const e=await Cl(),t=kl(e),r=_l(),s=Ol(),n=new Map;t.tables.subscribe(q=>{n.clear();for(const ne of q)n.set(ne.id,ne)});let a=null;const c={get backend(){if(!a)throw new Error("[host] row-source ctx used before app init completed");return a.backend},events:r,settings:t.settings,workspaceId:()=>S},f=Sl({base:t,providers:s.rowSources,tableById:q=>n.get(q),ctx:c}),m=Sd(),k=await f.workspaces.find();let S;if(m){const q=_d(m),ne=k.find(ue=>ue.id===q||ue.name===m);ne?S=ne.id:S=(await f.workspaces.insert({id:q,name:m,createdAt:Date.now(),pluginUrls:[]})).id}else k.length===0?S=(await f.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id:S=k[0].id;const j=Il({store:f,events:r,registries:s,workspaceId:()=>S});a=j,r.on("import:after",({source:q,tableId:ne,rowCount:ue})=>{j.store.tables.findOne(ne).then($e=>{j.ui.dialogs.toast(`Imported ${ue} row${ue===1?"":"s"} into "${$e?.name??ne}".`,{kind:"success",title:q.toUpperCase()+" import"})})}),r.on("plugin:error",({url:q,phase:ne,error:ue})=>{j.ui.dialogs.toast(`[${ne}] ${ue?.message??String(ue)}`,{kind:"error",title:`Plugin: ${q}`})});const B=await xd(j),M=await Cd(j);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:S}),await B(),await M()}),{store:f,events:r,workspaceId:S,registries:s,api:j}}function Sd(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}function _d(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var Ad=Object.defineProperty,Pd=Object.getOwnPropertyDescriptor,Xr=(e,t,r,s)=>{for(var n=s>1?void 0:s?Pd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Ad(t,r,n),n};let zn=class extends Ze{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&fn(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=Ur(this.text)}catch(c){this.errorMsg=`Couldn't parse the CSV: ${c.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const s=await je(),n=crypto.randomUUID();await s.store.tables.insert({id:n,workspaceId:s.workspaceId,name:t,code:jd(t),columns:r.columns,view:"table",updatedAt:Date.now()});const a=r.rows.map(c=>({id:crypto.randomUUID(),tableId:n,data:c,updatedAt:Date.now()}));await s.store.rows(n).bulkInsert(a),s.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return V`
      <dialog @cancel=${this.close} @keydown=${Sn}>
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
            ${this.errorMsg?V`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};zn.styles=[dn,it`
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
    `];Xr([ee()],zn.prototype,"name",2);Xr([ee()],zn.prototype,"text",2);Xr([ee()],zn.prototype,"errorMsg",2);zn=Xr([ct("csv-paste-dialog")],zn);function jd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var Td=Object.defineProperty,Dd=Object.getOwnPropertyDescriptor,ns=(e,t,r,s)=>{for(var n=s>1?void 0:s?Dd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Td(t,r,n),n};const Fd=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let Wt=class extends Ze{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),Wt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Wt.instance===this&&(Wt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&fn(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:Fd,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return V`
      <dialog @cancel=${this.onCancel} @keydown=${Sn}>
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
    `}};Wt.instance=null;Wt.styles=[dn,it`
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
    `];ns([ee()],Wt.prototype,"text",2);ns([ee()],Wt.prototype,"columnLabel",2);Wt=ns([ct("script-editor-dialog")],Wt);var Od=Object.defineProperty,Rd=Object.getOwnPropertyDescriptor,Bt=(e,t,r,s)=>{for(var n=s>1?void 0:s?Rd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Od(t,r,n),n};const zd=["string","number","boolean","date","datetime"];let _t=class extends Ze{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.columns=[],this.errorMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&fn(this.dialogEl,e)}async open(e){this.errorMsg="";const t=await je();if(this.rendererOptions=[...t.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=t.events.on("app:ready",()=>{this.rendererOptions=[...t.registries.cellRenderers.keys()].sort()}),e){const r=await je(),s=await r.store.tables.findOne(e);if(!s)return;this.mode="edit",this.editTableId=e,this.name=s.name,this.columns=s.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,origField:a.field}));const n=await r.store.rows(e).find();this.previewRows=n.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const s=[...this.columns],[n]=s.splice(e,1);s.splice(r,0,n),this.columns=s}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const s=r.getBoundingClientRect(),n=e.clientY<s.top+s.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,s=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!s)return;const n=[...this.columns],[a]=n.splice(r,1);let c=t+(r<t?-1:0);s==="after"&&(c+=1),n.splice(c,0,a),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,s)=>s===e?{...r,...t}:r)}async editScript(e){const t=Wt.instance;if(!t)return;const r=this.columns[e];if(!r)return;const s=await t.open(r.script??"",r.label||r.field);s!==null&&this.patchColumn(e,{script:s.trim()?s:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const r=new Set;for(const a of this.columns){const c=a.field.trim();if(!c){this.errorMsg="Column field names cannot be empty.";return}if(r.has(c)){this.errorMsg=`Duplicate column field: ${c}`;return}r.add(c)}const s=await je(),n=this.columns.map(a=>{const c={field:a.field.trim(),label:a.label.trim()||a.field.trim(),type:a.type};return a.renderer&&(c.renderer=a.renderer),a.script&&(c.script=a.script),a.max!=null&&a.max>0&&(c.max=a.max),a.unique&&(c.unique=!0),a.notnull&&(c.notnull=!0),a.hidden&&(c.hidden=!0),c});if(this.mode==="edit"&&this.editTableId){const a=this.editTableId,c=await s.store.tables.findOne(a),f=new Map((c?.columns??[]).map(k=>[k.field,k])),m=n.filter(k=>{const S=f.get(k.field);return k.unique&&!S?.unique||k.notnull&&!S?.notnull||k.max&&k.max>0&&k.max!==S?.max});if(m.length>0){const k=await s.store.rows(a).find(),S=Ld(m,k);if(S.length>0){this.errorMsg=`Cannot save: ${S.length} existing ${S.length===1?"row violates":"rows violate"} the new constraints.
${S.slice(0,5).join(`
`)}${S.length>5?`
…and ${S.length-5} more.`:""}`;return}}await s.store.tables.patch(a,{name:t,columns:n,updatedAt:Date.now()})}else await s.store.tables.insert({id:Nd(),workspaceId:s.workspaceId,name:t,code:Md(t),columns:n,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return V`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const t of this.columns){if(!t.unique)continue;const r=new Set,s=new Set;for(const n of this.previewRows){const a=n.data[t.field];a==null||a===""||(r.has(a)&&s.add(a),r.add(a))}e.set(t.field,s)}return V`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${this.columns.map(t=>V`<th title=${t.field}>${t.label||t.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(t=>V`
                <tr>
                  ${this.columns.map(r=>{const s=t.data[r.field],n=Bd(r,s,e.get(r.field));return V`<td
                      class=${n?"violation":""}
                      title=${n??""}
                    >${Id(s)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return V`
      <dialog @cancel=${this.close} @keydown=${Sn}>
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
            ${this.columns.map((r,s)=>{const n=this.dragSrcIdx===s,a=this.dropTargetIdx===s,c=a&&this.dropEdge==="before"?" drop-before":a&&this.dropEdge==="after"?" drop-after":"";return V`
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
                    ${zd.map(f=>V`<option value=${f} ?selected=${f===r.type}>${f}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${f=>{const m=f.target.value;this.patchColumn(s,{renderer:m||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(f=>V`<option value=${f} ?selected=${f===r.renderer}>${f}</option>`)}
                  </select>
                  ${r.renderer==="script"?V`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(s)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:V`<span></span>`}
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

          ${this.renameDetected()?V`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?V`<div class="error">${this.errorMsg}</div>`:""}
          ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};_t.styles=[Zt,dn,it`
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
  `];Bt([ee()],_t.prototype,"mode",2);Bt([ee()],_t.prototype,"editTableId",2);Bt([ee()],_t.prototype,"name",2);Bt([ee()],_t.prototype,"columns",2);Bt([ee()],_t.prototype,"errorMsg",2);Bt([ee()],_t.prototype,"dragSrcIdx",2);Bt([ee()],_t.prototype,"dropTargetIdx",2);Bt([ee()],_t.prototype,"dropEdge",2);Bt([ee()],_t.prototype,"previewRows",2);Bt([ee()],_t.prototype,"rendererOptions",2);_t=Bt([ct("new-table-dialog")],_t);function Id(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function Bd(e,t,r){const s=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&s)return`${e.label}: empty`;if(s)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!s){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function Ld(e,t){const r=[];for(const s of e)if(s.notnull&&t.forEach((n,a)=>{const c=n.data[s.field];(c==null||typeof c=="string"&&c.trim()==="")&&r.push(`Row ${a+1}: ${s.label} is empty.`)}),s.max!=null&&s.max>0&&t.forEach((n,a)=>{const c=n.data[s.field];typeof c=="string"&&c.length>s.max?r.push(`Row ${a+1}: ${s.label} length ${c.length} > max ${s.max}.`):typeof c=="number"&&c>s.max&&r.push(`Row ${a+1}: ${s.label} value ${c} > max ${s.max}.`)}),s.unique){const n=new Map;t.forEach((a,c)=>{const f=a.data[s.field];f==null||f===""||(n.has(f)?r.push(`Row ${c+1}: ${s.label} duplicates row ${n.get(f)+1} ("${String(f)}").`):n.set(f,c))})}return r}function Md(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Nd(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var qd=Object.defineProperty,Ud=Object.getOwnPropertyDescriptor,Ft=(e,t,r,s)=>{for(var n=s>1?void 0:s?Ud(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&qd(t,r,n),n};let wt=class extends Ze{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.builtinNames=[],this.optionalBuiltins=[],this.dirtyBuiltins=!1,this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&fn(this.dialogEl,e)}async open(){const e=await je(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(a=>[a.url,a]));const s=[],n=[];for(const a of vd){const c=a.meta?.name;if(c)if(a.meta?.optional){const f=this.records.get(Ui(c));n.push({name:c,...a.meta?.description?{description:a.meta.description}:{},...a.meta?.author?{author:a.meta.author}:{},enabled:f?.enabled!==!1})}else s.push(c)}this.builtinNames=s,this.optionalBuiltins=n,this.dirtyBuiltins=!1,this.addUrl="",await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(),this.refreshServerRegistry()}async refreshCatalog(){const e=new URL("/plugins/catalog.json",location.origin).toString();try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),s=Array.isArray(r.plugins)?r.plugins:[];this.catalog=s.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await je()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const a=await fetch(n,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const c=await a.json(),f=Array.isArray(c.plugins)?c.plugins:[];this.serverCatalog=f.map(m=>({...m,absUrl:new URL(m.url,n).toString()})),this.serverCatalogError=null}catch(a){this.serverCatalog=[],this.serverCatalogError=a.message}}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await je()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await je();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await je(),s=this.records.get(e);await r.store.plugins.upsert({...s??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...s,url:e,enabled:t,lastFetched:s?.lastFetched??0}))}async removePlugin(e){const t=await je();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await je(),s=Ui(e),n=this.records.get(s);await r.store.plugins.upsert({...n??{url:s,lastFetched:0},url:s,enabled:t,lastFetched:n?.lastFetched??0}),this.optionalBuiltins=this.optionalBuiltins.map(a=>a.name===e?{...a,enabled:t}:a),this.dirtyBuiltins=!0}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await je();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const s=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:s});const n=new Blob([s],{type:"text/javascript"}),a=URL.createObjectURL(n);try{const f=await import(a);await f.init?.(t.api),await f.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(a),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const c=await t.store.plugins.find();this.records=new Map(c.map(f=>[f.url,f])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}render(){return V`
      <dialog @cancel=${this.close} @keydown=${Sn}>
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
            ${this.catalog.length>0?V`<div class="section-h">Available from this host</div>`:""}
            ${this.catalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return V`
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
            ${this.catalogError?V`<div class="meta err">
                  Host catalog unavailable: ${this.catalogError}
                </div>`:""}

            ${this.serverCatalog.length>0||this.serverCatalogError?V`<div class="section-h">From server</div>`:""}
            ${this.serverCatalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return V`
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
            ${this.serverCatalogError?V`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            ${this.optionalBuiltins.length>0?V`<div class="section-h">Optional built-ins</div>`:""}
            ${this.optionalBuiltins.map(e=>V`
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
            ${this.builtinNames.map(e=>V`
                <div class="row builtin">
                  <span class="mi sm">extension</span>
                  <div>
                    <div>${e}</div>
                    <div class="meta">Built-in</div>
                  </div>
                  <span class="meta">always on</span>
                </div>
              `)}

            ${this.urls.length>0?V`<div class="section-h">Installed (by URL)</div>`:""}
            ${this.urls.map(e=>{const t=this.records.get(e),r=t?.lastError?" error":"",s=t?.lastFetched?new Date(t.lastFetched).toLocaleString():"never";return V`
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
    `}};wt.styles=[Zt,dn,it`
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
    `];Ft([ee()],wt.prototype,"urls",2);Ft([ee()],wt.prototype,"records",2);Ft([ee()],wt.prototype,"addUrl",2);Ft([ee()],wt.prototype,"builtinNames",2);Ft([ee()],wt.prototype,"optionalBuiltins",2);Ft([ee()],wt.prototype,"dirtyBuiltins",2);Ft([ee()],wt.prototype,"catalog",2);Ft([ee()],wt.prototype,"catalogError",2);Ft([ee()],wt.prototype,"serverCatalog",2);Ft([ee()],wt.prototype,"serverCatalogError",2);Ft([ee()],wt.prototype,"installing",2);wt=Ft([ct("plugin-manager-dialog")],wt);/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let F={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&F.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let s=arguments[r];if(s==null)continue;s=Object(s);let n=Object.keys(Object(s));for(let a=0,c=n.length;a<c;a++){let f=n[a],m=Object.getOwnPropertyDescriptor(s,f);m!==void 0&&m.enumerable&&(t[f]=s[f])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,s=new Array(r);r--;)s[r]=[t[r],e[t[r]]];return s}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),s=document.createDocumentFragment();r.forEach(function(n){let a=n instanceof Node;s.appendChild(a?n:document.createTextNode(String(n)))}),this.appendChild(s)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,s=this;do for(r=t.length;--r>=0&&t.item(r)!==s;);while(r<0&&(s=s.parentElement));return s}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let s=document.createEvent("CustomEvent");return s.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),s}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),s=r.length>>>0;if(s===0)return!1;let n=t|0,a=Math.max(n>=0?n:s-Math.abs(n),0);function c(f,m){return f===m||typeof f=="number"&&typeof m=="number"&&isNaN(f)&&isNaN(m)}for(;a<s;){if(c(r[a],e))return!0;a++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>F.modifier=e),document.addEventListener("keyup",()=>F.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const s=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(s===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(s),a=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-a)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(s===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(s),a=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-a)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((s,n)=>{(s.startsWith("--")||s.startsWith("var"))&&(r[n]=F.getCssVariableValue(s))}),r.forEach(s=>{F.colorNames[s]?t[2]="#"+F.colorNames[s]:s.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=s:s.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=s:t[2]=s}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),s=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return s&&(t.size=s[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let s=e.indexOf(")");t=e.slice(0,s+1).replace(/\s+/g,""),t.startsWith("var")&&(t=F.getCssVariableValue(t)),r=e.slice(s+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let s=e.indexOf(" ");s>0?(t=e.slice(0,s+1).replace(/\s+/g,""),r=e.slice(s+1,e.length).trim()):t=e,t.startsWith("--")&&(t=F.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let s=r.indexOf(" ");r=r.slice(s+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:F.colorNames[r]?r="#"+F.colorNames[r]:r.match(/^(--|var)/)?r=F.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,s,n,a,c,f,m,k,S,j={};const B=/^#?([\da-f]{3}|[\da-f]{6})$/gi,M=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,q=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,ne=this.colorNames;return ne[t]&&(t=ne[t]),t.match(B)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),s=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),j.rgb={r:parseInt(r,16),g:parseInt(s,16),b:parseInt(n,16)},j.hex=`#${r}${s}${n}`):(j.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},j.hex=`#${t}`),S=this.rgbToHsl(j.rgb.r,j.rgb.g,j.rgb.b),j.hsl=S,j.rgb.css=`rgb(${j.rgb.r},${j.rgb.g},${j.rgb.b})`):t.match(M)?(m=M.exec(t),j.rgb={css:t,r:m[1],g:m[2],b:m[3]},j.hex=this.rgbToHex(m[1],m[2],m[3]),S=this.rgbToHsl(m[1],m[2],m[3]),j.hsl=S):t.match(q)?(m=q.exec(t),a=m[1]/360,c=m[2].slice(0,m[2].length-1)/100,f=m[3].slice(0,m[3].length-1)/100,k=this.hslToRgb(a,c,f),j.rgb={css:`rgb(${k[0]},${k[1]},${k[2]})`,r:k[0],g:k[1],b:k[2]},j.hex=this.rgbToHex(j.rgb.r,j.rgb.g,j.rgb.b),j.hsl={css:`hsl(${m[1]},${m[2]},${m[3]})`,h:m[1],s:m[2],l:m[3]}):(j.hex="#f5f5f5",j.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},j.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),j},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),s=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),a=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(s)<=t?"#ffffff":"#000000",f=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",m=this.lighten(e,this.colorFilledDark),k=this.perceivedBrightness(m)<=t?"#ffffff":"#000000";return[r.hsl.css,s,n,a,c,f,m,k]},darken(e,t){const r=this.color(e).hsl,s=parseFloat(r.l),n=Math.round(s-s*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,s=parseFloat(r.l),n=Math.round(s+(100-s)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let s,n,a;if(t===0)s=n=a=r;else{let c=(k,S,j)=>(j<0&&(j+=1),j>1&&(j-=1),j<.16666666666666666?k+(S-k)*6*j:j<.5?S:j<.6666666666666666?k+(S-k)*(.6666666666666666-j)*6:k),f=r<.5?r*(1+t):r+t-r*t,m=2*r-f;s=c(m,f,e+1/3),n=c(m,f,e),a=c(m,f,e-1/3)}return[Math.round(s*255),Math.round(n*255),Math.round(a*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let s=Math.max(e,t,r),n=Math.min(e,t,r),a,c,f=(s+n)/2;if(s===n)a=c=0;else{let m=s-n;switch(c=f>.5?m/(2-s-n):m/(s+n),s){case e:a=(t-r)/m+(t<r?6:0);break;case t:a=(r-e)/m+2;break;case r:a=(e-t)/m+4;break}a/=6}return a=Math.round(a*360),c=Math.round(c*100)+"%",f=Math.round(f*100)+"%",{css:"hsl("+a+","+c+","+f+")",h:a,s:c,l:f}},rgbToHex(e,t,r){let s=Number(e).toString(16),n=Number(t).toString(16),a=Number(r).toString(16);return s.length===1&&(s=`0${s}`),n.length===1&&(n=`0${n}`),a.length===1&&(a=`0${a}`),`#${s}${n}${a}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),s=r.filter(c=>c.match(/^(down|right|up|left)$/i));s.length&&(t.autoposition=s[0],r.splice(r.indexOf(s[0]),1));let n=r.filter(c=>c.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let a=r.filter(c=>c.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return a.length&&(t.offsetX=a[0].match(/^[+-]?\d*\.?\d+$/i)?`${a[0]}px`:a[0],a[1]?t.offsetY=a[1].match(/^[+-]?\d*\.?\d+$/i)?`${a[1]}px`:a[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(a[0]),1),a[1]&&r.splice(r.indexOf(a[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(ne=>{typeof t[ne]=="function"&&(t[ne]=t[ne].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,s=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),a=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},c=r==="window"?{x:1,y:1}:{x:a.width/r.offsetWidth,y:a.height/r.offsetHeight},f=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);a.width-=(parseFloat(f.borderLeftWidth)+parseFloat(f.borderRightWidth))*c.x,a.height-=(parseFloat(f.borderTopWidth)+parseFloat(f.borderBottomWidth))*c.y;let m;t.of?typeof t.of=="string"?m=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?m=t.of[0].getBoundingClientRect():m=t.of.getBoundingClientRect():m=a;let k=this.getScrollbarWidth(document.body),S=this.getScrollbarWidth(e.parentElement),j="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?j=m.left-a.left-parseFloat(f.borderLeftWidth)+"px":j="0px":t.at.startsWith("center")?t.of?j=m.left-a.left-parseFloat(f.borderLeftWidth)+m.width/2+"px":j=a.width/2+"px":t.at.startsWith("right-")&&(t.of?j=m.left-a.left-parseFloat(f.borderLeftWidth)+m.width+"px":j=a.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?j=m.left-a.left-parseFloat(f.borderLeftWidth)-s.width/2+"px":j=-s.width/2+"px":t.at.startsWith("center")?t.of?j=m.left-a.left-parseFloat(f.borderLeftWidth)-(s.width-m.width)/2+"px":j=a.width/2-s.width/2+"px":t.at.startsWith("right-")&&(t.of?j=m.left-a.left-parseFloat(f.borderLeftWidth)+(m.width-s.width/2)+"px":j=a.width-s.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?j=m.left-a.left-parseFloat(f.borderLeftWidth)-s.width+"px":j=-s.width+"px":t.at.startsWith("center")?t.of?j=m.left-a.left-parseFloat(f.borderLeftWidth)-s.width+m.width/2+"px":j=a.width/2-s.width+"px":t.at.startsWith("right-")&&(t.of?j=m.left-a.left-parseFloat(f.borderLeftWidth)+m.width-s.width+"px":j=a.width-s.width+"px",r!=="window"&&(j=parseFloat(j)-S.y+"px")));let B="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?B=m.top-a.top-parseFloat(f.borderTopWidth)+"px":B="0px":t.at.endsWith("center")?t.of?B=m.top-a.top-parseFloat(f.borderTopWidth)+m.height/2+"px":B=a.height/2+"px":t.at.endsWith("-bottom")&&(t.of?B=m.top-a.top-parseFloat(f.borderTopWidth)+m.height+"px":B=a.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?B=m.top-a.top-parseFloat(f.borderTopWidth)-s.height/2+"px":B=-s.height/2+"px":t.at.endsWith("center")?t.of?B=m.top-a.top-parseFloat(f.borderTopWidth)-s.height/2+m.height/2+"px":B=a.height/2-s.height/2+"px":t.at.endsWith("-bottom")&&(t.of?B=m.top-a.top-parseFloat(f.borderTopWidth)-s.height/2+m.height+"px":B=a.height-s.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?B=m.top-a.top-parseFloat(f.borderTopWidth)-s.height+"px":B=-s.height+"px":t.at.endsWith("center")?t.of?B=m.top-a.top-parseFloat(f.borderTopWidth)-s.height+m.height/2+"px":B=a.height/2-s.height+"px":t.at.endsWith("-bottom")&&(t.of?B=m.top-a.top-parseFloat(f.borderTopWidth)-s.height+m.height+"px":B=a.height-s.height+"px",r!=="window"?B=parseFloat(B)-S.x+"px":B=parseFloat(B)-k.x+"px")),e.style.left=c.x===1?j:parseFloat(j)/c.x+"px",e.style.top=c.y===1?B:parseFloat(B)/c.y+"px";let M=getComputedStyle(e),q={left:M.left,top:M.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(q=this.applyPositionAutopos(e,q,t)),(t.offsetX||t.offsetY)&&(q=this.applyPositionOffset(e,q,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(q=this.applyPositionMinMax(e,q,t)),t.modify&&(q=this.applyPositionModify(e,q,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const s=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(s);const n=Array.prototype.slice.call(document.querySelectorAll(`.${s}`)),a=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((c,f)=>{f>0&&f<=a&&(t.top=parseFloat(t.top)+n[--f].getBoundingClientRect().height+F.autopositionSpacing+"px")});break;case"up":n.forEach((c,f)=>{f>0&&f<=a&&(t.top=parseFloat(t.top)-n[--f].getBoundingClientRect().height-F.autopositionSpacing+"px")});break;case"right":n.forEach((c,f)=>{f>0&&f<=a&&(t.left=parseFloat(t.left)+n[--f].getBoundingClientRect().width+F.autopositionSpacing+"px")});break;case"left":n.forEach((c,f)=>{f>0&&f<=a&&(t.left=parseFloat(t.left)-n[--f].getBoundingClientRect().width-F.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const s=getComputedStyle(e);return{left:s.left,top:s.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const s=getComputedStyle(e);return{left:s.left,top:s.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const s=getComputedStyle(e);return{left:s.left,top:s.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(s=>{e.classList.contains(s)&&(t=s)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),s=document.createElement("button");s.className="btn btn"+t.color.slice(r),document.body.appendChild(s),t.color=getComputedStyle(s).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(s),s=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},s=typeof t=="object"?Object.assign(r,t):r,n=s.bgPanel,a=s.bgContent,c=s.colorHeader,f=s.colorContent,m=s.bgFooter,k=s.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[c]&&(c="#"+this.colorNames[c]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(B=>e.querySelector(B).style.color=this.getCssVariableValue(c)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(B=>B.style.color=this.getCssVariableValue(c)),this.colorNames[a]?e.content.style.background="#"+this.colorNames[a]:e.content.style.background=this.getCssVariableValue(a),this.colorNames[f]?e.content.style.color="#"+this.colorNames[f]:e.content.style.color=this.getCssVariableValue(f),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(f)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[m]?e.footer.style.background="#"+this.colorNames[m]:e.footer.style.background=this.getCssVariableValue(m),this.colorNames[k]?e.footer.style.color="#"+this.colorNames[k]:e.footer.style.color=this.getCssVariableValue(k),s.border&&e.setBorder(s.border),s.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(s.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,s]of Object.entries(t))e.style[r]=typeof s=="string"?F.getCssVariableValue(s):s;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const s=document.createElement("script");s.src=e,s.type=t,document.head.appendChild(s),r&&(s.onload=r)}},ajax(e,t){let r,s,n=new XMLHttpRequest;const a={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let c=F.strToHtml(this.responseText);r.urlSelector&&(c=c.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(c)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},a,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},a,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&F.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}s=r.url.trim().split(/\s+/),r.url=encodeURI(s[0]),s.length>1&&(s.shift(),r.urlSelector=s.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&F.ajaxAutoresizeAutoreposition(t,r),F.ajaxAlwaysCallbacks.length&&F.ajaxAlwaysCallbacks.forEach(c=>{t?c.call(n,n,t):c.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const s={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(a,c){if(c){let f=F.strToHtml(a);c.contentRemove(),c.content.append(f)}}};if(t&&typeof e=="string")r=Object.assign({},s,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},s,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&F.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(a=>{if(a.ok)return a[r.bodyMethod]()}).then(a=>{t?r.done.call(a,a,t):r.done.call(a,a),t&&(r.autoresize||r.autoreposition)&&F.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const s=r.split(" "),n=Object.assign({},{width:s[0],height:s[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const s=Object.assign({},r);t.autoresize&&e.resize(s),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const s=document.createElement("div"),n=e.parentElement;s.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(s.style.width=r+"px",s.style.height=r+"px"):t==="ct"||t==="cb"?s.style.height=r+"px":(t==="lc"||t==="rc")&&(s.style.width=r+"px"),n!==document.body&&(s.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(s)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",s,n){if(typeof t=="function"&&(t=[t]),r)return t[r](a=>a.call(e,e,s,n));t.forEach(a=>a.call(e,e,s,n))},resetZi(){this.zi=((e=F.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=F.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){F.zi||(F.zi=((p=F.ziBase)=>{let v=p;return{next:()=>v++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${F.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let p=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;F.errorpanel(p)}return!1}let s=this.pOcontainer(e.container);if(typeof s=="object"&&s.length&&s.length>0&&(s=s[0]),!s)return this.errorReporting&&F.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(p=>{e[p]?typeof e[p]=="function"&&(e[p]=[e[p]]):e[p]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const a=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),f=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),m=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),k=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),S=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),j=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),B=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),M=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),q=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),ne=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),ue=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),$e=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),ie=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),pe=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),Fe=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[a,c,f,m,k,S,j,B,M,q,ne,ue,$e,ie].forEach(p=>p.panel=n);const vt=n.querySelector(".jsPanel-btn-close"),bt=n.querySelector(".jsPanel-btn-maximize"),et=n.querySelector(".jsPanel-btn-normalize"),Kt=n.querySelector(".jsPanel-btn-smallify"),ir=n.querySelector(".jsPanel-btn-minimize");vt&&F.pointerup.forEach(p=>{vt.addEventListener(p,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.close(null,!0)})}),bt&&F.pointerup.forEach(p=>{bt.addEventListener(p,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.maximize()})}),et&&F.pointerup.forEach(p=>{et.addEventListener(p,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.normalize()})}),Kt&&F.pointerup.forEach(p=>{Kt.addEventListener(p,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),ir&&F.pointerup.forEach(p=>{ir.addEventListener(p,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.minimize()})});let _n=F.extensions;for(let p in _n)Object.prototype.hasOwnProperty.call(_n,p)&&(n[p]=_n[p]);if(n.setBorder=p=>{let v=F.pOborder(p);return v[2].length||(v[2]=n.style.backgroundColor),v=v.join(" "),n.style.border=v,n.options.border=v,n},n.setBorderRadius=p=>{typeof p=="string"&&(p.startsWith("--")||p.startsWith("var"))&&(p=p.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),p=F.getCssVariableValue(p)),typeof p=="number"&&(p+="px"),n.style.borderRadius=p;const v=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=v.borderTopLeftRadius,n.header.style.borderTopRightRadius=v.borderTopRightRadius):(n.content.style.borderTopLeftRadius=v.borderTopLeftRadius,n.content.style.borderTopRightRadius=v.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=v.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=v.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=v.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=v.borderBottomLeftRadius),n},n.setTheme=(p=e.theme,v)=>{let O;if(n.status==="minimized"&&(O=!0,n.normalize()),F.clearTheme(n),typeof p=="object")e.border=void 0,F.applyCustomTheme(n,p);else if(typeof p=="string"){p==="none"&&(p="white");let b=F.getThemeDetails(p);F.applyColorTheme(n,b)}return O&&n.minimize(),v&&v.call(n,n),n},n.remove=(p,v,O)=>{n.parentElement.removeChild(n),document.getElementById(p)?O&&O.call(n,p,n):(n.removeMinimizedReplacement(),n.status="closed",v&&document.dispatchEvent(Fe),document.dispatchEvent(pe),n.options.onclosed&&F.processCallbacks(n,n.options.onclosed,"every",v),F.autopositionRemaining(n),O&&O.call(p,p)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(p,v)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(ie),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!F.processCallbacks(n,n.options.onbeforeclose,"some",n.status,v))return n;n.options.animateOut?(n.options.animateIn&&F.remClass(n,n.options.animateIn),F.setClass(n,n.options.animateOut),n.addEventListener("animationend",O=>{O.stopPropagation(),n.remove(n.id,v,p)})):n.remove(n.id,v,p)}},n.maximize=(p,v)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!F.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(k);const O=n.parentElement,b=F.pOcontainment(e.maximizedMargin);return O===document.body?(n.style.width=document.documentElement.clientWidth-b[1]-b[3]+"px",n.style.height=document.documentElement.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"):(n.style.width=O.clientWidth-b[1]-b[3]+"px",n.style.height=O.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"),Kt.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),v||n.front(),document.dispatchEvent(S),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),p&&p.call(n,n,n.statusBefore),e.onmaximized&&F.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=p=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!F.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(j),!document.getElementById("jsPanel-replacement-container")){const v=document.createElement("div");v.id="jsPanel-replacement-container",document.body.append(v)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(B),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let v=n.createMinimizedReplacement(),O,b,x;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(v);break;case"parentpanel":b=n.closest(".jsPanel-content").parentElement,x=b.querySelectorAll(".jsPanel-minimized-box"),O=x[x.length-1],O.append(v);break;case"parent":b=n.parentElement,O=b.querySelector(".jsPanel-minimized-container"),O||(O=document.createElement("div"),O.className="jsPanel-minimized-container",b.append(O)),O.append(v);break;default:document.querySelector(e.minimizeTo).append(v)}}return p&&p.call(n,n,n.statusBefore),e.onminimized&&F.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=p=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!F.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(f),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),Kt.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),p&&p.call(n,n,n.statusBefore),e.onnormalized&&F.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=p=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!F.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(M),n.style.overflow="hidden";const v=window.getComputedStyle(n),O=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(v.borderTopWidth)+parseFloat(v.borderBottomWidth)+O+"px",Kt.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(q),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(ne),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const b=n.querySelectorAll(".jsPanel-minimized-box");return b[b.length-1].style.display="none",p&&p.call(n,n,n.statusBefore),e.onsmallified&&F.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=p=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!F.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(ue),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),Kt.style.transform="rotate(0deg)";const v=n.querySelectorAll(".jsPanel-minimized-box");v[v.length-1].style.display="flex",p&&p.call(n,n,n.statusBefore),e.onunsmallified&&F.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(p,v=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const O=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(b=>b.style.zIndex);Math.max(...O)>n.style.zIndex&&(n.style.zIndex=F.zi.next()),F.resetZi()}return document.dispatchEvent($e),p&&p.call(n,n),e.onfronted&&v&&F.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(p,v=!1)=>{if(v||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),p&&typeof p=="function"&&!v)p.call(n,n,n.snappableTo);else if(p!==!1){let O=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const b=F.pOcontainment(n.options.dragit.containment),x=n.snappableTo;x.startsWith("left")?O[0]=b[3]:x.startsWith("right")&&(O[0]=-b[1]),x.endsWith("top")?O[1]=b[0]:x.endsWith("bottom")&&(O[1]=-b[2])}n.reposition(`${n.snappableTo} ${O[0]} ${O[1]}`)}v||(n.snapped=n.snappableTo)},n.move=(p,v)=>{let O=n.overlaps(p,"paddingbox"),b=n.parentElement;return p.appendChild(n),n.options.container=p,n.style.left=O.left+"px",n.style.top=O.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),v&&v.call(n,n,p,b),n},n.closeChildpanels=p=>(n.getChildpanels().forEach(v=>v.close()),p&&p.call(n,n),n),n.getChildpanels=p=>{const v=n.content.querySelectorAll(".jsPanel");return p&&v.forEach((O,b,x)=>{p.call(O,O,b,x)}),v},n.isChildpanel=p=>{const v=n.closest(".jsPanel-content"),O=v?v.parentElement:null;return p&&p.call(n,n,O),v?O:!1},n.contentRemove=p=>(F.emptyNode(n.content),p&&p.call(n,n),n),n.createMinimizedReplacement=()=>{const p=F.createMinimizedTemplate(),v=window.getComputedStyle(n.headertitle).color,O=window.getComputedStyle(n),b=e.iconfont,x=p.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?F.setStyles(p,{backgroundColor:O.backgroundColor,backgroundPositionX:O.backgroundPositionX,backgroundPositionY:O.backgroundPositionY,backgroundRepeat:O.backgroundRepeat,backgroundAttachment:O.backgroundAttachment,backgroundImage:O.backgroundImage,backgroundSize:O.backgroundSize,backgroundOrigin:O.backgroundOrigin,backgroundClip:O.backgroundClip}):p.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,p.id=n.id+"-min",p.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),p.querySelector(".jsPanel-headerlogo")),p.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),p.querySelector(".jsPanel-title")),p.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),p.querySelector(".jsPanel-title").style.color=v,x.style.color=v,x.querySelectorAll("button").forEach(oe=>oe.style.color=v),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(oe=>{n.header.classList.contains(oe)&&p.querySelector(".jsPanel-hdr").classList.add(oe)}),n.setIconfont(b,p),n.dataset.btnnormalize==="enabled"?F.pointerup.forEach(oe=>{p.querySelector(".jsPanel-btn-normalize").addEventListener(oe,ce=>{if(ce.preventDefault(),ce.button&&ce.button>0)return!1;n.normalize()})}):x.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?F.pointerup.forEach(oe=>{p.querySelector(".jsPanel-btn-maximize").addEventListener(oe,ce=>{if(ce.preventDefault(),ce.button&&ce.button>0)return!1;n.maximize()})}):x.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?F.pointerup.forEach(oe=>{p.querySelector(".jsPanel-btn-close").addEventListener(oe,ce=>{if(ce.preventDefault(),ce.button&&ce.button>0)return!1;n.close(null,!0)})}):x.querySelector(".jsPanel-btn-close").style.display="none",p},n.removeMinimizedReplacement=()=>{const p=document.getElementById(`${n.id}-min`);p&&p.parentElement.removeChild(p)},n.drag=(p={})=>{let v,O,b;const x=new CustomEvent("jspaneldragstart",{detail:n.id}),oe=new CustomEvent("jspaneldrag",{detail:n.id}),ce=new CustomEvent("jspaneldragstop",{detail:n.id});[x,oe,ce].forEach(ze=>ze.panel=n);const N=ze=>{let Te=ze.split("-");return Te.forEach((ye,ke)=>{Te[ke]=ye.charAt(0).toUpperCase()+ye.slice(1)}),"snap"+Te.join("")};function H(ze){ze.relatedTarget===null&&F.pointermove.forEach(Te=>{document.removeEventListener(Te,O,!1),n.style.opacity=1})}let qe=p.handles||F.defaults.dragit.handles,tt=p.cursor||F.defaults.dragit.cursor;function Mt(ze){if(F.pointermove.forEach(Te=>document.removeEventListener(Te,O)),F.removeSnapAreas(),v){if(n.style.opacity=1,v=void 0,b.snap){switch(n.snappableTo){case"left-top":n.snap(b.snap.snapLeftTop);break;case"center-top":n.snap(b.snap.snapCenterTop);break;case"right-top":n.snap(b.snap.snapRightTop);break;case"right-center":n.snap(b.snap.snapRightCenter);break;case"right-bottom":n.snap(b.snap.snapRightBottom);break;case"center-bottom":n.snap(b.snap.snapCenterBottom);break;case"left-bottom":n.snap(b.snap.snapLeftBottom);break;case"left-center":n.snap(b.snap.snapLeftCenter);break}b.snap.callback&&n.snappableTo&&typeof b.snap.callback=="function"&&(b.snap.callback.call(n,n),b.snap.repositionOnSnap&&b.snap[N(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&b.snap.repositionOnSnap&&b.snap[N(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Te=n.parentElement;n.move(n.droppableTo),b.drop.callback&&b.drop.callback.call(n,n,n.droppableTo,Te)}if(document.dispatchEvent(ce),b.stop.length){let Te=window.getComputedStyle(n),ye={left:parseFloat(Te.left),top:parseFloat(Te.top),width:parseFloat(Te.width),height:parseFloat(Te.height)};F.processCallbacks(n,b.stop,!1,ye,ze)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Te=>Te.style.pointerEvents="auto"),document.removeEventListener(ze,Mt)}return n.querySelectorAll(qe).forEach(ze=>{ze.style.touchAction="none",ze.style.cursor=tt,F.pointerdown.forEach(Te=>{ze.addEventListener(Te,ye=>{if(ye.button&&ye.button>0||(b=Object.assign({},F.defaults.dragit,p),b.disableOnMaximized&&n.status==="maximized"))return!1;if((b.containment||b.containment===0)&&(b.containment=F.pOcontainment(b.containment)),b.grid&&Array.isArray(b.grid)&&b.grid.length===1&&(b.grid[1]=b.grid[0]),b.snap&&(typeof b.snap=="object"?b.snap=Object.assign({},F.defaultSnapConfig,b.snap):b.snap=F.defaultSnapConfig),ye.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(Ve=>Ve.style.pointerEvents="none");let ke=window.getComputedStyle(n),Ue=parseFloat(ke.left),Ce=parseFloat(ke.top),J=parseFloat(ke.width),We=parseFloat(ke.height),De=ye.touches?ye.touches[0].clientX:ye.clientX,le=ye.touches?ye.touches[0].clientY:ye.clientY,me=n.parentElement,xt=me.getBoundingClientRect(),se=window.getComputedStyle(me),He=n.getScaleFactor(),en=0,Ot=F.getScrollbarWidth(me);O=Ve=>{if(Ve.preventDefault(),!v){if(document.dispatchEvent(x),n.style.opacity=b.opacity,n.snapped&&b.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let te=n.getBoundingClientRect(),Ee=De-(te.left+te.width),de=te.width/2;Ee>-de&&(en=Ee+de)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),b.drop&&b.drop.dropZones){let te=b.drop.dropZones.map(de=>F.pOcontainer(de)),Ee=[];te.forEach(function(de){de.length?de.forEach(function(Pe){Ee.push(Pe)}):Ee.push(de)}),Ee=Ee.filter(function(de,Pe,Le){return Le.indexOf(de)===Pe}),b.drop.dropZones=Ee}b.start.length&&F.processCallbacks(n,b.start,!1,{left:Ue,top:Ce,width:J,height:We},Ve)}v=1;let $t,Ae,Ie,mt,Ye,ve,we,Ct,Be,ut,nt=Ve.touches?Ve.touches[0].clientX:Ve.clientX,Ge=Ve.touches?Ve.touches[0].clientY:Ve.clientY,Oe=window.getComputedStyle(n),ae;if(me===document.body){let te=n.getBoundingClientRect();Be=window.innerWidth-parseInt(se.borderLeftWidth,10)-parseInt(se.borderRightWidth,10)-(te.left+te.width),ut=window.innerHeight-parseInt(se.borderTopWidth,10)-parseInt(se.borderBottomWidth,10)-(te.top+te.height)}else Be=parseInt(se.width,10)-parseInt(se.borderLeftWidth,10)-parseInt(se.borderRightWidth,10)-(parseInt(Oe.left,10)+parseInt(Oe.width,10)),ut=parseInt(se.height,10)-parseInt(se.borderTopWidth,10)-parseInt(se.borderBottomWidth,10)-(parseInt(Oe.top,10)+parseInt(Oe.height,10));$t=parseFloat(Oe.left),Ie=parseFloat(Oe.top),Ye=Be,we=ut,b.snap&&(b.snap.trigger==="panel"?(Ae=$t**2,mt=Ie**2,ve=Ye**2,Ct=we**2):b.snap.trigger==="pointer"&&(n.options.container==="window"?($t=nt,Ie=Ge,Ye=window.innerWidth-nt,we=window.innerHeight-Ge,Ae=nt**2,mt=Ie**2,ve=Ye**2,Ct=we**2):(ae=n.overlaps(me,"paddingbox",Ve),$t=ae.pointer.left,Ie=ae.pointer.top,Ye=ae.pointer.right,we=ae.pointer.bottom,Ae=ae.pointer.left**2,mt=ae.pointer.top**2,ve=ae.pointer.right**2,Ct=ae.pointer.bottom**2)));let Ke=Math.sqrt(Ae+mt),Y=Math.sqrt(Ae+Ct),Xe=Math.sqrt(ve+mt),st=Math.sqrt(ve+Ct),yt=Math.abs($t-Ye)/2,G=Math.abs(Ie-we)/2,Nt=Math.sqrt(Ae+G**2),Vt=Math.sqrt(mt+yt**2),rt=Math.sqrt(ve+G**2),tn=Math.sqrt(Ct+yt**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(oe),(!b.axis||b.axis==="x")&&(n.style.left=Ue+(nt-De)/He.x+en+"px"),(!b.axis||b.axis==="y")&&(n.style.top=Ce+(Ge-le)/He.y+"px"),b.grid){let te=b.grid,Ee=b.axis,de=te[0]*Math.round((Ue+(nt-De))/te[0]),Pe=te[1]*Math.round((Ce+(Ge-le))/te[1]);(!Ee||Ee==="x")&&(n.style.left=`${de}px`),(!Ee||Ee==="y")&&(n.style.top=`${Pe}px`)}if(b.containment||b.containment===0){let te=b.containment,Ee,de;if(n.options.container==="window")Ee=window.innerWidth-parseFloat(Oe.width)-te[1]-Ot.y,de=window.innerHeight-parseFloat(Oe.height)-te[2]-Ot.x;else{let Pe=parseFloat(se.borderLeftWidth)+parseFloat(se.borderRightWidth),Le=parseFloat(se.borderTopWidth)+parseFloat(se.borderBottomWidth);Ee=xt.width/He.x-parseFloat(Oe.width)-te[1]-Pe-Ot.y,de=xt.height/He.y-parseFloat(Oe.height)-te[2]-Le-Ot.x}parseFloat(n.style.left)<=te[3]&&(n.style.left=te[3]+"px"),parseFloat(n.style.top)<=te[0]&&(n.style.top=te[0]+"px"),parseFloat(n.style.left)>=Ee&&(n.style.left=Ee+"px"),parseFloat(n.style.top)>=de&&(n.style.top=de+"px")}if(b.drag.length){let te={left:$t,top:Ie,right:Ye,bottom:we,width:parseFloat(Oe.width),height:parseFloat(Oe.height)};F.processCallbacks(n,b.drag,!1,te,Ve)}if(b.snap){let te=b.snap.sensitivity,Ee=me===document.body?window.innerWidth/8:xt.width/8,de=me===document.body?window.innerHeight/8:xt.height/8;n.snappableTo=!1,F.removeSnapAreas(),Ke<te?b.snap.snapLeftTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-top",F.createSnapArea(n,"lt",te)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ae.pointer.left>0&&ae.pointer.top>0?(n.snappableTo="left-top",F.createSnapArea(n,"lt",te)):(n.snappableTo=!1,F.removeSnapAreas()))):Y<te?b.snap.snapLeftBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-bottom",F.createSnapArea(n,"lb",te)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ae.pointer.left>0&&ae.pointer.bottom>0?(n.snappableTo="left-bottom",F.createSnapArea(n,"lb",te)):(n.snappableTo=!1,F.removeSnapAreas()))):Xe<te?b.snap.snapRightTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-top",F.createSnapArea(n,"rt",te)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ae.pointer.right>0&&ae.pointer.top>0?(n.snappableTo="right-top",F.createSnapArea(n,"rt",te)):(n.snappableTo=!1,F.removeSnapAreas()))):st<te?b.snap.snapRightBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-bottom",F.createSnapArea(n,"rb",te)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ae.pointer.right>0&&ae.pointer.bottom>0?(n.snappableTo="right-bottom",F.createSnapArea(n,"rb",te)):(n.snappableTo=!1,F.removeSnapAreas()))):Ie<te&&Vt<Ee?b.snap.snapCenterTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-top",F.createSnapArea(n,"ct",te)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ae.pointer.top>0?(n.snappableTo="center-top",F.createSnapArea(n,"ct",te)):(n.snappableTo=!1,F.removeSnapAreas()))):$t<te&&Nt<de?b.snap.snapLeftCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-center",F.createSnapArea(n,"lc",te)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ae.pointer.left>0?(n.snappableTo="left-center",F.createSnapArea(n,"lc",te)):(n.snappableTo=!1,F.removeSnapAreas()))):Ye<te&&rt<de?b.snap.snapRightCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-center",F.createSnapArea(n,"rc",te)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ae.pointer.right>0?(n.snappableTo="right-center",F.createSnapArea(n,"rc",te)):(n.snappableTo=!1,F.removeSnapAreas()))):we<te&&tn<Ee&&b.snap.snapCenterBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-bottom",F.createSnapArea(n,"cb",te)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(ae.pointer.bottom>0?(n.snappableTo="center-bottom",F.createSnapArea(n,"cb",te)):(n.snappableTo=!1,F.removeSnapAreas())))}if(b.drop&&b.drop.dropZones){let te=F.isIE?"msElementsFromPoint":"elementsFromPoint",Ee=document[te](Ve.clientX,Ve.clientY);Array.isArray(Ee)||(Ee=Array.prototype.slice.call(Ee)),b.drop.dropZones.forEach(de=>{Ee.includes(de)&&(n.droppableTo=de)}),Ee.includes(n.droppableTo)||(n.droppableTo=!1)}},F.pointermove.forEach(Ve=>document.addEventListener(Ve,O)),window.addEventListener("mouseout",H,!1)})}),F.pointerup.forEach(Te=>{document.addEventListener(Te,Mt),window.removeEventListener("mouseout",H)}),p.disable&&(ze.style.pointerEvents="none")}),n},n.dragit=p=>{const v=Object.assign({},F.defaults.dragit,e.dragit),O=n.querySelectorAll(v.handles);return p==="disable"?O.forEach(b=>b.style.pointerEvents="none"):O.forEach(b=>b.style.pointerEvents="auto"),n},n.sizeit=(p={})=>{const v=new CustomEvent("jspanelresizestart",{detail:n.id}),O=new CustomEvent("jspanelresize",{detail:n.id}),b=new CustomEvent("jspanelresizestop",{detail:n.id});[v,O,b].forEach(ye=>ye.panel=n);let x={},oe,ce,N,H,qe,tt;x.handles=p.handles||F.defaults.resizeit.handles,x.handles.split(",").forEach(ye=>{const ke=document.createElement("DIV");ke.className=`jsPanel-resizeit-handle jsPanel-resizeit-${ye.trim()}`,n.append(ke)});let Mt=p.aspectRatio?p.aspectRatio:!1;function ze(ye){ye.relatedTarget===null&&F.pointermove.forEach(ke=>document.removeEventListener(ke,oe,!1))}function Te(ye){if(F.pointermove.forEach(ke=>document.removeEventListener(ke,oe,!1)),ye.target.classList&&ye.target.classList.contains("jsPanel-resizeit-handle")){let ke,Ue,Ce=ye.target.className;if(Ce.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(ke=!0),Ce.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Ue=!0),x.grid&&Array.isArray(x.grid)){x.grid.length===1&&(x.grid[1]=x.grid[0]);const J=parseFloat(n.style.width),We=parseFloat(n.style.height),De=J%x.grid[0],le=We%x.grid[1],me=parseFloat(n.style.left),xt=parseFloat(n.style.top),se=me%x.grid[0],He=xt%x.grid[1];De<x.grid[0]/2?n.style.width=J-De+"px":n.style.width=J+(x.grid[0]-De)+"px",le<x.grid[1]/2?n.style.height=We-le+"px":n.style.height=We+(x.grid[1]-le)+"px",ke&&(se<x.grid[0]/2?n.style.left=me-se+"px":n.style.left=me+(x.grid[0]-se)+"px"),Ue&&(He<x.grid[1]/2?n.style.top=xt-He+"px":n.style.top=xt+(x.grid[1]-He)+"px")}}if(ce){n.content.style.pointerEvents="inherit",ce=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let ke=n.controlbar.querySelector(".jsPanel-btn-smallify"),Ue=n.getBoundingClientRect();if(ke&&Ue.height>tt+5&&(ke.style.transform="rotate(0deg)"),document.dispatchEvent(b),x.stop.length){let Ce=window.getComputedStyle(n),J={left:parseFloat(Ce.left),top:parseFloat(Ce.top),width:parseFloat(Ce.width),height:parseFloat(Ce.height)};F.processCallbacks(n,x.stop,!1,J,ye)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(ke=>ke.style.pointerEvents="auto"),x.aspectRatio=Mt,document.removeEventListener(ye,Te)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(ye=>{ye.style.touchAction="none",F.pointerdown.forEach(ke=>{ye.addEventListener(ke,Ue=>{if(Ue.preventDefault(),Ue.stopPropagation(),Ue.button&&Ue.button>0)return!1;let Ce=1;if(x=Object.assign({},F.defaults.resizeit,p),(x.containment||x.containment===0)&&(x.containment=F.pOcontainment(x.containment)),x.aspectRatio&&x.aspectRatio===!0&&(x.aspectRatio="panel"),F.modifier){let de=F.modifier;de.altKey?x.aspectRatio="content":de.ctrlKey?x.aspectRatio="panel":de.shiftKey&&(x.aspectRatio=!1,Ce=2)}let J=typeof x.maxWidth=="function"?x.maxWidth():x.maxWidth||1e4,We=typeof x.maxHeight=="function"?x.maxHeight():x.maxHeight||1e4,De=typeof x.minWidth=="function"?x.minWidth():x.minWidth,le=typeof x.minHeight=="function"?x.minHeight():x.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(de=>de.style.pointerEvents="none");const me=n.parentElement,xt=me.tagName.toLowerCase(),se=n.getBoundingClientRect(),He=me.getBoundingClientRect(),en=window.getComputedStyle(me,null),Ot=parseInt(en.borderLeftWidth,10),Ve=parseInt(en.borderTopWidth,10),$t=en.getPropertyValue("position"),Ae=Ue.clientX||Ue.clientX===0||Ue.touches[0].clientX,Ie=Ue.clientY||Ue.clientY===0||Ue.touches[0].clientY,mt=Ae/Ie,Ye=Ue.target.classList,ve=n.getScaleFactor(),we=se.width/se.height,Ct=n.content.getBoundingClientRect(),Be=Ct.width/Ct.height,ut=n.header.getBoundingClientRect().height,nt=n.footer.getBoundingClientRect().height||0;let Ge=se.left,Oe=se.top,ae=1e4,Ke=1e4,Y=1e4,Xe=1e4;qe=se.width,tt=se.height,xt!=="body"&&(Ge=se.left-He.left+me.scrollLeft,Oe=se.top-He.top+me.scrollTop),xt==="body"&&x.containment?(ae=document.documentElement.clientWidth-se.left,Y=document.documentElement.clientHeight-se.top,Ke=se.width+se.left,Xe=se.height+se.top):x.containment&&($t==="static"?(ae=He.width-se.left+Ot,Y=He.height+He.top-se.top+Ve,Ke=se.width+(se.left-He.left)-Ot,Xe=se.height+(se.top-He.top)-Ve):(ae=me.clientWidth-(se.left-He.left)/ve.x+Ot,Y=me.clientHeight-(se.top-He.top)/ve.y+Ve,Ke=(se.width+se.left-He.left)/ve.x-Ot,Xe=n.clientHeight+(se.top-He.top)/ve.y-Ve)),x.containment&&(Ke-=x.containment[3],Xe-=x.containment[0],ae-=x.containment[1],Y-=x.containment[2]);const st=window.getComputedStyle(n),yt=parseFloat(st.width)-se.width,G=parseFloat(st.height)-se.height;let Nt=parseFloat(st.left)-se.left,Vt=parseFloat(st.top)-se.top;me!==document.body&&(Nt+=He.left,Vt+=He.top);let rt=parseInt(st.borderTopWidth,10),tn=parseInt(st.borderRightWidth,10),te=parseInt(st.borderBottomWidth,10),Ee=parseInt(st.borderLeftWidth,10);oe=de=>{de.preventDefault(),ce||(document.dispatchEvent(v),x.start.length&&F.processCallbacks(n,x.start,!1,{width:qe,height:tt,left:Ge,top:Oe},de),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),se.height>tt+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),ce=1,document.dispatchEvent(O);let Pe=de.touches?de.touches[0].clientX:de.clientX,Le=de.touches?de.touches[0].clientY:de.clientY,Se;Ye.contains("jsPanel-resizeit-e")?(N=qe+(Pe-Ae)*Ce/ve.x+yt,N>=ae&&(N=ae),N>=J&&(N=J),N<=De&&(N=De),n.style.width=N+"px",Ce===2&&(n.style.left=Ge-(Pe-Ae)+"px"),x.aspectRatio==="content"?(n.style.height=(N-tn-Ee)/Be+ut+nt+rt+te+"px",x.containment&&(Se=n.overlaps(me),Se.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*Be+"px"))):x.aspectRatio==="panel"&&(n.style.height=N/we+"px",x.containment&&(Se=n.overlaps(me),Se.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*we+"px")))):Ye.contains("jsPanel-resizeit-s")?(H=tt+(Le-Ie)*Ce/ve.y+G,H>=Y&&(H=Y),H>=We&&(H=We),H<=le&&(H=le),n.style.height=H+"px",Ce===2&&(n.style.top=Oe-(Le-Ie)+"px"),x.aspectRatio==="content"?(n.style.width=(H-ut-nt-rt-te)*Be+rt+te+"px",x.containment&&(Se=n.overlaps(me),Se.right<=x.containment[1]&&(n.style.width=ae+"px",n.style.height=ae/Be+"px"))):x.aspectRatio==="panel"&&(n.style.width=H*we+"px",x.containment&&(Se=n.overlaps(me),Se.right<=x.containment[1]&&(n.style.width=ae+"px",n.style.height=ae/we+"px")))):Ye.contains("jsPanel-resizeit-w")?(N=qe+(Ae-Pe)*Ce/ve.x+yt,N<=J&&N>=De&&N<=Ke&&(n.style.left=Ge+(Pe-Ae)/ve.x+Nt+"px"),N>=Ke&&(N=Ke),N>=J&&(N=J),N<=De&&(N=De),n.style.width=N+"px",x.aspectRatio==="content"?(n.style.height=(N-tn-Ee)/Be+ut+nt+rt+te+"px",x.containment&&(Se=n.overlaps(me),Se.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*Be+"px"))):x.aspectRatio==="panel"&&(n.style.height=N/we+"px",x.containment&&(Se=n.overlaps(me),Se.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*we+"px")))):Ye.contains("jsPanel-resizeit-n")?(H=tt+(Ie-Le)*Ce/ve.y+G,H<=We&&H>=le&&H<=Xe&&(n.style.top=Oe+(Le-Ie)/ve.y+Vt+"px"),H>=Xe&&(H=Xe),H>=We&&(H=We),H<=le&&(H=le),n.style.height=H+"px",x.aspectRatio==="content"?(n.style.width=(H-ut-nt-rt-te)*Be+rt+te+"px",x.containment&&(Se=n.overlaps(me),Se.right<=x.containment[1]&&(n.style.width=ae+"px",n.style.height=ae/Be+"px"))):x.aspectRatio==="panel"&&(n.style.width=H*we+"px",x.containment&&(Se=n.overlaps(me),Se.right<=x.containment[1]&&(n.style.width=ae+"px",n.style.height=ae/we+"px")))):Ye.contains("jsPanel-resizeit-se")?(N=qe+(Pe-Ae)*Ce/ve.x+yt,N>=ae&&(N=ae),N>=J&&(N=J),N<=De&&(N=De),n.style.width=N+"px",Ce===2&&(n.style.left=Ge-(Pe-Ae)+"px"),x.aspectRatio&&(n.style.height=N/we+"px"),H=tt+(Le-Ie)*Ce/ve.y+G,H>=Y&&(H=Y),H>=We&&(H=We),H<=le&&(H=le),n.style.height=H+"px",Ce===2&&(n.style.top=Oe-(Le-Ie)+"px"),x.aspectRatio==="content"?(n.style.width=(H-ut-nt-rt-te)*Be+rt+te+"px",x.containment&&(Se=n.overlaps(me),Se.right<=x.containment[1]&&(n.style.width=ae+"px",n.style.height=ae/Be+"px"))):x.aspectRatio==="panel"&&(n.style.width=H*we+"px",x.containment&&(Se=n.overlaps(me),Se.right<=x.containment[1]&&(n.style.width=ae+"px",n.style.height=ae/we+"px")))):Ye.contains("jsPanel-resizeit-sw")?(H=tt+(Le-Ie)*Ce/ve.y+G,H>=Y&&(H=Y),H>=We&&(H=We),H<=le&&(H=le),n.style.height=H+"px",Ce===2&&(n.style.top=Oe-(Le-Ie)+"px"),x.aspectRatio&&(n.style.width=H*we+"px"),N=qe+(Ae-Pe)*Ce/ve.x+yt,N<=J&&N>=De&&N<=Ke&&(n.style.left=Ge+(Pe-Ae)/ve.x+Nt+"px"),N>=Ke&&(N=Ke),N>=J&&(N=J),N<=De&&(N=De),n.style.width=N+"px",x.aspectRatio==="content"?(n.style.height=(N-tn-Ee)/Be+ut+nt+rt+te+"px",x.containment&&(Se=n.overlaps(me),Se.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*Be+"px"))):x.aspectRatio==="panel"&&(n.style.height=N/we+"px",x.containment&&(Se=n.overlaps(me),Se.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*we+"px")))):Ye.contains("jsPanel-resizeit-ne")?(N=qe+(Pe-Ae)*Ce/ve.x+yt,N>=ae&&(N=ae),N>=J&&(N=J),N<=De&&(N=De),n.style.width=N+"px",Ce===2&&(n.style.left=Ge-(Pe-Ae)+"px"),x.aspectRatio&&(n.style.height=N/we+"px"),H=tt+(Ie-Le)*Ce/ve.y+G,H<=We&&H>=le&&H<=Xe&&(n.style.top=Oe+(Le-Ie)/ve.y+Vt+"px"),H>=Xe&&(H=Xe),H>=We&&(H=We),H<=le&&(H=le),n.style.height=H+"px",x.aspectRatio==="content"?(n.style.width=(H-ut-nt-rt-te)*Be+rt+te+"px",x.containment&&(Se=n.overlaps(me),Se.right<=x.containment[1]&&(n.style.width=ae+"px",n.style.height=ae/Be+"px"))):x.aspectRatio==="panel"&&(n.style.width=H*we+"px",x.containment&&(Se=n.overlaps(me),Se.right<=x.containment[1]&&(n.style.width=ae+"px",n.style.height=ae/we+"px")))):Ye.contains("jsPanel-resizeit-nw")&&(x.aspectRatio&&Ye.contains("jsPanel-resizeit-nw")&&(Pe=Le*mt,Le=Pe/mt),N=qe+(Ae-Pe)*Ce/ve.x+yt,N<=J&&N>=De&&N<=Ke&&(n.style.left=Ge+(Pe-Ae)/ve.x+Nt+"px"),N>=Ke&&(N=Ke),N>=J&&(N=J),N<=De&&(N=De),n.style.width=N+"px",x.aspectRatio&&(n.style.height=N/we+"px"),H=tt+(Ie-Le)*Ce/ve.y+G,H<=We&&H>=le&&H<=Xe&&(n.style.top=Oe+(Le-Ie)/ve.y+Vt+"px"),H>=Xe&&(H=Xe),H>=We&&(H=We),H<=le&&(H=le),n.style.height=H+"px",x.aspectRatio==="content"?n.style.width=(H-ut-nt-rt-te)*Be+rt+te+"px":x.aspectRatio==="panel"&&(n.style.width=H*we+"px")),window.getSelection().removeAllRanges();const Rt=window.getComputedStyle(n),Re={left:parseFloat(Rt.left),top:parseFloat(Rt.top),right:parseFloat(Rt.right),bottom:parseFloat(Rt.bottom),width:parseFloat(Rt.width),height:parseFloat(Rt.height)};x.resize.length&&F.processCallbacks(n,x.resize,!1,Re,de)},F.pointermove.forEach(de=>document.addEventListener(de,oe,!1)),window.addEventListener("mouseout",ze,!1)})}),F.pointerup.forEach(function(ke){document.addEventListener(ke,Te),window.removeEventListener("mouseout",ze)}),p.disable&&(ye.style.pointerEvents="none")}),n},n.resizeit=p=>{const v=n.querySelectorAll(".jsPanel-resizeit-handle");return p==="disable"?v.forEach(O=>O.style.pointerEvents="none"):v.forEach(O=>O.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const p=n.getBoundingClientRect();return{x:p.width/n.offsetWidth,y:p.height/n.offsetHeight}},n.calcSizeFactors=()=>{const p=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(p.left)/(window.innerWidth-parseFloat(p.width)),n.vf=parseFloat(p.top)/(window.innerHeight-parseFloat(p.height));else if(n.parentElement){let v=n.parentElement.getBoundingClientRect();n.hf=parseFloat(p.left)/(v.width-parseFloat(p.width)),n.vf=parseFloat(p.top)/(v.height-parseFloat(p.height))}},n.saveCurrentDimensions=()=>{const p=window.getComputedStyle(n);n.currentData.width=p.width,n.currentData.height=p.height},n.saveCurrentPosition=()=>{const p=window.getComputedStyle(n);n.currentData.left=p.left,n.currentData.top=p.top},n.reposition=(...p)=>{let v=e.position,O=!0,b;return p.forEach(x=>{typeof x=="string"||typeof x=="object"?v=x:typeof x=="boolean"?O=x:typeof x=="function"&&(b=x)}),F.position(n,v),n.slaves&&n.slaves.size>0&&n.slaves.forEach(x=>x.reposition()),O&&n.saveCurrentPosition(),b&&b.call(n,n),n},n.repositionOnSnap=p=>{let v="0",O="0",b=F.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(p){case"left-top":v=b[3],O=b[0];break;case"right-top":v=-b[1],O=b[0];break;case"right-bottom":v=-b[1],O=-b[2];break;case"left-bottom":v=b[3],O=-b[2];break;case"center-top":v=b[3]/2-b[1]/2,O=b[0];break;case"center-bottom":v=b[3]/2-b[1]/2,O=-b[2];break;case"left-center":v=b[3],O=b[0]/2-b[2]/2;break;case"right-center":v=-b[1],O=b[0]/2-b[2]/2;break}F.position(n,p),F.setStyles(n,{left:`calc(${n.style.left} + ${v}px)`,top:`calc(${n.style.top} + ${O}px)`})},n.overlaps=(p,v,O)=>{let b=n.getBoundingClientRect(),x=getComputedStyle(n.parentElement),oe=n.getScaleFactor(),ce={top:0,right:0,bottom:0,left:0},N,H=0,qe=0,tt=0,Mt=0;n.options.container!=="window"&&v==="paddingbox"&&(ce.top=parseInt(x.borderTopWidth,10)*oe.y,ce.right=parseInt(x.borderRightWidth,10)*oe.x,ce.bottom=parseInt(x.borderBottomWidth,10)*oe.y,ce.left=parseInt(x.borderLeftWidth,10)*oe.x),typeof p=="string"?p==="window"?N={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:p==="parent"?N=n.parentElement.getBoundingClientRect():N=document.querySelector(p).getBoundingClientRect():N=p.getBoundingClientRect(),O&&(H=O.touches?O.touches[0].clientX:O.clientX,qe=O.touches?O.touches[0].clientY:O.clientY,tt=H-N.left,Mt=qe-N.top);let ze=b.left<N.right&&b.right>N.left,Te=b.top<N.bottom&&b.bottom>N.top;return{overlaps:ze&&Te,top:b.top-N.top-ce.top,right:N.right-b.right-ce.right,bottom:N.bottom-b.bottom-ce.bottom,left:b.left-N.left-ce.left,parentBorderWidth:ce,panelRect:b,referenceRect:N,pointer:{clientX:H,clientY:qe,left:tt-ce.left,top:Mt-ce.top,right:N.width-tt-ce.right,bottom:N.height-Mt-ce.bottom}}},n.setSize=()=>{if(e.panelSize){const p=F.pOsize(n,e.panelSize);n.style.width=p.width,n.style.height=p.height}else if(e.contentSize){const p=F.pOsize(n,e.contentSize);n.content.style.width=p.width,n.content.style.height=p.height,n.style.width=p.width,n.content.style.width="100%"}return n},n.resize=(...p)=>{let v=window.getComputedStyle(n),O={width:v.width,height:v.height},b=!0,x;p.forEach(N=>{typeof N=="string"?O=N:typeof N=="object"?O=Object.assign(O,N):typeof N=="boolean"?b=N:typeof N=="function"&&(x=N)});let oe=F.pOsize(n,O);n.style.width=oe.width,n.style.height=oe.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(N=>N.reposition()),b&&n.saveCurrentDimensions(),n.status="normalized";let ce=n.controlbar.querySelector(".jsPanel-btn-smallify");return ce&&(ce.style.transform="rotate(0deg)"),x&&x.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=p=>{if(p.target===window){let v=n.status,O=e.onwindowresize,b,x;if(v==="maximized"&&O)n.maximize(!1,!0);else if(n.snapped&&v!=="minimized")n.snap(n.snapped,!0);else if(v==="normalized"||v==="smallified"||v==="maximized"){let oe=typeof O;oe==="boolean"?(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",x=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=x<=0?0:x+"px"):oe==="function"?O.call(n,p,n):oe==="object"&&(O.preset===!0&&(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",x=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=x<=0?0:x+"px"),O.callback.call(n,p,n))}else v==="smallifiedmax"&&O&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(oe=>oe.reposition())}},n.setControls=(p,v)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(O=>{const b=O.className.split("-"),x=b[b.length-1];n.getAttribute(`data-btn${x}`)!=="hidden"&&(O.style.display="block")}),p.forEach(O=>{const b=n.controlbar.querySelector(O);b&&(b.style.display="none")}),v&&v.call(n,n),n),n.setControlStatus=(p,v="enable",O)=>{const b=n.controlbar.querySelector(`.jsPanel-btn-${p}`);switch(v){case"disable":n.getAttribute(`data-btn${p}`)!=="removed"&&(n.setAttribute(`data-btn${p}`,"disabled"),b.style.pointerEvents="none",b.style.opacity=.4,b.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${p}`)!=="removed"&&(n.setAttribute(`data-btn${p}`,"hidden"),b.style.display="none");break;case"show":n.getAttribute(`data-btn${p}`)!=="removed"&&(n.setAttribute(`data-btn${p}`,"enabled"),b.style.display="block",b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${p}`)!=="removed"&&(n.getAttribute(`data-btn${p}`)==="hidden"&&(b.style.display="block"),n.setAttribute(`data-btn${p}`,"enabled"),b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(b),n.setAttribute(`data-btn${p}`,"removed");break}return O&&O.call(n,n),n},n.setControlSize=p=>{const v=p.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(b=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(x=>b.classList.remove(x)),b.classList.add(`jsPanel-btn-${v}`)}),v==="xl"?n.titlebar.style.fontSize="1.5rem":v==="lg"?n.titlebar.style.fontSize="1.25rem":v==="md"?n.titlebar.style.fontSize="1.05rem":v==="sm"?n.titlebar.style.fontSize=".9rem":v==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=p=>{if(n.options.headerControls.add){let x=n.options.headerControls.add;Array.isArray(x)||(x=[x]),x.forEach(oe=>n.addControl(oe))}let v=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(x=>{let oe=x.className.match(/jsPanel-btn-[a-z\d]{3,}/i),ce=oe[0].substring(12);v.push(ce)});const b=F.pOheaderControls(e.headerControls);return e.headerControls=b,v.forEach(x=>{b[x]&&n.setControlStatus(x,b[x])}),n.setControlSize(b.size),p&&p.call(n,n),n},n.setHeaderLogo=(p,v)=>{let O=[n.headerlogo],b=document.querySelector("#"+n.id+"-min");return b&&O.push(b.querySelector(".jsPanel-headerlogo")),typeof p=="string"?p.startsWith("<")?O.forEach(x=>x.innerHTML=p):O.forEach(x=>{F.emptyNode(x);let oe=document.createElement("img");oe.src=p,x.append(oe)}):O.forEach(x=>{F.emptyNode(x),x.append(p)}),n.headerlogo.childNodes.forEach(x=>{x.nodeName&&x.nodeName==="IMG"&&x.setAttribute("draggable","false")}),v&&v.call(n,n),n},n.setHeaderRemove=p=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(v=>n.setAttribute(`data-btn${v}`,"removed")),p&&p.call(n,n),n),n.setHeaderTitle=(p,v)=>{let O=[n.headertitle],b=document.querySelector("#"+n.id+"-min");return b&&O.push(b.querySelector(".jsPanel-title")),typeof p=="string"?O.forEach(x=>x.innerHTML=p):typeof p=="function"?O.forEach(x=>{F.emptyNode(x),x.innerHTML=p()}):O.forEach(x=>{F.emptyNode(x),x.append(p)}),v&&v.call(n,n),n},n.setIconfont=(p,v=n,O)=>{if(p){let b,x;if(p==="fa"||p==="far"||p==="fal"||p==="fas"||p==="fad")b=[`${p} fa-window-close`,`${p} fa-window-maximize`,`${p} fa-window-restore`,`${p} fa-window-minimize`,`${p} fa-chevron-up`];else if(p==="material-icons")b=[p,p,p,p,p,p],x=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(p))b=[`custom-control-icon ${p[4]}`,`custom-control-icon ${p[3]}`,`custom-control-icon ${p[2]}`,`custom-control-icon ${p[1]}`,`custom-control-icon ${p[0]}`];else if(p==="bootstrap"||p==="glyphicon")b=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return v;v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(oe=>F.emptyNode(oe).innerHTML="<span></span>"),Array.prototype.slice.call(v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((oe,ce)=>{oe.className=b[ce],p==="material-icons"&&(oe.textContent=x[ce])})}return O&&O.call(v,v),v},n.addToolbar=(p,v,O)=>{if(p==="header"?p=n.headertoolbar:p==="footer"&&(p=n.footer),typeof v=="string")p.innerHTML=v;else if(Array.isArray(v))v.forEach(b=>{typeof b=="string"?p.innerHTML+=b:p.append(b)});else if(typeof v=="function"){let b=v.call(n,n);typeof b=="string"?p.innerHTML=b:p.append(b)}else p.append(v);return p.classList.add("active"),O&&O.call(n,n),n},n.addCloseControl=()=>{let p=document.createElement("button"),v=n.content.style.color;return p.classList.add("jsPanel-addCloseCtrl"),p.innerHTML=F.icons.close,p.style.color=v,n.options.rtl&&p.classList.add("rtl"),n.appendChild(p),F.pointerup.forEach(O=>{p.addEventListener(O,b=>{if(b.preventDefault(),b.button&&b.button>0)return!1;n.close(null,!0)})}),F.pointerdown.forEach(O=>{p.addEventListener(O,b=>b.preventDefault())}),n},n.addControl=p=>{if(!p.html)return n;p.position||(p.position=1);const v=n.controlbar.querySelectorAll(".jsPanel-btn").length;let O=document.createElement("button");O.innerHTML=p.html,O.className=`jsPanel-btn jsPanel-btn-${p.name} jsPanel-btn-${e.headerControls.size}`,O.style.color=n.header.style.color,p.position>v?n.controlbar.append(O):n.controlbar.insertBefore(O,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${p.position})`));const b=p.ariaLabel||p.name;return b&&O.setAttribute("aria-label",b),F.pointerup.forEach(x=>{O.addEventListener(x,oe=>{if(oe.preventDefault(),oe.button&&oe.button>0)return!1;p.handler.call(n,n,O)})}),p.afterInsert&&p.afterInsert.call(O,O),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(p=>{p.dir="rtl",e.rtl.lang&&(p.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),s.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),F.isIE){let p=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":p.forEach(v=>{v.style.height="34px"});break;case"xs":p.forEach(v=>{v.style.height="26px"});break;case"sm":p.forEach(v=>{v.style.height="30px"});break;case"lg":p.forEach(v=>{v.style.height="38px"});break;case"xl":p.forEach(v=>{v.style.height="42px"});break}}if(e.header==="auto-show-hide"){let p="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,p),this.setClass(n.content,p),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,F.setClass(n,p),F.remClass(n.content,p)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,F.remClass(n,p),F.setClass(n.content,p)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[p,v]of Object.entries(e.css))if(p==="panel")n.className+=` ${v}`;else{let O=n.querySelector(`.jsPanel-${p}`);O&&(O.className+=` ${v}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const p=e.contentOverflow.split(" ");p.length===1?n.content.style.overflow=p[0]:p.length===2&&(n.content.style.overflowX=p[0],n.content.style.overflowY=p[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let p=Object.assign({},F.defaultAutocloseConfig,e.autoclose);p.time&&typeof p.time=="number"&&(p.time+="ms");let v=n.progressbar.querySelector("div");v.addEventListener("animationend",O=>{O.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),p.progressbar&&(n.progressbar.classList.add("active"),p.background?F.colorNames[p.background]?n.progressbar.style.background="#"+F.colorNames[p.background]:n.progressbar.style.background=p.background:n.progressbar.classList.add("success-bg")),v.style.animation=`${p.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(m),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let p=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=p,e.dragit.snap===!0?(e.dragit.snap=F.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=p)}if(e.dragit?(["start","drag","stop"].forEach(p=>{e.dragit[p]?typeof e.dragit[p]=="function"&&(e.dragit[p]=[e.dragit[p]]):e.dragit[p]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",p=>{p.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(v=>{e.resizeit[v]?typeof e.resizeit[v]=="function"&&(e.resizeit[v]=[e.resizeit[v]]):e.resizeit[v]=[]}),n.sizeit(e.resizeit);let p;n.addEventListener("jspanelresizestart",v=>{v.panel===n&&(p=n.status)},!1),n.addEventListener("jspanelresizestop",v=>{v.panel===n&&(p==="smallified"||p==="smallifiedmax"||p==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(p=>{n.addEventListener(p,v=>{!v.target.closest(".jsPanel-btn-close")&&!v.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let p=e.onparentresize,v=typeof p,O=n.isChildpanel();if(O){const b=O.content;let x=[];n.parentResizeHandler=oe=>{if(oe.panel===O){x[0]=b.offsetWidth,x[1]=b.offsetHeight;let ce=n.status,N,H;ce==="maximized"&&p?n.maximize():n.snapped&&ce!=="minimized"?n.snap(n.snapped,!0):ce==="normalized"||ce==="smallified"||ce==="maximized"?v==="function"?p.call(n,n,{width:x[0],height:x[1]}):v==="object"&&p.preset===!0?(N=(x[0]-n.offsetWidth)*n.hf,n.style.left=N<=0?0:N+"px",H=(x[1]-n.offsetHeight)*n.vf,n.style.top=H<=0?0:H+"px",p.callback.call(n,n,{width:x[0],height:x[1]})):v==="boolean"&&(N=(x[0]-n.offsetWidth)*n.hf,n.style.left=N<=0?0:N+"px",H=(x[1]-n.offsetHeight)*n.vf,n.style.top=H<=0?0:H+"px"):ce==="smallifiedmax"&&p&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(p=>p.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(p=>p.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(p=>p.call(n,n)):t.call(n,n)),document.dispatchEvent(a),n}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ua=Symbol.for(""),Wd=e=>{if(e?.r===ua)return e?._$litStatic$},Hd=e=>({_$litStatic$:e,r:ua}),bo=new Map,Kd=e=>(t,...r)=>{const s=r.length;let n,a;const c=[],f=[];let m,k=0,S=!1;for(;k<s;){for(m=t[k];k<s&&(a=r[k],(n=Wd(a))!==void 0);)m+=n+t[++k],S=!0;k!==s&&f.push(a),c.push(m),k++}if(k===s&&c.push(t[s]),S){const j=c.join("$$lit$$");(t=bo.get(j))===void 0&&(c.raw=c,bo.set(j,t=c)),r=f}return e(t,...r)},Vd=Kd(V);var Yd=Object.defineProperty,Gd=Object.getOwnPropertyDescriptor,Qr=(e,t,r,s)=>{for(var n=s>1?void 0:s?Gd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Yd(t,r,n),n};let It=class extends Ze{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r){return this.values=t,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(s=>{this.resolveFn=s,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),It.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),It.instance===this&&(It.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(r=>r.value.toLowerCase().includes(e));return V`
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
      ${t.length===0?V`<div class="empty">No matching values.</div>`:V`<ul>
            ${t.slice(0,500).map(r=>V`
                <li
                  class=${r.value===this.current?"selected":""}
                  @click=${()=>this.close(r.value)}
                >
                  <span class="label">${r.value||V`<em>(empty)</em>`}</span>
                  <span class="count">${r.count}</span>
                </li>
              `)}
          </ul>`}
      ${this.values.length>500?V`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button class="text" @click=${()=>this.close({clear:!0})}>Clear filter</button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};It.instance=null;It.styles=[Zt,it`
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
    `];Qr([Jt({type:Array})],It.prototype,"values",2);Qr([Jt({type:String})],It.prototype,"current",2);Qr([ee()],It.prototype,"search",2);It=Qr([ct("filter-popover")],It);var Xd=Object.defineProperty,Qd=Object.getOwnPropertyDescriptor,Lt=(e,t,r,s)=>{for(var n=s>1?void 0:s?Qd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Xd(t,r,n),n};let At=class extends Ze{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const s of this.options)if(s.toLowerCase().includes(t)&&(r.push(s),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return V`
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
        ${this.value?V`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${r=>r.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:Ne}
      </div>
      ${this.open?V`<ul class="dropdown" style=${t}>
            ${e.length===0?V`<li class="empty">No matching values.</li>`:e.map((r,s)=>V`
                    <li
                      class=${s===this.highlightIdx?"highlighted":""}
                      @mousedown=${n=>n.preventDefault()}
                      @click=${()=>this.onPick(r)}
                    >
                      ${r}
                    </li>
                  `)}
          </ul>`:Ne}
    `}};At.styles=it`
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
  `;Lt([Jt({type:String})],At.prototype,"value",2);Lt([Jt({type:Array})],At.prototype,"options",2);Lt([Jt({type:String})],At.prototype,"placeholder",2);Lt([ee()],At.prototype,"open",2);Lt([ee()],At.prototype,"highlightIdx",2);Lt([ee()],At.prototype,"dropTop",2);Lt([ee()],At.prototype,"dropLeft",2);Lt([ee()],At.prototype,"dropMinWidth",2);Lt([ee()],At.prototype,"editing",2);Lt([qr("input")],At.prototype,"inputEl",2);At=Lt([ct("filter-combobox")],At);var Jd=Object.defineProperty,Zd=Object.getOwnPropertyDescriptor,pt=(e,t,r,s)=>{for(var n=s>1?void 0:s?Zd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Jd(t,r,n),n};let lt=class extends Ze{constructor(){super(...arguments),this.tableId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;t.tableId===this.tableId&&(this.localQuery=t.query??"")}}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.()}async updated(e){e.has("tableId")&&this.tableId&&(this.unsubscribe?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells()}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",ef(t))}async bind(){if(!this.tableId)return;const e=await je(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(s=>{const n=s.find(a=>a.id===this.tableId);n&&this.applyTable(n)}),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(s=>this.rows=s),this.rows=await r.find()}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filters={...e.filters??{}}}async setCell(e,t,r){const s=await je();await this.commitCell(s,e,t,r)}async commitCell(e,t,r,s){const n=this.columns.find(a=>a.field===r);if(n){const a=tf(n,s,this.rows,t.id);if(a){await e.api.ui.dialogs.alert(a,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:s},updatedAt:Date.now()})}catch(a){await e.api.ui.dialogs.alert(a?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}renderCell(e,t){const r=e.data[t.field],s=t.renderer,n=s?this.cellRenderers?.get(s):void 0;if(n){const a=Hd(n);return Vd`<${a}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        @change=${c=>this.setCell(e,t.field,c.detail.value)}
      ></${a}>`}switch(t.type){case"boolean":return V`<input
          type="checkbox"
          .checked=${r===!0||r==="true"||r===1||r==="1"}
          @change=${c=>this.setCell(e,t.field,c.target.checked)}
        />`;case"date":return V`<input
          type="date"
          .value=${nf(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"datetime":return V`<input
          type="datetime-local"
          .value=${rf(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"number":return V`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${a=>{const c=a.target.value;this.setCell(e,t.field,c===""?null:Number(c))}}
        />`;default:return V`<input
          type="text"
          .value=${String(r??"")}
          @change=${a=>this.setCell(e,t.field,a.target.value)}
        />`}}async deleteRow(e){const t=await je();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await je(),s=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};await r.store.tables.patch(this.tableId,s)}filteredRows(){const e=Object.entries(this.filters).filter(([,s])=>s&&s.trim().length>0),t=this.globalQuery.trim().toLowerCase(),r=this.localQuery.trim().toLowerCase();return e.length===0&&t.length===0&&r.length===0?this.rows:this.rows.filter(s=>{const n=a=>Object.values(s.data).some(c=>c!=null&&String(c).toLowerCase().includes(a));return t.length>0&&!n(t)||r.length>0&&!n(r)?!1:e.every(([a,c])=>String(s.data[a]??"").toLowerCase().includes(c.toLowerCase()))})}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,s=this.columns.find(c=>c.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,a=[...e];return a.sort((c,f)=>sf(c.data[t],f.data[t],s)*n),a}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,s=It.instance;if(!s)return;const n=new Map;for(const f of this.rowsFacetedFor(t)){const m=f.data[t];if(m==null)continue;const k=String(m);n.set(k,(n.get(k)??0)+1)}const a=[...n.entries()].map(([f,m])=>({value:f,count:m})).sort((f,m)=>m.count-f.count||f.value.localeCompare(m.value)),c=await s.open(r.getBoundingClientRect(),a,this.filters[t]??"");c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>this.saveFilters(),250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,s])=>s&&s.trim().length>0&&r!==e).map(([r,s])=>[r,s.trim().toLowerCase()]);return t.length===0?this.rows:this.rows.filter(r=>t.every(([s,n])=>String(r.data[s]??"").toLowerCase().includes(n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,s=500;for(const n of this.visibleColumns){let a=!0;for(const f of t){const m=f.data[n.field];if(m==null)continue;if((typeof m=="string"?m:String(m)).length>=r){a=!1;break}}if(!a)continue;const c=new Set;for(const f of this.rowsFacetedFor(n.field)){const m=f.data[n.field];if(m==null||m==="")continue;const k=typeof m=="string"?m:String(m);if(!(k.length>=r)&&(c.add(k),c.size>=s))break}e.set(n.field,[...c].sort())}return e}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const s=r.offsetWidth;this.resizing={field:t,startX:e.clientX,startW:s};const n=c=>{if(!this.resizing)return;const f=c.clientX-this.resizing.startX,m=Math.max(40,this.resizing.startW+f);this.columns=this.columns.map(k=>k.field===this.resizing.field?{...k,width:m}:k)},a=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",a);const c=this.resizing?.field;if(this.resizing=null,!c)return;await(await je()).store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",a)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const s=r.getBoundingClientRect(),n=e.clientX<s.left+s.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,s=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!s)return;const n=[...this.columns],a=n.findIndex(k=>k.field===r);if(a<0)return;const[c]=n.splice(a,1);let f=n.findIndex(k=>k.field===t);if(f<0){n.splice(a,0,c);return}s==="after"&&(f+=1),n.splice(f,0,c),await(await je()).store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await je(),t={};for(const[s,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[s]=n);const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,s=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,s+r);return{slice:e.slice(s,n),topPad:s*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows(),t=this.visibleColumns,{slice:r,topPad:s,bottomPad:n}=this.virtualSlice(e),a=this.computeFilterSuggestions();return V`
      <table>
        <colgroup>
          ${t.map(c=>V`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(c=>{const f=this.sortColumn===c.field&&this.sortDir,m=f==="asc"?"▲":f==="desc"?"▼":"⇅",k=`t-${c.type}`,S=this.dragSourceField===c.field,j=this.dropTargetField===c.field,B=j&&this.dropEdge==="before"?" drop-before":j&&this.dropEdge==="after"?" drop-after":"";return V`
                <th
                  class=${`${k}${f?" sorted":""}${S?" drag-source":""}${B}`}
                  title=${`${c.field} — click to sort, drag to reorder`}
                  draggable="true"
                  @click=${()=>this.toggleSort(c.field)}
                  @dragstart=${M=>this.onColDragStart(M,c.field)}
                  @dragover=${M=>this.onColDragOver(M,c.field,M.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(c.field)}
                  @drop=${M=>this.onColDrop(M,c.field)}
                  @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                >
                  ${c.label}<span class="sort-icon">${m}</span>
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
            ${t.map(c=>{const f=a.get(c.field)??[];return V`
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
          ${s>0?V`<tr class="spacer" style=${`height:${s}px`}><td colspan=${t.length+1}></td></tr>`:""}
          ${r.map(c=>V`
              <tr>
                ${t.map(f=>V`<td class=${`t-${f.type}`}>${this.renderCell(c,f)}</td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(c.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?V`<tr class="spacer" style=${`height:${n}px`}><td colspan=${t.length+1}></td></tr>`:""}
        </tbody>
      </table>
    `}};lt.styles=[Zt,it`
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
  `];pt([Jt({type:String})],lt.prototype,"tableId",2);pt([ee()],lt.prototype,"columns",2);pt([ee()],lt.prototype,"rows",2);pt([ee()],lt.prototype,"sortColumn",2);pt([ee()],lt.prototype,"sortDir",2);pt([ee()],lt.prototype,"filters",2);pt([ee()],lt.prototype,"globalQuery",2);pt([ee()],lt.prototype,"localQuery",2);pt([ee()],lt.prototype,"dragSourceField",2);pt([ee()],lt.prototype,"dropTargetField",2);pt([ee()],lt.prototype,"dropEdge",2);pt([ee()],lt.prototype,"resizing",2);pt([ee()],lt.prototype,"cellRenderers",2);pt([ee()],lt.prototype,"scrollY",2);pt([ee()],lt.prototype,"viewportHeight",2);lt=pt([ct("data-table")],lt);function ef(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function tf(e,t,r,s){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(a=>a.id!==s&&a.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function nf(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function rf(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const s=new Date(t);if(Number.isNaN(s.getTime()))return"";const n=s.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function sf(e,t,r){const s=e==null||e==="",n=t==null||t==="";if(s&&n)return 0;if(s)return 1;if(n)return-1;switch(r){case"number":{const a=Number(e),c=Number(t);return Number.isNaN(a)||Number.isNaN(c)?String(e).localeCompare(String(t)):a-c}case"boolean":return(e?1:0)-(t?1:0);case"date":{const a=new Date(String(e)).getTime(),c=new Date(String(t)).getTime();return Number.isNaN(a)||Number.isNaN(c)?String(e).localeCompare(String(t)):a-c}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}var of=Object.defineProperty,af=Object.getOwnPropertyDescriptor,Jr=(e,t,r,s)=>{for(var n=s>1?void 0:s?af(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&of(t,r,n),n};let In=class extends Ze{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.onBlur=()=>{this.query.trim().length===0&&(this.open=!1)}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}render(){return!this.open&&this.query.length===0?V`<button
        class="icon"
        title="Search rows in this table"
        @click=${()=>this.open=!0}
      >
        <span class="mi sm">search</span>
      </button>`:V`<input
      type="search"
      placeholder="search…"
      autofocus
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};In.styles=[Zt,it`
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
  `];Jr([Jt({type:String})],In.prototype,"tableId",2);Jr([ee()],In.prototype,"query",2);Jr([ee()],In.prototype,"open",2);In=Jr([ct("panel-search")],In);var lf=Object.defineProperty,cf=Object.getOwnPropertyDescriptor,Zr=(e,t,r,s)=>{for(var n=s>1?void 0:s?cf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&lf(t,r,n),n};let Bn=class extends Ze{constructor(){super(...arguments),this.tableId="",this.rowCount=0,this.tableButtons=[]}async connectedCallback(){super.connectedCallback();const e=await je();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]);const t=e.store.rows(this.tableId);this.unsubRows=t.subscribe(r=>this.rowCount=r.length),this.rowCount=(await t.find()).length}disconnectedCallback(){super.disconnectedCallback(),this.unsubRows?.()}async addRow(){const e=await je(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const s of t.columns)r[s.field]=uf(s);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}async runTableButton(e){const t=await je();try{await Promise.resolve(e.onClick(t.api,{tableId:this.tableId}))}catch(r){console.error(`[table-button:${e.id}]`,r)}}render(){return V`
      <button title="Add a blank row" @click=${this.addRow}>
        <span class="mi sm">add</span><span>Add row</span>
      </button>
      <button title="Edit columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span><span>Columns</span>
      </button>
      ${this.tableButtons.map(e=>V`<button title=${e.tooltip??e.label} @click=${()=>this.runTableButton(e)}>
          ${e.icon?V`<span class="mi sm">${e.icon}</span>`:""}
          <span>${e.label}</span>
        </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Bn.styles=[Zt,it`
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
  `];Zr([Jt({type:String})],Bn.prototype,"tableId",2);Zr([ee()],Bn.prototype,"rowCount",2);Zr([ee()],Bn.prototype,"tableButtons",2);Bn=Zr([ct("panel-footer")],Bn);function uf(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}const On=new Map,Fr=new Set,da=new Set;let yo=!1;async function df(){if(yo)return;yo=!0;const e=await je(),t=(await e.store.tables.find()).filter(r=>r.workspaceId===e.workspaceId);t.sort(wo);for(const r of t)vo(r,e);e.store.tables.subscribe(r=>{const s=r.filter(c=>c.workspaceId===e.workspaceId),n=new Set(s.map(c=>c.id));for(const[c,f]of On)if(!n.has(c)){On.delete(c),Fr.add(c),da.add(c);try{f.status!=="closed"&&f.close()}catch{}}const a=s.filter(c=>!On.has(c.id)).sort(wo);for(const c of a)vo(c,e)})}function wo(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const ff=200,hf=100,pf=720,mf=360,fa=34;function gf(e,t){if(!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||e.w<ff||e.h<hf)return null;const r=t.getBoundingClientRect();if(e.w>r.width)return null;const s=Math.max(0,Math.min(e.x,r.width-e.w)),n=Math.max(0,Math.min(e.y,r.height-fa));return{...e,x:s,y:n}}function bf(e,t){const r=t.clientWidth,s=t.clientHeight,n=e.offsetWidth,c=e.querySelector(".jsPanel-titlebar")?.offsetHeight||fa,f=parseFloat(e.style.left)||e.offsetLeft||0,m=parseFloat(e.style.top)||e.offsetTop||0,k=Math.max(0,Math.min(f,r-n)),S=Math.max(0,Math.min(m,s-c));k!==f&&(e.style.left=`${k}px`),S!==m&&(e.style.top=`${S}px`)}function vo(e,t){const r=document.createElement("data-table");r.tableId=e.id,r.style.height="100%";const s=document.createElement("panel-search");s.tableId=e.id;const n=document.createElement("panel-footer");n.tableId=e.id;const a=document.getElementById("easydb-panels")??document.body,c=gf(e.windowGeometry,a),f=`panel-${ha(e.id)}`,m=c?{my:"left-top",at:"left-top",offsetX:c.x,offsetY:c.y}:wf(),k=c?{panelSize:`${c.w} ${c.h}`}:{contentSize:`${pf} ${mf}`},S=F.create({id:f,container:a,headerTitle:e.name,footerToolbar:n,theme:"primary",content:r,...k,position:m,minimizeTo:"parent",dragit:{containment:!1,drag:$e=>bf($e,a),stop:()=>Fi(e.id,t)},resizeit:{containment:!1,stop:()=>Fi(e.id,t)},onfronted:()=>vf(e.id,t),onbeforeclose:()=>Fr.has(e.id)?!0:((async()=>await t.api.ui.dialogs.confirm(`Delete table "${e.name}" and all its rows?`,"Confirm delete")&&(Fr.add(e.id),On.get(e.id)?.close()))(),!1),onclosed:async()=>{On.delete(e.id),Fr.delete(e.id),!da.delete(e.id)&&await xf(e.id,t)},onstatuschange:()=>Fi(e.id,t)});On.set(e.id,S);const B=document.getElementById(f)?.querySelector(".jsPanel-controlbar");B&&B.prepend(s),c?.maximized&&typeof S.maximize=="function"?queueMicrotask(()=>S.maximize?.()):c?.minimized&&typeof S.minimize=="function"&&queueMicrotask(()=>S.minimize?.());let M=e.name,q=null;const ne=$e=>{typeof S.setHeaderTitle=="function"&&S.setHeaderTitle(`${M} (${$e})`)};t.store.rows(e.id).find().then($e=>ne($e.length)),q=t.store.rows(e.id).subscribe($e=>ne($e.length)),t.store.tables.subscribe($e=>{const ie=$e.find(pe=>pe.id===e.id);ie&&ie.name!==M&&(M=ie.name)});const ue=S.close.bind(S);S.close=()=>(q?.(),ue())}let yf=0;function wf(){const e=yf++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function Fi(e,t){const r=document.getElementById(`panel-${ha(e)}`);if(!r)return;const s=r.dataset.status??"normalized";try{const a=(await t.store.tables.findOne(e))?.windowGeometry?.z??0,c={x:r.offsetLeft,y:r.offsetTop,w:r.offsetWidth,h:r.offsetHeight,z:a,minimized:s==="minimized",maximized:s==="maximized"};await t.store.tables.patch(e,{windowGeometry:c,updatedAt:Date.now()})}catch{}}async function vf(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const s=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...s,z:Date.now()},updatedAt:Date.now()})}catch{}}async function xf(e,t){const r=t.store.rows(e),s=await r.find();await r.bulkRemove(s.map(n=>n.id)),await t.store.tables.remove(e)}function ha(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var $f=Object.defineProperty,Cf=Object.getOwnPropertyDescriptor,pa=(e,t,r,s)=>{for(var n=s>1?void 0:s?Cf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&$f(t,r,n),n};let Lr=class extends Ze{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await je();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(s=>s.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await df()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?V``:V`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on
      the page, or click <strong>+ New Table</strong> above.
    </div>`}};Lr.styles=it`
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
  `;pa([ee()],Lr.prototype,"tables",2);Lr=pa([ct("table-list")],Lr);var Ef=Object.defineProperty,kf=Object.getOwnPropertyDescriptor,rs=(e,t,r,s)=>{for(var n=s>1?void 0:s?kf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Ef(t,r,n),n};let er=class extends Ze{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await je();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const s=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(s)}async addWorkspace(){const t=await(await je()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return V`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>V`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};er.styles=[Zt,it`
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
  `];rs([ee()],er.prototype,"workspaces",2);rs([ee()],er.prototype,"current",2);er=rs([ct("workspace-selector")],er);var xo=Object.freeze,ma=Object.defineProperty,Sf=Object.getOwnPropertyDescriptor,hn=(e,t,r,s)=>{for(var n=s>1?void 0:s?Sf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&ma(t,r,n),n},_f=(e,t)=>xo(ma(e,"raw",{value:xo(e.slice())})),$o;function Af(e){return e?e.trimStart().startsWith("<svg")?V`<span class="icon-svg">${gl(e)}</span>`:V`<span class="mi sm">${e}</span>`:""}let Ht=class extends Ze{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.api=null,this.searchTimer=null,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId)},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>{document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:this.searchQuery}}))},200)},this.onDragOver=e=>{Co(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!Co(e))return;e.preventDefault();const t=await je(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const s of[...t.registries.dropHandlers])try{if(await s(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=e=>{this.api&&Promise.resolve(e.onClick(this.api)).catch(t=>{console.error(`[footer-button:${e.id}]`,t)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager)}async bindRegistries(){const e=await je();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e))}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){const r=t==="header"||e.variant==="primary"?"primary":"slot";return V`
      <button class=${r} title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
        ${Af(e.icon)}
        <span>${e.label}</span>
      </button>
    `}render(){return V($o||($o=_f([`
      <header>
        <strong>easyDBAccess <span class="version">v0.0.18</span></strong>
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
    `])),this.searchOpen||this.searchQuery.length>0?V`<input
              class="search"
              type="search"
              placeholder="search all tables…"
              autofocus
              .value=${this.searchQuery}
              @input=${this.onSearchInput}
              @blur=${()=>{this.searchQuery.trim().length===0&&(this.searchOpen=!1)}}
            />`:V`<button
              class="icon-btn"
              title="Search across all tables in this workspace"
              @click=${()=>this.searchOpen=!0}
            >
              <span class="mi">search</span>
            </button>`,this.headerButtons.map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Ht.styles=[Zt,it`
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
    `];hn([qr("new-table-dialog")],Ht.prototype,"dialog",2);hn([qr("csv-paste-dialog")],Ht.prototype,"csvPasteDialog",2);hn([qr("plugin-manager-dialog")],Ht.prototype,"pluginManagerDialog",2);hn([ee()],Ht.prototype,"footerButtons",2);hn([ee()],Ht.prototype,"headerButtons",2);hn([ee()],Ht.prototype,"searchQuery",2);hn([ee()],Ht.prototype,"searchOpen",2);Ht=hn([ct("app-shell")],Ht);function Co(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([je(),Na(()=>Promise.resolve().then(()=>aa),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});
//# sourceMappingURL=index-CF6ilrL-.js.map
