(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const Xa="modulepreload",Ga=function(e){return"/easydbaccess/"+e},Mi={},Qa=function(t,r,s){let n=Promise.resolve();if(r&&r.length>0){let c=function(v){return Promise.all(v.map(P=>Promise.resolve(P).then($=>({status:"fulfilled",value:$}),$=>({status:"rejected",reason:$}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=d?.nonce||d?.getAttribute("nonce");n=c(r.map(v=>{if(v=Ga(v),v in Mi)return;Mi[v]=!0;const P=v.endsWith(".css"),$=P?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${$}`))return;const O=document.createElement("link");if(O.rel=P?"stylesheet":Xa,P||(O.as="script"),O.crossOrigin="",O.href=v,p&&O.setAttribute("nonce",p),document.head.appendChild(O),P)return new Promise((B,M)=>{O.addEventListener("load",B),O.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${v}`)))})}))}function a(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return n.then(c=>{for(const d of c||[])d.status==="rejected"&&a(d.reason);return t().catch(a)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mr=globalThis,Js=Mr.ShadowRoot&&(Mr.ShadyCSS===void 0||Mr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Zs=Symbol(),Ni=new WeakMap;let Do=class{constructor(t,r,s){if(this._$cssResult$=!0,s!==Zs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Js&&t===void 0){const s=r!==void 0&&r.length===1;s&&(t=Ni.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Ni.set(r,t))}return t}toString(){return this.cssText}};const Ja=e=>new Do(typeof e=="string"?e:e+"",void 0,Zs),it=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((s,n,a)=>s+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[a+1],e[0]);return new Do(r,e,Zs)},Za=(e,t)=>{if(Js)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const s=document.createElement("style"),n=Mr.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=r.cssText,e.appendChild(s)}},qi=Js?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return Ja(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:el,defineProperty:tl,getOwnPropertyDescriptor:nl,getOwnPropertyNames:rl,getOwnPropertySymbols:sl,getPrototypeOf:il}=Object,Xr=globalThis,Ui=Xr.trustedTypes,ol=Ui?Ui.emptyScript:"",al=Xr.reactiveElementPolyfillSupport,sr=(e,t)=>e,Wr={toAttribute(e,t){switch(t){case Boolean:e=e?ol:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ei=(e,t)=>!el(e,t),Wi={attribute:!0,type:String,converter:Wr,reflect:!1,useDefault:!1,hasChanged:ei};Symbol.metadata??=Symbol("metadata"),Xr.litPropertyMetadata??=new WeakMap;let Nn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Wi){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(t,s,r);n!==void 0&&tl(this.prototype,t,n)}}static getPropertyDescriptor(t,r,s){const{get:n,set:a}=nl(this.prototype,t)??{get(){return this[r]},set(c){this[r]=c}};return{get:n,set(c){const d=n?.call(this);a?.call(this,c),this.requestUpdate(t,d,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Wi}static _$Ei(){if(this.hasOwnProperty(sr("elementProperties")))return;const t=il(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(sr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(sr("properties"))){const r=this.properties,s=[...rl(r),...sl(r)];for(const n of s)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[s,n]of r)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[r,s]of this.elementProperties){const n=this._$Eu(r,s);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const n of s)r.unshift(qi(n))}else t!==void 0&&r.push(qi(t));return r}static _$Eu(t,r){const s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const s of r.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Za(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,s){this._$AK(t,s)}_$ET(t,r){const s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(n!==void 0&&s.reflect===!0){const a=(s.converter?.toAttribute!==void 0?s.converter:Wr).toAttribute(r,s.type);this._$Em=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,r){const s=this.constructor,n=s._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const a=s.getPropertyOptions(n),c=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Wr;this._$Em=n;const d=c.fromAttribute(r,a.type);this[n]=d??this._$Ej?.get(n)??d,this._$Em=null}}requestUpdate(t,r,s,n=!1,a){if(t!==void 0){const c=this.constructor;if(n===!1&&(a=this[t]),s??=c.getPropertyOptions(t),!((s.hasChanged??ei)(a,r)||s.useDefault&&s.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(c._$Eu(t,s))))return;this.C(t,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:s,reflect:n,wrapped:a},c){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,c??r??this[t]),a!==!0||c!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s){const{wrapped:c}=a,d=this[n];c!==!0||this._$AL.has(n)||d===void 0||this.C(n,void 0,a,d)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(r)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Nn.elementStyles=[],Nn.shadowRootOptions={mode:"open"},Nn[sr("elementProperties")]=new Map,Nn[sr("finalized")]=new Map,al?.({ReactiveElement:Nn}),(Xr.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ti=globalThis,Hi=e=>e,Hr=ti.trustedTypes,Ki=Hr?Hr.createPolicy("lit-html",{createHTML:e=>e}):void 0,jo="$lit$",bn=`lit$${Math.random().toFixed(9).slice(2)}$`,Fo="?"+bn,ll=`<${Fo}>`,Dn=document,ir=()=>Dn.createComment(""),or=e=>e===null||typeof e!="object"&&typeof e!="function",ni=Array.isArray,cl=e=>ni(e)||typeof e?.[Symbol.iterator]=="function",Os=`[ 	
\f\r]`,nr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vi=/-->/g,Yi=/>/g,Sn=RegExp(`>|${Os}(?:([^\\s"'>=/]+)(${Os}*=${Os}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xi=/'/g,Gi=/"/g,Ro=/^(?:script|style|textarea|title)$/i,ul=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),U=ul(1),jn=Symbol.for("lit-noChange"),De=Symbol.for("lit-nothing"),Qi=new WeakMap,Pn=Dn.createTreeWalker(Dn,129);function Oo(e,t){if(!ni(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ki!==void 0?Ki.createHTML(t):t}const dl=(e,t)=>{const r=e.length-1,s=[];let n,a=t===2?"<svg>":t===3?"<math>":"",c=nr;for(let d=0;d<r;d++){const p=e[d];let v,P,$=-1,O=0;for(;O<p.length&&(c.lastIndex=O,P=c.exec(p),P!==null);)O=c.lastIndex,c===nr?P[1]==="!--"?c=Vi:P[1]!==void 0?c=Yi:P[2]!==void 0?(Ro.test(P[2])&&(n=RegExp("</"+P[2],"g")),c=Sn):P[3]!==void 0&&(c=Sn):c===Sn?P[0]===">"?(c=n??nr,$=-1):P[1]===void 0?$=-2:($=c.lastIndex-P[2].length,v=P[1],c=P[3]===void 0?Sn:P[3]==='"'?Gi:Xi):c===Gi||c===Xi?c=Sn:c===Vi||c===Yi?c=nr:(c=Sn,n=void 0);const B=c===Sn&&e[d+1].startsWith("/>")?" ":"";a+=c===nr?p+ll:$>=0?(s.push(v),p.slice(0,$)+jo+p.slice($)+bn+B):p+bn+($===-2?d:B)}return[Oo(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class ar{constructor({strings:t,_$litType$:r},s){let n;this.parts=[];let a=0,c=0;const d=t.length-1,p=this.parts,[v,P]=dl(t,r);if(this.el=ar.createElement(v,s),Pn.currentNode=this.el.content,r===2||r===3){const $=this.el.content.firstChild;$.replaceWith(...$.childNodes)}for(;(n=Pn.nextNode())!==null&&p.length<d;){if(n.nodeType===1){if(n.hasAttributes())for(const $ of n.getAttributeNames())if($.endsWith(jo)){const O=P[c++],B=n.getAttribute($).split(bn),M=/([.?@])?(.*)/.exec(O);p.push({type:1,index:a,name:M[2],strings:B,ctor:M[1]==="."?fl:M[1]==="?"?pl:M[1]==="@"?ml:Gr}),n.removeAttribute($)}else $.startsWith(bn)&&(p.push({type:6,index:a}),n.removeAttribute($));if(Ro.test(n.tagName)){const $=n.textContent.split(bn),O=$.length-1;if(O>0){n.textContent=Hr?Hr.emptyScript:"";for(let B=0;B<O;B++)n.append($[B],ir()),Pn.nextNode(),p.push({type:2,index:++a});n.append($[O],ir())}}}else if(n.nodeType===8)if(n.data===Fo)p.push({type:2,index:a});else{let $=-1;for(;($=n.data.indexOf(bn,$+1))!==-1;)p.push({type:7,index:a}),$+=bn.length-1}a++}}static createElement(t,r){const s=Dn.createElement("template");return s.innerHTML=t,s}}function qn(e,t,r=e,s){if(t===jn)return t;let n=s!==void 0?r._$Co?.[s]:r._$Cl;const a=or(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),a===void 0?n=void 0:(n=new a(e),n._$AT(e,r,s)),s!==void 0?(r._$Co??=[])[s]=n:r._$Cl=n),n!==void 0&&(t=qn(e,n._$AS(e,t.values),n,s)),t}class hl{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:s}=this._$AD,n=(t?.creationScope??Dn).importNode(r,!0);Pn.currentNode=n;let a=Pn.nextNode(),c=0,d=0,p=s[0];for(;p!==void 0;){if(c===p.index){let v;p.type===2?v=new cr(a,a.nextSibling,this,t):p.type===1?v=new p.ctor(a,p.name,p.strings,this,t):p.type===6&&(v=new gl(a,this,t)),this._$AV.push(v),p=s[++d]}c!==p?.index&&(a=Pn.nextNode(),c++)}return Pn.currentNode=Dn,n}p(t){let r=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,r),r+=s.strings.length-2):s._$AI(t[r])),r++}}class cr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,s,n){this.type=2,this._$AH=De,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=s,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=qn(this,t,r),or(t)?t===De||t==null||t===""?(this._$AH!==De&&this._$AR(),this._$AH=De):t!==this._$AH&&t!==jn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):cl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==De&&or(this._$AH)?this._$AA.nextSibling.data=t:this.T(Dn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=ar.createElement(Oo(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(r);else{const a=new hl(n,this),c=a.u(this.options);a.p(r),this.T(c),this._$AH=a}}_$AC(t){let r=Qi.get(t.strings);return r===void 0&&Qi.set(t.strings,r=new ar(t)),r}k(t){ni(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,n=0;for(const a of t)n===r.length?r.push(s=new cr(this.O(ir()),this.O(ir()),this,this.options)):s=r[n],s._$AI(a),n++;n<r.length&&(this._$AR(s&&s._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const s=Hi(t).nextSibling;Hi(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Gr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,s,n,a){this.type=1,this._$AH=De,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=De}_$AI(t,r=this,s,n){const a=this.strings;let c=!1;if(a===void 0)t=qn(this,t,r,0),c=!or(t)||t!==this._$AH&&t!==jn,c&&(this._$AH=t);else{const d=t;let p,v;for(t=a[0],p=0;p<a.length-1;p++)v=qn(this,d[s+p],r,p),v===jn&&(v=this._$AH[p]),c||=!or(v)||v!==this._$AH[p],v===De?t=De:t!==De&&(t+=(v??"")+a[p+1]),this._$AH[p]=v}c&&!n&&this.j(t)}j(t){t===De?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class fl extends Gr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===De?void 0:t}}class pl extends Gr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==De)}}class ml extends Gr{constructor(t,r,s,n,a){super(t,r,s,n,a),this.type=5}_$AI(t,r=this){if((t=qn(this,t,r,0)??De)===jn)return;const s=this._$AH,n=t===De&&s!==De||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==De&&(s===De||n);n&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class gl{constructor(t,r,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){qn(this,t)}}const bl=ti.litHtmlPolyfillSupport;bl?.(ar,cr),(ti.litHtmlVersions??=[]).push("3.3.3");const yl=(e,t,r)=>{const s=r?.renderBefore??t;let n=s._$litPart$;if(n===void 0){const a=r?.renderBefore??null;s._$litPart$=n=new cr(t.insertBefore(ir(),a),a,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ri=globalThis;let Qe=class extends Nn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=yl(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return jn}};Qe._$litElement$=!0,Qe.finalized=!0,ri.litElementHydrateSupport?.({LitElement:Qe});const wl=ri.litElementPolyfillSupport;wl?.({LitElement:Qe});(ri.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vl={attribute:!0,type:String,converter:Wr,reflect:!1,hasChanged:ei},xl=(e=vl,t,r)=>{const{kind:s,metadata:n}=r;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),s==="accessor"){const{name:c}=r;return{set(d){const p=t.get.call(this);t.set.call(this,d),this.requestUpdate(c,p,e,!0,d)},init(d){return d!==void 0&&this.C(c,void 0,e,d),d}}}if(s==="setter"){const{name:c}=r;return function(d){const p=this[c];t.call(this,d),this.requestUpdate(c,p,e,!0,d)}}throw Error("Unsupported decorator location: "+s)};function Gt(e){return(t,r)=>typeof r=="object"?xl(e,t,r):((s,n,a)=>{const c=n.hasOwnProperty(a);return n.constructor.createProperty(a,s),c?Object.getOwnPropertyDescriptor(n,a):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function J(e){return Gt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $l=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wn(e,t){return(r,s,n)=>{const a=c=>c.renderRoot?.querySelector(e)??null;return $l(r,s,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kl={CHILD:2},Cl=e=>(...t)=>({_$litDirective$:e,values:t});class El{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,s){this._$Ct=t,this._$AM=r,this._$Ci=s}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class qs extends El{constructor(t){if(super(t),this.it=De,t.type!==kl.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===De||t==null)return this._t=void 0,this.it=t;if(t===jn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}qs.directiveName="unsafeHTML",qs.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Us extends qs{}Us.directiveName="unsafeSVG",Us.resultType=2;const Sl=Cl(Us);var _l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nr={exports:{}},Al=Nr.exports,Ji;function Tl(){return Ji||(Ji=1,(function(e,t){(function(r,s){e.exports=s()})(Al,function(){var r=function(i,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,u){l.__proto__=u}||function(l,u){for(var h in u)Object.prototype.hasOwnProperty.call(u,h)&&(l[h]=u[h])})(i,o)},s=function(){return(s=Object.assign||function(i){for(var o,l=1,u=arguments.length;l<u;l++)for(var h in o=arguments[l])Object.prototype.hasOwnProperty.call(o,h)&&(i[h]=o[h]);return i}).apply(this,arguments)};function n(i,o,l){for(var u,h=0,m=o.length;h<m;h++)!u&&h in o||((u=u||Array.prototype.slice.call(o,0,h))[h]=o[h]);return i.concat(u||Array.prototype.slice.call(o))}var a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:_l,c=Object.keys,d=Array.isArray;function p(i,o){return typeof o!="object"||c(o).forEach(function(l){i[l]=o[l]}),i}typeof Promise>"u"||a.Promise||(a.Promise=Promise);var v=Object.getPrototypeOf,P={}.hasOwnProperty;function $(i,o){return P.call(i,o)}function O(i,o){typeof o=="function"&&(o=o(v(i))),(typeof Reflect>"u"?c:Reflect.ownKeys)(o).forEach(function(l){M(i,l,o[l])})}var B=Object.defineProperty;function M(i,o,l,u){B(i,o,p(l&&$(l,"get")&&typeof l.get=="function"?{get:l.get,set:l.set,configurable:!0}:{value:l,configurable:!0,writable:!0},u))}function K(i){return{from:function(o){return i.prototype=Object.create(o.prototype),M(i.prototype,"constructor",i),{extend:O.bind(null,i.prototype)}}}}var ae=Object.getOwnPropertyDescriptor,ge=[].slice;function be(i,o,l){return ge.call(i,o,l)}function Ie(i,o){return o(i)}function se(i){if(!i)throw new Error("Assertion Failed")}function fe(i){a.setImmediate?setImmediate(i):setTimeout(i,0)}function Ee(i,o){if(typeof o=="string"&&$(i,o))return i[o];if(!o)return i;if(typeof o!="string"){for(var l=[],u=0,h=o.length;u<h;++u){var m=Ee(i,o[u]);l.push(m)}return l}var g=o.indexOf(".");if(g!==-1){var w=i[o.substr(0,g)];return w==null?void 0:Ee(w,o.substr(g+1))}}function ye(i,o,l){if(i&&o!==void 0&&!("isFrozen"in Object&&Object.isFrozen(i)))if(typeof o!="string"&&"length"in o){se(typeof l!="string"&&"length"in l);for(var u=0,h=o.length;u<h;++u)ye(i,o[u],l[u])}else{var m,g,w=o.indexOf(".");w!==-1?(m=o.substr(0,w),(g=o.substr(w+1))===""?l===void 0?d(i)&&!isNaN(parseInt(m))?i.splice(m,1):delete i[m]:i[m]=l:ye(w=!(w=i[m])||!$(i,m)?i[m]={}:w,g,l)):l===void 0?d(i)&&!isNaN(parseInt(o))?i.splice(o,1):delete i[o]:i[o]=l}}function ft(i){var o,l={};for(o in i)$(i,o)&&(l[o]=i[o]);return l}var $t=[].concat;function wt(i){return $t.apply([],i)}var Zt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(wt([8,16,32,64].map(function(i){return["Int","Uint","Float"].map(function(o){return o+i+"Array"})}))).filter(function(i){return a[i]}),f=new Set(Zt.map(function(i){return a[i]})),y=null;function _(i){return y=new WeakMap,i=(function o(l){if(!l||typeof l!="object")return l;var u=y.get(l);if(u)return u;if(d(l)){u=[],y.set(l,u);for(var h=0,m=l.length;h<m;++h)u.push(o(l[h]))}else if(f.has(l.constructor))u=l;else{var g,w=v(l);for(g in u=w===Object.prototype?{}:Object.create(w),y.set(l,u),l)$(l,g)&&(u[g]=o(l[g]))}return u})(i),y=null,i}var b={}.toString;function k(i){return b.call(i).slice(8,-1)}var oe=typeof Symbol<"u"?Symbol.iterator:"@@iterator",ue=typeof oe=="symbol"?function(i){var o;return i!=null&&(o=i[oe])&&o.apply(i)}:function(){return null};function q(i,o){return o=i.indexOf(o),0<=o&&i.splice(o,1),0<=o}var V={};function He(i){var o,l,u,h;if(arguments.length===1){if(d(i))return i.slice();if(this===V&&typeof i=="string")return[i];if(h=ue(i)){for(l=[];!(u=h.next()).done;)l.push(u.value);return l}if(i==null)return[i];if(typeof(o=i.length)!="number")return[i];for(l=new Array(o);o--;)l[o]=i[o];return l}for(o=arguments.length,l=new Array(o);o--;)l[o]=arguments[o];return l}var st=typeof Symbol<"u"?function(i){return i[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},ke=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Ft=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(ke),Wt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Me(i,o){this.name=i,this.message=o}function Oe(i,o){return i+". Errors: "+Object.keys(o).map(function(l){return o[l].toString()}).filter(function(l,u,h){return h.indexOf(l)===u}).join(`
`)}function xe(i,o,l,u){this.failures=o,this.failedKeys=u,this.successCount=l,this.message=Oe(i,o)}function Pe(i,o){this.name="BulkError",this.failures=Object.keys(o).map(function(l){return o[l]}),this.failuresByPos=o,this.message=Oe(i,this.failures)}K(Me).from(Error).extend({toString:function(){return this.name+": "+this.message}}),K(xe).from(Me),K(Pe).from(Me);var Ke=Ft.reduce(function(i,o){return i[o]=o+"Error",i},{}),Se=Me,ee=Ft.reduce(function(i,o){var l=o+"Error";function u(h,m){this.name=l,h?typeof h=="string"?(this.message="".concat(h).concat(m?`
 `+m:""),this.inner=m||null):typeof h=="object"&&(this.message="".concat(h.name," ").concat(h.message),this.inner=h):(this.message=Wt[o]||l,this.inner=null)}return K(u).from(Se),i[o]=u,i},{});ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError;var Ve=ke.reduce(function(i,o){return i[o+"Error"]=ee[o],i},{}),ze=Ft.reduce(function(i,o){return["Syntax","Type","Range"].indexOf(o)===-1&&(i[o+"Error"]=ee[o]),i},{});function ce(){}function me(i){return i}function Et(i,o){return i==null||i===me?o:function(l){return o(i(l))}}function ie(i,o){return function(){i.apply(this,arguments),o.apply(this,arguments)}}function Ye(i,o){return i===ce?o:function(){var l=i.apply(this,arguments);l!==void 0&&(arguments[0]=l);var u=this.onsuccess,h=this.onerror;this.onsuccess=null,this.onerror=null;var m=o.apply(this,arguments);return u&&(this.onsuccess=this.onsuccess?ie(u,this.onsuccess):u),h&&(this.onerror=this.onerror?ie(h,this.onerror):h),m!==void 0?m:l}}function cn(i,o){return i===ce?o:function(){i.apply(this,arguments);var l=this.onsuccess,u=this.onerror;this.onsuccess=this.onerror=null,o.apply(this,arguments),l&&(this.onsuccess=this.onsuccess?ie(l,this.onsuccess):l),u&&(this.onerror=this.onerror?ie(u,this.onerror):u)}}function It(i,o){return i===ce?o:function(l){var u=i.apply(this,arguments);p(l,u);var h=this.onsuccess,m=this.onerror;return this.onsuccess=null,this.onerror=null,l=o.apply(this,arguments),h&&(this.onsuccess=this.onsuccess?ie(h,this.onsuccess):h),m&&(this.onerror=this.onerror?ie(m,this.onerror):m),u===void 0?l===void 0?void 0:l:p(u,l)}}function Ge(i,o){return i===ce?o:function(){return o.apply(this,arguments)!==!1&&i.apply(this,arguments)}}function St(i,o){return i===ce?o:function(){var l=i.apply(this,arguments);if(l&&typeof l.then=="function"){for(var u=this,h=arguments.length,m=new Array(h);h--;)m[h]=arguments[h];return l.then(function(){return o.apply(u,m)})}return o.apply(this,arguments)}}ze.ModifyError=xe,ze.DexieError=Me,ze.BulkError=Pe;var je=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ne(i){je=i}var vt={},Je=100,Zt=typeof Promise>"u"?[]:(function(){var i=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[i,v(i),i];var o=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[o,v(o),i]})(),ke=Zt[0],Ft=Zt[1],Zt=Zt[2],Ft=Ft&&Ft.then,$e=ke&&ke.constructor,_t=!!Zt,qe=function(i,o){et.push([i,o]),ot&&(queueMicrotask(de),ot=!1)},mt=!0,ot=!0,Ze=[],Le=[],le=me,Xe={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ce,pgp:!1,env:{},finalize:ce},X=Xe,et=[],ct=0,kt=[];function G(i){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var o=this._PSD=X;if(typeof i!="function"){if(i!==vt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&at(this,this._value))}this._state=null,this._value=null,++o.ref,(function l(u,h){try{h(function(m){if(u._state===null){if(m===u)throw new TypeError("A promise cannot be resolved with itself.");var g=u._lib&&Re();m&&typeof m.then=="function"?l(u,function(w,C){m instanceof G?m._then(w,C):m.then(w,C)}):(u._state=!0,u._value=m,un(u)),g&&Ue()}},at.bind(null,u))}catch(m){at(u,m)}})(this,i)}var Ht={get:function(){var i=X,o=mr;function l(u,h){var m=this,g=!i.global&&(i!==X||o!==mr),w=g&&!hn(),C=new G(function(S,D){ne(m,new Qt(hi(u,i,g,w),hi(h,i,g,w),S,D,i))});return this._consoleTask&&(C._consoleTask=this._consoleTask),C}return l.prototype=vt,l},set:function(i){M(this,"then",i&&i.prototype===vt?Ht:{get:function(){return i},set:Ht.set})}};function Qt(i,o,l,u,h){this.onFulfilled=typeof i=="function"?i:null,this.onRejected=typeof o=="function"?o:null,this.resolve=l,this.reject=u,this.psd=h}function at(i,o){var l,u;Le.push(o),i._state===null&&(l=i._lib&&Re(),o=le(o),i._state=!1,i._value=o,u=i,Ze.some(function(h){return h._value===u._value})||Ze.push(u),un(i),l&&Ue())}function un(i){var o=i._listeners;i._listeners=[];for(var l=0,u=o.length;l<u;++l)ne(i,o[l]);var h=i._PSD;--h.ref||h.finalize(),ct===0&&(++ct,qe(function(){--ct==0&&Ae()},[]))}function ne(i,o){if(i._state!==null){var l=i._state?o.onFulfilled:o.onRejected;if(l===null)return(i._state?o.resolve:o.reject)(i._value);++o.psd.ref,++ct,qe(_e,[l,i,o])}else i._listeners.push(o)}function _e(i,o,l){try{var u,h=o._value;!o._state&&Le.length&&(Le=[]),u=je&&o._consoleTask?o._consoleTask.run(function(){return i(h)}):i(h),o._state||Le.indexOf(h)!==-1||(function(m){for(var g=Ze.length;g;)if(Ze[--g]._value===m._value)return Ze.splice(g,1)})(o),l.resolve(u)}catch(m){l.reject(m)}finally{--ct==0&&Ae(),--l.psd.ref||l.psd.finalize()}}function de(){vn(Xe,function(){Re()&&Ue()})}function Re(){var i=mt;return ot=mt=!1,i}function Ue(){var i,o,l;do for(;0<et.length;)for(i=et,et=[],l=i.length,o=0;o<l;++o){var u=i[o];u[0].apply(null,u[1])}while(0<et.length);ot=mt=!0}function Ae(){var i=Ze;Ze=[],i.forEach(function(u){u._PSD.onunhandled.call(null,u._value,u)});for(var o=kt.slice(0),l=o.length;l;)o[--l]()}function Lt(i){return new G(vt,!1,i)}function Be(i,o){var l=X;return function(){var u=Re(),h=X;try{return fn(l,!0),i.apply(this,arguments)}catch(m){o&&o(m)}finally{fn(h,!1),u&&Ue()}}}O(G.prototype,{then:Ht,_then:function(i,o){ne(this,new Qt(null,null,i,o,X))},catch:function(i){if(arguments.length===1)return this.then(null,i);var o=i,l=arguments[1];return typeof o=="function"?this.then(null,function(u){return(u instanceof o?l:Lt)(u)}):this.then(null,function(u){return(u&&u.name===o?l:Lt)(u)})},finally:function(i){return this.then(function(o){return G.resolve(i()).then(function(){return o})},function(o){return G.resolve(i()).then(function(){return Lt(o)})})},timeout:function(i,o){var l=this;return i<1/0?new G(function(u,h){var m=setTimeout(function(){return h(new ee.Timeout(o))},i);l.then(u,h).finally(clearTimeout.bind(null,m))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&M(G.prototype,Symbol.toStringTag,"Dexie.Promise"),Xe.env=di(),O(G,{all:function(){var i=He.apply(null,arguments).map(gr);return new G(function(o,l){i.length===0&&o([]);var u=i.length;i.forEach(function(h,m){return G.resolve(h).then(function(g){i[m]=g,--u||o(i)},l)})})},resolve:function(i){return i instanceof G?i:i&&typeof i.then=="function"?new G(function(o,l){i.then(o,l)}):new G(vt,!0,i)},reject:Lt,race:function(){var i=He.apply(null,arguments).map(gr);return new G(function(o,l){i.map(function(u){return G.resolve(u).then(o,l)})})},PSD:{get:function(){return X},set:function(i){return X=i}},totalEchoes:{get:function(){return mr}},newPSD:dn,usePSD:vn,scheduler:{get:function(){return qe},set:function(i){qe=i}},rejectionMapper:{get:function(){return le},set:function(i){le=i}},follow:function(i,o){return new G(function(l,u){return dn(function(h,m){var g=X;g.unhandleds=[],g.onunhandled=m,g.finalize=ie(function(){var w,C=this;w=function(){C.unhandleds.length===0?h():m(C.unhandleds[0])},kt.push(function S(){w(),kt.splice(kt.indexOf(S),1)}),++ct,qe(function(){--ct==0&&Ae()},[])},g.finalize),i()},o,l,u)})}}),$e&&($e.allSettled&&M(G,"allSettled",function(){var i=He.apply(null,arguments).map(gr);return new G(function(o){i.length===0&&o([]);var l=i.length,u=new Array(l);i.forEach(function(h,m){return G.resolve(h).then(function(g){return u[m]={status:"fulfilled",value:g}},function(g){return u[m]={status:"rejected",reason:g}}).then(function(){return--l||o(u)})})})}),$e.any&&typeof AggregateError<"u"&&M(G,"any",function(){var i=He.apply(null,arguments).map(gr);return new G(function(o,l){i.length===0&&l(new AggregateError([]));var u=i.length,h=new Array(u);i.forEach(function(m,g){return G.resolve(m).then(function(w){return o(w)},function(w){h[g]=w,--u||l(new AggregateError(h))})})})}),$e.withResolvers&&(G.withResolvers=$e.withResolvers));var ut={awaits:0,echoes:0,id:0},Sa=0,fr=[],pr=0,mr=0,_a=0;function dn(i,o,l,u){var h=X,m=Object.create(h);return m.parent=h,m.ref=0,m.global=!1,m.id=++_a,Xe.env,m.env=_t?{Promise:G,PromiseProp:{value:G,configurable:!0,writable:!0},all:G.all,race:G.race,allSettled:G.allSettled,any:G.any,resolve:G.resolve,reject:G.reject}:{},o&&p(m,o),++h.ref,m.finalize=function(){--this.parent.ref||this.parent.finalize()},u=vn(m,i,l,u),m.ref===0&&m.finalize(),u}function zn(){return ut.id||(ut.id=++Sa),++ut.awaits,ut.echoes+=Je,ut.id}function hn(){return!!ut.awaits&&(--ut.awaits==0&&(ut.id=0),ut.echoes=ut.awaits*Je,!0)}function gr(i){return ut.echoes&&i&&i.constructor===$e?(zn(),i.then(function(o){return hn(),o},function(o){return hn(),tt(o)})):i}function Pa(){var i=fr[fr.length-1];fr.pop(),fn(i,!1)}function fn(i,o){var l,u=X;(o?!ut.echoes||pr++&&i===X:!pr||--pr&&i===X)||queueMicrotask(o?function(h){++mr,ut.echoes&&--ut.echoes!=0||(ut.echoes=ut.awaits=ut.id=0),fr.push(X),fn(h,!0)}.bind(null,i):Pa),i!==X&&(X=i,u===Xe&&(Xe.env=di()),_t&&(l=Xe.env.Promise,o=i.env,(u.global||i.global)&&(Object.defineProperty(a,"Promise",o.PromiseProp),l.all=o.all,l.race=o.race,l.resolve=o.resolve,l.reject=o.reject,o.allSettled&&(l.allSettled=o.allSettled),o.any&&(l.any=o.any))))}function di(){var i=a.Promise;return _t?{Promise:i,PromiseProp:Object.getOwnPropertyDescriptor(a,"Promise"),all:i.all,race:i.race,allSettled:i.allSettled,any:i.any,resolve:i.resolve,reject:i.reject}:{}}function vn(i,o,l,u,h){var m=X;try{return fn(i,!0),o(l,u,h)}finally{fn(m,!1)}}function hi(i,o,l,u){return typeof i!="function"?i:function(){var h=X;l&&zn(),fn(o,!0);try{return i.apply(this,arguments)}finally{fn(h,!1),u&&queueMicrotask(hn)}}}function as(i){Promise===$e&&ut.echoes===0?pr===0?i():enqueueNativeMicroTask(i):setTimeout(i,0)}(""+Ft).indexOf("[native code]")===-1&&(zn=hn=ce);var tt=G.reject,xn="￿",Jt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",fi="String expected.",In=[],br="__dbnames",ls="readonly",cs="readwrite";function $n(i,o){return i?o?function(){return i.apply(this,arguments)&&o.apply(this,arguments)}:i:o}var pi={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function yr(i){return typeof i!="string"||/\./.test(i)?function(o){return o}:function(o){return o[i]===void 0&&i in o&&delete(o=_(o))[i],o}}function mi(){throw ee.Type()}function Ce(i,o){try{var l=gi(i),u=gi(o);if(l!==u)return l==="Array"?1:u==="Array"?-1:l==="binary"?1:u==="binary"?-1:l==="string"?1:u==="string"?-1:l==="Date"?1:u!=="Date"?NaN:-1;switch(l){case"number":case"Date":case"string":return o<i?1:i<o?-1:0;case"binary":return(function(h,m){for(var g=h.length,w=m.length,C=g<w?g:w,S=0;S<C;++S)if(h[S]!==m[S])return h[S]<m[S]?-1:1;return g===w?0:g<w?-1:1})(bi(i),bi(o));case"Array":return(function(h,m){for(var g=h.length,w=m.length,C=g<w?g:w,S=0;S<C;++S){var D=Ce(h[S],m[S]);if(D!==0)return D}return g===w?0:g<w?-1:1})(i,o)}}catch{}return NaN}function gi(i){var o=typeof i;return o!="object"?o:ArrayBuffer.isView(i)?"binary":(i=k(i),i==="ArrayBuffer"?"binary":i)}function bi(i){return i instanceof Uint8Array?i:ArrayBuffer.isView(i)?new Uint8Array(i.buffer,i.byteOffset,i.byteLength):new Uint8Array(i)}var yi=(We.prototype._trans=function(i,o,l){var u=this._tx||X.trans,h=this.name,m=je&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(i==="readonly"?"read":"write"," ").concat(this.name));function g(S,D,x){if(!x.schema[h])throw new ee.NotFound("Table "+h+" not part of transaction");return o(x.idbtrans,x)}var w=Re();try{var C=u&&u.db._novip===this.db._novip?u===X.trans?u._promise(i,g,l):dn(function(){return u._promise(i,g,l)},{trans:u,transless:X.transless||X}):(function S(D,x,F,E){if(D.idbdb&&(D._state.openComplete||X.letThrough||D._vip)){var T=D._createTransaction(x,F,D._dbSchema);try{T.create(),D._state.PR1398_maxLoop=3}catch(j){return j.name===Ke.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return S(D,x,F,E)})):tt(j)}return T._promise(x,function(j,A){return dn(function(){return X.trans=T,E(j,A,T)})}).then(function(j){if(x==="readwrite")try{T.idbtrans.commit()}catch{}return x==="readonly"?j:T._completion.then(function(){return j})})}if(D._state.openComplete)return tt(new ee.DatabaseClosed(D._state.dbOpenError));if(!D._state.isBeingOpened){if(!D._state.autoOpen)return tt(new ee.DatabaseClosed);D.open().catch(ce)}return D._state.dbReadyPromise.then(function(){return S(D,x,F,E)})})(this.db,i,[this.name],g);return m&&(C._consoleTask=m,C=C.catch(function(S){return console.trace(S),tt(S)})),C}finally{w&&Ue()}},We.prototype.get=function(i,o){var l=this;return i&&i.constructor===Object?this.where(i).first(o):i==null?tt(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(u){return l.core.get({trans:u,key:i}).then(function(h){return l.hook.reading.fire(h)})}).then(o)},We.prototype.where=function(i){if(typeof i=="string")return new this.db.WhereClause(this,i);if(d(i))return new this.db.WhereClause(this,"[".concat(i.join("+"),"]"));var o=c(i);if(o.length===1)return this.where(o[0]).equals(i[o[0]]);var l=this.schema.indexes.concat(this.schema.primKey).filter(function(w){if(w.compound&&o.every(function(S){return 0<=w.keyPath.indexOf(S)})){for(var C=0;C<o.length;++C)if(o.indexOf(w.keyPath[C])===-1)return!1;return!0}return!1}).sort(function(w,C){return w.keyPath.length-C.keyPath.length})[0];if(l&&this.db._maxKey!==xn){var m=l.keyPath.slice(0,o.length);return this.where(m).equals(m.map(function(C){return i[C]}))}!l&&je&&console.warn("The query ".concat(JSON.stringify(i)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(o.join("+"),"]"));var u=this.schema.idxByName;function h(w,C){return Ce(w,C)===0}var g=o.reduce(function(x,C){var S=x[0],D=x[1],x=u[C],F=i[C];return[S||x,S||!x?$n(D,x&&x.multi?function(E){return E=Ee(E,C),d(E)&&E.some(function(T){return h(F,T)})}:function(E){return h(F,Ee(E,C))}):D]},[null,null]),m=g[0],g=g[1];return m?this.where(m.name).equals(i[m.keyPath]).filter(g):l?this.filter(g):this.where(o).equals("")},We.prototype.filter=function(i){return this.toCollection().and(i)},We.prototype.count=function(i){return this.toCollection().count(i)},We.prototype.offset=function(i){return this.toCollection().offset(i)},We.prototype.limit=function(i){return this.toCollection().limit(i)},We.prototype.each=function(i){return this.toCollection().each(i)},We.prototype.toArray=function(i){return this.toCollection().toArray(i)},We.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},We.prototype.orderBy=function(i){return new this.db.Collection(new this.db.WhereClause(this,d(i)?"[".concat(i.join("+"),"]"):i))},We.prototype.reverse=function(){return this.toCollection().reverse()},We.prototype.mapToClass=function(i){var o,l=this.db,u=this.name;function h(){return o!==null&&o.apply(this,arguments)||this}(this.schema.mappedClass=i).prototype instanceof mi&&((function(C,S){if(typeof S!="function"&&S!==null)throw new TypeError("Class extends value "+String(S)+" is not a constructor or null");function D(){this.constructor=C}r(C,S),C.prototype=S===null?Object.create(S):(D.prototype=S.prototype,new D)})(h,o=i),Object.defineProperty(h.prototype,"db",{get:function(){return l},enumerable:!1,configurable:!0}),h.prototype.table=function(){return u},i=h);for(var m=new Set,g=i.prototype;g;g=v(g))Object.getOwnPropertyNames(g).forEach(function(C){return m.add(C)});function w(C){if(!C)return C;var S,D=Object.create(i.prototype);for(S in C)if(!m.has(S))try{D[S]=C[S]}catch{}return D}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=w,this.hook("reading",w),i},We.prototype.defineClass=function(){return this.mapToClass(function(i){p(this,i)})},We.prototype.add=function(i,o){var l=this,u=this.schema.primKey,h=u.auto,m=u.keyPath,g=i;return m&&h&&(g=yr(m)(i)),this._trans("readwrite",function(w){return l.core.mutate({trans:w,type:"add",keys:o!=null?[o]:null,values:[g]})}).then(function(w){return w.numFailures?G.reject(w.failures[0]):w.lastResult}).then(function(w){if(m)try{ye(i,m,w)}catch{}return w})},We.prototype.update=function(i,o){return typeof i!="object"||d(i)?this.where(":id").equals(i).modify(o):(i=Ee(i,this.schema.primKey.keyPath),i===void 0?tt(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(i).modify(o))},We.prototype.put=function(i,o){var l=this,u=this.schema.primKey,h=u.auto,m=u.keyPath,g=i;return m&&h&&(g=yr(m)(i)),this._trans("readwrite",function(w){return l.core.mutate({trans:w,type:"put",values:[g],keys:o!=null?[o]:null})}).then(function(w){return w.numFailures?G.reject(w.failures[0]):w.lastResult}).then(function(w){if(m)try{ye(i,m,w)}catch{}return w})},We.prototype.delete=function(i){var o=this;return this._trans("readwrite",function(l){return o.core.mutate({trans:l,type:"delete",keys:[i]})}).then(function(l){return l.numFailures?G.reject(l.failures[0]):void 0})},We.prototype.clear=function(){var i=this;return this._trans("readwrite",function(o){return i.core.mutate({trans:o,type:"deleteRange",range:pi})}).then(function(o){return o.numFailures?G.reject(o.failures[0]):void 0})},We.prototype.bulkGet=function(i){var o=this;return this._trans("readonly",function(l){return o.core.getMany({keys:i,trans:l}).then(function(u){return u.map(function(h){return o.hook.reading.fire(h)})})})},We.prototype.bulkAdd=function(i,o,l){var u=this,h=Array.isArray(o)?o:void 0,m=(l=l||(h?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(g){var S=u.schema.primKey,w=S.auto,S=S.keyPath;if(S&&h)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(h&&h.length!==i.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var C=i.length,S=S&&w?i.map(yr(S)):i;return u.core.mutate({trans:g,type:"add",keys:h,values:S,wantResults:m}).then(function(T){var x=T.numFailures,F=T.results,E=T.lastResult,T=T.failures;if(x===0)return m?F:E;throw new Pe("".concat(u.name,".bulkAdd(): ").concat(x," of ").concat(C," operations failed"),T)})})},We.prototype.bulkPut=function(i,o,l){var u=this,h=Array.isArray(o)?o:void 0,m=(l=l||(h?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(g){var S=u.schema.primKey,w=S.auto,S=S.keyPath;if(S&&h)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(h&&h.length!==i.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var C=i.length,S=S&&w?i.map(yr(S)):i;return u.core.mutate({trans:g,type:"put",keys:h,values:S,wantResults:m}).then(function(T){var x=T.numFailures,F=T.results,E=T.lastResult,T=T.failures;if(x===0)return m?F:E;throw new Pe("".concat(u.name,".bulkPut(): ").concat(x," of ").concat(C," operations failed"),T)})})},We.prototype.bulkUpdate=function(i){var o=this,l=this.core,u=i.map(function(g){return g.key}),h=i.map(function(g){return g.changes}),m=[];return this._trans("readwrite",function(g){return l.getMany({trans:g,keys:u,cache:"clone"}).then(function(w){var C=[],S=[];i.forEach(function(x,F){var E=x.key,T=x.changes,j=w[F];if(j){for(var A=0,z=Object.keys(T);A<z.length;A++){var I=z[A],L=T[I];if(I===o.schema.primKey.keyPath){if(Ce(L,E)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else ye(j,I,L)}m.push(F),C.push(E),S.push(j)}});var D=C.length;return l.mutate({trans:g,type:"put",keys:C,values:S,updates:{keys:u,changeSpecs:h}}).then(function(x){var F=x.numFailures,E=x.failures;if(F===0)return D;for(var T=0,j=Object.keys(E);T<j.length;T++){var A,z=j[T],I=m[Number(z)];I!=null&&(A=E[z],delete E[z],E[I]=A)}throw new Pe("".concat(o.name,".bulkUpdate(): ").concat(F," of ").concat(D," operations failed"),E)})})})},We.prototype.bulkDelete=function(i){var o=this,l=i.length;return this._trans("readwrite",function(u){return o.core.mutate({trans:u,type:"delete",keys:i})}).then(function(g){var h=g.numFailures,m=g.lastResult,g=g.failures;if(h===0)return m;throw new Pe("".concat(o.name,".bulkDelete(): ").concat(h," of ").concat(l," operations failed"),g)})},We);function We(){}function Vn(i){function o(g,w){if(w){for(var C=arguments.length,S=new Array(C-1);--C;)S[C-1]=arguments[C];return l[g].subscribe.apply(null,S),i}if(typeof g=="string")return l[g]}var l={};o.addEventType=m;for(var u=1,h=arguments.length;u<h;++u)m(arguments[u]);return o;function m(g,w,C){if(typeof g!="object"){var S;w=w||Ge;var D={subscribers:[],fire:C=C||ce,subscribe:function(x){D.subscribers.indexOf(x)===-1&&(D.subscribers.push(x),D.fire=w(D.fire,x))},unsubscribe:function(x){D.subscribers=D.subscribers.filter(function(F){return F!==x}),D.fire=D.subscribers.reduce(w,C)}};return l[g]=o[g]=D}c(S=g).forEach(function(x){var F=S[x];if(d(F))m(x,S[x][0],S[x][1]);else{if(F!=="asap")throw new ee.InvalidArgument("Invalid event config");var E=m(x,me,function(){for(var T=arguments.length,j=new Array(T);T--;)j[T]=arguments[T];E.subscribers.forEach(function(A){fe(function(){A.apply(null,j)})})})}})}}function Yn(i,o){return K(o).from({prototype:i}),o}function Ln(i,o){return!(i.filter||i.algorithm||i.or)&&(o?i.justLimit:!i.replayFilter)}function us(i,o){i.filter=$n(i.filter,o)}function ds(i,o,l){var u=i.replayFilter;i.replayFilter=u?function(){return $n(u(),o())}:o,i.justLimit=l&&!u}function wr(i,o){if(i.isPrimKey)return o.primaryKey;var l=o.getIndexByKeyPath(i.index);if(!l)throw new ee.Schema("KeyPath "+i.index+" on object store "+o.name+" is not indexed");return l}function wi(i,o,l){var u=wr(i,o.schema);return o.openCursor({trans:l,values:!i.keysOnly,reverse:i.dir==="prev",unique:!!i.unique,query:{index:u,range:i.range}})}function vr(i,o,l,u){var h=i.replayFilter?$n(i.filter,i.replayFilter()):i.filter;if(i.or){var m={},g=function(w,C,S){var D,x;h&&!h(C,S,function(F){return C.stop(F)},function(F){return C.fail(F)})||((x=""+(D=C.primaryKey))=="[object ArrayBuffer]"&&(x=""+new Uint8Array(D)),$(m,x)||(m[x]=!0,o(w,C,S)))};return Promise.all([i.or._iterate(g,l),vi(wi(i,u,l),i.algorithm,g,!i.keysOnly&&i.valueMapper)])}return vi(wi(i,u,l),$n(i.algorithm,h),o,!i.keysOnly&&i.valueMapper)}function vi(i,o,l,u){var h=Be(u?function(m,g,w){return l(u(m),g,w)}:l);return i.then(function(m){if(m)return m.start(function(){var g=function(){return m.continue()};o&&!o(m,function(w){return g=w},function(w){m.stop(w),g=ce},function(w){m.fail(w),g=ce})||h(m.value,m,function(w){return g=w}),g()})})}var Zt=Symbol(),Xn=(xi.prototype.execute=function(i){if(this.add!==void 0){var o=this.add;if(d(o))return n(n([],d(i)?i:[],!0),o).sort();if(typeof o=="number")return(Number(i)||0)+o;if(typeof o=="bigint")try{return BigInt(i)+o}catch{return BigInt(0)+o}throw new TypeError("Invalid term ".concat(o))}if(this.remove!==void 0){var l=this.remove;if(d(l))return d(i)?i.filter(function(u){return!l.includes(u)}).sort():[];if(typeof l=="number")return Number(i)-l;if(typeof l=="bigint")try{return BigInt(i)-l}catch{return BigInt(0)-l}throw new TypeError("Invalid subtrahend ".concat(l))}return o=(o=this.replacePrefix)===null||o===void 0?void 0:o[0],o&&typeof i=="string"&&i.startsWith(o)?this.replacePrefix[1]+i.substring(o.length):i},xi);function xi(i){Object.assign(this,i)}var Aa=(Te.prototype._read=function(i,o){var l=this._ctx;return l.error?l.table._trans(null,tt.bind(null,l.error)):l.table._trans("readonly",i).then(o)},Te.prototype._write=function(i){var o=this._ctx;return o.error?o.table._trans(null,tt.bind(null,o.error)):o.table._trans("readwrite",i,"locked")},Te.prototype._addAlgorithm=function(i){var o=this._ctx;o.algorithm=$n(o.algorithm,i)},Te.prototype._iterate=function(i,o){return vr(this._ctx,i,o,this._ctx.table.core)},Te.prototype.clone=function(i){var o=Object.create(this.constructor.prototype),l=Object.create(this._ctx);return i&&p(l,i),o._ctx=l,o},Te.prototype.raw=function(){return this._ctx.valueMapper=null,this},Te.prototype.each=function(i){var o=this._ctx;return this._read(function(l){return vr(o,i,l,o.table.core)})},Te.prototype.count=function(i){var o=this;return this._read(function(l){var u=o._ctx,h=u.table.core;if(Ln(u,!0))return h.count({trans:l,query:{index:wr(u,h.schema),range:u.range}}).then(function(g){return Math.min(g,u.limit)});var m=0;return vr(u,function(){return++m,!1},l,h).then(function(){return m})}).then(i)},Te.prototype.sortBy=function(i,o){var l=i.split(".").reverse(),u=l[0],h=l.length-1;function m(C,S){return S?m(C[l[S]],S-1):C[u]}var g=this._ctx.dir==="next"?1:-1;function w(C,S){return Ce(m(C,h),m(S,h))*g}return this.toArray(function(C){return C.sort(w)}).then(o)},Te.prototype.toArray=function(i){var o=this;return this._read(function(l){var u=o._ctx;if(u.dir==="next"&&Ln(u,!0)&&0<u.limit){var h=u.valueMapper,m=wr(u,u.table.core.schema);return u.table.core.query({trans:l,limit:u.limit,values:!0,query:{index:m,range:u.range}}).then(function(w){return w=w.result,h?w.map(h):w})}var g=[];return vr(u,function(w){return g.push(w)},l,u.table.core).then(function(){return g})},i)},Te.prototype.offset=function(i){var o=this._ctx;return i<=0||(o.offset+=i,Ln(o)?ds(o,function(){var l=i;return function(u,h){return l===0||(l===1?--l:h(function(){u.advance(l),l=0}),!1)}}):ds(o,function(){var l=i;return function(){return--l<0}})),this},Te.prototype.limit=function(i){return this._ctx.limit=Math.min(this._ctx.limit,i),ds(this._ctx,function(){var o=i;return function(l,u,h){return--o<=0&&u(h),0<=o}},!0),this},Te.prototype.until=function(i,o){return us(this._ctx,function(l,u,h){return!i(l.value)||(u(h),o)}),this},Te.prototype.first=function(i){return this.limit(1).toArray(function(o){return o[0]}).then(i)},Te.prototype.last=function(i){return this.reverse().first(i)},Te.prototype.filter=function(i){var o;return us(this._ctx,function(l){return i(l.value)}),(o=this._ctx).isMatch=$n(o.isMatch,i),this},Te.prototype.and=function(i){return this.filter(i)},Te.prototype.or=function(i){return new this.db.WhereClause(this._ctx.table,i,this)},Te.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Te.prototype.desc=function(){return this.reverse()},Te.prototype.eachKey=function(i){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){i(u.key,u)})},Te.prototype.eachUniqueKey=function(i){return this._ctx.unique="unique",this.eachKey(i)},Te.prototype.eachPrimaryKey=function(i){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){i(u.primaryKey,u)})},Te.prototype.keys=function(i){var o=this._ctx;o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,h){l.push(h.key)}).then(function(){return l}).then(i)},Te.prototype.primaryKeys=function(i){var o=this._ctx;if(o.dir==="next"&&Ln(o,!0)&&0<o.limit)return this._read(function(u){var h=wr(o,o.table.core.schema);return o.table.core.query({trans:u,values:!1,limit:o.limit,query:{index:h,range:o.range}})}).then(function(u){return u.result}).then(i);o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,h){l.push(h.primaryKey)}).then(function(){return l}).then(i)},Te.prototype.uniqueKeys=function(i){return this._ctx.unique="unique",this.keys(i)},Te.prototype.firstKey=function(i){return this.limit(1).keys(function(o){return o[0]}).then(i)},Te.prototype.lastKey=function(i){return this.reverse().firstKey(i)},Te.prototype.distinct=function(){var i=this._ctx,i=i.index&&i.table.schema.idxByName[i.index];if(!i||!i.multi)return this;var o={};return us(this._ctx,function(h){var u=h.primaryKey.toString(),h=$(o,u);return o[u]=!0,!h}),this},Te.prototype.modify=function(i){var o=this,l=this._ctx;return this._write(function(u){var h,m,g;g=typeof i=="function"?i:(h=c(i),m=h.length,function(A){for(var z=!1,I=0;I<m;++I){var L=h[I],N=i[L],W=Ee(A,L);N instanceof Xn?(ye(A,L,N.execute(W)),z=!0):W!==N&&(ye(A,L,N),z=!0)}return z});var w=l.table.core,x=w.schema.primaryKey,C=x.outbound,S=x.extractKey,D=200,x=o.db._options.modifyChunkSize;x&&(D=typeof x=="object"?x[w.name]||x["*"]||200:x);function F(A,L){var I=L.failures,L=L.numFailures;T+=A-L;for(var N=0,W=c(I);N<W.length;N++){var Z=W[N];E.push(I[Z])}}var E=[],T=0,j=[];return o.clone().primaryKeys().then(function(A){function z(L){var N=Math.min(D,A.length-L);return w.getMany({trans:u,keys:A.slice(L,L+N),cache:"immutable"}).then(function(W){for(var Z=[],H=[],Y=C?[]:null,te=[],Q=0;Q<N;++Q){var re=W[Q],pe={value:_(re),primKey:A[L+Q]};g.call(pe,pe.value,pe)!==!1&&(pe.value==null?te.push(A[L+Q]):C||Ce(S(re),S(pe.value))===0?(H.push(pe.value),C&&Y.push(A[L+Q])):(te.push(A[L+Q]),Z.push(pe.value)))}return Promise.resolve(0<Z.length&&w.mutate({trans:u,type:"add",values:Z}).then(function(we){for(var ve in we.failures)te.splice(parseInt(ve),1);F(Z.length,we)})).then(function(){return(0<H.length||I&&typeof i=="object")&&w.mutate({trans:u,type:"put",keys:Y,values:H,criteria:I,changeSpec:typeof i!="function"&&i,isAdditionalChunk:0<L}).then(function(we){return F(H.length,we)})}).then(function(){return(0<te.length||I&&i===hs)&&w.mutate({trans:u,type:"delete",keys:te,criteria:I,isAdditionalChunk:0<L}).then(function(we){return F(te.length,we)})}).then(function(){return A.length>L+N&&z(L+D)})})}var I=Ln(l)&&l.limit===1/0&&(typeof i!="function"||i===hs)&&{index:l.index,range:l.range};return z(0).then(function(){if(0<E.length)throw new xe("Error modifying one or more objects",E,T,j);return A.length})})})},Te.prototype.delete=function(){var i=this._ctx,o=i.range;return Ln(i)&&(i.isPrimKey||o.type===3)?this._write(function(l){var u=i.table.core.schema.primaryKey,h=o;return i.table.core.count({trans:l,query:{index:u,range:h}}).then(function(m){return i.table.core.mutate({trans:l,type:"deleteRange",range:h}).then(function(g){var w=g.failures;if(g.lastResult,g.results,g=g.numFailures,g)throw new xe("Could not delete some values",Object.keys(w).map(function(C){return w[C]}),m-g);return m-g})})}):this.modify(hs)},Te);function Te(){}var hs=function(i,o){return o.value=null};function Ta(i,o){return i<o?-1:i===o?0:1}function Da(i,o){return o<i?-1:i===o?0:1}function Pt(i,o,l){return i=i instanceof ki?new i.Collection(i):i,i._ctx.error=new(l||TypeError)(o),i}function Bn(i){return new i.Collection(i,function(){return $i("")}).limit(0)}function xr(i,o,l,u){var h,m,g,w,C,S,D,x=l.length;if(!l.every(function(T){return typeof T=="string"}))return Pt(i,fi);function F(T){h=T==="next"?function(A){return A.toUpperCase()}:function(A){return A.toLowerCase()},m=T==="next"?function(A){return A.toLowerCase()}:function(A){return A.toUpperCase()},g=T==="next"?Ta:Da;var j=l.map(function(A){return{lower:m(A),upper:h(A)}}).sort(function(A,z){return g(A.lower,z.lower)});w=j.map(function(A){return A.upper}),C=j.map(function(A){return A.lower}),D=(S=T)==="next"?"":u}F("next"),i=new i.Collection(i,function(){return pn(w[0],C[x-1]+u)}),i._ondirectionchange=function(T){F(T)};var E=0;return i._addAlgorithm(function(T,j,A){var z=T.key;if(typeof z!="string")return!1;var I=m(z);if(o(I,C,E))return!0;for(var L=null,N=E;N<x;++N){var W=(function(Z,H,Y,te,Q,re){for(var pe=Math.min(Z.length,te.length),we=-1,ve=0;ve<pe;++ve){var At=H[ve];if(At!==te[ve])return Q(Z[ve],Y[ve])<0?Z.substr(0,ve)+Y[ve]+Y.substr(ve+1):Q(Z[ve],te[ve])<0?Z.substr(0,ve)+te[ve]+Y.substr(ve+1):0<=we?Z.substr(0,we)+H[we]+Y.substr(we+1):null;Q(Z[ve],At)<0&&(we=ve)}return pe<te.length&&re==="next"?Z+Y.substr(Z.length):pe<Z.length&&re==="prev"?Z.substr(0,Y.length):we<0?null:Z.substr(0,we)+te[we]+Y.substr(we+1)})(z,I,w[N],C[N],g,S);W===null&&L===null?E=N+1:(L===null||0<g(L,W))&&(L=W)}return j(L!==null?function(){T.continue(L+D)}:A),!1}),i}function pn(i,o,l,u){return{type:2,lower:i,upper:o,lowerOpen:l,upperOpen:u}}function $i(i){return{type:1,lower:i,upper:i}}var ki=(Object.defineProperty(dt.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),dt.prototype.between=function(i,o,l,u){l=l!==!1,u=u===!0;try{return 0<this._cmp(i,o)||this._cmp(i,o)===0&&(l||u)&&(!l||!u)?Bn(this):new this.Collection(this,function(){return pn(i,o,!l,!u)})}catch{return Pt(this,Jt)}},dt.prototype.equals=function(i){return i==null?Pt(this,Jt):new this.Collection(this,function(){return $i(i)})},dt.prototype.above=function(i){return i==null?Pt(this,Jt):new this.Collection(this,function(){return pn(i,void 0,!0)})},dt.prototype.aboveOrEqual=function(i){return i==null?Pt(this,Jt):new this.Collection(this,function(){return pn(i,void 0,!1)})},dt.prototype.below=function(i){return i==null?Pt(this,Jt):new this.Collection(this,function(){return pn(void 0,i,!1,!0)})},dt.prototype.belowOrEqual=function(i){return i==null?Pt(this,Jt):new this.Collection(this,function(){return pn(void 0,i)})},dt.prototype.startsWith=function(i){return typeof i!="string"?Pt(this,fi):this.between(i,i+xn,!0,!0)},dt.prototype.startsWithIgnoreCase=function(i){return i===""?this.startsWith(i):xr(this,function(o,l){return o.indexOf(l[0])===0},[i],xn)},dt.prototype.equalsIgnoreCase=function(i){return xr(this,function(o,l){return o===l[0]},[i],"")},dt.prototype.anyOfIgnoreCase=function(){var i=He.apply(V,arguments);return i.length===0?Bn(this):xr(this,function(o,l){return l.indexOf(o)!==-1},i,"")},dt.prototype.startsWithAnyOfIgnoreCase=function(){var i=He.apply(V,arguments);return i.length===0?Bn(this):xr(this,function(o,l){return l.some(function(u){return o.indexOf(u)===0})},i,xn)},dt.prototype.anyOf=function(){var i=this,o=He.apply(V,arguments),l=this._cmp;try{o.sort(l)}catch{return Pt(this,Jt)}if(o.length===0)return Bn(this);var u=new this.Collection(this,function(){return pn(o[0],o[o.length-1])});u._ondirectionchange=function(m){l=m==="next"?i._ascending:i._descending,o.sort(l)};var h=0;return u._addAlgorithm(function(m,g,w){for(var C=m.key;0<l(C,o[h]);)if(++h===o.length)return g(w),!1;return l(C,o[h])===0||(g(function(){m.continue(o[h])}),!1)}),u},dt.prototype.notEqual=function(i){return this.inAnyRange([[-1/0,i],[i,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},dt.prototype.noneOf=function(){var i=He.apply(V,arguments);if(i.length===0)return new this.Collection(this);try{i.sort(this._ascending)}catch{return Pt(this,Jt)}var o=i.reduce(function(l,u){return l?l.concat([[l[l.length-1][1],u]]):[[-1/0,u]]},null);return o.push([i[i.length-1],this.db._maxKey]),this.inAnyRange(o,{includeLowers:!1,includeUppers:!1})},dt.prototype.inAnyRange=function(z,o){var l=this,u=this._cmp,h=this._ascending,m=this._descending,g=this._min,w=this._max;if(z.length===0)return Bn(this);if(!z.every(function(I){return I[0]!==void 0&&I[1]!==void 0&&h(I[0],I[1])<=0}))return Pt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var C=!o||o.includeLowers!==!1,S=o&&o.includeUppers===!0,D,x=h;function F(I,L){return x(I[0],L[0])}try{(D=z.reduce(function(I,L){for(var N=0,W=I.length;N<W;++N){var Z=I[N];if(u(L[0],Z[1])<0&&0<u(L[1],Z[0])){Z[0]=g(Z[0],L[0]),Z[1]=w(Z[1],L[1]);break}}return N===W&&I.push(L),I},[])).sort(F)}catch{return Pt(this,Jt)}var E=0,T=S?function(I){return 0<h(I,D[E][1])}:function(I){return 0<=h(I,D[E][1])},j=C?function(I){return 0<m(I,D[E][0])}:function(I){return 0<=m(I,D[E][0])},A=T,z=new this.Collection(this,function(){return pn(D[0][0],D[D.length-1][1],!C,!S)});return z._ondirectionchange=function(I){x=I==="next"?(A=T,h):(A=j,m),D.sort(F)},z._addAlgorithm(function(I,L,N){for(var W,Z=I.key;A(Z);)if(++E===D.length)return L(N),!1;return!T(W=Z)&&!j(W)||(l._cmp(Z,D[E][1])===0||l._cmp(Z,D[E][0])===0||L(function(){x===h?I.continue(D[E][0]):I.continue(D[E][1])}),!1)}),z},dt.prototype.startsWithAnyOf=function(){var i=He.apply(V,arguments);return i.every(function(o){return typeof o=="string"})?i.length===0?Bn(this):this.inAnyRange(i.map(function(o){return[o,o+xn]})):Pt(this,"startsWithAnyOf() only works with strings")},dt);function dt(){}function Kt(i){return Be(function(o){return Gn(o),i(o.target.error),!1})}function Gn(i){i.stopPropagation&&i.stopPropagation(),i.preventDefault&&i.preventDefault()}var Qn="storagemutated",fs="x-storagemutated-1",mn=Vn(null,Qn),ja=(Vt.prototype._lock=function(){return se(!X.global),++this._reculock,this._reculock!==1||X.global||(X.lockOwnerFor=this),this},Vt.prototype._unlock=function(){if(se(!X.global),--this._reculock==0)for(X.global||(X.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var i=this._blockedFuncs.shift();try{vn(i[1],i[0])}catch{}}return this},Vt.prototype._locked=function(){return this._reculock&&X.lockOwnerFor!==this},Vt.prototype.create=function(i){var o=this;if(!this.mode)return this;var l=this.db.idbdb,u=this.db._state.dbOpenError;if(se(!this.idbtrans),!i&&!l)switch(u&&u.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(u);case"MissingAPIError":throw new ee.MissingAPI(u.message,u);default:throw new ee.OpenFailed(u)}if(!this.active)throw new ee.TransactionInactive;return se(this._completion._state===null),(i=this.idbtrans=i||(this.db.core||l).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Be(function(h){Gn(h),o._reject(i.error)}),i.onabort=Be(function(h){Gn(h),o.active&&o._reject(new ee.Abort(i.error)),o.active=!1,o.on("abort").fire(h)}),i.oncomplete=Be(function(){o.active=!1,o._resolve(),"mutatedParts"in i&&mn.storagemutated.fire(i.mutatedParts)}),this},Vt.prototype._promise=function(i,o,l){var u=this;if(i==="readwrite"&&this.mode!=="readwrite")return tt(new ee.ReadOnly("Transaction is readonly"));if(!this.active)return tt(new ee.TransactionInactive);if(this._locked())return new G(function(m,g){u._blockedFuncs.push([function(){u._promise(i,o,l).then(m,g)},X])});if(l)return dn(function(){var m=new G(function(g,w){u._lock();var C=o(g,w,u);C&&C.then&&C.then(g,w)});return m.finally(function(){return u._unlock()}),m._lib=!0,m});var h=new G(function(m,g){var w=o(m,g,u);w&&w.then&&w.then(m,g)});return h._lib=!0,h},Vt.prototype._root=function(){return this.parent?this.parent._root():this},Vt.prototype.waitFor=function(i){var o,l=this._root(),u=G.resolve(i);l._waitingFor?l._waitingFor=l._waitingFor.then(function(){return u}):(l._waitingFor=u,l._waitingQueue=[],o=l.idbtrans.objectStore(l.storeNames[0]),(function m(){for(++l._spinCount;l._waitingQueue.length;)l._waitingQueue.shift()();l._waitingFor&&(o.get(-1/0).onsuccess=m)})());var h=l._waitingFor;return new G(function(m,g){u.then(function(w){return l._waitingQueue.push(Be(m.bind(null,w)))},function(w){return l._waitingQueue.push(Be(g.bind(null,w)))}).finally(function(){l._waitingFor===h&&(l._waitingFor=null)})})},Vt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},Vt.prototype.table=function(i){var o=this._memoizedTables||(this._memoizedTables={});if($(o,i))return o[i];var l=this.schema[i];if(!l)throw new ee.NotFound("Table "+i+" not part of transaction");return l=new this.db.Table(i,l,this),l.core=this.db.core.table(i),o[i]=l},Vt);function Vt(){}function ps(i,o,l,u,h,m,g){return{name:i,keyPath:o,unique:l,multi:u,auto:h,compound:m,src:(l&&!g?"&":"")+(u?"*":"")+(h?"++":"")+Ci(o)}}function Ci(i){return typeof i=="string"?i:i?"["+[].join.call(i,"+")+"]":""}function ms(i,o,l){return{name:i,primKey:o,indexes:l,mappedClass:null,idxByName:(u=function(h){return[h.name,h]},l.reduce(function(h,m,g){return g=u(m,g),g&&(h[g[0]]=g[1]),h},{}))};var u}var Jn=function(i){try{return i.only([[]]),Jn=function(){return[[]]},[[]]}catch{return Jn=function(){return xn},xn}};function gs(i){return i==null?function(){}:typeof i=="string"?(o=i).split(".").length===1?function(l){return l[o]}:function(l){return Ee(l,o)}:function(l){return Ee(l,i)};var o}function Ei(i){return[].slice.call(i)}var Fa=0;function Zn(i){return i==null?":id":typeof i=="string"?i:"[".concat(i.join("+"),"]")}function Ra(i,o,C){function u(A){if(A.type===3)return null;if(A.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var E=A.lower,T=A.upper,j=A.lowerOpen,A=A.upperOpen;return E===void 0?T===void 0?null:o.upperBound(T,!!A):T===void 0?o.lowerBound(E,!!j):o.bound(E,T,!!j,!!A)}function h(F){var E,T=F.name;return{name:T,schema:F,mutate:function(j){var A=j.trans,z=j.type,I=j.keys,L=j.values,N=j.range;return new Promise(function(W,Z){W=Be(W);var H=A.objectStore(T),Y=H.keyPath==null,te=z==="put"||z==="add";if(!te&&z!=="delete"&&z!=="deleteRange")throw new Error("Invalid operation type: "+z);var Q,re=(I||L||{length:1}).length;if(I&&L&&I.length!==L.length)throw new Error("Given keys array must have same length as given values array.");if(re===0)return W({numFailures:0,failures:{},results:[],lastResult:void 0});function pe(xt){++At,Gn(xt)}var we=[],ve=[],At=0;if(z==="deleteRange"){if(N.type===4)return W({numFailures:At,failures:ve,results:[],lastResult:void 0});N.type===3?we.push(Q=H.clear()):we.push(Q=H.delete(u(N)))}else{var Y=te?Y?[L,I]:[L,null]:[I,null],he=Y[0],bt=Y[1];if(te)for(var yt=0;yt<re;++yt)we.push(Q=bt&&bt[yt]!==void 0?H[z](he[yt],bt[yt]):H[z](he[yt])),Q.onerror=pe;else for(yt=0;yt<re;++yt)we.push(Q=H[z](he[yt])),Q.onerror=pe}function Rr(xt){xt=xt.target.result,we.forEach(function(En,Rs){return En.error!=null&&(ve[Rs]=En.error)}),W({numFailures:At,failures:ve,results:z==="delete"?I:we.map(function(En){return En.result}),lastResult:xt})}Q.onerror=function(xt){pe(xt),Rr(xt)},Q.onsuccess=Rr})},getMany:function(j){var A=j.trans,z=j.keys;return new Promise(function(I,L){I=Be(I);for(var N,W=A.objectStore(T),Z=z.length,H=new Array(Z),Y=0,te=0,Q=function(we){we=we.target,H[we._pos]=we.result,++te===Y&&I(H)},re=Kt(L),pe=0;pe<Z;++pe)z[pe]!=null&&((N=W.get(z[pe]))._pos=pe,N.onsuccess=Q,N.onerror=re,++Y);Y===0&&I(H)})},get:function(j){var A=j.trans,z=j.key;return new Promise(function(I,L){I=Be(I);var N=A.objectStore(T).get(z);N.onsuccess=function(W){return I(W.target.result)},N.onerror=Kt(L)})},query:(E=S,function(j){return new Promise(function(A,z){A=Be(A);var I,L,N,Y=j.trans,W=j.values,Z=j.limit,Q=j.query,H=Z===1/0?void 0:Z,te=Q.index,Q=Q.range,Y=Y.objectStore(T),te=te.isPrimaryKey?Y:Y.index(te.name),Q=u(Q);if(Z===0)return A({result:[]});E?((H=W?te.getAll(Q,H):te.getAllKeys(Q,H)).onsuccess=function(re){return A({result:re.target.result})},H.onerror=Kt(z)):(I=0,L=!W&&"openKeyCursor"in te?te.openKeyCursor(Q):te.openCursor(Q),N=[],L.onsuccess=function(re){var pe=L.result;return pe?(N.push(W?pe.value:pe.primaryKey),++I===Z?A({result:N}):void pe.continue()):A({result:N})},L.onerror=Kt(z))})}),openCursor:function(j){var A=j.trans,z=j.values,I=j.query,L=j.reverse,N=j.unique;return new Promise(function(W,Z){W=Be(W);var te=I.index,H=I.range,Y=A.objectStore(T),Y=te.isPrimaryKey?Y:Y.index(te.name),te=L?N?"prevunique":"prev":N?"nextunique":"next",Q=!z&&"openKeyCursor"in Y?Y.openKeyCursor(u(H),te):Y.openCursor(u(H),te);Q.onerror=Kt(Z),Q.onsuccess=Be(function(re){var pe,we,ve,At,he=Q.result;he?(he.___id=++Fa,he.done=!1,pe=he.continue.bind(he),we=(we=he.continuePrimaryKey)&&we.bind(he),ve=he.advance.bind(he),At=function(){throw new Error("Cursor not stopped")},he.trans=A,he.stop=he.continue=he.continuePrimaryKey=he.advance=function(){throw new Error("Cursor not started")},he.fail=Be(Z),he.next=function(){var bt=this,yt=1;return this.start(function(){return yt--?bt.continue():bt.stop()}).then(function(){return bt})},he.start=function(bt){function yt(){if(Q.result)try{bt()}catch(xt){he.fail(xt)}else he.done=!0,he.start=function(){throw new Error("Cursor behind last entry")},he.stop()}var Rr=new Promise(function(xt,En){xt=Be(xt),Q.onerror=Kt(En),he.fail=En,he.stop=function(Rs){he.stop=he.continue=he.continuePrimaryKey=he.advance=At,xt(Rs)}});return Q.onsuccess=Be(function(xt){Q.onsuccess=yt,yt()}),he.continue=pe,he.continuePrimaryKey=we,he.advance=ve,yt(),Rr},W(he)):W(null)},Z)})},count:function(j){var A=j.query,z=j.trans,I=A.index,L=A.range;return new Promise(function(N,W){var Z=z.objectStore(T),H=I.isPrimaryKey?Z:Z.index(I.name),Z=u(L),H=Z?H.count(Z):H.count();H.onsuccess=Be(function(Y){return N(Y.target.result)}),H.onerror=Kt(W)})}}}var m,g,w,D=(g=C,w=Ei((m=i).objectStoreNames),{schema:{name:m.name,tables:w.map(function(F){return g.objectStore(F)}).map(function(F){var E=F.keyPath,A=F.autoIncrement,T=d(E),j={},A={name:F.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:E==null,compound:T,keyPath:E,autoIncrement:A,unique:!0,extractKey:gs(E)},indexes:Ei(F.indexNames).map(function(z){return F.index(z)}).map(function(N){var I=N.name,L=N.unique,W=N.multiEntry,N=N.keyPath,W={name:I,compound:d(N),keyPath:N,unique:L,multiEntry:W,extractKey:gs(N)};return j[Zn(N)]=W}),getIndexByKeyPath:function(z){return j[Zn(z)]}};return j[":id"]=A.primaryKey,E!=null&&(j[Zn(E)]=A.primaryKey),A})},hasGetAll:0<w.length&&"getAll"in g.objectStore(w[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),C=D.schema,S=D.hasGetAll,D=C.tables.map(h),x={};return D.forEach(function(F){return x[F.name]=F}),{stack:"dbcore",transaction:i.transaction.bind(i),table:function(F){if(!x[F])throw new Error("Table '".concat(F,"' not found"));return x[F]},MIN_KEY:-1/0,MAX_KEY:Jn(o),schema:C}}function Oa(i,o,l,u){var h=l.IDBKeyRange;return l.indexedDB,{dbcore:(u=Ra(o,h,u),i.dbcore.reduce(function(m,g){return g=g.create,s(s({},m),g(m))},u))}}function $r(i,u){var l=u.db,u=Oa(i._middlewares,l,i._deps,u);i.core=u.dbcore,i.tables.forEach(function(h){var m=h.name;i.core.schema.tables.some(function(g){return g.name===m})&&(h.core=i.core.table(m),i[m]instanceof i.Table&&(i[m].core=h.core))})}function kr(i,o,l,u){l.forEach(function(h){var m=u[h];o.forEach(function(g){var w=(function C(S,D){return ae(S,D)||(S=v(S))&&C(S,D)})(g,h);(!w||"value"in w&&w.value===void 0)&&(g===i.Transaction.prototype||g instanceof i.Transaction?M(g,h,{get:function(){return this.table(h)},set:function(C){B(this,h,{value:C,writable:!0,configurable:!0,enumerable:!0})}}):g[h]=new i.Table(h,m))})})}function bs(i,o){o.forEach(function(l){for(var u in l)l[u]instanceof i.Table&&delete l[u]})}function za(i,o){return i._cfg.version-o._cfg.version}function Ia(i,o,l,u){var h=i._dbSchema;l.objectStoreNames.contains("$meta")&&!h.$meta&&(h.$meta=ms("$meta",_i("")[0],[]),i._storeNames.push("$meta"));var m=i._createTransaction("readwrite",i._storeNames,h);m.create(l),m._completion.catch(u);var g=m._reject.bind(m),w=X.transless||X;dn(function(){return X.trans=m,X.transless=w,o!==0?($r(i,l),S=o,((C=m).storeNames.includes("$meta")?C.table("$meta").get("version").then(function(D){return D??S}):G.resolve(S)).then(function(D){return F=D,E=m,T=l,j=[],D=(x=i)._versions,A=x._dbSchema=Er(0,x.idbdb,T),(D=D.filter(function(z){return z._cfg.version>=F})).length!==0?(D.forEach(function(z){j.push(function(){var I=A,L=z._cfg.dbschema;Sr(x,I,T),Sr(x,L,T),A=x._dbSchema=L;var N=ys(I,L);N.add.forEach(function(te){ws(T,te[0],te[1].primKey,te[1].indexes)}),N.change.forEach(function(te){if(te.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var Q=T.objectStore(te.name);te.add.forEach(function(re){return Cr(Q,re)}),te.change.forEach(function(re){Q.deleteIndex(re.name),Cr(Q,re)}),te.del.forEach(function(re){return Q.deleteIndex(re)})});var W=z._cfg.contentUpgrade;if(W&&z._cfg.version>F){$r(x,T),E._memoizedTables={};var Z=ft(L);N.del.forEach(function(te){Z[te]=I[te]}),bs(x,[x.Transaction.prototype]),kr(x,[x.Transaction.prototype],c(Z),Z),E.schema=Z;var H,Y=st(W);return Y&&zn(),N=G.follow(function(){var te;(H=W(E))&&Y&&(te=hn.bind(null,null),H.then(te,te))}),H&&typeof H.then=="function"?G.resolve(H):N.then(function(){return H})}}),j.push(function(I){var L,N,W=z._cfg.dbschema;L=W,N=I,[].slice.call(N.db.objectStoreNames).forEach(function(Z){return L[Z]==null&&N.db.deleteObjectStore(Z)}),bs(x,[x.Transaction.prototype]),kr(x,[x.Transaction.prototype],x._storeNames,x._dbSchema),E.schema=x._dbSchema}),j.push(function(I){x.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(x.idbdb.version/10)===z._cfg.version?(x.idbdb.deleteObjectStore("$meta"),delete x._dbSchema.$meta,x._storeNames=x._storeNames.filter(function(L){return L!=="$meta"})):I.objectStore("$meta").put(z._cfg.version,"version"))})}),(function z(){return j.length?G.resolve(j.shift()(E.idbtrans)).then(z):G.resolve()})().then(function(){Si(A,T)})):G.resolve();var x,F,E,T,j,A}).catch(g)):(c(h).forEach(function(D){ws(l,D,h[D].primKey,h[D].indexes)}),$r(i,l),void G.follow(function(){return i.on.populate.fire(m)}).catch(g));var C,S})}function La(i,o){Si(i._dbSchema,o),o.db.version%10!=0||o.objectStoreNames.contains("$meta")||o.db.createObjectStore("$meta").add(Math.ceil(o.db.version/10-1),"version");var l=Er(0,i.idbdb,o);Sr(i,i._dbSchema,o);for(var u=0,h=ys(l,i._dbSchema).change;u<h.length;u++){var m=(function(g){if(g.change.length||g.recreate)return console.warn("Unable to patch indexes of table ".concat(g.name," because it has changes on the type of index or primary key.")),{value:void 0};var w=o.objectStore(g.name);g.add.forEach(function(C){je&&console.debug("Dexie upgrade patch: Creating missing index ".concat(g.name,".").concat(C.src)),Cr(w,C)})})(h[u]);if(typeof m=="object")return m.value}}function ys(i,o){var l,u={del:[],add:[],change:[]};for(l in i)o[l]||u.del.push(l);for(l in o){var h=i[l],m=o[l];if(h){var g={name:l,def:m,recreate:!1,del:[],add:[],change:[]};if(""+(h.primKey.keyPath||"")!=""+(m.primKey.keyPath||"")||h.primKey.auto!==m.primKey.auto)g.recreate=!0,u.change.push(g);else{var w=h.idxByName,C=m.idxByName,S=void 0;for(S in w)C[S]||g.del.push(S);for(S in C){var D=w[S],x=C[S];D?D.src!==x.src&&g.change.push(x):g.add.push(x)}(0<g.del.length||0<g.add.length||0<g.change.length)&&u.change.push(g)}}else u.add.push([l,m])}return u}function ws(i,o,l,u){var h=i.db.createObjectStore(o,l.keyPath?{keyPath:l.keyPath,autoIncrement:l.auto}:{autoIncrement:l.auto});return u.forEach(function(m){return Cr(h,m)}),h}function Si(i,o){c(i).forEach(function(l){o.db.objectStoreNames.contains(l)||(je&&console.debug("Dexie: Creating missing table",l),ws(o,l,i[l].primKey,i[l].indexes))})}function Cr(i,o){i.createIndex(o.name,o.keyPath,{unique:o.unique,multiEntry:o.multi})}function Er(i,o,l){var u={};return be(o.objectStoreNames,0).forEach(function(h){for(var m=l.objectStore(h),g=ps(Ci(S=m.keyPath),S||"",!0,!1,!!m.autoIncrement,S&&typeof S!="string",!0),w=[],C=0;C<m.indexNames.length;++C){var D=m.index(m.indexNames[C]),S=D.keyPath,D=ps(D.name,S,!!D.unique,!!D.multiEntry,!1,S&&typeof S!="string",!1);w.push(D)}u[h]=ms(h,g,w)}),u}function Sr(i,o,l){for(var u=l.db.objectStoreNames,h=0;h<u.length;++h){var m=u[h],g=l.objectStore(m);i._hasGetAll="getAll"in g;for(var w=0;w<g.indexNames.length;++w){var C=g.indexNames[w],S=g.index(C).keyPath,D=typeof S=="string"?S:"["+be(S).join("+")+"]";!o[m]||(S=o[m].idxByName[D])&&(S.name=C,delete o[m].idxByName[D],o[m].idxByName[C]=S)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&a.WorkerGlobalScope&&a instanceof a.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(i._hasGetAll=!1)}function _i(i){return i.split(",").map(function(o,l){var u=(o=o.trim()).replace(/([&*]|\+\+)/g,""),h=/^\[/.test(u)?u.match(/^\[(.*)\]$/)[1].split("+"):u;return ps(u,h||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),d(h),l===0)})}var Ba=(_r.prototype._parseStoresSpec=function(i,o){c(i).forEach(function(l){if(i[l]!==null){var u=_i(i[l]),h=u.shift();if(h.unique=!0,h.multi)throw new ee.Schema("Primary key cannot be multi-valued");u.forEach(function(m){if(m.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!m.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),o[l]=ms(l,h,u)}})},_r.prototype.stores=function(l){var o=this.db;this._cfg.storesSource=this._cfg.storesSource?p(this._cfg.storesSource,l):l;var l=o._versions,u={},h={};return l.forEach(function(m){p(u,m._cfg.storesSource),h=m._cfg.dbschema={},m._parseStoresSpec(u,h)}),o._dbSchema=h,bs(o,[o._allTables,o,o.Transaction.prototype]),kr(o,[o._allTables,o,o.Transaction.prototype,this._cfg.tables],c(h),h),o._storeNames=c(h),this},_r.prototype.upgrade=function(i){return this._cfg.contentUpgrade=St(this._cfg.contentUpgrade||ce,i),this},_r);function _r(){}function vs(i,o){var l=i._dbNamesDB;return l||(l=i._dbNamesDB=new en(br,{addons:[],indexedDB:i,IDBKeyRange:o})).version(1).stores({dbnames:"name"}),l.table("dbnames")}function xs(i){return i&&typeof i.databases=="function"}function $s(i){return dn(function(){return X.letThrough=!0,i()})}function ks(i){return!("from"in i)}var gt=function(i,o){if(!this){var l=new gt;return i&&"d"in i&&p(l,i),l}p(this,arguments.length?{d:1,from:i,to:1<arguments.length?o:i}:{d:0})};function er(i,o,l){var u=Ce(o,l);if(!isNaN(u)){if(0<u)throw RangeError();if(ks(i))return p(i,{from:o,to:l,d:1});var h=i.l,u=i.r;if(Ce(l,i.from)<0)return h?er(h,o,l):i.l={from:o,to:l,d:1,l:null,r:null},Ai(i);if(0<Ce(o,i.to))return u?er(u,o,l):i.r={from:o,to:l,d:1,l:null,r:null},Ai(i);Ce(o,i.from)<0&&(i.from=o,i.l=null,i.d=u?u.d+1:1),0<Ce(l,i.to)&&(i.to=l,i.r=null,i.d=i.l?i.l.d+1:1),l=!i.r,h&&!i.l&&tr(i,h),u&&l&&tr(i,u)}}function tr(i,o){ks(o)||(function l(u,C){var m=C.from,g=C.to,w=C.l,C=C.r;er(u,m,g),w&&l(u,w),C&&l(u,C)})(i,o)}function Pi(i,o){var l=Pr(o),u=l.next();if(u.done)return!1;for(var h=u.value,m=Pr(i),g=m.next(h.from),w=g.value;!u.done&&!g.done;){if(Ce(w.from,h.to)<=0&&0<=Ce(w.to,h.from))return!0;Ce(h.from,w.from)<0?h=(u=l.next(w.from)).value:w=(g=m.next(h.from)).value}return!1}function Pr(i){var o=ks(i)?null:{s:0,n:i};return{next:function(l){for(var u=0<arguments.length;o;)switch(o.s){case 0:if(o.s=1,u)for(;o.n.l&&Ce(l,o.n.from)<0;)o={up:o,n:o.n.l,s:1};else for(;o.n.l;)o={up:o,n:o.n.l,s:1};case 1:if(o.s=2,!u||Ce(l,o.n.to)<=0)return{value:o.n,done:!1};case 2:if(o.n.r){o.s=3,o={up:o,n:o.n.r,s:0};continue}case 3:o=o.up}return{done:!0}}}}function Ai(i){var o,l,u=(((o=i.r)===null||o===void 0?void 0:o.d)||0)-(((l=i.l)===null||l===void 0?void 0:l.d)||0),h=1<u?"r":u<-1?"l":"";h&&(o=h=="r"?"l":"r",l=s({},i),u=i[h],i.from=u.from,i.to=u.to,i[h]=u[h],l[h]=u[o],(i[o]=l).d=Ti(l)),i.d=Ti(i)}function Ti(l){var o=l.r,l=l.l;return(o?l?Math.max(o.d,l.d):o.d:l?l.d:0)+1}function Ar(i,o){return c(o).forEach(function(l){i[l]?tr(i[l],o[l]):i[l]=(function u(h){var m,g,w={};for(m in h)$(h,m)&&(g=h[m],w[m]=!g||typeof g!="object"||f.has(g.constructor)?g:u(g));return w})(o[l])}),i}function Cs(i,o){return i.all||o.all||Object.keys(i).some(function(l){return o[l]&&Pi(o[l],i[l])})}O(gt.prototype,((Ft={add:function(i){return tr(this,i),this},addKey:function(i){return er(this,i,i),this},addKeys:function(i){var o=this;return i.forEach(function(l){return er(o,l,l)}),this},hasKey:function(i){var o=Pr(this).next(i).value;return o&&Ce(o.from,i)<=0&&0<=Ce(o.to,i)}})[oe]=function(){return Pr(this)},Ft));var kn={},Es={},Ss=!1;function Tr(i){Ar(Es,i),Ss||(Ss=!0,setTimeout(function(){Ss=!1,_s(Es,!(Es={}))},0))}function _s(i,o){o===void 0&&(o=!1);var l=new Set;if(i.all)for(var u=0,h=Object.values(kn);u<h.length;u++)Di(g=h[u],i,l,o);else for(var m in i){var g,w=/^idb\:\/\/(.*)\/(.*)\//.exec(m);w&&(m=w[1],w=w[2],(g=kn["idb://".concat(m,"/").concat(w)])&&Di(g,i,l,o))}l.forEach(function(C){return C()})}function Di(i,o,l,u){for(var h=[],m=0,g=Object.entries(i.queries.query);m<g.length;m++){for(var w=g[m],C=w[0],S=[],D=0,x=w[1];D<x.length;D++){var F=x[D];Cs(o,F.obsSet)?F.subscribers.forEach(function(A){return l.add(A)}):u&&S.push(F)}u&&h.push([C,S])}if(u)for(var E=0,T=h;E<T.length;E++){var j=T[E],C=j[0],S=j[1];i.queries.query[C]=S}}function Ma(i){var o=i._state,l=i._deps.indexedDB;if(o.isBeingOpened||i.idbdb)return o.dbReadyPromise.then(function(){return o.dbOpenError?tt(o.dbOpenError):i});o.isBeingOpened=!0,o.dbOpenError=null,o.openComplete=!1;var u=o.openCanceller,h=Math.round(10*i.verno),m=!1;function g(){if(o.openCanceller!==u)throw new ee.DatabaseClosed("db.open() was cancelled")}function w(){return new G(function(F,E){if(g(),!l)throw new ee.MissingAPI;var T=i.name,j=o.autoSchema||!h?l.open(T):l.open(T,h);if(!j)throw new ee.MissingAPI;j.onerror=Kt(E),j.onblocked=Be(i._fireOnBlocked),j.onupgradeneeded=Be(function(A){var z;D=j.transaction,o.autoSchema&&!i._options.allowEmptyDB?(j.onerror=Gn,D.abort(),j.result.close(),(z=l.deleteDatabase(T)).onsuccess=z.onerror=Be(function(){E(new ee.NoSuchDatabase("Database ".concat(T," doesnt exist")))})):(D.onerror=Kt(E),A=A.oldVersion>Math.pow(2,62)?0:A.oldVersion,x=A<1,i.idbdb=j.result,m&&La(i,D),Ia(i,A/10,D,E))},E),j.onsuccess=Be(function(){D=null;var A,z,I,L,N,W=i.idbdb=j.result,Z=be(W.objectStoreNames);if(0<Z.length)try{var H=W.transaction((L=Z).length===1?L[0]:L,"readonly");if(o.autoSchema)z=W,I=H,(A=i).verno=z.version/10,I=A._dbSchema=Er(0,z,I),A._storeNames=be(z.objectStoreNames,0),kr(A,[A._allTables],c(I),I);else if(Sr(i,i._dbSchema,H),((N=ys(Er(0,(N=i).idbdb,H),N._dbSchema)).add.length||N.change.some(function(Y){return Y.add.length||Y.change.length}))&&!m)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),W.close(),h=W.version+1,m=!0,F(w());$r(i,H)}catch{}In.push(i),W.onversionchange=Be(function(Y){o.vcFired=!0,i.on("versionchange").fire(Y)}),W.onclose=Be(function(Y){i.on("close").fire(Y)}),x&&(N=i._deps,H=T,W=N.indexedDB,N=N.IDBKeyRange,xs(W)||H===br||vs(W,N).put({name:H}).catch(ce)),F()},E)}).catch(function(F){switch(F?.name){case"UnknownError":if(0<o.PR1398_maxLoop)return o.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),w();break;case"VersionError":if(0<h)return h=0,w()}return G.reject(F)})}var C,S=o.dbReadyResolve,D=null,x=!1;return G.race([u,(typeof navigator>"u"?G.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(F){function E(){return indexedDB.databases().finally(F)}C=setInterval(E,100),E()}).finally(function(){return clearInterval(C)}):Promise.resolve()).then(w)]).then(function(){return g(),o.onReadyBeingFired=[],G.resolve($s(function(){return i.on.ready.fire(i.vip)})).then(function F(){if(0<o.onReadyBeingFired.length){var E=o.onReadyBeingFired.reduce(St,ce);return o.onReadyBeingFired=[],G.resolve($s(function(){return E(i.vip)})).then(F)}})}).finally(function(){o.openCanceller===u&&(o.onReadyBeingFired=null,o.isBeingOpened=!1)}).catch(function(F){o.dbOpenError=F;try{D&&D.abort()}catch{}return u===o.openCanceller&&i._close(),tt(F)}).finally(function(){o.openComplete=!0,S()}).then(function(){var F;return x&&(F={},i.tables.forEach(function(E){E.schema.indexes.forEach(function(T){T.name&&(F["idb://".concat(i.name,"/").concat(E.name,"/").concat(T.name)]=new gt(-1/0,[[[]]]))}),F["idb://".concat(i.name,"/").concat(E.name,"/")]=F["idb://".concat(i.name,"/").concat(E.name,"/:dels")]=new gt(-1/0,[[[]]])}),mn(Qn).fire(F),_s(F,!0)),i})}function Ps(i){function o(m){return i.next(m)}var l=h(o),u=h(function(m){return i.throw(m)});function h(m){return function(C){var w=m(C),C=w.value;return w.done?C:C&&typeof C.then=="function"?C.then(l,u):d(C)?Promise.all(C).then(l,u):l(C)}}return h(o)()}function Dr(i,o,l){for(var u=d(i)?i.slice():[i],h=0;h<l;++h)u.push(o);return u}var Na={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(i){return s(s({},i),{table:function(o){var l=i.table(o),u=l.schema,h={},m=[];function g(x,F,E){var T=Zn(x),j=h[T]=h[T]||[],A=x==null?0:typeof x=="string"?1:x.length,z=0<F,z=s(s({},E),{name:z?"".concat(T,"(virtual-from:").concat(E.name,")"):E.name,lowLevelIndex:E,isVirtual:z,keyTail:F,keyLength:A,extractKey:gs(x),unique:!z&&E.unique});return j.push(z),z.isPrimaryKey||m.push(z),1<A&&g(A===2?x[0]:x.slice(0,A-1),F+1,E),j.sort(function(I,L){return I.keyTail-L.keyTail}),z}o=g(u.primaryKey.keyPath,0,u.primaryKey),h[":id"]=[o];for(var w=0,C=u.indexes;w<C.length;w++){var S=C[w];g(S.keyPath,0,S)}function D(x){var F,E=x.query.index;return E.isVirtual?s(s({},x),{query:{index:E.lowLevelIndex,range:(F=x.query.range,E=E.keyTail,{type:F.type===1?2:F.type,lower:Dr(F.lower,F.lowerOpen?i.MAX_KEY:i.MIN_KEY,E),lowerOpen:!0,upper:Dr(F.upper,F.upperOpen?i.MIN_KEY:i.MAX_KEY,E),upperOpen:!0})}}):x}return s(s({},l),{schema:s(s({},u),{primaryKey:o,indexes:m,getIndexByKeyPath:function(x){return(x=h[Zn(x)])&&x[0]}}),count:function(x){return l.count(D(x))},query:function(x){return l.query(D(x))},openCursor:function(x){var F=x.query.index,E=F.keyTail,T=F.isVirtual,j=F.keyLength;return T?l.openCursor(D(x)).then(function(z){return z&&A(z)}):l.openCursor(x);function A(z){return Object.create(z,{continue:{value:function(I){I!=null?z.continue(Dr(I,x.reverse?i.MAX_KEY:i.MIN_KEY,E)):x.unique?z.continue(z.key.slice(0,j).concat(x.reverse?i.MIN_KEY:i.MAX_KEY,E)):z.continue()}},continuePrimaryKey:{value:function(I,L){z.continuePrimaryKey(Dr(I,i.MAX_KEY,E),L)}},primaryKey:{get:function(){return z.primaryKey}},key:{get:function(){var I=z.key;return j===1?I[0]:I.slice(0,j)}},value:{get:function(){return z.value}}})}}})}})}};function As(i,o,l,u){return l=l||{},u=u||"",c(i).forEach(function(h){var m,g,w;$(o,h)?(m=i[h],g=o[h],typeof m=="object"&&typeof g=="object"&&m&&g?(w=k(m))!==k(g)?l[u+h]=o[h]:w==="Object"?As(m,g,l,u+h+"."):m!==g&&(l[u+h]=o[h]):m!==g&&(l[u+h]=o[h])):l[u+h]=void 0}),c(o).forEach(function(h){$(i,h)||(l[u+h]=o[h])}),l}function Ts(i,o){return o.type==="delete"?o.keys:o.keys||o.values.map(i.extractKey)}var qa={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(i){return s(s({},i),{table:function(o){var l=i.table(o),u=l.schema.primaryKey;return s(s({},l),{mutate:function(h){var m=X.trans,g=m.table(o).hook,w=g.deleting,C=g.creating,S=g.updating;switch(h.type){case"add":if(C.fire===ce)break;return m._promise("readwrite",function(){return D(h)},!0);case"put":if(C.fire===ce&&S.fire===ce)break;return m._promise("readwrite",function(){return D(h)},!0);case"delete":if(w.fire===ce)break;return m._promise("readwrite",function(){return D(h)},!0);case"deleteRange":if(w.fire===ce)break;return m._promise("readwrite",function(){return(function x(F,E,T){return l.query({trans:F,values:!1,query:{index:u,range:E},limit:T}).then(function(j){var A=j.result;return D({type:"delete",keys:A,trans:F}).then(function(z){return 0<z.numFailures?Promise.reject(z.failures[0]):A.length<T?{failures:[],numFailures:0,lastResult:void 0}:x(F,s(s({},E),{lower:A[A.length-1],lowerOpen:!0}),T)})})})(h.trans,h.range,1e4)},!0)}return l.mutate(h);function D(x){var F,E,T,j=X.trans,A=x.keys||Ts(u,x);if(!A)throw new Error("Keys missing");return(x=x.type==="add"||x.type==="put"?s(s({},x),{keys:A}):s({},x)).type!=="delete"&&(x.values=n([],x.values)),x.keys&&(x.keys=n([],x.keys)),F=l,T=A,((E=x).type==="add"?Promise.resolve([]):F.getMany({trans:E.trans,keys:T,cache:"immutable"})).then(function(z){var I=A.map(function(L,N){var W,Z,H,Y=z[N],te={onerror:null,onsuccess:null};return x.type==="delete"?w.fire.call(te,L,Y,j):x.type==="add"||Y===void 0?(W=C.fire.call(te,L,x.values[N],j),L==null&&W!=null&&(x.keys[N]=L=W,u.outbound||ye(x.values[N],u.keyPath,L))):(W=As(Y,x.values[N]),(Z=S.fire.call(te,W,L,Y,j))&&(H=x.values[N],Object.keys(Z).forEach(function(Q){$(H,Q)?H[Q]=Z[Q]:ye(H,Q,Z[Q])}))),te});return l.mutate(x).then(function(L){for(var N=L.failures,W=L.results,Z=L.numFailures,L=L.lastResult,H=0;H<A.length;++H){var Y=(W||A)[H],te=I[H];Y==null?te.onerror&&te.onerror(N[H]):te.onsuccess&&te.onsuccess(x.type==="put"&&z[H]?x.values[H]:Y)}return{failures:N,results:W,numFailures:Z,lastResult:L}}).catch(function(L){return I.forEach(function(N){return N.onerror&&N.onerror(L)}),Promise.reject(L)})})}}})}})}};function ji(i,o,l){try{if(!o||o.keys.length<i.length)return null;for(var u=[],h=0,m=0;h<o.keys.length&&m<i.length;++h)Ce(o.keys[h],i[m])===0&&(u.push(l?_(o.values[h]):o.values[h]),++m);return u.length===i.length?u:null}catch{return null}}var Ua={stack:"dbcore",level:-1,create:function(i){return{table:function(o){var l=i.table(o);return s(s({},l),{getMany:function(u){if(!u.cache)return l.getMany(u);var h=ji(u.keys,u.trans._cache,u.cache==="clone");return h?G.resolve(h):l.getMany(u).then(function(m){return u.trans._cache={keys:u.keys,values:u.cache==="clone"?_(m):m},m})},mutate:function(u){return u.type!=="add"&&(u.trans._cache=null),l.mutate(u)}})}}}};function Fi(i,o){return i.trans.mode==="readonly"&&!!i.subscr&&!i.trans.explicit&&i.trans.db._options.cache!=="disabled"&&!o.schema.primaryKey.outbound}function Ri(i,o){switch(i){case"query":return o.values&&!o.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Wa={stack:"dbcore",level:0,name:"Observability",create:function(i){var o=i.schema.name,l=new gt(i.MIN_KEY,i.MAX_KEY);return s(s({},i),{transaction:function(u,h,m){if(X.subscr&&h!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(X.querier));return i.transaction(u,h,m)},table:function(u){var h=i.table(u),m=h.schema,g=m.primaryKey,x=m.indexes,w=g.extractKey,C=g.outbound,S=g.autoIncrement&&x.filter(function(E){return E.compound&&E.keyPath.includes(g.keyPath)}),D=s(s({},h),{mutate:function(E){function T(Q){return Q="idb://".concat(o,"/").concat(u,"/").concat(Q),L[Q]||(L[Q]=new gt)}var j,A,z,I=E.trans,L=E.mutatedParts||(E.mutatedParts={}),N=T(""),W=T(":dels"),Z=E.type,te=E.type==="deleteRange"?[E.range]:E.type==="delete"?[E.keys]:E.values.length<50?[Ts(g,E).filter(function(Q){return Q}),E.values]:[],H=te[0],Y=te[1],te=E.trans._cache;return d(H)?(N.addKeys(H),(te=Z==="delete"||H.length===Y.length?ji(H,te):null)||W.addKeys(H),(te||Y)&&(j=T,A=te,z=Y,m.indexes.forEach(function(Q){var re=j(Q.name||"");function pe(ve){return ve!=null?Q.extractKey(ve):null}function we(ve){return Q.multiEntry&&d(ve)?ve.forEach(function(At){return re.addKey(At)}):re.addKey(ve)}(A||z).forEach(function(ve,bt){var he=A&&pe(A[bt]),bt=z&&pe(z[bt]);Ce(he,bt)!==0&&(he!=null&&we(he),bt!=null&&we(bt))})}))):H?(Y={from:(Y=H.lower)!==null&&Y!==void 0?Y:i.MIN_KEY,to:(Y=H.upper)!==null&&Y!==void 0?Y:i.MAX_KEY},W.add(Y),N.add(Y)):(N.add(l),W.add(l),m.indexes.forEach(function(Q){return T(Q.name).add(l)})),h.mutate(E).then(function(Q){return!H||E.type!=="add"&&E.type!=="put"||(N.addKeys(Q.results),S&&S.forEach(function(re){for(var pe=E.values.map(function(he){return re.extractKey(he)}),we=re.keyPath.findIndex(function(he){return he===g.keyPath}),ve=0,At=Q.results.length;ve<At;++ve)pe[ve][we]=Q.results[ve];T(re.name).addKeys(pe)})),I.mutatedParts=Ar(I.mutatedParts||{},L),Q})}}),x=function(T){var j=T.query,T=j.index,j=j.range;return[T,new gt((T=j.lower)!==null&&T!==void 0?T:i.MIN_KEY,(j=j.upper)!==null&&j!==void 0?j:i.MAX_KEY)]},F={get:function(E){return[g,new gt(E.key)]},getMany:function(E){return[g,new gt().addKeys(E.keys)]},count:x,query:x,openCursor:x};return c(F).forEach(function(E){D[E]=function(T){var j=X.subscr,A=!!j,z=Fi(X,h)&&Ri(E,T)?T.obsSet={}:j;if(A){var I=function(Y){return Y="idb://".concat(o,"/").concat(u,"/").concat(Y),z[Y]||(z[Y]=new gt)},L=I(""),N=I(":dels"),j=F[E](T),A=j[0],j=j[1];if((E==="query"&&A.isPrimaryKey&&!T.values?N:I(A.name||"")).add(j),!A.isPrimaryKey){if(E!=="count"){var W=E==="query"&&C&&T.values&&h.query(s(s({},T),{values:!1}));return h[E].apply(this,arguments).then(function(Y){if(E==="query"){if(C&&T.values)return W.then(function(pe){return pe=pe.result,L.addKeys(pe),Y});var te=T.values?Y.result.map(w):Y.result;(T.values?L:N).addKeys(te)}else if(E==="openCursor"){var Q=Y,re=T.values;return Q&&Object.create(Q,{key:{get:function(){return N.addKey(Q.primaryKey),Q.key}},primaryKey:{get:function(){var pe=Q.primaryKey;return N.addKey(pe),pe}},value:{get:function(){return re&&L.addKey(Q.primaryKey),Q.value}}})}return Y})}N.add(l)}}return h[E].apply(this,arguments)}}),D}})}};function Oi(i,o,l){if(l.numFailures===0)return o;if(o.type==="deleteRange")return null;var u=o.keys?o.keys.length:"values"in o&&o.values?o.values.length:1;return l.numFailures===u?null:(o=s({},o),d(o.keys)&&(o.keys=o.keys.filter(function(h,m){return!(m in l.failures)})),"values"in o&&d(o.values)&&(o.values=o.values.filter(function(h,m){return!(m in l.failures)})),o)}function Ds(i,o){return l=i,((u=o).lower===void 0||(u.lowerOpen?0<Ce(l,u.lower):0<=Ce(l,u.lower)))&&(i=i,(o=o).upper===void 0||(o.upperOpen?Ce(i,o.upper)<0:Ce(i,o.upper)<=0));var l,u}function zi(i,o,F,u,h,m){if(!F||F.length===0)return i;var g=o.query.index,w=g.multiEntry,C=o.query.range,S=u.schema.primaryKey.extractKey,D=g.extractKey,x=(g.lowLevelIndex||g).extractKey,F=F.reduce(function(E,T){var j=E,A=[];if(T.type==="add"||T.type==="put")for(var z=new gt,I=T.values.length-1;0<=I;--I){var L,N=T.values[I],W=S(N);z.hasKey(W)||(L=D(N),(w&&d(L)?L.some(function(Q){return Ds(Q,C)}):Ds(L,C))&&(z.addKey(W),A.push(N)))}switch(T.type){case"add":var Z=new gt().addKeys(o.values?E.map(function(re){return S(re)}):E),j=E.concat(o.values?A.filter(function(re){return re=S(re),!Z.hasKey(re)&&(Z.addKey(re),!0)}):A.map(function(re){return S(re)}).filter(function(re){return!Z.hasKey(re)&&(Z.addKey(re),!0)}));break;case"put":var H=new gt().addKeys(T.values.map(function(re){return S(re)}));j=E.filter(function(re){return!H.hasKey(o.values?S(re):re)}).concat(o.values?A:A.map(function(re){return S(re)}));break;case"delete":var Y=new gt().addKeys(T.keys);j=E.filter(function(re){return!Y.hasKey(o.values?S(re):re)});break;case"deleteRange":var te=T.range;j=E.filter(function(re){return!Ds(S(re),te)})}return j},i);return F===i?i:(F.sort(function(E,T){return Ce(x(E),x(T))||Ce(S(E),S(T))}),o.limit&&o.limit<1/0&&(F.length>o.limit?F.length=o.limit:i.length===o.limit&&F.length<o.limit&&(h.dirty=!0)),m?Object.freeze(F):F)}function Ii(i,o){return Ce(i.lower,o.lower)===0&&Ce(i.upper,o.upper)===0&&!!i.lowerOpen==!!o.lowerOpen&&!!i.upperOpen==!!o.upperOpen}function Ha(i,o){return(function(l,u,h,m){if(l===void 0)return u!==void 0?-1:0;if(u===void 0)return 1;if((u=Ce(l,u))===0){if(h&&m)return 0;if(h)return 1;if(m)return-1}return u})(i.lower,o.lower,i.lowerOpen,o.lowerOpen)<=0&&0<=(function(l,u,h,m){if(l===void 0)return u!==void 0?1:0;if(u===void 0)return-1;if((u=Ce(l,u))===0){if(h&&m)return 0;if(h)return-1;if(m)return 1}return u})(i.upper,o.upper,i.upperOpen,o.upperOpen)}function Ka(i,o,l,u){i.subscribers.add(l),u.addEventListener("abort",function(){var h,m;i.subscribers.delete(l),i.subscribers.size===0&&(h=i,m=o,setTimeout(function(){h.subscribers.size===0&&q(m,h)},3e3))})}var Va={stack:"dbcore",level:0,name:"Cache",create:function(i){var o=i.schema.name;return s(s({},i),{transaction:function(l,u,h){var m,g,w=i.transaction(l,u,h);return u==="readwrite"&&(g=(m=new AbortController).signal,h=function(C){return function(){if(m.abort(),u==="readwrite"){for(var S=new Set,D=0,x=l;D<x.length;D++){var F=x[D],E=kn["idb://".concat(o,"/").concat(F)];if(E){var T=i.table(F),j=E.optimisticOps.filter(function(re){return re.trans===w});if(w._explicit&&C&&w.mutatedParts)for(var A=0,z=Object.values(E.queries.query);A<z.length;A++)for(var I=0,L=(Z=z[A]).slice();I<L.length;I++)Cs((H=L[I]).obsSet,w.mutatedParts)&&(q(Z,H),H.subscribers.forEach(function(re){return S.add(re)}));else if(0<j.length){E.optimisticOps=E.optimisticOps.filter(function(re){return re.trans!==w});for(var N=0,W=Object.values(E.queries.query);N<W.length;N++)for(var Z,H,Y,te=0,Q=(Z=W[N]).slice();te<Q.length;te++)(H=Q[te]).res!=null&&w.mutatedParts&&(C&&!H.dirty?(Y=Object.isFrozen(H.res),Y=zi(H.res,H.req,j,T,H,Y),H.dirty?(q(Z,H),H.subscribers.forEach(function(re){return S.add(re)})):Y!==H.res&&(H.res=Y,H.promise=G.resolve({result:Y}))):(H.dirty&&q(Z,H),H.subscribers.forEach(function(re){return S.add(re)})))}}}S.forEach(function(re){return re()})}}},w.addEventListener("abort",h(!1),{signal:g}),w.addEventListener("error",h(!1),{signal:g}),w.addEventListener("complete",h(!0),{signal:g})),w},table:function(l){var u=i.table(l),h=u.schema.primaryKey;return s(s({},u),{mutate:function(m){var g=X.trans;if(h.outbound||g.db._options.cache==="disabled"||g.explicit||g.idbtrans.mode!=="readwrite")return u.mutate(m);var w=kn["idb://".concat(o,"/").concat(l)];return w?(g=u.mutate(m),m.type!=="add"&&m.type!=="put"||!(50<=m.values.length||Ts(h,m).some(function(C){return C==null}))?(w.optimisticOps.push(m),m.mutatedParts&&Tr(m.mutatedParts),g.then(function(C){0<C.numFailures&&(q(w.optimisticOps,m),(C=Oi(0,m,C))&&w.optimisticOps.push(C),m.mutatedParts&&Tr(m.mutatedParts))}),g.catch(function(){q(w.optimisticOps,m),m.mutatedParts&&Tr(m.mutatedParts)})):g.then(function(C){var S=Oi(0,s(s({},m),{values:m.values.map(function(D,x){var F;return C.failures[x]?D:(D=(F=h.keyPath)!==null&&F!==void 0&&F.includes(".")?_(D):s({},D),ye(D,h.keyPath,C.results[x]),D)})}),C);w.optimisticOps.push(S),queueMicrotask(function(){return m.mutatedParts&&Tr(m.mutatedParts)})}),g):u.mutate(m)},query:function(m){if(!Fi(X,u)||!Ri("query",m))return u.query(m);var g=((S=X.trans)===null||S===void 0?void 0:S.db._options.cache)==="immutable",x=X,w=x.requery,C=x.signal,S=(function(T,j,A,z){var I=kn["idb://".concat(T,"/").concat(j)];if(!I)return[];if(!(j=I.queries[A]))return[null,!1,I,null];var L=j[(z.query?z.query.index.name:null)||""];if(!L)return[null,!1,I,null];switch(A){case"query":var N=L.find(function(W){return W.req.limit===z.limit&&W.req.values===z.values&&Ii(W.req.query.range,z.query.range)});return N?[N,!0,I,L]:[L.find(function(W){return("limit"in W.req?W.req.limit:1/0)>=z.limit&&(!z.values||W.req.values)&&Ha(W.req.query.range,z.query.range)}),!1,I,L];case"count":return N=L.find(function(W){return Ii(W.req.query.range,z.query.range)}),[N,!!N,I,L]}})(o,l,"query",m),D=S[0],x=S[1],F=S[2],E=S[3];return D&&x?D.obsSet=m.obsSet:(x=u.query(m).then(function(T){var j=T.result;if(D&&(D.res=j),g){for(var A=0,z=j.length;A<z;++A)Object.freeze(j[A]);Object.freeze(j)}else T.result=_(j);return T}).catch(function(T){return E&&D&&q(E,D),Promise.reject(T)}),D={obsSet:m.obsSet,promise:x,subscribers:new Set,type:"query",req:m,dirty:!1},E?E.push(D):(E=[D],(F=F||(kn["idb://".concat(o,"/").concat(l)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[m.query.index.name||""]=E)),Ka(D,E,w,C),D.promise.then(function(T){return{result:zi(T.result,m,F?.optimisticOps,u,D,g)}})}})}})}};function jr(i,o){return new Proxy(i,{get:function(l,u,h){return u==="db"?o:Reflect.get(l,u,h)}})}var en=(nt.prototype.version=function(i){if(isNaN(i)||i<.1)throw new ee.Type("Given version is not a positive number");if(i=Math.round(10*i)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,i);var o=this._versions,l=o.filter(function(u){return u._cfg.version===i})[0];return l||(l=new this.Version(i),o.push(l),o.sort(za),l.stores({}),this._state.autoSchema=!1,l)},nt.prototype._whenReady=function(i){var o=this;return this.idbdb&&(this._state.openComplete||X.letThrough||this._vip)?i():new G(function(l,u){if(o._state.openComplete)return u(new ee.DatabaseClosed(o._state.dbOpenError));if(!o._state.isBeingOpened){if(!o._state.autoOpen)return void u(new ee.DatabaseClosed);o.open().catch(ce)}o._state.dbReadyPromise.then(l,u)}).then(i)},nt.prototype.use=function(i){var o=i.stack,l=i.create,u=i.level,h=i.name;return h&&this.unuse({stack:o,name:h}),i=this._middlewares[o]||(this._middlewares[o]=[]),i.push({stack:o,create:l,level:u??10,name:h}),i.sort(function(m,g){return m.level-g.level}),this},nt.prototype.unuse=function(i){var o=i.stack,l=i.name,u=i.create;return o&&this._middlewares[o]&&(this._middlewares[o]=this._middlewares[o].filter(function(h){return u?h.create!==u:!!l&&h.name!==l})),this},nt.prototype.open=function(){var i=this;return vn(Xe,function(){return Ma(i)})},nt.prototype._close=function(){var i=this._state,o=In.indexOf(this);if(0<=o&&In.splice(o,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}i.isBeingOpened||(i.dbReadyPromise=new G(function(l){i.dbReadyResolve=l}),i.openCanceller=new G(function(l,u){i.cancelOpen=u}))},nt.prototype.close=function(l){var o=(l===void 0?{disableAutoOpen:!0}:l).disableAutoOpen,l=this._state;o?(l.isBeingOpened&&l.cancelOpen(new ee.DatabaseClosed),this._close(),l.autoOpen=!1,l.dbOpenError=new ee.DatabaseClosed):(this._close(),l.autoOpen=this._options.autoOpen||l.isBeingOpened,l.openComplete=!1,l.dbOpenError=null)},nt.prototype.delete=function(i){var o=this;i===void 0&&(i={disableAutoOpen:!0});var l=0<arguments.length&&typeof arguments[0]!="object",u=this._state;return new G(function(h,m){function g(){o.close(i);var w=o._deps.indexedDB.deleteDatabase(o.name);w.onsuccess=Be(function(){var C,S,D;C=o._deps,S=o.name,D=C.indexedDB,C=C.IDBKeyRange,xs(D)||S===br||vs(D,C).delete(S).catch(ce),h()}),w.onerror=Kt(m),w.onblocked=o._fireOnBlocked}if(l)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");u.isBeingOpened?u.dbReadyPromise.then(g):g()})},nt.prototype.backendDB=function(){return this.idbdb},nt.prototype.isOpen=function(){return this.idbdb!==null},nt.prototype.hasBeenClosed=function(){var i=this._state.dbOpenError;return i&&i.name==="DatabaseClosed"},nt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},nt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(nt.prototype,"tables",{get:function(){var i=this;return c(this._allTables).map(function(o){return i._allTables[o]})},enumerable:!1,configurable:!0}),nt.prototype.transaction=function(){var i=function(o,l,u){var h=arguments.length;if(h<2)throw new ee.InvalidArgument("Too few arguments");for(var m=new Array(h-1);--h;)m[h-1]=arguments[h];return u=m.pop(),[o,wt(m),u]}.apply(this,arguments);return this._transaction.apply(this,i)},nt.prototype._transaction=function(i,o,l){var u=this,h=X.trans;h&&h.db===this&&i.indexOf("!")===-1||(h=null);var m,g,w=i.indexOf("?")!==-1;i=i.replace("!","").replace("?","");try{if(g=o.map(function(S){if(S=S instanceof u.Table?S.name:S,typeof S!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return S}),i=="r"||i===ls)m=ls;else{if(i!="rw"&&i!=cs)throw new ee.InvalidArgument("Invalid transaction mode: "+i);m=cs}if(h){if(h.mode===ls&&m===cs){if(!w)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");h=null}h&&g.forEach(function(S){if(h&&h.storeNames.indexOf(S)===-1){if(!w)throw new ee.SubTransaction("Table "+S+" not included in parent transaction.");h=null}}),w&&h&&!h.active&&(h=null)}}catch(S){return h?h._promise(null,function(D,x){x(S)}):tt(S)}var C=function S(D,x,F,E,T){return G.resolve().then(function(){var j=X.transless||X,A=D._createTransaction(x,F,D._dbSchema,E);if(A.explicit=!0,j={trans:A,transless:j},E)A.idbtrans=E.idbtrans;else try{A.create(),A.idbtrans._explicit=!0,D._state.PR1398_maxLoop=3}catch(L){return L.name===Ke.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return S(D,x,F,null,T)})):tt(L)}var z,I=st(T);return I&&zn(),j=G.follow(function(){var L;(z=T.call(A,A))&&(I?(L=hn.bind(null,null),z.then(L,L)):typeof z.next=="function"&&typeof z.throw=="function"&&(z=Ps(z)))},j),(z&&typeof z.then=="function"?G.resolve(z).then(function(L){return A.active?L:tt(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):j.then(function(){return z})).then(function(L){return E&&A._resolve(),A._completion.then(function(){return L})}).catch(function(L){return A._reject(L),tt(L)})})}.bind(null,this,m,g,h,l);return h?h._promise(m,C,"lock"):X.trans?vn(X.transless,function(){return u._whenReady(C)}):this._whenReady(C)},nt.prototype.table=function(i){if(!$(this._allTables,i))throw new ee.InvalidTable("Table ".concat(i," does not exist"));return this._allTables[i]},nt);function nt(i,o){var l=this;this._middlewares={},this.verno=0;var u=nt.dependencies;this._options=o=s({addons:nt.addons,autoOpen:!0,indexedDB:u.indexedDB,IDBKeyRange:u.IDBKeyRange,cache:"cloned"},o),this._deps={indexedDB:o.indexedDB,IDBKeyRange:o.IDBKeyRange},u=o.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var h,m,g,w,C,S={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ce,dbReadyPromise:null,cancelOpen:ce,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:o.autoOpen};S.dbReadyPromise=new G(function(x){S.dbReadyResolve=x}),S.openCanceller=new G(function(x,F){S.cancelOpen=F}),this._state=S,this.name=i,this.on=Vn(this,"populate","blocked","versionchange","close",{ready:[St,ce]}),this.on.ready.subscribe=Ie(this.on.ready.subscribe,function(x){return function(F,E){nt.vip(function(){var T,j=l._state;j.openComplete?(j.dbOpenError||G.resolve().then(F),E&&x(F)):j.onReadyBeingFired?(j.onReadyBeingFired.push(F),E&&x(F)):(x(F),T=l,E||x(function A(){T.on.ready.unsubscribe(F),T.on.ready.unsubscribe(A)}))})}}),this.Collection=(h=this,Yn(Aa.prototype,function(z,A){this.db=h;var E=pi,T=null;if(A)try{E=A()}catch(I){T=I}var j=z._ctx,A=j.table,z=A.hook.reading.fire;this._ctx={table:A,index:j.index,isPrimKey:!j.index||A.schema.primKey.keyPath&&j.index===A.schema.primKey.name,range:E,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:T,or:j.or,valueMapper:z!==me?z:null}})),this.Table=(m=this,Yn(yi.prototype,function(x,F,E){this.db=m,this._tx=E,this.name=x,this.schema=F,this.hook=m._allTables[x]?m._allTables[x].hook:Vn(null,{creating:[Ye,ce],reading:[Et,me],updating:[It,ce],deleting:[cn,ce]})})),this.Transaction=(g=this,Yn(ja.prototype,function(x,F,E,T,j){var A=this;this.db=g,this.mode=x,this.storeNames=F,this.schema=E,this.chromeTransactionDurability=T,this.idbtrans=null,this.on=Vn(this,"complete","error","abort"),this.parent=j||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new G(function(z,I){A._resolve=z,A._reject=I}),this._completion.then(function(){A.active=!1,A.on.complete.fire()},function(z){var I=A.active;return A.active=!1,A.on.error.fire(z),A.parent?A.parent._reject(z):I&&A.idbtrans&&A.idbtrans.abort(),tt(z)})})),this.Version=(w=this,Yn(Ba.prototype,function(x){this.db=w,this._cfg={version:x,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(C=this,Yn(ki.prototype,function(x,F,E){if(this.db=C,this._ctx={table:x,index:F===":id"?null:F,or:E},this._cmp=this._ascending=Ce,this._descending=function(T,j){return Ce(j,T)},this._max=function(T,j){return 0<Ce(T,j)?T:j},this._min=function(T,j){return Ce(T,j)<0?T:j},this._IDBKeyRange=C._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function(x){0<x.newVersion?console.warn("Another connection wants to upgrade database '".concat(l.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(l.name,"'. Closing db now to resume the delete request.")),l.close({disableAutoOpen:!1})}),this.on("blocked",function(x){!x.newVersion||x.newVersion<x.oldVersion?console.warn("Dexie.delete('".concat(l.name,"') was blocked")):console.warn("Upgrade '".concat(l.name,"' blocked by other connection holding version ").concat(x.oldVersion/10))}),this._maxKey=Jn(o.IDBKeyRange),this._createTransaction=function(x,F,E,T){return new l.Transaction(x,F,E,l._options.chromeTransactionDurability,T)},this._fireOnBlocked=function(x){l.on("blocked").fire(x),In.filter(function(F){return F.name===l.name&&F!==l&&!F._state.vcFired}).map(function(F){return F.on("versionchange").fire(x)})},this.use(Ua),this.use(Va),this.use(Wa),this.use(Na),this.use(qa);var D=new Proxy(this,{get:function(x,F,E){if(F==="_vip")return!0;if(F==="table")return function(j){return jr(l.table(j),D)};var T=Reflect.get(x,F,E);return T instanceof yi?jr(T,D):F==="tables"?T.map(function(j){return jr(j,D)}):F==="_createTransaction"?function(){return jr(T.apply(this,arguments),D)}:T}});this.vip=D,u.forEach(function(x){return x(l)})}var Fr,Ft=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Ya=(js.prototype.subscribe=function(i,o,l){return this._subscribe(i&&typeof i!="function"?i:{next:i,error:o,complete:l})},js.prototype[Ft]=function(){return this},js);function js(i){this._subscribe=i}try{Fr={indexedDB:a.indexedDB||a.mozIndexedDB||a.webkitIndexedDB||a.msIndexedDB,IDBKeyRange:a.IDBKeyRange||a.webkitIDBKeyRange}}catch{Fr={indexedDB:null,IDBKeyRange:null}}function Li(i){var o,l=!1,u=new Ya(function(h){var m=st(i),g,w=!1,C={},S={},D={get closed(){return w},unsubscribe:function(){w||(w=!0,g&&g.abort(),x&&mn.storagemutated.unsubscribe(E))}};h.start&&h.start(D);var x=!1,F=function(){return as(T)},E=function(j){Ar(C,j),Cs(S,C)&&F()},T=function(){var j,A,z;!w&&Fr.indexedDB&&(C={},j={},g&&g.abort(),g=new AbortController,z=(function(I){var L=Re();try{m&&zn();var N=dn(i,I);return N=m?N.finally(hn):N}finally{L&&Ue()}})(A={subscr:j,signal:g.signal,requery:F,querier:i,trans:null}),Promise.resolve(z).then(function(I){l=!0,o=I,w||A.signal.aborted||(C={},(function(L){for(var N in L)if($(L,N))return;return 1})(S=j)||x||(mn(Qn,E),x=!0),as(function(){return!w&&h.next&&h.next(I)}))},function(I){l=!1,["DatabaseClosedError","AbortError"].includes(I?.name)||w||as(function(){w||h.error&&h.error(I)})}))};return setTimeout(F,0),D});return u.hasValue=function(){return l},u.getValue=function(){return o},u}var Cn=en;function Fs(i){var o=gn;try{gn=!0,mn.storagemutated.fire(i),_s(i,!0)}finally{gn=o}}O(Cn,s(s({},ze),{delete:function(i){return new Cn(i,{addons:[]}).delete()},exists:function(i){return new Cn(i,{addons:[]}).open().then(function(o){return o.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(i){try{return o=Cn.dependencies,l=o.indexedDB,o=o.IDBKeyRange,(xs(l)?Promise.resolve(l.databases()).then(function(u){return u.map(function(h){return h.name}).filter(function(h){return h!==br})}):vs(l,o).toCollection().primaryKeys()).then(i)}catch{return tt(new ee.MissingAPI)}var o,l},defineClass:function(){return function(i){p(this,i)}},ignoreTransaction:function(i){return X.trans?vn(X.transless,i):i()},vip:$s,async:function(i){return function(){try{var o=Ps(i.apply(this,arguments));return o&&typeof o.then=="function"?o:G.resolve(o)}catch(l){return tt(l)}}},spawn:function(i,o,l){try{var u=Ps(i.apply(l,o||[]));return u&&typeof u.then=="function"?u:G.resolve(u)}catch(h){return tt(h)}},currentTransaction:{get:function(){return X.trans||null}},waitFor:function(i,o){return o=G.resolve(typeof i=="function"?Cn.ignoreTransaction(i):i).timeout(o||6e4),X.trans?X.trans.waitFor(o):o},Promise:G,debug:{get:function(){return je},set:function(i){Ne(i)}},derive:K,extend:p,props:O,override:Ie,Events:Vn,on:mn,liveQuery:Li,extendObservabilitySet:Ar,getByKeyPath:Ee,setByKeyPath:ye,delByKeyPath:function(i,o){typeof o=="string"?ye(i,o,void 0):"length"in o&&[].map.call(o,function(l){ye(i,l,void 0)})},shallowClone:ft,deepClone:_,getObjectDiff:As,cmp:Ce,asap:fe,minKey:-1/0,addons:[],connections:In,errnames:Ke,dependencies:Fr,cache:kn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(i){return parseInt(i)}).reduce(function(i,o,l){return i+o/Math.pow(10,2*l)})})),Cn.maxKey=Jn(Cn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(mn(Qn,function(i){gn||(i=new CustomEvent(fs,{detail:i}),gn=!0,dispatchEvent(i),gn=!1)}),addEventListener(fs,function(i){i=i.detail,gn||Fs(i)}));var Mn,gn=!1,Bi=function(){};return typeof BroadcastChannel<"u"&&((Bi=function(){(Mn=new BroadcastChannel(fs)).onmessage=function(i){return i.data&&Fs(i.data)}})(),typeof Mn.unref=="function"&&Mn.unref(),mn(Qn,function(i){gn||Mn.postMessage(i)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(i){if(!en.disableBfCache&&i.persisted){je&&console.debug("Dexie: handling persisted pagehide"),Mn?.close();for(var o=0,l=In;o<l.length;o++)l[o].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(i){!en.disableBfCache&&i.persisted&&(je&&console.debug("Dexie: handling persisted pageshow"),Bi(),Fs({all:new gt(-1/0,[[]])}))})),G.rejectionMapper=function(i,o){return!i||i instanceof Me||i instanceof TypeError||i instanceof SyntaxError||!i.name||!Ve[i.name]?i:(o=new Ve[i.name](o||i.message,i),"stack"in i&&M(o,"stack",{get:function(){return this.inner.stack}}),o)},Ne(je),s(en,Object.freeze({__proto__:null,Dexie:en,liveQuery:Li,Entity:mi,cmp:Ce,PropModSymbol:Zt,PropModification:Xn,replacePrefix:function(i,o){return new Xn({replacePrefix:[i,o]})},add:function(i){return new Xn({add:i})},remove:function(i){return new Xn({remove:i})},default:en,RangeSet:gt,mergeRanges:tr,rangesOverlap:Pi}),{default:en}),en})})(Nr)),Nr.exports}var Dl=Tl();const Ws=Pl(Dl),Zi=Symbol.for("Dexie"),Kr=globalThis[Zi]||(globalThis[Zi]=Ws);if(Ws.semVer!==Kr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Ws.semVer} and ${Kr.semVer}`);const{liveQuery:zo,mergeRanges:af,rangesOverlap:lf,RangeSet:cf,cmp:uf,Entity:df,PropModSymbol:hf,PropModification:ff,replacePrefix:pf,add:mf,remove:gf}=Kr,jl="easydb";let Or=null;function Fl(){if(Or)return Or;const e=new Kr(jl);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),Or={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins")},Or}function zr(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(s=>Io(s,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const s=zo(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>s.unsubscribe()}}}function Rl(e,t){return{async find(r){const s=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return s.toArray();const n=Object.entries(r);return s.filter(a=>Io(a,n)).toArray()},async findOne(r){const s=await e.get(r);return s&&s.tableId===t?s:null},async insert(r){const s={...r,tableId:t};return await e.add(s),s},async bulkInsert(r){if(r.length===0)return[];const s=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(s),s},async upsert(r){const s={...r,tableId:t};return await e.put(s),s},async patch(r,s){if(await e.update(r,s)===0)throw new Error(`row patch: no row ${r}`);const a=await e.get(r);if(!a)throw new Error(`row patch: row ${r} vanished after update`);return a},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=zo(()=>e.where("tableId").equals(t).toArray()).subscribe({next:a=>r(a)});return()=>n.unsubscribe()}}}function Io(e,t){for(const[r,s]of t)if(e[r]!==s)return!1;return!0}function Ol(e){return{workspaces:zr(e.workspaces),tables:zr(e.tables),settings:zr(e.settings),plugins:zr(e.plugins),rows:t=>Rl(e.rows,t)}}function zl(e){const{base:t,providers:r,tableById:s,ctx:n}=e,a=new Map;return{...t,rows(c){const d=s(c),p=d?.source;if(p){const v=r.get(p.type);if(v){const P=JSON.stringify(p),$=a.get(c);if($&&$.key===P)return $.coll;const O=v.create(d,n);return a.set(c,{key:P,coll:O}),O}}return a.delete(c),t.rows(c)}}}function Il(){const e=new Map;return{on(t,r){let s=e.get(t);return s||(s=new Set,e.set(t,s)),s.add(r),()=>{s.delete(r)}},emit(t,r){const s=e.get(t);if(s)for(const n of s)try{n(r)}catch(a){console.error(`[event:${String(t)}] listener threw`,a)}}}}const rn=it`
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
`;function wn(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const eo=new WeakSet;function sn(e,t){if(eo.has(t))return;eo.add(t);let r=0,s=0,n=0,a=0,c=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",p=>{if(p.target.closest("button, input, textarea, select, a, label"))return;c=!0,r=p.clientX,s=p.clientY;const P=e.getBoundingClientRect();n=P.left,a=P.top,t.setPointerCapture(p.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",p=>{if(!c)return;const v=p.clientX-r,P=p.clientY-s,$=-e.offsetWidth+80,O=window.innerWidth-80,B=0,M=window.innerHeight-40,K=Math.max($,Math.min(O,n+v)),ae=Math.max(B,Math.min(M,a+P));e.style.position="fixed",e.style.left=`${K}px`,e.style.top=`${ae}px`,e.style.margin="0"});const d=p=>{if(c){c=!1;try{t.releasePointerCapture(p.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",d),t.addEventListener("pointercancel",d)}var Ll=Object.defineProperty,Bl=Object.getOwnPropertyDescriptor,Lo=(e,t,r,s)=>{for(var n=s>1?void 0:s?Bl(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Ll(t,r,n),n};let Rt=class extends Qe{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),Rt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Rt.instance===this&&(Rt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&sn(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(s=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:s}})}choice(e,t,r="Choose"){return this.enqueue(s=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:s}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return U`
      <dialog @cancel=${this.onCancel} @keydown=${wn}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):De}
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
            ${e.message?U`<p class="message">${e.message}</p>`:De}
            <div class="choices">
              ${e.options.map(t=>U`<button class="choice" @click=${()=>this.closeAndResolve(t)}>
                    ${t}
                  </button>`)}
            </div>
          </div>
        `}}};Rt.instance=null;Rt.styles=[rn,it`
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
    `];Lo([J()],Rt.prototype,"current",2);Rt=Lo([ht("host-dialogs")],Rt);const on=it`
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
`;var Ml=Object.defineProperty,Nl=Object.getOwnPropertyDescriptor,Bo=(e,t,r,s)=>{for(var n=s>1?void 0:s?Nl(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Ml(t,r,n),n};let tn=class extends Qe{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),tn.instance=this}disconnectedCallback(){super.disconnectedCallback(),tn.instance===this&&(tn.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const s=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),s)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return U`
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
    `}};tn.instance=null;tn.styles=[on,it`
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
    `];Bo([J()],tn.prototype,"toasts",2);tn=Bo([ht("toast-host")],tn);function ql(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let s=0,n;for(;(n=t.exec(e))!==null;)n.index>s&&r.push(e.slice(s,n.index)),r.push({url:n[0]}),s=n.index+n[0].length;return s<e.length&&r.push(e.slice(s)),r.length===0?e:r.map(a=>typeof a=="string"?a:U`<a href=${a.url} target="_blank" rel="noopener noreferrer">${a.url}</a>`)}function Ul(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Wl(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map}}function _n(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function zs(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function Hl(e){return{registerHeaderButton:t=>_n(e.headerButtons,t),registerFooterButton:t=>_n(e.footerButtons,t),registerTableButton:t=>_n(e.tableButtons,t),registerImporter:t=>_n(e.importers,t),registerExporter:t=>_n(e.exporters,t),registerUrlSource:t=>_n(e.urlSources,t),registerDropHandler:t=>_n(e.dropHandlers,t),registerCellRenderer:(t,r)=>zs(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>zs(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>zs(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},dialogs:Kl}}const Kl={async alert(e,t){const r=Rt.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=Rt.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const s=Rt.instance;return s?s.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const s=Rt.instance;if(s)return s.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=tn.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}};function Vl(e){const t=Hl(e.registries),r=e.registries.rowSources,s=a=>(r.set(a.type,a),()=>{r.get(a.type)===a&&r.delete(a.type)}),n={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:n,registerRowSource:s,backend:{fetch:async(a,c)=>{const d=await Yl(e.store),p=c?.body instanceof ArrayBuffer;if(!d||p)return globalThis.fetch(a,c);const v={url:a};return c?.method&&(v.method=c.method),c?.headers&&(v.headers=c.headers),typeof c?.body=="string"&&(v.body=c.body),globalThis.fetch(`${d}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)})},async saveFile(a,c,d){const p=typeof c=="string"?new Blob([c],{type:d??"application/octet-stream"}):c,v=URL.createObjectURL(p),P=document.createElement("a");P.href=v,P.download=a,P.rel="noopener",document.body.appendChild(P),P.click(),P.remove(),setTimeout(()=>URL.revokeObjectURL(v),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function Yl(e){const r=(await e.settings.findOne("server-sync:url"))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}const Xl={name:"csv-import",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"easyDBAccess built-ins"};function Gl(e){e.ui.registerImporter(Ql),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const s=cc(t).filter(uc);if(s.length===0)return!1;t.preventDefault();for(const n of s)await Jl(e,n);return!0})}const Ql={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return Qr(t)}};async function Jl(e,t){const r=t.name.replace(/\.csv$/i,"")||"imported";await si(e,await t.text(),r)}async function si(e,t,r,s={}){const n=e.workspaceId();if(!n)throw new Error("csv-import: no active workspace");const a=(r||"imported").replace(/\.csv$/i,"")||"imported",c=(await e.store.tables.find()).find($=>$.workspaceId===n&&$.name===a);let d,p;if(c){const $=await e.ui.dialogs.choice(`A table named "${a}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!$)return;$==="Append rows"?(p="append",d=c.id):$==="Overwrite rows"?(p="overwrite",d=c.id):(p="new",d=Ir())}else p="new",d=Ir();e.events.emit("import:before",{source:"csv",tableId:d});let v;if(p==="new"){const $=Qr(t);let O=$.columns,B=$.rows;if(s.editColumns){const K=await s.editColumns(O);if(K===null)return;B=dc(B,O,K),O=K}const M=c?`${a} (${Date.now().toString(36)})`:a;await e.store.tables.insert({id:d,workspaceId:n,name:M,code:Hs(M),columns:O,view:"table",updatedAt:Date.now()}),v=B.map(K=>({id:Ir(),tableId:d,data:K,updatedAt:Date.now()}))}else{const $=c.columns;if(v=Mo(t).rows.map(B=>{const M={};for(let K=0;K<$.length;K++){const ae=$[K];M[ae.field]=Uo(B[K]??"",ae.type)}return{id:Ir(),tableId:d,data:M,updatedAt:Date.now()}}),p==="overwrite"){const B=e.store.rows(d),M=await B.find();await B.bulkRemove(M.map(K=>K.id))}}await e.store.rows(d).bulkInsert(v),e.events.emit("import:after",{source:"csv",tableId:d,rowCount:v.length})}function Mo(e){const t=e.replace(/﻿/,""),r=No(t),s=qo(t,r);if(s.length===0)return{header:[],rows:[]};const n=s[0],a=s.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:n,rows:a}}function Qr(e){const t=e.replace(/﻿/,""),r=No(t),s=qo(t,r);if(s.length===0)return{columns:[],rows:[]};const n=s[0],a=s.slice(1).filter(O=>!(O.length===1&&O[0]==="")),c=n.map((O,B)=>tc(O,B)),d=Ho(c.map(O=>O.field)),p=a.map(O=>{const B={};for(let M=0;M<d.length;M++)B[d[M]]=O[M]??"";return B}),v=c.map((O,B)=>O.type?O.type:nc(p.map(M=>M[d[B]]??"").filter(M=>M.length>0))),P=c.map((O,B)=>{const M=v[B]??"string",K={field:d[B],label:O.label,type:M},ae=ec(M),ge=O.renderer??ae;return ge&&(K.renderer=ge),O.default!==void 0&&(K.default=O.default),O.max!=null&&(K.max=O.max),O.unique&&(K.unique=!0),O.notnull&&(K.notnull=!0),O.hidden&&(K.hidden=!0),K}),$=p.map(O=>{const B={};for(let M=0;M<d.length;M++){const K=d[M],ae=v[M]??"string";B[K]=Uo(O[K]??"",ae)}return B});return{columns:P,rows:$}}const Zl=new Set(["string","number","boolean","date","datetime"]),to={color:"color",image:"image"};function ec(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function tc(e,t){const r=e.trim();if(!r.includes(":"))return{field:Hs(r||`col_${t+1}`),label:r||`Column ${t+1}`};const s=r.split(":"),n=Hs(s[0]||`col_${t+1}`),a=(s[1]??s[0]??"").trim()||n,c={field:n,label:a},d=(s[2]??"").trim();d&&(Zl.has(d)?c.type=d:to[d]&&(c.type="string",c.renderer=to[d]));const p=(s[3]??"").trim();p&&(c.default=p);const v=(s[4]??"").trim();if(v){const $=Number(v);Number.isFinite($)&&$>0&&(c.max=$)}const P=(s[5]??"").toLowerCase();return P.includes("u")&&(c.unique=!0),P.includes("n")&&(c.notnull=!0),P.includes("h")&&(c.hidden=!0),c}function No(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const a of t)a in r&&(r[a]+=1);let s=",",n=-1;for(const a of[",",";","	"])(r[a]??0)>n&&(s=a,n=r[a]??0);return s}function qo(e,t){const r=[];let s=[],n="",a=!1;for(let c=0;c<e.length;c++){const d=e[c];a?d==='"'?e[c+1]==='"'?(n+='"',c++):a=!1:n+=d:d==='"'?a=!0:d===t?(s.push(n),n=""):d===`
`||d==="\r"?(d==="\r"&&e[c+1]===`
`&&c++,s.push(n),r.push(s),s=[],n=""):n+=d}return(n.length>0||s.length>0)&&(s.push(n),r.push(s)),r}function nc(e){return e.length===0?"string":e.every(sc)?"boolean":e.every(ic)?"number":e.every(ac)?"datetime":e.every(oc)?"date":"string"}const rc=/^(true|false|yes|no|0|1)$/i;function sc(e){return rc.test(e.trim())}function ic(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function oc(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function ac(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function Uo(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const s=Number(r);return Number.isFinite(s)?s:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return Wo(r);case"datetime":return lc(r);default:return e}}function Wo(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let s=parseInt(t[1],10),n=parseInt(t[2],10);const a=t[3];let c=parseInt(a,10);a.length===2&&(c+=2e3);let d,p;return s>12?(d=s,p=n):n>12?(p=s,d=n):(d=s,p=n),`${c.toString().padStart(4,"0")}-${p.toString().padStart(2,"0")}-${d.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function lc(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const s=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(s)return`${Wo(`${s[1]}/${s[2]}/${s[3]}`)}T${s[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const a=n.toISOString();return`${a.slice(0,10)}T${a.slice(11,16)}`}return e}function cc(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const s of Array.from(t.items))if(s.kind==="file"){const n=s.getAsFile();n&&r.push(n)}return r}return[]}function uc(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function Ho(e){const t=new Map,r=new Set,s=[];for(const n of e){let a=n,c=t.get(n)??0;for(;r.has(a);)c+=1,a=`${n}_${c+1}`;t.set(n,c),r.add(a),s.push(a)}return s}function dc(e,t,r){return e.map(s=>{const n={};for(let a=0;a<t.length;a++)n[r[a].field]=s[t[a].field];return n})}function Hs(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function Ir(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const hc=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:Ho,importCsvText:si,init:Gl,meta:Xl,parseCsv:Qr,parseCsvRaw:Mo},Symbol.toStringTag,{value:"Module"})),fc={name:"csv-export",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"easyDBAccess built-ins"},pc={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return ii(e,t)}};function mc(e){e.ui.registerExporter(pc),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const s=await t.store.tables.findOne(r.tableId);if(!s)return;const n=await t.store.rows(s.id).find(),a=ii(s,n);await t.backend.saveFile(`${s.code||s.name||"table"}.csv`,a,"text/csv")}})}function ii(e,t){const r=e.columns.map(a=>a.field),s=e.columns.map(a=>no(a.label??a.field)),n=t.map(a=>r.map(c=>no(gc(a.data[c]))).join(","));return[s.join(","),...n].join(`\r
`)}function gc(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function no(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const bc=Object.freeze(Object.defineProperty({__proto__:null,init:mc,meta:fc,serializeCsv:ii},Symbol.toStringTag,{value:"Module"}));var yc=Object.defineProperty,wc=Object.getOwnPropertyDescriptor,Hn=(e,t,r,s)=>{for(var n=s>1?void 0:s?wc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&yc(t,r,n),n};function Ks(e,t={}){return(Tt.instance??vc()).open(e,t)}function vc(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function xc(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Tt=class extends Qe{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,s)=>r?s:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Tt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Tt.instance===this&&(Tt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&sn(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(()=>!0),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return U`
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
    `}};Tt.instance=null;Tt.styles=[rn,it`
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
    `];Hn([J()],Tt.prototype,"items",2);Hn([J()],Tt.prototype,"selected",2);Hn([J()],Tt.prototype,"heading",2);Hn([J()],Tt.prototype,"message",2);Hn([J()],Tt.prototype,"confirmLabel",2);Tt=Hn([ht("table-select-dialog")],Tt);const $c={name:"json-import",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"easyDBAccess built-ins"};function kc(e){e.ui.registerImporter(Cc),e.ui.registerDropHandler(async t=>{const s=Dc(t).filter(jc);if(s.length===0)return!1;t.preventDefault();for(const n of s)await Ec(e,n);return!0})}const Cc={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=Jr(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function Ec(e,t){await oi(e,await t.text(),t.name)}async function oi(e,t,r){const s=e.workspaceId();if(!s)throw new Error("json-import: no active workspace");let n;try{n=JSON.parse(t)}catch(B){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${B.message}`)});return}const a=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=Jr(n,a);if(c.length===0)return;let d=c;if(c.length>1){const B=await Ks(c.map(M=>({name:M.name,size:M.rows.length})),{title:"Import tables",message:`"${r}" contains ${c.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!B)return;d=B.map(M=>c[M])}const p=(await e.store.tables.find()).filter(B=>B.workspaceId===s),v=new Set(d.map(B=>B.name)),P=p.filter(B=>v.has(B.name));let $;if(P.length===0&&d.length===1)$="append-new";else{const B=P.length>0?[`Overwrite matching (${P.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],M=await e.ui.dialogs.choice(`Importing ${d.length} table${d.length===1?"":"s"} from "${r}".${P.length>0?`

${P.length} table${P.length===1?"":"s"} share a name with existing data.`:""}`,B,"JSON import");if(!M)return;M.startsWith("Overwrite matching")?$="overwrite-matching":M==="Replace entire workspace"?$="replace-workspace":$="append-new"}if($==="replace-workspace")for(const B of p){const M=e.store.rows(B.id),K=await M.find();await M.bulkRemove(K.map(ae=>ae.id)),await e.store.tables.remove(B.id)}const O=new Map(p.map(B=>[B.name,B]));for(const B of d){let M;const K=$==="overwrite-matching"?O.get(B.name):void 0;if(K){M=K.id;const be=e.store.rows(M),Ie=await be.find();await be.bulkRemove(Ie.map(se=>se.id)),await e.store.tables.patch(M,{columns:B.columns,...B.windowGeometry?{windowGeometry:B.windowGeometry}:{},...B.sortColumn?{sortColumn:B.sortColumn,sortAsc:B.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},updatedAt:Date.now()})}else M=oo(),e.events.emit("import:before",{source:"json",tableId:M}),await e.store.tables.insert({id:M,workspaceId:s,name:B.name,code:Fc(B.name),columns:B.columns,view:"table",...B.windowGeometry?{windowGeometry:B.windowGeometry}:{},...B.sortColumn?{sortColumn:B.sortColumn,sortAsc:B.sortAsc??!0}:{},updatedAt:Date.now()});const ae=e.store.rows(M),ge=B.rows.map(be=>({id:oo(),tableId:M,data:be,updatedAt:Date.now()}));await ae.bulkInsert(ge),e.events.emit("import:after",{source:"json",tableId:M,rowCount:B.rows.length})}}function Jr(e,t){if(Bt(e)&&ro(e))return so(e);if(Bt(e)&&Array.isArray(e.tables)){const r=e,s=[];for(const n of r.tables){if(_c(n)){const a=n,c=Bt(a.windowGeometry)?a.windowGeometry:void 0,d=typeof a.sortColumn=="string"?a.sortColumn:void 0,p=typeof a.sortAsc=="boolean"?a.sortAsc:void 0;s.push({name:String(n.name),columns:n.columns.map(Pc),rows:Array.isArray(n.rows)?n.rows.filter(Bt):[],...c?{windowGeometry:c}:{},...d?{sortColumn:d,sortAsc:p??!0}:{}});continue}Bt(n)&&ro(n)&&s.push(...so(n))}return s}if(Array.isArray(e)){const r=e.filter(Bt);return r.length===0?[]:[{name:t,...io(r)}]}return Bt(e)?[{name:t,...io([e])}]:[]}function ro(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!Bt(r))continue;const s=r;if(Array.isArray(s.dataArray)&&Array.isArray(s.columns))return!0}return!1}function so(e){const t=[];for(const[r,s]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!Bt(s))continue;const n=s;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const a=r.replace(/\.table\.json$/,""),c=n.columns.map(P=>Sc(P)),d=c.map(P=>P.field),p=n.dataArray.filter(P=>Array.isArray(P)).map(P=>{const $={};for(let O=0;O<d.length;O++)$[d[O]]=P[O];return $}),v={name:a,columns:c,rows:p};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const P=n.elementRect;v.windowGeometry={x:P.x,y:P.y,w:P.width??600,h:P.height??400,z:P.zIndex??100,minimized:!!P.minimized,maximized:!!P.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<d.length&&(v.sortColumn=d[n.sortColumn],v.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(v)}return t}function Sc(e){const t=String(e.field??"col"),r=String(e.name??t),s=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:s};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function _c(e){return Bt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Pc(e){if(!Bt(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let s=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(s==="color"||s==="image")&&(n=n??s,s="string");const a={field:r,label:String(t.label??r),type:s};return n&&(a.renderer=n),typeof t.script=="string"&&(a.script=t.script),a}function io(e){const t=new Set;for(const n of e)for(const a of Object.keys(n))t.add(a);return{columns:Array.from(t).map(n=>({field:n,label:n,type:Ac(e.map(a=>a[n]))})),rows:e}}function Ac(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Tc(r))?"date":"string"}function Tc(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function Bt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Dc(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const s of Array.from(t.items))if(s.kind==="file"){const n=s.getAsFile();n&&r.push(n)}return r}return[]}function jc(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function Fc(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function oo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Rc=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:oi,init:kc,meta:$c,parsedToTables:Jr},Symbol.toStringTag,{value:"Module"}));class Yt extends Error{constructor(t,r){const s=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(s),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function On(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),s={};for(const[d,p]of t.searchParams)s[d]=p;let n,a=null,c=null;if(r.length>=2){c=decodeURIComponent(r[r.length-1]),a=decodeURIComponent(r[r.length-2]);const d=r.slice(0,r.length-2).join("/");n=t.origin+(d?"/"+d:"")}else r.length===1&&(a=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:a,table:c,query:s}}function Vr(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[s,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(s,String(n));return r.toString()}function Oc(e){const t=e?.next_url??null,r=e?.next,s=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],a=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(d=>Array.isArray(d)&&a?Object.fromEntries(a.map((p,v)=>[p,d[v]])):d),nextUrl:t,nextToken:s,hasMore:t!=null||s!=null,truncated:e?.truncated===!0}}function zc(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function Ic(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],s={},n=e?.column_details;if(Array.isArray(n))for(const d of n)s[d.column??d.name]=d;else n&&typeof n=="object"&&Object.assign(s,n);for(const d of r)d in s||(s[d]={});return{columns:(r.length?r:Object.keys(s)).map(d=>{const p=s[d]||{},v=p.is_pk===!0||p.is_pk===1||t.includes(d),P={field:d,label:Ko(d),type:zc(p.sqlite_type??p.type,d)};return(p.notnull===!0||p.notnull===1||v)&&(P.notnull=!0),v&&(P.unique=!0),p.hidden===!0&&(P.hidden=!0),P}),pks:t}}function Ko(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function ai(e){const t=[],r=new Set;for(const s of e)for(const n of Object.keys(s))r.has(n)||(r.add(n),t.push(n));return t.map(s=>({field:s,label:Ko(s),type:Lc(e.map(n=>n[s]))}))}function Lc(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Bc(r))?"datetime":"string"}function Bc(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Mc(e){const t=new TextEncoder().encode(String(e));let r="";for(const s of t){const n=String.fromCharCode(s);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+s.toString(16).toUpperCase().padStart(2,"0")}return r}function Nc(e,t){return!t||t.length===0?null:t.map(r=>Mc(e[r])).join(",")}function qc(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const s of t){if(typeof s=="string"){r.push(s);continue}if(s&&typeof s=="object"&&typeof s.name=="string"){if(s.name==="_memory")continue;r.push(typeof s.route=="string"&&s.route?s.route:s.name)}}return r}function Uc(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],s=[];for(const n of r){if(typeof n=="string"){s.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&s.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return s}async function ur(e,t){let r;try{r=await e(t)}catch(n){const a=n?.message||"network error";throw new Yt({error:`Couldn't reach ${t} (${a}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Yt(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const s=await r.json();if(s&&s.ok===!1)throw new Yt(s,r.status);return s}async function Vo(e,t){return qc(await ur(e,`${t}/-/databases.json`))}async function ao(e,t,r){return Uc(await ur(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function Yo(e,t){const r=Vr(t,{_extra:"columns"}),s=await ur(e,r),{columns:n,pks:a}=Ic(s),c=!!s&&s.column_details!=null;return{columns:n,pks:a,count:s?.count??null,typed:c,raw:s}}function Xo(e,t){if(t.length===0)return e;const r=new Map(ai(t).map(s=>[s.field,s.type]));return e.map(s=>{if(s.type!=="string")return s;const n=r.get(s.field);return n&&n!=="string"?{...s,type:n}:s})}async function Zr(e,t,r={}){const s=r.maxRows??1e4,a={_size:r.pageSize??1e3,...r.extraParams||{}};let c=Vr(t,a);const d=[];let p=!1,v=!1,P=0;for(;c;){const $=await ur(e,c),O=Oc($);d.push(...O.rows),p=p||O.truncated,P+=1,r.onProgress?.(d.length);const B=O.nextUrl!=null?O.nextUrl:O.nextToken!=null?Vr(t,{_next:O.nextToken}):null;B&&d.length<s&&O.rows.length>0?c=B:(v=B!=null&&O.rows.length>0,c=null)}return{rows:d,truncated:p,hasMore:v,pages:P}}function Wc(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function Go(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function Qo(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function es(e,t,r,s){let n;try{n=await e(t,{method:"POST",headers:Wc(s),body:JSON.stringify(r)})}catch(c){throw new Yt({error:`Couldn't reach ${t} (${c?.message||"network error"}).`},0)}if(n&&n.ok===!1){let c=null;try{c=await n.json()}catch{}throw new Yt(c&&typeof c=="object"?c:{error:`HTTP ${n.status} for ${t}`},n.status)}const a=await n.json();if(a&&a.ok===!1)throw new Yt(a,n.status);return a}async function lo(e,t,r,s={}){const n=await es(e,Go(t,"insert"),{rows:r,return:!0},s.token);return Array.isArray(n?.rows)?n.rows:[]}async function Hc(e,t,r,s,n={}){const a=await es(e,Qo(t,r,"update"),{update:s,return:!0},n.token);return a&&typeof a.row=="object"&&a.row?a.row:Array.isArray(a?.rows)&&a.rows[0]?a.rows[0]:null}async function co(e,t,r,s={}){await es(e,Qo(t,r,"delete"),{},s.token)}async function Kc(e,t,r,s={}){const n=await es(e,Go(t,"upsert"),{rows:r,return:!0},s.token);return Array.isArray(n?.rows)?n.rows:[]}async function Vc(e,t){const r=Vr(t,{_extra:"primary_keys"}),s=await ur(e,r);return Array.isArray(s?.primary_keys)?s.primary_keys:[]}async function Jo(e,t,r={}){const s=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,s);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const a=await n.json(),c=a?.datasette?.version??a?.version??null;let d=null;try{d=(await(await e(`${t}/-/actor.json`,s)).json())?.actor??null}catch{}return{reachable:!0,version:c,actor:d,writable:!!(r.token&&d)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function ts(e,t){return t?(r,s)=>{const n=(s??{}).headers??{};return e(r,{...s??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zo=Symbol.for(""),Yc=e=>{if(e?.r===Zo)return e?._$litStatic$},Xc=e=>({_$litStatic$:e,r:Zo}),uo=new Map,Gc=e=>(t,...r)=>{const s=r.length;let n,a;const c=[],d=[];let p,v=0,P=!1;for(;v<s;){for(p=t[v];v<s&&(a=r[v],(n=Yc(a))!==void 0);)p+=n+t[++v],P=!0;v!==s&&d.push(a),c.push(p),v++}if(v===s&&c.push(t[s]),P){const $=c.join("$$lit$$");(t=uo.get($))===void 0&&(c.raw=c,uo.set($,t=c)),r=d}return e(t,...r)},Qc=Gc(U);var Jc=Object.defineProperty,Zc=Object.getOwnPropertyDescriptor,ns=(e,t,r,s)=>{for(var n=s>1?void 0:s?Zc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Jc(t,r,n),n};let Mt=class extends Qe{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r){return this.values=t,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(s=>{this.resolveFn=s,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),Mt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Mt.instance===this&&(Mt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(r=>r.value.toLowerCase().includes(e));return U`
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
    `}};Mt.instance=null;Mt.styles=[on,it`
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
    `];ns([Gt({type:Array})],Mt.prototype,"values",2);ns([Gt({type:String})],Mt.prototype,"current",2);ns([J()],Mt.prototype,"search",2);Mt=ns([ht("filter-popover")],Mt);var eu=Object.defineProperty,tu=Object.getOwnPropertyDescriptor,qt=(e,t,r,s)=>{for(var n=s>1?void 0:s?tu(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&eu(t,r,n),n};let Dt=class extends Qe{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const s of this.options)if(s.toLowerCase().includes(t)&&(r.push(s),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return U`
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
            </button>`:De}
      </div>
      ${this.open?U`<ul class="dropdown" style=${t}>
            ${e.length===0?U`<li class="empty">No matching values.</li>`:e.map((r,s)=>U`
                    <li
                      class=${s===this.highlightIdx?"highlighted":""}
                      @mousedown=${n=>n.preventDefault()}
                      @click=${()=>this.onPick(r)}
                    >
                      ${r}
                    </li>
                  `)}
          </ul>`:De}
    `}};Dt.styles=it`
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
  `;qt([Gt({type:String})],Dt.prototype,"value",2);qt([Gt({type:Array})],Dt.prototype,"options",2);qt([Gt({type:String})],Dt.prototype,"placeholder",2);qt([J()],Dt.prototype,"open",2);qt([J()],Dt.prototype,"highlightIdx",2);qt([J()],Dt.prototype,"dropTop",2);qt([J()],Dt.prototype,"dropLeft",2);qt([J()],Dt.prototype,"dropMinWidth",2);qt([J()],Dt.prototype,"editing",2);qt([Wn("input")],Dt.prototype,"inputEl",2);Dt=qt([ht("filter-combobox")],Dt);var nu=Object.defineProperty,ru=Object.getOwnPropertyDescriptor,lt=(e,t,r,s)=>{for(var n=s>1?void 0:s?ru(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&nu(t,r,n),n};const su=200;let rt=class extends Qe{constructor(){super(...arguments),this.tableId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;t.tableId===this.tableId&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.()}async updated(e){e.has("tableId")&&this.tableId&&(this.unsubscribe?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells()}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",iu(t))}async bind(){if(!this.tableId)return;const e=await Fe(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const a=n.find(c=>c.id===this.tableId);a&&this.applyTable(a)}),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const s=window.setTimeout(()=>this.loading=!0,su);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(s),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filters={...e.filters??{}}}async setCell(e,t,r){const s=await Fe();await this.commitCell(s,e,t,r)}async commitCell(e,t,r,s){const n=this.columns.find(a=>a.field===r);if(n){const a=ou(n,s,this.rows,t.id);if(a){await e.api.ui.dialogs.alert(a,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:s},updatedAt:Date.now()})}catch(a){await e.api.ui.dialogs.alert(a?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}renderCell(e,t){const r=e.data[t.field],s=t.renderer,n=s?this.cellRenderers?.get(s):void 0;if(n){const a=Xc(n);return Qc`<${a}
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
        />`}}async deleteRow(e){const t=await Fe();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await Fe(),s=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};await r.store.tables.patch(this.tableId,s)}filteredRows(){const e=Object.entries(this.filters).filter(([,s])=>s&&s.trim().length>0),t=this.globalQuery.trim().toLowerCase(),r=this.localQuery.trim().toLowerCase();return e.length===0&&t.length===0&&r.length===0?this.rows:this.rows.filter(s=>{const n=a=>Object.values(s.data).some(c=>c!=null&&String(c).toLowerCase().includes(a));return t.length>0&&!n(t)||r.length>0&&!n(r)?!1:e.every(([a,c])=>String(s.data[a]??"").toLowerCase().includes(c.toLowerCase()))})}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,s=this.columns.find(c=>c.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,a=[...e];return a.sort((c,d)=>{const p=c.data[t],v=d.data[t],P=B=>B==null?0:B===""?1:2,$=P(p),O=P(v);return $!==2||O!==2?($-O)*n:cu(p,v,s)*n}),a}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,s=Mt.instance;if(!s)return;const n=new Map;for(const d of this.rowsFacetedFor(t)){const p=d.data[t];if(p==null)continue;const v=String(p);n.set(v,(n.get(v)??0)+1)}const a=[...n.entries()].map(([d,p])=>({value:d,count:p})).sort((d,p)=>p.count-d.count||d.value.localeCompare(p.value)),c=await s.open(r.getBoundingClientRect(),a,this.filters[t]??"");c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>this.saveFilters(),250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,s])=>s&&s.trim().length>0&&r!==e).map(([r,s])=>[r,s.trim().toLowerCase()]);return t.length===0?this.rows:this.rows.filter(r=>t.every(([s,n])=>String(r.data[s]??"").toLowerCase().includes(n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,s=500;for(const n of this.visibleColumns){let a=!0;for(const d of t){const p=d.data[n.field];if(p==null)continue;if((typeof p=="string"?p:String(p)).length>=r){a=!1;break}}if(!a)continue;const c=new Set;for(const d of this.rowsFacetedFor(n.field)){const p=d.data[n.field];if(p==null||p==="")continue;const v=typeof p=="string"?p:String(p);if(!(v.length>=r)&&(c.add(v),c.size>=s))break}e.set(n.field,[...c].sort())}return e}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const s=r.offsetWidth;this.resizing={field:t,startX:e.clientX,startW:s};const n=c=>{if(!this.resizing)return;const d=c.clientX-this.resizing.startX,p=Math.max(40,this.resizing.startW+d);this.columns=this.columns.map(v=>v.field===this.resizing.field?{...v,width:p}:v)},a=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",a);const c=this.resizing?.field;if(this.resizing=null,!c)return;await(await Fe()).store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",a)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const s=r.getBoundingClientRect(),n=e.clientX<s.left+s.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,s=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!s)return;const n=[...this.columns],a=n.findIndex(v=>v.field===r);if(a<0)return;const[c]=n.splice(a,1);let d=n.findIndex(v=>v.field===t);if(d<0){n.splice(a,0,c);return}s==="after"&&(d+=1),n.splice(d,0,c),await(await Fe()).store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await Fe(),t={};for(const[s,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[s]=n);const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,s=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,s+r);return{slice:e.slice(s,n),topPad:s*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows(),t=this.visibleColumns,{slice:r,topPad:s,bottomPad:n}=this.virtualSlice(e),a=this.computeFilterSuggestions(),c=this.externalLoading?this.externalProgress:null;return U`
      ${this.loading||this.externalLoading?U`<div
            class="load-bar"
            role="progressbar"
            aria-label="Loading rows"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${c!=null?Math.round(c*100):De}
          >
            <div
              class="load-bar-fill ${c!=null?"determinate":""}"
              style=${c!=null?`width:${Math.max(2,Math.round(c*100))}%`:De}
            ></div>
          </div>`:De}
      <table>
        <colgroup>
          ${t.map(d=>U`<col style=${d.width!=null?`width: ${d.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(d=>{const p=this.sortColumn===d.field&&this.sortDir,v=p==="asc"?"▲":p==="desc"?"▼":"⇅",P=`t-${d.type}`,$=this.dragSourceField===d.field,O=this.dropTargetField===d.field,B=O&&this.dropEdge==="before"?" drop-before":O&&this.dropEdge==="after"?" drop-after":"";return U`
                <th
                  class=${`${P}${p?" sorted":""}${$?" drag-source":""}${B}`}
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
            ${t.map(d=>{const p=a.get(d.field)??[];return U`
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
          ${s>0?U`<tr class="spacer" style=${`height:${s}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${r.map(d=>U`
              <tr>
                ${t.map(p=>U`<td class=${`t-${p.type}${p.renderer?` r-${p.renderer}`:""}`}>
                      ${this.renderCell(d,p)}
                    </td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(d.id)}>
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
    `}};rt.styles=[on,it`
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
    `];lt([Gt({type:String})],rt.prototype,"tableId",2);lt([J()],rt.prototype,"columns",2);lt([J()],rt.prototype,"rows",2);lt([J()],rt.prototype,"sortColumn",2);lt([J()],rt.prototype,"sortDir",2);lt([J()],rt.prototype,"filters",2);lt([J()],rt.prototype,"globalQuery",2);lt([J()],rt.prototype,"localQuery",2);lt([J()],rt.prototype,"dragSourceField",2);lt([J()],rt.prototype,"dropTargetField",2);lt([J()],rt.prototype,"dropEdge",2);lt([J()],rt.prototype,"resizing",2);lt([J()],rt.prototype,"cellRenderers",2);lt([J()],rt.prototype,"scrollY",2);lt([J()],rt.prototype,"viewportHeight",2);lt([J()],rt.prototype,"loading",2);lt([J()],rt.prototype,"externalLoading",2);lt([J()],rt.prototype,"externalProgress",2);rt=lt([ht("data-table")],rt);function iu(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function ou(e,t,r,s){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(a=>a.id!==s&&a.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function au(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function lu(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const s=new Date(t);if(Number.isNaN(s.getTime()))return"";const n=s.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function cu(e,t,r){switch(r){case"number":{const s=Number(e),n=Number(t);return Number.isNaN(s)||Number.isNaN(n)?String(e).localeCompare(String(t)):s-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const s=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(s)||Number.isNaN(n)?String(e).localeCompare(String(t)):s-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function Is(e,t,r){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:r}}))}class uu extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function ea(e){return`datasette:token:${e}`}function du(e,t){for(const[r,s]of Object.entries(t))if(r!=="data"&&e[r]!==s)return!1;return!0}function hu(e,t){const r=e.source,s=r?.config??{},n={base:s.base,db:s.db,table:s.table,query:{}},a=Array.isArray(s.pks)&&s.pks.length>0?s.pks:["rowid"],c=r?.writable===!0,d=s.maxRows??1e4,p=s.pollIntervalMs??0,v=(se,fe)=>t.backend.fetch(se,fe);async function P(){const fe=(await t.settings.findOne(ea(s.base)))?.value;return typeof fe=="string"&&fe.length>0?fe:void 0}const $=async(se,fe)=>ts(v,await P())(se,fe);function O(se){return{id:Nc(se,a)??fu(),tableId:e.id,data:se,updatedAt:Date.now()}}function B(se){if(!c)throw new uu(se)}function M(se){const fe={};for(const[Ee,ye]of Object.entries(se))a.includes(Ee)||(fe[Ee]=ye);return fe}const K=new Set;let ae=[],ge=!1,be=null;function Ie(){return be||(be=(async()=>{try{const{rows:se}=await Zr($,n,{maxRows:d});ae=se.map(O),ge=!0;for(const fe of K)fe(ae);return ae}finally{be=null}})(),be)}return{async find(se){const fe=ge?ae:await Ie();return!se||Object.keys(se).length===0?fe:fe.filter(Ee=>du(Ee,se))},async findOne(se){return(ge?ae:await Ie()).find(Ee=>Ee.id===se)??null},async insert(se){B("insert");const[fe]=await lo($,n,[se.data]),Ee=O(fe??se.data);return t.events.emit("row:created",{tableId:e.id,row:Ee}),Ie(),Ee},async bulkInsert(se){if(se.length===0)return[];B("insert");const fe=await lo($,n,se.map(ye=>ye.data)),Ee=(fe.length?fe:se.map(ye=>ye.data)).map(O);return Ie(),Ee},async upsert(se){B("upsert");const[fe]=await Kc($,n,[se.data]),Ee=O(fe??se.data);return Ie(),Ee},async patch(se,fe){B("update");const Ee=fe.data,ye=M(Ee??{}),ft=await Hc($,n,se,ye),$t=O(ft??{...Ee??{}});return t.events.emit("row:updated",{tableId:e.id,row:$t,prev:$t}),Ie(),$t},async remove(se){B("delete"),await co($,n,se),t.events.emit("row:deleted",{tableId:e.id,rowId:se}),Ie()},async bulkRemove(se){if(se.length!==0){B("delete");for(const fe of se)await co($,n,fe);Ie()}},subscribe(se){K.add(se),ge?se(ae):Ie();let fe=null;return p>0&&(fe=setInterval(()=>void Ie(),p)),()=>{K.delete(se),fe&&clearInterval(fe)}},async refresh(){await Ie()}}}function fu(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var pu=Object.defineProperty,mu=Object.getOwnPropertyDescriptor,dr=(e,t,r,s)=>{for(var n=s>1?void 0:s?mu(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&pu(t,r,n),n};const gu="https://latest.datasette.io/ephemeral";let Ot=class extends Qe{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();t&&this.finish({url:t,token:this.token.trim()})}}connectedCallback(){super.connectedCallback(),Ot.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ot.instance===this&&(Ot.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&sn(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return U`
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
    `}};Ot.instance=null;Ot.styles=[rn,it`
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
    `];dr([J()],Ot.prototype,"url",2);dr([J()],Ot.prototype,"token",2);dr([J()],Ot.prototype,"status",2);dr([J()],Ot.prototype,"statusKind",2);Ot=dr([ht("datasette-connect-dialog")],Ot);const Vs=e=>e.replace(/^https?:\/\//,"");async function ta(e,t,r,s={}){if(t.db&&t.table)return[{db:t.db,table:t.table,count:null,hidden:!1,pks:[]}];let n=[];if(t.db){for(const d of await ao(e,t.base,t.db))d.hidden||n.push(d);if(s.skipPicker)return n}else{const d=await Vo(e,t.base);if(d.length===0)return[];let p=d;if(d.length>1){const v=await Ks(d.map(P=>({name:P,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${Vs(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!v)return null;p=v.map(P=>d[P])}for(const v of p)try{for(const P of await ao(e,t.base,v))P.hidden||n.push(P)}catch{}}if(n.length===0)return[];const a=new Set(n.map(d=>d.db)).size>1,c=await Ks(n.map(d=>({name:a?`${d.db}/${d.table}`:d.table,size:d.count,detail:a?void 0:d.db})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${Vs(t.base)}.`,confirmLabel:r});return c?c.map(d=>n[d]):null}const bu='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',yu={name:"datasette-source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"easyDBAccess built-ins",optional:!0},An={maxImportRows:1e4,pageSize:1e3},wu="https://latest.datasette.io/fixtures/facetable";function vu(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:bu,tooltip:"Connect a live, editable Datasette table",onClick:()=>Su(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>Tu(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:hu}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const s=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${wu}`,"","Import from Datasette");s&&await ho(t,s)}}),e.ui.registerDropHandler(async(t,r)=>{const s=t.dataTransfer?.getData("text/plain")||"";return xu(s)?(t.preventDefault(),await ho(r,s),!0):!1})}async function ho(e,t){try{await li(e,t)}catch(r){let s;r instanceof Yt?s=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:s=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(s,"Datasette import failed")}}function xu(e){try{const t=On(e);return!!(t.db&&t.table)}catch{return!1}}function $u(e,t){if(!e.has(t))return t;for(let r=2;;r++){const s=`${t} (${r})`;if(!e.has(s))return s}}async function li(e,t,r={}){const s=e.workspaceId();if(!s)throw new Error("datasette-source: no active workspace");const n=On(t),c=await ta(B=>e.backend.fetch(B),n,"Import",{skipPicker:r.skipTablePicker});if(c===null)return;if(c.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const d=[];let p=0;for(const B of c){const M={base:n.base,db:B.db,table:B.table,query:{}},K=await ku(e,s,M);if(K.skipped){p+=1;continue}d.push({tableId:K.tableId,ref:M,overwrite:K.overwrite})}let v=0,P=0;const $=[],O=[];for(const B of d)try{const M=await Cu(e,B.tableId,B.ref,B.overwrite);v+=1,P+=M.rowCount,(M.hasMore||M.truncated)&&$.push(`${B.ref.db}/${B.ref.table}`)}catch(M){O.push(`${B.ref.db}/${B.ref.table}: ${M?.message??String(M)}`)}Eu(e,{imported:v,skipped:p,totalRows:P,capped:$,failed:O,requested:c.length})}async function ku(e,t,r){const s=`${r.db}/${r.table}`,n={type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},a=(await e.store.tables.find()).filter(v=>v.workspaceId===t),c=a.find(v=>v.name===s);let d=s;if(c){const v=await e.ui.dialogs.choice(`A table named "${s}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!v||v==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(v==="Overwrite")return await e.store.tables.patch(c.id,{origin:n,updatedAt:Date.now()}),{tableId:c.id,overwrite:!0};d=$u(new Set(a.map(P=>P.name)),s)}const p=rs();return await e.store.tables.insert({id:p,workspaceId:t,name:d,code:ra(`${r.db}-${r.table}`),columns:[],view:"table",origin:n,updatedAt:Date.now()}),{tableId:p,overwrite:!1}}async function Cu(e,t,r,s){const n=`${r.db}/${r.table}`,a=c=>e.backend.fetch(c);Is(t,!0);try{let c=[],d=null,p=!1;try{const be=await Yo(a,r);c=be.columns,d=be.count,p=be.typed}catch{}const v=d&&d>0?Math.min(d,An.maxImportRows):0,{rows:P,truncated:$,hasMore:O,pages:B}=await Zr(a,r,{maxRows:An.maxImportRows,pageSize:An.pageSize,onProgress:be=>{v>0&&Is(t,!0,Math.min(1,be/v))}}),M=c.length===0?ai(P):p?c:Xo(c,P),K=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t}),await e.store.tables.patch(t,{columns:M,updatedAt:K});const ae=e.store.rows(t);if(s){const be=await ae.find();await ae.bulkRemove(be.map(Ie=>Ie.id))}const ge=P.map(be=>({id:rs(),tableId:t,data:be,updatedAt:K}));return await ae.bulkInsert(ge),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:P.length}),{name:n,rowCount:P.length,hasMore:O,truncated:$,pages:B,count:d}}finally{Is(t,!1)}}function Eu(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,s=`${t.imported} table${t.imported===1?"":"s"}`,n=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${s} (${r});${n} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${s} (${r}).${n} ${t.capped.length} capped at ${An.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${s} (${r}) from Datasette.${n}`,{kind:"success",title:"Datasette import"})}async function Su(e){const t=Ot.instance??_u(),r=(n,a)=>e.backend.fetch(n,a),s=await t.open({initialUrl:"https://datasette.io",async onTest(n,a){const c=On(n),d=await Jo(r,c.base,{token:a||void 0});if(!d.reachable)return`Unreachable: ${d.error??"no response"}`;const p=d.version?` (Datasette ${d.version})`:"";return d.writable?`Reachable${p} — signed in, read-write.`:`Reachable${p} — read-only (no token / not authenticated).`}});if(s)try{await na(e,s.url,s.token)}catch(n){const a=n instanceof Yt?n.message:n?.message??String(n);await e.ui.dialogs.alert(a,"Connect Datasette failed")}}function _u(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function na(e,t,r){const s=e.workspaceId();if(!s)throw new Error("datasette-source: no active workspace");const n=On(t),a=($,O)=>e.backend.fetch($,O),c=ts(a,r||void 0),d=await Jo(a,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:ea(n.base),value:r});let p;try{p=await ta(c,n,"Connect")}catch($){const O=$ instanceof Yt?$.message:$?.message??String($);throw new Error(`Couldn't read tables from ${Vs(n.base)}: ${O}`)}if(p===null)return;if(p.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const v=[];for(const $ of p){const O=await Pu(e,s,n.base,$,d.writable,r);v.push({tableId:O,c:$})}const P=d.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${v.length} live table${v.length===1?"":"s"} from Datasette (${P}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:$,c:O}of v)Au(e,$,n.base,O,r)}async function Pu(e,t,r,s,n,a){const c=(await e.store.tables.find()).find(P=>{const $=P.source?.config;return P.workspaceId===t&&P.source?.type==="datasette"&&$?.base===r&&$?.db===s.db&&$?.table===s.table});let d=s.pks??[];if(d.length===0){const P=ts(($,O)=>e.backend.fetch($,O),a||void 0);try{d=await Vc(P,{base:r,db:s.db,table:s.table,query:{}})}catch{d=[]}}const p=c?.id??rs(),v={...c??{},id:p,workspaceId:t,name:`${s.db}/${s.table}`,code:ra(`${s.db}-${s.table}`),columns:c?.columns??[],view:c?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:s.db,table:s.table,pks:d}},updatedAt:Date.now()};return c?await e.store.tables.upsert(v):await e.store.tables.insert(v),p}async function Au(e,t,r,s,n){const a={base:r,db:s.db,table:s.table,query:{}},c=ts((d,p)=>e.backend.fetch(d,p),n||void 0);try{let d=[],p=!1;try{const M=await Yo(c,a);d=M.columns,p=M.typed}catch{}const{rows:v}=await Zr(c,a,{maxRows:50,pageSize:50}),P=d.length===0?ai(v):p?d:Xo(d,v);if(P.length===0)return;const $=await e.store.tables.findOne(t);if(!$)return;const O=$.source?.config?.pks??[],B=P.map(M=>O.includes(M.field)?{...M,unique:!0,notnull:!0}:M);await e.store.tables.patch(t,{columns:B,updatedAt:Date.now()})}catch{}}async function Tu(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const s=e.store.rows(t);typeof s.refresh=="function"&&await s.refresh();const n=await s.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await Du(e,r)}catch(s){const n=s instanceof Yt?s.message:s?.message??String(s);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function Du(e,t){const r=On(t.origin.url),s=$=>e.backend.fetch($),{rows:n,hasMore:a,truncated:c}=await Zr(s,r,{maxRows:An.maxImportRows,pageSize:An.pageSize}),d=Date.now(),p=e.store.rows(t.id),v=await p.find();await p.bulkRemove(v.map($=>$.id)),await p.bulkInsert(n.map($=>({id:rs(),tableId:t.id,data:$,updatedAt:d}))),await e.store.tables.patch(t.id,{updatedAt:d});const P=a||c?` (capped at ${An.maxImportRows})`:"";e.ui.dialogs.toast(`Refreshed ${n.length} rows from ${r.db}/${r.table}${P}.`,{kind:a||c?"warning":"success",title:"Refresh"})}function ra(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function rs(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const ju=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:na,importDatasette:li,init:vu,meta:yu},Symbol.toStringTag,{value:"Module"})),Fu={name:"dump-export",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"easyDBAccess built-ins"};function Ru(e){e.ui.registerFooterButton({id:"dump-export:dump",label:"Dump",icon:"archive",tooltip:"Export the current workspace as a JSON dump file",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await ss(e);await e.backend.saveFile(`workspace-${t}.db.json`,r,"application/json")}})}async function ss(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),s={workspaceId:t,exportedAt:Date.now(),tables:[]};for(const n of r){const a=await e.store.rows(n.id).find();s.tables.push({name:n.name,columns:n.columns,rows:a.map(c=>c.data),...n.windowGeometry?{windowGeometry:n.windowGeometry}:{},...n.sortColumn?{sortColumn:n.sortColumn,sortAsc:n.sortAsc??!0}:{}})}return JSON.stringify(s,null,2)}const Ou=Object.freeze(Object.defineProperty({__proto__:null,init:Ru,meta:Fu,serializeWorkspace:ss},Symbol.toStringTag,{value:"Module"})),zu={name:"sql-export",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"easyDBAccess built-ins"};function Iu(e){e.ui.registerFooterButton({id:"sql-export:dump",label:"SQL",icon:"storage",tooltip:"Export the current workspace as a .sql script",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await sa(e);await e.backend.saveFile(`workspace-${t}.sql`,r,"application/sql")}})}async function sa(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),s=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const a=await e.store.rows(n.id).find();s.push(Lu(n,a),"")}return s.push("COMMIT;",""),s.join(`
`)}function Lu(e,t){const r=Ys(e.code||e.name||`table_${e.id}`),s=['  "__id" TEXT PRIMARY KEY',...e.columns.map(a=>`  ${Bu(a)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,s.join(`,
`),");"];if(t.length>0){const c=["__id",...e.columns.map(d=>d.field)].map(d=>`"${Ys(d)}"`).join(", ");for(const d of t){const p=[fo(d.id),...e.columns.map(v=>fo(d.data[v.field],v.type))];n.push(`INSERT INTO "${r}" (${c}) VALUES (${p.join(", ")});`)}}return n.join(`
`)}function Bu(e){const t=[`"${Ys(e.field)}"`,Mu(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function Mu(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function fo(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=Nu(e);return r===null?"NULL":Lr(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?Lr(e.toISOString()):Lr(typeof e=="string"?e:JSON.stringify(e))}function Nu(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?po(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const s=new Date(t);return Number.isFinite(s.getTime())?po(s):null}return null}function po(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${s}`}function Lr(e){return`'${e.replace(/'/g,"''")}'`}function Ys(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const qu=Object.freeze(Object.defineProperty({__proto__:null,init:Iu,meta:zu,serializeWorkspaceAsSql:sa},Symbol.toStringTag,{value:"Module"})),Uu={name:"gist-sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"easyDBAccess built-ins"},Wu="gist:";function Hu(e){e.ui.registerFooterButton({id:"gist-sync:push",label:"Push",icon:"cloud_upload",tooltip:"Push the current workspace to a GitHub Gist",onClick:async()=>{try{await Yu(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerFooterButton({id:"gist-sync:pull",label:"Pull",icon:"cloud_download",tooltip:"Pull the latest tables from the configured Gist",onClick:async()=>{try{await Xu(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}})}async function ia(e){const t=e.workspaceId();return`${Wu}${t??"default"}`}async function Ku(e){const t=await ia(e),r=await e.store.settings.findOne(t);if(!r)return null;const s=r.value;return!s||!s.token||!s.user?null:{user:s.user,gistId:s.gistId??"",token:s.token}}async function oa(e,t){const r=await ia(e);await e.store.settings.upsert({key:r,value:t})}function Vu(e){const t={};for(const r of e.split(";")){const s=r.indexOf("=");if(s<0)continue;const n=r.slice(0,s).trim(),a=r.slice(s+1).trim();n&&(t[n]=a)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function aa(e){const t=await Ku(e);if(t)return t;const r=await e.ui.dialogs.prompt(`Connection string format:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,"","Gist credentials");if(!r)return null;const s=Vu(r);return s?(await oa(e,s),s):(await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist credentials"),null)}async function Yu(e){const t=await aa(e);if(!t)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=(await e.store.tables.find()).filter(p=>p.workspaceId===r);if(s.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const n={},a=[];for(const p of s){const v=await e.store.rows(p.id).find(),P=JSON.stringify(Gu(p,v),null,2);P.length>1e8&&a.push(`${p.name} (${(P.length/1e6).toFixed(2)} MB)`),n[`${la(p.name)}.table.json`]={content:P}}if(a.length>0&&!await e.ui.dialogs.confirm(`These tables exceed Gist's 100 MB-per-file limit and will be rejected:

${a.join(`
`)}

Push anyway?`,"Gist size warning"))return;n["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1"},null,2)};let c;if(t.gistId){const p=await fetch(`https://api.github.com/gists/${t.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:n,description:`easyDBAccess workspace: ${r}`})});if(!p.ok)throw new Error(await Xs(p));c=await p.json()}else{const p=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:n})});if(!p.ok)throw new Error(await Xs(p));c=await p.json(),t.gistId=c.id,await oa(e,t)}const d=c.html_url??`https://gist.github.com/${t.user}/${c.id}`;e.ui.dialogs.toast(`Pushed ${s.length} table${s.length===1?"":"s"}.  ${d}`,{kind:"success",title:"Gist sync"})}async function Xu(e){const t=await aa(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!s.ok)throw new Error(await Xs(s));const n=await s.json(),a=Object.entries(n.files).filter(([v])=>v.endsWith(".table.json")&&!v.startsWith("_easydb"));if(a.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const c=(await e.store.tables.find()).filter(v=>v.workspaceId===r),d=new Map(c.map(v=>[v.name,v]));let p=0;for(const[,v]of a){const P=JSON.parse(v.content);if(!P.name||!Array.isArray(P.columns))continue;let $;const O=d.get(P.name);if(O){$=await e.store.tables.patch(O.id,{columns:P.columns,updatedAt:Date.now()});const M=e.store.rows(O.id),K=await M.find();await M.bulkRemove(K.map(ae=>ae.id))}else $=await e.store.tables.insert({id:mo(),workspaceId:r,name:P.name,code:la(P.name),columns:P.columns,view:"table",updatedAt:Date.now()});const B=(P.rows??[]).map(M=>({id:mo(),tableId:$.id,data:M,updatedAt:Date.now()}));await e.store.rows($.id).bulkInsert(B),p++}e.ui.dialogs.toast(`Pulled ${p} table${p===1?"":"s"} from gist ${t.gistId}.`,{kind:"success",title:"Gist sync"})}function Gu(e,t){return{name:e.name,columns:e.columns,rows:t.map(r=>r.data)}}async function Xs(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function la(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function mo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Qu=Object.freeze(Object.defineProperty({__proto__:null,init:Hu,meta:Uu},Symbol.toStringTag,{value:"Module"})),ca="server-sync:url";function ua(e){return`server-sync:etag:${e}`}async function da(e){const r=(await e.store.settings.findOne(ca))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function Ju(e,t){await e.store.settings.upsert({key:ca,value:t.replace(/\/+$/,"")})}async function ha(e,t){const s=(await e.store.settings.findOne(ua(t)))?.value;return typeof s=="string"?s:null}async function Fn(e,t,r){await e.store.settings.upsert({key:ua(t),value:r})}function is(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function go(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function fa(e,t,r){const s=Jr(r,t),n=(await e.store.tables.find()).filter(c=>c.workspaceId===t);for(const c of n){const d=e.store.rows(c.id),p=await d.find();await d.bulkRemove(p.map(v=>v.id)),await e.store.tables.remove(c.id)}let a=0;for(const c of s){const d=bo(),p=await e.store.tables.insert({id:d,workspaceId:t,name:c.name,code:Zu(c.name),columns:c.columns,view:"table",...c.windowGeometry?{windowGeometry:c.windowGeometry}:{},...c.sortColumn?{sortColumn:c.sortColumn,sortAsc:c.sortAsc??!0}:{},updatedAt:Date.now()}),v=c.rows.map(P=>({id:bo(),tableId:p.id,data:P,updatedAt:Date.now()}));await e.store.rows(p.id).bulkInsert(v),a++}return a}function Zu(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function bo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const ed={name:"server-sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"easyDBAccess built-ins"};function td(e){e.ui.registerFooterButton({id:"server-sync:push",label:"Sync ↑",icon:"cloud_sync",tooltip:"Push this workspace to the configured server",onClick:async()=>{try{await nd(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Server sync"})}}}),e.ui.registerFooterButton({id:"server-sync:pull",label:"Sync ↓",icon:"cloud_sync",tooltip:"Pull this workspace from the configured server",onClick:async()=>{try{await rd(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Server sync"})}}})}async function nd(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await pa(e);if(!r)return;const s=await ss(e),n=await ha(e,t),a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);let c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:a,body:s});if(c.status===412){const p=await c.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){p.currentEtag&&await Fn(e,t,p.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:s})}if(!c.ok)throw new Error(await ma(c));const d=is(c.headers.get("ETag"));d&&await Fn(e,t,d),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function rd(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await pa(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await ma(n));const a=is(n.headers.get("ETag")),c=await n.json(),d=await fa(e,t,c);a&&await Fn(e,t,a),e.ui.dialogs.toast(`Pulled ${d} table${d===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function pa(e){const t=await da(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await Ju(e,r),r.replace(/\/+$/,"")}async function ma(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const sd=Object.freeze(Object.defineProperty({__proto__:null,init:td,meta:ed},Symbol.toStringTag,{value:"Module"})),id={name:"new-table",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"easyDBAccess built-ins"};function od(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const ad=Object.freeze(Object.defineProperty({__proto__:null,init:od,meta:id},Symbol.toStringTag,{value:"Module"})),ld={name:"plugin-manager-button",version:"0.1.0",description:"Registers a footer button that opens the Plugin Manager dialog.",author:"easyDBAccess built-ins"};function cd(e){e.ui.registerFooterButton({id:"plugin-manager:open",label:"Plugins",icon:"extension",tooltip:"Add, disable, or remove plugins",onClick:()=>e.ui.openPluginManager()})}const ud=Object.freeze(Object.defineProperty({__proto__:null,init:cd,meta:ld},Symbol.toStringTag,{value:"Module"})),dd={name:"core-renderers",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"easyDBAccess built-ins"};function hd(e){customElements.get("cell-date")||customElements.define("cell-date",fd),customElements.get("cell-datetime")||customElements.define("cell-datetime",pd),customElements.get("cell-boolean")||customElements.define("cell-boolean",md),customElements.get("cell-script")||customElements.define("cell-script",bd),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class fd extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="date",t.value=wd(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class pd extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="datetime-local",t.value=vd(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class md extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="checkbox",t.checked=gd(this._value),t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function gd(e){return e===!0||e==="true"||e===1||e==="1"}class bd extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const a=document.createElement("span");a.textContent="(no script)",a.style.cssText="color:#9ca3af;font-style:italic",this.append(a);return}let r;try{r=yd(t)}catch(a){this.append(Ls("compile error",a));return}let s;try{s=r(this._row)}catch(a){this.append(Ls("runtime error",a));return}if(typeof s!="string"){this.append(Ls("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=s,this.append(n)}}const yo=new Map;function yd(e){const t=yo.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return yo.set(e,r),r}function Ls(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const s=t instanceof Error?t.message:String(t);r.title=s}return r}function wd(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function vd(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const s=new Date(t);if(Number.isNaN(s.getTime()))return"";const n=s.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const xd=Object.freeze(Object.defineProperty({__proto__:null,init:hd,meta:dd},Symbol.toStringTag,{value:"Module"})),$d={name:"cell-color",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"easyDBAccess built-ins"};function kd(e){customElements.get("cell-color")||customElements.define("cell-color",Cd),e.ui.registerCellRenderer("color","cell-color")}class Cd extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,s){this.value=s}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Ed=Object.freeze(Object.defineProperty({__proto__:null,init:kd,meta:$d},Symbol.toStringTag,{value:"Module"})),Sd={name:"cell-image",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"easyDBAccess built-ins"};function _d(e){customElements.get("cell-image")||customElements.define("cell-image",Pd),e.ui.registerCellRenderer("image","cell-image")}class Pd extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const s=document.createElement("img");s.src=this._value,s.alt="",s.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(s)}else{const s=document.createElement("span");s.style.color="#9ca3af",s.textContent="no image",t.append(s);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const s=new FileReader;s.onload=()=>this.commit(String(s.result)),s.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Ad=Object.freeze(Object.defineProperty({__proto__:null,init:_d,meta:Sd},Symbol.toStringTag,{value:"Module"})),Td={name:"cell-link",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"easyDBAccess built-ins"};function Dd(e){customElements.get("cell-link")||customElements.define("cell-link",jd),e.ui.registerCellRenderer("link","cell-link")}class jd extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:Fd(t),s=!this._editing&&!r?Rd(t):null,n=!this._editing&&!r&&!s?Od(t):null;if(r||s||n){const a=document.createElement("span");a.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const c=document.createElement("a");c.href=r?t:s?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(c.target="_blank",c.rel="noopener noreferrer"),c.textContent=t,c.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",c.title=r?`Open ${t}`:s?`Email ${t}`:`Call ${t}`;const d=document.createElement("button");d.type="button",d.title="Edit",d.textContent="✎",d.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",d.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),this._editing=!0,this.render()}),a.append(c,d),this.append(a)}else{const a=document.createElement("input");a.type="text",a.value=t,a.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",a.addEventListener("change",()=>this.commit(a.value)),a.addEventListener("keydown",c=>{c.key==="Enter"?(c.preventDefault(),this.commit(a.value)):c.key==="Escape"&&(this._editing=!1,this.render())}),this.append(a),this._editing&&setTimeout(()=>{a.focus(),a.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Fd(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function Rd(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function Od(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const s=/[ ()\-.]/.test(t),n=t.startsWith("+");return!s&&!n&&r.length<10?null:t}const zd=Object.freeze(Object.defineProperty({__proto__:null,init:Dd,meta:Td},Symbol.toStringTag,{value:"Module"}));var Id=Object.defineProperty,Ld=Object.getOwnPropertyDescriptor,ga=(e,t,r,s)=>{for(var n=s>1?void 0:s?Ld(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Id(t,r,n),n};function Bd(e){return(nn.instance??Md()).open(e)}function Md(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let nn=class extends Qe{constructor(){super(...arguments),this.rows=[],this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((r,s)=>{const n=this.rows[s].field.trim(),a=this.rows[s].label.trim()||n;return{...r,field:n,label:a}});this.finish(t)}}connectedCallback(){super.connectedCallback(),nn.instance=this}disconnectedCallback(){super.disconnectedCallback(),nn.instance===this&&(nn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&sn(this.dialogEl,e)}open(e){return this.source=e,this.rows=e.map(t=>({field:t.field,label:t.label})),new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((r,s)=>{const n=r.field.trim().toLowerCase();if(n===""){e.add(s);return}(t.get(n)??t.set(n,[]).get(n)).push(s)});for(const r of t.values())if(r.length>1)for(const s of r)e.add(s);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,r){this.rows=this.rows.map((s,n)=>n===e?{...s,[t]:r}:s)}render(){const e=this.invalidIndices(),t=e.size;return U`
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
              ${this.rows.map((r,s)=>U`
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
              ${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:De}
            </p>
          </div>
        </form>
      </dialog>
    `}};nn.instance=null;nn.styles=[rn,it`
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
    `];ga([J()],nn.prototype,"rows",2);nn=ga([ht("column-names-dialog")],nn);var Nd=Object.defineProperty,qd=Object.getOwnPropertyDescriptor,an=(e,t,r,s)=>{for(var n=s>1?void 0:s?qd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Nd(t,r,n),n};const Ud="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",Wd="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",Hd='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',wo=[{label:"Northwind — sample database (JSON dump)",url:Ud,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:Wd,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],Kd={name:"import-data",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"easyDBAccess built-ins",optional:!0};function Vd(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:Hd,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>Yd(e)})}async function Yd(e){const r=await(pt.instance??Xd()).open({async listDatabases(d){const p=On(d);return Vo(v=>e.backend.fetch(v),p.base)}});if(!r)return;const{url:s,kind:n,dbChosen:a,editColumns:c}=r;try{if(n==="datasette")await li(e,s,{skipTablePicker:a});else if(n==="csv"){const d=await e.backend.fetch(s);if(!d.ok)throw new Error(`HTTP ${d.status} ${d.statusText}`);const p=await d.text();await si(e,p,Br(s),{editColumns:c?Bd:void 0}),e.ui.dialogs.toast(`Imported ${Br(s)}.`,{kind:"success",title:"Import"})}else{const d=await e.backend.fetch(s);if(!d.ok)throw new Error(`HTTP ${d.status} ${d.statusText}`);const p=await d.text();await oi(e,p,Br(s)),e.ui.dialogs.toast(`Imported ${Br(s)}.`,{kind:"success",title:"Import"})}}catch(d){e.ui.dialogs.toast(`Could not import ${s}: ${d.message}`,{kind:"error",title:"Import"})}}function Xd(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function Gd(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),s=[...t.searchParams.keys()].some(a=>a.startsWith("_")),n=r.includes("datasette")||s;return!s&&/\.csv$/i.test(t.pathname)?"csv":!s&&/\.json$/i.test(t.pathname)?"json":n?"datasette":"json"}catch{return"json"}}function vo(e,t){if(t!=="datasette"||!e)return!1;try{const r=On(e);return!r.db&&!r.table}catch{return!1}}function Br(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}let pt=class extends Qe{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.resolvedKind,s=r==="datasette"&&!!this.selectedDb&&vo(t,r),n=s?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t,a=r==="csv"&&this.editColumns;this.finish({url:n,kind:r,dbChosen:s,editColumns:a})}}get resolvedKind(){return this.kind==="auto"?Gd(this.url.trim()):this.kind}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),pt.instance=this}disconnectedCallback(){super.disconnectedCallback(),pt.instance===this&&(pt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&sn(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.editColumns=!1,this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=wo[t];r&&(this.url=r.url,this.kind=r.kind)}renderDbPicker(){return!this.listDatabases||!vo(this.url.trim(),this.resolvedKind)?De:U`
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
      ${this.dbError?U`<p class="hint error">${this.dbError}</p>`:De}
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
                </label>`:De}

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
      ${De}
    `}};pt.instance=null;pt.styles=[rn,it`
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
    `];an([J()],pt.prototype,"url",2);an([J()],pt.prototype,"kind",2);an([J()],pt.prototype,"presetIdx",2);an([J()],pt.prototype,"dbList",2);an([J()],pt.prototype,"dbLoading",2);an([J()],pt.prototype,"dbError",2);an([J()],pt.prototype,"selectedDb",2);an([J()],pt.prototype,"editColumns",2);pt=an([ht("import-dialog")],pt);const Qd=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return pt},init:Vd,meta:Kd},Symbol.toStringTag,{value:"Module"})),Jd={name:"auto-sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"easyDBAccess built-ins",optional:!0},Zd=6e4;let xo=null,Gs=!1;const Bs=new Map;function eh(e){xo===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(xo=setInterval(()=>{ba(e)},Zd)))}async function ba(e){if(Gs)return;const t=e.workspaceId();if(!t)return;const r=await da(e);if(r)try{await th(e,r,t)}catch(s){console.warn("[auto-sync]",s)}}async function th(e,t,r){const s=await ss(e),n=await ha(e,r),a=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(a.status===404){await $o(e,t,r,s,null);return}if(!a.ok)return;const c=is(a.headers.get("ETag")),d=await a.text();if(go(s)===go(d)){c&&c!==n&&await Fn(e,r,c);return}if(c&&c===n){await $o(e,t,r,s,n);return}if(!(c&&Bs.get(r)===c)){Gs=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const v=JSON.parse(d),P=await fa(e,r,v);c&&await Fn(e,r,c),Bs.delete(r),e.ui.dialogs.toast(`Pulled ${P} table${P===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else c&&Bs.set(r,c)}finally{Gs=!1}}}async function $o(e,t,r,s,n){const a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);const c=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:a,body:s});if(c.ok){const d=is(c.headers.get("ETag"));d&&await Fn(e,r,d);return}if(c.status===412){const d=await c.json().catch(()=>({}));d.currentEtag&&await Fn(e,r,d.currentEtag)}}const ya=Object.freeze(Object.defineProperty({__proto__:null,load:eh,meta:Jd,tick:ba},Symbol.toStringTag,{value:"Module"})),wa=[ad,hc,Rc,ju,bc,Ou,qu,Qu,sd,ud,xd,Ed,Ad,zd,Qd,ya],nh=wa;function Qs(e){return`builtin:${e}`}async function rh(e){const t=[];for(const r of wa)if(!await sh(e,r)){t.push(r);try{await r.init?.(e)}catch(s){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"init",error:s})}}return async()=>{for(const r of t)try{await r.load?.(e)}catch(s){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"load",error:s})}}}async function sh(e,t){if(!t.meta?.optional)return!1;const r=t.meta.name;return r?(await e.store.plugins.findOne(Qs(r)))?.enabled===!1:!1}async function ih(e){const t=e.workspaceId();if(!t)return async()=>{};const s=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const a of s)try{const c=await e.store.plugins.findOne(a);if(c&&c.enabled===!1)continue;let d=c?.cachedBody??"";if(d)oh(e,a,d);else{try{d=await va(a)}catch(P){await e.store.plugins.upsert({url:a,enabled:c?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${P.message}`}),e.events.emit("plugin:error",{url:a,phase:"fetch",error:P});continue}await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),cachedBody:d})}const p=new Blob([d],{type:"text/javascript"}),v=URL.createObjectURL(p);try{const P=await import(v);await P.init?.(e),n.push({url:a,mod:P})}finally{setTimeout(()=>URL.revokeObjectURL(v),5e3)}}catch(c){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`init: ${c.message}`}),e.events.emit("plugin:error",{url:a,phase:"init",error:c})}return async()=>{for(const{url:a,mod:c}of n)try{await c.load?.(e)}catch(d){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`load: ${d.message}`}),e.events.emit("plugin:error",{url:a,phase:"load",error:d})}}}async function va(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function oh(e,t,r){return(async()=>{try{const s=await va(t);if(s===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:s})}catch{}})()}let Ms=null;function Fe(){return Ms||(Ms=ah()),Ms}async function ah(){const e=await Fl(),t=Ol(e),r=Il(),s=Wl(),n=new Map;t.tables.subscribe(K=>{n.clear();for(const ae of K)n.set(ae.id,ae)});const a={...t.tables,insert:K=>(n.set(K.id,K),t.tables.insert(K)),upsert:K=>(n.set(K.id,K),t.tables.upsert(K))};let c=null;const d={get backend(){if(!c)throw new Error("[host] row-source ctx used before app init completed");return c.backend},events:r,settings:t.settings,workspaceId:()=>$},p=zl({base:{...t,tables:a},providers:s.rowSources,tableById:K=>n.get(K),ctx:d}),v=lh(),P=await p.workspaces.find();let $;if(v){const K=dh(v),ae=P.find(ge=>ge.id===K||ge.name===v);ae?$=ae.id:$=(await p.workspaces.insert({id:K,name:v,createdAt:Date.now(),pluginUrls:[]})).id}else{const K=ch(),ae=K?P.find(ge=>ge.id===K):void 0;ae?$=ae.id:P.length>0?$=P[0].id:$=(await p.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}uh($);const O=Vl({store:p,events:r,registries:s,workspaceId:()=>$});c=O,r.on("import:after",({source:K,tableId:ae,rowCount:ge})=>{K!=="datasette"&&O.store.tables.findOne(ae).then(be=>{O.ui.dialogs.toast(`Imported ${ge} row${ge===1?"":"s"} into "${be?.name??ae}".`,{kind:"success",title:K.toUpperCase()+" import"})})}),r.on("plugin:error",({url:K,phase:ae,error:ge})=>{O.ui.dialogs.toast(`[${ae}] ${ge?.message??String(ge)}`,{kind:"error",title:`Plugin: ${K}`})});const B=await rh(O),M=await ih(O);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:$}),await B(),await M()}),{store:p,events:r,workspaceId:$,registries:s,api:O}}function lh(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const xa="eda:lastWorkspaceId";function ch(){try{return globalThis.localStorage?.getItem(xa)??null}catch{return null}}function uh(e){try{globalThis.localStorage?.setItem(xa,e)}catch{}}function dh(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var hh=Object.defineProperty,fh=Object.getOwnPropertyDescriptor,os=(e,t,r,s)=>{for(var n=s>1?void 0:s?fh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&hh(t,r,n),n};let Un=class extends Qe{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&sn(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=Qr(this.text)}catch(c){this.errorMsg=`Couldn't parse the CSV: ${c.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const s=await Fe(),n=crypto.randomUUID();await s.store.tables.insert({id:n,workspaceId:s.workspaceId,name:t,code:ph(t),columns:r.columns,view:"table",updatedAt:Date.now()});const a=r.rows.map(c=>({id:crypto.randomUUID(),tableId:n,data:c,updatedAt:Date.now()}));await s.store.rows(n).bulkInsert(a),s.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return U`
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
    `}};Un.styles=[rn,it`
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
    `];os([J()],Un.prototype,"name",2);os([J()],Un.prototype,"text",2);os([J()],Un.prototype,"errorMsg",2);Un=os([ht("csv-paste-dialog")],Un);function ph(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var mh=Object.defineProperty,gh=Object.getOwnPropertyDescriptor,ci=(e,t,r,s)=>{for(var n=s>1?void 0:s?gh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&mh(t,r,n),n};const bh=`function render(row) {
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
    `}};Xt.instance=null;Xt.styles=[rn,it`
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
    `];ci([J()],Xt.prototype,"text",2);ci([J()],Xt.prototype,"columnLabel",2);Xt=ci([ht("script-editor-dialog")],Xt);var yh=Object.defineProperty,wh=Object.getOwnPropertyDescriptor,Ut=(e,t,r,s)=>{for(var n=s>1?void 0:s?wh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&yh(t,r,n),n};const vh=["string","number","boolean","date","datetime"];let jt=class extends Qe{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.columns=[],this.errorMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&sn(this.dialogEl,e)}async open(e){this.errorMsg="";const t=await Fe();if(this.rendererOptions=[...t.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=t.events.on("app:ready",()=>{this.rendererOptions=[...t.registries.cellRenderers.keys()].sort()}),e){const r=await Fe(),s=await r.store.tables.findOne(e);if(!s)return;this.mode="edit",this.editTableId=e,this.name=s.name,this.columns=s.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,origField:a.field}));const n=await r.store.rows(e).find();this.previewRows=n.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const s=[...this.columns],[n]=s.splice(e,1);s.splice(r,0,n),this.columns=s}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const s=r.getBoundingClientRect(),n=e.clientY<s.top+s.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,s=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!s)return;const n=[...this.columns],[a]=n.splice(r,1);let c=t+(r<t?-1:0);s==="after"&&(c+=1),n.splice(c,0,a),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,s)=>s===e?{...r,...t}:r)}async editScript(e){const t=Xt.instance;if(!t)return;const r=this.columns[e];if(!r)return;const s=await t.open(r.script??"",r.label||r.field);s!==null&&this.patchColumn(e,{script:s.trim()?s:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const r=new Set;for(const a of this.columns){const c=a.field.trim();if(!c){this.errorMsg="Column field names cannot be empty.";return}if(r.has(c)){this.errorMsg=`Duplicate column field: ${c}`;return}r.add(c)}const s=await Fe(),n=this.columns.map(a=>{const c={field:a.field.trim(),label:a.label.trim()||a.field.trim(),type:a.type};return a.renderer&&(c.renderer=a.renderer),a.script&&(c.script=a.script),a.max!=null&&a.max>0&&(c.max=a.max),a.unique&&(c.unique=!0),a.notnull&&(c.notnull=!0),a.hidden&&(c.hidden=!0),c});if(this.mode==="edit"&&this.editTableId){const a=this.editTableId,c=await s.store.tables.findOne(a),d=new Map((c?.columns??[]).map(v=>[v.field,v])),p=n.filter(v=>{const P=d.get(v.field);return v.unique&&!P?.unique||v.notnull&&!P?.notnull||v.max&&v.max>0&&v.max!==P?.max});if(p.length>0){const v=await s.store.rows(a).find(),P=kh(p,v);if(P.length>0){this.errorMsg=`Cannot save: ${P.length} existing ${P.length===1?"row violates":"rows violate"} the new constraints.
${P.slice(0,5).join(`
`)}${P.length>5?`
…and ${P.length-5} more.`:""}`;return}}await s.store.tables.patch(a,{name:t,columns:n,updatedAt:Date.now()})}else await s.store.tables.insert({id:Eh(),workspaceId:s.workspaceId,name:t,code:Ch(t),columns:n,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return U`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const t of this.columns){if(!t.unique)continue;const r=new Set,s=new Set;for(const n of this.previewRows){const a=n.data[t.field];a==null||a===""||(r.has(a)&&s.add(a),r.add(a))}e.set(t.field,s)}return U`
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
                  ${this.columns.map(r=>{const s=t.data[r.field],n=$h(r,s,e.get(r.field));return U`<td
                      class=${n?"violation":""}
                      title=${n??""}
                    >${xh(s)}</td>`})}
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
            ${this.columns.map((r,s)=>{const n=this.dragSrcIdx===s,a=this.dropTargetIdx===s,c=a&&this.dropEdge==="before"?" drop-before":a&&this.dropEdge==="after"?" drop-after":"";return U`
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
                    ${vh.map(d=>U`<option value=${d} ?selected=${d===r.type}>${d}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${d=>{const p=d.target.value;this.patchColumn(s,{renderer:p||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(d=>U`<option value=${d} ?selected=${d===r.renderer}>${d}</option>`)}
                  </select>
                  ${r.renderer==="script"?U`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(s)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:U`<span></span>`}
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

          ${this.renameDetected()?U`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?U`<div class="error">${this.errorMsg}</div>`:""}
          ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};jt.styles=[on,rn,it`
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
  `];Ut([J()],jt.prototype,"mode",2);Ut([J()],jt.prototype,"editTableId",2);Ut([J()],jt.prototype,"name",2);Ut([J()],jt.prototype,"columns",2);Ut([J()],jt.prototype,"errorMsg",2);Ut([J()],jt.prototype,"dragSrcIdx",2);Ut([J()],jt.prototype,"dropTargetIdx",2);Ut([J()],jt.prototype,"dropEdge",2);Ut([J()],jt.prototype,"previewRows",2);Ut([J()],jt.prototype,"rendererOptions",2);jt=Ut([ht("new-table-dialog")],jt);function xh(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function $h(e,t,r){const s=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&s)return`${e.label}: empty`;if(s)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!s){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function kh(e,t){const r=[];for(const s of e)if(s.notnull&&t.forEach((n,a)=>{const c=n.data[s.field];(c==null||typeof c=="string"&&c.trim()==="")&&r.push(`Row ${a+1}: ${s.label} is empty.`)}),s.max!=null&&s.max>0&&t.forEach((n,a)=>{const c=n.data[s.field];typeof c=="string"&&c.length>s.max?r.push(`Row ${a+1}: ${s.label} length ${c.length} > max ${s.max}.`):typeof c=="number"&&c>s.max&&r.push(`Row ${a+1}: ${s.label} value ${c} > max ${s.max}.`)}),s.unique){const n=new Map;t.forEach((a,c)=>{const d=a.data[s.field];d==null||d===""||(n.has(d)?r.push(`Row ${c+1}: ${s.label} duplicates row ${n.get(d)+1} ("${String(d)}").`):n.set(d,c))})}return r}function Ch(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Eh(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Sh=Object.defineProperty,_h=Object.getOwnPropertyDescriptor,zt=(e,t,r,s)=>{for(var n=s>1?void 0:s?_h(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Sh(t,r,n),n};let Ct=class extends Qe{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.builtinNames=[],this.optionalBuiltins=[],this.dirtyBuiltins=!1,this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&sn(this.dialogEl,e)}async open(){const e=await Fe(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(a=>[a.url,a]));const s=[],n=[];for(const a of nh){const c=a.meta?.name;if(c)if(a.meta?.optional){const d=this.records.get(Qs(c));n.push({name:c,...a.meta?.description?{description:a.meta.description}:{},...a.meta?.author?{author:a.meta.author}:{},enabled:d?.enabled!==!1})}else s.push(c)}this.builtinNames=s,this.optionalBuiltins=n,this.dirtyBuiltins=!1,this.addUrl="",await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(),this.refreshServerRegistry()}async refreshCatalog(){const e=new URL("/plugins/catalog.json",location.origin).toString();try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),s=Array.isArray(r.plugins)?r.plugins:[];this.catalog=s.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await Fe()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const a=await fetch(n,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const c=await a.json(),d=Array.isArray(c.plugins)?c.plugins:[];this.serverCatalog=d.map(p=>({...p,absUrl:new URL(p.url,n).toString()})),this.serverCatalogError=null}catch(a){this.serverCatalog=[],this.serverCatalogError=a.message}}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await Fe()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await Fe();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await Fe(),s=this.records.get(e);await r.store.plugins.upsert({...s??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...s,url:e,enabled:t,lastFetched:s?.lastFetched??0}))}async removePlugin(e){const t=await Fe();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await Fe(),s=Qs(e),n=this.records.get(s);await r.store.plugins.upsert({...n??{url:s,lastFetched:0},url:s,enabled:t,lastFetched:n?.lastFetched??0}),this.optionalBuiltins=this.optionalBuiltins.map(a=>a.name===e?{...a,enabled:t}:a),this.dirtyBuiltins=!0}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await Fe();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const s=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:s});const n=new Blob([s],{type:"text/javascript"}),a=URL.createObjectURL(n);try{const d=await import(a);await d.init?.(t.api),await d.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(a),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const c=await t.store.plugins.find();this.records=new Map(c.map(d=>[d.url,d])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}render(){return U`
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
            ${this.urls.map(e=>{const t=this.records.get(e),r=t?.lastError?" error":"",s=t?.lastFetched?new Date(t.lastFetched).toLocaleString():"never";return U`
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
    `}};Ct.styles=[on,rn,it`
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
    `];zt([J()],Ct.prototype,"urls",2);zt([J()],Ct.prototype,"records",2);zt([J()],Ct.prototype,"addUrl",2);zt([J()],Ct.prototype,"builtinNames",2);zt([J()],Ct.prototype,"optionalBuiltins",2);zt([J()],Ct.prototype,"dirtyBuiltins",2);zt([J()],Ct.prototype,"catalog",2);zt([J()],Ct.prototype,"catalogError",2);zt([J()],Ct.prototype,"serverCatalog",2);zt([J()],Ct.prototype,"serverCatalogError",2);zt([J()],Ct.prototype,"installing",2);Ct=zt([ht("plugin-manager-dialog")],Ct);/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let R={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&R.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let s=arguments[r];if(s==null)continue;s=Object(s);let n=Object.keys(Object(s));for(let a=0,c=n.length;a<c;a++){let d=n[a],p=Object.getOwnPropertyDescriptor(s,d);p!==void 0&&p.enumerable&&(t[d]=s[d])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,s=new Array(r);r--;)s[r]=[t[r],e[t[r]]];return s}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),s=document.createDocumentFragment();r.forEach(function(n){let a=n instanceof Node;s.appendChild(a?n:document.createTextNode(String(n)))}),this.appendChild(s)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,s=this;do for(r=t.length;--r>=0&&t.item(r)!==s;);while(r<0&&(s=s.parentElement));return s}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let s=document.createEvent("CustomEvent");return s.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),s}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),s=r.length>>>0;if(s===0)return!1;let n=t|0,a=Math.max(n>=0?n:s-Math.abs(n),0);function c(d,p){return d===p||typeof d=="number"&&typeof p=="number"&&isNaN(d)&&isNaN(p)}for(;a<s;){if(c(r[a],e))return!0;a++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>R.modifier=e),document.addEventListener("keyup",()=>R.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const s=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(s===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(s),a=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-a)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(s===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(s),a=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-a)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((s,n)=>{(s.startsWith("--")||s.startsWith("var"))&&(r[n]=R.getCssVariableValue(s))}),r.forEach(s=>{R.colorNames[s]?t[2]="#"+R.colorNames[s]:s.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=s:s.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=s:t[2]=s}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),s=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return s&&(t.size=s[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let s=e.indexOf(")");t=e.slice(0,s+1).replace(/\s+/g,""),t.startsWith("var")&&(t=R.getCssVariableValue(t)),r=e.slice(s+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let s=e.indexOf(" ");s>0?(t=e.slice(0,s+1).replace(/\s+/g,""),r=e.slice(s+1,e.length).trim()):t=e,t.startsWith("--")&&(t=R.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let s=r.indexOf(" ");r=r.slice(s+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:R.colorNames[r]?r="#"+R.colorNames[r]:r.match(/^(--|var)/)?r=R.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,s,n,a,c,d,p,v,P,$={};const O=/^#?([\da-f]{3}|[\da-f]{6})$/gi,B=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,M=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,K=this.colorNames;return K[t]&&(t=K[t]),t.match(O)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),s=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),$.rgb={r:parseInt(r,16),g:parseInt(s,16),b:parseInt(n,16)},$.hex=`#${r}${s}${n}`):($.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},$.hex=`#${t}`),P=this.rgbToHsl($.rgb.r,$.rgb.g,$.rgb.b),$.hsl=P,$.rgb.css=`rgb(${$.rgb.r},${$.rgb.g},${$.rgb.b})`):t.match(B)?(p=B.exec(t),$.rgb={css:t,r:p[1],g:p[2],b:p[3]},$.hex=this.rgbToHex(p[1],p[2],p[3]),P=this.rgbToHsl(p[1],p[2],p[3]),$.hsl=P):t.match(M)?(p=M.exec(t),a=p[1]/360,c=p[2].slice(0,p[2].length-1)/100,d=p[3].slice(0,p[3].length-1)/100,v=this.hslToRgb(a,c,d),$.rgb={css:`rgb(${v[0]},${v[1]},${v[2]})`,r:v[0],g:v[1],b:v[2]},$.hex=this.rgbToHex($.rgb.r,$.rgb.g,$.rgb.b),$.hsl={css:`hsl(${p[1]},${p[2]},${p[3]})`,h:p[1],s:p[2],l:p[3]}):($.hex="#f5f5f5",$.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},$.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),$},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),s=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),a=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(s)<=t?"#ffffff":"#000000",d=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",p=this.lighten(e,this.colorFilledDark),v=this.perceivedBrightness(p)<=t?"#ffffff":"#000000";return[r.hsl.css,s,n,a,c,d,p,v]},darken(e,t){const r=this.color(e).hsl,s=parseFloat(r.l),n=Math.round(s-s*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,s=parseFloat(r.l),n=Math.round(s+(100-s)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let s,n,a;if(t===0)s=n=a=r;else{let c=(v,P,$)=>($<0&&($+=1),$>1&&($-=1),$<.16666666666666666?v+(P-v)*6*$:$<.5?P:$<.6666666666666666?v+(P-v)*(.6666666666666666-$)*6:v),d=r<.5?r*(1+t):r+t-r*t,p=2*r-d;s=c(p,d,e+1/3),n=c(p,d,e),a=c(p,d,e-1/3)}return[Math.round(s*255),Math.round(n*255),Math.round(a*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let s=Math.max(e,t,r),n=Math.min(e,t,r),a,c,d=(s+n)/2;if(s===n)a=c=0;else{let p=s-n;switch(c=d>.5?p/(2-s-n):p/(s+n),s){case e:a=(t-r)/p+(t<r?6:0);break;case t:a=(r-e)/p+2;break;case r:a=(e-t)/p+4;break}a/=6}return a=Math.round(a*360),c=Math.round(c*100)+"%",d=Math.round(d*100)+"%",{css:"hsl("+a+","+c+","+d+")",h:a,s:c,l:d}},rgbToHex(e,t,r){let s=Number(e).toString(16),n=Number(t).toString(16),a=Number(r).toString(16);return s.length===1&&(s=`0${s}`),n.length===1&&(n=`0${n}`),a.length===1&&(a=`0${a}`),`#${s}${n}${a}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),s=r.filter(c=>c.match(/^(down|right|up|left)$/i));s.length&&(t.autoposition=s[0],r.splice(r.indexOf(s[0]),1));let n=r.filter(c=>c.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let a=r.filter(c=>c.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return a.length&&(t.offsetX=a[0].match(/^[+-]?\d*\.?\d+$/i)?`${a[0]}px`:a[0],a[1]?t.offsetY=a[1].match(/^[+-]?\d*\.?\d+$/i)?`${a[1]}px`:a[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(a[0]),1),a[1]&&r.splice(r.indexOf(a[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(K=>{typeof t[K]=="function"&&(t[K]=t[K].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,s=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),a=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},c=r==="window"?{x:1,y:1}:{x:a.width/r.offsetWidth,y:a.height/r.offsetHeight},d=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);a.width-=(parseFloat(d.borderLeftWidth)+parseFloat(d.borderRightWidth))*c.x,a.height-=(parseFloat(d.borderTopWidth)+parseFloat(d.borderBottomWidth))*c.y;let p;t.of?typeof t.of=="string"?p=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?p=t.of[0].getBoundingClientRect():p=t.of.getBoundingClientRect():p=a;let v=this.getScrollbarWidth(document.body),P=this.getScrollbarWidth(e.parentElement),$="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?$=p.left-a.left-parseFloat(d.borderLeftWidth)+"px":$="0px":t.at.startsWith("center")?t.of?$=p.left-a.left-parseFloat(d.borderLeftWidth)+p.width/2+"px":$=a.width/2+"px":t.at.startsWith("right-")&&(t.of?$=p.left-a.left-parseFloat(d.borderLeftWidth)+p.width+"px":$=a.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?$=p.left-a.left-parseFloat(d.borderLeftWidth)-s.width/2+"px":$=-s.width/2+"px":t.at.startsWith("center")?t.of?$=p.left-a.left-parseFloat(d.borderLeftWidth)-(s.width-p.width)/2+"px":$=a.width/2-s.width/2+"px":t.at.startsWith("right-")&&(t.of?$=p.left-a.left-parseFloat(d.borderLeftWidth)+(p.width-s.width/2)+"px":$=a.width-s.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?$=p.left-a.left-parseFloat(d.borderLeftWidth)-s.width+"px":$=-s.width+"px":t.at.startsWith("center")?t.of?$=p.left-a.left-parseFloat(d.borderLeftWidth)-s.width+p.width/2+"px":$=a.width/2-s.width+"px":t.at.startsWith("right-")&&(t.of?$=p.left-a.left-parseFloat(d.borderLeftWidth)+p.width-s.width+"px":$=a.width-s.width+"px",r!=="window"&&($=parseFloat($)-P.y+"px")));let O="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?O=p.top-a.top-parseFloat(d.borderTopWidth)+"px":O="0px":t.at.endsWith("center")?t.of?O=p.top-a.top-parseFloat(d.borderTopWidth)+p.height/2+"px":O=a.height/2+"px":t.at.endsWith("-bottom")&&(t.of?O=p.top-a.top-parseFloat(d.borderTopWidth)+p.height+"px":O=a.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?O=p.top-a.top-parseFloat(d.borderTopWidth)-s.height/2+"px":O=-s.height/2+"px":t.at.endsWith("center")?t.of?O=p.top-a.top-parseFloat(d.borderTopWidth)-s.height/2+p.height/2+"px":O=a.height/2-s.height/2+"px":t.at.endsWith("-bottom")&&(t.of?O=p.top-a.top-parseFloat(d.borderTopWidth)-s.height/2+p.height+"px":O=a.height-s.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?O=p.top-a.top-parseFloat(d.borderTopWidth)-s.height+"px":O=-s.height+"px":t.at.endsWith("center")?t.of?O=p.top-a.top-parseFloat(d.borderTopWidth)-s.height+p.height/2+"px":O=a.height/2-s.height+"px":t.at.endsWith("-bottom")&&(t.of?O=p.top-a.top-parseFloat(d.borderTopWidth)-s.height+p.height+"px":O=a.height-s.height+"px",r!=="window"?O=parseFloat(O)-P.x+"px":O=parseFloat(O)-v.x+"px")),e.style.left=c.x===1?$:parseFloat($)/c.x+"px",e.style.top=c.y===1?O:parseFloat(O)/c.y+"px";let B=getComputedStyle(e),M={left:B.left,top:B.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(M=this.applyPositionAutopos(e,M,t)),(t.offsetX||t.offsetY)&&(M=this.applyPositionOffset(e,M,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(M=this.applyPositionMinMax(e,M,t)),t.modify&&(M=this.applyPositionModify(e,M,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const s=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(s);const n=Array.prototype.slice.call(document.querySelectorAll(`.${s}`)),a=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((c,d)=>{d>0&&d<=a&&(t.top=parseFloat(t.top)+n[--d].getBoundingClientRect().height+R.autopositionSpacing+"px")});break;case"up":n.forEach((c,d)=>{d>0&&d<=a&&(t.top=parseFloat(t.top)-n[--d].getBoundingClientRect().height-R.autopositionSpacing+"px")});break;case"right":n.forEach((c,d)=>{d>0&&d<=a&&(t.left=parseFloat(t.left)+n[--d].getBoundingClientRect().width+R.autopositionSpacing+"px")});break;case"left":n.forEach((c,d)=>{d>0&&d<=a&&(t.left=parseFloat(t.left)-n[--d].getBoundingClientRect().width-R.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const s=getComputedStyle(e);return{left:s.left,top:s.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const s=getComputedStyle(e);return{left:s.left,top:s.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const s=getComputedStyle(e);return{left:s.left,top:s.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(s=>{e.classList.contains(s)&&(t=s)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),s=document.createElement("button");s.className="btn btn"+t.color.slice(r),document.body.appendChild(s),t.color=getComputedStyle(s).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(s),s=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},s=typeof t=="object"?Object.assign(r,t):r,n=s.bgPanel,a=s.bgContent,c=s.colorHeader,d=s.colorContent,p=s.bgFooter,v=s.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[c]&&(c="#"+this.colorNames[c]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(O=>e.querySelector(O).style.color=this.getCssVariableValue(c)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(O=>O.style.color=this.getCssVariableValue(c)),this.colorNames[a]?e.content.style.background="#"+this.colorNames[a]:e.content.style.background=this.getCssVariableValue(a),this.colorNames[d]?e.content.style.color="#"+this.colorNames[d]:e.content.style.color=this.getCssVariableValue(d),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(d)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[p]?e.footer.style.background="#"+this.colorNames[p]:e.footer.style.background=this.getCssVariableValue(p),this.colorNames[v]?e.footer.style.color="#"+this.colorNames[v]:e.footer.style.color=this.getCssVariableValue(v),s.border&&e.setBorder(s.border),s.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(s.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,s]of Object.entries(t))e.style[r]=typeof s=="string"?R.getCssVariableValue(s):s;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const s=document.createElement("script");s.src=e,s.type=t,document.head.appendChild(s),r&&(s.onload=r)}},ajax(e,t){let r,s,n=new XMLHttpRequest;const a={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let c=R.strToHtml(this.responseText);r.urlSelector&&(c=c.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(c)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},a,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},a,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&R.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}s=r.url.trim().split(/\s+/),r.url=encodeURI(s[0]),s.length>1&&(s.shift(),r.urlSelector=s.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&R.ajaxAutoresizeAutoreposition(t,r),R.ajaxAlwaysCallbacks.length&&R.ajaxAlwaysCallbacks.forEach(c=>{t?c.call(n,n,t):c.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const s={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(a,c){if(c){let d=R.strToHtml(a);c.contentRemove(),c.content.append(d)}}};if(t&&typeof e=="string")r=Object.assign({},s,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},s,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&R.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(a=>{if(a.ok)return a[r.bodyMethod]()}).then(a=>{t?r.done.call(a,a,t):r.done.call(a,a),t&&(r.autoresize||r.autoreposition)&&R.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const s=r.split(" "),n=Object.assign({},{width:s[0],height:s[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const s=Object.assign({},r);t.autoresize&&e.resize(s),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const s=document.createElement("div"),n=e.parentElement;s.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(s.style.width=r+"px",s.style.height=r+"px"):t==="ct"||t==="cb"?s.style.height=r+"px":(t==="lc"||t==="rc")&&(s.style.width=r+"px"),n!==document.body&&(s.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(s)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",s,n){if(typeof t=="function"&&(t=[t]),r)return t[r](a=>a.call(e,e,s,n));t.forEach(a=>a.call(e,e,s,n))},resetZi(){this.zi=((e=R.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=R.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){R.zi||(R.zi=((f=R.ziBase)=>{let y=f;return{next:()=>y++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${R.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let f=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;R.errorpanel(f)}return!1}let s=this.pOcontainer(e.container);if(typeof s=="object"&&s.length&&s.length>0&&(s=s[0]),!s)return this.errorReporting&&R.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(f=>{e[f]?typeof e[f]=="function"&&(e[f]=[e[f]]):e[f]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const a=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),d=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),p=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),v=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),P=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),$=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),O=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),B=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),M=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),K=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),ae=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),ge=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),be=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),Ie=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),se=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[a,c,d,p,v,P,$,O,B,M,K,ae,ge,be].forEach(f=>f.panel=n);const fe=n.querySelector(".jsPanel-btn-close"),Ee=n.querySelector(".jsPanel-btn-maximize"),ye=n.querySelector(".jsPanel-btn-normalize"),ft=n.querySelector(".jsPanel-btn-smallify"),$t=n.querySelector(".jsPanel-btn-minimize");fe&&R.pointerup.forEach(f=>{fe.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.close(null,!0)})}),Ee&&R.pointerup.forEach(f=>{Ee.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.maximize()})}),ye&&R.pointerup.forEach(f=>{ye.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.normalize()})}),ft&&R.pointerup.forEach(f=>{ft.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),$t&&R.pointerup.forEach(f=>{$t.addEventListener(f,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.minimize()})});let wt=R.extensions;for(let f in wt)Object.prototype.hasOwnProperty.call(wt,f)&&(n[f]=wt[f]);if(n.setBorder=f=>{let y=R.pOborder(f);return y[2].length||(y[2]=n.style.backgroundColor),y=y.join(" "),n.style.border=y,n.options.border=y,n},n.setBorderRadius=f=>{typeof f=="string"&&(f.startsWith("--")||f.startsWith("var"))&&(f=f.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),f=R.getCssVariableValue(f)),typeof f=="number"&&(f+="px"),n.style.borderRadius=f;const y=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=y.borderTopLeftRadius,n.header.style.borderTopRightRadius=y.borderTopRightRadius):(n.content.style.borderTopLeftRadius=y.borderTopLeftRadius,n.content.style.borderTopRightRadius=y.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=y.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=y.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=y.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=y.borderBottomLeftRadius),n},n.setTheme=(f=e.theme,y)=>{let _;if(n.status==="minimized"&&(_=!0,n.normalize()),R.clearTheme(n),typeof f=="object")e.border=void 0,R.applyCustomTheme(n,f);else if(typeof f=="string"){f==="none"&&(f="white");let b=R.getThemeDetails(f);R.applyColorTheme(n,b)}return _&&n.minimize(),y&&y.call(n,n),n},n.remove=(f,y,_)=>{n.parentElement.removeChild(n),document.getElementById(f)?_&&_.call(n,f,n):(n.removeMinimizedReplacement(),n.status="closed",y&&document.dispatchEvent(se),document.dispatchEvent(Ie),n.options.onclosed&&R.processCallbacks(n,n.options.onclosed,"every",y),R.autopositionRemaining(n),_&&_.call(f,f)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(f,y)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(be),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!R.processCallbacks(n,n.options.onbeforeclose,"some",n.status,y))return n;n.options.animateOut?(n.options.animateIn&&R.remClass(n,n.options.animateIn),R.setClass(n,n.options.animateOut),n.addEventListener("animationend",_=>{_.stopPropagation(),n.remove(n.id,y,f)})):n.remove(n.id,y,f)}},n.maximize=(f,y)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!R.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(v);const _=n.parentElement,b=R.pOcontainment(e.maximizedMargin);return _===document.body?(n.style.width=document.documentElement.clientWidth-b[1]-b[3]+"px",n.style.height=document.documentElement.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"):(n.style.width=_.clientWidth-b[1]-b[3]+"px",n.style.height=_.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"),ft.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),y||n.front(),document.dispatchEvent(P),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),f&&f.call(n,n,n.statusBefore),e.onmaximized&&R.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=f=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!R.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent($),!document.getElementById("jsPanel-replacement-container")){const y=document.createElement("div");y.id="jsPanel-replacement-container",document.body.append(y)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(O),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let y=n.createMinimizedReplacement(),_,b,k;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(y);break;case"parentpanel":b=n.closest(".jsPanel-content").parentElement,k=b.querySelectorAll(".jsPanel-minimized-box"),_=k[k.length-1],_.append(y);break;case"parent":b=n.parentElement,_=b.querySelector(".jsPanel-minimized-container"),_||(_=document.createElement("div"),_.className="jsPanel-minimized-container",b.append(_)),_.append(y);break;default:document.querySelector(e.minimizeTo).append(y)}}return f&&f.call(n,n,n.statusBefore),e.onminimized&&R.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=f=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!R.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(d),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),ft.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(p),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),f&&f.call(n,n,n.statusBefore),e.onnormalized&&R.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=f=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!R.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(B),n.style.overflow="hidden";const y=window.getComputedStyle(n),_=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(y.borderTopWidth)+parseFloat(y.borderBottomWidth)+_+"px",ft.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(M),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(K),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const b=n.querySelectorAll(".jsPanel-minimized-box");return b[b.length-1].style.display="none",f&&f.call(n,n,n.statusBefore),e.onsmallified&&R.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=f=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!R.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(ae),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(p),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),ft.style.transform="rotate(0deg)";const y=n.querySelectorAll(".jsPanel-minimized-box");y[y.length-1].style.display="flex",f&&f.call(n,n,n.statusBefore),e.onunsmallified&&R.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(f,y=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const _=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(b=>b.style.zIndex);Math.max(..._)>n.style.zIndex&&(n.style.zIndex=R.zi.next()),R.resetZi()}return document.dispatchEvent(ge),f&&f.call(n,n),e.onfronted&&y&&R.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(f,y=!1)=>{if(y||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),f&&typeof f=="function"&&!y)f.call(n,n,n.snappableTo);else if(f!==!1){let _=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const b=R.pOcontainment(n.options.dragit.containment),k=n.snappableTo;k.startsWith("left")?_[0]=b[3]:k.startsWith("right")&&(_[0]=-b[1]),k.endsWith("top")?_[1]=b[0]:k.endsWith("bottom")&&(_[1]=-b[2])}n.reposition(`${n.snappableTo} ${_[0]} ${_[1]}`)}y||(n.snapped=n.snappableTo)},n.move=(f,y)=>{let _=n.overlaps(f,"paddingbox"),b=n.parentElement;return f.appendChild(n),n.options.container=f,n.style.left=_.left+"px",n.style.top=_.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),y&&y.call(n,n,f,b),n},n.closeChildpanels=f=>(n.getChildpanels().forEach(y=>y.close()),f&&f.call(n,n),n),n.getChildpanels=f=>{const y=n.content.querySelectorAll(".jsPanel");return f&&y.forEach((_,b,k)=>{f.call(_,_,b,k)}),y},n.isChildpanel=f=>{const y=n.closest(".jsPanel-content"),_=y?y.parentElement:null;return f&&f.call(n,n,_),y?_:!1},n.contentRemove=f=>(R.emptyNode(n.content),f&&f.call(n,n),n),n.createMinimizedReplacement=()=>{const f=R.createMinimizedTemplate(),y=window.getComputedStyle(n.headertitle).color,_=window.getComputedStyle(n),b=e.iconfont,k=f.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?R.setStyles(f,{backgroundColor:_.backgroundColor,backgroundPositionX:_.backgroundPositionX,backgroundPositionY:_.backgroundPositionY,backgroundRepeat:_.backgroundRepeat,backgroundAttachment:_.backgroundAttachment,backgroundImage:_.backgroundImage,backgroundSize:_.backgroundSize,backgroundOrigin:_.backgroundOrigin,backgroundClip:_.backgroundClip}):f.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,f.id=n.id+"-min",f.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),f.querySelector(".jsPanel-headerlogo")),f.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),f.querySelector(".jsPanel-title")),f.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),f.querySelector(".jsPanel-title").style.color=y,k.style.color=y,k.querySelectorAll("button").forEach(oe=>oe.style.color=y),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(oe=>{n.header.classList.contains(oe)&&f.querySelector(".jsPanel-hdr").classList.add(oe)}),n.setIconfont(b,f),n.dataset.btnnormalize==="enabled"?R.pointerup.forEach(oe=>{f.querySelector(".jsPanel-btn-normalize").addEventListener(oe,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;n.normalize()})}):k.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?R.pointerup.forEach(oe=>{f.querySelector(".jsPanel-btn-maximize").addEventListener(oe,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;n.maximize()})}):k.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?R.pointerup.forEach(oe=>{f.querySelector(".jsPanel-btn-close").addEventListener(oe,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;n.close(null,!0)})}):k.querySelector(".jsPanel-btn-close").style.display="none",f},n.removeMinimizedReplacement=()=>{const f=document.getElementById(`${n.id}-min`);f&&f.parentElement.removeChild(f)},n.drag=(f={})=>{let y,_,b;const k=new CustomEvent("jspaneldragstart",{detail:n.id}),oe=new CustomEvent("jspaneldrag",{detail:n.id}),ue=new CustomEvent("jspaneldragstop",{detail:n.id});[k,oe,ue].forEach(Me=>Me.panel=n);const q=Me=>{let Oe=Me.split("-");return Oe.forEach((xe,Pe)=>{Oe[Pe]=xe.charAt(0).toUpperCase()+xe.slice(1)}),"snap"+Oe.join("")};function V(Me){Me.relatedTarget===null&&R.pointermove.forEach(Oe=>{document.removeEventListener(Oe,_,!1),n.style.opacity=1})}let He=f.handles||R.defaults.dragit.handles,st=f.cursor||R.defaults.dragit.cursor;function Wt(Me){if(R.pointermove.forEach(Oe=>document.removeEventListener(Oe,_)),R.removeSnapAreas(),y){if(n.style.opacity=1,y=void 0,b.snap){switch(n.snappableTo){case"left-top":n.snap(b.snap.snapLeftTop);break;case"center-top":n.snap(b.snap.snapCenterTop);break;case"right-top":n.snap(b.snap.snapRightTop);break;case"right-center":n.snap(b.snap.snapRightCenter);break;case"right-bottom":n.snap(b.snap.snapRightBottom);break;case"center-bottom":n.snap(b.snap.snapCenterBottom);break;case"left-bottom":n.snap(b.snap.snapLeftBottom);break;case"left-center":n.snap(b.snap.snapLeftCenter);break}b.snap.callback&&n.snappableTo&&typeof b.snap.callback=="function"&&(b.snap.callback.call(n,n),b.snap.repositionOnSnap&&b.snap[q(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&b.snap.repositionOnSnap&&b.snap[q(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Oe=n.parentElement;n.move(n.droppableTo),b.drop.callback&&b.drop.callback.call(n,n,n.droppableTo,Oe)}if(document.dispatchEvent(ue),b.stop.length){let Oe=window.getComputedStyle(n),xe={left:parseFloat(Oe.left),top:parseFloat(Oe.top),width:parseFloat(Oe.width),height:parseFloat(Oe.height)};R.processCallbacks(n,b.stop,!1,xe,Me)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Oe=>Oe.style.pointerEvents="auto"),document.removeEventListener(Me,Wt)}return n.querySelectorAll(He).forEach(Me=>{Me.style.touchAction="none",Me.style.cursor=st,R.pointerdown.forEach(Oe=>{Me.addEventListener(Oe,xe=>{if(xe.button&&xe.button>0||(b=Object.assign({},R.defaults.dragit,f),b.disableOnMaximized&&n.status==="maximized"))return!1;if((b.containment||b.containment===0)&&(b.containment=R.pOcontainment(b.containment)),b.grid&&Array.isArray(b.grid)&&b.grid.length===1&&(b.grid[1]=b.grid[0]),b.snap&&(typeof b.snap=="object"?b.snap=Object.assign({},R.defaultSnapConfig,b.snap):b.snap=R.defaultSnapConfig),xe.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(Ge=>Ge.style.pointerEvents="none");let Pe=window.getComputedStyle(n),Ke=parseFloat(Pe.left),Se=parseFloat(Pe.top),ee=parseFloat(Pe.width),Ve=parseFloat(Pe.height),ze=xe.touches?xe.touches[0].clientX:xe.clientX,ce=xe.touches?xe.touches[0].clientY:xe.clientY,me=n.parentElement,Et=me.getBoundingClientRect(),ie=window.getComputedStyle(me),Ye=n.getScaleFactor(),cn=0,It=R.getScrollbarWidth(me);_=Ge=>{if(Ge.preventDefault(),!y){if(document.dispatchEvent(k),n.style.opacity=b.opacity,n.snapped&&b.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let ne=n.getBoundingClientRect(),_e=ze-(ne.left+ne.width),de=ne.width/2;_e>-de&&(cn=_e+de)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),b.drop&&b.drop.dropZones){let ne=b.drop.dropZones.map(de=>R.pOcontainer(de)),_e=[];ne.forEach(function(de){de.length?de.forEach(function(Re){_e.push(Re)}):_e.push(de)}),_e=_e.filter(function(de,Re,Ue){return Ue.indexOf(de)===Re}),b.drop.dropZones=_e}b.start.length&&R.processCallbacks(n,b.start,!1,{left:Ke,top:Se,width:ee,height:Ve},Ge)}y=1;let St,je,Ne,vt,Je,ke,$e,_t,qe,mt,ot=Ge.touches?Ge.touches[0].clientX:Ge.clientX,Ze=Ge.touches?Ge.touches[0].clientY:Ge.clientY,Le=window.getComputedStyle(n),le;if(me===document.body){let ne=n.getBoundingClientRect();qe=window.innerWidth-parseInt(ie.borderLeftWidth,10)-parseInt(ie.borderRightWidth,10)-(ne.left+ne.width),mt=window.innerHeight-parseInt(ie.borderTopWidth,10)-parseInt(ie.borderBottomWidth,10)-(ne.top+ne.height)}else qe=parseInt(ie.width,10)-parseInt(ie.borderLeftWidth,10)-parseInt(ie.borderRightWidth,10)-(parseInt(Le.left,10)+parseInt(Le.width,10)),mt=parseInt(ie.height,10)-parseInt(ie.borderTopWidth,10)-parseInt(ie.borderBottomWidth,10)-(parseInt(Le.top,10)+parseInt(Le.height,10));St=parseFloat(Le.left),Ne=parseFloat(Le.top),Je=qe,$e=mt,b.snap&&(b.snap.trigger==="panel"?(je=St**2,vt=Ne**2,ke=Je**2,_t=$e**2):b.snap.trigger==="pointer"&&(n.options.container==="window"?(St=ot,Ne=Ze,Je=window.innerWidth-ot,$e=window.innerHeight-Ze,je=ot**2,vt=Ne**2,ke=Je**2,_t=$e**2):(le=n.overlaps(me,"paddingbox",Ge),St=le.pointer.left,Ne=le.pointer.top,Je=le.pointer.right,$e=le.pointer.bottom,je=le.pointer.left**2,vt=le.pointer.top**2,ke=le.pointer.right**2,_t=le.pointer.bottom**2)));let Xe=Math.sqrt(je+vt),X=Math.sqrt(je+_t),et=Math.sqrt(ke+vt),ct=Math.sqrt(ke+_t),kt=Math.abs(St-Je)/2,G=Math.abs(Ne-$e)/2,Ht=Math.sqrt(je+G**2),Qt=Math.sqrt(vt+kt**2),at=Math.sqrt(ke+G**2),un=Math.sqrt(_t+kt**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(oe),(!b.axis||b.axis==="x")&&(n.style.left=Ke+(ot-ze)/Ye.x+cn+"px"),(!b.axis||b.axis==="y")&&(n.style.top=Se+(Ze-ce)/Ye.y+"px"),b.grid){let ne=b.grid,_e=b.axis,de=ne[0]*Math.round((Ke+(ot-ze))/ne[0]),Re=ne[1]*Math.round((Se+(Ze-ce))/ne[1]);(!_e||_e==="x")&&(n.style.left=`${de}px`),(!_e||_e==="y")&&(n.style.top=`${Re}px`)}if(b.containment||b.containment===0){let ne=b.containment,_e,de;if(n.options.container==="window")_e=window.innerWidth-parseFloat(Le.width)-ne[1]-It.y,de=window.innerHeight-parseFloat(Le.height)-ne[2]-It.x;else{let Re=parseFloat(ie.borderLeftWidth)+parseFloat(ie.borderRightWidth),Ue=parseFloat(ie.borderTopWidth)+parseFloat(ie.borderBottomWidth);_e=Et.width/Ye.x-parseFloat(Le.width)-ne[1]-Re-It.y,de=Et.height/Ye.y-parseFloat(Le.height)-ne[2]-Ue-It.x}parseFloat(n.style.left)<=ne[3]&&(n.style.left=ne[3]+"px"),parseFloat(n.style.top)<=ne[0]&&(n.style.top=ne[0]+"px"),parseFloat(n.style.left)>=_e&&(n.style.left=_e+"px"),parseFloat(n.style.top)>=de&&(n.style.top=de+"px")}if(b.drag.length){let ne={left:St,top:Ne,right:Je,bottom:$e,width:parseFloat(Le.width),height:parseFloat(Le.height)};R.processCallbacks(n,b.drag,!1,ne,Ge)}if(b.snap){let ne=b.snap.sensitivity,_e=me===document.body?window.innerWidth/8:Et.width/8,de=me===document.body?window.innerHeight/8:Et.height/8;n.snappableTo=!1,R.removeSnapAreas(),Xe<ne?b.snap.snapLeftTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-top",R.createSnapArea(n,"lt",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.left>0&&le.pointer.top>0?(n.snappableTo="left-top",R.createSnapArea(n,"lt",ne)):(n.snappableTo=!1,R.removeSnapAreas()))):X<ne?b.snap.snapLeftBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-bottom",R.createSnapArea(n,"lb",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.left>0&&le.pointer.bottom>0?(n.snappableTo="left-bottom",R.createSnapArea(n,"lb",ne)):(n.snappableTo=!1,R.removeSnapAreas()))):et<ne?b.snap.snapRightTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-top",R.createSnapArea(n,"rt",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.right>0&&le.pointer.top>0?(n.snappableTo="right-top",R.createSnapArea(n,"rt",ne)):(n.snappableTo=!1,R.removeSnapAreas()))):ct<ne?b.snap.snapRightBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-bottom",R.createSnapArea(n,"rb",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.right>0&&le.pointer.bottom>0?(n.snappableTo="right-bottom",R.createSnapArea(n,"rb",ne)):(n.snappableTo=!1,R.removeSnapAreas()))):Ne<ne&&Qt<_e?b.snap.snapCenterTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-top",R.createSnapArea(n,"ct",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.top>0?(n.snappableTo="center-top",R.createSnapArea(n,"ct",ne)):(n.snappableTo=!1,R.removeSnapAreas()))):St<ne&&Ht<de?b.snap.snapLeftCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-center",R.createSnapArea(n,"lc",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.left>0?(n.snappableTo="left-center",R.createSnapArea(n,"lc",ne)):(n.snappableTo=!1,R.removeSnapAreas()))):Je<ne&&at<de?b.snap.snapRightCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-center",R.createSnapArea(n,"rc",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.right>0?(n.snappableTo="right-center",R.createSnapArea(n,"rc",ne)):(n.snappableTo=!1,R.removeSnapAreas()))):$e<ne&&un<_e&&b.snap.snapCenterBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-bottom",R.createSnapArea(n,"cb",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(le.pointer.bottom>0?(n.snappableTo="center-bottom",R.createSnapArea(n,"cb",ne)):(n.snappableTo=!1,R.removeSnapAreas())))}if(b.drop&&b.drop.dropZones){let ne=R.isIE?"msElementsFromPoint":"elementsFromPoint",_e=document[ne](Ge.clientX,Ge.clientY);Array.isArray(_e)||(_e=Array.prototype.slice.call(_e)),b.drop.dropZones.forEach(de=>{_e.includes(de)&&(n.droppableTo=de)}),_e.includes(n.droppableTo)||(n.droppableTo=!1)}},R.pointermove.forEach(Ge=>document.addEventListener(Ge,_)),window.addEventListener("mouseout",V,!1)})}),R.pointerup.forEach(Oe=>{document.addEventListener(Oe,Wt),window.removeEventListener("mouseout",V)}),f.disable&&(Me.style.pointerEvents="none")}),n},n.dragit=f=>{const y=Object.assign({},R.defaults.dragit,e.dragit),_=n.querySelectorAll(y.handles);return f==="disable"?_.forEach(b=>b.style.pointerEvents="none"):_.forEach(b=>b.style.pointerEvents="auto"),n},n.sizeit=(f={})=>{const y=new CustomEvent("jspanelresizestart",{detail:n.id}),_=new CustomEvent("jspanelresize",{detail:n.id}),b=new CustomEvent("jspanelresizestop",{detail:n.id});[y,_,b].forEach(xe=>xe.panel=n);let k={},oe,ue,q,V,He,st;k.handles=f.handles||R.defaults.resizeit.handles,k.handles.split(",").forEach(xe=>{const Pe=document.createElement("DIV");Pe.className=`jsPanel-resizeit-handle jsPanel-resizeit-${xe.trim()}`,n.append(Pe)});let Wt=f.aspectRatio?f.aspectRatio:!1;function Me(xe){xe.relatedTarget===null&&R.pointermove.forEach(Pe=>document.removeEventListener(Pe,oe,!1))}function Oe(xe){if(R.pointermove.forEach(Pe=>document.removeEventListener(Pe,oe,!1)),xe.target.classList&&xe.target.classList.contains("jsPanel-resizeit-handle")){let Pe,Ke,Se=xe.target.className;if(Se.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(Pe=!0),Se.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Ke=!0),k.grid&&Array.isArray(k.grid)){k.grid.length===1&&(k.grid[1]=k.grid[0]);const ee=parseFloat(n.style.width),Ve=parseFloat(n.style.height),ze=ee%k.grid[0],ce=Ve%k.grid[1],me=parseFloat(n.style.left),Et=parseFloat(n.style.top),ie=me%k.grid[0],Ye=Et%k.grid[1];ze<k.grid[0]/2?n.style.width=ee-ze+"px":n.style.width=ee+(k.grid[0]-ze)+"px",ce<k.grid[1]/2?n.style.height=Ve-ce+"px":n.style.height=Ve+(k.grid[1]-ce)+"px",Pe&&(ie<k.grid[0]/2?n.style.left=me-ie+"px":n.style.left=me+(k.grid[0]-ie)+"px"),Ke&&(Ye<k.grid[1]/2?n.style.top=Et-Ye+"px":n.style.top=Et+(k.grid[1]-Ye)+"px")}}if(ue){n.content.style.pointerEvents="inherit",ue=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let Pe=n.controlbar.querySelector(".jsPanel-btn-smallify"),Ke=n.getBoundingClientRect();if(Pe&&Ke.height>st+5&&(Pe.style.transform="rotate(0deg)"),document.dispatchEvent(b),k.stop.length){let Se=window.getComputedStyle(n),ee={left:parseFloat(Se.left),top:parseFloat(Se.top),width:parseFloat(Se.width),height:parseFloat(Se.height)};R.processCallbacks(n,k.stop,!1,ee,xe)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Pe=>Pe.style.pointerEvents="auto"),k.aspectRatio=Wt,document.removeEventListener(xe,Oe)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(xe=>{xe.style.touchAction="none",R.pointerdown.forEach(Pe=>{xe.addEventListener(Pe,Ke=>{if(Ke.preventDefault(),Ke.stopPropagation(),Ke.button&&Ke.button>0)return!1;let Se=1;if(k=Object.assign({},R.defaults.resizeit,f),(k.containment||k.containment===0)&&(k.containment=R.pOcontainment(k.containment)),k.aspectRatio&&k.aspectRatio===!0&&(k.aspectRatio="panel"),R.modifier){let de=R.modifier;de.altKey?k.aspectRatio="content":de.ctrlKey?k.aspectRatio="panel":de.shiftKey&&(k.aspectRatio=!1,Se=2)}let ee=typeof k.maxWidth=="function"?k.maxWidth():k.maxWidth||1e4,Ve=typeof k.maxHeight=="function"?k.maxHeight():k.maxHeight||1e4,ze=typeof k.minWidth=="function"?k.minWidth():k.minWidth,ce=typeof k.minHeight=="function"?k.minHeight():k.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(de=>de.style.pointerEvents="none");const me=n.parentElement,Et=me.tagName.toLowerCase(),ie=n.getBoundingClientRect(),Ye=me.getBoundingClientRect(),cn=window.getComputedStyle(me,null),It=parseInt(cn.borderLeftWidth,10),Ge=parseInt(cn.borderTopWidth,10),St=cn.getPropertyValue("position"),je=Ke.clientX||Ke.clientX===0||Ke.touches[0].clientX,Ne=Ke.clientY||Ke.clientY===0||Ke.touches[0].clientY,vt=je/Ne,Je=Ke.target.classList,ke=n.getScaleFactor(),$e=ie.width/ie.height,_t=n.content.getBoundingClientRect(),qe=_t.width/_t.height,mt=n.header.getBoundingClientRect().height,ot=n.footer.getBoundingClientRect().height||0;let Ze=ie.left,Le=ie.top,le=1e4,Xe=1e4,X=1e4,et=1e4;He=ie.width,st=ie.height,Et!=="body"&&(Ze=ie.left-Ye.left+me.scrollLeft,Le=ie.top-Ye.top+me.scrollTop),Et==="body"&&k.containment?(le=document.documentElement.clientWidth-ie.left,X=document.documentElement.clientHeight-ie.top,Xe=ie.width+ie.left,et=ie.height+ie.top):k.containment&&(St==="static"?(le=Ye.width-ie.left+It,X=Ye.height+Ye.top-ie.top+Ge,Xe=ie.width+(ie.left-Ye.left)-It,et=ie.height+(ie.top-Ye.top)-Ge):(le=me.clientWidth-(ie.left-Ye.left)/ke.x+It,X=me.clientHeight-(ie.top-Ye.top)/ke.y+Ge,Xe=(ie.width+ie.left-Ye.left)/ke.x-It,et=n.clientHeight+(ie.top-Ye.top)/ke.y-Ge)),k.containment&&(Xe-=k.containment[3],et-=k.containment[0],le-=k.containment[1],X-=k.containment[2]);const ct=window.getComputedStyle(n),kt=parseFloat(ct.width)-ie.width,G=parseFloat(ct.height)-ie.height;let Ht=parseFloat(ct.left)-ie.left,Qt=parseFloat(ct.top)-ie.top;me!==document.body&&(Ht+=Ye.left,Qt+=Ye.top);let at=parseInt(ct.borderTopWidth,10),un=parseInt(ct.borderRightWidth,10),ne=parseInt(ct.borderBottomWidth,10),_e=parseInt(ct.borderLeftWidth,10);oe=de=>{de.preventDefault(),ue||(document.dispatchEvent(y),k.start.length&&R.processCallbacks(n,k.start,!1,{width:He,height:st,left:Ze,top:Le},de),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),ie.height>st+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),ue=1,document.dispatchEvent(_);let Re=de.touches?de.touches[0].clientX:de.clientX,Ue=de.touches?de.touches[0].clientY:de.clientY,Ae;Je.contains("jsPanel-resizeit-e")?(q=He+(Re-je)*Se/ke.x+kt,q>=le&&(q=le),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",Se===2&&(n.style.left=Ze-(Re-je)+"px"),k.aspectRatio==="content"?(n.style.height=(q-un-_e)/qe+mt+ot+at+ne+"px",k.containment&&(Ae=n.overlaps(me),Ae.bottom<=k.containment[2]&&(n.style.height=X+"px",n.style.width=X*qe+"px"))):k.aspectRatio==="panel"&&(n.style.height=q/$e+"px",k.containment&&(Ae=n.overlaps(me),Ae.bottom<=k.containment[2]&&(n.style.height=X+"px",n.style.width=X*$e+"px")))):Je.contains("jsPanel-resizeit-s")?(V=st+(Ue-Ne)*Se/ke.y+G,V>=X&&(V=X),V>=Ve&&(V=Ve),V<=ce&&(V=ce),n.style.height=V+"px",Se===2&&(n.style.top=Le-(Ue-Ne)+"px"),k.aspectRatio==="content"?(n.style.width=(V-mt-ot-at-ne)*qe+at+ne+"px",k.containment&&(Ae=n.overlaps(me),Ae.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/qe+"px"))):k.aspectRatio==="panel"&&(n.style.width=V*$e+"px",k.containment&&(Ae=n.overlaps(me),Ae.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/$e+"px")))):Je.contains("jsPanel-resizeit-w")?(q=He+(je-Re)*Se/ke.x+kt,q<=ee&&q>=ze&&q<=Xe&&(n.style.left=Ze+(Re-je)/ke.x+Ht+"px"),q>=Xe&&(q=Xe),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",k.aspectRatio==="content"?(n.style.height=(q-un-_e)/qe+mt+ot+at+ne+"px",k.containment&&(Ae=n.overlaps(me),Ae.bottom<=k.containment[2]&&(n.style.height=X+"px",n.style.width=X*qe+"px"))):k.aspectRatio==="panel"&&(n.style.height=q/$e+"px",k.containment&&(Ae=n.overlaps(me),Ae.bottom<=k.containment[2]&&(n.style.height=X+"px",n.style.width=X*$e+"px")))):Je.contains("jsPanel-resizeit-n")?(V=st+(Ne-Ue)*Se/ke.y+G,V<=Ve&&V>=ce&&V<=et&&(n.style.top=Le+(Ue-Ne)/ke.y+Qt+"px"),V>=et&&(V=et),V>=Ve&&(V=Ve),V<=ce&&(V=ce),n.style.height=V+"px",k.aspectRatio==="content"?(n.style.width=(V-mt-ot-at-ne)*qe+at+ne+"px",k.containment&&(Ae=n.overlaps(me),Ae.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/qe+"px"))):k.aspectRatio==="panel"&&(n.style.width=V*$e+"px",k.containment&&(Ae=n.overlaps(me),Ae.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/$e+"px")))):Je.contains("jsPanel-resizeit-se")?(q=He+(Re-je)*Se/ke.x+kt,q>=le&&(q=le),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",Se===2&&(n.style.left=Ze-(Re-je)+"px"),k.aspectRatio&&(n.style.height=q/$e+"px"),V=st+(Ue-Ne)*Se/ke.y+G,V>=X&&(V=X),V>=Ve&&(V=Ve),V<=ce&&(V=ce),n.style.height=V+"px",Se===2&&(n.style.top=Le-(Ue-Ne)+"px"),k.aspectRatio==="content"?(n.style.width=(V-mt-ot-at-ne)*qe+at+ne+"px",k.containment&&(Ae=n.overlaps(me),Ae.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/qe+"px"))):k.aspectRatio==="panel"&&(n.style.width=V*$e+"px",k.containment&&(Ae=n.overlaps(me),Ae.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/$e+"px")))):Je.contains("jsPanel-resizeit-sw")?(V=st+(Ue-Ne)*Se/ke.y+G,V>=X&&(V=X),V>=Ve&&(V=Ve),V<=ce&&(V=ce),n.style.height=V+"px",Se===2&&(n.style.top=Le-(Ue-Ne)+"px"),k.aspectRatio&&(n.style.width=V*$e+"px"),q=He+(je-Re)*Se/ke.x+kt,q<=ee&&q>=ze&&q<=Xe&&(n.style.left=Ze+(Re-je)/ke.x+Ht+"px"),q>=Xe&&(q=Xe),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",k.aspectRatio==="content"?(n.style.height=(q-un-_e)/qe+mt+ot+at+ne+"px",k.containment&&(Ae=n.overlaps(me),Ae.bottom<=k.containment[2]&&(n.style.height=X+"px",n.style.width=X*qe+"px"))):k.aspectRatio==="panel"&&(n.style.height=q/$e+"px",k.containment&&(Ae=n.overlaps(me),Ae.bottom<=k.containment[2]&&(n.style.height=X+"px",n.style.width=X*$e+"px")))):Je.contains("jsPanel-resizeit-ne")?(q=He+(Re-je)*Se/ke.x+kt,q>=le&&(q=le),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",Se===2&&(n.style.left=Ze-(Re-je)+"px"),k.aspectRatio&&(n.style.height=q/$e+"px"),V=st+(Ne-Ue)*Se/ke.y+G,V<=Ve&&V>=ce&&V<=et&&(n.style.top=Le+(Ue-Ne)/ke.y+Qt+"px"),V>=et&&(V=et),V>=Ve&&(V=Ve),V<=ce&&(V=ce),n.style.height=V+"px",k.aspectRatio==="content"?(n.style.width=(V-mt-ot-at-ne)*qe+at+ne+"px",k.containment&&(Ae=n.overlaps(me),Ae.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/qe+"px"))):k.aspectRatio==="panel"&&(n.style.width=V*$e+"px",k.containment&&(Ae=n.overlaps(me),Ae.right<=k.containment[1]&&(n.style.width=le+"px",n.style.height=le/$e+"px")))):Je.contains("jsPanel-resizeit-nw")&&(k.aspectRatio&&Je.contains("jsPanel-resizeit-nw")&&(Re=Ue*vt,Ue=Re/vt),q=He+(je-Re)*Se/ke.x+kt,q<=ee&&q>=ze&&q<=Xe&&(n.style.left=Ze+(Re-je)/ke.x+Ht+"px"),q>=Xe&&(q=Xe),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",k.aspectRatio&&(n.style.height=q/$e+"px"),V=st+(Ne-Ue)*Se/ke.y+G,V<=Ve&&V>=ce&&V<=et&&(n.style.top=Le+(Ue-Ne)/ke.y+Qt+"px"),V>=et&&(V=et),V>=Ve&&(V=Ve),V<=ce&&(V=ce),n.style.height=V+"px",k.aspectRatio==="content"?n.style.width=(V-mt-ot-at-ne)*qe+at+ne+"px":k.aspectRatio==="panel"&&(n.style.width=V*$e+"px")),window.getSelection().removeAllRanges();const Lt=window.getComputedStyle(n),Be={left:parseFloat(Lt.left),top:parseFloat(Lt.top),right:parseFloat(Lt.right),bottom:parseFloat(Lt.bottom),width:parseFloat(Lt.width),height:parseFloat(Lt.height)};k.resize.length&&R.processCallbacks(n,k.resize,!1,Be,de)},R.pointermove.forEach(de=>document.addEventListener(de,oe,!1)),window.addEventListener("mouseout",Me,!1)})}),R.pointerup.forEach(function(Pe){document.addEventListener(Pe,Oe),window.removeEventListener("mouseout",Me)}),f.disable&&(xe.style.pointerEvents="none")}),n},n.resizeit=f=>{const y=n.querySelectorAll(".jsPanel-resizeit-handle");return f==="disable"?y.forEach(_=>_.style.pointerEvents="none"):y.forEach(_=>_.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const f=n.getBoundingClientRect();return{x:f.width/n.offsetWidth,y:f.height/n.offsetHeight}},n.calcSizeFactors=()=>{const f=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(f.left)/(window.innerWidth-parseFloat(f.width)),n.vf=parseFloat(f.top)/(window.innerHeight-parseFloat(f.height));else if(n.parentElement){let y=n.parentElement.getBoundingClientRect();n.hf=parseFloat(f.left)/(y.width-parseFloat(f.width)),n.vf=parseFloat(f.top)/(y.height-parseFloat(f.height))}},n.saveCurrentDimensions=()=>{const f=window.getComputedStyle(n);n.currentData.width=f.width,n.currentData.height=f.height},n.saveCurrentPosition=()=>{const f=window.getComputedStyle(n);n.currentData.left=f.left,n.currentData.top=f.top},n.reposition=(...f)=>{let y=e.position,_=!0,b;return f.forEach(k=>{typeof k=="string"||typeof k=="object"?y=k:typeof k=="boolean"?_=k:typeof k=="function"&&(b=k)}),R.position(n,y),n.slaves&&n.slaves.size>0&&n.slaves.forEach(k=>k.reposition()),_&&n.saveCurrentPosition(),b&&b.call(n,n),n},n.repositionOnSnap=f=>{let y="0",_="0",b=R.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(f){case"left-top":y=b[3],_=b[0];break;case"right-top":y=-b[1],_=b[0];break;case"right-bottom":y=-b[1],_=-b[2];break;case"left-bottom":y=b[3],_=-b[2];break;case"center-top":y=b[3]/2-b[1]/2,_=b[0];break;case"center-bottom":y=b[3]/2-b[1]/2,_=-b[2];break;case"left-center":y=b[3],_=b[0]/2-b[2]/2;break;case"right-center":y=-b[1],_=b[0]/2-b[2]/2;break}R.position(n,f),R.setStyles(n,{left:`calc(${n.style.left} + ${y}px)`,top:`calc(${n.style.top} + ${_}px)`})},n.overlaps=(f,y,_)=>{let b=n.getBoundingClientRect(),k=getComputedStyle(n.parentElement),oe=n.getScaleFactor(),ue={top:0,right:0,bottom:0,left:0},q,V=0,He=0,st=0,Wt=0;n.options.container!=="window"&&y==="paddingbox"&&(ue.top=parseInt(k.borderTopWidth,10)*oe.y,ue.right=parseInt(k.borderRightWidth,10)*oe.x,ue.bottom=parseInt(k.borderBottomWidth,10)*oe.y,ue.left=parseInt(k.borderLeftWidth,10)*oe.x),typeof f=="string"?f==="window"?q={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:f==="parent"?q=n.parentElement.getBoundingClientRect():q=document.querySelector(f).getBoundingClientRect():q=f.getBoundingClientRect(),_&&(V=_.touches?_.touches[0].clientX:_.clientX,He=_.touches?_.touches[0].clientY:_.clientY,st=V-q.left,Wt=He-q.top);let Me=b.left<q.right&&b.right>q.left,Oe=b.top<q.bottom&&b.bottom>q.top;return{overlaps:Me&&Oe,top:b.top-q.top-ue.top,right:q.right-b.right-ue.right,bottom:q.bottom-b.bottom-ue.bottom,left:b.left-q.left-ue.left,parentBorderWidth:ue,panelRect:b,referenceRect:q,pointer:{clientX:V,clientY:He,left:st-ue.left,top:Wt-ue.top,right:q.width-st-ue.right,bottom:q.height-Wt-ue.bottom}}},n.setSize=()=>{if(e.panelSize){const f=R.pOsize(n,e.panelSize);n.style.width=f.width,n.style.height=f.height}else if(e.contentSize){const f=R.pOsize(n,e.contentSize);n.content.style.width=f.width,n.content.style.height=f.height,n.style.width=f.width,n.content.style.width="100%"}return n},n.resize=(...f)=>{let y=window.getComputedStyle(n),_={width:y.width,height:y.height},b=!0,k;f.forEach(q=>{typeof q=="string"?_=q:typeof q=="object"?_=Object.assign(_,q):typeof q=="boolean"?b=q:typeof q=="function"&&(k=q)});let oe=R.pOsize(n,_);n.style.width=oe.width,n.style.height=oe.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(q=>q.reposition()),b&&n.saveCurrentDimensions(),n.status="normalized";let ue=n.controlbar.querySelector(".jsPanel-btn-smallify");return ue&&(ue.style.transform="rotate(0deg)"),k&&k.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=f=>{if(f.target===window){let y=n.status,_=e.onwindowresize,b,k;if(y==="maximized"&&_)n.maximize(!1,!0);else if(n.snapped&&y!=="minimized")n.snap(n.snapped,!0);else if(y==="normalized"||y==="smallified"||y==="maximized"){let oe=typeof _;oe==="boolean"?(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",k=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=k<=0?0:k+"px"):oe==="function"?_.call(n,f,n):oe==="object"&&(_.preset===!0&&(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",k=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=k<=0?0:k+"px"),_.callback.call(n,f,n))}else y==="smallifiedmax"&&_&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(oe=>oe.reposition())}},n.setControls=(f,y)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(_=>{const b=_.className.split("-"),k=b[b.length-1];n.getAttribute(`data-btn${k}`)!=="hidden"&&(_.style.display="block")}),f.forEach(_=>{const b=n.controlbar.querySelector(_);b&&(b.style.display="none")}),y&&y.call(n,n),n),n.setControlStatus=(f,y="enable",_)=>{const b=n.controlbar.querySelector(`.jsPanel-btn-${f}`);switch(y){case"disable":n.getAttribute(`data-btn${f}`)!=="removed"&&(n.setAttribute(`data-btn${f}`,"disabled"),b.style.pointerEvents="none",b.style.opacity=.4,b.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${f}`)!=="removed"&&(n.setAttribute(`data-btn${f}`,"hidden"),b.style.display="none");break;case"show":n.getAttribute(`data-btn${f}`)!=="removed"&&(n.setAttribute(`data-btn${f}`,"enabled"),b.style.display="block",b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${f}`)!=="removed"&&(n.getAttribute(`data-btn${f}`)==="hidden"&&(b.style.display="block"),n.setAttribute(`data-btn${f}`,"enabled"),b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(b),n.setAttribute(`data-btn${f}`,"removed");break}return _&&_.call(n,n),n},n.setControlSize=f=>{const y=f.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(b=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(k=>b.classList.remove(k)),b.classList.add(`jsPanel-btn-${y}`)}),y==="xl"?n.titlebar.style.fontSize="1.5rem":y==="lg"?n.titlebar.style.fontSize="1.25rem":y==="md"?n.titlebar.style.fontSize="1.05rem":y==="sm"?n.titlebar.style.fontSize=".9rem":y==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=f=>{if(n.options.headerControls.add){let k=n.options.headerControls.add;Array.isArray(k)||(k=[k]),k.forEach(oe=>n.addControl(oe))}let y=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(k=>{let oe=k.className.match(/jsPanel-btn-[a-z\d]{3,}/i),ue=oe[0].substring(12);y.push(ue)});const b=R.pOheaderControls(e.headerControls);return e.headerControls=b,y.forEach(k=>{b[k]&&n.setControlStatus(k,b[k])}),n.setControlSize(b.size),f&&f.call(n,n),n},n.setHeaderLogo=(f,y)=>{let _=[n.headerlogo],b=document.querySelector("#"+n.id+"-min");return b&&_.push(b.querySelector(".jsPanel-headerlogo")),typeof f=="string"?f.startsWith("<")?_.forEach(k=>k.innerHTML=f):_.forEach(k=>{R.emptyNode(k);let oe=document.createElement("img");oe.src=f,k.append(oe)}):_.forEach(k=>{R.emptyNode(k),k.append(f)}),n.headerlogo.childNodes.forEach(k=>{k.nodeName&&k.nodeName==="IMG"&&k.setAttribute("draggable","false")}),y&&y.call(n,n),n},n.setHeaderRemove=f=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(y=>n.setAttribute(`data-btn${y}`,"removed")),f&&f.call(n,n),n),n.setHeaderTitle=(f,y)=>{let _=[n.headertitle],b=document.querySelector("#"+n.id+"-min");return b&&_.push(b.querySelector(".jsPanel-title")),typeof f=="string"?_.forEach(k=>k.innerHTML=f):typeof f=="function"?_.forEach(k=>{R.emptyNode(k),k.innerHTML=f()}):_.forEach(k=>{R.emptyNode(k),k.append(f)}),y&&y.call(n,n),n},n.setIconfont=(f,y=n,_)=>{if(f){let b,k;if(f==="fa"||f==="far"||f==="fal"||f==="fas"||f==="fad")b=[`${f} fa-window-close`,`${f} fa-window-maximize`,`${f} fa-window-restore`,`${f} fa-window-minimize`,`${f} fa-chevron-up`];else if(f==="material-icons")b=[f,f,f,f,f,f],k=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(f))b=[`custom-control-icon ${f[4]}`,`custom-control-icon ${f[3]}`,`custom-control-icon ${f[2]}`,`custom-control-icon ${f[1]}`,`custom-control-icon ${f[0]}`];else if(f==="bootstrap"||f==="glyphicon")b=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return y;y.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(oe=>R.emptyNode(oe).innerHTML="<span></span>"),Array.prototype.slice.call(y.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((oe,ue)=>{oe.className=b[ue],f==="material-icons"&&(oe.textContent=k[ue])})}return _&&_.call(y,y),y},n.addToolbar=(f,y,_)=>{if(f==="header"?f=n.headertoolbar:f==="footer"&&(f=n.footer),typeof y=="string")f.innerHTML=y;else if(Array.isArray(y))y.forEach(b=>{typeof b=="string"?f.innerHTML+=b:f.append(b)});else if(typeof y=="function"){let b=y.call(n,n);typeof b=="string"?f.innerHTML=b:f.append(b)}else f.append(y);return f.classList.add("active"),_&&_.call(n,n),n},n.addCloseControl=()=>{let f=document.createElement("button"),y=n.content.style.color;return f.classList.add("jsPanel-addCloseCtrl"),f.innerHTML=R.icons.close,f.style.color=y,n.options.rtl&&f.classList.add("rtl"),n.appendChild(f),R.pointerup.forEach(_=>{f.addEventListener(_,b=>{if(b.preventDefault(),b.button&&b.button>0)return!1;n.close(null,!0)})}),R.pointerdown.forEach(_=>{f.addEventListener(_,b=>b.preventDefault())}),n},n.addControl=f=>{if(!f.html)return n;f.position||(f.position=1);const y=n.controlbar.querySelectorAll(".jsPanel-btn").length;let _=document.createElement("button");_.innerHTML=f.html,_.className=`jsPanel-btn jsPanel-btn-${f.name} jsPanel-btn-${e.headerControls.size}`,_.style.color=n.header.style.color,f.position>y?n.controlbar.append(_):n.controlbar.insertBefore(_,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${f.position})`));const b=f.ariaLabel||f.name;return b&&_.setAttribute("aria-label",b),R.pointerup.forEach(k=>{_.addEventListener(k,oe=>{if(oe.preventDefault(),oe.button&&oe.button>0)return!1;f.handler.call(n,n,_)})}),f.afterInsert&&f.afterInsert.call(_,_),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(f=>{f.dir="rtl",e.rtl.lang&&(f.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),s.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),R.isIE){let f=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":f.forEach(y=>{y.style.height="34px"});break;case"xs":f.forEach(y=>{y.style.height="26px"});break;case"sm":f.forEach(y=>{y.style.height="30px"});break;case"lg":f.forEach(y=>{y.style.height="38px"});break;case"xl":f.forEach(y=>{y.style.height="42px"});break}}if(e.header==="auto-show-hide"){let f="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,f),this.setClass(n.content,f),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,R.setClass(n,f),R.remClass(n.content,f)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,R.remClass(n,f),R.setClass(n.content,f)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[f,y]of Object.entries(e.css))if(f==="panel")n.className+=` ${y}`;else{let _=n.querySelector(`.jsPanel-${f}`);_&&(_.className+=` ${y}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const f=e.contentOverflow.split(" ");f.length===1?n.content.style.overflow=f[0]:f.length===2&&(n.content.style.overflowX=f[0],n.content.style.overflowY=f[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let f=Object.assign({},R.defaultAutocloseConfig,e.autoclose);f.time&&typeof f.time=="number"&&(f.time+="ms");let y=n.progressbar.querySelector("div");y.addEventListener("animationend",_=>{_.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),f.progressbar&&(n.progressbar.classList.add("active"),f.background?R.colorNames[f.background]?n.progressbar.style.background="#"+R.colorNames[f.background]:n.progressbar.style.background=f.background:n.progressbar.classList.add("success-bg")),y.style.animation=`${f.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(p),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let f=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=f,e.dragit.snap===!0?(e.dragit.snap=R.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=f)}if(e.dragit?(["start","drag","stop"].forEach(f=>{e.dragit[f]?typeof e.dragit[f]=="function"&&(e.dragit[f]=[e.dragit[f]]):e.dragit[f]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",f=>{f.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(y=>{e.resizeit[y]?typeof e.resizeit[y]=="function"&&(e.resizeit[y]=[e.resizeit[y]]):e.resizeit[y]=[]}),n.sizeit(e.resizeit);let f;n.addEventListener("jspanelresizestart",y=>{y.panel===n&&(f=n.status)},!1),n.addEventListener("jspanelresizestop",y=>{y.panel===n&&(f==="smallified"||f==="smallifiedmax"||f==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(p),document.dispatchEvent(c),e.onstatuschange&&R.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(f=>{n.addEventListener(f,y=>{!y.target.closest(".jsPanel-btn-close")&&!y.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let f=e.onparentresize,y=typeof f,_=n.isChildpanel();if(_){const b=_.content;let k=[];n.parentResizeHandler=oe=>{if(oe.panel===_){k[0]=b.offsetWidth,k[1]=b.offsetHeight;let ue=n.status,q,V;ue==="maximized"&&f?n.maximize():n.snapped&&ue!=="minimized"?n.snap(n.snapped,!0):ue==="normalized"||ue==="smallified"||ue==="maximized"?y==="function"?f.call(n,n,{width:k[0],height:k[1]}):y==="object"&&f.preset===!0?(q=(k[0]-n.offsetWidth)*n.hf,n.style.left=q<=0?0:q+"px",V=(k[1]-n.offsetHeight)*n.vf,n.style.top=V<=0?0:V+"px",f.callback.call(n,n,{width:k[0],height:k[1]})):y==="boolean"&&(q=(k[0]-n.offsetWidth)*n.hf,n.style.left=q<=0?0:q+"px",V=(k[1]-n.offsetHeight)*n.vf,n.style.top=V<=0?0:V+"px"):ue==="smallifiedmax"&&f&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(f=>f.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(f=>f.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(f=>f.call(n,n)):t.call(n,n)),document.dispatchEvent(a),n}};const Ph=.25,Ah=4;function Th(e){return Math.min(Ah,Math.max(Ph,e))}function ko(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const rr={x:0,y:0,scale:1};function Co(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Dh(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function jh(e,t){let r={...rr};t.style.transformOrigin="0 0";const s=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`};let n="none",a={...rr},c=0,d=0,p=0,v=0,P=0,$=0;const O=(f,y)=>{const _=e.getBoundingClientRect();return{x:f-_.left,y:y-_.top}},B=f=>{if(f.touches.length===2){n="pinch",a={...r};const[y,_]=[f.touches[0],f.touches[1]];p=Co(y,_)||1;const b=O((y.clientX+_.clientX)/2,(y.clientY+_.clientY)/2);v=(b.x-r.x)/r.scale,P=(b.y-r.y)/r.scale,f.preventDefault();return}if(f.touches.length===1&&!Dh(f.target)){const y=f.timeStamp;if(y-$<300){r={...rr},s(),$=0,n="none",f.preventDefault();return}$=y,n="pan",a={...r},c=f.touches[0].clientX,d=f.touches[0].clientY}else n="none"},M=f=>{if(n==="pan"&&f.touches.length===1){const y=f.touches[0];r=ko(a,y.clientX-c,y.clientY-d),s(),f.preventDefault()}else if(n==="pinch"&&f.touches.length>=2){const[y,_]=[f.touches[0],f.touches[1]],b=Th(a.scale*(Co(y,_)/p)),k=O((y.clientX+_.clientX)/2,(y.clientY+_.clientY)/2);r={x:k.x-v*b,y:k.y-P*b,scale:b},s(),f.preventDefault()}},K=f=>{f.touches.length===0?n="none":f.touches.length===1&&n==="pinch"&&(n="pan",a={...r},c=f.touches[0].clientX,d=f.touches[0].clientY)};let ae=!1,ge={...rr},be=0,Ie=0,se=!1;const fe=(f,y)=>{const _=e.getBoundingClientRect();return f>=_.left&&f<=_.right&&y>=_.top&&y<=_.bottom},Ee=f=>{if(!ae)return;const y=f.clientX-be,_=f.clientY-Ie;!se&&Math.hypot(y,_)<4||(se=!0,document.body.style.cursor="grabbing",r=ko(ge,y,_),s(),f.preventDefault())},ye=()=>{ae&&(ae=!1,document.body.style.cursor="",window.removeEventListener("mousemove",Ee,!0),window.removeEventListener("mouseup",ft,!0))};function ft(){ye()}const $t=f=>{f.button===2&&fe(f.clientX,f.clientY)&&(ae=!0,se=!1,ge={...r},be=f.clientX,Ie=f.clientY,window.addEventListener("mousemove",Ee,!0),window.addEventListener("mouseup",ft,!0))},wt=f=>{se&&(f.preventDefault(),se=!1)};return e.addEventListener("touchstart",B,{passive:!1}),e.addEventListener("touchmove",M,{passive:!1}),e.addEventListener("touchend",K),e.addEventListener("touchcancel",K),window.addEventListener("mousedown",$t,!0),window.addEventListener("contextmenu",wt,!0),{snapshot:()=>({...r}),reset:()=>{r={...rr},s()},restore:f=>{r={...f},s()},dispose:()=>{e.removeEventListener("touchstart",B),e.removeEventListener("touchmove",M),e.removeEventListener("touchend",K),e.removeEventListener("touchcancel",K),window.removeEventListener("mousedown",$t,!0),window.removeEventListener("contextmenu",wt,!0),ye()}}}var Fh=Object.defineProperty,Rh=Object.getOwnPropertyDescriptor,hr=(e,t,r,s)=>{for(var n=s>1?void 0:s?Rh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Fh(t,r,n),n};let Rn=class extends Qe{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return U`<button
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
    />`}};Rn.styles=[on,it`
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
    `];hr([Gt({type:String})],Rn.prototype,"tableId",2);hr([J()],Rn.prototype,"query",2);hr([J()],Rn.prototype,"open",2);hr([Wn("input")],Rn.prototype,"inputEl",2);Rn=hr([ht("panel-search")],Rn);var Oh=Object.defineProperty,zh=Object.getOwnPropertyDescriptor,Kn=(e,t,r,s)=>{for(var n=s>1?void 0:s?zh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Oh(t,r,n),n};let yn=class extends Qe{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1}async connectedCallback(){super.connectedCallback();const e=await Fe();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(r=>r.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await Fe();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await Fe(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const s of t.columns)r[s.field]=Ih(s);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}async runTableButton(e){const t=await Fe();try{await Promise.resolve(e.onClick(t.api,{tableId:this.tableId}))}catch(r){console.error(`[table-button:${e.id}]`,r)}}render(){return U`
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
    `}};yn.styles=[on,it`
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
    `];Kn([Gt({type:String})],yn.prototype,"tableId",2);Kn([Gt({type:Boolean})],yn.prototype,"active",2);Kn([J()],yn.prototype,"rowCount",2);Kn([J()],yn.prototype,"tableButtons",2);Kn([J()],yn.prototype,"table",2);yn=Kn([ht("panel-footer")],yn);function Ih(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function Lh(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Bh(e){const t=document.querySelector("app-shell")?.shadowRoot,r=t?.querySelector("header"),s=t?.querySelector("footer");r&&(e.style.top=`${r.offsetHeight}px`),s&&(e.style.bottom=`${s.offsetHeight}px`)}const Tn=new Map,qr=new Set,$a=new Set;let Eo=!1,Ur=null;async function Mh(){if(Eo)return;Eo=!0;const e=await Fe(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");if(t&&r){Ur=jh(t,r);const n=()=>Bh(t);n(),window.addEventListener("resize",n);const a=document.querySelector("app-shell")?.shadowRoot,c=a?.querySelector("header"),d=a?.querySelector("footer");if(typeof ResizeObserver<"u"&&(c||d)){const p=new ResizeObserver(n);c&&p.observe(c),d&&p.observe(d)}}const s=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);s.sort(So);for(const n of s)_o(n,e);e.store.tables.subscribe(n=>{const a=n.filter(p=>p.workspaceId===e.workspaceId),c=new Set(a.map(p=>p.id));for(const[p,v]of Tn)if(!c.has(p)){Tn.delete(p),qr.add(p),$a.add(p);try{v.status!=="closed"&&v.close()}catch{}}const d=a.filter(p=>!Tn.has(p.id)).sort(So);for(const p of d)_o(p,e)})}function So(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const Nh=200,qh=100,Uh=720,Wh=360;function Hh(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<Nh||e.h<qh?null:{...e}}function _o(e,t){const r=`panel-${ka(e.id)}`,s=Lh(),n=Hh(e.windowGeometry),a=n?.minimized===!0,c=()=>{const y=document.createElement("data-table");return y.tableId=e.id,y.style.height="100%",y},d=a?document.createElement("div"):c();let p=a?null:d,v=e.name,P=null;const $=y=>{typeof ye.setHeaderTitle=="function"&&ye.setHeaderTitle(`${v} (${y})`)},O=()=>{P||(P=t.store.rows(e.id).subscribe(y=>$(y.length)))},B=()=>{P?.(),P=null},M=()=>{B(),ge.active=!1,p?.remove(),p=null},K=()=>{if(p)return;const y=document.getElementById(r)?.querySelector(".jsPanel-content");if(!y)return;y.replaceChildren();const _=c();y.appendChild(_),p=_,ge.active=!0,O()},ae=document.createElement("panel-search");ae.tableId=e.id;const ge=document.createElement("panel-footer");ge.tableId=e.id,ge.active=!a;let be=null,Ie=!1;const se=y=>{const _=y==="maximized";_&&!Ie?(be=Ur?.snapshot()??null,Ur?.reset()):!_&&Ie&&(be&&Ur?.restore(be),be=null),Ie=_},fe=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:Vh(),Ee=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:`${Uh} ${Wh}`},ye=R.create({id:r,container:s,headerTitle:e.name,footerToolbar:ge,theme:"primary",content:d,...Ee,position:fe,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>Ns(e.id,t)},resizeit:{containment:!1,stop:()=>Ns(e.id,t)},onfronted:()=>Yh(e.id,t),onbeforeclose:()=>qr.has(e.id)?!0:((async()=>await t.api.ui.dialogs.confirm(e.source?`Remove the live table "${e.name}"? Its data stays on the Datasette server.`:`Delete table "${e.name}" and all its rows?`,"Confirm")&&(qr.add(e.id),Tn.get(e.id)?.close()))(),!1),onclosed:async()=>{Tn.delete(e.id),qr.delete(e.id),!$a.delete(e.id)&&await Xh(e.id,t)},onstatuschange:y=>{y.status==="minimized"?M():(y.status==="normalized"||y.status==="maximized")&&K(),se(y.status),Ns(e.id,t)}});Tn.set(e.id,ye);const ft=document.getElementById(r),$t=ft?.querySelector(".jsPanel-controlbar");$t&&$t.prepend(ae);const wt=ft?.querySelector(".jsPanel-titlebar");wt&&(wt.tabIndex=-1,wt.style.outline="none",wt.addEventListener("pointerdown",()=>wt.focus())),n?.maximized&&typeof ye.maximize=="function"?queueMicrotask(()=>ye.maximize?.()):n?.minimized&&typeof ye.minimize=="function"&&queueMicrotask(()=>ye.minimize?.()),t.store.tables.subscribe(y=>{const _=y.find(b=>b.id===e.id);_&&_.name!==v&&(v=_.name,P&&t.store.rows(e.id).find().then(b=>$(b.length)))}),a||O();const f=ye.close.bind(ye);ye.close=()=>(B(),f())}let Kh=0;function Vh(){const e=Kh++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function Ns(e,t){const r=document.getElementById(`panel-${ka(e)}`);if(!r)return;const s=Tn.get(e)?.status??"normalized";try{const a=(await t.store.tables.findOne(e))?.windowGeometry,c=s==="minimized",d=s==="maximized";let p=r.offsetLeft,v=r.offsetTop,P=r.offsetWidth,$=r.offsetHeight;(c||d)&&a&&(p=a.x,v=a.y,P=a.w,$=a.h),p<=-9e3&&(p=a?.x??40);const O={x:p,y:v,w:P,h:$,z:a?.z??0,minimized:c,maximized:d};await t.store.tables.patch(e,{windowGeometry:O,updatedAt:Date.now()})}catch{}}async function Yh(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const s=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...s,z:Date.now()},updatedAt:Date.now()})}catch{}}async function Xh(e,t){if(!(await t.store.tables.findOne(e))?.source){const s=t.store.rows(e),n=await s.find();await s.bulkRemove(n.map(a=>a.id))}await t.store.tables.remove(e)}function ka(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var Gh=Object.defineProperty,Qh=Object.getOwnPropertyDescriptor,Ca=(e,t,r,s)=>{for(var n=s>1?void 0:s?Qh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Gh(t,r,n),n};let Yr=class extends Qe{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await Fe();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(s=>s.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await Mh()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?U``:U`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on
      the page, or click <strong>+ New Table</strong> above.
    </div>`}};Yr.styles=it`
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
  `;Ca([J()],Yr.prototype,"tables",2);Yr=Ca([ht("table-list")],Yr);var Jh=Object.defineProperty,Zh=Object.getOwnPropertyDescriptor,ui=(e,t,r,s)=>{for(var n=s>1?void 0:s?Zh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Jh(t,r,n),n};let lr=class extends Qe{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await Fe();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const s=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(s)}async addWorkspace(){const t=await(await Fe()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return U`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>U`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};lr.styles=[on,it`
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
  `];ui([J()],lr.prototype,"workspaces",2);ui([J()],lr.prototype,"current",2);lr=ui([ht("workspace-selector")],lr);var Po=Object.freeze,Ea=Object.defineProperty,ef=Object.getOwnPropertyDescriptor,ln=(e,t,r,s)=>{for(var n=s>1?void 0:s?ef(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(s?c(t,r,n):c(n))||n);return s&&n&&Ea(t,r,n),n},tf=(e,t)=>Po(Ea(e,"raw",{value:Po(e.slice())})),Ao;function nf(e){return e?e.trimStart().startsWith("<svg")?U`<span class="icon-svg">${Sl(e)}</span>`:U`<span class="mi sm">${e}</span>`:""}let Nt=class extends Qe{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId)},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{To(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!To(e))return;e.preventDefault();const t=await Fe(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const s of[...t.registries.dropHandlers])try{if(await s(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=e=>{this.api&&Promise.resolve(e.onClick(this.api)).catch(t=>{console.error(`[footer-button:${e.id}]`,t)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager)}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await Fe();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e))}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){const r=t==="header"||e.variant==="primary"?"primary":"slot";return U`
      <button class=${r} title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
        ${nf(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return U(Ao||(Ao=tf([`
      <header>
        <strong>easyDBAccess <span class="version">v0.0.46</span></strong>
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
            </button>`,this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Nt.styles=[on,it`
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
    `];ln([Wn("new-table-dialog")],Nt.prototype,"dialog",2);ln([Wn("csv-paste-dialog")],Nt.prototype,"csvPasteDialog",2);ln([Wn("plugin-manager-dialog")],Nt.prototype,"pluginManagerDialog",2);ln([Wn("input.search")],Nt.prototype,"searchInput",2);ln([J()],Nt.prototype,"footerButtons",2);ln([J()],Nt.prototype,"headerButtons",2);ln([J()],Nt.prototype,"searchQuery",2);ln([J()],Nt.prototype,"searchOpen",2);Nt=ln([ht("app-shell")],Nt);function To(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([Fe(),Qa(()=>Promise.resolve().then(()=>ya),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});
//# sourceMappingURL=index-Dtl9RjnN.js.map
