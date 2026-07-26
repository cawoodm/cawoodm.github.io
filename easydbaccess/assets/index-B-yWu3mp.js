(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const ec="modulepreload",tc=function(e){return"/easydbaccess/"+e},xo={},Sn=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){let l=function(b){return Promise.all(b.map(C=>Promise.resolve(C).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),h=u?.nonce||u?.getAttribute("nonce");n=l(r.map(b=>{if(b=tc(b),b in xo)return;xo[b]=!0;const C=b.endsWith(".css"),w=C?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${b}"]${w}`))return;const A=document.createElement("link");if(A.rel=C?"stylesheet":ec,C||(A.as="script"),A.crossOrigin="",A.href=b,h&&A.setAttribute("nonce",h),document.head.appendChild(A),C)return new Promise((H,U)=>{A.addEventListener("load",H),A.addEventListener("error",()=>U(new Error(`Unable to preload CSS for ${b}`)))})}))}function o(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return n.then(l=>{for(const u of l||[])u.status==="rejected"&&o(u.reason);return t().catch(o)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const si=globalThis,Es=si.ShadowRoot&&(si.ShadyCSS===void 0||si.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ss=Symbol(),$o=new WeakMap;let Sa=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==Ss)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Es&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=$o.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&$o.set(r,t))}return t}toString(){return this.cssText}};const nc=e=>new Sa(typeof e=="string"?e:e+"",void 0,Ss),et=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,o)=>i+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new Sa(r,e,Ss)},rc=(e,t)=>{if(Es)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),n=si.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}},ko=Es?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return nc(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ic,defineProperty:sc,getOwnPropertyDescriptor:oc,getOwnPropertyNames:ac,getOwnPropertySymbols:lc,getPrototypeOf:cc}=Object,wi=globalThis,Co=wi.trustedTypes,uc=Co?Co.emptyScript:"",dc=wi.reactiveElementPolyfillSupport,wr=(e,t)=>e,ci={toAttribute(e,t){switch(t){case Boolean:e=e?uc:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},_s=(e,t)=>!ic(e,t),Eo={attribute:!0,type:String,converter:ci,reflect:!1,useDefault:!1,hasChanged:_s};Symbol.metadata??=Symbol("metadata"),wi.litPropertyMetadata??=new WeakMap;let Jn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Eo){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&sc(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){const{get:n,set:o}=oc(this.prototype,t)??{get(){return this[r]},set(l){this[r]=l}};return{get:n,set(l){const u=n?.call(this);o?.call(this,l),this.requestUpdate(t,u,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Eo}static _$Ei(){if(this.hasOwnProperty(wr("elementProperties")))return;const t=cc(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(wr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(wr("properties"))){const r=this.properties,i=[...ac(r),...lc(r)];for(const n of i)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(ko(n))}else t!==void 0&&r.push(ko(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return rc(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:ci).toAttribute(r,i.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,r){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const o=i.getPropertyOptions(n),l=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ci;this._$Em=n;const u=l.fromAttribute(r,o.type);this[n]=u??this._$Ej?.get(n)??u,this._$Em=null}}requestUpdate(t,r,i,n=!1,o){if(t!==void 0){const l=this.constructor;if(n===!1&&(o=this[t]),i??=l.getPropertyOptions(t),!((i.hasChanged??_s)(o,r)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(l._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:n,wrapped:o},l){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,l??r??this[t]),o!==!0||l!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i){const{wrapped:l}=o,u=this[n];l!==!0||this._$AL.has(n)||u===void 0||this.C(n,void 0,o,u)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Jn.elementStyles=[],Jn.shadowRootOptions={mode:"open"},Jn[wr("elementProperties")]=new Map,Jn[wr("finalized")]=new Map,dc?.({ReactiveElement:Jn}),(wi.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const As=globalThis,So=e=>e,ui=As.trustedTypes,_o=ui?ui.createPolicy("lit-html",{createHTML:e=>e}):void 0,_a="$lit$",En=`lit$${Math.random().toFixed(9).slice(2)}$`,Aa="?"+En,hc=`<${Aa}>`,Nn=document,vr=()=>Nn.createComment(""),xr=e=>e===null||typeof e!="object"&&typeof e!="function",Ps=Array.isArray,fc=e=>Ps(e)||typeof e?.[Symbol.iterator]=="function",is=`[ 	
\f\r]`,br=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ao=/-->/g,Po=/>/g,zn=RegExp(`>|${is}(?:([^\\s"'>=/]+)(${is}*=${is}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),To=/'/g,Do=/"/g,Pa=/^(?:script|style|textarea|title)$/i,pc=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),L=pc(1),Un=Symbol.for("lit-noChange"),me=Symbol.for("lit-nothing"),Io=new WeakMap,Bn=Nn.createTreeWalker(Nn,129);function Ta(e,t){if(!Ps(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return _o!==void 0?_o.createHTML(t):t}const mc=(e,t)=>{const r=e.length-1,i=[];let n,o=t===2?"<svg>":t===3?"<math>":"",l=br;for(let u=0;u<r;u++){const h=e[u];let b,C,w=-1,A=0;for(;A<h.length&&(l.lastIndex=A,C=l.exec(h),C!==null);)A=l.lastIndex,l===br?C[1]==="!--"?l=Ao:C[1]!==void 0?l=Po:C[2]!==void 0?(Pa.test(C[2])&&(n=RegExp("</"+C[2],"g")),l=zn):C[3]!==void 0&&(l=zn):l===zn?C[0]===">"?(l=n??br,w=-1):C[1]===void 0?w=-2:(w=l.lastIndex-C[2].length,b=C[1],l=C[3]===void 0?zn:C[3]==='"'?Do:To):l===Do||l===To?l=zn:l===Ao||l===Po?l=br:(l=zn,n=void 0);const H=l===zn&&e[u+1].startsWith("/>")?" ":"";o+=l===br?h+hc:w>=0?(i.push(b),h.slice(0,w)+_a+h.slice(w)+En+H):h+En+(w===-2?u:H)}return[Ta(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class $r{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let o=0,l=0;const u=t.length-1,h=this.parts,[b,C]=mc(t,r);if(this.el=$r.createElement(b,i),Bn.currentNode=this.el.content,r===2||r===3){const w=this.el.content.firstChild;w.replaceWith(...w.childNodes)}for(;(n=Bn.nextNode())!==null&&h.length<u;){if(n.nodeType===1){if(n.hasAttributes())for(const w of n.getAttributeNames())if(w.endsWith(_a)){const A=C[l++],H=n.getAttribute(w).split(En),U=/([.?@])?(.*)/.exec(A);h.push({type:1,index:o,name:U[2],strings:H,ctor:U[1]==="."?bc:U[1]==="?"?yc:U[1]==="@"?wc:vi}),n.removeAttribute(w)}else w.startsWith(En)&&(h.push({type:6,index:o}),n.removeAttribute(w));if(Pa.test(n.tagName)){const w=n.textContent.split(En),A=w.length-1;if(A>0){n.textContent=ui?ui.emptyScript:"";for(let H=0;H<A;H++)n.append(w[H],vr()),Bn.nextNode(),h.push({type:2,index:++o});n.append(w[A],vr())}}}else if(n.nodeType===8)if(n.data===Aa)h.push({type:2,index:o});else{let w=-1;for(;(w=n.data.indexOf(En,w+1))!==-1;)h.push({type:7,index:o}),w+=En.length-1}o++}}static createElement(t,r){const i=Nn.createElement("template");return i.innerHTML=t,i}}function Zn(e,t,r=e,i){if(t===Un)return t;let n=i!==void 0?r._$Co?.[i]:r._$Cl;const o=xr(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(e),n._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=n:r._$Cl=n),n!==void 0&&(t=Zn(e,n._$AS(e,t.values),n,i)),t}class gc{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,n=(t?.creationScope??Nn).importNode(r,!0);Bn.currentNode=n;let o=Bn.nextNode(),l=0,u=0,h=i[0];for(;h!==void 0;){if(l===h.index){let b;h.type===2?b=new Er(o,o.nextSibling,this,t):h.type===1?b=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(b=new vc(o,this,t)),this._$AV.push(b),h=i[++u]}l!==h?.index&&(o=Bn.nextNode(),l++)}return Bn.currentNode=Nn,n}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class Er{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=me,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Zn(this,t,r),xr(t)?t===me||t==null||t===""?(this._$AH!==me&&this._$AR(),this._$AH=me):t!==this._$AH&&t!==Un&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):fc(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==me&&xr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Nn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=$r.createElement(Ta(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(r);else{const o=new gc(n,this),l=o.u(this.options);o.p(r),this.T(l),this._$AH=o}}_$AC(t){let r=Io.get(t.strings);return r===void 0&&Io.set(t.strings,r=new $r(t)),r}k(t){Ps(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const o of t)n===r.length?r.push(i=new Er(this.O(vr()),this.O(vr()),this,this.options)):i=r[n],i._$AI(o),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=So(t).nextSibling;So(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class vi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,o){this.type=1,this._$AH=me,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=me}_$AI(t,r=this,i,n){const o=this.strings;let l=!1;if(o===void 0)t=Zn(this,t,r,0),l=!xr(t)||t!==this._$AH&&t!==Un,l&&(this._$AH=t);else{const u=t;let h,b;for(t=o[0],h=0;h<o.length-1;h++)b=Zn(this,u[i+h],r,h),b===Un&&(b=this._$AH[h]),l||=!xr(b)||b!==this._$AH[h],b===me?t=me:t!==me&&(t+=(b??"")+o[h+1]),this._$AH[h]=b}l&&!n&&this.j(t)}j(t){t===me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class bc extends vi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===me?void 0:t}}class yc extends vi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==me)}}class wc extends vi{constructor(t,r,i,n,o){super(t,r,i,n,o),this.type=5}_$AI(t,r=this){if((t=Zn(this,t,r,0)??me)===Un)return;const i=this._$AH,n=t===me&&i!==me||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==me&&(i===me||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class vc{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Zn(this,t)}}const xc=As.litHtmlPolyfillSupport;xc?.($r,Er),(As.litHtmlVersions??=[]).push("3.3.3");const $c=(e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const o=r?.renderBefore??null;i._$litPart$=n=new Er(t.insertBefore(vr(),o),o,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ts=globalThis;let Ue=class extends Jn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$c(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Un}};Ue._$litElement$=!0,Ue.finalized=!0,Ts.litElementHydrateSupport?.({LitElement:Ue});const kc=Ts.litElementPolyfillSupport;kc?.({LitElement:Ue});(Ts.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cc={attribute:!0,type:String,converter:ci,reflect:!1,hasChanged:_s},Ec=(e=Cc,t,r)=>{const{kind:i,metadata:n}=r;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),i==="accessor"){const{name:l}=r;return{set(u){const h=t.get.call(this);t.set.call(this,u),this.requestUpdate(l,h,e,!0,u)},init(u){return u!==void 0&&this.C(l,void 0,e,u),u}}}if(i==="setter"){const{name:l}=r;return function(u){const h=this[l];t.call(this,u),this.requestUpdate(l,h,e,!0,u)}}throw Error("Unsupported decorator location: "+i)};function Nt(e){return(t,r)=>typeof r=="object"?Ec(e,t,r):((i,n,o)=>{const l=n.hasOwnProperty(o);return n.constructor.createProperty(o,i),l?Object.getOwnPropertyDescriptor(n,o):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function K(e){return Nt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sc=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rr(e,t){return(r,i,n)=>{const o=l=>l.renderRoot?.querySelector(e)??null;return Sc(r,i,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _c={CHILD:2},Da=e=>(...t)=>({_$litDirective$:e,values:t});class Ac{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class di extends Ac{constructor(t){if(super(t),this.it=me,t.type!==_c.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===me||t==null)return this._t=void 0,this.it=t;if(t===Un)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}di.directiveName="unsafeHTML",di.resultType=1;const oi=Da(di);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ds extends di{}ds.directiveName="unsafeSVG",ds.resultType=2;const Ia=Da(ds);var Pc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ai={exports:{}},Dc=ai.exports,Ro;function Ic(){return Ro||(Ro=1,(function(e,t){(function(r,i){e.exports=i()})(Dc,function(){var r=function(s,a){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(c[f]=d[f])})(s,a)},i=function(){return(i=Object.assign||function(s){for(var a,c=1,d=arguments.length;c<d;c++)for(var f in a=arguments[c])Object.prototype.hasOwnProperty.call(a,f)&&(s[f]=a[f]);return s}).apply(this,arguments)};function n(s,a,c){for(var d,f=0,p=a.length;f<p;f++)!d&&f in a||((d=d||Array.prototype.slice.call(a,0,f))[f]=a[f]);return s.concat(d||Array.prototype.slice.call(a))}var o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Pc,l=Object.keys,u=Array.isArray;function h(s,a){return typeof a!="object"||l(a).forEach(function(c){s[c]=a[c]}),s}typeof Promise>"u"||o.Promise||(o.Promise=Promise);var b=Object.getPrototypeOf,C={}.hasOwnProperty;function w(s,a){return C.call(s,a)}function A(s,a){typeof a=="function"&&(a=a(b(s))),(typeof Reflect>"u"?l:Reflect.ownKeys)(a).forEach(function(c){U(s,c,a[c])})}var H=Object.defineProperty;function U(s,a,c,d){H(s,a,h(c&&w(c,"get")&&typeof c.get=="function"?{get:c.get,set:c.set,configurable:!0}:{value:c,configurable:!0,writable:!0},d))}function F(s){return{from:function(a){return s.prototype=Object.create(a.prototype),U(s.prototype,"constructor",s),{extend:A.bind(null,s.prototype)}}}}var N=Object.getOwnPropertyDescriptor,oe=[].slice;function le(s,a,c){return oe.call(s,a,c)}function ke(s,a){return a(s)}function re(s){if(!s)throw new Error("Assertion Failed")}function ie(s){o.setImmediate?setImmediate(s):setTimeout(s,0)}function pe(s,a){if(typeof a=="string"&&w(s,a))return s[a];if(!a)return s;if(typeof a!="string"){for(var c=[],d=0,f=a.length;d<f;++d){var p=pe(s,a[d]);c.push(p)}return c}var y=a.indexOf(".");if(y!==-1){var x=s[a.substr(0,y)];return x==null?void 0:pe(x,a.substr(y+1))}}function xe(s,a,c){if(s&&a!==void 0&&!("isFrozen"in Object&&Object.isFrozen(s)))if(typeof a!="string"&&"length"in a){re(typeof c!="string"&&"length"in c);for(var d=0,f=a.length;d<f;++d)xe(s,a[d],c[d])}else{var p,y,x=a.indexOf(".");x!==-1?(p=a.substr(0,x),(y=a.substr(x+1))===""?c===void 0?u(s)&&!isNaN(parseInt(p))?s.splice(p,1):delete s[p]:s[p]=c:xe(x=!(x=s[p])||!w(s,p)?s[p]={}:x,y,c)):c===void 0?u(s)&&!isNaN(parseInt(a))?s.splice(a,1):delete s[a]:s[a]=c}}function Ie(s){var a,c={};for(a in s)w(s,a)&&(c[a]=s[a]);return c}var qe=[].concat;function $e(s){return qe.apply([],s)}var dn="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat($e([8,16,32,64].map(function(s){return["Int","Uint","Float"].map(function(a){return a+s+"Array"})}))).filter(function(s){return o[s]}),m=new Set(dn.map(function(s){return o[s]})),v=null;function E(s){return v=new WeakMap,s=(function a(c){if(!c||typeof c!="object")return c;var d=v.get(c);if(d)return d;if(u(c)){d=[],v.set(c,d);for(var f=0,p=c.length;f<p;++f)d.push(a(c[f]))}else if(m.has(c.constructor))d=c;else{var y,x=b(c);for(y in d=x===Object.prototype?{}:Object.create(x),v.set(c,d),c)w(c,y)&&(d[y]=a(c[y]))}return d})(s),v=null,s}var g={}.toString;function k(s){return g.call(s).slice(8,-1)}var ce=typeof Symbol<"u"?Symbol.iterator:"@@iterator",fe=typeof ce=="symbol"?function(s){var a;return s!=null&&(a=s[ce])&&a.apply(s)}:function(){return null};function W(s,a){return a=s.indexOf(a),0<=a&&s.splice(a,1),0<=a}var Y={};function Ye(s){var a,c,d,f;if(arguments.length===1){if(u(s))return s.slice();if(this===Y&&typeof s=="string")return[s];if(f=fe(s)){for(c=[];!(d=f.next()).done;)c.push(d.value);return c}if(s==null)return[s];if(typeof(a=s.length)!="number")return[s];for(c=new Array(a);a--;)c[a]=s[a];return c}for(a=arguments.length,c=new Array(a);a--;)c[a]=arguments[a];return c}var ct=typeof Symbol<"u"?function(s){return s[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Ae=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Ft=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Ae),en={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function He(s,a){this.name=s,this.message=a}function Le(s,a){return s+". Errors: "+Object.keys(a).map(function(c){return a[c].toString()}).filter(function(c,d,f){return f.indexOf(c)===d}).join(`
`)}function Se(s,a,c,d){this.failures=a,this.failedKeys=d,this.successCount=c,this.message=Le(s,a)}function Re(s,a){this.name="BulkError",this.failures=Object.keys(a).map(function(c){return a[c]}),this.failuresByPos=a,this.message=Le(s,this.failures)}F(He).from(Error).extend({toString:function(){return this.name+": "+this.message}}),F(Se).from(He),F(Re).from(He);var Xe=Ft.reduce(function(s,a){return s[a]=a+"Error",s},{}),Te=He,te=Ft.reduce(function(s,a){var c=a+"Error";function d(f,p){this.name=c,f?typeof f=="string"?(this.message="".concat(f).concat(p?`
 `+p:""),this.inner=p||null):typeof f=="object"&&(this.message="".concat(f.name," ").concat(f.message),this.inner=f):(this.message=en[a]||c,this.inner=null)}return F(d).from(Te),s[a]=d,s},{});te.Syntax=SyntaxError,te.Type=TypeError,te.Range=RangeError;var Qe=Ae.reduce(function(s,a){return s[a+"Error"]=te[a],s},{}),Be=Ft.reduce(function(s,a){return["Syntax","Type","Range"].indexOf(a)===-1&&(s[a+"Error"]=te[a]),s},{});function he(){}function ve(s){return s}function _t(s,a){return s==null||s===ve?a:function(c){return a(s(c))}}function ue(s,a){return function(){s.apply(this,arguments),a.apply(this,arguments)}}function Je(s,a){return s===he?a:function(){var c=s.apply(this,arguments);c!==void 0&&(arguments[0]=c);var d=this.onsuccess,f=this.onerror;this.onsuccess=null,this.onerror=null;var p=a.apply(this,arguments);return d&&(this.onsuccess=this.onsuccess?ue(d,this.onsuccess):d),f&&(this.onerror=this.onerror?ue(f,this.onerror):f),p!==void 0?p:c}}function bn(s,a){return s===he?a:function(){s.apply(this,arguments);var c=this.onsuccess,d=this.onerror;this.onsuccess=this.onerror=null,a.apply(this,arguments),c&&(this.onsuccess=this.onsuccess?ue(c,this.onsuccess):c),d&&(this.onerror=this.onerror?ue(d,this.onerror):d)}}function Wt(s,a){return s===he?a:function(c){var d=s.apply(this,arguments);h(c,d);var f=this.onsuccess,p=this.onerror;return this.onsuccess=null,this.onerror=null,c=a.apply(this,arguments),f&&(this.onsuccess=this.onsuccess?ue(f,this.onsuccess):f),p&&(this.onerror=this.onerror?ue(p,this.onerror):p),d===void 0?c===void 0?void 0:c:h(d,c)}}function tt(s,a){return s===he?a:function(){return a.apply(this,arguments)!==!1&&s.apply(this,arguments)}}function At(s,a){return s===he?a:function(){var c=s.apply(this,arguments);if(c&&typeof c.then=="function"){for(var d=this,f=arguments.length,p=new Array(f);f--;)p[f]=arguments[f];return c.then(function(){return a.apply(d,p)})}return a.apply(this,arguments)}}Be.ModifyError=Se,Be.DexieError=He,Be.BulkError=Re;var Fe=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function We(s){Fe=s}var xt={},it=100,dn=typeof Promise>"u"?[]:(function(){var s=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[s,b(s),s];var a=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[a,b(a),s]})(),Ae=dn[0],Ft=dn[1],dn=dn[2],Ft=Ft&&Ft.then,_e=Ae&&Ae.constructor,Pt=!!dn,Ke=function(s,a){ot.push([s,a]),dt&&(queueMicrotask(ge),dt=!1)},bt=!0,dt=!0,st=[],Me=[],de=ve,Ze={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:he,pgp:!1,env:{},finalize:he},Q=Ze,ot=[],pt=0,kt=[];function J(s){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var a=this._PSD=Q;if(typeof s!="function"){if(s!==xt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&ht(this,this._value))}this._state=null,this._value=null,++a.ref,(function c(d,f){try{f(function(p){if(d._state===null){if(p===d)throw new TypeError("A promise cannot be resolved with itself.");var y=d._lib&&ze();p&&typeof p.then=="function"?c(d,function(x,S){p instanceof J?p._then(x,S):p.then(x,S)}):(d._state=!0,d._value=p,yn(d)),y&&Ve()}},ht.bind(null,d))}catch(p){ht(d,p)}})(this,s)}var tn={get:function(){var s=Q,a=jr;function c(d,f){var p=this,y=!s.global&&(s!==Q||a!==jr),x=y&&!vn(),S=new J(function(P,I){se(p,new cn(Ks(d,s,y,x),Ks(f,s,y,x),P,I,s))});return this._consoleTask&&(S._consoleTask=this._consoleTask),S}return c.prototype=xt,c},set:function(s){U(this,"then",s&&s.prototype===xt?tn:{get:function(){return s},set:tn.set})}};function cn(s,a,c,d,f){this.onFulfilled=typeof s=="function"?s:null,this.onRejected=typeof a=="function"?a:null,this.resolve=c,this.reject=d,this.psd=f}function ht(s,a){var c,d;Me.push(a),s._state===null&&(c=s._lib&&ze(),a=de(a),s._state=!1,s._value=a,d=s,st.some(function(f){return f._value===d._value})||st.push(d),yn(s),c&&Ve())}function yn(s){var a=s._listeners;s._listeners=[];for(var c=0,d=a.length;c<d;++c)se(s,a[c]);var f=s._PSD;--f.ref||f.finalize(),pt===0&&(++pt,Ke(function(){--pt==0&&Oe()},[]))}function se(s,a){if(s._state!==null){var c=s._state?a.onFulfilled:a.onRejected;if(c===null)return(s._state?a.resolve:a.reject)(s._value);++a.psd.ref,++pt,Ke(De,[c,s,a])}else s._listeners.push(a)}function De(s,a,c){try{var d,f=a._value;!a._state&&Me.length&&(Me=[]),d=Fe&&a._consoleTask?a._consoleTask.run(function(){return s(f)}):s(f),a._state||Me.indexOf(f)!==-1||(function(p){for(var y=st.length;y;)if(st[--y]._value===p._value)return st.splice(y,1)})(a),c.resolve(d)}catch(p){c.reject(p)}finally{--pt==0&&Oe(),--c.psd.ref||c.psd.finalize()}}function ge(){Dn(Ze,function(){ze()&&Ve()})}function ze(){var s=bt;return dt=bt=!1,s}function Ve(){var s,a,c;do for(;0<ot.length;)for(s=ot,ot=[],c=s.length,a=0;a<c;++a){var d=s[a];d[0].apply(null,d[1])}while(0<ot.length);dt=bt=!0}function Oe(){var s=st;st=[],s.forEach(function(d){d._PSD.onunhandled.call(null,d._value,d)});for(var a=kt.slice(0),c=a.length;c;)a[--c]()}function Kt(s){return new J(xt,!1,s)}function Ne(s,a){var c=Q;return function(){var d=ze(),f=Q;try{return xn(c,!0),s.apply(this,arguments)}catch(p){a&&a(p)}finally{xn(f,!1),d&&Ve()}}}A(J.prototype,{then:tn,_then:function(s,a){se(this,new cn(null,null,s,a,Q))},catch:function(s){if(arguments.length===1)return this.then(null,s);var a=s,c=arguments[1];return typeof a=="function"?this.then(null,function(d){return(d instanceof a?c:Kt)(d)}):this.then(null,function(d){return(d&&d.name===a?c:Kt)(d)})},finally:function(s){return this.then(function(a){return J.resolve(s()).then(function(){return a})},function(a){return J.resolve(s()).then(function(){return Kt(a)})})},timeout:function(s,a){var c=this;return s<1/0?new J(function(d,f){var p=setTimeout(function(){return f(new te.Timeout(a))},s);c.then(d,f).finally(clearTimeout.bind(null,p))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&U(J.prototype,Symbol.toStringTag,"Dexie.Promise"),Ze.env=Ws(),A(J,{all:function(){var s=Ye.apply(null,arguments).map(Fr);return new J(function(a,c){s.length===0&&a([]);var d=s.length;s.forEach(function(f,p){return J.resolve(f).then(function(y){s[p]=y,--d||a(s)},c)})})},resolve:function(s){return s instanceof J?s:s&&typeof s.then=="function"?new J(function(a,c){s.then(a,c)}):new J(xt,!0,s)},reject:Kt,race:function(){var s=Ye.apply(null,arguments).map(Fr);return new J(function(a,c){s.map(function(d){return J.resolve(d).then(a,c)})})},PSD:{get:function(){return Q},set:function(s){return Q=s}},totalEchoes:{get:function(){return jr}},newPSD:wn,usePSD:Dn,scheduler:{get:function(){return Ke},set:function(s){Ke=s}},rejectionMapper:{get:function(){return de},set:function(s){de=s}},follow:function(s,a){return new J(function(c,d){return wn(function(f,p){var y=Q;y.unhandleds=[],y.onunhandled=p,y.finalize=ue(function(){var x,S=this;x=function(){S.unhandleds.length===0?f():p(S.unhandleds[0])},kt.push(function P(){x(),kt.splice(kt.indexOf(P),1)}),++pt,Ke(function(){--pt==0&&Oe()},[])},y.finalize),s()},a,c,d)})}}),_e&&(_e.allSettled&&U(J,"allSettled",function(){var s=Ye.apply(null,arguments).map(Fr);return new J(function(a){s.length===0&&a([]);var c=s.length,d=new Array(c);s.forEach(function(f,p){return J.resolve(f).then(function(y){return d[p]={status:"fulfilled",value:y}},function(y){return d[p]={status:"rejected",reason:y}}).then(function(){return--c||a(d)})})})}),_e.any&&typeof AggregateError<"u"&&U(J,"any",function(){var s=Ye.apply(null,arguments).map(Fr);return new J(function(a,c){s.length===0&&c(new AggregateError([]));var d=s.length,f=new Array(d);s.forEach(function(p,y){return J.resolve(p).then(function(x){return a(x)},function(x){f[y]=x,--d||c(new AggregateError(f))})})})}),_e.withResolvers&&(J.withResolvers=_e.withResolvers));var mt={awaits:0,echoes:0,id:0},Dl=0,Rr=[],Or=0,jr=0,Il=0;function wn(s,a,c,d){var f=Q,p=Object.create(f);return p.parent=f,p.ref=0,p.global=!1,p.id=++Il,Ze.env,p.env=Pt?{Promise:J,PromiseProp:{value:J,configurable:!0,writable:!0},all:J.all,race:J.race,allSettled:J.allSettled,any:J.any,resolve:J.resolve,reject:J.reject}:{},a&&h(p,a),++f.ref,p.finalize=function(){--this.parent.ref||this.parent.finalize()},d=Dn(p,s,c,d),p.ref===0&&p.finalize(),d}function Wn(){return mt.id||(mt.id=++Dl),++mt.awaits,mt.echoes+=it,mt.id}function vn(){return!!mt.awaits&&(--mt.awaits==0&&(mt.id=0),mt.echoes=mt.awaits*it,!0)}function Fr(s){return mt.echoes&&s&&s.constructor===_e?(Wn(),s.then(function(a){return vn(),a},function(a){return vn(),at(a)})):s}function Rl(){var s=Rr[Rr.length-1];Rr.pop(),xn(s,!1)}function xn(s,a){var c,d=Q;(a?!mt.echoes||Or++&&s===Q:!Or||--Or&&s===Q)||queueMicrotask(a?function(f){++jr,mt.echoes&&--mt.echoes!=0||(mt.echoes=mt.awaits=mt.id=0),Rr.push(Q),xn(f,!0)}.bind(null,s):Rl),s!==Q&&(Q=s,d===Ze&&(Ze.env=Ws()),Pt&&(c=Ze.env.Promise,a=s.env,(d.global||s.global)&&(Object.defineProperty(o,"Promise",a.PromiseProp),c.all=a.all,c.race=a.race,c.resolve=a.resolve,c.reject=a.reject,a.allSettled&&(c.allSettled=a.allSettled),a.any&&(c.any=a.any))))}function Ws(){var s=o.Promise;return Pt?{Promise:s,PromiseProp:Object.getOwnPropertyDescriptor(o,"Promise"),all:s.all,race:s.race,allSettled:s.allSettled,any:s.any,resolve:s.resolve,reject:s.reject}:{}}function Dn(s,a,c,d,f){var p=Q;try{return xn(s,!0),a(c,d,f)}finally{xn(p,!1)}}function Ks(s,a,c,d){return typeof s!="function"?s:function(){var f=Q;c&&Wn(),xn(a,!0);try{return s.apply(this,arguments)}finally{xn(f,!1),d&&queueMicrotask(vn)}}}function Ti(s){Promise===_e&&mt.echoes===0?Or===0?s():enqueueNativeMicroTask(s):setTimeout(s,0)}(""+Ft).indexOf("[native code]")===-1&&(Wn=vn=he);var at=J.reject,In="￿",un="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Vs="String expected.",Kn=[],zr="__dbnames",Di="readonly",Ii="readwrite";function Rn(s,a){return s?a?function(){return s.apply(this,arguments)&&a.apply(this,arguments)}:s:a}var Gs={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Lr(s){return typeof s!="string"||/\./.test(s)?function(a){return a}:function(a){return a[s]===void 0&&s in a&&delete(a=E(a))[s],a}}function Ys(){throw te.Type()}function Pe(s,a){try{var c=Xs(s),d=Xs(a);if(c!==d)return c==="Array"?1:d==="Array"?-1:c==="binary"?1:d==="binary"?-1:c==="string"?1:d==="string"?-1:c==="Date"?1:d!=="Date"?NaN:-1;switch(c){case"number":case"Date":case"string":return a<s?1:s<a?-1:0;case"binary":return(function(f,p){for(var y=f.length,x=p.length,S=y<x?y:x,P=0;P<S;++P)if(f[P]!==p[P])return f[P]<p[P]?-1:1;return y===x?0:y<x?-1:1})(Qs(s),Qs(a));case"Array":return(function(f,p){for(var y=f.length,x=p.length,S=y<x?y:x,P=0;P<S;++P){var I=Pe(f[P],p[P]);if(I!==0)return I}return y===x?0:y<x?-1:1})(s,a)}}catch{}return NaN}function Xs(s){var a=typeof s;return a!="object"?a:ArrayBuffer.isView(s)?"binary":(s=k(s),s==="ArrayBuffer"?"binary":s)}function Qs(s){return s instanceof Uint8Array?s:ArrayBuffer.isView(s)?new Uint8Array(s.buffer,s.byteOffset,s.byteLength):new Uint8Array(s)}var Js=(Ge.prototype._trans=function(s,a,c){var d=this._tx||Q.trans,f=this.name,p=Fe&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(s==="readonly"?"read":"write"," ").concat(this.name));function y(P,I,$){if(!$.schema[f])throw new te.NotFound("Table "+f+" not part of transaction");return a($.idbtrans,$)}var x=ze();try{var S=d&&d.db._novip===this.db._novip?d===Q.trans?d._promise(s,y,c):wn(function(){return d._promise(s,y,c)},{trans:d,transless:Q.transless||Q}):(function P(I,$,O,_){if(I.idbdb&&(I._state.openComplete||Q.letThrough||I._vip)){var D=I._createTransaction($,O,I._dbSchema);try{D.create(),I._state.PR1398_maxLoop=3}catch(R){return R.name===Xe.InvalidState&&I.isOpen()&&0<--I._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),I.close({disableAutoOpen:!1}),I.open().then(function(){return P(I,$,O,_)})):at(R)}return D._promise($,function(R,T){return wn(function(){return Q.trans=D,_(R,T,D)})}).then(function(R){if($==="readwrite")try{D.idbtrans.commit()}catch{}return $==="readonly"?R:D._completion.then(function(){return R})})}if(I._state.openComplete)return at(new te.DatabaseClosed(I._state.dbOpenError));if(!I._state.isBeingOpened){if(!I._state.autoOpen)return at(new te.DatabaseClosed);I.open().catch(he)}return I._state.dbReadyPromise.then(function(){return P(I,$,O,_)})})(this.db,s,[this.name],y);return p&&(S._consoleTask=p,S=S.catch(function(P){return console.trace(P),at(P)})),S}finally{x&&Ve()}},Ge.prototype.get=function(s,a){var c=this;return s&&s.constructor===Object?this.where(s).first(a):s==null?at(new te.Type("Invalid argument to Table.get()")):this._trans("readonly",function(d){return c.core.get({trans:d,key:s}).then(function(f){return c.hook.reading.fire(f)})}).then(a)},Ge.prototype.where=function(s){if(typeof s=="string")return new this.db.WhereClause(this,s);if(u(s))return new this.db.WhereClause(this,"[".concat(s.join("+"),"]"));var a=l(s);if(a.length===1)return this.where(a[0]).equals(s[a[0]]);var c=this.schema.indexes.concat(this.schema.primKey).filter(function(x){if(x.compound&&a.every(function(P){return 0<=x.keyPath.indexOf(P)})){for(var S=0;S<a.length;++S)if(a.indexOf(x.keyPath[S])===-1)return!1;return!0}return!1}).sort(function(x,S){return x.keyPath.length-S.keyPath.length})[0];if(c&&this.db._maxKey!==In){var p=c.keyPath.slice(0,a.length);return this.where(p).equals(p.map(function(S){return s[S]}))}!c&&Fe&&console.warn("The query ".concat(JSON.stringify(s)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(a.join("+"),"]"));var d=this.schema.idxByName;function f(x,S){return Pe(x,S)===0}var y=a.reduce(function($,S){var P=$[0],I=$[1],$=d[S],O=s[S];return[P||$,P||!$?Rn(I,$&&$.multi?function(_){return _=pe(_,S),u(_)&&_.some(function(D){return f(O,D)})}:function(_){return f(O,pe(_,S))}):I]},[null,null]),p=y[0],y=y[1];return p?this.where(p.name).equals(s[p.keyPath]).filter(y):c?this.filter(y):this.where(a).equals("")},Ge.prototype.filter=function(s){return this.toCollection().and(s)},Ge.prototype.count=function(s){return this.toCollection().count(s)},Ge.prototype.offset=function(s){return this.toCollection().offset(s)},Ge.prototype.limit=function(s){return this.toCollection().limit(s)},Ge.prototype.each=function(s){return this.toCollection().each(s)},Ge.prototype.toArray=function(s){return this.toCollection().toArray(s)},Ge.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ge.prototype.orderBy=function(s){return new this.db.Collection(new this.db.WhereClause(this,u(s)?"[".concat(s.join("+"),"]"):s))},Ge.prototype.reverse=function(){return this.toCollection().reverse()},Ge.prototype.mapToClass=function(s){var a,c=this.db,d=this.name;function f(){return a!==null&&a.apply(this,arguments)||this}(this.schema.mappedClass=s).prototype instanceof Ys&&((function(S,P){if(typeof P!="function"&&P!==null)throw new TypeError("Class extends value "+String(P)+" is not a constructor or null");function I(){this.constructor=S}r(S,P),S.prototype=P===null?Object.create(P):(I.prototype=P.prototype,new I)})(f,a=s),Object.defineProperty(f.prototype,"db",{get:function(){return c},enumerable:!1,configurable:!0}),f.prototype.table=function(){return d},s=f);for(var p=new Set,y=s.prototype;y;y=b(y))Object.getOwnPropertyNames(y).forEach(function(S){return p.add(S)});function x(S){if(!S)return S;var P,I=Object.create(s.prototype);for(P in S)if(!p.has(P))try{I[P]=S[P]}catch{}return I}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=x,this.hook("reading",x),s},Ge.prototype.defineClass=function(){return this.mapToClass(function(s){h(this,s)})},Ge.prototype.add=function(s,a){var c=this,d=this.schema.primKey,f=d.auto,p=d.keyPath,y=s;return p&&f&&(y=Lr(p)(s)),this._trans("readwrite",function(x){return c.core.mutate({trans:x,type:"add",keys:a!=null?[a]:null,values:[y]})}).then(function(x){return x.numFailures?J.reject(x.failures[0]):x.lastResult}).then(function(x){if(p)try{xe(s,p,x)}catch{}return x})},Ge.prototype.update=function(s,a){return typeof s!="object"||u(s)?this.where(":id").equals(s).modify(a):(s=pe(s,this.schema.primKey.keyPath),s===void 0?at(new te.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(s).modify(a))},Ge.prototype.put=function(s,a){var c=this,d=this.schema.primKey,f=d.auto,p=d.keyPath,y=s;return p&&f&&(y=Lr(p)(s)),this._trans("readwrite",function(x){return c.core.mutate({trans:x,type:"put",values:[y],keys:a!=null?[a]:null})}).then(function(x){return x.numFailures?J.reject(x.failures[0]):x.lastResult}).then(function(x){if(p)try{xe(s,p,x)}catch{}return x})},Ge.prototype.delete=function(s){var a=this;return this._trans("readwrite",function(c){return a.core.mutate({trans:c,type:"delete",keys:[s]})}).then(function(c){return c.numFailures?J.reject(c.failures[0]):void 0})},Ge.prototype.clear=function(){var s=this;return this._trans("readwrite",function(a){return s.core.mutate({trans:a,type:"deleteRange",range:Gs})}).then(function(a){return a.numFailures?J.reject(a.failures[0]):void 0})},Ge.prototype.bulkGet=function(s){var a=this;return this._trans("readonly",function(c){return a.core.getMany({keys:s,trans:c}).then(function(d){return d.map(function(f){return a.hook.reading.fire(f)})})})},Ge.prototype.bulkAdd=function(s,a,c){var d=this,f=Array.isArray(a)?a:void 0,p=(c=c||(f?void 0:a))?c.allKeys:void 0;return this._trans("readwrite",function(y){var P=d.schema.primKey,x=P.auto,P=P.keyPath;if(P&&f)throw new te.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(f&&f.length!==s.length)throw new te.InvalidArgument("Arguments objects and keys must have the same length");var S=s.length,P=P&&x?s.map(Lr(P)):s;return d.core.mutate({trans:y,type:"add",keys:f,values:P,wantResults:p}).then(function(D){var $=D.numFailures,O=D.results,_=D.lastResult,D=D.failures;if($===0)return p?O:_;throw new Re("".concat(d.name,".bulkAdd(): ").concat($," of ").concat(S," operations failed"),D)})})},Ge.prototype.bulkPut=function(s,a,c){var d=this,f=Array.isArray(a)?a:void 0,p=(c=c||(f?void 0:a))?c.allKeys:void 0;return this._trans("readwrite",function(y){var P=d.schema.primKey,x=P.auto,P=P.keyPath;if(P&&f)throw new te.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(f&&f.length!==s.length)throw new te.InvalidArgument("Arguments objects and keys must have the same length");var S=s.length,P=P&&x?s.map(Lr(P)):s;return d.core.mutate({trans:y,type:"put",keys:f,values:P,wantResults:p}).then(function(D){var $=D.numFailures,O=D.results,_=D.lastResult,D=D.failures;if($===0)return p?O:_;throw new Re("".concat(d.name,".bulkPut(): ").concat($," of ").concat(S," operations failed"),D)})})},Ge.prototype.bulkUpdate=function(s){var a=this,c=this.core,d=s.map(function(y){return y.key}),f=s.map(function(y){return y.changes}),p=[];return this._trans("readwrite",function(y){return c.getMany({trans:y,keys:d,cache:"clone"}).then(function(x){var S=[],P=[];s.forEach(function($,O){var _=$.key,D=$.changes,R=x[O];if(R){for(var T=0,z=Object.keys(D);T<z.length;T++){var B=z[T],M=D[B];if(B===a.schema.primKey.keyPath){if(Pe(M,_)!==0)throw new te.Constraint("Cannot update primary key in bulkUpdate()")}else xe(R,B,M)}p.push(O),S.push(_),P.push(R)}});var I=S.length;return c.mutate({trans:y,type:"put",keys:S,values:P,updates:{keys:d,changeSpecs:f}}).then(function($){var O=$.numFailures,_=$.failures;if(O===0)return I;for(var D=0,R=Object.keys(_);D<R.length;D++){var T,z=R[D],B=p[Number(z)];B!=null&&(T=_[z],delete _[z],_[B]=T)}throw new Re("".concat(a.name,".bulkUpdate(): ").concat(O," of ").concat(I," operations failed"),_)})})})},Ge.prototype.bulkDelete=function(s){var a=this,c=s.length;return this._trans("readwrite",function(d){return a.core.mutate({trans:d,type:"delete",keys:s})}).then(function(y){var f=y.numFailures,p=y.lastResult,y=y.failures;if(f===0)return p;throw new Re("".concat(a.name,".bulkDelete(): ").concat(f," of ").concat(c," operations failed"),y)})},Ge);function Ge(){}function lr(s){function a(y,x){if(x){for(var S=arguments.length,P=new Array(S-1);--S;)P[S-1]=arguments[S];return c[y].subscribe.apply(null,P),s}if(typeof y=="string")return c[y]}var c={};a.addEventType=p;for(var d=1,f=arguments.length;d<f;++d)p(arguments[d]);return a;function p(y,x,S){if(typeof y!="object"){var P;x=x||tt;var I={subscribers:[],fire:S=S||he,subscribe:function($){I.subscribers.indexOf($)===-1&&(I.subscribers.push($),I.fire=x(I.fire,$))},unsubscribe:function($){I.subscribers=I.subscribers.filter(function(O){return O!==$}),I.fire=I.subscribers.reduce(x,S)}};return c[y]=a[y]=I}l(P=y).forEach(function($){var O=P[$];if(u(O))p($,P[$][0],P[$][1]);else{if(O!=="asap")throw new te.InvalidArgument("Invalid event config");var _=p($,ve,function(){for(var D=arguments.length,R=new Array(D);D--;)R[D]=arguments[D];_.subscribers.forEach(function(T){ie(function(){T.apply(null,R)})})})}})}}function cr(s,a){return F(a).from({prototype:s}),a}function Vn(s,a){return!(s.filter||s.algorithm||s.or)&&(a?s.justLimit:!s.replayFilter)}function Ri(s,a){s.filter=Rn(s.filter,a)}function Oi(s,a,c){var d=s.replayFilter;s.replayFilter=d?function(){return Rn(d(),a())}:a,s.justLimit=c&&!d}function Br(s,a){if(s.isPrimKey)return a.primaryKey;var c=a.getIndexByKeyPath(s.index);if(!c)throw new te.Schema("KeyPath "+s.index+" on object store "+a.name+" is not indexed");return c}function Zs(s,a,c){var d=Br(s,a.schema);return a.openCursor({trans:c,values:!s.keysOnly,reverse:s.dir==="prev",unique:!!s.unique,query:{index:d,range:s.range}})}function Mr(s,a,c,d){var f=s.replayFilter?Rn(s.filter,s.replayFilter()):s.filter;if(s.or){var p={},y=function(x,S,P){var I,$;f&&!f(S,P,function(O){return S.stop(O)},function(O){return S.fail(O)})||(($=""+(I=S.primaryKey))=="[object ArrayBuffer]"&&($=""+new Uint8Array(I)),w(p,$)||(p[$]=!0,a(x,S,P)))};return Promise.all([s.or._iterate(y,c),eo(Zs(s,d,c),s.algorithm,y,!s.keysOnly&&s.valueMapper)])}return eo(Zs(s,d,c),Rn(s.algorithm,f),a,!s.keysOnly&&s.valueMapper)}function eo(s,a,c,d){var f=Ne(d?function(p,y,x){return c(d(p),y,x)}:c);return s.then(function(p){if(p)return p.start(function(){var y=function(){return p.continue()};a&&!a(p,function(x){return y=x},function(x){p.stop(x),y=he},function(x){p.fail(x),y=he})||f(p.value,p,function(x){return y=x}),y()})})}var dn=Symbol(),ur=(to.prototype.execute=function(s){if(this.add!==void 0){var a=this.add;if(u(a))return n(n([],u(s)?s:[],!0),a).sort();if(typeof a=="number")return(Number(s)||0)+a;if(typeof a=="bigint")try{return BigInt(s)+a}catch{return BigInt(0)+a}throw new TypeError("Invalid term ".concat(a))}if(this.remove!==void 0){var c=this.remove;if(u(c))return u(s)?s.filter(function(d){return!c.includes(d)}).sort():[];if(typeof c=="number")return Number(s)-c;if(typeof c=="bigint")try{return BigInt(s)-c}catch{return BigInt(0)-c}throw new TypeError("Invalid subtrahend ".concat(c))}return a=(a=this.replacePrefix)===null||a===void 0?void 0:a[0],a&&typeof s=="string"&&s.startsWith(a)?this.replacePrefix[1]+s.substring(a.length):s},to);function to(s){Object.assign(this,s)}var Ol=(je.prototype._read=function(s,a){var c=this._ctx;return c.error?c.table._trans(null,at.bind(null,c.error)):c.table._trans("readonly",s).then(a)},je.prototype._write=function(s){var a=this._ctx;return a.error?a.table._trans(null,at.bind(null,a.error)):a.table._trans("readwrite",s,"locked")},je.prototype._addAlgorithm=function(s){var a=this._ctx;a.algorithm=Rn(a.algorithm,s)},je.prototype._iterate=function(s,a){return Mr(this._ctx,s,a,this._ctx.table.core)},je.prototype.clone=function(s){var a=Object.create(this.constructor.prototype),c=Object.create(this._ctx);return s&&h(c,s),a._ctx=c,a},je.prototype.raw=function(){return this._ctx.valueMapper=null,this},je.prototype.each=function(s){var a=this._ctx;return this._read(function(c){return Mr(a,s,c,a.table.core)})},je.prototype.count=function(s){var a=this;return this._read(function(c){var d=a._ctx,f=d.table.core;if(Vn(d,!0))return f.count({trans:c,query:{index:Br(d,f.schema),range:d.range}}).then(function(y){return Math.min(y,d.limit)});var p=0;return Mr(d,function(){return++p,!1},c,f).then(function(){return p})}).then(s)},je.prototype.sortBy=function(s,a){var c=s.split(".").reverse(),d=c[0],f=c.length-1;function p(S,P){return P?p(S[c[P]],P-1):S[d]}var y=this._ctx.dir==="next"?1:-1;function x(S,P){return Pe(p(S,f),p(P,f))*y}return this.toArray(function(S){return S.sort(x)}).then(a)},je.prototype.toArray=function(s){var a=this;return this._read(function(c){var d=a._ctx;if(d.dir==="next"&&Vn(d,!0)&&0<d.limit){var f=d.valueMapper,p=Br(d,d.table.core.schema);return d.table.core.query({trans:c,limit:d.limit,values:!0,query:{index:p,range:d.range}}).then(function(x){return x=x.result,f?x.map(f):x})}var y=[];return Mr(d,function(x){return y.push(x)},c,d.table.core).then(function(){return y})},s)},je.prototype.offset=function(s){var a=this._ctx;return s<=0||(a.offset+=s,Vn(a)?Oi(a,function(){var c=s;return function(d,f){return c===0||(c===1?--c:f(function(){d.advance(c),c=0}),!1)}}):Oi(a,function(){var c=s;return function(){return--c<0}})),this},je.prototype.limit=function(s){return this._ctx.limit=Math.min(this._ctx.limit,s),Oi(this._ctx,function(){var a=s;return function(c,d,f){return--a<=0&&d(f),0<=a}},!0),this},je.prototype.until=function(s,a){return Ri(this._ctx,function(c,d,f){return!s(c.value)||(d(f),a)}),this},je.prototype.first=function(s){return this.limit(1).toArray(function(a){return a[0]}).then(s)},je.prototype.last=function(s){return this.reverse().first(s)},je.prototype.filter=function(s){var a;return Ri(this._ctx,function(c){return s(c.value)}),(a=this._ctx).isMatch=Rn(a.isMatch,s),this},je.prototype.and=function(s){return this.filter(s)},je.prototype.or=function(s){return new this.db.WhereClause(this._ctx.table,s,this)},je.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},je.prototype.desc=function(){return this.reverse()},je.prototype.eachKey=function(s){var a=this._ctx;return a.keysOnly=!a.isMatch,this.each(function(c,d){s(d.key,d)})},je.prototype.eachUniqueKey=function(s){return this._ctx.unique="unique",this.eachKey(s)},je.prototype.eachPrimaryKey=function(s){var a=this._ctx;return a.keysOnly=!a.isMatch,this.each(function(c,d){s(d.primaryKey,d)})},je.prototype.keys=function(s){var a=this._ctx;a.keysOnly=!a.isMatch;var c=[];return this.each(function(d,f){c.push(f.key)}).then(function(){return c}).then(s)},je.prototype.primaryKeys=function(s){var a=this._ctx;if(a.dir==="next"&&Vn(a,!0)&&0<a.limit)return this._read(function(d){var f=Br(a,a.table.core.schema);return a.table.core.query({trans:d,values:!1,limit:a.limit,query:{index:f,range:a.range}})}).then(function(d){return d.result}).then(s);a.keysOnly=!a.isMatch;var c=[];return this.each(function(d,f){c.push(f.primaryKey)}).then(function(){return c}).then(s)},je.prototype.uniqueKeys=function(s){return this._ctx.unique="unique",this.keys(s)},je.prototype.firstKey=function(s){return this.limit(1).keys(function(a){return a[0]}).then(s)},je.prototype.lastKey=function(s){return this.reverse().firstKey(s)},je.prototype.distinct=function(){var s=this._ctx,s=s.index&&s.table.schema.idxByName[s.index];if(!s||!s.multi)return this;var a={};return Ri(this._ctx,function(f){var d=f.primaryKey.toString(),f=w(a,d);return a[d]=!0,!f}),this},je.prototype.modify=function(s){var a=this,c=this._ctx;return this._write(function(d){var f,p,y;y=typeof s=="function"?s:(f=l(s),p=f.length,function(T){for(var z=!1,B=0;B<p;++B){var M=f[B],q=s[M],V=pe(T,M);q instanceof ur?(xe(T,M,q.execute(V)),z=!0):V!==q&&(xe(T,M,q),z=!0)}return z});var x=c.table.core,$=x.schema.primaryKey,S=$.outbound,P=$.extractKey,I=200,$=a.db._options.modifyChunkSize;$&&(I=typeof $=="object"?$[x.name]||$["*"]||200:$);function O(T,M){var B=M.failures,M=M.numFailures;D+=T-M;for(var q=0,V=l(B);q<V.length;q++){var ee=V[q];_.push(B[ee])}}var _=[],D=0,R=[];return a.clone().primaryKeys().then(function(T){function z(M){var q=Math.min(I,T.length-M);return x.getMany({trans:d,keys:T.slice(M,M+q),cache:"immutable"}).then(function(V){for(var ee=[],G=[],X=S?[]:null,ne=[],Z=0;Z<q;++Z){var ae=V[Z],ye={value:E(ae),primKey:T[M+Z]};y.call(ye,ye.value,ye)!==!1&&(ye.value==null?ne.push(T[M+Z]):S||Pe(P(ae),P(ye.value))===0?(G.push(ye.value),S&&X.push(T[M+Z])):(ne.push(T[M+Z]),ee.push(ye.value)))}return Promise.resolve(0<ee.length&&x.mutate({trans:d,type:"add",values:ee}).then(function(Ce){for(var Ee in Ce.failures)ne.splice(parseInt(Ee),1);O(ee.length,Ce)})).then(function(){return(0<G.length||B&&typeof s=="object")&&x.mutate({trans:d,type:"put",keys:X,values:G,criteria:B,changeSpec:typeof s!="function"&&s,isAdditionalChunk:0<M}).then(function(Ce){return O(G.length,Ce)})}).then(function(){return(0<ne.length||B&&s===ji)&&x.mutate({trans:d,type:"delete",keys:ne,criteria:B,isAdditionalChunk:0<M}).then(function(Ce){return O(ne.length,Ce)})}).then(function(){return T.length>M+q&&z(M+I)})})}var B=Vn(c)&&c.limit===1/0&&(typeof s!="function"||s===ji)&&{index:c.index,range:c.range};return z(0).then(function(){if(0<_.length)throw new Se("Error modifying one or more objects",_,D,R);return T.length})})})},je.prototype.delete=function(){var s=this._ctx,a=s.range;return Vn(s)&&(s.isPrimKey||a.type===3)?this._write(function(c){var d=s.table.core.schema.primaryKey,f=a;return s.table.core.count({trans:c,query:{index:d,range:f}}).then(function(p){return s.table.core.mutate({trans:c,type:"deleteRange",range:f}).then(function(y){var x=y.failures;if(y.lastResult,y.results,y=y.numFailures,y)throw new Se("Could not delete some values",Object.keys(x).map(function(S){return x[S]}),p-y);return p-y})})}):this.modify(ji)},je);function je(){}var ji=function(s,a){return a.value=null};function jl(s,a){return s<a?-1:s===a?0:1}function Fl(s,a){return a<s?-1:s===a?0:1}function Tt(s,a,c){return s=s instanceof ro?new s.Collection(s):s,s._ctx.error=new(c||TypeError)(a),s}function Gn(s){return new s.Collection(s,function(){return no("")}).limit(0)}function Nr(s,a,c,d){var f,p,y,x,S,P,I,$=c.length;if(!c.every(function(D){return typeof D=="string"}))return Tt(s,Vs);function O(D){f=D==="next"?function(T){return T.toUpperCase()}:function(T){return T.toLowerCase()},p=D==="next"?function(T){return T.toLowerCase()}:function(T){return T.toUpperCase()},y=D==="next"?jl:Fl;var R=c.map(function(T){return{lower:p(T),upper:f(T)}}).sort(function(T,z){return y(T.lower,z.lower)});x=R.map(function(T){return T.upper}),S=R.map(function(T){return T.lower}),I=(P=D)==="next"?"":d}O("next"),s=new s.Collection(s,function(){return $n(x[0],S[$-1]+d)}),s._ondirectionchange=function(D){O(D)};var _=0;return s._addAlgorithm(function(D,R,T){var z=D.key;if(typeof z!="string")return!1;var B=p(z);if(a(B,S,_))return!0;for(var M=null,q=_;q<$;++q){var V=(function(ee,G,X,ne,Z,ae){for(var ye=Math.min(ee.length,ne.length),Ce=-1,Ee=0;Ee<ye;++Ee){var Dt=G[Ee];if(Dt!==ne[Ee])return Z(ee[Ee],X[Ee])<0?ee.substr(0,Ee)+X[Ee]+X.substr(Ee+1):Z(ee[Ee],ne[Ee])<0?ee.substr(0,Ee)+ne[Ee]+X.substr(Ee+1):0<=Ce?ee.substr(0,Ce)+G[Ce]+X.substr(Ce+1):null;Z(ee[Ee],Dt)<0&&(Ce=Ee)}return ye<ne.length&&ae==="next"?ee+X.substr(ee.length):ye<ee.length&&ae==="prev"?ee.substr(0,X.length):Ce<0?null:ee.substr(0,Ce)+ne[Ce]+X.substr(Ce+1)})(z,B,x[q],S[q],y,P);V===null&&M===null?_=q+1:(M===null||0<y(M,V))&&(M=V)}return R(M!==null?function(){D.continue(M+I)}:T),!1}),s}function $n(s,a,c,d){return{type:2,lower:s,upper:a,lowerOpen:c,upperOpen:d}}function no(s){return{type:1,lower:s,upper:s}}var ro=(Object.defineProperty(gt.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),gt.prototype.between=function(s,a,c,d){c=c!==!1,d=d===!0;try{return 0<this._cmp(s,a)||this._cmp(s,a)===0&&(c||d)&&(!c||!d)?Gn(this):new this.Collection(this,function(){return $n(s,a,!c,!d)})}catch{return Tt(this,un)}},gt.prototype.equals=function(s){return s==null?Tt(this,un):new this.Collection(this,function(){return no(s)})},gt.prototype.above=function(s){return s==null?Tt(this,un):new this.Collection(this,function(){return $n(s,void 0,!0)})},gt.prototype.aboveOrEqual=function(s){return s==null?Tt(this,un):new this.Collection(this,function(){return $n(s,void 0,!1)})},gt.prototype.below=function(s){return s==null?Tt(this,un):new this.Collection(this,function(){return $n(void 0,s,!1,!0)})},gt.prototype.belowOrEqual=function(s){return s==null?Tt(this,un):new this.Collection(this,function(){return $n(void 0,s)})},gt.prototype.startsWith=function(s){return typeof s!="string"?Tt(this,Vs):this.between(s,s+In,!0,!0)},gt.prototype.startsWithIgnoreCase=function(s){return s===""?this.startsWith(s):Nr(this,function(a,c){return a.indexOf(c[0])===0},[s],In)},gt.prototype.equalsIgnoreCase=function(s){return Nr(this,function(a,c){return a===c[0]},[s],"")},gt.prototype.anyOfIgnoreCase=function(){var s=Ye.apply(Y,arguments);return s.length===0?Gn(this):Nr(this,function(a,c){return c.indexOf(a)!==-1},s,"")},gt.prototype.startsWithAnyOfIgnoreCase=function(){var s=Ye.apply(Y,arguments);return s.length===0?Gn(this):Nr(this,function(a,c){return c.some(function(d){return a.indexOf(d)===0})},s,In)},gt.prototype.anyOf=function(){var s=this,a=Ye.apply(Y,arguments),c=this._cmp;try{a.sort(c)}catch{return Tt(this,un)}if(a.length===0)return Gn(this);var d=new this.Collection(this,function(){return $n(a[0],a[a.length-1])});d._ondirectionchange=function(p){c=p==="next"?s._ascending:s._descending,a.sort(c)};var f=0;return d._addAlgorithm(function(p,y,x){for(var S=p.key;0<c(S,a[f]);)if(++f===a.length)return y(x),!1;return c(S,a[f])===0||(y(function(){p.continue(a[f])}),!1)}),d},gt.prototype.notEqual=function(s){return this.inAnyRange([[-1/0,s],[s,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},gt.prototype.noneOf=function(){var s=Ye.apply(Y,arguments);if(s.length===0)return new this.Collection(this);try{s.sort(this._ascending)}catch{return Tt(this,un)}var a=s.reduce(function(c,d){return c?c.concat([[c[c.length-1][1],d]]):[[-1/0,d]]},null);return a.push([s[s.length-1],this.db._maxKey]),this.inAnyRange(a,{includeLowers:!1,includeUppers:!1})},gt.prototype.inAnyRange=function(z,a){var c=this,d=this._cmp,f=this._ascending,p=this._descending,y=this._min,x=this._max;if(z.length===0)return Gn(this);if(!z.every(function(B){return B[0]!==void 0&&B[1]!==void 0&&f(B[0],B[1])<=0}))return Tt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",te.InvalidArgument);var S=!a||a.includeLowers!==!1,P=a&&a.includeUppers===!0,I,$=f;function O(B,M){return $(B[0],M[0])}try{(I=z.reduce(function(B,M){for(var q=0,V=B.length;q<V;++q){var ee=B[q];if(d(M[0],ee[1])<0&&0<d(M[1],ee[0])){ee[0]=y(ee[0],M[0]),ee[1]=x(ee[1],M[1]);break}}return q===V&&B.push(M),B},[])).sort(O)}catch{return Tt(this,un)}var _=0,D=P?function(B){return 0<f(B,I[_][1])}:function(B){return 0<=f(B,I[_][1])},R=S?function(B){return 0<p(B,I[_][0])}:function(B){return 0<=p(B,I[_][0])},T=D,z=new this.Collection(this,function(){return $n(I[0][0],I[I.length-1][1],!S,!P)});return z._ondirectionchange=function(B){$=B==="next"?(T=D,f):(T=R,p),I.sort(O)},z._addAlgorithm(function(B,M,q){for(var V,ee=B.key;T(ee);)if(++_===I.length)return M(q),!1;return!D(V=ee)&&!R(V)||(c._cmp(ee,I[_][1])===0||c._cmp(ee,I[_][0])===0||M(function(){$===f?B.continue(I[_][0]):B.continue(I[_][1])}),!1)}),z},gt.prototype.startsWithAnyOf=function(){var s=Ye.apply(Y,arguments);return s.every(function(a){return typeof a=="string"})?s.length===0?Gn(this):this.inAnyRange(s.map(function(a){return[a,a+In]})):Tt(this,"startsWithAnyOf() only works with strings")},gt);function gt(){}function nn(s){return Ne(function(a){return dr(a),s(a.target.error),!1})}function dr(s){s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault()}var hr="storagemutated",Fi="x-storagemutated-1",kn=lr(null,hr),zl=(rn.prototype._lock=function(){return re(!Q.global),++this._reculock,this._reculock!==1||Q.global||(Q.lockOwnerFor=this),this},rn.prototype._unlock=function(){if(re(!Q.global),--this._reculock==0)for(Q.global||(Q.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var s=this._blockedFuncs.shift();try{Dn(s[1],s[0])}catch{}}return this},rn.prototype._locked=function(){return this._reculock&&Q.lockOwnerFor!==this},rn.prototype.create=function(s){var a=this;if(!this.mode)return this;var c=this.db.idbdb,d=this.db._state.dbOpenError;if(re(!this.idbtrans),!s&&!c)switch(d&&d.name){case"DatabaseClosedError":throw new te.DatabaseClosed(d);case"MissingAPIError":throw new te.MissingAPI(d.message,d);default:throw new te.OpenFailed(d)}if(!this.active)throw new te.TransactionInactive;return re(this._completion._state===null),(s=this.idbtrans=s||(this.db.core||c).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Ne(function(f){dr(f),a._reject(s.error)}),s.onabort=Ne(function(f){dr(f),a.active&&a._reject(new te.Abort(s.error)),a.active=!1,a.on("abort").fire(f)}),s.oncomplete=Ne(function(){a.active=!1,a._resolve(),"mutatedParts"in s&&kn.storagemutated.fire(s.mutatedParts)}),this},rn.prototype._promise=function(s,a,c){var d=this;if(s==="readwrite"&&this.mode!=="readwrite")return at(new te.ReadOnly("Transaction is readonly"));if(!this.active)return at(new te.TransactionInactive);if(this._locked())return new J(function(p,y){d._blockedFuncs.push([function(){d._promise(s,a,c).then(p,y)},Q])});if(c)return wn(function(){var p=new J(function(y,x){d._lock();var S=a(y,x,d);S&&S.then&&S.then(y,x)});return p.finally(function(){return d._unlock()}),p._lib=!0,p});var f=new J(function(p,y){var x=a(p,y,d);x&&x.then&&x.then(p,y)});return f._lib=!0,f},rn.prototype._root=function(){return this.parent?this.parent._root():this},rn.prototype.waitFor=function(s){var a,c=this._root(),d=J.resolve(s);c._waitingFor?c._waitingFor=c._waitingFor.then(function(){return d}):(c._waitingFor=d,c._waitingQueue=[],a=c.idbtrans.objectStore(c.storeNames[0]),(function p(){for(++c._spinCount;c._waitingQueue.length;)c._waitingQueue.shift()();c._waitingFor&&(a.get(-1/0).onsuccess=p)})());var f=c._waitingFor;return new J(function(p,y){d.then(function(x){return c._waitingQueue.push(Ne(p.bind(null,x)))},function(x){return c._waitingQueue.push(Ne(y.bind(null,x)))}).finally(function(){c._waitingFor===f&&(c._waitingFor=null)})})},rn.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new te.Abort))},rn.prototype.table=function(s){var a=this._memoizedTables||(this._memoizedTables={});if(w(a,s))return a[s];var c=this.schema[s];if(!c)throw new te.NotFound("Table "+s+" not part of transaction");return c=new this.db.Table(s,c,this),c.core=this.db.core.table(s),a[s]=c},rn);function rn(){}function zi(s,a,c,d,f,p,y){return{name:s,keyPath:a,unique:c,multi:d,auto:f,compound:p,src:(c&&!y?"&":"")+(d?"*":"")+(f?"++":"")+io(a)}}function io(s){return typeof s=="string"?s:s?"["+[].join.call(s,"+")+"]":""}function Li(s,a,c){return{name:s,primKey:a,indexes:c,mappedClass:null,idxByName:(d=function(f){return[f.name,f]},c.reduce(function(f,p,y){return y=d(p,y),y&&(f[y[0]]=y[1]),f},{}))};var d}var fr=function(s){try{return s.only([[]]),fr=function(){return[[]]},[[]]}catch{return fr=function(){return In},In}};function Bi(s){return s==null?function(){}:typeof s=="string"?(a=s).split(".").length===1?function(c){return c[a]}:function(c){return pe(c,a)}:function(c){return pe(c,s)};var a}function so(s){return[].slice.call(s)}var Ll=0;function pr(s){return s==null?":id":typeof s=="string"?s:"[".concat(s.join("+"),"]")}function Bl(s,a,S){function d(T){if(T.type===3)return null;if(T.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var _=T.lower,D=T.upper,R=T.lowerOpen,T=T.upperOpen;return _===void 0?D===void 0?null:a.upperBound(D,!!T):D===void 0?a.lowerBound(_,!!R):a.bound(_,D,!!R,!!T)}function f(O){var _,D=O.name;return{name:D,schema:O,mutate:function(R){var T=R.trans,z=R.type,B=R.keys,M=R.values,q=R.range;return new Promise(function(V,ee){V=Ne(V);var G=T.objectStore(D),X=G.keyPath==null,ne=z==="put"||z==="add";if(!ne&&z!=="delete"&&z!=="deleteRange")throw new Error("Invalid operation type: "+z);var Z,ae=(B||M||{length:1}).length;if(B&&M&&B.length!==M.length)throw new Error("Given keys array must have same length as given values array.");if(ae===0)return V({numFailures:0,failures:{},results:[],lastResult:void 0});function ye($t){++Dt,dr($t)}var Ce=[],Ee=[],Dt=0;if(z==="deleteRange"){if(q.type===4)return V({numFailures:Dt,failures:Ee,results:[],lastResult:void 0});q.type===3?Ce.push(Z=G.clear()):Ce.push(Z=G.delete(d(q)))}else{var X=ne?X?[M,B]:[M,null]:[B,null],be=X[0],wt=X[1];if(ne)for(var vt=0;vt<ae;++vt)Ce.push(Z=wt&&wt[vt]!==void 0?G[z](be[vt],wt[vt]):G[z](be[vt])),Z.onerror=ye;else for(vt=0;vt<ae;++vt)Ce.push(Z=G[z](be[vt])),Z.onerror=ye}function ei($t){$t=$t.target.result,Ce.forEach(function(Fn,rs){return Fn.error!=null&&(Ee[rs]=Fn.error)}),V({numFailures:Dt,failures:Ee,results:z==="delete"?B:Ce.map(function(Fn){return Fn.result}),lastResult:$t})}Z.onerror=function($t){ye($t),ei($t)},Z.onsuccess=ei})},getMany:function(R){var T=R.trans,z=R.keys;return new Promise(function(B,M){B=Ne(B);for(var q,V=T.objectStore(D),ee=z.length,G=new Array(ee),X=0,ne=0,Z=function(Ce){Ce=Ce.target,G[Ce._pos]=Ce.result,++ne===X&&B(G)},ae=nn(M),ye=0;ye<ee;++ye)z[ye]!=null&&((q=V.get(z[ye]))._pos=ye,q.onsuccess=Z,q.onerror=ae,++X);X===0&&B(G)})},get:function(R){var T=R.trans,z=R.key;return new Promise(function(B,M){B=Ne(B);var q=T.objectStore(D).get(z);q.onsuccess=function(V){return B(V.target.result)},q.onerror=nn(M)})},query:(_=P,function(R){return new Promise(function(T,z){T=Ne(T);var B,M,q,X=R.trans,V=R.values,ee=R.limit,Z=R.query,G=ee===1/0?void 0:ee,ne=Z.index,Z=Z.range,X=X.objectStore(D),ne=ne.isPrimaryKey?X:X.index(ne.name),Z=d(Z);if(ee===0)return T({result:[]});_?((G=V?ne.getAll(Z,G):ne.getAllKeys(Z,G)).onsuccess=function(ae){return T({result:ae.target.result})},G.onerror=nn(z)):(B=0,M=!V&&"openKeyCursor"in ne?ne.openKeyCursor(Z):ne.openCursor(Z),q=[],M.onsuccess=function(ae){var ye=M.result;return ye?(q.push(V?ye.value:ye.primaryKey),++B===ee?T({result:q}):void ye.continue()):T({result:q})},M.onerror=nn(z))})}),openCursor:function(R){var T=R.trans,z=R.values,B=R.query,M=R.reverse,q=R.unique;return new Promise(function(V,ee){V=Ne(V);var ne=B.index,G=B.range,X=T.objectStore(D),X=ne.isPrimaryKey?X:X.index(ne.name),ne=M?q?"prevunique":"prev":q?"nextunique":"next",Z=!z&&"openKeyCursor"in X?X.openKeyCursor(d(G),ne):X.openCursor(d(G),ne);Z.onerror=nn(ee),Z.onsuccess=Ne(function(ae){var ye,Ce,Ee,Dt,be=Z.result;be?(be.___id=++Ll,be.done=!1,ye=be.continue.bind(be),Ce=(Ce=be.continuePrimaryKey)&&Ce.bind(be),Ee=be.advance.bind(be),Dt=function(){throw new Error("Cursor not stopped")},be.trans=T,be.stop=be.continue=be.continuePrimaryKey=be.advance=function(){throw new Error("Cursor not started")},be.fail=Ne(ee),be.next=function(){var wt=this,vt=1;return this.start(function(){return vt--?wt.continue():wt.stop()}).then(function(){return wt})},be.start=function(wt){function vt(){if(Z.result)try{wt()}catch($t){be.fail($t)}else be.done=!0,be.start=function(){throw new Error("Cursor behind last entry")},be.stop()}var ei=new Promise(function($t,Fn){$t=Ne($t),Z.onerror=nn(Fn),be.fail=Fn,be.stop=function(rs){be.stop=be.continue=be.continuePrimaryKey=be.advance=Dt,$t(rs)}});return Z.onsuccess=Ne(function($t){Z.onsuccess=vt,vt()}),be.continue=ye,be.continuePrimaryKey=Ce,be.advance=Ee,vt(),ei},V(be)):V(null)},ee)})},count:function(R){var T=R.query,z=R.trans,B=T.index,M=T.range;return new Promise(function(q,V){var ee=z.objectStore(D),G=B.isPrimaryKey?ee:ee.index(B.name),ee=d(M),G=ee?G.count(ee):G.count();G.onsuccess=Ne(function(X){return q(X.target.result)}),G.onerror=nn(V)})}}}var p,y,x,I=(y=S,x=so((p=s).objectStoreNames),{schema:{name:p.name,tables:x.map(function(O){return y.objectStore(O)}).map(function(O){var _=O.keyPath,T=O.autoIncrement,D=u(_),R={},T={name:O.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:_==null,compound:D,keyPath:_,autoIncrement:T,unique:!0,extractKey:Bi(_)},indexes:so(O.indexNames).map(function(z){return O.index(z)}).map(function(q){var B=q.name,M=q.unique,V=q.multiEntry,q=q.keyPath,V={name:B,compound:u(q),keyPath:q,unique:M,multiEntry:V,extractKey:Bi(q)};return R[pr(q)]=V}),getIndexByKeyPath:function(z){return R[pr(z)]}};return R[":id"]=T.primaryKey,_!=null&&(R[pr(_)]=T.primaryKey),T})},hasGetAll:0<x.length&&"getAll"in y.objectStore(x[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),S=I.schema,P=I.hasGetAll,I=S.tables.map(f),$={};return I.forEach(function(O){return $[O.name]=O}),{stack:"dbcore",transaction:s.transaction.bind(s),table:function(O){if(!$[O])throw new Error("Table '".concat(O,"' not found"));return $[O]},MIN_KEY:-1/0,MAX_KEY:fr(a),schema:S}}function Ml(s,a,c,d){var f=c.IDBKeyRange;return c.indexedDB,{dbcore:(d=Bl(a,f,d),s.dbcore.reduce(function(p,y){return y=y.create,i(i({},p),y(p))},d))}}function Ur(s,d){var c=d.db,d=Ml(s._middlewares,c,s._deps,d);s.core=d.dbcore,s.tables.forEach(function(f){var p=f.name;s.core.schema.tables.some(function(y){return y.name===p})&&(f.core=s.core.table(p),s[p]instanceof s.Table&&(s[p].core=f.core))})}function qr(s,a,c,d){c.forEach(function(f){var p=d[f];a.forEach(function(y){var x=(function S(P,I){return N(P,I)||(P=b(P))&&S(P,I)})(y,f);(!x||"value"in x&&x.value===void 0)&&(y===s.Transaction.prototype||y instanceof s.Transaction?U(y,f,{get:function(){return this.table(f)},set:function(S){H(this,f,{value:S,writable:!0,configurable:!0,enumerable:!0})}}):y[f]=new s.Table(f,p))})})}function Mi(s,a){a.forEach(function(c){for(var d in c)c[d]instanceof s.Table&&delete c[d]})}function Nl(s,a){return s._cfg.version-a._cfg.version}function Ul(s,a,c,d){var f=s._dbSchema;c.objectStoreNames.contains("$meta")&&!f.$meta&&(f.$meta=Li("$meta",ao("")[0],[]),s._storeNames.push("$meta"));var p=s._createTransaction("readwrite",s._storeNames,f);p.create(c),p._completion.catch(d);var y=p._reject.bind(p),x=Q.transless||Q;wn(function(){return Q.trans=p,Q.transless=x,a!==0?(Ur(s,c),P=a,((S=p).storeNames.includes("$meta")?S.table("$meta").get("version").then(function(I){return I??P}):J.resolve(P)).then(function(I){return O=I,_=p,D=c,R=[],I=($=s)._versions,T=$._dbSchema=Wr(0,$.idbdb,D),(I=I.filter(function(z){return z._cfg.version>=O})).length!==0?(I.forEach(function(z){R.push(function(){var B=T,M=z._cfg.dbschema;Kr($,B,D),Kr($,M,D),T=$._dbSchema=M;var q=Ni(B,M);q.add.forEach(function(ne){Ui(D,ne[0],ne[1].primKey,ne[1].indexes)}),q.change.forEach(function(ne){if(ne.recreate)throw new te.Upgrade("Not yet support for changing primary key");var Z=D.objectStore(ne.name);ne.add.forEach(function(ae){return Hr(Z,ae)}),ne.change.forEach(function(ae){Z.deleteIndex(ae.name),Hr(Z,ae)}),ne.del.forEach(function(ae){return Z.deleteIndex(ae)})});var V=z._cfg.contentUpgrade;if(V&&z._cfg.version>O){Ur($,D),_._memoizedTables={};var ee=Ie(M);q.del.forEach(function(ne){ee[ne]=B[ne]}),Mi($,[$.Transaction.prototype]),qr($,[$.Transaction.prototype],l(ee),ee),_.schema=ee;var G,X=ct(V);return X&&Wn(),q=J.follow(function(){var ne;(G=V(_))&&X&&(ne=vn.bind(null,null),G.then(ne,ne))}),G&&typeof G.then=="function"?J.resolve(G):q.then(function(){return G})}}),R.push(function(B){var M,q,V=z._cfg.dbschema;M=V,q=B,[].slice.call(q.db.objectStoreNames).forEach(function(ee){return M[ee]==null&&q.db.deleteObjectStore(ee)}),Mi($,[$.Transaction.prototype]),qr($,[$.Transaction.prototype],$._storeNames,$._dbSchema),_.schema=$._dbSchema}),R.push(function(B){$.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil($.idbdb.version/10)===z._cfg.version?($.idbdb.deleteObjectStore("$meta"),delete $._dbSchema.$meta,$._storeNames=$._storeNames.filter(function(M){return M!=="$meta"})):B.objectStore("$meta").put(z._cfg.version,"version"))})}),(function z(){return R.length?J.resolve(R.shift()(_.idbtrans)).then(z):J.resolve()})().then(function(){oo(T,D)})):J.resolve();var $,O,_,D,R,T}).catch(y)):(l(f).forEach(function(I){Ui(c,I,f[I].primKey,f[I].indexes)}),Ur(s,c),void J.follow(function(){return s.on.populate.fire(p)}).catch(y));var S,P})}function ql(s,a){oo(s._dbSchema,a),a.db.version%10!=0||a.objectStoreNames.contains("$meta")||a.db.createObjectStore("$meta").add(Math.ceil(a.db.version/10-1),"version");var c=Wr(0,s.idbdb,a);Kr(s,s._dbSchema,a);for(var d=0,f=Ni(c,s._dbSchema).change;d<f.length;d++){var p=(function(y){if(y.change.length||y.recreate)return console.warn("Unable to patch indexes of table ".concat(y.name," because it has changes on the type of index or primary key.")),{value:void 0};var x=a.objectStore(y.name);y.add.forEach(function(S){Fe&&console.debug("Dexie upgrade patch: Creating missing index ".concat(y.name,".").concat(S.src)),Hr(x,S)})})(f[d]);if(typeof p=="object")return p.value}}function Ni(s,a){var c,d={del:[],add:[],change:[]};for(c in s)a[c]||d.del.push(c);for(c in a){var f=s[c],p=a[c];if(f){var y={name:c,def:p,recreate:!1,del:[],add:[],change:[]};if(""+(f.primKey.keyPath||"")!=""+(p.primKey.keyPath||"")||f.primKey.auto!==p.primKey.auto)y.recreate=!0,d.change.push(y);else{var x=f.idxByName,S=p.idxByName,P=void 0;for(P in x)S[P]||y.del.push(P);for(P in S){var I=x[P],$=S[P];I?I.src!==$.src&&y.change.push($):y.add.push($)}(0<y.del.length||0<y.add.length||0<y.change.length)&&d.change.push(y)}}else d.add.push([c,p])}return d}function Ui(s,a,c,d){var f=s.db.createObjectStore(a,c.keyPath?{keyPath:c.keyPath,autoIncrement:c.auto}:{autoIncrement:c.auto});return d.forEach(function(p){return Hr(f,p)}),f}function oo(s,a){l(s).forEach(function(c){a.db.objectStoreNames.contains(c)||(Fe&&console.debug("Dexie: Creating missing table",c),Ui(a,c,s[c].primKey,s[c].indexes))})}function Hr(s,a){s.createIndex(a.name,a.keyPath,{unique:a.unique,multiEntry:a.multi})}function Wr(s,a,c){var d={};return le(a.objectStoreNames,0).forEach(function(f){for(var p=c.objectStore(f),y=zi(io(P=p.keyPath),P||"",!0,!1,!!p.autoIncrement,P&&typeof P!="string",!0),x=[],S=0;S<p.indexNames.length;++S){var I=p.index(p.indexNames[S]),P=I.keyPath,I=zi(I.name,P,!!I.unique,!!I.multiEntry,!1,P&&typeof P!="string",!1);x.push(I)}d[f]=Li(f,y,x)}),d}function Kr(s,a,c){for(var d=c.db.objectStoreNames,f=0;f<d.length;++f){var p=d[f],y=c.objectStore(p);s._hasGetAll="getAll"in y;for(var x=0;x<y.indexNames.length;++x){var S=y.indexNames[x],P=y.index(S).keyPath,I=typeof P=="string"?P:"["+le(P).join("+")+"]";!a[p]||(P=a[p].idxByName[I])&&(P.name=S,delete a[p].idxByName[I],a[p].idxByName[S]=P)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&o.WorkerGlobalScope&&o instanceof o.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(s._hasGetAll=!1)}function ao(s){return s.split(",").map(function(a,c){var d=(a=a.trim()).replace(/([&*]|\+\+)/g,""),f=/^\[/.test(d)?d.match(/^\[(.*)\]$/)[1].split("+"):d;return zi(d,f||null,/\&/.test(a),/\*/.test(a),/\+\+/.test(a),u(f),c===0)})}var Hl=(Vr.prototype._parseStoresSpec=function(s,a){l(s).forEach(function(c){if(s[c]!==null){var d=ao(s[c]),f=d.shift();if(f.unique=!0,f.multi)throw new te.Schema("Primary key cannot be multi-valued");d.forEach(function(p){if(p.auto)throw new te.Schema("Only primary key can be marked as autoIncrement (++)");if(!p.keyPath)throw new te.Schema("Index must have a name and cannot be an empty string")}),a[c]=Li(c,f,d)}})},Vr.prototype.stores=function(c){var a=this.db;this._cfg.storesSource=this._cfg.storesSource?h(this._cfg.storesSource,c):c;var c=a._versions,d={},f={};return c.forEach(function(p){h(d,p._cfg.storesSource),f=p._cfg.dbschema={},p._parseStoresSpec(d,f)}),a._dbSchema=f,Mi(a,[a._allTables,a,a.Transaction.prototype]),qr(a,[a._allTables,a,a.Transaction.prototype,this._cfg.tables],l(f),f),a._storeNames=l(f),this},Vr.prototype.upgrade=function(s){return this._cfg.contentUpgrade=At(this._cfg.contentUpgrade||he,s),this},Vr);function Vr(){}function qi(s,a){var c=s._dbNamesDB;return c||(c=s._dbNamesDB=new hn(zr,{addons:[],indexedDB:s,IDBKeyRange:a})).version(1).stores({dbnames:"name"}),c.table("dbnames")}function Hi(s){return s&&typeof s.databases=="function"}function Wi(s){return wn(function(){return Q.letThrough=!0,s()})}function Ki(s){return!("from"in s)}var yt=function(s,a){if(!this){var c=new yt;return s&&"d"in s&&h(c,s),c}h(this,arguments.length?{d:1,from:s,to:1<arguments.length?a:s}:{d:0})};function mr(s,a,c){var d=Pe(a,c);if(!isNaN(d)){if(0<d)throw RangeError();if(Ki(s))return h(s,{from:a,to:c,d:1});var f=s.l,d=s.r;if(Pe(c,s.from)<0)return f?mr(f,a,c):s.l={from:a,to:c,d:1,l:null,r:null},co(s);if(0<Pe(a,s.to))return d?mr(d,a,c):s.r={from:a,to:c,d:1,l:null,r:null},co(s);Pe(a,s.from)<0&&(s.from=a,s.l=null,s.d=d?d.d+1:1),0<Pe(c,s.to)&&(s.to=c,s.r=null,s.d=s.l?s.l.d+1:1),c=!s.r,f&&!s.l&&gr(s,f),d&&c&&gr(s,d)}}function gr(s,a){Ki(a)||(function c(d,S){var p=S.from,y=S.to,x=S.l,S=S.r;mr(d,p,y),x&&c(d,x),S&&c(d,S)})(s,a)}function lo(s,a){var c=Gr(a),d=c.next();if(d.done)return!1;for(var f=d.value,p=Gr(s),y=p.next(f.from),x=y.value;!d.done&&!y.done;){if(Pe(x.from,f.to)<=0&&0<=Pe(x.to,f.from))return!0;Pe(f.from,x.from)<0?f=(d=c.next(x.from)).value:x=(y=p.next(f.from)).value}return!1}function Gr(s){var a=Ki(s)?null:{s:0,n:s};return{next:function(c){for(var d=0<arguments.length;a;)switch(a.s){case 0:if(a.s=1,d)for(;a.n.l&&Pe(c,a.n.from)<0;)a={up:a,n:a.n.l,s:1};else for(;a.n.l;)a={up:a,n:a.n.l,s:1};case 1:if(a.s=2,!d||Pe(c,a.n.to)<=0)return{value:a.n,done:!1};case 2:if(a.n.r){a.s=3,a={up:a,n:a.n.r,s:0};continue}case 3:a=a.up}return{done:!0}}}}function co(s){var a,c,d=(((a=s.r)===null||a===void 0?void 0:a.d)||0)-(((c=s.l)===null||c===void 0?void 0:c.d)||0),f=1<d?"r":d<-1?"l":"";f&&(a=f=="r"?"l":"r",c=i({},s),d=s[f],s.from=d.from,s.to=d.to,s[f]=d[f],c[f]=d[a],(s[a]=c).d=uo(c)),s.d=uo(s)}function uo(c){var a=c.r,c=c.l;return(a?c?Math.max(a.d,c.d):a.d:c?c.d:0)+1}function Yr(s,a){return l(a).forEach(function(c){s[c]?gr(s[c],a[c]):s[c]=(function d(f){var p,y,x={};for(p in f)w(f,p)&&(y=f[p],x[p]=!y||typeof y!="object"||m.has(y.constructor)?y:d(y));return x})(a[c])}),s}function Vi(s,a){return s.all||a.all||Object.keys(s).some(function(c){return a[c]&&lo(a[c],s[c])})}A(yt.prototype,((Ft={add:function(s){return gr(this,s),this},addKey:function(s){return mr(this,s,s),this},addKeys:function(s){var a=this;return s.forEach(function(c){return mr(a,c,c)}),this},hasKey:function(s){var a=Gr(this).next(s).value;return a&&Pe(a.from,s)<=0&&0<=Pe(a.to,s)}})[ce]=function(){return Gr(this)},Ft));var On={},Gi={},Yi=!1;function Xr(s){Yr(Gi,s),Yi||(Yi=!0,setTimeout(function(){Yi=!1,Xi(Gi,!(Gi={}))},0))}function Xi(s,a){a===void 0&&(a=!1);var c=new Set;if(s.all)for(var d=0,f=Object.values(On);d<f.length;d++)ho(y=f[d],s,c,a);else for(var p in s){var y,x=/^idb\:\/\/(.*)\/(.*)\//.exec(p);x&&(p=x[1],x=x[2],(y=On["idb://".concat(p,"/").concat(x)])&&ho(y,s,c,a))}c.forEach(function(S){return S()})}function ho(s,a,c,d){for(var f=[],p=0,y=Object.entries(s.queries.query);p<y.length;p++){for(var x=y[p],S=x[0],P=[],I=0,$=x[1];I<$.length;I++){var O=$[I];Vi(a,O.obsSet)?O.subscribers.forEach(function(T){return c.add(T)}):d&&P.push(O)}d&&f.push([S,P])}if(d)for(var _=0,D=f;_<D.length;_++){var R=D[_],S=R[0],P=R[1];s.queries.query[S]=P}}function Wl(s){var a=s._state,c=s._deps.indexedDB;if(a.isBeingOpened||s.idbdb)return a.dbReadyPromise.then(function(){return a.dbOpenError?at(a.dbOpenError):s});a.isBeingOpened=!0,a.dbOpenError=null,a.openComplete=!1;var d=a.openCanceller,f=Math.round(10*s.verno),p=!1;function y(){if(a.openCanceller!==d)throw new te.DatabaseClosed("db.open() was cancelled")}function x(){return new J(function(O,_){if(y(),!c)throw new te.MissingAPI;var D=s.name,R=a.autoSchema||!f?c.open(D):c.open(D,f);if(!R)throw new te.MissingAPI;R.onerror=nn(_),R.onblocked=Ne(s._fireOnBlocked),R.onupgradeneeded=Ne(function(T){var z;I=R.transaction,a.autoSchema&&!s._options.allowEmptyDB?(R.onerror=dr,I.abort(),R.result.close(),(z=c.deleteDatabase(D)).onsuccess=z.onerror=Ne(function(){_(new te.NoSuchDatabase("Database ".concat(D," doesnt exist")))})):(I.onerror=nn(_),T=T.oldVersion>Math.pow(2,62)?0:T.oldVersion,$=T<1,s.idbdb=R.result,p&&ql(s,I),Ul(s,T/10,I,_))},_),R.onsuccess=Ne(function(){I=null;var T,z,B,M,q,V=s.idbdb=R.result,ee=le(V.objectStoreNames);if(0<ee.length)try{var G=V.transaction((M=ee).length===1?M[0]:M,"readonly");if(a.autoSchema)z=V,B=G,(T=s).verno=z.version/10,B=T._dbSchema=Wr(0,z,B),T._storeNames=le(z.objectStoreNames,0),qr(T,[T._allTables],l(B),B);else if(Kr(s,s._dbSchema,G),((q=Ni(Wr(0,(q=s).idbdb,G),q._dbSchema)).add.length||q.change.some(function(X){return X.add.length||X.change.length}))&&!p)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),V.close(),f=V.version+1,p=!0,O(x());Ur(s,G)}catch{}Kn.push(s),V.onversionchange=Ne(function(X){a.vcFired=!0,s.on("versionchange").fire(X)}),V.onclose=Ne(function(X){s.on("close").fire(X)}),$&&(q=s._deps,G=D,V=q.indexedDB,q=q.IDBKeyRange,Hi(V)||G===zr||qi(V,q).put({name:G}).catch(he)),O()},_)}).catch(function(O){switch(O?.name){case"UnknownError":if(0<a.PR1398_maxLoop)return a.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),x();break;case"VersionError":if(0<f)return f=0,x()}return J.reject(O)})}var S,P=a.dbReadyResolve,I=null,$=!1;return J.race([d,(typeof navigator>"u"?J.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(O){function _(){return indexedDB.databases().finally(O)}S=setInterval(_,100),_()}).finally(function(){return clearInterval(S)}):Promise.resolve()).then(x)]).then(function(){return y(),a.onReadyBeingFired=[],J.resolve(Wi(function(){return s.on.ready.fire(s.vip)})).then(function O(){if(0<a.onReadyBeingFired.length){var _=a.onReadyBeingFired.reduce(At,he);return a.onReadyBeingFired=[],J.resolve(Wi(function(){return _(s.vip)})).then(O)}})}).finally(function(){a.openCanceller===d&&(a.onReadyBeingFired=null,a.isBeingOpened=!1)}).catch(function(O){a.dbOpenError=O;try{I&&I.abort()}catch{}return d===a.openCanceller&&s._close(),at(O)}).finally(function(){a.openComplete=!0,P()}).then(function(){var O;return $&&(O={},s.tables.forEach(function(_){_.schema.indexes.forEach(function(D){D.name&&(O["idb://".concat(s.name,"/").concat(_.name,"/").concat(D.name)]=new yt(-1/0,[[[]]]))}),O["idb://".concat(s.name,"/").concat(_.name,"/")]=O["idb://".concat(s.name,"/").concat(_.name,"/:dels")]=new yt(-1/0,[[[]]])}),kn(hr).fire(O),Xi(O,!0)),s})}function Qi(s){function a(p){return s.next(p)}var c=f(a),d=f(function(p){return s.throw(p)});function f(p){return function(S){var x=p(S),S=x.value;return x.done?S:S&&typeof S.then=="function"?S.then(c,d):u(S)?Promise.all(S).then(c,d):c(S)}}return f(a)()}function Qr(s,a,c){for(var d=u(s)?s.slice():[s],f=0;f<c;++f)d.push(a);return d}var Kl={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(s){return i(i({},s),{table:function(a){var c=s.table(a),d=c.schema,f={},p=[];function y($,O,_){var D=pr($),R=f[D]=f[D]||[],T=$==null?0:typeof $=="string"?1:$.length,z=0<O,z=i(i({},_),{name:z?"".concat(D,"(virtual-from:").concat(_.name,")"):_.name,lowLevelIndex:_,isVirtual:z,keyTail:O,keyLength:T,extractKey:Bi($),unique:!z&&_.unique});return R.push(z),z.isPrimaryKey||p.push(z),1<T&&y(T===2?$[0]:$.slice(0,T-1),O+1,_),R.sort(function(B,M){return B.keyTail-M.keyTail}),z}a=y(d.primaryKey.keyPath,0,d.primaryKey),f[":id"]=[a];for(var x=0,S=d.indexes;x<S.length;x++){var P=S[x];y(P.keyPath,0,P)}function I($){var O,_=$.query.index;return _.isVirtual?i(i({},$),{query:{index:_.lowLevelIndex,range:(O=$.query.range,_=_.keyTail,{type:O.type===1?2:O.type,lower:Qr(O.lower,O.lowerOpen?s.MAX_KEY:s.MIN_KEY,_),lowerOpen:!0,upper:Qr(O.upper,O.upperOpen?s.MIN_KEY:s.MAX_KEY,_),upperOpen:!0})}}):$}return i(i({},c),{schema:i(i({},d),{primaryKey:a,indexes:p,getIndexByKeyPath:function($){return($=f[pr($)])&&$[0]}}),count:function($){return c.count(I($))},query:function($){return c.query(I($))},openCursor:function($){var O=$.query.index,_=O.keyTail,D=O.isVirtual,R=O.keyLength;return D?c.openCursor(I($)).then(function(z){return z&&T(z)}):c.openCursor($);function T(z){return Object.create(z,{continue:{value:function(B){B!=null?z.continue(Qr(B,$.reverse?s.MAX_KEY:s.MIN_KEY,_)):$.unique?z.continue(z.key.slice(0,R).concat($.reverse?s.MIN_KEY:s.MAX_KEY,_)):z.continue()}},continuePrimaryKey:{value:function(B,M){z.continuePrimaryKey(Qr(B,s.MAX_KEY,_),M)}},primaryKey:{get:function(){return z.primaryKey}},key:{get:function(){var B=z.key;return R===1?B[0]:B.slice(0,R)}},value:{get:function(){return z.value}}})}}})}})}};function Ji(s,a,c,d){return c=c||{},d=d||"",l(s).forEach(function(f){var p,y,x;w(a,f)?(p=s[f],y=a[f],typeof p=="object"&&typeof y=="object"&&p&&y?(x=k(p))!==k(y)?c[d+f]=a[f]:x==="Object"?Ji(p,y,c,d+f+"."):p!==y&&(c[d+f]=a[f]):p!==y&&(c[d+f]=a[f])):c[d+f]=void 0}),l(a).forEach(function(f){w(s,f)||(c[d+f]=a[f])}),c}function Zi(s,a){return a.type==="delete"?a.keys:a.keys||a.values.map(s.extractKey)}var Vl={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(s){return i(i({},s),{table:function(a){var c=s.table(a),d=c.schema.primaryKey;return i(i({},c),{mutate:function(f){var p=Q.trans,y=p.table(a).hook,x=y.deleting,S=y.creating,P=y.updating;switch(f.type){case"add":if(S.fire===he)break;return p._promise("readwrite",function(){return I(f)},!0);case"put":if(S.fire===he&&P.fire===he)break;return p._promise("readwrite",function(){return I(f)},!0);case"delete":if(x.fire===he)break;return p._promise("readwrite",function(){return I(f)},!0);case"deleteRange":if(x.fire===he)break;return p._promise("readwrite",function(){return(function $(O,_,D){return c.query({trans:O,values:!1,query:{index:d,range:_},limit:D}).then(function(R){var T=R.result;return I({type:"delete",keys:T,trans:O}).then(function(z){return 0<z.numFailures?Promise.reject(z.failures[0]):T.length<D?{failures:[],numFailures:0,lastResult:void 0}:$(O,i(i({},_),{lower:T[T.length-1],lowerOpen:!0}),D)})})})(f.trans,f.range,1e4)},!0)}return c.mutate(f);function I($){var O,_,D,R=Q.trans,T=$.keys||Zi(d,$);if(!T)throw new Error("Keys missing");return($=$.type==="add"||$.type==="put"?i(i({},$),{keys:T}):i({},$)).type!=="delete"&&($.values=n([],$.values)),$.keys&&($.keys=n([],$.keys)),O=c,D=T,((_=$).type==="add"?Promise.resolve([]):O.getMany({trans:_.trans,keys:D,cache:"immutable"})).then(function(z){var B=T.map(function(M,q){var V,ee,G,X=z[q],ne={onerror:null,onsuccess:null};return $.type==="delete"?x.fire.call(ne,M,X,R):$.type==="add"||X===void 0?(V=S.fire.call(ne,M,$.values[q],R),M==null&&V!=null&&($.keys[q]=M=V,d.outbound||xe($.values[q],d.keyPath,M))):(V=Ji(X,$.values[q]),(ee=P.fire.call(ne,V,M,X,R))&&(G=$.values[q],Object.keys(ee).forEach(function(Z){w(G,Z)?G[Z]=ee[Z]:xe(G,Z,ee[Z])}))),ne});return c.mutate($).then(function(M){for(var q=M.failures,V=M.results,ee=M.numFailures,M=M.lastResult,G=0;G<T.length;++G){var X=(V||T)[G],ne=B[G];X==null?ne.onerror&&ne.onerror(q[G]):ne.onsuccess&&ne.onsuccess($.type==="put"&&z[G]?$.values[G]:X)}return{failures:q,results:V,numFailures:ee,lastResult:M}}).catch(function(M){return B.forEach(function(q){return q.onerror&&q.onerror(M)}),Promise.reject(M)})})}}})}})}};function fo(s,a,c){try{if(!a||a.keys.length<s.length)return null;for(var d=[],f=0,p=0;f<a.keys.length&&p<s.length;++f)Pe(a.keys[f],s[p])===0&&(d.push(c?E(a.values[f]):a.values[f]),++p);return d.length===s.length?d:null}catch{return null}}var Gl={stack:"dbcore",level:-1,create:function(s){return{table:function(a){var c=s.table(a);return i(i({},c),{getMany:function(d){if(!d.cache)return c.getMany(d);var f=fo(d.keys,d.trans._cache,d.cache==="clone");return f?J.resolve(f):c.getMany(d).then(function(p){return d.trans._cache={keys:d.keys,values:d.cache==="clone"?E(p):p},p})},mutate:function(d){return d.type!=="add"&&(d.trans._cache=null),c.mutate(d)}})}}}};function po(s,a){return s.trans.mode==="readonly"&&!!s.subscr&&!s.trans.explicit&&s.trans.db._options.cache!=="disabled"&&!a.schema.primaryKey.outbound}function mo(s,a){switch(s){case"query":return a.values&&!a.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Yl={stack:"dbcore",level:0,name:"Observability",create:function(s){var a=s.schema.name,c=new yt(s.MIN_KEY,s.MAX_KEY);return i(i({},s),{transaction:function(d,f,p){if(Q.subscr&&f!=="readonly")throw new te.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Q.querier));return s.transaction(d,f,p)},table:function(d){var f=s.table(d),p=f.schema,y=p.primaryKey,$=p.indexes,x=y.extractKey,S=y.outbound,P=y.autoIncrement&&$.filter(function(_){return _.compound&&_.keyPath.includes(y.keyPath)}),I=i(i({},f),{mutate:function(_){function D(Z){return Z="idb://".concat(a,"/").concat(d,"/").concat(Z),M[Z]||(M[Z]=new yt)}var R,T,z,B=_.trans,M=_.mutatedParts||(_.mutatedParts={}),q=D(""),V=D(":dels"),ee=_.type,ne=_.type==="deleteRange"?[_.range]:_.type==="delete"?[_.keys]:_.values.length<50?[Zi(y,_).filter(function(Z){return Z}),_.values]:[],G=ne[0],X=ne[1],ne=_.trans._cache;return u(G)?(q.addKeys(G),(ne=ee==="delete"||G.length===X.length?fo(G,ne):null)||V.addKeys(G),(ne||X)&&(R=D,T=ne,z=X,p.indexes.forEach(function(Z){var ae=R(Z.name||"");function ye(Ee){return Ee!=null?Z.extractKey(Ee):null}function Ce(Ee){return Z.multiEntry&&u(Ee)?Ee.forEach(function(Dt){return ae.addKey(Dt)}):ae.addKey(Ee)}(T||z).forEach(function(Ee,wt){var be=T&&ye(T[wt]),wt=z&&ye(z[wt]);Pe(be,wt)!==0&&(be!=null&&Ce(be),wt!=null&&Ce(wt))})}))):G?(X={from:(X=G.lower)!==null&&X!==void 0?X:s.MIN_KEY,to:(X=G.upper)!==null&&X!==void 0?X:s.MAX_KEY},V.add(X),q.add(X)):(q.add(c),V.add(c),p.indexes.forEach(function(Z){return D(Z.name).add(c)})),f.mutate(_).then(function(Z){return!G||_.type!=="add"&&_.type!=="put"||(q.addKeys(Z.results),P&&P.forEach(function(ae){for(var ye=_.values.map(function(be){return ae.extractKey(be)}),Ce=ae.keyPath.findIndex(function(be){return be===y.keyPath}),Ee=0,Dt=Z.results.length;Ee<Dt;++Ee)ye[Ee][Ce]=Z.results[Ee];D(ae.name).addKeys(ye)})),B.mutatedParts=Yr(B.mutatedParts||{},M),Z})}}),$=function(D){var R=D.query,D=R.index,R=R.range;return[D,new yt((D=R.lower)!==null&&D!==void 0?D:s.MIN_KEY,(R=R.upper)!==null&&R!==void 0?R:s.MAX_KEY)]},O={get:function(_){return[y,new yt(_.key)]},getMany:function(_){return[y,new yt().addKeys(_.keys)]},count:$,query:$,openCursor:$};return l(O).forEach(function(_){I[_]=function(D){var R=Q.subscr,T=!!R,z=po(Q,f)&&mo(_,D)?D.obsSet={}:R;if(T){var B=function(X){return X="idb://".concat(a,"/").concat(d,"/").concat(X),z[X]||(z[X]=new yt)},M=B(""),q=B(":dels"),R=O[_](D),T=R[0],R=R[1];if((_==="query"&&T.isPrimaryKey&&!D.values?q:B(T.name||"")).add(R),!T.isPrimaryKey){if(_!=="count"){var V=_==="query"&&S&&D.values&&f.query(i(i({},D),{values:!1}));return f[_].apply(this,arguments).then(function(X){if(_==="query"){if(S&&D.values)return V.then(function(ye){return ye=ye.result,M.addKeys(ye),X});var ne=D.values?X.result.map(x):X.result;(D.values?M:q).addKeys(ne)}else if(_==="openCursor"){var Z=X,ae=D.values;return Z&&Object.create(Z,{key:{get:function(){return q.addKey(Z.primaryKey),Z.key}},primaryKey:{get:function(){var ye=Z.primaryKey;return q.addKey(ye),ye}},value:{get:function(){return ae&&M.addKey(Z.primaryKey),Z.value}}})}return X})}q.add(c)}}return f[_].apply(this,arguments)}}),I}})}};function go(s,a,c){if(c.numFailures===0)return a;if(a.type==="deleteRange")return null;var d=a.keys?a.keys.length:"values"in a&&a.values?a.values.length:1;return c.numFailures===d?null:(a=i({},a),u(a.keys)&&(a.keys=a.keys.filter(function(f,p){return!(p in c.failures)})),"values"in a&&u(a.values)&&(a.values=a.values.filter(function(f,p){return!(p in c.failures)})),a)}function es(s,a){return c=s,((d=a).lower===void 0||(d.lowerOpen?0<Pe(c,d.lower):0<=Pe(c,d.lower)))&&(s=s,(a=a).upper===void 0||(a.upperOpen?Pe(s,a.upper)<0:Pe(s,a.upper)<=0));var c,d}function bo(s,a,O,d,f,p){if(!O||O.length===0)return s;var y=a.query.index,x=y.multiEntry,S=a.query.range,P=d.schema.primaryKey.extractKey,I=y.extractKey,$=(y.lowLevelIndex||y).extractKey,O=O.reduce(function(_,D){var R=_,T=[];if(D.type==="add"||D.type==="put")for(var z=new yt,B=D.values.length-1;0<=B;--B){var M,q=D.values[B],V=P(q);z.hasKey(V)||(M=I(q),(x&&u(M)?M.some(function(Z){return es(Z,S)}):es(M,S))&&(z.addKey(V),T.push(q)))}switch(D.type){case"add":var ee=new yt().addKeys(a.values?_.map(function(ae){return P(ae)}):_),R=_.concat(a.values?T.filter(function(ae){return ae=P(ae),!ee.hasKey(ae)&&(ee.addKey(ae),!0)}):T.map(function(ae){return P(ae)}).filter(function(ae){return!ee.hasKey(ae)&&(ee.addKey(ae),!0)}));break;case"put":var G=new yt().addKeys(D.values.map(function(ae){return P(ae)}));R=_.filter(function(ae){return!G.hasKey(a.values?P(ae):ae)}).concat(a.values?T:T.map(function(ae){return P(ae)}));break;case"delete":var X=new yt().addKeys(D.keys);R=_.filter(function(ae){return!X.hasKey(a.values?P(ae):ae)});break;case"deleteRange":var ne=D.range;R=_.filter(function(ae){return!es(P(ae),ne)})}return R},s);return O===s?s:(O.sort(function(_,D){return Pe($(_),$(D))||Pe(P(_),P(D))}),a.limit&&a.limit<1/0&&(O.length>a.limit?O.length=a.limit:s.length===a.limit&&O.length<a.limit&&(f.dirty=!0)),p?Object.freeze(O):O)}function yo(s,a){return Pe(s.lower,a.lower)===0&&Pe(s.upper,a.upper)===0&&!!s.lowerOpen==!!a.lowerOpen&&!!s.upperOpen==!!a.upperOpen}function Xl(s,a){return(function(c,d,f,p){if(c===void 0)return d!==void 0?-1:0;if(d===void 0)return 1;if((d=Pe(c,d))===0){if(f&&p)return 0;if(f)return 1;if(p)return-1}return d})(s.lower,a.lower,s.lowerOpen,a.lowerOpen)<=0&&0<=(function(c,d,f,p){if(c===void 0)return d!==void 0?1:0;if(d===void 0)return-1;if((d=Pe(c,d))===0){if(f&&p)return 0;if(f)return-1;if(p)return 1}return d})(s.upper,a.upper,s.upperOpen,a.upperOpen)}function Ql(s,a,c,d){s.subscribers.add(c),d.addEventListener("abort",function(){var f,p;s.subscribers.delete(c),s.subscribers.size===0&&(f=s,p=a,setTimeout(function(){f.subscribers.size===0&&W(p,f)},3e3))})}var Jl={stack:"dbcore",level:0,name:"Cache",create:function(s){var a=s.schema.name;return i(i({},s),{transaction:function(c,d,f){var p,y,x=s.transaction(c,d,f);return d==="readwrite"&&(y=(p=new AbortController).signal,f=function(S){return function(){if(p.abort(),d==="readwrite"){for(var P=new Set,I=0,$=c;I<$.length;I++){var O=$[I],_=On["idb://".concat(a,"/").concat(O)];if(_){var D=s.table(O),R=_.optimisticOps.filter(function(ae){return ae.trans===x});if(x._explicit&&S&&x.mutatedParts)for(var T=0,z=Object.values(_.queries.query);T<z.length;T++)for(var B=0,M=(ee=z[T]).slice();B<M.length;B++)Vi((G=M[B]).obsSet,x.mutatedParts)&&(W(ee,G),G.subscribers.forEach(function(ae){return P.add(ae)}));else if(0<R.length){_.optimisticOps=_.optimisticOps.filter(function(ae){return ae.trans!==x});for(var q=0,V=Object.values(_.queries.query);q<V.length;q++)for(var ee,G,X,ne=0,Z=(ee=V[q]).slice();ne<Z.length;ne++)(G=Z[ne]).res!=null&&x.mutatedParts&&(S&&!G.dirty?(X=Object.isFrozen(G.res),X=bo(G.res,G.req,R,D,G,X),G.dirty?(W(ee,G),G.subscribers.forEach(function(ae){return P.add(ae)})):X!==G.res&&(G.res=X,G.promise=J.resolve({result:X}))):(G.dirty&&W(ee,G),G.subscribers.forEach(function(ae){return P.add(ae)})))}}}P.forEach(function(ae){return ae()})}}},x.addEventListener("abort",f(!1),{signal:y}),x.addEventListener("error",f(!1),{signal:y}),x.addEventListener("complete",f(!0),{signal:y})),x},table:function(c){var d=s.table(c),f=d.schema.primaryKey;return i(i({},d),{mutate:function(p){var y=Q.trans;if(f.outbound||y.db._options.cache==="disabled"||y.explicit||y.idbtrans.mode!=="readwrite")return d.mutate(p);var x=On["idb://".concat(a,"/").concat(c)];return x?(y=d.mutate(p),p.type!=="add"&&p.type!=="put"||!(50<=p.values.length||Zi(f,p).some(function(S){return S==null}))?(x.optimisticOps.push(p),p.mutatedParts&&Xr(p.mutatedParts),y.then(function(S){0<S.numFailures&&(W(x.optimisticOps,p),(S=go(0,p,S))&&x.optimisticOps.push(S),p.mutatedParts&&Xr(p.mutatedParts))}),y.catch(function(){W(x.optimisticOps,p),p.mutatedParts&&Xr(p.mutatedParts)})):y.then(function(S){var P=go(0,i(i({},p),{values:p.values.map(function(I,$){var O;return S.failures[$]?I:(I=(O=f.keyPath)!==null&&O!==void 0&&O.includes(".")?E(I):i({},I),xe(I,f.keyPath,S.results[$]),I)})}),S);x.optimisticOps.push(P),queueMicrotask(function(){return p.mutatedParts&&Xr(p.mutatedParts)})}),y):d.mutate(p)},query:function(p){if(!po(Q,d)||!mo("query",p))return d.query(p);var y=((P=Q.trans)===null||P===void 0?void 0:P.db._options.cache)==="immutable",$=Q,x=$.requery,S=$.signal,P=(function(D,R,T,z){var B=On["idb://".concat(D,"/").concat(R)];if(!B)return[];if(!(R=B.queries[T]))return[null,!1,B,null];var M=R[(z.query?z.query.index.name:null)||""];if(!M)return[null,!1,B,null];switch(T){case"query":var q=M.find(function(V){return V.req.limit===z.limit&&V.req.values===z.values&&yo(V.req.query.range,z.query.range)});return q?[q,!0,B,M]:[M.find(function(V){return("limit"in V.req?V.req.limit:1/0)>=z.limit&&(!z.values||V.req.values)&&Xl(V.req.query.range,z.query.range)}),!1,B,M];case"count":return q=M.find(function(V){return yo(V.req.query.range,z.query.range)}),[q,!!q,B,M]}})(a,c,"query",p),I=P[0],$=P[1],O=P[2],_=P[3];return I&&$?I.obsSet=p.obsSet:($=d.query(p).then(function(D){var R=D.result;if(I&&(I.res=R),y){for(var T=0,z=R.length;T<z;++T)Object.freeze(R[T]);Object.freeze(R)}else D.result=E(R);return D}).catch(function(D){return _&&I&&W(_,I),Promise.reject(D)}),I={obsSet:p.obsSet,promise:$,subscribers:new Set,type:"query",req:p,dirty:!1},_?_.push(I):(_=[I],(O=O||(On["idb://".concat(a,"/").concat(c)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[p.query.index.name||""]=_)),Ql(I,_,x,S),I.promise.then(function(D){return{result:bo(D.result,p,O?.optimisticOps,d,I,y)}})}})}})}};function Jr(s,a){return new Proxy(s,{get:function(c,d,f){return d==="db"?a:Reflect.get(c,d,f)}})}var hn=(lt.prototype.version=function(s){if(isNaN(s)||s<.1)throw new te.Type("Given version is not a positive number");if(s=Math.round(10*s)/10,this.idbdb||this._state.isBeingOpened)throw new te.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,s);var a=this._versions,c=a.filter(function(d){return d._cfg.version===s})[0];return c||(c=new this.Version(s),a.push(c),a.sort(Nl),c.stores({}),this._state.autoSchema=!1,c)},lt.prototype._whenReady=function(s){var a=this;return this.idbdb&&(this._state.openComplete||Q.letThrough||this._vip)?s():new J(function(c,d){if(a._state.openComplete)return d(new te.DatabaseClosed(a._state.dbOpenError));if(!a._state.isBeingOpened){if(!a._state.autoOpen)return void d(new te.DatabaseClosed);a.open().catch(he)}a._state.dbReadyPromise.then(c,d)}).then(s)},lt.prototype.use=function(s){var a=s.stack,c=s.create,d=s.level,f=s.name;return f&&this.unuse({stack:a,name:f}),s=this._middlewares[a]||(this._middlewares[a]=[]),s.push({stack:a,create:c,level:d??10,name:f}),s.sort(function(p,y){return p.level-y.level}),this},lt.prototype.unuse=function(s){var a=s.stack,c=s.name,d=s.create;return a&&this._middlewares[a]&&(this._middlewares[a]=this._middlewares[a].filter(function(f){return d?f.create!==d:!!c&&f.name!==c})),this},lt.prototype.open=function(){var s=this;return Dn(Ze,function(){return Wl(s)})},lt.prototype._close=function(){var s=this._state,a=Kn.indexOf(this);if(0<=a&&Kn.splice(a,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}s.isBeingOpened||(s.dbReadyPromise=new J(function(c){s.dbReadyResolve=c}),s.openCanceller=new J(function(c,d){s.cancelOpen=d}))},lt.prototype.close=function(c){var a=(c===void 0?{disableAutoOpen:!0}:c).disableAutoOpen,c=this._state;a?(c.isBeingOpened&&c.cancelOpen(new te.DatabaseClosed),this._close(),c.autoOpen=!1,c.dbOpenError=new te.DatabaseClosed):(this._close(),c.autoOpen=this._options.autoOpen||c.isBeingOpened,c.openComplete=!1,c.dbOpenError=null)},lt.prototype.delete=function(s){var a=this;s===void 0&&(s={disableAutoOpen:!0});var c=0<arguments.length&&typeof arguments[0]!="object",d=this._state;return new J(function(f,p){function y(){a.close(s);var x=a._deps.indexedDB.deleteDatabase(a.name);x.onsuccess=Ne(function(){var S,P,I;S=a._deps,P=a.name,I=S.indexedDB,S=S.IDBKeyRange,Hi(I)||P===zr||qi(I,S).delete(P).catch(he),f()}),x.onerror=nn(p),x.onblocked=a._fireOnBlocked}if(c)throw new te.InvalidArgument("Invalid closeOptions argument to db.delete()");d.isBeingOpened?d.dbReadyPromise.then(y):y()})},lt.prototype.backendDB=function(){return this.idbdb},lt.prototype.isOpen=function(){return this.idbdb!==null},lt.prototype.hasBeenClosed=function(){var s=this._state.dbOpenError;return s&&s.name==="DatabaseClosed"},lt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},lt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(lt.prototype,"tables",{get:function(){var s=this;return l(this._allTables).map(function(a){return s._allTables[a]})},enumerable:!1,configurable:!0}),lt.prototype.transaction=function(){var s=function(a,c,d){var f=arguments.length;if(f<2)throw new te.InvalidArgument("Too few arguments");for(var p=new Array(f-1);--f;)p[f-1]=arguments[f];return d=p.pop(),[a,$e(p),d]}.apply(this,arguments);return this._transaction.apply(this,s)},lt.prototype._transaction=function(s,a,c){var d=this,f=Q.trans;f&&f.db===this&&s.indexOf("!")===-1||(f=null);var p,y,x=s.indexOf("?")!==-1;s=s.replace("!","").replace("?","");try{if(y=a.map(function(P){if(P=P instanceof d.Table?P.name:P,typeof P!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return P}),s=="r"||s===Di)p=Di;else{if(s!="rw"&&s!=Ii)throw new te.InvalidArgument("Invalid transaction mode: "+s);p=Ii}if(f){if(f.mode===Di&&p===Ii){if(!x)throw new te.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");f=null}f&&y.forEach(function(P){if(f&&f.storeNames.indexOf(P)===-1){if(!x)throw new te.SubTransaction("Table "+P+" not included in parent transaction.");f=null}}),x&&f&&!f.active&&(f=null)}}catch(P){return f?f._promise(null,function(I,$){$(P)}):at(P)}var S=function P(I,$,O,_,D){return J.resolve().then(function(){var R=Q.transless||Q,T=I._createTransaction($,O,I._dbSchema,_);if(T.explicit=!0,R={trans:T,transless:R},_)T.idbtrans=_.idbtrans;else try{T.create(),T.idbtrans._explicit=!0,I._state.PR1398_maxLoop=3}catch(M){return M.name===Xe.InvalidState&&I.isOpen()&&0<--I._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),I.close({disableAutoOpen:!1}),I.open().then(function(){return P(I,$,O,null,D)})):at(M)}var z,B=ct(D);return B&&Wn(),R=J.follow(function(){var M;(z=D.call(T,T))&&(B?(M=vn.bind(null,null),z.then(M,M)):typeof z.next=="function"&&typeof z.throw=="function"&&(z=Qi(z)))},R),(z&&typeof z.then=="function"?J.resolve(z).then(function(M){return T.active?M:at(new te.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):R.then(function(){return z})).then(function(M){return _&&T._resolve(),T._completion.then(function(){return M})}).catch(function(M){return T._reject(M),at(M)})})}.bind(null,this,p,y,f,c);return f?f._promise(p,S,"lock"):Q.trans?Dn(Q.transless,function(){return d._whenReady(S)}):this._whenReady(S)},lt.prototype.table=function(s){if(!w(this._allTables,s))throw new te.InvalidTable("Table ".concat(s," does not exist"));return this._allTables[s]},lt);function lt(s,a){var c=this;this._middlewares={},this.verno=0;var d=lt.dependencies;this._options=a=i({addons:lt.addons,autoOpen:!0,indexedDB:d.indexedDB,IDBKeyRange:d.IDBKeyRange,cache:"cloned"},a),this._deps={indexedDB:a.indexedDB,IDBKeyRange:a.IDBKeyRange},d=a.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var f,p,y,x,S,P={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:he,dbReadyPromise:null,cancelOpen:he,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:a.autoOpen};P.dbReadyPromise=new J(function($){P.dbReadyResolve=$}),P.openCanceller=new J(function($,O){P.cancelOpen=O}),this._state=P,this.name=s,this.on=lr(this,"populate","blocked","versionchange","close",{ready:[At,he]}),this.on.ready.subscribe=ke(this.on.ready.subscribe,function($){return function(O,_){lt.vip(function(){var D,R=c._state;R.openComplete?(R.dbOpenError||J.resolve().then(O),_&&$(O)):R.onReadyBeingFired?(R.onReadyBeingFired.push(O),_&&$(O)):($(O),D=c,_||$(function T(){D.on.ready.unsubscribe(O),D.on.ready.unsubscribe(T)}))})}}),this.Collection=(f=this,cr(Ol.prototype,function(z,T){this.db=f;var _=Gs,D=null;if(T)try{_=T()}catch(B){D=B}var R=z._ctx,T=R.table,z=T.hook.reading.fire;this._ctx={table:T,index:R.index,isPrimKey:!R.index||T.schema.primKey.keyPath&&R.index===T.schema.primKey.name,range:_,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:D,or:R.or,valueMapper:z!==ve?z:null}})),this.Table=(p=this,cr(Js.prototype,function($,O,_){this.db=p,this._tx=_,this.name=$,this.schema=O,this.hook=p._allTables[$]?p._allTables[$].hook:lr(null,{creating:[Je,he],reading:[_t,ve],updating:[Wt,he],deleting:[bn,he]})})),this.Transaction=(y=this,cr(zl.prototype,function($,O,_,D,R){var T=this;this.db=y,this.mode=$,this.storeNames=O,this.schema=_,this.chromeTransactionDurability=D,this.idbtrans=null,this.on=lr(this,"complete","error","abort"),this.parent=R||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new J(function(z,B){T._resolve=z,T._reject=B}),this._completion.then(function(){T.active=!1,T.on.complete.fire()},function(z){var B=T.active;return T.active=!1,T.on.error.fire(z),T.parent?T.parent._reject(z):B&&T.idbtrans&&T.idbtrans.abort(),at(z)})})),this.Version=(x=this,cr(Hl.prototype,function($){this.db=x,this._cfg={version:$,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(S=this,cr(ro.prototype,function($,O,_){if(this.db=S,this._ctx={table:$,index:O===":id"?null:O,or:_},this._cmp=this._ascending=Pe,this._descending=function(D,R){return Pe(R,D)},this._max=function(D,R){return 0<Pe(D,R)?D:R},this._min=function(D,R){return Pe(D,R)<0?D:R},this._IDBKeyRange=S._deps.IDBKeyRange,!this._IDBKeyRange)throw new te.MissingAPI})),this.on("versionchange",function($){0<$.newVersion?console.warn("Another connection wants to upgrade database '".concat(c.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(c.name,"'. Closing db now to resume the delete request.")),c.close({disableAutoOpen:!1})}),this.on("blocked",function($){!$.newVersion||$.newVersion<$.oldVersion?console.warn("Dexie.delete('".concat(c.name,"') was blocked")):console.warn("Upgrade '".concat(c.name,"' blocked by other connection holding version ").concat($.oldVersion/10))}),this._maxKey=fr(a.IDBKeyRange),this._createTransaction=function($,O,_,D){return new c.Transaction($,O,_,c._options.chromeTransactionDurability,D)},this._fireOnBlocked=function($){c.on("blocked").fire($),Kn.filter(function(O){return O.name===c.name&&O!==c&&!O._state.vcFired}).map(function(O){return O.on("versionchange").fire($)})},this.use(Gl),this.use(Jl),this.use(Yl),this.use(Kl),this.use(Vl);var I=new Proxy(this,{get:function($,O,_){if(O==="_vip")return!0;if(O==="table")return function(R){return Jr(c.table(R),I)};var D=Reflect.get($,O,_);return D instanceof Js?Jr(D,I):O==="tables"?D.map(function(R){return Jr(R,I)}):O==="_createTransaction"?function(){return Jr(D.apply(this,arguments),I)}:D}});this.vip=I,d.forEach(function($){return $(c)})}var Zr,Ft=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Zl=(ts.prototype.subscribe=function(s,a,c){return this._subscribe(s&&typeof s!="function"?s:{next:s,error:a,complete:c})},ts.prototype[Ft]=function(){return this},ts);function ts(s){this._subscribe=s}try{Zr={indexedDB:o.indexedDB||o.mozIndexedDB||o.webkitIndexedDB||o.msIndexedDB,IDBKeyRange:o.IDBKeyRange||o.webkitIDBKeyRange}}catch{Zr={indexedDB:null,IDBKeyRange:null}}function wo(s){var a,c=!1,d=new Zl(function(f){var p=ct(s),y,x=!1,S={},P={},I={get closed(){return x},unsubscribe:function(){x||(x=!0,y&&y.abort(),$&&kn.storagemutated.unsubscribe(_))}};f.start&&f.start(I);var $=!1,O=function(){return Ti(D)},_=function(R){Yr(S,R),Vi(P,S)&&O()},D=function(){var R,T,z;!x&&Zr.indexedDB&&(S={},R={},y&&y.abort(),y=new AbortController,z=(function(B){var M=ze();try{p&&Wn();var q=wn(s,B);return q=p?q.finally(vn):q}finally{M&&Ve()}})(T={subscr:R,signal:y.signal,requery:O,querier:s,trans:null}),Promise.resolve(z).then(function(B){c=!0,a=B,x||T.signal.aborted||(S={},(function(M){for(var q in M)if(w(M,q))return;return 1})(P=R)||$||(kn(hr,_),$=!0),Ti(function(){return!x&&f.next&&f.next(B)}))},function(B){c=!1,["DatabaseClosedError","AbortError"].includes(B?.name)||x||Ti(function(){x||f.error&&f.error(B)})}))};return setTimeout(O,0),I});return d.hasValue=function(){return c},d.getValue=function(){return a},d}var jn=hn;function ns(s){var a=Cn;try{Cn=!0,kn.storagemutated.fire(s),Xi(s,!0)}finally{Cn=a}}A(jn,i(i({},Be),{delete:function(s){return new jn(s,{addons:[]}).delete()},exists:function(s){return new jn(s,{addons:[]}).open().then(function(a){return a.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(s){try{return a=jn.dependencies,c=a.indexedDB,a=a.IDBKeyRange,(Hi(c)?Promise.resolve(c.databases()).then(function(d){return d.map(function(f){return f.name}).filter(function(f){return f!==zr})}):qi(c,a).toCollection().primaryKeys()).then(s)}catch{return at(new te.MissingAPI)}var a,c},defineClass:function(){return function(s){h(this,s)}},ignoreTransaction:function(s){return Q.trans?Dn(Q.transless,s):s()},vip:Wi,async:function(s){return function(){try{var a=Qi(s.apply(this,arguments));return a&&typeof a.then=="function"?a:J.resolve(a)}catch(c){return at(c)}}},spawn:function(s,a,c){try{var d=Qi(s.apply(c,a||[]));return d&&typeof d.then=="function"?d:J.resolve(d)}catch(f){return at(f)}},currentTransaction:{get:function(){return Q.trans||null}},waitFor:function(s,a){return a=J.resolve(typeof s=="function"?jn.ignoreTransaction(s):s).timeout(a||6e4),Q.trans?Q.trans.waitFor(a):a},Promise:J,debug:{get:function(){return Fe},set:function(s){We(s)}},derive:F,extend:h,props:A,override:ke,Events:lr,on:kn,liveQuery:wo,extendObservabilitySet:Yr,getByKeyPath:pe,setByKeyPath:xe,delByKeyPath:function(s,a){typeof a=="string"?xe(s,a,void 0):"length"in a&&[].map.call(a,function(c){xe(s,c,void 0)})},shallowClone:Ie,deepClone:E,getObjectDiff:Ji,cmp:Pe,asap:ie,minKey:-1/0,addons:[],connections:Kn,errnames:Xe,dependencies:Zr,cache:On,semVer:"4.0.10",version:"4.0.10".split(".").map(function(s){return parseInt(s)}).reduce(function(s,a,c){return s+a/Math.pow(10,2*c)})})),jn.maxKey=fr(jn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(kn(hr,function(s){Cn||(s=new CustomEvent(Fi,{detail:s}),Cn=!0,dispatchEvent(s),Cn=!1)}),addEventListener(Fi,function(s){s=s.detail,Cn||ns(s)}));var Yn,Cn=!1,vo=function(){};return typeof BroadcastChannel<"u"&&((vo=function(){(Yn=new BroadcastChannel(Fi)).onmessage=function(s){return s.data&&ns(s.data)}})(),typeof Yn.unref=="function"&&Yn.unref(),kn(hr,function(s){Cn||Yn.postMessage(s)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(s){if(!hn.disableBfCache&&s.persisted){Fe&&console.debug("Dexie: handling persisted pagehide"),Yn?.close();for(var a=0,c=Kn;a<c.length;a++)c[a].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(s){!hn.disableBfCache&&s.persisted&&(Fe&&console.debug("Dexie: handling persisted pageshow"),vo(),ns({all:new yt(-1/0,[[]])}))})),J.rejectionMapper=function(s,a){return!s||s instanceof He||s instanceof TypeError||s instanceof SyntaxError||!s.name||!Qe[s.name]?s:(a=new Qe[s.name](a||s.message,s),"stack"in s&&U(a,"stack",{get:function(){return this.inner.stack}}),a)},We(Fe),i(hn,Object.freeze({__proto__:null,Dexie:hn,liveQuery:wo,Entity:Ys,cmp:Pe,PropModSymbol:dn,PropModification:ur,replacePrefix:function(s,a){return new ur({replacePrefix:[s,a]})},add:function(s){return new ur({add:s})},remove:function(s){return new ur({remove:s})},default:hn,RangeSet:yt,mergeRanges:gr,rangesOverlap:lo}),{default:hn}),hn})})(ai)),ai.exports}var Rc=Ic();const hs=Tc(Rc),Oo=Symbol.for("Dexie"),hi=globalThis[Oo]||(globalThis[Oo]=hs);if(hs.semVer!==hi.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${hs.semVer} and ${hi.semVer}`);const{liveQuery:Ra,mergeRanges:nm,rangesOverlap:rm,RangeSet:im,cmp:sm,Entity:om,PropModSymbol:am,PropModification:lm,replacePrefix:cm,add:um,remove:dm}=hi,Oc="easydb";let ti=null;function jc(){if(ti)return ti;const e=new hi(Oc);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>Fc()),ti={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},ti}function Fc(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function Xn(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(i=>Oa(i,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const i=Ra(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>i.unsubscribe()}}}function zc(e,t){return{async find(r){const i=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return i.toArray();const n=Object.entries(r);return i.filter(o=>Oa(o,n)).toArray()},async findOne(r){const i=await e.get(r);return i&&i.tableId===t?i:null},async insert(r){const i={...r,tableId:t};return await e.add(i),i},async bulkInsert(r){if(r.length===0)return[];const i=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(i),i},async upsert(r){const i={...r,tableId:t};return await e.put(i),i},async patch(r,i){if(await e.update(r,i)===0)throw new Error(`row patch: no row ${r}`);const o=await e.get(r);if(!o)throw new Error(`row patch: row ${r} vanished after update`);return o},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=Ra(()=>e.where("tableId").equals(t).toArray()).subscribe({next:o=>r(o)});return()=>n.unsubscribe()}}}function Oa(e,t){for(const[r,i]of t)if(e[r]!==i)return!1;return!0}function Lc(e){return{workspaces:Xn(e.workspaces),tables:Xn(e.tables),settings:Xn(e.settings),plugins:Xn(e.plugins),viewTemplates:Xn(e.viewTemplates),viewInstances:Xn(e.viewInstances),rows:t=>zc(e.rows,t)}}function Bc(e){const{base:t,providers:r,tableById:i,ctx:n}=e,o=new Map;return{...t,rows(l){const u=i(l),h=u?.source;if(h){const b=r.get(h.type);if(b){const C=JSON.stringify(h),w=o.get(l);if(w&&w.key===C)return w.coll;const A=b.create(u,n);return o.set(l,{key:C,coll:A}),A}}return o.delete(l),t.rows(l)}}}function Mc(){const e=new Map;return{on(t,r){let i=e.get(t);return i||(i=new Set,e.set(t,i)),i.add(r),()=>{i.delete(r)}},emit(t,r){const i=e.get(t);if(i)for(const n of i)try{n(r)}catch(o){console.error(`[event:${String(t)}] listener threw`,o)}}}}const Xt=et`
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
`;function Tn(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const jo=new WeakSet;function Qt(e,t){if(jo.has(t))return;jo.add(t);let r=0,i=0,n=0,o=0,l=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",h=>{if(h.target.closest("button, input, textarea, select, a, label"))return;l=!0,r=h.clientX,i=h.clientY;const C=e.getBoundingClientRect();n=C.left,o=C.top,t.setPointerCapture(h.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",h=>{if(!l)return;const b=h.clientX-r,C=h.clientY-i,w=-e.offsetWidth+80,A=window.innerWidth-80,H=0,U=window.innerHeight-40,F=Math.max(w,Math.min(A,n+b)),N=Math.max(H,Math.min(U,o+C));e.style.position="fixed",e.style.left=`${F}px`,e.style.top=`${N}px`,e.style.margin="0"});const u=h=>{if(l){l=!1;try{t.releasePointerCapture(h.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",u),t.addEventListener("pointercancel",u)}var Nc=Object.defineProperty,Uc=Object.getOwnPropertyDescriptor,ja=(e,t,r,i)=>{for(var n=i>1?void 0:i?Uc(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Nc(t,r,n),n};let zt=class extends Ue{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),zt.instance=this}disconnectedCallback(){super.disconnectedCallback(),zt.instance===this&&(zt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&Qt(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(i=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:i}})}choice(e,t,r="Choose"){return this.enqueue(i=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:i}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return L`
      <dialog @cancel=${this.onCancel} @keydown=${Tn}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):me}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return L`
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
        `;case"prompt":return L`
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
        `;case"choice":return L`
          <div class="dialog-header">
            <h2>${e.title}</h2>
            <div class="header-actions">
              <button class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
            </div>
          </div>
          <div class="dialog-body">
            ${e.message?L`<p class="message">${e.message}</p>`:me}
            <div class="choices">
              ${e.options.map(t=>L`<button class="choice" @click=${()=>this.closeAndResolve(t)}>
                    ${t}
                  </button>`)}
            </div>
          </div>
        `}}};zt.instance=null;zt.styles=[Xt,et`
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
    `];ja([K()],zt.prototype,"current",2);zt=ja([rt("host-dialogs")],zt);const ln=et`
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
`;var qc=Object.defineProperty,Hc=Object.getOwnPropertyDescriptor,Fa=(e,t,r,i)=>{for(var n=i>1?void 0:i?Hc(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&qc(t,r,n),n};let fn=class extends Ue{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),fn.instance=this}disconnectedCallback(){super.disconnectedCallback(),fn.instance===this&&(fn.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const i=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),i)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return L`
      ${this.toasts.map(e=>L`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${Kc(e.kind)}</span>
            <span class="body">
              ${e.title?L`<strong>${e.title}</strong>`:""}${Wc(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};fn.instance=null;fn.styles=[ln,et`
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
    `];Fa([K()],fn.prototype,"toasts",2);fn=Fa([rt("toast-host")],fn);function Wc(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let i=0,n;for(;(n=t.exec(e))!==null;)n.index>i&&r.push(e.slice(i,n.index)),r.push({url:n[0]}),i=n.index+n[0].length;return i<e.length&&r.push(e.slice(i)),r.length===0?e:r.map(o=>typeof o=="string"?o:L`<a href=${o.url} target="_blank" rel="noopener noreferrer">${o.url}</a>`)}function Kc(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Vc(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map}}function Ln(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function ss(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function Gc(e){return{registerHeaderButton:t=>Ln(e.headerButtons,t),registerFooterButton:t=>Ln(e.footerButtons,t),registerTableButton:t=>Ln(e.tableButtons,t),registerImporter:t=>Ln(e.importers,t),registerExporter:t=>Ln(e.exporters,t),registerUrlSource:t=>Ln(e.urlSources,t),registerDropHandler:t=>Ln(e.dropHandlers,t),registerCellRenderer:(t,r)=>ss(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>ss(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>ss(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},dialogs:Yc}}const Yc={async alert(e,t){const r=zt.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=zt.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const i=zt.instance;return i?i.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const i=zt.instance;if(i)return i.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=fn.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}};function Xc(e){const t=Gc(e.registries),r=e.registries.rowSources,i=o=>(r.set(o.type,o),()=>{r.get(o.type)===o&&r.delete(o.type)}),n={open(o){return console.warn("[host] windows.open is stubbed until Phase 5",o.id),{id:o.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:n,registerRowSource:i,backend:{fetch:async(o,l)=>{const u=await Qc(e.store),h=l?.body instanceof ArrayBuffer;if(!u||h)return globalThis.fetch(o,l);const b={url:o};return l?.method&&(b.method=l.method),l?.headers&&(b.headers=l.headers),typeof l?.body=="string"&&(b.body=l.body),globalThis.fetch(`${u}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)})},async saveFile(o,l,u){const h=typeof l=="string"?new Blob([l],{type:u??"application/octet-stream"}):l,b=URL.createObjectURL(h),C=document.createElement("a");C.href=b,C.download=o,C.rel="noopener",document.body.appendChild(C),C.click(),C.remove(),setTimeout(()=>URL.revokeObjectURL(b),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function Qc(e){const r=(await e.settings.findOne("server-sync:url"))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}const Jc={name:"csv-import",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"easyDBAccess built-ins"};function Zc(e){e.ui.registerImporter(eu),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const i=hu(t).filter(fu);if(i.length===0)return!1;t.preventDefault();for(const n of i)await tu(e,n);return!0})}const eu={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return Sr(t)}};async function tu(e,t){const r=t.name.replace(/\.csv$/i,"")||"imported";await fi(e,await t.text(),r)}async function fi(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("csv-import: no active workspace");const o=(r||"imported").replace(/\.csv$/i,"")||"imported",l=(await e.store.tables.find()).find(w=>w.workspaceId===n&&w.name===o);let u,h;if(l){const w=await e.ui.dialogs.choice(`A table named "${o}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!w)return;w==="Append rows"?(h="append",u=l.id):w==="Overwrite rows"?(h="overwrite",u=l.id):(h="new",u=ni())}else h="new",u=ni();e.events.emit("import:before",{source:"csv",tableId:u});let b;if(h==="new"){const w=Sr(t,{maxRows:i.maxRows});let A=w.columns,H=w.rows;if(i.editColumns){const F=await i.editColumns(A);if(F===null)return;H=pu(H,A,F),A=F}i.maxRows!=null&&(H=H.slice(0,i.maxRows));const U=l?`${o} (${Date.now().toString(36)})`:o;await e.store.tables.insert({id:u,workspaceId:n,name:U,code:fs(U),columns:A,view:"table",...i.origin?{origin:i.origin}:{},updatedAt:Date.now()}),b=H.map(F=>({id:ni(),tableId:u,data:F,updatedAt:Date.now()}))}else{const w=l.columns,A=za(t,{maxRows:i.maxRows});if(b=(i.maxRows!=null?A.rows.slice(0,i.maxRows):A.rows).map(U=>{const F={};for(let N=0;N<w.length;N++){const oe=w[N];F[oe.field]=Ua(U[N]??"",oe.type)}return{id:ni(),tableId:u,data:F,updatedAt:Date.now()}}),h==="overwrite"){const U=e.store.rows(u),F=await U.find();await U.bulkRemove(F.map(N=>N.id))}}await e.store.rows(u).bulkInsert(b),e.events.emit("import:after",{source:"csv",tableId:u,rowCount:b.length})}function za(e,t={}){const r=e.replace(/﻿/,""),i=Ma(r),n=Na(r,i,La(t.maxRows));if(n.length===0)return{header:[],rows:[]};const o=n[0],l=n.slice(1).filter(u=>!(u.length===1&&u[0]===""));return{header:o,rows:l}}function La(e){return e!=null?e+1:void 0}async function Ba(e,t){const i=new TextDecoder,n=t+1;let o="",l=0,u=!1,h=0;for(;h<e.size;){const b=new Uint8Array(await e.slice(h,h+1048576).arrayBuffer());h+=1048576;const C=i.decode(b,{stream:!0});for(let w=0;w<C.length;w++){const A=C[w];if(A==='"')u=!u;else if(A===`
`&&!u&&(l+=1,l>=n))return o+C.slice(0,w+1)}o+=C}return o}function Sr(e,t={}){const r=e.replace(/﻿/,""),i=Ma(r),n=Na(r,i,La(t.maxRows));if(n.length===0)return{columns:[],rows:[]};const o=n[0],l=n.slice(1).filter(H=>!(H.length===1&&H[0]==="")),u=o.map((H,U)=>iu(H,U)),h=Ha(u.map(H=>H.field)),b=l.map(H=>{const U={};for(let F=0;F<h.length;F++)U[h[F]]=H[F]??"";return U}),C=u.map((H,U)=>H.type?H.type:su(b.map(F=>F[h[U]]??"").filter(F=>F.length>0))),w=u.map((H,U)=>{const F=C[U]??"string",N={field:h[U],label:H.label,type:F},oe=ru(F),le=H.renderer??oe;return le&&(N.renderer=le),H.default!==void 0&&(N.default=H.default),H.max!=null&&(N.max=H.max),H.unique&&(N.unique=!0),H.notnull&&(N.notnull=!0),H.hidden&&(N.hidden=!0),N}),A=b.map(H=>{const U={};for(let F=0;F<h.length;F++){const N=h[F],oe=C[F]??"string";U[N]=Ua(H[N]??"",oe)}return U});return{columns:w,rows:A}}const nu=new Set(["string","number","boolean","date","datetime"]),Fo={color:"color",image:"image"};function ru(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function iu(e,t){const r=e.trim();if(!r.includes(":"))return{field:fs(r||`col_${t+1}`),label:r||`Column ${t+1}`};const i=r.split(":"),n=fs(i[0]||`col_${t+1}`),o=(i[1]??i[0]??"").trim()||n,l={field:n,label:o},u=(i[2]??"").trim();u&&(nu.has(u)?l.type=u:Fo[u]&&(l.type="string",l.renderer=Fo[u]));const h=(i[3]??"").trim();h&&(l.default=h);const b=(i[4]??"").trim();if(b){const w=Number(b);Number.isFinite(w)&&w>0&&(l.max=w)}const C=(i[5]??"").toLowerCase();return C.includes("u")&&(l.unique=!0),C.includes("n")&&(l.notnull=!0),C.includes("h")&&(l.hidden=!0),l}function Ma(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const o of t)o in r&&(r[o]+=1);let i=",",n=-1;for(const o of[",",";","	"])(r[o]??0)>n&&(i=o,n=r[o]??0);return i}function Na(e,t,r){const i=[];let n=[],o="",l=!1;for(let u=0;u<e.length;u++){const h=e[u];if(l)h==='"'?e[u+1]==='"'?(o+='"',u++):l=!1:o+=h;else if(h==='"')l=!0;else if(h===t)n.push(o),o="";else if(h===`
`||h==="\r"){if(h==="\r"&&e[u+1]===`
`&&u++,n.push(o),i.push(n),n=[],o="",r!=null&&i.length>=r)return i}else o+=h}return(o.length>0||n.length>0)&&(n.push(o),i.push(n)),i}function su(e){return e.length===0?"string":e.every(au)?"boolean":e.every(lu)?"number":e.every(uu)?"datetime":e.every(cu)?"date":"string"}const ou=/^(true|false|yes|no|0|1)$/i;function au(e){return ou.test(e.trim())}function lu(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function cu(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function uu(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function Ua(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const i=Number(r);return Number.isFinite(i)?i:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return qa(r);case"datetime":return du(r);default:return e}}function qa(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let i=parseInt(t[1],10),n=parseInt(t[2],10);const o=t[3];let l=parseInt(o,10);o.length===2&&(l+=2e3);let u,h;return i>12?(u=i,h=n):n>12?(h=i,u=n):(u=i,h=n),`${l.toString().padStart(4,"0")}-${h.toString().padStart(2,"0")}-${u.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function du(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const i=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(i)return`${qa(`${i[1]}/${i[2]}/${i[3]}`)}T${i[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const o=n.toISOString();return`${o.slice(0,10)}T${o.slice(11,16)}`}return e}function hu(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function fu(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function Ha(e){const t=new Map,r=new Set,i=[];for(const n of e){let o=n,l=t.get(n)??0;for(;r.has(o);)l+=1,o=`${n}_${l+1}`;t.set(n,l),r.add(o),i.push(o)}return i}function pu(e,t,r){return e.map(i=>{const n={};for(let o=0;o<t.length;o++)n[r[o].field]=i[t[o].field];return n})}function fs(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function ni(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const mu=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:Ha,importCsvText:fi,init:Zc,meta:Jc,parseCsv:Sr,parseCsvRaw:za,readCsvHead:Ba},Symbol.toStringTag,{value:"Module"})),gu={name:"csv-export",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"easyDBAccess built-ins"},bu={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Ds(e,t)}};function yu(e){e.ui.registerExporter(bu),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const i=await t.store.tables.findOne(r.tableId);if(!i)return;const n=await t.store.rows(i.id).find(),o=Ds(i,n);await t.backend.saveFile(`${i.code||i.name||"table"}.csv`,o,"text/csv")}})}function Ds(e,t){const r=e.columns.map(o=>o.field),i=e.columns.map(o=>zo(o.label??o.field)),n=t.map(o=>r.map(l=>zo(wu(o.data[l]))).join(","));return[i.join(","),...n].join(`\r
`)}function wu(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function zo(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const vu=Object.freeze(Object.defineProperty({__proto__:null,init:yu,meta:gu,serializeCsv:Ds},Symbol.toStringTag,{value:"Module"}));var xu=Object.defineProperty,$u=Object.getOwnPropertyDescriptor,ir=(e,t,r,i)=>{for(var n=i>1?void 0:i?$u(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&xu(t,r,n),n};function ps(e,t={}){return(Rt.instance??ku()).open(e,t)}function ku(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function Cu(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Rt=class extends Ue{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,i)=>r?i:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Rt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Rt.instance===this&&(Rt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(r=>!r.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return L`
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
            ${this.message?L`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,r)=>L`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${r}`}
                      .checked=${this.selected[r]??!1}
                      @change=${()=>this.toggle(r)}
                    />
                    <label for=${`tsel-${r}`}>
                      <span class="name">${t.name}</span>
                      ${t.hidden?L`<span class="tag-hidden">hidden</span>`:""}
                      <span class="size">${Cu(t.size)}</span>
                      ${t.detail?L`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};Rt.instance=null;Rt.styles=[Xt,et`
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
    `];ir([K()],Rt.prototype,"items",2);ir([K()],Rt.prototype,"selected",2);ir([K()],Rt.prototype,"heading",2);ir([K()],Rt.prototype,"message",2);ir([K()],Rt.prototype,"confirmLabel",2);Rt=ir([rt("table-select-dialog")],Rt);const Eu={name:"json-import",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"easyDBAccess built-ins"};function Su(e){e.ui.registerImporter(_u),e.ui.registerDropHandler(async t=>{const i=Ou(t).filter(ju);if(i.length===0)return!1;t.preventDefault();for(const n of i)await Au(e,n);return!0})}const _u={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=_r(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function Au(e,t){await pi(e,await t.text(),t.name)}async function pi(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("json-import: no active workspace");let o;try{o=JSON.parse(t)}catch(N){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${N.message}`)});return}const l=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",u=_r(o,l);if(u.length===0)return;let h=u;if(u.length>1){const N=await ps(u.map(oe=>({name:oe.name,size:oe.rows.length})),{title:"Import tables",message:`"${r}" contains ${u.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!N)return;h=N.map(oe=>u[oe])}const b=(await e.store.tables.find()).filter(N=>N.workspaceId===n),C=new Set(h.map(N=>N.name)),w=b.filter(N=>C.has(N.name));let A;if(w.length===0&&h.length===1)A="append-new";else{const N=w.length>0?[`Overwrite matching (${w.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],oe=await e.ui.dialogs.choice(`Importing ${h.length} table${h.length===1?"":"s"} from "${r}".${w.length>0?`

${w.length} table${w.length===1?"":"s"} share a name with existing data.`:""}`,N,"JSON import");if(!oe)return;oe.startsWith("Overwrite matching")?A="overwrite-matching":oe==="Replace entire workspace"?A="replace-workspace":A="append-new"}const H=2e3,U=h.reduce((N,oe)=>N+(oe.source?0:Math.min(oe.rows.length,i.maxRows??1/0)),0);let F=null;if(U>=H){const{TopProgress:N}=await Sn(async()=>{const{TopProgress:oe}=await Promise.resolve().then(()=>yl);return{TopProgress:oe}},void 0);F=N.begin(`Importing ${r}…`)}try{if(A==="replace-workspace")for(const le of b){const ke=e.store.rows(le.id),re=await ke.find();await ke.bulkRemove(re.map(ie=>ie.id)),await e.store.tables.remove(le.id)}const N=new Map(b.map(le=>[le.name,le]));let oe=0;for(const le of h){const ke=le.source,re=le.origin??(!ke&&i.originUrl?{type:"json",url:i.originUrl}:void 0);let ie;const pe=A==="overwrite-matching"?N.get(le.name):void 0;if(pe){if(ie=pe.id,!pe.source){const Ie=e.store.rows(ie),qe=await Ie.find();await Ie.bulkRemove(qe.map($e=>$e.id))}await e.store.tables.patch(ie,{columns:le.columns,...le.windowGeometry?{windowGeometry:le.windowGeometry}:{},...le.sortColumn?{sortColumn:le.sortColumn,sortAsc:le.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},source:ke??void 0,origin:re??void 0,updatedAt:Date.now()})}else ie=No(),e.events.emit("import:before",{source:"json",tableId:ie}),await e.store.tables.insert({id:ie,workspaceId:n,name:le.name,code:Fu(le.name),columns:le.columns,view:"table",...le.windowGeometry?{windowGeometry:le.windowGeometry}:{},...le.sortColumn?{sortColumn:le.sortColumn,sortAsc:le.sortAsc??!0}:{},...ke?{source:ke}:{},...re?{origin:re}:{},updatedAt:Date.now()});let xe=0;if(!ke){const Ie=e.store.rows(ie),$e=(i.maxRows!=null?le.rows.slice(0,i.maxRows):le.rows).map(m=>({id:No(),tableId:ie,data:m,updatedAt:Date.now()}));await Ie.bulkInsert($e),xe=$e.length,oe+=xe,F?.fraction(U>0?oe/U:1)}e.events.emit("import:after",{source:"json",tableId:ie,rowCount:xe})}}finally{F?.done()}}function _r(e,t){if(It(e)&&Lo(e))return Bo(e);if(It(e)&&Array.isArray(e.tables)){const r=e,i=[];for(const n of r.tables){if(Tu(n)){const o=n,l=It(o.windowGeometry)?o.windowGeometry:void 0,u=typeof o.sortColumn=="string"?o.sortColumn:void 0,h=typeof o.sortAsc=="boolean"?o.sortAsc:void 0,b=It(o.source)&&typeof o.source.type=="string"?o.source:void 0,C=It(o.origin)&&typeof o.origin.type=="string"&&typeof o.origin.url=="string"?o.origin:void 0;i.push({name:String(n.name),columns:n.columns.map(Du),rows:Array.isArray(n.rows)?n.rows.filter(It):[],...l?{windowGeometry:l}:{},...u?{sortColumn:u,sortAsc:h??!0}:{},...b?{source:b}:{},...C?{origin:C}:{}});continue}It(n)&&Lo(n)&&i.push(...Bo(n))}return i}if(Array.isArray(e)){const r=e.filter(It);return r.length===0?[]:[{name:t,...Mo(r)}]}return It(e)?[{name:t,...Mo([e])}]:[]}function Lo(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!It(r))continue;const i=r;if(Array.isArray(i.dataArray)&&Array.isArray(i.columns))return!0}return!1}function Bo(e){const t=[];for(const[r,i]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!It(i))continue;const n=i;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const o=r.replace(/\.table\.json$/,""),l=n.columns.map(C=>Pu(C)),u=l.map(C=>C.field),h=n.dataArray.filter(C=>Array.isArray(C)).map(C=>{const w={};for(let A=0;A<u.length;A++)w[u[A]]=C[A];return w}),b={name:o,columns:l,rows:h};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const C=n.elementRect;b.windowGeometry={x:C.x,y:C.y,w:C.width??600,h:C.height??400,z:C.zIndex??100,minimized:!!C.minimized,maximized:!!C.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<u.length&&(b.sortColumn=u[n.sortColumn],b.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(b)}return t}function Pu(e){const t=String(e.field??"col"),r=String(e.name??t),i=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:i};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function Tu(e){return It(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Du(e){if(!It(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let i=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(i==="color"||i==="image")&&(n=n??i,i="string");const o={field:r,label:String(t.label??r),type:i};return n&&(o.renderer=n),typeof t.script=="string"&&(o.script=t.script),o}function Mo(e){const t=new Set;for(const n of e)for(const o of Object.keys(n))t.add(o);return{columns:Array.from(t).map(n=>({field:n,label:n,type:Iu(e.map(o=>o[n]))})),rows:e}}function Iu(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Ru(r))?"date":"string"}function Ru(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function It(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Ou(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function ju(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function Fu(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function No(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const zu=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:pi,init:Su,meta:Eu,parsedToTables:_r},Symbol.toStringTag,{value:"Module"}));class Bt extends Error{constructor(t,r){const i=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(i),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function mn(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),i={};for(const[u,h]of t.searchParams)i[u]=h;let n,o=null,l=null;if(r.length>=2){l=decodeURIComponent(r[r.length-1]),o=decodeURIComponent(r[r.length-2]);const u=r.slice(0,r.length-2).join("/");n=t.origin+(u?"/"+u:"")}else r.length===1&&(o=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:o,table:l,query:i}}function er(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[i,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(i,String(n));return r.toString()}function Lu(e){const t=e?.next_url??null,r=e?.next,i=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],o=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(u=>Array.isArray(u)&&o?Object.fromEntries(o.map((h,b)=>[h,u[b]])):u),nextUrl:t,nextToken:i,hasMore:t!=null||i!=null,truncated:e?.truncated===!0}}function Bu(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function Uo(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],i={},n=e?.column_details;if(Array.isArray(n))for(const u of n)i[u.column??u.name]=u;else n&&typeof n=="object"&&Object.assign(i,n);for(const u of r)u in i||(i[u]={});const l=(r.length?r:Object.keys(i)).map(u=>{const h=i[u]||{},b=h.is_pk===!0||h.is_pk===1||t.includes(u),C={field:u,label:Wa(u),type:Bu(h.sqlite_type??h.type,u)};return(h.notnull===!0||h.notnull===1||b)&&(C.notnull=!0),b&&(C.unique=!0),(h.hidden===!0||h.hidden===1)&&(C.hidden=!0),h.default!=null&&h.default!==""&&(C.default=h.default),C});if(t.length===0){const u=l.filter(h=>h.unique).map(h=>h.field);u.length&&t.push(...u)}return{columns:l,pks:t}}function Wa(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function xi(e){const t=[],r=new Set;for(const i of e)for(const n of Object.keys(i))r.has(n)||(r.add(n),t.push(n));return t.map(i=>({field:i,label:Wa(i),type:Mu(e.map(n=>n[i]))}))}function Mu(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Nu(r))?"datetime":"string"}function Nu(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Uu(e){const t=new TextEncoder().encode(String(e));let r="";for(const i of t){const n=String.fromCharCode(i);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+i.toString(16).toUpperCase().padStart(2,"0")}return r}function qu(e,t){return!t||t.length===0?null:t.map(r=>Uu(e[r])).join(",")}function Hu(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const i of t){if(typeof i=="string"){r.push(i);continue}if(i&&typeof i=="object"&&typeof i.name=="string"){if(i.name==="_memory")continue;r.push(typeof i.route=="string"&&i.route?i.route:i.name)}}return r}function Wu(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],i=[];for(const n of r){if(typeof n=="string"){i.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&i.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return i}async function _n(e,t){let r;try{r=await e(t)}catch(n){const o=n?.message||"network error";throw new Bt({error:`Couldn't reach ${t} (${o}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Bt(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const i=await r.json();if(i&&i.ok===!1)throw new Bt(i,r.status);return i}async function Ka(e,t){return Hu(await _n(e,`${t}/-/databases.json`))}async function qo(e,t,r){return Wu(await _n(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function $i(e,t){const r=er(t,{_extra:"column_details"}),i=await _n(e,r);let{columns:n,pks:o}=Uo(i),l=!!i&&i.column_details!=null,u=i?.count??null,h=i;if(n.length===0){const b=er(t,{_extra:"columns"}),C=await _n(e,b);({columns:n,pks:o}=Uo(C)),l=!!C&&C.column_details!=null,u=C?.count??u,h=C}return{columns:n,pks:o,count:u,typed:l,raw:h}}async function ms(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const r=await $i(e,t);return{db:t.db,table:t.table,count:r.count,hidden:!1,pks:r.pks}}function Ku(e,t,r){const i=e&&typeof e=="object"?e:{},n=t&&r&&i.databases?.[t]?.tables?.[r]||t&&r&&i.databases?.[t]?.tables?.[r.toLowerCase()]||{},o=t&&i.databases?.[t]||{},l=U=>n[U]??o[U]??i[U],u={columns:{},units:{}};typeof n.sort=="string"&&(u.sort=n.sort),typeof n.sort_desc=="string"&&(u.sortDesc=n.sort_desc),typeof n.size=="number"&&(u.size=n.size),Array.isArray(n.sortable_columns)&&(u.sortableColumns=n.sortable_columns.slice()),typeof n.label_column=="string"&&(u.labelColumn=n.label_column),n.hidden===!0&&(u.hidden=!0),typeof n.description=="string"&&(u.description=n.description),typeof n.description_html=="string"&&(u.descriptionHtml=n.description_html);const h=l("source"),b=l("source_url"),C=l("license"),w=l("license_url"),A=l("about"),H=l("about_url");if(typeof h=="string"&&(u.source=h),typeof b=="string"&&(u.sourceUrl=b),typeof C=="string"&&(u.license=C),typeof w=="string"&&(u.licenseUrl=w),typeof A=="string"&&(u.about=A),typeof H=="string"&&(u.aboutUrl=H),n.columns&&typeof n.columns=="object")for(const[U,F]of Object.entries(n.columns))typeof F=="string"&&(u.columns[U]=F);if(n.units&&typeof n.units=="object")for(const[U,F]of Object.entries(n.units))typeof F=="string"&&(u.units[U]=F);return u}const Ho=new Map;async function Vu(e,t){let r=Ho.get(t);return r||(r=_n(e,`${t}/-/metadata.json`).catch(()=>({})),Ho.set(t,r)),r}async function Is(e,t){const r=await Vu(e,t.base);return Ku(r,t.db,t.table)}function Gu(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function Rs(e,t){const r=e.sortableColumns!=null?new Set(e.sortableColumns):null,i=t.map(u=>{const h=e.columns[u.field],b=e.units[u.field],C=r?r.has(u.field):void 0;return h==null&&b==null&&C===void 0?u:{...u,...h!=null?{description:h}:{},...b!=null?{units:b}:{},...C!==void 0?{sortable:C}:{}}}),n=new Set(t.map(u=>u.field)),o={};e.sort&&n.has(e.sort)?(o.sortColumn=e.sort,o.sortAsc=!0):e.sortDesc&&n.has(e.sortDesc)&&(o.sortColumn=e.sortDesc,o.sortAsc=!1);const l=Gu(e);return l&&(o.info=l),e.labelColumn&&n.has(e.labelColumn)&&(o.labelColumn=e.labelColumn),{columns:i,patch:o}}function Os(e,t){if(t.length===0)return e;const r=new Map(xi(t).map(i=>[i.field,i.type]));return e.map(i=>{if(i.type!=="string")return i;const n=r.get(i.field);return n&&n!=="string"?{...i,type:n}:i})}async function Ar(e,t,r={}){const i=r.maxRows??1e4,o={_size:r.pageSize??1e3,...r.extraParams||{}};let l=r.startUrl??er(t,o);const u=[];let h=!1,b=!1,C=0,w,A;for(;l;){let H;try{H=await _n(e,l)}catch(N){if(u.length===0&&!r.startUrl)throw N;w=N instanceof Bt&&N.status?`stopped after ${u.length} rows: HTTP ${N.status}`:`stopped after ${u.length} rows: ${N?.message??String(N)}`,b=!0,A=l;break}const U=Lu(H);u.push(...U.rows),h=h||U.truncated,C+=1,r.onProgress?.(u.length);const F=U.nextUrl!=null?U.nextUrl:U.nextToken!=null?er(t,{_next:U.nextToken}):null;F&&u.length<i&&U.rows.length>0?l=F:(b=F!=null&&U.rows.length>0,b&&(A=F??void 0),l=null)}return{rows:u,truncated:h,hasMore:b,pages:C,error:w,nextUrl:A}}function Yu(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function Va(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function Ga(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function ki(e,t,r,i){let n;try{n=await e(t,{method:"POST",headers:Yu(i),body:JSON.stringify(r)})}catch(l){throw new Bt({error:`Couldn't reach ${t} (${l?.message||"network error"}).`},0)}if(n&&n.ok===!1){let l=null;try{l=await n.json()}catch{}throw new Bt(l&&typeof l=="object"?l:{error:`HTTP ${n.status} for ${t}`},n.status)}const o=await n.json();if(o&&o.ok===!1)throw new Bt(o,n.status);return o}async function Wo(e,t,r,i={}){const n=await ki(e,Va(t,"insert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function Xu(e,t,r,i,n={}){const o=await ki(e,Ga(t,r,"update"),{update:i,return:!0},n.token);return o&&typeof o.row=="object"&&o.row?o.row:Array.isArray(o?.rows)&&o.rows[0]?o.rows[0]:null}async function Ko(e,t,r,i={}){await ki(e,Ga(t,r,"delete"),{},i.token)}async function Qu(e,t,r,i={}){const n=await ki(e,Va(t,"upsert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function Ju(e,t){const r=er(t,{_extra:"primary_keys"}),i=await _n(e,r);return Array.isArray(i?.primary_keys)?i.primary_keys:[]}async function Ya(e,t){try{const r=await _n(e,er(t,{_extra:"count"}));return typeof r?.count=="number"?r.count:null}catch{return null}}async function Xa(e,t,r={}){const i=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,i);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const o=await n.json(),l=o?.datasette?.version??o?.version??null;let u=null;try{u=(await(await e(`${t}/-/actor.json`,i)).json())?.actor??null}catch{}return{reachable:!0,version:l,actor:u,writable:!!(r.token&&u)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function tr(e,t){return t?(r,i)=>{const n=(i??{}).headers??{};return e(r,{...i??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qa=Symbol.for(""),Zu=e=>{if(e?.r===Qa)return e?._$litStatic$},ed=e=>({_$litStatic$:e,r:Qa}),Vo=new Map,td=e=>(t,...r)=>{const i=r.length;let n,o;const l=[],u=[];let h,b=0,C=!1;for(;b<i;){for(h=t[b];b<i&&(o=r[b],(n=Zu(o))!==void 0);)h+=n+t[++b],C=!0;b!==i&&u.push(o),l.push(h),b++}if(b===i&&l.push(t[i]),C){const w=l.join("$$lit$$");(t=Vo.get(w))===void 0&&(l.raw=l,Vo.set(w,t=l)),r=u}return e(t,...r)},nd=td(L);var rd=Object.defineProperty,id=Object.getOwnPropertyDescriptor,Ci=(e,t,r,i)=>{for(var n=i>1?void 0:i?id(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&rd(t,r,n),n};let Gt=class extends Ue{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r){return this.values=t,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(i=>{this.resolveFn=i,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),Gt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Gt.instance===this&&(Gt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(r=>r.value.toLowerCase().includes(e));return L`
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
      ${t.length===0?L`<div class="empty">No matching values.</div>`:L`<ul>
            ${t.slice(0,500).map(r=>L`
                <li
                  class=${r.value===this.current?"selected":""}
                  @click=${()=>this.close(r.value)}
                >
                  <span class="label">${r.value||L`<em>(empty)</em>`}</span>
                  <span class="count">${r.count}</span>
                </li>
              `)}
          </ul>`}
      ${this.values.length>500?L`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button class="text" @click=${()=>this.close({clear:!0})}>Clear filter</button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};Gt.instance=null;Gt.styles=[ln,et`
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
    `];Ci([Nt({type:Array})],Gt.prototype,"values",2);Ci([Nt({type:String})],Gt.prototype,"current",2);Ci([K()],Gt.prototype,"search",2);Gt=Ci([rt("filter-popover")],Gt);var sd=Object.defineProperty,od=Object.getOwnPropertyDescriptor,Jt=(e,t,r,i)=>{for(var n=i>1?void 0:i?od(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&sd(t,r,n),n};let jt=class extends Ue{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const i of this.options)if(i.toLowerCase().includes(t)&&(r.push(i),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return L`
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
        ${this.value?L`<button
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
      ${this.open?L`<ul class="dropdown" style=${t}>
            ${e.length===0?L`<li class="empty">No matching values.</li>`:e.map((r,i)=>L`
                    <li
                      class=${i===this.highlightIdx?"highlighted":""}
                      @mousedown=${n=>n.preventDefault()}
                      @click=${()=>this.onPick(r)}
                    >
                      ${r}
                    </li>
                  `)}
          </ul>`:me}
    `}};jt.styles=et`
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
  `;Jt([Nt({type:String})],jt.prototype,"value",2);Jt([Nt({type:Array})],jt.prototype,"options",2);Jt([Nt({type:String})],jt.prototype,"placeholder",2);Jt([K()],jt.prototype,"open",2);Jt([K()],jt.prototype,"highlightIdx",2);Jt([K()],jt.prototype,"dropTop",2);Jt([K()],jt.prototype,"dropLeft",2);Jt([K()],jt.prototype,"dropMinWidth",2);Jt([K()],jt.prototype,"editing",2);Jt([rr("input")],jt.prototype,"inputEl",2);jt=Jt([rt("filter-combobox")],jt);function ad(e){const t=e.trim(),r=t.split(/\s+/).filter(Boolean);if(!r.some(u=>u==="AND"||u==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:r.map(u=>u.toLowerCase())};const n=[];let o=[];for(const u of r)u==="OR"?(n.push(o),o=[]):u==="AND"||o.push(u.toLowerCase());n.push(o);const l=n.filter(u=>u.length>0);return l.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:l}}function mi(e,t,r){const i=ad(t);if(i.kind==="boolean")return e.filter(h=>i.groups.some(b=>b.every(C=>r(h,C))));const{phrase:n,words:o}=i;if(o.length<=1)return n===""?e:e.filter(h=>r(h,n));const l=e.filter(h=>r(h,n));if(l.length>0)return l;const u=e.filter(h=>o.every(b=>r(h,b)));return u.length>0?u:e.filter(h=>o.some(b=>r(h,b)))}const gi="easydb:visible-count";function Ja(e,t,r){e&&document.dispatchEvent(new CustomEvent(gi,{detail:{key:e,count:t,total:r}}))}function Za(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}var ld=Object.defineProperty,cd=Object.getOwnPropertyDescriptor,ut=(e,t,r,i)=>{for(var n=i>1?void 0:i?cd(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&ld(t,r,n),n};function Go(e,t){return Object.values(e.data).some(r=>r!=null&&String(r).toLowerCase().includes(t))}const ud=200;let nt=class extends Ue{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.()}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells(),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,r=this.rows.length;t===this.lastEmittedCount&&r===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=r,Ja(e,t,r))}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",dd(t))}async bind(){if(!this.tableId)return;const e=await we(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const o=n.find(l=>l.id===this.tableId);o&&(this.tableColumns=o.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(n=>{const o=n.find(l=>l.id===this.viewInstanceId);o&&(this.viewInst=o,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const o=n.find(l=>l.id===this.tableId);o&&this.applyTable(o)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const i=window.setTimeout(()=>this.loading=!0,ud);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(i),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(i=>[i.field,i])),r=e.columnWidths??{};this.columns=e.visibleColumns.map(i=>t.get(i)).filter(i=>!!i).map(i=>{const n=r[i.field];return typeof n=="number"?{...i,width:n}:i}),this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,r){const i=await we();await this.commitCell(i,e,t,r)}async commitCell(e,t,r,i){const n=this.columns.find(o=>o.field===r);if(n){const o=hd(n,i,this.rows,t.id);if(o){await e.api.ui.dialogs.alert(o,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:i},updatedAt:Date.now()})}catch(o){await e.api.ui.dialogs.alert(o?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const r=e.target;typeof t=="boolean"?r.checked=t:r.value=t,r.blur()}renderCell(e,t){const r=e.data[t.field],i=t.renderer,n=i?this.cellRenderers?.get(i):void 0;if(n){const o=ed(n);return nd`<${o}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        @change=${l=>this.setCell(e,t.field,l.detail.value)}
      ></${o}>`}switch(t.type){case"boolean":{const o=r===!0||r==="true"||r===1||r==="1";return L`<input
          type="checkbox"
          .checked=${o}
          @keydown=${l=>this.cancelCellEdit(l,o)}
          @change=${l=>this.setCell(e,t.field,l.target.checked)}
        />`}case"date":return L`<input
          type="date"
          .value=${Yo(r)}
          @keydown=${o=>this.cancelCellEdit(o,Yo(r))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"datetime":return L`<input
          type="datetime-local"
          .value=${Xo(r)}
          @keydown=${o=>this.cancelCellEdit(o,Xo(r))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"number":return L`<input
          type="number"
          .value=${r==null?"":String(r)}
          @keydown=${o=>this.cancelCellEdit(o,r==null?"":String(r))}
          @change=${o=>{const l=o.target.value;this.setCell(e,t.field,l===""?null:Number(l))}}
        />`;default:return L`<input
          type="text"
          .value=${String(r??"")}
          @keydown=${o=>this.cancelCellEdit(o,String(r??""))}
          @change=${o=>this.setCell(e,t.field,o.target.value)}
        />`}}async deleteRow(e){const t=await we();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await we(),i=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,i):await r.store.tables.patch(this.tableId,i)}filteredRows(){const e=Object.entries(this.filters).filter(([,n])=>n&&n.trim().length>0),t=this.globalQuery.trim(),r=this.localQuery.trim();if(e.length===0&&t.length===0&&r.length===0)return this.rows;let i=this.rows;return e.length>0&&(i=i.filter(n=>e.every(([o,l])=>String(n.data[o]??"").toLowerCase().includes(l.toLowerCase())))),r&&(i=mi(i,r,Go)),t&&(i=mi(i,t,Go)),i}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,i=this.columns.find(l=>l.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,o=[...e];return o.sort((l,u)=>{const h=l.data[t],b=u.data[t],C=H=>H==null?0:H===""?1:2,w=C(h),A=C(b);return w!==2||A!==2?(w-A)*n:fd(h,b,i)*n}),o}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,i=Gt.instance;if(!i)return;const n=new Map;for(const u of this.rowsFacetedFor(t)){const h=u.data[t];if(h==null)continue;const b=String(h);n.set(b,(n.get(b)??0)+1)}const o=[...n.entries()].map(([u,h])=>({value:u,count:h})).sort((u,h)=>h.count-u.count||u.value.localeCompare(h.value)),l=await i.open(r.getBoundingClientRect(),o,this.filters[t]??"");l!==null&&(typeof l=="object"&&"clear"in l?this.onFilterInput(t,""):typeof l=="string"&&this.onFilterInput(t,l))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,i])=>i&&i.trim().length>0&&r!==e).map(([r,i])=>[r,i.trim().toLowerCase()]);return t.length===0?this.rows:this.rows.filter(r=>t.every(([i,n])=>String(r.data[i]??"").toLowerCase().includes(n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,i=500;for(const n of this.visibleColumns){let o=!0;for(const u of t){const h=u.data[n.field];if(h==null)continue;if((typeof h=="string"?h:String(h)).length>=r){o=!1;break}}if(!o)continue;const l=new Set;for(const u of this.rowsFacetedFor(n.field)){const h=u.data[n.field];if(h==null||h==="")continue;const b=typeof h=="string"?h:String(h);if(!(b.length>=r)&&(l.add(b),l.size>=i))break}e.set(n.field,[...l].sort())}return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),r=this.visibleColumns,i=new Map;r.forEach((n,o)=>{if(n.width!=null)return;const l=t[o];l&&i.set(n.field,Math.round(l.getBoundingClientRect().width))}),i.size!==0&&(this.columns=this.columns.map(n=>i.has(n.field)?{...n,width:i.get(n.field)}:n))}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const i=r.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:i};const n=l=>{if(!this.resizing)return;const u=l.clientX-this.resizing.startX,h=Math.max(40,this.resizing.startW+u);this.columns=this.columns.map(b=>b.field===this.resizing.field?{...b,width:h}:b)},o=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",o);const l=this.resizing?.field;if(this.resizing=null,!l)return;const u=await we();if(this.viewMode){const h={...this.viewInst?.columnWidths??{}};for(const b of this.columns)typeof b.width=="number"&&(h[b.field]=b.width);await u.store.viewInstances.patch(this.viewInstanceId,{columnWidths:h,updatedAt:Date.now()})}else await u.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",o)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientX<i.left+i.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,i=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!i)return;const n=[...this.columns],o=n.findIndex(b=>b.field===r);if(o<0)return;const[l]=n.splice(o,1);let u=n.findIndex(b=>b.field===t);if(u<0){n.splice(o,0,l);return}i==="after"&&(u+=1),n.splice(u,0,l);const h=await we();this.viewMode?await h.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:n.map(b=>b.field),updatedAt:Date.now()}):await h.store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await we(),t={};for(const[i,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[i]=n);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,i=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,i+r);return{slice:e.slice(i,n),topPad:i*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:r,topPad:i,bottomPad:n}=this.virtualSlice(e),o=this.computeFilterSuggestions(),l=this.externalLoading?this.externalProgress:null;return L`
      ${this.loading||this.externalLoading?L`<div
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
          ${t.map(u=>L`<col style=${u.width!=null?`width: ${u.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(u=>{const h=u.sortable!==!1,b=this.sortColumn===u.field&&this.sortDir,C=h?b==="asc"?"▲":b==="desc"?"▼":"⇅":"",w=`t-${u.type}`,A=this.dragSourceField===u.field,H=this.dropTargetField===u.field,U=H&&this.dropEdge==="before"?" drop-before":H&&this.dropEdge==="after"?" drop-after":"",F=(u.description?`${u.description}
`:"")+(u.units?`Units: ${u.units}
`:"")+`${u.field} — ${h?"click to sort, ":"not sortable · "}drag to reorder`;return L`
                <th
                  class=${`${w}${b?" sorted":""}${A?" drag-source":""}${U}${h?"":" no-sort"}`}
                  title=${F}
                  @click=${()=>h&&this.toggleSort(u.field)}
                  @dragover=${N=>this.onColDragOver(N,u.field,N.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(u.field)}
                  @drop=${N=>this.onColDrop(N,u.field)}
                >
                  <div class="col-head">
                    <span
                      class="col-grip mi sm"
                      title="Drag to reorder column"
                      draggable="true"
                      @click=${N=>N.stopPropagation()}
                      @dragstart=${N=>this.onColDragStart(N,u.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label"
                      >${u.label}${u.units?L`<span class="col-units"> (${u.units})</span>`:""}</span
                    ><span class="sort-icon">${C}</span>
                    <button
                      class=${`funnel${this.filters[u.field]?" active":""}`}
                      title="Filter by value"
                      @click=${N=>this.openFilterPicker(N,u.field)}
                    >
                      <span class="mi sm">filter_list</span>
                    </button>
                  </div>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${N=>N.stopPropagation()}
                    @pointerdown=${N=>this.onResizeStart(N,u.field,N.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:2rem"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(u=>{const h=o.get(u.field)??[];return L`
                <th>
                  <filter-combobox
                    .value=${this.filters[u.field]??""}
                    .options=${h}
                    placeholder="filter…"
                    @filter-change=${b=>this.onFilterInput(u.field,b.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${i>0?L`<tr class="spacer" style=${`height:${i}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${r.map(u=>L`
              <tr>
                ${t.map(h=>L`<td class=${`t-${h.type}${h.renderer?` r-${h.renderer}`:""}`}>
                      ${this.renderCell(u,h)}
                    </td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(u.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?L`<tr class="spacer" style=${`height:${n}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};nt.styles=[ln,et`
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
    `];ut([Nt({type:String})],nt.prototype,"tableId",2);ut([Nt({type:String})],nt.prototype,"viewInstanceId",2);ut([K()],nt.prototype,"columns",2);ut([K()],nt.prototype,"rows",2);ut([K()],nt.prototype,"sortColumn",2);ut([K()],nt.prototype,"sortDir",2);ut([K()],nt.prototype,"filters",2);ut([K()],nt.prototype,"globalQuery",2);ut([K()],nt.prototype,"localQuery",2);ut([K()],nt.prototype,"dragSourceField",2);ut([K()],nt.prototype,"dropTargetField",2);ut([K()],nt.prototype,"dropEdge",2);ut([K()],nt.prototype,"resizing",2);ut([K()],nt.prototype,"cellRenderers",2);ut([K()],nt.prototype,"scrollY",2);ut([K()],nt.prototype,"viewportHeight",2);ut([K()],nt.prototype,"loading",2);ut([K()],nt.prototype,"externalLoading",2);ut([K()],nt.prototype,"externalProgress",2);nt=ut([rt("data-table")],nt);function dd(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function hd(e,t,r,i){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(o=>o.id!==i&&o.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function Yo(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function Xo(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function fd(e,t,r){switch(r){case"number":{const i=Number(e),n=Number(t);return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const i=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function sn(e,t,r){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:r}}))}function el(e,t,r=[]){const i=new Set(e.map(u=>u.field)),n=new Set(r),o=[...e],l=[];for(const u of t)i.has(u.field)||n.has(u.field)||(o.push(u),l.push(u.field),i.add(u.field));return{columns:o,newFields:l}}class pd extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function tl(e){return`datasette:token:${e}`}function md(e,t){for(const[r,i]of Object.entries(t))if(r!=="data"&&e[r]!==i)return!1;return!0}function gd(e,t){const r=e.source,i=r?.config??{},n={base:i.base,db:i.db,table:i.table,query:{}},o=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],l=r?.writable===!0,u=i.maxRows??1e4,h=i.pollIntervalMs??0,b=(re,ie)=>t.backend.fetch(re,ie);async function C(){const ie=(await t.settings.findOne(tl(i.base)))?.value;return typeof ie=="string"&&ie.length>0?ie:void 0}const w=async(re,ie)=>tr(b,await C())(re,ie);function A(re){return{id:qu(re,o)??bd(),tableId:e.id,data:re,updatedAt:Date.now()}}function H(re){if(!l)throw new pd(re)}function U(re){const ie={};for(const[pe,xe]of Object.entries(re))o.includes(pe)||(ie[pe]=xe);return ie}const F=new Set;let N=[],oe=!1,le=null;function ke(){return le||(le=(async()=>{try{const{rows:re}=await Ar(w,n,{maxRows:u});N=re.map(A),oe=!0;for(const ie of F)ie(N);return N}finally{le=null}})(),le)}return{async find(re){const ie=oe?N:await ke();return!re||Object.keys(re).length===0?ie:ie.filter(pe=>md(pe,re))},async findOne(re){return(oe?N:await ke()).find(pe=>pe.id===re)??null},async insert(re){H("insert");const[ie]=await Wo(w,n,[re.data]),pe=A(ie??re.data);return t.events.emit("row:created",{tableId:e.id,row:pe}),ke(),pe},async bulkInsert(re){if(re.length===0)return[];H("insert");const ie=await Wo(w,n,re.map(xe=>xe.data)),pe=(ie.length?ie:re.map(xe=>xe.data)).map(A);return ke(),pe},async upsert(re){H("upsert");const[ie]=await Qu(w,n,[re.data]),pe=A(ie??re.data);return ke(),pe},async patch(re,ie){H("update");const pe=ie.data,xe=U(pe??{}),Ie=await Xu(w,n,re,xe),qe=A(Ie??{...pe??{}});return t.events.emit("row:updated",{tableId:e.id,row:qe,prev:qe}),ke(),qe},async remove(re){H("delete"),await Ko(w,n,re),t.events.emit("row:deleted",{tableId:e.id,rowId:re}),ke()},async bulkRemove(re){if(re.length!==0){H("delete");for(const ie of re)await Ko(w,n,ie);ke()}},subscribe(re){F.add(re),oe?re(N):ke();let ie=null;return h>0&&(ie=setInterval(()=>void ke(),h)),()=>{F.delete(re),ie&&clearInterval(ie)}},async refresh(){await ke()}}}function bd(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var yd=Object.defineProperty,wd=Object.getOwnPropertyDescriptor,Pr=(e,t,r,i)=>{for(var n=i>1?void 0:i?wd(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&yd(t,r,n),n};const vd="https://latest.datasette.io/ephemeral";let Mt=class extends Ue{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,r)}catch(i){this.status=i?.message??String(i),this.statusKind="err";return}}this.finish({url:t,token:r})}}connectedCallback(){super.connectedCallback(),Mt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Mt.instance===this&&(Mt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return L`
      <dialog @cancel=${this.onCancel} @keydown=${Tn}>
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
                placeholder="e.g. ${vd}"
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
    `}};Mt.instance=null;Mt.styles=[Xt,et`
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
    `];Pr([K()],Mt.prototype,"url",2);Pr([K()],Mt.prototype,"token",2);Pr([K()],Mt.prototype,"status",2);Pr([K()],Mt.prototype,"statusKind",2);Mt=Pr([rt("datasette-connect-dialog")],Mt);const bi=e=>e.replace(/^https?:\/\//,""),xd=e=>new Promise(t=>setTimeout(t,e));function $d(){const e=globalThis.__eda_resumeDelayMs;return typeof e=="number"&&e>=0?e:6e4}function kd(e,t,r){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(r)}`}function js(e,t,r,i){const n={...e.info??{}};return!n.source&&!n.sourceUrl&&(n.source=`${bi(t)}/${r}/${i}`,n.sourceUrl=kd(t,r,i)),{...e,info:n}}function Fs(e,t,r,i){if(!(!e||!t))return{nextUrl:t,loadedRows:r,...i!=null?{totalCount:i}:{}}}async function nl(e,t,r,i={}){if(t.db&&t.table)return[await ms(e,t)];let n=[];if(t.db){if(n.push(...await qo(e,t.base,t.db)),i.skipPicker)return n.filter(u=>!u.hidden)}else{const u=await Ka(e,t.base);if(u.length===0)return[];let h=u;if(u.length>1){const b=await ps(u.map(C=>({name:C,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${bi(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!b)return null;h=b.map(C=>u[C])}for(const b of h)try{n.push(...await qo(e,t.base,b))}catch{}}if(n.length===0)return[];const o=new Set(n.map(u=>u.db)).size>1,l=await ps(n.map(u=>({name:o?`${u.db}/${u.table}`:u.table,size:u.count,detail:o?void 0:u.db,hidden:u.hidden})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${bi(t.base)}.`,confirmLabel:r});return l?l.map(u=>n[u]):null}const Cd='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Ed={name:"datasette-source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"easyDBAccess built-ins",optional:!0},Lt={maxImportRows:1e4,pageSize:1e3},Sd="https://latest.datasette.io/fixtures/facetable";function _d(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:Cd,tooltip:"Connect a live, editable Datasette table",onClick:()=>Rd(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>zd(t,r)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:r})=>Bd(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:gd}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const i=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Sd}`,"","Import from Datasette");i&&await Qo(t,i)}}),e.ui.registerDropHandler(async(t,r)=>{const i=t.dataTransfer?.getData("text/plain")||"";return Ad(i)?(t.preventDefault(),await Qo(r,i),!0):!1})}async function Qo(e,t){try{await zs(e,t)}catch(r){let i;r instanceof Bt?i=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:i=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(i,"Datasette import failed")}}function Ad(e){try{const t=mn(e);return!!(t.db&&t.table)}catch{return!1}}function Pd(e,t){if(!e.has(t))return t;for(let r=2;;r++){const i=`${t} (${r})`;if(!e.has(i))return i}}async function zs(e,t,r={}){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=mn(t),l=await nl(U=>e.backend.fetch(U),n,"Import",{skipPicker:r.skipTablePicker});if(l===null)return;if(l.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const u=[];let h=0;for(const U of l){const F={base:n.base,db:U.db,table:U.table,query:{}},N=await Td(e,i,F);if(N.skipped){h+=1;continue}u.push({tableId:N.tableId,ref:F,overwrite:N.overwrite,knownCount:U.count})}let b=0,C=0;const w=[],A=[],H=[];for(const U of u)try{const F=await Dd(e,U.tableId,U.ref,U.overwrite,U.knownCount);b+=1,C+=F.rowCount,F.error?A.push(`${U.ref.db}/${U.ref.table} (${F.error})`):(F.hasMore||F.truncated)&&w.push(`${U.ref.db}/${U.ref.table}`)}catch(F){H.push(`${U.ref.db}/${U.ref.table}: ${F?.message??String(F)}`)}Id(e,{imported:b,skipped:h,totalRows:C,capped:w,partial:A,failed:H,requested:l.length})}async function Td(e,t,r){const i=`${r.db}/${r.table}`,n={type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},o=(await e.store.tables.find()).filter(b=>b.workspaceId===t),l=o.find(b=>b.name===i);let u=i;if(l){const b=await e.ui.dialogs.choice(`A table named "${i}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!b||b==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(b==="Overwrite")return await e.store.tables.patch(l.id,{origin:n,updatedAt:Date.now()}),{tableId:l.id,overwrite:!0};u=Pd(new Set(o.map(C=>C.name)),i)}const h=Tr();return await e.store.tables.insert({id:h,workspaceId:t,name:u,code:il(`${r.db}-${r.table}`),columns:[],view:"table",origin:n,updatedAt:Date.now()}),{tableId:h,overwrite:!1}}async function Dd(e,t,r,i,n=null){const o=`${r.db}/${r.table}`,l=u=>e.backend.fetch(u);sn(t,!0);try{let u=[],h=n,b=!1;try{const g=await $i(l,r);u=g.columns,h=h??g.count,b=g.typed}catch{}h==null&&(h=await Ya(l,r));const C=h&&h>0?Math.min(h,Lt.maxImportRows):0,w=[];let A=!1,H=!1,U=0,F,N,oe;for(;;){const g=await Ar(l,r,{maxRows:Math.max(0,Lt.maxImportRows-w.length),pageSize:Lt.pageSize,...oe?{startUrl:oe}:{},onProgress:ce=>{C>0&&sn(t,!0,Math.min(1,(w.length+ce)/C))}});if(w.push(...g.rows),A=A||g.truncated,U+=g.pages,H=g.hasMore,F=g.error,N=g.nextUrl,!g.error||!g.nextUrl||w.length>=Lt.maxImportRows||await e.ui.dialogs.choice(`Import of "${o}" paused after ${w.length.toLocaleString()} rows (${g.error}). Datasette may be rate-limiting a large import. Wait 60 seconds and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,["Resume in 60s","Cancel"],"Import paused — rate limited?")!=="Resume in 60s")break;sn(t,!0),e.ui.dialogs.toast(`Resuming "${o}" in 60s…`,{kind:"info",title:"Import paused"}),await xd($d()),oe=g.nextUrl,F=void 0,N=void 0}let ke=u.length===0?xi(w):b?u:Os(u,w),re={};try{const g=await Is(l,r),k=Rs(g,ke);ke=k.columns,re=k.patch}catch{}re=js(re,r.base,r.db,r.table);const ie=await e.store.tables.findOne(t),pe=ie?.columns??[],xe=pe.length===0,{columns:Ie}=el(pe,ke,ie?.deletedColumns),qe=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const $e=Fs(F,N,w.length,h),m=xe?{columns:Ie,...re,importResume:$e,updatedAt:qe}:{columns:Ie,...re.info?{info:re.info}:{},importResume:$e,updatedAt:qe};await e.store.tables.patch(t,m);const v=e.store.rows(t);if(i){const g=await v.find();await v.bulkRemove(g.map(k=>k.id))}const E=w.map(g=>({id:Tr(),tableId:t,data:g,updatedAt:qe}));return await v.bulkInsert(E),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:w.length}),{name:o,rowCount:w.length,hasMore:H,truncated:A,pages:U,count:h,error:F}}finally{sn(t,!1)}}function Id(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,i=`${t.imported} table${t.imported===1?"":"s"}`,n=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${i} (${r});${n} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.capped.length} capped at ${Lt.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${i} (${r}) from Datasette.${n}`,{kind:"success",title:"Datasette import"})}async function Rd(e){const t=Mt.instance??Od(),r=(n,o)=>e.backend.fetch(n,o),i=await t.open({initialUrl:"https://datasette.io",async onTest(n,o){const l=mn(n),u=await Xa(r,l.base,{token:o||void 0});if(l.db&&l.table){await ms(tr(r,o||void 0),l);const b=u.version?` (Datasette ${u.version})`:"";return u.writable?`Reachable${b} — table found, signed in, read-write.`:`Reachable${b} — table found, read-only (no token / not authenticated).`}if(!u.reachable)return`Unreachable: ${u.error??"no response"}`;const h=u.version?` (Datasette ${u.version})`:"";return u.writable?`Reachable${h} — signed in, read-write.`:`Reachable${h} — read-only (no token / not authenticated).`},async onConnect(n,o){const l=mn(n);l.db&&l.table&&await ms(tr(r,o||void 0),l)}});if(i)try{await rl(e,i.url,i.token)}catch(n){const o=n instanceof Bt?n.message:n?.message??String(n);await e.ui.dialogs.alert(o,"Connect Datasette failed")}}function Od(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function rl(e,t,r){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=mn(t),o=(w,A)=>e.backend.fetch(w,A),l=tr(o,r||void 0),u=await Xa(o,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:tl(n.base),value:r});let h;try{h=await nl(l,n,"Connect")}catch(w){const A=w instanceof Bt?w.message:w?.message??String(w);throw new Error(`Couldn't read tables from ${bi(n.base)}: ${A}`)}if(h===null)return;if(h.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const b=[];for(const w of h){const A=await jd(e,i,n.base,w,u.writable,r);b.push({tableId:A,c:w})}const C=u.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${b.length} live table${b.length===1?"":"s"} from Datasette (${C}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:w,c:A}of b)Fd(e,w,n.base,A,r)}async function jd(e,t,r,i,n,o){const l=(await e.store.tables.find()).find(C=>{const w=C.source?.config;return C.workspaceId===t&&C.source?.type==="datasette"&&w?.base===r&&w?.db===i.db&&w?.table===i.table});let u=i.pks??[];if(u.length===0){const C=tr((w,A)=>e.backend.fetch(w,A),o||void 0);try{u=await Ju(C,{base:r,db:i.db,table:i.table,query:{}})}catch{u=[]}}const h=l?.id??Tr(),b={...l??{},id:h,workspaceId:t,name:`${i.db}/${i.table}`,code:il(`${i.db}-${i.table}`),columns:l?.columns??[],view:l?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:i.db,table:i.table,pks:u}},updatedAt:Date.now()};return l?await e.store.tables.upsert(b):await e.store.tables.insert(b),h}async function Fd(e,t,r,i,n){const o={base:r,db:i.db,table:i.table,query:{}},l=tr((u,h)=>e.backend.fetch(u,h),n||void 0);try{let u=[],h=!1;try{const F=await $i(l,o);u=F.columns,h=F.typed}catch{}const{rows:b}=await Ar(l,o,{maxRows:50,pageSize:50}),C=u.length===0?xi(b):h?u:Os(u,b);if(C.length===0)return;const w=await e.store.tables.findOne(t);if(!w)return;const A=w.source?.config?.pks??[];let H=C.map(F=>A.includes(F.field)?{...F,unique:!0,notnull:!0}:F),U={};try{const F=await Is(l,o),N=Rs(F,H);H=N.columns,U=N.patch}catch{}U=js(U,o.base,i.db,i.table),await e.store.tables.patch(t,{columns:H,...U,updatedAt:Date.now()})}catch{}}async function zd(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const i=e.store.rows(t);typeof i.refresh=="function"&&await i.refresh();const n=await i.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await Ld(e,r)}catch(i){const n=i instanceof Bt?i.message:i?.message??String(i);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function Ld(e,t){const r=mn(t.origin.url),i=h=>e.backend.fetch(h);sn(t.id,!0);let n,o=[];try{let h=[],b=null,C=!1;try{const $e=await $i(i,r);h=$e.columns,b=$e.count,C=$e.typed}catch{}b==null&&(b=await Ya(i,r));const w=b&&b>0?Math.min(b,Lt.maxImportRows):0,{rows:A,hasMore:H,truncated:U,error:F,nextUrl:N}=await Ar(i,r,{maxRows:Lt.maxImportRows,pageSize:Lt.pageSize,onProgress:$e=>{w>0&&sn(t.id,!0,Math.min(1,$e/w))}});let oe=h.length===0?xi(A):C?h:Os(h,A),le={};try{const $e=await Is(i,r),m=Rs($e,oe);oe=m.columns,le=m.patch}catch{}le=js(le,r.base,r.db,r.table);const ke=t.columns.length===0,re=el(t.columns,oe,t.deletedColumns);o=re.newFields;const ie=Date.now(),pe=Fs(F,N,A.length,b),xe=ke?{columns:re.columns,...le,importResume:pe,updatedAt:ie}:{columns:re.columns,...le.info?{info:le.info}:{},importResume:pe,updatedAt:ie};await e.store.tables.patch(t.id,xe);const Ie=e.store.rows(t.id),qe=await Ie.find();await Ie.bulkRemove(qe.map($e=>$e.id)),await Ie.bulkInsert(A.map($e=>({id:Tr(),tableId:t.id,data:$e,updatedAt:ie}))),n={rowCount:A.length,hasMore:H,truncated:U,error:F}}finally{sn(t.id,!1)}const l=[];n.error?l.push(`partial (${n.error})`):(n.hasMore||n.truncated)&&l.push(`capped at ${Lt.maxImportRows}`),o.length>0&&l.push(`${o.length} new column${o.length===1?"":"s"}`);const u=l.length?` — ${l.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${n.rowCount} rows from ${r.db}/${r.table}${u}.`,{kind:n.error||n.hasMore||n.truncated||o.length>0?"warning":"success",title:"Refresh"}),o.length>0&&Md(t.id,r,o)}async function Bd(e,t){const r=await e.store.tables.findOne(t),i=r?.importResume;if(!r||!r.origin?.url||!i)return;const n=mn(r.origin.url),o=A=>e.backend.fetch(A),l=i.loadedRows,u=i.totalCount??null,h=u&&u>0?Math.min(u,Lt.maxImportRows):0;sn(t,!0,h>0?Math.min(1,l/h):void 0);let b=0,C;try{const A=await Ar(o,n,{startUrl:i.nextUrl,maxRows:Math.max(0,Lt.maxImportRows-l),pageSize:Lt.pageSize,onProgress:F=>{h>0&&sn(t,!0,Math.min(1,(l+F)/h))}});b=A.rows.length;const H=Date.now();await e.store.rows(t).bulkInsert(A.rows.map(F=>({id:Tr(),tableId:t,data:F,updatedAt:H}))),C={error:A.error,nextUrl:A.nextUrl};const U=Fs(A.error,A.nextUrl,l+b,u);await e.store.tables.patch(t,{importResume:U,updatedAt:H})}catch(A){const H=A instanceof Bt?A.message:A?.message??String(A);e.ui.dialogs.toast(`Couldn't resume ${n.db}/${n.table}: ${H}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{sn(t,!1)}const w=l+b;C.error?e.ui.dialogs.toast(`Resumed ${n.db}/${n.table}: +${b} rows (${w} total) — interrupted again (${C.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${n.db}/${n.table}: +${b} rows (${w} total).`,{kind:"success",title:"Resume import"})}function Md(e,t,r){const i=r.join(", "),n=r.length!==1,o=`Refreshing ${t.db}/${t.table} revealed ${r.length} new column${n?"s":""}: ${i}. Review, reorder or hide ${n?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:o}}))}function il(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Tr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Nd=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:rl,importDatasette:zs,init:_d,meta:Ed},Symbol.toStringTag,{value:"Module"})),Ud={name:"sql-export",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"easyDBAccess built-ins"};function qd(){}async function sl(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const o=await e.store.rows(n.id).find();i.push(Hd(n,o),"")}return i.push("COMMIT;",""),i.join(`
`)}function Hd(e,t){const r=gs(e.code||e.name||`table_${e.id}`),i=['  "__id" TEXT PRIMARY KEY',...e.columns.map(o=>`  ${Wd(o)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,i.join(`,
`),");"];if(t.length>0){const l=["__id",...e.columns.map(u=>u.field)].map(u=>`"${gs(u)}"`).join(", ");for(const u of t){const h=[Jo(u.id),...e.columns.map(b=>Jo(u.data[b.field],b.type))];n.push(`INSERT INTO "${r}" (${l}) VALUES (${h.join(", ")});`)}}return n.join(`
`)}function Wd(e){const t=[`"${gs(e.field)}"`,Kd(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function Kd(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function Jo(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=Vd(e);return r===null?"NULL":ri(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?ri(e.toISOString()):ri(typeof e=="string"?e:JSON.stringify(e))}function Vd(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?Zo(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const i=new Date(t);return Number.isFinite(i.getTime())?Zo(i):null}return null}function Zo(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),i=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${i}`}function ri(e){return`'${e.replace(/'/g,"''")}'`}function gs(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const Gd=Object.freeze(Object.defineProperty({__proto__:null,init:qd,meta:Ud,serializeWorkspaceAsSql:sl},Symbol.toStringTag,{value:"Module"})),Yd={name:"dump-export",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"easyDBAccess built-ins"};function Xd(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,r)=>{const i=t.workspaceId();if(!i)return;const{AnchoredMenu:n}=await Sn(async()=>{const{AnchoredMenu:u}=await import("./anchored-menu-D6xqNgVA.js");return{AnchoredMenu:u}},[]),o=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),l=await n.open(o,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(l)try{if(l==="json"){const u=await Ei(t);await t.backend.saveFile(`workspace-${i}.db.json`,u,"application/json")}else if(l==="sql"){const u=await sl(t);await t.backend.saveFile(`workspace-${i}.sql`,u,"application/sql")}}catch(u){t.ui.dialogs.toast(`Export failed: ${u.message}`,{kind:"error",title:"Export"})}}})}async function Ei(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i={workspaceId:t,exportedAt:Date.now(),tables:[]};for(const n of r){const o=await e.store.rows(n.id).find();i.tables.push({name:n.name,columns:n.columns,rows:o.map(l=>l.data),...n.windowGeometry?{windowGeometry:n.windowGeometry}:{},...n.sortColumn?{sortColumn:n.sortColumn,sortAsc:n.sortAsc??!0}:{},...n.source?{source:n.source}:{},...n.origin?{origin:n.origin}:{}})}return JSON.stringify(i,null,2)}const Qd=Object.freeze(Object.defineProperty({__proto__:null,init:Xd,meta:Yd,serializeWorkspace:Ei},Symbol.toStringTag,{value:"Module"})),Jd={name:"gist-sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"easyDBAccess built-ins"},Zd="gist:",ea='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function eh(e){e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:ea,tooltip:"Gist sync — push, pull, share…",onClick:async(t,r)=>{const{AnchoredMenu:i}=await Sn(async()=>{const{AnchoredMenu:l}=await import("./anchored-menu-D6xqNgVA.js");return{AnchoredMenu:l}},[]),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(n,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"settings",label:"Settings",icon:"settings"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(o)try{o==="push"?await sh(t):o==="pull"?await ll(t):o==="settings"?await nh(t):o==="share"?await rh(t):o==="view"&&await ih(t)}catch(l){t.ui.dialogs.toast(`Gist ${o} failed: ${l.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:ea,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,r)=>{const{AnchoredMenu:i}=await Sn(async()=>{const{AnchoredMenu:l}=await import("./anchored-menu-D6xqNgVA.js");return{AnchoredMenu:l}},[]),n=r.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(n,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(o)try{o==="push"?await oh(t,r.tableId):o==="pull"?await ah(t,r.tableId):o==="view"&&await lh(t,r.tableId)}catch(l){t.ui.dialogs.toast(`Gist ${o} failed: ${l.message}`,{kind:"error",title:"Gist sync"})}}})}async function th(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let r;try{r=atob(t)}catch{return}const i=Ls(r);if(!i){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${i.gistId||"(new)"} (owner: ${i.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await Si(e,i),await ll(e))}async function ol(e){const t=e.workspaceId();return`${Zd}${t??"default"}`}async function sr(e){const t=await ol(e),r=await e.store.settings.findOne(t);if(!r)return null;const i=r.value;return!i||!i.token||!i.user?null:{user:i.user,gistId:i.gistId??"",token:i.token}}async function Si(e,t){const r=await ol(e);await e.store.settings.upsert({key:r,value:t})}function Ls(e){const t={};for(const r of e.split(";")){const i=r.indexOf("=");if(i<0)continue;const n=r.slice(0,i).trim(),o=r.slice(i+1).trim();n&&(t[n]=o)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function Bs(e){const t=await sr(e);if(t)return t;const r=await e.ui.dialogs.prompt(`Connection string format:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,"","Gist credentials");if(!r)return null;const i=Ls(r);return i?(await Si(e,i),i):(await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist credentials"),null)}function al(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function nh(e){const t=await sr(e),r=t?al(t):"",i=await e.ui.dialogs.prompt(`Edit the Gist connection string:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,r,"Gist settings");if(i==null)return;const n=Ls(i);if(!n){await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist settings");return}await Si(e,n),e.ui.dialogs.toast("Gist settings saved.",{kind:"success",title:"Gist sync"})}async function rh(e){const t=await sr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const i=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(al(t)))}`,{GistShareDialog:n}=await Sn(async()=>{const{GistShareDialog:o}=await import("./gist-share-dialog-DXRXq10Y.js");return{GistShareDialog:o}},[]);await n.open(i)}async function ih(e){const t=await sr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}async function sh(e){const t=await Bs(e);if(!t)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=(await e.store.tables.find()).filter(w=>w.workspaceId===r);if(i.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const n=1e8,o=1e7,l={},u=[],h=[];for(const w of i){const A=await e.store.rows(w.id).find(),H=JSON.stringify(cl(w,A),null,2),U=`${w.name} (${(H.length/1e6).toFixed(2)} MB)`;H.length>n?u.push(U):H.length>o&&h.push(U),l[`${Dr(w.name)}.table.json`]={content:H}}if(u.length>0||h.length>0){const w=[];if(u.length>0&&w.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${u.join(`
`)}`),h.length>0&&w.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${h.join(`
`)}`),!await e.ui.dialogs.confirm(`${w.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}l["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1"},null,2)};let b;if(t.gistId){const w=await fetch(`https://api.github.com/gists/${t.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:l,description:`easyDBAccess workspace: ${r}`})});if(!w.ok)throw new Error(await kr(w));b=await w.json()}else{const w=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:l})});if(!w.ok)throw new Error(await kr(w));b=await w.json(),t.gistId=b.id,await Si(e,t)}const C=b.html_url??`https://gist.github.com/${t.user}/${b.id}`;e.ui.dialogs.toast(`Pushed ${i.length} table${i.length===1?"":"s"}.  ${C}`,{kind:"success",title:"Gist sync"})}async function ll(e){const t=await Bs(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!i.ok)throw new Error(await kr(i));const n=await i.json(),o=Object.entries(n.files).filter(([A])=>A.endsWith(".table.json")&&!A.startsWith("_easydb"));if(o.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const l=(await e.store.tables.find()).filter(A=>A.workspaceId===r),u=new Map(l.map(A=>[A.name,A])),{TopProgress:h}=await Sn(async()=>{const{TopProgress:A}=await Promise.resolve().then(()=>yl);return{TopProgress:A}},void 0),b=h.begin("Pulling from gist…");let C=0;const w=[];try{for(const[A,[H,U]]of o.entries())try{const F=await Ms(U),N=JSON.parse(F);if(!N.name||!Array.isArray(N.columns))throw new Error("unexpected file shape (missing name/columns)");let oe;const le=u.get(N.name);if(le){oe=await e.store.tables.patch(le.id,{columns:N.columns,updatedAt:Date.now()});const re=e.store.rows(le.id),ie=await re.find();await re.bulkRemove(ie.map(pe=>pe.id))}else oe=await e.store.tables.insert({id:bs(),workspaceId:r,name:N.name,code:Dr(N.name),columns:N.columns,view:"table",updatedAt:Date.now()});const ke=(N.rows??[]).map(re=>({id:bs(),tableId:oe.id,data:re,updatedAt:Date.now()}));await e.store.rows(oe.id).bulkInsert(ke),C++}catch(F){w.push({file:H,error:F.message})}finally{b.fraction((A+1)/o.length)}}finally{b.done()}if(w.length>0){const A=w.map(H=>`• ${H.file}: ${H.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${C} of ${o.length} tables. ${w.length} failed:
${A}`,{kind:"warning",title:"Gist sync"})}else e.ui.dialogs.toast(`Pulled ${C} table${C===1?"":"s"} from gist ${t.gistId}.`,{kind:"success",title:"Gist sync"})}async function oh(e,t){const r=await Bs(e);if(!r)return;if(!r.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=await e.store.rows(t).find(),o=JSON.stringify(cl(i,n),null,2),l={[`${Dr(i.name)}.table.json`]:{content:o}},u=await fetch(`https://api.github.com/gists/${r.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:l})});if(!u.ok)throw new Error(await kr(u));e.ui.dialogs.toast(`Pushed "${i.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function ah(e,t){const r=await sr(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=`${Dr(i.name)}.table.json`,o=await fetch(`https://api.github.com/gists/${r.gistId}`,{headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await kr(o));const u=(await o.json()).files[n];if(!u){await e.ui.dialogs.alert(`No file "${n}" in the gist for this table.`,"Gist sync");return}const h=await Ms(u),b=JSON.parse(h);if(!b.name||!Array.isArray(b.columns))throw new Error("unexpected file shape (missing name/columns)");await e.store.tables.patch(t,{columns:b.columns,updatedAt:Date.now()});const C=e.store.rows(t),w=await C.find();await C.bulkRemove(w.map(H=>H.id));const A=(b.rows??[]).map(H=>({id:bs(),tableId:t,data:H,updatedAt:Date.now()}));await C.bulkInsert(A),e.ui.dialogs.toast(`Pulled "${i.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function lh(e,t){const r=await sr(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=`file-${Dr(i.name)}-table-json`;window.open(`https://gist.github.com/${r.user}/${r.gistId}#${n}`,"_blank","noopener")}function cl(e,t){return{name:e.name,columns:e.columns,rows:t.map(r=>r.data)}}async function Ms(e,t=r=>fetch(r)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const r=await t(e.raw_url);if(!r.ok)throw new Error(`raw fetch failed: ${r.status} ${r.statusText}`);return r.text()}async function kr(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function Dr(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function bs(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const ch=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:Ms,init:eh,load:th,meta:Jd},Symbol.toStringTag,{value:"Module"})),ul="server-sync:url";function dl(e){return`server-sync:etag:${e}`}async function hl(e){const r=(await e.store.settings.findOne(ul))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function uh(e,t){await e.store.settings.upsert({key:ul,value:t.replace(/\/+$/,"")})}async function fl(e,t){const i=(await e.store.settings.findOne(dl(t)))?.value;return typeof i=="string"?i:null}async function qn(e,t,r){await e.store.settings.upsert({key:dl(t),value:r})}function _i(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function ta(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function pl(e,t,r){const i=_r(r,t),n=(await e.store.tables.find()).filter(l=>l.workspaceId===t);for(const l of n){const u=e.store.rows(l.id),h=await u.find();await u.bulkRemove(h.map(b=>b.id)),await e.store.tables.remove(l.id)}let o=0;for(const l of i){const u=na(),h=await e.store.tables.insert({id:u,workspaceId:t,name:l.name,code:dh(l.name),columns:l.columns,view:"table",...l.windowGeometry?{windowGeometry:l.windowGeometry}:{},...l.sortColumn?{sortColumn:l.sortColumn,sortAsc:l.sortAsc??!0}:{},updatedAt:Date.now()}),b=l.rows.map(C=>({id:na(),tableId:h.id,data:C,updatedAt:Date.now()}));await e.store.rows(h.id).bulkInsert(b),o++}return o}function dh(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function na(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const hh={name:"server-sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"easyDBAccess built-ins"};function fh(e){e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,r)=>{const{AnchoredMenu:i}=await Sn(async()=>{const{AnchoredMenu:l}=await import("./anchored-menu-D6xqNgVA.js");return{AnchoredMenu:l}},[]),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(n,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(o)try{o==="push"?await ph(t):o==="pull"&&await mh(t)}catch(l){t.ui.dialogs.toast(`${o==="push"?"Push":"Pull"} failed: ${l.message}`,{kind:"error",title:"Server sync"})}}})}async function ph(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await ml(e);if(!r)return;const i=await Ei(e),n=await fl(e,t),o={"Content-Type":"application/json"};n&&(o["If-Match"]=`"${n}"`);let l=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:o,body:i});if(l.status===412){const h=await l.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){h.currentEtag&&await qn(e,t,h.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}l=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:i})}if(!l.ok)throw new Error(await gl(l));const u=_i(l.headers.get("ETag"));u&&await qn(e,t,u),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function mh(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await ml(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await gl(n));const o=_i(n.headers.get("ETag")),l=await n.json(),u=await pl(e,t,l);o&&await qn(e,t,o),e.ui.dialogs.toast(`Pulled ${u} table${u===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function ml(e){const t=await hl(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await uh(e,r),r.replace(/\/+$/,"")}async function gl(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const gh=Object.freeze(Object.defineProperty({__proto__:null,init:fh,meta:hh},Symbol.toStringTag,{value:"Module"})),bh={name:"new-table",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"easyDBAccess built-ins"};function yh(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const wh=Object.freeze(Object.defineProperty({__proto__:null,init:yh,meta:bh},Symbol.toStringTag,{value:"Module"})),vh={name:"plugin-manager-button",version:"0.1.0",description:"Registers a footer button that opens the Plugin Manager dialog.",author:"easyDBAccess built-ins"};function xh(e){e.ui.registerFooterButton({id:"plugin-manager:open",label:"Plugins",icon:"extension",tooltip:"Add, disable, or remove plugins",onClick:()=>e.ui.openPluginManager()})}const $h=Object.freeze(Object.defineProperty({__proto__:null,init:xh,meta:vh},Symbol.toStringTag,{value:"Module"})),kh={name:"core-renderers",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"easyDBAccess built-ins"};function Ch(e){customElements.get("cell-date")||customElements.define("cell-date",Eh),customElements.get("cell-datetime")||customElements.define("cell-datetime",Sh),customElements.get("cell-boolean")||customElements.define("cell-boolean",_h),customElements.get("cell-script")||customElements.define("cell-script",Ph),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class Eh extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="date",t.value=Dh(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Sh extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="datetime-local",t.value=Ih(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class _h extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="checkbox",t.checked=Ah(this._value),t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Ah(e){return e===!0||e==="true"||e===1||e==="1"}class Ph extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const o=document.createElement("span");o.textContent="(no script)",o.style.cssText="color:#9ca3af;font-style:italic",this.append(o);return}let r;try{r=Th(t)}catch(o){this.append(os("compile error",o));return}let i;try{i=r(this._row)}catch(o){this.append(os("runtime error",o));return}if(typeof i!="string"){this.append(os("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=i,this.append(n)}}const ra=new Map;function Th(e){const t=ra.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return ra.set(e,r),r}function os(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const i=t instanceof Error?t.message:String(t);r.title=i}return r}function Dh(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function Ih(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const Rh=Object.freeze(Object.defineProperty({__proto__:null,init:Ch,meta:kh},Symbol.toStringTag,{value:"Module"})),Oh={name:"cell-color",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"easyDBAccess built-ins"};function jh(e){customElements.get("cell-color")||customElements.define("cell-color",Fh),e.ui.registerCellRenderer("color","cell-color")}class Fh extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,i){this.value=i}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const zh=Object.freeze(Object.defineProperty({__proto__:null,init:jh,meta:Oh},Symbol.toStringTag,{value:"Module"})),Lh={name:"cell-image",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"easyDBAccess built-ins"};function Bh(e){customElements.get("cell-image")||customElements.define("cell-image",Mh),e.ui.registerCellRenderer("image","cell-image")}class Mh extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const i=document.createElement("img");i.src=this._value,i.alt="",i.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(i)}else{const i=document.createElement("span");i.style.color="#9ca3af",i.textContent="no image",t.append(i);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const i=new FileReader;i.onload=()=>this.commit(String(i.result)),i.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Nh=Object.freeze(Object.defineProperty({__proto__:null,init:Bh,meta:Lh},Symbol.toStringTag,{value:"Module"})),Uh={name:"cell-link",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"easyDBAccess built-ins"};function qh(e){customElements.get("cell-link")||customElements.define("cell-link",Hh),e.ui.registerCellRenderer("link","cell-link")}class Hh extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:Wh(t),i=!this._editing&&!r?Kh(t):null,n=!this._editing&&!r&&!i?Vh(t):null;if(r||i||n){const o=document.createElement("span");o.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const l=document.createElement("a");l.href=r?t:i?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(l.target="_blank",l.rel="noopener noreferrer"),l.textContent=t,l.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",l.title=r?`Open ${t}`:i?`Email ${t}`:`Call ${t}`;const u=document.createElement("button");u.type="button",u.title="Edit",u.textContent="✎",u.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",u.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation(),this._editing=!0,this.render()}),o.append(l,u),this.append(o)}else{const o=document.createElement("input");o.type="text",o.value=t,o.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",o.addEventListener("change",()=>this.commit(o.value)),o.addEventListener("keydown",l=>{l.key==="Enter"?(l.preventDefault(),this.commit(o.value)):l.key==="Escape"&&(this._editing=!1,this.render())}),this.append(o),this._editing&&setTimeout(()=>{o.focus(),o.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Wh(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function Kh(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function Vh(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const i=/[ ()\-.]/.test(t),n=t.startsWith("+");return!i&&!n&&r.length<10?null:t}const Gh=Object.freeze(Object.defineProperty({__proto__:null,init:qh,meta:Uh},Symbol.toStringTag,{value:"Module"}));var Yh=Object.defineProperty,Xh=Object.getOwnPropertyDescriptor,bl=(e,t,r,i)=>{for(var n=i>1?void 0:i?Xh(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Yh(t,r,n),n};function ia(e){return(pn.instance??Qh()).open(e)}function Qh(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let pn=class extends Ue{constructor(){super(...arguments),this.rows=[],this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((r,i)=>{const n=this.rows[i],o=n.field.trim(),l=n.label.trim()||o;return{...r,field:o,label:l,hidden:n.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),pn.instance=this}disconnectedCallback(){super.disconnectedCallback(),pn.instance===this&&(pn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}open(e){return this.source=e,this.rows=e.map(t=>({field:t.field,label:t.label,hidden:!!t.hidden})),new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((r,i)=>{const n=r.field.trim().toLowerCase();if(n===""){e.add(i);return}(t.get(n)??t.set(n,[]).get(n)).push(i)});for(const r of t.values())if(r.length>1)for(const i of r)e.add(i);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,r){this.rows=this.rows.map((i,n)=>n===e?{...i,[t]:r}:i)}setHidden(e,t){this.rows=this.rows.map((r,i)=>i===e?{...r,hidden:t}:r)}render(){const e=this.invalidIndices(),t=e.size;return L`
      <dialog @cancel=${this.onCancel} @keydown=${Tn}>
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
              ${this.rows.map((r,i)=>L`
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
                  <div class="hidecell">
                    <input
                      type="checkbox"
                      .checked=${r.hidden}
                      aria-label=${`Hide column ${i+1}`}
                      @change=${n=>this.setHidden(i,n.target.checked)}
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
    `}};pn.instance=null;pn.styles=[Xt,et`
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
    `];bl([K()],pn.prototype,"rows",2);pn=bl([rt("column-names-dialog")],pn);var Jh=Object.defineProperty,Zh=Object.getOwnPropertyDescriptor,Ai=(e,t,r,i)=>{for(var n=i>1?void 0:i?Zh(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Jh(t,r,n),n};let ii=null;function ef(){return ii||(ii=document.createElement("top-progress"),document.body.appendChild(ii)),ii}let An=class extends Ue{constructor(){super(...arguments),this.visible=!1,this.frac=null,this.label="",this.active=new Set}static begin(e=""){return ef().begin(e)}begin(e){const t=Symbol("progress");return this.active.add(t),this.label=e,this.frac=null,this.visible=!0,{fraction:r=>{this.active.has(t)&&(this.frac=r)},done:()=>{this.active.delete(t),this.active.size===0&&(this.visible=!1,this.frac=null,this.label="")}}}render(){if(!this.visible)return L``;const e=this.frac!=null;return L`<div
      class="track"
      role="progressbar"
      aria-label=${this.label||"Loading"}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${e?Math.round(this.frac*100):""}
    >
      ${e?L`<div
            class="bar determinate"
            style="width:${Math.round(this.frac*100)}%"
          ></div>`:L`<div class="bar indet"></div>`}
    </div>`}};An.styles=et`
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
  `;Ai([K()],An.prototype,"visible",2);Ai([K()],An.prototype,"frac",2);Ai([K()],An.prototype,"label",2);An=Ai([rt("top-progress")],An);const yl=Object.freeze(Object.defineProperty({__proto__:null,get TopProgress(){return An}},Symbol.toStringTag,{value:"Module"}));function tf(e){let t;try{t=new URL(e)}catch{return e}const r=t.hostname.toLowerCase();if(r==="github.com"||r==="www.github.com"){const i=t.pathname.split("/").filter(Boolean);if(i.length>=5&&(i[2]==="blob"||i[2]==="raw")){const n=i[0],o=i[1];let l=i.slice(3);return l.length>=3&&l[0]==="refs"&&(l[1]==="heads"||l[1]==="tags")&&(l=l.slice(2)),`https://raw.githubusercontent.com/${[n,o,...l].join("/")}`}}return e}async function nf(e,t){const r=Number(e.headers?.get?.("content-length")),i=e.body?.getReader?.();if(i&&Number.isFinite(r)&&r>0){const n=[];let o=0;for(;;){const{done:h,value:b}=await i.read();if(h)break;b&&(n.push(b),o+=b.length,t?.(Math.min(1,o/r)))}const l=new Uint8Array(o);let u=0;for(const h of n)l.set(h,u),u+=h.length;return new TextDecoder().decode(l)}return await e.text()}var rf=Object.defineProperty,sf=Object.getOwnPropertyDescriptor,Zt=(e,t,r,i)=>{for(var n=i>1?void 0:i?sf(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&rf(t,r,n),n};const of="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",af="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",lf='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',sa=[{label:"Northwind — sample database (JSON dump)",url:of,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:af,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],cf={name:"import-data",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"easyDBAccess built-ins",optional:!0};function uf(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:lf,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>mf(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:r})=>ff(t,r)})}const oa=50*1024*1024;function aa(e){try{return new URL(e).host}catch{return e}}async function df(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}async function hf(e,t,r={}){const i=tf(t),n=r.slowMs??2e3;let o=setTimeout(()=>{o=void 0,r.onSlow?.()},n);const l=()=>{o!==void 0&&(clearTimeout(o),o=void 0)};try{let u;try{u=await e.backend.fetch(i)}catch(b){throw new Error(`Could not reach ${aa(i)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${b.message}]`)}if(!u.ok){const b=await df(u);throw new Error(`HTTP ${u.status} ${u.statusText||""}`.trim()+(b?` — ${b}`:""))}const h=Number(u.headers.get("content-length"));if(Number.isFinite(h)&&h>oa)throw new Error(`Response is ${(h/(1024*1024)).toFixed(1)} MB, over the ${oa/(1024*1024)} MB browser import limit. Import a smaller extract, or use a server/Datasette connection for large datasets.`);try{return await nf(u,r.onProgress)}catch(b){throw new Error(`Failed reading the response body from ${aa(i)}: ${b.message}`)}}finally{l()}}async function ys(e,t,r){const i={handle:null};try{return await hf(e,t,{onSlow:()=>{i.handle=An.begin(r)},onProgress:n=>i.handle?.fraction(n)})}finally{i.handle?.done()}}async function ff(e,t){const r=await e.store.tables.findOne(t),i=r?.origin;if(i?.url)try{const n=await ys(e,i.url,`Reading ${r?.name??"data"}…`);let o;if(i.type==="csv")o=Sr(n).rows;else{const h=_r(JSON.parse(n),r.name),b=h.find(C=>C.name===r.name)??(h.length===1?h[0]:void 0);if(!b)throw new Error(`"${r.name}" is no longer in the dump at ${i.url}`);o=b.rows}const l=e.store.rows(t),u=await l.find();await l.bulkRemove(u.map(h=>h.id)),await l.bulkInsert(o.map(h=>({id:pf(),tableId:t,data:h,updatedAt:Date.now()}))),e.ui.dialogs.toast(`Refreshed "${r.name}" (${o.length} rows).`,{kind:"success",title:"Refresh"})}catch(n){e.ui.dialogs.toast(`Couldn't refresh "${r?.name??t}": ${n.message}`,{kind:"error",title:"Refresh"})}}function pf(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function mf(e){const r=await(ft.instance??gf()).open({async listDatabases(C){const w=mn(C);return Ka(A=>e.backend.fetch(A),w.base)}});if(!r)return;const{url:i,file:n,kind:o,dbChosen:l,editColumns:u,maxRows:h}=r,b=n?.name??i;try{if(n){if(o==="csv"){const C=h!=null?await Ba(n,h):await n.text();await fi(e,C,n.name,{editColumns:u?ia:void 0,maxRows:h})}else{const C=await n.text();await pi(e,C,n.name,{maxRows:h})}e.ui.dialogs.toast(`Imported ${n.name}.`,{kind:"success",title:"Import"});return}if(o==="datasette")await zs(e,i,{skipTablePicker:l});else if(o==="csv"){const C=await ys(e,i,`Reading ${Qn(i)}…`);await fi(e,C,Qn(i),{editColumns:u?ia:void 0,maxRows:h,origin:{type:"csv",url:i}}),e.ui.dialogs.toast(`Imported ${Qn(i)}.`,{kind:"success",title:"Import"})}else{const C=await ys(e,i,`Reading ${Qn(i)}…`);await pi(e,C,Qn(i),{originUrl:i,maxRows:h}),e.ui.dialogs.toast(`Imported ${Qn(i)}.`,{kind:"success",title:"Import"})}}catch(C){e.ui.dialogs.toast(`Could not import ${b}: ${C.message}`,{kind:"error",title:"Import"})}}function gf(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function bf(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),i=[...t.searchParams.keys()].some(o=>o.startsWith("_")),n=r.includes("datasette")||i;return!i&&/\.csv$/i.test(t.pathname)?"csv":!i&&/\.json$/i.test(t.pathname)?"json":n?"datasette":"json"}catch{return"json"}}function la(e,t){if(t!=="datasette"||!e)return!1;try{const r=mn(e);return!r.db&&!r.table}catch{return!1}}function Qn(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}function yf(e){return/\.csv$/i.test(e)?"csv":"json"}let ft=class extends Ue{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const r=this.resolvedKind,i=this.maxRows,n=r==="csv"&&this.editColumns;if(this.file){this.finish({url:"",file:this.file,kind:r,editColumns:n,maxRows:i});return}const o=r==="datasette"&&!!this.selectedDb&&la(t,r),l=o?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:l,kind:r,dbChosen:o,editColumns:n,maxRows:i})}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?yf(this.file.name):bf(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),ft.instance===this&&(ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=sa[t];r&&(this.url=r.url,this.kind=r.kind)}onFileChange(e){const r=e.target.files?.[0]??null;this.file=r,r&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!la(this.url.trim(),this.resolvedKind)?me:L`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?L`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>L`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:L`<option value="">— not loaded —</option>`}
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
      ${this.dbError?L`<p class="hint error">${this.dbError}</p>`:me}
    `}render(){return L`
      <dialog @cancel=${this.onCancel} @keydown=${Tn}>
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
                ${sa.map((e,t)=>L`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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
            ${this.file?L`<p class="hint">
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
            ${this.resolvedKind==="csv"?L`<label class="check">
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
            ${this.resolvedKind==="datasette"&&this.maxRows!=null?L`<p class="hint">
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
    `}};ft.instance=null;ft.styles=[Xt,et`
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
    `];Zt([K()],ft.prototype,"url",2);Zt([K()],ft.prototype,"kind",2);Zt([K()],ft.prototype,"presetIdx",2);Zt([K()],ft.prototype,"dbList",2);Zt([K()],ft.prototype,"dbLoading",2);Zt([K()],ft.prototype,"dbError",2);Zt([K()],ft.prototype,"selectedDb",2);Zt([K()],ft.prototype,"editColumns",2);Zt([K()],ft.prototype,"file",2);Zt([K()],ft.prototype,"maxRowsInput",2);ft=Zt([rt("import-dialog")],ft);const wf=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return ft},init:uf,meta:cf},Symbol.toStringTag,{value:"Module"})),vf={name:"auto-sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"easyDBAccess built-ins",optional:!0},xf=6e4;let ca=null,ws=!1;const as=new Map;function $f(e){ca===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(ca=setInterval(()=>{wl(e)},xf)))}async function wl(e){if(ws)return;const t=e.workspaceId();if(!t)return;const r=await hl(e);if(r)try{await kf(e,r,t)}catch(i){console.warn("[auto-sync]",i)}}async function kf(e,t,r){const i=await Ei(e),n=await fl(e,r),o=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(o.status===404){await ua(e,t,r,i,null);return}if(!o.ok)return;const l=_i(o.headers.get("ETag")),u=await o.text();if(ta(i)===ta(u)){l&&l!==n&&await qn(e,r,l);return}if(l&&l===n){await ua(e,t,r,i,n);return}if(!(l&&as.get(r)===l)){ws=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const b=JSON.parse(u),C=await pl(e,r,b);l&&await qn(e,r,l),as.delete(r),e.ui.dialogs.toast(`Pulled ${C} table${C===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else l&&as.set(r,l)}finally{ws=!1}}}async function ua(e,t,r,i,n){const o={"Content-Type":"application/json"};n&&(o["If-Match"]=`"${n}"`);const l=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:o,body:i});if(l.ok){const u=_i(l.headers.get("ETag"));u&&await qn(e,r,u);return}if(l.status===412){const u=await l.json().catch(()=>({}));u.currentEtag&&await qn(e,r,u.currentEtag)}}const vl=Object.freeze(Object.defineProperty({__proto__:null,load:$f,meta:vf,tick:wl},Symbol.toStringTag,{value:"Module"})),xl=/\$([A-Za-z_][A-Za-z0-9_]*)/g;function da(...e){const t=new Set;for(const r of e)if(r)for(const i of r.matchAll(xl))t.add(i[1]);return[...t]}function Cf(e,t,r){return e.replace(xl,(i,n)=>{const o=r[n];if(!o)return"";const l=t.data[o];return l==null?"":String(l)})}function ha(e){return e==null||e===""}function Ef(e,t){const r=Object.entries(t).filter(([,i])=>i!=null&&String(i).trim()!=="");return r.length===0?e:e.filter(i=>r.every(([n,o])=>String(i.data[n]??"").toLowerCase().includes(String(o).toLowerCase())))}function Sf(e,t,r=!0){if(!t)return e;const i=r?1:-1;return[...e].sort((n,o)=>{const l=n.data[t],u=o.data[t],h=ha(l),b=ha(u);if(h||b)return h===b?0:h?1:-1;const C=Number(l),w=Number(u);return!Number.isNaN(C)&&!Number.isNaN(w)?(C-w)*i:String(l).localeCompare(String(u),void 0,{numeric:!0,sensitivity:"base"})*i})}function _f(e,t){return Sf(Ef(e,t.filters??{}),t.sortColumn,t.sortAsc??!0)}function Af(e){return!!e&&e.trim().length>0}var Pf=Object.defineProperty,Tf=Object.getOwnPropertyDescriptor,or=(e,t,r,i)=>{for(var n=i>1?void 0:i?Tf(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Pf(t,r,n),n};function vs(e,t){(Ot.instance??Df()).open(e,t)}function Df(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function fa(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let Ot=class extends Ue{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()}}connectedCallback(){super.connectedCallback(),Ot.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ot.instance===this&&(Ot.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const r=this.templates.find(i=>i.id===t.editTemplateId);r&&this.editTemplate(r)}else if(t?.editInstanceId){const r=this.instances.find(i=>i.id===t.editInstanceId);r&&await this.editInstance(r)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await we(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(r=>r.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((r,i)=>r.name.localeCompare(i.name))}async openInstance(e){await(await we()).store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()}),this.close()}async editInstance(e){const r=await(await we()).store.viewTemplates.findOne(e.templateId),i=r?da(r.headerHtml,r.rowHtml,r.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:r?.name??"template",name:e.name,tokens:i,mapping:{...e.mapping}},this.mode="instance"}async deleteInstance(e){await(await we()).store.viewInstances.remove(e),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await we();e.id?await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}):await t.store.viewTemplates.insert({id:fa(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=da(e.headerHtml,e.rowHtml,e.footerHtml),r={};for(const i of t)r[i]=this.autoMap(i);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:r},this.mode="instance"}autoMap(e){const t=e.toLowerCase(),r=this.columns.find(n=>n.field.toLowerCase()===t||(n.label??"").toLowerCase()===t);if(r)return r.field;const i=this.table?.labelColumn;return i&&(t==="title"||t==="name"||t==="label")?i:""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await we();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const r=this.columns.filter(n=>!n.hidden).map(n=>n.field),i={id:fa(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:r,mapping:{...e.mapping},updatedAt:Date.now()};await t.store.viewInstances.insert(i),await this.openInstance(i.id)}renderList(){return L`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>L`<li>
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
          ${this.templates.map(e=>L`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?L`<span class="badge">built-in</span>`:me}
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
    `}renderTemplate(){const e=this.tDraft,t=r=>i=>{this.tDraft={...e,[r]:i.target.value}};return L`
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
    `}renderInstance(){const e=this.iDraft;return L`
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
        ${e.tokens.length===0?L`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>L`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${r=>this.iDraft={...e,mapping:{...e.mapping,[t]:r.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(r=>L`<option value=${r.field} ?selected=${e.mapping[t]===r.field}>
                          ${r.label||r.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">
        ${e.id?L`Editing name and column mapping. The snapshotted sort, filters and visible columns
            are kept.`:L`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?L`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="button" class="primary" @click=${()=>void this.saveTemplate()}>
              Save
            </button>`:this.mode==="instance"?L`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="button" class="primary" @click=${()=>void this.saveInstance()}>
                ${this.iDraft?.id?"Save":"Create view"}
              </button>`:L`<button type="button" class="ghost" @click=${this.close}>Close</button>`;return L`
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
    `}};Ot.instance=null;Ot.styles=[Xt,et`
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
    `];or([K()],Ot.prototype,"mode",2);or([K()],Ot.prototype,"instances",2);or([K()],Ot.prototype,"templates",2);or([K()],Ot.prototype,"tDraft",2);or([K()],Ot.prototype,"iDraft",2);Ot=or([rt("views-dialog")],Ot);const If={name:"views",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",optional:!0},Rf="grid_view",pa="RSS Feed",xs='<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',$s=['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>',"</div>"].join(""),ks="</div>";function Of(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:Rf,tooltip:"Views — display this table through a template",onClick:(t,{tableId:r})=>vs(r)})}async function jf(e){await zf(e)}function Ff(){let e=5381;const t=`${xs}\0${$s}\0${ks}`;for(let r=0;r<t.length;r++)e=(e<<5)+e+t.charCodeAt(r)|0;return(e>>>0).toString(36)}async function zf(e){const t=e.workspaceId();if(!t)return;const r=`views:seeded:rss:${t}`,i=`views:sig:rss:${t}`,n=Ff(),o=(await e.store.viewTemplates.find({workspaceId:t})).find(u=>u.builtin&&u.name===pa);if(o){(await e.store.settings.findOne(i))?.value!==n&&(await e.store.viewTemplates.patch(o.id,{headerHtml:xs,rowHtml:$s,footerHtml:ks,updatedAt:Date.now()}),await e.store.settings.upsert({key:i,value:n})),await e.store.settings.upsert({key:r,value:!0});return}(await e.store.settings.findOne(r))?.value||(await e.store.viewTemplates.insert({id:Lf(),workspaceId:t,name:pa,headerHtml:xs,rowHtml:$s,footerHtml:ks,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({key:r,value:!0}),await e.store.settings.upsert({key:i,value:n}))}function Lf(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Bf=Object.freeze(Object.defineProperty({__proto__:null,init:Of,load:jf,meta:If},Symbol.toStringTag,{value:"Module"})),$l=[wh,mu,zu,Nd,vu,Qd,Gd,ch,gh,$h,Rh,zh,Nh,Gh,wf,vl,Bf],Mf=$l;function Cs(e){return`builtin:${e}`}async function Nf(e){const t=[];for(const r of $l)if(!await Uf(e,r)){t.push(r);try{await r.init?.(e)}catch(i){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"init",error:i})}}return async()=>{for(const r of t)try{await r.load?.(e)}catch(i){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"load",error:i})}}}async function Uf(e,t){if(!t.meta?.optional)return!1;const r=t.meta.name;return r?(await e.store.plugins.findOne(Cs(r)))?.enabled===!1:!1}async function qf(e){const t=e.workspaceId();if(!t)return async()=>{};const i=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const o of i)try{const l=await e.store.plugins.findOne(o);if(l&&l.enabled===!1)continue;let u=l?.cachedBody??"";if(u)Hf(e,o,u);else{try{u=await kl(o)}catch(C){await e.store.plugins.upsert({url:o,enabled:l?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${C.message}`}),e.events.emit("plugin:error",{url:o,phase:"fetch",error:C});continue}await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),cachedBody:u})}const h=new Blob([u],{type:"text/javascript"}),b=URL.createObjectURL(h);try{const C=await import(b);await C.init?.(e),n.push({url:o,mod:C})}finally{setTimeout(()=>URL.revokeObjectURL(b),5e3)}}catch(l){await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),lastError:`init: ${l.message}`}),e.events.emit("plugin:error",{url:o,phase:"init",error:l})}return async()=>{for(const{url:o,mod:l}of n)try{await l.load?.(e)}catch(u){await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),lastError:`load: ${u.message}`}),e.events.emit("plugin:error",{url:o,phase:"load",error:u})}}}async function kl(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function Hf(e,t,r){return(async()=>{try{const i=await kl(t);if(i===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:i})}catch{}})()}let ls=null;function we(){return ls||(ls=Wf()),ls}async function Wf(){const e=await jc(),t=Lc(e),r=Mc(),i=Vc(),n=new Map;t.tables.subscribe(F=>{n.clear();for(const N of F)n.set(N.id,N)});const o={...t.tables,insert:F=>(n.set(F.id,F),t.tables.insert(F)),upsert:F=>(n.set(F.id,F),t.tables.upsert(F))};let l=null;const u={get backend(){if(!l)throw new Error("[host] row-source ctx used before app init completed");return l.backend},events:r,settings:t.settings,workspaceId:()=>w},h=Bc({base:{...t,tables:o},providers:i.rowSources,tableById:F=>n.get(F),ctx:u}),b=Kf(),C=await h.workspaces.find();let w;if(b){const F=Yf(b),N=C.find(oe=>oe.id===F||oe.name===b);N?w=N.id:w=(await h.workspaces.insert({id:F,name:b,createdAt:Date.now(),pluginUrls:[]})).id}else{const F=Vf(),N=F?C.find(oe=>oe.id===F):void 0;N?w=N.id:C.length>0?w=C[0].id:w=(await h.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}Gf(w);const A=Xc({store:h,events:r,registries:i,workspaceId:()=>w});l=A,r.on("import:after",({source:F,tableId:N,rowCount:oe})=>{F!=="datasette"&&A.store.tables.findOne(N).then(le=>{A.ui.dialogs.toast(`Imported ${oe} row${oe===1?"":"s"} into "${le?.name??N}".`,{kind:"success",title:F.toUpperCase()+" import"})})}),r.on("plugin:error",({url:F,phase:N,error:oe})=>{A.ui.dialogs.toast(`[${N}] ${oe?.message??String(oe)}`,{kind:"error",title:`Plugin: ${F}`})});const H=await Nf(A),U=await qf(A);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:w}),await H(),await U()}),{store:h,events:r,workspaceId:w,registries:i,api:A}}function Kf(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const Cl="eda:lastWorkspaceId";function Vf(){try{return globalThis.localStorage?.getItem(Cl)??null}catch{return null}}function Gf(e){try{globalThis.localStorage?.setItem(Cl,e)}catch{}}function Yf(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var Xf=Object.defineProperty,Qf=Object.getOwnPropertyDescriptor,Pi=(e,t,r,i)=>{for(var n=i>1?void 0:i?Qf(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Xf(t,r,n),n};let nr=class extends Ue{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=Sr(this.text)}catch(l){this.errorMsg=`Couldn't parse the CSV: ${l.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const i=await we(),n=crypto.randomUUID();await i.store.tables.insert({id:n,workspaceId:i.workspaceId,name:t,code:Jf(t),columns:r.columns,view:"table",updatedAt:Date.now()});const o=r.rows.map(l=>({id:crypto.randomUUID(),tableId:n,data:l,updatedAt:Date.now()}));await i.store.rows(n).bulkInsert(o),i.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return L`
      <dialog @cancel=${this.close} @keydown=${Tn}>
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
            ${this.errorMsg?L`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};nr.styles=[Xt,et`
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
    `];Pi([K()],nr.prototype,"name",2);Pi([K()],nr.prototype,"text",2);Pi([K()],nr.prototype,"errorMsg",2);nr=Pi([rt("csv-paste-dialog")],nr);function Jf(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var Zf=Object.defineProperty,ep=Object.getOwnPropertyDescriptor,Ns=(e,t,r,i)=>{for(var n=i>1?void 0:i?ep(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Zf(t,r,n),n};const tp=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let on=class extends Ue{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),on.instance=this}disconnectedCallback(){super.disconnectedCallback(),on.instance===this&&(on.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:tp,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return L`
      <dialog @cancel=${this.onCancel} @keydown=${Tn}>
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
    `}};on.instance=null;on.styles=[Xt,et`
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
    `];Ns([K()],on.prototype,"text",2);Ns([K()],on.prototype,"columnLabel",2);on=Ns([rt("script-editor-dialog")],on);var np=Object.defineProperty,rp=Object.getOwnPropertyDescriptor,Ut=(e,t,r,i)=>{for(var n=i>1?void 0:i?rp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&np(t,r,n),n};const ip=["string","number","boolean","date","datetime"];let Ct=class extends Ue{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const r=await we();if(this.rendererOptions=[...r.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=r.events.on("app:ready",()=>{this.rendererOptions=[...r.registries.cellRenderers.keys()].sort()}),e){const i=await we(),n=await i.store.tables.findOne(e);if(!n)return;this.mode="edit",this.editTableId=e,this.name=n.name,this.columns=n.columns.map(l=>({field:l.field,label:l.label,type:l.type,renderer:l.renderer,script:l.script,max:l.max,unique:l.unique,notnull:l.notnull,hidden:l.hidden,origField:l.field}));const o=await i.store.rows(e).find();this.previewRows=o.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const i=[...this.columns],[n]=i.splice(e,1);i.splice(r,0,n),this.columns=i}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientY<i.top+i.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,i=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!i)return;const n=[...this.columns],[o]=n.splice(r,1);let l=t+(r<t?-1:0);i==="after"&&(l+=1),n.splice(l,0,o),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,i)=>i===e?{...r,...t}:r)}async editScript(e){const t=on.instance;if(!t)return;const r=this.columns[e];if(!r)return;const i=await t.open(r.script??"",r.label||r.field);i!==null&&this.patchColumn(e,{script:i.trim()?i:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const r=new Set;for(const o of this.columns){const l=o.field.trim();if(!l){this.errorMsg="Column field names cannot be empty.";return}if(r.has(l)){this.errorMsg=`Duplicate column field: ${l}`;return}r.add(l)}const i=await we(),n=this.columns.map(o=>{const l={field:o.field.trim(),label:o.label.trim()||o.field.trim(),type:o.type};return o.renderer&&(l.renderer=o.renderer),o.script&&(l.script=o.script),o.max!=null&&o.max>0&&(l.max=o.max),o.unique&&(l.unique=!0),o.notnull&&(l.notnull=!0),o.hidden&&(l.hidden=!0),l});if(this.mode==="edit"&&this.editTableId){const o=this.editTableId,l=await i.store.tables.findOne(o),u=new Map((l?.columns??[]).map(F=>[F.field,F])),h=n.filter(F=>{const N=u.get(F.field);return F.unique&&!N?.unique||F.notnull&&!N?.notnull||F.max&&F.max>0&&F.max!==N?.max});if(h.length>0){const F=await i.store.rows(o).find(),N=ap(h,F);if(N.length>0){this.errorMsg=`Cannot save: ${N.length} existing ${N.length===1?"row violates":"rows violate"} the new constraints.
${N.slice(0,5).join(`
`)}${N.length>5?`
…and ${N.length-5} more.`:""}`;return}}const b=new Set(this.columns.map(F=>F.origField).filter(F=>!!F)),C=new Set(n.map(F=>F.field)),w=(l?.columns??[]).map(F=>F.field).filter(F=>!b.has(F)),A=l?.deletedColumns??[],H=[...new Set([...A,...w])].filter(F=>!C.has(F)),U={name:t,columns:n,updatedAt:Date.now()};(H.length>0||A.length>0)&&(U.deletedColumns=H),await i.store.tables.patch(o,U)}else await i.store.tables.insert({id:cp(),workspaceId:i.workspaceId,name:t,code:lp(t),columns:n,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return L`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const t of this.columns){if(!t.unique)continue;const r=new Set,i=new Set;for(const n of this.previewRows){const o=n.data[t.field];o==null||o===""||(r.has(o)&&i.add(o),r.add(o))}e.set(t.field,i)}return L`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${this.columns.map(t=>L`<th title=${t.field}>${t.label||t.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(t=>L`
                <tr>
                  ${this.columns.map(r=>{const i=t.data[r.field],n=op(r,i,e.get(r.field));return L`<td
                      class=${n?"violation":""}
                      title=${n??""}
                    >${sp(i)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return L`
      <dialog @cancel=${this.close} @keydown=${Tn}>
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
          ${this.noticeMsg?L`<div class="notice">${this.noticeMsg}</div>`:""}
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
            ${this.columns.map((r,i)=>{const n=this.dragSrcIdx===i,o=this.dropTargetIdx===i,l=o&&this.dropEdge==="before"?" drop-before":o&&this.dropEdge==="after"?" drop-after":"";return L`
                <div
                  class=${`col-row${n?" drag-source":""}${l}`}
                  @dragover=${u=>this.onRowDragOver(u,i,u.currentTarget)}
                  @dragleave=${()=>this.onRowDragLeave(i)}
                  @drop=${u=>this.onRowDrop(u,i)}
                >
                  <span
                    class="drag-handle"
                    title="Drag to reorder"
                    draggable="true"
                    @dragstart=${u=>this.onRowDragStart(u,i)}
                    @dragend=${()=>this.onRowDragEnd()}
                  >
                    <span class="mi sm">drag_indicator</span>
                  </span>
                  <input
                    type="text"
                    .value=${r.field}
                    @input=${u=>this.patchColumn(i,{field:u.target.value})}
                  />
                  <input
                    type="text"
                    .value=${r.label}
                    @input=${u=>this.patchColumn(i,{label:u.target.value})}
                  />
                  <select
                    .value=${r.type}
                    @change=${u=>this.patchColumn(i,{type:u.target.value})}
                  >
                    ${ip.map(u=>L`<option value=${u} ?selected=${u===r.type}>${u}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${u=>{const h=u.target.value;this.patchColumn(i,{renderer:h||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(u=>L`<option value=${u} ?selected=${u===r.renderer}>${u}</option>`)}
                  </select>
                  ${r.renderer==="script"?L`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(i)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:L`<span></span>`}
                  <input
                    type="number"
                    min="0"
                    placeholder="—"
                    title="Max length (strings) or max value (numbers)"
                    .value=${r.max==null?"":String(r.max)}
                    @input=${u=>{const h=u.target.value;this.patchColumn(i,{max:h===""?void 0:Number(h)})}}
                  />
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Unique"
                      .checked=${!!r.unique}
                      @change=${u=>this.patchColumn(i,{unique:u.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Not null"
                      .checked=${!!r.notnull}
                      @change=${u=>this.patchColumn(i,{notnull:u.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Visible — uncheck to hide the column without losing its data"
                      .checked=${!r.hidden}
                      @change=${u=>this.patchColumn(i,{hidden:!u.target.checked})}
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

          ${this.renameDetected()?L`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?L`<div class="error">${this.errorMsg}</div>`:""}
          ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};Ct.styles=[ln,Xt,et`
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
  `];Ut([K()],Ct.prototype,"mode",2);Ut([K()],Ct.prototype,"editTableId",2);Ut([K()],Ct.prototype,"name",2);Ut([K()],Ct.prototype,"columns",2);Ut([K()],Ct.prototype,"errorMsg",2);Ut([K()],Ct.prototype,"noticeMsg",2);Ut([K()],Ct.prototype,"dragSrcIdx",2);Ut([K()],Ct.prototype,"dropTargetIdx",2);Ut([K()],Ct.prototype,"dropEdge",2);Ut([K()],Ct.prototype,"previewRows",2);Ut([K()],Ct.prototype,"rendererOptions",2);Ct=Ut([rt("new-table-dialog")],Ct);function sp(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function op(e,t,r){const i=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&i)return`${e.label}: empty`;if(i)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!i){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function ap(e,t){const r=[];for(const i of e)if(i.notnull&&t.forEach((n,o)=>{const l=n.data[i.field];(l==null||typeof l=="string"&&l.trim()==="")&&r.push(`Row ${o+1}: ${i.label} is empty.`)}),i.max!=null&&i.max>0&&t.forEach((n,o)=>{const l=n.data[i.field];typeof l=="string"&&l.length>i.max?r.push(`Row ${o+1}: ${i.label} length ${l.length} > max ${i.max}.`):typeof l=="number"&&l>i.max&&r.push(`Row ${o+1}: ${i.label} value ${l} > max ${i.max}.`)}),i.unique){const n=new Map;t.forEach((o,l)=>{const u=o.data[i.field];u==null||u===""||(n.has(u)?r.push(`Row ${l+1}: ${i.label} duplicates row ${n.get(u)+1} ("${String(u)}").`):n.set(u,l))})}return r}function lp(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function cp(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var up=Object.defineProperty,dp=Object.getOwnPropertyDescriptor,qt=(e,t,r,i)=>{for(var n=i>1?void 0:i?dp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&up(t,r,n),n};let Et=class extends Ue{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.builtinNames=[],this.optionalBuiltins=[],this.dirtyBuiltins=!1,this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}async open(){const e=await we(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(o=>[o.url,o]));const i=[],n=[];for(const o of Mf){const l=o.meta?.name;if(l)if(o.meta?.optional){const u=this.records.get(Cs(l));n.push({name:l,...o.meta?.description?{description:o.meta.description}:{},...o.meta?.author?{author:o.meta.author}:{},enabled:u?.enabled!==!1})}else i.push(l)}this.builtinNames=i,this.optionalBuiltins=n,this.dirtyBuiltins=!1,this.addUrl="",await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(),this.refreshServerRegistry()}async refreshCatalog(){const e=new URL("/easydbaccess/plugins/catalog.json",location.origin).toString();try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),i=Array.isArray(r.plugins)?r.plugins:[];this.catalog=i.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await we()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const o=await fetch(n,{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);const l=await o.json(),u=Array.isArray(l.plugins)?l.plugins:[];this.serverCatalog=u.map(h=>({...h,absUrl:new URL(h.url,n).toString()})),this.serverCatalogError=null}catch(o){this.serverCatalog=[],this.serverCatalogError=o.message}}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await we()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await we();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await we(),i=this.records.get(e);await r.store.plugins.upsert({...i??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...i,url:e,enabled:t,lastFetched:i?.lastFetched??0}))}async removePlugin(e){const t=await we();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await we(),i=Cs(e),n=this.records.get(i);await r.store.plugins.upsert({...n??{url:i,lastFetched:0},url:i,enabled:t,lastFetched:n?.lastFetched??0}),this.optionalBuiltins=this.optionalBuiltins.map(o=>o.name===e?{...o,enabled:t}:o),this.dirtyBuiltins=!0}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await we();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const i=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:i});const n=new Blob([i],{type:"text/javascript"}),o=URL.createObjectURL(n);try{const u=await import(o);await u.init?.(t.api),await u.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(o),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const l=await t.store.plugins.find();this.records=new Map(l.map(u=>[u.url,u])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}render(){return L`
      <dialog @cancel=${this.close} @keydown=${Tn}>
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
            ${this.catalog.length>0?L`<div class="section-h">Available from this host</div>`:""}
            ${this.catalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return L`
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
            ${this.catalogError?L`<div class="meta err">
                  Host catalog unavailable: ${this.catalogError}
                </div>`:""}

            ${this.serverCatalog.length>0||this.serverCatalogError?L`<div class="section-h">From server</div>`:""}
            ${this.serverCatalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return L`
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
            ${this.serverCatalogError?L`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            ${this.optionalBuiltins.length>0?L`<div class="section-h">Optional built-ins</div>`:""}
            ${this.optionalBuiltins.map(e=>L`
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
            ${this.builtinNames.map(e=>L`
                <div class="row builtin">
                  <span class="mi sm">extension</span>
                  <div>
                    <div>${e}</div>
                    <div class="meta">Built-in</div>
                  </div>
                  <span class="meta">always on</span>
                </div>
              `)}

            ${this.urls.length>0?L`<div class="section-h">Installed (by URL)</div>`:""}
            ${this.urls.map(e=>{const t=this.records.get(e),r=t?.lastError?" error":"",i=t?.lastFetched?new Date(t.lastFetched).toLocaleString():"never";return L`
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
    `}};Et.styles=[ln,Xt,et`
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
    `];qt([K()],Et.prototype,"urls",2);qt([K()],Et.prototype,"records",2);qt([K()],Et.prototype,"addUrl",2);qt([K()],Et.prototype,"builtinNames",2);qt([K()],Et.prototype,"optionalBuiltins",2);qt([K()],Et.prototype,"dirtyBuiltins",2);qt([K()],Et.prototype,"catalog",2);qt([K()],Et.prototype,"catalogError",2);qt([K()],Et.prototype,"serverCatalog",2);qt([K()],Et.prototype,"serverCatalogError",2);qt([K()],Et.prototype,"installing",2);Et=qt([rt("plugin-manager-dialog")],Et);/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let j={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&j.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let i=arguments[r];if(i==null)continue;i=Object(i);let n=Object.keys(Object(i));for(let o=0,l=n.length;o<l;o++){let u=n[o],h=Object.getOwnPropertyDescriptor(i,u);h!==void 0&&h.enumerable&&(t[u]=i[u])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,i=new Array(r);r--;)i[r]=[t[r],e[t[r]]];return i}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),i=document.createDocumentFragment();r.forEach(function(n){let o=n instanceof Node;i.appendChild(o?n:document.createTextNode(String(n)))}),this.appendChild(i)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,i=this;do for(r=t.length;--r>=0&&t.item(r)!==i;);while(r<0&&(i=i.parentElement));return i}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let i=document.createEvent("CustomEvent");return i.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),i}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),i=r.length>>>0;if(i===0)return!1;let n=t|0,o=Math.max(n>=0?n:i-Math.abs(n),0);function l(u,h){return u===h||typeof u=="number"&&typeof h=="number"&&isNaN(u)&&isNaN(h)}for(;o<i;){if(l(r[o],e))return!0;o++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>j.modifier=e),document.addEventListener("keyup",()=>j.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const i=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(i===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(i),o=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-o)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(i===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(i),o=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-o)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((i,n)=>{(i.startsWith("--")||i.startsWith("var"))&&(r[n]=j.getCssVariableValue(i))}),r.forEach(i=>{j.colorNames[i]?t[2]="#"+j.colorNames[i]:i.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=i:i.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=i:t[2]=i}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),i=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return i&&(t.size=i[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let i=e.indexOf(")");t=e.slice(0,i+1).replace(/\s+/g,""),t.startsWith("var")&&(t=j.getCssVariableValue(t)),r=e.slice(i+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let i=e.indexOf(" ");i>0?(t=e.slice(0,i+1).replace(/\s+/g,""),r=e.slice(i+1,e.length).trim()):t=e,t.startsWith("--")&&(t=j.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let i=r.indexOf(" ");r=r.slice(i+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:j.colorNames[r]?r="#"+j.colorNames[r]:r.match(/^(--|var)/)?r=j.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,i,n,o,l,u,h,b,C,w={};const A=/^#?([\da-f]{3}|[\da-f]{6})$/gi,H=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,U=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,F=this.colorNames;return F[t]&&(t=F[t]),t.match(A)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),i=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),w.rgb={r:parseInt(r,16),g:parseInt(i,16),b:parseInt(n,16)},w.hex=`#${r}${i}${n}`):(w.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},w.hex=`#${t}`),C=this.rgbToHsl(w.rgb.r,w.rgb.g,w.rgb.b),w.hsl=C,w.rgb.css=`rgb(${w.rgb.r},${w.rgb.g},${w.rgb.b})`):t.match(H)?(h=H.exec(t),w.rgb={css:t,r:h[1],g:h[2],b:h[3]},w.hex=this.rgbToHex(h[1],h[2],h[3]),C=this.rgbToHsl(h[1],h[2],h[3]),w.hsl=C):t.match(U)?(h=U.exec(t),o=h[1]/360,l=h[2].slice(0,h[2].length-1)/100,u=h[3].slice(0,h[3].length-1)/100,b=this.hslToRgb(o,l,u),w.rgb={css:`rgb(${b[0]},${b[1]},${b[2]})`,r:b[0],g:b[1],b:b[2]},w.hex=this.rgbToHex(w.rgb.r,w.rgb.g,w.rgb.b),w.hsl={css:`hsl(${h[1]},${h[2]},${h[3]})`,h:h[1],s:h[2],l:h[3]}):(w.hex="#f5f5f5",w.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},w.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),w},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),i=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),o=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",l=this.perceivedBrightness(i)<=t?"#ffffff":"#000000",u=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",h=this.lighten(e,this.colorFilledDark),b=this.perceivedBrightness(h)<=t?"#ffffff":"#000000";return[r.hsl.css,i,n,o,l,u,h,b]},darken(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i-i*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i+(100-i)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let i,n,o;if(t===0)i=n=o=r;else{let l=(b,C,w)=>(w<0&&(w+=1),w>1&&(w-=1),w<.16666666666666666?b+(C-b)*6*w:w<.5?C:w<.6666666666666666?b+(C-b)*(.6666666666666666-w)*6:b),u=r<.5?r*(1+t):r+t-r*t,h=2*r-u;i=l(h,u,e+1/3),n=l(h,u,e),o=l(h,u,e-1/3)}return[Math.round(i*255),Math.round(n*255),Math.round(o*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let i=Math.max(e,t,r),n=Math.min(e,t,r),o,l,u=(i+n)/2;if(i===n)o=l=0;else{let h=i-n;switch(l=u>.5?h/(2-i-n):h/(i+n),i){case e:o=(t-r)/h+(t<r?6:0);break;case t:o=(r-e)/h+2;break;case r:o=(e-t)/h+4;break}o/=6}return o=Math.round(o*360),l=Math.round(l*100)+"%",u=Math.round(u*100)+"%",{css:"hsl("+o+","+l+","+u+")",h:o,s:l,l:u}},rgbToHex(e,t,r){let i=Number(e).toString(16),n=Number(t).toString(16),o=Number(r).toString(16);return i.length===1&&(i=`0${i}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${i}${n}${o}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),i=r.filter(l=>l.match(/^(down|right|up|left)$/i));i.length&&(t.autoposition=i[0],r.splice(r.indexOf(i[0]),1));let n=r.filter(l=>l.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let o=r.filter(l=>l.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return o.length&&(t.offsetX=o[0].match(/^[+-]?\d*\.?\d+$/i)?`${o[0]}px`:o[0],o[1]?t.offsetY=o[1].match(/^[+-]?\d*\.?\d+$/i)?`${o[1]}px`:o[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(o[0]),1),o[1]&&r.splice(r.indexOf(o[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(F=>{typeof t[F]=="function"&&(t[F]=t[F].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,i=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),o=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},l=r==="window"?{x:1,y:1}:{x:o.width/r.offsetWidth,y:o.height/r.offsetHeight},u=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);o.width-=(parseFloat(u.borderLeftWidth)+parseFloat(u.borderRightWidth))*l.x,o.height-=(parseFloat(u.borderTopWidth)+parseFloat(u.borderBottomWidth))*l.y;let h;t.of?typeof t.of=="string"?h=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?h=t.of[0].getBoundingClientRect():h=t.of.getBoundingClientRect():h=o;let b=this.getScrollbarWidth(document.body),C=this.getScrollbarWidth(e.parentElement),w="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?w=h.left-o.left-parseFloat(u.borderLeftWidth)+"px":w="0px":t.at.startsWith("center")?t.of?w=h.left-o.left-parseFloat(u.borderLeftWidth)+h.width/2+"px":w=o.width/2+"px":t.at.startsWith("right-")&&(t.of?w=h.left-o.left-parseFloat(u.borderLeftWidth)+h.width+"px":w=o.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?w=h.left-o.left-parseFloat(u.borderLeftWidth)-i.width/2+"px":w=-i.width/2+"px":t.at.startsWith("center")?t.of?w=h.left-o.left-parseFloat(u.borderLeftWidth)-(i.width-h.width)/2+"px":w=o.width/2-i.width/2+"px":t.at.startsWith("right-")&&(t.of?w=h.left-o.left-parseFloat(u.borderLeftWidth)+(h.width-i.width/2)+"px":w=o.width-i.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?w=h.left-o.left-parseFloat(u.borderLeftWidth)-i.width+"px":w=-i.width+"px":t.at.startsWith("center")?t.of?w=h.left-o.left-parseFloat(u.borderLeftWidth)-i.width+h.width/2+"px":w=o.width/2-i.width+"px":t.at.startsWith("right-")&&(t.of?w=h.left-o.left-parseFloat(u.borderLeftWidth)+h.width-i.width+"px":w=o.width-i.width+"px",r!=="window"&&(w=parseFloat(w)-C.y+"px")));let A="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?A=h.top-o.top-parseFloat(u.borderTopWidth)+"px":A="0px":t.at.endsWith("center")?t.of?A=h.top-o.top-parseFloat(u.borderTopWidth)+h.height/2+"px":A=o.height/2+"px":t.at.endsWith("-bottom")&&(t.of?A=h.top-o.top-parseFloat(u.borderTopWidth)+h.height+"px":A=o.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?A=h.top-o.top-parseFloat(u.borderTopWidth)-i.height/2+"px":A=-i.height/2+"px":t.at.endsWith("center")?t.of?A=h.top-o.top-parseFloat(u.borderTopWidth)-i.height/2+h.height/2+"px":A=o.height/2-i.height/2+"px":t.at.endsWith("-bottom")&&(t.of?A=h.top-o.top-parseFloat(u.borderTopWidth)-i.height/2+h.height+"px":A=o.height-i.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?A=h.top-o.top-parseFloat(u.borderTopWidth)-i.height+"px":A=-i.height+"px":t.at.endsWith("center")?t.of?A=h.top-o.top-parseFloat(u.borderTopWidth)-i.height+h.height/2+"px":A=o.height/2-i.height+"px":t.at.endsWith("-bottom")&&(t.of?A=h.top-o.top-parseFloat(u.borderTopWidth)-i.height+h.height+"px":A=o.height-i.height+"px",r!=="window"?A=parseFloat(A)-C.x+"px":A=parseFloat(A)-b.x+"px")),e.style.left=l.x===1?w:parseFloat(w)/l.x+"px",e.style.top=l.y===1?A:parseFloat(A)/l.y+"px";let H=getComputedStyle(e),U={left:H.left,top:H.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(U=this.applyPositionAutopos(e,U,t)),(t.offsetX||t.offsetY)&&(U=this.applyPositionOffset(e,U,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(U=this.applyPositionMinMax(e,U,t)),t.modify&&(U=this.applyPositionModify(e,U,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const i=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(i);const n=Array.prototype.slice.call(document.querySelectorAll(`.${i}`)),o=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((l,u)=>{u>0&&u<=o&&(t.top=parseFloat(t.top)+n[--u].getBoundingClientRect().height+j.autopositionSpacing+"px")});break;case"up":n.forEach((l,u)=>{u>0&&u<=o&&(t.top=parseFloat(t.top)-n[--u].getBoundingClientRect().height-j.autopositionSpacing+"px")});break;case"right":n.forEach((l,u)=>{u>0&&u<=o&&(t.left=parseFloat(t.left)+n[--u].getBoundingClientRect().width+j.autopositionSpacing+"px")});break;case"left":n.forEach((l,u)=>{u>0&&u<=o&&(t.left=parseFloat(t.left)-n[--u].getBoundingClientRect().width-j.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const i=getComputedStyle(e);return{left:i.left,top:i.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(i=>{e.classList.contains(i)&&(t=i)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),i=document.createElement("button");i.className="btn btn"+t.color.slice(r),document.body.appendChild(i),t.color=getComputedStyle(i).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(i),i=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},i=typeof t=="object"?Object.assign(r,t):r,n=i.bgPanel,o=i.bgContent,l=i.colorHeader,u=i.colorContent,h=i.bgFooter,b=i.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[l]&&(l="#"+this.colorNames[l]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(A=>e.querySelector(A).style.color=this.getCssVariableValue(l)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(A=>A.style.color=this.getCssVariableValue(l)),this.colorNames[o]?e.content.style.background="#"+this.colorNames[o]:e.content.style.background=this.getCssVariableValue(o),this.colorNames[u]?e.content.style.color="#"+this.colorNames[u]:e.content.style.color=this.getCssVariableValue(u),this.perceivedBrightness(l)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(u)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[h]?e.footer.style.background="#"+this.colorNames[h]:e.footer.style.background=this.getCssVariableValue(h),this.colorNames[b]?e.footer.style.color="#"+this.colorNames[b]:e.footer.style.color=this.getCssVariableValue(b),i.border&&e.setBorder(i.border),i.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(i.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,i]of Object.entries(t))e.style[r]=typeof i=="string"?j.getCssVariableValue(i):i;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const i=document.createElement("script");i.src=e,i.type=t,document.head.appendChild(i),r&&(i.onload=r)}},ajax(e,t){let r,i,n=new XMLHttpRequest;const o={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let l=j.strToHtml(this.responseText);r.urlSelector&&(l=l.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(l)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},o,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},o,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&j.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}i=r.url.trim().split(/\s+/),r.url=encodeURI(i[0]),i.length>1&&(i.shift(),r.urlSelector=i.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&j.ajaxAutoresizeAutoreposition(t,r),j.ajaxAlwaysCallbacks.length&&j.ajaxAlwaysCallbacks.forEach(l=>{t?l.call(n,n,t):l.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const i={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(o,l){if(l){let u=j.strToHtml(o);l.contentRemove(),l.content.append(u)}}};if(t&&typeof e=="string")r=Object.assign({},i,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},i,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&j.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(o=>{if(o.ok)return o[r.bodyMethod]()}).then(o=>{t?r.done.call(o,o,t):r.done.call(o,o),t&&(r.autoresize||r.autoreposition)&&j.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const i=r.split(" "),n=Object.assign({},{width:i[0],height:i[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const i=Object.assign({},r);t.autoresize&&e.resize(i),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const i=document.createElement("div"),n=e.parentElement;i.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(i.style.width=r+"px",i.style.height=r+"px"):t==="ct"||t==="cb"?i.style.height=r+"px":(t==="lc"||t==="rc")&&(i.style.width=r+"px"),n!==document.body&&(i.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(i)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",i,n){if(typeof t=="function"&&(t=[t]),r)return t[r](o=>o.call(e,e,i,n));t.forEach(o=>o.call(e,e,i,n))},resetZi(){this.zi=((e=j.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=j.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){j.zi||(j.zi=((m=j.ziBase)=>{let v=m;return{next:()=>v++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${j.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let m=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;j.errorpanel(m)}return!1}let i=this.pOcontainer(e.container);if(typeof i=="object"&&i.length&&i.length>0&&(i=i[0]),!i)return this.errorReporting&&j.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(m=>{e[m]?typeof e[m]=="function"&&(e[m]=[e[m]]):e[m]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const o=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),l=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),u=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),h=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),b=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),C=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),w=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),A=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),H=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),U=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),F=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),N=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),oe=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),le=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),ke=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),re=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[o,l,u,h,b,C,w,A,H,U,F,N,oe,le].forEach(m=>m.panel=n);const ie=n.querySelector(".jsPanel-btn-close"),pe=n.querySelector(".jsPanel-btn-maximize"),xe=n.querySelector(".jsPanel-btn-normalize"),Ie=n.querySelector(".jsPanel-btn-smallify"),qe=n.querySelector(".jsPanel-btn-minimize");ie&&j.pointerup.forEach(m=>{ie.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.close(null,!0)})}),pe&&j.pointerup.forEach(m=>{pe.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.maximize()})}),xe&&j.pointerup.forEach(m=>{xe.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.normalize()})}),Ie&&j.pointerup.forEach(m=>{Ie.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),qe&&j.pointerup.forEach(m=>{qe.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.minimize()})});let $e=j.extensions;for(let m in $e)Object.prototype.hasOwnProperty.call($e,m)&&(n[m]=$e[m]);if(n.setBorder=m=>{let v=j.pOborder(m);return v[2].length||(v[2]=n.style.backgroundColor),v=v.join(" "),n.style.border=v,n.options.border=v,n},n.setBorderRadius=m=>{typeof m=="string"&&(m.startsWith("--")||m.startsWith("var"))&&(m=m.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),m=j.getCssVariableValue(m)),typeof m=="number"&&(m+="px"),n.style.borderRadius=m;const v=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=v.borderTopLeftRadius,n.header.style.borderTopRightRadius=v.borderTopRightRadius):(n.content.style.borderTopLeftRadius=v.borderTopLeftRadius,n.content.style.borderTopRightRadius=v.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=v.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=v.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=v.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=v.borderBottomLeftRadius),n},n.setTheme=(m=e.theme,v)=>{let E;if(n.status==="minimized"&&(E=!0,n.normalize()),j.clearTheme(n),typeof m=="object")e.border=void 0,j.applyCustomTheme(n,m);else if(typeof m=="string"){m==="none"&&(m="white");let g=j.getThemeDetails(m);j.applyColorTheme(n,g)}return E&&n.minimize(),v&&v.call(n,n),n},n.remove=(m,v,E)=>{n.parentElement.removeChild(n),document.getElementById(m)?E&&E.call(n,m,n):(n.removeMinimizedReplacement(),n.status="closed",v&&document.dispatchEvent(re),document.dispatchEvent(ke),n.options.onclosed&&j.processCallbacks(n,n.options.onclosed,"every",v),j.autopositionRemaining(n),E&&E.call(m,m)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(m,v)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(le),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!j.processCallbacks(n,n.options.onbeforeclose,"some",n.status,v))return n;n.options.animateOut?(n.options.animateIn&&j.remClass(n,n.options.animateIn),j.setClass(n,n.options.animateOut),n.addEventListener("animationend",E=>{E.stopPropagation(),n.remove(n.id,v,m)})):n.remove(n.id,v,m)}},n.maximize=(m,v)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!j.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(b);const E=n.parentElement,g=j.pOcontainment(e.maximizedMargin);return E===document.body?(n.style.width=document.documentElement.clientWidth-g[1]-g[3]+"px",n.style.height=document.documentElement.clientHeight-g[0]-g[2]+"px",n.style.left=g[3]+"px",n.style.top=g[0]+"px"):(n.style.width=E.clientWidth-g[1]-g[3]+"px",n.style.height=E.clientHeight-g[0]-g[2]+"px",n.style.left=g[3]+"px",n.style.top=g[0]+"px"),Ie.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),v||n.front(),document.dispatchEvent(C),document.dispatchEvent(l),e.onstatuschange&&j.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onmaximized&&j.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=m=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!j.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(w),!document.getElementById("jsPanel-replacement-container")){const v=document.createElement("div");v.id="jsPanel-replacement-container",document.body.append(v)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(A),document.dispatchEvent(l),e.onstatuschange&&j.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let v=n.createMinimizedReplacement(),E,g,k;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(v);break;case"parentpanel":g=n.closest(".jsPanel-content").parentElement,k=g.querySelectorAll(".jsPanel-minimized-box"),E=k[k.length-1],E.append(v);break;case"parent":g=n.parentElement,E=g.querySelector(".jsPanel-minimized-container"),E||(E=document.createElement("div"),E.className="jsPanel-minimized-container",g.append(E)),E.append(v);break;default:document.querySelector(e.minimizeTo).append(v)}}return m&&m.call(n,n,n.statusBefore),e.onminimized&&j.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=m=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!j.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(u),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),Ie.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(h),document.dispatchEvent(l),e.onstatuschange&&j.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onnormalized&&j.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=m=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!j.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(H),n.style.overflow="hidden";const v=window.getComputedStyle(n),E=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(v.borderTopWidth)+parseFloat(v.borderBottomWidth)+E+"px",Ie.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(U),document.dispatchEvent(l),e.onstatuschange&&j.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(F),document.dispatchEvent(l),e.onstatuschange&&j.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const g=n.querySelectorAll(".jsPanel-minimized-box");return g[g.length-1].style.display="none",m&&m.call(n,n,n.statusBefore),e.onsmallified&&j.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=m=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!j.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(N),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(h),document.dispatchEvent(l),e.onstatuschange&&j.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),Ie.style.transform="rotate(0deg)";const v=n.querySelectorAll(".jsPanel-minimized-box");v[v.length-1].style.display="flex",m&&m.call(n,n,n.statusBefore),e.onunsmallified&&j.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(m,v=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const E=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(g=>g.style.zIndex);Math.max(...E)>n.style.zIndex&&(n.style.zIndex=j.zi.next()),j.resetZi()}return document.dispatchEvent(oe),m&&m.call(n,n),e.onfronted&&v&&j.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(m,v=!1)=>{if(v||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),m&&typeof m=="function"&&!v)m.call(n,n,n.snappableTo);else if(m!==!1){let E=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const g=j.pOcontainment(n.options.dragit.containment),k=n.snappableTo;k.startsWith("left")?E[0]=g[3]:k.startsWith("right")&&(E[0]=-g[1]),k.endsWith("top")?E[1]=g[0]:k.endsWith("bottom")&&(E[1]=-g[2])}n.reposition(`${n.snappableTo} ${E[0]} ${E[1]}`)}v||(n.snapped=n.snappableTo)},n.move=(m,v)=>{let E=n.overlaps(m,"paddingbox"),g=n.parentElement;return m.appendChild(n),n.options.container=m,n.style.left=E.left+"px",n.style.top=E.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),v&&v.call(n,n,m,g),n},n.closeChildpanels=m=>(n.getChildpanels().forEach(v=>v.close()),m&&m.call(n,n),n),n.getChildpanels=m=>{const v=n.content.querySelectorAll(".jsPanel");return m&&v.forEach((E,g,k)=>{m.call(E,E,g,k)}),v},n.isChildpanel=m=>{const v=n.closest(".jsPanel-content"),E=v?v.parentElement:null;return m&&m.call(n,n,E),v?E:!1},n.contentRemove=m=>(j.emptyNode(n.content),m&&m.call(n,n),n),n.createMinimizedReplacement=()=>{const m=j.createMinimizedTemplate(),v=window.getComputedStyle(n.headertitle).color,E=window.getComputedStyle(n),g=e.iconfont,k=m.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?j.setStyles(m,{backgroundColor:E.backgroundColor,backgroundPositionX:E.backgroundPositionX,backgroundPositionY:E.backgroundPositionY,backgroundRepeat:E.backgroundRepeat,backgroundAttachment:E.backgroundAttachment,backgroundImage:E.backgroundImage,backgroundSize:E.backgroundSize,backgroundOrigin:E.backgroundOrigin,backgroundClip:E.backgroundClip}):m.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,m.id=n.id+"-min",m.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),m.querySelector(".jsPanel-headerlogo")),m.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),m.querySelector(".jsPanel-title")),m.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),m.querySelector(".jsPanel-title").style.color=v,k.style.color=v,k.querySelectorAll("button").forEach(ce=>ce.style.color=v),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(ce=>{n.header.classList.contains(ce)&&m.querySelector(".jsPanel-hdr").classList.add(ce)}),n.setIconfont(g,m),n.dataset.btnnormalize==="enabled"?j.pointerup.forEach(ce=>{m.querySelector(".jsPanel-btn-normalize").addEventListener(ce,fe=>{if(fe.preventDefault(),fe.button&&fe.button>0)return!1;n.normalize()})}):k.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?j.pointerup.forEach(ce=>{m.querySelector(".jsPanel-btn-maximize").addEventListener(ce,fe=>{if(fe.preventDefault(),fe.button&&fe.button>0)return!1;n.maximize()})}):k.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?j.pointerup.forEach(ce=>{m.querySelector(".jsPanel-btn-close").addEventListener(ce,fe=>{if(fe.preventDefault(),fe.button&&fe.button>0)return!1;n.close(null,!0)})}):k.querySelector(".jsPanel-btn-close").style.display="none",m},n.removeMinimizedReplacement=()=>{const m=document.getElementById(`${n.id}-min`);m&&m.parentElement.removeChild(m)},n.drag=(m={})=>{let v,E,g;const k=new CustomEvent("jspaneldragstart",{detail:n.id}),ce=new CustomEvent("jspaneldrag",{detail:n.id}),fe=new CustomEvent("jspaneldragstop",{detail:n.id});[k,ce,fe].forEach(He=>He.panel=n);const W=He=>{let Le=He.split("-");return Le.forEach((Se,Re)=>{Le[Re]=Se.charAt(0).toUpperCase()+Se.slice(1)}),"snap"+Le.join("")};function Y(He){He.relatedTarget===null&&j.pointermove.forEach(Le=>{document.removeEventListener(Le,E,!1),n.style.opacity=1})}let Ye=m.handles||j.defaults.dragit.handles,ct=m.cursor||j.defaults.dragit.cursor;function en(He){if(j.pointermove.forEach(Le=>document.removeEventListener(Le,E)),j.removeSnapAreas(),v){if(n.style.opacity=1,v=void 0,g.snap){switch(n.snappableTo){case"left-top":n.snap(g.snap.snapLeftTop);break;case"center-top":n.snap(g.snap.snapCenterTop);break;case"right-top":n.snap(g.snap.snapRightTop);break;case"right-center":n.snap(g.snap.snapRightCenter);break;case"right-bottom":n.snap(g.snap.snapRightBottom);break;case"center-bottom":n.snap(g.snap.snapCenterBottom);break;case"left-bottom":n.snap(g.snap.snapLeftBottom);break;case"left-center":n.snap(g.snap.snapLeftCenter);break}g.snap.callback&&n.snappableTo&&typeof g.snap.callback=="function"&&(g.snap.callback.call(n,n),g.snap.repositionOnSnap&&g.snap[W(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&g.snap.repositionOnSnap&&g.snap[W(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Le=n.parentElement;n.move(n.droppableTo),g.drop.callback&&g.drop.callback.call(n,n,n.droppableTo,Le)}if(document.dispatchEvent(fe),g.stop.length){let Le=window.getComputedStyle(n),Se={left:parseFloat(Le.left),top:parseFloat(Le.top),width:parseFloat(Le.width),height:parseFloat(Le.height)};j.processCallbacks(n,g.stop,!1,Se,He)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Le=>Le.style.pointerEvents="auto"),document.removeEventListener(He,en)}return n.querySelectorAll(Ye).forEach(He=>{He.style.touchAction="none",He.style.cursor=ct,j.pointerdown.forEach(Le=>{He.addEventListener(Le,Se=>{if(Se.button&&Se.button>0||(g=Object.assign({},j.defaults.dragit,m),g.disableOnMaximized&&n.status==="maximized"))return!1;if((g.containment||g.containment===0)&&(g.containment=j.pOcontainment(g.containment)),g.grid&&Array.isArray(g.grid)&&g.grid.length===1&&(g.grid[1]=g.grid[0]),g.snap&&(typeof g.snap=="object"?g.snap=Object.assign({},j.defaultSnapConfig,g.snap):g.snap=j.defaultSnapConfig),Se.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(tt=>tt.style.pointerEvents="none");let Re=window.getComputedStyle(n),Xe=parseFloat(Re.left),Te=parseFloat(Re.top),te=parseFloat(Re.width),Qe=parseFloat(Re.height),Be=Se.touches?Se.touches[0].clientX:Se.clientX,he=Se.touches?Se.touches[0].clientY:Se.clientY,ve=n.parentElement,_t=ve.getBoundingClientRect(),ue=window.getComputedStyle(ve),Je=n.getScaleFactor(),bn=0,Wt=j.getScrollbarWidth(ve);E=tt=>{if(tt.preventDefault(),!v){if(document.dispatchEvent(k),n.style.opacity=g.opacity,n.snapped&&g.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let se=n.getBoundingClientRect(),De=Be-(se.left+se.width),ge=se.width/2;De>-ge&&(bn=De+ge)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),g.drop&&g.drop.dropZones){let se=g.drop.dropZones.map(ge=>j.pOcontainer(ge)),De=[];se.forEach(function(ge){ge.length?ge.forEach(function(ze){De.push(ze)}):De.push(ge)}),De=De.filter(function(ge,ze,Ve){return Ve.indexOf(ge)===ze}),g.drop.dropZones=De}g.start.length&&j.processCallbacks(n,g.start,!1,{left:Xe,top:Te,width:te,height:Qe},tt)}v=1;let At,Fe,We,xt,it,Ae,_e,Pt,Ke,bt,dt=tt.touches?tt.touches[0].clientX:tt.clientX,st=tt.touches?tt.touches[0].clientY:tt.clientY,Me=window.getComputedStyle(n),de;if(ve===document.body){let se=n.getBoundingClientRect();Ke=window.innerWidth-parseInt(ue.borderLeftWidth,10)-parseInt(ue.borderRightWidth,10)-(se.left+se.width),bt=window.innerHeight-parseInt(ue.borderTopWidth,10)-parseInt(ue.borderBottomWidth,10)-(se.top+se.height)}else Ke=parseInt(ue.width,10)-parseInt(ue.borderLeftWidth,10)-parseInt(ue.borderRightWidth,10)-(parseInt(Me.left,10)+parseInt(Me.width,10)),bt=parseInt(ue.height,10)-parseInt(ue.borderTopWidth,10)-parseInt(ue.borderBottomWidth,10)-(parseInt(Me.top,10)+parseInt(Me.height,10));At=parseFloat(Me.left),We=parseFloat(Me.top),it=Ke,_e=bt,g.snap&&(g.snap.trigger==="panel"?(Fe=At**2,xt=We**2,Ae=it**2,Pt=_e**2):g.snap.trigger==="pointer"&&(n.options.container==="window"?(At=dt,We=st,it=window.innerWidth-dt,_e=window.innerHeight-st,Fe=dt**2,xt=We**2,Ae=it**2,Pt=_e**2):(de=n.overlaps(ve,"paddingbox",tt),At=de.pointer.left,We=de.pointer.top,it=de.pointer.right,_e=de.pointer.bottom,Fe=de.pointer.left**2,xt=de.pointer.top**2,Ae=de.pointer.right**2,Pt=de.pointer.bottom**2)));let Ze=Math.sqrt(Fe+xt),Q=Math.sqrt(Fe+Pt),ot=Math.sqrt(Ae+xt),pt=Math.sqrt(Ae+Pt),kt=Math.abs(At-it)/2,J=Math.abs(We-_e)/2,tn=Math.sqrt(Fe+J**2),cn=Math.sqrt(xt+kt**2),ht=Math.sqrt(Ae+J**2),yn=Math.sqrt(Pt+kt**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(ce),(!g.axis||g.axis==="x")&&(n.style.left=Xe+(dt-Be)/Je.x+bn+"px"),(!g.axis||g.axis==="y")&&(n.style.top=Te+(st-he)/Je.y+"px"),g.grid){let se=g.grid,De=g.axis,ge=se[0]*Math.round((Xe+(dt-Be))/se[0]),ze=se[1]*Math.round((Te+(st-he))/se[1]);(!De||De==="x")&&(n.style.left=`${ge}px`),(!De||De==="y")&&(n.style.top=`${ze}px`)}if(g.containment||g.containment===0){let se=g.containment,De,ge;if(n.options.container==="window")De=window.innerWidth-parseFloat(Me.width)-se[1]-Wt.y,ge=window.innerHeight-parseFloat(Me.height)-se[2]-Wt.x;else{let ze=parseFloat(ue.borderLeftWidth)+parseFloat(ue.borderRightWidth),Ve=parseFloat(ue.borderTopWidth)+parseFloat(ue.borderBottomWidth);De=_t.width/Je.x-parseFloat(Me.width)-se[1]-ze-Wt.y,ge=_t.height/Je.y-parseFloat(Me.height)-se[2]-Ve-Wt.x}parseFloat(n.style.left)<=se[3]&&(n.style.left=se[3]+"px"),parseFloat(n.style.top)<=se[0]&&(n.style.top=se[0]+"px"),parseFloat(n.style.left)>=De&&(n.style.left=De+"px"),parseFloat(n.style.top)>=ge&&(n.style.top=ge+"px")}if(g.drag.length){let se={left:At,top:We,right:it,bottom:_e,width:parseFloat(Me.width),height:parseFloat(Me.height)};j.processCallbacks(n,g.drag,!1,se,tt)}if(g.snap){let se=g.snap.sensitivity,De=ve===document.body?window.innerWidth/8:_t.width/8,ge=ve===document.body?window.innerHeight/8:_t.height/8;n.snappableTo=!1,j.removeSnapAreas(),Ze<se?g.snap.snapLeftTop!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="left-top",j.createSnapArea(n,"lt",se)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(de.pointer.left>0&&de.pointer.top>0?(n.snappableTo="left-top",j.createSnapArea(n,"lt",se)):(n.snappableTo=!1,j.removeSnapAreas()))):Q<se?g.snap.snapLeftBottom!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="left-bottom",j.createSnapArea(n,"lb",se)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(de.pointer.left>0&&de.pointer.bottom>0?(n.snappableTo="left-bottom",j.createSnapArea(n,"lb",se)):(n.snappableTo=!1,j.removeSnapAreas()))):ot<se?g.snap.snapRightTop!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="right-top",j.createSnapArea(n,"rt",se)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(de.pointer.right>0&&de.pointer.top>0?(n.snappableTo="right-top",j.createSnapArea(n,"rt",se)):(n.snappableTo=!1,j.removeSnapAreas()))):pt<se?g.snap.snapRightBottom!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="right-bottom",j.createSnapArea(n,"rb",se)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(de.pointer.right>0&&de.pointer.bottom>0?(n.snappableTo="right-bottom",j.createSnapArea(n,"rb",se)):(n.snappableTo=!1,j.removeSnapAreas()))):We<se&&cn<De?g.snap.snapCenterTop!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="center-top",j.createSnapArea(n,"ct",se)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(de.pointer.top>0?(n.snappableTo="center-top",j.createSnapArea(n,"ct",se)):(n.snappableTo=!1,j.removeSnapAreas()))):At<se&&tn<ge?g.snap.snapLeftCenter!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="left-center",j.createSnapArea(n,"lc",se)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(de.pointer.left>0?(n.snappableTo="left-center",j.createSnapArea(n,"lc",se)):(n.snappableTo=!1,j.removeSnapAreas()))):it<se&&ht<ge?g.snap.snapRightCenter!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="right-center",j.createSnapArea(n,"rc",se)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(de.pointer.right>0?(n.snappableTo="right-center",j.createSnapArea(n,"rc",se)):(n.snappableTo=!1,j.removeSnapAreas()))):_e<se&&yn<De&&g.snap.snapCenterBottom!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="center-bottom",j.createSnapArea(n,"cb",se)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(de.pointer.bottom>0?(n.snappableTo="center-bottom",j.createSnapArea(n,"cb",se)):(n.snappableTo=!1,j.removeSnapAreas())))}if(g.drop&&g.drop.dropZones){let se=j.isIE?"msElementsFromPoint":"elementsFromPoint",De=document[se](tt.clientX,tt.clientY);Array.isArray(De)||(De=Array.prototype.slice.call(De)),g.drop.dropZones.forEach(ge=>{De.includes(ge)&&(n.droppableTo=ge)}),De.includes(n.droppableTo)||(n.droppableTo=!1)}},j.pointermove.forEach(tt=>document.addEventListener(tt,E)),window.addEventListener("mouseout",Y,!1)})}),j.pointerup.forEach(Le=>{document.addEventListener(Le,en),window.removeEventListener("mouseout",Y)}),m.disable&&(He.style.pointerEvents="none")}),n},n.dragit=m=>{const v=Object.assign({},j.defaults.dragit,e.dragit),E=n.querySelectorAll(v.handles);return m==="disable"?E.forEach(g=>g.style.pointerEvents="none"):E.forEach(g=>g.style.pointerEvents="auto"),n},n.sizeit=(m={})=>{const v=new CustomEvent("jspanelresizestart",{detail:n.id}),E=new CustomEvent("jspanelresize",{detail:n.id}),g=new CustomEvent("jspanelresizestop",{detail:n.id});[v,E,g].forEach(Se=>Se.panel=n);let k={},ce,fe,W,Y,Ye,ct;k.handles=m.handles||j.defaults.resizeit.handles,k.handles.split(",").forEach(Se=>{const Re=document.createElement("DIV");Re.className=`jsPanel-resizeit-handle jsPanel-resizeit-${Se.trim()}`,n.append(Re)});let en=m.aspectRatio?m.aspectRatio:!1;function He(Se){Se.relatedTarget===null&&j.pointermove.forEach(Re=>document.removeEventListener(Re,ce,!1))}function Le(Se){if(j.pointermove.forEach(Re=>document.removeEventListener(Re,ce,!1)),Se.target.classList&&Se.target.classList.contains("jsPanel-resizeit-handle")){let Re,Xe,Te=Se.target.className;if(Te.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(Re=!0),Te.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Xe=!0),k.grid&&Array.isArray(k.grid)){k.grid.length===1&&(k.grid[1]=k.grid[0]);const te=parseFloat(n.style.width),Qe=parseFloat(n.style.height),Be=te%k.grid[0],he=Qe%k.grid[1],ve=parseFloat(n.style.left),_t=parseFloat(n.style.top),ue=ve%k.grid[0],Je=_t%k.grid[1];Be<k.grid[0]/2?n.style.width=te-Be+"px":n.style.width=te+(k.grid[0]-Be)+"px",he<k.grid[1]/2?n.style.height=Qe-he+"px":n.style.height=Qe+(k.grid[1]-he)+"px",Re&&(ue<k.grid[0]/2?n.style.left=ve-ue+"px":n.style.left=ve+(k.grid[0]-ue)+"px"),Xe&&(Je<k.grid[1]/2?n.style.top=_t-Je+"px":n.style.top=_t+(k.grid[1]-Je)+"px")}}if(fe){n.content.style.pointerEvents="inherit",fe=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let Re=n.controlbar.querySelector(".jsPanel-btn-smallify"),Xe=n.getBoundingClientRect();if(Re&&Xe.height>ct+5&&(Re.style.transform="rotate(0deg)"),document.dispatchEvent(g),k.stop.length){let Te=window.getComputedStyle(n),te={left:parseFloat(Te.left),top:parseFloat(Te.top),width:parseFloat(Te.width),height:parseFloat(Te.height)};j.processCallbacks(n,k.stop,!1,te,Se)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Re=>Re.style.pointerEvents="auto"),k.aspectRatio=en,document.removeEventListener(Se,Le)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(Se=>{Se.style.touchAction="none",j.pointerdown.forEach(Re=>{Se.addEventListener(Re,Xe=>{if(Xe.preventDefault(),Xe.stopPropagation(),Xe.button&&Xe.button>0)return!1;let Te=1;if(k=Object.assign({},j.defaults.resizeit,m),(k.containment||k.containment===0)&&(k.containment=j.pOcontainment(k.containment)),k.aspectRatio&&k.aspectRatio===!0&&(k.aspectRatio="panel"),j.modifier){let ge=j.modifier;ge.altKey?k.aspectRatio="content":ge.ctrlKey?k.aspectRatio="panel":ge.shiftKey&&(k.aspectRatio=!1,Te=2)}let te=typeof k.maxWidth=="function"?k.maxWidth():k.maxWidth||1e4,Qe=typeof k.maxHeight=="function"?k.maxHeight():k.maxHeight||1e4,Be=typeof k.minWidth=="function"?k.minWidth():k.minWidth,he=typeof k.minHeight=="function"?k.minHeight():k.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(ge=>ge.style.pointerEvents="none");const ve=n.parentElement,_t=ve.tagName.toLowerCase(),ue=n.getBoundingClientRect(),Je=ve.getBoundingClientRect(),bn=window.getComputedStyle(ve,null),Wt=parseInt(bn.borderLeftWidth,10),tt=parseInt(bn.borderTopWidth,10),At=bn.getPropertyValue("position"),Fe=Xe.clientX||Xe.clientX===0||Xe.touches[0].clientX,We=Xe.clientY||Xe.clientY===0||Xe.touches[0].clientY,xt=Fe/We,it=Xe.target.classList,Ae=n.getScaleFactor(),_e=ue.width/ue.height,Pt=n.content.getBoundingClientRect(),Ke=Pt.width/Pt.height,bt=n.header.getBoundingClientRect().height,dt=n.footer.getBoundingClientRect().height||0;let st=ue.left,Me=ue.top,de=1e4,Ze=1e4,Q=1e4,ot=1e4;Ye=ue.width,ct=ue.height,_t!=="body"&&(st=ue.left-Je.left+ve.scrollLeft,Me=ue.top-Je.top+ve.scrollTop),_t==="body"&&k.containment?(de=document.documentElement.clientWidth-ue.left,Q=document.documentElement.clientHeight-ue.top,Ze=ue.width+ue.left,ot=ue.height+ue.top):k.containment&&(At==="static"?(de=Je.width-ue.left+Wt,Q=Je.height+Je.top-ue.top+tt,Ze=ue.width+(ue.left-Je.left)-Wt,ot=ue.height+(ue.top-Je.top)-tt):(de=ve.clientWidth-(ue.left-Je.left)/Ae.x+Wt,Q=ve.clientHeight-(ue.top-Je.top)/Ae.y+tt,Ze=(ue.width+ue.left-Je.left)/Ae.x-Wt,ot=n.clientHeight+(ue.top-Je.top)/Ae.y-tt)),k.containment&&(Ze-=k.containment[3],ot-=k.containment[0],de-=k.containment[1],Q-=k.containment[2]);const pt=window.getComputedStyle(n),kt=parseFloat(pt.width)-ue.width,J=parseFloat(pt.height)-ue.height;let tn=parseFloat(pt.left)-ue.left,cn=parseFloat(pt.top)-ue.top;ve!==document.body&&(tn+=Je.left,cn+=Je.top);let ht=parseInt(pt.borderTopWidth,10),yn=parseInt(pt.borderRightWidth,10),se=parseInt(pt.borderBottomWidth,10),De=parseInt(pt.borderLeftWidth,10);ce=ge=>{ge.preventDefault(),fe||(document.dispatchEvent(v),k.start.length&&j.processCallbacks(n,k.start,!1,{width:Ye,height:ct,left:st,top:Me},ge),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),ue.height>ct+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),fe=1,document.dispatchEvent(E);let ze=ge.touches?ge.touches[0].clientX:ge.clientX,Ve=ge.touches?ge.touches[0].clientY:ge.clientY,Oe;it.contains("jsPanel-resizeit-e")?(W=Ye+(ze-Fe)*Te/Ae.x+kt,W>=de&&(W=de),W>=te&&(W=te),W<=Be&&(W=Be),n.style.width=W+"px",Te===2&&(n.style.left=st-(ze-Fe)+"px"),k.aspectRatio==="content"?(n.style.height=(W-yn-De)/Ke+bt+dt+ht+se+"px",k.containment&&(Oe=n.overlaps(ve),Oe.bottom<=k.containment[2]&&(n.style.height=Q+"px",n.style.width=Q*Ke+"px"))):k.aspectRatio==="panel"&&(n.style.height=W/_e+"px",k.containment&&(Oe=n.overlaps(ve),Oe.bottom<=k.containment[2]&&(n.style.height=Q+"px",n.style.width=Q*_e+"px")))):it.contains("jsPanel-resizeit-s")?(Y=ct+(Ve-We)*Te/Ae.y+J,Y>=Q&&(Y=Q),Y>=Qe&&(Y=Qe),Y<=he&&(Y=he),n.style.height=Y+"px",Te===2&&(n.style.top=Me-(Ve-We)+"px"),k.aspectRatio==="content"?(n.style.width=(Y-bt-dt-ht-se)*Ke+ht+se+"px",k.containment&&(Oe=n.overlaps(ve),Oe.right<=k.containment[1]&&(n.style.width=de+"px",n.style.height=de/Ke+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*_e+"px",k.containment&&(Oe=n.overlaps(ve),Oe.right<=k.containment[1]&&(n.style.width=de+"px",n.style.height=de/_e+"px")))):it.contains("jsPanel-resizeit-w")?(W=Ye+(Fe-ze)*Te/Ae.x+kt,W<=te&&W>=Be&&W<=Ze&&(n.style.left=st+(ze-Fe)/Ae.x+tn+"px"),W>=Ze&&(W=Ze),W>=te&&(W=te),W<=Be&&(W=Be),n.style.width=W+"px",k.aspectRatio==="content"?(n.style.height=(W-yn-De)/Ke+bt+dt+ht+se+"px",k.containment&&(Oe=n.overlaps(ve),Oe.bottom<=k.containment[2]&&(n.style.height=Q+"px",n.style.width=Q*Ke+"px"))):k.aspectRatio==="panel"&&(n.style.height=W/_e+"px",k.containment&&(Oe=n.overlaps(ve),Oe.bottom<=k.containment[2]&&(n.style.height=Q+"px",n.style.width=Q*_e+"px")))):it.contains("jsPanel-resizeit-n")?(Y=ct+(We-Ve)*Te/Ae.y+J,Y<=Qe&&Y>=he&&Y<=ot&&(n.style.top=Me+(Ve-We)/Ae.y+cn+"px"),Y>=ot&&(Y=ot),Y>=Qe&&(Y=Qe),Y<=he&&(Y=he),n.style.height=Y+"px",k.aspectRatio==="content"?(n.style.width=(Y-bt-dt-ht-se)*Ke+ht+se+"px",k.containment&&(Oe=n.overlaps(ve),Oe.right<=k.containment[1]&&(n.style.width=de+"px",n.style.height=de/Ke+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*_e+"px",k.containment&&(Oe=n.overlaps(ve),Oe.right<=k.containment[1]&&(n.style.width=de+"px",n.style.height=de/_e+"px")))):it.contains("jsPanel-resizeit-se")?(W=Ye+(ze-Fe)*Te/Ae.x+kt,W>=de&&(W=de),W>=te&&(W=te),W<=Be&&(W=Be),n.style.width=W+"px",Te===2&&(n.style.left=st-(ze-Fe)+"px"),k.aspectRatio&&(n.style.height=W/_e+"px"),Y=ct+(Ve-We)*Te/Ae.y+J,Y>=Q&&(Y=Q),Y>=Qe&&(Y=Qe),Y<=he&&(Y=he),n.style.height=Y+"px",Te===2&&(n.style.top=Me-(Ve-We)+"px"),k.aspectRatio==="content"?(n.style.width=(Y-bt-dt-ht-se)*Ke+ht+se+"px",k.containment&&(Oe=n.overlaps(ve),Oe.right<=k.containment[1]&&(n.style.width=de+"px",n.style.height=de/Ke+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*_e+"px",k.containment&&(Oe=n.overlaps(ve),Oe.right<=k.containment[1]&&(n.style.width=de+"px",n.style.height=de/_e+"px")))):it.contains("jsPanel-resizeit-sw")?(Y=ct+(Ve-We)*Te/Ae.y+J,Y>=Q&&(Y=Q),Y>=Qe&&(Y=Qe),Y<=he&&(Y=he),n.style.height=Y+"px",Te===2&&(n.style.top=Me-(Ve-We)+"px"),k.aspectRatio&&(n.style.width=Y*_e+"px"),W=Ye+(Fe-ze)*Te/Ae.x+kt,W<=te&&W>=Be&&W<=Ze&&(n.style.left=st+(ze-Fe)/Ae.x+tn+"px"),W>=Ze&&(W=Ze),W>=te&&(W=te),W<=Be&&(W=Be),n.style.width=W+"px",k.aspectRatio==="content"?(n.style.height=(W-yn-De)/Ke+bt+dt+ht+se+"px",k.containment&&(Oe=n.overlaps(ve),Oe.bottom<=k.containment[2]&&(n.style.height=Q+"px",n.style.width=Q*Ke+"px"))):k.aspectRatio==="panel"&&(n.style.height=W/_e+"px",k.containment&&(Oe=n.overlaps(ve),Oe.bottom<=k.containment[2]&&(n.style.height=Q+"px",n.style.width=Q*_e+"px")))):it.contains("jsPanel-resizeit-ne")?(W=Ye+(ze-Fe)*Te/Ae.x+kt,W>=de&&(W=de),W>=te&&(W=te),W<=Be&&(W=Be),n.style.width=W+"px",Te===2&&(n.style.left=st-(ze-Fe)+"px"),k.aspectRatio&&(n.style.height=W/_e+"px"),Y=ct+(We-Ve)*Te/Ae.y+J,Y<=Qe&&Y>=he&&Y<=ot&&(n.style.top=Me+(Ve-We)/Ae.y+cn+"px"),Y>=ot&&(Y=ot),Y>=Qe&&(Y=Qe),Y<=he&&(Y=he),n.style.height=Y+"px",k.aspectRatio==="content"?(n.style.width=(Y-bt-dt-ht-se)*Ke+ht+se+"px",k.containment&&(Oe=n.overlaps(ve),Oe.right<=k.containment[1]&&(n.style.width=de+"px",n.style.height=de/Ke+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*_e+"px",k.containment&&(Oe=n.overlaps(ve),Oe.right<=k.containment[1]&&(n.style.width=de+"px",n.style.height=de/_e+"px")))):it.contains("jsPanel-resizeit-nw")&&(k.aspectRatio&&it.contains("jsPanel-resizeit-nw")&&(ze=Ve*xt,Ve=ze/xt),W=Ye+(Fe-ze)*Te/Ae.x+kt,W<=te&&W>=Be&&W<=Ze&&(n.style.left=st+(ze-Fe)/Ae.x+tn+"px"),W>=Ze&&(W=Ze),W>=te&&(W=te),W<=Be&&(W=Be),n.style.width=W+"px",k.aspectRatio&&(n.style.height=W/_e+"px"),Y=ct+(We-Ve)*Te/Ae.y+J,Y<=Qe&&Y>=he&&Y<=ot&&(n.style.top=Me+(Ve-We)/Ae.y+cn+"px"),Y>=ot&&(Y=ot),Y>=Qe&&(Y=Qe),Y<=he&&(Y=he),n.style.height=Y+"px",k.aspectRatio==="content"?n.style.width=(Y-bt-dt-ht-se)*Ke+ht+se+"px":k.aspectRatio==="panel"&&(n.style.width=Y*_e+"px")),window.getSelection().removeAllRanges();const Kt=window.getComputedStyle(n),Ne={left:parseFloat(Kt.left),top:parseFloat(Kt.top),right:parseFloat(Kt.right),bottom:parseFloat(Kt.bottom),width:parseFloat(Kt.width),height:parseFloat(Kt.height)};k.resize.length&&j.processCallbacks(n,k.resize,!1,Ne,ge)},j.pointermove.forEach(ge=>document.addEventListener(ge,ce,!1)),window.addEventListener("mouseout",He,!1)})}),j.pointerup.forEach(function(Re){document.addEventListener(Re,Le),window.removeEventListener("mouseout",He)}),m.disable&&(Se.style.pointerEvents="none")}),n},n.resizeit=m=>{const v=n.querySelectorAll(".jsPanel-resizeit-handle");return m==="disable"?v.forEach(E=>E.style.pointerEvents="none"):v.forEach(E=>E.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const m=n.getBoundingClientRect();return{x:m.width/n.offsetWidth,y:m.height/n.offsetHeight}},n.calcSizeFactors=()=>{const m=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(m.left)/(window.innerWidth-parseFloat(m.width)),n.vf=parseFloat(m.top)/(window.innerHeight-parseFloat(m.height));else if(n.parentElement){let v=n.parentElement.getBoundingClientRect();n.hf=parseFloat(m.left)/(v.width-parseFloat(m.width)),n.vf=parseFloat(m.top)/(v.height-parseFloat(m.height))}},n.saveCurrentDimensions=()=>{const m=window.getComputedStyle(n);n.currentData.width=m.width,n.currentData.height=m.height},n.saveCurrentPosition=()=>{const m=window.getComputedStyle(n);n.currentData.left=m.left,n.currentData.top=m.top},n.reposition=(...m)=>{let v=e.position,E=!0,g;return m.forEach(k=>{typeof k=="string"||typeof k=="object"?v=k:typeof k=="boolean"?E=k:typeof k=="function"&&(g=k)}),j.position(n,v),n.slaves&&n.slaves.size>0&&n.slaves.forEach(k=>k.reposition()),E&&n.saveCurrentPosition(),g&&g.call(n,n),n},n.repositionOnSnap=m=>{let v="0",E="0",g=j.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(m){case"left-top":v=g[3],E=g[0];break;case"right-top":v=-g[1],E=g[0];break;case"right-bottom":v=-g[1],E=-g[2];break;case"left-bottom":v=g[3],E=-g[2];break;case"center-top":v=g[3]/2-g[1]/2,E=g[0];break;case"center-bottom":v=g[3]/2-g[1]/2,E=-g[2];break;case"left-center":v=g[3],E=g[0]/2-g[2]/2;break;case"right-center":v=-g[1],E=g[0]/2-g[2]/2;break}j.position(n,m),j.setStyles(n,{left:`calc(${n.style.left} + ${v}px)`,top:`calc(${n.style.top} + ${E}px)`})},n.overlaps=(m,v,E)=>{let g=n.getBoundingClientRect(),k=getComputedStyle(n.parentElement),ce=n.getScaleFactor(),fe={top:0,right:0,bottom:0,left:0},W,Y=0,Ye=0,ct=0,en=0;n.options.container!=="window"&&v==="paddingbox"&&(fe.top=parseInt(k.borderTopWidth,10)*ce.y,fe.right=parseInt(k.borderRightWidth,10)*ce.x,fe.bottom=parseInt(k.borderBottomWidth,10)*ce.y,fe.left=parseInt(k.borderLeftWidth,10)*ce.x),typeof m=="string"?m==="window"?W={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:m==="parent"?W=n.parentElement.getBoundingClientRect():W=document.querySelector(m).getBoundingClientRect():W=m.getBoundingClientRect(),E&&(Y=E.touches?E.touches[0].clientX:E.clientX,Ye=E.touches?E.touches[0].clientY:E.clientY,ct=Y-W.left,en=Ye-W.top);let He=g.left<W.right&&g.right>W.left,Le=g.top<W.bottom&&g.bottom>W.top;return{overlaps:He&&Le,top:g.top-W.top-fe.top,right:W.right-g.right-fe.right,bottom:W.bottom-g.bottom-fe.bottom,left:g.left-W.left-fe.left,parentBorderWidth:fe,panelRect:g,referenceRect:W,pointer:{clientX:Y,clientY:Ye,left:ct-fe.left,top:en-fe.top,right:W.width-ct-fe.right,bottom:W.height-en-fe.bottom}}},n.setSize=()=>{if(e.panelSize){const m=j.pOsize(n,e.panelSize);n.style.width=m.width,n.style.height=m.height}else if(e.contentSize){const m=j.pOsize(n,e.contentSize);n.content.style.width=m.width,n.content.style.height=m.height,n.style.width=m.width,n.content.style.width="100%"}return n},n.resize=(...m)=>{let v=window.getComputedStyle(n),E={width:v.width,height:v.height},g=!0,k;m.forEach(W=>{typeof W=="string"?E=W:typeof W=="object"?E=Object.assign(E,W):typeof W=="boolean"?g=W:typeof W=="function"&&(k=W)});let ce=j.pOsize(n,E);n.style.width=ce.width,n.style.height=ce.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(W=>W.reposition()),g&&n.saveCurrentDimensions(),n.status="normalized";let fe=n.controlbar.querySelector(".jsPanel-btn-smallify");return fe&&(fe.style.transform="rotate(0deg)"),k&&k.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=m=>{if(m.target===window){let v=n.status,E=e.onwindowresize,g,k;if(v==="maximized"&&E)n.maximize(!1,!0);else if(n.snapped&&v!=="minimized")n.snap(n.snapped,!0);else if(v==="normalized"||v==="smallified"||v==="maximized"){let ce=typeof E;ce==="boolean"?(g=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=g<=0?0:g+"px",k=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=k<=0?0:k+"px"):ce==="function"?E.call(n,m,n):ce==="object"&&(E.preset===!0&&(g=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=g<=0?0:g+"px",k=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=k<=0?0:k+"px"),E.callback.call(n,m,n))}else v==="smallifiedmax"&&E&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(ce=>ce.reposition())}},n.setControls=(m,v)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(E=>{const g=E.className.split("-"),k=g[g.length-1];n.getAttribute(`data-btn${k}`)!=="hidden"&&(E.style.display="block")}),m.forEach(E=>{const g=n.controlbar.querySelector(E);g&&(g.style.display="none")}),v&&v.call(n,n),n),n.setControlStatus=(m,v="enable",E)=>{const g=n.controlbar.querySelector(`.jsPanel-btn-${m}`);switch(v){case"disable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"disabled"),g.style.pointerEvents="none",g.style.opacity=.4,g.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"hidden"),g.style.display="none");break;case"show":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"enabled"),g.style.display="block",g.style.pointerEvents="auto",g.style.opacity=1,g.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.getAttribute(`data-btn${m}`)==="hidden"&&(g.style.display="block"),n.setAttribute(`data-btn${m}`,"enabled"),g.style.pointerEvents="auto",g.style.opacity=1,g.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(g),n.setAttribute(`data-btn${m}`,"removed");break}return E&&E.call(n,n),n},n.setControlSize=m=>{const v=m.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(g=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(k=>g.classList.remove(k)),g.classList.add(`jsPanel-btn-${v}`)}),v==="xl"?n.titlebar.style.fontSize="1.5rem":v==="lg"?n.titlebar.style.fontSize="1.25rem":v==="md"?n.titlebar.style.fontSize="1.05rem":v==="sm"?n.titlebar.style.fontSize=".9rem":v==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=m=>{if(n.options.headerControls.add){let k=n.options.headerControls.add;Array.isArray(k)||(k=[k]),k.forEach(ce=>n.addControl(ce))}let v=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(k=>{let ce=k.className.match(/jsPanel-btn-[a-z\d]{3,}/i),fe=ce[0].substring(12);v.push(fe)});const g=j.pOheaderControls(e.headerControls);return e.headerControls=g,v.forEach(k=>{g[k]&&n.setControlStatus(k,g[k])}),n.setControlSize(g.size),m&&m.call(n,n),n},n.setHeaderLogo=(m,v)=>{let E=[n.headerlogo],g=document.querySelector("#"+n.id+"-min");return g&&E.push(g.querySelector(".jsPanel-headerlogo")),typeof m=="string"?m.startsWith("<")?E.forEach(k=>k.innerHTML=m):E.forEach(k=>{j.emptyNode(k);let ce=document.createElement("img");ce.src=m,k.append(ce)}):E.forEach(k=>{j.emptyNode(k),k.append(m)}),n.headerlogo.childNodes.forEach(k=>{k.nodeName&&k.nodeName==="IMG"&&k.setAttribute("draggable","false")}),v&&v.call(n,n),n},n.setHeaderRemove=m=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(v=>n.setAttribute(`data-btn${v}`,"removed")),m&&m.call(n,n),n),n.setHeaderTitle=(m,v)=>{let E=[n.headertitle],g=document.querySelector("#"+n.id+"-min");return g&&E.push(g.querySelector(".jsPanel-title")),typeof m=="string"?E.forEach(k=>k.innerHTML=m):typeof m=="function"?E.forEach(k=>{j.emptyNode(k),k.innerHTML=m()}):E.forEach(k=>{j.emptyNode(k),k.append(m)}),v&&v.call(n,n),n},n.setIconfont=(m,v=n,E)=>{if(m){let g,k;if(m==="fa"||m==="far"||m==="fal"||m==="fas"||m==="fad")g=[`${m} fa-window-close`,`${m} fa-window-maximize`,`${m} fa-window-restore`,`${m} fa-window-minimize`,`${m} fa-chevron-up`];else if(m==="material-icons")g=[m,m,m,m,m,m],k=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(m))g=[`custom-control-icon ${m[4]}`,`custom-control-icon ${m[3]}`,`custom-control-icon ${m[2]}`,`custom-control-icon ${m[1]}`,`custom-control-icon ${m[0]}`];else if(m==="bootstrap"||m==="glyphicon")g=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return v;v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(ce=>j.emptyNode(ce).innerHTML="<span></span>"),Array.prototype.slice.call(v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((ce,fe)=>{ce.className=g[fe],m==="material-icons"&&(ce.textContent=k[fe])})}return E&&E.call(v,v),v},n.addToolbar=(m,v,E)=>{if(m==="header"?m=n.headertoolbar:m==="footer"&&(m=n.footer),typeof v=="string")m.innerHTML=v;else if(Array.isArray(v))v.forEach(g=>{typeof g=="string"?m.innerHTML+=g:m.append(g)});else if(typeof v=="function"){let g=v.call(n,n);typeof g=="string"?m.innerHTML=g:m.append(g)}else m.append(v);return m.classList.add("active"),E&&E.call(n,n),n},n.addCloseControl=()=>{let m=document.createElement("button"),v=n.content.style.color;return m.classList.add("jsPanel-addCloseCtrl"),m.innerHTML=j.icons.close,m.style.color=v,n.options.rtl&&m.classList.add("rtl"),n.appendChild(m),j.pointerup.forEach(E=>{m.addEventListener(E,g=>{if(g.preventDefault(),g.button&&g.button>0)return!1;n.close(null,!0)})}),j.pointerdown.forEach(E=>{m.addEventListener(E,g=>g.preventDefault())}),n},n.addControl=m=>{if(!m.html)return n;m.position||(m.position=1);const v=n.controlbar.querySelectorAll(".jsPanel-btn").length;let E=document.createElement("button");E.innerHTML=m.html,E.className=`jsPanel-btn jsPanel-btn-${m.name} jsPanel-btn-${e.headerControls.size}`,E.style.color=n.header.style.color,m.position>v?n.controlbar.append(E):n.controlbar.insertBefore(E,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${m.position})`));const g=m.ariaLabel||m.name;return g&&E.setAttribute("aria-label",g),j.pointerup.forEach(k=>{E.addEventListener(k,ce=>{if(ce.preventDefault(),ce.button&&ce.button>0)return!1;m.handler.call(n,n,E)})}),m.afterInsert&&m.afterInsert.call(E,E),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(m=>{m.dir="rtl",e.rtl.lang&&(m.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),i.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),j.isIE){let m=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":m.forEach(v=>{v.style.height="34px"});break;case"xs":m.forEach(v=>{v.style.height="26px"});break;case"sm":m.forEach(v=>{v.style.height="30px"});break;case"lg":m.forEach(v=>{v.style.height="38px"});break;case"xl":m.forEach(v=>{v.style.height="42px"});break}}if(e.header==="auto-show-hide"){let m="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,m),this.setClass(n.content,m),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,j.setClass(n,m),j.remClass(n.content,m)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,j.remClass(n,m),j.setClass(n.content,m)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[m,v]of Object.entries(e.css))if(m==="panel")n.className+=` ${v}`;else{let E=n.querySelector(`.jsPanel-${m}`);E&&(E.className+=` ${v}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const m=e.contentOverflow.split(" ");m.length===1?n.content.style.overflow=m[0]:m.length===2&&(n.content.style.overflowX=m[0],n.content.style.overflowY=m[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let m=Object.assign({},j.defaultAutocloseConfig,e.autoclose);m.time&&typeof m.time=="number"&&(m.time+="ms");let v=n.progressbar.querySelector("div");v.addEventListener("animationend",E=>{E.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),m.progressbar&&(n.progressbar.classList.add("active"),m.background?j.colorNames[m.background]?n.progressbar.style.background="#"+j.colorNames[m.background]:n.progressbar.style.background=m.background:n.progressbar.classList.add("success-bg")),v.style.animation=`${m.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(h),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let m=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=m,e.dragit.snap===!0?(e.dragit.snap=j.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=m)}if(e.dragit?(["start","drag","stop"].forEach(m=>{e.dragit[m]?typeof e.dragit[m]=="function"&&(e.dragit[m]=[e.dragit[m]]):e.dragit[m]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",m=>{m.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(v=>{e.resizeit[v]?typeof e.resizeit[v]=="function"&&(e.resizeit[v]=[e.resizeit[v]]):e.resizeit[v]=[]}),n.sizeit(e.resizeit);let m;n.addEventListener("jspanelresizestart",v=>{v.panel===n&&(m=n.status)},!1),n.addEventListener("jspanelresizestop",v=>{v.panel===n&&(m==="smallified"||m==="smallifiedmax"||m==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(h),document.dispatchEvent(l),e.onstatuschange&&j.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(m=>{n.addEventListener(m,v=>{!v.target.closest(".jsPanel-btn-close")&&!v.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let m=e.onparentresize,v=typeof m,E=n.isChildpanel();if(E){const g=E.content;let k=[];n.parentResizeHandler=ce=>{if(ce.panel===E){k[0]=g.offsetWidth,k[1]=g.offsetHeight;let fe=n.status,W,Y;fe==="maximized"&&m?n.maximize():n.snapped&&fe!=="minimized"?n.snap(n.snapped,!0):fe==="normalized"||fe==="smallified"||fe==="maximized"?v==="function"?m.call(n,n,{width:k[0],height:k[1]}):v==="object"&&m.preset===!0?(W=(k[0]-n.offsetWidth)*n.hf,n.style.left=W<=0?0:W+"px",Y=(k[1]-n.offsetHeight)*n.vf,n.style.top=Y<=0?0:Y+"px",m.callback.call(n,n,{width:k[0],height:k[1]})):v==="boolean"&&(W=(k[0]-n.offsetWidth)*n.hf,n.style.left=W<=0?0:W+"px",Y=(k[1]-n.offsetHeight)*n.vf,n.style.top=Y<=0?0:Y+"px"):fe==="smallifiedmax"&&m&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(m=>m.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(m=>m.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(m=>m.call(n,n)):t.call(n,n)),document.dispatchEvent(o),n}};var hp=Object.defineProperty,fp=Object.getOwnPropertyDescriptor,Us=(e,t,r,i)=>{for(var n=i>1?void 0:i?fp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&hp(t,r,n),n};function pp(e,t){(an.instance??mp()).show(e,t)}function mp(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let an=class extends Ue{constructor(){super(...arguments),this.name="",this.info=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close()}connectedCallback(){super.connectedCallback(),an.instance=this}disconnectedCallback(){super.disconnectedCallback(),an.instance===this&&(an.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Qt(this.dialogEl,e)}show(e,t){this.name=e,this.info=t,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,r){if(!t&&!r)return me;const i=r?L`<a href=${r} target="_blank" rel="noopener noreferrer">${t||r}</a>`:L`${t}`;return L`<dt>${e}</dt>
      <dd>${i}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl);return L`
      <dialog @cancel=${this.close}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <div class="dialog-header">
          <h2>${this.name}</h2>
          <div class="header-actions">
            <button type="button" class="ghost" @click=${this.close}>Close</button>
          </div>
        </div>
        <div class="dialog-body">
          ${e?.descriptionHtml?L`<div class="desc">${oi(e.descriptionHtml)}</div>`:e?.description?L`<div class="desc">${e.description}</div>`:me}
          ${t?L`<dl>
                ${this.row("Source",e?.source,e?.sourceUrl)}
                ${this.row("License",e?.license,e?.licenseUrl)}
                ${this.row("About",e?.about,e?.aboutUrl)}
              </dl>`:me}
          ${!e?.description&&!e?.descriptionHtml&&!t?L`<p class="empty">No additional information.</p>`:me}
        </div>
      </dialog>
    `}};an.instance=null;an.styles=[Xt,et`
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
    `];Us([K()],an.prototype,"name",2);Us([K()],an.prototype,"info",2);an=Us([rt("table-info-dialog")],an);const gp=.25,bp=4;function yp(e){return Math.min(bp,Math.max(gp,e))}function ma(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const yr={x:0,y:0,scale:1};function ga(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function wp(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function vp(e,t){let r={...yr};t.style.transformOrigin="0 0";const i=new Set,n=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`;for(const v of i)v({...r})};let o="none",l={...yr},u=0,h=0,b=0,C=0,w=0,A=0;const H=(v,E)=>{const g=e.getBoundingClientRect();return{x:v-g.left,y:E-g.top}},U=v=>{if(v.touches.length===2){o="pinch",l={...r};const[E,g]=[v.touches[0],v.touches[1]];b=ga(E,g)||1;const k=H((E.clientX+g.clientX)/2,(E.clientY+g.clientY)/2);C=(k.x-r.x)/r.scale,w=(k.y-r.y)/r.scale,v.preventDefault();return}if(v.touches.length===1&&!wp(v.target)){const E=v.timeStamp;if(E-A<300){r={...yr},n(),A=0,o="none",v.preventDefault();return}A=E,o="pan",l={...r},u=v.touches[0].clientX,h=v.touches[0].clientY}else o="none"},F=v=>{if(o==="pan"&&v.touches.length===1){const E=v.touches[0];r=ma(l,E.clientX-u,E.clientY-h),n(),v.preventDefault()}else if(o==="pinch"&&v.touches.length>=2){const[E,g]=[v.touches[0],v.touches[1]],k=yp(l.scale*(ga(E,g)/b)),ce=H((E.clientX+g.clientX)/2,(E.clientY+g.clientY)/2);r={x:ce.x-C*k,y:ce.y-w*k,scale:k},n(),v.preventDefault()}},N=v=>{v.touches.length===0?o="none":v.touches.length===1&&o==="pinch"&&(o="pan",l={...r},u=v.touches[0].clientX,h=v.touches[0].clientY)};let oe=!1,le={...yr},ke=0,re=0,ie=!1;const pe=(v,E)=>{const g=e.getBoundingClientRect();return v>=g.left&&v<=g.right&&E>=g.top&&E<=g.bottom},xe=v=>{if(!oe)return;const E=v.clientX-ke,g=v.clientY-re;!ie&&Math.hypot(E,g)<4||(ie=!0,document.body.style.cursor="grabbing",r=ma(le,E,g),n(),v.preventDefault())},Ie=()=>{oe&&(oe=!1,document.body.style.cursor="",window.removeEventListener("mousemove",xe,!0),window.removeEventListener("mouseup",qe,!0))};function qe(){Ie()}const $e=v=>{v.button===2&&pe(v.clientX,v.clientY)&&(oe=!0,ie=!1,le={...r},ke=v.clientX,re=v.clientY,window.addEventListener("mousemove",xe,!0),window.addEventListener("mouseup",qe,!0))},m=v=>{ie&&(v.preventDefault(),ie=!1)};return e.addEventListener("touchstart",U,{passive:!1}),e.addEventListener("touchmove",F,{passive:!1}),e.addEventListener("touchend",N),e.addEventListener("touchcancel",N),window.addEventListener("mousedown",$e,!0),window.addEventListener("contextmenu",m,!0),{snapshot:()=>({...r}),reset:()=>{r={...yr},n()},restore:v=>{r={...v},n()},subscribe:v=>(i.add(v),()=>i.delete(v)),dispose:()=>{e.removeEventListener("touchstart",U),e.removeEventListener("touchmove",F),e.removeEventListener("touchend",N),e.removeEventListener("touchcancel",N),window.removeEventListener("mousedown",$e,!0),window.removeEventListener("contextmenu",m,!0),Ie()}}}function El(e,t){let r=null;const i=n=>{const o=document.getElementById(e);o&&(o.style.transformOrigin="0 0",o.style.transform=`translate(${-n.x/n.scale}px, ${-n.y/n.scale}px) scale(${1/n.scale})`)};return{enter(){const n=t();r||!n||(i(n.snapshot()),r=n.subscribe(i))},exit(){r?.(),r=null;const n=document.getElementById(e);n&&(n.style.transform="",n.style.transformOrigin="")}}}const xp=200,$p=100;function kp(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<xp||e.h<$p?null:{...e}}var Cp=Object.defineProperty,Ep=Object.getOwnPropertyDescriptor,Ir=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ep(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Cp(t,r,n),n};let Hn=class extends Ue{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return L`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return L`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};Hn.styles=[ln,et`
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
    `];Ir([Nt({type:String})],Hn.prototype,"tableId",2);Ir([K()],Hn.prototype,"query",2);Ir([K()],Hn.prototype,"open",2);Ir([rr("input")],Hn.prototype,"inputEl",2);Hn=Ir([rt("panel-search")],Hn);var Sp=Object.defineProperty,_p=Object.getOwnPropertyDescriptor,ar=(e,t,r,i)=>{for(var n=i>1?void 0:i?_p(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Sp(t,r,n),n};let Pn=class extends Ue{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const r=t?.currentTarget??void 0,i=await we();try{await Promise.resolve(e.onClick(i.api,{tableId:this.tableId,anchor:r}))}catch(n){console.error(`[table-button:${e.id}]`,n)}}}async connectedCallback(){super.connectedCallback();const e=await we();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(r=>r.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await we();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await we(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const i of t.columns)r[i.field]=Ap(i);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}render(){return L`
      <button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
        <span class="mi sm">add</span>
      </button>
      <button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>L`<button
              class=${e.danger?"danger":""}
              title=${e.tooltip??e.label}
              aria-label=${e.label}
              @click=${t=>this.runTableButton(e,t)}
            >
              ${e.icon?e.icon.trimStart().startsWith("<svg")?L`<span class="icon-svg">${Ia(e.icon)}</span>`:L`<span class="mi sm">${e.icon}</span>`:L`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Pn.styles=[ln,et`
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
    `];ar([Nt({type:String})],Pn.prototype,"tableId",2);ar([Nt({type:Boolean})],Pn.prototype,"active",2);ar([K()],Pn.prototype,"rowCount",2);ar([K()],Pn.prototype,"tableButtons",2);ar([K()],Pn.prototype,"table",2);Pn=ar([rt("panel-footer")],Pn);function Ap(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function Pp(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Tp(e){const t=document.querySelector("app-shell")?.shadowRoot,r=t?.querySelector("header"),i=t?.querySelector("footer");r&&(e.style.top=`${r.offsetHeight}px`),i&&(e.style.bottom=`${i.offsetHeight}px`)}const Mn=new Map,li=new Set,Sl=new Set;let ba=!1,qs=null;function Dp(){return qs}async function Ip(){if(ba)return;ba=!0;const e=await we(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");if(t&&r){qs=vp(t,r);const n=()=>Tp(t);n(),window.addEventListener("resize",n);const o=document.querySelector("app-shell")?.shadowRoot,l=o?.querySelector("header"),u=o?.querySelector("footer");if(typeof ResizeObserver<"u"&&(l||u)){const h=new ResizeObserver(n);l&&h.observe(l),u&&h.observe(u)}}const i=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);i.sort(ya);for(const n of i)wa(n,e);e.store.tables.subscribe(n=>{const o=n.filter(h=>h.workspaceId===e.workspaceId),l=new Set(o.map(h=>h.id));for(const[h,b]of Mn)if(!l.has(h)){Mn.delete(h),li.add(h),Sl.add(h);try{b.status!=="closed"&&b.close()}catch{}}const u=o.filter(h=>!Mn.has(h.id)).sort(ya);for(const h of u)wa(h,e)})}function ya(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const Rp=720,Op=360;function wa(e,t){const r=`panel-${_l(e.id)}`,i=Pp(),n=kp(e.windowGeometry),o=n?.minimized===!0,l=()=>{const E=document.createElement("data-table");return E.tableId=e.id,E.style.height="100%",E},u=o?document.createElement("div"):l();let h=o?null:u,b=e.name,C=-1,w=-1;const A=()=>{typeof ie.setHeaderTitle=="function"&&ie.setHeaderTitle(b+Za(C,w))},H=E=>{const g=E.detail;g.key===e.id&&(C=g.count,w=g.total,A())};document.addEventListener(gi,H);const U=()=>{oe.active=!1,h?.remove(),h=null},F=()=>{if(h)return;const E=document.getElementById(r)?.querySelector(".jsPanel-content");if(!E)return;E.replaceChildren();const g=l();E.appendChild(g),h=g,oe.active=!0},N=document.createElement("panel-search");N.tableId=e.id;const oe=document.createElement("panel-footer");oe.tableId=e.id,oe.active=!o;const le=El(r,()=>qs),ke=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:Fp(),re=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:`${Rp} ${Op}`},ie=j.create({id:r,container:i,headerTitle:e.name,footerToolbar:oe,theme:"primary",content:u,...re,position:ke,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>cs(e.id,t)},resizeit:{containment:!1,stop:()=>cs(e.id,t)},onfronted:()=>zp(e.id,t),onbeforeclose:()=>li.has(e.id)?!0:((async()=>await t.api.ui.dialogs.confirm(e.source?`Remove the live table "${e.name}"? Its data stays on the Datasette server.`:`Delete table "${e.name}" and all its rows?`,"Confirm")&&(li.add(e.id),Mn.get(e.id)?.close()))(),!1),onclosed:async()=>{Mn.delete(e.id),li.delete(e.id),!Sl.delete(e.id)&&await Lp(e.id,t)},onstatuschange:E=>{E.status==="minimized"?U():(E.status==="normalized"||E.status==="maximized")&&F(),E.status==="maximized"?le.enter():le.exit(),cs(e.id,t)}});Mn.set(e.id,ie);const pe=document.getElementById(r),xe=pe?.querySelector(".jsPanel-controlbar");xe&&xe.prepend(N);const Ie=pe?.querySelector(".jsPanel-titlebar");Ie&&(Ie.tabIndex=-1,Ie.style.outline="none",Ie.addEventListener("pointerdown",()=>Ie.focus()));let qe=null;const $e=document.createElement("button");$e.type="button",$e.title="Table info",$e.setAttribute("aria-label","Table info"),$e.className="eda-info-btn",$e.textContent="ⓘ",$e.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",$e.addEventListener("click",E=>{E.stopPropagation(),qe&&pp(b,qe)}),xe?.prepend($e);const m=E=>{qe=E?.info??null,$e.style.display=qe?"inline-flex":"none"};m(e),n?.maximized&&typeof ie.maximize=="function"?queueMicrotask(()=>ie.maximize?.()):n?.minimized&&typeof ie.minimize=="function"&&queueMicrotask(()=>ie.minimize?.()),t.store.tables.subscribe(E=>{const g=E.find(k=>k.id===e.id);g&&(m(g),g.name!==b&&(b=g.name,A()))});const v=ie.close.bind(ie);ie.close=()=>(document.removeEventListener(gi,H),v())}let jp=0;function Fp(){const e=jp++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function cs(e,t){const r=document.getElementById(`panel-${_l(e)}`);if(!r)return;const i=Mn.get(e)?.status??"normalized";try{const o=(await t.store.tables.findOne(e))?.windowGeometry,l=i==="minimized",u=i==="maximized";let h=r.offsetLeft,b=r.offsetTop,C=r.offsetWidth,w=r.offsetHeight;(l||u)&&o&&(h=o.x,b=o.y,C=o.w,w=o.h),h<=-9e3&&(h=o?.x??40);const A={x:h,y:b,w:C,h:w,z:o?.z??0,minimized:l,maximized:u};await t.store.tables.patch(e,{windowGeometry:A,updatedAt:Date.now()})}catch{}}async function zp(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const i=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...i,z:Date.now()},updatedAt:Date.now()})}catch{}}async function Lp(e,t){if(!(await t.store.tables.findOne(e))?.source){const i=t.store.rows(e),n=await i.find();await i.bulkRemove(n.map(o=>o.id))}await t.store.tables.remove(e)}function _l(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var Bp=Object.defineProperty,Mp=Object.getOwnPropertyDescriptor,Ht=(e,t,r,i)=>{for(var n=i>1?void 0:i?Mp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Bp(t,r,n),n};let St=class extends Ue{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await we(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const r=await e.store.tables.findOne(t.tableId);this.tableColumns=r?.columns??[],r&&t.tableName!==r.name&&e.store.viewInstances.patch(t.id,{tableName:r.name});const i=new Map(this.tableColumns.map(o=>[o.field,o]));this.columns=t.visibleColumns.map(o=>i.get(o)??{field:o,label:o,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(o=>{const l=o.find(u=>u.id===this.viewInstanceId);if(l){if(l.tableId!==this.instance?.tableId){this.instance=l,this.reload();return}this.instance=l,this.recompute()}});const n=e.store.rows(t.tableId);this.rowsUnsub=n.subscribe(o=>{this.allRows=o,this.recompute()}),this.allRows=await n.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;let e=_f(this.allRows,this.instance);const t=(n,o)=>Object.values(n.data).some(l=>l!=null&&String(l).toLowerCase().includes(o)),r=this.searchQuery.trim(),i=this.globalQuery.trim();r&&(e=mi(e,r,t)),i&&(e=mi(e,i,t)),this.rows=e,this.templateOn&&Ja(this.viewInstanceId,e.length,this.allRows.length)}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await we()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||vs(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&vs(this.instance.tableId,{editInstanceId:this.instance.id})}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,i=t.includes(e)?t.filter(o=>o!==e):[...t,e];if(i.length===0)return;await(await we()).store.viewInstances.patch(this.instance.id,{visibleColumns:i,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:i}}renderTable(){return this.rows.length===0?L`<div class="vw-empty">No rows.</div>`:L`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>L`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>L`<tr>
                ${this.columns.map(t=>{const r=e.data[t.field];return L`<td>${r==null?"":String(r)}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}renderTemplated(){const e=this.template;if(!e)return L`<div class="vw-empty">This view's template is missing.</div>`;if(Af(e.rowHtml)){const t=this.instance?.mapping??{},r=this.rows.map(n=>Cf(e.rowHtml,n,t)).join(""),i=(e.headerHtml??"")+r+(e.footerHtml??"");return L`<div class="vw-root">${oi(i)}</div>`}return L`<div class="vw-root">
      ${e.headerHtml?.trim()?L`<div class="vw-html">${oi(e.headerHtml)}</div>`:me}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?L`<div class="vw-html">${oi(e.footerHtml)}</div>`:me}
    </div>`}renderFooter(){if(!this.instance)return me;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return L`<div class="vw-footer">
      ${!e&&this.showColsMenu?L`<div class="cols-menu">
            ${this.tableColumns.map(r=>L`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(r.field)}
                    @change=${()=>void this.toggleColumn(r.field)}
                  />${r.label||r.field}</label
                >`)}
          </div>`:me}
      ${e?me:L`<button
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
      ${this.template?L`<button
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
    </div>`}render(){if(!this.loaded)return L`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return L`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const t=this.templateOn?L`<div class="vw-body scroll">${this.renderTemplated()}</div>`:L`<div class="vw-body grid">
          <data-table
            .tableId=${this.instance?.tableId??""}
            .viewInstanceId=${this.viewInstanceId}
          ></data-table>
        </div>`;return L`${t}${this.renderFooter()}`}};St.styles=[ln,et`
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
    `];Ht([Nt({type:String})],St.prototype,"viewInstanceId",2);Ht([K()],St.prototype,"loaded",2);Ht([K()],St.prototype,"error",2);Ht([K()],St.prototype,"instance",2);Ht([K()],St.prototype,"template",2);Ht([K()],St.prototype,"columns",2);Ht([K()],St.prototype,"tableColumns",2);Ht([K()],St.prototype,"rows",2);Ht([K()],St.prototype,"showColsMenu",2);Ht([K()],St.prototype,"searchQuery",2);Ht([K()],St.prototype,"globalQuery",2);St=Ht([rt("view-window")],St);const Vt=new Map;let va=!1;function xa(e){e.panel.setHeaderTitle?.(e.name+Za(e.count,e.total))}function Np(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Up(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Al(e){return`view-panel-${Up(e)}`}async function qp(){if(va)return;va=!0;const e=await we(),t=r=>r.filter(i=>i.workspaceId===e.workspaceId&&i.open);for(const r of t(await e.store.viewInstances.find()))$a(r,e);e.store.viewInstances.subscribe(r=>{const i=new Map(t(r).map(n=>[n.id,n]));for(const n of[...Vt.keys()])i.has(n)||Wp(n);for(const[n,o]of i)Vt.has(n)||$a(o,e)}),e.store.tables.subscribe(r=>void Hp(e,r)),document.addEventListener(gi,r=>{const i=r.detail,n=Vt.get(i.key);n&&(n.count=i.count,n.total=i.total,xa(n))}),document.addEventListener("easydb:reload-view",r=>{const i=r.detail?.instanceId;if(!i)return;const n=Vt.get(i);n&&(async()=>{const o=await e.store.viewInstances.findOne(i);o&&(n.name=o.name,xa(n)),n.el.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of Vt.values())r.reload()})}async function Hp(e,t){const r=t.filter(l=>l.workspaceId===e.workspaceId),i=new Set(r.map(l=>l.id)),n=new Map;for(const l of r)n.has(l.name)||n.set(l.name,l);const o=await e.store.viewInstances.find();for(const l of o){if(l.workspaceId!==e.workspaceId||i.has(l.tableId)||!l.tableName)continue;const u=n.get(l.tableName);u&&await e.store.viewInstances.patch(l.id,{tableId:u.id,updatedAt:Date.now()})}}function $a(e,t){if(Vt.has(e.id))return;const r=Al(e.id),i=document.createElement("view-window");i.viewInstanceId=e.id,i.style.height="100%";const n=e.windowGeometry,o=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:"480 520"},l=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:{my:"center-top",at:"center-top",offsetY:60},u=El(r,Dp),h=j.create({id:r,container:Np(),headerTitle:e.name,theme:"#0891b2",content:i,...o,position:l,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>void us(e.id)},resizeit:{containment:!1,stop:()=>void us(e.id)},onstatuschange:A=>{A.status==="maximized"?u.enter():u.exit(),us(e.id)},onclosed:()=>{Vt.delete(e.id),u.exit(),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});Vt.set(e.id,{panel:h,el:i,name:e.name,count:-1,total:-1});const b=document.getElementById(r),C=document.createElement("panel-search");C.tableId=e.id,b?.querySelector(".jsPanel-controlbar")?.prepend(C);const w=b?.querySelector(".jsPanel-titlebar");w&&(w.tabIndex=-1,w.style.outline="none",w.addEventListener("pointerdown",()=>w.focus())),n?.maximized?queueMicrotask(()=>h.maximize?.()):n?.minimized&&queueMicrotask(()=>h.minimize?.())}function Wp(e){const t=Vt.get(e);if(t){Vt.delete(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}async function us(e){const t=document.getElementById(Al(e)),r=Vt.get(e);if(!t||!r)return;const i=r.panel.status,n=i==="minimized",o=i==="maximized";try{const l=await we(),u=(await l.store.viewInstances.findOne(e))?.windowGeometry;let h=t.offsetLeft,b=t.offsetTop,C=t.offsetWidth,w=t.offsetHeight;(n||o)&&u&&(h=u.x,b=u.y,C=u.w,w=u.h),h<=-9e3&&(h=u?.x??40);const A={x:h,y:b,w:C,h:w,z:0,minimized:n,maximized:o};await l.store.viewInstances.patch(e,{windowGeometry:A,updatedAt:Date.now()})}catch{}}var Kp=Object.defineProperty,Vp=Object.getOwnPropertyDescriptor,Pl=(e,t,r,i)=>{for(var n=i>1?void 0:i?Vp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Kp(t,r,n),n};let yi=class extends Ue{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await we();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(i=>i.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await Ip(),await qp()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?L``:L`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};yi.styles=et`
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
  `;Pl([K()],yi.prototype,"tables",2);yi=Pl([rt("table-list")],yi);var Gp=Object.defineProperty,Yp=Object.getOwnPropertyDescriptor,Hs=(e,t,r,i)=>{for(var n=i>1?void 0:i?Yp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Gp(t,r,n),n};let Cr=class extends Ue{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await we();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const i=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(i)}async addWorkspace(){const t=await(await we()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return L`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>L`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};Cr.styles=[ln,et`
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
  `];Hs([K()],Cr.prototype,"workspaces",2);Hs([K()],Cr.prototype,"current",2);Cr=Hs([rt("workspace-selector")],Cr);var ka=Object.freeze,Tl=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,gn=(e,t,r,i)=>{for(var n=i>1?void 0:i?Xp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Tl(t,r,n),n},Qp=(e,t)=>ka(Tl(e,"raw",{value:ka(e.slice())})),Ca;function Jp(e){return e?e.trimStart().startsWith("<svg")?L`<span class="icon-svg">${Ia(e)}</span>`:L`<span class="mi sm">${e}</span>`:""}let Yt=class extends Ue{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{Ea(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!Ea(e))return;e.preventDefault();const t=await we(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const i of[...t.registries.dropHandlers])try{if(await i(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=e=>{this.api&&Promise.resolve(e.onClick(this.api)).catch(t=>{console.error(`[footer-button:${e.id}]`,t)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager)}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await we();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e))}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){const r=t==="header"||e.variant==="primary"?"primary":"slot";return L`
      <button class=${r} title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
        ${Jp(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return L(Ca||(Ca=Qp([`
      <header>
        <strong>easyDBAccess <span class="version">v0.0.98</span></strong>
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
    `])),this.headerButtons.map(e=>this.renderSlotButton(e,"header")),this.searchOpen?L`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?L`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:L`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              @click=${this.openSearch}
            >
              <span class="mi">search</span>
            </button>`,this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Yt.styles=[ln,et`
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
    `];gn([rr("new-table-dialog")],Yt.prototype,"dialog",2);gn([rr("csv-paste-dialog")],Yt.prototype,"csvPasteDialog",2);gn([rr("plugin-manager-dialog")],Yt.prototype,"pluginManagerDialog",2);gn([rr("input.search")],Yt.prototype,"searchInput",2);gn([K()],Yt.prototype,"footerButtons",2);gn([K()],Yt.prototype,"headerButtons",2);gn([K()],Yt.prototype,"searchQuery",2);gn([K()],Yt.prototype,"searchOpen",2);Yt=gn([rt("app-shell")],Yt);function Ea(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([we(),Sn(()=>Promise.resolve().then(()=>vl),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{et as a,L as b,ln as c,Xt as d,Ue as i,Qt as m,K as r,rt as t};
//# sourceMappingURL=index-B-yWu3mp.js.map
