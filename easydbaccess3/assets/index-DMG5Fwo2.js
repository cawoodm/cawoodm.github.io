(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const wb="modulepreload",yb=function(e){return"/easydbaccess3/"+e},Du={},Ae=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let o=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");i=o(n.map(d=>{if(d=yb(d),d in Du)return;Du[d]=!0;const f=d.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const b=document.createElement("link");if(b.rel=f?"stylesheet":wb,f||(b.as="script"),b.crossOrigin="",b.href=d,c&&b.setAttribute("nonce",c),document.head.appendChild(b),f)return new Promise((y,k)=>{b.addEventListener("load",y),b.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ss=globalThis,Rl=Ss.ShadowRoot&&(Ss.ShadyCSS===void 0||Ss.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ol=Symbol(),Lu=new WeakMap;let Gh=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Ol)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Rl&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Lu.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Lu.set(n,t))}return t}toString(){return this.cssText}};const vb=e=>new Gh(typeof e=="string"?e:e+"",void 0,Ol),Se=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new Gh(n,e,Ol)},kb=(e,t)=>{if(Rl)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=Ss.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},Mu=Rl?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return vb(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$b,defineProperty:xb,getOwnPropertyDescriptor:Sb,getOwnPropertyNames:Cb,getOwnPropertySymbols:_b,getPrototypeOf:Eb}=Object,so=globalThis,Pu=so.trustedTypes,Tb=Pu?Pu.emptyScript:"",Ib=so.reactiveElementPolyfillSupport,ri=(e,t)=>e,zs={toAttribute(e,t){switch(t){case Boolean:e=e?Tb:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Dl=(e,t)=>!$b(e,t),zu={attribute:!0,type:String,converter:zs,reflect:!1,useDefault:!1,hasChanged:Dl};Symbol.metadata??=Symbol("metadata"),so.litPropertyMetadata??=new WeakMap;let nr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=zu){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&xb(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:s}=Sb(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get:i,set(o){const a=i?.call(this);s?.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??zu}static _$Ei(){if(this.hasOwnProperty(ri("elementProperties")))return;const t=Eb(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ri("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ri("properties"))){const n=this.properties,r=[...Cb(n),..._b(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(Mu(i))}else t!==void 0&&n.push(Mu(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return kb(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:zs).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:zs;this._$Em=i;const a=o.fromAttribute(n,s.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,n,r,i=!1,s){if(t!==void 0){const o=this.constructor;if(i===!1&&(s=this[t]),r??=o.getPropertyOptions(t),!((r.hasChanged??Dl)(s,n)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:i,wrapped:s},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??n??this[t]),s!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r){const{wrapped:o}=s,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};nr.elementStyles=[],nr.shadowRootOptions={mode:"open"},nr[ri("elementProperties")]=new Map,nr[ri("finalized")]=new Map,Ib?.({ReactiveElement:nr}),(so.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ll=globalThis,Nu=e=>e,Ns=Ll.trustedTypes,ju=Ns?Ns.createPolicy("lit-html",{createHTML:e=>e}):void 0,Yh="$lit$",un=`lit$${Math.random().toFixed(9).slice(2)}$`,Qh="?"+un,Ab=`<${Qh}>`,Nn=document,ui=()=>Nn.createComment(""),di=e=>e===null||typeof e!="object"&&typeof e!="function",Ml=Array.isArray,Rb=e=>Ml(e)||typeof e?.[Symbol.iterator]=="function",Ia=`[ 	
\f\r]`,Wr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fu=/-->/g,Uu=/>/g,An=RegExp(`>|${Ia}(?:([^\\s"'>=/]+)(${Ia}*=${Ia}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Bu=/'/g,qu=/"/g,Jh=/^(?:script|style|textarea|title)$/i,Xh=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),v=Xh(1),Ob=Xh(2),jn=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),Hu=new WeakMap,Mn=Nn.createTreeWalker(Nn,129);function Zh(e,t){if(!Ml(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ju!==void 0?ju.createHTML(t):t}const Db=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",o=Wr;for(let a=0;a<n;a++){const c=e[a];let d,f,p=-1,b=0;for(;b<c.length&&(o.lastIndex=b,f=o.exec(c),f!==null);)b=o.lastIndex,o===Wr?f[1]==="!--"?o=Fu:f[1]!==void 0?o=Uu:f[2]!==void 0?(Jh.test(f[2])&&(i=RegExp("</"+f[2],"g")),o=An):f[3]!==void 0&&(o=An):o===An?f[0]===">"?(o=i??Wr,p=-1):f[1]===void 0?p=-2:(p=o.lastIndex-f[2].length,d=f[1],o=f[3]===void 0?An:f[3]==='"'?qu:Bu):o===qu||o===Bu?o=An:o===Fu||o===Uu?o=Wr:(o=An,i=void 0);const y=o===An&&e[a+1].startsWith("/>")?" ":"";s+=o===Wr?c+Ab:p>=0?(r.push(d),c.slice(0,p)+Yh+c.slice(p)+un+y):c+un+(p===-2?a:y)}return[Zh(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class hi{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=t.length-1,c=this.parts,[d,f]=Db(t,n);if(this.el=hi.createElement(d,r),Mn.currentNode=this.el.content,n===2||n===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=Mn.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(Yh)){const b=f[o++],y=i.getAttribute(p).split(un),k=/([.?@])?(.*)/.exec(b);c.push({type:1,index:s,name:k[2],strings:y,ctor:k[1]==="."?Mb:k[1]==="?"?Pb:k[1]==="@"?zb:oo}),i.removeAttribute(p)}else p.startsWith(un)&&(c.push({type:6,index:s}),i.removeAttribute(p));if(Jh.test(i.tagName)){const p=i.textContent.split(un),b=p.length-1;if(b>0){i.textContent=Ns?Ns.emptyScript:"";for(let y=0;y<b;y++)i.append(p[y],ui()),Mn.nextNode(),c.push({type:2,index:++s});i.append(p[b],ui())}}}else if(i.nodeType===8)if(i.data===Qh)c.push({type:2,index:s});else{let p=-1;for(;(p=i.data.indexOf(un,p+1))!==-1;)c.push({type:7,index:s}),p+=un.length-1}s++}}static createElement(t,n){const r=Nn.createElement("template");return r.innerHTML=t,r}}function dr(e,t,n=e,r){if(t===jn)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const s=di(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=dr(e,i._$AS(e,t.values),i,r)),t}class Lb{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??Nn).importNode(n,!0);Mn.currentNode=i;let s=Mn.nextNode(),o=0,a=0,c=r[0];for(;c!==void 0;){if(o===c.index){let d;c.type===2?d=new $i(s,s.nextSibling,this,t):c.type===1?d=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(d=new Nb(s,this,t)),this._$AV.push(d),c=r[++a]}o!==c?.index&&(s=Mn.nextNode(),o++)}return Mn.currentNode=Nn,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class $i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=dr(this,t,n),di(t)?t===X||t==null||t===""?(this._$AH!==X&&this._$AR(),this._$AH=X):t!==this._$AH&&t!==jn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Rb(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==X&&di(this._$AH)?this._$AA.nextSibling.data=t:this.T(Nn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=hi.createElement(Zh(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const s=new Lb(i,this),o=s.u(this.options);s.p(n),this.T(o),this._$AH=s}}_$AC(t){let n=Hu.get(t.strings);return n===void 0&&Hu.set(t.strings,n=new hi(t)),n}k(t){Ml(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new $i(this.O(ui()),this.O(ui()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=Nu(t).nextSibling;Nu(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class oo{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,s){this.type=1,this._$AH=X,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=X}_$AI(t,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)t=dr(this,t,n,0),o=!di(t)||t!==this._$AH&&t!==jn,o&&(this._$AH=t);else{const a=t;let c,d;for(t=s[0],c=0;c<s.length-1;c++)d=dr(this,a[r+c],n,c),d===jn&&(d=this._$AH[c]),o||=!di(d)||d!==this._$AH[c],d===X?t=X:t!==X&&(t+=(d??"")+s[c+1]),this._$AH[c]=d}o&&!i&&this.j(t)}j(t){t===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Mb extends oo{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===X?void 0:t}}class Pb extends oo{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==X)}}class zb extends oo{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){if((t=dr(this,t,n,0)??X)===jn)return;const r=this._$AH,i=t===X&&r!==X||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==X&&(r===X||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Nb{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){dr(this,t)}}const jb=Ll.litHtmlPolyfillSupport;jb?.(hi,$i),(Ll.litHtmlVersions??=[]).push("3.3.3");const Fb=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const s=n?.renderBefore??null;r._$litPart$=i=new $i(t.insertBefore(ui(),s),s,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pl=globalThis;let $e=class extends nr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Fb(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return jn}};$e._$litElement$=!0,$e.finalized=!0,Pl.litElementHydrateSupport?.({LitElement:$e});const Ub=Pl.litElementPolyfillSupport;Ub?.({LitElement:$e});(Pl.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bb={attribute:!0,type:String,converter:zs,reflect:!1,hasChanged:Dl},qb=(e=Bb,t,n)=>{const{kind:r,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(n.name,e),r==="accessor"){const{name:o}=n;return{set(a){const c=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,c,e,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,e,a),a}}}if(r==="setter"){const{name:o}=n;return function(a){const c=this[o];t.call(this,a),this.requestUpdate(o,c,e,!0,a)}}throw Error("Unsupported decorator location: "+r)};function qe(e){return(t,n)=>typeof n=="object"?qb(e,t,n):((r,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,r),o?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function z(e){return qe({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hb=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wt(e,t){return(n,r,i)=>{const s=o=>o.renderRoot?.querySelector(e)??null;return Hb(n,r,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vb={CHILD:2},ef=e=>(...t)=>({_$litDirective$:e,values:t});class Kb{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class js extends Kb{constructor(t){if(super(t),this.it=X,t.type!==Vb.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===X||t==null)return this._t=void 0,this.it=t;if(t===jn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}js.directiveName="unsafeHTML",js.resultType=1;const lr=ef(js);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ga extends js{}Ga.directiveName="unsafeSVG",Ga.resultType=2;const zl=ef(Ga),mt=Se`
  :host {
    display: contents;
  }
  dialog {
    position: relative;
    border: 0;
    border-radius: var(--dlg-radius, 0.5rem);
    padding: 0;
    /* Canvas is the UA default for <dialog> — naming it keeps the current
       look while giving a themer one property to override. */
    background: var(--dlg-surface, Canvas);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
    font-family: var(--dlg-font, system-ui, sans-serif);
    overflow: hidden;
    max-height: 92vh;
  }
  dialog::backdrop {
    background: var(--dlg-backdrop, rgba(15, 23, 42, 0.4));
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
    background: var(--dlg-header-bg, #1f2937);
    color: var(--dlg-header-fg, white);
    border-bottom: 1px solid #111827;
    /* Whole bar is the drag handle (draggable.ts wires pointer events);
       cursor is set inline by the helper as it toggles between grab and
       grabbing. */
  }
  .dialog-header h2 {
    margin: 0;
    font-size: 1.05rem;
    color: var(--dlg-header-fg, white);
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
    color: var(--dlg-header-fg, white);
    background: rgba(255, 255, 255, 0.12);
  }
  button.primary {
    background: var(--dlg-accent, #3b82f6);
    color: var(--dlg-accent-fg, white);
    border: 0;
    padding: 0.45rem 0.9rem;
    border-radius: 0.25rem;
    cursor: pointer;
    font: inherit;
  }
  button.primary:hover {
    background: var(--dlg-accent-hover, #2563eb);
  }
  button.ghost {
    background: transparent;
    border: 1px solid var(--dlg-border, #d1d5db);
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
    color: var(--dlg-header-fg, white);
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
`;function gt(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const n=t.querySelector("form");n&&(e.preventDefault(),n.requestSubmit())}const Vu=new WeakSet;function bt(e,t){if(Vu.has(t))return;Vu.add(t);let n=0,r=0,i=0,s=0,o=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",c=>{if(c.target.closest("button, input, textarea, select, a, label"))return;o=!0,n=c.clientX,r=c.clientY;const f=e.getBoundingClientRect();i=f.left,s=f.top,t.setPointerCapture(c.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",c=>{if(!o)return;const d=c.clientX-n,f=c.clientY-r,p=-e.offsetWidth+80,b=window.innerWidth-80,y=0,k=window.innerHeight-40,$=Math.max(p,Math.min(b,i+d)),C=Math.max(y,Math.min(k,s+f));e.style.position="fixed",e.style.left=`${$}px`,e.style.top=`${C}px`,e.style.margin="0"});const a=c=>{if(o){o=!1;try{t.releasePointerCapture(c.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",a),t.addEventListener("pointercancel",a)}var Wb=function(e,t,n,r){var i=arguments.length,s=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};class ct extends $e{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=t=>{t.preventDefault();const n=this.current;n&&(n.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=t=>{t.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitChoice=t=>{if(t.preventDefault(),this.current?.kind!=="choice")return;const n=this.current.options[0];n!==void 0&&this.closeAndResolve(n)},this.submitAlert=t=>{t.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}static{this.instance=null}static{this.styles=[mt,Se`
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
        color: var(--dlg-text, #374151);
        white-space: pre-wrap;
        font-size: 0.95rem;
      }
      input[type='text'] {
        font: inherit;
        padding: 0.45rem 0.55rem;
        border: 1px solid var(--dlg-border, #d1d5db);
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
        background: var(--dlg-surface, Canvas);
        border: 1px solid var(--dlg-border, #d1d5db);
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
      button.choice.primary {
        background: var(--dlg-accent, #3b82f6);
        color: var(--dlg-accent-fg, white);
        border: 0;
        text-align: left;
      }
      button.choice.primary:hover {
        background: var(--dlg-accent-hover, #2563eb);
      }
      button.choice.primary:focus-visible {
        outline: 2px solid #1d4ed8;
        outline-offset: 2px;
      }
    `]}connectedCallback(){super.connectedCallback(),ct.instance=this}disconnectedCallback(){super.disconnectedCallback(),ct.instance===this&&(ct.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const t=this.shadowRoot?.querySelector(".dialog-header");t&&bt(this.dialogEl,t)}alert(t,n="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:n,message:t,resolve:r}})}async confirm(t,n="Confirm"){return await this.choice(t,["Yes","No"],n)==="Yes"}prompt(t,n="",r="Input"){return this.enqueue(i=>{this.current={kind:"prompt",title:r,message:t,value:n,resolve:i}})}choice(t,n,r="Choose"){return this.enqueue(i=>{this.current={kind:"choice",title:r,message:t,options:n,resolve:i}})}enqueue(t){return new Promise(n=>{const r=()=>{t(n),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(t){const n=this.current;n&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{n.kind==="alert"?n.resolve():n.resolve(t);const r=this.queue.shift();r&&r()}))}render(){const t=this.current;return v`
      <dialog @cancel=${this.onCancel} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${t?this.renderBody(t):X}
      </dialog>
    `}renderBody(t){switch(t.kind){case"alert":return v`
          <form @submit=${this.submitAlert}>
            <div class="dialog-header">
              <h2>${t.title}</h2>
              <div class="header-actions">
                <button type="submit" class="primary">OK</button>
              </div>
            </div>
            <div class="dialog-body">
              <p class="message">${t.message}</p>
            </div>
          </form>
        `;case"prompt":return v`
          <form @submit=${this.submitPrompt}>
            <div class="dialog-header">
              <h2>${t.title}</h2>
              <div class="header-actions">
                <button type="button" class="ghost" @click=${this.cancelPrompt}>Cancel</button>
                <button type="submit" class="primary">OK</button>
              </div>
            </div>
            <div class="dialog-body">
              <p class="message">${t.message}</p>
              <input
                type="text"
                autofocus
                .value=${t.value}
                @input=${n=>{this.current?.kind==="prompt"&&(this.current={...this.current,value:n.target.value})}}
              />
            </div>
          </form>
        `;case"choice":return v`
          <form @submit=${this.submitChoice}>
            <div class="dialog-header">
              <h2>${t.title}</h2>
              <div class="header-actions">
                <button type="button" class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
              </div>
            </div>
            <div class="dialog-body">
              ${t.message?v`<p class="message">${t.message}</p>`:X}
              <div class="choices">
                ${t.options.map((n,r)=>r===0?v`<button type="submit" class="choice primary" autofocus>${n}</button>`:v`<button type="button" class="choice" @click=${()=>this.closeAndResolve(n)}>${n}</button>`)}
              </div>
            </div>
          </form>
        `}}}Wb([z()],ct.prototype,"current",void 0);function Gb(e="host-dialogs"){customElements.get(e)||customElements.define(e,ct)}const Yb=Se`
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
`,Ku=/(https?:\/\/[^\s)]+)/g;function Qb(e){const t=[];let n=0,r;for(Ku.lastIndex=0;(r=Ku.exec(e))!==null;)r.index>n&&t.push(e.slice(n,r.index)),t.push({url:r[0]}),n=r.index+r[0].length;return n===0?e:(n<e.length&&t.push(e.slice(n)),t.map(i=>typeof i=="string"?i:v`<a href=${i.url} target="_blank" rel="noopener noreferrer">${i.url}</a>`))}var Jb=function(e,t,n,r){var i=arguments.length,s=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};class zn extends $e{constructor(){super(...arguments),this.toasts=[],this.nextId=1}static{this.instance=null}static{this.styles=[Yb,Se`
      :host {
        position: fixed;
        /* Clears the host app's header bar; easyDBAccess's is 56px tall. */
        top: var(--toast-top, 56px);
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
        background: var(--toast-surface, Canvas);
        border-radius: var(--toast-radius, 0.35rem);
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
        border-left-color: var(--toast-success, #16a34a);
      }
      .toast.error {
        border-left-color: var(--toast-error, #dc2626);
      }
      .toast.warning {
        border-left-color: var(--toast-warning, #d97706);
      }
      .toast.info {
        border-left-color: var(--toast-info, #2563eb);
      }
      .toast .mi.lg {
        font-size: 1.4rem;
      }
      .toast.success .mi {
        color: var(--toast-success, #16a34a);
      }
      .toast.error .mi {
        color: var(--toast-error, #dc2626);
      }
      .toast.warning .mi {
        color: var(--toast-warning, #d97706);
      }
      .toast.info .mi {
        color: var(--toast-info, #2563eb);
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
        color: var(--toast-info, #2563eb);
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
    `]}connectedCallback(){super.connectedCallback(),zn.instance=this}disconnectedCallback(){super.disconnectedCallback(),zn.instance===this&&(zn.instance=null)}show(t,n){const r={id:this.nextId++,kind:n?.kind??"info",message:t,...n?.title?{title:n.title}:{}};this.toasts=[...this.toasts,r];const i=n?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),i)}dismiss(t){const n=this.toasts.find(r=>r.id===t);n?.timer!=null&&window.clearTimeout(n.timer),this.toasts=this.toasts.filter(r=>r.id!==t)}render(){return v`
      ${this.toasts.map(t=>v`
          <div class="toast ${t.kind}" role="status">
            <span class="mi lg">${Xb(t.kind)}</span>
            <span class="body"> ${t.title?v`<strong>${t.title}</strong>`:""}${Qb(t.message)} </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(t.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}}Jb([z()],zn.prototype,"toasts",void 0);function Xb(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Zb(e="toast-host"){customElements.get(e)||customElements.define(e,zn)}var ew=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function zT(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Cs={exports:{}},nw=Cs.exports,Wu;function rw(){return Wu||(Wu=1,(function(e,t){(function(n,r){e.exports=r()})(nw,function(){var n=function(l,u){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,m){h.__proto__=m}||function(h,m){for(var g in m)Object.prototype.hasOwnProperty.call(m,g)&&(h[g]=m[g])})(l,u)},r=function(){return(r=Object.assign||function(l){for(var u,h=1,m=arguments.length;h<m;h++)for(var g in u=arguments[h])Object.prototype.hasOwnProperty.call(u,g)&&(l[g]=u[g]);return l}).apply(this,arguments)};function i(l,u,h){for(var m,g=0,w=u.length;g<w;g++)!m&&g in u||((m=m||Array.prototype.slice.call(u,0,g))[g]=u[g]);return l.concat(m||Array.prototype.slice.call(u))}var s=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:ew,o=Object.keys,a=Array.isArray;function c(l,u){return typeof u!="object"||o(u).forEach(function(h){l[h]=u[h]}),l}typeof Promise>"u"||s.Promise||(s.Promise=Promise);var d=Object.getPrototypeOf,f={}.hasOwnProperty;function p(l,u){return f.call(l,u)}function b(l,u){typeof u=="function"&&(u=u(d(l))),(typeof Reflect>"u"?o:Reflect.ownKeys)(u).forEach(function(h){k(l,h,u[h])})}var y=Object.defineProperty;function k(l,u,h,m){y(l,u,c(h&&p(h,"get")&&typeof h.get=="function"?{get:h.get,set:h.set,configurable:!0}:{value:h,configurable:!0,writable:!0},m))}function $(l){return{from:function(u){return l.prototype=Object.create(u.prototype),k(l.prototype,"constructor",l),{extend:b.bind(null,l.prototype)}}}}var C=Object.getOwnPropertyDescriptor,E=[].slice;function T(l,u,h){return E.call(l,u,h)}function Y(l,u){return u(l)}function L(l){if(!l)throw new Error("Assertion Failed")}function ne(l){s.setImmediate?setImmediate(l):setTimeout(l,0)}function W(l,u){if(typeof u=="string"&&p(l,u))return l[u];if(!u)return l;if(typeof u!="string"){for(var h=[],m=0,g=u.length;m<g;++m){var w=W(l,u[m]);h.push(w)}return h}var x=u.indexOf(".");if(x!==-1){var S=l[u.substr(0,x)];return S==null?void 0:W(S,u.substr(x+1))}}function I(l,u,h){if(l&&u!==void 0&&!("isFrozen"in Object&&Object.isFrozen(l)))if(typeof u!="string"&&"length"in u){L(typeof h!="string"&&"length"in h);for(var m=0,g=u.length;m<g;++m)I(l,u[m],h[m])}else{var w,x,S=u.indexOf(".");S!==-1?(w=u.substr(0,S),(x=u.substr(S+1))===""?h===void 0?a(l)&&!isNaN(parseInt(w))?l.splice(w,1):delete l[w]:l[w]=h:I(S=!(S=l[w])||!p(l,w)?l[w]={}:S,x,h)):h===void 0?a(l)&&!isNaN(parseInt(u))?l.splice(u,1):delete l[u]:l[u]=h}}function V(l){var u,h={};for(u in l)p(l,u)&&(h[u]=l[u]);return h}var K=[].concat;function ie(l){return K.apply([],l)}var Yt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ie([8,16,32,64].map(function(l){return["Int","Uint","Float"].map(function(u){return u+l+"Array"})}))).filter(function(l){return s[l]}),de=new Set(Yt.map(function(l){return s[l]})),H=null;function te(l){return H=new WeakMap,l=(function u(h){if(!h||typeof h!="object")return h;var m=H.get(h);if(m)return m;if(a(h)){m=[],H.set(h,m);for(var g=0,w=h.length;g<w;++g)m.push(u(h[g]))}else if(de.has(h.constructor))m=h;else{var x,S=d(h);for(x in m=S===Object.prototype?{}:Object.create(S),H.set(h,m),h)p(h,x)&&(m[x]=u(h[x]))}return m})(l),H=null,l}var q={}.toString;function Q(l){return q.call(l).slice(8,-1)}var ae=typeof Symbol<"u"?Symbol.iterator:"@@iterator",we=typeof ae=="symbol"?function(l){var u;return l!=null&&(u=l[ae])&&u.apply(l)}:function(){return null};function xe(l,u){return u=l.indexOf(u),0<=u&&l.splice(u,1),0<=u}var Me={};function pe(l){var u,h,m,g;if(arguments.length===1){if(a(l))return l.slice();if(this===Me&&typeof l=="string")return[l];if(g=we(l)){for(h=[];!(m=g.next()).done;)h.push(m.value);return h}if(l==null)return[l];if(typeof(u=l.length)!="number")return[l];for(h=new Array(u);u--;)h[u]=l[u];return h}for(u=arguments.length,h=new Array(u);u--;)h[u]=arguments[u];return h}var yt=typeof Symbol<"u"?function(l){return l[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Mr=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Et=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Mr),Lt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Ke(l,u){this.name=l,this.message=u}function me(l,u){return l+". Errors: "+Object.keys(u).map(function(h){return u[h].toString()}).filter(function(h,m,g){return g.indexOf(h)===m}).join(`
`)}function ze(l,u,h,m){this.failures=u,this.failedKeys=m,this.successCount=h,this.message=me(l,u)}function yn(l,u){this.name="BulkError",this.failures=Object.keys(u).map(function(h){return u[h]}),this.failuresByPos=u,this.message=me(l,this.failures)}$(Ke).from(Error).extend({toString:function(){return this.name+": "+this.message}}),$(ze).from(Ke),$(yn).from(Ke);var Gn=Et.reduce(function(l,u){return l[u]=u+"Error",l},{}),Ug=Ke,fe=Et.reduce(function(l,u){var h=u+"Error";function m(g,w){this.name=h,g?typeof g=="string"?(this.message="".concat(g).concat(w?`
 `+w:""),this.inner=w||null):typeof g=="object"&&(this.message="".concat(g.name," ").concat(g.message),this.inner=g):(this.message=Lt[u]||h,this.inner=null)}return $(m).from(Ug),l[u]=m,l},{});fe.Syntax=SyntaxError,fe.Type=TypeError,fe.Range=RangeError;var Zc=Mr.reduce(function(l,u){return l[u+"Error"]=fe[u],l},{}),Pi=Et.reduce(function(l,u){return["Syntax","Type","Range"].indexOf(u)===-1&&(l[u+"Error"]=fe[u]),l},{});function Ie(){}function Dr(l){return l}function Bg(l,u){return l==null||l===Dr?u:function(h){return u(l(h))}}function vn(l,u){return function(){l.apply(this,arguments),u.apply(this,arguments)}}function qg(l,u){return l===Ie?u:function(){var h=l.apply(this,arguments);h!==void 0&&(arguments[0]=h);var m=this.onsuccess,g=this.onerror;this.onsuccess=null,this.onerror=null;var w=u.apply(this,arguments);return m&&(this.onsuccess=this.onsuccess?vn(m,this.onsuccess):m),g&&(this.onerror=this.onerror?vn(g,this.onerror):g),w!==void 0?w:h}}function Hg(l,u){return l===Ie?u:function(){l.apply(this,arguments);var h=this.onsuccess,m=this.onerror;this.onsuccess=this.onerror=null,u.apply(this,arguments),h&&(this.onsuccess=this.onsuccess?vn(h,this.onsuccess):h),m&&(this.onerror=this.onerror?vn(m,this.onerror):m)}}function Vg(l,u){return l===Ie?u:function(h){var m=l.apply(this,arguments);c(h,m);var g=this.onsuccess,w=this.onerror;return this.onsuccess=null,this.onerror=null,h=u.apply(this,arguments),g&&(this.onsuccess=this.onsuccess?vn(g,this.onsuccess):g),w&&(this.onerror=this.onerror?vn(w,this.onerror):w),m===void 0?h===void 0?void 0:h:c(m,h)}}function Kg(l,u){return l===Ie?u:function(){return u.apply(this,arguments)!==!1&&l.apply(this,arguments)}}function Wo(l,u){return l===Ie?u:function(){var h=l.apply(this,arguments);if(h&&typeof h.then=="function"){for(var m=this,g=arguments.length,w=new Array(g);g--;)w[g]=arguments[g];return h.then(function(){return u.apply(m,w)})}return u.apply(this,arguments)}}Pi.ModifyError=ze,Pi.DexieError=Ke,Pi.BulkError=yn;var Bt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function eu(l){Bt=l}var Lr={},tu=100,Yt=typeof Promise>"u"?[]:(function(){var l=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[l,d(l),l];var u=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[u,d(u),l]})(),Mr=Yt[0],Et=Yt[1],Yt=Yt[2],Et=Et&&Et.then,kn=Mr&&Mr.constructor,Go=!!Yt,Pr=function(l,u){zr.push([l,u]),zi&&(queueMicrotask(Gg),zi=!1)},Yo=!0,zi=!0,$n=[],Ni=[],Qo=Dr,tn={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Ie,pgp:!1,env:{},finalize:Ie},he=tn,zr=[],xn=0,ji=[];function ce(l){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var u=this._PSD=he;if(typeof l!="function"){if(l!==Lr)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Xo(this,this._value))}this._state=null,this._value=null,++u.ref,(function h(m,g){try{g(function(w){if(m._state===null){if(w===m)throw new TypeError("A promise cannot be resolved with itself.");var x=m._lib&&Yn();w&&typeof w.then=="function"?h(m,function(S,A){w instanceof ce?w._then(S,A):w.then(S,A)}):(m._state=!0,m._value=w,ru(m)),x&&Qn()}},Xo.bind(null,m))}catch(w){Xo(m,w)}})(this,l)}var Jo={get:function(){var l=he,u=qi;function h(m,g){var w=this,x=!l.global&&(l!==he||u!==qi),S=x&&!rn(),A=new ce(function(O,P){Zo(w,new nu(su(m,l,x,S),su(g,l,x,S),O,P,l))});return this._consoleTask&&(A._consoleTask=this._consoleTask),A}return h.prototype=Lr,h},set:function(l){k(this,"then",l&&l.prototype===Lr?Jo:{get:function(){return l},set:Jo.set})}};function nu(l,u,h,m,g){this.onFulfilled=typeof l=="function"?l:null,this.onRejected=typeof u=="function"?u:null,this.resolve=h,this.reject=m,this.psd=g}function Xo(l,u){var h,m;Ni.push(u),l._state===null&&(h=l._lib&&Yn(),u=Qo(u),l._state=!1,l._value=u,m=l,$n.some(function(g){return g._value===m._value})||$n.push(m),ru(l),h&&Qn())}function ru(l){var u=l._listeners;l._listeners=[];for(var h=0,m=u.length;h<m;++h)Zo(l,u[h]);var g=l._PSD;--g.ref||g.finalize(),xn===0&&(++xn,Pr(function(){--xn==0&&ea()},[]))}function Zo(l,u){if(l._state!==null){var h=l._state?u.onFulfilled:u.onRejected;if(h===null)return(l._state?u.resolve:u.reject)(l._value);++u.psd.ref,++xn,Pr(Wg,[h,l,u])}else l._listeners.push(u)}function Wg(l,u,h){try{var m,g=u._value;!u._state&&Ni.length&&(Ni=[]),m=Bt&&u._consoleTask?u._consoleTask.run(function(){return l(g)}):l(g),u._state||Ni.indexOf(g)!==-1||(function(w){for(var x=$n.length;x;)if($n[--x]._value===w._value)return $n.splice(x,1)})(u),h.resolve(m)}catch(w){h.reject(w)}finally{--xn==0&&ea(),--h.psd.ref||h.psd.finalize()}}function Gg(){Sn(tn,function(){Yn()&&Qn()})}function Yn(){var l=Yo;return zi=Yo=!1,l}function Qn(){var l,u,h;do for(;0<zr.length;)for(l=zr,zr=[],h=l.length,u=0;u<h;++u){var m=l[u];m[0].apply(null,m[1])}while(0<zr.length);zi=Yo=!0}function ea(){var l=$n;$n=[],l.forEach(function(m){m._PSD.onunhandled.call(null,m._value,m)});for(var u=ji.slice(0),h=u.length;h;)u[--h]()}function Fi(l){return new ce(Lr,!1,l)}function Pe(l,u){var h=he;return function(){var m=Yn(),g=he;try{return sn(h,!0),l.apply(this,arguments)}catch(w){u&&u(w)}finally{sn(g,!1),m&&Qn()}}}b(ce.prototype,{then:Jo,_then:function(l,u){Zo(this,new nu(null,null,l,u,he))},catch:function(l){if(arguments.length===1)return this.then(null,l);var u=l,h=arguments[1];return typeof u=="function"?this.then(null,function(m){return(m instanceof u?h:Fi)(m)}):this.then(null,function(m){return(m&&m.name===u?h:Fi)(m)})},finally:function(l){return this.then(function(u){return ce.resolve(l()).then(function(){return u})},function(u){return ce.resolve(l()).then(function(){return Fi(u)})})},timeout:function(l,u){var h=this;return l<1/0?new ce(function(m,g){var w=setTimeout(function(){return g(new fe.Timeout(u))},l);h.then(m,g).finally(clearTimeout.bind(null,w))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&k(ce.prototype,Symbol.toStringTag,"Dexie.Promise"),tn.env=iu(),b(ce,{all:function(){var l=pe.apply(null,arguments).map(Hi);return new ce(function(u,h){l.length===0&&u([]);var m=l.length;l.forEach(function(g,w){return ce.resolve(g).then(function(x){l[w]=x,--m||u(l)},h)})})},resolve:function(l){return l instanceof ce?l:l&&typeof l.then=="function"?new ce(function(u,h){l.then(u,h)}):new ce(Lr,!0,l)},reject:Fi,race:function(){var l=pe.apply(null,arguments).map(Hi);return new ce(function(u,h){l.map(function(m){return ce.resolve(m).then(u,h)})})},PSD:{get:function(){return he},set:function(l){return he=l}},totalEchoes:{get:function(){return qi}},newPSD:nn,usePSD:Sn,scheduler:{get:function(){return Pr},set:function(l){Pr=l}},rejectionMapper:{get:function(){return Qo},set:function(l){Qo=l}},follow:function(l,u){return new ce(function(h,m){return nn(function(g,w){var x=he;x.unhandleds=[],x.onunhandled=w,x.finalize=vn(function(){var S,A=this;S=function(){A.unhandleds.length===0?g():w(A.unhandleds[0])},ji.push(function O(){S(),ji.splice(ji.indexOf(O),1)}),++xn,Pr(function(){--xn==0&&ea()},[])},x.finalize),l()},u,h,m)})}}),kn&&(kn.allSettled&&k(ce,"allSettled",function(){var l=pe.apply(null,arguments).map(Hi);return new ce(function(u){l.length===0&&u([]);var h=l.length,m=new Array(h);l.forEach(function(g,w){return ce.resolve(g).then(function(x){return m[w]={status:"fulfilled",value:x}},function(x){return m[w]={status:"rejected",reason:x}}).then(function(){return--h||u(m)})})})}),kn.any&&typeof AggregateError<"u"&&k(ce,"any",function(){var l=pe.apply(null,arguments).map(Hi);return new ce(function(u,h){l.length===0&&h(new AggregateError([]));var m=l.length,g=new Array(m);l.forEach(function(w,x){return ce.resolve(w).then(function(S){return u(S)},function(S){g[x]=S,--m||h(new AggregateError(g))})})})}),kn.withResolvers&&(ce.withResolvers=kn.withResolvers));var We={awaits:0,echoes:0,id:0},Yg=0,Ui=[],Bi=0,qi=0,Qg=0;function nn(l,u,h,m){var g=he,w=Object.create(g);return w.parent=g,w.ref=0,w.global=!1,w.id=++Qg,tn.env,w.env=Go?{Promise:ce,PromiseProp:{value:ce,configurable:!0,writable:!0},all:ce.all,race:ce.race,allSettled:ce.allSettled,any:ce.any,resolve:ce.resolve,reject:ce.reject}:{},u&&c(w,u),++g.ref,w.finalize=function(){--this.parent.ref||this.parent.finalize()},m=Sn(w,l,h,m),w.ref===0&&w.finalize(),m}function Jn(){return We.id||(We.id=++Yg),++We.awaits,We.echoes+=tu,We.id}function rn(){return!!We.awaits&&(--We.awaits==0&&(We.id=0),We.echoes=We.awaits*tu,!0)}function Hi(l){return We.echoes&&l&&l.constructor===kn?(Jn(),l.then(function(u){return rn(),u},function(u){return rn(),je(u)})):l}function Jg(){var l=Ui[Ui.length-1];Ui.pop(),sn(l,!1)}function sn(l,u){var h,m=he;(u?!We.echoes||Bi++&&l===he:!Bi||--Bi&&l===he)||queueMicrotask(u?function(g){++qi,We.echoes&&--We.echoes!=0||(We.echoes=We.awaits=We.id=0),Ui.push(he),sn(g,!0)}.bind(null,l):Jg),l!==he&&(he=l,m===tn&&(tn.env=iu()),Go&&(h=tn.env.Promise,u=l.env,(m.global||l.global)&&(Object.defineProperty(s,"Promise",u.PromiseProp),h.all=u.all,h.race=u.race,h.resolve=u.resolve,h.reject=u.reject,u.allSettled&&(h.allSettled=u.allSettled),u.any&&(h.any=u.any))))}function iu(){var l=s.Promise;return Go?{Promise:l,PromiseProp:Object.getOwnPropertyDescriptor(s,"Promise"),all:l.all,race:l.race,allSettled:l.allSettled,any:l.any,resolve:l.resolve,reject:l.reject}:{}}function Sn(l,u,h,m,g){var w=he;try{return sn(l,!0),u(h,m,g)}finally{sn(w,!1)}}function su(l,u,h,m){return typeof l!="function"?l:function(){var g=he;h&&Jn(),sn(u,!0);try{return l.apply(this,arguments)}finally{sn(g,!1),m&&queueMicrotask(rn)}}}function ta(l){Promise===kn&&We.echoes===0?Bi===0?l():enqueueNativeMicroTask(l):setTimeout(l,0)}(""+Et).indexOf("[native code]")===-1&&(Jn=rn=Ie);var je=ce.reject,Cn="￿",Gt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ou="String expected.",Xn=[],Vi="__dbnames",na="readonly",ra="readwrite";function _n(l,u){return l?u?function(){return l.apply(this,arguments)&&u.apply(this,arguments)}:l:u}var au={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Ki(l){return typeof l!="string"||/\./.test(l)?function(u){return u}:function(u){return u[l]===void 0&&l in u&&delete(u=te(u))[l],u}}function lu(){throw fe.Type()}function Ce(l,u){try{var h=cu(l),m=cu(u);if(h!==m)return h==="Array"?1:m==="Array"?-1:h==="binary"?1:m==="binary"?-1:h==="string"?1:m==="string"?-1:h==="Date"?1:m!=="Date"?NaN:-1;switch(h){case"number":case"Date":case"string":return u<l?1:l<u?-1:0;case"binary":return(function(g,w){for(var x=g.length,S=w.length,A=x<S?x:S,O=0;O<A;++O)if(g[O]!==w[O])return g[O]<w[O]?-1:1;return x===S?0:x<S?-1:1})(uu(l),uu(u));case"Array":return(function(g,w){for(var x=g.length,S=w.length,A=x<S?x:S,O=0;O<A;++O){var P=Ce(g[O],w[O]);if(P!==0)return P}return x===S?0:x<S?-1:1})(l,u)}}catch{}return NaN}function cu(l){var u=typeof l;return u!="object"?u:ArrayBuffer.isView(l)?"binary":(l=Q(l),l==="ArrayBuffer"?"binary":l)}function uu(l){return l instanceof Uint8Array?l:ArrayBuffer.isView(l)?new Uint8Array(l.buffer,l.byteOffset,l.byteLength):new Uint8Array(l)}var du=(Le.prototype._trans=function(l,u,h){var m=this._tx||he.trans,g=this.name,w=Bt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(l==="readonly"?"read":"write"," ").concat(this.name));function x(O,P,_){if(!_.schema[g])throw new fe.NotFound("Table "+g+" not part of transaction");return u(_.idbtrans,_)}var S=Yn();try{var A=m&&m.db._novip===this.db._novip?m===he.trans?m._promise(l,x,h):nn(function(){return m._promise(l,x,h)},{trans:m,transless:he.transless||he}):(function O(P,_,j,R){if(P.idbdb&&(P._state.openComplete||he.letThrough||P._vip)){var M=P._createTransaction(_,j,P._dbSchema);try{M.create(),P._state.PR1398_maxLoop=3}catch(N){return N.name===Gn.InvalidState&&P.isOpen()&&0<--P._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),P.close({disableAutoOpen:!1}),P.open().then(function(){return O(P,_,j,R)})):je(N)}return M._promise(_,function(N,D){return nn(function(){return he.trans=M,R(N,D,M)})}).then(function(N){if(_==="readwrite")try{M.idbtrans.commit()}catch{}return _==="readonly"?N:M._completion.then(function(){return N})})}if(P._state.openComplete)return je(new fe.DatabaseClosed(P._state.dbOpenError));if(!P._state.isBeingOpened){if(!P._state.autoOpen)return je(new fe.DatabaseClosed);P.open().catch(Ie)}return P._state.dbReadyPromise.then(function(){return O(P,_,j,R)})})(this.db,l,[this.name],x);return w&&(A._consoleTask=w,A=A.catch(function(O){return console.trace(O),je(O)})),A}finally{S&&Qn()}},Le.prototype.get=function(l,u){var h=this;return l&&l.constructor===Object?this.where(l).first(u):l==null?je(new fe.Type("Invalid argument to Table.get()")):this._trans("readonly",function(m){return h.core.get({trans:m,key:l}).then(function(g){return h.hook.reading.fire(g)})}).then(u)},Le.prototype.where=function(l){if(typeof l=="string")return new this.db.WhereClause(this,l);if(a(l))return new this.db.WhereClause(this,"[".concat(l.join("+"),"]"));var u=o(l);if(u.length===1)return this.where(u[0]).equals(l[u[0]]);var h=this.schema.indexes.concat(this.schema.primKey).filter(function(S){if(S.compound&&u.every(function(O){return 0<=S.keyPath.indexOf(O)})){for(var A=0;A<u.length;++A)if(u.indexOf(S.keyPath[A])===-1)return!1;return!0}return!1}).sort(function(S,A){return S.keyPath.length-A.keyPath.length})[0];if(h&&this.db._maxKey!==Cn){var w=h.keyPath.slice(0,u.length);return this.where(w).equals(w.map(function(A){return l[A]}))}!h&&Bt&&console.warn("The query ".concat(JSON.stringify(l)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(u.join("+"),"]"));var m=this.schema.idxByName;function g(S,A){return Ce(S,A)===0}var x=u.reduce(function(_,A){var O=_[0],P=_[1],_=m[A],j=l[A];return[O||_,O||!_?_n(P,_&&_.multi?function(R){return R=W(R,A),a(R)&&R.some(function(M){return g(j,M)})}:function(R){return g(j,W(R,A))}):P]},[null,null]),w=x[0],x=x[1];return w?this.where(w.name).equals(l[w.keyPath]).filter(x):h?this.filter(x):this.where(u).equals("")},Le.prototype.filter=function(l){return this.toCollection().and(l)},Le.prototype.count=function(l){return this.toCollection().count(l)},Le.prototype.offset=function(l){return this.toCollection().offset(l)},Le.prototype.limit=function(l){return this.toCollection().limit(l)},Le.prototype.each=function(l){return this.toCollection().each(l)},Le.prototype.toArray=function(l){return this.toCollection().toArray(l)},Le.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Le.prototype.orderBy=function(l){return new this.db.Collection(new this.db.WhereClause(this,a(l)?"[".concat(l.join("+"),"]"):l))},Le.prototype.reverse=function(){return this.toCollection().reverse()},Le.prototype.mapToClass=function(l){var u,h=this.db,m=this.name;function g(){return u!==null&&u.apply(this,arguments)||this}(this.schema.mappedClass=l).prototype instanceof lu&&((function(A,O){if(typeof O!="function"&&O!==null)throw new TypeError("Class extends value "+String(O)+" is not a constructor or null");function P(){this.constructor=A}n(A,O),A.prototype=O===null?Object.create(O):(P.prototype=O.prototype,new P)})(g,u=l),Object.defineProperty(g.prototype,"db",{get:function(){return h},enumerable:!1,configurable:!0}),g.prototype.table=function(){return m},l=g);for(var w=new Set,x=l.prototype;x;x=d(x))Object.getOwnPropertyNames(x).forEach(function(A){return w.add(A)});function S(A){if(!A)return A;var O,P=Object.create(l.prototype);for(O in A)if(!w.has(O))try{P[O]=A[O]}catch{}return P}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=S,this.hook("reading",S),l},Le.prototype.defineClass=function(){return this.mapToClass(function(l){c(this,l)})},Le.prototype.add=function(l,u){var h=this,m=this.schema.primKey,g=m.auto,w=m.keyPath,x=l;return w&&g&&(x=Ki(w)(l)),this._trans("readwrite",function(S){return h.core.mutate({trans:S,type:"add",keys:u!=null?[u]:null,values:[x]})}).then(function(S){return S.numFailures?ce.reject(S.failures[0]):S.lastResult}).then(function(S){if(w)try{I(l,w,S)}catch{}return S})},Le.prototype.update=function(l,u){return typeof l!="object"||a(l)?this.where(":id").equals(l).modify(u):(l=W(l,this.schema.primKey.keyPath),l===void 0?je(new fe.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(l).modify(u))},Le.prototype.put=function(l,u){var h=this,m=this.schema.primKey,g=m.auto,w=m.keyPath,x=l;return w&&g&&(x=Ki(w)(l)),this._trans("readwrite",function(S){return h.core.mutate({trans:S,type:"put",values:[x],keys:u!=null?[u]:null})}).then(function(S){return S.numFailures?ce.reject(S.failures[0]):S.lastResult}).then(function(S){if(w)try{I(l,w,S)}catch{}return S})},Le.prototype.delete=function(l){var u=this;return this._trans("readwrite",function(h){return u.core.mutate({trans:h,type:"delete",keys:[l]})}).then(function(h){return h.numFailures?ce.reject(h.failures[0]):void 0})},Le.prototype.clear=function(){var l=this;return this._trans("readwrite",function(u){return l.core.mutate({trans:u,type:"deleteRange",range:au})}).then(function(u){return u.numFailures?ce.reject(u.failures[0]):void 0})},Le.prototype.bulkGet=function(l){var u=this;return this._trans("readonly",function(h){return u.core.getMany({keys:l,trans:h}).then(function(m){return m.map(function(g){return u.hook.reading.fire(g)})})})},Le.prototype.bulkAdd=function(l,u,h){var m=this,g=Array.isArray(u)?u:void 0,w=(h=h||(g?void 0:u))?h.allKeys:void 0;return this._trans("readwrite",function(x){var O=m.schema.primKey,S=O.auto,O=O.keyPath;if(O&&g)throw new fe.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(g&&g.length!==l.length)throw new fe.InvalidArgument("Arguments objects and keys must have the same length");var A=l.length,O=O&&S?l.map(Ki(O)):l;return m.core.mutate({trans:x,type:"add",keys:g,values:O,wantResults:w}).then(function(M){var _=M.numFailures,j=M.results,R=M.lastResult,M=M.failures;if(_===0)return w?j:R;throw new yn("".concat(m.name,".bulkAdd(): ").concat(_," of ").concat(A," operations failed"),M)})})},Le.prototype.bulkPut=function(l,u,h){var m=this,g=Array.isArray(u)?u:void 0,w=(h=h||(g?void 0:u))?h.allKeys:void 0;return this._trans("readwrite",function(x){var O=m.schema.primKey,S=O.auto,O=O.keyPath;if(O&&g)throw new fe.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(g&&g.length!==l.length)throw new fe.InvalidArgument("Arguments objects and keys must have the same length");var A=l.length,O=O&&S?l.map(Ki(O)):l;return m.core.mutate({trans:x,type:"put",keys:g,values:O,wantResults:w}).then(function(M){var _=M.numFailures,j=M.results,R=M.lastResult,M=M.failures;if(_===0)return w?j:R;throw new yn("".concat(m.name,".bulkPut(): ").concat(_," of ").concat(A," operations failed"),M)})})},Le.prototype.bulkUpdate=function(l){var u=this,h=this.core,m=l.map(function(x){return x.key}),g=l.map(function(x){return x.changes}),w=[];return this._trans("readwrite",function(x){return h.getMany({trans:x,keys:m,cache:"clone"}).then(function(S){var A=[],O=[];l.forEach(function(_,j){var R=_.key,M=_.changes,N=S[j];if(N){for(var D=0,F=Object.keys(M);D<F.length;D++){var U=F[D],B=M[U];if(U===u.schema.primKey.keyPath){if(Ce(B,R)!==0)throw new fe.Constraint("Cannot update primary key in bulkUpdate()")}else I(N,U,B)}w.push(j),A.push(R),O.push(N)}});var P=A.length;return h.mutate({trans:x,type:"put",keys:A,values:O,updates:{keys:m,changeSpecs:g}}).then(function(_){var j=_.numFailures,R=_.failures;if(j===0)return P;for(var M=0,N=Object.keys(R);M<N.length;M++){var D,F=N[M],U=w[Number(F)];U!=null&&(D=R[F],delete R[F],R[U]=D)}throw new yn("".concat(u.name,".bulkUpdate(): ").concat(j," of ").concat(P," operations failed"),R)})})})},Le.prototype.bulkDelete=function(l){var u=this,h=l.length;return this._trans("readwrite",function(m){return u.core.mutate({trans:m,type:"delete",keys:l})}).then(function(x){var g=x.numFailures,w=x.lastResult,x=x.failures;if(g===0)return w;throw new yn("".concat(u.name,".bulkDelete(): ").concat(g," of ").concat(h," operations failed"),x)})},Le);function Le(){}function Nr(l){function u(x,S){if(S){for(var A=arguments.length,O=new Array(A-1);--A;)O[A-1]=arguments[A];return h[x].subscribe.apply(null,O),l}if(typeof x=="string")return h[x]}var h={};u.addEventType=w;for(var m=1,g=arguments.length;m<g;++m)w(arguments[m]);return u;function w(x,S,A){if(typeof x!="object"){var O;S=S||Kg;var P={subscribers:[],fire:A=A||Ie,subscribe:function(_){P.subscribers.indexOf(_)===-1&&(P.subscribers.push(_),P.fire=S(P.fire,_))},unsubscribe:function(_){P.subscribers=P.subscribers.filter(function(j){return j!==_}),P.fire=P.subscribers.reduce(S,A)}};return h[x]=u[x]=P}o(O=x).forEach(function(_){var j=O[_];if(a(j))w(_,O[_][0],O[_][1]);else{if(j!=="asap")throw new fe.InvalidArgument("Invalid event config");var R=w(_,Dr,function(){for(var M=arguments.length,N=new Array(M);M--;)N[M]=arguments[M];R.subscribers.forEach(function(D){ne(function(){D.apply(null,N)})})})}})}}function jr(l,u){return $(u).from({prototype:l}),u}function Zn(l,u){return!(l.filter||l.algorithm||l.or)&&(u?l.justLimit:!l.replayFilter)}function ia(l,u){l.filter=_n(l.filter,u)}function sa(l,u,h){var m=l.replayFilter;l.replayFilter=m?function(){return _n(m(),u())}:u,l.justLimit=h&&!m}function Wi(l,u){if(l.isPrimKey)return u.primaryKey;var h=u.getIndexByKeyPath(l.index);if(!h)throw new fe.Schema("KeyPath "+l.index+" on object store "+u.name+" is not indexed");return h}function hu(l,u,h){var m=Wi(l,u.schema);return u.openCursor({trans:h,values:!l.keysOnly,reverse:l.dir==="prev",unique:!!l.unique,query:{index:m,range:l.range}})}function Gi(l,u,h,m){var g=l.replayFilter?_n(l.filter,l.replayFilter()):l.filter;if(l.or){var w={},x=function(S,A,O){var P,_;g&&!g(A,O,function(j){return A.stop(j)},function(j){return A.fail(j)})||((_=""+(P=A.primaryKey))=="[object ArrayBuffer]"&&(_=""+new Uint8Array(P)),p(w,_)||(w[_]=!0,u(S,A,O)))};return Promise.all([l.or._iterate(x,h),fu(hu(l,m,h),l.algorithm,x,!l.keysOnly&&l.valueMapper)])}return fu(hu(l,m,h),_n(l.algorithm,g),u,!l.keysOnly&&l.valueMapper)}function fu(l,u,h,m){var g=Pe(m?function(w,x,S){return h(m(w),x,S)}:h);return l.then(function(w){if(w)return w.start(function(){var x=function(){return w.continue()};u&&!u(w,function(S){return x=S},function(S){w.stop(S),x=Ie},function(S){w.fail(S),x=Ie})||g(w.value,w,function(S){return x=S}),x()})})}var Yt=Symbol(),Fr=(pu.prototype.execute=function(l){if(this.add!==void 0){var u=this.add;if(a(u))return i(i([],a(l)?l:[],!0),u).sort();if(typeof u=="number")return(Number(l)||0)+u;if(typeof u=="bigint")try{return BigInt(l)+u}catch{return BigInt(0)+u}throw new TypeError("Invalid term ".concat(u))}if(this.remove!==void 0){var h=this.remove;if(a(h))return a(l)?l.filter(function(m){return!h.includes(m)}).sort():[];if(typeof h=="number")return Number(l)-h;if(typeof h=="bigint")try{return BigInt(l)-h}catch{return BigInt(0)-h}throw new TypeError("Invalid subtrahend ".concat(h))}return u=(u=this.replacePrefix)===null||u===void 0?void 0:u[0],u&&typeof l=="string"&&l.startsWith(u)?this.replacePrefix[1]+l.substring(u.length):l},pu);function pu(l){Object.assign(this,l)}var Xg=(_e.prototype._read=function(l,u){var h=this._ctx;return h.error?h.table._trans(null,je.bind(null,h.error)):h.table._trans("readonly",l).then(u)},_e.prototype._write=function(l){var u=this._ctx;return u.error?u.table._trans(null,je.bind(null,u.error)):u.table._trans("readwrite",l,"locked")},_e.prototype._addAlgorithm=function(l){var u=this._ctx;u.algorithm=_n(u.algorithm,l)},_e.prototype._iterate=function(l,u){return Gi(this._ctx,l,u,this._ctx.table.core)},_e.prototype.clone=function(l){var u=Object.create(this.constructor.prototype),h=Object.create(this._ctx);return l&&c(h,l),u._ctx=h,u},_e.prototype.raw=function(){return this._ctx.valueMapper=null,this},_e.prototype.each=function(l){var u=this._ctx;return this._read(function(h){return Gi(u,l,h,u.table.core)})},_e.prototype.count=function(l){var u=this;return this._read(function(h){var m=u._ctx,g=m.table.core;if(Zn(m,!0))return g.count({trans:h,query:{index:Wi(m,g.schema),range:m.range}}).then(function(x){return Math.min(x,m.limit)});var w=0;return Gi(m,function(){return++w,!1},h,g).then(function(){return w})}).then(l)},_e.prototype.sortBy=function(l,u){var h=l.split(".").reverse(),m=h[0],g=h.length-1;function w(A,O){return O?w(A[h[O]],O-1):A[m]}var x=this._ctx.dir==="next"?1:-1;function S(A,O){return Ce(w(A,g),w(O,g))*x}return this.toArray(function(A){return A.sort(S)}).then(u)},_e.prototype.toArray=function(l){var u=this;return this._read(function(h){var m=u._ctx;if(m.dir==="next"&&Zn(m,!0)&&0<m.limit){var g=m.valueMapper,w=Wi(m,m.table.core.schema);return m.table.core.query({trans:h,limit:m.limit,values:!0,query:{index:w,range:m.range}}).then(function(S){return S=S.result,g?S.map(g):S})}var x=[];return Gi(m,function(S){return x.push(S)},h,m.table.core).then(function(){return x})},l)},_e.prototype.offset=function(l){var u=this._ctx;return l<=0||(u.offset+=l,Zn(u)?sa(u,function(){var h=l;return function(m,g){return h===0||(h===1?--h:g(function(){m.advance(h),h=0}),!1)}}):sa(u,function(){var h=l;return function(){return--h<0}})),this},_e.prototype.limit=function(l){return this._ctx.limit=Math.min(this._ctx.limit,l),sa(this._ctx,function(){var u=l;return function(h,m,g){return--u<=0&&m(g),0<=u}},!0),this},_e.prototype.until=function(l,u){return ia(this._ctx,function(h,m,g){return!l(h.value)||(m(g),u)}),this},_e.prototype.first=function(l){return this.limit(1).toArray(function(u){return u[0]}).then(l)},_e.prototype.last=function(l){return this.reverse().first(l)},_e.prototype.filter=function(l){var u;return ia(this._ctx,function(h){return l(h.value)}),(u=this._ctx).isMatch=_n(u.isMatch,l),this},_e.prototype.and=function(l){return this.filter(l)},_e.prototype.or=function(l){return new this.db.WhereClause(this._ctx.table,l,this)},_e.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},_e.prototype.desc=function(){return this.reverse()},_e.prototype.eachKey=function(l){var u=this._ctx;return u.keysOnly=!u.isMatch,this.each(function(h,m){l(m.key,m)})},_e.prototype.eachUniqueKey=function(l){return this._ctx.unique="unique",this.eachKey(l)},_e.prototype.eachPrimaryKey=function(l){var u=this._ctx;return u.keysOnly=!u.isMatch,this.each(function(h,m){l(m.primaryKey,m)})},_e.prototype.keys=function(l){var u=this._ctx;u.keysOnly=!u.isMatch;var h=[];return this.each(function(m,g){h.push(g.key)}).then(function(){return h}).then(l)},_e.prototype.primaryKeys=function(l){var u=this._ctx;if(u.dir==="next"&&Zn(u,!0)&&0<u.limit)return this._read(function(m){var g=Wi(u,u.table.core.schema);return u.table.core.query({trans:m,values:!1,limit:u.limit,query:{index:g,range:u.range}})}).then(function(m){return m.result}).then(l);u.keysOnly=!u.isMatch;var h=[];return this.each(function(m,g){h.push(g.primaryKey)}).then(function(){return h}).then(l)},_e.prototype.uniqueKeys=function(l){return this._ctx.unique="unique",this.keys(l)},_e.prototype.firstKey=function(l){return this.limit(1).keys(function(u){return u[0]}).then(l)},_e.prototype.lastKey=function(l){return this.reverse().firstKey(l)},_e.prototype.distinct=function(){var l=this._ctx,l=l.index&&l.table.schema.idxByName[l.index];if(!l||!l.multi)return this;var u={};return ia(this._ctx,function(g){var m=g.primaryKey.toString(),g=p(u,m);return u[m]=!0,!g}),this},_e.prototype.modify=function(l){var u=this,h=this._ctx;return this._write(function(m){var g,w,x;x=typeof l=="function"?l:(g=o(l),w=g.length,function(D){for(var F=!1,U=0;U<w;++U){var B=g[U],G=l[B],Z=W(D,B);G instanceof Fr?(I(D,B,G.execute(Z)),F=!0):Z!==G&&(I(D,B,G),F=!0)}return F});var S=h.table.core,_=S.schema.primaryKey,A=_.outbound,O=_.extractKey,P=200,_=u.db._options.modifyChunkSize;_&&(P=typeof _=="object"?_[S.name]||_["*"]||200:_);function j(D,B){var U=B.failures,B=B.numFailures;M+=D-B;for(var G=0,Z=o(U);G<Z.length;G++){var oe=Z[G];R.push(U[oe])}}var R=[],M=0,N=[];return u.clone().primaryKeys().then(function(D){function F(B){var G=Math.min(P,D.length-B);return S.getMany({trans:m,keys:D.slice(B,B+G),cache:"immutable"}).then(function(Z){for(var oe=[],ee=[],re=A?[]:null,le=[],se=0;se<G;++se){var ue=Z[se],be={value:te(ue),primKey:D[B+se]};x.call(be,be.value,be)!==!1&&(be.value==null?le.push(D[B+se]):A||Ce(O(ue),O(be.value))===0?(ee.push(be.value),A&&re.push(D[B+se])):(le.push(D[B+se]),oe.push(be.value)))}return Promise.resolve(0<oe.length&&S.mutate({trans:m,type:"add",values:oe}).then(function(ve){for(var ke in ve.failures)le.splice(parseInt(ke),1);j(oe.length,ve)})).then(function(){return(0<ee.length||U&&typeof l=="object")&&S.mutate({trans:m,type:"put",keys:re,values:ee,criteria:U,changeSpec:typeof l!="function"&&l,isAdditionalChunk:0<B}).then(function(ve){return j(ee.length,ve)})}).then(function(){return(0<le.length||U&&l===oa)&&S.mutate({trans:m,type:"delete",keys:le,criteria:U,isAdditionalChunk:0<B}).then(function(ve){return j(le.length,ve)})}).then(function(){return D.length>B+G&&F(B+P)})})}var U=Zn(h)&&h.limit===1/0&&(typeof l!="function"||l===oa)&&{index:h.index,range:h.range};return F(0).then(function(){if(0<R.length)throw new ze("Error modifying one or more objects",R,M,N);return D.length})})})},_e.prototype.delete=function(){var l=this._ctx,u=l.range;return Zn(l)&&(l.isPrimKey||u.type===3)?this._write(function(h){var m=l.table.core.schema.primaryKey,g=u;return l.table.core.count({trans:h,query:{index:m,range:g}}).then(function(w){return l.table.core.mutate({trans:h,type:"deleteRange",range:g}).then(function(x){var S=x.failures;if(x.lastResult,x.results,x=x.numFailures,x)throw new ze("Could not delete some values",Object.keys(S).map(function(A){return S[A]}),w-x);return w-x})})}):this.modify(oa)},_e);function _e(){}var oa=function(l,u){return u.value=null};function Zg(l,u){return l<u?-1:l===u?0:1}function eb(l,u){return u<l?-1:l===u?0:1}function vt(l,u,h){return l=l instanceof gu?new l.Collection(l):l,l._ctx.error=new(h||TypeError)(u),l}function er(l){return new l.Collection(l,function(){return mu("")}).limit(0)}function Yi(l,u,h,m){var g,w,x,S,A,O,P,_=h.length;if(!h.every(function(M){return typeof M=="string"}))return vt(l,ou);function j(M){g=M==="next"?function(D){return D.toUpperCase()}:function(D){return D.toLowerCase()},w=M==="next"?function(D){return D.toLowerCase()}:function(D){return D.toUpperCase()},x=M==="next"?Zg:eb;var N=h.map(function(D){return{lower:w(D),upper:g(D)}}).sort(function(D,F){return x(D.lower,F.lower)});S=N.map(function(D){return D.upper}),A=N.map(function(D){return D.lower}),P=(O=M)==="next"?"":m}j("next"),l=new l.Collection(l,function(){return on(S[0],A[_-1]+m)}),l._ondirectionchange=function(M){j(M)};var R=0;return l._addAlgorithm(function(M,N,D){var F=M.key;if(typeof F!="string")return!1;var U=w(F);if(u(U,A,R))return!0;for(var B=null,G=R;G<_;++G){var Z=(function(oe,ee,re,le,se,ue){for(var be=Math.min(oe.length,le.length),ve=-1,ke=0;ke<be;++ke){var kt=ee[ke];if(kt!==le[ke])return se(oe[ke],re[ke])<0?oe.substr(0,ke)+re[ke]+re.substr(ke+1):se(oe[ke],le[ke])<0?oe.substr(0,ke)+le[ke]+re.substr(ke+1):0<=ve?oe.substr(0,ve)+ee[ve]+re.substr(ve+1):null;se(oe[ke],kt)<0&&(ve=ke)}return be<le.length&&ue==="next"?oe+re.substr(oe.length):be<oe.length&&ue==="prev"?oe.substr(0,re.length):ve<0?null:oe.substr(0,ve)+le[ve]+re.substr(ve+1)})(F,U,S[G],A[G],x,O);Z===null&&B===null?R=G+1:(B===null||0<x(B,Z))&&(B=Z)}return N(B!==null?function(){M.continue(B+P)}:D),!1}),l}function on(l,u,h,m){return{type:2,lower:l,upper:u,lowerOpen:h,upperOpen:m}}function mu(l){return{type:1,lower:l,upper:l}}var gu=(Object.defineProperty(Ge.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),Ge.prototype.between=function(l,u,h,m){h=h!==!1,m=m===!0;try{return 0<this._cmp(l,u)||this._cmp(l,u)===0&&(h||m)&&(!h||!m)?er(this):new this.Collection(this,function(){return on(l,u,!h,!m)})}catch{return vt(this,Gt)}},Ge.prototype.equals=function(l){return l==null?vt(this,Gt):new this.Collection(this,function(){return mu(l)})},Ge.prototype.above=function(l){return l==null?vt(this,Gt):new this.Collection(this,function(){return on(l,void 0,!0)})},Ge.prototype.aboveOrEqual=function(l){return l==null?vt(this,Gt):new this.Collection(this,function(){return on(l,void 0,!1)})},Ge.prototype.below=function(l){return l==null?vt(this,Gt):new this.Collection(this,function(){return on(void 0,l,!1,!0)})},Ge.prototype.belowOrEqual=function(l){return l==null?vt(this,Gt):new this.Collection(this,function(){return on(void 0,l)})},Ge.prototype.startsWith=function(l){return typeof l!="string"?vt(this,ou):this.between(l,l+Cn,!0,!0)},Ge.prototype.startsWithIgnoreCase=function(l){return l===""?this.startsWith(l):Yi(this,function(u,h){return u.indexOf(h[0])===0},[l],Cn)},Ge.prototype.equalsIgnoreCase=function(l){return Yi(this,function(u,h){return u===h[0]},[l],"")},Ge.prototype.anyOfIgnoreCase=function(){var l=pe.apply(Me,arguments);return l.length===0?er(this):Yi(this,function(u,h){return h.indexOf(u)!==-1},l,"")},Ge.prototype.startsWithAnyOfIgnoreCase=function(){var l=pe.apply(Me,arguments);return l.length===0?er(this):Yi(this,function(u,h){return h.some(function(m){return u.indexOf(m)===0})},l,Cn)},Ge.prototype.anyOf=function(){var l=this,u=pe.apply(Me,arguments),h=this._cmp;try{u.sort(h)}catch{return vt(this,Gt)}if(u.length===0)return er(this);var m=new this.Collection(this,function(){return on(u[0],u[u.length-1])});m._ondirectionchange=function(w){h=w==="next"?l._ascending:l._descending,u.sort(h)};var g=0;return m._addAlgorithm(function(w,x,S){for(var A=w.key;0<h(A,u[g]);)if(++g===u.length)return x(S),!1;return h(A,u[g])===0||(x(function(){w.continue(u[g])}),!1)}),m},Ge.prototype.notEqual=function(l){return this.inAnyRange([[-1/0,l],[l,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Ge.prototype.noneOf=function(){var l=pe.apply(Me,arguments);if(l.length===0)return new this.Collection(this);try{l.sort(this._ascending)}catch{return vt(this,Gt)}var u=l.reduce(function(h,m){return h?h.concat([[h[h.length-1][1],m]]):[[-1/0,m]]},null);return u.push([l[l.length-1],this.db._maxKey]),this.inAnyRange(u,{includeLowers:!1,includeUppers:!1})},Ge.prototype.inAnyRange=function(F,u){var h=this,m=this._cmp,g=this._ascending,w=this._descending,x=this._min,S=this._max;if(F.length===0)return er(this);if(!F.every(function(U){return U[0]!==void 0&&U[1]!==void 0&&g(U[0],U[1])<=0}))return vt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",fe.InvalidArgument);var A=!u||u.includeLowers!==!1,O=u&&u.includeUppers===!0,P,_=g;function j(U,B){return _(U[0],B[0])}try{(P=F.reduce(function(U,B){for(var G=0,Z=U.length;G<Z;++G){var oe=U[G];if(m(B[0],oe[1])<0&&0<m(B[1],oe[0])){oe[0]=x(oe[0],B[0]),oe[1]=S(oe[1],B[1]);break}}return G===Z&&U.push(B),U},[])).sort(j)}catch{return vt(this,Gt)}var R=0,M=O?function(U){return 0<g(U,P[R][1])}:function(U){return 0<=g(U,P[R][1])},N=A?function(U){return 0<w(U,P[R][0])}:function(U){return 0<=w(U,P[R][0])},D=M,F=new this.Collection(this,function(){return on(P[0][0],P[P.length-1][1],!A,!O)});return F._ondirectionchange=function(U){_=U==="next"?(D=M,g):(D=N,w),P.sort(j)},F._addAlgorithm(function(U,B,G){for(var Z,oe=U.key;D(oe);)if(++R===P.length)return B(G),!1;return!M(Z=oe)&&!N(Z)||(h._cmp(oe,P[R][1])===0||h._cmp(oe,P[R][0])===0||B(function(){_===g?U.continue(P[R][0]):U.continue(P[R][1])}),!1)}),F},Ge.prototype.startsWithAnyOf=function(){var l=pe.apply(Me,arguments);return l.every(function(u){return typeof u=="string"})?l.length===0?er(this):this.inAnyRange(l.map(function(u){return[u,u+Cn]})):vt(this,"startsWithAnyOf() only works with strings")},Ge);function Ge(){}function qt(l){return Pe(function(u){return Ur(u),l(u.target.error),!1})}function Ur(l){l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault()}var Br="storagemutated",aa="x-storagemutated-1",an=Nr(null,Br),tb=(Ht.prototype._lock=function(){return L(!he.global),++this._reculock,this._reculock!==1||he.global||(he.lockOwnerFor=this),this},Ht.prototype._unlock=function(){if(L(!he.global),--this._reculock==0)for(he.global||(he.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var l=this._blockedFuncs.shift();try{Sn(l[1],l[0])}catch{}}return this},Ht.prototype._locked=function(){return this._reculock&&he.lockOwnerFor!==this},Ht.prototype.create=function(l){var u=this;if(!this.mode)return this;var h=this.db.idbdb,m=this.db._state.dbOpenError;if(L(!this.idbtrans),!l&&!h)switch(m&&m.name){case"DatabaseClosedError":throw new fe.DatabaseClosed(m);case"MissingAPIError":throw new fe.MissingAPI(m.message,m);default:throw new fe.OpenFailed(m)}if(!this.active)throw new fe.TransactionInactive;return L(this._completion._state===null),(l=this.idbtrans=l||(this.db.core||h).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Pe(function(g){Ur(g),u._reject(l.error)}),l.onabort=Pe(function(g){Ur(g),u.active&&u._reject(new fe.Abort(l.error)),u.active=!1,u.on("abort").fire(g)}),l.oncomplete=Pe(function(){u.active=!1,u._resolve(),"mutatedParts"in l&&an.storagemutated.fire(l.mutatedParts)}),this},Ht.prototype._promise=function(l,u,h){var m=this;if(l==="readwrite"&&this.mode!=="readwrite")return je(new fe.ReadOnly("Transaction is readonly"));if(!this.active)return je(new fe.TransactionInactive);if(this._locked())return new ce(function(w,x){m._blockedFuncs.push([function(){m._promise(l,u,h).then(w,x)},he])});if(h)return nn(function(){var w=new ce(function(x,S){m._lock();var A=u(x,S,m);A&&A.then&&A.then(x,S)});return w.finally(function(){return m._unlock()}),w._lib=!0,w});var g=new ce(function(w,x){var S=u(w,x,m);S&&S.then&&S.then(w,x)});return g._lib=!0,g},Ht.prototype._root=function(){return this.parent?this.parent._root():this},Ht.prototype.waitFor=function(l){var u,h=this._root(),m=ce.resolve(l);h._waitingFor?h._waitingFor=h._waitingFor.then(function(){return m}):(h._waitingFor=m,h._waitingQueue=[],u=h.idbtrans.objectStore(h.storeNames[0]),(function w(){for(++h._spinCount;h._waitingQueue.length;)h._waitingQueue.shift()();h._waitingFor&&(u.get(-1/0).onsuccess=w)})());var g=h._waitingFor;return new ce(function(w,x){m.then(function(S){return h._waitingQueue.push(Pe(w.bind(null,S)))},function(S){return h._waitingQueue.push(Pe(x.bind(null,S)))}).finally(function(){h._waitingFor===g&&(h._waitingFor=null)})})},Ht.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new fe.Abort))},Ht.prototype.table=function(l){var u=this._memoizedTables||(this._memoizedTables={});if(p(u,l))return u[l];var h=this.schema[l];if(!h)throw new fe.NotFound("Table "+l+" not part of transaction");return h=new this.db.Table(l,h,this),h.core=this.db.core.table(l),u[l]=h},Ht);function Ht(){}function la(l,u,h,m,g,w,x){return{name:l,keyPath:u,unique:h,multi:m,auto:g,compound:w,src:(h&&!x?"&":"")+(m?"*":"")+(g?"++":"")+bu(u)}}function bu(l){return typeof l=="string"?l:l?"["+[].join.call(l,"+")+"]":""}function ca(l,u,h){return{name:l,primKey:u,indexes:h,mappedClass:null,idxByName:(m=function(g){return[g.name,g]},h.reduce(function(g,w,x){return x=m(w,x),x&&(g[x[0]]=x[1]),g},{}))};var m}var qr=function(l){try{return l.only([[]]),qr=function(){return[[]]},[[]]}catch{return qr=function(){return Cn},Cn}};function ua(l){return l==null?function(){}:typeof l=="string"?(u=l).split(".").length===1?function(h){return h[u]}:function(h){return W(h,u)}:function(h){return W(h,l)};var u}function wu(l){return[].slice.call(l)}var nb=0;function Hr(l){return l==null?":id":typeof l=="string"?l:"[".concat(l.join("+"),"]")}function rb(l,u,A){function m(D){if(D.type===3)return null;if(D.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var R=D.lower,M=D.upper,N=D.lowerOpen,D=D.upperOpen;return R===void 0?M===void 0?null:u.upperBound(M,!!D):M===void 0?u.lowerBound(R,!!N):u.bound(R,M,!!N,!!D)}function g(j){var R,M=j.name;return{name:M,schema:j,mutate:function(N){var D=N.trans,F=N.type,U=N.keys,B=N.values,G=N.range;return new Promise(function(Z,oe){Z=Pe(Z);var ee=D.objectStore(M),re=ee.keyPath==null,le=F==="put"||F==="add";if(!le&&F!=="delete"&&F!=="deleteRange")throw new Error("Invalid operation type: "+F);var se,ue=(U||B||{length:1}).length;if(U&&B&&U.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(ue===0)return Z({numFailures:0,failures:{},results:[],lastResult:void 0});function be(at){++kt,Ur(at)}var ve=[],ke=[],kt=0;if(F==="deleteRange"){if(G.type===4)return Z({numFailures:kt,failures:ke,results:[],lastResult:void 0});G.type===3?ve.push(se=ee.clear()):ve.push(se=ee.delete(m(G)))}else{var re=le?re?[B,U]:[B,null]:[U,null],ge=re[0],tt=re[1];if(le)for(var nt=0;nt<ue;++nt)ve.push(se=tt&&tt[nt]!==void 0?ee[F](ge[nt],tt[nt]):ee[F](ge[nt])),se.onerror=be;else for(nt=0;nt<ue;++nt)ve.push(se=ee[F](ge[nt])),se.onerror=be}function ls(at){at=at.target.result,ve.forEach(function(In,Ta){return In.error!=null&&(ke[Ta]=In.error)}),Z({numFailures:kt,failures:ke,results:F==="delete"?U:ve.map(function(In){return In.result}),lastResult:at})}se.onerror=function(at){be(at),ls(at)},se.onsuccess=ls})},getMany:function(N){var D=N.trans,F=N.keys;return new Promise(function(U,B){U=Pe(U);for(var G,Z=D.objectStore(M),oe=F.length,ee=new Array(oe),re=0,le=0,se=function(ve){ve=ve.target,ee[ve._pos]=ve.result,++le===re&&U(ee)},ue=qt(B),be=0;be<oe;++be)F[be]!=null&&((G=Z.get(F[be]))._pos=be,G.onsuccess=se,G.onerror=ue,++re);re===0&&U(ee)})},get:function(N){var D=N.trans,F=N.key;return new Promise(function(U,B){U=Pe(U);var G=D.objectStore(M).get(F);G.onsuccess=function(Z){return U(Z.target.result)},G.onerror=qt(B)})},query:(R=O,function(N){return new Promise(function(D,F){D=Pe(D);var U,B,G,re=N.trans,Z=N.values,oe=N.limit,se=N.query,ee=oe===1/0?void 0:oe,le=se.index,se=se.range,re=re.objectStore(M),le=le.isPrimaryKey?re:re.index(le.name),se=m(se);if(oe===0)return D({result:[]});R?((ee=Z?le.getAll(se,ee):le.getAllKeys(se,ee)).onsuccess=function(ue){return D({result:ue.target.result})},ee.onerror=qt(F)):(U=0,B=!Z&&"openKeyCursor"in le?le.openKeyCursor(se):le.openCursor(se),G=[],B.onsuccess=function(ue){var be=B.result;return be?(G.push(Z?be.value:be.primaryKey),++U===oe?D({result:G}):void be.continue()):D({result:G})},B.onerror=qt(F))})}),openCursor:function(N){var D=N.trans,F=N.values,U=N.query,B=N.reverse,G=N.unique;return new Promise(function(Z,oe){Z=Pe(Z);var le=U.index,ee=U.range,re=D.objectStore(M),re=le.isPrimaryKey?re:re.index(le.name),le=B?G?"prevunique":"prev":G?"nextunique":"next",se=!F&&"openKeyCursor"in re?re.openKeyCursor(m(ee),le):re.openCursor(m(ee),le);se.onerror=qt(oe),se.onsuccess=Pe(function(ue){var be,ve,ke,kt,ge=se.result;ge?(ge.___id=++nb,ge.done=!1,be=ge.continue.bind(ge),ve=(ve=ge.continuePrimaryKey)&&ve.bind(ge),ke=ge.advance.bind(ge),kt=function(){throw new Error("Cursor not stopped")},ge.trans=D,ge.stop=ge.continue=ge.continuePrimaryKey=ge.advance=function(){throw new Error("Cursor not started")},ge.fail=Pe(oe),ge.next=function(){var tt=this,nt=1;return this.start(function(){return nt--?tt.continue():tt.stop()}).then(function(){return tt})},ge.start=function(tt){function nt(){if(se.result)try{tt()}catch(at){ge.fail(at)}else ge.done=!0,ge.start=function(){throw new Error("Cursor behind last entry")},ge.stop()}var ls=new Promise(function(at,In){at=Pe(at),se.onerror=qt(In),ge.fail=In,ge.stop=function(Ta){ge.stop=ge.continue=ge.continuePrimaryKey=ge.advance=kt,at(Ta)}});return se.onsuccess=Pe(function(at){se.onsuccess=nt,nt()}),ge.continue=be,ge.continuePrimaryKey=ve,ge.advance=ke,nt(),ls},Z(ge)):Z(null)},oe)})},count:function(N){var D=N.query,F=N.trans,U=D.index,B=D.range;return new Promise(function(G,Z){var oe=F.objectStore(M),ee=U.isPrimaryKey?oe:oe.index(U.name),oe=m(B),ee=oe?ee.count(oe):ee.count();ee.onsuccess=Pe(function(re){return G(re.target.result)}),ee.onerror=qt(Z)})}}}var w,x,S,P=(x=A,S=wu((w=l).objectStoreNames),{schema:{name:w.name,tables:S.map(function(j){return x.objectStore(j)}).map(function(j){var R=j.keyPath,D=j.autoIncrement,M=a(R),N={},D={name:j.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:R==null,compound:M,keyPath:R,autoIncrement:D,unique:!0,extractKey:ua(R)},indexes:wu(j.indexNames).map(function(F){return j.index(F)}).map(function(G){var U=G.name,B=G.unique,Z=G.multiEntry,G=G.keyPath,Z={name:U,compound:a(G),keyPath:G,unique:B,multiEntry:Z,extractKey:ua(G)};return N[Hr(G)]=Z}),getIndexByKeyPath:function(F){return N[Hr(F)]}};return N[":id"]=D.primaryKey,R!=null&&(N[Hr(R)]=D.primaryKey),D})},hasGetAll:0<S.length&&"getAll"in x.objectStore(S[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),A=P.schema,O=P.hasGetAll,P=A.tables.map(g),_={};return P.forEach(function(j){return _[j.name]=j}),{stack:"dbcore",transaction:l.transaction.bind(l),table:function(j){if(!_[j])throw new Error("Table '".concat(j,"' not found"));return _[j]},MIN_KEY:-1/0,MAX_KEY:qr(u),schema:A}}function ib(l,u,h,m){var g=h.IDBKeyRange;return h.indexedDB,{dbcore:(m=rb(u,g,m),l.dbcore.reduce(function(w,x){return x=x.create,r(r({},w),x(w))},m))}}function Qi(l,m){var h=m.db,m=ib(l._middlewares,h,l._deps,m);l.core=m.dbcore,l.tables.forEach(function(g){var w=g.name;l.core.schema.tables.some(function(x){return x.name===w})&&(g.core=l.core.table(w),l[w]instanceof l.Table&&(l[w].core=g.core))})}function Ji(l,u,h,m){h.forEach(function(g){var w=m[g];u.forEach(function(x){var S=(function A(O,P){return C(O,P)||(O=d(O))&&A(O,P)})(x,g);(!S||"value"in S&&S.value===void 0)&&(x===l.Transaction.prototype||x instanceof l.Transaction?k(x,g,{get:function(){return this.table(g)},set:function(A){y(this,g,{value:A,writable:!0,configurable:!0,enumerable:!0})}}):x[g]=new l.Table(g,w))})})}function da(l,u){u.forEach(function(h){for(var m in h)h[m]instanceof l.Table&&delete h[m]})}function sb(l,u){return l._cfg.version-u._cfg.version}function ob(l,u,h,m){var g=l._dbSchema;h.objectStoreNames.contains("$meta")&&!g.$meta&&(g.$meta=ca("$meta",vu("")[0],[]),l._storeNames.push("$meta"));var w=l._createTransaction("readwrite",l._storeNames,g);w.create(h),w._completion.catch(m);var x=w._reject.bind(w),S=he.transless||he;nn(function(){return he.trans=w,he.transless=S,u!==0?(Qi(l,h),O=u,((A=w).storeNames.includes("$meta")?A.table("$meta").get("version").then(function(P){return P??O}):ce.resolve(O)).then(function(P){return j=P,R=w,M=h,N=[],P=(_=l)._versions,D=_._dbSchema=Zi(0,_.idbdb,M),(P=P.filter(function(F){return F._cfg.version>=j})).length!==0?(P.forEach(function(F){N.push(function(){var U=D,B=F._cfg.dbschema;es(_,U,M),es(_,B,M),D=_._dbSchema=B;var G=ha(U,B);G.add.forEach(function(le){fa(M,le[0],le[1].primKey,le[1].indexes)}),G.change.forEach(function(le){if(le.recreate)throw new fe.Upgrade("Not yet support for changing primary key");var se=M.objectStore(le.name);le.add.forEach(function(ue){return Xi(se,ue)}),le.change.forEach(function(ue){se.deleteIndex(ue.name),Xi(se,ue)}),le.del.forEach(function(ue){return se.deleteIndex(ue)})});var Z=F._cfg.contentUpgrade;if(Z&&F._cfg.version>j){Qi(_,M),R._memoizedTables={};var oe=V(B);G.del.forEach(function(le){oe[le]=U[le]}),da(_,[_.Transaction.prototype]),Ji(_,[_.Transaction.prototype],o(oe),oe),R.schema=oe;var ee,re=yt(Z);return re&&Jn(),G=ce.follow(function(){var le;(ee=Z(R))&&re&&(le=rn.bind(null,null),ee.then(le,le))}),ee&&typeof ee.then=="function"?ce.resolve(ee):G.then(function(){return ee})}}),N.push(function(U){var B,G,Z=F._cfg.dbschema;B=Z,G=U,[].slice.call(G.db.objectStoreNames).forEach(function(oe){return B[oe]==null&&G.db.deleteObjectStore(oe)}),da(_,[_.Transaction.prototype]),Ji(_,[_.Transaction.prototype],_._storeNames,_._dbSchema),R.schema=_._dbSchema}),N.push(function(U){_.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(_.idbdb.version/10)===F._cfg.version?(_.idbdb.deleteObjectStore("$meta"),delete _._dbSchema.$meta,_._storeNames=_._storeNames.filter(function(B){return B!=="$meta"})):U.objectStore("$meta").put(F._cfg.version,"version"))})}),(function F(){return N.length?ce.resolve(N.shift()(R.idbtrans)).then(F):ce.resolve()})().then(function(){yu(D,M)})):ce.resolve();var _,j,R,M,N,D}).catch(x)):(o(g).forEach(function(P){fa(h,P,g[P].primKey,g[P].indexes)}),Qi(l,h),void ce.follow(function(){return l.on.populate.fire(w)}).catch(x));var A,O})}function ab(l,u){yu(l._dbSchema,u),u.db.version%10!=0||u.objectStoreNames.contains("$meta")||u.db.createObjectStore("$meta").add(Math.ceil(u.db.version/10-1),"version");var h=Zi(0,l.idbdb,u);es(l,l._dbSchema,u);for(var m=0,g=ha(h,l._dbSchema).change;m<g.length;m++){var w=(function(x){if(x.change.length||x.recreate)return console.warn("Unable to patch indexes of table ".concat(x.name," because it has changes on the type of index or primary key.")),{value:void 0};var S=u.objectStore(x.name);x.add.forEach(function(A){Bt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(x.name,".").concat(A.src)),Xi(S,A)})})(g[m]);if(typeof w=="object")return w.value}}function ha(l,u){var h,m={del:[],add:[],change:[]};for(h in l)u[h]||m.del.push(h);for(h in u){var g=l[h],w=u[h];if(g){var x={name:h,def:w,recreate:!1,del:[],add:[],change:[]};if(""+(g.primKey.keyPath||"")!=""+(w.primKey.keyPath||"")||g.primKey.auto!==w.primKey.auto)x.recreate=!0,m.change.push(x);else{var S=g.idxByName,A=w.idxByName,O=void 0;for(O in S)A[O]||x.del.push(O);for(O in A){var P=S[O],_=A[O];P?P.src!==_.src&&x.change.push(_):x.add.push(_)}(0<x.del.length||0<x.add.length||0<x.change.length)&&m.change.push(x)}}else m.add.push([h,w])}return m}function fa(l,u,h,m){var g=l.db.createObjectStore(u,h.keyPath?{keyPath:h.keyPath,autoIncrement:h.auto}:{autoIncrement:h.auto});return m.forEach(function(w){return Xi(g,w)}),g}function yu(l,u){o(l).forEach(function(h){u.db.objectStoreNames.contains(h)||(Bt&&console.debug("Dexie: Creating missing table",h),fa(u,h,l[h].primKey,l[h].indexes))})}function Xi(l,u){l.createIndex(u.name,u.keyPath,{unique:u.unique,multiEntry:u.multi})}function Zi(l,u,h){var m={};return T(u.objectStoreNames,0).forEach(function(g){for(var w=h.objectStore(g),x=la(bu(O=w.keyPath),O||"",!0,!1,!!w.autoIncrement,O&&typeof O!="string",!0),S=[],A=0;A<w.indexNames.length;++A){var P=w.index(w.indexNames[A]),O=P.keyPath,P=la(P.name,O,!!P.unique,!!P.multiEntry,!1,O&&typeof O!="string",!1);S.push(P)}m[g]=ca(g,x,S)}),m}function es(l,u,h){for(var m=h.db.objectStoreNames,g=0;g<m.length;++g){var w=m[g],x=h.objectStore(w);l._hasGetAll="getAll"in x;for(var S=0;S<x.indexNames.length;++S){var A=x.indexNames[S],O=x.index(A).keyPath,P=typeof O=="string"?O:"["+T(O).join("+")+"]";!u[w]||(O=u[w].idxByName[P])&&(O.name=A,delete u[w].idxByName[P],u[w].idxByName[A]=O)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&s.WorkerGlobalScope&&s instanceof s.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(l._hasGetAll=!1)}function vu(l){return l.split(",").map(function(u,h){var m=(u=u.trim()).replace(/([&*]|\+\+)/g,""),g=/^\[/.test(m)?m.match(/^\[(.*)\]$/)[1].split("+"):m;return la(m,g||null,/\&/.test(u),/\*/.test(u),/\+\+/.test(u),a(g),h===0)})}var lb=(ts.prototype._parseStoresSpec=function(l,u){o(l).forEach(function(h){if(l[h]!==null){var m=vu(l[h]),g=m.shift();if(g.unique=!0,g.multi)throw new fe.Schema("Primary key cannot be multi-valued");m.forEach(function(w){if(w.auto)throw new fe.Schema("Only primary key can be marked as autoIncrement (++)");if(!w.keyPath)throw new fe.Schema("Index must have a name and cannot be an empty string")}),u[h]=ca(h,g,m)}})},ts.prototype.stores=function(h){var u=this.db;this._cfg.storesSource=this._cfg.storesSource?c(this._cfg.storesSource,h):h;var h=u._versions,m={},g={};return h.forEach(function(w){c(m,w._cfg.storesSource),g=w._cfg.dbschema={},w._parseStoresSpec(m,g)}),u._dbSchema=g,da(u,[u._allTables,u,u.Transaction.prototype]),Ji(u,[u._allTables,u,u.Transaction.prototype,this._cfg.tables],o(g),g),u._storeNames=o(g),this},ts.prototype.upgrade=function(l){return this._cfg.contentUpgrade=Wo(this._cfg.contentUpgrade||Ie,l),this},ts);function ts(){}function pa(l,u){var h=l._dbNamesDB;return h||(h=l._dbNamesDB=new Qt(Vi,{addons:[],indexedDB:l,IDBKeyRange:u})).version(1).stores({dbnames:"name"}),h.table("dbnames")}function ma(l){return l&&typeof l.databases=="function"}function ga(l){return nn(function(){return he.letThrough=!0,l()})}function ba(l){return!("from"in l)}var et=function(l,u){if(!this){var h=new et;return l&&"d"in l&&c(h,l),h}c(this,arguments.length?{d:1,from:l,to:1<arguments.length?u:l}:{d:0})};function Vr(l,u,h){var m=Ce(u,h);if(!isNaN(m)){if(0<m)throw RangeError();if(ba(l))return c(l,{from:u,to:h,d:1});var g=l.l,m=l.r;if(Ce(h,l.from)<0)return g?Vr(g,u,h):l.l={from:u,to:h,d:1,l:null,r:null},$u(l);if(0<Ce(u,l.to))return m?Vr(m,u,h):l.r={from:u,to:h,d:1,l:null,r:null},$u(l);Ce(u,l.from)<0&&(l.from=u,l.l=null,l.d=m?m.d+1:1),0<Ce(h,l.to)&&(l.to=h,l.r=null,l.d=l.l?l.l.d+1:1),h=!l.r,g&&!l.l&&Kr(l,g),m&&h&&Kr(l,m)}}function Kr(l,u){ba(u)||(function h(m,A){var w=A.from,x=A.to,S=A.l,A=A.r;Vr(m,w,x),S&&h(m,S),A&&h(m,A)})(l,u)}function ku(l,u){var h=ns(u),m=h.next();if(m.done)return!1;for(var g=m.value,w=ns(l),x=w.next(g.from),S=x.value;!m.done&&!x.done;){if(Ce(S.from,g.to)<=0&&0<=Ce(S.to,g.from))return!0;Ce(g.from,S.from)<0?g=(m=h.next(S.from)).value:S=(x=w.next(g.from)).value}return!1}function ns(l){var u=ba(l)?null:{s:0,n:l};return{next:function(h){for(var m=0<arguments.length;u;)switch(u.s){case 0:if(u.s=1,m)for(;u.n.l&&Ce(h,u.n.from)<0;)u={up:u,n:u.n.l,s:1};else for(;u.n.l;)u={up:u,n:u.n.l,s:1};case 1:if(u.s=2,!m||Ce(h,u.n.to)<=0)return{value:u.n,done:!1};case 2:if(u.n.r){u.s=3,u={up:u,n:u.n.r,s:0};continue}case 3:u=u.up}return{done:!0}}}}function $u(l){var u,h,m=(((u=l.r)===null||u===void 0?void 0:u.d)||0)-(((h=l.l)===null||h===void 0?void 0:h.d)||0),g=1<m?"r":m<-1?"l":"";g&&(u=g=="r"?"l":"r",h=r({},l),m=l[g],l.from=m.from,l.to=m.to,l[g]=m[g],h[g]=m[u],(l[u]=h).d=xu(h)),l.d=xu(l)}function xu(h){var u=h.r,h=h.l;return(u?h?Math.max(u.d,h.d):u.d:h?h.d:0)+1}function rs(l,u){return o(u).forEach(function(h){l[h]?Kr(l[h],u[h]):l[h]=(function m(g){var w,x,S={};for(w in g)p(g,w)&&(x=g[w],S[w]=!x||typeof x!="object"||de.has(x.constructor)?x:m(x));return S})(u[h])}),l}function wa(l,u){return l.all||u.all||Object.keys(l).some(function(h){return u[h]&&ku(u[h],l[h])})}b(et.prototype,((Et={add:function(l){return Kr(this,l),this},addKey:function(l){return Vr(this,l,l),this},addKeys:function(l){var u=this;return l.forEach(function(h){return Vr(u,h,h)}),this},hasKey:function(l){var u=ns(this).next(l).value;return u&&Ce(u.from,l)<=0&&0<=Ce(u.to,l)}})[ae]=function(){return ns(this)},Et));var En={},ya={},va=!1;function is(l){rs(ya,l),va||(va=!0,setTimeout(function(){va=!1,ka(ya,!(ya={}))},0))}function ka(l,u){u===void 0&&(u=!1);var h=new Set;if(l.all)for(var m=0,g=Object.values(En);m<g.length;m++)Su(x=g[m],l,h,u);else for(var w in l){var x,S=/^idb\:\/\/(.*)\/(.*)\//.exec(w);S&&(w=S[1],S=S[2],(x=En["idb://".concat(w,"/").concat(S)])&&Su(x,l,h,u))}h.forEach(function(A){return A()})}function Su(l,u,h,m){for(var g=[],w=0,x=Object.entries(l.queries.query);w<x.length;w++){for(var S=x[w],A=S[0],O=[],P=0,_=S[1];P<_.length;P++){var j=_[P];wa(u,j.obsSet)?j.subscribers.forEach(function(D){return h.add(D)}):m&&O.push(j)}m&&g.push([A,O])}if(m)for(var R=0,M=g;R<M.length;R++){var N=M[R],A=N[0],O=N[1];l.queries.query[A]=O}}function cb(l){var u=l._state,h=l._deps.indexedDB;if(u.isBeingOpened||l.idbdb)return u.dbReadyPromise.then(function(){return u.dbOpenError?je(u.dbOpenError):l});u.isBeingOpened=!0,u.dbOpenError=null,u.openComplete=!1;var m=u.openCanceller,g=Math.round(10*l.verno),w=!1;function x(){if(u.openCanceller!==m)throw new fe.DatabaseClosed("db.open() was cancelled")}function S(){return new ce(function(j,R){if(x(),!h)throw new fe.MissingAPI;var M=l.name,N=u.autoSchema||!g?h.open(M):h.open(M,g);if(!N)throw new fe.MissingAPI;N.onerror=qt(R),N.onblocked=Pe(l._fireOnBlocked),N.onupgradeneeded=Pe(function(D){var F;P=N.transaction,u.autoSchema&&!l._options.allowEmptyDB?(N.onerror=Ur,P.abort(),N.result.close(),(F=h.deleteDatabase(M)).onsuccess=F.onerror=Pe(function(){R(new fe.NoSuchDatabase("Database ".concat(M," doesnt exist")))})):(P.onerror=qt(R),D=D.oldVersion>Math.pow(2,62)?0:D.oldVersion,_=D<1,l.idbdb=N.result,w&&ab(l,P),ob(l,D/10,P,R))},R),N.onsuccess=Pe(function(){P=null;var D,F,U,B,G,Z=l.idbdb=N.result,oe=T(Z.objectStoreNames);if(0<oe.length)try{var ee=Z.transaction((B=oe).length===1?B[0]:B,"readonly");if(u.autoSchema)F=Z,U=ee,(D=l).verno=F.version/10,U=D._dbSchema=Zi(0,F,U),D._storeNames=T(F.objectStoreNames,0),Ji(D,[D._allTables],o(U),U);else if(es(l,l._dbSchema,ee),((G=ha(Zi(0,(G=l).idbdb,ee),G._dbSchema)).add.length||G.change.some(function(re){return re.add.length||re.change.length}))&&!w)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),Z.close(),g=Z.version+1,w=!0,j(S());Qi(l,ee)}catch{}Xn.push(l),Z.onversionchange=Pe(function(re){u.vcFired=!0,l.on("versionchange").fire(re)}),Z.onclose=Pe(function(re){l.on("close").fire(re)}),_&&(G=l._deps,ee=M,Z=G.indexedDB,G=G.IDBKeyRange,ma(Z)||ee===Vi||pa(Z,G).put({name:ee}).catch(Ie)),j()},R)}).catch(function(j){switch(j?.name){case"UnknownError":if(0<u.PR1398_maxLoop)return u.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),S();break;case"VersionError":if(0<g)return g=0,S()}return ce.reject(j)})}var A,O=u.dbReadyResolve,P=null,_=!1;return ce.race([m,(typeof navigator>"u"?ce.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(j){function R(){return indexedDB.databases().finally(j)}A=setInterval(R,100),R()}).finally(function(){return clearInterval(A)}):Promise.resolve()).then(S)]).then(function(){return x(),u.onReadyBeingFired=[],ce.resolve(ga(function(){return l.on.ready.fire(l.vip)})).then(function j(){if(0<u.onReadyBeingFired.length){var R=u.onReadyBeingFired.reduce(Wo,Ie);return u.onReadyBeingFired=[],ce.resolve(ga(function(){return R(l.vip)})).then(j)}})}).finally(function(){u.openCanceller===m&&(u.onReadyBeingFired=null,u.isBeingOpened=!1)}).catch(function(j){u.dbOpenError=j;try{P&&P.abort()}catch{}return m===u.openCanceller&&l._close(),je(j)}).finally(function(){u.openComplete=!0,O()}).then(function(){var j;return _&&(j={},l.tables.forEach(function(R){R.schema.indexes.forEach(function(M){M.name&&(j["idb://".concat(l.name,"/").concat(R.name,"/").concat(M.name)]=new et(-1/0,[[[]]]))}),j["idb://".concat(l.name,"/").concat(R.name,"/")]=j["idb://".concat(l.name,"/").concat(R.name,"/:dels")]=new et(-1/0,[[[]]])}),an(Br).fire(j),ka(j,!0)),l})}function $a(l){function u(w){return l.next(w)}var h=g(u),m=g(function(w){return l.throw(w)});function g(w){return function(A){var S=w(A),A=S.value;return S.done?A:A&&typeof A.then=="function"?A.then(h,m):a(A)?Promise.all(A).then(h,m):h(A)}}return g(u)()}function ss(l,u,h){for(var m=a(l)?l.slice():[l],g=0;g<h;++g)m.push(u);return m}var ub={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(l){return r(r({},l),{table:function(u){var h=l.table(u),m=h.schema,g={},w=[];function x(_,j,R){var M=Hr(_),N=g[M]=g[M]||[],D=_==null?0:typeof _=="string"?1:_.length,F=0<j,F=r(r({},R),{name:F?"".concat(M,"(virtual-from:").concat(R.name,")"):R.name,lowLevelIndex:R,isVirtual:F,keyTail:j,keyLength:D,extractKey:ua(_),unique:!F&&R.unique});return N.push(F),F.isPrimaryKey||w.push(F),1<D&&x(D===2?_[0]:_.slice(0,D-1),j+1,R),N.sort(function(U,B){return U.keyTail-B.keyTail}),F}u=x(m.primaryKey.keyPath,0,m.primaryKey),g[":id"]=[u];for(var S=0,A=m.indexes;S<A.length;S++){var O=A[S];x(O.keyPath,0,O)}function P(_){var j,R=_.query.index;return R.isVirtual?r(r({},_),{query:{index:R.lowLevelIndex,range:(j=_.query.range,R=R.keyTail,{type:j.type===1?2:j.type,lower:ss(j.lower,j.lowerOpen?l.MAX_KEY:l.MIN_KEY,R),lowerOpen:!0,upper:ss(j.upper,j.upperOpen?l.MIN_KEY:l.MAX_KEY,R),upperOpen:!0})}}):_}return r(r({},h),{schema:r(r({},m),{primaryKey:u,indexes:w,getIndexByKeyPath:function(_){return(_=g[Hr(_)])&&_[0]}}),count:function(_){return h.count(P(_))},query:function(_){return h.query(P(_))},openCursor:function(_){var j=_.query.index,R=j.keyTail,M=j.isVirtual,N=j.keyLength;return M?h.openCursor(P(_)).then(function(F){return F&&D(F)}):h.openCursor(_);function D(F){return Object.create(F,{continue:{value:function(U){U!=null?F.continue(ss(U,_.reverse?l.MAX_KEY:l.MIN_KEY,R)):_.unique?F.continue(F.key.slice(0,N).concat(_.reverse?l.MIN_KEY:l.MAX_KEY,R)):F.continue()}},continuePrimaryKey:{value:function(U,B){F.continuePrimaryKey(ss(U,l.MAX_KEY,R),B)}},primaryKey:{get:function(){return F.primaryKey}},key:{get:function(){var U=F.key;return N===1?U[0]:U.slice(0,N)}},value:{get:function(){return F.value}}})}}})}})}};function xa(l,u,h,m){return h=h||{},m=m||"",o(l).forEach(function(g){var w,x,S;p(u,g)?(w=l[g],x=u[g],typeof w=="object"&&typeof x=="object"&&w&&x?(S=Q(w))!==Q(x)?h[m+g]=u[g]:S==="Object"?xa(w,x,h,m+g+"."):w!==x&&(h[m+g]=u[g]):w!==x&&(h[m+g]=u[g])):h[m+g]=void 0}),o(u).forEach(function(g){p(l,g)||(h[m+g]=u[g])}),h}function Sa(l,u){return u.type==="delete"?u.keys:u.keys||u.values.map(l.extractKey)}var db={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(l){return r(r({},l),{table:function(u){var h=l.table(u),m=h.schema.primaryKey;return r(r({},h),{mutate:function(g){var w=he.trans,x=w.table(u).hook,S=x.deleting,A=x.creating,O=x.updating;switch(g.type){case"add":if(A.fire===Ie)break;return w._promise("readwrite",function(){return P(g)},!0);case"put":if(A.fire===Ie&&O.fire===Ie)break;return w._promise("readwrite",function(){return P(g)},!0);case"delete":if(S.fire===Ie)break;return w._promise("readwrite",function(){return P(g)},!0);case"deleteRange":if(S.fire===Ie)break;return w._promise("readwrite",function(){return(function _(j,R,M){return h.query({trans:j,values:!1,query:{index:m,range:R},limit:M}).then(function(N){var D=N.result;return P({type:"delete",keys:D,trans:j}).then(function(F){return 0<F.numFailures?Promise.reject(F.failures[0]):D.length<M?{failures:[],numFailures:0,lastResult:void 0}:_(j,r(r({},R),{lower:D[D.length-1],lowerOpen:!0}),M)})})})(g.trans,g.range,1e4)},!0)}return h.mutate(g);function P(_){var j,R,M,N=he.trans,D=_.keys||Sa(m,_);if(!D)throw new Error("Keys missing");return(_=_.type==="add"||_.type==="put"?r(r({},_),{keys:D}):r({},_)).type!=="delete"&&(_.values=i([],_.values)),_.keys&&(_.keys=i([],_.keys)),j=h,M=D,((R=_).type==="add"?Promise.resolve([]):j.getMany({trans:R.trans,keys:M,cache:"immutable"})).then(function(F){var U=D.map(function(B,G){var Z,oe,ee,re=F[G],le={onerror:null,onsuccess:null};return _.type==="delete"?S.fire.call(le,B,re,N):_.type==="add"||re===void 0?(Z=A.fire.call(le,B,_.values[G],N),B==null&&Z!=null&&(_.keys[G]=B=Z,m.outbound||I(_.values[G],m.keyPath,B))):(Z=xa(re,_.values[G]),(oe=O.fire.call(le,Z,B,re,N))&&(ee=_.values[G],Object.keys(oe).forEach(function(se){p(ee,se)?ee[se]=oe[se]:I(ee,se,oe[se])}))),le});return h.mutate(_).then(function(B){for(var G=B.failures,Z=B.results,oe=B.numFailures,B=B.lastResult,ee=0;ee<D.length;++ee){var re=(Z||D)[ee],le=U[ee];re==null?le.onerror&&le.onerror(G[ee]):le.onsuccess&&le.onsuccess(_.type==="put"&&F[ee]?_.values[ee]:re)}return{failures:G,results:Z,numFailures:oe,lastResult:B}}).catch(function(B){return U.forEach(function(G){return G.onerror&&G.onerror(B)}),Promise.reject(B)})})}}})}})}};function Cu(l,u,h){try{if(!u||u.keys.length<l.length)return null;for(var m=[],g=0,w=0;g<u.keys.length&&w<l.length;++g)Ce(u.keys[g],l[w])===0&&(m.push(h?te(u.values[g]):u.values[g]),++w);return m.length===l.length?m:null}catch{return null}}var hb={stack:"dbcore",level:-1,create:function(l){return{table:function(u){var h=l.table(u);return r(r({},h),{getMany:function(m){if(!m.cache)return h.getMany(m);var g=Cu(m.keys,m.trans._cache,m.cache==="clone");return g?ce.resolve(g):h.getMany(m).then(function(w){return m.trans._cache={keys:m.keys,values:m.cache==="clone"?te(w):w},w})},mutate:function(m){return m.type!=="add"&&(m.trans._cache=null),h.mutate(m)}})}}}};function _u(l,u){return l.trans.mode==="readonly"&&!!l.subscr&&!l.trans.explicit&&l.trans.db._options.cache!=="disabled"&&!u.schema.primaryKey.outbound}function Eu(l,u){switch(l){case"query":return u.values&&!u.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var fb={stack:"dbcore",level:0,name:"Observability",create:function(l){var u=l.schema.name,h=new et(l.MIN_KEY,l.MAX_KEY);return r(r({},l),{transaction:function(m,g,w){if(he.subscr&&g!=="readonly")throw new fe.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(he.querier));return l.transaction(m,g,w)},table:function(m){var g=l.table(m),w=g.schema,x=w.primaryKey,_=w.indexes,S=x.extractKey,A=x.outbound,O=x.autoIncrement&&_.filter(function(R){return R.compound&&R.keyPath.includes(x.keyPath)}),P=r(r({},g),{mutate:function(R){function M(se){return se="idb://".concat(u,"/").concat(m,"/").concat(se),B[se]||(B[se]=new et)}var N,D,F,U=R.trans,B=R.mutatedParts||(R.mutatedParts={}),G=M(""),Z=M(":dels"),oe=R.type,le=R.type==="deleteRange"?[R.range]:R.type==="delete"?[R.keys]:R.values.length<50?[Sa(x,R).filter(function(se){return se}),R.values]:[],ee=le[0],re=le[1],le=R.trans._cache;return a(ee)?(G.addKeys(ee),(le=oe==="delete"||ee.length===re.length?Cu(ee,le):null)||Z.addKeys(ee),(le||re)&&(N=M,D=le,F=re,w.indexes.forEach(function(se){var ue=N(se.name||"");function be(ke){return ke!=null?se.extractKey(ke):null}function ve(ke){return se.multiEntry&&a(ke)?ke.forEach(function(kt){return ue.addKey(kt)}):ue.addKey(ke)}(D||F).forEach(function(ke,tt){var ge=D&&be(D[tt]),tt=F&&be(F[tt]);Ce(ge,tt)!==0&&(ge!=null&&ve(ge),tt!=null&&ve(tt))})}))):ee?(re={from:(re=ee.lower)!==null&&re!==void 0?re:l.MIN_KEY,to:(re=ee.upper)!==null&&re!==void 0?re:l.MAX_KEY},Z.add(re),G.add(re)):(G.add(h),Z.add(h),w.indexes.forEach(function(se){return M(se.name).add(h)})),g.mutate(R).then(function(se){return!ee||R.type!=="add"&&R.type!=="put"||(G.addKeys(se.results),O&&O.forEach(function(ue){for(var be=R.values.map(function(ge){return ue.extractKey(ge)}),ve=ue.keyPath.findIndex(function(ge){return ge===x.keyPath}),ke=0,kt=se.results.length;ke<kt;++ke)be[ke][ve]=se.results[ke];M(ue.name).addKeys(be)})),U.mutatedParts=rs(U.mutatedParts||{},B),se})}}),_=function(M){var N=M.query,M=N.index,N=N.range;return[M,new et((M=N.lower)!==null&&M!==void 0?M:l.MIN_KEY,(N=N.upper)!==null&&N!==void 0?N:l.MAX_KEY)]},j={get:function(R){return[x,new et(R.key)]},getMany:function(R){return[x,new et().addKeys(R.keys)]},count:_,query:_,openCursor:_};return o(j).forEach(function(R){P[R]=function(M){var N=he.subscr,D=!!N,F=_u(he,g)&&Eu(R,M)?M.obsSet={}:N;if(D){var U=function(re){return re="idb://".concat(u,"/").concat(m,"/").concat(re),F[re]||(F[re]=new et)},B=U(""),G=U(":dels"),N=j[R](M),D=N[0],N=N[1];if((R==="query"&&D.isPrimaryKey&&!M.values?G:U(D.name||"")).add(N),!D.isPrimaryKey){if(R!=="count"){var Z=R==="query"&&A&&M.values&&g.query(r(r({},M),{values:!1}));return g[R].apply(this,arguments).then(function(re){if(R==="query"){if(A&&M.values)return Z.then(function(be){return be=be.result,B.addKeys(be),re});var le=M.values?re.result.map(S):re.result;(M.values?B:G).addKeys(le)}else if(R==="openCursor"){var se=re,ue=M.values;return se&&Object.create(se,{key:{get:function(){return G.addKey(se.primaryKey),se.key}},primaryKey:{get:function(){var be=se.primaryKey;return G.addKey(be),be}},value:{get:function(){return ue&&B.addKey(se.primaryKey),se.value}}})}return re})}G.add(h)}}return g[R].apply(this,arguments)}}),P}})}};function Tu(l,u,h){if(h.numFailures===0)return u;if(u.type==="deleteRange")return null;var m=u.keys?u.keys.length:"values"in u&&u.values?u.values.length:1;return h.numFailures===m?null:(u=r({},u),a(u.keys)&&(u.keys=u.keys.filter(function(g,w){return!(w in h.failures)})),"values"in u&&a(u.values)&&(u.values=u.values.filter(function(g,w){return!(w in h.failures)})),u)}function Ca(l,u){return h=l,((m=u).lower===void 0||(m.lowerOpen?0<Ce(h,m.lower):0<=Ce(h,m.lower)))&&(l=l,(u=u).upper===void 0||(u.upperOpen?Ce(l,u.upper)<0:Ce(l,u.upper)<=0));var h,m}function Iu(l,u,j,m,g,w){if(!j||j.length===0)return l;var x=u.query.index,S=x.multiEntry,A=u.query.range,O=m.schema.primaryKey.extractKey,P=x.extractKey,_=(x.lowLevelIndex||x).extractKey,j=j.reduce(function(R,M){var N=R,D=[];if(M.type==="add"||M.type==="put")for(var F=new et,U=M.values.length-1;0<=U;--U){var B,G=M.values[U],Z=O(G);F.hasKey(Z)||(B=P(G),(S&&a(B)?B.some(function(se){return Ca(se,A)}):Ca(B,A))&&(F.addKey(Z),D.push(G)))}switch(M.type){case"add":var oe=new et().addKeys(u.values?R.map(function(ue){return O(ue)}):R),N=R.concat(u.values?D.filter(function(ue){return ue=O(ue),!oe.hasKey(ue)&&(oe.addKey(ue),!0)}):D.map(function(ue){return O(ue)}).filter(function(ue){return!oe.hasKey(ue)&&(oe.addKey(ue),!0)}));break;case"put":var ee=new et().addKeys(M.values.map(function(ue){return O(ue)}));N=R.filter(function(ue){return!ee.hasKey(u.values?O(ue):ue)}).concat(u.values?D:D.map(function(ue){return O(ue)}));break;case"delete":var re=new et().addKeys(M.keys);N=R.filter(function(ue){return!re.hasKey(u.values?O(ue):ue)});break;case"deleteRange":var le=M.range;N=R.filter(function(ue){return!Ca(O(ue),le)})}return N},l);return j===l?l:(j.sort(function(R,M){return Ce(_(R),_(M))||Ce(O(R),O(M))}),u.limit&&u.limit<1/0&&(j.length>u.limit?j.length=u.limit:l.length===u.limit&&j.length<u.limit&&(g.dirty=!0)),w?Object.freeze(j):j)}function Au(l,u){return Ce(l.lower,u.lower)===0&&Ce(l.upper,u.upper)===0&&!!l.lowerOpen==!!u.lowerOpen&&!!l.upperOpen==!!u.upperOpen}function pb(l,u){return(function(h,m,g,w){if(h===void 0)return m!==void 0?-1:0;if(m===void 0)return 1;if((m=Ce(h,m))===0){if(g&&w)return 0;if(g)return 1;if(w)return-1}return m})(l.lower,u.lower,l.lowerOpen,u.lowerOpen)<=0&&0<=(function(h,m,g,w){if(h===void 0)return m!==void 0?1:0;if(m===void 0)return-1;if((m=Ce(h,m))===0){if(g&&w)return 0;if(g)return-1;if(w)return 1}return m})(l.upper,u.upper,l.upperOpen,u.upperOpen)}function mb(l,u,h,m){l.subscribers.add(h),m.addEventListener("abort",function(){var g,w;l.subscribers.delete(h),l.subscribers.size===0&&(g=l,w=u,setTimeout(function(){g.subscribers.size===0&&xe(w,g)},3e3))})}var gb={stack:"dbcore",level:0,name:"Cache",create:function(l){var u=l.schema.name;return r(r({},l),{transaction:function(h,m,g){var w,x,S=l.transaction(h,m,g);return m==="readwrite"&&(x=(w=new AbortController).signal,g=function(A){return function(){if(w.abort(),m==="readwrite"){for(var O=new Set,P=0,_=h;P<_.length;P++){var j=_[P],R=En["idb://".concat(u,"/").concat(j)];if(R){var M=l.table(j),N=R.optimisticOps.filter(function(ue){return ue.trans===S});if(S._explicit&&A&&S.mutatedParts)for(var D=0,F=Object.values(R.queries.query);D<F.length;D++)for(var U=0,B=(oe=F[D]).slice();U<B.length;U++)wa((ee=B[U]).obsSet,S.mutatedParts)&&(xe(oe,ee),ee.subscribers.forEach(function(ue){return O.add(ue)}));else if(0<N.length){R.optimisticOps=R.optimisticOps.filter(function(ue){return ue.trans!==S});for(var G=0,Z=Object.values(R.queries.query);G<Z.length;G++)for(var oe,ee,re,le=0,se=(oe=Z[G]).slice();le<se.length;le++)(ee=se[le]).res!=null&&S.mutatedParts&&(A&&!ee.dirty?(re=Object.isFrozen(ee.res),re=Iu(ee.res,ee.req,N,M,ee,re),ee.dirty?(xe(oe,ee),ee.subscribers.forEach(function(ue){return O.add(ue)})):re!==ee.res&&(ee.res=re,ee.promise=ce.resolve({result:re}))):(ee.dirty&&xe(oe,ee),ee.subscribers.forEach(function(ue){return O.add(ue)})))}}}O.forEach(function(ue){return ue()})}}},S.addEventListener("abort",g(!1),{signal:x}),S.addEventListener("error",g(!1),{signal:x}),S.addEventListener("complete",g(!0),{signal:x})),S},table:function(h){var m=l.table(h),g=m.schema.primaryKey;return r(r({},m),{mutate:function(w){var x=he.trans;if(g.outbound||x.db._options.cache==="disabled"||x.explicit||x.idbtrans.mode!=="readwrite")return m.mutate(w);var S=En["idb://".concat(u,"/").concat(h)];return S?(x=m.mutate(w),w.type!=="add"&&w.type!=="put"||!(50<=w.values.length||Sa(g,w).some(function(A){return A==null}))?(S.optimisticOps.push(w),w.mutatedParts&&is(w.mutatedParts),x.then(function(A){0<A.numFailures&&(xe(S.optimisticOps,w),(A=Tu(0,w,A))&&S.optimisticOps.push(A),w.mutatedParts&&is(w.mutatedParts))}),x.catch(function(){xe(S.optimisticOps,w),w.mutatedParts&&is(w.mutatedParts)})):x.then(function(A){var O=Tu(0,r(r({},w),{values:w.values.map(function(P,_){var j;return A.failures[_]?P:(P=(j=g.keyPath)!==null&&j!==void 0&&j.includes(".")?te(P):r({},P),I(P,g.keyPath,A.results[_]),P)})}),A);S.optimisticOps.push(O),queueMicrotask(function(){return w.mutatedParts&&is(w.mutatedParts)})}),x):m.mutate(w)},query:function(w){if(!_u(he,m)||!Eu("query",w))return m.query(w);var x=((O=he.trans)===null||O===void 0?void 0:O.db._options.cache)==="immutable",_=he,S=_.requery,A=_.signal,O=(function(M,N,D,F){var U=En["idb://".concat(M,"/").concat(N)];if(!U)return[];if(!(N=U.queries[D]))return[null,!1,U,null];var B=N[(F.query?F.query.index.name:null)||""];if(!B)return[null,!1,U,null];switch(D){case"query":var G=B.find(function(Z){return Z.req.limit===F.limit&&Z.req.values===F.values&&Au(Z.req.query.range,F.query.range)});return G?[G,!0,U,B]:[B.find(function(Z){return("limit"in Z.req?Z.req.limit:1/0)>=F.limit&&(!F.values||Z.req.values)&&pb(Z.req.query.range,F.query.range)}),!1,U,B];case"count":return G=B.find(function(Z){return Au(Z.req.query.range,F.query.range)}),[G,!!G,U,B]}})(u,h,"query",w),P=O[0],_=O[1],j=O[2],R=O[3];return P&&_?P.obsSet=w.obsSet:(_=m.query(w).then(function(M){var N=M.result;if(P&&(P.res=N),x){for(var D=0,F=N.length;D<F;++D)Object.freeze(N[D]);Object.freeze(N)}else M.result=te(N);return M}).catch(function(M){return R&&P&&xe(R,P),Promise.reject(M)}),P={obsSet:w.obsSet,promise:_,subscribers:new Set,type:"query",req:w,dirty:!1},R?R.push(P):(R=[P],(j=j||(En["idb://".concat(u,"/").concat(h)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[w.query.index.name||""]=R)),mb(P,R,S,A),P.promise.then(function(M){return{result:Iu(M.result,w,j?.optimisticOps,m,P,x)}})}})}})}};function os(l,u){return new Proxy(l,{get:function(h,m,g){return m==="db"?u:Reflect.get(h,m,g)}})}var Qt=(Fe.prototype.version=function(l){if(isNaN(l)||l<.1)throw new fe.Type("Given version is not a positive number");if(l=Math.round(10*l)/10,this.idbdb||this._state.isBeingOpened)throw new fe.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,l);var u=this._versions,h=u.filter(function(m){return m._cfg.version===l})[0];return h||(h=new this.Version(l),u.push(h),u.sort(sb),h.stores({}),this._state.autoSchema=!1,h)},Fe.prototype._whenReady=function(l){var u=this;return this.idbdb&&(this._state.openComplete||he.letThrough||this._vip)?l():new ce(function(h,m){if(u._state.openComplete)return m(new fe.DatabaseClosed(u._state.dbOpenError));if(!u._state.isBeingOpened){if(!u._state.autoOpen)return void m(new fe.DatabaseClosed);u.open().catch(Ie)}u._state.dbReadyPromise.then(h,m)}).then(l)},Fe.prototype.use=function(l){var u=l.stack,h=l.create,m=l.level,g=l.name;return g&&this.unuse({stack:u,name:g}),l=this._middlewares[u]||(this._middlewares[u]=[]),l.push({stack:u,create:h,level:m??10,name:g}),l.sort(function(w,x){return w.level-x.level}),this},Fe.prototype.unuse=function(l){var u=l.stack,h=l.name,m=l.create;return u&&this._middlewares[u]&&(this._middlewares[u]=this._middlewares[u].filter(function(g){return m?g.create!==m:!!h&&g.name!==h})),this},Fe.prototype.open=function(){var l=this;return Sn(tn,function(){return cb(l)})},Fe.prototype._close=function(){var l=this._state,u=Xn.indexOf(this);if(0<=u&&Xn.splice(u,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}l.isBeingOpened||(l.dbReadyPromise=new ce(function(h){l.dbReadyResolve=h}),l.openCanceller=new ce(function(h,m){l.cancelOpen=m}))},Fe.prototype.close=function(h){var u=(h===void 0?{disableAutoOpen:!0}:h).disableAutoOpen,h=this._state;u?(h.isBeingOpened&&h.cancelOpen(new fe.DatabaseClosed),this._close(),h.autoOpen=!1,h.dbOpenError=new fe.DatabaseClosed):(this._close(),h.autoOpen=this._options.autoOpen||h.isBeingOpened,h.openComplete=!1,h.dbOpenError=null)},Fe.prototype.delete=function(l){var u=this;l===void 0&&(l={disableAutoOpen:!0});var h=0<arguments.length&&typeof arguments[0]!="object",m=this._state;return new ce(function(g,w){function x(){u.close(l);var S=u._deps.indexedDB.deleteDatabase(u.name);S.onsuccess=Pe(function(){var A,O,P;A=u._deps,O=u.name,P=A.indexedDB,A=A.IDBKeyRange,ma(P)||O===Vi||pa(P,A).delete(O).catch(Ie),g()}),S.onerror=qt(w),S.onblocked=u._fireOnBlocked}if(h)throw new fe.InvalidArgument("Invalid closeOptions argument to db.delete()");m.isBeingOpened?m.dbReadyPromise.then(x):x()})},Fe.prototype.backendDB=function(){return this.idbdb},Fe.prototype.isOpen=function(){return this.idbdb!==null},Fe.prototype.hasBeenClosed=function(){var l=this._state.dbOpenError;return l&&l.name==="DatabaseClosed"},Fe.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Fe.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Fe.prototype,"tables",{get:function(){var l=this;return o(this._allTables).map(function(u){return l._allTables[u]})},enumerable:!1,configurable:!0}),Fe.prototype.transaction=function(){var l=function(u,h,m){var g=arguments.length;if(g<2)throw new fe.InvalidArgument("Too few arguments");for(var w=new Array(g-1);--g;)w[g-1]=arguments[g];return m=w.pop(),[u,ie(w),m]}.apply(this,arguments);return this._transaction.apply(this,l)},Fe.prototype._transaction=function(l,u,h){var m=this,g=he.trans;g&&g.db===this&&l.indexOf("!")===-1||(g=null);var w,x,S=l.indexOf("?")!==-1;l=l.replace("!","").replace("?","");try{if(x=u.map(function(O){if(O=O instanceof m.Table?O.name:O,typeof O!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return O}),l=="r"||l===na)w=na;else{if(l!="rw"&&l!=ra)throw new fe.InvalidArgument("Invalid transaction mode: "+l);w=ra}if(g){if(g.mode===na&&w===ra){if(!S)throw new fe.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");g=null}g&&x.forEach(function(O){if(g&&g.storeNames.indexOf(O)===-1){if(!S)throw new fe.SubTransaction("Table "+O+" not included in parent transaction.");g=null}}),S&&g&&!g.active&&(g=null)}}catch(O){return g?g._promise(null,function(P,_){_(O)}):je(O)}var A=function O(P,_,j,R,M){return ce.resolve().then(function(){var N=he.transless||he,D=P._createTransaction(_,j,P._dbSchema,R);if(D.explicit=!0,N={trans:D,transless:N},R)D.idbtrans=R.idbtrans;else try{D.create(),D.idbtrans._explicit=!0,P._state.PR1398_maxLoop=3}catch(B){return B.name===Gn.InvalidState&&P.isOpen()&&0<--P._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),P.close({disableAutoOpen:!1}),P.open().then(function(){return O(P,_,j,null,M)})):je(B)}var F,U=yt(M);return U&&Jn(),N=ce.follow(function(){var B;(F=M.call(D,D))&&(U?(B=rn.bind(null,null),F.then(B,B)):typeof F.next=="function"&&typeof F.throw=="function"&&(F=$a(F)))},N),(F&&typeof F.then=="function"?ce.resolve(F).then(function(B){return D.active?B:je(new fe.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):N.then(function(){return F})).then(function(B){return R&&D._resolve(),D._completion.then(function(){return B})}).catch(function(B){return D._reject(B),je(B)})})}.bind(null,this,w,x,g,h);return g?g._promise(w,A,"lock"):he.trans?Sn(he.transless,function(){return m._whenReady(A)}):this._whenReady(A)},Fe.prototype.table=function(l){if(!p(this._allTables,l))throw new fe.InvalidTable("Table ".concat(l," does not exist"));return this._allTables[l]},Fe);function Fe(l,u){var h=this;this._middlewares={},this.verno=0;var m=Fe.dependencies;this._options=u=r({addons:Fe.addons,autoOpen:!0,indexedDB:m.indexedDB,IDBKeyRange:m.IDBKeyRange,cache:"cloned"},u),this._deps={indexedDB:u.indexedDB,IDBKeyRange:u.IDBKeyRange},m=u.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var g,w,x,S,A,O={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:Ie,dbReadyPromise:null,cancelOpen:Ie,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:u.autoOpen};O.dbReadyPromise=new ce(function(_){O.dbReadyResolve=_}),O.openCanceller=new ce(function(_,j){O.cancelOpen=j}),this._state=O,this.name=l,this.on=Nr(this,"populate","blocked","versionchange","close",{ready:[Wo,Ie]}),this.on.ready.subscribe=Y(this.on.ready.subscribe,function(_){return function(j,R){Fe.vip(function(){var M,N=h._state;N.openComplete?(N.dbOpenError||ce.resolve().then(j),R&&_(j)):N.onReadyBeingFired?(N.onReadyBeingFired.push(j),R&&_(j)):(_(j),M=h,R||_(function D(){M.on.ready.unsubscribe(j),M.on.ready.unsubscribe(D)}))})}}),this.Collection=(g=this,jr(Xg.prototype,function(F,D){this.db=g;var R=au,M=null;if(D)try{R=D()}catch(U){M=U}var N=F._ctx,D=N.table,F=D.hook.reading.fire;this._ctx={table:D,index:N.index,isPrimKey:!N.index||D.schema.primKey.keyPath&&N.index===D.schema.primKey.name,range:R,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:M,or:N.or,valueMapper:F!==Dr?F:null}})),this.Table=(w=this,jr(du.prototype,function(_,j,R){this.db=w,this._tx=R,this.name=_,this.schema=j,this.hook=w._allTables[_]?w._allTables[_].hook:Nr(null,{creating:[qg,Ie],reading:[Bg,Dr],updating:[Vg,Ie],deleting:[Hg,Ie]})})),this.Transaction=(x=this,jr(tb.prototype,function(_,j,R,M,N){var D=this;this.db=x,this.mode=_,this.storeNames=j,this.schema=R,this.chromeTransactionDurability=M,this.idbtrans=null,this.on=Nr(this,"complete","error","abort"),this.parent=N||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new ce(function(F,U){D._resolve=F,D._reject=U}),this._completion.then(function(){D.active=!1,D.on.complete.fire()},function(F){var U=D.active;return D.active=!1,D.on.error.fire(F),D.parent?D.parent._reject(F):U&&D.idbtrans&&D.idbtrans.abort(),je(F)})})),this.Version=(S=this,jr(lb.prototype,function(_){this.db=S,this._cfg={version:_,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(A=this,jr(gu.prototype,function(_,j,R){if(this.db=A,this._ctx={table:_,index:j===":id"?null:j,or:R},this._cmp=this._ascending=Ce,this._descending=function(M,N){return Ce(N,M)},this._max=function(M,N){return 0<Ce(M,N)?M:N},this._min=function(M,N){return Ce(M,N)<0?M:N},this._IDBKeyRange=A._deps.IDBKeyRange,!this._IDBKeyRange)throw new fe.MissingAPI})),this.on("versionchange",function(_){0<_.newVersion?console.warn("Another connection wants to upgrade database '".concat(h.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(h.name,"'. Closing db now to resume the delete request.")),h.close({disableAutoOpen:!1})}),this.on("blocked",function(_){!_.newVersion||_.newVersion<_.oldVersion?console.warn("Dexie.delete('".concat(h.name,"') was blocked")):console.warn("Upgrade '".concat(h.name,"' blocked by other connection holding version ").concat(_.oldVersion/10))}),this._maxKey=qr(u.IDBKeyRange),this._createTransaction=function(_,j,R,M){return new h.Transaction(_,j,R,h._options.chromeTransactionDurability,M)},this._fireOnBlocked=function(_){h.on("blocked").fire(_),Xn.filter(function(j){return j.name===h.name&&j!==h&&!j._state.vcFired}).map(function(j){return j.on("versionchange").fire(_)})},this.use(hb),this.use(gb),this.use(fb),this.use(ub),this.use(db);var P=new Proxy(this,{get:function(_,j,R){if(j==="_vip")return!0;if(j==="table")return function(N){return os(h.table(N),P)};var M=Reflect.get(_,j,R);return M instanceof du?os(M,P):j==="tables"?M.map(function(N){return os(N,P)}):j==="_createTransaction"?function(){return os(M.apply(this,arguments),P)}:M}});this.vip=P,m.forEach(function(_){return _(h)})}var as,Et=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",bb=(_a.prototype.subscribe=function(l,u,h){return this._subscribe(l&&typeof l!="function"?l:{next:l,error:u,complete:h})},_a.prototype[Et]=function(){return this},_a);function _a(l){this._subscribe=l}try{as={indexedDB:s.indexedDB||s.mozIndexedDB||s.webkitIndexedDB||s.msIndexedDB,IDBKeyRange:s.IDBKeyRange||s.webkitIDBKeyRange}}catch{as={indexedDB:null,IDBKeyRange:null}}function Ru(l){var u,h=!1,m=new bb(function(g){var w=yt(l),x,S=!1,A={},O={},P={get closed(){return S},unsubscribe:function(){S||(S=!0,x&&x.abort(),_&&an.storagemutated.unsubscribe(R))}};g.start&&g.start(P);var _=!1,j=function(){return ta(M)},R=function(N){rs(A,N),wa(O,A)&&j()},M=function(){var N,D,F;!S&&as.indexedDB&&(A={},N={},x&&x.abort(),x=new AbortController,F=(function(U){var B=Yn();try{w&&Jn();var G=nn(l,U);return G=w?G.finally(rn):G}finally{B&&Qn()}})(D={subscr:N,signal:x.signal,requery:j,querier:l,trans:null}),Promise.resolve(F).then(function(U){h=!0,u=U,S||D.signal.aborted||(A={},(function(B){for(var G in B)if(p(B,G))return;return 1})(O=N)||_||(an(Br,R),_=!0),ta(function(){return!S&&g.next&&g.next(U)}))},function(U){h=!1,["DatabaseClosedError","AbortError"].includes(U?.name)||S||ta(function(){S||g.error&&g.error(U)})}))};return setTimeout(j,0),P});return m.hasValue=function(){return h},m.getValue=function(){return u},m}var Tn=Qt;function Ea(l){var u=ln;try{ln=!0,an.storagemutated.fire(l),ka(l,!0)}finally{ln=u}}b(Tn,r(r({},Pi),{delete:function(l){return new Tn(l,{addons:[]}).delete()},exists:function(l){return new Tn(l,{addons:[]}).open().then(function(u){return u.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(l){try{return u=Tn.dependencies,h=u.indexedDB,u=u.IDBKeyRange,(ma(h)?Promise.resolve(h.databases()).then(function(m){return m.map(function(g){return g.name}).filter(function(g){return g!==Vi})}):pa(h,u).toCollection().primaryKeys()).then(l)}catch{return je(new fe.MissingAPI)}var u,h},defineClass:function(){return function(l){c(this,l)}},ignoreTransaction:function(l){return he.trans?Sn(he.transless,l):l()},vip:ga,async:function(l){return function(){try{var u=$a(l.apply(this,arguments));return u&&typeof u.then=="function"?u:ce.resolve(u)}catch(h){return je(h)}}},spawn:function(l,u,h){try{var m=$a(l.apply(h,u||[]));return m&&typeof m.then=="function"?m:ce.resolve(m)}catch(g){return je(g)}},currentTransaction:{get:function(){return he.trans||null}},waitFor:function(l,u){return u=ce.resolve(typeof l=="function"?Tn.ignoreTransaction(l):l).timeout(u||6e4),he.trans?he.trans.waitFor(u):u},Promise:ce,debug:{get:function(){return Bt},set:function(l){eu(l)}},derive:$,extend:c,props:b,override:Y,Events:Nr,on:an,liveQuery:Ru,extendObservabilitySet:rs,getByKeyPath:W,setByKeyPath:I,delByKeyPath:function(l,u){typeof u=="string"?I(l,u,void 0):"length"in u&&[].map.call(u,function(h){I(l,h,void 0)})},shallowClone:V,deepClone:te,getObjectDiff:xa,cmp:Ce,asap:ne,minKey:-1/0,addons:[],connections:Xn,errnames:Gn,dependencies:as,cache:En,semVer:"4.0.10",version:"4.0.10".split(".").map(function(l){return parseInt(l)}).reduce(function(l,u,h){return l+u/Math.pow(10,2*h)})})),Tn.maxKey=qr(Tn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(an(Br,function(l){ln||(l=new CustomEvent(aa,{detail:l}),ln=!0,dispatchEvent(l),ln=!1)}),addEventListener(aa,function(l){l=l.detail,ln||Ea(l)}));var tr,ln=!1,Ou=function(){};return typeof BroadcastChannel<"u"&&((Ou=function(){(tr=new BroadcastChannel(aa)).onmessage=function(l){return l.data&&Ea(l.data)}})(),typeof tr.unref=="function"&&tr.unref(),an(Br,function(l){ln||tr.postMessage(l)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(l){if(!Qt.disableBfCache&&l.persisted){Bt&&console.debug("Dexie: handling persisted pagehide"),tr?.close();for(var u=0,h=Xn;u<h.length;u++)h[u].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(l){!Qt.disableBfCache&&l.persisted&&(Bt&&console.debug("Dexie: handling persisted pageshow"),Ou(),Ea({all:new et(-1/0,[[]])}))})),ce.rejectionMapper=function(l,u){return!l||l instanceof Ke||l instanceof TypeError||l instanceof SyntaxError||!l.name||!Zc[l.name]?l:(u=new Zc[l.name](u||l.message,l),"stack"in l&&k(u,"stack",{get:function(){return this.inner.stack}}),u)},eu(Bt),r(Qt,Object.freeze({__proto__:null,Dexie:Qt,liveQuery:Ru,Entity:lu,cmp:Ce,PropModSymbol:Yt,PropModification:Fr,replacePrefix:function(l,u){return new Fr({replacePrefix:[l,u]})},add:function(l){return new Fr({add:l})},remove:function(l){return new Fr({remove:l})},default:Qt,RangeSet:et,mergeRanges:Kr,rangesOverlap:ku}),{default:Qt}),Qt})})(Cs)),Cs.exports}var iw=rw();const Ya=tw(iw),Gu=Symbol.for("Dexie"),Fs=globalThis[Gu]||(globalThis[Gu]=Ya);if(Ya.semVer!==Fs.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Ya.semVer} and ${Fs.semVer}`);const{liveQuery:Nl,mergeRanges:NT,rangesOverlap:jT,RangeSet:FT,cmp:UT,Entity:BT,PropModSymbol:qT,PropModification:HT,replacePrefix:VT,add:KT,remove:WT}=Fs,sw="easydb";function It(e,t){return`${e}::${t}`}let cs=null;function Us(){if(cs)return cs;const e=new Fs(sw);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.version(3).stores({settings:"key, workspaceId, name"}).upgrade(async t=>{const n=t.table("settings"),i=(await n.toArray()).filter(a=>a.workspaceId==null);if(i.length===0)return;const s=(await t.table("workspaces").toArray()).map(a=>a.id),o=s.length>0?s:["default"];for(const a of i){for(const c of o)await n.put({key:It(c,a.key),workspaceId:c,name:a.key,value:a.value});await n.delete(a.key)}}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>ow()),cs={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},cs}function ow(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function aw(e){return!Object.values(e.filters??{}).some(n=>String(n).trim()!=="")&&!String(e.search??"").trim()&&(e.sort??[]).length===0}function tf(e){const t=e.trim();return t.length>=2&&t.startsWith("[")&&t.endsWith("]")}function lw(e){if(!tf(e))return null;try{const t=JSON.parse(e.trim());return Array.isArray(t)?t:null}catch{return null}}function cw(e){const t=e.trim();if(!tf(t))return null;const n=t.slice(1,-1).trim();if(n==="")return null;const r=[];let i=0;for(;i<n.length;){for(;i<n.length&&/\s/.test(n[i]);)i++;if(n[i]!=="'")return null;i++;let s="",o=!1;for(;i<n.length;){const a=n[i];if(a==="\\"&&n[i+1]==="'"){s+="'",i+=2;continue}if(a==="'"){o=!0,i++;break}s+=a,i++}if(!o)return null;for(r.push(s);i<n.length&&/\s/.test(n[i]);)i++;if(i<n.length){if(n[i]!==",")return null;i++}}return r}function nf(e){return lw(e)??cw(e)}function ut(e){if(e==null)return[];if(Array.isArray(e))return Aa(e);if(typeof e!="string")return Aa([e]);const t=nf(e);return t?Aa(t):uw(e)}function Yu(e){return ut(e).join(", ")}function jl(e){return Array.isArray(e)?!0:typeof e=="string"&&nf(e)!==null}const Qu=5;function rf(e){if(e.length===0)return!1;let t=0;for(const n of e)if(jl(n)){if(t++,t>=Qu)return!0}else t=0;return e.length<Qu&&t===e.length}function Aa(e){const t=[];for(const n of e){if(n==null)continue;const r=typeof n=="string"?n.trim():typeof n=="object"?JSON.stringify(n)??"":String(n);r!==""&&t.push(r)}return t}function uw(e){const t=[];let n="",r=!1,i=!1;const s=()=>{const o=i?n:n.trim();o!==""&&t.push(o),n="",r=!1,i=!1};for(let o=0;o<e.length;o++){const a=e[o];if(a==='"'){if(r&&e[o+1]==='"'){n+='"',o++;continue}r=!r,i=!0;continue}if(a===","&&!r){s();continue}n+=a}return s(),t}function dw(e){return e==null||String(e).trim()===""}function Vn(e){const t=[];let n="",r=!1,i=!1,s=!1,o=!1,a=!1,c=!1,d=!0,f=!1;const p=()=>{const b=s?n:n.trim();if(r||o){const y={term:b,negate:o};a&&(y.prefix=!0),c&&(y.exact=!0),f&&t.length>0&&(y.and=!0),t.push(y)}f=!1,n="",r=!1,i=!1,s=!1,o=!1,a=!1,c=!1,d=!0};for(let b=0;b<e.length;b++){const y=e[b];if(!i&&/\s/.test(y)){const k=/^\s+(AND|OR)(?=[\s,]|$)/.exec(e.slice(b));if(k&&(r||o)){p(),f=k[1]==="AND",b+=k[0].length-1;continue}}if(y==='"'){if(i&&e[b+1]==='"'){n+='"',r=!0,b++;continue}i=!i,s=!0,r=!0,d=!1;continue}if(y===","&&!i){p();continue}if(y==="!"&&!i&&d&&!o&&!a&&!c){o=!0;continue}if(y==="="&&!i&&d&&!a&&!c){c=!0;continue}if(y==="^"&&!i&&d&&!a&&!c){a=!0;continue}d&&!i&&/\s/.test(y)||(d=!1),n+=y,/\s/.test(y)||(r=!0)}return p(),t}function hw(e){return e.includes(",")||e.includes('"')||e!==e.trim()||e===""||e.startsWith("!")||e.startsWith("^")||e.startsWith("=")||/\s(AND|OR)(?=[\s,]|$)/.test(e)}function hn(e){let t="";return e.forEach((n,r)=>{const i=n.term===""&&n.negate?"":hw(n.term)?`"${n.term.replace(/"/g,'""')}"`:n.term,s=n.exact?"=":n.prefix?"^":"",o=(n.negate?"!":"")+s+i;r===0?t=o:t+=n.and?` AND ${o}`:`,${o}`}),t}function fw(e){const t=[];for(const n of e){const r=t[t.length-1];n.and&&r?r.push(n):t.push([n])}return t}function Ju(e,t){const n=String(e??"").toLowerCase(),r=t.term.toLowerCase();return t.exact?n===r:t.prefix?n.startsWith(r):n.includes(r)}function Xu(e,t){return t?t.length===0:dw(e)}function Qa(e,t,n){const r=t.term;return r.trim()===""||!t.prefix&&!t.exact&&r.toUpperCase()==="NULL"?Xu(e,n):n?n.some(i=>Ju(i,t)):Ju(e,t)}function pw(e,t,n){return t.every(r=>r.negate?!Qa(e,r,n):Qa(e,r,n))}function fi(e,t,n){const r=fw(Vn(t));if(r.length===0)return!0;const i=n?.type==="array"?ut(e):null,s=r.filter(a=>a.length===1&&a[0].negate);for(const a of s)if(Qa(e,a[0],i))return!1;const o=r.filter(a=>!(a.length===1&&a[0].negate));return o.length===0?!0:o.some(a=>pw(e,a,i))}function mw(e){const t=e.trim(),n=t.split(/\s+/).filter(Boolean);if(!n.some(a=>a==="AND"||a==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:n.map(a=>a.toLowerCase())};const i=[];let s=[];for(const a of n)a==="OR"?(i.push(s),s=[]):a==="AND"||s.push(a.toLowerCase());i.push(s);const o=i.filter(a=>a.length>0);return o.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:o}}function gw(e,t,n){const r=mw(t);if(r.kind==="boolean")return e.filter(c=>r.groups.some(d=>d.every(f=>n(c,f))));const{phrase:i,words:s}=r;if(s.length<=1)return i===""?e:e.filter(c=>n(c,i));const o=e.filter(c=>n(c,i));if(o.length>0)return o;const a=e.filter(c=>s.every(d=>n(c,d)));return a.length>0?a:e.filter(c=>s.some(d=>n(c,d)))}const bw=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function pi(e,t,n){const r=new Map,i=new Map;for(const c of n)r.set(c.field.toLowerCase(),c.field),c.label&&r.set(c.label.toLowerCase(),c.field),i.set(c.field,c.type);const s=[...r.keys()].filter(Boolean).sort((c,d)=>d.length-c.length);let o=t;return s.length>0&&(o=o.replace(new RegExp(`(^|\\s)(${s.map(bw).join("|")}):\\s+`,"gi"),"$1$2:")),gw(e,o,(c,d)=>{const f=d.indexOf(":");if(f>0){const p=r.get(d.slice(0,f));if(p)return fi(c.data[p],d.slice(f+1),{type:i.get(p)})}return Object.values(c.data).some(p=>p!=null&&String(p).toLowerCase().includes(d))})}function ww(e,t){return e.some(n=>{const r=n.data[t];return r!=null&&r!==""})}function sf(e,t){return!e.script?.trim()||t.length===0?!1:!ww(t,e.field)}function of(e,t){return e.filter(n=>n.filterable!==!1&&!sf(n,t))}function yw(e,t,n,r){const i=a=>a==null?0:a===""?1:2,s=i(e),o=i(t);return s!==2||o!==2?(s-o)*r:af(e,t,n)*r}function af(e,t,n){switch(n){case"number":{const r=Number(e),i=Number(t);return Number.isNaN(r)||Number.isNaN(i)?String(e).localeCompare(String(t)):r-i}case"boolean":return(e?1:0)-(t?1:0);case"array":return Yu(e).localeCompare(Yu(t),void 0,{numeric:!0,sensitivity:"base"});case"date":{const r=new Date(String(e)).getTime(),i=new Date(String(t)).getTime();return Number.isNaN(r)||Number.isNaN(i)?String(e).localeCompare(String(t)):r-i}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function lf(e,t,n){if(t.length===0)return e;const r=t.map(s=>({field:s.field,factor:s.asc?1:-1,type:n.find(o=>o.field===s.field)?.type??"string"})),i=[...e];return i.sort((s,o)=>{for(const a of r){const c=yw(s.data[a.field],o.data[a.field],a.type,a.factor);if(c!==0)return c}return 0}),i}function Ja(e){return e.sortBy?.length?e.sortBy.map(t=>({field:t.field,asc:t.asc!==!1})):e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc!==!1}]:[]}function vw(e,t){const n=e.trim();if(n==="")return!0;const r=n.split(/\s+/);if(r.length!==1)return!1;const i=r[0]??"",s=i.indexOf(":");if(s>0){const o=i.slice(0,s).toLowerCase();if(t.some(c=>c.field.toLowerCase()===o||c.label?.toLowerCase()===o))return!1}return!0}function cf(e,t=[]){return of(e,t).map(n=>({field:n.field,label:n.label}))}function uf(e){const t=new Set(e.columns.filter(r=>r.filterable===!1).map(r=>r.field)),n=new Set(e.columns.map(r=>r.field));return Object.entries(e.filters??{}).filter(([r,i])=>i&&i.trim().length>0&&!t.has(r)&&n.has(r))}function ii(e,t){let n=e;const r=uf(t);if(r.length>0){const c=new Map(t.columns.map(d=>[d.field,d.type]));n=n.filter(d=>r.every(([f,p])=>fi(d.data[f],p,{type:c.get(f)})))}const i=(t.search??"").trim();i!==""&&(n=pi(n,i,cf(t.columns,e))),n=lf(n,t.sort??[],t.columns);const s=n.length,o=Math.max(0,t.offset??0),a=t.limit!=null&&t.limit>0?o+t.limit:void 0;return(o>0||a!=null)&&(n=n.slice(o,a)),{rows:_s(n,t.fields),total:s}}function _s(e,t){if(!t||t.length===0)return e;const n=new Set(t);return e.map(r=>({...r,data:Object.fromEntries(Object.entries(r.data).filter(([i])=>n.has(i)))}))}async function xi(e,t,n=0){const r=(t.search??"").trim(),i=vw(r,cf(t.columns));if(!e.query){const f=await e.find(),p=ii(f,t),b=n>0&&p.rows.length>n;return{...p,...b?{rows:p.rows.slice(0,n),truncated:!0}:{}}}const s={...t.fields?{fields:t.fields}:{},...Object.keys(t.filters??{}).length>0?{filters:Object.fromEntries(uf(t))}:{},...i&&r?{search:r}:{},...t.sort&&t.sort.length>0?{sort:[...t.sort]}:{}},o=i;o?(t.offset!=null&&(s.offset=t.offset),t.limit!=null&&(s.limit=t.limit)):n>0&&(s.limit=n);const a=await e.query(s);if(o&&!a.partial)return a;if(o&&a.partial&&(s.limit!=null||s.offset!=null)){const f={...s};delete f.offset,n>0?f.limit=n:delete f.limit;const p=await e.query(f),b=ii(p.rows,t),y=f.limit!=null&&p.rows.length>=f.limit;return{...b,partial:!0,...p.truncated||y?{truncated:!0}:{}}}const c=ii(a.rows,t),d=!o&&s.limit!=null&&a.rows.length>=s.limit;return{...c,...a.partial?{partial:!0}:{},...a.truncated||d?{truncated:!0}:{}}}function Fl(e,t,n,r,i){let s=0,o=!1;const a=()=>{const d=++s;n().then(f=>{o||d!==s||r(f)})};a();const c=e.onChanged((d,f)=>{d===t&&(f&&i&&f!==i||a())});return()=>{o=!0,c()}}function Gr(e,t){const n=r=>e.find(t,r);return{find:r=>n(r),async findOne(r){return await e.findOne(t,r)??null},async insert(r){return await e.insert(t,r),r},async bulkInsert(r){return r.length===0?[]:(await e.bulkInsert(t,r),r)},async upsert(r){return await e.upsert(t,r),r},async patch(r,i){return await e.patch(t,r,i)},async remove(r){await e.remove(t,r)},async bulkRemove(r){r.length!==0&&await e.bulkRemove(t,r)},subscribe(r){return Fl(e,t,()=>n(),r)}}}const Pt=2e4;function kw(e,t){const n=s=>e.find("rows",{...s,tableId:t},Pt),r=e.queryRows?.bind(e),i=e.distinctValues?.bind(e);return{find:s=>n(s),...r?{query:s=>r(t,s)}:{},...i?{distinct:s=>i(t,s)}:{},async findOne(s){const o=await e.findOne("rows",s);return o&&o.tableId===t?o:null},async insert(s){const o={...s,tableId:t};return await e.insert("rows",o),o},async bulkInsert(s){if(s.length===0)return[];const o=s.map(a=>({...a,tableId:t}));return await e.bulkInsert("rows",o),o},async upsert(s){const o={...s,tableId:t};return await e.upsert("rows",o),o},async patch(s,o){return await e.patch("rows",s,o)},async remove(s){await e.remove("rows",s)},async bulkRemove(s){s.length!==0&&await e.bulkRemove("rows",s)},subscribe(s){return Fl(e,"rows",()=>n(),s,t)},...e.countRows?{count:()=>e.countRows(t)}:{},watch(s){return s(),e.onChanged((o,a)=>{o==="rows"&&(a&&a!==t||s())})}}}function $w(e,t){const n=i=>({...i,workspaceId:t(),key:It(t(),i.name),name:i.name,value:i.value}),r=i=>e.find("settings",{...i,workspaceId:t()});return{find:i=>r(i),async findOne(i){return await e.findOne("settings",It(t(),i))??null},async insert(i){const s=n(i);return await e.insert("settings",s),s},async bulkInsert(i){if(i.length===0)return[];const s=i.map(o=>n(o));return await e.bulkInsert("settings",s),s},async upsert(i){const s=n(i);return await e.upsert("settings",s),s},async patch(i,s){const o=It(t(),i);return await e.patch("settings",o,s)},async remove(i){await e.remove("settings",It(t(),i))},async bulkRemove(i){i.length!==0&&await e.bulkRemove("settings",i.map(s=>It(t(),s)))},subscribe(i){return Fl(e,"settings",()=>r(),i)}}}function xw(e,t){return{workspaces:Gr(e,"workspaces"),tables:Gr(e,"tables"),settings:$w(e,t),plugins:Gr(e,"plugins"),viewTemplates:Gr(e,"viewTemplates"),viewInstances:Gr(e,"viewInstances"),rows:n=>kw(e,n)}}const df=50,Ul=500,Sw=100;function Bs(e){return typeof e=="string"?e:String(e)}function Cw(e,t){return t==="array"?ut(e):e==null||e===""?[]:[Bs(e)]}function hf(e,t,n){const r=n?.maxLen??df;if(e.length===0)return!1;for(const i of e.slice(0,Sw)){const s=i.data[t];if(s!=null){if(n?.type==="array"){if(ut(s).some(o=>o.length>=r))return!1;continue}if(Bs(s).length>=r)return!1}}return!0}function _w(e,t,n){const r=n?.maxLen??df,i=n?.maxOptions??Ul,s=new Set;for(const o of e)for(const a of Cw(o.data[t],n?.type))if(!(a.length>=r)&&(s.add(a),s.size>=i))return[...s].sort();return[...s].sort()}function si(e,t,n){const r=new Map;let i=0;for(const o of e){const a=o.data[t],c=n?.type==="array"?ut(a):a==null||Bs(a).trim()===""?[]:[Bs(a)];if(c.length===0){i++;continue}for(const d of c)r.set(d,(r.get(d)??0)+1)}let s=[...r.entries()].map(([o,a])=>({value:o,count:a})).sort((o,a)=>a.count-o.count||o.value.localeCompare(a.value));return n?.type==="boolean"&&(s=[...["true","false"].map(a=>({value:a,count:r.get(a)??0})),...s.filter(a=>a.value!=="true"&&a.value!=="false")]),{values:s,blanks:i}}function Yr(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const n=Object.entries(t);return e.filter(r=>Bl(r,n)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,n){if(await e.update(t,n)===0)throw new Error(`patch: no doc with id=${t}`);const i=await e.get(t);if(!i)throw new Error(`patch: doc id=${t} vanished after update`);return i},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const r=Nl(()=>e.toArray()).subscribe({next:i=>t(i)});return()=>r.unsubscribe()}}}function Ew(e,t,n){return{async find(r){const i=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return i.toArray();const s=Object.entries(r);return i.filter(o=>Bl(o,s)).toArray()},async findOne(r){const i=await e.get(r);return i&&i.tableId===t?i:null},async insert(r){const i={...r,tableId:t};return await e.add(i),i},async bulkInsert(r){if(r.length===0)return[];const i=r.map(s=>({...s,tableId:t}));return await e.bulkAdd(i),i},async upsert(r){const i={...r,tableId:t};return await e.put(i),i},async patch(r,i){if(await e.update(r,i)===0)throw new Error(`row patch: no row ${r}`);const o=await e.get(r);if(!o)throw new Error(`row patch: row ${r} vanished after update`);return o},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},async count(){return e.where("tableId").equals(t).count()},async query(r){const i=()=>e.where("tableId").equals(t);if(aw(r)){if(r.limit!=null&&r.limit>0){const f=Math.max(0,r.offset??0),p=await i().count(),b=f>0?i().offset(f).limit(r.limit):i().limit(r.limit);return{rows:_s(await b.toArray(),r.fields),total:p}}const d=await i().toArray();return d.length<=Pt?{rows:_s(d,r.fields),total:d.length}:{rows:_s(d.slice(0,Pt),r.fields),total:await i().count(),truncated:!0}}const s=await i().toArray(),o=(await n.get(t))?.columns??[],a=ii(s,{columns:o,...r}),c=a.rows.length>Pt;return{...a,...c?{rows:a.rows.slice(0,Pt),truncated:!0}:{}}},async distinct(r){const i=await e.where("tableId").equals(t).toArray(),s=(await n.get(t))?.columns??[],o=r.where?ii(i,{columns:s,...r.where,offset:0,limit:0}).rows:i,a=s.find(p=>p.field===r.field)?.type,{values:c,blanks:d}=si(o,r.field,{type:a}),f=r.limit&&r.limit>0?r.limit:Ul;return{values:c.slice(0,f),blanks:d,...c.length>f?{truncated:!0}:{}}},subscribe(r){const s=Nl(()=>e.where("tableId").equals(t).toArray()).subscribe({next:o=>r(o)});return()=>s.unsubscribe()}}}function Tw(e,t){const n=i=>({...i,workspaceId:t(),key:It(t(),i.name),name:i.name,value:i.value}),r=()=>e.where("workspaceId").equals(t());return{async find(i){const s=await r().toArray();if(!i||Object.keys(i).length===0)return s;const o=Object.entries(i);return s.filter(a=>Bl(a,o))},async findOne(i){return await e.get(It(t(),i))??null},async insert(i){const s=n(i);return await e.add(s),s},async bulkInsert(i){if(i.length===0)return[];const s=i.map(o=>n(o));return await e.bulkAdd(s),s},async upsert(i){const s=n(i);return await e.put(s),s},async patch(i,s){const o=It(t(),i);if(await e.update(o,s)===0)throw new Error(`setting patch: no setting ${i}`);const c=await e.get(o);if(!c)throw new Error(`setting patch: ${i} vanished after update`);return c},async remove(i){await e.delete(It(t(),i))},async bulkRemove(i){i.length!==0&&await e.bulkDelete(i.map(s=>It(t(),s)))},subscribe(i){const o=Nl(()=>r().toArray()).subscribe({next:a=>i(a)});return()=>o.unsubscribe()}}}function Bl(e,t){for(const[n,r]of t)if(e[n]!==r)return!1;return!0}function Iw(e,t){return{workspaces:Yr(e.workspaces),tables:Yr(e.tables),settings:Tw(e.settings,t),plugins:Yr(e.plugins),viewTemplates:Yr(e.viewTemplates),viewInstances:Yr(e.viewInstances),rows:n=>Ew(e.rows,n,e.tables)}}function Aw(e){const{base:t,providers:n,tableById:r,ctx:i}=e,s=new Map;return{...t,rows(o){const a=r(o),c=a?.source;if(c){const d=n.get(c.type);if(d){const f=JSON.stringify(c),p=s.get(o);if(p&&p.key===f)return p.coll;const b=d.create(a,i);return s.set(o,{key:f,coll:b}),b}}return s.delete(o),t.rows(o)}}}function Ee(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Ne(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function cr(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function pn(e,t){const n=new Set([...e].map(i=>i.toLowerCase())),r=t.trim()||"imported";if(!n.has(r.toLowerCase()))return r;for(let i=2;;i++){const s=`${r}-${i}`;if(!n.has(s.toLowerCase()))return s}}function Rw(e){const t=async(r,i)=>(await e.find()).filter(s=>s.workspaceId===r&&s.id!==i).map(s=>s.name),n=(r,i)=>{const s=pn(i,r.name);return s===r.name?r:(console.warn(`[store] "${r.name}" is taken in this workspace — stored as "${s}"`),{...r,name:s,code:Ne(s)})};return{...e,async insert(r){return e.insert(n(r,await t(r.workspaceId,r.id)))},async bulkInsert(r){if(r.length===0)return e.bulkInsert(r);const i=new Set((await e.find()).filter(o=>o.workspaceId===r[0].workspaceId).map(o=>o.name)),s=r.map(o=>{const a=n(o,i);return i.add(a.name),a});return e.bulkInsert(s)},async upsert(r){return e.upsert(n(r,await t(r.workspaceId,r.id)))},async patch(r,i){if(typeof i.name!="string")return e.patch(r,i);const s=await e.findOne(r);if(!s)return e.patch(r,i);const o=pn(await t(s.workspaceId,r),i.name);return o===i.name?e.patch(r,i):(console.warn(`[store] "${i.name}" is taken in this workspace — renamed to "${o}"`),e.patch(r,{...i,name:o,code:Ne(o)}))}}}function Ow(){const e=new Map;return{on(t,n){let r=e.get(t);return r||(r=new Set,e.set(t,r)),r.add(n),()=>{r.delete(n)}},emit(t,n){const r=e.get(t);if(r)for(const i of r)try{i(n)}catch(s){console.error(`[event:${String(t)}] listener threw`,s)}}}}const Dw=new Set(["html-preview"]);function Lw(){return{headerButtons:[],footerButtons:[],tableButtons:[],columnEditorActions:[],importers:[],connectors:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,visualizations:new Map,rowSources:new Map,settings:new Map,commands:[],commandFallbacks:[]}}function Mt(e,t){return e.push(t),()=>{const n=e.indexOf(t);n>=0&&e.splice(n,1)}}function Ra(e,t,n){return e.set(t,n),()=>{e.get(t)===n&&e.delete(t)}}function Mw(e){return{registerHeaderButton:t=>Mt(e.headerButtons,t),registerFooterButton:t=>Mt(e.footerButtons,t),registerTableButton:t=>Mt(e.tableButtons,t),registerColumnEditorAction:t=>Mt(e.columnEditorActions,t),registerImporter:t=>Mt(e.importers,t),registerConnector:t=>Mt(e.connectors,t),registerExporter:t=>Mt(e.exporters,t),registerUrlSource:t=>Mt(e.urlSources,t),registerDropHandler:t=>Mt(e.dropHandlers,t),registerCellRenderer:(t,n)=>Ra(e.cellRenderers,t,n),registerRowRenderer:(t,n)=>Ra(e.rowRenderers,t,n),registerTableRenderer:(t,n)=>Ra(e.tableRenderers,t,n),registerVisualization:t=>(e.visualizations.set(t.id,t),()=>{e.visualizations.get(t.id)===t&&e.visualizations.delete(t.id)}),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerCommand:t=>Mt(e.commands,t),registerCommandFallback:t=>Mt(e.commandFallbacks,t),openCommandPalette:()=>{document.dispatchEvent(new CustomEvent("easydb:open-command-palette"))},registerSettings:(t,n,r)=>(e.settings.set(t,{name:n,fields:r}),()=>{e.settings.get(t)?.name===n&&e.settings.delete(t)}),dialogs:Pw}}const Pw={async alert(e,t){const n=ct.instance;if(n)return n.alert(e,t);window.alert(e)},async confirm(e,t){const n=ct.instance;return n?n.confirm(e,t):window.confirm(e)},async prompt(e,t,n){const r=ct.instance;return r?r.prompt(e,t,n):window.prompt(e,t)??null},async choice(e,t,n){const r=ct.instance;if(r)return r.choice(e,t,n);const i=window.prompt(`${e}

Options: ${t.join(", ")}`);return i&&t.includes(i)?i:null},toast(e,t){const n=zn.instance;n?n.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},ql="/easydbaccess/settings.json",ff="/easydbaccess/secrets.txt";function Si(e){try{return globalThis.localStorage??null}catch{return null}}function ao(e){const t=Si();if(!t)return{};const n=t.getItem(ql);if(!n)return{};try{const r=JSON.parse(n);return r&&typeof r=="object"?r:{}}catch{return{}}}function qs(e,t){return ao()[e]}function zw(e,t,n){const r=Si();if(!r)return;const i=ao();i[e]=t,r.setItem(ql,JSON.stringify(i))}function Nw(e,t){const n=Si();if(!n)return;const r=ao();e in r&&(delete r[e],n.setItem(ql,JSON.stringify(r)))}function Es(e,t){return e in ao()}function mi(e){return Si()?.getItem(ff)??""}function pf(e,t){Si()?.setItem(ff,e)}function hr(e){const t={};for(const n of e.split(/\r?\n/)){const r=n.trim();if(!r||r.startsWith("#"))continue;const i=r.indexOf(":");if(i<0)continue;const s=r.slice(0,i).trim(),o=r.slice(i+1).trim();s&&(t[s]=o)}return t}function Hl(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(n,r)=>{const i=t[r.trim()];return i===void 0?n:i})}function mf(e){return typeof e=="string"&&e.includes("${secret:")}function Zu(e){return typeof e=="string"&&e.trim()!==""&&!mf(e)}const jw=/(^|[_:.\-\s])(tokens?|secrets?|passwords?|passwd|pwd|api[_-]?keys?|apikeys?|auth|credentials?|pat)($|[_:.\-\s])/i;function ed(e){return jw.test(e)}function Fw(e,t){if((ed(e.name)||t?.(e.name)===!0)&&Zu(e.value))return!0;const r=e.value;return r===null||typeof r!="object"||Array.isArray(r)?!1:Object.entries(r).some(([i,s])=>ed(i)&&Zu(s))}function Uw(e,t){const n=[],r=[];for(const i of e)Fw(i,t)?r.push(i.name):n.push(i);return{kept:n,withheld:r}}function Bw(e,t,n){return typeof t!="string"||t===""||!mf(e)?!1:Hl(e,n)===t}function qw(e){const t=Mw(e.registries),n=e.registries.rowSources,r=o=>(n.set(o.type,o),()=>{n.get(o.type)===o&&n.delete(o.type)}),i=Vw(e.store,e.registries),s={open(o){return console.warn("[host] windows.open is stubbed until Phase 5",o.id),{id:o.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:s,registerRowSource:r,settings:i,backend:{fetch:async(o,a)=>{const c=await Hw(e.store),d=a?.body instanceof ArrayBuffer;if(!c||d)return globalThis.fetch(o,a);const f={url:o};return a?.method&&(f.method=a.method),a?.headers&&(f.headers=a.headers),typeof a?.body=="string"&&(f.body=a.body),globalThis.fetch(`${c}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)})},async saveFile(o,a,c){const d=typeof a=="string"?new Blob([a],{type:c??"application/octet-stream"}):a,f=URL.createObjectURL(d),p=document.createElement("a");p.href=f,p.download=o,p.rel="noopener",document.body.appendChild(p),p.click(),p.remove(),setTimeout(()=>URL.revokeObjectURL(f),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function Hw(e){const t="server-sync:url";let n=Es(t)?qs(t):void 0;return n===void 0&&(n=(await e.settings.findOne(t))?.value),typeof n!="string"||n.length===0?null:Hl(n,hr(mi())).replace(/\/+$/,"")}function Vw(e,t){const n=(a,c)=>`${a}:${c}`,r=(a,c)=>t.settings.get(a)?.fields.find(d=>d.key===c),i=a=>typeof a=="string"?Hl(a,hr(mi())):a,s=async a=>Es(a)?qs(a):(await e.settings.findOne(a))?.value,o=async(a,c)=>Bw(await s(a),c,hr(mi()));return{async get(a,c){const d=n(a,c);let f;if(Es(d))f=qs(d);else{const p=await e.settings.findOne(d);f=p?p.value:r(a,c)?.default}return i(f)},async set(a,c,d,f){const p=n(a,c);if(await o(p,d))return;(f??r(a,c)?.scope??"workspace")==="user"?(zw(p,d),await e.settings.remove(p).catch(()=>{})):(await e.settings.upsert({name:p,value:d}),Nw(p))},async placement(a,c){const d=n(a,c);return Es(d)?"user":await e.settings.findOne(d)?"workspace":null}}}function td(e,t){return e.has(t)?e.get(t)!=="0":!1}function Kw(){if(typeof location>"u")return"off";const e=new URLSearchParams(location.search);return td(e,"safemode")?"all-optional":td(e,"safemode1")?"url-plugins":"off"}const Tt=Kw();function Hs(e){return`builtin:${e}`}function Vl(e){let t;try{t=new URL(e)}catch{return e}const n=t.hostname.toLowerCase();if(n==="github.com"||n==="www.github.com"){const r=t.pathname.split("/").filter(Boolean);if(r.length>=5&&(r[2]==="blob"||r[2]==="raw")){const i=r[0],s=r[1];let o=r.slice(3);return o.length>=3&&o[0]==="refs"&&(o[1]==="heads"||o[1]==="tags")&&(o=o.slice(2)),`https://raw.githubusercontent.com/${[i,s,...o].join("/")}`}}return e}function gf(e){if(e.length>1024)return!1;const t=e.split(`
`);return t[0]?.startsWith("version https://git-lfs.github.com/spec/v1")===!0&&t.some(n=>n.startsWith("oid "))&&t.some(n=>n.startsWith("size "))}function bf(e){const t=Vl(e);let n;try{n=new URL(t)}catch{return null}if(n.hostname.toLowerCase()!=="raw.githubusercontent.com")return null;const r=n.pathname.replace(/^\/+/,"");return r.split("/").filter(Boolean).length<4?null:`https://media.githubusercontent.com/media/${r}`}async function wf(e,t){const n=Number(e.headers?.get?.("content-length")),r=e.body?.getReader?.();if(r&&Number.isFinite(n)&&n>0){const i=[];let s=0;for(;;){const{done:c,value:d}=await r.read();if(c)break;d&&(i.push(d),s+=d.length,t?.(Math.min(1,s/n)))}const o=new Uint8Array(s);let a=0;for(const c of i)o.set(c,a),a+=c.length;return new TextDecoder().decode(o)}return await e.text()}const Ww=50*1024*1024;function nd(e){try{return new URL(e).host}catch{return e}}function Vt(e){try{const n=new URL(e).pathname.split("/").filter(Boolean).pop();return n&&n.length>0?n:"sample.db.json"}catch{return"sample.db.json"}}async function Gw(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}function rd(e){const t=e/1048576;return`${Number.isInteger(t)?t:t.toFixed(1)} MB`}async function Yw(e,t,n={}){const r=Vl(t),i=n.slowMs??2e3;let s=setTimeout(()=>{s=void 0,n.onSlow?.()},i);const o=()=>{s!==void 0&&(clearTimeout(s),s=void 0)},a=n.maxBytes===null?null:n.maxBytes??Ww,c=async d=>{let f;try{f=await e.backend.fetch(d)}catch(b){throw new Error(`Could not reach ${nd(d)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${b.message}]`,{cause:b})}if(!f.ok){const b=await Gw(f);throw new Error(`HTTP ${f.status} ${f.statusText||""}`.trim()+(b?` — ${b}`:""))}const p=Number(f.headers.get("content-length"));if(a!==null&&Number.isFinite(p)&&p>a)throw f.body?.cancel().catch(()=>{}),new Error(`Response is ${rd(p)}, over the ${rd(a)} browser import limit. Set a row limit, import it as a Reference instead of a Copy, take a smaller extract, or connect to a server/Datasette for large datasets.`);try{return await wf(f,n.onProgress)}catch(b){throw new Error(`Failed reading the response body from ${nd(d)}: ${b.message}`,{cause:b})}};try{const d=await c(r);if(gf(d)){const f=bf(r);if(f)return await c(f)}return d}finally{o()}}async function Ci(e,t,n,r={}){const{TopProgress:i}=await Ae(async()=>{const{TopProgress:o}=await import("./top-progress-BAYzvfMV.js");return{TopProgress:o}},[]),s={handle:null};try{return await Yw(e,t,{onSlow:()=>{s.handle=i.begin(n)},onProgress:o=>s.handle?.fraction(o),...r.maxBytes!==void 0?{maxBytes:r.maxBytes}:{}})}finally{s.handle?.done()}}const yf="Re-Create: columns and rows from the file",vf="Re-Load: replace the rows, keep the columns",kf="Append the rows",$f="A new table",Qw={[yf]:"recreate",[vf]:"reload",[kf]:"append",[$f]:"new"};async function lo(e,t){const n=t.reason??`Import "${t.fileName}" into "${t.tableName}"?`,r=await e.ui.dialogs.choice(n,[yf,vf,kf,$f],t.title);return r?Qw[r]??null:null}function xf(e,t){return e.length!==t.length?!1:e.every((n,r)=>{const i=t[r],s=[i.field,i.label,cr(i.field),cr(i.label??"")],o=n.trim().toLowerCase();return s.some(a=>a.trim().toLowerCase()===o)||cr(n)===i.field})}const Jw=/^[+-]?\d+$/;function co(e){const t=e.trim();return Jw.test(t)?!Number.isSafeInteger(Number(t)):!1}function uo(e){let t="",n=0,r=!1;for(;n<e.length;){const i=e[n];if(r){t+=i,i==="\\"?(n++,n<e.length&&(t+=e[n])):i==='"'&&(r=!1),n++;continue}if(i==='"'){r=!0,t+=i,n++;continue}if(i==="-"||i>="0"&&i<="9"){let s=n;for(e[s]==="-"&&s++;s<e.length&&e[s]>="0"&&e[s]<="9";)s++;const o=s,a=e[s],c=a!=="."&&a!=="e"&&a!=="E",d=e.slice(n,o);c&&co(d)?t+=`"${d}"`:t+=d,n=o;continue}t+=i,n++}return t}const us=e=>e.trim().toLowerCase();function GT(e,t){const n=new Map;for(const s of t)n.set(us(s.field),s.field),n.has(us(s.label))||n.set(us(s.label),s.field);const r=new Set,i=e.map(()=>"");return e.forEach((s,o)=>{const a=n.get(us(s));a&&!r.has(a)&&(i[o]=a,r.add(a))}),e.forEach((s,o)=>{if(i[o])return;const a=t[o]?.field;a&&!r.has(a)&&(i[o]=a,r.add(a))}),i}function Xw(e,t,n,r){const i=new Map(t.map(s=>[s.field,s.type]));return e.map(s=>{const o={};return n.forEach((a,c)=>{if(!a)return;const d=i.get(a);d!==void 0&&(o[a]=r(s[c]??"",d))}),o})}const Zw={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV or TSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function ey(e){e.ui.registerImporter(iy),Ae(()=>import("./csv-import-options-B7r0NOuU.js"),[]),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const r=gy(t).filter(by);if(r.length===0)return!1;if(t.preventDefault(),r.length===1&&await ry(e,t,r[0]))return!0;const i=r.length===1?`"${r[0].name}"`:`${r.length} files`,s=await e.ui.dialogs.choice(`Import ${i} straight away, or review the columns first (rename, hide, fix duplicate names)?`,[ny,id],"Import CSV");if(!s)return!0;const o=s===id?async a=>{const{editColumnNames:c}=await Ae(async()=>{const{editColumnNames:d}=await Promise.resolve().then(()=>xS);return{editColumnNames:d}},void 0);return c(a)}:void 0;for(const a of r)await sy(e,a,o);return!0})}function Xa(e){return e.kind==="file"&&e.file?e.file.name:e.kind==="url"&&e.url?Vt(e.url):"pasted"}function ty(e){return Yl(Xa(e))||"imported"}const ny="Import directly",id="Edit columns first";async function ry(e,t,n){const{tableIdAtNode:r}=await Ae(async()=>{const{tableIdAtNode:a}=await Promise.resolve().then(()=>Pc);return{tableIdAtNode:a}},void 0),i=r(t.target);if(!i)return!1;const s=await e.store.tables.findOne(i);if(!s)return!1;if(s.readonly===!0||s.source!=null)return e.ui.dialogs.toast(`"${s.name}" is read-only, so the file was imported as a new table.`,{kind:"warning",title:"Import CSV"}),!1;const o=await lo(e,{fileName:n.name,tableName:s.name,title:"Import CSV"});return o?o==="new"?!1:(await Kl(e,await n.text(),n.name,Sf(i,s.name,o)),!0):!0}function Sf(e,t,n){const r={target:{tableId:e,mode:n}};return n==="recreate"||(r.mapFields=async(i,s,o)=>{if(xf(i,s))return s.map(c=>c.field);const{mapColumnsToTable:a}=await Ae(async()=>{const{mapColumnsToTable:c}=await import("./column-map-dialog-xjswyFkn.js");return{mapColumnsToTable:c}},[]);return a(i,s,t,o)}),r}const iy={id:"csv",label:"CSV / TSV",icon:"table_view",order:10,accept:[".csv",".tsv",".tab","text/csv","text/tab-separated-values"],panel:"csv-import-options",samples:[{label:"Air quality — 2016 readings (CSV)",url:"https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv"}],supports:{url:!0,file:!0,text:!0,reference:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??e.text??"";return/\.(csv|tsv|tab)$/i.test(t)?.95:e.file?.type==="text/csv"?.9:e.kind==="text"?.2:0},async list(e,t){return[{name:ty(t),rowCount:null,handle:t}]},async*read(e,t){const n=t.handle;let r;n.kind==="file"&&n.file?r=e.maxRows!=null?await _f(n.file,e.maxRows):await n.file.text():n.kind==="url"&&n.url?r=await e.fetchText(n.url,`Reading ${Xa(n)}…`):r=n.text??"";const s=(typeof e.panel.separator=="string"?e.panel.separator:void 0)??Ql(Xa(n)),o={...e.maxRows!=null?{maxRows:e.maxRows}:{},...s?{separator:s}:{}},a=e.targetColumns;if(a&&a.length>0){yield{rows:Wl(r,o).rows.map(p=>{const b={};for(let y=0;y<a.length;y++){const k=a[y];b[k.field]=Gl(p[y]??"",k.type)}return b})};return}const c=_r(r,o);yield{columns:c.columns,rows:c.rows}},reference(e,t){const n=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");return{type:"url",config:{url:n.url,format:"csv"}}}};async function sy(e,t,n){await Kl(e,await t.text(),t.name,n?{editColumns:n}:void 0)}async function Kl(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("csv-import: no active workspace");const s=Yl(n||"imported")||"imported",o=r.separator??Ql(n),a=r.target?await e.store.tables.findOne(r.target.tableId):null,c=a??(await e.store.tables.find()).find(k=>k.workspaceId===i&&k.name===s);let d,f,p=r.mapFields;if(a&&r.target)f=r.target.mode,d=a.id;else if(c){const k=await lo(e,{fileName:n||s,tableName:c.name,title:"CSV import",reason:`A table named "${s}" already exists in this workspace.`});if(!k)return;f=k,f==="new"?d=Ee():(d=c.id,p=Sf(c.id,c.name,f).mapFields)}else f="new",d=Ee();e.events.emit("import:before",{source:"csv",tableId:d});let b;if(f==="new"||f==="recreate"){const k=_r(t,{maxRows:r.maxRows,separator:o});let $=k.columns,C=k.rows;if(r.editColumns){const E=await r.editColumns($);if(E===null)return;C=wy(C,$,E),$=E}if(r.maxRows!=null&&(C=C.slice(0,r.maxRows)),f==="recreate"){const E=e.store.rows(d),T=await E.find();await E.bulkRemove(T.map(Y=>Y.id)),await e.store.tables.patch(d,{columns:$,updatedAt:Date.now()})}else await e.store.tables.insert({id:d,workspaceId:i,name:s,code:cr(s),columns:$,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()});b=C.map(E=>({id:Ee(),tableId:d,data:E,updatedAt:Date.now()}))}else{const k=c.columns,$=Wl(t,{maxRows:r.maxRows,separator:o}),C=r.maxRows!=null?$.rows.slice(0,r.maxRows):$.rows;let E=k.map(T=>T.field);if(p){const T=await p($.header,k,$.rows[0]??[]);if(T===null)return;E=T}if(b=Xw(C,k,E,Gl).map(T=>({id:Ee(),tableId:d,data:T,updatedAt:Date.now()})),f==="reload"){const T=e.store.rows(d),Y=await T.find();await T.bulkRemove(Y.map(L=>L.id))}}await e.store.rows(d).bulkInsert(b),e.events.emit("import:after",{source:"csv",tableId:d,rowCount:b.length})}function Wl(e,t={}){const n=e.replace(/\uFEFF/,""),r=t.separator??Ef(n),i=Tf(n,r,Cf(t.maxRows));if(i.length===0)return{header:[],rows:[]};const s=i[0],o=i.slice(1).filter(a=>!(a.length===1&&a[0]===""));return{header:s,rows:o}}function Cf(e){return e!=null?e+1:void 0}async function _f(e,t){const r=new TextDecoder,i=t+1;let s="",o=0,a=!1,c=0;for(;c<e.size;){const d=new Uint8Array(await e.slice(c,c+1048576).arrayBuffer());c+=1048576;const f=r.decode(d,{stream:!0});for(let p=0;p<f.length;p++){const b=f[p];if(b==='"')a=!a;else if(b===`
`&&!a&&(o+=1,o>=i))return s+f.slice(0,p+1)}s+=f}return s}function _r(e,t={}){const n=e.replace(/\uFEFF/,""),r=t.separator??Ef(n),i=Tf(n,r,Cf(t.maxRows));if(i.length===0)return{columns:[],rows:[]};const s=i[0],o=i.slice(1).filter(y=>!(y.length===1&&y[0]==="")),a=s.map((y,k)=>ly(y,k)),c=Rf(a.map(y=>y.field)),d=o.map(y=>{const k={};for(let $=0;$<c.length;$++)k[c[$]]=y[$]??"";return k}),f=a.map((y,k)=>y.type?y.type:cy(d.map($=>$[c[k]]??"").filter($=>$.length>0))),p=a.map((y,k)=>{const $=f[k]??"string",C={field:c[k],label:y.label,type:$},E=ay($),T=y.renderer??E;return T&&(C.renderer=T),y.default!==void 0&&(C.default=y.default),y.max!=null&&(C.max=y.max),y.unique&&(C.unique=!0),y.notnull&&(C.notnull=!0),y.hidden&&(C.hidden=!0),C}),b=d.map(y=>{const k={};for(let $=0;$<c.length;$++){const C=c[$],E=f[$]??"string";k[C]=Gl(y[C]??"",E)}return k});return{columns:p,rows:b}}const oy=new Set(["string","number","boolean","date","datetime","array"]),sd={color:"color",image:"image"};function ay(e){if(e==="date"||e==="datetime"||e==="boolean")return e;if(e==="array")return"tags"}function ly(e,t){const n=e.trim();if(!n.includes(":"))return{field:cr(n||`col_${t+1}`),label:n||`Column ${t+1}`};const r=n.split(":"),i=cr(r[0]||`col_${t+1}`),s=(r[1]??r[0]??"").trim()||i,o={field:i,label:s},a=(r[2]??"").trim();a&&(oy.has(a)?o.type=a:sd[a]&&(o.type="string",o.renderer=sd[a]));const c=(r[3]??"").trim();c&&(o.default=c);const d=(r[4]??"").trim();if(d){const p=Number(d);Number.isFinite(p)&&p>0&&(o.max=p)}const f=(r[5]??"").toLowerCase();return f.includes("u")&&(o.unique=!0),f.includes("n")&&(o.notnull=!0),f.includes("h")&&(o.hidden=!0),o}function Ef(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),n={",":0,";":0,"	":0};for(const s of t)s in n&&(n[s]+=1);let r=",",i=-1;for(const s of[",",";","	"])(n[s]??0)>i&&(r=s,i=n[s]??0);return r}function Tf(e,t,n){const r=[];let i=[],s="",o=!1;for(let a=0;a<e.length;a++){const c=e[a];if(o)c==='"'?e[a+1]==='"'?(s+='"',a++):o=!1:s+=c;else if(c==='"')o=!0;else if(c===t)i.push(s),s="";else if(c===`
`||c==="\r"){if(c==="\r"&&e[a+1]===`
`&&a++,i.push(s),r.push(i),i=[],s="",n!=null&&r.length>=n)return r}else s+=c}return(s.length>0||i.length>0)&&(i.push(s),r.push(i)),r}function cy(e){return e.length===0?"string":rf(e)?"array":e.every(dy)?"boolean":e.every(hy)?"number":e.every(py)?"datetime":e.every(fy)?"date":"string"}const uy=/^(true|false|yes|no|0|1)$/i;function dy(e){return uy.test(e.trim())}function hy(e){const t=e.trim();if(t===""||co(t))return!1;const n=Number(t);return Number.isFinite(n)}function fy(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function py(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function Gl(e,t){const n=e.trim();switch(t){case"array":return n===""?null:n;case"number":{if(n==="")return null;if(co(n))return n;const r=Number(n);return Number.isFinite(r)?r:n}case"boolean":return n===""?null:/^(true|yes|1)$/i.test(n);case"date":return If(n);case"datetime":return my(n);default:return e}}function If(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){const r=parseInt(t[1],10),i=parseInt(t[2],10),s=t[3];let o=parseInt(s,10);s.length===2&&(o+=2e3);let a,c;return r>12?(a=r,c=i):i>12?(c=r,a=i):(a=r,c=i),`${o.toString().padStart(4,"0")}-${c.toString().padStart(2,"0")}-${a.toString().padStart(2,"0")}`}const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toISOString().slice(0,10)}function my(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),n=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(n)return`${n[1]}T${n[2].padStart(5,"0")}`;const r=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(r)return`${If(`${r[1]}/${r[2]}/${r[3]}`)}T${r[4].padStart(5,"0")}`;const i=new Date(e);if(!Number.isNaN(i.getTime())){const s=i.toISOString();return`${s.slice(0,10)}T${s.slice(11,16)}`}return e}function gy(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const i=r.getAsFile();i&&n.push(i)}return n}return[]}const Af=/\.(csv|tsv|tab)$/i;function Yl(e){return e.replace(Af,"")}function Ql(e){return/\.(tsv|tab)$/i.test(e)?"	":void 0}function by(e){return!!(Af.test(e.name)||e.type==="text/csv"||e.type==="application/csv"||e.type==="text/tab-separated-values")}function Rf(e){const t=new Map,n=new Set,r=[];for(const i of e){let s=i,o=t.get(i)??0;for(;n.has(s);)o+=1,s=`${i}_${o+1}`;t.set(i,o),n.add(s),r.push(s)}return r}function wy(e,t,n){return e.map(r=>{const i={};for(let s=0;s<t.length;s++)i[n[s].field]=r[t[s].field];return i})}const yy=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:Rf,importCsvText:Kl,init:ey,meta:Zw,parseCsv:_r,parseCsvRaw:Wl,readCsvHead:_f,separatorForName:Ql,stripDelimitedExt:Yl},Symbol.toStringTag,{value:"Module"})),vy={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"CSV serializer for the per-table export menu (see dump-export.ts) and the importer/exporter registry.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},ky={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Jl(e,t)}};function $y(e){e.ui.registerExporter(ky)}function Jl(e,t){const n=e.columns.map(s=>s.field),r=e.columns.map(s=>od(s.label??s.field)),i=t.map(s=>n.map(o=>od(xy(s.data[o]))).join(","));return[r.join(","),...i].join(`\r
`)}function xy(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function od(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const Sy=Object.freeze(Object.defineProperty({__proto__:null,init:$y,meta:vy,serializeCsv:Jl},Symbol.toStringTag,{value:"Module"}));var Cy=Object.defineProperty,_y=Object.getOwnPropertyDescriptor,gn=(e,t,n,r)=>{for(var i=r>1?void 0:r?_y(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Cy(t,n,i),i};function gi(e,t={}){return(Xe.instance??Of()).open(e,t).then(r=>r?.map(i=>i.index)??null)}function Ey(e,t={}){return(Xe.instance??Of()).open(e,t)}function Of(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function Ty(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Xe=class extends $e{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.modes=[],this.offerViewModes=!1,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=[];this.selected.forEach((n,r)=>{if(!n)return;const i=(this.items[r]?.kind??"table")==="view";t.push(i&&this.offerViewModes?{index:r,mode:this.modes[r]??"projection"}:{index:r})}),t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Xe.instance=this}disconnectedCallback(){super.disconnectedCallback(),Xe.instance===this&&(Xe.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(n=>!n.hidden),this.offerViewModes=t.offerViewModes??!1,this.modes=e.map(()=>t.defaultViewMode??"projection"),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e,t){this.selected=this.items.map((n,r)=>t&&(n.kind??"table")!==t?this.selected[r]??!1:e)}setMode(e,t){const n=this.modes.slice();n[e]=t,this.modes=n}indicesOf(e){return this.items.map((t,n)=>(t.kind??"table")===e?n:-1).filter(t=>t>=0)}get sectioned(){return this.items.some(e=>e.kind!==void 0)}get selectedCount(){return this.selected.filter(Boolean).length}renderSection(e,t){const n=this.indicesOf(e);if(n.length===0)return v``;const r=n.filter(i=>this.selected[i]).length;return v`
      <div class="section">
        <div class="section-head">
          <span class="section-title">${t} <span class="section-count">${r}/${n.length}</span></span>
          <span>
            <button type="button" @click=${()=>this.setAll(!0,e)}>All</button>
            &nbsp;·&nbsp;
            <button type="button" @click=${()=>this.setAll(!1,e)}>None</button>
          </span>
        </div>
        <ul class="tables">
          ${n.map(i=>this.renderRow(this.items[i],i))}
        </ul>
      </div>
    `}renderRow(e,t){const n=(e.kind??"table")==="view";return v`
      <li>
        <input type="checkbox" id=${`tsel-${t}`} .checked=${this.selected[t]??!1} @change=${()=>this.toggle(t)} />
        <label for=${`tsel-${t}`}>
          <span class="name">${e.name}</span>
          ${e.hidden?v`<span class="tag-hidden">hidden</span>`:""}
          <span class="size">${Ty(e.size)}</span>
          ${e.detail?v`<span class="detail">${e.detail}</span>`:""}
        </label>
        ${n&&this.offerViewModes?this.renderModeToggle(t):""}
      </li>
    `}renderModeToggle(e){const t=this.modes[e]??"projection";return v`
      <span class="mode" title="A projection recomputes from its source tables; Data is a snapshot you can edit">
        <label class="mode-opt">
          <input type="radio" name=${`mode-${e}`} .checked=${t==="projection"} @change=${()=>this.setMode(e,"projection")} />
          Projection
        </label>
        <label class="mode-opt">
          <input type="radio" name=${`mode-${e}`} .checked=${t==="data"} @change=${()=>this.setMode(e,"data")} />
          Data
        </label>
      </span>
    `}render(){const e=this.selectedCount;return v`
      <dialog @cancel=${this.onCancel} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish(null)}>×</button>
        <form @submit=${this.submit}>
          <div class="dialog-header">
            <h2>${this.heading}</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${()=>this.finish(null)}>Cancel</button>
              <button type="submit" class="primary" ?disabled=${e===0}>${this.confirmLabel} (${e})</button>
            </div>
          </div>
          <div class="dialog-body">
            ${this.message?v`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            ${this.sectioned?v`${this.renderSection("table","Tables")}${this.renderSection("view","Views")}`:v`<ul class="tables">
                  ${this.items.map((t,n)=>this.renderRow(t,n))}
                </ul>`}
          </div>
        </form>
      </dialog>
    `}};Xe.instance=null;Xe.styles=[mt,Se`
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
      .section + .section {
        margin-top: 0.75rem;
      }
      .section-head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 0.75rem;
        padding: 0 0.15rem 0.25rem;
        font-size: 0.82rem;
      }
      .section-title {
        font-weight: 600;
        color: #374151;
      }
      .section-count {
        font-weight: 400;
        color: #6b7280;
      }
      .section-head button {
        font: inherit;
        background: transparent;
        border: 0;
        color: #2563eb;
        cursor: pointer;
        padding: 0;
      }
      .section-head button:hover {
        text-decoration: underline;
      }
      .mode {
        flex: 0 0 auto;
        display: flex;
        gap: 0.5rem;
        font-size: 0.78rem;
        color: #374151;
      }
      .mode-opt {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        cursor: pointer;
        white-space: nowrap;
      }
      .mode input[type='radio'] {
        width: 0.85rem;
        height: 0.85rem;
      }
    `];gn([z()],Xe.prototype,"items",2);gn([z()],Xe.prototype,"selected",2);gn([z()],Xe.prototype,"heading",2);gn([z()],Xe.prototype,"message",2);gn([z()],Xe.prototype,"confirmLabel",2);gn([z()],Xe.prototype,"modes",2);gn([z()],Xe.prototype,"offerViewModes",2);Xe=gn([Oe("table-select-dialog")],Xe);const Iy=Object.freeze(Object.defineProperty({__proto__:null,get TableSelectDialog(){return Xe},chooseDatabaseObjects:Ey,chooseTables:gi},Symbol.toStringTag,{value:"Module"}));function Xl(e,t){return e.every((n,r)=>n.field===t[r]?.field)?null:n=>{const r={};for(let i=0;i<e.length;i++)r[t[i].field]=n[e[i].field];return r}}function ad(e,t){if(t.length===0)return null;const n=new Set(t.map(i=>i.from)),r={};for(const i of Object.keys(e))n.has(i)||(r[i]=e[i]);for(const{from:i,to:s}of t)Object.prototype.hasOwnProperty.call(e,i)&&(r[s]=e[i]);return r}function ho(e,t,n=[]){const r=new Set(e.map(a=>a.field)),i=new Set(n),s=[...e],o=[];for(const a of t)r.has(a.field)||i.has(a.field)||(s.push(a),o.push(a.field),r.add(a.field));return{columns:s,newFields:o}}async function Zl(e,t){return(await e.store.tables.find()).filter(n=>n.workspaceId===t).map(n=>n.name)}async function Df(e,t,n,r){const{workspaceId:i,importerId:s,target:o,maxRows:a}=r;let c,d,f,p=!1,b=0,y,k=null;const $=E=>e.store.rows(E),C=async E=>{if(p)return!0;if(o.kind==="new"){let T=E.columns??[];if(r.editColumns){const L=await r.editColumns(T);if(L===null)return!1;k=Xl(T,L),T=L}c=Ee(),d=pn(await Zl(e,i),t);const Y={id:c,workspaceId:i,name:d,code:Ne(d),columns:T,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()};await e.store.tables.insert(Y),f=!0}else{const T=await e.store.tables.findOne(o.tableId);if(!T)throw new Error("The table to import into no longer exists.");if(c=T.id,d=T.name,f=!1,o.kind==="overwrite"){const Y=await $(c).find();await $(c).bulkRemove(Y.map(L=>L.id))}if(E.columns?.length){const Y=ho(T.columns,E.columns,T.deletedColumns??[]);Y.newFields.length>0&&await e.store.tables.patch(c,{columns:Y.columns,updatedAt:Date.now()})}}return e.events.emit("import:before",{source:s,tableId:c}),p=!0,!0};for await(const E of n){if(a!=null&&b>=a)break;if(!await C(E))return null;E.totalCount!=null&&(y=E.totalCount);let T=E.rows;if(a!=null&&b+T.length>a&&(T=T.slice(0,a-b)),T.length===0)continue;k&&(T=T.map(k));const Y=Date.now(),L=T.map(ne=>({id:Ee(),tableId:c,data:ne,updatedAt:Y}));await $(c).bulkInsert(L),b+=L.length,r.onProgress?.(b,y)}return!p&&!await C({})?null:(e.events.emit("import:after",{source:s,tableId:c,rowCount:b}),{tableId:c,tableName:d,rowCount:b,created:f})}function ld(e,t,n={}){const r=t.mode==="reference"||t.maxRows!=null;return{api:e,fetchText:(i,s)=>Ci(e,i,s??"Reading…",r?{maxBytes:null}:{}),panel:t.panel??{},...t.cursor!==void 0?{cursor:t.cursor}:{},...t.maxRows!==void 0?{maxRows:t.maxRows}:{},...n}}async function Ay(e,t){if(t.length<=1)return t;const n=await gi(t.map(r=>({name:r.name,size:r.rowCount,...r.detail!==void 0?{detail:r.detail}:{},...r.hidden!==void 0?{hidden:r.hidden}:{}})),{title:`Import from ${e.label}`,message:`This source offers ${t.length} tables. Choose which to import.`,confirmLabel:"Import"});return n?n.map(r=>t[r]):null}async function Ry(e,t,n,r,i){if(!t.reference)throw new Error(`${t.label} cannot be referenced — import a copy instead.`);const s=t.reference(n,r);let o=[];for await(const d of t.read(n,r)){o=d.columns??[];break}if(o.length===0)throw new Error("No columns found in the referenced data.");const a=pn(await Zl(e,i),r.name),c=Ee();return await e.store.tables.insert({id:c,workspaceId:i,name:a,code:Ne(a),columns:o,view:"table",source:s,readonly:!0,updatedAt:Date.now()}),{tableId:c,tableName:a,rowCount:0,created:!0}}async function fo(e,t,n,r){const i=e.workspaceId();if(!i)throw new Error("No active workspace.");const s=ld(e,r),o=await t.list(s,n);if(o.length===0)throw new Error("No tables found at that source.");const a=await Ay(t,o);if(a===null)return{landed:[],failed:[],cancelled:!0};const c=[],d=[];for(const f of a)try{if(r.mode==="reference"){c.push(await Ry(e,t,s,f,i));continue}const p=r.target;let b;p.kind!=="new"&&(b=(await e.store.tables.findOne(p.tableId))?.columns);const y=ld(e,r,{...b?{targetColumns:b}:{}}),k=t.read(y,f),$=r.origin??(n.kind==="url"&&n.url?{type:t.id,url:n.url}:void 0),C=await Df(e,f.name,k,{workspaceId:i,importerId:t.id,target:p,...$?{origin:$}:{},...r.editColumns?{editColumns:r.editColumns}:{},...r.maxRows!==void 0?{maxRows:r.maxRows}:{}});if(C===null)return{landed:c,failed:d,cancelled:!0};c.push(C)}catch(p){d.push({name:f.name,error:p?.message??String(p)})}return{landed:c,failed:d,cancelled:!1}}async function Lf(e,t,n){const r=new Map;if(n.length===0)return r;const i=(await e.find()).filter(a=>a.workspaceId===t),s=new Map(i.map(a=>[a.name,a])),o=new Map(i.map(a=>[a.id,a]));for(const a of n){if(!Oy(a))continue;const c=s.get(a.name)??o.get(a.id),d=c?.id??a.id;c&&r.set(a.id,c.id);const f=c?c.builtin:a.builtin,p={...a,id:d,workspaceId:t};f===void 0?delete p.builtin:p.builtin=f,await e.upsert(p),s.set(p.name,p),o.set(p.id,p)}return r}function Oy(e){if(typeof e!="object"||e===null)return!1;const t=e;return typeof t.id=="string"&&typeof t.name=="string"}const Dy={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function Ly(e){e.ui.registerImporter(Pf),e.ui.registerDropHandler(async t=>{const r=Vy(t).filter(Ky);if(r.length===0)return!1;t.preventDefault();for(const i of r)await My(e,t,i)||await zy(e,i);return!0})}async function My(e,t,n){const{tableIdAtNode:r}=await Ae(async()=>{const{tableIdAtNode:f}=await Promise.resolve().then(()=>Pc);return{tableIdAtNode:f}},void 0),i=r(t.target);if(!i)return!1;const s=await e.store.tables.findOne(i);if(!s)return!1;if(s.readonly===!0||s.source!=null)return e.ui.dialogs.toast(`"${s.name}" is read-only, so the file was imported as a new table.`,{kind:"warning",title:"Import JSON"}),!1;const o=await n.text();let a;try{a=JSON.parse(uo(o))}catch{return!1}const c=_i(a,Ts(n.name));if(c.length===0)return!1;if(c.length>1)return e.ui.dialogs.toast(`"${n.name}" holds ${c.length} tables — drop it outside a window to import them.`,{kind:"warning",title:"Import JSON"}),!0;const d=await lo(e,{fileName:n.name,tableName:s.name,title:"Import JSON"});return d?d==="new"?!1:(await Mf(e,s,c[0],d),!0):!0}async function Mf(e,t,n,r){const i=e.store.rows(t.id);e.events.emit("import:before",{source:"json",tableId:t.id});let s;if(r==="recreate")await e.store.tables.patch(t.id,{columns:n.columns,updatedAt:Date.now()}),s=n.rows;else{const a=n.columns.map(d=>d.field);let c=t.columns.map(d=>d.field);if(!xf(a,t.columns)){const{mapColumnsToTable:d}=await Ae(async()=>{const{mapColumnsToTable:b}=await import("./column-map-dialog-xjswyFkn.js");return{mapColumnsToTable:b}},[]),f=a.map(b=>String(n.rows[0]?.[b]??"")),p=await d(a,t.columns,t.name,f);if(p===null)return;c=p}s=n.rows.map(d=>{const f={};return a.forEach((p,b)=>{const y=c[b];y&&(f[y]=d[p])}),f})}if(r!=="append"){const a=await i.find();await i.bulkRemove(a.map(c=>c.id))}const o=s.map(a=>({id:Ee(),tableId:t.id,data:a,updatedAt:Date.now()}));await i.bulkInsert(o),e.events.emit("import:after",{source:"json",tableId:t.id,rowCount:o.length})}function ec(e){return Ye(e)?Za(e)||Array.isArray(e.tables)?!0:Nf(e):!1}function Py(e){return e.kind==="file"&&e.file?Ts(e.file.name):e.kind==="url"&&e.url?Ts(Vt(e.url)):Ts(e.name??"imported")}const Pf={id:"json",label:"JSON (array of objects or a dump)",icon:"data_object",order:20,accept:[".json",".db.json","application/json"],samples:[{label:"Northwind — sample database (JSON dump)",url:"https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json"}],supports:{url:!0,file:!0,text:!0,reference:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";if(/\.db\.json$/i.test(t))return 1;if(/\.json$/i.test(t))return .95;if(e.file?.type==="application/json")return .9;const n=(e.text??"").trimStart();return n.startsWith("{")||n.startsWith("[")?.3:0},async list(e,t){let n;t.kind==="file"&&t.file?n=await t.file.text():t.kind==="url"&&t.url?n=await e.fetchText(t.url,`Reading ${Vt(t.url)}…`):n=t.text??"";const r=Py(t);let i;try{i=JSON.parse(uo(n))}catch(o){throw new Error(`Invalid JSON in ${r}: ${o.message}`,{cause:o})}const s=_i(i,r);return s.map(o=>({name:o.name,rowCount:o.rows.length,handle:{table:o,input:t,single:s.length===1}}))},async*read(e,t){const{table:n}=t.handle;yield{columns:n.columns,rows:n.rows}},reference(e,t){const{input:n,single:r}=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");if(!r)throw new Error("That URL holds several tables, so a reference would be ambiguous. Import a copy instead.");return{type:"url",config:{url:n.url,format:"json"}}}};function Ts(e){return e.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported"}async function zy(e,t){const n=await t.text();let r;try{r=JSON.parse(uo(n))}catch(o){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${t.name}: ${o.message}`)});return}if(ec(r)){await tc(e,n,t.name);return}const i=await fo(e,Pf,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),s=i.landed.reduce((o,a)=>o+a.rowCount,0);i.landed.length>0&&e.ui.dialogs.toast(`Imported ${t.name} (${s.toLocaleString()} rows).`,{kind:"success",title:"Import"})}async function tc(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("json-import: no active workspace");let s;try{s=JSON.parse(uo(t))}catch(C){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${n}: ${C.message}`)});return}const o=n.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",a=_i(s,o);if(a.length===0)return;let c=a;if(a.length>1){const C=await gi(a.map(E=>({name:E.name,size:E.rows.length})),{title:"Import tables",message:`"${n}" contains ${a.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!C)return;c=C.map(E=>a[E])}const d=(await e.store.tables.find()).filter(C=>C.workspaceId===i),f=new Set(c.map(C=>C.name)),p=d.filter(C=>f.has(C.name));let b;if(p.length===0&&c.length===1)b="append-new";else if(c.length===1&&p.length===1){const C=p[0],E=await lo(e,{fileName:n,tableName:C.name,title:"JSON import",reason:`A table named "${C.name}" already exists in this workspace.`});if(!E)return;if(E==="reload"||E==="append"){await Mf(e,C,c[0],E);return}b=E==="recreate"?"overwrite-matching":"append-new"}else{const C=p.length>0?[`Overwrite matching (${p.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],E=await e.ui.dialogs.choice(`Importing ${c.length} table${c.length===1?"":"s"} from "${n}".${p.length>0?`

${p.length} table${p.length===1?"":"s"} share a name with existing data.`:""}`,C,"JSON import");if(!E)return;E.startsWith("Overwrite matching")?b="overwrite-matching":E==="Replace entire workspace"?b="replace-workspace":b="append-new"}const y=2e3,k=c.reduce((C,E)=>C+(E.source?0:Math.min(E.rows.length,r.maxRows??1/0)),0);let $=null;if(k>=y){const{TopProgress:C}=await Ae(async()=>{const{TopProgress:E}=await import("./top-progress-BAYzvfMV.js");return{TopProgress:E}},[]);$=C.begin(`Importing ${n}…`)}try{if(b==="replace-workspace")for(const L of d){const ne=e.store.rows(L.id),W=await ne.find();await ne.bulkRemove(W.map(I=>I.id)),await e.store.tables.remove(L.id)}const C=new Map(d.map(L=>[L.name,L])),E=new Map,T=[];let Y=0;for(const L of c){const ne=L.source,W=L.origin??(!ne&&r.originUrl?{type:"json",url:r.originUrl}:void 0);let I;const V=b==="overwrite-matching"?C.get(L.name):void 0;let K=L.columns,ie=L.rows;if(r.editColumns&&!V&&!ne){const H=await r.editColumns(K,L.name);if(H===null)continue;ie=Hy(ie,K,H),K=H}if(V){if(I=V.id,!V.source){const H=e.store.rows(I),te=await H.find();await H.bulkRemove(te.map(q=>q.id))}await e.store.tables.patch(I,{columns:K,...L.title?{title:L.title}:{},...L.windowGeometry?{windowGeometry:L.windowGeometry}:{},...L.sortColumn?{sortColumn:L.sortColumn,sortAsc:L.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...L.filters?{filters:L.filters}:{},...L.labelColumn?{labelColumn:L.labelColumn}:{},...L.info?{info:L.info}:{},...L.deletedColumns?{deletedColumns:L.deletedColumns}:{},...L.readonly?{readonly:!0}:{},source:ne??void 0,origin:W??void 0,updatedAt:Date.now()})}else{I=Ee(),e.events.emit("import:before",{source:"json",tableId:I});const H=await e.store.tables.insert({id:I,workspaceId:i,name:L.name,code:Ne(L.name),columns:K,view:"table",...L.title?{title:L.title}:{},...L.windowGeometry?{windowGeometry:L.windowGeometry}:{},...L.sortColumn?{sortColumn:L.sortColumn,sortAsc:L.sortAsc??!0}:{},...L.filters?{filters:L.filters}:{},...L.labelColumn?{labelColumn:L.labelColumn}:{},...L.info?{info:L.info}:{},...L.deletedColumns?{deletedColumns:L.deletedColumns}:{},...L.readonly?{readonly:!0}:{},...ne?{source:ne}:{},...W?{origin:W}:{},updatedAt:Date.now()});H.name!==L.name&&T.push([L.name,H.name])}E.set(L.name,I);let de=0;if(!ne){const H=e.store.rows(I),q=(r.maxRows!=null?ie.slice(0,r.maxRows):ie).map(Q=>({id:Ee(),tableId:I,data:Q,updatedAt:Date.now()}));await H.bulkInsert(q),de=q.length,Y+=de,$?.fraction(k>0?Y/k:1)}e.events.emit("import:after",{source:"json",tableId:I,rowCount:de})}await Ny(e,s,i,E,b==="replace-workspace"),T.length>0&&e.ui.dialogs.toast(T.map(([L,ne])=>`“${L}” came in as “${ne}”`).join(`
`),{kind:"info",title:"Names must be unique"})}finally{$?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function Ny(e,t,n,r,i){if(!Ye(t))return;const s=t,o=Array.isArray(s.viewTemplates)?s.viewTemplates:[],a=Array.isArray(s.viewInstances)?s.viewInstances:[];if(o.length===0&&a.length===0)return;if(i){const d=(await e.store.viewInstances.find()).filter(f=>f.workspaceId===n);await e.store.viewInstances.bulkRemove(d.map(f=>f.id))}const c=await Lf(e.store.viewTemplates,n,o);for(const d of a){if(!Ye(d)||typeof d.id!="string")continue;const f=(d.tableName?r.get(d.tableName):void 0)??d.tableId;if(!f)continue;const p=c.get(d.templateId)??d.templateId,b=jy(d.dock,d.tableId,f);await e.store.viewInstances.upsert({...d,workspaceId:n,tableId:f,templateId:p,...b===void 0?{dock:void 0}:{dock:b}})}}function jy(e,t,n){if(e){if(e.host.kind==="view"||e.host.tableId===n)return e;if(e.host.tableId===t)return{...e,host:{kind:"table",tableId:n}}}}function _i(e,t){if(Ye(e)&&Za(e))return cd(e);if(Ye(e)&&Array.isArray(e.tables)){const n=e,r=[];for(const i of n.tables){if(zf(i)){r.push(ud(i));continue}Ye(i)&&Za(i)&&r.push(...cd(i))}return r}if(Nf(e))return[ud(e)];if(Array.isArray(e)){const n=e.filter(Ye);return n.length===0?[]:[{name:t,...dd(n)}]}return Ye(e)?[{name:t,...dd([e])}]:[]}function Za(e){for(const[t,n]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!Ye(n))continue;const r=n;if(Array.isArray(r.dataArray)&&Array.isArray(r.columns))return!0}return!1}function cd(e){const t=[];for(const[n,r]of Object.entries(e)){if(!/\.table\.json$/.test(n)||!Ye(r))continue;const i=r;if(!Array.isArray(i.dataArray)||!Array.isArray(i.columns))continue;const s=n.replace(/\.table\.json$/,""),o=i.columns.map(f=>Fy(f)),a=o.map(f=>f.field),c=i.dataArray.filter(f=>Array.isArray(f)).map(f=>{const p={};for(let b=0;b<a.length;b++)p[a[b]]=f[b];return p}),d={name:s,columns:o,rows:c};if(i.elementRect&&typeof i.elementRect.x=="number"&&typeof i.elementRect.y=="number"){const f=i.elementRect;d.windowGeometry={x:f.x,y:f.y,w:f.width??600,h:f.height??400,z:f.zIndex??100,minimized:!!f.minimized,maximized:!!f.maximized}}typeof i.sortColumn=="number"&&i.sortColumn>=0&&i.sortColumn<a.length&&(d.sortColumn=a[i.sortColumn],d.sortAsc=(i.sortDirection??"asc")!=="desc"),t.push(d)}return t}function Fy(e){const t=String(e.field??"col"),n=String(e.name??t),r=typeof e.type=="string"?e.type:"string",i={field:t,label:n,type:r};return e.isUnique&&(i.unique=!0),e.isNotNull&&(i.notnull=!0),i}function zf(e){return Ye(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Nf(e){return zf(e)&&Array.isArray(e.rows)}function ud(e){const t=e,n=Ye(t.windowGeometry)?t.windowGeometry:void 0,r=typeof t.sortColumn=="string"?t.sortColumn:void 0,i=typeof t.sortAsc=="boolean"?t.sortAsc:void 0,s=typeof t.title=="string"?t.title:void 0,o=Ye(t.filters)?t.filters:void 0,a=typeof t.labelColumn=="string"?t.labelColumn:void 0,c=Ye(t.info)?t.info:void 0,d=Array.isArray(t.deletedColumns)?t.deletedColumns.filter(y=>typeof y=="string"):void 0,f=t.readonly===!0?!0:void 0,p=Ye(t.source)&&typeof t.source.type=="string"?t.source:void 0,b=Ye(t.origin)&&typeof t.origin.type=="string"&&typeof t.origin.url=="string"?t.origin:void 0;return{name:String(e.name),columns:e.columns.map(Uy),rows:Array.isArray(e.rows)?e.rows.filter(Ye):[],...s?{title:s}:{},...n?{windowGeometry:n}:{},...r?{sortColumn:r,sortAsc:i??!0}:{},...o?{filters:o}:{},...a?{labelColumn:a}:{},...c?{info:c}:{},...d?{deletedColumns:d}:{},...f?{readonly:f}:{},...p?{source:p}:{},...b?{origin:b}:{}}}function Uy(e){if(!Ye(e))return{field:"col",label:"Col",type:"string"};const t=e,n=String(t.field??"col");let r=typeof t.type=="string"?t.type:"string",i=typeof t.renderer=="string"?t.renderer:void 0;(r==="color"||r==="image")&&(i=i??r,r="string");const s={field:n,label:String(t.label??n),type:r};return i&&(s.renderer=i),typeof t.script=="string"&&(s.script=t.script),typeof t.validate=="string"&&(s.validate=t.validate),t.default!==void 0&&(s.default=t.default),typeof t.max=="number"&&(s.max=t.max),typeof t.width=="number"&&(s.width=t.width),typeof t.description=="string"&&(s.description=t.description),typeof t.units=="string"&&(s.units=t.units),t.unique===!0&&(s.unique=!0),t.notnull===!0&&(s.notnull=!0),t.hidden===!0&&(s.hidden=!0),t.sortable===!1&&(s.sortable=!1),t.filterable===!1&&(s.filterable=!1),t.readonly===!0&&(s.readonly=!0),s}function dd(e){const t=new Set;for(const i of e)for(const s of Object.keys(i))t.add(s);return{columns:Array.from(t).map(i=>({field:i,label:i,type:By(e.map(s=>s[i]))})),rows:e}}function By(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":rf(t)?"array":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&qy(n))?"date":"string"}function qy(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}([T ]\d{1,2}:\d{2}(:\d{2})?)?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}([T ]\d{1,2}:\d{2})?$/.test(t))}function Hy(e,t,n){const r=Xl(t,n);return r?e.map(r):e}function Ye(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Vy(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const i=r.getAsFile();i&&n.push(i)}return n}return[]}function Ky(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}const Wy=Object.freeze(Object.defineProperty({__proto__:null,init:Ly,isWorkspaceDump:ec,meta:Dy,parsedToTables:_i,restoreWorkspaceDump:tc},Symbol.toStringTag,{value:"Module"}));function nc(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function bi(e){return e.replace(/&(?![a-zA-Z][a-zA-Z0-9]*;|#\d+;|#x[0-9a-fA-F]+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function jf(e){return e.replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&apos;|&#39;/gi,"'").replace(/&nbsp;/gi," ").replace(/&#x([0-9a-f]+);/gi,(t,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(t,n)=>String.fromCodePoint(Number(n))).replace(/&amp;/gi,"&")}function Is(e){const t=e.trim();return t===""?null:/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t)?/^(https?|mailto|tel):/i.test(t)?t:null:t}function Gy(e){const t=jf(e).trim(),n=t.replace(/[^!-~]/g,"");return Is(n)===null?null:t}const Ff="script|style|iframe|object|embed|noscript|template|svg|math|frame|frameset",Yy=new RegExp(`<(${Ff})\\b(?:"[^"]*"|'[^']*'|[^"'>])*>[\\s\\S]*?<\\/\\s*\\1\\s*>`,"gi"),Qy=new RegExp(`<(?:${Ff})\\b[\\s\\S]*$`,"i"),Jy=new Set(["br","hr","img","source","wbr","col"]),Uf=new Set(["a","abbr","audio","b","blockquote","br","caption","cite","code","col","colgroup","dd","del","details","div","dl","dt","em","figcaption","figure","h1","h2","h3","h4","h5","h6","hr","i","img","ins","kbd","li","mark","ol","p","pre","s","samp","small","source","span","strong","sub","summary","sup","table","tbody","td","tfoot","th","thead","time","tr","u","ul","var","video","wbr"]),Xy=new Set(["title","dir","lang"]),Zy={a:new Set(["href"]),audio:new Set(["src","controls"]),col:new Set(["span"]),colgroup:new Set(["span"]),img:new Set(["src","alt","width","height"]),ol:new Set(["start","reversed"]),source:new Set(["src","type"]),td:new Set(["colspan","rowspan","headers"]),th:new Set(["colspan","rowspan","scope","headers"]),time:new Set(["datetime"]),video:new Set(["src","controls","poster","width","height"])},ev=new Set(["href","src","poster"]),tv=/([a-zA-Z_:][a-zA-Z0-9_:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Bf=/<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:\s(?:"[^"]*"|'[^']*'|[^"'>])*)?)\s*\/?>/g;function nv(e,t,n){const r=t.toLowerCase();if(!Uf.has(r))return"";if(e)return Jy.has(r)?"":`</${r}>`;const i=Zy[r];let s=`<${r}`,o=null,a=!1;for(const c of n.matchAll(tv)){const d=c[1].toLowerCase();if(!Xy.has(d)&&!i?.has(d))continue;const f=c[2]??c[3]??c[4];if(f===void 0){s+=` ${d}`;continue}if(ev.has(d)){const p=Gy(f);if(p===null)continue;d==="href"&&(o=p),d==="src"&&(a=!0),s+=` ${d}="${bi(p)}"`;continue}s+=` ${d}="${bi(f)}"`}return r==="a"&&o!==null&&!o.startsWith("#")&&(s+=' target="_blank" rel="noopener noreferrer"'),(r==="img"||r==="source")&&!a?"":`${s}>`}function qf(e){return e.replace(/<!--[\s\S]*?-->/g,"").replace(Yy,"").replace(Qy,"").replace(/<[!?][^>]*>/g,"")}const rv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","circle","cite","code","col","colgroup","data","datalist","dd","defs","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","g","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","line","link","main","map","mark","marquee","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","path","picture","polygon","polyline","pre","progress","q","rect","rp","rt","ruby","s","samp","script","section","select","slot","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","text","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","use","var","video","wbr"]);function Hf(e,t,n,r){const i=n.toLowerCase();return Uf.has(i)||rv.has(i)||i.includes("-")?nv(t,n,r):nc(e)}function iv(e){const t=qf(e);let n="",r=0;for(const i of t.matchAll(Bf))n+=bi(t.slice(r,i.index)),n+=Hf(i[0],i[1]==="/",i[2],i[3]),r=i.index+i[0].length;return n+bi(t.slice(r))}const sv=/<\/?[a-z][a-z0-9]*(\s[^<>]*)?\/?>|&[a-z][a-z0-9]*;|&#\d+;|&#x[0-9a-f]+;/i;function Vf(e){return sv.test(e)}function ov(e){if(typeof document<"u"){const t=document.createElement("div");return t.innerHTML=e,t.textContent??""}return jf(e.replace(/<[^>]*>/g,""))}function av(e){return(Vf(e)?ov(e):e).replace(/\s+/g," ").trim()}const Qr="",lv=/\uE000(\d+)\uE000/g;function hd(e){return e.startsWith("#")?"":' target="_blank" rel="noopener noreferrer"'}const el=/^\s*(```+|~~~+)\s*([A-Za-z0-9_+-]*)\s*$/,tl=/^(#{1,6})\s+(.*)$/,rc=/^\s*([-*_])(\s*\1){2,}\s*$/,nl=/^\s*>/,Kf=/^\s*(?:[-*+]|\d+[.)])\s+/,Wf=/^\s*\|?[\s:|-]+\|[\s:|-]*$/,cv="address|article|aside|blockquote|caption|col|colgroup|dd|details|div|dl|dt|figcaption|figure|footer|form|h[1-6]|header|hr|iframe|legend|li|main|nav|ol|p|pre|script|section|style|summary|table|tbody|td|tfoot|th|thead|tr|ul",Gf=new RegExp(`^\\s*</?(?:${cv})(?:[\\s/>]|$)`,"i");function uv(e){return el.test(e)||tl.test(e)||rc.test(e)||nl.test(e)||Kf.test(e)||Gf.test(e)}function rr(e){const t=[];let n=e.replaceAll(Qr,"").replace(/(`+)([\s\S]*?)\1/g,(r,i,s)=>(t.push(`<code>${nc(s)}</code>`),`${Qr}${t.length-1}${Qr}`));return n=qf(n).replace(Bf,(r,i,s,o)=>{const a=Hf(r,i==="/",s,o);return a===""?"":(t.push(a),`${Qr}${t.length-1}${Qr}`)}),n=bi(n),n=n.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(r,i,s,o)=>{const a=Is(s);return a===null?r:`<img src="${a}" alt="${i}"${o?` title="${o}"`:""}>`}),n=n.replace(/\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(r,i,s,o)=>{const a=Is(s);return a===null?r:`<a href="${a}"${o?` title="${o}"`:""}${hd(a)}>${i}</a>`}),n=n.replace(/&lt;((?:https?|mailto):[^\s&]+)&gt;/g,(r,i)=>{const s=Is(i);return s===null?r:`<a href="${s}"${hd(s)}>${s}</a>`}),n=n.replace(/~~([\s\S]+?)~~/g,"<del>$1</del>"),n=n.replace(/\*\*([\s\S]+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__([\s\S]+?)__/g,"<strong>$1</strong>"),n=n.replace(/(^|[^*])\*(?!\s)([^*]+?)\*/g,"$1<em>$2</em>"),n=n.replace(/(^|[\s(])_(?!\s)([^_]+?)_(?=$|[\s).,;:!?])/g,"$1<em>$2</em>"),n=n.replace(/ {2,}\n/g,`<br>
`),n.replace(lv,(r,i)=>t[Number(i)]??"")}function Oa(e){return e.replace(/^\s*\|/,"").replace(/\|\s*$/,"").split(/(?<!\\)\|/).map(t=>t.trim().replace(/\\\|/g,"|"))}const dv=e=>{const t=e.startsWith(":"),n=e.endsWith(":");return t&&n?' style="text-align:center"':n?' style="text-align:right"':t?' style="text-align:left"':""},hv=[/^ {0,3}#{1,6}\s+\S/,/^ {0,3}>[ \t]+\S/,/^ {0,3}[-*+][ \t]+\S/,/^ {0,3}\d+[.)][ \t]+\S/,/^ {0,3}(?:```|~~~)/,rc],fv=[/\*\*(?!\s)[^*\n]+\*\*/,/~~(?!\s)[^~\n]+~~/,/`[^`\n]+`/,/!?\[[^\]\n]*\]\([^)\s]+\)/];function pv(e){return typeof e!="string"||e.trim()===""?null:!mv.test(e)&&fd(e)?"markdown":Vf(e)?"html":fd(e)?"markdown":null}const mv=/^\s*<\/?[a-z][a-z0-9]*(\s|\/?>)/i;function fd(e){if(typeof e!="string"||e.trim()==="")return!1;const t=e.replace(/\r\n?/g,`
`).split(`
`);return t.some(n=>hv.some(r=>r.test(n)))||fv.some(n=>n.test(e))?!0:t.some((n,r)=>r>0&&Wf.test(n)&&n.includes("-")&&(t[r-1]??"").includes("|"))}function po(e){if(e==null)return"";const t=typeof e=="string"?e:String(e);if(t.trim()==="")return"";const n=t.replace(/\r\n?/g,`
`).split(`
`),r=[];let i=0;const s=o=>{const a=[];for(;i<n.length&&o(n[i]);)a.push(n[i++]);return a};for(;i<n.length;){const o=n[i];if(o.trim()===""){i++;continue}const a=el.exec(o);if(a){const f=a[1].slice(0,3);i++;const p=s(y=>!y.trim().startsWith(f));i<n.length&&i++;const b=a[2]?` class="language-${a[2]}"`:"";r.push(`<pre><code${b}>${nc(p.join(`
`))}</code></pre>`);continue}if(Gf.test(o)){const f=s(b=>b.trim()!==""),p=iv(f.join(`
`));p.trim()!==""&&r.push(p);continue}const c=tl.exec(o);if(c){const f=c[1].length;r.push(`<h${f}>${rr(c[2].replace(/\s+#+\s*$/,""))}</h${f}>`),i++;continue}if(rc.test(o)){r.push("<hr>"),i++;continue}if(nl.test(o)){const f=s(p=>nl.test(p)||p.trim()!=="");r.push(`<blockquote>${po(f.map(p=>p.replace(/^\s*>\s?/,"")).join(`
`))}</blockquote>`);continue}if(o.includes("|")&&i+1<n.length&&Wf.test(n[i+1])&&n[i+1].includes("-")){const f=Oa(o),p=Oa(n[i+1]).map(dv);i+=2;const b=s($=>$.trim()!==""&&$.includes("|")),y=f.map(($,C)=>`<th${p[C]??""}>${rr($)}</th>`).join(""),k=b.map($=>`<tr>${Oa($).map((C,E)=>`<td${p[E]??""}>${rr(C)}</td>`).join("")}</tr>`);r.push(`<table><thead><tr>${y}</tr></thead><tbody>${k.join("")}</tbody></table>`);continue}if(Kf.test(o)){const f=s(p=>p.trim()!==""&&!el.test(p)&&!tl.test(p));r.push(Yf(f));continue}const d=s(f=>f.trim()!==""&&!uv(f));if(d.length===0){r.push(`<p>${rr(o)}</p>`),i++;continue}r.push(`<p>${rr(d.join(`
`))}</p>`)}return r.join(`
`)}function Yf(e){const t=[];let n=null,r=null;for(const o of e){const a=/^(\s*)(?:([-*+])|(\d+)[.)])\s+(.*)$/.exec(o);if(!a){t[t.length-1]?.text.push(o.trim());continue}const c=a[1].length;if(r??=c,c>r&&t.length>0){t[t.length-1].children.push(o.slice(Math.min(c,r+2)));continue}n??=a[3]!==void 0,t.push({text:[a[4]],children:[],indent:c})}const i=n?"ol":"ul",s=t.map(o=>`<li>${rr(o.text.join(`
`))}${o.children.length>0?Yf(o.children):""}</li>`).join("");return`<${i}>${s}</${i}>`}const Qf={goto:"goto",table:"goto",search:"search",preview:"preview",view:"view",cmd:"cmd",ui:"ui"},gv={goto:{min:1,rest:!1},search:{min:1,rest:!0},preview:{min:2,rest:!1},view:{min:0,rest:!0},cmd:{min:1,rest:!0},ui:{min:1,rest:!1}};class dt extends Error{}function ic(e){return(e.trim().replace(/^\/+/,"").split(/[/?;]/,1)[0]??"").toLowerCase()in Qf}function Jf(e){const t=e.split(";").map(n=>n.trim()).filter(Boolean);if(t.length===0)throw new dt("Empty commandlet.");return t.map(bv)}function bv(e){const t=e.indexOf("?"),n=t<0?e:e.slice(0,t),r=t<0?"":e.slice(t+1),i=n.split("/").filter(y=>y!=="").map(y=>wv(y,e));if(i.length===0)throw new dt(`No action in "${e}".`);const s=(i[0]??"").toLowerCase(),o=Qf[s],a=o??"goto";let c=o?i.slice(1):i;const d=gv[a];if(c.length<d.min)throw new dt(`"${a}" needs ${d.min} target${d.min===1?"":"s"} — got "${e}".`);const f=Math.max(0,d.min-1);d.rest&&c.length>f&&(c=[...c.slice(0,f),c.slice(f).join("/")]);const p={},b={};for(const[y,k]of new URLSearchParams(r))y.startsWith("@")?b[y.slice(1).toLowerCase()]=k:y!==""&&(p[y]=k);return{verb:a,targets:c,filters:p,options:b,raw:e}}function wv(e,t){try{return decodeURIComponent(e)}catch{throw new dt(`Bad percent-encoding in "${t}".`)}}function Xf(e,t){const n=i=>i.replace(/\$([A-Za-z_][A-Za-z0-9_]*|\d+)/g,(s,o)=>t[o]??s),r=i=>Object.fromEntries(Object.entries(i).map(([s,o])=>[n(s),n(o)]));return{verb:e.verb,targets:e.targets.map(n),filters:r(e.filters),options:r(e.options),raw:e.raw}}function yv(e,t){const r=(Array.isArray(e)?e:e.split("/").filter(Boolean)).map(o=>encodeURIComponent(o)).join("/"),i=new URLSearchParams;for(const[o,a]of Object.entries(t??{}))i.append(o,String(a));const s=i.toString();return`#${r}${s?`?${s}`:""}`}function vv(e,t){return yv(e,t)}const rl={markdownToHtml:po,cmdlet:vv},sc=Object.keys(rl),pd=new Map;function kv(e){const t=pd.get(e);if(t)return t;const n=new Function("row",...sc,"easydb",`${e}
return render(row);`);return pd.set(e,n),n}function Zf(){return[...sc.map(e=>rl[e]),rl]}function Er(e,t){if(!e||!e.trim())return{ok:!1,label:"no script",message:""};let n;try{n=kv(e)}catch(r){return{ok:!1,label:"compile error",message:Vs(r)}}try{return{ok:!0,value:n(t,...Zf())}}catch(r){return{ok:!1,label:"runtime error",message:Vs(r)}}}function Vs(e){return e instanceof Error?e.message:String(e)}const md=new Map;function $v(e){const t=md.get(e);if(t)return t;const n=new Function("value","row",...sc,"easydb",`${e}
return validate(value, row);`);return md.set(e,n),n}function xv(e,t,n){if(!e||!e.trim())return{ok:!0};let r;try{r=$v(e)}catch(i){return{ok:!1,message:`Validation script has a compile error: ${Vs(i)}`}}try{return r(t,n,...Zf()),{ok:!0}}catch(i){return{ok:!1,message:Vs(i)||"Rejected by this column’s validation script."}}}const Sv=new Set(["rowid"]);function oc(e){return Sv.has(e.trim().toLowerCase())}function Cv(e){const t=new Map,n=(i,s)=>{if(!i||!s)return;let o=t.get(i);o||t.set(i,o=new Set),o.add(s)};for(const i of e.columns)i.from.kind==="source"&&n(i.from.alias,i.from.field);for(const i of e.sources)for(const s of i.join?.on??[])n(i.alias,s.field),n(s.eqAlias,s.eqField);const r={};for(const i of e.sources)r[i.alias]=[...t.get(i.alias)??[]];return r}function _v(e,t){const n=e.sources[0];if(!n)return{rows:[],provenance:new Map};let i=(t[n.alias]??[]).map(d=>({[n.alias]:d}));for(let d=1;d<e.sources.length;d++){const f=e.sources[d];if(!f)continue;const p=t[f.alias]??[],b=f.join,y=[];for(const k of i){const $=b?p.filter(C=>b.on.every(E=>Tv(C.data[E.field],k[E.eqAlias]?.data[E.eqField]))):[];if($.length>0)for(const C of $)y.push({...k,[f.alias]:C});else b?.type==="left"&&y.push({...k,[f.alias]:void 0})}i=y}const s=[],o=new Map,a=new Map,c=e.limit!=null&&e.limit>0?e.limit:1/0;for(const d of i){if(s.length>=c)break;const f=d[n.alias];if(!f)continue;const p=Ev(e.columns,d);if(!Iv(p,e.filters))continue;const b=a.get(f.id)??0;a.set(f.id,b+1);const y=`${f.id}#${b}`,k={};for(const[$,C]of Object.entries(d))C&&(k[$]=C.id);o.set(y,k),s.push({id:y,tableId:"",data:p,updatedAt:Av(d)})}return{rows:s,provenance:o}}function Ev(e,t){const n={};for(const r of e){if(r.from.kind!=="source")continue;const i=t[r.from.alias]?.data[r.from.field];n[r.field]=i===void 0?null:i}for(const r of e)if(r.from.kind==="script"){const i=Er(r.from.script,n);n[r.field]=i.ok?i.value:void 0}return n}function Tv(e,t){return e==null||t==null?!1:e===t?!0:typeof e!="object"&&typeof t!="object"?String(e)===String(t):!1}function Iv(e,t){if(!t)return!0;for(const[n,r]of Object.entries(t)){if(!r)continue;const i=e[n];if(!(i==null?"":String(i)).toLowerCase().includes(r.toLowerCase()))return!1}return!0}function Av(e){let t=0;for(const n of Object.values(e))n&&n.updatedAt>t&&(t=n.updatedAt);return t}function mo(e){const t=new Set(e.sources.map(r=>r.alias)),n=new Set;for(const r of e.columns)r.from.kind==="source"&&t.has(r.from.alias)&&n.add(r.field);return n}function ep(e,t,n=[],r=[]){const i=mo(e),s=new Map(n.map(f=>[f.field,f])),o=new Set(r),a=new Map;for(const f of e.columns)!o.has(f.field)&&!a.has(f.field)&&a.set(f.field,f);const c=[];for(const f of n)a.has(f.field)&&!c.includes(f.field)&&c.push(f.field);for(const f of a.keys())c.includes(f)||c.push(f);const d=[];for(const f of c){const p=a.get(f);if(!p)continue;const b=s.get(p.field);let y;if(b)y={...b};else if(p.from.kind==="source"){const k=p.from,$=(t[k.alias]??[]).find(C=>C.field===k.field);y=$?{...$,field:p.field}:{field:p.field,label:p.label??p.field,type:p.type??"string"},oc(k.field)&&(y.hidden=!0)}else y={field:p.field,label:p.label??p.field,type:p.type??"string"},y.script=p.from.script;i.has(p.field)?delete y.readonly:y.readonly=!0,d.push(y)}return d}function Rv(e){const t=e.sources[0]?.alias,n=new Map;if(!t)return n;for(const r of e.columns)r.from.kind==="source"&&r.from.alias===t&&!n.has(r.from.field)&&n.set(r.from.field,r.field);return n}function Ov(e,t){const n=Rv(e),r={},i=t.sortBy&&t.sortBy.length>0?t.sortBy:t.sortColumn?[{field:t.sortColumn,asc:t.sortAsc??!0}]:[],s=[];for(const o of i){const a=n.get(o.field);a&&s.push({field:a,asc:o.asc})}if(s.length>0){r.sortBy=s;const o=s[0];o&&(r.sortColumn=o.field,r.sortAsc=o.asc)}if(t.filters){const o={};for(const[a,c]of Object.entries(t.filters)){const d=n.get(a);d&&c&&(o[d]=c)}Object.keys(o).length>0&&(r.filters=o)}return r}function Dv(e,t){return t.get(e.tableName)}function Lv(e,t){const n=new Map(t.map(s=>[s.id,s])),r=new Map;for(const s of t)r.has(s.name)||r.set(s.name,s);const i=(s,o)=>{if(o.has(s))return!0;const a=n.get(s);if(a?.source?.type!=="projection")return!1;const c=a.source.config;if(!c||!Array.isArray(c.sources))return!1;const d=new Set(o).add(s);for(const f of c.sources){const p=Dv(f,r);if(p&&i(p.id,d))return!0}return!1};return i(e,new Set)}const Jr=e=>e.toLowerCase().replace(/[^a-z0-9]/g,""),Da=e=>e.endsWith("s")&&e.length>1?e.slice(0,-1):e,gd=e=>e==="id"||e.endsWith("id");function Mv(e,t){const n=Jr(e.field),r=Jr(t.field);if(!n||!r)return 0;const i=Jr(e.table)===Jr(t.table);if(n===r)return i||n==="id"?0:n.endsWith("id")?9:7;const s=(a,c,d)=>{if(a!=="id"||!d.endsWith("id")||d.length<=2)return 0;const f=d.slice(0,-2),p=Jr(c);return f===p||f===Da(p)||Da(f)===Da(p)?9:5},o=Math.max(s(n,e.table,r),s(r,t.table,n));return o>0?o:e.isPk&&gd(r)||t.isPk&&gd(n)?6:0}function Pv(e,t,n=[]){const r=new Set(n.map(o=>`${o.alias}\0${o.field}`)),i=new Set(e.pks??[]),s=o=>{let a=null,c=0;for(const d of t){const f=new Set(d.pks??[]);for(const p of e.fields)for(const b of d.fields){if(o&&r.has(`${d.alias}\0${b}`))continue;const y=Mv({table:e.tableName,field:p,isPk:i.has(p)},{table:d.tableName,field:b,isPk:f.has(b)});y>c&&(c=y,a={thisField:p,otherAlias:d.alias,otherField:b})}}return a};return s(!0)??s(!1)}function zv(e){const t=e.lastIndexOf("#");return t>=0?e.slice(0,t):e}function Nv(e,t,n,r){const i=e.columns.find(c=>c.field===n);if(!i||i.from.kind!=="source")return null;const s=i.from.alias;if(!e.sources.some(c=>c.alias===s))return null;const o=e.sources[0]?.alias===s,a=r?.[s]??(o?zv(t):void 0);return a?{alias:s,rowId:a,field:i.from.field}:null}async function ac(e,t,n,r){const i=n.spec.sources.map(f=>({source:f,table:r.resolve(f.tableName)}));if(i.some(f=>!f.table))return null;const s={...n.spec,sources:i.map(({source:f,table:p})=>({...f,tableName:p.name}))},o={};for(const{source:f,table:p}of i)o[f.alias]=p?.columns??[];const a=ep(s,o,[],[]),c=pn(r.taken,n.name),d={id:Ee(),workspaceId:t,name:c,code:Ne(c),columns:a,view:"table",source:{type:"projection",config:s},readonly:mo(s).size===0,...n.sortBy&&n.sortBy.length>0?{sortBy:n.sortBy}:{},...s.filters?{filters:s.filters}:{},updatedAt:Date.now()};return await e.store.tables.insert(d),d}const jv=Object.freeze(Object.defineProperty({__proto__:null,createProjectionTable:ac},Symbol.toStringTag,{value:"Module"})),tp="__id";function np(e){const t=[];let n="",r,i=0;for(;i<e.length;){const s=e[i],o=e[i+1];if(s==="'"||s==='"'){const a=lc(e,i,s);n+=e.slice(i,a),i=a;continue}if(s==="-"&&o==="-"){let a="";for(i+=2;i<e.length&&e[i]!==`
`;)a+=e[i++];const c=/^\s*projection:\s*(.+?)\s*$/i.exec(a);c?.[1]&&n.trim()===""&&(r=c[1]);continue}if(s==="/"&&o==="*"){for(i+=2;i<e.length&&!(e[i]==="*"&&e[i+1]==="/");)i++;i+=2;continue}if(s===";"){n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),n="",r=void 0,i++;continue}n+=s,i++}return n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),t}function lc(e,t,n){let r=t+1;for(;r<e.length;){if(e[r]===n){if(e[r+1]===n){r+=2;continue}return r+1}r++}return e.length}function Jt(e){const t=e.trim();return/^".*"$/s.test(t)?t.slice(1,-1).replace(/""/g,'"'):/^\[.*\]$/s.test(t)||/^`.*`$/s.test(t)?t.slice(1,-1):t}function rp(e,t){const n=[];let r=0,i="",s=0;for(;s<e.length;){const o=e[s];if(o==="'"||o==='"'){const a=lc(e,s,o);i+=e.slice(s,a),s=a;continue}if(o==="("?r++:o===")"&&r--,r===0){const a=t(e,s);if(a>0){n.push(i),i="",s+=a;continue}}i+=o,s++}return n.push(i),n}function fr(e,t){return rp(e,(n,r)=>n.startsWith(t,r)?t.length:0)}function ip(e,t){const n=new RegExp(`^\\s+${t}\\s+`,"i");return rp(e,(r,i)=>/\s/.test(r[i]??"")?n.exec(r.slice(i,i+t.length+32))?.[0].length??0:0)}function sp(e){const t=e.indexOf("(");if(t<0)return null;let n=0;for(let r=t;r<e.length;r++){const i=e[r];if(i==="'"||i==='"'){r=lc(e,r,i)-1;continue}if(i==="(")n++;else if(i===")"&&(n--,n===0))return e.slice(t+1,r)}return null}function op(e){const t=e.trim();return/^null$/i.test(t)?null:/^true$/i.test(t)?!0:/^false$/i.test(t)?!1:/^'[\s\S]*'$/.test(t)?t.slice(1,-1).replace(/''/g,"'"):co(t)?t:/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(t)?Number(t):t}function ap(e){const t=e.toUpperCase();return/BOOL/.test(t)?"boolean":/TIMESTAMP|DATETIME/.test(t)?"datetime":/^DATE\b/.test(t)?"date":/INT|NUMERIC|DECIMAL|REAL|DOUBLE|FLOAT|MONEY/.test(t)?"number":"string"}function Fv(e){const t=/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)/i.exec(e);if(!t?.[1])return null;const n=sp(e);if(n==null)return null;const r=[];for(const i of fr(n,",")){const s=i.trim();if(!s||/^(PRIMARY|FOREIGN|UNIQUE|CHECK|CONSTRAINT)\b/i.test(s))continue;const o=/^("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[A-Za-z_][\w$]*)\s*([\s\S]*)$/.exec(s);if(!o?.[1])continue;const a=Jt(o[1]);if(a===tp)continue;const c=o[2]??"",d=/^([A-Za-z]+(?:\s*\([^)]*\))?)/.exec(c.trim())?.[1]??"TEXT",f={field:a,label:a,type:ap(d)};/\bNOT\s+NULL\b/i.test(c)&&(f.notnull=!0),(/\bUNIQUE\b/i.test(c)||/\bPRIMARY\s+KEY\b/i.test(c))&&(f.unique=!0),r.push(f)}return{name:Jt(t[1]),columns:r,rows:[]}}function Uv(e){const t=/^INSERT\s+(?:OR\s+\w+\s+)?INTO\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s*(\([\s\S]*?\))?\s*VALUES\s*([\s\S]+)$/i.exec(e);if(!t?.[1])return null;const n=Jt(t[1]),r=t[2]?fr(t[2].slice(1,-1),",").map(o=>Jt(o)):[],i=[];let s=(t[3]??"").trim();for(;s.startsWith("(");){const o=sp(s);if(o==null)break;const a=fr(o,",").map(d=>op(d)),c={};a.forEach((d,f)=>{const p=r[f]??`col${f+1}`;p!==tp&&(c[p]=d)}),i.push(c),s=s.slice(o.length+2).trim(),s.startsWith(",")&&(s=s.slice(1).trim())}return{table:n,rows:i}}function bd(e){const t=/^\s*("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+)(?:\s+(?:AS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+))?\s*$/i.exec(e);if(!t?.[1])return{table:"",alias:""};const n=Jt(t[1]);return{table:n,alias:t[2]?Jt(t[2]):n}}function wi(e){return fr(e,".").map(Jt)}function cc(e,t,n){const r=t.filter(i=>(n.get(i.tableName.toLowerCase())??[]).includes(e));return r.some(i=>i.alias===t[0]?.alias)?t[0].alias:(r.length===1?r[0]?.alias:void 0)??t[0]?.alias??""}function Bv(e){let t=e,n;const r=/\s+FETCH\s+FIRST\s+(\d+)\s+ROWS?\s+ONLY\s*$/i.exec(t);r&&(n=Number(r[1]),t=t.slice(0,r.index));const i=/\s+LIMIT\s+(\d+)\s*$/i.exec(t);i&&(n=Number(i[1]),t=t.slice(0,i.index));let s;const o=/\s+ORDER\s+BY\s+([\s\S]+)$/i.exec(t);o?.[1]&&(s=o[1],t=t.slice(0,o.index));let a;const c=/\s+WHERE\s+([\s\S]+)$/i.exec(t);return c?.[1]&&(a=c[1],t=t.slice(0,c.index)),{from:t,limit:n,orderBy:s,where:a}}function qv(e,t,n,r,i){const s=[],o=a=>a.length===2?a[0]??"":cc(a[0]??"",n,r);for(const a of ip(e,"AND")){const c=/^\s*([\w".$[\]`]+)\s*=\s*([\w".$[\]`]+)\s*$/.exec(a);if(!c?.[1]||!c[2]){i.push(`ON ${a.trim()}`);continue}const d=wi(c[1]),f=wi(c[2]),p=o(d)===t.alias,b=p?d:f,y=p?f:d;if(o(b)!==t.alias){i.push(`ON ${a.trim()} — neither side names ${t.alias}`);continue}s.push({field:b.length===2?b[1]??"":b[0]??"",eqAlias:y.length===2?y[0]??"":o(y),eqField:y.length===2?y[1]??"":y[0]??""})}return s}function Hv(e,t,n){const r=/\s+(LEFT|RIGHT|FULL|INNER|CROSS)(?:\s+OUTER)?\s+JOIN\s+|\s+JOIN\s+/gi,i=[],s=[];let o=0;for(let d=r.exec(e);d;d=r.exec(e))i.push(e.slice(o,d.index)),s.push((d[1]??"INNER").toUpperCase()),o=d.index+d[0].length;i.push(e.slice(o));const a=bd(i[0]??"");if(!a.table)return null;const c=[{alias:a.alias,tableName:a.table}];for(let d=1;d<i.length;d++){const f=i[d]??"",p=/\s+ON\s+([\s\S]+)$/i.exec(f),b=bd(p?f.slice(0,p.index):f);if(!b.table)continue;const y=s[d-1]??"INNER";if(y==="CROSS"||!p?.[1]){n.push(`${y} JOIN ${b.table} — no ON predicate to model`),c.push({alias:b.alias,tableName:b.table});continue}(y==="RIGHT"||y==="FULL")&&n.push(`${y} JOIN ${b.table} — imported as LEFT JOIN (the closest a projection can express)`);const k=[...c,{alias:b.alias,tableName:b.table}];c.push({alias:b.alias,tableName:b.table,join:{type:y==="INNER"?"inner":"left",on:qv(p[1],b,k,t,n)}})}return c}function Vv(e,t,n,r){const i=[];for(const s of fr(e,",")){const o=s.trim();if(!o)continue;if(o==="*"){r.push("SELECT * — a projection needs its columns listed");continue}const a=/^([\s\S]*?)\s+AS\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[\w$]+)$/i.exec(o),c=(a?.[1]??o).trim(),d=wi(c),f=Jt(a?.[2]??d[d.length-1]??c);if(/^NULL$/i.test(c)){i.push({field:f,from:{kind:"script",script:Gv}});continue}d.length===2&&d[0]&&d[1]?i.push({field:f,from:{kind:"source",alias:d[0],field:d[1]}}):d.length===1&&d[0]&&/^[\w$]+$/.test(d[0])?i.push({field:f,from:{kind:"source",alias:cc(d[0],t,n),field:d[0]}}):r.push(`SELECT ${o} — expression not modelled`)}return i}function Kv(e,t){const n={};if(!e)return n;for(const r of ip(e,"AND")){const i=/^\s*LOWER\(\s*([\w".$[\]`]+)\s*\)\s+LIKE\s+'%([\s\S]*)%'\s*$/i.exec(r.trim()),s=i?.[1]?lp(t.columns,wi(i[1]),t.sources,t.schema):void 0;if(!i||!s){t.unsupported.push(`WHERE ${r.trim()}`);continue}n[s.field]=(i[2]??"").replace(/''/g,"'")}return n}function Wv(e,t){const n=[];for(const r of fr(e??"",",")){const i=r.trim();if(!i)continue;const[s,o]=i.split(/\s+/),a=lp(t.columns,wi(s??""),t.sources,t.schema);if(!a){t.unsupported.push(`ORDER BY ${i}`);continue}n.push({field:a.field,asc:!/^DESC$/i.test(o??"")})}return n}function wd(e,t,n,r){const i=[],s=e.replace(/\s+/g," ").trim(),o=/^SELECT\s+(?:TOP\s+(\d+)\s+)?([\s\S]+?)\s+FROM\s+([\s\S]+)$/i.exec(s);if(!o)return null;const{from:a,limit:c,orderBy:d,where:f}=Bv(o[3]??""),p=c??(o[1]?Number(o[1]):void 0),b=Hv(a,n,i);if(!b)return null;const y=Vv(o[2]??"",b,n,i),k={columns:y,sources:b,schema:n,unsupported:i},$=Kv(f,k),C=Wv(d,k),E={version:1,sources:b,columns:y};return Object.keys($).length>0&&(E.filters=$),p!=null&&p>0&&(E.limit=p),{projection:{name:r||t,spec:E,...C.length>0?{sortBy:C}:{}},unsupported:i}}const Gv=["// This column was computed in-app; SQL carried only its NAME,","// not its script. Re-enter the expression here.","function render(row) {","  return null;","}"].join(`
`);function lp(e,t,n,r){const i=t.length===2?t[0]:cc(t[0]??"",n,r),s=t.length===2?t[1]:t[0];return e.find(o=>o.from.kind==="source"&&o.from.alias===i&&o.from.field===s)??e.find(o=>o.field===s)}function Ei(e){const t=new Map,n=[],r=[],i=new Map,s=o=>{i.set(o.name.toLowerCase(),o.columns.map(a=>a.field))};for(const o of np(e)){const a=o.sql;if(/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\b/i.test(a)){const c=Fv(a);if(!c){r.push(Xr(a));continue}const d=t.get(c.name);t.set(c.name,{...c,rows:d?.rows??[]}),s(c);continue}if(/^INSERT\s+/i.test(a)){const c=Uv(a);if(!c){r.push(Xr(a));continue}const d=t.get(c.table);if(d)d.rows.push(...c.rows);else{const f={name:c.table,columns:Yv(c.rows),rows:c.rows};t.set(c.table,f),s(f)}continue}if(/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\b/i.test(a)){const c=/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s+AS\s+(SELECT[\s\S]+)$/i.exec(a),d=c?.[1]?Jt(c[1]):"",f=c?.[2]?wd(c[2],d||"view",i,d):null;f?(n.push(f.projection),r.push(...f.unsupported)):r.push(Xr(a));continue}if(/^SELECT\b/i.test(a)){const c=wd(a,"",i,o.name);c?(n.push(c.projection),r.push(...c.unsupported)):r.push(Xr(a));continue}/^(BEGIN|START\s+TRANSACTION|COMMIT|END|DROP|PRAGMA|SET|USE|ANALYZE|VACUUM)\b/i.test(a)||r.push(Xr(a))}for(const o of n)o.name||(o.name=`${o.spec.sources[0]?.tableName??"query"} view`);return{tables:[...t.values()],projections:n,unsupported:r}}function Xr(e){const t=e.split(`
`)[0]?.trim()??e;return t.length>120?`${t.slice(0,117)}…`:t}function Yv(e){const t=[];for(const n of e)for(const r of Object.keys(n))t.includes(r)||t.push(r);return t.map(n=>{const r=e.map(s=>s[n]).filter(s=>s!=null),i=r.length===0?"string":r.every(s=>typeof s=="number")?"number":r.every(s=>typeof s=="boolean")?"boolean":"string";return{field:n,label:n,type:i}})}const Qv=Object.freeze(Object.defineProperty({__proto__:null,parseLiteral:op,parseSqlScript:Ei,splitStatements:np,sqlTypeToColumnType:ap},Symbol.toStringTag,{value:"Module"})),Jv={id:"sql-import",name:"SQL Import",type:"importer",version:"0.1.0",description:"Import a .sql script: CREATE TABLE + INSERT become tables, and each SELECT (or CREATE VIEW) becomes a projection.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-import.ts"};function Xv(e){e.ui.registerImporter(uc),e.ui.registerDropHandler(async t=>{const n=t0(t).filter(n0);if(n.length===0)return!1;t.preventDefault();for(const r of n)await e0(e,r);return!0})}const uc={id:"sql",label:"SQL script (CREATE TABLE / INSERT / SELECT)",icon:"database",order:30,accept:[".sql","application/sql","text/sql","application/x-sql"],supports:{url:!0,file:!0,text:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";return/\.sql$/i.test(t)?1:(e.file?.type??"").includes("sql")?.9:/^\s*(--|\/\*|BEGIN\b|CREATE\s+TABLE\b|INSERT\s+INTO\b|DROP\s+TABLE\b)/i.test(e.text??"")?.6:0},async list(e,t){return Ei(await Zv(e,t)).tables.map(r=>({name:r.name,rowCount:r.rows.length,handle:{columns:r.columns,rows:r.rows}}))},async*read(e,t){const{columns:n,rows:r}=t.handle;yield{columns:n,rows:r}}};function Zv(e,t){return t.kind==="file"&&t.file?t.file.text():t.kind==="url"&&t.url?e.fetchText(t.url,`Reading ${Vt(t.url)}…`):Promise.resolve(t.text??"")}function dc(e){return Ei(e).projections.length>0}async function hc(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("sql-import: no active workspace");const i=Ei(t),s={tables:[],projections:[],rowCount:0,unsupported:i.unsupported},o=n.target??{kind:"new"},a=o.kind==="new"||i.tables.length===1;a||s.unsupported.push(`"Import into" was not applied — this script defines ${i.tables.length} tables, and an append/replace names only one destination`);const c=new Map;for(const y of i.tables){const k=await Df(e,y.name,(async function*(){yield{columns:y.columns,rows:y.rows}})(),{workspaceId:r,importerId:"sql",target:a?o:{kind:"new"},...n.maxRows!==void 0?{maxRows:n.maxRows}:{},...n.editColumns?{editColumns:$=>n.editColumns($,y.name)}:{}});k&&(c.set(y.name,k.tableName),s.tables.push(k.tableName),s.rowCount+=k.rowCount)}const d=await e.store.tables.find({workspaceId:r}),f=new Map;for(const y of d)f.has(y.name)||f.set(y.name,y);const p=new Map;for(const y of d)p.has(y.name.toLowerCase())||p.set(y.name.toLowerCase(),y);const b=new Set([...d.map(y=>y.name),...s.tables]);for(const y of i.projections){const k=await ac(e,r,y,{resolve:$=>{const C=c.get($);return(C?f.get(C):void 0)??f.get($)??p.get($.toLowerCase())},taken:b});if(!k){s.unsupported.push(`projection "${y.name}" — its source tables are not in this workspace`);continue}f.set(k.name,k),p.set(k.name.toLowerCase(),k),b.add(k.name),s.projections.push(k.name)}return s}function fc(e,t,n){const r=[];if(t.tables.length>0&&r.push(`${t.tables.length} table${t.tables.length===1?"":"s"} (${t.rowCount.toLocaleString()} rows)`),t.projections.length>0&&r.push(`${t.projections.length} projection${t.projections.length===1?"":"s"}`),r.length===0){e.ui.dialogs.toast(`Nothing importable found in ${n}.`,{kind:"warning",title:"SQL import"});return}const i=t.unsupported.length>0?` — ${t.unsupported.length} statement${t.unsupported.length===1?"":"s"} could not be imported: ${t.unsupported.slice(0,3).join("; ")}${t.unsupported.length>3?"…":""}`:"";e.ui.dialogs.toast(`Imported ${r.join(" and ")} from ${n}${i}.`,{kind:t.unsupported.length>0?"warning":"success",title:"SQL import"})}async function e0(e,t){const n=await t.text();try{if(dc(n)){fc(e,await hc(e,n),t.name);return}const r=await fo(e,uc,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),i=r.landed.reduce((s,o)=>s+o.rowCount,0);r.landed.length>0?e.ui.dialogs.toast(`Imported ${r.landed.length} table${r.landed.length===1?"":"s"} (${i.toLocaleString()} rows) from ${t.name}.`,{kind:"success",title:"SQL import"}):e.ui.dialogs.toast(`Nothing importable found in ${t.name}.`,{kind:"warning",title:"SQL import"})}catch(r){e.ui.dialogs.toast(`Could not import ${t.name}: ${r.message}`,{kind:"error",title:"SQL import"})}}function t0(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);const n=[];for(const r of Array.from(t.items??[]))if(r.kind==="file"){const i=r.getAsFile();i&&n.push(i)}return n}function n0(e){return/\.sql$/i.test(e.name)||(e.type??"").includes("sql")}const r0=Object.freeze(Object.defineProperty({__proto__:null,hasSqlProjections:dc,init:Xv,meta:Jv,reportSqlRestore:fc,restoreSqlScript:hc,sqlImporterSpec:uc},Symbol.toStringTag,{value:"Module"})),cp=Se`
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
`;function up(e,t,n){return t.bottom<=n?null:Math.round(e.top-t.height-i0)}const i0=4;var dp=function(e,t,n,r){var i=arguments.length,s=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let ds=null,il="anchored-menu";function s0(){return ds||(hp(il),ds=document.createElement(il),document.body.appendChild(ds)),ds}class Ti extends $e{constructor(){super(...arguments),this.items=[],this.shown=!1,this.resolveFn=null,this.onOutside=t=>{t.composedPath().includes(this)||this.finish(null)},this.onKey=t=>{t.key==="Escape"&&(t.preventDefault(),this.finish(null))}}static open(t,n){return s0().openMenu(t,n)}static{this.styles=[cp,Se`
      :host {
        position: fixed;
        z-index: var(--menu-z, 150000);
      }
      :host([hidden]) {
        display: none;
      }
      .menu {
        background: var(--menu-surface, #fff);
        border: 1px solid var(--menu-border, #e5e7eb);
        border-radius: var(--menu-radius, 0.4rem);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
        padding: 0.25rem;
        min-width: var(--menu-min-width, 190px);
        /* Shadow DOM does not inherit the page font, so the buttons' inherited
           font would fall back to the browser default serif. Name the font
           explicitly; the buttons inherit it. */
        font-family: var(--menu-font, system-ui, sans-serif);
        font-size: 0.875rem;
        color: var(--menu-text, #111);
        /* A long value list (every distinct value of a field, say) can run to
           hundreds of entries, so the menu scrolls rather than growing past the
           viewport. Short menus are unaffected. */
        max-height: var(--menu-max-height, min(60vh, 420px));
        overflow-y: auto;
      }
      button {
        display: flex;
        align-items: center;
        gap: 0.55rem;
        width: 100%;
        border: 0;
        background: transparent;
        font: inherit;
        text-align: left;
        padding: 0.45rem 0.6rem;
        border-radius: 0.3rem;
        cursor: pointer;
        color: var(--menu-text, #111);
      }
      button:hover {
        background: var(--menu-hover, #f3f4f6);
      }
      button.danger {
        color: var(--menu-danger, #b91c1c);
      }
      .mi {
        font-size: 1.15rem;
        color: var(--menu-icon, #6b7280);
      }
    `]}connectedCallback(){super.connectedCallback(),this.setAttribute("hidden","")}openMenu(t,n){return this.items=n,this.style.left=`${Math.round(t.left)}px`,this.style.top=`${Math.round(t.bottom+4)}px`,this.removeAttribute("hidden"),this.shown=!0,this.updateComplete.then(()=>{const r=this.shadowRoot?.querySelector(".menu");if(!r)return;const i=up(t,r.getBoundingClientRect(),window.innerHeight);i!==null&&(this.style.top=`${i}px`)}),new Promise(r=>{this.resolveFn=r,setTimeout(()=>{document.addEventListener("mousedown",this.onOutside,!0),document.addEventListener("keydown",this.onKey,!0)},0)})}finish(t){this.setAttribute("hidden",""),this.shown=!1,document.removeEventListener("mousedown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey,!0);const n=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>n?.(t))}render(){return this.shown?v`
      <div class="menu" role="menu">
        ${this.items.map(t=>v`
            <button role="menuitem" class=${t.danger?"danger":""} @click=${()=>this.finish(t.id)}>
              ${t.icon?v`<span class="mi">${t.icon}</span>`:""}
              <span>${t.label}</span>
            </button>
          `)}
      </div>
    `:v``}}dp([z()],Ti.prototype,"items",void 0);dp([z()],Ti.prototype,"shown",void 0);function hp(e="anchored-menu"){il=e,customElements.get(e)||customElements.define(e,Ti)}const pr=Object.freeze(Object.defineProperty({__proto__:null,AnchoredMenu:Ti,defineAnchoredMenu:hp,flipIfBelowViewport:up,materialIconStyles:cp},Symbol.toStringTag,{value:"Module"})),sl='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',o0={id:"connect-menu",name:"Connect",type:"ui",version:"0.1.0",description:"Header Connect button listing every registered live-backend connector. Chrome only — it knows no backend.",author:"Marc Cawood",icon:sl,repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/connect-menu.ts"};function a0(e){e.ui.registerHeaderButton({id:"connect-menu:open",label:"Connect",icon:sl,tooltip:"Connect a live table on a remote backend (rows are never stored locally)",onClick:(t,n)=>yd(t,n?.anchor)}),e.ui.registerCommand({id:"connect-menu:open",title:"Connect a live table…",group:"Data",icon:sl,keywords:["datasette","live","remote","backend"],run:t=>yd(t)})}async function l0(){const{registries:e}=await J();return[...e.connectors].sort((t,n)=>(t.order??Number.MAX_SAFE_INTEGER)-(n.order??Number.MAX_SAFE_INTEGER))}async function yd(e,t){const n=await l0();if(n.length===0){await e.ui.dialogs.alert("No backends are installed to connect to. Install a connector plugin from the Plugin Manager first.","Connect");return}let r=n[0];if(n.length>1){const i=t?.getBoundingClientRect(),s=i?await Ti.open(i,n.map(o=>({id:o.id,label:o.label,icon:o.icon}))):await e.ui.dialogs.choice("Which backend do you want to connect to?",n.map(o=>o.label),"Connect");if(!s)return;r=i?n.find(o=>o.id===s):n.find(o=>o.label===s)}if(r)try{await r.connect(e)}catch(i){await e.ui.dialogs.alert(i?.message??String(i),`Connect ${r.label} failed`)}}const c0=Object.freeze(Object.defineProperty({__proto__:null,init:a0,meta:o0},Symbol.toStringTag,{value:"Module"}));function vd(e,t){return JSON.stringify(t.map(n=>e[n]??null))}function u0(e,t){return t.every(n=>e[n]!==null&&e[n]!==void 0)}function fp(e){const{oldRows:t,freshRows:n,pks:r,userAddedFields:i,deletedRemoteFields:s=[]}=e,o=new Set(s),a=new Set(i),c=T=>{const Y={...T};for(const L of o)delete Y[L];return Y},d=new Set(t.flatMap(T=>Object.keys(T.data))),f=[...new Set(n.flatMap(T=>Object.keys(T)))].filter(T=>d.has(T)&&!o.has(T)&&!a.has(T)).sort(),b=r.length>0&&n.every(T=>u0(T,r))?"pk":f.length>0?"content":"none";if(b==="none")return{data:n.map(c),merged:!1,strategy:b,droppedUserRows:t.filter(T=>kd(T.data,i)).length};const y=b==="pk"?r:f,k=new Map;for(const T of t){const Y=vd(T.data,y);k.has(Y)||k.set(Y,T)}const $=new Set,C=n.map(T=>{const Y=c(T),L=vd(T,y),ne=k.get(L);if(ne){$.add(L);for(const W of i)Object.prototype.hasOwnProperty.call(ne.data,W)&&(Y[W]=ne.data[W])}return Y});let E=0;for(const[T,Y]of k)!$.has(T)&&kd(Y.data,i)&&(E+=1);return{data:C,merged:!0,strategy:b,droppedUserRows:E}}function kd(e,t){return t.some(n=>{const r=e[n];return r!=null&&r!==""})}const ol="easydb:table-loading",Ks=new Map;function At(e,t,n){e&&(t?Ks.set(e,typeof n=="number"?n:null):Ks.delete(e),!(typeof document>"u")&&document.dispatchEvent(new CustomEvent(ol,{detail:{tableId:e,loading:t,progress:n}})))}function d0(e){if(Ks.has(e))return Ks.get(e)??null}const al="easydb:app-progress";function go(e){typeof document>"u"||document.dispatchEvent(new CustomEvent(al,{detail:e}))}function pp(){go({label:""})}class mp{constructor(t){this.weight=new Map,this.done=new Map;const n=t.reduce((r,i)=>r+Math.max(0,i.total),0);this.uniform=n===0;for(const r of t)this.weight.set(r.tableId,this.uniform?1:Math.max(0,r.total));this.totalWeight=this.uniform?t.length:n}observe(t,n){const r=this.weight.get(t);r!=null&&this.done.set(t,Math.min(r,Math.max(0,n)))}complete(t){const n=this.weight.get(t);n!=null&&this.done.set(t,n)}fraction(){if(this.totalWeight<=0)return 1;let t=0;for(const n of this.done.values())t+=n;return Math.min(1,t/this.totalWeight)}completedTables(){let t=0;for(const[n,r]of this.weight)(this.done.get(n)??-1)>=r&&t++;return t}get tableCount(){return this.weight.size}}function rt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)?e:null}function ye(e,t){return rt(e)?.[t]}function Be(e){return typeof e=="string"?e:null}function mr(e){return typeof e=="number"&&Number.isFinite(e)?e:null}function Ii(e){return Array.isArray(e)?e:[]}function Fn(e){return Ii(e).filter(t=>typeof t=="string")}function pc(e){return Ii(ye(e,"rows")).filter(t=>rt(t)!==null)}function La(e){return e===!0||e===1}class Qe extends Error{constructor(t,n){const r=Be(ye(t,"error")),i=Fn(ye(t,"errors"));super(r??(i.length>0?i.join("; "):null)??"Datasette request failed"),this.name="DatasetteError";const s=n??mr(ye(t,"status"));s!=null&&(this.status=s),this.errors=i.length>0?i:r?[r]:[]}}function St(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const n=t.pathname.split("/").filter(Boolean),r={};for(const[a,c]of t.searchParams)r[a]=c;let i,s=null,o=null;if(n.length>=2){o=decodeURIComponent(n[n.length-1]),s=decodeURIComponent(n[n.length-2]);const a=n.slice(0,n.length-2).join("/");i=t.origin+(a?"/"+a:"")}else n.length===1&&(s=decodeURIComponent(n[0])),i=t.origin;return{base:i,db:s,table:o,query:r}}function Un(e,t={}){const n=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[r,i]of Object.entries({...e.query,...t}))i!=null&&n.searchParams.set(r,String(i));return n.toString()}function h0(e,t){const n={};for(const[r,i]of Object.entries(e.query))r.startsWith("_")||(n[r]=i);return Un({...e,query:n},{_next:t})}function $d(e,t){try{const n=new URL(t),r=new URL(e,n);return r.hostname.toLowerCase()!==n.hostname.toLowerCase()?null:(r.protocol=n.protocol,r.port=n.port,r.toString())}catch{return null}}function f0(e){const t=Be(ye(e,"next_url")),n=ye(e,"next"),r=n!=null&&n!==!1?String(n):null,i=Ii(ye(e,"rows")),s=Array.isArray(ye(e,"columns"))?Fn(ye(e,"columns")):null;return{rows:i.map(a=>Array.isArray(a)&&s?Object.fromEntries(s.map((c,d)=>[c,a[d]])):a),nextUrl:t,nextToken:r,hasMore:t!=null||r!=null,truncated:ye(e,"truncated")===!0}}function p0(e,t=""){const n=String(e||"").toUpperCase();return n.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":n.includes("REAL")||n.includes("FLOA")||n.includes("DOUB")||n.includes("NUM")||n.includes("DEC")?"number":n.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function xd(e){const t=Fn(ye(e,"primary_keys")),n=Fn(ye(e,"columns")),r={},i=ye(e,"column_details");if(Array.isArray(i))for(const a of i){const c=rt(a);if(!c)continue;const d=Be(c.column)??Be(c.name);d&&(r[d]=c)}else{const a=rt(i);if(a)for(const[c,d]of Object.entries(a))r[c]=rt(d)??{}}for(const a of n)a in r||(r[a]={});const o=(n.length?n:Object.keys(r)).map(a=>{const c=r[a]??{},d=La(c.is_pk)||t.includes(a),f=Be(c.sqlite_type)??Be(c.type)??void 0,p={field:a,label:gp(a),type:p0(f,a)};(La(c.notnull)||d)&&(p.notnull=!0),d&&(p.unique=!0),(La(c.hidden)||oc(a))&&(p.hidden=!0);const b=c.default;return b!=null&&b!==""&&(p.default=b),p});if(t.length===0){const a=o.filter(c=>c.unique).map(c=>c.field);a.length&&t.push(...a)}return{columns:o,pks:t}}function bo(e,t){if(t.length===0)return e;const n=new Set(t);return e.map(r=>n.has(r.field)&&!(r.unique&&r.notnull)?{...r,unique:!0,notnull:!0}:r)}function gp(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function wo(e){const t=[],n=new Set;for(const r of e)for(const i of Object.keys(r))n.has(i)||(n.add(i),t.push(i));return t.map(r=>{const i={field:r,label:gp(r),type:m0(e.map(s=>s[r]))};return oc(r)&&(i.hidden=!0),i})}function m0(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(jl)?"array":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&g0(n))?"datetime":"string"}function g0(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function b0(e){const t=new TextEncoder().encode(String(e));let n="";for(const r of t){const i=String.fromCharCode(r);/[A-Za-z0-9_-]/.test(i)?n+=i:n+="~"+r.toString(16).toUpperCase().padStart(2,"0")}return n}function w0(e,t){return!t||t.length===0?null:t.map(n=>b0(e[n])).join(",")}function y0(e){const t=Array.isArray(e)?e:Ii(ye(e,"databases")),n=[];for(const r of t){if(typeof r=="string"){n.push(r);continue}const i=Be(ye(r,"name"));i===null||i==="_memory"||n.push(Be(ye(r,"route"))||i)}return n}function v0(e,t){const n=Array.isArray(e)?e:Ii(ye(e,"tables")),r=[];for(const i of n){if(typeof i=="string"){r.push({db:t,table:i,count:null,hidden:!1,pks:[]});continue}const s=Be(ye(i,"name"));s!==null&&r.push({db:t,table:s,count:mr(ye(i,"count")),hidden:ye(i,"hidden")===!0,pks:Fn(ye(i,"primary_keys"))})}return r}async function Ot(e,t){let n;try{n=await e(t)}catch(i){const s=i?.message||"network error";throw new Qe({error:`Couldn't reach ${t} (${s}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(n&&n.ok===!1){let i=null;try{i=await n.json()}catch{}throw new Qe(i&&typeof i=="object"?i:{error:`HTTP ${n.status} for ${t}`},n.status)}const r=await n.json();if(ye(r,"ok")===!1)throw new Qe(r,n.status);return r}async function mc(e,t){return y0(await Ot(e,`${t}/-/databases.json`))}async function Sd(e,t,n){return v0(await Ot(e,`${t}/${encodeURIComponent(n)}.json`),n)}function k0(e){const t=e?.views,n=[];for(const r of Array.isArray(t)?t:[]){if(typeof r=="string"){n.push(r);continue}const i=r;i&&typeof i.name=="string"&&i.hidden!==!0&&n.push(i.name)}return n}async function $0(e,t,n){const i=`${t}/${encodeURIComponent(n)}.json?sql=${encodeURIComponent("select name, sql from sqlite_master where type='view' order by name")}&_shape=array`;let s;try{s=await Ot(e,i)}catch(d){const f=d instanceof Qe?d.message:String(d);throw new Qe({error:`Couldn't read the view definitions from "${n}". Importing views needs the SQL endpoint, which this instance may have disabled (allow_sql). Its tables can still be imported normally.

${f}`},d instanceof Qe?d.status:0)}const o=s?.rows,a=Array.isArray(s)?s:Array.isArray(o)?o:[],c=[];for(const d of a){const f=d,p=typeof f?.name=="string"?f.name:Array.isArray(d)?d[0]:void 0,b=typeof f?.sql=="string"?f.sql:Array.isArray(d)?d[1]:void 0;typeof p=="string"&&typeof b=="string"&&b.trim()&&c.push({db:n,name:p,sql:b})}return c}async function x0(e,t){const n=t.db?[t.db]:await mc(e,t.base),r=[];for(const i of n){const s=await Ot(e,`${t.base}/${encodeURIComponent(i)}.json`);if(k0(s).length!==0){if(s?.allow_execute_sql===!1)throw new Qe({error:`"${i}" defines views, but this instance has SQL queries disabled (allow_execute_sql), and a view's definition can only be read through them. Its tables can still be imported normally.`},403);r.push(...await $0(e,t.base,i))}}return r}async function yo(e,t){const n=Un(t,{_extra:"column_details"}),r=await Ot(e,n);let{columns:i,pks:s}=xd(r),o=ye(r,"column_details")!=null,a=mr(ye(r,"count")),c=ye(r,"count_truncated")===!0,d=r;if(i.length===0){const f=Un(t,{_extra:"columns"}),p=await Ot(e,f);({columns:i,pks:s}=xd(p)),o=ye(p,"column_details")!=null,a=mr(ye(p,"count"))??a,c=ye(p,"count_truncated")===!0||c,d=p}if(!o&&s.length===0)try{s=await vp(e,t)}catch{}return{columns:bo(i,s),pks:s,count:a,countTruncated:c,typed:o,raw:d}}async function ll(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const n=await yo(e,t);return{db:t.db,table:t.table,count:n.count,hidden:!1,pks:n.pks}}function Cd(e,t,n){const r=rt(e)??{},i=t?rt(ye(r.databases,t))??{}:{},s=rt(i.tables)??{},o=(n?rt(s[n]):null)??(n?rt(s[n.toLowerCase()]):null)??{};return bp(o,c=>Be(o[c])??Be(i[c])??Be(r[c]))}function S0(e){const t=rt(e)??{};return bp(t,n=>Be(t[n]))}function bp(e,t){const n={columns:{},units:{}},r=Be(e.sort);r!==null&&(n.sort=r);const i=Be(e.sort_desc);i!==null&&(n.sortDesc=i);const s=mr(e.size);s!==null&&(n.size=s),Array.isArray(e.sortable_columns)&&(n.sortableColumns=Fn(e.sortable_columns));const o=Be(e.label_column);o!==null&&(n.labelColumn=o),e.hidden===!0&&(n.hidden=!0);const a=Be(e.description);a!==null&&(n.description=a);const c=Be(e.description_html);c!==null&&(n.descriptionHtml=c);const d=t("source"),f=t("source_url"),p=t("license"),b=t("license_url"),y=t("about"),k=t("about_url");d!==null&&(n.source=d),f!==null&&(n.sourceUrl=f),p!==null&&(n.license=p),b!==null&&(n.licenseUrl=b),y!==null&&(n.about=y),k!==null&&(n.aboutUrl=k);const $=rt(e.columns);if($)for(const[E,T]of Object.entries($))typeof T=="string"&&(n.columns[E]=T);const C=rt(e.units);if(C)for(const[E,T]of Object.entries(C))typeof T=="string"&&(n.units[E]=T);return n}const _d=new Map,Ed=new Map;async function C0(e,t){let n=_d.get(t);return n||(n=Ot(e,`${t}/-/metadata.json`).catch(()=>({})),_d.set(t,n)),n}async function _0(e,t){let n=Ed.get(t);return n||(n=Ot(e,`${t}/-/config.json`).catch(()=>({})),Ed.set(t,n)),n}async function E0(e,t){try{const n=await Ot(e,Un(t,{_extra:"metadata"}));return ye(n,"metadata")??{}}catch{return{}}}function T0(...e){const t={columns:{},units:{}};for(const n of e){const{columns:r,units:i,...s}=n;Object.assign(t,Object.fromEntries(Object.entries(s).filter(([,o])=>o!==void 0))),Object.assign(t.columns,r),Object.assign(t.units,i)}return t}async function gc(e,t){const n=await C0(e,t.base),r=Cd(n,t.db,t.table);if(Object.keys(rt(n)??{}).length>0)return r;const[i,s]=await Promise.all([_0(e,t.base),t.db&&t.table?E0(e,t):Promise.resolve({})]);return T0(r,Cd(i,t.db,t.table),S0(s))}function I0(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function bc(e,t){const n=e.sortableColumns!=null?new Set(e.sortableColumns):null,r=t.map(a=>{const c=e.columns[a.field],d=e.units[a.field],f=n?n.has(a.field):void 0;return c==null&&d==null&&f===void 0?a:{...a,...c!=null?{description:c}:{},...d!=null?{units:d}:{},...f!==void 0?{sortable:f}:{}}}),i=new Set(t.map(a=>a.field)),s={};e.sort&&i.has(e.sort)?(s.sortColumn=e.sort,s.sortAsc=!0):e.sortDesc&&i.has(e.sortDesc)&&(s.sortColumn=e.sortDesc,s.sortAsc=!1);const o=I0(e);return o&&(s.info=o),e.labelColumn&&i.has(e.labelColumn)&&(s.labelColumn=e.labelColumn),{columns:r,patch:s}}function wc(e,t){if(t.length===0)return e;const n=new Map(wo(t).map(r=>[r.field,r.type]));return e.map(r=>{if(r.type!=="string")return r;const i=n.get(r.field);return i&&i!=="string"?{...r,type:i}:r})}async function Ai(e,t,n={}){const r=n.maxRows??1e4,s={_size:n.pageSize??1e3,...n.extraParams||{}},o=Un(t,s);let a=n.startUrl?$d(n.startUrl,o)??n.startUrl:o;const c=[];let d=!1,f=!1,p=0,b,y;for(;a;){let k;try{k=await Ot(e,a)}catch(T){if(c.length===0&&!n.startUrl)throw T;b=T instanceof Qe&&T.status?`stopped after ${c.length} rows: HTTP ${T.status}`:`stopped after ${c.length} rows: ${T?.message??String(T)}`,f=!0,y=a;break}const $=f0(k);c.push(...$.rows),d=d||$.truncated,p+=1,n.onProgress?.(c.length);const E=($.nextUrl!=null?$d($.nextUrl,a):null)??($.nextToken!=null?h0(t,$.nextToken):null);E&&c.length<r&&$.rows.length>0?a=E:(f=E!=null&&$.rows.length>0,f&&(y=E??void 0),a=null)}return{rows:c,truncated:d,hasMore:f,pages:p,error:b,nextUrl:y}}function A0(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function wp(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function yp(e,t,n){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${n}`}async function vo(e,t,n,r){let i;try{i=await e(t,{method:"POST",headers:A0(r),body:JSON.stringify(n)})}catch(o){throw new Qe({error:`Couldn't reach ${t} (${o?.message||"network error"}).`},0)}if(i&&i.ok===!1){let o=null;try{o=await i.json()}catch{}throw new Qe(o&&typeof o=="object"?o:{error:`HTTP ${i.status} for ${t}`},i.status)}const s=await i.json();if(ye(s,"ok")===!1)throw new Qe(s,i.status);return s}async function Td(e,t,n,r={}){const i=await vo(e,wp(t,"insert"),{rows:n,return:!0},r.token);return pc(i)}async function R0(e,t,n,r,i={}){const s=await vo(e,yp(t,n,"update"),{update:r,return:!0},i.token),o=rt(ye(s,"row"));return o||(pc(s)[0]??null)}async function Id(e,t,n,r={}){await vo(e,yp(t,n,"delete"),{},r.token)}async function O0(e,t,n,r={}){const i=await vo(e,wp(t,"upsert"),{rows:n,return:!0},r.token);return pc(i)}async function vp(e,t){const n=Un(t,{_extra:"primary_keys"}),r=await Ot(e,n);return Fn(ye(r,"primary_keys"))}async function kp(e,t){try{const n=await Ot(e,Un(t,{_extra:"count"}));return{count:mr(ye(n,"count")),truncated:ye(n,"count_truncated")===!0}}catch{return{count:null,truncated:!1}}}async function $p(e,t,n={}){const r=n.token?{headers:{Authorization:`Bearer ${n.token}`}}:void 0;try{const i=await e(`${t}/-/versions.json`,r);if(i&&i.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${i.status}`};const s=await i.json(),o=Be(ye(ye(s,"datasette"),"version"))??Be(ye(s,"version"));let a=null;try{const d=await(await e(`${t}/-/actor.json`,r)).json();a=rt(ye(d,"actor"))}catch{}return{reachable:!0,version:o,actor:a,writable:!!(n.token&&a)}}catch(i){return{reachable:!1,version:null,actor:null,writable:!1,error:i?.message||"unreachable"}}}function gr(e,t){return t?(n,r)=>{const i=(r??{}).headers??{};return e(n,{...r??{},headers:{...i,Authorization:`Bearer ${t}`}})}:e}function D0(e,t){const n=new Map;for(const r of e)n.has(r.name.toLowerCase())||n.set(r.name.toLowerCase(),r);return r=>n.get(`${t}/${r}`.toLowerCase())??n.get(r.toLowerCase())}async function L0(e,t,n){const r={created:[],skipped:[],found:n.length};if(n.length===0)return r;const i=(await e.store.tables.find()).filter(a=>a.workspaceId===t),s=new Set(i.map(a=>a.name)),o=[...i];for(const a of n){const c=Ei(a.sql),d=c.projections[0];if(!d){r.skipped.push({name:a.name,reason:c.unsupported[0]??"its SELECT could not be modelled as a projection"});continue}const f=await ac(e,t,{name:`${a.db}/${a.name}`,spec:d.spec,...d.sortBy?{sortBy:d.sortBy}:{}},{resolve:D0(o,a.db),taken:s});if(!f){const p=d.spec.sources.map(b=>b.tableName).join(", ");r.skipped.push({name:a.name,reason:`its source tables are not in this workspace (${p}) — import them first`});continue}o.push(f),s.add(f.name),r.created.push(f.name),c.unsupported.length>0&&r.skipped.push({name:a.name,reason:`imported, but part of the query was not modelled: ${c.unsupported.slice(0,2).join("; ")}`})}return r}function M0(e,t){if(t.found===0){e.ui.dialogs.toast("That Datasette database defines no views.",{kind:"info",title:"Datasette views"});return}const n=t.skipped.length>0?` ${t.skipped.length} not fully imported: ${t.skipped.map(r=>`${r.name} — ${r.reason}`).join("; ")}`:"";if(t.created.length===0){e.ui.dialogs.toast(`No views could be imported as projections.${n}`,{kind:"warning",title:"Datasette views"});return}e.ui.dialogs.toast(`Imported ${t.created.length} of ${t.found} view${t.found===1?"":"s"} as projections.${n}`,{kind:t.skipped.length>0?"warning":"success",title:"Datasette views"})}function P0(e,t){return`${e}/${encodeURIComponent(t.db)}/${encodeURIComponent(t.name)}`}async function xp(e,t){try{return await x0(n=>e.backend.fetch(n),St(t))}catch(n){if(n instanceof Qe)return null;throw n}}async function Sp(e,t,n){const r=t.slice(0,5).map(s=>s.name).join(", "),i=await e.ui.dialogs.choice(`${n} ${t.length} view${t.length===1?"":"s"} (${r}${t.length>5?", …":""}).

A view is a query rather than stored rows, so it can come in either way.`,["As projections (live)","As tables (snapshot)"],"Datasette views");return i?i.startsWith("As projections")?"projection":"table":null}async function z0(e,t,n){const r=await xp(e,t);if(!r||r.length===0)return;const i=await Sp(e,r,"This database also defines");i&&await Cp(e,St(t).base,r,i,n)}async function Cp(e,t,n,r,i){if(r==="table"){await i(n.map(o=>P0(t,o)));return}const s=e.workspaceId();s&&M0(e,await L0(e,s,n))}const Ws=e=>e.replace(/^https?:\/\//,""),ni="datasette",_p=1e4,Ep=1e3,yc=1e4,Tp=60;function Ip(e){e.ui.registerSettings(ni,"Datasette",[{key:"maxImportRows",label:"Max import rows per table",type:"number",default:_p,scope:"workspace",description:"Max rows imported per table. 0 = unlimited."},{key:"pageSize",label:"Page size",type:"number",default:Ep,scope:"workspace",description:"Rows requested per page hop while paging a table (the instance clamps this to its own max_returned_rows)."},{key:"connectMaxRows",label:"Connected table row cap",type:"number",default:yc,scope:"workspace",description:"Row cap for a single live connected table."},{key:"retryWaitSeconds",label:"Rate-limit retry wait (seconds)",type:"number",default:Tp,scope:"workspace",description:"Wait before resuming an import paused by the instance's rate limiting."}])}function hs(e,t,n){const r=typeof e=="number"?e:Number(e);return Number.isFinite(r)&&r>=n?Math.floor(r):t}async function ko(e){const[t,n,r,i]=await Promise.all([e.settings.get(ni,"maxImportRows"),e.settings.get(ni,"pageSize"),e.settings.get(ni,"connectMaxRows"),e.settings.get(ni,"retryWaitSeconds")]);return{maxImportRows:hs(t,_p,0),pageSize:hs(n,Ep,1),connectMaxRows:hs(r,yc,1),retryWaitSeconds:hs(i,Tp,1)}}function $o(e){return e===0?Number.MAX_SAFE_INTEGER:e}function N0(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}`}function vc(e,t,n,r){const i={...e.info??{}};return!i.source&&!i.sourceUrl&&(i.source=`${Ws(t)}/${n}/${r}`,i.sourceUrl=N0(t,n,r)),{...e,info:i}}async function kc(e,t,n,r={}){if(t.db&&t.table)return[await ll(e,t)];const i=[];if(t.db){if(i.push(...await Sd(e,t.base,t.db)),r.skipPicker)return i.filter(a=>!a.hidden)}else{const a=await mc(e,t.base);if(a.length===0)return[];let c=a;if(a.length>1){const d=await gi(a.map(f=>({name:f,size:null})),{title:`${n} from Datasette`,message:`Choose databases on ${Ws(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!d)return null;c=d.map(f=>a[f])}for(const d of c)try{i.push(...await Sd(e,t.base,d))}catch{}}if(i.length===0)return[];const s=new Set(i.map(a=>a.db)).size>1,o=await gi(i.map(a=>({name:s?`${a.db}/${a.table}`:a.table,size:a.count,detail:s?void 0:a.db,hidden:a.hidden})),{title:`${n} from Datasette`,message:`Choose tables to ${n.toLowerCase()} from ${Ws(t.base)}.`,confirmLabel:n});return o?o.map(a=>i[a]):null}const j0=e=>new Promise(t=>setTimeout(t,e));function F0(e){const t=globalThis.__eda_resumeDelayMs;return typeof t=="number"&&t>=0?t:e*1e3}function $c(e,t,n,r){if(!(!e||!t))return{nextUrl:t,loadedRows:n,...r!=null?{totalCount:r}:{}}}const U0={id:"datasette-import",name:"Datasette Import",type:"importer",version:"0.3.0",description:"Import snapshot tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-import.ts"},Ad="https://latest.datasette.io/fixtures/facetable";function B0(e){Ip(e),e.ui.registerTableButton({id:"datasette:refresh-snapshot",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this snapshot from the Datasette table it came from",visible:t=>t.origin?.type==="datasette"&&t.source?.type!=="datasette",onClick:(t,{tableId:n})=>G0(t,n)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:n})=>Q0(t,n)}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Ad}`,"","Import from Datasette");r&&await Rd(t,r)}}),e.ui.registerUrlSource({id:"datasette-views",label:"Datasette views…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette database URL — its SQL views can come in as live Projections over the tables you already imported, or as snapshot tables.

e.g. ${Ad}`,"","Import Datasette views");if(r)try{const i=await xp(t,r);if(!i||i.length===0){await t.ui.dialogs.alert("That Datasette database defines no views.","Datasette views");return}const s=await Sp(t,i,"This database defines");if(!s)return;await Cp(t,St(r).base,i,s,o=>Ap(t,o,{}))}catch(i){await t.ui.dialogs.alert(i?.message??String(i),"Datasette views")}}}),e.ui.registerDropHandler(async(t,n)=>{const r=t.dataTransfer?.getData("text/plain")||"";return q0(r)?(t.preventDefault(),await Rd(n,r,{skipViews:!0}),!0):!1})}async function Rd(e,t,n={}){try{await xo(e,t,n)}catch(r){let i;r instanceof Qe?i=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:i=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(i,"Datasette import failed")}}function q0(e){try{const t=St(e);return!!(t.db&&t.table)}catch{return!1}}async function xo(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const i=await ko(e),s=St(t),a=await kc(L=>e.backend.fetch(L),s,"Import",{skipPicker:n.skipTablePicker});if(a===null)return;if(a.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const c=[];let d=0;for(const L of a){const ne={base:s.base,db:L.db,table:L.table,query:{}},W=await H0(e,r,ne);if(W.skipped){d+=1;continue}c.push({tableId:W.tableId,ref:ne,overwrite:W.overwrite,knownCount:L.count}),At(W.tableId,!0)}let f=0,p=0;const b=[],y=[],k=[],$=new mp(c.map(L=>({tableId:L.tableId,total:L.knownCount??0}))),C=`Importing ${c.length} table${c.length===1?"":"s"}`,E=L=>{c.length!==0&&go({label:C,...L===void 0?{}:{fraction:L},detail:`${$.completedTables()} of ${$.tableCount} table${$.tableCount===1?"":"s"}`})};E();try{for(const L of c){try{const ne=await V0(e,L.tableId,L.ref,L.overwrite,L.knownCount,n,i,W=>{$.observe(L.tableId,W),E($.fraction())});f+=1,p+=ne.rowCount,ne.error?y.push(`${L.ref.db}/${L.ref.table} (${ne.error})`):(ne.hasMore||ne.truncated)&&b.push(`${L.ref.db}/${L.ref.table}`)}catch(ne){k.push(`${L.ref.db}/${L.ref.table}: ${ne?.message??String(ne)}`)}$.complete(L.tableId),E($.fraction()),At(L.tableId,!1)}}finally{pp()}const T=$o(i.maxImportRows),Y=n.maxRows!=null?Math.min(n.maxRows,T):T;if(W0(e,{imported:f,skipped:d,totalRows:p,capped:b,cap:Y,partial:y,failed:k,requested:a.length}),f>0&&!n.skipViews)try{await z0(e,t,L=>Ap(e,L,n))}catch{}}async function Ap(e,t,n){for(const r of t)await xo(e,r,{...n,skipViews:!0})}async function H0(e,t,n){const r=`${n.db}/${n.table}`,i={type:"datasette",url:`${n.base}/${encodeURIComponent(n.db)}/${encodeURIComponent(n.table)}`},s=(await e.store.tables.find()).filter(d=>d.workspaceId===t),o=s.find(d=>d.name.toLowerCase()===r.toLowerCase());let a=r;if(o){const d=await e.ui.dialogs.choice(`A table named "${r}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!d||d==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(d==="Overwrite")return await e.store.tables.patch(o.id,{origin:i,updatedAt:Date.now()}),{tableId:o.id,overwrite:!0};a=pn(new Set(s.map(f=>f.name)),r)}const c=Ee();return await e.store.tables.insert({id:c,workspaceId:t,name:a,code:Ne(`${n.db}-${n.table}`),columns:[],view:"table",origin:i,updatedAt:Date.now()}),{tableId:c,overwrite:!1}}async function V0(e,t,n,r,i,s,o,a){const c=`${n.db}/${n.table}`,d=b=>e.backend.fetch(b),f=$o(o.maxImportRows),p=s.maxRows!=null?Math.min(s.maxRows,f):f;At(t,!0);try{let b=[],y=i,k=!1,$=!1,C=[];try{const me=await yo(d,n);b=me.columns,y==null&&(y=me.count,k=me.countTruncated),$=me.typed,C=me.pks??[]}catch{}if(y==null){const me=await kp(d,n);y=me.count,k=me.truncated}const E=y&&y>0&&(!k||p<=y)?Math.min(y,p):0,T=[];let Y=!1,L=!1,ne=0,W,I,V;for(;;){const me=await Ai(d,n,{maxRows:Math.max(0,p-T.length),pageSize:o.pageSize,...V?{startUrl:V}:{},onProgress:Gn=>{E>0&&At(t,!0,Math.min(1,(T.length+Gn)/E)),a?.(T.length+Gn)}});if(T.push(...me.rows),Y=Y||me.truncated,ne+=me.pages,L=me.hasMore,W=me.error,I=me.nextUrl,!me.error||!me.nextUrl||T.length>=p)break;const ze=`${o.retryWaitSeconds}s`;if(await e.ui.dialogs.choice(`Import of "${c}" paused after ${T.length.toLocaleString()} rows (${me.error}). Datasette may be rate-limiting a large import. Wait ${ze} and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,[`Resume in ${ze}`,"Cancel"],"Import paused — rate limited?")!==`Resume in ${ze}`)break;At(t,!0),e.ui.dialogs.toast(`Resuming "${c}" in ${ze}…`,{kind:"info",title:"Import paused"}),await j0(F0(o.retryWaitSeconds)),V=me.nextUrl,W=void 0,I=void 0}const K=b.length===0?wo(T):$?b:wc(b,T);let de=bo(K,C),H={};try{const me=await gc(d,n),ze=bc(me,de);de=ze.columns,H=ze.patch}catch{}H=vc(H,n.base,n.db,n.table);const te=await e.store.tables.findOne(t),q=te?.columns??[],Q=q.length===0;let{columns:ae}=ho(q,de,te?.deletedColumns),we=T;if(s.editColumns&&Q){const me=await s.editColumns(ae,c);if(me===null)return{name:c,rowCount:0,hasMore:!1,truncated:!1,pages:ne,count:y,error:W};we=K0(we,ae,me),ae=me}const xe=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const Me=$c(W,I,T.length,y),pe=C.length>0&&te?.origin?{origin:{...te.origin,pks:C}}:{},yt=Q?{columns:ae,...H,...pe,importResume:Me,updatedAt:xe}:{columns:ae,...H.info?{info:H.info}:{},...pe,importResume:Me,updatedAt:xe};await e.store.tables.patch(t,yt);const Lt=e.store.rows(t);if(r){const me=await Lt.find();await Lt.bulkRemove(me.map(ze=>ze.id))}const Ke=we.map(me=>({id:Ee(),tableId:t,data:me,updatedAt:xe}));return await Lt.bulkInsert(Ke),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:Ke.length}),{name:c,rowCount:Ke.length,hasMore:L,truncated:Y,pages:ne,count:y,error:W}}finally{At(t,!1)}}function K0(e,t,n){const r=Xl(t,n);return r?e.map(r):e}function W0(e,t){const n=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,r=`${t.imported} table${t.imported===1?"":"s"}`,i=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${r} (${n});${i} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${r} (${n}).${i} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){const s=t.cap<Number.MAX_SAFE_INTEGER?` at ${t.cap.toLocaleString()}`:"";e.ui.dialogs.toast(`Imported ${r} (${n}).${i} ${t.capped.length} capped${s} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${r} (${n}) from Datasette.${i}`,{kind:"success",title:"Datasette import"})}async function G0(e,t){const n=await e.store.tables.findOne(t);if(!(!n?.origin?.url||n.origin.type!=="datasette"))try{const r=await ko(e);await Y0(e,n,r)}catch(r){const i=r instanceof Qe?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${i}`,{kind:"error",title:"Refresh"})}}async function Y0(e,t,n){const r=St(t.origin.url),i=f=>e.backend.fetch(f),s=$o(n.maxImportRows);At(t.id,!0);let o,a;try{let f=[],p=null,b=!1,y=!1,k=[];try{const pe=await yo(i,r);f=pe.columns,p=pe.count,b=pe.countTruncated,y=pe.typed,k=pe.pks??[]}catch{}if(p==null){const pe=await kp(i,r);p=pe.count,b=pe.truncated}const $=p&&p>0&&(!b||s<=p)?Math.min(p,s):0,{rows:C,hasMore:E,truncated:T,error:Y,nextUrl:L}=await Ai(i,r,{maxRows:s,pageSize:n.pageSize,onProgress:pe=>{$>0&&At(t.id,!0,Math.min(1,pe/$))}}),ne=k.length>0?k:t.origin?.pks??[];let W=bo(f.length===0?wo(C):y?f:wc(f,C),ne),I={};try{const pe=await gc(i,r),yt=bc(pe,W);W=yt.columns,I=yt.patch}catch{}I=vc(I,r.base,r.db,r.table);const V=t.columns.length===0,K=ho(t.columns,W,t.deletedColumns);a=K.newFields;const ie=Date.now(),de=$c(Y,L,C.length,p),H=V?{columns:K.columns,...I,importResume:de,updatedAt:ie}:{columns:K.columns,...I.info?{info:I.info}:{},importResume:de,updatedAt:ie};await e.store.tables.patch(t.id,H);const te=new Set(W.map(pe=>pe.field)),q=t.columns.map(pe=>pe.field).filter(pe=>!te.has(pe)&&!ne.includes(pe)),Q=(t.deletedColumns??[]).filter(pe=>te.has(pe)),ae=e.store.rows(t.id),we=await ae.find(),{data:xe,droppedUserRows:Me}=fp({oldRows:we.map(pe=>({data:pe.data})),freshRows:C,pks:ne,userAddedFields:q,deletedRemoteFields:Q});await ae.bulkRemove(we.map(pe=>pe.id)),await ae.bulkInsert(xe.map(pe=>({id:Ee(),tableId:t.id,data:pe,updatedAt:ie}))),o={rowCount:xe.length,hasMore:E,truncated:T,error:Y,droppedUserRows:Me}}finally{At(t.id,!1)}const c=[];if(o.error)c.push(`partial (${o.error})`);else if(o.hasMore||o.truncated){const f=s<Number.MAX_SAFE_INTEGER?` at ${s.toLocaleString()}`:"";c.push(`capped${f}`)}a.length>0&&c.push(`${a.length} new column${a.length===1?"":"s"}`),o.droppedUserRows>0&&c.push(`${o.droppedUserRows} row${o.droppedUserRows===1?"":"s"} changed at the source, so your own column values for ${o.droppedUserRows===1?"it":"them"} could not be carried over`);const d=c.length?` — ${c.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${o.rowCount} rows from ${r.db}/${r.table}${d}.`,{kind:o.error||o.hasMore||o.truncated||a.length>0||o.droppedUserRows>0?"warning":"success",title:"Refresh"}),a.length>0&&J0(t.id,r,a)}async function Q0(e,t){const n=await e.store.tables.findOne(t),r=n?.importResume;if(!n||!n.origin?.url||!r)return;const i=await ko(e),s=$o(i.maxImportRows),o=St(n.origin.url),a=k=>e.backend.fetch(k),c=r.loadedRows,d=r.totalCount??null,f=d&&d>0?Math.min(d,s):0;At(t,!0,f>0?Math.min(1,c/f):void 0);let p,b;try{const k=await Ai(a,o,{startUrl:r.nextUrl,maxRows:Math.max(0,s-c),pageSize:i.pageSize,onProgress:E=>{f>0&&At(t,!0,Math.min(1,(c+E)/f))}});p=k.rows.length;const $=Date.now();await e.store.rows(t).bulkInsert(k.rows.map(E=>({id:Ee(),tableId:t,data:E,updatedAt:$}))),b={error:k.error,nextUrl:k.nextUrl};const C=$c(k.error,k.nextUrl,c+p,d);await e.store.tables.patch(t,{importResume:C,updatedAt:$})}catch(k){const $=k instanceof Qe?k.message:k?.message??String(k);e.ui.dialogs.toast(`Couldn't resume ${o.db}/${o.table}: ${$}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{At(t,!1)}const y=c+p;b.error?e.ui.dialogs.toast(`Resumed ${o.db}/${o.table}: +${p} rows (${y} total) — interrupted again (${b.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${o.db}/${o.table}: +${p} rows (${y} total).`,{kind:"success",title:"Resume import"})}function J0(e,t,n){const r=n.join(", "),i=n.length!==1,s=`Refreshing ${t.db}/${t.table} revealed ${n.length} new column${i?"s":""}: ${r}. Review, reorder or hide ${i?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:s}}))}const X0=Object.freeze(Object.defineProperty({__proto__:null,importDatasette:xo,init:B0,meta:U0},Symbol.toStringTag,{value:"Module"})),xc=new Map;let Od=!1;function Z0(){for(const e of xc.values())if(e===null||e.open)return!0;return!1}function Rp(e,t=null){xc.set(e,t),tk()}function ek(e){xc.delete(e)}function Zt(e,t){const n=()=>{t.open&&Rp(e,t)};t.addEventListener("input",n),t.addEventListener("change",n),t.addEventListener("close",()=>ek(e))}function tk(){Od||(Od=!0,window.addEventListener("beforeunload",e=>{Z0()&&(e.preventDefault(),e.returnValue="")}))}var nk=Object.defineProperty,rk=Object.getOwnPropertyDescriptor,Ri=(e,t,n,r)=>{for(var i=r>1?void 0:r?rk(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&nk(t,n,i),i};const ik="https://latest.datasette.io/ephemeral";let Rt=class extends $e{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const n=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,n)}catch(r){this.status=r?.message??String(r),this.statusKind="err";return}}this.finish({url:t,token:n})}}connectedCallback(){super.connectedCallback(),Rt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Rt.instance===this&&(Rt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&Zt("datasette-connect",this.dialogEl)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return v`
      <dialog @cancel=${this.onCancel} @keydown=${gt}>
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
                placeholder="e.g. ${ik}"
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
              <button type="button" class="ghost test" @click=${()=>void this.runTest()}>Test connection</button>
              <span class="status ${this.statusKind}">${this.status}</span>
            </div>
            <p class="hint">
              Enter a single table (<code>…/db/table</code>), a whole database (<code>…/db</code>), or an instance root — you'll pick which tables to connect. Opens live tables backed by the remote
              Datasette: reads stay remote, and edits write back when the token grants them. The token is stored on this device only and is never synced or exported. A blank token opens tables
              read-only.
            </p>
          </div>
        </form>
      </dialog>
    `}};Rt.instance=null;Rt.styles=[mt,Se`
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
    `];Ri([z()],Rt.prototype,"url",2);Ri([z()],Rt.prototype,"token",2);Ri([z()],Rt.prototype,"status",2);Ri([z()],Rt.prototype,"statusKind",2);Rt=Ri([Oe("datasette-connect-dialog")],Rt);class sk extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function Op(e){return`datasette:token:${e}`}function ok(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function ak(e,t,n){const r=e.source,i=r?.config??{},s={base:i.base,db:i.db,table:i.table,query:{}},o=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],a=r?.writable===!0,c=i.maxRows;let d=null;function f(){return c!=null?Promise.resolve(c):(d||(d=n?ko(n).then(I=>I.connectMaxRows):Promise.resolve(yc)),d)}const p=i.pollIntervalMs??0,b=(I,V)=>t.backend.fetch(I,V);async function y(){const V=(await t.settings.findOne(Op(i.base)))?.value;return typeof V=="string"&&V.length>0?V:void 0}const k=async(I,V)=>gr(b,await y())(I,V);function $(I){return{id:w0(I,o)??Ee(),tableId:e.id,data:I,updatedAt:Date.now()}}function C(I){if(!a)throw new sk(I)}function E(I){const V={};for(const[K,ie]of Object.entries(I))o.includes(K)||(V[K]=ie);return V}const T=new Set;let Y=[],L=!1,ne=null;function W(){return ne||(ne=(async()=>{try{const{rows:I}=await Ai(k,s,{maxRows:await f()});Y=I.map($),L=!0;for(const V of T)V(Y);return Y}finally{ne=null}})(),ne)}return{async find(I){const V=L?Y:await W();return!I||Object.keys(I).length===0?V:V.filter(K=>ok(K,I))},async findOne(I){return(L?Y:await W()).find(K=>K.id===I)??null},async insert(I){C("insert");const[V]=await Td(k,s,[I.data]),K=$(V??I.data);return t.events.emit("row:created",{tableId:e.id,row:K}),W(),K},async bulkInsert(I){if(I.length===0)return[];C("insert");const V=await Td(k,s,I.map(ie=>ie.data)),K=(V.length?V:I.map(ie=>ie.data)).map($);return W(),K},async upsert(I){C("upsert");const[V]=await O0(k,s,[I.data]),K=$(V??I.data);return W(),K},async patch(I,V){C("update");const K=V.data,ie=E(K??{}),de=await R0(k,s,I,ie),H=$(de??{...K??{}});return t.events.emit("row:updated",{tableId:e.id,row:H,prev:H}),W(),H},async remove(I){C("delete"),await Id(k,s,I),t.events.emit("row:deleted",{tableId:e.id,rowId:I}),W()},async bulkRemove(I){if(I.length!==0){C("delete");for(const V of I)await Id(k,s,V);W()}},subscribe(I){T.add(I),L?I(Y):W();let V=null;return p>0&&(V=setInterval(()=>void W(),p)),()=>{T.delete(I),V&&clearInterval(V)}},async refresh(){await W()}}}const lk='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',ck={id:"datasette-connect",name:"Datasette Connect",type:"source",version:"0.3.0",description:"Connect a live, editable table on any Datasette instance — rows are never stored locally",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-connect.ts"};function uk(e){Ip(e),e.ui.registerConnector({id:"datasette",label:"Datasette",icon:lk,order:10,description:"A live, editable table on any Datasette instance",connect:t=>hk(t)}),e.ui.registerTableButton({id:"datasette:refresh-live",label:"Refresh",icon:"refresh",tooltip:"Re-read this live table from its Datasette instance",visible:t=>t.source?.type==="datasette",onClick:(t,{tableId:n})=>dk(t,n)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:(t,n)=>ak(t,n,e)})}async function dk(e,t){if((await e.store.tables.findOne(t))?.source?.type==="datasette")try{const r=e.store.rows(t);typeof r.refresh=="function"&&await r.refresh();const i=await r.find();e.ui.dialogs.toast(`Reloaded ${i.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}catch(r){const i=r instanceof Qe?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${i}`,{kind:"error",title:"Refresh"})}}async function hk(e){const t=Rt.instance??fk(),n=(i,s)=>e.backend.fetch(i,s),r=await t.open({initialUrl:"https://datasette.io",async onTest(i,s){const o=St(i),a=await $p(n,o.base,{token:s||void 0});if(o.db&&o.table){await ll(gr(n,s||void 0),o);const d=a.version?` (Datasette ${a.version})`:"";return a.writable?`Reachable${d} — table found, signed in, read-write.`:`Reachable${d} — table found, read-only (no token / not authenticated).`}if(!a.reachable)return`Unreachable: ${a.error??"no response"}`;const c=a.version?` (Datasette ${a.version})`:"";return a.writable?`Reachable${c} — signed in, read-write.`:`Reachable${c} — read-only (no token / not authenticated).`},async onConnect(i,s){const o=St(i);o.db&&o.table&&await ll(gr(n,s||void 0),o)}});if(r)try{await Dp(e,r.url,r.token)}catch(i){const s=i instanceof Qe?i.message:i?.message??String(i);await e.ui.dialogs.alert(s,"Connect Datasette failed")}}function fk(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function Dp(e,t,n){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const i=St(t),s=(p,b)=>e.backend.fetch(p,b),o=gr(s,n||void 0),a=await $p(s,i.base,{token:n||void 0});n&&await e.store.settings.upsert({name:Op(i.base),value:n});let c;try{c=await kc(o,i,"Connect")}catch(p){const b=p instanceof Qe?p.message:p?.message??String(p);throw new Error(`Couldn't read tables from ${Ws(i.base)}: ${b}`,{cause:p})}if(c===null)return;if(c.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const d=[];for(const p of c){const b=await pk(e,r,i.base,p,a.writable,n);b!==null&&d.push({tableId:b,c:p})}if(d.length===0)return;const f=a.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${d.length} live table${d.length===1?"":"s"} from Datasette (${f}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:p,c:b}of d)mk(e,p,i.base,b,n)}async function pk(e,t,n,r,i,s){const o=(await e.store.tables.find()).filter(b=>b.workspaceId===t);let a=`${r.db}/${r.table}`,c=o.find(b=>{const y=b.source?.config;return b.source?.type==="datasette"&&y?.base===n&&y?.db===r.db&&y?.table===r.table});if(!c){const b=o.find(y=>y.name.toLowerCase()===a.toLowerCase());if(b){const y=await e.ui.dialogs.choice(`A table named "${a}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!y||y==="Skip")return null;y==="Overwrite"?c=b:a=pn(new Set(o.map(k=>k.name)),a)}}let d=r.pks??[];if(d.length===0){const b=gr((y,k)=>e.backend.fetch(y,k),s||void 0);try{d=await vp(b,{base:n,db:r.db,table:r.table,query:{}})}catch{d=[]}}const f=c?.id??Ee(),p={...c??{},id:f,workspaceId:t,name:a,code:Ne(`${r.db}-${r.table}`),columns:c?.columns??[],view:c?.view??"table",source:{type:"datasette",writable:i,config:{base:n,db:r.db,table:r.table,pks:d}},updatedAt:Date.now()};return c?await e.store.tables.upsert(p):await e.store.tables.insert(p),f}async function mk(e,t,n,r,i){const s={base:n,db:r.db,table:r.table,query:{}},o=gr((a,c)=>e.backend.fetch(a,c),i||void 0);try{let a=[],c=!1;try{const $=await yo(o,s);a=$.columns,c=$.typed}catch{}const{rows:d}=await Ai(o,s,{maxRows:50,pageSize:50}),f=a.length===0?wo(d):c?a:wc(a,d);if(f.length===0)return;const p=await e.store.tables.findOne(t);if(!p)return;const b=p.source?.config?.pks??[];let y=bo(f,b),k={};try{const $=await gc(o,s),C=bc($,y);y=C.columns,k=C.patch}catch{}k=vc(k,s.base,r.db,r.table),await e.store.tables.patch(t,{columns:y,...k,updatedAt:Date.now()})}catch{}}const gk=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:Dp,init:uk,meta:ck},Symbol.toStringTag,{value:"Module"})),bk={id:"url-source",name:"URL Reference",type:"source",version:"0.1.0",description:'Backs a table with a live read-only fetch of a plain CSV or JSON URL — a "reference" table whose rows are never persisted locally.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/url-source.ts"};function wk(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"url",create:Lp}),e.ui.registerTableButton({id:"url-source:refresh",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this reference from its source URL",visible:t=>t.source?.type==="url",onClick:async(t,{tableId:n})=>{try{const r=t.store.rows(n);typeof r.refresh=="function"&&await r.refresh(),t.ui.dialogs.toast("Reference refreshed.",{kind:"success",title:"Refresh"})}catch(r){t.ui.dialogs.toast(`Refresh failed: ${r.message}`,{kind:"error",title:"Refresh"})}}})}class Ln extends Error{constructor(t){super(`This is a reference (read-only) table — ${t} is not permitted. Import a copy to edit.`),this.name="ReadOnlyReferenceError"}}function yk(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}const Dd=5e4;function vk(e){return e.ok===!0&&Array.isArray(e.rows)}function kk(e,t){if(typeof e!="object"||e===null||Array.isArray(e))return null;const n=e;let r;try{r=new URL(t)}catch{return null}for(const i of["next_url","nextUrl","next"]){const s=n[i];if(typeof s!="string")continue;const o=s.trim();if(o!==""){if(/^(https?:\/\/|[/?])/i.test(o))try{const a=new URL(o,t);if(a.origin!==r.origin)continue;return a.toString()}catch{continue}if(i==="next"&&vk(n))return`${r.origin}${r.pathname}?_next=${encodeURIComponent(o)}`}}return null}function $k(e){const t=n=>typeof n=="object"&&n!==null&&!Array.isArray(n);if(Array.isArray(e))return e.filter(t);if(t(e)){for(const n of["rows","records","data"]){const r=e[n];if(Array.isArray(r))return r.filter(t)}for(const n of Object.values(e))if(Array.isArray(n))return n.filter(t)}return[]}function Lp(e,t){const n=e.source?.config??{},r=typeof n.url=="string"?n.url:"",i=n.format==="json"?"json":"csv",s=new Set;let o=[],a=!1,c=null;function d(k){return k.map(($,C)=>({id:`url:${C}`,tableId:e.id,data:$,updatedAt:0}))}async function f(k){let $;try{$=await t.backend.fetch(k)}catch(C){throw new Error(`Could not reach ${r}: ${C?.message??String(C)}`,{cause:C})}if(!$.ok)throw new Error(`Could not load ${r}: HTTP ${$.status} ${$.statusText}`);try{return await wf($)}catch(C){throw new Error(`Could not read response from ${r}: ${C?.message??String(C)}`,{cause:C})}}async function p(k){const $=Vl(k);let C=await f($);if(gf(C)){const E=bf($);E&&(C=await f(E))}try{if(i==="json"){const E=JSON.parse(C);return{records:$k(E),nextUrl:kk(E,$)}}return{records:_r(C).rows,nextUrl:null}}catch(E){throw new Error(`Could not parse ${i.toUpperCase()} from ${r}: ${E?.message??String(E)}`,{cause:E})}}async function b(){if(!r)throw new Error("This reference table has no URL configured.");const k=[];let $=r;const C=new Set;for(;$&&k.length<Dd&&!C.has($);){C.add($);const E=await p($);k.push(...E.records),$=E.records.length>0?E.nextUrl:null}return k.slice(0,Dd)}function y(){return c||(c=(async()=>{try{const k=await b();o=d(k),a=!0;for(const $ of s)$(o);return o}finally{c=null}})(),c)}return{async find(k){const $=a?o:await y();return!k||Object.keys(k).length===0?$:$.filter(C=>yk(C,k))},async findOne(k){return(a?o:await y()).find(C=>C.id===k)??null},async insert(){throw new Ln("insert")},async bulkInsert(){throw new Ln("insert")},async upsert(){throw new Ln("upsert")},async patch(){throw new Ln("update")},async remove(){throw new Ln("delete")},async bulkRemove(){throw new Ln("delete")},subscribe(k){return s.add(k),a?k(o):y(),()=>{s.delete(k)}},async refresh(){a=!1,o=[],await y()}}}const xk=Object.freeze(Object.defineProperty({__proto__:null,ReadOnlyReferenceError:Ln,createUrlCollection:Lp,init:wk,meta:bk},Symbol.toStringTag,{value:"Module"}));function Je(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),`"${t||"_"}"`}function Ld(e){return`'${e.replace(/'/g,"''")}'`}function Md(e,t){const n=e.columns.find(r=>r.field===t);return n?n.from.kind==="script"?{expr:null,computed:!0}:{expr:`${Je(n.from.alias)}.${Je(n.from.field)}`,computed:!1}:null}function Sk(e,t){const n=e.sources[0];if(!n)return`-- projection has no source table; nothing to select.
`;const r=t.limitStyle??"limit",i=e.limit!=null&&e.limit>0?Math.floor(e.limit):null,s=[];for(const y of e.columns)y.from.kind==="source"?s.push(`  ${Je(y.from.alias)}.${Je(y.from.field)} AS ${Je(y.field)}`):s.push(`  NULL AS ${Je(y.field)} -- computed in-app by a script; no SQL equivalent`);s.length===0&&s.push("  *");const a=[`SELECT${i!=null&&r==="top"?` TOP ${i}`:""}`,s.join(`,
`)],c=t.tableNames[n.alias]??n.tableName;a.push(`FROM ${Je(c)} AS ${Je(n.alias)}`);for(const y of e.sources.slice(1)){const k=t.tableNames[y.alias]??y.tableName;if(!y.join){a.push(`CROSS JOIN ${Je(k)} AS ${Je(y.alias)}`);continue}const $=y.join.type==="inner"?"INNER JOIN":"LEFT JOIN",C=y.join.on.map(E=>`${Je(y.alias)}.${Je(E.field)} = ${Je(E.eqAlias)}.${Je(E.eqField)}`).join(" AND ");a.push(`${$} ${Je(k)} AS ${Je(y.alias)} ON ${C||"1 = 1"}`)}const d=[],f=[];for(const[y,k]of Object.entries(e.filters??{})){if(!k)continue;const $=Md(e,y);if($){if($.computed){f.push(`-- filter on ${Je(y)} (${Ld(k)}) applies to a computed column; enforced in-app only`);continue}d.push(`LOWER(${$.expr}) LIKE ${Ld(`%${k.toLowerCase()}%`)}`)}}d.length>0&&a.push(`WHERE ${d.join(`
  AND `)}`);const p=(t.orderBy??[]).map(y=>{const k=Md(e,y.field);return!k||k.computed?null:`${k.expr} ${y.asc?"ASC":"DESC"}`}).filter(y=>y!==null);p.length>0&&a.push(`ORDER BY ${p.join(", ")}`);const b=i==null?"":r==="limit"?`
LIMIT ${i}`:r==="fetch"?`
FETCH FIRST ${i} ROWS ONLY`:"";return`${a.join(`
`)}${b};
${f.length>0?`${f.join(`
`)}
`:""}`}const Ck={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function _k(){}async function Mp(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const n=(await e.store.tables.find()).filter(a=>a.workspaceId===t),r=n.filter(a=>a.source?.type!=="projection"),i=n.filter(a=>a.source?.type==="projection"),s=Ek(n),o=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}${i.length>0?` (+ ${i.length} projection${i.length===1?"":"s"})`:""}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const a of r){const c=await e.store.rows(a.id).find();o.push(Np(a,c),"")}if(o.push("COMMIT;",""),i.length>0){o.push("","-- Projections (virtual tables). Each is the query behind one, reading the","-- tables above. Run them as-is, or wrap one in CREATE VIEW to keep it.","");for(const a of i)o.push(`-- projection: ${a.name}`,Sc(a,s)??"","")}return o.join(`
`)}function Ek(e){const t=new Map;for(const n of e)t.has(n.name)||t.set(n.name,br(n.code||n.name));return n=>t.get(n)??br(Ne(n))}function Pp(e,t){const n=zp(e);return n||["-- easyDBAccess table export",`-- table:    ${e.name}`,`-- exported: ${new Date().toISOString()}`,"","BEGIN;","",Np(e,t),"","COMMIT;",""].join(`
`)}function zp(e,t){const n=Sc(e,t);return n===null?null:["-- easyDBAccess projection export",`-- projection: ${e.name}`,`-- exported:   ${new Date().toISOString()}`,"--","-- A projection is a derived (virtual) table: this is the query behind it,","-- reading the source tables by name.","-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';","-- before executing. For SQL Server / HANA, replace the trailing LIMIT n","-- with SELECT TOP n.","",n].join(`
`)}function Sc(e,t){if(e.source?.type!=="projection")return null;const n=e.source.config;if(!n||!Array.isArray(n.sources))return null;const r=t??(o=>br(Ne(o))),i={};for(const o of n.sources)i[o.alias]=r(o.tableName);const s=n.sources.length>0&&e.sortBy&&e.sortBy.length>0?e.sortBy:e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc??!0}]:void 0;return Sk(n,{tableNames:i,limitStyle:"limit",...s?{orderBy:s}:{}})}function Np(e,t){const n=br(e.code||e.name||`table_${e.id}`),r=['  "__id" TEXT PRIMARY KEY',...e.columns.map(s=>`  ${Tk(s)}`)],i=[`DROP TABLE IF EXISTS "${n}";`,`CREATE TABLE "${n}" (`,r.join(`,
`),");"];if(t.length>0){const o=["__id",...e.columns.map(a=>a.field)].map(a=>`"${br(a)}"`).join(", ");for(const a of t){const c=[Pd(a.id),...e.columns.map(d=>Pd(a.data[d.field],d.type))];i.push(`INSERT INTO "${n}" (${o}) VALUES (${c.join(", ")});`)}}return i.join(`
`)}function Tk(e){const t=[`"${br(e.field)}"`,Ik(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function Ik(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function Pd(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const n=Ak(e);return n===null?"NULL":fs(n)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?fs(e.toISOString()):fs(typeof e=="string"?e:JSON.stringify(e))}function Ak(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?zd(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const n=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(n)return`${n[1]}${n[2]}${n[3]}`;const r=new Date(t);return Number.isFinite(r.getTime())?zd(r):null}return null}function zd(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),n=String(e.getUTCMonth()+1).padStart(2,"0"),r=String(e.getUTCDate()).padStart(2,"0");return`${t}${n}${r}`}function fs(e){return`'${e.replace(/'/g,"''")}'`}function br(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const Rk=Object.freeze(Object.defineProperty({__proto__:null,init:_k,meta:Ck,projectionSelectBody:Sc,projectionSelectFor:zp,serializeTableAsSql:Pp,serializeWorkspaceAsSql:Mp},Symbol.toStringTag,{value:"Module"}));function So(e){return/(?:Z|[+-]\d{2}:?\d{2})$/i.test(e.trim())}function Co(e){if(typeof e!="string"&&typeof e!="number")return null;const t=String(e).trim();return t===""?null:t}const _o=/^(\d{4})-(\d{2})-(\d{2})$/,Eo=/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?/;function Cc(e,t){const n=Co(e);if(n===null)return"";const r=_o.exec(n);if(r)return Ma(new Date(Number(r[1]),Number(r[2])-1,Number(r[3])),t);const i=Eo.exec(n);if(i&&!So(n))return Ma(new Date(Number(i[1]),Number(i[2])-1,Number(i[3])),t);const s=new Date(n);return Number.isNaN(s.getTime())?n:Ma(s,t)}function jp(e,t){const n=Co(e);if(n===null)return"";const r=Eo.exec(n);if(r&&!So(n)){const s=new Date(Number(r[1]),Number(r[2])-1,Number(r[3]),Number(r[4]),Number(r[5]),Number(r[6]??0));return Nd(s,t)}if(_o.test(n))return Cc(n,t);const i=new Date(n);return Number.isNaN(i.getTime())?n:Nd(i,t)}function oi(e){const t=Co(e);if(t===null)return"";if(_o.test(t))return t;const n=Eo.exec(t);if(n&&!So(t))return`${n[1]}-${n[2]}-${n[3]}`;const r=new Date(t);return Number.isNaN(r.getTime())?"":`${r.getFullYear()}-${ir(r.getMonth()+1)}-${ir(r.getDate())}`}function ai(e){const t=Co(e);if(t===null)return"";const n=Eo.exec(t);if(n&&!So(t))return`${n[1]}-${n[2]}-${n[3]}T${n[4]}:${n[5]}`;if(_o.test(t))return`${t}T00:00`;const r=new Date(t);return Number.isNaN(r.getTime())?"":`${r.getFullYear()}-${ir(r.getMonth()+1)}-${ir(r.getDate())}T${ir(r.getHours())}:${ir(r.getMinutes())}`}function ir(e){return String(e).padStart(2,"0")}function Ma(e,t){return e.toLocaleDateString(t)}function Nd(e,t){return`${e.toLocaleDateString(t)} ${e.toLocaleTimeString(t,{hour:"2-digit",minute:"2-digit"})}`}function Fp(e,t,n){return e==="date"?Cc(t,n):e==="datetime"?jp(t,n):null}const _c=/\$((?:input|filter|raw)[.:])?([A-Za-z_][A-Za-z0-9_]*)/g;function jd(...e){const t=new Set;for(const n of e)if(n)for(const r of n.matchAll(_c))t.add(r[2]);return[...t]}function Ok(...e){const t=new Set;for(const n of e)if(n)for(const r of n.matchAll(_c))r[1]?.startsWith("filter")&&t.add(r[2]);return[...t]}const To=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),zt=e=>To(e).replace(/"/g,"&quot;").replace(/'/g,"&#39;");function Dk(e){return typeof e=="boolean"?e:typeof e=="number"?e!==0:typeof e=="string"?["true","1","yes","y","t","on"].includes(e.trim().toLowerCase()):!1}function Lk(e,t,n,r,i){const s=r?.type??"string",o=To(r?.label||e),a=`class="eda-input" data-eda-row="${zt(n)}" data-eda-field="${zt(e)}" data-eda-type="${zt(s)}"`,c=i?" disabled":"";let d;if(s==="boolean")d=`<input type="checkbox" ${a}${Dk(t)?" checked":""}${c} />`;else{const f=s==="number"?"number":"text",p=t==null?"":zt(String(t));d=`<input type="${f}" ${a} value="${p}"${c} />`}return`<label class="eda-input-field" title="${o}">${d}<span class="eda-input-label">${o}</span></label>`}function Fd(e,t){const n=zt(e),r=zt(t);return`<button type="button" class="eda-filter-pill" data-eda-filter-field="${n}" data-eda-filter-value="${r}" title="Filter by ${n}: ${r}">${To(t)}</button>`}function Mk(e,t){return t?.type==="array"||Array.isArray(e)?ut(e):null}function Pk(e,t,n){const r=Mk(t,n);return r?r.map(i=>Fd(e,i)).join(""):t==null||t===""?"":Fd(e,String(t))}function zk(e,t){const n=Er(e,t.data);return n.ok?n.value==null?"":String(n.value):`<span class="eda-script-error" title="${zt(n.message)}">⚠ ${To(n.label)}</span>`}const Up="eda-cell";function Nk(e,t,n){if(n?.trim()){const r=Er(n,e.data);return r.ok?r.value:`⚠ ${r.label}`}return e.data[t]}function jk(e,t){const n=e.lastIndexOf("<",t);return n>=0&&n>e.lastIndexOf(">",t)}function Fk(e,t,n,r){return`<span class="${Up}" data-eda-row="${zt(e)}" data-eda-field="${zt(t)}" data-eda-token="${zt(n)}" data-eda-tag="${zt(r)}"></span>`}function Uk(e,t,n,r={}){return e.replace(_c,(i,s,o,a,c)=>{const d=n[o],f=r.scripts?.[o];if(!s&&f?.trim())return zk(f,t);if(!d)return"";const p=t.data[d],b=r.columns?.get(d);if(!s||s.startsWith("raw")){const k=s?void 0:Bk(b,r.renderers);return k&&r.raw?.[o]!==!0&&!jk(c,a)?Fk(t.id,d,o,k):p==null||p===""?"":(s?null:Fp(b?.type,p))??String(p)}if(s.startsWith("filter"))return Pk(d,p,b);const y=r.readonly===!0||!!b?.script?.trim();return Lk(d,p,t.id,b,y)})}function Bk(e,t){const n=e?.renderer;return n?t?.get(n):void 0}function Ud(e){return e==null||e===""}function qk(e,t){let n=null;for(const r of t){if(!r.script?.trim())continue;const i=Er(r.script,e.data);n??={...e.data},n[r.field]=i.ok?i.value:`⚠ ${i.label}`}return n?{...e,data:n}:e}function Bd(e,t){return t.some(n=>n.script?.trim())?e.map(n=>qk(n,t)):e}function qd(e,t,n){const r=Object.entries(t).filter(([,s])=>s!=null&&String(s).trim()!=="");if(r.length===0)return e;const i=new Map((n??[]).map(s=>[s.field,s.type]));return e.filter(s=>r.every(([o,a])=>fi(s.data[o],a,{type:i.get(o)})))}function Io(e,t){return e.exact===!0&&!e.negate&&e.term.toLowerCase()===t.toLowerCase()}function Hk(e,t){const n=Vn(e??"");return n.some(r=>Io(r,t))||n.push({term:t,negate:!1,exact:!0}),hn(n)}function Vk(e,t){const n=Vn(e??"").filter(r=>!Io(r,t));return hn(n)}function Bp(e,t){return e.exact===!0&&e.negate===!0&&e.term.toLowerCase()===t.toLowerCase()}function Kk(e,t){const n=Vn(e??"");return n.some(r=>Io(r,t))?"on":n.some(r=>Bp(r,t))?"not":"off"}function Wk(e,t){const n=Kk(e,t),r=Vn(e??"").filter(i=>!Io(i,t)&&!Bp(i,t));return hn(n==="off"?[...r,{term:t,negate:!1,exact:!0}]:n==="on"?[...r,{term:t,negate:!0,exact:!0}]:r)}function Gk(e,t,n=!0){if(!t)return e;const r=n?1:-1;return[...e].sort((i,s)=>{const o=i.data[t],a=s.data[t],c=Ud(o),d=Ud(a);if(c||d)return c===d?0:c?1:-1;const f=Number(o),p=Number(a);return!Number.isNaN(f)&&!Number.isNaN(p)?(f-p)*r:String(o).localeCompare(String(a),void 0,{numeric:!0,sensitivity:"base"})*r})}function cl(e,t,n){const r=qd(e,t.filters??{},n),i=qd(r,t.pillFilters??{},n);return Gk(i,t.sortColumn,t.sortAsc??!0)}function Yk(e){return!!e&&e.trim().length>0}function qp(e,t){return t==="raw"||t==="structure"?e.columns:e.columns.filter(n=>n.hidden!==!0)}function Qk(e,t){return t==="raw"||t==="structure"?e:{...e,columns:qp(e,t)}}function Hp(e,t,n){return n==="structure"?[]:n==="raw"?t:cl(t,{filters:e.filters??{},sortColumn:e.sortColumn,sortAsc:e.sortAsc},e.columns)}function Ec(e,t){const n=e.columns.map(i=>i.field),r=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:r?[]:t.map(i=>{const s={};for(const o of n)s[o]=i.data[o];return s})}}const Jk={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file, and — per table — CSV/JSON/SQL with a Raw vs. Visible vs. Structure Only choice.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function Xk(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,n)=>{const r=t.workspaceId();if(!r)return;const{AnchoredMenu:i}=await Ae(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>pr);return{AnchoredMenu:a}},void 0),s=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(s,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(o)try{if(o==="json"){const a=await Ao(t);await t.backend.saveFile(`workspace-${r}.db.json`,a,"application/json")}else if(o==="sql"){const a=await Mp(t);await t.backend.saveFile(`workspace-${r}.sql`,a,"application/sql")}}catch(a){t.ui.dialogs.toast(`Export failed: ${a.message}`,{kind:"error",title:"Export"})}}}),e.ui.registerTableButton({id:"table-export:menu",label:"Export",icon:"file_download",tooltip:"Export this table as CSV, JSON, or SQL",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Ae(async()=>{const{AnchoredMenu:d}=await Promise.resolve().then(()=>pr);return{AnchoredMenu:d}},void 0),i=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"csv",label:"CSV (.csv)",icon:"table_chart"},{id:"json",label:"JSON (.table.json)",icon:"data_object"},{id:"sql",label:"SQL (.sql)",icon:"storage"}]);if(!s)return;const o=await t.store.tables.findOne(n.tableId);if(!o)return;const a=await t.ui.dialogs.choice(`Export "${o.name}" as ${s.toUpperCase()} — which rows/columns?`,["Visible Data","Raw Data","Structure Only"],"Export table");if(!a)return;const c=a==="Visible Data"?"visible":a==="Raw Data"?"raw":"structure";try{const d=await t.store.rows(o.id).find(),f=Qk(o,c),p=Hp(o,d,c),b=Ne(o.code||o.name||"table"),y=c!=="structure"&&o.source!=null&&d.length===0;if(s==="csv")y&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting column definitions only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${b}.csv`,Jl(f,p),"text/csv");else if(s==="json"){const k=JSON.stringify(Ec(f,p),null,2);await t.backend.saveFile(`${b}.table.json`,k,"application/json")}else s==="sql"&&(y&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting the CREATE TABLE only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${b}.sql`,Pp(f,p),"application/sql"))}catch(d){t.ui.dialogs.toast(`Export failed: ${d.message}`,{kind:"error",title:"Export"})}}})}async function Ao(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const n=(await e.store.tables.find()).filter(o=>o.workspaceId===t),r=(await e.store.viewTemplates.find()).filter(o=>o.workspaceId===t),i=(await e.store.viewInstances.find()).filter(o=>o.workspaceId===t),s={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:r,viewInstances:i};for(const o of n){const a=await e.store.rows(o.id).find();s.tables.push({name:o.name,columns:o.columns,rows:a.map(c=>c.data),...o.title?{title:o.title}:{},...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},...o.filters?{filters:o.filters}:{},...o.labelColumn?{labelColumn:o.labelColumn}:{},...o.info?{info:o.info}:{},...o.deletedColumns?{deletedColumns:o.deletedColumns}:{},...o.readonly?{readonly:!0}:{},...o.source?{source:o.source}:{},...o.origin?{origin:o.origin}:{}})}return JSON.stringify(s,null,2)}const Zk=Object.freeze(Object.defineProperty({__proto__:null,init:Xk,meta:Jk,serializeWorkspace:Ao},Symbol.toStringTag,{value:"Module"})),e$={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},t$="gist:",Hd='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function n$(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).',help:'A classic token with the single "gist" scope is enough — nothing else is needed and nothing else should be granted. Give it an expiry you are happy with; the sync stops working when it lapses and you paste a new one here. Keep the value in the secrets store (General tab) and reference it, so it is never written into a synced setting.',helpUrl:"https://github.com/settings/tokens/new?scopes=gist&description=easyDBAccess",helpLinkLabel:"Create a token on GitHub"}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:Hd,tooltip:"Gist sync — push, pull, share…",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Ae(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>pr);return{AnchoredMenu:o}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(s)try{if(s==="push"||s==="pull"){const o=await r.open(i,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!o)return;const a=o;s==="push"?await c$(t,a):await Gp(t,a)}else s==="share"?await o$(t):s==="view"&&await a$(t)}catch(o){t.ui.dialogs.toast(`Gist ${s} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:Hd,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Ae(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>pr);return{AnchoredMenu:o}},void 0),i=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(s)try{s==="push"?await d$(t,n.tableId):s==="pull"?await h$(t,n.tableId):s==="view"&&await f$(t,n.tableId)}catch(o){t.ui.dialogs.toast(`Gist ${s} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}})}async function r$(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let n;try{n=atob(t)}catch{return}const r=i$(n);if(!r){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${r.gistId||"(new)"} (owner: ${r.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await Kp(e,r),await Gp(e))}async function Vp(e){const t=e.workspaceId();return`${t$}${t??"default"}`}async function Oi(e){const[t,n,r]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&r)return{user:t,gistId:n??"",token:r};const s=(await e.store.settings.findOne(await Vp(e)))?.value;if(s?.user&&s?.token){const o={user:s.user,gistId:s.gistId??"",token:s.token};return await Kp(e,o),o}return null}async function Kp(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({name:await Vp(e),value:t})}function i$(e){const t={};for(const n of e.split(";")){const r=n.indexOf("=");if(r<0)continue;const i=n.slice(0,r).trim(),s=n.slice(r+1).trim();i&&(t[i]=s)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function Tc(e){const t=await Oi(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function s$(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function o$(e){const t=await Oi(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const r=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(s$(t)))}`,{GistShareDialog:i}=await Ae(async()=>{const{GistShareDialog:s}=await import("./gist-share-dialog-BbmCn58L.js");return{GistShareDialog:s}},[]);await i.open(r)}async function a$(e){const t=await Oi(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}function l$(e){return e.endsWith(".table.json")&&!e.startsWith("_easydb")}function Wp(e,t){const n=new Set(t);return[...e].filter(r=>l$(r)&&!n.has(r)).sort()}async function c$(e,t="all"){const n=await Tc(e);if(!n)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=t!=="settings",s=t!=="data",o=(await e.store.tables.find()).filter(T=>T.workspaceId===r);if(i&&o.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const a=1e8,c=1e7,d={},f=[],p=[];if(i)for(const T of o){const Y=T.source!=null?[]:await e.store.rows(T.id).find(),L=JSON.stringify(Ec(T,Y),null,2),ne=`${T.name} (${(L.length/1e6).toFixed(2)} MB)`;L.length>a?f.push(ne):L.length>c&&p.push(ne),d[`${Ne(T.name)}.table.json`]={content:L}}if(f.length>0||p.length>0){const T=[];if(f.length>0&&T.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${f.join(`
`)}`),p.length>0&&T.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${p.join(`
`)}`),!await e.ui.dialogs.confirm(`${T.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(s){const T=(await e.store.viewTemplates.find()).filter(I=>I.workspaceId===r),Y=(await e.store.viewInstances.find()).filter(I=>I.workspaceId===r),L=(await e.store.settings.find()).map(I=>({name:I.name,value:I.value})),{kept:ne,withheld:W}=Uw(L);W.length>0&&e.ui.dialogs.toast(`Not pushed: ${W.join(", ")} — a secret is stored as its own value. Move it into the secrets store (Settings → General) and reference it with \${secret:name}.`,{kind:"warning",title:"Gist sync"}),d["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:T,viewInstances:Y,settings:ne},null,2)}}const b={...d};let y=[];if(i&&n.gistId){y=await u$(e,n,Object.keys(d));for(const T of y)b[T]=null}let k;if(n.gistId){const T=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:b,description:`easyDBAccess workspace: ${r}`})});if(!T.ok)throw new Error(await yi(T));k=await T.json()}else{const T=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:d})});if(!T.ok)throw new Error(await yi(T));k=await T.json(),n.gistId=k.id,await e.settings.set("gist-sync","gist_id",k.id)}const $=k.html_url??`https://gist.github.com/${n.user}/${k.id}`,C=t==="settings"?"settings":t==="data"?`${o.length} table${o.length===1?"":"s"} (data only)`:`${o.length} table${o.length===1?"":"s"}`,E=y.length>0?`  Removed ${y.length} file${y.length===1?"":"s"}.`:"";e.ui.dialogs.toast(`Pushed ${C}.${E}  ${$}`,{kind:"success",title:"Gist sync"})}async function Gp(e,t="all"){const n=t!=="settings",r=t!=="data",i=await Tc(e);if(!i||!i.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const s=e.workspaceId();if(!s)throw new Error("no active workspace");const o=await fetch(`https://api.github.com/gists/${i.gistId}`,{headers:{Authorization:`Bearer ${i.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await yi(o));const a=await o.json(),c=Object.entries(a.files).filter(([T])=>T.endsWith(".table.json")&&!T.startsWith("_easydb"));if(n&&c.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const d=(await e.store.tables.find()).filter(T=>T.workspaceId===s),f=new Map(d.map(T=>[T.name.toLowerCase(),T]));let p=0;const b=[],y=new Map;if(n){const{TopProgress:T}=await Ae(async()=>{const{TopProgress:L}=await import("./top-progress-BAYzvfMV.js");return{TopProgress:L}},[]),Y=T.begin("Pulling from gist…");try{for(const[L,[ne,W]]of c.entries())try{const I=await Gs(W),V=JSON.parse(I);if(!V.name||!Array.isArray(V.columns))throw new Error("unexpected file shape (missing name/columns)");let K;const ie=f.get(V.name.toLowerCase());if(ie){if(K=await e.store.tables.patch(ie.id,{title:V.title,columns:V.columns,...dl(V),updatedAt:Date.now()}),K.source==null){const de=e.store.rows(ie.id),H=await de.find();await de.bulkRemove(H.map(te=>te.id))}}else K=await e.store.tables.insert({id:Ee(),workspaceId:s,name:V.name,title:V.title,code:Ne(V.name),columns:V.columns,view:V.view??"table",...dl(V),updatedAt:Date.now()});if(K.source==null){const de=(V.rows??[]).map(H=>({id:Ee(),tableId:K.id,data:H,updatedAt:Date.now()}));await e.store.rows(K.id).bulkInsert(de)}y.set(V.name,K.id),p++}catch(I){b.push({file:ne,error:I.message})}finally{Y.fraction((L+1)/c.length)}}finally{Y.done()}}let k=0,$="",C=null;const E=r?a.files["_easydb.workspace.json"]:void 0;if(E)try{const T=await Gs(E),Y=JSON.parse(T),L=Y.viewTemplates??[],ne=Y.viewInstances??[],W=Y.settings??[];C=new Set(ne.map(V=>V.id));const I=await Lf(e.store.viewTemplates,s,L);for(const V of ne){let K;if(V.tableName&&(K=y.get(V.tableName)??f.get(V.tableName)?.id),K??=V.tableId,!K)continue;const ie=I.get(V.templateId)??V.templateId;await e.store.viewInstances.upsert({...V,workspaceId:s,tableId:K,templateId:ie}),k++}for(const V of W)await e.store.settings.upsert(V)}catch(T){$=`Workspace metadata import failed: ${T.message}`}if(b.length>0){const T=b.map(Y=>`• ${Y.file}: ${Y.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${p} of ${c.length} tables. ${b.length} failed:
${T}${$?`
${$}`:""}`,{kind:"warning",title:"Gist sync"})}else{const T=k>0?` (+${k} views)`:"",Y=t==="settings"?`Pulled settings${T}.`:`Pulled ${p} table${p===1?"":"s"}.${T}`;e.ui.dialogs.toast(Y,{kind:"success",title:"Gist sync"}),$&&e.ui.dialogs.toast($,{kind:"warning",title:"Gist sync"})}b.length===0&&await Yp(e,s,{tableNames:n?new Set([...y.keys()].map(T=>T.toLowerCase())):null,viewInstanceIds:C}),document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function u$(e,t,n){let r;try{const o=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)return[];const a=await o.json();r=Object.keys(a.files??{})}catch{return[]}const i=Wp(r,n);return i.length===0?[]:await e.ui.dialogs.confirm(`The gist has these table files that this workspace no longer has:

${ul(i)}

Delete them from the gist, so it matches this workspace? Keep them if another device pushed them and you have not pulled yet.`,"Delete table files missing from this workspace?")?i:[]}function ul(e,t=8){const n=e.slice(0,t).map(i=>`• ${i}`),r=e.length-n.length;return[...n,...r>0?[`• …and ${r} more`]:[]].join(`
`)}async function Yp(e,t,n){const r=n.tableNames?(await e.store.tables.find()).filter(c=>c.workspaceId===t&&!n.tableNames.has(c.name.toLowerCase())):[],i=n.viewInstanceIds?(await e.store.viewInstances.find()).filter(c=>c.workspaceId===t&&!n.viewInstanceIds.has(c.id)):[];if(r.length===0&&i.length===0)return;const s=[];if(r.length>0&&s.push(`${r.length} table${r.length===1?"":"s"}:
`+ul(r.map(c=>c.name))),i.length>0&&s.push(`${i.length} view${i.length===1?"":"s"}:
`+ul(i.map(c=>c.name))),!await e.ui.dialogs.confirm(`The gist does not have these local objects:

${s.join(`

`)}

Delete them, so this workspace matches the gist? A table goes with its rows. Keep them if this is local work you have not pushed yet.`,"Delete objects missing from the pull?"))return;for(const c of i)await e.store.viewInstances.remove(c.id);const{deleteTable:a}=await Ae(async()=>{const{deleteTable:c}=await Promise.resolve().then(()=>Pc);return{deleteTable:c}},void 0);for(const c of r)await a(c.id);e.ui.dialogs.toast(`Deleted ${r.length} table${r.length===1?"":"s"} and ${i.length} view${i.length===1?"":"s"}.`,{kind:"success",title:"Gist sync"})}async function d$(e,t){const n=await Tc(e);if(!n)return;if(!n.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=r.source!=null?[]:await e.store.rows(t).find(),s=JSON.stringify(Ec(r,i),null,2),o={[`${Ne(r.name)}.table.json`]:{content:s}},a=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:o})});if(!a.ok)throw new Error(await yi(a));e.ui.dialogs.toast(`Pushed "${r.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function h$(e,t){const n=await Oi(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=`${Ne(r.name)}.table.json`,s=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!s.ok)throw new Error(await yi(s));const a=(await s.json()).files[i];if(!a){await e.ui.dialogs.alert(`No file "${i}" in the gist for this table.`,"Gist sync");return}const c=await Gs(a),d=JSON.parse(c);if(!d.name||!Array.isArray(d.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:d.title,columns:d.columns,...dl(d),updatedAt:Date.now()})).source==null){const p=e.store.rows(t),b=await p.find();await p.bulkRemove(b.map(k=>k.id));const y=(d.rows??[]).map(k=>({id:Ee(),tableId:t,data:k,updatedAt:Date.now()}));await p.bulkInsert(y)}e.ui.dialogs.toast(`Pulled "${r.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function f$(e,t){const n=await Oi(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=`file-${Ne(r.name)}-table-json`;window.open(`https://gist.github.com/${n.user}/${n.gistId}#${i}`,"_blank","noopener")}function dl(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function Gs(e,t=n=>fetch(n)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const n=await t(e.raw_url);if(!n.ok)throw new Error(`raw fetch failed: ${n.status} ${n.statusText}`);return n.text()}async function yi(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const p$=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:Gs,init:n$,load:r$,meta:e$,offerPrune:Yp,staleTableFiles:Wp},Symbol.toStringTag,{value:"Module"})),Qp="server-sync:url";function Jp(e){return`server-sync:etag:${e}`}async function Xp(e){const n=(await e.store.settings.findOne(Qp))?.value;return typeof n!="string"||n.length===0?null:n.replace(/\/+$/,"")}async function m$(e,t){await e.store.settings.upsert({name:Qp,value:t.replace(/\/+$/,"")})}async function Zp(e,t){const r=(await e.store.settings.findOne(Jp(t)))?.value;return typeof r=="string"?r:null}async function Bn(e,t,n){await e.store.settings.upsert({name:Jp(t),value:n})}function Ro(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function Vd(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function em(e,t,n){const r=_i(n,t),i=(await e.store.tables.find()).filter(o=>o.workspaceId===t);for(const o of i){const a=e.store.rows(o.id),c=await a.find();await a.bulkRemove(c.map(d=>d.id)),await e.store.tables.remove(o.id)}let s=0;for(const o of r){const a=Ee(),c=await e.store.tables.insert({id:a,workspaceId:t,name:o.name,code:Ne(o.name),columns:o.columns,view:"table",...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},updatedAt:Date.now()}),d=o.rows.map(f=>({id:Ee(),tableId:c.id,data:f,updatedAt:Date.now()}));await e.store.rows(c.id).bulkInsert(d),s++}return s}const g$={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function b$(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Ae(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>pr);return{AnchoredMenu:o}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(s)try{s==="push"?await w$(t):s==="pull"&&await y$(t)}catch(o){t.ui.dialogs.toast(`${s==="push"?"Push":"Pull"} failed: ${o.message}`,{kind:"error",title:"Server sync"})}}})}async function w$(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await tm(e);if(!n)return;const r=await Ao(e),i=await Zp(e,t),s={"Content-Type":"application/json"};i&&(s["If-Match"]=`"${i}"`);let o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:s,body:r});if(o.status===412){const c=await o.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){c.currentEtag&&await Bn(e,t,c.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:r})}if(!o.ok)throw new Error(await nm(o));const a=Ro(o.headers.get("ETag"));a&&await Bn(e,t,a),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${n}.`,{kind:"success",title:"Server sync"})}async function y$(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await tm(e);if(!n||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const i=await fetch(`${n}/sync/${encodeURIComponent(t)}`);if(i.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!i.ok)throw new Error(await nm(i));const s=Ro(i.headers.get("ETag")),o=await i.json(),a=await em(e,t,o);s&&await Bn(e,t,s),e.ui.dialogs.toast(`Pulled ${a} table${a===1?"":"s"} from ${n}.`,{kind:"success",title:"Server sync"})}async function tm(e){const t=await Xp(e);if(t)return t;const n=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!n)return null;try{new URL(n)}catch{return await e.ui.dialogs.alert(`"${n}" is not a valid URL.`,"Server sync"),null}return await m$(e,n),n.replace(/\/+$/,"")}async function nm(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const v$=Object.freeze(Object.defineProperty({__proto__:null,init:b$,meta:g$},Symbol.toStringTag,{value:"Module"})),k$={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function $$(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const x$=Object.freeze(Object.defineProperty({__proto__:null,init:$$,meta:k$},Symbol.toStringTag,{value:"Module"})),rm="#dc2626",im="cell-invalid",S$=`border-color:${rm};background:#fef2f2`;function Ic(e,t){e.classList.add(im),e.style.border=`1px solid ${rm}`,e.style.background="#fef2f2",t&&(e.title=t)}function C$(e,t){if(e==null||typeof e=="string"&&e.trim()==="")return"empty";switch(t){case"boolean":return sm(e)==="invalid"?"invalid":"ok";case"number":return Number.isFinite(typeof e=="number"?e:Number(e))?"ok":"invalid";case"date":case"datetime":return Number.isNaN(Date.parse(String(e)))?"invalid":"ok";case"array":return ut(e).length===0?"empty":"ok";default:return"ok"}}const _$=/^\s*(true|1)\s*$/i,E$=/^\s*(false|0)\s*$/i;function sm(e){return e===!0||e===1?"true":e===!1||e===0?"false":e==null?"empty":typeof e=="string"?e.trim()===""?"empty":_$.test(e)?"true":E$.test(e)?"false":"invalid":"invalid"}function Oo(e,t="Edit"){const n=document.createElement("button");return n.type="button",n.title=t,n.textContent="✎",n.className="cell-pencil",n.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",n.addEventListener("mouseenter",()=>n.style.color="#374151"),n.addEventListener("mouseleave",()=>n.style.color="#9ca3af"),n.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),e()}),n}function Do(e,t){const n=document.createElement("span");return n.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%",e.style.flex="1 1 auto",e.style.minWidth="0",e.style.overflow="hidden",n.append(e,t),n}function Lo(e){const t=document.createElement("input");t.type="text",t.value=e.value,t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0;text-overflow:ellipsis";const n=()=>{e.isLive(t)&&e.onCommit(t.value)};return t.addEventListener("keydown",r=>{r.key==="Enter"?(r.preventDefault(),n()):r.key==="Escape"&&(r.preventDefault(),e.onCancel())}),t.addEventListener("blur",n),setTimeout(()=>{t.focus(),t.select()},0),t}const T$={id:"cell-date",name:"Cell Date",type:"cell-renderer",version:"0.1.0",description:"Renderer for date columns: a native `<input type=date>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"date\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-date.ts"};function I$(e){customElements.get("cell-date")||customElements.define("cell-date",A$),e.ui.registerCellRenderer("date","cell-date")}class A$ extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=Lo({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(R$(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",Ic(n,`Not a valid date: "${String(this._value)}"`),this.append(this._readonly?n:Do(n,this.pencil()));return}if(this._readonly){this.textContent=Cc(this._value);return}const t=document.createElement("input");t.type="date",t.value=oi(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return Oo(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function R$(e){return e==null||typeof e=="string"&&e.trim()===""?!1:oi(e)===""}const O$=Object.freeze(Object.defineProperty({__proto__:null,init:I$,meta:T$},Symbol.toStringTag,{value:"Module"})),D$={id:"cell-datetime",name:"Cell Datetime",type:"cell-renderer",version:"0.1.0",description:"Renderer for datetime columns: a native `<input type=datetime-local>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"datetime\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-datetime.ts"};function L$(e){customElements.get("cell-datetime")||customElements.define("cell-datetime",M$),e.ui.registerCellRenderer("datetime","cell-datetime")}class M$ extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=Lo({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(P$(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",Ic(n,`Not a valid datetime: "${String(this._value)}"`),this.append(this._readonly?n:Do(n,this.pencil()));return}if(this._readonly){this.textContent=jp(this._value);return}const t=document.createElement("input");t.type="datetime-local",t.value=ai(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return Oo(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function P$(e){return e==null||typeof e=="string"&&e.trim()===""?!1:ai(e)===""}const z$=Object.freeze(Object.defineProperty({__proto__:null,init:L$,meta:D$},Symbol.toStringTag,{value:"Module"})),N$={id:"cell-boolean",name:"Cell Boolean",type:"cell-renderer",version:"0.1.0",description:`Renderer for boolean columns: a checkbox for true/false, a grayed-out unchecked box for an empty cell (clickable to set true), and red-bordered raw text with a pencil for a stored value that is none of those. Apply by setting a column's renderer to "boolean".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="8 12 11 15 16 9"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-boolean.ts"};function j$(e){customElements.get("cell-boolean")||customElements.define("cell-boolean",F$),e.ui.registerCellRenderer("boolean","cell-boolean")}class F$ extends HTMLElement{constructor(){super(...arguments),this._value=!1,this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const i=Lo({value:this._value==null?"":String(this._value),onCommit:s=>this.commit(s),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:s=>this._editor===s});this.append(i),this._editor=i;return}const t=sm(this._value);if(t==="invalid"){const i=document.createElement("span");i.textContent=String(this._value),i.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",Ic(i,`Not a valid boolean: "${String(this._value)}"`),this.append(this._readonly?i:Do(i,this.pencil()));return}const n=document.createElement("input");n.type="checkbox",n.checked=t==="true";let r="transform:translateY(1px)";t==="empty"&&(r+=";opacity:0.45",n.title="Empty — no value stored. Click to set true."),this._readonly?n.disabled=!0:(r+=";cursor:pointer",n.addEventListener("change",()=>this.commit(n.checked))),n.style.cssText=r,this.append(n)}pencil(){return Oo(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const U$=Object.freeze(Object.defineProperty({__proto__:null,init:j$,meta:N$},Symbol.toStringTag,{value:"Module"})),B$={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function q$(e){customElements.get("cell-color")||customElements.define("cell-color",H$),e.ui.registerCellRenderer("color","cell-color")}class H$ extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,n,r){this.value=r}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const n=document.createElement("input");n.type="color",n.value=t,n.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",n.addEventListener("change",()=>this.commit(n.value)),this.append(n)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const V$=Object.freeze(Object.defineProperty({__proto__:null,init:q$,meta:B$},Symbol.toStringTag,{value:"Module"})),K$=[{bytes:[137,80,78,71,13,10,26,10],type:"image/png"},{bytes:[71,73,70,56],type:"image/gif"},{bytes:[255,216,255],type:"image/jpeg"},{bytes:[66,77],type:"image/bmp"}],hl=16;function W$(e){const t=(n,r)=>r.split("").every((i,s)=>e[n+s]===i.charCodeAt(0));return e.length>=12&&t(0,"RIFF")&&t(8,"WEBP")}function As(e){for(const{bytes:t,type:n}of K$)if(t.every((r,i)=>e[i]===r))return n;return W$(e)?"image/webp":null}function om(e){if(e==null)return null;const t=Y$(e);if(t){const s=Array.prototype.slice.call(t,0,hl),o=As(s);return o?`data:${o};base64,${cm(t)}`:null}if(typeof e!="string")return null;const n=e.trim();if(n==="")return null;if(n.startsWith("data:"))return J$(n);if(/^(https?:)?\/\//i.test(n)||n.startsWith("/")&&/\.(png|jpe?g|gif|webp|bmp|svg)(\?|#|$)/i.test(n))return n;const r=Q$(n);if(r){const s=lm(r.slice(0,hl*2)),o=As(s);return o?`data:${o};base64,${X$(r)}`:null}const i=am(n);if(i){const s=As(i);return s?`data:${s};base64,${n}`:null}return null}function G$(e){return om(e)!==null}function Y$(e){if(e instanceof Uint8Array)return e;if(Array.isArray(e))return e.length>0&&e.every(t=>typeof t=="number")?e:null;if(typeof e=="object"&&e!==null){const t=e;if(typeof t[0]!="number")return null;const n=[];for(let r=0;typeof t[String(r)]=="number";r++)n.push(t[String(r)]);return n}return null}function Q$(e){const t=/^[xX]\s*(['"])([0-9a-fA-F]*)\1$/.exec(e);return t?.[2]?t[2]:e.length>=8&&e.length%2===0&&/^[0-9a-fA-F]+$/.test(e)?e:null}function am(e){if(e.length<8||!/^[A-Za-z0-9+/]+={0,2}$/.test(e))return null;try{const t=e.slice(0,Math.ceil(hl*4/3));return[...atob(t.slice(0,t.length-t.length%4))].map(r=>r.charCodeAt(0))}catch{return null}}function J$(e){const t=/^data:([^;,]*)(;base64)?,([\s\S]*)$/.exec(e);if(!t)return null;if((t[1]??"").toLowerCase().startsWith("image/"))return e;const r=t[3]??"";if(!t[2])return null;const i=am(r),s=i&&As(i);return s?`data:${s};base64,${r}`:null}function lm(e){const t=[];for(let n=0;n+1<e.length;n+=2)t.push(parseInt(e.slice(n,n+2),16));return t}function cm(e){let n="";for(let r=0;r<e.length;r+=32768){const i=Array.prototype.slice.call(e,r,r+32768);n+=String.fromCharCode(...i)}return btoa(n)}function X$(e){return cm(lm(e))}const Z$={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function ex(e){customElements.get("cell-image")||customElements.define("cell-image",tx),e.ui.registerCellRenderer("image","cell-image")}class tx extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t??"",this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this.style.display="block",this.style.minWidth="0",this.style.overflow="hidden",this._editing){const r=document.createElement("span");r.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const i=Lo({value:typeof this._value=="string"?this._value:"",onCommit:o=>this.commit(o),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:o=>this._editor===o}),s=document.createElement("button");s.type="button",s.textContent="upload",s.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",s.addEventListener("mousedown",o=>o.preventDefault()),s.addEventListener("click",()=>this.pickFile()),r.append(i,s),this.append(r),this._editor=i;return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.4rem;min-width:0";const n=om(this._value);if(n){const r=document.createElement("img");r.src=n,r.alt="",r.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(r)}else{const r=document.createElement("span");if(r.style.color="#9ca3af",r.textContent="no image",t.append(r),!this._readonly){const i=document.createElement("button");i.type="button",i.textContent="upload",i.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",i.addEventListener("click",()=>this.pickFile()),t.append(i)}}this.append(this._readonly?t:Do(t,this.pencil()))}pencil(){return Oo(()=>{this._editing=!0,this.render()},"Edit the image URL")}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const n=t.files?.[0];if(!n)return;const r=new FileReader;r.onload=()=>this.commit(String(r.result)),r.readAsDataURL(n)}),t.click()}commit(t){const n=t!==this._value;this._value=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const nx=Object.freeze(Object.defineProperty({__proto__:null,init:ex,meta:Z$},Symbol.toStringTag,{value:"Module"})),um=200,dm=100;function rx(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<um||e.h<dm?null:{...e}}function Ys(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const Kd=640;function Mo(){return typeof window>"u"?!1:typeof window.matchMedia=="function"?window.matchMedia(`(max-width: ${Kd}px)`).matches:window.innerWidth<=Kd}const ix=["n","s","e","w","ne","nw","se","sw"];function sx(e,t,n,r){const i=r>0?r:1;return{...e,x:e.x+t/i,y:e.y+n/i}}function ox(e,t,n,r,i,s,o){const a=i>0?i:1,c=n/a,d=r/a;let{x:f,y:p,w:b,h:y}=e;return t.includes("e")&&(b=Math.max(s,e.w+c)),t.includes("s")&&(y=Math.max(o,e.h+d)),t.includes("w")&&(b=Math.max(s,e.w-c),f=e.x+(e.w-b)),t.includes("n")&&(y=Math.max(o,e.h-d),p=e.y+(e.h-y)),{x:f,y:p,w:b,h:y}}function ax(e){return e?.minimized?{status:"minimized",restoreStatus:e.maximized?"maximized":"normalized"}:e?.maximized?{status:"maximized",restoreStatus:"normalized"}:e?.smallified?{status:"smallified",restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}function Wd(e,t){if(e.status==="closed")return e;switch(t){case"close":return{...e,status:"closed"};case"minimize":return e.status==="minimized"?e:{status:"minimized",restoreStatus:e.status==="maximized"?"maximized":"normalized"};case"maximize":return{status:"maximized",restoreStatus:"normalized"};case"smallify":return e.status!=="normalized"?e:{...e,status:"smallified"};case"normalize":return e.status==="minimized"?{status:e.restoreStatus,restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}}function lx(e){return{minimized:e.status==="minimized",maximized:e.status==="maximized"||e.status==="minimized"&&e.restoreStatus==="maximized",smallified:e.status==="smallified"}}const cx="#01579b",ux="input, textarea, select, button, a, .jsPanel-controlbar";function Gd(e){for(const t of e.composedPath())if(t instanceof HTMLElement&&t.matches(ux))return!0;return!1}const dx={smallify:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 15 12 9 18 15"/></svg>',minimize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="19" x2="19" y2="19"/></svg>',maximize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="14" height="14" rx="1"/></svg>',normalize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="4" width="12" height="12" rx="1"/><rect x="4" y="8" width="12" height="12" rx="1"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>'};let Pa=100;function Yd(){let e=Pa;for(const t of document.querySelectorAll(".jsPanel")){const n=Number(t.style.zIndex);Number.isFinite(n)&&n>e&&(e=n)}return Pa=e+1,Pa}function hx(e){const t=Number(e.style.zIndex);for(const n of document.querySelectorAll(".jsPanel"))if(!(n===e||n.style.display==="none")&&Number(n.style.zIndex)>t)return!1;return!0}const fl=new Set,vi=new Set;function fx(){let e=null;for(const t of vi)t.style.display!=="none"&&(!e||Number(t.style.zIndex)>Number(e.style.zIndex))&&(e=t);return e}const hm=e=>{if(e.key!=="Escape"||e.defaultPrevented)return;const t=fx();t&&(e.preventDefault(),t.close())};function px(e){vi.size===0&&document.addEventListener("keydown",hm),vi.add(e)}function mx(e){vi.delete(e)&&vi.size===0&&document.removeEventListener("keydown",hm)}function gx(){return[...fl].sort((e,t)=>Number(t.style.zIndex)-Number(e.style.zIndex))}function Rn(e,t,n){const r=document.createElement("button");return r.type="button",r.className=`jsPanel-btn jsPanel-btn-${e}`,r.title=t,r.setAttribute("aria-label",t),r.innerHTML=dx[e]??"",r.addEventListener("click",i=>{i.stopPropagation(),n()}),r}function Po(e){const t=document.createElement("div");t.className="jsPanel",t.id=e.id;let n=e.color??cx;t.style.setProperty("--eda-panel-color",n);const r=document.createElement("div");r.className="jsPanel-hdr";const i=document.createElement("div");i.className="jsPanel-headerbar";const s=document.createElement("div");s.className="jsPanel-headerlogo",s.innerHTML=e.logo??"";const o=document.createElement("div");o.className="jsPanel-titlebar",o.tabIndex=-1,o.style.outline="none",o.addEventListener("pointerdown",()=>o.focus());const a=document.createElement("span");a.className="jsPanel-title",a.textContent=e.title,o.append(a);const c=document.createElement("div");c.className="jsPanel-controlbar",c.append(Rn("smallify","Collapse",()=>H("smallify")),Rn("minimize","Minimize",()=>H("minimize")),Rn("maximize","Maximize",()=>t.maximize()),Rn("normalize","Restore",()=>H("normalize")),Rn("close","Close",()=>t.close())),i.append(s,o,c),r.append(i);const d=document.createElement("div");d.className="jsPanel-content",d.append(e.content);const f=document.createElement("div");f.className="jsPanel-ftr",e.footerToolbar&&(f.classList.add("active"),f.append(e.footerToolbar)),t.append(r,d,f);const p=[];for(const q of ix){const Q=document.createElement("div");Q.className="eda-resize",Q.dataset.edge=q,t.append(Q),p.push({zone:Q,edge:q})}if(t.style.zIndex=String(Yd()),e.container.append(t),e.panelSize)t.style.width=`${e.panelSize.w}px`,t.style.height=`${e.panelSize.h}px`;else{const q=e.contentSize??{w:720,h:360};t.style.width=`${q.w}px`,t.style.height=`${q.h+r.offsetHeight+f.offsetHeight}px`}const b=e.position??"center",y=t.offsetWidth,k=e.container.clientWidth;b==="center"?(t.style.left=`${Math.max(0,(k-y)/2)}px`,t.style.top=`${Math.max(0,(e.container.clientHeight-t.offsetHeight)/2)}px`):"centerTopOffset"in b?(t.style.left=`${Math.max(0,(k-y)/2)}px`,t.style.top=`${b.centerTopOffset}px`):(t.style.left=`${b.x}px`,t.style.top=`${b.y}px`);let $=ax(e.boot),C=L(),E=null,T=null,Y=null;function L(){return{x:t.offsetLeft,y:t.offsetTop,w:t.offsetWidth,h:t.offsetHeight}}function ne(q){t.style.left=`${q.x}px`,t.style.top=`${q.y}px`,t.style.width=`${q.w}px`,t.style.height=`${q.h}px`}function W(){const q=e.viewport?.getState()??{x:0,y:0,scale:1};t.style.left="0px",t.style.top="0px",t.style.width=`${e.container.clientWidth}px`,t.style.height=`${e.container.clientHeight}px`,t.style.transformOrigin="0 0",t.style.transform=`translate(${-q.x/q.scale}px, ${-q.y/q.scale}px) scale(${1/q.scale})`}function I(){const q=e.viewport?.getState()??{x:0,y:0,scale:1},Q=q.scale||1;return{x:-q.x/Q,y:-q.y/Q,w:e.container.clientWidth/Q,h:e.container.clientHeight/Q}}function V(){W(),T??=e.viewport?.subscribe(W)??null,!Y&&typeof ResizeObserver<"u"&&(Y=new ResizeObserver(W),Y.observe(e.container))}function K(){T?.(),T=null,Y?.disconnect(),Y=null,t.style.transform="",t.style.transformOrigin=""}function ie(){const q=document.createElement("div");q.className="jsPanel-replacement",q.id=`${e.id}-min`,q.style.setProperty("--eda-panel-color",n);const Q=document.createElement("div");Q.className="jsPanel-headerlogo",Q.innerHTML=s.innerHTML;const ae=document.createElement("span");return ae.className="jsPanel-title",ae.textContent=a.textContent,q.append(Q,ae,Rn("normalize","Restore",()=>{H("normalize"),t.front()}),Rn("close","Close",()=>t.close())),q.addEventListener("click",we=>{we.target.closest("button")||(H("normalize"),t.front())}),q}function de(q){switch(q==="maximized"&&$.status!=="maximized"&&K(),q==="minimized"&&$.status!=="minimized"&&(E?.remove(),E=null,t.style.display=""),$.status){case"minimized":{q==="normalized"?C=L():q==="smallified"&&(C={...C,x:t.offsetLeft,y:t.offsetTop}),t.style.display="none";const Q=e.minimizeTo?document.querySelector(e.minimizeTo):null;E=ie(),(Q??e.container).append(E);break}case"maximized":q==="normalized"?C=L():q==="smallified"&&(C={...C,x:t.offsetLeft,y:t.offsetTop}),V();break;case"smallified":C=L(),t.style.height=`${r.offsetHeight}px`;break;case"normalized":q==="smallified"?C={...C,x:t.offsetLeft,y:t.offsetTop}:q==="maximized"&&Mo()&&(C=I()),ne(C);break}t.dataset.status=$.status}function H(q){const Q=$;$=Wd($,q),$.status!==Q.status&&(de(Q.status),e.onstatuschange?.(t))}Object.defineProperty(t,"status",{get:()=>$.status}),t.minimize=()=>H("minimize"),t.maximize=(q,Q)=>{H("maximize"),Q!==!0&&t.front()},t.normalize=()=>H("normalize"),t.smallify=()=>H("smallify"),t.front=(q,Q)=>{t.style.zIndex=String(Yd()),Q!==!1&&e.onfronted?.()},t.close=()=>{$.status!=="closed"&&($=Wd($,"close"),E?.remove(),K(),fl.delete(t),mx(t),t.remove(),e.onclosed?.())},t.setHeaderTitle=q=>{a.textContent=q;const Q=E?.querySelector(".jsPanel-title");Q&&(Q.textContent=q)},t.setHeaderLogo=q=>{s.innerHTML=q;const Q=E?.querySelector(".jsPanel-headerlogo");Q&&(Q.innerHTML=q)},t.setHeaderColor=q=>{n=q,t.style.setProperty("--eda-panel-color",n),E?.style.setProperty("--eda-panel-color",n)},t.centerInViewport=()=>{if($.status!=="normalized"&&$.status!=="smallified")return;const q=I(),Q=t.offsetWidth,ae=t.offsetHeight;ne({x:q.x+Math.max(0,(q.w-Q)/2),y:q.y+Math.max(0,(q.h-ae)/2),w:Q,h:ae})},t.persistFlags=()=>lx($),t.persistRect=()=>$.status==="smallified"?{...C,x:t.offsetLeft,y:t.offsetTop}:$.status==="minimized"||$.status==="maximized"?{...C}:L(),fl.add(t),e.closeOnEscape&&px(t),t.addEventListener("pointerdown",()=>{hx(t)||t.front()},!0);const te=q=>{q.addEventListener("pointerdown",Q=>{if(Q.button!==0||Gd(Q)||$.status==="maximized"||$.status==="minimized")return;const ae=L(),we=e.viewport?.getState().scale??1,xe=Q.pointerId,Me=Q.clientX,pe=Q.clientY;let yt=!1;const Lt=me=>{if(me.pointerId!==xe)return;yt=!0;const ze=sx(ae,me.clientX-Me,me.clientY-pe,we);t.style.left=`${ze.x}px`,t.style.top=`${ze.y}px`},Ke=me=>{me.pointerId===xe&&(q.removeEventListener("pointermove",Lt),q.removeEventListener("pointerup",Ke),q.removeEventListener("pointercancel",Ke),yt&&e.onmoved?.())};q.setPointerCapture(Q.pointerId),q.addEventListener("pointermove",Lt),q.addEventListener("pointerup",Ke),q.addEventListener("pointercancel",Ke)})};te(o),te(s),te(f);for(const{zone:q,edge:Q}of p)q.addEventListener("pointerdown",ae=>{if(ae.button!==0||$.status!=="normalized")return;const we=L(),xe=e.viewport?.getState().scale??1,Me=ae.pointerId,pe=ae.clientX,yt=ae.clientY;let Lt=!1;const Ke=ze=>{ze.pointerId===Me&&(Lt=!0,ne(ox(we,Q,ze.clientX-pe,ze.clientY-yt,xe,um,dm)))},me=ze=>{ze.pointerId===Me&&(q.removeEventListener("pointermove",Ke),q.removeEventListener("pointerup",me),q.removeEventListener("pointercancel",me),Lt&&e.onresized?.())};q.setPointerCapture(ae.pointerId),q.addEventListener("pointermove",Ke),q.addEventListener("pointerup",me),q.addEventListener("pointercancel",me)});return r.addEventListener("dblclick",q=>{Gd(q)||($.status==="maximized"?H("normalize"):t.maximize())}),$.status!=="normalized"?de("normalized"):t.dataset.status="normalized",t}let fm=null;function bx(e){fm=e}function Qs(){return fm}function zo(){return{getState:()=>Qs()?.snapshot()??{x:0,y:0,scale:1},subscribe:e=>Qs()?.subscribe(e)??(()=>{})}}function pm(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let wx=0;function mm(e,t){const n=document.createElement("button");return n.type="button",n.title=t,n.setAttribute("aria-label",t),n.innerHTML=e,n.style.cssText="flex:none;display:inline-flex;align-items:center;justify-content:center;padding:1px;background:none;border:0;color:#9ca3af;cursor:pointer;line-height:0",n.addEventListener("mouseenter",()=>n.style.color="#4b5563"),n.addEventListener("mouseleave",()=>n.style.color="#9ca3af"),n}const yx='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',vx='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>';function pl(e,t,n,r){const i=r?.readonly===!0,s=document.createElement("div");s.style.cssText="display:flex;flex-direction:column;gap:0.5rem;height:100%;box-sizing:border-box;padding:0.5rem";const o=document.createElement("textarea");o.value=t,o.style.cssText="flex:1 1 auto;width:100%;box-sizing:border-box;resize:none;font-family:monospace;font-size:0.85rem";const a=document.createElement("div");a.style.cssText="display:flex;justify-content:flex-end;gap:0.5rem;flex:none";const c=document.createElement("button");c.type="button",c.textContent=i?"Close":"Cancel",c.style.cssText="padding:0.3rem 0.8rem;cursor:pointer";const d=document.createElement("button");d.type="button",d.textContent="Save",d.style.cssText="padding:0.3rem 0.8rem;cursor:pointer;background:#7c3aed;color:#fff;border:0;border-radius:0.25rem",i?(o.readOnly=!0,o.style.background="#f9fafb",a.append(c)):a.append(c,d),s.append(o,a);const f=Po({id:`easydb-html-edit-${++wx}`,container:pm(),title:e,color:"#7c3aed",content:s,contentSize:{w:520,h:400},position:"center",closeOnEscape:!0,boot:{maximized:Mo()},minimizeTo:"#easydb-minimized-dock",viewport:zo()});c.addEventListener("click",()=>f.close()),d.addEventListener("click",()=>{n(o.value),f.close()}),o.addEventListener("keydown",p=>{i||p.key==="Enter"&&(p.ctrlKey||p.metaKey)&&(p.preventDefault(),d.click())}),setTimeout(()=>o.focus(),0)}const Ac=2e3;let ml=Ac;function kx(e){ml=typeof e=="number"&&Number.isFinite(e)&&e>0?Math.floor(e):Ac}let $x=0;class gm extends HTMLElement{constructor(){super(...arguments),this.language="Preview",this._value="",this._readonly=!1}toHtml(t){return t||null}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.render())}get value(){return this._value}set rawValue(t){this._source=t==null?"":String(t)}set column(t){this._label=t?.label}set sourceReadonly(t){const n=t===!0;this._readonly!==n&&(this._readonly=n,this.render())}get sourceReadonly(){return this._readonly}get title_(){return this._label??this.language}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const o=document.createElement("span");o.style.cssText=this._readonly?"color:#9ca3af":"color:#9ca3af;cursor:text",o.textContent="empty",this._readonly||(o.title="Click to edit",o.addEventListener("click",()=>this.openEditor())),this.append(o);return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%";const n=document.createElement("span"),r=av(this.toHtml(this._value)??this._value);n.textContent=r.length>ml?r.slice(0,ml)+"…":r,n.title=this._readonly?"Click to view the source":"Click to edit",n.style.cssText="flex:0 1 auto;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:text",n.addEventListener("click",o=>{o.stopPropagation(),this.openEditor()});const i=document.createElement("span");i.style.cssText="flex:1 1 auto";const s=mm(vx,"Open in a window");s.addEventListener("click",o=>{o.stopPropagation(),this.openWindow()}),t.append(n,i,s),this.append(t)}openWindow(){const t=document.createElement("div");t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box";const n=this.toHtml(this._value);if(n!==null)t.innerHTML=n;else{const r=document.createElement("pre");r.style.cssText="white-space:pre-wrap;word-break:break-word;margin:0;font-family:ui-monospace, monospace;",r.textContent=this._value,t.append(r)}Po({id:`easydb-preview-popup-${++$x}`,container:pm(),title:this.title_,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:{centerTopOffset:60},boot:{maximized:Mo()},closeOnEscape:!0,minimizeTo:"#easydb-minimized-dock",viewport:zo()})}openEditor(){const t=this._source!==void 0,n=t?this._source:this._value;if(this._readonly){pl(`View ${this.title_}`,n,()=>{},{readonly:!0});return}pl(`Edit ${this.title_}`,n,r=>{t?this._source=r:(this._value=r,this.render()),this.dispatchEvent(new CustomEvent("change",{detail:{value:r},bubbles:!0,composed:!0}))})}}const xx={id:"preview",name:"Preview",type:"cell-renderer",version:"0.4.0",description:`Shows a long value as a plain-text preview (first N characters); click to edit the source in a dialog, or use the popup icon to open the full value in a window. HTML is shown there as markup, and Markdown is recognised and converted first — so a Markdown column reads as formatted text without a script. Apply by setting a column's renderer to "preview". For direct in-cell rendering use the "html" renderer instead.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/preview.ts"};async function Qd(e){kx(await e.settings.get("preview","maxChars"))}function Sx(e){customElements.get("preview-cell")||customElements.define("preview-cell",Cx),e.ui.registerCellRenderer("preview","preview-cell"),e.ui.registerCellRenderer("html-preview","preview-cell"),e.ui.registerSettings("preview","Preview",[{key:"maxChars",label:"Max characters shown",type:"number",default:Ac,scope:"workspace",description:"A safety cap on how much text goes into a preview cell. What you SEE follows the column width — the cell ellipsizes like any other, so widen the column to read more. Lower this only to cut long values short regardless of width. Applies to cells rendered after the change (reload to refresh all). Shared with the `markdown` renderer."}]),Qd(e),e.events.on("app:ready",()=>void Qd(e))}class Cx extends gm{toHtml(t){const n=pv(t);return n==="html"?t:n==="markdown"?po(t):null}}const _x=Object.freeze(Object.defineProperty({__proto__:null,init:Sx,meta:xx},Symbol.toStringTag,{value:"Module"})),Ex={id:"html-render",name:"HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's value directly as HTML (unescaped, in full, no popup); a pencil on the right edits the source. Apply by setting a column's renderer to "html". For a truncated preview use "preview".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-render.ts"};function Tx(e){customElements.get("html-render-cell")||customElements.define("html-render-cell",Ix),e.ui.registerCellRenderer("html","html-render-cell")}class Ix extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML",this._readonly=!1}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.render())}get value(){return this._value}set rawValue(t){this._source=t==null?"":String(t)}set column(t){this._label=t?.label??"HTML"}set sourceReadonly(t){const n=t===!0;this._readonly!==n&&(this._readonly=n,this.render())}get sourceReadonly(){return this._readonly}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");t.style.cssText="display:flex;align-items:flex-start;gap:0.25rem;width:100%";const n=document.createElement("span");if(n.style.cssText="flex:1 1 auto;min-width:0",this._value?n.innerHTML=this._value:(n.style.color="#9ca3af",n.textContent="empty"),t.append(n),!this._readonly){const r=mm(yx,"Edit the HTML");r.addEventListener("click",i=>{i.stopPropagation(),this.openEditor()}),t.append(r)}this.append(t)}openEditor(){const t=this._source!==void 0;pl(`Edit ${this._label}`,t?this._source:this._value,n=>{t?this._source=n:(this._value=n,this.render()),this.dispatchEvent(new CustomEvent("change",{detail:{value:n},bubbles:!0,composed:!0}))})}}const Ax=Object.freeze(Object.defineProperty({__proto__:null,init:Tx,meta:Ex},Symbol.toStringTag,{value:"Module"})),Rx={id:"cell-markdown",name:"Markdown",type:"cell-renderer",version:"0.2.0",description:`For a column written in Markdown: the cell shows one line of plain text with the markers flattened, and the popup icon opens the formatted value in a window. Click the text to edit the Markdown source. Apply by setting a column's renderer to "markdown". Unlike "preview" it never guesses — the value is always read as Markdown.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 15V9l3 3 3-3v6"/><path d="M16 9v6"/><path d="M14 13l2 2 2-2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-markdown.ts"};function Ox(e){customElements.get("markdown-cell")||customElements.define("markdown-cell",Dx),e.ui.registerCellRenderer("markdown","markdown-cell")}class Dx extends gm{constructor(){super(...arguments),this.language="Markdown"}toHtml(t){return t?po(t):null}}const Lx=Object.freeze(Object.defineProperty({__proto__:null,init:Ox,meta:Rx},Symbol.toStringTag,{value:"Module"})),Mx={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function Px(e){customElements.get("cell-link")||customElements.define("cell-link",zx),e.ui.registerCellRenderer("link","cell-link")}class zx extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._editor=null,this._raw=null}set value(t){const n=t==null?"":String(t);this._value!==n&&(this._value=n,this._editing=!1,this.render())}get value(){return this._value}set rawValue(t){const n=t==null?"":String(t);this._raw!==n&&(this._raw=n,this._editing&&this.render())}get rawValue(){return this._raw??this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="",this._editor=null;const t=this._value,n=this._editing?null:Nx(t),r=!this._editing&&!n?jx(t):null,i=!this._editing&&!n&&!r?Fx(t):null;if(n||r||i){const s=document.createElement("span");s.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const o=document.createElement("a");o.href=n?t:r?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,n&&(o.target="_blank",o.rel="noopener noreferrer"),o.textContent=t,o.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",o.title=n?`Open ${t}`:r?`Email ${t}`:`Call ${t}`;const a=document.createElement("button");a.type="button",a.title="Edit",a.textContent="✎",a.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",a.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation(),this._editing=!0,this.render()}),s.append(o,a),this.append(s)}else{const s=document.createElement("input");s.type="text",s.value=this.rawValue,s.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",s.addEventListener("change",()=>{this._editor===s&&this.commit(s.value)}),s.addEventListener("keydown",o=>{o.key==="Enter"?(o.preventDefault(),this.commit(s.value)):o.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),s.addEventListener("blur",()=>{this._editor===s&&this.commit(s.value)}),this.append(s),this._editor=s,this._editing&&setTimeout(()=>{s.focus(),s.select()},0)}}commit(t){const n=t!==this.rawValue;this._raw===null?this._value=t:this._raw=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Nx(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function jx(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function Fx(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const n=t.replace(/\D/g,"");if(n.length<7||n.length>15)return null;const r=/[ ()\-.]/.test(t),i=t.startsWith("+");return!r&&!i&&n.length<10?null:t}const Ux=Object.freeze(Object.defineProperty({__proto__:null,init:Px,meta:Mx},Symbol.toStringTag,{value:"Module"})),Bx={id:"cell-tags",name:"Cell Tags",type:"cell-renderer",version:"0.1.0",description:'Renderer for `array` columns: each value in the cell shows as its own pill. A comma list ("foo,bar"), a JSON array ("[\\"Foo\\",\\"Bar\\"]") and a real array all read the same. A pencil edits the raw list; an empty list shows nothing.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2a2 2 0 0 1-.6-1.4V4a1 1 0 0 1 1-1h8a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.6z"/><circle cx="7.5" cy="7.5" r="1.2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-tags.ts"};function qx(e){customElements.get("cell-tags")||customElements.define("cell-tags",Vx),e.ui.registerCellRenderer("tags","cell-tags")}const Hx="flex:0 1 auto;min-width:0;display:inline-block;max-width:100%;padding:0 0.4rem;border:1px solid #d1d5db;border-radius:999px;background:#f3f4f6;color:#374151;font-size:0.85em;line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";class Vx extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._readonly=!1,this._editor=null}set value(t){const n=t==null?"":String(t);this._value!==n&&(this._value=n,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=t===!0;this._readonly!==n&&(this._readonly=n,this._readonly&&(this._editing=!1),this.render())}get readonly(){return this._readonly}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing&&!this._readonly){this.renderEditor();return}const t=ut(this._value),n=document.createElement("span");n.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";for(const r of t){const i=document.createElement("span");i.className="tag-pill",i.textContent=r,i.title=r,i.style.cssText=Hx,n.append(i)}this._readonly||n.append(this.pencil()),this.append(n)}pencil(){const t=document.createElement("button");return t.type="button",t.title="Edit the list",t.textContent="✎",t.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),this._editing=!0,this.render()}),t}renderEditor(){const t=document.createElement("input");t.type="text",t.value=ut(this._value).length===0?"":this._value,t.title="Comma-separated, or a JSON array",t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",t.addEventListener("change",()=>{this._editor===t&&this.commit(t.value)}),t.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),this.commit(t.value)):n.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),t.addEventListener("blur",()=>{this._editor===t&&this.commit(t.value)}),this.append(t),this._editor=t,setTimeout(()=>{t.focus(),t.select()},0)}commit(t){const n=t!==this._value;this._value=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Kx=Object.freeze(Object.defineProperty({__proto__:null,init:qx,meta:Bx},Symbol.toStringTag,{value:"Module"})),li={id:"auto-renderer",name:"Auto Renderer",type:"cell-renderer",version:"0.1.0",description:"After any import, gives columns a renderer based on their values: link for URLs, image for image URLs, preview for markup or long text.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 3 8 6.5 4.5 8 8 9.5 9.5 13 11 9.5 14.5 8 11 6.5 9.5 3z"/><path d="M17.5 12 16.75 14 15 14.75 16.75 15.5 17.5 17.5 18.25 15.5 20 14.75 18.25 14 17.5 12z"/><path d="M4 17h9"/><path d="M4 21h6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-renderer.ts"},Wx=120,bm=50,Gx=/\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)(\?|#|$)/i,Yx=/<[a-z][a-z0-9-]*(\s[^<>]*)?\/?>/i;function wm(e){return/^https?:\/\/\S+$/i.test(e)}function Qx(e){return/^data:image\//i.test(e)?!0:wm(e)?Gx.test(e):G$(e)}function ym(e,t){if(e==="array")return"tags";if(e!=="string")return;const n=[];for(const i of t){if(i==null)continue;const s=typeof i=="string"?i.trim():String(i).trim();s&&n.push(s)}if(n.length===0)return;if(n.every(Qx))return"image";if(n.every(wm))return"link";if(n.some(i=>Yx.test(i))||n.reduce((i,s)=>i+s.length,0)/n.length>Wx)return"preview"}function Rc(e,t){return t.length===0?[...e]:e.map(n=>{if(n.renderer)return n;const r=ym(n.type,t.map(i=>i[n.field]));return r?{...n,renderer:r}:n})}function Jx(e){e.events.on("import:after",({tableId:t})=>{Xx(e,t)}),e.ui.registerColumnEditorAction({id:"auto-renderer:guess",label:"Guess renderers",icon:"auto_fix_high",tooltip:"Pick a renderer for each column from what its values look like",async run(t,{columns:n,tableId:r}){if(!r)return t.ui.dialogs.toast("Guessing needs rows to look at — import or add data first.",{kind:"info",title:li.name}),null;const i=(await t.store.rows(r).find()).slice(0,bm);if(i.length===0)return t.ui.dialogs.toast("This table has no rows to learn from yet.",{kind:"info",title:li.name}),null;const s=n.map(({renderer:c,...d})=>d),o=Rc(s,i.map(c=>c.data)),a=o.filter((c,d)=>c.renderer!==n[d]?.renderer).length;return t.ui.dialogs.toast(a===0?"No renderer fits these values — columns left as they are.":`Set ${a} renderer${a===1?"":"s"}. Press Save to keep them.`,{kind:a===0?"info":"success",title:li.name}),o}})}async function Xx(e,t){try{const n=await e.store.tables.findOne(t);if(!n||n.columns.length===0||n.columns.every(s=>s.renderer))return;const r=(await e.store.rows(t).find()).slice(0,bm);if(r.length===0)return;const i=Rc(n.columns,r.map(s=>s.data));if(i.every((s,o)=>s.renderer===n.columns[o]?.renderer))return;await e.store.tables.upsert({...n,columns:i,updatedAt:Date.now()})}catch(n){e.events.emit("plugin:error",{url:li.id,phase:"runtime",error:n})}}const Zx=Object.freeze(Object.defineProperty({__proto__:null,inferRenderer:ym,init:Jx,meta:li,withInferredRenderers:Rc},Symbol.toStringTag,{value:"Module"}));function Rs(e){return e.source?e.source.type==="url"?"referenced":"connected":e.origin?"imported":"normal"}function e1(e){return!!(e.source||e.origin)}const t1="#01579b",n1="#6d28d9";function Jd(e){return e1(e)?n1:t1}const sr='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" role="img"',Xd={normal:`<svg ${sr} aria-label="Local table"><title>Local table</title><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,imported:`<svg ${sr} aria-label="Imported table (snapshot)"><title>Imported table (snapshot)</title><rect x="3" y="11" width="18" height="10" rx="1"/><line x1="7" y1="15" x2="7" y2="17"/><line x1="12" y1="15" x2="12" y2="17"/><line x1="17" y1="15" x2="17" y2="17"/><path d="M12 2v7"/><polyline points="8 6 12 9 16 6"/></svg>`,referenced:`<svg ${sr} aria-label="Referenced table (read-only)"><title>Referenced table (read-only)</title><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"/></svg>`,connected:`<svg ${sr} aria-label="Connected table (live)"><title>Connected table (live)</title><line x1="9" y1="2" x2="9" y2="7"/><line x1="15" y1="2" x2="15" y2="7"/><rect x="6" y="7" width="12" height="7" rx="2"/><path d="M9 14v3a3 3 0 0 0 6 0v-3"/></svg>`},r1=`<svg ${sr} aria-label="View"><title>View</title><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,i1=`<svg ${sr} aria-label="Visualization"><title>Visualization</title><path d="M3 3v18h18"/><rect x="6" y="12" width="3" height="6"/><rect x="11" y="8" width="3" height="10"/><rect x="16" y="5" width="3" height="13"/></svg>`;var s1=Object.defineProperty,o1=Object.getOwnPropertyDescriptor,No=(e,t,n,r)=>{for(var i=r>1?void 0:r?o1(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&s1(t,n,i),i};function a1(e,t,n){(Nt.instance??c1()).show(e,t,n)}function l1(e){if(!e)return null;const t=Rs(e);if(t==="connected"||t==="referenced"){const n=e.source?.type??"remote",r=e.source?.writable?"Edits you make are written back to the source.":"It is read-only — edits are not saved back to the source.";return{label:`Connected (live ${n})`,note:`This table is connected to a live ${n} backend: its rows are fetched from the source on demand and are not stored locally. ${r} Closing its window just disconnects the view — the source data is untouched.`}}return t==="imported"?{label:"Imported (snapshot)",note:"This table is a local snapshot imported once from its origin. The rows live in this browser, so edits stay local; use Refresh to re-fetch the latest data from the origin.",...e.origin?{url:e.origin.url}:{}}:{label:"Local",note:"This table was created in the app and is stored locally in your browser."}}function c1(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let Nt=class extends $e{constructor(){super(...arguments),this.name="",this.info=null,this.provenance=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),Nt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Nt.instance===this&&(Nt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e)}show(e,t,n){this.name=e,this.info=t,this.provenance=n??null,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,n){if(!t&&!n)return X;const r=n?v`<a href=${n} target="_blank" rel="noopener noreferrer">${t||n}</a>`:v`${t}`;return v`<dt>${e}</dt>
      <dd>${r}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl),n=l1(this.provenance);return v`
      <dialog @cancel=${this.close} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${this.name}</h2>
            <div class="header-actions">
              <button type="submit" class="ghost">Close</button>
            </div>
          </div>
          <div class="dialog-body">
            ${n?v`<div class="kind">
                  <span class="kind-label">${n.label}</span>
                  <p class="kind-note">${n.note}</p>
                  ${n.url?v`<div class="kind-origin">
                        <a href=${n.url} target="_blank" rel="noopener noreferrer">${n.url}</a>
                      </div>`:X}
                </div>`:X}
            ${e?.descriptionHtml?v`<div class="desc">${lr(e.descriptionHtml)}</div>`:e?.description?v`<div class="desc">${e.description}</div>`:X}
            ${t?v`<dl>${this.row("Source",e?.source,e?.sourceUrl)} ${this.row("License",e?.license,e?.licenseUrl)} ${this.row("About",e?.about,e?.aboutUrl)}</dl>`:X}
            ${!e?.description&&!e?.descriptionHtml&&!t&&!n?v`<p class="empty">No additional information.</p>`:X}
          </div>
        </form>
      </dialog>
    `}};Nt.instance=null;Nt.styles=[mt,Se`
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
      .kind {
        margin: 0 0 0.5rem;
        padding: 0.5rem 0.6rem;
        background: #f3f4f6;
        border-radius: 0.35rem;
        font-size: 0.85rem;
      }
      .kind .kind-label {
        font-weight: 600;
        color: #374151;
      }
      .kind .kind-note {
        margin: 0.2rem 0 0;
        color: #4b5563;
        line-height: 1.45;
      }
      .kind .kind-origin {
        margin: 0.25rem 0 0;
        word-break: break-all;
      }
    `];No([z()],Nt.prototype,"name",2);No([z()],Nt.prototype,"info",2);No([z()],Nt.prototype,"provenance",2);Nt=No([Oe("table-info-dialog")],Nt);const u1=.25,d1=4;function h1(e){return Math.min(d1,Math.max(u1,e))}function Zd(e,t,n){return{x:e.x+t,y:e.y+n,scale:e.scale}}const Zr={x:0,y:0,scale:1};function eh(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function f1(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function p1(e,t){let n={...Zr};t.style.transformOrigin="0 0";const r=new Set,i=()=>{t.style.transform=`translate(${n.x}px, ${n.y}px) scale(${n.scale})`;for(const H of r)H({...n})};let s="none",o={...Zr},a=0,c=0,d=0,f=0,p=0,b=0;const y=(H,te)=>{const q=e.getBoundingClientRect();return{x:H-q.left,y:te-q.top}},k=H=>{if(H.touches.length===2){s="pinch",o={...n};const[te,q]=[H.touches[0],H.touches[1]];d=eh(te,q)||1;const Q=y((te.clientX+q.clientX)/2,(te.clientY+q.clientY)/2);f=(Q.x-n.x)/n.scale,p=(Q.y-n.y)/n.scale,H.preventDefault();return}if(H.touches.length===1&&!f1(H.target)){const te=H.timeStamp;if(te-b<300){n={...Zr},i(),b=0,s="none",H.preventDefault();return}b=te,s="pan",o={...n},a=H.touches[0].clientX,c=H.touches[0].clientY}else s="none"},$=H=>{if(s==="pan"&&H.touches.length===1){const te=H.touches[0];n=Zd(o,te.clientX-a,te.clientY-c),i(),H.preventDefault()}else if(s==="pinch"&&H.touches.length>=2){const[te,q]=[H.touches[0],H.touches[1]],Q=h1(o.scale*(eh(te,q)/d)),ae=y((te.clientX+q.clientX)/2,(te.clientY+q.clientY)/2);n={x:ae.x-f*Q,y:ae.y-p*Q,scale:Q},i(),H.preventDefault()}},C=H=>{H.touches.length===0?s="none":H.touches.length===1&&s==="pinch"&&(s="pan",o={...n},a=H.touches[0].clientX,c=H.touches[0].clientY)};let E=!1,T={...Zr},Y=0,L=0,ne=!1;const W=(H,te)=>{const q=e.getBoundingClientRect();return H>=q.left&&H<=q.right&&te>=q.top&&te<=q.bottom},I=H=>{if(!E)return;const te=H.clientX-Y,q=H.clientY-L;!ne&&Math.hypot(te,q)<4||(ne=!0,document.body.style.cursor="grabbing",n=Zd(T,te,q),i(),H.preventDefault())},V=()=>{E&&(E=!1,document.body.style.cursor="",window.removeEventListener("mousemove",I,!0),window.removeEventListener("mouseup",K,!0))};function K(){V()}const ie=H=>{H.button===2&&W(H.clientX,H.clientY)&&(E=!0,ne=!1,T={...n},Y=H.clientX,L=H.clientY,window.addEventListener("mousemove",I,!0),window.addEventListener("mouseup",K,!0))},de=H=>{ne&&(H.preventDefault(),ne=!1)};return e.addEventListener("touchstart",k,{passive:!1}),e.addEventListener("touchmove",$,{passive:!1}),e.addEventListener("touchend",C),e.addEventListener("touchcancel",C),window.addEventListener("mousedown",ie,!0),window.addEventListener("contextmenu",de,!0),{snapshot:()=>({...n}),reset:()=>{n={...Zr},i()},restore:H=>{n={...H},i()},subscribe:H=>(r.add(H),()=>r.delete(H)),dispose:()=>{e.removeEventListener("touchstart",k),e.removeEventListener("touchmove",$),e.removeEventListener("touchend",C),e.removeEventListener("touchcancel",C),window.removeEventListener("mousedown",ie,!0),window.removeEventListener("contextmenu",de,!0),V()}}}const dn=48,vm=80;function th(e,t,n,r=vm){const i=t-n-r;return Number.isFinite(e)?Math.max(dn,Math.min(Math.round(e),Math.max(dn,Math.round(i)))):dn}function m1(e,t,n=vm){const r=e.map(d=>Math.max(dn,Math.round(d)));if(r.length===0)return r;const i=Math.round(t-n),s=dn*r.length;if(i<=s)return r.map(()=>dn);if(r.reduce((d,f)=>d+f,0)<=i)return r;const o=d=>r.reduce((f,p)=>f+Math.min(p,d),0);let a=dn,c=Math.max(...r);for(;a<c;){const d=Math.ceil((a+c)/2);o(d)<=i?a=d:c=d-1}return r.map(d=>Math.min(d,a))}function g1(e){return[...e].map((t,n)=>({p:t,i:n})).sort((t,n)=>t.p.order-n.p.order||t.i-n.i).map(({p:t})=>t)}const ei=5;function km(){const e=document.createElement("div");e.className="panel-stack",e.style.cssText="display:flex;flex-direction:column;height:100%;min-height:0;overflow:hidden";const t=document.createElement("div");t.className="panel-stack-above",t.style.cssText="display:flex;flex-direction:column;flex:none;min-height:0";const n=document.createElement("div");n.className="panel-stack-primary",n.style.cssText="flex:1;min-height:0;display:flex;flex-direction:column;overflow:hidden";const r=document.createElement("div");r.className="panel-stack-below",r.style.cssText="display:flex;flex-direction:column;flex:none;min-height:0",e.append(t,n,r);const i=new Map;let s=null;const o=()=>e.clientHeight||0,a=k=>{let $=0;for(const C of i.values())C.id!==k&&($+=C.size+ei);return $},c=()=>{for(const k of i.values())k.wrap.style.height=`${k.size}px`},d=()=>{for(const k of["above","below"]){const $=k==="above"?t:r,C=g1([...i.values()].filter(E=>E.edge===k));for(const E of C)k==="above"?$.append(E.wrap,E.splitter):$.append(E.splitter,E.wrap)}},f=()=>{const k=o();if(k<=0||i.size===0)return;const $=[...i.values()],C=$.length*ei,E=m1($.map(T=>T.size),k-C);$.forEach((T,Y)=>{T.size=E[Y]??dn}),c()},p=()=>{s||i.size===0||(s=new ResizeObserver(()=>f()),s.observe(e))},b=()=>{i.size>0||(s?.disconnect(),s=null)},y=k=>{const $=document.createElement("div");return $.className="panel-stack-splitter",$.style.cssText=`flex:none;height:${ei}px;cursor:ns-resize;background:rgba(127,127,127,.28);touch-action:none`,$.setAttribute("role","separator"),$.setAttribute("aria-orientation","horizontal"),$.title="Drag to resize",$.addEventListener("pointerdown",C=>{const E=k();C.preventDefault(),$.setPointerCapture(C.pointerId);const T=C.clientY,Y=E.size,L=W=>{const I=W.clientY-T,V=E.edge==="above"?I:-I;E.size=th(Y+V,o()-i.size*ei,a(E.id)),c()},ne=()=>{$.releasePointerCapture(C.pointerId),$.removeEventListener("pointermove",L),$.removeEventListener("pointerup",ne),$.removeEventListener("pointercancel",ne),E.onResized?.(E.size)};$.addEventListener("pointermove",L),$.addEventListener("pointerup",ne),$.addEventListener("pointercancel",ne)}),$};return{root:e,setPrimary(k){n.replaceChildren(),k&&(k.style.flex="1",k.style.minHeight="0",n.append(k))},addPane(k){i.has(k.id)&&this.removePane(k.id);const $=document.createElement("div");$.className="panel-stack-pane",$.style.cssText="flex:none;min-height:0;overflow:hidden;display:flex;flex-direction:column",k.el.style.flex="1",k.el.style.minHeight="0",$.append(k.el);const C={...k,wrap:$,splitter:document.createElement("div")};C.splitter=y(()=>C),C.size=th(k.size,o()-(i.size+1)*ei,a(k.id)),i.set(k.id,C),d(),c(),p(),f()},removePane(k){const $=i.get(k);$&&(i.delete(k),$.splitter.remove(),$.wrap.remove(),b(),f())},hasPane(k){return i.has(k)},paneIds(){return[...i.keys()]},refit:f,destroy(){s?.disconnect(),s=null,i.clear(),e.replaceChildren()}}}const Oc=new Map,gl=new Set;function nh(e){return e.kind==="table"?`table:${e.tableId}`:`view:${e.viewInstanceId}`}function $m(e,t){Oc.set(e,t),xm()}function Js(e){Oc.delete(e)&&xm()}function rh(e){return Oc.get(e)??null}function b1(e){return gl.add(e),()=>gl.delete(e)}function xm(){for(const e of[...gl])try{e()}catch(t){console.warn("[panel-stacks] listener failed",t)}}const ps=new Map;function Tr(e,t){const r=(ps.get(e)??Promise.resolve()).then(t,t);return ps.set(e,r),r.finally(()=>{ps.get(e)===r&&ps.delete(e)}),r}const Xs="easydb:visible-count";function Sm(e,t,n){e&&document.dispatchEvent(new CustomEvent(Xs,{detail:{key:e,count:t,total:n}}))}function Cm(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}const bl="easydb:import-progress";function w1(e,t){if(t<=0)return` (${e.toLocaleString()})`;const n=Math.min(100,Math.round(e/t*100));return` (${e.toLocaleString()}/${t.toLocaleString()} · ${n}%)`}let za=0;function _m(){return za=Math.max(Date.now(),za+1),za}const jo=new Map;function Em(e,t){jo.set(e,t)}function Fo(e){jo.delete(e)}function y1(e){return jo.has(e)}function v1(e){try{jo.get(e)?.()}catch{}}const fn=(()=>{const e=new URLSearchParams(location.search).get("minimize");return e===null?!1:!/^(0|false|no)$/i.test(e)})();function k1(e){return e.filter(t=>!t.minimized).slice().sort((t,n)=>(t.z??-1/0)-(n.z??-1/0)).map(t=>t.id)}let ih=!1;async function $1(){ih||(ih=!0,document.addEventListener("easydb:restack-windows",()=>void sh())),await sh()}async function sh(){if(fn)return;const e=await J();for(let t=0;t<=12;t++){const[n,r]=await Promise.all([e.store.tables.find(),e.store.viewInstances.find()]),i=[...n.filter(o=>o.workspaceId===e.workspaceId&&!o.windowGeometry?.closed).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0})),...r.filter(o=>o.workspaceId===e.workspaceId&&o.open).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0}))],s=k1(i);if(t<12&&!s.every(o=>y1(o))){await new Promise(o=>setTimeout(o,80));continue}for(const o of s)v1(o);return}}const x1=12;function S1(e,t,n,r,i=x1){const s=oh(e.x,t.x,t.w,n,e.scale,i),o=oh(e.y,t.y,t.h,r,e.scale,i);return s===e.x&&o===e.y?null:{...e,x:s,y:o}}function oh(e,t,n,r,i,s){const o=t*i+e,a=n*i,c=o+a,d=r-s*2;return a>=d?o<=s&&c>=r-s?e:s-t*i:o<s?s-t*i:c>r-s?r-s-a-t*i:e}function Tm(e){if(e.status==="minimized"&&e.normalize(),Mo()){e.status!=="maximized"&&e.maximize(),e.front();return}e.status!=="maximized"&&C1(e),e.front()}function C1(e){const t=Qs(),n=document.getElementById("easydb-panels");if(!t||!n)return;const r=S1(t.snapshot(),{x:e.offsetLeft,y:e.offsetTop,w:e.offsetWidth,h:e.offsetHeight},n.clientWidth,n.clientHeight);r&&t.restore(r)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Im=Symbol.for(""),_1=e=>{if(e?.r===Im)return e?._$litStatic$},wl=e=>({_$litStatic$:e,r:Im}),ah=new Map,E1=e=>(t,...n)=>{const r=n.length;let i,s;const o=[],a=[];let c,d=0,f=!1;for(;d<r;){for(c=t[d];d<r&&(s=n[d],(i=_1(s))!==void 0);)c+=i+t[++d],f=!0;d!==r&&a.push(s),o.push(c),d++}if(d===r&&o.push(t[r]),f){const p=o.join("$$lit$$");(t=ah.get(p))===void 0&&(o.raw=o,ah.set(p,t=o)),n=a}return e(t,...n)},yl=E1(v),ms=e=>Math.max(0,Math.round(e)).toLocaleString();function Dc(e){if(!e)return null;const{shown:t,total:n,searching:r,searched:i}=e;if(r){const s=i&&i>0?`the first ${ms(i)} rows`:"the rows loaded so far";return t===0?`Nothing found in ${s} — this table is bigger, so there may be matches further in. Filter a column to search the rest.`:`Found ${ms(t)} in ${s} — there may be more further in. Filter a column to search the rest.`}return`Showing the first ${ms(t)} of ${ms(n)}+ matching rows. Narrow the filter to see the rest.`}const _t=Se`
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
`;var T1=Object.defineProperty,I1=Object.getOwnPropertyDescriptor,bn=(e,t,n,r)=>{for(var i=r>1?void 0:r?I1(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&T1(t,n,i),i};function Na(e){return hn([{...e,negate:!1}])}let it=class extends $e{constructor(){super(...arguments),this.values=[],this.blanks=0,this.current="",this.note="",this.refreshing=!1,this.onRefresh=null,this.search="",this.states=new Map,this.resolveFn=null,this.onChange=null,this.exactValues=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)},this.onKey=e=>{e.key==="Escape"&&(e.preventDefault(),this.close(null))}}async refresh(){if(!(!this.onRefresh||this.refreshing)){this.refreshing=!0;try{const e=await this.onRefresh();this.values=e.values,this.blanks=e.blanks,this.note=e.note}finally{this.refreshing=!1}}}open(e,t,n,r=0,i,s){return this.values=t,this.blanks=r,this.onChange=i??null,this.exactValues=s?.exact===!0,this.note=s?.note??"",this.onRefresh=s?.onRefresh??null,this.refreshing=!1,this.states=new Map(Vn(n??"").map(o=>[Na(o),{state:o.negate?"not":"on",token:o}])),this.current=n??"",this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(o=>{this.resolveFn=o,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0),document.addEventListener("keydown",this.onKey,!0)})}cycle(e,t=this.exactValues){const n=t?{term:e,negate:!1,exact:!0}:{term:e,negate:!1},r=Na(n),i=new Map(this.states),s=i.get(r);s===void 0?i.set(r,{state:"on",token:n}):s.state==="on"?i.set(r,{state:"not",token:s.token}):i.delete(r),this.states=i;const o=[...i.values()].map(a=>({...a.token,negate:a.state==="not"}));this.current=hn(o),this.onChange?.(this.current)}close(e){this.onChange=null,document.removeEventListener("mousedown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),it.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),it.instance===this&&(it.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(o=>o.value.toLowerCase().includes(e)),n=this.blanks>0&&"(blanks)".includes(e),r=(o,a=this.exactValues)=>this.states.get(Na(a?{term:o,negate:!1,exact:!0}:{term:o,negate:!1}))?.state,i=o=>v` <span class=${`cb${o?` ${o}`:""}`}>${o==="on"?"✓":o==="not"?"✕":""}</span> `,s=o=>o==="on"?"Included — click to exclude":o==="not"?"Excluded — click to clear":"Click to include → exclude → off";return v`
      <header>
        <span class="mi sm">search</span>
        <input type="text" autofocus placeholder="Filter values…" .value=${this.search} @input=${o=>this.search=o.target.value} />
        <button class="icon" title="Close" @click=${()=>this.close(null)}>
          <span class="mi sm">close</span>
        </button>
      </header>
      <div class="hint">Click a value: include (✓) → exclude (✕) → off.</div>
      ${t.length===0&&!n?v`<div class="empty">No matching values.</div>`:v`<ul>
            ${n?v`
                  <li class="blanks" title=${s(r("NULL",!1))} @click=${()=>this.cycle("NULL",!1)}>
                    <span class="left">
                      ${i(r("NULL",!1))}
                      <span class="label"><em>(Blanks)</em></span>
                    </span>
                    <span class="count">${this.blanks}</span>
                  </li>
                `:""}
            ${t.slice(0,500).map(o=>{const a=r(o.value);return v`
                <li title=${s(a)} @click=${()=>this.cycle(o.value)}>
                  <span class="left">
                    ${i(a)}
                    <span class="label">${o.value}</span>
                  </span>
                  <span class="count">${o.count}</span>
                </li>
              `})}
          </ul>`}
      ${this.values.length>500?v`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      ${this.note?v`<div class="cap note-row" data-testid="facet-note">
            <span>${this.note}</span>
            ${this.onRefresh?v`<button class="icon" data-testid="facet-refresh" title="Read the real list of values from the whole table" ?disabled=${this.refreshing} @click=${()=>void this.refresh()}>
                  <span class="mi sm">${this.refreshing?"hourglass_empty":"refresh"}</span>
                </button>`:""}
          </div>`:""}
      <div class="actions">
        <button
          class="text"
          @click=${()=>{this.states=new Map,this.close({clear:!0})}}
        >
          Clear filter
        </button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};it.instance=null;it.styles=[_t,Se`
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
        font:
          0.85rem system-ui,
          sans-serif;
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
      li.blanks .label {
        color: #6b7280;
      }
      li .left {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        min-width: 0;
      }
      /* Tri-state checkbox: off (empty gray) → on (green ✓) → not (red ✕). */
      .cb {
        flex: 0 0 auto;
        width: 14px;
        height: 14px;
        border: 1px solid #9ca3af;
        border-radius: 0.15rem;
        background: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        line-height: 1;
        font-weight: 700;
        color: transparent;
        user-select: none;
      }
      .cb.on {
        border-color: #16a34a;
        background: #dcfce7;
        color: #15803d;
      }
      .cb.not {
        border-color: #dc2626;
        background: #fee2e2;
        color: #b91c1c;
      }
      .hint {
        padding: 0.3rem 0.55rem;
        border-bottom: 1px solid #e5e7eb;
        color: #6b7280;
        font-size: 0.75rem;
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
      /* The note and its refresh icon read as one line: the icon is what the note
         is telling the user they can do about it. */
      .note-row {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        padding: 0 0.35rem 0 0.55rem;
      }
      .note-row span {
        flex: 1;
      }
      .note-row button.icon {
        color: #2563eb;
      }
      .note-row button.icon:disabled {
        color: #9ca3af;
      }
    `];bn([qe({type:Array})],it.prototype,"values",2);bn([qe({type:Number})],it.prototype,"blanks",2);bn([qe({type:String})],it.prototype,"current",2);bn([qe({type:String})],it.prototype,"note",2);bn([z()],it.prototype,"refreshing",2);bn([z()],it.prototype,"search",2);bn([z()],it.prototype,"states",2);it=bn([Oe("filter-popover")],it);var A1=Object.defineProperty,R1=Object.getOwnPropertyDescriptor,Ut=(e,t,n,r)=>{for(var i=r>1?void 0:r?R1(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&A1(t,n,i),i};let Ct=class extends $e{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const n=t[this.highlightIdx];n!==void 0?(e.preventDefault(),this.onPick(n)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const n=[];for(const r of this.options)if(r.toLowerCase().includes(t)&&(n.push(r),n.length>=500))break;return n}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=this.open&&e.length>0,n=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return v`
      <div class="wrap">
        <input
          type="text"
          placeholder=${this.placeholder}
          .value=${this.value}
          @focus=${()=>this.openDropdown()}
          @click=${()=>this.openDropdown()}
          @blur=${()=>this.closeDropdown()}
          @input=${this.onInput}
          @keydown=${this.onKeyDown}
        />
        ${this.value?v`<button type="button" class="clear" title="Clear filter" tabindex="-1" @mousedown=${r=>r.preventDefault()} @click=${this.onClear}>×</button>`:X}
      </div>
      ${t?v`<ul class="dropdown" style=${n} @mousedown=${r=>r.preventDefault()}>
            ${e.map((r,i)=>v` <li class=${i===this.highlightIdx?"highlighted":""} @mousedown=${s=>s.preventDefault()} @click=${()=>this.onPick(r)}>${r}</li> `)}
          </ul>`:X}
    `}};Ct.styles=Se`
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
  `;Ut([qe({type:String})],Ct.prototype,"value",2);Ut([qe({type:Array})],Ct.prototype,"options",2);Ut([qe({type:String})],Ct.prototype,"placeholder",2);Ut([z()],Ct.prototype,"open",2);Ut([z()],Ct.prototype,"highlightIdx",2);Ut([z()],Ct.prototype,"dropTop",2);Ut([z()],Ct.prototype,"dropLeft",2);Ut([z()],Ct.prototype,"dropMinWidth",2);Ut([z()],Ct.prototype,"editing",2);Ut([Wt("input")],Ct.prototype,"inputEl",2);Ct=Ut([Oe("filter-combobox")],Ct);const Di="grid";async function O1(e){return await e.get(Di,"sortDescFirst")!==!1}async function D1(e){return await e.get(Di,"highlightNulls")!==!1}const Lc=5e4;async function L1(e){const t=await e.get(Di,"windowRowsFrom"),n=typeof t=="number"?t:typeof t=="string"&&t.trim()!==""?Number(t):NaN;return!Number.isFinite(n)||n<0?Lc:Math.floor(n)}const vl="easydb:settings-changed";function M1(e,t){typeof document>"u"||document.dispatchEvent(new CustomEvent(vl,{detail:{pluginId:e,key:t}}))}function P1(e,t,n){const r=new Map(t.map(s=>[s.from,s.to])),i={};for(const[s,o]of Object.entries(e)){if(!o||o.trim()==="")continue;const a=r.get(s)??s;n.has(a)&&(i[a]=o)}return i}function Am(e,t){const n=Object.keys(e).filter(i=>(e[i]??"").trim()!==""),r=Object.keys(t).filter(i=>(t[i]??"").trim()!=="");return n.length!==r.length?!1:n.every(i=>e[i]===t[i])}function z1(e,t,n={}){const r=n.additive===!0,i=n.descFirst!==!0,s=e.find(c=>c.field===t),o=e.length===1&&e[0]?.field===t;if(!r&&!o)return[{field:t,asc:i}];const a=r?e.filter(c=>c.field!==t):[];return s?s.asc===i?[...a,{field:t,asc:!i}]:[...a]:[...a,{field:t,asc:i}]}const or=new Map;function N1(e,t){let n=or.get(e);return n||(n=new Set,or.set(e,n)),n.add(t),()=>{const r=or.get(e);r&&(r.delete(t),r.size===0&&or.delete(e))}}const Os=new Map;function j1(e,t){return Os.set(e,t),()=>{Os.get(e)===t&&Os.delete(e)}}function lh(e){try{return Os.get(e)?.()??null}catch(t){return console.warn("[visible-rows] provider failed",t),null}}function F1(e){return(or.get(e)?.size??0)>0}function U1(e){const t=or.get(e.key);if(!(!t||t.size===0))for(const n of[...t])try{n(e)}catch(r){console.warn("[visible-rows] listener failed",r)}}var B1=Object.defineProperty,q1=Object.getOwnPropertyDescriptor,De=(e,t,n,r)=>{for(var i=r>1?void 0:r?q1(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&B1(t,n,i),i};const H1=200,V1=250,K1=10,ja=32;let Te=class extends $e{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.matchingTotal=0,this.tableTotal=0,this.truncated=!1,this.sortSpecs=[],this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.highlightNulls=!0,this.windowRowsFrom=Lc,this.windowed=!1,this.windowOffset=0,this.PAGE_ROWS=500,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.rowColl=null,this.loadGeneration=0,this.reloadTimer=null,this.viewInst=null,this.tableColumns=[],this.tableReadonly=!1,this.renderedCount=0,this.renderedRows=null,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop,this.ensureWindow()},this.onGlobalSearch=e=>{const t=e.detail.query??"";t!==this.globalQuery&&(this.globalQuery=t,this.scheduleReload())},this.onTableSearch=e=>{const t=e.detail;if(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId){const n=t.query??"";if(n===this.localQuery)return;this.localQuery=n,this.scheduleReload()}},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)},this.onSettingsChanged=e=>{e.detail?.pluginId===Di&&this.readGridSettings()},this.visibleRowsDetail=()=>{const e=this.visibleRowsKey;if(!e)return null;const t=this.sortedRows();return{key:e,rows:t,total:Math.max(this.matchingTotal,this.windowOffset+t.length),truncated:this.truncated||this.windowed,searching:this.searchIsActive}},this.providedKey=""}get searchIsActive(){return this.localQuery.trim()!==""||this.globalQuery.trim()!==""}get viewMode(){return!!this.viewInstanceId}get readOnlyView(){return this.viewMode&&!!this.viewInst?.readonly}get readOnly(){return this.readOnlyView||this.tableReadonly}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener(ol,this.onTableLoading),document.addEventListener(vl,this.onSettingsChanged),await this.readGridSettings(),this.readLoadingState(),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),this.registerRowsProvider(),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener(ol,this.onTableLoading),document.removeEventListener(vl,this.onSettingsChanged),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),this.provideUnsub?.(),this.provideUnsub=void 0,this.providedKey="",this.reloadTimer!=null&&(window.clearTimeout(this.reloadTimer),this.reloadTimer=null),this.resizing=null}async readGridSettings(){try{const e=await J();this.highlightNulls=await D1(e.api.settings);const t=await L1(e.api.settings),n=t!==this.windowRowsFrom;this.windowRowsFrom=t,n&&this.rowColl&&this.loadRows()}catch{}}readLoadingState(){const e=d0(this.tableId);this.externalLoading=e!==void 0,this.externalProgress=typeof e=="number"?e:null}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.registerRowsProvider(),(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),e.has("tableId")&&this.readLoadingState(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.emitCount(),this.emitRows()}registerRowsProvider(){const e=this.visibleRowsKey;e!==this.providedKey&&(this.provideUnsub?.(),this.provideUnsub=void 0,this.providedKey=e,e&&(this.provideUnsub=j1(e,this.visibleRowsDetail)))}get visibleRowsKey(){return(this.viewMode?this.viewInstanceId:this.tableId)||""}emitRows(){const e=this.visibleRowsKey,t=this.renderedRows;!e||!t||!F1(e)||U1({key:e,rows:t,total:Math.max(this.matchingTotal,this.windowOffset+t.length),truncated:this.truncated||this.windowed,searching:this.searchIsActive})}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,n=Math.max(this.tableTotal,this.matchingTotal,this.rows.length);t===this.lastEmittedCount&&n===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=n,Sm(e,t,n))}async bind(){if(!this.tableId)return;this.rowColl=null;const e=await J(),t=await e.store.tables.findOne(this.tableId);t&&(this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const r=n.find(i=>i.id===this.tableId);r&&(this.tableColumns=r.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(n=>{const r=n.find(i=>i.id===this.viewInstanceId);r&&(this.viewInst=r,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const r=n.find(i=>i.id===this.tableId);r&&this.applyTable(r)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers)),this.rowColl=e.store.rows(this.tableId),this.unsubscribe=this.rowColl.watch?this.rowColl.watch(()=>void this.loadRows()):this.rowColl.subscribe(()=>void this.loadRows()),await this.loadRows())}async loadRows(){const e=this.rowColl;if(!e)return;const t=++this.loadGeneration,n=window.setTimeout(()=>this.loading=!0,H1);try{if(e.count){const o=await e.count();if(t!==this.loadGeneration)return;this.tableTotal=o}const r=this.shouldWindow(e),i=this.rowRequest(r),s=await xi(e,i,Pt);if(t!==this.loadGeneration)return;this.rows=s.rows,this.matchingTotal=s.total,this.truncated=s.truncated===!0,this.windowed=r,this.windowOffset=r?i.offset??0:0,e.count||(this.tableTotal=s.total)}catch(r){if(t!==this.loadGeneration)return;this.rows=[],this.matchingTotal=0,this.tableTotal=0,this.windowed=!1,this.windowOffset=0,(await J()).api.ui.dialogs.toast(`Couldn't load rows: ${r?.message??String(r)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(n),t===this.loadGeneration&&(this.loading=!1)}}rowRequest(e=!1){const t=[this.localQuery.trim(),this.globalQuery.trim()].filter(Boolean).join(" ");return{columns:this.columns,filters:this.filters,...t?{search:t}:{},...this.sortSpecs.length>0?{sort:this.sortSpecs}:{},...e?this.windowRange():{}}}shouldWindow(e){return!!e.query&&this.windowRowsFrom>0&&this.tableTotal>=this.windowRowsFrom}windowRange(){const e=this.rowHeight,t=Math.max(0,Math.floor(this.scrollY/e)-this.OVERSCAN),n=Math.floor(t/this.PAGE_ROWS)*this.PAGE_ROWS,r=Math.ceil(this.viewportHeight/e)+this.OVERSCAN*2,i=t-n+r;return{offset:n,limit:Math.ceil(i/this.PAGE_ROWS)*this.PAGE_ROWS||this.PAGE_ROWS}}ensureWindow(){this.windowed&&this.windowRange().offset!==this.windowOffset&&this.scheduleReload()}scheduleReload(){this.reloadTimer!=null&&window.clearTimeout(this.reloadTimer),this.reloadTimer=window.setTimeout(()=>{this.reloadTimer=null,this.loadRows()},V1)}applyTable(e){this.resizing==null&&(this.columns=e.columns),this.tableReadonly=!!e.readonly,this.adoptQueryState(Ja(e),{...e.filters??{}})}adoptQueryState(e,t){const n=!G1(this.sortSpecs,e);this.sortSpecs=e;let r=!1;this.filterSaveTimer==null&&(r=!Am(this.filters,t),this.filters=t),this.rowColl&&(n||r)&&this.scheduleReload()}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(r=>[r.field,r])),n=e.columnWidths??{};this.columns=e.visibleColumns.map(r=>t.get(r)).filter(r=>!!r).map(r=>{const i=n[r.field];return typeof i=="number"?{...r,width:i}:r}),this.adoptQueryState(Ja(e),{...e.filters??{}})}async setCell(e,t,n){const r=await J();await this.commitCell(r,e,t,n)}async commitCell(e,t,n,r){const i=this.columns.find(s=>s.field===n);if(this.readOnly||i?.readonly===!0){e.api.ui.dialogs.toast(this.readOnly?"This table is read-only.":`“${i?.label??n}” is a read-only column.`,{kind:"warning",title:"Not saved"}),this.requestUpdate();return}if(i){const s=Q1(i,r,this.rows,t.id,t);if(s){await e.api.ui.dialogs.alert(s,`Cannot save ${i.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[n]:r},updatedAt:Date.now()})}catch(s){await e.api.ui.dialogs.alert(s?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const n=e.target;typeof t=="boolean"?n.checked=t:n.value=t,n.blur()}renderInvalidCell(e,t,n,r){const i=String(n);return v`<input
      type="text"
      class=${im}
      style=${S$}
      title=${r}
      .value=${i}
      @keydown=${s=>this.cancelCellEdit(s,i)}
      @change=${s=>this.setCell(e,t.field,s.target.value)}
    />`}renderReadonlyCell(e,t){if(e.type==="boolean")return v`<input type="checkbox" .checked=${t===!0||t==="true"||t===1||t==="1"} disabled />`;if(t==null||t==="")return v``;if(e.type==="array"&&ut(t).length===0)return v``;const n=Fp(e.type,t);return n!==null?v`${n}`:v`${String(t)}`}renderScriptedCell(e,t){const n=Er(t.script,e.data);if(!n.ok)return v`<span class="script-err" title=${n.message}>⚠ ${n.label}</span>`;const r=t.renderer?this.cellRenderers?.get(t.renderer):void 0;if(!r)return v`${n.value==null?"":String(n.value)}`;const i=wl(r);return yl`<${i}
      .value=${n.value??""}
      .rawValue=${e.data[t.field]??""}
      .column=${t}
      .row=${e.data}
      .readonly=${!0}
      .sourceReadonly=${this.readOnly}
      @change=${this.readOnly?void 0:s=>this.setCell(e,t.field,s.detail.value)}
    ></${i}>`}renderCell(e,t){const n=e.data[t.field];if(t.script?.trim())return this.renderScriptedCell(e,t);const r=this.readOnly||t.readonly===!0,i=t.renderer,s=i?this.cellRenderers?.get(i):void 0;if(s){const o=wl(s);return yl`<${o}
        .value=${n??""}
        .column=${t}
        .row=${e.data}
        .readonly=${r}
        .sourceReadonly=${r}
        @change=${r?void 0:a=>this.setCell(e,t.field,a.detail.value)}
      ></${o}>`}if(r)return this.renderReadonlyCell(t,n);switch(t.type){case"date":return uh(n,oi(n))?this.renderInvalidCell(e,t,n,`Not a valid date: "${String(n)}"`):v`<input
          type="date"
          .value=${oi(n)}
          @keydown=${o=>this.cancelCellEdit(o,oi(n))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"datetime":return uh(n,ai(n))?this.renderInvalidCell(e,t,n,`Not a valid datetime: "${String(n)}"`):v`<input
          type="datetime-local"
          .value=${ai(n)}
          @keydown=${o=>this.cancelCellEdit(o,ai(n))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"number":{const o=n==null||n==="";return!o&&Number.isNaN(Number(n))?this.renderInvalidCell(e,t,n,`Not a valid number: "${String(n)}"`):v`<input
          type="number"
          .value=${o?"":String(n)}
          @keydown=${a=>this.cancelCellEdit(a,o?"":String(n))}
          @change=${a=>{const c=a.target.value;this.setCell(e,t.field,c===""?null:Number(c))}}
        />`}case"array":{const o=ut(n).length===0?"":String(n);return v`<input
          type="text"
          .value=${o}
          @keydown=${a=>this.cancelCellEdit(a,o)}
          @change=${a=>this.setCell(e,t.field,a.target.value)}
        />`}default:return v`<input
          type="text"
          .value=${String(n??"")}
          @keydown=${o=>this.cancelCellEdit(o,String(n??""))}
          @change=${o=>this.setCell(e,t.field,o.target.value)}
        />`}}async deleteRow(e){const t=await J();try{await t.store.rows(this.tableId).remove(e)}catch(n){await t.api.ui.dialogs.alert(n?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e,t=!1){const n=await J(),r=z1(this.sortSpecs,e,{additive:t,descFirst:await O1(n.api.settings)});this.sortSpecs=r,this.scheduleReload(),await this.persistSort(r)}async persistSort(e){const t=e[0],n={sortBy:e.length>0?e:void 0,sortColumn:t?.field,sortAsc:t?t.asc:void 0,updatedAt:Date.now()},r=await J();this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,n):await r.store.tables.patch(this.tableId,n)}typedFilters(e){return e.map(([t,n])=>({field:t,query:n,type:this.columns.find(r=>r.field===t)?.type}))}filteredRows(){const e=new Set(this.columns.filter(a=>a.filterable===!1).map(a=>a.field)),t=new Set(this.columns.map(a=>a.field)),n=Object.entries(this.filters).filter(([a,c])=>c&&c.trim().length>0&&!e.has(a)&&t.has(a)),r=this.globalQuery.trim(),i=this.localQuery.trim();if(n.length===0&&r.length===0&&i.length===0)return this.rows;let s=this.rows;if(n.length>0){const a=this.typedFilters(n);s=s.filter(c=>a.every(d=>fi(c.data[d.field],d.query,{type:d.type})))}const o=of(this.columns,this.rows);return i&&(s=pi(s,i,o)),r&&(s=pi(s,r,o)),s}sortedRows(){return lf(this.filteredRows(),this.sortSpecs,this.columns)}async openFilterPicker(e,t){e.stopPropagation();const n=e.currentTarget,r=it.instance;if(!r)return;const{values:i,blanks:s}=si(this.rowsFacetedFor(t),t,{type:this.columns.find(a=>a.field===t)?.type}),o=await r.open(n.getBoundingClientRect(),i,this.filters[t]??"",s,a=>this.onFilterInput(t,a),{...this.windowed?{note:"Values from the rows loaded so far — there may be more.",...this.rowColl?.distinct?{onRefresh:()=>this.readDistinct(t)}:{}}:{}});o!==null&&(typeof o=="object"&&"clear"in o?this.onFilterInput(t,""):typeof o=="string"&&this.onFilterInput(t,o))}async readDistinct(e){const t=this.rowColl,n=Object.fromEntries(Object.entries(this.filters).filter(([s,o])=>s!==e&&o&&o.trim()!=="")),r=[this.localQuery.trim(),this.globalQuery.trim()].filter(Boolean).join(" "),i={...Object.keys(n).length>0?{filters:n}:{},...r?{search:r}:{}};try{const s=await t.distinct({field:e,where:i,limit:Ul});let o=s.values.map(c=>({value:typeof c.value=="string"?c.value:String(c.value),count:c.count}));if(s.cells){const c=new Map;for(const d of o)for(const f of ut(d.value))c.set(f,(c.get(f)??0)+d.count);o=[...c.entries()].map(([d,f])=>({value:d,count:f})).sort((d,f)=>f.count-d.count||d.value.localeCompare(f.value))}if(this.columns.find(c=>c.field===e)?.type==="boolean"){const c=new Map(o.map(f=>[f.value,f.count]));o=[...["true","false"].map(f=>({value:f,count:c.get(f)??0})),...o.filter(f=>f.value!=="true"&&f.value!=="false")]}const a=s.truncated?"Some values may still be missing — the table was too large to read in full.":s.partial?"The whole column, but the counts cover more rows than your other filters.":"The whole column.";return{values:o,blanks:s.blanks??0,note:a}}catch{return{values:this.values(e),blanks:si(this.rowsFacetedFor(e),e,{type:this.columns.find(s=>s.field===e)?.type}).blanks,note:"The values could not be read — still showing the rows loaded so far."}}}values(e){return si(this.rowsFacetedFor(e),e,{type:this.columns.find(t=>t.field===e)?.type}).values}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250),this.scheduleReload()}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=new Set(this.columns.filter(i=>i.filterable===!1).map(i=>i.field)),n=Object.entries(this.filters).filter(([i,s])=>s&&s.trim().length>0&&i!==e&&!t.has(i));if(n.length===0)return this.rows;const r=this.typedFilters(n);return this.rows.filter(i=>r.every(s=>fi(i.data[s.field],s.query,{type:s.type})))}computeFilterSuggestions(){const e=new Map;for(const t of this.visibleColumns)hf(this.rows,t.field,{type:t.type})&&e.set(t.field,_w(this.rowsFacetedFor(t.field),t.field,{type:t.type}));return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),n=this.visibleColumns,r=new Map;n.forEach((i,s)=>{if(i.width!=null)return;const o=t[s];o&&r.set(i.field,Math.round(o.getBoundingClientRect().width))}),r.size!==0&&(this.columns=this.columns.map(i=>r.has(i.field)?{...i,width:r.get(i.field)}:i))}onResizeStart(e,t,n){e.preventDefault(),e.stopPropagation();const r=n.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:r};const i=o=>{if(!this.resizing)return;const a=o.clientX-this.resizing.startX,c=Math.max(K1,this.resizing.startW+a);this.columns=this.columns.map(d=>d.field===this.resizing.field?{...d,width:c}:d)},s=async()=>{window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",s);const o=this.resizing?.field;if(this.resizing=null,!o)return;const a=await J();if(this.viewMode){const c={...this.viewInst?.columnWidths??{}};for(const d of this.columns)typeof d.width=="number"&&(c[d.field]=d.width);await a.store.viewInstances.patch(this.viewInstanceId,{columnWidths:c,updatedAt:Date.now()})}else await a.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",i),window.addEventListener("pointerup",s),window.addEventListener("pointercancel",s)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,n){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const r=n.getBoundingClientRect(),i=e.clientX<r.left+r.width/2;this.dropTargetField=t,this.dropEdge=i?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const n=this.dragSourceField,r=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!n||n===t||!r)return;const i=[...this.columns],s=i.findIndex(d=>d.field===n);if(s<0)return;const[o]=i.splice(s,1);let a=i.findIndex(d=>d.field===t);if(a<0){i.splice(s,0,o);return}r==="after"&&(a+=1),i.splice(a,0,o);const c=await J();this.viewMode?await c.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:i.map(d=>d.field),updatedAt:Date.now()}):await c.store.tables.patch(this.tableId,{columns:i,updatedAt:Date.now()})}async saveFilters(){const e=await J(),t={};for(const[r,i]of Object.entries(this.filters))i&&i.trim().length>0&&(t[r]=i);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const n=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:n,updatedAt:Date.now()})}tableSizingStyle(e){return e.length===0||!e.every(n=>typeof n.width=="number")?null:`table-layout: fixed; width: ${e.reduce((n,r)=>n+(r.width??0),0)+ja}px; min-width: 0`}virtualSlice(e){const t=this.windowed?Math.max(this.matchingTotal,this.windowOffset+e.length):e.length;if(t<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const n=this.rowHeight,r=Math.ceil(this.viewportHeight/n)+this.OVERSCAN*2,i=Math.max(0,Math.floor(this.scrollY/n)-this.OVERSCAN),s=Math.min(t,i+r),o=Math.max(0,i-this.windowOffset),a=Math.max(o,s-this.windowOffset),c=e.slice(o,a),d=s-i-c.length;return{slice:c,topPad:i*n,bottomPad:Math.max(0,(t-s+Math.max(0,d))*n)}}render(){const e=this.sortedRows();this.renderedCount=this.windowed?this.matchingTotal:e.length,this.renderedRows=e;const t=this.visibleColumns,{slice:n,topPad:r,bottomPad:i}=this.virtualSlice(e),s=this.computeFilterSuggestions(),o=this.externalLoading?this.externalProgress:null;return v`
      ${this.loading||this.externalLoading?v`<div class="load-bar" role="progressbar" aria-label="Loading rows" aria-valuemin="0" aria-valuemax="100" aria-valuenow=${o!=null?Math.round(o*100):X}>
            <div class="load-bar-fill ${o!=null?"determinate":""}" style=${o!=null?`width:${Math.max(2,Math.round(o*100))}%`:X}></div>
          </div>`:X}
      ${this.truncated?v`<div class="truncated-note" role="status">
            ${Dc({shown:this.rows.length,total:this.matchingTotal,searching:this.searchIsActive,searched:Pt})}
          </div>`:X}
      <table style=${this.tableSizingStyle(t)??X}>
        <colgroup>
          ${t.map(a=>v`<col style=${a.width!=null?`width: ${a.width}px`:""} />`)}
          <col style="width:${ja}px" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(a=>{const c=a.sortable!==!1,d=a.filterable!==!1&&!sf(a,this.rows),f=this.sortSpecs.findIndex(L=>L.field===a.field),p=f>=0?this.sortSpecs[f]:void 0,b=p?p.asc?"asc":"desc":null,y=c?b==="asc"?"▲":b==="desc"?"▼":"⇅":"",k=this.sortSpecs.length>1&&f>=0?String(f+1):"",$=`t-${a.type}`,C=this.dragSourceField===a.field,E=this.dropTargetField===a.field,T=E&&this.dropEdge==="before"?" drop-before":E&&this.dropEdge==="after"?" drop-after":"",Y=(a.description?`${a.description}
`:"")+(a.units?`Units: ${a.units}
`:"")+`${a.field} — ${c?"click to sort, shift-click to add a sort level, ":"not sortable · "}drag to reorder`+(d?"":" · not filterable");return v`
                <th
                  class=${`${$}${b?" sorted":""}${C?" drag-source":""}${T}${c?"":" no-sort"}`}
                  title=${Y}
                  @click=${L=>c&&this.toggleSort(a.field,L.shiftKey)}
                  @dragover=${L=>this.onColDragOver(L,a.field,L.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(a.field)}
                  @drop=${L=>this.onColDrop(L,a.field)}
                >
                  <div class="col-head">
                    <!-- The grip, sort arrow and funnel glyph are decoration: a
                         Material Icons glyph is its own ligature text, so without
                         aria-hidden a header's accessible name reads
                         "drag_indicator a filter_list" and every column looks
                         alike to a screen reader (and to a by-name query). -->
                    <span
                      class="col-grip mi sm"
                      title="Drag to reorder column"
                      aria-hidden="true"
                      draggable="true"
                      @click=${L=>L.stopPropagation()}
                      @dragstart=${L=>this.onColDragStart(L,a.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label">${a.label}${a.units?v`<span class="col-units"> (${a.units})</span>`:""}</span
                    ><span class="sort-icon" aria-hidden="true">${y}${k?v`<span class="sort-rank">${k}</span>`:X}</span>
                    ${d?v`<button
                          class=${`funnel${this.filters[a.field]?" active":""}`}
                          title="Filter by value"
                          aria-label=${`Filter ${a.label||a.field}`}
                          @click=${L=>this.openFilterPicker(L,a.field)}
                        >
                          <span class="mi sm" aria-hidden="true">filter_list</span>
                        </button>`:""}
                  </div>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${L=>L.stopPropagation()}
                    @pointerdown=${L=>this.onResizeStart(L,a.field,L.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:${ja}px"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(a=>{if(a.filterable===!1)return v`<th></th>`;const c=s.get(a.field)??[];return v`
                <th>
                  <filter-combobox
                    .value=${this.filters[a.field]??""}
                    .options=${c}
                    placeholder="filter…"
                    title="Filter: text = contains, ^text = starts with, !text = does not contain, NULL = empty, !NULL = has a value. Comma-separate for several values (a,b = a OR b; !a,!b excludes both); quote a value containing a comma."
                    @filter-change=${d=>this.onFilterInput(a.field,d.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${r>0?v`<tr class="spacer" style=${`height:${r}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${n.map(a=>v`
              <tr>
                ${t.map(c=>v`<td
                      class=${`t-${c.type}${c.renderer?` r-${c.renderer}`:""}${c.renderer&&this.cellRenderers?.get(c.renderer)?" has-renderer":""}${Y1(a,c,this.highlightNulls)}`}
                      title=${W1(a,c)}
                    >
                      ${this.renderCell(a,c)}
                    </td>`)}
                <td>
                  ${this.readOnly?X:v`<button class="danger" title="Delete row" @click=${()=>this.deleteRow(a.id)}>
                        <span class="mi sm">delete</span>
                      </button>`}
                </td>
              </tr>
            `)}
          ${i>0?v`<tr class="spacer" style=${`height:${i}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};Te.styles=[_t,Se`
      :host {
        display: block;
        overflow: auto;
        /* Fill whatever box the host gives us and scroll inside it. This used to
           be a hard 60vh, which BEAT the height:100% the panel sets inline
           (max-height wins over height) — so a maximized window left a dead gap
           between the last row and the panel footer. 100% caps us at the parent
           when its height is definite (a jsPanel content box always is) and is
           ignored when it isn't, so a standalone mount still grows to its
           content. view-window.ts overrides this with max-height:none because
           it drives the height with flex instead. */
        max-height: 100%;
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
      /* Says the grid is showing a slice. Sticky so scrolling a long table
         cannot leave the user reading a partial answer as a whole one. */
      .truncated-note {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 3;
        padding: 0.25rem 0.5rem;
        background: #fef3c7;
        border-bottom: 1px solid #fcd34d;
        color: #92400e;
        font-size: 0.75rem;
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
        /* A narrow column must CHOP its content, not spill it over the next
           column and not wrap into a taller row. One line + ellipsis also keeps
           every row the same height, which the row virtualization assumes when
           it converts scrollTop into a row index. */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
      /* A cell whose content is a RENDERER ELEMENT: the element sizes itself from
         its content, and overflow:hidden does not shrink an element's intrinsic
         width — so a long value pushed the whole COLUMN wide and the table
         scrolled sideways instead of ellipsizing. That is what "auto ellipsis
         works until we have a renderer" meant. Capping the cell (the same trick
         as a link cell, and for the same reason) gives the element a bounded box
         to clip inside, so the ellipsis follows the column again. An explicitly
         resized column sets width, which takes over from this cap. */
      td.has-renderer {
        max-width: 40ch;
      }
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
      /* Sort priority (1, 2, 3 …), shown only while several columns sort. */
      .sort-rank {
        font-size: 0.85em;
        vertical-align: super;
        margin-left: 0.05em;
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
      /* A column script that failed to compile or threw. Kept small and inline
         so one broken script does not disturb the rest of the row; the full
         message is the element's title. */
      .script-err {
        color: #b91c1c;
        font-size: 0.8em;
        font-family: ui-monospace, SFMono-Regular, monospace;
        cursor: help;
      }
      /* Empty cell: pink background, so a gap is visible at a glance whatever
         the column's renderer draws. Kept distinct from the invalid red below —
         "nothing here" is normal, "this does not fit the type" is not. */
      td.is-null {
        background: #fce7f3;
      }
      td.is-null input[type='text'] {
        background: transparent;
      }
      /* Invalid stored value: the app-wide invalid red (see util/cell-validity),
         as an inset outline so the cell keeps its size and the grid lines stay
         put. Renderers additionally mark their own inputs. */
      td.is-invalid {
        outline: 1px solid #dc2626;
        outline-offset: -1px;
        background: #fef2f2;
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
        /* An editable cell is an <input>, which clips its value flat — the td's
           own text-overflow can't reach inside it. Inputs honor text-overflow
           themselves while unfocused, so a narrow column ellipses its text and
           still reveals the whole value once you click into it. */
        text-overflow: ellipsis;
      }
      .mi.sm {
        font-size: 1rem;
      }
    `];De([qe({type:String})],Te.prototype,"tableId",2);De([qe({type:String})],Te.prototype,"viewInstanceId",2);De([z()],Te.prototype,"columns",2);De([z()],Te.prototype,"rows",2);De([z()],Te.prototype,"matchingTotal",2);De([z()],Te.prototype,"tableTotal",2);De([z()],Te.prototype,"truncated",2);De([z()],Te.prototype,"sortSpecs",2);De([z()],Te.prototype,"filters",2);De([z()],Te.prototype,"globalQuery",2);De([z()],Te.prototype,"localQuery",2);De([z()],Te.prototype,"dragSourceField",2);De([z()],Te.prototype,"dropTargetField",2);De([z()],Te.prototype,"dropEdge",2);De([z()],Te.prototype,"resizing",2);De([z()],Te.prototype,"cellRenderers",2);De([z()],Te.prototype,"scrollY",2);De([z()],Te.prototype,"viewportHeight",2);De([z()],Te.prototype,"loading",2);De([z()],Te.prototype,"externalLoading",2);De([z()],Te.prototype,"externalProgress",2);De([z()],Te.prototype,"highlightNulls",2);De([z()],Te.prototype,"windowRowsFrom",2);De([z()],Te.prototype,"windowed",2);De([z()],Te.prototype,"windowOffset",2);De([z()],Te.prototype,"tableReadonly",2);Te=De([Oe("data-table")],Te);const ch=500;function W1(e,t){if(t.script)return"";const n=e.data[t.field];if(n==null||t.type==="array"&&ut(n).length===0)return"";const r=typeof n=="string"?n:String(n);return r.trim()===""?"":r.length>ch?`${r.slice(0,ch)}…`:r}function G1(e,t){return e.length===t.length&&e.every((n,r)=>n.field===t[r]?.field&&n.asc===t[r]?.asc)}function Y1(e,t,n=!0){if(t.script)return"";const r=C$(e.data[t.field],t.type);return r==="empty"?n?" is-null":"":r==="invalid"?" is-invalid":""}function Q1(e,t,n,r,i){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}if(e.unique&&t!==null&&t!==void 0&&t!==""&&n.find(o=>o.id!==r&&o.data[e.field]===t))return`${e.label} must be unique. Another row already has "${String(t)}".`;if(e.validate?.trim()){const s={...i.data,[e.field]:t},o=xv(e.validate,t,s);if(!o.ok)return o.message}return null}function uh(e,t){return e==null||typeof e=="string"&&e.trim()===""?!1:t===""}var J1=Object.defineProperty,X1=Object.getOwnPropertyDescriptor,Li=(e,t,n,r)=>{for(var i=r>1?void 0:r?X1(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&J1(t,n,i),i};let qn=class extends $e{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return v`<button class="icon ${e?"active":""}" title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"} @click=${this.openSearch}>
        <span class="mi sm">search</span>
      </button>`}return v`<input type="search" placeholder="search…" .value=${this.query} @input=${this.onInput} @blur=${this.onBlur} />`}};qn.styles=[_t,Se`
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
    `];Li([qe({type:String})],qn.prototype,"tableId",2);Li([z()],qn.prototype,"query",2);Li([z()],qn.prototype,"open",2);Li([Wt("input")],qn.prototype,"inputEl",2);qn=Li([Oe("panel-search")],qn);var Z1=Object.defineProperty,eS=Object.getOwnPropertyDescriptor,Kn=(e,t,n,r)=>{for(var i=r>1?void 0:r?eS(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Z1(t,n,i),i};let Xt=class extends $e{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.fixedSchemaSources=new Set,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const n=t?.currentTarget??void 0,r=await J();try{await Promise.resolve(e.onClick(r.api,{tableId:this.tableId,anchor:n}))}catch(i){console.error(`[table-button:${e.id}]`,i)}}}async connectedCallback(){super.connectedCallback();const e=await J();this.tableButtons=[...e.registries.tableButtons],this.fixedSchemaSources=dh(e.registries.rowSources),e.events.on("app:ready",()=>{this.tableButtons=[...e.registries.tableButtons],this.fixedSchemaSources=dh(e.registries.rowSources)}),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(n=>n.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await J();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await J(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const n={};for(const r of t.columns)n[r.field]=tS(r);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:n,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}get schemaEditable(){const e=this.table?.source?.type;return!e||!this.fixedSchemaSources.has(e)}render(){return v`
      ${this.table?.readonly?X:v`<button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
            <span class="mi sm">add</span>
          </button>`}
      ${this.schemaEditable?v`<button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
            <span class="mi sm">view_column</span>
          </button>`:X}
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>v`<button class=${e.danger?"danger":""} title=${e.tooltip??e.label} aria-label=${e.label} @click=${t=>this.runTableButton(e,t)}>
              ${e.icon?e.icon.trimStart().startsWith("<svg")?v`<span class="icon-svg">${zl(e.icon)}</span>`:v`<span class="mi sm">${e.icon}</span>`:v`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Xt.styles=[_t,Se`
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
    `];Kn([qe({type:String})],Xt.prototype,"tableId",2);Kn([qe({type:Boolean})],Xt.prototype,"active",2);Kn([z()],Xt.prototype,"rowCount",2);Kn([z()],Xt.prototype,"tableButtons",2);Kn([z()],Xt.prototype,"table",2);Kn([z()],Xt.prototype,"fixedSchemaSources",2);Xt=Kn([Oe("panel-footer")],Xt);function tS(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function dh(e){const t=new Set;for(const[n,r]of e)r.schemaEditable===!1&&t.add(n);return t}function Fa(e){return e.title?.trim()?e.title.trim():e.name}function nS(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function rS(e){const t=document.querySelector("app-shell")?.shadowRoot,n=t?.querySelector("header"),r=t?.querySelector("footer");n&&(e.style.top=`${n.offsetHeight}px`),r&&(e.style.bottom=`${r.offsetHeight}px`)}const jt=new Map,Rm=new Set;let hh=!1;async function Om(){const e=await J();await Promise.all([...jt.keys()].map(t=>Ds(t,e)))}function Mc(e){const t=jt.get(e);return t?(Tm(t),!0):(iS(e),!0)}async function iS(e){const t=await J(),n=await t.store.tables.findOne(e);n?.windowGeometry?.closed&&await t.store.tables.patch(e,{windowGeometry:{...n.windowGeometry,closed:!1},updatedAt:Date.now()})}async function Dm(e){const t=await J();await uS(e,t)}async function Lm(){if(hh)return;hh=!0;const e=await J(),t=document.getElementById("easydb-panels"),n=document.getElementById("easydb-panels-viewport");if(t&&n){bx(p1(t,n));const i=()=>rS(t);i(),window.addEventListener("resize",i);const s=document.querySelector("app-shell")?.shadowRoot,o=s?.querySelector("header"),a=s?.querySelector("footer");if(typeof ResizeObserver<"u"&&(o||a)){const c=new ResizeObserver(i);o&&c.observe(o),a&&c.observe(a)}}const r=(await e.store.tables.find()).filter(i=>i.workspaceId===e.workspaceId);r.sort(Ys);for(const i of r)i.windowGeometry?.closed||fh(i,e);e.store.tables.subscribe(i=>{const s=i.filter(c=>c.workspaceId===e.workspaceId),o=new Map(s.map(c=>[c.id,c]));for(const[c,d]of jt){const f=o.get(c);if(!f||f.windowGeometry?.closed){jt.delete(c),Fo(c),Rm.add(c);try{d.status!=="closed"&&d.close()}catch{}}}const a=s.filter(c=>!jt.has(c.id)&&!c.windowGeometry?.closed).sort(Ys);for(const c of a)fh(c,e)}),$1()}const kl=720,$l=360;function fh(e,t){const n=`panel-${Mm(e.id)}`,r=nS(),i=rx(e.windowGeometry),s=fn||i?.minimized===!0,o=()=>{const Q=document.createElement("data-table");return Q.tableId=e.id,Q.style.height="100%",Q};let a=null;const c=`table:${e.id}`,d=Q=>(a=km(),a.setPrimary(Q),$m(c,a),a.root),f=s?document.createElement("div"):d(o());let p=s?null:f,b=Fa(e),y=-1,k=-1,$=null;const C=()=>{V.setHeaderTitle(b+($?w1($.rows,$.total):Cm(y,k)))},E=Q=>{const ae=Q.detail;ae.key===e.id&&(y=ae.count,k=ae.total,C())},T=Q=>{const ae=Q.detail;ae.tableId===e.id&&($=ae.done?null:{rows:ae.rows,total:ae.total},C())};document.addEventListener(Xs,E),document.addEventListener(bl,T);const Y=()=>{W.active=!1,Js(c),a?.destroy(),a=null,p?.remove(),p=null},L=()=>{if(p)return;const Q=document.getElementById(n)?.querySelector(".jsPanel-content");if(!Q)return;Q.replaceChildren();const ae=d(o());Q.appendChild(ae),p=ae,W.active=!0},ne=document.createElement("panel-search");ne.tableId=e.id;const W=document.createElement("panel-footer");W.tableId=e.id,W.active=!s;const I=async()=>{Js(c),a?.destroy(),a=null,document.removeEventListener(Xs,E),document.removeEventListener(bl,T);const Q=jt.get(e.id)?.persistRect();jt.delete(e.id),Fo(e.id),!Rm.delete(e.id)&&await Tr(`table:${e.id}`,async()=>{const ae=await t.store.tables.findOne(e.id);if(!ae)return;const we=ae.windowGeometry??{...Q??{x:60,y:60,w:kl,h:$l},z:1,minimized:!1,maximized:!1};await t.store.tables.patch(e.id,{windowGeometry:{...we,closed:!0},updatedAt:Date.now()})})},V=Po({id:n,container:r,title:b,logo:Xd[Rs(e)],color:Jd(e),content:f,footerToolbar:W,...i?{panelSize:{w:i.w,h:i.h},position:{x:i.x,y:i.y}}:{contentSize:{w:kl,h:$l},position:oS()},minimizeTo:"#easydb-minimized-dock",viewport:zo(),boot:{minimized:s,maximized:!fn&&i?.maximized===!0,smallified:!fn&&i?.smallified===!0},onmoved:()=>void Ds(e.id,t),onresized:()=>void Ds(e.id,t),onfronted:()=>void lS(e.id,t),onstatuschange:Q=>{Q.status==="minimized"?Y():(Q.status==="normalized"||Q.status==="maximized")&&L(),Ds(e.id,t)},onclosed:()=>void I()});jt.set(e.id,V),Em(e.id,()=>V.front(void 0,!1));const ie=document.getElementById(n)?.querySelector(".jsPanel-controlbar");ie&&ie.prepend(ne);let de=null;const H=document.createElement("button");H.type="button",H.title="Table info",H.setAttribute("aria-label","Table info"),H.className="eda-info-btn",H.textContent="ⓘ",H.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",H.addEventListener("click",Q=>{Q.stopPropagation(),de&&a1(b,de.info??{},{source:de.source,origin:de.origin})}),ie?.prepend(H);const te=Q=>{de=Q??null;const ae=!!(Q?.info||Q?.source||Q?.origin);H.style.display=ae?"inline-flex":"none"};te(e);let q=Rs(e);t.store.tables.subscribe(Q=>{const ae=Q.find(xe=>xe.id===e.id);if(!ae)return;te(ae),Fa(ae)!==b&&(b=Fa(ae),C());const we=Rs(ae);we!==q&&(q=we,V.setHeaderLogo(Xd[we]),V.setHeaderColor(Jd(ae)))})}let sS=0;function oS(){const e=sS++;return{x:40+e%8*30,y:80+e%8*30}}function Ds(e,t){return Tr(`table:${e}`,()=>aS(e,t))}async function aS(e,t){const n=jt.get(e),r=n??document.getElementById(`panel-${Mm(e)}`);if(!r)return;const i=n?.persistFlags()??{minimized:!1,maximized:!1,smallified:!1},s=n?.persistRect()??{x:r.offsetLeft,y:r.offsetTop,w:r.offsetWidth,h:r.offsetHeight};try{const a=(await t.store.tables.findOne(e))?.windowGeometry,c=fn?a?.minimized??!1:i.minimized,d=fn?a?.maximized??!1:i.maximized,f=fn?a?.smallified??!1:i.smallified,p={...s,z:a?.z??0,minimized:c,maximized:d,smallified:f};await t.store.tables.patch(e,{windowGeometry:p,updatedAt:Date.now()})}catch{}}function lS(e,t){return Tr(`table:${e}`,()=>cS(e,t))}async function cS(e,t){try{const n=await t.store.tables.findOne(e);if(!n)return;const r=n.windowGeometry??{...jt.get(e)?.persistRect()??{x:0,y:0,w:kl,h:$l},z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...r,z:_m()},updatedAt:Date.now()})}catch{}}async function uS(e,t){if(!(await t.store.tables.findOne(e))?.source){const r=t.store.rows(e),i=await r.find();await r.bulkRemove(i.map(s=>s.id))}await t.store.tables.remove(e)}function Mm(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Pm(e){if(!(e instanceof Node))return null;for(const[t,n]of jt)if(n.contains(e))return t;return null}const Pc=Object.freeze(Object.defineProperty({__proto__:null,FORCE_MINIMIZED:fn,deleteTable:Dm,focusTableWindow:Mc,initWindowManager:Lm,persistTablePanelGeometry:Om,tableIdAtNode:Pm},Symbol.toStringTag,{value:"Module"})),dS={id:"delete-table",name:"Delete Table",type:"ui",version:"0.1.0",description:"Adds a trash button to each table window that permanently deletes the table and its rows (with confirmation).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/delete-table.ts"};function hS(e){e.ui.registerTableButton({id:"delete-table:delete",label:"Delete",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="#7f1d1d" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',tooltip:"Delete this table permanently",onClick:async(t,n)=>{const r=await t.store.tables.findOne(n.tableId);!r||!await t.ui.dialogs.confirm(r.source?`Delete the live table "${r.name}"? Its data stays on the server — only the local connection is removed.`:`Permanently delete table "${r.name}" and all its rows? This can't be undone.`,"Delete table")||(await Dm(n.tableId),t.ui.dialogs.toast(`Deleted "${r.name}".`,{kind:"success",title:"Delete table"}))}})}const fS=Object.freeze(Object.defineProperty({__proto__:null,init:hS,meta:dS},Symbol.toStringTag,{value:"Module"})),pS={id:"table-copy",name:"Copy Table",type:"ui",version:"0.1.0",description:"Adds a Copy button to each table window: duplicate it as-is, or snapshot its Raw / Visible data into a new plain table. Works on projections too — that is how you freeze one.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/table-copy.ts"};function mS(e){e.ui.registerTableButton({id:"table-copy:copy",label:"Copy",icon:"content_copy",tooltip:"Copy this table — as a duplicate, or as a snapshot of its data",onClick:(t,{tableId:n})=>void bS(t,n)})}function gS(e,t){const n=e.source?.type==="projection";if(t==="duplicate")return n?"a second projection over the same sources (still live)":e.source?"another connection to the same source (still live)":"a full copy of its columns and rows";const r=t==="raw"?"every column and row":"the visible columns and filtered rows";return e.source?`a plain table holding ${r} as they are right now`:`a plain table holding ${r}`}async function bS(e,t){const n=await e.store.tables.findOne(t);if(!n)return;const r=await e.ui.dialogs.choice(`Copy "${n.name}" — what should the copy contain?`,["Duplicate","Raw Data","Visible Data"],"Copy table");if(!r)return;const i=r==="Duplicate"?"duplicate":r==="Raw Data"?"raw":"visible";try{const s=await zm(e,n,i);e.ui.dialogs.toast(`Copied "${n.name}" to "${s.name}" — ${gS(n,i)}.`,{kind:"success",title:"Copy table"})}catch(s){e.ui.dialogs.toast(`Could not copy "${n.name}": ${s?.message??String(s)}`,{kind:"error",title:"Copy table"})}}async function zm(e,t,n){const r=e.workspaceId();if(!r)throw new Error("table-copy: no active workspace");const i=pn(await Zl(e,r),`${t.name} copy`),s=Ee(),o=Date.now(),a={id:s,workspaceId:r,name:i,code:Ne(i),view:t.view,...t.title?{title:`${t.title} copy`}:{},...t.labelColumn?{labelColumn:t.labelColumn}:{},...t.info?{info:t.info}:{},updatedAt:o};if(n==="duplicate"){const d={...a,columns:t.columns,...t.sortBy?{sortBy:t.sortBy}:{},...t.sortColumn?{sortColumn:t.sortColumn,sortAsc:t.sortAsc??!0}:{},...t.filters?{filters:t.filters}:{},...t.deletedColumns?{deletedColumns:t.deletedColumns}:{},...t.readonly?{readonly:!0}:{},...t.source?{source:t.source}:{},...t.origin?{origin:t.origin}:{}};return await e.store.tables.insert(d),t.source||await ph(e,t.id,s,f=>f),d}const c={...a,columns:qp(t,n).map(wS),...n==="raw"&&t.filters?{filters:t.filters}:{},...n==="raw"&&t.sortBy?{sortBy:t.sortBy}:{},...n==="raw"&&t.sortColumn?{sortColumn:t.sortColumn,sortAsc:t.sortAsc??!0}:{},...t.origin?{origin:t.origin}:{}};return await e.store.tables.insert(c),await ph(e,t.id,s,d=>Hp(t,d,n)),c}function wS(e){if(!e.readonly)return e;const t={...e};return delete t.readonly,t}async function ph(e,t,n,r){const i=r(await e.store.rows(t).find());if(i.length===0)return;const s=Date.now();await e.store.rows(n).bulkInsert(i.map(o=>({id:Ee(),tableId:n,data:{...o.data},updatedAt:s})))}const yS=Object.freeze(Object.defineProperty({__proto__:null,copyTable:zm,init:mS,meta:pS},Symbol.toStringTag,{value:"Module"}));var vS=Object.defineProperty,kS=Object.getOwnPropertyDescriptor,zc=(e,t,n,r)=>{for(var i=r>1?void 0:r?kS(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&vS(t,n,i),i};function Nm(e,t){return(Ft.instance??$S()).open(e,t)}function $S(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let Ft=class extends $e{constructor(){super(...arguments),this.rows=[],this.subject="",this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((n,r)=>{const i=this.rows[r],s=i.field.trim(),o=i.label.trim()||s;return{...n,field:s,label:o,hidden:i.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),Ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ft.instance===this&&(Ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&Zt("column-names",this.dialogEl)}open(e,t){return this.source=e,this.subject=t??"",this.rows=e.map(n=>({field:n.field,label:n.label,hidden:!!n.hidden})),new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((n,r)=>{const i=n.field.trim().toLowerCase();if(i===""){e.add(r);return}(t.get(i)??t.set(i,[]).get(i)).push(r)});for(const n of t.values())if(n.length>1)for(const r of n)e.add(r);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,n){this.rows=this.rows.map((r,i)=>i===e?{...r,[t]:n}:r)}setHidden(e,t){this.rows=this.rows.map((n,r)=>r===e?{...n,hidden:t}:n)}render(){const e=this.invalidIndices(),t=e.size;return v`
      <dialog @cancel=${this.onCancel} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish(null)}>×</button>
        <form @submit=${this.submit}>
          <div class="dialog-header">
            <h2>${this.subject?`Edit columns — ${this.subject}`:"Edit columns"}</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${()=>this.finish(null)}>Cancel</button>
              <button type="submit" class="primary" ?disabled=${t>0}>Import</button>
            </div>
          </div>
          <div class="dialog-body">
            <p class="intro">
              Rename columns before importing. A <strong>name</strong> is the field key; duplicate or empty names are shown in red and must be fixed first. Tick <strong>Hide</strong> to import a
              column hidden — click the <strong>Hide</strong> header to toggle all/none.
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
                @keydown=${n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),this.toggleAllHidden())}}
              >
                Hide
              </div>
              ${this.rows.map((n,r)=>v`
                  <input
                    class=${e.has(r)?"invalid":""}
                    .value=${n.field}
                    aria-label=${`Column ${r+1} name`}
                    @input=${i=>this.updateRow(r,"field",i.target.value)}
                  />
                  <input .value=${n.label} aria-label=${`Column ${r+1} label`} @input=${i=>this.updateRow(r,"label",i.target.value)} />
                  <div class="hidecell">
                    <input type="checkbox" .checked=${n.hidden} aria-label=${`Hide column ${r+1}`} @change=${i=>this.setHidden(r,i.target.checked)} />
                  </div>
                `)}
            </div>
            <p class="err">${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:X}</p>
          </div>
        </form>
      </dialog>
    `}};Ft.instance=null;Ft.styles=[mt,Se`
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
    `];zc([z()],Ft.prototype,"rows",2);zc([z()],Ft.prototype,"subject",2);Ft=zc([Oe("column-names-dialog")],Ft);const xS=Object.freeze(Object.defineProperty({__proto__:null,get ColumnNamesDialog(){return Ft},editColumnNames:Nm},Symbol.toStringTag,{value:"Module"}));async function SS(e,t,n){const r=t.origin?.url;if(!r)throw new Error(`"${t.name}" has no source URL to reload from.`);const i={api:e,fetchText:(I,V)=>Ci(e,I,V??`Reading ${t.name}…`,{maxBytes:null}),panel:{}},s=await n.list(i,{kind:"url",url:r});if(s.length===0)throw new Error(`Nothing to read at ${r} any more.`);const o=s.find(I=>I.name===t.name)??(s.length===1?s[0]:void 0);if(!o)throw new Error(`"${t.name}" is no longer one of the tables at ${r}.`);let a=[];const c=[];for await(const I of n.read(i,o))I.columns?.length&&(a=I.columns),c.push(...I.rows);const{columns:d,newFields:f}=ho(t.columns,a,t.deletedColumns??[]),p=t.origin?.pks??[],b=new Set(a.map(I=>I.field)),y=t.columns.map(I=>I.field).filter(I=>!b.has(I)&&!p.includes(I)),k=(t.deletedColumns??[]).filter(I=>b.has(I)),$=e.store.rows(t.id),C=await $.find(),{data:E,merged:T,strategy:Y,droppedUserRows:L}=fp({oldRows:C.map(I=>({data:I.data})),freshRows:c,pks:p,userAddedFields:y,deletedRemoteFields:k}),ne=Date.now();d.length>0&&await e.store.tables.patch(t.id,{columns:d,updatedAt:ne}),await $.bulkRemove(C.map(I=>I.id));const W=E.map(I=>({id:Ee(),tableId:t.id,data:I,updatedAt:ne}));return await $.bulkInsert(W),{rowCount:W.length,newFields:f,merged:T,strategy:Y,droppedUserRows:L}}const mh="import:samples",gh="import:samplesHidden";function CS(e,t,n){const r=new Set(n),i=[];for(const s of e)r.has(s.url)||i.push({...s,key:`b:${s.url}`,own:!1});for(const s of t)i.push({...s,key:`u:${s.id}`,own:!0});return i}function _S(e){const t=typeof e=="string"?jm(e):e;if(!Array.isArray(t))return[];const n=[];for(const r of t){if(!r||typeof r!="object")continue;const{id:i,label:s,url:o,kind:a}=r;typeof i!="string"||!i||typeof s!="string"||!s.trim()||typeof o!="string"||!o.trim()||n.push({id:i,label:s.trim(),url:o.trim(),...TS(a)?{kind:a}:{}})}return n}function ES(e){const t=typeof e=="string"?jm(e):e;return Array.isArray(t)?t.filter(n=>typeof n=="string"&&!!n.trim()).map(n=>n.trim()):[]}function TS(e){return e==="json"||e==="csv"||e==="sql"||e==="datasette"}function jm(e){try{return JSON.parse(e)}catch{return null}}function IS(e,t){return[...e,t]}function AS(e,t){return e.filter(n=>n.id!==t)}function RS(e,t){return e.includes(t)?[...e]:[...e,t]}var OS=Object.defineProperty,DS=Object.getOwnPropertyDescriptor,He=(e,t,n,r)=>{for(var i=r>1?void 0:r?DS(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&OS(t,n,i),i};const LS="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",MS="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",PS='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',zS=[{label:"Northwind — sample database (JSON dump)",url:LS,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:MS,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],NS={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function jS(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:PS,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>US(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:n})=>FS(t,n)})}async function FS(e,t){const n=await e.store.tables.findOne(t);if(n?.origin?.url)try{const r=await Nc(n.origin.type);if(!r)throw new Error(`No importer is installed that can read a "${n.origin.type}" source.`);const i=await SS(e,n,r),s=[];i.newFields.length>0&&s.push(`${i.newFields.length} new column${i.newFields.length===1?"":"s"}`),!i.merged&&i.rowCount>0&&s.push("rows replaced (nothing to match them on)"),i.droppedUserRows>0&&s.push(`${i.droppedUserRows} row${i.droppedUserRows===1?"":"s"} changed at the source, so your own column values for ${i.droppedUserRows===1?"it":"them"} could not be carried over`),e.ui.dialogs.toast(`Refreshed "${n.name}" (${i.rowCount.toLocaleString()} rows)${s.length?` — ${s.join(", ")}`:""}.`,{kind:i.newFields.length>0||i.droppedUserRows>0?"warning":"success",title:"Refresh"})}catch(r){e.ui.dialogs.toast(`Couldn't refresh "${n.name}": ${r.message}`,{kind:"error",title:"Refresh"})}}async function US(e,t="auto"){const r=await(Re.instance??GS()).open({presetKind:t,async listDatabases($){const C=St($);return mc(E=>e.backend.fetch(E),C.base)},async listTables(){const $=e.workspaceId();return(await e.store.tables.find()).filter(C=>C.workspaceId===$&&!C.source).map(C=>({id:C.id,name:C.name})).sort((C,E)=>C.name.localeCompare(E.name))}});if(!r)return;const{url:i,file:s,kind:o,dbChosen:a,editColumns:c,maxRows:d,mode:f,panel:p,target:b}=r,y=s?.name??i,k=c?($,C)=>Nm($,C):void 0;try{if(o==="sql"){await BS(e,{url:i,file:s,label:y,maxRows:d,mode:f,target:b,panel:p,editHook:k});return}const $=await Nc(o);if($){const C=o==="json"?await qS(e,i,s,d,f):null;if(C?.isDump&&await e.ui.dialogs.confirm(`"${y}" is a workspace dump, not a plain table. Restore it — tables, window layout, views and filters? Choose Cancel to import only its tables as data.`,"Restore workspace")){await tc(e,C.text,y,{maxRows:d,editColumns:k,...s?{}:{originUrl:i}});return}const E=s?s.name:Vt(i),T=C?{kind:"text",text:C.text,name:E}:s?{kind:"file",file:s}:{kind:"url",url:i},Y=await fo(e,$,T,{mode:f,target:b,maxRows:d,panel:p,...C&&!s?{origin:{type:$.id,url:i}}:{},...k?{editColumns:L=>k(L)}:{}});$.ownToasts||Fm(e,Y,y);return}if(f==="reference"&&!s){o==="datasette"?await WS(e,i):await Um(e,i,o);return}await xo(e,i,{skipTablePicker:a,maxRows:d,editColumns:k})}catch($){e.ui.dialogs.toast(`Could not import ${y}: ${$.message}`,{kind:"error",title:"Import"})}}async function BS(e,t){const{url:n,file:r,label:i,maxRows:s,mode:o,target:a,panel:c,editHook:d}=t;if(o==="reference")throw new Error("A .sql script cannot be referenced live — it is a script to run, not a rows endpoint. Import it as a Copy instead.");const f=r?await r.text():await Ci(e,n,`Reading ${Vt(n)}…`,s!=null?{maxBytes:null}:{});if(dc(f)){const y=await hc(e,f,{maxRows:s,target:a,...d?{editColumns:d}:{}});fc(e,y,i);return}const p=await Nc("sql");if(!p)throw new Error("The SQL importer is not installed.");const b=await fo(e,p,{kind:"text",text:f,name:r?r.name:Vt(n)},{mode:o,target:a,maxRows:s,panel:c,...r?{}:{origin:{type:p.id,url:n}},...d?{editColumns:y=>d(y)}:{}});Fm(e,b,i)}async function qS(e,t,n,r,i){if(i==="reference")return null;const s=n?await n.text():await Ci(e,t,`Reading ${Vt(t)}…`,r!=null?{maxBytes:null}:{});try{return{text:s,isDump:ec(JSON.parse(s))}}catch{return{text:s,isDump:!1}}}async function Nc(e){const{registries:t}=await J();return t.importers.find(n=>n.id===e&&n.supports?.kernel===!0)}function Fm(e,t,n){if(t.cancelled&&t.landed.length===0)return;const r=t.landed.reduce((o,a)=>o+a.rowCount,0),i=t.landed.length===1?`"${t.landed[0].tableName}"`:`${t.landed.length} tables from ${n}`;if(t.landed.length>0){const o=t.failed.length>0?` — ${t.failed.length} failed`:"";e.ui.dialogs.toast(`Imported ${i} (${r.toLocaleString()} rows)${o}.`,{kind:t.failed.length>0?"warning":"success",title:"Import"});return}const s=t.failed.map(o=>`${o.name}: ${o.error}`).join("; ");e.ui.dialogs.toast(`Could not import ${n}${s?` — ${s}`:""}.`,{kind:"error",title:"Import"})}function HS(e){const t=JSON.parse(e),n=r=>Array.isArray(r)&&r.every(i=>i!=null&&typeof i=="object"&&!Array.isArray(i));if(n(t))return t;if(t&&typeof t=="object"){const r=t;for(const i of["rows","records","data"])if(n(r[i]))return r[i];for(const i of Object.values(r))if(n(i))return i}return[]}function VS(e){const t=HS(e).slice(0,50),n=i=>jl(i)?"array":typeof i=="number"?"number":typeof i=="boolean"?"boolean":"string",r=new Map;for(const i of t)for(const[s,o]of Object.entries(i))!r.has(s)&&o!=null?r.set(s,n(o)):r.has(s)||r.set(s,"string");return[...r.entries()].map(([i,s])=>({field:i,label:i,type:s}))}function KS(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}.json?_size=max`}async function WS(e,t){const n=St(t),i=await kc(a=>e.backend.fetch(a),n,"Reference");if(i===null)return;if(i.length===0)throw new Error("No tables found to reference at that URL.");let s=0;const o=[];for(const a of i)try{await Um(e,KS(n.base,a.db,a.table),"json",{nameHint:`${a.db}/${a.table}`,silent:!0}),s++}catch(c){o.push(`${a.table}: ${c.message}`)}e.ui.dialogs.toast(`Referenced ${s} table${s===1?"":"s"}${o.length?` — ${o.length} failed`:""}.`,{kind:o.length?"warning":"success",title:"Reference"})}async function Um(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("No active workspace.");const s=r.nameHint??Vt(t),o=await Ci(e,t,`Reading ${s}…`,{maxBytes:null}),a=n==="csv"?_r(o).columns:VS(o);if(a.length===0)throw new Error("No columns found in the referenced data.");const c=new Set((await e.store.tables.find()).filter(p=>p.workspaceId===i).map(p=>p.name.toLowerCase()));let d=s;for(let p=2;c.has(d.toLowerCase());p++)d=`${s}-${p}`;const f={id:Ee(),workspaceId:i,name:d,code:Ne(d),columns:a,view:"table",source:{type:"url",config:{url:t,format:n}},readonly:!0,updatedAt:Date.now()};await e.store.tables.insert(f),r.silent||e.ui.dialogs.toast(`Referenced ${d} — live, read-only.`,{kind:"success",title:"Reference"})}function GS(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function YS(e){try{const t=new URL(e),n=t.hostname.toLowerCase(),r=[...t.searchParams.keys()].some(s=>s.startsWith("_")),i=n.includes("datasette")||r;return!r&&/\.(csv|tsv|tab)$/i.test(t.pathname)?"csv":!r&&/\.sql$/i.test(t.pathname)?"sql":!r&&/\.json$/i.test(t.pathname)?"json":i?"datasette":"json"}catch{return"json"}}function bh(e,t){if(t!=="datasette"||!e)return!1;try{const n=St(e);return!n.db&&!n.table}catch{return!1}}function QS(e){return/\.(csv|tsv|tab)$/i.test(e)?"csv":/\.sql$/i.test(e)?"sql":"json"}let Re=class extends $e{constructor(){super(...arguments),this.url="",this.kind="auto",this.pickedSample="",this.userSamples=[],this.hiddenSamples=[],this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.targetKind="new",this.targetTableId="",this.tables=[],this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.panelEl=null,this.mountedPanel="",this.panelGeneration=0,this.formats=[],this.acceptAttr=".txt",this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const n=this.resolvedKind,r=this.maxRows,i=this.editColumns&&this.mode==="copy",s=this.panelValue(),o=this.supportsTarget?this.target:{kind:"new"},a=this.file?"copy":this.mode;if(this.file){this.finish({url:"",file:this.file,kind:n,editColumns:i,maxRows:r,mode:a,panel:s,target:o});return}const c=n==="datasette"&&!!this.selectedDb&&bh(t,n),d=c?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:d,kind:n,dbChosen:c,editColumns:i,maxRows:r,mode:a,panel:s,target:o})}}get supportsTarget(){return this.formats.find(e=>e.id===this.resolvedKind)?.kernel===!0}get target(){return this.mode==="reference"||this.targetKind==="new"||!this.targetTableId?{kind:"new"}:{kind:this.targetKind,tableId:this.targetTableId}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?QS(this.file.name):YS(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),Re.instance=this}disconnectedCallback(){super.disconnectedCallback(),Re.instance===this&&(Re.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e)}updated(){const e=this.shadowRoot?.querySelector(".panel-slot");if(!e){this.panelEl=null,this.mountedPanel="";return}const t=this.activePanelTag,n=t?`${t}#${this.panelGeneration}`:"";if(n===this.mountedPanel||(e.replaceChildren(),this.panelEl=null,this.mountedPanel=n,!t))return;const r=document.createElement(t);r.addEventListener("change",()=>this.requestUpdate()),e.appendChild(r),this.panelEl=r}get activePanelTag(){return this.formats.find(e=>e.id===this.resolvedKind)?.panel}get activeLabel(){return this.formats.find(e=>e.id===this.resolvedKind)?.label??this.resolvedKind}panelValue(){const e=this.panelEl?.value;return e&&typeof e=="object"?e:{}}async loadFormats(){const{registries:e}=await J(),t=[...e.importers].sort((i,s)=>(i.order??Number.MAX_SAFE_INTEGER)-(s.order??Number.MAX_SAFE_INTEGER)).map(i=>({id:i.id,label:i.label,panel:i.panel,kernel:i.supports?.kernel})),n=t.some(i=>i.id==="datasette")?t:[...t,{id:"datasette",label:"Datasette (table or instance)"}];this.formats=n;const r=new Set([".txt"]);for(const i of e.importers)for(const s of i.accept??[])r.add(s);this.acceptAttr=[...r].join(",")}open(e){this.targetKind="new",this.targetTableId="",this.tables=[],e?.listTables?.().then(n=>{this.tables=n}),this.url="",this.kind=e?.presetKind??"auto",this.pickedSample="",this.loadSamples(),this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.panelGeneration+=1,this.resetDbList(),this.listDatabases=e?.listDatabases??null;const t=this.loadFormats();return new Promise(n=>{this.resolveFn=n,t.then(()=>this.updateComplete).then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}get sampleList(){return CS(zS,this.userSamples,this.hiddenSamples)}get pickedEntry(){return this.pickedSample?this.sampleList.find(e=>e.key===this.pickedSample):void 0}onPresetChange(e){this.pickedSample=e.target.value,this.resetDbList();const t=this.pickedEntry;t&&(this.url=t.url,this.kind=t.kind??"auto")}async loadSamples(){try{const e=await J(),[t,n]=await Promise.all([e.store.settings.findOne(mh),e.store.settings.findOne(gh)]);this.userSamples=_S(t?.value),this.hiddenSamples=ES(n?.value)}catch{this.userSamples=[],this.hiddenSamples=[]}}async writeSamples(){const e=await J();await e.store.settings.upsert({name:mh,value:[...this.userSamples]}),await e.store.settings.upsert({name:gh,value:[...this.hiddenSamples]})}async saveAsSample(){const e=this.url.trim(),t=ct.instance;if(!e||!t)return;const n=this.pickedEntry?.label??Vt(e),r=await t.prompt("Name this sample — it appears in the Sample source list.",n,"Add to samples");if(r===null||!r.trim())return;const i=this.kind==="auto"?void 0:this.kind,s={id:Ee(),label:r.trim(),url:e,...i?{kind:i}:{}};this.userSamples=IS(this.userSamples,s),this.pickedSample=`u:${s.id}`,await this.writeSamples()}async deletePickedSample(){const e=this.pickedEntry,t=ct.instance;!e||!t||!await t.confirm(`Delete the sample "${e.label}"? The URL stays in the box.`,"Delete sample")||(e.own?this.userSamples=AS(this.userSamples,e.key.slice(2)):this.hiddenSamples=RS(this.hiddenSamples,e.url),this.pickedSample="",await this.writeSamples())}async restoreSamples(){this.hiddenSamples=[],await this.writeSamples()}onFileChange(e){const n=e.target.files?.[0]??null;this.file=n,n&&(this.url="",this.pickedSample="",this.resetDbList())}renderSamples(){const e=this.sampleList,t=this.pickedEntry,n=this.userSamples.length>0;return v`
      <label>
        Sample source
        <div class="with-btn">
          <select data-testid="import-sample" .value=${this.pickedSample} @change=${r=>this.onPresetChange(r)}>
            <option value="" ?selected=${this.pickedSample===""}>${e.length===0?"— no samples —":"— choose a sample —"}</option>
            ${n?v`
                  <optgroup label="Shipped">${e.filter(r=>!r.own).map(r=>v`<option value=${r.key} ?selected=${r.key===this.pickedSample}>${r.label}</option>`)}</optgroup>
                  <optgroup label="Yours">${e.filter(r=>r.own).map(r=>v`<option value=${r.key} ?selected=${r.key===this.pickedSample}>${r.label}</option>`)}</optgroup>
                `:e.map(r=>v`<option value=${r.key} ?selected=${r.key===this.pickedSample}>${r.label}</option>`)}
          </select>
          <button
            type="button"
            class="icon danger"
            data-testid="sample-delete"
            title=${t?`Delete the sample "${t.label}"`:"Pick a sample to delete it"}
            ?disabled=${!t}
            @click=${()=>void this.deletePickedSample()}
          >
            🗑
          </button>
        </div>
      </label>
      ${this.hiddenSamples.length>0?v`<p class="hint">
            ${this.hiddenSamples.length} shipped sample${this.hiddenSamples.length===1?"":"s"} deleted.
            <button type="button" class="link" data-testid="sample-restore" @click=${()=>void this.restoreSamples()}>Restore samples</button>
          </p>`:X}
    `}renderDbPicker(){return!this.listDatabases||!bh(this.url.trim(),this.resolvedKind)?X:v`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?v`
                  <option value="" ?selected=${this.selectedDb===""}>— all databases (choose tables next) —</option>
                  ${this.dbList.map(e=>v`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:v`<option value="">— not loaded —</option>`}
          </select>
          <button type="button" class="ghost db-load" ?disabled=${this.dbLoading} @click=${()=>void this.loadDatabases()}>
            ${this.dbLoading?"Loading…":this.dbList?"Refresh":"List databases"}
          </button>
        </div>
      </label>
      ${this.dbError?v`<p class="hint error">${this.dbError}</p>`:X}
    `}renderTarget(){if(!this.supportsTarget||this.mode==="reference")return X;const e=this.targetKind!=="new";return v`
      <label>
        Import into
        <div class="row db-row">
          <select
            data-testid="import-target"
            .value=${this.targetKind}
            @change=${t=>{this.targetKind=t.target.value,this.targetKind!=="new"&&!this.targetTableId&&(this.targetTableId=this.tables[0]?.id??"")}}
          >
            <option value="new" ?selected=${this.targetKind==="new"}>A new table</option>
            <option value="append" ?selected=${this.targetKind==="append"}>Append to an existing table</option>
            <option value="overwrite" ?selected=${this.targetKind==="overwrite"}>Replace the rows of an existing table</option>
          </select>
          ${e?v`<select
                data-testid="import-target-table"
                .value=${this.targetTableId}
                @change=${t=>{this.targetTableId=t.target.value}}
              >
                ${this.tables.length===0?v`<option value="">— no tables yet —</option>`:this.tables.map(t=>v`<option value=${t.id} ?selected=${t.id===this.targetTableId}>${t.name}</option>`)}
              </select>`:X}
        </div>
      </label>
      ${e?v`<p class="hint">The table keeps its own columns. Values map onto them the way the format requires — a CSV by column position, so its header names need not match.</p>`:X}
    `}renderPluginBlock(){const e=this.renderDbPicker();return!!!this.activePanelTag&&e===X?X:v`
      <fieldset class="block">
        <legend>${this.activeLabel} options</legend>
        <div class="panel-slot"></div>
        ${e}
      </fieldset>
    `}render(){return v`
      <dialog @cancel=${this.onCancel} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish(null)}>×</button>
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
              Import as
              <select
                data-testid="import-format"
                .value=${this.kind}
                @change=${e=>{this.kind=e.target.value,this.resetDbList()}}
              >
                <option value="auto" ?selected=${this.kind==="auto"}>Auto-detect</option>
                ${this.formats.map(e=>v`<option value=${e.id} ?selected=${this.kind===e.id}>${e.label}</option>`)}
              </select>
            </label>

            <fieldset class="block">
              <legend>Source and options</legend>
              ${this.renderSamples()}

              <label>
                URL
                <div class="with-btn">
                  <input
                    type="text"
                    autofocus
                    placeholder="https://… (JSON dump, .csv/.tsv file, or Datasette table)"
                    ?disabled=${!!this.file}
                    .value=${this.url}
                    @input=${e=>{this.url=e.target.value,this.pickedSample="",this.file=null,this.resetDbList()}}
                  />
                  <!-- Next to the URL, not next to the list: it acts on what is in
                       the box, and that is the thing it should sit beside. -->
                  <button type="button" class="icon" data-testid="sample-add" title="Add this URL to the sample list" ?disabled=${!this.url.trim()} @click=${()=>void this.saveAsSample()}>+</button>
                </div>
              </label>

              <label>
                …or upload a file
                <input type="file" accept=${this.acceptAttr} @change=${e=>this.onFileChange(e)} />
              </label>
              ${this.file?v`<p class="hint">Importing <strong>${this.file.name}</strong> as ${this.resolvedKind.toUpperCase()}.</p>`:X}

              <label>
                Import mode
                <div class="row mode-row">
                  <label class="check">
                    <input type="radio" name="import-mode" .checked=${this.mode==="copy"} @change=${()=>this.mode="copy"} />
                    Copy — a local, editable, synced snapshot you can refresh
                  </label>
                  <label class="check">
                    <input type="radio" name="import-mode" ?disabled=${!!this.file} .checked=${this.mode==="reference"} @change=${()=>this.mode="reference"} />
                    Reference — live, read-only; rows never stored or synced
                  </label>
                </div>
              </label>
              ${this.file?v`<p class="hint">Uploaded files can only be imported as a Copy.</p>`:X} ${this.renderTarget()}

              <label class="check">
                <input type="checkbox" ?disabled=${this.mode==="reference"} .checked=${this.editColumns} @change=${e=>this.editColumns=e.target.checked} />
                Edit columns before import (rename / hide / fix duplicate names)
              </label>
              ${this.mode==="reference"?v`<p class="hint">A Reference keeps the source's own schema, so there is nothing to edit.</p>`:X}

              <label>
                Limit rows (optional)
                <input type="number" min="1" step="1" placeholder="import all rows" .value=${this.maxRowsInput} @input=${e=>this.maxRowsInput=e.target.value} />
              </label>
            </fieldset>

            ${this.renderPluginBlock()}

            <p class="hint">
              Paste any URL or pick a sample above — a JSON dump, a <code>.csv</code> or <code>.tsv</code> file, or a Datasette table/database/instance. For a Datasette instance root, click
              <em>List databases</em> to pick one first. Multi-table sources let you choose which tables to import; Datasette tables are capped at 10,000 rows each.
            </p>
          </div>
        </form>
      </dialog>
      ${X}
    `}};Re.instance=null;Re.styles=[mt,Se`
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
      .mode-row {
        flex-direction: column;
        gap: 0.35rem;
      }
      .hint {
        color: #6b7280;
        font-size: 0.78rem;
        margin: 0;
      }
      .hint.error {
        color: #b91c1c;
      }
      /*
       * The dialog is two blocks: the options EVERY importer has (source,
       * mode, edit-columns, row limit), then the options only the chosen
       * importer has. Keeping them visually separate is the whole point —
       * see .claude/plans/2026-07-28-importer-architecture.md.
       */
      fieldset.block {
        border: 1px solid #e5e7eb;
        border-radius: 0.35rem;
        padding: 0.85rem 0.9rem 0.9rem;
        margin: 0;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
      }
      fieldset.block > legend {
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: #6b7280;
        padding: 0 0.35rem;
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
      /* A control with a small button beside it: the sample list + its trash,
         the URL box + its "add this to the samples" plus. */
      .with-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .with-btn select,
      .with-btn input[type='text'] {
        flex: 1;
        min-width: 0;
      }
      button.icon {
        background: transparent;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        padding: 0.3rem 0.5rem;
        font-size: 1rem;
        line-height: 1;
        cursor: pointer;
        flex: 0 0 auto;
      }
      button.icon:hover:not([disabled]) {
        border-color: #bfdbfe;
        background: #eff6ff;
      }
      button.icon.danger:hover:not([disabled]) {
        border-color: #fecaca;
        background: #fef2f2;
      }
      button.icon[disabled] {
        opacity: 0.4;
        cursor: default;
      }
      button.link {
        background: transparent;
        border: 0;
        padding: 0;
        color: #2563eb;
        font: inherit;
        font-size: 0.78rem;
        text-decoration: underline;
        cursor: pointer;
        white-space: nowrap;
        flex: 0 0 auto;
      }
      button.link[disabled] {
        color: #9ca3af;
        text-decoration: none;
        cursor: default;
      }
    `];He([z()],Re.prototype,"url",2);He([z()],Re.prototype,"kind",2);He([z()],Re.prototype,"pickedSample",2);He([z()],Re.prototype,"userSamples",2);He([z()],Re.prototype,"hiddenSamples",2);He([z()],Re.prototype,"dbList",2);He([z()],Re.prototype,"dbLoading",2);He([z()],Re.prototype,"dbError",2);He([z()],Re.prototype,"selectedDb",2);He([z()],Re.prototype,"editColumns",2);He([z()],Re.prototype,"file",2);He([z()],Re.prototype,"maxRowsInput",2);He([z()],Re.prototype,"mode",2);He([z()],Re.prototype,"targetKind",2);He([z()],Re.prototype,"targetTableId",2);He([z()],Re.prototype,"tables",2);He([z()],Re.prototype,"formats",2);He([z()],Re.prototype,"acceptAttr",2);Re=He([Oe("import-dialog")],Re);const JS=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return Re},init:jS,meta:NS},Symbol.toStringTag,{value:"Module"})),XS={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},ZS=6e4;let wh=null,xl=!1;const Ua=new Map;function eC(e){wh===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(wh=setInterval(()=>{Bm(e)},ZS)))}async function Bm(e){if(xl)return;const t=e.workspaceId();if(!t)return;const n=await Xp(e);if(n)try{await tC(e,n,t)}catch(r){console.warn("[auto-sync]",r)}}async function tC(e,t,n){const r=await Ao(e),i=await Zp(e,n),s=await fetch(`${t}/sync/${encodeURIComponent(n)}`);if(s.status===404){await yh(e,t,n,r,null);return}if(!s.ok)return;const o=Ro(s.headers.get("ETag")),a=await s.text();if(Vd(r)===Vd(a)){o&&o!==i&&await Bn(e,n,o);return}if(o&&o===i){await yh(e,t,n,r,i);return}if(!(o&&Ua.get(n)===o)){xl=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${n}". Pull and replace your local copy?`,"auto-sync")){const d=JSON.parse(a),f=await em(e,n,d);o&&await Bn(e,n,o),Ua.delete(n),e.ui.dialogs.toast(`Pulled ${f} table${f===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else o&&Ua.set(n,o)}finally{xl=!1}}}async function yh(e,t,n,r,i){const s={"Content-Type":"application/json"};i&&(s["If-Match"]=`"${i}"`);const o=await fetch(`${t}/sync/${encodeURIComponent(n)}`,{method:"PUT",headers:s,body:r});if(o.ok){const a=Ro(o.headers.get("ETag"));a&&await Bn(e,n,a);return}if(o.status===412){const a=await o.json().catch(()=>({}));a.currentEtag&&await Bn(e,n,a.currentEtag)}}const qm=Object.freeze(Object.defineProperty({__proto__:null,load:eC,meta:XS,tick:Bm},Symbol.toStringTag,{value:"Module"})),Zs=new Set(["a","about","above","after","again","all","am","an","and","any","are","as","at","be","because","been","before","being","below","between","both","but","by","can","cannot","could","did","do","does","doing","down","during","each","few","for","from","further","had","has","have","having","he","her","here","hers","herself","him","himself","his","how","i","if","in","into","is","it","its","itself","just","me","more","most","my","myself","no","nor","not","now","of","off","on","once","only","or","other","our","ours","ourselves","out","over","own","same","she","should","so","some","such","than","that","the","their","theirs","them","themselves","then","there","these","they","this","those","through","to","too","under","until","up","very","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","you","your","yours","yourself","yourselves","s","t","don","isn","aren","wasn","weren","doesn","didn","won","shouldn","couldn","wouldn"]);function Hm(e){if(typeof e!="string")return new Set;const t=new Set;for(const n of e.split(/[,;\s]+/)){const r=n.trim().toLocaleLowerCase();r!==""&&t.add(r)}return t}function nC(){return[...Zs].join(", ")}function vh(e){return e===!1?new Set:e===!0||e==null?Zs:typeof e=="string"?Hm(e):Zs}function rC(e){const t=[],n=/\p{L}[\p{L}\p{N}]*(?:['’-][\p{L}\p{N}]+)*|\p{N}+/gu;for(const r of e.matchAll(n))t.push(r[0]);return t}function iC(e,t={}){const n=t.minLength??3,r=t.maxTerms??120,i=t.stopWords??Zs,s=t.keepWords,o=t.includeNumbers??!1,a=new Map,c=f=>{for(const p of rC(f)){const b=p.toLocaleLowerCase();if(!s?.has(b)&&(b.length<n||i.has(b)||!o&&/^\p{N}+$/u.test(b)))continue;let y=a.get(b);y||(y={total:0,spellings:new Map},a.set(b,y)),y.total++,y.spellings.set(p,(y.spellings.get(p)??0)+1)}};for(const f of e)if(typeof f=="string")c(f);else if(typeof f=="number"&&Number.isFinite(f))c(String(f));else if(Array.isArray(f))for(const p of f)(typeof p=="string"||typeof p=="number")&&c(String(p));const d=[...a.entries()].map(([f,p])=>{let b=f,y=-1;for(const[k,$]of p.spellings)($>y||$===y&&k<b)&&(b=k,y=$);return{term:b,count:p.total}});return d.sort((f,p)=>p.count-f.count||f.term.localeCompare(p.term)),d.slice(0,r)}const ur="viz",jc="https://tile.openstreetmap.org/{z}/{x}/{y}.png",Fc="© OpenStreetMap contributors";async function sC(e){const t=Number(await e.get(ur,"cloudMinLength")),n=await e.get(ur,"cloudKeepWords"),r=await e.get(ur,"cloudStopWords");return{minLength:Number.isFinite(t)&&t>0?Math.floor(t):3,keepWords:typeof n=="string"?n:"",stopWords:typeof r=="string"?r:nC()}}async function oC(e){const t=await e.get(ur,"tileUrl");return typeof t=="string"&&t.trim()!==""?t.trim():jc}async function aC(e){const t=await e.get(ur,"tileAttribution");return typeof t=="string"&&t.trim()!==""?t.trim():Fc}function Sl(e,t){const n={...e??{}};for(const[r,i]of Object.entries(t??{}))i!==void 0&&(n[r]=i);return n}function lC(e,t){if(e===t)return!0;const n=r=>r==null||r==="";if(n(e)&&n(t))return!0;if(typeof e=="number"||typeof t=="number"){const r=Number(e),i=Number(t);if(Number.isFinite(r)&&Number.isFinite(i))return r===i}return!1}function Vm(e,t){const n=e??{},r={};for(const[i,s]of Object.entries(t??{}))lC(s,n[i])||(r[i]=s);return r}function cC(e,t){return new Set(Object.keys(Vm(e,t)))}const gs="(empty)",kh="Other",uC={categories:[],series:[],rowCount:0,truncated:!1,skipped:0};function $h(e={}){return{...uC,categories:[],series:[],...e}}function ar(e){return e==null||typeof e=="string"&&e.trim()===""}function Km(e){if(typeof e=="number")return Number.isFinite(e)?e:null;if(typeof e=="string"){const t=e.trim();if(t==="")return null;const n=Number(t);return Number.isFinite(n)?n:null}return null}function dC(e,t){const n=typeof e=="string"||typeof e=="number"?e:null;if(n===null)return null;const r=typeof n=="string"?/^(\d{4})-(\d{2})-(\d{2})$/.exec(n):null;let i,s,o;if(r)i=Number(r[1]),s=Number(r[2])-1,o=Number(r[3]);else{const c=new Date(n);if(Number.isNaN(c.getTime()))return null;i=c.getFullYear(),s=c.getMonth(),o=c.getDate()}const a=c=>String(c).padStart(2,"0");switch(t){case"year":return String(i);case"quarter":return`${i}-Q${Math.floor(s/3)+1}`;case"month":return`${i}-${a(s+1)}`;case"week":{const c=new Date(Date.UTC(i,s,o)),d=c.getUTCDay()||7;c.setUTCDate(c.getUTCDate()+4-d);const f=Date.UTC(c.getUTCFullYear(),0,1),p=Math.ceil(((c.getTime()-f)/864e5+1)/7);return`${c.getUTCFullYear()}-W${a(p)}`}case"day":default:return`${i}-${a(s+1)}-${a(o)}`}}function hC(e,t){const n=Km(e);if(n===null||!(t>0))return null;const r=Math.floor(n/t)*t,i=s=>Number(s.toPrecision(12));return{key:i(r),label:`${i(r)}–${i(r+t)}`}}function fC(e,t,n){const r=e.data[t];if(n?.type==="array"||Array.isArray(r)){const i=ut(r);return i.length>0?i:[null]}return[r]}function pC(e,t){if(e==="count")return{value:t.length,skipped:0};if(e==="countDistinct")return{value:new Set(t.map(s=>ar(s)?"":String(s))).size,skipped:0};const n=[];let r=0;for(const i of t){if(ar(i))continue;const s=Km(i);s===null?r++:n.push(s)}if(n.length===0)return{value:null,skipped:r};switch(e){case"sum":return{value:n.reduce((i,s)=>i+s,0),skipped:r};case"avg":return{value:n.reduce((i,s)=>i+s,0)/n.length,skipped:r};case"min":return{value:Math.min(...n),skipped:r};case"max":return{value:Math.max(...n),skipped:r};default:return{value:null,skipped:r}}}function mC(e,t){return e==="count"?"Count":e==="countDistinct"?`Distinct ${t}`:`${{sum:"Sum",avg:"Average",min:"Min",max:"Max"}[e]} of ${t}`}function gC(e,t,n,r,i={}){const s=i.truncated===!0,o=new Map(t.map(K=>[K.field,K])),a=r.measures??[],c=r.groupBy??[],d=[];for(const K of c){const ie=n[K];(!ie||!o.has(ie))&&d.push(K)}for(const K of a){if(K.fn==="count")continue;const ie=n[K.channel];(!ie||!o.has(ie))&&d.push(K.channel)}if(d.length>0){const K=[...new Set(d)];return $h({truncated:s,rowCount:e.length,error:`No column mapped for ${K.length>1?"channels":"channel"} ${K.join(", ")}.`})}if(a.length===0)return $h({truncated:s,rowCount:e.length,error:"No measure configured."});const f=r.bin?.channel,p=r.bin?.width,b=r.bin?.unit,y=new Map;let k=0;for(const K of e){let ie=[{values:[],labels:[],sortValue:void 0}];for(const de of c){const H=n[de],te=o.get(H),q=fC(K,H,te),Q=[];for(const ae of ie)for(const we of q){let xe,Me=we;if(f===de)if(b){const pe=dC(we,b);pe===null?(xe=gs,Me=null):(xe=pe,Me=pe)}else if(p){const pe=hC(we,p);pe===null?(xe=gs,Me=null):(xe=pe.label,Me=pe.key)}else xe=ar(we)?gs:String(we);else xe=ar(we)?gs:String(we);Q.push({values:[...ae.values,we],labels:[...ae.labels,xe],sortValue:ae.labels.length===0?Me:ae.sortValue})}ie=Q}for(const de of ie){const H=de.labels.join("  ");let te=y.get(H);te||(te={key:H,labels:de.labels,values:de.values,measured:a.map(()=>[]),sortValue:de.sortValue},y.set(H,te)),a.forEach((q,Q)=>{if(q.fn==="count"){te.measured[Q]?.push(1);return}const ae=n[q.channel],xe=o.get(ae)?.type==="array"||Array.isArray(K.data[ae])?ut(K.data[ae]):[K.data[ae]];for(const Me of xe)te.measured[Q]?.push(Me)})}}const C=[...y.values()].map(K=>{const ie=a.map((de,H)=>{const te=pC(de.fn,K.measured[H]??[]);return k+=te.skipped,te.value});return{bucket:K,points:ie}}),E=K=>K.points[0]??Number.NEGATIVE_INFINITY,T=(K,ie)=>K.key.localeCompare(ie.key),Y=c.length>0?o.get(n[c[0]])?.type:void 0,L=r.sort??"category";L==="value"?C.sort((K,ie)=>E(K)-E(ie)||T(K.bucket,ie.bucket)):L==="valueDesc"?C.sort((K,ie)=>E(ie)-E(K)||T(K.bucket,ie.bucket)):C.sort((K,ie)=>{const de=K.bucket.sortValue,H=ie.bucket.sortValue,te=ar(de),q=ar(H);return te!==q?te?1:-1:te&&q?T(K.bucket,ie.bucket):r.bin&&r.bin.channel===c[0]?typeof de=="number"&&typeof H=="number"?de-H||T(K.bucket,ie.bucket):String(de).localeCompare(String(H))||T(K.bucket,ie.bucket):af(de,H,Y??"string")||T(K.bucket,ie.bucket)});let ne=C.map(K=>({key:K.bucket.key,label:K.bucket.labels.join(" · "),values:K.bucket.values})),W=C.map(K=>K.points);const I=r.topN;if(I&&I>0&&ne.length>I){const K=[...C].sort((q,Q)=>E(Q)-E(q)||T(q.bucket,Q.bucket)),ie=new Set(K.slice(0,I).map(q=>q.bucket.key)),de=[],H=[],te=[];ne.forEach((q,Q)=>{ie.has(q.key)?(de.push(q),H.push(W[Q]??[])):te.push(W[Q]??[])}),te.length>0&&(de.push({key:kh,label:kh,values:[]}),H.push(a.map((q,Q)=>{const ae=te.map(we=>we[Q]).filter(we=>we!=null);return ae.length===0?null:q.fn==="min"?Math.min(...ae):q.fn==="max"?Math.max(...ae):ae.reduce((we,xe)=>we+xe,0)}))),ne=de,W=H}const V=a.map((K,ie)=>{const de=n[K.channel],H=de?o.get(de)?.label??de:K.channel??"Value";return{key:`${K.channel}:${K.fn}`,label:mC(K.fn,H),points:W.map(te=>te[ie]??null)}});return{categories:ne,series:V,rowCount:e.length,truncated:s,skipped:k}}function bC(e){if(e==null)return"";if(typeof e=="boolean")return e?"true":"false";const t=typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e);return t===""?"":/[",\r\n]/.test(t)?`"${t.replace(/"/g,'""')}"`:t}function Uc(e){return e.map(t=>t.map(bC).join(",")).join(`\r
`)}function wC(e){return Uc([["Word","Count"],...e.map(t=>[t.term,t.count])])}function yC(e){const t=["Category",...e.series.map(r=>r.label)],n=e.categories.map((r,i)=>[r.label,...e.series.map(s=>s.points[i]??"")]);return Uc([t,...n])}function vC(e){const t=e.some(s=>s.label!=null&&s.label!==""),n=e.some(s=>s.weight!=null),r=["Latitude","Longitude",...t?["Label"]:[],...n?["Weight"]:[]],i=e.map(s=>[s.lat,s.lon,...t?[s.label??""]:[],...n?[s.weight??""]:[]]);return Uc([r,...i])}function kC(e){const t=e.trim().replace(/[^A-Za-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"");return`${t===""?"visualization":t}.csv`}function $C(e){return e==null?!0:typeof e=="string"?e.trim()==="":Array.isArray(e)?e.length===0:!1}function xC(e,t){let n=0;for(const r of e)$C(r.data[t])||n++;return n}function SC(e,t,n){if(e.length===0)return[];const r=new Map(t.map(s=>[s.field,s])),i=[];for(const s of n)s.field&&r.has(s.field)&&xC(e,s.field)===0&&i.push({label:s.label,column:r.get(s.field)?.label||s.field});return i}const CC=e=>e.toLocaleString();function _C(e,t){if(e.length===0)return null;const n=`${CC(t)} ${t===1?"row":"rows"}`;if(e.length===1){const i=e[0];return`Nothing to show: the column “${i.column}” is empty in all ${n}. Pick a different column for ${i.label} with Edit.`}return`Nothing to show: the columns ${e.map(i=>`“${i.column}”`).join(" and ")} are empty in all ${n}. Pick different columns with Edit.`}function EC(e){const t=[];return e.minLength>1&&t.push(`shorter than ${e.minLength} characters`),e.stopWordsOn&&t.push("a common word (the, and, of…)"),e.numbersExcluded&&t.push("a number"),`No words left to show.${t.length>0?` Every word was ${t.join(", or ")}.`:""} Adjust the word rules with Chart, or map a different column with Edit.`}const TC=["#2563eb","#0891b2","#7c3aed","#db2777","#ea580c","#16a34a","#ca8a04","#dc2626"];function On(e,t,n){const r=e.getPropertyValue(t).trim();return r===""?n:r}function Bc(e){const t=getComputedStyle(e),n=On(t,"--viz-palette","").split(",").map(o=>o.trim()).filter(o=>o!==""),i=(n.length>0?n:TC).map((o,a)=>On(t,`--viz-color-${a+1}`,o)),s=Number.parseFloat(On(t,"--viz-font-size",""));return{palette:i,grid:On(t,"--viz-grid","rgba(127,127,127,0.25)"),text:On(t,"--viz-text",t.color||"#111827"),mutedText:On(t,"--viz-muted-text","rgba(127,127,127,0.9)"),fontFamily:On(t,"--viz-font-family",t.fontFamily||"system-ui, sans-serif"),fontSize:Number.isFinite(s)&&s>0?s:12}}function IC(e,t){const n=/^#([0-9a-f]{6})$/i.exec(e.trim());if(n){const i=Number.parseInt(n[1],16);return`rgba(${i>>16&255}, ${i>>8&255}, ${i&255}, ${t})`}const r=/^#([0-9a-f]{3})$/i.exec(e.trim());if(r){const[i,s,o]=[...r[1]].map(a=>Number.parseInt(a+a,16));return`rgba(${i}, ${s}, ${o}, ${t})`}return e}let bs=null;async function AC(){return bs||(bs=(async()=>{const e=await Ae(()=>import("./chart-Cns13J0s.js"),[]);return e.Chart.register(e.BarController,e.BarElement,e.LineController,e.LineElement,e.PointElement,e.PieController,e.ArcElement,e.CategoryScale,e.LinearScale,e.Tooltip,e.Legend),e.Chart})(),bs)}const xh=new Intl.NumberFormat;class Uo extends $e{constructor(){super(...arguments),this.kind="bar",this.data={categories:[],series:[]},this.options={},this.emptyText="No data to chart.",this.chart=null,this.ro=null,this.generation=0}static{this.styles=Se`
    :host {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 80px;
      container-type: size;
    }
    .wrap {
      position: absolute;
      inset: 0;
    }
    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
    .empty {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0.5rem 1rem;
      text-align: center;
      font: 12px/1.5 var(--viz-font-family, system-ui, sans-serif);
      color: var(--viz-muted-text, rgba(127, 127, 127, 0.9));
    }
    /* The accessible equivalent of the canvas. Visually hidden rather than
       display:none, so a screen reader reaches it — a canvas has no readable
       content of its own. Doubles as the copy-the-numbers affordance. */
    .a11y {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }
  `}static get properties(){return{kind:{type:String},data:{attribute:!1},options:{attribute:!1},emptyText:{type:String}}}connectedCallback(){super.connectedCallback(),this.ro=new ResizeObserver(()=>this.chart?.resize()),this.ro.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.generation++,this.ro?.disconnect(),this.ro=null,this.chart?.destroy(),this.chart=null}updated(t){(t.has("data")||t.has("options")||t.has("kind"))&&this.draw()}get hasData(){return this.data.categories.length>0&&this.data.series.length>0}buildConfig(t){const n=Bc(this),r=this.options,i=this.kind==="pie",s=this.kind==="line",o=this.kind==="bar",a=r.legend??(i?!0:this.data.series.length>1);t.defaults.font.family=n.fontFamily,t.defaults.font.size=n.fontSize,t.defaults.color=n.text;const c=this.data.series.map((p,b)=>{const y=n.palette[b%n.palette.length]??"#2563eb";return i?{label:p.label,data:p.points,backgroundColor:this.data.categories.map((k,$)=>n.palette[$%n.palette.length]??y),borderColor:n.grid,borderWidth:1}:{label:p.label,data:p.points,backgroundColor:s?IC(y,r.area?.25:0):y,borderColor:y,borderWidth:s?2:0,fill:s?r.area??!1:!1,tension:s&&r.smooth?.35:0,pointRadius:s?2:0,spanGaps:!1}}),d={beginAtZero:r.beginAtZero??!0,stacked:r.stacked??!1,grid:{color:n.grid},border:{color:n.grid},ticks:{color:n.text,callback:p=>typeof p=="number"?xh.format(p):String(p)},title:r.yTitle?{display:!0,text:r.yTitle,color:n.text}:{display:!1}},f={stacked:r.stacked??!1,grid:{display:!1,color:n.grid},border:{color:n.grid},ticks:{color:n.text,autoSkip:!0,maxRotation:0},title:r.xTitle?{display:!0,text:r.xTitle,color:n.text}:{display:!1}};return{type:i?"pie":s?"line":"bar",data:{labels:this.data.categories,datasets:c},options:{responsive:!0,maintainAspectRatio:!1,animation:!1,...o?{indexAxis:"y"}:{},plugins:{legend:{display:a,labels:{color:n.text}},tooltip:{enabled:!0}},...i?{}:{scales:o?{x:d,y:f}:{x:f,y:d}}}}}async draw(){const t=++this.generation;if(!this.hasData){this.chart?.destroy(),this.chart=null;return}const n=await AC();if(t!==this.generation||!this.isConnected)return;const r=this.renderRoot.querySelector("canvas");r&&(this.chart?.destroy(),this.chart=new n(r,this.buildConfig(n)))}summary(){const t=this.data.categories.length,n=this.data.series.map(r=>r.label).join(", ");return`${this.kind} chart, ${t} ${t===1?"category":"categories"}${n?`, showing ${n}`:""}`}render(){return this.hasData?v`
      <div class="wrap" role="img" aria-label=${this.summary()}>
        <canvas></canvas>
      </div>
      <table class="a11y">
        <caption>
          ${this.summary()}
        </caption>
        <thead>
          <tr>
            <th scope="col">Category</th>
            ${this.data.series.map(t=>v`<th scope="col">${t.label}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.data.categories.map((t,n)=>v`
              <tr>
                <th scope="row">${t}</th>
                ${this.data.series.map(r=>v`<td>${r.points[n]==null?"":xh.format(r.points[n])}</td>`)}
              </tr>
            `)}
        </tbody>
      </table>
      ${X}
    `:v`<div class="empty">${this.emptyText}</div>`}}class RC extends Uo{constructor(){super(...arguments),this.kind="bar"}}class OC extends Uo{constructor(){super(...arguments),this.kind="column"}}class DC extends Uo{constructor(){super(...arguments),this.kind="line"}}class LC extends Uo{constructor(){super(...arguments),this.kind="pie"}}function MC(){const e=[["viz-bar-chart",RC],["viz-column-chart",OC],["viz-line-chart",DC],["viz-pie-chart",LC]];for(const[t,n]of e)customElements.get(t)||customElements.define(t,n)}let ws=null,Sh=!1;async function PC(){return ws||(ws=(async()=>{const[e]=await Promise.all([Ae(()=>import("./leaflet-src-C0M2-I1S.js").then(t=>t.l),[]),zC()]);return e.default??e})(),ws)}async function zC(){if(Sh||typeof document>"u")return;Sh=!0;const e=(await Ae(async()=>{const{default:n}=await import("./leaflet-xBcqXExc.js");return{default:n}},[])).default,t=document.createElement("style");t.dataset.vizLeaflet="",t.textContent=e,document.head.append(t)}class NC extends $e{constructor(){super(...arguments),this.points=[],this.options={},this.emptyText="No points to map.",this.map=null,this.tiles=null,this.markers=[],this.ro=null,this.generation=0,this.tileError=!1}createRenderRoot(){return this}static get properties(){return{points:{attribute:!1},options:{attribute:!1},emptyText:{type:String},tileError:{state:!0}}}connectedCallback(){super.connectedCallback(),this.style.display="block",this.style.position="relative",this.style.height="100%",this.style.minHeight="120px",this.ro=new ResizeObserver(()=>this.map?.invalidateSize()),this.ro.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.generation++,this.ro?.disconnect(),this.ro=null,this.map?.remove(),this.map=null,this.tiles=null,this.markers=[]}updated(t){(t.has("points")||t.has("options"))&&this.draw()}async draw(){const t=++this.generation,n=this.querySelector(".map");if(!n||this.points.length===0)return;const r=await PC();if(t!==this.generation||!this.isConnected)return;const i=Bc(this);this.map||(this.map=r.map(n,{attributionControl:!0})),this.tiles?this.options.tileUrl&&this.tiles.options.attribution!==void 0&&this.tiles.setUrl(this.options.tileUrl):(this.tiles=r.tileLayer(this.options.tileUrl??"",{attribution:this.options.attribution??"",maxZoom:19}),this.tiles.on("tileerror",()=>{this.tileError||(this.tileError=!0)}),this.tiles.addTo(this.map));for(const f of this.markers)f.remove();this.markers=[];const s=this.points.map(f=>f.weight??0).filter(f=>Number.isFinite(f)&&f>0),o=s.length>0?Math.max(...s):0,a=this.options.radius??6,c=i.palette[0]??"#2563eb";for(const f of this.points){const p=this.options.scaleByWeight&&o>0?Math.sqrt((f.weight??0)/o):1,b=r.circleMarker([f.lat,f.lon],{radius:Math.max(2,a*(p||1)),color:c,weight:1,fillColor:c,fillOpacity:.6});f.label&&b.bindTooltip(String(f.label)),b.addTo(this.map),this.markers.push(b)}const d=r.latLngBounds(this.points.map(f=>[f.lat,f.lon]));d.isValid()&&this.map.fitBounds(d,{padding:[24,24],maxZoom:12}),this.map.invalidateSize()}render(){return this.points.length===0?v`<div style="display:flex;align-items:center;justify-content:center;height:100%;padding:.5rem 1rem;text-align:center;font:12px/1.5 system-ui,sans-serif;color:rgba(127,127,127,.9)">
        ${this.emptyText}
      </div>`:v`
      <div
        class="map"
        role="img"
        aria-label="Map of ${this.points.length} ${this.points.length===1?"point":"points"}"
        style="position:absolute;inset:0;background:var(--viz-map-bg, #e5e7eb)"
      ></div>
      ${this.tileError?v`<div role="status" style="position:absolute;left:0;right:0;bottom:0;z-index:500;padding:3px 8px;font:11px/1.35 system-ui,sans-serif;color:#92400e;background:rgba(255,251,235,.95)">
            Map tiles could not be loaded — the points are still plotted. Check the tile URL in Settings → Visualizations, or your connection.
          </div>`:X}
    `}}function jC(){customElements.get("viz-point-map")||customElements.define("viz-point-map",NC)}function FC(e,t,n){if(e.length===0)return[];const r=e.map(o=>o.count),i=Math.min(...r),s=Math.max(...r);return e.map(o=>{const a=s===i?.5:(Math.sqrt(o.count)-Math.sqrt(i))/(Math.sqrt(s)-Math.sqrt(i));return{...o,size:Math.round(t+a*(n-t))}})}function UC(e,t,n,r){const s=Math.max(1,t)*Math.max(1,n)/Math.max(1,e),o=Math.sqrt(s)*.42,a=Math.min(o,Math.min(t,n)/5);return Math.max(r+4,Math.round(a))}class BC extends $e{constructor(){super(...arguments),this.terms=[],this.options={},this.emptyText="No words to show.",this.placed=[],this.dropped=0,this.w=0,this.h=0,this.generation=0,this.ro=null}static{this.styles=Se`
    :host {
      display: block;
      position: relative;
      height: 100%;
      min-height: 100px;
    }
    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
    text {
      font-family: var(--viz-font-family, system-ui, sans-serif);
      font-weight: 600;
      cursor: default;
    }
    .dropped {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 2px 6px;
      font: 10px/1.3 var(--viz-font-family, system-ui, sans-serif);
      color: var(--viz-muted-text, rgba(127, 127, 127, 0.9));
      background: rgba(127, 127, 127, 0.08);
      pointer-events: none;
    }
    .empty {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0.5rem 1rem;
      text-align: center;
      font: 12px/1.5 var(--viz-font-family, system-ui, sans-serif);
      color: var(--viz-muted-text, rgba(127, 127, 127, 0.9));
    }
  `}static get properties(){return{terms:{attribute:!1},options:{attribute:!1},emptyText:{type:String},placed:{state:!0},dropped:{state:!0}}}connectedCallback(){super.connectedCallback(),this.ro=new ResizeObserver(()=>{const t=this.getBoundingClientRect();Math.abs(t.width-this.w)<8&&Math.abs(t.height-this.h)<8||this.layout()}),this.ro.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.generation++,this.ro?.disconnect(),this.ro=null}updated(t){(t.has("terms")||t.has("options"))&&this.layout()}async layout(){const t=++this.generation;if(this.terms.length===0){this.placed=[];return}const n=this.getBoundingClientRect(),r=Math.max(80,Math.floor(n.width)),i=Math.max(60,Math.floor(n.height)),s=await Ae(()=>import("./index-BdoPcbF6.js").then(b=>b.i),[]);if(t!==this.generation||!this.isConnected)return;const o=s.default??s,a=Math.max(6,this.options.minFontSize??11),c=this.options.maxFontSize??UC(this.terms.length,r,i,a),d=b=>{const y=FC(this.terms,a,b);return new Promise(k=>{o().size([r,i]).words(y.map($=>({text:$.term,size:$.size,count:$.count}))).padding(2).rotate($=>this.options.rotate?qC($.text??"")%2===0?0:90:0).font("system-ui, sans-serif").fontWeight("600").fontSize($=>$.size??a).on("end",$=>k($)).start()})};let f=c,p=await d(f);for(let b=0;b<2&&p.length<this.terms.length*.9;b++){const y=Math.max(a+2,Math.round(f*.6));if(y>=f)break;f=y;const k=await d(f);if(t!==this.generation)return;if(k.length>p.length)p=k;else break}t!==this.generation||!this.isConnected||(this.placed=p,this.dropped=Math.max(0,this.terms.length-p.length),this.w=r,this.h=i)}render(){if(this.terms.length===0)return v`<div class="empty">${this.emptyText}</div>`;const t=Bc(this),n=this.w||300,r=this.h||200,i=`Word cloud of ${this.terms.length} ${this.terms.length===1?"term":"terms"}, largest ${this.terms[0]?.term??""}`;return v`
      ${this.dropped>0?v`<div class="dropped" role="status">${this.dropped} more ${this.dropped===1?"word did":"words did"} not fit — make the pane bigger or show fewer words.</div>`:X}
      <svg viewBox="0 0 ${n} ${r}" role="img" aria-label=${i} preserveAspectRatio="xMidYMid meet">
        <g transform="translate(${n/2},${r/2})">
          ${this.placed.map((s,o)=>Ob`
              <text text-anchor="middle" transform="translate(${s.x},${s.y}) rotate(${s.rotate})" font-size=${s.size} fill=${t.palette[o%t.palette.length]??t.text}>
                <title>${s.text}: ${s.count.toLocaleString()}</title>
                ${s.text}
              </text>
            `)}
        </g>
      </svg>
      ${X}
    `}}function qC(e){let t=0;for(let n=0;n<e.length;n++)t=t*31+e.charCodeAt(n)|0;return Math.abs(t)}function HC(){customElements.get("viz-word-cloud")||customElements.define("viz-word-cloud",BC)}var VC=Object.defineProperty,KC=Object.getOwnPropertyDescriptor,wn=(e,t,n,r)=>{for(var i=r>1?void 0:r?KC(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&VC(t,n,i),i};MC();jC();HC();let Kt=class extends $e{constructor(){super(...arguments),this.viewInstanceId="",this.instance=null,this.template=null,this.columns=[],this.frame=null,this.error="",this.loaded=!1,this.rows=[],this.rowColl=null,this.matchingTotal=0,this.truncated=!1,this.searching=!1,this.tileUrl=jc,this.tileAttribution=Fc,this.registries=null}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.teardown()}teardown(){this.instUnsub?.(),this.rowsUnsub?.(),this.tableUnsub?.(),this.dockUnsub?.(),this.instUnsub=void 0,this.rowsUnsub=void 0,this.tableUnsub=void 0,this.dockUnsub=void 0,this.rowColl=null}exportCsv(){const e=this.instance?.name??"visualization",t=kC(e);if(this.spec?.data==="rows"){const r=this.mapPoints();if(r.length>0)return{filename:t,text:vC(r)};const i=this.cloudTerms();return i.length>0?{filename:t,text:wC(i)}:null}const n=this.frame;return!n||n.categories.length===0?null:{filename:t,text:yC(n)}}async refreshNow(){const e=this.instance?.tableId;e&&await(await J()).store.rows(e).refresh?.().catch(()=>{});const t=this.instance?.dock;if(t){const n=t.host.kind==="view"?t.host.viewInstanceId:t.host.tableId,r=lh(n);r?this.acceptPublishedRows(r):this.recompute(),this.requestUpdate();return}await this.reload()}async reload(){this.teardown(),await this.load()}get spec(){const e=this.template?.viz?.kind;return e?this.registries?.visualizations.get(e)??null:null}async load(){if(!this.viewInstanceId)return;const e=await J();this.registries=e.registries,this.instUnsub=e.store.viewInstances.subscribe(n=>{const r=n.find(s=>s.id===this.viewInstanceId);if(!r)return;const i=r.tableId!==this.instance?.tableId||r.templateId!==this.instance?.templateId;this.instance=r,i?this.bind():this.refreshTemplateThenRecompute()});const t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This visualization no longer exists.",this.loaded=!0;return}this.instance=t,await this.bind()}async refreshTemplateThenRecompute(){const e=await J(),t=this.instance;t&&(this.template=await e.store.viewTemplates.findOne(t.templateId)??null,this.recompute())}async bind(){const e=await J(),t=this.instance;if(!t)return;if(this.rowsUnsub?.(),this.tableUnsub?.(),this.dockUnsub?.(),this.tileUrl=await oC(e.api.settings),this.tileAttribution=await aC(e.api.settings),this.template=await e.store.viewTemplates.findOne(t.templateId)??null,!this.template){this.error="The template this visualization uses is gone.",this.loaded=!0;return}if(this.template.kind!=="viz"||!this.template.viz){this.error="This template is not a visualization.",this.loaded=!0;return}const n=await e.store.tables.findOne(t.tableId);if(!n){this.error="The table this visualization reads is gone.",this.loaded=!0;return}if(this.applyTable(n),this.tableUnsub=e.store.tables.subscribe(r=>{const i=r.find(s=>s.id===this.instance?.tableId);i&&(this.applyTable(i),this.recompute())}),t.dock){const r=t.dock.host.kind==="view"?t.dock.host.viewInstanceId:t.dock.host.tableId;this.dockUnsub=N1(r,s=>this.acceptPublishedRows(s));const i=lh(r);i&&this.acceptPublishedRows(i);return}this.rowColl=e.store.rows(t.tableId),this.rowsUnsub=this.rowColl.watch?this.rowColl.watch(()=>void this.loadRows()):this.rowColl.subscribe(()=>void this.loadRows()),await this.loadRows()}applyTable(e){this.columns=e.columns??[]}acceptPublishedRows(e){this.rows=[...e.rows],this.matchingTotal=e.total,this.truncated=e.truncated,this.searching=e.searching,this.loaded=!0,this.recompute()}async loadRows(){const e=this.rowColl,t=this.instance;if(!e||!t)return;const n={columns:this.columns,filters:{...t.filters??{},...t.pillFilters??{}},sort:Ja(t),...t.limit&&t.limit>0?{limit:t.limit}:{}},r=await xi(e,n,Pt);this.rows=r.rows,this.matchingTotal=r.total,this.truncated=r.truncated===!0,this.searching=!1,this.loaded=!0,this.recompute()}get aggregate(){return this.template?.viz?.aggregate??this.spec?.defaultAggregate??null}evaluatedRows(){const e=this.columns.filter(t=>typeof t.script=="string"&&t.script.trim()!=="");return e.length===0?this.rows:this.rows.map(t=>{const n={...t.data};for(const r of e){const i=Er(r.script,t.data);n[r.field]=i.ok?i.value:null}return{...t,data:n}})}recompute(){const e=this.instance;if(this.spec?.data==="rows"){this.frame=null,this.requestUpdate();return}const t=this.aggregate;if(!t||!e){this.frame=null;return}this.frame=gC(this.evaluatedRows(),this.columns,e.mapping??{},t,{truncated:this.truncated})}chartData(){const e=this.frame;return e?{categories:e.categories.map(t=>t.label),series:e.series.map(t=>({label:t.label,points:t.points}))}:{categories:[],series:[]}}get options(){return Sl(this.template?.viz?.options,this.instance?.vizOptions)}fieldFor(e){return this.instance?.mapping?.[e]??""}channelOfKind(e){return this.spec?.channels.find(t=>t.kind===e)?.key??null}mapPoints(){const e=this.channelOfKind("lat"),t=this.channelOfKind("lon");if(!e||!t)return[];const n=this.fieldFor(e),r=this.fieldFor(t);if(!n||!r)return[];const i=this.channelOfKind("text"),s=this.channelOfKind("weight"),o=i?this.fieldFor(i):"",a=s?this.fieldFor(s):"",c=f=>{const p=typeof f=="number"?f:typeof f=="string"&&f.trim()!==""?Number(f):NaN;return Number.isFinite(p)?p:null},d=[];for(const f of this.rows){const p=c(f.data[n]),b=c(f.data[r]);if(p===null||b===null||p<-90||p>90||b<-180||b>180)continue;const y=o?f.data[o]:void 0,k=a?c(f.data[a]):null;d.push({lat:p,lon:b,...y==null||y===""?{}:{label:String(y)},...k===null?{}:{weight:k}})}return d}cloudTerms(){const e=this.channelOfKind("text");if(!e||this.channelOfKind("lat"))return[];const t=this.fieldFor(e);if(!t)return[];const n=this.options,r=s=>{const o=Number(n[s]);return Number.isFinite(o)&&o>0?o:void 0},i=Hm(typeof n.keepWords=="string"?n.keepWords:"");return iC(this.rows.map(s=>s.data[t]),{...r("minLength")===void 0?{}:{minLength:r("minLength")},...r("maxTerms")===void 0?{}:{maxTerms:r("maxTerms")},includeNumbers:n.includeNumbers===!0,stopWords:vh(n.stopWords),...i.size>0?{keepWords:i}:{}}).map(s=>({term:s.term,count:s.count}))}mappedChannels(){const e=this.spec;if(!e)return[];const t=this.aggregate,n=[];for(const r of e.channels){const i=this.fieldFor(r.key);i&&(e.data==="aggregate"&&t&&!new Set([...t.groupBy??[],...(t.measures??[]).filter(o=>o.fn!=="count").map(o=>o.channel)]).has(r.key)||n.push({channel:r.key,label:r.label,field:i}))}return n}emptyNote(){return this.rows.length===0?null:_C(SC(this.rows,this.columns,this.mappedChannels()),this.rows.length)}elementOptions(){const e={...this.options};return this.channelOfKind("lat")&&(typeof e.tileUrl!="string"||e.tileUrl.trim()==="")&&(e.tileUrl=this.tileUrl,e.attribution=this.tileAttribution),e}note(){const e=this.frame;if(!e)return null;const t=[];if(e.truncated){const n=Dc({shown:e.rowCount,total:this.matchingTotal,searching:this.searching,searched:Pt});n&&t.push(n)}return e.skipped>0&&t.push(`${e.skipped.toLocaleString()} ${e.skipped===1?"value was":"values were"} not numeric and were left out.`),t.length>0?t.join(" "):null}render(){if(this.error)return v`<div class="error" role="status">${this.error}</div>`;if(!this.loaded)return v`<div class="placeholder">Loading…</div>`;const e=this.spec;if(!e){const s=this.template?.viz?.kind??"?";return v`<div class="error" role="status">No visualization registered for “${s}”. Its plugin may be disabled.</div>`}if(e.data==="aggregate"){if(!this.aggregate)return v`<div class="error" role="status">This visualization has no measure configured.</div>`;if(this.frame?.error)return v`<div class="error" role="status">${this.frame.error}</div>`}else{const s=e.channels.filter(o=>o.required&&!this.fieldFor(o.key));if(s.length>0)return v`<div class="error" role="status">No column mapped for ${s.map(o=>o.label).join(", ")}.</div>`}const t=this.emptyNote();if(t)return v`<div class="error" role="status">${t}</div>`;if(this.channelOfKind("text")&&!this.channelOfKind("lat")&&this.rows.length>0&&this.cloudTerms().length===0){const s=this.options,o=Number(s.minLength);return v`<div class="error" role="status">
        ${EC({minLength:Number.isFinite(o)&&o>0?o:3,stopWordsOn:vh(s.stopWords).size>0,numbersExcluded:s.includeNumbers!==!0})}
      </div>`}const n=wl(e.tag),r=this.note(),i=this.elementOptions();return v`
      <div class="chart">
        ${yl`<${n}
          .data=${this.chartData()}
          .points=${this.mapPoints()}
          .terms=${this.cloudTerms()}
          .options=${i}
        ></${n}>`}
      </div>
      ${r?v`<div class="note" role="status">${r}</div>`:X}
    `}};Kt.styles=Se`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 0;
      overflow: hidden;
      box-sizing: border-box;
      /* The default palette the elements read. Overridable per host. */
      --viz-palette: #2563eb, #0891b2, #7c3aed, #db2777, #ea580c, #16a34a, #ca8a04, #dc2626;
      font:
        12px/1.4 system-ui,
        sans-serif;
    }
    .chart {
      flex: 1;
      min-height: 0;
      padding: 4px 6px;
    }
    .note,
    .error {
      flex: none;
      padding: 3px 8px;
      font-size: 11px;
      line-height: 1.35;
      border-top: 1px solid rgba(127, 127, 127, 0.25);
    }
    .note {
      color: #92400e;
      background: #fffbeb;
    }
    .error {
      color: #b91c1c;
      background: #fef2f2;
    }
    @media (prefers-color-scheme: dark) {
      .note {
        color: #fcd34d;
        background: rgba(120, 53, 15, 0.35);
      }
      .error {
        color: #fca5a5;
        background: rgba(127, 29, 29, 0.35);
      }
    }
    .placeholder {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1rem;
      text-align: center;
      color: rgba(127, 127, 127, 0.95);
    }
  `;wn([qe({type:String})],Kt.prototype,"viewInstanceId",2);wn([z()],Kt.prototype,"instance",2);wn([z()],Kt.prototype,"template",2);wn([z()],Kt.prototype,"columns",2);wn([z()],Kt.prototype,"frame",2);wn([z()],Kt.prototype,"error",2);wn([z()],Kt.prototype,"loaded",2);Kt=wn([Oe("viz-panel")],Kt);var WC=Object.defineProperty,GC=Object.getOwnPropertyDescriptor,Mi=(e,t,n,r)=>{for(var i=r>1?void 0:r?GC(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&WC(t,n,i),i};const YC=22;let Hn=class extends $e{constructor(){super(...arguments),this.viewInstanceId="",this.label="",this.collapsed=!1,this.busy=!1}async reload(){await this.renderRoot.querySelector("viz-panel")?.reload?.()}async patch(e){if(!(this.busy||!this.viewInstanceId)){this.busy=!0;try{await(await J()).store.viewInstances.patch(this.viewInstanceId,{...e,updatedAt:Date.now()})}finally{this.busy=!1}}}toggleCollapse(){this.collapsed=!this.collapsed,this.dispatchEvent(new CustomEvent("viz-pane-collapse",{detail:{collapsed:this.collapsed},bubbles:!0,composed:!0}))}async edit(){if(!this.viewInstanceId)return;const t=await(await J()).store.viewInstances.findOne(this.viewInstanceId);t&&yr(t.tableId,{editInstanceId:this.viewInstanceId})}async refresh(){await this.renderRoot.querySelector("viz-panel")?.refreshNow?.()}undock(){this.patch({dock:void 0})}close(){this.patch({open:!1})}render(){return v`
      <div class="strip">
        <button @click=${this.toggleCollapse} title=${this.collapsed?"Expand":"Collapse"} aria-label=${this.collapsed?"Expand":"Collapse"} aria-expanded=${this.collapsed?"false":"true"}>
          <span class="mi sm">${this.collapsed?"chevron_right":"expand_more"}</span>
        </button>
        <span class="title" title=${this.label}>${this.label}</span>
        <button @click=${()=>void this.edit()} title="Edit this visualization" aria-label="Edit visualization">
          <span class="mi sm">edit</span>
        </button>
        <button @click=${()=>void this.refresh()} title="Re-read the data and redraw" aria-label="Refresh">
          <span class="mi sm">refresh</span>
        </button>
        <button @click=${this.undock} title="Open in its own window" aria-label="Open in its own window">
          <span class="mi sm">open_in_new</span>
        </button>
        <button @click=${this.close} title="Close" aria-label="Close">
          <span class="mi sm">close</span>
        </button>
      </div>
      <div class="body">
        <viz-panel .viewInstanceId=${this.viewInstanceId} style="height:100%"></viz-panel>
      </div>
    `}};Hn.styles=[_t,Se`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 0;
        height: 100%;
        overflow: hidden;
        background: var(--eda-pane-bg, transparent);
        font:
          11px/1.3 system-ui,
          sans-serif;
      }
      .strip {
        flex: none;
        display: flex;
        align-items: center;
        gap: 2px;
        height: ${YC}px;
        padding: 0 2px 0 4px;
        background: rgba(127, 127, 127, 0.12);
        border-bottom: 1px solid rgba(127, 127, 127, 0.2);
        user-select: none;
      }
      .title {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 600;
        opacity: 0.85;
      }
      button {
        flex: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        padding: 0;
        border: 0;
        border-radius: 3px;
        background: transparent;
        color: inherit;
        cursor: pointer;
        opacity: 0.7;
      }
      button:hover {
        background: rgba(127, 127, 127, 0.25);
        opacity: 1;
      }
      button .mi {
        font-size: 14px;
        line-height: 1;
      }
      .body {
        flex: 1;
        min-height: 0;
        overflow: hidden;
      }
      :host([collapsed]) .body {
        display: none;
      }
    `];Mi([qe({type:String})],Hn.prototype,"viewInstanceId",2);Mi([qe({type:String})],Hn.prototype,"label",2);Mi([qe({type:Boolean,reflect:!0})],Hn.prototype,"collapsed",2);Mi([z()],Hn.prototype,"busy",2);Hn=Mi([Oe("viz-pane")],Hn);var QC=Object.defineProperty,JC=Object.getOwnPropertyDescriptor,Bo=(e,t,n,r)=>{for(var i=r>1?void 0:r?JC(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&QC(t,n,i),i};let wr=class extends $e{constructor(){super(...arguments),this.viewInstanceId="",this.tableId="",this.kindLabel=""}connectedCallback(){super.connectedCallback(),this.load()}async load(){if(!this.viewInstanceId)return;const e=await J(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t)return;this.tableId=t.tableId;const r=(await e.store.viewTemplates.findOne(t.templateId))?.viz?.kind;this.kindLabel=(r?e.registries.visualizations.get(r)?.label:"")??""}async refresh(){await this.closest(".jsPanel")?.querySelector("viz-panel")?.refreshNow?.()}async exportCsv(){const t=this.closest(".jsPanel")?.querySelector("viz-panel")?.exportCsv?.(),n=await J();if(!t){n.api.ui.dialogs.toast("There is nothing drawn to export yet.",{kind:"info"});return}await n.api.backend.saveFile(t.filename,t.text,"text/csv")}edit(){this.tableId&&yr(this.tableId,{editInstanceId:this.viewInstanceId})}async editTemplate(){if(!this.tableId)return;const t=await(await J()).store.viewInstances.findOne(this.viewInstanceId);t&&yr(this.tableId,{editTemplateId:t.templateId})}render(){return v`
      <button @click=${this.edit} title="Edit this visualization: which columns feed which channel" aria-label="Edit visualization"><span class="mi sm">edit</span>Edit</button>
      <button @click=${()=>void this.editTemplate()} title="Edit the chart definition: kind, aggregate and options" aria-label="Edit chart definition"><span class="mi sm">tune</span>Chart</button>
      <button @click=${()=>void this.refresh()} title="Re-read the data and redraw" aria-label="Refresh"><span class="mi sm">refresh</span></button>
      <button @click=${()=>void this.exportCsv()} title="Save the numbers behind this chart as a CSV file" aria-label="Export as CSV"><span class="mi sm">download</span>CSV</button>
      <span class="spacer"></span>
      ${this.kindLabel?v`<span class="kind">${this.kindLabel}</span>`:X}
    `}};wr.styles=[_t,Se`
      /* Proportions copied from chrome/panel-footer.ts so a visualization
         window's footer reads as the same piece of furniture as a table
         window's. It was 11px type with no padding before, which measured 18px
         tall and did not read as a footer at all. */
      :host {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        width: 100%;
        padding: 0.35rem 0.55rem;
        box-sizing: border-box;
        font-size: 0.85rem;
      }
      .spacer {
        flex: 1;
      }
      .kind {
        opacity: 0.6;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      button {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        font: inherit;
        padding: 0.2rem 0.4rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        background: white;
        color: inherit;
        cursor: pointer;
      }
      button:hover {
        background: #f3f4f6;
      }
    `];Bo([qe({type:String})],wr.prototype,"viewInstanceId",2);Bo([z()],wr.prototype,"tableId",2);Bo([z()],wr.prototype,"kindLabel",2);wr=Bo([Oe("viz-footer")],wr);var XC=Object.defineProperty,ZC=Object.getOwnPropertyDescriptor,wt=(e,t,n,r)=>{for(var i=r>1?void 0:r?ZC(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&XC(t,n,i),i};let ot=class extends $e{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.rowColl=null,this.loadGeneration=0,this.searchQuery="",this.globalQuery="",this.cellRenderers=new Map,this.truncated=!1,this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()},this.loadInFlight=null,this.loadAgain=!1,this.onInputChange=async e=>{const t=e.target;if(!(t instanceof HTMLInputElement)||!t.classList.contains("eda-input")||!this.instance||this.instance.readonly===!0)return;const n=t.getAttribute("data-eda-row"),r=t.getAttribute("data-eda-field"),i=t.getAttribute("data-eda-type")??"string";if(!n||!r)return;const s=this.allRows.find(c=>c.id===n);if(!s)return;let o;if(i==="boolean")o=t.checked;else if(i==="number"){const c=Number(t.value);o=t.value.trim()===""?null:Number.isNaN(c)?t.value:c}else o=t.value;await(await J()).store.rows(this.instance.tableId).patch(n,{data:{...s.data,[r]:o},updatedAt:Date.now()})},this.onPillClick=async e=>{const t=e.target;if(!(t instanceof HTMLElement)||!t.classList.contains("eda-filter-pill")||!this.instance)return;const n=t.getAttribute("data-eda-filter-field"),r=t.getAttribute("data-eda-filter-value");!n||r==null||await this.addPill(n,r)}}get searchIsActive(){return this.searchQuery.trim()!==""||this.globalQuery.trim()!==""}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){this.mountCellRenderers(),e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}mountCellRenderers(){const e=this.renderRoot?.querySelectorAll?.(`.${Up}:not([data-eda-mounted])`);if(!e?.length)return;const t=new Map(this.rows.map(i=>[i.id,i])),n=new Map(this.tableColumns.map(i=>[i.field,i])),r=this.instance?.tokenScripts??{};for(const i of e){const s=i;s.dataset.edaMounted="1";const o=t.get(s.dataset.edaRow??""),a=s.dataset.edaField??"",c=s.dataset.edaTag??"",d=n.get(a);if(!o||!d||!c)continue;const f=document.createElement(c);f.value=Nk(o,a,r[s.dataset.edaToken??""])??"",f.column=d,f.row=o.data,f.readonly=!0,f.sourceReadonly=!0,s.replaceChildren(f)}}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await J(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers)),this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const n=await e.store.tables.findOne(t.tableId);this.tableColumns=n?.columns??[],n&&t.tableName!==n.name&&e.store.viewInstances.patch(t.id,{tableName:n.name});const r=new Map(this.tableColumns.map(i=>[i.field,i]));this.columns=t.visibleColumns.map(i=>r.get(i)??{field:i,label:i,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(i=>{const s=i.find(a=>a.id===this.viewInstanceId);if(!s)return;if(s.tableId!==this.instance?.tableId){this.instance=s,this.reload();return}const o=Ch(this.instance);this.instance=s,Ch(s)!==o?this.loadRows():this.recompute()}),this.rowColl=e.store.rows(t.tableId),this.rowsUnsub=this.rowColl.watch?this.rowColl.watch(()=>void this.loadRows()):this.rowColl.subscribe(()=>void this.loadRows()),await this.loadRows(),this.loaded=!0}loadRows(){return this.loadInFlight?(this.loadAgain=!0,this.loadInFlight):(this.loadInFlight=this.readRows().finally(()=>{this.loadInFlight=null,this.loadAgain&&(this.loadAgain=!1,this.loadRows())}),this.loadInFlight)}async readRows(){const e=this.rowColl,t=this.instance;if(!e||!t)return;const n=++this.loadGeneration,r=new Set(this.tableColumns.filter(d=>d.script).map(d=>d.field)),i=Object.fromEntries(Object.entries(t.filters??{}).filter(([d])=>!r.has(d))),o=(t.sortBy?.length?t.sortBy:t.sortColumn?[{field:t.sortColumn,asc:t.sortAsc!==!1}]:[]).filter(d=>!r.has(d.field)),a={columns:this.tableColumns,...Object.keys(i).length>0?{filters:i}:{},...o.length>0?{sort:o}:{}},c=await xi(e,a,Pt);n===this.loadGeneration&&(this.truncated=c.truncated===!0,this.allRows=c.rows,this.recompute())}recompute(){if(!this.instance)return;const e=Bd(this.allRows,this.tableColumns),t=cl(e,this.instance,this.tableColumns);let n=t;const r=this.searchQuery.trim(),i=this.globalQuery.trim();r&&(n=pi(n,r,this.tableColumns)),i&&(n=pi(n,i,this.tableColumns));const s=this.instance.limit??0;s>0&&n.length>s&&(n=n.slice(0,s)),this.rows=n,this.templateOn&&Sm(this.viewInstanceId,n.length,t.length)}async addPill(e,t){if(!this.instance)return;const n=Hk(this.instance.pillFilters?.[e],t),r={...this.instance.pillFilters??{},[e]:n};await(await J()).store.viewInstances.patch(this.instance.id,{pillFilters:r,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:r},this.recompute()}rowsFacetedFor(e){if(!this.instance)return[];const t={...this.instance.pillFilters??{}};return delete t[e],cl(Bd(this.allRows,this.tableColumns),{...this.instance,pillFilters:t},this.tableColumns)}async setPillFilter(e,t){if(!this.instance)return;const n={...this.instance.pillFilters??{}};t.trim()===""?delete n[e]:n[e]=t,await(await J()).store.viewInstances.patch(this.instance.id,{pillFilters:n,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:n},this.recompute()}async cyclePill(e,t){await this.setPillFilter(e,Wk(this.instance?.pillFilters?.[e],t))}async openPillValues(e,t){const n=it.instance;if(!n)return;const r=this.rowsFacetedFor(e),i=this.tableColumns.find(c=>c.field===e)?.type;if(!hf(r,e,{type:i}))return;const{values:s,blanks:o}=si(r,e,{type:i});if(s.length===0)return;const a=await n.open(t.getBoundingClientRect(),s,this.instance?.pillFilters?.[e]??"",o,c=>void this.setPillFilter(e,c),{exact:!0});a!==null&&(typeof a=="object"&&"clear"in a?await this.setPillFilter(e,""):typeof a=="string"&&await this.setPillFilter(e,a))}async removePill(e,t){if(!this.instance)return;const n=Vk(this.instance.pillFilters?.[e],t),r={...this.instance.pillFilters??{}};n===""?delete r[e]:r[e]=n,await(await J()).store.viewInstances.patch(this.instance.id,{pillFilters:r,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:r},this.recompute()}async setSortColumn(e){if(!this.instance)return;await(await J()).store.viewInstances.patch(this.instance.id,{sortColumn:e||void 0,updatedAt:Date.now()}),this.instance={...this.instance,sortColumn:e||void 0},this.recompute()}async toggleSortDir(){if(!this.instance?.sortColumn)return;const e=!(this.instance.sortAsc??!0);await(await J()).store.viewInstances.patch(this.instance.id,{sortAsc:e,updatedAt:Date.now()}),this.instance={...this.instance,sortAsc:e},this.recompute()}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await J()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||yr(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&yr(this.instance.tableId,{editInstanceId:this.instance.id})}async deleteView(){if(!this.instance)return;const e=await J();await e.api.ui.dialogs.confirm(`Delete the view "${this.instance.name}"? The table and its rows stay.`,"Delete view")&&await e.store.viewInstances.remove(this.instance.id)}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,r=t.includes(e)?t.filter(s=>s!==e):[...t,e];if(r.length===0)return;await(await J()).store.viewInstances.patch(this.instance.id,{visibleColumns:r,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:r}}renderTable(){return this.rows.length===0?v`<div class="vw-empty">No rows.</div>`:v`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>v`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>v`<tr>
                ${this.columns.map(t=>{const n=e.data[t.field],r=n==null?"":String(n);return v`<td title=${r}>${r}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}renderTemplated(){const e=this.template;if(!e)return v`<div class="vw-empty">This view's template is missing.</div>`;if(Yk(e.rowHtml)){const t=this.instance?.mapping??{},n=new Map(this.tableColumns.map(c=>[c.field,c])),r=this.instance?.readonly===!0,i=this.instance?.tokenScripts??{},s=this.instance?.tokenRaw??{},o=this.rows.map(c=>Uk(e.rowHtml,c,t,{columns:n,readonly:r,scripts:i,renderers:this.cellRenderers,raw:s})).join(""),a=(e.headerHtml??"")+o+(e.footerHtml??"");return v`<div class="vw-root">${lr(a)}</div>`}return v`<div class="vw-root">
      ${e.headerHtml?.trim()?v`<div class="vw-html">${lr(e.headerHtml)}</div>`:X} ${this.renderTable()}
      ${e.footerHtml?.trim()?v`<div class="vw-html">${lr(e.footerHtml)}</div>`:X}
    </div>`}renderSortBar(){if(!this.instance)return X;const e=this.renderPillChips(),t=Array.isArray(e)&&e.length>0;if(!this.templateOn)return t?v`<div class="vw-sortbar">${e}</div>`:X;const n=this.tableColumns.filter(s=>s.sortable!==!1),r=this.instance.sortColumn??"",i=this.instance.sortAsc??!0;return v`<div class="vw-sortbar">
      <span class="mi" title="Sort">sort</span>
      <select aria-label="Sort by" @change=${s=>void this.setSortColumn(s.target.value)}>
        <option value="" ?selected=${!r}>— unsorted —</option>
        ${n.map(s=>v`<option value=${s.field} ?selected=${r===s.field}>${s.label||s.field}</option>`)}
      </select>
      <button aria-label="Toggle sort direction" title=${i?"Ascending (click for descending)":"Descending (click for ascending)"} ?disabled=${!r} @click=${()=>void this.toggleSortDir()}>
        <span class="mi">${i?"arrow_upward":"arrow_downward"}</span>
      </button>
      ${e}
    </div>`}get chipFields(){if(!this.template||!this.templateOn)return[];const e=this.instance?.mapping??{},t=Ok(this.template.headerHtml??"",this.template.rowHtml??"",this.template.footerHtml??"").map(n=>e[n]).filter(n=>!!n);return[...new Set(t)]}renderPillChips(){const e=this.instance?.pillFilters??{},t=this.chipFields;if(Object.keys(e).length===0&&t.length===0)return X;const n=[],r=new Set;for(const s of[...new Set([...t,...Object.keys(e)])]){const o=e[s];if(o)for(const a of Vn(o))a.term&&(r.add(s),n.push({field:s,value:a.term,state:a.negate?"not":"on"}))}return[...t.filter(s=>!r.has(s)).map(s=>v`<span class="eda-pill-chip off">
            <button type="button" class="eda-pill-chip-value" title=${`Filter this view by ${s}`} @click=${o=>void this.openPillValues(s,o.currentTarget)}>
              ${s} ▾
            </button>
          </span>`),...n.map(s=>v`<span class=${`eda-pill-chip${s.state==="not"?" not":""}`}>
            <button
              type="button"
              class="eda-pill-chip-field"
              title=${s.state==="not"?`Excluding this value — click to stop filtering on ${s.field}`:"Only this value — click to EXCLUDE it instead"}
              @click=${()=>void this.cyclePill(s.field,s.value)}
            >
              ${s.field}${s.state==="not"?" ≠":" ="}
            </button>
            <button type="button" class="eda-pill-chip-value" title=${`Other values of ${s.field}`} @click=${o=>void this.openPillValues(s.field,o.currentTarget)}>
              ${s.value}
            </button>
            <button type="button" class="eda-pill-chip-remove" aria-label=${`Remove filter ${s.field}: ${s.value}`} title="Remove this filter" @click=${()=>void this.removePill(s.field,s.value)}>
              ×
            </button>
          </span>`)]}renderFooter(){if(!this.instance)return X;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return v`<div class="vw-footer">
      ${!e&&this.showColsMenu?v`<div class="cols-menu">
            ${this.tableColumns.map(n=>v`<label><input type="checkbox" .checked=${t.has(n.field)} @change=${()=>void this.toggleColumn(n.field)} />${n.label||n.field}</label>`)}
          </div>`:X}
      ${e?X:v`<button title="Show / hide columns" aria-label="Columns" @click=${()=>this.showColsMenu=!this.showColsMenu}>
            <span class="mi">view_column</span>
          </button>`}
      <button aria-label="Edit view" title="Edit this view (rename, re-map columns)" @click=${()=>this.editView()}>
        <span class="mi">edit</span>
      </button>
      ${this.template?v`<button class="edit-template" aria-label="Edit template" title=${`Edit the "${this.template.name}" template`} @click=${()=>this.editTemplate()}>
            <span class="mi">code</span>
          </button>`:X}
      <button
        class=${e?"":"active"}
        title=${e?"Show as a table (turn the template off)":"Show through the template"}
        aria-label="Toggle template"
        aria-pressed=${e?"false":"true"}
        @click=${()=>void this.toggleTemplate()}
      >
        <span class="mi">table_view</span>
      </button>
      <button class="danger" aria-label="Delete view" title="Delete this view (the table stays)" @click=${()=>void this.deleteView()}>
        <span class="mi">delete</span>
      </button>
    </div>`}render(){if(!this.loaded)return v`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return v`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const e=this.templateOn,t=e?v`<div class="vw-body scroll" @change=${this.onInputChange} @click=${this.onPillClick}>${this.renderTemplated()}</div>`:v`<div class="vw-body grid">
          <data-table .tableId=${this.instance?.tableId??""} .viewInstanceId=${this.viewInstanceId}></data-table>
        </div>`,n=e&&this.truncated?Dc({shown:this.rows.length,total:this.allRows.length,searching:this.searchIsActive,searched:Pt}):null;return v`${this.renderSortBar()}${n?v`<div class="vw-note" role="status">${n}</div>`:X}${t}${this.renderFooter()}`}};ot.styles=[_t,Se`
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
      /* Says the view is showing a slice of its table. Mirrors the grid's
         .truncated-note — same colours, same job. (No backticks in here: this
         is a template literal, and one would end it.) */
      .vw-note {
        flex: 0 0 auto;
        padding: 0.25rem 0.5rem;
        background: #fef3c7;
        border-bottom: 1px solid #fcd34d;
        color: #92400e;
        font-size: 0.75rem;
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
        /* Clip a long value to the column instead of stretching the table past
           the window; the cell's title attribute carries the whole thing.
           Matches the grid (data-table). */
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 40ch;
      }
      table.vw-table th {
        background: #f9fafb;
        position: sticky;
        top: 0;
      }
      .vw-html {
        padding: 0.5rem 0.75rem;
      }
      /* Editable $input.TOKEN controls injected into a template's row HTML. */
      .eda-input-field {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        cursor: pointer;
        font-size: 0.82rem;
        color: #374151;
      }
      .eda-input-field input[disabled] {
        cursor: not-allowed;
      }
      .eda-input-field .eda-input-label:empty {
        display: none;
      }
      /* $filter.TOKEN pill rendered inline in a template's row HTML — looks
         clickable, sits in the flow of the text around it. */
      .eda-filter-pill {
        font: inherit;
        display: inline;
        padding: 0.05rem 0.5rem;
        margin: 0 0.1rem;
        border: none;
        border-radius: 1rem;
        background: #e0f2fe;
        color: #0369a1;
        cursor: pointer;
      }
      .eda-filter-pill:hover {
        background: #bae6fd;
      }
      /* A token script that will not compile, or that throws. Marked in place —
         a blank card would read as "no data" and hide the broken script. */
      .eda-script-error {
        display: inline-block;
        padding: 0 0.35rem;
        border-radius: 0.25rem;
        background: #fee2e2;
        color: #b91c1c;
        font-size: 0.8rem;
        cursor: help;
      }
      .eda-pill-chip {
        display: inline-flex;
        align-items: center;
        gap: 0.3rem;
        padding: 0.1rem 0.3rem 0.1rem 0.55rem;
        border-radius: 1rem;
        background: #e0f2fe;
        color: #0369a1;
        font-size: 0.8rem;
      }
      /* A chip is two buttons, because it does two things: the FIELD (with the
         operator) cycles = / != / off, and the VALUE opens the field's other
         values as a checklist. */
      .eda-pill-chip-field,
      .eda-pill-chip-value {
        padding: 0;
        border: none;
        background: transparent;
        color: inherit;
        font: inherit;
        cursor: pointer;
      }
      .eda-pill-chip-field {
        font-weight: 600;
      }
      .eda-pill-chip-field:hover,
      .eda-pill-chip-value:hover {
        text-decoration: underline;
      }
      /* Idle: the template offers this filter, nothing is filtering on it. Quiet
         and dashed so it reads as an offer, not as an active filter. */
      .eda-pill-chip.off {
        background: transparent;
        border: 1px dashed #7dd3fc;
        color: #0369a1;
        opacity: 0.75;
        padding: 0 0.3rem;
      }
      .eda-pill-chip.off:hover {
        opacity: 1;
        border-style: solid;
      }
      /* An excluded value reads as excluded at a glance, not only by its ≠. */
      .eda-pill-chip.not {
        background: #fee2e2;
        color: #b91c1c;
      }
      .eda-pill-chip.not .eda-pill-chip-remove:hover {
        background: rgba(185, 28, 28, 0.15);
      }
      .eda-pill-chip-remove {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.1rem;
        height: 1.1rem;
        padding: 0;
        border: none;
        border-radius: 50%;
        background: transparent;
        color: inherit;
        cursor: pointer;
        line-height: 1;
      }
      .eda-pill-chip-remove:hover {
        background: rgba(3, 105, 161, 0.15);
      }
      /* One toolbar at the top of a view: the sort controls (template mode) and
         the active filter chips, which used to sit in a second bar of their own. */
      .vw-sortbar {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        flex-wrap: wrap;
        padding: 0.3rem 0.5rem;
        border-bottom: 1px solid #e5e7eb;
        background: #ffffff;
        font-size: 0.82rem;
        color: #6b7280;
      }
      .vw-sortbar select {
        font: inherit;
        padding: 0.15rem 0.3rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        background: white;
        color: #374151;
      }
      .vw-sortbar button {
        display: inline-flex;
        align-items: center;
        padding: 0.15rem 0.3rem;
        border: 1px solid #d1d5db;
        background: white;
        border-radius: 0.25rem;
        cursor: pointer;
        color: #374151;
      }
      .vw-sortbar button:hover {
        background: #f3f4f6;
      }
      .vw-sortbar button[disabled] {
        opacity: 0.5;
        cursor: default;
      }
      .vw-sortbar .mi {
        font-size: 1.05rem;
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
      /* Same dark red as the delete-table trash icon (panel-footer). */
      .vw-footer button.danger {
        color: #b91c1c;
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
    `];wt([qe({type:String})],ot.prototype,"viewInstanceId",2);wt([z()],ot.prototype,"loaded",2);wt([z()],ot.prototype,"error",2);wt([z()],ot.prototype,"instance",2);wt([z()],ot.prototype,"template",2);wt([z()],ot.prototype,"columns",2);wt([z()],ot.prototype,"tableColumns",2);wt([z()],ot.prototype,"rows",2);wt([z()],ot.prototype,"showColsMenu",2);wt([z()],ot.prototype,"searchQuery",2);wt([z()],ot.prototype,"globalQuery",2);wt([z()],ot.prototype,"cellRenderers",2);wt([z()],ot.prototype,"truncated",2);ot=wt([Oe("view-window")],ot);function Ch(e){if(!e)return"";const t=e.sortBy?.length?e.sortBy.map(n=>`${n.field}:${n.asc!==!1}`).join(","):`${e.sortColumn??""}:${e.sortAsc!==!1}`;return`${JSON.stringify(e.filters??{})}|${t}`}const Wm=480,Gm=520,lt=new Map,Cl=new Set,_l=new Set;function e_(e){return _l.has(e)}function qc(e){return e_(e.templateId)}async function t_(){await Promise.all([...lt.keys()].map(e=>Ps(e)))}function Ym(e){const t=lt.get(e);return t?(Tm(t.panel),!0):!1}const El=new Set;async function Hc(e){if(Ym(e))return;El.add(e);const t=await J(),n=await t.store.viewInstances.findOne(e);if(!n){El.delete(e);return}if(n.open){Ms(n,t),Qm(e);return}await t.store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()})}function Qm(e){El.delete(e)&&Ym(e)}let _h=!1;function Tl(e){e.panel.setHeaderTitle(e.name+Cm(e.count,e.total))}function n_(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function r_(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function i_(e){return`view-panel-${r_(e)}`}async function s_(){if(_h)return;_h=!0;const e=await J(),t=s=>s.filter(o=>o.workspaceId===e.workspaceId&&o.open&&!o.dock),n=s=>{_l.clear();for(const o of s)o.kind==="viz"&&_l.add(o.id)};n(await e.store.viewTemplates.find()),e.store.viewTemplates.subscribe(n);const r=t(await e.store.viewInstances.find()).sort(Ys);for(const s of r)Ms(s,e);let i=[];e.store.viewInstances.subscribe(s=>{i=s;const o=new Map(t(s).map(c=>[c.id,c]));for(const c of[...lt.keys()])o.has(c)||Ih(c);const a=[...o.values()].filter(c=>!lt.has(c.id)).sort(Ys);for(const c of a)Ms(c,e);Th(s,e)}),b1(()=>Th(i,e)),e.store.viewTemplates.subscribe(()=>{for(const[s,o]of[...lt.entries()]){const a=i.find(f=>f.id===s);if(!a)continue;const c=qc(a),d=o.el?.tagName.toLowerCase()==="viz-panel";o.el&&c!==d&&(Ih(s),Ms(a,e))}}),e.store.tables.subscribe(s=>void a_(e,s)),document.addEventListener(Xs,s=>{const o=s.detail,a=lt.get(o.key);a&&a.el&&(a.count=o.count,a.total=o.total,Tl(a))}),document.addEventListener("easydb:reload-view",s=>{const o=s.detail?.instanceId;if(!o)return;const a=lt.get(o);a&&(async()=>{const c=await e.store.viewInstances.findOne(o);c&&(a.name=c.name,Tl(a)),a.el?.reload()})()}),document.addEventListener("easydb:reload-view",s=>{const o=s.detail?.instanceId;o&&Eh(o)}),document.addEventListener("easydb:reload-views",()=>{for(const{el:s}of lt.values())s?.reload();Eh()})}const Ls=new Map;function Eh(e){for(const t of Ls.keys()){if(e&&t!==e)continue;document.querySelector(`viz-pane[data-instance="${CSS.escape(t)}"]`)?.reload?.()}}function Th(e,t){const n=new Map;for(const r of e)r.workspaceId===t.workspaceId&&(!r.open||!r.dock||qc(r)&&n.set(r.id,r));for(const[r,i]of[...Ls.entries()]){const s=n.get(r);s&&s.dock&&nh(s.dock.host)===i||(rh(i)?.removePane(r),Ls.delete(r))}for(const r of n.values()){const i=r.dock,s=nh(i.host),o=rh(s);if(!o||o.hasPane(r.id))continue;const a=document.createElement("viz-pane");a.viewInstanceId=r.id,a.label=r.name,a.dataset.instance=r.id,o.addPane({id:r.id,el:a,edge:i.edge,size:i.size,order:i.order,onResized:c=>void o_(r.id,c)}),Ls.set(r.id,s)}}function o_(e,t){return Tr(`view:${e}`,async()=>{try{const n=await J(),r=await n.store.viewInstances.findOne(e);if(!r?.dock||r.dock.size===t)return;await n.store.viewInstances.patch(e,{dock:{...r.dock,size:t},updatedAt:Date.now()})}catch{}})}async function a_(e,t){const n=t.filter(o=>o.workspaceId===e.workspaceId),r=new Set(n.map(o=>o.id)),i=new Map;for(const o of n)i.has(o.name)||i.set(o.name,o);const s=await e.store.viewInstances.find();for(const o of s){if(o.workspaceId!==e.workspaceId||r.has(o.tableId)||!o.tableName)continue;const a=i.get(o.tableName);a&&await e.store.viewInstances.patch(o.id,{tableId:a.id,updatedAt:Date.now()})}}function Ms(e,t){if(lt.has(e.id))return;const n=i_(e.id),r=e.windowGeometry,i=r?.minimized===!0,s=qc(e),o=()=>{const Y=document.createElement(s?"viz-panel":"view-window");return Y.viewInstanceId=e.id,Y.style.height="100%",Y};let a=null,c=null;const d=`view:${e.id}`,f=Y=>(c=Y,a=km(),a.setPrimary(Y),$m(d,a),a.root),p=i?document.createElement("div"):f(o());let b;const y=()=>{b&&(Js(d),a?.destroy(),a=null,b.el?.remove(),b.el=null,b.count=-1,b.total=-1,Tl(b))},k=()=>{if(!b||b.el)return;const Y=document.getElementById(n)?.querySelector(".jsPanel-content");if(!Y)return;Y.replaceChildren();const L=o();Y.appendChild(f(L)),b.el=L};let $;if(s){const Y=document.createElement("viz-footer");Y.viewInstanceId=e.id,$=Y}const C=Po({id:n,container:n_(),title:e.name,logo:s?i1:r1,color:s?"#7c3aed":"#0891b2",...$?{footerToolbar:$}:{},content:p,...r?{panelSize:{w:r.w,h:r.h},position:{x:r.x,y:r.y}}:{contentSize:{w:Wm,h:Gm},position:{centerTopOffset:60}},minimizeTo:"#easydb-minimized-dock",viewport:zo(),boot:{minimized:r?.minimized===!0,maximized:r?.maximized===!0,smallified:r?.smallified===!0},onmoved:()=>void Ps(e.id),onresized:()=>void Ps(e.id),onfronted:()=>void l_(e.id,t),onstatuschange:Y=>{Y.status==="minimized"?y():(Y.status==="normalized"||Y.status==="maximized")&&k(),Ps(e.id)},onclosed:()=>{Js(d),a?.destroy(),a=null,lt.delete(e.id),Fo(e.id),!Cl.delete(e.id)&&t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});b={panel:C,el:i?null:c,name:e.name,count:-1,total:-1},lt.set(e.id,b),Em(e.id,()=>C.front(void 0,!1));const E=document.getElementById(n),T=document.createElement("panel-search");T.tableId=e.id,E?.querySelector(".jsPanel-controlbar")?.append(T),Qm(e.id)}function Ih(e){const t=lt.get(e);if(t){lt.delete(e),Fo(e);try{t.panel.status!=="closed"&&(Cl.add(e),t.panel.close())}catch{Cl.delete(e)}}}function l_(e,t){return Tr(`view:${e}`,()=>c_(e,t))}async function c_(e,t){try{const n=await t.store.viewInstances.findOne(e);if(!n)return;const r=n.windowGeometry??{...lt.get(e)?.panel.persistRect()??{x:0,y:0,w:Wm,h:Gm},z:0,minimized:!1,maximized:!1};await t.store.viewInstances.patch(e,{windowGeometry:{...r,z:_m()},updatedAt:Date.now()})}catch{}}function Ps(e){return Tr(`view:${e}`,()=>u_(e))}async function u_(e){const t=lt.get(e);if(!t)return;const{minimized:n,maximized:r,smallified:i}=t.panel.persistFlags(),s=t.panel.persistRect();try{const o=await J(),a=(await o.store.viewInstances.findOne(e))?.windowGeometry,c={...s,z:a?.z??0,minimized:n,maximized:r,smallified:i};await o.store.viewInstances.patch(e,{windowGeometry:c,updatedAt:Date.now()})}catch{}}const Jm="scripts:samples";function d_(e){return e==="validate"?w_:b_}function h_(e){const t=typeof e=="string"?f_(e):e;if(!Array.isArray(t))return[];const n=[];for(const r of t){if(!r||typeof r!="object")continue;const{id:i,kind:s,label:o,source:a}=r;typeof i!="string"||!i||typeof o!="string"||!o.trim()||typeof a!="string"||!a.trim()||n.push({id:i,kind:s==="validate"?"validate":"render",label:o.trim(),source:a})}return n}function f_(e){try{return JSON.parse(e)}catch{return null}}function p_(e,t){return e.filter(n=>n.kind===t)}function m_(e,t){return[...e,t]}function g_(e,t){return e.filter(n=>n.id!==t)}const b_=[{label:"Join two fields into one",source:`function render(row) {
  // The simplest useful script: read any field by name off \`row\`.
  return [row.first, row.last].filter(Boolean).join(' ');
}
`},{label:"Markdown → formatted text (markdownToHtml)",source:`function render(row) {
  // Set this column's renderer to \`html\`, or the cell shows the HTML source.
  // markdownToHtml SANITISES: formatting in the data survives, a <script>
  // or an onerror= arriving from a CSV does not.
  return markdownToHtml(row.notes ?? '');
}
`},{label:"Markdown summary — first line, bolded label",source:`function render(row) {
  // Renderer: \`html\`. Builds the Markdown first, then converts it — easier to
  // read than assembling tags by hand, and the sanitising comes for free.
  if (!row.title && !row.notes) return ''; // nothing to summarise yet
  const first = String(row.notes ?? '').split('\\n')[0] ?? '';
  return markdownToHtml(\`**\${row.title ?? 'Untitled'}** — \${first}\`);
}
`},{label:"Build a URL from a field",source:`function render(row) {
  // Renderer: \`link\`, which turns the returned URL into a clickable anchor.
  const BASE = 'https://github.com/';
  if (!row.repo) return '';
  return BASE + encodeURIComponent(String(row.repo));
}
`},{label:"Build a URL with query parameters",source:"function render(row) {\n  // Renderer: `link`. `URL` + `searchParams` encodes the values for you, so\n  // spaces and & in the data can't break the link.\n  if (!row.city) return '';\n  const url = new URL('https://www.openstreetmap.org/search');\n  url.searchParams.set('query', `${row.street ?? ''} ${row.city}`.trim());\n  return url.toString();\n}\n"},{label:"Mailto link with a prefilled subject",source:"function render(row) {\n  // Renderer: `link`.\n  if (!row.email) return '';\n  const subject = encodeURIComponent(`Re: ${row.title ?? 'your enquiry'}`);\n  return `mailto:${row.email}?subject=${subject}`;\n}\n"},{label:"Maths — line total (quantity × price)",source:`function render(row) {
  // Blank, not "0.00", until both parts are there — a column of zeroes down a
  // half-filled table looks like data.
  const qty = Number(row.qty);
  const price = Number(row.price);
  if (row.qty == null || row.qty === '' || !Number.isFinite(qty)) return '';
  if (row.price == null || row.price === '' || !Number.isFinite(price)) return '';
  return (qty * price).toFixed(2);
}
`},{label:"Maths — amount as money (Intl.NumberFormat)",source:`function render(row) {
  const CURRENCY = 'CHF';
  const LOCALE = 'de-CH';
  const n = Number(row.amount);
  if (!Number.isFinite(n)) return '';
  return new Intl.NumberFormat(LOCALE, { style: 'currency', currency: CURRENCY }).format(n);
}
`},{label:"Maths — percentage of a total",source:`function render(row) {
  const part = Number(row.done ?? 0);
  const whole = Number(row.total ?? 0);
  if (!whole) return ''; // no divide-by-zero, and no "NaN%" in the grid
  return Math.round((part / whole) * 100) + '%';
}
`},{label:"Days between a date and today",source:`function render(row) {
  const FIELD = 'due';
  if (!row[FIELD]) return '';
  const then = new Date(String(row[FIELD]));
  if (Number.isNaN(then.getTime())) return '';
  // Whole days, not elapsed hours: a date-only value must read the same at
  // 09:00 and at 23:00, or "today" turns into "1 days ago" over lunch.
  const day = (d) => Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()) / 86400000;
  const days = day(then) - day(new Date());
  if (days === 0) return 'today';
  return days > 0 ? \`in \${days} days\` : \`\${-days} days ago\`;
}
`}],w_=[{label:"Required — reject an empty cell",source:`function validate(value, row) {
  if (value === null || value === undefined || String(value).trim() === '') {
    throw new Error('This field is required.');
  }
}
`},{label:"Email address",source:`function validate(value, row) {
  if (value == null || value === '') return; // blank is allowed
  if (!/^[^@\\s]+@[^@\\s]+\\.[^@\\s]{2,}$/.test(String(value))) {
    throw new Error(\`"\${value}" is not a valid email address.\`);
  }
}
`},{label:"Web address (http / https)",source:`function validate(value, row) {
  if (value == null || value === '') return;
  let url;
  try {
    url = new URL(String(value));
  } catch {
    throw new Error(\`"\${value}" is not a valid URL.\`);
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new Error('Only http:// and https:// addresses are allowed.');
  }
}
`},{label:"Whole number in a range",source:`function validate(value, row) {
  const MIN = 1;
  const MAX = 100;
  if (value == null || value === '') return;
  const n = Number(value);
  if (!Number.isInteger(n)) throw new Error(\`"\${value}" is not a whole number.\`);
  if (n < MIN || n > MAX) throw new Error(\`Must be between \${MIN} and \${MAX} (got \${n}).\`);
}
`},{label:"Positive number",source:`function validate(value, row) {
  if (value == null || value === '') return;
  const n = Number(value);
  if (Number.isNaN(n)) throw new Error(\`"\${value}" is not a number.\`);
  if (n <= 0) throw new Error('Must be greater than zero.');
}
`},{label:"Text length between two limits",source:"function validate(value, row) {\n  const MIN = 3;\n  const MAX = 40;\n  if (value == null || value === '') return;\n  const len = String(value).trim().length;\n  if (len < MIN) throw new Error(`Too short — at least ${MIN} characters (got ${len}).`);\n  if (len > MAX) throw new Error(`Too long — at most ${MAX} characters (got ${len}).`);\n}\n"},{label:"One of a fixed list of values",source:`function validate(value, row) {
  const ALLOWED = ['draft', 'review', 'published'];
  if (value == null || value === '') return;
  if (!ALLOWED.includes(String(value))) {
    throw new Error(\`"\${value}" is not allowed. Pick one of: \${ALLOWED.join(', ')}.\`);
  }
}
`},{label:"Matches a pattern (regular expression)",source:`function validate(value, row) {
  const PATTERN = /^[A-Z]{2}-\\d{4}$/; // e.g. AB-1234
  if (value == null || value === '') return;
  if (!PATTERN.test(String(value))) {
    throw new Error(\`"\${value}" doesn't match the required format (e.g. AB-1234).\`);
  }
}
`},{label:"A real date, not in the future",source:`function validate(value, row) {
  if (value == null || value === '') return;
  const d = new Date(String(value));
  if (Number.isNaN(d.getTime())) throw new Error(\`"\${value}" is not a date.\`);
  // Compare whole days, so "today" is never rejected by a few hours.
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  if (d > today) throw new Error('The date cannot be in the future.');
}
`},{label:"Depends on another column (end after start)",source:`function validate(value, row) {
  // \`row\` is the whole row, so a rule can compare fields. Rename 'start' to
  // whichever column this one has to come after.
  const OTHER = 'start';
  if (value == null || value === '') return;
  const other = row?.[OTHER];
  if (other == null || other === '') return; // nothing to compare against yet
  if (new Date(String(value)) < new Date(String(other))) {
    throw new Error(\`Must not be earlier than \${OTHER} (\${other}).\`);
  }
}
`}];var y_=Object.defineProperty,v_=Object.getOwnPropertyDescriptor,Wn=(e,t,n,r)=>{for(var i=r>1?void 0:r?v_(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&y_(t,n,i),i};const k_=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return the value this column should display.
  return row.name ?? '';
}
`;function $_(e){return`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return what this token should show; HTML is rendered, not escaped.
  return ${e?`row.${e}`:"row.name"} ?? '';
}
`}const x_=`function validate(value, row) {
  // \`value\` is what the user just typed; \`row\` is the rest of the row.
  // THROW to reject the edit — the message is what they will see.
  if (false) throw new Error('Explain what is wrong here.');
}
`;function S_(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function C_(){try{const t=await(await J()).store.settings.findOne(Jm);return h_(t?.value)}catch{return[]}}async function Ah(e){await(await J()).store.settings.upsert({name:Jm,value:[...e]})}let st=class extends $e{constructor(){super(...arguments),this.text="",this.columnLabel="",this.kind="render",this.undoText=null,this.userSamples=[],this.pickedUserId=null,this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),st.instance=this}disconnectedCallback(){super.disconnectedCallback(),st.instance===this&&(st.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&Zt("script-editor",this.dialogEl)}async open(e,t,n="render",r){return this.resolver&&(this.resolver(null),this.resolver=null),this.kind=n,this.undoText=null,this.pickedUserId=null,this.text=e&&e.trim()?e:this.blankFor(n,r?.field??""),this.columnLabel=t??"",this.userSamples=await C_(),await this.updateComplete,this.dialogEl?.showModal(),new Promise(i=>{this.resolver=i})}blankFor(e,t){return e==="validate"?x_:e==="token"?$_(t):k_}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}get sampleKind(){return this.kind==="validate"?"validate":"render"}get samples(){return d_(this.sampleKind)}get mySamples(){return p_(this.userSamples,this.sampleKind)}applySample(e){const t=e.target,n=t.value;t.value="";const r=n.startsWith("u:")?this.mySamples.find(i=>i.id===n.slice(2)):this.samples[Number(n.slice(2))];r&&(this.undoText=this.text,this.text=r.source,this.pickedUserId=n.startsWith("u:")?n.slice(2):null)}undoSample(){this.undoText!==null&&(this.text=this.undoText,this.undoText=null)}onInput(e){this.text=e.target.value,this.undoText=null}async saveAsSample(){if(!this.text.trim())return;const e=ct.instance;if(!e)return;const t=await e.prompt("Name this sample — it appears in the dropdown for every script of this kind.","","Add to samples");if(t===null||!t.trim())return;const n={id:S_(),kind:this.sampleKind,label:t.trim(),source:this.text};this.userSamples=m_(this.userSamples,n),this.pickedUserId=n.id,await Ah(this.userSamples)}async deletePickedSample(){const e=this.pickedUserId,t=e?this.mySamples.find(i=>i.id===e):void 0,n=ct.instance;!e||!t||!n||!await n.confirm(`Delete the sample "${t.label}"? The script in the editor stays as it is.`,"Delete sample")||(this.userSamples=g_(this.userSamples,e),this.pickedUserId=null,await Ah(this.userSamples))}renderHints(){return this.kind==="token"?v`
        <p class="hint">
          Define <code>function render(row) { … }</code>. <code>row</code> is the full row object. What you return is what this token shows — the stored cell is never changed. The result goes into the
          template as HTML, so <code>markdownToHtml(row.body)</code> shows formatted text and <code>new Date(row.date).toLocaleString()</code> shows a local date.
        </p>
        <p class="hint">
          Only a plain <code>$TOKEN</code> runs the script. <code>$input.TOKEN</code> and <code>$filter.TOKEN</code> keep reading the mapped column, because one writes the cell back and the other must
          match the stored value. A scripted token needs no column at all.
        </p>
      `:this.kind==="validate"?v`
        <p class="hint">
          Define <code>function validate(value, row) { … }</code>. It runs when someone edits a cell in this column by hand, after the Max / Unique / Not-null boxes have had their say.
          <strong>Throw to reject the edit</strong> — your message is what they are shown, and the cell snaps back. Return without throwing to accept it; the return value is ignored.
        </p>
        <p class="hint">
          <code>value</code> is the proposed new value, <code>row</code> the rest of the row, so a rule can compare columns. Imports, refreshes and sync are not edits and never run it.
        </p>
      `:v`
      <p class="hint">
        Define <code>function render(row) { … }</code>. <code>row</code> is the full row object. What you return is passed to the column's renderer, so the cell shows a computed value instead of the
        stored one — and the cell becomes read-only. A script that throws shows a small error chip in the cell.
      </p>
      <p class="hint">
        Besides the JS globals you can call <code>markdownToHtml(text)</code> (also <code>easydb.markdownToHtml</code>) — set this column's renderer to <code>html</code> so the result shows as
        formatted text rather than as its own source. A sample that needs a particular renderer says so in its first line; the dropdown can't set it for you.
      </p>
    `}render(){const e=this.kind==="validate",t=this.mySamples,n=this.pickedUserId?t.find(r=>r.id===this.pickedUserId):void 0;return v`
      <dialog @cancel=${this.onCancel} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${this.onCancel}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${e?"Edit validation":"Edit script"}${this.columnLabel?` — ${this.columnLabel}`:""}</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${this.onCancel}>Cancel</button>
              <button type="submit" class="primary">Save</button>
            </div>
          </div>
          <div class="dialog-body">
            ${this.renderHints()}
            <div class="samples">
              <label for="sample">Start from a sample</label>
              <select
                id="sample"
                title=${e?"Replace the editor contents with a ready-made rule":"Replace the editor contents with a ready-made script"}
                @change=${r=>this.applySample(r)}
              >
                <option value="">— choose —</option>
                ${t.length?v`<optgroup label="Your samples">${t.map(r=>v`<option value=${`u:${r.id}`}>${r.label}</option>`)}</optgroup>`:null}
                <optgroup label="Built in">${this.samples.map((r,i)=>v`<option value=${`b:${i}`}>${r.label}</option>`)}</optgroup>
              </select>
              <button
                type="button"
                class="icon danger"
                title=${n?`Delete the sample "${n.label}"`:"Pick one of your own samples to delete it"}
                ?disabled=${!n}
                @click=${()=>void this.deletePickedSample()}
              >
                🗑
              </button>
              <button
                type="button"
                class="icon"
                data-testid="sample-add"
                title="Add what is in the editor to the sample list for this kind of script"
                ?disabled=${!this.text.trim()}
                @click=${()=>void this.saveAsSample()}
              >
                +
              </button>
              ${this.undoText!==null?v`<button type="button" class="link" @click=${()=>this.undoSample()}>Undo</button>`:null}
            </div>
            <textarea spellcheck="false" autofocus .value=${this.text} @input=${r=>this.onInput(r)}></textarea>
          </div>
        </form>
      </dialog>
    `}};st.instance=null;st.styles=[mt,Se`
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
      .samples {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.85rem;
        color: #374151;
      }
      .samples select {
        font: inherit;
        padding: 0.3rem 0.4rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        flex: 1;
        min-width: 0;
      }
      button.link {
        background: transparent;
        border: 0;
        padding: 0;
        color: #2563eb;
        font: inherit;
        text-decoration: underline;
        cursor: pointer;
      }
      button.link[disabled] {
        color: #9ca3af;
        text-decoration: none;
        cursor: default;
      }
      /* Beside the dropdown: 🗑 deletes the user sample currently loaded (disabled
         — not hidden — for a built-in, so the row's shape does not jump as you
         browse it), + keeps what is in the editor. Same pair, same glyphs, as the
         Import dialog's sample row. */
      button.icon {
        background: transparent;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        padding: 0.3rem 0.5rem;
        font-size: 1rem;
        line-height: 1;
        cursor: pointer;
        flex: 0 0 auto;
      }
      button.icon:hover:not([disabled]) {
        border-color: #bfdbfe;
        background: #eff6ff;
      }
      button.icon.danger:hover:not([disabled]) {
        border-color: #fecaca;
        background: #fef2f2;
      }
      button.icon[disabled] {
        opacity: 0.4;
        cursor: default;
      }
      textarea {
        font:
          0.85rem ui-monospace,
          SFMono-Regular,
          monospace;
        padding: 0.6rem 0.75rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        min-height: 320px;
        resize: vertical;
        tab-size: 2;
      }
    `];Wn([z()],st.prototype,"text",2);Wn([z()],st.prototype,"columnLabel",2);Wn([z()],st.prototype,"kind",2);Wn([z()],st.prototype,"undoText",2);Wn([z()],st.prototype,"userSamples",2);Wn([z()],st.prototype,"pickedUserId",2);st=Wn([Oe("script-editor-dialog")],st);var __=Object.defineProperty,E_=Object.getOwnPropertyDescriptor,Ir=(e,t,n,r)=>{for(var i=r>1?void 0:r?E_(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&__(t,n,i),i};function yr(e,t){($t.instance??T_()).open(e,t)}function T_(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function Ba(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let $t=class extends $e{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.deepLinked=!1,this.registries=null,this.cloudDefaults=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),$t.instance=this}disconnectedCallback(){super.disconnectedCallback(),$t.instance===this&&($t.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&Zt("views",this.dialogEl)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,this.deepLinked=!!(t?.editTemplateId||t?.editInstanceId),await this.refresh(),t?.editTemplateId){const n=this.templates.find(r=>r.id===t.editTemplateId);n&&this.editTemplate(n)}else if(t?.editInstanceId){const n=this.instances.find(r=>r.id===t.editInstanceId);n&&await this.editInstance(n)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await J(),t=e.workspaceId;this.registries=e.registries,this.cloudDefaults=await sC(e.api.settings),this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(n=>n.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((n,r)=>n.name.localeCompare(r.name))}doneEditing(){this.deepLinked?this.close():this.mode="list"}async openInstance(e){this.close(),await Hc(e)}async editInstance(e){const n=await(await J()).store.viewTemplates.findOne(e.templateId),r=n?.kind==="viz"?this.vizSpecOf(n.viz?.kind):null,i=r?r.channels.map(s=>s.key):n?.kind==="viz"?Object.keys(e.mapping):n?jd(n.headerHtml,n.rowHtml,n.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:n?.name??"template",name:e.name,tokens:i,mapping:{...e.mapping},tokenScripts:{...e.tokenScripts??{}},tokenRaw:{...e.tokenRaw??{}},limit:e.limit??0,dock:e.dock?e.dock.edge:"window",vizOptions:Sl(n?.viz?.options,e.vizOptions),readonly:e.readonly??!1},this.mode="instance"}async deleteInstance(e){await(await J()).store.viewInstances.remove(e),await this.refresh()}async copyInstance(e){const t=await J(),n=this.columns.filter(i=>!i.hidden).map(i=>i.field),r={...e,id:Ba(),name:`${e.name} copy`,visibleColumns:n,open:!1,windowGeometry:void 0,updatedAt:Date.now()};await t.store.viewInstances.insert(r),await this.refresh()}newTemplate(e="html"){const t=e==="viz"?this.visualizations()[0]:void 0;this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:"",kind:e,viz:t?{kind:t.id,aggregate:t.defaultAggregate,options:this.seedOptions(t.id)}:null},this.mode="template"}seedOptions(e){if(e!=="wordcloud"||!this.cloudDefaults)return{};const t=this.cloudDefaults;return{minLength:t.minLength,...t.keepWords.trim()===""?{}:{keepWords:t.keepWords},stopWords:t.stopWords}}visualizations(){return[...this.registries?.visualizations.values()??[]]}vizSpecOf(e){return e?this.registries?.visualizations.get(e)??null:null}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,kind:e.kind==="viz"?"viz":"html",viz:e.viz?{...e.viz}:null},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,kind:e.kind==="viz"?"viz":"html",viz:e.viz?{...e.viz}:null},this.mode="template"}async deleteTemplate(e){const t=await J();await t.api.ui.dialogs.confirm(e.builtin?`Delete the built-in template "${e.name}"? It will not be seeded again in this workspace. Views already created from it keep working.`:`Delete the template "${e.name}"? Views already created from it keep working.`,e.builtin?"Delete built-in template":"Delete template")&&(await t.store.viewTemplates.remove(e.id),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh())}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await J(),n=this.templates.find(r=>r.id!==e.id&&r.name.trim().toLowerCase()===e.name.trim().toLowerCase());if(n){await t.api.ui.dialogs.alert(`A template called “${n.name}” already exists. Pick another name.`,"Duplicate template name");return}if(e.id){const r=this.templates.find(i=>i.id===e.id)?.builtin;await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,kind:e.kind,viz:e.kind==="viz"&&e.viz?e.viz:void 0,...r?{builtin:!1}:{},updatedAt:Date.now()})}else await t.store.viewTemplates.insert({id:Ba(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,kind:e.kind,...e.kind==="viz"&&e.viz?{viz:e.viz}:{},updatedAt:Date.now()});document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.doneEditing()}useTemplate(e){const t=e.kind==="viz"?this.vizSpecOf(e.viz?.kind):null,n=t?t.channels.map(i=>i.key):jd(e.headerHtml,e.rowHtml,e.footerHtml),r={};for(const i of n){const s=t?.channels.find(o=>o.key===i);r[i]=s?this.autoMapChannel(s):this.autoMap(i)}this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:n,mapping:r,tokenScripts:{},tokenRaw:{},limit:0,readonly:!1,dock:"window",vizOptions:Sl(e.viz?.options,void 0)},this.mode="instance"}autoMapChannel(e){const t=i=>!e.accepts||e.accepts.length===0||e.accepts.includes(i.type),n=this.autoMap(e.key);if(n&&this.columns.some(i=>i.field===n&&t(i)))return n;const r=i=>this.columns.find(o=>t(o)&&i.some(a=>`${o.field} ${o.label??""}`.toLowerCase().includes(a)))?.field??"";switch(e.kind){case"lat":return r(["latitude","lat"])||this.firstColumn(i=>t(i));case"lon":return r(["longitude","lon","lng"])||this.firstColumn(i=>t(i));case"time":return this.firstColumn(i=>t(i)&&(i.type==="date"||i.type==="datetime"))||this.firstColumn(t);case"value":case"weight":return this.firstColumn(i=>t(i)&&i.type==="number")||"";case"text":return r(["description","text","body","comment","notes","title","name"])||this.firstColumn(i=>t(i)&&i.type==="string");case"category":return this.firstColumn(i=>t(i)&&(i.type==="string"||i.type==="array"))||this.firstColumn(t);default:return""}}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),n=this.columns.find(p=>p.field.toLowerCase()===t||(p.label??"").toLowerCase()===t);if(n)return n.field;const r=/^check(\d+)$/i.exec(e);if(r){const p=Number(r[1])-1;return this.columns.filter(y=>y.type==="boolean")[p]?.field??""}if(["done","complete","completed","checked","check","read","active","enabled","starred","flag","ok"].includes(t))return this.firstColumn(p=>p.type==="boolean");const s=this.table?.labelColumn;if(s&&(t==="title"||t==="name"||t==="label"))return s;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(p=>p.type==="date"||p.type==="datetime");const a=["url","link","href","website","homepage","uri","site","web"];if(a.includes(t)){const p=this.firstColumn(b=>b.renderer==="link");return p||this.firstColumn(b=>{const y=b.field.toLowerCase(),k=(b.label??"").toLowerCase();return a.some($=>y.includes($)||k.includes($))})}const c=p=>b=>{const y=b.field.toLowerCase(),k=(b.label??"").toLowerCase();return p.some($=>y.includes($)||k.includes($))},d=["image","img","photo","picture","pic","thumbnail","thumb","avatar","cover","poster","logo","icon"];if(d.includes(t)){const p=this.firstColumn(y=>y.renderer==="image");if(p)return p;const b=this.firstColumn(c(d));return b||this.firstColumn(c(["url","src","href","link"]))}if(["email","mail","e-mail"].includes(t))return this.firstColumn(c(["mail"]));if(["phone","tel","telephone","mobile","cell","cellphone"].includes(t))return this.firstColumn(c(["phone","tel","mobile","cell"]));const f=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(f.includes(t)){const p=this.firstColumn($=>{if($.type!=="string")return!1;const C=$.field.toLowerCase(),E=($.label??"").toLowerCase();return f.some(T=>C.includes(T)||E.includes(T))});if(p)return p;const b=this.columns.filter($=>$.type==="string"),y=b[0];if(!y)return"";let k=y;for(const $ of b)($.max??0)>(k.max??0)&&(k=$);return k.field}return""}draftScripts(e){const t=Object.entries(e.tokenScripts).filter(([,n])=>n.trim());return t.length?Object.fromEntries(t):void 0}draftRaw(e){const t=Object.entries(e.tokenRaw).filter(([,n])=>n===!0);return t.length?Object.fromEntries(t):void 0}toggleTokenRaw(e){const t=this.iDraft;if(!t)return;const n={...t.tokenRaw};n[e]?delete n[e]:n[e]=!0,this.iDraft={...t,tokenRaw:n}}async editTokenScript(e){const t=st.instance,n=this.iDraft;if(!t||!n)return;const r=await t.open(n.tokenScripts[e]??"",`$${e}`,"token",{field:n.mapping[e]??""});if(r===null)return;const i={...n.tokenScripts};r.trim()?i[e]=r:delete i[e],this.iDraft={...n,tokenScripts:i}}vizDelta(e){const t=this.templates.find(r=>r.id===e.templateId);if(t?.kind!=="viz")return;const n=Vm(t.viz?.options,e.vizOptions);return Object.keys(n).length>0?n:void 0}specOfDraft(e){const t=this.templates.find(n=>n.id===e.templateId);return t?.kind==="viz"?this.vizSpecOf(t.viz?.kind):null}isVizDraft(e){return this.templates.find(t=>t.id===e.templateId)?.kind==="viz"}channelLabel(e,t){const n=this.templates.find(i=>i.id===e.templateId);return this.vizSpecOf(n?.viz?.kind)?.channels.find(i=>i.key===t)?.label??t}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await J(),n=this.draftScripts(e),r=this.draftRaw(e);if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},tokenScripts:n,tokenRaw:r,limit:e.limit>0?e.limit:void 0,readonly:e.readonly,dock:this.dockFor(e),vizOptions:this.vizDelta(e),updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.doneEditing();return}const i=this.columns.filter(o=>!o.hidden).map(o=>o.field),s={id:Ba(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:i,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{},...e.readonly?{readonly:!0}:{},...n?{tokenScripts:n}:{},...r?{tokenRaw:r}:{},...this.dockFor(e)?{dock:this.dockFor(e)}:{},...Object.keys(this.vizDelta(e)??{}).length>0?{vizOptions:this.vizDelta(e)}:{}};await t.store.viewInstances.insert(s),e.dock==="window"?await this.openInstance(s.id):(await t.store.viewInstances.patch(s.id,{open:!0,updatedAt:Date.now()}),await this.refresh(),this.close())}dockFor(e){if(e.dock==="window")return;const t=this.instances.filter(r=>r.id!==e.id&&r.dock?.edge===e.dock&&r.dock?.host.kind==="table"&&r.dock.host.tableId===this.tableId).length,n=e.id?this.instances.find(r=>r.id===e.id)?.dock:void 0;return{host:{kind:"table",tableId:this.tableId},edge:e.dock,size:n?.size??160,order:n?.order??t}}renderList(){return v`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>v`<li>
                <span class="name">${e.name}</span>
                <button type="button" class="mini" @click=${()=>this.openInstance(e.id)}>Open</button>
                <button type="button" class="mini" @click=${()=>void this.editInstance(e)}>Edit</button>
                <button type="button" class="mini" title="Duplicate this view, picking up columns added to the table since" @click=${()=>void this.copyInstance(e)}>Copy</button>
                <button type="button" class="mini danger" @click=${()=>void this.deleteInstance(e.id)}>Delete</button>
              </li>`)}
        </ul>
      </div>
      <div class="section">
        <h3>View templates (workspace)</h3>
        <ul class="list">
          ${this.templates.map(e=>v`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?v`<span class="badge">built-in</span>`:X}
                <button type="button" class="mini" @click=${()=>this.useTemplate(e)}>Use</button>
                <button type="button" class="mini" @click=${()=>this.editTemplate(e)}>Edit</button>
                <button type="button" class="mini" @click=${()=>this.copyTemplate(e)}>Copy</button>
                <button
                  type="button"
                  class="mini danger"
                  title=${e.builtin?"Delete this built-in template (it will not be seeded again)":"Delete this template"}
                  @click=${()=>void this.deleteTemplate(e)}
                >
                  Delete
                </button>
              </li>`)}
        </ul>
        <div>
          <button type="button" class="mini" @click=${()=>this.newTemplate("html")}>+ New template</button>
          ${this.visualizations().length>0?v`<button type="button" class="mini" @click=${()=>this.newTemplate("viz")}>+ New chart</button>`:X}
        </div>
        <p class="hint">
          A template's row HTML uses <code>$TOKEN</code> placeholders (e.g. <code>$TITLE</code>). Leave row HTML blank to show a read-only columns table with the header/footer HTML around it.
        </p>
        <p class="hint">A chart template draws instead — bar, line, pie, a map or a word cloud — in its own window or docked above or below the table.</p>
      </div>
    `}renderTemplate(){const e=this.tDraft,t=n=>r=>{this.tDraft={...e,[n]:r.target.value}};return v`
      <label class="field">
        Name
        <input type="text" .value=${e.name} @input=${t("name")} placeholder="e.g. Cards" />
      </label>
      ${e.kind==="viz"?this.renderVizTemplate(e):this.renderHtmlTemplate(e,t)}
    `}renderHtmlTemplate(e,t){return v`
      <label class="field">
        Header HTML
        <textarea .value=${e.headerHtml} @input=${t("headerHtml")}></textarea>
      </label>
      <label class="field">
        Row HTML <span class="hint">(blank ⇒ read-only table)</span>
        <textarea .value=${e.rowHtml} @input=${t("rowHtml")} placeholder="&lt;div&gt;$TITLE&lt;/div&gt;"></textarea>
      </label>
      <label class="field">
        Footer HTML
        <textarea .value=${e.footerHtml} @input=${t("footerHtml")}></textarea>
      </label>
    `}setViz(e){const t=this.tDraft;t?.viz&&(this.tDraft={...t,viz:{...t.viz,...e}})}setAggregate(e){const t=this.tDraft;if(!t?.viz)return;const n=this.vizSpecOf(t.viz.kind),r=t.viz.aggregate??n?.defaultAggregate??{groupBy:["CATEGORY"],measures:[{channel:"VALUE",fn:"count"}]};this.tDraft={...t,viz:{...t.viz,aggregate:{...r,...e}}}}renderVizTemplate(e){const t=this.visualizations();if(t.length===0)return v`<p class="hint">No visualizations are registered. Enable the Charts, Map or Word cloud plugins in the Plugin Manager.</p>`;const n=this.vizSpecOf(e.viz?.kind)??t[0];if(!n)return X;const r=e.viz?.aggregate??n.defaultAggregate??null,i=r?.measures[0],s=e.viz?.options??{};return v`
      <label class="field">
        Visualization
        <select
          @change=${o=>{const a=this.vizSpecOf(o.target.value);a&&this.setViz({kind:a.id,aggregate:a.defaultAggregate,options:this.seedOptions(a.id)})}}
        >
          ${t.map(o=>v`<option value=${o.id} ?selected=${o.id===n.id}>${o.label}</option>`)}
        </select>
      </label>
      ${n.data==="aggregate"&&r?v`
            <div class="section">
              <h3>What it measures</h3>
              <label class="field">
                Aggregate
                <select @change=${o=>this.setAggregate({measures:[{channel:"VALUE",fn:o.target.value}]})}>
                  ${[["count","Count of rows"],["sum","Sum of the value column"],["avg","Average of the value column"],["min","Minimum of the value column"],["max","Maximum of the value column"],["countDistinct","Distinct values of the value column"]].map(([o,a])=>v`<option value=${o} ?selected=${i?.fn===o}>${a}</option>`)}
                </select>
              </label>
              <label class="field">
                Order
                <select @change=${o=>this.setAggregate({sort:o.target.value})}>
                  <option value="category" ?selected=${r.sort==="category"}>By category</option>
                  <option value="valueDesc" ?selected=${r.sort==="valueDesc"}>Largest first</option>
                  <option value="value" ?selected=${r.sort==="value"}>Smallest first</option>
                </select>
              </label>
              <label class="field">
                Show at most (groups, 0 = all)
                <span class="hint">The rest are folded into one “Other”, never dropped.</span>
                <input
                  type="number"
                  min="0"
                  .value=${String(r.topN??0)}
                  @input=${o=>{const a=Math.max(0,Number(o.target.value)||0);this.setAggregate(a>0?{topN:a}:{topN:void 0})}}
                />
              </label>
            </div>
          `:X}
      ${n.options&&n.options.length>0?v`
            <div class="section">
              <h3>Options</h3>
              ${n.options.map(o=>this.renderVizOption(o,s))}
            </div>
          `:X}
      <p class="hint">Columns are mapped when you create a view from this template, so one chart works on any table with matching columns.</p>
    `}renderVizOption(e,t){return this.renderVizOptionField(e,t,(n,r)=>this.setViz({options:{...t,[n]:r}}))}renderVizOptionField(e,t,n){const r=t[e.key]??e.default,i=o=>n(e.key,o),s=e.description?v`<span class="hint">${e.description}</span>`:X;return e.type==="boolean"?v`<label class="field-inline">
        <input type="checkbox" .checked=${r===!0} @change=${o=>i(o.target.checked)} />
        ${e.label}
      </label>`:e.type==="number"?v`<label class="field">
        ${e.label} ${s}
        <input type="number" .value=${r==null?"":String(r)} @input=${o=>i(Number(o.target.value)||0)} />
      </label>`:e.type==="option"&&e.options?v`<label class="field">
        ${e.label}
        <select @change=${o=>i(o.target.value)}>
          ${e.options.map(o=>v`<option value=${o} ?selected=${r===o}>${o}</option>`)}
        </select>
      </label>`:e.type==="text"?v`<label class="field">
        ${e.label} ${s}
        <textarea rows="3" .value=${r==null?"":String(r)} @input=${o=>i(o.target.value)}></textarea>
      </label>`:v`<label class="field">
      ${e.label} ${s}
      <input type="text" .value=${r==null?"":String(r)} @input=${o=>i(o.target.value)} />
    </label>`}renderInstance(){const e=this.iDraft;return v`
      <label class="field">
        View name
        <input type="text" .value=${e.name} @input=${t=>this.iDraft={...e,name:t.target.value}} />
      </label>
      <label class="field">
        Show at most (rows, 0 = all)
        <input
          type="number"
          min="0"
          .value=${String(e.limit)}
          @input=${t=>this.iDraft={...e,limit:Math.max(0,Number(t.target.value)||0)}}
        />
      </label>
      ${this.isVizDraft(e)?v`<label class="field">
            Where to show it
            <select @change=${t=>this.iDraft={...e,dock:t.target.value}}>
              <option value="window" ?selected=${e.dock==="window"}>In its own window</option>
              <option value="above" ?selected=${e.dock==="above"}>Docked above the table</option>
              <option value="below" ?selected=${e.dock==="below"}>Docked below the table</option>
            </select>
            <span class="hint">A docked chart follows the table's filters and search as you change them.</span>
          </label>`:v`<label class="field-inline">
            <input type="checkbox" .checked=${e.readonly} @change=${t=>this.iDraft={...e,readonly:t.target.checked}} />
            Readonly (show values without editors in the table view)
          </label>`}
      <div class="section">
        <h3>${this.isVizDraft(e)?"Map data to columns":"Map placeholders to columns"}</h3>
        ${e.tokens.length===0?this.isVizDraft(e)?v`<p class="hint">This visualization needs no columns mapped.</p>`:v`<p class="hint">This template has no <code>$TOKEN</code> placeholders — it will show the read-only table with your current sort, filter and visible columns.</p>`:e.tokens.map(t=>v`<div class="map-row">
                  ${this.isVizDraft(e)?v`<span class="channel">${this.channelLabel(e,t)}</span>`:v`<code>$${t}</code>`}
                  <select
                    @change=${n=>this.iDraft={...e,mapping:{...e.mapping,[t]:n.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(n=>v`<option value=${n.field} ?selected=${e.mapping[t]===n.field}>${n.label||n.field}</option>`)}
                  </select>
                  ${this.isVizDraft(e)?X:v`<button
                          type="button"
                          class=${e.tokenRaw[t]?"mini":"mini scripted"}
                          title=${e.tokenRaw[t]?`$${t} shows the plain value — click to render it with the column's renderer`:`$${t} is shown by the column's renderer — click for the plain value`}
                          @click=${()=>this.toggleTokenRaw(t)}
                        >
                          ${e.tokenRaw[t]?"🔤":"🎨"}
                        </button>
                        <button
                          type="button"
                          class=${e.tokenScripts[t]?.trim()?"mini scripted":"mini"}
                          title=${e.tokenScripts[t]?.trim()?`Edit the script formatting $${t}`:`Format $${t} with a script (e.g. a local date, markdown as HTML)`}
                          @click=${()=>void this.editTokenScript(t)}
                        >
                          ƒ(x)
                        </button>`}
                </div>`)}
      </div>
      ${this.isVizDraft(e)?X:v`<p class="hint">
            🎨 shows the token through the column's own cell renderer, so the view looks like the table; 🔤 shows the plain value instead (the same as writing <code>$raw.TOKEN</code>). A token inside
            a tag, as in <code>&lt;img src="$IMAGE"&gt;</code>, always stays plain.
          </p>`}
      ${this.isVizDraft(e)?X:v`<p class="hint">
            <code>ƒ(x)</code> gives a token a <code>render(row)</code> script, so the view can show a formatted value — a local date, markdown as HTML — without changing the stored cell. It applies to
            <code>$TOKEN</code> only, not to <code>$input.</code> or <code>$filter.</code>.
          </p>`}
      <p class="hint">
        ${this.isVizDraft(e)?e.id?v`Editing this visualization. Use <strong>Chart</strong> in the window footer to change the kind or the aggregate, which every view of this chart shares.`:v`The visualization reads this table's rows; a docked one follows the grid's filters live.`:e.id?v`Editing name and column mapping. The snapshotted sort, filters and visible columns are kept.`:v`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
      ${this.renderInstanceVizOptions(e)}
    `}renderInstanceVizOptions(e){const t=this.specOfDraft(e);if(!t?.options||t.options.length===0)return X;const n=this.templates.find(o=>o.id===e.templateId),r=cC(n?.viz?.options,e.vizOptions),i=(o,a)=>{this.iDraft={...e,vizOptions:{...e.vizOptions,[o]:a}}},s=o=>{const a={...e.vizOptions};a[o]=(n?.viz?.options??{})[o],this.iDraft={...e,vizOptions:a}};return v`
      <div class="section">
        <h3>Settings for this view</h3>
        <p class="hint">Changed here, they apply to this view only; left alone, they follow the “${n?.name??"chart"}” definition.</p>
        ${t.options.map(o=>v`
            <div class="viz-override ${r.has(o.key)?"changed":""}">
              ${this.renderVizOptionField(o,e.vizOptions,i)}
              ${r.has(o.key)?v`<button type="button" class="mini" title="Go back to the chart definition's value" @click=${()=>s(o.key)}>Reset</button>`:X}
            </div>
          `)}
      </div>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?v`<button type="button" class="ghost" @click=${()=>this.mode="list"}>Back</button> <button type="submit" class="primary">Save</button>`:this.mode==="instance"?v`<button type="button" class="ghost" @click=${()=>this.mode="list"}>Back</button> <button type="submit" class="primary">${this.iDraft?.id?"Save":"Create view"}</button>`:v`<button type="submit" class="ghost">Close</button>`;return v`
      <dialog @cancel=${this.close} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${e}</h2>
            <div class="header-actions">${t}</div>
          </div>
          <div class="dialog-body">${this.mode==="template"?this.renderTemplate():this.mode==="instance"?this.renderInstance():this.renderList()}</div>
        </form>
      </dialog>
    `}};$t.instance=null;$t.styles=[mt,Se`
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
      label.field-inline {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.4rem;
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
        grid-template-columns: 8rem 1fr auto auto;
        align-items: center;
        gap: 0.5rem;
      }
      .map-row code {
        font-family: ui-monospace, SFMono-Regular, monospace;
        color: #2563eb;
      }
      /* A visualization's slot is a named data CHANNEL, not a $TOKEN, so it
         reads as prose rather than as code. */
      .map-row .channel {
        font-weight: 600;
      }
      /* A token whose script is set says so on the button itself — the script
         lives in a modal, so nothing else in the row would show it. */
      /* An overridden option is marked so "this view differs from the chart" is
         visible without opening the chart definition to compare. */
      .viz-override {
        display: flex;
        align-items: flex-end;
        gap: 0.4rem;
      }
      .viz-override > label {
        flex: 1;
        min-width: 0;
      }
      .viz-override.changed > label {
        border-left: 2px solid #2563eb;
        padding-left: 0.4rem;
      }
      button.mini.scripted {
        border-color: #2563eb;
        color: #2563eb;
        background: #eff6ff;
      }
    `];Ir([z()],$t.prototype,"mode",2);Ir([z()],$t.prototype,"instances",2);Ir([z()],$t.prototype,"templates",2);Ir([z()],$t.prototype,"tDraft",2);Ir([z()],$t.prototype,"iDraft",2);$t=Ir([Oe("views-dialog")],$t);const I_={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},A_="grid_view",R_={slug:"rss",name:"RSS Feed",header:'<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>','<div style="display:flex;gap:16px;margin-top:8px;">$input.CHECK1$input.CHECK2</div>',"</div>"].join(""),footer:"</div>"},O_={slug:"todo-list",name:"Todo List",header:'<div style="display:flex;flex-direction:column;gap:6px;padding:12px;max-width:720px;margin:0 auto;">',row:['<div style="display:flex;align-items:center;gap:10px;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;background:#ffffff;">',"$input.DONE",'<span style="flex:1;font-weight:500;color:#111827;">$TITLE</span>','<span style="color:#6b7280;font-size:0.8rem;white-space:nowrap;">$DUE</span>',"</div>"].join(""),footer:"</div>"},D_={slug:"gallery",name:"Gallery",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;padding:12px;">',row:['<figure style="margin:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$LINK" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;color:inherit;">','<img src="$IMAGE" alt="$TITLE" loading="lazy" style="width:100%;height:150px;object-fit:cover;display:block;background:#f3f4f6;" />','<figcaption style="padding:6px 8px;font-size:0.85rem;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">$TITLE</figcaption>',"</a>","</figure>"].join(""),footer:"</div>"},L_={slug:"contact-cards",name:"Contact Cards",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:10px;padding:12px 14px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<div style="font-weight:600;color:#111827;font-size:0.95rem;">$NAME</div>','<a href="mailto:$EMAIL" style="color:#2563eb;text-decoration:none;font-size:0.85rem;word-break:break-all;">$EMAIL</a>','<div style="color:#6b7280;font-size:0.85rem;margin-top:2px;">$PHONE</div>',"</div>"].join(""),footer:"</div>"},M_=[R_,O_,D_,L_];function P_(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:A_,tooltip:"Views -- display this table through a template",onClick:(t,{tableId:n})=>yr(n)})}async function z_(e){await j_(e)}function N_(e){let t=5381;const n=`${e.header} ${e.row} ${e.footer}`;for(let r=0;r<n.length;r++)t=(t<<5)+t+n.charCodeAt(r)|0;return(t>>>0).toString(36)}async function j_(e){const t=e.workspaceId();if(!t)return;const n=await e.store.viewTemplates.find({workspaceId:t});for(const r of M_)await F_(e,t,r,n)}async function F_(e,t,n,r){const i=`views:seeded:${n.slug}:${t}`,s=`views:sig:${n.slug}:${t}`,o=N_(n),a=r.find(d=>d.builtin&&d.name===n.name);if(a){(await e.store.settings.findOne(s))?.value!==o&&(await e.store.viewTemplates.patch(a.id,{headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,updatedAt:Date.now()}),await e.store.settings.upsert({name:s,value:o})),await e.store.settings.upsert({name:i,value:!0});return}(await e.store.settings.findOne(i))?.value||(await e.store.viewTemplates.insert({id:U_(),workspaceId:t,name:n.name,headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({name:i,value:!0}),await e.store.settings.upsert({name:s,value:o}))}function U_(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const B_=Object.freeze(Object.defineProperty({__proto__:null,init:P_,load:z_,meta:I_},Symbol.toStringTag,{value:"Module"})),q_={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function H_(e){e.ui.registerSettings(Di,"Table grid",[{key:"sortDescFirst",label:"Sort descending first",type:"boolean",default:!0,scope:"workspace",description:"Clicking a column header sorts descending, then ascending, then off. Turn this off to start ascending. Dates, scores and counts are usually read from the high end down, which took two clicks before."},{key:"highlightNulls",label:"Highlight empty cells",type:"boolean",default:!0,scope:"workspace",description:"An empty cell gets a pink background, so a gap in the data is visible whatever the column draws. Turn it off for a table that is mostly empty on purpose, where the colour is noise. A value that does not fit its column type stays marked red either way."},{key:"windowRowsFrom",label:"Read big tables one page at a time (rows)",type:"number",default:Lc,scope:"workspace",description:"A table with at least this many rows is read one page at a time as you scroll, instead of being held in memory whole. Filtering, searching and sorting still cover every row, because the store does that work. Set 0 to always read the whole table."}]),e.ui.registerSettings(ur,"Visualizations",[{key:"tileUrl",label:"Map tile URL template",type:"string",default:jc,scope:"workspace",description:"Where map visualizations fetch their background tiles. The default is OpenStreetMap, whose tile policy asks that heavy or commercial use runs its own server — point this at that server, or at a local one for an offline install. A map still plots its points when tiles cannot be loaded.",helpUrl:"https://operations.osmfoundation.org/policies/tiles/",helpLinkLabel:"OpenStreetMap tile usage policy"},{key:"tileAttribution",label:"Map attribution",type:"string",default:Fc,scope:"workspace",description:"Credit shown in the map corner. Most tile providers require this."},{key:"cloudMinLength",label:"Word cloud: ignore words shorter than",type:"number",default:3,scope:"workspace",description:"A new word cloud starts with this. Three suits prose; raise it for noisy text, lower it for a column of codes."},{key:"cloudKeepWords",label:"Word cloud: always keep these words",type:"text",scope:"workspace",description:"The exception to the length limit above — and to the ignore list below. Acronyms are often the most interesting terms in a column and the first thing a length limit throws away: AI, UI, CH, SQL. Separate with commas, spaces or new lines."},{key:"cloudStopWords",label:"Word cloud: ignore these common words",type:"text",scope:"workspace",description:'Words too common to be interesting. Left as shipped this is an English function-word list, which is what stops "the" being the biggest word in every cloud — replace it wholesale for another language, or clear it to count everything. Separate with commas, spaces or new lines.'},{key:"cloudMaxTerms",label:"Word cloud: most words to lay out",type:"number",default:120,scope:"workspace",description:"The cloud layout runs on the main thread, so this is capped — a very high number makes the window unresponsive while it settles."}]),e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,n)=>{const i=Array.from(t.dataTransfer?.files??[]).find(a=>a.name.toLowerCase()==="secrets.txt");if(!i)return!1;const s=await i.text(),o=Object.keys(hr(s)).length;return mi().trim().length>0&&!await n.ui.dialogs.confirm(`Replace your current secrets with ${o} secret${o===1?"":"s"} from "${i.name}"?`,"Import secrets")||(pf(s),n.ui.dialogs.toast(`Imported ${o} secret${o===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const V_=Object.freeze(Object.defineProperty({__proto__:null,init:H_,meta:q_},Symbol.toStringTag,{value:"Module"}));class cn extends Error{constructor(t="this cell is derived"){super(`Projection is read-only — ${t}. Edit a base-table column, or import a copy.`),this.name="ProjectionReadOnlyError"}}function K_(e){const t=e;return!t||!Array.isArray(t.sources)||!Array.isArray(t.columns)?{version:1,sources:[],columns:[]}:t}function W_(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function G_(e,t){const n=K_(t.source?.config),r=new Set;let i=[],s=new Map,o=!1,a=null;const c=new Map;let d=null,f=!1;function p(W){const I=new Map;for(const K of W)I.has(K.name)||I.set(K.name,K);const V=new Map;for(const K of n.sources){const ie=I.get(K.tableName);ie&&V.set(K.alias,ie.id)}return V}async function b(){return p(await e.tables.find({workspaceId:t.workspaceId}))}async function y(){const W=await e.tables.find({workspaceId:t.workspaceId}),I={rows:[],provenance:new Map};if(Lv(t.id,W))return I;const V=p(W),K=new Map(W.map(te=>[te.id,te])),ie=Cv(n),de={};for(const te of n.sources){const q=V.get(te.alias);if(!q)return I;const Q=ie[te.alias]??[],ae=await xi(e.rows(q),{columns:K.get(q)?.columns??[],fields:Q.length>0?Q:["id"]});de[te.alias]=ae.rows}const H=_v(n,de);return{rows:H.rows.map(te=>({...te,tableId:t.id})),provenance:H.provenance}}async function k(){const{rows:W,provenance:I}=await y();return i=W,s=I,o=!0,W}function $(){return a||(a=(async()=>{try{return await k()}finally{a=null}})(),a)}async function C(){const W=await b(),I=new Set(W.values());for(const[V,K]of c)I.has(V)||(K(),c.delete(V));for(const V of I)if(!c.has(V)){const K=e.rows(V);c.set(V,K.watch?K.watch(E):K.subscribe(E))}}function E(){f||(f=!0,queueMicrotask(async()=>{f=!1,await C();const W=o?await k():await $();for(const I of r)I(W)}))}function T(W,I){return W===I||W==null&&I==null?!0:W==null||I==null?!1:String(W)===String(I)}async function Y(W,I){o||await $();const V=i.find(te=>te.id===W)?.data,K=s.get(W),ie=new Map,de=[];for(const[te,q]of Object.entries(I)){if(V&&T(V[te],q))continue;const Q=Nv(n,W,te,K);if(!Q){de.push(te);continue}const ae=ie.get(Q.alias)??{rowId:Q.rowId,updates:{}};ae.updates[Q.field]=q,ie.set(Q.alias,ae)}if(de.length>0)throw new cn(ne(de,K));if(ie.size===0)return{id:W,tableId:t.id,data:I,updatedAt:Date.now()};const H=await b();for(const[te,{rowId:q,updates:Q}]of ie){const ae=H.get(te);if(!ae)throw new cn(`the "${L(te)}" table is not available`);const we=e.rows(ae),xe=await we.findOne(q);if(!xe)throw new cn("the underlying row no longer exists");await we.patch(q,{data:{...xe.data,...Q},updatedAt:Date.now()})}return{id:W,tableId:t.id,data:I,updatedAt:Date.now()}}function L(W){return n.sources.find(I=>I.alias===W)?.tableName??W}function ne(W,I){const V=W[0],K=n.columns.find(ie=>ie.field===V);return!K||K.from.kind==="script"?`"${V}" is computed by a script, so there is no cell to save it in`:I&&!I[K.from.alias]?`this row has no matching "${L(K.from.alias)}" row, so there is nowhere to save "${V}"`:`"${V}" cannot be written back to its source`}return{async find(W){const I=o?i:await $();return!W||Object.keys(W).length===0?I:I.filter(V=>W_(V,W))},async findOne(W){return(o?i:await $()).find(V=>V.id===W)??null},async insert(){throw new cn("rows are derived from other tables")},async bulkInsert(){throw new cn("rows are derived from other tables")},async upsert(W){return Y(W.id,W.data)},async patch(W,I){if(!I.data)throw new cn("a cell edit must carry row data");return Y(W,I.data)},async remove(){throw new cn("rows are derived from other tables")},async bulkRemove(){throw new cn("rows are derived from other tables")},subscribe(W){return r.add(W),d||(d=e.tables.subscribe(E)),o?W(i):E(),()=>{if(r.delete(W),r.size===0){d?.(),d=null;for(const I of c.values())I();c.clear(),o=!1}}},async refresh(){await C();const W=await k();for(const I of r)I(W)}}}function Y_(e,t){const n=e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")||"col";let r=n,i=2;for(;t.has(r);)r=`${n}_${i++}`;return t.add(r),r}function Q_(e){for(let t=0;;t++){const n=String.fromCharCode(97+t%26)+(t>=26?String(Math.floor(t/26)):"");if(!e.some(r=>r.alias===n))return n}}function J_(e,t,n){const r=t.sources.map(a=>{const c=n.find(b=>b.name===a.tableName),d={alias:a.alias,tableId:c?.id??"",tableName:a.tableName,columns:c?.columns??[]},f=a.join?.on??[],p=f[0];return a.join&&p&&(d.join={type:a.join.type,thisField:p.field,otherAlias:p.eqAlias,otherField:p.eqField},f.length>1&&(d.extraOn=f.slice(1))),d}),i=t.columns.map(a=>{const c={include:!0,outField:a.field,label:a.label??a.field};return a.from.kind==="source"?{...c,alias:a.from.alias,field:a.from.field,computed:!1}:{...c,script:a.from.script,computed:!0}}),s=[],o=new Set;r.forEach((a,c)=>{const d=r.slice(0,c).filter(f=>f.tableName===a.tableName).length;for(const f of a.columns){const p=i.filter(b=>!b.computed&&b.alias===a.alias&&b.field===f.field&&!o.has(b));if(p.length>0)for(const b of p)o.add(b),s.push(b);else s.push({include:!1,alias:a.alias,field:f.field,computed:!1,label:d>0?`${f.label} (${a.alias})`:f.label})}});for(const a of i)!a.computed&&!o.has(a)&&s.push(a);for(const a of i)a.computed&&s.push(a);return{name:e,sources:r,columns:s,...t.limit?{limit:t.limit}:{},original:t}}function X_(e,t){const n=Q_(e.sources),r=e.sources.length===0,i=e.sources.filter(a=>a.tableName===t.name).length;let s;if(!r){const a=e.sources.flatMap(d=>d.join?[{alias:d.join.otherAlias,field:d.join.otherField},...(d.extraOn??[]).map(f=>({alias:f.eqAlias,field:f.eqField}))]:[]),c=Pv({tableName:t.name,fields:t.columns.map(d=>d.field),pks:t.columns.filter(d=>d.unique).map(d=>d.field)},e.sources.map(d=>({alias:d.alias,tableName:d.tableName,fields:d.columns.map(f=>f.field),pks:d.columns.filter(f=>f.unique).map(f=>f.field)})),a);s={type:"left",thisField:c?.thisField??t.columns[0]?.field??"",otherAlias:c?.otherAlias??e.sources[0]?.alias??"",otherField:c?.otherField??""}}const o={alias:n,tableId:t.id,tableName:t.name,columns:t.columns,...s?{join:s}:{}};return{...e,sources:[...e.sources,o],columns:[...e.columns,...t.columns.map(a=>({include:!0,alias:n,field:a.field,computed:!1,label:i>0?`${a.label} (${n})`:a.label}))]}}function Z_(e,t){const n=new Set([t]);for(let r=!0;r;){r=!1;for(const i of e.sources){if(n.has(i.alias)||!i.join)continue;[i.join.otherAlias,...(i.extraOn??[]).map(o=>o.eqAlias)].some(o=>n.has(o))&&(n.add(i.alias),r=!0)}}return{...e,sources:e.sources.filter(r=>!n.has(r.alias)),columns:e.columns.filter(r=>r.computed||!r.alias||!n.has(r.alias))}}function eE(e){return{...e,columns:[...e.columns,{include:!0,computed:!0,label:"computed",script:`function render(row) {
  return "";
}`}]}}function tE(e){const t=e.name.trim();if(!t)return{ok:!1,error:"Give the projection a name."};if(e.sources.length===0)return{ok:!1,error:"Add at least one source table."};const n=e.columns.filter(c=>c.include);if(n.length===0)return{ok:!1,error:"Select at least one column."};for(let c=0;c<e.sources.length;c++){const d=e.sources[c];if(!d?.join)continue;if(!d.join.thisField||!d.join.otherField)return{ok:!1,error:`Set both join keys for "${d.tableName}".`};const f=new Set(e.sources.slice(0,c).map(b=>b.alias));if([d.join.otherAlias,...(d.extraOn??[]).map(b=>b.eqAlias)].some(b=>!f.has(b)))return{ok:!1,error:`The join for "${d.tableName}" refers to a table that is no longer part of this projection.`}}const r=new Set(e.sources.map(c=>c.alias)),i=new Set,s=[];for(const c of n){let d;if(c.outField&&!i.has(c.outField)?(d=c.outField,i.add(d)):d=Y_(c.computed?"computed":c.field??"col",i),c.computed){s.push({field:d,from:{kind:"script",script:c.script??""}});continue}const f=c.alias,p=c.field;if(!f||!p||!r.has(f))return{ok:!1,error:`Column "${c.label??c.field}" belongs to a table that is no longer part of this projection.`};s.push({field:d,from:{kind:"source",alias:f,field:p}})}const o=e.sources.map(c=>{const d={alias:c.alias,tableName:c.tableName};return c.join&&(d.join={type:c.join.type,on:[{field:c.join.thisField,eqAlias:c.join.otherAlias,eqField:c.join.otherField},...c.extraOn??[]]}),d}),a={...e.original??{},version:1,sources:o,columns:s};return e.limit!=null&&e.limit>0?a.limit=Math.floor(e.limit):delete a.limit,{ok:!0,name:t,spec:a}}var nE=Object.defineProperty,rE=Object.getOwnPropertyDescriptor,Ar=(e,t,n,r)=>{for(var i=r>1?void 0:r?rE(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&nE(t,n,i),i};let xt=class extends $e{constructor(){super(...arguments),this.name="",this.limit="",this.sources=[],this.columns=[],this.error="",this.candidates=[],this.editing=!1,this.originalSpec=null,this.dialogEl=null,this.submit=async e=>{e.preventDefault(),this.error="";const t=this.buildSpec();if(!(!t||!this.onSave)){try{await this.onSave(t.name,t.spec)}catch(n){this.error=n?.message??String(n);return}this.dialogEl?.close()}}}connectedCallback(){super.connectedCallback(),xt.instance=this}disconnectedCallback(){super.disconnectedCallback(),xt.instance===this&&(xt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&Zt("projection",this.dialogEl)}open(e){this.candidates=e.candidates,this.onSave=e.onSave,this.error="",this.editing=!!e.initial,this.originalSpec=null,this.name="",this.limit="",this.sources=[],this.columns=[],e.initial?this.loadFrom(e.initial.name,e.initial.spec):e.base&&(this.name=`${e.base.name} view`,this.addCandidateAsSource(e.base)),this.updateComplete.then(()=>this.dialogEl?.showModal())}modelOf(){const e=Number(this.limit);return{name:this.name,sources:this.sources,columns:this.columns,...this.limit.trim()!==""&&Number.isFinite(e)&&e>0?{limit:Math.floor(e)}:{},...this.originalSpec?{original:this.originalSpec}:{}}}applyModel(e){this.name=e.name,this.sources=e.sources,this.columns=e.columns,this.limit=e.limit!=null&&e.limit>0?String(e.limit):""}loadFrom(e,t){this.originalSpec=t,this.applyModel(J_(e,t,this.candidates))}addSource(e){const t=this.candidates.find(n=>n.id===e);t&&this.addCandidateAsSource(t)}addCandidateAsSource(e){this.applyModel(X_(this.modelOf(),e))}removeSource(e){this.applyModel(Z_(this.modelOf(),e))}addComputed(){this.applyModel(eE(this.modelOf()))}patchSource(e,t){this.sources=this.sources.map(n=>n.alias===e&&n.join?{...n,join:{...n.join,...t}}:n)}buildSpec(){const e=tE(this.modelOf());return e.ok?{name:e.name,spec:e.spec}:(this.error=e.error,null)}aliasesBefore(e){const t=this.sources.findIndex(n=>n.alias===e);return this.sources.slice(0,t)}render(){const e=this.sources[0];return v`
      <dialog @cancel=${()=>this.dialogEl?.close()} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.dialogEl?.close()}>×</button>
        <form @submit=${this.submit}>
          <div class="dialog-header">
            <h2>${this.editing?"Edit Projection":"New Projection"}</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${()=>this.dialogEl?.close()}>Cancel</button>
              <button type="submit" class="primary">Save</button>
            </div>
          </div>
          <div class="dialog-body">
            <div class="head-row">
              <label>
                Name
                <input id="proj-name" .value=${this.name} @input=${t=>this.name=t.target.value} />
              </label>
              <label>
                Row limit
                <input
                  id="proj-limit"
                  type="number"
                  min="0"
                  placeholder="all"
                  .value=${this.limit}
                  title="Cap the number of rows (TOP N). Blank or 0 shows every row."
                  @input=${t=>this.limit=t.target.value}
                />
              </label>
            </div>

            <section>
              <div class="section-head">
                <h3>Sources</h3>
                <span class="hint">The base table, plus a join for each table hung off it.</span>
              </div>
              <div class="sources">${this.sources.map((t,n)=>this.renderSource(t,n===0))}</div>
              <div class="add-row">
                <select id="add-src" ?disabled=${this.candidates.length===0}>
                  ${this.candidates.map(t=>v`<option value=${t.id}>${t.name}</option>`)}
                </select>
                <button
                  type="button"
                  class="ghost sm"
                  @click=${()=>{const t=this.shadowRoot?.getElementById("add-src");t?.value&&this.addSource(t.value)}}
                >
                  ${e?"+ Join table":"+ Base table"}
                </button>
                ${e?v`<span class="hint">A table may be joined more than once.</span>`:X}
              </div>
            </section>

            <section>
              <div class="section-head">
                <h3>Columns</h3>
                <span class="hint"> Tick what the projection includes. Labels, types and formatting are inherited from the source and edited with “Edit columns”. </span>
              </div>
              ${this.sources.map(t=>this.renderSourceColumns(t))} ${this.renderComputedColumns()}
            </section>

            <div class="err">${this.error}</div>
          </div>
        </form>
      </dialog>
    `}renderSource(e,t){return v`
      <div class="src">
        <div class="src-head">
          <span class="badge ${t?"base":""}">${t?"Base":"Join"}</span>
          <span class="name">${e.tableName}</span>
          <code class="alias" title="Alias used by the join keys below">${e.alias}</code>
          <span class="spacer"></span>
          ${t?X:v`<button type="button" class="icon-btn" title="Remove this join" aria-label="Remove ${e.tableName}" @click=${()=>this.removeSource(e.alias)}>×</button>`}
        </div>
        ${e.join?v`<div class="join-grid">
              <select .value=${e.join.type} @change=${n=>this.patchSource(e.alias,{type:n.target.value})}>
                <option value="left">LEFT JOIN</option>
                <option value="inner">INNER JOIN</option>
              </select>
              <span class="kw">ON</span>
              <select .value=${e.join.thisField} @change=${n=>this.patchSource(e.alias,{thisField:n.target.value})}>
                ${e.columns.map(n=>v`<option value=${n.field} ?selected=${n.field===e.join?.thisField}>${e.alias}.${n.field}</option>`)}
              </select>
              <span class="kw">=</span>
              <select
                .value=${`${e.join.otherAlias}.${e.join.otherField}`}
                @change=${n=>{const[r,i]=n.target.value.split(".");this.patchSource(e.alias,{otherAlias:r??"",otherField:i??""})}}
              >
                ${this.aliasesBefore(e.alias).flatMap(n=>n.columns.map(r=>v`<option value=${`${n.alias}.${r.field}`} ?selected=${n.alias===e.join?.otherAlias&&r.field===e.join?.otherField}>${n.alias}.${r.field}</option>`))}
              </select>
            </div>`:""}
      </div>
    `}renderSourceColumns(e){const t=this.columns.map((r,i)=>({c:r,i})).filter(({c:r})=>!r.computed&&r.alias===e.alias);if(t.length===0)return X;const n=t.every(({c:r})=>r.include);return v`
      <div class="col-group">
        <div class="group-head">
          <code class="alias">${e.alias}</code>
          <span class="group-name">${e.tableName}</span>
          <button
            type="button"
            class="link-btn"
            @click=${()=>{const r=!n,i=new Set(t.map(({i:s})=>s));this.columns=this.columns.map((s,o)=>i.has(o)?{...s,include:r}:s)}}
          >
            ${n?"none":"all"}
          </button>
        </div>
        <div class="ticks">
          ${t.map(({c:r,i})=>v`
              <label class="tick ${r.include?"":"off"}" title=${`${r.alias}.${r.field}`}>
                <input type="checkbox" .checked=${r.include} @change=${s=>this.setColumn(i,{include:s.target.checked})} />
                <span class="tick-name">${r.field}</span>
              </label>
            `)}
        </div>
      </div>
    `}renderComputedColumns(){const e=this.columns.map((t,n)=>({c:t,i:n})).filter(({c:t})=>t.computed);return v`
      <div class="col-group">
        <div class="group-head">
          <span class="chip">computed</span>
          <button type="button" class="link-btn" @click=${()=>this.addComputed()}>+ add</button>
        </div>
        ${e.length===0?v`<span class="hint">None. A computed column derives its value from the row.</span>`:e.map(({c:t,i:n})=>v`
                <div class="computed-row ${t.include?"":"off"}">
                  <input type="checkbox" .checked=${t.include} aria-label="Include computed column" @change=${r=>this.setColumn(n,{include:r.target.checked})} />
                  <textarea
                    class="script"
                    aria-label="Computed column script"
                    spellcheck="false"
                    .value=${t.script??""}
                    @input=${r=>this.setColumn(n,{script:r.target.value})}
                  ></textarea>
                  <button
                    type="button"
                    class="icon-btn"
                    title="Remove this computed column"
                    aria-label="Remove computed column"
                    @click=${()=>{this.columns=this.columns.filter((r,i)=>i!==n)}}
                  >
                    ×
                  </button>
                </div>
              `)}
      </div>
    `}setColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}};xt.instance=null;xt.styles=[mt,Se`
      dialog {
        width: 760px;
        max-width: 96vw;
      }
      /* -- shared controls (mirrors the column editor's look) -------------- */
      input,
      select,
      textarea {
        font: inherit;
        padding: 0.4rem 0.5rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        background: white;
        color: #111827;
        min-width: 0; /* let a grid cell shrink instead of overflowing */
      }
      input:focus-visible,
      select:focus-visible,
      textarea:focus-visible {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.18);
      }
      label {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        font-size: 0.85rem;
        color: #374151;
      }
      button.ghost.sm {
        padding: 0.3rem 0.6rem;
        font-size: 0.82rem;
      }
      button.icon-btn {
        background: transparent;
        border: 0;
        color: #9ca3af;
        cursor: pointer;
        padding: 0;
        font-size: 1.05rem;
        line-height: 1;
      }
      button.icon-btn:hover {
        color: #ef4444;
      }

      /* -- sections -------------------------------------------------------- */
      section {
        display: flex;
        flex-direction: column;
        gap: 0.55rem;
        border-top: 1px solid #e5e7eb;
        padding-top: 0.9rem;
      }
      .section-head {
        display: flex;
        align-items: baseline;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
      h3 {
        margin: 0;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #6b7280;
      }
      .hint {
        color: #9ca3af;
        font-size: 0.78rem;
      }
      .add-row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
      .add-row select {
        max-width: 14rem;
      }
      /* Name takes the space; the row cap is a narrow field beside it. */
      .head-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 7rem;
        gap: 0.6rem;
        align-items: end;
      }
      @media (max-width: 640px) {
        .head-row {
          grid-template-columns: 1fr;
        }
      }

      /* -- sources --------------------------------------------------------- */
      .sources {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .src {
        border: 1px solid #e5e7eb;
        border-radius: 0.4rem;
        background: #f9fafb;
        padding: 0.6rem 0.7rem;
        display: flex;
        flex-direction: column;
        gap: 0.55rem;
      }
      .src-head {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .src-head .name {
        font-weight: 600;
        color: #111827;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .src-head .spacer {
        flex: 1;
      }
      .badge {
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        padding: 0.15rem 0.4rem;
        border-radius: 0.2rem;
        background: #e5e7eb;
        color: #4b5563;
      }
      .badge.base {
        background: #dbeafe;
        color: #1d4ed8;
      }
      code.alias {
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.72rem;
        background: #eef2f7;
        color: #4b5563;
        border: 1px solid #e5e7eb;
        border-radius: 0.2rem;
        padding: 0.05rem 0.3rem;
      }
      /* One grid for every join row, so the two field pickers line up down the
         list however long the table names are. */
      .join-grid {
        display: grid;
        grid-template-columns: 8rem auto minmax(0, 1fr) auto minmax(0, 1fr);
        align-items: center;
        gap: 0.4rem;
      }
      .kw {
        font-size: 0.72rem;
        font-weight: 700;
        color: #9ca3af;
        letter-spacing: 0.04em;
      }

      /* -- columns: a dense tick list per source --------------------------- */
      .col-group {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      }
      .group-head {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.78rem;
        color: #6b7280;
      }
      .group-name {
        font-weight: 600;
        color: #374151;
      }
      button.link-btn {
        background: none;
        border: 0;
        padding: 0;
        font: inherit;
        font-size: 0.75rem;
        color: #2563eb;
        cursor: pointer;
        text-decoration: underline;
      }
      .ticks {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem 0.4rem;
      }
      /* Each column is a compact pill, so a wide table costs a couple of rows
         instead of one row per column. */
      label.tick {
        flex-direction: row;
        align-items: center;
        gap: 0.3rem;
        font-size: 0.8rem;
        color: #111827;
        border: 1px solid #e5e7eb;
        border-radius: 1rem;
        padding: 0.1rem 0.5rem 0.1rem 0.35rem;
        background: #f9fafb;
        cursor: pointer;
        max-width: 14rem;
      }
      label.tick:hover {
        border-color: #cbd5e1;
      }
      label.tick input {
        margin: 0;
      }
      label.tick .tick-name {
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.74rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      label.tick.off {
        opacity: 0.55;
        background: transparent;
      }
      .chip {
        font-size: 0.68rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: #1d4ed8;
        background: #dbeafe;
        border-radius: 0.2rem;
        padding: 0.1rem 0.35rem;
      }
      .computed-row {
        display: grid;
        grid-template-columns: 1.1rem minmax(0, 1fr) 1.3rem;
        gap: 0.4rem;
        align-items: start;
      }
      .computed-row.off {
        opacity: 0.55;
      }
      .computed-row input[type='checkbox'] {
        margin: 0.4rem 0 0;
      }
      textarea.script {
        width: 100%;
        box-sizing: border-box;
        min-height: 2.9rem;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.75rem;
      }

      .err {
        color: #b91c1c;
        font-size: 0.82rem;
        min-height: 1.1em;
      }
      .err:not(:empty) {
        background: #fef2f2;
        border: 1px solid #fecaca;
        border-radius: 0.25rem;
        padding: 0.4rem 0.55rem;
      }

      /* Phones: the dialog is full-screen (see dialog-chrome), so let the
         multi-column grids stack rather than squeeze. */
      @media (max-width: 640px) {
        .join-grid,
        .col-header,
        .col-row {
          grid-template-columns: 1fr;
        }
        .col-header {
          display: none;
        }
        .col-row {
          border: 1px solid #f3f4f6;
          border-radius: 0.3rem;
          padding: 0.45rem;
        }
        /* Stacked, the centred checkbox floats mid-row — align it with the rest. */
        .col-row input[type='checkbox'] {
          justify-self: start;
        }
        textarea.script {
          grid-column: 1;
        }
      }
    `];Ar([z()],xt.prototype,"name",2);Ar([z()],xt.prototype,"limit",2);Ar([z()],xt.prototype,"sources",2);Ar([z()],xt.prototype,"columns",2);Ar([z()],xt.prototype,"error",2);xt=Ar([Oe("projection-dialog")],xt);const iE={id:"projection",name:"Projection (virtual tables)",type:"source",version:"0.1.0",description:'Virtual tables ("Projections") whose rows are derived live from other tables — database views and JOINs that look and act like tables.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h7v10H4z"/><path d="M13 7h7v10h-7z"/><path d="M11 12h2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/projection.ts"};function sE(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"projection",create:t=>(Xm(e,t),G_(e.store,t))}),e.ui.registerTableButton({id:"projection:new",label:"New Projection",icon:"add_box",tooltip:"Create a virtual table using THIS table as the base (view / JOIN)",onClick:(t,{tableId:n})=>void Rh(t,{baseTableId:n})}),e.ui.registerTableButton({id:"projection:edit",label:"Edit Join",icon:"call_merge",tooltip:"Edit this projection’s sources, joins and which columns it includes",visible:t=>t.source?.type==="projection",onClick:(t,{tableId:n})=>void Rh(t,{editTableId:n})})}async function Xm(e,t){if(t.source?.type!=="projection")return;const n=t.source.config;if(!n||!Array.isArray(n.sources))return;const r=mo(n),i=t.columns.map(a=>{const c=!r.has(a.field);if(c===(a.readonly===!0))return a;if(c)return{...a,readonly:!0};const d={...a};return delete d.readonly,d}),s=r.size===0;i.every((a,c)=>a===t.columns[c])&&(t.readonly??!1)===s||await e.store.tables.patch(t.id,{columns:i,readonly:s,updatedAt:Date.now()})}async function oE(e){const t=e.workspaceId();if(t)for(const n of await e.store.tables.find({workspaceId:t}))await Xm(e,n)}async function aE(e){await oE(e)}async function lE(e,t,n,r,i){const s=await e.store.tables.find({workspaceId:t}),o=new Map;for(const c of s)o.has(c.name)||o.set(c.name,c);const a={};for(const c of n.sources)a[c.alias]=o.get(c.tableName)?.columns??[];return ep(n,a,r,i)}async function Rh(e,t){const n=e.workspaceId();if(!n)return;const r=await e.store.tables.find({workspaceId:n}),i=a=>({id:a.id,name:a.name,columns:a.columns}),s=xt.instance??cE();if(t.editTableId){const a=r.find(c=>c.id===t.editTableId)??null;if(!a||a.source?.type!=="projection")return;s.open({candidates:r.filter(c=>c.id!==a.id).map(i),initial:{name:a.name,spec:a.source.config},onSave:Oh(e,n,a)});return}const o=r.find(a=>a.id===t.baseTableId);o&&s.open({base:i(o),candidates:r.map(i),onSave:Oh(e,n,null,o)})}function Oh(e,t,n,r){return async(i,s)=>{const o=await lE(e,t,s,n?.columns??[],n?.deletedColumns??[]),a=mo(s).size===0,c={type:"projection",config:s};n?await e.store.tables.patch(n.id,{name:i,columns:o,source:c,readonly:a,updatedAt:Date.now()}):await e.store.tables.insert({id:Ee(),workspaceId:t,name:i,code:Ne(i),columns:o,view:"table",source:c,readonly:a,...r?Ov(s,r):{},updatedAt:Date.now()})}}function cE(){const e=document.createElement("projection-dialog");return document.body.appendChild(e),e}const uE=Object.freeze(Object.defineProperty({__proto__:null,init:sE,load:aE,meta:iE},Symbol.toStringTag,{value:"Module"})),dE={id:"viz-charts",name:"Charts (bar, line, pie)",type:"ui",version:"0.1.0",description:"Bar, column, line and pie visualizations of a table, in a window or docked to the grid.",icon:"bar_chart"},ys={key:"CATEGORY",label:"Category (group by)",kind:"category",required:!0},vs={key:"VALUE",label:"Value (measure)",kind:"value"},qa={key:"SERIES",label:"Split into series (optional)",kind:"series"},Ha=[{key:"xTitle",label:"X axis title",type:"string"},{key:"yTitle",label:"Y axis title",type:"string"},{key:"beginAtZero",label:"Start the value axis at zero",type:"boolean",default:!0},{key:"legend",label:"Show the legend",type:"boolean"}];function hE(e){const t={groupBy:["CATEGORY"],measures:[{channel:"VALUE",fn:"count"}],sort:"valueDesc"};e.ui.registerVisualization({id:"bar",label:"Bar chart",icon:"bar_chart",tag:"viz-bar-chart",channels:[ys,vs,qa],data:"aggregate",defaultAggregate:t,options:[...Ha,{key:"stacked",label:"Stack the bars",type:"boolean"}]}),e.ui.registerVisualization({id:"column",label:"Column chart",icon:"insert_chart",tag:"viz-column-chart",channels:[ys,vs,qa],data:"aggregate",defaultAggregate:t,options:[...Ha,{key:"stacked",label:"Stack the columns",type:"boolean"}]}),e.ui.registerVisualization({id:"line",label:"Line chart",icon:"show_chart",tag:"viz-line-chart",channels:[{...ys,label:"X axis (group by)",kind:"time"},vs,qa],data:"aggregate",defaultAggregate:{...t,sort:"category"},options:[...Ha,{key:"area",label:"Fill under the line",type:"boolean"},{key:"smooth",label:"Curve the line",type:"boolean"},{key:"stacked",label:"Stack the series",type:"boolean"}]}),e.ui.registerVisualization({id:"pie",label:"Pie chart",icon:"pie_chart",tag:"viz-pie-chart",channels:[ys,vs],data:"aggregate",defaultAggregate:{...t,topN:8},options:[{key:"legend",label:"Show the legend",type:"boolean",default:!0}]})}const fE=Object.freeze(Object.defineProperty({__proto__:null,init:hE,meta:dE},Symbol.toStringTag,{value:"Module"})),pE={id:"viz-map",name:"Map",type:"ui",version:"0.1.0",description:"Plot rows with latitude/longitude columns as points on a map.",icon:"public"};function mE(e){e.ui.registerVisualization({id:"map",label:"Map",icon:"public",tag:"viz-point-map",channels:[{key:"LAT",label:"Latitude",kind:"lat",accepts:["number"],required:!0},{key:"LON",label:"Longitude",kind:"lon",accepts:["number"],required:!0},{key:"LABEL",label:"Tooltip label (optional)",kind:"text"},{key:"WEIGHT",label:"Size by (optional)",kind:"weight",accepts:["number"]}],data:"rows",options:[{key:"radius",label:"Marker size (px)",type:"number",default:6},{key:"scaleByWeight",label:"Scale markers by the size column",type:"boolean"},{key:"tileUrl",label:"Tile URL template",type:"string",description:"Leave blank to use the Settings → Visualizations default."}]})}const gE=Object.freeze(Object.defineProperty({__proto__:null,init:mE,meta:pE},Symbol.toStringTag,{value:"Module"})),bE={id:"viz-wordcloud",name:"Word cloud",type:"ui",version:"0.1.0",description:"Show the most frequent words in a text column, sized by how often they occur.",icon:"cloud"};function wE(e){e.ui.registerVisualization({id:"wordcloud",label:"Word cloud",icon:"cloud",tag:"viz-word-cloud",channels:[{key:"TEXT",label:"Text column",kind:"text",required:!0}],data:"rows",options:[{key:"minLength",label:"Ignore words shorter than",type:"number",default:3},{key:"keepWords",label:"Always keep these words",type:"text",description:"The exception to the limit above, and to the ignore list below. Commas, spaces or new lines."},{key:"stopWords",label:"Ignore these common words",type:"text",description:"Clear it to count every word. Commas, spaces or new lines."},{key:"maxTerms",label:"Most words to show",type:"number",default:120},{key:"includeNumbers",label:"Include numbers",type:"boolean"},{key:"rotate",label:"Allow sideways words",type:"boolean"}]})}const yE=Object.freeze(Object.defineProperty({__proto__:null,init:wE,meta:bE},Symbol.toStringTag,{value:"Module"})),vE={id:"command-palette-button",name:"Command Palette Button",type:"ui",version:"0.1.0",description:"Header “>” button that opens the command palette (also Ctrl/⌘K).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/command-palette-button.ts"};function kE(e){e.ui.registerHeaderButton({id:"command-palette:open",label:"Commands",icon:"chevron_right",tooltip:"Open the command palette (Ctrl/⌘K)",variant:"secondary",onClick:()=>e.ui.openCommandPalette()})}const $E=Object.freeze(Object.defineProperty({__proto__:null,init:kE,meta:vE},Symbol.toStringTag,{value:"Module"})),Va="electron-db:pendingImport",Zm=15*1024*1024;function eg(e){const t=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t>=0&&e.slice(t+1)||e}function tg(e){return e>=1024*1024?`${(e/(1024*1024)).toFixed(1)} MB`:e>=1024?`${Math.round(e/1024)} KB`:`${e} bytes`}let ci=null;const xE={id:"electron-db",name:"Database File",type:"ui",version:"0.1.0",description:"Open, Save As, or Import a .db file (Electron desktop build only).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/electron-db.ts"},SE=/\.(edb|db|sqlite|sqlite3)$/i,CE=/\.edb$/i;function _E(e){const t=window.easydb?.db;t&&(e.ui.registerDropHandler(async n=>{const r=[...n.dataTransfer?.files??[]].find(s=>SE.test(s.name));if(!r)return!1;const i=t.pathForFile(r);return i?(await rg(e,t,i,CE.test(r.name)),!0):(await e.ui.dialogs.alert(`"${r.name}" could not be located on disk, so it cannot be opened.`,"Database file"),!0)}),t.onImportProgress(n=>{if(document.dispatchEvent(new CustomEvent(bl,{detail:{tableId:n.tableId,rows:n.rows,total:n.total,...n.done?{done:!0}:{}}})),!ci)return;const{tracker:r,label:i}=ci;n.done?r.complete(n.tableId):r.observe(n.tableId,n.rows),go({label:i,fraction:r.fraction(),detail:`${r.completedTables()} of ${r.tableCount} table${r.tableCount===1?"":"s"}`})}),e.ui.registerFooterButton({id:"electron-db:menu",label:"Database",icon:"storage",tooltip:"Open, Save As, or Import a .db file",onClick:async(n,r)=>{const{AnchoredMenu:i}=await Ae(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>pr);return{AnchoredMenu:a}},void 0),s=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(s,[{id:"open",label:"Open…",icon:"folder_open"},{id:"saveAs",label:"Save As…",icon:"save"},{id:"import",label:"Import…",icon:"file_download"},...lg()?[{id:"stop",label:"Stop importing",icon:"cancel"}]:[]]);if(o)try{o==="open"?await ng(n,t):o==="saveAs"?await IE(n,t):o==="import"?await qo(n,t):o==="stop"&&cg()}catch(a){n.ui.dialogs.toast(`${o} failed: ${a.message}`,{kind:"error",title:"Database file"})}}}))}function EE(e){const t=window.easydb?.db;t&&ug(e,t).catch(n=>{e.ui.dialogs.toast(`Finishing the conversion failed: ${n.message}`,{kind:"error",title:"Convert to EDA"})})}async function ng(e,t){const n=await t.openDb();n.ok&&await Vc(e,t,n.path,n.kind)}async function rg(e,t,n,r){if(!r){await qo(e,t,n);return}const i=await t.probeDb(n);if(i==="easydb"){await ig(e,t,n,i);return}e.ui.dialogs.toast(`"${n}" is named as a workspace but does not contain one.`,{kind:"warning",title:"Open workspace"}),await Vc(e,t,n,i)}async function Vc(e,t,n,r){if(r==="unreadable"){await e.ui.dialogs.alert(`"${n}" is not a SQLite database — it could not be read.`,"Database file");return}const i=await e.ui.dialogs.choice(`What would you like to do with "${n}"?`,["Open Workspace","Browse .db file","Import data"],"Database file");if(i){if(i==="Import data"){await qo(e,t,n);return}if(i==="Browse .db file"){await sg(e,t,n);return}await ig(e,t,n,r)}}async function ig(e,t,n,r){if(r==="foreign"){const s=await e.ui.dialogs.choice(`"${n}" is a SQLite database, but not an easyDBAccess workspace — there is no workspace in it to open.

It can be converted into one (a new file is written; this one is left exactly as it is), or opened read-only for a look.`,["Convert to EDA","Browse"],"Open workspace");s==="Convert to EDA"?await TE(e,t,n):s==="Browse"&&await sg(e,t,n);return}await e.ui.dialogs.confirm(`Open "${n}"?

This replaces the current workspace view with that file's data. Nothing is deleted — the file you have open now is left exactly as it is on disk.`,"Open workspace")&&await t.openDbCommit(n)}async function TE(e,t,n){const r=await t.browseList(n);if(r.length===0){await e.ui.dialogs.alert(`"${n}" has no tables or views to convert.`,"Convert to EDA");return}const i=await og(e,r,"Convert to EDA",{offerTablesOnly:!0});i.length===0||(await t.convertDb(n,i.map(o=>o.name))).ok}async function IE(e,t){const n=await t.saveDbAs();n.ok&&e.ui.dialogs.toast(`Saved a copy to "${n.path}" — that file is now the active database.`,{kind:"success",title:"Save database as"})}async function sg(e,t,n){const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=await t.browseList(n);if(i.length===0){await e.ui.dialogs.alert(`"${n}" has no tables or views to browse.`,"Browse database");return}const s=await og(e,i,"Browse database");if(s.length===0)return;const o=new Set((await e.store.tables.find()).filter(c=>c.workspaceId===r).map(c=>c.name.toLowerCase()));for(const c of s){const d=hg(c.name,o);o.add(d.toLowerCase()),await e.store.tables.insert({id:crypto.randomUUID(),workspaceId:r,name:d,columns:c.columns,view:"table",readonly:!0,source:{type:"sqlitefile",config:{path:n,objectName:c.name,isView:c.kind==="view"},writable:!1},updatedAt:Date.now()})}const a=s.filter(c=>c.kind==="view").length;e.ui.dialogs.toast(`Browsing ${s.length} object${s.length===1?"":"s"} from "${n}"${a?` (${a} view${a===1?"":"s"})`:""} — read-only.`,{kind:"success",title:"Browse database"})}async function og(e,t,n,r){if(t.length===1)return t;const i=t.filter(p=>p.kind==="table"),s=`All ${t.length}`,o=r?.offerTablesOnly&&i.length>0&&i.length<t.length?`All ${i.length} table${i.length===1?"":"s"} (skip the views)`:null,a=t.map(p=>`${p.name}${p.kind==="view"?" (view)":""}${p.rowCount==null?"":` — ${p.rowCount} rows`}`),c=await e.ui.dialogs.choice("Which tables or views?",[...o?[o]:[],s,...a],n);if(!c)return[];if(c===o)return i;if(c===s)return t;const d=a.indexOf(c),f=t[d];return f?[f]:[]}async function qo(e,t,n){const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=await t.importDb(r,n);if(!i.ok)return;const{preview:s}=i;if(s.candidates.length===0){await e.ui.dialogs.alert(`No importable tables were found in "${i.path}".`,"Import database");return}const o=s.sizeBytes??0,a=await dg.pickCandidates(e,s.candidates);if(a.length===0)return;const c=a.filter(E=>E.mode==="projection"),d=a.filter(E=>E.mode!=="projection").map(E=>E.candidate),f=new Set(d.map(E=>E.name));if(d.length===0&&c.length===0)return;const p=new Set((await e.store.tables.find()).filter(E=>E.workspaceId===r).map(E=>E.name.toLowerCase())),b={};for(const E of s.candidates){if(!f.has(E.name)){b[E.name]={action:"skip"};continue}if(!E.collides)continue;const T=await e.ui.dialogs.choice(`A table named "${E.name}" already exists in this workspace.`,["Append","Overwrite","Rename","Skip"],"Import — table already exists");if(!T||T==="Skip"){b[E.name]={action:"skip"};continue}if(T==="Append"){const L=await OE(e,E,r);b[E.name]=L??{action:"skip"};continue}if(T==="Overwrite"){b[E.name]={action:"overwrite"};continue}const Y=hg(E.name,p);p.add(Y.toLowerCase()),b[E.name]={action:"rename",renameTo:Y}}const{plan:y,skipped:k}=await t.importPrepare(i.path,r,b);if(y.length===0){Il(e,i.path,k);return}e.ui.dialogs.toast(`Importing ${y.length} object${y.length===1?"":"s"} from "${i.path}" — the windows are there now and fill in as the rows arrive.`,{kind:"info",title:"Import database"});const $=eg(i.path),C=await ag(e,t,i.path,y,k,`Importing ${$}${o>0?` (${tg(o)})`:""}`);Il(e,i.path,C),c.length>0&&await AE(e,r,c,o>Zm)}async function AE(e,t,n,r=!1){const[{parseSqlScript:i},{createProjectionTable:s}]=await Promise.all([Ae(()=>Promise.resolve().then(()=>Qv),void 0),Ae(()=>Promise.resolve().then(()=>jv),void 0)]),o=[],a=[];for(const{candidate:c}of n){const d=c.sql??"";if(!d){a.push({name:c.name,why:"its definition could not be read"});continue}const f=i(d),p=f.projections[0];if(!p){a.push({name:c.name,why:f.unsupported[0]??"its SELECT could not be modelled as a projection"});continue}const b=(await e.store.tables.find()).filter($=>$.workspaceId===t),y=new Map(b.map($=>[$.name.toLowerCase(),$])),k=await s(e,t,{name:c.name,spec:p.spec,...p.sortBy?{sortBy:p.sortBy}:{}},{resolve:$=>y.get($.toLowerCase()),taken:b.map($=>$.name)});if(!k){const $=p.spec.sources.map(C=>C.tableName).join(", ");a.push({name:c.name,why:`it reads tables this workspace does not have (${$}) — import them too`});continue}if(r){const $=o.length;await e.store.tables.patch(k.id,{windowGeometry:{x:40+$%10*24,y:40+$%10*24,w:640,h:360,z:$,minimized:!0,maximized:!1},updatedAt:Date.now()})}o.push(k.name)}o.length>0&&e.ui.dialogs.toast(`Created ${o.length} projection${o.length===1?"":"s"} from views: ${o.join(", ")}.${r?" Left minimized — this file is big enough that opening them all would stall the app.":""}`,{kind:"success",title:"Import database"}),a.length>0&&e.ui.dialogs.toast(`${a.length} view${a.length===1?"":"s"} could not become a projection — ${a.map(c=>`${c.name}: ${c.why}`).join("; ")}. Import them as Data instead.`,{kind:"warning",title:"Import database"})}async function ag(e,t,n,r,i=[],s="Importing"){const o=[...i];Pn={cancelled:!1};const a=Pn,c=new mp(r.map(d=>({tableId:d.tableId,total:d.total})));ci={tracker:c,label:s},go({label:s,detail:`0 of ${r.length} table${r.length===1?"":"s"}`});try{for(const d of r){if(a.cancelled){e.ui.dialogs.toast(`Stopped. ${o.length} of ${r.length} table${r.length===1?"":"s"} were filled; the rest are still empty.`,{kind:"warning",title:"Import database"});break}try{const f=await t.importRows(n,d);o.push({sourceName:d.sourceName,action:d.action,finalName:d.finalName,tableId:d.tableId,rowCount:f})}catch(f){e.ui.dialogs.toast(`"${d.finalName}" failed: ${f.message}`,{kind:"error",title:"Import database"})}}}finally{Pn===a&&(Pn=null),ci?.tracker===c&&(ci=null),pp()}return o}let Pn=null;function lg(){return Pn!==null}function cg(){Pn&&(Pn.cancelled=!0)}async function ug(e,t){const r=(await e.store.settings.findOne(Va))?.value;if(!r?.sourcePath||!r.plan?.length)return;const i=r.plan.length,s=r.plan.reduce((b,y)=>b+(y.total>0?y.total:0),0),o="Fill them in now",a="Leave them empty",c=await e.ui.dialogs.choice(`${i} table${i===1?"":"s"} in this workspace ${i===1?"is":"are"} still empty — ${i===1?"its":"their"} rows were being copied from "${r.sourcePath}" when the app last stopped.

${s>0?`About ${s.toLocaleString()} rows are left. `:""}Copying can be stopped from the Database menu once it starts.`,[o,a],"Unfinished import");if(c!==o){c===a&&await e.store.settings.remove(Va);return}const d=eg(r.sourcePath),f=r.sizeBytes??0,p=await ag(e,t,r.sourcePath,r.plan,[],`Converting ${d}${f>0?` (${tg(f)})`:""}`);await e.store.settings.remove(Va),Il(e,r.sourcePath,p)}const dg={pickCandidates:(e,t)=>RE(e,t)};async function RE(e,t){const{chooseDatabaseObjects:n}=await Ae(async()=>{const{chooseDatabaseObjects:s}=await Promise.resolve().then(()=>Iy);return{chooseDatabaseObjects:s}},void 0),r=t.map(s=>({name:s.name,size:s.rowCount<0?null:s.rowCount,kind:s.isView?"view":"table",...s.collides?{detail:"⚠ name already in use"}:{}})),i=await n(r,{title:"Import database",message:"Tables bring their rows. A view can come in as a Projection — its query, recomputed — or as Data, a snapshot you can edit.",confirmLabel:"Import",offerViewModes:!0});return i?i.map(s=>({candidate:t[s.index],mode:s.mode})):[]}async function OE(e,t,n){const r=t.columns??[],s=(await e.store.tables.find()).find(d=>d.workspaceId===n&&d.name.toLowerCase()===t.name.toLowerCase())?.columns??[],o=new Set(s.map(d=>d.field.toLowerCase()));if(r.length===0||s.length===0||r.every(d=>o.has(d.toLowerCase())))return{action:"append"};const{mapColumnsToTable:a}=await Ae(async()=>{const{mapColumnsToTable:d}=await import("./column-map-dialog-xjswyFkn.js");return{mapColumnsToTable:d}},[]),c=await a([...r],[...s],t.name);return c?{action:"append",mapping:c}:null}function hg(e,t){if(!t.has(e.toLowerCase()))return e;for(let n=2;;n++){const r=`${e} (${n})`;if(!t.has(r.toLowerCase()))return r}}function Il(e,t,n){const r={created:n.filter(o=>o.action==="created").length,renamed:n.filter(o=>o.action==="renamed").length,overwritten:n.filter(o=>o.action==="overwritten").length,skipped:n.filter(o=>o.action==="skipped").length},i=n.reduce((o,a)=>o+a.rowCount,0),s=[];if(r.created&&s.push(`${r.created} new`),r.renamed&&s.push(`${r.renamed} renamed`),r.overwritten&&s.push(`${r.overwritten} overwritten`),r.skipped&&s.push(`${r.skipped} skipped`),s.length===0){e.ui.dialogs.toast(`Nothing imported from "${t}".`,{kind:"warning",title:"Import database"});return}e.ui.dialogs.toast(`Imported from "${t}": ${s.join(", ")} (${i} row${i===1?"":"s"} total).`,{kind:"success",title:"Import database"})}const DE=Object.freeze(Object.defineProperty({__proto__:null,LARGE_SOURCE_BYTES:Zm,cancelImport:cg,handleDatabaseFile:Vc,handleDroppedFile:rg,importDeps:dg,importFlow:qo,init:_E,isImporting:lg,load:EE,meta:xE,openFlow:ng,resumePendingImport:ug},Symbol.toStringTag,{value:"Module"})),LE={id:"sqlitefile-source",name:"Browse a database file",type:"source",version:"0.1.0",description:"Reads tables and views out of a .db file, read-only (Electron desktop build only).",author:"Marc Cawood",repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sqlitefile-source.ts"};function fg(e){const t=e.source?.config;return!t||typeof t.path!="string"||typeof t.objectName!="string"?null:{path:t.path,objectName:t.objectName,isView:!!t.isView}}function Dn(e){throw new Error(`This table is a read-only browse of a database file — ${e} is not possible. Use Import to bring the data into your workspace first.`)}function ME(e,t){const n=fg(e),r=new Set;let i=null;async function s(){return n?(i=(await t.browseRows(n.path,n.objectName,e.columns)).map(c=>({id:c.id,tableId:e.id,data:c.data,updatedAt:0})),i):[]}function o(a){for(const c of r)c(a)}return{async find(){return i??await s()},async findOne(a){return(i??await s()).find(c=>c.id===a)},async count(){return(i??await s()).length},async refresh(){o(await s())},subscribe(a){return r.add(a),(i?Promise.resolve(i):s()).then(a),()=>void r.delete(a)},insert:()=>Dn("adding a row"),bulkInsert:()=>Dn("adding rows"),upsert:()=>Dn("changing a row"),patch:()=>Dn("changing a row"),remove:()=>Dn("deleting a row"),bulkRemove:()=>Dn("deleting rows"),clear:()=>Dn("clearing the table")}}function PE(e){const t=window.easydb?.db;t&&typeof e.registerRowSource=="function"&&e.registerRowSource({type:"sqlitefile",create:n=>ME(n,t),schemaEditable:!1})}const zE=Object.freeze(Object.defineProperty({__proto__:null,init:PE,meta:LE,parseConfig:fg},Symbol.toStringTag,{value:"Module"})),NE=[{id:"press-ctrl-k-to-run-commands",text:"Press Ctrl+K to run commands"},{id:"drag-in-a-file-to-import-csv-json",text:"Drag in a file to import (.csv, .json)"},{id:"right-click-and-drag-the-workspace-to-pan-deskto",text:"Right-click and drag the workspace to pan (Desktop)"}],jE={tips:NE},vr={id:"tips",name:"Tips",type:"ui",version:"0.1.0",description:'Shows one unseen tip on startup, plus a "Show tip" command. Compiled from docs/help/tips.md.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21h6"/><path d="M10 18h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.3.3.5.7.5 1.1v0h6v0c0-.4.2-.8.5-1.1A6 6 0 0 0 12 3z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/tips.ts"},eo="seen",to=jE.tips;function FE(){if(typeof location>"u")return!0;const e=new URLSearchParams(location.search);return e.get("tips")==="1"?!1:e.get("test")==="1"}async function Kc(e){const t=await e.settings.get(vr.id,eo);return Array.isArray(t)?t.filter(n=>typeof n=="string"):[]}async function UE(e){const t=Hs(vr.id),n=await e.store.plugins.findOne(t);await e.store.plugins.upsert({...n??{url:t,lastFetched:0},url:t,enabled:!1,lastFetched:n?.lastFetched??0}),await e.settings.set(vr.id,eo,[],"user")}async function pg(e,t){const n=await Kc(e),r=to[t];if(!r)return;await e.settings.set(vr.id,eo,[...new Set([...n,r.id])],"user");const{TipsDialog:i}=await Ae(async()=>{const{TipsDialog:o}=await import("./tips-dialog-CElJhRf-.js");return{TipsDialog:o}},[]),s=await i.open({tips:to,startIndex:t});if(s.dontShowAgain){await UE(e);return}await e.settings.set(vr.id,eo,[...new Set([...n,...s.viewed])],"user")}function BE(e){e.ui.registerCommand({id:"tips:show",title:"Show tip",group:"Help",icon:"lightbulb",keywords:["tip","hint","help"],run:async t=>{const n=await Kc(t),r=to.findIndex(i=>!n.includes(i.id));await pg(t,r===-1?0:r)}})}async function qE(e){if(FE())return;const t=await Kc(e),n=to.findIndex(r=>!t.includes(r.id));n!==-1&&await pg(e,n)}const HE=Object.freeze(Object.defineProperty({__proto__:null,init:BE,load:qE,meta:vr},Symbol.toStringTag,{value:"Module"}));var VE=Object.defineProperty,KE=Object.getOwnPropertyDescriptor,Wc=(e,t,n,r)=>{for(var i=r>1?void 0:r?KE(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&VE(t,n,i),i};const Gc="https://github.com/cawoodm/easydbaccess/blob/main/docs/help/commandlets.md";let ks=null;function WE(){return ks||(ks=document.createElement("commandlet-dialog"),document.body.appendChild(ks)),ks}let kr=class extends $e{constructor(){super(...arguments),this.value="",this.verdict=null,this.check=null,this.checkSeq=0,this.dialogEl=null,this.resolveFn=null,this.onInput=e=>{this.value=e.target.value,this.revalidate()},this.onSubmit=e=>{e.preventDefault();const t=this.value.trim();!t||this.verdict?.ok===!1||this.finish(t)},this.onCancel=e=>{e.preventDefault(),this.finish(null)}}static open(e,t=""){return WE().openDialog(e,t)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&Zt("commandlet",this.dialogEl)}openDialog(e,t){return this.check=e,this.value=t,this.verdict=null,t&&this.revalidate(),new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>{this.dialogEl?.showModal();const r=this.shadowRoot?.querySelector("input.commandlet");r?.focus(),r?.select()})})}async revalidate(){const e=++this.checkSeq,t=this.value.trim();if(!t||!this.check){this.verdict=null;return}const n=await this.check(t);e===this.checkSeq&&(this.verdict=n)}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}render(){const e=this.verdict;return v`
      <dialog @cancel=${this.onCancel} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish(null)}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>Run commandlet</h2>
            <div class="header-actions">
              <a class="help" href=${Gc} target="_blank" rel="noopener noreferrer" title="What is a commandlet?">?</a>
              <button type="button" class="ghost" @click=${()=>this.finish(null)}>Cancel</button>
              <button type="submit" class="primary" ?disabled=${e?.ok===!1||this.value.trim()===""}>Run</button>
            </div>
          </div>
          <div class="dialog-body">
            <input class="commandlet" type="text" spellcheck="false" placeholder="goto/bible?Book=Matthew" .value=${this.value} @input=${this.onInput} />
            <div class="verdict ${e?e.ok?"ok":"bad":""}">${e?v`<span class="mark">${e.ok?"✓":"✕"}</span><span>${e.message}</span>`:X}</div>
            <p class="hint">
              <code>goto/&lt;table&gt;?&lt;Column&gt;=&lt;filter&gt;</code> — add <code>@sort=-Field</code>, <code>@search=…</code> or <code>@clear=1</code>; chain with <code>;</code>. Also
              <code>search/…</code>, <code>view/…</code> and <code>cmd/&lt;id&gt;</code>.
            </p>
          </div>
        </form>
      </dialog>
    `}};kr.styles=[mt,Se`
      dialog {
        min-width: 460px;
        max-width: 620px;
      }
      input.commandlet {
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.9rem;
        padding: 0.5rem 0.6rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        width: 100%;
        box-sizing: border-box;
      }
      input.commandlet:focus {
        outline: 2px solid #3b82f6;
        outline-offset: -1px;
      }
      /* The verdict line keeps its height whatever it says, so the dialog does
         not jump around while the user types. */
      .verdict {
        min-height: 1.4rem;
        font-size: 0.85rem;
        line-height: 1.4;
        display: flex;
        gap: 0.4rem;
        align-items: baseline;
      }
      .verdict.ok {
        color: #047857;
      }
      .verdict.bad {
        color: #b91c1c;
      }
      .verdict .mark {
        font-weight: 700;
      }
      .hint {
        margin: 0;
        font-size: 0.82rem;
        color: #6b7280;
        line-height: 1.5;
      }
      .hint code {
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        background: #f3f4f6;
        padding: 0.05rem 0.25rem;
        border-radius: 0.2rem;
      }
      a.help {
        display: inline-grid;
        place-items: center;
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
        border: 1px solid #6b7280;
        color: #e5e7eb;
        text-decoration: none;
        font-size: 0.8rem;
        font-weight: 700;
        line-height: 1;
      }
      a.help:hover {
        background: rgba(255, 255, 255, 0.12);
        color: white;
        border-color: #9ca3af;
      }
    `];Wc([z()],kr.prototype,"value",2);Wc([z()],kr.prototype,"verdict",2);kr=Wc([Oe("commandlet-dialog")],kr);const GE=Object.freeze(Object.defineProperty({__proto__:null,COMMANDLET_HELP_URL:Gc,get CommandletDialog(){return kr}},Symbol.toStringTag,{value:"Module"}));let mg;const YE=new Promise(e=>{mg=e});function QE(){mg()}function JE(){return YE}async function XE(e,t={}){const n=Jf(e),r=await gg(t);for(const i of n)await t2(Xf(i,r),t)}async function ZE(e,t={}){const n=e.trim();if(!n)return{ok:!1,message:""};let r;try{r=Jf(n)}catch(o){return{ok:!1,message:o instanceof Error?o.message:String(o)}}const i=await gg(t),s=[];for(const o of r)try{s.push(await e2(Xf(o,i),t))}catch(a){return{ok:!1,message:a instanceof Error?a.message:String(a)}}return{ok:!0,message:s.join(", then ")}}async function e2(e,t={}){switch(e.verb){case"goto":{const n=await vg(e.targets[0]??""),r=Object.keys(e.filters).map(o=>$r(n,o)),i=no(e.options.sort,n),s=[`open ${n.name}`];return r.length>0&&s.push(`filter ${r.join(" + ")}`),e.options.clear!==void 0&&s.push("clear filters"),e.options.search!==void 0&&s.push(`search "${e.options.search}"`),i&&i.length>0&&s.push(`sort by ${i.map(o=>`${o.field}${o.asc?"":" ↓"}`).join(", ")}`),s.join(", ")}case"search":return`search all tables for "${e.targets[0]??""}"`;case"view":{const n=await bg(e,t),r=await wg(n),i=Object.keys(e.filters).map(a=>$r(r,a)),s=no(e.options.sort,r),o=[`open view "${n.name}"`];return i.length>0&&o.push(`filter ${i.join(" + ")}`),e.options.clear!==void 0&&o.push("clear filters"),e.options.search!==void 0&&o.push(`search "${e.options.search}"`),s&&s.length>0&&o.push(`sort by ${s.map(a=>`${a.field}${a.asc?"":" ↓"}`).join(", ")}`),o.join(", ")}case"cmd":return`run "${(await yg(e.targets[0]??"")).title}"`;case"preview":case"ui":throw new dt(`"${e.verb}" is not wired up yet.`)}}async function gg(e){const t=await J(),n={WORKSPACE:t.workspaceId,...e.vars??{}};if(e.field!==void 0&&(n.FIELD=e.field),e.value!==void 0&&(n.VALUE=e.value),e.tableId){const r=await t.store.tables.findOne(e.tableId);r&&(n.TABLE=r.name)}return n}async function t2(e,t={}){switch(e.verb){case"goto":return n2(e);case"search":return r2(e);case"view":return i2(e,t);case"cmd":return s2(e);case"preview":case"ui":throw new dt(`"${e.verb}" is not wired up yet.`)}}async function n2(e){const t=e.targets[0]??"",n=await vg(t),r={},i=e.options.clear===void 0?{...n.filters??{}}:{};for(const[a,c]of Object.entries(e.filters)){const d=$r(n,a);c===""?delete i[d]:i[d]=c}(Object.keys(e.filters).length>0||e.options.clear!==void 0)&&(r.filters=Object.keys(i).length>0?i:void 0);const s=no(e.options.sort,n);s&&(r.sortBy=s.length>0?s:void 0,r.sortColumn=s[0]?.field,r.sortAsc=s[0]?s[0].asc:void 0),Object.keys(r).length>0&&await(await J()).store.tables.patch(n.id,{...r,updatedAt:Date.now()}),Mc(n.id);const o=e.options.search;o!==void 0&&document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:n.id,query:o}}))}function no(e,t){return e===void 0?null:e.split(",").map(n=>n.trim()).filter(Boolean).map(n=>n.startsWith("-")?{field:$r(t,n.slice(1)),asc:!1}:{field:$r(t,n),asc:!0})}function $r(e,t){const n=new Map;for(const i of e.columns??[])n.set(i.field.toLowerCase(),i.field),i.label&&n.set(i.label.toLowerCase(),i.field);const r=n.get(t.trim().toLowerCase());if(!r){const i=(e.columns??[]).map(s=>s.field).join(", ");throw new dt(`"${e.name}" has no column "${t}"${i?` — it has ${i}`:""}.`)}return r}function r2(e){const t=e.targets[0]??"";document.dispatchEvent(new CustomEvent("easydb:set-search",{detail:{query:t}}))}async function i2(e,t){const n=await bg(e,t),r=await wg(n),i={},s=e.options.clear===void 0?{...n.pillFilters??{}}:{};for(const[c,d]of Object.entries(e.filters)){const f=$r(r,c);d===""?delete s[f]:s[f]=d}(Object.keys(e.filters).length>0||e.options.clear!==void 0)&&(i.pillFilters=Object.keys(s).length>0?s:void 0);const o=no(e.options.sort,r);o&&(i.sortBy=o.length>0?o:void 0,i.sortColumn=o[0]?.field,i.sortAsc=o[0]?o[0].asc:void 0),Object.keys(i).length>0&&await(await J()).store.viewInstances.patch(n.id,{...i,updatedAt:Date.now()}),await Hc(n.id);const a=e.options.search;a!==void 0&&document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:n.id,query:a}}))}async function bg(e,t){const n=(e.targets[0]??"").trim();if(n)return o2(n);if(!t.viewInstanceId)throw new dt('"view" with no name means the view you are in — this was not run from one, so name the view.');const i=await(await J()).store.viewInstances.findOne(t.viewInstanceId);if(!i)throw new dt("That view no longer exists.");return i}async function wg(e){const n=await(await J()).store.tables.findOne(e.tableId);if(!n)throw new dt(`The view "${e.name}" has no table.`);return n}async function s2(e){const t=await yg(e.targets[0]??""),n=await J();await t.run(n.api)}async function o2(e){const t=e.trim(),n=await J(),r=(await n.store.viewInstances.find()).filter(s=>s.workspaceId===n.workspaceId),i=r.find(s=>s.name===t)??r.find(s=>s.name.toLowerCase()===t.toLowerCase());if(!i)throw new dt(`No view called "${t}".`);return i}async function yg(e){const t=await J(),n=t.registries.commands.find(r=>r.id===e)??t.registries.commands.find(r=>r.id.toLowerCase()===e.toLowerCase());if(!n)throw new dt(`No command with id "${e}".`);return n}async function vg(e){const t=e.trim();if(!t)throw new dt("No table name given.");const n=await J(),r=(await n.store.tables.find()).filter(s=>s.workspaceId===n.workspaceId),i=r.find(s=>s.name===t)??r.find(s=>s.name.toLowerCase()===t.toLowerCase());if(!i)throw new dt(`No table called "${t}".`);return i}const Yc={id:"commandlets",name:"Commandlets",type:"ui",version:"0.1.0",description:"Run URL-shaped actions like goto/bible?Book=Matthew — from a link, a #hash, ?cmdlet= or the palette.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/commandlets.ts"},a2="cmdlet",kg="default";function l2(e){e.ui.registerSettings(Yc.id,"Commandlets",[{key:kg,label:"Default commandlet",type:"string",scope:"workspace",description:"Run this when the URL hash is not a commandlet itself. Blank ⇒ a plain #anchor is ignored, as before.",help:"Anchors like #Matthew carry no verb, so nothing runs unless this template says what to do with one. $HASH is the whole anchor text and $1…$9 are its /-separated parts, e.g. goto/bible?Title=$HASH&@sort=Title turns #Matthew into goto/bible?Title=Matthew&@sort=Title. The text is substituted after parsing, so an anchor containing & or ; cannot break the command.",helpUrl:Gc,helpLinkLabel:"Commandlets guide"}]),e.ui.registerCommand({id:"commandlets:run",title:"Run commandlet…",group:"App",icon:"terminal",keywords:["command","goto","action","link","url"],run:t=>d2(t)}),e.ui.registerCommandFallback?.(t=>ic(t)?{id:"commandlets:run-this",title:`Run this commandlet: ${t}`,group:"Commands",icon:"terminal",run:n=>xr(n,t)}:null)}function c2(e){document.addEventListener("click",t=>void f2(e,t),!0),window.addEventListener("hashchange",()=>void $g(e)),JE().then(()=>u2(e))}async function u2(e){const t=new URLSearchParams(location.search).get(a2);t&&await xr(e,t),await $g(e)}async function d2(e,t=""){const{CommandletDialog:n}=await Ae(async()=>{const{CommandletDialog:i}=await Promise.resolve().then(()=>GE);return{CommandletDialog:i}},void 0),r=await n.open(i=>ZE(i),t);r!==null&&await xr(e,r)}async function $g(e){const t=location.hash.replace(/^#/,"");if(!t)return;if(ic(t)){Dh(),await xr(e,t);return}const n=(await e.settings.get(Yc.id,kg))?.trim();if(!n)return;const r=h2(t),i=r.split("/"),s={HASH:r};i.forEach((o,a)=>{s[String(a+1)]=o}),Dh(),await xr(e,n,{vars:s})}function Dh(){history.replaceState(null,"",location.pathname+location.search)}function h2(e){try{return decodeURIComponent(e)}catch{return e}}async function f2(e,t){if(t.defaultPrevented||t.button!==0||t.ctrlKey||t.metaKey||t.shiftKey||t.altKey)return;const n=t.composedPath(),r=n.find(o=>o instanceof HTMLAnchorElement);if(!r)return;const i=r.getAttribute("href")??"";if(!i.startsWith("#"))return;const s=i.slice(1);ic(s)&&(t.preventDefault(),await xr(e,s,p2(n)))}function p2(e){const t={};for(const n of e){if(!t.tableId){const r=Pm(n);r&&(t.tableId=r)}if(!t.viewInstanceId&&n instanceof HTMLElement&&n.tagName==="VIEW-WINDOW"){const r=n.viewInstanceId;r&&(t.viewInstanceId=r)}if(t.field===void 0&&n instanceof HTMLElement){const r=n;r.column?.field&&(t.field=r.column.field,r.value!=null&&(t.value=String(r.value)))}}return t}async function xr(e,t,n){try{await XE(t,n??{})}catch(r){const i=r instanceof dt||r instanceof Error?r.message:String(r);e.ui.dialogs.toast(i,{kind:"error",title:"Commandlet"})}}const m2=Object.freeze(Object.defineProperty({__proto__:null,init:l2,load:c2,meta:Yc},Symbol.toStringTag,{value:"Module"})),g2=[V_,x$,yy,Wy,r0,c0,X0,gk,xk,Sy,Zk,Rk,p$,v$,O$,z$,U$,V$,nx,_x,Ax,Lx,Ux,Kx,Zx,fS,yS,JS,qm,B_,uE,fE,gE,yE,$E,DE,zE,HE,m2];function b2(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const xg=g2.map(e=>{const t=b2(e);return{id:t.id,meta:t,module:e}}),w2=xg;async function y2(e){const t=[];for(const n of xg)if(!await v2(e,n)){t.push(n);try{await n.module.init?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"init",error:r})}}return async()=>{for(const n of t)try{await n.module.load?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"load",error:r})}}}async function v2(e,t){return t.meta.fixed?!1:Tt==="all-optional"?!0:(await e.store.plugins.findOne(Hs(t.id)))?.enabled===!1}function Sg(e){return e.filter(t=>t.status!=="minimized")}function k2(e,t,n){if(e<=0)return[];const r=Math.ceil(Math.sqrt(e)),i=Math.ceil(e/r),s=(t.w-n*(r+1))/r,o=(t.h-n*(i+1))/i;return Array.from({length:e},(a,c)=>{const d=c%r,f=Math.floor(c/r);return{x:t.x+n+d*(s+n),y:t.y+n+f*(o+n),w:s,h:o}})}function Rr(){return gx()}function $2(){for(const e of Rr())e.close?.()}function x2(){for(const e of Rr())e.minimize?.()}function S2(){for(const e of Rr())e.normalize?.()}function C2(){for(const e of Rr())e.maximize?.()}function Cg(){const e=document.getElementById("easydb-panels"),t=e?.clientWidth??window.innerWidth,n=e?.clientHeight??window.innerHeight,r=Qs()?.snapshot(),i=r?.scale&&r.scale>0?r.scale:1,s=r?.x??0,o=r?.y??0;return{x:-s/i,y:-o/i,w:t/i,h:n/i}}function _g(e,t,n,r,i){e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(n)}px`,e.style.width=`${Math.round(r)}px`,e.style.height=`${Math.round(i)}px`}function _2(){const e=Sg(Rr()).reverse();if(e.length===0)return;const t=Cg(),n=32,r=Math.min(680,Math.max(320,t.w*.6)),i=Math.min(480,Math.max(240,t.h*.6));e.forEach((s,o)=>{s.normalize?.(),_g(s,t.x+24+o*n,t.y+24+o*n,r,i)}),Eg()}function Eg(){Om(),t_()}function E2(){const e=Sg(Rr()).reverse();if(e.length===0)return;const n=k2(e.length,Cg(),8);e.forEach((r,i)=>{r.normalize?.();const s=n[i];s&&_g(r,s.x,s.y,s.w,s.h)}),Eg()}function $s(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function T2(e,t){const{from:n,to:r,name:i,mode:s}=t,o=await e.workspaces.get(n);if(await e.workspaces.put({id:r,name:i,createdAt:Date.now(),pluginUrls:s==="empty"?[]:[...o?.pluginUrls??[]]}),s==="empty")return r;if(s==="all"){const c=await e.tables.where("workspaceId").equals(n).toArray(),d=new Map;for(const y of c){const k=$s();d.set(y.id,k),await e.tables.put({...y,id:k,workspaceId:r,updatedAt:Date.now()})}for(const[y,k]of d){const $=await e.rows.where("tableId").equals(y).toArray();$.length>0&&await e.rows.bulkPut($.map(C=>({...C,id:$s(),tableId:k})))}const f=await e.viewTemplates.where("workspaceId").equals(n).toArray(),p=new Map;for(const y of f){const k=$s();p.set(y.id,k),await e.viewTemplates.put({...y,id:k,workspaceId:r})}const b=await e.viewInstances.where("workspaceId").equals(n).toArray();for(const y of b){const k=d.get(y.tableId);k&&await e.viewInstances.put({...y,id:$s(),workspaceId:r,tableId:k,templateId:p.get(y.templateId)??y.templateId})}}const a=await e.settings.where("workspaceId").equals(n).toArray();for(const c of a)await e.settings.put({...c,key:It(r,c.name),workspaceId:r,name:c.name});return r}async function Tg(e,t){return(await e.tables.where("workspaceId").equals(t).toArray()).map(r=>r.id)}async function Ig(e,t){const n=await Tg(e,t),r=n.length===0?0:await e.rows.where("tableId").anyOf(n).count();return{tables:n.length,rows:r,views:await e.viewInstances.where("workspaceId").equals(t).count(),templates:await e.viewTemplates.where("workspaceId").equals(t).count(),settings:await e.settings.where("workspaceId").equals(t).count()}}async function I2(e,t){const n=await Ig(e,t),r=await Tg(e,t);if(r.length>0){const a=await e.rows.where("tableId").anyOf(r).toArray();await e.rows.bulkDelete(a.map(c=>c.id)),await e.tables.bulkDelete(r)}const i=await e.viewInstances.where("workspaceId").equals(t).toArray();await e.viewInstances.bulkDelete(i.map(a=>a.id));const s=await e.viewTemplates.where("workspaceId").equals(t).toArray();await e.viewTemplates.bulkDelete(s.map(a=>a.id));const o=await e.settings.where("workspaceId").equals(t).toArray();return await e.settings.bulkDelete(o.map(a=>a.key).filter(a=>typeof a=="string")),await e.workspaces.delete(t),n}const Lh="Clone everything (tables, views, settings)",Mh="Clone settings only (no data)",A2="Empty workspace";function Ho(e){const t=new URLSearchParams(location.search);t.set("space",e),location.assign(`${location.pathname}?${t.toString()}${location.hash}`)}function R2(){const e=new URLSearchParams(location.search);e.delete("space");const t=e.toString();location.assign(`${location.pathname}${t?`?${t}`:""}${location.hash}`)}async function O2(){const e=await J(),t=(await e.store.workspaces.find()).filter(r=>r.id!==e.workspaceId);if(t.length===0){e.api.ui.dialogs.toast("This is the only workspace.",{kind:"info",title:"Workspaces"});return}const n=await e.api.ui.dialogs.choice("Open which workspace?",t.map(r=>r.name),"Switch workspace");n&&Ho(n)}async function Ag(){const e=await J(),t=await e.api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const n=await e.api.ui.dialogs.choice(`What should "${t.trim()}" start with?`,[Lh,Mh,A2],"New workspace");if(!n)return;const r=n===Lh?"all":n===Mh?"settings":"empty";await T2(Us(),{from:e.workspaceId,to:Dg(t.trim()),name:t.trim(),mode:r}),Ho(t.trim())}async function Rg(){const e=await J(),t=await e.store.workspaces.find();let n=t.find(c=>c.id===e.workspaceId)??t[0];if(!n)return;if(t.length>1){const c=await e.api.ui.dialogs.choice("Delete which workspace? Everything in it goes with it.",t.map(d=>d.name),"Delete workspace");if(!c)return;n=t.find(d=>d.name===c)??n}const r=await Ig(Us(),n.id),i=[`${r.tables} table${r.tables===1?"":"s"}`,`${r.rows.toLocaleString()} row${r.rows===1?"":"s"}`,`${r.views} view${r.views===1?"":"s"}`,`${r.settings} setting${r.settings===1?"":"s"}`].join(", "),s=t.length===1;if(!await e.api.ui.dialogs.confirm(`Delete the workspace "${n.name}"?

${i} will be deleted. This cannot be undone.`+(s?`

It is the only workspace, so an empty one will be created in its place.`:""),"Delete workspace"))return;if(await I2(Us(),n.id),j2(n.id),n.id!==e.workspaceId){e.api.ui.dialogs.toast(`Deleted "${n.name}" (${i}).`,{kind:"success",title:"Workspace deleted"});return}const a=t.find(c=>c.id!==n.id);a?Ho(a.name):R2()}function D2(e){const t=[{id:"windows:minimize-all",title:"Minimize all windows",icon:"remove",run:x2},{id:"windows:restore-all",title:"Restore all windows",icon:"crop_square",run:S2},{id:"windows:maximize-all",title:"Maximize all windows",icon:"fullscreen",run:C2},{id:"windows:cascade",title:"Cascade windows",icon:"view_agenda",run:_2},{id:"windows:tile",title:"Tile windows",icon:"grid_view",run:E2},{id:"windows:close-all",title:"Close all windows",icon:"close",run:$2}];for(const s of t)e.ui.registerCommand({id:s.id,title:s.title,group:"Windows",icon:s.icon,run:s.run});const n=[{id:"workspace:switch",title:"Switch workspace",icon:"swap_horiz",keywords:["space","open","change"],run:O2},{id:"workspace:new",title:"New workspace",icon:"add",keywords:["space","add","create","clone"],run:Ag},{id:"workspace:delete",title:"Delete workspace",icon:"delete",keywords:["space","remove","drop"],run:Rg}];for(const s of n)e.ui.registerCommand({id:s.id,title:s.title,group:"Workspace",icon:s.icon,keywords:s.keywords,run:s.run});const r="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md",i="https://github.com/cawoodm/easydbaccess/tree/main/docs";e.ui.registerCommand({id:"app:search",title:"Search all tables",group:"App",icon:"search",keywords:["find","global search","filter"],run:()=>{document.dispatchEvent(new CustomEvent("easydb:focus-search"))}}),e.ui.registerCommand({id:"app:plugins",title:"Plugins",group:"App",icon:"extension",keywords:["plugin manager","install","extensions"],run:s=>s.ui.openPluginManager()}),e.ui.registerCommand({id:"app:changelog",title:"Changelog",group:"App",icon:"history",keywords:["releases","version","whats new"],run:()=>{window.open(r,"_blank","noopener")}}),e.ui.registerCommand({id:"app:docs",title:"Documentation",group:"App",icon:"menu_book",keywords:["docs","help","guide","manual"],run:()=>{window.open(i,"_blank","noopener")}})}async function L2(e){if(Tt==="url-plugins"||Tt==="all-optional")return async()=>{};const t=e.workspaceId();if(!t)return async()=>{};const r=(await e.store.workspaces.findOne(t))?.pluginUrls??[],i=[];for(const s of r)try{const o=await e.store.plugins.findOne(s);if(o&&o.enabled===!1)continue;let a=o?.cachedBody??"";if(a)M2(e,s,a);else{try{a=await Og(s)}catch(f){await e.store.plugins.upsert({url:s,enabled:o?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${f.message}`}),e.events.emit("plugin:error",{url:s,phase:"fetch",error:f});continue}await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),cachedBody:a})}const c=new Blob([a],{type:"text/javascript"}),d=URL.createObjectURL(c);try{const f=await import(d);await f.init?.(e),i.push({url:s,mod:f})}finally{setTimeout(()=>URL.revokeObjectURL(d),5e3)}}catch(o){await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),lastError:`init: ${o.message}`}),e.events.emit("plugin:error",{url:s,phase:"init",error:o})}return async()=>{for(const{url:s,mod:o}of i)try{await o.load?.(e)}catch(a){await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),lastError:`load: ${a.message}`}),e.events.emit("plugin:error",{url:s,phase:"load",error:a})}}}async function Og(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const n=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(n))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return n}function M2(e,t,n){return(async()=>{try{const r=await Og(t);if(r===n)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:r})}catch{}})()}let Ka=null;function J(){return Ka||(Ka=P2()),Ka}async function P2(){let e="";const t=window.easydb?.store?xw(window.easydb.store,()=>e):Iw(await Us(),()=>e),n=Ow(),r=Lw(),i=new Map;t.tables.subscribe(C=>{i.clear();for(const E of C)i.set(E.id,E)});const s=Rw(t.tables),o={...s,insert:async C=>{const E=await s.insert(C);return i.set(E.id,E),E},upsert:async C=>{const E=await s.upsert(C);return i.set(E.id,E),E}};let a=null;const c={get backend(){if(!a)throw new Error("[host] row-source ctx used before app init completed");return a.backend},events:n,settings:t.settings,workspaceId:()=>b},d=Aw({base:{...t,tables:o},providers:r.rowSources,tableById:C=>i.get(C),ctx:c}),f=z2(),p=await d.workspaces.find();let b;if(f){const C=Dg(f),E=p.find(T=>T.id===C||T.name===f);E?b=E.id:b=(await d.workspaces.insert({id:C,name:f,createdAt:Date.now(),pluginUrls:[]})).id}else{const C=N2(),E=C?p.find(T=>T.id===C):void 0;E?b=E.id:p.length>0?b=p[0].id:b=(await d.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}e=b,F2(b);const y=qw({store:d,events:n,registries:r,workspaceId:()=>b});a=y,D2(y),n.on("import:after",({source:C,tableId:E,rowCount:T})=>{C!=="datasette"&&y.store.tables.findOne(E).then(Y=>{y.ui.dialogs.toast(`Imported ${T} row${T===1?"":"s"} into "${Y?.name??E}".`,{kind:"success",title:C.toUpperCase()+" import"})})}),n.on("plugin:error",({url:C,phase:E,error:T})=>{y.ui.dialogs.toast(`[${E}] ${T?.message??String(T)}`,{kind:"error",title:`Plugin: ${C}`})});const k=await y2(y),$=await L2(y);return queueMicrotask(async()=>{n.emit("app:ready",{workspaceId:b}),await k(),await $(),Tt==="all-optional"?y.ui.dialogs.toast("Safe mode is ON: only fixed built-ins (Settings, core rendering) loaded. All other built-in plugins and URL-installed plugins are disabled for this session only — nothing was changed. Disable the culprit below, then reload without ?safemode.",{kind:"warning",title:"Safe mode"}):Tt==="url-plugins"&&y.ui.dialogs.toast("Safe mode (URL plugins) is ON: URL-installed plugins were not loaded this session. Built-in plugins are unaffected. Reload without ?safemode1 to restore them.",{kind:"warning",title:"Safe mode"}),Tt!=="off"&&y.ui.openPluginManager()}),globalThis.api=y,{store:d,events:n,workspaceId:b,registries:r,api:y}}function z2(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const ro="eda:lastWorkspaceId";function N2(){try{return globalThis.localStorage?.getItem(ro)??null}catch{return null}}function j2(e){try{globalThis.localStorage?.getItem(ro)===e&&globalThis.localStorage.removeItem(ro)}catch{}}function F2(e){try{globalThis.localStorage?.setItem(ro,e)}catch{}}function Dg(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var U2=Object.defineProperty,B2=Object.getOwnPropertyDescriptor,Vo=(e,t,n,r)=>{for(var i=r>1?void 0:r?B2(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&U2(t,n,i),i};let Sr=class extends $e{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&Zt("csv-paste",this.dialogEl)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let n;try{n=_r(this.text)}catch(o){this.errorMsg=`Couldn't parse the CSV: ${o.message}`;return}if(n.columns.length===0||n.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const r=await J(),i=crypto.randomUUID();await r.store.tables.insert({id:i,workspaceId:r.workspaceId,name:t,code:Ne(t),columns:n.columns,view:"table",updatedAt:Date.now()});const s=n.rows.map(o=>({id:crypto.randomUUID(),tableId:i,data:o,updatedAt:Date.now()}));await r.store.rows(i).bulkInsert(s),r.api.ui.dialogs.toast(`Imported ${n.rows.length} row${n.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return v`
      <dialog @cancel=${this.close} @keydown=${gt}>
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
            <p class="hint">First line is treated as the header. Separator is auto-detected (comma / semicolon / tab). Column types are inferred from data.</p>
            <label>
              Table name
              <input type="text" autofocus .value=${this.name} placeholder="pasted" @input=${e=>this.name=e.target.value} />
            </label>
            <label>
              CSV
              <textarea spellcheck="false" .value=${this.text} @input=${e=>this.text=e.target.value}></textarea>
            </label>
            ${this.errorMsg?v`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};Sr.styles=[mt,Se`
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
        font:
          0.85rem ui-monospace,
          SFMono-Regular,
          monospace;
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
    `];Vo([z()],Sr.prototype,"name",2);Vo([z()],Sr.prototype,"text",2);Vo([z()],Sr.prototype,"errorMsg",2);Sr=Vo([Oe("csv-paste-dialog")],Sr);function Ph(e){const t={...e.orig??{},field:e.field.trim(),label:e.label.trim()||e.field.trim(),type:e.type};return e.renderer?t.renderer=e.renderer:delete t.renderer,e.script?t.script=e.script:delete t.script,e.validate?t.validate=e.validate:delete t.validate,e.max!=null&&e.max>0?t.max=e.max:delete t.max,e.unique?t.unique=!0:delete t.unique,e.notnull?t.notnull=!0:delete t.notnull,e.hidden?t.hidden=!0:delete t.hidden,e.sortable===!1?t.sortable=!1:delete t.sortable,e.filterable===!1?t.filterable=!1:delete t.filterable,t}const Lg={unique:{get:e=>!!e.unique,set:e=>({unique:e?!0:void 0})},notnull:{get:e=>!!e.notnull,set:e=>({notnull:e?!0:void 0})},visible:{get:e=>!e.hidden,set:e=>({hidden:e?void 0:!0})},sortable:{get:e=>e.sortable!==!1,set:e=>({sortable:e?void 0:!1})},filterable:{get:e=>e.filterable!==!1,set:e=>({filterable:e?void 0:!1})}};function Mg(e,t){return e.every(n=>Lg[t].get(n))}function q2(e,t){const n=!Mg(e,t);return e.map(r=>({...r,...Lg[t].set(n)}))}function Qc(e){if(e.source?.type!=="projection")return null;const t=e.source.config;return t&&Array.isArray(t.sources)?t:null}function H2(e,t,n,r){return{projections:t.filter(s=>{if(s.id===r)return!1;const o=Qc(s);return!!o&&o.sources.some(a=>a.tableName===e)}),views:n.filter(s=>s.tableName===e)}}function V2(e,t,n){return e.sources.some(r=>r.tableName===t)?{...e,sources:e.sources.map(r=>r.tableName===t?{...r,tableName:n}:r)}:null}function Jc(e){return new Map(e.filter(t=>t.from!==t.to).map(t=>[t.from,t.to]))}function Al(e,t){if(!e||!Object.keys(e).some(i=>t.has(i)))return null;const r={};for(const[i,s]of Object.entries(e))r[t.get(i)??i]=s;return r}function K2(e,t){const n=Jc(t);if(n.size===0)return null;const r=e.columns.map(o=>n.has(o.field)?{...o,field:n.get(o.field)}:o),i=Al(e.filters,n);return r.some((o,a)=>o!==e.columns[a])||i!==null?{...e,columns:r,...i?{filters:i}:{}}:null}function W2(e,t){const n=Jc(t);if(n.size===0)return null;const r={},i=e.mapping??{},s={};let o=!1;for(const[d,f]of Object.entries(i)){const p=n.get(f);s[d]=p??f,p&&(o=!0)}if(o&&(r.mapping=s),Array.isArray(e.visibleColumns)){const d=e.visibleColumns.map(f=>n.get(f)??f);d.some((f,p)=>f!==e.visibleColumns[p])&&(r.visibleColumns=d)}const a=Al(e.filters,n);a&&(r.filters=a);const c=Al(e.pillFilters,n);if(c&&(r.pillFilters=c),e.columnWidths){const d={};let f=!1;for(const[p,b]of Object.entries(e.columnWidths)){const y=n.get(p);d[y??p]=b,y&&(f=!0)}f&&(r.columnWidths=d)}if(e.sortColumn&&n.has(e.sortColumn)&&(r.sortColumn=n.get(e.sortColumn)),Array.isArray(e.sortBy)){const d=e.sortBy.map(f=>n.has(f.field)?{...f,field:n.get(f.field)}:f);d.some((f,p)=>f!==e.sortBy?.[p])&&(r.sortBy=d)}return Object.keys(r).length>0?r:null}function G2(e,t,n){const r=Jc(n);if(r.size===0)return null;const i=new Set(e.sources.filter(c=>c.tableName===t).map(c=>c.alias));if(i.size===0)return null;const s=e.columns.map(c=>c.from.kind==="source"&&i.has(c.from.alias)&&r.has(c.from.field)?{...c,from:{...c.from,field:r.get(c.from.field)}}:c),o=e.sources.map(c=>{if(!c.join)return c;const d=i.has(c.alias),f=c.join.on.map(p=>{const b=d&&r.has(p.field)?r.get(p.field):p.field,y=i.has(p.eqAlias)&&r.has(p.eqField)?r.get(p.eqField):p.eqField;return b===p.field&&y===p.eqField?p:{...p,field:b,eqField:y}});return f.some((p,b)=>p!==c.join.on[b])?{...c,join:{...c.join,on:f}}:c});return s.some((c,d)=>c!==e.columns[d])||o.some((c,d)=>c!==e.sources[d])?{...e,columns:s,sources:o}:null}function Y2(e){const t=[];return e.projections.length>0&&t.push(`${zh(e.projections.length,"projection")} (${Nh(e.projections.map(n=>n.name))})`),e.views.length>0&&t.push(`${zh(e.views.length,"view")} (${Nh(e.views.map(n=>n.name||"untitled"))})`),t.length>0?t.join(" and "):null}function zh(e,t){return`${e} ${t}${e===1?"":"s"}`}function Nh(e){const t=e.slice(0,3).map(n=>`"${n}"`);return e.length>3?`${t.join(", ")} and ${e.length-3} more`:t.join(", ")}var Q2=Object.defineProperty,J2=Object.getOwnPropertyDescriptor,Ve=(e,t,n,r)=>{for(var i=r>1?void 0:r?J2(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Q2(t,n,i),i};const X2=["string","number","boolean","date","datetime","array"],jh=100;function Fh(e){return[...e.keys()].filter(t=>!Dw.has(t)).sort()}function Z2(e,t){return t&&!e.includes(t)?[...e,t]:[...e]}async function eT(e,t,n,r){const i=await J(),s=(await i.store.viewInstances.find()).filter(o=>o.tableId===e||o.tableName===t);for(const o of s)o.tableName!==n&&await i.store.viewInstances.patch(o.id,{tableName:n,updatedAt:Date.now()});for(const o of r?.projections??[]){const a=Qc(o),c=a&&V2(a,t,n);c&&await i.store.tables.patch(o.id,{source:{type:"projection",config:c},updatedAt:Date.now()})}}async function tT(e,t,n,r){if(n.length===0)return;const i=await J(),s=(await i.store.viewInstances.find({workspaceId:i.workspaceId})).filter(a=>a.tableId===e);for(const a of s){const c=W2(a,n);c&&await i.store.viewInstances.patch(a.id,{...c,updatedAt:Date.now()})}s.length>0&&document.dispatchEvent(new CustomEvent("easydb:reload-views"));const o=async(a,c)=>{await i.store.tables.patch(a.id,{source:{type:"projection",config:c},updatedAt:Date.now()})};for(const a of r){const c=Qc(a);if(!c)continue;const d=a.id===e?K2(c,n):G2(c,t,n);d&&await o(a,d)}}function nT(e,t,n){const r=`Renaming "${e}" to "${t}" affects ${n}.

They reference this table by name, so they will be updated to point at "${t}". Continue?`,i=ct.instance;return i?i.confirm(r,"Rename table"):Promise.resolve(window.confirm(r))}let Ue=class extends $e{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.deletedFields=[],this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.filters={},this.filtersOff={},this.previewRows=[],this.previewState="none",this.previewToken=0,this.rendererOptions=[],this.columnActions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&Zt("columns-editor",this.dialogEl)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const n=await J();if(this.rendererOptions=Fh(n.registries.cellRenderers),this.rendererSubUnsub?.(),this.columnActions=[...n.registries.columnEditorActions],this.rendererSubUnsub=n.events.on("app:ready",()=>{this.rendererOptions=Fh(n.registries.cellRenderers),this.columnActions=[...n.registries.columnEditorActions]}),e){const i=await(await J()).store.tables.findOne(e);if(!i)return;this.mode="edit",this.editTableId=e,this.name=i.name,this.tableTitle=i.title??"",this.tableReadonly=!!i.readonly,this.deletedFields=[...i.deletedColumns??[]],this.columns=i.columns.map(s=>({field:s.field,label:s.label,type:s.type,renderer:s.renderer,script:s.script,validate:s.validate,max:s.max,unique:s.unique,notnull:s.notnull,hidden:s.hidden,sortable:s.sortable,filterable:s.filterable,origField:s.field,orig:s})),this.filters={...i.filters??{}},this.filtersOff={},this.loadPreview(e,i.columns)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.deletedFields=[],this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[],this.previewState="none",this.previewToken++,this.filters={},this.filtersOff={};await this.updateComplete,this.dialogEl?.showModal()}async loadPreview(e,t){const n=++this.previewToken;this.previewRows=[],this.previewState="loading";try{const r=await J(),i=await xi(r.store.rows(e),{columns:t,limit:jh},jh);if(n!==this.previewToken)return;this.previewRows=i.rows,this.previewState="ready"}catch(r){if(n!==this.previewToken)return;this.previewRows=[],this.previewState="error",console.warn("[columns-editor] the preview rows could not be read",r)}}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}touchDirty(){this.dialogEl&&Rp("columns-editor",this.dialogEl)}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}],this.touchDirty()}removeColumn(e){this.columns=this.columns.filter((t,n)=>n!==e),this.touchDirty()}toggleFilter(e){const t=this.filters[e],n=this.filtersOff[e],r={...this.filters},i={...this.filtersOff};if(t!==void 0)delete r[e],i[e]=t;else if(n!==void 0)delete i[e],r[e]=n;else return;this.filters=r,this.filtersOff=i,this.touchDirty()}moveColumn(e,t){const n=e+t;if(n<0||n>=this.columns.length)return;const r=[...this.columns],[i]=r.splice(e,1);r.splice(n,0,i),this.columns=r,this.touchDirty()}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,n){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const r=n.getBoundingClientRect(),i=e.clientY<r.top+r.height/2;this.dropTargetIdx=t,this.dropEdge=i?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const n=this.dragSrcIdx,r=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,n===null||n===t||!r)return;const i=[...this.columns],[s]=i.splice(n,1);let o=t+(n<t?-1:0);r==="after"&&(o+=1),i.splice(o,0,s),this.columns=i,this.touchDirty()}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n),this.touchDirty()}renderFlagHead(e,t,n){const r=Mg(this.columns,e);return v`<button
      type="button"
      class="flag-label flag-head"
      title=${`${n} — click to ${r?"clear":"set"} every column`}
      aria-pressed=${r?"true":"false"}
      @click=${()=>{this.columns=q2(this.columns,e),this.touchDirty()}}
    >
      ${t}
    </button>`}async runColumnAction(e){this.errorMsg="";const t=await J();try{const n=await e.run(t.api,{columns:this.columns.map(i=>Ph(i)),...this.editTableId?{tableId:this.editTableId}:{}});if(!n)return;const r=new Map(n.map(i=>[i.field,i]));this.columns=this.columns.map(i=>{const s=r.get(i.field);return s?{...i,label:s.label??i.label,type:s.type??i.type,renderer:s.renderer,script:s.script,validate:s.validate}:i}),this.touchDirty()}catch(n){this.errorMsg=`${e.label} failed: ${n.message}`}}async editScript(e){const t=st.instance;if(!t)return;const n=this.columns[e];if(!n)return;const r=await t.open(n.script??"",n.label||n.field);r!==null&&this.patchColumn(e,{script:r.trim()?r:void 0})}async editValidate(e){const t=st.instance;if(!t)return;const n=this.columns[e];if(!n)return;const r=await t.open(n.validate??"",n.label||n.field,"validate");r!==null&&this.patchColumn(e,{validate:r.trim()?r:void 0})}conditionalPatch(e,t,n,r){const i={};(t.length>0||n.length>0)&&(i.deletedColumns=t);const s=P1(this.filters,this.fieldRenames(),r);return Am(e?.filters??{},s)||(i.filters=s),i}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const n=await J(),r=(await n.store.tables.find()).filter(d=>d.workspaceId===n.workspaceId),i=t.toLowerCase(),s=r.find(d=>d.name.toLowerCase()===i&&d.id!==this.editTableId);if(s){this.errorMsg=`A table named "${s.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const o=new Set;for(const d of this.columns){const f=d.field.trim();if(!f){this.errorMsg="Column field names cannot be empty.";return}if(o.has(f)){this.errorMsg=`Duplicate column field: ${f}`;return}o.add(f)}const a=this.tableTitle.trim(),c=this.columns.map(Ph);if(this.mode==="edit"&&this.editTableId){const d=this.editTableId,f=await n.store.tables.findOne(d),p=new Map((f?.columns??[]).map(I=>[I.field,I])),b=c.filter(I=>{const V=p.get(I.field);return I.unique&&!V?.unique||I.notnull&&!V?.notnull||I.max&&I.max>0&&I.max!==V?.max});if(b.length>0){const I=await n.store.rows(d).find(),V=sT(b,I);if(V.length>0){this.errorMsg=`Cannot save: ${V.length} existing ${V.length===1?"row violates":"rows violate"} the new constraints.
${V.slice(0,5).join(`
`)}${V.length>5?`
…and ${V.length-5} more.`:""}`;return}}const y=new Set(this.columns.map(I=>I.origField).filter(I=>!!I)),k=new Set(c.map(I=>I.field)),$=(f?.columns??[]).map(I=>I.field).filter(I=>!y.has(I)),C=f?.deletedColumns??[],E=[...new Set([...C,...$])].filter(I=>!k.has(I));let T=null;if(f&&f.name!==t){const I=(await n.store.viewInstances.find()).filter(K=>K.workspaceId===n.workspaceId);T=H2(f.name,r,I,d);const V=Y2(T);if(V&&!await nT(f.name,t,V))return}const Y={name:t,title:a,columns:c,readonly:this.tableReadonly,updatedAt:Date.now(),...this.conditionalPatch(f,E,C,k)},L=f?.name;await n.store.tables.patch(d,Y);const ne=$.filter(I=>!k.has(I)),W=this.fieldRenames();if(!f?.source&&(ne.length>0||W.length>0)){const I=await n.store.rows(d).find();for(const V of I){let K=!1,ie={...V.data};const de=ad(ie,W);de&&(ie=de,K=!0);for(const H of ne)H in ie&&(delete ie[H],K=!0);K&&await n.store.rows(d).patch(V.id,{data:ie,updatedAt:Date.now()})}}await tT(d,L??t,W,r),L!==void 0&&L!==t&&await eT(d,L,t,T)}else await n.store.tables.insert({id:Ee(),workspaceId:n.workspaceId,name:t,title:a,code:Ne(t),columns:c,view:"table",updatedAt:Date.now()});this.close()}renderFilterState(e){const t=e.origField??e.field,n=this.filters[t],r=this.filtersOff[t],i=n??r;if(i===void 0)return v`<span></span>`;const s=n!==void 0;return v`<button
      type="button"
      class=${`icon-btn filter-btn ${s?"on":"off"}`}
      data-testid=${`filter-state-${t}`}
      title=${s?`Filtered: ${i} — click to switch this filter off (applied on Save)`:`Filter switched off: ${i} — click to switch it back on`}
      @click=${()=>this.toggleFilter(t)}
    >
      <span class="mi sm">${s?"filter_alt":"filter_alt_off"}</span>
    </button>`}renderPreview(){if(this.previewRows.length===0){const i=this.previewState==="loading"?"Reading rows for the preview…":this.previewState==="error"?"The rows could not be read, so there is no preview. Your column changes still save.":"No rows to preview.";return v`<div class="preview"><div class="empty" data-testid="preview-empty">${i}</div></div>`}const e=this.fieldRenames(),t=e.length>0?this.previewRows.map(i=>({...i,data:ad(i.data,e)??i.data})):this.previewRows,n=new Map;for(const i of this.columns){if(!i.unique)continue;const s=new Set,o=new Set;for(const a of t){const c=a.data[i.field];c==null||c===""||(s.has(c)&&o.add(c),s.add(c))}n.set(i.field,o)}const r=this.columns.filter(i=>!i.hidden);return v`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${r.map(i=>v`<th title=${i.field}>${i.label||i.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${t.map(i=>v`
                <tr>
                  ${r.map(s=>{const o=i.data[s.field],a=iT(s,o,n.get(s.field));return v`<td class=${a?"violation":""} title=${a??""}>${rT(o)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renderDeleted(){return this.mode!=="edit"||this.deletedFields.length===0?"":v`<div class="deleted-cols">
      <span class="hint">Removed earlier:</span>
      ${this.deletedFields.map(e=>v`<button type="button" class="add" title=${`Add the column "${e}" back`} @click=${()=>this.restoreColumn(e)}>↩ ${e}</button>`)}
      <div class="hint">These are not re-added by a refresh. Restoring one adds the column back empty — its values were removed with it, unless the table refreshes from a source.</div>
    </div>`}restoreColumn(e){this.deletedFields=this.deletedFields.filter(t=>t!==e),!this.columns.some(t=>t.field.trim().toLowerCase()===e.toLowerCase())&&(this.columns=[...this.columns,{field:e,label:e,type:"string"}])}fieldRenames(){return this.mode!=="edit"?[]:this.columns.filter(e=>e.origField&&e.origField!==e.field.trim()).map(e=>({from:e.origField,to:e.field.trim()}))}renameDetected(){return this.fieldRenames().length>0}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return v`
      <dialog @cancel=${this.close} @keydown=${gt}>
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
            ${this.noticeMsg?v`<div class="notice">${this.noticeMsg}</div>`:""}
            <label>
              Name
              <input type="text" autofocus .value=${this.name} @input=${n=>this.name=n.target.value} />
            </label>
            <label>
              Title <span style="color:#9ca3af">(optional — shown in the window title)</span>
              <input type="text" .value=${this.tableTitle} @input=${n=>this.tableTitle=n.target.value} />
            </label>
            <label class="inline">
              <input type="checkbox" data-testid="table-readonly" .checked=${this.tableReadonly} @change=${n=>this.tableReadonly=n.target.checked} />
              Read-only
              <span style="color:#9ca3af">(show values, no editing or add/delete row)</span>
            </label>

            <div class="columns">
              <div class="col-header">
                <span></span>
                ${this.renderFlagHead("visible","👁","Visible")}
                <span>Field</span>
                <span>Label</span>
                <span>Type</span>
                <span>Renderer</span>
                <span></span>
                <span class="flag-label">Max</span>
                <span></span>
                ${this.renderFlagHead("unique","U","Unique")} ${this.renderFlagHead("notnull","!","Not null")} ${this.renderFlagHead("sortable","⇅","Sortable")}
                ${this.renderFlagHead("filterable","⚲","Filterable (includes search)")}
                <span class="flag-label filter-head" title="Shows a funnel on every column that has a filter. Click one to switch that filter off."><span class="mi sm">filter_alt</span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              ${this.columns.map((n,r)=>{const i=this.dragSrcIdx===r,s=this.dropTargetIdx===r,o=s&&this.dropEdge==="before"?" drop-before":s&&this.dropEdge==="after"?" drop-after":"";return v`
                  <div
                    class=${`col-row${i?" drag-source":""}${o}`}
                    @dragover=${a=>this.onRowDragOver(a,r,a.currentTarget)}
                    @dragleave=${()=>this.onRowDragLeave(r)}
                    @drop=${a=>this.onRowDrop(a,r)}
                  >
                    <span class="drag-handle" title="Drag to reorder" draggable="true" @dragstart=${a=>this.onRowDragStart(a,r)} @dragend=${()=>this.onRowDragEnd()}>
                      <span class="mi sm">drag_indicator</span>
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Visible — uncheck to hide the column without losing its data"
                        .checked=${!n.hidden}
                        @change=${a=>this.patchColumn(r,{hidden:!a.target.checked})}
                      />
                    </span>
                    <input
                      type="text"
                      title="Field — the key this column is stored under in each row"
                      .value=${n.field}
                      @input=${a=>this.patchColumn(r,{field:a.target.value})}
                    />
                    <input
                      type="text"
                      title="Label — the heading shown above the column"
                      .value=${n.label}
                      @input=${a=>this.patchColumn(r,{label:a.target.value})}
                    />
                    <select
                      .value=${n.type}
                      @change=${a=>this.patchColumn(r,{type:a.target.value})}
                    >
                      ${X2.map(a=>v`<option value=${a} ?selected=${a===n.type}>${a}</option>`)}
                    </select>
                    <select
                      title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                      .value=${n.renderer??""}
                      @change=${a=>{const c=a.target.value;this.patchColumn(r,{renderer:c||void 0})}}
                    >
                      <option value="" ?selected=${!n.renderer}>— none —</option>
                      ${Z2(this.rendererOptions,n.renderer).map(a=>v`<option value=${a} ?selected=${a===n.renderer}>${a}</option>`)}
                    </select>
                    <button
                      type="button"
                      class=${`icon-btn script-btn${n.script?.trim()?" has-script":""}`}
                      title=${n.script?.trim()?"Edit the script — its render(row) output is what this column displays":"Add a script: render(row) computes what this column displays"}
                      @click=${()=>this.editScript(r)}
                    >
                      <span class="mi sm">edit</span>
                    </button>
                    <input
                      type="number"
                      min="0"
                      placeholder="—"
                      title="Max length (strings) or max value (numbers)"
                      .value=${n.max==null?"":String(n.max)}
                      @input=${a=>{const c=a.target.value;this.patchColumn(r,{max:c===""?void 0:Number(c)})}}
                    />
                    <button
                      type="button"
                      class=${`icon-btn validate-btn${n.validate?.trim()?" has-validate":""}`}
                      title=${n.validate?.trim()?"Edit the validation — validate(value, row) throws to reject a manual cell edit":"Add validation: validate(value, row) throws to reject a manual cell edit"}
                      @click=${()=>this.editValidate(r)}
                    >
                      <span class="mi sm">edit</span>
                    </button>
                    <span class="flag">
                      <input type="checkbox" title="Unique" .checked=${!!n.unique} @change=${a=>this.patchColumn(r,{unique:a.target.checked})} />
                    </span>
                    <span class="flag">
                      <input type="checkbox" title="Not null" .checked=${!!n.notnull} @change=${a=>this.patchColumn(r,{notnull:a.target.checked})} />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Sortable — uncheck to disable sorting on this column"
                        .checked=${n.sortable!==!1}
                        @change=${a=>this.patchColumn(r,{sortable:a.target.checked?void 0:!1})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Filterable — uncheck to disable filtering and search on this column"
                        .checked=${n.filterable!==!1}
                        @change=${a=>this.patchColumn(r,{filterable:a.target.checked?void 0:!1})}
                      />
                    </span>
                    ${this.renderFilterState(n)}
                    <button type="button" class="icon-btn" title="Move up" ?disabled=${r===0} @click=${()=>this.moveColumn(r,-1)}>
                      <span class="mi sm">arrow_upward</span>
                    </button>
                    <button type="button" class="icon-btn" title="Move down" ?disabled=${r===this.columns.length-1} @click=${()=>this.moveColumn(r,1)}>
                      <span class="mi sm">arrow_downward</span>
                    </button>
                    <button type="button" class="icon-btn row-del" title="Remove column" @click=${()=>this.removeColumn(r)}>
                      <span class="mi sm">delete</span>
                    </button>
                  </div>
                `})}
            </div>

            <button type="button" class="add" @click=${this.addColumn}>+ Add column</button>
            ${this.columnActions.map(n=>v`<button type="button" class="add" title=${n.tooltip??n.label} @click=${()=>void this.runColumnAction(n)}>${n.label}</button>`)}
            ${this.renderDeleted()} ${this.renameDetected()?v`<div class="hint">Existing rows are re-keyed on save, so renamed fields keep their data.</div>`:""}
            ${this.errorMsg?v`<div class="error">${this.errorMsg}</div>`:""} ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};Ue.styles=[_t,mt,Se`
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
      /* A checkbox reads as one line with its text, not stacked above it. */
      label.inline {
        flex-direction: row;
        align-items: center;
        gap: 0.4rem;
      }
      label.inline input[type='checkbox'] {
        width: auto;
        margin: 0;
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
        /* drag | 👁 | field | label | type | renderer | script | max | validate | U ! ⇅ ⚲ | filter | up down del */
        grid-template-columns:
          1.25rem 1.5rem 1fr 1fr 7rem 7rem 1.5rem 4rem 1.5rem 1.5rem 1.5rem 1.5rem 1.5rem 1.5rem
          1.5rem 1.5rem 1.5rem;
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
      /* A header that toggles its whole column. Styled to sit in the header row
         like the plain labels beside it — the hover and the pointer are what say
         it does something. */
      .col-header button.flag-head {
        background: transparent;
        border: 0;
        padding: 0;
        color: inherit;
        font: inherit;
        font-size: 0.7rem;
        cursor: pointer;
        line-height: 1;
      }
      .col-header button.flag-head:hover {
        color: #374151;
      }
      .col-header button.flag-head:focus-visible {
        outline: 2px solid #3b82f6;
        outline-offset: 1px;
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
      /* A column that already carries a script — blue so it is obvious which
       columns are computed without opening each editor. The glyph itself
       never changes (always the pencil); colour alone carries the state. */
      button.icon-btn.has-script {
        color: #2563eb;
      }
      /* Without this, the plain :hover rule above (color: #111827) would win
       and a script-set pencil would go near-black on hover, losing the blue
       state cue. A darker blue keeps hover feedback without discarding it. */
      button.icon-btn.has-script:hover:not(:disabled) {
        color: #1d4ed8;
      }
      /* The validation pencil is the same glyph in the next column along, so
       its "set" state needs a colour of its OWN — two blue pencils would read
       as one wide control. Amber says "this column polices its edits". */
      button.icon-btn.has-validate {
        color: #d97706;
      }
      button.icon-btn.has-validate:hover:not(:disabled) {
        color: #b45309;
      }
      /* The funnel that says this column carries a filter. Blue while the filter
       is on, faded once it is switched off — the glyph changes too, because the
       state has to survive a screenshot in grey and a colour-blind reader. */
      button.icon-btn.filter-btn.on {
        color: #2563eb;
      }
      button.icon-btn.filter-btn.on:hover:not(:disabled) {
        color: #1d4ed8;
      }
      button.icon-btn.filter-btn.off {
        color: #9ca3af;
      }
      .col-header .filter-head {
        color: #9ca3af;
        line-height: 1;
      }
      button.row-del {
        color: #9ca3af;
        font-size: 1.1rem;
      }
      button.row-del:hover:not(:disabled) {
        color: #ef4444;
      }
      /* The removed-columns offer: chips on one wrapping line under the list. */
      .deleted-cols {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.4rem;
        margin-top: 0.35rem;
      }
      .deleted-cols button.add {
        padding: 0.2rem 0.5rem;
        font-size: 0.85rem;
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
    `];Ve([z()],Ue.prototype,"mode",2);Ve([z()],Ue.prototype,"editTableId",2);Ve([z()],Ue.prototype,"name",2);Ve([z()],Ue.prototype,"tableTitle",2);Ve([z()],Ue.prototype,"tableReadonly",2);Ve([z()],Ue.prototype,"deletedFields",2);Ve([z()],Ue.prototype,"columns",2);Ve([z()],Ue.prototype,"errorMsg",2);Ve([z()],Ue.prototype,"noticeMsg",2);Ve([z()],Ue.prototype,"dragSrcIdx",2);Ve([z()],Ue.prototype,"dropTargetIdx",2);Ve([z()],Ue.prototype,"dropEdge",2);Ve([z()],Ue.prototype,"filters",2);Ve([z()],Ue.prototype,"filtersOff",2);Ve([z()],Ue.prototype,"previewRows",2);Ve([z()],Ue.prototype,"previewState",2);Ve([z()],Ue.prototype,"rendererOptions",2);Ve([z()],Ue.prototype,"columnActions",2);Ue=Ve([Oe("new-table-dialog")],Ue);function rT(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function iT(e,t,n){const r=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&r)return`${e.label}: empty`;if(r)return null;if(e.type==="number"&&typeof t!="number"){const i=Number(t);if(!Number.isFinite(i))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!r){const i=new Date(String(t));if(Number.isNaN(i.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&n?.has(t)?`${e.label}: duplicate`:null}function sT(e,t){const n=[];for(const r of e)if(r.notnull&&t.forEach((i,s)=>{const o=i.data[r.field];(o==null||typeof o=="string"&&o.trim()==="")&&n.push(`Row ${s+1}: ${r.label} is empty.`)}),r.max!=null&&r.max>0&&t.forEach((i,s)=>{const o=i.data[r.field];typeof o=="string"&&o.length>r.max?n.push(`Row ${s+1}: ${r.label} length ${o.length} > max ${r.max}.`):typeof o=="number"&&o>r.max&&n.push(`Row ${s+1}: ${r.label} value ${o} > max ${r.max}.`)}),r.unique){const i=new Map;t.forEach((s,o)=>{const a=s.data[r.field];a==null||a===""||(i.has(a)?n.push(`Row ${o+1}: ${r.label} duplicates row ${i.get(a)+1} ("${String(a)}").`):i.set(a,o))})}return n}var oT=Object.defineProperty,aT=Object.getOwnPropertyDescriptor,ht=(e,t,n,r)=>{for(var i=r>1?void 0:r?aT(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&oT(t,n,i),i};const lT='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',cT=v`<span class="mi sm">extension</span>`,Uh="plugin:catalogUrls";function xs(){return new URL("/easydbaccess3/plugins/catalog.json",location.origin).toString()}const uT=[["installed","Installed"],["built-in","Built-in"],["fixed","Fixed"]],Pg=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],dT=new Map(Pg),hT={off:"Filter by status — click: only enabled → only disabled → off",on:"Showing only enabled plugins — click to show only disabled",not:"Showing only disabled plugins — click to clear"};let Ze=class extends $e{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[xs()],this.activeCatalogUrl=xs(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e)}async open(){const e=await J(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const n=await e.store.plugins.find();this.records=new Map(n.map(s=>[s.url,s]));const r=await e.store.settings.findOne(Uh),i=Array.isArray(r?.value)?r.value.filter(s=>typeof s=="string"):[];this.catalogUrls=i.length>0?i:[xs()],this.activeCatalogUrl=this.catalogUrls[0]??xs(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json(),r=Array.isArray(n.plugins)?n.plugins:[];this.catalog=r.map(i=>({...i,absUrl:new URL(i.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const n=(await(await J()).store.settings.findOne("server-sync:url"))?.value;if(typeof n!="string"||n.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const i=`${n.replace(/\/+$/,"")}/plugins/registry`;try{const s=await fetch(i,{cache:"no-store"});if(!s.ok)throw new Error(`HTTP ${s.status}`);const o=await s.json(),a=Array.isArray(o.plugins)?o.plugins:[];this.serverCatalog=a.map(c=>({...c,absUrl:new URL(c.url,i).toString()})),this.serverCatalogError=null}catch(s){this.serverCatalog=[],this.serverCatalogError=s.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await J()).store.settings.upsert({name:Uh,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await J()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const n=await J();await n.store.workspaces.patch(n.workspaceId,{pluginUrls:this.urls}),await n.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const n=await J(),r=this.records.get(e);await n.store.plugins.upsert({...r??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...r,url:e,enabled:t,lastFetched:r?.lastFetched??0}))}async removePlugin(e){const t=await J();this.urls=this.urls.filter(n=>n!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const n=await J(),r=Hs(e),i=this.records.get(r);await n.store.plugins.upsert({...i??{url:r,lastFetched:0},url:r,enabled:t,lastFetched:i?.lastFetched??0}),this.records=new Map(this.records.set(r,{...i,url:r,enabled:t,lastFetched:i?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await J()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await J();try{const n=await fetch(e.absUrl,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status} ${n.statusText}`);const r=await n.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:r});const i=new Blob([r],{type:"text/javascript"}),s=URL.createObjectURL(i);try{const a=await import(s);await a.init?.(t.api),await a.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(s),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const o=await t.store.plugins.find();this.records=new Map(o.map(a=>[a.url,a])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(n){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${n.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${n.message}`,{kind:"error",title:"Plugin error"})}finally{const n=new Set(this.installing);n.delete(e.absUrl),this.installing=n}}renderTri(e,t,n,r="",i){const s=i?i[t??"off"]:t==="on"?`Showing only ${e} plugins — click to exclude`:t==="not"?`Hiding ${e} plugins — click to clear`:`Filter by ${e} — click: show only → exclude → off`;return v`
      <button type="button" class=${`tri${r?` ${r}`:""}${t?` ${t}`:""}`} title=${s} aria-pressed=${t!==void 0} @click=${n}>
        <span class="tri-mark">${t==="on"?"✓":t==="not"?"≠":""}</span>${e}
      </button>
    `}cycleState(e,t){const n=e.get(t),r=new Map(e);return n===void 0?r.set(t,"on"):n==="on"?r.set(t,"not"):r.delete(t),r}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}cycleStatusFilter(){this.statusFilter=this.statusFilter===void 0?"on":this.statusFilter==="on"?"not":void 0}buildRows(){const e=new Map,t=new Map;for(const{id:n,meta:r}of w2){const i=r.fixed?!0:this.records.get(Hs(n))?.enabled!==!1,s=!r.fixed&&Tt==="all-optional",o=r.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${n}`,{id:n,name:r.name,...r.type?{type:r.type}:{},...r.description?{meta:r.description}:{meta:"Built-in plugin"},...r.author?{author:r.author}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},categories:new Set(o),enabled:i,status:i&&!s?"enabled":"disabled",fixed:!!r.fixed,...s?{skipped:!0}:{}})}for(const n of[...this.catalog,...this.serverCatalog]){const r=this.urls.includes(n.absUrl),i=this.records.get(n.absUrl),s=r?["available","installed"]:["available"],o=e.get(n.id),a=i?.enabled!==!1,c=r&&Tt!=="off";e.set(n.id,{id:n.id,name:n.name,url:n.absUrl,...n.type?{type:n.type}:{},...n.icon?{icon:n.icon}:{},...n.repo?{repo:n.repo}:{},...n.author?{author:n.author}:{},meta:n.description??n.absUrl,categories:o?new Set([...o.categories,...s]):new Set(s),enabled:a,...r?{status:a&&!c?"enabled":"disabled"}:{},...c?{skipped:!0}:{},installing:this.installing.has(n.absUrl)}),t.set(n.absUrl,n.id)}for(const n of this.urls){const r=t.get(n);if(r){e.get(r).categories.add("installed");continue}const i=this.records.get(n),s=i?.lastFetched?new Date(i.lastFetched).toLocaleString():"never",o=i?.enabled!==!1;e.set(`url:${n}`,{id:n,name:n,urlOnly:!0,url:n,meta:i?.lastError??`Last fetched: ${s}`,metaIsError:!!i?.lastError,categories:new Set(["installed"]),enabled:o,status:o&&Tt==="off"?"enabled":"disabled",...Tt!=="off"?{skipped:!0}:{}})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),n=[],r=[];for(const[c,d]of this.filterStates)(d==="on"?n:r).push(c);const i=[],s=[];for(const[c,d]of this.typeFilters)(d==="on"?i:s).push(c);const o=this.statusFilter==="on"?"enabled":this.statusFilter==="not"?"disabled":void 0,a=e.filter(c=>!(n.length&&!n.some(d=>c.categories.has(d))||r.some(d=>c.categories.has(d))||i.length&&!(c.type&&i.includes(c.type))||c.type&&s.includes(c.type)||o&&c.status!==o));return t?a.filter(c=>[c.id,c.name,c.type,c.meta,c.author].some(d=>d?.toLowerCase().includes(t))):a}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),n=!!e.url&&e.categories.has("installed"),r=!!e.url&&!e.categories.has("installed");return v`
      <div class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}${e.skipped?" skipped":""}`}>
        <span class="row-icon">${e.icon?lr(e.icon):cT}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?v`<span class="row-id">${e.id}</span>`:""}${e.type?v`<span class="row-type" title="Plugin type">${dT.get(e.type)??e.type}</span>`:""}${e.skipped?v`<span class="row-skipped" title="Safe mode kept this plugin from loading this session — your saved setting is unchanged">skipped</span>`:""}
          </div>
          ${e.meta?v`<div class=${`meta${e.metaIsError?" err":""}`}>${e.meta}</div>`:""}
        </div>
        <div class="row-author">${e.author??""}</div>
        ${e.repo?v`<a class="row-repo" href=${e.repo} target="_blank" rel="noopener noreferrer" title="View source on GitHub">${lr(lT)}</a>`:v`<span></span>`}
        ${e.fixed?v`<span class="mi sm lock-icon" title="Always on — cannot be disabled">lock</span>`:t?v`<label class="switch" title=${e.skipped?"Your saved setting — safe mode is what stopped this plugin loading now":"Enable / disable"}>
                <input type="checkbox" .checked=${e.enabled} @change=${i=>this.onRowToggle(e,i.target.checked)} />
                <span class="slider"></span>
              </label>`:v`<span></span>`}
        ${r?v`<button type="button" class="install" ?disabled=${e.installing} @click=${()=>this.installFromCatalog({absUrl:e.url,name:e.name})}>
              <span class="mi sm">${e.installing?"hourglass_empty":"download"}</span>
              ${e.installing?"Installing…":"Install"}
            </button>`:n?v`<button type="button" class="uninstall" @click=${()=>this.removePlugin(e.url)}><span class="mi sm">delete</span> Uninstall</button>`:v`<span></span>`}
      </div>
    `}render(){const e=this.filteredRows;return v`
      <dialog @cancel=${this.close} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>
          <span class="mi sm">close</span>
        </button>
        <form @submit=${this.addPlugin}>
          <div class="dialog-header">
            <h2>Plugins</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${this.close}>Close</button>
              <button type="button" class="primary" @click=${this.reload}><span class="mi sm">refresh</span> Reload to apply</button>
            </div>
          </div>
          <div class="dialog-body">
            <p class="hint">Plugins are JavaScript modules loaded by URL into this workspace. Enable/disable changes take effect after reload; installing a plugin activates it immediately.</p>
            ${Tt!=="off"?v`<p class="safemode">
                  <strong>Safe mode is on.</strong>
                  ${Tt==="all-optional"?v`<code>?safemode</code> skipped every URL plugin and every optional built-in for this session.`:v`<code>?safemode1</code> skipped every URL plugin for this session.`}
                  Plugins marked <span class="row-skipped">skipped</span> are not running. The toggles below still show — and change — your saved settings, which safe mode never touches. Reload
                  without the flag to run them again.
                </p>`:""}

            <div class="filters">
              <div class="chips">
                ${uT.map(([t,n])=>this.renderTri(n,this.filterStates.get(t),()=>this.cycleFilter(t)))}
                ${this.renderTri("Enabled",this.statusFilter,()=>this.cycleStatusFilter(),"status",hT)}
              </div>
              <div class="search">
                <input type="text" placeholder="Search plugins…" .value=${this.search} @input=${t=>this.search=t.target.value} />
              </div>
            </div>

            <div class="type-filters">
              <span class="filter-label">Type</span>
              ${Pg.map(([t,n])=>this.renderTri(n,this.typeFilters.get(t),()=>this.cycleTypeFilter(t)))}
            </div>

            <div class="catalog-source">
              <input
                type="text"
                list="catalog-url-options"
                .value=${this.activeCatalogUrl}
                @input=${t=>this.activeCatalogUrl=t.target.value}
                placeholder="Catalog source URL"
              />
              <datalist id="catalog-url-options">${this.catalogUrls.map(t=>v`<option value=${t}></option>`)}</datalist>
              <button type="button" class="ghost" @click=${this.reloadCatalogSource}><span class="mi sm">refresh</span> Reload</button>
            </div>
            ${this.catalogError?v`<div class="meta err">Catalog unavailable: ${this.catalogError}</div>`:""}
            ${this.serverCatalogError?v`<div class="meta err">Server registry unavailable: ${this.serverCatalogError}</div>`:""}

            <div class="plugin-list">${e.length===0?v`<p class="hint">No plugins match the current filters/search.</p>`:""} ${e.map(t=>this.renderRow(t))}</div>

            <div class="add">
              <input type="text" placeholder="https://example.com/my-plugin.js" .value=${this.addUrl} @input=${t=>this.addUrl=t.target.value} />
              <button type="submit" class="primary"><span class="mi sm">add</span> Add</button>
            </div>
          </div>
        </form>
      </dialog>
    `}};Ze.styles=[_t,mt,Se`
      dialog {
        width: 720px;
        max-width: 94vw;
      }
      p.hint {
        margin: 0;
        color: #6b7280;
        font-size: 0.85rem;
      }

      .filters {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
      }
      .filters .chips,
      .type-filters {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.4rem;
      }
      .type-filters .filter-label {
        font-size: 0.72rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.03em;
        color: #9ca3af;
        margin-right: 0.1rem;
      }
      /* Tri-state filter chip: off (neutral) → on (blue, ✓) → not (red, ≠). */
      .filters .tri,
      .type-filters .tri {
        display: inline-flex;
        align-items: center;
        gap: 0.3rem;
        font-size: 0.8rem;
        padding: 0.2rem 0.6rem;
        border-radius: 999px;
        border: 1px solid #d1d5db;
        background: #fff;
        color: #6b7280;
        cursor: pointer;
        user-select: none;
      }
      .filters .tri .tri-mark,
      .type-filters .tri .tri-mark {
        font-weight: 700;
        line-height: 1;
      }
      .filters .tri.on,
      .type-filters .tri.on {
        border-color: #2563eb;
        background: #eff6ff;
        color: #1d4ed8;
      }
      .filters .tri.not,
      .type-filters .tri.not {
        border-color: #dc2626;
        background: #fef2f2;
        color: #b91c1c;
      }
      /* Safe-mode notice: explains why nothing is loaded despite the toggles. */
      p.safemode {
        margin: 0;
        padding: 0.5rem 0.7rem;
        border: 1px solid #fcd34d;
        background: #fffbeb;
        color: #92400e;
        border-radius: 0.35rem;
        font-size: 0.85rem;
      }
      .row-skipped {
        display: inline-block;
        font-size: 0.68rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        color: #92400e;
        background: #fef3c7;
        border: 1px solid #fcd34d;
        border-radius: 0.25rem;
        padding: 0.05rem 0.35rem;
        margin-left: 0.35rem;
        vertical-align: middle;
      }
      /* A toggle whose plugin isn't running this boot: still editable (it edits
         the persisted setting) but dimmed so it doesn't read as "active". */
      .row.skipped .switch {
        opacity: 0.55;
      }
      .row-type {
        display: inline-block;
        font-size: 0.68rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        color: #6b7280;
        background: #e5e7eb;
        border-radius: 0.25rem;
        padding: 0.05rem 0.35rem;
        margin-left: 0.35rem;
        vertical-align: middle;
      }
      .search {
        flex: 1;
        min-width: 160px;
      }
      .search input {
        width: 100%;
        font: inherit;
        padding: 0.4rem 0.6rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        box-sizing: border-box;
      }

      .catalog-source {
        display: flex;
        gap: 0.4rem;
        align-items: center;
      }
      .catalog-source input {
        flex: 1;
        font: inherit;
        font-size: 0.85rem;
        padding: 0.35rem 0.5rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
      }

      .plugin-list {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        max-height: 42vh;
        overflow: auto;
      }
      .row {
        display: grid;
        grid-template-columns: 22px 1fr auto 22px 44px auto;
        gap: 0.6rem;
        align-items: center;
        padding: 0.45rem 0.6rem;
        border: 1px solid #e5e7eb;
        border-radius: 0.3rem;
        background: #f9fafb;
      }
      .row.builtin {
        background: #f3f4f6;
      }
      .row.error {
        background: #fef2f2;
        border-color: #fecaca;
      }
      .row-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        color: #6b7280;
      }
      .row-icon svg {
        width: 100%;
        height: 100%;
      }
      .row-main {
        min-width: 0;
      }
      .row-title {
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .row-title.mono {
        font-family: ui-monospace, SFMono-Regular, monospace;
        font-weight: 400;
        font-size: 0.8rem;
      }
      .row-id {
        font-weight: 400;
        color: #9ca3af;
        font-size: 0.75rem;
        margin-left: 0.35rem;
      }
      .row-author {
        font-size: 0.78rem;
        color: #6b7280;
        max-width: 110px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .row-repo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        color: #6b7280;
      }
      .row-repo svg {
        width: 100%;
        height: 100%;
      }
      .row-repo:hover {
        color: #111;
      }
      .lock-icon {
        color: #9ca3af;
        text-align: center;
      }
      .meta {
        font-size: 0.75rem;
        color: #6b7280;
      }
      .meta.err {
        color: #b91c1c;
      }

      /* iOS-style toggle switch. */
      .switch {
        position: relative;
        display: inline-block;
        width: 36px;
        height: 20px;
        flex: none;
      }
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .switch .slider {
        position: absolute;
        inset: 0;
        background-color: #d1d5db;
        border-radius: 999px;
        cursor: pointer;
        transition: background-color 0.15s ease;
      }
      .switch .slider::before {
        content: '';
        position: absolute;
        height: 16px;
        width: 16px;
        left: 2px;
        bottom: 2px;
        background-color: white;
        border-radius: 50%;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        transition: transform 0.15s ease;
      }
      .switch input:checked + .slider {
        background-color: #3b82f6;
      }
      .switch input:checked + .slider::before {
        transform: translateX(16px);
      }
      .switch input:disabled + .slider {
        background-color: #e5e7eb;
        cursor: default;
      }
      .switch.sm {
        width: 30px;
        height: 17px;
      }
      .switch.sm .slider::before {
        height: 13px;
        width: 13px;
      }
      .switch.sm input:checked + .slider::before {
        transform: translateX(13px);
      }

      button.install,
      button.uninstall {
        border: 0;
        padding: 0.3rem 0.7rem;
        border-radius: 0.25rem;
        cursor: pointer;
        font: inherit;
        font-size: 0.85rem;
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        white-space: nowrap;
      }
      button.install {
        background: #10b981;
        color: white;
      }
      button.install:hover {
        background: #059669;
      }
      button.install:disabled {
        background: #d1d5db;
        cursor: default;
      }
      button.uninstall {
        background: transparent;
        border: 1px solid #d1d5db;
        color: #6b7280;
      }
      button.uninstall:hover {
        background: #fef2f2;
        border-color: #fecaca;
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
    `];ht([z()],Ze.prototype,"urls",2);ht([z()],Ze.prototype,"records",2);ht([z()],Ze.prototype,"addUrl",2);ht([z()],Ze.prototype,"catalog",2);ht([z()],Ze.prototype,"catalogError",2);ht([z()],Ze.prototype,"serverCatalog",2);ht([z()],Ze.prototype,"serverCatalogError",2);ht([z()],Ze.prototype,"installing",2);ht([z()],Ze.prototype,"catalogUrls",2);ht([z()],Ze.prototype,"activeCatalogUrl",2);ht([z()],Ze.prototype,"search",2);ht([z()],Ze.prototype,"filterStates",2);ht([z()],Ze.prototype,"typeFilters",2);ht([z()],Ze.prototype,"statusFilter",2);Ze=ht([Oe("plugin-manager-dialog")],Ze);var fT=Object.defineProperty,pT=Object.getOwnPropertyDescriptor,en=(e,t,n,r)=>{for(var i=r>1?void 0:r?pT(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&fT(t,n,i),i};const ti="__general__";let ft=class extends $e{constructor(){super(...arguments),this.tabs=[],this.active=ti,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.secretError="",this.openHelp="",this.dialogEl=null,this.attemptClose=e=>{const t=this.invalidSecrets();if(t.length>0){e?.preventDefault();const r=t[0];this.active=r.tab.id,this.secretError=`“${r.field.label}” must be empty or a \${secret:name} reference. Move the value into the secrets store (General tab) and reference it, so the raw secret is never saved or synced.`;return}const n=this.danglingSecrets();if(n.length>0){e?.preventDefault();const r=n[0];this.active=r.tab.id;const i=r.names.map(s=>`“${s}”`).join(", ");this.secretError=`“${r.field.label}” references ${i}, which the secrets store does not have. Add it in the General tab or correct the name — an unknown reference is passed on as the literal \${secret:name} text.`;return}this.secretError="",this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.attemptClose()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&Zt("settings",this.dialogEl)}async open(){const e=await J(),t=[...e.registries.settings];this.tabs=t.map(([s,o])=>({id:s,name:o.name,fields:o.fields}));const n=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=n?.title??"";const r={},i={};for(const s of this.tabs)for(const o of s.fields){const a=`${s.id}:${o.key}`,c=await e.api.settings.placement(s.id,o.key);c==="user"?(r[a]=qs(a),i[a]="user"):c==="workspace"?(r[a]=(await e.store.settings.findOne(a))?.value,i[a]="workspace"):(r[a]=o.default,i[a]=o.scope??"workspace")}this.values=r,this.placements=i,this.secretsText=mi(),this.active=ti,await this.updateComplete,this.dialogEl?.showModal()}static rawSecret(e){return typeof e=="string"&&e!==""&&!e.includes("${secret:")}invalidSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields)n.type==="secret"&&ft.rawSecret(this.values[`${t.id}:${n.key}`])&&e.push({tab:t,field:n});return e}static secretRefs(e){return typeof e!="string"?[]:[...e.matchAll(/\$\{secret:([^}]*)\}/g)].map(t=>(t[1]??"").trim())}missingRefs(e){const t=new Set(Object.keys(hr(this.secretsText)));return ft.secretRefs(e).filter(n=>!t.has(n))}danglingSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields){const r=this.missingRefs(this.values[`${t.id}:${n.key}`]);r.length>0&&e.push({tab:t,field:n,names:r})}return e}async setValue(e,t,n){const r=`${e.id}:${t.key}`;this.values={...this.values,[r]:n},this.clearSecretErrorIfFixed(),await(await J()).api.settings.set(e.id,t.key,n,this.placements[r]),M1(e.id,t.key)}async toggleScope(e,t,n){const r=`${e.id}:${t.key}`,i=n?"user":"workspace";this.placements={...this.placements,[r]:i},await(await J()).api.settings.set(e.id,t.key,this.values[r],i)}clearSecretErrorIfFixed(){this.secretError&&this.invalidSecrets().length===0&&this.danglingSecrets().length===0&&(this.secretError="")}onSecretsInput(e){this.secretsText=e.target.value,pf(this.secretsText),this.clearSecretErrorIfFixed()}downloadSecrets(){const e=new Blob([this.secretsText],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="secrets.txt",n.click(),URL.revokeObjectURL(t)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await J();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const n=`${e.id}:${t.key}`,r=this.values[n];switch(t.type){case"text":return v`<textarea .value=${String(r??"")} @change=${i=>this.setValue(e,t,i.target.value)}></textarea>`;case"number":return v`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${i=>{const s=i.target.value;this.setValue(e,t,s===""?void 0:Number(s))}}
        />`;case"boolean":return v`<label class="scope"><input type="checkbox" .checked=${!!r} @change=${i=>this.setValue(e,t,i.target.checked)} /> enabled</label>`;case"date":return v`<input type="date" .value=${String(r??"")} @change=${i=>this.setValue(e,t,i.target.value)} />`;case"secret":return this.renderSecretControl(e,t,r);case"option":return v`<div class="radios">
          ${(t.options??[]).map(i=>v`<label><input type="radio" name=${n} .checked=${r===i} @change=${()=>this.setValue(e,t,i)} />${i}</label>`)}
        </div>`;case"selection":{const i=Array.isArray(r)?r:[];return v`<div class="checks">
          ${(t.options??[]).map(s=>v`<label
                ><input
                  type="checkbox"
                  .checked=${i.includes(s)}
                  @change=${o=>{const c=o.target.checked?[...i,s]:i.filter(d=>d!==s);this.setValue(e,t,c)}}
                />${s}</label
              >`)}
        </div>`}case"string":default:return v`<input type="text" .value=${String(r??"")} @change=${i=>this.setValue(e,t,i.target.value)} />`}}renderSecretControl(e,t,n){const r=Object.keys(hr(this.secretsText)),i=ft.rawSecret(n)||this.missingRefs(n).length>0;return v`<div class="secret-row">
      <input
        type="text"
        class=${i?"invalid":""}
        placeholder="value or \${secret:name}"
        .value=${String(n??"")}
        @change=${s=>this.setValue(e,t,s.target.value)}
      />
      ${r.length>0?v`<select
            title="Insert a secret reference"
            @change=${s=>{const o=s.target.value;o&&this.setValue(e,t,`\${secret:${o}}`),s.target.value=""}}
          >
            <option value="">🔑 secret…</option>
            ${r.map(s=>v`<option value=${s}>${s}</option>`)}
          </select>`:X}
    </div>`}renderField(e,t){const n=`${e.id}:${t.key}`,r=!!(t.help||t.helpUrl),i=this.openHelp===n;return v`<div class="field">
      <div class="field-head">
        <label>${t.label}</label>
        ${r?v`<button
              type="button"
              class="help-btn"
              aria-label=${`Help for ${t.label}`}
              aria-expanded=${i?"true":"false"}
              title=${t.help??"More about this setting"}
              @click=${()=>this.openHelp=i?"":n}
            >
              <span class="mi sm" aria-hidden="true">info</span>
            </button>`:X}
        <label class="scope" title="Store on this device only (not synced)">
          <input type="checkbox" .checked=${this.placements[n]==="user"} @change=${s=>this.toggleScope(e,t,s.target.checked)} />
          user
        </label>
      </div>
      ${r&&i?v`<div class="help-panel">
            ${t.help?v`<p>${t.help}</p>`:X} ${t.helpUrl?v`<a href=${t.helpUrl} target="_blank" rel="noopener noreferrer">${t.helpLinkLabel||mT(t.helpUrl)}</a>`:X}
          </div>`:X}
      ${this.renderControl(e,t)} ${t.description?v`<p class="desc">${t.description}</p>`:X}
    </div>`}renderGeneral(){return v`
      <h3>General</h3>
      <p class="blurb">
        Workspace settings sync with this workspace; values marked
        <em>user</em> stay on this device only.
      </p>
      <div class="field">
        <div class="field-head"><label>Workspace title</label></div>
        <p class="desc">Shown in the header instead of "easyDBAccess". Leave blank to use the default.</p>
        <input type="text" placeholder="easyDBAccess" .value=${this.workspaceTitle} @change=${e=>this.setWorkspaceTitle(e.target.value)} />
      </div>
      <div class="field">
        <div class="field-head"><label>Secrets</label></div>
        <p class="desc">
          Cross-workspace, device-local. One <code>name: value</code> per line. Reference a secret from any field with <code>\${secret:name}</code>. Drag a <code>secrets.txt</code> onto the app to
          re-import.
        </p>
        <textarea placeholder="githubPAT: ghp_…" .value=${this.secretsText} @input=${this.onSecretsInput}></textarea>
        <div class="secrets-actions">
          <button type="button" class="ghost" ?disabled=${this.secretsText.trim().length===0} @click=${this.downloadSecrets}><span class="mi sm">download</span> Download secrets.txt</button>
        </div>
      </div>
    `}renderPanel(){if(this.active===ti)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?v`
      <h3>${e.name}</h3>
      ${e.fields.length===0?v`<p class="empty">This plugin registered no settings.</p>`:e.fields.map(t=>this.renderField(e,t))}
    `:X}render(){return v`
      <dialog @cancel=${this.attemptClose} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.attemptClose()}>
          <span class="mi sm">close</span>
        </button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>Settings</h2>
            <div class="header-actions">
              <button type="submit" class="primary">Done</button>
            </div>
          </div>
          ${this.secretError?v`<div class="secret-error" role="alert">${this.secretError}</div>`:X}
          <div class="dialog-body">
            <div class="layout">
              <nav class="tabs">
                <button type="button" class=${this.active===ti?"active":""} @click=${()=>this.active=ti}>General</button>
                ${this.tabs.map(e=>v`<button type="button" class=${this.active===e.id?"active":""} @click=${()=>this.active=e.id}>${e.name}</button>`)}
              </nav>
              <section class="panel">${this.renderPanel()}</section>
            </div>
          </div>
        </form>
      </dialog>
    `}};ft.styles=[_t,mt,Se`
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
      /* (i) next to the label — opens the field's help panel. */
      .help-btn {
        background: transparent;
        border: 0;
        padding: 0;
        margin-right: auto;
        color: #6b7280;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        line-height: 1;
      }
      .help-btn:hover,
      .help-btn[aria-expanded='true'] {
        color: #1d4ed8;
      }
      .help-panel {
        font-size: 0.8rem;
        color: #374151;
        background: #eff6ff;
        border: 1px solid #bfdbfe;
        border-radius: 0.3rem;
        padding: 0.45rem 0.6rem;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      }
      .help-panel p {
        margin: 0;
      }
      .help-panel a {
        color: #1d4ed8;
        align-self: flex-start;
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
      .secrets-actions {
        display: flex;
        justify-content: flex-end;
        margin-top: 0.4rem;
      }
      button.ghost {
        display: inline-flex;
        align-items: center;
        gap: 0.3rem;
        font: inherit;
        font-size: 0.85rem;
        background: #f3f4f6;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        padding: 0.3rem 0.6rem;
        color: #374151;
        cursor: pointer;
      }
      button.ghost:hover:not(:disabled) {
        background: #e5e7eb;
      }
      button.ghost:disabled {
        opacity: 0.5;
        cursor: default;
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
      .secret-row input.invalid {
        border-color: #dc2626;
        background: #fef2f2;
      }
      .secret-error {
        margin: 0.5rem 1rem 0;
        padding: 0.5rem 0.7rem;
        background: #fef2f2;
        border: 1px solid #fecaca;
        border-radius: 0.35rem;
        color: #b91c1c;
        font-size: 0.82rem;
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
    `];en([z()],ft.prototype,"tabs",2);en([z()],ft.prototype,"active",2);en([z()],ft.prototype,"values",2);en([z()],ft.prototype,"placements",2);en([z()],ft.prototype,"secretsText",2);en([z()],ft.prototype,"workspaceTitle",2);en([z()],ft.prototype,"secretError",2);en([z()],ft.prototype,"openHelp",2);ft=en([Oe("settings-dialog")],ft);function mT(e){try{return new URL(e).host}catch{return e}}const zg=5,Wa="palette:recent",Ng="Recent";function gT(e,t,n=zg){return[t,...e.filter(r=>r!==t)].slice(0,n)}function bT(e){return Array.isArray(e)?e.filter(t=>typeof t=="string").slice(0,zg):[]}function wT(e,t){const n=t instanceof Set?t:new Set(t);return e.filter(r=>n.has(r))}function yT(e,t){if(t.length===0)return e;const n=new Map(e.map(s=>[s.id,s])),r=[];for(const s of t){const o=n.get(s);o&&r.push({...o,group:Ng})}if(r.length===0)return e;const i=new Set(r.map(s=>s.id));return[...r,...e.filter(s=>!i.has(s.id))]}var vT=Object.defineProperty,kT=Object.getOwnPropertyDescriptor,Or=(e,t,n,r)=>{for(var i=r>1?void 0:r?kT(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&vT(t,n,i),i};const $T={[Ng]:-1,Windows:0,Actions:1,App:2,Tables:3,Views:4};function Bh(e){return $T[e]??3}function xT(e){return e?e.trimStart().startsWith("<svg")?v`<span class="cmd-svg">${zl(e)}</span>`:v`<span class="mi sm">${e}</span>`:v`<span class="mi sm">chevron_right</span>`}let mn=class extends $e{constructor(){super(...arguments),this.search="",this.items=[],this.selected=0,this.api=null,this.commandFallbacks=[],this.recentIds=[],this.onDialogClick=e=>{if(e.detail===0||!this.dialogEl)return;const t=this.dialogEl.getBoundingClientRect();e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom||this.close()}}async open(){const e=await J();this.api=e.api,this.commandFallbacks=e.registries.commandFallbacks,this.recentIds=bT((await e.api.store.settings.findOne(Wa))?.value),this.items=await this.buildItems(),await this.forgetVanished(),this.search="",this.selected=0,await this.updateComplete,this.dialogEl&&!this.dialogEl.open&&this.dialogEl.showModal(),this.inputEl?.focus()}async buildItems(){const e=await J(),t=e.api,n=[];for(const s of e.registries.commands)n.push({id:s.id,title:s.title,group:s.group??"Commands",...s.icon?{icon:s.icon}:{},haystack:[s.title,s.group,...s.keywords??[]].join(" ").toLowerCase(),run:()=>s.run(t)});for(const s of[...e.registries.headerButtons,...e.registries.footerButtons])n.push({id:`button:${s.id}`,title:s.label,group:"Actions",...s.icon?{icon:s.icon}:{},haystack:`${s.label} ${s.tooltip??""}`.toLowerCase(),run:()=>s.onClick(t)});const r=await t.store.tables.find({workspaceId:e.workspaceId});r.sort((s,o)=>s.name.localeCompare(o.name));for(const s of r)n.push({id:`goto:${s.id}`,title:`Go to: ${s.name}`,group:"Tables",icon:"table_chart",haystack:`${s.name} go to table`.toLowerCase(),run:()=>{Mc(s.id)}});const i=await t.store.viewInstances.find({workspaceId:e.workspaceId});i.sort((s,o)=>s.name.localeCompare(o.name));for(const s of i)n.push({id:`goto-view:${s.id}`,title:`Go to view: ${s.name}`,group:"Views",icon:"view_quilt",haystack:`${s.name} go to view`.toLowerCase(),run:async()=>{await Hc(s.id)}});return yT(n,this.recentIds).map((s,o)=>({it:s,i:o})).sort((s,o)=>Bh(s.it.group)-Bh(o.it.group)||s.i-o.i).map(({it:s})=>s)}get filtered(){const e=this.search.trim();if(!e)return this.items;const t=this.items.filter(n=>n.haystack.includes(e.toLowerCase()));return t.length>0?t:this.fallbackItems(e)}fallbackItems(e){const t=this.api;if(!t)return[];const n=[];for(const r of this.commandFallbacks){let i;try{i=r(e)}catch{continue}i&&n.push({id:i.id,title:i.title,group:i.group??"Commands",...i.icon?{icon:i.icon}:{},haystack:i.title.toLowerCase(),run:()=>i.run(t)})}return n}close(){this.dialogEl?.close()}onInput(e){this.search=e.target.value,this.selected=0}onKeydown(e){const t=this.filtered;if(e.key==="ArrowDown")e.preventDefault(),this.selected=t.length?(this.selected+1)%t.length:0;else if(e.key==="ArrowUp")e.preventDefault(),this.selected=t.length?(this.selected-1+t.length)%t.length:0;else if(e.key==="Enter"){e.preventDefault();const n=t[this.selected];n&&this.execute(n)}}async execute(e){this.close(),this.remember(e.id);try{await e.run()}catch(t){console.error(`[command:${e.id}]`,t)}}async forgetVanished(){const e=wT(this.recentIds,this.items.map(t=>t.id));if(e.length!==this.recentIds.length){this.recentIds=e;try{await this.api?.store.settings.upsert({name:Wa,value:e})}catch{}}}async remember(e){this.recentIds=gT(this.recentIds,e);try{await this.api?.store.settings.upsert({name:Wa,value:this.recentIds})}catch(t){console.warn("[command-palette] could not save recent commands",t)}}render(){const e=this.filtered;let t="";return v`
      <dialog @keydown=${this.onKeydown} @click=${this.onDialogClick} @close=${()=>this.search=""}>
        <div class="search-row">
          <span class="mi">search</span>
          <input type="text" placeholder="Type a command…  (windows, go to, import, export)" .value=${this.search} @input=${this.onInput} />
        </div>
        <div class="list">
          ${e.length===0?v`<div class="empty">No matching commands.</div>`:e.map((n,r)=>{const i=n.group!==t?(t=n.group,n.group):null;return v`
                  ${i?v`<div class="group-head">${i}</div>`:""}
                  <div class=${`item${r===this.selected?" sel":""}`} @mousemove=${()=>this.selected=r} @click=${()=>this.execute(n)}>
                    ${xT(n.icon)}
                    <span class="title">${n.title}</span>
                  </div>
                `})}
        </div>
      </dialog>
    `}};mn.styles=[_t,Se`
      dialog {
        width: 560px;
        max-width: 94vw;
        padding: 0;
        border: 1px solid #d1d5db;
        border-radius: 0.6rem;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        margin-top: 12vh;
      }
      dialog::backdrop {
        background: rgba(0, 0, 0, 0.25);
      }
      .search-row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.7rem 0.9rem;
        border-bottom: 1px solid #eee;
      }
      .search-row .mi {
        color: #9ca3af;
      }
      input {
        flex: 1;
        font: inherit;
        font-size: 1rem;
        border: 0;
        outline: none;
        background: transparent;
      }
      .list {
        max-height: 52vh;
        overflow: auto;
        padding: 0.35rem;
      }
      .group-head {
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: #9ca3af;
        padding: 0.5rem 0.6rem 0.25rem;
      }
      .item {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        padding: 0.45rem 0.6rem;
        border-radius: 0.35rem;
        cursor: pointer;
        color: #111827;
      }
      .item .cmd-svg {
        display: inline-flex;
        width: 1.05rem;
        height: 1.05rem;
        color: #6b7280;
      }
      .item .cmd-svg svg {
        width: 100%;
        height: 100%;
      }
      .item .mi {
        color: #6b7280;
      }
      .item .title {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .item.sel {
        background: #eff6ff;
        color: #1d4ed8;
      }
      .item.sel .mi,
      .item.sel .cmd-svg {
        color: #1d4ed8;
      }
      .empty {
        padding: 1rem 0.9rem;
        color: #6b7280;
        font-size: 0.9rem;
      }
    `];Or([z()],mn.prototype,"search",2);Or([z()],mn.prototype,"items",2);Or([z()],mn.prototype,"selected",2);Or([Wt("dialog")],mn.prototype,"dialogEl",2);Or([Wt("input")],mn.prototype,"inputEl",2);mn=Or([Oe("command-palette-dialog")],mn);var ST=Object.defineProperty,CT=Object.getOwnPropertyDescriptor,Ko=(e,t,n,r)=>{for(var i=r>1?void 0:r?CT(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ST(t,n,i),i};let Cr=class extends $e{constructor(){super(...arguments),this.label="",this.fraction=void 0,this.detail="",this.onProgress=e=>{const t=e.detail;this.label=t.label??"",this.fraction=t.fraction,this.detail=t.detail??""}}connectedCallback(){super.connectedCallback(),document.addEventListener(al,this.onProgress)}disconnectedCallback(){document.removeEventListener(al,this.onProgress),super.disconnectedCallback()}render(){if(!this.label)return X;const e=this.fraction==null?null:Math.round(Math.min(1,Math.max(0,this.fraction))*100);return v`
      <div class="wrap" role="status" aria-live="polite">
        <span class="label">${this.label}</span>
        <span class="bar">
          <span class="fill ${e==null?"":"determinate"}" style=${e==null?"":`width:${e}%`}></span>
        </span>
        ${this.detail?v`<span class="detail">${this.detail}</span>`:X}
        <span class="pct">${e==null?"":`${e}%`}</span>
      </div>
    `}};Cr.styles=Se`
    :host {
      display: block;
    }
    .wrap {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.3rem 0.75rem;
      background: #eef2ff;
      border-bottom: 1px solid #c7d2fe;
      font-size: 0.78rem;
      color: #3730a3;
    }
    .label {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .detail {
      color: #6366f1;
      white-space: nowrap;
    }
    .bar {
      flex: 1;
      height: 4px;
      border-radius: 2px;
      background: #c7d2fe;
      overflow: hidden;
    }
    .fill {
      height: 100%;
      background: #4f46e5;
    }
    /* Indeterminate: work has started but nothing has reported yet. A sliding
       sliver says "running" without claiming a position it does not know. */
    .fill:not(.determinate) {
      width: 30%;
      animation: eda-app-progress 1.1s ease-in-out infinite;
    }
    .fill.determinate {
      transition: width 0.15s linear;
    }
    .pct {
      min-width: 2.5rem;
      text-align: right;
      font-variant-numeric: tabular-nums;
    }
    @keyframes eda-app-progress {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(333%);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .fill:not(.determinate) {
        animation: none;
        width: 100%;
        opacity: 0.5;
      }
    }
  `;Ko([z()],Cr.prototype,"label",2);Ko([z()],Cr.prototype,"fraction",2);Ko([z()],Cr.prototype,"detail",2);Cr=Ko([Oe("app-progress")],Cr);var _T=Object.defineProperty,ET=Object.getOwnPropertyDescriptor,jg=(e,t,n,r)=>{for(var i=r>1?void 0:r?ET(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&_T(t,n,i),i};let io=class extends $e{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await J();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(n=>this.tables=n.filter(r=>r.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(n=>n.workspaceId===this.workspaceId),await Lm(),await s_(),QE()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?v``:v`<div class="empty">No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the page, or click <strong>+ New Table</strong> above.</div>`}};io.styles=Se`
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
  `;jg([z()],io.prototype,"tables",2);io=jg([Oe("table-list")],io);var TT=Object.defineProperty,IT=Object.getOwnPropertyDescriptor,Xc=(e,t,n,r)=>{for(var i=r>1?void 0:r?IT(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&TT(t,n,i),i};let ki=class extends $e{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await J();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);t&&Ho(t.name)}render(){return v`
      <select .value=${this.current} @change=${e=>this.switchWorkspace(e.target.value)}>
        ${this.workspaces.map(e=>v`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${Ag} title="New workspace">
        <span class="mi sm">add</span>
      </button>
      <button @click=${Rg} title="Delete workspace">
        <span class="mi sm">delete</span>
      </button>
    `}};ki.styles=[_t,Se`
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
    `];Xc([z()],ki.prototype,"workspaces",2);Xc([z()],ki.prototype,"current",2);ki=Xc([Oe("workspace-selector")],ki);var qh=Object.freeze,Fg=Object.defineProperty,AT=Object.getOwnPropertyDescriptor,Dt=(e,t,n,r)=>{for(var i=r>1?void 0:r?AT(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Fg(t,n,i),i},RT=(e,t)=>qh(Fg(e,"raw",{value:qh(e.slice())})),Hh;Gb();Zb();function Vh(e){return e?e.trimStart().startsWith("<svg")?v`<span class="icon-svg" aria-hidden="true">${zl(e)}</span>`:v`<span class="mi sm" aria-hidden="true">${e}</span>`:""}let pt=class extends $e{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.onOpenCommandPalette=()=>{this.commandPaletteDialog?.open()},this.onGlobalKeydown=e=>{(e.ctrlKey||e.metaKey)&&!e.altKey&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.commandPaletteDialog?.open())},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.onSetSearch=e=>{this.searchQuery=e.detail?.query??"",this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery&&(this.searchOpen=!0),this.broadcastSearch(this.searchQuery)},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{Wh(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{const t=e.relatedTarget;t&&(this.contains(t)||DT()?.contains(t))||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!Wh(e))return;e.preventDefault();const t=await J(),n=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:n,event:e});for(const r of[...t.registries.dropHandlers])try{if(await r(e,t.api))return}catch(i){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:i})}},this.runSlot=(e,t)=>{if(!this.api)return;const n=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:n})).catch(r=>{console.error(`[footer-button:${e.id}]`,r)})}}connectedCallback(){super.connectedCallback(),document.addEventListener("dragover",this.onDragOver),document.addEventListener("dragleave",this.onDragLeave),document.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),document.addEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.addEventListener("easydb:focus-search",this.openSearch),document.addEventListener("easydb:set-search",this.onSetSearch),document.addEventListener("keydown",this.onGlobalKeydown),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("dragover",this.onDragOver),document.removeEventListener("dragleave",this.onDragLeave),document.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),document.removeEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.removeEventListener("easydb:focus-search",this.openSearch),document.removeEventListener("easydb:set-search",this.onSetSearch),document.removeEventListener("keydown",this.onGlobalKeydown),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await J();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const n=t.find(r=>r.id===e.workspaceId);this.workspaceTitle=n?.title?.trim()??"",OT(this.workspaceTitle)})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return v` <button class="icon-btn" title=${e.tooltip??e.label} aria-label=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>${Vh(e.icon)}</button> `;const n=t==="header"||e.variant==="primary"?"primary":"slot";return v`
      <button class=${n} title=${e.tooltip??e.label} @click=${r=>this.runSlot(e,r)}>
        ${Vh(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return v(Hh||(Hh=RT([`
      <header>
        <strong
          >`,`
          <a class="version-link" href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md" target="_blank" rel="noopener" title="View the changelog on GitHub"
            ><span class="version">v0.0.357</span></a
          ></strong
        >
        `,`
        `,`
        <button class="icon-btn" title="Add, disable, or remove plugins" aria-label="Plugins" @click=`,`>
          <span class="mi" aria-hidden="true">extension</span>
        </button>
        <a
          class="icon-btn"
          href="https://github.com/cawoodm/easydbaccess/blob/main/docs/help/INDEX.md"
          target="_blank"
          rel="noopener noreferrer"
          title="Help — open the user guide"
          aria-label="Help — open the user guide"
        >
          <span class="mi" aria-hidden="true">help</span>
        </a>
        `,`
      </header>
      <app-progress></app-progress>
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
      <command-palette-dialog></command-palette-dialog>
      <script-editor-dialog><\/script-editor-dialog>
      <host-dialogs></host-dialogs>
      <toast-host></toast-host>
    `])),this.workspaceTitle||"easyDBAccess",this.headerButtons.filter(e=>e.variant!=="secondary").map(e=>this.renderSlotButton(e,"header")),this.searchOpen?v`<span class="search-wrap">
              <input class="search" type="search" placeholder="search all tables…" .value=${this.searchQuery} @input=${this.onSearchInput} @blur=${this.closeSearchOnBlur} />
              ${this.searchQuery.length>0?v`<button class="search-clear" title="Clear search" aria-label="Clear search" @mousedown=${this.clearSearch}>×</button>`:""}
            </span>`:v`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              aria-label="Search"
              @click=${this.openSearch}
            >
              <span class="mi" aria-hidden="true">search</span>
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};pt.styles=[_t,Se`
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
      header .version-link {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
      }
      header .version-link:hover .version {
        opacity: 1;
        text-decoration: underline;
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
      button.icon-btn,
      a.icon-btn {
        background: transparent;
        color: white;
        border: 1px solid #4b5563;
        padding: 0.3rem 0.6rem;
        border-radius: 0.25rem;
        font: inherit;
        cursor: pointer;
        line-height: 1;
        /* a.icon-btn is a link, not a button — strip the underline/default
           link colour so it renders identically to its button siblings. */
        text-decoration: none;
        display: inline-flex;
        align-items: center;
      }
      button.icon-btn:hover,
      a.icon-btn:hover {
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
    `];Dt([Wt("new-table-dialog")],pt.prototype,"dialog",2);Dt([Wt("csv-paste-dialog")],pt.prototype,"csvPasteDialog",2);Dt([Wt("plugin-manager-dialog")],pt.prototype,"pluginManagerDialog",2);Dt([Wt("settings-dialog")],pt.prototype,"settingsDialog",2);Dt([Wt("command-palette-dialog")],pt.prototype,"commandPaletteDialog",2);Dt([Wt("input.search")],pt.prototype,"searchInput",2);Dt([z()],pt.prototype,"footerButtons",2);Dt([z()],pt.prototype,"headerButtons",2);Dt([z()],pt.prototype,"searchQuery",2);Dt([z()],pt.prototype,"searchOpen",2);Dt([z()],pt.prototype,"workspaceTitle",2);pt=Dt([Oe("app-shell")],pt);const Kh=document.title;function OT(e){const t=e.trim();document.title=t?`${t} — ${Kh}`:Kh}function DT(){return document.getElementById("easydb-panels")}function Wh(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([J(),Ae(()=>Promise.resolve().then(()=>qm),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{X as A,tw as a,v as b,gt as c,mt as d,GT as e,Se as f,zT as g,$e as i,bt as m,z as r,Oe as t,Zt as w};
//# sourceMappingURL=index-DMG5Fwo2.js.map
