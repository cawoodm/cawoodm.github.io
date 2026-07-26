(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const gc="modulepreload",bc=function(e){return"/easydbaccess/"+e},Do={},Sn=function(t,r,s){let n=Promise.resolve();if(r&&r.length>0){let l=function(g){return Promise.all(g.map($=>Promise.resolve($).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),h=u?.nonce||u?.getAttribute("nonce");n=l(r.map(g=>{if(g=bc(g),g in Do)return;Do[g]=!0;const $=g.endsWith(".css"),w=$?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${w}`))return;const P=document.createElement("link");if(P.rel=$?"stylesheet":gc,$||(P.as="script"),P.crossOrigin="",P.href=g,h&&P.setAttribute("nonce",h),document.head.appendChild(P),$)return new Promise((W,L)=>{P.addEventListener("load",W),P.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${g}`)))})}))}function o(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return n.then(l=>{for(const u of l||[])u.status==="rejected"&&o(u.reason);return t().catch(o)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const us=globalThis,ji=us.ShadowRoot&&(us.ShadyCSS===void 0||us.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fi=Symbol(),Ro=new WeakMap;let La=class{constructor(t,r,s){if(this._$cssResult$=!0,s!==Fi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(ji&&t===void 0){const s=r!==void 0&&r.length===1;s&&(t=Ro.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Ro.set(r,t))}return t}toString(){return this.cssText}};const yc=e=>new La(typeof e=="string"?e:e+"",void 0,Fi),Ye=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((s,n,o)=>s+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new La(r,e,Fi)},wc=(e,t)=>{if(ji)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const s=document.createElement("style"),n=us.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=r.cssText,e.appendChild(s)}},Oo=ji?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return yc(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:vc,defineProperty:xc,getOwnPropertyDescriptor:$c,getOwnPropertyNames:kc,getOwnPropertySymbols:Cc,getPrototypeOf:Ec}=Object,Es=globalThis,jo=Es.trustedTypes,Sc=jo?jo.emptyScript:"",_c=Es.reactiveElementPolyfillSupport,$r=(e,t)=>e,ps={toAttribute(e,t){switch(t){case Boolean:e=e?Sc:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},zi=(e,t)=>!vc(e,t),Fo={attribute:!0,type:String,converter:ps,reflect:!1,useDefault:!1,hasChanged:zi};Symbol.metadata??=Symbol("metadata"),Es.litPropertyMetadata??=new WeakMap;let er=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Fo){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(t,s,r);n!==void 0&&xc(this.prototype,t,n)}}static getPropertyDescriptor(t,r,s){const{get:n,set:o}=$c(this.prototype,t)??{get(){return this[r]},set(l){this[r]=l}};return{get:n,set(l){const u=n?.call(this);o?.call(this,l),this.requestUpdate(t,u,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Fo}static _$Ei(){if(this.hasOwnProperty($r("elementProperties")))return;const t=Ec(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($r("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($r("properties"))){const r=this.properties,s=[...kc(r),...Cc(r)];for(const n of s)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[s,n]of r)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[r,s]of this.elementProperties){const n=this._$Eu(r,s);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const n of s)r.unshift(Oo(n))}else t!==void 0&&r.push(Oo(t));return r}static _$Eu(t,r){const s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const s of r.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wc(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,s){this._$AK(t,s)}_$ET(t,r){const s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(n!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:ps).toAttribute(r,s.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,r){const s=this.constructor,n=s._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const o=s.getPropertyOptions(n),l=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ps;this._$Em=n;const u=l.fromAttribute(r,o.type);this[n]=u??this._$Ej?.get(n)??u,this._$Em=null}}requestUpdate(t,r,s,n=!1,o){if(t!==void 0){const l=this.constructor;if(n===!1&&(o=this[t]),s??=l.getPropertyOptions(t),!((s.hasChanged??zi)(o,r)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(l._$Eu(t,s))))return;this.C(t,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:s,reflect:n,wrapped:o},l){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,l??r??this[t]),o!==!0||l!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s){const{wrapped:l}=o,u=this[n];l!==!0||this._$AL.has(n)||u===void 0||this.C(n,void 0,o,u)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(r)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};er.elementStyles=[],er.shadowRootOptions={mode:"open"},er[$r("elementProperties")]=new Map,er[$r("finalized")]=new Map,_c?.({ReactiveElement:er}),(Es.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Li=globalThis,zo=e=>e,ms=Li.trustedTypes,Lo=ms?ms.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ba="$lit$",En=`lit$${Math.random().toFixed(9).slice(2)}$`,Ma="?"+En,Ac=`<${Ma}>`,Un=document,kr=()=>Un.createComment(""),Cr=e=>e===null||typeof e!="object"&&typeof e!="function",Bi=Array.isArray,Tc=e=>Bi(e)||typeof e?.[Symbol.iterator]=="function",hi=`[ 	
\f\r]`,wr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bo=/-->/g,Mo=/>/g,Ln=RegExp(`>|${hi}(?:([^\\s"'>=/]+)(${hi}*=${hi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),No=/'/g,Uo=/"/g,Na=/^(?:script|style|textarea|title)$/i,Pc=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),j=Pc(1),qn=Symbol.for("lit-noChange"),me=Symbol.for("lit-nothing"),qo=new WeakMap,Mn=Un.createTreeWalker(Un,129);function Ua(e,t){if(!Bi(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Lo!==void 0?Lo.createHTML(t):t}const Ic=(e,t)=>{const r=e.length-1,s=[];let n,o=t===2?"<svg>":t===3?"<math>":"",l=wr;for(let u=0;u<r;u++){const h=e[u];let g,$,w=-1,P=0;for(;P<h.length&&(l.lastIndex=P,$=l.exec(h),$!==null);)P=l.lastIndex,l===wr?$[1]==="!--"?l=Bo:$[1]!==void 0?l=Mo:$[2]!==void 0?(Na.test($[2])&&(n=RegExp("</"+$[2],"g")),l=Ln):$[3]!==void 0&&(l=Ln):l===Ln?$[0]===">"?(l=n??wr,w=-1):$[1]===void 0?w=-2:(w=l.lastIndex-$[2].length,g=$[1],l=$[3]===void 0?Ln:$[3]==='"'?Uo:No):l===Uo||l===No?l=Ln:l===Bo||l===Mo?l=wr:(l=Ln,n=void 0);const W=l===Ln&&e[u+1].startsWith("/>")?" ":"";o+=l===wr?h+Ac:w>=0?(s.push(g),h.slice(0,w)+Ba+h.slice(w)+En+W):h+En+(w===-2?u:W)}return[Ua(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class Er{constructor({strings:t,_$litType$:r},s){let n;this.parts=[];let o=0,l=0;const u=t.length-1,h=this.parts,[g,$]=Ic(t,r);if(this.el=Er.createElement(g,s),Mn.currentNode=this.el.content,r===2||r===3){const w=this.el.content.firstChild;w.replaceWith(...w.childNodes)}for(;(n=Mn.nextNode())!==null&&h.length<u;){if(n.nodeType===1){if(n.hasAttributes())for(const w of n.getAttributeNames())if(w.endsWith(Ba)){const P=$[l++],W=n.getAttribute(w).split(En),L=/([.?@])?(.*)/.exec(P);h.push({type:1,index:o,name:L[2],strings:W,ctor:L[1]==="."?Rc:L[1]==="?"?Oc:L[1]==="@"?jc:Ss}),n.removeAttribute(w)}else w.startsWith(En)&&(h.push({type:6,index:o}),n.removeAttribute(w));if(Na.test(n.tagName)){const w=n.textContent.split(En),P=w.length-1;if(P>0){n.textContent=ms?ms.emptyScript:"";for(let W=0;W<P;W++)n.append(w[W],kr()),Mn.nextNode(),h.push({type:2,index:++o});n.append(w[P],kr())}}}else if(n.nodeType===8)if(n.data===Ma)h.push({type:2,index:o});else{let w=-1;for(;(w=n.data.indexOf(En,w+1))!==-1;)h.push({type:7,index:o}),w+=En.length-1}o++}}static createElement(t,r){const s=Un.createElement("template");return s.innerHTML=t,s}}function tr(e,t,r=e,s){if(t===qn)return t;let n=s!==void 0?r._$Co?.[s]:r._$Cl;const o=Cr(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(e),n._$AT(e,r,s)),s!==void 0?(r._$Co??=[])[s]=n:r._$Cl=n),n!==void 0&&(t=tr(e,n._$AS(e,t.values),n,s)),t}class Dc{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:s}=this._$AD,n=(t?.creationScope??Un).importNode(r,!0);Mn.currentNode=n;let o=Mn.nextNode(),l=0,u=0,h=s[0];for(;h!==void 0;){if(l===h.index){let g;h.type===2?g=new Ar(o,o.nextSibling,this,t):h.type===1?g=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(g=new Fc(o,this,t)),this._$AV.push(g),h=s[++u]}l!==h?.index&&(o=Mn.nextNode(),l++)}return Mn.currentNode=Un,n}p(t){let r=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,r),r+=s.strings.length-2):s._$AI(t[r])),r++}}class Ar{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,s,n){this.type=2,this._$AH=me,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=s,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=tr(this,t,r),Cr(t)?t===me||t==null||t===""?(this._$AH!==me&&this._$AR(),this._$AH=me):t!==this._$AH&&t!==qn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Tc(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==me&&Cr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Un.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Er.createElement(Ua(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(r);else{const o=new Dc(n,this),l=o.u(this.options);o.p(r),this.T(l),this._$AH=o}}_$AC(t){let r=qo.get(t.strings);return r===void 0&&qo.set(t.strings,r=new Er(t)),r}k(t){Bi(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,n=0;for(const o of t)n===r.length?r.push(s=new Ar(this.O(kr()),this.O(kr()),this,this.options)):s=r[n],s._$AI(o),n++;n<r.length&&(this._$AR(s&&s._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const s=zo(t).nextSibling;zo(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Ss{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,s,n,o){this.type=1,this._$AH=me,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=me}_$AI(t,r=this,s,n){const o=this.strings;let l=!1;if(o===void 0)t=tr(this,t,r,0),l=!Cr(t)||t!==this._$AH&&t!==qn,l&&(this._$AH=t);else{const u=t;let h,g;for(t=o[0],h=0;h<o.length-1;h++)g=tr(this,u[s+h],r,h),g===qn&&(g=this._$AH[h]),l||=!Cr(g)||g!==this._$AH[h],g===me?t=me:t!==me&&(t+=(g??"")+o[h+1]),this._$AH[h]=g}l&&!n&&this.j(t)}j(t){t===me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Rc extends Ss{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===me?void 0:t}}class Oc extends Ss{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==me)}}class jc extends Ss{constructor(t,r,s,n,o){super(t,r,s,n,o),this.type=5}_$AI(t,r=this){if((t=tr(this,t,r,0)??me)===qn)return;const s=this._$AH,n=t===me&&s!==me||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==me&&(s===me||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Fc{constructor(t,r,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){tr(this,t)}}const zc=Li.litHtmlPolyfillSupport;zc?.(Er,Ar),(Li.litHtmlVersions??=[]).push("3.3.3");const Lc=(e,t,r)=>{const s=r?.renderBefore??t;let n=s._$litPart$;if(n===void 0){const o=r?.renderBefore??null;s._$litPart$=n=new Ar(t.insertBefore(kr(),o),o,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mi=globalThis;let Ne=class extends er{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lc(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return qn}};Ne._$litElement$=!0,Ne.finalized=!0,Mi.litElementHydrateSupport?.({LitElement:Ne});const Bc=Mi.litElementPolyfillSupport;Bc?.({LitElement:Ne});(Mi.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mc={attribute:!0,type:String,converter:ps,reflect:!1,hasChanged:zi},Nc=(e=Mc,t,r)=>{const{kind:s,metadata:n}=r;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),s==="accessor"){const{name:l}=r;return{set(u){const h=t.get.call(this);t.set.call(this,u),this.requestUpdate(l,h,e,!0,u)},init(u){return u!==void 0&&this.C(l,void 0,e,u),u}}}if(s==="setter"){const{name:l}=r;return function(u){const h=this[l];t.call(this,u),this.requestUpdate(l,h,e,!0,u)}}throw Error("Unsupported decorator location: "+s)};function qt(e){return(t,r)=>typeof r=="object"?Nc(e,t,r):((s,n,o)=>{const l=n.hasOwnProperty(o);return n.constructor.createProperty(o,s),l?Object.getOwnPropertyDescriptor(n,o):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V(e){return qt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uc=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kn(e,t){return(r,s,n)=>{const o=l=>l.renderRoot?.querySelector(e)??null;return Uc(r,s,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qc={CHILD:2},qa=e=>(...t)=>({_$litDirective$:e,values:t});class Hc{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,s){this._$Ct=t,this._$AM=r,this._$Ci=s}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class gs extends Hc{constructor(t){if(super(t),this.it=me,t.type!==qc.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===me||t==null)return this._t=void 0,this.it=t;if(t===qn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}gs.directiveName="unsafeHTML",gs.resultType=1;const ds=qa(gs);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class vi extends gs{}vi.directiveName="unsafeSVG",vi.resultType=2;const Ha=qa(vi);var Wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hs={exports:{}},Vc=hs.exports,Ho;function Gc(){return Ho||(Ho=1,(function(e,t){(function(r,s){e.exports=s()})(Vc,function(){var r=function(i,a){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(c[f]=d[f])})(i,a)},s=function(){return(s=Object.assign||function(i){for(var a,c=1,d=arguments.length;c<d;c++)for(var f in a=arguments[c])Object.prototype.hasOwnProperty.call(a,f)&&(i[f]=a[f]);return i}).apply(this,arguments)};function n(i,a,c){for(var d,f=0,p=a.length;f<p;f++)!d&&f in a||((d=d||Array.prototype.slice.call(a,0,f))[f]=a[f]);return i.concat(d||Array.prototype.slice.call(a))}var o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Wc,l=Object.keys,u=Array.isArray;function h(i,a){return typeof a!="object"||l(a).forEach(function(c){i[c]=a[c]}),i}typeof Promise>"u"||o.Promise||(o.Promise=Promise);var g=Object.getPrototypeOf,$={}.hasOwnProperty;function w(i,a){return $.call(i,a)}function P(i,a){typeof a=="function"&&(a=a(g(i))),(typeof Reflect>"u"?l:Reflect.ownKeys)(a).forEach(function(c){L(i,c,a[c])})}var W=Object.defineProperty;function L(i,a,c,d){W(i,a,h(c&&w(c,"get")&&typeof c.get=="function"?{get:c.get,set:c.set,configurable:!0}:{value:c,configurable:!0,writable:!0},d))}function N(i){return{from:function(a){return i.prototype=Object.create(a.prototype),L(i.prototype,"constructor",i),{extend:P.bind(null,i.prototype)}}}}var U=Object.getOwnPropertyDescriptor,re=[].slice;function ce(i,a,c){return re.call(i,a,c)}function ge(i,a){return a(i)}function Q(i){if(!i)throw new Error("Assertion Failed")}function q(i){o.setImmediate?setImmediate(i):setTimeout(i,0)}function oe(i,a){if(typeof a=="string"&&w(i,a))return i[a];if(!a)return i;if(typeof a!="string"){for(var c=[],d=0,f=a.length;d<f;++d){var p=oe(i,a[d]);c.push(p)}return c}var y=a.indexOf(".");if(y!==-1){var x=i[a.substr(0,y)];return x==null?void 0:oe(x,a.substr(y+1))}}function be(i,a,c){if(i&&a!==void 0&&!("isFrozen"in Object&&Object.isFrozen(i)))if(typeof a!="string"&&"length"in a){Q(typeof c!="string"&&"length"in c);for(var d=0,f=a.length;d<f;++d)be(i,a[d],c[d])}else{var p,y,x=a.indexOf(".");x!==-1?(p=a.substr(0,x),(y=a.substr(x+1))===""?c===void 0?u(i)&&!isNaN(parseInt(p))?i.splice(p,1):delete i[p]:i[p]=c:be(x=!(x=i[p])||!w(i,p)?i[p]={}:x,y,c)):c===void 0?u(i)&&!isNaN(parseInt(a))?i.splice(a,1):delete i[a]:i[a]=c}}function $e(i){var a,c={};for(a in i)w(i,a)&&(c[a]=i[a]);return c}var ze=[].concat;function ke(i){return ze.apply([],i)}var hn="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ke([8,16,32,64].map(function(i){return["Int","Uint","Float"].map(function(a){return a+i+"Array"})}))).filter(function(i){return o[i]}),m=new Set(hn.map(function(i){return o[i]})),v=null;function E(i){return v=new WeakMap,i=(function a(c){if(!c||typeof c!="object")return c;var d=v.get(c);if(d)return d;if(u(c)){d=[],v.set(c,d);for(var f=0,p=c.length;f<p;++f)d.push(a(c[f]))}else if(m.has(c.constructor))d=c;else{var y,x=g(c);for(y in d=x===Object.prototype?{}:Object.create(x),v.set(c,d),c)w(c,y)&&(d[y]=a(c[y]))}return d})(i),v=null,i}var b={}.toString;function C(i){return b.call(i).slice(8,-1)}var ue=typeof Symbol<"u"?Symbol.iterator:"@@iterator",pe=typeof ue=="symbol"?function(i){var a;return i!=null&&(a=i[ue])&&a.apply(i)}:function(){return null};function K(i,a){return a=i.indexOf(a),0<=a&&i.splice(a,1),0<=a}var X={};function Xe(i){var a,c,d,f;if(arguments.length===1){if(u(i))return i.slice();if(this===X&&typeof i=="string")return[i];if(f=pe(i)){for(c=[];!(d=f.next()).done;)c.push(d.value);return c}if(i==null)return[i];if(typeof(a=i.length)!="number")return[i];for(c=new Array(a);a--;)c[a]=i[a];return c}for(a=arguments.length,c=new Array(a);a--;)c[a]=arguments[a];return c}var ct=typeof Symbol<"u"?function(i){return i[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Te=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],zt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Te),tn={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function He(i,a){this.name=i,this.message=a}function Be(i,a){return i+". Errors: "+Object.keys(a).map(function(c){return a[c].toString()}).filter(function(c,d,f){return f.indexOf(c)===d}).join(`
`)}function _e(i,a,c,d){this.failures=a,this.failedKeys=d,this.successCount=c,this.message=Be(i,a)}function Re(i,a){this.name="BulkError",this.failures=Object.keys(a).map(function(c){return a[c]}),this.failuresByPos=a,this.message=Be(i,this.failures)}N(He).from(Error).extend({toString:function(){return this.name+": "+this.message}}),N(_e).from(He),N(Re).from(He);var Qe=zt.reduce(function(i,a){return i[a]=a+"Error",i},{}),Ie=He,se=zt.reduce(function(i,a){var c=a+"Error";function d(f,p){this.name=c,f?typeof f=="string"?(this.message="".concat(f).concat(p?`
 `+p:""),this.inner=p||null):typeof f=="object"&&(this.message="".concat(f.name," ").concat(f.message),this.inner=f):(this.message=tn[a]||c,this.inner=null)}return N(d).from(Ie),i[a]=d,i},{});se.Syntax=SyntaxError,se.Type=TypeError,se.Range=RangeError;var Je=Te.reduce(function(i,a){return i[a+"Error"]=se[a],i},{}),Me=zt.reduce(function(i,a){return["Syntax","Type","Range"].indexOf(a)===-1&&(i[a+"Error"]=se[a]),i},{});function fe(){}function Ce(i){return i}function _t(i,a){return i==null||i===Ce?a:function(c){return a(i(c))}}function de(i,a){return function(){i.apply(this,arguments),a.apply(this,arguments)}}function Ze(i,a){return i===fe?a:function(){var c=i.apply(this,arguments);c!==void 0&&(arguments[0]=c);var d=this.onsuccess,f=this.onerror;this.onsuccess=null,this.onerror=null;var p=a.apply(this,arguments);return d&&(this.onsuccess=this.onsuccess?de(d,this.onsuccess):d),f&&(this.onerror=this.onerror?de(f,this.onerror):f),p!==void 0?p:c}}function bn(i,a){return i===fe?a:function(){i.apply(this,arguments);var c=this.onsuccess,d=this.onerror;this.onsuccess=this.onerror=null,a.apply(this,arguments),c&&(this.onsuccess=this.onsuccess?de(c,this.onsuccess):c),d&&(this.onerror=this.onerror?de(d,this.onerror):d)}}function Gt(i,a){return i===fe?a:function(c){var d=i.apply(this,arguments);h(c,d);var f=this.onsuccess,p=this.onerror;return this.onsuccess=null,this.onerror=null,c=a.apply(this,arguments),f&&(this.onsuccess=this.onsuccess?de(f,this.onsuccess):f),p&&(this.onerror=this.onerror?de(p,this.onerror):p),d===void 0?c===void 0?void 0:c:h(d,c)}}function tt(i,a){return i===fe?a:function(){return a.apply(this,arguments)!==!1&&i.apply(this,arguments)}}function At(i,a){return i===fe?a:function(){var c=i.apply(this,arguments);if(c&&typeof c.then=="function"){for(var d=this,f=arguments.length,p=new Array(f);f--;)p[f]=arguments[f];return c.then(function(){return a.apply(d,p)})}return a.apply(this,arguments)}}Me.ModifyError=_e,Me.DexieError=He,Me.BulkError=Re;var Fe=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function We(i){Fe=i}var xt={},st=100,hn=typeof Promise>"u"?[]:(function(){var i=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[i,g(i),i];var a=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[a,g(a),i]})(),Te=hn[0],zt=hn[1],hn=hn[2],zt=zt&&zt.then,Ae=Te&&Te.constructor,Tt=!!hn,Ke=function(i,a){ot.push([i,a]),dt&&(queueMicrotask(we),dt=!1)},bt=!0,dt=!0,it=[],Ue=[],he=Ce,et={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:fe,pgp:!1,env:{},finalize:fe},Z=et,ot=[],pt=0,Ct=[];function ee(i){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var a=this._PSD=Z;if(typeof i!="function"){if(i!==xt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&ht(this,this._value))}this._state=null,this._value=null,++a.ref,(function c(d,f){try{f(function(p){if(d._state===null){if(p===d)throw new TypeError("A promise cannot be resolved with itself.");var y=d._lib&&Le();p&&typeof p.then=="function"?c(d,function(x,S){p instanceof ee?p._then(x,S):p.then(x,S)}):(d._state=!0,d._value=p,yn(d)),y&&Ve()}},ht.bind(null,d))}catch(p){ht(d,p)}})(this,i)}var nn={get:function(){var i=Z,a=Mr;function c(d,f){var p=this,y=!i.global&&(i!==Z||a!==Mr),x=y&&!vn(),S=new ee(function(A,D){ae(p,new un(ro(d,i,y,x),ro(f,i,y,x),A,D,i))});return this._consoleTask&&(S._consoleTask=this._consoleTask),S}return c.prototype=xt,c},set:function(i){L(this,"then",i&&i.prototype===xt?nn:{get:function(){return i},set:nn.set})}};function un(i,a,c,d,f){this.onFulfilled=typeof i=="function"?i:null,this.onRejected=typeof a=="function"?a:null,this.resolve=c,this.reject=d,this.psd=f}function ht(i,a){var c,d;Ue.push(a),i._state===null&&(c=i._lib&&Le(),a=he(a),i._state=!1,i._value=a,d=i,it.some(function(f){return f._value===d._value})||it.push(d),yn(i),c&&Ve())}function yn(i){var a=i._listeners;i._listeners=[];for(var c=0,d=a.length;c<d;++c)ae(i,a[c]);var f=i._PSD;--f.ref||f.finalize(),pt===0&&(++pt,Ke(function(){--pt==0&&Oe()},[]))}function ae(i,a){if(i._state!==null){var c=i._state?a.onFulfilled:a.onRejected;if(c===null)return(i._state?a.resolve:a.reject)(i._value);++a.psd.ref,++pt,Ke(De,[c,i,a])}else i._listeners.push(a)}function De(i,a,c){try{var d,f=a._value;!a._state&&Ue.length&&(Ue=[]),d=Fe&&a._consoleTask?a._consoleTask.run(function(){return i(f)}):i(f),a._state||Ue.indexOf(f)!==-1||(function(p){for(var y=it.length;y;)if(it[--y]._value===p._value)return it.splice(y,1)})(a),c.resolve(d)}catch(p){c.reject(p)}finally{--pt==0&&Oe(),--c.psd.ref||c.psd.finalize()}}function we(){Dn(et,function(){Le()&&Ve()})}function Le(){var i=bt;return dt=bt=!1,i}function Ve(){var i,a,c;do for(;0<ot.length;)for(i=ot,ot=[],c=i.length,a=0;a<c;++a){var d=i[a];d[0].apply(null,d[1])}while(0<ot.length);dt=bt=!0}function Oe(){var i=it;it=[],i.forEach(function(d){d._PSD.onunhandled.call(null,d._value,d)});for(var a=Ct.slice(0),c=a.length;c;)a[--c]()}function Yt(i){return new ee(xt,!1,i)}function qe(i,a){var c=Z;return function(){var d=Le(),f=Z;try{return xn(c,!0),i.apply(this,arguments)}catch(p){a&&a(p)}finally{xn(f,!1),d&&Ve()}}}P(ee.prototype,{then:nn,_then:function(i,a){ae(this,new un(null,null,i,a,Z))},catch:function(i){if(arguments.length===1)return this.then(null,i);var a=i,c=arguments[1];return typeof a=="function"?this.then(null,function(d){return(d instanceof a?c:Yt)(d)}):this.then(null,function(d){return(d&&d.name===a?c:Yt)(d)})},finally:function(i){return this.then(function(a){return ee.resolve(i()).then(function(){return a})},function(a){return ee.resolve(i()).then(function(){return Yt(a)})})},timeout:function(i,a){var c=this;return i<1/0?new ee(function(d,f){var p=setTimeout(function(){return f(new se.Timeout(a))},i);c.then(d,f).finally(clearTimeout.bind(null,p))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&L(ee.prototype,Symbol.toStringTag,"Dexie.Promise"),et.env=no(),P(ee,{all:function(){var i=Xe.apply(null,arguments).map(Nr);return new ee(function(a,c){i.length===0&&a([]);var d=i.length;i.forEach(function(f,p){return ee.resolve(f).then(function(y){i[p]=y,--d||a(i)},c)})})},resolve:function(i){return i instanceof ee?i:i&&typeof i.then=="function"?new ee(function(a,c){i.then(a,c)}):new ee(xt,!0,i)},reject:Yt,race:function(){var i=Xe.apply(null,arguments).map(Nr);return new ee(function(a,c){i.map(function(d){return ee.resolve(d).then(a,c)})})},PSD:{get:function(){return Z},set:function(i){return Z=i}},totalEchoes:{get:function(){return Mr}},newPSD:wn,usePSD:Dn,scheduler:{get:function(){return Ke},set:function(i){Ke=i}},rejectionMapper:{get:function(){return he},set:function(i){he=i}},follow:function(i,a){return new ee(function(c,d){return wn(function(f,p){var y=Z;y.unhandleds=[],y.onunhandled=p,y.finalize=de(function(){var x,S=this;x=function(){S.unhandleds.length===0?f():p(S.unhandleds[0])},Ct.push(function A(){x(),Ct.splice(Ct.indexOf(A),1)}),++pt,Ke(function(){--pt==0&&Oe()},[])},y.finalize),i()},a,c,d)})}}),Ae&&(Ae.allSettled&&L(ee,"allSettled",function(){var i=Xe.apply(null,arguments).map(Nr);return new ee(function(a){i.length===0&&a([]);var c=i.length,d=new Array(c);i.forEach(function(f,p){return ee.resolve(f).then(function(y){return d[p]={status:"fulfilled",value:y}},function(y){return d[p]={status:"rejected",reason:y}}).then(function(){return--c||a(d)})})})}),Ae.any&&typeof AggregateError<"u"&&L(ee,"any",function(){var i=Xe.apply(null,arguments).map(Nr);return new ee(function(a,c){i.length===0&&c(new AggregateError([]));var d=i.length,f=new Array(d);i.forEach(function(p,y){return ee.resolve(p).then(function(x){return a(x)},function(x){f[y]=x,--d||c(new AggregateError(f))})})})}),Ae.withResolvers&&(ee.withResolvers=Ae.withResolvers));var mt={awaits:0,echoes:0,id:0},Vl=0,Lr=[],Br=0,Mr=0,Gl=0;function wn(i,a,c,d){var f=Z,p=Object.create(f);return p.parent=f,p.ref=0,p.global=!1,p.id=++Gl,et.env,p.env=Tt?{Promise:ee,PromiseProp:{value:ee,configurable:!0,writable:!0},all:ee.all,race:ee.race,allSettled:ee.allSettled,any:ee.any,resolve:ee.resolve,reject:ee.reject}:{},a&&h(p,a),++f.ref,p.finalize=function(){--this.parent.ref||this.parent.finalize()},d=Dn(p,i,c,d),p.ref===0&&p.finalize(),d}function Vn(){return mt.id||(mt.id=++Vl),++mt.awaits,mt.echoes+=st,mt.id}function vn(){return!!mt.awaits&&(--mt.awaits==0&&(mt.id=0),mt.echoes=mt.awaits*st,!0)}function Nr(i){return mt.echoes&&i&&i.constructor===Ae?(Vn(),i.then(function(a){return vn(),a},function(a){return vn(),at(a)})):i}function Yl(){var i=Lr[Lr.length-1];Lr.pop(),xn(i,!1)}function xn(i,a){var c,d=Z;(a?!mt.echoes||Br++&&i===Z:!Br||--Br&&i===Z)||queueMicrotask(a?function(f){++Mr,mt.echoes&&--mt.echoes!=0||(mt.echoes=mt.awaits=mt.id=0),Lr.push(Z),xn(f,!0)}.bind(null,i):Yl),i!==Z&&(Z=i,d===et&&(et.env=no()),Tt&&(c=et.env.Promise,a=i.env,(d.global||i.global)&&(Object.defineProperty(o,"Promise",a.PromiseProp),c.all=a.all,c.race=a.race,c.resolve=a.resolve,c.reject=a.reject,a.allSettled&&(c.allSettled=a.allSettled),a.any&&(c.any=a.any))))}function no(){var i=o.Promise;return Tt?{Promise:i,PromiseProp:Object.getOwnPropertyDescriptor(o,"Promise"),all:i.all,race:i.race,allSettled:i.allSettled,any:i.any,resolve:i.resolve,reject:i.reject}:{}}function Dn(i,a,c,d,f){var p=Z;try{return xn(i,!0),a(c,d,f)}finally{xn(p,!1)}}function ro(i,a,c,d){return typeof i!="function"?i:function(){var f=Z;c&&Vn(),xn(a,!0);try{return i.apply(this,arguments)}finally{xn(f,!1),d&&queueMicrotask(vn)}}}function Ls(i){Promise===Ae&&mt.echoes===0?Br===0?i():enqueueNativeMicroTask(i):setTimeout(i,0)}(""+zt).indexOf("[native code]")===-1&&(Vn=vn=fe);var at=ee.reject,Rn="￿",dn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",so="String expected.",Gn=[],Ur="__dbnames",Bs="readonly",Ms="readwrite";function On(i,a){return i?a?function(){return i.apply(this,arguments)&&a.apply(this,arguments)}:i:a}var io={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function qr(i){return typeof i!="string"||/\./.test(i)?function(a){return a}:function(a){return a[i]===void 0&&i in a&&delete(a=E(a))[i],a}}function oo(){throw se.Type()}function Pe(i,a){try{var c=ao(i),d=ao(a);if(c!==d)return c==="Array"?1:d==="Array"?-1:c==="binary"?1:d==="binary"?-1:c==="string"?1:d==="string"?-1:c==="Date"?1:d!=="Date"?NaN:-1;switch(c){case"number":case"Date":case"string":return a<i?1:i<a?-1:0;case"binary":return(function(f,p){for(var y=f.length,x=p.length,S=y<x?y:x,A=0;A<S;++A)if(f[A]!==p[A])return f[A]<p[A]?-1:1;return y===x?0:y<x?-1:1})(lo(i),lo(a));case"Array":return(function(f,p){for(var y=f.length,x=p.length,S=y<x?y:x,A=0;A<S;++A){var D=Pe(f[A],p[A]);if(D!==0)return D}return y===x?0:y<x?-1:1})(i,a)}}catch{}return NaN}function ao(i){var a=typeof i;return a!="object"?a:ArrayBuffer.isView(i)?"binary":(i=C(i),i==="ArrayBuffer"?"binary":i)}function lo(i){return i instanceof Uint8Array?i:ArrayBuffer.isView(i)?new Uint8Array(i.buffer,i.byteOffset,i.byteLength):new Uint8Array(i)}var co=(Ge.prototype._trans=function(i,a,c){var d=this._tx||Z.trans,f=this.name,p=Fe&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(i==="readonly"?"read":"write"," ").concat(this.name));function y(A,D,k){if(!k.schema[f])throw new se.NotFound("Table "+f+" not part of transaction");return a(k.idbtrans,k)}var x=Le();try{var S=d&&d.db._novip===this.db._novip?d===Z.trans?d._promise(i,y,c):wn(function(){return d._promise(i,y,c)},{trans:d,transless:Z.transless||Z}):(function A(D,k,O,_){if(D.idbdb&&(D._state.openComplete||Z.letThrough||D._vip)){var I=D._createTransaction(k,O,D._dbSchema);try{I.create(),D._state.PR1398_maxLoop=3}catch(R){return R.name===Qe.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return A(D,k,O,_)})):at(R)}return I._promise(k,function(R,T){return wn(function(){return Z.trans=I,_(R,T,I)})}).then(function(R){if(k==="readwrite")try{I.idbtrans.commit()}catch{}return k==="readonly"?R:I._completion.then(function(){return R})})}if(D._state.openComplete)return at(new se.DatabaseClosed(D._state.dbOpenError));if(!D._state.isBeingOpened){if(!D._state.autoOpen)return at(new se.DatabaseClosed);D.open().catch(fe)}return D._state.dbReadyPromise.then(function(){return A(D,k,O,_)})})(this.db,i,[this.name],y);return p&&(S._consoleTask=p,S=S.catch(function(A){return console.trace(A),at(A)})),S}finally{x&&Ve()}},Ge.prototype.get=function(i,a){var c=this;return i&&i.constructor===Object?this.where(i).first(a):i==null?at(new se.Type("Invalid argument to Table.get()")):this._trans("readonly",function(d){return c.core.get({trans:d,key:i}).then(function(f){return c.hook.reading.fire(f)})}).then(a)},Ge.prototype.where=function(i){if(typeof i=="string")return new this.db.WhereClause(this,i);if(u(i))return new this.db.WhereClause(this,"[".concat(i.join("+"),"]"));var a=l(i);if(a.length===1)return this.where(a[0]).equals(i[a[0]]);var c=this.schema.indexes.concat(this.schema.primKey).filter(function(x){if(x.compound&&a.every(function(A){return 0<=x.keyPath.indexOf(A)})){for(var S=0;S<a.length;++S)if(a.indexOf(x.keyPath[S])===-1)return!1;return!0}return!1}).sort(function(x,S){return x.keyPath.length-S.keyPath.length})[0];if(c&&this.db._maxKey!==Rn){var p=c.keyPath.slice(0,a.length);return this.where(p).equals(p.map(function(S){return i[S]}))}!c&&Fe&&console.warn("The query ".concat(JSON.stringify(i)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(a.join("+"),"]"));var d=this.schema.idxByName;function f(x,S){return Pe(x,S)===0}var y=a.reduce(function(k,S){var A=k[0],D=k[1],k=d[S],O=i[S];return[A||k,A||!k?On(D,k&&k.multi?function(_){return _=oe(_,S),u(_)&&_.some(function(I){return f(O,I)})}:function(_){return f(O,oe(_,S))}):D]},[null,null]),p=y[0],y=y[1];return p?this.where(p.name).equals(i[p.keyPath]).filter(y):c?this.filter(y):this.where(a).equals("")},Ge.prototype.filter=function(i){return this.toCollection().and(i)},Ge.prototype.count=function(i){return this.toCollection().count(i)},Ge.prototype.offset=function(i){return this.toCollection().offset(i)},Ge.prototype.limit=function(i){return this.toCollection().limit(i)},Ge.prototype.each=function(i){return this.toCollection().each(i)},Ge.prototype.toArray=function(i){return this.toCollection().toArray(i)},Ge.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ge.prototype.orderBy=function(i){return new this.db.Collection(new this.db.WhereClause(this,u(i)?"[".concat(i.join("+"),"]"):i))},Ge.prototype.reverse=function(){return this.toCollection().reverse()},Ge.prototype.mapToClass=function(i){var a,c=this.db,d=this.name;function f(){return a!==null&&a.apply(this,arguments)||this}(this.schema.mappedClass=i).prototype instanceof oo&&((function(S,A){if(typeof A!="function"&&A!==null)throw new TypeError("Class extends value "+String(A)+" is not a constructor or null");function D(){this.constructor=S}r(S,A),S.prototype=A===null?Object.create(A):(D.prototype=A.prototype,new D)})(f,a=i),Object.defineProperty(f.prototype,"db",{get:function(){return c},enumerable:!1,configurable:!0}),f.prototype.table=function(){return d},i=f);for(var p=new Set,y=i.prototype;y;y=g(y))Object.getOwnPropertyNames(y).forEach(function(S){return p.add(S)});function x(S){if(!S)return S;var A,D=Object.create(i.prototype);for(A in S)if(!p.has(A))try{D[A]=S[A]}catch{}return D}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=x,this.hook("reading",x),i},Ge.prototype.defineClass=function(){return this.mapToClass(function(i){h(this,i)})},Ge.prototype.add=function(i,a){var c=this,d=this.schema.primKey,f=d.auto,p=d.keyPath,y=i;return p&&f&&(y=qr(p)(i)),this._trans("readwrite",function(x){return c.core.mutate({trans:x,type:"add",keys:a!=null?[a]:null,values:[y]})}).then(function(x){return x.numFailures?ee.reject(x.failures[0]):x.lastResult}).then(function(x){if(p)try{be(i,p,x)}catch{}return x})},Ge.prototype.update=function(i,a){return typeof i!="object"||u(i)?this.where(":id").equals(i).modify(a):(i=oe(i,this.schema.primKey.keyPath),i===void 0?at(new se.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(i).modify(a))},Ge.prototype.put=function(i,a){var c=this,d=this.schema.primKey,f=d.auto,p=d.keyPath,y=i;return p&&f&&(y=qr(p)(i)),this._trans("readwrite",function(x){return c.core.mutate({trans:x,type:"put",values:[y],keys:a!=null?[a]:null})}).then(function(x){return x.numFailures?ee.reject(x.failures[0]):x.lastResult}).then(function(x){if(p)try{be(i,p,x)}catch{}return x})},Ge.prototype.delete=function(i){var a=this;return this._trans("readwrite",function(c){return a.core.mutate({trans:c,type:"delete",keys:[i]})}).then(function(c){return c.numFailures?ee.reject(c.failures[0]):void 0})},Ge.prototype.clear=function(){var i=this;return this._trans("readwrite",function(a){return i.core.mutate({trans:a,type:"deleteRange",range:io})}).then(function(a){return a.numFailures?ee.reject(a.failures[0]):void 0})},Ge.prototype.bulkGet=function(i){var a=this;return this._trans("readonly",function(c){return a.core.getMany({keys:i,trans:c}).then(function(d){return d.map(function(f){return a.hook.reading.fire(f)})})})},Ge.prototype.bulkAdd=function(i,a,c){var d=this,f=Array.isArray(a)?a:void 0,p=(c=c||(f?void 0:a))?c.allKeys:void 0;return this._trans("readwrite",function(y){var A=d.schema.primKey,x=A.auto,A=A.keyPath;if(A&&f)throw new se.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(f&&f.length!==i.length)throw new se.InvalidArgument("Arguments objects and keys must have the same length");var S=i.length,A=A&&x?i.map(qr(A)):i;return d.core.mutate({trans:y,type:"add",keys:f,values:A,wantResults:p}).then(function(I){var k=I.numFailures,O=I.results,_=I.lastResult,I=I.failures;if(k===0)return p?O:_;throw new Re("".concat(d.name,".bulkAdd(): ").concat(k," of ").concat(S," operations failed"),I)})})},Ge.prototype.bulkPut=function(i,a,c){var d=this,f=Array.isArray(a)?a:void 0,p=(c=c||(f?void 0:a))?c.allKeys:void 0;return this._trans("readwrite",function(y){var A=d.schema.primKey,x=A.auto,A=A.keyPath;if(A&&f)throw new se.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(f&&f.length!==i.length)throw new se.InvalidArgument("Arguments objects and keys must have the same length");var S=i.length,A=A&&x?i.map(qr(A)):i;return d.core.mutate({trans:y,type:"put",keys:f,values:A,wantResults:p}).then(function(I){var k=I.numFailures,O=I.results,_=I.lastResult,I=I.failures;if(k===0)return p?O:_;throw new Re("".concat(d.name,".bulkPut(): ").concat(k," of ").concat(S," operations failed"),I)})})},Ge.prototype.bulkUpdate=function(i){var a=this,c=this.core,d=i.map(function(y){return y.key}),f=i.map(function(y){return y.changes}),p=[];return this._trans("readwrite",function(y){return c.getMany({trans:y,keys:d,cache:"clone"}).then(function(x){var S=[],A=[];i.forEach(function(k,O){var _=k.key,I=k.changes,R=x[O];if(R){for(var T=0,z=Object.keys(I);T<z.length;T++){var B=z[T],M=I[B];if(B===a.schema.primKey.keyPath){if(Pe(M,_)!==0)throw new se.Constraint("Cannot update primary key in bulkUpdate()")}else be(R,B,M)}p.push(O),S.push(_),A.push(R)}});var D=S.length;return c.mutate({trans:y,type:"put",keys:S,values:A,updates:{keys:d,changeSpecs:f}}).then(function(k){var O=k.numFailures,_=k.failures;if(O===0)return D;for(var I=0,R=Object.keys(_);I<R.length;I++){var T,z=R[I],B=p[Number(z)];B!=null&&(T=_[z],delete _[z],_[B]=T)}throw new Re("".concat(a.name,".bulkUpdate(): ").concat(O," of ").concat(D," operations failed"),_)})})})},Ge.prototype.bulkDelete=function(i){var a=this,c=i.length;return this._trans("readwrite",function(d){return a.core.mutate({trans:d,type:"delete",keys:i})}).then(function(y){var f=y.numFailures,p=y.lastResult,y=y.failures;if(f===0)return p;throw new Re("".concat(a.name,".bulkDelete(): ").concat(f," of ").concat(c," operations failed"),y)})},Ge);function Ge(){}function ur(i){function a(y,x){if(x){for(var S=arguments.length,A=new Array(S-1);--S;)A[S-1]=arguments[S];return c[y].subscribe.apply(null,A),i}if(typeof y=="string")return c[y]}var c={};a.addEventType=p;for(var d=1,f=arguments.length;d<f;++d)p(arguments[d]);return a;function p(y,x,S){if(typeof y!="object"){var A;x=x||tt;var D={subscribers:[],fire:S=S||fe,subscribe:function(k){D.subscribers.indexOf(k)===-1&&(D.subscribers.push(k),D.fire=x(D.fire,k))},unsubscribe:function(k){D.subscribers=D.subscribers.filter(function(O){return O!==k}),D.fire=D.subscribers.reduce(x,S)}};return c[y]=a[y]=D}l(A=y).forEach(function(k){var O=A[k];if(u(O))p(k,A[k][0],A[k][1]);else{if(O!=="asap")throw new se.InvalidArgument("Invalid event config");var _=p(k,Ce,function(){for(var I=arguments.length,R=new Array(I);I--;)R[I]=arguments[I];_.subscribers.forEach(function(T){q(function(){T.apply(null,R)})})})}})}}function dr(i,a){return N(a).from({prototype:i}),a}function Yn(i,a){return!(i.filter||i.algorithm||i.or)&&(a?i.justLimit:!i.replayFilter)}function Ns(i,a){i.filter=On(i.filter,a)}function Us(i,a,c){var d=i.replayFilter;i.replayFilter=d?function(){return On(d(),a())}:a,i.justLimit=c&&!d}function Hr(i,a){if(i.isPrimKey)return a.primaryKey;var c=a.getIndexByKeyPath(i.index);if(!c)throw new se.Schema("KeyPath "+i.index+" on object store "+a.name+" is not indexed");return c}function uo(i,a,c){var d=Hr(i,a.schema);return a.openCursor({trans:c,values:!i.keysOnly,reverse:i.dir==="prev",unique:!!i.unique,query:{index:d,range:i.range}})}function Wr(i,a,c,d){var f=i.replayFilter?On(i.filter,i.replayFilter()):i.filter;if(i.or){var p={},y=function(x,S,A){var D,k;f&&!f(S,A,function(O){return S.stop(O)},function(O){return S.fail(O)})||((k=""+(D=S.primaryKey))=="[object ArrayBuffer]"&&(k=""+new Uint8Array(D)),w(p,k)||(p[k]=!0,a(x,S,A)))};return Promise.all([i.or._iterate(y,c),ho(uo(i,d,c),i.algorithm,y,!i.keysOnly&&i.valueMapper)])}return ho(uo(i,d,c),On(i.algorithm,f),a,!i.keysOnly&&i.valueMapper)}function ho(i,a,c,d){var f=qe(d?function(p,y,x){return c(d(p),y,x)}:c);return i.then(function(p){if(p)return p.start(function(){var y=function(){return p.continue()};a&&!a(p,function(x){return y=x},function(x){p.stop(x),y=fe},function(x){p.fail(x),y=fe})||f(p.value,p,function(x){return y=x}),y()})})}var hn=Symbol(),hr=(fo.prototype.execute=function(i){if(this.add!==void 0){var a=this.add;if(u(a))return n(n([],u(i)?i:[],!0),a).sort();if(typeof a=="number")return(Number(i)||0)+a;if(typeof a=="bigint")try{return BigInt(i)+a}catch{return BigInt(0)+a}throw new TypeError("Invalid term ".concat(a))}if(this.remove!==void 0){var c=this.remove;if(u(c))return u(i)?i.filter(function(d){return!c.includes(d)}).sort():[];if(typeof c=="number")return Number(i)-c;if(typeof c=="bigint")try{return BigInt(i)-c}catch{return BigInt(0)-c}throw new TypeError("Invalid subtrahend ".concat(c))}return a=(a=this.replacePrefix)===null||a===void 0?void 0:a[0],a&&typeof i=="string"&&i.startsWith(a)?this.replacePrefix[1]+i.substring(a.length):i},fo);function fo(i){Object.assign(this,i)}var Xl=(je.prototype._read=function(i,a){var c=this._ctx;return c.error?c.table._trans(null,at.bind(null,c.error)):c.table._trans("readonly",i).then(a)},je.prototype._write=function(i){var a=this._ctx;return a.error?a.table._trans(null,at.bind(null,a.error)):a.table._trans("readwrite",i,"locked")},je.prototype._addAlgorithm=function(i){var a=this._ctx;a.algorithm=On(a.algorithm,i)},je.prototype._iterate=function(i,a){return Wr(this._ctx,i,a,this._ctx.table.core)},je.prototype.clone=function(i){var a=Object.create(this.constructor.prototype),c=Object.create(this._ctx);return i&&h(c,i),a._ctx=c,a},je.prototype.raw=function(){return this._ctx.valueMapper=null,this},je.prototype.each=function(i){var a=this._ctx;return this._read(function(c){return Wr(a,i,c,a.table.core)})},je.prototype.count=function(i){var a=this;return this._read(function(c){var d=a._ctx,f=d.table.core;if(Yn(d,!0))return f.count({trans:c,query:{index:Hr(d,f.schema),range:d.range}}).then(function(y){return Math.min(y,d.limit)});var p=0;return Wr(d,function(){return++p,!1},c,f).then(function(){return p})}).then(i)},je.prototype.sortBy=function(i,a){var c=i.split(".").reverse(),d=c[0],f=c.length-1;function p(S,A){return A?p(S[c[A]],A-1):S[d]}var y=this._ctx.dir==="next"?1:-1;function x(S,A){return Pe(p(S,f),p(A,f))*y}return this.toArray(function(S){return S.sort(x)}).then(a)},je.prototype.toArray=function(i){var a=this;return this._read(function(c){var d=a._ctx;if(d.dir==="next"&&Yn(d,!0)&&0<d.limit){var f=d.valueMapper,p=Hr(d,d.table.core.schema);return d.table.core.query({trans:c,limit:d.limit,values:!0,query:{index:p,range:d.range}}).then(function(x){return x=x.result,f?x.map(f):x})}var y=[];return Wr(d,function(x){return y.push(x)},c,d.table.core).then(function(){return y})},i)},je.prototype.offset=function(i){var a=this._ctx;return i<=0||(a.offset+=i,Yn(a)?Us(a,function(){var c=i;return function(d,f){return c===0||(c===1?--c:f(function(){d.advance(c),c=0}),!1)}}):Us(a,function(){var c=i;return function(){return--c<0}})),this},je.prototype.limit=function(i){return this._ctx.limit=Math.min(this._ctx.limit,i),Us(this._ctx,function(){var a=i;return function(c,d,f){return--a<=0&&d(f),0<=a}},!0),this},je.prototype.until=function(i,a){return Ns(this._ctx,function(c,d,f){return!i(c.value)||(d(f),a)}),this},je.prototype.first=function(i){return this.limit(1).toArray(function(a){return a[0]}).then(i)},je.prototype.last=function(i){return this.reverse().first(i)},je.prototype.filter=function(i){var a;return Ns(this._ctx,function(c){return i(c.value)}),(a=this._ctx).isMatch=On(a.isMatch,i),this},je.prototype.and=function(i){return this.filter(i)},je.prototype.or=function(i){return new this.db.WhereClause(this._ctx.table,i,this)},je.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},je.prototype.desc=function(){return this.reverse()},je.prototype.eachKey=function(i){var a=this._ctx;return a.keysOnly=!a.isMatch,this.each(function(c,d){i(d.key,d)})},je.prototype.eachUniqueKey=function(i){return this._ctx.unique="unique",this.eachKey(i)},je.prototype.eachPrimaryKey=function(i){var a=this._ctx;return a.keysOnly=!a.isMatch,this.each(function(c,d){i(d.primaryKey,d)})},je.prototype.keys=function(i){var a=this._ctx;a.keysOnly=!a.isMatch;var c=[];return this.each(function(d,f){c.push(f.key)}).then(function(){return c}).then(i)},je.prototype.primaryKeys=function(i){var a=this._ctx;if(a.dir==="next"&&Yn(a,!0)&&0<a.limit)return this._read(function(d){var f=Hr(a,a.table.core.schema);return a.table.core.query({trans:d,values:!1,limit:a.limit,query:{index:f,range:a.range}})}).then(function(d){return d.result}).then(i);a.keysOnly=!a.isMatch;var c=[];return this.each(function(d,f){c.push(f.primaryKey)}).then(function(){return c}).then(i)},je.prototype.uniqueKeys=function(i){return this._ctx.unique="unique",this.keys(i)},je.prototype.firstKey=function(i){return this.limit(1).keys(function(a){return a[0]}).then(i)},je.prototype.lastKey=function(i){return this.reverse().firstKey(i)},je.prototype.distinct=function(){var i=this._ctx,i=i.index&&i.table.schema.idxByName[i.index];if(!i||!i.multi)return this;var a={};return Ns(this._ctx,function(f){var d=f.primaryKey.toString(),f=w(a,d);return a[d]=!0,!f}),this},je.prototype.modify=function(i){var a=this,c=this._ctx;return this._write(function(d){var f,p,y;y=typeof i=="function"?i:(f=l(i),p=f.length,function(T){for(var z=!1,B=0;B<p;++B){var M=f[B],H=i[M],G=oe(T,M);H instanceof hr?(be(T,M,H.execute(G)),z=!0):G!==H&&(be(T,M,H),z=!0)}return z});var x=c.table.core,k=x.schema.primaryKey,S=k.outbound,A=k.extractKey,D=200,k=a.db._options.modifyChunkSize;k&&(D=typeof k=="object"?k[x.name]||k["*"]||200:k);function O(T,M){var B=M.failures,M=M.numFailures;I+=T-M;for(var H=0,G=l(B);H<G.length;H++){var ne=G[H];_.push(B[ne])}}var _=[],I=0,R=[];return a.clone().primaryKeys().then(function(T){function z(M){var H=Math.min(D,T.length-M);return x.getMany({trans:d,keys:T.slice(M,M+H),cache:"immutable"}).then(function(G){for(var ne=[],Y=[],J=S?[]:null,ie=[],te=0;te<H;++te){var le=G[te],xe={value:E(le),primKey:T[M+te]};y.call(xe,xe.value,xe)!==!1&&(xe.value==null?ie.push(T[M+te]):S||Pe(A(le),A(xe.value))===0?(Y.push(xe.value),S&&J.push(T[M+te])):(ie.push(T[M+te]),ne.push(xe.value)))}return Promise.resolve(0<ne.length&&x.mutate({trans:d,type:"add",values:ne}).then(function(Ee){for(var Se in Ee.failures)ie.splice(parseInt(Se),1);O(ne.length,Ee)})).then(function(){return(0<Y.length||B&&typeof i=="object")&&x.mutate({trans:d,type:"put",keys:J,values:Y,criteria:B,changeSpec:typeof i!="function"&&i,isAdditionalChunk:0<M}).then(function(Ee){return O(Y.length,Ee)})}).then(function(){return(0<ie.length||B&&i===qs)&&x.mutate({trans:d,type:"delete",keys:ie,criteria:B,isAdditionalChunk:0<M}).then(function(Ee){return O(ie.length,Ee)})}).then(function(){return T.length>M+H&&z(M+D)})})}var B=Yn(c)&&c.limit===1/0&&(typeof i!="function"||i===qs)&&{index:c.index,range:c.range};return z(0).then(function(){if(0<_.length)throw new _e("Error modifying one or more objects",_,I,R);return T.length})})})},je.prototype.delete=function(){var i=this._ctx,a=i.range;return Yn(i)&&(i.isPrimKey||a.type===3)?this._write(function(c){var d=i.table.core.schema.primaryKey,f=a;return i.table.core.count({trans:c,query:{index:d,range:f}}).then(function(p){return i.table.core.mutate({trans:c,type:"deleteRange",range:f}).then(function(y){var x=y.failures;if(y.lastResult,y.results,y=y.numFailures,y)throw new _e("Could not delete some values",Object.keys(x).map(function(S){return x[S]}),p-y);return p-y})})}):this.modify(qs)},je);function je(){}var qs=function(i,a){return a.value=null};function Ql(i,a){return i<a?-1:i===a?0:1}function Jl(i,a){return a<i?-1:i===a?0:1}function Pt(i,a,c){return i=i instanceof mo?new i.Collection(i):i,i._ctx.error=new(c||TypeError)(a),i}function Xn(i){return new i.Collection(i,function(){return po("")}).limit(0)}function Kr(i,a,c,d){var f,p,y,x,S,A,D,k=c.length;if(!c.every(function(I){return typeof I=="string"}))return Pt(i,so);function O(I){f=I==="next"?function(T){return T.toUpperCase()}:function(T){return T.toLowerCase()},p=I==="next"?function(T){return T.toLowerCase()}:function(T){return T.toUpperCase()},y=I==="next"?Ql:Jl;var R=c.map(function(T){return{lower:p(T),upper:f(T)}}).sort(function(T,z){return y(T.lower,z.lower)});x=R.map(function(T){return T.upper}),S=R.map(function(T){return T.lower}),D=(A=I)==="next"?"":d}O("next"),i=new i.Collection(i,function(){return $n(x[0],S[k-1]+d)}),i._ondirectionchange=function(I){O(I)};var _=0;return i._addAlgorithm(function(I,R,T){var z=I.key;if(typeof z!="string")return!1;var B=p(z);if(a(B,S,_))return!0;for(var M=null,H=_;H<k;++H){var G=(function(ne,Y,J,ie,te,le){for(var xe=Math.min(ne.length,ie.length),Ee=-1,Se=0;Se<xe;++Se){var It=Y[Se];if(It!==ie[Se])return te(ne[Se],J[Se])<0?ne.substr(0,Se)+J[Se]+J.substr(Se+1):te(ne[Se],ie[Se])<0?ne.substr(0,Se)+ie[Se]+J.substr(Se+1):0<=Ee?ne.substr(0,Ee)+Y[Ee]+J.substr(Ee+1):null;te(ne[Se],It)<0&&(Ee=Se)}return xe<ie.length&&le==="next"?ne+J.substr(ne.length):xe<ne.length&&le==="prev"?ne.substr(0,J.length):Ee<0?null:ne.substr(0,Ee)+ie[Ee]+J.substr(Ee+1)})(z,B,x[H],S[H],y,A);G===null&&M===null?_=H+1:(M===null||0<y(M,G))&&(M=G)}return R(M!==null?function(){I.continue(M+D)}:T),!1}),i}function $n(i,a,c,d){return{type:2,lower:i,upper:a,lowerOpen:c,upperOpen:d}}function po(i){return{type:1,lower:i,upper:i}}var mo=(Object.defineProperty(gt.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),gt.prototype.between=function(i,a,c,d){c=c!==!1,d=d===!0;try{return 0<this._cmp(i,a)||this._cmp(i,a)===0&&(c||d)&&(!c||!d)?Xn(this):new this.Collection(this,function(){return $n(i,a,!c,!d)})}catch{return Pt(this,dn)}},gt.prototype.equals=function(i){return i==null?Pt(this,dn):new this.Collection(this,function(){return po(i)})},gt.prototype.above=function(i){return i==null?Pt(this,dn):new this.Collection(this,function(){return $n(i,void 0,!0)})},gt.prototype.aboveOrEqual=function(i){return i==null?Pt(this,dn):new this.Collection(this,function(){return $n(i,void 0,!1)})},gt.prototype.below=function(i){return i==null?Pt(this,dn):new this.Collection(this,function(){return $n(void 0,i,!1,!0)})},gt.prototype.belowOrEqual=function(i){return i==null?Pt(this,dn):new this.Collection(this,function(){return $n(void 0,i)})},gt.prototype.startsWith=function(i){return typeof i!="string"?Pt(this,so):this.between(i,i+Rn,!0,!0)},gt.prototype.startsWithIgnoreCase=function(i){return i===""?this.startsWith(i):Kr(this,function(a,c){return a.indexOf(c[0])===0},[i],Rn)},gt.prototype.equalsIgnoreCase=function(i){return Kr(this,function(a,c){return a===c[0]},[i],"")},gt.prototype.anyOfIgnoreCase=function(){var i=Xe.apply(X,arguments);return i.length===0?Xn(this):Kr(this,function(a,c){return c.indexOf(a)!==-1},i,"")},gt.prototype.startsWithAnyOfIgnoreCase=function(){var i=Xe.apply(X,arguments);return i.length===0?Xn(this):Kr(this,function(a,c){return c.some(function(d){return a.indexOf(d)===0})},i,Rn)},gt.prototype.anyOf=function(){var i=this,a=Xe.apply(X,arguments),c=this._cmp;try{a.sort(c)}catch{return Pt(this,dn)}if(a.length===0)return Xn(this);var d=new this.Collection(this,function(){return $n(a[0],a[a.length-1])});d._ondirectionchange=function(p){c=p==="next"?i._ascending:i._descending,a.sort(c)};var f=0;return d._addAlgorithm(function(p,y,x){for(var S=p.key;0<c(S,a[f]);)if(++f===a.length)return y(x),!1;return c(S,a[f])===0||(y(function(){p.continue(a[f])}),!1)}),d},gt.prototype.notEqual=function(i){return this.inAnyRange([[-1/0,i],[i,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},gt.prototype.noneOf=function(){var i=Xe.apply(X,arguments);if(i.length===0)return new this.Collection(this);try{i.sort(this._ascending)}catch{return Pt(this,dn)}var a=i.reduce(function(c,d){return c?c.concat([[c[c.length-1][1],d]]):[[-1/0,d]]},null);return a.push([i[i.length-1],this.db._maxKey]),this.inAnyRange(a,{includeLowers:!1,includeUppers:!1})},gt.prototype.inAnyRange=function(z,a){var c=this,d=this._cmp,f=this._ascending,p=this._descending,y=this._min,x=this._max;if(z.length===0)return Xn(this);if(!z.every(function(B){return B[0]!==void 0&&B[1]!==void 0&&f(B[0],B[1])<=0}))return Pt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",se.InvalidArgument);var S=!a||a.includeLowers!==!1,A=a&&a.includeUppers===!0,D,k=f;function O(B,M){return k(B[0],M[0])}try{(D=z.reduce(function(B,M){for(var H=0,G=B.length;H<G;++H){var ne=B[H];if(d(M[0],ne[1])<0&&0<d(M[1],ne[0])){ne[0]=y(ne[0],M[0]),ne[1]=x(ne[1],M[1]);break}}return H===G&&B.push(M),B},[])).sort(O)}catch{return Pt(this,dn)}var _=0,I=A?function(B){return 0<f(B,D[_][1])}:function(B){return 0<=f(B,D[_][1])},R=S?function(B){return 0<p(B,D[_][0])}:function(B){return 0<=p(B,D[_][0])},T=I,z=new this.Collection(this,function(){return $n(D[0][0],D[D.length-1][1],!S,!A)});return z._ondirectionchange=function(B){k=B==="next"?(T=I,f):(T=R,p),D.sort(O)},z._addAlgorithm(function(B,M,H){for(var G,ne=B.key;T(ne);)if(++_===D.length)return M(H),!1;return!I(G=ne)&&!R(G)||(c._cmp(ne,D[_][1])===0||c._cmp(ne,D[_][0])===0||M(function(){k===f?B.continue(D[_][0]):B.continue(D[_][1])}),!1)}),z},gt.prototype.startsWithAnyOf=function(){var i=Xe.apply(X,arguments);return i.every(function(a){return typeof a=="string"})?i.length===0?Xn(this):this.inAnyRange(i.map(function(a){return[a,a+Rn]})):Pt(this,"startsWithAnyOf() only works with strings")},gt);function gt(){}function rn(i){return qe(function(a){return fr(a),i(a.target.error),!1})}function fr(i){i.stopPropagation&&i.stopPropagation(),i.preventDefault&&i.preventDefault()}var pr="storagemutated",Hs="x-storagemutated-1",kn=ur(null,pr),Zl=(sn.prototype._lock=function(){return Q(!Z.global),++this._reculock,this._reculock!==1||Z.global||(Z.lockOwnerFor=this),this},sn.prototype._unlock=function(){if(Q(!Z.global),--this._reculock==0)for(Z.global||(Z.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var i=this._blockedFuncs.shift();try{Dn(i[1],i[0])}catch{}}return this},sn.prototype._locked=function(){return this._reculock&&Z.lockOwnerFor!==this},sn.prototype.create=function(i){var a=this;if(!this.mode)return this;var c=this.db.idbdb,d=this.db._state.dbOpenError;if(Q(!this.idbtrans),!i&&!c)switch(d&&d.name){case"DatabaseClosedError":throw new se.DatabaseClosed(d);case"MissingAPIError":throw new se.MissingAPI(d.message,d);default:throw new se.OpenFailed(d)}if(!this.active)throw new se.TransactionInactive;return Q(this._completion._state===null),(i=this.idbtrans=i||(this.db.core||c).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=qe(function(f){fr(f),a._reject(i.error)}),i.onabort=qe(function(f){fr(f),a.active&&a._reject(new se.Abort(i.error)),a.active=!1,a.on("abort").fire(f)}),i.oncomplete=qe(function(){a.active=!1,a._resolve(),"mutatedParts"in i&&kn.storagemutated.fire(i.mutatedParts)}),this},sn.prototype._promise=function(i,a,c){var d=this;if(i==="readwrite"&&this.mode!=="readwrite")return at(new se.ReadOnly("Transaction is readonly"));if(!this.active)return at(new se.TransactionInactive);if(this._locked())return new ee(function(p,y){d._blockedFuncs.push([function(){d._promise(i,a,c).then(p,y)},Z])});if(c)return wn(function(){var p=new ee(function(y,x){d._lock();var S=a(y,x,d);S&&S.then&&S.then(y,x)});return p.finally(function(){return d._unlock()}),p._lib=!0,p});var f=new ee(function(p,y){var x=a(p,y,d);x&&x.then&&x.then(p,y)});return f._lib=!0,f},sn.prototype._root=function(){return this.parent?this.parent._root():this},sn.prototype.waitFor=function(i){var a,c=this._root(),d=ee.resolve(i);c._waitingFor?c._waitingFor=c._waitingFor.then(function(){return d}):(c._waitingFor=d,c._waitingQueue=[],a=c.idbtrans.objectStore(c.storeNames[0]),(function p(){for(++c._spinCount;c._waitingQueue.length;)c._waitingQueue.shift()();c._waitingFor&&(a.get(-1/0).onsuccess=p)})());var f=c._waitingFor;return new ee(function(p,y){d.then(function(x){return c._waitingQueue.push(qe(p.bind(null,x)))},function(x){return c._waitingQueue.push(qe(y.bind(null,x)))}).finally(function(){c._waitingFor===f&&(c._waitingFor=null)})})},sn.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new se.Abort))},sn.prototype.table=function(i){var a=this._memoizedTables||(this._memoizedTables={});if(w(a,i))return a[i];var c=this.schema[i];if(!c)throw new se.NotFound("Table "+i+" not part of transaction");return c=new this.db.Table(i,c,this),c.core=this.db.core.table(i),a[i]=c},sn);function sn(){}function Ws(i,a,c,d,f,p,y){return{name:i,keyPath:a,unique:c,multi:d,auto:f,compound:p,src:(c&&!y?"&":"")+(d?"*":"")+(f?"++":"")+go(a)}}function go(i){return typeof i=="string"?i:i?"["+[].join.call(i,"+")+"]":""}function Ks(i,a,c){return{name:i,primKey:a,indexes:c,mappedClass:null,idxByName:(d=function(f){return[f.name,f]},c.reduce(function(f,p,y){return y=d(p,y),y&&(f[y[0]]=y[1]),f},{}))};var d}var mr=function(i){try{return i.only([[]]),mr=function(){return[[]]},[[]]}catch{return mr=function(){return Rn},Rn}};function Vs(i){return i==null?function(){}:typeof i=="string"?(a=i).split(".").length===1?function(c){return c[a]}:function(c){return oe(c,a)}:function(c){return oe(c,i)};var a}function bo(i){return[].slice.call(i)}var ec=0;function gr(i){return i==null?":id":typeof i=="string"?i:"[".concat(i.join("+"),"]")}function tc(i,a,S){function d(T){if(T.type===3)return null;if(T.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var _=T.lower,I=T.upper,R=T.lowerOpen,T=T.upperOpen;return _===void 0?I===void 0?null:a.upperBound(I,!!T):I===void 0?a.lowerBound(_,!!R):a.bound(_,I,!!R,!!T)}function f(O){var _,I=O.name;return{name:I,schema:O,mutate:function(R){var T=R.trans,z=R.type,B=R.keys,M=R.values,H=R.range;return new Promise(function(G,ne){G=qe(G);var Y=T.objectStore(I),J=Y.keyPath==null,ie=z==="put"||z==="add";if(!ie&&z!=="delete"&&z!=="deleteRange")throw new Error("Invalid operation type: "+z);var te,le=(B||M||{length:1}).length;if(B&&M&&B.length!==M.length)throw new Error("Given keys array must have same length as given values array.");if(le===0)return G({numFailures:0,failures:{},results:[],lastResult:void 0});function xe($t){++It,fr($t)}var Ee=[],Se=[],It=0;if(z==="deleteRange"){if(H.type===4)return G({numFailures:It,failures:Se,results:[],lastResult:void 0});H.type===3?Ee.push(te=Y.clear()):Ee.push(te=Y.delete(d(H)))}else{var J=ie?J?[M,B]:[M,null]:[B,null],ve=J[0],wt=J[1];if(ie)for(var vt=0;vt<le;++vt)Ee.push(te=wt&&wt[vt]!==void 0?Y[z](ve[vt],wt[vt]):Y[z](ve[vt])),te.onerror=xe;else for(vt=0;vt<le;++vt)Ee.push(te=Y[z](ve[vt])),te.onerror=xe}function is($t){$t=$t.target.result,Ee.forEach(function(zn,di){return zn.error!=null&&(Se[di]=zn.error)}),G({numFailures:It,failures:Se,results:z==="delete"?B:Ee.map(function(zn){return zn.result}),lastResult:$t})}te.onerror=function($t){xe($t),is($t)},te.onsuccess=is})},getMany:function(R){var T=R.trans,z=R.keys;return new Promise(function(B,M){B=qe(B);for(var H,G=T.objectStore(I),ne=z.length,Y=new Array(ne),J=0,ie=0,te=function(Ee){Ee=Ee.target,Y[Ee._pos]=Ee.result,++ie===J&&B(Y)},le=rn(M),xe=0;xe<ne;++xe)z[xe]!=null&&((H=G.get(z[xe]))._pos=xe,H.onsuccess=te,H.onerror=le,++J);J===0&&B(Y)})},get:function(R){var T=R.trans,z=R.key;return new Promise(function(B,M){B=qe(B);var H=T.objectStore(I).get(z);H.onsuccess=function(G){return B(G.target.result)},H.onerror=rn(M)})},query:(_=A,function(R){return new Promise(function(T,z){T=qe(T);var B,M,H,J=R.trans,G=R.values,ne=R.limit,te=R.query,Y=ne===1/0?void 0:ne,ie=te.index,te=te.range,J=J.objectStore(I),ie=ie.isPrimaryKey?J:J.index(ie.name),te=d(te);if(ne===0)return T({result:[]});_?((Y=G?ie.getAll(te,Y):ie.getAllKeys(te,Y)).onsuccess=function(le){return T({result:le.target.result})},Y.onerror=rn(z)):(B=0,M=!G&&"openKeyCursor"in ie?ie.openKeyCursor(te):ie.openCursor(te),H=[],M.onsuccess=function(le){var xe=M.result;return xe?(H.push(G?xe.value:xe.primaryKey),++B===ne?T({result:H}):void xe.continue()):T({result:H})},M.onerror=rn(z))})}),openCursor:function(R){var T=R.trans,z=R.values,B=R.query,M=R.reverse,H=R.unique;return new Promise(function(G,ne){G=qe(G);var ie=B.index,Y=B.range,J=T.objectStore(I),J=ie.isPrimaryKey?J:J.index(ie.name),ie=M?H?"prevunique":"prev":H?"nextunique":"next",te=!z&&"openKeyCursor"in J?J.openKeyCursor(d(Y),ie):J.openCursor(d(Y),ie);te.onerror=rn(ne),te.onsuccess=qe(function(le){var xe,Ee,Se,It,ve=te.result;ve?(ve.___id=++ec,ve.done=!1,xe=ve.continue.bind(ve),Ee=(Ee=ve.continuePrimaryKey)&&Ee.bind(ve),Se=ve.advance.bind(ve),It=function(){throw new Error("Cursor not stopped")},ve.trans=T,ve.stop=ve.continue=ve.continuePrimaryKey=ve.advance=function(){throw new Error("Cursor not started")},ve.fail=qe(ne),ve.next=function(){var wt=this,vt=1;return this.start(function(){return vt--?wt.continue():wt.stop()}).then(function(){return wt})},ve.start=function(wt){function vt(){if(te.result)try{wt()}catch($t){ve.fail($t)}else ve.done=!0,ve.start=function(){throw new Error("Cursor behind last entry")},ve.stop()}var is=new Promise(function($t,zn){$t=qe($t),te.onerror=rn(zn),ve.fail=zn,ve.stop=function(di){ve.stop=ve.continue=ve.continuePrimaryKey=ve.advance=It,$t(di)}});return te.onsuccess=qe(function($t){te.onsuccess=vt,vt()}),ve.continue=xe,ve.continuePrimaryKey=Ee,ve.advance=Se,vt(),is},G(ve)):G(null)},ne)})},count:function(R){var T=R.query,z=R.trans,B=T.index,M=T.range;return new Promise(function(H,G){var ne=z.objectStore(I),Y=B.isPrimaryKey?ne:ne.index(B.name),ne=d(M),Y=ne?Y.count(ne):Y.count();Y.onsuccess=qe(function(J){return H(J.target.result)}),Y.onerror=rn(G)})}}}var p,y,x,D=(y=S,x=bo((p=i).objectStoreNames),{schema:{name:p.name,tables:x.map(function(O){return y.objectStore(O)}).map(function(O){var _=O.keyPath,T=O.autoIncrement,I=u(_),R={},T={name:O.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:_==null,compound:I,keyPath:_,autoIncrement:T,unique:!0,extractKey:Vs(_)},indexes:bo(O.indexNames).map(function(z){return O.index(z)}).map(function(H){var B=H.name,M=H.unique,G=H.multiEntry,H=H.keyPath,G={name:B,compound:u(H),keyPath:H,unique:M,multiEntry:G,extractKey:Vs(H)};return R[gr(H)]=G}),getIndexByKeyPath:function(z){return R[gr(z)]}};return R[":id"]=T.primaryKey,_!=null&&(R[gr(_)]=T.primaryKey),T})},hasGetAll:0<x.length&&"getAll"in y.objectStore(x[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),S=D.schema,A=D.hasGetAll,D=S.tables.map(f),k={};return D.forEach(function(O){return k[O.name]=O}),{stack:"dbcore",transaction:i.transaction.bind(i),table:function(O){if(!k[O])throw new Error("Table '".concat(O,"' not found"));return k[O]},MIN_KEY:-1/0,MAX_KEY:mr(a),schema:S}}function nc(i,a,c,d){var f=c.IDBKeyRange;return c.indexedDB,{dbcore:(d=tc(a,f,d),i.dbcore.reduce(function(p,y){return y=y.create,s(s({},p),y(p))},d))}}function Vr(i,d){var c=d.db,d=nc(i._middlewares,c,i._deps,d);i.core=d.dbcore,i.tables.forEach(function(f){var p=f.name;i.core.schema.tables.some(function(y){return y.name===p})&&(f.core=i.core.table(p),i[p]instanceof i.Table&&(i[p].core=f.core))})}function Gr(i,a,c,d){c.forEach(function(f){var p=d[f];a.forEach(function(y){var x=(function S(A,D){return U(A,D)||(A=g(A))&&S(A,D)})(y,f);(!x||"value"in x&&x.value===void 0)&&(y===i.Transaction.prototype||y instanceof i.Transaction?L(y,f,{get:function(){return this.table(f)},set:function(S){W(this,f,{value:S,writable:!0,configurable:!0,enumerable:!0})}}):y[f]=new i.Table(f,p))})})}function Gs(i,a){a.forEach(function(c){for(var d in c)c[d]instanceof i.Table&&delete c[d]})}function rc(i,a){return i._cfg.version-a._cfg.version}function sc(i,a,c,d){var f=i._dbSchema;c.objectStoreNames.contains("$meta")&&!f.$meta&&(f.$meta=Ks("$meta",wo("")[0],[]),i._storeNames.push("$meta"));var p=i._createTransaction("readwrite",i._storeNames,f);p.create(c),p._completion.catch(d);var y=p._reject.bind(p),x=Z.transless||Z;wn(function(){return Z.trans=p,Z.transless=x,a!==0?(Vr(i,c),A=a,((S=p).storeNames.includes("$meta")?S.table("$meta").get("version").then(function(D){return D??A}):ee.resolve(A)).then(function(D){return O=D,_=p,I=c,R=[],D=(k=i)._versions,T=k._dbSchema=Xr(0,k.idbdb,I),(D=D.filter(function(z){return z._cfg.version>=O})).length!==0?(D.forEach(function(z){R.push(function(){var B=T,M=z._cfg.dbschema;Qr(k,B,I),Qr(k,M,I),T=k._dbSchema=M;var H=Ys(B,M);H.add.forEach(function(ie){Xs(I,ie[0],ie[1].primKey,ie[1].indexes)}),H.change.forEach(function(ie){if(ie.recreate)throw new se.Upgrade("Not yet support for changing primary key");var te=I.objectStore(ie.name);ie.add.forEach(function(le){return Yr(te,le)}),ie.change.forEach(function(le){te.deleteIndex(le.name),Yr(te,le)}),ie.del.forEach(function(le){return te.deleteIndex(le)})});var G=z._cfg.contentUpgrade;if(G&&z._cfg.version>O){Vr(k,I),_._memoizedTables={};var ne=$e(M);H.del.forEach(function(ie){ne[ie]=B[ie]}),Gs(k,[k.Transaction.prototype]),Gr(k,[k.Transaction.prototype],l(ne),ne),_.schema=ne;var Y,J=ct(G);return J&&Vn(),H=ee.follow(function(){var ie;(Y=G(_))&&J&&(ie=vn.bind(null,null),Y.then(ie,ie))}),Y&&typeof Y.then=="function"?ee.resolve(Y):H.then(function(){return Y})}}),R.push(function(B){var M,H,G=z._cfg.dbschema;M=G,H=B,[].slice.call(H.db.objectStoreNames).forEach(function(ne){return M[ne]==null&&H.db.deleteObjectStore(ne)}),Gs(k,[k.Transaction.prototype]),Gr(k,[k.Transaction.prototype],k._storeNames,k._dbSchema),_.schema=k._dbSchema}),R.push(function(B){k.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(k.idbdb.version/10)===z._cfg.version?(k.idbdb.deleteObjectStore("$meta"),delete k._dbSchema.$meta,k._storeNames=k._storeNames.filter(function(M){return M!=="$meta"})):B.objectStore("$meta").put(z._cfg.version,"version"))})}),(function z(){return R.length?ee.resolve(R.shift()(_.idbtrans)).then(z):ee.resolve()})().then(function(){yo(T,I)})):ee.resolve();var k,O,_,I,R,T}).catch(y)):(l(f).forEach(function(D){Xs(c,D,f[D].primKey,f[D].indexes)}),Vr(i,c),void ee.follow(function(){return i.on.populate.fire(p)}).catch(y));var S,A})}function ic(i,a){yo(i._dbSchema,a),a.db.version%10!=0||a.objectStoreNames.contains("$meta")||a.db.createObjectStore("$meta").add(Math.ceil(a.db.version/10-1),"version");var c=Xr(0,i.idbdb,a);Qr(i,i._dbSchema,a);for(var d=0,f=Ys(c,i._dbSchema).change;d<f.length;d++){var p=(function(y){if(y.change.length||y.recreate)return console.warn("Unable to patch indexes of table ".concat(y.name," because it has changes on the type of index or primary key.")),{value:void 0};var x=a.objectStore(y.name);y.add.forEach(function(S){Fe&&console.debug("Dexie upgrade patch: Creating missing index ".concat(y.name,".").concat(S.src)),Yr(x,S)})})(f[d]);if(typeof p=="object")return p.value}}function Ys(i,a){var c,d={del:[],add:[],change:[]};for(c in i)a[c]||d.del.push(c);for(c in a){var f=i[c],p=a[c];if(f){var y={name:c,def:p,recreate:!1,del:[],add:[],change:[]};if(""+(f.primKey.keyPath||"")!=""+(p.primKey.keyPath||"")||f.primKey.auto!==p.primKey.auto)y.recreate=!0,d.change.push(y);else{var x=f.idxByName,S=p.idxByName,A=void 0;for(A in x)S[A]||y.del.push(A);for(A in S){var D=x[A],k=S[A];D?D.src!==k.src&&y.change.push(k):y.add.push(k)}(0<y.del.length||0<y.add.length||0<y.change.length)&&d.change.push(y)}}else d.add.push([c,p])}return d}function Xs(i,a,c,d){var f=i.db.createObjectStore(a,c.keyPath?{keyPath:c.keyPath,autoIncrement:c.auto}:{autoIncrement:c.auto});return d.forEach(function(p){return Yr(f,p)}),f}function yo(i,a){l(i).forEach(function(c){a.db.objectStoreNames.contains(c)||(Fe&&console.debug("Dexie: Creating missing table",c),Xs(a,c,i[c].primKey,i[c].indexes))})}function Yr(i,a){i.createIndex(a.name,a.keyPath,{unique:a.unique,multiEntry:a.multi})}function Xr(i,a,c){var d={};return ce(a.objectStoreNames,0).forEach(function(f){for(var p=c.objectStore(f),y=Ws(go(A=p.keyPath),A||"",!0,!1,!!p.autoIncrement,A&&typeof A!="string",!0),x=[],S=0;S<p.indexNames.length;++S){var D=p.index(p.indexNames[S]),A=D.keyPath,D=Ws(D.name,A,!!D.unique,!!D.multiEntry,!1,A&&typeof A!="string",!1);x.push(D)}d[f]=Ks(f,y,x)}),d}function Qr(i,a,c){for(var d=c.db.objectStoreNames,f=0;f<d.length;++f){var p=d[f],y=c.objectStore(p);i._hasGetAll="getAll"in y;for(var x=0;x<y.indexNames.length;++x){var S=y.indexNames[x],A=y.index(S).keyPath,D=typeof A=="string"?A:"["+ce(A).join("+")+"]";!a[p]||(A=a[p].idxByName[D])&&(A.name=S,delete a[p].idxByName[D],a[p].idxByName[S]=A)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&o.WorkerGlobalScope&&o instanceof o.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(i._hasGetAll=!1)}function wo(i){return i.split(",").map(function(a,c){var d=(a=a.trim()).replace(/([&*]|\+\+)/g,""),f=/^\[/.test(d)?d.match(/^\[(.*)\]$/)[1].split("+"):d;return Ws(d,f||null,/\&/.test(a),/\*/.test(a),/\+\+/.test(a),u(f),c===0)})}var oc=(Jr.prototype._parseStoresSpec=function(i,a){l(i).forEach(function(c){if(i[c]!==null){var d=wo(i[c]),f=d.shift();if(f.unique=!0,f.multi)throw new se.Schema("Primary key cannot be multi-valued");d.forEach(function(p){if(p.auto)throw new se.Schema("Only primary key can be marked as autoIncrement (++)");if(!p.keyPath)throw new se.Schema("Index must have a name and cannot be an empty string")}),a[c]=Ks(c,f,d)}})},Jr.prototype.stores=function(c){var a=this.db;this._cfg.storesSource=this._cfg.storesSource?h(this._cfg.storesSource,c):c;var c=a._versions,d={},f={};return c.forEach(function(p){h(d,p._cfg.storesSource),f=p._cfg.dbschema={},p._parseStoresSpec(d,f)}),a._dbSchema=f,Gs(a,[a._allTables,a,a.Transaction.prototype]),Gr(a,[a._allTables,a,a.Transaction.prototype,this._cfg.tables],l(f),f),a._storeNames=l(f),this},Jr.prototype.upgrade=function(i){return this._cfg.contentUpgrade=At(this._cfg.contentUpgrade||fe,i),this},Jr);function Jr(){}function Qs(i,a){var c=i._dbNamesDB;return c||(c=i._dbNamesDB=new fn(Ur,{addons:[],indexedDB:i,IDBKeyRange:a})).version(1).stores({dbnames:"name"}),c.table("dbnames")}function Js(i){return i&&typeof i.databases=="function"}function Zs(i){return wn(function(){return Z.letThrough=!0,i()})}function ei(i){return!("from"in i)}var yt=function(i,a){if(!this){var c=new yt;return i&&"d"in i&&h(c,i),c}h(this,arguments.length?{d:1,from:i,to:1<arguments.length?a:i}:{d:0})};function br(i,a,c){var d=Pe(a,c);if(!isNaN(d)){if(0<d)throw RangeError();if(ei(i))return h(i,{from:a,to:c,d:1});var f=i.l,d=i.r;if(Pe(c,i.from)<0)return f?br(f,a,c):i.l={from:a,to:c,d:1,l:null,r:null},xo(i);if(0<Pe(a,i.to))return d?br(d,a,c):i.r={from:a,to:c,d:1,l:null,r:null},xo(i);Pe(a,i.from)<0&&(i.from=a,i.l=null,i.d=d?d.d+1:1),0<Pe(c,i.to)&&(i.to=c,i.r=null,i.d=i.l?i.l.d+1:1),c=!i.r,f&&!i.l&&yr(i,f),d&&c&&yr(i,d)}}function yr(i,a){ei(a)||(function c(d,S){var p=S.from,y=S.to,x=S.l,S=S.r;br(d,p,y),x&&c(d,x),S&&c(d,S)})(i,a)}function vo(i,a){var c=Zr(a),d=c.next();if(d.done)return!1;for(var f=d.value,p=Zr(i),y=p.next(f.from),x=y.value;!d.done&&!y.done;){if(Pe(x.from,f.to)<=0&&0<=Pe(x.to,f.from))return!0;Pe(f.from,x.from)<0?f=(d=c.next(x.from)).value:x=(y=p.next(f.from)).value}return!1}function Zr(i){var a=ei(i)?null:{s:0,n:i};return{next:function(c){for(var d=0<arguments.length;a;)switch(a.s){case 0:if(a.s=1,d)for(;a.n.l&&Pe(c,a.n.from)<0;)a={up:a,n:a.n.l,s:1};else for(;a.n.l;)a={up:a,n:a.n.l,s:1};case 1:if(a.s=2,!d||Pe(c,a.n.to)<=0)return{value:a.n,done:!1};case 2:if(a.n.r){a.s=3,a={up:a,n:a.n.r,s:0};continue}case 3:a=a.up}return{done:!0}}}}function xo(i){var a,c,d=(((a=i.r)===null||a===void 0?void 0:a.d)||0)-(((c=i.l)===null||c===void 0?void 0:c.d)||0),f=1<d?"r":d<-1?"l":"";f&&(a=f=="r"?"l":"r",c=s({},i),d=i[f],i.from=d.from,i.to=d.to,i[f]=d[f],c[f]=d[a],(i[a]=c).d=$o(c)),i.d=$o(i)}function $o(c){var a=c.r,c=c.l;return(a?c?Math.max(a.d,c.d):a.d:c?c.d:0)+1}function es(i,a){return l(a).forEach(function(c){i[c]?yr(i[c],a[c]):i[c]=(function d(f){var p,y,x={};for(p in f)w(f,p)&&(y=f[p],x[p]=!y||typeof y!="object"||m.has(y.constructor)?y:d(y));return x})(a[c])}),i}function ti(i,a){return i.all||a.all||Object.keys(i).some(function(c){return a[c]&&vo(a[c],i[c])})}P(yt.prototype,((zt={add:function(i){return yr(this,i),this},addKey:function(i){return br(this,i,i),this},addKeys:function(i){var a=this;return i.forEach(function(c){return br(a,c,c)}),this},hasKey:function(i){var a=Zr(this).next(i).value;return a&&Pe(a.from,i)<=0&&0<=Pe(a.to,i)}})[ue]=function(){return Zr(this)},zt));var jn={},ni={},ri=!1;function ts(i){es(ni,i),ri||(ri=!0,setTimeout(function(){ri=!1,si(ni,!(ni={}))},0))}function si(i,a){a===void 0&&(a=!1);var c=new Set;if(i.all)for(var d=0,f=Object.values(jn);d<f.length;d++)ko(y=f[d],i,c,a);else for(var p in i){var y,x=/^idb\:\/\/(.*)\/(.*)\//.exec(p);x&&(p=x[1],x=x[2],(y=jn["idb://".concat(p,"/").concat(x)])&&ko(y,i,c,a))}c.forEach(function(S){return S()})}function ko(i,a,c,d){for(var f=[],p=0,y=Object.entries(i.queries.query);p<y.length;p++){for(var x=y[p],S=x[0],A=[],D=0,k=x[1];D<k.length;D++){var O=k[D];ti(a,O.obsSet)?O.subscribers.forEach(function(T){return c.add(T)}):d&&A.push(O)}d&&f.push([S,A])}if(d)for(var _=0,I=f;_<I.length;_++){var R=I[_],S=R[0],A=R[1];i.queries.query[S]=A}}function ac(i){var a=i._state,c=i._deps.indexedDB;if(a.isBeingOpened||i.idbdb)return a.dbReadyPromise.then(function(){return a.dbOpenError?at(a.dbOpenError):i});a.isBeingOpened=!0,a.dbOpenError=null,a.openComplete=!1;var d=a.openCanceller,f=Math.round(10*i.verno),p=!1;function y(){if(a.openCanceller!==d)throw new se.DatabaseClosed("db.open() was cancelled")}function x(){return new ee(function(O,_){if(y(),!c)throw new se.MissingAPI;var I=i.name,R=a.autoSchema||!f?c.open(I):c.open(I,f);if(!R)throw new se.MissingAPI;R.onerror=rn(_),R.onblocked=qe(i._fireOnBlocked),R.onupgradeneeded=qe(function(T){var z;D=R.transaction,a.autoSchema&&!i._options.allowEmptyDB?(R.onerror=fr,D.abort(),R.result.close(),(z=c.deleteDatabase(I)).onsuccess=z.onerror=qe(function(){_(new se.NoSuchDatabase("Database ".concat(I," doesnt exist")))})):(D.onerror=rn(_),T=T.oldVersion>Math.pow(2,62)?0:T.oldVersion,k=T<1,i.idbdb=R.result,p&&ic(i,D),sc(i,T/10,D,_))},_),R.onsuccess=qe(function(){D=null;var T,z,B,M,H,G=i.idbdb=R.result,ne=ce(G.objectStoreNames);if(0<ne.length)try{var Y=G.transaction((M=ne).length===1?M[0]:M,"readonly");if(a.autoSchema)z=G,B=Y,(T=i).verno=z.version/10,B=T._dbSchema=Xr(0,z,B),T._storeNames=ce(z.objectStoreNames,0),Gr(T,[T._allTables],l(B),B);else if(Qr(i,i._dbSchema,Y),((H=Ys(Xr(0,(H=i).idbdb,Y),H._dbSchema)).add.length||H.change.some(function(J){return J.add.length||J.change.length}))&&!p)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),G.close(),f=G.version+1,p=!0,O(x());Vr(i,Y)}catch{}Gn.push(i),G.onversionchange=qe(function(J){a.vcFired=!0,i.on("versionchange").fire(J)}),G.onclose=qe(function(J){i.on("close").fire(J)}),k&&(H=i._deps,Y=I,G=H.indexedDB,H=H.IDBKeyRange,Js(G)||Y===Ur||Qs(G,H).put({name:Y}).catch(fe)),O()},_)}).catch(function(O){switch(O?.name){case"UnknownError":if(0<a.PR1398_maxLoop)return a.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),x();break;case"VersionError":if(0<f)return f=0,x()}return ee.reject(O)})}var S,A=a.dbReadyResolve,D=null,k=!1;return ee.race([d,(typeof navigator>"u"?ee.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(O){function _(){return indexedDB.databases().finally(O)}S=setInterval(_,100),_()}).finally(function(){return clearInterval(S)}):Promise.resolve()).then(x)]).then(function(){return y(),a.onReadyBeingFired=[],ee.resolve(Zs(function(){return i.on.ready.fire(i.vip)})).then(function O(){if(0<a.onReadyBeingFired.length){var _=a.onReadyBeingFired.reduce(At,fe);return a.onReadyBeingFired=[],ee.resolve(Zs(function(){return _(i.vip)})).then(O)}})}).finally(function(){a.openCanceller===d&&(a.onReadyBeingFired=null,a.isBeingOpened=!1)}).catch(function(O){a.dbOpenError=O;try{D&&D.abort()}catch{}return d===a.openCanceller&&i._close(),at(O)}).finally(function(){a.openComplete=!0,A()}).then(function(){var O;return k&&(O={},i.tables.forEach(function(_){_.schema.indexes.forEach(function(I){I.name&&(O["idb://".concat(i.name,"/").concat(_.name,"/").concat(I.name)]=new yt(-1/0,[[[]]]))}),O["idb://".concat(i.name,"/").concat(_.name,"/")]=O["idb://".concat(i.name,"/").concat(_.name,"/:dels")]=new yt(-1/0,[[[]]])}),kn(pr).fire(O),si(O,!0)),i})}function ii(i){function a(p){return i.next(p)}var c=f(a),d=f(function(p){return i.throw(p)});function f(p){return function(S){var x=p(S),S=x.value;return x.done?S:S&&typeof S.then=="function"?S.then(c,d):u(S)?Promise.all(S).then(c,d):c(S)}}return f(a)()}function ns(i,a,c){for(var d=u(i)?i.slice():[i],f=0;f<c;++f)d.push(a);return d}var lc={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(i){return s(s({},i),{table:function(a){var c=i.table(a),d=c.schema,f={},p=[];function y(k,O,_){var I=gr(k),R=f[I]=f[I]||[],T=k==null?0:typeof k=="string"?1:k.length,z=0<O,z=s(s({},_),{name:z?"".concat(I,"(virtual-from:").concat(_.name,")"):_.name,lowLevelIndex:_,isVirtual:z,keyTail:O,keyLength:T,extractKey:Vs(k),unique:!z&&_.unique});return R.push(z),z.isPrimaryKey||p.push(z),1<T&&y(T===2?k[0]:k.slice(0,T-1),O+1,_),R.sort(function(B,M){return B.keyTail-M.keyTail}),z}a=y(d.primaryKey.keyPath,0,d.primaryKey),f[":id"]=[a];for(var x=0,S=d.indexes;x<S.length;x++){var A=S[x];y(A.keyPath,0,A)}function D(k){var O,_=k.query.index;return _.isVirtual?s(s({},k),{query:{index:_.lowLevelIndex,range:(O=k.query.range,_=_.keyTail,{type:O.type===1?2:O.type,lower:ns(O.lower,O.lowerOpen?i.MAX_KEY:i.MIN_KEY,_),lowerOpen:!0,upper:ns(O.upper,O.upperOpen?i.MIN_KEY:i.MAX_KEY,_),upperOpen:!0})}}):k}return s(s({},c),{schema:s(s({},d),{primaryKey:a,indexes:p,getIndexByKeyPath:function(k){return(k=f[gr(k)])&&k[0]}}),count:function(k){return c.count(D(k))},query:function(k){return c.query(D(k))},openCursor:function(k){var O=k.query.index,_=O.keyTail,I=O.isVirtual,R=O.keyLength;return I?c.openCursor(D(k)).then(function(z){return z&&T(z)}):c.openCursor(k);function T(z){return Object.create(z,{continue:{value:function(B){B!=null?z.continue(ns(B,k.reverse?i.MAX_KEY:i.MIN_KEY,_)):k.unique?z.continue(z.key.slice(0,R).concat(k.reverse?i.MIN_KEY:i.MAX_KEY,_)):z.continue()}},continuePrimaryKey:{value:function(B,M){z.continuePrimaryKey(ns(B,i.MAX_KEY,_),M)}},primaryKey:{get:function(){return z.primaryKey}},key:{get:function(){var B=z.key;return R===1?B[0]:B.slice(0,R)}},value:{get:function(){return z.value}}})}}})}})}};function oi(i,a,c,d){return c=c||{},d=d||"",l(i).forEach(function(f){var p,y,x;w(a,f)?(p=i[f],y=a[f],typeof p=="object"&&typeof y=="object"&&p&&y?(x=C(p))!==C(y)?c[d+f]=a[f]:x==="Object"?oi(p,y,c,d+f+"."):p!==y&&(c[d+f]=a[f]):p!==y&&(c[d+f]=a[f])):c[d+f]=void 0}),l(a).forEach(function(f){w(i,f)||(c[d+f]=a[f])}),c}function ai(i,a){return a.type==="delete"?a.keys:a.keys||a.values.map(i.extractKey)}var cc={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(i){return s(s({},i),{table:function(a){var c=i.table(a),d=c.schema.primaryKey;return s(s({},c),{mutate:function(f){var p=Z.trans,y=p.table(a).hook,x=y.deleting,S=y.creating,A=y.updating;switch(f.type){case"add":if(S.fire===fe)break;return p._promise("readwrite",function(){return D(f)},!0);case"put":if(S.fire===fe&&A.fire===fe)break;return p._promise("readwrite",function(){return D(f)},!0);case"delete":if(x.fire===fe)break;return p._promise("readwrite",function(){return D(f)},!0);case"deleteRange":if(x.fire===fe)break;return p._promise("readwrite",function(){return(function k(O,_,I){return c.query({trans:O,values:!1,query:{index:d,range:_},limit:I}).then(function(R){var T=R.result;return D({type:"delete",keys:T,trans:O}).then(function(z){return 0<z.numFailures?Promise.reject(z.failures[0]):T.length<I?{failures:[],numFailures:0,lastResult:void 0}:k(O,s(s({},_),{lower:T[T.length-1],lowerOpen:!0}),I)})})})(f.trans,f.range,1e4)},!0)}return c.mutate(f);function D(k){var O,_,I,R=Z.trans,T=k.keys||ai(d,k);if(!T)throw new Error("Keys missing");return(k=k.type==="add"||k.type==="put"?s(s({},k),{keys:T}):s({},k)).type!=="delete"&&(k.values=n([],k.values)),k.keys&&(k.keys=n([],k.keys)),O=c,I=T,((_=k).type==="add"?Promise.resolve([]):O.getMany({trans:_.trans,keys:I,cache:"immutable"})).then(function(z){var B=T.map(function(M,H){var G,ne,Y,J=z[H],ie={onerror:null,onsuccess:null};return k.type==="delete"?x.fire.call(ie,M,J,R):k.type==="add"||J===void 0?(G=S.fire.call(ie,M,k.values[H],R),M==null&&G!=null&&(k.keys[H]=M=G,d.outbound||be(k.values[H],d.keyPath,M))):(G=oi(J,k.values[H]),(ne=A.fire.call(ie,G,M,J,R))&&(Y=k.values[H],Object.keys(ne).forEach(function(te){w(Y,te)?Y[te]=ne[te]:be(Y,te,ne[te])}))),ie});return c.mutate(k).then(function(M){for(var H=M.failures,G=M.results,ne=M.numFailures,M=M.lastResult,Y=0;Y<T.length;++Y){var J=(G||T)[Y],ie=B[Y];J==null?ie.onerror&&ie.onerror(H[Y]):ie.onsuccess&&ie.onsuccess(k.type==="put"&&z[Y]?k.values[Y]:J)}return{failures:H,results:G,numFailures:ne,lastResult:M}}).catch(function(M){return B.forEach(function(H){return H.onerror&&H.onerror(M)}),Promise.reject(M)})})}}})}})}};function Co(i,a,c){try{if(!a||a.keys.length<i.length)return null;for(var d=[],f=0,p=0;f<a.keys.length&&p<i.length;++f)Pe(a.keys[f],i[p])===0&&(d.push(c?E(a.values[f]):a.values[f]),++p);return d.length===i.length?d:null}catch{return null}}var uc={stack:"dbcore",level:-1,create:function(i){return{table:function(a){var c=i.table(a);return s(s({},c),{getMany:function(d){if(!d.cache)return c.getMany(d);var f=Co(d.keys,d.trans._cache,d.cache==="clone");return f?ee.resolve(f):c.getMany(d).then(function(p){return d.trans._cache={keys:d.keys,values:d.cache==="clone"?E(p):p},p})},mutate:function(d){return d.type!=="add"&&(d.trans._cache=null),c.mutate(d)}})}}}};function Eo(i,a){return i.trans.mode==="readonly"&&!!i.subscr&&!i.trans.explicit&&i.trans.db._options.cache!=="disabled"&&!a.schema.primaryKey.outbound}function So(i,a){switch(i){case"query":return a.values&&!a.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var dc={stack:"dbcore",level:0,name:"Observability",create:function(i){var a=i.schema.name,c=new yt(i.MIN_KEY,i.MAX_KEY);return s(s({},i),{transaction:function(d,f,p){if(Z.subscr&&f!=="readonly")throw new se.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Z.querier));return i.transaction(d,f,p)},table:function(d){var f=i.table(d),p=f.schema,y=p.primaryKey,k=p.indexes,x=y.extractKey,S=y.outbound,A=y.autoIncrement&&k.filter(function(_){return _.compound&&_.keyPath.includes(y.keyPath)}),D=s(s({},f),{mutate:function(_){function I(te){return te="idb://".concat(a,"/").concat(d,"/").concat(te),M[te]||(M[te]=new yt)}var R,T,z,B=_.trans,M=_.mutatedParts||(_.mutatedParts={}),H=I(""),G=I(":dels"),ne=_.type,ie=_.type==="deleteRange"?[_.range]:_.type==="delete"?[_.keys]:_.values.length<50?[ai(y,_).filter(function(te){return te}),_.values]:[],Y=ie[0],J=ie[1],ie=_.trans._cache;return u(Y)?(H.addKeys(Y),(ie=ne==="delete"||Y.length===J.length?Co(Y,ie):null)||G.addKeys(Y),(ie||J)&&(R=I,T=ie,z=J,p.indexes.forEach(function(te){var le=R(te.name||"");function xe(Se){return Se!=null?te.extractKey(Se):null}function Ee(Se){return te.multiEntry&&u(Se)?Se.forEach(function(It){return le.addKey(It)}):le.addKey(Se)}(T||z).forEach(function(Se,wt){var ve=T&&xe(T[wt]),wt=z&&xe(z[wt]);Pe(ve,wt)!==0&&(ve!=null&&Ee(ve),wt!=null&&Ee(wt))})}))):Y?(J={from:(J=Y.lower)!==null&&J!==void 0?J:i.MIN_KEY,to:(J=Y.upper)!==null&&J!==void 0?J:i.MAX_KEY},G.add(J),H.add(J)):(H.add(c),G.add(c),p.indexes.forEach(function(te){return I(te.name).add(c)})),f.mutate(_).then(function(te){return!Y||_.type!=="add"&&_.type!=="put"||(H.addKeys(te.results),A&&A.forEach(function(le){for(var xe=_.values.map(function(ve){return le.extractKey(ve)}),Ee=le.keyPath.findIndex(function(ve){return ve===y.keyPath}),Se=0,It=te.results.length;Se<It;++Se)xe[Se][Ee]=te.results[Se];I(le.name).addKeys(xe)})),B.mutatedParts=es(B.mutatedParts||{},M),te})}}),k=function(I){var R=I.query,I=R.index,R=R.range;return[I,new yt((I=R.lower)!==null&&I!==void 0?I:i.MIN_KEY,(R=R.upper)!==null&&R!==void 0?R:i.MAX_KEY)]},O={get:function(_){return[y,new yt(_.key)]},getMany:function(_){return[y,new yt().addKeys(_.keys)]},count:k,query:k,openCursor:k};return l(O).forEach(function(_){D[_]=function(I){var R=Z.subscr,T=!!R,z=Eo(Z,f)&&So(_,I)?I.obsSet={}:R;if(T){var B=function(J){return J="idb://".concat(a,"/").concat(d,"/").concat(J),z[J]||(z[J]=new yt)},M=B(""),H=B(":dels"),R=O[_](I),T=R[0],R=R[1];if((_==="query"&&T.isPrimaryKey&&!I.values?H:B(T.name||"")).add(R),!T.isPrimaryKey){if(_!=="count"){var G=_==="query"&&S&&I.values&&f.query(s(s({},I),{values:!1}));return f[_].apply(this,arguments).then(function(J){if(_==="query"){if(S&&I.values)return G.then(function(xe){return xe=xe.result,M.addKeys(xe),J});var ie=I.values?J.result.map(x):J.result;(I.values?M:H).addKeys(ie)}else if(_==="openCursor"){var te=J,le=I.values;return te&&Object.create(te,{key:{get:function(){return H.addKey(te.primaryKey),te.key}},primaryKey:{get:function(){var xe=te.primaryKey;return H.addKey(xe),xe}},value:{get:function(){return le&&M.addKey(te.primaryKey),te.value}}})}return J})}H.add(c)}}return f[_].apply(this,arguments)}}),D}})}};function _o(i,a,c){if(c.numFailures===0)return a;if(a.type==="deleteRange")return null;var d=a.keys?a.keys.length:"values"in a&&a.values?a.values.length:1;return c.numFailures===d?null:(a=s({},a),u(a.keys)&&(a.keys=a.keys.filter(function(f,p){return!(p in c.failures)})),"values"in a&&u(a.values)&&(a.values=a.values.filter(function(f,p){return!(p in c.failures)})),a)}function li(i,a){return c=i,((d=a).lower===void 0||(d.lowerOpen?0<Pe(c,d.lower):0<=Pe(c,d.lower)))&&(i=i,(a=a).upper===void 0||(a.upperOpen?Pe(i,a.upper)<0:Pe(i,a.upper)<=0));var c,d}function Ao(i,a,O,d,f,p){if(!O||O.length===0)return i;var y=a.query.index,x=y.multiEntry,S=a.query.range,A=d.schema.primaryKey.extractKey,D=y.extractKey,k=(y.lowLevelIndex||y).extractKey,O=O.reduce(function(_,I){var R=_,T=[];if(I.type==="add"||I.type==="put")for(var z=new yt,B=I.values.length-1;0<=B;--B){var M,H=I.values[B],G=A(H);z.hasKey(G)||(M=D(H),(x&&u(M)?M.some(function(te){return li(te,S)}):li(M,S))&&(z.addKey(G),T.push(H)))}switch(I.type){case"add":var ne=new yt().addKeys(a.values?_.map(function(le){return A(le)}):_),R=_.concat(a.values?T.filter(function(le){return le=A(le),!ne.hasKey(le)&&(ne.addKey(le),!0)}):T.map(function(le){return A(le)}).filter(function(le){return!ne.hasKey(le)&&(ne.addKey(le),!0)}));break;case"put":var Y=new yt().addKeys(I.values.map(function(le){return A(le)}));R=_.filter(function(le){return!Y.hasKey(a.values?A(le):le)}).concat(a.values?T:T.map(function(le){return A(le)}));break;case"delete":var J=new yt().addKeys(I.keys);R=_.filter(function(le){return!J.hasKey(a.values?A(le):le)});break;case"deleteRange":var ie=I.range;R=_.filter(function(le){return!li(A(le),ie)})}return R},i);return O===i?i:(O.sort(function(_,I){return Pe(k(_),k(I))||Pe(A(_),A(I))}),a.limit&&a.limit<1/0&&(O.length>a.limit?O.length=a.limit:i.length===a.limit&&O.length<a.limit&&(f.dirty=!0)),p?Object.freeze(O):O)}function To(i,a){return Pe(i.lower,a.lower)===0&&Pe(i.upper,a.upper)===0&&!!i.lowerOpen==!!a.lowerOpen&&!!i.upperOpen==!!a.upperOpen}function hc(i,a){return(function(c,d,f,p){if(c===void 0)return d!==void 0?-1:0;if(d===void 0)return 1;if((d=Pe(c,d))===0){if(f&&p)return 0;if(f)return 1;if(p)return-1}return d})(i.lower,a.lower,i.lowerOpen,a.lowerOpen)<=0&&0<=(function(c,d,f,p){if(c===void 0)return d!==void 0?1:0;if(d===void 0)return-1;if((d=Pe(c,d))===0){if(f&&p)return 0;if(f)return-1;if(p)return 1}return d})(i.upper,a.upper,i.upperOpen,a.upperOpen)}function fc(i,a,c,d){i.subscribers.add(c),d.addEventListener("abort",function(){var f,p;i.subscribers.delete(c),i.subscribers.size===0&&(f=i,p=a,setTimeout(function(){f.subscribers.size===0&&K(p,f)},3e3))})}var pc={stack:"dbcore",level:0,name:"Cache",create:function(i){var a=i.schema.name;return s(s({},i),{transaction:function(c,d,f){var p,y,x=i.transaction(c,d,f);return d==="readwrite"&&(y=(p=new AbortController).signal,f=function(S){return function(){if(p.abort(),d==="readwrite"){for(var A=new Set,D=0,k=c;D<k.length;D++){var O=k[D],_=jn["idb://".concat(a,"/").concat(O)];if(_){var I=i.table(O),R=_.optimisticOps.filter(function(le){return le.trans===x});if(x._explicit&&S&&x.mutatedParts)for(var T=0,z=Object.values(_.queries.query);T<z.length;T++)for(var B=0,M=(ne=z[T]).slice();B<M.length;B++)ti((Y=M[B]).obsSet,x.mutatedParts)&&(K(ne,Y),Y.subscribers.forEach(function(le){return A.add(le)}));else if(0<R.length){_.optimisticOps=_.optimisticOps.filter(function(le){return le.trans!==x});for(var H=0,G=Object.values(_.queries.query);H<G.length;H++)for(var ne,Y,J,ie=0,te=(ne=G[H]).slice();ie<te.length;ie++)(Y=te[ie]).res!=null&&x.mutatedParts&&(S&&!Y.dirty?(J=Object.isFrozen(Y.res),J=Ao(Y.res,Y.req,R,I,Y,J),Y.dirty?(K(ne,Y),Y.subscribers.forEach(function(le){return A.add(le)})):J!==Y.res&&(Y.res=J,Y.promise=ee.resolve({result:J}))):(Y.dirty&&K(ne,Y),Y.subscribers.forEach(function(le){return A.add(le)})))}}}A.forEach(function(le){return le()})}}},x.addEventListener("abort",f(!1),{signal:y}),x.addEventListener("error",f(!1),{signal:y}),x.addEventListener("complete",f(!0),{signal:y})),x},table:function(c){var d=i.table(c),f=d.schema.primaryKey;return s(s({},d),{mutate:function(p){var y=Z.trans;if(f.outbound||y.db._options.cache==="disabled"||y.explicit||y.idbtrans.mode!=="readwrite")return d.mutate(p);var x=jn["idb://".concat(a,"/").concat(c)];return x?(y=d.mutate(p),p.type!=="add"&&p.type!=="put"||!(50<=p.values.length||ai(f,p).some(function(S){return S==null}))?(x.optimisticOps.push(p),p.mutatedParts&&ts(p.mutatedParts),y.then(function(S){0<S.numFailures&&(K(x.optimisticOps,p),(S=_o(0,p,S))&&x.optimisticOps.push(S),p.mutatedParts&&ts(p.mutatedParts))}),y.catch(function(){K(x.optimisticOps,p),p.mutatedParts&&ts(p.mutatedParts)})):y.then(function(S){var A=_o(0,s(s({},p),{values:p.values.map(function(D,k){var O;return S.failures[k]?D:(D=(O=f.keyPath)!==null&&O!==void 0&&O.includes(".")?E(D):s({},D),be(D,f.keyPath,S.results[k]),D)})}),S);x.optimisticOps.push(A),queueMicrotask(function(){return p.mutatedParts&&ts(p.mutatedParts)})}),y):d.mutate(p)},query:function(p){if(!Eo(Z,d)||!So("query",p))return d.query(p);var y=((A=Z.trans)===null||A===void 0?void 0:A.db._options.cache)==="immutable",k=Z,x=k.requery,S=k.signal,A=(function(I,R,T,z){var B=jn["idb://".concat(I,"/").concat(R)];if(!B)return[];if(!(R=B.queries[T]))return[null,!1,B,null];var M=R[(z.query?z.query.index.name:null)||""];if(!M)return[null,!1,B,null];switch(T){case"query":var H=M.find(function(G){return G.req.limit===z.limit&&G.req.values===z.values&&To(G.req.query.range,z.query.range)});return H?[H,!0,B,M]:[M.find(function(G){return("limit"in G.req?G.req.limit:1/0)>=z.limit&&(!z.values||G.req.values)&&hc(G.req.query.range,z.query.range)}),!1,B,M];case"count":return H=M.find(function(G){return To(G.req.query.range,z.query.range)}),[H,!!H,B,M]}})(a,c,"query",p),D=A[0],k=A[1],O=A[2],_=A[3];return D&&k?D.obsSet=p.obsSet:(k=d.query(p).then(function(I){var R=I.result;if(D&&(D.res=R),y){for(var T=0,z=R.length;T<z;++T)Object.freeze(R[T]);Object.freeze(R)}else I.result=E(R);return I}).catch(function(I){return _&&D&&K(_,D),Promise.reject(I)}),D={obsSet:p.obsSet,promise:k,subscribers:new Set,type:"query",req:p,dirty:!1},_?_.push(D):(_=[D],(O=O||(jn["idb://".concat(a,"/").concat(c)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[p.query.index.name||""]=_)),fc(D,_,x,S),D.promise.then(function(I){return{result:Ao(I.result,p,O?.optimisticOps,d,D,y)}})}})}})}};function rs(i,a){return new Proxy(i,{get:function(c,d,f){return d==="db"?a:Reflect.get(c,d,f)}})}var fn=(lt.prototype.version=function(i){if(isNaN(i)||i<.1)throw new se.Type("Given version is not a positive number");if(i=Math.round(10*i)/10,this.idbdb||this._state.isBeingOpened)throw new se.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,i);var a=this._versions,c=a.filter(function(d){return d._cfg.version===i})[0];return c||(c=new this.Version(i),a.push(c),a.sort(rc),c.stores({}),this._state.autoSchema=!1,c)},lt.prototype._whenReady=function(i){var a=this;return this.idbdb&&(this._state.openComplete||Z.letThrough||this._vip)?i():new ee(function(c,d){if(a._state.openComplete)return d(new se.DatabaseClosed(a._state.dbOpenError));if(!a._state.isBeingOpened){if(!a._state.autoOpen)return void d(new se.DatabaseClosed);a.open().catch(fe)}a._state.dbReadyPromise.then(c,d)}).then(i)},lt.prototype.use=function(i){var a=i.stack,c=i.create,d=i.level,f=i.name;return f&&this.unuse({stack:a,name:f}),i=this._middlewares[a]||(this._middlewares[a]=[]),i.push({stack:a,create:c,level:d??10,name:f}),i.sort(function(p,y){return p.level-y.level}),this},lt.prototype.unuse=function(i){var a=i.stack,c=i.name,d=i.create;return a&&this._middlewares[a]&&(this._middlewares[a]=this._middlewares[a].filter(function(f){return d?f.create!==d:!!c&&f.name!==c})),this},lt.prototype.open=function(){var i=this;return Dn(et,function(){return ac(i)})},lt.prototype._close=function(){var i=this._state,a=Gn.indexOf(this);if(0<=a&&Gn.splice(a,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}i.isBeingOpened||(i.dbReadyPromise=new ee(function(c){i.dbReadyResolve=c}),i.openCanceller=new ee(function(c,d){i.cancelOpen=d}))},lt.prototype.close=function(c){var a=(c===void 0?{disableAutoOpen:!0}:c).disableAutoOpen,c=this._state;a?(c.isBeingOpened&&c.cancelOpen(new se.DatabaseClosed),this._close(),c.autoOpen=!1,c.dbOpenError=new se.DatabaseClosed):(this._close(),c.autoOpen=this._options.autoOpen||c.isBeingOpened,c.openComplete=!1,c.dbOpenError=null)},lt.prototype.delete=function(i){var a=this;i===void 0&&(i={disableAutoOpen:!0});var c=0<arguments.length&&typeof arguments[0]!="object",d=this._state;return new ee(function(f,p){function y(){a.close(i);var x=a._deps.indexedDB.deleteDatabase(a.name);x.onsuccess=qe(function(){var S,A,D;S=a._deps,A=a.name,D=S.indexedDB,S=S.IDBKeyRange,Js(D)||A===Ur||Qs(D,S).delete(A).catch(fe),f()}),x.onerror=rn(p),x.onblocked=a._fireOnBlocked}if(c)throw new se.InvalidArgument("Invalid closeOptions argument to db.delete()");d.isBeingOpened?d.dbReadyPromise.then(y):y()})},lt.prototype.backendDB=function(){return this.idbdb},lt.prototype.isOpen=function(){return this.idbdb!==null},lt.prototype.hasBeenClosed=function(){var i=this._state.dbOpenError;return i&&i.name==="DatabaseClosed"},lt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},lt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(lt.prototype,"tables",{get:function(){var i=this;return l(this._allTables).map(function(a){return i._allTables[a]})},enumerable:!1,configurable:!0}),lt.prototype.transaction=function(){var i=function(a,c,d){var f=arguments.length;if(f<2)throw new se.InvalidArgument("Too few arguments");for(var p=new Array(f-1);--f;)p[f-1]=arguments[f];return d=p.pop(),[a,ke(p),d]}.apply(this,arguments);return this._transaction.apply(this,i)},lt.prototype._transaction=function(i,a,c){var d=this,f=Z.trans;f&&f.db===this&&i.indexOf("!")===-1||(f=null);var p,y,x=i.indexOf("?")!==-1;i=i.replace("!","").replace("?","");try{if(y=a.map(function(A){if(A=A instanceof d.Table?A.name:A,typeof A!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return A}),i=="r"||i===Bs)p=Bs;else{if(i!="rw"&&i!=Ms)throw new se.InvalidArgument("Invalid transaction mode: "+i);p=Ms}if(f){if(f.mode===Bs&&p===Ms){if(!x)throw new se.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");f=null}f&&y.forEach(function(A){if(f&&f.storeNames.indexOf(A)===-1){if(!x)throw new se.SubTransaction("Table "+A+" not included in parent transaction.");f=null}}),x&&f&&!f.active&&(f=null)}}catch(A){return f?f._promise(null,function(D,k){k(A)}):at(A)}var S=function A(D,k,O,_,I){return ee.resolve().then(function(){var R=Z.transless||Z,T=D._createTransaction(k,O,D._dbSchema,_);if(T.explicit=!0,R={trans:T,transless:R},_)T.idbtrans=_.idbtrans;else try{T.create(),T.idbtrans._explicit=!0,D._state.PR1398_maxLoop=3}catch(M){return M.name===Qe.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return A(D,k,O,null,I)})):at(M)}var z,B=ct(I);return B&&Vn(),R=ee.follow(function(){var M;(z=I.call(T,T))&&(B?(M=vn.bind(null,null),z.then(M,M)):typeof z.next=="function"&&typeof z.throw=="function"&&(z=ii(z)))},R),(z&&typeof z.then=="function"?ee.resolve(z).then(function(M){return T.active?M:at(new se.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):R.then(function(){return z})).then(function(M){return _&&T._resolve(),T._completion.then(function(){return M})}).catch(function(M){return T._reject(M),at(M)})})}.bind(null,this,p,y,f,c);return f?f._promise(p,S,"lock"):Z.trans?Dn(Z.transless,function(){return d._whenReady(S)}):this._whenReady(S)},lt.prototype.table=function(i){if(!w(this._allTables,i))throw new se.InvalidTable("Table ".concat(i," does not exist"));return this._allTables[i]},lt);function lt(i,a){var c=this;this._middlewares={},this.verno=0;var d=lt.dependencies;this._options=a=s({addons:lt.addons,autoOpen:!0,indexedDB:d.indexedDB,IDBKeyRange:d.IDBKeyRange,cache:"cloned"},a),this._deps={indexedDB:a.indexedDB,IDBKeyRange:a.IDBKeyRange},d=a.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var f,p,y,x,S,A={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:fe,dbReadyPromise:null,cancelOpen:fe,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:a.autoOpen};A.dbReadyPromise=new ee(function(k){A.dbReadyResolve=k}),A.openCanceller=new ee(function(k,O){A.cancelOpen=O}),this._state=A,this.name=i,this.on=ur(this,"populate","blocked","versionchange","close",{ready:[At,fe]}),this.on.ready.subscribe=ge(this.on.ready.subscribe,function(k){return function(O,_){lt.vip(function(){var I,R=c._state;R.openComplete?(R.dbOpenError||ee.resolve().then(O),_&&k(O)):R.onReadyBeingFired?(R.onReadyBeingFired.push(O),_&&k(O)):(k(O),I=c,_||k(function T(){I.on.ready.unsubscribe(O),I.on.ready.unsubscribe(T)}))})}}),this.Collection=(f=this,dr(Xl.prototype,function(z,T){this.db=f;var _=io,I=null;if(T)try{_=T()}catch(B){I=B}var R=z._ctx,T=R.table,z=T.hook.reading.fire;this._ctx={table:T,index:R.index,isPrimKey:!R.index||T.schema.primKey.keyPath&&R.index===T.schema.primKey.name,range:_,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:I,or:R.or,valueMapper:z!==Ce?z:null}})),this.Table=(p=this,dr(co.prototype,function(k,O,_){this.db=p,this._tx=_,this.name=k,this.schema=O,this.hook=p._allTables[k]?p._allTables[k].hook:ur(null,{creating:[Ze,fe],reading:[_t,Ce],updating:[Gt,fe],deleting:[bn,fe]})})),this.Transaction=(y=this,dr(Zl.prototype,function(k,O,_,I,R){var T=this;this.db=y,this.mode=k,this.storeNames=O,this.schema=_,this.chromeTransactionDurability=I,this.idbtrans=null,this.on=ur(this,"complete","error","abort"),this.parent=R||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new ee(function(z,B){T._resolve=z,T._reject=B}),this._completion.then(function(){T.active=!1,T.on.complete.fire()},function(z){var B=T.active;return T.active=!1,T.on.error.fire(z),T.parent?T.parent._reject(z):B&&T.idbtrans&&T.idbtrans.abort(),at(z)})})),this.Version=(x=this,dr(oc.prototype,function(k){this.db=x,this._cfg={version:k,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(S=this,dr(mo.prototype,function(k,O,_){if(this.db=S,this._ctx={table:k,index:O===":id"?null:O,or:_},this._cmp=this._ascending=Pe,this._descending=function(I,R){return Pe(R,I)},this._max=function(I,R){return 0<Pe(I,R)?I:R},this._min=function(I,R){return Pe(I,R)<0?I:R},this._IDBKeyRange=S._deps.IDBKeyRange,!this._IDBKeyRange)throw new se.MissingAPI})),this.on("versionchange",function(k){0<k.newVersion?console.warn("Another connection wants to upgrade database '".concat(c.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(c.name,"'. Closing db now to resume the delete request.")),c.close({disableAutoOpen:!1})}),this.on("blocked",function(k){!k.newVersion||k.newVersion<k.oldVersion?console.warn("Dexie.delete('".concat(c.name,"') was blocked")):console.warn("Upgrade '".concat(c.name,"' blocked by other connection holding version ").concat(k.oldVersion/10))}),this._maxKey=mr(a.IDBKeyRange),this._createTransaction=function(k,O,_,I){return new c.Transaction(k,O,_,c._options.chromeTransactionDurability,I)},this._fireOnBlocked=function(k){c.on("blocked").fire(k),Gn.filter(function(O){return O.name===c.name&&O!==c&&!O._state.vcFired}).map(function(O){return O.on("versionchange").fire(k)})},this.use(uc),this.use(pc),this.use(dc),this.use(lc),this.use(cc);var D=new Proxy(this,{get:function(k,O,_){if(O==="_vip")return!0;if(O==="table")return function(R){return rs(c.table(R),D)};var I=Reflect.get(k,O,_);return I instanceof co?rs(I,D):O==="tables"?I.map(function(R){return rs(R,D)}):O==="_createTransaction"?function(){return rs(I.apply(this,arguments),D)}:I}});this.vip=D,d.forEach(function(k){return k(c)})}var ss,zt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",mc=(ci.prototype.subscribe=function(i,a,c){return this._subscribe(i&&typeof i!="function"?i:{next:i,error:a,complete:c})},ci.prototype[zt]=function(){return this},ci);function ci(i){this._subscribe=i}try{ss={indexedDB:o.indexedDB||o.mozIndexedDB||o.webkitIndexedDB||o.msIndexedDB,IDBKeyRange:o.IDBKeyRange||o.webkitIDBKeyRange}}catch{ss={indexedDB:null,IDBKeyRange:null}}function Po(i){var a,c=!1,d=new mc(function(f){var p=ct(i),y,x=!1,S={},A={},D={get closed(){return x},unsubscribe:function(){x||(x=!0,y&&y.abort(),k&&kn.storagemutated.unsubscribe(_))}};f.start&&f.start(D);var k=!1,O=function(){return Ls(I)},_=function(R){es(S,R),ti(A,S)&&O()},I=function(){var R,T,z;!x&&ss.indexedDB&&(S={},R={},y&&y.abort(),y=new AbortController,z=(function(B){var M=Le();try{p&&Vn();var H=wn(i,B);return H=p?H.finally(vn):H}finally{M&&Ve()}})(T={subscr:R,signal:y.signal,requery:O,querier:i,trans:null}),Promise.resolve(z).then(function(B){c=!0,a=B,x||T.signal.aborted||(S={},(function(M){for(var H in M)if(w(M,H))return;return 1})(A=R)||k||(kn(pr,_),k=!0),Ls(function(){return!x&&f.next&&f.next(B)}))},function(B){c=!1,["DatabaseClosedError","AbortError"].includes(B?.name)||x||Ls(function(){x||f.error&&f.error(B)})}))};return setTimeout(O,0),D});return d.hasValue=function(){return c},d.getValue=function(){return a},d}var Fn=fn;function ui(i){var a=Cn;try{Cn=!0,kn.storagemutated.fire(i),si(i,!0)}finally{Cn=a}}P(Fn,s(s({},Me),{delete:function(i){return new Fn(i,{addons:[]}).delete()},exists:function(i){return new Fn(i,{addons:[]}).open().then(function(a){return a.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(i){try{return a=Fn.dependencies,c=a.indexedDB,a=a.IDBKeyRange,(Js(c)?Promise.resolve(c.databases()).then(function(d){return d.map(function(f){return f.name}).filter(function(f){return f!==Ur})}):Qs(c,a).toCollection().primaryKeys()).then(i)}catch{return at(new se.MissingAPI)}var a,c},defineClass:function(){return function(i){h(this,i)}},ignoreTransaction:function(i){return Z.trans?Dn(Z.transless,i):i()},vip:Zs,async:function(i){return function(){try{var a=ii(i.apply(this,arguments));return a&&typeof a.then=="function"?a:ee.resolve(a)}catch(c){return at(c)}}},spawn:function(i,a,c){try{var d=ii(i.apply(c,a||[]));return d&&typeof d.then=="function"?d:ee.resolve(d)}catch(f){return at(f)}},currentTransaction:{get:function(){return Z.trans||null}},waitFor:function(i,a){return a=ee.resolve(typeof i=="function"?Fn.ignoreTransaction(i):i).timeout(a||6e4),Z.trans?Z.trans.waitFor(a):a},Promise:ee,debug:{get:function(){return Fe},set:function(i){We(i)}},derive:N,extend:h,props:P,override:ge,Events:ur,on:kn,liveQuery:Po,extendObservabilitySet:es,getByKeyPath:oe,setByKeyPath:be,delByKeyPath:function(i,a){typeof a=="string"?be(i,a,void 0):"length"in a&&[].map.call(a,function(c){be(i,c,void 0)})},shallowClone:$e,deepClone:E,getObjectDiff:oi,cmp:Pe,asap:q,minKey:-1/0,addons:[],connections:Gn,errnames:Qe,dependencies:ss,cache:jn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(i){return parseInt(i)}).reduce(function(i,a,c){return i+a/Math.pow(10,2*c)})})),Fn.maxKey=mr(Fn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(kn(pr,function(i){Cn||(i=new CustomEvent(Hs,{detail:i}),Cn=!0,dispatchEvent(i),Cn=!1)}),addEventListener(Hs,function(i){i=i.detail,Cn||ui(i)}));var Qn,Cn=!1,Io=function(){};return typeof BroadcastChannel<"u"&&((Io=function(){(Qn=new BroadcastChannel(Hs)).onmessage=function(i){return i.data&&ui(i.data)}})(),typeof Qn.unref=="function"&&Qn.unref(),kn(pr,function(i){Cn||Qn.postMessage(i)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(i){if(!fn.disableBfCache&&i.persisted){Fe&&console.debug("Dexie: handling persisted pagehide"),Qn?.close();for(var a=0,c=Gn;a<c.length;a++)c[a].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(i){!fn.disableBfCache&&i.persisted&&(Fe&&console.debug("Dexie: handling persisted pageshow"),Io(),ui({all:new yt(-1/0,[[]])}))})),ee.rejectionMapper=function(i,a){return!i||i instanceof He||i instanceof TypeError||i instanceof SyntaxError||!i.name||!Je[i.name]?i:(a=new Je[i.name](a||i.message,i),"stack"in i&&L(a,"stack",{get:function(){return this.inner.stack}}),a)},We(Fe),s(fn,Object.freeze({__proto__:null,Dexie:fn,liveQuery:Po,Entity:oo,cmp:Pe,PropModSymbol:hn,PropModification:hr,replacePrefix:function(i,a){return new hr({replacePrefix:[i,a]})},add:function(i){return new hr({add:i})},remove:function(i){return new hr({remove:i})},default:fn,RangeSet:yt,mergeRanges:yr,rangesOverlap:vo}),{default:fn}),fn})})(hs)),hs.exports}var Yc=Gc();const xi=Kc(Yc),Wo=Symbol.for("Dexie"),bs=globalThis[Wo]||(globalThis[Wo]=xi);if(xi.semVer!==bs.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${xi.semVer} and ${bs.semVer}`);const{liveQuery:Wa,mergeRanges:Sm,rangesOverlap:_m,RangeSet:Am,cmp:Tm,Entity:Pm,PropModSymbol:Im,PropModification:Dm,replacePrefix:Rm,add:Om,remove:jm}=bs,Xc="easydb";let os=null;function Qc(){if(os)return os;const e=new bs(Xc);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>Jc()),os={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},os}function Jc(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function Jn(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(s=>Ka(s,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const s=Wa(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>s.unsubscribe()}}}function Zc(e,t){return{async find(r){const s=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return s.toArray();const n=Object.entries(r);return s.filter(o=>Ka(o,n)).toArray()},async findOne(r){const s=await e.get(r);return s&&s.tableId===t?s:null},async insert(r){const s={...r,tableId:t};return await e.add(s),s},async bulkInsert(r){if(r.length===0)return[];const s=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(s),s},async upsert(r){const s={...r,tableId:t};return await e.put(s),s},async patch(r,s){if(await e.update(r,s)===0)throw new Error(`row patch: no row ${r}`);const o=await e.get(r);if(!o)throw new Error(`row patch: row ${r} vanished after update`);return o},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=Wa(()=>e.where("tableId").equals(t).toArray()).subscribe({next:o=>r(o)});return()=>n.unsubscribe()}}}function Ka(e,t){for(const[r,s]of t)if(e[r]!==s)return!1;return!0}function eu(e){return{workspaces:Jn(e.workspaces),tables:Jn(e.tables),settings:Jn(e.settings),plugins:Jn(e.plugins),viewTemplates:Jn(e.viewTemplates),viewInstances:Jn(e.viewInstances),rows:t=>Zc(e.rows,t)}}function tu(e){const{base:t,providers:r,tableById:s,ctx:n}=e,o=new Map;return{...t,rows(l){const u=s(l),h=u?.source;if(h){const g=r.get(h.type);if(g){const $=JSON.stringify(h),w=o.get(l);if(w&&w.key===$)return w.coll;const P=g.create(u,n);return o.set(l,{key:$,coll:P}),P}}return o.delete(l),t.rows(l)}}}function nu(){const e=new Map;return{on(t,r){let s=e.get(t);return s||(s=new Set,e.set(t,s)),s.add(r),()=>{s.delete(r)}},emit(t,r){const s=e.get(t);if(s)for(const n of s)try{n(r)}catch(o){console.error(`[event:${String(t)}] listener threw`,o)}}}}const Ht=Ye`
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
`;function In(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const Ko=new WeakSet;function Wt(e,t){if(Ko.has(t))return;Ko.add(t);let r=0,s=0,n=0,o=0,l=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",h=>{if(h.target.closest("button, input, textarea, select, a, label"))return;l=!0,r=h.clientX,s=h.clientY;const $=e.getBoundingClientRect();n=$.left,o=$.top,t.setPointerCapture(h.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",h=>{if(!l)return;const g=h.clientX-r,$=h.clientY-s,w=-e.offsetWidth+80,P=window.innerWidth-80,W=0,L=window.innerHeight-40,N=Math.max(w,Math.min(P,n+g)),U=Math.max(W,Math.min(L,o+$));e.style.position="fixed",e.style.left=`${N}px`,e.style.top=`${U}px`,e.style.margin="0"});const u=h=>{if(l){l=!1;try{t.releasePointerCapture(h.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",u),t.addEventListener("pointercancel",u)}var ru=Object.defineProperty,su=Object.getOwnPropertyDescriptor,Va=(e,t,r,s)=>{for(var n=s>1?void 0:s?su(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&ru(t,r,n),n};let Lt=class extends Ne{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),Lt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Lt.instance===this&&(Lt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&Wt(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(s=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:s}})}choice(e,t,r="Choose"){return this.enqueue(s=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:s}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return j`
      <dialog @cancel=${this.onCancel} @keydown=${In}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):me}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return j`
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
        `;case"prompt":return j`
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
        `;case"choice":return j`
          <div class="dialog-header">
            <h2>${e.title}</h2>
            <div class="header-actions">
              <button class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
            </div>
          </div>
          <div class="dialog-body">
            ${e.message?j`<p class="message">${e.message}</p>`:me}
            <div class="choices">
              ${e.options.map(t=>j`<button class="choice" @click=${()=>this.closeAndResolve(t)}>
                    ${t}
                  </button>`)}
            </div>
          </div>
        `}}};Lt.instance=null;Lt.styles=[Ht,Ye`
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
    `];Va([V()],Lt.prototype,"current",2);Lt=Va([nt("host-dialogs")],Lt);const Jt=Ye`
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
`;var iu=Object.defineProperty,ou=Object.getOwnPropertyDescriptor,Ga=(e,t,r,s)=>{for(var n=s>1?void 0:s?ou(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&iu(t,r,n),n};let pn=class extends Ne{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),pn.instance=this}disconnectedCallback(){super.disconnectedCallback(),pn.instance===this&&(pn.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const s=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),s)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return j`
      ${this.toasts.map(e=>j`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${lu(e.kind)}</span>
            <span class="body">
              ${e.title?j`<strong>${e.title}</strong>`:""}${au(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};pn.instance=null;pn.styles=[Jt,Ye`
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
    `];Ga([V()],pn.prototype,"toasts",2);pn=Ga([nt("toast-host")],pn);function au(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let s=0,n;for(;(n=t.exec(e))!==null;)n.index>s&&r.push(e.slice(s,n.index)),r.push({url:n[0]}),s=n.index+n[0].length;return s<e.length&&r.push(e.slice(s)),r.length===0?e:r.map(o=>typeof o=="string"?o:j`<a href=${o.url} target="_blank" rel="noopener noreferrer">${o.url}</a>`)}function lu(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function cu(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map}}function Bn(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function fi(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function uu(e){return{registerHeaderButton:t=>Bn(e.headerButtons,t),registerFooterButton:t=>Bn(e.footerButtons,t),registerTableButton:t=>Bn(e.tableButtons,t),registerImporter:t=>Bn(e.importers,t),registerExporter:t=>Bn(e.exporters,t),registerUrlSource:t=>Bn(e.urlSources,t),registerDropHandler:t=>Bn(e.dropHandlers,t),registerCellRenderer:(t,r)=>fi(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>fi(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>fi(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerSettings:(t,r,s)=>(e.settings.set(t,{name:r,fields:s}),()=>{e.settings.get(t)?.name===r&&e.settings.delete(t)}),dialogs:du}}const du={async alert(e,t){const r=Lt.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=Lt.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const s=Lt.instance;return s?s.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const s=Lt.instance;if(s)return s.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=pn.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},Ni="/easydbaccess/settings.json",Ya="/easydbaccess/secrets.txt";function Tr(e){try{return globalThis.localStorage??null}catch{return null}}function _s(e){const t=Tr();if(!t)return{};const r=t.getItem(Ni);if(!r)return{};try{const s=JSON.parse(r);return s&&typeof s=="object"?s:{}}catch{return{}}}function Ui(e,t){return _s()[e]}function hu(e,t,r){const s=Tr();if(!s)return;const n=_s();n[e]=t,s.setItem(Ni,JSON.stringify(n))}function fu(e,t){const r=Tr();if(!r)return;const s=_s();e in s&&(delete s[e],r.setItem(Ni,JSON.stringify(s)))}function $i(e,t){return e in _s()}function As(e){return Tr()?.getItem(Ya)??""}function Xa(e,t){Tr()?.setItem(Ya,e)}function Ts(e){const t={};for(const r of e.split(/\r?\n/)){const s=r.trim();if(!s||s.startsWith("#"))continue;const n=s.indexOf(":");if(n<0)continue;const o=s.slice(0,n).trim(),l=s.slice(n+1).trim();o&&(t[o]=l)}return t}function Qa(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(r,s)=>{const n=t[s.trim()];return n===void 0?r:n})}function pu(e){const t=uu(e.registries),r=e.registries.rowSources,s=l=>(r.set(l.type,l),()=>{r.get(l.type)===l&&r.delete(l.type)}),n=gu(e.store,e.registries),o={open(l){return console.warn("[host] windows.open is stubbed until Phase 5",l.id),{id:l.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:o,registerRowSource:s,settings:n,backend:{fetch:async(l,u)=>{const h=await mu(e.store),g=u?.body instanceof ArrayBuffer;if(!h||g)return globalThis.fetch(l,u);const $={url:l};return u?.method&&($.method=u.method),u?.headers&&($.headers=u.headers),typeof u?.body=="string"&&($.body=u.body),globalThis.fetch(`${h}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify($)})},async saveFile(l,u,h){const g=typeof u=="string"?new Blob([u],{type:h??"application/octet-stream"}):u,$=URL.createObjectURL(g),w=document.createElement("a");w.href=$,w.download=l,w.rel="noopener",document.body.appendChild(w),w.click(),w.remove(),setTimeout(()=>URL.revokeObjectURL($),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function mu(e){const t="server-sync:url";let r=$i(t)?Ui(t):void 0;return r===void 0&&(r=(await e.settings.findOne(t))?.value),typeof r!="string"||r.length===0?null:Qa(r,Ts(As())).replace(/\/+$/,"")}function gu(e,t){const r=(o,l)=>`${o}:${l}`,s=(o,l)=>t.settings.get(o)?.fields.find(u=>u.key===l),n=o=>typeof o=="string"?Qa(o,Ts(As())):o;return{async get(o,l){const u=r(o,l);let h;if($i(u))h=Ui(u);else{const g=await e.settings.findOne(u);h=g?g.value:s(o,l)?.default}return n(h)},async set(o,l,u,h){const g=r(o,l);(h??s(o,l)?.scope??"workspace")==="user"?(hu(g,u),await e.settings.remove(g).catch(()=>{})):(await e.settings.upsert({key:g,value:u}),fu(g))},async placement(o,l){const u=r(o,l);return $i(u)?"user":await e.settings.findOne(u)?"workspace":null}}}const bu={name:"csv-import",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"easyDBAccess built-ins"};function yu(e){e.ui.registerImporter(wu),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const s=Iu(t).filter(Du);if(s.length===0)return!1;t.preventDefault();for(const n of s)await vu(e,n);return!0})}const wu={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return Pr(t)}};async function vu(e,t){const r=t.name.replace(/\.csv$/i,"")||"imported";await ys(e,await t.text(),r)}async function ys(e,t,r,s={}){const n=e.workspaceId();if(!n)throw new Error("csv-import: no active workspace");const o=(r||"imported").replace(/\.csv$/i,"")||"imported",l=(await e.store.tables.find()).find(w=>w.workspaceId===n&&w.name===o);let u,h;if(l){const w=await e.ui.dialogs.choice(`A table named "${o}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!w)return;w==="Append rows"?(h="append",u=l.id):w==="Overwrite rows"?(h="overwrite",u=l.id):(h="new",u=as())}else h="new",u=as();e.events.emit("import:before",{source:"csv",tableId:u});let g;if(h==="new"){const w=Pr(t,{maxRows:s.maxRows});let P=w.columns,W=w.rows;if(s.editColumns){const N=await s.editColumns(P);if(N===null)return;W=Ru(W,P,N),P=N}s.maxRows!=null&&(W=W.slice(0,s.maxRows));const L=l?`${o} (${Date.now().toString(36)})`:o;await e.store.tables.insert({id:u,workspaceId:n,name:L,code:ki(L),columns:P,view:"table",...s.origin?{origin:s.origin}:{},updatedAt:Date.now()}),g=W.map(N=>({id:as(),tableId:u,data:N,updatedAt:Date.now()}))}else{const w=l.columns,P=Ja(t,{maxRows:s.maxRows});if(g=(s.maxRows!=null?P.rows.slice(0,s.maxRows):P.rows).map(L=>{const N={};for(let U=0;U<w.length;U++){const re=w[U];N[re.field]=rl(L[U]??"",re.type)}return{id:as(),tableId:u,data:N,updatedAt:Date.now()}}),h==="overwrite"){const L=e.store.rows(u),N=await L.find();await L.bulkRemove(N.map(U=>U.id))}}await e.store.rows(u).bulkInsert(g),e.events.emit("import:after",{source:"csv",tableId:u,rowCount:g.length})}function Ja(e,t={}){const r=e.replace(/﻿/,""),s=tl(r),n=nl(r,s,Za(t.maxRows));if(n.length===0)return{header:[],rows:[]};const o=n[0],l=n.slice(1).filter(u=>!(u.length===1&&u[0]===""));return{header:o,rows:l}}function Za(e){return e!=null?e+1:void 0}async function el(e,t){const s=new TextDecoder,n=t+1;let o="",l=0,u=!1,h=0;for(;h<e.size;){const g=new Uint8Array(await e.slice(h,h+1048576).arrayBuffer());h+=1048576;const $=s.decode(g,{stream:!0});for(let w=0;w<$.length;w++){const P=$[w];if(P==='"')u=!u;else if(P===`
`&&!u&&(l+=1,l>=n))return o+$.slice(0,w+1)}o+=$}return o}function Pr(e,t={}){const r=e.replace(/﻿/,""),s=tl(r),n=nl(r,s,Za(t.maxRows));if(n.length===0)return{columns:[],rows:[]};const o=n[0],l=n.slice(1).filter(W=>!(W.length===1&&W[0]==="")),u=o.map((W,L)=>ku(W,L)),h=il(u.map(W=>W.field)),g=l.map(W=>{const L={};for(let N=0;N<h.length;N++)L[h[N]]=W[N]??"";return L}),$=u.map((W,L)=>W.type?W.type:Cu(g.map(N=>N[h[L]]??"").filter(N=>N.length>0))),w=u.map((W,L)=>{const N=$[L]??"string",U={field:h[L],label:W.label,type:N},re=$u(N),ce=W.renderer??re;return ce&&(U.renderer=ce),W.default!==void 0&&(U.default=W.default),W.max!=null&&(U.max=W.max),W.unique&&(U.unique=!0),W.notnull&&(U.notnull=!0),W.hidden&&(U.hidden=!0),U}),P=g.map(W=>{const L={};for(let N=0;N<h.length;N++){const U=h[N],re=$[N]??"string";L[U]=rl(W[U]??"",re)}return L});return{columns:w,rows:P}}const xu=new Set(["string","number","boolean","date","datetime"]),Vo={color:"color",image:"image"};function $u(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function ku(e,t){const r=e.trim();if(!r.includes(":"))return{field:ki(r||`col_${t+1}`),label:r||`Column ${t+1}`};const s=r.split(":"),n=ki(s[0]||`col_${t+1}`),o=(s[1]??s[0]??"").trim()||n,l={field:n,label:o},u=(s[2]??"").trim();u&&(xu.has(u)?l.type=u:Vo[u]&&(l.type="string",l.renderer=Vo[u]));const h=(s[3]??"").trim();h&&(l.default=h);const g=(s[4]??"").trim();if(g){const w=Number(g);Number.isFinite(w)&&w>0&&(l.max=w)}const $=(s[5]??"").toLowerCase();return $.includes("u")&&(l.unique=!0),$.includes("n")&&(l.notnull=!0),$.includes("h")&&(l.hidden=!0),l}function tl(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const o of t)o in r&&(r[o]+=1);let s=",",n=-1;for(const o of[",",";","	"])(r[o]??0)>n&&(s=o,n=r[o]??0);return s}function nl(e,t,r){const s=[];let n=[],o="",l=!1;for(let u=0;u<e.length;u++){const h=e[u];if(l)h==='"'?e[u+1]==='"'?(o+='"',u++):l=!1:o+=h;else if(h==='"')l=!0;else if(h===t)n.push(o),o="";else if(h===`
`||h==="\r"){if(h==="\r"&&e[u+1]===`
`&&u++,n.push(o),s.push(n),n=[],o="",r!=null&&s.length>=r)return s}else o+=h}return(o.length>0||n.length>0)&&(n.push(o),s.push(n)),s}function Cu(e){return e.length===0?"string":e.every(Su)?"boolean":e.every(_u)?"number":e.every(Tu)?"datetime":e.every(Au)?"date":"string"}const Eu=/^(true|false|yes|no|0|1)$/i;function Su(e){return Eu.test(e.trim())}function _u(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function Au(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Tu(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function rl(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const s=Number(r);return Number.isFinite(s)?s:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return sl(r);case"datetime":return Pu(r);default:return e}}function sl(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let s=parseInt(t[1],10),n=parseInt(t[2],10);const o=t[3];let l=parseInt(o,10);o.length===2&&(l+=2e3);let u,h;return s>12?(u=s,h=n):n>12?(h=s,u=n):(u=s,h=n),`${l.toString().padStart(4,"0")}-${h.toString().padStart(2,"0")}-${u.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function Pu(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const s=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(s)return`${sl(`${s[1]}/${s[2]}/${s[3]}`)}T${s[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const o=n.toISOString();return`${o.slice(0,10)}T${o.slice(11,16)}`}return e}function Iu(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const s of Array.from(t.items))if(s.kind==="file"){const n=s.getAsFile();n&&r.push(n)}return r}return[]}function Du(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function il(e){const t=new Map,r=new Set,s=[];for(const n of e){let o=n,l=t.get(n)??0;for(;r.has(o);)l+=1,o=`${n}_${l+1}`;t.set(n,l),r.add(o),s.push(o)}return s}function Ru(e,t,r){return e.map(s=>{const n={};for(let o=0;o<t.length;o++)n[r[o].field]=s[t[o].field];return n})}function ki(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function as(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Ou=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:il,importCsvText:ys,init:yu,meta:bu,parseCsv:Pr,parseCsvRaw:Ja,readCsvHead:el},Symbol.toStringTag,{value:"Module"})),ju={name:"csv-export",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"easyDBAccess built-ins"},Fu={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return qi(e,t)}};function zu(e){e.ui.registerExporter(Fu),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const s=await t.store.tables.findOne(r.tableId);if(!s)return;const n=await t.store.rows(s.id).find(),o=qi(s,n);await t.backend.saveFile(`${s.code||s.name||"table"}.csv`,o,"text/csv")}})}function qi(e,t){const r=e.columns.map(o=>o.field),s=e.columns.map(o=>Go(o.label??o.field)),n=t.map(o=>r.map(l=>Go(Lu(o.data[l]))).join(","));return[s.join(","),...n].join(`\r
`)}function Lu(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function Go(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const Bu=Object.freeze(Object.defineProperty({__proto__:null,init:zu,meta:ju,serializeCsv:qi},Symbol.toStringTag,{value:"Module"}));var Mu=Object.defineProperty,Nu=Object.getOwnPropertyDescriptor,ir=(e,t,r,s)=>{for(var n=s>1?void 0:s?Nu(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Mu(t,r,n),n};function Ci(e,t={}){return(Rt.instance??Uu()).open(e,t)}function Uu(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function qu(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Rt=class extends Ne{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,s)=>r?s:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Rt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Rt.instance===this&&(Rt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Wt(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(r=>!r.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return j`
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
            ${this.message?j`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,r)=>j`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${r}`}
                      .checked=${this.selected[r]??!1}
                      @change=${()=>this.toggle(r)}
                    />
                    <label for=${`tsel-${r}`}>
                      <span class="name">${t.name}</span>
                      ${t.hidden?j`<span class="tag-hidden">hidden</span>`:""}
                      <span class="size">${qu(t.size)}</span>
                      ${t.detail?j`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};Rt.instance=null;Rt.styles=[Ht,Ye`
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
    `];ir([V()],Rt.prototype,"items",2);ir([V()],Rt.prototype,"selected",2);ir([V()],Rt.prototype,"heading",2);ir([V()],Rt.prototype,"message",2);ir([V()],Rt.prototype,"confirmLabel",2);Rt=ir([nt("table-select-dialog")],Rt);const Hu={name:"json-import",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"easyDBAccess built-ins"};function Wu(e){e.ui.registerImporter(Ku),e.ui.registerDropHandler(async t=>{const s=Zu(t).filter(ed);if(s.length===0)return!1;t.preventDefault();for(const n of s)await Vu(e,n);return!0})}const Ku={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=Ir(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function Vu(e,t){await ws(e,await t.text(),t.name)}async function ws(e,t,r,s={}){const n=e.workspaceId();if(!n)throw new Error("json-import: no active workspace");let o;try{o=JSON.parse(t)}catch(U){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${U.message}`)});return}const l=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",u=Ir(o,l);if(u.length===0)return;let h=u;if(u.length>1){const U=await Ci(u.map(re=>({name:re.name,size:re.rows.length})),{title:"Import tables",message:`"${r}" contains ${u.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!U)return;h=U.map(re=>u[re])}const g=(await e.store.tables.find()).filter(U=>U.workspaceId===n),$=new Set(h.map(U=>U.name)),w=g.filter(U=>$.has(U.name));let P;if(w.length===0&&h.length===1)P="append-new";else{const U=w.length>0?[`Overwrite matching (${w.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],re=await e.ui.dialogs.choice(`Importing ${h.length} table${h.length===1?"":"s"} from "${r}".${w.length>0?`

${w.length} table${w.length===1?"":"s"} share a name with existing data.`:""}`,U,"JSON import");if(!re)return;re.startsWith("Overwrite matching")?P="overwrite-matching":re==="Replace entire workspace"?P="replace-workspace":P="append-new"}const W=2e3,L=h.reduce((U,re)=>U+(re.source?0:Math.min(re.rows.length,s.maxRows??1/0)),0);let N=null;if(L>=W){const{TopProgress:U}=await Sn(async()=>{const{TopProgress:re}=await Promise.resolve().then(()=>Ol);return{TopProgress:re}},void 0);N=U.begin(`Importing ${r}…`)}try{if(P==="replace-workspace")for(const ce of g){const ge=e.store.rows(ce.id),Q=await ge.find();await ge.bulkRemove(Q.map(q=>q.id)),await e.store.tables.remove(ce.id)}const U=new Map(g.map(ce=>[ce.name,ce]));let re=0;for(const ce of h){const ge=ce.source,Q=ce.origin??(!ge&&s.originUrl?{type:"json",url:s.originUrl}:void 0);let q;const oe=P==="overwrite-matching"?U.get(ce.name):void 0;if(oe){if(q=oe.id,!oe.source){const $e=e.store.rows(q),ze=await $e.find();await $e.bulkRemove(ze.map(ke=>ke.id))}await e.store.tables.patch(q,{columns:ce.columns,...ce.windowGeometry?{windowGeometry:ce.windowGeometry}:{},...ce.sortColumn?{sortColumn:ce.sortColumn,sortAsc:ce.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},source:ge??void 0,origin:Q??void 0,updatedAt:Date.now()})}else q=Jo(),e.events.emit("import:before",{source:"json",tableId:q}),await e.store.tables.insert({id:q,workspaceId:n,name:ce.name,code:td(ce.name),columns:ce.columns,view:"table",...ce.windowGeometry?{windowGeometry:ce.windowGeometry}:{},...ce.sortColumn?{sortColumn:ce.sortColumn,sortAsc:ce.sortAsc??!0}:{},...ge?{source:ge}:{},...Q?{origin:Q}:{},updatedAt:Date.now()});let be=0;if(!ge){const $e=e.store.rows(q),ke=(s.maxRows!=null?ce.rows.slice(0,s.maxRows):ce.rows).map(m=>({id:Jo(),tableId:q,data:m,updatedAt:Date.now()}));await $e.bulkInsert(ke),be=ke.length,re+=be,N?.fraction(L>0?re/L:1)}e.events.emit("import:after",{source:"json",tableId:q,rowCount:be})}}finally{N?.done()}}function Ir(e,t){if(Dt(e)&&Yo(e))return Xo(e);if(Dt(e)&&Array.isArray(e.tables)){const r=e,s=[];for(const n of r.tables){if(Yu(n)){const o=n,l=Dt(o.windowGeometry)?o.windowGeometry:void 0,u=typeof o.sortColumn=="string"?o.sortColumn:void 0,h=typeof o.sortAsc=="boolean"?o.sortAsc:void 0,g=Dt(o.source)&&typeof o.source.type=="string"?o.source:void 0,$=Dt(o.origin)&&typeof o.origin.type=="string"&&typeof o.origin.url=="string"?o.origin:void 0;s.push({name:String(n.name),columns:n.columns.map(Xu),rows:Array.isArray(n.rows)?n.rows.filter(Dt):[],...l?{windowGeometry:l}:{},...u?{sortColumn:u,sortAsc:h??!0}:{},...g?{source:g}:{},...$?{origin:$}:{}});continue}Dt(n)&&Yo(n)&&s.push(...Xo(n))}return s}if(Array.isArray(e)){const r=e.filter(Dt);return r.length===0?[]:[{name:t,...Qo(r)}]}return Dt(e)?[{name:t,...Qo([e])}]:[]}function Yo(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!Dt(r))continue;const s=r;if(Array.isArray(s.dataArray)&&Array.isArray(s.columns))return!0}return!1}function Xo(e){const t=[];for(const[r,s]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!Dt(s))continue;const n=s;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const o=r.replace(/\.table\.json$/,""),l=n.columns.map($=>Gu($)),u=l.map($=>$.field),h=n.dataArray.filter($=>Array.isArray($)).map($=>{const w={};for(let P=0;P<u.length;P++)w[u[P]]=$[P];return w}),g={name:o,columns:l,rows:h};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const $=n.elementRect;g.windowGeometry={x:$.x,y:$.y,w:$.width??600,h:$.height??400,z:$.zIndex??100,minimized:!!$.minimized,maximized:!!$.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<u.length&&(g.sortColumn=u[n.sortColumn],g.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(g)}return t}function Gu(e){const t=String(e.field??"col"),r=String(e.name??t),s=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:s};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function Yu(e){return Dt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Xu(e){if(!Dt(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let s=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(s==="color"||s==="image")&&(n=n??s,s="string");const o={field:r,label:String(t.label??r),type:s};return n&&(o.renderer=n),typeof t.script=="string"&&(o.script=t.script),o}function Qo(e){const t=new Set;for(const n of e)for(const o of Object.keys(n))t.add(o);return{columns:Array.from(t).map(n=>({field:n,label:n,type:Qu(e.map(o=>o[n]))})),rows:e}}function Qu(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Ju(r))?"date":"string"}function Ju(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function Dt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Zu(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const s of Array.from(t.items))if(s.kind==="file"){const n=s.getAsFile();n&&r.push(n)}return r}return[]}function ed(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function td(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Jo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const nd=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:ws,init:Wu,meta:Hu,parsedToTables:Ir},Symbol.toStringTag,{value:"Module"}));class Mt extends Error{constructor(t,r){const s=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(s),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function gn(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),s={};for(const[u,h]of t.searchParams)s[u]=h;let n,o=null,l=null;if(r.length>=2){l=decodeURIComponent(r[r.length-1]),o=decodeURIComponent(r[r.length-2]);const u=r.slice(0,r.length-2).join("/");n=t.origin+(u?"/"+u:"")}else r.length===1&&(o=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:o,table:l,query:s}}function nr(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[s,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(s,String(n));return r.toString()}function rd(e){const t=e?.next_url??null,r=e?.next,s=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],o=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(u=>Array.isArray(u)&&o?Object.fromEntries(o.map((h,g)=>[h,u[g]])):u),nextUrl:t,nextToken:s,hasMore:t!=null||s!=null,truncated:e?.truncated===!0}}function sd(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function Zo(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],s={},n=e?.column_details;if(Array.isArray(n))for(const u of n)s[u.column??u.name]=u;else n&&typeof n=="object"&&Object.assign(s,n);for(const u of r)u in s||(s[u]={});const l=(r.length?r:Object.keys(s)).map(u=>{const h=s[u]||{},g=h.is_pk===!0||h.is_pk===1||t.includes(u),$={field:u,label:ol(u),type:sd(h.sqlite_type??h.type,u)};return(h.notnull===!0||h.notnull===1||g)&&($.notnull=!0),g&&($.unique=!0),(h.hidden===!0||h.hidden===1)&&($.hidden=!0),h.default!=null&&h.default!==""&&($.default=h.default),$});if(t.length===0){const u=l.filter(h=>h.unique).map(h=>h.field);u.length&&t.push(...u)}return{columns:l,pks:t}}function ol(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function Ps(e){const t=[],r=new Set;for(const s of e)for(const n of Object.keys(s))r.has(n)||(r.add(n),t.push(n));return t.map(s=>({field:s,label:ol(s),type:id(e.map(n=>n[s]))}))}function id(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&od(r))?"datetime":"string"}function od(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function ad(e){const t=new TextEncoder().encode(String(e));let r="";for(const s of t){const n=String.fromCharCode(s);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+s.toString(16).toUpperCase().padStart(2,"0")}return r}function ld(e,t){return!t||t.length===0?null:t.map(r=>ad(e[r])).join(",")}function cd(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const s of t){if(typeof s=="string"){r.push(s);continue}if(s&&typeof s=="object"&&typeof s.name=="string"){if(s.name==="_memory")continue;r.push(typeof s.route=="string"&&s.route?s.route:s.name)}}return r}function ud(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],s=[];for(const n of r){if(typeof n=="string"){s.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&s.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return s}async function _n(e,t){let r;try{r=await e(t)}catch(n){const o=n?.message||"network error";throw new Mt({error:`Couldn't reach ${t} (${o}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Mt(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const s=await r.json();if(s&&s.ok===!1)throw new Mt(s,r.status);return s}async function al(e,t){return cd(await _n(e,`${t}/-/databases.json`))}async function ea(e,t,r){return ud(await _n(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function Is(e,t){const r=nr(t,{_extra:"column_details"}),s=await _n(e,r);let{columns:n,pks:o}=Zo(s),l=!!s&&s.column_details!=null,u=s?.count??null,h=s;if(n.length===0){const g=nr(t,{_extra:"columns"}),$=await _n(e,g);({columns:n,pks:o}=Zo($)),l=!!$&&$.column_details!=null,u=$?.count??u,h=$}return{columns:n,pks:o,count:u,typed:l,raw:h}}async function Ei(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const r=await Is(e,t);return{db:t.db,table:t.table,count:r.count,hidden:!1,pks:r.pks}}function dd(e,t,r){const s=e&&typeof e=="object"?e:{},n=t&&r&&s.databases?.[t]?.tables?.[r]||t&&r&&s.databases?.[t]?.tables?.[r.toLowerCase()]||{},o=t&&s.databases?.[t]||{},l=L=>n[L]??o[L]??s[L],u={columns:{},units:{}};typeof n.sort=="string"&&(u.sort=n.sort),typeof n.sort_desc=="string"&&(u.sortDesc=n.sort_desc),typeof n.size=="number"&&(u.size=n.size),Array.isArray(n.sortable_columns)&&(u.sortableColumns=n.sortable_columns.slice()),typeof n.label_column=="string"&&(u.labelColumn=n.label_column),n.hidden===!0&&(u.hidden=!0),typeof n.description=="string"&&(u.description=n.description),typeof n.description_html=="string"&&(u.descriptionHtml=n.description_html);const h=l("source"),g=l("source_url"),$=l("license"),w=l("license_url"),P=l("about"),W=l("about_url");if(typeof h=="string"&&(u.source=h),typeof g=="string"&&(u.sourceUrl=g),typeof $=="string"&&(u.license=$),typeof w=="string"&&(u.licenseUrl=w),typeof P=="string"&&(u.about=P),typeof W=="string"&&(u.aboutUrl=W),n.columns&&typeof n.columns=="object")for(const[L,N]of Object.entries(n.columns))typeof N=="string"&&(u.columns[L]=N);if(n.units&&typeof n.units=="object")for(const[L,N]of Object.entries(n.units))typeof N=="string"&&(u.units[L]=N);return u}const ta=new Map;async function hd(e,t){let r=ta.get(t);return r||(r=_n(e,`${t}/-/metadata.json`).catch(()=>({})),ta.set(t,r)),r}async function Hi(e,t){const r=await hd(e,t.base);return dd(r,t.db,t.table)}function fd(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function Wi(e,t){const r=e.sortableColumns!=null?new Set(e.sortableColumns):null,s=t.map(u=>{const h=e.columns[u.field],g=e.units[u.field],$=r?r.has(u.field):void 0;return h==null&&g==null&&$===void 0?u:{...u,...h!=null?{description:h}:{},...g!=null?{units:g}:{},...$!==void 0?{sortable:$}:{}}}),n=new Set(t.map(u=>u.field)),o={};e.sort&&n.has(e.sort)?(o.sortColumn=e.sort,o.sortAsc=!0):e.sortDesc&&n.has(e.sortDesc)&&(o.sortColumn=e.sortDesc,o.sortAsc=!1);const l=fd(e);return l&&(o.info=l),e.labelColumn&&n.has(e.labelColumn)&&(o.labelColumn=e.labelColumn),{columns:s,patch:o}}function Ki(e,t){if(t.length===0)return e;const r=new Map(Ps(t).map(s=>[s.field,s.type]));return e.map(s=>{if(s.type!=="string")return s;const n=r.get(s.field);return n&&n!=="string"?{...s,type:n}:s})}async function Dr(e,t,r={}){const s=r.maxRows??1e4,o={_size:r.pageSize??1e3,...r.extraParams||{}};let l=r.startUrl??nr(t,o);const u=[];let h=!1,g=!1,$=0,w,P;for(;l;){let W;try{W=await _n(e,l)}catch(U){if(u.length===0&&!r.startUrl)throw U;w=U instanceof Mt&&U.status?`stopped after ${u.length} rows: HTTP ${U.status}`:`stopped after ${u.length} rows: ${U?.message??String(U)}`,g=!0,P=l;break}const L=rd(W);u.push(...L.rows),h=h||L.truncated,$+=1,r.onProgress?.(u.length);const N=L.nextUrl!=null?L.nextUrl:L.nextToken!=null?nr(t,{_next:L.nextToken}):null;N&&u.length<s&&L.rows.length>0?l=N:(g=N!=null&&L.rows.length>0,g&&(P=N??void 0),l=null)}return{rows:u,truncated:h,hasMore:g,pages:$,error:w,nextUrl:P}}function pd(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function ll(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function cl(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function Ds(e,t,r,s){let n;try{n=await e(t,{method:"POST",headers:pd(s),body:JSON.stringify(r)})}catch(l){throw new Mt({error:`Couldn't reach ${t} (${l?.message||"network error"}).`},0)}if(n&&n.ok===!1){let l=null;try{l=await n.json()}catch{}throw new Mt(l&&typeof l=="object"?l:{error:`HTTP ${n.status} for ${t}`},n.status)}const o=await n.json();if(o&&o.ok===!1)throw new Mt(o,n.status);return o}async function na(e,t,r,s={}){const n=await Ds(e,ll(t,"insert"),{rows:r,return:!0},s.token);return Array.isArray(n?.rows)?n.rows:[]}async function md(e,t,r,s,n={}){const o=await Ds(e,cl(t,r,"update"),{update:s,return:!0},n.token);return o&&typeof o.row=="object"&&o.row?o.row:Array.isArray(o?.rows)&&o.rows[0]?o.rows[0]:null}async function ra(e,t,r,s={}){await Ds(e,cl(t,r,"delete"),{},s.token)}async function gd(e,t,r,s={}){const n=await Ds(e,ll(t,"upsert"),{rows:r,return:!0},s.token);return Array.isArray(n?.rows)?n.rows:[]}async function bd(e,t){const r=nr(t,{_extra:"primary_keys"}),s=await _n(e,r);return Array.isArray(s?.primary_keys)?s.primary_keys:[]}async function ul(e,t){try{const r=await _n(e,nr(t,{_extra:"count"}));return typeof r?.count=="number"?r.count:null}catch{return null}}async function dl(e,t,r={}){const s=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,s);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const o=await n.json(),l=o?.datasette?.version??o?.version??null;let u=null;try{u=(await(await e(`${t}/-/actor.json`,s)).json())?.actor??null}catch{}return{reachable:!0,version:l,actor:u,writable:!!(r.token&&u)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function rr(e,t){return t?(r,s)=>{const n=(s??{}).headers??{};return e(r,{...s??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hl=Symbol.for(""),yd=e=>{if(e?.r===hl)return e?._$litStatic$},wd=e=>({_$litStatic$:e,r:hl}),sa=new Map,vd=e=>(t,...r)=>{const s=r.length;let n,o;const l=[],u=[];let h,g=0,$=!1;for(;g<s;){for(h=t[g];g<s&&(o=r[g],(n=yd(o))!==void 0);)h+=n+t[++g],$=!0;g!==s&&u.push(o),l.push(h),g++}if(g===s&&l.push(t[s]),$){const w=l.join("$$lit$$");(t=sa.get(w))===void 0&&(l.raw=l,sa.set(w,t=l)),r=u}return e(t,...r)},xd=vd(j);var $d=Object.defineProperty,kd=Object.getOwnPropertyDescriptor,Rs=(e,t,r,s)=>{for(var n=s>1?void 0:s?kd(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&$d(t,r,n),n};let Qt=class extends Ne{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r){return this.values=t,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(s=>{this.resolveFn=s,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),Qt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Qt.instance===this&&(Qt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(r=>r.value.toLowerCase().includes(e));return j`
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
      ${t.length===0?j`<div class="empty">No matching values.</div>`:j`<ul>
            ${t.slice(0,500).map(r=>j`
                <li
                  class=${r.value===this.current?"selected":""}
                  @click=${()=>this.close(r.value)}
                >
                  <span class="label">${r.value||j`<em>(empty)</em>`}</span>
                  <span class="count">${r.count}</span>
                </li>
              `)}
          </ul>`}
      ${this.values.length>500?j`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button class="text" @click=${()=>this.close({clear:!0})}>Clear filter</button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};Qt.instance=null;Qt.styles=[Jt,Ye`
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
    `];Rs([qt({type:Array})],Qt.prototype,"values",2);Rs([qt({type:String})],Qt.prototype,"current",2);Rs([V()],Qt.prototype,"search",2);Qt=Rs([nt("filter-popover")],Qt);var Cd=Object.defineProperty,Ed=Object.getOwnPropertyDescriptor,Zt=(e,t,r,s)=>{for(var n=s>1?void 0:s?Ed(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Cd(t,r,n),n};let jt=class extends Ne{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const s of this.options)if(s.toLowerCase().includes(t)&&(r.push(s),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return j`
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
        ${this.value?j`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${r=>r.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:me}
      </div>
      ${this.open?j`<ul class="dropdown" style=${t}>
            ${e.length===0?j`<li class="empty">No matching values.</li>`:e.map((r,s)=>j`
                    <li
                      class=${s===this.highlightIdx?"highlighted":""}
                      @mousedown=${n=>n.preventDefault()}
                      @click=${()=>this.onPick(r)}
                    >
                      ${r}
                    </li>
                  `)}
          </ul>`:me}
    `}};jt.styles=Ye`
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
  `;Zt([qt({type:String})],jt.prototype,"value",2);Zt([qt({type:Array})],jt.prototype,"options",2);Zt([qt({type:String})],jt.prototype,"placeholder",2);Zt([V()],jt.prototype,"open",2);Zt([V()],jt.prototype,"highlightIdx",2);Zt([V()],jt.prototype,"dropTop",2);Zt([V()],jt.prototype,"dropLeft",2);Zt([V()],jt.prototype,"dropMinWidth",2);Zt([V()],jt.prototype,"editing",2);Zt([Kn("input")],jt.prototype,"inputEl",2);jt=Zt([nt("filter-combobox")],jt);function Sd(e){const t=e.trim(),r=t.split(/\s+/).filter(Boolean);if(!r.some(u=>u==="AND"||u==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:r.map(u=>u.toLowerCase())};const n=[];let o=[];for(const u of r)u==="OR"?(n.push(o),o=[]):u==="AND"||o.push(u.toLowerCase());n.push(o);const l=n.filter(u=>u.length>0);return l.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:l}}function vs(e,t,r){const s=Sd(t);if(s.kind==="boolean")return e.filter(h=>s.groups.some(g=>g.every($=>r(h,$))));const{phrase:n,words:o}=s;if(o.length<=1)return n===""?e:e.filter(h=>r(h,n));const l=e.filter(h=>r(h,n));if(l.length>0)return l;const u=e.filter(h=>o.every(g=>r(h,g)));return u.length>0?u:e.filter(h=>o.some(g=>r(h,g)))}const xs="easydb:visible-count";function fl(e,t,r){e&&document.dispatchEvent(new CustomEvent(xs,{detail:{key:e,count:t,total:r}}))}function pl(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}var _d=Object.defineProperty,Ad=Object.getOwnPropertyDescriptor,ut=(e,t,r,s)=>{for(var n=s>1?void 0:s?Ad(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&_d(t,r,n),n};function ia(e,t){return Object.values(e.data).some(r=>r!=null&&String(r).toLowerCase().includes(t))}const Td=200;let rt=class extends Ne{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.()}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells(),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,r=this.rows.length;t===this.lastEmittedCount&&r===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=r,fl(e,t,r))}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",Pd(t))}async bind(){if(!this.tableId)return;const e=await ye(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const o=n.find(l=>l.id===this.tableId);o&&(this.tableColumns=o.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(n=>{const o=n.find(l=>l.id===this.viewInstanceId);o&&(this.viewInst=o,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const o=n.find(l=>l.id===this.tableId);o&&this.applyTable(o)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const s=window.setTimeout(()=>this.loading=!0,Td);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(s),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(s=>[s.field,s])),r=e.columnWidths??{};this.columns=e.visibleColumns.map(s=>t.get(s)).filter(s=>!!s).map(s=>{const n=r[s.field];return typeof n=="number"?{...s,width:n}:s}),this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,r){const s=await ye();await this.commitCell(s,e,t,r)}async commitCell(e,t,r,s){const n=this.columns.find(o=>o.field===r);if(n){const o=Id(n,s,this.rows,t.id);if(o){await e.api.ui.dialogs.alert(o,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:s},updatedAt:Date.now()})}catch(o){await e.api.ui.dialogs.alert(o?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const r=e.target;typeof t=="boolean"?r.checked=t:r.value=t,r.blur()}renderCell(e,t){const r=e.data[t.field],s=t.renderer,n=s?this.cellRenderers?.get(s):void 0;if(n){const o=wd(n);return xd`<${o}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        @change=${l=>this.setCell(e,t.field,l.detail.value)}
      ></${o}>`}switch(t.type){case"boolean":{const o=r===!0||r==="true"||r===1||r==="1";return j`<input
          type="checkbox"
          .checked=${o}
          @keydown=${l=>this.cancelCellEdit(l,o)}
          @change=${l=>this.setCell(e,t.field,l.target.checked)}
        />`}case"date":return j`<input
          type="date"
          .value=${oa(r)}
          @keydown=${o=>this.cancelCellEdit(o,oa(r))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"datetime":return j`<input
          type="datetime-local"
          .value=${aa(r)}
          @keydown=${o=>this.cancelCellEdit(o,aa(r))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"number":return j`<input
          type="number"
          .value=${r==null?"":String(r)}
          @keydown=${o=>this.cancelCellEdit(o,r==null?"":String(r))}
          @change=${o=>{const l=o.target.value;this.setCell(e,t.field,l===""?null:Number(l))}}
        />`;default:return j`<input
          type="text"
          .value=${String(r??"")}
          @keydown=${o=>this.cancelCellEdit(o,String(r??""))}
          @change=${o=>this.setCell(e,t.field,o.target.value)}
        />`}}async deleteRow(e){const t=await ye();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await ye(),s=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,s):await r.store.tables.patch(this.tableId,s)}filteredRows(){const e=Object.entries(this.filters).filter(([,n])=>n&&n.trim().length>0),t=this.globalQuery.trim(),r=this.localQuery.trim();if(e.length===0&&t.length===0&&r.length===0)return this.rows;let s=this.rows;return e.length>0&&(s=s.filter(n=>e.every(([o,l])=>String(n.data[o]??"").toLowerCase().includes(l.toLowerCase())))),r&&(s=vs(s,r,ia)),t&&(s=vs(s,t,ia)),s}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,s=this.columns.find(l=>l.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,o=[...e];return o.sort((l,u)=>{const h=l.data[t],g=u.data[t],$=W=>W==null?0:W===""?1:2,w=$(h),P=$(g);return w!==2||P!==2?(w-P)*n:Dd(h,g,s)*n}),o}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,s=Qt.instance;if(!s)return;const n=new Map;for(const u of this.rowsFacetedFor(t)){const h=u.data[t];if(h==null)continue;const g=String(h);n.set(g,(n.get(g)??0)+1)}const o=[...n.entries()].map(([u,h])=>({value:u,count:h})).sort((u,h)=>h.count-u.count||u.value.localeCompare(h.value)),l=await s.open(r.getBoundingClientRect(),o,this.filters[t]??"");l!==null&&(typeof l=="object"&&"clear"in l?this.onFilterInput(t,""):typeof l=="string"&&this.onFilterInput(t,l))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,s])=>s&&s.trim().length>0&&r!==e).map(([r,s])=>[r,s.trim().toLowerCase()]);return t.length===0?this.rows:this.rows.filter(r=>t.every(([s,n])=>String(r.data[s]??"").toLowerCase().includes(n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,s=500;for(const n of this.visibleColumns){let o=!0;for(const u of t){const h=u.data[n.field];if(h==null)continue;if((typeof h=="string"?h:String(h)).length>=r){o=!1;break}}if(!o)continue;const l=new Set;for(const u of this.rowsFacetedFor(n.field)){const h=u.data[n.field];if(h==null||h==="")continue;const g=typeof h=="string"?h:String(h);if(!(g.length>=r)&&(l.add(g),l.size>=s))break}e.set(n.field,[...l].sort())}return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),r=this.visibleColumns,s=new Map;r.forEach((n,o)=>{if(n.width!=null)return;const l=t[o];l&&s.set(n.field,Math.round(l.getBoundingClientRect().width))}),s.size!==0&&(this.columns=this.columns.map(n=>s.has(n.field)?{...n,width:s.get(n.field)}:n))}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const s=r.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:s};const n=l=>{if(!this.resizing)return;const u=l.clientX-this.resizing.startX,h=Math.max(40,this.resizing.startW+u);this.columns=this.columns.map(g=>g.field===this.resizing.field?{...g,width:h}:g)},o=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",o);const l=this.resizing?.field;if(this.resizing=null,!l)return;const u=await ye();if(this.viewMode){const h={...this.viewInst?.columnWidths??{}};for(const g of this.columns)typeof g.width=="number"&&(h[g.field]=g.width);await u.store.viewInstances.patch(this.viewInstanceId,{columnWidths:h,updatedAt:Date.now()})}else await u.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",o)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const s=r.getBoundingClientRect(),n=e.clientX<s.left+s.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,s=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!s)return;const n=[...this.columns],o=n.findIndex(g=>g.field===r);if(o<0)return;const[l]=n.splice(o,1);let u=n.findIndex(g=>g.field===t);if(u<0){n.splice(o,0,l);return}s==="after"&&(u+=1),n.splice(u,0,l);const h=await ye();this.viewMode?await h.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:n.map(g=>g.field),updatedAt:Date.now()}):await h.store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await ye(),t={};for(const[s,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[s]=n);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,s=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,s+r);return{slice:e.slice(s,n),topPad:s*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:r,topPad:s,bottomPad:n}=this.virtualSlice(e),o=this.computeFilterSuggestions(),l=this.externalLoading?this.externalProgress:null;return j`
      ${this.loading||this.externalLoading?j`<div
            class="load-bar"
            role="progressbar"
            aria-label="Loading rows"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${l!=null?Math.round(l*100):me}
          >
            <div
              class="load-bar-fill ${l!=null?"determinate":""}"
              style=${l!=null?`width:${Math.max(2,Math.round(l*100))}%`:me}
            ></div>
          </div>`:me}
      <table style=${t.some(u=>u.width!=null)?"table-layout: fixed":me}>
        <colgroup>
          ${t.map(u=>j`<col style=${u.width!=null?`width: ${u.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(u=>{const h=u.sortable!==!1,g=this.sortColumn===u.field&&this.sortDir,$=h?g==="asc"?"▲":g==="desc"?"▼":"⇅":"",w=`t-${u.type}`,P=this.dragSourceField===u.field,W=this.dropTargetField===u.field,L=W&&this.dropEdge==="before"?" drop-before":W&&this.dropEdge==="after"?" drop-after":"",N=(u.description?`${u.description}
`:"")+(u.units?`Units: ${u.units}
`:"")+`${u.field} — ${h?"click to sort, ":"not sortable · "}drag to reorder`;return j`
                <th
                  class=${`${w}${g?" sorted":""}${P?" drag-source":""}${L}${h?"":" no-sort"}`}
                  title=${N}
                  @click=${()=>h&&this.toggleSort(u.field)}
                  @dragover=${U=>this.onColDragOver(U,u.field,U.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(u.field)}
                  @drop=${U=>this.onColDrop(U,u.field)}
                >
                  <div class="col-head">
                    <span
                      class="col-grip mi sm"
                      title="Drag to reorder column"
                      draggable="true"
                      @click=${U=>U.stopPropagation()}
                      @dragstart=${U=>this.onColDragStart(U,u.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label"
                      >${u.label}${u.units?j`<span class="col-units"> (${u.units})</span>`:""}</span
                    ><span class="sort-icon">${$}</span>
                    <button
                      class=${`funnel${this.filters[u.field]?" active":""}`}
                      title="Filter by value"
                      @click=${U=>this.openFilterPicker(U,u.field)}
                    >
                      <span class="mi sm">filter_list</span>
                    </button>
                  </div>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${U=>U.stopPropagation()}
                    @pointerdown=${U=>this.onResizeStart(U,u.field,U.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:2rem"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(u=>{const h=o.get(u.field)??[];return j`
                <th>
                  <filter-combobox
                    .value=${this.filters[u.field]??""}
                    .options=${h}
                    placeholder="filter…"
                    @filter-change=${g=>this.onFilterInput(u.field,g.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${s>0?j`<tr class="spacer" style=${`height:${s}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${r.map(u=>j`
              <tr>
                ${t.map(h=>j`<td class=${`t-${h.type}${h.renderer?` r-${h.renderer}`:""}`}>
                      ${this.renderCell(u,h)}
                    </td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(u.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?j`<tr class="spacer" style=${`height:${n}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};rt.styles=[Jt,Ye`
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
      }
      .mi.sm {
        font-size: 1rem;
      }
    `];ut([qt({type:String})],rt.prototype,"tableId",2);ut([qt({type:String})],rt.prototype,"viewInstanceId",2);ut([V()],rt.prototype,"columns",2);ut([V()],rt.prototype,"rows",2);ut([V()],rt.prototype,"sortColumn",2);ut([V()],rt.prototype,"sortDir",2);ut([V()],rt.prototype,"filters",2);ut([V()],rt.prototype,"globalQuery",2);ut([V()],rt.prototype,"localQuery",2);ut([V()],rt.prototype,"dragSourceField",2);ut([V()],rt.prototype,"dropTargetField",2);ut([V()],rt.prototype,"dropEdge",2);ut([V()],rt.prototype,"resizing",2);ut([V()],rt.prototype,"cellRenderers",2);ut([V()],rt.prototype,"scrollY",2);ut([V()],rt.prototype,"viewportHeight",2);ut([V()],rt.prototype,"loading",2);ut([V()],rt.prototype,"externalLoading",2);ut([V()],rt.prototype,"externalProgress",2);rt=ut([nt("data-table")],rt);function Pd(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function Id(e,t,r,s){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(o=>o.id!==s&&o.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function oa(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function aa(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const s=new Date(t);if(Number.isNaN(s.getTime()))return"";const n=s.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function Dd(e,t,r){switch(r){case"number":{const s=Number(e),n=Number(t);return Number.isNaN(s)||Number.isNaN(n)?String(e).localeCompare(String(t)):s-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const s=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(s)||Number.isNaN(n)?String(e).localeCompare(String(t)):s-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function on(e,t,r){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:r}}))}function ml(e,t,r=[]){const s=new Set(e.map(u=>u.field)),n=new Set(r),o=[...e],l=[];for(const u of t)s.has(u.field)||n.has(u.field)||(o.push(u),l.push(u.field),s.add(u.field));return{columns:o,newFields:l}}class Rd extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function gl(e){return`datasette:token:${e}`}function Od(e,t){for(const[r,s]of Object.entries(t))if(r!=="data"&&e[r]!==s)return!1;return!0}function jd(e,t){const r=e.source,s=r?.config??{},n={base:s.base,db:s.db,table:s.table,query:{}},o=Array.isArray(s.pks)&&s.pks.length>0?s.pks:["rowid"],l=r?.writable===!0,u=s.maxRows??1e4,h=s.pollIntervalMs??0,g=(Q,q)=>t.backend.fetch(Q,q);async function $(){const q=(await t.settings.findOne(gl(s.base)))?.value;return typeof q=="string"&&q.length>0?q:void 0}const w=async(Q,q)=>rr(g,await $())(Q,q);function P(Q){return{id:ld(Q,o)??Fd(),tableId:e.id,data:Q,updatedAt:Date.now()}}function W(Q){if(!l)throw new Rd(Q)}function L(Q){const q={};for(const[oe,be]of Object.entries(Q))o.includes(oe)||(q[oe]=be);return q}const N=new Set;let U=[],re=!1,ce=null;function ge(){return ce||(ce=(async()=>{try{const{rows:Q}=await Dr(w,n,{maxRows:u});U=Q.map(P),re=!0;for(const q of N)q(U);return U}finally{ce=null}})(),ce)}return{async find(Q){const q=re?U:await ge();return!Q||Object.keys(Q).length===0?q:q.filter(oe=>Od(oe,Q))},async findOne(Q){return(re?U:await ge()).find(oe=>oe.id===Q)??null},async insert(Q){W("insert");const[q]=await na(w,n,[Q.data]),oe=P(q??Q.data);return t.events.emit("row:created",{tableId:e.id,row:oe}),ge(),oe},async bulkInsert(Q){if(Q.length===0)return[];W("insert");const q=await na(w,n,Q.map(be=>be.data)),oe=(q.length?q:Q.map(be=>be.data)).map(P);return ge(),oe},async upsert(Q){W("upsert");const[q]=await gd(w,n,[Q.data]),oe=P(q??Q.data);return ge(),oe},async patch(Q,q){W("update");const oe=q.data,be=L(oe??{}),$e=await md(w,n,Q,be),ze=P($e??{...oe??{}});return t.events.emit("row:updated",{tableId:e.id,row:ze,prev:ze}),ge(),ze},async remove(Q){W("delete"),await ra(w,n,Q),t.events.emit("row:deleted",{tableId:e.id,rowId:Q}),ge()},async bulkRemove(Q){if(Q.length!==0){W("delete");for(const q of Q)await ra(w,n,q);ge()}},subscribe(Q){N.add(Q),re?Q(U):ge();let q=null;return h>0&&(q=setInterval(()=>void ge(),h)),()=>{N.delete(Q),q&&clearInterval(q)}},async refresh(){await ge()}}}function Fd(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var zd=Object.defineProperty,Ld=Object.getOwnPropertyDescriptor,Rr=(e,t,r,s)=>{for(var n=s>1?void 0:s?Ld(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&zd(t,r,n),n};const Bd="https://latest.datasette.io/ephemeral";let Nt=class extends Ne{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,r)}catch(s){this.status=s?.message??String(s),this.statusKind="err";return}}this.finish({url:t,token:r})}}connectedCallback(){super.connectedCallback(),Nt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Nt.instance===this&&(Nt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Wt(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return j`
      <dialog @cancel=${this.onCancel} @keydown=${In}>
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
                placeholder="e.g. ${Bd}"
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
    `}};Nt.instance=null;Nt.styles=[Ht,Ye`
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
    `];Rr([V()],Nt.prototype,"url",2);Rr([V()],Nt.prototype,"token",2);Rr([V()],Nt.prototype,"status",2);Rr([V()],Nt.prototype,"statusKind",2);Nt=Rr([nt("datasette-connect-dialog")],Nt);const $s=e=>e.replace(/^https?:\/\//,""),Md=e=>new Promise(t=>setTimeout(t,e));function Nd(){const e=globalThis.__eda_resumeDelayMs;return typeof e=="number"&&e>=0?e:6e4}function Ud(e,t,r){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(r)}`}function Vi(e,t,r,s){const n={...e.info??{}};return!n.source&&!n.sourceUrl&&(n.source=`${$s(t)}/${r}/${s}`,n.sourceUrl=Ud(t,r,s)),{...e,info:n}}function Gi(e,t,r,s){if(!(!e||!t))return{nextUrl:t,loadedRows:r,...s!=null?{totalCount:s}:{}}}async function bl(e,t,r,s={}){if(t.db&&t.table)return[await Ei(e,t)];let n=[];if(t.db){if(n.push(...await ea(e,t.base,t.db)),s.skipPicker)return n.filter(u=>!u.hidden)}else{const u=await al(e,t.base);if(u.length===0)return[];let h=u;if(u.length>1){const g=await Ci(u.map($=>({name:$,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${$s(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!g)return null;h=g.map($=>u[$])}for(const g of h)try{n.push(...await ea(e,t.base,g))}catch{}}if(n.length===0)return[];const o=new Set(n.map(u=>u.db)).size>1,l=await Ci(n.map(u=>({name:o?`${u.db}/${u.table}`:u.table,size:u.count,detail:o?void 0:u.db,hidden:u.hidden})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${$s(t.base)}.`,confirmLabel:r});return l?l.map(u=>n[u]):null}const qd='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Hd={name:"datasette-source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"easyDBAccess built-ins",optional:!0},Bt={maxImportRows:1e4,pageSize:1e3},Wd="https://latest.datasette.io/fixtures/facetable";function Kd(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:qd,tooltip:"Connect a live, editable Datasette table",onClick:()=>Jd(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>nh(t,r)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:r})=>sh(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:jd}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const s=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Wd}`,"","Import from Datasette");s&&await la(t,s)}}),e.ui.registerDropHandler(async(t,r)=>{const s=t.dataTransfer?.getData("text/plain")||"";return Vd(s)?(t.preventDefault(),await la(r,s),!0):!1})}async function la(e,t){try{await Yi(e,t)}catch(r){let s;r instanceof Mt?s=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:s=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(s,"Datasette import failed")}}function Vd(e){try{const t=gn(e);return!!(t.db&&t.table)}catch{return!1}}function Gd(e,t){if(!e.has(t))return t;for(let r=2;;r++){const s=`${t} (${r})`;if(!e.has(s))return s}}async function Yi(e,t,r={}){const s=e.workspaceId();if(!s)throw new Error("datasette-source: no active workspace");const n=gn(t),l=await bl(L=>e.backend.fetch(L),n,"Import",{skipPicker:r.skipTablePicker});if(l===null)return;if(l.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const u=[];let h=0;for(const L of l){const N={base:n.base,db:L.db,table:L.table,query:{}},U=await Yd(e,s,N);if(U.skipped){h+=1;continue}u.push({tableId:U.tableId,ref:N,overwrite:U.overwrite,knownCount:L.count})}let g=0,$=0;const w=[],P=[],W=[];for(const L of u)try{const N=await Xd(e,L.tableId,L.ref,L.overwrite,L.knownCount);g+=1,$+=N.rowCount,N.error?P.push(`${L.ref.db}/${L.ref.table} (${N.error})`):(N.hasMore||N.truncated)&&w.push(`${L.ref.db}/${L.ref.table}`)}catch(N){W.push(`${L.ref.db}/${L.ref.table}: ${N?.message??String(N)}`)}Qd(e,{imported:g,skipped:h,totalRows:$,capped:w,partial:P,failed:W,requested:l.length})}async function Yd(e,t,r){const s=`${r.db}/${r.table}`,n={type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},o=(await e.store.tables.find()).filter(g=>g.workspaceId===t),l=o.find(g=>g.name===s);let u=s;if(l){const g=await e.ui.dialogs.choice(`A table named "${s}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!g||g==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(g==="Overwrite")return await e.store.tables.patch(l.id,{origin:n,updatedAt:Date.now()}),{tableId:l.id,overwrite:!0};u=Gd(new Set(o.map($=>$.name)),s)}const h=Or();return await e.store.tables.insert({id:h,workspaceId:t,name:u,code:wl(`${r.db}-${r.table}`),columns:[],view:"table",origin:n,updatedAt:Date.now()}),{tableId:h,overwrite:!1}}async function Xd(e,t,r,s,n=null){const o=`${r.db}/${r.table}`,l=u=>e.backend.fetch(u);on(t,!0);try{let u=[],h=n,g=!1;try{const b=await Is(l,r);u=b.columns,h=h??b.count,g=b.typed}catch{}h==null&&(h=await ul(l,r));const $=h&&h>0?Math.min(h,Bt.maxImportRows):0,w=[];let P=!1,W=!1,L=0,N,U,re;for(;;){const b=await Dr(l,r,{maxRows:Math.max(0,Bt.maxImportRows-w.length),pageSize:Bt.pageSize,...re?{startUrl:re}:{},onProgress:ue=>{$>0&&on(t,!0,Math.min(1,(w.length+ue)/$))}});if(w.push(...b.rows),P=P||b.truncated,L+=b.pages,W=b.hasMore,N=b.error,U=b.nextUrl,!b.error||!b.nextUrl||w.length>=Bt.maxImportRows||await e.ui.dialogs.choice(`Import of "${o}" paused after ${w.length.toLocaleString()} rows (${b.error}). Datasette may be rate-limiting a large import. Wait 60 seconds and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,["Resume in 60s","Cancel"],"Import paused — rate limited?")!=="Resume in 60s")break;on(t,!0),e.ui.dialogs.toast(`Resuming "${o}" in 60s…`,{kind:"info",title:"Import paused"}),await Md(Nd()),re=b.nextUrl,N=void 0,U=void 0}let ge=u.length===0?Ps(w):g?u:Ki(u,w),Q={};try{const b=await Hi(l,r),C=Wi(b,ge);ge=C.columns,Q=C.patch}catch{}Q=Vi(Q,r.base,r.db,r.table);const q=await e.store.tables.findOne(t),oe=q?.columns??[],be=oe.length===0,{columns:$e}=ml(oe,ge,q?.deletedColumns),ze=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const ke=Gi(N,U,w.length,h),m=be?{columns:$e,...Q,importResume:ke,updatedAt:ze}:{columns:$e,...Q.info?{info:Q.info}:{},importResume:ke,updatedAt:ze};await e.store.tables.patch(t,m);const v=e.store.rows(t);if(s){const b=await v.find();await v.bulkRemove(b.map(C=>C.id))}const E=w.map(b=>({id:Or(),tableId:t,data:b,updatedAt:ze}));return await v.bulkInsert(E),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:w.length}),{name:o,rowCount:w.length,hasMore:W,truncated:P,pages:L,count:h,error:N}}finally{on(t,!1)}}function Qd(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,s=`${t.imported} table${t.imported===1?"":"s"}`,n=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${s} (${r});${n} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${s} (${r}).${n} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${s} (${r}).${n} ${t.capped.length} capped at ${Bt.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${s} (${r}) from Datasette.${n}`,{kind:"success",title:"Datasette import"})}async function Jd(e){const t=Nt.instance??Zd(),r=(n,o)=>e.backend.fetch(n,o),s=await t.open({initialUrl:"https://datasette.io",async onTest(n,o){const l=gn(n),u=await dl(r,l.base,{token:o||void 0});if(l.db&&l.table){await Ei(rr(r,o||void 0),l);const g=u.version?` (Datasette ${u.version})`:"";return u.writable?`Reachable${g} — table found, signed in, read-write.`:`Reachable${g} — table found, read-only (no token / not authenticated).`}if(!u.reachable)return`Unreachable: ${u.error??"no response"}`;const h=u.version?` (Datasette ${u.version})`:"";return u.writable?`Reachable${h} — signed in, read-write.`:`Reachable${h} — read-only (no token / not authenticated).`},async onConnect(n,o){const l=gn(n);l.db&&l.table&&await Ei(rr(r,o||void 0),l)}});if(s)try{await yl(e,s.url,s.token)}catch(n){const o=n instanceof Mt?n.message:n?.message??String(n);await e.ui.dialogs.alert(o,"Connect Datasette failed")}}function Zd(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function yl(e,t,r){const s=e.workspaceId();if(!s)throw new Error("datasette-source: no active workspace");const n=gn(t),o=(w,P)=>e.backend.fetch(w,P),l=rr(o,r||void 0),u=await dl(o,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:gl(n.base),value:r});let h;try{h=await bl(l,n,"Connect")}catch(w){const P=w instanceof Mt?w.message:w?.message??String(w);throw new Error(`Couldn't read tables from ${$s(n.base)}: ${P}`)}if(h===null)return;if(h.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const g=[];for(const w of h){const P=await eh(e,s,n.base,w,u.writable,r);g.push({tableId:P,c:w})}const $=u.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${g.length} live table${g.length===1?"":"s"} from Datasette (${$}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:w,c:P}of g)th(e,w,n.base,P,r)}async function eh(e,t,r,s,n,o){const l=(await e.store.tables.find()).find($=>{const w=$.source?.config;return $.workspaceId===t&&$.source?.type==="datasette"&&w?.base===r&&w?.db===s.db&&w?.table===s.table});let u=s.pks??[];if(u.length===0){const $=rr((w,P)=>e.backend.fetch(w,P),o||void 0);try{u=await bd($,{base:r,db:s.db,table:s.table,query:{}})}catch{u=[]}}const h=l?.id??Or(),g={...l??{},id:h,workspaceId:t,name:`${s.db}/${s.table}`,code:wl(`${s.db}-${s.table}`),columns:l?.columns??[],view:l?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:s.db,table:s.table,pks:u}},updatedAt:Date.now()};return l?await e.store.tables.upsert(g):await e.store.tables.insert(g),h}async function th(e,t,r,s,n){const o={base:r,db:s.db,table:s.table,query:{}},l=rr((u,h)=>e.backend.fetch(u,h),n||void 0);try{let u=[],h=!1;try{const N=await Is(l,o);u=N.columns,h=N.typed}catch{}const{rows:g}=await Dr(l,o,{maxRows:50,pageSize:50}),$=u.length===0?Ps(g):h?u:Ki(u,g);if($.length===0)return;const w=await e.store.tables.findOne(t);if(!w)return;const P=w.source?.config?.pks??[];let W=$.map(N=>P.includes(N.field)?{...N,unique:!0,notnull:!0}:N),L={};try{const N=await Hi(l,o),U=Wi(N,W);W=U.columns,L=U.patch}catch{}L=Vi(L,o.base,s.db,s.table),await e.store.tables.patch(t,{columns:W,...L,updatedAt:Date.now()})}catch{}}async function nh(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const s=e.store.rows(t);typeof s.refresh=="function"&&await s.refresh();const n=await s.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await rh(e,r)}catch(s){const n=s instanceof Mt?s.message:s?.message??String(s);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function rh(e,t){const r=gn(t.origin.url),s=h=>e.backend.fetch(h);on(t.id,!0);let n,o=[];try{let h=[],g=null,$=!1;try{const ke=await Is(s,r);h=ke.columns,g=ke.count,$=ke.typed}catch{}g==null&&(g=await ul(s,r));const w=g&&g>0?Math.min(g,Bt.maxImportRows):0,{rows:P,hasMore:W,truncated:L,error:N,nextUrl:U}=await Dr(s,r,{maxRows:Bt.maxImportRows,pageSize:Bt.pageSize,onProgress:ke=>{w>0&&on(t.id,!0,Math.min(1,ke/w))}});let re=h.length===0?Ps(P):$?h:Ki(h,P),ce={};try{const ke=await Hi(s,r),m=Wi(ke,re);re=m.columns,ce=m.patch}catch{}ce=Vi(ce,r.base,r.db,r.table);const ge=t.columns.length===0,Q=ml(t.columns,re,t.deletedColumns);o=Q.newFields;const q=Date.now(),oe=Gi(N,U,P.length,g),be=ge?{columns:Q.columns,...ce,importResume:oe,updatedAt:q}:{columns:Q.columns,...ce.info?{info:ce.info}:{},importResume:oe,updatedAt:q};await e.store.tables.patch(t.id,be);const $e=e.store.rows(t.id),ze=await $e.find();await $e.bulkRemove(ze.map(ke=>ke.id)),await $e.bulkInsert(P.map(ke=>({id:Or(),tableId:t.id,data:ke,updatedAt:q}))),n={rowCount:P.length,hasMore:W,truncated:L,error:N}}finally{on(t.id,!1)}const l=[];n.error?l.push(`partial (${n.error})`):(n.hasMore||n.truncated)&&l.push(`capped at ${Bt.maxImportRows}`),o.length>0&&l.push(`${o.length} new column${o.length===1?"":"s"}`);const u=l.length?` — ${l.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${n.rowCount} rows from ${r.db}/${r.table}${u}.`,{kind:n.error||n.hasMore||n.truncated||o.length>0?"warning":"success",title:"Refresh"}),o.length>0&&ih(t.id,r,o)}async function sh(e,t){const r=await e.store.tables.findOne(t),s=r?.importResume;if(!r||!r.origin?.url||!s)return;const n=gn(r.origin.url),o=P=>e.backend.fetch(P),l=s.loadedRows,u=s.totalCount??null,h=u&&u>0?Math.min(u,Bt.maxImportRows):0;on(t,!0,h>0?Math.min(1,l/h):void 0);let g=0,$;try{const P=await Dr(o,n,{startUrl:s.nextUrl,maxRows:Math.max(0,Bt.maxImportRows-l),pageSize:Bt.pageSize,onProgress:N=>{h>0&&on(t,!0,Math.min(1,(l+N)/h))}});g=P.rows.length;const W=Date.now();await e.store.rows(t).bulkInsert(P.rows.map(N=>({id:Or(),tableId:t,data:N,updatedAt:W}))),$={error:P.error,nextUrl:P.nextUrl};const L=Gi(P.error,P.nextUrl,l+g,u);await e.store.tables.patch(t,{importResume:L,updatedAt:W})}catch(P){const W=P instanceof Mt?P.message:P?.message??String(P);e.ui.dialogs.toast(`Couldn't resume ${n.db}/${n.table}: ${W}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{on(t,!1)}const w=l+g;$.error?e.ui.dialogs.toast(`Resumed ${n.db}/${n.table}: +${g} rows (${w} total) — interrupted again (${$.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${n.db}/${n.table}: +${g} rows (${w} total).`,{kind:"success",title:"Resume import"})}function ih(e,t,r){const s=r.join(", "),n=r.length!==1,o=`Refreshing ${t.db}/${t.table} revealed ${r.length} new column${n?"s":""}: ${s}. Review, reorder or hide ${n?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:o}}))}function wl(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Or(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const oh=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:yl,importDatasette:Yi,init:Kd,meta:Hd},Symbol.toStringTag,{value:"Module"})),ah={name:"sql-export",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"easyDBAccess built-ins"};function lh(){}async function vl(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),s=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const o=await e.store.rows(n.id).find();s.push(ch(n,o),"")}return s.push("COMMIT;",""),s.join(`
`)}function ch(e,t){const r=Si(e.code||e.name||`table_${e.id}`),s=['  "__id" TEXT PRIMARY KEY',...e.columns.map(o=>`  ${uh(o)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,s.join(`,
`),");"];if(t.length>0){const l=["__id",...e.columns.map(u=>u.field)].map(u=>`"${Si(u)}"`).join(", ");for(const u of t){const h=[ca(u.id),...e.columns.map(g=>ca(u.data[g.field],g.type))];n.push(`INSERT INTO "${r}" (${l}) VALUES (${h.join(", ")});`)}}return n.join(`
`)}function uh(e){const t=[`"${Si(e.field)}"`,dh(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function dh(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function ca(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=hh(e);return r===null?"NULL":ls(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?ls(e.toISOString()):ls(typeof e=="string"?e:JSON.stringify(e))}function hh(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?ua(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const s=new Date(t);return Number.isFinite(s.getTime())?ua(s):null}return null}function ua(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${s}`}function ls(e){return`'${e.replace(/'/g,"''")}'`}function Si(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const fh=Object.freeze(Object.defineProperty({__proto__:null,init:lh,meta:ah,serializeWorkspaceAsSql:vl},Symbol.toStringTag,{value:"Module"})),ph={name:"dump-export",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"easyDBAccess built-ins"};function mh(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,r)=>{const s=t.workspaceId();if(!s)return;const{AnchoredMenu:n}=await Sn(async()=>{const{AnchoredMenu:u}=await import("./anchored-menu-_4hRdvuK.js");return{AnchoredMenu:u}},[]),o=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),l=await n.open(o,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(l)try{if(l==="json"){const u=await Os(t);await t.backend.saveFile(`workspace-${s}.db.json`,u,"application/json")}else if(l==="sql"){const u=await vl(t);await t.backend.saveFile(`workspace-${s}.sql`,u,"application/sql")}}catch(u){t.ui.dialogs.toast(`Export failed: ${u.message}`,{kind:"error",title:"Export"})}}})}async function Os(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),s={workspaceId:t,exportedAt:Date.now(),tables:[]};for(const n of r){const o=await e.store.rows(n.id).find();s.tables.push({name:n.name,columns:n.columns,rows:o.map(l=>l.data),...n.windowGeometry?{windowGeometry:n.windowGeometry}:{},...n.sortColumn?{sortColumn:n.sortColumn,sortAsc:n.sortAsc??!0}:{},...n.source?{source:n.source}:{},...n.origin?{origin:n.origin}:{}})}return JSON.stringify(s,null,2)}const gh=Object.freeze(Object.defineProperty({__proto__:null,init:mh,meta:ph,serializeWorkspace:Os},Symbol.toStringTag,{value:"Module"})),bh={name:"gist-sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"easyDBAccess built-ins"},yh="gist:",wh=["gist:","datasette:token:","server-sync:"];function xl(e){return!wh.some(t=>e.startsWith(t))}const da='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function vh(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).'}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:da,tooltip:"Gist sync — push, pull, share…",onClick:async(t,r)=>{const{AnchoredMenu:s}=await Sn(async()=>{const{AnchoredMenu:l}=await import("./anchored-menu-_4hRdvuK.js");return{AnchoredMenu:l}},[]),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await s.open(n,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"settings",label:"Settings",icon:"settings"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(o)try{o==="push"?await Eh(t):o==="pull"?await Cl(t):o==="settings"?await $h(t):o==="share"?await kh(t):o==="view"&&await Ch(t)}catch(l){t.ui.dialogs.toast(`Gist ${o} failed: ${l.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:da,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,r)=>{const{AnchoredMenu:s}=await Sn(async()=>{const{AnchoredMenu:l}=await import("./anchored-menu-_4hRdvuK.js");return{AnchoredMenu:l}},[]),n=r.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await s.open(n,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(o)try{o==="push"?await Sh(t,r.tableId):o==="pull"?await _h(t,r.tableId):o==="view"&&await Ah(t,r.tableId)}catch(l){t.ui.dialogs.toast(`Gist ${o} failed: ${l.message}`,{kind:"error",title:"Gist sync"})}}})}async function xh(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let r;try{r=atob(t)}catch{return}const s=Xi(r);if(!s){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${s.gistId||"(new)"} (owner: ${s.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await jr(e,s),await Cl(e))}async function $l(e){const t=e.workspaceId();return`${yh}${t??"default"}`}async function or(e){const[t,r,s]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&s)return{user:t,gistId:r??"",token:s};const o=(await e.store.settings.findOne(await $l(e)))?.value;if(o?.user&&o?.token){const l={user:o.user,gistId:o.gistId??"",token:o.token};return await jr(e,l),l}return null}async function jr(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({key:await $l(e),value:t})}function Xi(e){const t={};for(const r of e.split(";")){const s=r.indexOf("=");if(s<0)continue;const n=r.slice(0,s).trim(),o=r.slice(s+1).trim();n&&(t[n]=o)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function Qi(e){const t=await or(e);if(t)return t;const r=await e.ui.dialogs.prompt(`Connection string format:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,"","Gist credentials");if(!r)return null;const s=Xi(r);return s?(await jr(e,s),s):(await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist credentials"),null)}function kl(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function $h(e){const t=await or(e),r=t?kl(t):"",s=await e.ui.dialogs.prompt(`Edit the Gist connection string:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,r,"Gist settings");if(s==null)return;const n=Xi(s);if(!n){await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist settings");return}await jr(e,n),e.ui.dialogs.toast("Gist settings saved.",{kind:"success",title:"Gist sync"})}async function kh(e){const t=await or(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const s=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(kl(t)))}`,{GistShareDialog:n}=await Sn(async()=>{const{GistShareDialog:o}=await import("./gist-share-dialog-B8gv7Xot.js");return{GistShareDialog:o}},[]);await n.open(s)}async function Ch(e){const t=await or(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}async function Eh(e){const t=await Qi(e);if(!t)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=(await e.store.tables.find()).filter(L=>L.workspaceId===r);if(s.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const n=1e8,o=1e7,l={},u=[],h=[];for(const L of s){const N=await e.store.rows(L.id).find(),U=JSON.stringify(El(L,N),null,2),re=`${L.name} (${(U.length/1e6).toFixed(2)} MB)`;U.length>n?u.push(re):U.length>o&&h.push(re),l[`${Fr(L.name)}.table.json`]={content:U}}if(u.length>0||h.length>0){const L=[];if(u.length>0&&L.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${u.join(`
`)}`),h.length>0&&L.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${h.join(`
`)}`),!await e.ui.dialogs.confirm(`${L.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}const g=(await e.store.viewTemplates.find()).filter(L=>L.workspaceId===r),$=(await e.store.viewInstances.find()).filter(L=>L.workspaceId===r),w=(await e.store.settings.find()).filter(L=>xl(L.key));l["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:g,viewInstances:$,settings:w},null,2)};let P;if(t.gistId){const L=await fetch(`https://api.github.com/gists/${t.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:l,description:`easyDBAccess workspace: ${r}`})});if(!L.ok)throw new Error(await Sr(L));P=await L.json()}else{const L=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:l})});if(!L.ok)throw new Error(await Sr(L));P=await L.json(),t.gistId=P.id,await jr(e,t)}const W=P.html_url??`https://gist.github.com/${t.user}/${P.id}`;e.ui.dialogs.toast(`Pushed ${s.length} table${s.length===1?"":"s"}.  ${W}`,{kind:"success",title:"Gist sync"})}async function Cl(e){const t=await Qi(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!s.ok)throw new Error(await Sr(s));const n=await s.json(),o=Object.entries(n.files).filter(([U])=>U.endsWith(".table.json")&&!U.startsWith("_easydb"));if(o.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const l=(await e.store.tables.find()).filter(U=>U.workspaceId===r),u=new Map(l.map(U=>[U.name.toLowerCase(),U])),{TopProgress:h}=await Sn(async()=>{const{TopProgress:U}=await Promise.resolve().then(()=>Ol);return{TopProgress:U}},void 0),g=h.begin("Pulling from gist…");let $=0;const w=[],P=new Map;try{for(const[U,[re,ce]]of o.entries())try{const ge=await ks(ce),Q=JSON.parse(ge);if(!Q.name||!Array.isArray(Q.columns))throw new Error("unexpected file shape (missing name/columns)");let q;const oe=u.get(Q.name.toLowerCase());if(oe){q=await e.store.tables.patch(oe.id,{title:Q.title,columns:Q.columns,updatedAt:Date.now()});const $e=e.store.rows(oe.id),ze=await $e.find();await $e.bulkRemove(ze.map(ke=>ke.id))}else q=await e.store.tables.insert({id:_i(),workspaceId:r,name:Q.name,title:Q.title,code:Fr(Q.name),columns:Q.columns,view:"table",updatedAt:Date.now()});const be=(Q.rows??[]).map($e=>({id:_i(),tableId:q.id,data:$e,updatedAt:Date.now()}));await e.store.rows(q.id).bulkInsert(be),P.set(Q.name,q.id),$++}catch(ge){w.push({file:re,error:ge.message})}finally{g.fraction((U+1)/o.length)}}finally{g.done()}let W=0,L="";const N=n.files["_easydb.workspace.json"];if(N)try{const U=await ks(N),re=JSON.parse(U),ce=re.viewTemplates??[],ge=re.viewInstances??[],Q=re.settings??[];for(const q of ce)await e.store.viewTemplates.upsert({...q,workspaceId:r});for(const q of ge){let oe;q.tableName&&(oe=P.get(q.tableName)??u.get(q.tableName)?.id),oe??=q.tableId,oe&&(await e.store.viewInstances.upsert({...q,workspaceId:r,tableId:oe}),W++)}for(const q of Q)xl(q.key)&&await e.store.settings.upsert(q)}catch(U){L=`Workspace metadata import failed: ${U.message}`}if(w.length>0){const U=w.map(re=>`• ${re.file}: ${re.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${$} of ${o.length} tables. ${w.length} failed:
${U}${L?`
${L}`:""}`,{kind:"warning",title:"Gist sync"})}else{const U=W>0?` (+${W} views)`:"";e.ui.dialogs.toast(`Pulled ${$} table${$===1?"":"s"} from gist ${t.gistId}.${U}`,{kind:"success",title:"Gist sync"}),L&&e.ui.dialogs.toast(L,{kind:"warning",title:"Gist sync"})}}async function Sh(e,t){const r=await Qi(e);if(!r)return;if(!r.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const s=await e.store.tables.findOne(t);if(!s)return;const n=await e.store.rows(t).find(),o=JSON.stringify(El(s,n),null,2),l={[`${Fr(s.name)}.table.json`]:{content:o}},u=await fetch(`https://api.github.com/gists/${r.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:l})});if(!u.ok)throw new Error(await Sr(u));e.ui.dialogs.toast(`Pushed "${s.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function _h(e,t){const r=await or(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const s=await e.store.tables.findOne(t);if(!s)return;const n=`${Fr(s.name)}.table.json`,o=await fetch(`https://api.github.com/gists/${r.gistId}`,{headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await Sr(o));const u=(await o.json()).files[n];if(!u){await e.ui.dialogs.alert(`No file "${n}" in the gist for this table.`,"Gist sync");return}const h=await ks(u),g=JSON.parse(h);if(!g.name||!Array.isArray(g.columns))throw new Error("unexpected file shape (missing name/columns)");await e.store.tables.patch(t,{title:g.title,columns:g.columns,updatedAt:Date.now()});const $=e.store.rows(t),w=await $.find();await $.bulkRemove(w.map(W=>W.id));const P=(g.rows??[]).map(W=>({id:_i(),tableId:t,data:W,updatedAt:Date.now()}));await $.bulkInsert(P),e.ui.dialogs.toast(`Pulled "${s.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function Ah(e,t){const r=await or(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const s=await e.store.tables.findOne(t);if(!s)return;const n=`file-${Fr(s.name)}-table-json`;window.open(`https://gist.github.com/${r.user}/${r.gistId}#${n}`,"_blank","noopener")}function El(e,t){const r=e.columns.map(s=>s.field);return{name:e.name,title:e.title,columns:e.columns,rows:t.map(s=>{const n={};for(const o of r)n[o]=s.data[o];return n})}}async function ks(e,t=r=>fetch(r)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const r=await t(e.raw_url);if(!r.ok)throw new Error(`raw fetch failed: ${r.status} ${r.statusText}`);return r.text()}async function Sr(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function Fr(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function _i(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Th=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:ks,init:vh,load:xh,meta:bh},Symbol.toStringTag,{value:"Module"})),Sl="server-sync:url";function _l(e){return`server-sync:etag:${e}`}async function Al(e){const r=(await e.store.settings.findOne(Sl))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function Ph(e,t){await e.store.settings.upsert({key:Sl,value:t.replace(/\/+$/,"")})}async function Tl(e,t){const s=(await e.store.settings.findOne(_l(t)))?.value;return typeof s=="string"?s:null}async function Hn(e,t,r){await e.store.settings.upsert({key:_l(t),value:r})}function js(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function ha(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function Pl(e,t,r){const s=Ir(r,t),n=(await e.store.tables.find()).filter(l=>l.workspaceId===t);for(const l of n){const u=e.store.rows(l.id),h=await u.find();await u.bulkRemove(h.map(g=>g.id)),await e.store.tables.remove(l.id)}let o=0;for(const l of s){const u=fa(),h=await e.store.tables.insert({id:u,workspaceId:t,name:l.name,code:Ih(l.name),columns:l.columns,view:"table",...l.windowGeometry?{windowGeometry:l.windowGeometry}:{},...l.sortColumn?{sortColumn:l.sortColumn,sortAsc:l.sortAsc??!0}:{},updatedAt:Date.now()}),g=l.rows.map($=>({id:fa(),tableId:h.id,data:$,updatedAt:Date.now()}));await e.store.rows(h.id).bulkInsert(g),o++}return o}function Ih(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function fa(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Dh={name:"server-sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"easyDBAccess built-ins"};function Rh(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,r)=>{const{AnchoredMenu:s}=await Sn(async()=>{const{AnchoredMenu:l}=await import("./anchored-menu-_4hRdvuK.js");return{AnchoredMenu:l}},[]),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await s.open(n,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(o)try{o==="push"?await Oh(t):o==="pull"&&await jh(t)}catch(l){t.ui.dialogs.toast(`${o==="push"?"Push":"Pull"} failed: ${l.message}`,{kind:"error",title:"Server sync"})}}})}async function Oh(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Il(e);if(!r)return;const s=await Os(e),n=await Tl(e,t),o={"Content-Type":"application/json"};n&&(o["If-Match"]=`"${n}"`);let l=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:o,body:s});if(l.status===412){const h=await l.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){h.currentEtag&&await Hn(e,t,h.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}l=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:s})}if(!l.ok)throw new Error(await Dl(l));const u=js(l.headers.get("ETag"));u&&await Hn(e,t,u),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function jh(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Il(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await Dl(n));const o=js(n.headers.get("ETag")),l=await n.json(),u=await Pl(e,t,l);o&&await Hn(e,t,o),e.ui.dialogs.toast(`Pulled ${u} table${u===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function Il(e){const t=await Al(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await Ph(e,r),r.replace(/\/+$/,"")}async function Dl(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Fh=Object.freeze(Object.defineProperty({__proto__:null,init:Rh,meta:Dh},Symbol.toStringTag,{value:"Module"})),zh={name:"new-table",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"easyDBAccess built-ins"};function Lh(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const Bh=Object.freeze(Object.defineProperty({__proto__:null,init:Lh,meta:zh},Symbol.toStringTag,{value:"Module"})),Mh={name:"plugin-manager-button",version:"0.1.0",description:"Registers a footer button that opens the Plugin Manager dialog.",author:"easyDBAccess built-ins"};function Nh(e){e.ui.registerFooterButton({id:"plugin-manager:open",label:"Plugins",icon:"extension",tooltip:"Add, disable, or remove plugins",onClick:()=>e.ui.openPluginManager()})}const Uh=Object.freeze(Object.defineProperty({__proto__:null,init:Nh,meta:Mh},Symbol.toStringTag,{value:"Module"})),qh={name:"core-renderers",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"easyDBAccess built-ins"};function Hh(e){customElements.get("cell-date")||customElements.define("cell-date",Wh),customElements.get("cell-datetime")||customElements.define("cell-datetime",Kh),customElements.get("cell-boolean")||customElements.define("cell-boolean",Vh),customElements.get("cell-script")||customElements.define("cell-script",Yh),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class Wh extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="date",t.value=Qh(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Kh extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="datetime-local",t.value=Jh(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Vh extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="checkbox",t.checked=Gh(this._value),t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Gh(e){return e===!0||e==="true"||e===1||e==="1"}class Yh extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const o=document.createElement("span");o.textContent="(no script)",o.style.cssText="color:#9ca3af;font-style:italic",this.append(o);return}let r;try{r=Xh(t)}catch(o){this.append(pi("compile error",o));return}let s;try{s=r(this._row)}catch(o){this.append(pi("runtime error",o));return}if(typeof s!="string"){this.append(pi("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=s,this.append(n)}}const pa=new Map;function Xh(e){const t=pa.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return pa.set(e,r),r}function pi(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const s=t instanceof Error?t.message:String(t);r.title=s}return r}function Qh(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function Jh(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const s=new Date(t);if(Number.isNaN(s.getTime()))return"";const n=s.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const Zh=Object.freeze(Object.defineProperty({__proto__:null,init:Hh,meta:qh},Symbol.toStringTag,{value:"Module"})),ef={name:"cell-color",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"easyDBAccess built-ins"};function tf(e){customElements.get("cell-color")||customElements.define("cell-color",nf),e.ui.registerCellRenderer("color","cell-color")}class nf extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,s){this.value=s}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const rf=Object.freeze(Object.defineProperty({__proto__:null,init:tf,meta:ef},Symbol.toStringTag,{value:"Module"})),sf={name:"cell-image",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"easyDBAccess built-ins"};function of(e){customElements.get("cell-image")||customElements.define("cell-image",af),e.ui.registerCellRenderer("image","cell-image")}class af extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const s=document.createElement("img");s.src=this._value,s.alt="",s.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(s)}else{const s=document.createElement("span");s.style.color="#9ca3af",s.textContent="no image",t.append(s);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const s=new FileReader;s.onload=()=>this.commit(String(s.result)),s.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const lf=Object.freeze(Object.defineProperty({__proto__:null,init:of,meta:sf},Symbol.toStringTag,{value:"Module"})),cf={name:"cell-link",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"easyDBAccess built-ins"};function uf(e){customElements.get("cell-link")||customElements.define("cell-link",df),e.ui.registerCellRenderer("link","cell-link")}class df extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:hf(t),s=!this._editing&&!r?ff(t):null,n=!this._editing&&!r&&!s?pf(t):null;if(r||s||n){const o=document.createElement("span");o.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const l=document.createElement("a");l.href=r?t:s?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(l.target="_blank",l.rel="noopener noreferrer"),l.textContent=t,l.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",l.title=r?`Open ${t}`:s?`Email ${t}`:`Call ${t}`;const u=document.createElement("button");u.type="button",u.title="Edit",u.textContent="✎",u.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",u.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation(),this._editing=!0,this.render()}),o.append(l,u),this.append(o)}else{const o=document.createElement("input");o.type="text",o.value=t,o.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",o.addEventListener("change",()=>this.commit(o.value)),o.addEventListener("keydown",l=>{l.key==="Enter"?(l.preventDefault(),this.commit(o.value)):l.key==="Escape"&&(this._editing=!1,this.render())}),this.append(o),this._editing&&setTimeout(()=>{o.focus(),o.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function hf(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function ff(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function pf(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const s=/[ ()\-.]/.test(t),n=t.startsWith("+");return!s&&!n&&r.length<10?null:t}const mf=Object.freeze(Object.defineProperty({__proto__:null,init:uf,meta:cf},Symbol.toStringTag,{value:"Module"}));var gf=Object.defineProperty,bf=Object.getOwnPropertyDescriptor,Rl=(e,t,r,s)=>{for(var n=s>1?void 0:s?bf(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&gf(t,r,n),n};function ma(e){return(mn.instance??yf()).open(e)}function yf(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let mn=class extends Ne{constructor(){super(...arguments),this.rows=[],this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((r,s)=>{const n=this.rows[s],o=n.field.trim(),l=n.label.trim()||o;return{...r,field:o,label:l,hidden:n.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),mn.instance=this}disconnectedCallback(){super.disconnectedCallback(),mn.instance===this&&(mn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Wt(this.dialogEl,e)}open(e){return this.source=e,this.rows=e.map(t=>({field:t.field,label:t.label,hidden:!!t.hidden})),new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((r,s)=>{const n=r.field.trim().toLowerCase();if(n===""){e.add(s);return}(t.get(n)??t.set(n,[]).get(n)).push(s)});for(const r of t.values())if(r.length>1)for(const s of r)e.add(s);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,r){this.rows=this.rows.map((s,n)=>n===e?{...s,[t]:r}:s)}setHidden(e,t){this.rows=this.rows.map((r,s)=>s===e?{...r,hidden:t}:r)}render(){const e=this.invalidIndices(),t=e.size;return j`
      <dialog @cancel=${this.onCancel} @keydown=${In}>
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
              ${this.rows.map((r,s)=>j`
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
    `}};mn.instance=null;mn.styles=[Ht,Ye`
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
    `];Rl([V()],mn.prototype,"rows",2);mn=Rl([nt("column-names-dialog")],mn);var wf=Object.defineProperty,vf=Object.getOwnPropertyDescriptor,Fs=(e,t,r,s)=>{for(var n=s>1?void 0:s?vf(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&wf(t,r,n),n};let cs=null;function xf(){return cs||(cs=document.createElement("top-progress"),document.body.appendChild(cs)),cs}let An=class extends Ne{constructor(){super(...arguments),this.visible=!1,this.frac=null,this.label="",this.active=new Set}static begin(e=""){return xf().begin(e)}begin(e){const t=Symbol("progress");return this.active.add(t),this.label=e,this.frac=null,this.visible=!0,{fraction:r=>{this.active.has(t)&&(this.frac=r)},done:()=>{this.active.delete(t),this.active.size===0&&(this.visible=!1,this.frac=null,this.label="")}}}render(){if(!this.visible)return j``;const e=this.frac!=null;return j`<div
      class="track"
      role="progressbar"
      aria-label=${this.label||"Loading"}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${e?Math.round(this.frac*100):""}
    >
      ${e?j`<div
            class="bar determinate"
            style="width:${Math.round(this.frac*100)}%"
          ></div>`:j`<div class="bar indet"></div>`}
    </div>`}};An.styles=Ye`
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
  `;Fs([V()],An.prototype,"visible",2);Fs([V()],An.prototype,"frac",2);Fs([V()],An.prototype,"label",2);An=Fs([nt("top-progress")],An);const Ol=Object.freeze(Object.defineProperty({__proto__:null,get TopProgress(){return An}},Symbol.toStringTag,{value:"Module"}));function $f(e){let t;try{t=new URL(e)}catch{return e}const r=t.hostname.toLowerCase();if(r==="github.com"||r==="www.github.com"){const s=t.pathname.split("/").filter(Boolean);if(s.length>=5&&(s[2]==="blob"||s[2]==="raw")){const n=s[0],o=s[1];let l=s.slice(3);return l.length>=3&&l[0]==="refs"&&(l[1]==="heads"||l[1]==="tags")&&(l=l.slice(2)),`https://raw.githubusercontent.com/${[n,o,...l].join("/")}`}}return e}async function kf(e,t){const r=Number(e.headers?.get?.("content-length")),s=e.body?.getReader?.();if(s&&Number.isFinite(r)&&r>0){const n=[];let o=0;for(;;){const{done:h,value:g}=await s.read();if(h)break;g&&(n.push(g),o+=g.length,t?.(Math.min(1,o/r)))}const l=new Uint8Array(o);let u=0;for(const h of n)l.set(h,u),u+=h.length;return new TextDecoder().decode(l)}return await e.text()}var Cf=Object.defineProperty,Ef=Object.getOwnPropertyDescriptor,en=(e,t,r,s)=>{for(var n=s>1?void 0:s?Ef(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Cf(t,r,n),n};const Sf="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",_f="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",Af='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',ga=[{label:"Northwind — sample database (JSON dump)",url:Sf,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:_f,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],Tf={name:"import-data",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"easyDBAccess built-ins",optional:!0};function Pf(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:Af,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>jf(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:r})=>Rf(t,r)})}const ba=50*1024*1024;function ya(e){try{return new URL(e).host}catch{return e}}async function If(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}async function Df(e,t,r={}){const s=$f(t),n=r.slowMs??2e3;let o=setTimeout(()=>{o=void 0,r.onSlow?.()},n);const l=()=>{o!==void 0&&(clearTimeout(o),o=void 0)};try{let u;try{u=await e.backend.fetch(s)}catch(g){throw new Error(`Could not reach ${ya(s)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${g.message}]`)}if(!u.ok){const g=await If(u);throw new Error(`HTTP ${u.status} ${u.statusText||""}`.trim()+(g?` — ${g}`:""))}const h=Number(u.headers.get("content-length"));if(Number.isFinite(h)&&h>ba)throw new Error(`Response is ${(h/(1024*1024)).toFixed(1)} MB, over the ${ba/(1024*1024)} MB browser import limit. Import a smaller extract, or use a server/Datasette connection for large datasets.`);try{return await kf(u,r.onProgress)}catch(g){throw new Error(`Failed reading the response body from ${ya(s)}: ${g.message}`)}}finally{l()}}async function Ai(e,t,r){const s={handle:null};try{return await Df(e,t,{onSlow:()=>{s.handle=An.begin(r)},onProgress:n=>s.handle?.fraction(n)})}finally{s.handle?.done()}}async function Rf(e,t){const r=await e.store.tables.findOne(t),s=r?.origin;if(s?.url)try{const n=await Ai(e,s.url,`Reading ${r?.name??"data"}…`);let o;if(s.type==="csv")o=Pr(n).rows;else{const h=Ir(JSON.parse(n),r.name),g=h.find($=>$.name===r.name)??(h.length===1?h[0]:void 0);if(!g)throw new Error(`"${r.name}" is no longer in the dump at ${s.url}`);o=g.rows}const l=e.store.rows(t),u=await l.find();await l.bulkRemove(u.map(h=>h.id)),await l.bulkInsert(o.map(h=>({id:Of(),tableId:t,data:h,updatedAt:Date.now()}))),e.ui.dialogs.toast(`Refreshed "${r.name}" (${o.length} rows).`,{kind:"success",title:"Refresh"})}catch(n){e.ui.dialogs.toast(`Couldn't refresh "${r?.name??t}": ${n.message}`,{kind:"error",title:"Refresh"})}}function Of(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function jf(e){const r=await(ft.instance??Ff()).open({async listDatabases($){const w=gn($);return al(P=>e.backend.fetch(P),w.base)}});if(!r)return;const{url:s,file:n,kind:o,dbChosen:l,editColumns:u,maxRows:h}=r,g=n?.name??s;try{if(n){if(o==="csv"){const $=h!=null?await el(n,h):await n.text();await ys(e,$,n.name,{editColumns:u?ma:void 0,maxRows:h})}else{const $=await n.text();await ws(e,$,n.name,{maxRows:h})}e.ui.dialogs.toast(`Imported ${n.name}.`,{kind:"success",title:"Import"});return}if(o==="datasette")await Yi(e,s,{skipTablePicker:l});else if(o==="csv"){const $=await Ai(e,s,`Reading ${Zn(s)}…`);await ys(e,$,Zn(s),{editColumns:u?ma:void 0,maxRows:h,origin:{type:"csv",url:s}}),e.ui.dialogs.toast(`Imported ${Zn(s)}.`,{kind:"success",title:"Import"})}else{const $=await Ai(e,s,`Reading ${Zn(s)}…`);await ws(e,$,Zn(s),{originUrl:s,maxRows:h}),e.ui.dialogs.toast(`Imported ${Zn(s)}.`,{kind:"success",title:"Import"})}}catch($){e.ui.dialogs.toast(`Could not import ${g}: ${$.message}`,{kind:"error",title:"Import"})}}function Ff(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function zf(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),s=[...t.searchParams.keys()].some(o=>o.startsWith("_")),n=r.includes("datasette")||s;return!s&&/\.csv$/i.test(t.pathname)?"csv":!s&&/\.json$/i.test(t.pathname)?"json":n?"datasette":"json"}catch{return"json"}}function wa(e,t){if(t!=="datasette"||!e)return!1;try{const r=gn(e);return!r.db&&!r.table}catch{return!1}}function Zn(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}function Lf(e){return/\.csv$/i.test(e)?"csv":"json"}let ft=class extends Ne{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const r=this.resolvedKind,s=this.maxRows,n=r==="csv"&&this.editColumns;if(this.file){this.finish({url:"",file:this.file,kind:r,editColumns:n,maxRows:s});return}const o=r==="datasette"&&!!this.selectedDb&&wa(t,r),l=o?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:l,kind:r,dbChosen:o,editColumns:n,maxRows:s})}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?Lf(this.file.name):zf(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),ft.instance===this&&(ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Wt(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=ga[t];r&&(this.url=r.url,this.kind=r.kind)}onFileChange(e){const r=e.target.files?.[0]??null;this.file=r,r&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!wa(this.url.trim(),this.resolvedKind)?me:j`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?j`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>j`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:j`<option value="">— not loaded —</option>`}
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
      ${this.dbError?j`<p class="hint error">${this.dbError}</p>`:me}
    `}render(){return j`
      <dialog @cancel=${this.onCancel} @keydown=${In}>
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
                ${ga.map((e,t)=>j`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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
                ?disabled=${!!this.file}
                .value=${this.url}
                @input=${e=>{this.url=e.target.value,this.presetIdx=-1,this.file=null,this.resetDbList()}}
              />
            </label>

            <label>
              …or upload a file
              <input
                type="file"
                accept=".csv,.json,.txt,text/csv,application/json"
                @change=${e=>this.onFileChange(e)}
              />
            </label>
            ${this.file?j`<p class="hint">
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
                <option value="csv" ?selected=${this.kind==="csv"}>CSV file</option>
                <option value="datasette" ?selected=${this.kind==="datasette"}>
                  Datasette (table or instance)
                </option>
              </select>
            </label>

            ${this.renderDbPicker()}
            ${this.resolvedKind==="csv"?j`<label class="check">
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
            ${this.resolvedKind==="datasette"&&this.maxRows!=null?j`<p class="hint">
                  Row limit applies to CSV/JSON imports; Datasette snapshots use their own
                  10,000-row cap.
                </p>`:me}

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
      ${me}
    `}};ft.instance=null;ft.styles=[Ht,Ye`
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
    `];en([V()],ft.prototype,"url",2);en([V()],ft.prototype,"kind",2);en([V()],ft.prototype,"presetIdx",2);en([V()],ft.prototype,"dbList",2);en([V()],ft.prototype,"dbLoading",2);en([V()],ft.prototype,"dbError",2);en([V()],ft.prototype,"selectedDb",2);en([V()],ft.prototype,"editColumns",2);en([V()],ft.prototype,"file",2);en([V()],ft.prototype,"maxRowsInput",2);ft=en([nt("import-dialog")],ft);const Bf=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return ft},init:Pf,meta:Tf},Symbol.toStringTag,{value:"Module"})),Mf={name:"auto-sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"easyDBAccess built-ins",optional:!0},Nf=6e4;let va=null,Ti=!1;const mi=new Map;function Uf(e){va===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(va=setInterval(()=>{jl(e)},Nf)))}async function jl(e){if(Ti)return;const t=e.workspaceId();if(!t)return;const r=await Al(e);if(r)try{await qf(e,r,t)}catch(s){console.warn("[auto-sync]",s)}}async function qf(e,t,r){const s=await Os(e),n=await Tl(e,r),o=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(o.status===404){await xa(e,t,r,s,null);return}if(!o.ok)return;const l=js(o.headers.get("ETag")),u=await o.text();if(ha(s)===ha(u)){l&&l!==n&&await Hn(e,r,l);return}if(l&&l===n){await xa(e,t,r,s,n);return}if(!(l&&mi.get(r)===l)){Ti=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const g=JSON.parse(u),$=await Pl(e,r,g);l&&await Hn(e,r,l),mi.delete(r),e.ui.dialogs.toast(`Pulled ${$} table${$===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else l&&mi.set(r,l)}finally{Ti=!1}}}async function xa(e,t,r,s,n){const o={"Content-Type":"application/json"};n&&(o["If-Match"]=`"${n}"`);const l=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:o,body:s});if(l.ok){const u=js(l.headers.get("ETag"));u&&await Hn(e,r,u);return}if(l.status===412){const u=await l.json().catch(()=>({}));u.currentEtag&&await Hn(e,r,u.currentEtag)}}const Fl=Object.freeze(Object.defineProperty({__proto__:null,load:Uf,meta:Mf,tick:jl},Symbol.toStringTag,{value:"Module"})),zl=/\$([A-Za-z_][A-Za-z0-9_]*)/g;function $a(...e){const t=new Set;for(const r of e)if(r)for(const s of r.matchAll(zl))t.add(s[1]);return[...t]}function Hf(e,t,r){return e.replace(zl,(s,n)=>{const o=r[n];if(!o)return"";const l=t.data[o];return l==null?"":String(l)})}function ka(e){return e==null||e===""}function Wf(e,t){const r=Object.entries(t).filter(([,s])=>s!=null&&String(s).trim()!=="");return r.length===0?e:e.filter(s=>r.every(([n,o])=>String(s.data[n]??"").toLowerCase().includes(String(o).toLowerCase())))}function Kf(e,t,r=!0){if(!t)return e;const s=r?1:-1;return[...e].sort((n,o)=>{const l=n.data[t],u=o.data[t],h=ka(l),g=ka(u);if(h||g)return h===g?0:h?1:-1;const $=Number(l),w=Number(u);return!Number.isNaN($)&&!Number.isNaN(w)?($-w)*s:String(l).localeCompare(String(u),void 0,{numeric:!0,sensitivity:"base"})*s})}function Vf(e,t){return Kf(Wf(e,t.filters??{}),t.sortColumn,t.sortAsc??!0)}function Gf(e){return!!e&&e.trim().length>0}var Yf=Object.defineProperty,Xf=Object.getOwnPropertyDescriptor,ar=(e,t,r,s)=>{for(var n=s>1?void 0:s?Xf(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Yf(t,r,n),n};function Pi(e,t){(Ot.instance??Qf()).open(e,t)}function Qf(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function Ca(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let Ot=class extends Ne{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()}}connectedCallback(){super.connectedCallback(),Ot.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ot.instance===this&&(Ot.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Wt(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const r=this.templates.find(s=>s.id===t.editTemplateId);r&&this.editTemplate(r)}else if(t?.editInstanceId){const r=this.instances.find(s=>s.id===t.editInstanceId);r&&await this.editInstance(r)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await ye(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(r=>r.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((r,s)=>r.name.localeCompare(s.name))}async openInstance(e){await(await ye()).store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()}),this.close()}async editInstance(e){const r=await(await ye()).store.viewTemplates.findOne(e.templateId),s=r?$a(r.headerHtml,r.rowHtml,r.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:r?.name??"template",name:e.name,tokens:s,mapping:{...e.mapping}},this.mode="instance"}async deleteInstance(e){await(await ye()).store.viewInstances.remove(e),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await ye();e.id?await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}):await t.store.viewTemplates.insert({id:Ca(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=$a(e.headerHtml,e.rowHtml,e.footerHtml),r={};for(const s of t)r[s]=this.autoMap(s);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:r},this.mode="instance"}autoMap(e){const t=e.toLowerCase(),r=this.columns.find(n=>n.field.toLowerCase()===t||(n.label??"").toLowerCase()===t);if(r)return r.field;const s=this.table?.labelColumn;return s&&(t==="title"||t==="name"||t==="label")?s:""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await ye();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const r=this.columns.filter(n=>!n.hidden).map(n=>n.field),s={id:Ca(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:r,mapping:{...e.mapping},updatedAt:Date.now()};await t.store.viewInstances.insert(s),await this.openInstance(s.id)}renderList(){return j`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>j`<li>
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
          ${this.templates.map(e=>j`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?j`<span class="badge">built-in</span>`:me}
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
    `}renderTemplate(){const e=this.tDraft,t=r=>s=>{this.tDraft={...e,[r]:s.target.value}};return j`
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
    `}renderInstance(){const e=this.iDraft;return j`
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
        ${e.tokens.length===0?j`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>j`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${r=>this.iDraft={...e,mapping:{...e.mapping,[t]:r.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(r=>j`<option value=${r.field} ?selected=${e.mapping[t]===r.field}>
                          ${r.label||r.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">
        ${e.id?j`Editing name and column mapping. The snapshotted sort, filters and visible columns
            are kept.`:j`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?j`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="button" class="primary" @click=${()=>void this.saveTemplate()}>
              Save
            </button>`:this.mode==="instance"?j`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="button" class="primary" @click=${()=>void this.saveInstance()}>
                ${this.iDraft?.id?"Save":"Create view"}
              </button>`:j`<button type="button" class="ghost" @click=${this.close}>Close</button>`;return j`
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
    `}};Ot.instance=null;Ot.styles=[Ht,Ye`
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
    `];ar([V()],Ot.prototype,"mode",2);ar([V()],Ot.prototype,"instances",2);ar([V()],Ot.prototype,"templates",2);ar([V()],Ot.prototype,"tDraft",2);ar([V()],Ot.prototype,"iDraft",2);Ot=ar([nt("views-dialog")],Ot);const Jf={name:"views",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",optional:!0},Zf="grid_view",Ea="RSS Feed",Ii='<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',Di=['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>',"</div>"].join(""),Ri="</div>";function ep(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:Zf,tooltip:"Views — display this table through a template",onClick:(t,{tableId:r})=>Pi(r)})}async function tp(e){await rp(e)}function np(){let e=5381;const t=`${Ii}\0${Di}\0${Ri}`;for(let r=0;r<t.length;r++)e=(e<<5)+e+t.charCodeAt(r)|0;return(e>>>0).toString(36)}async function rp(e){const t=e.workspaceId();if(!t)return;const r=`views:seeded:rss:${t}`,s=`views:sig:rss:${t}`,n=np(),o=(await e.store.viewTemplates.find({workspaceId:t})).find(u=>u.builtin&&u.name===Ea);if(o){(await e.store.settings.findOne(s))?.value!==n&&(await e.store.viewTemplates.patch(o.id,{headerHtml:Ii,rowHtml:Di,footerHtml:Ri,updatedAt:Date.now()}),await e.store.settings.upsert({key:s,value:n})),await e.store.settings.upsert({key:r,value:!0});return}(await e.store.settings.findOne(r))?.value||(await e.store.viewTemplates.insert({id:sp(),workspaceId:t,name:Ea,headerHtml:Ii,rowHtml:Di,footerHtml:Ri,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({key:r,value:!0}),await e.store.settings.upsert({key:s,value:n}))}function sp(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const ip=Object.freeze(Object.defineProperty({__proto__:null,init:ep,load:tp,meta:Jf},Symbol.toStringTag,{value:"Module"})),op={name:"settings",version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"easyDBAccess built-ins"};function ap(e){e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,r)=>{const n=Array.from(t.dataTransfer?.files??[]).find(u=>u.name.toLowerCase()==="secrets.txt");if(!n)return!1;const o=await n.text(),l=Object.keys(Ts(o)).length;return As().trim().length>0&&!await r.ui.dialogs.confirm(`Replace your current secrets with ${l} secret${l===1?"":"s"} from "${n.name}"?`,"Import secrets")||(Xa(o),r.ui.dialogs.toast(`Imported ${l} secret${l===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const lp=Object.freeze(Object.defineProperty({__proto__:null,init:ap,meta:op},Symbol.toStringTag,{value:"Module"})),Ll=[lp,Bh,Ou,nd,oh,Bu,gh,fh,Th,Fh,Uh,Zh,rf,lf,mf,Bf,Fl,ip],cp=Ll;function Oi(e){return`builtin:${e}`}async function up(e){const t=[];for(const r of Ll)if(!await dp(e,r)){t.push(r);try{await r.init?.(e)}catch(s){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"init",error:s})}}return async()=>{for(const r of t)try{await r.load?.(e)}catch(s){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"load",error:s})}}}async function dp(e,t){if(!t.meta?.optional)return!1;const r=t.meta.name;return r?(await e.store.plugins.findOne(Oi(r)))?.enabled===!1:!1}async function hp(e){const t=e.workspaceId();if(!t)return async()=>{};const s=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const o of s)try{const l=await e.store.plugins.findOne(o);if(l&&l.enabled===!1)continue;let u=l?.cachedBody??"";if(u)fp(e,o,u);else{try{u=await Bl(o)}catch($){await e.store.plugins.upsert({url:o,enabled:l?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${$.message}`}),e.events.emit("plugin:error",{url:o,phase:"fetch",error:$});continue}await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),cachedBody:u})}const h=new Blob([u],{type:"text/javascript"}),g=URL.createObjectURL(h);try{const $=await import(g);await $.init?.(e),n.push({url:o,mod:$})}finally{setTimeout(()=>URL.revokeObjectURL(g),5e3)}}catch(l){await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),lastError:`init: ${l.message}`}),e.events.emit("plugin:error",{url:o,phase:"init",error:l})}return async()=>{for(const{url:o,mod:l}of n)try{await l.load?.(e)}catch(u){await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),lastError:`load: ${u.message}`}),e.events.emit("plugin:error",{url:o,phase:"load",error:u})}}}async function Bl(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function fp(e,t,r){return(async()=>{try{const s=await Bl(t);if(s===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:s})}catch{}})()}let gi=null;function ye(){return gi||(gi=pp()),gi}async function pp(){const e=await Qc(),t=eu(e),r=nu(),s=cu(),n=new Map;t.tables.subscribe(N=>{n.clear();for(const U of N)n.set(U.id,U)});const o={...t.tables,insert:N=>(n.set(N.id,N),t.tables.insert(N)),upsert:N=>(n.set(N.id,N),t.tables.upsert(N))};let l=null;const u={get backend(){if(!l)throw new Error("[host] row-source ctx used before app init completed");return l.backend},events:r,settings:t.settings,workspaceId:()=>w},h=tu({base:{...t,tables:o},providers:s.rowSources,tableById:N=>n.get(N),ctx:u}),g=mp(),$=await h.workspaces.find();let w;if(g){const N=yp(g),U=$.find(re=>re.id===N||re.name===g);U?w=U.id:w=(await h.workspaces.insert({id:N,name:g,createdAt:Date.now(),pluginUrls:[]})).id}else{const N=gp(),U=N?$.find(re=>re.id===N):void 0;U?w=U.id:$.length>0?w=$[0].id:w=(await h.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}bp(w);const P=pu({store:h,events:r,registries:s,workspaceId:()=>w});l=P,r.on("import:after",({source:N,tableId:U,rowCount:re})=>{N!=="datasette"&&P.store.tables.findOne(U).then(ce=>{P.ui.dialogs.toast(`Imported ${re} row${re===1?"":"s"} into "${ce?.name??U}".`,{kind:"success",title:N.toUpperCase()+" import"})})}),r.on("plugin:error",({url:N,phase:U,error:re})=>{P.ui.dialogs.toast(`[${U}] ${re?.message??String(re)}`,{kind:"error",title:`Plugin: ${N}`})});const W=await up(P),L=await hp(P);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:w}),await W(),await L()}),{store:h,events:r,workspaceId:w,registries:s,api:P}}function mp(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const Ml="eda:lastWorkspaceId";function gp(){try{return globalThis.localStorage?.getItem(Ml)??null}catch{return null}}function bp(e){try{globalThis.localStorage?.setItem(Ml,e)}catch{}}function yp(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var wp=Object.defineProperty,vp=Object.getOwnPropertyDescriptor,zs=(e,t,r,s)=>{for(var n=s>1?void 0:s?vp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&wp(t,r,n),n};let sr=class extends Ne{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Wt(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=Pr(this.text)}catch(l){this.errorMsg=`Couldn't parse the CSV: ${l.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const s=await ye(),n=crypto.randomUUID();await s.store.tables.insert({id:n,workspaceId:s.workspaceId,name:t,code:xp(t),columns:r.columns,view:"table",updatedAt:Date.now()});const o=r.rows.map(l=>({id:crypto.randomUUID(),tableId:n,data:l,updatedAt:Date.now()}));await s.store.rows(n).bulkInsert(o),s.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return j`
      <dialog @cancel=${this.close} @keydown=${In}>
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
            ${this.errorMsg?j`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};sr.styles=[Ht,Ye`
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
    `];zs([V()],sr.prototype,"name",2);zs([V()],sr.prototype,"text",2);zs([V()],sr.prototype,"errorMsg",2);sr=zs([nt("csv-paste-dialog")],sr);function xp(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var $p=Object.defineProperty,kp=Object.getOwnPropertyDescriptor,Ji=(e,t,r,s)=>{for(var n=s>1?void 0:s?kp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&$p(t,r,n),n};const Cp=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let an=class extends Ne{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),an.instance=this}disconnectedCallback(){super.disconnectedCallback(),an.instance===this&&(an.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Wt(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:Cp,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return j`
      <dialog @cancel=${this.onCancel} @keydown=${In}>
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
    `}};an.instance=null;an.styles=[Ht,Ye`
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
    `];Ji([V()],an.prototype,"text",2);Ji([V()],an.prototype,"columnLabel",2);an=Ji([nt("script-editor-dialog")],an);var Ep=Object.defineProperty,Sp=Object.getOwnPropertyDescriptor,Ft=(e,t,r,s)=>{for(var n=s>1?void 0:s?Sp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Ep(t,r,n),n};const _p=["string","number","boolean","date","datetime"];let kt=class extends Ne{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Wt(this.dialogEl,e)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const r=await ye();if(this.rendererOptions=[...r.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=r.events.on("app:ready",()=>{this.rendererOptions=[...r.registries.cellRenderers.keys()].sort()}),e){const s=await ye(),n=await s.store.tables.findOne(e);if(!n)return;this.mode="edit",this.editTableId=e,this.name=n.name,this.tableTitle=n.title??"",this.columns=n.columns.map(l=>({field:l.field,label:l.label,type:l.type,renderer:l.renderer,script:l.script,max:l.max,unique:l.unique,notnull:l.notnull,hidden:l.hidden,origField:l.field}));const o=await s.store.rows(e).find();this.previewRows=o.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const s=[...this.columns],[n]=s.splice(e,1);s.splice(r,0,n),this.columns=s}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const s=r.getBoundingClientRect(),n=e.clientY<s.top+s.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,s=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!s)return;const n=[...this.columns],[o]=n.splice(r,1);let l=t+(r<t?-1:0);s==="after"&&(l+=1),n.splice(l,0,o),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,s)=>s===e?{...r,...t}:r)}async editScript(e){const t=an.instance;if(!t)return;const r=this.columns[e];if(!r)return;const s=await t.open(r.script??"",r.label||r.field);s!==null&&this.patchColumn(e,{script:s.trim()?s:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const r=await ye(),s=(await r.store.tables.find()).filter(g=>g.workspaceId===r.workspaceId),n=t.toLowerCase(),o=s.find(g=>g.name.toLowerCase()===n&&g.id!==this.editTableId);if(o){this.errorMsg=`A table named "${o.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const l=new Set;for(const g of this.columns){const $=g.field.trim();if(!$){this.errorMsg="Column field names cannot be empty.";return}if(l.has($)){this.errorMsg=`Duplicate column field: ${$}`;return}l.add($)}const u=this.tableTitle.trim(),h=this.columns.map(g=>{const $={field:g.field.trim(),label:g.label.trim()||g.field.trim(),type:g.type};return g.renderer&&($.renderer=g.renderer),g.script&&($.script=g.script),g.max!=null&&g.max>0&&($.max=g.max),g.unique&&($.unique=!0),g.notnull&&($.notnull=!0),g.hidden&&($.hidden=!0),$});if(this.mode==="edit"&&this.editTableId){const g=this.editTableId,$=await r.store.tables.findOne(g),w=new Map(($?.columns??[]).map(q=>[q.field,q])),P=h.filter(q=>{const oe=w.get(q.field);return q.unique&&!oe?.unique||q.notnull&&!oe?.notnull||q.max&&q.max>0&&q.max!==oe?.max});if(P.length>0){const q=await r.store.rows(g).find(),oe=Pp(P,q);if(oe.length>0){this.errorMsg=`Cannot save: ${oe.length} existing ${oe.length===1?"row violates":"rows violate"} the new constraints.
${oe.slice(0,5).join(`
`)}${oe.length>5?`
…and ${oe.length-5} more.`:""}`;return}}const W=new Set(this.columns.map(q=>q.origField).filter(q=>!!q)),L=new Set(h.map(q=>q.field)),N=($?.columns??[]).map(q=>q.field).filter(q=>!W.has(q)),U=$?.deletedColumns??[],re=[...new Set([...U,...N])].filter(q=>!L.has(q)),ce={name:t,title:u,columns:h,updatedAt:Date.now()};(re.length>0||U.length>0)&&(ce.deletedColumns=re);const ge=$?.name;await r.store.tables.patch(g,ce);const Q=N.filter(q=>!L.has(q));if(Q.length>0){const q=await r.store.rows(g).find();for(const oe of q){let be=!1;const $e={...oe.data};for(const ze of Q)ze in $e&&(delete $e[ze],be=!0);be&&await r.store.rows(g).patch(oe.id,{data:$e,updatedAt:Date.now()})}}if(ge!==void 0&&ge!==t){const q=(await r.store.viewInstances.find()).filter(oe=>oe.tableId===g);for(const oe of q)oe.tableName!==t&&await r.store.viewInstances.patch(oe.id,{tableName:t,updatedAt:Date.now()})}}else await r.store.tables.insert({id:Dp(),workspaceId:r.workspaceId,name:t,title:u,code:Ip(t),columns:h,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return j`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const t of this.columns){if(!t.unique)continue;const r=new Set,s=new Set;for(const n of this.previewRows){const o=n.data[t.field];o==null||o===""||(r.has(o)&&s.add(o),r.add(o))}e.set(t.field,s)}return j`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${this.columns.map(t=>j`<th title=${t.field}>${t.label||t.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(t=>j`
                <tr>
                  ${this.columns.map(r=>{const s=t.data[r.field],n=Tp(r,s,e.get(r.field));return j`<td
                      class=${n?"violation":""}
                      title=${n??""}
                    >${Ap(s)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return j`
      <dialog @cancel=${this.close} @keydown=${In}>
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
          ${this.noticeMsg?j`<div class="notice">${this.noticeMsg}</div>`:""}
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
            ${this.columns.map((r,s)=>{const n=this.dragSrcIdx===s,o=this.dropTargetIdx===s,l=o&&this.dropEdge==="before"?" drop-before":o&&this.dropEdge==="after"?" drop-after":"";return j`
                <div
                  class=${`col-row${n?" drag-source":""}${l}`}
                  @dragover=${u=>this.onRowDragOver(u,s,u.currentTarget)}
                  @dragleave=${()=>this.onRowDragLeave(s)}
                  @drop=${u=>this.onRowDrop(u,s)}
                >
                  <span
                    class="drag-handle"
                    title="Drag to reorder"
                    draggable="true"
                    @dragstart=${u=>this.onRowDragStart(u,s)}
                    @dragend=${()=>this.onRowDragEnd()}
                  >
                    <span class="mi sm">drag_indicator</span>
                  </span>
                  <input
                    type="text"
                    .value=${r.field}
                    @input=${u=>this.patchColumn(s,{field:u.target.value})}
                  />
                  <input
                    type="text"
                    .value=${r.label}
                    @input=${u=>this.patchColumn(s,{label:u.target.value})}
                  />
                  <select
                    .value=${r.type}
                    @change=${u=>this.patchColumn(s,{type:u.target.value})}
                  >
                    ${_p.map(u=>j`<option value=${u} ?selected=${u===r.type}>${u}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${u=>{const h=u.target.value;this.patchColumn(s,{renderer:h||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(u=>j`<option value=${u} ?selected=${u===r.renderer}>${u}</option>`)}
                  </select>
                  ${r.renderer==="script"?j`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(s)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:j`<span></span>`}
                  <input
                    type="number"
                    min="0"
                    placeholder="—"
                    title="Max length (strings) or max value (numbers)"
                    .value=${r.max==null?"":String(r.max)}
                    @input=${u=>{const h=u.target.value;this.patchColumn(s,{max:h===""?void 0:Number(h)})}}
                  />
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Unique"
                      .checked=${!!r.unique}
                      @change=${u=>this.patchColumn(s,{unique:u.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Not null"
                      .checked=${!!r.notnull}
                      @change=${u=>this.patchColumn(s,{notnull:u.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Visible — uncheck to hide the column without losing its data"
                      .checked=${!r.hidden}
                      @change=${u=>this.patchColumn(s,{hidden:!u.target.checked})}
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

          ${this.renameDetected()?j`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?j`<div class="error">${this.errorMsg}</div>`:""}
          ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};kt.styles=[Jt,Ht,Ye`
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
  `];Ft([V()],kt.prototype,"mode",2);Ft([V()],kt.prototype,"editTableId",2);Ft([V()],kt.prototype,"name",2);Ft([V()],kt.prototype,"tableTitle",2);Ft([V()],kt.prototype,"columns",2);Ft([V()],kt.prototype,"errorMsg",2);Ft([V()],kt.prototype,"noticeMsg",2);Ft([V()],kt.prototype,"dragSrcIdx",2);Ft([V()],kt.prototype,"dropTargetIdx",2);Ft([V()],kt.prototype,"dropEdge",2);Ft([V()],kt.prototype,"previewRows",2);Ft([V()],kt.prototype,"rendererOptions",2);kt=Ft([nt("new-table-dialog")],kt);function Ap(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function Tp(e,t,r){const s=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&s)return`${e.label}: empty`;if(s)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!s){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function Pp(e,t){const r=[];for(const s of e)if(s.notnull&&t.forEach((n,o)=>{const l=n.data[s.field];(l==null||typeof l=="string"&&l.trim()==="")&&r.push(`Row ${o+1}: ${s.label} is empty.`)}),s.max!=null&&s.max>0&&t.forEach((n,o)=>{const l=n.data[s.field];typeof l=="string"&&l.length>s.max?r.push(`Row ${o+1}: ${s.label} length ${l.length} > max ${s.max}.`):typeof l=="number"&&l>s.max&&r.push(`Row ${o+1}: ${s.label} value ${l} > max ${s.max}.`)}),s.unique){const n=new Map;t.forEach((o,l)=>{const u=o.data[s.field];u==null||u===""||(n.has(u)?r.push(`Row ${l+1}: ${s.label} duplicates row ${n.get(u)+1} ("${String(u)}").`):n.set(u,l))})}return r}function Ip(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Dp(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Rp=Object.defineProperty,Op=Object.getOwnPropertyDescriptor,Kt=(e,t,r,s)=>{for(var n=s>1?void 0:s?Op(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Rp(t,r,n),n};let Et=class extends Ne{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.builtinNames=[],this.optionalBuiltins=[],this.dirtyBuiltins=!1,this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Wt(this.dialogEl,e)}async open(){const e=await ye(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(o=>[o.url,o]));const s=[],n=[];for(const o of cp){const l=o.meta?.name;if(l)if(o.meta?.optional){const u=this.records.get(Oi(l));n.push({name:l,...o.meta?.description?{description:o.meta.description}:{},...o.meta?.author?{author:o.meta.author}:{},enabled:u?.enabled!==!1})}else s.push(l)}this.builtinNames=s,this.optionalBuiltins=n,this.dirtyBuiltins=!1,this.addUrl="",await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(),this.refreshServerRegistry()}async refreshCatalog(){const e=new URL("/easydbaccess/plugins/catalog.json",location.origin).toString();try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),s=Array.isArray(r.plugins)?r.plugins:[];this.catalog=s.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await ye()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const o=await fetch(n,{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);const l=await o.json(),u=Array.isArray(l.plugins)?l.plugins:[];this.serverCatalog=u.map(h=>({...h,absUrl:new URL(h.url,n).toString()})),this.serverCatalogError=null}catch(o){this.serverCatalog=[],this.serverCatalogError=o.message}}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await ye()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await ye();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await ye(),s=this.records.get(e);await r.store.plugins.upsert({...s??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...s,url:e,enabled:t,lastFetched:s?.lastFetched??0}))}async removePlugin(e){const t=await ye();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await ye(),s=Oi(e),n=this.records.get(s);await r.store.plugins.upsert({...n??{url:s,lastFetched:0},url:s,enabled:t,lastFetched:n?.lastFetched??0}),this.optionalBuiltins=this.optionalBuiltins.map(o=>o.name===e?{...o,enabled:t}:o),this.dirtyBuiltins=!0}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await ye();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const s=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:s});const n=new Blob([s],{type:"text/javascript"}),o=URL.createObjectURL(n);try{const u=await import(o);await u.init?.(t.api),await u.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(o),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const l=await t.store.plugins.find();this.records=new Map(l.map(u=>[u.url,u])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}render(){return j`
      <dialog @cancel=${this.close} @keydown=${In}>
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
            ${this.catalog.length>0?j`<div class="section-h">Available from this host</div>`:""}
            ${this.catalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return j`
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
            ${this.catalogError?j`<div class="meta err">
                  Host catalog unavailable: ${this.catalogError}
                </div>`:""}

            ${this.serverCatalog.length>0||this.serverCatalogError?j`<div class="section-h">From server</div>`:""}
            ${this.serverCatalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return j`
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
            ${this.serverCatalogError?j`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            ${this.optionalBuiltins.length>0?j`<div class="section-h">Optional built-ins</div>`:""}
            ${this.optionalBuiltins.map(e=>j`
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
            ${this.builtinNames.map(e=>j`
                <div class="row builtin">
                  <span class="mi sm">extension</span>
                  <div>
                    <div>${e}</div>
                    <div class="meta">Built-in</div>
                  </div>
                  <span class="meta">always on</span>
                </div>
              `)}

            ${this.urls.length>0?j`<div class="section-h">Installed (by URL)</div>`:""}
            ${this.urls.map(e=>{const t=this.records.get(e),r=t?.lastError?" error":"",s=t?.lastFetched?new Date(t.lastFetched).toLocaleString():"never";return j`
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
    `}};Et.styles=[Jt,Ht,Ye`
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
    `];Kt([V()],Et.prototype,"urls",2);Kt([V()],Et.prototype,"records",2);Kt([V()],Et.prototype,"addUrl",2);Kt([V()],Et.prototype,"builtinNames",2);Kt([V()],Et.prototype,"optionalBuiltins",2);Kt([V()],Et.prototype,"dirtyBuiltins",2);Kt([V()],Et.prototype,"catalog",2);Kt([V()],Et.prototype,"catalogError",2);Kt([V()],Et.prototype,"serverCatalog",2);Kt([V()],Et.prototype,"serverCatalogError",2);Kt([V()],Et.prototype,"installing",2);Et=Kt([nt("plugin-manager-dialog")],Et);var jp=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,lr=(e,t,r,s)=>{for(var n=s>1?void 0:s?Fp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&jp(t,r,n),n};const vr="__general__";let Tn=class extends Ne{constructor(){super(...arguments),this.tabs=[],this.active=vr,this.values={},this.placements={},this.secretsText="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Wt(this.dialogEl,e)}async open(){const e=await ye(),t=[...e.registries.settings];this.tabs=t.map(([n,o])=>({id:n,name:o.name,fields:o.fields}));const r={},s={};for(const n of this.tabs)for(const o of n.fields){const l=`${n.id}:${o.key}`,u=await e.api.settings.placement(n.id,o.key);u==="user"?(r[l]=Ui(l),s[l]="user"):u==="workspace"?(r[l]=(await e.store.settings.findOne(l))?.value,s[l]="workspace"):(r[l]=o.default,s[l]=o.scope??"workspace")}this.values=r,this.placements=s,this.secretsText=As(),this.active=vr,await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async setValue(e,t,r){const s=`${e.id}:${t.key}`;this.values={...this.values,[s]:r},await(await ye()).api.settings.set(e.id,t.key,r,this.placements[s])}async toggleScope(e,t,r){const s=`${e.id}:${t.key}`,n=r?"user":"workspace";this.placements={...this.placements,[s]:n},await(await ye()).api.settings.set(e.id,t.key,this.values[s],n)}onSecretsInput(e){this.secretsText=e.target.value,Xa(this.secretsText)}renderControl(e,t){const r=`${e.id}:${t.key}`,s=this.values[r];switch(t.type){case"text":return j`<textarea
          .value=${String(s??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        ></textarea>`;case"number":return j`<input
          type="number"
          .value=${s==null?"":String(s)}
          @change=${n=>{const o=n.target.value;this.setValue(e,t,o===""?void 0:Number(o))}}
        />`;case"boolean":return j`<label class="scope"
          ><input
            type="checkbox"
            .checked=${!!s}
            @change=${n=>this.setValue(e,t,n.target.checked)}
          />
          enabled</label
        >`;case"date":return j`<input
          type="date"
          .value=${String(s??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        />`;case"secret":return this.renderSecretControl(e,t,s);case"option":return j`<div class="radios">
          ${(t.options??[]).map(n=>j`<label
              ><input
                type="radio"
                name=${r}
                .checked=${s===n}
                @change=${()=>this.setValue(e,t,n)}
              />${n}</label
            >`)}
        </div>`;case"selection":{const n=Array.isArray(s)?s:[];return j`<div class="checks">
          ${(t.options??[]).map(o=>j`<label
              ><input
                type="checkbox"
                .checked=${n.includes(o)}
                @change=${l=>{const h=l.target.checked?[...n,o]:n.filter(g=>g!==o);this.setValue(e,t,h)}}
              />${o}</label
            >`)}
        </div>`}case"string":default:return j`<input
          type="text"
          .value=${String(s??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        />`}}renderSecretControl(e,t,r){const s=Object.keys(Ts(this.secretsText));return j`<div class="secret-row">
      <input
        type="text"
        placeholder="value or \${secret:name}"
        .value=${String(r??"")}
        @change=${n=>this.setValue(e,t,n.target.value)}
      />
      ${s.length>0?j`<select
            title="Insert a secret reference"
            @change=${n=>{const o=n.target.value;o&&this.setValue(e,t,`\${secret:${o}}`),n.target.value=""}}
          >
            <option value="">🔑 secret…</option>
            ${s.map(n=>j`<option value=${n}>${n}</option>`)}
          </select>`:me}
    </div>`}renderField(e,t){const r=`${e.id}:${t.key}`;return j`<div class="field">
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
      ${t.description?j`<p class="desc">${t.description}</p>`:me}
    </div>`}renderGeneral(){return j`
      <h3>General</h3>
      <p class="blurb">
        Workspace settings sync with this workspace; values marked
        <em>user</em> stay on this device only.
      </p>
      <div class="field">
        <div class="field-head"><label>Secrets</label></div>
        <p class="desc">
          Cross-workspace, device-local. One <code>name: value</code> per line.
          Reference a secret from any field with <code>\${secret:name}</code>.
        </p>
        <textarea
          placeholder="githubPAT: ghp_…"
          .value=${this.secretsText}
          @input=${this.onSecretsInput}
        ></textarea>
      </div>
    `}renderPanel(){if(this.active===vr)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?j`
      <h3>${e.name}</h3>
      ${e.fields.length===0?j`<p class="empty">This plugin registered no settings.</p>`:e.fields.map(t=>this.renderField(e,t))}
    `:me}render(){return j`
      <dialog @cancel=${this.close}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>
          <span class="mi sm">close</span>
        </button>
        <div class="dialog-header">
          <h2>Settings</h2>
          <div class="header-actions">
            <button type="button" class="primary" @click=${this.close}>Done</button>
          </div>
        </div>
        <div class="dialog-body">
          <div class="layout">
            <nav class="tabs">
              <button
                class=${this.active===vr?"active":""}
                @click=${()=>this.active=vr}
              >
                General
              </button>
              ${this.tabs.map(e=>j`<button
                  class=${this.active===e.id?"active":""}
                  @click=${()=>this.active=e.id}
                >
                  ${e.name}
                </button>`)}
            </nav>
            <section class="panel">${this.renderPanel()}</section>
          </div>
        </div>
      </dialog>
    `}};Tn.styles=[Jt,Ht,Ye`
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
      .secret-row {
        display: flex;
        gap: 0.4rem;
        align-items: center;
      }
      .secret-row select {
        width: auto;
        flex: 0 0 auto;
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
    `];lr([V()],Tn.prototype,"tabs",2);lr([V()],Tn.prototype,"active",2);lr([V()],Tn.prototype,"values",2);lr([V()],Tn.prototype,"placements",2);lr([V()],Tn.prototype,"secretsText",2);Tn=lr([nt("settings-dialog")],Tn);/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let F={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&F.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let s=arguments[r];if(s==null)continue;s=Object(s);let n=Object.keys(Object(s));for(let o=0,l=n.length;o<l;o++){let u=n[o],h=Object.getOwnPropertyDescriptor(s,u);h!==void 0&&h.enumerable&&(t[u]=s[u])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,s=new Array(r);r--;)s[r]=[t[r],e[t[r]]];return s}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),s=document.createDocumentFragment();r.forEach(function(n){let o=n instanceof Node;s.appendChild(o?n:document.createTextNode(String(n)))}),this.appendChild(s)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,s=this;do for(r=t.length;--r>=0&&t.item(r)!==s;);while(r<0&&(s=s.parentElement));return s}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let s=document.createEvent("CustomEvent");return s.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),s}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),s=r.length>>>0;if(s===0)return!1;let n=t|0,o=Math.max(n>=0?n:s-Math.abs(n),0);function l(u,h){return u===h||typeof u=="number"&&typeof h=="number"&&isNaN(u)&&isNaN(h)}for(;o<s;){if(l(r[o],e))return!0;o++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>F.modifier=e),document.addEventListener("keyup",()=>F.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const s=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(s===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(s),o=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-o)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(s===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(s),o=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-o)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((s,n)=>{(s.startsWith("--")||s.startsWith("var"))&&(r[n]=F.getCssVariableValue(s))}),r.forEach(s=>{F.colorNames[s]?t[2]="#"+F.colorNames[s]:s.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=s:s.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=s:t[2]=s}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),s=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return s&&(t.size=s[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let s=e.indexOf(")");t=e.slice(0,s+1).replace(/\s+/g,""),t.startsWith("var")&&(t=F.getCssVariableValue(t)),r=e.slice(s+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let s=e.indexOf(" ");s>0?(t=e.slice(0,s+1).replace(/\s+/g,""),r=e.slice(s+1,e.length).trim()):t=e,t.startsWith("--")&&(t=F.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let s=r.indexOf(" ");r=r.slice(s+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:F.colorNames[r]?r="#"+F.colorNames[r]:r.match(/^(--|var)/)?r=F.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,s,n,o,l,u,h,g,$,w={};const P=/^#?([\da-f]{3}|[\da-f]{6})$/gi,W=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,L=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,N=this.colorNames;return N[t]&&(t=N[t]),t.match(P)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),s=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),w.rgb={r:parseInt(r,16),g:parseInt(s,16),b:parseInt(n,16)},w.hex=`#${r}${s}${n}`):(w.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},w.hex=`#${t}`),$=this.rgbToHsl(w.rgb.r,w.rgb.g,w.rgb.b),w.hsl=$,w.rgb.css=`rgb(${w.rgb.r},${w.rgb.g},${w.rgb.b})`):t.match(W)?(h=W.exec(t),w.rgb={css:t,r:h[1],g:h[2],b:h[3]},w.hex=this.rgbToHex(h[1],h[2],h[3]),$=this.rgbToHsl(h[1],h[2],h[3]),w.hsl=$):t.match(L)?(h=L.exec(t),o=h[1]/360,l=h[2].slice(0,h[2].length-1)/100,u=h[3].slice(0,h[3].length-1)/100,g=this.hslToRgb(o,l,u),w.rgb={css:`rgb(${g[0]},${g[1]},${g[2]})`,r:g[0],g:g[1],b:g[2]},w.hex=this.rgbToHex(w.rgb.r,w.rgb.g,w.rgb.b),w.hsl={css:`hsl(${h[1]},${h[2]},${h[3]})`,h:h[1],s:h[2],l:h[3]}):(w.hex="#f5f5f5",w.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},w.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),w},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),s=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),o=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",l=this.perceivedBrightness(s)<=t?"#ffffff":"#000000",u=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",h=this.lighten(e,this.colorFilledDark),g=this.perceivedBrightness(h)<=t?"#ffffff":"#000000";return[r.hsl.css,s,n,o,l,u,h,g]},darken(e,t){const r=this.color(e).hsl,s=parseFloat(r.l),n=Math.round(s-s*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,s=parseFloat(r.l),n=Math.round(s+(100-s)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let s,n,o;if(t===0)s=n=o=r;else{let l=(g,$,w)=>(w<0&&(w+=1),w>1&&(w-=1),w<.16666666666666666?g+($-g)*6*w:w<.5?$:w<.6666666666666666?g+($-g)*(.6666666666666666-w)*6:g),u=r<.5?r*(1+t):r+t-r*t,h=2*r-u;s=l(h,u,e+1/3),n=l(h,u,e),o=l(h,u,e-1/3)}return[Math.round(s*255),Math.round(n*255),Math.round(o*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let s=Math.max(e,t,r),n=Math.min(e,t,r),o,l,u=(s+n)/2;if(s===n)o=l=0;else{let h=s-n;switch(l=u>.5?h/(2-s-n):h/(s+n),s){case e:o=(t-r)/h+(t<r?6:0);break;case t:o=(r-e)/h+2;break;case r:o=(e-t)/h+4;break}o/=6}return o=Math.round(o*360),l=Math.round(l*100)+"%",u=Math.round(u*100)+"%",{css:"hsl("+o+","+l+","+u+")",h:o,s:l,l:u}},rgbToHex(e,t,r){let s=Number(e).toString(16),n=Number(t).toString(16),o=Number(r).toString(16);return s.length===1&&(s=`0${s}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${s}${n}${o}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),s=r.filter(l=>l.match(/^(down|right|up|left)$/i));s.length&&(t.autoposition=s[0],r.splice(r.indexOf(s[0]),1));let n=r.filter(l=>l.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let o=r.filter(l=>l.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return o.length&&(t.offsetX=o[0].match(/^[+-]?\d*\.?\d+$/i)?`${o[0]}px`:o[0],o[1]?t.offsetY=o[1].match(/^[+-]?\d*\.?\d+$/i)?`${o[1]}px`:o[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(o[0]),1),o[1]&&r.splice(r.indexOf(o[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(N=>{typeof t[N]=="function"&&(t[N]=t[N].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,s=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),o=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},l=r==="window"?{x:1,y:1}:{x:o.width/r.offsetWidth,y:o.height/r.offsetHeight},u=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);o.width-=(parseFloat(u.borderLeftWidth)+parseFloat(u.borderRightWidth))*l.x,o.height-=(parseFloat(u.borderTopWidth)+parseFloat(u.borderBottomWidth))*l.y;let h;t.of?typeof t.of=="string"?h=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?h=t.of[0].getBoundingClientRect():h=t.of.getBoundingClientRect():h=o;let g=this.getScrollbarWidth(document.body),$=this.getScrollbarWidth(e.parentElement),w="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?w=h.left-o.left-parseFloat(u.borderLeftWidth)+"px":w="0px":t.at.startsWith("center")?t.of?w=h.left-o.left-parseFloat(u.borderLeftWidth)+h.width/2+"px":w=o.width/2+"px":t.at.startsWith("right-")&&(t.of?w=h.left-o.left-parseFloat(u.borderLeftWidth)+h.width+"px":w=o.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?w=h.left-o.left-parseFloat(u.borderLeftWidth)-s.width/2+"px":w=-s.width/2+"px":t.at.startsWith("center")?t.of?w=h.left-o.left-parseFloat(u.borderLeftWidth)-(s.width-h.width)/2+"px":w=o.width/2-s.width/2+"px":t.at.startsWith("right-")&&(t.of?w=h.left-o.left-parseFloat(u.borderLeftWidth)+(h.width-s.width/2)+"px":w=o.width-s.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?w=h.left-o.left-parseFloat(u.borderLeftWidth)-s.width+"px":w=-s.width+"px":t.at.startsWith("center")?t.of?w=h.left-o.left-parseFloat(u.borderLeftWidth)-s.width+h.width/2+"px":w=o.width/2-s.width+"px":t.at.startsWith("right-")&&(t.of?w=h.left-o.left-parseFloat(u.borderLeftWidth)+h.width-s.width+"px":w=o.width-s.width+"px",r!=="window"&&(w=parseFloat(w)-$.y+"px")));let P="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?P=h.top-o.top-parseFloat(u.borderTopWidth)+"px":P="0px":t.at.endsWith("center")?t.of?P=h.top-o.top-parseFloat(u.borderTopWidth)+h.height/2+"px":P=o.height/2+"px":t.at.endsWith("-bottom")&&(t.of?P=h.top-o.top-parseFloat(u.borderTopWidth)+h.height+"px":P=o.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?P=h.top-o.top-parseFloat(u.borderTopWidth)-s.height/2+"px":P=-s.height/2+"px":t.at.endsWith("center")?t.of?P=h.top-o.top-parseFloat(u.borderTopWidth)-s.height/2+h.height/2+"px":P=o.height/2-s.height/2+"px":t.at.endsWith("-bottom")&&(t.of?P=h.top-o.top-parseFloat(u.borderTopWidth)-s.height/2+h.height+"px":P=o.height-s.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?P=h.top-o.top-parseFloat(u.borderTopWidth)-s.height+"px":P=-s.height+"px":t.at.endsWith("center")?t.of?P=h.top-o.top-parseFloat(u.borderTopWidth)-s.height+h.height/2+"px":P=o.height/2-s.height+"px":t.at.endsWith("-bottom")&&(t.of?P=h.top-o.top-parseFloat(u.borderTopWidth)-s.height+h.height+"px":P=o.height-s.height+"px",r!=="window"?P=parseFloat(P)-$.x+"px":P=parseFloat(P)-g.x+"px")),e.style.left=l.x===1?w:parseFloat(w)/l.x+"px",e.style.top=l.y===1?P:parseFloat(P)/l.y+"px";let W=getComputedStyle(e),L={left:W.left,top:W.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(L=this.applyPositionAutopos(e,L,t)),(t.offsetX||t.offsetY)&&(L=this.applyPositionOffset(e,L,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(L=this.applyPositionMinMax(e,L,t)),t.modify&&(L=this.applyPositionModify(e,L,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const s=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(s);const n=Array.prototype.slice.call(document.querySelectorAll(`.${s}`)),o=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((l,u)=>{u>0&&u<=o&&(t.top=parseFloat(t.top)+n[--u].getBoundingClientRect().height+F.autopositionSpacing+"px")});break;case"up":n.forEach((l,u)=>{u>0&&u<=o&&(t.top=parseFloat(t.top)-n[--u].getBoundingClientRect().height-F.autopositionSpacing+"px")});break;case"right":n.forEach((l,u)=>{u>0&&u<=o&&(t.left=parseFloat(t.left)+n[--u].getBoundingClientRect().width+F.autopositionSpacing+"px")});break;case"left":n.forEach((l,u)=>{u>0&&u<=o&&(t.left=parseFloat(t.left)-n[--u].getBoundingClientRect().width-F.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const s=getComputedStyle(e);return{left:s.left,top:s.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const s=getComputedStyle(e);return{left:s.left,top:s.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const s=getComputedStyle(e);return{left:s.left,top:s.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(s=>{e.classList.contains(s)&&(t=s)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),s=document.createElement("button");s.className="btn btn"+t.color.slice(r),document.body.appendChild(s),t.color=getComputedStyle(s).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(s),s=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},s=typeof t=="object"?Object.assign(r,t):r,n=s.bgPanel,o=s.bgContent,l=s.colorHeader,u=s.colorContent,h=s.bgFooter,g=s.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[l]&&(l="#"+this.colorNames[l]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(P=>e.querySelector(P).style.color=this.getCssVariableValue(l)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(P=>P.style.color=this.getCssVariableValue(l)),this.colorNames[o]?e.content.style.background="#"+this.colorNames[o]:e.content.style.background=this.getCssVariableValue(o),this.colorNames[u]?e.content.style.color="#"+this.colorNames[u]:e.content.style.color=this.getCssVariableValue(u),this.perceivedBrightness(l)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(u)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[h]?e.footer.style.background="#"+this.colorNames[h]:e.footer.style.background=this.getCssVariableValue(h),this.colorNames[g]?e.footer.style.color="#"+this.colorNames[g]:e.footer.style.color=this.getCssVariableValue(g),s.border&&e.setBorder(s.border),s.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(s.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,s]of Object.entries(t))e.style[r]=typeof s=="string"?F.getCssVariableValue(s):s;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const s=document.createElement("script");s.src=e,s.type=t,document.head.appendChild(s),r&&(s.onload=r)}},ajax(e,t){let r,s,n=new XMLHttpRequest;const o={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let l=F.strToHtml(this.responseText);r.urlSelector&&(l=l.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(l)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},o,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},o,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&F.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}s=r.url.trim().split(/\s+/),r.url=encodeURI(s[0]),s.length>1&&(s.shift(),r.urlSelector=s.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&F.ajaxAutoresizeAutoreposition(t,r),F.ajaxAlwaysCallbacks.length&&F.ajaxAlwaysCallbacks.forEach(l=>{t?l.call(n,n,t):l.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const s={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(o,l){if(l){let u=F.strToHtml(o);l.contentRemove(),l.content.append(u)}}};if(t&&typeof e=="string")r=Object.assign({},s,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},s,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&F.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(o=>{if(o.ok)return o[r.bodyMethod]()}).then(o=>{t?r.done.call(o,o,t):r.done.call(o,o),t&&(r.autoresize||r.autoreposition)&&F.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const s=r.split(" "),n=Object.assign({},{width:s[0],height:s[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const s=Object.assign({},r);t.autoresize&&e.resize(s),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const s=document.createElement("div"),n=e.parentElement;s.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(s.style.width=r+"px",s.style.height=r+"px"):t==="ct"||t==="cb"?s.style.height=r+"px":(t==="lc"||t==="rc")&&(s.style.width=r+"px"),n!==document.body&&(s.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(s)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",s,n){if(typeof t=="function"&&(t=[t]),r)return t[r](o=>o.call(e,e,s,n));t.forEach(o=>o.call(e,e,s,n))},resetZi(){this.zi=((e=F.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=F.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){F.zi||(F.zi=((m=F.ziBase)=>{let v=m;return{next:()=>v++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${F.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let m=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;F.errorpanel(m)}return!1}let s=this.pOcontainer(e.container);if(typeof s=="object"&&s.length&&s.length>0&&(s=s[0]),!s)return this.errorReporting&&F.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(m=>{e[m]?typeof e[m]=="function"&&(e[m]=[e[m]]):e[m]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const o=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),l=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),u=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),h=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),g=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),$=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),w=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),P=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),W=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),L=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),N=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),U=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),re=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),ce=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),ge=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),Q=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[o,l,u,h,g,$,w,P,W,L,N,U,re,ce].forEach(m=>m.panel=n);const q=n.querySelector(".jsPanel-btn-close"),oe=n.querySelector(".jsPanel-btn-maximize"),be=n.querySelector(".jsPanel-btn-normalize"),$e=n.querySelector(".jsPanel-btn-smallify"),ze=n.querySelector(".jsPanel-btn-minimize");q&&F.pointerup.forEach(m=>{q.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.close(null,!0)})}),oe&&F.pointerup.forEach(m=>{oe.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.maximize()})}),be&&F.pointerup.forEach(m=>{be.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.normalize()})}),$e&&F.pointerup.forEach(m=>{$e.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),ze&&F.pointerup.forEach(m=>{ze.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.minimize()})});let ke=F.extensions;for(let m in ke)Object.prototype.hasOwnProperty.call(ke,m)&&(n[m]=ke[m]);if(n.setBorder=m=>{let v=F.pOborder(m);return v[2].length||(v[2]=n.style.backgroundColor),v=v.join(" "),n.style.border=v,n.options.border=v,n},n.setBorderRadius=m=>{typeof m=="string"&&(m.startsWith("--")||m.startsWith("var"))&&(m=m.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),m=F.getCssVariableValue(m)),typeof m=="number"&&(m+="px"),n.style.borderRadius=m;const v=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=v.borderTopLeftRadius,n.header.style.borderTopRightRadius=v.borderTopRightRadius):(n.content.style.borderTopLeftRadius=v.borderTopLeftRadius,n.content.style.borderTopRightRadius=v.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=v.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=v.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=v.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=v.borderBottomLeftRadius),n},n.setTheme=(m=e.theme,v)=>{let E;if(n.status==="minimized"&&(E=!0,n.normalize()),F.clearTheme(n),typeof m=="object")e.border=void 0,F.applyCustomTheme(n,m);else if(typeof m=="string"){m==="none"&&(m="white");let b=F.getThemeDetails(m);F.applyColorTheme(n,b)}return E&&n.minimize(),v&&v.call(n,n),n},n.remove=(m,v,E)=>{n.parentElement.removeChild(n),document.getElementById(m)?E&&E.call(n,m,n):(n.removeMinimizedReplacement(),n.status="closed",v&&document.dispatchEvent(Q),document.dispatchEvent(ge),n.options.onclosed&&F.processCallbacks(n,n.options.onclosed,"every",v),F.autopositionRemaining(n),E&&E.call(m,m)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(m,v)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(ce),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!F.processCallbacks(n,n.options.onbeforeclose,"some",n.status,v))return n;n.options.animateOut?(n.options.animateIn&&F.remClass(n,n.options.animateIn),F.setClass(n,n.options.animateOut),n.addEventListener("animationend",E=>{E.stopPropagation(),n.remove(n.id,v,m)})):n.remove(n.id,v,m)}},n.maximize=(m,v)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!F.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(g);const E=n.parentElement,b=F.pOcontainment(e.maximizedMargin);return E===document.body?(n.style.width=document.documentElement.clientWidth-b[1]-b[3]+"px",n.style.height=document.documentElement.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"):(n.style.width=E.clientWidth-b[1]-b[3]+"px",n.style.height=E.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"),$e.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),v||n.front(),document.dispatchEvent($),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onmaximized&&F.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=m=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!F.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(w),!document.getElementById("jsPanel-replacement-container")){const v=document.createElement("div");v.id="jsPanel-replacement-container",document.body.append(v)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(P),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let v=n.createMinimizedReplacement(),E,b,C;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(v);break;case"parentpanel":b=n.closest(".jsPanel-content").parentElement,C=b.querySelectorAll(".jsPanel-minimized-box"),E=C[C.length-1],E.append(v);break;case"parent":b=n.parentElement,E=b.querySelector(".jsPanel-minimized-container"),E||(E=document.createElement("div"),E.className="jsPanel-minimized-container",b.append(E)),E.append(v);break;default:document.querySelector(e.minimizeTo).append(v)}}return m&&m.call(n,n,n.statusBefore),e.onminimized&&F.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=m=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!F.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(u),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),$e.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(h),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onnormalized&&F.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=m=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!F.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(W),n.style.overflow="hidden";const v=window.getComputedStyle(n),E=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(v.borderTopWidth)+parseFloat(v.borderBottomWidth)+E+"px",$e.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(L),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(N),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const b=n.querySelectorAll(".jsPanel-minimized-box");return b[b.length-1].style.display="none",m&&m.call(n,n,n.statusBefore),e.onsmallified&&F.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=m=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!F.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(U),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(h),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),$e.style.transform="rotate(0deg)";const v=n.querySelectorAll(".jsPanel-minimized-box");v[v.length-1].style.display="flex",m&&m.call(n,n,n.statusBefore),e.onunsmallified&&F.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(m,v=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const E=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(b=>b.style.zIndex);Math.max(...E)>n.style.zIndex&&(n.style.zIndex=F.zi.next()),F.resetZi()}return document.dispatchEvent(re),m&&m.call(n,n),e.onfronted&&v&&F.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(m,v=!1)=>{if(v||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),m&&typeof m=="function"&&!v)m.call(n,n,n.snappableTo);else if(m!==!1){let E=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const b=F.pOcontainment(n.options.dragit.containment),C=n.snappableTo;C.startsWith("left")?E[0]=b[3]:C.startsWith("right")&&(E[0]=-b[1]),C.endsWith("top")?E[1]=b[0]:C.endsWith("bottom")&&(E[1]=-b[2])}n.reposition(`${n.snappableTo} ${E[0]} ${E[1]}`)}v||(n.snapped=n.snappableTo)},n.move=(m,v)=>{let E=n.overlaps(m,"paddingbox"),b=n.parentElement;return m.appendChild(n),n.options.container=m,n.style.left=E.left+"px",n.style.top=E.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),v&&v.call(n,n,m,b),n},n.closeChildpanels=m=>(n.getChildpanels().forEach(v=>v.close()),m&&m.call(n,n),n),n.getChildpanels=m=>{const v=n.content.querySelectorAll(".jsPanel");return m&&v.forEach((E,b,C)=>{m.call(E,E,b,C)}),v},n.isChildpanel=m=>{const v=n.closest(".jsPanel-content"),E=v?v.parentElement:null;return m&&m.call(n,n,E),v?E:!1},n.contentRemove=m=>(F.emptyNode(n.content),m&&m.call(n,n),n),n.createMinimizedReplacement=()=>{const m=F.createMinimizedTemplate(),v=window.getComputedStyle(n.headertitle).color,E=window.getComputedStyle(n),b=e.iconfont,C=m.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?F.setStyles(m,{backgroundColor:E.backgroundColor,backgroundPositionX:E.backgroundPositionX,backgroundPositionY:E.backgroundPositionY,backgroundRepeat:E.backgroundRepeat,backgroundAttachment:E.backgroundAttachment,backgroundImage:E.backgroundImage,backgroundSize:E.backgroundSize,backgroundOrigin:E.backgroundOrigin,backgroundClip:E.backgroundClip}):m.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,m.id=n.id+"-min",m.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),m.querySelector(".jsPanel-headerlogo")),m.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),m.querySelector(".jsPanel-title")),m.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),m.querySelector(".jsPanel-title").style.color=v,C.style.color=v,C.querySelectorAll("button").forEach(ue=>ue.style.color=v),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(ue=>{n.header.classList.contains(ue)&&m.querySelector(".jsPanel-hdr").classList.add(ue)}),n.setIconfont(b,m),n.dataset.btnnormalize==="enabled"?F.pointerup.forEach(ue=>{m.querySelector(".jsPanel-btn-normalize").addEventListener(ue,pe=>{if(pe.preventDefault(),pe.button&&pe.button>0)return!1;n.normalize()})}):C.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?F.pointerup.forEach(ue=>{m.querySelector(".jsPanel-btn-maximize").addEventListener(ue,pe=>{if(pe.preventDefault(),pe.button&&pe.button>0)return!1;n.maximize()})}):C.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?F.pointerup.forEach(ue=>{m.querySelector(".jsPanel-btn-close").addEventListener(ue,pe=>{if(pe.preventDefault(),pe.button&&pe.button>0)return!1;n.close(null,!0)})}):C.querySelector(".jsPanel-btn-close").style.display="none",m},n.removeMinimizedReplacement=()=>{const m=document.getElementById(`${n.id}-min`);m&&m.parentElement.removeChild(m)},n.drag=(m={})=>{let v,E,b;const C=new CustomEvent("jspaneldragstart",{detail:n.id}),ue=new CustomEvent("jspaneldrag",{detail:n.id}),pe=new CustomEvent("jspaneldragstop",{detail:n.id});[C,ue,pe].forEach(He=>He.panel=n);const K=He=>{let Be=He.split("-");return Be.forEach((_e,Re)=>{Be[Re]=_e.charAt(0).toUpperCase()+_e.slice(1)}),"snap"+Be.join("")};function X(He){He.relatedTarget===null&&F.pointermove.forEach(Be=>{document.removeEventListener(Be,E,!1),n.style.opacity=1})}let Xe=m.handles||F.defaults.dragit.handles,ct=m.cursor||F.defaults.dragit.cursor;function tn(He){if(F.pointermove.forEach(Be=>document.removeEventListener(Be,E)),F.removeSnapAreas(),v){if(n.style.opacity=1,v=void 0,b.snap){switch(n.snappableTo){case"left-top":n.snap(b.snap.snapLeftTop);break;case"center-top":n.snap(b.snap.snapCenterTop);break;case"right-top":n.snap(b.snap.snapRightTop);break;case"right-center":n.snap(b.snap.snapRightCenter);break;case"right-bottom":n.snap(b.snap.snapRightBottom);break;case"center-bottom":n.snap(b.snap.snapCenterBottom);break;case"left-bottom":n.snap(b.snap.snapLeftBottom);break;case"left-center":n.snap(b.snap.snapLeftCenter);break}b.snap.callback&&n.snappableTo&&typeof b.snap.callback=="function"&&(b.snap.callback.call(n,n),b.snap.repositionOnSnap&&b.snap[K(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&b.snap.repositionOnSnap&&b.snap[K(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Be=n.parentElement;n.move(n.droppableTo),b.drop.callback&&b.drop.callback.call(n,n,n.droppableTo,Be)}if(document.dispatchEvent(pe),b.stop.length){let Be=window.getComputedStyle(n),_e={left:parseFloat(Be.left),top:parseFloat(Be.top),width:parseFloat(Be.width),height:parseFloat(Be.height)};F.processCallbacks(n,b.stop,!1,_e,He)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Be=>Be.style.pointerEvents="auto"),document.removeEventListener(He,tn)}return n.querySelectorAll(Xe).forEach(He=>{He.style.touchAction="none",He.style.cursor=ct,F.pointerdown.forEach(Be=>{He.addEventListener(Be,_e=>{if(_e.button&&_e.button>0||(b=Object.assign({},F.defaults.dragit,m),b.disableOnMaximized&&n.status==="maximized"))return!1;if((b.containment||b.containment===0)&&(b.containment=F.pOcontainment(b.containment)),b.grid&&Array.isArray(b.grid)&&b.grid.length===1&&(b.grid[1]=b.grid[0]),b.snap&&(typeof b.snap=="object"?b.snap=Object.assign({},F.defaultSnapConfig,b.snap):b.snap=F.defaultSnapConfig),_e.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(tt=>tt.style.pointerEvents="none");let Re=window.getComputedStyle(n),Qe=parseFloat(Re.left),Ie=parseFloat(Re.top),se=parseFloat(Re.width),Je=parseFloat(Re.height),Me=_e.touches?_e.touches[0].clientX:_e.clientX,fe=_e.touches?_e.touches[0].clientY:_e.clientY,Ce=n.parentElement,_t=Ce.getBoundingClientRect(),de=window.getComputedStyle(Ce),Ze=n.getScaleFactor(),bn=0,Gt=F.getScrollbarWidth(Ce);E=tt=>{if(tt.preventDefault(),!v){if(document.dispatchEvent(C),n.style.opacity=b.opacity,n.snapped&&b.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let ae=n.getBoundingClientRect(),De=Me-(ae.left+ae.width),we=ae.width/2;De>-we&&(bn=De+we)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),b.drop&&b.drop.dropZones){let ae=b.drop.dropZones.map(we=>F.pOcontainer(we)),De=[];ae.forEach(function(we){we.length?we.forEach(function(Le){De.push(Le)}):De.push(we)}),De=De.filter(function(we,Le,Ve){return Ve.indexOf(we)===Le}),b.drop.dropZones=De}b.start.length&&F.processCallbacks(n,b.start,!1,{left:Qe,top:Ie,width:se,height:Je},tt)}v=1;let At,Fe,We,xt,st,Te,Ae,Tt,Ke,bt,dt=tt.touches?tt.touches[0].clientX:tt.clientX,it=tt.touches?tt.touches[0].clientY:tt.clientY,Ue=window.getComputedStyle(n),he;if(Ce===document.body){let ae=n.getBoundingClientRect();Ke=window.innerWidth-parseInt(de.borderLeftWidth,10)-parseInt(de.borderRightWidth,10)-(ae.left+ae.width),bt=window.innerHeight-parseInt(de.borderTopWidth,10)-parseInt(de.borderBottomWidth,10)-(ae.top+ae.height)}else Ke=parseInt(de.width,10)-parseInt(de.borderLeftWidth,10)-parseInt(de.borderRightWidth,10)-(parseInt(Ue.left,10)+parseInt(Ue.width,10)),bt=parseInt(de.height,10)-parseInt(de.borderTopWidth,10)-parseInt(de.borderBottomWidth,10)-(parseInt(Ue.top,10)+parseInt(Ue.height,10));At=parseFloat(Ue.left),We=parseFloat(Ue.top),st=Ke,Ae=bt,b.snap&&(b.snap.trigger==="panel"?(Fe=At**2,xt=We**2,Te=st**2,Tt=Ae**2):b.snap.trigger==="pointer"&&(n.options.container==="window"?(At=dt,We=it,st=window.innerWidth-dt,Ae=window.innerHeight-it,Fe=dt**2,xt=We**2,Te=st**2,Tt=Ae**2):(he=n.overlaps(Ce,"paddingbox",tt),At=he.pointer.left,We=he.pointer.top,st=he.pointer.right,Ae=he.pointer.bottom,Fe=he.pointer.left**2,xt=he.pointer.top**2,Te=he.pointer.right**2,Tt=he.pointer.bottom**2)));let et=Math.sqrt(Fe+xt),Z=Math.sqrt(Fe+Tt),ot=Math.sqrt(Te+xt),pt=Math.sqrt(Te+Tt),Ct=Math.abs(At-st)/2,ee=Math.abs(We-Ae)/2,nn=Math.sqrt(Fe+ee**2),un=Math.sqrt(xt+Ct**2),ht=Math.sqrt(Te+ee**2),yn=Math.sqrt(Tt+Ct**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(ue),(!b.axis||b.axis==="x")&&(n.style.left=Qe+(dt-Me)/Ze.x+bn+"px"),(!b.axis||b.axis==="y")&&(n.style.top=Ie+(it-fe)/Ze.y+"px"),b.grid){let ae=b.grid,De=b.axis,we=ae[0]*Math.round((Qe+(dt-Me))/ae[0]),Le=ae[1]*Math.round((Ie+(it-fe))/ae[1]);(!De||De==="x")&&(n.style.left=`${we}px`),(!De||De==="y")&&(n.style.top=`${Le}px`)}if(b.containment||b.containment===0){let ae=b.containment,De,we;if(n.options.container==="window")De=window.innerWidth-parseFloat(Ue.width)-ae[1]-Gt.y,we=window.innerHeight-parseFloat(Ue.height)-ae[2]-Gt.x;else{let Le=parseFloat(de.borderLeftWidth)+parseFloat(de.borderRightWidth),Ve=parseFloat(de.borderTopWidth)+parseFloat(de.borderBottomWidth);De=_t.width/Ze.x-parseFloat(Ue.width)-ae[1]-Le-Gt.y,we=_t.height/Ze.y-parseFloat(Ue.height)-ae[2]-Ve-Gt.x}parseFloat(n.style.left)<=ae[3]&&(n.style.left=ae[3]+"px"),parseFloat(n.style.top)<=ae[0]&&(n.style.top=ae[0]+"px"),parseFloat(n.style.left)>=De&&(n.style.left=De+"px"),parseFloat(n.style.top)>=we&&(n.style.top=we+"px")}if(b.drag.length){let ae={left:At,top:We,right:st,bottom:Ae,width:parseFloat(Ue.width),height:parseFloat(Ue.height)};F.processCallbacks(n,b.drag,!1,ae,tt)}if(b.snap){let ae=b.snap.sensitivity,De=Ce===document.body?window.innerWidth/8:_t.width/8,we=Ce===document.body?window.innerHeight/8:_t.height/8;n.snappableTo=!1,F.removeSnapAreas(),et<ae?b.snap.snapLeftTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-top",F.createSnapArea(n,"lt",ae)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(he.pointer.left>0&&he.pointer.top>0?(n.snappableTo="left-top",F.createSnapArea(n,"lt",ae)):(n.snappableTo=!1,F.removeSnapAreas()))):Z<ae?b.snap.snapLeftBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-bottom",F.createSnapArea(n,"lb",ae)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(he.pointer.left>0&&he.pointer.bottom>0?(n.snappableTo="left-bottom",F.createSnapArea(n,"lb",ae)):(n.snappableTo=!1,F.removeSnapAreas()))):ot<ae?b.snap.snapRightTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-top",F.createSnapArea(n,"rt",ae)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(he.pointer.right>0&&he.pointer.top>0?(n.snappableTo="right-top",F.createSnapArea(n,"rt",ae)):(n.snappableTo=!1,F.removeSnapAreas()))):pt<ae?b.snap.snapRightBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-bottom",F.createSnapArea(n,"rb",ae)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(he.pointer.right>0&&he.pointer.bottom>0?(n.snappableTo="right-bottom",F.createSnapArea(n,"rb",ae)):(n.snappableTo=!1,F.removeSnapAreas()))):We<ae&&un<De?b.snap.snapCenterTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-top",F.createSnapArea(n,"ct",ae)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(he.pointer.top>0?(n.snappableTo="center-top",F.createSnapArea(n,"ct",ae)):(n.snappableTo=!1,F.removeSnapAreas()))):At<ae&&nn<we?b.snap.snapLeftCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-center",F.createSnapArea(n,"lc",ae)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(he.pointer.left>0?(n.snappableTo="left-center",F.createSnapArea(n,"lc",ae)):(n.snappableTo=!1,F.removeSnapAreas()))):st<ae&&ht<we?b.snap.snapRightCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-center",F.createSnapArea(n,"rc",ae)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(he.pointer.right>0?(n.snappableTo="right-center",F.createSnapArea(n,"rc",ae)):(n.snappableTo=!1,F.removeSnapAreas()))):Ae<ae&&yn<De&&b.snap.snapCenterBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-bottom",F.createSnapArea(n,"cb",ae)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(he.pointer.bottom>0?(n.snappableTo="center-bottom",F.createSnapArea(n,"cb",ae)):(n.snappableTo=!1,F.removeSnapAreas())))}if(b.drop&&b.drop.dropZones){let ae=F.isIE?"msElementsFromPoint":"elementsFromPoint",De=document[ae](tt.clientX,tt.clientY);Array.isArray(De)||(De=Array.prototype.slice.call(De)),b.drop.dropZones.forEach(we=>{De.includes(we)&&(n.droppableTo=we)}),De.includes(n.droppableTo)||(n.droppableTo=!1)}},F.pointermove.forEach(tt=>document.addEventListener(tt,E)),window.addEventListener("mouseout",X,!1)})}),F.pointerup.forEach(Be=>{document.addEventListener(Be,tn),window.removeEventListener("mouseout",X)}),m.disable&&(He.style.pointerEvents="none")}),n},n.dragit=m=>{const v=Object.assign({},F.defaults.dragit,e.dragit),E=n.querySelectorAll(v.handles);return m==="disable"?E.forEach(b=>b.style.pointerEvents="none"):E.forEach(b=>b.style.pointerEvents="auto"),n},n.sizeit=(m={})=>{const v=new CustomEvent("jspanelresizestart",{detail:n.id}),E=new CustomEvent("jspanelresize",{detail:n.id}),b=new CustomEvent("jspanelresizestop",{detail:n.id});[v,E,b].forEach(_e=>_e.panel=n);let C={},ue,pe,K,X,Xe,ct;C.handles=m.handles||F.defaults.resizeit.handles,C.handles.split(",").forEach(_e=>{const Re=document.createElement("DIV");Re.className=`jsPanel-resizeit-handle jsPanel-resizeit-${_e.trim()}`,n.append(Re)});let tn=m.aspectRatio?m.aspectRatio:!1;function He(_e){_e.relatedTarget===null&&F.pointermove.forEach(Re=>document.removeEventListener(Re,ue,!1))}function Be(_e){if(F.pointermove.forEach(Re=>document.removeEventListener(Re,ue,!1)),_e.target.classList&&_e.target.classList.contains("jsPanel-resizeit-handle")){let Re,Qe,Ie=_e.target.className;if(Ie.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(Re=!0),Ie.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Qe=!0),C.grid&&Array.isArray(C.grid)){C.grid.length===1&&(C.grid[1]=C.grid[0]);const se=parseFloat(n.style.width),Je=parseFloat(n.style.height),Me=se%C.grid[0],fe=Je%C.grid[1],Ce=parseFloat(n.style.left),_t=parseFloat(n.style.top),de=Ce%C.grid[0],Ze=_t%C.grid[1];Me<C.grid[0]/2?n.style.width=se-Me+"px":n.style.width=se+(C.grid[0]-Me)+"px",fe<C.grid[1]/2?n.style.height=Je-fe+"px":n.style.height=Je+(C.grid[1]-fe)+"px",Re&&(de<C.grid[0]/2?n.style.left=Ce-de+"px":n.style.left=Ce+(C.grid[0]-de)+"px"),Qe&&(Ze<C.grid[1]/2?n.style.top=_t-Ze+"px":n.style.top=_t+(C.grid[1]-Ze)+"px")}}if(pe){n.content.style.pointerEvents="inherit",pe=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let Re=n.controlbar.querySelector(".jsPanel-btn-smallify"),Qe=n.getBoundingClientRect();if(Re&&Qe.height>ct+5&&(Re.style.transform="rotate(0deg)"),document.dispatchEvent(b),C.stop.length){let Ie=window.getComputedStyle(n),se={left:parseFloat(Ie.left),top:parseFloat(Ie.top),width:parseFloat(Ie.width),height:parseFloat(Ie.height)};F.processCallbacks(n,C.stop,!1,se,_e)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Re=>Re.style.pointerEvents="auto"),C.aspectRatio=tn,document.removeEventListener(_e,Be)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(_e=>{_e.style.touchAction="none",F.pointerdown.forEach(Re=>{_e.addEventListener(Re,Qe=>{if(Qe.preventDefault(),Qe.stopPropagation(),Qe.button&&Qe.button>0)return!1;let Ie=1;if(C=Object.assign({},F.defaults.resizeit,m),(C.containment||C.containment===0)&&(C.containment=F.pOcontainment(C.containment)),C.aspectRatio&&C.aspectRatio===!0&&(C.aspectRatio="panel"),F.modifier){let we=F.modifier;we.altKey?C.aspectRatio="content":we.ctrlKey?C.aspectRatio="panel":we.shiftKey&&(C.aspectRatio=!1,Ie=2)}let se=typeof C.maxWidth=="function"?C.maxWidth():C.maxWidth||1e4,Je=typeof C.maxHeight=="function"?C.maxHeight():C.maxHeight||1e4,Me=typeof C.minWidth=="function"?C.minWidth():C.minWidth,fe=typeof C.minHeight=="function"?C.minHeight():C.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(we=>we.style.pointerEvents="none");const Ce=n.parentElement,_t=Ce.tagName.toLowerCase(),de=n.getBoundingClientRect(),Ze=Ce.getBoundingClientRect(),bn=window.getComputedStyle(Ce,null),Gt=parseInt(bn.borderLeftWidth,10),tt=parseInt(bn.borderTopWidth,10),At=bn.getPropertyValue("position"),Fe=Qe.clientX||Qe.clientX===0||Qe.touches[0].clientX,We=Qe.clientY||Qe.clientY===0||Qe.touches[0].clientY,xt=Fe/We,st=Qe.target.classList,Te=n.getScaleFactor(),Ae=de.width/de.height,Tt=n.content.getBoundingClientRect(),Ke=Tt.width/Tt.height,bt=n.header.getBoundingClientRect().height,dt=n.footer.getBoundingClientRect().height||0;let it=de.left,Ue=de.top,he=1e4,et=1e4,Z=1e4,ot=1e4;Xe=de.width,ct=de.height,_t!=="body"&&(it=de.left-Ze.left+Ce.scrollLeft,Ue=de.top-Ze.top+Ce.scrollTop),_t==="body"&&C.containment?(he=document.documentElement.clientWidth-de.left,Z=document.documentElement.clientHeight-de.top,et=de.width+de.left,ot=de.height+de.top):C.containment&&(At==="static"?(he=Ze.width-de.left+Gt,Z=Ze.height+Ze.top-de.top+tt,et=de.width+(de.left-Ze.left)-Gt,ot=de.height+(de.top-Ze.top)-tt):(he=Ce.clientWidth-(de.left-Ze.left)/Te.x+Gt,Z=Ce.clientHeight-(de.top-Ze.top)/Te.y+tt,et=(de.width+de.left-Ze.left)/Te.x-Gt,ot=n.clientHeight+(de.top-Ze.top)/Te.y-tt)),C.containment&&(et-=C.containment[3],ot-=C.containment[0],he-=C.containment[1],Z-=C.containment[2]);const pt=window.getComputedStyle(n),Ct=parseFloat(pt.width)-de.width,ee=parseFloat(pt.height)-de.height;let nn=parseFloat(pt.left)-de.left,un=parseFloat(pt.top)-de.top;Ce!==document.body&&(nn+=Ze.left,un+=Ze.top);let ht=parseInt(pt.borderTopWidth,10),yn=parseInt(pt.borderRightWidth,10),ae=parseInt(pt.borderBottomWidth,10),De=parseInt(pt.borderLeftWidth,10);ue=we=>{we.preventDefault(),pe||(document.dispatchEvent(v),C.start.length&&F.processCallbacks(n,C.start,!1,{width:Xe,height:ct,left:it,top:Ue},we),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),de.height>ct+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),pe=1,document.dispatchEvent(E);let Le=we.touches?we.touches[0].clientX:we.clientX,Ve=we.touches?we.touches[0].clientY:we.clientY,Oe;st.contains("jsPanel-resizeit-e")?(K=Xe+(Le-Fe)*Ie/Te.x+Ct,K>=he&&(K=he),K>=se&&(K=se),K<=Me&&(K=Me),n.style.width=K+"px",Ie===2&&(n.style.left=it-(Le-Fe)+"px"),C.aspectRatio==="content"?(n.style.height=(K-yn-De)/Ke+bt+dt+ht+ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.bottom<=C.containment[2]&&(n.style.height=Z+"px",n.style.width=Z*Ke+"px"))):C.aspectRatio==="panel"&&(n.style.height=K/Ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.bottom<=C.containment[2]&&(n.style.height=Z+"px",n.style.width=Z*Ae+"px")))):st.contains("jsPanel-resizeit-s")?(X=ct+(Ve-We)*Ie/Te.y+ee,X>=Z&&(X=Z),X>=Je&&(X=Je),X<=fe&&(X=fe),n.style.height=X+"px",Ie===2&&(n.style.top=Ue-(Ve-We)+"px"),C.aspectRatio==="content"?(n.style.width=(X-bt-dt-ht-ae)*Ke+ht+ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.right<=C.containment[1]&&(n.style.width=he+"px",n.style.height=he/Ke+"px"))):C.aspectRatio==="panel"&&(n.style.width=X*Ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.right<=C.containment[1]&&(n.style.width=he+"px",n.style.height=he/Ae+"px")))):st.contains("jsPanel-resizeit-w")?(K=Xe+(Fe-Le)*Ie/Te.x+Ct,K<=se&&K>=Me&&K<=et&&(n.style.left=it+(Le-Fe)/Te.x+nn+"px"),K>=et&&(K=et),K>=se&&(K=se),K<=Me&&(K=Me),n.style.width=K+"px",C.aspectRatio==="content"?(n.style.height=(K-yn-De)/Ke+bt+dt+ht+ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.bottom<=C.containment[2]&&(n.style.height=Z+"px",n.style.width=Z*Ke+"px"))):C.aspectRatio==="panel"&&(n.style.height=K/Ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.bottom<=C.containment[2]&&(n.style.height=Z+"px",n.style.width=Z*Ae+"px")))):st.contains("jsPanel-resizeit-n")?(X=ct+(We-Ve)*Ie/Te.y+ee,X<=Je&&X>=fe&&X<=ot&&(n.style.top=Ue+(Ve-We)/Te.y+un+"px"),X>=ot&&(X=ot),X>=Je&&(X=Je),X<=fe&&(X=fe),n.style.height=X+"px",C.aspectRatio==="content"?(n.style.width=(X-bt-dt-ht-ae)*Ke+ht+ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.right<=C.containment[1]&&(n.style.width=he+"px",n.style.height=he/Ke+"px"))):C.aspectRatio==="panel"&&(n.style.width=X*Ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.right<=C.containment[1]&&(n.style.width=he+"px",n.style.height=he/Ae+"px")))):st.contains("jsPanel-resizeit-se")?(K=Xe+(Le-Fe)*Ie/Te.x+Ct,K>=he&&(K=he),K>=se&&(K=se),K<=Me&&(K=Me),n.style.width=K+"px",Ie===2&&(n.style.left=it-(Le-Fe)+"px"),C.aspectRatio&&(n.style.height=K/Ae+"px"),X=ct+(Ve-We)*Ie/Te.y+ee,X>=Z&&(X=Z),X>=Je&&(X=Je),X<=fe&&(X=fe),n.style.height=X+"px",Ie===2&&(n.style.top=Ue-(Ve-We)+"px"),C.aspectRatio==="content"?(n.style.width=(X-bt-dt-ht-ae)*Ke+ht+ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.right<=C.containment[1]&&(n.style.width=he+"px",n.style.height=he/Ke+"px"))):C.aspectRatio==="panel"&&(n.style.width=X*Ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.right<=C.containment[1]&&(n.style.width=he+"px",n.style.height=he/Ae+"px")))):st.contains("jsPanel-resizeit-sw")?(X=ct+(Ve-We)*Ie/Te.y+ee,X>=Z&&(X=Z),X>=Je&&(X=Je),X<=fe&&(X=fe),n.style.height=X+"px",Ie===2&&(n.style.top=Ue-(Ve-We)+"px"),C.aspectRatio&&(n.style.width=X*Ae+"px"),K=Xe+(Fe-Le)*Ie/Te.x+Ct,K<=se&&K>=Me&&K<=et&&(n.style.left=it+(Le-Fe)/Te.x+nn+"px"),K>=et&&(K=et),K>=se&&(K=se),K<=Me&&(K=Me),n.style.width=K+"px",C.aspectRatio==="content"?(n.style.height=(K-yn-De)/Ke+bt+dt+ht+ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.bottom<=C.containment[2]&&(n.style.height=Z+"px",n.style.width=Z*Ke+"px"))):C.aspectRatio==="panel"&&(n.style.height=K/Ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.bottom<=C.containment[2]&&(n.style.height=Z+"px",n.style.width=Z*Ae+"px")))):st.contains("jsPanel-resizeit-ne")?(K=Xe+(Le-Fe)*Ie/Te.x+Ct,K>=he&&(K=he),K>=se&&(K=se),K<=Me&&(K=Me),n.style.width=K+"px",Ie===2&&(n.style.left=it-(Le-Fe)+"px"),C.aspectRatio&&(n.style.height=K/Ae+"px"),X=ct+(We-Ve)*Ie/Te.y+ee,X<=Je&&X>=fe&&X<=ot&&(n.style.top=Ue+(Ve-We)/Te.y+un+"px"),X>=ot&&(X=ot),X>=Je&&(X=Je),X<=fe&&(X=fe),n.style.height=X+"px",C.aspectRatio==="content"?(n.style.width=(X-bt-dt-ht-ae)*Ke+ht+ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.right<=C.containment[1]&&(n.style.width=he+"px",n.style.height=he/Ke+"px"))):C.aspectRatio==="panel"&&(n.style.width=X*Ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.right<=C.containment[1]&&(n.style.width=he+"px",n.style.height=he/Ae+"px")))):st.contains("jsPanel-resizeit-nw")&&(C.aspectRatio&&st.contains("jsPanel-resizeit-nw")&&(Le=Ve*xt,Ve=Le/xt),K=Xe+(Fe-Le)*Ie/Te.x+Ct,K<=se&&K>=Me&&K<=et&&(n.style.left=it+(Le-Fe)/Te.x+nn+"px"),K>=et&&(K=et),K>=se&&(K=se),K<=Me&&(K=Me),n.style.width=K+"px",C.aspectRatio&&(n.style.height=K/Ae+"px"),X=ct+(We-Ve)*Ie/Te.y+ee,X<=Je&&X>=fe&&X<=ot&&(n.style.top=Ue+(Ve-We)/Te.y+un+"px"),X>=ot&&(X=ot),X>=Je&&(X=Je),X<=fe&&(X=fe),n.style.height=X+"px",C.aspectRatio==="content"?n.style.width=(X-bt-dt-ht-ae)*Ke+ht+ae+"px":C.aspectRatio==="panel"&&(n.style.width=X*Ae+"px")),window.getSelection().removeAllRanges();const Yt=window.getComputedStyle(n),qe={left:parseFloat(Yt.left),top:parseFloat(Yt.top),right:parseFloat(Yt.right),bottom:parseFloat(Yt.bottom),width:parseFloat(Yt.width),height:parseFloat(Yt.height)};C.resize.length&&F.processCallbacks(n,C.resize,!1,qe,we)},F.pointermove.forEach(we=>document.addEventListener(we,ue,!1)),window.addEventListener("mouseout",He,!1)})}),F.pointerup.forEach(function(Re){document.addEventListener(Re,Be),window.removeEventListener("mouseout",He)}),m.disable&&(_e.style.pointerEvents="none")}),n},n.resizeit=m=>{const v=n.querySelectorAll(".jsPanel-resizeit-handle");return m==="disable"?v.forEach(E=>E.style.pointerEvents="none"):v.forEach(E=>E.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const m=n.getBoundingClientRect();return{x:m.width/n.offsetWidth,y:m.height/n.offsetHeight}},n.calcSizeFactors=()=>{const m=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(m.left)/(window.innerWidth-parseFloat(m.width)),n.vf=parseFloat(m.top)/(window.innerHeight-parseFloat(m.height));else if(n.parentElement){let v=n.parentElement.getBoundingClientRect();n.hf=parseFloat(m.left)/(v.width-parseFloat(m.width)),n.vf=parseFloat(m.top)/(v.height-parseFloat(m.height))}},n.saveCurrentDimensions=()=>{const m=window.getComputedStyle(n);n.currentData.width=m.width,n.currentData.height=m.height},n.saveCurrentPosition=()=>{const m=window.getComputedStyle(n);n.currentData.left=m.left,n.currentData.top=m.top},n.reposition=(...m)=>{let v=e.position,E=!0,b;return m.forEach(C=>{typeof C=="string"||typeof C=="object"?v=C:typeof C=="boolean"?E=C:typeof C=="function"&&(b=C)}),F.position(n,v),n.slaves&&n.slaves.size>0&&n.slaves.forEach(C=>C.reposition()),E&&n.saveCurrentPosition(),b&&b.call(n,n),n},n.repositionOnSnap=m=>{let v="0",E="0",b=F.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(m){case"left-top":v=b[3],E=b[0];break;case"right-top":v=-b[1],E=b[0];break;case"right-bottom":v=-b[1],E=-b[2];break;case"left-bottom":v=b[3],E=-b[2];break;case"center-top":v=b[3]/2-b[1]/2,E=b[0];break;case"center-bottom":v=b[3]/2-b[1]/2,E=-b[2];break;case"left-center":v=b[3],E=b[0]/2-b[2]/2;break;case"right-center":v=-b[1],E=b[0]/2-b[2]/2;break}F.position(n,m),F.setStyles(n,{left:`calc(${n.style.left} + ${v}px)`,top:`calc(${n.style.top} + ${E}px)`})},n.overlaps=(m,v,E)=>{let b=n.getBoundingClientRect(),C=getComputedStyle(n.parentElement),ue=n.getScaleFactor(),pe={top:0,right:0,bottom:0,left:0},K,X=0,Xe=0,ct=0,tn=0;n.options.container!=="window"&&v==="paddingbox"&&(pe.top=parseInt(C.borderTopWidth,10)*ue.y,pe.right=parseInt(C.borderRightWidth,10)*ue.x,pe.bottom=parseInt(C.borderBottomWidth,10)*ue.y,pe.left=parseInt(C.borderLeftWidth,10)*ue.x),typeof m=="string"?m==="window"?K={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:m==="parent"?K=n.parentElement.getBoundingClientRect():K=document.querySelector(m).getBoundingClientRect():K=m.getBoundingClientRect(),E&&(X=E.touches?E.touches[0].clientX:E.clientX,Xe=E.touches?E.touches[0].clientY:E.clientY,ct=X-K.left,tn=Xe-K.top);let He=b.left<K.right&&b.right>K.left,Be=b.top<K.bottom&&b.bottom>K.top;return{overlaps:He&&Be,top:b.top-K.top-pe.top,right:K.right-b.right-pe.right,bottom:K.bottom-b.bottom-pe.bottom,left:b.left-K.left-pe.left,parentBorderWidth:pe,panelRect:b,referenceRect:K,pointer:{clientX:X,clientY:Xe,left:ct-pe.left,top:tn-pe.top,right:K.width-ct-pe.right,bottom:K.height-tn-pe.bottom}}},n.setSize=()=>{if(e.panelSize){const m=F.pOsize(n,e.panelSize);n.style.width=m.width,n.style.height=m.height}else if(e.contentSize){const m=F.pOsize(n,e.contentSize);n.content.style.width=m.width,n.content.style.height=m.height,n.style.width=m.width,n.content.style.width="100%"}return n},n.resize=(...m)=>{let v=window.getComputedStyle(n),E={width:v.width,height:v.height},b=!0,C;m.forEach(K=>{typeof K=="string"?E=K:typeof K=="object"?E=Object.assign(E,K):typeof K=="boolean"?b=K:typeof K=="function"&&(C=K)});let ue=F.pOsize(n,E);n.style.width=ue.width,n.style.height=ue.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(K=>K.reposition()),b&&n.saveCurrentDimensions(),n.status="normalized";let pe=n.controlbar.querySelector(".jsPanel-btn-smallify");return pe&&(pe.style.transform="rotate(0deg)"),C&&C.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=m=>{if(m.target===window){let v=n.status,E=e.onwindowresize,b,C;if(v==="maximized"&&E)n.maximize(!1,!0);else if(n.snapped&&v!=="minimized")n.snap(n.snapped,!0);else if(v==="normalized"||v==="smallified"||v==="maximized"){let ue=typeof E;ue==="boolean"?(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",C=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=C<=0?0:C+"px"):ue==="function"?E.call(n,m,n):ue==="object"&&(E.preset===!0&&(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",C=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=C<=0?0:C+"px"),E.callback.call(n,m,n))}else v==="smallifiedmax"&&E&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(ue=>ue.reposition())}},n.setControls=(m,v)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(E=>{const b=E.className.split("-"),C=b[b.length-1];n.getAttribute(`data-btn${C}`)!=="hidden"&&(E.style.display="block")}),m.forEach(E=>{const b=n.controlbar.querySelector(E);b&&(b.style.display="none")}),v&&v.call(n,n),n),n.setControlStatus=(m,v="enable",E)=>{const b=n.controlbar.querySelector(`.jsPanel-btn-${m}`);switch(v){case"disable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"disabled"),b.style.pointerEvents="none",b.style.opacity=.4,b.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"hidden"),b.style.display="none");break;case"show":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"enabled"),b.style.display="block",b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.getAttribute(`data-btn${m}`)==="hidden"&&(b.style.display="block"),n.setAttribute(`data-btn${m}`,"enabled"),b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(b),n.setAttribute(`data-btn${m}`,"removed");break}return E&&E.call(n,n),n},n.setControlSize=m=>{const v=m.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(b=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(C=>b.classList.remove(C)),b.classList.add(`jsPanel-btn-${v}`)}),v==="xl"?n.titlebar.style.fontSize="1.5rem":v==="lg"?n.titlebar.style.fontSize="1.25rem":v==="md"?n.titlebar.style.fontSize="1.05rem":v==="sm"?n.titlebar.style.fontSize=".9rem":v==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=m=>{if(n.options.headerControls.add){let C=n.options.headerControls.add;Array.isArray(C)||(C=[C]),C.forEach(ue=>n.addControl(ue))}let v=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(C=>{let ue=C.className.match(/jsPanel-btn-[a-z\d]{3,}/i),pe=ue[0].substring(12);v.push(pe)});const b=F.pOheaderControls(e.headerControls);return e.headerControls=b,v.forEach(C=>{b[C]&&n.setControlStatus(C,b[C])}),n.setControlSize(b.size),m&&m.call(n,n),n},n.setHeaderLogo=(m,v)=>{let E=[n.headerlogo],b=document.querySelector("#"+n.id+"-min");return b&&E.push(b.querySelector(".jsPanel-headerlogo")),typeof m=="string"?m.startsWith("<")?E.forEach(C=>C.innerHTML=m):E.forEach(C=>{F.emptyNode(C);let ue=document.createElement("img");ue.src=m,C.append(ue)}):E.forEach(C=>{F.emptyNode(C),C.append(m)}),n.headerlogo.childNodes.forEach(C=>{C.nodeName&&C.nodeName==="IMG"&&C.setAttribute("draggable","false")}),v&&v.call(n,n),n},n.setHeaderRemove=m=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(v=>n.setAttribute(`data-btn${v}`,"removed")),m&&m.call(n,n),n),n.setHeaderTitle=(m,v)=>{let E=[n.headertitle],b=document.querySelector("#"+n.id+"-min");return b&&E.push(b.querySelector(".jsPanel-title")),typeof m=="string"?E.forEach(C=>C.innerHTML=m):typeof m=="function"?E.forEach(C=>{F.emptyNode(C),C.innerHTML=m()}):E.forEach(C=>{F.emptyNode(C),C.append(m)}),v&&v.call(n,n),n},n.setIconfont=(m,v=n,E)=>{if(m){let b,C;if(m==="fa"||m==="far"||m==="fal"||m==="fas"||m==="fad")b=[`${m} fa-window-close`,`${m} fa-window-maximize`,`${m} fa-window-restore`,`${m} fa-window-minimize`,`${m} fa-chevron-up`];else if(m==="material-icons")b=[m,m,m,m,m,m],C=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(m))b=[`custom-control-icon ${m[4]}`,`custom-control-icon ${m[3]}`,`custom-control-icon ${m[2]}`,`custom-control-icon ${m[1]}`,`custom-control-icon ${m[0]}`];else if(m==="bootstrap"||m==="glyphicon")b=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return v;v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(ue=>F.emptyNode(ue).innerHTML="<span></span>"),Array.prototype.slice.call(v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((ue,pe)=>{ue.className=b[pe],m==="material-icons"&&(ue.textContent=C[pe])})}return E&&E.call(v,v),v},n.addToolbar=(m,v,E)=>{if(m==="header"?m=n.headertoolbar:m==="footer"&&(m=n.footer),typeof v=="string")m.innerHTML=v;else if(Array.isArray(v))v.forEach(b=>{typeof b=="string"?m.innerHTML+=b:m.append(b)});else if(typeof v=="function"){let b=v.call(n,n);typeof b=="string"?m.innerHTML=b:m.append(b)}else m.append(v);return m.classList.add("active"),E&&E.call(n,n),n},n.addCloseControl=()=>{let m=document.createElement("button"),v=n.content.style.color;return m.classList.add("jsPanel-addCloseCtrl"),m.innerHTML=F.icons.close,m.style.color=v,n.options.rtl&&m.classList.add("rtl"),n.appendChild(m),F.pointerup.forEach(E=>{m.addEventListener(E,b=>{if(b.preventDefault(),b.button&&b.button>0)return!1;n.close(null,!0)})}),F.pointerdown.forEach(E=>{m.addEventListener(E,b=>b.preventDefault())}),n},n.addControl=m=>{if(!m.html)return n;m.position||(m.position=1);const v=n.controlbar.querySelectorAll(".jsPanel-btn").length;let E=document.createElement("button");E.innerHTML=m.html,E.className=`jsPanel-btn jsPanel-btn-${m.name} jsPanel-btn-${e.headerControls.size}`,E.style.color=n.header.style.color,m.position>v?n.controlbar.append(E):n.controlbar.insertBefore(E,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${m.position})`));const b=m.ariaLabel||m.name;return b&&E.setAttribute("aria-label",b),F.pointerup.forEach(C=>{E.addEventListener(C,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;m.handler.call(n,n,E)})}),m.afterInsert&&m.afterInsert.call(E,E),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(m=>{m.dir="rtl",e.rtl.lang&&(m.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),s.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),F.isIE){let m=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":m.forEach(v=>{v.style.height="34px"});break;case"xs":m.forEach(v=>{v.style.height="26px"});break;case"sm":m.forEach(v=>{v.style.height="30px"});break;case"lg":m.forEach(v=>{v.style.height="38px"});break;case"xl":m.forEach(v=>{v.style.height="42px"});break}}if(e.header==="auto-show-hide"){let m="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,m),this.setClass(n.content,m),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,F.setClass(n,m),F.remClass(n.content,m)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,F.remClass(n,m),F.setClass(n.content,m)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[m,v]of Object.entries(e.css))if(m==="panel")n.className+=` ${v}`;else{let E=n.querySelector(`.jsPanel-${m}`);E&&(E.className+=` ${v}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const m=e.contentOverflow.split(" ");m.length===1?n.content.style.overflow=m[0]:m.length===2&&(n.content.style.overflowX=m[0],n.content.style.overflowY=m[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let m=Object.assign({},F.defaultAutocloseConfig,e.autoclose);m.time&&typeof m.time=="number"&&(m.time+="ms");let v=n.progressbar.querySelector("div");v.addEventListener("animationend",E=>{E.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),m.progressbar&&(n.progressbar.classList.add("active"),m.background?F.colorNames[m.background]?n.progressbar.style.background="#"+F.colorNames[m.background]:n.progressbar.style.background=m.background:n.progressbar.classList.add("success-bg")),v.style.animation=`${m.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(h),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let m=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=m,e.dragit.snap===!0?(e.dragit.snap=F.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=m)}if(e.dragit?(["start","drag","stop"].forEach(m=>{e.dragit[m]?typeof e.dragit[m]=="function"&&(e.dragit[m]=[e.dragit[m]]):e.dragit[m]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",m=>{m.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(v=>{e.resizeit[v]?typeof e.resizeit[v]=="function"&&(e.resizeit[v]=[e.resizeit[v]]):e.resizeit[v]=[]}),n.sizeit(e.resizeit);let m;n.addEventListener("jspanelresizestart",v=>{v.panel===n&&(m=n.status)},!1),n.addEventListener("jspanelresizestop",v=>{v.panel===n&&(m==="smallified"||m==="smallifiedmax"||m==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(h),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(m=>{n.addEventListener(m,v=>{!v.target.closest(".jsPanel-btn-close")&&!v.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let m=e.onparentresize,v=typeof m,E=n.isChildpanel();if(E){const b=E.content;let C=[];n.parentResizeHandler=ue=>{if(ue.panel===E){C[0]=b.offsetWidth,C[1]=b.offsetHeight;let pe=n.status,K,X;pe==="maximized"&&m?n.maximize():n.snapped&&pe!=="minimized"?n.snap(n.snapped,!0):pe==="normalized"||pe==="smallified"||pe==="maximized"?v==="function"?m.call(n,n,{width:C[0],height:C[1]}):v==="object"&&m.preset===!0?(K=(C[0]-n.offsetWidth)*n.hf,n.style.left=K<=0?0:K+"px",X=(C[1]-n.offsetHeight)*n.vf,n.style.top=X<=0?0:X+"px",m.callback.call(n,n,{width:C[0],height:C[1]})):v==="boolean"&&(K=(C[0]-n.offsetWidth)*n.hf,n.style.left=K<=0?0:K+"px",X=(C[1]-n.offsetHeight)*n.vf,n.style.top=X<=0?0:X+"px"):pe==="smallifiedmax"&&m&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(m=>m.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(m=>m.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(m=>m.call(n,n)):t.call(n,n)),document.dispatchEvent(o),n}};var zp=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,Zi=(e,t,r,s)=>{for(var n=s>1?void 0:s?Lp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&zp(t,r,n),n};function Bp(e,t){(ln.instance??Mp()).show(e,t)}function Mp(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let ln=class extends Ne{constructor(){super(...arguments),this.name="",this.info=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close()}connectedCallback(){super.connectedCallback(),ln.instance=this}disconnectedCallback(){super.disconnectedCallback(),ln.instance===this&&(ln.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Wt(this.dialogEl,e)}show(e,t){this.name=e,this.info=t,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,r){if(!t&&!r)return me;const s=r?j`<a href=${r} target="_blank" rel="noopener noreferrer">${t||r}</a>`:j`${t}`;return j`<dt>${e}</dt>
      <dd>${s}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl);return j`
      <dialog @cancel=${this.close}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <div class="dialog-header">
          <h2>${this.name}</h2>
          <div class="header-actions">
            <button type="button" class="ghost" @click=${this.close}>Close</button>
          </div>
        </div>
        <div class="dialog-body">
          ${e?.descriptionHtml?j`<div class="desc">${ds(e.descriptionHtml)}</div>`:e?.description?j`<div class="desc">${e.description}</div>`:me}
          ${t?j`<dl>
                ${this.row("Source",e?.source,e?.sourceUrl)}
                ${this.row("License",e?.license,e?.licenseUrl)}
                ${this.row("About",e?.about,e?.aboutUrl)}
              </dl>`:me}
          ${!e?.description&&!e?.descriptionHtml&&!t?j`<p class="empty">No additional information.</p>`:me}
        </div>
      </dialog>
    `}};ln.instance=null;ln.styles=[Ht,Ye`
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
    `];Zi([V()],ln.prototype,"name",2);Zi([V()],ln.prototype,"info",2);ln=Zi([nt("table-info-dialog")],ln);const Np=.25,Up=4;function qp(e){return Math.min(Up,Math.max(Np,e))}function Sa(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const xr={x:0,y:0,scale:1};function _a(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Hp(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function Wp(e,t){let r={...xr};t.style.transformOrigin="0 0";const s=new Set,n=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`;for(const v of s)v({...r})};let o="none",l={...xr},u=0,h=0,g=0,$=0,w=0,P=0;const W=(v,E)=>{const b=e.getBoundingClientRect();return{x:v-b.left,y:E-b.top}},L=v=>{if(v.touches.length===2){o="pinch",l={...r};const[E,b]=[v.touches[0],v.touches[1]];g=_a(E,b)||1;const C=W((E.clientX+b.clientX)/2,(E.clientY+b.clientY)/2);$=(C.x-r.x)/r.scale,w=(C.y-r.y)/r.scale,v.preventDefault();return}if(v.touches.length===1&&!Hp(v.target)){const E=v.timeStamp;if(E-P<300){r={...xr},n(),P=0,o="none",v.preventDefault();return}P=E,o="pan",l={...r},u=v.touches[0].clientX,h=v.touches[0].clientY}else o="none"},N=v=>{if(o==="pan"&&v.touches.length===1){const E=v.touches[0];r=Sa(l,E.clientX-u,E.clientY-h),n(),v.preventDefault()}else if(o==="pinch"&&v.touches.length>=2){const[E,b]=[v.touches[0],v.touches[1]],C=qp(l.scale*(_a(E,b)/g)),ue=W((E.clientX+b.clientX)/2,(E.clientY+b.clientY)/2);r={x:ue.x-$*C,y:ue.y-w*C,scale:C},n(),v.preventDefault()}},U=v=>{v.touches.length===0?o="none":v.touches.length===1&&o==="pinch"&&(o="pan",l={...r},u=v.touches[0].clientX,h=v.touches[0].clientY)};let re=!1,ce={...xr},ge=0,Q=0,q=!1;const oe=(v,E)=>{const b=e.getBoundingClientRect();return v>=b.left&&v<=b.right&&E>=b.top&&E<=b.bottom},be=v=>{if(!re)return;const E=v.clientX-ge,b=v.clientY-Q;!q&&Math.hypot(E,b)<4||(q=!0,document.body.style.cursor="grabbing",r=Sa(ce,E,b),n(),v.preventDefault())},$e=()=>{re&&(re=!1,document.body.style.cursor="",window.removeEventListener("mousemove",be,!0),window.removeEventListener("mouseup",ze,!0))};function ze(){$e()}const ke=v=>{v.button===2&&oe(v.clientX,v.clientY)&&(re=!0,q=!1,ce={...r},ge=v.clientX,Q=v.clientY,window.addEventListener("mousemove",be,!0),window.addEventListener("mouseup",ze,!0))},m=v=>{q&&(v.preventDefault(),q=!1)};return e.addEventListener("touchstart",L,{passive:!1}),e.addEventListener("touchmove",N,{passive:!1}),e.addEventListener("touchend",U),e.addEventListener("touchcancel",U),window.addEventListener("mousedown",ke,!0),window.addEventListener("contextmenu",m,!0),{snapshot:()=>({...r}),reset:()=>{r={...xr},n()},restore:v=>{r={...v},n()},subscribe:v=>(s.add(v),()=>s.delete(v)),dispose:()=>{e.removeEventListener("touchstart",L),e.removeEventListener("touchmove",N),e.removeEventListener("touchend",U),e.removeEventListener("touchcancel",U),window.removeEventListener("mousedown",ke,!0),window.removeEventListener("contextmenu",m,!0),$e()}}}function Nl(e,t){let r=null;const s=n=>{const o=document.getElementById(e);o&&(o.style.transformOrigin="0 0",o.style.transform=`translate(${-n.x/n.scale}px, ${-n.y/n.scale}px) scale(${1/n.scale})`)};return{enter(){const n=t();r||!n||(s(n.snapshot()),r=n.subscribe(s))},exit(){r?.(),r=null;const n=document.getElementById(e);n&&(n.style.transform="",n.style.transformOrigin="")}}}const Kp=200,Vp=100;function Gp(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<Kp||e.h<Vp?null:{...e}}var Yp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,zr=(e,t,r,s)=>{for(var n=s>1?void 0:s?Xp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Yp(t,r,n),n};let Wn=class extends Ne{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return j`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return j`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};Wn.styles=[Jt,Ye`
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
    `];zr([qt({type:String})],Wn.prototype,"tableId",2);zr([V()],Wn.prototype,"query",2);zr([V()],Wn.prototype,"open",2);zr([Kn("input")],Wn.prototype,"inputEl",2);Wn=zr([nt("panel-search")],Wn);var Qp=Object.defineProperty,Jp=Object.getOwnPropertyDescriptor,cr=(e,t,r,s)=>{for(var n=s>1?void 0:s?Jp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Qp(t,r,n),n};let Pn=class extends Ne{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const r=t?.currentTarget??void 0,s=await ye();try{await Promise.resolve(e.onClick(s.api,{tableId:this.tableId,anchor:r}))}catch(n){console.error(`[table-button:${e.id}]`,n)}}}async connectedCallback(){super.connectedCallback();const e=await ye();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(r=>r.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await ye();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await ye(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const s of t.columns)r[s.field]=Zp(s);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}render(){return j`
      <button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
        <span class="mi sm">add</span>
      </button>
      <button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>j`<button
              class=${e.danger?"danger":""}
              title=${e.tooltip??e.label}
              aria-label=${e.label}
              @click=${t=>this.runTableButton(e,t)}
            >
              ${e.icon?e.icon.trimStart().startsWith("<svg")?j`<span class="icon-svg">${Ha(e.icon)}</span>`:j`<span class="mi sm">${e.icon}</span>`:j`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Pn.styles=[Jt,Ye`
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
    `];cr([qt({type:String})],Pn.prototype,"tableId",2);cr([qt({type:Boolean})],Pn.prototype,"active",2);cr([V()],Pn.prototype,"rowCount",2);cr([V()],Pn.prototype,"tableButtons",2);cr([V()],Pn.prototype,"table",2);Pn=cr([nt("panel-footer")],Pn);function Zp(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function bi(e){return e.title?.trim()?e.title.trim():e.name}function em(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function tm(e){const t=document.querySelector("app-shell")?.shadowRoot,r=t?.querySelector("header"),s=t?.querySelector("footer");r&&(e.style.top=`${r.offsetHeight}px`),s&&(e.style.bottom=`${s.offsetHeight}px`)}const Nn=new Map,fs=new Set,Ul=new Set;let Aa=!1,eo=null;function nm(){return eo}async function rm(){if(Aa)return;Aa=!0;const e=await ye(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");if(t&&r){eo=Wp(t,r);const n=()=>tm(t);n(),window.addEventListener("resize",n);const o=document.querySelector("app-shell")?.shadowRoot,l=o?.querySelector("header"),u=o?.querySelector("footer");if(typeof ResizeObserver<"u"&&(l||u)){const h=new ResizeObserver(n);l&&h.observe(l),u&&h.observe(u)}}const s=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);s.sort(Ta);for(const n of s)Pa(n,e);e.store.tables.subscribe(n=>{const o=n.filter(h=>h.workspaceId===e.workspaceId),l=new Set(o.map(h=>h.id));for(const[h,g]of Nn)if(!l.has(h)){Nn.delete(h),fs.add(h),Ul.add(h);try{g.status!=="closed"&&g.close()}catch{}}const u=o.filter(h=>!Nn.has(h.id)).sort(Ta);for(const h of u)Pa(h,e)})}function Ta(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const sm=720,im=360;function Pa(e,t){const r=`panel-${ql(e.id)}`,s=em(),n=Gp(e.windowGeometry),o=n?.minimized===!0,l=()=>{const E=document.createElement("data-table");return E.tableId=e.id,E.style.height="100%",E},u=o?document.createElement("div"):l();let h=o?null:u,g=bi(e),$=-1,w=-1;const P=()=>{typeof q.setHeaderTitle=="function"&&q.setHeaderTitle(g+pl($,w))},W=E=>{const b=E.detail;b.key===e.id&&($=b.count,w=b.total,P())};document.addEventListener(xs,W);const L=()=>{re.active=!1,h?.remove(),h=null},N=()=>{if(h)return;const E=document.getElementById(r)?.querySelector(".jsPanel-content");if(!E)return;E.replaceChildren();const b=l();E.appendChild(b),h=b,re.active=!0},U=document.createElement("panel-search");U.tableId=e.id;const re=document.createElement("panel-footer");re.tableId=e.id,re.active=!o;const ce=Nl(r,()=>eo),ge=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:am(),Q=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:`${sm} ${im}`},q=F.create({id:r,container:s,headerTitle:g,footerToolbar:re,theme:"primary",content:u,...Q,position:ge,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>yi(e.id,t)},resizeit:{containment:!1,stop:()=>yi(e.id,t)},onfronted:()=>lm(e.id,t),onbeforeclose:()=>fs.has(e.id)?!0:((async()=>await t.api.ui.dialogs.confirm(e.source?`Remove the live table "${e.name}"? Its data stays on the Datasette server.`:`Delete table "${e.name}" and all its rows?`,"Confirm")&&(fs.add(e.id),Nn.get(e.id)?.close()))(),!1),onclosed:async()=>{Nn.delete(e.id),fs.delete(e.id),!Ul.delete(e.id)&&await cm(e.id,t)},onstatuschange:E=>{E.status==="minimized"?L():(E.status==="normalized"||E.status==="maximized")&&N(),E.status==="maximized"?ce.enter():ce.exit(),yi(e.id,t)}});Nn.set(e.id,q);const oe=document.getElementById(r),be=oe?.querySelector(".jsPanel-controlbar");be&&be.prepend(U);const $e=oe?.querySelector(".jsPanel-titlebar");$e&&($e.tabIndex=-1,$e.style.outline="none",$e.addEventListener("pointerdown",()=>$e.focus()));let ze=null;const ke=document.createElement("button");ke.type="button",ke.title="Table info",ke.setAttribute("aria-label","Table info"),ke.className="eda-info-btn",ke.textContent="ⓘ",ke.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",ke.addEventListener("click",E=>{E.stopPropagation(),ze&&Bp(g,ze)}),be?.prepend(ke);const m=E=>{ze=E?.info??null,ke.style.display=ze?"inline-flex":"none"};m(e),n?.maximized&&typeof q.maximize=="function"?queueMicrotask(()=>q.maximize?.()):n?.minimized&&typeof q.minimize=="function"&&queueMicrotask(()=>q.minimize?.()),t.store.tables.subscribe(E=>{const b=E.find(C=>C.id===e.id);b&&(m(b),bi(b)!==g&&(g=bi(b),P()))});const v=q.close.bind(q);q.close=()=>(document.removeEventListener(xs,W),v())}let om=0;function am(){const e=om++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function yi(e,t){const r=document.getElementById(`panel-${ql(e)}`);if(!r)return;const s=Nn.get(e)?.status??"normalized";try{const o=(await t.store.tables.findOne(e))?.windowGeometry,l=s==="minimized",u=s==="maximized";let h=r.offsetLeft,g=r.offsetTop,$=r.offsetWidth,w=r.offsetHeight;(l||u)&&o&&(h=o.x,g=o.y,$=o.w,w=o.h),h<=-9e3&&(h=o?.x??40);const P={x:h,y:g,w:$,h:w,z:o?.z??0,minimized:l,maximized:u};await t.store.tables.patch(e,{windowGeometry:P,updatedAt:Date.now()})}catch{}}async function lm(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const s=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...s,z:Date.now()},updatedAt:Date.now()})}catch{}}async function cm(e,t){if(!(await t.store.tables.findOne(e))?.source){const s=t.store.rows(e),n=await s.find();await s.bulkRemove(n.map(o=>o.id))}await t.store.tables.remove(e)}function ql(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var um=Object.defineProperty,dm=Object.getOwnPropertyDescriptor,Vt=(e,t,r,s)=>{for(var n=s>1?void 0:s?dm(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&um(t,r,n),n};let St=class extends Ne{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await ye(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const r=await e.store.tables.findOne(t.tableId);this.tableColumns=r?.columns??[],r&&t.tableName!==r.name&&e.store.viewInstances.patch(t.id,{tableName:r.name});const s=new Map(this.tableColumns.map(o=>[o.field,o]));this.columns=t.visibleColumns.map(o=>s.get(o)??{field:o,label:o,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(o=>{const l=o.find(u=>u.id===this.viewInstanceId);if(l){if(l.tableId!==this.instance?.tableId){this.instance=l,this.reload();return}this.instance=l,this.recompute()}});const n=e.store.rows(t.tableId);this.rowsUnsub=n.subscribe(o=>{this.allRows=o,this.recompute()}),this.allRows=await n.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;let e=Vf(this.allRows,this.instance);const t=(n,o)=>Object.values(n.data).some(l=>l!=null&&String(l).toLowerCase().includes(o)),r=this.searchQuery.trim(),s=this.globalQuery.trim();r&&(e=vs(e,r,t)),s&&(e=vs(e,s,t)),this.rows=e,this.templateOn&&fl(this.viewInstanceId,e.length,this.allRows.length)}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await ye()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||Pi(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&Pi(this.instance.tableId,{editInstanceId:this.instance.id})}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,s=t.includes(e)?t.filter(o=>o!==e):[...t,e];if(s.length===0)return;await(await ye()).store.viewInstances.patch(this.instance.id,{visibleColumns:s,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:s}}renderTable(){return this.rows.length===0?j`<div class="vw-empty">No rows.</div>`:j`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>j`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>j`<tr>
                ${this.columns.map(t=>{const r=e.data[t.field];return j`<td>${r==null?"":String(r)}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}renderTemplated(){const e=this.template;if(!e)return j`<div class="vw-empty">This view's template is missing.</div>`;if(Gf(e.rowHtml)){const t=this.instance?.mapping??{},r=this.rows.map(n=>Hf(e.rowHtml,n,t)).join(""),s=(e.headerHtml??"")+r+(e.footerHtml??"");return j`<div class="vw-root">${ds(s)}</div>`}return j`<div class="vw-root">
      ${e.headerHtml?.trim()?j`<div class="vw-html">${ds(e.headerHtml)}</div>`:me}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?j`<div class="vw-html">${ds(e.footerHtml)}</div>`:me}
    </div>`}renderFooter(){if(!this.instance)return me;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return j`<div class="vw-footer">
      ${!e&&this.showColsMenu?j`<div class="cols-menu">
            ${this.tableColumns.map(r=>j`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(r.field)}
                    @change=${()=>void this.toggleColumn(r.field)}
                  />${r.label||r.field}</label
                >`)}
          </div>`:me}
      ${e?me:j`<button
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
      ${this.template?j`<button
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
    </div>`}render(){if(!this.loaded)return j`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return j`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const t=this.templateOn?j`<div class="vw-body scroll">${this.renderTemplated()}</div>`:j`<div class="vw-body grid">
          <data-table
            .tableId=${this.instance?.tableId??""}
            .viewInstanceId=${this.viewInstanceId}
          ></data-table>
        </div>`;return j`${t}${this.renderFooter()}`}};St.styles=[Jt,Ye`
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
    `];Vt([qt({type:String})],St.prototype,"viewInstanceId",2);Vt([V()],St.prototype,"loaded",2);Vt([V()],St.prototype,"error",2);Vt([V()],St.prototype,"instance",2);Vt([V()],St.prototype,"template",2);Vt([V()],St.prototype,"columns",2);Vt([V()],St.prototype,"tableColumns",2);Vt([V()],St.prototype,"rows",2);Vt([V()],St.prototype,"showColsMenu",2);Vt([V()],St.prototype,"searchQuery",2);Vt([V()],St.prototype,"globalQuery",2);St=Vt([nt("view-window")],St);const Xt=new Map;let Ia=!1;function Da(e){e.panel.setHeaderTitle?.(e.name+pl(e.count,e.total))}function hm(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function fm(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Hl(e){return`view-panel-${fm(e)}`}async function pm(){if(Ia)return;Ia=!0;const e=await ye(),t=r=>r.filter(s=>s.workspaceId===e.workspaceId&&s.open);for(const r of t(await e.store.viewInstances.find()))Ra(r,e);e.store.viewInstances.subscribe(r=>{const s=new Map(t(r).map(n=>[n.id,n]));for(const n of[...Xt.keys()])s.has(n)||gm(n);for(const[n,o]of s)Xt.has(n)||Ra(o,e)}),e.store.tables.subscribe(r=>void mm(e,r)),document.addEventListener(xs,r=>{const s=r.detail,n=Xt.get(s.key);n&&(n.count=s.count,n.total=s.total,Da(n))}),document.addEventListener("easydb:reload-view",r=>{const s=r.detail?.instanceId;if(!s)return;const n=Xt.get(s);n&&(async()=>{const o=await e.store.viewInstances.findOne(s);o&&(n.name=o.name,Da(n)),n.el.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of Xt.values())r.reload()})}async function mm(e,t){const r=t.filter(l=>l.workspaceId===e.workspaceId),s=new Set(r.map(l=>l.id)),n=new Map;for(const l of r)n.has(l.name)||n.set(l.name,l);const o=await e.store.viewInstances.find();for(const l of o){if(l.workspaceId!==e.workspaceId||s.has(l.tableId)||!l.tableName)continue;const u=n.get(l.tableName);u&&await e.store.viewInstances.patch(l.id,{tableId:u.id,updatedAt:Date.now()})}}function Ra(e,t){if(Xt.has(e.id))return;const r=Hl(e.id),s=document.createElement("view-window");s.viewInstanceId=e.id,s.style.height="100%";const n=e.windowGeometry,o=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:"480 520"},l=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:{my:"center-top",at:"center-top",offsetY:60},u=Nl(r,nm),h=F.create({id:r,container:hm(),headerTitle:e.name,theme:"#0891b2",content:s,...o,position:l,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>void wi(e.id)},resizeit:{containment:!1,stop:()=>void wi(e.id)},onstatuschange:P=>{P.status==="maximized"?u.enter():u.exit(),wi(e.id)},onclosed:()=>{Xt.delete(e.id),u.exit(),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});Xt.set(e.id,{panel:h,el:s,name:e.name,count:-1,total:-1});const g=document.getElementById(r),$=document.createElement("panel-search");$.tableId=e.id,g?.querySelector(".jsPanel-controlbar")?.prepend($);const w=g?.querySelector(".jsPanel-titlebar");w&&(w.tabIndex=-1,w.style.outline="none",w.addEventListener("pointerdown",()=>w.focus())),n?.maximized?queueMicrotask(()=>h.maximize?.()):n?.minimized&&queueMicrotask(()=>h.minimize?.())}function gm(e){const t=Xt.get(e);if(t){Xt.delete(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}async function wi(e){const t=document.getElementById(Hl(e)),r=Xt.get(e);if(!t||!r)return;const s=r.panel.status,n=s==="minimized",o=s==="maximized";try{const l=await ye(),u=(await l.store.viewInstances.findOne(e))?.windowGeometry;let h=t.offsetLeft,g=t.offsetTop,$=t.offsetWidth,w=t.offsetHeight;(n||o)&&u&&(h=u.x,g=u.y,$=u.w,w=u.h),h<=-9e3&&(h=u?.x??40);const P={x:h,y:g,w:$,h:w,z:0,minimized:n,maximized:o};await l.store.viewInstances.patch(e,{windowGeometry:P,updatedAt:Date.now()})}catch{}}var bm=Object.defineProperty,ym=Object.getOwnPropertyDescriptor,Wl=(e,t,r,s)=>{for(var n=s>1?void 0:s?ym(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&bm(t,r,n),n};let Cs=class extends Ne{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await ye();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(s=>s.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await rm(),await pm()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?j``:j`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};Cs.styles=Ye`
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
  `;Wl([V()],Cs.prototype,"tables",2);Cs=Wl([nt("table-list")],Cs);var wm=Object.defineProperty,vm=Object.getOwnPropertyDescriptor,to=(e,t,r,s)=>{for(var n=s>1?void 0:s?vm(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&wm(t,r,n),n};let _r=class extends Ne{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await ye();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const s=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(s)}async addWorkspace(){const t=await(await ye()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return j`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>j`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};_r.styles=[Jt,Ye`
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
  `];to([V()],_r.prototype,"workspaces",2);to([V()],_r.prototype,"current",2);_r=to([nt("workspace-selector")],_r);var Oa=Object.freeze,Kl=Object.defineProperty,xm=Object.getOwnPropertyDescriptor,cn=(e,t,r,s)=>{for(var n=s>1?void 0:s?xm(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Kl(t,r,n),n},$m=(e,t)=>Oa(Kl(e,"raw",{value:Oa(e.slice())})),ja;function Fa(e){return e?e.trimStart().startsWith("<svg")?j`<span class="icon-svg">${Ha(e)}</span>`:j`<span class="mi sm">${e}</span>`:""}let Ut=class extends Ne{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{za(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!za(e))return;e.preventDefault();const t=await ye(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const s of[...t.registries.dropHandlers])try{if(await s(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=(e,t)=>{if(!this.api)return;const r=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:r})).catch(s=>{console.error(`[footer-button:${e.id}]`,s)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings)}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await ye();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e))}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return j`
        <button class="icon-btn" title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
          ${Fa(e.icon)}
        </button>
      `;const r=t==="header"||e.variant==="primary"?"primary":"slot";return j`
      <button class=${r} title=${e.tooltip??e.label} @click=${s=>this.runSlot(e,s)}>
        ${Fa(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return j(ja||(ja=$m([`
      <header>
        <strong>easyDBAccess <span class="version">v0.0.106</span></strong>
        `,`
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
      <settings-dialog></settings-dialog>
      <script-editor-dialog><\/script-editor-dialog>
      <host-dialogs></host-dialogs>
      <toast-host></toast-host>
    `])),this.headerButtons.filter(e=>e.variant!=="secondary").map(e=>this.renderSlotButton(e,"header")),this.searchOpen?j`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?j`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:j`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              @click=${this.openSearch}
            >
              <span class="mi">search</span>
            </button>`,this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Ut.styles=[Jt,Ye`
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
    `];cn([Kn("new-table-dialog")],Ut.prototype,"dialog",2);cn([Kn("csv-paste-dialog")],Ut.prototype,"csvPasteDialog",2);cn([Kn("plugin-manager-dialog")],Ut.prototype,"pluginManagerDialog",2);cn([Kn("settings-dialog")],Ut.prototype,"settingsDialog",2);cn([Kn("input.search")],Ut.prototype,"searchInput",2);cn([V()],Ut.prototype,"footerButtons",2);cn([V()],Ut.prototype,"headerButtons",2);cn([V()],Ut.prototype,"searchQuery",2);cn([V()],Ut.prototype,"searchOpen",2);Ut=cn([nt("app-shell")],Ut);function za(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([ye(),Sn(()=>Promise.resolve().then(()=>Fl),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{Ye as a,j as b,Jt as c,Ht as d,Ne as i,Wt as m,V as r,nt as t};
//# sourceMappingURL=index-URmRtCQ_.js.map
