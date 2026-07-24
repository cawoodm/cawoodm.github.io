(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const al="modulepreload",ll=function(e){return"/easydbaccess/"+e},Ki={},cl=function(t,r,s){let n=Promise.resolve();if(r&&r.length>0){let c=function(v){return Promise.all(v.map(_=>Promise.resolve(_).then($=>({status:"fulfilled",value:$}),$=>({status:"rejected",reason:$}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=d?.nonce||d?.getAttribute("nonce");n=c(r.map(v=>{if(v=ll(v),v in Ki)return;Ki[v]=!0;const _=v.endsWith(".css"),$=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${$}`))return;const F=document.createElement("link");if(F.rel=_?"stylesheet":al,_||(F.as="script"),F.crossOrigin="",F.href=v,p&&F.setAttribute("nonce",p),document.head.appendChild(F),_)return new Promise((B,M)=>{F.addEventListener("load",B),F.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${v}`)))})}))}function a(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return n.then(c=>{for(const d of c||[])d.status==="rejected"&&a(d.reason);return t().catch(a)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wr=globalThis,si=Wr.ShadowRoot&&(Wr.ShadyCSS===void 0||Wr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ii=Symbol(),Vi=new WeakMap;let No=class{constructor(t,r,s){if(this._$cssResult$=!0,s!==ii)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(si&&t===void 0){const s=r!==void 0&&r.length===1;s&&(t=Vi.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Vi.set(r,t))}return t}toString(){return this.cssText}};const ul=e=>new No(typeof e=="string"?e:e+"",void 0,ii),Je=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((s,n,a)=>s+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[a+1],e[0]);return new No(r,e,ii)},dl=(e,t)=>{if(si)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const s=document.createElement("style"),n=Wr.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=r.cssText,e.appendChild(s)}},Yi=si?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return ul(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:hl,defineProperty:fl,getOwnPropertyDescriptor:pl,getOwnPropertyNames:ml,getOwnPropertySymbols:gl,getPrototypeOf:bl}=Object,ts=globalThis,Xi=ts.trustedTypes,yl=Xi?Xi.emptyScript:"",wl=ts.reactiveElementPolyfillSupport,cr=(e,t)=>e,Xr={toAttribute(e,t){switch(t){case Boolean:e=e?yl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},oi=(e,t)=>!hl(e,t),Gi={attribute:!0,type:String,converter:Xr,reflect:!1,useDefault:!1,hasChanged:oi};Symbol.metadata??=Symbol("metadata"),ts.litPropertyMetadata??=new WeakMap;let Wn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Gi){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(t,s,r);n!==void 0&&fl(this.prototype,t,n)}}static getPropertyDescriptor(t,r,s){const{get:n,set:a}=pl(this.prototype,t)??{get(){return this[r]},set(c){this[r]=c}};return{get:n,set(c){const d=n?.call(this);a?.call(this,c),this.requestUpdate(t,d,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Gi}static _$Ei(){if(this.hasOwnProperty(cr("elementProperties")))return;const t=bl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(cr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(cr("properties"))){const r=this.properties,s=[...ml(r),...gl(r)];for(const n of s)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[s,n]of r)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[r,s]of this.elementProperties){const n=this._$Eu(r,s);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const n of s)r.unshift(Yi(n))}else t!==void 0&&r.push(Yi(t));return r}static _$Eu(t,r){const s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const s of r.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dl(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,s){this._$AK(t,s)}_$ET(t,r){const s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(n!==void 0&&s.reflect===!0){const a=(s.converter?.toAttribute!==void 0?s.converter:Xr).toAttribute(r,s.type);this._$Em=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,r){const s=this.constructor,n=s._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const a=s.getPropertyOptions(n),c=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Xr;this._$Em=n;const d=c.fromAttribute(r,a.type);this[n]=d??this._$Ej?.get(n)??d,this._$Em=null}}requestUpdate(t,r,s,n=!1,a){if(t!==void 0){const c=this.constructor;if(n===!1&&(a=this[t]),s??=c.getPropertyOptions(t),!((s.hasChanged??oi)(a,r)||s.useDefault&&s.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(c._$Eu(t,s))))return;this.C(t,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:s,reflect:n,wrapped:a},c){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,c??r??this[t]),a!==!0||c!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s){const{wrapped:c}=a,d=this[n];c!==!0||this._$AL.has(n)||d===void 0||this.C(n,void 0,a,d)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(r)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Wn.elementStyles=[],Wn.shadowRootOptions={mode:"open"},Wn[cr("elementProperties")]=new Map,Wn[cr("finalized")]=new Map,wl?.({ReactiveElement:Wn}),(ts.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ai=globalThis,Qi=e=>e,Gr=ai.trustedTypes,Ji=Gr?Gr.createPolicy("lit-html",{createHTML:e=>e}):void 0,qo="$lit$",wn=`lit$${Math.random().toFixed(9).slice(2)}$`,Uo="?"+wn,vl=`<${Uo}>`,Rn=document,dr=()=>Rn.createComment(""),hr=e=>e===null||typeof e!="object"&&typeof e!="function",li=Array.isArray,xl=e=>li(e)||typeof e?.[Symbol.iterator]=="function",Ns=`[ 	
\f\r]`,ar=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zi=/-->/g,eo=/>/g,Pn=RegExp(`>|${Ns}(?:([^\\s"'>=/]+)(${Ns}*=${Ns}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),to=/'/g,no=/"/g,Ho=/^(?:script|style|textarea|title)$/i,$l=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),q=$l(1),Fn=Symbol.for("lit-noChange"),Se=Symbol.for("lit-nothing"),ro=new WeakMap,Dn=Rn.createTreeWalker(Rn,129);function Wo(e,t){if(!li(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ji!==void 0?Ji.createHTML(t):t}const kl=(e,t)=>{const r=e.length-1,s=[];let n,a=t===2?"<svg>":t===3?"<math>":"",c=ar;for(let d=0;d<r;d++){const p=e[d];let v,_,$=-1,F=0;for(;F<p.length&&(c.lastIndex=F,_=c.exec(p),_!==null);)F=c.lastIndex,c===ar?_[1]==="!--"?c=Zi:_[1]!==void 0?c=eo:_[2]!==void 0?(Ho.test(_[2])&&(n=RegExp("</"+_[2],"g")),c=Pn):_[3]!==void 0&&(c=Pn):c===Pn?_[0]===">"?(c=n??ar,$=-1):_[1]===void 0?$=-2:($=c.lastIndex-_[2].length,v=_[1],c=_[3]===void 0?Pn:_[3]==='"'?no:to):c===no||c===to?c=Pn:c===Zi||c===eo?c=ar:(c=Pn,n=void 0);const B=c===Pn&&e[d+1].startsWith("/>")?" ":"";a+=c===ar?p+vl:$>=0?(s.push(v),p.slice(0,$)+qo+p.slice($)+wn+B):p+wn+($===-2?d:B)}return[Wo(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class fr{constructor({strings:t,_$litType$:r},s){let n;this.parts=[];let a=0,c=0;const d=t.length-1,p=this.parts,[v,_]=kl(t,r);if(this.el=fr.createElement(v,s),Dn.currentNode=this.el.content,r===2||r===3){const $=this.el.content.firstChild;$.replaceWith(...$.childNodes)}for(;(n=Dn.nextNode())!==null&&p.length<d;){if(n.nodeType===1){if(n.hasAttributes())for(const $ of n.getAttributeNames())if($.endsWith(qo)){const F=_[c++],B=n.getAttribute($).split(wn),M=/([.?@])?(.*)/.exec(F);p.push({type:1,index:a,name:M[2],strings:B,ctor:M[1]==="."?El:M[1]==="?"?Sl:M[1]==="@"?_l:ns}),n.removeAttribute($)}else $.startsWith(wn)&&(p.push({type:6,index:a}),n.removeAttribute($));if(Ho.test(n.tagName)){const $=n.textContent.split(wn),F=$.length-1;if(F>0){n.textContent=Gr?Gr.emptyScript:"";for(let B=0;B<F;B++)n.append($[B],dr()),Dn.nextNode(),p.push({type:2,index:++a});n.append($[F],dr())}}}else if(n.nodeType===8)if(n.data===Uo)p.push({type:2,index:a});else{let $=-1;for(;($=n.data.indexOf(wn,$+1))!==-1;)p.push({type:7,index:a}),$+=wn.length-1}a++}}static createElement(t,r){const s=Rn.createElement("template");return s.innerHTML=t,s}}function Kn(e,t,r=e,s){if(t===Fn)return t;let n=s!==void 0?r._$Co?.[s]:r._$Cl;const a=hr(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),a===void 0?n=void 0:(n=new a(e),n._$AT(e,r,s)),s!==void 0?(r._$Co??=[])[s]=n:r._$Cl=n),n!==void 0&&(t=Kn(e,n._$AS(e,t.values),n,s)),t}class Cl{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:s}=this._$AD,n=(t?.creationScope??Rn).importNode(r,!0);Dn.currentNode=n;let a=Dn.nextNode(),c=0,d=0,p=s[0];for(;p!==void 0;){if(c===p.index){let v;p.type===2?v=new mr(a,a.nextSibling,this,t):p.type===1?v=new p.ctor(a,p.name,p.strings,this,t):p.type===6&&(v=new Al(a,this,t)),this._$AV.push(v),p=s[++d]}c!==p?.index&&(a=Dn.nextNode(),c++)}return Dn.currentNode=Rn,n}p(t){let r=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,r),r+=s.strings.length-2):s._$AI(t[r])),r++}}class mr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,s,n){this.type=2,this._$AH=Se,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=s,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Kn(this,t,r),hr(t)?t===Se||t==null||t===""?(this._$AH!==Se&&this._$AR(),this._$AH=Se):t!==this._$AH&&t!==Fn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Se&&hr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Rn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=fr.createElement(Wo(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(r);else{const a=new Cl(n,this),c=a.u(this.options);a.p(r),this.T(c),this._$AH=a}}_$AC(t){let r=ro.get(t.strings);return r===void 0&&ro.set(t.strings,r=new fr(t)),r}k(t){li(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,n=0;for(const a of t)n===r.length?r.push(s=new mr(this.O(dr()),this.O(dr()),this,this.options)):s=r[n],s._$AI(a),n++;n<r.length&&(this._$AR(s&&s._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const s=Qi(t).nextSibling;Qi(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ns{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,s,n,a){this.type=1,this._$AH=Se,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Se}_$AI(t,r=this,s,n){const a=this.strings;let c=!1;if(a===void 0)t=Kn(this,t,r,0),c=!hr(t)||t!==this._$AH&&t!==Fn,c&&(this._$AH=t);else{const d=t;let p,v;for(t=a[0],p=0;p<a.length-1;p++)v=Kn(this,d[s+p],r,p),v===Fn&&(v=this._$AH[p]),c||=!hr(v)||v!==this._$AH[p],v===Se?t=Se:t!==Se&&(t+=(v??"")+a[p+1]),this._$AH[p]=v}c&&!n&&this.j(t)}j(t){t===Se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class El extends ns{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Se?void 0:t}}class Sl extends ns{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Se)}}class _l extends ns{constructor(t,r,s,n,a){super(t,r,s,n,a),this.type=5}_$AI(t,r=this){if((t=Kn(this,t,r,0)??Se)===Fn)return;const s=this._$AH,n=t===Se&&s!==Se||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==Se&&(s===Se||n);n&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Al{constructor(t,r,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Kn(this,t)}}const Pl=ai.litHtmlPolyfillSupport;Pl?.(fr,mr),(ai.litHtmlVersions??=[]).push("3.3.3");const Tl=(e,t,r)=>{const s=r?.renderBefore??t;let n=s._$litPart$;if(n===void 0){const a=r?.renderBefore??null;s._$litPart$=n=new mr(t.insertBefore(dr(),a),a,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ci=globalThis;let Ge=class extends Wn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tl(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Fn}};Ge._$litElement$=!0,Ge.finalized=!0,ci.litElementHydrateSupport?.({LitElement:Ge});const Dl=ci.litElementPolyfillSupport;Dl?.({LitElement:Ge});(ci.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jl={attribute:!0,type:String,converter:Xr,reflect:!1,hasChanged:oi},Ol=(e=jl,t,r)=>{const{kind:s,metadata:n}=r;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),s==="accessor"){const{name:c}=r;return{set(d){const p=t.get.call(this);t.set.call(this,d),this.requestUpdate(c,p,e,!0,d)},init(d){return d!==void 0&&this.C(c,void 0,e,d),d}}}if(s==="setter"){const{name:c}=r;return function(d){const p=this[c];t.call(this,d),this.requestUpdate(c,p,e,!0,d)}}throw Error("Unsupported decorator location: "+s)};function Ut(e){return(t,r)=>typeof r=="object"?Ol(e,t,r):((s,n,a)=>{const c=n.hasOwnProperty(a);return n.constructor.createProperty(a,s),c?Object.getOwnPropertyDescriptor(n,a):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(e){return Ut({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rl=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Yn(e,t){return(r,s,n)=>{const a=c=>c.renderRoot?.querySelector(e)??null;return Rl(r,s,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fl={CHILD:2},Ko=e=>(...t)=>({_$litDirective$:e,values:t});class Il{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,s){this._$Ct=t,this._$AM=r,this._$Ci=s}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Qr extends Il{constructor(t){if(super(t),this.it=Se,t.type!==Fl.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Se||t==null)return this._t=void 0,this.it=t;if(t===Fn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Qr.directiveName="unsafeHTML",Qr.resultType=1;const qs=Ko(Qr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xs extends Qr{}Xs.directiveName="unsafeSVG",Xs.resultType=2;const zl=Ko(Xs);var Ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kr={exports:{}},Ml=Kr.exports,so;function Nl(){return so||(so=1,(function(e,t){(function(r,s){e.exports=s()})(Ml,function(){var r=function(i,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,u){l.__proto__=u}||function(l,u){for(var h in u)Object.prototype.hasOwnProperty.call(u,h)&&(l[h]=u[h])})(i,o)},s=function(){return(s=Object.assign||function(i){for(var o,l=1,u=arguments.length;l<u;l++)for(var h in o=arguments[l])Object.prototype.hasOwnProperty.call(o,h)&&(i[h]=o[h]);return i}).apply(this,arguments)};function n(i,o,l){for(var u,h=0,m=o.length;h<m;h++)!u&&h in o||((u=u||Array.prototype.slice.call(o,0,h))[h]=o[h]);return i.concat(u||Array.prototype.slice.call(o))}var a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Ll,c=Object.keys,d=Array.isArray;function p(i,o){return typeof o!="object"||c(o).forEach(function(l){i[l]=o[l]}),i}typeof Promise>"u"||a.Promise||(a.Promise=Promise);var v=Object.getPrototypeOf,_={}.hasOwnProperty;function $(i,o){return _.call(i,o)}function F(i,o){typeof o=="function"&&(o=o(v(i))),(typeof Reflect>"u"?c:Reflect.ownKeys)(o).forEach(function(l){M(i,l,o[l])})}var B=Object.defineProperty;function M(i,o,l,u){B(i,o,p(l&&$(l,"get")&&typeof l.get=="function"?{get:l.get,set:l.set,configurable:!0}:{value:l,configurable:!0,writable:!0},u))}function V(i){return{from:function(o){return i.prototype=Object.create(o.prototype),M(i.prototype,"constructor",i),{extend:F.bind(null,i.prototype)}}}}var ae=Object.getOwnPropertyDescriptor,ge=[].slice;function be(i,o,l){return ge.call(i,o,l)}function ze(i,o){return o(i)}function se(i){if(!i)throw new Error("Assertion Failed")}function fe(i){a.setImmediate?setImmediate(i):setTimeout(i,0)}function _e(i,o){if(typeof o=="string"&&$(i,o))return i[o];if(!o)return i;if(typeof o!="string"){for(var l=[],u=0,h=o.length;u<h;++u){var m=_e(i,o[u]);l.push(m)}return l}var g=o.indexOf(".");if(g!==-1){var w=i[o.substr(0,g)];return w==null?void 0:_e(w,o.substr(g+1))}}function ye(i,o,l){if(i&&o!==void 0&&!("isFrozen"in Object&&Object.isFrozen(i)))if(typeof o!="string"&&"length"in o){se(typeof l!="string"&&"length"in l);for(var u=0,h=o.length;u<h;++u)ye(i,o[u],l[u])}else{var m,g,w=o.indexOf(".");w!==-1?(m=o.substr(0,w),(g=o.substr(w+1))===""?l===void 0?d(i)&&!isNaN(parseInt(m))?i.splice(m,1):delete i[m]:i[m]=l:ye(w=!(w=i[m])||!$(i,m)?i[m]={}:w,g,l)):l===void 0?d(i)&&!isNaN(parseInt(o))?i.splice(o,1):delete i[o]:i[o]=l}}function ft(i){var o,l={};for(o in i)$(i,o)&&(l[o]=i[o]);return l}var $t=[].concat;function wt(i){return $t.apply([],i)}var rn="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(wt([8,16,32,64].map(function(i){return["Int","Uint","Float"].map(function(o){return o+i+"Array"})}))).filter(function(i){return a[i]}),f=new Set(rn.map(function(i){return a[i]})),y=null;function A(i){return y=new WeakMap,i=(function o(l){if(!l||typeof l!="object")return l;var u=y.get(l);if(u)return u;if(d(l)){u=[],y.set(l,u);for(var h=0,m=l.length;h<m;++h)u.push(o(l[h]))}else if(f.has(l.constructor))u=l;else{var g,w=v(l);for(g in u=w===Object.prototype?{}:Object.create(w),y.set(l,u),l)$(l,g)&&(u[g]=o(l[g]))}return u})(i),y=null,i}var b={}.toString;function k(i){return b.call(i).slice(8,-1)}var oe=typeof Symbol<"u"?Symbol.iterator:"@@iterator",ue=typeof oe=="symbol"?function(i){var o;return i!=null&&(o=i[oe])&&o.apply(i)}:function(){return null};function U(i,o){return o=i.indexOf(o),0<=o&&i.splice(o,1),0<=o}var Y={};function We(i){var o,l,u,h;if(arguments.length===1){if(d(i))return i.slice();if(this===Y&&typeof i=="string")return[i];if(h=ue(i)){for(l=[];!(u=h.next()).done;)l.push(u.value);return l}if(i==null)return[i];if(typeof(o=i.length)!="number")return[i];for(l=new Array(o);o--;)l[o]=i[o];return l}for(o=arguments.length,l=new Array(o);o--;)l[o]=arguments[o];return l}var it=typeof Symbol<"u"?function(i){return i[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},ke=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Rt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(ke),Kt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Me(i,o){this.name=i,this.message=o}function Fe(i,o){return i+". Errors: "+Object.keys(o).map(function(l){return o[l].toString()}).filter(function(l,u,h){return h.indexOf(l)===u}).join(`
`)}function xe(i,o,l,u){this.failures=o,this.failedKeys=u,this.successCount=l,this.message=Fe(i,o)}function Te(i,o){this.name="BulkError",this.failures=Object.keys(o).map(function(l){return o[l]}),this.failuresByPos=o,this.message=Fe(i,this.failures)}V(Me).from(Error).extend({toString:function(){return this.name+": "+this.message}}),V(xe).from(Me),V(Te).from(Me);var Ke=Rt.reduce(function(i,o){return i[o]=o+"Error",i},{}),Ae=Me,ee=Rt.reduce(function(i,o){var l=o+"Error";function u(h,m){this.name=l,h?typeof h=="string"?(this.message="".concat(h).concat(m?`
 `+m:""),this.inner=m||null):typeof h=="object"&&(this.message="".concat(h.name," ").concat(h.message),this.inner=h):(this.message=Kt[o]||l,this.inner=null)}return V(u).from(Ae),i[o]=u,i},{});ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError;var Ve=ke.reduce(function(i,o){return i[o+"Error"]=ee[o],i},{}),Ie=Rt.reduce(function(i,o){return["Syntax","Type","Range"].indexOf(o)===-1&&(i[o+"Error"]=ee[o]),i},{});function ce(){}function me(i){return i}function Et(i,o){return i==null||i===me?o:function(l){return o(i(l))}}function ie(i,o){return function(){i.apply(this,arguments),o.apply(this,arguments)}}function Ye(i,o){return i===ce?o:function(){var l=i.apply(this,arguments);l!==void 0&&(arguments[0]=l);var u=this.onsuccess,h=this.onerror;this.onsuccess=null,this.onerror=null;var m=o.apply(this,arguments);return u&&(this.onsuccess=this.onsuccess?ie(u,this.onsuccess):u),h&&(this.onerror=this.onerror?ie(h,this.onerror):h),m!==void 0?m:l}}function dn(i,o){return i===ce?o:function(){i.apply(this,arguments);var l=this.onsuccess,u=this.onerror;this.onsuccess=this.onerror=null,o.apply(this,arguments),l&&(this.onsuccess=this.onsuccess?ie(l,this.onsuccess):l),u&&(this.onerror=this.onerror?ie(u,this.onerror):u)}}function Lt(i,o){return i===ce?o:function(l){var u=i.apply(this,arguments);p(l,u);var h=this.onsuccess,m=this.onerror;return this.onsuccess=null,this.onerror=null,l=o.apply(this,arguments),h&&(this.onsuccess=this.onsuccess?ie(h,this.onsuccess):h),m&&(this.onerror=this.onerror?ie(m,this.onerror):m),u===void 0?l===void 0?void 0:l:p(u,l)}}function Qe(i,o){return i===ce?o:function(){return o.apply(this,arguments)!==!1&&i.apply(this,arguments)}}function St(i,o){return i===ce?o:function(){var l=i.apply(this,arguments);if(l&&typeof l.then=="function"){for(var u=this,h=arguments.length,m=new Array(h);h--;)m[h]=arguments[h];return l.then(function(){return o.apply(u,m)})}return o.apply(this,arguments)}}Ie.ModifyError=xe,Ie.DexieError=Me,Ie.BulkError=Te;var Oe=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ne(i){Oe=i}var vt={},Ze=100,rn=typeof Promise>"u"?[]:(function(){var i=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[i,v(i),i];var o=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[o,v(o),i]})(),ke=rn[0],Rt=rn[1],rn=rn[2],Rt=Rt&&Rt.then,$e=ke&&ke.constructor,_t=!!rn,qe=function(i,o){tt.push([i,o]),at&&(queueMicrotask(de),at=!1)},mt=!0,at=!0,et=[],Le=[],le=me,Xe={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ce,pgp:!1,env:{},finalize:ce},G=Xe,tt=[],ut=0,kt=[];function Q(i){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var o=this._PSD=G;if(typeof i!="function"){if(i!==vt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&lt(this,this._value))}this._state=null,this._value=null,++o.ref,(function l(u,h){try{h(function(m){if(u._state===null){if(m===u)throw new TypeError("A promise cannot be resolved with itself.");var g=u._lib&&Re();m&&typeof m.then=="function"?l(u,function(w,C){m instanceof Q?m._then(w,C):m.then(w,C)}):(u._state=!0,u._value=m,hn(u)),g&&Ue()}},lt.bind(null,u))}catch(m){lt(u,m)}})(this,i)}var Vt={get:function(){var i=G,o=xr;function l(u,h){var m=this,g=!i.global&&(i!==G||o!==xr),w=g&&!pn(),C=new Q(function(S,D){ne(m,new tn(yi(u,i,g,w),yi(h,i,g,w),S,D,i))});return this._consoleTask&&(C._consoleTask=this._consoleTask),C}return l.prototype=vt,l},set:function(i){M(this,"then",i&&i.prototype===vt?Vt:{get:function(){return i},set:Vt.set})}};function tn(i,o,l,u,h){this.onFulfilled=typeof i=="function"?i:null,this.onRejected=typeof o=="function"?o:null,this.resolve=l,this.reject=u,this.psd=h}function lt(i,o){var l,u;Le.push(o),i._state===null&&(l=i._lib&&Re(),o=le(o),i._state=!1,i._value=o,u=i,et.some(function(h){return h._value===u._value})||et.push(u),hn(i),l&&Ue())}function hn(i){var o=i._listeners;i._listeners=[];for(var l=0,u=o.length;l<u;++l)ne(i,o[l]);var h=i._PSD;--h.ref||h.finalize(),ut===0&&(++ut,qe(function(){--ut==0&&De()},[]))}function ne(i,o){if(i._state!==null){var l=i._state?o.onFulfilled:o.onRejected;if(l===null)return(i._state?o.resolve:o.reject)(i._value);++o.psd.ref,++ut,qe(Pe,[l,i,o])}else i._listeners.push(o)}function Pe(i,o,l){try{var u,h=o._value;!o._state&&Le.length&&(Le=[]),u=Oe&&o._consoleTask?o._consoleTask.run(function(){return i(h)}):i(h),o._state||Le.indexOf(h)!==-1||(function(m){for(var g=et.length;g;)if(et[--g]._value===m._value)return et.splice(g,1)})(o),l.resolve(u)}catch(m){l.reject(m)}finally{--ut==0&&De(),--l.psd.ref||l.psd.finalize()}}function de(){kn(Xe,function(){Re()&&Ue()})}function Re(){var i=mt;return at=mt=!1,i}function Ue(){var i,o,l;do for(;0<tt.length;)for(i=tt,tt=[],l=i.length,o=0;o<l;++o){var u=i[o];u[0].apply(null,u[1])}while(0<tt.length);at=mt=!0}function De(){var i=et;et=[],i.forEach(function(u){u._PSD.onunhandled.call(null,u._value,u)});for(var o=kt.slice(0),l=o.length;l;)o[--l]()}function Bt(i){return new Q(vt,!1,i)}function Be(i,o){var l=G;return function(){var u=Re(),h=G;try{return mn(l,!0),i.apply(this,arguments)}catch(m){o&&o(m)}finally{mn(h,!1),u&&Ue()}}}F(Q.prototype,{then:Vt,_then:function(i,o){ne(this,new tn(null,null,i,o,G))},catch:function(i){if(arguments.length===1)return this.then(null,i);var o=i,l=arguments[1];return typeof o=="function"?this.then(null,function(u){return(u instanceof o?l:Bt)(u)}):this.then(null,function(u){return(u&&u.name===o?l:Bt)(u)})},finally:function(i){return this.then(function(o){return Q.resolve(i()).then(function(){return o})},function(o){return Q.resolve(i()).then(function(){return Bt(o)})})},timeout:function(i,o){var l=this;return i<1/0?new Q(function(u,h){var m=setTimeout(function(){return h(new ee.Timeout(o))},i);l.then(u,h).finally(clearTimeout.bind(null,m))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&M(Q.prototype,Symbol.toStringTag,"Dexie.Promise"),Xe.env=bi(),F(Q,{all:function(){var i=We.apply(null,arguments).map($r);return new Q(function(o,l){i.length===0&&o([]);var u=i.length;i.forEach(function(h,m){return Q.resolve(h).then(function(g){i[m]=g,--u||o(i)},l)})})},resolve:function(i){return i instanceof Q?i:i&&typeof i.then=="function"?new Q(function(o,l){i.then(o,l)}):new Q(vt,!0,i)},reject:Bt,race:function(){var i=We.apply(null,arguments).map($r);return new Q(function(o,l){i.map(function(u){return Q.resolve(u).then(o,l)})})},PSD:{get:function(){return G},set:function(i){return G=i}},totalEchoes:{get:function(){return xr}},newPSD:fn,usePSD:kn,scheduler:{get:function(){return qe},set:function(i){qe=i}},rejectionMapper:{get:function(){return le},set:function(i){le=i}},follow:function(i,o){return new Q(function(l,u){return fn(function(h,m){var g=G;g.unhandleds=[],g.onunhandled=m,g.finalize=ie(function(){var w,C=this;w=function(){C.unhandleds.length===0?h():m(C.unhandleds[0])},kt.push(function S(){w(),kt.splice(kt.indexOf(S),1)}),++ut,qe(function(){--ut==0&&De()},[])},g.finalize),i()},o,l,u)})}}),$e&&($e.allSettled&&M(Q,"allSettled",function(){var i=We.apply(null,arguments).map($r);return new Q(function(o){i.length===0&&o([]);var l=i.length,u=new Array(l);i.forEach(function(h,m){return Q.resolve(h).then(function(g){return u[m]={status:"fulfilled",value:g}},function(g){return u[m]={status:"rejected",reason:g}}).then(function(){return--l||o(u)})})})}),$e.any&&typeof AggregateError<"u"&&M(Q,"any",function(){var i=We.apply(null,arguments).map($r);return new Q(function(o,l){i.length===0&&l(new AggregateError([]));var u=i.length,h=new Array(u);i.forEach(function(m,g){return Q.resolve(m).then(function(w){return o(w)},function(w){h[g]=w,--u||l(new AggregateError(h))})})})}),$e.withResolvers&&(Q.withResolvers=$e.withResolvers));var dt={awaits:0,echoes:0,id:0},La=0,wr=[],vr=0,xr=0,Ba=0;function fn(i,o,l,u){var h=G,m=Object.create(h);return m.parent=h,m.ref=0,m.global=!1,m.id=++Ba,Xe.env,m.env=_t?{Promise:Q,PromiseProp:{value:Q,configurable:!0,writable:!0},all:Q.all,race:Q.race,allSettled:Q.allSettled,any:Q.any,resolve:Q.resolve,reject:Q.reject}:{},o&&p(m,o),++h.ref,m.finalize=function(){--this.parent.ref||this.parent.finalize()},u=kn(m,i,l,u),m.ref===0&&m.finalize(),u}function Bn(){return dt.id||(dt.id=++La),++dt.awaits,dt.echoes+=Ze,dt.id}function pn(){return!!dt.awaits&&(--dt.awaits==0&&(dt.id=0),dt.echoes=dt.awaits*Ze,!0)}function $r(i){return dt.echoes&&i&&i.constructor===$e?(Bn(),i.then(function(o){return pn(),o},function(o){return pn(),nt(o)})):i}function Ma(){var i=wr[wr.length-1];wr.pop(),mn(i,!1)}function mn(i,o){var l,u=G;(o?!dt.echoes||vr++&&i===G:!vr||--vr&&i===G)||queueMicrotask(o?function(h){++xr,dt.echoes&&--dt.echoes!=0||(dt.echoes=dt.awaits=dt.id=0),wr.push(G),mn(h,!0)}.bind(null,i):Ma),i!==G&&(G=i,u===Xe&&(Xe.env=bi()),_t&&(l=Xe.env.Promise,o=i.env,(u.global||i.global)&&(Object.defineProperty(a,"Promise",o.PromiseProp),l.all=o.all,l.race=o.race,l.resolve=o.resolve,l.reject=o.reject,o.allSettled&&(l.allSettled=o.allSettled),o.any&&(l.any=o.any))))}function bi(){var i=a.Promise;return _t?{Promise:i,PromiseProp:Object.getOwnPropertyDescriptor(a,"Promise"),all:i.all,race:i.race,allSettled:i.allSettled,any:i.any,resolve:i.resolve,reject:i.reject}:{}}function kn(i,o,l,u,h){var m=G;try{return mn(i,!0),o(l,u,h)}finally{mn(m,!1)}}function yi(i,o,l,u){return typeof i!="function"?i:function(){var h=G;l&&Bn(),mn(o,!0);try{return i.apply(this,arguments)}finally{mn(h,!1),u&&queueMicrotask(pn)}}}function fs(i){Promise===$e&&dt.echoes===0?vr===0?i():enqueueNativeMicroTask(i):setTimeout(i,0)}(""+Rt).indexOf("[native code]")===-1&&(Bn=pn=ce);var nt=Q.reject,Cn="￿",nn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",wi="String expected.",Mn=[],kr="__dbnames",ps="readonly",ms="readwrite";function En(i,o){return i?o?function(){return i.apply(this,arguments)&&o.apply(this,arguments)}:i:o}var vi={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Cr(i){return typeof i!="string"||/\./.test(i)?function(o){return o}:function(o){return o[i]===void 0&&i in o&&delete(o=A(o))[i],o}}function xi(){throw ee.Type()}function Ce(i,o){try{var l=$i(i),u=$i(o);if(l!==u)return l==="Array"?1:u==="Array"?-1:l==="binary"?1:u==="binary"?-1:l==="string"?1:u==="string"?-1:l==="Date"?1:u!=="Date"?NaN:-1;switch(l){case"number":case"Date":case"string":return o<i?1:i<o?-1:0;case"binary":return(function(h,m){for(var g=h.length,w=m.length,C=g<w?g:w,S=0;S<C;++S)if(h[S]!==m[S])return h[S]<m[S]?-1:1;return g===w?0:g<w?-1:1})(ki(i),ki(o));case"Array":return(function(h,m){for(var g=h.length,w=m.length,C=g<w?g:w,S=0;S<C;++S){var D=Ce(h[S],m[S]);if(D!==0)return D}return g===w?0:g<w?-1:1})(i,o)}}catch{}return NaN}function $i(i){var o=typeof i;return o!="object"?o:ArrayBuffer.isView(i)?"binary":(i=k(i),i==="ArrayBuffer"?"binary":i)}function ki(i){return i instanceof Uint8Array?i:ArrayBuffer.isView(i)?new Uint8Array(i.buffer,i.byteOffset,i.byteLength):new Uint8Array(i)}var Ci=(He.prototype._trans=function(i,o,l){var u=this._tx||G.trans,h=this.name,m=Oe&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(i==="readonly"?"read":"write"," ").concat(this.name));function g(S,D,x){if(!x.schema[h])throw new ee.NotFound("Table "+h+" not part of transaction");return o(x.idbtrans,x)}var w=Re();try{var C=u&&u.db._novip===this.db._novip?u===G.trans?u._promise(i,g,l):fn(function(){return u._promise(i,g,l)},{trans:u,transless:G.transless||G}):(function S(D,x,O,E){if(D.idbdb&&(D._state.openComplete||G.letThrough||D._vip)){var T=D._createTransaction(x,O,D._dbSchema);try{T.create(),D._state.PR1398_maxLoop=3}catch(j){return j.name===Ke.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return S(D,x,O,E)})):nt(j)}return T._promise(x,function(j,P){return fn(function(){return G.trans=T,E(j,P,T)})}).then(function(j){if(x==="readwrite")try{T.idbtrans.commit()}catch{}return x==="readonly"?j:T._completion.then(function(){return j})})}if(D._state.openComplete)return nt(new ee.DatabaseClosed(D._state.dbOpenError));if(!D._state.isBeingOpened){if(!D._state.autoOpen)return nt(new ee.DatabaseClosed);D.open().catch(ce)}return D._state.dbReadyPromise.then(function(){return S(D,x,O,E)})})(this.db,i,[this.name],g);return m&&(C._consoleTask=m,C=C.catch(function(S){return console.trace(S),nt(S)})),C}finally{w&&Ue()}},He.prototype.get=function(i,o){var l=this;return i&&i.constructor===Object?this.where(i).first(o):i==null?nt(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(u){return l.core.get({trans:u,key:i}).then(function(h){return l.hook.reading.fire(h)})}).then(o)},He.prototype.where=function(i){if(typeof i=="string")return new this.db.WhereClause(this,i);if(d(i))return new this.db.WhereClause(this,"[".concat(i.join("+"),"]"));var o=c(i);if(o.length===1)return this.where(o[0]).equals(i[o[0]]);var l=this.schema.indexes.concat(this.schema.primKey).filter(function(w){if(w.compound&&o.every(function(S){return 0<=w.keyPath.indexOf(S)})){for(var C=0;C<o.length;++C)if(o.indexOf(w.keyPath[C])===-1)return!1;return!0}return!1}).sort(function(w,C){return w.keyPath.length-C.keyPath.length})[0];if(l&&this.db._maxKey!==Cn){var m=l.keyPath.slice(0,o.length);return this.where(m).equals(m.map(function(C){return i[C]}))}!l&&Oe&&console.warn("The query ".concat(JSON.stringify(i)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(o.join("+"),"]"));var u=this.schema.idxByName;function h(w,C){return Ce(w,C)===0}var g=o.reduce(function(x,C){var S=x[0],D=x[1],x=u[C],O=i[C];return[S||x,S||!x?En(D,x&&x.multi?function(E){return E=_e(E,C),d(E)&&E.some(function(T){return h(O,T)})}:function(E){return h(O,_e(E,C))}):D]},[null,null]),m=g[0],g=g[1];return m?this.where(m.name).equals(i[m.keyPath]).filter(g):l?this.filter(g):this.where(o).equals("")},He.prototype.filter=function(i){return this.toCollection().and(i)},He.prototype.count=function(i){return this.toCollection().count(i)},He.prototype.offset=function(i){return this.toCollection().offset(i)},He.prototype.limit=function(i){return this.toCollection().limit(i)},He.prototype.each=function(i){return this.toCollection().each(i)},He.prototype.toArray=function(i){return this.toCollection().toArray(i)},He.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},He.prototype.orderBy=function(i){return new this.db.Collection(new this.db.WhereClause(this,d(i)?"[".concat(i.join("+"),"]"):i))},He.prototype.reverse=function(){return this.toCollection().reverse()},He.prototype.mapToClass=function(i){var o,l=this.db,u=this.name;function h(){return o!==null&&o.apply(this,arguments)||this}(this.schema.mappedClass=i).prototype instanceof xi&&((function(C,S){if(typeof S!="function"&&S!==null)throw new TypeError("Class extends value "+String(S)+" is not a constructor or null");function D(){this.constructor=C}r(C,S),C.prototype=S===null?Object.create(S):(D.prototype=S.prototype,new D)})(h,o=i),Object.defineProperty(h.prototype,"db",{get:function(){return l},enumerable:!1,configurable:!0}),h.prototype.table=function(){return u},i=h);for(var m=new Set,g=i.prototype;g;g=v(g))Object.getOwnPropertyNames(g).forEach(function(C){return m.add(C)});function w(C){if(!C)return C;var S,D=Object.create(i.prototype);for(S in C)if(!m.has(S))try{D[S]=C[S]}catch{}return D}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=w,this.hook("reading",w),i},He.prototype.defineClass=function(){return this.mapToClass(function(i){p(this,i)})},He.prototype.add=function(i,o){var l=this,u=this.schema.primKey,h=u.auto,m=u.keyPath,g=i;return m&&h&&(g=Cr(m)(i)),this._trans("readwrite",function(w){return l.core.mutate({trans:w,type:"add",keys:o!=null?[o]:null,values:[g]})}).then(function(w){return w.numFailures?Q.reject(w.failures[0]):w.lastResult}).then(function(w){if(m)try{ye(i,m,w)}catch{}return w})},He.prototype.update=function(i,o){return typeof i!="object"||d(i)?this.where(":id").equals(i).modify(o):(i=_e(i,this.schema.primKey.keyPath),i===void 0?nt(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(i).modify(o))},He.prototype.put=function(i,o){var l=this,u=this.schema.primKey,h=u.auto,m=u.keyPath,g=i;return m&&h&&(g=Cr(m)(i)),this._trans("readwrite",function(w){return l.core.mutate({trans:w,type:"put",values:[g],keys:o!=null?[o]:null})}).then(function(w){return w.numFailures?Q.reject(w.failures[0]):w.lastResult}).then(function(w){if(m)try{ye(i,m,w)}catch{}return w})},He.prototype.delete=function(i){var o=this;return this._trans("readwrite",function(l){return o.core.mutate({trans:l,type:"delete",keys:[i]})}).then(function(l){return l.numFailures?Q.reject(l.failures[0]):void 0})},He.prototype.clear=function(){var i=this;return this._trans("readwrite",function(o){return i.core.mutate({trans:o,type:"deleteRange",range:vi})}).then(function(o){return o.numFailures?Q.reject(o.failures[0]):void 0})},He.prototype.bulkGet=function(i){var o=this;return this._trans("readonly",function(l){return o.core.getMany({keys:i,trans:l}).then(function(u){return u.map(function(h){return o.hook.reading.fire(h)})})})},He.prototype.bulkAdd=function(i,o,l){var u=this,h=Array.isArray(o)?o:void 0,m=(l=l||(h?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(g){var S=u.schema.primKey,w=S.auto,S=S.keyPath;if(S&&h)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(h&&h.length!==i.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var C=i.length,S=S&&w?i.map(Cr(S)):i;return u.core.mutate({trans:g,type:"add",keys:h,values:S,wantResults:m}).then(function(T){var x=T.numFailures,O=T.results,E=T.lastResult,T=T.failures;if(x===0)return m?O:E;throw new Te("".concat(u.name,".bulkAdd(): ").concat(x," of ").concat(C," operations failed"),T)})})},He.prototype.bulkPut=function(i,o,l){var u=this,h=Array.isArray(o)?o:void 0,m=(l=l||(h?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(g){var S=u.schema.primKey,w=S.auto,S=S.keyPath;if(S&&h)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(h&&h.length!==i.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var C=i.length,S=S&&w?i.map(Cr(S)):i;return u.core.mutate({trans:g,type:"put",keys:h,values:S,wantResults:m}).then(function(T){var x=T.numFailures,O=T.results,E=T.lastResult,T=T.failures;if(x===0)return m?O:E;throw new Te("".concat(u.name,".bulkPut(): ").concat(x," of ").concat(C," operations failed"),T)})})},He.prototype.bulkUpdate=function(i){var o=this,l=this.core,u=i.map(function(g){return g.key}),h=i.map(function(g){return g.changes}),m=[];return this._trans("readwrite",function(g){return l.getMany({trans:g,keys:u,cache:"clone"}).then(function(w){var C=[],S=[];i.forEach(function(x,O){var E=x.key,T=x.changes,j=w[O];if(j){for(var P=0,I=Object.keys(T);P<I.length;P++){var z=I[P],L=T[z];if(z===o.schema.primKey.keyPath){if(Ce(L,E)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else ye(j,z,L)}m.push(O),C.push(E),S.push(j)}});var D=C.length;return l.mutate({trans:g,type:"put",keys:C,values:S,updates:{keys:u,changeSpecs:h}}).then(function(x){var O=x.numFailures,E=x.failures;if(O===0)return D;for(var T=0,j=Object.keys(E);T<j.length;T++){var P,I=j[T],z=m[Number(I)];z!=null&&(P=E[I],delete E[I],E[z]=P)}throw new Te("".concat(o.name,".bulkUpdate(): ").concat(O," of ").concat(D," operations failed"),E)})})})},He.prototype.bulkDelete=function(i){var o=this,l=i.length;return this._trans("readwrite",function(u){return o.core.mutate({trans:u,type:"delete",keys:i})}).then(function(g){var h=g.numFailures,m=g.lastResult,g=g.failures;if(h===0)return m;throw new Te("".concat(o.name,".bulkDelete(): ").concat(h," of ").concat(l," operations failed"),g)})},He);function He(){}function Jn(i){function o(g,w){if(w){for(var C=arguments.length,S=new Array(C-1);--C;)S[C-1]=arguments[C];return l[g].subscribe.apply(null,S),i}if(typeof g=="string")return l[g]}var l={};o.addEventType=m;for(var u=1,h=arguments.length;u<h;++u)m(arguments[u]);return o;function m(g,w,C){if(typeof g!="object"){var S;w=w||Qe;var D={subscribers:[],fire:C=C||ce,subscribe:function(x){D.subscribers.indexOf(x)===-1&&(D.subscribers.push(x),D.fire=w(D.fire,x))},unsubscribe:function(x){D.subscribers=D.subscribers.filter(function(O){return O!==x}),D.fire=D.subscribers.reduce(w,C)}};return l[g]=o[g]=D}c(S=g).forEach(function(x){var O=S[x];if(d(O))m(x,S[x][0],S[x][1]);else{if(O!=="asap")throw new ee.InvalidArgument("Invalid event config");var E=m(x,me,function(){for(var T=arguments.length,j=new Array(T);T--;)j[T]=arguments[T];E.subscribers.forEach(function(P){fe(function(){P.apply(null,j)})})})}})}}function Zn(i,o){return V(o).from({prototype:i}),o}function Nn(i,o){return!(i.filter||i.algorithm||i.or)&&(o?i.justLimit:!i.replayFilter)}function gs(i,o){i.filter=En(i.filter,o)}function bs(i,o,l){var u=i.replayFilter;i.replayFilter=u?function(){return En(u(),o())}:o,i.justLimit=l&&!u}function Er(i,o){if(i.isPrimKey)return o.primaryKey;var l=o.getIndexByKeyPath(i.index);if(!l)throw new ee.Schema("KeyPath "+i.index+" on object store "+o.name+" is not indexed");return l}function Ei(i,o,l){var u=Er(i,o.schema);return o.openCursor({trans:l,values:!i.keysOnly,reverse:i.dir==="prev",unique:!!i.unique,query:{index:u,range:i.range}})}function Sr(i,o,l,u){var h=i.replayFilter?En(i.filter,i.replayFilter()):i.filter;if(i.or){var m={},g=function(w,C,S){var D,x;h&&!h(C,S,function(O){return C.stop(O)},function(O){return C.fail(O)})||((x=""+(D=C.primaryKey))=="[object ArrayBuffer]"&&(x=""+new Uint8Array(D)),$(m,x)||(m[x]=!0,o(w,C,S)))};return Promise.all([i.or._iterate(g,l),Si(Ei(i,u,l),i.algorithm,g,!i.keysOnly&&i.valueMapper)])}return Si(Ei(i,u,l),En(i.algorithm,h),o,!i.keysOnly&&i.valueMapper)}function Si(i,o,l,u){var h=Be(u?function(m,g,w){return l(u(m),g,w)}:l);return i.then(function(m){if(m)return m.start(function(){var g=function(){return m.continue()};o&&!o(m,function(w){return g=w},function(w){m.stop(w),g=ce},function(w){m.fail(w),g=ce})||h(m.value,m,function(w){return g=w}),g()})})}var rn=Symbol(),er=(_i.prototype.execute=function(i){if(this.add!==void 0){var o=this.add;if(d(o))return n(n([],d(i)?i:[],!0),o).sort();if(typeof o=="number")return(Number(i)||0)+o;if(typeof o=="bigint")try{return BigInt(i)+o}catch{return BigInt(0)+o}throw new TypeError("Invalid term ".concat(o))}if(this.remove!==void 0){var l=this.remove;if(d(l))return d(i)?i.filter(function(u){return!l.includes(u)}).sort():[];if(typeof l=="number")return Number(i)-l;if(typeof l=="bigint")try{return BigInt(i)-l}catch{return BigInt(0)-l}throw new TypeError("Invalid subtrahend ".concat(l))}return o=(o=this.replacePrefix)===null||o===void 0?void 0:o[0],o&&typeof i=="string"&&i.startsWith(o)?this.replacePrefix[1]+i.substring(o.length):i},_i);function _i(i){Object.assign(this,i)}var Na=(je.prototype._read=function(i,o){var l=this._ctx;return l.error?l.table._trans(null,nt.bind(null,l.error)):l.table._trans("readonly",i).then(o)},je.prototype._write=function(i){var o=this._ctx;return o.error?o.table._trans(null,nt.bind(null,o.error)):o.table._trans("readwrite",i,"locked")},je.prototype._addAlgorithm=function(i){var o=this._ctx;o.algorithm=En(o.algorithm,i)},je.prototype._iterate=function(i,o){return Sr(this._ctx,i,o,this._ctx.table.core)},je.prototype.clone=function(i){var o=Object.create(this.constructor.prototype),l=Object.create(this._ctx);return i&&p(l,i),o._ctx=l,o},je.prototype.raw=function(){return this._ctx.valueMapper=null,this},je.prototype.each=function(i){var o=this._ctx;return this._read(function(l){return Sr(o,i,l,o.table.core)})},je.prototype.count=function(i){var o=this;return this._read(function(l){var u=o._ctx,h=u.table.core;if(Nn(u,!0))return h.count({trans:l,query:{index:Er(u,h.schema),range:u.range}}).then(function(g){return Math.min(g,u.limit)});var m=0;return Sr(u,function(){return++m,!1},l,h).then(function(){return m})}).then(i)},je.prototype.sortBy=function(i,o){var l=i.split(".").reverse(),u=l[0],h=l.length-1;function m(C,S){return S?m(C[l[S]],S-1):C[u]}var g=this._ctx.dir==="next"?1:-1;function w(C,S){return Ce(m(C,h),m(S,h))*g}return this.toArray(function(C){return C.sort(w)}).then(o)},je.prototype.toArray=function(i){var o=this;return this._read(function(l){var u=o._ctx;if(u.dir==="next"&&Nn(u,!0)&&0<u.limit){var h=u.valueMapper,m=Er(u,u.table.core.schema);return u.table.core.query({trans:l,limit:u.limit,values:!0,query:{index:m,range:u.range}}).then(function(w){return w=w.result,h?w.map(h):w})}var g=[];return Sr(u,function(w){return g.push(w)},l,u.table.core).then(function(){return g})},i)},je.prototype.offset=function(i){var o=this._ctx;return i<=0||(o.offset+=i,Nn(o)?bs(o,function(){var l=i;return function(u,h){return l===0||(l===1?--l:h(function(){u.advance(l),l=0}),!1)}}):bs(o,function(){var l=i;return function(){return--l<0}})),this},je.prototype.limit=function(i){return this._ctx.limit=Math.min(this._ctx.limit,i),bs(this._ctx,function(){var o=i;return function(l,u,h){return--o<=0&&u(h),0<=o}},!0),this},je.prototype.until=function(i,o){return gs(this._ctx,function(l,u,h){return!i(l.value)||(u(h),o)}),this},je.prototype.first=function(i){return this.limit(1).toArray(function(o){return o[0]}).then(i)},je.prototype.last=function(i){return this.reverse().first(i)},je.prototype.filter=function(i){var o;return gs(this._ctx,function(l){return i(l.value)}),(o=this._ctx).isMatch=En(o.isMatch,i),this},je.prototype.and=function(i){return this.filter(i)},je.prototype.or=function(i){return new this.db.WhereClause(this._ctx.table,i,this)},je.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},je.prototype.desc=function(){return this.reverse()},je.prototype.eachKey=function(i){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){i(u.key,u)})},je.prototype.eachUniqueKey=function(i){return this._ctx.unique="unique",this.eachKey(i)},je.prototype.eachPrimaryKey=function(i){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){i(u.primaryKey,u)})},je.prototype.keys=function(i){var o=this._ctx;o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,h){l.push(h.key)}).then(function(){return l}).then(i)},je.prototype.primaryKeys=function(i){var o=this._ctx;if(o.dir==="next"&&Nn(o,!0)&&0<o.limit)return this._read(function(u){var h=Er(o,o.table.core.schema);return o.table.core.query({trans:u,values:!1,limit:o.limit,query:{index:h,range:o.range}})}).then(function(u){return u.result}).then(i);o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,h){l.push(h.primaryKey)}).then(function(){return l}).then(i)},je.prototype.uniqueKeys=function(i){return this._ctx.unique="unique",this.keys(i)},je.prototype.firstKey=function(i){return this.limit(1).keys(function(o){return o[0]}).then(i)},je.prototype.lastKey=function(i){return this.reverse().firstKey(i)},je.prototype.distinct=function(){var i=this._ctx,i=i.index&&i.table.schema.idxByName[i.index];if(!i||!i.multi)return this;var o={};return gs(this._ctx,function(h){var u=h.primaryKey.toString(),h=$(o,u);return o[u]=!0,!h}),this},je.prototype.modify=function(i){var o=this,l=this._ctx;return this._write(function(u){var h,m,g;g=typeof i=="function"?i:(h=c(i),m=h.length,function(P){for(var I=!1,z=0;z<m;++z){var L=h[z],N=i[L],W=_e(P,L);N instanceof er?(ye(P,L,N.execute(W)),I=!0):W!==N&&(ye(P,L,N),I=!0)}return I});var w=l.table.core,x=w.schema.primaryKey,C=x.outbound,S=x.extractKey,D=200,x=o.db._options.modifyChunkSize;x&&(D=typeof x=="object"?x[w.name]||x["*"]||200:x);function O(P,L){var z=L.failures,L=L.numFailures;T+=P-L;for(var N=0,W=c(z);N<W.length;N++){var Z=W[N];E.push(z[Z])}}var E=[],T=0,j=[];return o.clone().primaryKeys().then(function(P){function I(L){var N=Math.min(D,P.length-L);return w.getMany({trans:u,keys:P.slice(L,L+N),cache:"immutable"}).then(function(W){for(var Z=[],K=[],X=C?[]:null,te=[],J=0;J<N;++J){var re=W[J],pe={value:A(re),primKey:P[L+J]};g.call(pe,pe.value,pe)!==!1&&(pe.value==null?te.push(P[L+J]):C||Ce(S(re),S(pe.value))===0?(K.push(pe.value),C&&X.push(P[L+J])):(te.push(P[L+J]),Z.push(pe.value)))}return Promise.resolve(0<Z.length&&w.mutate({trans:u,type:"add",values:Z}).then(function(we){for(var ve in we.failures)te.splice(parseInt(ve),1);O(Z.length,we)})).then(function(){return(0<K.length||z&&typeof i=="object")&&w.mutate({trans:u,type:"put",keys:X,values:K,criteria:z,changeSpec:typeof i!="function"&&i,isAdditionalChunk:0<L}).then(function(we){return O(K.length,we)})}).then(function(){return(0<te.length||z&&i===ys)&&w.mutate({trans:u,type:"delete",keys:te,criteria:z,isAdditionalChunk:0<L}).then(function(we){return O(te.length,we)})}).then(function(){return P.length>L+N&&I(L+D)})})}var z=Nn(l)&&l.limit===1/0&&(typeof i!="function"||i===ys)&&{index:l.index,range:l.range};return I(0).then(function(){if(0<E.length)throw new xe("Error modifying one or more objects",E,T,j);return P.length})})})},je.prototype.delete=function(){var i=this._ctx,o=i.range;return Nn(i)&&(i.isPrimKey||o.type===3)?this._write(function(l){var u=i.table.core.schema.primaryKey,h=o;return i.table.core.count({trans:l,query:{index:u,range:h}}).then(function(m){return i.table.core.mutate({trans:l,type:"deleteRange",range:h}).then(function(g){var w=g.failures;if(g.lastResult,g.results,g=g.numFailures,g)throw new xe("Could not delete some values",Object.keys(w).map(function(C){return w[C]}),m-g);return m-g})})}):this.modify(ys)},je);function je(){}var ys=function(i,o){return o.value=null};function qa(i,o){return i<o?-1:i===o?0:1}function Ua(i,o){return o<i?-1:i===o?0:1}function At(i,o,l){return i=i instanceof Pi?new i.Collection(i):i,i._ctx.error=new(l||TypeError)(o),i}function qn(i){return new i.Collection(i,function(){return Ai("")}).limit(0)}function _r(i,o,l,u){var h,m,g,w,C,S,D,x=l.length;if(!l.every(function(T){return typeof T=="string"}))return At(i,wi);function O(T){h=T==="next"?function(P){return P.toUpperCase()}:function(P){return P.toLowerCase()},m=T==="next"?function(P){return P.toLowerCase()}:function(P){return P.toUpperCase()},g=T==="next"?qa:Ua;var j=l.map(function(P){return{lower:m(P),upper:h(P)}}).sort(function(P,I){return g(P.lower,I.lower)});w=j.map(function(P){return P.upper}),C=j.map(function(P){return P.lower}),D=(S=T)==="next"?"":u}O("next"),i=new i.Collection(i,function(){return gn(w[0],C[x-1]+u)}),i._ondirectionchange=function(T){O(T)};var E=0;return i._addAlgorithm(function(T,j,P){var I=T.key;if(typeof I!="string")return!1;var z=m(I);if(o(z,C,E))return!0;for(var L=null,N=E;N<x;++N){var W=(function(Z,K,X,te,J,re){for(var pe=Math.min(Z.length,te.length),we=-1,ve=0;ve<pe;++ve){var Pt=K[ve];if(Pt!==te[ve])return J(Z[ve],X[ve])<0?Z.substr(0,ve)+X[ve]+X.substr(ve+1):J(Z[ve],te[ve])<0?Z.substr(0,ve)+te[ve]+X.substr(ve+1):0<=we?Z.substr(0,we)+K[we]+X.substr(we+1):null;J(Z[ve],Pt)<0&&(we=ve)}return pe<te.length&&re==="next"?Z+X.substr(Z.length):pe<Z.length&&re==="prev"?Z.substr(0,X.length):we<0?null:Z.substr(0,we)+te[we]+X.substr(we+1)})(I,z,w[N],C[N],g,S);W===null&&L===null?E=N+1:(L===null||0<g(L,W))&&(L=W)}return j(L!==null?function(){T.continue(L+D)}:P),!1}),i}function gn(i,o,l,u){return{type:2,lower:i,upper:o,lowerOpen:l,upperOpen:u}}function Ai(i){return{type:1,lower:i,upper:i}}var Pi=(Object.defineProperty(ht.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ht.prototype.between=function(i,o,l,u){l=l!==!1,u=u===!0;try{return 0<this._cmp(i,o)||this._cmp(i,o)===0&&(l||u)&&(!l||!u)?qn(this):new this.Collection(this,function(){return gn(i,o,!l,!u)})}catch{return At(this,nn)}},ht.prototype.equals=function(i){return i==null?At(this,nn):new this.Collection(this,function(){return Ai(i)})},ht.prototype.above=function(i){return i==null?At(this,nn):new this.Collection(this,function(){return gn(i,void 0,!0)})},ht.prototype.aboveOrEqual=function(i){return i==null?At(this,nn):new this.Collection(this,function(){return gn(i,void 0,!1)})},ht.prototype.below=function(i){return i==null?At(this,nn):new this.Collection(this,function(){return gn(void 0,i,!1,!0)})},ht.prototype.belowOrEqual=function(i){return i==null?At(this,nn):new this.Collection(this,function(){return gn(void 0,i)})},ht.prototype.startsWith=function(i){return typeof i!="string"?At(this,wi):this.between(i,i+Cn,!0,!0)},ht.prototype.startsWithIgnoreCase=function(i){return i===""?this.startsWith(i):_r(this,function(o,l){return o.indexOf(l[0])===0},[i],Cn)},ht.prototype.equalsIgnoreCase=function(i){return _r(this,function(o,l){return o===l[0]},[i],"")},ht.prototype.anyOfIgnoreCase=function(){var i=We.apply(Y,arguments);return i.length===0?qn(this):_r(this,function(o,l){return l.indexOf(o)!==-1},i,"")},ht.prototype.startsWithAnyOfIgnoreCase=function(){var i=We.apply(Y,arguments);return i.length===0?qn(this):_r(this,function(o,l){return l.some(function(u){return o.indexOf(u)===0})},i,Cn)},ht.prototype.anyOf=function(){var i=this,o=We.apply(Y,arguments),l=this._cmp;try{o.sort(l)}catch{return At(this,nn)}if(o.length===0)return qn(this);var u=new this.Collection(this,function(){return gn(o[0],o[o.length-1])});u._ondirectionchange=function(m){l=m==="next"?i._ascending:i._descending,o.sort(l)};var h=0;return u._addAlgorithm(function(m,g,w){for(var C=m.key;0<l(C,o[h]);)if(++h===o.length)return g(w),!1;return l(C,o[h])===0||(g(function(){m.continue(o[h])}),!1)}),u},ht.prototype.notEqual=function(i){return this.inAnyRange([[-1/0,i],[i,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ht.prototype.noneOf=function(){var i=We.apply(Y,arguments);if(i.length===0)return new this.Collection(this);try{i.sort(this._ascending)}catch{return At(this,nn)}var o=i.reduce(function(l,u){return l?l.concat([[l[l.length-1][1],u]]):[[-1/0,u]]},null);return o.push([i[i.length-1],this.db._maxKey]),this.inAnyRange(o,{includeLowers:!1,includeUppers:!1})},ht.prototype.inAnyRange=function(I,o){var l=this,u=this._cmp,h=this._ascending,m=this._descending,g=this._min,w=this._max;if(I.length===0)return qn(this);if(!I.every(function(z){return z[0]!==void 0&&z[1]!==void 0&&h(z[0],z[1])<=0}))return At(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var C=!o||o.includeLowers!==!1,S=o&&o.includeUppers===!0,D,x=h;function O(z,L){return x(z[0],L[0])}try{(D=I.reduce(function(z,L){for(var N=0,W=z.length;N<W;++N){var Z=z[N];if(u(L[0],Z[1])<0&&0<u(L[1],Z[0])){Z[0]=g(Z[0],L[0]),Z[1]=w(Z[1],L[1]);break}}return N===W&&z.push(L),z},[])).sort(O)}catch{return At(this,nn)}var E=0,T=S?function(z){return 0<h(z,D[E][1])}:function(z){return 0<=h(z,D[E][1])},j=C?function(z){return 0<m(z,D[E][0])}:function(z){return 0<=m(z,D[E][0])},P=T,I=new this.Collection(this,function(){return gn(D[0][0],D[D.length-1][1],!C,!S)});return I._ondirectionchange=function(z){x=z==="next"?(P=T,h):(P=j,m),D.sort(O)},I._addAlgorithm(function(z,L,N){for(var W,Z=z.key;P(Z);)if(++E===D.length)return L(N),!1;return!T(W=Z)&&!j(W)||(l._cmp(Z,D[E][1])===0||l._cmp(Z,D[E][0])===0||L(function(){x===h?z.continue(D[E][0]):z.continue(D[E][1])}),!1)}),I},ht.prototype.startsWithAnyOf=function(){var i=We.apply(Y,arguments);return i.every(function(o){return typeof o=="string"})?i.length===0?qn(this):this.inAnyRange(i.map(function(o){return[o,o+Cn]})):At(this,"startsWithAnyOf() only works with strings")},ht);function ht(){}function Yt(i){return Be(function(o){return tr(o),i(o.target.error),!1})}function tr(i){i.stopPropagation&&i.stopPropagation(),i.preventDefault&&i.preventDefault()}var nr="storagemutated",ws="x-storagemutated-1",bn=Jn(null,nr),Ha=(Xt.prototype._lock=function(){return se(!G.global),++this._reculock,this._reculock!==1||G.global||(G.lockOwnerFor=this),this},Xt.prototype._unlock=function(){if(se(!G.global),--this._reculock==0)for(G.global||(G.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var i=this._blockedFuncs.shift();try{kn(i[1],i[0])}catch{}}return this},Xt.prototype._locked=function(){return this._reculock&&G.lockOwnerFor!==this},Xt.prototype.create=function(i){var o=this;if(!this.mode)return this;var l=this.db.idbdb,u=this.db._state.dbOpenError;if(se(!this.idbtrans),!i&&!l)switch(u&&u.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(u);case"MissingAPIError":throw new ee.MissingAPI(u.message,u);default:throw new ee.OpenFailed(u)}if(!this.active)throw new ee.TransactionInactive;return se(this._completion._state===null),(i=this.idbtrans=i||(this.db.core||l).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Be(function(h){tr(h),o._reject(i.error)}),i.onabort=Be(function(h){tr(h),o.active&&o._reject(new ee.Abort(i.error)),o.active=!1,o.on("abort").fire(h)}),i.oncomplete=Be(function(){o.active=!1,o._resolve(),"mutatedParts"in i&&bn.storagemutated.fire(i.mutatedParts)}),this},Xt.prototype._promise=function(i,o,l){var u=this;if(i==="readwrite"&&this.mode!=="readwrite")return nt(new ee.ReadOnly("Transaction is readonly"));if(!this.active)return nt(new ee.TransactionInactive);if(this._locked())return new Q(function(m,g){u._blockedFuncs.push([function(){u._promise(i,o,l).then(m,g)},G])});if(l)return fn(function(){var m=new Q(function(g,w){u._lock();var C=o(g,w,u);C&&C.then&&C.then(g,w)});return m.finally(function(){return u._unlock()}),m._lib=!0,m});var h=new Q(function(m,g){var w=o(m,g,u);w&&w.then&&w.then(m,g)});return h._lib=!0,h},Xt.prototype._root=function(){return this.parent?this.parent._root():this},Xt.prototype.waitFor=function(i){var o,l=this._root(),u=Q.resolve(i);l._waitingFor?l._waitingFor=l._waitingFor.then(function(){return u}):(l._waitingFor=u,l._waitingQueue=[],o=l.idbtrans.objectStore(l.storeNames[0]),(function m(){for(++l._spinCount;l._waitingQueue.length;)l._waitingQueue.shift()();l._waitingFor&&(o.get(-1/0).onsuccess=m)})());var h=l._waitingFor;return new Q(function(m,g){u.then(function(w){return l._waitingQueue.push(Be(m.bind(null,w)))},function(w){return l._waitingQueue.push(Be(g.bind(null,w)))}).finally(function(){l._waitingFor===h&&(l._waitingFor=null)})})},Xt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},Xt.prototype.table=function(i){var o=this._memoizedTables||(this._memoizedTables={});if($(o,i))return o[i];var l=this.schema[i];if(!l)throw new ee.NotFound("Table "+i+" not part of transaction");return l=new this.db.Table(i,l,this),l.core=this.db.core.table(i),o[i]=l},Xt);function Xt(){}function vs(i,o,l,u,h,m,g){return{name:i,keyPath:o,unique:l,multi:u,auto:h,compound:m,src:(l&&!g?"&":"")+(u?"*":"")+(h?"++":"")+Ti(o)}}function Ti(i){return typeof i=="string"?i:i?"["+[].join.call(i,"+")+"]":""}function xs(i,o,l){return{name:i,primKey:o,indexes:l,mappedClass:null,idxByName:(u=function(h){return[h.name,h]},l.reduce(function(h,m,g){return g=u(m,g),g&&(h[g[0]]=g[1]),h},{}))};var u}var rr=function(i){try{return i.only([[]]),rr=function(){return[[]]},[[]]}catch{return rr=function(){return Cn},Cn}};function $s(i){return i==null?function(){}:typeof i=="string"?(o=i).split(".").length===1?function(l){return l[o]}:function(l){return _e(l,o)}:function(l){return _e(l,i)};var o}function Di(i){return[].slice.call(i)}var Wa=0;function sr(i){return i==null?":id":typeof i=="string"?i:"[".concat(i.join("+"),"]")}function Ka(i,o,C){function u(P){if(P.type===3)return null;if(P.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var E=P.lower,T=P.upper,j=P.lowerOpen,P=P.upperOpen;return E===void 0?T===void 0?null:o.upperBound(T,!!P):T===void 0?o.lowerBound(E,!!j):o.bound(E,T,!!j,!!P)}function h(O){var E,T=O.name;return{name:T,schema:O,mutate:function(j){var P=j.trans,I=j.type,z=j.keys,L=j.values,N=j.range;return new Promise(function(W,Z){W=Be(W);var K=P.objectStore(T),X=K.keyPath==null,te=I==="put"||I==="add";if(!te&&I!=="delete"&&I!=="deleteRange")throw new Error("Invalid operation type: "+I);var J,re=(z||L||{length:1}).length;if(z&&L&&z.length!==L.length)throw new Error("Given keys array must have same length as given values array.");if(re===0)return W({numFailures:0,failures:{},results:[],lastResult:void 0});function pe(xt){++Pt,tr(xt)}var we=[],ve=[],Pt=0;if(I==="deleteRange"){if(N.type===4)return W({numFailures:Pt,failures:ve,results:[],lastResult:void 0});N.type===3?we.push(J=K.clear()):we.push(J=K.delete(u(N)))}else{var X=te?X?[L,z]:[L,null]:[z,null],he=X[0],bt=X[1];if(te)for(var yt=0;yt<re;++yt)we.push(J=bt&&bt[yt]!==void 0?K[I](he[yt],bt[yt]):K[I](he[yt])),J.onerror=pe;else for(yt=0;yt<re;++yt)we.push(J=K[I](he[yt])),J.onerror=pe}function Mr(xt){xt=xt.target.result,we.forEach(function(An,Ms){return An.error!=null&&(ve[Ms]=An.error)}),W({numFailures:Pt,failures:ve,results:I==="delete"?z:we.map(function(An){return An.result}),lastResult:xt})}J.onerror=function(xt){pe(xt),Mr(xt)},J.onsuccess=Mr})},getMany:function(j){var P=j.trans,I=j.keys;return new Promise(function(z,L){z=Be(z);for(var N,W=P.objectStore(T),Z=I.length,K=new Array(Z),X=0,te=0,J=function(we){we=we.target,K[we._pos]=we.result,++te===X&&z(K)},re=Yt(L),pe=0;pe<Z;++pe)I[pe]!=null&&((N=W.get(I[pe]))._pos=pe,N.onsuccess=J,N.onerror=re,++X);X===0&&z(K)})},get:function(j){var P=j.trans,I=j.key;return new Promise(function(z,L){z=Be(z);var N=P.objectStore(T).get(I);N.onsuccess=function(W){return z(W.target.result)},N.onerror=Yt(L)})},query:(E=S,function(j){return new Promise(function(P,I){P=Be(P);var z,L,N,X=j.trans,W=j.values,Z=j.limit,J=j.query,K=Z===1/0?void 0:Z,te=J.index,J=J.range,X=X.objectStore(T),te=te.isPrimaryKey?X:X.index(te.name),J=u(J);if(Z===0)return P({result:[]});E?((K=W?te.getAll(J,K):te.getAllKeys(J,K)).onsuccess=function(re){return P({result:re.target.result})},K.onerror=Yt(I)):(z=0,L=!W&&"openKeyCursor"in te?te.openKeyCursor(J):te.openCursor(J),N=[],L.onsuccess=function(re){var pe=L.result;return pe?(N.push(W?pe.value:pe.primaryKey),++z===Z?P({result:N}):void pe.continue()):P({result:N})},L.onerror=Yt(I))})}),openCursor:function(j){var P=j.trans,I=j.values,z=j.query,L=j.reverse,N=j.unique;return new Promise(function(W,Z){W=Be(W);var te=z.index,K=z.range,X=P.objectStore(T),X=te.isPrimaryKey?X:X.index(te.name),te=L?N?"prevunique":"prev":N?"nextunique":"next",J=!I&&"openKeyCursor"in X?X.openKeyCursor(u(K),te):X.openCursor(u(K),te);J.onerror=Yt(Z),J.onsuccess=Be(function(re){var pe,we,ve,Pt,he=J.result;he?(he.___id=++Wa,he.done=!1,pe=he.continue.bind(he),we=(we=he.continuePrimaryKey)&&we.bind(he),ve=he.advance.bind(he),Pt=function(){throw new Error("Cursor not stopped")},he.trans=P,he.stop=he.continue=he.continuePrimaryKey=he.advance=function(){throw new Error("Cursor not started")},he.fail=Be(Z),he.next=function(){var bt=this,yt=1;return this.start(function(){return yt--?bt.continue():bt.stop()}).then(function(){return bt})},he.start=function(bt){function yt(){if(J.result)try{bt()}catch(xt){he.fail(xt)}else he.done=!0,he.start=function(){throw new Error("Cursor behind last entry")},he.stop()}var Mr=new Promise(function(xt,An){xt=Be(xt),J.onerror=Yt(An),he.fail=An,he.stop=function(Ms){he.stop=he.continue=he.continuePrimaryKey=he.advance=Pt,xt(Ms)}});return J.onsuccess=Be(function(xt){J.onsuccess=yt,yt()}),he.continue=pe,he.continuePrimaryKey=we,he.advance=ve,yt(),Mr},W(he)):W(null)},Z)})},count:function(j){var P=j.query,I=j.trans,z=P.index,L=P.range;return new Promise(function(N,W){var Z=I.objectStore(T),K=z.isPrimaryKey?Z:Z.index(z.name),Z=u(L),K=Z?K.count(Z):K.count();K.onsuccess=Be(function(X){return N(X.target.result)}),K.onerror=Yt(W)})}}}var m,g,w,D=(g=C,w=Di((m=i).objectStoreNames),{schema:{name:m.name,tables:w.map(function(O){return g.objectStore(O)}).map(function(O){var E=O.keyPath,P=O.autoIncrement,T=d(E),j={},P={name:O.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:E==null,compound:T,keyPath:E,autoIncrement:P,unique:!0,extractKey:$s(E)},indexes:Di(O.indexNames).map(function(I){return O.index(I)}).map(function(N){var z=N.name,L=N.unique,W=N.multiEntry,N=N.keyPath,W={name:z,compound:d(N),keyPath:N,unique:L,multiEntry:W,extractKey:$s(N)};return j[sr(N)]=W}),getIndexByKeyPath:function(I){return j[sr(I)]}};return j[":id"]=P.primaryKey,E!=null&&(j[sr(E)]=P.primaryKey),P})},hasGetAll:0<w.length&&"getAll"in g.objectStore(w[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),C=D.schema,S=D.hasGetAll,D=C.tables.map(h),x={};return D.forEach(function(O){return x[O.name]=O}),{stack:"dbcore",transaction:i.transaction.bind(i),table:function(O){if(!x[O])throw new Error("Table '".concat(O,"' not found"));return x[O]},MIN_KEY:-1/0,MAX_KEY:rr(o),schema:C}}function Va(i,o,l,u){var h=l.IDBKeyRange;return l.indexedDB,{dbcore:(u=Ka(o,h,u),i.dbcore.reduce(function(m,g){return g=g.create,s(s({},m),g(m))},u))}}function Ar(i,u){var l=u.db,u=Va(i._middlewares,l,i._deps,u);i.core=u.dbcore,i.tables.forEach(function(h){var m=h.name;i.core.schema.tables.some(function(g){return g.name===m})&&(h.core=i.core.table(m),i[m]instanceof i.Table&&(i[m].core=h.core))})}function Pr(i,o,l,u){l.forEach(function(h){var m=u[h];o.forEach(function(g){var w=(function C(S,D){return ae(S,D)||(S=v(S))&&C(S,D)})(g,h);(!w||"value"in w&&w.value===void 0)&&(g===i.Transaction.prototype||g instanceof i.Transaction?M(g,h,{get:function(){return this.table(h)},set:function(C){B(this,h,{value:C,writable:!0,configurable:!0,enumerable:!0})}}):g[h]=new i.Table(h,m))})})}function ks(i,o){o.forEach(function(l){for(var u in l)l[u]instanceof i.Table&&delete l[u]})}function Ya(i,o){return i._cfg.version-o._cfg.version}function Xa(i,o,l,u){var h=i._dbSchema;l.objectStoreNames.contains("$meta")&&!h.$meta&&(h.$meta=xs("$meta",Oi("")[0],[]),i._storeNames.push("$meta"));var m=i._createTransaction("readwrite",i._storeNames,h);m.create(l),m._completion.catch(u);var g=m._reject.bind(m),w=G.transless||G;fn(function(){return G.trans=m,G.transless=w,o!==0?(Ar(i,l),S=o,((C=m).storeNames.includes("$meta")?C.table("$meta").get("version").then(function(D){return D??S}):Q.resolve(S)).then(function(D){return O=D,E=m,T=l,j=[],D=(x=i)._versions,P=x._dbSchema=Dr(0,x.idbdb,T),(D=D.filter(function(I){return I._cfg.version>=O})).length!==0?(D.forEach(function(I){j.push(function(){var z=P,L=I._cfg.dbschema;jr(x,z,T),jr(x,L,T),P=x._dbSchema=L;var N=Cs(z,L);N.add.forEach(function(te){Es(T,te[0],te[1].primKey,te[1].indexes)}),N.change.forEach(function(te){if(te.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var J=T.objectStore(te.name);te.add.forEach(function(re){return Tr(J,re)}),te.change.forEach(function(re){J.deleteIndex(re.name),Tr(J,re)}),te.del.forEach(function(re){return J.deleteIndex(re)})});var W=I._cfg.contentUpgrade;if(W&&I._cfg.version>O){Ar(x,T),E._memoizedTables={};var Z=ft(L);N.del.forEach(function(te){Z[te]=z[te]}),ks(x,[x.Transaction.prototype]),Pr(x,[x.Transaction.prototype],c(Z),Z),E.schema=Z;var K,X=it(W);return X&&Bn(),N=Q.follow(function(){var te;(K=W(E))&&X&&(te=pn.bind(null,null),K.then(te,te))}),K&&typeof K.then=="function"?Q.resolve(K):N.then(function(){return K})}}),j.push(function(z){var L,N,W=I._cfg.dbschema;L=W,N=z,[].slice.call(N.db.objectStoreNames).forEach(function(Z){return L[Z]==null&&N.db.deleteObjectStore(Z)}),ks(x,[x.Transaction.prototype]),Pr(x,[x.Transaction.prototype],x._storeNames,x._dbSchema),E.schema=x._dbSchema}),j.push(function(z){x.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(x.idbdb.version/10)===I._cfg.version?(x.idbdb.deleteObjectStore("$meta"),delete x._dbSchema.$meta,x._storeNames=x._storeNames.filter(function(L){return L!=="$meta"})):z.objectStore("$meta").put(I._cfg.version,"version"))})}),(function I(){return j.length?Q.resolve(j.shift()(E.idbtrans)).then(I):Q.resolve()})().then(function(){ji(P,T)})):Q.resolve();var x,O,E,T,j,P}).catch(g)):(c(h).forEach(function(D){Es(l,D,h[D].primKey,h[D].indexes)}),Ar(i,l),void Q.follow(function(){return i.on.populate.fire(m)}).catch(g));var C,S})}function Ga(i,o){ji(i._dbSchema,o),o.db.version%10!=0||o.objectStoreNames.contains("$meta")||o.db.createObjectStore("$meta").add(Math.ceil(o.db.version/10-1),"version");var l=Dr(0,i.idbdb,o);jr(i,i._dbSchema,o);for(var u=0,h=Cs(l,i._dbSchema).change;u<h.length;u++){var m=(function(g){if(g.change.length||g.recreate)return console.warn("Unable to patch indexes of table ".concat(g.name," because it has changes on the type of index or primary key.")),{value:void 0};var w=o.objectStore(g.name);g.add.forEach(function(C){Oe&&console.debug("Dexie upgrade patch: Creating missing index ".concat(g.name,".").concat(C.src)),Tr(w,C)})})(h[u]);if(typeof m=="object")return m.value}}function Cs(i,o){var l,u={del:[],add:[],change:[]};for(l in i)o[l]||u.del.push(l);for(l in o){var h=i[l],m=o[l];if(h){var g={name:l,def:m,recreate:!1,del:[],add:[],change:[]};if(""+(h.primKey.keyPath||"")!=""+(m.primKey.keyPath||"")||h.primKey.auto!==m.primKey.auto)g.recreate=!0,u.change.push(g);else{var w=h.idxByName,C=m.idxByName,S=void 0;for(S in w)C[S]||g.del.push(S);for(S in C){var D=w[S],x=C[S];D?D.src!==x.src&&g.change.push(x):g.add.push(x)}(0<g.del.length||0<g.add.length||0<g.change.length)&&u.change.push(g)}}else u.add.push([l,m])}return u}function Es(i,o,l,u){var h=i.db.createObjectStore(o,l.keyPath?{keyPath:l.keyPath,autoIncrement:l.auto}:{autoIncrement:l.auto});return u.forEach(function(m){return Tr(h,m)}),h}function ji(i,o){c(i).forEach(function(l){o.db.objectStoreNames.contains(l)||(Oe&&console.debug("Dexie: Creating missing table",l),Es(o,l,i[l].primKey,i[l].indexes))})}function Tr(i,o){i.createIndex(o.name,o.keyPath,{unique:o.unique,multiEntry:o.multi})}function Dr(i,o,l){var u={};return be(o.objectStoreNames,0).forEach(function(h){for(var m=l.objectStore(h),g=vs(Ti(S=m.keyPath),S||"",!0,!1,!!m.autoIncrement,S&&typeof S!="string",!0),w=[],C=0;C<m.indexNames.length;++C){var D=m.index(m.indexNames[C]),S=D.keyPath,D=vs(D.name,S,!!D.unique,!!D.multiEntry,!1,S&&typeof S!="string",!1);w.push(D)}u[h]=xs(h,g,w)}),u}function jr(i,o,l){for(var u=l.db.objectStoreNames,h=0;h<u.length;++h){var m=u[h],g=l.objectStore(m);i._hasGetAll="getAll"in g;for(var w=0;w<g.indexNames.length;++w){var C=g.indexNames[w],S=g.index(C).keyPath,D=typeof S=="string"?S:"["+be(S).join("+")+"]";!o[m]||(S=o[m].idxByName[D])&&(S.name=C,delete o[m].idxByName[D],o[m].idxByName[C]=S)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&a.WorkerGlobalScope&&a instanceof a.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(i._hasGetAll=!1)}function Oi(i){return i.split(",").map(function(o,l){var u=(o=o.trim()).replace(/([&*]|\+\+)/g,""),h=/^\[/.test(u)?u.match(/^\[(.*)\]$/)[1].split("+"):u;return vs(u,h||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),d(h),l===0)})}var Qa=(Or.prototype._parseStoresSpec=function(i,o){c(i).forEach(function(l){if(i[l]!==null){var u=Oi(i[l]),h=u.shift();if(h.unique=!0,h.multi)throw new ee.Schema("Primary key cannot be multi-valued");u.forEach(function(m){if(m.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!m.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),o[l]=xs(l,h,u)}})},Or.prototype.stores=function(l){var o=this.db;this._cfg.storesSource=this._cfg.storesSource?p(this._cfg.storesSource,l):l;var l=o._versions,u={},h={};return l.forEach(function(m){p(u,m._cfg.storesSource),h=m._cfg.dbschema={},m._parseStoresSpec(u,h)}),o._dbSchema=h,ks(o,[o._allTables,o,o.Transaction.prototype]),Pr(o,[o._allTables,o,o.Transaction.prototype,this._cfg.tables],c(h),h),o._storeNames=c(h),this},Or.prototype.upgrade=function(i){return this._cfg.contentUpgrade=St(this._cfg.contentUpgrade||ce,i),this},Or);function Or(){}function Ss(i,o){var l=i._dbNamesDB;return l||(l=i._dbNamesDB=new sn(kr,{addons:[],indexedDB:i,IDBKeyRange:o})).version(1).stores({dbnames:"name"}),l.table("dbnames")}function _s(i){return i&&typeof i.databases=="function"}function As(i){return fn(function(){return G.letThrough=!0,i()})}function Ps(i){return!("from"in i)}var gt=function(i,o){if(!this){var l=new gt;return i&&"d"in i&&p(l,i),l}p(this,arguments.length?{d:1,from:i,to:1<arguments.length?o:i}:{d:0})};function ir(i,o,l){var u=Ce(o,l);if(!isNaN(u)){if(0<u)throw RangeError();if(Ps(i))return p(i,{from:o,to:l,d:1});var h=i.l,u=i.r;if(Ce(l,i.from)<0)return h?ir(h,o,l):i.l={from:o,to:l,d:1,l:null,r:null},Fi(i);if(0<Ce(o,i.to))return u?ir(u,o,l):i.r={from:o,to:l,d:1,l:null,r:null},Fi(i);Ce(o,i.from)<0&&(i.from=o,i.l=null,i.d=u?u.d+1:1),0<Ce(l,i.to)&&(i.to=l,i.r=null,i.d=i.l?i.l.d+1:1),l=!i.r,h&&!i.l&&or(i,h),u&&l&&or(i,u)}}function or(i,o){Ps(o)||(function l(u,C){var m=C.from,g=C.to,w=C.l,C=C.r;ir(u,m,g),w&&l(u,w),C&&l(u,C)})(i,o)}function Ri(i,o){var l=Rr(o),u=l.next();if(u.done)return!1;for(var h=u.value,m=Rr(i),g=m.next(h.from),w=g.value;!u.done&&!g.done;){if(Ce(w.from,h.to)<=0&&0<=Ce(w.to,h.from))return!0;Ce(h.from,w.from)<0?h=(u=l.next(w.from)).value:w=(g=m.next(h.from)).value}return!1}function Rr(i){var o=Ps(i)?null:{s:0,n:i};return{next:function(l){for(var u=0<arguments.length;o;)switch(o.s){case 0:if(o.s=1,u)for(;o.n.l&&Ce(l,o.n.from)<0;)o={up:o,n:o.n.l,s:1};else for(;o.n.l;)o={up:o,n:o.n.l,s:1};case 1:if(o.s=2,!u||Ce(l,o.n.to)<=0)return{value:o.n,done:!1};case 2:if(o.n.r){o.s=3,o={up:o,n:o.n.r,s:0};continue}case 3:o=o.up}return{done:!0}}}}function Fi(i){var o,l,u=(((o=i.r)===null||o===void 0?void 0:o.d)||0)-(((l=i.l)===null||l===void 0?void 0:l.d)||0),h=1<u?"r":u<-1?"l":"";h&&(o=h=="r"?"l":"r",l=s({},i),u=i[h],i.from=u.from,i.to=u.to,i[h]=u[h],l[h]=u[o],(i[o]=l).d=Ii(l)),i.d=Ii(i)}function Ii(l){var o=l.r,l=l.l;return(o?l?Math.max(o.d,l.d):o.d:l?l.d:0)+1}function Fr(i,o){return c(o).forEach(function(l){i[l]?or(i[l],o[l]):i[l]=(function u(h){var m,g,w={};for(m in h)$(h,m)&&(g=h[m],w[m]=!g||typeof g!="object"||f.has(g.constructor)?g:u(g));return w})(o[l])}),i}function Ts(i,o){return i.all||o.all||Object.keys(i).some(function(l){return o[l]&&Ri(o[l],i[l])})}F(gt.prototype,((Rt={add:function(i){return or(this,i),this},addKey:function(i){return ir(this,i,i),this},addKeys:function(i){var o=this;return i.forEach(function(l){return ir(o,l,l)}),this},hasKey:function(i){var o=Rr(this).next(i).value;return o&&Ce(o.from,i)<=0&&0<=Ce(o.to,i)}})[oe]=function(){return Rr(this)},Rt));var Sn={},Ds={},js=!1;function Ir(i){Fr(Ds,i),js||(js=!0,setTimeout(function(){js=!1,Os(Ds,!(Ds={}))},0))}function Os(i,o){o===void 0&&(o=!1);var l=new Set;if(i.all)for(var u=0,h=Object.values(Sn);u<h.length;u++)zi(g=h[u],i,l,o);else for(var m in i){var g,w=/^idb\:\/\/(.*)\/(.*)\//.exec(m);w&&(m=w[1],w=w[2],(g=Sn["idb://".concat(m,"/").concat(w)])&&zi(g,i,l,o))}l.forEach(function(C){return C()})}function zi(i,o,l,u){for(var h=[],m=0,g=Object.entries(i.queries.query);m<g.length;m++){for(var w=g[m],C=w[0],S=[],D=0,x=w[1];D<x.length;D++){var O=x[D];Ts(o,O.obsSet)?O.subscribers.forEach(function(P){return l.add(P)}):u&&S.push(O)}u&&h.push([C,S])}if(u)for(var E=0,T=h;E<T.length;E++){var j=T[E],C=j[0],S=j[1];i.queries.query[C]=S}}function Ja(i){var o=i._state,l=i._deps.indexedDB;if(o.isBeingOpened||i.idbdb)return o.dbReadyPromise.then(function(){return o.dbOpenError?nt(o.dbOpenError):i});o.isBeingOpened=!0,o.dbOpenError=null,o.openComplete=!1;var u=o.openCanceller,h=Math.round(10*i.verno),m=!1;function g(){if(o.openCanceller!==u)throw new ee.DatabaseClosed("db.open() was cancelled")}function w(){return new Q(function(O,E){if(g(),!l)throw new ee.MissingAPI;var T=i.name,j=o.autoSchema||!h?l.open(T):l.open(T,h);if(!j)throw new ee.MissingAPI;j.onerror=Yt(E),j.onblocked=Be(i._fireOnBlocked),j.onupgradeneeded=Be(function(P){var I;D=j.transaction,o.autoSchema&&!i._options.allowEmptyDB?(j.onerror=tr,D.abort(),j.result.close(),(I=l.deleteDatabase(T)).onsuccess=I.onerror=Be(function(){E(new ee.NoSuchDatabase("Database ".concat(T," doesnt exist")))})):(D.onerror=Yt(E),P=P.oldVersion>Math.pow(2,62)?0:P.oldVersion,x=P<1,i.idbdb=j.result,m&&Ga(i,D),Xa(i,P/10,D,E))},E),j.onsuccess=Be(function(){D=null;var P,I,z,L,N,W=i.idbdb=j.result,Z=be(W.objectStoreNames);if(0<Z.length)try{var K=W.transaction((L=Z).length===1?L[0]:L,"readonly");if(o.autoSchema)I=W,z=K,(P=i).verno=I.version/10,z=P._dbSchema=Dr(0,I,z),P._storeNames=be(I.objectStoreNames,0),Pr(P,[P._allTables],c(z),z);else if(jr(i,i._dbSchema,K),((N=Cs(Dr(0,(N=i).idbdb,K),N._dbSchema)).add.length||N.change.some(function(X){return X.add.length||X.change.length}))&&!m)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),W.close(),h=W.version+1,m=!0,O(w());Ar(i,K)}catch{}Mn.push(i),W.onversionchange=Be(function(X){o.vcFired=!0,i.on("versionchange").fire(X)}),W.onclose=Be(function(X){i.on("close").fire(X)}),x&&(N=i._deps,K=T,W=N.indexedDB,N=N.IDBKeyRange,_s(W)||K===kr||Ss(W,N).put({name:K}).catch(ce)),O()},E)}).catch(function(O){switch(O?.name){case"UnknownError":if(0<o.PR1398_maxLoop)return o.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),w();break;case"VersionError":if(0<h)return h=0,w()}return Q.reject(O)})}var C,S=o.dbReadyResolve,D=null,x=!1;return Q.race([u,(typeof navigator>"u"?Q.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(O){function E(){return indexedDB.databases().finally(O)}C=setInterval(E,100),E()}).finally(function(){return clearInterval(C)}):Promise.resolve()).then(w)]).then(function(){return g(),o.onReadyBeingFired=[],Q.resolve(As(function(){return i.on.ready.fire(i.vip)})).then(function O(){if(0<o.onReadyBeingFired.length){var E=o.onReadyBeingFired.reduce(St,ce);return o.onReadyBeingFired=[],Q.resolve(As(function(){return E(i.vip)})).then(O)}})}).finally(function(){o.openCanceller===u&&(o.onReadyBeingFired=null,o.isBeingOpened=!1)}).catch(function(O){o.dbOpenError=O;try{D&&D.abort()}catch{}return u===o.openCanceller&&i._close(),nt(O)}).finally(function(){o.openComplete=!0,S()}).then(function(){var O;return x&&(O={},i.tables.forEach(function(E){E.schema.indexes.forEach(function(T){T.name&&(O["idb://".concat(i.name,"/").concat(E.name,"/").concat(T.name)]=new gt(-1/0,[[[]]]))}),O["idb://".concat(i.name,"/").concat(E.name,"/")]=O["idb://".concat(i.name,"/").concat(E.name,"/:dels")]=new gt(-1/0,[[[]]])}),bn(nr).fire(O),Os(O,!0)),i})}function Rs(i){function o(m){return i.next(m)}var l=h(o),u=h(function(m){return i.throw(m)});function h(m){return function(C){var w=m(C),C=w.value;return w.done?C:C&&typeof C.then=="function"?C.then(l,u):d(C)?Promise.all(C).then(l,u):l(C)}}return h(o)()}function zr(i,o,l){for(var u=d(i)?i.slice():[i],h=0;h<l;++h)u.push(o);return u}var Za={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(i){return s(s({},i),{table:function(o){var l=i.table(o),u=l.schema,h={},m=[];function g(x,O,E){var T=sr(x),j=h[T]=h[T]||[],P=x==null?0:typeof x=="string"?1:x.length,I=0<O,I=s(s({},E),{name:I?"".concat(T,"(virtual-from:").concat(E.name,")"):E.name,lowLevelIndex:E,isVirtual:I,keyTail:O,keyLength:P,extractKey:$s(x),unique:!I&&E.unique});return j.push(I),I.isPrimaryKey||m.push(I),1<P&&g(P===2?x[0]:x.slice(0,P-1),O+1,E),j.sort(function(z,L){return z.keyTail-L.keyTail}),I}o=g(u.primaryKey.keyPath,0,u.primaryKey),h[":id"]=[o];for(var w=0,C=u.indexes;w<C.length;w++){var S=C[w];g(S.keyPath,0,S)}function D(x){var O,E=x.query.index;return E.isVirtual?s(s({},x),{query:{index:E.lowLevelIndex,range:(O=x.query.range,E=E.keyTail,{type:O.type===1?2:O.type,lower:zr(O.lower,O.lowerOpen?i.MAX_KEY:i.MIN_KEY,E),lowerOpen:!0,upper:zr(O.upper,O.upperOpen?i.MIN_KEY:i.MAX_KEY,E),upperOpen:!0})}}):x}return s(s({},l),{schema:s(s({},u),{primaryKey:o,indexes:m,getIndexByKeyPath:function(x){return(x=h[sr(x)])&&x[0]}}),count:function(x){return l.count(D(x))},query:function(x){return l.query(D(x))},openCursor:function(x){var O=x.query.index,E=O.keyTail,T=O.isVirtual,j=O.keyLength;return T?l.openCursor(D(x)).then(function(I){return I&&P(I)}):l.openCursor(x);function P(I){return Object.create(I,{continue:{value:function(z){z!=null?I.continue(zr(z,x.reverse?i.MAX_KEY:i.MIN_KEY,E)):x.unique?I.continue(I.key.slice(0,j).concat(x.reverse?i.MIN_KEY:i.MAX_KEY,E)):I.continue()}},continuePrimaryKey:{value:function(z,L){I.continuePrimaryKey(zr(z,i.MAX_KEY,E),L)}},primaryKey:{get:function(){return I.primaryKey}},key:{get:function(){var z=I.key;return j===1?z[0]:z.slice(0,j)}},value:{get:function(){return I.value}}})}}})}})}};function Fs(i,o,l,u){return l=l||{},u=u||"",c(i).forEach(function(h){var m,g,w;$(o,h)?(m=i[h],g=o[h],typeof m=="object"&&typeof g=="object"&&m&&g?(w=k(m))!==k(g)?l[u+h]=o[h]:w==="Object"?Fs(m,g,l,u+h+"."):m!==g&&(l[u+h]=o[h]):m!==g&&(l[u+h]=o[h])):l[u+h]=void 0}),c(o).forEach(function(h){$(i,h)||(l[u+h]=o[h])}),l}function Is(i,o){return o.type==="delete"?o.keys:o.keys||o.values.map(i.extractKey)}var el={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(i){return s(s({},i),{table:function(o){var l=i.table(o),u=l.schema.primaryKey;return s(s({},l),{mutate:function(h){var m=G.trans,g=m.table(o).hook,w=g.deleting,C=g.creating,S=g.updating;switch(h.type){case"add":if(C.fire===ce)break;return m._promise("readwrite",function(){return D(h)},!0);case"put":if(C.fire===ce&&S.fire===ce)break;return m._promise("readwrite",function(){return D(h)},!0);case"delete":if(w.fire===ce)break;return m._promise("readwrite",function(){return D(h)},!0);case"deleteRange":if(w.fire===ce)break;return m._promise("readwrite",function(){return(function x(O,E,T){return l.query({trans:O,values:!1,query:{index:u,range:E},limit:T}).then(function(j){var P=j.result;return D({type:"delete",keys:P,trans:O}).then(function(I){return 0<I.numFailures?Promise.reject(I.failures[0]):P.length<T?{failures:[],numFailures:0,lastResult:void 0}:x(O,s(s({},E),{lower:P[P.length-1],lowerOpen:!0}),T)})})})(h.trans,h.range,1e4)},!0)}return l.mutate(h);function D(x){var O,E,T,j=G.trans,P=x.keys||Is(u,x);if(!P)throw new Error("Keys missing");return(x=x.type==="add"||x.type==="put"?s(s({},x),{keys:P}):s({},x)).type!=="delete"&&(x.values=n([],x.values)),x.keys&&(x.keys=n([],x.keys)),O=l,T=P,((E=x).type==="add"?Promise.resolve([]):O.getMany({trans:E.trans,keys:T,cache:"immutable"})).then(function(I){var z=P.map(function(L,N){var W,Z,K,X=I[N],te={onerror:null,onsuccess:null};return x.type==="delete"?w.fire.call(te,L,X,j):x.type==="add"||X===void 0?(W=C.fire.call(te,L,x.values[N],j),L==null&&W!=null&&(x.keys[N]=L=W,u.outbound||ye(x.values[N],u.keyPath,L))):(W=Fs(X,x.values[N]),(Z=S.fire.call(te,W,L,X,j))&&(K=x.values[N],Object.keys(Z).forEach(function(J){$(K,J)?K[J]=Z[J]:ye(K,J,Z[J])}))),te});return l.mutate(x).then(function(L){for(var N=L.failures,W=L.results,Z=L.numFailures,L=L.lastResult,K=0;K<P.length;++K){var X=(W||P)[K],te=z[K];X==null?te.onerror&&te.onerror(N[K]):te.onsuccess&&te.onsuccess(x.type==="put"&&I[K]?x.values[K]:X)}return{failures:N,results:W,numFailures:Z,lastResult:L}}).catch(function(L){return z.forEach(function(N){return N.onerror&&N.onerror(L)}),Promise.reject(L)})})}}})}})}};function Li(i,o,l){try{if(!o||o.keys.length<i.length)return null;for(var u=[],h=0,m=0;h<o.keys.length&&m<i.length;++h)Ce(o.keys[h],i[m])===0&&(u.push(l?A(o.values[h]):o.values[h]),++m);return u.length===i.length?u:null}catch{return null}}var tl={stack:"dbcore",level:-1,create:function(i){return{table:function(o){var l=i.table(o);return s(s({},l),{getMany:function(u){if(!u.cache)return l.getMany(u);var h=Li(u.keys,u.trans._cache,u.cache==="clone");return h?Q.resolve(h):l.getMany(u).then(function(m){return u.trans._cache={keys:u.keys,values:u.cache==="clone"?A(m):m},m})},mutate:function(u){return u.type!=="add"&&(u.trans._cache=null),l.mutate(u)}})}}}};function Bi(i,o){return i.trans.mode==="readonly"&&!!i.subscr&&!i.trans.explicit&&i.trans.db._options.cache!=="disabled"&&!o.schema.primaryKey.outbound}function Mi(i,o){switch(i){case"query":return o.values&&!o.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var nl={stack:"dbcore",level:0,name:"Observability",create:function(i){var o=i.schema.name,l=new gt(i.MIN_KEY,i.MAX_KEY);return s(s({},i),{transaction:function(u,h,m){if(G.subscr&&h!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(G.querier));return i.transaction(u,h,m)},table:function(u){var h=i.table(u),m=h.schema,g=m.primaryKey,x=m.indexes,w=g.extractKey,C=g.outbound,S=g.autoIncrement&&x.filter(function(E){return E.compound&&E.keyPath.includes(g.keyPath)}),D=s(s({},h),{mutate:function(E){function T(J){return J="idb://".concat(o,"/").concat(u,"/").concat(J),L[J]||(L[J]=new gt)}var j,P,I,z=E.trans,L=E.mutatedParts||(E.mutatedParts={}),N=T(""),W=T(":dels"),Z=E.type,te=E.type==="deleteRange"?[E.range]:E.type==="delete"?[E.keys]:E.values.length<50?[Is(g,E).filter(function(J){return J}),E.values]:[],K=te[0],X=te[1],te=E.trans._cache;return d(K)?(N.addKeys(K),(te=Z==="delete"||K.length===X.length?Li(K,te):null)||W.addKeys(K),(te||X)&&(j=T,P=te,I=X,m.indexes.forEach(function(J){var re=j(J.name||"");function pe(ve){return ve!=null?J.extractKey(ve):null}function we(ve){return J.multiEntry&&d(ve)?ve.forEach(function(Pt){return re.addKey(Pt)}):re.addKey(ve)}(P||I).forEach(function(ve,bt){var he=P&&pe(P[bt]),bt=I&&pe(I[bt]);Ce(he,bt)!==0&&(he!=null&&we(he),bt!=null&&we(bt))})}))):K?(X={from:(X=K.lower)!==null&&X!==void 0?X:i.MIN_KEY,to:(X=K.upper)!==null&&X!==void 0?X:i.MAX_KEY},W.add(X),N.add(X)):(N.add(l),W.add(l),m.indexes.forEach(function(J){return T(J.name).add(l)})),h.mutate(E).then(function(J){return!K||E.type!=="add"&&E.type!=="put"||(N.addKeys(J.results),S&&S.forEach(function(re){for(var pe=E.values.map(function(he){return re.extractKey(he)}),we=re.keyPath.findIndex(function(he){return he===g.keyPath}),ve=0,Pt=J.results.length;ve<Pt;++ve)pe[ve][we]=J.results[ve];T(re.name).addKeys(pe)})),z.mutatedParts=Fr(z.mutatedParts||{},L),J})}}),x=function(T){var j=T.query,T=j.index,j=j.range;return[T,new gt((T=j.lower)!==null&&T!==void 0?T:i.MIN_KEY,(j=j.upper)!==null&&j!==void 0?j:i.MAX_KEY)]},O={get:function(E){return[g,new gt(E.key)]},getMany:function(E){return[g,new gt().addKeys(E.keys)]},count:x,query:x,openCursor:x};return c(O).forEach(function(E){D[E]=function(T){var j=G.subscr,P=!!j,I=Bi(G,h)&&Mi(E,T)?T.obsSet={}:j;if(P){var z=function(X){return X="idb://".concat(o,"/").concat(u,"/").concat(X),I[X]||(I[X]=new gt)},L=z(""),N=z(":dels"),j=O[E](T),P=j[0],j=j[1];if((E==="query"&&P.isPrimaryKey&&!T.values?N:z(P.name||"")).add(j),!P.isPrimaryKey){if(E!=="count"){var W=E==="query"&&C&&T.values&&h.query(s(s({},T),{values:!1}));return h[E].apply(this,arguments).then(function(X){if(E==="query"){if(C&&T.values)return W.then(function(pe){return pe=pe.result,L.addKeys(pe),X});var te=T.values?X.result.map(w):X.result;(T.values?L:N).addKeys(te)}else if(E==="openCursor"){var J=X,re=T.values;return J&&Object.create(J,{key:{get:function(){return N.addKey(J.primaryKey),J.key}},primaryKey:{get:function(){var pe=J.primaryKey;return N.addKey(pe),pe}},value:{get:function(){return re&&L.addKey(J.primaryKey),J.value}}})}return X})}N.add(l)}}return h[E].apply(this,arguments)}}),D}})}};function Ni(i,o,l){if(l.numFailures===0)return o;if(o.type==="deleteRange")return null;var u=o.keys?o.keys.length:"values"in o&&o.values?o.values.length:1;return l.numFailures===u?null:(o=s({},o),d(o.keys)&&(o.keys=o.keys.filter(function(h,m){return!(m in l.failures)})),"values"in o&&d(o.values)&&(o.values=o.values.filter(function(h,m){return!(m in l.failures)})),o)}function zs(i,o){return l=i,((u=o).lower===void 0||(u.lowerOpen?0<Ce(l,u.lower):0<=Ce(l,u.lower)))&&(i=i,(o=o).upper===void 0||(o.upperOpen?Ce(i,o.upper)<0:Ce(i,o.upper)<=0));var l,u}function qi(i,o,O,u,h,m){if(!O||O.length===0)return i;var g=o.query.index,w=g.multiEntry,C=o.query.range,S=u.schema.primaryKey.extractKey,D=g.extractKey,x=(g.lowLevelIndex||g).extractKey,O=O.reduce(function(E,T){var j=E,P=[];if(T.type==="add"||T.type==="put")for(var I=new gt,z=T.values.length-1;0<=z;--z){var L,N=T.values[z],W=S(N);I.hasKey(W)||(L=D(N),(w&&d(L)?L.some(function(J){return zs(J,C)}):zs(L,C))&&(I.addKey(W),P.push(N)))}switch(T.type){case"add":var Z=new gt().addKeys(o.values?E.map(function(re){return S(re)}):E),j=E.concat(o.values?P.filter(function(re){return re=S(re),!Z.hasKey(re)&&(Z.addKey(re),!0)}):P.map(function(re){return S(re)}).filter(function(re){return!Z.hasKey(re)&&(Z.addKey(re),!0)}));break;case"put":var K=new gt().addKeys(T.values.map(function(re){return S(re)}));j=E.filter(function(re){return!K.hasKey(o.values?S(re):re)}).concat(o.values?P:P.map(function(re){return S(re)}));break;case"delete":var X=new gt().addKeys(T.keys);j=E.filter(function(re){return!X.hasKey(o.values?S(re):re)});break;case"deleteRange":var te=T.range;j=E.filter(function(re){return!zs(S(re),te)})}return j},i);return O===i?i:(O.sort(function(E,T){return Ce(x(E),x(T))||Ce(S(E),S(T))}),o.limit&&o.limit<1/0&&(O.length>o.limit?O.length=o.limit:i.length===o.limit&&O.length<o.limit&&(h.dirty=!0)),m?Object.freeze(O):O)}function Ui(i,o){return Ce(i.lower,o.lower)===0&&Ce(i.upper,o.upper)===0&&!!i.lowerOpen==!!o.lowerOpen&&!!i.upperOpen==!!o.upperOpen}function rl(i,o){return(function(l,u,h,m){if(l===void 0)return u!==void 0?-1:0;if(u===void 0)return 1;if((u=Ce(l,u))===0){if(h&&m)return 0;if(h)return 1;if(m)return-1}return u})(i.lower,o.lower,i.lowerOpen,o.lowerOpen)<=0&&0<=(function(l,u,h,m){if(l===void 0)return u!==void 0?1:0;if(u===void 0)return-1;if((u=Ce(l,u))===0){if(h&&m)return 0;if(h)return-1;if(m)return 1}return u})(i.upper,o.upper,i.upperOpen,o.upperOpen)}function sl(i,o,l,u){i.subscribers.add(l),u.addEventListener("abort",function(){var h,m;i.subscribers.delete(l),i.subscribers.size===0&&(h=i,m=o,setTimeout(function(){h.subscribers.size===0&&U(m,h)},3e3))})}var il={stack:"dbcore",level:0,name:"Cache",create:function(i){var o=i.schema.name;return s(s({},i),{transaction:function(l,u,h){var m,g,w=i.transaction(l,u,h);return u==="readwrite"&&(g=(m=new AbortController).signal,h=function(C){return function(){if(m.abort(),u==="readwrite"){for(var S=new Set,D=0,x=l;D<x.length;D++){var O=x[D],E=Sn["idb://".concat(o,"/").concat(O)];if(E){var T=i.table(O),j=E.optimisticOps.filter(function(re){return re.trans===w});if(w._explicit&&C&&w.mutatedParts)for(var P=0,I=Object.values(E.queries.query);P<I.length;P++)for(var z=0,L=(Z=I[P]).slice();z<L.length;z++)Ts((K=L[z]).obsSet,w.mutatedParts)&&(U(Z,K),K.subscribers.forEach(function(re){return S.add(re)}));else if(0<j.length){E.optimisticOps=E.optimisticOps.filter(function(re){return re.trans!==w});for(var N=0,W=Object.values(E.queries.query);N<W.length;N++)for(var Z,K,X,te=0,J=(Z=W[N]).slice();te<J.length;te++)(K=J[te]).res!=null&&w.mutatedParts&&(C&&!K.dirty?(X=Object.isFrozen(K.res),X=qi(K.res,K.req,j,T,K,X),K.dirty?(U(Z,K),K.subscribers.forEach(function(re){return S.add(re)})):X!==K.res&&(K.res=X,K.promise=Q.resolve({result:X}))):(K.dirty&&U(Z,K),K.subscribers.forEach(function(re){return S.add(re)})))}}}S.forEach(function(re){return re()})}}},w.addEventListener("abort",h(!1),{signal:g}),w.addEventListener("error",h(!1),{signal:g}),w.addEventListener("complete",h(!0),{signal:g})),w},table:function(l){var u=i.table(l),h=u.schema.primaryKey;return s(s({},u),{mutate:function(m){var g=G.trans;if(h.outbound||g.db._options.cache==="disabled"||g.explicit||g.idbtrans.mode!=="readwrite")return u.mutate(m);var w=Sn["idb://".concat(o,"/").concat(l)];return w?(g=u.mutate(m),m.type!=="add"&&m.type!=="put"||!(50<=m.values.length||Is(h,m).some(function(C){return C==null}))?(w.optimisticOps.push(m),m.mutatedParts&&Ir(m.mutatedParts),g.then(function(C){0<C.numFailures&&(U(w.optimisticOps,m),(C=Ni(0,m,C))&&w.optimisticOps.push(C),m.mutatedParts&&Ir(m.mutatedParts))}),g.catch(function(){U(w.optimisticOps,m),m.mutatedParts&&Ir(m.mutatedParts)})):g.then(function(C){var S=Ni(0,s(s({},m),{values:m.values.map(function(D,x){var O;return C.failures[x]?D:(D=(O=h.keyPath)!==null&&O!==void 0&&O.includes(".")?A(D):s({},D),ye(D,h.keyPath,C.results[x]),D)})}),C);w.optimisticOps.push(S),queueMicrotask(function(){return m.mutatedParts&&Ir(m.mutatedParts)})}),g):u.mutate(m)},query:function(m){if(!Bi(G,u)||!Mi("query",m))return u.query(m);var g=((S=G.trans)===null||S===void 0?void 0:S.db._options.cache)==="immutable",x=G,w=x.requery,C=x.signal,S=(function(T,j,P,I){var z=Sn["idb://".concat(T,"/").concat(j)];if(!z)return[];if(!(j=z.queries[P]))return[null,!1,z,null];var L=j[(I.query?I.query.index.name:null)||""];if(!L)return[null,!1,z,null];switch(P){case"query":var N=L.find(function(W){return W.req.limit===I.limit&&W.req.values===I.values&&Ui(W.req.query.range,I.query.range)});return N?[N,!0,z,L]:[L.find(function(W){return("limit"in W.req?W.req.limit:1/0)>=I.limit&&(!I.values||W.req.values)&&rl(W.req.query.range,I.query.range)}),!1,z,L];case"count":return N=L.find(function(W){return Ui(W.req.query.range,I.query.range)}),[N,!!N,z,L]}})(o,l,"query",m),D=S[0],x=S[1],O=S[2],E=S[3];return D&&x?D.obsSet=m.obsSet:(x=u.query(m).then(function(T){var j=T.result;if(D&&(D.res=j),g){for(var P=0,I=j.length;P<I;++P)Object.freeze(j[P]);Object.freeze(j)}else T.result=A(j);return T}).catch(function(T){return E&&D&&U(E,D),Promise.reject(T)}),D={obsSet:m.obsSet,promise:x,subscribers:new Set,type:"query",req:m,dirty:!1},E?E.push(D):(E=[D],(O=O||(Sn["idb://".concat(o,"/").concat(l)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[m.query.index.name||""]=E)),sl(D,E,w,C),D.promise.then(function(T){return{result:qi(T.result,m,O?.optimisticOps,u,D,g)}})}})}})}};function Lr(i,o){return new Proxy(i,{get:function(l,u,h){return u==="db"?o:Reflect.get(l,u,h)}})}var sn=(rt.prototype.version=function(i){if(isNaN(i)||i<.1)throw new ee.Type("Given version is not a positive number");if(i=Math.round(10*i)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,i);var o=this._versions,l=o.filter(function(u){return u._cfg.version===i})[0];return l||(l=new this.Version(i),o.push(l),o.sort(Ya),l.stores({}),this._state.autoSchema=!1,l)},rt.prototype._whenReady=function(i){var o=this;return this.idbdb&&(this._state.openComplete||G.letThrough||this._vip)?i():new Q(function(l,u){if(o._state.openComplete)return u(new ee.DatabaseClosed(o._state.dbOpenError));if(!o._state.isBeingOpened){if(!o._state.autoOpen)return void u(new ee.DatabaseClosed);o.open().catch(ce)}o._state.dbReadyPromise.then(l,u)}).then(i)},rt.prototype.use=function(i){var o=i.stack,l=i.create,u=i.level,h=i.name;return h&&this.unuse({stack:o,name:h}),i=this._middlewares[o]||(this._middlewares[o]=[]),i.push({stack:o,create:l,level:u??10,name:h}),i.sort(function(m,g){return m.level-g.level}),this},rt.prototype.unuse=function(i){var o=i.stack,l=i.name,u=i.create;return o&&this._middlewares[o]&&(this._middlewares[o]=this._middlewares[o].filter(function(h){return u?h.create!==u:!!l&&h.name!==l})),this},rt.prototype.open=function(){var i=this;return kn(Xe,function(){return Ja(i)})},rt.prototype._close=function(){var i=this._state,o=Mn.indexOf(this);if(0<=o&&Mn.splice(o,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}i.isBeingOpened||(i.dbReadyPromise=new Q(function(l){i.dbReadyResolve=l}),i.openCanceller=new Q(function(l,u){i.cancelOpen=u}))},rt.prototype.close=function(l){var o=(l===void 0?{disableAutoOpen:!0}:l).disableAutoOpen,l=this._state;o?(l.isBeingOpened&&l.cancelOpen(new ee.DatabaseClosed),this._close(),l.autoOpen=!1,l.dbOpenError=new ee.DatabaseClosed):(this._close(),l.autoOpen=this._options.autoOpen||l.isBeingOpened,l.openComplete=!1,l.dbOpenError=null)},rt.prototype.delete=function(i){var o=this;i===void 0&&(i={disableAutoOpen:!0});var l=0<arguments.length&&typeof arguments[0]!="object",u=this._state;return new Q(function(h,m){function g(){o.close(i);var w=o._deps.indexedDB.deleteDatabase(o.name);w.onsuccess=Be(function(){var C,S,D;C=o._deps,S=o.name,D=C.indexedDB,C=C.IDBKeyRange,_s(D)||S===kr||Ss(D,C).delete(S).catch(ce),h()}),w.onerror=Yt(m),w.onblocked=o._fireOnBlocked}if(l)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");u.isBeingOpened?u.dbReadyPromise.then(g):g()})},rt.prototype.backendDB=function(){return this.idbdb},rt.prototype.isOpen=function(){return this.idbdb!==null},rt.prototype.hasBeenClosed=function(){var i=this._state.dbOpenError;return i&&i.name==="DatabaseClosed"},rt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},rt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(rt.prototype,"tables",{get:function(){var i=this;return c(this._allTables).map(function(o){return i._allTables[o]})},enumerable:!1,configurable:!0}),rt.prototype.transaction=function(){var i=function(o,l,u){var h=arguments.length;if(h<2)throw new ee.InvalidArgument("Too few arguments");for(var m=new Array(h-1);--h;)m[h-1]=arguments[h];return u=m.pop(),[o,wt(m),u]}.apply(this,arguments);return this._transaction.apply(this,i)},rt.prototype._transaction=function(i,o,l){var u=this,h=G.trans;h&&h.db===this&&i.indexOf("!")===-1||(h=null);var m,g,w=i.indexOf("?")!==-1;i=i.replace("!","").replace("?","");try{if(g=o.map(function(S){if(S=S instanceof u.Table?S.name:S,typeof S!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return S}),i=="r"||i===ps)m=ps;else{if(i!="rw"&&i!=ms)throw new ee.InvalidArgument("Invalid transaction mode: "+i);m=ms}if(h){if(h.mode===ps&&m===ms){if(!w)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");h=null}h&&g.forEach(function(S){if(h&&h.storeNames.indexOf(S)===-1){if(!w)throw new ee.SubTransaction("Table "+S+" not included in parent transaction.");h=null}}),w&&h&&!h.active&&(h=null)}}catch(S){return h?h._promise(null,function(D,x){x(S)}):nt(S)}var C=function S(D,x,O,E,T){return Q.resolve().then(function(){var j=G.transless||G,P=D._createTransaction(x,O,D._dbSchema,E);if(P.explicit=!0,j={trans:P,transless:j},E)P.idbtrans=E.idbtrans;else try{P.create(),P.idbtrans._explicit=!0,D._state.PR1398_maxLoop=3}catch(L){return L.name===Ke.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return S(D,x,O,null,T)})):nt(L)}var I,z=it(T);return z&&Bn(),j=Q.follow(function(){var L;(I=T.call(P,P))&&(z?(L=pn.bind(null,null),I.then(L,L)):typeof I.next=="function"&&typeof I.throw=="function"&&(I=Rs(I)))},j),(I&&typeof I.then=="function"?Q.resolve(I).then(function(L){return P.active?L:nt(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):j.then(function(){return I})).then(function(L){return E&&P._resolve(),P._completion.then(function(){return L})}).catch(function(L){return P._reject(L),nt(L)})})}.bind(null,this,m,g,h,l);return h?h._promise(m,C,"lock"):G.trans?kn(G.transless,function(){return u._whenReady(C)}):this._whenReady(C)},rt.prototype.table=function(i){if(!$(this._allTables,i))throw new ee.InvalidTable("Table ".concat(i," does not exist"));return this._allTables[i]},rt);function rt(i,o){var l=this;this._middlewares={},this.verno=0;var u=rt.dependencies;this._options=o=s({addons:rt.addons,autoOpen:!0,indexedDB:u.indexedDB,IDBKeyRange:u.IDBKeyRange,cache:"cloned"},o),this._deps={indexedDB:o.indexedDB,IDBKeyRange:o.IDBKeyRange},u=o.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var h,m,g,w,C,S={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ce,dbReadyPromise:null,cancelOpen:ce,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:o.autoOpen};S.dbReadyPromise=new Q(function(x){S.dbReadyResolve=x}),S.openCanceller=new Q(function(x,O){S.cancelOpen=O}),this._state=S,this.name=i,this.on=Jn(this,"populate","blocked","versionchange","close",{ready:[St,ce]}),this.on.ready.subscribe=ze(this.on.ready.subscribe,function(x){return function(O,E){rt.vip(function(){var T,j=l._state;j.openComplete?(j.dbOpenError||Q.resolve().then(O),E&&x(O)):j.onReadyBeingFired?(j.onReadyBeingFired.push(O),E&&x(O)):(x(O),T=l,E||x(function P(){T.on.ready.unsubscribe(O),T.on.ready.unsubscribe(P)}))})}}),this.Collection=(h=this,Zn(Na.prototype,function(I,P){this.db=h;var E=vi,T=null;if(P)try{E=P()}catch(z){T=z}var j=I._ctx,P=j.table,I=P.hook.reading.fire;this._ctx={table:P,index:j.index,isPrimKey:!j.index||P.schema.primKey.keyPath&&j.index===P.schema.primKey.name,range:E,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:T,or:j.or,valueMapper:I!==me?I:null}})),this.Table=(m=this,Zn(Ci.prototype,function(x,O,E){this.db=m,this._tx=E,this.name=x,this.schema=O,this.hook=m._allTables[x]?m._allTables[x].hook:Jn(null,{creating:[Ye,ce],reading:[Et,me],updating:[Lt,ce],deleting:[dn,ce]})})),this.Transaction=(g=this,Zn(Ha.prototype,function(x,O,E,T,j){var P=this;this.db=g,this.mode=x,this.storeNames=O,this.schema=E,this.chromeTransactionDurability=T,this.idbtrans=null,this.on=Jn(this,"complete","error","abort"),this.parent=j||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new Q(function(I,z){P._resolve=I,P._reject=z}),this._completion.then(function(){P.active=!1,P.on.complete.fire()},function(I){var z=P.active;return P.active=!1,P.on.error.fire(I),P.parent?P.parent._reject(I):z&&P.idbtrans&&P.idbtrans.abort(),nt(I)})})),this.Version=(w=this,Zn(Qa.prototype,function(x){this.db=w,this._cfg={version:x,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(C=this,Zn(Pi.prototype,function(x,O,E){if(this.db=C,this._ctx={table:x,index:O===":id"?null:O,or:E},this._cmp=this._ascending=Ce,this._descending=function(T,j){return Ce(j,T)},this._max=function(T,j){return 0<Ce(T,j)?T:j},this._min=function(T,j){return Ce(T,j)<0?T:j},this._IDBKeyRange=C._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function(x){0<x.newVersion?console.warn("Another connection wants to upgrade database '".concat(l.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(l.name,"'. Closing db now to resume the delete request.")),l.close({disableAutoOpen:!1})}),this.on("blocked",function(x){!x.newVersion||x.newVersion<x.oldVersion?console.warn("Dexie.delete('".concat(l.name,"') was blocked")):console.warn("Upgrade '".concat(l.name,"' blocked by other connection holding version ").concat(x.oldVersion/10))}),this._maxKey=rr(o.IDBKeyRange),this._createTransaction=function(x,O,E,T){return new l.Transaction(x,O,E,l._options.chromeTransactionDurability,T)},this._fireOnBlocked=function(x){l.on("blocked").fire(x),Mn.filter(function(O){return O.name===l.name&&O!==l&&!O._state.vcFired}).map(function(O){return O.on("versionchange").fire(x)})},this.use(tl),this.use(il),this.use(nl),this.use(Za),this.use(el);var D=new Proxy(this,{get:function(x,O,E){if(O==="_vip")return!0;if(O==="table")return function(j){return Lr(l.table(j),D)};var T=Reflect.get(x,O,E);return T instanceof Ci?Lr(T,D):O==="tables"?T.map(function(j){return Lr(j,D)}):O==="_createTransaction"?function(){return Lr(T.apply(this,arguments),D)}:T}});this.vip=D,u.forEach(function(x){return x(l)})}var Br,Rt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",ol=(Ls.prototype.subscribe=function(i,o,l){return this._subscribe(i&&typeof i!="function"?i:{next:i,error:o,complete:l})},Ls.prototype[Rt]=function(){return this},Ls);function Ls(i){this._subscribe=i}try{Br={indexedDB:a.indexedDB||a.mozIndexedDB||a.webkitIndexedDB||a.msIndexedDB,IDBKeyRange:a.IDBKeyRange||a.webkitIDBKeyRange}}catch{Br={indexedDB:null,IDBKeyRange:null}}function Hi(i){var o,l=!1,u=new ol(function(h){var m=it(i),g,w=!1,C={},S={},D={get closed(){return w},unsubscribe:function(){w||(w=!0,g&&g.abort(),x&&bn.storagemutated.unsubscribe(E))}};h.start&&h.start(D);var x=!1,O=function(){return fs(T)},E=function(j){Fr(C,j),Ts(S,C)&&O()},T=function(){var j,P,I;!w&&Br.indexedDB&&(C={},j={},g&&g.abort(),g=new AbortController,I=(function(z){var L=Re();try{m&&Bn();var N=fn(i,z);return N=m?N.finally(pn):N}finally{L&&Ue()}})(P={subscr:j,signal:g.signal,requery:O,querier:i,trans:null}),Promise.resolve(I).then(function(z){l=!0,o=z,w||P.signal.aborted||(C={},(function(L){for(var N in L)if($(L,N))return;return 1})(S=j)||x||(bn(nr,E),x=!0),fs(function(){return!w&&h.next&&h.next(z)}))},function(z){l=!1,["DatabaseClosedError","AbortError"].includes(z?.name)||w||fs(function(){w||h.error&&h.error(z)})}))};return setTimeout(O,0),D});return u.hasValue=function(){return l},u.getValue=function(){return o},u}var _n=sn;function Bs(i){var o=yn;try{yn=!0,bn.storagemutated.fire(i),Os(i,!0)}finally{yn=o}}F(_n,s(s({},Ie),{delete:function(i){return new _n(i,{addons:[]}).delete()},exists:function(i){return new _n(i,{addons:[]}).open().then(function(o){return o.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(i){try{return o=_n.dependencies,l=o.indexedDB,o=o.IDBKeyRange,(_s(l)?Promise.resolve(l.databases()).then(function(u){return u.map(function(h){return h.name}).filter(function(h){return h!==kr})}):Ss(l,o).toCollection().primaryKeys()).then(i)}catch{return nt(new ee.MissingAPI)}var o,l},defineClass:function(){return function(i){p(this,i)}},ignoreTransaction:function(i){return G.trans?kn(G.transless,i):i()},vip:As,async:function(i){return function(){try{var o=Rs(i.apply(this,arguments));return o&&typeof o.then=="function"?o:Q.resolve(o)}catch(l){return nt(l)}}},spawn:function(i,o,l){try{var u=Rs(i.apply(l,o||[]));return u&&typeof u.then=="function"?u:Q.resolve(u)}catch(h){return nt(h)}},currentTransaction:{get:function(){return G.trans||null}},waitFor:function(i,o){return o=Q.resolve(typeof i=="function"?_n.ignoreTransaction(i):i).timeout(o||6e4),G.trans?G.trans.waitFor(o):o},Promise:Q,debug:{get:function(){return Oe},set:function(i){Ne(i)}},derive:V,extend:p,props:F,override:ze,Events:Jn,on:bn,liveQuery:Hi,extendObservabilitySet:Fr,getByKeyPath:_e,setByKeyPath:ye,delByKeyPath:function(i,o){typeof o=="string"?ye(i,o,void 0):"length"in o&&[].map.call(o,function(l){ye(i,l,void 0)})},shallowClone:ft,deepClone:A,getObjectDiff:Fs,cmp:Ce,asap:fe,minKey:-1/0,addons:[],connections:Mn,errnames:Ke,dependencies:Br,cache:Sn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(i){return parseInt(i)}).reduce(function(i,o,l){return i+o/Math.pow(10,2*l)})})),_n.maxKey=rr(_n.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(bn(nr,function(i){yn||(i=new CustomEvent(ws,{detail:i}),yn=!0,dispatchEvent(i),yn=!1)}),addEventListener(ws,function(i){i=i.detail,yn||Bs(i)}));var Un,yn=!1,Wi=function(){};return typeof BroadcastChannel<"u"&&((Wi=function(){(Un=new BroadcastChannel(ws)).onmessage=function(i){return i.data&&Bs(i.data)}})(),typeof Un.unref=="function"&&Un.unref(),bn(nr,function(i){yn||Un.postMessage(i)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(i){if(!sn.disableBfCache&&i.persisted){Oe&&console.debug("Dexie: handling persisted pagehide"),Un?.close();for(var o=0,l=Mn;o<l.length;o++)l[o].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(i){!sn.disableBfCache&&i.persisted&&(Oe&&console.debug("Dexie: handling persisted pageshow"),Wi(),Bs({all:new gt(-1/0,[[]])}))})),Q.rejectionMapper=function(i,o){return!i||i instanceof Me||i instanceof TypeError||i instanceof SyntaxError||!i.name||!Ve[i.name]?i:(o=new Ve[i.name](o||i.message,i),"stack"in i&&M(o,"stack",{get:function(){return this.inner.stack}}),o)},Ne(Oe),s(sn,Object.freeze({__proto__:null,Dexie:sn,liveQuery:Hi,Entity:xi,cmp:Ce,PropModSymbol:rn,PropModification:er,replacePrefix:function(i,o){return new er({replacePrefix:[i,o]})},add:function(i){return new er({add:i})},remove:function(i){return new er({remove:i})},default:sn,RangeSet:gt,mergeRanges:or,rangesOverlap:Ri}),{default:sn}),sn})})(Kr)),Kr.exports}var ql=Nl();const Gs=Bl(ql),io=Symbol.for("Dexie"),Jr=globalThis[io]||(globalThis[io]=Gs);if(Gs.semVer!==Jr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Gs.semVer} and ${Jr.semVer}`);const{liveQuery:Vo,mergeRanges:Hf,rangesOverlap:Wf,RangeSet:Kf,cmp:Vf,Entity:Yf,PropModSymbol:Xf,PropModification:Gf,replacePrefix:Qf,add:Jf,remove:Zf}=Jr,Ul="easydb";let Nr=null;function Hl(){if(Nr)return Nr;const e=new Jr(Ul);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),Nr={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},Nr}function Hn(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(s=>Yo(s,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const s=Vo(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>s.unsubscribe()}}}function Wl(e,t){return{async find(r){const s=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return s.toArray();const n=Object.entries(r);return s.filter(a=>Yo(a,n)).toArray()},async findOne(r){const s=await e.get(r);return s&&s.tableId===t?s:null},async insert(r){const s={...r,tableId:t};return await e.add(s),s},async bulkInsert(r){if(r.length===0)return[];const s=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(s),s},async upsert(r){const s={...r,tableId:t};return await e.put(s),s},async patch(r,s){if(await e.update(r,s)===0)throw new Error(`row patch: no row ${r}`);const a=await e.get(r);if(!a)throw new Error(`row patch: row ${r} vanished after update`);return a},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=Vo(()=>e.where("tableId").equals(t).toArray()).subscribe({next:a=>r(a)});return()=>n.unsubscribe()}}}function Yo(e,t){for(const[r,s]of t)if(e[r]!==s)return!1;return!0}function Kl(e){return{workspaces:Hn(e.workspaces),tables:Hn(e.tables),settings:Hn(e.settings),plugins:Hn(e.plugins),viewTemplates:Hn(e.viewTemplates),viewInstances:Hn(e.viewInstances),rows:t=>Wl(e.rows,t)}}function Vl(e){const{base:t,providers:r,tableById:s,ctx:n}=e,a=new Map;return{...t,rows(c){const d=s(c),p=d?.source;if(p){const v=r.get(p.type);if(v){const _=JSON.stringify(p),$=a.get(c);if($&&$.key===_)return $.coll;const F=v.create(d,n);return a.set(c,{key:_,coll:F}),F}}return a.delete(c),t.rows(c)}}}function Yl(){const e=new Map;return{on(t,r){let s=e.get(t);return s||(s=new Set,e.set(t,s)),s.add(r),()=>{s.delete(r)}},emit(t,r){const s=e.get(t);if(s)for(const n of s)try{n(r)}catch(a){console.error(`[event:${String(t)}] listener threw`,a)}}}}const Zt=Je`
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
`;function xn(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const oo=new WeakSet;function en(e,t){if(oo.has(t))return;oo.add(t);let r=0,s=0,n=0,a=0,c=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",p=>{if(p.target.closest("button, input, textarea, select, a, label"))return;c=!0,r=p.clientX,s=p.clientY;const _=e.getBoundingClientRect();n=_.left,a=_.top,t.setPointerCapture(p.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",p=>{if(!c)return;const v=p.clientX-r,_=p.clientY-s,$=-e.offsetWidth+80,F=window.innerWidth-80,B=0,M=window.innerHeight-40,V=Math.max($,Math.min(F,n+v)),ae=Math.max(B,Math.min(M,a+_));e.style.position="fixed",e.style.left=`${V}px`,e.style.top=`${ae}px`,e.style.margin="0"});const d=p=>{if(c){c=!1;try{t.releasePointerCapture(p.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",d),t.addEventListener("pointercancel",d)}var Xl=Object.defineProperty,Gl=Object.getOwnPropertyDescriptor,Xo=(e,t,r,s)=>{for(var n=s>1?void 0:s?Gl(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Xl(t,r,n),n};let Ft=class extends Ge{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),Ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ft.instance===this&&(Ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&en(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(s=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:s}})}choice(e,t,r="Choose"){return this.enqueue(s=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:s}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return q`
      <dialog @cancel=${this.onCancel} @keydown=${xn}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):Se}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return q`
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
        `;case"prompt":return q`
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
        `;case"choice":return q`
          <div class="dialog-header">
            <h2>${e.title}</h2>
            <div class="header-actions">
              <button class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
            </div>
          </div>
          <div class="dialog-body">
            ${e.message?q`<p class="message">${e.message}</p>`:Se}
            <div class="choices">
              ${e.options.map(t=>q`<button class="choice" @click=${()=>this.closeAndResolve(t)}>
                    ${t}
                  </button>`)}
            </div>
          </div>
        `}}};Ft.instance=null;Ft.styles=[Zt,Je`
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
    `];Xo([H()],Ft.prototype,"current",2);Ft=Xo([ot("host-dialogs")],Ft);const ln=Je`
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
`;var Ql=Object.defineProperty,Jl=Object.getOwnPropertyDescriptor,Go=(e,t,r,s)=>{for(var n=s>1?void 0:s?Jl(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Ql(t,r,n),n};let on=class extends Ge{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),on.instance=this}disconnectedCallback(){super.disconnectedCallback(),on.instance===this&&(on.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const s=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),s)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return q`
      ${this.toasts.map(e=>q`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${ec(e.kind)}</span>
            <span class="body">
              ${e.title?q`<strong>${e.title}</strong>`:""}${Zl(e.message)}
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
    `];Go([H()],on.prototype,"toasts",2);on=Go([ot("toast-host")],on);function Zl(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let s=0,n;for(;(n=t.exec(e))!==null;)n.index>s&&r.push(e.slice(s,n.index)),r.push({url:n[0]}),s=n.index+n[0].length;return s<e.length&&r.push(e.slice(s)),r.length===0?e:r.map(a=>typeof a=="string"?a:q`<a href=${a.url} target="_blank" rel="noopener noreferrer">${a.url}</a>`)}function ec(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function tc(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map}}function Tn(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function Us(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function nc(e){return{registerHeaderButton:t=>Tn(e.headerButtons,t),registerFooterButton:t=>Tn(e.footerButtons,t),registerTableButton:t=>Tn(e.tableButtons,t),registerImporter:t=>Tn(e.importers,t),registerExporter:t=>Tn(e.exporters,t),registerUrlSource:t=>Tn(e.urlSources,t),registerDropHandler:t=>Tn(e.dropHandlers,t),registerCellRenderer:(t,r)=>Us(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>Us(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>Us(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},dialogs:rc}}const rc={async alert(e,t){const r=Ft.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=Ft.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const s=Ft.instance;return s?s.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const s=Ft.instance;if(s)return s.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=on.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}};function sc(e){const t=nc(e.registries),r=e.registries.rowSources,s=a=>(r.set(a.type,a),()=>{r.get(a.type)===a&&r.delete(a.type)}),n={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:n,registerRowSource:s,backend:{fetch:async(a,c)=>{const d=await ic(e.store),p=c?.body instanceof ArrayBuffer;if(!d||p)return globalThis.fetch(a,c);const v={url:a};return c?.method&&(v.method=c.method),c?.headers&&(v.headers=c.headers),typeof c?.body=="string"&&(v.body=c.body),globalThis.fetch(`${d}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)})},async saveFile(a,c,d){const p=typeof c=="string"?new Blob([c],{type:d??"application/octet-stream"}):c,v=URL.createObjectURL(p),_=document.createElement("a");_.href=v,_.download=a,_.rel="noopener",document.body.appendChild(_),_.click(),_.remove(),setTimeout(()=>URL.revokeObjectURL(v),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function ic(e){const r=(await e.settings.findOne("server-sync:url"))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}const oc={name:"csv-import",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"easyDBAccess built-ins"};function ac(e){e.ui.registerImporter(lc),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const s=vc(t).filter(xc);if(s.length===0)return!1;t.preventDefault();for(const n of s)await cc(e,n);return!0})}const lc={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return rs(t)}};async function cc(e,t){const r=t.name.replace(/\.csv$/i,"")||"imported";await ui(e,await t.text(),r)}async function ui(e,t,r,s={}){const n=e.workspaceId();if(!n)throw new Error("csv-import: no active workspace");const a=(r||"imported").replace(/\.csv$/i,"")||"imported",c=(await e.store.tables.find()).find($=>$.workspaceId===n&&$.name===a);let d,p;if(c){const $=await e.ui.dialogs.choice(`A table named "${a}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!$)return;$==="Append rows"?(p="append",d=c.id):$==="Overwrite rows"?(p="overwrite",d=c.id):(p="new",d=qr())}else p="new",d=qr();e.events.emit("import:before",{source:"csv",tableId:d});let v;if(p==="new"){const $=rs(t);let F=$.columns,B=$.rows;if(s.editColumns){const V=await s.editColumns(F);if(V===null)return;B=$c(B,F,V),F=V}const M=c?`${a} (${Date.now().toString(36)})`:a;await e.store.tables.insert({id:d,workspaceId:n,name:M,code:Qs(M),columns:F,view:"table",updatedAt:Date.now()}),v=B.map(V=>({id:qr(),tableId:d,data:V,updatedAt:Date.now()}))}else{const $=c.columns;if(v=Qo(t).rows.map(B=>{const M={};for(let V=0;V<$.length;V++){const ae=$[V];M[ae.field]=ea(B[V]??"",ae.type)}return{id:qr(),tableId:d,data:M,updatedAt:Date.now()}}),p==="overwrite"){const B=e.store.rows(d),M=await B.find();await B.bulkRemove(M.map(V=>V.id))}}await e.store.rows(d).bulkInsert(v),e.events.emit("import:after",{source:"csv",tableId:d,rowCount:v.length})}function Qo(e){const t=e.replace(/﻿/,""),r=Jo(t),s=Zo(t,r);if(s.length===0)return{header:[],rows:[]};const n=s[0],a=s.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:n,rows:a}}function rs(e){const t=e.replace(/﻿/,""),r=Jo(t),s=Zo(t,r);if(s.length===0)return{columns:[],rows:[]};const n=s[0],a=s.slice(1).filter(F=>!(F.length===1&&F[0]==="")),c=n.map((F,B)=>hc(F,B)),d=na(c.map(F=>F.field)),p=a.map(F=>{const B={};for(let M=0;M<d.length;M++)B[d[M]]=F[M]??"";return B}),v=c.map((F,B)=>F.type?F.type:fc(p.map(M=>M[d[B]]??"").filter(M=>M.length>0))),_=c.map((F,B)=>{const M=v[B]??"string",V={field:d[B],label:F.label,type:M},ae=dc(M),ge=F.renderer??ae;return ge&&(V.renderer=ge),F.default!==void 0&&(V.default=F.default),F.max!=null&&(V.max=F.max),F.unique&&(V.unique=!0),F.notnull&&(V.notnull=!0),F.hidden&&(V.hidden=!0),V}),$=p.map(F=>{const B={};for(let M=0;M<d.length;M++){const V=d[M],ae=v[M]??"string";B[V]=ea(F[V]??"",ae)}return B});return{columns:_,rows:$}}const uc=new Set(["string","number","boolean","date","datetime"]),ao={color:"color",image:"image"};function dc(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function hc(e,t){const r=e.trim();if(!r.includes(":"))return{field:Qs(r||`col_${t+1}`),label:r||`Column ${t+1}`};const s=r.split(":"),n=Qs(s[0]||`col_${t+1}`),a=(s[1]??s[0]??"").trim()||n,c={field:n,label:a},d=(s[2]??"").trim();d&&(uc.has(d)?c.type=d:ao[d]&&(c.type="string",c.renderer=ao[d]));const p=(s[3]??"").trim();p&&(c.default=p);const v=(s[4]??"").trim();if(v){const $=Number(v);Number.isFinite($)&&$>0&&(c.max=$)}const _=(s[5]??"").toLowerCase();return _.includes("u")&&(c.unique=!0),_.includes("n")&&(c.notnull=!0),_.includes("h")&&(c.hidden=!0),c}function Jo(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const a of t)a in r&&(r[a]+=1);let s=",",n=-1;for(const a of[",",";","	"])(r[a]??0)>n&&(s=a,n=r[a]??0);return s}function Zo(e,t){const r=[];let s=[],n="",a=!1;for(let c=0;c<e.length;c++){const d=e[c];a?d==='"'?e[c+1]==='"'?(n+='"',c++):a=!1:n+=d:d==='"'?a=!0:d===t?(s.push(n),n=""):d===`
`||d==="\r"?(d==="\r"&&e[c+1]===`
`&&c++,s.push(n),r.push(s),s=[],n=""):n+=d}return(n.length>0||s.length>0)&&(s.push(n),r.push(s)),r}function fc(e){return e.length===0?"string":e.every(mc)?"boolean":e.every(gc)?"number":e.every(yc)?"datetime":e.every(bc)?"date":"string"}const pc=/^(true|false|yes|no|0|1)$/i;function mc(e){return pc.test(e.trim())}function gc(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function bc(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function yc(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function ea(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const s=Number(r);return Number.isFinite(s)?s:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return ta(r);case"datetime":return wc(r);default:return e}}function ta(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let s=parseInt(t[1],10),n=parseInt(t[2],10);const a=t[3];let c=parseInt(a,10);a.length===2&&(c+=2e3);let d,p;return s>12?(d=s,p=n):n>12?(p=s,d=n):(d=s,p=n),`${c.toString().padStart(4,"0")}-${p.toString().padStart(2,"0")}-${d.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function wc(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const s=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(s)return`${ta(`${s[1]}/${s[2]}/${s[3]}`)}T${s[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const a=n.toISOString();return`${a.slice(0,10)}T${a.slice(11,16)}`}return e}function vc(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const s of Array.from(t.items))if(s.kind==="file"){const n=s.getAsFile();n&&r.push(n)}return r}return[]}function xc(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function na(e){const t=new Map,r=new Set,s=[];for(const n of e){let a=n,c=t.get(n)??0;for(;r.has(a);)c+=1,a=`${n}_${c+1}`;t.set(n,c),r.add(a),s.push(a)}return s}function $c(e,t,r){return e.map(s=>{const n={};for(let a=0;a<t.length;a++)n[r[a].field]=s[t[a].field];return n})}function Qs(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function qr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const kc=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:na,importCsvText:ui,init:ac,meta:oc,parseCsv:rs,parseCsvRaw:Qo},Symbol.toStringTag,{value:"Module"})),Cc={name:"csv-export",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"easyDBAccess built-ins"},Ec={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return di(e,t)}};function Sc(e){e.ui.registerExporter(Ec),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const s=await t.store.tables.findOne(r.tableId);if(!s)return;const n=await t.store.rows(s.id).find(),a=di(s,n);await t.backend.saveFile(`${s.code||s.name||"table"}.csv`,a,"text/csv")}})}function di(e,t){const r=e.columns.map(a=>a.field),s=e.columns.map(a=>lo(a.label??a.field)),n=t.map(a=>r.map(c=>lo(_c(a.data[c]))).join(","));return[s.join(","),...n].join(`\r
`)}function _c(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function lo(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const Ac=Object.freeze(Object.defineProperty({__proto__:null,init:Sc,meta:Cc,serializeCsv:di},Symbol.toStringTag,{value:"Module"}));var Pc=Object.defineProperty,Tc=Object.getOwnPropertyDescriptor,Xn=(e,t,r,s)=>{for(var n=s>1?void 0:s?Tc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Pc(t,r,n),n};function Js(e,t={}){return(Tt.instance??Dc()).open(e,t)}function Dc(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function jc(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Tt=class extends Ge{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,s)=>r?s:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Tt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Tt.instance===this&&(Tt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(()=>!0),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return q`
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
            ${this.message?q`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,r)=>q`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${r}`}
                      .checked=${this.selected[r]??!1}
                      @change=${()=>this.toggle(r)}
                    />
                    <label for=${`tsel-${r}`}>
                      <span class="name">${t.name}</span>
                      <span class="size">${jc(t.size)}</span>
                      ${t.detail?q`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};Tt.instance=null;Tt.styles=[Zt,Je`
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
    `];Xn([H()],Tt.prototype,"items",2);Xn([H()],Tt.prototype,"selected",2);Xn([H()],Tt.prototype,"heading",2);Xn([H()],Tt.prototype,"message",2);Xn([H()],Tt.prototype,"confirmLabel",2);Tt=Xn([ot("table-select-dialog")],Tt);const Oc={name:"json-import",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"easyDBAccess built-ins"};function Rc(e){e.ui.registerImporter(Fc),e.ui.registerDropHandler(async t=>{const s=qc(t).filter(Uc);if(s.length===0)return!1;t.preventDefault();for(const n of s)await Ic(e,n);return!0})}const Fc={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=ss(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function Ic(e,t){await hi(e,await t.text(),t.name)}async function hi(e,t,r){const s=e.workspaceId();if(!s)throw new Error("json-import: no active workspace");let n;try{n=JSON.parse(t)}catch(B){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${B.message}`)});return}const a=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=ss(n,a);if(c.length===0)return;let d=c;if(c.length>1){const B=await Js(c.map(M=>({name:M.name,size:M.rows.length})),{title:"Import tables",message:`"${r}" contains ${c.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!B)return;d=B.map(M=>c[M])}const p=(await e.store.tables.find()).filter(B=>B.workspaceId===s),v=new Set(d.map(B=>B.name)),_=p.filter(B=>v.has(B.name));let $;if(_.length===0&&d.length===1)$="append-new";else{const B=_.length>0?[`Overwrite matching (${_.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],M=await e.ui.dialogs.choice(`Importing ${d.length} table${d.length===1?"":"s"} from "${r}".${_.length>0?`

${_.length} table${_.length===1?"":"s"} share a name with existing data.`:""}`,B,"JSON import");if(!M)return;M.startsWith("Overwrite matching")?$="overwrite-matching":M==="Replace entire workspace"?$="replace-workspace":$="append-new"}if($==="replace-workspace")for(const B of p){const M=e.store.rows(B.id),V=await M.find();await M.bulkRemove(V.map(ae=>ae.id)),await e.store.tables.remove(B.id)}const F=new Map(p.map(B=>[B.name,B]));for(const B of d){let M;const V=$==="overwrite-matching"?F.get(B.name):void 0;if(V){M=V.id;const be=e.store.rows(M),ze=await be.find();await be.bulkRemove(ze.map(se=>se.id)),await e.store.tables.patch(M,{columns:B.columns,...B.windowGeometry?{windowGeometry:B.windowGeometry}:{},...B.sortColumn?{sortColumn:B.sortColumn,sortAsc:B.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},updatedAt:Date.now()})}else M=fo(),e.events.emit("import:before",{source:"json",tableId:M}),await e.store.tables.insert({id:M,workspaceId:s,name:B.name,code:Hc(B.name),columns:B.columns,view:"table",...B.windowGeometry?{windowGeometry:B.windowGeometry}:{},...B.sortColumn?{sortColumn:B.sortColumn,sortAsc:B.sortAsc??!0}:{},updatedAt:Date.now()});const ae=e.store.rows(M),ge=B.rows.map(be=>({id:fo(),tableId:M,data:be,updatedAt:Date.now()}));await ae.bulkInsert(ge),e.events.emit("import:after",{source:"json",tableId:M,rowCount:B.rows.length})}}function ss(e,t){if(Mt(e)&&co(e))return uo(e);if(Mt(e)&&Array.isArray(e.tables)){const r=e,s=[];for(const n of r.tables){if(Lc(n)){const a=n,c=Mt(a.windowGeometry)?a.windowGeometry:void 0,d=typeof a.sortColumn=="string"?a.sortColumn:void 0,p=typeof a.sortAsc=="boolean"?a.sortAsc:void 0;s.push({name:String(n.name),columns:n.columns.map(Bc),rows:Array.isArray(n.rows)?n.rows.filter(Mt):[],...c?{windowGeometry:c}:{},...d?{sortColumn:d,sortAsc:p??!0}:{}});continue}Mt(n)&&co(n)&&s.push(...uo(n))}return s}if(Array.isArray(e)){const r=e.filter(Mt);return r.length===0?[]:[{name:t,...ho(r)}]}return Mt(e)?[{name:t,...ho([e])}]:[]}function co(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!Mt(r))continue;const s=r;if(Array.isArray(s.dataArray)&&Array.isArray(s.columns))return!0}return!1}function uo(e){const t=[];for(const[r,s]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!Mt(s))continue;const n=s;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const a=r.replace(/\.table\.json$/,""),c=n.columns.map(_=>zc(_)),d=c.map(_=>_.field),p=n.dataArray.filter(_=>Array.isArray(_)).map(_=>{const $={};for(let F=0;F<d.length;F++)$[d[F]]=_[F];return $}),v={name:a,columns:c,rows:p};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const _=n.elementRect;v.windowGeometry={x:_.x,y:_.y,w:_.width??600,h:_.height??400,z:_.zIndex??100,minimized:!!_.minimized,maximized:!!_.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<d.length&&(v.sortColumn=d[n.sortColumn],v.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(v)}return t}function zc(e){const t=String(e.field??"col"),r=String(e.name??t),s=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:s};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function Lc(e){return Mt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Bc(e){if(!Mt(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let s=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(s==="color"||s==="image")&&(n=n??s,s="string");const a={field:r,label:String(t.label??r),type:s};return n&&(a.renderer=n),typeof t.script=="string"&&(a.script=t.script),a}function ho(e){const t=new Set;for(const n of e)for(const a of Object.keys(n))t.add(a);return{columns:Array.from(t).map(n=>({field:n,label:n,type:Mc(e.map(a=>a[n]))})),rows:e}}function Mc(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Nc(r))?"date":"string"}function Nc(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function Mt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function qc(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const s of Array.from(t.items))if(s.kind==="file"){const n=s.getAsFile();n&&r.push(n)}return r}return[]}function Uc(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function Hc(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function fo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Wc=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:hi,init:Rc,meta:Oc,parsedToTables:ss},Symbol.toStringTag,{value:"Module"}));class Gt extends Error{constructor(t,r){const s=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(s),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function Ln(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),s={};for(const[d,p]of t.searchParams)s[d]=p;let n,a=null,c=null;if(r.length>=2){c=decodeURIComponent(r[r.length-1]),a=decodeURIComponent(r[r.length-2]);const d=r.slice(0,r.length-2).join("/");n=t.origin+(d?"/"+d:"")}else r.length===1&&(a=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:a,table:c,query:s}}function Zr(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[s,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(s,String(n));return r.toString()}function Kc(e){const t=e?.next_url??null,r=e?.next,s=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],a=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(d=>Array.isArray(d)&&a?Object.fromEntries(a.map((p,v)=>[p,d[v]])):d),nextUrl:t,nextToken:s,hasMore:t!=null||s!=null,truncated:e?.truncated===!0}}function Vc(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function Yc(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],s={},n=e?.column_details;if(Array.isArray(n))for(const d of n)s[d.column??d.name]=d;else n&&typeof n=="object"&&Object.assign(s,n);for(const d of r)d in s||(s[d]={});return{columns:(r.length?r:Object.keys(s)).map(d=>{const p=s[d]||{},v=p.is_pk===!0||p.is_pk===1||t.includes(d),_={field:d,label:ra(d),type:Vc(p.sqlite_type??p.type,d)};return(p.notnull===!0||p.notnull===1||v)&&(_.notnull=!0),v&&(_.unique=!0),p.hidden===!0&&(_.hidden=!0),_}),pks:t}}function ra(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function fi(e){const t=[],r=new Set;for(const s of e)for(const n of Object.keys(s))r.has(n)||(r.add(n),t.push(n));return t.map(s=>({field:s,label:ra(s),type:Xc(e.map(n=>n[s]))}))}function Xc(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Gc(r))?"datetime":"string"}function Gc(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Qc(e){const t=new TextEncoder().encode(String(e));let r="";for(const s of t){const n=String.fromCharCode(s);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+s.toString(16).toUpperCase().padStart(2,"0")}return r}function Jc(e,t){return!t||t.length===0?null:t.map(r=>Qc(e[r])).join(",")}function Zc(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const s of t){if(typeof s=="string"){r.push(s);continue}if(s&&typeof s=="object"&&typeof s.name=="string"){if(s.name==="_memory")continue;r.push(typeof s.route=="string"&&s.route?s.route:s.name)}}return r}function eu(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],s=[];for(const n of r){if(typeof n=="string"){s.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&s.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return s}async function gr(e,t){let r;try{r=await e(t)}catch(n){const a=n?.message||"network error";throw new Gt({error:`Couldn't reach ${t} (${a}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Gt(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const s=await r.json();if(s&&s.ok===!1)throw new Gt(s,r.status);return s}async function sa(e,t){return Zc(await gr(e,`${t}/-/databases.json`))}async function po(e,t,r){return eu(await gr(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function ia(e,t){const r=Zr(t,{_extra:"columns"}),s=await gr(e,r),{columns:n,pks:a}=Yc(s),c=!!s&&s.column_details!=null;return{columns:n,pks:a,count:s?.count??null,typed:c,raw:s}}function oa(e,t){if(t.length===0)return e;const r=new Map(fi(t).map(s=>[s.field,s.type]));return e.map(s=>{if(s.type!=="string")return s;const n=r.get(s.field);return n&&n!=="string"?{...s,type:n}:s})}async function is(e,t,r={}){const s=r.maxRows??1e4,a={_size:r.pageSize??1e3,...r.extraParams||{}};let c=Zr(t,a);const d=[];let p=!1,v=!1,_=0;for(;c;){const $=await gr(e,c),F=Kc($);d.push(...F.rows),p=p||F.truncated,_+=1,r.onProgress?.(d.length);const B=F.nextUrl!=null?F.nextUrl:F.nextToken!=null?Zr(t,{_next:F.nextToken}):null;B&&d.length<s&&F.rows.length>0?c=B:(v=B!=null&&F.rows.length>0,c=null)}return{rows:d,truncated:p,hasMore:v,pages:_}}function tu(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function aa(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function la(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function os(e,t,r,s){let n;try{n=await e(t,{method:"POST",headers:tu(s),body:JSON.stringify(r)})}catch(c){throw new Gt({error:`Couldn't reach ${t} (${c?.message||"network error"}).`},0)}if(n&&n.ok===!1){let c=null;try{c=await n.json()}catch{}throw new Gt(c&&typeof c=="object"?c:{error:`HTTP ${n.status} for ${t}`},n.status)}const a=await n.json();if(a&&a.ok===!1)throw new Gt(a,n.status);return a}async function mo(e,t,r,s={}){const n=await os(e,aa(t,"insert"),{rows:r,return:!0},s.token);return Array.isArray(n?.rows)?n.rows:[]}async function nu(e,t,r,s,n={}){const a=await os(e,la(t,r,"update"),{update:s,return:!0},n.token);return a&&typeof a.row=="object"&&a.row?a.row:Array.isArray(a?.rows)&&a.rows[0]?a.rows[0]:null}async function go(e,t,r,s={}){await os(e,la(t,r,"delete"),{},s.token)}async function ru(e,t,r,s={}){const n=await os(e,aa(t,"upsert"),{rows:r,return:!0},s.token);return Array.isArray(n?.rows)?n.rows:[]}async function su(e,t){const r=Zr(t,{_extra:"primary_keys"}),s=await gr(e,r);return Array.isArray(s?.primary_keys)?s.primary_keys:[]}async function ca(e,t,r={}){const s=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,s);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const a=await n.json(),c=a?.datasette?.version??a?.version??null;let d=null;try{d=(await(await e(`${t}/-/actor.json`,s)).json())?.actor??null}catch{}return{reachable:!0,version:c,actor:d,writable:!!(r.token&&d)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function as(e,t){return t?(r,s)=>{const n=(s??{}).headers??{};return e(r,{...s??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ua=Symbol.for(""),iu=e=>{if(e?.r===ua)return e?._$litStatic$},ou=e=>({_$litStatic$:e,r:ua}),bo=new Map,au=e=>(t,...r)=>{const s=r.length;let n,a;const c=[],d=[];let p,v=0,_=!1;for(;v<s;){for(p=t[v];v<s&&(a=r[v],(n=iu(a))!==void 0);)p+=n+t[++v],_=!0;v!==s&&d.push(a),c.push(p),v++}if(v===s&&c.push(t[s]),_){const $=c.join("$$lit$$");(t=bo.get($))===void 0&&(c.raw=c,bo.set($,t=c)),r=d}return e(t,...r)},lu=au(q);var cu=Object.defineProperty,uu=Object.getOwnPropertyDescriptor,ls=(e,t,r,s)=>{for(var n=s>1?void 0:s?uu(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&cu(t,r,n),n};let Nt=class extends Ge{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r){return this.values=t,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(s=>{this.resolveFn=s,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),Nt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Nt.instance===this&&(Nt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(r=>r.value.toLowerCase().includes(e));return q`
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
      ${t.length===0?q`<div class="empty">No matching values.</div>`:q`<ul>
            ${t.slice(0,500).map(r=>q`
                <li
                  class=${r.value===this.current?"selected":""}
                  @click=${()=>this.close(r.value)}
                >
                  <span class="label">${r.value||q`<em>(empty)</em>`}</span>
                  <span class="count">${r.count}</span>
                </li>
              `)}
          </ul>`}
      ${this.values.length>500?q`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
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
    `];ls([Ut({type:Array})],Nt.prototype,"values",2);ls([Ut({type:String})],Nt.prototype,"current",2);ls([H()],Nt.prototype,"search",2);Nt=ls([ot("filter-popover")],Nt);var du=Object.defineProperty,hu=Object.getOwnPropertyDescriptor,Ht=(e,t,r,s)=>{for(var n=s>1?void 0:s?hu(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&du(t,r,n),n};let jt=class extends Ge{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const s of this.options)if(s.toLowerCase().includes(t)&&(r.push(s),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return q`
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
        ${this.value?q`<button
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
      ${this.open?q`<ul class="dropdown" style=${t}>
            ${e.length===0?q`<li class="empty">No matching values.</li>`:e.map((r,s)=>q`
                    <li
                      class=${s===this.highlightIdx?"highlighted":""}
                      @mousedown=${n=>n.preventDefault()}
                      @click=${()=>this.onPick(r)}
                    >
                      ${r}
                    </li>
                  `)}
          </ul>`:Se}
    `}};jt.styles=Je`
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
  `;Ht([Ut({type:String})],jt.prototype,"value",2);Ht([Ut({type:Array})],jt.prototype,"options",2);Ht([Ut({type:String})],jt.prototype,"placeholder",2);Ht([H()],jt.prototype,"open",2);Ht([H()],jt.prototype,"highlightIdx",2);Ht([H()],jt.prototype,"dropTop",2);Ht([H()],jt.prototype,"dropLeft",2);Ht([H()],jt.prototype,"dropMinWidth",2);Ht([H()],jt.prototype,"editing",2);Ht([Yn("input")],jt.prototype,"inputEl",2);jt=Ht([ot("filter-combobox")],jt);var fu=Object.defineProperty,pu=Object.getOwnPropertyDescriptor,ct=(e,t,r,s)=>{for(var n=s>1?void 0:s?pu(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&fu(t,r,n),n};const mu=200;let st=class extends Ge{constructor(){super(...arguments),this.tableId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;t.tableId===this.tableId&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.()}async updated(e){e.has("tableId")&&this.tableId&&(this.unsubscribe?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells()}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",gu(t))}async bind(){if(!this.tableId)return;const e=await Ee(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const a=n.find(c=>c.id===this.tableId);a&&this.applyTable(a)}),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const s=window.setTimeout(()=>this.loading=!0,mu);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(s),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filters={...e.filters??{}}}async setCell(e,t,r){const s=await Ee();await this.commitCell(s,e,t,r)}async commitCell(e,t,r,s){const n=this.columns.find(a=>a.field===r);if(n){const a=bu(n,s,this.rows,t.id);if(a){await e.api.ui.dialogs.alert(a,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:s},updatedAt:Date.now()})}catch(a){await e.api.ui.dialogs.alert(a?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}renderCell(e,t){const r=e.data[t.field],s=t.renderer,n=s?this.cellRenderers?.get(s):void 0;if(n){const a=ou(n);return lu`<${a}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        @change=${c=>this.setCell(e,t.field,c.detail.value)}
      ></${a}>`}switch(t.type){case"boolean":return q`<input
          type="checkbox"
          .checked=${r===!0||r==="true"||r===1||r==="1"}
          @change=${c=>this.setCell(e,t.field,c.target.checked)}
        />`;case"date":return q`<input
          type="date"
          .value=${yu(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"datetime":return q`<input
          type="datetime-local"
          .value=${wu(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"number":return q`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${a=>{const c=a.target.value;this.setCell(e,t.field,c===""?null:Number(c))}}
        />`;default:return q`<input
          type="text"
          .value=${String(r??"")}
          @change=${a=>this.setCell(e,t.field,a.target.value)}
        />`}}async deleteRow(e){const t=await Ee();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await Ee(),s=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};await r.store.tables.patch(this.tableId,s)}filteredRows(){const e=Object.entries(this.filters).filter(([,s])=>s&&s.trim().length>0),t=this.globalQuery.trim().toLowerCase(),r=this.localQuery.trim().toLowerCase();return e.length===0&&t.length===0&&r.length===0?this.rows:this.rows.filter(s=>{const n=a=>Object.values(s.data).some(c=>c!=null&&String(c).toLowerCase().includes(a));return t.length>0&&!n(t)||r.length>0&&!n(r)?!1:e.every(([a,c])=>String(s.data[a]??"").toLowerCase().includes(c.toLowerCase()))})}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,s=this.columns.find(c=>c.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,a=[...e];return a.sort((c,d)=>{const p=c.data[t],v=d.data[t],_=B=>B==null?0:B===""?1:2,$=_(p),F=_(v);return $!==2||F!==2?($-F)*n:vu(p,v,s)*n}),a}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,s=Nt.instance;if(!s)return;const n=new Map;for(const d of this.rowsFacetedFor(t)){const p=d.data[t];if(p==null)continue;const v=String(p);n.set(v,(n.get(v)??0)+1)}const a=[...n.entries()].map(([d,p])=>({value:d,count:p})).sort((d,p)=>p.count-d.count||d.value.localeCompare(p.value)),c=await s.open(r.getBoundingClientRect(),a,this.filters[t]??"");c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>this.saveFilters(),250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,s])=>s&&s.trim().length>0&&r!==e).map(([r,s])=>[r,s.trim().toLowerCase()]);return t.length===0?this.rows:this.rows.filter(r=>t.every(([s,n])=>String(r.data[s]??"").toLowerCase().includes(n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,s=500;for(const n of this.visibleColumns){let a=!0;for(const d of t){const p=d.data[n.field];if(p==null)continue;if((typeof p=="string"?p:String(p)).length>=r){a=!1;break}}if(!a)continue;const c=new Set;for(const d of this.rowsFacetedFor(n.field)){const p=d.data[n.field];if(p==null||p==="")continue;const v=typeof p=="string"?p:String(p);if(!(v.length>=r)&&(c.add(v),c.size>=s))break}e.set(n.field,[...c].sort())}return e}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const s=r.offsetWidth;this.resizing={field:t,startX:e.clientX,startW:s};const n=c=>{if(!this.resizing)return;const d=c.clientX-this.resizing.startX,p=Math.max(40,this.resizing.startW+d);this.columns=this.columns.map(v=>v.field===this.resizing.field?{...v,width:p}:v)},a=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",a);const c=this.resizing?.field;if(this.resizing=null,!c)return;await(await Ee()).store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",a)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const s=r.getBoundingClientRect(),n=e.clientX<s.left+s.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,s=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!s)return;const n=[...this.columns],a=n.findIndex(v=>v.field===r);if(a<0)return;const[c]=n.splice(a,1);let d=n.findIndex(v=>v.field===t);if(d<0){n.splice(a,0,c);return}s==="after"&&(d+=1),n.splice(d,0,c),await(await Ee()).store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await Ee(),t={};for(const[s,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[s]=n);const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,s=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,s+r);return{slice:e.slice(s,n),topPad:s*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows(),t=this.visibleColumns,{slice:r,topPad:s,bottomPad:n}=this.virtualSlice(e),a=this.computeFilterSuggestions(),c=this.externalLoading?this.externalProgress:null;return q`
      ${this.loading||this.externalLoading?q`<div
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
          ${t.map(d=>q`<col style=${d.width!=null?`width: ${d.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(d=>{const p=this.sortColumn===d.field&&this.sortDir,v=p==="asc"?"▲":p==="desc"?"▼":"⇅",_=`t-${d.type}`,$=this.dragSourceField===d.field,F=this.dropTargetField===d.field,B=F&&this.dropEdge==="before"?" drop-before":F&&this.dropEdge==="after"?" drop-after":"";return q`
                <th
                  class=${`${_}${p?" sorted":""}${$?" drag-source":""}${B}`}
                  title=${`${d.field} — click to sort, drag to reorder`}
                  draggable="true"
                  @click=${()=>this.toggleSort(d.field)}
                  @dragstart=${M=>this.onColDragStart(M,d.field)}
                  @dragover=${M=>this.onColDragOver(M,d.field,M.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(d.field)}
                  @drop=${M=>this.onColDrop(M,d.field)}
                  @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                >
                  ${d.label}<span class="sort-icon">${v}</span>
                  <button
                    class=${`funnel${this.filters[d.field]?" active":""}`}
                    title="Filter by value"
                    @click=${M=>this.openFilterPicker(M,d.field)}
                  >
                    <span class="mi sm">filter_list</span>
                  </button>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${M=>M.stopPropagation()}
                    @pointerdown=${M=>this.onResizeStart(M,d.field,M.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:2rem"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(d=>{const p=a.get(d.field)??[];return q`
                <th>
                  <filter-combobox
                    .value=${this.filters[d.field]??""}
                    .options=${p}
                    placeholder="filter…"
                    @filter-change=${v=>this.onFilterInput(d.field,v.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${s>0?q`<tr class="spacer" style=${`height:${s}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${r.map(d=>q`
              <tr>
                ${t.map(p=>q`<td class=${`t-${p.type}${p.renderer?` r-${p.renderer}`:""}`}>
                      ${this.renderCell(d,p)}
                    </td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(d.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?q`<tr class="spacer" style=${`height:${n}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};st.styles=[ln,Je`
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
    `];ct([Ut({type:String})],st.prototype,"tableId",2);ct([H()],st.prototype,"columns",2);ct([H()],st.prototype,"rows",2);ct([H()],st.prototype,"sortColumn",2);ct([H()],st.prototype,"sortDir",2);ct([H()],st.prototype,"filters",2);ct([H()],st.prototype,"globalQuery",2);ct([H()],st.prototype,"localQuery",2);ct([H()],st.prototype,"dragSourceField",2);ct([H()],st.prototype,"dropTargetField",2);ct([H()],st.prototype,"dropEdge",2);ct([H()],st.prototype,"resizing",2);ct([H()],st.prototype,"cellRenderers",2);ct([H()],st.prototype,"scrollY",2);ct([H()],st.prototype,"viewportHeight",2);ct([H()],st.prototype,"loading",2);ct([H()],st.prototype,"externalLoading",2);ct([H()],st.prototype,"externalProgress",2);st=ct([ot("data-table")],st);function gu(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function bu(e,t,r,s){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(a=>a.id!==s&&a.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function yu(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function wu(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const s=new Date(t);if(Number.isNaN(s.getTime()))return"";const n=s.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function vu(e,t,r){switch(r){case"number":{const s=Number(e),n=Number(t);return Number.isNaN(s)||Number.isNaN(n)?String(e).localeCompare(String(t)):s-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const s=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(s)||Number.isNaN(n)?String(e).localeCompare(String(t)):s-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function Hs(e,t,r){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:r}}))}class xu extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function da(e){return`datasette:token:${e}`}function $u(e,t){for(const[r,s]of Object.entries(t))if(r!=="data"&&e[r]!==s)return!1;return!0}function ku(e,t){const r=e.source,s=r?.config??{},n={base:s.base,db:s.db,table:s.table,query:{}},a=Array.isArray(s.pks)&&s.pks.length>0?s.pks:["rowid"],c=r?.writable===!0,d=s.maxRows??1e4,p=s.pollIntervalMs??0,v=(se,fe)=>t.backend.fetch(se,fe);async function _(){const fe=(await t.settings.findOne(da(s.base)))?.value;return typeof fe=="string"&&fe.length>0?fe:void 0}const $=async(se,fe)=>as(v,await _())(se,fe);function F(se){return{id:Jc(se,a)??Cu(),tableId:e.id,data:se,updatedAt:Date.now()}}function B(se){if(!c)throw new xu(se)}function M(se){const fe={};for(const[_e,ye]of Object.entries(se))a.includes(_e)||(fe[_e]=ye);return fe}const V=new Set;let ae=[],ge=!1,be=null;function ze(){return be||(be=(async()=>{try{const{rows:se}=await is($,n,{maxRows:d});ae=se.map(F),ge=!0;for(const fe of V)fe(ae);return ae}finally{be=null}})(),be)}return{async find(se){const fe=ge?ae:await ze();return!se||Object.keys(se).length===0?fe:fe.filter(_e=>$u(_e,se))},async findOne(se){return(ge?ae:await ze()).find(_e=>_e.id===se)??null},async insert(se){B("insert");const[fe]=await mo($,n,[se.data]),_e=F(fe??se.data);return t.events.emit("row:created",{tableId:e.id,row:_e}),ze(),_e},async bulkInsert(se){if(se.length===0)return[];B("insert");const fe=await mo($,n,se.map(ye=>ye.data)),_e=(fe.length?fe:se.map(ye=>ye.data)).map(F);return ze(),_e},async upsert(se){B("upsert");const[fe]=await ru($,n,[se.data]),_e=F(fe??se.data);return ze(),_e},async patch(se,fe){B("update");const _e=fe.data,ye=M(_e??{}),ft=await nu($,n,se,ye),$t=F(ft??{..._e??{}});return t.events.emit("row:updated",{tableId:e.id,row:$t,prev:$t}),ze(),$t},async remove(se){B("delete"),await go($,n,se),t.events.emit("row:deleted",{tableId:e.id,rowId:se}),ze()},async bulkRemove(se){if(se.length!==0){B("delete");for(const fe of se)await go($,n,fe);ze()}},subscribe(se){V.add(se),ge?se(ae):ze();let fe=null;return p>0&&(fe=setInterval(()=>void ze(),p)),()=>{V.delete(se),fe&&clearInterval(fe)}},async refresh(){await ze()}}}function Cu(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Eu=Object.defineProperty,Su=Object.getOwnPropertyDescriptor,br=(e,t,r,s)=>{for(var n=s>1?void 0:s?Su(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Eu(t,r,n),n};const _u="https://latest.datasette.io/ephemeral";let It=class extends Ge{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();t&&this.finish({url:t,token:this.token.trim()})}}connectedCallback(){super.connectedCallback(),It.instance=this}disconnectedCallback(){super.disconnectedCallback(),It.instance===this&&(It.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return q`
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
                placeholder="e.g. ${_u}"
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
    `}};It.instance=null;It.styles=[Zt,Je`
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
    `];br([H()],It.prototype,"url",2);br([H()],It.prototype,"token",2);br([H()],It.prototype,"status",2);br([H()],It.prototype,"statusKind",2);It=br([ot("datasette-connect-dialog")],It);const Zs=e=>e.replace(/^https?:\/\//,"");async function ha(e,t,r,s={}){if(t.db&&t.table)return[{db:t.db,table:t.table,count:null,hidden:!1,pks:[]}];let n=[];if(t.db){for(const d of await po(e,t.base,t.db))d.hidden||n.push(d);if(s.skipPicker)return n}else{const d=await sa(e,t.base);if(d.length===0)return[];let p=d;if(d.length>1){const v=await Js(d.map(_=>({name:_,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${Zs(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!v)return null;p=v.map(_=>d[_])}for(const v of p)try{for(const _ of await po(e,t.base,v))_.hidden||n.push(_)}catch{}}if(n.length===0)return[];const a=new Set(n.map(d=>d.db)).size>1,c=await Js(n.map(d=>({name:a?`${d.db}/${d.table}`:d.table,size:d.count,detail:a?void 0:d.db})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${Zs(t.base)}.`,confirmLabel:r});return c?c.map(d=>n[d]):null}const Au='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Pu={name:"datasette-source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"easyDBAccess built-ins",optional:!0},jn={maxImportRows:1e4,pageSize:1e3},Tu="https://latest.datasette.io/fixtures/facetable";function Du(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:Au,tooltip:"Connect a live, editable Datasette table",onClick:()=>zu(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>Nu(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:ku}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const s=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Tu}`,"","Import from Datasette");s&&await yo(t,s)}}),e.ui.registerDropHandler(async(t,r)=>{const s=t.dataTransfer?.getData("text/plain")||"";return ju(s)?(t.preventDefault(),await yo(r,s),!0):!1})}async function yo(e,t){try{await pi(e,t)}catch(r){let s;r instanceof Gt?s=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:s=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(s,"Datasette import failed")}}function ju(e){try{const t=Ln(e);return!!(t.db&&t.table)}catch{return!1}}function Ou(e,t){if(!e.has(t))return t;for(let r=2;;r++){const s=`${t} (${r})`;if(!e.has(s))return s}}async function pi(e,t,r={}){const s=e.workspaceId();if(!s)throw new Error("datasette-source: no active workspace");const n=Ln(t),c=await ha(B=>e.backend.fetch(B),n,"Import",{skipPicker:r.skipTablePicker});if(c===null)return;if(c.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const d=[];let p=0;for(const B of c){const M={base:n.base,db:B.db,table:B.table,query:{}},V=await Ru(e,s,M);if(V.skipped){p+=1;continue}d.push({tableId:V.tableId,ref:M,overwrite:V.overwrite})}let v=0,_=0;const $=[],F=[];for(const B of d)try{const M=await Fu(e,B.tableId,B.ref,B.overwrite);v+=1,_+=M.rowCount,(M.hasMore||M.truncated)&&$.push(`${B.ref.db}/${B.ref.table}`)}catch(M){F.push(`${B.ref.db}/${B.ref.table}: ${M?.message??String(M)}`)}Iu(e,{imported:v,skipped:p,totalRows:_,capped:$,failed:F,requested:c.length})}async function Ru(e,t,r){const s=`${r.db}/${r.table}`,n={type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},a=(await e.store.tables.find()).filter(v=>v.workspaceId===t),c=a.find(v=>v.name===s);let d=s;if(c){const v=await e.ui.dialogs.choice(`A table named "${s}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!v||v==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(v==="Overwrite")return await e.store.tables.patch(c.id,{origin:n,updatedAt:Date.now()}),{tableId:c.id,overwrite:!0};d=Ou(new Set(a.map(_=>_.name)),s)}const p=cs();return await e.store.tables.insert({id:p,workspaceId:t,name:d,code:pa(`${r.db}-${r.table}`),columns:[],view:"table",origin:n,updatedAt:Date.now()}),{tableId:p,overwrite:!1}}async function Fu(e,t,r,s){const n=`${r.db}/${r.table}`,a=c=>e.backend.fetch(c);Hs(t,!0);try{let c=[],d=null,p=!1;try{const be=await ia(a,r);c=be.columns,d=be.count,p=be.typed}catch{}const v=d&&d>0?Math.min(d,jn.maxImportRows):0,{rows:_,truncated:$,hasMore:F,pages:B}=await is(a,r,{maxRows:jn.maxImportRows,pageSize:jn.pageSize,onProgress:be=>{v>0&&Hs(t,!0,Math.min(1,be/v))}}),M=c.length===0?fi(_):p?c:oa(c,_),V=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t}),await e.store.tables.patch(t,{columns:M,updatedAt:V});const ae=e.store.rows(t);if(s){const be=await ae.find();await ae.bulkRemove(be.map(ze=>ze.id))}const ge=_.map(be=>({id:cs(),tableId:t,data:be,updatedAt:V}));return await ae.bulkInsert(ge),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:_.length}),{name:n,rowCount:_.length,hasMore:F,truncated:$,pages:B,count:d}}finally{Hs(t,!1)}}function Iu(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,s=`${t.imported} table${t.imported===1?"":"s"}`,n=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${s} (${r});${n} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${s} (${r}).${n} ${t.capped.length} capped at ${jn.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${s} (${r}) from Datasette.${n}`,{kind:"success",title:"Datasette import"})}async function zu(e){const t=It.instance??Lu(),r=(n,a)=>e.backend.fetch(n,a),s=await t.open({initialUrl:"https://datasette.io",async onTest(n,a){const c=Ln(n),d=await ca(r,c.base,{token:a||void 0});if(!d.reachable)return`Unreachable: ${d.error??"no response"}`;const p=d.version?` (Datasette ${d.version})`:"";return d.writable?`Reachable${p} — signed in, read-write.`:`Reachable${p} — read-only (no token / not authenticated).`}});if(s)try{await fa(e,s.url,s.token)}catch(n){const a=n instanceof Gt?n.message:n?.message??String(n);await e.ui.dialogs.alert(a,"Connect Datasette failed")}}function Lu(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function fa(e,t,r){const s=e.workspaceId();if(!s)throw new Error("datasette-source: no active workspace");const n=Ln(t),a=($,F)=>e.backend.fetch($,F),c=as(a,r||void 0),d=await ca(a,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:da(n.base),value:r});let p;try{p=await ha(c,n,"Connect")}catch($){const F=$ instanceof Gt?$.message:$?.message??String($);throw new Error(`Couldn't read tables from ${Zs(n.base)}: ${F}`)}if(p===null)return;if(p.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const v=[];for(const $ of p){const F=await Bu(e,s,n.base,$,d.writable,r);v.push({tableId:F,c:$})}const _=d.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${v.length} live table${v.length===1?"":"s"} from Datasette (${_}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:$,c:F}of v)Mu(e,$,n.base,F,r)}async function Bu(e,t,r,s,n,a){const c=(await e.store.tables.find()).find(_=>{const $=_.source?.config;return _.workspaceId===t&&_.source?.type==="datasette"&&$?.base===r&&$?.db===s.db&&$?.table===s.table});let d=s.pks??[];if(d.length===0){const _=as(($,F)=>e.backend.fetch($,F),a||void 0);try{d=await su(_,{base:r,db:s.db,table:s.table,query:{}})}catch{d=[]}}const p=c?.id??cs(),v={...c??{},id:p,workspaceId:t,name:`${s.db}/${s.table}`,code:pa(`${s.db}-${s.table}`),columns:c?.columns??[],view:c?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:s.db,table:s.table,pks:d}},updatedAt:Date.now()};return c?await e.store.tables.upsert(v):await e.store.tables.insert(v),p}async function Mu(e,t,r,s,n){const a={base:r,db:s.db,table:s.table,query:{}},c=as((d,p)=>e.backend.fetch(d,p),n||void 0);try{let d=[],p=!1;try{const M=await ia(c,a);d=M.columns,p=M.typed}catch{}const{rows:v}=await is(c,a,{maxRows:50,pageSize:50}),_=d.length===0?fi(v):p?d:oa(d,v);if(_.length===0)return;const $=await e.store.tables.findOne(t);if(!$)return;const F=$.source?.config?.pks??[],B=_.map(M=>F.includes(M.field)?{...M,unique:!0,notnull:!0}:M);await e.store.tables.patch(t,{columns:B,updatedAt:Date.now()})}catch{}}async function Nu(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const s=e.store.rows(t);typeof s.refresh=="function"&&await s.refresh();const n=await s.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await qu(e,r)}catch(s){const n=s instanceof Gt?s.message:s?.message??String(s);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function qu(e,t){const r=Ln(t.origin.url),s=$=>e.backend.fetch($),{rows:n,hasMore:a,truncated:c}=await is(s,r,{maxRows:jn.maxImportRows,pageSize:jn.pageSize}),d=Date.now(),p=e.store.rows(t.id),v=await p.find();await p.bulkRemove(v.map($=>$.id)),await p.bulkInsert(n.map($=>({id:cs(),tableId:t.id,data:$,updatedAt:d}))),await e.store.tables.patch(t.id,{updatedAt:d});const _=a||c?` (capped at ${jn.maxImportRows})`:"";e.ui.dialogs.toast(`Refreshed ${n.length} rows from ${r.db}/${r.table}${_}.`,{kind:a||c?"warning":"success",title:"Refresh"})}function pa(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function cs(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Uu=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:fa,importDatasette:pi,init:Du,meta:Pu},Symbol.toStringTag,{value:"Module"})),Hu={name:"dump-export",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"easyDBAccess built-ins"};function Wu(e){e.ui.registerFooterButton({id:"dump-export:dump",label:"Dump",icon:"archive",tooltip:"Export the current workspace as a JSON dump file",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await us(e);await e.backend.saveFile(`workspace-${t}.db.json`,r,"application/json")}})}async function us(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),s={workspaceId:t,exportedAt:Date.now(),tables:[]};for(const n of r){const a=await e.store.rows(n.id).find();s.tables.push({name:n.name,columns:n.columns,rows:a.map(c=>c.data),...n.windowGeometry?{windowGeometry:n.windowGeometry}:{},...n.sortColumn?{sortColumn:n.sortColumn,sortAsc:n.sortAsc??!0}:{}})}return JSON.stringify(s,null,2)}const Ku=Object.freeze(Object.defineProperty({__proto__:null,init:Wu,meta:Hu,serializeWorkspace:us},Symbol.toStringTag,{value:"Module"})),Vu={name:"sql-export",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"easyDBAccess built-ins"};function Yu(e){e.ui.registerFooterButton({id:"sql-export:dump",label:"SQL",icon:"storage",tooltip:"Export the current workspace as a .sql script",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await ma(e);await e.backend.saveFile(`workspace-${t}.sql`,r,"application/sql")}})}async function ma(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),s=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const a=await e.store.rows(n.id).find();s.push(Xu(n,a),"")}return s.push("COMMIT;",""),s.join(`
`)}function Xu(e,t){const r=ei(e.code||e.name||`table_${e.id}`),s=['  "__id" TEXT PRIMARY KEY',...e.columns.map(a=>`  ${Gu(a)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,s.join(`,
`),");"];if(t.length>0){const c=["__id",...e.columns.map(d=>d.field)].map(d=>`"${ei(d)}"`).join(", ");for(const d of t){const p=[wo(d.id),...e.columns.map(v=>wo(d.data[v.field],v.type))];n.push(`INSERT INTO "${r}" (${c}) VALUES (${p.join(", ")});`)}}return n.join(`
`)}function Gu(e){const t=[`"${ei(e.field)}"`,Qu(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function Qu(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function wo(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=Ju(e);return r===null?"NULL":Ur(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?Ur(e.toISOString()):Ur(typeof e=="string"?e:JSON.stringify(e))}function Ju(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?vo(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const s=new Date(t);return Number.isFinite(s.getTime())?vo(s):null}return null}function vo(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${s}`}function Ur(e){return`'${e.replace(/'/g,"''")}'`}function ei(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const Zu=Object.freeze(Object.defineProperty({__proto__:null,init:Yu,meta:Vu,serializeWorkspaceAsSql:ma},Symbol.toStringTag,{value:"Module"})),ed={name:"gist-sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"easyDBAccess built-ins"},td="gist:";function nd(e){e.ui.registerFooterButton({id:"gist-sync:push",label:"Push",icon:"cloud_upload",tooltip:"Push the current workspace to a GitHub Gist",onClick:async()=>{try{await id(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerFooterButton({id:"gist-sync:pull",label:"Pull",icon:"cloud_download",tooltip:"Pull the latest tables from the configured Gist",onClick:async()=>{try{await od(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}})}async function ga(e){const t=e.workspaceId();return`${td}${t??"default"}`}async function rd(e){const t=await ga(e),r=await e.store.settings.findOne(t);if(!r)return null;const s=r.value;return!s||!s.token||!s.user?null:{user:s.user,gistId:s.gistId??"",token:s.token}}async function ba(e,t){const r=await ga(e);await e.store.settings.upsert({key:r,value:t})}function sd(e){const t={};for(const r of e.split(";")){const s=r.indexOf("=");if(s<0)continue;const n=r.slice(0,s).trim(),a=r.slice(s+1).trim();n&&(t[n]=a)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function ya(e){const t=await rd(e);if(t)return t;const r=await e.ui.dialogs.prompt(`Connection string format:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,"","Gist credentials");if(!r)return null;const s=sd(r);return s?(await ba(e,s),s):(await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist credentials"),null)}async function id(e){const t=await ya(e);if(!t)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=(await e.store.tables.find()).filter(p=>p.workspaceId===r);if(s.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const n={},a=[];for(const p of s){const v=await e.store.rows(p.id).find(),_=JSON.stringify(ad(p,v),null,2);_.length>1e8&&a.push(`${p.name} (${(_.length/1e6).toFixed(2)} MB)`),n[`${wa(p.name)}.table.json`]={content:_}}if(a.length>0&&!await e.ui.dialogs.confirm(`These tables exceed Gist's 100 MB-per-file limit and will be rejected:

${a.join(`
`)}

Push anyway?`,"Gist size warning"))return;n["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1"},null,2)};let c;if(t.gistId){const p=await fetch(`https://api.github.com/gists/${t.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:n,description:`easyDBAccess workspace: ${r}`})});if(!p.ok)throw new Error(await ti(p));c=await p.json()}else{const p=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:n})});if(!p.ok)throw new Error(await ti(p));c=await p.json(),t.gistId=c.id,await ba(e,t)}const d=c.html_url??`https://gist.github.com/${t.user}/${c.id}`;e.ui.dialogs.toast(`Pushed ${s.length} table${s.length===1?"":"s"}.  ${d}`,{kind:"success",title:"Gist sync"})}async function od(e){const t=await ya(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!s.ok)throw new Error(await ti(s));const n=await s.json(),a=Object.entries(n.files).filter(([v])=>v.endsWith(".table.json")&&!v.startsWith("_easydb"));if(a.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const c=(await e.store.tables.find()).filter(v=>v.workspaceId===r),d=new Map(c.map(v=>[v.name,v]));let p=0;for(const[,v]of a){const _=JSON.parse(v.content);if(!_.name||!Array.isArray(_.columns))continue;let $;const F=d.get(_.name);if(F){$=await e.store.tables.patch(F.id,{columns:_.columns,updatedAt:Date.now()});const M=e.store.rows(F.id),V=await M.find();await M.bulkRemove(V.map(ae=>ae.id))}else $=await e.store.tables.insert({id:xo(),workspaceId:r,name:_.name,code:wa(_.name),columns:_.columns,view:"table",updatedAt:Date.now()});const B=(_.rows??[]).map(M=>({id:xo(),tableId:$.id,data:M,updatedAt:Date.now()}));await e.store.rows($.id).bulkInsert(B),p++}e.ui.dialogs.toast(`Pulled ${p} table${p===1?"":"s"} from gist ${t.gistId}.`,{kind:"success",title:"Gist sync"})}function ad(e,t){return{name:e.name,columns:e.columns,rows:t.map(r=>r.data)}}async function ti(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function wa(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function xo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const ld=Object.freeze(Object.defineProperty({__proto__:null,init:nd,meta:ed},Symbol.toStringTag,{value:"Module"})),va="server-sync:url";function xa(e){return`server-sync:etag:${e}`}async function $a(e){const r=(await e.store.settings.findOne(va))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function cd(e,t){await e.store.settings.upsert({key:va,value:t.replace(/\/+$/,"")})}async function ka(e,t){const s=(await e.store.settings.findOne(xa(t)))?.value;return typeof s=="string"?s:null}async function In(e,t,r){await e.store.settings.upsert({key:xa(t),value:r})}function ds(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function $o(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function Ca(e,t,r){const s=ss(r,t),n=(await e.store.tables.find()).filter(c=>c.workspaceId===t);for(const c of n){const d=e.store.rows(c.id),p=await d.find();await d.bulkRemove(p.map(v=>v.id)),await e.store.tables.remove(c.id)}let a=0;for(const c of s){const d=ko(),p=await e.store.tables.insert({id:d,workspaceId:t,name:c.name,code:ud(c.name),columns:c.columns,view:"table",...c.windowGeometry?{windowGeometry:c.windowGeometry}:{},...c.sortColumn?{sortColumn:c.sortColumn,sortAsc:c.sortAsc??!0}:{},updatedAt:Date.now()}),v=c.rows.map(_=>({id:ko(),tableId:p.id,data:_,updatedAt:Date.now()}));await e.store.rows(p.id).bulkInsert(v),a++}return a}function ud(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function ko(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const dd={name:"server-sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"easyDBAccess built-ins"};function hd(e){e.ui.registerFooterButton({id:"server-sync:push",label:"Sync ↑",icon:"cloud_sync",tooltip:"Push this workspace to the configured server",onClick:async()=>{try{await fd(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Server sync"})}}}),e.ui.registerFooterButton({id:"server-sync:pull",label:"Sync ↓",icon:"cloud_sync",tooltip:"Pull this workspace from the configured server",onClick:async()=>{try{await pd(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Server sync"})}}})}async function fd(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Ea(e);if(!r)return;const s=await us(e),n=await ka(e,t),a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);let c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:a,body:s});if(c.status===412){const p=await c.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){p.currentEtag&&await In(e,t,p.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:s})}if(!c.ok)throw new Error(await Sa(c));const d=ds(c.headers.get("ETag"));d&&await In(e,t,d),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function pd(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Ea(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await Sa(n));const a=ds(n.headers.get("ETag")),c=await n.json(),d=await Ca(e,t,c);a&&await In(e,t,a),e.ui.dialogs.toast(`Pulled ${d} table${d===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function Ea(e){const t=await $a(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await cd(e,r),r.replace(/\/+$/,"")}async function Sa(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const md=Object.freeze(Object.defineProperty({__proto__:null,init:hd,meta:dd},Symbol.toStringTag,{value:"Module"})),gd={name:"new-table",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"easyDBAccess built-ins"};function bd(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const yd=Object.freeze(Object.defineProperty({__proto__:null,init:bd,meta:gd},Symbol.toStringTag,{value:"Module"})),wd={name:"plugin-manager-button",version:"0.1.0",description:"Registers a footer button that opens the Plugin Manager dialog.",author:"easyDBAccess built-ins"};function vd(e){e.ui.registerFooterButton({id:"plugin-manager:open",label:"Plugins",icon:"extension",tooltip:"Add, disable, or remove plugins",onClick:()=>e.ui.openPluginManager()})}const xd=Object.freeze(Object.defineProperty({__proto__:null,init:vd,meta:wd},Symbol.toStringTag,{value:"Module"})),$d={name:"core-renderers",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"easyDBAccess built-ins"};function kd(e){customElements.get("cell-date")||customElements.define("cell-date",Cd),customElements.get("cell-datetime")||customElements.define("cell-datetime",Ed),customElements.get("cell-boolean")||customElements.define("cell-boolean",Sd),customElements.get("cell-script")||customElements.define("cell-script",Ad),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class Cd extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="date",t.value=Td(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Ed extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="datetime-local",t.value=Dd(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Sd extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="checkbox",t.checked=_d(this._value),t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function _d(e){return e===!0||e==="true"||e===1||e==="1"}class Ad extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const a=document.createElement("span");a.textContent="(no script)",a.style.cssText="color:#9ca3af;font-style:italic",this.append(a);return}let r;try{r=Pd(t)}catch(a){this.append(Ws("compile error",a));return}let s;try{s=r(this._row)}catch(a){this.append(Ws("runtime error",a));return}if(typeof s!="string"){this.append(Ws("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=s,this.append(n)}}const Co=new Map;function Pd(e){const t=Co.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return Co.set(e,r),r}function Ws(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const s=t instanceof Error?t.message:String(t);r.title=s}return r}function Td(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function Dd(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const s=new Date(t);if(Number.isNaN(s.getTime()))return"";const n=s.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const jd=Object.freeze(Object.defineProperty({__proto__:null,init:kd,meta:$d},Symbol.toStringTag,{value:"Module"})),Od={name:"cell-color",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"easyDBAccess built-ins"};function Rd(e){customElements.get("cell-color")||customElements.define("cell-color",Fd),e.ui.registerCellRenderer("color","cell-color")}class Fd extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,s){this.value=s}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Id=Object.freeze(Object.defineProperty({__proto__:null,init:Rd,meta:Od},Symbol.toStringTag,{value:"Module"})),zd={name:"cell-image",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"easyDBAccess built-ins"};function Ld(e){customElements.get("cell-image")||customElements.define("cell-image",Bd),e.ui.registerCellRenderer("image","cell-image")}class Bd extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const s=document.createElement("img");s.src=this._value,s.alt="",s.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(s)}else{const s=document.createElement("span");s.style.color="#9ca3af",s.textContent="no image",t.append(s);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const s=new FileReader;s.onload=()=>this.commit(String(s.result)),s.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Md=Object.freeze(Object.defineProperty({__proto__:null,init:Ld,meta:zd},Symbol.toStringTag,{value:"Module"})),Nd={name:"cell-link",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"easyDBAccess built-ins"};function qd(e){customElements.get("cell-link")||customElements.define("cell-link",Ud),e.ui.registerCellRenderer("link","cell-link")}class Ud extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:Hd(t),s=!this._editing&&!r?Wd(t):null,n=!this._editing&&!r&&!s?Kd(t):null;if(r||s||n){const a=document.createElement("span");a.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const c=document.createElement("a");c.href=r?t:s?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(c.target="_blank",c.rel="noopener noreferrer"),c.textContent=t,c.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",c.title=r?`Open ${t}`:s?`Email ${t}`:`Call ${t}`;const d=document.createElement("button");d.type="button",d.title="Edit",d.textContent="✎",d.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",d.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),this._editing=!0,this.render()}),a.append(c,d),this.append(a)}else{const a=document.createElement("input");a.type="text",a.value=t,a.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",a.addEventListener("change",()=>this.commit(a.value)),a.addEventListener("keydown",c=>{c.key==="Enter"?(c.preventDefault(),this.commit(a.value)):c.key==="Escape"&&(this._editing=!1,this.render())}),this.append(a),this._editing&&setTimeout(()=>{a.focus(),a.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Hd(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function Wd(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function Kd(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const s=/[ ()\-.]/.test(t),n=t.startsWith("+");return!s&&!n&&r.length<10?null:t}const Vd=Object.freeze(Object.defineProperty({__proto__:null,init:qd,meta:Nd},Symbol.toStringTag,{value:"Module"}));var Yd=Object.defineProperty,Xd=Object.getOwnPropertyDescriptor,_a=(e,t,r,s)=>{for(var n=s>1?void 0:s?Xd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Yd(t,r,n),n};function Gd(e){return(an.instance??Qd()).open(e)}function Qd(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let an=class extends Ge{constructor(){super(...arguments),this.rows=[],this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((r,s)=>{const n=this.rows[s].field.trim(),a=this.rows[s].label.trim()||n;return{...r,field:n,label:a}});this.finish(t)}}connectedCallback(){super.connectedCallback(),an.instance=this}disconnectedCallback(){super.disconnectedCallback(),an.instance===this&&(an.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}open(e){return this.source=e,this.rows=e.map(t=>({field:t.field,label:t.label})),new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((r,s)=>{const n=r.field.trim().toLowerCase();if(n===""){e.add(s);return}(t.get(n)??t.set(n,[]).get(n)).push(s)});for(const r of t.values())if(r.length>1)for(const s of r)e.add(s);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,r){this.rows=this.rows.map((s,n)=>n===e?{...s,[t]:r}:s)}render(){const e=this.invalidIndices(),t=e.size;return q`
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
              ${this.rows.map((r,s)=>q`
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
                `)}
            </div>
            <p class="err">
              ${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:Se}
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
    `];_a([H()],an.prototype,"rows",2);an=_a([ot("column-names-dialog")],an);var Jd=Object.defineProperty,Zd=Object.getOwnPropertyDescriptor,cn=(e,t,r,s)=>{for(var n=s>1?void 0:s?Zd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Jd(t,r,n),n};const eh="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",th="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",nh='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',Eo=[{label:"Northwind — sample database (JSON dump)",url:eh,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:th,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],rh={name:"import-data",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"easyDBAccess built-ins",optional:!0};function sh(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:nh,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>ih(e)})}async function ih(e){const r=await(pt.instance??oh()).open({async listDatabases(d){const p=Ln(d);return sa(v=>e.backend.fetch(v),p.base)}});if(!r)return;const{url:s,kind:n,dbChosen:a,editColumns:c}=r;try{if(n==="datasette")await pi(e,s,{skipTablePicker:a});else if(n==="csv"){const d=await e.backend.fetch(s);if(!d.ok)throw new Error(`HTTP ${d.status} ${d.statusText}`);const p=await d.text();await ui(e,p,Hr(s),{editColumns:c?Gd:void 0}),e.ui.dialogs.toast(`Imported ${Hr(s)}.`,{kind:"success",title:"Import"})}else{const d=await e.backend.fetch(s);if(!d.ok)throw new Error(`HTTP ${d.status} ${d.statusText}`);const p=await d.text();await hi(e,p,Hr(s)),e.ui.dialogs.toast(`Imported ${Hr(s)}.`,{kind:"success",title:"Import"})}}catch(d){e.ui.dialogs.toast(`Could not import ${s}: ${d.message}`,{kind:"error",title:"Import"})}}function oh(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function ah(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),s=[...t.searchParams.keys()].some(a=>a.startsWith("_")),n=r.includes("datasette")||s;return!s&&/\.csv$/i.test(t.pathname)?"csv":!s&&/\.json$/i.test(t.pathname)?"json":n?"datasette":"json"}catch{return"json"}}function So(e,t){if(t!=="datasette"||!e)return!1;try{const r=Ln(e);return!r.db&&!r.table}catch{return!1}}function Hr(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}let pt=class extends Ge{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.resolvedKind,s=r==="datasette"&&!!this.selectedDb&&So(t,r),n=s?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t,a=r==="csv"&&this.editColumns;this.finish({url:n,kind:r,dbChosen:s,editColumns:a})}}get resolvedKind(){return this.kind==="auto"?ah(this.url.trim()):this.kind}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),pt.instance=this}disconnectedCallback(){super.disconnectedCallback(),pt.instance===this&&(pt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.editColumns=!1,this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=Eo[t];r&&(this.url=r.url,this.kind=r.kind)}renderDbPicker(){return!this.listDatabases||!So(this.url.trim(),this.resolvedKind)?Se:q`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?q`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>q`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:q`<option value="">— not loaded —</option>`}
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
      ${this.dbError?q`<p class="hint error">${this.dbError}</p>`:Se}
    `}render(){return q`
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
                ${Eo.map((e,t)=>q`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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

            ${this.resolvedKind==="csv"?q`<label class="check">
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
    `];cn([H()],pt.prototype,"url",2);cn([H()],pt.prototype,"kind",2);cn([H()],pt.prototype,"presetIdx",2);cn([H()],pt.prototype,"dbList",2);cn([H()],pt.prototype,"dbLoading",2);cn([H()],pt.prototype,"dbError",2);cn([H()],pt.prototype,"selectedDb",2);cn([H()],pt.prototype,"editColumns",2);pt=cn([ot("import-dialog")],pt);const lh=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return pt},init:sh,meta:rh},Symbol.toStringTag,{value:"Module"})),ch={name:"auto-sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"easyDBAccess built-ins",optional:!0},uh=6e4;let _o=null,ni=!1;const Ks=new Map;function dh(e){_o===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(_o=setInterval(()=>{Aa(e)},uh)))}async function Aa(e){if(ni)return;const t=e.workspaceId();if(!t)return;const r=await $a(e);if(r)try{await hh(e,r,t)}catch(s){console.warn("[auto-sync]",s)}}async function hh(e,t,r){const s=await us(e),n=await ka(e,r),a=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(a.status===404){await Ao(e,t,r,s,null);return}if(!a.ok)return;const c=ds(a.headers.get("ETag")),d=await a.text();if($o(s)===$o(d)){c&&c!==n&&await In(e,r,c);return}if(c&&c===n){await Ao(e,t,r,s,n);return}if(!(c&&Ks.get(r)===c)){ni=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const v=JSON.parse(d),_=await Ca(e,r,v);c&&await In(e,r,c),Ks.delete(r),e.ui.dialogs.toast(`Pulled ${_} table${_===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else c&&Ks.set(r,c)}finally{ni=!1}}}async function Ao(e,t,r,s,n){const a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);const c=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:a,body:s});if(c.ok){const d=ds(c.headers.get("ETag"));d&&await In(e,r,d);return}if(c.status===412){const d=await c.json().catch(()=>({}));d.currentEtag&&await In(e,r,d.currentEtag)}}const Pa=Object.freeze(Object.defineProperty({__proto__:null,load:dh,meta:ch,tick:Aa},Symbol.toStringTag,{value:"Module"}));/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let R={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&R.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let s=arguments[r];if(s==null)continue;s=Object(s);let n=Object.keys(Object(s));for(let a=0,c=n.length;a<c;a++){let d=n[a],p=Object.getOwnPropertyDescriptor(s,d);p!==void 0&&p.enumerable&&(t[d]=s[d])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,s=new Array(r);r--;)s[r]=[t[r],e[t[r]]];return s}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),s=document.createDocumentFragment();r.forEach(function(n){let a=n instanceof Node;s.appendChild(a?n:document.createTextNode(String(n)))}),this.appendChild(s)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,s=this;do for(r=t.length;--r>=0&&t.item(r)!==s;);while(r<0&&(s=s.parentElement));return s}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let s=document.createEvent("CustomEvent");return s.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),s}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),s=r.length>>>0;if(s===0)return!1;let n=t|0,a=Math.max(n>=0?n:s-Math.abs(n),0);function c(d,p){return d===p||typeof d=="number"&&typeof p=="number"&&isNaN(d)&&isNaN(p)}for(;a<s;){if(c(r[a],e))return!0;a++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>R.modifier=e),document.addEventListener("keyup",()=>R.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const s=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(s===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(s),a=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-a)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(s===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(s),a=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-a)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((s,n)=>{(s.startsWith("--")||s.startsWith("var"))&&(r[n]=R.getCssVariableValue(s))}),r.forEach(s=>{R.colorNames[s]?t[2]="#"+R.colorNames[s]:s.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=s:s.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=s:t[2]=s}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),s=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return s&&(t.size=s[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let s=e.indexOf(")");t=e.slice(0,s+1).replace(/\s+/g,""),t.startsWith("var")&&(t=R.getCssVariableValue(t)),r=e.slice(s+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let s=e.indexOf(" ");s>0?(t=e.slice(0,s+1).replace(/\s+/g,""),r=e.slice(s+1,e.length).trim()):t=e,t.startsWith("--")&&(t=R.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let s=r.indexOf(" ");r=r.slice(s+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:R.colorNames[r]?r="#"+R.colorNames[r]:r.match(/^(--|var)/)?r=R.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,s,n,a,c,d,p,v,_,$={};const F=/^#?([\da-f]{3}|[\da-f]{6})$/gi,B=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,M=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,V=this.colorNames;return V[t]&&(t=V[t]),t.match(F)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),s=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),$.rgb={r:parseInt(r,16),g:parseInt(s,16),b:parseInt(n,16)},$.hex=`#${r}${s}${n}`):($.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},$.hex=`#${t}`),_=this.rgbToHsl($.rgb.r,$.rgb.g,$.rgb.b),$.hsl=_,$.rgb.css=`rgb(${$.rgb.r},${$.rgb.g},${$.rgb.b})`):t.match(B)?(p=B.exec(t),$.rgb={css:t,r:p[1],g:p[2],b:p[3]},$.hex=this.rgbToHex(p[1],p[2],p[3]),_=this.rgbToHsl(p[1],p[2],p[3]),$.hsl=_):t.match(M)?(p=M.exec(t),a=p[1]/360,c=p[2].slice(0,p[2].length-1)/100,d=p[3].slice(0,p[3].length-1)/100,v=this.hslToRgb(a,c,d),$.rgb={css:`rgb(${v[0]},${v[1]},${v[2]})`,r:v[0],g:v[1],b:v[2]},$.hex=this.rgbToHex($.rgb.r,$.rgb.g,$.rgb.b),$.hsl={css:`hsl(${p[1]},${p[2]},${p[3]})`,h:p[1],s:p[2],l:p[3]}):($.hex="#f5f5f5",$.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},$.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),$},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),s=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),a=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(s)<=t?"#ffffff":"#000000",d=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",p=this.lighten(e,this.colorFilledDark),v=this.perceivedBrightness(p)<=t?"#ffffff":"#000000";return[r.hsl.css,s,n,a,c,d,p,v]},darken(e,t){const r=this.color(e).hsl,s=parseFloat(r.l),n=Math.round(s-s*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,s=parseFloat(r.l),n=Math.round(s+(100-s)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let s,n,a;if(t===0)s=n=a=r;else{let c=(v,_,$)=>($<0&&($+=1),$>1&&($-=1),$<.16666666666666666?v+(_-v)*6*$:$<.5?_:$<.6666666666666666?v+(_-v)*(.6666666666666666-$)*6:v),d=r<.5?r*(1+t):r+t-r*t,p=2*r-d;s=c(p,d,e+1/3),n=c(p,d,e),a=c(p,d,e-1/3)}return[Math.round(s*255),Math.round(n*255),Math.round(a*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let s=Math.max(e,t,r),n=Math.min(e,t,r),a,c,d=(s+n)/2;if(s===n)a=c=0;else{let p=s-n;switch(c=d>.5?p/(2-s-n):p/(s+n),s){case e:a=(t-r)/p+(t<r?6:0);break;case t:a=(r-e)/p+2;break;case r:a=(e-t)/p+4;break}a/=6}return a=Math.round(a*360),c=Math.round(c*100)+"%",d=Math.round(d*100)+"%",{css:"hsl("+a+","+c+","+d+")",h:a,s:c,l:d}},rgbToHex(e,t,r){let s=Number(e).toString(16),n=Number(t).toString(16),a=Number(r).toString(16);return s.length===1&&(s=`0${s}`),n.length===1&&(n=`0${n}`),a.length===1&&(a=`0${a}`),`#${s}${n}${a}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),s=r.filter(c=>c.match(/^(down|right|up|left)$/i));s.length&&(t.autoposition=s[0],r.splice(r.indexOf(s[0]),1));let n=r.filter(c=>c.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let a=r.filter(c=>c.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return a.length&&(t.offsetX=a[0].match(/^[+-]?\d*\.?\d+$/i)?`${a[0]}px`:a[0],a[1]?t.offsetY=a[1].match(/^[+-]?\d*\.?\d+$/i)?`${a[1]}px`:a[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(a[0]),1),a[1]&&r.splice(r.indexOf(a[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(V=>{typeof t[V]=="function"&&(t[V]=t[V].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,s=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),a=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},c=r==="window"?{x:1,y:1}:{x:a.width/r.offsetWidth,y:a.height/r.offsetHeight},d=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);a.width-=(parseFloat(d.borderLeftWidth)+parseFloat(d.borderRightWidth))*c.x,a.height-=(parseFloat(d.borderTopWidth)+parseFloat(d.borderBottomWidth))*c.y;let p;t.of?typeof t.of=="string"?p=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?p=t.of[0].getBoundingClientRect():p=t.of.getBoundingClientRect():p=a;let v=this.getScrollbarWidth(document.body),_=this.getScrollbarWidth(e.parentElement),$="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?$=p.left-a.left-parseFloat(d.borderLeftWidth)+"px":$="0px":t.at.startsWith("center")?t.of?$=p.left-a.left-parseFloat(d.borderLeftWidth)+p.width/2+"px":$=a.width/2+"px":t.at.startsWith("right-")&&(t.of?$=p.left-a.left-parseFloat(d.borderLeftWidth)+p.width+"px":$=a.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?$=p.left-a.left-parseFloat(d.borderLeftWidth)-s.width/2+"px":$=-s.width/2+"px":t.at.startsWith("center")?t.of?$=p.left-a.left-parseFloat(d.borderLeftWidth)-(s.width-p.width)/2+"px":$=a.width/2-s.width/2+"px":t.at.startsWith("right-")&&(t.of?$=p.left-a.left-parseFloat(d.borderLeftWidth)+(p.width-s.width/2)+"px":$=a.width-s.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?$=p.left-a.left-parseFloat(d.borderLeftWidth)-s.width+"px":$=-s.width+"px":t.at.startsWith("center")?t.of?$=p.left-a.left-parseFloat(d.borderLeftWidth)-s.width+p.width/2+"px":$=a.width/2-s.width+"px":t.at.startsWith("right-")&&(t.of?$=p.left-a.left-parseFloat(d.borderLeftWidth)+p.width-s.width+"px":$=a.width-s.width+"px",r!=="window"&&($=parseFloat($)-_.y+"px")));let F="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?F=p.top-a.top-parseFloat(d.borderTopWidth)+"px":F="0px":t.at.endsWith("center")?t.of?F=p.top-a.top-parseFloat(d.borderTopWidth)+p.height/2+"px":F=a.height/2+"px":t.at.endsWith("-bottom")&&(t.of?F=p.top-a.top-parseFloat(d.borderTopWidth)+p.height+"px":F=a.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?F=p.top-a.top-parseFloat(d.borderTopWidth)-s.height/2+"px":F=-s.height/2+"px":t.at.endsWith("center")?t.of?F=p.top-a.top-parseFloat(d.borderTopWidth)-s.height/2+p.height/2+"px":F=a.height/2-s.height/2+"px":t.at.endsWith("-bottom")&&(t.of?F=p.top-a.top-parseFloat(d.borderTopWidth)-s.height/2+p.height+"px":F=a.height-s.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?F=p.top-a.top-parseFloat(d.borderTopWidth)-s.height+"px":F=-s.height+"px":t.at.endsWith("center")?t.of?F=p.top-a.top-parseFloat(d.borderTopWidth)-s.height+p.height/2+"px":F=a.height/2-s.height+"px":t.at.endsWith("-bottom")&&(t.of?F=p.top-a.top-parseFloat(d.borderTopWidth)-s.height+p.height+"px":F=a.height-s.height+"px",r!=="window"?F=parseFloat(F)-_.x+"px":F=parseFloat(F)-v.x+"px")),e.style.left=c.x===1?$:parseFloat($)/c.x+"px",e.style.top=c.y===1?F:parseFloat(F)/c.y+"px";let B=getComputedStyle(e),M={left:B.left,top:B.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(M=this.applyPositionAutopos(e,M,t)),(t.offsetX||t.offsetY)&&(M=this.applyPositionOffset(e,M,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(M=this.applyPositionMinMax(e,M,t)),t.modify&&(M=this.applyPositionModify(e,M,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const s=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(s);const n=Array.prototype.slice.call(document.querySelectorAll(`.${s}`)),a=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((c,d)=>{d>0&&d<=a&&(t.top=parseFloat(t.top)+n[--d].getBoundingClientRect().height+R.autopositionSpacing+"px")});break;case"up":n.forEach((c,d)=>{d>0&&d<=a&&(t.top=parseFloat(t.top)-n[--d].getBoundingClientRect().height-R.autopositionSpacing+"px")});break;case"right":n.forEach((c,d)=>{d>0&&d<=a&&(t.left=parseFloat(t.left)+n[--d].getBoundingClientRect().width+R.autopositionSpacing+"px")});break;case"left":n.forEach((c,d)=>{d>0&&d<=a&&(t.left=parseFloat(t.left)-n[--d].getBoundingClientRect().width-R.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const s=getComputedStyle(e);return{left:s.left,top:s.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const s=getComputedStyle(e);return{left:s.left,top:s.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const s=getComputedStyle(e);return{left:s.left,top:s.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(s=>{e.classList.contains(s)&&(t=s)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),s=document.createElement("button");s.className="btn btn"+t.color.slice(r),document.body.appendChild(s),t.color=getComputedStyle(s).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(s),s=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},s=typeof t=="object"?Object.assign(r,t):r,n=s.bgPanel,a=s.bgContent,c=s.colorHeader,d=s.colorContent,p=s.bgFooter,v=s.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[c]&&(c="#"+this.colorNames[c]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(F=>e.querySelector(F).style.color=this.getCssVariableValue(c)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(F=>F.style.color=this.getCssVariableValue(c)),this.colorNames[a]?e.content.style.background="#"+this.colorNames[a]:e.content.style.background=this.getCssVariableValue(a),this.colorNames[d]?e.content.style.color="#"+this.colorNames[d]:e.content.style.color=this.getCssVariableValue(d),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(d)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[p]?e.footer.style.background="#"+this.colorNames[p]:e.footer.style.background=this.getCssVariableValue(p),this.colorNames[v]?e.footer.style.color="#"+this.colorNames[v]:e.footer.style.color=this.getCssVariableValue(v),s.border&&e.setBorder(s.border),s.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(s.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,s]of Object.entries(t))e.style[r]=typeof s=="string"?R.getCssVariableValue(s):s;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const s=document.createElement("script");s.src=e,s.type=t,document.head.appendChild(s),r&&(s.onload=r)}},ajax(e,t){let r,s,n=new XMLHttpRequest;const a={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let c=R.strToHtml(this.responseText);r.urlSelector&&(c=c.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(c)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},a,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},a,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&R.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}s=r.url.trim().split(/\s+/),r.url=encodeURI(s[0]),s.length>1&&(s.shift(),r.urlSelector=s.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&R.ajaxAutoresizeAutoreposition(t,r),R.ajaxAlwaysCallbacks.length&&R.ajaxAlwaysCallbacks.forEach(c=>{t?c.call(n,n,t):c.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const s={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(a,c){if(c){let d=R.strToHtml(a);c.contentRemove(),c.content.append(d)}}};if(t&&typeof e=="string")r=Object.assign({},s,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},s,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&R.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(a=>{if(a.ok)return a[r.bodyMethod]()}).then(a=>{t?r.done.call(a,a,t):r.done.call(a,a),t&&(r.autoresize||r.autoreposition)&&R.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const s=r.split(" "),n=Object.assign({},{width:s[0],height:s[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const s=Object.assign({},r);t.autoresize&&e.resize(s),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const s=document.createElement("div"),n=e.parentElement;s.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(s.style.width=r+"px",s.style.height=r+"px"):t==="ct"||t==="cb"?s.style.height=r+"px":(t==="lc"||t==="rc")&&(s.style.width=r+"px"),n!==document.body&&(s.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(s)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",s,n){if(typeof t=="function"&&(t=[t]),r)return t[r](a=>a.call(e,e,s,n));t.forEach(a=>a.call(e,e,s,n))},resetZi(){this.zi=((e=R.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=R.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){R.zi||(R.zi=((f=R.ziBase)=>{let y=f;return{next:()=>y++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${R.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let f=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;R.errorpanel(f)}return!1}let s=this.pOcontainer(e.container);if(typeof s=="object"&&s.length&&s.length>0&&(s=s[0]),!s)return this.errorReporting&&R.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(f=>{e[f]?typeof e[f]=="function"&&(e[f]=[e[f]]):e[f]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const a=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),d=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),p=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),v=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),_=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),$=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),F=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),B=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),M=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),V=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),ae=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),ge=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),be=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),ze=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),se=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[a,c,d,p,v,_,$,F,B,M,V,ae,ge,be].forEach(f=>f.panel=n);const fe=n.querySelector(".jsPanel-btn-close"),_e=n.querySelector(".jsPanel-btn-maximize"),ye=n.querySelector(".jsPanel-btn-normalize"),ft=n.querySelector(".jsPanel-btn-smallify"),$t=n.querySelector(".jsPanel-btn-minimize");fe&&R.pointerup.forEach(f=>{fe.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.close(null,!0)})}),_e&&R.pointerup.forEach(f=>{_e.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.maximize()})}),ye&&R.pointerup.forEach(f=>{ye.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.normalize()})}),ft&&R.pointerup.forEach(f=>{ft.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),$t&&R.pointerup.forEach(f=>{$t.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.minimize()})});let wt=R.extensions;for(let f in wt)Object.prototype.hasOwnProperty.call(wt,f)&&(n[f]=wt[f]);if(n.setBorder=f=>{let y=R.pOborder(f);return y[2].length||(y[2]=n.style.backgroundColor),y=y.join(" "),n.style.border=y,n.options.border=y,n},n.setBorderRadius=f=>{typeof f=="string"&&(f.startsWith("--")||f.startsWith("var"))&&(f=f.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),f=R.getCssVariableValue(f)),typeof f=="number"&&(f+="px"),n.style.borderRadius=f;const y=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=y.borderTopLeftRadius,n.header.style.borderTopRightRadius=y.borderTopRightRadius):(n.content.style.borderTopLeftRadius=y.borderTopLeftRadius,n.content.style.borderTopRightRadius=y.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=y.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=y.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=y.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=y.borderBottomLeftRadius),n},n.setTheme=(f=e.theme,y)=>{let A;if(n.status==="minimized"&&(A=!0,n.normalize()),R.clearTheme(n),typeof f=="object")e.border=void 0,R.applyCustomTheme(n,f);else if(typeof f=="string"){f==="none"&&(f="white");let b=R.getThemeDetails(f);R.applyColorTheme(n,b)}return A&&n.minimize(),y&&y.call(n,n),n},n.remove=(f,y,A)=>{n.parentElement.removeChild(n),document.getElementById(f)?A&&A.call(n,f,n):(n.removeMinimizedReplacement(),n.status="closed",y&&document.dispatchEvent(se),document.dispatchEvent(ze),n.options.onclosed&&R.processCallbacks(n,n.options.onclosed,"every",y),R.autopositionRemaining(n),A&&A.call(f,f)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(f,y)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(be),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!R.processCallbacks(n,n.options.onbeforeclose,"some",n.status,y))return n;n.options.animateOut?(n.options.animateIn&&R.remClass(n,n.options.animateIn),R.setClass(n,n.options.animateOut),n.addEventListener("animationend",A=>{A.stopPropagation(),n.remove(n.id,y,f)})):n.remove(n.id,y,f)}},n.maximize=(f,y)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!R.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(v);const A=n.parentElement,b=R.pOcontainment(e.maximizedMargin);return A===document.body?(n.style.width=document.documentElement.clientWidth-b[1]-b[3]+"px",n.style.height=document.documentElement.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"):(n.style.width=A.clientWidth-b[1]-b[3]+"px",n.style.height=A.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"),ft.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),y||n.front(),document.dispatchEvent(_),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),f&&f.call(n,n,n.statusBefore),e.onmaximized&&R.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=f=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!R.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent($),!document.getElementById("jsPanel-replacement-container")){const y=document.createElement("div");y.id="jsPanel-replacement-container",document.body.append(y)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(F),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let y=n.createMinimizedReplacement(),A,b,k;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(y);break;case"parentpanel":b=n.closest(".jsPanel-content").parentElement,k=b.querySelectorAll(".jsPanel-minimized-box"),A=k[k.length-1],A.append(y);break;case"parent":b=n.parentElement,A=b.querySelector(".jsPanel-minimized-container"),A||(A=document.createElement("div"),A.className="jsPanel-minimized-container",b.append(A)),A.append(y);break;default:document.querySelector(e.minimizeTo).append(y)}}return f&&f.call(n,n,n.statusBefore),e.onminimized&&R.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=f=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!R.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(d),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),ft.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(p),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),f&&f.call(n,n,n.statusBefore),e.onnormalized&&R.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=f=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!R.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(B),n.style.overflow="hidden";const y=window.getComputedStyle(n),A=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(y.borderTopWidth)+parseFloat(y.borderBottomWidth)+A+"px",ft.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(M),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(V),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const b=n.querySelectorAll(".jsPanel-minimized-box");return b[b.length-1].style.display="none",f&&f.call(n,n,n.statusBefore),e.onsmallified&&R.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=f=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!R.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(ae),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(p),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),ft.style.transform="rotate(0deg)";const y=n.querySelectorAll(".jsPanel-minimized-box");y[y.length-1].style.display="flex",f&&f.call(n,n,n.statusBefore),e.onunsmallified&&R.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(f,y=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const A=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(b=>b.style.zIndex);Math.max(...A)>n.style.zIndex&&(n.style.zIndex=R.zi.next()),R.resetZi()}return document.dispatchEvent(ge),f&&f.call(n,n),e.onfronted&&y&&R.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(f,y=!1)=>{if(y||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),f&&typeof f=="function"&&!y)f.call(n,n,n.snappableTo);else if(f!==!1){let A=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const b=R.pOcontainment(n.options.dragit.containment),k=n.snappableTo;k.startsWith("left")?A[0]=b[3]:k.startsWith("right")&&(A[0]=-b[1]),k.endsWith("top")?A[1]=b[0]:k.endsWith("bottom")&&(A[1]=-b[2])}n.reposition(`${n.snappableTo} ${A[0]} ${A[1]}`)}y||(n.snapped=n.snappableTo)},n.move=(f,y)=>{let A=n.overlaps(f,"paddingbox"),b=n.parentElement;return f.appendChild(n),n.options.container=f,n.style.left=A.left+"px",n.style.top=A.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),y&&y.call(n,n,f,b),n},n.closeChildpanels=f=>(n.getChildpanels().forEach(y=>y.close()),f&&f.call(n,n),n),n.getChildpanels=f=>{const y=n.content.querySelectorAll(".jsPanel");return f&&y.forEach((A,b,k)=>{f.call(A,A,b,k)}),y},n.isChildpanel=f=>{const y=n.closest(".jsPanel-content"),A=y?y.parentElement:null;return f&&f.call(n,n,A),y?A:!1},n.contentRemove=f=>(R.emptyNode(n.content),f&&f.call(n,n),n),n.createMinimizedReplacement=()=>{const f=R.createMinimizedTemplate(),y=window.getComputedStyle(n.headertitle).color,A=window.getComputedStyle(n),b=e.iconfont,k=f.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?R.setStyles(f,{backgroundColor:A.backgroundColor,backgroundPositionX:A.backgroundPositionX,backgroundPositionY:A.backgroundPositionY,backgroundRepeat:A.backgroundRepeat,backgroundAttachment:A.backgroundAttachment,backgroundImage:A.backgroundImage,backgroundSize:A.backgroundSize,backgroundOrigin:A.backgroundOrigin,backgroundClip:A.backgroundClip}):f.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,f.id=n.id+"-min",f.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),f.querySelector(".jsPanel-headerlogo")),f.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),f.querySelector(".jsPanel-title")),f.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),f.querySelector(".jsPanel-title").style.color=y,k.style.color=y,k.querySelectorAll("button").forEach(oe=>oe.style.color=y),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(oe=>{n.header.classList.contains(oe)&&f.querySelector(".jsPanel-hdr").classList.add(oe)}),n.setIconfont(b,f),n.dataset.btnnormalize==="enabled"?R.pointerup.forEach(oe=>{f.querySelector(".jsPanel-btn-normalize").addEventListener(oe,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;n.normalize()})}):k.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?R.pointerup.forEach(oe=>{f.querySelector(".jsPanel-btn-maximize").addEventListener(oe,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;n.maximize()})}):k.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?R.pointerup.forEach(oe=>{f.querySelector(".jsPanel-btn-close").addEventListener(oe,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;n.close(null,!0)})}):k.querySelector(".jsPanel-btn-close").style.display="none",f},n.removeMinimizedReplacement=()=>{const f=document.getElementById(`${n.id}-min`);f&&f.parentElement.removeChild(f)},n.drag=(f={})=>{let y,A,b;const k=new CustomEvent("jspaneldragstart",{detail:n.id}),oe=new CustomEvent("jspaneldrag",{detail:n.id}),ue=new CustomEvent("jspaneldragstop",{detail:n.id});[k,oe,ue].forEach(Me=>Me.panel=n);const U=Me=>{let Fe=Me.split("-");return Fe.forEach((xe,Te)=>{Fe[Te]=xe.charAt(0).toUpperCase()+xe.slice(1)}),"snap"+Fe.join("")};function Y(Me){Me.relatedTarget===null&&R.pointermove.forEach(Fe=>{document.removeEventListener(Fe,A,!1),n.style.opacity=1})}let We=f.handles||R.defaults.dragit.handles,it=f.cursor||R.defaults.dragit.cursor;function Kt(Me){if(R.pointermove.forEach(Fe=>document.removeEventListener(Fe,A)),R.removeSnapAreas(),y){if(n.style.opacity=1,y=void 0,b.snap){switch(n.snappableTo){case"left-top":n.snap(b.snap.snapLeftTop);break;case"center-top":n.snap(b.snap.snapCenterTop);break;case"right-top":n.snap(b.snap.snapRightTop);break;case"right-center":n.snap(b.snap.snapRightCenter);break;case"right-bottom":n.snap(b.snap.snapRightBottom);break;case"center-bottom":n.snap(b.snap.snapCenterBottom);break;case"left-bottom":n.snap(b.snap.snapLeftBottom);break;case"left-center":n.snap(b.snap.snapLeftCenter);break}b.snap.callback&&n.snappableTo&&typeof b.snap.callback=="function"&&(b.snap.callback.call(n,n),b.snap.repositionOnSnap&&b.snap[U(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&b.snap.repositionOnSnap&&b.snap[U(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Fe=n.parentElement;n.move(n.droppableTo),b.drop.callback&&b.drop.callback.call(n,n,n.droppableTo,Fe)}if(document.dispatchEvent(ue),b.stop.length){let Fe=window.getComputedStyle(n),xe={left:parseFloat(Fe.left),top:parseFloat(Fe.top),width:parseFloat(Fe.width),height:parseFloat(Fe.height)};R.processCallbacks(n,b.stop,!1,xe,Me)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Fe=>Fe.style.pointerEvents="auto"),document.removeEventListener(Me,Kt)}return n.querySelectorAll(We).forEach(Me=>{Me.style.touchAction="none",Me.style.cursor=it,R.pointerdown.forEach(Fe=>{Me.addEventListener(Fe,xe=>{if(xe.button&&xe.button>0||(b=Object.assign({},R.defaults.dragit,f),b.disableOnMaximized&&n.status==="maximized"))return!1;if((b.containment||b.containment===0)&&(b.containment=R.pOcontainment(b.containment)),b.grid&&Array.isArray(b.grid)&&b.grid.length===1&&(b.grid[1]=b.grid[0]),b.snap&&(typeof b.snap=="object"?b.snap=Object.assign({},R.defaultSnapConfig,b.snap):b.snap=R.defaultSnapConfig),xe.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(Qe=>Qe.style.pointerEvents="none");let Te=window.getComputedStyle(n),Ke=parseFloat(Te.left),Ae=parseFloat(Te.top),ee=parseFloat(Te.width),Ve=parseFloat(Te.height),Ie=xe.touches?xe.touches[0].clientX:xe.clientX,ce=xe.touches?xe.touches[0].clientY:xe.clientY,me=n.parentElement,Et=me.getBoundingClientRect(),ie=window.getComputedStyle(me),Ye=n.getScaleFactor(),dn=0,Lt=R.getScrollbarWidth(me);A=Qe=>{if(Qe.preventDefault(),!y){if(document.dispatchEvent(k),n.style.opacity=b.opacity,n.snapped&&b.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let ne=n.getBoundingClientRect(),Pe=Ie-(ne.left+ne.width),de=ne.width/2;Pe>-de&&(dn=Pe+de)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),b.drop&&b.drop.dropZones){let ne=b.drop.dropZones.map(de=>R.pOcontainer(de)),Pe=[];ne.forEach(function(de){de.length?de.forEach(function(Re){Pe.push(Re)}):Pe.push(de)}),Pe=Pe.filter(function(de,Re,Ue){return Ue.indexOf(de)===Re}),b.drop.dropZones=Pe}b.start.length&&R.processCallbacks(n,b.start,!1,{left:Ke,top:Ae,width:ee,height:Ve},Qe)}y=1;let St,Oe,Ne,vt,Ze,ke,$e,_t,qe,mt,at=Qe.touches?Qe.touches[0].clientX:Qe.clientX,et=Qe.touches?Qe.touches[0].clientY:Qe.clientY,Le=window.getComputedStyle(n),le;if(me===document.body){let ne=n.getBoundingClientRect();qe=window.innerWidth-parseInt(ie.borderLeftWidth,10)-parseInt(ie.borderRightWidth,10)-(ne.left+ne.width),mt=window.innerHeight-parseInt(ie.borderTopWidth,10)-parseInt(ie.borderBottomWidth,10)-(ne.top+ne.height)}else qe=parseInt(ie.width,10)-parseInt(ie.borderLeftWidth,10)-parseInt(ie.borderRightWidth,10)-(parseInt(Le.left,10)+parseInt(Le.width,10)),mt=parseInt(ie.height,10)-parseInt(ie.borderTopWidth,10)-parseInt(ie.borderBottomWidth,10)-(parseInt(Le.top,10)+parseInt(Le.height,10));St=parseFloat(Le.left),Ne=parseFloat(Le.top),Ze=qe,$e=mt,b.snap&&(b.snap.trigger==="panel"?(Oe=St**2,vt=Ne**2,ke=Ze**2,_t=$e**2):b.snap.trigger==="pointer"&&(n.options.container==="window"?(St=at,Ne=et,Ze=window.innerWidth-at,$e=window.innerHeight-et,Oe=at**2,vt=Ne**2,ke=Ze**2,_t=$e**2):(le=n.overlaps(me,"paddingbox",Qe),St=le.pointer.left,Ne=le.pointer.top,Ze=le.pointer.right,$e=le.pointer.bottom,Oe=le.pointer.left**2,vt=le.pointer.top**2,ke=le.pointer.right**2,_t=le.pointer.bottom**2)));let Xe=Math.sqrt(Oe+vt),G=Math.sqrt(Oe+_t),tt=Math.sqrt(ke+vt),ut=Math.sqrt(ke+_t),kt=Math.abs(St-Ze)/2,Q=Math.abs(Ne-$e)/2,Vt=Math.sqrt(Oe+Q**2),tn=Math.sqrt(vt+kt**2),lt=Math.sqrt(ke+Q**2),hn=Math.sqrt(_t+kt**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(oe),(!b.axis||b.axis==="x")&&(n.style.left=Ke+(at-Ie)/Ye.x+dn+"px"),(!b.axis||b.axis==="y")&&(n.style.top=Ae+(et-ce)/Ye.y+"px"),b.grid){let ne=b.grid,Pe=b.axis,de=ne[0]*Math.round((Ke+(at-Ie))/ne[0]),Re=ne[1]*Math.round((Ae+(et-ce))/ne[1]);(!Pe||Pe==="x")&&(n.style.left=`${de}px`),(!Pe||Pe==="y")&&(n.style.top=`${Re}px`)}if(b.containment||b.containment===0){let ne=b.containment,Pe,de;if(n.options.container==="window")Pe=window.innerWidth-parseFloat(Le.width)-ne[1]-Lt.y,de=window.innerHeight-parseFloat(Le.height)-ne[2]-Lt.x;else{let Re=parseFloat(ie.borderLeftWidth)+parseFloat(ie.borderRightWidth),Ue=parseFloat(ie.borderTopWidth)+parseFloat(ie.borderBottomWidth);Pe=Et.width/Ye.x-parseFloat(Le.width)-ne[1]-Re-Lt.y,de=Et.height/Ye.y-parseFloat(Le.height)-ne[2]-Ue-Lt.x}parseFloat(n.style.left)<=ne[3]&&(n.style.left=ne[3]+"px"),parseFloat(n.style.top)<=ne[0]&&(n.style.top=ne[0]+"px"),parseFloat(n.style.left)>=Pe&&(n.style.left=Pe+"px"),parseFloat(n.style.top)>=de&&(n.style.top=de+"px")}if(b.drag.length){let ne={left:St,top:Ne,right:Ze,bottom:$e,width:parseFloat(Le.width),height:parseFloat(Le.height)};R.processCallbacks(n,b.drag,!1,ne,Qe)}if(b.snap){let ne=b.snap.sensitivity,Pe=me===document.body?window.innerWidth/8:Et.width/8,de=me===document.body?window.innerHeight/8:Et.height/8;n.snappableTo=!1,R.removeSnapAreas(),Xe<ne?b.snap.snapLeftTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-top",R.createSnapArea(n,"lt",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.left>0&&le.pointer.top>0?(n.snappableTo="left-top",R.createSnapArea(n,"lt",ne)):(n.snappableTo=!1,R.removeSnapAreas()))):G<ne?b.snap.snapLeftBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-bottom",R.createSnapArea(n,"lb",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.left>0&&le.pointer.bottom>0?(n.snappableTo="left-bottom",R.createSnapArea(n,"lb",ne)):(n.snappableTo=!1,R.removeSnapAreas()))):tt<ne?b.snap.snapRightTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-top",R.createSnapArea(n,"rt",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.right>0&&le.pointer.top>0?(n.snappableTo="right-top",R.createSnapArea(n,"rt",ne)):(n.snappableTo=!1,R.removeSnapAreas()))):ut<ne?b.snap.snapRightBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-bottom",R.createSnapArea(n,"rb",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.right>0&&le.pointer.bottom>0?(n.snappableTo="right-bottom",R.createSnapArea(n,"rb",ne)):(n.snappableTo=!1,R.removeSnapAreas()))):Ne<ne&&tn<Pe?b.snap.snapCenterTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-top",R.createSnapArea(n,"ct",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.top>0?(n.snappableTo="center-top",R.createSnapArea(n,"ct",ne)):(n.snappableTo=!1,R.removeSnapAreas()))):St<ne&&Vt<de?b.snap.snapLeftCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-center",R.createSnapArea(n,"lc",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.left>0?(n.snappableTo="left-center",R.createSnapArea(n,"lc",ne)):(n.snappableTo=!1,R.removeSnapAreas()))):Ze<ne&&lt<de?b.snap.snapRightCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-center",R.createSnapArea(n,"rc",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.right>0?(n.snappableTo="right-center",R.createSnapArea(n,"rc",ne)):(n.snappableTo=!1,R.removeSnapAreas()))):$e<ne&&hn<Pe&&b.snap.snapCenterBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-bottom",R.createSnapArea(n,"cb",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.bottom>0?(n.snappableTo="center-bottom",R.createSnapArea(n,"cb",ne)):(n.snappableTo=!1,R.removeSnapAreas())))}if(b.drop&&b.drop.dropZones){let ne=R.isIE?"msElementsFromPoint":"elementsFromPoint",Pe=document[ne](Qe.clientX,Qe.clientY);Array.isArray(Pe)||(Pe=Array.prototype.slice.call(Pe)),b.drop.dropZones.forEach(de=>{Pe.includes(de)&&(n.droppableTo=de)}),Pe.includes(n.droppableTo)||(n.droppableTo=!1)}},R.pointermove.forEach(Qe=>document.addEventListener(Qe,A)),window.addEventListener("mouseout",Y,!1)})}),R.pointerup.forEach(Fe=>{document.addEventListener(Fe,Kt),window.removeEventListener("mouseout",Y)}),f.disable&&(Me.style.pointerEvents="none")}),n},n.dragit=f=>{const y=Object.assign({},R.defaults.dragit,e.dragit),A=n.querySelectorAll(y.handles);return f==="disable"?A.forEach(b=>b.style.pointerEvents="none"):A.forEach(b=>b.style.pointerEvents="auto"),n},n.sizeit=(f={})=>{const y=new CustomEvent("jspanelresizestart",{detail:n.id}),A=new CustomEvent("jspanelresize",{detail:n.id}),b=new CustomEvent("jspanelresizestop",{detail:n.id});[y,A,b].forEach(xe=>xe.panel=n);let k={},oe,ue,U,Y,We,it;k.handles=f.handles||R.defaults.resizeit.handles,k.handles.split(",").forEach(xe=>{const Te=document.createElement("DIV");Te.className=`jsPanel-resizeit-handle jsPanel-resizeit-${xe.trim()}`,n.append(Te)});let Kt=f.aspectRatio?f.aspectRatio:!1;function Me(xe){xe.relatedTarget===null&&R.pointermove.forEach(Te=>document.removeEventListener(Te,oe,!1))}function Fe(xe){if(R.pointermove.forEach(Te=>document.removeEventListener(Te,oe,!1)),xe.target.classList&&xe.target.classList.contains("jsPanel-resizeit-handle")){let Te,Ke,Ae=xe.target.className;if(Ae.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(Te=!0),Ae.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Ke=!0),k.grid&&Array.isArray(k.grid)){k.grid.length===1&&(k.grid[1]=k.grid[0]);const ee=parseFloat(n.style.width),Ve=parseFloat(n.style.height),Ie=ee%k.grid[0],ce=Ve%k.grid[1],me=parseFloat(n.style.left),Et=parseFloat(n.style.top),ie=me%k.grid[0],Ye=Et%k.grid[1];Ie<k.grid[0]/2?n.style.width=ee-Ie+"px":n.style.width=ee+(k.grid[0]-Ie)+"px",ce<k.grid[1]/2?n.style.height=Ve-ce+"px":n.style.height=Ve+(k.grid[1]-ce)+"px",Te&&(ie<k.grid[0]/2?n.style.left=me-ie+"px":n.style.left=me+(k.grid[0]-ie)+"px"),Ke&&(Ye<k.grid[1]/2?n.style.top=Et-Ye+"px":n.style.top=Et+(k.grid[1]-Ye)+"px")}}if(ue){n.content.style.pointerEvents="inherit",ue=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let Te=n.controlbar.querySelector(".jsPanel-btn-smallify"),Ke=n.getBoundingClientRect();if(Te&&Ke.height>it+5&&(Te.style.transform="rotate(0deg)"),document.dispatchEvent(b),k.stop.length){let Ae=window.getComputedStyle(n),ee={left:parseFloat(Ae.left),top:parseFloat(Ae.top),width:parseFloat(Ae.width),height:parseFloat(Ae.height)};R.processCallbacks(n,k.stop,!1,ee,xe)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Te=>Te.style.pointerEvents="auto"),k.aspectRatio=Kt,document.removeEventListener(xe,Fe)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(xe=>{xe.style.touchAction="none",R.pointerdown.forEach(Te=>{xe.addEventListener(Te,Ke=>{if(Ke.preventDefault(),Ke.stopPropagation(),Ke.button&&Ke.button>0)return!1;let Ae=1;if(k=Object.assign({},R.defaults.resizeit,f),(k.containment||k.containment===0)&&(k.containment=R.pOcontainment(k.containment)),k.aspectRatio&&k.aspectRatio===!0&&(k.aspectRatio="panel"),R.modifier){let de=R.modifier;de.altKey?k.aspectRatio="content":de.ctrlKey?k.aspectRatio="panel":de.shiftKey&&(k.aspectRatio=!1,Ae=2)}let ee=typeof k.maxWidth=="function"?k.maxWidth():k.maxWidth||1e4,Ve=typeof k.maxHeight=="function"?k.maxHeight():k.maxHeight||1e4,Ie=typeof k.minWidth=="function"?k.minWidth():k.minWidth,ce=typeof k.minHeight=="function"?k.minHeight():k.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(de=>de.style.pointerEvents="none");const me=n.parentElement,Et=me.tagName.toLowerCase(),ie=n.getBoundingClientRect(),Ye=me.getBoundingClientRect(),dn=window.getComputedStyle(me,null),Lt=parseInt(dn.borderLeftWidth,10),Qe=parseInt(dn.borderTopWidth,10),St=dn.getPropertyValue("position"),Oe=Ke.clientX||Ke.clientX===0||Ke.touches[0].clientX,Ne=Ke.clientY||Ke.clientY===0||Ke.touches[0].clientY,vt=Oe/Ne,Ze=Ke.target.classList,ke=n.getScaleFactor(),$e=ie.width/ie.height,_t=n.content.getBoundingClientRect(),qe=_t.width/_t.height,mt=n.header.getBoundingClientRect().height,at=n.footer.getBoundingClientRect().height||0;let et=ie.left,Le=ie.top,le=1e4,Xe=1e4,G=1e4,tt=1e4;We=ie.width,it=ie.height,Et!=="body"&&(et=ie.left-Ye.left+me.scrollLeft,Le=ie.top-Ye.top+me.scrollTop),Et==="body"&&k.containment?(le=document.documentElement.clientWidth-ie.left,G=document.documentElement.clientHeight-ie.top,Xe=ie.width+ie.left,tt=ie.height+ie.top):k.containment&&(St==="static"?(le=Ye.width-ie.left+Lt,G=Ye.height+Ye.top-ie.top+Qe,Xe=ie.width+(ie.left-Ye.left)-Lt,tt=ie.height+(ie.top-Ye.top)-Qe):(le=me.clientWidth-(ie.left-Ye.left)/ke.x+Lt,G=me.clientHeight-(ie.top-Ye.top)/ke.y+Qe,Xe=(ie.width+ie.left-Ye.left)/ke.x-Lt,tt=n.clientHeight+(ie.top-Ye.top)/ke.y-Qe)),k.containment&&(Xe-=k.containment[3],tt-=k.containment[0],le-=k.containment[1],G-=k.containment[2]);const ut=window.getComputedStyle(n),kt=parseFloat(ut.width)-ie.width,Q=parseFloat(ut.height)-ie.height;let Vt=parseFloat(ut.left)-ie.left,tn=parseFloat(ut.top)-ie.top;me!==document.body&&(Vt+=Ye.left,tn+=Ye.top);let lt=parseInt(ut.borderTopWidth,10),hn=parseInt(ut.borderRightWidth,10),ne=parseInt(ut.borderBottomWidth,10),Pe=parseInt(ut.borderLeftWidth,10);oe=de=>{de.preventDefault(),ue||(document.dispatchEvent(y),k.start.length&&R.processCallbacks(n,k.start,!1,{width:We,height:it,left:et,top:Le},de),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),ie.height>it+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),ue=1,document.dispatchEvent(A);let Re=de.touches?de.touches[0].clientX:de.clientX,Ue=de.touches?de.touches[0].clientY:de.clientY,De;Ze.contains("jsPanel-resizeit-e")?(U=We+(Re-Oe)*Ae/ke.x+kt,U>=le&&(U=le),U>=ee&&(U=ee),U<=Ie&&(U=Ie),n.style.width=U+"px",Ae===2&&(n.style.left=et-(Re-Oe)+"px"),k.aspectRatio==="content"?(n.style.height=(U-hn-Pe)/qe+mt+at+lt+ne+"px",k.containment&&(De=n.overlaps(me),De.bottom<=k.containment[2]&&(n.style.height=G+"px",n.style.width=G*qe+"px"))):k.aspectRatio==="panel"&&(n.style.height=U/$e+"px",k.containment&&(De=n.overlaps(me),De.bottom<=k.containment[2]&&(n.style.height=G+"px",n.style.width=G*$e+"px")))):Ze.contains("jsPanel-resizeit-s")?(Y=it+(Ue-Ne)*Ae/ke.y+Q,Y>=G&&(Y=G),Y>=Ve&&(Y=Ve),Y<=ce&&(Y=ce),n.style.height=Y+"px",Ae===2&&(n.style.top=Le-(Ue-Ne)+"px"),k.aspectRatio==="content"?(n.style.width=(Y-mt-at-lt-ne)*qe+lt+ne+"px",k.containment&&(De=n.overlaps(me),De.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/qe+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*$e+"px",k.containment&&(De=n.overlaps(me),De.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/$e+"px")))):Ze.contains("jsPanel-resizeit-w")?(U=We+(Oe-Re)*Ae/ke.x+kt,U<=ee&&U>=Ie&&U<=Xe&&(n.style.left=et+(Re-Oe)/ke.x+Vt+"px"),U>=Xe&&(U=Xe),U>=ee&&(U=ee),U<=Ie&&(U=Ie),n.style.width=U+"px",k.aspectRatio==="content"?(n.style.height=(U-hn-Pe)/qe+mt+at+lt+ne+"px",k.containment&&(De=n.overlaps(me),De.bottom<=k.containment[2]&&(n.style.height=G+"px",n.style.width=G*qe+"px"))):k.aspectRatio==="panel"&&(n.style.height=U/$e+"px",k.containment&&(De=n.overlaps(me),De.bottom<=k.containment[2]&&(n.style.height=G+"px",n.style.width=G*$e+"px")))):Ze.contains("jsPanel-resizeit-n")?(Y=it+(Ne-Ue)*Ae/ke.y+Q,Y<=Ve&&Y>=ce&&Y<=tt&&(n.style.top=Le+(Ue-Ne)/ke.y+tn+"px"),Y>=tt&&(Y=tt),Y>=Ve&&(Y=Ve),Y<=ce&&(Y=ce),n.style.height=Y+"px",k.aspectRatio==="content"?(n.style.width=(Y-mt-at-lt-ne)*qe+lt+ne+"px",k.containment&&(De=n.overlaps(me),De.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/qe+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*$e+"px",k.containment&&(De=n.overlaps(me),De.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/$e+"px")))):Ze.contains("jsPanel-resizeit-se")?(U=We+(Re-Oe)*Ae/ke.x+kt,U>=le&&(U=le),U>=ee&&(U=ee),U<=Ie&&(U=Ie),n.style.width=U+"px",Ae===2&&(n.style.left=et-(Re-Oe)+"px"),k.aspectRatio&&(n.style.height=U/$e+"px"),Y=it+(Ue-Ne)*Ae/ke.y+Q,Y>=G&&(Y=G),Y>=Ve&&(Y=Ve),Y<=ce&&(Y=ce),n.style.height=Y+"px",Ae===2&&(n.style.top=Le-(Ue-Ne)+"px"),k.aspectRatio==="content"?(n.style.width=(Y-mt-at-lt-ne)*qe+lt+ne+"px",k.containment&&(De=n.overlaps(me),De.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/qe+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*$e+"px",k.containment&&(De=n.overlaps(me),De.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/$e+"px")))):Ze.contains("jsPanel-resizeit-sw")?(Y=it+(Ue-Ne)*Ae/ke.y+Q,Y>=G&&(Y=G),Y>=Ve&&(Y=Ve),Y<=ce&&(Y=ce),n.style.height=Y+"px",Ae===2&&(n.style.top=Le-(Ue-Ne)+"px"),k.aspectRatio&&(n.style.width=Y*$e+"px"),U=We+(Oe-Re)*Ae/ke.x+kt,U<=ee&&U>=Ie&&U<=Xe&&(n.style.left=et+(Re-Oe)/ke.x+Vt+"px"),U>=Xe&&(U=Xe),U>=ee&&(U=ee),U<=Ie&&(U=Ie),n.style.width=U+"px",k.aspectRatio==="content"?(n.style.height=(U-hn-Pe)/qe+mt+at+lt+ne+"px",k.containment&&(De=n.overlaps(me),De.bottom<=k.containment[2]&&(n.style.height=G+"px",n.style.width=G*qe+"px"))):k.aspectRatio==="panel"&&(n.style.height=U/$e+"px",k.containment&&(De=n.overlaps(me),De.bottom<=k.containment[2]&&(n.style.height=G+"px",n.style.width=G*$e+"px")))):Ze.contains("jsPanel-resizeit-ne")?(U=We+(Re-Oe)*Ae/ke.x+kt,U>=le&&(U=le),U>=ee&&(U=ee),U<=Ie&&(U=Ie),n.style.width=U+"px",Ae===2&&(n.style.left=et-(Re-Oe)+"px"),k.aspectRatio&&(n.style.height=U/$e+"px"),Y=it+(Ne-Ue)*Ae/ke.y+Q,Y<=Ve&&Y>=ce&&Y<=tt&&(n.style.top=Le+(Ue-Ne)/ke.y+tn+"px"),Y>=tt&&(Y=tt),Y>=Ve&&(Y=Ve),Y<=ce&&(Y=ce),n.style.height=Y+"px",k.aspectRatio==="content"?(n.style.width=(Y-mt-at-lt-ne)*qe+lt+ne+"px",k.containment&&(De=n.overlaps(me),De.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/qe+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*$e+"px",k.containment&&(De=n.overlaps(me),De.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/$e+"px")))):Ze.contains("jsPanel-resizeit-nw")&&(k.aspectRatio&&Ze.contains("jsPanel-resizeit-nw")&&(Re=Ue*vt,Ue=Re/vt),U=We+(Oe-Re)*Ae/ke.x+kt,U<=ee&&U>=Ie&&U<=Xe&&(n.style.left=et+(Re-Oe)/ke.x+Vt+"px"),U>=Xe&&(U=Xe),U>=ee&&(U=ee),U<=Ie&&(U=Ie),n.style.width=U+"px",k.aspectRatio&&(n.style.height=U/$e+"px"),Y=it+(Ne-Ue)*Ae/ke.y+Q,Y<=Ve&&Y>=ce&&Y<=tt&&(n.style.top=Le+(Ue-Ne)/ke.y+tn+"px"),Y>=tt&&(Y=tt),Y>=Ve&&(Y=Ve),Y<=ce&&(Y=ce),n.style.height=Y+"px",k.aspectRatio==="content"?n.style.width=(Y-mt-at-lt-ne)*qe+lt+ne+"px":k.aspectRatio==="panel"&&(n.style.width=Y*$e+"px")),window.getSelection().removeAllRanges();const Bt=window.getComputedStyle(n),Be={left:parseFloat(Bt.left),top:parseFloat(Bt.top),right:parseFloat(Bt.right),bottom:parseFloat(Bt.bottom),width:parseFloat(Bt.width),height:parseFloat(Bt.height)};k.resize.length&&R.processCallbacks(n,k.resize,!1,Be,de)},R.pointermove.forEach(de=>document.addEventListener(de,oe,!1)),window.addEventListener("mouseout",Me,!1)})}),R.pointerup.forEach(function(Te){document.addEventListener(Te,Fe),window.removeEventListener("mouseout",Me)}),f.disable&&(xe.style.pointerEvents="none")}),n},n.resizeit=f=>{const y=n.querySelectorAll(".jsPanel-resizeit-handle");return f==="disable"?y.forEach(A=>A.style.pointerEvents="none"):y.forEach(A=>A.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const f=n.getBoundingClientRect();return{x:f.width/n.offsetWidth,y:f.height/n.offsetHeight}},n.calcSizeFactors=()=>{const f=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(f.left)/(window.innerWidth-parseFloat(f.width)),n.vf=parseFloat(f.top)/(window.innerHeight-parseFloat(f.height));else if(n.parentElement){let y=n.parentElement.getBoundingClientRect();n.hf=parseFloat(f.left)/(y.width-parseFloat(f.width)),n.vf=parseFloat(f.top)/(y.height-parseFloat(f.height))}},n.saveCurrentDimensions=()=>{const f=window.getComputedStyle(n);n.currentData.width=f.width,n.currentData.height=f.height},n.saveCurrentPosition=()=>{const f=window.getComputedStyle(n);n.currentData.left=f.left,n.currentData.top=f.top},n.reposition=(...f)=>{let y=e.position,A=!0,b;return f.forEach(k=>{typeof k=="string"||typeof k=="object"?y=k:typeof k=="boolean"?A=k:typeof k=="function"&&(b=k)}),R.position(n,y),n.slaves&&n.slaves.size>0&&n.slaves.forEach(k=>k.reposition()),A&&n.saveCurrentPosition(),b&&b.call(n,n),n},n.repositionOnSnap=f=>{let y="0",A="0",b=R.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(f){case"left-top":y=b[3],A=b[0];break;case"right-top":y=-b[1],A=b[0];break;case"right-bottom":y=-b[1],A=-b[2];break;case"left-bottom":y=b[3],A=-b[2];break;case"center-top":y=b[3]/2-b[1]/2,A=b[0];break;case"center-bottom":y=b[3]/2-b[1]/2,A=-b[2];break;case"left-center":y=b[3],A=b[0]/2-b[2]/2;break;case"right-center":y=-b[1],A=b[0]/2-b[2]/2;break}R.position(n,f),R.setStyles(n,{left:`calc(${n.style.left} + ${y}px)`,top:`calc(${n.style.top} + ${A}px)`})},n.overlaps=(f,y,A)=>{let b=n.getBoundingClientRect(),k=getComputedStyle(n.parentElement),oe=n.getScaleFactor(),ue={top:0,right:0,bottom:0,left:0},U,Y=0,We=0,it=0,Kt=0;n.options.container!=="window"&&y==="paddingbox"&&(ue.top=parseInt(k.borderTopWidth,10)*oe.y,ue.right=parseInt(k.borderRightWidth,10)*oe.x,ue.bottom=parseInt(k.borderBottomWidth,10)*oe.y,ue.left=parseInt(k.borderLeftWidth,10)*oe.x),typeof f=="string"?f==="window"?U={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:f==="parent"?U=n.parentElement.getBoundingClientRect():U=document.querySelector(f).getBoundingClientRect():U=f.getBoundingClientRect(),A&&(Y=A.touches?A.touches[0].clientX:A.clientX,We=A.touches?A.touches[0].clientY:A.clientY,it=Y-U.left,Kt=We-U.top);let Me=b.left<U.right&&b.right>U.left,Fe=b.top<U.bottom&&b.bottom>U.top;return{overlaps:Me&&Fe,top:b.top-U.top-ue.top,right:U.right-b.right-ue.right,bottom:U.bottom-b.bottom-ue.bottom,left:b.left-U.left-ue.left,parentBorderWidth:ue,panelRect:b,referenceRect:U,pointer:{clientX:Y,clientY:We,left:it-ue.left,top:Kt-ue.top,right:U.width-it-ue.right,bottom:U.height-Kt-ue.bottom}}},n.setSize=()=>{if(e.panelSize){const f=R.pOsize(n,e.panelSize);n.style.width=f.width,n.style.height=f.height}else if(e.contentSize){const f=R.pOsize(n,e.contentSize);n.content.style.width=f.width,n.content.style.height=f.height,n.style.width=f.width,n.content.style.width="100%"}return n},n.resize=(...f)=>{let y=window.getComputedStyle(n),A={width:y.width,height:y.height},b=!0,k;f.forEach(U=>{typeof U=="string"?A=U:typeof U=="object"?A=Object.assign(A,U):typeof U=="boolean"?b=U:typeof U=="function"&&(k=U)});let oe=R.pOsize(n,A);n.style.width=oe.width,n.style.height=oe.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(U=>U.reposition()),b&&n.saveCurrentDimensions(),n.status="normalized";let ue=n.controlbar.querySelector(".jsPanel-btn-smallify");return ue&&(ue.style.transform="rotate(0deg)"),k&&k.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=f=>{if(f.target===window){let y=n.status,A=e.onwindowresize,b,k;if(y==="maximized"&&A)n.maximize(!1,!0);else if(n.snapped&&y!=="minimized")n.snap(n.snapped,!0);else if(y==="normalized"||y==="smallified"||y==="maximized"){let oe=typeof A;oe==="boolean"?(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",k=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=k<=0?0:k+"px"):oe==="function"?A.call(n,f,n):oe==="object"&&(A.preset===!0&&(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",k=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=k<=0?0:k+"px"),A.callback.call(n,f,n))}else y==="smallifiedmax"&&A&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(oe=>oe.reposition())}},n.setControls=(f,y)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(A=>{const b=A.className.split("-"),k=b[b.length-1];n.getAttribute(`data-btn${k}`)!=="hidden"&&(A.style.display="block")}),f.forEach(A=>{const b=n.controlbar.querySelector(A);b&&(b.style.display="none")}),y&&y.call(n,n),n),n.setControlStatus=(f,y="enable",A)=>{const b=n.controlbar.querySelector(`.jsPanel-btn-${f}`);switch(y){case"disable":n.getAttribute(`data-btn${f}`)!=="removed"&&(n.setAttribute(`data-btn${f}`,"disabled"),b.style.pointerEvents="none",b.style.opacity=.4,b.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${f}`)!=="removed"&&(n.setAttribute(`data-btn${f}`,"hidden"),b.style.display="none");break;case"show":n.getAttribute(`data-btn${f}`)!=="removed"&&(n.setAttribute(`data-btn${f}`,"enabled"),b.style.display="block",b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${f}`)!=="removed"&&(n.getAttribute(`data-btn${f}`)==="hidden"&&(b.style.display="block"),n.setAttribute(`data-btn${f}`,"enabled"),b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(b),n.setAttribute(`data-btn${f}`,"removed");break}return A&&A.call(n,n),n},n.setControlSize=f=>{const y=f.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(b=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(k=>b.classList.remove(k)),b.classList.add(`jsPanel-btn-${y}`)}),y==="xl"?n.titlebar.style.fontSize="1.5rem":y==="lg"?n.titlebar.style.fontSize="1.25rem":y==="md"?n.titlebar.style.fontSize="1.05rem":y==="sm"?n.titlebar.style.fontSize=".9rem":y==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=f=>{if(n.options.headerControls.add){let k=n.options.headerControls.add;Array.isArray(k)||(k=[k]),k.forEach(oe=>n.addControl(oe))}let y=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(k=>{let oe=k.className.match(/jsPanel-btn-[a-z\d]{3,}/i),ue=oe[0].substring(12);y.push(ue)});const b=R.pOheaderControls(e.headerControls);return e.headerControls=b,y.forEach(k=>{b[k]&&n.setControlStatus(k,b[k])}),n.setControlSize(b.size),f&&f.call(n,n),n},n.setHeaderLogo=(f,y)=>{let A=[n.headerlogo],b=document.querySelector("#"+n.id+"-min");return b&&A.push(b.querySelector(".jsPanel-headerlogo")),typeof f=="string"?f.startsWith("<")?A.forEach(k=>k.innerHTML=f):A.forEach(k=>{R.emptyNode(k);let oe=document.createElement("img");oe.src=f,k.append(oe)}):A.forEach(k=>{R.emptyNode(k),k.append(f)}),n.headerlogo.childNodes.forEach(k=>{k.nodeName&&k.nodeName==="IMG"&&k.setAttribute("draggable","false")}),y&&y.call(n,n),n},n.setHeaderRemove=f=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(y=>n.setAttribute(`data-btn${y}`,"removed")),f&&f.call(n,n),n),n.setHeaderTitle=(f,y)=>{let A=[n.headertitle],b=document.querySelector("#"+n.id+"-min");return b&&A.push(b.querySelector(".jsPanel-title")),typeof f=="string"?A.forEach(k=>k.innerHTML=f):typeof f=="function"?A.forEach(k=>{R.emptyNode(k),k.innerHTML=f()}):A.forEach(k=>{R.emptyNode(k),k.append(f)}),y&&y.call(n,n),n},n.setIconfont=(f,y=n,A)=>{if(f){let b,k;if(f==="fa"||f==="far"||f==="fal"||f==="fas"||f==="fad")b=[`${f} fa-window-close`,`${f} fa-window-maximize`,`${f} fa-window-restore`,`${f} fa-window-minimize`,`${f} fa-chevron-up`];else if(f==="material-icons")b=[f,f,f,f,f,f],k=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(f))b=[`custom-control-icon ${f[4]}`,`custom-control-icon ${f[3]}`,`custom-control-icon ${f[2]}`,`custom-control-icon ${f[1]}`,`custom-control-icon ${f[0]}`];else if(f==="bootstrap"||f==="glyphicon")b=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return y;y.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(oe=>R.emptyNode(oe).innerHTML="<span></span>"),Array.prototype.slice.call(y.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((oe,ue)=>{oe.className=b[ue],f==="material-icons"&&(oe.textContent=k[ue])})}return A&&A.call(y,y),y},n.addToolbar=(f,y,A)=>{if(f==="header"?f=n.headertoolbar:f==="footer"&&(f=n.footer),typeof y=="string")f.innerHTML=y;else if(Array.isArray(y))y.forEach(b=>{typeof b=="string"?f.innerHTML+=b:f.append(b)});else if(typeof y=="function"){let b=y.call(n,n);typeof b=="string"?f.innerHTML=b:f.append(b)}else f.append(y);return f.classList.add("active"),A&&A.call(n,n),n},n.addCloseControl=()=>{let f=document.createElement("button"),y=n.content.style.color;return f.classList.add("jsPanel-addCloseCtrl"),f.innerHTML=R.icons.close,f.style.color=y,n.options.rtl&&f.classList.add("rtl"),n.appendChild(f),R.pointerup.forEach(A=>{f.addEventListener(A,b=>{if(b.preventDefault(),b.button&&b.button>0)return!1;n.close(null,!0)})}),R.pointerdown.forEach(A=>{f.addEventListener(A,b=>b.preventDefault())}),n},n.addControl=f=>{if(!f.html)return n;f.position||(f.position=1);const y=n.controlbar.querySelectorAll(".jsPanel-btn").length;let A=document.createElement("button");A.innerHTML=f.html,A.className=`jsPanel-btn jsPanel-btn-${f.name} jsPanel-btn-${e.headerControls.size}`,A.style.color=n.header.style.color,f.position>y?n.controlbar.append(A):n.controlbar.insertBefore(A,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${f.position})`));const b=f.ariaLabel||f.name;return b&&A.setAttribute("aria-label",b),R.pointerup.forEach(k=>{A.addEventListener(k,oe=>{if(oe.preventDefault(),oe.button&&oe.button>0)return!1;f.handler.call(n,n,A)})}),f.afterInsert&&f.afterInsert.call(A,A),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(f=>{f.dir="rtl",e.rtl.lang&&(f.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),s.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),R.isIE){let f=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":f.forEach(y=>{y.style.height="34px"});break;case"xs":f.forEach(y=>{y.style.height="26px"});break;case"sm":f.forEach(y=>{y.style.height="30px"});break;case"lg":f.forEach(y=>{y.style.height="38px"});break;case"xl":f.forEach(y=>{y.style.height="42px"});break}}if(e.header==="auto-show-hide"){let f="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,f),this.setClass(n.content,f),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,R.setClass(n,f),R.remClass(n.content,f)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,R.remClass(n,f),R.setClass(n.content,f)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[f,y]of Object.entries(e.css))if(f==="panel")n.className+=` ${y}`;else{let A=n.querySelector(`.jsPanel-${f}`);A&&(A.className+=` ${y}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const f=e.contentOverflow.split(" ");f.length===1?n.content.style.overflow=f[0]:f.length===2&&(n.content.style.overflowX=f[0],n.content.style.overflowY=f[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let f=Object.assign({},R.defaultAutocloseConfig,e.autoclose);f.time&&typeof f.time=="number"&&(f.time+="ms");let y=n.progressbar.querySelector("div");y.addEventListener("animationend",A=>{A.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),f.progressbar&&(n.progressbar.classList.add("active"),f.background?R.colorNames[f.background]?n.progressbar.style.background="#"+R.colorNames[f.background]:n.progressbar.style.background=f.background:n.progressbar.classList.add("success-bg")),y.style.animation=`${f.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(p),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let f=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=f,e.dragit.snap===!0?(e.dragit.snap=R.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=f)}if(e.dragit?(["start","drag","stop"].forEach(f=>{e.dragit[f]?typeof e.dragit[f]=="function"&&(e.dragit[f]=[e.dragit[f]]):e.dragit[f]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",f=>{f.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(y=>{e.resizeit[y]?typeof e.resizeit[y]=="function"&&(e.resizeit[y]=[e.resizeit[y]]):e.resizeit[y]=[]}),n.sizeit(e.resizeit);let f;n.addEventListener("jspanelresizestart",y=>{y.panel===n&&(f=n.status)},!1),n.addEventListener("jspanelresizestop",y=>{y.panel===n&&(f==="smallified"||f==="smallifiedmax"||f==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(p),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(f=>{n.addEventListener(f,y=>{!y.target.closest(".jsPanel-btn-close")&&!y.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let f=e.onparentresize,y=typeof f,A=n.isChildpanel();if(A){const b=A.content;let k=[];n.parentResizeHandler=oe=>{if(oe.panel===A){k[0]=b.offsetWidth,k[1]=b.offsetHeight;let ue=n.status,U,Y;ue==="maximized"&&f?n.maximize():n.snapped&&ue!=="minimized"?n.snap(n.snapped,!0):ue==="normalized"||ue==="smallified"||ue==="maximized"?y==="function"?f.call(n,n,{width:k[0],height:k[1]}):y==="object"&&f.preset===!0?(U=(k[0]-n.offsetWidth)*n.hf,n.style.left=U<=0?0:U+"px",Y=(k[1]-n.offsetHeight)*n.vf,n.style.top=Y<=0?0:Y+"px",f.callback.call(n,n,{width:k[0],height:k[1]})):y==="boolean"&&(U=(k[0]-n.offsetWidth)*n.hf,n.style.left=U<=0?0:U+"px",Y=(k[1]-n.offsetHeight)*n.vf,n.style.top=Y<=0?0:Y+"px"):ue==="smallifiedmax"&&f&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(f=>f.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(f=>f.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(f=>f.call(n,n)):t.call(n,n)),document.dispatchEvent(a),n}};const Ta=/\$([A-Za-z_][A-Za-z0-9_]*)/g;function fh(...e){const t=new Set;for(const r of e)if(r)for(const s of r.matchAll(Ta))t.add(s[1]);return[...t]}function ph(e,t,r){return e.replace(Ta,(s,n)=>{const a=r[n];if(!a)return"";const c=t.data[a];return c==null?"":String(c)})}function Po(e){return e==null||e===""}function mh(e,t){const r=Object.entries(t).filter(([,s])=>s!=null&&String(s).trim()!=="");return r.length===0?e:e.filter(s=>r.every(([n,a])=>String(s.data[n]??"").toLowerCase().includes(String(a).toLowerCase())))}function gh(e,t,r=!0){if(!t)return e;const s=r?1:-1;return[...e].sort((n,a)=>{const c=n.data[t],d=a.data[t],p=Po(c),v=Po(d);if(p||v)return p===v?0:p?1:-1;const _=Number(c),$=Number(d);return!Number.isNaN(_)&&!Number.isNaN($)?(_-$)*s:String(c).localeCompare(String(d),void 0,{numeric:!0,sensitivity:"base"})*s})}function bh(e,t){return gh(mh(e,t.filters??{}),t.sortColumn,t.sortAsc??!0)}function yh(e){return!!e&&e.trim().length>0}var wh=Object.defineProperty,vh=Object.getOwnPropertyDescriptor,Gn=(e,t,r,s)=>{for(var n=s>1?void 0:s?vh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&wh(t,r,n),n};function xh(e){(Dt.instance??$h()).open(e)}function $h(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function To(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let Dt=class extends Ge{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()}}connectedCallback(){super.connectedCallback(),Dt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Dt.instance===this&&(Dt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(e){this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await Ee(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(r=>r.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((r,s)=>r.name.localeCompare(s.name))}openInstance(e){document.dispatchEvent(new CustomEvent("easydb:open-view",{detail:{instanceId:e}})),this.close()}async deleteInstance(e){await(await Ee()).store.viewInstances.remove(e),document.dispatchEvent(new CustomEvent("easydb:close-view",{detail:{instanceId:e}})),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await Ee();e.id?await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}):await t.store.viewTemplates.insert({id:To(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}),await this.refresh(),this.mode="list"}useTemplate(e){const t=fh(e.headerHtml,e.rowHtml,e.footerHtml),r={};for(const s of t)r[s]=this.autoMap(s);this.iDraft={templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:r},this.mode="instance"}autoMap(e){const t=e.toLowerCase();return this.columns.find(s=>s.field.toLowerCase()===t||(s.label??"").toLowerCase()===t)?.field??""}async createInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await Ee(),r=this.columns.filter(n=>!n.hidden).map(n=>n.field),s={id:To(),workspaceId:t.workspaceId,tableId:this.tableId,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:r,mapping:{...e.mapping},updatedAt:Date.now()};await t.store.viewInstances.insert(s),this.openInstance(s.id)}renderList(){return q`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>q`<li>
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
          ${this.templates.map(e=>q`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?q`<span class="badge">built-in</span>`:Se}
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
    `}renderTemplate(){const e=this.tDraft,t=r=>s=>{this.tDraft={...e,[r]:s.target.value}};return q`
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
    `}renderInstance(){const e=this.iDraft;return q`
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
        ${e.tokens.length===0?q`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>q`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${r=>this.iDraft={...e,mapping:{...e.mapping,[t]:r.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(r=>q`<option value=${r.field} ?selected=${e.mapping[t]===r.field}>
                          ${r.label||r.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">The view snapshots this table's current sort, filters and visible columns.</p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`New view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?q`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="button" class="primary" @click=${()=>void this.saveTemplate()}>
              Save
            </button>`:this.mode==="instance"?q`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="button" class="primary" @click=${()=>void this.createInstance()}>
                Create view
              </button>`:q`<button type="button" class="ghost" @click=${this.close}>Close</button>`;return q`
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
    `}};Dt.instance=null;Dt.styles=[Zt,Je`
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
    `];Gn([H()],Dt.prototype,"mode",2);Gn([H()],Dt.prototype,"instances",2);Gn([H()],Dt.prototype,"templates",2);Gn([H()],Dt.prototype,"tDraft",2);Gn([H()],Dt.prototype,"iDraft",2);Dt=Gn([ot("views-dialog")],Dt);var kh=Object.defineProperty,Ch=Object.getOwnPropertyDescriptor,$n=(e,t,r,s)=>{for(var n=s>1?void 0:s?Ch(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&kh(t,r,n),n};let Jt=class extends Ge{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.rows=[],this.allRows=[]}async connectedCallback(){super.connectedCallback(),await this.load()}disconnectedCallback(){super.disconnectedCallback(),this.rowsUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async load(){if(!this.viewInstanceId)return;const e=await Ee(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const r=await e.store.tables.findOne(t.tableId),s=new Map((r?.columns??[]).map(a=>[a.field,a]));this.columns=t.visibleColumns.map(a=>s.get(a)??{field:a,label:a,type:"string"});const n=e.store.rows(t.tableId);this.rowsUnsub=n.subscribe(a=>{this.allRows=a,this.recompute()}),this.allRows=await n.find(),this.recompute(),this.loaded=!0}recompute(){this.instance&&(this.rows=bh(this.allRows,this.instance))}renderTable(){return this.rows.length===0?q`<div class="vw-empty">No rows.</div>`:q`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>q`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>q`<tr>
                ${this.columns.map(t=>{const r=e.data[t.field];return q`<td>${r==null?"":String(r)}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}render(){if(!this.loaded)return q`<div class="vw-loading">Loading…</div>`;if(this.error)return q`<div class="vw-empty">${this.error}</div>`;const e=this.template;if(!e)return q`<div class="vw-empty">This view's template is missing.</div>`;if(yh(e.rowHtml)){const t=this.instance?.mapping??{},r=this.rows.map(n=>ph(e.rowHtml,n,t)).join(""),s=(e.headerHtml??"")+r+(e.footerHtml??"");return q`<div class="vw-root">${qs(s)}</div>`}return q`<div class="vw-root">
      ${e.headerHtml?.trim()?q`<div class="vw-html">${qs(e.headerHtml)}</div>`:Se}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?q`<div class="vw-html">${qs(e.footerHtml)}</div>`:Se}
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
  `;$n([Ut({type:String})],Jt.prototype,"viewInstanceId",2);$n([H()],Jt.prototype,"loaded",2);$n([H()],Jt.prototype,"error",2);$n([H()],Jt.prototype,"instance",2);$n([H()],Jt.prototype,"template",2);$n([H()],Jt.prototype,"columns",2);$n([H()],Jt.prototype,"rows",2);Jt=$n([ot("view-window")],Jt);const Eh={name:"views",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",optional:!0},Sh='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 3h8v8H3V3zm10 0h8v5h-8V3zM3 13h8v8H3v-8zm10 3h8v5h-8v-5z"/></svg>',Do="RSS Feed",_h='<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',Ah=['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;">$DESCRIPTION</div>',"</div>"].join(""),Ph="</div>";function Th(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:Sh,tooltip:"Views — display this table through a template",onClick:(t,{tableId:r})=>xh(r)}),document.addEventListener("easydb:open-view",t=>{const r=t.detail?.instanceId;r&&Rh(e,r)}),document.addEventListener("easydb:close-view",t=>{const r=t.detail?.instanceId;r&&Fh(r)})}async function Dh(e){await jh(e)}async function jh(e){const t=e.workspaceId();if(!t)return;const r=`views:seeded:rss:${t}`;if((await e.store.settings.findOne(r))?.value)return;(await e.store.viewTemplates.find({workspaceId:t})).some(a=>a.builtin&&a.name===Do)||await e.store.viewTemplates.insert({id:zh(),workspaceId:t,name:Do,headerHtml:_h,rowHtml:Ah,footerHtml:Ph,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({key:r,value:!0})}const ur=new Map;function Oh(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}async function Rh(e,t){const r=ur.get(t);if(r){try{r.front?.()}catch{}return}const s=await e.store.viewInstances.findOne(t);if(!s)return;const n=document.createElement("view-window");n.viewInstanceId=t,n.style.height="100%";const a=s.windowGeometry,c=`view-panel-${Ih(t)}`,d=a?{panelSize:`${a.w} ${a.h}`}:{contentSize:"480 520"},p=a?{my:"left-top",at:"left-top",offsetX:a.x,offsetY:a.y}:{my:"center-top",at:"center-top",offsetY:60},v=R.create({id:c,container:Oh(),headerTitle:s.name,theme:"#0891b2",content:n,...d,position:p,dragit:{containment:!1,stop:()=>void jo(e,t,c)},resizeit:{containment:!1,stop:()=>void jo(e,t,c)},onclosed:()=>{ur.delete(t)}});ur.set(t,v)}function Fh(e){const t=ur.get(e);if(t){ur.delete(e);try{t.close?.()}catch{}}}async function jo(e,t,r){const s=document.getElementById(r);if(s)try{await e.store.viewInstances.patch(t,{windowGeometry:{x:s.offsetLeft,y:s.offsetTop,w:s.offsetWidth,h:s.offsetHeight,z:0,minimized:!1,maximized:!1},updatedAt:Date.now()})}catch{}}function Ih(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function zh(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Lh=Object.freeze(Object.defineProperty({__proto__:null,init:Th,load:Dh,meta:Eh},Symbol.toStringTag,{value:"Module"})),Da=[yd,kc,Wc,Uu,Ac,Ku,Zu,ld,md,xd,jd,Id,Md,Vd,lh,Pa,Lh],Bh=Da;function ri(e){return`builtin:${e}`}async function Mh(e){const t=[];for(const r of Da)if(!await Nh(e,r)){t.push(r);try{await r.init?.(e)}catch(s){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"init",error:s})}}return async()=>{for(const r of t)try{await r.load?.(e)}catch(s){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"load",error:s})}}}async function Nh(e,t){if(!t.meta?.optional)return!1;const r=t.meta.name;return r?(await e.store.plugins.findOne(ri(r)))?.enabled===!1:!1}async function qh(e){const t=e.workspaceId();if(!t)return async()=>{};const s=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const a of s)try{const c=await e.store.plugins.findOne(a);if(c&&c.enabled===!1)continue;let d=c?.cachedBody??"";if(d)Uh(e,a,d);else{try{d=await ja(a)}catch(_){await e.store.plugins.upsert({url:a,enabled:c?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${_.message}`}),e.events.emit("plugin:error",{url:a,phase:"fetch",error:_});continue}await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),cachedBody:d})}const p=new Blob([d],{type:"text/javascript"}),v=URL.createObjectURL(p);try{const _=await import(v);await _.init?.(e),n.push({url:a,mod:_})}finally{setTimeout(()=>URL.revokeObjectURL(v),5e3)}}catch(c){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`init: ${c.message}`}),e.events.emit("plugin:error",{url:a,phase:"init",error:c})}return async()=>{for(const{url:a,mod:c}of n)try{await c.load?.(e)}catch(d){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`load: ${d.message}`}),e.events.emit("plugin:error",{url:a,phase:"load",error:d})}}}async function ja(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function Uh(e,t,r){return(async()=>{try{const s=await ja(t);if(s===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:s})}catch{}})()}let Vs=null;function Ee(){return Vs||(Vs=Hh()),Vs}async function Hh(){const e=await Hl(),t=Kl(e),r=Yl(),s=tc(),n=new Map;t.tables.subscribe(V=>{n.clear();for(const ae of V)n.set(ae.id,ae)});const a={...t.tables,insert:V=>(n.set(V.id,V),t.tables.insert(V)),upsert:V=>(n.set(V.id,V),t.tables.upsert(V))};let c=null;const d={get backend(){if(!c)throw new Error("[host] row-source ctx used before app init completed");return c.backend},events:r,settings:t.settings,workspaceId:()=>$},p=Vl({base:{...t,tables:a},providers:s.rowSources,tableById:V=>n.get(V),ctx:d}),v=Wh(),_=await p.workspaces.find();let $;if(v){const V=Yh(v),ae=_.find(ge=>ge.id===V||ge.name===v);ae?$=ae.id:$=(await p.workspaces.insert({id:V,name:v,createdAt:Date.now(),pluginUrls:[]})).id}else{const V=Kh(),ae=V?_.find(ge=>ge.id===V):void 0;ae?$=ae.id:_.length>0?$=_[0].id:$=(await p.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}Vh($);const F=sc({store:p,events:r,registries:s,workspaceId:()=>$});c=F,r.on("import:after",({source:V,tableId:ae,rowCount:ge})=>{V!=="datasette"&&F.store.tables.findOne(ae).then(be=>{F.ui.dialogs.toast(`Imported ${ge} row${ge===1?"":"s"} into "${be?.name??ae}".`,{kind:"success",title:V.toUpperCase()+" import"})})}),r.on("plugin:error",({url:V,phase:ae,error:ge})=>{F.ui.dialogs.toast(`[${ae}] ${ge?.message??String(ge)}`,{kind:"error",title:`Plugin: ${V}`})});const B=await Mh(F),M=await qh(F);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:$}),await B(),await M()}),{store:p,events:r,workspaceId:$,registries:s,api:F}}function Wh(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const Oa="eda:lastWorkspaceId";function Kh(){try{return globalThis.localStorage?.getItem(Oa)??null}catch{return null}}function Vh(e){try{globalThis.localStorage?.setItem(Oa,e)}catch{}}function Yh(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var Xh=Object.defineProperty,Gh=Object.getOwnPropertyDescriptor,hs=(e,t,r,s)=>{for(var n=s>1?void 0:s?Gh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Xh(t,r,n),n};let Vn=class extends Ge{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=rs(this.text)}catch(c){this.errorMsg=`Couldn't parse the CSV: ${c.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const s=await Ee(),n=crypto.randomUUID();await s.store.tables.insert({id:n,workspaceId:s.workspaceId,name:t,code:Qh(t),columns:r.columns,view:"table",updatedAt:Date.now()});const a=r.rows.map(c=>({id:crypto.randomUUID(),tableId:n,data:c,updatedAt:Date.now()}));await s.store.rows(n).bulkInsert(a),s.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return q`
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
            ${this.errorMsg?q`<div class="error">${this.errorMsg}</div>`:""}
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
    `];hs([H()],Vn.prototype,"name",2);hs([H()],Vn.prototype,"text",2);hs([H()],Vn.prototype,"errorMsg",2);Vn=hs([ot("csv-paste-dialog")],Vn);function Qh(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var Jh=Object.defineProperty,Zh=Object.getOwnPropertyDescriptor,mi=(e,t,r,s)=>{for(var n=s>1?void 0:s?Zh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Jh(t,r,n),n};const ef=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let Qt=class extends Ge{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),Qt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Qt.instance===this&&(Qt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:ef,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return q`
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
    `];mi([H()],Qt.prototype,"text",2);mi([H()],Qt.prototype,"columnLabel",2);Qt=mi([ot("script-editor-dialog")],Qt);var tf=Object.defineProperty,nf=Object.getOwnPropertyDescriptor,Wt=(e,t,r,s)=>{for(var n=s>1?void 0:s?nf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&tf(t,r,n),n};const rf=["string","number","boolean","date","datetime"];let Ot=class extends Ge{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.columns=[],this.errorMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(e){this.errorMsg="";const t=await Ee();if(this.rendererOptions=[...t.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=t.events.on("app:ready",()=>{this.rendererOptions=[...t.registries.cellRenderers.keys()].sort()}),e){const r=await Ee(),s=await r.store.tables.findOne(e);if(!s)return;this.mode="edit",this.editTableId=e,this.name=s.name,this.columns=s.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,origField:a.field}));const n=await r.store.rows(e).find();this.previewRows=n.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const s=[...this.columns],[n]=s.splice(e,1);s.splice(r,0,n),this.columns=s}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const s=r.getBoundingClientRect(),n=e.clientY<s.top+s.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,s=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!s)return;const n=[...this.columns],[a]=n.splice(r,1);let c=t+(r<t?-1:0);s==="after"&&(c+=1),n.splice(c,0,a),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,s)=>s===e?{...r,...t}:r)}async editScript(e){const t=Qt.instance;if(!t)return;const r=this.columns[e];if(!r)return;const s=await t.open(r.script??"",r.label||r.field);s!==null&&this.patchColumn(e,{script:s.trim()?s:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const r=new Set;for(const a of this.columns){const c=a.field.trim();if(!c){this.errorMsg="Column field names cannot be empty.";return}if(r.has(c)){this.errorMsg=`Duplicate column field: ${c}`;return}r.add(c)}const s=await Ee(),n=this.columns.map(a=>{const c={field:a.field.trim(),label:a.label.trim()||a.field.trim(),type:a.type};return a.renderer&&(c.renderer=a.renderer),a.script&&(c.script=a.script),a.max!=null&&a.max>0&&(c.max=a.max),a.unique&&(c.unique=!0),a.notnull&&(c.notnull=!0),a.hidden&&(c.hidden=!0),c});if(this.mode==="edit"&&this.editTableId){const a=this.editTableId,c=await s.store.tables.findOne(a),d=new Map((c?.columns??[]).map(v=>[v.field,v])),p=n.filter(v=>{const _=d.get(v.field);return v.unique&&!_?.unique||v.notnull&&!_?.notnull||v.max&&v.max>0&&v.max!==_?.max});if(p.length>0){const v=await s.store.rows(a).find(),_=af(p,v);if(_.length>0){this.errorMsg=`Cannot save: ${_.length} existing ${_.length===1?"row violates":"rows violate"} the new constraints.
${_.slice(0,5).join(`
`)}${_.length>5?`
…and ${_.length-5} more.`:""}`;return}}await s.store.tables.patch(a,{name:t,columns:n,updatedAt:Date.now()})}else await s.store.tables.insert({id:cf(),workspaceId:s.workspaceId,name:t,code:lf(t),columns:n,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return q`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const t of this.columns){if(!t.unique)continue;const r=new Set,s=new Set;for(const n of this.previewRows){const a=n.data[t.field];a==null||a===""||(r.has(a)&&s.add(a),r.add(a))}e.set(t.field,s)}return q`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${this.columns.map(t=>q`<th title=${t.field}>${t.label||t.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(t=>q`
                <tr>
                  ${this.columns.map(r=>{const s=t.data[r.field],n=of(r,s,e.get(r.field));return q`<td
                      class=${n?"violation":""}
                      title=${n??""}
                    >${sf(s)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return q`
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
            ${this.columns.map((r,s)=>{const n=this.dragSrcIdx===s,a=this.dropTargetIdx===s,c=a&&this.dropEdge==="before"?" drop-before":a&&this.dropEdge==="after"?" drop-after":"";return q`
                <div
                  class=${`col-row${n?" drag-source":""}${c}`}
                  @dragover=${d=>this.onRowDragOver(d,s,d.currentTarget)}
                  @dragleave=${()=>this.onRowDragLeave(s)}
                  @drop=${d=>this.onRowDrop(d,s)}
                >
                  <span
                    class="drag-handle"
                    title="Drag to reorder"
                    draggable="true"
                    @dragstart=${d=>this.onRowDragStart(d,s)}
                    @dragend=${()=>this.onRowDragEnd()}
                  >
                    <span class="mi sm">drag_indicator</span>
                  </span>
                  <input
                    type="text"
                    .value=${r.field}
                    @input=${d=>this.patchColumn(s,{field:d.target.value})}
                  />
                  <input
                    type="text"
                    .value=${r.label}
                    @input=${d=>this.patchColumn(s,{label:d.target.value})}
                  />
                  <select
                    .value=${r.type}
                    @change=${d=>this.patchColumn(s,{type:d.target.value})}
                  >
                    ${rf.map(d=>q`<option value=${d} ?selected=${d===r.type}>${d}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${d=>{const p=d.target.value;this.patchColumn(s,{renderer:p||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(d=>q`<option value=${d} ?selected=${d===r.renderer}>${d}</option>`)}
                  </select>
                  ${r.renderer==="script"?q`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(s)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:q`<span></span>`}
                  <input
                    type="number"
                    min="0"
                    placeholder="—"
                    title="Max length (strings) or max value (numbers)"
                    .value=${r.max==null?"":String(r.max)}
                    @input=${d=>{const p=d.target.value;this.patchColumn(s,{max:p===""?void 0:Number(p)})}}
                  />
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Unique"
                      .checked=${!!r.unique}
                      @change=${d=>this.patchColumn(s,{unique:d.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Not null"
                      .checked=${!!r.notnull}
                      @change=${d=>this.patchColumn(s,{notnull:d.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Visible — uncheck to hide the column without losing its data"
                      .checked=${!r.hidden}
                      @change=${d=>this.patchColumn(s,{hidden:!d.target.checked})}
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

          ${this.renameDetected()?q`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?q`<div class="error">${this.errorMsg}</div>`:""}
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
  `];Wt([H()],Ot.prototype,"mode",2);Wt([H()],Ot.prototype,"editTableId",2);Wt([H()],Ot.prototype,"name",2);Wt([H()],Ot.prototype,"columns",2);Wt([H()],Ot.prototype,"errorMsg",2);Wt([H()],Ot.prototype,"dragSrcIdx",2);Wt([H()],Ot.prototype,"dropTargetIdx",2);Wt([H()],Ot.prototype,"dropEdge",2);Wt([H()],Ot.prototype,"previewRows",2);Wt([H()],Ot.prototype,"rendererOptions",2);Ot=Wt([ot("new-table-dialog")],Ot);function sf(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function of(e,t,r){const s=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&s)return`${e.label}: empty`;if(s)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!s){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function af(e,t){const r=[];for(const s of e)if(s.notnull&&t.forEach((n,a)=>{const c=n.data[s.field];(c==null||typeof c=="string"&&c.trim()==="")&&r.push(`Row ${a+1}: ${s.label} is empty.`)}),s.max!=null&&s.max>0&&t.forEach((n,a)=>{const c=n.data[s.field];typeof c=="string"&&c.length>s.max?r.push(`Row ${a+1}: ${s.label} length ${c.length} > max ${s.max}.`):typeof c=="number"&&c>s.max&&r.push(`Row ${a+1}: ${s.label} value ${c} > max ${s.max}.`)}),s.unique){const n=new Map;t.forEach((a,c)=>{const d=a.data[s.field];d==null||d===""||(n.has(d)?r.push(`Row ${c+1}: ${s.label} duplicates row ${n.get(d)+1} ("${String(d)}").`):n.set(d,c))})}return r}function lf(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function cf(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var uf=Object.defineProperty,df=Object.getOwnPropertyDescriptor,zt=(e,t,r,s)=>{for(var n=s>1?void 0:s?df(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&uf(t,r,n),n};let Ct=class extends Ge{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.builtinNames=[],this.optionalBuiltins=[],this.dirtyBuiltins=!1,this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(){const e=await Ee(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(a=>[a.url,a]));const s=[],n=[];for(const a of Bh){const c=a.meta?.name;if(c)if(a.meta?.optional){const d=this.records.get(ri(c));n.push({name:c,...a.meta?.description?{description:a.meta.description}:{},...a.meta?.author?{author:a.meta.author}:{},enabled:d?.enabled!==!1})}else s.push(c)}this.builtinNames=s,this.optionalBuiltins=n,this.dirtyBuiltins=!1,this.addUrl="",await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(),this.refreshServerRegistry()}async refreshCatalog(){const e=new URL("/plugins/catalog.json",location.origin).toString();try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),s=Array.isArray(r.plugins)?r.plugins:[];this.catalog=s.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await Ee()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const a=await fetch(n,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const c=await a.json(),d=Array.isArray(c.plugins)?c.plugins:[];this.serverCatalog=d.map(p=>({...p,absUrl:new URL(p.url,n).toString()})),this.serverCatalogError=null}catch(a){this.serverCatalog=[],this.serverCatalogError=a.message}}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await Ee()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await Ee();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await Ee(),s=this.records.get(e);await r.store.plugins.upsert({...s??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...s,url:e,enabled:t,lastFetched:s?.lastFetched??0}))}async removePlugin(e){const t=await Ee();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await Ee(),s=ri(e),n=this.records.get(s);await r.store.plugins.upsert({...n??{url:s,lastFetched:0},url:s,enabled:t,lastFetched:n?.lastFetched??0}),this.optionalBuiltins=this.optionalBuiltins.map(a=>a.name===e?{...a,enabled:t}:a),this.dirtyBuiltins=!0}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await Ee();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const s=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:s});const n=new Blob([s],{type:"text/javascript"}),a=URL.createObjectURL(n);try{const d=await import(a);await d.init?.(t.api),await d.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(a),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const c=await t.store.plugins.find();this.records=new Map(c.map(d=>[d.url,d])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}render(){return q`
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
            ${this.catalog.length>0?q`<div class="section-h">Available from this host</div>`:""}
            ${this.catalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return q`
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
            ${this.catalogError?q`<div class="meta err">
                  Host catalog unavailable: ${this.catalogError}
                </div>`:""}

            ${this.serverCatalog.length>0||this.serverCatalogError?q`<div class="section-h">From server</div>`:""}
            ${this.serverCatalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return q`
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
            ${this.serverCatalogError?q`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            ${this.optionalBuiltins.length>0?q`<div class="section-h">Optional built-ins</div>`:""}
            ${this.optionalBuiltins.map(e=>q`
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
            ${this.builtinNames.map(e=>q`
                <div class="row builtin">
                  <span class="mi sm">extension</span>
                  <div>
                    <div>${e}</div>
                    <div class="meta">Built-in</div>
                  </div>
                  <span class="meta">always on</span>
                </div>
              `)}

            ${this.urls.length>0?q`<div class="section-h">Installed (by URL)</div>`:""}
            ${this.urls.map(e=>{const t=this.records.get(e),r=t?.lastError?" error":"",s=t?.lastFetched?new Date(t.lastFetched).toLocaleString():"never";return q`
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
    `];zt([H()],Ct.prototype,"urls",2);zt([H()],Ct.prototype,"records",2);zt([H()],Ct.prototype,"addUrl",2);zt([H()],Ct.prototype,"builtinNames",2);zt([H()],Ct.prototype,"optionalBuiltins",2);zt([H()],Ct.prototype,"dirtyBuiltins",2);zt([H()],Ct.prototype,"catalog",2);zt([H()],Ct.prototype,"catalogError",2);zt([H()],Ct.prototype,"serverCatalog",2);zt([H()],Ct.prototype,"serverCatalogError",2);zt([H()],Ct.prototype,"installing",2);Ct=zt([ot("plugin-manager-dialog")],Ct);const hf=.25,ff=4;function pf(e){return Math.min(ff,Math.max(hf,e))}function Oo(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const lr={x:0,y:0,scale:1};function Ro(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function mf(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function gf(e,t){let r={...lr};t.style.transformOrigin="0 0";const s=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`};let n="none",a={...lr},c=0,d=0,p=0,v=0,_=0,$=0;const F=(f,y)=>{const A=e.getBoundingClientRect();return{x:f-A.left,y:y-A.top}},B=f=>{if(f.touches.length===2){n="pinch",a={...r};const[y,A]=[f.touches[0],f.touches[1]];p=Ro(y,A)||1;const b=F((y.clientX+A.clientX)/2,(y.clientY+A.clientY)/2);v=(b.x-r.x)/r.scale,_=(b.y-r.y)/r.scale,f.preventDefault();return}if(f.touches.length===1&&!mf(f.target)){const y=f.timeStamp;if(y-$<300){r={...lr},s(),$=0,n="none",f.preventDefault();return}$=y,n="pan",a={...r},c=f.touches[0].clientX,d=f.touches[0].clientY}else n="none"},M=f=>{if(n==="pan"&&f.touches.length===1){const y=f.touches[0];r=Oo(a,y.clientX-c,y.clientY-d),s(),f.preventDefault()}else if(n==="pinch"&&f.touches.length>=2){const[y,A]=[f.touches[0],f.touches[1]],b=pf(a.scale*(Ro(y,A)/p)),k=F((y.clientX+A.clientX)/2,(y.clientY+A.clientY)/2);r={x:k.x-v*b,y:k.y-_*b,scale:b},s(),f.preventDefault()}},V=f=>{f.touches.length===0?n="none":f.touches.length===1&&n==="pinch"&&(n="pan",a={...r},c=f.touches[0].clientX,d=f.touches[0].clientY)};let ae=!1,ge={...lr},be=0,ze=0,se=!1;const fe=(f,y)=>{const A=e.getBoundingClientRect();return f>=A.left&&f<=A.right&&y>=A.top&&y<=A.bottom},_e=f=>{if(!ae)return;const y=f.clientX-be,A=f.clientY-ze;!se&&Math.hypot(y,A)<4||(se=!0,document.body.style.cursor="grabbing",r=Oo(ge,y,A),s(),f.preventDefault())},ye=()=>{ae&&(ae=!1,document.body.style.cursor="",window.removeEventListener("mousemove",_e,!0),window.removeEventListener("mouseup",ft,!0))};function ft(){ye()}const $t=f=>{f.button===2&&fe(f.clientX,f.clientY)&&(ae=!0,se=!1,ge={...r},be=f.clientX,ze=f.clientY,window.addEventListener("mousemove",_e,!0),window.addEventListener("mouseup",ft,!0))},wt=f=>{se&&(f.preventDefault(),se=!1)};return e.addEventListener("touchstart",B,{passive:!1}),e.addEventListener("touchmove",M,{passive:!1}),e.addEventListener("touchend",V),e.addEventListener("touchcancel",V),window.addEventListener("mousedown",$t,!0),window.addEventListener("contextmenu",wt,!0),{snapshot:()=>({...r}),reset:()=>{r={...lr},s()},restore:f=>{r={...f},s()},dispose:()=>{e.removeEventListener("touchstart",B),e.removeEventListener("touchmove",M),e.removeEventListener("touchend",V),e.removeEventListener("touchcancel",V),window.removeEventListener("mousedown",$t,!0),window.removeEventListener("contextmenu",wt,!0),ye()}}}var bf=Object.defineProperty,yf=Object.getOwnPropertyDescriptor,yr=(e,t,r,s)=>{for(var n=s>1?void 0:s?yf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&bf(t,r,n),n};let zn=class extends Ge{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return q`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return q`<input
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
    `];yr([Ut({type:String})],zn.prototype,"tableId",2);yr([H()],zn.prototype,"query",2);yr([H()],zn.prototype,"open",2);yr([Yn("input")],zn.prototype,"inputEl",2);zn=yr([ot("panel-search")],zn);var wf=Object.defineProperty,vf=Object.getOwnPropertyDescriptor,Qn=(e,t,r,s)=>{for(var n=s>1?void 0:s?vf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&wf(t,r,n),n};let vn=class extends Ge{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1}async connectedCallback(){super.connectedCallback();const e=await Ee();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(r=>r.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await Ee();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await Ee(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const s of t.columns)r[s.field]=xf(s);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}async runTableButton(e){const t=await Ee();try{await Promise.resolve(e.onClick(t.api,{tableId:this.tableId}))}catch(r){console.error(`[table-button:${e.id}]`,r)}}render(){return q`
      <button title="Add a blank row" @click=${this.addRow}>
        <span class="mi sm">add</span><span>Add row</span>
      </button>
      <button title="Edit columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span><span>Columns</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>q`<button title=${e.tooltip??e.label} @click=${()=>this.runTableButton(e)}>
              ${e.icon?q`<span class="mi sm">${e.icon}</span>`:""}
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
    `];Qn([Ut({type:String})],vn.prototype,"tableId",2);Qn([Ut({type:Boolean})],vn.prototype,"active",2);Qn([H()],vn.prototype,"rowCount",2);Qn([H()],vn.prototype,"tableButtons",2);Qn([H()],vn.prototype,"table",2);vn=Qn([ot("panel-footer")],vn);function xf(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function $f(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function kf(e){const t=document.querySelector("app-shell")?.shadowRoot,r=t?.querySelector("header"),s=t?.querySelector("footer");r&&(e.style.top=`${r.offsetHeight}px`),s&&(e.style.bottom=`${s.offsetHeight}px`)}const On=new Map,Vr=new Set,Ra=new Set;let Fo=!1,Yr=null;async function Cf(){if(Fo)return;Fo=!0;const e=await Ee(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");if(t&&r){Yr=gf(t,r);const n=()=>kf(t);n(),window.addEventListener("resize",n);const a=document.querySelector("app-shell")?.shadowRoot,c=a?.querySelector("header"),d=a?.querySelector("footer");if(typeof ResizeObserver<"u"&&(c||d)){const p=new ResizeObserver(n);c&&p.observe(c),d&&p.observe(d)}}const s=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);s.sort(Io);for(const n of s)zo(n,e);e.store.tables.subscribe(n=>{const a=n.filter(p=>p.workspaceId===e.workspaceId),c=new Set(a.map(p=>p.id));for(const[p,v]of On)if(!c.has(p)){On.delete(p),Vr.add(p),Ra.add(p);try{v.status!=="closed"&&v.close()}catch{}}const d=a.filter(p=>!On.has(p.id)).sort(Io);for(const p of d)zo(p,e)})}function Io(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const Ef=200,Sf=100,_f=720,Af=360;function Pf(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<Ef||e.h<Sf?null:{...e}}function zo(e,t){const r=`panel-${Fa(e.id)}`,s=$f(),n=Pf(e.windowGeometry),a=n?.minimized===!0,c=()=>{const y=document.createElement("data-table");return y.tableId=e.id,y.style.height="100%",y},d=a?document.createElement("div"):c();let p=a?null:d,v=e.name,_=null;const $=y=>{typeof ye.setHeaderTitle=="function"&&ye.setHeaderTitle(`${v} (${y})`)},F=()=>{_||(_=t.store.rows(e.id).subscribe(y=>$(y.length)))},B=()=>{_?.(),_=null},M=()=>{B(),ge.active=!1,p?.remove(),p=null},V=()=>{if(p)return;const y=document.getElementById(r)?.querySelector(".jsPanel-content");if(!y)return;y.replaceChildren();const A=c();y.appendChild(A),p=A,ge.active=!0,F()},ae=document.createElement("panel-search");ae.tableId=e.id;const ge=document.createElement("panel-footer");ge.tableId=e.id,ge.active=!a;let be=null,ze=!1;const se=y=>{const A=y==="maximized";A&&!ze?(be=Yr?.snapshot()??null,Yr?.reset()):!A&&ze&&(be&&Yr?.restore(be),be=null),ze=A},fe=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:Df(),_e=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:`${_f} ${Af}`},ye=R.create({id:r,container:s,headerTitle:e.name,footerToolbar:ge,theme:"primary",content:d,..._e,position:fe,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>Ys(e.id,t)},resizeit:{containment:!1,stop:()=>Ys(e.id,t)},onfronted:()=>jf(e.id,t),onbeforeclose:()=>Vr.has(e.id)?!0:((async()=>await t.api.ui.dialogs.confirm(e.source?`Remove the live table "${e.name}"? Its data stays on the Datasette server.`:`Delete table "${e.name}" and all its rows?`,"Confirm")&&(Vr.add(e.id),On.get(e.id)?.close()))(),!1),onclosed:async()=>{On.delete(e.id),Vr.delete(e.id),!Ra.delete(e.id)&&await Of(e.id,t)},onstatuschange:y=>{y.status==="minimized"?M():(y.status==="normalized"||y.status==="maximized")&&V(),se(y.status),Ys(e.id,t)}});On.set(e.id,ye);const ft=document.getElementById(r),$t=ft?.querySelector(".jsPanel-controlbar");$t&&$t.prepend(ae);const wt=ft?.querySelector(".jsPanel-titlebar");wt&&(wt.tabIndex=-1,wt.style.outline="none",wt.addEventListener("pointerdown",()=>wt.focus())),n?.maximized&&typeof ye.maximize=="function"?queueMicrotask(()=>ye.maximize?.()):n?.minimized&&typeof ye.minimize=="function"&&queueMicrotask(()=>ye.minimize?.()),t.store.tables.subscribe(y=>{const A=y.find(b=>b.id===e.id);A&&A.name!==v&&(v=A.name,_&&t.store.rows(e.id).find().then(b=>$(b.length)))}),a||F();const f=ye.close.bind(ye);ye.close=()=>(B(),f())}let Tf=0;function Df(){const e=Tf++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function Ys(e,t){const r=document.getElementById(`panel-${Fa(e)}`);if(!r)return;const s=On.get(e)?.status??"normalized";try{const a=(await t.store.tables.findOne(e))?.windowGeometry,c=s==="minimized",d=s==="maximized";let p=r.offsetLeft,v=r.offsetTop,_=r.offsetWidth,$=r.offsetHeight;(c||d)&&a&&(p=a.x,v=a.y,_=a.w,$=a.h),p<=-9e3&&(p=a?.x??40);const F={x:p,y:v,w:_,h:$,z:a?.z??0,minimized:c,maximized:d};await t.store.tables.patch(e,{windowGeometry:F,updatedAt:Date.now()})}catch{}}async function jf(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const s=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...s,z:Date.now()},updatedAt:Date.now()})}catch{}}async function Of(e,t){if(!(await t.store.tables.findOne(e))?.source){const s=t.store.rows(e),n=await s.find();await s.bulkRemove(n.map(a=>a.id))}await t.store.tables.remove(e)}function Fa(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var Rf=Object.defineProperty,Ff=Object.getOwnPropertyDescriptor,Ia=(e,t,r,s)=>{for(var n=s>1?void 0:s?Ff(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Rf(t,r,n),n};let es=class extends Ge{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await Ee();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(s=>s.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await Cf()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?q``:q`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on
      the page, or click <strong>+ New Table</strong> above.
    </div>`}};es.styles=Je`
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
  `;Ia([H()],es.prototype,"tables",2);es=Ia([ot("table-list")],es);var If=Object.defineProperty,zf=Object.getOwnPropertyDescriptor,gi=(e,t,r,s)=>{for(var n=s>1?void 0:s?zf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&If(t,r,n),n};let pr=class extends Ge{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await Ee();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const s=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(s)}async addWorkspace(){const t=await(await Ee()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return q`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>q`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
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
  `];gi([H()],pr.prototype,"workspaces",2);gi([H()],pr.prototype,"current",2);pr=gi([ot("workspace-selector")],pr);var Lo=Object.freeze,za=Object.defineProperty,Lf=Object.getOwnPropertyDescriptor,un=(e,t,r,s)=>{for(var n=s>1?void 0:s?Lf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&za(t,r,n),n},Bf=(e,t)=>Lo(za(e,"raw",{value:Lo(e.slice())})),Bo;function Mf(e){return e?e.trimStart().startsWith("<svg")?q`<span class="icon-svg">${zl(e)}</span>`:q`<span class="mi sm">${e}</span>`:""}let qt=class extends Ge{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId)},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{Mo(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!Mo(e))return;e.preventDefault();const t=await Ee(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const s of[...t.registries.dropHandlers])try{if(await s(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=e=>{this.api&&Promise.resolve(e.onClick(this.api)).catch(t=>{console.error(`[footer-button:${e.id}]`,t)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager)}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await Ee();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e))}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){const r=t==="header"||e.variant==="primary"?"primary":"slot";return q`
      <button class=${r} title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
        ${Mf(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return q(Bo||(Bo=Bf([`
      <header>
        <strong>easyDBAccess <span class="version">v0.0.47</span></strong>
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
    `])),this.headerButtons.map(e=>this.renderSlotButton(e,"header")),this.searchOpen?q`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?q`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:q`<button
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
    `];un([Yn("new-table-dialog")],qt.prototype,"dialog",2);un([Yn("csv-paste-dialog")],qt.prototype,"csvPasteDialog",2);un([Yn("plugin-manager-dialog")],qt.prototype,"pluginManagerDialog",2);un([Yn("input.search")],qt.prototype,"searchInput",2);un([H()],qt.prototype,"footerButtons",2);un([H()],qt.prototype,"headerButtons",2);un([H()],qt.prototype,"searchQuery",2);un([H()],qt.prototype,"searchOpen",2);qt=un([ot("app-shell")],qt);function Mo(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([Ee(),cl(()=>Promise.resolve().then(()=>Pa),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});
//# sourceMappingURL=index-adQP6wCp.js.map
