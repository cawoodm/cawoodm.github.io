(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Ph="modulepreload",Lh=function(e){return"/easydbaccess3/"+e},sl={},ut=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");s=o(n.map(h=>{if(h=Lh(h),h in sl)return;sl[h]=!0;const m=h.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const w=document.createElement("link");if(w.rel=m?"stylesheet":Ph,m||(w.as="script"),w.crossOrigin="",w.href=h,u&&w.setAttribute("nonce",u),document.head.appendChild(w),m)return new Promise((y,$)=>{w.addEventListener("load",y),w.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vs=globalThis,Eo=vs.ShadowRoot&&(vs.ShadyCSS===void 0||vs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,To=Symbol(),il=new WeakMap;let Wc=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==To)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Eo&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=il.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&il.set(n,t))}return t}toString(){return this.cssText}};const Mh=e=>new Wc(typeof e=="string"?e:e+"",void 0,To),xe=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new Wc(n,e,To)},jh=(e,t)=>{if(Eo)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),s=vs.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,e.appendChild(r)}},ol=Eo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Mh(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Nh,defineProperty:zh,getOwnPropertyDescriptor:Uh,getOwnPropertyNames:Fh,getOwnPropertySymbols:Bh,getPrototypeOf:qh}=Object,zs=globalThis,al=zs.trustedTypes,Hh=al?al.emptyScript:"",Kh=zs.reactiveElementPolyfillSupport,br=(e,t)=>e,_s={toAttribute(e,t){switch(t){case Boolean:e=e?Hh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Io=(e,t)=>!Nh(e,t),ll={attribute:!0,type:String,converter:_s,reflect:!1,useDefault:!1,hasChanged:Io};Symbol.metadata??=Symbol("metadata"),zs.litPropertyMetadata??=new WeakMap;let An=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=ll){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,n);s!==void 0&&zh(this.prototype,t,s)}}static getPropertyDescriptor(t,n,r){const{get:s,set:i}=Uh(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get:s,set(o){const l=s?.call(this);i?.call(this,o),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ll}static _$Ei(){if(this.hasOwnProperty(br("elementProperties")))return;const t=qh(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(br("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(br("properties"))){const n=this.properties,r=[...Fh(n),...Bh(n)];for(const s of r)this.createProperty(s,n[s])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,s]of n)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const s=this._$Eu(n,r);s!==void 0&&this._$Eh.set(s,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)n.unshift(ol(s))}else t!==void 0&&n.push(ol(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return jh(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:_s).toAttribute(n,r.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,n){const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const i=r.getPropertyOptions(s),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:_s;this._$Em=s;const l=o.fromAttribute(n,i.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,n,r,s=!1,i){if(t!==void 0){const o=this.constructor;if(s===!1&&(i=this[t]),r??=o.getPropertyOptions(t),!((r.hasChanged??Io)(i,n)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:s,wrapped:i},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??n??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,i]of r){const{wrapped:o}=i,l=this[s];o!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,i,l)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};An.elementStyles=[],An.shadowRootOptions={mode:"open"},An[br("elementProperties")]=new Map,An[br("finalized")]=new Map,Kh?.({ReactiveElement:An}),(zs.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ao=globalThis,cl=e=>e,Ss=Ao.trustedTypes,ul=Ss?Ss.createPolicy("lit-html",{createHTML:e=>e}):void 0,Yc="$lit$",Qt=`lit$${Math.random().toFixed(9).slice(2)}$`,Qc="?"+Qt,Vh=`<${Qc}>`,gn=document,yr=()=>gn.createComment(""),vr=e=>e===null||typeof e!="object"&&typeof e!="function",Ro=Array.isArray,Gh=e=>Ro(e)||typeof e?.[Symbol.iterator]=="function",Vi=`[ 	
\f\r]`,lr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dl=/-->/g,hl=/>/g,dn=RegExp(`>|${Vi}(?:([^\\s"'>=/]+)(${Vi}*=${Vi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fl=/'/g,pl=/"/g,Xc=/^(?:script|style|textarea|title)$/i,Wh=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),C=Wh(1),bn=Symbol.for("lit-noChange"),se=Symbol.for("lit-nothing"),ml=new WeakMap,mn=gn.createTreeWalker(gn,129);function Jc(e,t){if(!Ro(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ul!==void 0?ul.createHTML(t):t}const Yh=(e,t)=>{const n=e.length-1,r=[];let s,i=t===2?"<svg>":t===3?"<math>":"",o=lr;for(let l=0;l<n;l++){const u=e[l];let h,m,g=-1,w=0;for(;w<u.length&&(o.lastIndex=w,m=o.exec(u),m!==null);)w=o.lastIndex,o===lr?m[1]==="!--"?o=dl:m[1]!==void 0?o=hl:m[2]!==void 0?(Xc.test(m[2])&&(s=RegExp("</"+m[2],"g")),o=dn):m[3]!==void 0&&(o=dn):o===dn?m[0]===">"?(o=s??lr,g=-1):m[1]===void 0?g=-2:(g=o.lastIndex-m[2].length,h=m[1],o=m[3]===void 0?dn:m[3]==='"'?pl:fl):o===pl||o===fl?o=dn:o===dl||o===hl?o=lr:(o=dn,s=void 0);const y=o===dn&&e[l+1].startsWith("/>")?" ":"";i+=o===lr?u+Vh:g>=0?(r.push(h),u.slice(0,g)+Yc+u.slice(g)+Qt+y):u+Qt+(g===-2?l:y)}return[Jc(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class $r{constructor({strings:t,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const l=t.length-1,u=this.parts,[h,m]=Yh(t,n);if(this.el=$r.createElement(h,r),mn.currentNode=this.el.content,n===2||n===3){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(s=mn.nextNode())!==null&&u.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const g of s.getAttributeNames())if(g.endsWith(Yc)){const w=m[o++],y=s.getAttribute(g).split(Qt),$=/([.?@])?(.*)/.exec(w);u.push({type:1,index:i,name:$[2],strings:y,ctor:$[1]==="."?Xh:$[1]==="?"?Jh:$[1]==="@"?Zh:Us}),s.removeAttribute(g)}else g.startsWith(Qt)&&(u.push({type:6,index:i}),s.removeAttribute(g));if(Xc.test(s.tagName)){const g=s.textContent.split(Qt),w=g.length-1;if(w>0){s.textContent=Ss?Ss.emptyScript:"";for(let y=0;y<w;y++)s.append(g[y],yr()),mn.nextNode(),u.push({type:2,index:++i});s.append(g[w],yr())}}}else if(s.nodeType===8)if(s.data===Qc)u.push({type:2,index:i});else{let g=-1;for(;(g=s.data.indexOf(Qt,g+1))!==-1;)u.push({type:7,index:i}),g+=Qt.length-1}i++}}static createElement(t,n){const r=gn.createElement("template");return r.innerHTML=t,r}}function Dn(e,t,n=e,r){if(t===bn)return t;let s=r!==void 0?n._$Co?.[r]:n._$Cl;const i=vr(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(e),s._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=s:n._$Cl=s),s!==void 0&&(t=Dn(e,s._$AS(e,t.values),s,r)),t}class Qh{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,s=(t?.creationScope??gn).importNode(n,!0);mn.currentNode=s;let i=mn.nextNode(),o=0,l=0,u=r[0];for(;u!==void 0;){if(o===u.index){let h;u.type===2?h=new Ir(i,i.nextSibling,this,t):u.type===1?h=new u.ctor(i,u.name,u.strings,this,t):u.type===6&&(h=new ef(i,this,t)),this._$AV.push(h),u=r[++l]}o!==u?.index&&(i=mn.nextNode(),o++)}return mn.currentNode=gn,s}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Ir{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,s){this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Dn(this,t,n),vr(t)?t===se||t==null||t===""?(this._$AH!==se&&this._$AR(),this._$AH=se):t!==this._$AH&&t!==bn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Gh(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==se&&vr(this._$AH)?this._$AA.nextSibling.data=t:this.T(gn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=$r.createElement(Jc(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(n);else{const i=new Qh(s,this),o=i.u(this.options);i.p(n),this.T(o),this._$AH=i}}_$AC(t){let n=ml.get(t.strings);return n===void 0&&ml.set(t.strings,n=new $r(t)),n}k(t){Ro(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of t)s===n.length?n.push(r=new Ir(this.O(yr()),this.O(yr()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=cl(t).nextSibling;cl(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Us{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,s,i){this.type=1,this._$AH=se,this._$AN=void 0,this.element=t,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=se}_$AI(t,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)t=Dn(this,t,n,0),o=!vr(t)||t!==this._$AH&&t!==bn,o&&(this._$AH=t);else{const l=t;let u,h;for(t=i[0],u=0;u<i.length-1;u++)h=Dn(this,l[r+u],n,u),h===bn&&(h=this._$AH[u]),o||=!vr(h)||h!==this._$AH[u],h===se?t=se:t!==se&&(t+=(h??"")+i[u+1]),this._$AH[u]=h}o&&!s&&this.j(t)}j(t){t===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Xh extends Us{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===se?void 0:t}}class Jh extends Us{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==se)}}class Zh extends Us{constructor(t,n,r,s,i){super(t,n,r,s,i),this.type=5}_$AI(t,n=this){if((t=Dn(this,t,n,0)??se)===bn)return;const r=this._$AH,s=t===se&&r!==se||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==se&&(r===se||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ef{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Dn(this,t)}}const tf=Ao.litHtmlPolyfillSupport;tf?.($r,Ir),(Ao.litHtmlVersions??=[]).push("3.3.3");const nf=(e,t,n)=>{const r=n?.renderBefore??t;let s=r._$litPart$;if(s===void 0){const i=n?.renderBefore??null;r._$litPart$=s=new Ir(t.insertBefore(yr(),i),i,void 0,n??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oo=globalThis;let ve=class extends An{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=nf(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return bn}};ve._$litElement$=!0,ve.finalized=!0,Oo.litElementHydrateSupport?.({LitElement:ve});const rf=Oo.litElementPolyfillSupport;rf?.({LitElement:ve});(Oo.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sf={attribute:!0,type:String,converter:_s,reflect:!1,hasChanged:Io},of=(e=sf,t,n)=>{const{kind:r,metadata:s}=n;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(n.name,e),r==="accessor"){const{name:o}=n;return{set(l){const u=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,u,e,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,e,l),l}}}if(r==="setter"){const{name:o}=n;return function(l){const u=this[o];t.call(this,l),this.requestUpdate(o,u,e,!0,l)}}throw Error("Unsupported decorator location: "+r)};function ht(e){return(t,n)=>typeof n=="object"?of(e,t,n):((r,s,i)=>{const o=s.hasOwnProperty(i);return s.constructor.createProperty(i,r),o?Object.getOwnPropertyDescriptor(s,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(e){return ht({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const af=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Pt(e,t){return(n,r,s)=>{const i=o=>o.renderRoot?.querySelector(e)??null;return af(n,r,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lf={CHILD:2},Zc=e=>(...t)=>({_$litDirective$:e,values:t});class cf{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Es extends cf{constructor(t){if(super(t),this.it=se,t.type!==lf.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===se||t==null)return this._t=void 0,this.it=t;if(t===bn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Es.directiveName="unsafeHTML",Es.resultType=1;const On=Zc(Es);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ao extends Es{}ao.directiveName="unsafeSVG",ao.resultType=2;const Do=Zc(ao);var uf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function df(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $s={exports:{}},hf=$s.exports,gl;function ff(){return gl||(gl=1,(function(e,t){(function(n,r){e.exports=r()})(hf,function(){var n=function(a,c){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,f){d.__proto__=f}||function(d,f){for(var p in f)Object.prototype.hasOwnProperty.call(f,p)&&(d[p]=f[p])})(a,c)},r=function(){return(r=Object.assign||function(a){for(var c,d=1,f=arguments.length;d<f;d++)for(var p in c=arguments[d])Object.prototype.hasOwnProperty.call(c,p)&&(a[p]=c[p]);return a}).apply(this,arguments)};function s(a,c,d){for(var f,p=0,b=c.length;p<b;p++)!f&&p in c||((f=f||Array.prototype.slice.call(c,0,p))[p]=c[p]);return a.concat(f||Array.prototype.slice.call(c))}var i=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:uf,o=Object.keys,l=Array.isArray;function u(a,c){return typeof c!="object"||o(c).forEach(function(d){a[d]=c[d]}),a}typeof Promise>"u"||i.Promise||(i.Promise=Promise);var h=Object.getPrototypeOf,m={}.hasOwnProperty;function g(a,c){return m.call(a,c)}function w(a,c){typeof c=="function"&&(c=c(h(a))),(typeof Reflect>"u"?o:Reflect.ownKeys)(c).forEach(function(d){$(a,d,c[d])})}var y=Object.defineProperty;function $(a,c,d,f){y(a,c,u(d&&g(d,"get")&&typeof d.get=="function"?{get:d.get,set:d.set,configurable:!0}:{value:d,configurable:!0,writable:!0},f))}function x(a){return{from:function(c){return a.prototype=Object.create(c.prototype),$(a.prototype,"constructor",a),{extend:w.bind(null,a.prototype)}}}}var A=Object.getOwnPropertyDescriptor,L=[].slice;function M(a,c,d){return L.call(a,c,d)}function F(a,c){return c(a)}function V(a){if(!a)throw new Error("Assertion Failed")}function Q(a){i.setImmediate?setImmediate(a):setTimeout(a,0)}function ne(a,c){if(typeof c=="string"&&g(a,c))return a[c];if(!c)return a;if(typeof c!="string"){for(var d=[],f=0,p=c.length;f<p;++f){var b=ne(a,c[f]);d.push(b)}return d}var v=c.indexOf(".");if(v!==-1){var k=a[c.substr(0,v)];return k==null?void 0:ne(k,c.substr(v+1))}}function B(a,c,d){if(a&&c!==void 0&&!("isFrozen"in Object&&Object.isFrozen(a)))if(typeof c!="string"&&"length"in c){V(typeof d!="string"&&"length"in d);for(var f=0,p=c.length;f<p;++f)B(a,c[f],d[f])}else{var b,v,k=c.indexOf(".");k!==-1?(b=c.substr(0,k),(v=c.substr(k+1))===""?d===void 0?l(a)&&!isNaN(parseInt(b))?a.splice(b,1):delete a[b]:a[b]=d:B(k=!(k=a[b])||!g(a,b)?a[b]={}:k,v,d)):d===void 0?l(a)&&!isNaN(parseInt(c))?a.splice(c,1):delete a[c]:a[c]=d}}function G(a){var c,d={};for(c in a)g(a,c)&&(d[c]=a[c]);return d}var ie=[].concat;function re(a){return ie.apply([],a)}var Mt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(re([8,16,32,64].map(function(a){return["Int","Uint","Float"].map(function(c){return c+a+"Array"})}))).filter(function(a){return i[a]}),H=new Set(Mt.map(function(a){return i[a]})),K=null;function ce(a){return K=new WeakMap,a=(function c(d){if(!d||typeof d!="object")return d;var f=K.get(d);if(f)return f;if(l(d)){f=[],K.set(d,f);for(var p=0,b=d.length;p<b;++p)f.push(c(d[p]))}else if(H.has(d.constructor))f=d;else{var v,k=h(d);for(v in f=k===Object.prototype?{}:Object.create(k),K.set(d,f),d)g(d,v)&&(f[v]=c(d[v]))}return f})(a),K=null,a}var pe={}.toString;function Te(a){return pe.call(a).slice(8,-1)}var Ue=typeof Symbol<"u"?Symbol.iterator:"@@iterator",bt=typeof Ue=="symbol"?function(a){var c;return a!=null&&(c=a[Ue])&&c.apply(a)}:function(){return null};function de(a,c){return c=a.indexOf(c),0<=c&&a.splice(c,1),0<=c}var Pe={};function Ae(a){var c,d,f,p;if(arguments.length===1){if(l(a))return a.slice();if(this===Pe&&typeof a=="string")return[a];if(p=bt(a)){for(d=[];!(f=p.next()).done;)d.push(f.value);return d}if(a==null)return[a];if(typeof(c=a.length)!="number")return[a];for(d=new Array(c);c--;)d[c]=a[c];return d}for(c=arguments.length,d=new Array(c);c--;)d[c]=arguments[c];return d}var tt=typeof Symbol<"u"?function(a){return a[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Qn=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],wt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Qn),ye={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Ke(a,c){this.name=a,this.message=c}function li(a,c){return a+". Errors: "+Object.keys(c).map(function(d){return c[d].toString()}).filter(function(d,f,p){return p.indexOf(d)===f}).join(`
`)}function $n(a,c,d,f){this.failures=c,this.failedKeys=f,this.successCount=d,this.message=li(a,c)}function xn(a,c){this.name="BulkError",this.failures=Object.keys(c).map(function(d){return c[d]}),this.failuresByPos=c,this.message=li(a,this.failures)}x(Ke).from(Error).extend({toString:function(){return this.name+": "+this.message}}),x($n).from(Ke),x(xn).from(Ke);var ci=wt.reduce(function(a,c){return a[c]=c+"Error",a},{}),rh=Ke,ue=wt.reduce(function(a,c){var d=c+"Error";function f(p,b){this.name=d,p?typeof p=="string"?(this.message="".concat(p).concat(b?`
 `+b:""),this.inner=b||null):typeof p=="object"&&(this.message="".concat(p.name," ").concat(p.message),this.inner=p):(this.message=ye[c]||d,this.inner=null)}return x(f).from(rh),a[c]=f,a},{});ue.Syntax=SyntaxError,ue.Type=TypeError,ue.Range=RangeError;var Ca=Qn.reduce(function(a,c){return a[c+"Error"]=ue[c],a},{}),Nr=wt.reduce(function(a,c){return["Syntax","Type","Range"].indexOf(c)===-1&&(a[c+"Error"]=ue[c]),a},{});function $e(){}function Wn(a){return a}function sh(a,c){return a==null||a===Wn?c:function(d){return c(a(d))}}function en(a,c){return function(){a.apply(this,arguments),c.apply(this,arguments)}}function ih(a,c){return a===$e?c:function(){var d=a.apply(this,arguments);d!==void 0&&(arguments[0]=d);var f=this.onsuccess,p=this.onerror;this.onsuccess=null,this.onerror=null;var b=c.apply(this,arguments);return f&&(this.onsuccess=this.onsuccess?en(f,this.onsuccess):f),p&&(this.onerror=this.onerror?en(p,this.onerror):p),b!==void 0?b:d}}function oh(a,c){return a===$e?c:function(){a.apply(this,arguments);var d=this.onsuccess,f=this.onerror;this.onsuccess=this.onerror=null,c.apply(this,arguments),d&&(this.onsuccess=this.onsuccess?en(d,this.onsuccess):d),f&&(this.onerror=this.onerror?en(f,this.onerror):f)}}function ah(a,c){return a===$e?c:function(d){var f=a.apply(this,arguments);u(d,f);var p=this.onsuccess,b=this.onerror;return this.onsuccess=null,this.onerror=null,d=c.apply(this,arguments),p&&(this.onsuccess=this.onsuccess?en(p,this.onsuccess):p),b&&(this.onerror=this.onerror?en(b,this.onerror):b),f===void 0?d===void 0?void 0:d:u(f,d)}}function lh(a,c){return a===$e?c:function(){return c.apply(this,arguments)!==!1&&a.apply(this,arguments)}}function ui(a,c){return a===$e?c:function(){var d=a.apply(this,arguments);if(d&&typeof d.then=="function"){for(var f=this,p=arguments.length,b=new Array(p);p--;)b[p]=arguments[p];return d.then(function(){return c.apply(f,b)})}return c.apply(this,arguments)}}Nr.ModifyError=$n,Nr.DexieError=Ke,Nr.BulkError=xn;var Et=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function _a(a){Et=a}var Yn={},Sa=100,Mt=typeof Promise>"u"?[]:(function(){var a=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[a,h(a),a];var c=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[c,h(c),a]})(),Qn=Mt[0],wt=Mt[1],Mt=Mt[2],wt=wt&&wt.then,tn=Qn&&Qn.constructor,di=!!Mt,Xn=function(a,c){Jn.push([a,c]),zr&&(queueMicrotask(uh),zr=!1)},hi=!0,zr=!0,nn=[],Ur=[],fi=Wn,Bt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:$e,pgp:!1,env:{},finalize:$e},le=Bt,Jn=[],rn=0,Fr=[];function te(a){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var c=this._PSD=le;if(typeof a!="function"){if(a!==Yn)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&mi(this,this._value))}this._state=null,this._value=null,++c.ref,(function d(f,p){try{p(function(b){if(f._state===null){if(b===f)throw new TypeError("A promise cannot be resolved with itself.");var v=f._lib&&kn();b&&typeof b.then=="function"?d(f,function(k,S){b instanceof te?b._then(k,S):b.then(k,S)}):(f._state=!0,f._value=b,Ta(f)),v&&Cn()}},mi.bind(null,f))}catch(b){mi(f,b)}})(this,a)}var pi={get:function(){var a=le,c=Kr;function d(f,p){var b=this,v=!a.global&&(a!==le||c!==Kr),k=v&&!Ht(),S=new te(function(T,O){gi(b,new Ea(Aa(f,a,v,k),Aa(p,a,v,k),T,O,a))});return this._consoleTask&&(S._consoleTask=this._consoleTask),S}return d.prototype=Yn,d},set:function(a){$(this,"then",a&&a.prototype===Yn?pi:{get:function(){return a},set:pi.set})}};function Ea(a,c,d,f,p){this.onFulfilled=typeof a=="function"?a:null,this.onRejected=typeof c=="function"?c:null,this.resolve=d,this.reject=f,this.psd=p}function mi(a,c){var d,f;Ur.push(c),a._state===null&&(d=a._lib&&kn(),c=fi(c),a._state=!1,a._value=c,f=a,nn.some(function(p){return p._value===f._value})||nn.push(f),Ta(a),d&&Cn())}function Ta(a){var c=a._listeners;a._listeners=[];for(var d=0,f=c.length;d<f;++d)gi(a,c[d]);var p=a._PSD;--p.ref||p.finalize(),rn===0&&(++rn,Xn(function(){--rn==0&&bi()},[]))}function gi(a,c){if(a._state!==null){var d=a._state?c.onFulfilled:c.onRejected;if(d===null)return(a._state?c.resolve:c.reject)(a._value);++c.psd.ref,++rn,Xn(ch,[d,a,c])}else a._listeners.push(c)}function ch(a,c,d){try{var f,p=c._value;!c._state&&Ur.length&&(Ur=[]),f=Et&&c._consoleTask?c._consoleTask.run(function(){return a(p)}):a(p),c._state||Ur.indexOf(p)!==-1||(function(b){for(var v=nn.length;v;)if(nn[--v]._value===b._value)return nn.splice(v,1)})(c),d.resolve(f)}catch(b){d.reject(b)}finally{--rn==0&&bi(),--d.psd.ref||d.psd.finalize()}}function uh(){sn(Bt,function(){kn()&&Cn()})}function kn(){var a=hi;return zr=hi=!1,a}function Cn(){var a,c,d;do for(;0<Jn.length;)for(a=Jn,Jn=[],d=a.length,c=0;c<d;++c){var f=a[c];f[0].apply(null,f[1])}while(0<Jn.length);zr=hi=!0}function bi(){var a=nn;nn=[],a.forEach(function(f){f._PSD.onunhandled.call(null,f._value,f)});for(var c=Fr.slice(0),d=c.length;d;)c[--d]()}function Br(a){return new te(Yn,!1,a)}function Ee(a,c){var d=le;return function(){var f=kn(),p=le;try{return Kt(d,!0),a.apply(this,arguments)}catch(b){c&&c(b)}finally{Kt(p,!1),f&&Cn()}}}w(te.prototype,{then:pi,_then:function(a,c){gi(this,new Ea(null,null,a,c,le))},catch:function(a){if(arguments.length===1)return this.then(null,a);var c=a,d=arguments[1];return typeof c=="function"?this.then(null,function(f){return(f instanceof c?d:Br)(f)}):this.then(null,function(f){return(f&&f.name===c?d:Br)(f)})},finally:function(a){return this.then(function(c){return te.resolve(a()).then(function(){return c})},function(c){return te.resolve(a()).then(function(){return Br(c)})})},timeout:function(a,c){var d=this;return a<1/0?new te(function(f,p){var b=setTimeout(function(){return p(new ue.Timeout(c))},a);d.then(f,p).finally(clearTimeout.bind(null,b))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&$(te.prototype,Symbol.toStringTag,"Dexie.Promise"),Bt.env=Ia(),w(te,{all:function(){var a=Ae.apply(null,arguments).map(Vr);return new te(function(c,d){a.length===0&&c([]);var f=a.length;a.forEach(function(p,b){return te.resolve(p).then(function(v){a[b]=v,--f||c(a)},d)})})},resolve:function(a){return a instanceof te?a:a&&typeof a.then=="function"?new te(function(c,d){a.then(c,d)}):new te(Yn,!0,a)},reject:Br,race:function(){var a=Ae.apply(null,arguments).map(Vr);return new te(function(c,d){a.map(function(f){return te.resolve(f).then(c,d)})})},PSD:{get:function(){return le},set:function(a){return le=a}},totalEchoes:{get:function(){return Kr}},newPSD:qt,usePSD:sn,scheduler:{get:function(){return Xn},set:function(a){Xn=a}},rejectionMapper:{get:function(){return fi},set:function(a){fi=a}},follow:function(a,c){return new te(function(d,f){return qt(function(p,b){var v=le;v.unhandleds=[],v.onunhandled=b,v.finalize=en(function(){var k,S=this;k=function(){S.unhandleds.length===0?p():b(S.unhandleds[0])},Fr.push(function T(){k(),Fr.splice(Fr.indexOf(T),1)}),++rn,Xn(function(){--rn==0&&bi()},[])},v.finalize),a()},c,d,f)})}}),tn&&(tn.allSettled&&$(te,"allSettled",function(){var a=Ae.apply(null,arguments).map(Vr);return new te(function(c){a.length===0&&c([]);var d=a.length,f=new Array(d);a.forEach(function(p,b){return te.resolve(p).then(function(v){return f[b]={status:"fulfilled",value:v}},function(v){return f[b]={status:"rejected",reason:v}}).then(function(){return--d||c(f)})})})}),tn.any&&typeof AggregateError<"u"&&$(te,"any",function(){var a=Ae.apply(null,arguments).map(Vr);return new te(function(c,d){a.length===0&&d(new AggregateError([]));var f=a.length,p=new Array(f);a.forEach(function(b,v){return te.resolve(b).then(function(k){return c(k)},function(k){p[v]=k,--f||d(new AggregateError(p))})})})}),tn.withResolvers&&(te.withResolvers=tn.withResolvers));var Me={awaits:0,echoes:0,id:0},dh=0,qr=[],Hr=0,Kr=0,hh=0;function qt(a,c,d,f){var p=le,b=Object.create(p);return b.parent=p,b.ref=0,b.global=!1,b.id=++hh,Bt.env,b.env=di?{Promise:te,PromiseProp:{value:te,configurable:!0,writable:!0},all:te.all,race:te.race,allSettled:te.allSettled,any:te.any,resolve:te.resolve,reject:te.reject}:{},c&&u(b,c),++p.ref,b.finalize=function(){--this.parent.ref||this.parent.finalize()},f=sn(b,a,d,f),b.ref===0&&b.finalize(),f}function _n(){return Me.id||(Me.id=++dh),++Me.awaits,Me.echoes+=Sa,Me.id}function Ht(){return!!Me.awaits&&(--Me.awaits==0&&(Me.id=0),Me.echoes=Me.awaits*Sa,!0)}function Vr(a){return Me.echoes&&a&&a.constructor===tn?(_n(),a.then(function(c){return Ht(),c},function(c){return Ht(),Re(c)})):a}function fh(){var a=qr[qr.length-1];qr.pop(),Kt(a,!1)}function Kt(a,c){var d,f=le;(c?!Me.echoes||Hr++&&a===le:!Hr||--Hr&&a===le)||queueMicrotask(c?function(p){++Kr,Me.echoes&&--Me.echoes!=0||(Me.echoes=Me.awaits=Me.id=0),qr.push(le),Kt(p,!0)}.bind(null,a):fh),a!==le&&(le=a,f===Bt&&(Bt.env=Ia()),di&&(d=Bt.env.Promise,c=a.env,(f.global||a.global)&&(Object.defineProperty(i,"Promise",c.PromiseProp),d.all=c.all,d.race=c.race,d.resolve=c.resolve,d.reject=c.reject,c.allSettled&&(d.allSettled=c.allSettled),c.any&&(d.any=c.any))))}function Ia(){var a=i.Promise;return di?{Promise:a,PromiseProp:Object.getOwnPropertyDescriptor(i,"Promise"),all:a.all,race:a.race,allSettled:a.allSettled,any:a.any,resolve:a.resolve,reject:a.reject}:{}}function sn(a,c,d,f,p){var b=le;try{return Kt(a,!0),c(d,f,p)}finally{Kt(b,!1)}}function Aa(a,c,d,f){return typeof a!="function"?a:function(){var p=le;d&&_n(),Kt(c,!0);try{return a.apply(this,arguments)}finally{Kt(p,!1),f&&queueMicrotask(Ht)}}}function wi(a){Promise===tn&&Me.echoes===0?Hr===0?a():enqueueNativeMicroTask(a):setTimeout(a,0)}(""+wt).indexOf("[native code]")===-1&&(_n=Ht=$e);var Re=te.reject,on="￿",Lt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Ra="String expected.",Sn=[],Gr="__dbnames",yi="readonly",vi="readwrite";function an(a,c){return a?c?function(){return a.apply(this,arguments)&&c.apply(this,arguments)}:a:c}var Oa={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Wr(a){return typeof a!="string"||/\./.test(a)?function(c){return c}:function(c){return c[a]===void 0&&a in c&&delete(c=ce(c))[a],c}}function Da(){throw ue.Type()}function be(a,c){try{var d=Pa(a),f=Pa(c);if(d!==f)return d==="Array"?1:f==="Array"?-1:d==="binary"?1:f==="binary"?-1:d==="string"?1:f==="string"?-1:d==="Date"?1:f!=="Date"?NaN:-1;switch(d){case"number":case"Date":case"string":return c<a?1:a<c?-1:0;case"binary":return(function(p,b){for(var v=p.length,k=b.length,S=v<k?v:k,T=0;T<S;++T)if(p[T]!==b[T])return p[T]<b[T]?-1:1;return v===k?0:v<k?-1:1})(La(a),La(c));case"Array":return(function(p,b){for(var v=p.length,k=b.length,S=v<k?v:k,T=0;T<S;++T){var O=be(p[T],b[T]);if(O!==0)return O}return v===k?0:v<k?-1:1})(a,c)}}catch{}return NaN}function Pa(a){var c=typeof a;return c!="object"?c:ArrayBuffer.isView(a)?"binary":(a=Te(a),a==="ArrayBuffer"?"binary":a)}function La(a){return a instanceof Uint8Array?a:ArrayBuffer.isView(a)?new Uint8Array(a.buffer,a.byteOffset,a.byteLength):new Uint8Array(a)}var Ma=(ke.prototype._trans=function(a,c,d){var f=this._tx||le.trans,p=this.name,b=Et&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(a==="readonly"?"read":"write"," ").concat(this.name));function v(T,O,_){if(!_.schema[p])throw new ue.NotFound("Table "+p+" not part of transaction");return c(_.idbtrans,_)}var k=kn();try{var S=f&&f.db._novip===this.db._novip?f===le.trans?f._promise(a,v,d):qt(function(){return f._promise(a,v,d)},{trans:f,transless:le.transless||le}):(function T(O,_,P,E){if(O.idbdb&&(O._state.openComplete||le.letThrough||O._vip)){var R=O._createTransaction(_,P,O._dbSchema);try{R.create(),O._state.PR1398_maxLoop=3}catch(D){return D.name===ci.InvalidState&&O.isOpen()&&0<--O._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),O.close({disableAutoOpen:!1}),O.open().then(function(){return T(O,_,P,E)})):Re(D)}return R._promise(_,function(D,I){return qt(function(){return le.trans=R,E(D,I,R)})}).then(function(D){if(_==="readwrite")try{R.idbtrans.commit()}catch{}return _==="readonly"?D:R._completion.then(function(){return D})})}if(O._state.openComplete)return Re(new ue.DatabaseClosed(O._state.dbOpenError));if(!O._state.isBeingOpened){if(!O._state.autoOpen)return Re(new ue.DatabaseClosed);O.open().catch($e)}return O._state.dbReadyPromise.then(function(){return T(O,_,P,E)})})(this.db,a,[this.name],v);return b&&(S._consoleTask=b,S=S.catch(function(T){return console.trace(T),Re(T)})),S}finally{k&&Cn()}},ke.prototype.get=function(a,c){var d=this;return a&&a.constructor===Object?this.where(a).first(c):a==null?Re(new ue.Type("Invalid argument to Table.get()")):this._trans("readonly",function(f){return d.core.get({trans:f,key:a}).then(function(p){return d.hook.reading.fire(p)})}).then(c)},ke.prototype.where=function(a){if(typeof a=="string")return new this.db.WhereClause(this,a);if(l(a))return new this.db.WhereClause(this,"[".concat(a.join("+"),"]"));var c=o(a);if(c.length===1)return this.where(c[0]).equals(a[c[0]]);var d=this.schema.indexes.concat(this.schema.primKey).filter(function(k){if(k.compound&&c.every(function(T){return 0<=k.keyPath.indexOf(T)})){for(var S=0;S<c.length;++S)if(c.indexOf(k.keyPath[S])===-1)return!1;return!0}return!1}).sort(function(k,S){return k.keyPath.length-S.keyPath.length})[0];if(d&&this.db._maxKey!==on){var b=d.keyPath.slice(0,c.length);return this.where(b).equals(b.map(function(S){return a[S]}))}!d&&Et&&console.warn("The query ".concat(JSON.stringify(a)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(c.join("+"),"]"));var f=this.schema.idxByName;function p(k,S){return be(k,S)===0}var v=c.reduce(function(_,S){var T=_[0],O=_[1],_=f[S],P=a[S];return[T||_,T||!_?an(O,_&&_.multi?function(E){return E=ne(E,S),l(E)&&E.some(function(R){return p(P,R)})}:function(E){return p(P,ne(E,S))}):O]},[null,null]),b=v[0],v=v[1];return b?this.where(b.name).equals(a[b.keyPath]).filter(v):d?this.filter(v):this.where(c).equals("")},ke.prototype.filter=function(a){return this.toCollection().and(a)},ke.prototype.count=function(a){return this.toCollection().count(a)},ke.prototype.offset=function(a){return this.toCollection().offset(a)},ke.prototype.limit=function(a){return this.toCollection().limit(a)},ke.prototype.each=function(a){return this.toCollection().each(a)},ke.prototype.toArray=function(a){return this.toCollection().toArray(a)},ke.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},ke.prototype.orderBy=function(a){return new this.db.Collection(new this.db.WhereClause(this,l(a)?"[".concat(a.join("+"),"]"):a))},ke.prototype.reverse=function(){return this.toCollection().reverse()},ke.prototype.mapToClass=function(a){var c,d=this.db,f=this.name;function p(){return c!==null&&c.apply(this,arguments)||this}(this.schema.mappedClass=a).prototype instanceof Da&&((function(S,T){if(typeof T!="function"&&T!==null)throw new TypeError("Class extends value "+String(T)+" is not a constructor or null");function O(){this.constructor=S}n(S,T),S.prototype=T===null?Object.create(T):(O.prototype=T.prototype,new O)})(p,c=a),Object.defineProperty(p.prototype,"db",{get:function(){return d},enumerable:!1,configurable:!0}),p.prototype.table=function(){return f},a=p);for(var b=new Set,v=a.prototype;v;v=h(v))Object.getOwnPropertyNames(v).forEach(function(S){return b.add(S)});function k(S){if(!S)return S;var T,O=Object.create(a.prototype);for(T in S)if(!b.has(T))try{O[T]=S[T]}catch{}return O}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=k,this.hook("reading",k),a},ke.prototype.defineClass=function(){return this.mapToClass(function(a){u(this,a)})},ke.prototype.add=function(a,c){var d=this,f=this.schema.primKey,p=f.auto,b=f.keyPath,v=a;return b&&p&&(v=Wr(b)(a)),this._trans("readwrite",function(k){return d.core.mutate({trans:k,type:"add",keys:c!=null?[c]:null,values:[v]})}).then(function(k){return k.numFailures?te.reject(k.failures[0]):k.lastResult}).then(function(k){if(b)try{B(a,b,k)}catch{}return k})},ke.prototype.update=function(a,c){return typeof a!="object"||l(a)?this.where(":id").equals(a).modify(c):(a=ne(a,this.schema.primKey.keyPath),a===void 0?Re(new ue.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(a).modify(c))},ke.prototype.put=function(a,c){var d=this,f=this.schema.primKey,p=f.auto,b=f.keyPath,v=a;return b&&p&&(v=Wr(b)(a)),this._trans("readwrite",function(k){return d.core.mutate({trans:k,type:"put",values:[v],keys:c!=null?[c]:null})}).then(function(k){return k.numFailures?te.reject(k.failures[0]):k.lastResult}).then(function(k){if(b)try{B(a,b,k)}catch{}return k})},ke.prototype.delete=function(a){var c=this;return this._trans("readwrite",function(d){return c.core.mutate({trans:d,type:"delete",keys:[a]})}).then(function(d){return d.numFailures?te.reject(d.failures[0]):void 0})},ke.prototype.clear=function(){var a=this;return this._trans("readwrite",function(c){return a.core.mutate({trans:c,type:"deleteRange",range:Oa})}).then(function(c){return c.numFailures?te.reject(c.failures[0]):void 0})},ke.prototype.bulkGet=function(a){var c=this;return this._trans("readonly",function(d){return c.core.getMany({keys:a,trans:d}).then(function(f){return f.map(function(p){return c.hook.reading.fire(p)})})})},ke.prototype.bulkAdd=function(a,c,d){var f=this,p=Array.isArray(c)?c:void 0,b=(d=d||(p?void 0:c))?d.allKeys:void 0;return this._trans("readwrite",function(v){var T=f.schema.primKey,k=T.auto,T=T.keyPath;if(T&&p)throw new ue.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(p&&p.length!==a.length)throw new ue.InvalidArgument("Arguments objects and keys must have the same length");var S=a.length,T=T&&k?a.map(Wr(T)):a;return f.core.mutate({trans:v,type:"add",keys:p,values:T,wantResults:b}).then(function(R){var _=R.numFailures,P=R.results,E=R.lastResult,R=R.failures;if(_===0)return b?P:E;throw new xn("".concat(f.name,".bulkAdd(): ").concat(_," of ").concat(S," operations failed"),R)})})},ke.prototype.bulkPut=function(a,c,d){var f=this,p=Array.isArray(c)?c:void 0,b=(d=d||(p?void 0:c))?d.allKeys:void 0;return this._trans("readwrite",function(v){var T=f.schema.primKey,k=T.auto,T=T.keyPath;if(T&&p)throw new ue.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(p&&p.length!==a.length)throw new ue.InvalidArgument("Arguments objects and keys must have the same length");var S=a.length,T=T&&k?a.map(Wr(T)):a;return f.core.mutate({trans:v,type:"put",keys:p,values:T,wantResults:b}).then(function(R){var _=R.numFailures,P=R.results,E=R.lastResult,R=R.failures;if(_===0)return b?P:E;throw new xn("".concat(f.name,".bulkPut(): ").concat(_," of ").concat(S," operations failed"),R)})})},ke.prototype.bulkUpdate=function(a){var c=this,d=this.core,f=a.map(function(v){return v.key}),p=a.map(function(v){return v.changes}),b=[];return this._trans("readwrite",function(v){return d.getMany({trans:v,keys:f,cache:"clone"}).then(function(k){var S=[],T=[];a.forEach(function(_,P){var E=_.key,R=_.changes,D=k[P];if(D){for(var I=0,j=Object.keys(R);I<j.length;I++){var N=j[I],z=R[N];if(N===c.schema.primKey.keyPath){if(be(z,E)!==0)throw new ue.Constraint("Cannot update primary key in bulkUpdate()")}else B(D,N,z)}b.push(P),S.push(E),T.push(D)}});var O=S.length;return d.mutate({trans:v,type:"put",keys:S,values:T,updates:{keys:f,changeSpecs:p}}).then(function(_){var P=_.numFailures,E=_.failures;if(P===0)return O;for(var R=0,D=Object.keys(E);R<D.length;R++){var I,j=D[R],N=b[Number(j)];N!=null&&(I=E[j],delete E[j],E[N]=I)}throw new xn("".concat(c.name,".bulkUpdate(): ").concat(P," of ").concat(O," operations failed"),E)})})})},ke.prototype.bulkDelete=function(a){var c=this,d=a.length;return this._trans("readwrite",function(f){return c.core.mutate({trans:f,type:"delete",keys:a})}).then(function(v){var p=v.numFailures,b=v.lastResult,v=v.failures;if(p===0)return b;throw new xn("".concat(c.name,".bulkDelete(): ").concat(p," of ").concat(d," operations failed"),v)})},ke);function ke(){}function Zn(a){function c(v,k){if(k){for(var S=arguments.length,T=new Array(S-1);--S;)T[S-1]=arguments[S];return d[v].subscribe.apply(null,T),a}if(typeof v=="string")return d[v]}var d={};c.addEventType=b;for(var f=1,p=arguments.length;f<p;++f)b(arguments[f]);return c;function b(v,k,S){if(typeof v!="object"){var T;k=k||lh;var O={subscribers:[],fire:S=S||$e,subscribe:function(_){O.subscribers.indexOf(_)===-1&&(O.subscribers.push(_),O.fire=k(O.fire,_))},unsubscribe:function(_){O.subscribers=O.subscribers.filter(function(P){return P!==_}),O.fire=O.subscribers.reduce(k,S)}};return d[v]=c[v]=O}o(T=v).forEach(function(_){var P=T[_];if(l(P))b(_,T[_][0],T[_][1]);else{if(P!=="asap")throw new ue.InvalidArgument("Invalid event config");var E=b(_,Wn,function(){for(var R=arguments.length,D=new Array(R);R--;)D[R]=arguments[R];E.subscribers.forEach(function(I){Q(function(){I.apply(null,D)})})})}})}}function er(a,c){return x(c).from({prototype:a}),c}function En(a,c){return!(a.filter||a.algorithm||a.or)&&(c?a.justLimit:!a.replayFilter)}function $i(a,c){a.filter=an(a.filter,c)}function xi(a,c,d){var f=a.replayFilter;a.replayFilter=f?function(){return an(f(),c())}:c,a.justLimit=d&&!f}function Yr(a,c){if(a.isPrimKey)return c.primaryKey;var d=c.getIndexByKeyPath(a.index);if(!d)throw new ue.Schema("KeyPath "+a.index+" on object store "+c.name+" is not indexed");return d}function ja(a,c,d){var f=Yr(a,c.schema);return c.openCursor({trans:d,values:!a.keysOnly,reverse:a.dir==="prev",unique:!!a.unique,query:{index:f,range:a.range}})}function Qr(a,c,d,f){var p=a.replayFilter?an(a.filter,a.replayFilter()):a.filter;if(a.or){var b={},v=function(k,S,T){var O,_;p&&!p(S,T,function(P){return S.stop(P)},function(P){return S.fail(P)})||((_=""+(O=S.primaryKey))=="[object ArrayBuffer]"&&(_=""+new Uint8Array(O)),g(b,_)||(b[_]=!0,c(k,S,T)))};return Promise.all([a.or._iterate(v,d),Na(ja(a,f,d),a.algorithm,v,!a.keysOnly&&a.valueMapper)])}return Na(ja(a,f,d),an(a.algorithm,p),c,!a.keysOnly&&a.valueMapper)}function Na(a,c,d,f){var p=Ee(f?function(b,v,k){return d(f(b),v,k)}:d);return a.then(function(b){if(b)return b.start(function(){var v=function(){return b.continue()};c&&!c(b,function(k){return v=k},function(k){b.stop(k),v=$e},function(k){b.fail(k),v=$e})||p(b.value,b,function(k){return v=k}),v()})})}var Mt=Symbol(),tr=(za.prototype.execute=function(a){if(this.add!==void 0){var c=this.add;if(l(c))return s(s([],l(a)?a:[],!0),c).sort();if(typeof c=="number")return(Number(a)||0)+c;if(typeof c=="bigint")try{return BigInt(a)+c}catch{return BigInt(0)+c}throw new TypeError("Invalid term ".concat(c))}if(this.remove!==void 0){var d=this.remove;if(l(d))return l(a)?a.filter(function(f){return!d.includes(f)}).sort():[];if(typeof d=="number")return Number(a)-d;if(typeof d=="bigint")try{return BigInt(a)-d}catch{return BigInt(0)-d}throw new TypeError("Invalid subtrahend ".concat(d))}return c=(c=this.replacePrefix)===null||c===void 0?void 0:c[0],c&&typeof a=="string"&&a.startsWith(c)?this.replacePrefix[1]+a.substring(c.length):a},za);function za(a){Object.assign(this,a)}var ph=(we.prototype._read=function(a,c){var d=this._ctx;return d.error?d.table._trans(null,Re.bind(null,d.error)):d.table._trans("readonly",a).then(c)},we.prototype._write=function(a){var c=this._ctx;return c.error?c.table._trans(null,Re.bind(null,c.error)):c.table._trans("readwrite",a,"locked")},we.prototype._addAlgorithm=function(a){var c=this._ctx;c.algorithm=an(c.algorithm,a)},we.prototype._iterate=function(a,c){return Qr(this._ctx,a,c,this._ctx.table.core)},we.prototype.clone=function(a){var c=Object.create(this.constructor.prototype),d=Object.create(this._ctx);return a&&u(d,a),c._ctx=d,c},we.prototype.raw=function(){return this._ctx.valueMapper=null,this},we.prototype.each=function(a){var c=this._ctx;return this._read(function(d){return Qr(c,a,d,c.table.core)})},we.prototype.count=function(a){var c=this;return this._read(function(d){var f=c._ctx,p=f.table.core;if(En(f,!0))return p.count({trans:d,query:{index:Yr(f,p.schema),range:f.range}}).then(function(v){return Math.min(v,f.limit)});var b=0;return Qr(f,function(){return++b,!1},d,p).then(function(){return b})}).then(a)},we.prototype.sortBy=function(a,c){var d=a.split(".").reverse(),f=d[0],p=d.length-1;function b(S,T){return T?b(S[d[T]],T-1):S[f]}var v=this._ctx.dir==="next"?1:-1;function k(S,T){return be(b(S,p),b(T,p))*v}return this.toArray(function(S){return S.sort(k)}).then(c)},we.prototype.toArray=function(a){var c=this;return this._read(function(d){var f=c._ctx;if(f.dir==="next"&&En(f,!0)&&0<f.limit){var p=f.valueMapper,b=Yr(f,f.table.core.schema);return f.table.core.query({trans:d,limit:f.limit,values:!0,query:{index:b,range:f.range}}).then(function(k){return k=k.result,p?k.map(p):k})}var v=[];return Qr(f,function(k){return v.push(k)},d,f.table.core).then(function(){return v})},a)},we.prototype.offset=function(a){var c=this._ctx;return a<=0||(c.offset+=a,En(c)?xi(c,function(){var d=a;return function(f,p){return d===0||(d===1?--d:p(function(){f.advance(d),d=0}),!1)}}):xi(c,function(){var d=a;return function(){return--d<0}})),this},we.prototype.limit=function(a){return this._ctx.limit=Math.min(this._ctx.limit,a),xi(this._ctx,function(){var c=a;return function(d,f,p){return--c<=0&&f(p),0<=c}},!0),this},we.prototype.until=function(a,c){return $i(this._ctx,function(d,f,p){return!a(d.value)||(f(p),c)}),this},we.prototype.first=function(a){return this.limit(1).toArray(function(c){return c[0]}).then(a)},we.prototype.last=function(a){return this.reverse().first(a)},we.prototype.filter=function(a){var c;return $i(this._ctx,function(d){return a(d.value)}),(c=this._ctx).isMatch=an(c.isMatch,a),this},we.prototype.and=function(a){return this.filter(a)},we.prototype.or=function(a){return new this.db.WhereClause(this._ctx.table,a,this)},we.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},we.prototype.desc=function(){return this.reverse()},we.prototype.eachKey=function(a){var c=this._ctx;return c.keysOnly=!c.isMatch,this.each(function(d,f){a(f.key,f)})},we.prototype.eachUniqueKey=function(a){return this._ctx.unique="unique",this.eachKey(a)},we.prototype.eachPrimaryKey=function(a){var c=this._ctx;return c.keysOnly=!c.isMatch,this.each(function(d,f){a(f.primaryKey,f)})},we.prototype.keys=function(a){var c=this._ctx;c.keysOnly=!c.isMatch;var d=[];return this.each(function(f,p){d.push(p.key)}).then(function(){return d}).then(a)},we.prototype.primaryKeys=function(a){var c=this._ctx;if(c.dir==="next"&&En(c,!0)&&0<c.limit)return this._read(function(f){var p=Yr(c,c.table.core.schema);return c.table.core.query({trans:f,values:!1,limit:c.limit,query:{index:p,range:c.range}})}).then(function(f){return f.result}).then(a);c.keysOnly=!c.isMatch;var d=[];return this.each(function(f,p){d.push(p.primaryKey)}).then(function(){return d}).then(a)},we.prototype.uniqueKeys=function(a){return this._ctx.unique="unique",this.keys(a)},we.prototype.firstKey=function(a){return this.limit(1).keys(function(c){return c[0]}).then(a)},we.prototype.lastKey=function(a){return this.reverse().firstKey(a)},we.prototype.distinct=function(){var a=this._ctx,a=a.index&&a.table.schema.idxByName[a.index];if(!a||!a.multi)return this;var c={};return $i(this._ctx,function(p){var f=p.primaryKey.toString(),p=g(c,f);return c[f]=!0,!p}),this},we.prototype.modify=function(a){var c=this,d=this._ctx;return this._write(function(f){var p,b,v;v=typeof a=="function"?a:(p=o(a),b=p.length,function(I){for(var j=!1,N=0;N<b;++N){var z=p[N],q=a[z],W=ne(I,z);q instanceof tr?(B(I,z,q.execute(W)),j=!0):W!==q&&(B(I,z,q),j=!0)}return j});var k=d.table.core,_=k.schema.primaryKey,S=_.outbound,T=_.extractKey,O=200,_=c.db._options.modifyChunkSize;_&&(O=typeof _=="object"?_[k.name]||_["*"]||200:_);function P(I,z){var N=z.failures,z=z.numFailures;R+=I-z;for(var q=0,W=o(N);q<W.length;q++){var Z=W[q];E.push(N[Z])}}var E=[],R=0,D=[];return c.clone().primaryKeys().then(function(I){function j(z){var q=Math.min(O,I.length-z);return k.getMany({trans:f,keys:I.slice(z,z+q),cache:"immutable"}).then(function(W){for(var Z=[],Y=[],X=S?[]:null,ee=[],J=0;J<q;++J){var oe=W[J],fe={value:ce(oe),primKey:I[z+J]};v.call(fe,fe.value,fe)!==!1&&(fe.value==null?ee.push(I[z+J]):S||be(T(oe),T(fe.value))===0?(Y.push(fe.value),S&&X.push(I[z+J])):(ee.push(I[z+J]),Z.push(fe.value)))}return Promise.resolve(0<Z.length&&k.mutate({trans:f,type:"add",values:Z}).then(function(me){for(var ge in me.failures)ee.splice(parseInt(ge),1);P(Z.length,me)})).then(function(){return(0<Y.length||N&&typeof a=="object")&&k.mutate({trans:f,type:"put",keys:X,values:Y,criteria:N,changeSpec:typeof a!="function"&&a,isAdditionalChunk:0<z}).then(function(me){return P(Y.length,me)})}).then(function(){return(0<ee.length||N&&a===ki)&&k.mutate({trans:f,type:"delete",keys:ee,criteria:N,isAdditionalChunk:0<z}).then(function(me){return P(ee.length,me)})}).then(function(){return I.length>z+q&&j(z+O)})})}var N=En(d)&&d.limit===1/0&&(typeof a!="function"||a===ki)&&{index:d.index,range:d.range};return j(0).then(function(){if(0<E.length)throw new $n("Error modifying one or more objects",E,R,D);return I.length})})})},we.prototype.delete=function(){var a=this._ctx,c=a.range;return En(a)&&(a.isPrimKey||c.type===3)?this._write(function(d){var f=a.table.core.schema.primaryKey,p=c;return a.table.core.count({trans:d,query:{index:f,range:p}}).then(function(b){return a.table.core.mutate({trans:d,type:"deleteRange",range:p}).then(function(v){var k=v.failures;if(v.lastResult,v.results,v=v.numFailures,v)throw new $n("Could not delete some values",Object.keys(k).map(function(S){return k[S]}),b-v);return b-v})})}):this.modify(ki)},we);function we(){}var ki=function(a,c){return c.value=null};function mh(a,c){return a<c?-1:a===c?0:1}function gh(a,c){return c<a?-1:a===c?0:1}function nt(a,c,d){return a=a instanceof Fa?new a.Collection(a):a,a._ctx.error=new(d||TypeError)(c),a}function Tn(a){return new a.Collection(a,function(){return Ua("")}).limit(0)}function Xr(a,c,d,f){var p,b,v,k,S,T,O,_=d.length;if(!d.every(function(R){return typeof R=="string"}))return nt(a,Ra);function P(R){p=R==="next"?function(I){return I.toUpperCase()}:function(I){return I.toLowerCase()},b=R==="next"?function(I){return I.toLowerCase()}:function(I){return I.toUpperCase()},v=R==="next"?mh:gh;var D=d.map(function(I){return{lower:b(I),upper:p(I)}}).sort(function(I,j){return v(I.lower,j.lower)});k=D.map(function(I){return I.upper}),S=D.map(function(I){return I.lower}),O=(T=R)==="next"?"":f}P("next"),a=new a.Collection(a,function(){return Vt(k[0],S[_-1]+f)}),a._ondirectionchange=function(R){P(R)};var E=0;return a._addAlgorithm(function(R,D,I){var j=R.key;if(typeof j!="string")return!1;var N=b(j);if(c(N,S,E))return!0;for(var z=null,q=E;q<_;++q){var W=(function(Z,Y,X,ee,J,oe){for(var fe=Math.min(Z.length,ee.length),me=-1,ge=0;ge<fe;++ge){var rt=Y[ge];if(rt!==ee[ge])return J(Z[ge],X[ge])<0?Z.substr(0,ge)+X[ge]+X.substr(ge+1):J(Z[ge],ee[ge])<0?Z.substr(0,ge)+ee[ge]+X.substr(ge+1):0<=me?Z.substr(0,me)+Y[me]+X.substr(me+1):null;J(Z[ge],rt)<0&&(me=ge)}return fe<ee.length&&oe==="next"?Z+X.substr(Z.length):fe<Z.length&&oe==="prev"?Z.substr(0,X.length):me<0?null:Z.substr(0,me)+ee[me]+X.substr(me+1)})(j,N,k[q],S[q],v,T);W===null&&z===null?E=q+1:(z===null||0<v(z,W))&&(z=W)}return D(z!==null?function(){R.continue(z+O)}:I),!1}),a}function Vt(a,c,d,f){return{type:2,lower:a,upper:c,lowerOpen:d,upperOpen:f}}function Ua(a){return{type:1,lower:a,upper:a}}var Fa=(Object.defineProperty(je.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),je.prototype.between=function(a,c,d,f){d=d!==!1,f=f===!0;try{return 0<this._cmp(a,c)||this._cmp(a,c)===0&&(d||f)&&(!d||!f)?Tn(this):new this.Collection(this,function(){return Vt(a,c,!d,!f)})}catch{return nt(this,Lt)}},je.prototype.equals=function(a){return a==null?nt(this,Lt):new this.Collection(this,function(){return Ua(a)})},je.prototype.above=function(a){return a==null?nt(this,Lt):new this.Collection(this,function(){return Vt(a,void 0,!0)})},je.prototype.aboveOrEqual=function(a){return a==null?nt(this,Lt):new this.Collection(this,function(){return Vt(a,void 0,!1)})},je.prototype.below=function(a){return a==null?nt(this,Lt):new this.Collection(this,function(){return Vt(void 0,a,!1,!0)})},je.prototype.belowOrEqual=function(a){return a==null?nt(this,Lt):new this.Collection(this,function(){return Vt(void 0,a)})},je.prototype.startsWith=function(a){return typeof a!="string"?nt(this,Ra):this.between(a,a+on,!0,!0)},je.prototype.startsWithIgnoreCase=function(a){return a===""?this.startsWith(a):Xr(this,function(c,d){return c.indexOf(d[0])===0},[a],on)},je.prototype.equalsIgnoreCase=function(a){return Xr(this,function(c,d){return c===d[0]},[a],"")},je.prototype.anyOfIgnoreCase=function(){var a=Ae.apply(Pe,arguments);return a.length===0?Tn(this):Xr(this,function(c,d){return d.indexOf(c)!==-1},a,"")},je.prototype.startsWithAnyOfIgnoreCase=function(){var a=Ae.apply(Pe,arguments);return a.length===0?Tn(this):Xr(this,function(c,d){return d.some(function(f){return c.indexOf(f)===0})},a,on)},je.prototype.anyOf=function(){var a=this,c=Ae.apply(Pe,arguments),d=this._cmp;try{c.sort(d)}catch{return nt(this,Lt)}if(c.length===0)return Tn(this);var f=new this.Collection(this,function(){return Vt(c[0],c[c.length-1])});f._ondirectionchange=function(b){d=b==="next"?a._ascending:a._descending,c.sort(d)};var p=0;return f._addAlgorithm(function(b,v,k){for(var S=b.key;0<d(S,c[p]);)if(++p===c.length)return v(k),!1;return d(S,c[p])===0||(v(function(){b.continue(c[p])}),!1)}),f},je.prototype.notEqual=function(a){return this.inAnyRange([[-1/0,a],[a,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},je.prototype.noneOf=function(){var a=Ae.apply(Pe,arguments);if(a.length===0)return new this.Collection(this);try{a.sort(this._ascending)}catch{return nt(this,Lt)}var c=a.reduce(function(d,f){return d?d.concat([[d[d.length-1][1],f]]):[[-1/0,f]]},null);return c.push([a[a.length-1],this.db._maxKey]),this.inAnyRange(c,{includeLowers:!1,includeUppers:!1})},je.prototype.inAnyRange=function(j,c){var d=this,f=this._cmp,p=this._ascending,b=this._descending,v=this._min,k=this._max;if(j.length===0)return Tn(this);if(!j.every(function(N){return N[0]!==void 0&&N[1]!==void 0&&p(N[0],N[1])<=0}))return nt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ue.InvalidArgument);var S=!c||c.includeLowers!==!1,T=c&&c.includeUppers===!0,O,_=p;function P(N,z){return _(N[0],z[0])}try{(O=j.reduce(function(N,z){for(var q=0,W=N.length;q<W;++q){var Z=N[q];if(f(z[0],Z[1])<0&&0<f(z[1],Z[0])){Z[0]=v(Z[0],z[0]),Z[1]=k(Z[1],z[1]);break}}return q===W&&N.push(z),N},[])).sort(P)}catch{return nt(this,Lt)}var E=0,R=T?function(N){return 0<p(N,O[E][1])}:function(N){return 0<=p(N,O[E][1])},D=S?function(N){return 0<b(N,O[E][0])}:function(N){return 0<=b(N,O[E][0])},I=R,j=new this.Collection(this,function(){return Vt(O[0][0],O[O.length-1][1],!S,!T)});return j._ondirectionchange=function(N){_=N==="next"?(I=R,p):(I=D,b),O.sort(P)},j._addAlgorithm(function(N,z,q){for(var W,Z=N.key;I(Z);)if(++E===O.length)return z(q),!1;return!R(W=Z)&&!D(W)||(d._cmp(Z,O[E][1])===0||d._cmp(Z,O[E][0])===0||z(function(){_===p?N.continue(O[E][0]):N.continue(O[E][1])}),!1)}),j},je.prototype.startsWithAnyOf=function(){var a=Ae.apply(Pe,arguments);return a.every(function(c){return typeof c=="string"})?a.length===0?Tn(this):this.inAnyRange(a.map(function(c){return[c,c+on]})):nt(this,"startsWithAnyOf() only works with strings")},je);function je(){}function Tt(a){return Ee(function(c){return nr(c),a(c.target.error),!1})}function nr(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault()}var rr="storagemutated",Ci="x-storagemutated-1",Gt=Zn(null,rr),bh=(It.prototype._lock=function(){return V(!le.global),++this._reculock,this._reculock!==1||le.global||(le.lockOwnerFor=this),this},It.prototype._unlock=function(){if(V(!le.global),--this._reculock==0)for(le.global||(le.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var a=this._blockedFuncs.shift();try{sn(a[1],a[0])}catch{}}return this},It.prototype._locked=function(){return this._reculock&&le.lockOwnerFor!==this},It.prototype.create=function(a){var c=this;if(!this.mode)return this;var d=this.db.idbdb,f=this.db._state.dbOpenError;if(V(!this.idbtrans),!a&&!d)switch(f&&f.name){case"DatabaseClosedError":throw new ue.DatabaseClosed(f);case"MissingAPIError":throw new ue.MissingAPI(f.message,f);default:throw new ue.OpenFailed(f)}if(!this.active)throw new ue.TransactionInactive;return V(this._completion._state===null),(a=this.idbtrans=a||(this.db.core||d).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Ee(function(p){nr(p),c._reject(a.error)}),a.onabort=Ee(function(p){nr(p),c.active&&c._reject(new ue.Abort(a.error)),c.active=!1,c.on("abort").fire(p)}),a.oncomplete=Ee(function(){c.active=!1,c._resolve(),"mutatedParts"in a&&Gt.storagemutated.fire(a.mutatedParts)}),this},It.prototype._promise=function(a,c,d){var f=this;if(a==="readwrite"&&this.mode!=="readwrite")return Re(new ue.ReadOnly("Transaction is readonly"));if(!this.active)return Re(new ue.TransactionInactive);if(this._locked())return new te(function(b,v){f._blockedFuncs.push([function(){f._promise(a,c,d).then(b,v)},le])});if(d)return qt(function(){var b=new te(function(v,k){f._lock();var S=c(v,k,f);S&&S.then&&S.then(v,k)});return b.finally(function(){return f._unlock()}),b._lib=!0,b});var p=new te(function(b,v){var k=c(b,v,f);k&&k.then&&k.then(b,v)});return p._lib=!0,p},It.prototype._root=function(){return this.parent?this.parent._root():this},It.prototype.waitFor=function(a){var c,d=this._root(),f=te.resolve(a);d._waitingFor?d._waitingFor=d._waitingFor.then(function(){return f}):(d._waitingFor=f,d._waitingQueue=[],c=d.idbtrans.objectStore(d.storeNames[0]),(function b(){for(++d._spinCount;d._waitingQueue.length;)d._waitingQueue.shift()();d._waitingFor&&(c.get(-1/0).onsuccess=b)})());var p=d._waitingFor;return new te(function(b,v){f.then(function(k){return d._waitingQueue.push(Ee(b.bind(null,k)))},function(k){return d._waitingQueue.push(Ee(v.bind(null,k)))}).finally(function(){d._waitingFor===p&&(d._waitingFor=null)})})},It.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ue.Abort))},It.prototype.table=function(a){var c=this._memoizedTables||(this._memoizedTables={});if(g(c,a))return c[a];var d=this.schema[a];if(!d)throw new ue.NotFound("Table "+a+" not part of transaction");return d=new this.db.Table(a,d,this),d.core=this.db.core.table(a),c[a]=d},It);function It(){}function _i(a,c,d,f,p,b,v){return{name:a,keyPath:c,unique:d,multi:f,auto:p,compound:b,src:(d&&!v?"&":"")+(f?"*":"")+(p?"++":"")+Ba(c)}}function Ba(a){return typeof a=="string"?a:a?"["+[].join.call(a,"+")+"]":""}function Si(a,c,d){return{name:a,primKey:c,indexes:d,mappedClass:null,idxByName:(f=function(p){return[p.name,p]},d.reduce(function(p,b,v){return v=f(b,v),v&&(p[v[0]]=v[1]),p},{}))};var f}var sr=function(a){try{return a.only([[]]),sr=function(){return[[]]},[[]]}catch{return sr=function(){return on},on}};function Ei(a){return a==null?function(){}:typeof a=="string"?(c=a).split(".").length===1?function(d){return d[c]}:function(d){return ne(d,c)}:function(d){return ne(d,a)};var c}function qa(a){return[].slice.call(a)}var wh=0;function ir(a){return a==null?":id":typeof a=="string"?a:"[".concat(a.join("+"),"]")}function yh(a,c,S){function f(I){if(I.type===3)return null;if(I.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var E=I.lower,R=I.upper,D=I.lowerOpen,I=I.upperOpen;return E===void 0?R===void 0?null:c.upperBound(R,!!I):R===void 0?c.lowerBound(E,!!D):c.bound(E,R,!!D,!!I)}function p(P){var E,R=P.name;return{name:R,schema:P,mutate:function(D){var I=D.trans,j=D.type,N=D.keys,z=D.values,q=D.range;return new Promise(function(W,Z){W=Ee(W);var Y=I.objectStore(R),X=Y.keyPath==null,ee=j==="put"||j==="add";if(!ee&&j!=="delete"&&j!=="deleteRange")throw new Error("Invalid operation type: "+j);var J,oe=(N||z||{length:1}).length;if(N&&z&&N.length!==z.length)throw new Error("Given keys array must have same length as given values array.");if(oe===0)return W({numFailures:0,failures:{},results:[],lastResult:void 0});function fe(Ye){++rt,nr(Ye)}var me=[],ge=[],rt=0;if(j==="deleteRange"){if(q.type===4)return W({numFailures:rt,failures:ge,results:[],lastResult:void 0});q.type===3?me.push(J=Y.clear()):me.push(J=Y.delete(f(q)))}else{var X=ee?X?[z,N]:[z,null]:[N,null],he=X[0],Ge=X[1];if(ee)for(var We=0;We<oe;++We)me.push(J=Ge&&Ge[We]!==void 0?Y[j](he[We],Ge[We]):Y[j](he[We])),J.onerror=fe;else for(We=0;We<oe;++We)me.push(J=Y[j](he[We])),J.onerror=fe}function us(Ye){Ye=Ye.target.result,me.forEach(function(un,Ki){return un.error!=null&&(ge[Ki]=un.error)}),W({numFailures:rt,failures:ge,results:j==="delete"?N:me.map(function(un){return un.result}),lastResult:Ye})}J.onerror=function(Ye){fe(Ye),us(Ye)},J.onsuccess=us})},getMany:function(D){var I=D.trans,j=D.keys;return new Promise(function(N,z){N=Ee(N);for(var q,W=I.objectStore(R),Z=j.length,Y=new Array(Z),X=0,ee=0,J=function(me){me=me.target,Y[me._pos]=me.result,++ee===X&&N(Y)},oe=Tt(z),fe=0;fe<Z;++fe)j[fe]!=null&&((q=W.get(j[fe]))._pos=fe,q.onsuccess=J,q.onerror=oe,++X);X===0&&N(Y)})},get:function(D){var I=D.trans,j=D.key;return new Promise(function(N,z){N=Ee(N);var q=I.objectStore(R).get(j);q.onsuccess=function(W){return N(W.target.result)},q.onerror=Tt(z)})},query:(E=T,function(D){return new Promise(function(I,j){I=Ee(I);var N,z,q,X=D.trans,W=D.values,Z=D.limit,J=D.query,Y=Z===1/0?void 0:Z,ee=J.index,J=J.range,X=X.objectStore(R),ee=ee.isPrimaryKey?X:X.index(ee.name),J=f(J);if(Z===0)return I({result:[]});E?((Y=W?ee.getAll(J,Y):ee.getAllKeys(J,Y)).onsuccess=function(oe){return I({result:oe.target.result})},Y.onerror=Tt(j)):(N=0,z=!W&&"openKeyCursor"in ee?ee.openKeyCursor(J):ee.openCursor(J),q=[],z.onsuccess=function(oe){var fe=z.result;return fe?(q.push(W?fe.value:fe.primaryKey),++N===Z?I({result:q}):void fe.continue()):I({result:q})},z.onerror=Tt(j))})}),openCursor:function(D){var I=D.trans,j=D.values,N=D.query,z=D.reverse,q=D.unique;return new Promise(function(W,Z){W=Ee(W);var ee=N.index,Y=N.range,X=I.objectStore(R),X=ee.isPrimaryKey?X:X.index(ee.name),ee=z?q?"prevunique":"prev":q?"nextunique":"next",J=!j&&"openKeyCursor"in X?X.openKeyCursor(f(Y),ee):X.openCursor(f(Y),ee);J.onerror=Tt(Z),J.onsuccess=Ee(function(oe){var fe,me,ge,rt,he=J.result;he?(he.___id=++wh,he.done=!1,fe=he.continue.bind(he),me=(me=he.continuePrimaryKey)&&me.bind(he),ge=he.advance.bind(he),rt=function(){throw new Error("Cursor not stopped")},he.trans=I,he.stop=he.continue=he.continuePrimaryKey=he.advance=function(){throw new Error("Cursor not started")},he.fail=Ee(Z),he.next=function(){var Ge=this,We=1;return this.start(function(){return We--?Ge.continue():Ge.stop()}).then(function(){return Ge})},he.start=function(Ge){function We(){if(J.result)try{Ge()}catch(Ye){he.fail(Ye)}else he.done=!0,he.start=function(){throw new Error("Cursor behind last entry")},he.stop()}var us=new Promise(function(Ye,un){Ye=Ee(Ye),J.onerror=Tt(un),he.fail=un,he.stop=function(Ki){he.stop=he.continue=he.continuePrimaryKey=he.advance=rt,Ye(Ki)}});return J.onsuccess=Ee(function(Ye){J.onsuccess=We,We()}),he.continue=fe,he.continuePrimaryKey=me,he.advance=ge,We(),us},W(he)):W(null)},Z)})},count:function(D){var I=D.query,j=D.trans,N=I.index,z=I.range;return new Promise(function(q,W){var Z=j.objectStore(R),Y=N.isPrimaryKey?Z:Z.index(N.name),Z=f(z),Y=Z?Y.count(Z):Y.count();Y.onsuccess=Ee(function(X){return q(X.target.result)}),Y.onerror=Tt(W)})}}}var b,v,k,O=(v=S,k=qa((b=a).objectStoreNames),{schema:{name:b.name,tables:k.map(function(P){return v.objectStore(P)}).map(function(P){var E=P.keyPath,I=P.autoIncrement,R=l(E),D={},I={name:P.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:E==null,compound:R,keyPath:E,autoIncrement:I,unique:!0,extractKey:Ei(E)},indexes:qa(P.indexNames).map(function(j){return P.index(j)}).map(function(q){var N=q.name,z=q.unique,W=q.multiEntry,q=q.keyPath,W={name:N,compound:l(q),keyPath:q,unique:z,multiEntry:W,extractKey:Ei(q)};return D[ir(q)]=W}),getIndexByKeyPath:function(j){return D[ir(j)]}};return D[":id"]=I.primaryKey,E!=null&&(D[ir(E)]=I.primaryKey),I})},hasGetAll:0<k.length&&"getAll"in v.objectStore(k[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),S=O.schema,T=O.hasGetAll,O=S.tables.map(p),_={};return O.forEach(function(P){return _[P.name]=P}),{stack:"dbcore",transaction:a.transaction.bind(a),table:function(P){if(!_[P])throw new Error("Table '".concat(P,"' not found"));return _[P]},MIN_KEY:-1/0,MAX_KEY:sr(c),schema:S}}function vh(a,c,d,f){var p=d.IDBKeyRange;return d.indexedDB,{dbcore:(f=yh(c,p,f),a.dbcore.reduce(function(b,v){return v=v.create,r(r({},b),v(b))},f))}}function Jr(a,f){var d=f.db,f=vh(a._middlewares,d,a._deps,f);a.core=f.dbcore,a.tables.forEach(function(p){var b=p.name;a.core.schema.tables.some(function(v){return v.name===b})&&(p.core=a.core.table(b),a[b]instanceof a.Table&&(a[b].core=p.core))})}function Zr(a,c,d,f){d.forEach(function(p){var b=f[p];c.forEach(function(v){var k=(function S(T,O){return A(T,O)||(T=h(T))&&S(T,O)})(v,p);(!k||"value"in k&&k.value===void 0)&&(v===a.Transaction.prototype||v instanceof a.Transaction?$(v,p,{get:function(){return this.table(p)},set:function(S){y(this,p,{value:S,writable:!0,configurable:!0,enumerable:!0})}}):v[p]=new a.Table(p,b))})})}function Ti(a,c){c.forEach(function(d){for(var f in d)d[f]instanceof a.Table&&delete d[f]})}function $h(a,c){return a._cfg.version-c._cfg.version}function xh(a,c,d,f){var p=a._dbSchema;d.objectStoreNames.contains("$meta")&&!p.$meta&&(p.$meta=Si("$meta",Ka("")[0],[]),a._storeNames.push("$meta"));var b=a._createTransaction("readwrite",a._storeNames,p);b.create(d),b._completion.catch(f);var v=b._reject.bind(b),k=le.transless||le;qt(function(){return le.trans=b,le.transless=k,c!==0?(Jr(a,d),T=c,((S=b).storeNames.includes("$meta")?S.table("$meta").get("version").then(function(O){return O??T}):te.resolve(T)).then(function(O){return P=O,E=b,R=d,D=[],O=(_=a)._versions,I=_._dbSchema=ts(0,_.idbdb,R),(O=O.filter(function(j){return j._cfg.version>=P})).length!==0?(O.forEach(function(j){D.push(function(){var N=I,z=j._cfg.dbschema;ns(_,N,R),ns(_,z,R),I=_._dbSchema=z;var q=Ii(N,z);q.add.forEach(function(ee){Ai(R,ee[0],ee[1].primKey,ee[1].indexes)}),q.change.forEach(function(ee){if(ee.recreate)throw new ue.Upgrade("Not yet support for changing primary key");var J=R.objectStore(ee.name);ee.add.forEach(function(oe){return es(J,oe)}),ee.change.forEach(function(oe){J.deleteIndex(oe.name),es(J,oe)}),ee.del.forEach(function(oe){return J.deleteIndex(oe)})});var W=j._cfg.contentUpgrade;if(W&&j._cfg.version>P){Jr(_,R),E._memoizedTables={};var Z=G(z);q.del.forEach(function(ee){Z[ee]=N[ee]}),Ti(_,[_.Transaction.prototype]),Zr(_,[_.Transaction.prototype],o(Z),Z),E.schema=Z;var Y,X=tt(W);return X&&_n(),q=te.follow(function(){var ee;(Y=W(E))&&X&&(ee=Ht.bind(null,null),Y.then(ee,ee))}),Y&&typeof Y.then=="function"?te.resolve(Y):q.then(function(){return Y})}}),D.push(function(N){var z,q,W=j._cfg.dbschema;z=W,q=N,[].slice.call(q.db.objectStoreNames).forEach(function(Z){return z[Z]==null&&q.db.deleteObjectStore(Z)}),Ti(_,[_.Transaction.prototype]),Zr(_,[_.Transaction.prototype],_._storeNames,_._dbSchema),E.schema=_._dbSchema}),D.push(function(N){_.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(_.idbdb.version/10)===j._cfg.version?(_.idbdb.deleteObjectStore("$meta"),delete _._dbSchema.$meta,_._storeNames=_._storeNames.filter(function(z){return z!=="$meta"})):N.objectStore("$meta").put(j._cfg.version,"version"))})}),(function j(){return D.length?te.resolve(D.shift()(E.idbtrans)).then(j):te.resolve()})().then(function(){Ha(I,R)})):te.resolve();var _,P,E,R,D,I}).catch(v)):(o(p).forEach(function(O){Ai(d,O,p[O].primKey,p[O].indexes)}),Jr(a,d),void te.follow(function(){return a.on.populate.fire(b)}).catch(v));var S,T})}function kh(a,c){Ha(a._dbSchema,c),c.db.version%10!=0||c.objectStoreNames.contains("$meta")||c.db.createObjectStore("$meta").add(Math.ceil(c.db.version/10-1),"version");var d=ts(0,a.idbdb,c);ns(a,a._dbSchema,c);for(var f=0,p=Ii(d,a._dbSchema).change;f<p.length;f++){var b=(function(v){if(v.change.length||v.recreate)return console.warn("Unable to patch indexes of table ".concat(v.name," because it has changes on the type of index or primary key.")),{value:void 0};var k=c.objectStore(v.name);v.add.forEach(function(S){Et&&console.debug("Dexie upgrade patch: Creating missing index ".concat(v.name,".").concat(S.src)),es(k,S)})})(p[f]);if(typeof b=="object")return b.value}}function Ii(a,c){var d,f={del:[],add:[],change:[]};for(d in a)c[d]||f.del.push(d);for(d in c){var p=a[d],b=c[d];if(p){var v={name:d,def:b,recreate:!1,del:[],add:[],change:[]};if(""+(p.primKey.keyPath||"")!=""+(b.primKey.keyPath||"")||p.primKey.auto!==b.primKey.auto)v.recreate=!0,f.change.push(v);else{var k=p.idxByName,S=b.idxByName,T=void 0;for(T in k)S[T]||v.del.push(T);for(T in S){var O=k[T],_=S[T];O?O.src!==_.src&&v.change.push(_):v.add.push(_)}(0<v.del.length||0<v.add.length||0<v.change.length)&&f.change.push(v)}}else f.add.push([d,b])}return f}function Ai(a,c,d,f){var p=a.db.createObjectStore(c,d.keyPath?{keyPath:d.keyPath,autoIncrement:d.auto}:{autoIncrement:d.auto});return f.forEach(function(b){return es(p,b)}),p}function Ha(a,c){o(a).forEach(function(d){c.db.objectStoreNames.contains(d)||(Et&&console.debug("Dexie: Creating missing table",d),Ai(c,d,a[d].primKey,a[d].indexes))})}function es(a,c){a.createIndex(c.name,c.keyPath,{unique:c.unique,multiEntry:c.multi})}function ts(a,c,d){var f={};return M(c.objectStoreNames,0).forEach(function(p){for(var b=d.objectStore(p),v=_i(Ba(T=b.keyPath),T||"",!0,!1,!!b.autoIncrement,T&&typeof T!="string",!0),k=[],S=0;S<b.indexNames.length;++S){var O=b.index(b.indexNames[S]),T=O.keyPath,O=_i(O.name,T,!!O.unique,!!O.multiEntry,!1,T&&typeof T!="string",!1);k.push(O)}f[p]=Si(p,v,k)}),f}function ns(a,c,d){for(var f=d.db.objectStoreNames,p=0;p<f.length;++p){var b=f[p],v=d.objectStore(b);a._hasGetAll="getAll"in v;for(var k=0;k<v.indexNames.length;++k){var S=v.indexNames[k],T=v.index(S).keyPath,O=typeof T=="string"?T:"["+M(T).join("+")+"]";!c[b]||(T=c[b].idxByName[O])&&(T.name=S,delete c[b].idxByName[O],c[b].idxByName[S]=T)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&i.WorkerGlobalScope&&i instanceof i.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(a._hasGetAll=!1)}function Ka(a){return a.split(",").map(function(c,d){var f=(c=c.trim()).replace(/([&*]|\+\+)/g,""),p=/^\[/.test(f)?f.match(/^\[(.*)\]$/)[1].split("+"):f;return _i(f,p||null,/\&/.test(c),/\*/.test(c),/\+\+/.test(c),l(p),d===0)})}var Ch=(rs.prototype._parseStoresSpec=function(a,c){o(a).forEach(function(d){if(a[d]!==null){var f=Ka(a[d]),p=f.shift();if(p.unique=!0,p.multi)throw new ue.Schema("Primary key cannot be multi-valued");f.forEach(function(b){if(b.auto)throw new ue.Schema("Only primary key can be marked as autoIncrement (++)");if(!b.keyPath)throw new ue.Schema("Index must have a name and cannot be an empty string")}),c[d]=Si(d,p,f)}})},rs.prototype.stores=function(d){var c=this.db;this._cfg.storesSource=this._cfg.storesSource?u(this._cfg.storesSource,d):d;var d=c._versions,f={},p={};return d.forEach(function(b){u(f,b._cfg.storesSource),p=b._cfg.dbschema={},b._parseStoresSpec(f,p)}),c._dbSchema=p,Ti(c,[c._allTables,c,c.Transaction.prototype]),Zr(c,[c._allTables,c,c.Transaction.prototype,this._cfg.tables],o(p),p),c._storeNames=o(p),this},rs.prototype.upgrade=function(a){return this._cfg.contentUpgrade=ui(this._cfg.contentUpgrade||$e,a),this},rs);function rs(){}function Ri(a,c){var d=a._dbNamesDB;return d||(d=a._dbNamesDB=new jt(Gr,{addons:[],indexedDB:a,IDBKeyRange:c})).version(1).stores({dbnames:"name"}),d.table("dbnames")}function Oi(a){return a&&typeof a.databases=="function"}function Di(a){return qt(function(){return le.letThrough=!0,a()})}function Pi(a){return!("from"in a)}var Ve=function(a,c){if(!this){var d=new Ve;return a&&"d"in a&&u(d,a),d}u(this,arguments.length?{d:1,from:a,to:1<arguments.length?c:a}:{d:0})};function or(a,c,d){var f=be(c,d);if(!isNaN(f)){if(0<f)throw RangeError();if(Pi(a))return u(a,{from:c,to:d,d:1});var p=a.l,f=a.r;if(be(d,a.from)<0)return p?or(p,c,d):a.l={from:c,to:d,d:1,l:null,r:null},Ga(a);if(0<be(c,a.to))return f?or(f,c,d):a.r={from:c,to:d,d:1,l:null,r:null},Ga(a);be(c,a.from)<0&&(a.from=c,a.l=null,a.d=f?f.d+1:1),0<be(d,a.to)&&(a.to=d,a.r=null,a.d=a.l?a.l.d+1:1),d=!a.r,p&&!a.l&&ar(a,p),f&&d&&ar(a,f)}}function ar(a,c){Pi(c)||(function d(f,S){var b=S.from,v=S.to,k=S.l,S=S.r;or(f,b,v),k&&d(f,k),S&&d(f,S)})(a,c)}function Va(a,c){var d=ss(c),f=d.next();if(f.done)return!1;for(var p=f.value,b=ss(a),v=b.next(p.from),k=v.value;!f.done&&!v.done;){if(be(k.from,p.to)<=0&&0<=be(k.to,p.from))return!0;be(p.from,k.from)<0?p=(f=d.next(k.from)).value:k=(v=b.next(p.from)).value}return!1}function ss(a){var c=Pi(a)?null:{s:0,n:a};return{next:function(d){for(var f=0<arguments.length;c;)switch(c.s){case 0:if(c.s=1,f)for(;c.n.l&&be(d,c.n.from)<0;)c={up:c,n:c.n.l,s:1};else for(;c.n.l;)c={up:c,n:c.n.l,s:1};case 1:if(c.s=2,!f||be(d,c.n.to)<=0)return{value:c.n,done:!1};case 2:if(c.n.r){c.s=3,c={up:c,n:c.n.r,s:0};continue}case 3:c=c.up}return{done:!0}}}}function Ga(a){var c,d,f=(((c=a.r)===null||c===void 0?void 0:c.d)||0)-(((d=a.l)===null||d===void 0?void 0:d.d)||0),p=1<f?"r":f<-1?"l":"";p&&(c=p=="r"?"l":"r",d=r({},a),f=a[p],a.from=f.from,a.to=f.to,a[p]=f[p],d[p]=f[c],(a[c]=d).d=Wa(d)),a.d=Wa(a)}function Wa(d){var c=d.r,d=d.l;return(c?d?Math.max(c.d,d.d):c.d:d?d.d:0)+1}function is(a,c){return o(c).forEach(function(d){a[d]?ar(a[d],c[d]):a[d]=(function f(p){var b,v,k={};for(b in p)g(p,b)&&(v=p[b],k[b]=!v||typeof v!="object"||H.has(v.constructor)?v:f(v));return k})(c[d])}),a}function Li(a,c){return a.all||c.all||Object.keys(a).some(function(d){return c[d]&&Va(c[d],a[d])})}w(Ve.prototype,((wt={add:function(a){return ar(this,a),this},addKey:function(a){return or(this,a,a),this},addKeys:function(a){var c=this;return a.forEach(function(d){return or(c,d,d)}),this},hasKey:function(a){var c=ss(this).next(a).value;return c&&be(c.from,a)<=0&&0<=be(c.to,a)}})[Ue]=function(){return ss(this)},wt));var ln={},Mi={},ji=!1;function os(a){is(Mi,a),ji||(ji=!0,setTimeout(function(){ji=!1,Ni(Mi,!(Mi={}))},0))}function Ni(a,c){c===void 0&&(c=!1);var d=new Set;if(a.all)for(var f=0,p=Object.values(ln);f<p.length;f++)Ya(v=p[f],a,d,c);else for(var b in a){var v,k=/^idb\:\/\/(.*)\/(.*)\//.exec(b);k&&(b=k[1],k=k[2],(v=ln["idb://".concat(b,"/").concat(k)])&&Ya(v,a,d,c))}d.forEach(function(S){return S()})}function Ya(a,c,d,f){for(var p=[],b=0,v=Object.entries(a.queries.query);b<v.length;b++){for(var k=v[b],S=k[0],T=[],O=0,_=k[1];O<_.length;O++){var P=_[O];Li(c,P.obsSet)?P.subscribers.forEach(function(I){return d.add(I)}):f&&T.push(P)}f&&p.push([S,T])}if(f)for(var E=0,R=p;E<R.length;E++){var D=R[E],S=D[0],T=D[1];a.queries.query[S]=T}}function _h(a){var c=a._state,d=a._deps.indexedDB;if(c.isBeingOpened||a.idbdb)return c.dbReadyPromise.then(function(){return c.dbOpenError?Re(c.dbOpenError):a});c.isBeingOpened=!0,c.dbOpenError=null,c.openComplete=!1;var f=c.openCanceller,p=Math.round(10*a.verno),b=!1;function v(){if(c.openCanceller!==f)throw new ue.DatabaseClosed("db.open() was cancelled")}function k(){return new te(function(P,E){if(v(),!d)throw new ue.MissingAPI;var R=a.name,D=c.autoSchema||!p?d.open(R):d.open(R,p);if(!D)throw new ue.MissingAPI;D.onerror=Tt(E),D.onblocked=Ee(a._fireOnBlocked),D.onupgradeneeded=Ee(function(I){var j;O=D.transaction,c.autoSchema&&!a._options.allowEmptyDB?(D.onerror=nr,O.abort(),D.result.close(),(j=d.deleteDatabase(R)).onsuccess=j.onerror=Ee(function(){E(new ue.NoSuchDatabase("Database ".concat(R," doesnt exist")))})):(O.onerror=Tt(E),I=I.oldVersion>Math.pow(2,62)?0:I.oldVersion,_=I<1,a.idbdb=D.result,b&&kh(a,O),xh(a,I/10,O,E))},E),D.onsuccess=Ee(function(){O=null;var I,j,N,z,q,W=a.idbdb=D.result,Z=M(W.objectStoreNames);if(0<Z.length)try{var Y=W.transaction((z=Z).length===1?z[0]:z,"readonly");if(c.autoSchema)j=W,N=Y,(I=a).verno=j.version/10,N=I._dbSchema=ts(0,j,N),I._storeNames=M(j.objectStoreNames,0),Zr(I,[I._allTables],o(N),N);else if(ns(a,a._dbSchema,Y),((q=Ii(ts(0,(q=a).idbdb,Y),q._dbSchema)).add.length||q.change.some(function(X){return X.add.length||X.change.length}))&&!b)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),W.close(),p=W.version+1,b=!0,P(k());Jr(a,Y)}catch{}Sn.push(a),W.onversionchange=Ee(function(X){c.vcFired=!0,a.on("versionchange").fire(X)}),W.onclose=Ee(function(X){a.on("close").fire(X)}),_&&(q=a._deps,Y=R,W=q.indexedDB,q=q.IDBKeyRange,Oi(W)||Y===Gr||Ri(W,q).put({name:Y}).catch($e)),P()},E)}).catch(function(P){switch(P?.name){case"UnknownError":if(0<c.PR1398_maxLoop)return c.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),k();break;case"VersionError":if(0<p)return p=0,k()}return te.reject(P)})}var S,T=c.dbReadyResolve,O=null,_=!1;return te.race([f,(typeof navigator>"u"?te.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(P){function E(){return indexedDB.databases().finally(P)}S=setInterval(E,100),E()}).finally(function(){return clearInterval(S)}):Promise.resolve()).then(k)]).then(function(){return v(),c.onReadyBeingFired=[],te.resolve(Di(function(){return a.on.ready.fire(a.vip)})).then(function P(){if(0<c.onReadyBeingFired.length){var E=c.onReadyBeingFired.reduce(ui,$e);return c.onReadyBeingFired=[],te.resolve(Di(function(){return E(a.vip)})).then(P)}})}).finally(function(){c.openCanceller===f&&(c.onReadyBeingFired=null,c.isBeingOpened=!1)}).catch(function(P){c.dbOpenError=P;try{O&&O.abort()}catch{}return f===c.openCanceller&&a._close(),Re(P)}).finally(function(){c.openComplete=!0,T()}).then(function(){var P;return _&&(P={},a.tables.forEach(function(E){E.schema.indexes.forEach(function(R){R.name&&(P["idb://".concat(a.name,"/").concat(E.name,"/").concat(R.name)]=new Ve(-1/0,[[[]]]))}),P["idb://".concat(a.name,"/").concat(E.name,"/")]=P["idb://".concat(a.name,"/").concat(E.name,"/:dels")]=new Ve(-1/0,[[[]]])}),Gt(rr).fire(P),Ni(P,!0)),a})}function zi(a){function c(b){return a.next(b)}var d=p(c),f=p(function(b){return a.throw(b)});function p(b){return function(S){var k=b(S),S=k.value;return k.done?S:S&&typeof S.then=="function"?S.then(d,f):l(S)?Promise.all(S).then(d,f):d(S)}}return p(c)()}function as(a,c,d){for(var f=l(a)?a.slice():[a],p=0;p<d;++p)f.push(c);return f}var Sh={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(a){return r(r({},a),{table:function(c){var d=a.table(c),f=d.schema,p={},b=[];function v(_,P,E){var R=ir(_),D=p[R]=p[R]||[],I=_==null?0:typeof _=="string"?1:_.length,j=0<P,j=r(r({},E),{name:j?"".concat(R,"(virtual-from:").concat(E.name,")"):E.name,lowLevelIndex:E,isVirtual:j,keyTail:P,keyLength:I,extractKey:Ei(_),unique:!j&&E.unique});return D.push(j),j.isPrimaryKey||b.push(j),1<I&&v(I===2?_[0]:_.slice(0,I-1),P+1,E),D.sort(function(N,z){return N.keyTail-z.keyTail}),j}c=v(f.primaryKey.keyPath,0,f.primaryKey),p[":id"]=[c];for(var k=0,S=f.indexes;k<S.length;k++){var T=S[k];v(T.keyPath,0,T)}function O(_){var P,E=_.query.index;return E.isVirtual?r(r({},_),{query:{index:E.lowLevelIndex,range:(P=_.query.range,E=E.keyTail,{type:P.type===1?2:P.type,lower:as(P.lower,P.lowerOpen?a.MAX_KEY:a.MIN_KEY,E),lowerOpen:!0,upper:as(P.upper,P.upperOpen?a.MIN_KEY:a.MAX_KEY,E),upperOpen:!0})}}):_}return r(r({},d),{schema:r(r({},f),{primaryKey:c,indexes:b,getIndexByKeyPath:function(_){return(_=p[ir(_)])&&_[0]}}),count:function(_){return d.count(O(_))},query:function(_){return d.query(O(_))},openCursor:function(_){var P=_.query.index,E=P.keyTail,R=P.isVirtual,D=P.keyLength;return R?d.openCursor(O(_)).then(function(j){return j&&I(j)}):d.openCursor(_);function I(j){return Object.create(j,{continue:{value:function(N){N!=null?j.continue(as(N,_.reverse?a.MAX_KEY:a.MIN_KEY,E)):_.unique?j.continue(j.key.slice(0,D).concat(_.reverse?a.MIN_KEY:a.MAX_KEY,E)):j.continue()}},continuePrimaryKey:{value:function(N,z){j.continuePrimaryKey(as(N,a.MAX_KEY,E),z)}},primaryKey:{get:function(){return j.primaryKey}},key:{get:function(){var N=j.key;return D===1?N[0]:N.slice(0,D)}},value:{get:function(){return j.value}}})}}})}})}};function Ui(a,c,d,f){return d=d||{},f=f||"",o(a).forEach(function(p){var b,v,k;g(c,p)?(b=a[p],v=c[p],typeof b=="object"&&typeof v=="object"&&b&&v?(k=Te(b))!==Te(v)?d[f+p]=c[p]:k==="Object"?Ui(b,v,d,f+p+"."):b!==v&&(d[f+p]=c[p]):b!==v&&(d[f+p]=c[p])):d[f+p]=void 0}),o(c).forEach(function(p){g(a,p)||(d[f+p]=c[p])}),d}function Fi(a,c){return c.type==="delete"?c.keys:c.keys||c.values.map(a.extractKey)}var Eh={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(a){return r(r({},a),{table:function(c){var d=a.table(c),f=d.schema.primaryKey;return r(r({},d),{mutate:function(p){var b=le.trans,v=b.table(c).hook,k=v.deleting,S=v.creating,T=v.updating;switch(p.type){case"add":if(S.fire===$e)break;return b._promise("readwrite",function(){return O(p)},!0);case"put":if(S.fire===$e&&T.fire===$e)break;return b._promise("readwrite",function(){return O(p)},!0);case"delete":if(k.fire===$e)break;return b._promise("readwrite",function(){return O(p)},!0);case"deleteRange":if(k.fire===$e)break;return b._promise("readwrite",function(){return(function _(P,E,R){return d.query({trans:P,values:!1,query:{index:f,range:E},limit:R}).then(function(D){var I=D.result;return O({type:"delete",keys:I,trans:P}).then(function(j){return 0<j.numFailures?Promise.reject(j.failures[0]):I.length<R?{failures:[],numFailures:0,lastResult:void 0}:_(P,r(r({},E),{lower:I[I.length-1],lowerOpen:!0}),R)})})})(p.trans,p.range,1e4)},!0)}return d.mutate(p);function O(_){var P,E,R,D=le.trans,I=_.keys||Fi(f,_);if(!I)throw new Error("Keys missing");return(_=_.type==="add"||_.type==="put"?r(r({},_),{keys:I}):r({},_)).type!=="delete"&&(_.values=s([],_.values)),_.keys&&(_.keys=s([],_.keys)),P=d,R=I,((E=_).type==="add"?Promise.resolve([]):P.getMany({trans:E.trans,keys:R,cache:"immutable"})).then(function(j){var N=I.map(function(z,q){var W,Z,Y,X=j[q],ee={onerror:null,onsuccess:null};return _.type==="delete"?k.fire.call(ee,z,X,D):_.type==="add"||X===void 0?(W=S.fire.call(ee,z,_.values[q],D),z==null&&W!=null&&(_.keys[q]=z=W,f.outbound||B(_.values[q],f.keyPath,z))):(W=Ui(X,_.values[q]),(Z=T.fire.call(ee,W,z,X,D))&&(Y=_.values[q],Object.keys(Z).forEach(function(J){g(Y,J)?Y[J]=Z[J]:B(Y,J,Z[J])}))),ee});return d.mutate(_).then(function(z){for(var q=z.failures,W=z.results,Z=z.numFailures,z=z.lastResult,Y=0;Y<I.length;++Y){var X=(W||I)[Y],ee=N[Y];X==null?ee.onerror&&ee.onerror(q[Y]):ee.onsuccess&&ee.onsuccess(_.type==="put"&&j[Y]?_.values[Y]:X)}return{failures:q,results:W,numFailures:Z,lastResult:z}}).catch(function(z){return N.forEach(function(q){return q.onerror&&q.onerror(z)}),Promise.reject(z)})})}}})}})}};function Qa(a,c,d){try{if(!c||c.keys.length<a.length)return null;for(var f=[],p=0,b=0;p<c.keys.length&&b<a.length;++p)be(c.keys[p],a[b])===0&&(f.push(d?ce(c.values[p]):c.values[p]),++b);return f.length===a.length?f:null}catch{return null}}var Th={stack:"dbcore",level:-1,create:function(a){return{table:function(c){var d=a.table(c);return r(r({},d),{getMany:function(f){if(!f.cache)return d.getMany(f);var p=Qa(f.keys,f.trans._cache,f.cache==="clone");return p?te.resolve(p):d.getMany(f).then(function(b){return f.trans._cache={keys:f.keys,values:f.cache==="clone"?ce(b):b},b})},mutate:function(f){return f.type!=="add"&&(f.trans._cache=null),d.mutate(f)}})}}}};function Xa(a,c){return a.trans.mode==="readonly"&&!!a.subscr&&!a.trans.explicit&&a.trans.db._options.cache!=="disabled"&&!c.schema.primaryKey.outbound}function Ja(a,c){switch(a){case"query":return c.values&&!c.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Ih={stack:"dbcore",level:0,name:"Observability",create:function(a){var c=a.schema.name,d=new Ve(a.MIN_KEY,a.MAX_KEY);return r(r({},a),{transaction:function(f,p,b){if(le.subscr&&p!=="readonly")throw new ue.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(le.querier));return a.transaction(f,p,b)},table:function(f){var p=a.table(f),b=p.schema,v=b.primaryKey,_=b.indexes,k=v.extractKey,S=v.outbound,T=v.autoIncrement&&_.filter(function(E){return E.compound&&E.keyPath.includes(v.keyPath)}),O=r(r({},p),{mutate:function(E){function R(J){return J="idb://".concat(c,"/").concat(f,"/").concat(J),z[J]||(z[J]=new Ve)}var D,I,j,N=E.trans,z=E.mutatedParts||(E.mutatedParts={}),q=R(""),W=R(":dels"),Z=E.type,ee=E.type==="deleteRange"?[E.range]:E.type==="delete"?[E.keys]:E.values.length<50?[Fi(v,E).filter(function(J){return J}),E.values]:[],Y=ee[0],X=ee[1],ee=E.trans._cache;return l(Y)?(q.addKeys(Y),(ee=Z==="delete"||Y.length===X.length?Qa(Y,ee):null)||W.addKeys(Y),(ee||X)&&(D=R,I=ee,j=X,b.indexes.forEach(function(J){var oe=D(J.name||"");function fe(ge){return ge!=null?J.extractKey(ge):null}function me(ge){return J.multiEntry&&l(ge)?ge.forEach(function(rt){return oe.addKey(rt)}):oe.addKey(ge)}(I||j).forEach(function(ge,Ge){var he=I&&fe(I[Ge]),Ge=j&&fe(j[Ge]);be(he,Ge)!==0&&(he!=null&&me(he),Ge!=null&&me(Ge))})}))):Y?(X={from:(X=Y.lower)!==null&&X!==void 0?X:a.MIN_KEY,to:(X=Y.upper)!==null&&X!==void 0?X:a.MAX_KEY},W.add(X),q.add(X)):(q.add(d),W.add(d),b.indexes.forEach(function(J){return R(J.name).add(d)})),p.mutate(E).then(function(J){return!Y||E.type!=="add"&&E.type!=="put"||(q.addKeys(J.results),T&&T.forEach(function(oe){for(var fe=E.values.map(function(he){return oe.extractKey(he)}),me=oe.keyPath.findIndex(function(he){return he===v.keyPath}),ge=0,rt=J.results.length;ge<rt;++ge)fe[ge][me]=J.results[ge];R(oe.name).addKeys(fe)})),N.mutatedParts=is(N.mutatedParts||{},z),J})}}),_=function(R){var D=R.query,R=D.index,D=D.range;return[R,new Ve((R=D.lower)!==null&&R!==void 0?R:a.MIN_KEY,(D=D.upper)!==null&&D!==void 0?D:a.MAX_KEY)]},P={get:function(E){return[v,new Ve(E.key)]},getMany:function(E){return[v,new Ve().addKeys(E.keys)]},count:_,query:_,openCursor:_};return o(P).forEach(function(E){O[E]=function(R){var D=le.subscr,I=!!D,j=Xa(le,p)&&Ja(E,R)?R.obsSet={}:D;if(I){var N=function(X){return X="idb://".concat(c,"/").concat(f,"/").concat(X),j[X]||(j[X]=new Ve)},z=N(""),q=N(":dels"),D=P[E](R),I=D[0],D=D[1];if((E==="query"&&I.isPrimaryKey&&!R.values?q:N(I.name||"")).add(D),!I.isPrimaryKey){if(E!=="count"){var W=E==="query"&&S&&R.values&&p.query(r(r({},R),{values:!1}));return p[E].apply(this,arguments).then(function(X){if(E==="query"){if(S&&R.values)return W.then(function(fe){return fe=fe.result,z.addKeys(fe),X});var ee=R.values?X.result.map(k):X.result;(R.values?z:q).addKeys(ee)}else if(E==="openCursor"){var J=X,oe=R.values;return J&&Object.create(J,{key:{get:function(){return q.addKey(J.primaryKey),J.key}},primaryKey:{get:function(){var fe=J.primaryKey;return q.addKey(fe),fe}},value:{get:function(){return oe&&z.addKey(J.primaryKey),J.value}}})}return X})}q.add(d)}}return p[E].apply(this,arguments)}}),O}})}};function Za(a,c,d){if(d.numFailures===0)return c;if(c.type==="deleteRange")return null;var f=c.keys?c.keys.length:"values"in c&&c.values?c.values.length:1;return d.numFailures===f?null:(c=r({},c),l(c.keys)&&(c.keys=c.keys.filter(function(p,b){return!(b in d.failures)})),"values"in c&&l(c.values)&&(c.values=c.values.filter(function(p,b){return!(b in d.failures)})),c)}function Bi(a,c){return d=a,((f=c).lower===void 0||(f.lowerOpen?0<be(d,f.lower):0<=be(d,f.lower)))&&(a=a,(c=c).upper===void 0||(c.upperOpen?be(a,c.upper)<0:be(a,c.upper)<=0));var d,f}function el(a,c,P,f,p,b){if(!P||P.length===0)return a;var v=c.query.index,k=v.multiEntry,S=c.query.range,T=f.schema.primaryKey.extractKey,O=v.extractKey,_=(v.lowLevelIndex||v).extractKey,P=P.reduce(function(E,R){var D=E,I=[];if(R.type==="add"||R.type==="put")for(var j=new Ve,N=R.values.length-1;0<=N;--N){var z,q=R.values[N],W=T(q);j.hasKey(W)||(z=O(q),(k&&l(z)?z.some(function(J){return Bi(J,S)}):Bi(z,S))&&(j.addKey(W),I.push(q)))}switch(R.type){case"add":var Z=new Ve().addKeys(c.values?E.map(function(oe){return T(oe)}):E),D=E.concat(c.values?I.filter(function(oe){return oe=T(oe),!Z.hasKey(oe)&&(Z.addKey(oe),!0)}):I.map(function(oe){return T(oe)}).filter(function(oe){return!Z.hasKey(oe)&&(Z.addKey(oe),!0)}));break;case"put":var Y=new Ve().addKeys(R.values.map(function(oe){return T(oe)}));D=E.filter(function(oe){return!Y.hasKey(c.values?T(oe):oe)}).concat(c.values?I:I.map(function(oe){return T(oe)}));break;case"delete":var X=new Ve().addKeys(R.keys);D=E.filter(function(oe){return!X.hasKey(c.values?T(oe):oe)});break;case"deleteRange":var ee=R.range;D=E.filter(function(oe){return!Bi(T(oe),ee)})}return D},a);return P===a?a:(P.sort(function(E,R){return be(_(E),_(R))||be(T(E),T(R))}),c.limit&&c.limit<1/0&&(P.length>c.limit?P.length=c.limit:a.length===c.limit&&P.length<c.limit&&(p.dirty=!0)),b?Object.freeze(P):P)}function tl(a,c){return be(a.lower,c.lower)===0&&be(a.upper,c.upper)===0&&!!a.lowerOpen==!!c.lowerOpen&&!!a.upperOpen==!!c.upperOpen}function Ah(a,c){return(function(d,f,p,b){if(d===void 0)return f!==void 0?-1:0;if(f===void 0)return 1;if((f=be(d,f))===0){if(p&&b)return 0;if(p)return 1;if(b)return-1}return f})(a.lower,c.lower,a.lowerOpen,c.lowerOpen)<=0&&0<=(function(d,f,p,b){if(d===void 0)return f!==void 0?1:0;if(f===void 0)return-1;if((f=be(d,f))===0){if(p&&b)return 0;if(p)return-1;if(b)return 1}return f})(a.upper,c.upper,a.upperOpen,c.upperOpen)}function Rh(a,c,d,f){a.subscribers.add(d),f.addEventListener("abort",function(){var p,b;a.subscribers.delete(d),a.subscribers.size===0&&(p=a,b=c,setTimeout(function(){p.subscribers.size===0&&de(b,p)},3e3))})}var Oh={stack:"dbcore",level:0,name:"Cache",create:function(a){var c=a.schema.name;return r(r({},a),{transaction:function(d,f,p){var b,v,k=a.transaction(d,f,p);return f==="readwrite"&&(v=(b=new AbortController).signal,p=function(S){return function(){if(b.abort(),f==="readwrite"){for(var T=new Set,O=0,_=d;O<_.length;O++){var P=_[O],E=ln["idb://".concat(c,"/").concat(P)];if(E){var R=a.table(P),D=E.optimisticOps.filter(function(oe){return oe.trans===k});if(k._explicit&&S&&k.mutatedParts)for(var I=0,j=Object.values(E.queries.query);I<j.length;I++)for(var N=0,z=(Z=j[I]).slice();N<z.length;N++)Li((Y=z[N]).obsSet,k.mutatedParts)&&(de(Z,Y),Y.subscribers.forEach(function(oe){return T.add(oe)}));else if(0<D.length){E.optimisticOps=E.optimisticOps.filter(function(oe){return oe.trans!==k});for(var q=0,W=Object.values(E.queries.query);q<W.length;q++)for(var Z,Y,X,ee=0,J=(Z=W[q]).slice();ee<J.length;ee++)(Y=J[ee]).res!=null&&k.mutatedParts&&(S&&!Y.dirty?(X=Object.isFrozen(Y.res),X=el(Y.res,Y.req,D,R,Y,X),Y.dirty?(de(Z,Y),Y.subscribers.forEach(function(oe){return T.add(oe)})):X!==Y.res&&(Y.res=X,Y.promise=te.resolve({result:X}))):(Y.dirty&&de(Z,Y),Y.subscribers.forEach(function(oe){return T.add(oe)})))}}}T.forEach(function(oe){return oe()})}}},k.addEventListener("abort",p(!1),{signal:v}),k.addEventListener("error",p(!1),{signal:v}),k.addEventListener("complete",p(!0),{signal:v})),k},table:function(d){var f=a.table(d),p=f.schema.primaryKey;return r(r({},f),{mutate:function(b){var v=le.trans;if(p.outbound||v.db._options.cache==="disabled"||v.explicit||v.idbtrans.mode!=="readwrite")return f.mutate(b);var k=ln["idb://".concat(c,"/").concat(d)];return k?(v=f.mutate(b),b.type!=="add"&&b.type!=="put"||!(50<=b.values.length||Fi(p,b).some(function(S){return S==null}))?(k.optimisticOps.push(b),b.mutatedParts&&os(b.mutatedParts),v.then(function(S){0<S.numFailures&&(de(k.optimisticOps,b),(S=Za(0,b,S))&&k.optimisticOps.push(S),b.mutatedParts&&os(b.mutatedParts))}),v.catch(function(){de(k.optimisticOps,b),b.mutatedParts&&os(b.mutatedParts)})):v.then(function(S){var T=Za(0,r(r({},b),{values:b.values.map(function(O,_){var P;return S.failures[_]?O:(O=(P=p.keyPath)!==null&&P!==void 0&&P.includes(".")?ce(O):r({},O),B(O,p.keyPath,S.results[_]),O)})}),S);k.optimisticOps.push(T),queueMicrotask(function(){return b.mutatedParts&&os(b.mutatedParts)})}),v):f.mutate(b)},query:function(b){if(!Xa(le,f)||!Ja("query",b))return f.query(b);var v=((T=le.trans)===null||T===void 0?void 0:T.db._options.cache)==="immutable",_=le,k=_.requery,S=_.signal,T=(function(R,D,I,j){var N=ln["idb://".concat(R,"/").concat(D)];if(!N)return[];if(!(D=N.queries[I]))return[null,!1,N,null];var z=D[(j.query?j.query.index.name:null)||""];if(!z)return[null,!1,N,null];switch(I){case"query":var q=z.find(function(W){return W.req.limit===j.limit&&W.req.values===j.values&&tl(W.req.query.range,j.query.range)});return q?[q,!0,N,z]:[z.find(function(W){return("limit"in W.req?W.req.limit:1/0)>=j.limit&&(!j.values||W.req.values)&&Ah(W.req.query.range,j.query.range)}),!1,N,z];case"count":return q=z.find(function(W){return tl(W.req.query.range,j.query.range)}),[q,!!q,N,z]}})(c,d,"query",b),O=T[0],_=T[1],P=T[2],E=T[3];return O&&_?O.obsSet=b.obsSet:(_=f.query(b).then(function(R){var D=R.result;if(O&&(O.res=D),v){for(var I=0,j=D.length;I<j;++I)Object.freeze(D[I]);Object.freeze(D)}else R.result=ce(D);return R}).catch(function(R){return E&&O&&de(E,O),Promise.reject(R)}),O={obsSet:b.obsSet,promise:_,subscribers:new Set,type:"query",req:b,dirty:!1},E?E.push(O):(E=[O],(P=P||(ln["idb://".concat(c,"/").concat(d)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[b.query.index.name||""]=E)),Rh(O,E,k,S),O.promise.then(function(R){return{result:el(R.result,b,P?.optimisticOps,f,O,v)}})}})}})}};function ls(a,c){return new Proxy(a,{get:function(d,f,p){return f==="db"?c:Reflect.get(d,f,p)}})}var jt=(Oe.prototype.version=function(a){if(isNaN(a)||a<.1)throw new ue.Type("Given version is not a positive number");if(a=Math.round(10*a)/10,this.idbdb||this._state.isBeingOpened)throw new ue.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,a);var c=this._versions,d=c.filter(function(f){return f._cfg.version===a})[0];return d||(d=new this.Version(a),c.push(d),c.sort($h),d.stores({}),this._state.autoSchema=!1,d)},Oe.prototype._whenReady=function(a){var c=this;return this.idbdb&&(this._state.openComplete||le.letThrough||this._vip)?a():new te(function(d,f){if(c._state.openComplete)return f(new ue.DatabaseClosed(c._state.dbOpenError));if(!c._state.isBeingOpened){if(!c._state.autoOpen)return void f(new ue.DatabaseClosed);c.open().catch($e)}c._state.dbReadyPromise.then(d,f)}).then(a)},Oe.prototype.use=function(a){var c=a.stack,d=a.create,f=a.level,p=a.name;return p&&this.unuse({stack:c,name:p}),a=this._middlewares[c]||(this._middlewares[c]=[]),a.push({stack:c,create:d,level:f??10,name:p}),a.sort(function(b,v){return b.level-v.level}),this},Oe.prototype.unuse=function(a){var c=a.stack,d=a.name,f=a.create;return c&&this._middlewares[c]&&(this._middlewares[c]=this._middlewares[c].filter(function(p){return f?p.create!==f:!!d&&p.name!==d})),this},Oe.prototype.open=function(){var a=this;return sn(Bt,function(){return _h(a)})},Oe.prototype._close=function(){var a=this._state,c=Sn.indexOf(this);if(0<=c&&Sn.splice(c,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}a.isBeingOpened||(a.dbReadyPromise=new te(function(d){a.dbReadyResolve=d}),a.openCanceller=new te(function(d,f){a.cancelOpen=f}))},Oe.prototype.close=function(d){var c=(d===void 0?{disableAutoOpen:!0}:d).disableAutoOpen,d=this._state;c?(d.isBeingOpened&&d.cancelOpen(new ue.DatabaseClosed),this._close(),d.autoOpen=!1,d.dbOpenError=new ue.DatabaseClosed):(this._close(),d.autoOpen=this._options.autoOpen||d.isBeingOpened,d.openComplete=!1,d.dbOpenError=null)},Oe.prototype.delete=function(a){var c=this;a===void 0&&(a={disableAutoOpen:!0});var d=0<arguments.length&&typeof arguments[0]!="object",f=this._state;return new te(function(p,b){function v(){c.close(a);var k=c._deps.indexedDB.deleteDatabase(c.name);k.onsuccess=Ee(function(){var S,T,O;S=c._deps,T=c.name,O=S.indexedDB,S=S.IDBKeyRange,Oi(O)||T===Gr||Ri(O,S).delete(T).catch($e),p()}),k.onerror=Tt(b),k.onblocked=c._fireOnBlocked}if(d)throw new ue.InvalidArgument("Invalid closeOptions argument to db.delete()");f.isBeingOpened?f.dbReadyPromise.then(v):v()})},Oe.prototype.backendDB=function(){return this.idbdb},Oe.prototype.isOpen=function(){return this.idbdb!==null},Oe.prototype.hasBeenClosed=function(){var a=this._state.dbOpenError;return a&&a.name==="DatabaseClosed"},Oe.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Oe.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Oe.prototype,"tables",{get:function(){var a=this;return o(this._allTables).map(function(c){return a._allTables[c]})},enumerable:!1,configurable:!0}),Oe.prototype.transaction=function(){var a=function(c,d,f){var p=arguments.length;if(p<2)throw new ue.InvalidArgument("Too few arguments");for(var b=new Array(p-1);--p;)b[p-1]=arguments[p];return f=b.pop(),[c,re(b),f]}.apply(this,arguments);return this._transaction.apply(this,a)},Oe.prototype._transaction=function(a,c,d){var f=this,p=le.trans;p&&p.db===this&&a.indexOf("!")===-1||(p=null);var b,v,k=a.indexOf("?")!==-1;a=a.replace("!","").replace("?","");try{if(v=c.map(function(T){if(T=T instanceof f.Table?T.name:T,typeof T!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return T}),a=="r"||a===yi)b=yi;else{if(a!="rw"&&a!=vi)throw new ue.InvalidArgument("Invalid transaction mode: "+a);b=vi}if(p){if(p.mode===yi&&b===vi){if(!k)throw new ue.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");p=null}p&&v.forEach(function(T){if(p&&p.storeNames.indexOf(T)===-1){if(!k)throw new ue.SubTransaction("Table "+T+" not included in parent transaction.");p=null}}),k&&p&&!p.active&&(p=null)}}catch(T){return p?p._promise(null,function(O,_){_(T)}):Re(T)}var S=function T(O,_,P,E,R){return te.resolve().then(function(){var D=le.transless||le,I=O._createTransaction(_,P,O._dbSchema,E);if(I.explicit=!0,D={trans:I,transless:D},E)I.idbtrans=E.idbtrans;else try{I.create(),I.idbtrans._explicit=!0,O._state.PR1398_maxLoop=3}catch(z){return z.name===ci.InvalidState&&O.isOpen()&&0<--O._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),O.close({disableAutoOpen:!1}),O.open().then(function(){return T(O,_,P,null,R)})):Re(z)}var j,N=tt(R);return N&&_n(),D=te.follow(function(){var z;(j=R.call(I,I))&&(N?(z=Ht.bind(null,null),j.then(z,z)):typeof j.next=="function"&&typeof j.throw=="function"&&(j=zi(j)))},D),(j&&typeof j.then=="function"?te.resolve(j).then(function(z){return I.active?z:Re(new ue.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):D.then(function(){return j})).then(function(z){return E&&I._resolve(),I._completion.then(function(){return z})}).catch(function(z){return I._reject(z),Re(z)})})}.bind(null,this,b,v,p,d);return p?p._promise(b,S,"lock"):le.trans?sn(le.transless,function(){return f._whenReady(S)}):this._whenReady(S)},Oe.prototype.table=function(a){if(!g(this._allTables,a))throw new ue.InvalidTable("Table ".concat(a," does not exist"));return this._allTables[a]},Oe);function Oe(a,c){var d=this;this._middlewares={},this.verno=0;var f=Oe.dependencies;this._options=c=r({addons:Oe.addons,autoOpen:!0,indexedDB:f.indexedDB,IDBKeyRange:f.IDBKeyRange,cache:"cloned"},c),this._deps={indexedDB:c.indexedDB,IDBKeyRange:c.IDBKeyRange},f=c.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var p,b,v,k,S,T={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:$e,dbReadyPromise:null,cancelOpen:$e,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:c.autoOpen};T.dbReadyPromise=new te(function(_){T.dbReadyResolve=_}),T.openCanceller=new te(function(_,P){T.cancelOpen=P}),this._state=T,this.name=a,this.on=Zn(this,"populate","blocked","versionchange","close",{ready:[ui,$e]}),this.on.ready.subscribe=F(this.on.ready.subscribe,function(_){return function(P,E){Oe.vip(function(){var R,D=d._state;D.openComplete?(D.dbOpenError||te.resolve().then(P),E&&_(P)):D.onReadyBeingFired?(D.onReadyBeingFired.push(P),E&&_(P)):(_(P),R=d,E||_(function I(){R.on.ready.unsubscribe(P),R.on.ready.unsubscribe(I)}))})}}),this.Collection=(p=this,er(ph.prototype,function(j,I){this.db=p;var E=Oa,R=null;if(I)try{E=I()}catch(N){R=N}var D=j._ctx,I=D.table,j=I.hook.reading.fire;this._ctx={table:I,index:D.index,isPrimKey:!D.index||I.schema.primKey.keyPath&&D.index===I.schema.primKey.name,range:E,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:R,or:D.or,valueMapper:j!==Wn?j:null}})),this.Table=(b=this,er(Ma.prototype,function(_,P,E){this.db=b,this._tx=E,this.name=_,this.schema=P,this.hook=b._allTables[_]?b._allTables[_].hook:Zn(null,{creating:[ih,$e],reading:[sh,Wn],updating:[ah,$e],deleting:[oh,$e]})})),this.Transaction=(v=this,er(bh.prototype,function(_,P,E,R,D){var I=this;this.db=v,this.mode=_,this.storeNames=P,this.schema=E,this.chromeTransactionDurability=R,this.idbtrans=null,this.on=Zn(this,"complete","error","abort"),this.parent=D||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new te(function(j,N){I._resolve=j,I._reject=N}),this._completion.then(function(){I.active=!1,I.on.complete.fire()},function(j){var N=I.active;return I.active=!1,I.on.error.fire(j),I.parent?I.parent._reject(j):N&&I.idbtrans&&I.idbtrans.abort(),Re(j)})})),this.Version=(k=this,er(Ch.prototype,function(_){this.db=k,this._cfg={version:_,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(S=this,er(Fa.prototype,function(_,P,E){if(this.db=S,this._ctx={table:_,index:P===":id"?null:P,or:E},this._cmp=this._ascending=be,this._descending=function(R,D){return be(D,R)},this._max=function(R,D){return 0<be(R,D)?R:D},this._min=function(R,D){return be(R,D)<0?R:D},this._IDBKeyRange=S._deps.IDBKeyRange,!this._IDBKeyRange)throw new ue.MissingAPI})),this.on("versionchange",function(_){0<_.newVersion?console.warn("Another connection wants to upgrade database '".concat(d.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(d.name,"'. Closing db now to resume the delete request.")),d.close({disableAutoOpen:!1})}),this.on("blocked",function(_){!_.newVersion||_.newVersion<_.oldVersion?console.warn("Dexie.delete('".concat(d.name,"') was blocked")):console.warn("Upgrade '".concat(d.name,"' blocked by other connection holding version ").concat(_.oldVersion/10))}),this._maxKey=sr(c.IDBKeyRange),this._createTransaction=function(_,P,E,R){return new d.Transaction(_,P,E,d._options.chromeTransactionDurability,R)},this._fireOnBlocked=function(_){d.on("blocked").fire(_),Sn.filter(function(P){return P.name===d.name&&P!==d&&!P._state.vcFired}).map(function(P){return P.on("versionchange").fire(_)})},this.use(Th),this.use(Oh),this.use(Ih),this.use(Sh),this.use(Eh);var O=new Proxy(this,{get:function(_,P,E){if(P==="_vip")return!0;if(P==="table")return function(D){return ls(d.table(D),O)};var R=Reflect.get(_,P,E);return R instanceof Ma?ls(R,O):P==="tables"?R.map(function(D){return ls(D,O)}):P==="_createTransaction"?function(){return ls(R.apply(this,arguments),O)}:R}});this.vip=O,f.forEach(function(_){return _(d)})}var cs,wt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Dh=(qi.prototype.subscribe=function(a,c,d){return this._subscribe(a&&typeof a!="function"?a:{next:a,error:c,complete:d})},qi.prototype[wt]=function(){return this},qi);function qi(a){this._subscribe=a}try{cs={indexedDB:i.indexedDB||i.mozIndexedDB||i.webkitIndexedDB||i.msIndexedDB,IDBKeyRange:i.IDBKeyRange||i.webkitIDBKeyRange}}catch{cs={indexedDB:null,IDBKeyRange:null}}function nl(a){var c,d=!1,f=new Dh(function(p){var b=tt(a),v,k=!1,S={},T={},O={get closed(){return k},unsubscribe:function(){k||(k=!0,v&&v.abort(),_&&Gt.storagemutated.unsubscribe(E))}};p.start&&p.start(O);var _=!1,P=function(){return wi(R)},E=function(D){is(S,D),Li(T,S)&&P()},R=function(){var D,I,j;!k&&cs.indexedDB&&(S={},D={},v&&v.abort(),v=new AbortController,j=(function(N){var z=kn();try{b&&_n();var q=qt(a,N);return q=b?q.finally(Ht):q}finally{z&&Cn()}})(I={subscr:D,signal:v.signal,requery:P,querier:a,trans:null}),Promise.resolve(j).then(function(N){d=!0,c=N,k||I.signal.aborted||(S={},(function(z){for(var q in z)if(g(z,q))return;return 1})(T=D)||_||(Gt(rr,E),_=!0),wi(function(){return!k&&p.next&&p.next(N)}))},function(N){d=!1,["DatabaseClosedError","AbortError"].includes(N?.name)||k||wi(function(){k||p.error&&p.error(N)})}))};return setTimeout(P,0),O});return f.hasValue=function(){return d},f.getValue=function(){return c},f}var cn=jt;function Hi(a){var c=Wt;try{Wt=!0,Gt.storagemutated.fire(a),Ni(a,!0)}finally{Wt=c}}w(cn,r(r({},Nr),{delete:function(a){return new cn(a,{addons:[]}).delete()},exists:function(a){return new cn(a,{addons:[]}).open().then(function(c){return c.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(a){try{return c=cn.dependencies,d=c.indexedDB,c=c.IDBKeyRange,(Oi(d)?Promise.resolve(d.databases()).then(function(f){return f.map(function(p){return p.name}).filter(function(p){return p!==Gr})}):Ri(d,c).toCollection().primaryKeys()).then(a)}catch{return Re(new ue.MissingAPI)}var c,d},defineClass:function(){return function(a){u(this,a)}},ignoreTransaction:function(a){return le.trans?sn(le.transless,a):a()},vip:Di,async:function(a){return function(){try{var c=zi(a.apply(this,arguments));return c&&typeof c.then=="function"?c:te.resolve(c)}catch(d){return Re(d)}}},spawn:function(a,c,d){try{var f=zi(a.apply(d,c||[]));return f&&typeof f.then=="function"?f:te.resolve(f)}catch(p){return Re(p)}},currentTransaction:{get:function(){return le.trans||null}},waitFor:function(a,c){return c=te.resolve(typeof a=="function"?cn.ignoreTransaction(a):a).timeout(c||6e4),le.trans?le.trans.waitFor(c):c},Promise:te,debug:{get:function(){return Et},set:function(a){_a(a)}},derive:x,extend:u,props:w,override:F,Events:Zn,on:Gt,liveQuery:nl,extendObservabilitySet:is,getByKeyPath:ne,setByKeyPath:B,delByKeyPath:function(a,c){typeof c=="string"?B(a,c,void 0):"length"in c&&[].map.call(c,function(d){B(a,d,void 0)})},shallowClone:G,deepClone:ce,getObjectDiff:Ui,cmp:be,asap:Q,minKey:-1/0,addons:[],connections:Sn,errnames:ci,dependencies:cs,cache:ln,semVer:"4.0.10",version:"4.0.10".split(".").map(function(a){return parseInt(a)}).reduce(function(a,c,d){return a+c/Math.pow(10,2*d)})})),cn.maxKey=sr(cn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Gt(rr,function(a){Wt||(a=new CustomEvent(Ci,{detail:a}),Wt=!0,dispatchEvent(a),Wt=!1)}),addEventListener(Ci,function(a){a=a.detail,Wt||Hi(a)}));var In,Wt=!1,rl=function(){};return typeof BroadcastChannel<"u"&&((rl=function(){(In=new BroadcastChannel(Ci)).onmessage=function(a){return a.data&&Hi(a.data)}})(),typeof In.unref=="function"&&In.unref(),Gt(rr,function(a){Wt||In.postMessage(a)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(a){if(!jt.disableBfCache&&a.persisted){Et&&console.debug("Dexie: handling persisted pagehide"),In?.close();for(var c=0,d=Sn;c<d.length;c++)d[c].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(a){!jt.disableBfCache&&a.persisted&&(Et&&console.debug("Dexie: handling persisted pageshow"),rl(),Hi({all:new Ve(-1/0,[[]])}))})),te.rejectionMapper=function(a,c){return!a||a instanceof Ke||a instanceof TypeError||a instanceof SyntaxError||!a.name||!Ca[a.name]?a:(c=new Ca[a.name](c||a.message,a),"stack"in a&&$(c,"stack",{get:function(){return this.inner.stack}}),c)},_a(Et),r(jt,Object.freeze({__proto__:null,Dexie:jt,liveQuery:nl,Entity:Da,cmp:be,PropModSymbol:Mt,PropModification:tr,replacePrefix:function(a,c){return new tr({replacePrefix:[a,c]})},add:function(a){return new tr({add:a})},remove:function(a){return new tr({remove:a})},default:jt,RangeSet:Ve,mergeRanges:ar,rangesOverlap:Va}),{default:jt}),jt})})($s)),$s.exports}var pf=ff();const lo=df(pf),bl=Symbol.for("Dexie"),Ts=globalThis[bl]||(globalThis[bl]=lo);if(lo.semVer!==Ts.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${lo.semVer} and ${Ts.semVer}`);const{liveQuery:Po,mergeRanges:c$,rangesOverlap:u$,RangeSet:d$,cmp:h$,Entity:f$,PropModSymbol:p$,PropModification:m$,replacePrefix:g$,add:b$,remove:w$}=Ts,mf="easydb";function pn(e,t){return`${e}::${t}`}let ds=null;function eu(){if(ds)return ds;const e=new Ts(mf);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.version(3).stores({settings:"key, workspaceId, name"}).upgrade(async t=>{const n=t.table("settings"),s=(await n.toArray()).filter(l=>l.workspaceId==null);if(s.length===0)return;const i=(await t.table("workspaces").toArray()).map(l=>l.id),o=i.length>0?i:["default"];for(const l of s){for(const u of o)await n.put({key:pn(u,l.key),workspaceId:u,name:l.key,value:l.value});await n.delete(l.key)}}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>gf()),ds={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},ds}function gf(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function cr(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const n=Object.entries(t);return e.filter(r=>Lo(r,n)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,n){if(await e.update(t,n)===0)throw new Error(`patch: no doc with id=${t}`);const s=await e.get(t);if(!s)throw new Error(`patch: doc id=${t} vanished after update`);return s},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const r=Po(()=>e.toArray()).subscribe({next:s=>t(s)});return()=>r.unsubscribe()}}}function bf(e,t){return{async find(n){const r=e.where("tableId").equals(t);if(!n||Object.keys(n).length===0)return r.toArray();const s=Object.entries(n);return r.filter(i=>Lo(i,s)).toArray()},async findOne(n){const r=await e.get(n);return r&&r.tableId===t?r:null},async insert(n){const r={...n,tableId:t};return await e.add(r),r},async bulkInsert(n){if(n.length===0)return[];const r=n.map(s=>({...s,tableId:t}));return await e.bulkAdd(r),r},async upsert(n){const r={...n,tableId:t};return await e.put(r),r},async patch(n,r){if(await e.update(n,r)===0)throw new Error(`row patch: no row ${n}`);const i=await e.get(n);if(!i)throw new Error(`row patch: row ${n} vanished after update`);return i},async remove(n){await e.delete(n)},async bulkRemove(n){n.length!==0&&await e.bulkDelete(n)},subscribe(n){const s=Po(()=>e.where("tableId").equals(t).toArray()).subscribe({next:i=>n(i)});return()=>s.unsubscribe()}}}function wf(e,t){const n=s=>({...s,workspaceId:t(),key:pn(t(),s.name),name:s.name,value:s.value}),r=()=>e.where("workspaceId").equals(t());return{async find(s){const i=await r().toArray();if(!s||Object.keys(s).length===0)return i;const o=Object.entries(s);return i.filter(l=>Lo(l,o))},async findOne(s){return await e.get(pn(t(),s))??null},async insert(s){const i=n(s);return await e.add(i),i},async bulkInsert(s){if(s.length===0)return[];const i=s.map(o=>n(o));return await e.bulkAdd(i),i},async upsert(s){const i=n(s);return await e.put(i),i},async patch(s,i){const o=pn(t(),s);if(await e.update(o,i)===0)throw new Error(`setting patch: no setting ${s}`);const u=await e.get(o);if(!u)throw new Error(`setting patch: ${s} vanished after update`);return u},async remove(s){await e.delete(pn(t(),s))},async bulkRemove(s){s.length!==0&&await e.bulkDelete(s.map(i=>pn(t(),i)))},subscribe(s){const o=Po(()=>r().toArray()).subscribe({next:l=>s(l)});return()=>o.unsubscribe()}}}function Lo(e,t){for(const[n,r]of t)if(e[n]!==r)return!1;return!0}function yf(e,t){return{workspaces:cr(e.workspaces),tables:cr(e.tables),settings:wf(e.settings,t),plugins:cr(e.plugins),viewTemplates:cr(e.viewTemplates),viewInstances:cr(e.viewInstances),rows:n=>bf(e.rows,n)}}function vf(e){const{base:t,providers:n,tableById:r,ctx:s}=e,i=new Map;return{...t,rows(o){const l=r(o),u=l?.source;if(u){const h=n.get(u.type);if(h){const m=JSON.stringify(u),g=i.get(o);if(g&&g.key===m)return g.coll;const w=h.create(l,s);return i.set(o,{key:m,coll:w}),w}}return i.delete(o),t.rows(o)}}}function $f(){const e=new Map;return{on(t,n){let r=e.get(t);return r||(r=new Set,e.set(t,r)),r.add(n),()=>{r.delete(n)}},emit(t,n){const r=e.get(t);if(r)for(const s of r)try{s(n)}catch(i){console.error(`[event:${String(t)}] listener threw`,i)}}}}const ft=xe`
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
`;function pt(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const n=t.querySelector("form");n&&(e.preventDefault(),n.requestSubmit())}const wl=new WeakSet;function mt(e,t){if(wl.has(t))return;wl.add(t);let n=0,r=0,s=0,i=0,o=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",u=>{if(u.target.closest("button, input, textarea, select, a, label"))return;o=!0,n=u.clientX,r=u.clientY;const m=e.getBoundingClientRect();s=m.left,i=m.top,t.setPointerCapture(u.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",u=>{if(!o)return;const h=u.clientX-n,m=u.clientY-r,g=-e.offsetWidth+80,w=window.innerWidth-80,y=0,$=window.innerHeight-40,x=Math.max(g,Math.min(w,s+h)),A=Math.max(y,Math.min($,i+m));e.style.position="fixed",e.style.left=`${x}px`,e.style.top=`${A}px`,e.style.margin="0"});const l=u=>{if(o){o=!1;try{t.releasePointerCapture(u.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l)}var xf=Object.defineProperty,kf=Object.getOwnPropertyDescriptor,tu=(e,t,n,r)=>{for(var s=r>1?void 0:r?kf(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&xf(t,n,s),s};let it=class extends ve{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitChoice=e=>{if(e.preventDefault(),this.current?.kind!=="choice")return;const t=this.current.options[0];t!==void 0&&this.closeAndResolve(t)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),it.instance=this}disconnectedCallback(){super.disconnectedCallback(),it.instance===this&&(it.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&mt(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(n=>{this.current={kind:"alert",title:t,message:e,resolve:n}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",n="Input"){return this.enqueue(r=>{this.current={kind:"prompt",title:n,message:e,value:t,resolve:r}})}choice(e,t,n="Choose"){return this.enqueue(r=>{this.current={kind:"choice",title:n,message:e,options:t,resolve:r}})}enqueue(e){return new Promise(t=>{const n=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(n):n()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const n=this.queue.shift();n&&n()}))}render(){const e=this.current;return C`
      <dialog @cancel=${this.onCancel} @keydown=${pt}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):se}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return C`
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
        `;case"prompt":return C`
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
        `;case"choice":return C`
          <form @submit=${this.submitChoice}>
            <div class="dialog-header">
              <h2>${e.title}</h2>
              <div class="header-actions">
                <button type="button" class="ghost" @click=${()=>this.closeAndResolve(null)}>
                  Cancel
                </button>
              </div>
            </div>
            <div class="dialog-body">
              ${e.message?C`<p class="message">${e.message}</p>`:se}
              <div class="choices">
                ${e.options.map((t,n)=>n===0?C`<button type="submit" class="choice primary" autofocus>${t}</button>`:C`<button
                        type="button"
                        class="choice"
                        @click=${()=>this.closeAndResolve(t)}
                      >
                        ${t}
                      </button>`)}
              </div>
            </div>
          </form>
        `}}};it.instance=null;it.styles=[ft,xe`
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
      button.choice.primary {
        background: #3b82f6;
        color: white;
        border: 0;
        text-align: left;
      }
      button.choice.primary:hover {
        background: #2563eb;
      }
      button.choice.primary:focus-visible {
        outline: 2px solid #1d4ed8;
        outline-offset: 2px;
      }
    `];tu([U()],it.prototype,"current",2);it=tu([Se("host-dialogs")],it);const gt=xe`
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
`;var Cf=Object.defineProperty,_f=Object.getOwnPropertyDescriptor,nu=(e,t,n,r)=>{for(var s=r>1?void 0:r?_f(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Cf(t,n,s),s};let Nt=class extends ve{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),Nt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Nt.instance===this&&(Nt.instance=null)}show(e,t){const n={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,n];const r=t?.durationMs??(n.kind==="error"||n.kind==="warning"?7e3:4e3);n.timer=window.setTimeout(()=>this.dismiss(n.id),r)}dismiss(e){const t=this.toasts.find(n=>n.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(n=>n.id!==e)}render(){return C`
      ${this.toasts.map(e=>C`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${Ef(e.kind)}</span>
            <span class="body">
              ${e.title?C`<strong>${e.title}</strong>`:""}${Sf(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};Nt.instance=null;Nt.styles=[gt,xe`
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
    `];nu([U()],Nt.prototype,"toasts",2);Nt=nu([Se("toast-host")],Nt);function Sf(e){const t=/(https?:\/\/[^\s)]+)/g,n=[];let r=0,s;for(;(s=t.exec(e))!==null;)s.index>r&&n.push(e.slice(r,s.index)),n.push({url:s[0]}),r=s.index+s[0].length;return r<e.length&&n.push(e.slice(r)),n.length===0?e:n.map(i=>typeof i=="string"?i:C`<a href=${i.url} target="_blank" rel="noopener noreferrer">${i.url}</a>`)}function Ef(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Tf(){return{headerButtons:[],footerButtons:[],tableButtons:[],columnEditorActions:[],importers:[],connectors:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map,commands:[]}}function At(e,t){return e.push(t),()=>{const n=e.indexOf(t);n>=0&&e.splice(n,1)}}function Gi(e,t,n){return e.set(t,n),()=>{e.get(t)===n&&e.delete(t)}}function If(e){return{registerHeaderButton:t=>At(e.headerButtons,t),registerFooterButton:t=>At(e.footerButtons,t),registerTableButton:t=>At(e.tableButtons,t),registerColumnEditorAction:t=>At(e.columnEditorActions,t),registerImporter:t=>At(e.importers,t),registerConnector:t=>At(e.connectors,t),registerExporter:t=>At(e.exporters,t),registerUrlSource:t=>At(e.urlSources,t),registerDropHandler:t=>At(e.dropHandlers,t),registerCellRenderer:(t,n)=>Gi(e.cellRenderers,t,n),registerRowRenderer:(t,n)=>Gi(e.rowRenderers,t,n),registerTableRenderer:(t,n)=>Gi(e.tableRenderers,t,n),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerCommand:t=>At(e.commands,t),openCommandPalette:()=>{document.dispatchEvent(new CustomEvent("easydb:open-command-palette"))},registerSettings:(t,n,r)=>(e.settings.set(t,{name:n,fields:r}),()=>{e.settings.get(t)?.name===n&&e.settings.delete(t)}),dialogs:Af}}const Af={async alert(e,t){const n=it.instance;if(n)return n.alert(e,t);window.alert(e)},async confirm(e,t){const n=it.instance;return n?n.confirm(e,t):window.confirm(e)},async prompt(e,t,n){const r=it.instance;return r?r.prompt(e,t,n):window.prompt(e,t)??null},async choice(e,t,n){const r=it.instance;if(r)return r.choice(e,t,n);const s=window.prompt(`${e}

Options: ${t.join(", ")}`);return s&&t.includes(s)?s:null},toast(e,t){const n=Nt.instance;n?n.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},Mo="/easydbaccess/settings.json",ru="/easydbaccess/secrets.txt";function Ar(e){try{return globalThis.localStorage??null}catch{return null}}function Fs(e){const t=Ar();if(!t)return{};const n=t.getItem(Mo);if(!n)return{};try{const r=JSON.parse(n);return r&&typeof r=="object"?r:{}}catch{return{}}}function jo(e,t){return Fs()[e]}function Rf(e,t,n){const r=Ar();if(!r)return;const s=Fs();s[e]=t,r.setItem(Mo,JSON.stringify(s))}function Of(e,t){const n=Ar();if(!n)return;const r=Fs();e in r&&(delete r[e],n.setItem(Mo,JSON.stringify(r)))}function co(e,t){return e in Fs()}function Bs(e){return Ar()?.getItem(ru)??""}function su(e,t){Ar()?.setItem(ru,e)}function xr(e){const t={};for(const n of e.split(/\r?\n/)){const r=n.trim();if(!r||r.startsWith("#"))continue;const s=r.indexOf(":");if(s<0)continue;const i=r.slice(0,s).trim(),o=r.slice(s+1).trim();i&&(t[i]=o)}return t}function iu(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(n,r)=>{const s=t[r.trim()];return s===void 0?n:s})}function Df(e){const t=If(e.registries),n=e.registries.rowSources,r=o=>(n.set(o.type,o),()=>{n.get(o.type)===o&&n.delete(o.type)}),s=Lf(e.store,e.registries),i={open(o){return console.warn("[host] windows.open is stubbed until Phase 5",o.id),{id:o.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:i,registerRowSource:r,settings:s,backend:{fetch:async(o,l)=>{const u=await Pf(e.store),h=l?.body instanceof ArrayBuffer;if(!u||h)return globalThis.fetch(o,l);const m={url:o};return l?.method&&(m.method=l.method),l?.headers&&(m.headers=l.headers),typeof l?.body=="string"&&(m.body=l.body),globalThis.fetch(`${u}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)})},async saveFile(o,l,u){const h=typeof l=="string"?new Blob([l],{type:u??"application/octet-stream"}):l,m=URL.createObjectURL(h),g=document.createElement("a");g.href=m,g.download=o,g.rel="noopener",document.body.appendChild(g),g.click(),g.remove(),setTimeout(()=>URL.revokeObjectURL(m),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function Pf(e){const t="server-sync:url";let n=co(t)?jo(t):void 0;return n===void 0&&(n=(await e.settings.findOne(t))?.value),typeof n!="string"||n.length===0?null:iu(n,xr(Bs())).replace(/\/+$/,"")}function Lf(e,t){const n=(i,o)=>`${i}:${o}`,r=(i,o)=>t.settings.get(i)?.fields.find(l=>l.key===o),s=i=>typeof i=="string"?iu(i,xr(Bs())):i;return{async get(i,o){const l=n(i,o);let u;if(co(l))u=jo(l);else{const h=await e.settings.findOne(l);u=h?h.value:r(i,o)?.default}return s(u)},async set(i,o,l,u){const h=n(i,o);(u??r(i,o)?.scope??"workspace")==="user"?(Rf(h,l),await e.settings.remove(h).catch(()=>{})):(await e.settings.upsert({name:h,value:l}),Of(h))},async placement(i,o){const l=n(i,o);return co(l)?"user":await e.settings.findOne(l)?"workspace":null}}}function yl(e,t){return e.has(t)?e.get(t)!=="0":!1}function Mf(){if(typeof location>"u")return"off";const e=new URLSearchParams(location.search);return yl(e,"safemode")?"all-optional":yl(e,"safemode1")?"url-plugins":"off"}const yt=Mf();function No(e){let t;try{t=new URL(e)}catch{return e}const n=t.hostname.toLowerCase();if(n==="github.com"||n==="www.github.com"){const r=t.pathname.split("/").filter(Boolean);if(r.length>=5&&(r[2]==="blob"||r[2]==="raw")){const s=r[0],i=r[1];let o=r.slice(3);return o.length>=3&&o[0]==="refs"&&(o[1]==="heads"||o[1]==="tags")&&(o=o.slice(2)),`https://raw.githubusercontent.com/${[s,i,...o].join("/")}`}}return e}function ou(e){if(e.length>1024)return!1;const t=e.split(`
`);return t[0]?.startsWith("version https://git-lfs.github.com/spec/v1")===!0&&t.some(n=>n.startsWith("oid "))&&t.some(n=>n.startsWith("size "))}function au(e){const t=No(e);let n;try{n=new URL(t)}catch{return null}if(n.hostname.toLowerCase()!=="raw.githubusercontent.com")return null;const r=n.pathname.replace(/^\/+/,"");return r.split("/").filter(Boolean).length<4?null:`https://media.githubusercontent.com/media/${r}`}async function lu(e,t){const n=Number(e.headers?.get?.("content-length")),r=e.body?.getReader?.();if(r&&Number.isFinite(n)&&n>0){const s=[];let i=0;for(;;){const{done:u,value:h}=await r.read();if(u)break;h&&(s.push(h),i+=h.length,t?.(Math.min(1,i/n)))}const o=new Uint8Array(i);let l=0;for(const u of s)o.set(u,l),l+=u.length;return new TextDecoder().decode(o)}return await e.text()}const jf=50*1024*1024;function vl(e){try{return new URL(e).host}catch{return e}}function zt(e){try{const n=new URL(e).pathname.split("/").filter(Boolean).pop();return n&&n.length>0?n:"sample.db.json"}catch{return"sample.db.json"}}async function Nf(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}function $l(e){const t=e/1048576;return`${Number.isInteger(t)?t:t.toFixed(1)} MB`}async function zf(e,t,n={}){const r=No(t),s=n.slowMs??2e3;let i=setTimeout(()=>{i=void 0,n.onSlow?.()},s);const o=()=>{i!==void 0&&(clearTimeout(i),i=void 0)},l=n.maxBytes===null?null:n.maxBytes??jf,u=async h=>{let m;try{m=await e.backend.fetch(h)}catch(w){throw new Error(`Could not reach ${vl(h)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${w.message}]`)}if(!m.ok){const w=await Nf(m);throw new Error(`HTTP ${m.status} ${m.statusText||""}`.trim()+(w?` — ${w}`:""))}const g=Number(m.headers.get("content-length"));if(l!==null&&Number.isFinite(g)&&g>l)throw m.body?.cancel().catch(()=>{}),new Error(`Response is ${$l(g)}, over the ${$l(l)} browser import limit. Set a row limit, import it as a Reference instead of a Copy, take a smaller extract, or connect to a server/Datasette for large datasets.`);try{return await lu(m,n.onProgress)}catch(w){throw new Error(`Failed reading the response body from ${vl(h)}: ${w.message}`)}};try{const h=await u(r);if(ou(h)){const m=au(r);if(m)return await u(m)}return h}finally{o()}}async function Rr(e,t,n,r={}){const{TopProgress:s}=await ut(async()=>{const{TopProgress:o}=await import("./top-progress-CEpH-ZkJ.js");return{TopProgress:o}},[]),i={handle:null};try{return await zf(e,t,{onSlow:()=>{i.handle=s.begin(n)},onProgress:o=>i.handle?.fraction(o),...r.maxBytes!==void 0?{maxBytes:r.maxBytes}:{}})}finally{i.handle?.done()}}function Ce(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Le(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function uo(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}const Uf={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV or TSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function Ff(e){e.ui.registerImporter(Hf),ut(()=>import("./csv-import-options-D2TceU97.js"),[]),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const r=np(t).filter(rp);if(r.length===0)return!1;t.preventDefault();const s=r.length===1?`"${r[0].name}"`:`${r.length} files`,i=await e.ui.dialogs.choice(`Import ${s} straight away, or review the columns first (rename, hide, fix duplicate names)?`,[qf,xl],"Import CSV");if(!i)return!0;const o=i===xl?async l=>{const{editColumnNames:u}=await ut(async()=>{const{editColumnNames:h}=await Promise.resolve().then(()=>Sy);return{editColumnNames:h}},void 0);return u(l)}:void 0;for(const l of r)await Kf(e,l,o);return!0})}function ho(e){return e.kind==="file"&&e.file?e.file.name:e.kind==="url"&&e.url?zt(e.url):"pasted"}function Bf(e){return Fo(ho(e))||"imported"}const qf="Import directly",xl="Edit columns first",Hf={id:"csv",label:"CSV / TSV",icon:"table_view",order:10,accept:[".csv",".tsv",".tab","text/csv","text/tab-separated-values"],panel:"csv-import-options",samples:[{label:"Air quality — 2016 readings (CSV)",url:"https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv"}],supports:{url:!0,file:!0,text:!0,reference:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??e.text??"";return/\.(csv|tsv|tab)$/i.test(t)?.95:e.file?.type==="text/csv"?.9:e.kind==="text"?.2:0},async list(e,t){return[{name:Bf(t),rowCount:null,handle:t}]},async*read(e,t){const n=t.handle;let r;n.kind==="file"&&n.file?r=e.maxRows!=null?await du(n.file,e.maxRows):await n.file.text():n.kind==="url"&&n.url?r=await e.fetchText(n.url,`Reading ${ho(n)}…`):r=n.text??"";const i=(typeof e.panel.separator=="string"?e.panel.separator:void 0)??Bo(ho(n)),o={...e.maxRows!=null?{maxRows:e.maxRows}:{},...i?{separator:i}:{}},l=e.targetColumns;if(l&&l.length>0){yield{rows:zo(r,o).rows.map(g=>{const w={};for(let y=0;y<l.length;y++){const $=l[y];w[$.field]=Uo(g[y]??"",$.type)}return w})};return}const u=Un(r,o);yield{columns:u.columns,rows:u.rows}},reference(e,t){const n=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");return{type:"url",config:{url:n.url,format:"csv"}}}};async function Kf(e,t,n){await cu(e,await t.text(),t.name,n?{editColumns:n}:void 0)}async function cu(e,t,n,r={}){const s=e.workspaceId();if(!s)throw new Error("csv-import: no active workspace");const i=Fo(n||"imported")||"imported",o=r.separator??Bo(n),l=(await e.store.tables.find()).find(w=>w.workspaceId===s&&w.name===i);let u,h;if(l){const w=await e.ui.dialogs.choice(`A table named "${i}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!w)return;w==="Append rows"?(h="append",u=l.id):w==="Overwrite rows"?(h="overwrite",u=l.id):(h="new",u=Ce())}else h="new",u=Ce();e.events.emit("import:before",{source:"csv",tableId:u});let m;if(h==="new"){const w=Un(t,{maxRows:r.maxRows,separator:o});let y=w.columns,$=w.rows;if(r.editColumns){const A=await r.editColumns(y);if(A===null)return;$=sp($,y,A),y=A}r.maxRows!=null&&($=$.slice(0,r.maxRows));const x=l?`${i} (${Date.now().toString(36)})`:i;await e.store.tables.insert({id:u,workspaceId:s,name:x,code:uo(x),columns:y,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()}),m=$.map(A=>({id:Ce(),tableId:u,data:A,updatedAt:Date.now()}))}else{const w=l.columns,y=zo(t,{maxRows:r.maxRows,separator:o});if(m=(r.maxRows!=null?y.rows.slice(0,r.maxRows):y.rows).map(x=>{const A={};for(let L=0;L<w.length;L++){const M=w[L];A[M.field]=Uo(x[L]??"",M.type)}return{id:Ce(),tableId:u,data:A,updatedAt:Date.now()}}),h==="overwrite"){const x=e.store.rows(u),A=await x.find();await x.bulkRemove(A.map(L=>L.id))}}await e.store.rows(u).bulkInsert(m),e.events.emit("import:after",{source:"csv",tableId:u,rowCount:m.length})}function zo(e,t={}){const n=e.replace(/﻿/,""),r=t.separator??hu(n),s=fu(n,r,uu(t.maxRows));if(s.length===0)return{header:[],rows:[]};const i=s[0],o=s.slice(1).filter(l=>!(l.length===1&&l[0]===""));return{header:i,rows:o}}function uu(e){return e!=null?e+1:void 0}async function du(e,t){const r=new TextDecoder,s=t+1;let i="",o=0,l=!1,u=0;for(;u<e.size;){const h=new Uint8Array(await e.slice(u,u+1048576).arrayBuffer());u+=1048576;const m=r.decode(h,{stream:!0});for(let g=0;g<m.length;g++){const w=m[g];if(w==='"')l=!l;else if(w===`
`&&!l&&(o+=1,o>=s))return i+m.slice(0,g+1)}i+=m}return i}function Un(e,t={}){const n=e.replace(/﻿/,""),r=t.separator??hu(n),s=fu(n,r,uu(t.maxRows));if(s.length===0)return{columns:[],rows:[]};const i=s[0],o=s.slice(1).filter(y=>!(y.length===1&&y[0]==="")),l=i.map((y,$)=>Wf(y,$)),u=gu(l.map(y=>y.field)),h=o.map(y=>{const $={};for(let x=0;x<u.length;x++)$[u[x]]=y[x]??"";return $}),m=l.map((y,$)=>y.type?y.type:Yf(h.map(x=>x[u[$]]??"").filter(x=>x.length>0))),g=l.map((y,$)=>{const x=m[$]??"string",A={field:u[$],label:y.label,type:x},L=Gf(x),M=y.renderer??L;return M&&(A.renderer=M),y.default!==void 0&&(A.default=y.default),y.max!=null&&(A.max=y.max),y.unique&&(A.unique=!0),y.notnull&&(A.notnull=!0),y.hidden&&(A.hidden=!0),A}),w=h.map(y=>{const $={};for(let x=0;x<u.length;x++){const A=u[x],L=m[x]??"string";$[A]=Uo(y[A]??"",L)}return $});return{columns:g,rows:w}}const Vf=new Set(["string","number","boolean","date","datetime"]),kl={color:"color",image:"image"};function Gf(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function Wf(e,t){const n=e.trim();if(!n.includes(":"))return{field:uo(n||`col_${t+1}`),label:n||`Column ${t+1}`};const r=n.split(":"),s=uo(r[0]||`col_${t+1}`),i=(r[1]??r[0]??"").trim()||s,o={field:s,label:i},l=(r[2]??"").trim();l&&(Vf.has(l)?o.type=l:kl[l]&&(o.type="string",o.renderer=kl[l]));const u=(r[3]??"").trim();u&&(o.default=u);const h=(r[4]??"").trim();if(h){const g=Number(h);Number.isFinite(g)&&g>0&&(o.max=g)}const m=(r[5]??"").toLowerCase();return m.includes("u")&&(o.unique=!0),m.includes("n")&&(o.notnull=!0),m.includes("h")&&(o.hidden=!0),o}function hu(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),n={",":0,";":0,"	":0};for(const i of t)i in n&&(n[i]+=1);let r=",",s=-1;for(const i of[",",";","	"])(n[i]??0)>s&&(r=i,s=n[i]??0);return r}function fu(e,t,n){const r=[];let s=[],i="",o=!1;for(let l=0;l<e.length;l++){const u=e[l];if(o)u==='"'?e[l+1]==='"'?(i+='"',l++):o=!1:i+=u;else if(u==='"')o=!0;else if(u===t)s.push(i),i="";else if(u===`
`||u==="\r"){if(u==="\r"&&e[l+1]===`
`&&l++,s.push(i),r.push(s),s=[],i="",n!=null&&r.length>=n)return r}else i+=u}return(i.length>0||s.length>0)&&(s.push(i),r.push(s)),r}function Yf(e){return e.length===0?"string":e.every(Xf)?"boolean":e.every(Jf)?"number":e.every(ep)?"datetime":e.every(Zf)?"date":"string"}const Qf=/^(true|false|yes|no|0|1)$/i;function Xf(e){return Qf.test(e.trim())}function Jf(e){const t=e.trim();if(t==="")return!1;const n=Number(t);return Number.isFinite(n)}function Zf(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function ep(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function Uo(e,t){const n=e.trim();switch(t){case"number":{if(n==="")return null;const r=Number(n);return Number.isFinite(r)?r:n}case"boolean":return n===""?null:/^(true|yes|1)$/i.test(n);case"date":return pu(n);case"datetime":return tp(n);default:return e}}function pu(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){const r=parseInt(t[1],10),s=parseInt(t[2],10),i=t[3];let o=parseInt(i,10);i.length===2&&(o+=2e3);let l,u;return r>12?(l=r,u=s):s>12?(u=r,l=s):(l=r,u=s),`${o.toString().padStart(4,"0")}-${u.toString().padStart(2,"0")}-${l.toString().padStart(2,"0")}`}const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toISOString().slice(0,10)}function tp(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),n=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(n)return`${n[1]}T${n[2].padStart(5,"0")}`;const r=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(r)return`${pu(`${r[1]}/${r[2]}/${r[3]}`)}T${r[4].padStart(5,"0")}`;const s=new Date(e);if(!Number.isNaN(s.getTime())){const i=s.toISOString();return`${i.slice(0,10)}T${i.slice(11,16)}`}return e}function np(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const s=r.getAsFile();s&&n.push(s)}return n}return[]}const mu=/\.(csv|tsv|tab)$/i;function Fo(e){return e.replace(mu,"")}function Bo(e){return/\.(tsv|tab)$/i.test(e)?"	":void 0}function rp(e){return!!(mu.test(e.name)||e.type==="text/csv"||e.type==="application/csv"||e.type==="text/tab-separated-values")}function gu(e){const t=new Map,n=new Set,r=[];for(const s of e){let i=s,o=t.get(s)??0;for(;n.has(i);)o+=1,i=`${s}_${o+1}`;t.set(s,o),n.add(i),r.push(i)}return r}function sp(e,t,n){return e.map(r=>{const s={};for(let i=0;i<t.length;i++)s[n[i].field]=r[t[i].field];return s})}const ip=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:gu,importCsvText:cu,init:Ff,meta:Uf,parseCsv:Un,parseCsvRaw:zo,readCsvHead:du,separatorForName:Bo,stripDelimitedExt:Fo},Symbol.toStringTag,{value:"Module"})),op={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"CSV serializer for the per-table export menu (see dump-export.ts) and the importer/exporter registry.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},ap={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return qo(e,t)}};function lp(e){e.ui.registerExporter(ap)}function qo(e,t){const n=e.columns.map(i=>i.field),r=e.columns.map(i=>Cl(i.label??i.field)),s=t.map(i=>n.map(o=>Cl(cp(i.data[o]))).join(","));return[r.join(","),...s].join(`\r
`)}function cp(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function Cl(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const up=Object.freeze(Object.defineProperty({__proto__:null,init:lp,meta:op,serializeCsv:qo},Symbol.toStringTag,{value:"Module"}));var dp=Object.defineProperty,hp=Object.getOwnPropertyDescriptor,Fn=(e,t,n,r)=>{for(var s=r>1?void 0:r?hp(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&dp(t,n,s),s};function Is(e,t={}){return(ot.instance??fp()).open(e,t)}function fp(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function pp(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let ot=class extends ve{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((n,r)=>n?r:-1).filter(n=>n>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),ot.instance=this}disconnectedCallback(){super.disconnectedCallback(),ot.instance===this&&(ot.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(n=>!n.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return C`
      <dialog @cancel=${this.onCancel} @keydown=${pt}>
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
            ${this.message?C`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,n)=>C`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${n}`}
                      .checked=${this.selected[n]??!1}
                      @change=${()=>this.toggle(n)}
                    />
                    <label for=${`tsel-${n}`}>
                      <span class="name">${t.name}</span>
                      ${t.hidden?C`<span class="tag-hidden">hidden</span>`:""}
                      <span class="size">${pp(t.size)}</span>
                      ${t.detail?C`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};ot.instance=null;ot.styles=[ft,xe`
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
    `];Fn([U()],ot.prototype,"items",2);Fn([U()],ot.prototype,"selected",2);Fn([U()],ot.prototype,"heading",2);Fn([U()],ot.prototype,"message",2);Fn([U()],ot.prototype,"confirmLabel",2);ot=Fn([Se("table-select-dialog")],ot);function Ho(e,t){return e.every((n,r)=>n.field===t[r]?.field)?null:n=>{const r={};for(let s=0;s<e.length;s++)r[t[s].field]=n[e[s].field];return r}}function _l(e,t){if(t.length===0)return null;const n=new Set(t.map(s=>s.from)),r={};for(const s of Object.keys(e))n.has(s)||(r[s]=e[s]);for(const{from:s,to:i}of t)Object.prototype.hasOwnProperty.call(e,s)&&(r[i]=e[s]);return r}function qs(e,t,n=[]){const r=new Set(e.map(l=>l.field)),s=new Set(n),i=[...e],o=[];for(const l of t)r.has(l.field)||s.has(l.field)||(i.push(l),o.push(l.field),r.add(l.field));return{columns:i,newFields:o}}function Ko(e,t){const n=new Set([...e].map(s=>s.toLowerCase())),r=t.trim()||"imported";if(!n.has(r.toLowerCase()))return r;for(let s=2;;s++){const i=`${r}-${s}`;if(!n.has(i.toLowerCase()))return i}}async function bu(e,t){return(await e.store.tables.find()).filter(n=>n.workspaceId===t).map(n=>n.name)}async function wu(e,t,n,r){const{workspaceId:s,importerId:i,target:o,maxRows:l}=r;let u,h,m,g=!1,w=0,y,$=null;const x=L=>e.store.rows(L),A=async L=>{if(g)return!0;if(o.kind==="new"){let M=L.columns??[];if(r.editColumns){const V=await r.editColumns(M);if(V===null)return!1;$=Ho(M,V),M=V}u=Ce(),h=Ko(await bu(e,s),t);const F={id:u,workspaceId:s,name:h,code:Le(h),columns:M,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()};await e.store.tables.insert(F),m=!0}else{const M=await e.store.tables.findOne(o.tableId);if(!M)throw new Error("The table to import into no longer exists.");if(u=M.id,h=M.name,m=!1,o.kind==="overwrite"){const F=await x(u).find();await x(u).bulkRemove(F.map(V=>V.id))}if(L.columns?.length){const F=qs(M.columns,L.columns,M.deletedColumns??[]);F.newFields.length>0&&await e.store.tables.patch(u,{columns:F.columns,updatedAt:Date.now()})}}return e.events.emit("import:before",{source:i,tableId:u}),g=!0,!0};for await(const L of n){if(l!=null&&w>=l)break;if(!await A(L))return null;L.totalCount!=null&&(y=L.totalCount);let M=L.rows;if(l!=null&&w+M.length>l&&(M=M.slice(0,l-w)),M.length===0)continue;$&&(M=M.map($));const F=Date.now(),V=M.map(Q=>({id:Ce(),tableId:u,data:Q,updatedAt:F}));await x(u).bulkInsert(V),w+=V.length,r.onProgress?.(w,y)}return!g&&!await A({})?null:(e.events.emit("import:after",{source:i,tableId:u,rowCount:w}),{tableId:u,tableName:h,rowCount:w,created:m})}function Sl(e,t,n={}){const r=t.mode==="reference"||t.maxRows!=null;return{api:e,fetchText:(s,i)=>Rr(e,s,i??"Reading…",r?{maxBytes:null}:{}),panel:t.panel??{},...t.cursor!==void 0?{cursor:t.cursor}:{},...t.maxRows!==void 0?{maxRows:t.maxRows}:{},...n}}async function mp(e,t){if(t.length<=1)return t;const n=await Is(t.map(r=>({name:r.name,size:r.rowCount,...r.detail!==void 0?{detail:r.detail}:{},...r.hidden!==void 0?{hidden:r.hidden}:{}})),{title:`Import from ${e.label}`,message:`This source offers ${t.length} tables. Choose which to import.`,confirmLabel:"Import"});return n?n.map(r=>t[r]):null}async function gp(e,t,n,r,s){if(!t.reference)throw new Error(`${t.label} cannot be referenced — import a copy instead.`);const i=t.reference(n,r);let o=[];for await(const h of t.read(n,r)){o=h.columns??[];break}if(o.length===0)throw new Error("No columns found in the referenced data.");const l=Ko(await bu(e,s),r.name),u=Ce();return await e.store.tables.insert({id:u,workspaceId:s,name:l,code:Le(l),columns:o,view:"table",source:i,readonly:!0,updatedAt:Date.now()}),{tableId:u,tableName:l,rowCount:0,created:!0}}async function Hs(e,t,n,r){const s=e.workspaceId();if(!s)throw new Error("No active workspace.");const i=Sl(e,r),o=await t.list(i,n);if(o.length===0)throw new Error("No tables found at that source.");const l=await mp(t,o);if(l===null)return{landed:[],failed:[],cancelled:!0};const u=[],h=[];for(const m of l)try{if(r.mode==="reference"){u.push(await gp(e,t,i,m,s));continue}const g=r.target;let w;g.kind!=="new"&&(w=(await e.store.tables.findOne(g.tableId))?.columns);const y=Sl(e,r,{...w?{targetColumns:w}:{}}),$=t.read(y,m),x=r.origin??(n.kind==="url"&&n.url?{type:t.id,url:n.url}:void 0),A=await wu(e,m.name,$,{workspaceId:s,importerId:t.id,target:g,...x?{origin:x}:{},...r.editColumns?{editColumns:r.editColumns}:{},...r.maxRows!==void 0?{maxRows:r.maxRows}:{}});if(A===null)return{landed:u,failed:h,cancelled:!0};u.push(A)}catch(g){h.push({name:m.name,error:g?.message??String(g)})}return{landed:u,failed:h,cancelled:!1}}async function yu(e,t,n){const r=new Map;if(n.length===0)return r;const s=(await e.find()).filter(l=>l.workspaceId===t),i=new Map(s.map(l=>[l.name,l])),o=new Map(s.map(l=>[l.id,l]));for(const l of n){if(!bp(l))continue;const u=i.get(l.name)??o.get(l.id),h=u?.id??l.id;u&&r.set(l.id,u.id);const m=u?u.builtin:l.builtin,g={...l,id:h,workspaceId:t};m===void 0?delete g.builtin:g.builtin=m,await e.upsert(g),i.set(g.name,g),o.set(g.id,g)}return r}function bp(e){if(typeof e!="object"||e===null)return!1;const t=e;return typeof t.id=="string"&&typeof t.name=="string"}const wp={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function yp(e){e.ui.registerImporter(vu),e.ui.registerDropHandler(async t=>{const r=Tp(t).filter(Ip);if(r.length===0)return!1;t.preventDefault();for(const s of r)await $p(e,s);return!0})}function Vo(e){return Ne(e)?fo(e)||Array.isArray(e.tables)?!0:xu(e):!1}function vp(e){return e.kind==="file"&&e.file?Wi(e.file.name):e.kind==="url"&&e.url?Wi(zt(e.url)):Wi(e.name??"imported")}const vu={id:"json",label:"JSON (array of objects or a dump)",icon:"data_object",order:20,accept:[".json",".db.json","application/json"],samples:[{label:"Northwind — sample database (JSON dump)",url:"https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json"}],supports:{url:!0,file:!0,text:!0,reference:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";if(/\.db\.json$/i.test(t))return 1;if(/\.json$/i.test(t))return .95;if(e.file?.type==="application/json")return .9;const n=(e.text??"").trimStart();return n.startsWith("{")||n.startsWith("[")?.3:0},async list(e,t){let n;t.kind==="file"&&t.file?n=await t.file.text():t.kind==="url"&&t.url?n=await e.fetchText(t.url,`Reading ${zt(t.url)}…`):n=t.text??"";const r=vp(t);let s;try{s=JSON.parse(n)}catch(o){throw new Error(`Invalid JSON in ${r}: ${o.message}`)}const i=Ks(s,r);return i.map(o=>({name:o.name,rowCount:o.rows.length,handle:{table:o,input:t,single:i.length===1}}))},async*read(e,t){const{table:n}=t.handle;yield{columns:n.columns,rows:n.rows}},reference(e,t){const{input:n,single:r}=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");if(!r)throw new Error("That URL holds several tables, so a reference would be ambiguous. Import a copy instead.");return{type:"url",config:{url:n.url,format:"json"}}}};function Wi(e){return e.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported"}async function $p(e,t){const n=await t.text();let r;try{r=JSON.parse(n)}catch(o){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${t.name}: ${o.message}`)});return}if(Vo(r)){await Go(e,n,t.name);return}const s=await Hs(e,vu,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),i=s.landed.reduce((o,l)=>o+l.rowCount,0);s.landed.length>0&&e.ui.dialogs.toast(`Imported ${t.name} (${i.toLocaleString()} rows).`,{kind:"success",title:"Import"})}async function Go(e,t,n,r={}){const s=e.workspaceId();if(!s)throw new Error("json-import: no active workspace");let i;try{i=JSON.parse(t)}catch(A){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${n}: ${A.message}`)});return}const o=n.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",l=Ks(i,o);if(l.length===0)return;let u=l;if(l.length>1){const A=await Is(l.map(L=>({name:L.name,size:L.rows.length})),{title:"Import tables",message:`"${n}" contains ${l.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!A)return;u=A.map(L=>l[L])}const h=(await e.store.tables.find()).filter(A=>A.workspaceId===s),m=new Set(u.map(A=>A.name)),g=h.filter(A=>m.has(A.name));let w;if(g.length===0&&u.length===1)w="append-new";else{const A=g.length>0?[`Overwrite matching (${g.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],L=await e.ui.dialogs.choice(`Importing ${u.length} table${u.length===1?"":"s"} from "${n}".${g.length>0?`

${g.length} table${g.length===1?"":"s"} share a name with existing data.`:""}`,A,"JSON import");if(!L)return;L.startsWith("Overwrite matching")?w="overwrite-matching":L==="Replace entire workspace"?w="replace-workspace":w="append-new"}const y=2e3,$=u.reduce((A,L)=>A+(L.source?0:Math.min(L.rows.length,r.maxRows??1/0)),0);let x=null;if($>=y){const{TopProgress:A}=await ut(async()=>{const{TopProgress:L}=await import("./top-progress-CEpH-ZkJ.js");return{TopProgress:L}},[]);x=A.begin(`Importing ${n}…`)}try{if(w==="replace-workspace")for(const F of h){const V=e.store.rows(F.id),Q=await V.find();await V.bulkRemove(Q.map(ne=>ne.id)),await e.store.tables.remove(F.id)}const A=new Map(h.map(F=>[F.name,F])),L=new Map;let M=0;for(const F of u){const V=F.source,Q=F.origin??(!V&&r.originUrl?{type:"json",url:r.originUrl}:void 0);let ne;const B=w==="overwrite-matching"?A.get(F.name):void 0;let G=F.columns,ie=F.rows;if(r.editColumns&&!B&&!V){const H=await r.editColumns(G,F.name);if(H===null)continue;ie=Ep(ie,G,H),G=H}if(B){if(ne=B.id,!B.source){const H=e.store.rows(ne),K=await H.find();await H.bulkRemove(K.map(ce=>ce.id))}await e.store.tables.patch(ne,{columns:G,...F.title?{title:F.title}:{},...F.windowGeometry?{windowGeometry:F.windowGeometry}:{},...F.sortColumn?{sortColumn:F.sortColumn,sortAsc:F.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...F.filters?{filters:F.filters}:{},...F.labelColumn?{labelColumn:F.labelColumn}:{},...F.info?{info:F.info}:{},...F.deletedColumns?{deletedColumns:F.deletedColumns}:{},...F.readonly?{readonly:!0}:{},source:V??void 0,origin:Q??void 0,updatedAt:Date.now()})}else ne=Ce(),e.events.emit("import:before",{source:"json",tableId:ne}),await e.store.tables.insert({id:ne,workspaceId:s,name:F.name,code:Le(F.name),columns:G,view:"table",...F.title?{title:F.title}:{},...F.windowGeometry?{windowGeometry:F.windowGeometry}:{},...F.sortColumn?{sortColumn:F.sortColumn,sortAsc:F.sortAsc??!0}:{},...F.filters?{filters:F.filters}:{},...F.labelColumn?{labelColumn:F.labelColumn}:{},...F.info?{info:F.info}:{},...F.deletedColumns?{deletedColumns:F.deletedColumns}:{},...F.readonly?{readonly:!0}:{},...V?{source:V}:{},...Q?{origin:Q}:{},updatedAt:Date.now()});L.set(F.name,ne);let re=0;if(!V){const H=e.store.rows(ne),ce=(r.maxRows!=null?ie.slice(0,r.maxRows):ie).map(pe=>({id:Ce(),tableId:ne,data:pe,updatedAt:Date.now()}));await H.bulkInsert(ce),re=ce.length,M+=re,x?.fraction($>0?M/$:1)}e.events.emit("import:after",{source:"json",tableId:ne,rowCount:re})}await xp(e,i,s,L,w==="replace-workspace")}finally{x?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function xp(e,t,n,r,s){if(!Ne(t))return;const i=t,o=Array.isArray(i.viewTemplates)?i.viewTemplates:[],l=Array.isArray(i.viewInstances)?i.viewInstances:[];if(o.length===0&&l.length===0)return;if(s){const h=(await e.store.viewInstances.find()).filter(m=>m.workspaceId===n);await e.store.viewInstances.bulkRemove(h.map(m=>m.id))}const u=await yu(e.store.viewTemplates,n,o);for(const h of l){if(!Ne(h)||typeof h.id!="string")continue;const m=(h.tableName?r.get(h.tableName):void 0)??h.tableId;if(!m)continue;const g=u.get(h.templateId)??h.templateId;await e.store.viewInstances.upsert({...h,workspaceId:n,tableId:m,templateId:g})}}function Ks(e,t){if(Ne(e)&&fo(e))return El(e);if(Ne(e)&&Array.isArray(e.tables)){const n=e,r=[];for(const s of n.tables){if($u(s)){r.push(Tl(s));continue}Ne(s)&&fo(s)&&r.push(...El(s))}return r}if(xu(e))return[Tl(e)];if(Array.isArray(e)){const n=e.filter(Ne);return n.length===0?[]:[{name:t,...Il(n)}]}return Ne(e)?[{name:t,...Il([e])}]:[]}function fo(e){for(const[t,n]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!Ne(n))continue;const r=n;if(Array.isArray(r.dataArray)&&Array.isArray(r.columns))return!0}return!1}function El(e){const t=[];for(const[n,r]of Object.entries(e)){if(!/\.table\.json$/.test(n)||!Ne(r))continue;const s=r;if(!Array.isArray(s.dataArray)||!Array.isArray(s.columns))continue;const i=n.replace(/\.table\.json$/,""),o=s.columns.map(m=>kp(m)),l=o.map(m=>m.field),u=s.dataArray.filter(m=>Array.isArray(m)).map(m=>{const g={};for(let w=0;w<l.length;w++)g[l[w]]=m[w];return g}),h={name:i,columns:o,rows:u};if(s.elementRect&&typeof s.elementRect.x=="number"&&typeof s.elementRect.y=="number"){const m=s.elementRect;h.windowGeometry={x:m.x,y:m.y,w:m.width??600,h:m.height??400,z:m.zIndex??100,minimized:!!m.minimized,maximized:!!m.maximized}}typeof s.sortColumn=="number"&&s.sortColumn>=0&&s.sortColumn<l.length&&(h.sortColumn=l[s.sortColumn],h.sortAsc=(s.sortDirection??"asc")!=="desc"),t.push(h)}return t}function kp(e){const t=String(e.field??"col"),n=String(e.name??t),r=typeof e.type=="string"?e.type:"string",s={field:t,label:n,type:r};return e.isUnique&&(s.unique=!0),e.isNotNull&&(s.notnull=!0),s}function $u(e){return Ne(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function xu(e){return $u(e)&&Array.isArray(e.rows)}function Tl(e){const t=e,n=Ne(t.windowGeometry)?t.windowGeometry:void 0,r=typeof t.sortColumn=="string"?t.sortColumn:void 0,s=typeof t.sortAsc=="boolean"?t.sortAsc:void 0,i=typeof t.title=="string"?t.title:void 0,o=Ne(t.filters)?t.filters:void 0,l=typeof t.labelColumn=="string"?t.labelColumn:void 0,u=Ne(t.info)?t.info:void 0,h=Array.isArray(t.deletedColumns)?t.deletedColumns.filter(y=>typeof y=="string"):void 0,m=t.readonly===!0?!0:void 0,g=Ne(t.source)&&typeof t.source.type=="string"?t.source:void 0,w=Ne(t.origin)&&typeof t.origin.type=="string"&&typeof t.origin.url=="string"?t.origin:void 0;return{name:String(e.name),columns:e.columns.map(Cp),rows:Array.isArray(e.rows)?e.rows.filter(Ne):[],...i?{title:i}:{},...n?{windowGeometry:n}:{},...r?{sortColumn:r,sortAsc:s??!0}:{},...o?{filters:o}:{},...l?{labelColumn:l}:{},...u?{info:u}:{},...h?{deletedColumns:h}:{},...m?{readonly:m}:{},...g?{source:g}:{},...w?{origin:w}:{}}}function Cp(e){if(!Ne(e))return{field:"col",label:"Col",type:"string"};const t=e,n=String(t.field??"col");let r=typeof t.type=="string"?t.type:"string",s=typeof t.renderer=="string"?t.renderer:void 0;(r==="color"||r==="image")&&(s=s??r,r="string");const i={field:n,label:String(t.label??n),type:r};return s&&(i.renderer=s),typeof t.script=="string"&&(i.script=t.script),t.readonly===!0&&(i.readonly=!0),i}function Il(e){const t=new Set;for(const s of e)for(const i of Object.keys(s))t.add(i);return{columns:Array.from(t).map(s=>({field:s,label:s,type:_p(e.map(i=>i[s]))})),rows:e}}function _p(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&Sp(n))?"date":"string"}function Sp(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}([T ]\d{1,2}:\d{2}(:\d{2})?)?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}([T ]\d{1,2}:\d{2})?$/.test(t))}function Ep(e,t,n){const r=Ho(t,n);return r?e.map(r):e}function Ne(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Tp(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const s=r.getAsFile();s&&n.push(s)}return n}return[]}function Ip(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}const Ap=Object.freeze(Object.defineProperty({__proto__:null,init:yp,isWorkspaceDump:Vo,meta:wp,parsedToTables:Ks,restoreWorkspaceDump:Go},Symbol.toStringTag,{value:"Module"})),Yi="",Rp=/\uE000(\d+)\uE000/g;function po(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Qi(e){const t=e.trim();return t===""?null:/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t)?/^(https?|mailto|tel):/i.test(t)?t:null:t}function pr(e){const t=[];let n=e.replaceAll(Yi,"").replace(/(`+)([\s\S]*?)\1/g,(r,s,i)=>(t.push(`<code>${po(i)}</code>`),`${Yi}${t.length-1}${Yi}`));return n=po(n),n=n.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(r,s,i,o)=>{const l=Qi(i);return l===null?r:`<img src="${l}" alt="${s}"${o?` title="${o}"`:""}>`}),n=n.replace(/\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(r,s,i,o)=>{const l=Qi(i);return l===null?r:`<a href="${l}"${o?` title="${o}"`:""} target="_blank" rel="noopener noreferrer">${s}</a>`}),n=n.replace(/&lt;((?:https?|mailto):[^\s&]+)&gt;/g,(r,s)=>{const i=Qi(s);return i===null?r:`<a href="${i}" target="_blank" rel="noopener noreferrer">${i}</a>`}),n=n.replace(/~~([\s\S]+?)~~/g,"<del>$1</del>"),n=n.replace(/\*\*([\s\S]+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__([\s\S]+?)__/g,"<strong>$1</strong>"),n=n.replace(/(^|[^*])\*(?!\s)([^*]+?)\*/g,"$1<em>$2</em>"),n=n.replace(/(^|[\s(])_(?!\s)([^_]+?)_(?=$|[\s).,;:!?])/g,"$1<em>$2</em>"),n=n.replace(/ {2,}\n/g,`<br>
`),n.replace(Rp,(r,s)=>t[Number(s)]??"")}function Xi(e){return e.replace(/^\s*\|/,"").replace(/\|\s*$/,"").split(/(?<!\\)\|/).map(t=>t.trim().replace(/\\\|/g,"|"))}const Op=e=>{const t=e.startsWith(":"),n=e.endsWith(":");return t&&n?' style="text-align:center"':n?' style="text-align:right"':t?' style="text-align:left"':""};function ku(e){if(e==null)return"";const t=typeof e=="string"?e:String(e);if(t.trim()==="")return"";const n=t.replace(/\r\n?/g,`
`).split(`
`),r=[];let s=0;const i=o=>{const l=[];for(;s<n.length&&o(n[s]);)l.push(n[s++]);return l};for(;s<n.length;){const o=n[s];if(o.trim()===""){s++;continue}const l=/^\s*(```+|~~~+)\s*([A-Za-z0-9_+-]*)\s*$/.exec(o);if(l){const m=l[1].slice(0,3);s++;const g=i(y=>!y.trim().startsWith(m));s<n.length&&s++;const w=l[2]?` class="language-${l[2]}"`:"";r.push(`<pre><code${w}>${po(g.join(`
`))}</code></pre>`);continue}const u=/^(#{1,6})\s+(.*)$/.exec(o);if(u){const m=u[1].length;r.push(`<h${m}>${pr(u[2].replace(/\s+#+\s*$/,""))}</h${m}>`),s++;continue}if(/^\s*([-*_])(\s*\1){2,}\s*$/.test(o)){r.push("<hr>"),s++;continue}if(/^\s*>/.test(o)){const m=i(g=>/^\s*>/.test(g)||g.trim()!=="");r.push(`<blockquote>${ku(m.map(g=>g.replace(/^\s*>\s?/,"")).join(`
`))}</blockquote>`);continue}if(o.includes("|")&&s+1<n.length&&/^\s*\|?[\s:|-]+\|[\s:|-]*$/.test(n[s+1])&&n[s+1].includes("-")){const m=Xi(o),g=Xi(n[s+1]).map(Op);s+=2;const w=i(x=>x.trim()!==""&&x.includes("|")),y=m.map((x,A)=>`<th${g[A]??""}>${pr(x)}</th>`).join(""),$=w.map(x=>`<tr>${Xi(x).map((A,L)=>`<td${g[L]??""}>${pr(A)}</td>`).join("")}</tr>`);r.push(`<table><thead><tr>${y}</tr></thead><tbody>${$.join("")}</tbody></table>`);continue}if(/^\s*(?:[-*+]|\d+[.)])\s+/.test(o)){const m=i(g=>g.trim()!==""&&!/^\s*(?:```|~~~|#{1,6}\s)/.test(g));r.push(Cu(m));continue}const h=i(m=>m.trim()!==""&&!/^\s*(?:```|~~~|>|#{1,6}\s|(?:[-*+]|\d+[.)])\s)/.test(m)&&!/^\s*([-*_])(\s*\1){2,}\s*$/.test(m));h.length>0&&r.push(`<p>${pr(h.join(`
`))}</p>`)}return r.join(`
`)}function Cu(e){const t=[];let n=null,r=null;for(const o of e){const l=/^(\s*)(?:([-*+])|(\d+)[.)])\s+(.*)$/.exec(o);if(!l){t[t.length-1]?.text.push(o.trim());continue}const u=l[1].length;if(r??=u,u>r&&t.length>0){t[t.length-1].children.push(o.slice(Math.min(u,r+2)));continue}n??=l[3]!==void 0,t.push({text:[l[4]],children:[],indent:u})}const s=n?"ol":"ul",i=t.map(o=>`<li>${pr(o.text.join(`
`))}${o.children.length>0?Cu(o.children):""}</li>`).join("");return`<${s}>${i}</${s}>`}const mo={markdownToHtml:ku},_u=Object.keys(mo),Al=new Map;function Dp(e){const t=Al.get(e);if(t)return t;const n=new Function("row",..._u,"easydb",`${e}
return render(row);`);return Al.set(e,n),n}function Pp(){return[..._u.map(e=>mo[e]),mo]}function Wo(e,t){if(!e||!e.trim())return{ok:!1,label:"no script",message:""};let n;try{n=Dp(e)}catch(r){return{ok:!1,label:"compile error",message:Rl(r)}}try{return{ok:!0,value:n(t,...Pp())}}catch(r){return{ok:!1,label:"runtime error",message:Rl(r)}}}function Rl(e){return e instanceof Error?e.message:String(e)}const Lp=new Set(["rowid"]);function Yo(e){return Lp.has(e.trim().toLowerCase())}function Mp(e,t){const n=e.sources[0];if(!n)return[];let s=(t[n.alias]??[]).map(u=>({[n.alias]:u}));for(let u=1;u<e.sources.length;u++){const h=e.sources[u];if(!h)continue;const m=t[h.alias]??[],g=h.join,w=[];for(const y of s){const $=g?m.filter(x=>g.on.every(A=>Np(x.data[A.field],y[A.eqAlias]?.data[A.eqField]))):[];if($.length>0)for(const x of $)w.push({...y,[h.alias]:x});else g?.type==="left"&&w.push({...y,[h.alias]:void 0})}s=w}const i=[],o=new Map,l=e.limit!=null&&e.limit>0?e.limit:1/0;for(const u of s){if(i.length>=l)break;const h=u[n.alias];if(!h)continue;const m=jp(e.columns,u);if(!zp(m,e.filters))continue;const g=o.get(h.id)??0;o.set(h.id,g+1),i.push({id:`${h.id}#${g}`,tableId:"",data:m,updatedAt:Up(u)})}return i}function jp(e,t){const n={};for(const r of e){if(r.from.kind!=="source")continue;const s=t[r.from.alias]?.data[r.from.field];n[r.field]=s===void 0?null:s}for(const r of e)if(r.from.kind==="script"){const s=Wo(r.from.script,n);n[r.field]=s.ok?s.value:void 0}return n}function Np(e,t){return e==null||t==null?!1:e===t?!0:typeof e!="object"&&typeof t!="object"?String(e)===String(t):!1}function zp(e,t){if(!t)return!0;for(const[n,r]of Object.entries(t)){if(!r)continue;const s=e[n];if(!(s==null?"":String(s)).toLowerCase().includes(r.toLowerCase()))return!1}return!0}function Up(e){let t=0;for(const n of Object.values(e))n&&n.updatedAt>t&&(t=n.updatedAt);return t}function Or(e){const t=e.sources[0]?.alias,n=new Set;if(!t)return n;for(const r of e.columns)r.from.kind==="source"&&r.from.alias===t&&n.add(r.field);return n}function Su(e,t,n=[],r=[]){const s=Or(e),i=new Map(n.map(m=>[m.field,m])),o=new Set(r),l=new Map;for(const m of e.columns)!o.has(m.field)&&!l.has(m.field)&&l.set(m.field,m);const u=[];for(const m of n)l.has(m.field)&&!u.includes(m.field)&&u.push(m.field);for(const m of l.keys())u.includes(m)||u.push(m);const h=[];for(const m of u){const g=l.get(m);if(!g)continue;const w=i.get(g.field);let y;if(w)y={...w};else if(g.from.kind==="source"){const $=g.from,x=(t[$.alias]??[]).find(A=>A.field===$.field);y=x?{...x,field:g.field}:{field:g.field,label:g.label??g.field,type:g.type??"string"},Yo($.field)&&(y.hidden=!0)}else y={field:g.field,label:g.label??g.field,type:g.type??"string"},y.script=g.from.script;s.has(g.field)?delete y.readonly:y.readonly=!0,h.push(y)}return h}function Fp(e){const t=e.sources[0]?.alias,n=new Map;if(!t)return n;for(const r of e.columns)r.from.kind==="source"&&r.from.alias===t&&!n.has(r.from.field)&&n.set(r.from.field,r.field);return n}function Bp(e,t){const n=Fp(e),r={},s=t.sortBy&&t.sortBy.length>0?t.sortBy:t.sortColumn?[{field:t.sortColumn,asc:t.sortAsc??!0}]:[],i=[];for(const o of s){const l=n.get(o.field);l&&i.push({field:l,asc:o.asc})}if(i.length>0){r.sortBy=i;const o=i[0];o&&(r.sortColumn=o.field,r.sortAsc=o.asc)}if(t.filters){const o={};for(const[l,u]of Object.entries(t.filters)){const h=n.get(l);h&&u&&(o[h]=u)}Object.keys(o).length>0&&(r.filters=o)}return r}function qp(e,t){return t.get(e.tableName)}function Hp(e,t){const n=new Map(t.map(i=>[i.id,i])),r=new Map;for(const i of t)r.has(i.name)||r.set(i.name,i);const s=(i,o)=>{if(o.has(i))return!0;const l=n.get(i);if(l?.source?.type!=="projection")return!1;const u=l.source.config;if(!u||!Array.isArray(u.sources))return!1;const h=new Set(o).add(i);for(const m of u.sources){const g=qp(m,r);if(g&&s(g.id,h))return!0}return!1};return s(e,new Set)}const ur=e=>e.toLowerCase().replace(/[^a-z0-9]/g,""),Ji=e=>e.endsWith("s")&&e.length>1?e.slice(0,-1):e,Ol=e=>e==="id"||e.endsWith("id");function Kp(e,t){const n=ur(e.field),r=ur(t.field);if(!n||!r)return 0;const s=ur(e.table)===ur(t.table);if(n===r)return s||n==="id"?0:n.endsWith("id")?9:7;const i=(l,u,h)=>{if(l!=="id"||!h.endsWith("id")||h.length<=2)return 0;const m=h.slice(0,-2),g=ur(u);return m===g||m===Ji(g)||Ji(m)===Ji(g)?9:5},o=Math.max(i(n,e.table,r),i(r,t.table,n));return o>0?o:e.isPk&&Ol(r)||t.isPk&&Ol(n)?6:0}function Vp(e,t,n=[]){const r=new Set(n.map(o=>`${o.alias}\0${o.field}`)),s=new Set(e.pks??[]),i=o=>{let l=null,u=0;for(const h of t){const m=new Set(h.pks??[]);for(const g of e.fields)for(const w of h.fields){if(o&&r.has(`${h.alias}\0${w}`))continue;const y=Kp({table:e.tableName,field:g,isPk:s.has(g)},{table:h.tableName,field:w,isPk:m.has(w)});y>u&&(u=y,l={thisField:g,otherAlias:h.alias,otherField:w})}}return l};return i(!0)??i(!1)}function Gp(e,t,n){if(!Or(e).has(n))return null;const r=e.columns.find(o=>o.field===n);if(!r||r.from.kind!=="source")return null;const s=t.lastIndexOf("#");return{baseRowId:s>=0?t.slice(0,s):t,field:r.from.field}}async function Eu(e,t,n,r){const s=n.spec.sources.map(m=>({source:m,table:r.resolve(m.tableName)}));if(s.some(m=>!m.table))return null;const i={...n.spec,sources:s.map(({source:m,table:g})=>({...m,tableName:g.name}))},o={};for(const{source:m,table:g}of s)o[m.alias]=g?.columns??[];const l=Su(i,o,[],[]),u=Ko(r.taken,n.name),h={id:Ce(),workspaceId:t,name:u,code:Le(u),columns:l,view:"table",source:{type:"projection",config:i},readonly:Or(i).size===0,...n.sortBy&&n.sortBy.length>0?{sortBy:n.sortBy}:{},...i.filters?{filters:i.filters}:{},updatedAt:Date.now()};return await e.store.tables.insert(h),h}const Tu="__id";function Wp(e){const t=[];let n="",r,s=0;for(;s<e.length;){const i=e[s],o=e[s+1];if(i==="'"||i==='"'){const l=Qo(e,s,i);n+=e.slice(s,l),s=l;continue}if(i==="-"&&o==="-"){let l="";for(s+=2;s<e.length&&e[s]!==`
`;)l+=e[s++];const u=/^\s*projection:\s*(.+?)\s*$/i.exec(l);u?.[1]&&n.trim()===""&&(r=u[1]);continue}if(i==="/"&&o==="*"){for(s+=2;s<e.length&&!(e[s]==="*"&&e[s+1]==="/");)s++;s+=2;continue}if(i===";"){n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),n="",r=void 0,s++;continue}n+=i,s++}return n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),t}function Qo(e,t,n){let r=t+1;for(;r<e.length;){if(e[r]===n){if(e[r+1]===n){r+=2;continue}return r+1}r++}return e.length}function Ut(e){const t=e.trim();return/^".*"$/s.test(t)?t.slice(1,-1).replace(/""/g,'"'):/^\[.*\]$/s.test(t)||/^`.*`$/s.test(t)?t.slice(1,-1):t}function Iu(e,t){const n=[];let r=0,s="",i=0;for(;i<e.length;){const o=e[i];if(o==="'"||o==='"'){const l=Qo(e,i,o);s+=e.slice(i,l),i=l;continue}if(o==="("?r++:o===")"&&r--,r===0){const l=t(e,i);if(l>0){n.push(s),s="",i+=l;continue}}s+=o,i++}return n.push(s),n}function Pn(e,t){return Iu(e,(n,r)=>n.startsWith(t,r)?t.length:0)}function Au(e,t){const n=new RegExp(`^\\s+${t}\\s+`,"i");return Iu(e,(r,s)=>/\s/.test(r[s]??"")?n.exec(r.slice(s,s+t.length+32))?.[0].length??0:0)}function Ru(e){const t=e.indexOf("(");if(t<0)return null;let n=0;for(let r=t;r<e.length;r++){const s=e[r];if(s==="'"||s==='"'){r=Qo(e,r,s)-1;continue}if(s==="(")n++;else if(s===")"&&(n--,n===0))return e.slice(t+1,r)}return null}function Yp(e){const t=e.trim();return/^null$/i.test(t)?null:/^true$/i.test(t)?!0:/^false$/i.test(t)?!1:/^'[\s\S]*'$/.test(t)?t.slice(1,-1).replace(/''/g,"'"):/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(t)?Number(t):t}function Qp(e){const t=e.toUpperCase();return/BOOL/.test(t)?"boolean":/TIMESTAMP|DATETIME/.test(t)?"datetime":/^DATE\b/.test(t)?"date":/INT|NUMERIC|DECIMAL|REAL|DOUBLE|FLOAT|MONEY/.test(t)?"number":"string"}function Xp(e){const t=/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)/i.exec(e);if(!t?.[1])return null;const n=Ru(e);if(n==null)return null;const r=[];for(const s of Pn(n,",")){const i=s.trim();if(!i||/^(PRIMARY|FOREIGN|UNIQUE|CHECK|CONSTRAINT)\b/i.test(i))continue;const o=/^("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[A-Za-z_][\w$]*)\s*([\s\S]*)$/.exec(i);if(!o?.[1])continue;const l=Ut(o[1]);if(l===Tu)continue;const u=o[2]??"",h=/^([A-Za-z]+(?:\s*\([^)]*\))?)/.exec(u.trim())?.[1]??"TEXT",m={field:l,label:l,type:Qp(h)};/\bNOT\s+NULL\b/i.test(u)&&(m.notnull=!0),(/\bUNIQUE\b/i.test(u)||/\bPRIMARY\s+KEY\b/i.test(u))&&(m.unique=!0),r.push(m)}return{name:Ut(t[1]),columns:r,rows:[]}}function Jp(e){const t=/^INSERT\s+(?:OR\s+\w+\s+)?INTO\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s*(\([\s\S]*?\))?\s*VALUES\s*([\s\S]+)$/i.exec(e);if(!t?.[1])return null;const n=Ut(t[1]),r=t[2]?Pn(t[2].slice(1,-1),",").map(o=>Ut(o)):[],s=[];let i=(t[3]??"").trim();for(;i.startsWith("(");){const o=Ru(i);if(o==null)break;const l=Pn(o,",").map(h=>Yp(h)),u={};l.forEach((h,m)=>{const g=r[m]??`col${m+1}`;g!==Tu&&(u[g]=h)}),s.push(u),i=i.slice(o.length+2).trim(),i.startsWith(",")&&(i=i.slice(1).trim())}return{table:n,rows:s}}function Dl(e){const t=/^\s*("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+)(?:\s+(?:AS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+))?\s*$/i.exec(e);if(!t?.[1])return{table:"",alias:""};const n=Ut(t[1]);return{table:n,alias:t[2]?Ut(t[2]):n}}function kr(e){return Pn(e,".").map(Ut)}function Xo(e,t,n){const r=t.filter(s=>(n.get(s.tableName.toLowerCase())??[]).includes(e));return r.some(s=>s.alias===t[0]?.alias)?t[0].alias:(r.length===1?r[0]?.alias:void 0)??t[0]?.alias??""}function Zp(e){let t=e,n;const r=/\s+FETCH\s+FIRST\s+(\d+)\s+ROWS?\s+ONLY\s*$/i.exec(t);r&&(n=Number(r[1]),t=t.slice(0,r.index));const s=/\s+LIMIT\s+(\d+)\s*$/i.exec(t);s&&(n=Number(s[1]),t=t.slice(0,s.index));let i;const o=/\s+ORDER\s+BY\s+([\s\S]+)$/i.exec(t);o?.[1]&&(i=o[1],t=t.slice(0,o.index));let l;const u=/\s+WHERE\s+([\s\S]+)$/i.exec(t);return u?.[1]&&(l=u[1],t=t.slice(0,u.index)),{from:t,limit:n,orderBy:i,where:l}}function em(e,t,n,r,s){const i=[],o=l=>l.length===2?l[0]??"":Xo(l[0]??"",n,r);for(const l of Au(e,"AND")){const u=/^\s*([\w".$[\]`]+)\s*=\s*([\w".$[\]`]+)\s*$/.exec(l);if(!u?.[1]||!u[2]){s.push(`ON ${l.trim()}`);continue}const h=kr(u[1]),m=kr(u[2]),g=o(h)===t.alias,w=g?h:m,y=g?m:h;if(o(w)!==t.alias){s.push(`ON ${l.trim()} — neither side names ${t.alias}`);continue}i.push({field:w.length===2?w[1]??"":w[0]??"",eqAlias:y.length===2?y[0]??"":o(y),eqField:y.length===2?y[1]??"":y[0]??""})}return i}function tm(e,t,n){const r=/\s+(LEFT|RIGHT|FULL|INNER|CROSS)(?:\s+OUTER)?\s+JOIN\s+|\s+JOIN\s+/gi,s=[],i=[];let o=0;for(let h=r.exec(e);h;h=r.exec(e))s.push(e.slice(o,h.index)),i.push((h[1]??"INNER").toUpperCase()),o=h.index+h[0].length;s.push(e.slice(o));const l=Dl(s[0]??"");if(!l.table)return null;const u=[{alias:l.alias,tableName:l.table}];for(let h=1;h<s.length;h++){const m=s[h]??"",g=/\s+ON\s+([\s\S]+)$/i.exec(m),w=Dl(g?m.slice(0,g.index):m);if(!w.table)continue;const y=i[h-1]??"INNER";if(y==="CROSS"||!g?.[1]){n.push(`${y} JOIN ${w.table} — no ON predicate to model`),u.push({alias:w.alias,tableName:w.table});continue}(y==="RIGHT"||y==="FULL")&&n.push(`${y} JOIN ${w.table} — imported as LEFT JOIN (the closest a projection can express)`);const $=[...u,{alias:w.alias,tableName:w.table}];u.push({alias:w.alias,tableName:w.table,join:{type:y==="INNER"?"inner":"left",on:em(g[1],w,$,t,n)}})}return u}function nm(e,t,n,r){const s=[];for(const i of Pn(e,",")){const o=i.trim();if(!o)continue;if(o==="*"){r.push("SELECT * — a projection needs its columns listed");continue}const l=/^([\s\S]*?)\s+AS\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[\w$]+)$/i.exec(o),u=(l?.[1]??o).trim(),h=kr(u),m=Ut(l?.[2]??h[h.length-1]??u);if(/^NULL$/i.test(u)){s.push({field:m,from:{kind:"script",script:im}});continue}h.length===2&&h[0]&&h[1]?s.push({field:m,from:{kind:"source",alias:h[0],field:h[1]}}):h.length===1&&h[0]&&/^[\w$]+$/.test(h[0])?s.push({field:m,from:{kind:"source",alias:Xo(h[0],t,n),field:h[0]}}):r.push(`SELECT ${o} — expression not modelled`)}return s}function rm(e,t){const n={};if(!e)return n;for(const r of Au(e,"AND")){const s=/^\s*LOWER\(\s*([\w".$[\]`]+)\s*\)\s+LIKE\s+'%([\s\S]*)%'\s*$/i.exec(r.trim()),i=s?.[1]?Ou(t.columns,kr(s[1]),t.sources,t.schema):void 0;if(!s||!i){t.unsupported.push(`WHERE ${r.trim()}`);continue}n[i.field]=(s[2]??"").replace(/''/g,"'")}return n}function sm(e,t){const n=[];for(const r of Pn(e??"",",")){const s=r.trim();if(!s)continue;const[i,o]=s.split(/\s+/),l=Ou(t.columns,kr(i??""),t.sources,t.schema);if(!l){t.unsupported.push(`ORDER BY ${s}`);continue}n.push({field:l.field,asc:!/^DESC$/i.test(o??"")})}return n}function Pl(e,t,n,r){const s=[],i=e.replace(/\s+/g," ").trim(),o=/^SELECT\s+(?:TOP\s+(\d+)\s+)?([\s\S]+?)\s+FROM\s+([\s\S]+)$/i.exec(i);if(!o)return null;const{from:l,limit:u,orderBy:h,where:m}=Zp(o[3]??""),g=u??(o[1]?Number(o[1]):void 0),w=tm(l,n,s);if(!w)return null;const y=nm(o[2]??"",w,n,s),$={columns:y,sources:w,schema:n,unsupported:s},x=rm(m,$),A=sm(h,$),L={version:1,sources:w,columns:y};return Object.keys(x).length>0&&(L.filters=x),g!=null&&g>0&&(L.limit=g),{projection:{name:r||t,spec:L,...A.length>0?{sortBy:A}:{}},unsupported:s}}const im=["// This column was computed in-app; SQL carried only its NAME,","// not its script. Re-enter the expression here.","function render(row) {","  return null;","}"].join(`
`);function Ou(e,t,n,r){const s=t.length===2?t[0]:Xo(t[0]??"",n,r),i=t.length===2?t[1]:t[0];return e.find(o=>o.from.kind==="source"&&o.from.alias===s&&o.from.field===i)??e.find(o=>o.field===i)}function Vs(e){const t=new Map,n=[],r=[],s=new Map,i=o=>{s.set(o.name.toLowerCase(),o.columns.map(l=>l.field))};for(const o of Wp(e)){const l=o.sql;if(/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\b/i.test(l)){const u=Xp(l);if(!u){r.push(dr(l));continue}const h=t.get(u.name);t.set(u.name,{...u,rows:h?.rows??[]}),i(u);continue}if(/^INSERT\s+/i.test(l)){const u=Jp(l);if(!u){r.push(dr(l));continue}const h=t.get(u.table);if(h)h.rows.push(...u.rows);else{const m={name:u.table,columns:om(u.rows),rows:u.rows};t.set(u.table,m),i(m)}continue}if(/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\b/i.test(l)){const u=/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s+AS\s+(SELECT[\s\S]+)$/i.exec(l),h=u?.[1]?Ut(u[1]):"",m=u?.[2]?Pl(u[2],h||"view",s,h):null;m?(n.push(m.projection),r.push(...m.unsupported)):r.push(dr(l));continue}if(/^SELECT\b/i.test(l)){const u=Pl(l,"",s,o.name);u?(n.push(u.projection),r.push(...u.unsupported)):r.push(dr(l));continue}/^(BEGIN|START\s+TRANSACTION|COMMIT|END|DROP|PRAGMA|SET|USE|ANALYZE|VACUUM)\b/i.test(l)||r.push(dr(l))}for(const o of n)o.name||(o.name=`${o.spec.sources[0]?.tableName??"query"} view`);return{tables:[...t.values()],projections:n,unsupported:r}}function dr(e){const t=e.split(`
`)[0]?.trim()??e;return t.length>120?`${t.slice(0,117)}…`:t}function om(e){const t=[];for(const n of e)for(const r of Object.keys(n))t.includes(r)||t.push(r);return t.map(n=>{const r=e.map(i=>i[n]).filter(i=>i!=null),s=r.length===0?"string":r.every(i=>typeof i=="number")?"number":r.every(i=>typeof i=="boolean")?"boolean":"string";return{field:n,label:n,type:s}})}const am={id:"sql-import",name:"SQL Import",type:"importer",version:"0.1.0",description:"Import a .sql script: CREATE TABLE + INSERT become tables, and each SELECT (or CREATE VIEW) becomes a projection.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-import.ts"};function lm(e){e.ui.registerImporter(Jo),e.ui.registerDropHandler(async t=>{const n=dm(t).filter(hm);if(n.length===0)return!1;t.preventDefault();for(const r of n)await um(e,r);return!0})}const Jo={id:"sql",label:"SQL script (CREATE TABLE / INSERT / SELECT)",icon:"database",order:30,accept:[".sql","application/sql","text/sql","application/x-sql"],supports:{url:!0,file:!0,text:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";return/\.sql$/i.test(t)?1:(e.file?.type??"").includes("sql")?.9:/^\s*(--|\/\*|BEGIN\b|CREATE\s+TABLE\b|INSERT\s+INTO\b|DROP\s+TABLE\b)/i.test(e.text??"")?.6:0},async list(e,t){return Vs(await cm(e,t)).tables.map(r=>({name:r.name,rowCount:r.rows.length,handle:{columns:r.columns,rows:r.rows}}))},async*read(e,t){const{columns:n,rows:r}=t.handle;yield{columns:n,rows:r}}};function cm(e,t){return t.kind==="file"&&t.file?t.file.text():t.kind==="url"&&t.url?e.fetchText(t.url,`Reading ${zt(t.url)}…`):Promise.resolve(t.text??"")}function Zo(e){return Vs(e).projections.length>0}async function ea(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("sql-import: no active workspace");const s=Vs(t),i={tables:[],projections:[],rowCount:0,unsupported:s.unsupported},o=n.target??{kind:"new"},l=o.kind==="new"||s.tables.length===1;l||i.unsupported.push(`"Import into" was not applied — this script defines ${s.tables.length} tables, and an append/replace names only one destination`);const u=new Map;for(const y of s.tables){const $=await wu(e,y.name,(async function*(){yield{columns:y.columns,rows:y.rows}})(),{workspaceId:r,importerId:"sql",target:l?o:{kind:"new"},...n.maxRows!==void 0?{maxRows:n.maxRows}:{},...n.editColumns?{editColumns:x=>n.editColumns(x,y.name)}:{}});$&&(u.set(y.name,$.tableName),i.tables.push($.tableName),i.rowCount+=$.rowCount)}const h=await e.store.tables.find({workspaceId:r}),m=new Map;for(const y of h)m.has(y.name)||m.set(y.name,y);const g=new Map;for(const y of h)g.has(y.name.toLowerCase())||g.set(y.name.toLowerCase(),y);const w=new Set([...h.map(y=>y.name),...i.tables]);for(const y of s.projections){const $=await Eu(e,r,y,{resolve:x=>{const A=u.get(x);return(A?m.get(A):void 0)??m.get(x)??g.get(x.toLowerCase())},taken:w});if(!$){i.unsupported.push(`projection "${y.name}" — its source tables are not in this workspace`);continue}m.set($.name,$),g.set($.name.toLowerCase(),$),w.add($.name),i.projections.push($.name)}return i}function ta(e,t,n){const r=[];if(t.tables.length>0&&r.push(`${t.tables.length} table${t.tables.length===1?"":"s"} (${t.rowCount.toLocaleString()} rows)`),t.projections.length>0&&r.push(`${t.projections.length} projection${t.projections.length===1?"":"s"}`),r.length===0){e.ui.dialogs.toast(`Nothing importable found in ${n}.`,{kind:"warning",title:"SQL import"});return}const s=t.unsupported.length>0?` — ${t.unsupported.length} statement${t.unsupported.length===1?"":"s"} could not be imported: ${t.unsupported.slice(0,3).join("; ")}${t.unsupported.length>3?"…":""}`:"";e.ui.dialogs.toast(`Imported ${r.join(" and ")} from ${n}${s}.`,{kind:t.unsupported.length>0?"warning":"success",title:"SQL import"})}async function um(e,t){const n=await t.text();try{if(Zo(n)){ta(e,await ea(e,n),t.name);return}const r=await Hs(e,Jo,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),s=r.landed.reduce((i,o)=>i+o.rowCount,0);r.landed.length>0?e.ui.dialogs.toast(`Imported ${r.landed.length} table${r.landed.length===1?"":"s"} (${s.toLocaleString()} rows) from ${t.name}.`,{kind:"success",title:"SQL import"}):e.ui.dialogs.toast(`Nothing importable found in ${t.name}.`,{kind:"warning",title:"SQL import"})}catch(r){e.ui.dialogs.toast(`Could not import ${t.name}: ${r.message}`,{kind:"error",title:"SQL import"})}}function dm(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);const n=[];for(const r of Array.from(t.items??[]))if(r.kind==="file"){const s=r.getAsFile();s&&n.push(s)}return n}function hm(e){return/\.sql$/i.test(e.name)||(e.type??"").includes("sql")}const fm=Object.freeze(Object.defineProperty({__proto__:null,hasSqlProjections:Zo,init:lm,meta:am,reportSqlRestore:ta,restoreSqlScript:ea,sqlImporterSpec:Jo},Symbol.toStringTag,{value:"Module"}));var pm=Object.defineProperty,mm=Object.getOwnPropertyDescriptor,na=(e,t,n,r)=>{for(var s=r>1?void 0:r?mm(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&pm(t,n,s),s};let hs=null;function gm(){return hs||(hs=document.createElement("anchored-menu"),document.body.appendChild(hs)),hs}let wn=class extends ve{constructor(){super(...arguments),this.items=[],this.shown=!1,this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.finish(null)},this.onKey=e=>{e.key==="Escape"&&(e.preventDefault(),this.finish(null))}}static open(e,t){return gm().openMenu(e,t)}connectedCallback(){super.connectedCallback(),this.setAttribute("hidden","")}openMenu(e,t){return this.items=t,this.style.left=`${Math.round(e.left)}px`,this.style.top=`${Math.round(e.bottom+4)}px`,this.removeAttribute("hidden"),this.shown=!0,this.updateComplete.then(()=>{const n=this.shadowRoot?.querySelector(".menu");if(!n)return;const r=n.getBoundingClientRect();r.bottom>window.innerHeight&&(this.style.top=`${Math.round(e.top-r.height-4)}px`)}),new Promise(n=>{this.resolveFn=n,setTimeout(()=>{document.addEventListener("mousedown",this.onOutside,!0),document.addEventListener("keydown",this.onKey,!0)},0)})}finish(e){this.setAttribute("hidden",""),this.shown=!1,document.removeEventListener("mousedown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey,!0);const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}render(){return this.shown?C`
      <div class="menu" role="menu">
        ${this.items.map(e=>C`
            <button
              role="menuitem"
              class=${e.danger?"danger":""}
              @click=${()=>this.finish(e.id)}
            >
              ${e.icon?C`<span class="mi">${e.icon}</span>`:""}
              <span>${e.label}</span>
            </button>
          `)}
      </div>
    `:C``}};wn.styles=[gt,xe`
      :host {
        position: fixed;
        z-index: 150000;
      }
      :host([hidden]) {
        display: none;
      }
      .menu {
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 0.4rem;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
        padding: 0.25rem;
        min-width: 190px;
        /* Shadow DOM does not inherit the page font, so the buttons' inherited
           font would fall back to the browser default serif. Set the app's
           chrome font (system-ui) explicitly; the buttons inherit it. */
        font-family: system-ui, sans-serif;
        font-size: 0.875rem;
        color: #111;
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
        color: #111;
      }
      button:hover {
        background: #f3f4f6;
      }
      button.danger {
        color: #b91c1c;
      }
      .mi {
        font-size: 1.15rem;
        color: #6b7280;
      }
    `];na([U()],wn.prototype,"items",2);na([U()],wn.prototype,"shown",2);wn=na([Se("anchored-menu")],wn);const Cr=Object.freeze(Object.defineProperty({__proto__:null,get AnchoredMenu(){return wn}},Symbol.toStringTag,{value:"Module"})),go='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',bm={id:"connect-menu",name:"Connect",type:"ui",version:"0.1.0",description:"Header Connect button listing every registered live-backend connector. Chrome only — it knows no backend.",author:"Marc Cawood",icon:go,repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/connect-menu.ts"};function wm(e){e.ui.registerHeaderButton({id:"connect-menu:open",label:"Connect",icon:go,tooltip:"Connect a live table on a remote backend (rows are never stored locally)",onClick:(t,n)=>Ll(t,n?.anchor)}),e.ui.registerCommand({id:"connect-menu:open",title:"Connect a live table…",group:"Data",icon:go,keywords:["datasette","live","remote","backend"],run:t=>Ll(t)})}async function ym(){const{registries:e}=await ae();return[...e.connectors].sort((t,n)=>(t.order??Number.MAX_SAFE_INTEGER)-(n.order??Number.MAX_SAFE_INTEGER))}async function Ll(e,t){const n=await ym();if(n.length===0){await e.ui.dialogs.alert("No backends are installed to connect to. Install a connector plugin from the Plugin Manager first.","Connect");return}let r=n[0];if(n.length>1){const s=t?.getBoundingClientRect(),i=s?await wn.open(s,n.map(o=>({id:o.id,label:o.label,icon:o.icon}))):await e.ui.dialogs.choice("Which backend do you want to connect to?",n.map(o=>o.label),"Connect");if(!i)return;r=s?n.find(o=>o.id===i):n.find(o=>o.label===i)}if(r)try{await r.connect(e)}catch(s){await e.ui.dialogs.alert(s?.message??String(s),`Connect ${r.label} failed`)}}const vm=Object.freeze(Object.defineProperty({__proto__:null,init:wm,meta:bm},Symbol.toStringTag,{value:"Module"}));function Ml(e,t){return JSON.stringify(t.map(n=>e[n]))}function $m(e,t){return t.every(n=>e[n]!==null&&e[n]!==void 0)}function Du(e){const{oldRows:t,freshRows:n,pks:r,userAddedFields:s,deletedRemoteFields:i=[]}=e,o=new Set(i),l=g=>{const w={...g};for(const y of o)delete w[y];return w};if(!(r.length>0&&n.every(g=>$m(g,r))))return{data:n.map(l),merged:!1};const h=new Map;for(const g of t){const w=Ml(g.data,r);h.has(w)||h.set(w,g)}return{data:n.map(g=>{const w=l(g),y=Ml(g,r),$=h.get(y);if($)for(const x of s)Object.prototype.hasOwnProperty.call($.data,x)&&(w[x]=$.data[x]);return w}),merged:!0}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pu=Symbol.for(""),xm=e=>{if(e?.r===Pu)return e?._$litStatic$},jl=e=>({_$litStatic$:e,r:Pu}),Nl=new Map,km=e=>(t,...n)=>{const r=n.length;let s,i;const o=[],l=[];let u,h=0,m=!1;for(;h<r;){for(u=t[h];h<r&&(i=n[h],(s=xm(i))!==void 0);)u+=s+t[++h],m=!0;h!==r&&l.push(i),o.push(u),h++}if(h===r&&o.push(t[r]),m){const g=o.join("$$lit$$");(t=Nl.get(g))===void 0&&(o.raw=o,Nl.set(g,t=o)),n=l}return e(t,...n)},zl=km(C);function Ul(e){return e==null||String(e).trim()===""}function Dr(e){const t=[];let n="",r=!1,s=!1,i=!1,o=!1,l=!1,u=!1,h=!0;const m=()=>{const g=i?n:n.trim();if(r||o){const w={term:g,negate:o};l&&(w.prefix=!0),u&&(w.exact=!0),t.push(w)}n="",r=!1,s=!1,i=!1,o=!1,l=!1,u=!1,h=!0};for(let g=0;g<e.length;g++){const w=e[g];if(w==='"'){if(s&&e[g+1]==='"'){n+='"',r=!0,g++;continue}s=!s,i=!0,r=!0,h=!1;continue}if(w===","&&!s){m();continue}if(w==="!"&&!s&&h&&!o&&!l&&!u){o=!0;continue}if(w==="="&&!s&&h&&!l&&!u){u=!0;continue}if(w==="^"&&!s&&h&&!l&&!u){l=!0;continue}h&&!s&&/\s/.test(w)||(h=!1),n+=w,/\s/.test(w)||(r=!0)}return m(),t}function Cm(e){return e.includes(",")||e.includes('"')||e!==e.trim()||e===""||e.startsWith("!")||e.startsWith("^")||e.startsWith("=")}function _r(e){return e.map(t=>{const n=t.term===""&&t.negate?"":Cm(t.term)?`"${t.term.replace(/"/g,'""')}"`:t.term,r=t.exact?"=":t.prefix?"^":"";return(t.negate?"!":"")+r+n}).join(",")}function Fl(e,t){const n=t.term;if(n.trim()===""||!t.prefix&&!t.exact&&n.toUpperCase()==="NULL")return Ul(e);const r=String(e??"").toLowerCase(),s=n.toLowerCase();return t.exact?r===s:t.prefix?r.startsWith(s):r.includes(s)}function As(e,t){const n=Dr(t);if(n.length===0)return!0;for(const s of n)if(s.negate&&Fl(e,s))return!1;const r=n.filter(s=>!s.negate);return r.length===0?!0:r.some(s=>Fl(e,s))}var _m=Object.defineProperty,Sm=Object.getOwnPropertyDescriptor,Bn=(e,t,n,r)=>{for(var s=r>1?void 0:r?Sm(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&_m(t,n,s),s};function Zi(e){return _r([{...e,negate:!1}])}let at=class extends ve{constructor(){super(...arguments),this.values=[],this.blanks=0,this.current="",this.search="",this.states=new Map,this.resolveFn=null,this.onChange=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,n,r=0,s){return this.values=t,this.blanks=r,this.onChange=s??null,this.states=new Map(Dr(n??"").map(i=>[Zi(i),{state:i.negate?"not":"on",token:i}])),this.current=n??"",this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(i=>{this.resolveFn=i,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}cycle(e){const t={term:e,negate:!1},n=Zi(t),r=new Map(this.states),s=r.get(n);s===void 0?r.set(n,{state:"on",token:t}):s.state==="on"?r.set(n,{state:"not",token:s.token}):r.delete(n),this.states=r;const i=[...r.values()].map(o=>({...o.token,negate:o.state==="not"}));this.current=_r(i),this.onChange?.(this.current)}close(e){this.onChange=null,document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),at.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),at.instance===this&&(at.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(o=>o.value.toLowerCase().includes(e)),n=this.blanks>0&&"(blanks)".includes(e),r=o=>this.states.get(Zi({term:o,negate:!1}))?.state,s=o=>C`
      <span class=${`cb${o?` ${o}`:""}`}
        >${o==="on"?"✓":o==="not"?"✕":""}</span
      >
    `,i=o=>o==="on"?"Included — click to exclude":o==="not"?"Excluded — click to clear":"Click to include → exclude → off";return C`
      <header>
        <span class="mi sm">search</span>
        <input
          type="text"
          autofocus
          placeholder="Filter values…"
          .value=${this.search}
          @input=${o=>this.search=o.target.value}
        />
        <button
          class="icon"
          title="Close"
          @click=${()=>this.close(null)}
        >
          <span class="mi sm">close</span>
        </button>
      </header>
      <div class="hint">Click a value: include (✓) → exclude (✕) → off.</div>
      ${t.length===0&&!n?C`<div class="empty">No matching values.</div>`:C`<ul>
            ${n?C`
                  <li
                    class="blanks"
                    title=${i(r("NULL"))}
                    @click=${()=>this.cycle("NULL")}
                  >
                    <span class="left">
                      ${s(r("NULL"))}
                      <span class="label"><em>(Blanks)</em></span>
                    </span>
                    <span class="count">${this.blanks}</span>
                  </li>
                `:""}
            ${t.slice(0,500).map(o=>{const l=r(o.value);return C`
                <li title=${i(l)} @click=${()=>this.cycle(o.value)}>
                  <span class="left">
                    ${s(l)}
                    <span class="label">${o.value}</span>
                  </span>
                  <span class="count">${o.count}</span>
                </li>
              `})}
          </ul>`}
      ${this.values.length>500?C`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button
          class="text"
          @click=${()=>{this.states=new Map,this.close({clear:!0})}}
        >
          Clear filter
        </button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};at.instance=null;at.styles=[gt,xe`
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
    `];Bn([ht({type:Array})],at.prototype,"values",2);Bn([ht({type:Number})],at.prototype,"blanks",2);Bn([ht({type:String})],at.prototype,"current",2);Bn([U()],at.prototype,"search",2);Bn([U()],at.prototype,"states",2);at=Bn([Se("filter-popover")],at);var Em=Object.defineProperty,Tm=Object.getOwnPropertyDescriptor,St=(e,t,n,r)=>{for(var s=r>1?void 0:r?Tm(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Em(t,n,s),s};let dt=class extends ve{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const n=t[this.highlightIdx];n!==void 0?(e.preventDefault(),this.onPick(n)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const n=[];for(const r of this.options)if(r.toLowerCase().includes(t)&&(n.push(r),n.length>=500))break;return n}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=this.open&&e.length>0,n=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return C`
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
        ${this.value?C`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${r=>r.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:se}
      </div>
      ${t?C`<ul
            class="dropdown"
            style=${n}
            @mousedown=${r=>r.preventDefault()}
          >
            ${e.map((r,s)=>C`
                <li
                  class=${s===this.highlightIdx?"highlighted":""}
                  @mousedown=${i=>i.preventDefault()}
                  @click=${()=>this.onPick(r)}
                >
                  ${r}
                </li>
              `)}
          </ul>`:se}
    `}};dt.styles=xe`
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
  `;St([ht({type:String})],dt.prototype,"value",2);St([ht({type:Array})],dt.prototype,"options",2);St([ht({type:String})],dt.prototype,"placeholder",2);St([U()],dt.prototype,"open",2);St([U()],dt.prototype,"highlightIdx",2);St([U()],dt.prototype,"dropTop",2);St([U()],dt.prototype,"dropLeft",2);St([U()],dt.prototype,"dropMinWidth",2);St([U()],dt.prototype,"editing",2);St([Pt("input")],dt.prototype,"inputEl",2);dt=St([Se("filter-combobox")],dt);function Im(e){const t=e.trim(),n=t.split(/\s+/).filter(Boolean);if(!n.some(l=>l==="AND"||l==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:n.map(l=>l.toLowerCase())};const s=[];let i=[];for(const l of n)l==="OR"?(s.push(i),i=[]):l==="AND"||i.push(l.toLowerCase());s.push(i);const o=s.filter(l=>l.length>0);return o.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:o}}function Am(e,t,n){const r=Im(t);if(r.kind==="boolean")return e.filter(u=>r.groups.some(h=>h.every(m=>n(u,m))));const{phrase:s,words:i}=r;if(i.length<=1)return s===""?e:e.filter(u=>n(u,s));const o=e.filter(u=>n(u,s));if(o.length>0)return o;const l=e.filter(u=>i.every(h=>n(u,h)));return l.length>0?l:e.filter(u=>i.some(h=>n(u,h)))}const Rm=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function Rs(e,t,n){const r=new Map;for(const l of n)r.set(l.field.toLowerCase(),l.field),l.label&&r.set(l.label.toLowerCase(),l.field);const s=[...r.keys()].filter(Boolean).sort((l,u)=>u.length-l.length);let i=t;return s.length>0&&(i=i.replace(new RegExp(`(^|\\s)(${s.map(Rm).join("|")}):\\s+`,"gi"),"$1$2:")),Am(e,i,(l,u)=>{const h=u.indexOf(":");if(h>0){const m=r.get(u.slice(0,h));if(m)return As(l.data[m],u.slice(h+1))}return Object.values(l.data).some(m=>m!=null&&String(m).toLowerCase().includes(u))})}const Os="easydb:visible-count";function Lu(e,t,n){e&&document.dispatchEvent(new CustomEvent(Os,{detail:{key:e,count:t,total:n}}))}function Mu(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}const ju="#dc2626",Nu="cell-invalid",Om=`border-color:${ju};background:#fef2f2`;function ra(e,t){e.classList.add(Nu),e.style.border=`1px solid ${ju}`,e.style.background="#fef2f2",t&&(e.title=t)}function Dm(e,t){if(e==null||typeof e=="string"&&e.trim()==="")return"empty";switch(t){case"boolean":return zu(e)==="invalid"?"invalid":"ok";case"number":return Number.isFinite(typeof e=="number"?e:Number(e))?"ok":"invalid";case"date":case"datetime":return Number.isNaN(Date.parse(String(e)))?"invalid":"ok";default:return"ok"}}const Pm=/^\s*(true|1)\s*$/i,Lm=/^\s*(false|0)\s*$/i;function zu(e){return e===!0||e===1?"true":e===!1||e===0?"false":e==null?"empty":typeof e=="string"?e.trim()===""?"empty":Pm.test(e)?"true":Lm.test(e)?"false":"invalid":"invalid"}var Mm=Object.defineProperty,jm=Object.getOwnPropertyDescriptor,De=(e,t,n,r)=>{for(var s=r>1?void 0:r?jm(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Mm(t,n,s),s};const Nm=200,zm=10,eo=32;let Ie=class extends ve{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortSpecs=[],this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.tableReadonly=!1,this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}get readOnlyView(){return this.viewMode&&!!this.viewInst?.readonly}get readOnly(){return this.readOnlyView||this.tableReadonly}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),this.resizing=null}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,n=this.rows.length;t===this.lastEmittedCount&&n===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=n,Lu(e,t,n))}async bind(){if(!this.tableId)return;const e=await ae(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(s=>{const i=s.find(o=>o.id===this.tableId);i&&(this.tableColumns=i.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(s=>{const i=s.find(o=>o.id===this.viewInstanceId);i&&(this.viewInst=i,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(s=>{const i=s.find(o=>o.id===this.tableId);i&&this.applyTable(i)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const n=e.store.rows(this.tableId);this.unsubscribe=n.subscribe(s=>this.rows=s);const r=window.setTimeout(()=>this.loading=!0,Nm);try{this.rows=await n.find()}catch(s){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${s?.message??String(s)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(r),this.loading=!1}}applyTable(e){this.resizing==null&&(this.columns=e.columns),this.tableReadonly=!!e.readonly,this.sortSpecs=Hl(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(r=>[r.field,r])),n=e.columnWidths??{};this.columns=e.visibleColumns.map(r=>t.get(r)).filter(r=>!!r).map(r=>{const s=n[r.field];return typeof s=="number"?{...r,width:s}:r}),this.sortSpecs=Hl(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,n){const r=await ae();await this.commitCell(r,e,t,n)}async commitCell(e,t,n,r){const s=this.columns.find(i=>i.field===n);if(s){const i=Bm(s,r,this.rows,t.id);if(i){await e.api.ui.dialogs.alert(i,`Cannot save ${s.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[n]:r},updatedAt:Date.now()})}catch(i){await e.api.ui.dialogs.alert(i?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const n=e.target;typeof t=="boolean"?n.checked=t:n.value=t,n.blur()}renderInvalidCell(e,t,n,r){const s=String(n);return C`<input
      type="text"
      class=${Nu}
      style=${Om}
      title=${r}
      .value=${s}
      @keydown=${i=>this.cancelCellEdit(i,s)}
      @change=${i=>this.setCell(e,t.field,i.target.value)}
    />`}renderReadonlyCell(e,t){return e.type==="boolean"?C`<input type="checkbox" .checked=${t===!0||t==="true"||t===1||t==="1"} disabled />`:t==null||t===""?C``:e.type==="date"?C`${fs(t)}`:e.type==="datetime"?C`${ps(t).replace("T"," ")}`:C`${String(t)}`}renderScriptedCell(e,t){const n=Wo(t.script,e.data);if(!n.ok)return C`<span class="script-err" title=${n.message}>⚠ ${n.label}</span>`;const r=t.renderer?this.cellRenderers?.get(t.renderer):void 0;if(!r)return C`${n.value==null?"":String(n.value)}`;const s=jl(r);return zl`<${s}
      .value=${n.value??""}
      .rawValue=${e.data[t.field]??""}
      .column=${t}
      .row=${e.data}
      .readonly=${!0}
      @change=${this.readOnly?void 0:i=>this.setCell(e,t.field,i.detail.value)}
    ></${s}>`}renderCell(e,t){const n=e.data[t.field];if(t.script?.trim())return this.renderScriptedCell(e,t);const r=this.readOnly||t.readonly===!0,s=t.renderer,i=s?this.cellRenderers?.get(s):void 0;if(i){const o=jl(i);return zl`<${o}
        .value=${n??""}
        .column=${t}
        .row=${e.data}
        .readonly=${r}
        @change=${r?void 0:l=>this.setCell(e,t.field,l.detail.value)}
      ></${o}>`}if(r)return this.renderReadonlyCell(t,n);switch(t.type){case"date":return ql(n,fs(n))?this.renderInvalidCell(e,t,n,`Not a valid date: "${String(n)}"`):C`<input
          type="date"
          .value=${fs(n)}
          @keydown=${o=>this.cancelCellEdit(o,fs(n))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"datetime":return ql(n,ps(n))?this.renderInvalidCell(e,t,n,`Not a valid datetime: "${String(n)}"`):C`<input
          type="datetime-local"
          .value=${ps(n)}
          @keydown=${o=>this.cancelCellEdit(o,ps(n))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"number":{const o=n==null||n==="";return!o&&Number.isNaN(Number(n))?this.renderInvalidCell(e,t,n,`Not a valid number: "${String(n)}"`):C`<input
          type="number"
          .value=${o?"":String(n)}
          @keydown=${l=>this.cancelCellEdit(l,o?"":String(n))}
          @change=${l=>{const u=l.target.value;this.setCell(e,t.field,u===""?null:Number(u))}}
        />`}default:return C`<input
          type="text"
          .value=${String(n??"")}
          @keydown=${o=>this.cancelCellEdit(o,String(n??""))}
          @change=${o=>this.setCell(e,t.field,o.target.value)}
        />`}}async deleteRow(e){const t=await ae();try{await t.store.rows(this.tableId).remove(e)}catch(n){await t.api.ui.dialogs.alert(n?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e,t=!1){const n=this.sortSpecs.find(i=>i.field===e),r=this.sortSpecs.length===1&&this.sortSpecs[0]?.field===e;if(!t&&!r){this.sortSpecs=[{field:e,asc:!0}],await this.persistSort(this.sortSpecs);return}const s=t?this.sortSpecs.filter(i=>i.field!==e):[];n?n.asc&&s.push({field:e,asc:!1}):s.push({field:e,asc:!0}),this.sortSpecs=s,await this.persistSort(s)}async persistSort(e){const t=e[0],n={sortBy:e.length>0?e:void 0,sortColumn:t?.field,sortAsc:t?t.asc:void 0,updatedAt:Date.now()},r=await ae();this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,n):await r.store.tables.patch(this.tableId,n)}filteredRows(){const e=new Set(this.columns.filter(o=>o.filterable===!1).map(o=>o.field)),t=Object.entries(this.filters).filter(([o,l])=>l&&l.trim().length>0&&!e.has(o)),n=this.globalQuery.trim(),r=this.localQuery.trim();if(t.length===0&&n.length===0&&r.length===0)return this.rows;let s=this.rows;t.length>0&&(s=s.filter(o=>t.every(([l,u])=>As(o.data[l],u))));const i=this.columns.filter(o=>o.filterable!==!1);return r&&(s=Rs(s,r,i)),n&&(s=Rs(s,n,i)),s}sortedRows(){const e=this.filteredRows();if(this.sortSpecs.length===0)return e;const t=this.sortSpecs.map(r=>({field:r.field,factor:r.asc?1:-1,type:this.columns.find(s=>s.field===r.field)?.type??"string"})),n=[...e];return n.sort((r,s)=>{for(const i of t){const o=qm(r.data[i.field],s.data[i.field],i.type,i.factor);if(o!==0)return o}return 0}),n}async openFilterPicker(e,t){e.stopPropagation();const n=e.currentTarget,r=at.instance;if(!r)return;const s=new Map;let i=0;for(const u of this.rowsFacetedFor(t)){const h=u.data[t];if(h==null||String(h).trim()===""){i++;continue}const m=String(h);s.set(m,(s.get(m)??0)+1)}let o=[...s.entries()].map(([u,h])=>({value:u,count:h})).sort((u,h)=>h.count-u.count||u.value.localeCompare(h.value));this.columns.find(u=>u.field===t)?.type==="boolean"&&(o=[...["true","false"].map(h=>({value:h,count:s.get(h)??0})),...o.filter(h=>h.value!=="true"&&h.value!=="false")]);const l=await r.open(n.getBoundingClientRect(),o,this.filters[t]??"",i,u=>this.onFilterInput(t,u));l!==null&&(typeof l=="object"&&"clear"in l?this.onFilterInput(t,""):typeof l=="string"&&this.onFilterInput(t,l))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=new Set(this.columns.filter(r=>r.filterable===!1).map(r=>r.field)),n=Object.entries(this.filters).filter(([r,s])=>s&&s.trim().length>0&&r!==e&&!t.has(r));return n.length===0?this.rows:this.rows.filter(r=>n.every(([s,i])=>As(r.data[s],i)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const n=50,r=500;for(const s of this.visibleColumns){let i=!0;for(const l of t){const u=l.data[s.field];if(u==null)continue;if((typeof u=="string"?u:String(u)).length>=n){i=!1;break}}if(!i)continue;const o=new Set;for(const l of this.rowsFacetedFor(s.field)){const u=l.data[s.field];if(u==null||u==="")continue;const h=typeof u=="string"?u:String(u);if(!(h.length>=n)&&(o.add(h),o.size>=r))break}e.set(s.field,[...o].sort())}return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),n=this.visibleColumns,r=new Map;n.forEach((s,i)=>{if(s.width!=null)return;const o=t[i];o&&r.set(s.field,Math.round(o.getBoundingClientRect().width))}),r.size!==0&&(this.columns=this.columns.map(s=>r.has(s.field)?{...s,width:r.get(s.field)}:s))}onResizeStart(e,t,n){e.preventDefault(),e.stopPropagation();const r=n.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:r};const s=o=>{if(!this.resizing)return;const l=o.clientX-this.resizing.startX,u=Math.max(zm,this.resizing.startW+l);this.columns=this.columns.map(h=>h.field===this.resizing.field?{...h,width:u}:h)},i=async()=>{window.removeEventListener("pointermove",s),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i);const o=this.resizing?.field;if(this.resizing=null,!o)return;const l=await ae();if(this.viewMode){const u={...this.viewInst?.columnWidths??{}};for(const h of this.columns)typeof h.width=="number"&&(u[h.field]=h.width);await l.store.viewInstances.patch(this.viewInstanceId,{columnWidths:u,updatedAt:Date.now()})}else await l.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",s),window.addEventListener("pointerup",i),window.addEventListener("pointercancel",i)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,n){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const r=n.getBoundingClientRect(),s=e.clientX<r.left+r.width/2;this.dropTargetField=t,this.dropEdge=s?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const n=this.dragSourceField,r=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!n||n===t||!r)return;const s=[...this.columns],i=s.findIndex(h=>h.field===n);if(i<0)return;const[o]=s.splice(i,1);let l=s.findIndex(h=>h.field===t);if(l<0){s.splice(i,0,o);return}r==="after"&&(l+=1),s.splice(l,0,o);const u=await ae();this.viewMode?await u.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:s.map(h=>h.field),updatedAt:Date.now()}):await u.store.tables.patch(this.tableId,{columns:s,updatedAt:Date.now()})}async saveFilters(){const e=await ae(),t={};for(const[r,s]of Object.entries(this.filters))s&&s.trim().length>0&&(t[r]=s);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const n=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:n,updatedAt:Date.now()})}tableSizingStyle(e){return e.length===0||!e.every(n=>typeof n.width=="number")?null:`table-layout: fixed; width: ${e.reduce((n,r)=>n+(r.width??0),0)+eo}px; min-width: 0`}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,n=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,r=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),s=Math.min(e.length,r+n);return{slice:e.slice(r,s),topPad:r*t,bottomPad:(e.length-s)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:n,topPad:r,bottomPad:s}=this.virtualSlice(e),i=this.computeFilterSuggestions(),o=this.externalLoading?this.externalProgress:null;return C`
      ${this.loading||this.externalLoading?C`<div
            class="load-bar"
            role="progressbar"
            aria-label="Loading rows"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${o!=null?Math.round(o*100):se}
          >
            <div
              class="load-bar-fill ${o!=null?"determinate":""}"
              style=${o!=null?`width:${Math.max(2,Math.round(o*100))}%`:se}
            ></div>
          </div>`:se}
      <table style=${this.tableSizingStyle(t)??se}>
        <colgroup>
          ${t.map(l=>C`<col style=${l.width!=null?`width: ${l.width}px`:""} />`)}
          <col style="width:${eo}px" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(l=>{const u=l.sortable!==!1,h=l.filterable!==!1,m=this.sortSpecs.findIndex(V=>V.field===l.field),g=m>=0?this.sortSpecs[m]:void 0,w=g?g.asc?"asc":"desc":null,y=u?w==="asc"?"▲":w==="desc"?"▼":"⇅":"",$=this.sortSpecs.length>1&&m>=0?String(m+1):"",x=`t-${l.type}`,A=this.dragSourceField===l.field,L=this.dropTargetField===l.field,M=L&&this.dropEdge==="before"?" drop-before":L&&this.dropEdge==="after"?" drop-after":"",F=(l.description?`${l.description}
`:"")+(l.units?`Units: ${l.units}
`:"")+`${l.field} — ${u?"click to sort, shift-click to add a sort level, ":"not sortable · "}drag to reorder`+(h?"":" · not filterable");return C`
                <th
                  class=${`${x}${w?" sorted":""}${A?" drag-source":""}${M}${u?"":" no-sort"}`}
                  title=${F}
                  @click=${V=>u&&this.toggleSort(l.field,V.shiftKey)}
                  @dragover=${V=>this.onColDragOver(V,l.field,V.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(l.field)}
                  @drop=${V=>this.onColDrop(V,l.field)}
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
                      @click=${V=>V.stopPropagation()}
                      @dragstart=${V=>this.onColDragStart(V,l.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label"
                      >${l.label}${l.units?C`<span class="col-units"> (${l.units})</span>`:""}</span
                    ><span class="sort-icon" aria-hidden="true"
                      >${y}${$?C`<span class="sort-rank">${$}</span>`:se}</span
                    >
                    ${h?C`<button
                          class=${`funnel${this.filters[l.field]?" active":""}`}
                          title="Filter by value"
                          aria-label=${`Filter ${l.label||l.field}`}
                          @click=${V=>this.openFilterPicker(V,l.field)}
                        >
                          <span class="mi sm" aria-hidden="true">filter_list</span>
                        </button>`:""}
                  </div>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${V=>V.stopPropagation()}
                    @pointerdown=${V=>this.onResizeStart(V,l.field,V.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:${eo}px"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(l=>{if(l.filterable===!1)return C`<th></th>`;const u=i.get(l.field)??[];return C`
                <th>
                  <filter-combobox
                    .value=${this.filters[l.field]??""}
                    .options=${u}
                    placeholder="filter…"
                    title="Filter: text = contains, ^text = starts with, !text = does not contain, NULL = empty, !NULL = has a value. Comma-separate for several values (a,b = a OR b; !a,!b excludes both); quote a value containing a comma."
                    @filter-change=${h=>this.onFilterInput(l.field,h.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${r>0?C`<tr class="spacer" style=${`height:${r}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${n.map(l=>C`
              <tr>
                ${t.map(u=>C`<td
                      class=${`t-${u.type}${u.renderer?` r-${u.renderer}`:""}${Fm(l,u)}`}
                      title=${Um(l,u)}
                    >
                      ${this.renderCell(l,u)}
                    </td>`)}
                <td>
                  ${this.readOnly?se:C`<button
                        class="danger"
                        title="Delete row"
                        @click=${()=>this.deleteRow(l.id)}
                      >
                        <span class="mi sm">delete</span>
                      </button>`}
                </td>
              </tr>
            `)}
          ${s>0?C`<tr class="spacer" style=${`height:${s}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};Ie.styles=[gt,xe`
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
    `];De([ht({type:String})],Ie.prototype,"tableId",2);De([ht({type:String})],Ie.prototype,"viewInstanceId",2);De([U()],Ie.prototype,"columns",2);De([U()],Ie.prototype,"rows",2);De([U()],Ie.prototype,"sortSpecs",2);De([U()],Ie.prototype,"filters",2);De([U()],Ie.prototype,"globalQuery",2);De([U()],Ie.prototype,"localQuery",2);De([U()],Ie.prototype,"dragSourceField",2);De([U()],Ie.prototype,"dropTargetField",2);De([U()],Ie.prototype,"dropEdge",2);De([U()],Ie.prototype,"resizing",2);De([U()],Ie.prototype,"cellRenderers",2);De([U()],Ie.prototype,"scrollY",2);De([U()],Ie.prototype,"viewportHeight",2);De([U()],Ie.prototype,"loading",2);De([U()],Ie.prototype,"externalLoading",2);De([U()],Ie.prototype,"externalProgress",2);De([U()],Ie.prototype,"tableReadonly",2);Ie=De([Se("data-table")],Ie);const Bl=500;function Um(e,t){if(t.script)return"";const n=e.data[t.field];if(n==null)return"";const r=typeof n=="string"?n:String(n);return r.trim()===""?"":r.length>Bl?`${r.slice(0,Bl)}…`:r}function Fm(e,t){if(t.script)return"";const n=Dm(e.data[t.field],t.type);return n==="empty"?" is-null":n==="invalid"?" is-invalid":""}function Bm(e,t,n,r){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&n.find(i=>i.id!==r&&i.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function fs(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function ps(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const s=r.toISOString();return`${s.slice(0,10)}T${s.slice(11,16)}`}function ql(e,t){return e==null||typeof e=="string"&&e.trim()===""?!1:t===""}function qm(e,t,n,r){const s=l=>l==null?0:l===""?1:2,i=s(e),o=s(t);return i!==2||o!==2?(i-o)*r:Hm(e,t,n)*r}function Hl(e){return e.sortBy?.length?e.sortBy.map(t=>({field:t.field,asc:t.asc!==!1})):e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc!==!1}]:[]}function Hm(e,t,n){switch(n){case"number":{const r=Number(e),s=Number(t);return Number.isNaN(r)||Number.isNaN(s)?String(e).localeCompare(String(t)):r-s}case"boolean":return(e?1:0)-(t?1:0);case"date":{const r=new Date(String(e)).getTime(),s=new Date(String(t)).getTime();return Number.isNaN(r)||Number.isNaN(s)?String(e).localeCompare(String(t)):r-s}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function Rt(e,t,n){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:n}}))}class ze extends Error{constructor(t,n){const r=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(r),this.name="DatasetteError",this.status=n??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function $t(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const n=t.pathname.split("/").filter(Boolean),r={};for(const[l,u]of t.searchParams)r[l]=u;let s,i=null,o=null;if(n.length>=2){o=decodeURIComponent(n[n.length-1]),i=decodeURIComponent(n[n.length-2]);const l=n.slice(0,n.length-2).join("/");s=t.origin+(l?"/"+l:"")}else n.length===1&&(i=decodeURIComponent(n[0])),s=t.origin;return{base:s,db:i,table:o,query:r}}function Ln(e,t={}){const n=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[r,s]of Object.entries({...e.query,...t}))s!=null&&n.searchParams.set(r,String(s));return n.toString()}function Km(e,t){const n={};for(const[r,s]of Object.entries(e.query))r.startsWith("_")||(n[r]=s);return Ln({...e,query:n},{_next:t})}function Kl(e,t){try{const n=new URL(t),r=new URL(e,n);return r.hostname.toLowerCase()!==n.hostname.toLowerCase()?null:(r.protocol=n.protocol,r.port=n.port,r.toString())}catch{return null}}function Vm(e){const t=e?.next_url??null,n=e?.next,r=n!=null&&n!==!1?String(n):null,s=Array.isArray(e?.rows)?e.rows:[],i=Array.isArray(e?.columns)?e.columns:null;return{rows:s.map(l=>Array.isArray(l)&&i?Object.fromEntries(i.map((u,h)=>[u,l[h]])):l),nextUrl:t,nextToken:r,hasMore:t!=null||r!=null,truncated:e?.truncated===!0}}function Gm(e,t=""){const n=String(e||"").toUpperCase();return n.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":n.includes("REAL")||n.includes("FLOA")||n.includes("DOUB")||n.includes("NUM")||n.includes("DEC")?"number":n.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function Vl(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],n=Array.isArray(e?.columns)?e.columns.slice():[],r={},s=e?.column_details;if(Array.isArray(s))for(const l of s)r[l.column??l.name]=l;else s&&typeof s=="object"&&Object.assign(r,s);for(const l of n)l in r||(r[l]={});const o=(n.length?n:Object.keys(r)).map(l=>{const u=r[l]||{},h=u.is_pk===!0||u.is_pk===1||t.includes(l),m={field:l,label:Uu(l),type:Gm(u.sqlite_type??u.type,l)};return(u.notnull===!0||u.notnull===1||h)&&(m.notnull=!0),h&&(m.unique=!0),(u.hidden===!0||u.hidden===1||Yo(l))&&(m.hidden=!0),u.default!=null&&u.default!==""&&(m.default=u.default),m});if(t.length===0){const l=o.filter(u=>u.unique).map(u=>u.field);l.length&&t.push(...l)}return{columns:o,pks:t}}function Uu(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function Gs(e){const t=[],n=new Set;for(const r of e)for(const s of Object.keys(r))n.has(s)||(n.add(s),t.push(s));return t.map(r=>{const s={field:r,label:Uu(r),type:Wm(e.map(i=>i[r]))};return Yo(r)&&(s.hidden=!0),s})}function Wm(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&Ym(n))?"datetime":"string"}function Ym(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Qm(e){const t=new TextEncoder().encode(String(e));let n="";for(const r of t){const s=String.fromCharCode(r);/[A-Za-z0-9_-]/.test(s)?n+=s:n+="~"+r.toString(16).toUpperCase().padStart(2,"0")}return n}function Xm(e,t){return!t||t.length===0?null:t.map(n=>Qm(e[n])).join(",")}function Jm(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],n=[];for(const r of t){if(typeof r=="string"){n.push(r);continue}if(r&&typeof r=="object"&&typeof r.name=="string"){if(r.name==="_memory")continue;n.push(typeof r.route=="string"&&r.route?r.route:r.name)}}return n}function Zm(e,t){const n=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],r=[];for(const s of n){if(typeof s=="string"){r.push({db:t,table:s,count:null,hidden:!1,pks:[]});continue}s&&typeof s=="object"&&typeof s.name=="string"&&r.push({db:t,table:s.name,count:typeof s.count=="number"?s.count:null,hidden:s.hidden===!0,pks:Array.isArray(s.primary_keys)?s.primary_keys:[]})}return r}async function Dt(e,t){let n;try{n=await e(t)}catch(s){const i=s?.message||"network error";throw new ze({error:`Couldn't reach ${t} (${i}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(n&&n.ok===!1){let s=null;try{s=await n.json()}catch{}throw new ze(s&&typeof s=="object"?s:{error:`HTTP ${n.status} for ${t}`},n.status)}const r=await n.json();if(r&&r.ok===!1)throw new ze(r,n.status);return r}async function sa(e,t){return Jm(await Dt(e,`${t}/-/databases.json`))}async function Gl(e,t,n){return Zm(await Dt(e,`${t}/${encodeURIComponent(n)}.json`),n)}function eg(e){const t=e?.views,n=[];for(const r of Array.isArray(t)?t:[]){if(typeof r=="string"){n.push(r);continue}const s=r;s&&typeof s.name=="string"&&s.hidden!==!0&&n.push(s.name)}return n}async function tg(e,t,n){const s=`${t}/${encodeURIComponent(n)}.json?sql=${encodeURIComponent("select name, sql from sqlite_master where type='view' order by name")}&_shape=array`;let i;try{i=await Dt(e,s)}catch(h){const m=h instanceof ze?h.message:String(h);throw new ze({error:`Couldn't read the view definitions from "${n}". Importing views needs the SQL endpoint, which this instance may have disabled (allow_sql). Its tables can still be imported normally.

${m}`},h instanceof ze?h.status:0)}const o=i?.rows,l=Array.isArray(i)?i:Array.isArray(o)?o:[],u=[];for(const h of l){const m=h,g=typeof m?.name=="string"?m.name:Array.isArray(h)?h[0]:void 0,w=typeof m?.sql=="string"?m.sql:Array.isArray(h)?h[1]:void 0;typeof g=="string"&&typeof w=="string"&&w.trim()&&u.push({db:n,name:g,sql:w})}return u}async function Fu(e,t){const n=t.db?[t.db]:await sa(e,t.base),r=[];for(const s of n){const i=await Dt(e,`${t.base}/${encodeURIComponent(s)}.json`);if(eg(i).length!==0){if(i?.allow_execute_sql===!1)throw new ze({error:`"${s}" defines views, but this instance has SQL queries disabled (allow_execute_sql), and a view's definition can only be read through them. Its tables can still be imported normally.`},403);r.push(...await tg(e,t.base,s))}}return r}async function Ws(e,t){const n=Ln(t,{_extra:"column_details"}),r=await Dt(e,n);let{columns:s,pks:i}=Vl(r),o=!!r&&r.column_details!=null,l=r?.count??null,u=r?.count_truncated===!0,h=r;if(s.length===0){const m=Ln(t,{_extra:"columns"}),g=await Dt(e,m);({columns:s,pks:i}=Vl(g)),o=!!g&&g.column_details!=null,l=g?.count??l,u=g?.count_truncated===!0||u,h=g}return{columns:s,pks:i,count:l,countTruncated:u,typed:o,raw:h}}async function bo(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const n=await Ws(e,t);return{db:t.db,table:t.table,count:n.count,hidden:!1,pks:n.pks}}function ng(e,t,n){const r=e&&typeof e=="object"?e:{},s=t&&n&&r.databases?.[t]?.tables?.[n]||t&&n&&r.databases?.[t]?.tables?.[n.toLowerCase()]||{},i=t&&r.databases?.[t]||{},o=$=>s[$]??i[$]??r[$],l={columns:{},units:{}};typeof s.sort=="string"&&(l.sort=s.sort),typeof s.sort_desc=="string"&&(l.sortDesc=s.sort_desc),typeof s.size=="number"&&(l.size=s.size),Array.isArray(s.sortable_columns)&&(l.sortableColumns=s.sortable_columns.slice()),typeof s.label_column=="string"&&(l.labelColumn=s.label_column),s.hidden===!0&&(l.hidden=!0),typeof s.description=="string"&&(l.description=s.description),typeof s.description_html=="string"&&(l.descriptionHtml=s.description_html);const u=o("source"),h=o("source_url"),m=o("license"),g=o("license_url"),w=o("about"),y=o("about_url");if(typeof u=="string"&&(l.source=u),typeof h=="string"&&(l.sourceUrl=h),typeof m=="string"&&(l.license=m),typeof g=="string"&&(l.licenseUrl=g),typeof w=="string"&&(l.about=w),typeof y=="string"&&(l.aboutUrl=y),s.columns&&typeof s.columns=="object")for(const[$,x]of Object.entries(s.columns))typeof x=="string"&&(l.columns[$]=x);if(s.units&&typeof s.units=="object")for(const[$,x]of Object.entries(s.units))typeof x=="string"&&(l.units[$]=x);return l}const Wl=new Map;async function rg(e,t){let n=Wl.get(t);return n||(n=Dt(e,`${t}/-/metadata.json`).catch(()=>({})),Wl.set(t,n)),n}async function ia(e,t){const n=await rg(e,t.base);return ng(n,t.db,t.table)}function sg(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function oa(e,t){const n=e.sortableColumns!=null?new Set(e.sortableColumns):null,r=t.map(l=>{const u=e.columns[l.field],h=e.units[l.field],m=n?n.has(l.field):void 0;return u==null&&h==null&&m===void 0?l:{...l,...u!=null?{description:u}:{},...h!=null?{units:h}:{},...m!==void 0?{sortable:m}:{}}}),s=new Set(t.map(l=>l.field)),i={};e.sort&&s.has(e.sort)?(i.sortColumn=e.sort,i.sortAsc=!0):e.sortDesc&&s.has(e.sortDesc)&&(i.sortColumn=e.sortDesc,i.sortAsc=!1);const o=sg(e);return o&&(i.info=o),e.labelColumn&&s.has(e.labelColumn)&&(i.labelColumn=e.labelColumn),{columns:r,patch:i}}function aa(e,t){if(t.length===0)return e;const n=new Map(Gs(t).map(r=>[r.field,r.type]));return e.map(r=>{if(r.type!=="string")return r;const s=n.get(r.field);return s&&s!=="string"?{...r,type:s}:r})}async function Pr(e,t,n={}){const r=n.maxRows??1e4,i={_size:n.pageSize??1e3,...n.extraParams||{}},o=Ln(t,i);let l=n.startUrl?Kl(n.startUrl,o)??n.startUrl:o;const u=[];let h=!1,m=!1,g=0,w,y;for(;l;){let $;try{$=await Dt(e,l)}catch(M){if(u.length===0&&!n.startUrl)throw M;w=M instanceof ze&&M.status?`stopped after ${u.length} rows: HTTP ${M.status}`:`stopped after ${u.length} rows: ${M?.message??String(M)}`,m=!0,y=l;break}const x=Vm($);u.push(...x.rows),h=h||x.truncated,g+=1,n.onProgress?.(u.length);const L=(x.nextUrl!=null?Kl(x.nextUrl,l):null)??(x.nextToken!=null?Km(t,x.nextToken):null);L&&u.length<r&&x.rows.length>0?l=L:(m=L!=null&&x.rows.length>0,m&&(y=L??void 0),l=null)}return{rows:u,truncated:h,hasMore:m,pages:g,error:w,nextUrl:y}}function ig(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function Bu(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function qu(e,t,n){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${n}`}async function Ys(e,t,n,r){let s;try{s=await e(t,{method:"POST",headers:ig(r),body:JSON.stringify(n)})}catch(o){throw new ze({error:`Couldn't reach ${t} (${o?.message||"network error"}).`},0)}if(s&&s.ok===!1){let o=null;try{o=await s.json()}catch{}throw new ze(o&&typeof o=="object"?o:{error:`HTTP ${s.status} for ${t}`},s.status)}const i=await s.json();if(i&&i.ok===!1)throw new ze(i,s.status);return i}async function Yl(e,t,n,r={}){const s=await Ys(e,Bu(t,"insert"),{rows:n,return:!0},r.token);return Array.isArray(s?.rows)?s.rows:[]}async function og(e,t,n,r,s={}){const i=await Ys(e,qu(t,n,"update"),{update:r,return:!0},s.token);return i&&typeof i.row=="object"&&i.row?i.row:Array.isArray(i?.rows)&&i.rows[0]?i.rows[0]:null}async function Ql(e,t,n,r={}){await Ys(e,qu(t,n,"delete"),{},r.token)}async function ag(e,t,n,r={}){const s=await Ys(e,Bu(t,"upsert"),{rows:n,return:!0},r.token);return Array.isArray(s?.rows)?s.rows:[]}async function lg(e,t){const n=Ln(t,{_extra:"primary_keys"}),r=await Dt(e,n);return Array.isArray(r?.primary_keys)?r.primary_keys:[]}async function Hu(e,t){try{const n=await Dt(e,Ln(t,{_extra:"count"}));return{count:typeof n?.count=="number"?n.count:null,truncated:n?.count_truncated===!0}}catch{return{count:null,truncated:!1}}}async function Ku(e,t,n={}){const r=n.token?{headers:{Authorization:`Bearer ${n.token}`}}:void 0;try{const s=await e(`${t}/-/versions.json`,r);if(s&&s.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${s.status}`};const i=await s.json(),o=i?.datasette?.version??i?.version??null;let l=null;try{l=(await(await e(`${t}/-/actor.json`,r)).json())?.actor??null}catch{}return{reachable:!0,version:o,actor:l,writable:!!(n.token&&l)}}catch(s){return{reachable:!1,version:null,actor:null,writable:!1,error:s?.message||"unreachable"}}}function Mn(e,t){return t?(n,r)=>{const s=(r??{}).headers??{};return e(n,{...r??{},headers:{...s,Authorization:`Bearer ${t}`}})}:e}function cg(e,t){const n=new Map;for(const r of e)n.has(r.name.toLowerCase())||n.set(r.name.toLowerCase(),r);return r=>n.get(`${t}/${r}`.toLowerCase())??n.get(r.toLowerCase())}async function ug(e,t){const n=e.workspaceId();if(!n)throw new Error("datasette-views: no active workspace");const r=$t(t),s=await Fu(i=>e.backend.fetch(i),r);return Vu(e,n,s)}async function Vu(e,t,n){const r={created:[],skipped:[],found:n.length};if(n.length===0)return r;const s=(await e.store.tables.find()).filter(l=>l.workspaceId===t),i=new Set(s.map(l=>l.name)),o=[...s];for(const l of n){const u=Vs(l.sql),h=u.projections[0];if(!h){r.skipped.push({name:l.name,reason:u.unsupported[0]??"its SELECT could not be modelled as a projection"});continue}const m=await Eu(e,t,{name:`${l.db}/${l.name}`,spec:h.spec,...h.sortBy?{sortBy:h.sortBy}:{}},{resolve:cg(o,l.db),taken:i});if(!m){const g=h.spec.sources.map(w=>w.tableName).join(", ");r.skipped.push({name:l.name,reason:`its source tables are not in this workspace (${g}) — import them first`});continue}o.push(m),i.add(m.name),r.created.push(m.name),u.unsupported.length>0&&r.skipped.push({name:l.name,reason:`imported, but part of the query was not modelled: ${u.unsupported.slice(0,2).join("; ")}`})}return r}function Gu(e,t){if(t.found===0){e.ui.dialogs.toast("That Datasette database defines no views.",{kind:"info",title:"Datasette views"});return}const n=t.skipped.length>0?` ${t.skipped.length} not fully imported: ${t.skipped.map(r=>`${r.name} — ${r.reason}`).join("; ")}`:"";if(t.created.length===0){e.ui.dialogs.toast(`No views could be imported as projections.${n}`,{kind:"warning",title:"Datasette views"});return}e.ui.dialogs.toast(`Imported ${t.created.length} of ${t.found} view${t.found===1?"":"s"} as projections.${n}`,{kind:t.skipped.length>0?"warning":"success",title:"Datasette views"})}async function dg(e,t){const n=$t(t);let r;try{r=await Fu(l=>e.backend.fetch(l),n)}catch(l){if(l instanceof ze)return;throw l}if(r.length===0)return;const s=r.slice(0,5).map(l=>l.name).join(", ");if(!await e.ui.dialogs.confirm(`This database also defines ${r.length} view${r.length===1?"":"s"} (${s}${r.length>5?", …":""}).

A view is a query, not stored rows, so it imports as a Projection over the tables you just imported. Import them?`,"Datasette views"))return;const o=e.workspaceId();o&&Gu(e,await Vu(e,o,r))}const Ds=e=>e.replace(/^https?:\/\//,""),mr="datasette",Wu=1e4,Yu=1e3,la=1e4,Qu=60;function Xu(e){e.ui.registerSettings(mr,"Datasette",[{key:"maxImportRows",label:"Max import rows per table",type:"number",default:Wu,scope:"workspace",description:"Max rows imported per table. 0 = unlimited."},{key:"pageSize",label:"Page size",type:"number",default:Yu,scope:"workspace",description:"Rows requested per page hop while paging a table (the instance clamps this to its own max_returned_rows)."},{key:"connectMaxRows",label:"Connected table row cap",type:"number",default:la,scope:"workspace",description:"Row cap for a single live connected table."},{key:"retryWaitSeconds",label:"Rate-limit retry wait (seconds)",type:"number",default:Qu,scope:"workspace",description:"Wait before resuming an import paused by the instance's rate limiting."}])}function ms(e,t,n){const r=typeof e=="number"?e:Number(e);return Number.isFinite(r)&&r>=n?Math.floor(r):t}async function Qs(e){const[t,n,r,s]=await Promise.all([e.settings.get(mr,"maxImportRows"),e.settings.get(mr,"pageSize"),e.settings.get(mr,"connectMaxRows"),e.settings.get(mr,"retryWaitSeconds")]);return{maxImportRows:ms(t,Wu,0),pageSize:ms(n,Yu,1),connectMaxRows:ms(r,la,1),retryWaitSeconds:ms(s,Qu,1)}}function Xs(e){return e===0?Number.MAX_SAFE_INTEGER:e}function hg(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}`}function ca(e,t,n,r){const s={...e.info??{}};return!s.source&&!s.sourceUrl&&(s.source=`${Ds(t)}/${n}/${r}`,s.sourceUrl=hg(t,n,r)),{...e,info:s}}function Ju(e,t){if(!e.has(t))return t;for(let n=2;;n++){const r=`${t} (${n})`;if(!e.has(r))return r}}async function ua(e,t,n,r={}){if(t.db&&t.table)return[await bo(e,t)];const s=[];if(t.db){if(s.push(...await Gl(e,t.base,t.db)),r.skipPicker)return s.filter(l=>!l.hidden)}else{const l=await sa(e,t.base);if(l.length===0)return[];let u=l;if(l.length>1){const h=await Is(l.map(m=>({name:m,size:null})),{title:`${n} from Datasette`,message:`Choose databases on ${Ds(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!h)return null;u=h.map(m=>l[m])}for(const h of u)try{s.push(...await Gl(e,t.base,h))}catch{}}if(s.length===0)return[];const i=new Set(s.map(l=>l.db)).size>1,o=await Is(s.map(l=>({name:i?`${l.db}/${l.table}`:l.table,size:l.count,detail:i?void 0:l.db,hidden:l.hidden})),{title:`${n} from Datasette`,message:`Choose tables to ${n.toLowerCase()} from ${Ds(t.base)}.`,confirmLabel:n});return o?o.map(l=>s[l]):null}const fg=e=>new Promise(t=>setTimeout(t,e));function pg(e){const t=globalThis.__eda_resumeDelayMs;return typeof t=="number"&&t>=0?t:e*1e3}function da(e,t,n,r){if(!(!e||!t))return{nextUrl:t,loadedRows:n,...r!=null?{totalCount:r}:{}}}const mg={id:"datasette-import",name:"Datasette Import",type:"importer",version:"0.3.0",description:"Import snapshot tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-import.ts"},Xl="https://latest.datasette.io/fixtures/facetable";function gg(e){Xu(e),e.ui.registerTableButton({id:"datasette:refresh-snapshot",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this snapshot from the Datasette table it came from",visible:t=>t.origin?.type==="datasette"&&t.source?.type!=="datasette",onClick:(t,{tableId:n})=>xg(t,n)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:n})=>Cg(t,n)}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Xl}`,"","Import from Datasette");r&&await Jl(t,r)}}),e.ui.registerUrlSource({id:"datasette-views",label:"Datasette views (as projections)…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette database URL — its SQL views become Projections over the tables you have already imported.

e.g. ${Xl}`,"","Import Datasette views");if(r)try{Gu(t,await ug(t,r))}catch(s){await t.ui.dialogs.alert(s?.message??String(s),"Datasette views")}}}),e.ui.registerDropHandler(async(t,n)=>{const r=t.dataTransfer?.getData("text/plain")||"";return bg(r)?(t.preventDefault(),await Jl(n,r,{skipViews:!0}),!0):!1})}async function Jl(e,t,n={}){try{await ha(e,t,n)}catch(r){let s;r instanceof ze?s=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:s=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(s,"Datasette import failed")}}function bg(e){try{const t=$t(e);return!!(t.db&&t.table)}catch{return!1}}async function ha(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const s=await Qs(e),i=$t(t),l=await ua(L=>e.backend.fetch(L),i,"Import",{skipPicker:n.skipTablePicker});if(l===null)return;if(l.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const u=[];let h=0;for(const L of l){const M={base:i.base,db:L.db,table:L.table,query:{}},F=await wg(e,r,M);if(F.skipped){h+=1;continue}u.push({tableId:F.tableId,ref:M,overwrite:F.overwrite,knownCount:L.count})}let m=0,g=0;const w=[],y=[],$=[];for(const L of u)try{const M=await yg(e,L.tableId,L.ref,L.overwrite,L.knownCount,n,s);m+=1,g+=M.rowCount,M.error?y.push(`${L.ref.db}/${L.ref.table} (${M.error})`):(M.hasMore||M.truncated)&&w.push(`${L.ref.db}/${L.ref.table}`)}catch(M){$.push(`${L.ref.db}/${L.ref.table}: ${M?.message??String(M)}`)}const x=Xs(s.maxImportRows),A=n.maxRows!=null?Math.min(n.maxRows,x):x;if($g(e,{imported:m,skipped:h,totalRows:g,capped:w,cap:A,partial:y,failed:$,requested:l.length}),m>0&&!n.skipViews)try{await dg(e,t)}catch{}}async function wg(e,t,n){const r=`${n.db}/${n.table}`,s={type:"datasette",url:`${n.base}/${encodeURIComponent(n.db)}/${encodeURIComponent(n.table)}`},i=(await e.store.tables.find()).filter(h=>h.workspaceId===t),o=i.find(h=>h.name.toLowerCase()===r.toLowerCase());let l=r;if(o){const h=await e.ui.dialogs.choice(`A table named "${r}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!h||h==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(h==="Overwrite")return await e.store.tables.patch(o.id,{origin:s,updatedAt:Date.now()}),{tableId:o.id,overwrite:!0};l=Ju(new Set(i.map(m=>m.name)),r)}const u=Ce();return await e.store.tables.insert({id:u,workspaceId:t,name:l,code:Le(`${n.db}-${n.table}`),columns:[],view:"table",origin:s,updatedAt:Date.now()}),{tableId:u,overwrite:!1}}async function yg(e,t,n,r,s,i,o){const l=`${n.db}/${n.table}`,u=g=>e.backend.fetch(g),h=Xs(o.maxImportRows),m=i.maxRows!=null?Math.min(i.maxRows,h):h;Rt(t,!0);try{let g=[],w=s,y=!1,$=!1,x=[];try{const ye=await Ws(u,n);g=ye.columns,w==null&&(w=ye.count,y=ye.countTruncated),$=ye.typed,x=ye.pks??[]}catch{}if(w==null){const ye=await Hu(u,n);w=ye.count,y=ye.truncated}const A=w&&w>0&&(!y||m<=w)?Math.min(w,m):0,L=[];let M=!1,F=!1,V=0,Q,ne,B;for(;;){const ye=await Pr(u,n,{maxRows:Math.max(0,m-L.length),pageSize:o.pageSize,...B?{startUrl:B}:{},onProgress:$n=>{A>0&&Rt(t,!0,Math.min(1,(L.length+$n)/A))}});if(L.push(...ye.rows),M=M||ye.truncated,V+=ye.pages,F=ye.hasMore,Q=ye.error,ne=ye.nextUrl,!ye.error||!ye.nextUrl||L.length>=m)break;const Ke=`${o.retryWaitSeconds}s`;if(await e.ui.dialogs.choice(`Import of "${l}" paused after ${L.length.toLocaleString()} rows (${ye.error}). Datasette may be rate-limiting a large import. Wait ${Ke} and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,[`Resume in ${Ke}`,"Cancel"],"Import paused — rate limited?")!==`Resume in ${Ke}`)break;Rt(t,!0),e.ui.dialogs.toast(`Resuming "${l}" in ${Ke}…`,{kind:"info",title:"Import paused"}),await fg(pg(o.retryWaitSeconds)),B=ye.nextUrl,Q=void 0,ne=void 0}let ie=g.length===0?Gs(L):$?g:aa(g,L),re={};try{const ye=await ia(u,n),Ke=oa(ye,ie);ie=Ke.columns,re=Ke.patch}catch{}re=ca(re,n.base,n.db,n.table);const H=await e.store.tables.findOne(t),K=H?.columns??[],ce=K.length===0;let{columns:pe}=qs(K,ie,H?.deletedColumns),Te=L;if(i.editColumns&&ce){const ye=await i.editColumns(pe,l);if(ye===null)return{name:l,rowCount:0,hasMore:!1,truncated:!1,pages:V,count:w,error:Q};Te=vg(Te,pe,ye),pe=ye}const Ue=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const bt=da(Q,ne,L.length,w),de=x.length>0&&H?.origin?{origin:{...H.origin,pks:x}}:{},Pe=ce?{columns:pe,...re,...de,importResume:bt,updatedAt:Ue}:{columns:pe,...re.info?{info:re.info}:{},...de,importResume:bt,updatedAt:Ue};await e.store.tables.patch(t,Pe);const Ae=e.store.rows(t);if(r){const ye=await Ae.find();await Ae.bulkRemove(ye.map(Ke=>Ke.id))}const tt=Te.map(ye=>({id:Ce(),tableId:t,data:ye,updatedAt:Ue}));return await Ae.bulkInsert(tt),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:tt.length}),{name:l,rowCount:tt.length,hasMore:F,truncated:M,pages:V,count:w,error:Q}}finally{Rt(t,!1)}}function vg(e,t,n){const r=Ho(t,n);return r?e.map(r):e}function $g(e,t){const n=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,r=`${t.imported} table${t.imported===1?"":"s"}`,s=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${r} (${n});${s} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${r} (${n}).${s} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){const i=t.cap<Number.MAX_SAFE_INTEGER?` at ${t.cap.toLocaleString()}`:"";e.ui.dialogs.toast(`Imported ${r} (${n}).${s} ${t.capped.length} capped${i} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${r} (${n}) from Datasette.${s}`,{kind:"success",title:"Datasette import"})}async function xg(e,t){const n=await e.store.tables.findOne(t);if(!(!n?.origin?.url||n.origin.type!=="datasette"))try{const r=await Qs(e);await kg(e,n,r)}catch(r){const s=r instanceof ze?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${s}`,{kind:"error",title:"Refresh"})}}async function kg(e,t,n){const r=$t(t.origin.url),s=m=>e.backend.fetch(m),i=Xs(n.maxImportRows);Rt(t.id,!0);let o,l=[];try{let m=[],g=null,w=!1,y=!1;try{const de=await Ws(s,r);m=de.columns,g=de.count,w=de.countTruncated,y=de.typed}catch{}if(g==null){const de=await Hu(s,r);g=de.count,w=de.truncated}const $=g&&g>0&&(!w||i<=g)?Math.min(g,i):0,{rows:x,hasMore:A,truncated:L,error:M,nextUrl:F}=await Pr(s,r,{maxRows:i,pageSize:n.pageSize,onProgress:de=>{$>0&&Rt(t.id,!0,Math.min(1,de/$))}});let V=m.length===0?Gs(x):y?m:aa(m,x),Q={};try{const de=await ia(s,r),Pe=oa(de,V);V=Pe.columns,Q=Pe.patch}catch{}Q=ca(Q,r.base,r.db,r.table);const ne=t.columns.length===0,B=qs(t.columns,V,t.deletedColumns);l=B.newFields;const G=Date.now(),ie=da(M,F,x.length,g),re=ne?{columns:B.columns,...Q,importResume:ie,updatedAt:G}:{columns:B.columns,...Q.info?{info:Q.info}:{},importResume:ie,updatedAt:G};await e.store.tables.patch(t.id,re);const H=t.origin?.pks??[],K=new Set(V.map(de=>de.field)),ce=t.columns.map(de=>de.field).filter(de=>!K.has(de)&&!H.includes(de)),pe=(t.deletedColumns??[]).filter(de=>K.has(de)),Te=e.store.rows(t.id),Ue=await Te.find(),{data:bt}=Du({oldRows:Ue.map(de=>({data:de.data})),freshRows:x,pks:H,userAddedFields:ce,deletedRemoteFields:pe});await Te.bulkRemove(Ue.map(de=>de.id)),await Te.bulkInsert(bt.map(de=>({id:Ce(),tableId:t.id,data:de,updatedAt:G}))),o={rowCount:bt.length,hasMore:A,truncated:L,error:M}}finally{Rt(t.id,!1)}const u=[];if(o.error)u.push(`partial (${o.error})`);else if(o.hasMore||o.truncated){const m=i<Number.MAX_SAFE_INTEGER?` at ${i.toLocaleString()}`:"";u.push(`capped${m}`)}l.length>0&&u.push(`${l.length} new column${l.length===1?"":"s"}`);const h=u.length?` — ${u.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${o.rowCount} rows from ${r.db}/${r.table}${h}.`,{kind:o.error||o.hasMore||o.truncated||l.length>0?"warning":"success",title:"Refresh"}),l.length>0&&_g(t.id,r,l)}async function Cg(e,t){const n=await e.store.tables.findOne(t),r=n?.importResume;if(!n||!n.origin?.url||!r)return;const s=await Qs(e),i=Xs(s.maxImportRows),o=$t(n.origin.url),l=$=>e.backend.fetch($),u=r.loadedRows,h=r.totalCount??null,m=h&&h>0?Math.min(h,i):0;Rt(t,!0,m>0?Math.min(1,u/m):void 0);let g=0,w;try{const $=await Pr(l,o,{startUrl:r.nextUrl,maxRows:Math.max(0,i-u),pageSize:s.pageSize,onProgress:L=>{m>0&&Rt(t,!0,Math.min(1,(u+L)/m))}});g=$.rows.length;const x=Date.now();await e.store.rows(t).bulkInsert($.rows.map(L=>({id:Ce(),tableId:t,data:L,updatedAt:x}))),w={error:$.error,nextUrl:$.nextUrl};const A=da($.error,$.nextUrl,u+g,h);await e.store.tables.patch(t,{importResume:A,updatedAt:x})}catch($){const x=$ instanceof ze?$.message:$?.message??String($);e.ui.dialogs.toast(`Couldn't resume ${o.db}/${o.table}: ${x}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{Rt(t,!1)}const y=u+g;w.error?e.ui.dialogs.toast(`Resumed ${o.db}/${o.table}: +${g} rows (${y} total) — interrupted again (${w.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${o.db}/${o.table}: +${g} rows (${y} total).`,{kind:"success",title:"Resume import"})}function _g(e,t,n){const r=n.join(", "),s=n.length!==1,i=`Refreshing ${t.db}/${t.table} revealed ${n.length} new column${s?"s":""}: ${r}. Review, reorder or hide ${s?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:i}}))}const Sg=Object.freeze(Object.defineProperty({__proto__:null,importDatasette:ha,init:gg,meta:mg},Symbol.toStringTag,{value:"Module"}));var Eg=Object.defineProperty,Tg=Object.getOwnPropertyDescriptor,Lr=(e,t,n,r)=>{for(var s=r>1?void 0:r?Tg(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Eg(t,n,s),s};const Ig="https://latest.datasette.io/ephemeral";let vt=class extends ve{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const n=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,n)}catch(r){this.status=r?.message??String(r),this.statusKind="err";return}}this.finish({url:t,token:n})}}connectedCallback(){super.connectedCallback(),vt.instance=this}disconnectedCallback(){super.disconnectedCallback(),vt.instance===this&&(vt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return C`
      <dialog @cancel=${this.onCancel} @keydown=${pt}>
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
                placeholder="e.g. ${Ig}"
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
    `}};vt.instance=null;vt.styles=[ft,xe`
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
    `];Lr([U()],vt.prototype,"url",2);Lr([U()],vt.prototype,"token",2);Lr([U()],vt.prototype,"status",2);Lr([U()],vt.prototype,"statusKind",2);vt=Lr([Se("datasette-connect-dialog")],vt);class Ag extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function Zu(e){return`datasette:token:${e}`}function Rg(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function Og(e,t,n){const r=e.source,s=r?.config??{},i={base:s.base,db:s.db,table:s.table,query:{}},o=Array.isArray(s.pks)&&s.pks.length>0?s.pks:["rowid"],l=r?.writable===!0,u=s.maxRows;let h=null;function m(){return u!=null?Promise.resolve(u):(h||(h=n?Qs(n).then(B=>B.connectMaxRows):Promise.resolve(la)),h)}const g=s.pollIntervalMs??0,w=(B,G)=>t.backend.fetch(B,G);async function y(){const G=(await t.settings.findOne(Zu(s.base)))?.value;return typeof G=="string"&&G.length>0?G:void 0}const $=async(B,G)=>Mn(w,await y())(B,G);function x(B){return{id:Xm(B,o)??Ce(),tableId:e.id,data:B,updatedAt:Date.now()}}function A(B){if(!l)throw new Ag(B)}function L(B){const G={};for(const[ie,re]of Object.entries(B))o.includes(ie)||(G[ie]=re);return G}const M=new Set;let F=[],V=!1,Q=null;function ne(){return Q||(Q=(async()=>{try{const{rows:B}=await Pr($,i,{maxRows:await m()});F=B.map(x),V=!0;for(const G of M)G(F);return F}finally{Q=null}})(),Q)}return{async find(B){const G=V?F:await ne();return!B||Object.keys(B).length===0?G:G.filter(ie=>Rg(ie,B))},async findOne(B){return(V?F:await ne()).find(ie=>ie.id===B)??null},async insert(B){A("insert");const[G]=await Yl($,i,[B.data]),ie=x(G??B.data);return t.events.emit("row:created",{tableId:e.id,row:ie}),ne(),ie},async bulkInsert(B){if(B.length===0)return[];A("insert");const G=await Yl($,i,B.map(re=>re.data)),ie=(G.length?G:B.map(re=>re.data)).map(x);return ne(),ie},async upsert(B){A("upsert");const[G]=await ag($,i,[B.data]),ie=x(G??B.data);return ne(),ie},async patch(B,G){A("update");const ie=G.data,re=L(ie??{}),H=await og($,i,B,re),K=x(H??{...ie??{}});return t.events.emit("row:updated",{tableId:e.id,row:K,prev:K}),ne(),K},async remove(B){A("delete"),await Ql($,i,B),t.events.emit("row:deleted",{tableId:e.id,rowId:B}),ne()},async bulkRemove(B){if(B.length!==0){A("delete");for(const G of B)await Ql($,i,G);ne()}},subscribe(B){M.add(B),V?B(F):ne();let G=null;return g>0&&(G=setInterval(()=>void ne(),g)),()=>{M.delete(B),G&&clearInterval(G)}},async refresh(){await ne()}}}const Dg='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Pg={id:"datasette-connect",name:"Datasette Connect",type:"source",version:"0.3.0",description:"Connect a live, editable table on any Datasette instance — rows are never stored locally",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-connect.ts"};function Lg(e){Xu(e),e.ui.registerConnector({id:"datasette",label:"Datasette",icon:Dg,order:10,description:"A live, editable table on any Datasette instance",connect:t=>jg(t)}),e.ui.registerTableButton({id:"datasette:refresh-live",label:"Refresh",icon:"refresh",tooltip:"Re-read this live table from its Datasette instance",visible:t=>t.source?.type==="datasette",onClick:(t,{tableId:n})=>Mg(t,n)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:(t,n)=>Og(t,n,e)})}async function Mg(e,t){if((await e.store.tables.findOne(t))?.source?.type==="datasette")try{const r=e.store.rows(t);typeof r.refresh=="function"&&await r.refresh();const s=await r.find();e.ui.dialogs.toast(`Reloaded ${s.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}catch(r){const s=r instanceof ze?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${s}`,{kind:"error",title:"Refresh"})}}async function jg(e){const t=vt.instance??Ng(),n=(s,i)=>e.backend.fetch(s,i),r=await t.open({initialUrl:"https://datasette.io",async onTest(s,i){const o=$t(s),l=await Ku(n,o.base,{token:i||void 0});if(o.db&&o.table){await bo(Mn(n,i||void 0),o);const h=l.version?` (Datasette ${l.version})`:"";return l.writable?`Reachable${h} — table found, signed in, read-write.`:`Reachable${h} — table found, read-only (no token / not authenticated).`}if(!l.reachable)return`Unreachable: ${l.error??"no response"}`;const u=l.version?` (Datasette ${l.version})`:"";return l.writable?`Reachable${u} — signed in, read-write.`:`Reachable${u} — read-only (no token / not authenticated).`},async onConnect(s,i){const o=$t(s);o.db&&o.table&&await bo(Mn(n,i||void 0),o)}});if(r)try{await ed(e,r.url,r.token)}catch(s){const i=s instanceof ze?s.message:s?.message??String(s);await e.ui.dialogs.alert(i,"Connect Datasette failed")}}function Ng(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function ed(e,t,n){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const s=$t(t),i=(g,w)=>e.backend.fetch(g,w),o=Mn(i,n||void 0),l=await Ku(i,s.base,{token:n||void 0});n&&await e.store.settings.upsert({name:Zu(s.base),value:n});let u;try{u=await ua(o,s,"Connect")}catch(g){const w=g instanceof ze?g.message:g?.message??String(g);throw new Error(`Couldn't read tables from ${Ds(s.base)}: ${w}`)}if(u===null)return;if(u.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const h=[];for(const g of u){const w=await zg(e,r,s.base,g,l.writable,n);w!==null&&h.push({tableId:w,c:g})}if(h.length===0)return;const m=l.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${h.length} live table${h.length===1?"":"s"} from Datasette (${m}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:g,c:w}of h)Ug(e,g,s.base,w,n)}async function zg(e,t,n,r,s,i){const o=(await e.store.tables.find()).filter(w=>w.workspaceId===t);let l=`${r.db}/${r.table}`,u=o.find(w=>{const y=w.source?.config;return w.source?.type==="datasette"&&y?.base===n&&y?.db===r.db&&y?.table===r.table});if(!u){const w=o.find(y=>y.name.toLowerCase()===l.toLowerCase());if(w){const y=await e.ui.dialogs.choice(`A table named "${l}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!y||y==="Skip")return null;y==="Overwrite"?u=w:l=Ju(new Set(o.map($=>$.name)),l)}}let h=r.pks??[];if(h.length===0){const w=Mn((y,$)=>e.backend.fetch(y,$),i||void 0);try{h=await lg(w,{base:n,db:r.db,table:r.table,query:{}})}catch{h=[]}}const m=u?.id??Ce(),g={...u??{},id:m,workspaceId:t,name:l,code:Le(`${r.db}-${r.table}`),columns:u?.columns??[],view:u?.view??"table",source:{type:"datasette",writable:s,config:{base:n,db:r.db,table:r.table,pks:h}},updatedAt:Date.now()};return u?await e.store.tables.upsert(g):await e.store.tables.insert(g),m}async function Ug(e,t,n,r,s){const i={base:n,db:r.db,table:r.table,query:{}},o=Mn((l,u)=>e.backend.fetch(l,u),s||void 0);try{let l=[],u=!1;try{const x=await Ws(o,i);l=x.columns,u=x.typed}catch{}const{rows:h}=await Pr(o,i,{maxRows:50,pageSize:50}),m=l.length===0?Gs(h):u?l:aa(l,h);if(m.length===0)return;const g=await e.store.tables.findOne(t);if(!g)return;const w=g.source?.config?.pks??[];let y=m.map(x=>w.includes(x.field)?{...x,unique:!0,notnull:!0}:x),$={};try{const x=await ia(o,i),A=oa(x,y);y=A.columns,$=A.patch}catch{}$=ca($,i.base,r.db,r.table),await e.store.tables.patch(t,{columns:y,...$,updatedAt:Date.now()})}catch{}}const Fg=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:ed,init:Lg,meta:Pg},Symbol.toStringTag,{value:"Module"})),Bg={id:"url-source",name:"URL Reference",type:"source",version:"0.1.0",description:'Backs a table with a live read-only fetch of a plain CSV or JSON URL — a "reference" table whose rows are never persisted locally.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/url-source.ts"};function qg(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"url",create:td}),e.ui.registerTableButton({id:"url-source:refresh",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this reference from its source URL",visible:t=>t.source?.type==="url",onClick:async(t,{tableId:n})=>{try{const r=t.store.rows(n);typeof r.refresh=="function"&&await r.refresh(),t.ui.dialogs.toast("Reference refreshed.",{kind:"success",title:"Refresh"})}catch(r){t.ui.dialogs.toast(`Refresh failed: ${r.message}`,{kind:"error",title:"Refresh"})}}})}class fn extends Error{constructor(t){super(`This is a reference (read-only) table — ${t} is not permitted. Import a copy to edit.`),this.name="ReadOnlyReferenceError"}}function Hg(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}const Zl=5e4;function Kg(e){return e.ok===!0&&Array.isArray(e.rows)}function Vg(e,t){if(typeof e!="object"||e===null||Array.isArray(e))return null;const n=e;let r;try{r=new URL(t)}catch{return null}for(const s of["next_url","nextUrl","next"]){const i=n[s];if(typeof i!="string")continue;const o=i.trim();if(o!==""){if(/^(https?:\/\/|[/?])/i.test(o))try{const l=new URL(o,t);if(l.origin!==r.origin)continue;return l.toString()}catch{continue}if(s==="next"&&Kg(n))return`${r.origin}${r.pathname}?_next=${encodeURIComponent(o)}`}}return null}function Gg(e){const t=n=>typeof n=="object"&&n!==null&&!Array.isArray(n);if(Array.isArray(e))return e.filter(t);if(t(e)){for(const n of["rows","records","data"]){const r=e[n];if(Array.isArray(r))return r.filter(t)}for(const n of Object.values(e))if(Array.isArray(n))return n.filter(t)}return[]}function td(e,t){const n=e.source?.config??{},r=typeof n.url=="string"?n.url:"",s=n.format==="json"?"json":"csv",i=new Set;let o=[],l=!1,u=null;function h($){return $.map((x,A)=>({id:`url:${A}`,tableId:e.id,data:x,updatedAt:0}))}async function m($){let x;try{x=await t.backend.fetch($)}catch(A){throw new Error(`Could not reach ${r}: ${A?.message??String(A)}`)}if(!x.ok)throw new Error(`Could not load ${r}: HTTP ${x.status} ${x.statusText}`);try{return await lu(x)}catch(A){throw new Error(`Could not read response from ${r}: ${A?.message??String(A)}`)}}async function g($){const x=No($);let A=await m(x);if(ou(A)){const L=au(x);L&&(A=await m(L))}try{if(s==="json"){const L=JSON.parse(A);return{records:Gg(L),nextUrl:Vg(L,x)}}return{records:Un(A).rows,nextUrl:null}}catch(L){throw new Error(`Could not parse ${s.toUpperCase()} from ${r}: ${L?.message??String(L)}`)}}async function w(){if(!r)throw new Error("This reference table has no URL configured.");const $=[];let x=r;const A=new Set;for(;x&&$.length<Zl&&!A.has(x);){A.add(x);const L=await g(x);$.push(...L.records),x=L.records.length>0?L.nextUrl:null}return $.slice(0,Zl)}function y(){return u||(u=(async()=>{try{const $=await w();o=h($),l=!0;for(const x of i)x(o);return o}finally{u=null}})(),u)}return{async find($){const x=l?o:await y();return!$||Object.keys($).length===0?x:x.filter(A=>Hg(A,$))},async findOne($){return(l?o:await y()).find(A=>A.id===$)??null},async insert(){throw new fn("insert")},async bulkInsert(){throw new fn("insert")},async upsert(){throw new fn("upsert")},async patch(){throw new fn("update")},async remove(){throw new fn("delete")},async bulkRemove(){throw new fn("delete")},subscribe($){return i.add($),l?$(o):y(),()=>{i.delete($)}},async refresh(){l=!1,o=[],await y()}}}const Wg=Object.freeze(Object.defineProperty({__proto__:null,ReadOnlyReferenceError:fn,createUrlCollection:td,init:qg,meta:Bg},Symbol.toStringTag,{value:"Module"}));function Fe(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),`"${t||"_"}"`}function ec(e){return`'${e.replace(/'/g,"''")}'`}function tc(e,t){const n=e.columns.find(r=>r.field===t);return n?n.from.kind==="script"?{expr:null,computed:!0}:{expr:`${Fe(n.from.alias)}.${Fe(n.from.field)}`,computed:!1}:null}function Yg(e,t){const n=e.sources[0];if(!n)return`-- projection has no source table; nothing to select.
`;const r=t.limitStyle??"limit",s=e.limit!=null&&e.limit>0?Math.floor(e.limit):null,i=[];for(const y of e.columns)y.from.kind==="source"?i.push(`  ${Fe(y.from.alias)}.${Fe(y.from.field)} AS ${Fe(y.field)}`):i.push(`  NULL AS ${Fe(y.field)} -- computed in-app by a script; no SQL equivalent`);i.length===0&&i.push("  *");const l=[`SELECT${s!=null&&r==="top"?` TOP ${s}`:""}`,i.join(`,
`)],u=t.tableNames[n.alias]??n.tableName;l.push(`FROM ${Fe(u)} AS ${Fe(n.alias)}`);for(const y of e.sources.slice(1)){const $=t.tableNames[y.alias]??y.tableName;if(!y.join){l.push(`CROSS JOIN ${Fe($)} AS ${Fe(y.alias)}`);continue}const x=y.join.type==="inner"?"INNER JOIN":"LEFT JOIN",A=y.join.on.map(L=>`${Fe(y.alias)}.${Fe(L.field)} = ${Fe(L.eqAlias)}.${Fe(L.eqField)}`).join(" AND ");l.push(`${x} ${Fe($)} AS ${Fe(y.alias)} ON ${A||"1 = 1"}`)}const h=[],m=[];for(const[y,$]of Object.entries(e.filters??{})){if(!$)continue;const x=tc(e,y);if(x){if(x.computed){m.push(`-- filter on ${Fe(y)} (${ec($)}) applies to a computed column; enforced in-app only`);continue}h.push(`LOWER(${x.expr}) LIKE ${ec(`%${$.toLowerCase()}%`)}`)}}h.length>0&&l.push(`WHERE ${h.join(`
  AND `)}`);const g=(t.orderBy??[]).map(y=>{const $=tc(e,y.field);return!$||$.computed?null:`${$.expr} ${y.asc?"ASC":"DESC"}`}).filter(y=>y!==null);g.length>0&&l.push(`ORDER BY ${g.join(", ")}`);const w=s==null?"":r==="limit"?`
LIMIT ${s}`:r==="fetch"?`
FETCH FIRST ${s} ROWS ONLY`:"";return`${l.join(`
`)}${w};
${m.length>0?`${m.join(`
`)}
`:""}`}const Qg={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function Xg(){}async function nd(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const n=(await e.store.tables.find()).filter(l=>l.workspaceId===t),r=n.filter(l=>l.source?.type!=="projection"),s=n.filter(l=>l.source?.type==="projection"),i=Jg(n),o=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}${s.length>0?` (+ ${s.length} projection${s.length===1?"":"s"})`:""}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const l of r){const u=await e.store.rows(l.id).find();o.push(id(l,u),"")}if(o.push("COMMIT;",""),s.length>0){o.push("","-- Projections (virtual tables). Each is the query behind one, reading the","-- tables above. Run them as-is, or wrap one in CREATE VIEW to keep it.","");for(const l of s)o.push(`-- projection: ${l.name}`,fa(l,i)??"","")}return o.join(`
`)}function Jg(e){const t=new Map;for(const n of e)t.has(n.name)||t.set(n.name,jn(n.code||n.name));return n=>t.get(n)??jn(Le(n))}function rd(e,t){const n=sd(e);return n||["-- easyDBAccess table export",`-- table:    ${e.name}`,`-- exported: ${new Date().toISOString()}`,"","BEGIN;","",id(e,t),"","COMMIT;",""].join(`
`)}function sd(e,t){const n=fa(e,t);return n===null?null:["-- easyDBAccess projection export",`-- projection: ${e.name}`,`-- exported:   ${new Date().toISOString()}`,"--","-- A projection is a derived (virtual) table: this is the query behind it,","-- reading the source tables by name.","-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';","-- before executing. For SQL Server / HANA, replace the trailing LIMIT n","-- with SELECT TOP n.","",n].join(`
`)}function fa(e,t){if(e.source?.type!=="projection")return null;const n=e.source.config;if(!n||!Array.isArray(n.sources))return null;const r=t??(o=>jn(Le(o))),s={};for(const o of n.sources)s[o.alias]=r(o.tableName);const i=n.sources.length>0&&e.sortBy&&e.sortBy.length>0?e.sortBy:e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc??!0}]:void 0;return Yg(n,{tableNames:s,limitStyle:"limit",...i?{orderBy:i}:{}})}function id(e,t){const n=jn(e.code||e.name||`table_${e.id}`),r=['  "__id" TEXT PRIMARY KEY',...e.columns.map(i=>`  ${Zg(i)}`)],s=[`DROP TABLE IF EXISTS "${n}";`,`CREATE TABLE "${n}" (`,r.join(`,
`),");"];if(t.length>0){const o=["__id",...e.columns.map(l=>l.field)].map(l=>`"${jn(l)}"`).join(", ");for(const l of t){const u=[nc(l.id),...e.columns.map(h=>nc(l.data[h.field],h.type))];s.push(`INSERT INTO "${n}" (${o}) VALUES (${u.join(", ")});`)}}return s.join(`
`)}function Zg(e){const t=[`"${jn(e.field)}"`,eb(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function eb(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function nc(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const n=tb(e);return n===null?"NULL":gs(n)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?gs(e.toISOString()):gs(typeof e=="string"?e:JSON.stringify(e))}function tb(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?rc(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const n=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(n)return`${n[1]}${n[2]}${n[3]}`;const r=new Date(t);return Number.isFinite(r.getTime())?rc(r):null}return null}function rc(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),n=String(e.getUTCMonth()+1).padStart(2,"0"),r=String(e.getUTCDate()).padStart(2,"0");return`${t}${n}${r}`}function gs(e){return`'${e.replace(/'/g,"''")}'`}function jn(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const nb=Object.freeze(Object.defineProperty({__proto__:null,init:Xg,meta:Qg,projectionSelectBody:fa,projectionSelectFor:sd,serializeTableAsSql:rd,serializeWorkspaceAsSql:nd},Symbol.toStringTag,{value:"Module"})),od=/\$((?:input|filter)[.:])?([A-Za-z_][A-Za-z0-9_]*)/g;function sc(...e){const t=new Set;for(const n of e)if(n)for(const r of n.matchAll(od))t.add(r[2]);return[...t]}const pa=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Rn=e=>pa(e).replace(/"/g,"&quot;").replace(/'/g,"&#39;");function rb(e){return typeof e=="boolean"?e:typeof e=="number"?e!==0:typeof e=="string"?["true","1","yes","y","t","on"].includes(e.trim().toLowerCase()):!1}function sb(e,t,n,r,s){const i=r?.type??"string",o=pa(r?.label||e),l=`class="eda-input" data-eda-row="${Rn(n)}" data-eda-field="${Rn(e)}" data-eda-type="${Rn(i)}"`,u=s?" disabled":"";let h;if(i==="boolean")h=`<input type="checkbox" ${l}${rb(t)?" checked":""}${u} />`;else{const m=i==="number"?"number":"text",g=t==null?"":Rn(String(t));h=`<input type="${m}" ${l} value="${g}"${u} />`}return`<label class="eda-input-field" title="${o}">${h}<span class="eda-input-label">${o}</span></label>`}function ib(e,t){if(t==null||t==="")return"";const n=String(t),r=Rn(e),s=Rn(n);return`<button type="button" class="eda-filter-pill" data-eda-filter-field="${r}" data-eda-filter-value="${s}" title="Filter by ${r}: ${s}">${pa(n)}</button>`}function ob(e,t,n,r={}){return e.replace(od,(s,i,o)=>{const l=n[o];if(!l)return"";const u=t.data[l];if(!i)return u==null?"":String(u);if(i.startsWith("filter"))return ib(l,u);const h=r.columns?.get(l),m=r.readonly===!0||!!h?.script?.trim();return sb(l,u,t.id,h,m)})}function ic(e){return e==null||e===""}function ab(e,t){let n=null;for(const r of t){if(!r.script?.trim())continue;const s=Wo(r.script,e.data);n??={...e.data},n[r.field]=s.ok?s.value:`⚠ ${s.label}`}return n?{...e,data:n}:e}function lb(e,t){return t.some(n=>n.script?.trim())?e.map(n=>ab(n,t)):e}function oc(e,t){const n=Object.entries(t).filter(([,r])=>r!=null&&String(r).trim()!=="");return n.length===0?e:e.filter(r=>n.every(([s,i])=>As(r.data[s],i)))}function ad(e,t){return e.exact===!0&&!e.negate&&e.term.toLowerCase()===t.toLowerCase()}function cb(e,t){const n=Dr(e??"");return n.some(r=>ad(r,t))||n.push({term:t,negate:!1,exact:!0}),_r(n)}function ub(e,t){const n=Dr(e??"").filter(r=>!ad(r,t));return _r(n)}function db(e,t,n=!0){if(!t)return e;const r=n?1:-1;return[...e].sort((s,i)=>{const o=s.data[t],l=i.data[t],u=ic(o),h=ic(l);if(u||h)return u===h?0:u?1:-1;const m=Number(o),g=Number(l);return!Number.isNaN(m)&&!Number.isNaN(g)?(m-g)*r:String(o).localeCompare(String(l),void 0,{numeric:!0,sensitivity:"base"})*r})}function ld(e,t){const n=oc(e,t.filters??{}),r=oc(n,t.pillFilters??{});return db(r,t.sortColumn,t.sortAsc??!0)}function hb(e){return!!e&&e.trim().length>0}function fb(e,t){return t==="raw"||t==="structure"?e.columns:e.columns.filter(n=>n.hidden!==!0)}function pb(e,t){return t==="raw"||t==="structure"?e:{...e,columns:fb(e,t)}}function mb(e,t,n){return n==="structure"?[]:n==="raw"?t:ld(t,{filters:e.filters??{},sortColumn:e.sortColumn,sortAsc:e.sortAsc})}function ma(e,t){const n=e.columns.map(s=>s.field),r=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:r?[]:t.map(s=>{const i={};for(const o of n)i[o]=s.data[o];return i})}}const gb={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file, and — per table — CSV/JSON/SQL with a Raw vs. Visible vs. Structure Only choice.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function bb(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,n)=>{const r=t.workspaceId();if(!r)return;const{AnchoredMenu:s}=await ut(async()=>{const{AnchoredMenu:l}=await Promise.resolve().then(()=>Cr);return{AnchoredMenu:l}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await s.open(i,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(o)try{if(o==="json"){const l=await Js(t);await t.backend.saveFile(`workspace-${r}.db.json`,l,"application/json")}else if(o==="sql"){const l=await nd(t);await t.backend.saveFile(`workspace-${r}.sql`,l,"application/sql")}}catch(l){t.ui.dialogs.toast(`Export failed: ${l.message}`,{kind:"error",title:"Export"})}}}),e.ui.registerTableButton({id:"table-export:menu",label:"Export",icon:"file_download",tooltip:"Export this table as CSV, JSON, or SQL",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ut(async()=>{const{AnchoredMenu:h}=await Promise.resolve().then(()=>Cr);return{AnchoredMenu:h}},void 0),s=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"csv",label:"CSV (.csv)",icon:"table_chart"},{id:"json",label:"JSON (.table.json)",icon:"data_object"},{id:"sql",label:"SQL (.sql)",icon:"storage"}]);if(!i)return;const o=await t.store.tables.findOne(n.tableId);if(!o)return;const l=await t.ui.dialogs.choice(`Export "${o.name}" as ${i.toUpperCase()} — which rows/columns?`,["Visible Data","Raw Data","Structure Only"],"Export table");if(!l)return;const u=l==="Visible Data"?"visible":l==="Raw Data"?"raw":"structure";try{const h=await t.store.rows(o.id).find(),m=pb(o,u),g=mb(o,h,u),w=Le(o.code||o.name||"table"),y=u!=="structure"&&o.source!=null&&h.length===0;if(i==="csv")y&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting column definitions only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${w}.csv`,qo(m,g),"text/csv");else if(i==="json"){const $=JSON.stringify(ma(m,g),null,2);await t.backend.saveFile(`${w}.table.json`,$,"application/json")}else i==="sql"&&(y&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting the CREATE TABLE only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${w}.sql`,rd(m,g),"application/sql"))}catch(h){t.ui.dialogs.toast(`Export failed: ${h.message}`,{kind:"error",title:"Export"})}}})}async function Js(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const n=(await e.store.tables.find()).filter(o=>o.workspaceId===t),r=(await e.store.viewTemplates.find()).filter(o=>o.workspaceId===t),s=(await e.store.viewInstances.find()).filter(o=>o.workspaceId===t),i={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:r,viewInstances:s};for(const o of n){const l=await e.store.rows(o.id).find();i.tables.push({name:o.name,columns:o.columns,rows:l.map(u=>u.data),...o.title?{title:o.title}:{},...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},...o.filters?{filters:o.filters}:{},...o.labelColumn?{labelColumn:o.labelColumn}:{},...o.info?{info:o.info}:{},...o.deletedColumns?{deletedColumns:o.deletedColumns}:{},...o.readonly?{readonly:!0}:{},...o.source?{source:o.source}:{},...o.origin?{origin:o.origin}:{}})}return JSON.stringify(i,null,2)}const wb=Object.freeze(Object.defineProperty({__proto__:null,init:bb,meta:gb,serializeWorkspace:Js},Symbol.toStringTag,{value:"Module"})),yb={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},vb="gist:",ac='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function $b(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).',help:'A classic token with the single "gist" scope is enough — nothing else is needed and nothing else should be granted. Give it an expiry you are happy with; the sync stops working when it lapses and you paste a new one here. Keep the value in the secrets store (General tab) and reference it, so it is never written into a synced setting.',helpUrl:"https://github.com/settings/tokens/new?scopes=gist&description=easyDBAccess",helpLinkLabel:"Create a token on GitHub"}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:ac,tooltip:"Gist sync — push, pull, share…",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ut(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>Cr);return{AnchoredMenu:o}},void 0),s=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(i)try{if(i==="push"||i==="pull"){const o=await r.open(s,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!o)return;const l=o;i==="push"?await Eb(t,l):await ud(t,l)}else i==="share"?await _b(t):i==="view"&&await Sb(t)}catch(o){t.ui.dialogs.toast(`Gist ${i} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:ac,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ut(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>Cr);return{AnchoredMenu:o}},void 0),s=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(i)try{i==="push"?await Tb(t,n.tableId):i==="pull"?await Ib(t,n.tableId):i==="view"&&await Ab(t,n.tableId)}catch(o){t.ui.dialogs.toast(`Gist ${i} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}})}async function xb(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let n;try{n=atob(t)}catch{return}const r=kb(n);if(!r){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${r.gistId||"(new)"} (owner: ${r.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await ga(e,r),await ud(e))}async function cd(e){const t=e.workspaceId();return`${vb}${t??"default"}`}async function Mr(e){const[t,n,r]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&r)return{user:t,gistId:n??"",token:r};const i=(await e.store.settings.findOne(await cd(e)))?.value;if(i?.user&&i?.token){const o={user:i.user,gistId:i.gistId??"",token:i.token};return await ga(e,o),o}return null}async function ga(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({name:await cd(e),value:t})}function kb(e){const t={};for(const n of e.split(";")){const r=n.indexOf("=");if(r<0)continue;const s=n.slice(0,r).trim(),i=n.slice(r+1).trim();s&&(t[s]=i)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function ba(e){const t=await Mr(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function Cb(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function _b(e){const t=await Mr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const r=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(Cb(t)))}`,{GistShareDialog:s}=await ut(async()=>{const{GistShareDialog:i}=await import("./gist-share-dialog-HdbIVuk2.js");return{GistShareDialog:i}},[]);await s.open(r)}async function Sb(e){const t=await Mr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}async function Eb(e,t="all"){const n=await ba(e);if(!n)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=t!=="settings",i=t!=="data",o=(await e.store.tables.find()).filter(x=>x.workspaceId===r);if(s&&o.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const l=1e8,u=1e7,h={},m=[],g=[];if(s)for(const x of o){const A=x.source!=null?[]:await e.store.rows(x.id).find(),L=JSON.stringify(ma(x,A),null,2),M=`${x.name} (${(L.length/1e6).toFixed(2)} MB)`;L.length>l?m.push(M):L.length>u&&g.push(M),h[`${Le(x.name)}.table.json`]={content:L}}if(m.length>0||g.length>0){const x=[];if(m.length>0&&x.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${m.join(`
`)}`),g.length>0&&x.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${g.join(`
`)}`),!await e.ui.dialogs.confirm(`${x.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(i){const x=(await e.store.viewTemplates.find()).filter(M=>M.workspaceId===r),A=(await e.store.viewInstances.find()).filter(M=>M.workspaceId===r),L=(await e.store.settings.find()).map(M=>({name:M.name,value:M.value}));h["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:x,viewInstances:A,settings:L},null,2)}}let w;if(n.gistId){const x=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:h,description:`easyDBAccess workspace: ${r}`})});if(!x.ok)throw new Error(await Sr(x));w=await x.json()}else{const x=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:h})});if(!x.ok)throw new Error(await Sr(x));w=await x.json(),n.gistId=w.id,await ga(e,n)}const y=w.html_url??`https://gist.github.com/${n.user}/${w.id}`,$=t==="settings"?"settings":t==="data"?`${o.length} table${o.length===1?"":"s"} (data only)`:`${o.length} table${o.length===1?"":"s"}`;e.ui.dialogs.toast(`Pushed ${$}.  ${y}`,{kind:"success",title:"Gist sync"})}async function ud(e,t="all"){const n=t!=="settings",r=t!=="data",s=await ba(e);if(!s||!s.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const i=e.workspaceId();if(!i)throw new Error("no active workspace");const o=await fetch(`https://api.github.com/gists/${s.gistId}`,{headers:{Authorization:`Bearer ${s.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await Sr(o));const l=await o.json(),u=Object.entries(l.files).filter(([M])=>M.endsWith(".table.json")&&!M.startsWith("_easydb"));if(n&&u.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const h=(await e.store.tables.find()).filter(M=>M.workspaceId===i),m=new Map(h.map(M=>[M.name.toLowerCase(),M]));let g=0;const w=[],y=new Map;if(n){const{TopProgress:M}=await ut(async()=>{const{TopProgress:V}=await import("./top-progress-CEpH-ZkJ.js");return{TopProgress:V}},[]),F=M.begin("Pulling from gist…");try{for(const[V,[Q,ne]]of u.entries())try{const B=await Ps(ne),G=JSON.parse(B);if(!G.name||!Array.isArray(G.columns))throw new Error("unexpected file shape (missing name/columns)");let ie;const re=m.get(G.name.toLowerCase());if(re){if(ie=await e.store.tables.patch(re.id,{title:G.title,columns:G.columns,...wo(G),updatedAt:Date.now()}),ie.source==null){const H=e.store.rows(re.id),K=await H.find();await H.bulkRemove(K.map(ce=>ce.id))}}else ie=await e.store.tables.insert({id:Ce(),workspaceId:i,name:G.name,title:G.title,code:Le(G.name),columns:G.columns,view:G.view??"table",...wo(G),updatedAt:Date.now()});if(ie.source==null){const H=(G.rows??[]).map(K=>({id:Ce(),tableId:ie.id,data:K,updatedAt:Date.now()}));await e.store.rows(ie.id).bulkInsert(H)}y.set(G.name,ie.id),g++}catch(B){w.push({file:Q,error:B.message})}finally{F.fraction((V+1)/u.length)}}finally{F.done()}}let $=0,x="",A=null;const L=r?l.files["_easydb.workspace.json"]:void 0;if(L)try{const M=await Ps(L),F=JSON.parse(M),V=F.viewTemplates??[],Q=F.viewInstances??[],ne=F.settings??[];A=new Set(Q.map(G=>G.id));const B=await yu(e.store.viewTemplates,i,V);for(const G of Q){let ie;if(G.tableName&&(ie=y.get(G.tableName)??m.get(G.tableName)?.id),ie??=G.tableId,!ie)continue;const re=B.get(G.templateId)??G.templateId;await e.store.viewInstances.upsert({...G,workspaceId:i,tableId:ie,templateId:re}),$++}for(const G of ne)await e.store.settings.upsert(G)}catch(M){x=`Workspace metadata import failed: ${M.message}`}if(w.length>0){const M=w.map(F=>`• ${F.file}: ${F.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${g} of ${u.length} tables. ${w.length} failed:
${M}${x?`
${x}`:""}`,{kind:"warning",title:"Gist sync"})}else{const M=$>0?` (+${$} views)`:"",F=t==="settings"?`Pulled settings${M}.`:`Pulled ${g} table${g===1?"":"s"}.${M}`;e.ui.dialogs.toast(F,{kind:"success",title:"Gist sync"}),x&&e.ui.dialogs.toast(x,{kind:"warning",title:"Gist sync"})}w.length===0&&await dd(e,i,{tableNames:n?new Set([...y.keys()].map(M=>M.toLowerCase())):null,viewInstanceIds:A}),document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}function lc(e,t=8){const n=e.slice(0,t).map(s=>`• ${s}`),r=e.length-n.length;return[...n,...r>0?[`• …and ${r} more`]:[]].join(`
`)}async function dd(e,t,n){const r=n.tableNames?(await e.store.tables.find()).filter(u=>u.workspaceId===t&&!n.tableNames.has(u.name.toLowerCase())):[],s=n.viewInstanceIds?(await e.store.viewInstances.find()).filter(u=>u.workspaceId===t&&!n.viewInstanceIds.has(u.id)):[];if(r.length===0&&s.length===0)return;const i=[];if(r.length>0&&i.push(`${r.length} table${r.length===1?"":"s"}:
`+lc(r.map(u=>u.name))),s.length>0&&i.push(`${s.length} view${s.length===1?"":"s"}:
`+lc(s.map(u=>u.name))),!await e.ui.dialogs.confirm(`The gist does not have these local objects:

${i.join(`

`)}

Delete them, so this workspace matches the gist? A table goes with its rows. Keep them if this is local work you have not pushed yet.`,"Delete objects missing from the pull?"))return;for(const u of s)await e.store.viewInstances.remove(u.id);const{deleteTable:l}=await ut(async()=>{const{deleteTable:u}=await Promise.resolve().then(()=>Gw);return{deleteTable:u}},void 0);for(const u of r)await l(u.id);e.ui.dialogs.toast(`Deleted ${r.length} table${r.length===1?"":"s"} and ${s.length} view${s.length===1?"":"s"}.`,{kind:"success",title:"Gist sync"})}async function Tb(e,t){const n=await ba(e);if(!n)return;if(!n.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const s=r.source!=null?[]:await e.store.rows(t).find(),i=JSON.stringify(ma(r,s),null,2),o={[`${Le(r.name)}.table.json`]:{content:i}},l=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:o})});if(!l.ok)throw new Error(await Sr(l));e.ui.dialogs.toast(`Pushed "${r.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function Ib(e,t){const n=await Mr(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const s=`${Le(r.name)}.table.json`,i=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!i.ok)throw new Error(await Sr(i));const l=(await i.json()).files[s];if(!l){await e.ui.dialogs.alert(`No file "${s}" in the gist for this table.`,"Gist sync");return}const u=await Ps(l),h=JSON.parse(u);if(!h.name||!Array.isArray(h.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:h.title,columns:h.columns,...wo(h),updatedAt:Date.now()})).source==null){const g=e.store.rows(t),w=await g.find();await g.bulkRemove(w.map($=>$.id));const y=(h.rows??[]).map($=>({id:Ce(),tableId:t,data:$,updatedAt:Date.now()}));await g.bulkInsert(y)}e.ui.dialogs.toast(`Pulled "${r.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function Ab(e,t){const n=await Mr(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const s=`file-${Le(r.name)}-table-json`;window.open(`https://gist.github.com/${n.user}/${n.gistId}#${s}`,"_blank","noopener")}function wo(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function Ps(e,t=n=>fetch(n)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const n=await t(e.raw_url);if(!n.ok)throw new Error(`raw fetch failed: ${n.status} ${n.statusText}`);return n.text()}async function Sr(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Rb=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:Ps,init:$b,load:xb,meta:yb,offerPrune:dd},Symbol.toStringTag,{value:"Module"})),hd="server-sync:url";function fd(e){return`server-sync:etag:${e}`}async function pd(e){const n=(await e.store.settings.findOne(hd))?.value;return typeof n!="string"||n.length===0?null:n.replace(/\/+$/,"")}async function Ob(e,t){await e.store.settings.upsert({name:hd,value:t.replace(/\/+$/,"")})}async function md(e,t){const r=(await e.store.settings.findOne(fd(t)))?.value;return typeof r=="string"?r:null}async function yn(e,t,n){await e.store.settings.upsert({name:fd(t),value:n})}function Zs(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function cc(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function gd(e,t,n){const r=Ks(n,t),s=(await e.store.tables.find()).filter(o=>o.workspaceId===t);for(const o of s){const l=e.store.rows(o.id),u=await l.find();await l.bulkRemove(u.map(h=>h.id)),await e.store.tables.remove(o.id)}let i=0;for(const o of r){const l=Ce(),u=await e.store.tables.insert({id:l,workspaceId:t,name:o.name,code:Le(o.name),columns:o.columns,view:"table",...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},updatedAt:Date.now()}),h=o.rows.map(m=>({id:Ce(),tableId:u.id,data:m,updatedAt:Date.now()}));await e.store.rows(u.id).bulkInsert(h),i++}return i}const Db={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function Pb(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ut(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>Cr);return{AnchoredMenu:o}},void 0),s=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(i)try{i==="push"?await Lb(t):i==="pull"&&await Mb(t)}catch(o){t.ui.dialogs.toast(`${i==="push"?"Push":"Pull"} failed: ${o.message}`,{kind:"error",title:"Server sync"})}}})}async function Lb(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await bd(e);if(!n)return;const r=await Js(e),s=await md(e,t),i={"Content-Type":"application/json"};s&&(i["If-Match"]=`"${s}"`);let o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:i,body:r});if(o.status===412){const u=await o.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){u.currentEtag&&await yn(e,t,u.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:r})}if(!o.ok)throw new Error(await wd(o));const l=Zs(o.headers.get("ETag"));l&&await yn(e,t,l),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${n}.`,{kind:"success",title:"Server sync"})}async function Mb(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await bd(e);if(!n||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const s=await fetch(`${n}/sync/${encodeURIComponent(t)}`);if(s.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!s.ok)throw new Error(await wd(s));const i=Zs(s.headers.get("ETag")),o=await s.json(),l=await gd(e,t,o);i&&await yn(e,t,i),e.ui.dialogs.toast(`Pulled ${l} table${l===1?"":"s"} from ${n}.`,{kind:"success",title:"Server sync"})}async function bd(e){const t=await pd(e);if(t)return t;const n=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!n)return null;try{new URL(n)}catch{return await e.ui.dialogs.alert(`"${n}" is not a valid URL.`,"Server sync"),null}return await Ob(e,n),n.replace(/\/+$/,"")}async function wd(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const jb=Object.freeze(Object.defineProperty({__proto__:null,init:Pb,meta:Db},Symbol.toStringTag,{value:"Module"})),Nb={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function zb(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const Ub=Object.freeze(Object.defineProperty({__proto__:null,init:zb,meta:Nb},Symbol.toStringTag,{value:"Module"}));function ei(e,t="Edit"){const n=document.createElement("button");return n.type="button",n.title=t,n.textContent="✎",n.className="cell-pencil",n.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",n.addEventListener("mouseenter",()=>n.style.color="#374151"),n.addEventListener("mouseleave",()=>n.style.color="#9ca3af"),n.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),e()}),n}function ti(e,t){const n=document.createElement("span");return n.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%",e.style.flex="1 1 auto",e.style.minWidth="0",e.style.overflow="hidden",n.append(e,t),n}function ni(e){const t=document.createElement("input");t.type="text",t.value=e.value,t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0;text-overflow:ellipsis";const n=()=>{e.isLive(t)&&e.onCommit(t.value)};return t.addEventListener("keydown",r=>{r.key==="Enter"?(r.preventDefault(),n()):r.key==="Escape"&&(r.preventDefault(),e.onCancel())}),t.addEventListener("blur",n),setTimeout(()=>{t.focus(),t.select()},0),t}const Fb={id:"cell-date",name:"Cell Date",type:"cell-renderer",version:"0.1.0",description:"Renderer for date columns: a native `<input type=date>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"date\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-date.ts"};function Bb(e){customElements.get("cell-date")||customElements.define("cell-date",qb),e.ui.registerCellRenderer("date","cell-date")}class qb extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=ni({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(Hb(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",ra(n,`Not a valid date: "${String(this._value)}"`),this.append(this._readonly?n:ti(n,this.pencil()));return}if(this._readonly){this.textContent=yo(this._value);return}const t=document.createElement("input");t.type="date",t.value=yo(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return ei(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function yo(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function Hb(e){return e==null||typeof e=="string"&&e.trim()===""?!1:yo(e)===""}const Kb=Object.freeze(Object.defineProperty({__proto__:null,init:Bb,meta:Fb},Symbol.toStringTag,{value:"Module"})),Vb={id:"cell-datetime",name:"Cell Datetime",type:"cell-renderer",version:"0.1.0",description:"Renderer for datetime columns: a native `<input type=datetime-local>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"datetime\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-datetime.ts"};function Gb(e){customElements.get("cell-datetime")||customElements.define("cell-datetime",Wb),e.ui.registerCellRenderer("datetime","cell-datetime")}class Wb extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=ni({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(Yb(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",ra(n,`Not a valid datetime: "${String(this._value)}"`),this.append(this._readonly?n:ti(n,this.pencil()));return}if(this._readonly){this.textContent=vo(this._value).replace("T"," ");return}const t=document.createElement("input");t.type="datetime-local",t.value=vo(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return ei(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function vo(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const s=r.toISOString();return`${s.slice(0,10)}T${s.slice(11,16)}`}function Yb(e){return e==null||typeof e=="string"&&e.trim()===""?!1:vo(e)===""}const Qb=Object.freeze(Object.defineProperty({__proto__:null,init:Gb,meta:Vb},Symbol.toStringTag,{value:"Module"})),Xb={id:"cell-boolean",name:"Cell Boolean",type:"cell-renderer",version:"0.1.0",description:`Renderer for boolean columns: a checkbox for true/false, a grayed-out unchecked box for an empty cell (clickable to set true), and red-bordered raw text with a pencil for a stored value that is none of those. Apply by setting a column's renderer to "boolean".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="8 12 11 15 16 9"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-boolean.ts"};function Jb(e){customElements.get("cell-boolean")||customElements.define("cell-boolean",Zb),e.ui.registerCellRenderer("boolean","cell-boolean")}class Zb extends HTMLElement{constructor(){super(...arguments),this._value=!1,this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const s=ni({value:this._value==null?"":String(this._value),onCommit:i=>this.commit(i),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:i=>this._editor===i});this.append(s),this._editor=s;return}const t=zu(this._value);if(t==="invalid"){const s=document.createElement("span");s.textContent=String(this._value),s.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",ra(s,`Not a valid boolean: "${String(this._value)}"`),this.append(this._readonly?s:ti(s,this.pencil()));return}const n=document.createElement("input");n.type="checkbox",n.checked=t==="true";let r="transform:translateY(1px)";t==="empty"&&(r+=";opacity:0.45",n.title="Empty — no value stored. Click to set true."),this._readonly?n.disabled=!0:(r+=";cursor:pointer",n.addEventListener("change",()=>this.commit(n.checked))),n.style.cssText=r,this.append(n)}pencil(){return ei(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const ew=Object.freeze(Object.defineProperty({__proto__:null,init:Jb,meta:Xb},Symbol.toStringTag,{value:"Module"})),tw={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function nw(e){customElements.get("cell-color")||customElements.define("cell-color",rw),e.ui.registerCellRenderer("color","cell-color")}class rw extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,n,r){this.value=r}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const n=document.createElement("input");n.type="color",n.value=t,n.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",n.addEventListener("change",()=>this.commit(n.value)),this.append(n)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const sw=Object.freeze(Object.defineProperty({__proto__:null,init:nw,meta:tw},Symbol.toStringTag,{value:"Module"})),iw={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function ow(e){customElements.get("cell-image")||customElements.define("cell-image",aw),e.ui.registerCellRenderer("image","cell-image")}class aw extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t??"",this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this.style.display="block",this.style.minWidth="0",this.style.overflow="hidden",this._editing){const r=document.createElement("span");r.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const s=ni({value:this._value,onCommit:o=>this.commit(o),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:o=>this._editor===o}),i=document.createElement("button");i.type="button",i.textContent="upload",i.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",i.addEventListener("mousedown",o=>o.preventDefault()),i.addEventListener("click",()=>this.pickFile()),r.append(s,i),this.append(r),this._editor=s;return}const t=document.createElement("span");if(t.style.cssText="display:flex;align-items:center;gap:0.4rem;min-width:0",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const r=document.createElement("img");r.src=this._value,r.alt="",r.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(r)}else{const r=document.createElement("span");if(r.style.color="#9ca3af",r.textContent="no image",t.append(r),!this._readonly){const s=document.createElement("button");s.type="button",s.textContent="upload",s.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",s.addEventListener("click",()=>this.pickFile()),t.append(s)}}this.append(this._readonly?t:ti(t,this.pencil()))}pencil(){return ei(()=>{this._editing=!0,this.render()},"Edit the image URL")}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const n=t.files?.[0];if(!n)return;const r=new FileReader;r.onload=()=>this.commit(String(r.result)),r.readAsDataURL(n)}),t.click()}commit(t){const n=t!==this._value;this._value=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const lw=Object.freeze(Object.defineProperty({__proto__:null,init:ow,meta:iw},Symbol.toStringTag,{value:"Module"})),yd=200,vd=100;function cw(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<yd||e.h<vd?null:{...e}}function Ls(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}function uw(e,t,n,r){const s=r>0?r:1;return{...e,x:e.x+t/s,y:e.y+n/s}}function dw(e,t,n,r,s,i,o){const l=s>0?s:1,u=n/l,h=r/l;let{x:m,y:g,w,h:y}=e;return t.includes("e")&&(w=Math.max(i,e.w+u)),t.includes("s")&&(y=Math.max(o,e.h+h)),t.includes("w")&&(w=Math.max(i,e.w-u),m=e.x+(e.w-w)),t.includes("n")&&(y=Math.max(o,e.h-h),g=e.y+(e.h-y)),{x:m,y:g,w,h:y}}function hw(e){return e?.minimized?{status:"minimized",restoreStatus:e.maximized?"maximized":"normalized"}:e?.maximized?{status:"maximized",restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}function uc(e,t){if(e.status==="closed")return e;switch(t){case"close":return{...e,status:"closed"};case"minimize":return e.status==="minimized"?e:{status:"minimized",restoreStatus:e.status==="maximized"?"maximized":"normalized"};case"maximize":return{status:"maximized",restoreStatus:"normalized"};case"smallify":return e.status!=="normalized"?e:{...e,status:"smallified"};case"normalize":return e.status==="minimized"?{status:e.restoreStatus,restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}}function fw(e){return{minimized:e.status==="minimized",maximized:e.status==="maximized"||e.status==="minimized"&&e.restoreStatus==="maximized"}}const pw="input, textarea, select, button, a, .jsPanel-controlbar";function dc(e){for(const t of e.composedPath())if(t instanceof HTMLElement&&t.matches(pw))return!0;return!1}const mw={smallify:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 15 12 9 18 15"/></svg>',minimize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="19" x2="19" y2="19"/></svg>',maximize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="14" height="14" rx="1"/></svg>',normalize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="4" width="12" height="12" rx="1"/><rect x="4" y="8" width="12" height="12" rx="1"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>'};let to=100;function hc(){let e=to;for(const t of document.querySelectorAll(".jsPanel")){const n=Number(t.style.zIndex);Number.isFinite(n)&&n>e&&(e=n)}return to=e+1,to}function gw(e){const t=Number(e.style.zIndex);for(const n of document.querySelectorAll(".jsPanel"))if(n!==e&&Number(n.style.zIndex)>t)return!1;return!0}const $o=new Set;function bw(){return[...$o].sort((e,t)=>Number(t.style.zIndex)-Number(e.style.zIndex))}function hn(e,t,n){const r=document.createElement("button");return r.type="button",r.className=`jsPanel-btn jsPanel-btn-${e}`,r.title=t,r.setAttribute("aria-label",t),r.innerHTML=mw[e]??"",r.addEventListener("click",s=>{s.stopPropagation(),n()}),r}function Ms(e){const t=document.createElement("div");t.className="jsPanel",t.id=e.id,t.style.setProperty("--eda-panel-color",e.color??"#01579b");const n=document.createElement("div");n.className="jsPanel-hdr";const r=document.createElement("div");r.className="jsPanel-headerbar";const s=document.createElement("div");s.className="jsPanel-headerlogo",s.innerHTML=e.logo??"";const i=document.createElement("div");i.className="jsPanel-titlebar",i.tabIndex=-1,i.style.outline="none",i.addEventListener("pointerdown",()=>i.focus());const o=document.createElement("span");o.className="jsPanel-title",o.textContent=e.title,i.append(o);const l=document.createElement("div");l.className="jsPanel-controlbar",l.append(hn("smallify","Collapse",()=>ie("smallify")),hn("minimize","Minimize",()=>ie("minimize")),hn("maximize","Maximize",()=>t.maximize()),hn("normalize","Restore",()=>ie("normalize")),hn("close","Close",()=>t.close())),r.append(s,i,l),n.append(r);const u=document.createElement("div");u.className="jsPanel-content",u.append(e.content);const h=document.createElement("div");h.className="jsPanel-ftr",e.footerToolbar&&(h.classList.add("active"),h.append(e.footerToolbar)),t.append(n,u,h);for(const H of["n","s","e","w","ne","nw","se","sw"]){const K=document.createElement("div");K.className="eda-resize",K.dataset.edge=H,t.append(K)}if(t.style.zIndex=String(hc()),e.container.append(t),e.panelSize)t.style.width=`${e.panelSize.w}px`,t.style.height=`${e.panelSize.h}px`;else{const H=e.contentSize??{w:720,h:360};t.style.width=`${H.w}px`,t.style.height=`${H.h+n.offsetHeight+h.offsetHeight}px`}const m=e.position??"center",g=t.offsetWidth,w=e.container.clientWidth;m==="center"?(t.style.left=`${Math.max(0,(w-g)/2)}px`,t.style.top=`${Math.max(0,(e.container.clientHeight-t.offsetHeight)/2)}px`):"centerTopOffset"in m?(t.style.left=`${Math.max(0,(w-g)/2)}px`,t.style.top=`${m.centerTopOffset}px`):(t.style.left=`${m.x}px`,t.style.top=`${m.y}px`);let y=hw(e.boot),$=M(),x=null,A=null,L=null;function M(){return{x:t.offsetLeft,y:t.offsetTop,w:t.offsetWidth,h:t.offsetHeight}}function F(H){t.style.left=`${H.x}px`,t.style.top=`${H.y}px`,t.style.width=`${H.w}px`,t.style.height=`${H.h}px`}function V(){const H=e.viewport?.getState()??{x:0,y:0,scale:1};t.style.left="0px",t.style.top="0px",t.style.width=`${e.container.clientWidth}px`,t.style.height=`${e.container.clientHeight}px`,t.style.transformOrigin="0 0",t.style.transform=`translate(${-H.x/H.scale}px, ${-H.y/H.scale}px) scale(${1/H.scale})`}function Q(){V(),A??=e.viewport?.subscribe(V)??null,!L&&typeof ResizeObserver<"u"&&(L=new ResizeObserver(V),L.observe(e.container))}function ne(){A?.(),A=null,L?.disconnect(),L=null,t.style.transform="",t.style.transformOrigin=""}function B(){const H=document.createElement("div");H.className="jsPanel-replacement",H.id=`${e.id}-min`,H.style.setProperty("--eda-panel-color",e.color??"#01579b");const K=document.createElement("div");K.className="jsPanel-headerlogo",K.innerHTML=s.innerHTML;const ce=document.createElement("span");return ce.className="jsPanel-title",ce.textContent=o.textContent,H.append(K,ce,hn("normalize","Restore",()=>{ie("normalize"),t.front()}),hn("close","Close",()=>t.close())),H.addEventListener("click",pe=>{pe.target.closest("button")||(ie("normalize"),t.front())}),H}function G(H){switch(H==="maximized"&&y.status!=="maximized"&&ne(),H==="minimized"&&y.status!=="minimized"&&(x?.remove(),x=null,t.style.display=""),y.status){case"minimized":{H==="normalized"?$=M():H==="smallified"&&($={...$,x:t.offsetLeft,y:t.offsetTop}),t.style.display="none";const K=e.minimizeTo?document.querySelector(e.minimizeTo):null;x=B(),(K??e.container).append(x);break}case"maximized":H==="normalized"?$=M():H==="smallified"&&($={...$,x:t.offsetLeft,y:t.offsetTop}),Q();break;case"smallified":$=M(),t.style.height=`${n.offsetHeight}px`;break;case"normalized":H==="smallified"&&($={...$,x:t.offsetLeft,y:t.offsetTop}),F($);break}t.dataset.status=y.status}function ie(H){const K=y;y=uc(y,H),y.status!==K.status&&(G(K.status),e.onstatuschange?.(t))}Object.defineProperty(t,"status",{get:()=>y.status}),t.minimize=()=>ie("minimize"),t.maximize=(H,K)=>{ie("maximize"),K!==!0&&t.front()},t.normalize=()=>ie("normalize"),t.smallify=()=>ie("smallify"),t.front=(H,K)=>{t.style.zIndex=String(hc()),K!==!1&&e.onfronted?.()},t.close=()=>{y.status!=="closed"&&(y=uc(y,"close"),x?.remove(),ne(),$o.delete(t),t.remove(),e.onclosed?.())},t.setHeaderTitle=H=>{o.textContent=H;const K=x?.querySelector(".jsPanel-title");K&&(K.textContent=H)},t.setHeaderLogo=H=>{s.innerHTML=H;const K=x?.querySelector(".jsPanel-headerlogo");K&&(K.innerHTML=H)},t.persistFlags=()=>fw(y),$o.add(t),t.addEventListener("pointerdown",()=>{gw(t)||t.front()},!0);const re=H=>{H.addEventListener("pointerdown",K=>{if(K.button!==0||dc(K)||y.status==="maximized"||y.status==="minimized")return;const ce=M(),pe=e.viewport?.getState().scale??1,Te=K.clientX,Ue=K.clientY;let bt=!1;const de=Ae=>{bt=!0;const tt=uw(ce,Ae.clientX-Te,Ae.clientY-Ue,pe);t.style.left=`${tt.x}px`,t.style.top=`${tt.y}px`},Pe=()=>{H.removeEventListener("pointermove",de),H.removeEventListener("pointerup",Pe),H.removeEventListener("pointercancel",Pe),bt&&e.onmoved?.()};H.setPointerCapture(K.pointerId),H.addEventListener("pointermove",de),H.addEventListener("pointerup",Pe),H.addEventListener("pointercancel",Pe)})};re(i),re(s),re(h);for(const H of t.querySelectorAll(".eda-resize"))H.addEventListener("pointerdown",K=>{if(K.button!==0||y.status!=="normalized")return;const ce=H.dataset.edge,pe=M(),Te=e.viewport?.getState().scale??1,Ue=K.clientX,bt=K.clientY;let de=!1;const Pe=tt=>{de=!0,F(dw(pe,ce,tt.clientX-Ue,tt.clientY-bt,Te,yd,vd))},Ae=()=>{H.removeEventListener("pointermove",Pe),H.removeEventListener("pointerup",Ae),H.removeEventListener("pointercancel",Ae),de&&e.onresized?.()};H.setPointerCapture(K.pointerId),H.addEventListener("pointermove",Pe),H.addEventListener("pointerup",Ae),H.addEventListener("pointercancel",Ae)});return n.addEventListener("dblclick",H=>{dc(H)||(y.status==="maximized"?ie("normalize"):t.maximize())}),y.status!=="normalized"?G("normalized"):t.dataset.status="normalized",t}function xs(e){return e.source?e.source.type==="url"?"referenced":"connected":e.origin?"imported":"normal"}function fc(e){return!!(e.source||e.origin)}const gr='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" role="img"',pc={normal:`<svg ${gr} aria-label="Local table"><title>Local table</title><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,imported:`<svg ${gr} aria-label="Imported table (snapshot)"><title>Imported table (snapshot)</title><rect x="3" y="11" width="18" height="10" rx="1"/><line x1="7" y1="15" x2="7" y2="17"/><line x1="12" y1="15" x2="12" y2="17"/><line x1="17" y1="15" x2="17" y2="17"/><path d="M12 2v7"/><polyline points="8 6 12 9 16 6"/></svg>`,referenced:`<svg ${gr} aria-label="Referenced table (read-only)"><title>Referenced table (read-only)</title><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"/></svg>`,connected:`<svg ${gr} aria-label="Connected table (live)"><title>Connected table (live)</title><line x1="9" y1="2" x2="9" y2="7"/><line x1="15" y1="2" x2="15" y2="7"/><rect x="6" y="7" width="12" height="7" rx="2"/><path d="M9 14v3a3 3 0 0 0 6 0v-3"/></svg>`},ww=`<svg ${gr} aria-label="View"><title>View</title><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;var yw=Object.defineProperty,vw=Object.getOwnPropertyDescriptor,ri=(e,t,n,r)=>{for(var s=r>1?void 0:r?vw(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&yw(t,n,s),s};function $w(e,t,n){(Ct.instance??kw()).show(e,t,n)}function xw(e){if(!e)return null;const t=xs(e);if(t==="connected"||t==="referenced"){const n=e.source?.type??"remote",r=e.source?.writable?"Edits you make are written back to the source.":"It is read-only — edits are not saved back to the source.";return{label:`Connected (live ${n})`,note:`This table is connected to a live ${n} backend: its rows are fetched from the source on demand and are not stored locally. ${r} Closing its window just disconnects the view — the source data is untouched.`}}return t==="imported"?{label:"Imported (snapshot)",note:"This table is a local snapshot imported once from its origin. The rows live in this browser, so edits stay local; use Refresh to re-fetch the latest data from the origin.",...e.origin?{url:e.origin.url}:{}}:{label:"Local",note:"This table was created in the app and is stored locally in your browser."}}function kw(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let Ct=class extends ve{constructor(){super(...arguments),this.name="",this.info=null,this.provenance=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),Ct.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ct.instance===this&&(Ct.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e)}show(e,t,n){this.name=e,this.info=t,this.provenance=n??null,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,n){if(!t&&!n)return se;const r=n?C`<a href=${n} target="_blank" rel="noopener noreferrer">${t||n}</a>`:C`${t}`;return C`<dt>${e}</dt>
      <dd>${r}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl),n=xw(this.provenance);return C`
      <dialog @cancel=${this.close} @keydown=${pt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${this.name}</h2>
            <div class="header-actions">
              <button type="submit" class="ghost">Close</button>
            </div>
          </div>
          <div class="dialog-body">
            ${n?C`<div class="kind">
                  <span class="kind-label">${n.label}</span>
                  <p class="kind-note">${n.note}</p>
                  ${n.url?C`<div class="kind-origin">
                        <a href=${n.url} target="_blank" rel="noopener noreferrer"
                          >${n.url}</a
                        >
                      </div>`:se}
                </div>`:se}
            ${e?.descriptionHtml?C`<div class="desc">${On(e.descriptionHtml)}</div>`:e?.description?C`<div class="desc">${e.description}</div>`:se}
            ${t?C`<dl>
                  ${this.row("Source",e?.source,e?.sourceUrl)}
                  ${this.row("License",e?.license,e?.licenseUrl)}
                  ${this.row("About",e?.about,e?.aboutUrl)}
                </dl>`:se}
            ${!e?.description&&!e?.descriptionHtml&&!t&&!n?C`<p class="empty">No additional information.</p>`:se}
          </div>
        </form>
      </dialog>
    `}};Ct.instance=null;Ct.styles=[ft,xe`
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
    `];ri([U()],Ct.prototype,"name",2);ri([U()],Ct.prototype,"info",2);ri([U()],Ct.prototype,"provenance",2);Ct=ri([Se("table-info-dialog")],Ct);const Cw=.25,_w=4;function Sw(e){return Math.min(_w,Math.max(Cw,e))}function mc(e,t,n){return{x:e.x+t,y:e.y+n,scale:e.scale}}const hr={x:0,y:0,scale:1};function gc(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Ew(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function Tw(e,t){let n={...hr};t.style.transformOrigin="0 0";const r=new Set,s=()=>{t.style.transform=`translate(${n.x}px, ${n.y}px) scale(${n.scale})`;for(const K of r)K({...n})};let i="none",o={...hr},l=0,u=0,h=0,m=0,g=0,w=0;const y=(K,ce)=>{const pe=e.getBoundingClientRect();return{x:K-pe.left,y:ce-pe.top}},$=K=>{if(K.touches.length===2){i="pinch",o={...n};const[ce,pe]=[K.touches[0],K.touches[1]];h=gc(ce,pe)||1;const Te=y((ce.clientX+pe.clientX)/2,(ce.clientY+pe.clientY)/2);m=(Te.x-n.x)/n.scale,g=(Te.y-n.y)/n.scale,K.preventDefault();return}if(K.touches.length===1&&!Ew(K.target)){const ce=K.timeStamp;if(ce-w<300){n={...hr},s(),w=0,i="none",K.preventDefault();return}w=ce,i="pan",o={...n},l=K.touches[0].clientX,u=K.touches[0].clientY}else i="none"},x=K=>{if(i==="pan"&&K.touches.length===1){const ce=K.touches[0];n=mc(o,ce.clientX-l,ce.clientY-u),s(),K.preventDefault()}else if(i==="pinch"&&K.touches.length>=2){const[ce,pe]=[K.touches[0],K.touches[1]],Te=Sw(o.scale*(gc(ce,pe)/h)),Ue=y((ce.clientX+pe.clientX)/2,(ce.clientY+pe.clientY)/2);n={x:Ue.x-m*Te,y:Ue.y-g*Te,scale:Te},s(),K.preventDefault()}},A=K=>{K.touches.length===0?i="none":K.touches.length===1&&i==="pinch"&&(i="pan",o={...n},l=K.touches[0].clientX,u=K.touches[0].clientY)};let L=!1,M={...hr},F=0,V=0,Q=!1;const ne=(K,ce)=>{const pe=e.getBoundingClientRect();return K>=pe.left&&K<=pe.right&&ce>=pe.top&&ce<=pe.bottom},B=K=>{if(!L)return;const ce=K.clientX-F,pe=K.clientY-V;!Q&&Math.hypot(ce,pe)<4||(Q=!0,document.body.style.cursor="grabbing",n=mc(M,ce,pe),s(),K.preventDefault())},G=()=>{L&&(L=!1,document.body.style.cursor="",window.removeEventListener("mousemove",B,!0),window.removeEventListener("mouseup",ie,!0))};function ie(){G()}const re=K=>{K.button===2&&ne(K.clientX,K.clientY)&&(L=!0,Q=!1,M={...n},F=K.clientX,V=K.clientY,window.addEventListener("mousemove",B,!0),window.addEventListener("mouseup",ie,!0))},H=K=>{Q&&(K.preventDefault(),Q=!1)};return e.addEventListener("touchstart",$,{passive:!1}),e.addEventListener("touchmove",x,{passive:!1}),e.addEventListener("touchend",A),e.addEventListener("touchcancel",A),window.addEventListener("mousedown",re,!0),window.addEventListener("contextmenu",H,!0),{snapshot:()=>({...n}),reset:()=>{n={...hr},s()},restore:K=>{n={...K},s()},subscribe:K=>(r.add(K),()=>r.delete(K)),dispose:()=>{e.removeEventListener("touchstart",$),e.removeEventListener("touchmove",x),e.removeEventListener("touchend",A),e.removeEventListener("touchcancel",A),window.removeEventListener("mousedown",re,!0),window.removeEventListener("contextmenu",H,!0),G()}}}const bs=new Map;function si(e,t){const r=(bs.get(e)??Promise.resolve()).then(t,t);return bs.set(e,r),r.finally(()=>{bs.get(e)===r&&bs.delete(e)}),r}let no=0;function $d(){return no=Math.max(Date.now(),no+1),no}const ii=new Map;function xd(e,t){ii.set(e,t)}function oi(e){ii.delete(e)}function Iw(e){return ii.has(e)}function Aw(e){try{ii.get(e)?.()}catch{}}const Nn=(()=>{const e=new URLSearchParams(location.search).get("minimize");return e===null?!1:!/^(0|false|no)$/i.test(e)})();function Rw(e){return e.filter(t=>!t.minimized).slice().sort((t,n)=>(t.z??-1/0)-(n.z??-1/0)).map(t=>t.id)}let bc=!1;async function Ow(){bc||(bc=!0,document.addEventListener("easydb:restack-windows",()=>void wc())),await wc()}async function wc(){if(Nn)return;const e=await ae();for(let t=0;t<=12;t++){const[n,r]=await Promise.all([e.store.tables.find(),e.store.viewInstances.find()]),s=[...n.filter(o=>o.workspaceId===e.workspaceId&&!o.windowGeometry?.closed).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0})),...r.filter(o=>o.workspaceId===e.workspaceId&&o.open).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0}))],i=Rw(s);if(t<12&&!i.every(o=>Iw(o))){await new Promise(o=>setTimeout(o,80));continue}for(const o of i)Aw(o);return}}var Dw=Object.defineProperty,Pw=Object.getOwnPropertyDescriptor,jr=(e,t,n,r)=>{for(var s=r>1?void 0:r?Pw(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Dw(t,n,s),s};let vn=class extends ve{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return C`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return C`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};vn.styles=[gt,xe`
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
    `];jr([ht({type:String})],vn.prototype,"tableId",2);jr([U()],vn.prototype,"query",2);jr([U()],vn.prototype,"open",2);jr([Pt("input")],vn.prototype,"inputEl",2);vn=jr([Se("panel-search")],vn);var Lw=Object.defineProperty,Mw=Object.getOwnPropertyDescriptor,qn=(e,t,n,r)=>{for(var s=r>1?void 0:r?Mw(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Lw(t,n,s),s};let Jt=class extends ve{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const n=t?.currentTarget??void 0,r=await ae();try{await Promise.resolve(e.onClick(r.api,{tableId:this.tableId,anchor:n}))}catch(s){console.error(`[table-button:${e.id}]`,s)}}}async connectedCallback(){super.connectedCallback();const e=await ae();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(n=>n.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await ae();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await ae(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const n={};for(const r of t.columns)n[r.field]=jw(r);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:n,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}render(){return C`
      ${this.table?.readonly?se:C`<button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
            <span class="mi sm">add</span>
          </button>`}
      <button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>C`<button
              class=${e.danger?"danger":""}
              title=${e.tooltip??e.label}
              aria-label=${e.label}
              @click=${t=>this.runTableButton(e,t)}
            >
              ${e.icon?e.icon.trimStart().startsWith("<svg")?C`<span class="icon-svg">${Do(e.icon)}</span>`:C`<span class="mi sm">${e.icon}</span>`:C`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Jt.styles=[gt,xe`
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
    `];qn([ht({type:String})],Jt.prototype,"tableId",2);qn([ht({type:Boolean})],Jt.prototype,"active",2);qn([U()],Jt.prototype,"rowCount",2);qn([U()],Jt.prototype,"tableButtons",2);qn([U()],Jt.prototype,"table",2);Jt=qn([Se("panel-footer")],Jt);function jw(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function ro(e){return e.title?.trim()?e.title.trim():e.name}function Nw(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function zw(e){const t=document.querySelector("app-shell")?.shadowRoot,n=t?.querySelector("header"),r=t?.querySelector("footer");n&&(e.style.top=`${n.offsetHeight}px`),r&&(e.style.bottom=`${r.offsetHeight}px`)}const Xt=new Map,kd=new Set;let yc=!1,Cd=null;function js(){return Cd}function Er(){return{getState:()=>js()?.snapshot()??{x:0,y:0,scale:1},subscribe:e=>js()?.subscribe(e)??(()=>{})}}async function _d(){const e=await ae();await Promise.all([...Xt.keys()].map(t=>ks(t,e)))}function Sd(e){const t=Xt.get(e);return t?(t.status==="minimized"&&t.normalize(),t.front(),!0):(Uw(e),!0)}async function Uw(e){const t=await ae(),n=await t.store.tables.findOne(e);n?.windowGeometry?.closed&&await t.store.tables.patch(e,{windowGeometry:{...n.windowGeometry,closed:!1},updatedAt:Date.now()})}async function Ed(e){const t=await ae();await Vw(e,t)}async function Td(){if(yc)return;yc=!0;const e=await ae(),t=document.getElementById("easydb-panels"),n=document.getElementById("easydb-panels-viewport");if(t&&n){Cd=Tw(t,n);const s=()=>zw(t);s(),window.addEventListener("resize",s);const i=document.querySelector("app-shell")?.shadowRoot,o=i?.querySelector("header"),l=i?.querySelector("footer");if(typeof ResizeObserver<"u"&&(o||l)){const u=new ResizeObserver(s);o&&u.observe(o),l&&u.observe(l)}}const r=(await e.store.tables.find()).filter(s=>s.workspaceId===e.workspaceId);r.sort(Ls);for(const s of r)s.windowGeometry?.closed||vc(s,e);e.store.tables.subscribe(s=>{const i=s.filter(u=>u.workspaceId===e.workspaceId),o=new Map(i.map(u=>[u.id,u]));for(const[u,h]of Xt){const m=o.get(u);if(!m||m.windowGeometry?.closed){Xt.delete(u),oi(u),kd.add(u);try{h.status!=="closed"&&h.close()}catch{}}}const l=i.filter(u=>!Xt.has(u.id)&&!u.windowGeometry?.closed).sort(Ls);for(const u of l)vc(u,e)}),Ow()}const Id=720,Ad=360;function vc(e,t){const n=`panel-${Rd(e.id)}`,r=Nw(),s=cw(e.windowGeometry),i=Nn||s?.minimized===!0,o=()=>{const re=document.createElement("data-table");return re.tableId=e.id,re.style.height="100%",re},l=i?document.createElement("div"):o();let u=i?null:l,h=ro(e),m=-1,g=-1;const w=()=>{F.setHeaderTitle(h+Mu(m,g))},y=re=>{const H=re.detail;H.key===e.id&&(m=H.count,g=H.total,w())};document.addEventListener(Os,y);const $=()=>{L.active=!1,u?.remove(),u=null},x=()=>{if(u)return;const re=document.getElementById(n)?.querySelector(".jsPanel-content");if(!re)return;re.replaceChildren();const H=o();re.appendChild(H),u=H,L.active=!0},A=document.createElement("panel-search");A.tableId=e.id;const L=document.createElement("panel-footer");L.tableId=e.id,L.active=!i;const M=async()=>{if(document.removeEventListener(Os,y),Xt.delete(e.id),oi(e.id),kd.delete(e.id))return;const re=await t.store.tables.findOne(e.id);if(!re)return;const H=re.windowGeometry??{x:60,y:60,w:720,h:360,z:1,minimized:!1,maximized:!1};await t.store.tables.patch(e.id,{windowGeometry:{...H,closed:!0},updatedAt:Date.now()})},F=Ms({id:n,container:r,title:h,logo:pc[xs(e)],color:"#01579b",content:l,footerToolbar:L,...s?{panelSize:{w:s.w,h:s.h},position:{x:s.x,y:s.y}}:{contentSize:{w:Id,h:Ad},position:Bw()},minimizeTo:"#easydb-minimized-dock",viewport:Er(),boot:{minimized:i,maximized:!Nn&&s?.maximized===!0},onmoved:()=>void ks(e.id,t),onresized:()=>void ks(e.id,t),onfronted:()=>void Hw(e.id,t),onstatuschange:re=>{re.status==="minimized"?$():(re.status==="normalized"||re.status==="maximized")&&x(),ks(e.id,t)},onclosed:()=>void M()});Xt.set(e.id,F),xd(e.id,()=>F.front(void 0,!1));const V=document.getElementById(n),Q=V?.querySelector(".jsPanel-controlbar");Q&&Q.prepend(A),fc(e)&&V?.classList.add("eda-refreshable");let ne=null;const B=document.createElement("button");B.type="button",B.title="Table info",B.setAttribute("aria-label","Table info"),B.className="eda-info-btn",B.textContent="ⓘ",B.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",B.addEventListener("click",re=>{re.stopPropagation(),ne&&$w(h,ne.info??{},{source:ne.source,origin:ne.origin})}),Q?.prepend(B);const G=re=>{ne=re??null;const H=!!(re?.info||re?.source||re?.origin);B.style.display=H?"inline-flex":"none"};G(e);let ie=xs(e);t.store.tables.subscribe(re=>{const H=re.find(ce=>ce.id===e.id);if(!H)return;G(H),ro(H)!==h&&(h=ro(H),w());const K=xs(H);K!==ie&&(ie=K,F.setHeaderLogo(pc[K]),V?.classList.toggle("eda-refreshable",fc(H)))})}let Fw=0;function Bw(){const e=Fw++;return{x:40+e%8*30,y:80+e%8*30}}function ks(e,t){return si(`table:${e}`,()=>qw(e,t))}async function qw(e,t){const n=document.getElementById(`panel-${Rd(e)}`);if(!n)return;const r=Xt.get(e),s=r?.status??"normalized",i=r?.persistFlags()??{minimized:!1,maximized:!1};try{const l=(await t.store.tables.findOne(e))?.windowGeometry,u=Nn?l?.minimized??!1:i.minimized,h=Nn?l?.maximized??!1:i.maximized;let m=n.offsetLeft,g=n.offsetTop,w=n.offsetWidth,y=n.offsetHeight;(s==="minimized"||s==="maximized")&&(l?(m=l.x,g=l.y,w=l.w,y=l.h):(m=0,g=0,w=Id,y=Ad)),m<=-9e3&&(m=l?.x??40);const x={x:m,y:g,w,h:y,z:l?.z??0,minimized:u,maximized:h};await t.store.tables.patch(e,{windowGeometry:x,updatedAt:Date.now()})}catch{}}function Hw(e,t){return si(`table:${e}`,()=>Kw(e,t))}async function Kw(e,t){try{const n=await t.store.tables.findOne(e);if(!n)return;const r=n.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...r,z:$d()},updatedAt:Date.now()})}catch{}}async function Vw(e,t){if(!(await t.store.tables.findOne(e))?.source){const r=t.store.rows(e),s=await r.find();await r.bulkRemove(s.map(i=>i.id))}await t.store.tables.remove(e)}function Rd(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}const Gw=Object.freeze(Object.defineProperty({__proto__:null,FORCE_MINIMIZED:Nn,currentPanZoom:js,deleteTable:Ed,focusTableWindow:Sd,initWindowManager:Td,persistTablePanelGeometry:_d,shellViewport:Er},Symbol.toStringTag,{value:"Module"})),Ww=/<\/?[a-z][a-z0-9]*(\s[^<>]*)?\/?>|&[a-z][a-z0-9]*;|&#\d+;|&#x[0-9a-f]+;/i;function Od(e){return Ww.test(e)}function Yw(e){return e.replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&apos;|&#39;/gi,"'").replace(/&nbsp;/gi," ").replace(/&#x([0-9a-f]+);/gi,(t,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(t,n)=>String.fromCodePoint(Number(n))).replace(/&amp;/gi,"&")}function Qw(e){if(typeof document<"u"){const t=document.createElement("div");return t.innerHTML=e,t.textContent??""}return Yw(e.replace(/<[^>]*>/g,""))}function Xw(e){return(Od(e)?Qw(e):e).replace(/\s+/g," ").trim()}const $c=640;function xc(){return typeof window>"u"?!1:typeof window.matchMedia=="function"?window.matchMedia(`(max-width: ${$c}px)`).matches:window.innerWidth<=$c}const Jw={id:"html-preview",name:"HTML Preview",type:"cell-renderer",version:"0.3.0",description:`Shows a cell's HTML as a plain-text preview (first N characters); click to edit the raw HTML in a dialog, or use the popup icon to view the full rendered HTML in a window. Apply by setting a column's renderer to "html-preview". For direct in-cell rendering use the "html" renderer instead.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-preview.ts"};let xo=30;async function kc(e){const t=await e.settings.get("html-preview","maxChars");typeof t=="number"&&Number.isFinite(t)&&t>0&&(xo=Math.floor(t))}function Zw(e){customElements.get("html-preview-cell")||customElements.define("html-preview-cell",ey),e.ui.registerCellRenderer("html-preview","html-preview-cell"),e.ui.registerSettings("html-preview","HTML Preview",[{key:"maxChars",label:"Max characters shown",type:"number",default:30,scope:"workspace",description:"HTML-preview cells show the first N characters of the text; use the popup icon on the right to open the full rendered HTML in a window. Applies to cells rendered after the change (reload to refresh all)."}]),kc(e),e.events.on("app:ready",()=>void kc(e))}function Cc(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let _c=0;class ey extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML"}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.render())}get value(){return this._value}set column(t){this._label=t?.label??"HTML"}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const o=document.createElement("span");o.style.cssText="color:#9ca3af;cursor:text",o.textContent="empty",o.title="Click to edit the HTML",o.addEventListener("click",()=>this.openEditor()),this.append(o);return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%";const n=document.createElement("span"),r=Xw(this._value);n.textContent=r.length>xo?r.slice(0,xo)+"…":r,n.title="Click to edit the HTML",n.style.cssText="flex:0 1 auto;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:text",n.addEventListener("click",o=>{o.stopPropagation(),this.openEditor()});const s=document.createElement("span");s.style.cssText="flex:1 1 auto";const i=document.createElement("button");i.type="button",i.title="Open the HTML in a window",i.setAttribute("aria-label","Open the HTML in a window"),i.innerHTML='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>',i.style.cssText="flex:none;display:inline-flex;align-items:center;justify-content:center;padding:1px;background:none;border:0;color:#9ca3af;cursor:pointer;line-height:0",i.addEventListener("mouseenter",()=>i.style.color="#4b5563"),i.addEventListener("mouseleave",()=>i.style.color="#9ca3af"),i.addEventListener("click",o=>{o.stopPropagation(),this.openWindow()}),t.append(n,s,i),this.append(t)}openWindow(){const t=document.createElement("div");if(t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box",Od(this._value))t.innerHTML=this._value;else{const n=document.createElement("pre");n.style.cssText="white-space:pre-wrap;word-break:break-word;margin:0;font-family:ui-monospace, monospace;",n.textContent=this._value,t.append(n)}Ms({id:`easydb-html-popup-${++_c}`,container:Cc(),title:this._label,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:{centerTopOffset:60},boot:{maximized:xc()},minimizeTo:"#easydb-minimized-dock",viewport:Er()})}openEditor(){const t=document.createElement("div");t.style.cssText="display:flex;flex-direction:column;gap:0.5rem;height:100%;box-sizing:border-box;padding:0.5rem";const n=document.createElement("textarea");n.value=this._value,n.style.cssText="flex:1 1 auto;width:100%;box-sizing:border-box;resize:none;font-family:monospace;font-size:0.85rem";const r=document.createElement("div");r.style.cssText="display:flex;justify-content:flex-end;gap:0.5rem;flex:none";const s=document.createElement("button");s.type="button",s.textContent="Cancel",s.style.cssText="padding:0.3rem 0.8rem;cursor:pointer";const i=document.createElement("button");i.type="button",i.textContent="Save",i.style.cssText="padding:0.3rem 0.8rem;cursor:pointer;background:#7c3aed;color:#fff;border:0;border-radius:0.25rem",r.append(s,i),t.append(n,r);const o=Ms({id:`easydb-html-edit-${++_c}`,container:Cc(),title:`Edit ${this._label}`,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:"center",boot:{maximized:xc()},minimizeTo:"#easydb-minimized-dock",viewport:Er()});s.addEventListener("click",()=>o.close()),i.addEventListener("click",()=>{this._value=n.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:n.value},bubbles:!0,composed:!0})),o.close(),this.render()}),n.addEventListener("keydown",l=>{l.key==="Enter"&&(l.ctrlKey||l.metaKey)?(l.preventDefault(),i.click()):l.key==="Escape"&&(l.preventDefault(),o.close())}),setTimeout(()=>n.focus(),0)}}const ty=Object.freeze(Object.defineProperty({__proto__:null,init:Zw,meta:Jw},Symbol.toStringTag,{value:"Module"})),ny={id:"html-render",name:"HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's value directly as HTML (unescaped, in full, no popup). Apply by setting a column's renderer to "html". For a truncated preview use "html-preview".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-render.ts"};function ry(e){customElements.get("html-render-cell")||customElements.define("html-render-cell",sy),e.ui.registerCellRenderer("html","html-render-cell")}class sy extends HTMLElement{constructor(){super(...arguments),this._value="",this.editing=!1}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.editing||this.render())}get value(){return this._value}connectedCallback(){this.editing||this.render()}render(){this.innerHTML="";const t=document.createElement("span");t.style.cssText="display:inline-block;min-width:1ch;cursor:text",t.title="Click to edit",this._value?t.innerHTML=this._value:(t.style.color="#9ca3af",t.textContent="empty"),t.addEventListener("click",()=>this.beginEdit()),this.append(t)}beginEdit(){this.editing=!0,this.innerHTML="";const t=document.createElement("input");t.type="text",t.value=this._value,t.style.cssText="width:100%;box-sizing:border-box";let n=!1;const r=()=>{n||(n=!0,this.editing=!1,this._value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:t.value},bubbles:!0,composed:!0})),this.render())};t.addEventListener("blur",r),t.addEventListener("keydown",s=>{s.key==="Enter"?(s.preventDefault(),t.blur()):s.key==="Escape"&&(s.preventDefault(),n=!0,this.editing=!1,this.render())}),this.append(t),t.focus(),t.select()}}const iy=Object.freeze(Object.defineProperty({__proto__:null,init:ry,meta:ny},Symbol.toStringTag,{value:"Module"})),oy={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function ay(e){customElements.get("cell-link")||customElements.define("cell-link",ly),e.ui.registerCellRenderer("link","cell-link")}class ly extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._editor=null,this._raw=null}set value(t){const n=t==null?"":String(t);this._value!==n&&(this._value=n,this._editing=!1,this.render())}get value(){return this._value}set rawValue(t){const n=t==null?"":String(t);this._raw!==n&&(this._raw=n,this._editing&&this.render())}get rawValue(){return this._raw??this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="",this._editor=null;const t=this._value,n=this._editing?null:cy(t),r=!this._editing&&!n?uy(t):null,s=!this._editing&&!n&&!r?dy(t):null;if(n||r||s){const i=document.createElement("span");i.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const o=document.createElement("a");o.href=n?t:r?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,n&&(o.target="_blank",o.rel="noopener noreferrer"),o.textContent=t,o.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",o.title=n?`Open ${t}`:r?`Email ${t}`:`Call ${t}`;const l=document.createElement("button");l.type="button",l.title="Edit",l.textContent="✎",l.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",l.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),this._editing=!0,this.render()}),i.append(o,l),this.append(i)}else{const i=document.createElement("input");i.type="text",i.value=this.rawValue,i.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",i.addEventListener("change",()=>{this._editor===i&&this.commit(i.value)}),i.addEventListener("keydown",o=>{o.key==="Enter"?(o.preventDefault(),this.commit(i.value)):o.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),i.addEventListener("blur",()=>{this._editor===i&&this.commit(i.value)}),this.append(i),this._editor=i,this._editing&&setTimeout(()=>{i.focus(),i.select()},0)}}commit(t){const n=t!==this.rawValue;this._raw===null?this._value=t:this._raw=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function cy(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function uy(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function dy(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const n=t.replace(/\D/g,"");if(n.length<7||n.length>15)return null;const r=/[ ()\-.]/.test(t),s=t.startsWith("+");return!r&&!s&&n.length<10?null:t}const hy=Object.freeze(Object.defineProperty({__proto__:null,init:ay,meta:oy},Symbol.toStringTag,{value:"Module"})),wr={id:"auto-renderer",name:"Auto Renderer",type:"cell-renderer",version:"0.1.0",description:"After any import, gives columns a renderer based on their values: link for URLs, image for image URLs, html-preview for markup or long text.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 3 8 6.5 4.5 8 8 9.5 9.5 13 11 9.5 14.5 8 11 6.5 9.5 3z"/><path d="M17.5 12 16.75 14 15 14.75 16.75 15.5 17.5 17.5 18.25 15.5 20 14.75 18.25 14 17.5 12z"/><path d="M4 17h9"/><path d="M4 21h6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-renderer.ts"},fy=120,Dd=50,py=/\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)(\?|#|$)/i,my=/<[a-z][a-z0-9-]*(\s[^<>]*)?\/?>/i;function Pd(e){return/^https?:\/\/\S+$/i.test(e)}function gy(e){return/^data:image\//i.test(e)?!0:Pd(e)&&py.test(e)}function Ld(e,t){if(e!=="string")return;const n=[];for(const s of t){if(s==null)continue;const i=typeof s=="string"?s.trim():String(s).trim();i&&n.push(i)}if(n.length===0)return;if(n.every(gy))return"image";if(n.every(Pd))return"link";if(n.some(s=>my.test(s))||n.reduce((s,i)=>s+i.length,0)/n.length>fy)return"html-preview"}function wa(e,t){return t.length===0?[...e]:e.map(n=>{if(n.renderer)return n;const r=Ld(n.type,t.map(s=>s[n.field]));return r?{...n,renderer:r}:n})}function by(e){e.events.on("import:after",({tableId:t})=>{wy(e,t)}),e.ui.registerColumnEditorAction({id:"auto-renderer:guess",label:"Guess renderers",icon:"auto_fix_high",tooltip:"Pick a renderer for each column from what its values look like",async run(t,{columns:n,tableId:r}){if(!r)return t.ui.dialogs.toast("Guessing needs rows to look at — import or add data first.",{kind:"info",title:wr.name}),null;const s=(await t.store.rows(r).find()).slice(0,Dd);if(s.length===0)return t.ui.dialogs.toast("This table has no rows to learn from yet.",{kind:"info",title:wr.name}),null;const i=n.map(({renderer:u,...h})=>h),o=wa(i,s.map(u=>u.data)),l=o.filter((u,h)=>u.renderer!==n[h]?.renderer).length;return t.ui.dialogs.toast(l===0?"No renderer fits these values — columns left as they are.":`Set ${l} renderer${l===1?"":"s"}. Press Save to keep them.`,{kind:l===0?"info":"success",title:wr.name}),o}})}async function wy(e,t){try{const n=await e.store.tables.findOne(t);if(!n||n.columns.length===0||n.columns.every(i=>i.renderer))return;const r=(await e.store.rows(t).find()).slice(0,Dd);if(r.length===0)return;const s=wa(n.columns,r.map(i=>i.data));if(s.every((i,o)=>i.renderer===n.columns[o]?.renderer))return;await e.store.tables.upsert({...n,columns:s,updatedAt:Date.now()})}catch(n){e.events.emit("plugin:error",{url:wr.id,phase:"runtime",error:n})}}const yy=Object.freeze(Object.defineProperty({__proto__:null,inferRenderer:Ld,init:by,meta:wr,withInferredRenderers:wa},Symbol.toStringTag,{value:"Module"})),vy={id:"delete-table",name:"Delete Table",type:"ui",version:"0.1.0",description:"Adds a trash button to each table window that permanently deletes the table and its rows (with confirmation).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/delete-table.ts"};function $y(e){e.ui.registerTableButton({id:"delete-table:delete",label:"Delete",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="#7f1d1d" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',tooltip:"Delete this table permanently",onClick:async(t,n)=>{const r=await t.store.tables.findOne(n.tableId);!r||!await t.ui.dialogs.confirm(r.source?`Delete the live table "${r.name}"? Its data stays on the server — only the local connection is removed.`:`Permanently delete table "${r.name}" and all its rows? This can't be undone.`,"Delete table")||(await Ed(n.tableId),t.ui.dialogs.toast(`Deleted "${r.name}".`,{kind:"success",title:"Delete table"}))}})}const xy=Object.freeze(Object.defineProperty({__proto__:null,init:$y,meta:vy},Symbol.toStringTag,{value:"Module"}));var ky=Object.defineProperty,Cy=Object.getOwnPropertyDescriptor,ya=(e,t,n,r)=>{for(var s=r>1?void 0:r?Cy(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&ky(t,n,s),s};function Md(e,t){return(_t.instance??_y()).open(e,t)}function _y(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let _t=class extends ve{constructor(){super(...arguments),this.rows=[],this.subject="",this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((n,r)=>{const s=this.rows[r],i=s.field.trim(),o=s.label.trim()||i;return{...n,field:i,label:o,hidden:s.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),_t.instance=this}disconnectedCallback(){super.disconnectedCallback(),_t.instance===this&&(_t.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e)}open(e,t){return this.source=e,this.subject=t??"",this.rows=e.map(n=>({field:n.field,label:n.label,hidden:!!n.hidden})),new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((n,r)=>{const s=n.field.trim().toLowerCase();if(s===""){e.add(r);return}(t.get(s)??t.set(s,[]).get(s)).push(r)});for(const n of t.values())if(n.length>1)for(const r of n)e.add(r);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,n){this.rows=this.rows.map((r,s)=>s===e?{...r,[t]:n}:r)}setHidden(e,t){this.rows=this.rows.map((n,r)=>r===e?{...n,hidden:t}:n)}render(){const e=this.invalidIndices(),t=e.size;return C`
      <dialog @cancel=${this.onCancel} @keydown=${pt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish(null)}>
          ×
        </button>
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
                @keydown=${n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),this.toggleAllHidden())}}
              >
                Hide
              </div>
              ${this.rows.map((n,r)=>C`
                  <input
                    class=${e.has(r)?"invalid":""}
                    .value=${n.field}
                    aria-label=${`Column ${r+1} name`}
                    @input=${s=>this.updateRow(r,"field",s.target.value)}
                  />
                  <input
                    .value=${n.label}
                    aria-label=${`Column ${r+1} label`}
                    @input=${s=>this.updateRow(r,"label",s.target.value)}
                  />
                  <div class="hidecell">
                    <input
                      type="checkbox"
                      .checked=${n.hidden}
                      aria-label=${`Hide column ${r+1}`}
                      @change=${s=>this.setHidden(r,s.target.checked)}
                    />
                  </div>
                `)}
            </div>
            <p class="err">
              ${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:se}
            </p>
          </div>
        </form>
      </dialog>
    `}};_t.instance=null;_t.styles=[ft,xe`
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
    `];ya([U()],_t.prototype,"rows",2);ya([U()],_t.prototype,"subject",2);_t=ya([Se("column-names-dialog")],_t);const Sy=Object.freeze(Object.defineProperty({__proto__:null,get ColumnNamesDialog(){return _t},editColumnNames:Md},Symbol.toStringTag,{value:"Module"}));async function Ey(e,t,n){const r=t.origin?.url;if(!r)throw new Error(`"${t.name}" has no source URL to reload from.`);const s={api:e,fetchText:(Q,ne)=>Rr(e,Q,ne??`Reading ${t.name}…`,{maxBytes:null}),panel:{}},i=await n.list(s,{kind:"url",url:r});if(i.length===0)throw new Error(`Nothing to read at ${r} any more.`);const o=i.find(Q=>Q.name===t.name)??(i.length===1?i[0]:void 0);if(!o)throw new Error(`"${t.name}" is no longer one of the tables at ${r}.`);let l=[];const u=[];for await(const Q of n.read(s,o))Q.columns?.length&&(l=Q.columns),u.push(...Q.rows);const{columns:h,newFields:m}=qs(t.columns,l,t.deletedColumns??[]),g=t.origin?.pks??[],w=new Set(l.map(Q=>Q.field)),y=t.columns.map(Q=>Q.field).filter(Q=>!w.has(Q)&&!g.includes(Q)),$=(t.deletedColumns??[]).filter(Q=>w.has(Q)),x=e.store.rows(t.id),A=await x.find(),{data:L,merged:M}=Du({oldRows:A.map(Q=>({data:Q.data})),freshRows:u,pks:g,userAddedFields:y,deletedRemoteFields:$}),F=Date.now();h.length>0&&await e.store.tables.patch(t.id,{columns:h,updatedAt:F}),await x.bulkRemove(A.map(Q=>Q.id));const V=L.map(Q=>({id:Ce(),tableId:t.id,data:Q,updatedAt:F}));return await x.bulkInsert(V),{rowCount:V.length,newFields:m,merged:M}}var Ty=Object.defineProperty,Iy=Object.getOwnPropertyDescriptor,He=(e,t,n,r)=>{for(var s=r>1?void 0:r?Iy(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Ty(t,n,s),s};const Ay="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",Ry="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",Oy='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',Sc=[{label:"Northwind — sample database (JSON dump)",url:Ay,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:Ry,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],Dy={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function Py(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:Oy,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>My(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:n})=>Ly(t,n)})}async function Ly(e,t){const n=await e.store.tables.findOne(t);if(n?.origin?.url)try{const r=await va(n.origin.type);if(!r)throw new Error(`No importer is installed that can read a "${n.origin.type}" source.`);const s=await Ey(e,n,r),i=[];s.newFields.length>0&&i.push(`${s.newFields.length} new column${s.newFields.length===1?"":"s"}`),!s.merged&&s.rowCount>0&&i.push("rows replaced (no primary key to match on)"),e.ui.dialogs.toast(`Refreshed "${n.name}" (${s.rowCount.toLocaleString()} rows)${i.length?` — ${i.join(", ")}`:""}.`,{kind:s.newFields.length>0?"warning":"success",title:"Refresh"})}catch(r){e.ui.dialogs.toast(`Couldn't refresh "${n.name}": ${r.message}`,{kind:"error",title:"Refresh"})}}async function My(e,t="auto"){const r=await(_e.instance??qy()).open({presetKind:t,async listDatabases(x){const A=$t(x);return sa(L=>e.backend.fetch(L),A.base)},async listTables(){const x=e.workspaceId();return(await e.store.tables.find()).filter(A=>A.workspaceId===x&&!A.source).map(A=>({id:A.id,name:A.name})).sort((A,L)=>A.name.localeCompare(L.name))}});if(!r)return;const{url:s,file:i,kind:o,dbChosen:l,editColumns:u,maxRows:h,mode:m,panel:g,target:w}=r,y=i?.name??s,$=u?(x,A)=>Md(x,A):void 0;typeof g.separator=="string"&&g.separator;try{if(o==="sql"){await jy(e,{url:s,file:i,label:y,maxRows:h,mode:m,target:w,panel:g,editHook:$});return}const x=await va(o);if(x){const A=o==="json"?await Ny(e,s,i,h,m):null;if(A?.isDump&&await e.ui.dialogs.confirm(`"${y}" is a workspace dump, not a plain table. Restore it — tables, window layout, views and filters? Choose Cancel to import only its tables as data.`,"Restore workspace")){await Go(e,A.text,y,{maxRows:h,editColumns:$,...i?{}:{originUrl:s}});return}const L=i?i.name:zt(s),M=A?{kind:"text",text:A.text,name:L}:i?{kind:"file",file:i}:{kind:"url",url:s},F=await Hs(e,x,M,{mode:m,target:w,maxRows:h,panel:g,...A&&!i?{origin:{type:x.id,url:s}}:{},...$?{editColumns:V=>$(V)}:{}});x.ownToasts||jd(e,F,y);return}if(m==="reference"&&!i){o==="datasette"?await By(e,s):await Nd(e,s,o);return}await ha(e,s,{skipTablePicker:l,maxRows:h,editColumns:$})}catch(x){e.ui.dialogs.toast(`Could not import ${y}: ${x.message}`,{kind:"error",title:"Import"})}}async function jy(e,t){const{url:n,file:r,label:s,maxRows:i,mode:o,target:l,panel:u,editHook:h}=t;if(o==="reference")throw new Error("A .sql script cannot be referenced live — it is a script to run, not a rows endpoint. Import it as a Copy instead.");const m=r?await r.text():await Rr(e,n,`Reading ${zt(n)}…`,i!=null?{maxBytes:null}:{});if(Zo(m)){const y=await ea(e,m,{maxRows:i,target:l,...h?{editColumns:h}:{}});ta(e,y,s);return}const g=await va("sql");if(!g)throw new Error("The SQL importer is not installed.");const w=await Hs(e,g,{kind:"text",text:m,name:r?r.name:zt(n)},{mode:o,target:l,maxRows:i,panel:u,...r?{}:{origin:{type:g.id,url:n}},...h?{editColumns:y=>h(y)}:{}});jd(e,w,s)}async function Ny(e,t,n,r,s){if(s==="reference")return null;const i=n?await n.text():await Rr(e,t,`Reading ${zt(t)}…`,r!=null?{maxBytes:null}:{});try{return{text:i,isDump:Vo(JSON.parse(i))}}catch{return{text:i,isDump:!1}}}async function va(e){const{registries:t}=await ae();return t.importers.find(n=>n.id===e&&n.supports?.kernel===!0)}function jd(e,t,n){if(t.cancelled&&t.landed.length===0)return;const r=t.landed.reduce((o,l)=>o+l.rowCount,0),s=t.landed.length===1?`"${t.landed[0].tableName}"`:`${t.landed.length} tables from ${n}`;if(t.landed.length>0){const o=t.failed.length>0?` — ${t.failed.length} failed`:"";e.ui.dialogs.toast(`Imported ${s} (${r.toLocaleString()} rows)${o}.`,{kind:t.failed.length>0?"warning":"success",title:"Import"});return}const i=t.failed.map(o=>`${o.name}: ${o.error}`).join("; ");e.ui.dialogs.toast(`Could not import ${n}${i?` — ${i}`:""}.`,{kind:"error",title:"Import"})}function zy(e){const t=JSON.parse(e),n=r=>Array.isArray(r)&&r.every(s=>s!=null&&typeof s=="object"&&!Array.isArray(s));if(n(t))return t;if(t&&typeof t=="object"){const r=t;for(const s of["rows","records","data"])if(n(r[s]))return r[s];for(const s of Object.values(r))if(n(s))return s}return[]}function Uy(e){const t=zy(e).slice(0,50),n=s=>typeof s=="number"?"number":typeof s=="boolean"?"boolean":"string",r=new Map;for(const s of t)for(const[i,o]of Object.entries(s))!r.has(i)&&o!=null?r.set(i,n(o)):r.has(i)||r.set(i,"string");return[...r.entries()].map(([s,i])=>({field:s,label:s,type:i}))}function Fy(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}.json?_size=max`}async function By(e,t){const n=$t(t),s=await ua(l=>e.backend.fetch(l),n,"Reference");if(s===null)return;if(s.length===0)throw new Error("No tables found to reference at that URL.");let i=0;const o=[];for(const l of s)try{await Nd(e,Fy(n.base,l.db,l.table),"json",{nameHint:`${l.db}/${l.table}`,silent:!0}),i++}catch(u){o.push(`${l.table}: ${u.message}`)}e.ui.dialogs.toast(`Referenced ${i} table${i===1?"":"s"}${o.length?` — ${o.length} failed`:""}.`,{kind:o.length?"warning":"success",title:"Reference"})}async function Nd(e,t,n,r={}){const s=e.workspaceId();if(!s)throw new Error("No active workspace.");const i=r.nameHint??zt(t),o=await Rr(e,t,`Reading ${i}…`,{maxBytes:null}),l=n==="csv"?Un(o).columns:Uy(o);if(l.length===0)throw new Error("No columns found in the referenced data.");const u=new Set((await e.store.tables.find()).filter(g=>g.workspaceId===s).map(g=>g.name.toLowerCase()));let h=i;for(let g=2;u.has(h.toLowerCase());g++)h=`${i}-${g}`;const m={id:Ce(),workspaceId:s,name:h,code:Le(h),columns:l,view:"table",source:{type:"url",config:{url:t,format:n}},readonly:!0,updatedAt:Date.now()};await e.store.tables.insert(m),r.silent||e.ui.dialogs.toast(`Referenced ${h} — live, read-only.`,{kind:"success",title:"Reference"})}function qy(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function Hy(e){try{const t=new URL(e),n=t.hostname.toLowerCase(),r=[...t.searchParams.keys()].some(i=>i.startsWith("_")),s=n.includes("datasette")||r;return!r&&/\.(csv|tsv|tab)$/i.test(t.pathname)?"csv":!r&&/\.sql$/i.test(t.pathname)?"sql":!r&&/\.json$/i.test(t.pathname)?"json":s?"datasette":"json"}catch{return"json"}}function Ec(e,t){if(t!=="datasette"||!e)return!1;try{const n=$t(e);return!n.db&&!n.table}catch{return!1}}function Ky(e){return/\.(csv|tsv|tab)$/i.test(e)?"csv":/\.sql$/i.test(e)?"sql":"json"}let _e=class extends ve{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.targetKind="new",this.targetTableId="",this.tables=[],this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.panelEl=null,this.mountedPanel="",this.panelGeneration=0,this.formats=[],this.acceptAttr=".txt",this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const n=this.resolvedKind,r=this.maxRows,s=this.editColumns&&this.mode==="copy",i=this.panelValue(),o=this.supportsTarget?this.target:{kind:"new"},l=this.file?"copy":this.mode;if(this.file){this.finish({url:"",file:this.file,kind:n,editColumns:s,maxRows:r,mode:l,panel:i,target:o});return}const u=n==="datasette"&&!!this.selectedDb&&Ec(t,n),h=u?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:h,kind:n,dbChosen:u,editColumns:s,maxRows:r,mode:l,panel:i,target:o})}}get supportsTarget(){return this.formats.find(e=>e.id===this.resolvedKind)?.kernel===!0}get target(){return this.mode==="reference"||this.targetKind==="new"||!this.targetTableId?{kind:"new"}:{kind:this.targetKind,tableId:this.targetTableId}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?Ky(this.file.name):Hy(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),_e.instance=this}disconnectedCallback(){super.disconnectedCallback(),_e.instance===this&&(_e.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e)}updated(){const e=this.shadowRoot?.querySelector(".panel-slot");if(!e){this.panelEl=null,this.mountedPanel="";return}const t=this.activePanelTag,n=t?`${t}#${this.panelGeneration}`:"";if(n===this.mountedPanel||(e.replaceChildren(),this.panelEl=null,this.mountedPanel=n,!t))return;const r=document.createElement(t);r.addEventListener("change",()=>this.requestUpdate()),e.appendChild(r),this.panelEl=r}get activePanelTag(){return this.formats.find(e=>e.id===this.resolvedKind)?.panel}get activeLabel(){return this.formats.find(e=>e.id===this.resolvedKind)?.label??this.resolvedKind}panelValue(){const e=this.panelEl?.value;return e&&typeof e=="object"?e:{}}async loadFormats(){const{registries:e}=await ae(),t=[...e.importers].sort((s,i)=>(s.order??Number.MAX_SAFE_INTEGER)-(i.order??Number.MAX_SAFE_INTEGER)).map(s=>({id:s.id,label:s.label,panel:s.panel,kernel:s.supports?.kernel})),n=t.some(s=>s.id==="datasette")?t:[...t,{id:"datasette",label:"Datasette (table or instance)"}];this.formats=n;const r=new Set([".txt"]);for(const s of e.importers)for(const i of s.accept??[])r.add(i);this.acceptAttr=[...r].join(",")}open(e){this.targetKind="new",this.targetTableId="",this.tables=[],e?.listTables?.().then(n=>{this.tables=n}),this.url="",this.kind=e?.presetKind??"auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.panelGeneration+=1,this.resetDbList(),this.listDatabases=e?.listDatabases??null;const t=this.loadFormats();return new Promise(n=>{this.resolveFn=n,t.then(()=>this.updateComplete).then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const n=Sc[t];n&&(this.url=n.url,this.kind=n.kind)}onFileChange(e){const n=e.target.files?.[0]??null;this.file=n,n&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!Ec(this.url.trim(),this.resolvedKind)?se:C`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?C`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>C`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:C`<option value="">— not loaded —</option>`}
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
      ${this.dbError?C`<p class="hint error">${this.dbError}</p>`:se}
    `}renderTarget(){if(!this.supportsTarget||this.mode==="reference")return se;const e=this.targetKind!=="new";return C`
      <label>
        Import into
        <div class="row db-row">
          <select
            data-testid="import-target"
            .value=${this.targetKind}
            @change=${t=>{this.targetKind=t.target.value,this.targetKind!=="new"&&!this.targetTableId&&(this.targetTableId=this.tables[0]?.id??"")}}
          >
            <option value="new" ?selected=${this.targetKind==="new"}>A new table</option>
            <option value="append" ?selected=${this.targetKind==="append"}>
              Append to an existing table
            </option>
            <option value="overwrite" ?selected=${this.targetKind==="overwrite"}>
              Replace the rows of an existing table
            </option>
          </select>
          ${e?C`<select
                data-testid="import-target-table"
                .value=${this.targetTableId}
                @change=${t=>{this.targetTableId=t.target.value}}
              >
                ${this.tables.length===0?C`<option value="">— no tables yet —</option>`:this.tables.map(t=>C`<option value=${t.id} ?selected=${t.id===this.targetTableId}>
                          ${t.name}
                        </option>`)}
              </select>`:se}
        </div>
      </label>
      ${e?C`<p class="hint">
            The table keeps its own columns. Values map onto them the way the format requires — a
            CSV by column position, so its header names need not match.
          </p>`:se}
    `}renderPluginBlock(){const e=this.renderDbPicker();return!!!this.activePanelTag&&e===se?se:C`
      <fieldset class="block">
        <legend>${this.activeLabel} options</legend>
        <div class="panel-slot"></div>
        ${e}
      </fieldset>
    `}render(){return C`
      <dialog @cancel=${this.onCancel} @keydown=${pt}>
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
              Import as
              <select
                data-testid="import-format"
                .value=${this.kind}
                @change=${e=>{this.kind=e.target.value,this.resetDbList()}}
              >
                <option value="auto" ?selected=${this.kind==="auto"}>Auto-detect</option>
                ${this.formats.map(e=>C`<option value=${e.id} ?selected=${this.kind===e.id}>${e.label}</option>`)}
              </select>
            </label>

            <fieldset class="block">
              <legend>Source and options</legend>
              <label>
                Sample source
                <select
                  data-testid="import-sample"
                  .value=${String(this.presetIdx)}
                  @change=${e=>this.onPresetChange(e)}
                >
                  <option value="-1" ?selected=${this.presetIdx===-1}>— choose a sample —</option>
                  ${Sc.map((e,t)=>C`<option value=${String(t)} ?selected=${t===this.presetIdx}>
                        ${e.label}
                      </option>`)}
                </select>
              </label>

              <label>
                URL
                <input
                  type="text"
                  autofocus
                  placeholder="https://… (JSON dump, .csv/.tsv file, or Datasette table)"
                  ?disabled=${!!this.file}
                  .value=${this.url}
                  @input=${e=>{this.url=e.target.value,this.presetIdx=-1,this.file=null,this.resetDbList()}}
                />
              </label>

              <label>
                …or upload a file
                <input
                  type="file"
                  accept=${this.acceptAttr}
                  @change=${e=>this.onFileChange(e)}
                />
              </label>
              ${this.file?C`<p class="hint">
                    Importing <strong>${this.file.name}</strong> as
                    ${this.resolvedKind.toUpperCase()}.
                  </p>`:se}

              <label>
                Import mode
                <div class="row mode-row">
                  <label class="check">
                    <input
                      type="radio"
                      name="import-mode"
                      .checked=${this.mode==="copy"}
                      @change=${()=>this.mode="copy"}
                    />
                    Copy — a local, editable, synced snapshot you can refresh
                  </label>
                  <label class="check">
                    <input
                      type="radio"
                      name="import-mode"
                      ?disabled=${!!this.file}
                      .checked=${this.mode==="reference"}
                      @change=${()=>this.mode="reference"}
                    />
                    Reference — live, read-only; rows never stored or synced
                  </label>
                </div>
              </label>
              ${this.file?C`<p class="hint">Uploaded files can only be imported as a Copy.</p>`:se}
              ${this.renderTarget()}

              <label class="check">
                <input
                  type="checkbox"
                  ?disabled=${this.mode==="reference"}
                  .checked=${this.editColumns}
                  @change=${e=>this.editColumns=e.target.checked}
                />
                Edit columns before import (rename / hide / fix duplicate names)
              </label>
              ${this.mode==="reference"?C`<p class="hint">
                    A Reference keeps the source's own schema, so there is nothing to edit.
                  </p>`:se}

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
            </fieldset>

            ${this.renderPluginBlock()}

            <p class="hint">
              Paste any URL or pick a sample above — a JSON dump, a <code>.csv</code> or
              <code>.tsv</code> file, or a Datasette table/database/instance. For a Datasette
              instance root, click <em>List databases</em> to pick one first. Multi-table sources
              let you choose which tables to import; Datasette tables are capped at 10,000 rows
              each.
            </p>
          </div>
        </form>
      </dialog>
      ${se}
    `}};_e.instance=null;_e.styles=[ft,xe`
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
    `];He([U()],_e.prototype,"url",2);He([U()],_e.prototype,"kind",2);He([U()],_e.prototype,"presetIdx",2);He([U()],_e.prototype,"dbList",2);He([U()],_e.prototype,"dbLoading",2);He([U()],_e.prototype,"dbError",2);He([U()],_e.prototype,"selectedDb",2);He([U()],_e.prototype,"editColumns",2);He([U()],_e.prototype,"file",2);He([U()],_e.prototype,"maxRowsInput",2);He([U()],_e.prototype,"mode",2);He([U()],_e.prototype,"targetKind",2);He([U()],_e.prototype,"targetTableId",2);He([U()],_e.prototype,"tables",2);He([U()],_e.prototype,"formats",2);He([U()],_e.prototype,"acceptAttr",2);_e=He([Se("import-dialog")],_e);const Vy=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return _e},init:Py,meta:Dy},Symbol.toStringTag,{value:"Module"})),Gy={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},Wy=6e4;let Tc=null,ko=!1;const so=new Map;function Yy(e){Tc===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(Tc=setInterval(()=>{zd(e)},Wy)))}async function zd(e){if(ko)return;const t=e.workspaceId();if(!t)return;const n=await pd(e);if(n)try{await Qy(e,n,t)}catch(r){console.warn("[auto-sync]",r)}}async function Qy(e,t,n){const r=await Js(e),s=await md(e,n),i=await fetch(`${t}/sync/${encodeURIComponent(n)}`);if(i.status===404){await Ic(e,t,n,r,null);return}if(!i.ok)return;const o=Zs(i.headers.get("ETag")),l=await i.text();if(cc(r)===cc(l)){o&&o!==s&&await yn(e,n,o);return}if(o&&o===s){await Ic(e,t,n,r,s);return}if(!(o&&so.get(n)===o)){ko=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${n}". Pull and replace your local copy?`,"auto-sync")){const h=JSON.parse(l),m=await gd(e,n,h);o&&await yn(e,n,o),so.delete(n),e.ui.dialogs.toast(`Pulled ${m} table${m===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else o&&so.set(n,o)}finally{ko=!1}}}async function Ic(e,t,n,r,s){const i={"Content-Type":"application/json"};s&&(i["If-Match"]=`"${s}"`);const o=await fetch(`${t}/sync/${encodeURIComponent(n)}`,{method:"PUT",headers:i,body:r});if(o.ok){const l=Zs(o.headers.get("ETag"));l&&await yn(e,n,l);return}if(o.status===412){const l=await o.json().catch(()=>({}));l.currentEtag&&await yn(e,n,l.currentEtag)}}const Ud=Object.freeze(Object.defineProperty({__proto__:null,load:Yy,meta:Gy,tick:zd},Symbol.toStringTag,{value:"Module"}));var Xy=Object.defineProperty,Jy=Object.getOwnPropertyDescriptor,Hn=(e,t,n,r)=>{for(var s=r>1?void 0:r?Jy(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Xy(t,n,s),s};function Co(e,t){(lt.instance??Zy()).open(e,t)}function Zy(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function io(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let lt=class extends ve{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),lt.instance=this}disconnectedCallback(){super.disconnectedCallback(),lt.instance===this&&(lt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const n=this.templates.find(r=>r.id===t.editTemplateId);n&&this.editTemplate(n)}else if(t?.editInstanceId){const n=this.instances.find(r=>r.id===t.editInstanceId);n&&await this.editInstance(n)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await ae(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(n=>n.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((n,r)=>n.name.localeCompare(r.name))}async openInstance(e){await(await ae()).store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()}),this.close()}async editInstance(e){const n=await(await ae()).store.viewTemplates.findOne(e.templateId),r=n?sc(n.headerHtml,n.rowHtml,n.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:n?.name??"template",name:e.name,tokens:r,mapping:{...e.mapping},limit:e.limit??0,readonly:e.readonly??!1},this.mode="instance"}async deleteInstance(e){await(await ae()).store.viewInstances.remove(e),await this.refresh()}async copyInstance(e){const t=await ae(),n=this.columns.filter(s=>!s.hidden).map(s=>s.field),r={...e,id:io(),name:`${e.name} copy`,visibleColumns:n,open:!1,windowGeometry:void 0,updatedAt:Date.now()};await t.store.viewInstances.insert(r),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async deleteTemplate(e){const t=await ae();await t.api.ui.dialogs.confirm(e.builtin?`Delete the built-in template "${e.name}"? It will not be seeded again in this workspace. Views already created from it keep working.`:`Delete the template "${e.name}"? Views already created from it keep working.`,e.builtin?"Delete built-in template":"Delete template")&&(await t.store.viewTemplates.remove(e.id),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh())}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await ae(),n=this.templates.find(r=>r.id!==e.id&&r.name.trim().toLowerCase()===e.name.trim().toLowerCase());if(n){await t.api.ui.dialogs.alert(`A template called “${n.name}” already exists. Pick another name.`,"Duplicate template name");return}if(e.id){const r=this.templates.find(s=>s.id===e.id)?.builtin;await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,...r?{builtin:!1}:{},updatedAt:Date.now()})}else await t.store.viewTemplates.insert({id:io(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()});document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=sc(e.headerHtml,e.rowHtml,e.footerHtml),n={};for(const r of t)n[r]=this.autoMap(r);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:n,limit:0,readonly:!1},this.mode="instance"}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),n=this.columns.find(g=>g.field.toLowerCase()===t||(g.label??"").toLowerCase()===t);if(n)return n.field;const r=/^check(\d+)$/i.exec(e);if(r){const g=Number(r[1])-1;return this.columns.filter(y=>y.type==="boolean")[g]?.field??""}if(["done","complete","completed","checked","check","read","active","enabled","starred","flag","ok"].includes(t))return this.firstColumn(g=>g.type==="boolean");const i=this.table?.labelColumn;if(i&&(t==="title"||t==="name"||t==="label"))return i;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(g=>g.type==="date"||g.type==="datetime");const l=["url","link","href","website","homepage","uri","site","web"];if(l.includes(t)){const g=this.firstColumn(w=>w.renderer==="link");return g||this.firstColumn(w=>{const y=w.field.toLowerCase(),$=(w.label??"").toLowerCase();return l.some(x=>y.includes(x)||$.includes(x))})}const u=g=>w=>{const y=w.field.toLowerCase(),$=(w.label??"").toLowerCase();return g.some(x=>y.includes(x)||$.includes(x))},h=["image","img","photo","picture","pic","thumbnail","thumb","avatar","cover","poster","logo","icon"];if(h.includes(t)){const g=this.firstColumn(y=>y.renderer==="image");if(g)return g;const w=this.firstColumn(u(h));return w||this.firstColumn(u(["url","src","href","link"]))}if(["email","mail","e-mail"].includes(t))return this.firstColumn(u(["mail"]));if(["phone","tel","telephone","mobile","cell","cellphone"].includes(t))return this.firstColumn(u(["phone","tel","mobile","cell"]));const m=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(m.includes(t)){const g=this.firstColumn(x=>{if(x.type!=="string")return!1;const A=x.field.toLowerCase(),L=(x.label??"").toLowerCase();return m.some(M=>A.includes(M)||L.includes(M))});if(g)return g;const w=this.columns.filter(x=>x.type==="string"),y=w[0];if(!y)return"";let $=y;for(const x of w)(x.max??0)>($.max??0)&&($=x);return $.field}return""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await ae();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},limit:e.limit>0?e.limit:void 0,readonly:e.readonly,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const n=this.columns.filter(s=>!s.hidden).map(s=>s.field),r={id:io(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:n,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{},...e.readonly?{readonly:!0}:{}};await t.store.viewInstances.insert(r),await this.openInstance(r.id)}renderList(){return C`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>C`<li>
                <span class="name">${e.name}</span>
                <button type="button" class="mini" @click=${()=>this.openInstance(e.id)}>
                  Open
                </button>
                <button type="button" class="mini" @click=${()=>void this.editInstance(e)}>
                  Edit
                </button>
                <button
                  type="button"
                  class="mini"
                  title="Duplicate this view, picking up columns added to the table since"
                  @click=${()=>void this.copyInstance(e)}
                >
                  Copy
                </button>
                <button
                  type="button"
                  class="mini danger"
                  @click=${()=>void this.deleteInstance(e.id)}
                >
                  Delete
                </button>
              </li>`)}
        </ul>
      </div>
      <div class="section">
        <h3>View templates (workspace)</h3>
        <ul class="list">
          ${this.templates.map(e=>C`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?C`<span class="badge">built-in</span>`:se}
                <button type="button" class="mini" @click=${()=>this.useTemplate(e)}>Use</button>
                <button type="button" class="mini" @click=${()=>this.editTemplate(e)}>
                  Edit
                </button>
                <button type="button" class="mini" @click=${()=>this.copyTemplate(e)}>
                  Copy
                </button>
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
          <button type="button" class="mini" @click=${()=>this.newTemplate()}>
            + New template
          </button>
        </div>
        <p class="hint">
          A template's row HTML uses <code>$TOKEN</code> placeholders (e.g. <code>$TITLE</code>).
          Leave row HTML blank to show a read-only columns table with the header/footer HTML around
          it.
        </p>
      </div>
    `}renderTemplate(){const e=this.tDraft,t=n=>r=>{this.tDraft={...e,[n]:r.target.value}};return C`
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
    `}renderInstance(){const e=this.iDraft;return C`
      <label class="field">
        View name
        <input
          type="text"
          .value=${e.name}
          @input=${t=>this.iDraft={...e,name:t.target.value}}
        />
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
      <label class="field-inline">
        <input
          type="checkbox"
          .checked=${e.readonly}
          @change=${t=>this.iDraft={...e,readonly:t.target.checked}}
        />
        Readonly (show values without editors in the table view)
      </label>
      <div class="section">
        <h3>Map placeholders to columns</h3>
        ${e.tokens.length===0?C`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>C`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${n=>this.iDraft={...e,mapping:{...e.mapping,[t]:n.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(n=>C`<option value=${n.field} ?selected=${e.mapping[t]===n.field}>
                          ${n.label||n.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">
        ${e.id?C`Editing name and column mapping. The snapshotted sort, filters and visible columns
            are kept.`:C`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?C`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="submit" class="primary">Save</button>`:this.mode==="instance"?C`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="submit" class="primary">
                ${this.iDraft?.id?"Save":"Create view"}
              </button>`:C`<button type="submit" class="ghost">Close</button>`;return C`
      <dialog @cancel=${this.close} @keydown=${pt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${e}</h2>
            <div class="header-actions">${t}</div>
          </div>
          <div class="dialog-body">
            ${this.mode==="template"?this.renderTemplate():this.mode==="instance"?this.renderInstance():this.renderList()}
          </div>
        </form>
      </dialog>
    `}};lt.instance=null;lt.styles=[ft,xe`
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
        grid-template-columns: 8rem 1fr;
        align-items: center;
        gap: 0.5rem;
      }
      .map-row code {
        font-family: ui-monospace, SFMono-Regular, monospace;
        color: #2563eb;
      }
    `];Hn([U()],lt.prototype,"mode",2);Hn([U()],lt.prototype,"instances",2);Hn([U()],lt.prototype,"templates",2);Hn([U()],lt.prototype,"tDraft",2);Hn([U()],lt.prototype,"iDraft",2);lt=Hn([Se("views-dialog")],lt);const ev={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},tv="grid_view",nv={slug:"rss",name:"RSS Feed",header:'<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>','<div style="display:flex;gap:16px;margin-top:8px;">$input.CHECK1$input.CHECK2</div>',"</div>"].join(""),footer:"</div>"},rv={slug:"todo-list",name:"Todo List",header:'<div style="display:flex;flex-direction:column;gap:6px;padding:12px;max-width:720px;margin:0 auto;">',row:['<div style="display:flex;align-items:center;gap:10px;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;background:#ffffff;">',"$input.DONE",'<span style="flex:1;font-weight:500;color:#111827;">$TITLE</span>','<span style="color:#6b7280;font-size:0.8rem;white-space:nowrap;">$DUE</span>',"</div>"].join(""),footer:"</div>"},sv={slug:"gallery",name:"Gallery",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;padding:12px;">',row:['<figure style="margin:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$LINK" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;color:inherit;">','<img src="$IMAGE" alt="$TITLE" loading="lazy" style="width:100%;height:150px;object-fit:cover;display:block;background:#f3f4f6;" />','<figcaption style="padding:6px 8px;font-size:0.85rem;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">$TITLE</figcaption>',"</a>","</figure>"].join(""),footer:"</div>"},iv={slug:"contact-cards",name:"Contact Cards",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:10px;padding:12px 14px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<div style="font-weight:600;color:#111827;font-size:0.95rem;">$NAME</div>','<a href="mailto:$EMAIL" style="color:#2563eb;text-decoration:none;font-size:0.85rem;word-break:break-all;">$EMAIL</a>','<div style="color:#6b7280;font-size:0.85rem;margin-top:2px;">$PHONE</div>',"</div>"].join(""),footer:"</div>"},ov=[nv,rv,sv,iv];function av(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:tv,tooltip:"Views -- display this table through a template",onClick:(t,{tableId:n})=>Co(n)})}async function lv(e){await uv(e)}function cv(e){let t=5381;const n=`${e.header} ${e.row} ${e.footer}`;for(let r=0;r<n.length;r++)t=(t<<5)+t+n.charCodeAt(r)|0;return(t>>>0).toString(36)}async function uv(e){const t=e.workspaceId();if(!t)return;const n=await e.store.viewTemplates.find({workspaceId:t});for(const r of ov)await dv(e,t,r,n)}async function dv(e,t,n,r){const s=`views:seeded:${n.slug}:${t}`,i=`views:sig:${n.slug}:${t}`,o=cv(n),l=r.find(h=>h.builtin&&h.name===n.name);if(l){(await e.store.settings.findOne(i))?.value!==o&&(await e.store.viewTemplates.patch(l.id,{headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,updatedAt:Date.now()}),await e.store.settings.upsert({name:i,value:o})),await e.store.settings.upsert({name:s,value:!0});return}(await e.store.settings.findOne(s))?.value||(await e.store.viewTemplates.insert({id:hv(),workspaceId:t,name:n.name,headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({name:s,value:!0}),await e.store.settings.upsert({name:i,value:o}))}function hv(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const fv=Object.freeze(Object.defineProperty({__proto__:null,init:av,load:lv,meta:ev},Symbol.toStringTag,{value:"Module"})),pv={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function mv(e){e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,n)=>{const s=Array.from(t.dataTransfer?.files??[]).find(l=>l.name.toLowerCase()==="secrets.txt");if(!s)return!1;const i=await s.text(),o=Object.keys(xr(i)).length;return Bs().trim().length>0&&!await n.ui.dialogs.confirm(`Replace your current secrets with ${o} secret${o===1?"":"s"} from "${s.name}"?`,"Import secrets")||(su(i),n.ui.dialogs.toast(`Imported ${o} secret${o===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const gv=Object.freeze(Object.defineProperty({__proto__:null,init:mv,meta:pv},Symbol.toStringTag,{value:"Module"}));class Yt extends Error{constructor(t="this cell is derived"){super(`Projection is read-only — ${t}. Edit a base-table column, or import a copy.`),this.name="ProjectionReadOnlyError"}}function bv(e){const t=e;return!t||!Array.isArray(t.sources)||!Array.isArray(t.columns)?{version:1,sources:[],columns:[]}:t}function wv(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function yv(e,t){const n=bv(t.source?.config),r=new Set;let s=[],i=!1,o=null;const l=new Map;let u=null,h=!1;function m(M){const F=new Map;for(const Q of M)F.has(Q.name)||F.set(Q.name,Q);const V=new Map;for(const Q of n.sources){const ne=F.get(Q.tableName);ne&&V.set(Q.alias,ne.id)}return V}async function g(){return m(await e.tables.find({workspaceId:t.workspaceId}))}async function w(){const M=await e.tables.find({workspaceId:t.workspaceId});if(Hp(t.id,M))return[];const F=m(M),V={};for(const Q of n.sources){const ne=F.get(Q.alias);if(!ne)return[];V[Q.alias]=await e.rows(ne).find()}return Mp(n,V).map(Q=>({...Q,tableId:t.id}))}async function y(){const M=await w();return s=M,i=!0,M}function $(){return o||(o=(async()=>{try{return await y()}finally{o=null}})(),o)}async function x(){const M=await g(),F=new Set(M.values());for(const[V,Q]of l)F.has(V)||(Q(),l.delete(V));for(const V of F)l.has(V)||l.set(V,e.rows(V).subscribe(A))}function A(){h||(h=!0,queueMicrotask(async()=>{h=!1,await x();const M=i?await y():await $();for(const F of r)F(M)}))}async function L(M,F){const V=Or(n),Q={};let ne=null;for(const[K,ce]of Object.entries(F)){if(!V.has(K))continue;const pe=Gp(n,M,K);pe&&(ne=pe.baseRowId,Q[pe.field]=ce)}if(!ne||Object.keys(Q).length===0)throw new Yt;const B=await g(),G=n.sources[0]?.alias,ie=G?B.get(G):void 0;if(!ie)throw new Yt("the base table is not available");const re=e.rows(ie),H=await re.findOne(ne);if(!H)throw new Yt("the underlying row no longer exists");return await re.patch(ne,{data:{...H.data,...Q},updatedAt:Date.now()}),{id:M,tableId:t.id,data:F,updatedAt:Date.now()}}return{async find(M){const F=i?s:await $();return!M||Object.keys(M).length===0?F:F.filter(V=>wv(V,M))},async findOne(M){return(i?s:await $()).find(V=>V.id===M)??null},async insert(){throw new Yt("rows are derived from other tables")},async bulkInsert(){throw new Yt("rows are derived from other tables")},async upsert(M){return L(M.id,M.data)},async patch(M,F){if(!F.data)throw new Yt("a cell edit must carry row data");return L(M,F.data)},async remove(){throw new Yt("rows are derived from other tables")},async bulkRemove(){throw new Yt("rows are derived from other tables")},subscribe(M){return r.add(M),u||(u=e.tables.subscribe(A)),i?M(s):A(),()=>{if(r.delete(M),r.size===0){u?.(),u=null;for(const F of l.values())F();l.clear(),i=!1}}},async refresh(){await x();const M=await y();for(const F of r)F(M)}}}function vv(e,t){const n=e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")||"col";let r=n,s=2;for(;t.has(r);)r=`${n}_${s++}`;return t.add(r),r}function $v(e){for(let t=0;;t++){const n=String.fromCharCode(97+t%26)+(t>=26?String(Math.floor(t/26)):"");if(!e.some(r=>r.alias===n))return n}}function xv(e,t,n){const r=t.sources.map(l=>{const u=n.find(w=>w.name===l.tableName),h={alias:l.alias,tableId:u?.id??"",tableName:l.tableName,columns:u?.columns??[]},m=l.join?.on??[],g=m[0];return l.join&&g&&(h.join={type:l.join.type,thisField:g.field,otherAlias:g.eqAlias,otherField:g.eqField},m.length>1&&(h.extraOn=m.slice(1))),h}),s=t.columns.map(l=>{const u={include:!0,outField:l.field,label:l.label??l.field};return l.from.kind==="source"?{...u,alias:l.from.alias,field:l.from.field,computed:!1}:{...u,script:l.from.script,computed:!0}}),i=[],o=new Set;r.forEach((l,u)=>{const h=r.slice(0,u).filter(m=>m.tableName===l.tableName).length;for(const m of l.columns){const g=s.filter(w=>!w.computed&&w.alias===l.alias&&w.field===m.field&&!o.has(w));if(g.length>0)for(const w of g)o.add(w),i.push(w);else i.push({include:!1,alias:l.alias,field:m.field,computed:!1,label:h>0?`${m.label} (${l.alias})`:m.label})}});for(const l of s)!l.computed&&!o.has(l)&&i.push(l);for(const l of s)l.computed&&i.push(l);return{name:e,sources:r,columns:i,...t.limit?{limit:t.limit}:{},original:t}}function kv(e,t){const n=$v(e.sources),r=e.sources.length===0,s=e.sources.filter(l=>l.tableName===t.name).length;let i;if(!r){const l=e.sources.flatMap(h=>h.join?[{alias:h.join.otherAlias,field:h.join.otherField},...(h.extraOn??[]).map(m=>({alias:m.eqAlias,field:m.eqField}))]:[]),u=Vp({tableName:t.name,fields:t.columns.map(h=>h.field),pks:t.columns.filter(h=>h.unique).map(h=>h.field)},e.sources.map(h=>({alias:h.alias,tableName:h.tableName,fields:h.columns.map(m=>m.field),pks:h.columns.filter(m=>m.unique).map(m=>m.field)})),l);i={type:"left",thisField:u?.thisField??t.columns[0]?.field??"",otherAlias:u?.otherAlias??e.sources[0]?.alias??"",otherField:u?.otherField??""}}const o={alias:n,tableId:t.id,tableName:t.name,columns:t.columns,...i?{join:i}:{}};return{...e,sources:[...e.sources,o],columns:[...e.columns,...t.columns.map(l=>({include:!0,alias:n,field:l.field,computed:!1,label:s>0?`${l.label} (${n})`:l.label}))]}}function Cv(e,t){const n=new Set([t]);for(let r=!0;r;){r=!1;for(const s of e.sources){if(n.has(s.alias)||!s.join)continue;[s.join.otherAlias,...(s.extraOn??[]).map(o=>o.eqAlias)].some(o=>n.has(o))&&(n.add(s.alias),r=!0)}}return{...e,sources:e.sources.filter(r=>!n.has(r.alias)),columns:e.columns.filter(r=>r.computed||!r.alias||!n.has(r.alias))}}function _v(e){return{...e,columns:[...e.columns,{include:!0,computed:!0,label:"computed",script:`function render(row) {
  return "";
}`}]}}function Sv(e){const t=e.name.trim();if(!t)return{ok:!1,error:"Give the projection a name."};if(e.sources.length===0)return{ok:!1,error:"Add at least one source table."};const n=e.columns.filter(u=>u.include);if(n.length===0)return{ok:!1,error:"Select at least one column."};for(let u=0;u<e.sources.length;u++){const h=e.sources[u];if(!h?.join)continue;if(!h.join.thisField||!h.join.otherField)return{ok:!1,error:`Set both join keys for "${h.tableName}".`};const m=new Set(e.sources.slice(0,u).map(w=>w.alias));if([h.join.otherAlias,...(h.extraOn??[]).map(w=>w.eqAlias)].some(w=>!m.has(w)))return{ok:!1,error:`The join for "${h.tableName}" refers to a table that is no longer part of this projection.`}}const r=new Set(e.sources.map(u=>u.alias)),s=new Set,i=[];for(const u of n){let h;if(u.outField&&!s.has(u.outField)?(h=u.outField,s.add(h)):h=vv(u.computed?"computed":u.field??"col",s),u.computed){i.push({field:h,from:{kind:"script",script:u.script??""}});continue}const m=u.alias,g=u.field;if(!m||!g||!r.has(m))return{ok:!1,error:`Column "${u.label??u.field}" belongs to a table that is no longer part of this projection.`};i.push({field:h,from:{kind:"source",alias:m,field:g}})}const o=e.sources.map(u=>{const h={alias:u.alias,tableName:u.tableName};return u.join&&(h.join={type:u.join.type,on:[{field:u.join.thisField,eqAlias:u.join.otherAlias,eqField:u.join.otherField},...u.extraOn??[]]}),h}),l={...e.original??{},version:1,sources:o,columns:i};return e.limit!=null&&e.limit>0?l.limit=Math.floor(e.limit):delete l.limit,{ok:!0,name:t,spec:l}}var Ev=Object.defineProperty,Tv=Object.getOwnPropertyDescriptor,Kn=(e,t,n,r)=>{for(var s=r>1?void 0:r?Tv(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Ev(t,n,s),s};let ct=class extends ve{constructor(){super(...arguments),this.name="",this.limit="",this.sources=[],this.columns=[],this.error="",this.candidates=[],this.editing=!1,this.originalSpec=null,this.dialogEl=null,this.submit=async e=>{e.preventDefault(),this.error="";const t=this.buildSpec();if(!(!t||!this.onSave)){try{await this.onSave(t.name,t.spec)}catch(n){this.error=n?.message??String(n);return}this.dialogEl?.close()}}}connectedCallback(){super.connectedCallback(),ct.instance=this}disconnectedCallback(){super.disconnectedCallback(),ct.instance===this&&(ct.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e)}open(e){this.candidates=e.candidates,this.onSave=e.onSave,this.error="",this.editing=!!e.initial,this.originalSpec=null,this.name="",this.limit="",this.sources=[],this.columns=[],e.initial?this.loadFrom(e.initial.name,e.initial.spec):e.base&&(this.name=`${e.base.name} view`,this.addCandidateAsSource(e.base)),this.updateComplete.then(()=>this.dialogEl?.showModal())}modelOf(){const e=Number(this.limit);return{name:this.name,sources:this.sources,columns:this.columns,...this.limit.trim()!==""&&Number.isFinite(e)&&e>0?{limit:Math.floor(e)}:{},...this.originalSpec?{original:this.originalSpec}:{}}}applyModel(e){this.name=e.name,this.sources=e.sources,this.columns=e.columns,this.limit=e.limit!=null&&e.limit>0?String(e.limit):""}loadFrom(e,t){this.originalSpec=t,this.applyModel(xv(e,t,this.candidates))}addSource(e){const t=this.candidates.find(n=>n.id===e);t&&this.addCandidateAsSource(t)}addCandidateAsSource(e){this.applyModel(kv(this.modelOf(),e))}removeSource(e){this.applyModel(Cv(this.modelOf(),e))}addComputed(){this.applyModel(_v(this.modelOf()))}patchSource(e,t){this.sources=this.sources.map(n=>n.alias===e&&n.join?{...n,join:{...n.join,...t}}:n)}buildSpec(){const e=Sv(this.modelOf());return e.ok?{name:e.name,spec:e.spec}:(this.error=e.error,null)}aliasesBefore(e){const t=this.sources.findIndex(n=>n.alias===e);return this.sources.slice(0,t)}render(){const e=this.sources[0];return C`
      <dialog @cancel=${()=>this.dialogEl?.close()} @keydown=${pt}>
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
                  ${this.candidates.map(t=>C`<option value=${t.id}>${t.name}</option>`)}
                </select>
                <button
                  type="button"
                  class="ghost sm"
                  @click=${()=>{const t=this.shadowRoot?.getElementById("add-src");t?.value&&this.addSource(t.value)}}
                >
                  ${e?"+ Join table":"+ Base table"}
                </button>
                ${e?C`<span class="hint">A table may be joined more than once.</span>`:se}
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
    `}renderSource(e,t){return C`
      <div class="src">
        <div class="src-head">
          <span class="badge ${t?"base":""}">${t?"Base":"Join"}</span>
          <span class="name">${e.tableName}</span>
          <code class="alias" title="Alias used by the join keys below">${e.alias}</code>
          <span class="spacer"></span>
          ${t?se:C`<button type="button" class="icon-btn" title="Remove this join" aria-label="Remove ${e.tableName}" @click=${()=>this.removeSource(e.alias)}>×</button>`}
        </div>
        ${e.join?C`<div class="join-grid">
              <select .value=${e.join.type} @change=${n=>this.patchSource(e.alias,{type:n.target.value})}>
                <option value="left">LEFT JOIN</option>
                <option value="inner">INNER JOIN</option>
              </select>
              <span class="kw">ON</span>
              <select .value=${e.join.thisField} @change=${n=>this.patchSource(e.alias,{thisField:n.target.value})}>
                ${e.columns.map(n=>C`<option value=${n.field} ?selected=${n.field===e.join?.thisField}>${e.alias}.${n.field}</option>`)}
              </select>
              <span class="kw">=</span>
              <select
                .value=${`${e.join.otherAlias}.${e.join.otherField}`}
                @change=${n=>{const[r,s]=n.target.value.split(".");this.patchSource(e.alias,{otherAlias:r??"",otherField:s??""})}}
              >
                ${this.aliasesBefore(e.alias).flatMap(n=>n.columns.map(r=>C`<option value=${`${n.alias}.${r.field}`} ?selected=${n.alias===e.join?.otherAlias&&r.field===e.join?.otherField}>${n.alias}.${r.field}</option>`))}
              </select>
            </div>`:""}
      </div>
    `}renderSourceColumns(e){const t=this.columns.map((r,s)=>({c:r,i:s})).filter(({c:r})=>!r.computed&&r.alias===e.alias);if(t.length===0)return se;const n=t.every(({c:r})=>r.include);return C`
      <div class="col-group">
        <div class="group-head">
          <code class="alias">${e.alias}</code>
          <span class="group-name">${e.tableName}</span>
          <button
            type="button"
            class="link-btn"
            @click=${()=>{const r=!n,s=new Set(t.map(({i})=>i));this.columns=this.columns.map((i,o)=>s.has(o)?{...i,include:r}:i)}}
          >
            ${n?"none":"all"}
          </button>
        </div>
        <div class="ticks">
          ${t.map(({c:r,i:s})=>C`
              <label class="tick ${r.include?"":"off"}" title=${`${r.alias}.${r.field}`}>
                <input type="checkbox" .checked=${r.include} @change=${i=>this.setColumn(s,{include:i.target.checked})} />
                <span class="tick-name">${r.field}</span>
              </label>
            `)}
        </div>
      </div>
    `}renderComputedColumns(){const e=this.columns.map((t,n)=>({c:t,i:n})).filter(({c:t})=>t.computed);return C`
      <div class="col-group">
        <div class="group-head">
          <span class="chip">computed</span>
          <button type="button" class="link-btn" @click=${()=>this.addComputed()}>+ add</button>
        </div>
        ${e.length===0?C`<span class="hint">None. A computed column derives its value from the row.</span>`:e.map(({c:t,i:n})=>C`
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
                    @click=${()=>{this.columns=this.columns.filter((r,s)=>s!==n)}}
                  >
                    ×
                  </button>
                </div>
              `)}
      </div>
    `}setColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}};ct.instance=null;ct.styles=[ft,xe`
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
    `];Kn([U()],ct.prototype,"name",2);Kn([U()],ct.prototype,"limit",2);Kn([U()],ct.prototype,"sources",2);Kn([U()],ct.prototype,"columns",2);Kn([U()],ct.prototype,"error",2);ct=Kn([Se("projection-dialog")],ct);const Iv={id:"projection",name:"Projection (virtual tables)",type:"source",version:"0.1.0",description:'Virtual tables ("Projections") whose rows are derived live from other tables — database views and JOINs that look and act like tables.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h7v10H4z"/><path d="M13 7h7v10h-7z"/><path d="M11 12h2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/projection.ts"};function Av(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"projection",create:t=>yv(e.store,t)}),e.ui.registerTableButton({id:"projection:new",label:"New Projection",icon:"add_box",tooltip:"Create a virtual table using THIS table as the base (view / JOIN)",onClick:(t,{tableId:n})=>void Ac(t,{baseTableId:n})}),e.ui.registerTableButton({id:"projection:edit",label:"Edit Join",icon:"call_merge",tooltip:"Edit this projection’s sources, joins and which columns it includes",visible:t=>t.source?.type==="projection",onClick:(t,{tableId:n})=>void Ac(t,{editTableId:n})})}async function Rv(e,t,n,r,s){const i=await e.store.tables.find({workspaceId:t}),o=new Map;for(const u of i)o.has(u.name)||o.set(u.name,u);const l={};for(const u of n.sources)l[u.alias]=o.get(u.tableName)?.columns??[];return Su(n,l,r,s)}async function Ac(e,t){const n=e.workspaceId();if(!n)return;const r=await e.store.tables.find({workspaceId:n}),s=l=>({id:l.id,name:l.name,columns:l.columns}),i=ct.instance??Ov();if(t.editTableId){const l=r.find(u=>u.id===t.editTableId)??null;if(!l||l.source?.type!=="projection")return;i.open({candidates:r.filter(u=>u.id!==l.id).map(s),initial:{name:l.name,spec:l.source.config},onSave:Rc(e,n,l)});return}const o=r.find(l=>l.id===t.baseTableId);o&&i.open({base:s(o),candidates:r.map(s),onSave:Rc(e,n,null,o)})}function Rc(e,t,n,r){return async(s,i)=>{const o=await Rv(e,t,i,n?.columns??[],n?.deletedColumns??[]),l=Or(i).size===0,u={type:"projection",config:i};n?await e.store.tables.patch(n.id,{name:s,columns:o,source:u,readonly:l,updatedAt:Date.now()}):await e.store.tables.insert({id:Ce(),workspaceId:t,name:s,code:Le(s),columns:o,view:"table",source:u,readonly:l,...r?Bp(i,r):{},updatedAt:Date.now()})}}function Ov(){const e=document.createElement("projection-dialog");return document.body.appendChild(e),e}const Dv=Object.freeze(Object.defineProperty({__proto__:null,init:Av,meta:Iv},Symbol.toStringTag,{value:"Module"})),Pv={id:"command-palette-button",name:"Command Palette Button",type:"ui",version:"0.1.0",description:"Header “>” button that opens the command palette (also Ctrl/⌘K).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/command-palette-button.ts"};function Lv(e){e.ui.registerHeaderButton({id:"command-palette:open",label:"Commands",icon:"chevron_right",tooltip:"Open the command palette (Ctrl/⌘K)",onClick:()=>e.ui.openCommandPalette()})}const Mv=Object.freeze(Object.defineProperty({__proto__:null,init:Lv,meta:Pv},Symbol.toStringTag,{value:"Module"})),jv=[gv,Ub,ip,Ap,fm,vm,Sg,Fg,Wg,up,wb,nb,Rb,jb,Kb,Qb,ew,sw,lw,ty,iy,hy,yy,xy,Vy,Ud,fv,Dv,Mv];function Nv(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const Fd=jv.map(e=>{const t=Nv(e);return{id:t.id,meta:t,module:e}}),zv=Fd;function _o(e){return`builtin:${e}`}async function Uv(e){const t=[];for(const n of Fd)if(!await Fv(e,n)){t.push(n);try{await n.module.init?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"init",error:r})}}return async()=>{for(const n of t)try{await n.module.load?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"load",error:r})}}}async function Fv(e,t){return t.meta.fixed?!1:yt==="all-optional"?!0:(await e.store.plugins.findOne(_o(t.id)))?.enabled===!1}var Bv=Object.defineProperty,qv=Object.getOwnPropertyDescriptor,xt=(e,t,n,r)=>{for(var s=r>1?void 0:r?qv(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Bv(t,n,s),s};let Ze=class extends ve{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()},this.onInputChange=async e=>{const t=e.target;if(!(t instanceof HTMLInputElement)||!t.classList.contains("eda-input")||!this.instance||this.instance.readonly===!0)return;const n=t.getAttribute("data-eda-row"),r=t.getAttribute("data-eda-field"),s=t.getAttribute("data-eda-type")??"string";if(!n||!r)return;const i=this.allRows.find(u=>u.id===n);if(!i)return;let o;if(s==="boolean")o=t.checked;else if(s==="number"){const u=Number(t.value);o=t.value.trim()===""?null:Number.isNaN(u)?t.value:u}else o=t.value;await(await ae()).store.rows(this.instance.tableId).patch(n,{data:{...i.data,[r]:o},updatedAt:Date.now()})},this.onPillClick=async e=>{const t=e.target;if(!(t instanceof HTMLElement)||!t.classList.contains("eda-filter-pill")||!this.instance)return;const n=t.getAttribute("data-eda-filter-field"),r=t.getAttribute("data-eda-filter-value");if(!n||r==null)return;const s=cb(this.instance.pillFilters?.[n],r),i={...this.instance.pillFilters??{},[n]:s};await(await ae()).store.viewInstances.patch(this.instance.id,{pillFilters:i,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:i},this.recompute()}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await ae(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const n=await e.store.tables.findOne(t.tableId);this.tableColumns=n?.columns??[],n&&t.tableName!==n.name&&e.store.viewInstances.patch(t.id,{tableName:n.name});const r=new Map(this.tableColumns.map(i=>[i.field,i]));this.columns=t.visibleColumns.map(i=>r.get(i)??{field:i,label:i,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(i=>{const o=i.find(l=>l.id===this.viewInstanceId);if(o){if(o.tableId!==this.instance?.tableId){this.instance=o,this.reload();return}this.instance=o,this.recompute()}});const s=e.store.rows(t.tableId);this.rowsUnsub=s.subscribe(i=>{this.allRows=i,this.recompute()}),this.allRows=await s.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;const e=lb(this.allRows,this.tableColumns),t=ld(e,this.instance);let n=t;const r=this.searchQuery.trim(),s=this.globalQuery.trim();r&&(n=Rs(n,r,this.tableColumns)),s&&(n=Rs(n,s,this.tableColumns));const i=this.instance.limit??0;i>0&&n.length>i&&(n=n.slice(0,i)),this.rows=n,this.templateOn&&Lu(this.viewInstanceId,n.length,t.length)}async removePill(e,t){if(!this.instance)return;const n=ub(this.instance.pillFilters?.[e],t),r={...this.instance.pillFilters??{}};n===""?delete r[e]:r[e]=n,await(await ae()).store.viewInstances.patch(this.instance.id,{pillFilters:r,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:r},this.recompute()}async setSortColumn(e){if(!this.instance)return;await(await ae()).store.viewInstances.patch(this.instance.id,{sortColumn:e||void 0,updatedAt:Date.now()}),this.instance={...this.instance,sortColumn:e||void 0},this.recompute()}async toggleSortDir(){if(!this.instance?.sortColumn)return;const e=!(this.instance.sortAsc??!0);await(await ae()).store.viewInstances.patch(this.instance.id,{sortAsc:e,updatedAt:Date.now()}),this.instance={...this.instance,sortAsc:e},this.recompute()}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await ae()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||Co(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&Co(this.instance.tableId,{editInstanceId:this.instance.id})}async deleteView(){if(!this.instance)return;const e=await ae();await e.api.ui.dialogs.confirm(`Delete the view "${this.instance.name}"? The table and its rows stay.`,"Delete view")&&await e.store.viewInstances.remove(this.instance.id)}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,r=t.includes(e)?t.filter(i=>i!==e):[...t,e];if(r.length===0)return;await(await ae()).store.viewInstances.patch(this.instance.id,{visibleColumns:r,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:r}}renderTable(){return this.rows.length===0?C`<div class="vw-empty">No rows.</div>`:C`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>C`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>C`<tr>
                ${this.columns.map(t=>{const n=e.data[t.field],r=n==null?"":String(n);return C`<td title=${r}>${r}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}renderTemplated(){const e=this.template;if(!e)return C`<div class="vw-empty">This view's template is missing.</div>`;if(hb(e.rowHtml)){const t=this.instance?.mapping??{},n=new Map(this.tableColumns.map(o=>[o.field,o])),r=this.instance?.readonly===!0,s=this.rows.map(o=>ob(e.rowHtml,o,t,{columns:n,readonly:r})).join(""),i=(e.headerHtml??"")+s+(e.footerHtml??"");return C`<div class="vw-root">${On(i)}</div>`}return C`<div class="vw-root">
      ${e.headerHtml?.trim()?C`<div class="vw-html">${On(e.headerHtml)}</div>`:se}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?C`<div class="vw-html">${On(e.footerHtml)}</div>`:se}
    </div>`}renderSortBar(){if(!this.instance)return se;const e=this.tableColumns.filter(r=>r.sortable!==!1),t=this.instance.sortColumn??"",n=this.instance.sortAsc??!0;return C`<div class="vw-sortbar">
      <span class="mi" title="Sort">sort</span>
      <select
        aria-label="Sort by"
        @change=${r=>void this.setSortColumn(r.target.value)}
      >
        <option value="" ?selected=${!t}>— unsorted —</option>
        ${e.map(r=>C`<option value=${r.field} ?selected=${t===r.field}>${r.label||r.field}</option>`)}
      </select>
      <button
        aria-label="Toggle sort direction"
        title=${n?"Ascending (click for descending)":"Descending (click for ascending)"}
        ?disabled=${!t}
        @click=${()=>void this.toggleSortDir()}
      >
        <span class="mi">${n?"arrow_upward":"arrow_downward"}</span>
      </button>
    </div>`}renderPillBar(){const e=this.instance?.pillFilters;if(!e)return se;const t=[];for(const[n,r]of Object.entries(e))if(r)for(const s of Dr(r))s.term&&t.push({field:n,value:s.term});return t.length===0?se:C`<div class="vw-pillbar">
      ${t.map(n=>C`<span class="eda-pill-chip">
          <span class="eda-pill-chip-label">${n.field}: ${n.value}</span>
          <button
            type="button"
            class="eda-pill-chip-remove"
            aria-label=${`Remove filter ${n.field}: ${n.value}`}
            title="Remove this filter"
            @click=${()=>void this.removePill(n.field,n.value)}
          >
            ×
          </button>
        </span>`)}
    </div>`}renderFooter(){if(!this.instance)return se;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return C`<div class="vw-footer">
      ${!e&&this.showColsMenu?C`<div class="cols-menu">
            ${this.tableColumns.map(n=>C`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(n.field)}
                    @change=${()=>void this.toggleColumn(n.field)}
                  />${n.label||n.field}</label
                >`)}
          </div>`:se}
      ${e?se:C`<button
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
      ${this.template?C`<button
            class="edit-template"
            aria-label="Edit template"
            title=${`Edit the "${this.template.name}" template`}
            @click=${()=>this.editTemplate()}
          >
            <span class="mi">code</span>
          </button>`:se}
      <button
        class=${e?"":"active"}
        title=${e?"Show as a table (turn the template off)":"Show through the template"}
        aria-label="Toggle template"
        aria-pressed=${e?"false":"true"}
        @click=${()=>void this.toggleTemplate()}
      >
        <span class="mi">table_view</span>
      </button>
      <button
        class="danger"
        aria-label="Delete view"
        title="Delete this view (the table stays)"
        @click=${()=>void this.deleteView()}
      >
        <span class="mi">delete</span>
      </button>
    </div>`}render(){if(!this.loaded)return C`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return C`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const e=this.templateOn,t=e?C`<div class="vw-body scroll" @change=${this.onInputChange} @click=${this.onPillClick}>
          ${this.renderTemplated()}
        </div>`:C`<div class="vw-body grid">
          <data-table
            .tableId=${this.instance?.tableId??""}
            .viewInstanceId=${this.viewInstanceId}
          ></data-table>
        </div>`;return C`${e?this.renderSortBar():se}${this.renderPillBar()}${t}${this.renderFooter()}`}};Ze.styles=[gt,xe`
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
      /* Active pill-filter bar, pinned to the top of the view. */
      .vw-pillbar {
        flex: 0 0 auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.35rem;
        padding: 0.3rem 0.5rem;
        border-bottom: 1px solid #e5e7eb;
        background: #f0f9ff;
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
      /* Sort toolbar pinned to the top of a template view. */
      .vw-sortbar {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        gap: 0.4rem;
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
    `];xt([ht({type:String})],Ze.prototype,"viewInstanceId",2);xt([U()],Ze.prototype,"loaded",2);xt([U()],Ze.prototype,"error",2);xt([U()],Ze.prototype,"instance",2);xt([U()],Ze.prototype,"template",2);xt([U()],Ze.prototype,"columns",2);xt([U()],Ze.prototype,"tableColumns",2);xt([U()],Ze.prototype,"rows",2);xt([U()],Ze.prototype,"showColsMenu",2);xt([U()],Ze.prototype,"searchQuery",2);xt([U()],Ze.prototype,"globalQuery",2);Ze=xt([Se("view-window")],Ze);const st=new Map;async function Hv(){await Promise.all([...st.keys()].map(e=>Cs(e)))}function Kv(e){const t=st.get(e);if(!t)return!1;const n=t.panel;return n.status==="minimized"&&n.normalize(),n.front(),!0}let Oc=!1;function So(e){e.panel.setHeaderTitle(e.name+Mu(e.count,e.total))}function Vv(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Gv(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Bd(e){return`view-panel-${Gv(e)}`}async function Wv(){if(Oc)return;Oc=!0;const e=await ae(),t=r=>r.filter(s=>s.workspaceId===e.workspaceId&&s.open),n=t(await e.store.viewInstances.find()).sort(Ls);for(const r of n)Dc(r,e);e.store.viewInstances.subscribe(r=>{const s=new Map(t(r).map(o=>[o.id,o]));for(const o of[...st.keys()])s.has(o)||Qv(o);const i=[...s.values()].filter(o=>!st.has(o.id)).sort(Ls);for(const o of i)Dc(o,e)}),e.store.tables.subscribe(r=>void Yv(e,r)),document.addEventListener(Os,r=>{const s=r.detail,i=st.get(s.key);i&&i.el&&(i.count=s.count,i.total=s.total,So(i))}),document.addEventListener("easydb:reload-view",r=>{const s=r.detail?.instanceId;if(!s)return;const i=st.get(s);i&&(async()=>{const o=await e.store.viewInstances.findOne(s);o&&(i.name=o.name,So(i)),i.el?.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of st.values())r?.reload()})}async function Yv(e,t){const n=t.filter(o=>o.workspaceId===e.workspaceId),r=new Set(n.map(o=>o.id)),s=new Map;for(const o of n)s.has(o.name)||s.set(o.name,o);const i=await e.store.viewInstances.find();for(const o of i){if(o.workspaceId!==e.workspaceId||r.has(o.tableId)||!o.tableName)continue;const l=s.get(o.tableName);l&&await e.store.viewInstances.patch(o.id,{tableId:l.id,updatedAt:Date.now()})}}function Dc(e,t){if(st.has(e.id))return;const n=Bd(e.id),r=e.windowGeometry,s=r?.minimized===!0,i=()=>{const y=document.createElement("view-window");return y.viewInstanceId=e.id,y.style.height="100%",y},o=s?document.createElement("div"):i();let l;const u=()=>{l&&(l.el?.remove(),l.el=null,l.count=-1,l.total=-1,So(l))},h=()=>{if(!l||l.el)return;const y=document.getElementById(n)?.querySelector(".jsPanel-content");if(!y)return;y.replaceChildren();const $=i();y.appendChild($),l.el=$},m=Ms({id:n,container:Vv(),title:e.name,logo:ww,color:"#0891b2",content:o,...r?{panelSize:{w:r.w,h:r.h},position:{x:r.x,y:r.y}}:{contentSize:{w:480,h:520},position:{centerTopOffset:60}},minimizeTo:"#easydb-minimized-dock",viewport:Er(),boot:{minimized:r?.minimized===!0,maximized:r?.maximized===!0},onmoved:()=>void Cs(e.id),onresized:()=>void Cs(e.id),onfronted:()=>void Xv(e.id,t),onstatuschange:y=>{y.status==="minimized"?u():(y.status==="normalized"||y.status==="maximized")&&h(),Cs(e.id)},onclosed:()=>{st.delete(e.id),oi(e.id),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});l={panel:m,el:s?null:o,name:e.name,count:-1,total:-1},st.set(e.id,l),xd(e.id,()=>m.front(void 0,!1));const g=document.getElementById(n),w=document.createElement("panel-search");w.tableId=e.id,g?.querySelector(".jsPanel-controlbar")?.prepend(w)}function Qv(e){const t=st.get(e);if(t){st.delete(e),oi(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}function Xv(e,t){return si(`view:${e}`,()=>Jv(e,t))}async function Jv(e,t){try{const n=await t.store.viewInstances.findOne(e);if(!n)return;const r=n.windowGeometry??{x:0,y:0,w:480,h:520,z:0,minimized:!1,maximized:!1};await t.store.viewInstances.patch(e,{windowGeometry:{...r,z:$d()},updatedAt:Date.now()})}catch{}}function Cs(e){return si(`view:${e}`,()=>Zv(e))}async function Zv(e){const t=document.getElementById(Bd(e)),n=st.get(e);if(!t||!n)return;const{minimized:r,maximized:s}=n.panel.persistFlags();try{const i=await ae(),o=(await i.store.viewInstances.findOne(e))?.windowGeometry;let l=t.offsetLeft,u=t.offsetTop,h=t.offsetWidth,m=t.offsetHeight;(r||s)&&o&&(l=o.x,u=o.y,h=o.w,m=o.h),l<=-9e3&&(l=o?.x??40);const g={x:l,y:u,w:h,h:m,z:o?.z??0,minimized:r,maximized:s};await i.store.viewInstances.patch(e,{windowGeometry:g,updatedAt:Date.now()})}catch{}}function qd(e){return e.filter(t=>t.status!=="minimized")}function e0(e,t,n){if(e<=0)return[];const r=Math.ceil(Math.sqrt(e)),s=Math.ceil(e/r),i=(t.w-n*(r+1))/r,o=(t.h-n*(s+1))/s;return Array.from({length:e},(l,u)=>{const h=u%r,m=Math.floor(u/r);return{x:t.x+n+h*(i+n),y:t.y+n+m*(o+n),w:i,h:o}})}function Vn(){return bw()}function t0(){for(const e of Vn())e.close?.()}function n0(){for(const e of Vn())e.minimize?.()}function r0(){for(const e of Vn())e.normalize?.()}function s0(){for(const e of Vn())e.maximize?.()}function Hd(){const e=document.getElementById("easydb-panels"),t=e?.clientWidth??window.innerWidth,n=e?.clientHeight??window.innerHeight,r=js()?.snapshot(),s=r?.scale&&r.scale>0?r.scale:1,i=r?.x??0,o=r?.y??0;return{x:-i/s,y:-o/s,w:t/s,h:n/s}}function Kd(e,t,n,r,s){e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(n)}px`,e.style.width=`${Math.round(r)}px`,e.style.height=`${Math.round(s)}px`}function i0(){const e=qd(Vn()).reverse();if(e.length===0)return;const t=Hd(),n=32,r=Math.min(680,Math.max(320,t.w*.6)),s=Math.min(480,Math.max(240,t.h*.6));e.forEach((i,o)=>{i.normalize?.(),Kd(i,t.x+24+o*n,t.y+24+o*n,r,s)}),Vd()}function Vd(){_d(),Hv()}function o0(){const e=qd(Vn()).reverse();if(e.length===0)return;const n=e0(e.length,Hd(),8);e.forEach((r,s)=>{r.normalize?.();const i=n[s];i&&Kd(r,i.x,i.y,i.w,i.h)}),Vd()}function a0(e){const t=[{id:"windows:minimize-all",title:"Minimize all windows",icon:"remove",run:n0},{id:"windows:restore-all",title:"Restore all windows",icon:"crop_square",run:r0},{id:"windows:maximize-all",title:"Maximize all windows",icon:"fullscreen",run:s0},{id:"windows:cascade",title:"Cascade windows",icon:"view_agenda",run:i0},{id:"windows:tile",title:"Tile windows",icon:"grid_view",run:o0},{id:"windows:close-all",title:"Close all windows",icon:"close",run:t0}];for(const s of t)e.ui.registerCommand({id:s.id,title:s.title,group:"Windows",icon:s.icon,run:s.run});const n="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md",r="https://github.com/cawoodm/easydbaccess/tree/main/docs";e.ui.registerCommand({id:"app:search",title:"Search all tables",group:"App",icon:"search",keywords:["find","global search","filter"],run:()=>{document.dispatchEvent(new CustomEvent("easydb:focus-search"))}}),e.ui.registerCommand({id:"app:plugins",title:"Plugins",group:"App",icon:"extension",keywords:["plugin manager","install","extensions"],run:s=>s.ui.openPluginManager()}),e.ui.registerCommand({id:"app:changelog",title:"Changelog",group:"App",icon:"history",keywords:["releases","version","whats new"],run:()=>{window.open(n,"_blank","noopener")}}),e.ui.registerCommand({id:"app:docs",title:"Documentation",group:"App",icon:"menu_book",keywords:["docs","help","guide","manual"],run:()=>{window.open(r,"_blank","noopener")}})}async function l0(e){if(yt==="url-plugins"||yt==="all-optional")return async()=>{};const t=e.workspaceId();if(!t)return async()=>{};const r=(await e.store.workspaces.findOne(t))?.pluginUrls??[],s=[];for(const i of r)try{const o=await e.store.plugins.findOne(i);if(o&&o.enabled===!1)continue;let l=o?.cachedBody??"";if(l)c0(e,i,l);else{try{l=await Gd(i)}catch(m){await e.store.plugins.upsert({url:i,enabled:o?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${m.message}`}),e.events.emit("plugin:error",{url:i,phase:"fetch",error:m});continue}await e.store.plugins.upsert({url:i,enabled:!0,lastFetched:Date.now(),cachedBody:l})}const u=new Blob([l],{type:"text/javascript"}),h=URL.createObjectURL(u);try{const m=await import(h);await m.init?.(e),s.push({url:i,mod:m})}finally{setTimeout(()=>URL.revokeObjectURL(h),5e3)}}catch(o){await e.store.plugins.upsert({url:i,enabled:!0,lastFetched:Date.now(),lastError:`init: ${o.message}`}),e.events.emit("plugin:error",{url:i,phase:"init",error:o})}return async()=>{for(const{url:i,mod:o}of s)try{await o.load?.(e)}catch(l){await e.store.plugins.upsert({url:i,enabled:!0,lastFetched:Date.now(),lastError:`load: ${l.message}`}),e.events.emit("plugin:error",{url:i,phase:"load",error:l})}}}async function Gd(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const n=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(n))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return n}function c0(e,t,n){return(async()=>{try{const r=await Gd(t);if(r===n)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:r})}catch{}})()}let oo=null;function ae(){return oo||(oo=u0()),oo}async function u0(){const e=await eu();let t="";const n=yf(e,()=>t),r=$f(),s=Tf(),i=new Map;n.tables.subscribe(A=>{i.clear();for(const L of A)i.set(L.id,L)});const o={...n.tables,insert:A=>(i.set(A.id,A),n.tables.insert(A)),upsert:A=>(i.set(A.id,A),n.tables.upsert(A))};let l=null;const u={get backend(){if(!l)throw new Error("[host] row-source ctx used before app init completed");return l.backend},events:r,settings:n.settings,workspaceId:()=>w},h=vf({base:{...n,tables:o},providers:s.rowSources,tableById:A=>i.get(A),ctx:u}),m=d0(),g=await h.workspaces.find();let w;if(m){const A=Yd(m),L=g.find(M=>M.id===A||M.name===m);L?w=L.id:w=(await h.workspaces.insert({id:A,name:m,createdAt:Date.now(),pluginUrls:[]})).id}else{const A=h0(),L=A?g.find(M=>M.id===A):void 0;L?w=L.id:g.length>0?w=g[0].id:w=(await h.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}t=w,f0(w);const y=Df({store:h,events:r,registries:s,workspaceId:()=>w});l=y,a0(y),r.on("import:after",({source:A,tableId:L,rowCount:M})=>{A!=="datasette"&&y.store.tables.findOne(L).then(F=>{y.ui.dialogs.toast(`Imported ${M} row${M===1?"":"s"} into "${F?.name??L}".`,{kind:"success",title:A.toUpperCase()+" import"})})}),r.on("plugin:error",({url:A,phase:L,error:M})=>{y.ui.dialogs.toast(`[${L}] ${M?.message??String(M)}`,{kind:"error",title:`Plugin: ${A}`})});const $=await Uv(y),x=await l0(y);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:w}),await $(),await x(),yt==="all-optional"?y.ui.dialogs.toast("Safe mode is ON: only fixed built-ins (Settings, core rendering) loaded. All other built-in plugins and URL-installed plugins are disabled for this session only — nothing was changed. Disable the culprit below, then reload without ?safemode.",{kind:"warning",title:"Safe mode"}):yt==="url-plugins"&&y.ui.dialogs.toast("Safe mode (URL plugins) is ON: URL-installed plugins were not loaded this session. Built-in plugins are unaffected. Reload without ?safemode1 to restore them.",{kind:"warning",title:"Safe mode"}),yt!=="off"&&y.ui.openPluginManager()}),globalThis.api=y,{store:h,events:r,workspaceId:w,registries:s,api:y}}function d0(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const Wd="eda:lastWorkspaceId";function h0(){try{return globalThis.localStorage?.getItem(Wd)??null}catch{return null}}function f0(e){try{globalThis.localStorage?.setItem(Wd,e)}catch{}}function Yd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var p0=Object.defineProperty,m0=Object.getOwnPropertyDescriptor,ai=(e,t,n,r)=>{for(var s=r>1?void 0:r?m0(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&p0(t,n,s),s};let zn=class extends ve{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let n;try{n=Un(this.text)}catch(o){this.errorMsg=`Couldn't parse the CSV: ${o.message}`;return}if(n.columns.length===0||n.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const r=await ae(),s=crypto.randomUUID();await r.store.tables.insert({id:s,workspaceId:r.workspaceId,name:t,code:Le(t),columns:n.columns,view:"table",updatedAt:Date.now()});const i=n.rows.map(o=>({id:crypto.randomUUID(),tableId:s,data:o,updatedAt:Date.now()}));await r.store.rows(s).bulkInsert(i),r.api.ui.dialogs.toast(`Imported ${n.rows.length} row${n.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return C`
      <dialog @cancel=${this.close} @keydown=${pt}>
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
            ${this.errorMsg?C`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};zn.styles=[ft,xe`
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
    `];ai([U()],zn.prototype,"name",2);ai([U()],zn.prototype,"text",2);ai([U()],zn.prototype,"errorMsg",2);zn=ai([Se("csv-paste-dialog")],zn);const $a=new Set;let Pc=!1;function g0(){return $a.size>0}function b0(e){$a.add(e),y0()}function w0(e){$a.delete(e)}function Qd(e,t){const n=()=>{t.open&&b0(e)};t.addEventListener("input",n),t.addEventListener("change",n),t.addEventListener("close",()=>w0(e))}function y0(){Pc||(Pc=!0,window.addEventListener("beforeunload",e=>{g0()&&(e.preventDefault(),e.returnValue="")}))}var v0=Object.defineProperty,$0=Object.getOwnPropertyDescriptor,xa=(e,t,n,r)=>{for(var s=r>1?void 0:r?$0(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&v0(t,n,s),s};const x0=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return the value this column should display.
  return row.name ?? '';
}
`;let Ot=class extends ve{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),Ot.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ot.instance===this&&(Ot.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:x0,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(n=>{this.resolver=n})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return C`
      <dialog @cancel=${this.onCancel} @keydown=${pt}>
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
              Define <code>function render(row) { … }</code>. <code>row</code> is the full row
              object. What you return is passed to the column's renderer, so the cell shows a
              computed value instead of the stored one — and the cell becomes read-only. A script
              that throws shows a small error chip in the cell.
            </p>
            <p class="hint">
              Besides the JS globals you can call <code>markdownToHtml(text)</code> (also
              <code>easydb.markdownToHtml</code>) — set this column's renderer to
              <code>html</code> so the result shows as formatted text rather than as its own
              source.
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
    `}};Ot.instance=null;Ot.styles=[ft,xe`
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
    `];xa([U()],Ot.prototype,"text",2);xa([U()],Ot.prototype,"columnLabel",2);Ot=xa([Se("script-editor-dialog")],Ot);function Lc(e){const t={...e.orig??{},field:e.field.trim(),label:e.label.trim()||e.field.trim(),type:e.type};return e.renderer?t.renderer=e.renderer:delete t.renderer,e.script?t.script=e.script:delete t.script,e.max!=null&&e.max>0?t.max=e.max:delete t.max,e.unique?t.unique=!0:delete t.unique,e.notnull?t.notnull=!0:delete t.notnull,e.hidden?t.hidden=!0:delete t.hidden,e.sortable===!1?t.sortable=!1:delete t.sortable,e.filterable===!1?t.filterable=!1:delete t.filterable,t}function Xd(e){if(e.source?.type!=="projection")return null;const t=e.source.config;return t&&Array.isArray(t.sources)?t:null}function k0(e,t,n,r){return{projections:t.filter(i=>{if(i.id===r)return!1;const o=Xd(i);return!!o&&o.sources.some(l=>l.tableName===e)}),views:n.filter(i=>i.tableName===e)}}function C0(e,t,n){return e.sources.some(r=>r.tableName===t)?{...e,sources:e.sources.map(r=>r.tableName===t?{...r,tableName:n}:r)}:null}function _0(e){const t=[];return e.projections.length>0&&t.push(`${Mc(e.projections.length,"projection")} (${jc(e.projections.map(n=>n.name))})`),e.views.length>0&&t.push(`${Mc(e.views.length,"view")} (${jc(e.views.map(n=>n.name||"untitled"))})`),t.length>0?t.join(" and "):null}function Mc(e,t){return`${e} ${t}${e===1?"":"s"}`}function jc(e){const t=e.slice(0,3).map(n=>`"${n}"`);return e.length>3?`${t.join(", ")} and ${e.length-3} more`:t.join(", ")}var S0=Object.defineProperty,E0=Object.getOwnPropertyDescriptor,Qe=(e,t,n,r)=>{for(var s=r>1?void 0:r?E0(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&S0(t,n,s),s};const T0=["string","number","boolean","date","datetime"];async function I0(e,t,n,r){const s=await ae(),i=(await s.store.viewInstances.find()).filter(o=>o.tableId===e||o.tableName===t);for(const o of i)o.tableName!==n&&await s.store.viewInstances.patch(o.id,{tableName:n,updatedAt:Date.now()});for(const o of r?.projections??[]){const l=Xd(o),u=l&&C0(l,t,n);u&&await s.store.tables.patch(o.id,{source:{type:"projection",config:u},updatedAt:Date.now()})}}function A0(e,t,n){const r=`Renaming "${e}" to "${t}" affects ${n}.

They reference this table by name, so they will be updated to point at "${t}". Continue?`,s=it.instance;return s?s.confirm(r,"Rename table"):Promise.resolve(window.confirm(r))}let Be=class extends ve{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.columnActions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e),this.dialogEl&&Qd("columns-editor",this.dialogEl)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const n=await ae();if(this.rendererOptions=[...n.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.columnActions=[...n.registries.columnEditorActions],this.rendererSubUnsub=n.events.on("app:ready",()=>{this.rendererOptions=[...n.registries.cellRenderers.keys()].sort(),this.columnActions=[...n.registries.columnEditorActions]}),e){const r=await ae(),s=await r.store.tables.findOne(e);if(!s)return;this.mode="edit",this.editTableId=e,this.name=s.name,this.tableTitle=s.title??"",this.tableReadonly=!!s.readonly,this.columns=s.columns.map(o=>({field:o.field,label:o.label,type:o.type,renderer:o.renderer,script:o.script,max:o.max,unique:o.unique,notnull:o.notnull,hidden:o.hidden,sortable:o.sortable,filterable:o.filterable,origField:o.field,orig:o}));const i=await r.store.rows(e).find();this.previewRows=i.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,n)=>n!==e)}moveColumn(e,t){const n=e+t;if(n<0||n>=this.columns.length)return;const r=[...this.columns],[s]=r.splice(e,1);r.splice(n,0,s),this.columns=r}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,n){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const r=n.getBoundingClientRect(),s=e.clientY<r.top+r.height/2;this.dropTargetIdx=t,this.dropEdge=s?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const n=this.dragSrcIdx,r=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,n===null||n===t||!r)return;const s=[...this.columns],[i]=s.splice(n,1);let o=t+(n<t?-1:0);r==="after"&&(o+=1),s.splice(o,0,i),this.columns=s}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}async runColumnAction(e){this.errorMsg="";const t=await ae();try{const n=await e.run(t.api,{columns:this.columns.map(s=>Lc(s)),...this.editTableId?{tableId:this.editTableId}:{}});if(!n)return;const r=new Map(n.map(s=>[s.field,s]));this.columns=this.columns.map(s=>{const i=r.get(s.field);return i?{...s,label:i.label??s.label,type:i.type??s.type,renderer:i.renderer,script:i.script}:s})}catch(n){this.errorMsg=`${e.label} failed: ${n.message}`}}async editScript(e){const t=Ot.instance;if(!t)return;const n=this.columns[e];if(!n)return;const r=await t.open(n.script??"",n.label||n.field);r!==null&&this.patchColumn(e,{script:r.trim()?r:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const n=await ae(),r=(await n.store.tables.find()).filter(h=>h.workspaceId===n.workspaceId),s=t.toLowerCase(),i=r.find(h=>h.name.toLowerCase()===s&&h.id!==this.editTableId);if(i){this.errorMsg=`A table named "${i.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const o=new Set;for(const h of this.columns){const m=h.field.trim();if(!m){this.errorMsg="Column field names cannot be empty.";return}if(o.has(m)){this.errorMsg=`Duplicate column field: ${m}`;return}o.add(m)}const l=this.tableTitle.trim(),u=this.columns.map(Lc);if(this.mode==="edit"&&this.editTableId){const h=this.editTableId,m=await n.store.tables.findOne(h),g=new Map((m?.columns??[]).map(B=>[B.field,B])),w=u.filter(B=>{const G=g.get(B.field);return B.unique&&!G?.unique||B.notnull&&!G?.notnull||B.max&&B.max>0&&B.max!==G?.max});if(w.length>0){const B=await n.store.rows(h).find(),G=D0(w,B);if(G.length>0){this.errorMsg=`Cannot save: ${G.length} existing ${G.length===1?"row violates":"rows violate"} the new constraints.
${G.slice(0,5).join(`
`)}${G.length>5?`
…and ${G.length-5} more.`:""}`;return}}const y=new Set(this.columns.map(B=>B.origField).filter(B=>!!B)),$=new Set(u.map(B=>B.field)),x=(m?.columns??[]).map(B=>B.field).filter(B=>!y.has(B)),A=m?.deletedColumns??[],L=[...new Set([...A,...x])].filter(B=>!$.has(B));let M=null;if(m&&m.name!==t){const B=(await n.store.viewInstances.find()).filter(ie=>ie.workspaceId===n.workspaceId);M=k0(m.name,r,B,h);const G=_0(M);if(G&&!await A0(m.name,t,G))return}const F={name:t,title:l,columns:u,readonly:this.tableReadonly,updatedAt:Date.now()};(L.length>0||A.length>0)&&(F.deletedColumns=L);const V=m?.name;await n.store.tables.patch(h,F);const Q=x.filter(B=>!$.has(B)),ne=this.fieldRenames();if(!m?.source&&(Q.length>0||ne.length>0)){const B=await n.store.rows(h).find();for(const G of B){let ie=!1,re={...G.data};const H=_l(re,ne);H&&(re=H,ie=!0);for(const K of Q)K in re&&(delete re[K],ie=!0);ie&&await n.store.rows(h).patch(G.id,{data:re,updatedAt:Date.now()})}}V!==void 0&&V!==t&&await I0(h,V,t,M)}else await n.store.tables.insert({id:Ce(),workspaceId:n.workspaceId,name:t,title:l,code:Le(t),columns:u,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return C`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=this.fieldRenames(),t=e.length>0?this.previewRows.map(s=>({...s,data:_l(s.data,e)??s.data})):this.previewRows,n=new Map;for(const s of this.columns){if(!s.unique)continue;const i=new Set,o=new Set;for(const l of t){const u=l.data[s.field];u==null||u===""||(i.has(u)&&o.add(u),i.add(u))}n.set(s.field,o)}const r=this.columns.filter(s=>!s.hidden);return C`
      <div class="preview">
        <h3>
          Live preview — first ${this.previewRows.length}
          row${this.previewRows.length===1?"":"s"}
        </h3>
        <table>
          <thead>
            <tr>
              ${r.map(s=>C`<th title=${s.field}>${s.label||s.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${t.map(s=>C`
                <tr>
                  ${r.map(i=>{const o=s.data[i.field],l=O0(i,o,n.get(i.field));return C`<td class=${l?"violation":""} title=${l??""}>
                      ${R0(o)}
                    </td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}fieldRenames(){return this.mode!=="edit"?[]:this.columns.filter(e=>e.origField&&e.origField!==e.field.trim()).map(e=>({from:e.origField,to:e.field.trim()}))}renameDetected(){return this.fieldRenames().length>0}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return C`
      <dialog @cancel=${this.close} @keydown=${pt}>
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
            ${this.noticeMsg?C`<div class="notice">${this.noticeMsg}</div>`:""}
            <label>
              Name
              <input
                type="text"
                autofocus
                .value=${this.name}
                @input=${n=>this.name=n.target.value}
              />
            </label>
            <label>
              Title <span style="color:#9ca3af">(optional — shown in the window title)</span>
              <input
                type="text"
                .value=${this.tableTitle}
                @input=${n=>this.tableTitle=n.target.value}
              />
            </label>
            <label class="inline">
              <input
                type="checkbox"
                data-testid="table-readonly"
                .checked=${this.tableReadonly}
                @change=${n=>this.tableReadonly=n.target.checked}
              />
              Read-only
              <span style="color:#9ca3af">(show values, no editing or add/delete row)</span>
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
                <span class="flag-label" title="Sortable">⇅</span>
                <span class="flag-label" title="Filterable (includes search)">⚲</span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              ${this.columns.map((n,r)=>{const s=this.dragSrcIdx===r,i=this.dropTargetIdx===r,o=i&&this.dropEdge==="before"?" drop-before":i&&this.dropEdge==="after"?" drop-after":"";return C`
                  <div
                    class=${`col-row${s?" drag-source":""}${o}`}
                    @dragover=${l=>this.onRowDragOver(l,r,l.currentTarget)}
                    @dragleave=${()=>this.onRowDragLeave(r)}
                    @drop=${l=>this.onRowDrop(l,r)}
                  >
                    <span
                      class="drag-handle"
                      title="Drag to reorder"
                      draggable="true"
                      @dragstart=${l=>this.onRowDragStart(l,r)}
                      @dragend=${()=>this.onRowDragEnd()}
                    >
                      <span class="mi sm">drag_indicator</span>
                    </span>
                    <input
                      type="text"
                      .value=${n.field}
                      @input=${l=>this.patchColumn(r,{field:l.target.value})}
                    />
                    <input
                      type="text"
                      .value=${n.label}
                      @input=${l=>this.patchColumn(r,{label:l.target.value})}
                    />
                    <select
                      .value=${n.type}
                      @change=${l=>this.patchColumn(r,{type:l.target.value})}
                    >
                      ${T0.map(l=>C`<option value=${l} ?selected=${l===n.type}>${l}</option>`)}
                    </select>
                    <select
                      title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                      .value=${n.renderer??""}
                      @change=${l=>{const u=l.target.value;this.patchColumn(r,{renderer:u||void 0})}}
                    >
                      <option value="" ?selected=${!n.renderer}>— none —</option>
                      ${this.rendererOptions.map(l=>C`<option value=${l} ?selected=${l===n.renderer}>${l}</option>`)}
                    </select>
                    <button
                      type="button"
                      class=${`icon-btn${n.script?.trim()?" has-script":""}`}
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
                      @input=${l=>{const u=l.target.value;this.patchColumn(r,{max:u===""?void 0:Number(u)})}}
                    />
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Unique"
                        .checked=${!!n.unique}
                        @change=${l=>this.patchColumn(r,{unique:l.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Not null"
                        .checked=${!!n.notnull}
                        @change=${l=>this.patchColumn(r,{notnull:l.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Visible — uncheck to hide the column without losing its data"
                        .checked=${!n.hidden}
                        @change=${l=>this.patchColumn(r,{hidden:!l.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Sortable — uncheck to disable sorting on this column"
                        .checked=${n.sortable!==!1}
                        @change=${l=>this.patchColumn(r,{sortable:l.target.checked?void 0:!1})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Filterable — uncheck to disable filtering and search on this column"
                        .checked=${n.filterable!==!1}
                        @change=${l=>this.patchColumn(r,{filterable:l.target.checked?void 0:!1})}
                      />
                    </span>
                    <button
                      type="button"
                      class="icon-btn"
                      title="Move up"
                      ?disabled=${r===0}
                      @click=${()=>this.moveColumn(r,-1)}
                    >
                      <span class="mi sm">arrow_upward</span>
                    </button>
                    <button
                      type="button"
                      class="icon-btn"
                      title="Move down"
                      ?disabled=${r===this.columns.length-1}
                      @click=${()=>this.moveColumn(r,1)}
                    >
                      <span class="mi sm">arrow_downward</span>
                    </button>
                    <button
                      type="button"
                      class="icon-btn row-del"
                      title="Remove column"
                      @click=${()=>this.removeColumn(r)}
                    >
                      <span class="mi sm">delete</span>
                    </button>
                  </div>
                `})}
            </div>

            <button type="button" class="add" @click=${this.addColumn}>+ Add column</button>
            ${this.columnActions.map(n=>C`<button
                type="button"
                class="add"
                title=${n.tooltip??n.label}
                @click=${()=>void this.runColumnAction(n)}
              >
                ${n.label}
              </button>`)}

            ${this.renameDetected()?C`<div class="hint">
                  Existing rows are re-keyed on save, so renamed fields keep their data.
                </div>`:""}
            ${this.errorMsg?C`<div class="error">${this.errorMsg}</div>`:""}
            ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};Be.styles=[gt,ft,xe`
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
        grid-template-columns:
          1.25rem 1fr 1fr 7rem 7rem 1.5rem 4rem 1.5rem 1.5rem 1.5rem 1.5rem 1.5rem 1.5rem 1.5rem
          1.5rem;
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
    `];Qe([U()],Be.prototype,"mode",2);Qe([U()],Be.prototype,"editTableId",2);Qe([U()],Be.prototype,"name",2);Qe([U()],Be.prototype,"tableTitle",2);Qe([U()],Be.prototype,"tableReadonly",2);Qe([U()],Be.prototype,"columns",2);Qe([U()],Be.prototype,"errorMsg",2);Qe([U()],Be.prototype,"noticeMsg",2);Qe([U()],Be.prototype,"dragSrcIdx",2);Qe([U()],Be.prototype,"dropTargetIdx",2);Qe([U()],Be.prototype,"dropEdge",2);Qe([U()],Be.prototype,"previewRows",2);Qe([U()],Be.prototype,"rendererOptions",2);Qe([U()],Be.prototype,"columnActions",2);Be=Qe([Se("new-table-dialog")],Be);function R0(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function O0(e,t,n){const r=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&r)return`${e.label}: empty`;if(r)return null;if(e.type==="number"&&typeof t!="number"){const s=Number(t);if(!Number.isFinite(s))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!r){const s=new Date(String(t));if(Number.isNaN(s.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&n?.has(t)?`${e.label}: duplicate`:null}function D0(e,t){const n=[];for(const r of e)if(r.notnull&&t.forEach((s,i)=>{const o=s.data[r.field];(o==null||typeof o=="string"&&o.trim()==="")&&n.push(`Row ${i+1}: ${r.label} is empty.`)}),r.max!=null&&r.max>0&&t.forEach((s,i)=>{const o=s.data[r.field];typeof o=="string"&&o.length>r.max?n.push(`Row ${i+1}: ${r.label} length ${o.length} > max ${r.max}.`):typeof o=="number"&&o>r.max&&n.push(`Row ${i+1}: ${r.label} value ${o} > max ${r.max}.`)}),r.unique){const s=new Map;t.forEach((i,o)=>{const l=i.data[r.field];l==null||l===""||(s.has(l)?n.push(`Row ${o+1}: ${r.label} duplicates row ${s.get(l)+1} ("${String(l)}").`):s.set(l,o))})}return n}var P0=Object.defineProperty,L0=Object.getOwnPropertyDescriptor,Xe=(e,t,n,r)=>{for(var s=r>1?void 0:r?L0(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&P0(t,n,s),s};const M0='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',j0=C`<span class="mi sm">extension</span>`,Nc="plugin:catalogUrls";function ws(){return new URL("/easydbaccess3/plugins/catalog.json",location.origin).toString()}const N0=[["installed","Installed"],["built-in","Built-in"],["fixed","Fixed"]],Jd=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],z0=new Map(Jd),U0={off:"Filter by status — click: only enabled → only disabled → off",on:"Showing only enabled plugins — click to show only disabled",not:"Showing only disabled plugins — click to clear"};let qe=class extends ve{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[ws()],this.activeCatalogUrl=ws(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e)}async open(){const e=await ae(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const n=await e.store.plugins.find();this.records=new Map(n.map(i=>[i.url,i]));const r=await e.store.settings.findOne(Nc),s=Array.isArray(r?.value)?r.value.filter(i=>typeof i=="string"):[];this.catalogUrls=s.length>0?s:[ws()],this.activeCatalogUrl=this.catalogUrls[0]??ws(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json(),r=Array.isArray(n.plugins)?n.plugins:[];this.catalog=r.map(s=>({...s,absUrl:new URL(s.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const n=(await(await ae()).store.settings.findOne("server-sync:url"))?.value;if(typeof n!="string"||n.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const s=`${n.replace(/\/+$/,"")}/plugins/registry`;try{const i=await fetch(s,{cache:"no-store"});if(!i.ok)throw new Error(`HTTP ${i.status}`);const o=await i.json(),l=Array.isArray(o.plugins)?o.plugins:[];this.serverCatalog=l.map(u=>({...u,absUrl:new URL(u.url,s).toString()})),this.serverCatalogError=null}catch(i){this.serverCatalog=[],this.serverCatalogError=i.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await ae()).store.settings.upsert({name:Nc,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await ae()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const n=await ae();await n.store.workspaces.patch(n.workspaceId,{pluginUrls:this.urls}),await n.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const n=await ae(),r=this.records.get(e);await n.store.plugins.upsert({...r??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...r,url:e,enabled:t,lastFetched:r?.lastFetched??0}))}async removePlugin(e){const t=await ae();this.urls=this.urls.filter(n=>n!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const n=await ae(),r=_o(e),s=this.records.get(r);await n.store.plugins.upsert({...s??{url:r,lastFetched:0},url:r,enabled:t,lastFetched:s?.lastFetched??0}),this.records=new Map(this.records.set(r,{...s,url:r,enabled:t,lastFetched:s?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await ae()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await ae();try{const n=await fetch(e.absUrl,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status} ${n.statusText}`);const r=await n.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:r});const s=new Blob([r],{type:"text/javascript"}),i=URL.createObjectURL(s);try{const l=await import(i);await l.init?.(t.api),await l.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(i),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const o=await t.store.plugins.find();this.records=new Map(o.map(l=>[l.url,l])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(n){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${n.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${n.message}`,{kind:"error",title:"Plugin error"})}finally{const n=new Set(this.installing);n.delete(e.absUrl),this.installing=n}}renderTri(e,t,n,r="",s){const i=s?s[t??"off"]:t==="on"?`Showing only ${e} plugins — click to exclude`:t==="not"?`Hiding ${e} plugins — click to clear`:`Filter by ${e} — click: show only → exclude → off`;return C`
      <button
        type="button"
        class=${`tri${r?` ${r}`:""}${t?` ${t}`:""}`}
        title=${i}
        aria-pressed=${t!==void 0}
        @click=${n}
      >
        <span class="tri-mark">${t==="on"?"✓":t==="not"?"≠":""}</span>${e}
      </button>
    `}cycleState(e,t){const n=e.get(t),r=new Map(e);return n===void 0?r.set(t,"on"):n==="on"?r.set(t,"not"):r.delete(t),r}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}cycleStatusFilter(){this.statusFilter=this.statusFilter===void 0?"on":this.statusFilter==="on"?"not":void 0}buildRows(){const e=new Map,t=new Map;for(const{id:n,meta:r}of zv){const s=r.fixed?!0:this.records.get(_o(n))?.enabled!==!1,i=!r.fixed&&yt==="all-optional",o=r.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${n}`,{id:n,name:r.name,...r.type?{type:r.type}:{},...r.description?{meta:r.description}:{meta:"Built-in plugin"},...r.author?{author:r.author}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},categories:new Set(o),enabled:s,status:s&&!i?"enabled":"disabled",fixed:!!r.fixed,...i?{skipped:!0}:{}})}for(const n of[...this.catalog,...this.serverCatalog]){const r=this.urls.includes(n.absUrl),s=this.records.get(n.absUrl),i=r?["available","installed"]:["available"],o=e.get(n.id),l=s?.enabled!==!1,u=r&&yt!=="off";e.set(n.id,{id:n.id,name:n.name,url:n.absUrl,...n.type?{type:n.type}:{},...n.icon?{icon:n.icon}:{},...n.repo?{repo:n.repo}:{},...n.author?{author:n.author}:{},meta:n.description??n.absUrl,categories:o?new Set([...o.categories,...i]):new Set(i),enabled:l,...r?{status:l&&!u?"enabled":"disabled"}:{},...u?{skipped:!0}:{},installing:this.installing.has(n.absUrl)}),t.set(n.absUrl,n.id)}for(const n of this.urls){const r=t.get(n);if(r){e.get(r).categories.add("installed");continue}const s=this.records.get(n),i=s?.lastFetched?new Date(s.lastFetched).toLocaleString():"never",o=s?.enabled!==!1;e.set(`url:${n}`,{id:n,name:n,urlOnly:!0,url:n,meta:s?.lastError??`Last fetched: ${i}`,metaIsError:!!s?.lastError,categories:new Set(["installed"]),enabled:o,status:o&&yt==="off"?"enabled":"disabled",...yt!=="off"?{skipped:!0}:{}})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),n=[],r=[];for(const[u,h]of this.filterStates)(h==="on"?n:r).push(u);const s=[],i=[];for(const[u,h]of this.typeFilters)(h==="on"?s:i).push(u);const o=this.statusFilter==="on"?"enabled":this.statusFilter==="not"?"disabled":void 0,l=e.filter(u=>!(n.length&&!n.some(h=>u.categories.has(h))||r.some(h=>u.categories.has(h))||s.length&&!(u.type&&s.includes(u.type))||u.type&&i.includes(u.type)||o&&u.status!==o));return t?l.filter(u=>[u.id,u.name,u.type,u.meta,u.author].some(h=>h?.toLowerCase().includes(t))):l}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),n=!!e.url&&e.categories.has("installed"),r=!!e.url&&!e.categories.has("installed");return C`
      <div
        class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}${e.skipped?" skipped":""}`}
      >
        <span class="row-icon">${e.icon?On(e.icon):j0}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?C`<span class="row-id">${e.id}</span>`:""}${e.type?C`<span class="row-type" title="Plugin type"
                  >${z0.get(e.type)??e.type}</span
                >`:""}${e.skipped?C`<span
                  class="row-skipped"
                  title="Safe mode kept this plugin from loading this session — your saved setting is unchanged"
                  >skipped</span
                >`:""}
          </div>
          ${e.meta?C`<div class=${`meta${e.metaIsError?" err":""}`}>${e.meta}</div>`:""}
        </div>
        <div class="row-author">${e.author??""}</div>
        ${e.repo?C`<a
              class="row-repo"
              href=${e.repo}
              target="_blank"
              rel="noopener noreferrer"
              title="View source on GitHub"
              >${On(M0)}</a
            >`:C`<span></span>`}
        ${e.fixed?C`<span class="mi sm lock-icon" title="Always on — cannot be disabled">lock</span>`:t?C`<label
                class="switch"
                title=${e.skipped?"Your saved setting — safe mode is what stopped this plugin loading now":"Enable / disable"}
              >
                <input
                  type="checkbox"
                  .checked=${e.enabled}
                  @change=${s=>this.onRowToggle(e,s.target.checked)}
                />
                <span class="slider"></span>
              </label>`:C`<span></span>`}
        ${r?C`<button
              type="button"
              class="install"
              ?disabled=${e.installing}
              @click=${()=>this.installFromCatalog({absUrl:e.url,name:e.name})}
            >
              <span class="mi sm">${e.installing?"hourglass_empty":"download"}</span>
              ${e.installing?"Installing…":"Install"}
            </button>`:n?C`<button
                type="button"
                class="uninstall"
                @click=${()=>this.removePlugin(e.url)}
              >
                <span class="mi sm">delete</span> Uninstall
              </button>`:C`<span></span>`}
      </div>
    `}render(){const e=this.filteredRows;return C`
      <dialog @cancel=${this.close} @keydown=${pt}>
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
              Plugins are JavaScript modules loaded by URL into this workspace. Enable/disable
              changes take effect after reload; installing a plugin activates it immediately.
            </p>
            ${yt!=="off"?C`<p class="safemode">
                  <strong>Safe mode is on.</strong>
                  ${yt==="all-optional"?C`<code>?safemode</code> skipped every URL plugin and every optional
                        built-in for this session.`:C`<code>?safemode1</code> skipped every URL plugin for this session.`}
                  Plugins marked <span class="row-skipped">skipped</span> are not running. The
                  toggles below still show — and change — your saved settings, which safe mode never
                  touches. Reload without the flag to run them again.
                </p>`:""}

            <div class="filters">
              <div class="chips">
                ${N0.map(([t,n])=>this.renderTri(n,this.filterStates.get(t),()=>this.cycleFilter(t)))}
                ${this.renderTri("Enabled",this.statusFilter,()=>this.cycleStatusFilter(),"status",U0)}
              </div>
              <div class="search">
                <input
                  type="text"
                  placeholder="Search plugins…"
                  .value=${this.search}
                  @input=${t=>this.search=t.target.value}
                />
              </div>
            </div>

            <div class="type-filters">
              <span class="filter-label">Type</span>
              ${Jd.map(([t,n])=>this.renderTri(n,this.typeFilters.get(t),()=>this.cycleTypeFilter(t)))}
            </div>

            <div class="catalog-source">
              <input
                type="text"
                list="catalog-url-options"
                .value=${this.activeCatalogUrl}
                @input=${t=>this.activeCatalogUrl=t.target.value}
                placeholder="Catalog source URL"
              />
              <datalist id="catalog-url-options">
                ${this.catalogUrls.map(t=>C`<option value=${t}></option>`)}
              </datalist>
              <button type="button" class="ghost" @click=${this.reloadCatalogSource}>
                <span class="mi sm">refresh</span> Reload
              </button>
            </div>
            ${this.catalogError?C`<div class="meta err">Catalog unavailable: ${this.catalogError}</div>`:""}
            ${this.serverCatalogError?C`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            <div class="plugin-list">
              ${e.length===0?C`<p class="hint">No plugins match the current filters/search.</p>`:""}
              ${e.map(t=>this.renderRow(t))}
            </div>

            <div class="add">
              <input
                type="text"
                placeholder="https://example.com/my-plugin.js"
                .value=${this.addUrl}
                @input=${t=>this.addUrl=t.target.value}
              />
              <button type="submit" class="primary"><span class="mi sm">add</span> Add</button>
            </div>
          </div>
        </form>
      </dialog>
    `}};qe.styles=[gt,ft,xe`
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
    `];Xe([U()],qe.prototype,"urls",2);Xe([U()],qe.prototype,"records",2);Xe([U()],qe.prototype,"addUrl",2);Xe([U()],qe.prototype,"catalog",2);Xe([U()],qe.prototype,"catalogError",2);Xe([U()],qe.prototype,"serverCatalog",2);Xe([U()],qe.prototype,"serverCatalogError",2);Xe([U()],qe.prototype,"installing",2);Xe([U()],qe.prototype,"catalogUrls",2);Xe([U()],qe.prototype,"activeCatalogUrl",2);Xe([U()],qe.prototype,"search",2);Xe([U()],qe.prototype,"filterStates",2);Xe([U()],qe.prototype,"typeFilters",2);Xe([U()],qe.prototype,"statusFilter",2);qe=Xe([Se("plugin-manager-dialog")],qe);var F0=Object.defineProperty,B0=Object.getOwnPropertyDescriptor,Ft=(e,t,n,r)=>{for(var s=r>1?void 0:r?B0(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&F0(t,n,s),s};const fr="__general__";let Je=class extends ve{constructor(){super(...arguments),this.tabs=[],this.active=fr,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.secretError="",this.openHelp="",this.dialogEl=null,this.attemptClose=e=>{const t=this.invalidSecrets();if(t.length>0){e?.preventDefault();const r=t[0];this.active=r.tab.id,this.secretError=`“${r.field.label}” must be empty or a \${secret:name} reference. Move the value into the secrets store (General tab) and reference it, so the raw secret is never saved or synced.`;return}const n=this.danglingSecrets();if(n.length>0){e?.preventDefault();const r=n[0];this.active=r.tab.id;const s=r.names.map(i=>`“${i}”`).join(", ");this.secretError=`“${r.field.label}” references ${s}, which the secrets store does not have. Add it in the General tab or correct the name — an unknown reference is passed on as the literal \${secret:name} text.`;return}this.secretError="",this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.attemptClose()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e),this.dialogEl&&Qd("settings",this.dialogEl)}async open(){const e=await ae(),t=[...e.registries.settings];this.tabs=t.map(([i,o])=>({id:i,name:o.name,fields:o.fields}));const n=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=n?.title??"";const r={},s={};for(const i of this.tabs)for(const o of i.fields){const l=`${i.id}:${o.key}`,u=await e.api.settings.placement(i.id,o.key);u==="user"?(r[l]=jo(l),s[l]="user"):u==="workspace"?(r[l]=(await e.store.settings.findOne(l))?.value,s[l]="workspace"):(r[l]=o.default,s[l]=o.scope??"workspace")}this.values=r,this.placements=s,this.secretsText=Bs(),this.active=fr,await this.updateComplete,this.dialogEl?.showModal()}static rawSecret(e){return typeof e=="string"&&e!==""&&!e.includes("${secret:")}invalidSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields)n.type==="secret"&&Je.rawSecret(this.values[`${t.id}:${n.key}`])&&e.push({tab:t,field:n});return e}static secretRefs(e){return typeof e!="string"?[]:[...e.matchAll(/\$\{secret:([^}]*)\}/g)].map(t=>(t[1]??"").trim())}missingRefs(e){const t=new Set(Object.keys(xr(this.secretsText)));return Je.secretRefs(e).filter(n=>!t.has(n))}danglingSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields){const r=this.missingRefs(this.values[`${t.id}:${n.key}`]);r.length>0&&e.push({tab:t,field:n,names:r})}return e}async setValue(e,t,n){const r=`${e.id}:${t.key}`;this.values={...this.values,[r]:n},this.clearSecretErrorIfFixed(),await(await ae()).api.settings.set(e.id,t.key,n,this.placements[r])}async toggleScope(e,t,n){const r=`${e.id}:${t.key}`,s=n?"user":"workspace";this.placements={...this.placements,[r]:s},await(await ae()).api.settings.set(e.id,t.key,this.values[r],s)}clearSecretErrorIfFixed(){this.secretError&&this.invalidSecrets().length===0&&this.danglingSecrets().length===0&&(this.secretError="")}onSecretsInput(e){this.secretsText=e.target.value,su(this.secretsText),this.clearSecretErrorIfFixed()}downloadSecrets(){const e=new Blob([this.secretsText],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="secrets.txt",n.click(),URL.revokeObjectURL(t)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await ae();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const n=`${e.id}:${t.key}`,r=this.values[n];switch(t.type){case"text":return C`<textarea
          .value=${String(r??"")}
          @change=${s=>this.setValue(e,t,s.target.value)}
        ></textarea>`;case"number":return C`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${s=>{const i=s.target.value;this.setValue(e,t,i===""?void 0:Number(i))}}
        />`;case"boolean":return C`<label class="scope"
          ><input
            type="checkbox"
            .checked=${!!r}
            @change=${s=>this.setValue(e,t,s.target.checked)}
          />
          enabled</label
        >`;case"date":return C`<input
          type="date"
          .value=${String(r??"")}
          @change=${s=>this.setValue(e,t,s.target.value)}
        />`;case"secret":return this.renderSecretControl(e,t,r);case"option":return C`<div class="radios">
          ${(t.options??[]).map(s=>C`<label
              ><input
                type="radio"
                name=${n}
                .checked=${r===s}
                @change=${()=>this.setValue(e,t,s)}
              />${s}</label
            >`)}
        </div>`;case"selection":{const s=Array.isArray(r)?r:[];return C`<div class="checks">
          ${(t.options??[]).map(i=>C`<label
              ><input
                type="checkbox"
                .checked=${s.includes(i)}
                @change=${o=>{const u=o.target.checked?[...s,i]:s.filter(h=>h!==i);this.setValue(e,t,u)}}
              />${i}</label
            >`)}
        </div>`}case"string":default:return C`<input
          type="text"
          .value=${String(r??"")}
          @change=${s=>this.setValue(e,t,s.target.value)}
        />`}}renderSecretControl(e,t,n){const r=Object.keys(xr(this.secretsText)),s=Je.rawSecret(n)||this.missingRefs(n).length>0;return C`<div class="secret-row">
      <input
        type="text"
        class=${s?"invalid":""}
        placeholder="value or \${secret:name}"
        .value=${String(n??"")}
        @change=${i=>this.setValue(e,t,i.target.value)}
      />
      ${r.length>0?C`<select
            title="Insert a secret reference"
            @change=${i=>{const o=i.target.value;o&&this.setValue(e,t,`\${secret:${o}}`),i.target.value=""}}
          >
            <option value="">🔑 secret…</option>
            ${r.map(i=>C`<option value=${i}>${i}</option>`)}
          </select>`:se}
    </div>`}renderField(e,t){const n=`${e.id}:${t.key}`,r=!!(t.help||t.helpUrl),s=this.openHelp===n;return C`<div class="field">
      <div class="field-head">
        <label>${t.label}</label>
        ${r?C`<button
              type="button"
              class="help-btn"
              aria-label=${`Help for ${t.label}`}
              aria-expanded=${s?"true":"false"}
              title=${t.help??"More about this setting"}
              @click=${()=>this.openHelp=s?"":n}
            >
              <span class="mi sm" aria-hidden="true">info</span>
            </button>`:se}
        <label class="scope" title="Store on this device only (not synced)">
          <input
            type="checkbox"
            .checked=${this.placements[n]==="user"}
            @change=${i=>this.toggleScope(e,t,i.target.checked)}
          />
          user
        </label>
      </div>
      ${r&&s?C`<div class="help-panel">
            ${t.help?C`<p>${t.help}</p>`:se}
            ${t.helpUrl?C`<a href=${t.helpUrl} target="_blank" rel="noopener noreferrer"
                  >${t.helpLinkLabel||q0(t.helpUrl)}</a
                >`:se}
          </div>`:se}
      ${this.renderControl(e,t)}
      ${t.description?C`<p class="desc">${t.description}</p>`:se}
    </div>`}renderGeneral(){return C`
      <h3>General</h3>
      <p class="blurb">
        Workspace settings sync with this workspace; values marked
        <em>user</em> stay on this device only.
      </p>
      <div class="field">
        <div class="field-head"><label>Workspace title</label></div>
        <p class="desc">
          Shown in the header instead of "easyDBAccess". Leave blank to use the default.
        </p>
        <input
          type="text"
          placeholder="easyDBAccess"
          .value=${this.workspaceTitle}
          @change=${e=>this.setWorkspaceTitle(e.target.value)}
        />
      </div>
      <div class="field">
        <div class="field-head"><label>Secrets</label></div>
        <p class="desc">
          Cross-workspace, device-local. One <code>name: value</code> per line.
          Reference a secret from any field with <code>\${secret:name}</code>.
          Drag a <code>secrets.txt</code> onto the app to re-import.
        </p>
        <textarea
          placeholder="githubPAT: ghp_…"
          .value=${this.secretsText}
          @input=${this.onSecretsInput}
        ></textarea>
        <div class="secrets-actions">
          <button
            type="button"
            class="ghost"
            ?disabled=${this.secretsText.trim().length===0}
            @click=${this.downloadSecrets}
          >
            <span class="mi sm">download</span> Download secrets.txt
          </button>
        </div>
      </div>
    `}renderPanel(){if(this.active===fr)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?C`
      <h3>${e.name}</h3>
      ${e.fields.length===0?C`<p class="empty">This plugin registered no settings.</p>`:e.fields.map(t=>this.renderField(e,t))}
    `:se}render(){return C`
      <dialog @cancel=${this.attemptClose} @keydown=${pt}>
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
          ${this.secretError?C`<div class="secret-error" role="alert">${this.secretError}</div>`:se}
          <div class="dialog-body">
            <div class="layout">
              <nav class="tabs">
                <button
                  type="button"
                  class=${this.active===fr?"active":""}
                  @click=${()=>this.active=fr}
                >
                  General
                </button>
                ${this.tabs.map(e=>C`<button
                    type="button"
                    class=${this.active===e.id?"active":""}
                    @click=${()=>this.active=e.id}
                  >
                    ${e.name}
                  </button>`)}
              </nav>
              <section class="panel">${this.renderPanel()}</section>
            </div>
          </div>
        </form>
      </dialog>
    `}};Je.styles=[gt,ft,xe`
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
    `];Ft([U()],Je.prototype,"tabs",2);Ft([U()],Je.prototype,"active",2);Ft([U()],Je.prototype,"values",2);Ft([U()],Je.prototype,"placements",2);Ft([U()],Je.prototype,"secretsText",2);Ft([U()],Je.prototype,"workspaceTitle",2);Ft([U()],Je.prototype,"secretError",2);Ft([U()],Je.prototype,"openHelp",2);Je=Ft([Se("settings-dialog")],Je);function q0(e){try{return new URL(e).host}catch{return e}}const Zd=5,zc="palette:recent",eh="Recent";function H0(e,t,n=Zd){return[t,...e.filter(r=>r!==t)].slice(0,n)}function K0(e){return Array.isArray(e)?e.filter(t=>typeof t=="string").slice(0,Zd):[]}function V0(e,t){if(t.length===0)return e;const n=new Map(e.map(i=>[i.id,i])),r=[];for(const i of t){const o=n.get(i);o&&r.push({...o,group:eh})}if(r.length===0)return e;const s=new Set(r.map(i=>i.id));return[...r,...e.filter(i=>!s.has(i.id))]}var G0=Object.defineProperty,W0=Object.getOwnPropertyDescriptor,Gn=(e,t,n,r)=>{for(var s=r>1?void 0:r?W0(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&G0(t,n,s),s};const Y0={[eh]:-1,Windows:0,Actions:1,App:2,Tables:3,Views:4};function Uc(e){return Y0[e]??3}function Q0(e){return e?e.trimStart().startsWith("<svg")?C`<span class="cmd-svg">${Do(e)}</span>`:C`<span class="mi sm">${e}</span>`:C`<span class="mi sm">chevron_right</span>`}let Zt=class extends ve{constructor(){super(...arguments),this.search="",this.items=[],this.selected=0,this.api=null,this.recentIds=[],this.onDialogClick=e=>{if(e.detail===0||!this.dialogEl)return;const t=this.dialogEl.getBoundingClientRect();e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom||this.close()}}async open(){const e=await ae();this.api=e.api,this.recentIds=K0((await e.api.store.settings.findOne(zc))?.value),this.items=await this.buildItems(),this.search="",this.selected=0,await this.updateComplete,this.dialogEl&&!this.dialogEl.open&&this.dialogEl.showModal(),this.inputEl?.focus()}async buildItems(){const e=await ae(),t=e.api,n=[];for(const i of e.registries.commands)n.push({id:i.id,title:i.title,group:i.group??"Commands",...i.icon?{icon:i.icon}:{},haystack:[i.title,i.group,...i.keywords??[]].join(" ").toLowerCase(),run:()=>i.run(t)});for(const i of[...e.registries.headerButtons,...e.registries.footerButtons])n.push({id:`button:${i.id}`,title:i.label,group:"Actions",...i.icon?{icon:i.icon}:{},haystack:`${i.label} ${i.tooltip??""}`.toLowerCase(),run:()=>i.onClick(t)});const r=await t.store.tables.find({workspaceId:e.workspaceId});r.sort((i,o)=>i.name.localeCompare(o.name));for(const i of r)n.push({id:`goto:${i.id}`,title:`Go to: ${i.name}`,group:"Tables",icon:"table_chart",haystack:`${i.name} go to table`.toLowerCase(),run:()=>{Sd(i.id)}});const s=await t.store.viewInstances.find({workspaceId:e.workspaceId});s.sort((i,o)=>i.name.localeCompare(o.name));for(const i of s)n.push({id:`goto-view:${i.id}`,title:`Go to view: ${i.name}`,group:"Views",icon:"view_quilt",haystack:`${i.name} go to view`.toLowerCase(),run:async()=>{await t.store.viewInstances.patch(i.id,{open:!0,updatedAt:Date.now()}),Kv(i.id)}});return V0(n,this.recentIds).map((i,o)=>({it:i,i:o})).sort((i,o)=>Uc(i.it.group)-Uc(o.it.group)||i.i-o.i).map(({it:i})=>i)}get filtered(){const e=this.search.trim().toLowerCase();return e?this.items.filter(t=>t.haystack.includes(e)):this.items}close(){this.dialogEl?.close()}onInput(e){this.search=e.target.value,this.selected=0}onKeydown(e){const t=this.filtered;if(e.key==="ArrowDown")e.preventDefault(),this.selected=t.length?(this.selected+1)%t.length:0;else if(e.key==="ArrowUp")e.preventDefault(),this.selected=t.length?(this.selected-1+t.length)%t.length:0;else if(e.key==="Enter"){e.preventDefault();const n=t[this.selected];n&&this.execute(n)}}async execute(e){this.close(),this.remember(e.id);try{await e.run()}catch(t){console.error(`[command:${e.id}]`,t)}}async remember(e){this.recentIds=H0(this.recentIds,e);try{await this.api?.store.settings.upsert({name:zc,value:this.recentIds})}catch(t){console.warn("[command-palette] could not save recent commands",t)}}render(){const e=this.filtered;let t="";return C`
      <dialog
        @keydown=${this.onKeydown}
        @click=${this.onDialogClick}
        @close=${()=>this.search=""}
      >
        <div class="search-row">
          <span class="mi">search</span>
          <input
            type="text"
            placeholder="Type a command…  (windows, go to, import, export)"
            .value=${this.search}
            @input=${this.onInput}
          />
        </div>
        <div class="list">
          ${e.length===0?C`<div class="empty">No matching commands.</div>`:e.map((n,r)=>{const s=n.group!==t?(t=n.group,n.group):null;return C`
                  ${s?C`<div class="group-head">${s}</div>`:""}
                  <div
                    class=${`item${r===this.selected?" sel":""}`}
                    @mousemove=${()=>this.selected=r}
                    @click=${()=>this.execute(n)}
                  >
                    ${Q0(n.icon)}
                    <span class="title">${n.title}</span>
                  </div>
                `})}
        </div>
      </dialog>
    `}};Zt.styles=[gt,xe`
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
    `];Gn([U()],Zt.prototype,"search",2);Gn([U()],Zt.prototype,"items",2);Gn([U()],Zt.prototype,"selected",2);Gn([Pt("dialog")],Zt.prototype,"dialogEl",2);Gn([Pt("input")],Zt.prototype,"inputEl",2);Zt=Gn([Se("command-palette-dialog")],Zt);var X0=Object.defineProperty,J0=Object.getOwnPropertyDescriptor,th=(e,t,n,r)=>{for(var s=r>1?void 0:r?J0(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&X0(t,n,s),s};let Ns=class extends ve{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await ae();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(n=>this.tables=n.filter(r=>r.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(n=>n.workspaceId===this.workspaceId),await Td(),await Wv()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?C``:C`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};Ns.styles=xe`
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
  `;th([U()],Ns.prototype,"tables",2);Ns=th([Se("table-list")],Ns);function ys(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function Z0(e,t){const{from:n,to:r,name:s,mode:i}=t,o=await e.workspaces.get(n);if(await e.workspaces.put({id:r,name:s,createdAt:Date.now(),pluginUrls:i==="empty"?[]:[...o?.pluginUrls??[]]}),i==="empty")return r;if(i==="all"){const u=await e.tables.where("workspaceId").equals(n).toArray(),h=new Map;for(const y of u){const $=ys();h.set(y.id,$),await e.tables.put({...y,id:$,workspaceId:r,updatedAt:Date.now()})}for(const[y,$]of h){const x=await e.rows.where("tableId").equals(y).toArray();x.length>0&&await e.rows.bulkPut(x.map(A=>({...A,id:ys(),tableId:$})))}const m=await e.viewTemplates.where("workspaceId").equals(n).toArray(),g=new Map;for(const y of m){const $=ys();g.set(y.id,$),await e.viewTemplates.put({...y,id:$,workspaceId:r})}const w=await e.viewInstances.where("workspaceId").equals(n).toArray();for(const y of w){const $=h.get(y.tableId);$&&await e.viewInstances.put({...y,id:ys(),workspaceId:r,tableId:$,templateId:g.get(y.templateId)??y.templateId})}}const l=await e.settings.where("workspaceId").equals(n).toArray();for(const u of l)await e.settings.put({...u,key:pn(r,u.name),workspaceId:r,name:u.name});return r}var e$=Object.defineProperty,t$=Object.getOwnPropertyDescriptor,ka=(e,t,n,r)=>{for(var s=r>1?void 0:r?t$(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&e$(t,n,s),s};const Fc="Clone everything (tables, views, settings)",Bc="Clone settings only (no data)",n$="Empty workspace";let Tr=class extends ve{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await ae();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(s=>s.id===e);if(!t)return;const n=new URLSearchParams(location.search);n.set("space",t.name);const r=`${location.pathname}?${n.toString()}${location.hash}`;location.assign(r)}async addWorkspace(){const e=await ae(),t=await e.api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const n=await e.api.ui.dialogs.choice(`What should "${t.trim()}" start with?`,[Fc,Bc,n$],"New workspace");if(!n)return;const r=n===Fc?"all":n===Bc?"settings":"empty",s=Yd(t.trim());await Z0(eu(),{from:e.workspaceId,to:s,name:t.trim(),mode:r});const i=new URLSearchParams(location.search);i.set("space",t.trim()),location.assign(`${location.pathname}?${i.toString()}${location.hash}`)}render(){return C`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>C`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};Tr.styles=[gt,xe`
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
    `];ka([U()],Tr.prototype,"workspaces",2);ka([U()],Tr.prototype,"current",2);Tr=ka([Se("workspace-selector")],Tr);var qc=Object.freeze,nh=Object.defineProperty,r$=Object.getOwnPropertyDescriptor,kt=(e,t,n,r)=>{for(var s=r>1?void 0:r?r$(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&nh(t,n,s),s},s$=(e,t)=>qc(nh(e,"raw",{value:qc(e.slice())})),Hc;function Kc(e){return e?e.trimStart().startsWith("<svg")?C`<span class="icon-svg" aria-hidden="true">${Do(e)}</span>`:C`<span class="mi sm" aria-hidden="true">${e}</span>`:""}let et=class extends ve{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.onOpenCommandPalette=()=>{this.commandPaletteDialog?.open()},this.onGlobalKeydown=e=>{(e.ctrlKey||e.metaKey)&&!e.altKey&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.commandPaletteDialog?.open())},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{Gc(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!Gc(e))return;e.preventDefault();const t=await ae(),n=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:n,event:e});for(const r of[...t.registries.dropHandlers])try{if(await r(e,t.api))return}catch(s){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:s})}},this.runSlot=(e,t)=>{if(!this.api)return;const n=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:n})).catch(r=>{console.error(`[footer-button:${e.id}]`,r)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),document.addEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.addEventListener("easydb:focus-search",this.openSearch),document.addEventListener("keydown",this.onGlobalKeydown),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),document.removeEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.removeEventListener("easydb:focus-search",this.openSearch),document.removeEventListener("keydown",this.onGlobalKeydown),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await ae();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const n=t.find(r=>r.id===e.workspaceId);this.workspaceTitle=n?.title?.trim()??"",i$(this.workspaceTitle)})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return C`
        <button class="icon-btn" title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
          ${Kc(e.icon)}
        </button>
      `;const n=t==="header"||e.variant==="primary"?"primary":"slot";return C`
      <button class=${n} title=${e.tooltip??e.label} @click=${r=>this.runSlot(e,r)}>
        ${Kc(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return C(Hc||(Hc=s$([`
      <header>
        <strong
          >`,`
          <a
            class="version-link"
            href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener"
            title="View the changelog on GitHub"
            ><span class="version">v0.0.260</span></a
          ></strong
        >
        `,`
        `,`
        <button
          class="icon-btn"
          title="Add, disable, or remove plugins"
          aria-label="Plugins"
          @click=`,`
        >
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
    `])),this.workspaceTitle||"easyDBAccess",this.headerButtons.filter(e=>e.variant!=="secondary").map(e=>this.renderSlotButton(e,"header")),this.searchOpen?C`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?C`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:C`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              aria-label="Search"
              @click=${this.openSearch}
            >
              <span class="mi" aria-hidden="true">search</span>
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};et.styles=[gt,xe`
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
    `];kt([Pt("new-table-dialog")],et.prototype,"dialog",2);kt([Pt("csv-paste-dialog")],et.prototype,"csvPasteDialog",2);kt([Pt("plugin-manager-dialog")],et.prototype,"pluginManagerDialog",2);kt([Pt("settings-dialog")],et.prototype,"settingsDialog",2);kt([Pt("command-palette-dialog")],et.prototype,"commandPaletteDialog",2);kt([Pt("input.search")],et.prototype,"searchInput",2);kt([U()],et.prototype,"footerButtons",2);kt([U()],et.prototype,"headerButtons",2);kt([U()],et.prototype,"searchQuery",2);kt([U()],et.prototype,"searchOpen",2);kt([U()],et.prototype,"workspaceTitle",2);et=kt([Se("app-shell")],et);const Vc=document.title;function i$(e){const t=e.trim();document.title=t?`${t} — ${Vc}`:Vc}function Gc(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([ae(),ut(()=>Promise.resolve().then(()=>Ud),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{se as A,xe as a,C as b,pt as c,ft as d,ve as i,mt as m,U as r,Se as t};
//# sourceMappingURL=index-DOUe9GIu.js.map
