(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const qh="modulepreload",Hh=function(e){return"/easydbaccess3/"+e},ll={},ut=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let o=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");i=o(n.map(h=>{if(h=Hh(h),h in ll)return;ll[h]=!0;const p=h.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const w=document.createElement("link");if(w.rel=p?"stylesheet":qh,p||(w.as="script"),w.crossOrigin="",w.href=h,u&&w.setAttribute("nonce",u),document.head.appendChild(w),p)return new Promise((y,$)=>{w.addEventListener("load",y),w.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vi=globalThis,Oo=vi.ShadowRoot&&(vi.ShadyCSS===void 0||vi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Do=Symbol(),cl=new WeakMap;let Xc=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Do)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Oo&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=cl.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&cl.set(n,t))}return t}toString(){return this.cssText}};const Kh=e=>new Xc(typeof e=="string"?e:e+"",void 0,Do),ke=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new Xc(n,e,Do)},Vh=(e,t)=>{if(Oo)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=vi.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},ul=Oo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Kh(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Wh,defineProperty:Gh,getOwnPropertyDescriptor:Yh,getOwnPropertyNames:Qh,getOwnPropertySymbols:Xh,getPrototypeOf:Jh}=Object,Ui=globalThis,dl=Ui.trustedTypes,Zh=dl?dl.emptyScript:"",ef=Ui.reactiveElementPolyfillSupport,br=(e,t)=>e,_i={toAttribute(e,t){switch(t){case Boolean:e=e?Zh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Po=(e,t)=>!Wh(e,t),hl={attribute:!0,type:String,converter:_i,reflect:!1,useDefault:!1,hasChanged:Po};Symbol.metadata??=Symbol("metadata"),Ui.litPropertyMetadata??=new WeakMap;let An=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=hl){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&Gh(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:s}=Yh(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get:i,set(o){const l=i?.call(this);s?.call(this,o),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??hl}static _$Ei(){if(this.hasOwnProperty(br("elementProperties")))return;const t=Jh(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(br("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(br("properties"))){const n=this.properties,r=[...Qh(n),...Xh(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(ul(i))}else t!==void 0&&n.push(ul(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Vh(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:_i).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:_i;this._$Em=i;const l=o.fromAttribute(n,s.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,n,r,i=!1,s){if(t!==void 0){const o=this.constructor;if(i===!1&&(s=this[t]),r??=o.getPropertyOptions(t),!((r.hasChanged??Po)(s,n)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:i,wrapped:s},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??n??this[t]),s!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r){const{wrapped:o}=s,l=this[i];o!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,s,l)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};An.elementStyles=[],An.shadowRootOptions={mode:"open"},An[br("elementProperties")]=new Map,An[br("finalized")]=new Map,ef?.({ReactiveElement:An}),(Ui.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lo=globalThis,fl=e=>e,Si=Lo.trustedTypes,pl=Si?Si.createPolicy("lit-html",{createHTML:e=>e}):void 0,Jc="$lit$",Qt=`lit$${Math.random().toFixed(9).slice(2)}$`,Zc="?"+Qt,tf=`<${Zc}>`,gn=document,yr=()=>gn.createComment(""),vr=e=>e===null||typeof e!="object"&&typeof e!="function",Mo=Array.isArray,nf=e=>Mo(e)||typeof e?.[Symbol.iterator]=="function",Ys=`[ 	
\f\r]`,lr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ml=/-->/g,gl=/>/g,dn=RegExp(`>|${Ys}(?:([^\\s"'>=/]+)(${Ys}*=${Ys}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bl=/'/g,wl=/"/g,eu=/^(?:script|style|textarea|title)$/i,rf=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),C=rf(1),bn=Symbol.for("lit-noChange"),re=Symbol.for("lit-nothing"),yl=new WeakMap,mn=gn.createTreeWalker(gn,129);function tu(e,t){if(!Mo(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return pl!==void 0?pl.createHTML(t):t}const sf=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",o=lr;for(let l=0;l<n;l++){const u=e[l];let h,p,g=-1,w=0;for(;w<u.length&&(o.lastIndex=w,p=o.exec(u),p!==null);)w=o.lastIndex,o===lr?p[1]==="!--"?o=ml:p[1]!==void 0?o=gl:p[2]!==void 0?(eu.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=dn):p[3]!==void 0&&(o=dn):o===dn?p[0]===">"?(o=i??lr,g=-1):p[1]===void 0?g=-2:(g=o.lastIndex-p[2].length,h=p[1],o=p[3]===void 0?dn:p[3]==='"'?wl:bl):o===wl||o===bl?o=dn:o===ml||o===gl?o=lr:(o=dn,i=void 0);const y=o===dn&&e[l+1].startsWith("/>")?" ":"";s+=o===lr?u+tf:g>=0?(r.push(h),u.slice(0,g)+Jc+u.slice(g)+Qt+y):u+Qt+(g===-2?l:y)}return[tu(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class $r{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const l=t.length-1,u=this.parts,[h,p]=sf(t,n);if(this.el=$r.createElement(h,r),mn.currentNode=this.el.content,n===2||n===3){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(i=mn.nextNode())!==null&&u.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const g of i.getAttributeNames())if(g.endsWith(Jc)){const w=p[o++],y=i.getAttribute(g).split(Qt),$=/([.?@])?(.*)/.exec(w);u.push({type:1,index:s,name:$[2],strings:y,ctor:$[1]==="."?af:$[1]==="?"?lf:$[1]==="@"?cf:Fi}),i.removeAttribute(g)}else g.startsWith(Qt)&&(u.push({type:6,index:s}),i.removeAttribute(g));if(eu.test(i.tagName)){const g=i.textContent.split(Qt),w=g.length-1;if(w>0){i.textContent=Si?Si.emptyScript:"";for(let y=0;y<w;y++)i.append(g[y],yr()),mn.nextNode(),u.push({type:2,index:++s});i.append(g[w],yr())}}}else if(i.nodeType===8)if(i.data===Zc)u.push({type:2,index:s});else{let g=-1;for(;(g=i.data.indexOf(Qt,g+1))!==-1;)u.push({type:7,index:s}),g+=Qt.length-1}s++}}static createElement(t,n){const r=gn.createElement("template");return r.innerHTML=t,r}}function Dn(e,t,n=e,r){if(t===bn)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const s=vr(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=Dn(e,i._$AS(e,t.values),i,r)),t}class of{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??gn).importNode(n,!0);mn.currentNode=i;let s=mn.nextNode(),o=0,l=0,u=r[0];for(;u!==void 0;){if(o===u.index){let h;u.type===2?h=new Ir(s,s.nextSibling,this,t):u.type===1?h=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(h=new uf(s,this,t)),this._$AV.push(h),u=r[++l]}o!==u?.index&&(s=mn.nextNode(),o++)}return mn.currentNode=gn,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Ir{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=re,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Dn(this,t,n),vr(t)?t===re||t==null||t===""?(this._$AH!==re&&this._$AR(),this._$AH=re):t!==this._$AH&&t!==bn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):nf(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==re&&vr(this._$AH)?this._$AA.nextSibling.data=t:this.T(gn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=$r.createElement(tu(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const s=new of(i,this),o=s.u(this.options);s.p(n),this.T(o),this._$AH=s}}_$AC(t){let n=yl.get(t.strings);return n===void 0&&yl.set(t.strings,n=new $r(t)),n}k(t){Mo(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new Ir(this.O(yr()),this.O(yr()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=fl(t).nextSibling;fl(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Fi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,s){this.type=1,this._$AH=re,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=re}_$AI(t,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)t=Dn(this,t,n,0),o=!vr(t)||t!==this._$AH&&t!==bn,o&&(this._$AH=t);else{const l=t;let u,h;for(t=s[0],u=0;u<s.length-1;u++)h=Dn(this,l[r+u],n,u),h===bn&&(h=this._$AH[u]),o||=!vr(h)||h!==this._$AH[u],h===re?t=re:t!==re&&(t+=(h??"")+s[u+1]),this._$AH[u]=h}o&&!i&&this.j(t)}j(t){t===re?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class af extends Fi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===re?void 0:t}}class lf extends Fi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==re)}}class cf extends Fi{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){if((t=Dn(this,t,n,0)??re)===bn)return;const r=this._$AH,i=t===re&&r!==re||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==re&&(r===re||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class uf{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Dn(this,t)}}const df=Lo.litHtmlPolyfillSupport;df?.($r,Ir),(Lo.litHtmlVersions??=[]).push("3.3.3");const hf=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const s=n?.renderBefore??null;r._$litPart$=i=new Ir(t.insertBefore(yr(),s),s,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jo=globalThis;let ve=class extends An{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=hf(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return bn}};ve._$litElement$=!0,ve.finalized=!0,jo.litElementHydrateSupport?.({LitElement:ve});const ff=jo.litElementPolyfillSupport;ff?.({LitElement:ve});(jo.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pf={attribute:!0,type:String,converter:_i,reflect:!1,hasChanged:Po},mf=(e=pf,t,n)=>{const{kind:r,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(n.name,e),r==="accessor"){const{name:o}=n;return{set(l){const u=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,u,e,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,e,l),l}}}if(r==="setter"){const{name:o}=n;return function(l){const u=this[o];t.call(this,l),this.requestUpdate(o,u,e,!0,l)}}throw Error("Unsupported decorator location: "+r)};function ft(e){return(t,n)=>typeof n=="object"?mf(e,t,n):((r,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,r),o?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function B(e){return ft({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gf=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Pt(e,t){return(n,r,i)=>{const s=o=>o.renderRoot?.querySelector(e)??null;return gf(n,r,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bf={CHILD:2},nu=e=>(...t)=>({_$litDirective$:e,values:t});class wf{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ei extends wf{constructor(t){if(super(t),this.it=re,t.type!==bf.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===re||t==null)return this._t=void 0,this.it=t;if(t===bn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Ei.directiveName="unsafeHTML",Ei.resultType=1;const On=nu(Ei);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class uo extends Ei{}uo.directiveName="unsafeSVG",uo.resultType=2;const No=nu(uo);var yf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $i={exports:{}},$f=$i.exports,vl;function xf(){return vl||(vl=1,(function(e,t){(function(n,r){e.exports=r()})($f,function(){var n=function(a,c){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,f){d.__proto__=f}||function(d,f){for(var m in f)Object.prototype.hasOwnProperty.call(f,m)&&(d[m]=f[m])})(a,c)},r=function(){return(r=Object.assign||function(a){for(var c,d=1,f=arguments.length;d<f;d++)for(var m in c=arguments[d])Object.prototype.hasOwnProperty.call(c,m)&&(a[m]=c[m]);return a}).apply(this,arguments)};function i(a,c,d){for(var f,m=0,b=c.length;m<b;m++)!f&&m in c||((f=f||Array.prototype.slice.call(c,0,m))[m]=c[m]);return a.concat(f||Array.prototype.slice.call(c))}var s=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:yf,o=Object.keys,l=Array.isArray;function u(a,c){return typeof c!="object"||o(c).forEach(function(d){a[d]=c[d]}),a}typeof Promise>"u"||s.Promise||(s.Promise=Promise);var h=Object.getPrototypeOf,p={}.hasOwnProperty;function g(a,c){return p.call(a,c)}function w(a,c){typeof c=="function"&&(c=c(h(a))),(typeof Reflect>"u"?o:Reflect.ownKeys)(c).forEach(function(d){$(a,d,c[d])})}var y=Object.defineProperty;function $(a,c,d,f){y(a,c,u(d&&g(d,"get")&&typeof d.get=="function"?{get:d.get,set:d.set,configurable:!0}:{value:d,configurable:!0,writable:!0},f))}function x(a){return{from:function(c){return a.prototype=Object.create(c.prototype),$(a.prototype,"constructor",a),{extend:w.bind(null,a.prototype)}}}}var A=Object.getOwnPropertyDescriptor,L=[].slice;function M(a,c,d){return L.call(a,c,d)}function F(a,c){return c(a)}function K(a){if(!a)throw new Error("Assertion Failed")}function W(a){s.setImmediate?setImmediate(a):setTimeout(a,0)}function ie(a,c){if(typeof c=="string"&&g(a,c))return a[c];if(!c)return a;if(typeof c!="string"){for(var d=[],f=0,m=c.length;f<m;++f){var b=ie(a,c[f]);d.push(b)}return d}var v=c.indexOf(".");if(v!==-1){var k=a[c.substr(0,v)];return k==null?void 0:ie(k,c.substr(v+1))}}function q(a,c,d){if(a&&c!==void 0&&!("isFrozen"in Object&&Object.isFrozen(a)))if(typeof c!="string"&&"length"in c){K(typeof d!="string"&&"length"in d);for(var f=0,m=c.length;f<m;++f)q(a,c[f],d[f])}else{var b,v,k=c.indexOf(".");k!==-1?(b=c.substr(0,k),(v=c.substr(k+1))===""?d===void 0?l(a)&&!isNaN(parseInt(b))?a.splice(b,1):delete a[b]:a[b]=d:q(k=!(k=a[b])||!g(a,b)?a[b]={}:k,v,d)):d===void 0?l(a)&&!isNaN(parseInt(c))?a.splice(c,1):delete a[c]:a[c]=d}}function V(a){var c,d={};for(c in a)g(a,c)&&(d[c]=a[c]);return d}var ae=[].concat;function ee(a){return ae.apply([],a)}var Mt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ee([8,16,32,64].map(function(a){return["Int","Uint","Float"].map(function(c){return c+a+"Array"})}))).filter(function(a){return s[a]}),ce=new Set(Mt.map(function(a){return s[a]})),N=null;function Q(a){return N=new WeakMap,a=(function c(d){if(!d||typeof d!="object")return d;var f=N.get(d);if(f)return f;if(l(d)){f=[],N.set(d,f);for(var m=0,b=d.length;m<b;++m)f.push(c(d[m]))}else if(ce.has(d.constructor))f=d;else{var v,k=h(d);for(v in f=k===Object.prototype?{}:Object.create(k),N.set(d,f),d)g(d,v)&&(f[v]=c(d[v]))}return f})(a),N=null,a}var de={}.toString;function Ee(a){return de.call(a).slice(8,-1)}var ze=typeof Symbol<"u"?Symbol.iterator:"@@iterator",kt=typeof ze=="symbol"?function(a){var c;return a!=null&&(c=a[ze])&&c.apply(a)}:function(){return null};function fe(a,c){return c=a.indexOf(c),0<=c&&a.splice(c,1),0<=c}var Ue={};function Ae(a){var c,d,f,m;if(arguments.length===1){if(l(a))return a.slice();if(this===Ue&&typeof a=="string")return[a];if(m=kt(a)){for(d=[];!(f=m.next()).done;)d.push(f.value);return d}if(a==null)return[a];if(typeof(c=a.length)!="number")return[a];for(d=new Array(c);c--;)d[c]=a[c];return d}for(c=arguments.length,d=new Array(c);c--;)d[c]=arguments[c];return d}var Ye=typeof Symbol<"u"?function(a){return a[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Qn=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],wt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Qn),be={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Ke(a,c){this.name=a,this.message=c}function ds(a,c){return a+". Errors: "+Object.keys(c).map(function(d){return c[d].toString()}).filter(function(d,f,m){return m.indexOf(d)===f}).join(`
`)}function $n(a,c,d,f){this.failures=c,this.failedKeys=f,this.successCount=d,this.message=ds(a,c)}function xn(a,c){this.name="BulkError",this.failures=Object.keys(c).map(function(d){return c[d]}),this.failuresByPos=c,this.message=ds(a,this.failures)}x(Ke).from(Error).extend({toString:function(){return this.name+": "+this.message}}),x($n).from(Ke),x(xn).from(Ke);var hs=wt.reduce(function(a,c){return a[c]=c+"Error",a},{}),hh=Ke,ue=wt.reduce(function(a,c){var d=c+"Error";function f(m,b){this.name=d,m?typeof m=="string"?(this.message="".concat(m).concat(b?`
 `+b:""),this.inner=b||null):typeof m=="object"&&(this.message="".concat(m.name," ").concat(m.message),this.inner=m):(this.message=be[c]||d,this.inner=null)}return x(f).from(hh),a[c]=f,a},{});ue.Syntax=SyntaxError,ue.Type=TypeError,ue.Range=RangeError;var Ta=Qn.reduce(function(a,c){return a[c+"Error"]=ue[c],a},{}),Nr=wt.reduce(function(a,c){return["Syntax","Type","Range"].indexOf(c)===-1&&(a[c+"Error"]=ue[c]),a},{});function $e(){}function Gn(a){return a}function fh(a,c){return a==null||a===Gn?c:function(d){return c(a(d))}}function en(a,c){return function(){a.apply(this,arguments),c.apply(this,arguments)}}function ph(a,c){return a===$e?c:function(){var d=a.apply(this,arguments);d!==void 0&&(arguments[0]=d);var f=this.onsuccess,m=this.onerror;this.onsuccess=null,this.onerror=null;var b=c.apply(this,arguments);return f&&(this.onsuccess=this.onsuccess?en(f,this.onsuccess):f),m&&(this.onerror=this.onerror?en(m,this.onerror):m),b!==void 0?b:d}}function mh(a,c){return a===$e?c:function(){a.apply(this,arguments);var d=this.onsuccess,f=this.onerror;this.onsuccess=this.onerror=null,c.apply(this,arguments),d&&(this.onsuccess=this.onsuccess?en(d,this.onsuccess):d),f&&(this.onerror=this.onerror?en(f,this.onerror):f)}}function gh(a,c){return a===$e?c:function(d){var f=a.apply(this,arguments);u(d,f);var m=this.onsuccess,b=this.onerror;return this.onsuccess=null,this.onerror=null,d=c.apply(this,arguments),m&&(this.onsuccess=this.onsuccess?en(m,this.onsuccess):m),b&&(this.onerror=this.onerror?en(b,this.onerror):b),f===void 0?d===void 0?void 0:d:u(f,d)}}function bh(a,c){return a===$e?c:function(){return c.apply(this,arguments)!==!1&&a.apply(this,arguments)}}function fs(a,c){return a===$e?c:function(){var d=a.apply(this,arguments);if(d&&typeof d.then=="function"){for(var f=this,m=arguments.length,b=new Array(m);m--;)b[m]=arguments[m];return d.then(function(){return c.apply(f,b)})}return c.apply(this,arguments)}}Nr.ModifyError=$n,Nr.DexieError=Ke,Nr.BulkError=xn;var Et=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ia(a){Et=a}var Yn={},Aa=100,Mt=typeof Promise>"u"?[]:(function(){var a=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[a,h(a),a];var c=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[c,h(c),a]})(),Qn=Mt[0],wt=Mt[1],Mt=Mt[2],wt=wt&&wt.then,tn=Qn&&Qn.constructor,ps=!!Mt,Xn=function(a,c){Jn.push([a,c]),zr&&(queueMicrotask(yh),zr=!1)},ms=!0,zr=!0,nn=[],Ur=[],gs=Gn,Bt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:$e,pgp:!1,env:{},finalize:$e},le=Bt,Jn=[],rn=0,Fr=[];function ne(a){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var c=this._PSD=le;if(typeof a!="function"){if(a!==Yn)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&ws(this,this._value))}this._state=null,this._value=null,++c.ref,(function d(f,m){try{m(function(b){if(f._state===null){if(b===f)throw new TypeError("A promise cannot be resolved with itself.");var v=f._lib&&kn();b&&typeof b.then=="function"?d(f,function(k,S){b instanceof ne?b._then(k,S):b.then(k,S)}):(f._state=!0,f._value=b,Oa(f)),v&&Cn()}},ws.bind(null,f))}catch(b){ws(f,b)}})(this,a)}var bs={get:function(){var a=le,c=Kr;function d(f,m){var b=this,v=!a.global&&(a!==le||c!==Kr),k=v&&!Ht(),S=new ne(function(T,O){ys(b,new Ra(Pa(f,a,v,k),Pa(m,a,v,k),T,O,a))});return this._consoleTask&&(S._consoleTask=this._consoleTask),S}return d.prototype=Yn,d},set:function(a){$(this,"then",a&&a.prototype===Yn?bs:{get:function(){return a},set:bs.set})}};function Ra(a,c,d,f,m){this.onFulfilled=typeof a=="function"?a:null,this.onRejected=typeof c=="function"?c:null,this.resolve=d,this.reject=f,this.psd=m}function ws(a,c){var d,f;Ur.push(c),a._state===null&&(d=a._lib&&kn(),c=gs(c),a._state=!1,a._value=c,f=a,nn.some(function(m){return m._value===f._value})||nn.push(f),Oa(a),d&&Cn())}function Oa(a){var c=a._listeners;a._listeners=[];for(var d=0,f=c.length;d<f;++d)ys(a,c[d]);var m=a._PSD;--m.ref||m.finalize(),rn===0&&(++rn,Xn(function(){--rn==0&&vs()},[]))}function ys(a,c){if(a._state!==null){var d=a._state?c.onFulfilled:c.onRejected;if(d===null)return(a._state?c.resolve:c.reject)(a._value);++c.psd.ref,++rn,Xn(wh,[d,a,c])}else a._listeners.push(c)}function wh(a,c,d){try{var f,m=c._value;!c._state&&Ur.length&&(Ur=[]),f=Et&&c._consoleTask?c._consoleTask.run(function(){return a(m)}):a(m),c._state||Ur.indexOf(m)!==-1||(function(b){for(var v=nn.length;v;)if(nn[--v]._value===b._value)return nn.splice(v,1)})(c),d.resolve(f)}catch(b){d.reject(b)}finally{--rn==0&&vs(),--d.psd.ref||d.psd.finalize()}}function yh(){sn(Bt,function(){kn()&&Cn()})}function kn(){var a=ms;return zr=ms=!1,a}function Cn(){var a,c,d;do for(;0<Jn.length;)for(a=Jn,Jn=[],d=a.length,c=0;c<d;++c){var f=a[c];f[0].apply(null,f[1])}while(0<Jn.length);zr=ms=!0}function vs(){var a=nn;nn=[],a.forEach(function(f){f._PSD.onunhandled.call(null,f._value,f)});for(var c=Fr.slice(0),d=c.length;d;)c[--d]()}function Br(a){return new ne(Yn,!1,a)}function Te(a,c){var d=le;return function(){var f=kn(),m=le;try{return Kt(d,!0),a.apply(this,arguments)}catch(b){c&&c(b)}finally{Kt(m,!1),f&&Cn()}}}w(ne.prototype,{then:bs,_then:function(a,c){ys(this,new Ra(null,null,a,c,le))},catch:function(a){if(arguments.length===1)return this.then(null,a);var c=a,d=arguments[1];return typeof c=="function"?this.then(null,function(f){return(f instanceof c?d:Br)(f)}):this.then(null,function(f){return(f&&f.name===c?d:Br)(f)})},finally:function(a){return this.then(function(c){return ne.resolve(a()).then(function(){return c})},function(c){return ne.resolve(a()).then(function(){return Br(c)})})},timeout:function(a,c){var d=this;return a<1/0?new ne(function(f,m){var b=setTimeout(function(){return m(new ue.Timeout(c))},a);d.then(f,m).finally(clearTimeout.bind(null,b))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&$(ne.prototype,Symbol.toStringTag,"Dexie.Promise"),Bt.env=Da(),w(ne,{all:function(){var a=Ae.apply(null,arguments).map(Vr);return new ne(function(c,d){a.length===0&&c([]);var f=a.length;a.forEach(function(m,b){return ne.resolve(m).then(function(v){a[b]=v,--f||c(a)},d)})})},resolve:function(a){return a instanceof ne?a:a&&typeof a.then=="function"?new ne(function(c,d){a.then(c,d)}):new ne(Yn,!0,a)},reject:Br,race:function(){var a=Ae.apply(null,arguments).map(Vr);return new ne(function(c,d){a.map(function(f){return ne.resolve(f).then(c,d)})})},PSD:{get:function(){return le},set:function(a){return le=a}},totalEchoes:{get:function(){return Kr}},newPSD:qt,usePSD:sn,scheduler:{get:function(){return Xn},set:function(a){Xn=a}},rejectionMapper:{get:function(){return gs},set:function(a){gs=a}},follow:function(a,c){return new ne(function(d,f){return qt(function(m,b){var v=le;v.unhandleds=[],v.onunhandled=b,v.finalize=en(function(){var k,S=this;k=function(){S.unhandleds.length===0?m():b(S.unhandleds[0])},Fr.push(function T(){k(),Fr.splice(Fr.indexOf(T),1)}),++rn,Xn(function(){--rn==0&&vs()},[])},v.finalize),a()},c,d,f)})}}),tn&&(tn.allSettled&&$(ne,"allSettled",function(){var a=Ae.apply(null,arguments).map(Vr);return new ne(function(c){a.length===0&&c([]);var d=a.length,f=new Array(d);a.forEach(function(m,b){return ne.resolve(m).then(function(v){return f[b]={status:"fulfilled",value:v}},function(v){return f[b]={status:"rejected",reason:v}}).then(function(){return--d||c(f)})})})}),tn.any&&typeof AggregateError<"u"&&$(ne,"any",function(){var a=Ae.apply(null,arguments).map(Vr);return new ne(function(c,d){a.length===0&&d(new AggregateError([]));var f=a.length,m=new Array(f);a.forEach(function(b,v){return ne.resolve(b).then(function(k){return c(k)},function(k){m[v]=k,--f||d(new AggregateError(m))})})})}),tn.withResolvers&&(ne.withResolvers=tn.withResolvers));var Le={awaits:0,echoes:0,id:0},vh=0,qr=[],Hr=0,Kr=0,$h=0;function qt(a,c,d,f){var m=le,b=Object.create(m);return b.parent=m,b.ref=0,b.global=!1,b.id=++$h,Bt.env,b.env=ps?{Promise:ne,PromiseProp:{value:ne,configurable:!0,writable:!0},all:ne.all,race:ne.race,allSettled:ne.allSettled,any:ne.any,resolve:ne.resolve,reject:ne.reject}:{},c&&u(b,c),++m.ref,b.finalize=function(){--this.parent.ref||this.parent.finalize()},f=sn(b,a,d,f),b.ref===0&&b.finalize(),f}function _n(){return Le.id||(Le.id=++vh),++Le.awaits,Le.echoes+=Aa,Le.id}function Ht(){return!!Le.awaits&&(--Le.awaits==0&&(Le.id=0),Le.echoes=Le.awaits*Aa,!0)}function Vr(a){return Le.echoes&&a&&a.constructor===tn?(_n(),a.then(function(c){return Ht(),c},function(c){return Ht(),Re(c)})):a}function xh(){var a=qr[qr.length-1];qr.pop(),Kt(a,!1)}function Kt(a,c){var d,f=le;(c?!Le.echoes||Hr++&&a===le:!Hr||--Hr&&a===le)||queueMicrotask(c?function(m){++Kr,Le.echoes&&--Le.echoes!=0||(Le.echoes=Le.awaits=Le.id=0),qr.push(le),Kt(m,!0)}.bind(null,a):xh),a!==le&&(le=a,f===Bt&&(Bt.env=Da()),ps&&(d=Bt.env.Promise,c=a.env,(f.global||a.global)&&(Object.defineProperty(s,"Promise",c.PromiseProp),d.all=c.all,d.race=c.race,d.resolve=c.resolve,d.reject=c.reject,c.allSettled&&(d.allSettled=c.allSettled),c.any&&(d.any=c.any))))}function Da(){var a=s.Promise;return ps?{Promise:a,PromiseProp:Object.getOwnPropertyDescriptor(s,"Promise"),all:a.all,race:a.race,allSettled:a.allSettled,any:a.any,resolve:a.resolve,reject:a.reject}:{}}function sn(a,c,d,f,m){var b=le;try{return Kt(a,!0),c(d,f,m)}finally{Kt(b,!1)}}function Pa(a,c,d,f){return typeof a!="function"?a:function(){var m=le;d&&_n(),Kt(c,!0);try{return a.apply(this,arguments)}finally{Kt(m,!1),f&&queueMicrotask(Ht)}}}function $s(a){Promise===tn&&Le.echoes===0?Hr===0?a():enqueueNativeMicroTask(a):setTimeout(a,0)}(""+wt).indexOf("[native code]")===-1&&(_n=Ht=$e);var Re=ne.reject,on="￿",Lt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",La="String expected.",Sn=[],Wr="__dbnames",xs="readonly",ks="readwrite";function an(a,c){return a?c?function(){return a.apply(this,arguments)&&c.apply(this,arguments)}:a:c}var Ma={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Gr(a){return typeof a!="string"||/\./.test(a)?function(c){return c}:function(c){return c[a]===void 0&&a in c&&delete(c=Q(c))[a],c}}function ja(){throw ue.Type()}function we(a,c){try{var d=Na(a),f=Na(c);if(d!==f)return d==="Array"?1:f==="Array"?-1:d==="binary"?1:f==="binary"?-1:d==="string"?1:f==="string"?-1:d==="Date"?1:f!=="Date"?NaN:-1;switch(d){case"number":case"Date":case"string":return c<a?1:a<c?-1:0;case"binary":return(function(m,b){for(var v=m.length,k=b.length,S=v<k?v:k,T=0;T<S;++T)if(m[T]!==b[T])return m[T]<b[T]?-1:1;return v===k?0:v<k?-1:1})(za(a),za(c));case"Array":return(function(m,b){for(var v=m.length,k=b.length,S=v<k?v:k,T=0;T<S;++T){var O=we(m[T],b[T]);if(O!==0)return O}return v===k?0:v<k?-1:1})(a,c)}}catch{}return NaN}function Na(a){var c=typeof a;return c!="object"?c:ArrayBuffer.isView(a)?"binary":(a=Ee(a),a==="ArrayBuffer"?"binary":a)}function za(a){return a instanceof Uint8Array?a:ArrayBuffer.isView(a)?new Uint8Array(a.buffer,a.byteOffset,a.byteLength):new Uint8Array(a)}var Ua=(Ce.prototype._trans=function(a,c,d){var f=this._tx||le.trans,m=this.name,b=Et&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(a==="readonly"?"read":"write"," ").concat(this.name));function v(T,O,_){if(!_.schema[m])throw new ue.NotFound("Table "+m+" not part of transaction");return c(_.idbtrans,_)}var k=kn();try{var S=f&&f.db._novip===this.db._novip?f===le.trans?f._promise(a,v,d):qt(function(){return f._promise(a,v,d)},{trans:f,transless:le.transless||le}):(function T(O,_,P,E){if(O.idbdb&&(O._state.openComplete||le.letThrough||O._vip)){var R=O._createTransaction(_,P,O._dbSchema);try{R.create(),O._state.PR1398_maxLoop=3}catch(D){return D.name===hs.InvalidState&&O.isOpen()&&0<--O._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),O.close({disableAutoOpen:!1}),O.open().then(function(){return T(O,_,P,E)})):Re(D)}return R._promise(_,function(D,I){return qt(function(){return le.trans=R,E(D,I,R)})}).then(function(D){if(_==="readwrite")try{R.idbtrans.commit()}catch{}return _==="readonly"?D:R._completion.then(function(){return D})})}if(O._state.openComplete)return Re(new ue.DatabaseClosed(O._state.dbOpenError));if(!O._state.isBeingOpened){if(!O._state.autoOpen)return Re(new ue.DatabaseClosed);O.open().catch($e)}return O._state.dbReadyPromise.then(function(){return T(O,_,P,E)})})(this.db,a,[this.name],v);return b&&(S._consoleTask=b,S=S.catch(function(T){return console.trace(T),Re(T)})),S}finally{k&&Cn()}},Ce.prototype.get=function(a,c){var d=this;return a&&a.constructor===Object?this.where(a).first(c):a==null?Re(new ue.Type("Invalid argument to Table.get()")):this._trans("readonly",function(f){return d.core.get({trans:f,key:a}).then(function(m){return d.hook.reading.fire(m)})}).then(c)},Ce.prototype.where=function(a){if(typeof a=="string")return new this.db.WhereClause(this,a);if(l(a))return new this.db.WhereClause(this,"[".concat(a.join("+"),"]"));var c=o(a);if(c.length===1)return this.where(c[0]).equals(a[c[0]]);var d=this.schema.indexes.concat(this.schema.primKey).filter(function(k){if(k.compound&&c.every(function(T){return 0<=k.keyPath.indexOf(T)})){for(var S=0;S<c.length;++S)if(c.indexOf(k.keyPath[S])===-1)return!1;return!0}return!1}).sort(function(k,S){return k.keyPath.length-S.keyPath.length})[0];if(d&&this.db._maxKey!==on){var b=d.keyPath.slice(0,c.length);return this.where(b).equals(b.map(function(S){return a[S]}))}!d&&Et&&console.warn("The query ".concat(JSON.stringify(a)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(c.join("+"),"]"));var f=this.schema.idxByName;function m(k,S){return we(k,S)===0}var v=c.reduce(function(_,S){var T=_[0],O=_[1],_=f[S],P=a[S];return[T||_,T||!_?an(O,_&&_.multi?function(E){return E=ie(E,S),l(E)&&E.some(function(R){return m(P,R)})}:function(E){return m(P,ie(E,S))}):O]},[null,null]),b=v[0],v=v[1];return b?this.where(b.name).equals(a[b.keyPath]).filter(v):d?this.filter(v):this.where(c).equals("")},Ce.prototype.filter=function(a){return this.toCollection().and(a)},Ce.prototype.count=function(a){return this.toCollection().count(a)},Ce.prototype.offset=function(a){return this.toCollection().offset(a)},Ce.prototype.limit=function(a){return this.toCollection().limit(a)},Ce.prototype.each=function(a){return this.toCollection().each(a)},Ce.prototype.toArray=function(a){return this.toCollection().toArray(a)},Ce.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ce.prototype.orderBy=function(a){return new this.db.Collection(new this.db.WhereClause(this,l(a)?"[".concat(a.join("+"),"]"):a))},Ce.prototype.reverse=function(){return this.toCollection().reverse()},Ce.prototype.mapToClass=function(a){var c,d=this.db,f=this.name;function m(){return c!==null&&c.apply(this,arguments)||this}(this.schema.mappedClass=a).prototype instanceof ja&&((function(S,T){if(typeof T!="function"&&T!==null)throw new TypeError("Class extends value "+String(T)+" is not a constructor or null");function O(){this.constructor=S}n(S,T),S.prototype=T===null?Object.create(T):(O.prototype=T.prototype,new O)})(m,c=a),Object.defineProperty(m.prototype,"db",{get:function(){return d},enumerable:!1,configurable:!0}),m.prototype.table=function(){return f},a=m);for(var b=new Set,v=a.prototype;v;v=h(v))Object.getOwnPropertyNames(v).forEach(function(S){return b.add(S)});function k(S){if(!S)return S;var T,O=Object.create(a.prototype);for(T in S)if(!b.has(T))try{O[T]=S[T]}catch{}return O}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=k,this.hook("reading",k),a},Ce.prototype.defineClass=function(){return this.mapToClass(function(a){u(this,a)})},Ce.prototype.add=function(a,c){var d=this,f=this.schema.primKey,m=f.auto,b=f.keyPath,v=a;return b&&m&&(v=Gr(b)(a)),this._trans("readwrite",function(k){return d.core.mutate({trans:k,type:"add",keys:c!=null?[c]:null,values:[v]})}).then(function(k){return k.numFailures?ne.reject(k.failures[0]):k.lastResult}).then(function(k){if(b)try{q(a,b,k)}catch{}return k})},Ce.prototype.update=function(a,c){return typeof a!="object"||l(a)?this.where(":id").equals(a).modify(c):(a=ie(a,this.schema.primKey.keyPath),a===void 0?Re(new ue.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(a).modify(c))},Ce.prototype.put=function(a,c){var d=this,f=this.schema.primKey,m=f.auto,b=f.keyPath,v=a;return b&&m&&(v=Gr(b)(a)),this._trans("readwrite",function(k){return d.core.mutate({trans:k,type:"put",values:[v],keys:c!=null?[c]:null})}).then(function(k){return k.numFailures?ne.reject(k.failures[0]):k.lastResult}).then(function(k){if(b)try{q(a,b,k)}catch{}return k})},Ce.prototype.delete=function(a){var c=this;return this._trans("readwrite",function(d){return c.core.mutate({trans:d,type:"delete",keys:[a]})}).then(function(d){return d.numFailures?ne.reject(d.failures[0]):void 0})},Ce.prototype.clear=function(){var a=this;return this._trans("readwrite",function(c){return a.core.mutate({trans:c,type:"deleteRange",range:Ma})}).then(function(c){return c.numFailures?ne.reject(c.failures[0]):void 0})},Ce.prototype.bulkGet=function(a){var c=this;return this._trans("readonly",function(d){return c.core.getMany({keys:a,trans:d}).then(function(f){return f.map(function(m){return c.hook.reading.fire(m)})})})},Ce.prototype.bulkAdd=function(a,c,d){var f=this,m=Array.isArray(c)?c:void 0,b=(d=d||(m?void 0:c))?d.allKeys:void 0;return this._trans("readwrite",function(v){var T=f.schema.primKey,k=T.auto,T=T.keyPath;if(T&&m)throw new ue.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(m&&m.length!==a.length)throw new ue.InvalidArgument("Arguments objects and keys must have the same length");var S=a.length,T=T&&k?a.map(Gr(T)):a;return f.core.mutate({trans:v,type:"add",keys:m,values:T,wantResults:b}).then(function(R){var _=R.numFailures,P=R.results,E=R.lastResult,R=R.failures;if(_===0)return b?P:E;throw new xn("".concat(f.name,".bulkAdd(): ").concat(_," of ").concat(S," operations failed"),R)})})},Ce.prototype.bulkPut=function(a,c,d){var f=this,m=Array.isArray(c)?c:void 0,b=(d=d||(m?void 0:c))?d.allKeys:void 0;return this._trans("readwrite",function(v){var T=f.schema.primKey,k=T.auto,T=T.keyPath;if(T&&m)throw new ue.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(m&&m.length!==a.length)throw new ue.InvalidArgument("Arguments objects and keys must have the same length");var S=a.length,T=T&&k?a.map(Gr(T)):a;return f.core.mutate({trans:v,type:"put",keys:m,values:T,wantResults:b}).then(function(R){var _=R.numFailures,P=R.results,E=R.lastResult,R=R.failures;if(_===0)return b?P:E;throw new xn("".concat(f.name,".bulkPut(): ").concat(_," of ").concat(S," operations failed"),R)})})},Ce.prototype.bulkUpdate=function(a){var c=this,d=this.core,f=a.map(function(v){return v.key}),m=a.map(function(v){return v.changes}),b=[];return this._trans("readwrite",function(v){return d.getMany({trans:v,keys:f,cache:"clone"}).then(function(k){var S=[],T=[];a.forEach(function(_,P){var E=_.key,R=_.changes,D=k[P];if(D){for(var I=0,j=Object.keys(R);I<j.length;I++){var z=j[I],U=R[z];if(z===c.schema.primKey.keyPath){if(we(U,E)!==0)throw new ue.Constraint("Cannot update primary key in bulkUpdate()")}else q(D,z,U)}b.push(P),S.push(E),T.push(D)}});var O=S.length;return d.mutate({trans:v,type:"put",keys:S,values:T,updates:{keys:f,changeSpecs:m}}).then(function(_){var P=_.numFailures,E=_.failures;if(P===0)return O;for(var R=0,D=Object.keys(E);R<D.length;R++){var I,j=D[R],z=b[Number(j)];z!=null&&(I=E[j],delete E[j],E[z]=I)}throw new xn("".concat(c.name,".bulkUpdate(): ").concat(P," of ").concat(O," operations failed"),E)})})})},Ce.prototype.bulkDelete=function(a){var c=this,d=a.length;return this._trans("readwrite",function(f){return c.core.mutate({trans:f,type:"delete",keys:a})}).then(function(v){var m=v.numFailures,b=v.lastResult,v=v.failures;if(m===0)return b;throw new xn("".concat(c.name,".bulkDelete(): ").concat(m," of ").concat(d," operations failed"),v)})},Ce);function Ce(){}function Zn(a){function c(v,k){if(k){for(var S=arguments.length,T=new Array(S-1);--S;)T[S-1]=arguments[S];return d[v].subscribe.apply(null,T),a}if(typeof v=="string")return d[v]}var d={};c.addEventType=b;for(var f=1,m=arguments.length;f<m;++f)b(arguments[f]);return c;function b(v,k,S){if(typeof v!="object"){var T;k=k||bh;var O={subscribers:[],fire:S=S||$e,subscribe:function(_){O.subscribers.indexOf(_)===-1&&(O.subscribers.push(_),O.fire=k(O.fire,_))},unsubscribe:function(_){O.subscribers=O.subscribers.filter(function(P){return P!==_}),O.fire=O.subscribers.reduce(k,S)}};return d[v]=c[v]=O}o(T=v).forEach(function(_){var P=T[_];if(l(P))b(_,T[_][0],T[_][1]);else{if(P!=="asap")throw new ue.InvalidArgument("Invalid event config");var E=b(_,Gn,function(){for(var R=arguments.length,D=new Array(R);R--;)D[R]=arguments[R];E.subscribers.forEach(function(I){W(function(){I.apply(null,D)})})})}})}}function er(a,c){return x(c).from({prototype:a}),c}function En(a,c){return!(a.filter||a.algorithm||a.or)&&(c?a.justLimit:!a.replayFilter)}function Cs(a,c){a.filter=an(a.filter,c)}function _s(a,c,d){var f=a.replayFilter;a.replayFilter=f?function(){return an(f(),c())}:c,a.justLimit=d&&!f}function Yr(a,c){if(a.isPrimKey)return c.primaryKey;var d=c.getIndexByKeyPath(a.index);if(!d)throw new ue.Schema("KeyPath "+a.index+" on object store "+c.name+" is not indexed");return d}function Fa(a,c,d){var f=Yr(a,c.schema);return c.openCursor({trans:d,values:!a.keysOnly,reverse:a.dir==="prev",unique:!!a.unique,query:{index:f,range:a.range}})}function Qr(a,c,d,f){var m=a.replayFilter?an(a.filter,a.replayFilter()):a.filter;if(a.or){var b={},v=function(k,S,T){var O,_;m&&!m(S,T,function(P){return S.stop(P)},function(P){return S.fail(P)})||((_=""+(O=S.primaryKey))=="[object ArrayBuffer]"&&(_=""+new Uint8Array(O)),g(b,_)||(b[_]=!0,c(k,S,T)))};return Promise.all([a.or._iterate(v,d),Ba(Fa(a,f,d),a.algorithm,v,!a.keysOnly&&a.valueMapper)])}return Ba(Fa(a,f,d),an(a.algorithm,m),c,!a.keysOnly&&a.valueMapper)}function Ba(a,c,d,f){var m=Te(f?function(b,v,k){return d(f(b),v,k)}:d);return a.then(function(b){if(b)return b.start(function(){var v=function(){return b.continue()};c&&!c(b,function(k){return v=k},function(k){b.stop(k),v=$e},function(k){b.fail(k),v=$e})||m(b.value,b,function(k){return v=k}),v()})})}var Mt=Symbol(),tr=(qa.prototype.execute=function(a){if(this.add!==void 0){var c=this.add;if(l(c))return i(i([],l(a)?a:[],!0),c).sort();if(typeof c=="number")return(Number(a)||0)+c;if(typeof c=="bigint")try{return BigInt(a)+c}catch{return BigInt(0)+c}throw new TypeError("Invalid term ".concat(c))}if(this.remove!==void 0){var d=this.remove;if(l(d))return l(a)?a.filter(function(f){return!d.includes(f)}).sort():[];if(typeof d=="number")return Number(a)-d;if(typeof d=="bigint")try{return BigInt(a)-d}catch{return BigInt(0)-d}throw new TypeError("Invalid subtrahend ".concat(d))}return c=(c=this.replacePrefix)===null||c===void 0?void 0:c[0],c&&typeof a=="string"&&a.startsWith(c)?this.replacePrefix[1]+a.substring(c.length):a},qa);function qa(a){Object.assign(this,a)}var kh=(ye.prototype._read=function(a,c){var d=this._ctx;return d.error?d.table._trans(null,Re.bind(null,d.error)):d.table._trans("readonly",a).then(c)},ye.prototype._write=function(a){var c=this._ctx;return c.error?c.table._trans(null,Re.bind(null,c.error)):c.table._trans("readwrite",a,"locked")},ye.prototype._addAlgorithm=function(a){var c=this._ctx;c.algorithm=an(c.algorithm,a)},ye.prototype._iterate=function(a,c){return Qr(this._ctx,a,c,this._ctx.table.core)},ye.prototype.clone=function(a){var c=Object.create(this.constructor.prototype),d=Object.create(this._ctx);return a&&u(d,a),c._ctx=d,c},ye.prototype.raw=function(){return this._ctx.valueMapper=null,this},ye.prototype.each=function(a){var c=this._ctx;return this._read(function(d){return Qr(c,a,d,c.table.core)})},ye.prototype.count=function(a){var c=this;return this._read(function(d){var f=c._ctx,m=f.table.core;if(En(f,!0))return m.count({trans:d,query:{index:Yr(f,m.schema),range:f.range}}).then(function(v){return Math.min(v,f.limit)});var b=0;return Qr(f,function(){return++b,!1},d,m).then(function(){return b})}).then(a)},ye.prototype.sortBy=function(a,c){var d=a.split(".").reverse(),f=d[0],m=d.length-1;function b(S,T){return T?b(S[d[T]],T-1):S[f]}var v=this._ctx.dir==="next"?1:-1;function k(S,T){return we(b(S,m),b(T,m))*v}return this.toArray(function(S){return S.sort(k)}).then(c)},ye.prototype.toArray=function(a){var c=this;return this._read(function(d){var f=c._ctx;if(f.dir==="next"&&En(f,!0)&&0<f.limit){var m=f.valueMapper,b=Yr(f,f.table.core.schema);return f.table.core.query({trans:d,limit:f.limit,values:!0,query:{index:b,range:f.range}}).then(function(k){return k=k.result,m?k.map(m):k})}var v=[];return Qr(f,function(k){return v.push(k)},d,f.table.core).then(function(){return v})},a)},ye.prototype.offset=function(a){var c=this._ctx;return a<=0||(c.offset+=a,En(c)?_s(c,function(){var d=a;return function(f,m){return d===0||(d===1?--d:m(function(){f.advance(d),d=0}),!1)}}):_s(c,function(){var d=a;return function(){return--d<0}})),this},ye.prototype.limit=function(a){return this._ctx.limit=Math.min(this._ctx.limit,a),_s(this._ctx,function(){var c=a;return function(d,f,m){return--c<=0&&f(m),0<=c}},!0),this},ye.prototype.until=function(a,c){return Cs(this._ctx,function(d,f,m){return!a(d.value)||(f(m),c)}),this},ye.prototype.first=function(a){return this.limit(1).toArray(function(c){return c[0]}).then(a)},ye.prototype.last=function(a){return this.reverse().first(a)},ye.prototype.filter=function(a){var c;return Cs(this._ctx,function(d){return a(d.value)}),(c=this._ctx).isMatch=an(c.isMatch,a),this},ye.prototype.and=function(a){return this.filter(a)},ye.prototype.or=function(a){return new this.db.WhereClause(this._ctx.table,a,this)},ye.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},ye.prototype.desc=function(){return this.reverse()},ye.prototype.eachKey=function(a){var c=this._ctx;return c.keysOnly=!c.isMatch,this.each(function(d,f){a(f.key,f)})},ye.prototype.eachUniqueKey=function(a){return this._ctx.unique="unique",this.eachKey(a)},ye.prototype.eachPrimaryKey=function(a){var c=this._ctx;return c.keysOnly=!c.isMatch,this.each(function(d,f){a(f.primaryKey,f)})},ye.prototype.keys=function(a){var c=this._ctx;c.keysOnly=!c.isMatch;var d=[];return this.each(function(f,m){d.push(m.key)}).then(function(){return d}).then(a)},ye.prototype.primaryKeys=function(a){var c=this._ctx;if(c.dir==="next"&&En(c,!0)&&0<c.limit)return this._read(function(f){var m=Yr(c,c.table.core.schema);return c.table.core.query({trans:f,values:!1,limit:c.limit,query:{index:m,range:c.range}})}).then(function(f){return f.result}).then(a);c.keysOnly=!c.isMatch;var d=[];return this.each(function(f,m){d.push(m.primaryKey)}).then(function(){return d}).then(a)},ye.prototype.uniqueKeys=function(a){return this._ctx.unique="unique",this.keys(a)},ye.prototype.firstKey=function(a){return this.limit(1).keys(function(c){return c[0]}).then(a)},ye.prototype.lastKey=function(a){return this.reverse().firstKey(a)},ye.prototype.distinct=function(){var a=this._ctx,a=a.index&&a.table.schema.idxByName[a.index];if(!a||!a.multi)return this;var c={};return Cs(this._ctx,function(m){var f=m.primaryKey.toString(),m=g(c,f);return c[f]=!0,!m}),this},ye.prototype.modify=function(a){var c=this,d=this._ctx;return this._write(function(f){var m,b,v;v=typeof a=="function"?a:(m=o(a),b=m.length,function(I){for(var j=!1,z=0;z<b;++z){var U=m[z],H=a[U],G=ie(I,U);H instanceof tr?(q(I,U,H.execute(G)),j=!0):G!==H&&(q(I,U,H),j=!0)}return j});var k=d.table.core,_=k.schema.primaryKey,S=_.outbound,T=_.extractKey,O=200,_=c.db._options.modifyChunkSize;_&&(O=typeof _=="object"?_[k.name]||_["*"]||200:_);function P(I,U){var z=U.failures,U=U.numFailures;R+=I-U;for(var H=0,G=o(z);H<G.length;H++){var Z=G[H];E.push(z[Z])}}var E=[],R=0,D=[];return c.clone().primaryKeys().then(function(I){function j(U){var H=Math.min(O,I.length-U);return k.getMany({trans:f,keys:I.slice(U,U+H),cache:"immutable"}).then(function(G){for(var Z=[],Y=[],X=S?[]:null,te=[],J=0;J<H;++J){var se=G[J],pe={value:Q(se),primKey:I[U+J]};v.call(pe,pe.value,pe)!==!1&&(pe.value==null?te.push(I[U+J]):S||we(T(se),T(pe.value))===0?(Y.push(pe.value),S&&X.push(I[U+J])):(te.push(I[U+J]),Z.push(pe.value)))}return Promise.resolve(0<Z.length&&k.mutate({trans:f,type:"add",values:Z}).then(function(me){for(var ge in me.failures)te.splice(parseInt(ge),1);P(Z.length,me)})).then(function(){return(0<Y.length||z&&typeof a=="object")&&k.mutate({trans:f,type:"put",keys:X,values:Y,criteria:z,changeSpec:typeof a!="function"&&a,isAdditionalChunk:0<U}).then(function(me){return P(Y.length,me)})}).then(function(){return(0<te.length||z&&a===Ss)&&k.mutate({trans:f,type:"delete",keys:te,criteria:z,isAdditionalChunk:0<U}).then(function(me){return P(te.length,me)})}).then(function(){return I.length>U+H&&j(U+O)})})}var z=En(d)&&d.limit===1/0&&(typeof a!="function"||a===Ss)&&{index:d.index,range:d.range};return j(0).then(function(){if(0<E.length)throw new $n("Error modifying one or more objects",E,R,D);return I.length})})})},ye.prototype.delete=function(){var a=this._ctx,c=a.range;return En(a)&&(a.isPrimKey||c.type===3)?this._write(function(d){var f=a.table.core.schema.primaryKey,m=c;return a.table.core.count({trans:d,query:{index:f,range:m}}).then(function(b){return a.table.core.mutate({trans:d,type:"deleteRange",range:m}).then(function(v){var k=v.failures;if(v.lastResult,v.results,v=v.numFailures,v)throw new $n("Could not delete some values",Object.keys(k).map(function(S){return k[S]}),b-v);return b-v})})}):this.modify(Ss)},ye);function ye(){}var Ss=function(a,c){return c.value=null};function Ch(a,c){return a<c?-1:a===c?0:1}function _h(a,c){return c<a?-1:a===c?0:1}function nt(a,c,d){return a=a instanceof Ka?new a.Collection(a):a,a._ctx.error=new(d||TypeError)(c),a}function Tn(a){return new a.Collection(a,function(){return Ha("")}).limit(0)}function Xr(a,c,d,f){var m,b,v,k,S,T,O,_=d.length;if(!d.every(function(R){return typeof R=="string"}))return nt(a,La);function P(R){m=R==="next"?function(I){return I.toUpperCase()}:function(I){return I.toLowerCase()},b=R==="next"?function(I){return I.toLowerCase()}:function(I){return I.toUpperCase()},v=R==="next"?Ch:_h;var D=d.map(function(I){return{lower:b(I),upper:m(I)}}).sort(function(I,j){return v(I.lower,j.lower)});k=D.map(function(I){return I.upper}),S=D.map(function(I){return I.lower}),O=(T=R)==="next"?"":f}P("next"),a=new a.Collection(a,function(){return Vt(k[0],S[_-1]+f)}),a._ondirectionchange=function(R){P(R)};var E=0;return a._addAlgorithm(function(R,D,I){var j=R.key;if(typeof j!="string")return!1;var z=b(j);if(c(z,S,E))return!0;for(var U=null,H=E;H<_;++H){var G=(function(Z,Y,X,te,J,se){for(var pe=Math.min(Z.length,te.length),me=-1,ge=0;ge<pe;++ge){var rt=Y[ge];if(rt!==te[ge])return J(Z[ge],X[ge])<0?Z.substr(0,ge)+X[ge]+X.substr(ge+1):J(Z[ge],te[ge])<0?Z.substr(0,ge)+te[ge]+X.substr(ge+1):0<=me?Z.substr(0,me)+Y[me]+X.substr(me+1):null;J(Z[ge],rt)<0&&(me=ge)}return pe<te.length&&se==="next"?Z+X.substr(Z.length):pe<Z.length&&se==="prev"?Z.substr(0,X.length):me<0?null:Z.substr(0,me)+te[me]+X.substr(me+1)})(j,z,k[H],S[H],v,T);G===null&&U===null?E=H+1:(U===null||0<v(U,G))&&(U=G)}return D(U!==null?function(){R.continue(U+O)}:I),!1}),a}function Vt(a,c,d,f){return{type:2,lower:a,upper:c,lowerOpen:d,upperOpen:f}}function Ha(a){return{type:1,lower:a,upper:a}}var Ka=(Object.defineProperty(Me.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),Me.prototype.between=function(a,c,d,f){d=d!==!1,f=f===!0;try{return 0<this._cmp(a,c)||this._cmp(a,c)===0&&(d||f)&&(!d||!f)?Tn(this):new this.Collection(this,function(){return Vt(a,c,!d,!f)})}catch{return nt(this,Lt)}},Me.prototype.equals=function(a){return a==null?nt(this,Lt):new this.Collection(this,function(){return Ha(a)})},Me.prototype.above=function(a){return a==null?nt(this,Lt):new this.Collection(this,function(){return Vt(a,void 0,!0)})},Me.prototype.aboveOrEqual=function(a){return a==null?nt(this,Lt):new this.Collection(this,function(){return Vt(a,void 0,!1)})},Me.prototype.below=function(a){return a==null?nt(this,Lt):new this.Collection(this,function(){return Vt(void 0,a,!1,!0)})},Me.prototype.belowOrEqual=function(a){return a==null?nt(this,Lt):new this.Collection(this,function(){return Vt(void 0,a)})},Me.prototype.startsWith=function(a){return typeof a!="string"?nt(this,La):this.between(a,a+on,!0,!0)},Me.prototype.startsWithIgnoreCase=function(a){return a===""?this.startsWith(a):Xr(this,function(c,d){return c.indexOf(d[0])===0},[a],on)},Me.prototype.equalsIgnoreCase=function(a){return Xr(this,function(c,d){return c===d[0]},[a],"")},Me.prototype.anyOfIgnoreCase=function(){var a=Ae.apply(Ue,arguments);return a.length===0?Tn(this):Xr(this,function(c,d){return d.indexOf(c)!==-1},a,"")},Me.prototype.startsWithAnyOfIgnoreCase=function(){var a=Ae.apply(Ue,arguments);return a.length===0?Tn(this):Xr(this,function(c,d){return d.some(function(f){return c.indexOf(f)===0})},a,on)},Me.prototype.anyOf=function(){var a=this,c=Ae.apply(Ue,arguments),d=this._cmp;try{c.sort(d)}catch{return nt(this,Lt)}if(c.length===0)return Tn(this);var f=new this.Collection(this,function(){return Vt(c[0],c[c.length-1])});f._ondirectionchange=function(b){d=b==="next"?a._ascending:a._descending,c.sort(d)};var m=0;return f._addAlgorithm(function(b,v,k){for(var S=b.key;0<d(S,c[m]);)if(++m===c.length)return v(k),!1;return d(S,c[m])===0||(v(function(){b.continue(c[m])}),!1)}),f},Me.prototype.notEqual=function(a){return this.inAnyRange([[-1/0,a],[a,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Me.prototype.noneOf=function(){var a=Ae.apply(Ue,arguments);if(a.length===0)return new this.Collection(this);try{a.sort(this._ascending)}catch{return nt(this,Lt)}var c=a.reduce(function(d,f){return d?d.concat([[d[d.length-1][1],f]]):[[-1/0,f]]},null);return c.push([a[a.length-1],this.db._maxKey]),this.inAnyRange(c,{includeLowers:!1,includeUppers:!1})},Me.prototype.inAnyRange=function(j,c){var d=this,f=this._cmp,m=this._ascending,b=this._descending,v=this._min,k=this._max;if(j.length===0)return Tn(this);if(!j.every(function(z){return z[0]!==void 0&&z[1]!==void 0&&m(z[0],z[1])<=0}))return nt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ue.InvalidArgument);var S=!c||c.includeLowers!==!1,T=c&&c.includeUppers===!0,O,_=m;function P(z,U){return _(z[0],U[0])}try{(O=j.reduce(function(z,U){for(var H=0,G=z.length;H<G;++H){var Z=z[H];if(f(U[0],Z[1])<0&&0<f(U[1],Z[0])){Z[0]=v(Z[0],U[0]),Z[1]=k(Z[1],U[1]);break}}return H===G&&z.push(U),z},[])).sort(P)}catch{return nt(this,Lt)}var E=0,R=T?function(z){return 0<m(z,O[E][1])}:function(z){return 0<=m(z,O[E][1])},D=S?function(z){return 0<b(z,O[E][0])}:function(z){return 0<=b(z,O[E][0])},I=R,j=new this.Collection(this,function(){return Vt(O[0][0],O[O.length-1][1],!S,!T)});return j._ondirectionchange=function(z){_=z==="next"?(I=R,m):(I=D,b),O.sort(P)},j._addAlgorithm(function(z,U,H){for(var G,Z=z.key;I(Z);)if(++E===O.length)return U(H),!1;return!R(G=Z)&&!D(G)||(d._cmp(Z,O[E][1])===0||d._cmp(Z,O[E][0])===0||U(function(){_===m?z.continue(O[E][0]):z.continue(O[E][1])}),!1)}),j},Me.prototype.startsWithAnyOf=function(){var a=Ae.apply(Ue,arguments);return a.every(function(c){return typeof c=="string"})?a.length===0?Tn(this):this.inAnyRange(a.map(function(c){return[c,c+on]})):nt(this,"startsWithAnyOf() only works with strings")},Me);function Me(){}function Tt(a){return Te(function(c){return nr(c),a(c.target.error),!1})}function nr(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault()}var rr="storagemutated",Es="x-storagemutated-1",Wt=Zn(null,rr),Sh=(It.prototype._lock=function(){return K(!le.global),++this._reculock,this._reculock!==1||le.global||(le.lockOwnerFor=this),this},It.prototype._unlock=function(){if(K(!le.global),--this._reculock==0)for(le.global||(le.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var a=this._blockedFuncs.shift();try{sn(a[1],a[0])}catch{}}return this},It.prototype._locked=function(){return this._reculock&&le.lockOwnerFor!==this},It.prototype.create=function(a){var c=this;if(!this.mode)return this;var d=this.db.idbdb,f=this.db._state.dbOpenError;if(K(!this.idbtrans),!a&&!d)switch(f&&f.name){case"DatabaseClosedError":throw new ue.DatabaseClosed(f);case"MissingAPIError":throw new ue.MissingAPI(f.message,f);default:throw new ue.OpenFailed(f)}if(!this.active)throw new ue.TransactionInactive;return K(this._completion._state===null),(a=this.idbtrans=a||(this.db.core||d).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Te(function(m){nr(m),c._reject(a.error)}),a.onabort=Te(function(m){nr(m),c.active&&c._reject(new ue.Abort(a.error)),c.active=!1,c.on("abort").fire(m)}),a.oncomplete=Te(function(){c.active=!1,c._resolve(),"mutatedParts"in a&&Wt.storagemutated.fire(a.mutatedParts)}),this},It.prototype._promise=function(a,c,d){var f=this;if(a==="readwrite"&&this.mode!=="readwrite")return Re(new ue.ReadOnly("Transaction is readonly"));if(!this.active)return Re(new ue.TransactionInactive);if(this._locked())return new ne(function(b,v){f._blockedFuncs.push([function(){f._promise(a,c,d).then(b,v)},le])});if(d)return qt(function(){var b=new ne(function(v,k){f._lock();var S=c(v,k,f);S&&S.then&&S.then(v,k)});return b.finally(function(){return f._unlock()}),b._lib=!0,b});var m=new ne(function(b,v){var k=c(b,v,f);k&&k.then&&k.then(b,v)});return m._lib=!0,m},It.prototype._root=function(){return this.parent?this.parent._root():this},It.prototype.waitFor=function(a){var c,d=this._root(),f=ne.resolve(a);d._waitingFor?d._waitingFor=d._waitingFor.then(function(){return f}):(d._waitingFor=f,d._waitingQueue=[],c=d.idbtrans.objectStore(d.storeNames[0]),(function b(){for(++d._spinCount;d._waitingQueue.length;)d._waitingQueue.shift()();d._waitingFor&&(c.get(-1/0).onsuccess=b)})());var m=d._waitingFor;return new ne(function(b,v){f.then(function(k){return d._waitingQueue.push(Te(b.bind(null,k)))},function(k){return d._waitingQueue.push(Te(v.bind(null,k)))}).finally(function(){d._waitingFor===m&&(d._waitingFor=null)})})},It.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ue.Abort))},It.prototype.table=function(a){var c=this._memoizedTables||(this._memoizedTables={});if(g(c,a))return c[a];var d=this.schema[a];if(!d)throw new ue.NotFound("Table "+a+" not part of transaction");return d=new this.db.Table(a,d,this),d.core=this.db.core.table(a),c[a]=d},It);function It(){}function Ts(a,c,d,f,m,b,v){return{name:a,keyPath:c,unique:d,multi:f,auto:m,compound:b,src:(d&&!v?"&":"")+(f?"*":"")+(m?"++":"")+Va(c)}}function Va(a){return typeof a=="string"?a:a?"["+[].join.call(a,"+")+"]":""}function Is(a,c,d){return{name:a,primKey:c,indexes:d,mappedClass:null,idxByName:(f=function(m){return[m.name,m]},d.reduce(function(m,b,v){return v=f(b,v),v&&(m[v[0]]=v[1]),m},{}))};var f}var ir=function(a){try{return a.only([[]]),ir=function(){return[[]]},[[]]}catch{return ir=function(){return on},on}};function As(a){return a==null?function(){}:typeof a=="string"?(c=a).split(".").length===1?function(d){return d[c]}:function(d){return ie(d,c)}:function(d){return ie(d,a)};var c}function Wa(a){return[].slice.call(a)}var Eh=0;function sr(a){return a==null?":id":typeof a=="string"?a:"[".concat(a.join("+"),"]")}function Th(a,c,S){function f(I){if(I.type===3)return null;if(I.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var E=I.lower,R=I.upper,D=I.lowerOpen,I=I.upperOpen;return E===void 0?R===void 0?null:c.upperBound(R,!!I):R===void 0?c.lowerBound(E,!!D):c.bound(E,R,!!D,!!I)}function m(P){var E,R=P.name;return{name:R,schema:P,mutate:function(D){var I=D.trans,j=D.type,z=D.keys,U=D.values,H=D.range;return new Promise(function(G,Z){G=Te(G);var Y=I.objectStore(R),X=Y.keyPath==null,te=j==="put"||j==="add";if(!te&&j!=="delete"&&j!=="deleteRange")throw new Error("Invalid operation type: "+j);var J,se=(z||U||{length:1}).length;if(z&&U&&z.length!==U.length)throw new Error("Given keys array must have same length as given values array.");if(se===0)return G({numFailures:0,failures:{},results:[],lastResult:void 0});function pe(Qe){++rt,nr(Qe)}var me=[],ge=[],rt=0;if(j==="deleteRange"){if(H.type===4)return G({numFailures:rt,failures:ge,results:[],lastResult:void 0});H.type===3?me.push(J=Y.clear()):me.push(J=Y.delete(f(H)))}else{var X=te?X?[U,z]:[U,null]:[z,null],he=X[0],We=X[1];if(te)for(var Ge=0;Ge<se;++Ge)me.push(J=We&&We[Ge]!==void 0?Y[j](he[Ge],We[Ge]):Y[j](he[Ge])),J.onerror=pe;else for(Ge=0;Ge<se;++Ge)me.push(J=Y[j](he[Ge])),J.onerror=pe}function ui(Qe){Qe=Qe.target.result,me.forEach(function(un,Gs){return un.error!=null&&(ge[Gs]=un.error)}),G({numFailures:rt,failures:ge,results:j==="delete"?z:me.map(function(un){return un.result}),lastResult:Qe})}J.onerror=function(Qe){pe(Qe),ui(Qe)},J.onsuccess=ui})},getMany:function(D){var I=D.trans,j=D.keys;return new Promise(function(z,U){z=Te(z);for(var H,G=I.objectStore(R),Z=j.length,Y=new Array(Z),X=0,te=0,J=function(me){me=me.target,Y[me._pos]=me.result,++te===X&&z(Y)},se=Tt(U),pe=0;pe<Z;++pe)j[pe]!=null&&((H=G.get(j[pe]))._pos=pe,H.onsuccess=J,H.onerror=se,++X);X===0&&z(Y)})},get:function(D){var I=D.trans,j=D.key;return new Promise(function(z,U){z=Te(z);var H=I.objectStore(R).get(j);H.onsuccess=function(G){return z(G.target.result)},H.onerror=Tt(U)})},query:(E=T,function(D){return new Promise(function(I,j){I=Te(I);var z,U,H,X=D.trans,G=D.values,Z=D.limit,J=D.query,Y=Z===1/0?void 0:Z,te=J.index,J=J.range,X=X.objectStore(R),te=te.isPrimaryKey?X:X.index(te.name),J=f(J);if(Z===0)return I({result:[]});E?((Y=G?te.getAll(J,Y):te.getAllKeys(J,Y)).onsuccess=function(se){return I({result:se.target.result})},Y.onerror=Tt(j)):(z=0,U=!G&&"openKeyCursor"in te?te.openKeyCursor(J):te.openCursor(J),H=[],U.onsuccess=function(se){var pe=U.result;return pe?(H.push(G?pe.value:pe.primaryKey),++z===Z?I({result:H}):void pe.continue()):I({result:H})},U.onerror=Tt(j))})}),openCursor:function(D){var I=D.trans,j=D.values,z=D.query,U=D.reverse,H=D.unique;return new Promise(function(G,Z){G=Te(G);var te=z.index,Y=z.range,X=I.objectStore(R),X=te.isPrimaryKey?X:X.index(te.name),te=U?H?"prevunique":"prev":H?"nextunique":"next",J=!j&&"openKeyCursor"in X?X.openKeyCursor(f(Y),te):X.openCursor(f(Y),te);J.onerror=Tt(Z),J.onsuccess=Te(function(se){var pe,me,ge,rt,he=J.result;he?(he.___id=++Eh,he.done=!1,pe=he.continue.bind(he),me=(me=he.continuePrimaryKey)&&me.bind(he),ge=he.advance.bind(he),rt=function(){throw new Error("Cursor not stopped")},he.trans=I,he.stop=he.continue=he.continuePrimaryKey=he.advance=function(){throw new Error("Cursor not started")},he.fail=Te(Z),he.next=function(){var We=this,Ge=1;return this.start(function(){return Ge--?We.continue():We.stop()}).then(function(){return We})},he.start=function(We){function Ge(){if(J.result)try{We()}catch(Qe){he.fail(Qe)}else he.done=!0,he.start=function(){throw new Error("Cursor behind last entry")},he.stop()}var ui=new Promise(function(Qe,un){Qe=Te(Qe),J.onerror=Tt(un),he.fail=un,he.stop=function(Gs){he.stop=he.continue=he.continuePrimaryKey=he.advance=rt,Qe(Gs)}});return J.onsuccess=Te(function(Qe){J.onsuccess=Ge,Ge()}),he.continue=pe,he.continuePrimaryKey=me,he.advance=ge,Ge(),ui},G(he)):G(null)},Z)})},count:function(D){var I=D.query,j=D.trans,z=I.index,U=I.range;return new Promise(function(H,G){var Z=j.objectStore(R),Y=z.isPrimaryKey?Z:Z.index(z.name),Z=f(U),Y=Z?Y.count(Z):Y.count();Y.onsuccess=Te(function(X){return H(X.target.result)}),Y.onerror=Tt(G)})}}}var b,v,k,O=(v=S,k=Wa((b=a).objectStoreNames),{schema:{name:b.name,tables:k.map(function(P){return v.objectStore(P)}).map(function(P){var E=P.keyPath,I=P.autoIncrement,R=l(E),D={},I={name:P.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:E==null,compound:R,keyPath:E,autoIncrement:I,unique:!0,extractKey:As(E)},indexes:Wa(P.indexNames).map(function(j){return P.index(j)}).map(function(H){var z=H.name,U=H.unique,G=H.multiEntry,H=H.keyPath,G={name:z,compound:l(H),keyPath:H,unique:U,multiEntry:G,extractKey:As(H)};return D[sr(H)]=G}),getIndexByKeyPath:function(j){return D[sr(j)]}};return D[":id"]=I.primaryKey,E!=null&&(D[sr(E)]=I.primaryKey),I})},hasGetAll:0<k.length&&"getAll"in v.objectStore(k[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),S=O.schema,T=O.hasGetAll,O=S.tables.map(m),_={};return O.forEach(function(P){return _[P.name]=P}),{stack:"dbcore",transaction:a.transaction.bind(a),table:function(P){if(!_[P])throw new Error("Table '".concat(P,"' not found"));return _[P]},MIN_KEY:-1/0,MAX_KEY:ir(c),schema:S}}function Ih(a,c,d,f){var m=d.IDBKeyRange;return d.indexedDB,{dbcore:(f=Th(c,m,f),a.dbcore.reduce(function(b,v){return v=v.create,r(r({},b),v(b))},f))}}function Jr(a,f){var d=f.db,f=Ih(a._middlewares,d,a._deps,f);a.core=f.dbcore,a.tables.forEach(function(m){var b=m.name;a.core.schema.tables.some(function(v){return v.name===b})&&(m.core=a.core.table(b),a[b]instanceof a.Table&&(a[b].core=m.core))})}function Zr(a,c,d,f){d.forEach(function(m){var b=f[m];c.forEach(function(v){var k=(function S(T,O){return A(T,O)||(T=h(T))&&S(T,O)})(v,m);(!k||"value"in k&&k.value===void 0)&&(v===a.Transaction.prototype||v instanceof a.Transaction?$(v,m,{get:function(){return this.table(m)},set:function(S){y(this,m,{value:S,writable:!0,configurable:!0,enumerable:!0})}}):v[m]=new a.Table(m,b))})})}function Rs(a,c){c.forEach(function(d){for(var f in d)d[f]instanceof a.Table&&delete d[f]})}function Ah(a,c){return a._cfg.version-c._cfg.version}function Rh(a,c,d,f){var m=a._dbSchema;d.objectStoreNames.contains("$meta")&&!m.$meta&&(m.$meta=Is("$meta",Ya("")[0],[]),a._storeNames.push("$meta"));var b=a._createTransaction("readwrite",a._storeNames,m);b.create(d),b._completion.catch(f);var v=b._reject.bind(b),k=le.transless||le;qt(function(){return le.trans=b,le.transless=k,c!==0?(Jr(a,d),T=c,((S=b).storeNames.includes("$meta")?S.table("$meta").get("version").then(function(O){return O??T}):ne.resolve(T)).then(function(O){return P=O,E=b,R=d,D=[],O=(_=a)._versions,I=_._dbSchema=ti(0,_.idbdb,R),(O=O.filter(function(j){return j._cfg.version>=P})).length!==0?(O.forEach(function(j){D.push(function(){var z=I,U=j._cfg.dbschema;ni(_,z,R),ni(_,U,R),I=_._dbSchema=U;var H=Os(z,U);H.add.forEach(function(te){Ds(R,te[0],te[1].primKey,te[1].indexes)}),H.change.forEach(function(te){if(te.recreate)throw new ue.Upgrade("Not yet support for changing primary key");var J=R.objectStore(te.name);te.add.forEach(function(se){return ei(J,se)}),te.change.forEach(function(se){J.deleteIndex(se.name),ei(J,se)}),te.del.forEach(function(se){return J.deleteIndex(se)})});var G=j._cfg.contentUpgrade;if(G&&j._cfg.version>P){Jr(_,R),E._memoizedTables={};var Z=V(U);H.del.forEach(function(te){Z[te]=z[te]}),Rs(_,[_.Transaction.prototype]),Zr(_,[_.Transaction.prototype],o(Z),Z),E.schema=Z;var Y,X=Ye(G);return X&&_n(),H=ne.follow(function(){var te;(Y=G(E))&&X&&(te=Ht.bind(null,null),Y.then(te,te))}),Y&&typeof Y.then=="function"?ne.resolve(Y):H.then(function(){return Y})}}),D.push(function(z){var U,H,G=j._cfg.dbschema;U=G,H=z,[].slice.call(H.db.objectStoreNames).forEach(function(Z){return U[Z]==null&&H.db.deleteObjectStore(Z)}),Rs(_,[_.Transaction.prototype]),Zr(_,[_.Transaction.prototype],_._storeNames,_._dbSchema),E.schema=_._dbSchema}),D.push(function(z){_.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(_.idbdb.version/10)===j._cfg.version?(_.idbdb.deleteObjectStore("$meta"),delete _._dbSchema.$meta,_._storeNames=_._storeNames.filter(function(U){return U!=="$meta"})):z.objectStore("$meta").put(j._cfg.version,"version"))})}),(function j(){return D.length?ne.resolve(D.shift()(E.idbtrans)).then(j):ne.resolve()})().then(function(){Ga(I,R)})):ne.resolve();var _,P,E,R,D,I}).catch(v)):(o(m).forEach(function(O){Ds(d,O,m[O].primKey,m[O].indexes)}),Jr(a,d),void ne.follow(function(){return a.on.populate.fire(b)}).catch(v));var S,T})}function Oh(a,c){Ga(a._dbSchema,c),c.db.version%10!=0||c.objectStoreNames.contains("$meta")||c.db.createObjectStore("$meta").add(Math.ceil(c.db.version/10-1),"version");var d=ti(0,a.idbdb,c);ni(a,a._dbSchema,c);for(var f=0,m=Os(d,a._dbSchema).change;f<m.length;f++){var b=(function(v){if(v.change.length||v.recreate)return console.warn("Unable to patch indexes of table ".concat(v.name," because it has changes on the type of index or primary key.")),{value:void 0};var k=c.objectStore(v.name);v.add.forEach(function(S){Et&&console.debug("Dexie upgrade patch: Creating missing index ".concat(v.name,".").concat(S.src)),ei(k,S)})})(m[f]);if(typeof b=="object")return b.value}}function Os(a,c){var d,f={del:[],add:[],change:[]};for(d in a)c[d]||f.del.push(d);for(d in c){var m=a[d],b=c[d];if(m){var v={name:d,def:b,recreate:!1,del:[],add:[],change:[]};if(""+(m.primKey.keyPath||"")!=""+(b.primKey.keyPath||"")||m.primKey.auto!==b.primKey.auto)v.recreate=!0,f.change.push(v);else{var k=m.idxByName,S=b.idxByName,T=void 0;for(T in k)S[T]||v.del.push(T);for(T in S){var O=k[T],_=S[T];O?O.src!==_.src&&v.change.push(_):v.add.push(_)}(0<v.del.length||0<v.add.length||0<v.change.length)&&f.change.push(v)}}else f.add.push([d,b])}return f}function Ds(a,c,d,f){var m=a.db.createObjectStore(c,d.keyPath?{keyPath:d.keyPath,autoIncrement:d.auto}:{autoIncrement:d.auto});return f.forEach(function(b){return ei(m,b)}),m}function Ga(a,c){o(a).forEach(function(d){c.db.objectStoreNames.contains(d)||(Et&&console.debug("Dexie: Creating missing table",d),Ds(c,d,a[d].primKey,a[d].indexes))})}function ei(a,c){a.createIndex(c.name,c.keyPath,{unique:c.unique,multiEntry:c.multi})}function ti(a,c,d){var f={};return M(c.objectStoreNames,0).forEach(function(m){for(var b=d.objectStore(m),v=Ts(Va(T=b.keyPath),T||"",!0,!1,!!b.autoIncrement,T&&typeof T!="string",!0),k=[],S=0;S<b.indexNames.length;++S){var O=b.index(b.indexNames[S]),T=O.keyPath,O=Ts(O.name,T,!!O.unique,!!O.multiEntry,!1,T&&typeof T!="string",!1);k.push(O)}f[m]=Is(m,v,k)}),f}function ni(a,c,d){for(var f=d.db.objectStoreNames,m=0;m<f.length;++m){var b=f[m],v=d.objectStore(b);a._hasGetAll="getAll"in v;for(var k=0;k<v.indexNames.length;++k){var S=v.indexNames[k],T=v.index(S).keyPath,O=typeof T=="string"?T:"["+M(T).join("+")+"]";!c[b]||(T=c[b].idxByName[O])&&(T.name=S,delete c[b].idxByName[O],c[b].idxByName[S]=T)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&s.WorkerGlobalScope&&s instanceof s.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(a._hasGetAll=!1)}function Ya(a){return a.split(",").map(function(c,d){var f=(c=c.trim()).replace(/([&*]|\+\+)/g,""),m=/^\[/.test(f)?f.match(/^\[(.*)\]$/)[1].split("+"):f;return Ts(f,m||null,/\&/.test(c),/\*/.test(c),/\+\+/.test(c),l(m),d===0)})}var Dh=(ri.prototype._parseStoresSpec=function(a,c){o(a).forEach(function(d){if(a[d]!==null){var f=Ya(a[d]),m=f.shift();if(m.unique=!0,m.multi)throw new ue.Schema("Primary key cannot be multi-valued");f.forEach(function(b){if(b.auto)throw new ue.Schema("Only primary key can be marked as autoIncrement (++)");if(!b.keyPath)throw new ue.Schema("Index must have a name and cannot be an empty string")}),c[d]=Is(d,m,f)}})},ri.prototype.stores=function(d){var c=this.db;this._cfg.storesSource=this._cfg.storesSource?u(this._cfg.storesSource,d):d;var d=c._versions,f={},m={};return d.forEach(function(b){u(f,b._cfg.storesSource),m=b._cfg.dbschema={},b._parseStoresSpec(f,m)}),c._dbSchema=m,Rs(c,[c._allTables,c,c.Transaction.prototype]),Zr(c,[c._allTables,c,c.Transaction.prototype,this._cfg.tables],o(m),m),c._storeNames=o(m),this},ri.prototype.upgrade=function(a){return this._cfg.contentUpgrade=fs(this._cfg.contentUpgrade||$e,a),this},ri);function ri(){}function Ps(a,c){var d=a._dbNamesDB;return d||(d=a._dbNamesDB=new jt(Wr,{addons:[],indexedDB:a,IDBKeyRange:c})).version(1).stores({dbnames:"name"}),d.table("dbnames")}function Ls(a){return a&&typeof a.databases=="function"}function Ms(a){return qt(function(){return le.letThrough=!0,a()})}function js(a){return!("from"in a)}var Ve=function(a,c){if(!this){var d=new Ve;return a&&"d"in a&&u(d,a),d}u(this,arguments.length?{d:1,from:a,to:1<arguments.length?c:a}:{d:0})};function or(a,c,d){var f=we(c,d);if(!isNaN(f)){if(0<f)throw RangeError();if(js(a))return u(a,{from:c,to:d,d:1});var m=a.l,f=a.r;if(we(d,a.from)<0)return m?or(m,c,d):a.l={from:c,to:d,d:1,l:null,r:null},Xa(a);if(0<we(c,a.to))return f?or(f,c,d):a.r={from:c,to:d,d:1,l:null,r:null},Xa(a);we(c,a.from)<0&&(a.from=c,a.l=null,a.d=f?f.d+1:1),0<we(d,a.to)&&(a.to=d,a.r=null,a.d=a.l?a.l.d+1:1),d=!a.r,m&&!a.l&&ar(a,m),f&&d&&ar(a,f)}}function ar(a,c){js(c)||(function d(f,S){var b=S.from,v=S.to,k=S.l,S=S.r;or(f,b,v),k&&d(f,k),S&&d(f,S)})(a,c)}function Qa(a,c){var d=ii(c),f=d.next();if(f.done)return!1;for(var m=f.value,b=ii(a),v=b.next(m.from),k=v.value;!f.done&&!v.done;){if(we(k.from,m.to)<=0&&0<=we(k.to,m.from))return!0;we(m.from,k.from)<0?m=(f=d.next(k.from)).value:k=(v=b.next(m.from)).value}return!1}function ii(a){var c=js(a)?null:{s:0,n:a};return{next:function(d){for(var f=0<arguments.length;c;)switch(c.s){case 0:if(c.s=1,f)for(;c.n.l&&we(d,c.n.from)<0;)c={up:c,n:c.n.l,s:1};else for(;c.n.l;)c={up:c,n:c.n.l,s:1};case 1:if(c.s=2,!f||we(d,c.n.to)<=0)return{value:c.n,done:!1};case 2:if(c.n.r){c.s=3,c={up:c,n:c.n.r,s:0};continue}case 3:c=c.up}return{done:!0}}}}function Xa(a){var c,d,f=(((c=a.r)===null||c===void 0?void 0:c.d)||0)-(((d=a.l)===null||d===void 0?void 0:d.d)||0),m=1<f?"r":f<-1?"l":"";m&&(c=m=="r"?"l":"r",d=r({},a),f=a[m],a.from=f.from,a.to=f.to,a[m]=f[m],d[m]=f[c],(a[c]=d).d=Ja(d)),a.d=Ja(a)}function Ja(d){var c=d.r,d=d.l;return(c?d?Math.max(c.d,d.d):c.d:d?d.d:0)+1}function si(a,c){return o(c).forEach(function(d){a[d]?ar(a[d],c[d]):a[d]=(function f(m){var b,v,k={};for(b in m)g(m,b)&&(v=m[b],k[b]=!v||typeof v!="object"||ce.has(v.constructor)?v:f(v));return k})(c[d])}),a}function Ns(a,c){return a.all||c.all||Object.keys(a).some(function(d){return c[d]&&Qa(c[d],a[d])})}w(Ve.prototype,((wt={add:function(a){return ar(this,a),this},addKey:function(a){return or(this,a,a),this},addKeys:function(a){var c=this;return a.forEach(function(d){return or(c,d,d)}),this},hasKey:function(a){var c=ii(this).next(a).value;return c&&we(c.from,a)<=0&&0<=we(c.to,a)}})[ze]=function(){return ii(this)},wt));var ln={},zs={},Us=!1;function oi(a){si(zs,a),Us||(Us=!0,setTimeout(function(){Us=!1,Fs(zs,!(zs={}))},0))}function Fs(a,c){c===void 0&&(c=!1);var d=new Set;if(a.all)for(var f=0,m=Object.values(ln);f<m.length;f++)Za(v=m[f],a,d,c);else for(var b in a){var v,k=/^idb\:\/\/(.*)\/(.*)\//.exec(b);k&&(b=k[1],k=k[2],(v=ln["idb://".concat(b,"/").concat(k)])&&Za(v,a,d,c))}d.forEach(function(S){return S()})}function Za(a,c,d,f){for(var m=[],b=0,v=Object.entries(a.queries.query);b<v.length;b++){for(var k=v[b],S=k[0],T=[],O=0,_=k[1];O<_.length;O++){var P=_[O];Ns(c,P.obsSet)?P.subscribers.forEach(function(I){return d.add(I)}):f&&T.push(P)}f&&m.push([S,T])}if(f)for(var E=0,R=m;E<R.length;E++){var D=R[E],S=D[0],T=D[1];a.queries.query[S]=T}}function Ph(a){var c=a._state,d=a._deps.indexedDB;if(c.isBeingOpened||a.idbdb)return c.dbReadyPromise.then(function(){return c.dbOpenError?Re(c.dbOpenError):a});c.isBeingOpened=!0,c.dbOpenError=null,c.openComplete=!1;var f=c.openCanceller,m=Math.round(10*a.verno),b=!1;function v(){if(c.openCanceller!==f)throw new ue.DatabaseClosed("db.open() was cancelled")}function k(){return new ne(function(P,E){if(v(),!d)throw new ue.MissingAPI;var R=a.name,D=c.autoSchema||!m?d.open(R):d.open(R,m);if(!D)throw new ue.MissingAPI;D.onerror=Tt(E),D.onblocked=Te(a._fireOnBlocked),D.onupgradeneeded=Te(function(I){var j;O=D.transaction,c.autoSchema&&!a._options.allowEmptyDB?(D.onerror=nr,O.abort(),D.result.close(),(j=d.deleteDatabase(R)).onsuccess=j.onerror=Te(function(){E(new ue.NoSuchDatabase("Database ".concat(R," doesnt exist")))})):(O.onerror=Tt(E),I=I.oldVersion>Math.pow(2,62)?0:I.oldVersion,_=I<1,a.idbdb=D.result,b&&Oh(a,O),Rh(a,I/10,O,E))},E),D.onsuccess=Te(function(){O=null;var I,j,z,U,H,G=a.idbdb=D.result,Z=M(G.objectStoreNames);if(0<Z.length)try{var Y=G.transaction((U=Z).length===1?U[0]:U,"readonly");if(c.autoSchema)j=G,z=Y,(I=a).verno=j.version/10,z=I._dbSchema=ti(0,j,z),I._storeNames=M(j.objectStoreNames,0),Zr(I,[I._allTables],o(z),z);else if(ni(a,a._dbSchema,Y),((H=Os(ti(0,(H=a).idbdb,Y),H._dbSchema)).add.length||H.change.some(function(X){return X.add.length||X.change.length}))&&!b)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),G.close(),m=G.version+1,b=!0,P(k());Jr(a,Y)}catch{}Sn.push(a),G.onversionchange=Te(function(X){c.vcFired=!0,a.on("versionchange").fire(X)}),G.onclose=Te(function(X){a.on("close").fire(X)}),_&&(H=a._deps,Y=R,G=H.indexedDB,H=H.IDBKeyRange,Ls(G)||Y===Wr||Ps(G,H).put({name:Y}).catch($e)),P()},E)}).catch(function(P){switch(P?.name){case"UnknownError":if(0<c.PR1398_maxLoop)return c.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),k();break;case"VersionError":if(0<m)return m=0,k()}return ne.reject(P)})}var S,T=c.dbReadyResolve,O=null,_=!1;return ne.race([f,(typeof navigator>"u"?ne.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(P){function E(){return indexedDB.databases().finally(P)}S=setInterval(E,100),E()}).finally(function(){return clearInterval(S)}):Promise.resolve()).then(k)]).then(function(){return v(),c.onReadyBeingFired=[],ne.resolve(Ms(function(){return a.on.ready.fire(a.vip)})).then(function P(){if(0<c.onReadyBeingFired.length){var E=c.onReadyBeingFired.reduce(fs,$e);return c.onReadyBeingFired=[],ne.resolve(Ms(function(){return E(a.vip)})).then(P)}})}).finally(function(){c.openCanceller===f&&(c.onReadyBeingFired=null,c.isBeingOpened=!1)}).catch(function(P){c.dbOpenError=P;try{O&&O.abort()}catch{}return f===c.openCanceller&&a._close(),Re(P)}).finally(function(){c.openComplete=!0,T()}).then(function(){var P;return _&&(P={},a.tables.forEach(function(E){E.schema.indexes.forEach(function(R){R.name&&(P["idb://".concat(a.name,"/").concat(E.name,"/").concat(R.name)]=new Ve(-1/0,[[[]]]))}),P["idb://".concat(a.name,"/").concat(E.name,"/")]=P["idb://".concat(a.name,"/").concat(E.name,"/:dels")]=new Ve(-1/0,[[[]]])}),Wt(rr).fire(P),Fs(P,!0)),a})}function Bs(a){function c(b){return a.next(b)}var d=m(c),f=m(function(b){return a.throw(b)});function m(b){return function(S){var k=b(S),S=k.value;return k.done?S:S&&typeof S.then=="function"?S.then(d,f):l(S)?Promise.all(S).then(d,f):d(S)}}return m(c)()}function ai(a,c,d){for(var f=l(a)?a.slice():[a],m=0;m<d;++m)f.push(c);return f}var Lh={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(a){return r(r({},a),{table:function(c){var d=a.table(c),f=d.schema,m={},b=[];function v(_,P,E){var R=sr(_),D=m[R]=m[R]||[],I=_==null?0:typeof _=="string"?1:_.length,j=0<P,j=r(r({},E),{name:j?"".concat(R,"(virtual-from:").concat(E.name,")"):E.name,lowLevelIndex:E,isVirtual:j,keyTail:P,keyLength:I,extractKey:As(_),unique:!j&&E.unique});return D.push(j),j.isPrimaryKey||b.push(j),1<I&&v(I===2?_[0]:_.slice(0,I-1),P+1,E),D.sort(function(z,U){return z.keyTail-U.keyTail}),j}c=v(f.primaryKey.keyPath,0,f.primaryKey),m[":id"]=[c];for(var k=0,S=f.indexes;k<S.length;k++){var T=S[k];v(T.keyPath,0,T)}function O(_){var P,E=_.query.index;return E.isVirtual?r(r({},_),{query:{index:E.lowLevelIndex,range:(P=_.query.range,E=E.keyTail,{type:P.type===1?2:P.type,lower:ai(P.lower,P.lowerOpen?a.MAX_KEY:a.MIN_KEY,E),lowerOpen:!0,upper:ai(P.upper,P.upperOpen?a.MIN_KEY:a.MAX_KEY,E),upperOpen:!0})}}):_}return r(r({},d),{schema:r(r({},f),{primaryKey:c,indexes:b,getIndexByKeyPath:function(_){return(_=m[sr(_)])&&_[0]}}),count:function(_){return d.count(O(_))},query:function(_){return d.query(O(_))},openCursor:function(_){var P=_.query.index,E=P.keyTail,R=P.isVirtual,D=P.keyLength;return R?d.openCursor(O(_)).then(function(j){return j&&I(j)}):d.openCursor(_);function I(j){return Object.create(j,{continue:{value:function(z){z!=null?j.continue(ai(z,_.reverse?a.MAX_KEY:a.MIN_KEY,E)):_.unique?j.continue(j.key.slice(0,D).concat(_.reverse?a.MIN_KEY:a.MAX_KEY,E)):j.continue()}},continuePrimaryKey:{value:function(z,U){j.continuePrimaryKey(ai(z,a.MAX_KEY,E),U)}},primaryKey:{get:function(){return j.primaryKey}},key:{get:function(){var z=j.key;return D===1?z[0]:z.slice(0,D)}},value:{get:function(){return j.value}}})}}})}})}};function qs(a,c,d,f){return d=d||{},f=f||"",o(a).forEach(function(m){var b,v,k;g(c,m)?(b=a[m],v=c[m],typeof b=="object"&&typeof v=="object"&&b&&v?(k=Ee(b))!==Ee(v)?d[f+m]=c[m]:k==="Object"?qs(b,v,d,f+m+"."):b!==v&&(d[f+m]=c[m]):b!==v&&(d[f+m]=c[m])):d[f+m]=void 0}),o(c).forEach(function(m){g(a,m)||(d[f+m]=c[m])}),d}function Hs(a,c){return c.type==="delete"?c.keys:c.keys||c.values.map(a.extractKey)}var Mh={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(a){return r(r({},a),{table:function(c){var d=a.table(c),f=d.schema.primaryKey;return r(r({},d),{mutate:function(m){var b=le.trans,v=b.table(c).hook,k=v.deleting,S=v.creating,T=v.updating;switch(m.type){case"add":if(S.fire===$e)break;return b._promise("readwrite",function(){return O(m)},!0);case"put":if(S.fire===$e&&T.fire===$e)break;return b._promise("readwrite",function(){return O(m)},!0);case"delete":if(k.fire===$e)break;return b._promise("readwrite",function(){return O(m)},!0);case"deleteRange":if(k.fire===$e)break;return b._promise("readwrite",function(){return(function _(P,E,R){return d.query({trans:P,values:!1,query:{index:f,range:E},limit:R}).then(function(D){var I=D.result;return O({type:"delete",keys:I,trans:P}).then(function(j){return 0<j.numFailures?Promise.reject(j.failures[0]):I.length<R?{failures:[],numFailures:0,lastResult:void 0}:_(P,r(r({},E),{lower:I[I.length-1],lowerOpen:!0}),R)})})})(m.trans,m.range,1e4)},!0)}return d.mutate(m);function O(_){var P,E,R,D=le.trans,I=_.keys||Hs(f,_);if(!I)throw new Error("Keys missing");return(_=_.type==="add"||_.type==="put"?r(r({},_),{keys:I}):r({},_)).type!=="delete"&&(_.values=i([],_.values)),_.keys&&(_.keys=i([],_.keys)),P=d,R=I,((E=_).type==="add"?Promise.resolve([]):P.getMany({trans:E.trans,keys:R,cache:"immutable"})).then(function(j){var z=I.map(function(U,H){var G,Z,Y,X=j[H],te={onerror:null,onsuccess:null};return _.type==="delete"?k.fire.call(te,U,X,D):_.type==="add"||X===void 0?(G=S.fire.call(te,U,_.values[H],D),U==null&&G!=null&&(_.keys[H]=U=G,f.outbound||q(_.values[H],f.keyPath,U))):(G=qs(X,_.values[H]),(Z=T.fire.call(te,G,U,X,D))&&(Y=_.values[H],Object.keys(Z).forEach(function(J){g(Y,J)?Y[J]=Z[J]:q(Y,J,Z[J])}))),te});return d.mutate(_).then(function(U){for(var H=U.failures,G=U.results,Z=U.numFailures,U=U.lastResult,Y=0;Y<I.length;++Y){var X=(G||I)[Y],te=z[Y];X==null?te.onerror&&te.onerror(H[Y]):te.onsuccess&&te.onsuccess(_.type==="put"&&j[Y]?_.values[Y]:X)}return{failures:H,results:G,numFailures:Z,lastResult:U}}).catch(function(U){return z.forEach(function(H){return H.onerror&&H.onerror(U)}),Promise.reject(U)})})}}})}})}};function el(a,c,d){try{if(!c||c.keys.length<a.length)return null;for(var f=[],m=0,b=0;m<c.keys.length&&b<a.length;++m)we(c.keys[m],a[b])===0&&(f.push(d?Q(c.values[m]):c.values[m]),++b);return f.length===a.length?f:null}catch{return null}}var jh={stack:"dbcore",level:-1,create:function(a){return{table:function(c){var d=a.table(c);return r(r({},d),{getMany:function(f){if(!f.cache)return d.getMany(f);var m=el(f.keys,f.trans._cache,f.cache==="clone");return m?ne.resolve(m):d.getMany(f).then(function(b){return f.trans._cache={keys:f.keys,values:f.cache==="clone"?Q(b):b},b})},mutate:function(f){return f.type!=="add"&&(f.trans._cache=null),d.mutate(f)}})}}}};function tl(a,c){return a.trans.mode==="readonly"&&!!a.subscr&&!a.trans.explicit&&a.trans.db._options.cache!=="disabled"&&!c.schema.primaryKey.outbound}function nl(a,c){switch(a){case"query":return c.values&&!c.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Nh={stack:"dbcore",level:0,name:"Observability",create:function(a){var c=a.schema.name,d=new Ve(a.MIN_KEY,a.MAX_KEY);return r(r({},a),{transaction:function(f,m,b){if(le.subscr&&m!=="readonly")throw new ue.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(le.querier));return a.transaction(f,m,b)},table:function(f){var m=a.table(f),b=m.schema,v=b.primaryKey,_=b.indexes,k=v.extractKey,S=v.outbound,T=v.autoIncrement&&_.filter(function(E){return E.compound&&E.keyPath.includes(v.keyPath)}),O=r(r({},m),{mutate:function(E){function R(J){return J="idb://".concat(c,"/").concat(f,"/").concat(J),U[J]||(U[J]=new Ve)}var D,I,j,z=E.trans,U=E.mutatedParts||(E.mutatedParts={}),H=R(""),G=R(":dels"),Z=E.type,te=E.type==="deleteRange"?[E.range]:E.type==="delete"?[E.keys]:E.values.length<50?[Hs(v,E).filter(function(J){return J}),E.values]:[],Y=te[0],X=te[1],te=E.trans._cache;return l(Y)?(H.addKeys(Y),(te=Z==="delete"||Y.length===X.length?el(Y,te):null)||G.addKeys(Y),(te||X)&&(D=R,I=te,j=X,b.indexes.forEach(function(J){var se=D(J.name||"");function pe(ge){return ge!=null?J.extractKey(ge):null}function me(ge){return J.multiEntry&&l(ge)?ge.forEach(function(rt){return se.addKey(rt)}):se.addKey(ge)}(I||j).forEach(function(ge,We){var he=I&&pe(I[We]),We=j&&pe(j[We]);we(he,We)!==0&&(he!=null&&me(he),We!=null&&me(We))})}))):Y?(X={from:(X=Y.lower)!==null&&X!==void 0?X:a.MIN_KEY,to:(X=Y.upper)!==null&&X!==void 0?X:a.MAX_KEY},G.add(X),H.add(X)):(H.add(d),G.add(d),b.indexes.forEach(function(J){return R(J.name).add(d)})),m.mutate(E).then(function(J){return!Y||E.type!=="add"&&E.type!=="put"||(H.addKeys(J.results),T&&T.forEach(function(se){for(var pe=E.values.map(function(he){return se.extractKey(he)}),me=se.keyPath.findIndex(function(he){return he===v.keyPath}),ge=0,rt=J.results.length;ge<rt;++ge)pe[ge][me]=J.results[ge];R(se.name).addKeys(pe)})),z.mutatedParts=si(z.mutatedParts||{},U),J})}}),_=function(R){var D=R.query,R=D.index,D=D.range;return[R,new Ve((R=D.lower)!==null&&R!==void 0?R:a.MIN_KEY,(D=D.upper)!==null&&D!==void 0?D:a.MAX_KEY)]},P={get:function(E){return[v,new Ve(E.key)]},getMany:function(E){return[v,new Ve().addKeys(E.keys)]},count:_,query:_,openCursor:_};return o(P).forEach(function(E){O[E]=function(R){var D=le.subscr,I=!!D,j=tl(le,m)&&nl(E,R)?R.obsSet={}:D;if(I){var z=function(X){return X="idb://".concat(c,"/").concat(f,"/").concat(X),j[X]||(j[X]=new Ve)},U=z(""),H=z(":dels"),D=P[E](R),I=D[0],D=D[1];if((E==="query"&&I.isPrimaryKey&&!R.values?H:z(I.name||"")).add(D),!I.isPrimaryKey){if(E!=="count"){var G=E==="query"&&S&&R.values&&m.query(r(r({},R),{values:!1}));return m[E].apply(this,arguments).then(function(X){if(E==="query"){if(S&&R.values)return G.then(function(pe){return pe=pe.result,U.addKeys(pe),X});var te=R.values?X.result.map(k):X.result;(R.values?U:H).addKeys(te)}else if(E==="openCursor"){var J=X,se=R.values;return J&&Object.create(J,{key:{get:function(){return H.addKey(J.primaryKey),J.key}},primaryKey:{get:function(){var pe=J.primaryKey;return H.addKey(pe),pe}},value:{get:function(){return se&&U.addKey(J.primaryKey),J.value}}})}return X})}H.add(d)}}return m[E].apply(this,arguments)}}),O}})}};function rl(a,c,d){if(d.numFailures===0)return c;if(c.type==="deleteRange")return null;var f=c.keys?c.keys.length:"values"in c&&c.values?c.values.length:1;return d.numFailures===f?null:(c=r({},c),l(c.keys)&&(c.keys=c.keys.filter(function(m,b){return!(b in d.failures)})),"values"in c&&l(c.values)&&(c.values=c.values.filter(function(m,b){return!(b in d.failures)})),c)}function Ks(a,c){return d=a,((f=c).lower===void 0||(f.lowerOpen?0<we(d,f.lower):0<=we(d,f.lower)))&&(a=a,(c=c).upper===void 0||(c.upperOpen?we(a,c.upper)<0:we(a,c.upper)<=0));var d,f}function il(a,c,P,f,m,b){if(!P||P.length===0)return a;var v=c.query.index,k=v.multiEntry,S=c.query.range,T=f.schema.primaryKey.extractKey,O=v.extractKey,_=(v.lowLevelIndex||v).extractKey,P=P.reduce(function(E,R){var D=E,I=[];if(R.type==="add"||R.type==="put")for(var j=new Ve,z=R.values.length-1;0<=z;--z){var U,H=R.values[z],G=T(H);j.hasKey(G)||(U=O(H),(k&&l(U)?U.some(function(J){return Ks(J,S)}):Ks(U,S))&&(j.addKey(G),I.push(H)))}switch(R.type){case"add":var Z=new Ve().addKeys(c.values?E.map(function(se){return T(se)}):E),D=E.concat(c.values?I.filter(function(se){return se=T(se),!Z.hasKey(se)&&(Z.addKey(se),!0)}):I.map(function(se){return T(se)}).filter(function(se){return!Z.hasKey(se)&&(Z.addKey(se),!0)}));break;case"put":var Y=new Ve().addKeys(R.values.map(function(se){return T(se)}));D=E.filter(function(se){return!Y.hasKey(c.values?T(se):se)}).concat(c.values?I:I.map(function(se){return T(se)}));break;case"delete":var X=new Ve().addKeys(R.keys);D=E.filter(function(se){return!X.hasKey(c.values?T(se):se)});break;case"deleteRange":var te=R.range;D=E.filter(function(se){return!Ks(T(se),te)})}return D},a);return P===a?a:(P.sort(function(E,R){return we(_(E),_(R))||we(T(E),T(R))}),c.limit&&c.limit<1/0&&(P.length>c.limit?P.length=c.limit:a.length===c.limit&&P.length<c.limit&&(m.dirty=!0)),b?Object.freeze(P):P)}function sl(a,c){return we(a.lower,c.lower)===0&&we(a.upper,c.upper)===0&&!!a.lowerOpen==!!c.lowerOpen&&!!a.upperOpen==!!c.upperOpen}function zh(a,c){return(function(d,f,m,b){if(d===void 0)return f!==void 0?-1:0;if(f===void 0)return 1;if((f=we(d,f))===0){if(m&&b)return 0;if(m)return 1;if(b)return-1}return f})(a.lower,c.lower,a.lowerOpen,c.lowerOpen)<=0&&0<=(function(d,f,m,b){if(d===void 0)return f!==void 0?1:0;if(f===void 0)return-1;if((f=we(d,f))===0){if(m&&b)return 0;if(m)return-1;if(b)return 1}return f})(a.upper,c.upper,a.upperOpen,c.upperOpen)}function Uh(a,c,d,f){a.subscribers.add(d),f.addEventListener("abort",function(){var m,b;a.subscribers.delete(d),a.subscribers.size===0&&(m=a,b=c,setTimeout(function(){m.subscribers.size===0&&fe(b,m)},3e3))})}var Fh={stack:"dbcore",level:0,name:"Cache",create:function(a){var c=a.schema.name;return r(r({},a),{transaction:function(d,f,m){var b,v,k=a.transaction(d,f,m);return f==="readwrite"&&(v=(b=new AbortController).signal,m=function(S){return function(){if(b.abort(),f==="readwrite"){for(var T=new Set,O=0,_=d;O<_.length;O++){var P=_[O],E=ln["idb://".concat(c,"/").concat(P)];if(E){var R=a.table(P),D=E.optimisticOps.filter(function(se){return se.trans===k});if(k._explicit&&S&&k.mutatedParts)for(var I=0,j=Object.values(E.queries.query);I<j.length;I++)for(var z=0,U=(Z=j[I]).slice();z<U.length;z++)Ns((Y=U[z]).obsSet,k.mutatedParts)&&(fe(Z,Y),Y.subscribers.forEach(function(se){return T.add(se)}));else if(0<D.length){E.optimisticOps=E.optimisticOps.filter(function(se){return se.trans!==k});for(var H=0,G=Object.values(E.queries.query);H<G.length;H++)for(var Z,Y,X,te=0,J=(Z=G[H]).slice();te<J.length;te++)(Y=J[te]).res!=null&&k.mutatedParts&&(S&&!Y.dirty?(X=Object.isFrozen(Y.res),X=il(Y.res,Y.req,D,R,Y,X),Y.dirty?(fe(Z,Y),Y.subscribers.forEach(function(se){return T.add(se)})):X!==Y.res&&(Y.res=X,Y.promise=ne.resolve({result:X}))):(Y.dirty&&fe(Z,Y),Y.subscribers.forEach(function(se){return T.add(se)})))}}}T.forEach(function(se){return se()})}}},k.addEventListener("abort",m(!1),{signal:v}),k.addEventListener("error",m(!1),{signal:v}),k.addEventListener("complete",m(!0),{signal:v})),k},table:function(d){var f=a.table(d),m=f.schema.primaryKey;return r(r({},f),{mutate:function(b){var v=le.trans;if(m.outbound||v.db._options.cache==="disabled"||v.explicit||v.idbtrans.mode!=="readwrite")return f.mutate(b);var k=ln["idb://".concat(c,"/").concat(d)];return k?(v=f.mutate(b),b.type!=="add"&&b.type!=="put"||!(50<=b.values.length||Hs(m,b).some(function(S){return S==null}))?(k.optimisticOps.push(b),b.mutatedParts&&oi(b.mutatedParts),v.then(function(S){0<S.numFailures&&(fe(k.optimisticOps,b),(S=rl(0,b,S))&&k.optimisticOps.push(S),b.mutatedParts&&oi(b.mutatedParts))}),v.catch(function(){fe(k.optimisticOps,b),b.mutatedParts&&oi(b.mutatedParts)})):v.then(function(S){var T=rl(0,r(r({},b),{values:b.values.map(function(O,_){var P;return S.failures[_]?O:(O=(P=m.keyPath)!==null&&P!==void 0&&P.includes(".")?Q(O):r({},O),q(O,m.keyPath,S.results[_]),O)})}),S);k.optimisticOps.push(T),queueMicrotask(function(){return b.mutatedParts&&oi(b.mutatedParts)})}),v):f.mutate(b)},query:function(b){if(!tl(le,f)||!nl("query",b))return f.query(b);var v=((T=le.trans)===null||T===void 0?void 0:T.db._options.cache)==="immutable",_=le,k=_.requery,S=_.signal,T=(function(R,D,I,j){var z=ln["idb://".concat(R,"/").concat(D)];if(!z)return[];if(!(D=z.queries[I]))return[null,!1,z,null];var U=D[(j.query?j.query.index.name:null)||""];if(!U)return[null,!1,z,null];switch(I){case"query":var H=U.find(function(G){return G.req.limit===j.limit&&G.req.values===j.values&&sl(G.req.query.range,j.query.range)});return H?[H,!0,z,U]:[U.find(function(G){return("limit"in G.req?G.req.limit:1/0)>=j.limit&&(!j.values||G.req.values)&&zh(G.req.query.range,j.query.range)}),!1,z,U];case"count":return H=U.find(function(G){return sl(G.req.query.range,j.query.range)}),[H,!!H,z,U]}})(c,d,"query",b),O=T[0],_=T[1],P=T[2],E=T[3];return O&&_?O.obsSet=b.obsSet:(_=f.query(b).then(function(R){var D=R.result;if(O&&(O.res=D),v){for(var I=0,j=D.length;I<j;++I)Object.freeze(D[I]);Object.freeze(D)}else R.result=Q(D);return R}).catch(function(R){return E&&O&&fe(E,O),Promise.reject(R)}),O={obsSet:b.obsSet,promise:_,subscribers:new Set,type:"query",req:b,dirty:!1},E?E.push(O):(E=[O],(P=P||(ln["idb://".concat(c,"/").concat(d)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[b.query.index.name||""]=E)),Uh(O,E,k,S),O.promise.then(function(R){return{result:il(R.result,b,P?.optimisticOps,f,O,v)}})}})}})}};function li(a,c){return new Proxy(a,{get:function(d,f,m){return f==="db"?c:Reflect.get(d,f,m)}})}var jt=(Oe.prototype.version=function(a){if(isNaN(a)||a<.1)throw new ue.Type("Given version is not a positive number");if(a=Math.round(10*a)/10,this.idbdb||this._state.isBeingOpened)throw new ue.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,a);var c=this._versions,d=c.filter(function(f){return f._cfg.version===a})[0];return d||(d=new this.Version(a),c.push(d),c.sort(Ah),d.stores({}),this._state.autoSchema=!1,d)},Oe.prototype._whenReady=function(a){var c=this;return this.idbdb&&(this._state.openComplete||le.letThrough||this._vip)?a():new ne(function(d,f){if(c._state.openComplete)return f(new ue.DatabaseClosed(c._state.dbOpenError));if(!c._state.isBeingOpened){if(!c._state.autoOpen)return void f(new ue.DatabaseClosed);c.open().catch($e)}c._state.dbReadyPromise.then(d,f)}).then(a)},Oe.prototype.use=function(a){var c=a.stack,d=a.create,f=a.level,m=a.name;return m&&this.unuse({stack:c,name:m}),a=this._middlewares[c]||(this._middlewares[c]=[]),a.push({stack:c,create:d,level:f??10,name:m}),a.sort(function(b,v){return b.level-v.level}),this},Oe.prototype.unuse=function(a){var c=a.stack,d=a.name,f=a.create;return c&&this._middlewares[c]&&(this._middlewares[c]=this._middlewares[c].filter(function(m){return f?m.create!==f:!!d&&m.name!==d})),this},Oe.prototype.open=function(){var a=this;return sn(Bt,function(){return Ph(a)})},Oe.prototype._close=function(){var a=this._state,c=Sn.indexOf(this);if(0<=c&&Sn.splice(c,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}a.isBeingOpened||(a.dbReadyPromise=new ne(function(d){a.dbReadyResolve=d}),a.openCanceller=new ne(function(d,f){a.cancelOpen=f}))},Oe.prototype.close=function(d){var c=(d===void 0?{disableAutoOpen:!0}:d).disableAutoOpen,d=this._state;c?(d.isBeingOpened&&d.cancelOpen(new ue.DatabaseClosed),this._close(),d.autoOpen=!1,d.dbOpenError=new ue.DatabaseClosed):(this._close(),d.autoOpen=this._options.autoOpen||d.isBeingOpened,d.openComplete=!1,d.dbOpenError=null)},Oe.prototype.delete=function(a){var c=this;a===void 0&&(a={disableAutoOpen:!0});var d=0<arguments.length&&typeof arguments[0]!="object",f=this._state;return new ne(function(m,b){function v(){c.close(a);var k=c._deps.indexedDB.deleteDatabase(c.name);k.onsuccess=Te(function(){var S,T,O;S=c._deps,T=c.name,O=S.indexedDB,S=S.IDBKeyRange,Ls(O)||T===Wr||Ps(O,S).delete(T).catch($e),m()}),k.onerror=Tt(b),k.onblocked=c._fireOnBlocked}if(d)throw new ue.InvalidArgument("Invalid closeOptions argument to db.delete()");f.isBeingOpened?f.dbReadyPromise.then(v):v()})},Oe.prototype.backendDB=function(){return this.idbdb},Oe.prototype.isOpen=function(){return this.idbdb!==null},Oe.prototype.hasBeenClosed=function(){var a=this._state.dbOpenError;return a&&a.name==="DatabaseClosed"},Oe.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Oe.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Oe.prototype,"tables",{get:function(){var a=this;return o(this._allTables).map(function(c){return a._allTables[c]})},enumerable:!1,configurable:!0}),Oe.prototype.transaction=function(){var a=function(c,d,f){var m=arguments.length;if(m<2)throw new ue.InvalidArgument("Too few arguments");for(var b=new Array(m-1);--m;)b[m-1]=arguments[m];return f=b.pop(),[c,ee(b),f]}.apply(this,arguments);return this._transaction.apply(this,a)},Oe.prototype._transaction=function(a,c,d){var f=this,m=le.trans;m&&m.db===this&&a.indexOf("!")===-1||(m=null);var b,v,k=a.indexOf("?")!==-1;a=a.replace("!","").replace("?","");try{if(v=c.map(function(T){if(T=T instanceof f.Table?T.name:T,typeof T!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return T}),a=="r"||a===xs)b=xs;else{if(a!="rw"&&a!=ks)throw new ue.InvalidArgument("Invalid transaction mode: "+a);b=ks}if(m){if(m.mode===xs&&b===ks){if(!k)throw new ue.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");m=null}m&&v.forEach(function(T){if(m&&m.storeNames.indexOf(T)===-1){if(!k)throw new ue.SubTransaction("Table "+T+" not included in parent transaction.");m=null}}),k&&m&&!m.active&&(m=null)}}catch(T){return m?m._promise(null,function(O,_){_(T)}):Re(T)}var S=function T(O,_,P,E,R){return ne.resolve().then(function(){var D=le.transless||le,I=O._createTransaction(_,P,O._dbSchema,E);if(I.explicit=!0,D={trans:I,transless:D},E)I.idbtrans=E.idbtrans;else try{I.create(),I.idbtrans._explicit=!0,O._state.PR1398_maxLoop=3}catch(U){return U.name===hs.InvalidState&&O.isOpen()&&0<--O._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),O.close({disableAutoOpen:!1}),O.open().then(function(){return T(O,_,P,null,R)})):Re(U)}var j,z=Ye(R);return z&&_n(),D=ne.follow(function(){var U;(j=R.call(I,I))&&(z?(U=Ht.bind(null,null),j.then(U,U)):typeof j.next=="function"&&typeof j.throw=="function"&&(j=Bs(j)))},D),(j&&typeof j.then=="function"?ne.resolve(j).then(function(U){return I.active?U:Re(new ue.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):D.then(function(){return j})).then(function(U){return E&&I._resolve(),I._completion.then(function(){return U})}).catch(function(U){return I._reject(U),Re(U)})})}.bind(null,this,b,v,m,d);return m?m._promise(b,S,"lock"):le.trans?sn(le.transless,function(){return f._whenReady(S)}):this._whenReady(S)},Oe.prototype.table=function(a){if(!g(this._allTables,a))throw new ue.InvalidTable("Table ".concat(a," does not exist"));return this._allTables[a]},Oe);function Oe(a,c){var d=this;this._middlewares={},this.verno=0;var f=Oe.dependencies;this._options=c=r({addons:Oe.addons,autoOpen:!0,indexedDB:f.indexedDB,IDBKeyRange:f.IDBKeyRange,cache:"cloned"},c),this._deps={indexedDB:c.indexedDB,IDBKeyRange:c.IDBKeyRange},f=c.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var m,b,v,k,S,T={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:$e,dbReadyPromise:null,cancelOpen:$e,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:c.autoOpen};T.dbReadyPromise=new ne(function(_){T.dbReadyResolve=_}),T.openCanceller=new ne(function(_,P){T.cancelOpen=P}),this._state=T,this.name=a,this.on=Zn(this,"populate","blocked","versionchange","close",{ready:[fs,$e]}),this.on.ready.subscribe=F(this.on.ready.subscribe,function(_){return function(P,E){Oe.vip(function(){var R,D=d._state;D.openComplete?(D.dbOpenError||ne.resolve().then(P),E&&_(P)):D.onReadyBeingFired?(D.onReadyBeingFired.push(P),E&&_(P)):(_(P),R=d,E||_(function I(){R.on.ready.unsubscribe(P),R.on.ready.unsubscribe(I)}))})}}),this.Collection=(m=this,er(kh.prototype,function(j,I){this.db=m;var E=Ma,R=null;if(I)try{E=I()}catch(z){R=z}var D=j._ctx,I=D.table,j=I.hook.reading.fire;this._ctx={table:I,index:D.index,isPrimKey:!D.index||I.schema.primKey.keyPath&&D.index===I.schema.primKey.name,range:E,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:R,or:D.or,valueMapper:j!==Gn?j:null}})),this.Table=(b=this,er(Ua.prototype,function(_,P,E){this.db=b,this._tx=E,this.name=_,this.schema=P,this.hook=b._allTables[_]?b._allTables[_].hook:Zn(null,{creating:[ph,$e],reading:[fh,Gn],updating:[gh,$e],deleting:[mh,$e]})})),this.Transaction=(v=this,er(Sh.prototype,function(_,P,E,R,D){var I=this;this.db=v,this.mode=_,this.storeNames=P,this.schema=E,this.chromeTransactionDurability=R,this.idbtrans=null,this.on=Zn(this,"complete","error","abort"),this.parent=D||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new ne(function(j,z){I._resolve=j,I._reject=z}),this._completion.then(function(){I.active=!1,I.on.complete.fire()},function(j){var z=I.active;return I.active=!1,I.on.error.fire(j),I.parent?I.parent._reject(j):z&&I.idbtrans&&I.idbtrans.abort(),Re(j)})})),this.Version=(k=this,er(Dh.prototype,function(_){this.db=k,this._cfg={version:_,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(S=this,er(Ka.prototype,function(_,P,E){if(this.db=S,this._ctx={table:_,index:P===":id"?null:P,or:E},this._cmp=this._ascending=we,this._descending=function(R,D){return we(D,R)},this._max=function(R,D){return 0<we(R,D)?R:D},this._min=function(R,D){return we(R,D)<0?R:D},this._IDBKeyRange=S._deps.IDBKeyRange,!this._IDBKeyRange)throw new ue.MissingAPI})),this.on("versionchange",function(_){0<_.newVersion?console.warn("Another connection wants to upgrade database '".concat(d.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(d.name,"'. Closing db now to resume the delete request.")),d.close({disableAutoOpen:!1})}),this.on("blocked",function(_){!_.newVersion||_.newVersion<_.oldVersion?console.warn("Dexie.delete('".concat(d.name,"') was blocked")):console.warn("Upgrade '".concat(d.name,"' blocked by other connection holding version ").concat(_.oldVersion/10))}),this._maxKey=ir(c.IDBKeyRange),this._createTransaction=function(_,P,E,R){return new d.Transaction(_,P,E,d._options.chromeTransactionDurability,R)},this._fireOnBlocked=function(_){d.on("blocked").fire(_),Sn.filter(function(P){return P.name===d.name&&P!==d&&!P._state.vcFired}).map(function(P){return P.on("versionchange").fire(_)})},this.use(jh),this.use(Fh),this.use(Nh),this.use(Lh),this.use(Mh);var O=new Proxy(this,{get:function(_,P,E){if(P==="_vip")return!0;if(P==="table")return function(D){return li(d.table(D),O)};var R=Reflect.get(_,P,E);return R instanceof Ua?li(R,O):P==="tables"?R.map(function(D){return li(D,O)}):P==="_createTransaction"?function(){return li(R.apply(this,arguments),O)}:R}});this.vip=O,f.forEach(function(_){return _(d)})}var ci,wt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Bh=(Vs.prototype.subscribe=function(a,c,d){return this._subscribe(a&&typeof a!="function"?a:{next:a,error:c,complete:d})},Vs.prototype[wt]=function(){return this},Vs);function Vs(a){this._subscribe=a}try{ci={indexedDB:s.indexedDB||s.mozIndexedDB||s.webkitIndexedDB||s.msIndexedDB,IDBKeyRange:s.IDBKeyRange||s.webkitIDBKeyRange}}catch{ci={indexedDB:null,IDBKeyRange:null}}function ol(a){var c,d=!1,f=new Bh(function(m){var b=Ye(a),v,k=!1,S={},T={},O={get closed(){return k},unsubscribe:function(){k||(k=!0,v&&v.abort(),_&&Wt.storagemutated.unsubscribe(E))}};m.start&&m.start(O);var _=!1,P=function(){return $s(R)},E=function(D){si(S,D),Ns(T,S)&&P()},R=function(){var D,I,j;!k&&ci.indexedDB&&(S={},D={},v&&v.abort(),v=new AbortController,j=(function(z){var U=kn();try{b&&_n();var H=qt(a,z);return H=b?H.finally(Ht):H}finally{U&&Cn()}})(I={subscr:D,signal:v.signal,requery:P,querier:a,trans:null}),Promise.resolve(j).then(function(z){d=!0,c=z,k||I.signal.aborted||(S={},(function(U){for(var H in U)if(g(U,H))return;return 1})(T=D)||_||(Wt(rr,E),_=!0),$s(function(){return!k&&m.next&&m.next(z)}))},function(z){d=!1,["DatabaseClosedError","AbortError"].includes(z?.name)||k||$s(function(){k||m.error&&m.error(z)})}))};return setTimeout(P,0),O});return f.hasValue=function(){return d},f.getValue=function(){return c},f}var cn=jt;function Ws(a){var c=Gt;try{Gt=!0,Wt.storagemutated.fire(a),Fs(a,!0)}finally{Gt=c}}w(cn,r(r({},Nr),{delete:function(a){return new cn(a,{addons:[]}).delete()},exists:function(a){return new cn(a,{addons:[]}).open().then(function(c){return c.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(a){try{return c=cn.dependencies,d=c.indexedDB,c=c.IDBKeyRange,(Ls(d)?Promise.resolve(d.databases()).then(function(f){return f.map(function(m){return m.name}).filter(function(m){return m!==Wr})}):Ps(d,c).toCollection().primaryKeys()).then(a)}catch{return Re(new ue.MissingAPI)}var c,d},defineClass:function(){return function(a){u(this,a)}},ignoreTransaction:function(a){return le.trans?sn(le.transless,a):a()},vip:Ms,async:function(a){return function(){try{var c=Bs(a.apply(this,arguments));return c&&typeof c.then=="function"?c:ne.resolve(c)}catch(d){return Re(d)}}},spawn:function(a,c,d){try{var f=Bs(a.apply(d,c||[]));return f&&typeof f.then=="function"?f:ne.resolve(f)}catch(m){return Re(m)}},currentTransaction:{get:function(){return le.trans||null}},waitFor:function(a,c){return c=ne.resolve(typeof a=="function"?cn.ignoreTransaction(a):a).timeout(c||6e4),le.trans?le.trans.waitFor(c):c},Promise:ne,debug:{get:function(){return Et},set:function(a){Ia(a)}},derive:x,extend:u,props:w,override:F,Events:Zn,on:Wt,liveQuery:ol,extendObservabilitySet:si,getByKeyPath:ie,setByKeyPath:q,delByKeyPath:function(a,c){typeof c=="string"?q(a,c,void 0):"length"in c&&[].map.call(c,function(d){q(a,d,void 0)})},shallowClone:V,deepClone:Q,getObjectDiff:qs,cmp:we,asap:W,minKey:-1/0,addons:[],connections:Sn,errnames:hs,dependencies:ci,cache:ln,semVer:"4.0.10",version:"4.0.10".split(".").map(function(a){return parseInt(a)}).reduce(function(a,c,d){return a+c/Math.pow(10,2*d)})})),cn.maxKey=ir(cn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Wt(rr,function(a){Gt||(a=new CustomEvent(Es,{detail:a}),Gt=!0,dispatchEvent(a),Gt=!1)}),addEventListener(Es,function(a){a=a.detail,Gt||Ws(a)}));var In,Gt=!1,al=function(){};return typeof BroadcastChannel<"u"&&((al=function(){(In=new BroadcastChannel(Es)).onmessage=function(a){return a.data&&Ws(a.data)}})(),typeof In.unref=="function"&&In.unref(),Wt(rr,function(a){Gt||In.postMessage(a)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(a){if(!jt.disableBfCache&&a.persisted){Et&&console.debug("Dexie: handling persisted pagehide"),In?.close();for(var c=0,d=Sn;c<d.length;c++)d[c].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(a){!jt.disableBfCache&&a.persisted&&(Et&&console.debug("Dexie: handling persisted pageshow"),al(),Ws({all:new Ve(-1/0,[[]])}))})),ne.rejectionMapper=function(a,c){return!a||a instanceof Ke||a instanceof TypeError||a instanceof SyntaxError||!a.name||!Ta[a.name]?a:(c=new Ta[a.name](c||a.message,a),"stack"in a&&$(c,"stack",{get:function(){return this.inner.stack}}),c)},Ia(Et),r(jt,Object.freeze({__proto__:null,Dexie:jt,liveQuery:ol,Entity:ja,cmp:we,PropModSymbol:Mt,PropModification:tr,replacePrefix:function(a,c){return new tr({replacePrefix:[a,c]})},add:function(a){return new tr({add:a})},remove:function(a){return new tr({remove:a})},default:jt,RangeSet:Ve,mergeRanges:ar,rangesOverlap:Qa}),{default:jt}),jt})})($i)),$i.exports}var kf=xf();const ho=vf(kf),$l=Symbol.for("Dexie"),Ti=globalThis[$l]||(globalThis[$l]=ho);if(ho.semVer!==Ti.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${ho.semVer} and ${Ti.semVer}`);const{liveQuery:zo,mergeRanges:C$,rangesOverlap:_$,RangeSet:S$,cmp:E$,Entity:T$,PropModSymbol:I$,PropModification:A$,replacePrefix:R$,add:O$,remove:D$}=Ti,Cf="easydb";function pn(e,t){return`${e}::${t}`}let di=null;function ru(){if(di)return di;const e=new Ti(Cf);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.version(3).stores({settings:"key, workspaceId, name"}).upgrade(async t=>{const n=t.table("settings"),i=(await n.toArray()).filter(l=>l.workspaceId==null);if(i.length===0)return;const s=(await t.table("workspaces").toArray()).map(l=>l.id),o=s.length>0?s:["default"];for(const l of i){for(const u of o)await n.put({key:pn(u,l.key),workspaceId:u,name:l.key,value:l.value});await n.delete(l.key)}}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>_f()),di={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},di}function _f(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function cr(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const n=Object.entries(t);return e.filter(r=>Uo(r,n)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,n){if(await e.update(t,n)===0)throw new Error(`patch: no doc with id=${t}`);const i=await e.get(t);if(!i)throw new Error(`patch: doc id=${t} vanished after update`);return i},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const r=zo(()=>e.toArray()).subscribe({next:i=>t(i)});return()=>r.unsubscribe()}}}function Sf(e,t){return{async find(n){const r=e.where("tableId").equals(t);if(!n||Object.keys(n).length===0)return r.toArray();const i=Object.entries(n);return r.filter(s=>Uo(s,i)).toArray()},async findOne(n){const r=await e.get(n);return r&&r.tableId===t?r:null},async insert(n){const r={...n,tableId:t};return await e.add(r),r},async bulkInsert(n){if(n.length===0)return[];const r=n.map(i=>({...i,tableId:t}));return await e.bulkAdd(r),r},async upsert(n){const r={...n,tableId:t};return await e.put(r),r},async patch(n,r){if(await e.update(n,r)===0)throw new Error(`row patch: no row ${n}`);const s=await e.get(n);if(!s)throw new Error(`row patch: row ${n} vanished after update`);return s},async remove(n){await e.delete(n)},async bulkRemove(n){n.length!==0&&await e.bulkDelete(n)},subscribe(n){const i=zo(()=>e.where("tableId").equals(t).toArray()).subscribe({next:s=>n(s)});return()=>i.unsubscribe()}}}function Ef(e,t){const n=i=>({...i,workspaceId:t(),key:pn(t(),i.name),name:i.name,value:i.value}),r=()=>e.where("workspaceId").equals(t());return{async find(i){const s=await r().toArray();if(!i||Object.keys(i).length===0)return s;const o=Object.entries(i);return s.filter(l=>Uo(l,o))},async findOne(i){return await e.get(pn(t(),i))??null},async insert(i){const s=n(i);return await e.add(s),s},async bulkInsert(i){if(i.length===0)return[];const s=i.map(o=>n(o));return await e.bulkAdd(s),s},async upsert(i){const s=n(i);return await e.put(s),s},async patch(i,s){const o=pn(t(),i);if(await e.update(o,s)===0)throw new Error(`setting patch: no setting ${i}`);const u=await e.get(o);if(!u)throw new Error(`setting patch: ${i} vanished after update`);return u},async remove(i){await e.delete(pn(t(),i))},async bulkRemove(i){i.length!==0&&await e.bulkDelete(i.map(s=>pn(t(),s)))},subscribe(i){const o=zo(()=>r().toArray()).subscribe({next:l=>i(l)});return()=>o.unsubscribe()}}}function Uo(e,t){for(const[n,r]of t)if(e[n]!==r)return!1;return!0}function Tf(e,t){return{workspaces:cr(e.workspaces),tables:cr(e.tables),settings:Ef(e.settings,t),plugins:cr(e.plugins),viewTemplates:cr(e.viewTemplates),viewInstances:cr(e.viewInstances),rows:n=>Sf(e.rows,n)}}function If(e){const{base:t,providers:n,tableById:r,ctx:i}=e,s=new Map;return{...t,rows(o){const l=r(o),u=l?.source;if(u){const h=n.get(u.type);if(h){const p=JSON.stringify(u),g=s.get(o);if(g&&g.key===p)return g.coll;const w=h.create(l,i);return s.set(o,{key:p,coll:w}),w}}return s.delete(o),t.rows(o)}}}function Af(){const e=new Map;return{on(t,n){let r=e.get(t);return r||(r=new Set,e.set(t,r)),r.add(n),()=>{r.delete(n)}},emit(t,n){const r=e.get(t);if(r)for(const i of r)try{i(n)}catch(s){console.error(`[event:${String(t)}] listener threw`,s)}}}}const pt=ke`
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
`;function mt(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const n=t.querySelector("form");n&&(e.preventDefault(),n.requestSubmit())}const xl=new WeakSet;function gt(e,t){if(xl.has(t))return;xl.add(t);let n=0,r=0,i=0,s=0,o=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",u=>{if(u.target.closest("button, input, textarea, select, a, label"))return;o=!0,n=u.clientX,r=u.clientY;const p=e.getBoundingClientRect();i=p.left,s=p.top,t.setPointerCapture(u.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",u=>{if(!o)return;const h=u.clientX-n,p=u.clientY-r,g=-e.offsetWidth+80,w=window.innerWidth-80,y=0,$=window.innerHeight-40,x=Math.max(g,Math.min(w,i+h)),A=Math.max(y,Math.min($,s+p));e.style.position="fixed",e.style.left=`${x}px`,e.style.top=`${A}px`,e.style.margin="0"});const l=u=>{if(o){o=!1;try{t.releasePointerCapture(u.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l)}var Rf=Object.defineProperty,Of=Object.getOwnPropertyDescriptor,iu=(e,t,n,r)=>{for(var i=r>1?void 0:r?Of(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Rf(t,n,i),i};let st=class extends ve{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitChoice=e=>{if(e.preventDefault(),this.current?.kind!=="choice")return;const t=this.current.options[0];t!==void 0&&this.closeAndResolve(t)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),st.instance=this}disconnectedCallback(){super.disconnectedCallback(),st.instance===this&&(st.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&gt(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(n=>{this.current={kind:"alert",title:t,message:e,resolve:n}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",n="Input"){return this.enqueue(r=>{this.current={kind:"prompt",title:n,message:e,value:t,resolve:r}})}choice(e,t,n="Choose"){return this.enqueue(r=>{this.current={kind:"choice",title:n,message:e,options:t,resolve:r}})}enqueue(e){return new Promise(t=>{const n=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(n):n()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const n=this.queue.shift();n&&n()}))}render(){const e=this.current;return C`
      <dialog @cancel=${this.onCancel} @keydown=${mt}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):re}
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
              ${e.message?C`<p class="message">${e.message}</p>`:re}
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
        `}}};st.instance=null;st.styles=[pt,ke`
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
    `];iu([B()],st.prototype,"current",2);st=iu([Se("host-dialogs")],st);const bt=ke`
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
`;var Df=Object.defineProperty,Pf=Object.getOwnPropertyDescriptor,su=(e,t,n,r)=>{for(var i=r>1?void 0:r?Pf(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Df(t,n,i),i};let Nt=class extends ve{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),Nt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Nt.instance===this&&(Nt.instance=null)}show(e,t){const n={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,n];const r=t?.durationMs??(n.kind==="error"||n.kind==="warning"?7e3:4e3);n.timer=window.setTimeout(()=>this.dismiss(n.id),r)}dismiss(e){const t=this.toasts.find(n=>n.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(n=>n.id!==e)}render(){return C`
      ${this.toasts.map(e=>C`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${Mf(e.kind)}</span>
            <span class="body">
              ${e.title?C`<strong>${e.title}</strong>`:""}${Lf(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};Nt.instance=null;Nt.styles=[bt,ke`
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
    `];su([B()],Nt.prototype,"toasts",2);Nt=su([Se("toast-host")],Nt);function Lf(e){const t=/(https?:\/\/[^\s)]+)/g,n=[];let r=0,i;for(;(i=t.exec(e))!==null;)i.index>r&&n.push(e.slice(r,i.index)),n.push({url:i[0]}),r=i.index+i[0].length;return r<e.length&&n.push(e.slice(r)),n.length===0?e:n.map(s=>typeof s=="string"?s:C`<a href=${s.url} target="_blank" rel="noopener noreferrer">${s.url}</a>`)}function Mf(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function jf(){return{headerButtons:[],footerButtons:[],tableButtons:[],columnEditorActions:[],importers:[],connectors:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map,commands:[]}}function At(e,t){return e.push(t),()=>{const n=e.indexOf(t);n>=0&&e.splice(n,1)}}function Qs(e,t,n){return e.set(t,n),()=>{e.get(t)===n&&e.delete(t)}}function Nf(e){return{registerHeaderButton:t=>At(e.headerButtons,t),registerFooterButton:t=>At(e.footerButtons,t),registerTableButton:t=>At(e.tableButtons,t),registerColumnEditorAction:t=>At(e.columnEditorActions,t),registerImporter:t=>At(e.importers,t),registerConnector:t=>At(e.connectors,t),registerExporter:t=>At(e.exporters,t),registerUrlSource:t=>At(e.urlSources,t),registerDropHandler:t=>At(e.dropHandlers,t),registerCellRenderer:(t,n)=>Qs(e.cellRenderers,t,n),registerRowRenderer:(t,n)=>Qs(e.rowRenderers,t,n),registerTableRenderer:(t,n)=>Qs(e.tableRenderers,t,n),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerCommand:t=>At(e.commands,t),openCommandPalette:()=>{document.dispatchEvent(new CustomEvent("easydb:open-command-palette"))},registerSettings:(t,n,r)=>(e.settings.set(t,{name:n,fields:r}),()=>{e.settings.get(t)?.name===n&&e.settings.delete(t)}),dialogs:zf}}const zf={async alert(e,t){const n=st.instance;if(n)return n.alert(e,t);window.alert(e)},async confirm(e,t){const n=st.instance;return n?n.confirm(e,t):window.confirm(e)},async prompt(e,t,n){const r=st.instance;return r?r.prompt(e,t,n):window.prompt(e,t)??null},async choice(e,t,n){const r=st.instance;if(r)return r.choice(e,t,n);const i=window.prompt(`${e}

Options: ${t.join(", ")}`);return i&&t.includes(i)?i:null},toast(e,t){const n=Nt.instance;n?n.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},Fo="/easydbaccess/settings.json",ou="/easydbaccess/secrets.txt";function Ar(e){try{return globalThis.localStorage??null}catch{return null}}function Bi(e){const t=Ar();if(!t)return{};const n=t.getItem(Fo);if(!n)return{};try{const r=JSON.parse(n);return r&&typeof r=="object"?r:{}}catch{return{}}}function Bo(e,t){return Bi()[e]}function Uf(e,t,n){const r=Ar();if(!r)return;const i=Bi();i[e]=t,r.setItem(Fo,JSON.stringify(i))}function Ff(e,t){const n=Ar();if(!n)return;const r=Bi();e in r&&(delete r[e],n.setItem(Fo,JSON.stringify(r)))}function fo(e,t){return e in Bi()}function qi(e){return Ar()?.getItem(ou)??""}function au(e,t){Ar()?.setItem(ou,e)}function xr(e){const t={};for(const n of e.split(/\r?\n/)){const r=n.trim();if(!r||r.startsWith("#"))continue;const i=r.indexOf(":");if(i<0)continue;const s=r.slice(0,i).trim(),o=r.slice(i+1).trim();s&&(t[s]=o)}return t}function lu(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(n,r)=>{const i=t[r.trim()];return i===void 0?n:i})}function Bf(e){const t=Nf(e.registries),n=e.registries.rowSources,r=o=>(n.set(o.type,o),()=>{n.get(o.type)===o&&n.delete(o.type)}),i=Hf(e.store,e.registries),s={open(o){return console.warn("[host] windows.open is stubbed until Phase 5",o.id),{id:o.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:s,registerRowSource:r,settings:i,backend:{fetch:async(o,l)=>{const u=await qf(e.store),h=l?.body instanceof ArrayBuffer;if(!u||h)return globalThis.fetch(o,l);const p={url:o};return l?.method&&(p.method=l.method),l?.headers&&(p.headers=l.headers),typeof l?.body=="string"&&(p.body=l.body),globalThis.fetch(`${u}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)})},async saveFile(o,l,u){const h=typeof l=="string"?new Blob([l],{type:u??"application/octet-stream"}):l,p=URL.createObjectURL(h),g=document.createElement("a");g.href=p,g.download=o,g.rel="noopener",document.body.appendChild(g),g.click(),g.remove(),setTimeout(()=>URL.revokeObjectURL(p),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function qf(e){const t="server-sync:url";let n=fo(t)?Bo(t):void 0;return n===void 0&&(n=(await e.settings.findOne(t))?.value),typeof n!="string"||n.length===0?null:lu(n,xr(qi())).replace(/\/+$/,"")}function Hf(e,t){const n=(s,o)=>`${s}:${o}`,r=(s,o)=>t.settings.get(s)?.fields.find(l=>l.key===o),i=s=>typeof s=="string"?lu(s,xr(qi())):s;return{async get(s,o){const l=n(s,o);let u;if(fo(l))u=Bo(l);else{const h=await e.settings.findOne(l);u=h?h.value:r(s,o)?.default}return i(u)},async set(s,o,l,u){const h=n(s,o);(u??r(s,o)?.scope??"workspace")==="user"?(Uf(h,l),await e.settings.remove(h).catch(()=>{})):(await e.settings.upsert({name:h,value:l}),Ff(h))},async placement(s,o){const l=n(s,o);return fo(l)?"user":await e.settings.findOne(l)?"workspace":null}}}function kl(e,t){return e.has(t)?e.get(t)!=="0":!1}function Kf(){if(typeof location>"u")return"off";const e=new URLSearchParams(location.search);return kl(e,"safemode")?"all-optional":kl(e,"safemode1")?"url-plugins":"off"}const yt=Kf();function qo(e){let t;try{t=new URL(e)}catch{return e}const n=t.hostname.toLowerCase();if(n==="github.com"||n==="www.github.com"){const r=t.pathname.split("/").filter(Boolean);if(r.length>=5&&(r[2]==="blob"||r[2]==="raw")){const i=r[0],s=r[1];let o=r.slice(3);return o.length>=3&&o[0]==="refs"&&(o[1]==="heads"||o[1]==="tags")&&(o=o.slice(2)),`https://raw.githubusercontent.com/${[i,s,...o].join("/")}`}}return e}function cu(e){if(e.length>1024)return!1;const t=e.split(`
`);return t[0]?.startsWith("version https://git-lfs.github.com/spec/v1")===!0&&t.some(n=>n.startsWith("oid "))&&t.some(n=>n.startsWith("size "))}function uu(e){const t=qo(e);let n;try{n=new URL(t)}catch{return null}if(n.hostname.toLowerCase()!=="raw.githubusercontent.com")return null;const r=n.pathname.replace(/^\/+/,"");return r.split("/").filter(Boolean).length<4?null:`https://media.githubusercontent.com/media/${r}`}async function du(e,t){const n=Number(e.headers?.get?.("content-length")),r=e.body?.getReader?.();if(r&&Number.isFinite(n)&&n>0){const i=[];let s=0;for(;;){const{done:u,value:h}=await r.read();if(u)break;h&&(i.push(h),s+=h.length,t?.(Math.min(1,s/n)))}const o=new Uint8Array(s);let l=0;for(const u of i)o.set(u,l),l+=u.length;return new TextDecoder().decode(o)}return await e.text()}const Vf=50*1024*1024;function Cl(e){try{return new URL(e).host}catch{return e}}function zt(e){try{const n=new URL(e).pathname.split("/").filter(Boolean).pop();return n&&n.length>0?n:"sample.db.json"}catch{return"sample.db.json"}}async function Wf(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}function _l(e){const t=e/1048576;return`${Number.isInteger(t)?t:t.toFixed(1)} MB`}async function Gf(e,t,n={}){const r=qo(t),i=n.slowMs??2e3;let s=setTimeout(()=>{s=void 0,n.onSlow?.()},i);const o=()=>{s!==void 0&&(clearTimeout(s),s=void 0)},l=n.maxBytes===null?null:n.maxBytes??Vf,u=async h=>{let p;try{p=await e.backend.fetch(h)}catch(w){throw new Error(`Could not reach ${Cl(h)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${w.message}]`)}if(!p.ok){const w=await Wf(p);throw new Error(`HTTP ${p.status} ${p.statusText||""}`.trim()+(w?` — ${w}`:""))}const g=Number(p.headers.get("content-length"));if(l!==null&&Number.isFinite(g)&&g>l)throw p.body?.cancel().catch(()=>{}),new Error(`Response is ${_l(g)}, over the ${_l(l)} browser import limit. Set a row limit, import it as a Reference instead of a Copy, take a smaller extract, or connect to a server/Datasette for large datasets.`);try{return await du(p,n.onProgress)}catch(w){throw new Error(`Failed reading the response body from ${Cl(h)}: ${w.message}`)}};try{const h=await u(r);if(cu(h)){const p=uu(r);if(p)return await u(p)}return h}finally{o()}}async function Rr(e,t,n,r={}){const{TopProgress:i}=await ut(async()=>{const{TopProgress:o}=await import("./top-progress-DwXty6jW.js");return{TopProgress:o}},[]),s={handle:null};try{return await Gf(e,t,{onSlow:()=>{s.handle=i.begin(n)},onProgress:o=>s.handle?.fraction(o),...r.maxBytes!==void 0?{maxBytes:r.maxBytes}:{}})}finally{s.handle?.done()}}function xe(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function De(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function po(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}const Yf={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV or TSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function Qf(e){e.ui.registerImporter(Zf),ut(()=>import("./csv-import-options-DkcfBJ6F.js"),[]),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const r=dp(t).filter(hp);if(r.length===0)return!1;t.preventDefault();const i=r.length===1?`"${r[0].name}"`:`${r.length} files`,s=await e.ui.dialogs.choice(`Import ${i} straight away, or review the columns first (rename, hide, fix duplicate names)?`,[Jf,Sl],"Import CSV");if(!s)return!0;const o=s===Sl?async l=>{const{editColumnNames:u}=await ut(async()=>{const{editColumnNames:h}=await Promise.resolve().then(()=>By);return{editColumnNames:h}},void 0);return u(l)}:void 0;for(const l of r)await ep(e,l,o);return!0})}function mo(e){return e.kind==="file"&&e.file?e.file.name:e.kind==="url"&&e.url?zt(e.url):"pasted"}function Xf(e){return Vo(mo(e))||"imported"}const Jf="Import directly",Sl="Edit columns first",Zf={id:"csv",label:"CSV / TSV",icon:"table_view",order:10,accept:[".csv",".tsv",".tab","text/csv","text/tab-separated-values"],panel:"csv-import-options",samples:[{label:"Air quality — 2016 readings (CSV)",url:"https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv"}],supports:{url:!0,file:!0,text:!0,reference:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??e.text??"";return/\.(csv|tsv|tab)$/i.test(t)?.95:e.file?.type==="text/csv"?.9:e.kind==="text"?.2:0},async list(e,t){return[{name:Xf(t),rowCount:null,handle:t}]},async*read(e,t){const n=t.handle;let r;n.kind==="file"&&n.file?r=e.maxRows!=null?await pu(n.file,e.maxRows):await n.file.text():n.kind==="url"&&n.url?r=await e.fetchText(n.url,`Reading ${mo(n)}…`):r=n.text??"";const s=(typeof e.panel.separator=="string"?e.panel.separator:void 0)??Wo(mo(n)),o={...e.maxRows!=null?{maxRows:e.maxRows}:{},...s?{separator:s}:{}},l=e.targetColumns;if(l&&l.length>0){yield{rows:Ho(r,o).rows.map(g=>{const w={};for(let y=0;y<l.length;y++){const $=l[y];w[$.field]=Ko(g[y]??"",$.type)}return w})};return}const u=Un(r,o);yield{columns:u.columns,rows:u.rows}},reference(e,t){const n=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");return{type:"url",config:{url:n.url,format:"csv"}}}};async function ep(e,t,n){await hu(e,await t.text(),t.name,n?{editColumns:n}:void 0)}async function hu(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("csv-import: no active workspace");const s=Vo(n||"imported")||"imported",o=r.separator??Wo(n),l=(await e.store.tables.find()).find(w=>w.workspaceId===i&&w.name===s);let u,h;if(l){const w=await e.ui.dialogs.choice(`A table named "${s}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!w)return;w==="Append rows"?(h="append",u=l.id):w==="Overwrite rows"?(h="overwrite",u=l.id):(h="new",u=xe())}else h="new",u=xe();e.events.emit("import:before",{source:"csv",tableId:u});let p;if(h==="new"){const w=Un(t,{maxRows:r.maxRows,separator:o});let y=w.columns,$=w.rows;if(r.editColumns){const A=await r.editColumns(y);if(A===null)return;$=fp($,y,A),y=A}r.maxRows!=null&&($=$.slice(0,r.maxRows));const x=l?`${s} (${Date.now().toString(36)})`:s;await e.store.tables.insert({id:u,workspaceId:i,name:x,code:po(x),columns:y,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()}),p=$.map(A=>({id:xe(),tableId:u,data:A,updatedAt:Date.now()}))}else{const w=l.columns,y=Ho(t,{maxRows:r.maxRows,separator:o});if(p=(r.maxRows!=null?y.rows.slice(0,r.maxRows):y.rows).map(x=>{const A={};for(let L=0;L<w.length;L++){const M=w[L];A[M.field]=Ko(x[L]??"",M.type)}return{id:xe(),tableId:u,data:A,updatedAt:Date.now()}}),h==="overwrite"){const x=e.store.rows(u),A=await x.find();await x.bulkRemove(A.map(L=>L.id))}}await e.store.rows(u).bulkInsert(p),e.events.emit("import:after",{source:"csv",tableId:u,rowCount:p.length})}function Ho(e,t={}){const n=e.replace(/﻿/,""),r=t.separator??mu(n),i=gu(n,r,fu(t.maxRows));if(i.length===0)return{header:[],rows:[]};const s=i[0],o=i.slice(1).filter(l=>!(l.length===1&&l[0]===""));return{header:s,rows:o}}function fu(e){return e!=null?e+1:void 0}async function pu(e,t){const r=new TextDecoder,i=t+1;let s="",o=0,l=!1,u=0;for(;u<e.size;){const h=new Uint8Array(await e.slice(u,u+1048576).arrayBuffer());u+=1048576;const p=r.decode(h,{stream:!0});for(let g=0;g<p.length;g++){const w=p[g];if(w==='"')l=!l;else if(w===`
`&&!l&&(o+=1,o>=i))return s+p.slice(0,g+1)}s+=p}return s}function Un(e,t={}){const n=e.replace(/﻿/,""),r=t.separator??mu(n),i=gu(n,r,fu(t.maxRows));if(i.length===0)return{columns:[],rows:[]};const s=i[0],o=i.slice(1).filter(y=>!(y.length===1&&y[0]==="")),l=s.map((y,$)=>rp(y,$)),u=yu(l.map(y=>y.field)),h=o.map(y=>{const $={};for(let x=0;x<u.length;x++)$[u[x]]=y[x]??"";return $}),p=l.map((y,$)=>y.type?y.type:ip(h.map(x=>x[u[$]]??"").filter(x=>x.length>0))),g=l.map((y,$)=>{const x=p[$]??"string",A={field:u[$],label:y.label,type:x},L=np(x),M=y.renderer??L;return M&&(A.renderer=M),y.default!==void 0&&(A.default=y.default),y.max!=null&&(A.max=y.max),y.unique&&(A.unique=!0),y.notnull&&(A.notnull=!0),y.hidden&&(A.hidden=!0),A}),w=h.map(y=>{const $={};for(let x=0;x<u.length;x++){const A=u[x],L=p[x]??"string";$[A]=Ko(y[A]??"",L)}return $});return{columns:g,rows:w}}const tp=new Set(["string","number","boolean","date","datetime"]),El={color:"color",image:"image"};function np(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function rp(e,t){const n=e.trim();if(!n.includes(":"))return{field:po(n||`col_${t+1}`),label:n||`Column ${t+1}`};const r=n.split(":"),i=po(r[0]||`col_${t+1}`),s=(r[1]??r[0]??"").trim()||i,o={field:i,label:s},l=(r[2]??"").trim();l&&(tp.has(l)?o.type=l:El[l]&&(o.type="string",o.renderer=El[l]));const u=(r[3]??"").trim();u&&(o.default=u);const h=(r[4]??"").trim();if(h){const g=Number(h);Number.isFinite(g)&&g>0&&(o.max=g)}const p=(r[5]??"").toLowerCase();return p.includes("u")&&(o.unique=!0),p.includes("n")&&(o.notnull=!0),p.includes("h")&&(o.hidden=!0),o}function mu(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),n={",":0,";":0,"	":0};for(const s of t)s in n&&(n[s]+=1);let r=",",i=-1;for(const s of[",",";","	"])(n[s]??0)>i&&(r=s,i=n[s]??0);return r}function gu(e,t,n){const r=[];let i=[],s="",o=!1;for(let l=0;l<e.length;l++){const u=e[l];if(o)u==='"'?e[l+1]==='"'?(s+='"',l++):o=!1:s+=u;else if(u==='"')o=!0;else if(u===t)i.push(s),s="";else if(u===`
`||u==="\r"){if(u==="\r"&&e[l+1]===`
`&&l++,i.push(s),r.push(i),i=[],s="",n!=null&&r.length>=n)return r}else s+=u}return(s.length>0||i.length>0)&&(i.push(s),r.push(i)),r}function ip(e){return e.length===0?"string":e.every(op)?"boolean":e.every(ap)?"number":e.every(cp)?"datetime":e.every(lp)?"date":"string"}const sp=/^(true|false|yes|no|0|1)$/i;function op(e){return sp.test(e.trim())}function ap(e){const t=e.trim();if(t==="")return!1;const n=Number(t);return Number.isFinite(n)}function lp(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function cp(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function Ko(e,t){const n=e.trim();switch(t){case"number":{if(n==="")return null;const r=Number(n);return Number.isFinite(r)?r:n}case"boolean":return n===""?null:/^(true|yes|1)$/i.test(n);case"date":return bu(n);case"datetime":return up(n);default:return e}}function bu(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){const r=parseInt(t[1],10),i=parseInt(t[2],10),s=t[3];let o=parseInt(s,10);s.length===2&&(o+=2e3);let l,u;return r>12?(l=r,u=i):i>12?(u=r,l=i):(l=r,u=i),`${o.toString().padStart(4,"0")}-${u.toString().padStart(2,"0")}-${l.toString().padStart(2,"0")}`}const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toISOString().slice(0,10)}function up(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),n=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(n)return`${n[1]}T${n[2].padStart(5,"0")}`;const r=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(r)return`${bu(`${r[1]}/${r[2]}/${r[3]}`)}T${r[4].padStart(5,"0")}`;const i=new Date(e);if(!Number.isNaN(i.getTime())){const s=i.toISOString();return`${s.slice(0,10)}T${s.slice(11,16)}`}return e}function dp(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const i=r.getAsFile();i&&n.push(i)}return n}return[]}const wu=/\.(csv|tsv|tab)$/i;function Vo(e){return e.replace(wu,"")}function Wo(e){return/\.(tsv|tab)$/i.test(e)?"	":void 0}function hp(e){return!!(wu.test(e.name)||e.type==="text/csv"||e.type==="application/csv"||e.type==="text/tab-separated-values")}function yu(e){const t=new Map,n=new Set,r=[];for(const i of e){let s=i,o=t.get(i)??0;for(;n.has(s);)o+=1,s=`${i}_${o+1}`;t.set(i,o),n.add(s),r.push(s)}return r}function fp(e,t,n){return e.map(r=>{const i={};for(let s=0;s<t.length;s++)i[n[s].field]=r[t[s].field];return i})}const pp=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:yu,importCsvText:hu,init:Qf,meta:Yf,parseCsv:Un,parseCsvRaw:Ho,readCsvHead:pu,separatorForName:Wo,stripDelimitedExt:Vo},Symbol.toStringTag,{value:"Module"})),mp={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"CSV serializer for the per-table export menu (see dump-export.ts) and the importer/exporter registry.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},gp={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Go(e,t)}};function bp(e){e.ui.registerExporter(gp)}function Go(e,t){const n=e.columns.map(s=>s.field),r=e.columns.map(s=>Tl(s.label??s.field)),i=t.map(s=>n.map(o=>Tl(wp(s.data[o]))).join(","));return[r.join(","),...i].join(`\r
`)}function wp(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function Tl(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const yp=Object.freeze(Object.defineProperty({__proto__:null,init:bp,meta:mp,serializeCsv:Go},Symbol.toStringTag,{value:"Module"}));var vp=Object.defineProperty,$p=Object.getOwnPropertyDescriptor,Fn=(e,t,n,r)=>{for(var i=r>1?void 0:r?$p(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&vp(t,n,i),i};function Ii(e,t={}){return(ot.instance??xp()).open(e,t)}function xp(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function kp(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let ot=class extends ve{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((n,r)=>n?r:-1).filter(n=>n>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),ot.instance=this}disconnectedCallback(){super.disconnectedCallback(),ot.instance===this&&(ot.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&gt(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(n=>!n.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return C`
      <dialog @cancel=${this.onCancel} @keydown=${mt}>
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
                      <span class="size">${kp(t.size)}</span>
                      ${t.detail?C`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};ot.instance=null;ot.styles=[pt,ke`
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
    `];Fn([B()],ot.prototype,"items",2);Fn([B()],ot.prototype,"selected",2);Fn([B()],ot.prototype,"heading",2);Fn([B()],ot.prototype,"message",2);Fn([B()],ot.prototype,"confirmLabel",2);ot=Fn([Se("table-select-dialog")],ot);function Yo(e,t){return e.every((n,r)=>n.field===t[r]?.field)?null:n=>{const r={};for(let i=0;i<e.length;i++)r[t[i].field]=n[e[i].field];return r}}function Il(e,t){if(t.length===0)return null;const n=new Set(t.map(i=>i.from)),r={};for(const i of Object.keys(e))n.has(i)||(r[i]=e[i]);for(const{from:i,to:s}of t)Object.prototype.hasOwnProperty.call(e,i)&&(r[s]=e[i]);return r}function Hi(e,t,n=[]){const r=new Set(e.map(l=>l.field)),i=new Set(n),s=[...e],o=[];for(const l of t)r.has(l.field)||i.has(l.field)||(s.push(l),o.push(l.field),r.add(l.field));return{columns:s,newFields:o}}function Ki(e,t){const n=new Set([...e].map(i=>i.toLowerCase())),r=t.trim()||"imported";if(!n.has(r.toLowerCase()))return r;for(let i=2;;i++){const s=`${r}-${i}`;if(!n.has(s.toLowerCase()))return s}}async function Qo(e,t){return(await e.store.tables.find()).filter(n=>n.workspaceId===t).map(n=>n.name)}async function vu(e,t,n,r){const{workspaceId:i,importerId:s,target:o,maxRows:l}=r;let u,h,p,g=!1,w=0,y,$=null;const x=L=>e.store.rows(L),A=async L=>{if(g)return!0;if(o.kind==="new"){let M=L.columns??[];if(r.editColumns){const K=await r.editColumns(M);if(K===null)return!1;$=Yo(M,K),M=K}u=xe(),h=Ki(await Qo(e,i),t);const F={id:u,workspaceId:i,name:h,code:De(h),columns:M,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()};await e.store.tables.insert(F),p=!0}else{const M=await e.store.tables.findOne(o.tableId);if(!M)throw new Error("The table to import into no longer exists.");if(u=M.id,h=M.name,p=!1,o.kind==="overwrite"){const F=await x(u).find();await x(u).bulkRemove(F.map(K=>K.id))}if(L.columns?.length){const F=Hi(M.columns,L.columns,M.deletedColumns??[]);F.newFields.length>0&&await e.store.tables.patch(u,{columns:F.columns,updatedAt:Date.now()})}}return e.events.emit("import:before",{source:s,tableId:u}),g=!0,!0};for await(const L of n){if(l!=null&&w>=l)break;if(!await A(L))return null;L.totalCount!=null&&(y=L.totalCount);let M=L.rows;if(l!=null&&w+M.length>l&&(M=M.slice(0,l-w)),M.length===0)continue;$&&(M=M.map($));const F=Date.now(),K=M.map(W=>({id:xe(),tableId:u,data:W,updatedAt:F}));await x(u).bulkInsert(K),w+=K.length,r.onProgress?.(w,y)}return!g&&!await A({})?null:(e.events.emit("import:after",{source:s,tableId:u,rowCount:w}),{tableId:u,tableName:h,rowCount:w,created:p})}function Al(e,t,n={}){const r=t.mode==="reference"||t.maxRows!=null;return{api:e,fetchText:(i,s)=>Rr(e,i,s??"Reading…",r?{maxBytes:null}:{}),panel:t.panel??{},...t.cursor!==void 0?{cursor:t.cursor}:{},...t.maxRows!==void 0?{maxRows:t.maxRows}:{},...n}}async function Cp(e,t){if(t.length<=1)return t;const n=await Ii(t.map(r=>({name:r.name,size:r.rowCount,...r.detail!==void 0?{detail:r.detail}:{},...r.hidden!==void 0?{hidden:r.hidden}:{}})),{title:`Import from ${e.label}`,message:`This source offers ${t.length} tables. Choose which to import.`,confirmLabel:"Import"});return n?n.map(r=>t[r]):null}async function _p(e,t,n,r,i){if(!t.reference)throw new Error(`${t.label} cannot be referenced — import a copy instead.`);const s=t.reference(n,r);let o=[];for await(const h of t.read(n,r)){o=h.columns??[];break}if(o.length===0)throw new Error("No columns found in the referenced data.");const l=Ki(await Qo(e,i),r.name),u=xe();return await e.store.tables.insert({id:u,workspaceId:i,name:l,code:De(l),columns:o,view:"table",source:s,readonly:!0,updatedAt:Date.now()}),{tableId:u,tableName:l,rowCount:0,created:!0}}async function Vi(e,t,n,r){const i=e.workspaceId();if(!i)throw new Error("No active workspace.");const s=Al(e,r),o=await t.list(s,n);if(o.length===0)throw new Error("No tables found at that source.");const l=await Cp(t,o);if(l===null)return{landed:[],failed:[],cancelled:!0};const u=[],h=[];for(const p of l)try{if(r.mode==="reference"){u.push(await _p(e,t,s,p,i));continue}const g=r.target;let w;g.kind!=="new"&&(w=(await e.store.tables.findOne(g.tableId))?.columns);const y=Al(e,r,{...w?{targetColumns:w}:{}}),$=t.read(y,p),x=r.origin??(n.kind==="url"&&n.url?{type:t.id,url:n.url}:void 0),A=await vu(e,p.name,$,{workspaceId:i,importerId:t.id,target:g,...x?{origin:x}:{},...r.editColumns?{editColumns:r.editColumns}:{},...r.maxRows!==void 0?{maxRows:r.maxRows}:{}});if(A===null)return{landed:u,failed:h,cancelled:!0};u.push(A)}catch(g){h.push({name:p.name,error:g?.message??String(g)})}return{landed:u,failed:h,cancelled:!1}}async function $u(e,t,n){const r=new Map;if(n.length===0)return r;const i=(await e.find()).filter(l=>l.workspaceId===t),s=new Map(i.map(l=>[l.name,l])),o=new Map(i.map(l=>[l.id,l]));for(const l of n){if(!Sp(l))continue;const u=s.get(l.name)??o.get(l.id),h=u?.id??l.id;u&&r.set(l.id,u.id);const p=u?u.builtin:l.builtin,g={...l,id:h,workspaceId:t};p===void 0?delete g.builtin:g.builtin=p,await e.upsert(g),s.set(g.name,g),o.set(g.id,g)}return r}function Sp(e){if(typeof e!="object"||e===null)return!1;const t=e;return typeof t.id=="string"&&typeof t.name=="string"}const Ep={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function Tp(e){e.ui.registerImporter(xu),e.ui.registerDropHandler(async t=>{const r=jp(t).filter(Np);if(r.length===0)return!1;t.preventDefault();for(const i of r)await Ap(e,i);return!0})}function Xo(e){return je(e)?go(e)||Array.isArray(e.tables)?!0:Cu(e):!1}function Ip(e){return e.kind==="file"&&e.file?Xs(e.file.name):e.kind==="url"&&e.url?Xs(zt(e.url)):Xs(e.name??"imported")}const xu={id:"json",label:"JSON (array of objects or a dump)",icon:"data_object",order:20,accept:[".json",".db.json","application/json"],samples:[{label:"Northwind — sample database (JSON dump)",url:"https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json"}],supports:{url:!0,file:!0,text:!0,reference:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";if(/\.db\.json$/i.test(t))return 1;if(/\.json$/i.test(t))return .95;if(e.file?.type==="application/json")return .9;const n=(e.text??"").trimStart();return n.startsWith("{")||n.startsWith("[")?.3:0},async list(e,t){let n;t.kind==="file"&&t.file?n=await t.file.text():t.kind==="url"&&t.url?n=await e.fetchText(t.url,`Reading ${zt(t.url)}…`):n=t.text??"";const r=Ip(t);let i;try{i=JSON.parse(n)}catch(o){throw new Error(`Invalid JSON in ${r}: ${o.message}`)}const s=Wi(i,r);return s.map(o=>({name:o.name,rowCount:o.rows.length,handle:{table:o,input:t,single:s.length===1}}))},async*read(e,t){const{table:n}=t.handle;yield{columns:n.columns,rows:n.rows}},reference(e,t){const{input:n,single:r}=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");if(!r)throw new Error("That URL holds several tables, so a reference would be ambiguous. Import a copy instead.");return{type:"url",config:{url:n.url,format:"json"}}}};function Xs(e){return e.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported"}async function Ap(e,t){const n=await t.text();let r;try{r=JSON.parse(n)}catch(o){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${t.name}: ${o.message}`)});return}if(Xo(r)){await Jo(e,n,t.name);return}const i=await Vi(e,xu,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),s=i.landed.reduce((o,l)=>o+l.rowCount,0);i.landed.length>0&&e.ui.dialogs.toast(`Imported ${t.name} (${s.toLocaleString()} rows).`,{kind:"success",title:"Import"})}async function Jo(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("json-import: no active workspace");let s;try{s=JSON.parse(t)}catch(A){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${n}: ${A.message}`)});return}const o=n.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",l=Wi(s,o);if(l.length===0)return;let u=l;if(l.length>1){const A=await Ii(l.map(L=>({name:L.name,size:L.rows.length})),{title:"Import tables",message:`"${n}" contains ${l.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!A)return;u=A.map(L=>l[L])}const h=(await e.store.tables.find()).filter(A=>A.workspaceId===i),p=new Set(u.map(A=>A.name)),g=h.filter(A=>p.has(A.name));let w;if(g.length===0&&u.length===1)w="append-new";else{const A=g.length>0?[`Overwrite matching (${g.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],L=await e.ui.dialogs.choice(`Importing ${u.length} table${u.length===1?"":"s"} from "${n}".${g.length>0?`

${g.length} table${g.length===1?"":"s"} share a name with existing data.`:""}`,A,"JSON import");if(!L)return;L.startsWith("Overwrite matching")?w="overwrite-matching":L==="Replace entire workspace"?w="replace-workspace":w="append-new"}const y=2e3,$=u.reduce((A,L)=>A+(L.source?0:Math.min(L.rows.length,r.maxRows??1/0)),0);let x=null;if($>=y){const{TopProgress:A}=await ut(async()=>{const{TopProgress:L}=await import("./top-progress-DwXty6jW.js");return{TopProgress:L}},[]);x=A.begin(`Importing ${n}…`)}try{if(w==="replace-workspace")for(const F of h){const K=e.store.rows(F.id),W=await K.find();await K.bulkRemove(W.map(ie=>ie.id)),await e.store.tables.remove(F.id)}const A=new Map(h.map(F=>[F.name,F])),L=new Map;let M=0;for(const F of u){const K=F.source,W=F.origin??(!K&&r.originUrl?{type:"json",url:r.originUrl}:void 0);let ie;const q=w==="overwrite-matching"?A.get(F.name):void 0;let V=F.columns,ae=F.rows;if(r.editColumns&&!q&&!K){const ce=await r.editColumns(V,F.name);if(ce===null)continue;ae=Mp(ae,V,ce),V=ce}if(q){if(ie=q.id,!q.source){const ce=e.store.rows(ie),N=await ce.find();await ce.bulkRemove(N.map(Q=>Q.id))}await e.store.tables.patch(ie,{columns:V,...F.title?{title:F.title}:{},...F.windowGeometry?{windowGeometry:F.windowGeometry}:{},...F.sortColumn?{sortColumn:F.sortColumn,sortAsc:F.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...F.filters?{filters:F.filters}:{},...F.labelColumn?{labelColumn:F.labelColumn}:{},...F.info?{info:F.info}:{},...F.deletedColumns?{deletedColumns:F.deletedColumns}:{},...F.readonly?{readonly:!0}:{},source:K??void 0,origin:W??void 0,updatedAt:Date.now()})}else ie=xe(),e.events.emit("import:before",{source:"json",tableId:ie}),await e.store.tables.insert({id:ie,workspaceId:i,name:F.name,code:De(F.name),columns:V,view:"table",...F.title?{title:F.title}:{},...F.windowGeometry?{windowGeometry:F.windowGeometry}:{},...F.sortColumn?{sortColumn:F.sortColumn,sortAsc:F.sortAsc??!0}:{},...F.filters?{filters:F.filters}:{},...F.labelColumn?{labelColumn:F.labelColumn}:{},...F.info?{info:F.info}:{},...F.deletedColumns?{deletedColumns:F.deletedColumns}:{},...F.readonly?{readonly:!0}:{},...K?{source:K}:{},...W?{origin:W}:{},updatedAt:Date.now()});L.set(F.name,ie);let ee=0;if(!K){const ce=e.store.rows(ie),Q=(r.maxRows!=null?ae.slice(0,r.maxRows):ae).map(de=>({id:xe(),tableId:ie,data:de,updatedAt:Date.now()}));await ce.bulkInsert(Q),ee=Q.length,M+=ee,x?.fraction($>0?M/$:1)}e.events.emit("import:after",{source:"json",tableId:ie,rowCount:ee})}await Rp(e,s,i,L,w==="replace-workspace")}finally{x?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function Rp(e,t,n,r,i){if(!je(t))return;const s=t,o=Array.isArray(s.viewTemplates)?s.viewTemplates:[],l=Array.isArray(s.viewInstances)?s.viewInstances:[];if(o.length===0&&l.length===0)return;if(i){const h=(await e.store.viewInstances.find()).filter(p=>p.workspaceId===n);await e.store.viewInstances.bulkRemove(h.map(p=>p.id))}const u=await $u(e.store.viewTemplates,n,o);for(const h of l){if(!je(h)||typeof h.id!="string")continue;const p=(h.tableName?r.get(h.tableName):void 0)??h.tableId;if(!p)continue;const g=u.get(h.templateId)??h.templateId;await e.store.viewInstances.upsert({...h,workspaceId:n,tableId:p,templateId:g})}}function Wi(e,t){if(je(e)&&go(e))return Rl(e);if(je(e)&&Array.isArray(e.tables)){const n=e,r=[];for(const i of n.tables){if(ku(i)){r.push(Ol(i));continue}je(i)&&go(i)&&r.push(...Rl(i))}return r}if(Cu(e))return[Ol(e)];if(Array.isArray(e)){const n=e.filter(je);return n.length===0?[]:[{name:t,...Dl(n)}]}return je(e)?[{name:t,...Dl([e])}]:[]}function go(e){for(const[t,n]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!je(n))continue;const r=n;if(Array.isArray(r.dataArray)&&Array.isArray(r.columns))return!0}return!1}function Rl(e){const t=[];for(const[n,r]of Object.entries(e)){if(!/\.table\.json$/.test(n)||!je(r))continue;const i=r;if(!Array.isArray(i.dataArray)||!Array.isArray(i.columns))continue;const s=n.replace(/\.table\.json$/,""),o=i.columns.map(p=>Op(p)),l=o.map(p=>p.field),u=i.dataArray.filter(p=>Array.isArray(p)).map(p=>{const g={};for(let w=0;w<l.length;w++)g[l[w]]=p[w];return g}),h={name:s,columns:o,rows:u};if(i.elementRect&&typeof i.elementRect.x=="number"&&typeof i.elementRect.y=="number"){const p=i.elementRect;h.windowGeometry={x:p.x,y:p.y,w:p.width??600,h:p.height??400,z:p.zIndex??100,minimized:!!p.minimized,maximized:!!p.maximized}}typeof i.sortColumn=="number"&&i.sortColumn>=0&&i.sortColumn<l.length&&(h.sortColumn=l[i.sortColumn],h.sortAsc=(i.sortDirection??"asc")!=="desc"),t.push(h)}return t}function Op(e){const t=String(e.field??"col"),n=String(e.name??t),r=typeof e.type=="string"?e.type:"string",i={field:t,label:n,type:r};return e.isUnique&&(i.unique=!0),e.isNotNull&&(i.notnull=!0),i}function ku(e){return je(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Cu(e){return ku(e)&&Array.isArray(e.rows)}function Ol(e){const t=e,n=je(t.windowGeometry)?t.windowGeometry:void 0,r=typeof t.sortColumn=="string"?t.sortColumn:void 0,i=typeof t.sortAsc=="boolean"?t.sortAsc:void 0,s=typeof t.title=="string"?t.title:void 0,o=je(t.filters)?t.filters:void 0,l=typeof t.labelColumn=="string"?t.labelColumn:void 0,u=je(t.info)?t.info:void 0,h=Array.isArray(t.deletedColumns)?t.deletedColumns.filter(y=>typeof y=="string"):void 0,p=t.readonly===!0?!0:void 0,g=je(t.source)&&typeof t.source.type=="string"?t.source:void 0,w=je(t.origin)&&typeof t.origin.type=="string"&&typeof t.origin.url=="string"?t.origin:void 0;return{name:String(e.name),columns:e.columns.map(Dp),rows:Array.isArray(e.rows)?e.rows.filter(je):[],...s?{title:s}:{},...n?{windowGeometry:n}:{},...r?{sortColumn:r,sortAsc:i??!0}:{},...o?{filters:o}:{},...l?{labelColumn:l}:{},...u?{info:u}:{},...h?{deletedColumns:h}:{},...p?{readonly:p}:{},...g?{source:g}:{},...w?{origin:w}:{}}}function Dp(e){if(!je(e))return{field:"col",label:"Col",type:"string"};const t=e,n=String(t.field??"col");let r=typeof t.type=="string"?t.type:"string",i=typeof t.renderer=="string"?t.renderer:void 0;(r==="color"||r==="image")&&(i=i??r,r="string");const s={field:n,label:String(t.label??n),type:r};return i&&(s.renderer=i),typeof t.script=="string"&&(s.script=t.script),t.readonly===!0&&(s.readonly=!0),s}function Dl(e){const t=new Set;for(const i of e)for(const s of Object.keys(i))t.add(s);return{columns:Array.from(t).map(i=>({field:i,label:i,type:Pp(e.map(s=>s[i]))})),rows:e}}function Pp(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&Lp(n))?"date":"string"}function Lp(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}([T ]\d{1,2}:\d{2}(:\d{2})?)?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}([T ]\d{1,2}:\d{2})?$/.test(t))}function Mp(e,t,n){const r=Yo(t,n);return r?e.map(r):e}function je(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function jp(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const i=r.getAsFile();i&&n.push(i)}return n}return[]}function Np(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}const zp=Object.freeze(Object.defineProperty({__proto__:null,init:Tp,isWorkspaceDump:Xo,meta:Ep,parsedToTables:Wi,restoreWorkspaceDump:Jo},Symbol.toStringTag,{value:"Module"})),Js="",Up=/\uE000(\d+)\uE000/g;function bo(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Zs(e){const t=e.trim();return t===""?null:/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t)?/^(https?|mailto|tel):/i.test(t)?t:null:t}function pr(e){const t=[];let n=e.replaceAll(Js,"").replace(/(`+)([\s\S]*?)\1/g,(r,i,s)=>(t.push(`<code>${bo(s)}</code>`),`${Js}${t.length-1}${Js}`));return n=bo(n),n=n.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(r,i,s,o)=>{const l=Zs(s);return l===null?r:`<img src="${l}" alt="${i}"${o?` title="${o}"`:""}>`}),n=n.replace(/\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(r,i,s,o)=>{const l=Zs(s);return l===null?r:`<a href="${l}"${o?` title="${o}"`:""} target="_blank" rel="noopener noreferrer">${i}</a>`}),n=n.replace(/&lt;((?:https?|mailto):[^\s&]+)&gt;/g,(r,i)=>{const s=Zs(i);return s===null?r:`<a href="${s}" target="_blank" rel="noopener noreferrer">${s}</a>`}),n=n.replace(/~~([\s\S]+?)~~/g,"<del>$1</del>"),n=n.replace(/\*\*([\s\S]+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__([\s\S]+?)__/g,"<strong>$1</strong>"),n=n.replace(/(^|[^*])\*(?!\s)([^*]+?)\*/g,"$1<em>$2</em>"),n=n.replace(/(^|[\s(])_(?!\s)([^_]+?)_(?=$|[\s).,;:!?])/g,"$1<em>$2</em>"),n=n.replace(/ {2,}\n/g,`<br>
`),n.replace(Up,(r,i)=>t[Number(i)]??"")}function eo(e){return e.replace(/^\s*\|/,"").replace(/\|\s*$/,"").split(/(?<!\\)\|/).map(t=>t.trim().replace(/\\\|/g,"|"))}const Fp=e=>{const t=e.startsWith(":"),n=e.endsWith(":");return t&&n?' style="text-align:center"':n?' style="text-align:right"':t?' style="text-align:left"':""};function _u(e){if(e==null)return"";const t=typeof e=="string"?e:String(e);if(t.trim()==="")return"";const n=t.replace(/\r\n?/g,`
`).split(`
`),r=[];let i=0;const s=o=>{const l=[];for(;i<n.length&&o(n[i]);)l.push(n[i++]);return l};for(;i<n.length;){const o=n[i];if(o.trim()===""){i++;continue}const l=/^\s*(```+|~~~+)\s*([A-Za-z0-9_+-]*)\s*$/.exec(o);if(l){const p=l[1].slice(0,3);i++;const g=s(y=>!y.trim().startsWith(p));i<n.length&&i++;const w=l[2]?` class="language-${l[2]}"`:"";r.push(`<pre><code${w}>${bo(g.join(`
`))}</code></pre>`);continue}const u=/^(#{1,6})\s+(.*)$/.exec(o);if(u){const p=u[1].length;r.push(`<h${p}>${pr(u[2].replace(/\s+#+\s*$/,""))}</h${p}>`),i++;continue}if(/^\s*([-*_])(\s*\1){2,}\s*$/.test(o)){r.push("<hr>"),i++;continue}if(/^\s*>/.test(o)){const p=s(g=>/^\s*>/.test(g)||g.trim()!=="");r.push(`<blockquote>${_u(p.map(g=>g.replace(/^\s*>\s?/,"")).join(`
`))}</blockquote>`);continue}if(o.includes("|")&&i+1<n.length&&/^\s*\|?[\s:|-]+\|[\s:|-]*$/.test(n[i+1])&&n[i+1].includes("-")){const p=eo(o),g=eo(n[i+1]).map(Fp);i+=2;const w=s(x=>x.trim()!==""&&x.includes("|")),y=p.map((x,A)=>`<th${g[A]??""}>${pr(x)}</th>`).join(""),$=w.map(x=>`<tr>${eo(x).map((A,L)=>`<td${g[L]??""}>${pr(A)}</td>`).join("")}</tr>`);r.push(`<table><thead><tr>${y}</tr></thead><tbody>${$.join("")}</tbody></table>`);continue}if(/^\s*(?:[-*+]|\d+[.)])\s+/.test(o)){const p=s(g=>g.trim()!==""&&!/^\s*(?:```|~~~|#{1,6}\s)/.test(g));r.push(Su(p));continue}const h=s(p=>p.trim()!==""&&!/^\s*(?:```|~~~|>|#{1,6}\s|(?:[-*+]|\d+[.)])\s)/.test(p)&&!/^\s*([-*_])(\s*\1){2,}\s*$/.test(p));h.length>0&&r.push(`<p>${pr(h.join(`
`))}</p>`)}return r.join(`
`)}function Su(e){const t=[];let n=null,r=null;for(const o of e){const l=/^(\s*)(?:([-*+])|(\d+)[.)])\s+(.*)$/.exec(o);if(!l){t[t.length-1]?.text.push(o.trim());continue}const u=l[1].length;if(r??=u,u>r&&t.length>0){t[t.length-1].children.push(o.slice(Math.min(u,r+2)));continue}n??=l[3]!==void 0,t.push({text:[l[4]],children:[],indent:u})}const i=n?"ol":"ul",s=t.map(o=>`<li>${pr(o.text.join(`
`))}${o.children.length>0?Su(o.children):""}</li>`).join("");return`<${i}>${s}</${i}>`}const wo={markdownToHtml:_u},Eu=Object.keys(wo),Pl=new Map;function Bp(e){const t=Pl.get(e);if(t)return t;const n=new Function("row",...Eu,"easydb",`${e}
return render(row);`);return Pl.set(e,n),n}function qp(){return[...Eu.map(e=>wo[e]),wo]}function Zo(e,t){if(!e||!e.trim())return{ok:!1,label:"no script",message:""};let n;try{n=Bp(e)}catch(r){return{ok:!1,label:"compile error",message:Ll(r)}}try{return{ok:!0,value:n(t,...qp())}}catch(r){return{ok:!1,label:"runtime error",message:Ll(r)}}}function Ll(e){return e instanceof Error?e.message:String(e)}const Hp=new Set(["rowid"]);function ea(e){return Hp.has(e.trim().toLowerCase())}function Kp(e,t){const n=e.sources[0];if(!n)return[];let i=(t[n.alias]??[]).map(u=>({[n.alias]:u}));for(let u=1;u<e.sources.length;u++){const h=e.sources[u];if(!h)continue;const p=t[h.alias]??[],g=h.join,w=[];for(const y of i){const $=g?p.filter(x=>g.on.every(A=>Wp(x.data[A.field],y[A.eqAlias]?.data[A.eqField]))):[];if($.length>0)for(const x of $)w.push({...y,[h.alias]:x});else g?.type==="left"&&w.push({...y,[h.alias]:void 0})}i=w}const s=[],o=new Map,l=e.limit!=null&&e.limit>0?e.limit:1/0;for(const u of i){if(s.length>=l)break;const h=u[n.alias];if(!h)continue;const p=Vp(e.columns,u);if(!Gp(p,e.filters))continue;const g=o.get(h.id)??0;o.set(h.id,g+1),s.push({id:`${h.id}#${g}`,tableId:"",data:p,updatedAt:Yp(u)})}return s}function Vp(e,t){const n={};for(const r of e){if(r.from.kind!=="source")continue;const i=t[r.from.alias]?.data[r.from.field];n[r.field]=i===void 0?null:i}for(const r of e)if(r.from.kind==="script"){const i=Zo(r.from.script,n);n[r.field]=i.ok?i.value:void 0}return n}function Wp(e,t){return e==null||t==null?!1:e===t?!0:typeof e!="object"&&typeof t!="object"?String(e)===String(t):!1}function Gp(e,t){if(!t)return!0;for(const[n,r]of Object.entries(t)){if(!r)continue;const i=e[n];if(!(i==null?"":String(i)).toLowerCase().includes(r.toLowerCase()))return!1}return!0}function Yp(e){let t=0;for(const n of Object.values(e))n&&n.updatedAt>t&&(t=n.updatedAt);return t}function Or(e){const t=e.sources[0]?.alias,n=new Set;if(!t)return n;for(const r of e.columns)r.from.kind==="source"&&r.from.alias===t&&n.add(r.field);return n}function Tu(e,t,n=[],r=[]){const i=Or(e),s=new Map(n.map(p=>[p.field,p])),o=new Set(r),l=new Map;for(const p of e.columns)!o.has(p.field)&&!l.has(p.field)&&l.set(p.field,p);const u=[];for(const p of n)l.has(p.field)&&!u.includes(p.field)&&u.push(p.field);for(const p of l.keys())u.includes(p)||u.push(p);const h=[];for(const p of u){const g=l.get(p);if(!g)continue;const w=s.get(g.field);let y;if(w)y={...w};else if(g.from.kind==="source"){const $=g.from,x=(t[$.alias]??[]).find(A=>A.field===$.field);y=x?{...x,field:g.field}:{field:g.field,label:g.label??g.field,type:g.type??"string"},ea($.field)&&(y.hidden=!0)}else y={field:g.field,label:g.label??g.field,type:g.type??"string"},y.script=g.from.script;i.has(g.field)?delete y.readonly:y.readonly=!0,h.push(y)}return h}function Qp(e){const t=e.sources[0]?.alias,n=new Map;if(!t)return n;for(const r of e.columns)r.from.kind==="source"&&r.from.alias===t&&!n.has(r.from.field)&&n.set(r.from.field,r.field);return n}function Xp(e,t){const n=Qp(e),r={},i=t.sortBy&&t.sortBy.length>0?t.sortBy:t.sortColumn?[{field:t.sortColumn,asc:t.sortAsc??!0}]:[],s=[];for(const o of i){const l=n.get(o.field);l&&s.push({field:l,asc:o.asc})}if(s.length>0){r.sortBy=s;const o=s[0];o&&(r.sortColumn=o.field,r.sortAsc=o.asc)}if(t.filters){const o={};for(const[l,u]of Object.entries(t.filters)){const h=n.get(l);h&&u&&(o[h]=u)}Object.keys(o).length>0&&(r.filters=o)}return r}function Jp(e,t){return t.get(e.tableName)}function Zp(e,t){const n=new Map(t.map(s=>[s.id,s])),r=new Map;for(const s of t)r.has(s.name)||r.set(s.name,s);const i=(s,o)=>{if(o.has(s))return!0;const l=n.get(s);if(l?.source?.type!=="projection")return!1;const u=l.source.config;if(!u||!Array.isArray(u.sources))return!1;const h=new Set(o).add(s);for(const p of u.sources){const g=Jp(p,r);if(g&&i(g.id,h))return!0}return!1};return i(e,new Set)}const ur=e=>e.toLowerCase().replace(/[^a-z0-9]/g,""),to=e=>e.endsWith("s")&&e.length>1?e.slice(0,-1):e,Ml=e=>e==="id"||e.endsWith("id");function em(e,t){const n=ur(e.field),r=ur(t.field);if(!n||!r)return 0;const i=ur(e.table)===ur(t.table);if(n===r)return i||n==="id"?0:n.endsWith("id")?9:7;const s=(l,u,h)=>{if(l!=="id"||!h.endsWith("id")||h.length<=2)return 0;const p=h.slice(0,-2),g=ur(u);return p===g||p===to(g)||to(p)===to(g)?9:5},o=Math.max(s(n,e.table,r),s(r,t.table,n));return o>0?o:e.isPk&&Ml(r)||t.isPk&&Ml(n)?6:0}function tm(e,t,n=[]){const r=new Set(n.map(o=>`${o.alias}\0${o.field}`)),i=new Set(e.pks??[]),s=o=>{let l=null,u=0;for(const h of t){const p=new Set(h.pks??[]);for(const g of e.fields)for(const w of h.fields){if(o&&r.has(`${h.alias}\0${w}`))continue;const y=em({table:e.tableName,field:g,isPk:i.has(g)},{table:h.tableName,field:w,isPk:p.has(w)});y>u&&(u=y,l={thisField:g,otherAlias:h.alias,otherField:w})}}return l};return s(!0)??s(!1)}function nm(e,t,n){if(!Or(e).has(n))return null;const r=e.columns.find(o=>o.field===n);if(!r||r.from.kind!=="source")return null;const i=t.lastIndexOf("#");return{baseRowId:i>=0?t.slice(0,i):t,field:r.from.field}}async function Iu(e,t,n,r){const i=n.spec.sources.map(p=>({source:p,table:r.resolve(p.tableName)}));if(i.some(p=>!p.table))return null;const s={...n.spec,sources:i.map(({source:p,table:g})=>({...p,tableName:g.name}))},o={};for(const{source:p,table:g}of i)o[p.alias]=g?.columns??[];const l=Tu(s,o,[],[]),u=Ki(r.taken,n.name),h={id:xe(),workspaceId:t,name:u,code:De(u),columns:l,view:"table",source:{type:"projection",config:s},readonly:Or(s).size===0,...n.sortBy&&n.sortBy.length>0?{sortBy:n.sortBy}:{},...s.filters?{filters:s.filters}:{},updatedAt:Date.now()};return await e.store.tables.insert(h),h}const Au="__id";function rm(e){const t=[];let n="",r,i=0;for(;i<e.length;){const s=e[i],o=e[i+1];if(s==="'"||s==='"'){const l=ta(e,i,s);n+=e.slice(i,l),i=l;continue}if(s==="-"&&o==="-"){let l="";for(i+=2;i<e.length&&e[i]!==`
`;)l+=e[i++];const u=/^\s*projection:\s*(.+?)\s*$/i.exec(l);u?.[1]&&n.trim()===""&&(r=u[1]);continue}if(s==="/"&&o==="*"){for(i+=2;i<e.length&&!(e[i]==="*"&&e[i+1]==="/");)i++;i+=2;continue}if(s===";"){n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),n="",r=void 0,i++;continue}n+=s,i++}return n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),t}function ta(e,t,n){let r=t+1;for(;r<e.length;){if(e[r]===n){if(e[r+1]===n){r+=2;continue}return r+1}r++}return e.length}function Ut(e){const t=e.trim();return/^".*"$/s.test(t)?t.slice(1,-1).replace(/""/g,'"'):/^\[.*\]$/s.test(t)||/^`.*`$/s.test(t)?t.slice(1,-1):t}function Ru(e,t){const n=[];let r=0,i="",s=0;for(;s<e.length;){const o=e[s];if(o==="'"||o==='"'){const l=ta(e,s,o);i+=e.slice(s,l),s=l;continue}if(o==="("?r++:o===")"&&r--,r===0){const l=t(e,s);if(l>0){n.push(i),i="",s+=l;continue}}i+=o,s++}return n.push(i),n}function Pn(e,t){return Ru(e,(n,r)=>n.startsWith(t,r)?t.length:0)}function Ou(e,t){const n=new RegExp(`^\\s+${t}\\s+`,"i");return Ru(e,(r,i)=>/\s/.test(r[i]??"")?n.exec(r.slice(i,i+t.length+32))?.[0].length??0:0)}function Du(e){const t=e.indexOf("(");if(t<0)return null;let n=0;for(let r=t;r<e.length;r++){const i=e[r];if(i==="'"||i==='"'){r=ta(e,r,i)-1;continue}if(i==="(")n++;else if(i===")"&&(n--,n===0))return e.slice(t+1,r)}return null}function im(e){const t=e.trim();return/^null$/i.test(t)?null:/^true$/i.test(t)?!0:/^false$/i.test(t)?!1:/^'[\s\S]*'$/.test(t)?t.slice(1,-1).replace(/''/g,"'"):/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(t)?Number(t):t}function sm(e){const t=e.toUpperCase();return/BOOL/.test(t)?"boolean":/TIMESTAMP|DATETIME/.test(t)?"datetime":/^DATE\b/.test(t)?"date":/INT|NUMERIC|DECIMAL|REAL|DOUBLE|FLOAT|MONEY/.test(t)?"number":"string"}function om(e){const t=/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)/i.exec(e);if(!t?.[1])return null;const n=Du(e);if(n==null)return null;const r=[];for(const i of Pn(n,",")){const s=i.trim();if(!s||/^(PRIMARY|FOREIGN|UNIQUE|CHECK|CONSTRAINT)\b/i.test(s))continue;const o=/^("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[A-Za-z_][\w$]*)\s*([\s\S]*)$/.exec(s);if(!o?.[1])continue;const l=Ut(o[1]);if(l===Au)continue;const u=o[2]??"",h=/^([A-Za-z]+(?:\s*\([^)]*\))?)/.exec(u.trim())?.[1]??"TEXT",p={field:l,label:l,type:sm(h)};/\bNOT\s+NULL\b/i.test(u)&&(p.notnull=!0),(/\bUNIQUE\b/i.test(u)||/\bPRIMARY\s+KEY\b/i.test(u))&&(p.unique=!0),r.push(p)}return{name:Ut(t[1]),columns:r,rows:[]}}function am(e){const t=/^INSERT\s+(?:OR\s+\w+\s+)?INTO\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s*(\([\s\S]*?\))?\s*VALUES\s*([\s\S]+)$/i.exec(e);if(!t?.[1])return null;const n=Ut(t[1]),r=t[2]?Pn(t[2].slice(1,-1),",").map(o=>Ut(o)):[],i=[];let s=(t[3]??"").trim();for(;s.startsWith("(");){const o=Du(s);if(o==null)break;const l=Pn(o,",").map(h=>im(h)),u={};l.forEach((h,p)=>{const g=r[p]??`col${p+1}`;g!==Au&&(u[g]=h)}),i.push(u),s=s.slice(o.length+2).trim(),s.startsWith(",")&&(s=s.slice(1).trim())}return{table:n,rows:i}}function jl(e){const t=/^\s*("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+)(?:\s+(?:AS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+))?\s*$/i.exec(e);if(!t?.[1])return{table:"",alias:""};const n=Ut(t[1]);return{table:n,alias:t[2]?Ut(t[2]):n}}function kr(e){return Pn(e,".").map(Ut)}function na(e,t,n){const r=t.filter(i=>(n.get(i.tableName.toLowerCase())??[]).includes(e));return r.some(i=>i.alias===t[0]?.alias)?t[0].alias:(r.length===1?r[0]?.alias:void 0)??t[0]?.alias??""}function lm(e){let t=e,n;const r=/\s+FETCH\s+FIRST\s+(\d+)\s+ROWS?\s+ONLY\s*$/i.exec(t);r&&(n=Number(r[1]),t=t.slice(0,r.index));const i=/\s+LIMIT\s+(\d+)\s*$/i.exec(t);i&&(n=Number(i[1]),t=t.slice(0,i.index));let s;const o=/\s+ORDER\s+BY\s+([\s\S]+)$/i.exec(t);o?.[1]&&(s=o[1],t=t.slice(0,o.index));let l;const u=/\s+WHERE\s+([\s\S]+)$/i.exec(t);return u?.[1]&&(l=u[1],t=t.slice(0,u.index)),{from:t,limit:n,orderBy:s,where:l}}function cm(e,t,n,r,i){const s=[],o=l=>l.length===2?l[0]??"":na(l[0]??"",n,r);for(const l of Ou(e,"AND")){const u=/^\s*([\w".$[\]`]+)\s*=\s*([\w".$[\]`]+)\s*$/.exec(l);if(!u?.[1]||!u[2]){i.push(`ON ${l.trim()}`);continue}const h=kr(u[1]),p=kr(u[2]),g=o(h)===t.alias,w=g?h:p,y=g?p:h;if(o(w)!==t.alias){i.push(`ON ${l.trim()} — neither side names ${t.alias}`);continue}s.push({field:w.length===2?w[1]??"":w[0]??"",eqAlias:y.length===2?y[0]??"":o(y),eqField:y.length===2?y[1]??"":y[0]??""})}return s}function um(e,t,n){const r=/\s+(LEFT|RIGHT|FULL|INNER|CROSS)(?:\s+OUTER)?\s+JOIN\s+|\s+JOIN\s+/gi,i=[],s=[];let o=0;for(let h=r.exec(e);h;h=r.exec(e))i.push(e.slice(o,h.index)),s.push((h[1]??"INNER").toUpperCase()),o=h.index+h[0].length;i.push(e.slice(o));const l=jl(i[0]??"");if(!l.table)return null;const u=[{alias:l.alias,tableName:l.table}];for(let h=1;h<i.length;h++){const p=i[h]??"",g=/\s+ON\s+([\s\S]+)$/i.exec(p),w=jl(g?p.slice(0,g.index):p);if(!w.table)continue;const y=s[h-1]??"INNER";if(y==="CROSS"||!g?.[1]){n.push(`${y} JOIN ${w.table} — no ON predicate to model`),u.push({alias:w.alias,tableName:w.table});continue}(y==="RIGHT"||y==="FULL")&&n.push(`${y} JOIN ${w.table} — imported as LEFT JOIN (the closest a projection can express)`);const $=[...u,{alias:w.alias,tableName:w.table}];u.push({alias:w.alias,tableName:w.table,join:{type:y==="INNER"?"inner":"left",on:cm(g[1],w,$,t,n)}})}return u}function dm(e,t,n,r){const i=[];for(const s of Pn(e,",")){const o=s.trim();if(!o)continue;if(o==="*"){r.push("SELECT * — a projection needs its columns listed");continue}const l=/^([\s\S]*?)\s+AS\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[\w$]+)$/i.exec(o),u=(l?.[1]??o).trim(),h=kr(u),p=Ut(l?.[2]??h[h.length-1]??u);if(/^NULL$/i.test(u)){i.push({field:p,from:{kind:"script",script:pm}});continue}h.length===2&&h[0]&&h[1]?i.push({field:p,from:{kind:"source",alias:h[0],field:h[1]}}):h.length===1&&h[0]&&/^[\w$]+$/.test(h[0])?i.push({field:p,from:{kind:"source",alias:na(h[0],t,n),field:h[0]}}):r.push(`SELECT ${o} — expression not modelled`)}return i}function hm(e,t){const n={};if(!e)return n;for(const r of Ou(e,"AND")){const i=/^\s*LOWER\(\s*([\w".$[\]`]+)\s*\)\s+LIKE\s+'%([\s\S]*)%'\s*$/i.exec(r.trim()),s=i?.[1]?Pu(t.columns,kr(i[1]),t.sources,t.schema):void 0;if(!i||!s){t.unsupported.push(`WHERE ${r.trim()}`);continue}n[s.field]=(i[2]??"").replace(/''/g,"'")}return n}function fm(e,t){const n=[];for(const r of Pn(e??"",",")){const i=r.trim();if(!i)continue;const[s,o]=i.split(/\s+/),l=Pu(t.columns,kr(s??""),t.sources,t.schema);if(!l){t.unsupported.push(`ORDER BY ${i}`);continue}n.push({field:l.field,asc:!/^DESC$/i.test(o??"")})}return n}function Nl(e,t,n,r){const i=[],s=e.replace(/\s+/g," ").trim(),o=/^SELECT\s+(?:TOP\s+(\d+)\s+)?([\s\S]+?)\s+FROM\s+([\s\S]+)$/i.exec(s);if(!o)return null;const{from:l,limit:u,orderBy:h,where:p}=lm(o[3]??""),g=u??(o[1]?Number(o[1]):void 0),w=um(l,n,i);if(!w)return null;const y=dm(o[2]??"",w,n,i),$={columns:y,sources:w,schema:n,unsupported:i},x=hm(p,$),A=fm(h,$),L={version:1,sources:w,columns:y};return Object.keys(x).length>0&&(L.filters=x),g!=null&&g>0&&(L.limit=g),{projection:{name:r||t,spec:L,...A.length>0?{sortBy:A}:{}},unsupported:i}}const pm=["// This column was computed in-app; SQL carried only its NAME,","// not its script. Re-enter the expression here.","function render(row) {","  return null;","}"].join(`
`);function Pu(e,t,n,r){const i=t.length===2?t[0]:na(t[0]??"",n,r),s=t.length===2?t[1]:t[0];return e.find(o=>o.from.kind==="source"&&o.from.alias===i&&o.from.field===s)??e.find(o=>o.field===s)}function Gi(e){const t=new Map,n=[],r=[],i=new Map,s=o=>{i.set(o.name.toLowerCase(),o.columns.map(l=>l.field))};for(const o of rm(e)){const l=o.sql;if(/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\b/i.test(l)){const u=om(l);if(!u){r.push(dr(l));continue}const h=t.get(u.name);t.set(u.name,{...u,rows:h?.rows??[]}),s(u);continue}if(/^INSERT\s+/i.test(l)){const u=am(l);if(!u){r.push(dr(l));continue}const h=t.get(u.table);if(h)h.rows.push(...u.rows);else{const p={name:u.table,columns:mm(u.rows),rows:u.rows};t.set(u.table,p),s(p)}continue}if(/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\b/i.test(l)){const u=/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s+AS\s+(SELECT[\s\S]+)$/i.exec(l),h=u?.[1]?Ut(u[1]):"",p=u?.[2]?Nl(u[2],h||"view",i,h):null;p?(n.push(p.projection),r.push(...p.unsupported)):r.push(dr(l));continue}if(/^SELECT\b/i.test(l)){const u=Nl(l,"",i,o.name);u?(n.push(u.projection),r.push(...u.unsupported)):r.push(dr(l));continue}/^(BEGIN|START\s+TRANSACTION|COMMIT|END|DROP|PRAGMA|SET|USE|ANALYZE|VACUUM)\b/i.test(l)||r.push(dr(l))}for(const o of n)o.name||(o.name=`${o.spec.sources[0]?.tableName??"query"} view`);return{tables:[...t.values()],projections:n,unsupported:r}}function dr(e){const t=e.split(`
`)[0]?.trim()??e;return t.length>120?`${t.slice(0,117)}…`:t}function mm(e){const t=[];for(const n of e)for(const r of Object.keys(n))t.includes(r)||t.push(r);return t.map(n=>{const r=e.map(s=>s[n]).filter(s=>s!=null),i=r.length===0?"string":r.every(s=>typeof s=="number")?"number":r.every(s=>typeof s=="boolean")?"boolean":"string";return{field:n,label:n,type:i}})}const gm={id:"sql-import",name:"SQL Import",type:"importer",version:"0.1.0",description:"Import a .sql script: CREATE TABLE + INSERT become tables, and each SELECT (or CREATE VIEW) becomes a projection.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-import.ts"};function bm(e){e.ui.registerImporter(ra),e.ui.registerDropHandler(async t=>{const n=vm(t).filter($m);if(n.length===0)return!1;t.preventDefault();for(const r of n)await ym(e,r);return!0})}const ra={id:"sql",label:"SQL script (CREATE TABLE / INSERT / SELECT)",icon:"database",order:30,accept:[".sql","application/sql","text/sql","application/x-sql"],supports:{url:!0,file:!0,text:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";return/\.sql$/i.test(t)?1:(e.file?.type??"").includes("sql")?.9:/^\s*(--|\/\*|BEGIN\b|CREATE\s+TABLE\b|INSERT\s+INTO\b|DROP\s+TABLE\b)/i.test(e.text??"")?.6:0},async list(e,t){return Gi(await wm(e,t)).tables.map(r=>({name:r.name,rowCount:r.rows.length,handle:{columns:r.columns,rows:r.rows}}))},async*read(e,t){const{columns:n,rows:r}=t.handle;yield{columns:n,rows:r}}};function wm(e,t){return t.kind==="file"&&t.file?t.file.text():t.kind==="url"&&t.url?e.fetchText(t.url,`Reading ${zt(t.url)}…`):Promise.resolve(t.text??"")}function ia(e){return Gi(e).projections.length>0}async function sa(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("sql-import: no active workspace");const i=Gi(t),s={tables:[],projections:[],rowCount:0,unsupported:i.unsupported},o=n.target??{kind:"new"},l=o.kind==="new"||i.tables.length===1;l||s.unsupported.push(`"Import into" was not applied — this script defines ${i.tables.length} tables, and an append/replace names only one destination`);const u=new Map;for(const y of i.tables){const $=await vu(e,y.name,(async function*(){yield{columns:y.columns,rows:y.rows}})(),{workspaceId:r,importerId:"sql",target:l?o:{kind:"new"},...n.maxRows!==void 0?{maxRows:n.maxRows}:{},...n.editColumns?{editColumns:x=>n.editColumns(x,y.name)}:{}});$&&(u.set(y.name,$.tableName),s.tables.push($.tableName),s.rowCount+=$.rowCount)}const h=await e.store.tables.find({workspaceId:r}),p=new Map;for(const y of h)p.has(y.name)||p.set(y.name,y);const g=new Map;for(const y of h)g.has(y.name.toLowerCase())||g.set(y.name.toLowerCase(),y);const w=new Set([...h.map(y=>y.name),...s.tables]);for(const y of i.projections){const $=await Iu(e,r,y,{resolve:x=>{const A=u.get(x);return(A?p.get(A):void 0)??p.get(x)??g.get(x.toLowerCase())},taken:w});if(!$){s.unsupported.push(`projection "${y.name}" — its source tables are not in this workspace`);continue}p.set($.name,$),g.set($.name.toLowerCase(),$),w.add($.name),s.projections.push($.name)}return s}function oa(e,t,n){const r=[];if(t.tables.length>0&&r.push(`${t.tables.length} table${t.tables.length===1?"":"s"} (${t.rowCount.toLocaleString()} rows)`),t.projections.length>0&&r.push(`${t.projections.length} projection${t.projections.length===1?"":"s"}`),r.length===0){e.ui.dialogs.toast(`Nothing importable found in ${n}.`,{kind:"warning",title:"SQL import"});return}const i=t.unsupported.length>0?` — ${t.unsupported.length} statement${t.unsupported.length===1?"":"s"} could not be imported: ${t.unsupported.slice(0,3).join("; ")}${t.unsupported.length>3?"…":""}`:"";e.ui.dialogs.toast(`Imported ${r.join(" and ")} from ${n}${i}.`,{kind:t.unsupported.length>0?"warning":"success",title:"SQL import"})}async function ym(e,t){const n=await t.text();try{if(ia(n)){oa(e,await sa(e,n),t.name);return}const r=await Vi(e,ra,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),i=r.landed.reduce((s,o)=>s+o.rowCount,0);r.landed.length>0?e.ui.dialogs.toast(`Imported ${r.landed.length} table${r.landed.length===1?"":"s"} (${i.toLocaleString()} rows) from ${t.name}.`,{kind:"success",title:"SQL import"}):e.ui.dialogs.toast(`Nothing importable found in ${t.name}.`,{kind:"warning",title:"SQL import"})}catch(r){e.ui.dialogs.toast(`Could not import ${t.name}: ${r.message}`,{kind:"error",title:"SQL import"})}}function vm(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);const n=[];for(const r of Array.from(t.items??[]))if(r.kind==="file"){const i=r.getAsFile();i&&n.push(i)}return n}function $m(e){return/\.sql$/i.test(e.name)||(e.type??"").includes("sql")}const xm=Object.freeze(Object.defineProperty({__proto__:null,hasSqlProjections:ia,init:bm,meta:gm,reportSqlRestore:oa,restoreSqlScript:sa,sqlImporterSpec:ra},Symbol.toStringTag,{value:"Module"}));var km=Object.defineProperty,Cm=Object.getOwnPropertyDescriptor,aa=(e,t,n,r)=>{for(var i=r>1?void 0:r?Cm(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&km(t,n,i),i};let hi=null;function _m(){return hi||(hi=document.createElement("anchored-menu"),document.body.appendChild(hi)),hi}let wn=class extends ve{constructor(){super(...arguments),this.items=[],this.shown=!1,this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.finish(null)},this.onKey=e=>{e.key==="Escape"&&(e.preventDefault(),this.finish(null))}}static open(e,t){return _m().openMenu(e,t)}connectedCallback(){super.connectedCallback(),this.setAttribute("hidden","")}openMenu(e,t){return this.items=t,this.style.left=`${Math.round(e.left)}px`,this.style.top=`${Math.round(e.bottom+4)}px`,this.removeAttribute("hidden"),this.shown=!0,this.updateComplete.then(()=>{const n=this.shadowRoot?.querySelector(".menu");if(!n)return;const r=n.getBoundingClientRect();r.bottom>window.innerHeight&&(this.style.top=`${Math.round(e.top-r.height-4)}px`)}),new Promise(n=>{this.resolveFn=n,setTimeout(()=>{document.addEventListener("mousedown",this.onOutside,!0),document.addEventListener("keydown",this.onKey,!0)},0)})}finish(e){this.setAttribute("hidden",""),this.shown=!1,document.removeEventListener("mousedown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey,!0);const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}render(){return this.shown?C`
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
    `:C``}};wn.styles=[bt,ke`
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
    `];aa([B()],wn.prototype,"items",2);aa([B()],wn.prototype,"shown",2);wn=aa([Se("anchored-menu")],wn);const Cr=Object.freeze(Object.defineProperty({__proto__:null,get AnchoredMenu(){return wn}},Symbol.toStringTag,{value:"Module"})),yo='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Sm={id:"connect-menu",name:"Connect",type:"ui",version:"0.1.0",description:"Header Connect button listing every registered live-backend connector. Chrome only — it knows no backend.",author:"Marc Cawood",icon:yo,repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/connect-menu.ts"};function Em(e){e.ui.registerHeaderButton({id:"connect-menu:open",label:"Connect",icon:yo,tooltip:"Connect a live table on a remote backend (rows are never stored locally)",onClick:(t,n)=>zl(t,n?.anchor)}),e.ui.registerCommand({id:"connect-menu:open",title:"Connect a live table…",group:"Data",icon:yo,keywords:["datasette","live","remote","backend"],run:t=>zl(t)})}async function Tm(){const{registries:e}=await oe();return[...e.connectors].sort((t,n)=>(t.order??Number.MAX_SAFE_INTEGER)-(n.order??Number.MAX_SAFE_INTEGER))}async function zl(e,t){const n=await Tm();if(n.length===0){await e.ui.dialogs.alert("No backends are installed to connect to. Install a connector plugin from the Plugin Manager first.","Connect");return}let r=n[0];if(n.length>1){const i=t?.getBoundingClientRect(),s=i?await wn.open(i,n.map(o=>({id:o.id,label:o.label,icon:o.icon}))):await e.ui.dialogs.choice("Which backend do you want to connect to?",n.map(o=>o.label),"Connect");if(!s)return;r=i?n.find(o=>o.id===s):n.find(o=>o.label===s)}if(r)try{await r.connect(e)}catch(i){await e.ui.dialogs.alert(i?.message??String(i),`Connect ${r.label} failed`)}}const Im=Object.freeze(Object.defineProperty({__proto__:null,init:Em,meta:Sm},Symbol.toStringTag,{value:"Module"}));function Ul(e,t){return JSON.stringify(t.map(n=>e[n]))}function Am(e,t){return t.every(n=>e[n]!==null&&e[n]!==void 0)}function Lu(e){const{oldRows:t,freshRows:n,pks:r,userAddedFields:i,deletedRemoteFields:s=[]}=e,o=new Set(s),l=g=>{const w={...g};for(const y of o)delete w[y];return w};if(!(r.length>0&&n.every(g=>Am(g,r))))return{data:n.map(l),merged:!1};const h=new Map;for(const g of t){const w=Ul(g.data,r);h.has(w)||h.set(w,g)}return{data:n.map(g=>{const w=l(g),y=Ul(g,r),$=h.get(y);if($)for(const x of i)Object.prototype.hasOwnProperty.call($.data,x)&&(w[x]=$.data[x]);return w}),merged:!0}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mu=Symbol.for(""),Rm=e=>{if(e?.r===Mu)return e?._$litStatic$},Fl=e=>({_$litStatic$:e,r:Mu}),Bl=new Map,Om=e=>(t,...n)=>{const r=n.length;let i,s;const o=[],l=[];let u,h=0,p=!1;for(;h<r;){for(u=t[h];h<r&&(s=n[h],(i=Rm(s))!==void 0);)u+=i+t[++h],p=!0;h!==r&&l.push(s),o.push(u),h++}if(h===r&&o.push(t[r]),p){const g=o.join("$$lit$$");(t=Bl.get(g))===void 0&&(o.raw=o,Bl.set(g,t=o)),n=l}return e(t,...n)},ql=Om(C);function Hl(e){return e==null||String(e).trim()===""}function Dr(e){const t=[];let n="",r=!1,i=!1,s=!1,o=!1,l=!1,u=!1,h=!0;const p=()=>{const g=s?n:n.trim();if(r||o){const w={term:g,negate:o};l&&(w.prefix=!0),u&&(w.exact=!0),t.push(w)}n="",r=!1,i=!1,s=!1,o=!1,l=!1,u=!1,h=!0};for(let g=0;g<e.length;g++){const w=e[g];if(w==='"'){if(i&&e[g+1]==='"'){n+='"',r=!0,g++;continue}i=!i,s=!0,r=!0,h=!1;continue}if(w===","&&!i){p();continue}if(w==="!"&&!i&&h&&!o&&!l&&!u){o=!0;continue}if(w==="="&&!i&&h&&!l&&!u){u=!0;continue}if(w==="^"&&!i&&h&&!l&&!u){l=!0;continue}h&&!i&&/\s/.test(w)||(h=!1),n+=w,/\s/.test(w)||(r=!0)}return p(),t}function Dm(e){return e.includes(",")||e.includes('"')||e!==e.trim()||e===""||e.startsWith("!")||e.startsWith("^")||e.startsWith("=")}function _r(e){return e.map(t=>{const n=t.term===""&&t.negate?"":Dm(t.term)?`"${t.term.replace(/"/g,'""')}"`:t.term,r=t.exact?"=":t.prefix?"^":"";return(t.negate?"!":"")+r+n}).join(",")}function Kl(e,t){const n=t.term;if(n.trim()===""||!t.prefix&&!t.exact&&n.toUpperCase()==="NULL")return Hl(e);const r=String(e??"").toLowerCase(),i=n.toLowerCase();return t.exact?r===i:t.prefix?r.startsWith(i):r.includes(i)}function Ai(e,t){const n=Dr(t);if(n.length===0)return!0;for(const i of n)if(i.negate&&Kl(e,i))return!1;const r=n.filter(i=>!i.negate);return r.length===0?!0:r.some(i=>Kl(e,i))}var Pm=Object.defineProperty,Lm=Object.getOwnPropertyDescriptor,Bn=(e,t,n,r)=>{for(var i=r>1?void 0:r?Lm(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Pm(t,n,i),i};function no(e){return _r([{...e,negate:!1}])}let at=class extends ve{constructor(){super(...arguments),this.values=[],this.blanks=0,this.current="",this.search="",this.states=new Map,this.resolveFn=null,this.onChange=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,n,r=0,i){return this.values=t,this.blanks=r,this.onChange=i??null,this.states=new Map(Dr(n??"").map(s=>[no(s),{state:s.negate?"not":"on",token:s}])),this.current=n??"",this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(s=>{this.resolveFn=s,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}cycle(e){const t={term:e,negate:!1},n=no(t),r=new Map(this.states),i=r.get(n);i===void 0?r.set(n,{state:"on",token:t}):i.state==="on"?r.set(n,{state:"not",token:i.token}):r.delete(n),this.states=r;const s=[...r.values()].map(o=>({...o.token,negate:o.state==="not"}));this.current=_r(s),this.onChange?.(this.current)}close(e){this.onChange=null,document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),at.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),at.instance===this&&(at.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(o=>o.value.toLowerCase().includes(e)),n=this.blanks>0&&"(blanks)".includes(e),r=o=>this.states.get(no({term:o,negate:!1}))?.state,i=o=>C`
      <span class=${`cb${o?` ${o}`:""}`}
        >${o==="on"?"✓":o==="not"?"✕":""}</span
      >
    `,s=o=>o==="on"?"Included — click to exclude":o==="not"?"Excluded — click to clear":"Click to include → exclude → off";return C`
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
                    title=${s(r("NULL"))}
                    @click=${()=>this.cycle("NULL")}
                  >
                    <span class="left">
                      ${i(r("NULL"))}
                      <span class="label"><em>(Blanks)</em></span>
                    </span>
                    <span class="count">${this.blanks}</span>
                  </li>
                `:""}
            ${t.slice(0,500).map(o=>{const l=r(o.value);return C`
                <li title=${s(l)} @click=${()=>this.cycle(o.value)}>
                  <span class="left">
                    ${i(l)}
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
    `}};at.instance=null;at.styles=[bt,ke`
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
    `];Bn([ft({type:Array})],at.prototype,"values",2);Bn([ft({type:Number})],at.prototype,"blanks",2);Bn([ft({type:String})],at.prototype,"current",2);Bn([B()],at.prototype,"search",2);Bn([B()],at.prototype,"states",2);at=Bn([Se("filter-popover")],at);var Mm=Object.defineProperty,jm=Object.getOwnPropertyDescriptor,St=(e,t,n,r)=>{for(var i=r>1?void 0:r?jm(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Mm(t,n,i),i};let dt=class extends ve{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const n=t[this.highlightIdx];n!==void 0?(e.preventDefault(),this.onPick(n)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const n=[];for(const r of this.options)if(r.toLowerCase().includes(t)&&(n.push(r),n.length>=500))break;return n}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=this.open&&e.length>0,n=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return C`
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
            </button>`:re}
      </div>
      ${t?C`<ul
            class="dropdown"
            style=${n}
            @mousedown=${r=>r.preventDefault()}
          >
            ${e.map((r,i)=>C`
                <li
                  class=${i===this.highlightIdx?"highlighted":""}
                  @mousedown=${s=>s.preventDefault()}
                  @click=${()=>this.onPick(r)}
                >
                  ${r}
                </li>
              `)}
          </ul>`:re}
    `}};dt.styles=ke`
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
  `;St([ft({type:String})],dt.prototype,"value",2);St([ft({type:Array})],dt.prototype,"options",2);St([ft({type:String})],dt.prototype,"placeholder",2);St([B()],dt.prototype,"open",2);St([B()],dt.prototype,"highlightIdx",2);St([B()],dt.prototype,"dropTop",2);St([B()],dt.prototype,"dropLeft",2);St([B()],dt.prototype,"dropMinWidth",2);St([B()],dt.prototype,"editing",2);St([Pt("input")],dt.prototype,"inputEl",2);dt=St([Se("filter-combobox")],dt);function Nm(e){const t=e.trim(),n=t.split(/\s+/).filter(Boolean);if(!n.some(l=>l==="AND"||l==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:n.map(l=>l.toLowerCase())};const i=[];let s=[];for(const l of n)l==="OR"?(i.push(s),s=[]):l==="AND"||s.push(l.toLowerCase());i.push(s);const o=i.filter(l=>l.length>0);return o.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:o}}function zm(e,t,n){const r=Nm(t);if(r.kind==="boolean")return e.filter(u=>r.groups.some(h=>h.every(p=>n(u,p))));const{phrase:i,words:s}=r;if(s.length<=1)return i===""?e:e.filter(u=>n(u,i));const o=e.filter(u=>n(u,i));if(o.length>0)return o;const l=e.filter(u=>s.every(h=>n(u,h)));return l.length>0?l:e.filter(u=>s.some(h=>n(u,h)))}const Um=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function Ri(e,t,n){const r=new Map;for(const l of n)r.set(l.field.toLowerCase(),l.field),l.label&&r.set(l.label.toLowerCase(),l.field);const i=[...r.keys()].filter(Boolean).sort((l,u)=>u.length-l.length);let s=t;return i.length>0&&(s=s.replace(new RegExp(`(^|\\s)(${i.map(Um).join("|")}):\\s+`,"gi"),"$1$2:")),zm(e,s,(l,u)=>{const h=u.indexOf(":");if(h>0){const p=r.get(u.slice(0,h));if(p)return Ai(l.data[p],u.slice(h+1))}return Object.values(l.data).some(p=>p!=null&&String(p).toLowerCase().includes(u))})}const Oi="easydb:visible-count";function ju(e,t,n){e&&document.dispatchEvent(new CustomEvent(Oi,{detail:{key:e,count:t,total:n}}))}function Nu(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}const zu="#dc2626",Uu="cell-invalid",Fm=`border-color:${zu};background:#fef2f2`;function la(e,t){e.classList.add(Uu),e.style.border=`1px solid ${zu}`,e.style.background="#fef2f2",t&&(e.title=t)}function Bm(e,t){if(e==null||typeof e=="string"&&e.trim()==="")return"empty";switch(t){case"boolean":return Fu(e)==="invalid"?"invalid":"ok";case"number":return Number.isFinite(typeof e=="number"?e:Number(e))?"ok":"invalid";case"date":case"datetime":return Number.isNaN(Date.parse(String(e)))?"invalid":"ok";default:return"ok"}}const qm=/^\s*(true|1)\s*$/i,Hm=/^\s*(false|0)\s*$/i;function Fu(e){return e===!0||e===1?"true":e===!1||e===0?"false":e==null?"empty":typeof e=="string"?e.trim()===""?"empty":qm.test(e)?"true":Hm.test(e)?"false":"invalid":"invalid"}var Km=Object.defineProperty,Vm=Object.getOwnPropertyDescriptor,Pe=(e,t,n,r)=>{for(var i=r>1?void 0:r?Vm(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Km(t,n,i),i};const Wm=200,Gm=10,ro=32;let Ie=class extends ve{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortSpecs=[],this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.tableReadonly=!1,this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}get readOnlyView(){return this.viewMode&&!!this.viewInst?.readonly}get readOnly(){return this.readOnlyView||this.tableReadonly}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),this.resizing=null}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,n=this.rows.length;t===this.lastEmittedCount&&n===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=n,ju(e,t,n))}async bind(){if(!this.tableId)return;const e=await oe(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(i=>{const s=i.find(o=>o.id===this.tableId);s&&(this.tableColumns=s.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(i=>{const s=i.find(o=>o.id===this.viewInstanceId);s&&(this.viewInst=s,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(i=>{const s=i.find(o=>o.id===this.tableId);s&&this.applyTable(s)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const n=e.store.rows(this.tableId);this.unsubscribe=n.subscribe(i=>this.rows=i);const r=window.setTimeout(()=>this.loading=!0,Wm);try{this.rows=await n.find()}catch(i){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${i?.message??String(i)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(r),this.loading=!1}}applyTable(e){this.resizing==null&&(this.columns=e.columns),this.tableReadonly=!!e.readonly,this.sortSpecs=Gl(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(r=>[r.field,r])),n=e.columnWidths??{};this.columns=e.visibleColumns.map(r=>t.get(r)).filter(r=>!!r).map(r=>{const i=n[r.field];return typeof i=="number"?{...r,width:i}:r}),this.sortSpecs=Gl(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,n){const r=await oe();await this.commitCell(r,e,t,n)}async commitCell(e,t,n,r){const i=this.columns.find(s=>s.field===n);if(i){const s=Xm(i,r,this.rows,t.id);if(s){await e.api.ui.dialogs.alert(s,`Cannot save ${i.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[n]:r},updatedAt:Date.now()})}catch(s){await e.api.ui.dialogs.alert(s?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const n=e.target;typeof t=="boolean"?n.checked=t:n.value=t,n.blur()}renderInvalidCell(e,t,n,r){const i=String(n);return C`<input
      type="text"
      class=${Uu}
      style=${Fm}
      title=${r}
      .value=${i}
      @keydown=${s=>this.cancelCellEdit(s,i)}
      @change=${s=>this.setCell(e,t.field,s.target.value)}
    />`}renderReadonlyCell(e,t){return e.type==="boolean"?C`<input type="checkbox" .checked=${t===!0||t==="true"||t===1||t==="1"} disabled />`:t==null||t===""?C``:e.type==="date"?C`${fi(t)}`:e.type==="datetime"?C`${pi(t).replace("T"," ")}`:C`${String(t)}`}renderScriptedCell(e,t){const n=Zo(t.script,e.data);if(!n.ok)return C`<span class="script-err" title=${n.message}>⚠ ${n.label}</span>`;const r=t.renderer?this.cellRenderers?.get(t.renderer):void 0;if(!r)return C`${n.value==null?"":String(n.value)}`;const i=Fl(r);return ql`<${i}
      .value=${n.value??""}
      .rawValue=${e.data[t.field]??""}
      .column=${t}
      .row=${e.data}
      .readonly=${!0}
      @change=${this.readOnly?void 0:s=>this.setCell(e,t.field,s.detail.value)}
    ></${i}>`}renderCell(e,t){const n=e.data[t.field];if(t.script?.trim())return this.renderScriptedCell(e,t);const r=this.readOnly||t.readonly===!0,i=t.renderer,s=i?this.cellRenderers?.get(i):void 0;if(s){const o=Fl(s);return ql`<${o}
        .value=${n??""}
        .column=${t}
        .row=${e.data}
        .readonly=${r}
        @change=${r?void 0:l=>this.setCell(e,t.field,l.detail.value)}
      ></${o}>`}if(r)return this.renderReadonlyCell(t,n);switch(t.type){case"date":return Wl(n,fi(n))?this.renderInvalidCell(e,t,n,`Not a valid date: "${String(n)}"`):C`<input
          type="date"
          .value=${fi(n)}
          @keydown=${o=>this.cancelCellEdit(o,fi(n))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"datetime":return Wl(n,pi(n))?this.renderInvalidCell(e,t,n,`Not a valid datetime: "${String(n)}"`):C`<input
          type="datetime-local"
          .value=${pi(n)}
          @keydown=${o=>this.cancelCellEdit(o,pi(n))}
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
        />`}}async deleteRow(e){const t=await oe();try{await t.store.rows(this.tableId).remove(e)}catch(n){await t.api.ui.dialogs.alert(n?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e,t=!1){const n=this.sortSpecs.find(s=>s.field===e),r=this.sortSpecs.length===1&&this.sortSpecs[0]?.field===e;if(!t&&!r){this.sortSpecs=[{field:e,asc:!0}],await this.persistSort(this.sortSpecs);return}const i=t?this.sortSpecs.filter(s=>s.field!==e):[];n?n.asc&&i.push({field:e,asc:!1}):i.push({field:e,asc:!0}),this.sortSpecs=i,await this.persistSort(i)}async persistSort(e){const t=e[0],n={sortBy:e.length>0?e:void 0,sortColumn:t?.field,sortAsc:t?t.asc:void 0,updatedAt:Date.now()},r=await oe();this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,n):await r.store.tables.patch(this.tableId,n)}filteredRows(){const e=new Set(this.columns.filter(o=>o.filterable===!1).map(o=>o.field)),t=Object.entries(this.filters).filter(([o,l])=>l&&l.trim().length>0&&!e.has(o)),n=this.globalQuery.trim(),r=this.localQuery.trim();if(t.length===0&&n.length===0&&r.length===0)return this.rows;let i=this.rows;t.length>0&&(i=i.filter(o=>t.every(([l,u])=>Ai(o.data[l],u))));const s=this.columns.filter(o=>o.filterable!==!1);return r&&(i=Ri(i,r,s)),n&&(i=Ri(i,n,s)),i}sortedRows(){const e=this.filteredRows();if(this.sortSpecs.length===0)return e;const t=this.sortSpecs.map(r=>({field:r.field,factor:r.asc?1:-1,type:this.columns.find(i=>i.field===r.field)?.type??"string"})),n=[...e];return n.sort((r,i)=>{for(const s of t){const o=Jm(r.data[s.field],i.data[s.field],s.type,s.factor);if(o!==0)return o}return 0}),n}async openFilterPicker(e,t){e.stopPropagation();const n=e.currentTarget,r=at.instance;if(!r)return;const i=new Map;let s=0;for(const u of this.rowsFacetedFor(t)){const h=u.data[t];if(h==null||String(h).trim()===""){s++;continue}const p=String(h);i.set(p,(i.get(p)??0)+1)}let o=[...i.entries()].map(([u,h])=>({value:u,count:h})).sort((u,h)=>h.count-u.count||u.value.localeCompare(h.value));this.columns.find(u=>u.field===t)?.type==="boolean"&&(o=[...["true","false"].map(h=>({value:h,count:i.get(h)??0})),...o.filter(h=>h.value!=="true"&&h.value!=="false")]);const l=await r.open(n.getBoundingClientRect(),o,this.filters[t]??"",s,u=>this.onFilterInput(t,u));l!==null&&(typeof l=="object"&&"clear"in l?this.onFilterInput(t,""):typeof l=="string"&&this.onFilterInput(t,l))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=new Set(this.columns.filter(r=>r.filterable===!1).map(r=>r.field)),n=Object.entries(this.filters).filter(([r,i])=>i&&i.trim().length>0&&r!==e&&!t.has(r));return n.length===0?this.rows:this.rows.filter(r=>n.every(([i,s])=>Ai(r.data[i],s)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const n=50,r=500;for(const i of this.visibleColumns){let s=!0;for(const l of t){const u=l.data[i.field];if(u==null)continue;if((typeof u=="string"?u:String(u)).length>=n){s=!1;break}}if(!s)continue;const o=new Set;for(const l of this.rowsFacetedFor(i.field)){const u=l.data[i.field];if(u==null||u==="")continue;const h=typeof u=="string"?u:String(u);if(!(h.length>=n)&&(o.add(h),o.size>=r))break}e.set(i.field,[...o].sort())}return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),n=this.visibleColumns,r=new Map;n.forEach((i,s)=>{if(i.width!=null)return;const o=t[s];o&&r.set(i.field,Math.round(o.getBoundingClientRect().width))}),r.size!==0&&(this.columns=this.columns.map(i=>r.has(i.field)?{...i,width:r.get(i.field)}:i))}onResizeStart(e,t,n){e.preventDefault(),e.stopPropagation();const r=n.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:r};const i=o=>{if(!this.resizing)return;const l=o.clientX-this.resizing.startX,u=Math.max(Gm,this.resizing.startW+l);this.columns=this.columns.map(h=>h.field===this.resizing.field?{...h,width:u}:h)},s=async()=>{window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",s);const o=this.resizing?.field;if(this.resizing=null,!o)return;const l=await oe();if(this.viewMode){const u={...this.viewInst?.columnWidths??{}};for(const h of this.columns)typeof h.width=="number"&&(u[h.field]=h.width);await l.store.viewInstances.patch(this.viewInstanceId,{columnWidths:u,updatedAt:Date.now()})}else await l.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",i),window.addEventListener("pointerup",s),window.addEventListener("pointercancel",s)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,n){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const r=n.getBoundingClientRect(),i=e.clientX<r.left+r.width/2;this.dropTargetField=t,this.dropEdge=i?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const n=this.dragSourceField,r=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!n||n===t||!r)return;const i=[...this.columns],s=i.findIndex(h=>h.field===n);if(s<0)return;const[o]=i.splice(s,1);let l=i.findIndex(h=>h.field===t);if(l<0){i.splice(s,0,o);return}r==="after"&&(l+=1),i.splice(l,0,o);const u=await oe();this.viewMode?await u.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:i.map(h=>h.field),updatedAt:Date.now()}):await u.store.tables.patch(this.tableId,{columns:i,updatedAt:Date.now()})}async saveFilters(){const e=await oe(),t={};for(const[r,i]of Object.entries(this.filters))i&&i.trim().length>0&&(t[r]=i);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const n=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:n,updatedAt:Date.now()})}tableSizingStyle(e){return e.length===0||!e.every(n=>typeof n.width=="number")?null:`table-layout: fixed; width: ${e.reduce((n,r)=>n+(r.width??0),0)+ro}px; min-width: 0`}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,n=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,r=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),i=Math.min(e.length,r+n);return{slice:e.slice(r,i),topPad:r*t,bottomPad:(e.length-i)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:n,topPad:r,bottomPad:i}=this.virtualSlice(e),s=this.computeFilterSuggestions(),o=this.externalLoading?this.externalProgress:null;return C`
      ${this.loading||this.externalLoading?C`<div
            class="load-bar"
            role="progressbar"
            aria-label="Loading rows"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${o!=null?Math.round(o*100):re}
          >
            <div
              class="load-bar-fill ${o!=null?"determinate":""}"
              style=${o!=null?`width:${Math.max(2,Math.round(o*100))}%`:re}
            ></div>
          </div>`:re}
      <table style=${this.tableSizingStyle(t)??re}>
        <colgroup>
          ${t.map(l=>C`<col style=${l.width!=null?`width: ${l.width}px`:""} />`)}
          <col style="width:${ro}px" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(l=>{const u=l.sortable!==!1,h=l.filterable!==!1,p=this.sortSpecs.findIndex(K=>K.field===l.field),g=p>=0?this.sortSpecs[p]:void 0,w=g?g.asc?"asc":"desc":null,y=u?w==="asc"?"▲":w==="desc"?"▼":"⇅":"",$=this.sortSpecs.length>1&&p>=0?String(p+1):"",x=`t-${l.type}`,A=this.dragSourceField===l.field,L=this.dropTargetField===l.field,M=L&&this.dropEdge==="before"?" drop-before":L&&this.dropEdge==="after"?" drop-after":"",F=(l.description?`${l.description}
`:"")+(l.units?`Units: ${l.units}
`:"")+`${l.field} — ${u?"click to sort, shift-click to add a sort level, ":"not sortable · "}drag to reorder`+(h?"":" · not filterable");return C`
                <th
                  class=${`${x}${w?" sorted":""}${A?" drag-source":""}${M}${u?"":" no-sort"}`}
                  title=${F}
                  @click=${K=>u&&this.toggleSort(l.field,K.shiftKey)}
                  @dragover=${K=>this.onColDragOver(K,l.field,K.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(l.field)}
                  @drop=${K=>this.onColDrop(K,l.field)}
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
                      @click=${K=>K.stopPropagation()}
                      @dragstart=${K=>this.onColDragStart(K,l.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label"
                      >${l.label}${l.units?C`<span class="col-units"> (${l.units})</span>`:""}</span
                    ><span class="sort-icon" aria-hidden="true"
                      >${y}${$?C`<span class="sort-rank">${$}</span>`:re}</span
                    >
                    ${h?C`<button
                          class=${`funnel${this.filters[l.field]?" active":""}`}
                          title="Filter by value"
                          aria-label=${`Filter ${l.label||l.field}`}
                          @click=${K=>this.openFilterPicker(K,l.field)}
                        >
                          <span class="mi sm" aria-hidden="true">filter_list</span>
                        </button>`:""}
                  </div>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${K=>K.stopPropagation()}
                    @pointerdown=${K=>this.onResizeStart(K,l.field,K.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:${ro}px"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(l=>{if(l.filterable===!1)return C`<th></th>`;const u=s.get(l.field)??[];return C`
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
                      class=${`t-${u.type}${u.renderer?` r-${u.renderer}`:""}${Qm(l,u)}`}
                      title=${Ym(l,u)}
                    >
                      ${this.renderCell(l,u)}
                    </td>`)}
                <td>
                  ${this.readOnly?re:C`<button
                        class="danger"
                        title="Delete row"
                        @click=${()=>this.deleteRow(l.id)}
                      >
                        <span class="mi sm">delete</span>
                      </button>`}
                </td>
              </tr>
            `)}
          ${i>0?C`<tr class="spacer" style=${`height:${i}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};Ie.styles=[bt,ke`
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
    `];Pe([ft({type:String})],Ie.prototype,"tableId",2);Pe([ft({type:String})],Ie.prototype,"viewInstanceId",2);Pe([B()],Ie.prototype,"columns",2);Pe([B()],Ie.prototype,"rows",2);Pe([B()],Ie.prototype,"sortSpecs",2);Pe([B()],Ie.prototype,"filters",2);Pe([B()],Ie.prototype,"globalQuery",2);Pe([B()],Ie.prototype,"localQuery",2);Pe([B()],Ie.prototype,"dragSourceField",2);Pe([B()],Ie.prototype,"dropTargetField",2);Pe([B()],Ie.prototype,"dropEdge",2);Pe([B()],Ie.prototype,"resizing",2);Pe([B()],Ie.prototype,"cellRenderers",2);Pe([B()],Ie.prototype,"scrollY",2);Pe([B()],Ie.prototype,"viewportHeight",2);Pe([B()],Ie.prototype,"loading",2);Pe([B()],Ie.prototype,"externalLoading",2);Pe([B()],Ie.prototype,"externalProgress",2);Pe([B()],Ie.prototype,"tableReadonly",2);Ie=Pe([Se("data-table")],Ie);const Vl=500;function Ym(e,t){if(t.script)return"";const n=e.data[t.field];if(n==null)return"";const r=typeof n=="string"?n:String(n);return r.trim()===""?"":r.length>Vl?`${r.slice(0,Vl)}…`:r}function Qm(e,t){if(t.script)return"";const n=Bm(e.data[t.field],t.type);return n==="empty"?" is-null":n==="invalid"?" is-invalid":""}function Xm(e,t,n,r){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&n.find(s=>s.id!==r&&s.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function fi(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function pi(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const i=r.toISOString();return`${i.slice(0,10)}T${i.slice(11,16)}`}function Wl(e,t){return e==null||typeof e=="string"&&e.trim()===""?!1:t===""}function Jm(e,t,n,r){const i=l=>l==null?0:l===""?1:2,s=i(e),o=i(t);return s!==2||o!==2?(s-o)*r:Zm(e,t,n)*r}function Gl(e){return e.sortBy?.length?e.sortBy.map(t=>({field:t.field,asc:t.asc!==!1})):e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc!==!1}]:[]}function Zm(e,t,n){switch(n){case"number":{const r=Number(e),i=Number(t);return Number.isNaN(r)||Number.isNaN(i)?String(e).localeCompare(String(t)):r-i}case"boolean":return(e?1:0)-(t?1:0);case"date":{const r=new Date(String(e)).getTime(),i=new Date(String(t)).getTime();return Number.isNaN(r)||Number.isNaN(i)?String(e).localeCompare(String(t)):r-i}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function Rt(e,t,n){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:n}}))}class Ne extends Error{constructor(t,n){const r=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(r),this.name="DatasetteError",this.status=n??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function ht(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const n=t.pathname.split("/").filter(Boolean),r={};for(const[l,u]of t.searchParams)r[l]=u;let i,s=null,o=null;if(n.length>=2){o=decodeURIComponent(n[n.length-1]),s=decodeURIComponent(n[n.length-2]);const l=n.slice(0,n.length-2).join("/");i=t.origin+(l?"/"+l:"")}else n.length===1&&(s=decodeURIComponent(n[0])),i=t.origin;return{base:i,db:s,table:o,query:r}}function Ln(e,t={}){const n=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[r,i]of Object.entries({...e.query,...t}))i!=null&&n.searchParams.set(r,String(i));return n.toString()}function eg(e,t){const n={};for(const[r,i]of Object.entries(e.query))r.startsWith("_")||(n[r]=i);return Ln({...e,query:n},{_next:t})}function Yl(e,t){try{const n=new URL(t),r=new URL(e,n);return r.hostname.toLowerCase()!==n.hostname.toLowerCase()?null:(r.protocol=n.protocol,r.port=n.port,r.toString())}catch{return null}}function tg(e){const t=e?.next_url??null,n=e?.next,r=n!=null&&n!==!1?String(n):null,i=Array.isArray(e?.rows)?e.rows:[],s=Array.isArray(e?.columns)?e.columns:null;return{rows:i.map(l=>Array.isArray(l)&&s?Object.fromEntries(s.map((u,h)=>[u,l[h]])):l),nextUrl:t,nextToken:r,hasMore:t!=null||r!=null,truncated:e?.truncated===!0}}function ng(e,t=""){const n=String(e||"").toUpperCase();return n.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":n.includes("REAL")||n.includes("FLOA")||n.includes("DOUB")||n.includes("NUM")||n.includes("DEC")?"number":n.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function Ql(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],n=Array.isArray(e?.columns)?e.columns.slice():[],r={},i=e?.column_details;if(Array.isArray(i))for(const l of i)r[l.column??l.name]=l;else i&&typeof i=="object"&&Object.assign(r,i);for(const l of n)l in r||(r[l]={});const o=(n.length?n:Object.keys(r)).map(l=>{const u=r[l]||{},h=u.is_pk===!0||u.is_pk===1||t.includes(l),p={field:l,label:Bu(l),type:ng(u.sqlite_type??u.type,l)};return(u.notnull===!0||u.notnull===1||h)&&(p.notnull=!0),h&&(p.unique=!0),(u.hidden===!0||u.hidden===1||ea(l))&&(p.hidden=!0),u.default!=null&&u.default!==""&&(p.default=u.default),p});if(t.length===0){const l=o.filter(u=>u.unique).map(u=>u.field);l.length&&t.push(...l)}return{columns:o,pks:t}}function Bu(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function Yi(e){const t=[],n=new Set;for(const r of e)for(const i of Object.keys(r))n.has(i)||(n.add(i),t.push(i));return t.map(r=>{const i={field:r,label:Bu(r),type:rg(e.map(s=>s[r]))};return ea(r)&&(i.hidden=!0),i})}function rg(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&ig(n))?"datetime":"string"}function ig(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function sg(e){const t=new TextEncoder().encode(String(e));let n="";for(const r of t){const i=String.fromCharCode(r);/[A-Za-z0-9_-]/.test(i)?n+=i:n+="~"+r.toString(16).toUpperCase().padStart(2,"0")}return n}function og(e,t){return!t||t.length===0?null:t.map(n=>sg(e[n])).join(",")}function ag(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],n=[];for(const r of t){if(typeof r=="string"){n.push(r);continue}if(r&&typeof r=="object"&&typeof r.name=="string"){if(r.name==="_memory")continue;n.push(typeof r.route=="string"&&r.route?r.route:r.name)}}return n}function lg(e,t){const n=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],r=[];for(const i of n){if(typeof i=="string"){r.push({db:t,table:i,count:null,hidden:!1,pks:[]});continue}i&&typeof i=="object"&&typeof i.name=="string"&&r.push({db:t,table:i.name,count:typeof i.count=="number"?i.count:null,hidden:i.hidden===!0,pks:Array.isArray(i.primary_keys)?i.primary_keys:[]})}return r}async function Dt(e,t){let n;try{n=await e(t)}catch(i){const s=i?.message||"network error";throw new Ne({error:`Couldn't reach ${t} (${s}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(n&&n.ok===!1){let i=null;try{i=await n.json()}catch{}throw new Ne(i&&typeof i=="object"?i:{error:`HTTP ${n.status} for ${t}`},n.status)}const r=await n.json();if(r&&r.ok===!1)throw new Ne(r,n.status);return r}async function ca(e,t){return ag(await Dt(e,`${t}/-/databases.json`))}async function Xl(e,t,n){return lg(await Dt(e,`${t}/${encodeURIComponent(n)}.json`),n)}function cg(e){const t=e?.views,n=[];for(const r of Array.isArray(t)?t:[]){if(typeof r=="string"){n.push(r);continue}const i=r;i&&typeof i.name=="string"&&i.hidden!==!0&&n.push(i.name)}return n}async function ug(e,t,n){const i=`${t}/${encodeURIComponent(n)}.json?sql=${encodeURIComponent("select name, sql from sqlite_master where type='view' order by name")}&_shape=array`;let s;try{s=await Dt(e,i)}catch(h){const p=h instanceof Ne?h.message:String(h);throw new Ne({error:`Couldn't read the view definitions from "${n}". Importing views needs the SQL endpoint, which this instance may have disabled (allow_sql). Its tables can still be imported normally.

${p}`},h instanceof Ne?h.status:0)}const o=s?.rows,l=Array.isArray(s)?s:Array.isArray(o)?o:[],u=[];for(const h of l){const p=h,g=typeof p?.name=="string"?p.name:Array.isArray(h)?h[0]:void 0,w=typeof p?.sql=="string"?p.sql:Array.isArray(h)?h[1]:void 0;typeof g=="string"&&typeof w=="string"&&w.trim()&&u.push({db:n,name:g,sql:w})}return u}async function dg(e,t){const n=t.db?[t.db]:await ca(e,t.base),r=[];for(const i of n){const s=await Dt(e,`${t.base}/${encodeURIComponent(i)}.json`);if(cg(s).length!==0){if(s?.allow_execute_sql===!1)throw new Ne({error:`"${i}" defines views, but this instance has SQL queries disabled (allow_execute_sql), and a view's definition can only be read through them. Its tables can still be imported normally.`},403);r.push(...await ug(e,t.base,i))}}return r}async function Qi(e,t){const n=Ln(t,{_extra:"column_details"}),r=await Dt(e,n);let{columns:i,pks:s}=Ql(r),o=!!r&&r.column_details!=null,l=r?.count??null,u=r?.count_truncated===!0,h=r;if(i.length===0){const p=Ln(t,{_extra:"columns"}),g=await Dt(e,p);({columns:i,pks:s}=Ql(g)),o=!!g&&g.column_details!=null,l=g?.count??l,u=g?.count_truncated===!0||u,h=g}return{columns:i,pks:s,count:l,countTruncated:u,typed:o,raw:h}}async function vo(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const n=await Qi(e,t);return{db:t.db,table:t.table,count:n.count,hidden:!1,pks:n.pks}}function hg(e,t,n){const r=e&&typeof e=="object"?e:{},i=t&&n&&r.databases?.[t]?.tables?.[n]||t&&n&&r.databases?.[t]?.tables?.[n.toLowerCase()]||{},s=t&&r.databases?.[t]||{},o=$=>i[$]??s[$]??r[$],l={columns:{},units:{}};typeof i.sort=="string"&&(l.sort=i.sort),typeof i.sort_desc=="string"&&(l.sortDesc=i.sort_desc),typeof i.size=="number"&&(l.size=i.size),Array.isArray(i.sortable_columns)&&(l.sortableColumns=i.sortable_columns.slice()),typeof i.label_column=="string"&&(l.labelColumn=i.label_column),i.hidden===!0&&(l.hidden=!0),typeof i.description=="string"&&(l.description=i.description),typeof i.description_html=="string"&&(l.descriptionHtml=i.description_html);const u=o("source"),h=o("source_url"),p=o("license"),g=o("license_url"),w=o("about"),y=o("about_url");if(typeof u=="string"&&(l.source=u),typeof h=="string"&&(l.sourceUrl=h),typeof p=="string"&&(l.license=p),typeof g=="string"&&(l.licenseUrl=g),typeof w=="string"&&(l.about=w),typeof y=="string"&&(l.aboutUrl=y),i.columns&&typeof i.columns=="object")for(const[$,x]of Object.entries(i.columns))typeof x=="string"&&(l.columns[$]=x);if(i.units&&typeof i.units=="object")for(const[$,x]of Object.entries(i.units))typeof x=="string"&&(l.units[$]=x);return l}const Jl=new Map;async function fg(e,t){let n=Jl.get(t);return n||(n=Dt(e,`${t}/-/metadata.json`).catch(()=>({})),Jl.set(t,n)),n}async function ua(e,t){const n=await fg(e,t.base);return hg(n,t.db,t.table)}function pg(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function da(e,t){const n=e.sortableColumns!=null?new Set(e.sortableColumns):null,r=t.map(l=>{const u=e.columns[l.field],h=e.units[l.field],p=n?n.has(l.field):void 0;return u==null&&h==null&&p===void 0?l:{...l,...u!=null?{description:u}:{},...h!=null?{units:h}:{},...p!==void 0?{sortable:p}:{}}}),i=new Set(t.map(l=>l.field)),s={};e.sort&&i.has(e.sort)?(s.sortColumn=e.sort,s.sortAsc=!0):e.sortDesc&&i.has(e.sortDesc)&&(s.sortColumn=e.sortDesc,s.sortAsc=!1);const o=pg(e);return o&&(s.info=o),e.labelColumn&&i.has(e.labelColumn)&&(s.labelColumn=e.labelColumn),{columns:r,patch:s}}function ha(e,t){if(t.length===0)return e;const n=new Map(Yi(t).map(r=>[r.field,r.type]));return e.map(r=>{if(r.type!=="string")return r;const i=n.get(r.field);return i&&i!=="string"?{...r,type:i}:r})}async function Pr(e,t,n={}){const r=n.maxRows??1e4,s={_size:n.pageSize??1e3,...n.extraParams||{}},o=Ln(t,s);let l=n.startUrl?Yl(n.startUrl,o)??n.startUrl:o;const u=[];let h=!1,p=!1,g=0,w,y;for(;l;){let $;try{$=await Dt(e,l)}catch(M){if(u.length===0&&!n.startUrl)throw M;w=M instanceof Ne&&M.status?`stopped after ${u.length} rows: HTTP ${M.status}`:`stopped after ${u.length} rows: ${M?.message??String(M)}`,p=!0,y=l;break}const x=tg($);u.push(...x.rows),h=h||x.truncated,g+=1,n.onProgress?.(u.length);const L=(x.nextUrl!=null?Yl(x.nextUrl,l):null)??(x.nextToken!=null?eg(t,x.nextToken):null);L&&u.length<r&&x.rows.length>0?l=L:(p=L!=null&&x.rows.length>0,p&&(y=L??void 0),l=null)}return{rows:u,truncated:h,hasMore:p,pages:g,error:w,nextUrl:y}}function mg(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function qu(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function Hu(e,t,n){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${n}`}async function Xi(e,t,n,r){let i;try{i=await e(t,{method:"POST",headers:mg(r),body:JSON.stringify(n)})}catch(o){throw new Ne({error:`Couldn't reach ${t} (${o?.message||"network error"}).`},0)}if(i&&i.ok===!1){let o=null;try{o=await i.json()}catch{}throw new Ne(o&&typeof o=="object"?o:{error:`HTTP ${i.status} for ${t}`},i.status)}const s=await i.json();if(s&&s.ok===!1)throw new Ne(s,i.status);return s}async function Zl(e,t,n,r={}){const i=await Xi(e,qu(t,"insert"),{rows:n,return:!0},r.token);return Array.isArray(i?.rows)?i.rows:[]}async function gg(e,t,n,r,i={}){const s=await Xi(e,Hu(t,n,"update"),{update:r,return:!0},i.token);return s&&typeof s.row=="object"&&s.row?s.row:Array.isArray(s?.rows)&&s.rows[0]?s.rows[0]:null}async function ec(e,t,n,r={}){await Xi(e,Hu(t,n,"delete"),{},r.token)}async function bg(e,t,n,r={}){const i=await Xi(e,qu(t,"upsert"),{rows:n,return:!0},r.token);return Array.isArray(i?.rows)?i.rows:[]}async function wg(e,t){const n=Ln(t,{_extra:"primary_keys"}),r=await Dt(e,n);return Array.isArray(r?.primary_keys)?r.primary_keys:[]}async function Ku(e,t){try{const n=await Dt(e,Ln(t,{_extra:"count"}));return{count:typeof n?.count=="number"?n.count:null,truncated:n?.count_truncated===!0}}catch{return{count:null,truncated:!1}}}async function Vu(e,t,n={}){const r=n.token?{headers:{Authorization:`Bearer ${n.token}`}}:void 0;try{const i=await e(`${t}/-/versions.json`,r);if(i&&i.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${i.status}`};const s=await i.json(),o=s?.datasette?.version??s?.version??null;let l=null;try{l=(await(await e(`${t}/-/actor.json`,r)).json())?.actor??null}catch{}return{reachable:!0,version:o,actor:l,writable:!!(n.token&&l)}}catch(i){return{reachable:!1,version:null,actor:null,writable:!1,error:i?.message||"unreachable"}}}function Mn(e,t){return t?(n,r)=>{const i=(r??{}).headers??{};return e(n,{...r??{},headers:{...i,Authorization:`Bearer ${t}`}})}:e}function yg(e,t){const n=new Map;for(const r of e)n.has(r.name.toLowerCase())||n.set(r.name.toLowerCase(),r);return r=>n.get(`${t}/${r}`.toLowerCase())??n.get(r.toLowerCase())}async function vg(e,t,n){const r={created:[],skipped:[],found:n.length};if(n.length===0)return r;const i=(await e.store.tables.find()).filter(l=>l.workspaceId===t),s=new Set(i.map(l=>l.name)),o=[...i];for(const l of n){const u=Gi(l.sql),h=u.projections[0];if(!h){r.skipped.push({name:l.name,reason:u.unsupported[0]??"its SELECT could not be modelled as a projection"});continue}const p=await Iu(e,t,{name:`${l.db}/${l.name}`,spec:h.spec,...h.sortBy?{sortBy:h.sortBy}:{}},{resolve:yg(o,l.db),taken:s});if(!p){const g=h.spec.sources.map(w=>w.tableName).join(", ");r.skipped.push({name:l.name,reason:`its source tables are not in this workspace (${g}) — import them first`});continue}o.push(p),s.add(p.name),r.created.push(p.name),u.unsupported.length>0&&r.skipped.push({name:l.name,reason:`imported, but part of the query was not modelled: ${u.unsupported.slice(0,2).join("; ")}`})}return r}function $g(e,t){if(t.found===0){e.ui.dialogs.toast("That Datasette database defines no views.",{kind:"info",title:"Datasette views"});return}const n=t.skipped.length>0?` ${t.skipped.length} not fully imported: ${t.skipped.map(r=>`${r.name} — ${r.reason}`).join("; ")}`:"";if(t.created.length===0){e.ui.dialogs.toast(`No views could be imported as projections.${n}`,{kind:"warning",title:"Datasette views"});return}e.ui.dialogs.toast(`Imported ${t.created.length} of ${t.found} view${t.found===1?"":"s"} as projections.${n}`,{kind:t.skipped.length>0?"warning":"success",title:"Datasette views"})}function xg(e,t){return`${e}/${encodeURIComponent(t.db)}/${encodeURIComponent(t.name)}`}async function Wu(e,t){try{return await dg(n=>e.backend.fetch(n),ht(t))}catch(n){if(n instanceof Ne)return null;throw n}}async function Gu(e,t,n){const r=t.slice(0,5).map(s=>s.name).join(", "),i=await e.ui.dialogs.choice(`${n} ${t.length} view${t.length===1?"":"s"} (${r}${t.length>5?", …":""}).

A view is a query rather than stored rows, so it can come in either way.`,["As projections (live)","As tables (snapshot)"],"Datasette views");return i?i.startsWith("As projections")?"projection":"table":null}async function kg(e,t,n){const r=await Wu(e,t);if(!r||r.length===0)return;const i=await Gu(e,r,"This database also defines");i&&await Yu(e,ht(t).base,r,i,n)}async function Yu(e,t,n,r,i){if(r==="table"){await i(n.map(o=>xg(t,o)));return}const s=e.workspaceId();s&&$g(e,await vg(e,s,n))}const Di=e=>e.replace(/^https?:\/\//,""),mr="datasette",Qu=1e4,Xu=1e3,fa=1e4,Ju=60;function Zu(e){e.ui.registerSettings(mr,"Datasette",[{key:"maxImportRows",label:"Max import rows per table",type:"number",default:Qu,scope:"workspace",description:"Max rows imported per table. 0 = unlimited."},{key:"pageSize",label:"Page size",type:"number",default:Xu,scope:"workspace",description:"Rows requested per page hop while paging a table (the instance clamps this to its own max_returned_rows)."},{key:"connectMaxRows",label:"Connected table row cap",type:"number",default:fa,scope:"workspace",description:"Row cap for a single live connected table."},{key:"retryWaitSeconds",label:"Rate-limit retry wait (seconds)",type:"number",default:Ju,scope:"workspace",description:"Wait before resuming an import paused by the instance's rate limiting."}])}function mi(e,t,n){const r=typeof e=="number"?e:Number(e);return Number.isFinite(r)&&r>=n?Math.floor(r):t}async function Ji(e){const[t,n,r,i]=await Promise.all([e.settings.get(mr,"maxImportRows"),e.settings.get(mr,"pageSize"),e.settings.get(mr,"connectMaxRows"),e.settings.get(mr,"retryWaitSeconds")]);return{maxImportRows:mi(t,Qu,0),pageSize:mi(n,Xu,1),connectMaxRows:mi(r,fa,1),retryWaitSeconds:mi(i,Ju,1)}}function Zi(e){return e===0?Number.MAX_SAFE_INTEGER:e}function Cg(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}`}function pa(e,t,n,r){const i={...e.info??{}};return!i.source&&!i.sourceUrl&&(i.source=`${Di(t)}/${n}/${r}`,i.sourceUrl=Cg(t,n,r)),{...e,info:i}}function ed(e,t){if(!e.has(t))return t;for(let n=2;;n++){const r=`${t} (${n})`;if(!e.has(r))return r}}async function ma(e,t,n,r={}){if(t.db&&t.table)return[await vo(e,t)];const i=[];if(t.db){if(i.push(...await Xl(e,t.base,t.db)),r.skipPicker)return i.filter(l=>!l.hidden)}else{const l=await ca(e,t.base);if(l.length===0)return[];let u=l;if(l.length>1){const h=await Ii(l.map(p=>({name:p,size:null})),{title:`${n} from Datasette`,message:`Choose databases on ${Di(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!h)return null;u=h.map(p=>l[p])}for(const h of u)try{i.push(...await Xl(e,t.base,h))}catch{}}if(i.length===0)return[];const s=new Set(i.map(l=>l.db)).size>1,o=await Ii(i.map(l=>({name:s?`${l.db}/${l.table}`:l.table,size:l.count,detail:s?void 0:l.db,hidden:l.hidden})),{title:`${n} from Datasette`,message:`Choose tables to ${n.toLowerCase()} from ${Di(t.base)}.`,confirmLabel:n});return o?o.map(l=>i[l]):null}const _g=e=>new Promise(t=>setTimeout(t,e));function Sg(e){const t=globalThis.__eda_resumeDelayMs;return typeof t=="number"&&t>=0?t:e*1e3}function ga(e,t,n,r){if(!(!e||!t))return{nextUrl:t,loadedRows:n,...r!=null?{totalCount:r}:{}}}const Eg={id:"datasette-import",name:"Datasette Import",type:"importer",version:"0.3.0",description:"Import snapshot tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-import.ts"},tc="https://latest.datasette.io/fixtures/facetable";function Tg(e){Zu(e),e.ui.registerTableButton({id:"datasette:refresh-snapshot",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this snapshot from the Datasette table it came from",visible:t=>t.origin?.type==="datasette"&&t.source?.type!=="datasette",onClick:(t,{tableId:n})=>Pg(t,n)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:n})=>Mg(t,n)}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${tc}`,"","Import from Datasette");r&&await nc(t,r)}}),e.ui.registerUrlSource({id:"datasette-views",label:"Datasette views…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette database URL — its SQL views can come in as live Projections over the tables you already imported, or as snapshot tables.

e.g. ${tc}`,"","Import Datasette views");if(r)try{const i=await Wu(t,r);if(!i||i.length===0){await t.ui.dialogs.alert("That Datasette database defines no views.","Datasette views");return}const s=await Gu(t,i,"This database defines");if(!s)return;await Yu(t,ht(r).base,i,s,o=>td(t,o,{}))}catch(i){await t.ui.dialogs.alert(i?.message??String(i),"Datasette views")}}}),e.ui.registerDropHandler(async(t,n)=>{const r=t.dataTransfer?.getData("text/plain")||"";return Ig(r)?(t.preventDefault(),await nc(n,r,{skipViews:!0}),!0):!1})}async function nc(e,t,n={}){try{await es(e,t,n)}catch(r){let i;r instanceof Ne?i=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:i=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(i,"Datasette import failed")}}function Ig(e){try{const t=ht(e);return!!(t.db&&t.table)}catch{return!1}}async function es(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const i=await Ji(e),s=ht(t),l=await ma(L=>e.backend.fetch(L),s,"Import",{skipPicker:n.skipTablePicker});if(l===null)return;if(l.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const u=[];let h=0;for(const L of l){const M={base:s.base,db:L.db,table:L.table,query:{}},F=await Ag(e,r,M);if(F.skipped){h+=1;continue}u.push({tableId:F.tableId,ref:M,overwrite:F.overwrite,knownCount:L.count})}let p=0,g=0;const w=[],y=[],$=[];for(const L of u)try{const M=await Rg(e,L.tableId,L.ref,L.overwrite,L.knownCount,n,i);p+=1,g+=M.rowCount,M.error?y.push(`${L.ref.db}/${L.ref.table} (${M.error})`):(M.hasMore||M.truncated)&&w.push(`${L.ref.db}/${L.ref.table}`)}catch(M){$.push(`${L.ref.db}/${L.ref.table}: ${M?.message??String(M)}`)}const x=Zi(i.maxImportRows),A=n.maxRows!=null?Math.min(n.maxRows,x):x;if(Dg(e,{imported:p,skipped:h,totalRows:g,capped:w,cap:A,partial:y,failed:$,requested:l.length}),p>0&&!n.skipViews)try{await kg(e,t,L=>td(e,L,n))}catch{}}async function td(e,t,n){for(const r of t)await es(e,r,{...n,skipViews:!0})}async function Ag(e,t,n){const r=`${n.db}/${n.table}`,i={type:"datasette",url:`${n.base}/${encodeURIComponent(n.db)}/${encodeURIComponent(n.table)}`},s=(await e.store.tables.find()).filter(h=>h.workspaceId===t),o=s.find(h=>h.name.toLowerCase()===r.toLowerCase());let l=r;if(o){const h=await e.ui.dialogs.choice(`A table named "${r}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!h||h==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(h==="Overwrite")return await e.store.tables.patch(o.id,{origin:i,updatedAt:Date.now()}),{tableId:o.id,overwrite:!0};l=ed(new Set(s.map(p=>p.name)),r)}const u=xe();return await e.store.tables.insert({id:u,workspaceId:t,name:l,code:De(`${n.db}-${n.table}`),columns:[],view:"table",origin:i,updatedAt:Date.now()}),{tableId:u,overwrite:!1}}async function Rg(e,t,n,r,i,s,o){const l=`${n.db}/${n.table}`,u=g=>e.backend.fetch(g),h=Zi(o.maxImportRows),p=s.maxRows!=null?Math.min(s.maxRows,h):h;Rt(t,!0);try{let g=[],w=i,y=!1,$=!1,x=[];try{const be=await Qi(u,n);g=be.columns,w==null&&(w=be.count,y=be.countTruncated),$=be.typed,x=be.pks??[]}catch{}if(w==null){const be=await Ku(u,n);w=be.count,y=be.truncated}const A=w&&w>0&&(!y||p<=w)?Math.min(w,p):0,L=[];let M=!1,F=!1,K=0,W,ie,q;for(;;){const be=await Pr(u,n,{maxRows:Math.max(0,p-L.length),pageSize:o.pageSize,...q?{startUrl:q}:{},onProgress:$n=>{A>0&&Rt(t,!0,Math.min(1,(L.length+$n)/A))}});if(L.push(...be.rows),M=M||be.truncated,K+=be.pages,F=be.hasMore,W=be.error,ie=be.nextUrl,!be.error||!be.nextUrl||L.length>=p)break;const Ke=`${o.retryWaitSeconds}s`;if(await e.ui.dialogs.choice(`Import of "${l}" paused after ${L.length.toLocaleString()} rows (${be.error}). Datasette may be rate-limiting a large import. Wait ${Ke} and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,[`Resume in ${Ke}`,"Cancel"],"Import paused — rate limited?")!==`Resume in ${Ke}`)break;Rt(t,!0),e.ui.dialogs.toast(`Resuming "${l}" in ${Ke}…`,{kind:"info",title:"Import paused"}),await _g(Sg(o.retryWaitSeconds)),q=be.nextUrl,W=void 0,ie=void 0}let ae=g.length===0?Yi(L):$?g:ha(g,L),ee={};try{const be=await ua(u,n),Ke=da(be,ae);ae=Ke.columns,ee=Ke.patch}catch{}ee=pa(ee,n.base,n.db,n.table);const ce=await e.store.tables.findOne(t),N=ce?.columns??[],Q=N.length===0;let{columns:de}=Hi(N,ae,ce?.deletedColumns),Ee=L;if(s.editColumns&&Q){const be=await s.editColumns(de,l);if(be===null)return{name:l,rowCount:0,hasMore:!1,truncated:!1,pages:K,count:w,error:W};Ee=Og(Ee,de,be),de=be}const ze=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const kt=ga(W,ie,L.length,w),fe=x.length>0&&ce?.origin?{origin:{...ce.origin,pks:x}}:{},Ue=Q?{columns:de,...ee,...fe,importResume:kt,updatedAt:ze}:{columns:de,...ee.info?{info:ee.info}:{},...fe,importResume:kt,updatedAt:ze};await e.store.tables.patch(t,Ue);const Ae=e.store.rows(t);if(r){const be=await Ae.find();await Ae.bulkRemove(be.map(Ke=>Ke.id))}const Ye=Ee.map(be=>({id:xe(),tableId:t,data:be,updatedAt:ze}));return await Ae.bulkInsert(Ye),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:Ye.length}),{name:l,rowCount:Ye.length,hasMore:F,truncated:M,pages:K,count:w,error:W}}finally{Rt(t,!1)}}function Og(e,t,n){const r=Yo(t,n);return r?e.map(r):e}function Dg(e,t){const n=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,r=`${t.imported} table${t.imported===1?"":"s"}`,i=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${r} (${n});${i} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${r} (${n}).${i} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){const s=t.cap<Number.MAX_SAFE_INTEGER?` at ${t.cap.toLocaleString()}`:"";e.ui.dialogs.toast(`Imported ${r} (${n}).${i} ${t.capped.length} capped${s} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${r} (${n}) from Datasette.${i}`,{kind:"success",title:"Datasette import"})}async function Pg(e,t){const n=await e.store.tables.findOne(t);if(!(!n?.origin?.url||n.origin.type!=="datasette"))try{const r=await Ji(e);await Lg(e,n,r)}catch(r){const i=r instanceof Ne?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${i}`,{kind:"error",title:"Refresh"})}}async function Lg(e,t,n){const r=ht(t.origin.url),i=p=>e.backend.fetch(p),s=Zi(n.maxImportRows);Rt(t.id,!0);let o,l=[];try{let p=[],g=null,w=!1,y=!1;try{const fe=await Qi(i,r);p=fe.columns,g=fe.count,w=fe.countTruncated,y=fe.typed}catch{}if(g==null){const fe=await Ku(i,r);g=fe.count,w=fe.truncated}const $=g&&g>0&&(!w||s<=g)?Math.min(g,s):0,{rows:x,hasMore:A,truncated:L,error:M,nextUrl:F}=await Pr(i,r,{maxRows:s,pageSize:n.pageSize,onProgress:fe=>{$>0&&Rt(t.id,!0,Math.min(1,fe/$))}});let K=p.length===0?Yi(x):y?p:ha(p,x),W={};try{const fe=await ua(i,r),Ue=da(fe,K);K=Ue.columns,W=Ue.patch}catch{}W=pa(W,r.base,r.db,r.table);const ie=t.columns.length===0,q=Hi(t.columns,K,t.deletedColumns);l=q.newFields;const V=Date.now(),ae=ga(M,F,x.length,g),ee=ie?{columns:q.columns,...W,importResume:ae,updatedAt:V}:{columns:q.columns,...W.info?{info:W.info}:{},importResume:ae,updatedAt:V};await e.store.tables.patch(t.id,ee);const ce=t.origin?.pks??[],N=new Set(K.map(fe=>fe.field)),Q=t.columns.map(fe=>fe.field).filter(fe=>!N.has(fe)&&!ce.includes(fe)),de=(t.deletedColumns??[]).filter(fe=>N.has(fe)),Ee=e.store.rows(t.id),ze=await Ee.find(),{data:kt}=Lu({oldRows:ze.map(fe=>({data:fe.data})),freshRows:x,pks:ce,userAddedFields:Q,deletedRemoteFields:de});await Ee.bulkRemove(ze.map(fe=>fe.id)),await Ee.bulkInsert(kt.map(fe=>({id:xe(),tableId:t.id,data:fe,updatedAt:V}))),o={rowCount:kt.length,hasMore:A,truncated:L,error:M}}finally{Rt(t.id,!1)}const u=[];if(o.error)u.push(`partial (${o.error})`);else if(o.hasMore||o.truncated){const p=s<Number.MAX_SAFE_INTEGER?` at ${s.toLocaleString()}`:"";u.push(`capped${p}`)}l.length>0&&u.push(`${l.length} new column${l.length===1?"":"s"}`);const h=u.length?` — ${u.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${o.rowCount} rows from ${r.db}/${r.table}${h}.`,{kind:o.error||o.hasMore||o.truncated||l.length>0?"warning":"success",title:"Refresh"}),l.length>0&&jg(t.id,r,l)}async function Mg(e,t){const n=await e.store.tables.findOne(t),r=n?.importResume;if(!n||!n.origin?.url||!r)return;const i=await Ji(e),s=Zi(i.maxImportRows),o=ht(n.origin.url),l=$=>e.backend.fetch($),u=r.loadedRows,h=r.totalCount??null,p=h&&h>0?Math.min(h,s):0;Rt(t,!0,p>0?Math.min(1,u/p):void 0);let g=0,w;try{const $=await Pr(l,o,{startUrl:r.nextUrl,maxRows:Math.max(0,s-u),pageSize:i.pageSize,onProgress:L=>{p>0&&Rt(t,!0,Math.min(1,(u+L)/p))}});g=$.rows.length;const x=Date.now();await e.store.rows(t).bulkInsert($.rows.map(L=>({id:xe(),tableId:t,data:L,updatedAt:x}))),w={error:$.error,nextUrl:$.nextUrl};const A=ga($.error,$.nextUrl,u+g,h);await e.store.tables.patch(t,{importResume:A,updatedAt:x})}catch($){const x=$ instanceof Ne?$.message:$?.message??String($);e.ui.dialogs.toast(`Couldn't resume ${o.db}/${o.table}: ${x}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{Rt(t,!1)}const y=u+g;w.error?e.ui.dialogs.toast(`Resumed ${o.db}/${o.table}: +${g} rows (${y} total) — interrupted again (${w.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${o.db}/${o.table}: +${g} rows (${y} total).`,{kind:"success",title:"Resume import"})}function jg(e,t,n){const r=n.join(", "),i=n.length!==1,s=`Refreshing ${t.db}/${t.table} revealed ${n.length} new column${i?"s":""}: ${r}. Review, reorder or hide ${i?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:s}}))}const Ng=Object.freeze(Object.defineProperty({__proto__:null,importDatasette:es,init:Tg,meta:Eg},Symbol.toStringTag,{value:"Module"}));var zg=Object.defineProperty,Ug=Object.getOwnPropertyDescriptor,Lr=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ug(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&zg(t,n,i),i};const Fg="https://latest.datasette.io/ephemeral";let vt=class extends ve{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const n=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,n)}catch(r){this.status=r?.message??String(r),this.statusKind="err";return}}this.finish({url:t,token:n})}}connectedCallback(){super.connectedCallback(),vt.instance=this}disconnectedCallback(){super.disconnectedCallback(),vt.instance===this&&(vt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&gt(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return C`
      <dialog @cancel=${this.onCancel} @keydown=${mt}>
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
                placeholder="e.g. ${Fg}"
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
    `}};vt.instance=null;vt.styles=[pt,ke`
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
    `];Lr([B()],vt.prototype,"url",2);Lr([B()],vt.prototype,"token",2);Lr([B()],vt.prototype,"status",2);Lr([B()],vt.prototype,"statusKind",2);vt=Lr([Se("datasette-connect-dialog")],vt);class Bg extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function nd(e){return`datasette:token:${e}`}function qg(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function Hg(e,t,n){const r=e.source,i=r?.config??{},s={base:i.base,db:i.db,table:i.table,query:{}},o=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],l=r?.writable===!0,u=i.maxRows;let h=null;function p(){return u!=null?Promise.resolve(u):(h||(h=n?Ji(n).then(q=>q.connectMaxRows):Promise.resolve(fa)),h)}const g=i.pollIntervalMs??0,w=(q,V)=>t.backend.fetch(q,V);async function y(){const V=(await t.settings.findOne(nd(i.base)))?.value;return typeof V=="string"&&V.length>0?V:void 0}const $=async(q,V)=>Mn(w,await y())(q,V);function x(q){return{id:og(q,o)??xe(),tableId:e.id,data:q,updatedAt:Date.now()}}function A(q){if(!l)throw new Bg(q)}function L(q){const V={};for(const[ae,ee]of Object.entries(q))o.includes(ae)||(V[ae]=ee);return V}const M=new Set;let F=[],K=!1,W=null;function ie(){return W||(W=(async()=>{try{const{rows:q}=await Pr($,s,{maxRows:await p()});F=q.map(x),K=!0;for(const V of M)V(F);return F}finally{W=null}})(),W)}return{async find(q){const V=K?F:await ie();return!q||Object.keys(q).length===0?V:V.filter(ae=>qg(ae,q))},async findOne(q){return(K?F:await ie()).find(ae=>ae.id===q)??null},async insert(q){A("insert");const[V]=await Zl($,s,[q.data]),ae=x(V??q.data);return t.events.emit("row:created",{tableId:e.id,row:ae}),ie(),ae},async bulkInsert(q){if(q.length===0)return[];A("insert");const V=await Zl($,s,q.map(ee=>ee.data)),ae=(V.length?V:q.map(ee=>ee.data)).map(x);return ie(),ae},async upsert(q){A("upsert");const[V]=await bg($,s,[q.data]),ae=x(V??q.data);return ie(),ae},async patch(q,V){A("update");const ae=V.data,ee=L(ae??{}),ce=await gg($,s,q,ee),N=x(ce??{...ae??{}});return t.events.emit("row:updated",{tableId:e.id,row:N,prev:N}),ie(),N},async remove(q){A("delete"),await ec($,s,q),t.events.emit("row:deleted",{tableId:e.id,rowId:q}),ie()},async bulkRemove(q){if(q.length!==0){A("delete");for(const V of q)await ec($,s,V);ie()}},subscribe(q){M.add(q),K?q(F):ie();let V=null;return g>0&&(V=setInterval(()=>void ie(),g)),()=>{M.delete(q),V&&clearInterval(V)}},async refresh(){await ie()}}}const Kg='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Vg={id:"datasette-connect",name:"Datasette Connect",type:"source",version:"0.3.0",description:"Connect a live, editable table on any Datasette instance — rows are never stored locally",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-connect.ts"};function Wg(e){Zu(e),e.ui.registerConnector({id:"datasette",label:"Datasette",icon:Kg,order:10,description:"A live, editable table on any Datasette instance",connect:t=>Yg(t)}),e.ui.registerTableButton({id:"datasette:refresh-live",label:"Refresh",icon:"refresh",tooltip:"Re-read this live table from its Datasette instance",visible:t=>t.source?.type==="datasette",onClick:(t,{tableId:n})=>Gg(t,n)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:(t,n)=>Hg(t,n,e)})}async function Gg(e,t){if((await e.store.tables.findOne(t))?.source?.type==="datasette")try{const r=e.store.rows(t);typeof r.refresh=="function"&&await r.refresh();const i=await r.find();e.ui.dialogs.toast(`Reloaded ${i.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}catch(r){const i=r instanceof Ne?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${i}`,{kind:"error",title:"Refresh"})}}async function Yg(e){const t=vt.instance??Qg(),n=(i,s)=>e.backend.fetch(i,s),r=await t.open({initialUrl:"https://datasette.io",async onTest(i,s){const o=ht(i),l=await Vu(n,o.base,{token:s||void 0});if(o.db&&o.table){await vo(Mn(n,s||void 0),o);const h=l.version?` (Datasette ${l.version})`:"";return l.writable?`Reachable${h} — table found, signed in, read-write.`:`Reachable${h} — table found, read-only (no token / not authenticated).`}if(!l.reachable)return`Unreachable: ${l.error??"no response"}`;const u=l.version?` (Datasette ${l.version})`:"";return l.writable?`Reachable${u} — signed in, read-write.`:`Reachable${u} — read-only (no token / not authenticated).`},async onConnect(i,s){const o=ht(i);o.db&&o.table&&await vo(Mn(n,s||void 0),o)}});if(r)try{await rd(e,r.url,r.token)}catch(i){const s=i instanceof Ne?i.message:i?.message??String(i);await e.ui.dialogs.alert(s,"Connect Datasette failed")}}function Qg(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function rd(e,t,n){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const i=ht(t),s=(g,w)=>e.backend.fetch(g,w),o=Mn(s,n||void 0),l=await Vu(s,i.base,{token:n||void 0});n&&await e.store.settings.upsert({name:nd(i.base),value:n});let u;try{u=await ma(o,i,"Connect")}catch(g){const w=g instanceof Ne?g.message:g?.message??String(g);throw new Error(`Couldn't read tables from ${Di(i.base)}: ${w}`)}if(u===null)return;if(u.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const h=[];for(const g of u){const w=await Xg(e,r,i.base,g,l.writable,n);w!==null&&h.push({tableId:w,c:g})}if(h.length===0)return;const p=l.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${h.length} live table${h.length===1?"":"s"} from Datasette (${p}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:g,c:w}of h)Jg(e,g,i.base,w,n)}async function Xg(e,t,n,r,i,s){const o=(await e.store.tables.find()).filter(w=>w.workspaceId===t);let l=`${r.db}/${r.table}`,u=o.find(w=>{const y=w.source?.config;return w.source?.type==="datasette"&&y?.base===n&&y?.db===r.db&&y?.table===r.table});if(!u){const w=o.find(y=>y.name.toLowerCase()===l.toLowerCase());if(w){const y=await e.ui.dialogs.choice(`A table named "${l}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!y||y==="Skip")return null;y==="Overwrite"?u=w:l=ed(new Set(o.map($=>$.name)),l)}}let h=r.pks??[];if(h.length===0){const w=Mn((y,$)=>e.backend.fetch(y,$),s||void 0);try{h=await wg(w,{base:n,db:r.db,table:r.table,query:{}})}catch{h=[]}}const p=u?.id??xe(),g={...u??{},id:p,workspaceId:t,name:l,code:De(`${r.db}-${r.table}`),columns:u?.columns??[],view:u?.view??"table",source:{type:"datasette",writable:i,config:{base:n,db:r.db,table:r.table,pks:h}},updatedAt:Date.now()};return u?await e.store.tables.upsert(g):await e.store.tables.insert(g),p}async function Jg(e,t,n,r,i){const s={base:n,db:r.db,table:r.table,query:{}},o=Mn((l,u)=>e.backend.fetch(l,u),i||void 0);try{let l=[],u=!1;try{const x=await Qi(o,s);l=x.columns,u=x.typed}catch{}const{rows:h}=await Pr(o,s,{maxRows:50,pageSize:50}),p=l.length===0?Yi(h):u?l:ha(l,h);if(p.length===0)return;const g=await e.store.tables.findOne(t);if(!g)return;const w=g.source?.config?.pks??[];let y=p.map(x=>w.includes(x.field)?{...x,unique:!0,notnull:!0}:x),$={};try{const x=await ua(o,s),A=da(x,y);y=A.columns,$=A.patch}catch{}$=pa($,s.base,r.db,r.table),await e.store.tables.patch(t,{columns:y,...$,updatedAt:Date.now()})}catch{}}const Zg=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:rd,init:Wg,meta:Vg},Symbol.toStringTag,{value:"Module"})),eb={id:"url-source",name:"URL Reference",type:"source",version:"0.1.0",description:'Backs a table with a live read-only fetch of a plain CSV or JSON URL — a "reference" table whose rows are never persisted locally.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/url-source.ts"};function tb(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"url",create:id}),e.ui.registerTableButton({id:"url-source:refresh",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this reference from its source URL",visible:t=>t.source?.type==="url",onClick:async(t,{tableId:n})=>{try{const r=t.store.rows(n);typeof r.refresh=="function"&&await r.refresh(),t.ui.dialogs.toast("Reference refreshed.",{kind:"success",title:"Refresh"})}catch(r){t.ui.dialogs.toast(`Refresh failed: ${r.message}`,{kind:"error",title:"Refresh"})}}})}class fn extends Error{constructor(t){super(`This is a reference (read-only) table — ${t} is not permitted. Import a copy to edit.`),this.name="ReadOnlyReferenceError"}}function nb(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}const rc=5e4;function rb(e){return e.ok===!0&&Array.isArray(e.rows)}function ib(e,t){if(typeof e!="object"||e===null||Array.isArray(e))return null;const n=e;let r;try{r=new URL(t)}catch{return null}for(const i of["next_url","nextUrl","next"]){const s=n[i];if(typeof s!="string")continue;const o=s.trim();if(o!==""){if(/^(https?:\/\/|[/?])/i.test(o))try{const l=new URL(o,t);if(l.origin!==r.origin)continue;return l.toString()}catch{continue}if(i==="next"&&rb(n))return`${r.origin}${r.pathname}?_next=${encodeURIComponent(o)}`}}return null}function sb(e){const t=n=>typeof n=="object"&&n!==null&&!Array.isArray(n);if(Array.isArray(e))return e.filter(t);if(t(e)){for(const n of["rows","records","data"]){const r=e[n];if(Array.isArray(r))return r.filter(t)}for(const n of Object.values(e))if(Array.isArray(n))return n.filter(t)}return[]}function id(e,t){const n=e.source?.config??{},r=typeof n.url=="string"?n.url:"",i=n.format==="json"?"json":"csv",s=new Set;let o=[],l=!1,u=null;function h($){return $.map((x,A)=>({id:`url:${A}`,tableId:e.id,data:x,updatedAt:0}))}async function p($){let x;try{x=await t.backend.fetch($)}catch(A){throw new Error(`Could not reach ${r}: ${A?.message??String(A)}`)}if(!x.ok)throw new Error(`Could not load ${r}: HTTP ${x.status} ${x.statusText}`);try{return await du(x)}catch(A){throw new Error(`Could not read response from ${r}: ${A?.message??String(A)}`)}}async function g($){const x=qo($);let A=await p(x);if(cu(A)){const L=uu(x);L&&(A=await p(L))}try{if(i==="json"){const L=JSON.parse(A);return{records:sb(L),nextUrl:ib(L,x)}}return{records:Un(A).rows,nextUrl:null}}catch(L){throw new Error(`Could not parse ${i.toUpperCase()} from ${r}: ${L?.message??String(L)}`)}}async function w(){if(!r)throw new Error("This reference table has no URL configured.");const $=[];let x=r;const A=new Set;for(;x&&$.length<rc&&!A.has(x);){A.add(x);const L=await g(x);$.push(...L.records),x=L.records.length>0?L.nextUrl:null}return $.slice(0,rc)}function y(){return u||(u=(async()=>{try{const $=await w();o=h($),l=!0;for(const x of s)x(o);return o}finally{u=null}})(),u)}return{async find($){const x=l?o:await y();return!$||Object.keys($).length===0?x:x.filter(A=>nb(A,$))},async findOne($){return(l?o:await y()).find(A=>A.id===$)??null},async insert(){throw new fn("insert")},async bulkInsert(){throw new fn("insert")},async upsert(){throw new fn("upsert")},async patch(){throw new fn("update")},async remove(){throw new fn("delete")},async bulkRemove(){throw new fn("delete")},subscribe($){return s.add($),l?$(o):y(),()=>{s.delete($)}},async refresh(){l=!1,o=[],await y()}}}const ob=Object.freeze(Object.defineProperty({__proto__:null,ReadOnlyReferenceError:fn,createUrlCollection:id,init:tb,meta:eb},Symbol.toStringTag,{value:"Module"}));function Fe(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),`"${t||"_"}"`}function ic(e){return`'${e.replace(/'/g,"''")}'`}function sc(e,t){const n=e.columns.find(r=>r.field===t);return n?n.from.kind==="script"?{expr:null,computed:!0}:{expr:`${Fe(n.from.alias)}.${Fe(n.from.field)}`,computed:!1}:null}function ab(e,t){const n=e.sources[0];if(!n)return`-- projection has no source table; nothing to select.
`;const r=t.limitStyle??"limit",i=e.limit!=null&&e.limit>0?Math.floor(e.limit):null,s=[];for(const y of e.columns)y.from.kind==="source"?s.push(`  ${Fe(y.from.alias)}.${Fe(y.from.field)} AS ${Fe(y.field)}`):s.push(`  NULL AS ${Fe(y.field)} -- computed in-app by a script; no SQL equivalent`);s.length===0&&s.push("  *");const l=[`SELECT${i!=null&&r==="top"?` TOP ${i}`:""}`,s.join(`,
`)],u=t.tableNames[n.alias]??n.tableName;l.push(`FROM ${Fe(u)} AS ${Fe(n.alias)}`);for(const y of e.sources.slice(1)){const $=t.tableNames[y.alias]??y.tableName;if(!y.join){l.push(`CROSS JOIN ${Fe($)} AS ${Fe(y.alias)}`);continue}const x=y.join.type==="inner"?"INNER JOIN":"LEFT JOIN",A=y.join.on.map(L=>`${Fe(y.alias)}.${Fe(L.field)} = ${Fe(L.eqAlias)}.${Fe(L.eqField)}`).join(" AND ");l.push(`${x} ${Fe($)} AS ${Fe(y.alias)} ON ${A||"1 = 1"}`)}const h=[],p=[];for(const[y,$]of Object.entries(e.filters??{})){if(!$)continue;const x=sc(e,y);if(x){if(x.computed){p.push(`-- filter on ${Fe(y)} (${ic($)}) applies to a computed column; enforced in-app only`);continue}h.push(`LOWER(${x.expr}) LIKE ${ic(`%${$.toLowerCase()}%`)}`)}}h.length>0&&l.push(`WHERE ${h.join(`
  AND `)}`);const g=(t.orderBy??[]).map(y=>{const $=sc(e,y.field);return!$||$.computed?null:`${$.expr} ${y.asc?"ASC":"DESC"}`}).filter(y=>y!==null);g.length>0&&l.push(`ORDER BY ${g.join(", ")}`);const w=i==null?"":r==="limit"?`
LIMIT ${i}`:r==="fetch"?`
FETCH FIRST ${i} ROWS ONLY`:"";return`${l.join(`
`)}${w};
${p.length>0?`${p.join(`
`)}
`:""}`}const lb={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function cb(){}async function sd(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const n=(await e.store.tables.find()).filter(l=>l.workspaceId===t),r=n.filter(l=>l.source?.type!=="projection"),i=n.filter(l=>l.source?.type==="projection"),s=ub(n),o=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}${i.length>0?` (+ ${i.length} projection${i.length===1?"":"s"})`:""}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const l of r){const u=await e.store.rows(l.id).find();o.push(ld(l,u),"")}if(o.push("COMMIT;",""),i.length>0){o.push("","-- Projections (virtual tables). Each is the query behind one, reading the","-- tables above. Run them as-is, or wrap one in CREATE VIEW to keep it.","");for(const l of i)o.push(`-- projection: ${l.name}`,ba(l,s)??"","")}return o.join(`
`)}function ub(e){const t=new Map;for(const n of e)t.has(n.name)||t.set(n.name,jn(n.code||n.name));return n=>t.get(n)??jn(De(n))}function od(e,t){const n=ad(e);return n||["-- easyDBAccess table export",`-- table:    ${e.name}`,`-- exported: ${new Date().toISOString()}`,"","BEGIN;","",ld(e,t),"","COMMIT;",""].join(`
`)}function ad(e,t){const n=ba(e,t);return n===null?null:["-- easyDBAccess projection export",`-- projection: ${e.name}`,`-- exported:   ${new Date().toISOString()}`,"--","-- A projection is a derived (virtual) table: this is the query behind it,","-- reading the source tables by name.","-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';","-- before executing. For SQL Server / HANA, replace the trailing LIMIT n","-- with SELECT TOP n.","",n].join(`
`)}function ba(e,t){if(e.source?.type!=="projection")return null;const n=e.source.config;if(!n||!Array.isArray(n.sources))return null;const r=t??(o=>jn(De(o))),i={};for(const o of n.sources)i[o.alias]=r(o.tableName);const s=n.sources.length>0&&e.sortBy&&e.sortBy.length>0?e.sortBy:e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc??!0}]:void 0;return ab(n,{tableNames:i,limitStyle:"limit",...s?{orderBy:s}:{}})}function ld(e,t){const n=jn(e.code||e.name||`table_${e.id}`),r=['  "__id" TEXT PRIMARY KEY',...e.columns.map(s=>`  ${db(s)}`)],i=[`DROP TABLE IF EXISTS "${n}";`,`CREATE TABLE "${n}" (`,r.join(`,
`),");"];if(t.length>0){const o=["__id",...e.columns.map(l=>l.field)].map(l=>`"${jn(l)}"`).join(", ");for(const l of t){const u=[oc(l.id),...e.columns.map(h=>oc(l.data[h.field],h.type))];i.push(`INSERT INTO "${n}" (${o}) VALUES (${u.join(", ")});`)}}return i.join(`
`)}function db(e){const t=[`"${jn(e.field)}"`,hb(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function hb(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function oc(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const n=fb(e);return n===null?"NULL":gi(n)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?gi(e.toISOString()):gi(typeof e=="string"?e:JSON.stringify(e))}function fb(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?ac(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const n=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(n)return`${n[1]}${n[2]}${n[3]}`;const r=new Date(t);return Number.isFinite(r.getTime())?ac(r):null}return null}function ac(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),n=String(e.getUTCMonth()+1).padStart(2,"0"),r=String(e.getUTCDate()).padStart(2,"0");return`${t}${n}${r}`}function gi(e){return`'${e.replace(/'/g,"''")}'`}function jn(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const pb=Object.freeze(Object.defineProperty({__proto__:null,init:cb,meta:lb,projectionSelectBody:ba,projectionSelectFor:ad,serializeTableAsSql:od,serializeWorkspaceAsSql:sd},Symbol.toStringTag,{value:"Module"})),cd=/\$((?:input|filter)[.:])?([A-Za-z_][A-Za-z0-9_]*)/g;function lc(...e){const t=new Set;for(const n of e)if(n)for(const r of n.matchAll(cd))t.add(r[2]);return[...t]}const wa=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Rn=e=>wa(e).replace(/"/g,"&quot;").replace(/'/g,"&#39;");function mb(e){return typeof e=="boolean"?e:typeof e=="number"?e!==0:typeof e=="string"?["true","1","yes","y","t","on"].includes(e.trim().toLowerCase()):!1}function gb(e,t,n,r,i){const s=r?.type??"string",o=wa(r?.label||e),l=`class="eda-input" data-eda-row="${Rn(n)}" data-eda-field="${Rn(e)}" data-eda-type="${Rn(s)}"`,u=i?" disabled":"";let h;if(s==="boolean")h=`<input type="checkbox" ${l}${mb(t)?" checked":""}${u} />`;else{const p=s==="number"?"number":"text",g=t==null?"":Rn(String(t));h=`<input type="${p}" ${l} value="${g}"${u} />`}return`<label class="eda-input-field" title="${o}">${h}<span class="eda-input-label">${o}</span></label>`}function bb(e,t){if(t==null||t==="")return"";const n=String(t),r=Rn(e),i=Rn(n);return`<button type="button" class="eda-filter-pill" data-eda-filter-field="${r}" data-eda-filter-value="${i}" title="Filter by ${r}: ${i}">${wa(n)}</button>`}function wb(e,t,n,r={}){return e.replace(cd,(i,s,o)=>{const l=n[o];if(!l)return"";const u=t.data[l];if(!s)return u==null?"":String(u);if(s.startsWith("filter"))return bb(l,u);const h=r.columns?.get(l),p=r.readonly===!0||!!h?.script?.trim();return gb(l,u,t.id,h,p)})}function cc(e){return e==null||e===""}function yb(e,t){let n=null;for(const r of t){if(!r.script?.trim())continue;const i=Zo(r.script,e.data);n??={...e.data},n[r.field]=i.ok?i.value:`⚠ ${i.label}`}return n?{...e,data:n}:e}function vb(e,t){return t.some(n=>n.script?.trim())?e.map(n=>yb(n,t)):e}function uc(e,t){const n=Object.entries(t).filter(([,r])=>r!=null&&String(r).trim()!=="");return n.length===0?e:e.filter(r=>n.every(([i,s])=>Ai(r.data[i],s)))}function ud(e,t){return e.exact===!0&&!e.negate&&e.term.toLowerCase()===t.toLowerCase()}function $b(e,t){const n=Dr(e??"");return n.some(r=>ud(r,t))||n.push({term:t,negate:!1,exact:!0}),_r(n)}function xb(e,t){const n=Dr(e??"").filter(r=>!ud(r,t));return _r(n)}function kb(e,t,n=!0){if(!t)return e;const r=n?1:-1;return[...e].sort((i,s)=>{const o=i.data[t],l=s.data[t],u=cc(o),h=cc(l);if(u||h)return u===h?0:u?1:-1;const p=Number(o),g=Number(l);return!Number.isNaN(p)&&!Number.isNaN(g)?(p-g)*r:String(o).localeCompare(String(l),void 0,{numeric:!0,sensitivity:"base"})*r})}function dd(e,t){const n=uc(e,t.filters??{}),r=uc(n,t.pillFilters??{});return kb(r,t.sortColumn,t.sortAsc??!0)}function Cb(e){return!!e&&e.trim().length>0}function hd(e,t){return t==="raw"||t==="structure"?e.columns:e.columns.filter(n=>n.hidden!==!0)}function _b(e,t){return t==="raw"||t==="structure"?e:{...e,columns:hd(e,t)}}function fd(e,t,n){return n==="structure"?[]:n==="raw"?t:dd(t,{filters:e.filters??{},sortColumn:e.sortColumn,sortAsc:e.sortAsc})}function ya(e,t){const n=e.columns.map(i=>i.field),r=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:r?[]:t.map(i=>{const s={};for(const o of n)s[o]=i.data[o];return s})}}const Sb={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file, and — per table — CSV/JSON/SQL with a Raw vs. Visible vs. Structure Only choice.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function Eb(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,n)=>{const r=t.workspaceId();if(!r)return;const{AnchoredMenu:i}=await ut(async()=>{const{AnchoredMenu:l}=await Promise.resolve().then(()=>Cr);return{AnchoredMenu:l}},void 0),s=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(s,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(o)try{if(o==="json"){const l=await ts(t);await t.backend.saveFile(`workspace-${r}.db.json`,l,"application/json")}else if(o==="sql"){const l=await sd(t);await t.backend.saveFile(`workspace-${r}.sql`,l,"application/sql")}}catch(l){t.ui.dialogs.toast(`Export failed: ${l.message}`,{kind:"error",title:"Export"})}}}),e.ui.registerTableButton({id:"table-export:menu",label:"Export",icon:"file_download",tooltip:"Export this table as CSV, JSON, or SQL",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ut(async()=>{const{AnchoredMenu:h}=await Promise.resolve().then(()=>Cr);return{AnchoredMenu:h}},void 0),i=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"csv",label:"CSV (.csv)",icon:"table_chart"},{id:"json",label:"JSON (.table.json)",icon:"data_object"},{id:"sql",label:"SQL (.sql)",icon:"storage"}]);if(!s)return;const o=await t.store.tables.findOne(n.tableId);if(!o)return;const l=await t.ui.dialogs.choice(`Export "${o.name}" as ${s.toUpperCase()} — which rows/columns?`,["Visible Data","Raw Data","Structure Only"],"Export table");if(!l)return;const u=l==="Visible Data"?"visible":l==="Raw Data"?"raw":"structure";try{const h=await t.store.rows(o.id).find(),p=_b(o,u),g=fd(o,h,u),w=De(o.code||o.name||"table"),y=u!=="structure"&&o.source!=null&&h.length===0;if(s==="csv")y&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting column definitions only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${w}.csv`,Go(p,g),"text/csv");else if(s==="json"){const $=JSON.stringify(ya(p,g),null,2);await t.backend.saveFile(`${w}.table.json`,$,"application/json")}else s==="sql"&&(y&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting the CREATE TABLE only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${w}.sql`,od(p,g),"application/sql"))}catch(h){t.ui.dialogs.toast(`Export failed: ${h.message}`,{kind:"error",title:"Export"})}}})}async function ts(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const n=(await e.store.tables.find()).filter(o=>o.workspaceId===t),r=(await e.store.viewTemplates.find()).filter(o=>o.workspaceId===t),i=(await e.store.viewInstances.find()).filter(o=>o.workspaceId===t),s={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:r,viewInstances:i};for(const o of n){const l=await e.store.rows(o.id).find();s.tables.push({name:o.name,columns:o.columns,rows:l.map(u=>u.data),...o.title?{title:o.title}:{},...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},...o.filters?{filters:o.filters}:{},...o.labelColumn?{labelColumn:o.labelColumn}:{},...o.info?{info:o.info}:{},...o.deletedColumns?{deletedColumns:o.deletedColumns}:{},...o.readonly?{readonly:!0}:{},...o.source?{source:o.source}:{},...o.origin?{origin:o.origin}:{}})}return JSON.stringify(s,null,2)}const Tb=Object.freeze(Object.defineProperty({__proto__:null,init:Eb,meta:Sb,serializeWorkspace:ts},Symbol.toStringTag,{value:"Module"})),Ib={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},Ab="gist:",dc='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function Rb(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).',help:'A classic token with the single "gist" scope is enough — nothing else is needed and nothing else should be granted. Give it an expiry you are happy with; the sync stops working when it lapses and you paste a new one here. Keep the value in the secrets store (General tab) and reference it, so it is never written into a synced setting.',helpUrl:"https://github.com/settings/tokens/new?scopes=gist&description=easyDBAccess",helpLinkLabel:"Create a token on GitHub"}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:dc,tooltip:"Gist sync — push, pull, share…",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ut(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>Cr);return{AnchoredMenu:o}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(s)try{if(s==="push"||s==="pull"){const o=await r.open(i,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!o)return;const l=o;s==="push"?await jb(t,l):await md(t,l)}else s==="share"?await Lb(t):s==="view"&&await Mb(t)}catch(o){t.ui.dialogs.toast(`Gist ${s} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:dc,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ut(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>Cr);return{AnchoredMenu:o}},void 0),i=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(s)try{s==="push"?await Nb(t,n.tableId):s==="pull"?await zb(t,n.tableId):s==="view"&&await Ub(t,n.tableId)}catch(o){t.ui.dialogs.toast(`Gist ${s} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}})}async function Ob(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let n;try{n=atob(t)}catch{return}const r=Db(n);if(!r){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${r.gistId||"(new)"} (owner: ${r.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await va(e,r),await md(e))}async function pd(e){const t=e.workspaceId();return`${Ab}${t??"default"}`}async function Mr(e){const[t,n,r]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&r)return{user:t,gistId:n??"",token:r};const s=(await e.store.settings.findOne(await pd(e)))?.value;if(s?.user&&s?.token){const o={user:s.user,gistId:s.gistId??"",token:s.token};return await va(e,o),o}return null}async function va(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({name:await pd(e),value:t})}function Db(e){const t={};for(const n of e.split(";")){const r=n.indexOf("=");if(r<0)continue;const i=n.slice(0,r).trim(),s=n.slice(r+1).trim();i&&(t[i]=s)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function $a(e){const t=await Mr(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function Pb(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function Lb(e){const t=await Mr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const r=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(Pb(t)))}`,{GistShareDialog:i}=await ut(async()=>{const{GistShareDialog:s}=await import("./gist-share-dialog-CeHQd8JQ.js");return{GistShareDialog:s}},[]);await i.open(r)}async function Mb(e){const t=await Mr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}async function jb(e,t="all"){const n=await $a(e);if(!n)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=t!=="settings",s=t!=="data",o=(await e.store.tables.find()).filter(x=>x.workspaceId===r);if(i&&o.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const l=1e8,u=1e7,h={},p=[],g=[];if(i)for(const x of o){const A=x.source!=null?[]:await e.store.rows(x.id).find(),L=JSON.stringify(ya(x,A),null,2),M=`${x.name} (${(L.length/1e6).toFixed(2)} MB)`;L.length>l?p.push(M):L.length>u&&g.push(M),h[`${De(x.name)}.table.json`]={content:L}}if(p.length>0||g.length>0){const x=[];if(p.length>0&&x.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${p.join(`
`)}`),g.length>0&&x.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${g.join(`
`)}`),!await e.ui.dialogs.confirm(`${x.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(s){const x=(await e.store.viewTemplates.find()).filter(M=>M.workspaceId===r),A=(await e.store.viewInstances.find()).filter(M=>M.workspaceId===r),L=(await e.store.settings.find()).map(M=>({name:M.name,value:M.value}));h["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:x,viewInstances:A,settings:L},null,2)}}let w;if(n.gistId){const x=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:h,description:`easyDBAccess workspace: ${r}`})});if(!x.ok)throw new Error(await Sr(x));w=await x.json()}else{const x=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:h})});if(!x.ok)throw new Error(await Sr(x));w=await x.json(),n.gistId=w.id,await va(e,n)}const y=w.html_url??`https://gist.github.com/${n.user}/${w.id}`,$=t==="settings"?"settings":t==="data"?`${o.length} table${o.length===1?"":"s"} (data only)`:`${o.length} table${o.length===1?"":"s"}`;e.ui.dialogs.toast(`Pushed ${$}.  ${y}`,{kind:"success",title:"Gist sync"})}async function md(e,t="all"){const n=t!=="settings",r=t!=="data",i=await $a(e);if(!i||!i.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const s=e.workspaceId();if(!s)throw new Error("no active workspace");const o=await fetch(`https://api.github.com/gists/${i.gistId}`,{headers:{Authorization:`Bearer ${i.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await Sr(o));const l=await o.json(),u=Object.entries(l.files).filter(([M])=>M.endsWith(".table.json")&&!M.startsWith("_easydb"));if(n&&u.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const h=(await e.store.tables.find()).filter(M=>M.workspaceId===s),p=new Map(h.map(M=>[M.name.toLowerCase(),M]));let g=0;const w=[],y=new Map;if(n){const{TopProgress:M}=await ut(async()=>{const{TopProgress:K}=await import("./top-progress-DwXty6jW.js");return{TopProgress:K}},[]),F=M.begin("Pulling from gist…");try{for(const[K,[W,ie]]of u.entries())try{const q=await Pi(ie),V=JSON.parse(q);if(!V.name||!Array.isArray(V.columns))throw new Error("unexpected file shape (missing name/columns)");let ae;const ee=p.get(V.name.toLowerCase());if(ee){if(ae=await e.store.tables.patch(ee.id,{title:V.title,columns:V.columns,...$o(V),updatedAt:Date.now()}),ae.source==null){const ce=e.store.rows(ee.id),N=await ce.find();await ce.bulkRemove(N.map(Q=>Q.id))}}else ae=await e.store.tables.insert({id:xe(),workspaceId:s,name:V.name,title:V.title,code:De(V.name),columns:V.columns,view:V.view??"table",...$o(V),updatedAt:Date.now()});if(ae.source==null){const ce=(V.rows??[]).map(N=>({id:xe(),tableId:ae.id,data:N,updatedAt:Date.now()}));await e.store.rows(ae.id).bulkInsert(ce)}y.set(V.name,ae.id),g++}catch(q){w.push({file:W,error:q.message})}finally{F.fraction((K+1)/u.length)}}finally{F.done()}}let $=0,x="",A=null;const L=r?l.files["_easydb.workspace.json"]:void 0;if(L)try{const M=await Pi(L),F=JSON.parse(M),K=F.viewTemplates??[],W=F.viewInstances??[],ie=F.settings??[];A=new Set(W.map(V=>V.id));const q=await $u(e.store.viewTemplates,s,K);for(const V of W){let ae;if(V.tableName&&(ae=y.get(V.tableName)??p.get(V.tableName)?.id),ae??=V.tableId,!ae)continue;const ee=q.get(V.templateId)??V.templateId;await e.store.viewInstances.upsert({...V,workspaceId:s,tableId:ae,templateId:ee}),$++}for(const V of ie)await e.store.settings.upsert(V)}catch(M){x=`Workspace metadata import failed: ${M.message}`}if(w.length>0){const M=w.map(F=>`• ${F.file}: ${F.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${g} of ${u.length} tables. ${w.length} failed:
${M}${x?`
${x}`:""}`,{kind:"warning",title:"Gist sync"})}else{const M=$>0?` (+${$} views)`:"",F=t==="settings"?`Pulled settings${M}.`:`Pulled ${g} table${g===1?"":"s"}.${M}`;e.ui.dialogs.toast(F,{kind:"success",title:"Gist sync"}),x&&e.ui.dialogs.toast(x,{kind:"warning",title:"Gist sync"})}w.length===0&&await gd(e,s,{tableNames:n?new Set([...y.keys()].map(M=>M.toLowerCase())):null,viewInstanceIds:A}),document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}function hc(e,t=8){const n=e.slice(0,t).map(i=>`• ${i}`),r=e.length-n.length;return[...n,...r>0?[`• …and ${r} more`]:[]].join(`
`)}async function gd(e,t,n){const r=n.tableNames?(await e.store.tables.find()).filter(u=>u.workspaceId===t&&!n.tableNames.has(u.name.toLowerCase())):[],i=n.viewInstanceIds?(await e.store.viewInstances.find()).filter(u=>u.workspaceId===t&&!n.viewInstanceIds.has(u.id)):[];if(r.length===0&&i.length===0)return;const s=[];if(r.length>0&&s.push(`${r.length} table${r.length===1?"":"s"}:
`+hc(r.map(u=>u.name))),i.length>0&&s.push(`${i.length} view${i.length===1?"":"s"}:
`+hc(i.map(u=>u.name))),!await e.ui.dialogs.confirm(`The gist does not have these local objects:

${s.join(`

`)}

Delete them, so this workspace matches the gist? A table goes with its rows. Keep them if this is local work you have not pushed yet.`,"Delete objects missing from the pull?"))return;for(const u of i)await e.store.viewInstances.remove(u.id);const{deleteTable:l}=await ut(async()=>{const{deleteTable:u}=await Promise.resolve().then(()=>ry);return{deleteTable:u}},void 0);for(const u of r)await l(u.id);e.ui.dialogs.toast(`Deleted ${r.length} table${r.length===1?"":"s"} and ${i.length} view${i.length===1?"":"s"}.`,{kind:"success",title:"Gist sync"})}async function Nb(e,t){const n=await $a(e);if(!n)return;if(!n.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=r.source!=null?[]:await e.store.rows(t).find(),s=JSON.stringify(ya(r,i),null,2),o={[`${De(r.name)}.table.json`]:{content:s}},l=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:o})});if(!l.ok)throw new Error(await Sr(l));e.ui.dialogs.toast(`Pushed "${r.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function zb(e,t){const n=await Mr(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=`${De(r.name)}.table.json`,s=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!s.ok)throw new Error(await Sr(s));const l=(await s.json()).files[i];if(!l){await e.ui.dialogs.alert(`No file "${i}" in the gist for this table.`,"Gist sync");return}const u=await Pi(l),h=JSON.parse(u);if(!h.name||!Array.isArray(h.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:h.title,columns:h.columns,...$o(h),updatedAt:Date.now()})).source==null){const g=e.store.rows(t),w=await g.find();await g.bulkRemove(w.map($=>$.id));const y=(h.rows??[]).map($=>({id:xe(),tableId:t,data:$,updatedAt:Date.now()}));await g.bulkInsert(y)}e.ui.dialogs.toast(`Pulled "${r.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function Ub(e,t){const n=await Mr(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=`file-${De(r.name)}-table-json`;window.open(`https://gist.github.com/${n.user}/${n.gistId}#${i}`,"_blank","noopener")}function $o(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function Pi(e,t=n=>fetch(n)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const n=await t(e.raw_url);if(!n.ok)throw new Error(`raw fetch failed: ${n.status} ${n.statusText}`);return n.text()}async function Sr(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Fb=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:Pi,init:Rb,load:Ob,meta:Ib,offerPrune:gd},Symbol.toStringTag,{value:"Module"})),bd="server-sync:url";function wd(e){return`server-sync:etag:${e}`}async function yd(e){const n=(await e.store.settings.findOne(bd))?.value;return typeof n!="string"||n.length===0?null:n.replace(/\/+$/,"")}async function Bb(e,t){await e.store.settings.upsert({name:bd,value:t.replace(/\/+$/,"")})}async function vd(e,t){const r=(await e.store.settings.findOne(wd(t)))?.value;return typeof r=="string"?r:null}async function yn(e,t,n){await e.store.settings.upsert({name:wd(t),value:n})}function ns(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function fc(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function $d(e,t,n){const r=Wi(n,t),i=(await e.store.tables.find()).filter(o=>o.workspaceId===t);for(const o of i){const l=e.store.rows(o.id),u=await l.find();await l.bulkRemove(u.map(h=>h.id)),await e.store.tables.remove(o.id)}let s=0;for(const o of r){const l=xe(),u=await e.store.tables.insert({id:l,workspaceId:t,name:o.name,code:De(o.name),columns:o.columns,view:"table",...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},updatedAt:Date.now()}),h=o.rows.map(p=>({id:xe(),tableId:u.id,data:p,updatedAt:Date.now()}));await e.store.rows(u.id).bulkInsert(h),s++}return s}const qb={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function Hb(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ut(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>Cr);return{AnchoredMenu:o}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(s)try{s==="push"?await Kb(t):s==="pull"&&await Vb(t)}catch(o){t.ui.dialogs.toast(`${s==="push"?"Push":"Pull"} failed: ${o.message}`,{kind:"error",title:"Server sync"})}}})}async function Kb(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await xd(e);if(!n)return;const r=await ts(e),i=await vd(e,t),s={"Content-Type":"application/json"};i&&(s["If-Match"]=`"${i}"`);let o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:s,body:r});if(o.status===412){const u=await o.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){u.currentEtag&&await yn(e,t,u.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:r})}if(!o.ok)throw new Error(await kd(o));const l=ns(o.headers.get("ETag"));l&&await yn(e,t,l),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${n}.`,{kind:"success",title:"Server sync"})}async function Vb(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await xd(e);if(!n||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const i=await fetch(`${n}/sync/${encodeURIComponent(t)}`);if(i.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!i.ok)throw new Error(await kd(i));const s=ns(i.headers.get("ETag")),o=await i.json(),l=await $d(e,t,o);s&&await yn(e,t,s),e.ui.dialogs.toast(`Pulled ${l} table${l===1?"":"s"} from ${n}.`,{kind:"success",title:"Server sync"})}async function xd(e){const t=await yd(e);if(t)return t;const n=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!n)return null;try{new URL(n)}catch{return await e.ui.dialogs.alert(`"${n}" is not a valid URL.`,"Server sync"),null}return await Bb(e,n),n.replace(/\/+$/,"")}async function kd(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Wb=Object.freeze(Object.defineProperty({__proto__:null,init:Hb,meta:qb},Symbol.toStringTag,{value:"Module"})),Gb={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function Yb(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const Qb=Object.freeze(Object.defineProperty({__proto__:null,init:Yb,meta:Gb},Symbol.toStringTag,{value:"Module"}));function rs(e,t="Edit"){const n=document.createElement("button");return n.type="button",n.title=t,n.textContent="✎",n.className="cell-pencil",n.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",n.addEventListener("mouseenter",()=>n.style.color="#374151"),n.addEventListener("mouseleave",()=>n.style.color="#9ca3af"),n.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),e()}),n}function is(e,t){const n=document.createElement("span");return n.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%",e.style.flex="1 1 auto",e.style.minWidth="0",e.style.overflow="hidden",n.append(e,t),n}function ss(e){const t=document.createElement("input");t.type="text",t.value=e.value,t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0;text-overflow:ellipsis";const n=()=>{e.isLive(t)&&e.onCommit(t.value)};return t.addEventListener("keydown",r=>{r.key==="Enter"?(r.preventDefault(),n()):r.key==="Escape"&&(r.preventDefault(),e.onCancel())}),t.addEventListener("blur",n),setTimeout(()=>{t.focus(),t.select()},0),t}const Xb={id:"cell-date",name:"Cell Date",type:"cell-renderer",version:"0.1.0",description:"Renderer for date columns: a native `<input type=date>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"date\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-date.ts"};function Jb(e){customElements.get("cell-date")||customElements.define("cell-date",Zb),e.ui.registerCellRenderer("date","cell-date")}class Zb extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=ss({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(ew(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",la(n,`Not a valid date: "${String(this._value)}"`),this.append(this._readonly?n:is(n,this.pencil()));return}if(this._readonly){this.textContent=xo(this._value);return}const t=document.createElement("input");t.type="date",t.value=xo(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return rs(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function xo(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function ew(e){return e==null||typeof e=="string"&&e.trim()===""?!1:xo(e)===""}const tw=Object.freeze(Object.defineProperty({__proto__:null,init:Jb,meta:Xb},Symbol.toStringTag,{value:"Module"})),nw={id:"cell-datetime",name:"Cell Datetime",type:"cell-renderer",version:"0.1.0",description:"Renderer for datetime columns: a native `<input type=datetime-local>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"datetime\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-datetime.ts"};function rw(e){customElements.get("cell-datetime")||customElements.define("cell-datetime",iw),e.ui.registerCellRenderer("datetime","cell-datetime")}class iw extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=ss({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(sw(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",la(n,`Not a valid datetime: "${String(this._value)}"`),this.append(this._readonly?n:is(n,this.pencil()));return}if(this._readonly){this.textContent=ko(this._value).replace("T"," ");return}const t=document.createElement("input");t.type="datetime-local",t.value=ko(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return rs(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function ko(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const i=r.toISOString();return`${i.slice(0,10)}T${i.slice(11,16)}`}function sw(e){return e==null||typeof e=="string"&&e.trim()===""?!1:ko(e)===""}const ow=Object.freeze(Object.defineProperty({__proto__:null,init:rw,meta:nw},Symbol.toStringTag,{value:"Module"})),aw={id:"cell-boolean",name:"Cell Boolean",type:"cell-renderer",version:"0.1.0",description:`Renderer for boolean columns: a checkbox for true/false, a grayed-out unchecked box for an empty cell (clickable to set true), and red-bordered raw text with a pencil for a stored value that is none of those. Apply by setting a column's renderer to "boolean".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="8 12 11 15 16 9"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-boolean.ts"};function lw(e){customElements.get("cell-boolean")||customElements.define("cell-boolean",cw),e.ui.registerCellRenderer("boolean","cell-boolean")}class cw extends HTMLElement{constructor(){super(...arguments),this._value=!1,this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const i=ss({value:this._value==null?"":String(this._value),onCommit:s=>this.commit(s),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:s=>this._editor===s});this.append(i),this._editor=i;return}const t=Fu(this._value);if(t==="invalid"){const i=document.createElement("span");i.textContent=String(this._value),i.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",la(i,`Not a valid boolean: "${String(this._value)}"`),this.append(this._readonly?i:is(i,this.pencil()));return}const n=document.createElement("input");n.type="checkbox",n.checked=t==="true";let r="transform:translateY(1px)";t==="empty"&&(r+=";opacity:0.45",n.title="Empty — no value stored. Click to set true."),this._readonly?n.disabled=!0:(r+=";cursor:pointer",n.addEventListener("change",()=>this.commit(n.checked))),n.style.cssText=r,this.append(n)}pencil(){return rs(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const uw=Object.freeze(Object.defineProperty({__proto__:null,init:lw,meta:aw},Symbol.toStringTag,{value:"Module"})),dw={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function hw(e){customElements.get("cell-color")||customElements.define("cell-color",fw),e.ui.registerCellRenderer("color","cell-color")}class fw extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,n,r){this.value=r}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const n=document.createElement("input");n.type="color",n.value=t,n.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",n.addEventListener("change",()=>this.commit(n.value)),this.append(n)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const pw=Object.freeze(Object.defineProperty({__proto__:null,init:hw,meta:dw},Symbol.toStringTag,{value:"Module"})),mw={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function gw(e){customElements.get("cell-image")||customElements.define("cell-image",bw),e.ui.registerCellRenderer("image","cell-image")}class bw extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t??"",this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this.style.display="block",this.style.minWidth="0",this.style.overflow="hidden",this._editing){const r=document.createElement("span");r.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const i=ss({value:this._value,onCommit:o=>this.commit(o),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:o=>this._editor===o}),s=document.createElement("button");s.type="button",s.textContent="upload",s.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",s.addEventListener("mousedown",o=>o.preventDefault()),s.addEventListener("click",()=>this.pickFile()),r.append(i,s),this.append(r),this._editor=i;return}const t=document.createElement("span");if(t.style.cssText="display:flex;align-items:center;gap:0.4rem;min-width:0",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const r=document.createElement("img");r.src=this._value,r.alt="",r.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(r)}else{const r=document.createElement("span");if(r.style.color="#9ca3af",r.textContent="no image",t.append(r),!this._readonly){const i=document.createElement("button");i.type="button",i.textContent="upload",i.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",i.addEventListener("click",()=>this.pickFile()),t.append(i)}}this.append(this._readonly?t:is(t,this.pencil()))}pencil(){return rs(()=>{this._editing=!0,this.render()},"Edit the image URL")}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const n=t.files?.[0];if(!n)return;const r=new FileReader;r.onload=()=>this.commit(String(r.result)),r.readAsDataURL(n)}),t.click()}commit(t){const n=t!==this._value;this._value=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const ww=Object.freeze(Object.defineProperty({__proto__:null,init:gw,meta:mw},Symbol.toStringTag,{value:"Module"})),Cd=200,_d=100;function yw(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<Cd||e.h<_d?null:{...e}}function Li(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const pc=640;function Mi(){return typeof window>"u"?!1:typeof window.matchMedia=="function"?window.matchMedia(`(max-width: ${pc}px)`).matches:window.innerWidth<=pc}function vw(e,t,n,r){const i=r>0?r:1;return{...e,x:e.x+t/i,y:e.y+n/i}}function $w(e,t,n,r,i,s,o){const l=i>0?i:1,u=n/l,h=r/l;let{x:p,y:g,w,h:y}=e;return t.includes("e")&&(w=Math.max(s,e.w+u)),t.includes("s")&&(y=Math.max(o,e.h+h)),t.includes("w")&&(w=Math.max(s,e.w-u),p=e.x+(e.w-w)),t.includes("n")&&(y=Math.max(o,e.h-h),g=e.y+(e.h-y)),{x:p,y:g,w,h:y}}function xw(e){return e?.minimized?{status:"minimized",restoreStatus:e.maximized?"maximized":"normalized"}:e?.maximized?{status:"maximized",restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}function mc(e,t){if(e.status==="closed")return e;switch(t){case"close":return{...e,status:"closed"};case"minimize":return e.status==="minimized"?e:{status:"minimized",restoreStatus:e.status==="maximized"?"maximized":"normalized"};case"maximize":return{status:"maximized",restoreStatus:"normalized"};case"smallify":return e.status!=="normalized"?e:{...e,status:"smallified"};case"normalize":return e.status==="minimized"?{status:e.restoreStatus,restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}}function kw(e){return{minimized:e.status==="minimized",maximized:e.status==="maximized"||e.status==="minimized"&&e.restoreStatus==="maximized"}}const Cw="input, textarea, select, button, a, .jsPanel-controlbar";function gc(e){for(const t of e.composedPath())if(t instanceof HTMLElement&&t.matches(Cw))return!0;return!1}const _w={smallify:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 15 12 9 18 15"/></svg>',minimize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="19" x2="19" y2="19"/></svg>',maximize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="14" height="14" rx="1"/></svg>',normalize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="4" width="12" height="12" rx="1"/><rect x="4" y="8" width="12" height="12" rx="1"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>'};let io=100;function bc(){let e=io;for(const t of document.querySelectorAll(".jsPanel")){const n=Number(t.style.zIndex);Number.isFinite(n)&&n>e&&(e=n)}return io=e+1,io}function Sw(e){const t=Number(e.style.zIndex);for(const n of document.querySelectorAll(".jsPanel"))if(n!==e&&Number(n.style.zIndex)>t)return!1;return!0}const Co=new Set;function Ew(){return[...Co].sort((e,t)=>Number(t.style.zIndex)-Number(e.style.zIndex))}function hn(e,t,n){const r=document.createElement("button");return r.type="button",r.className=`jsPanel-btn jsPanel-btn-${e}`,r.title=t,r.setAttribute("aria-label",t),r.innerHTML=_w[e]??"",r.addEventListener("click",i=>{i.stopPropagation(),n()}),r}function ji(e){const t=document.createElement("div");t.className="jsPanel",t.id=e.id,t.style.setProperty("--eda-panel-color",e.color??"#01579b");const n=document.createElement("div");n.className="jsPanel-hdr";const r=document.createElement("div");r.className="jsPanel-headerbar";const i=document.createElement("div");i.className="jsPanel-headerlogo",i.innerHTML=e.logo??"";const s=document.createElement("div");s.className="jsPanel-titlebar",s.tabIndex=-1,s.style.outline="none",s.addEventListener("pointerdown",()=>s.focus());const o=document.createElement("span");o.className="jsPanel-title",o.textContent=e.title,s.append(o);const l=document.createElement("div");l.className="jsPanel-controlbar",l.append(hn("smallify","Collapse",()=>ee("smallify")),hn("minimize","Minimize",()=>ee("minimize")),hn("maximize","Maximize",()=>t.maximize()),hn("normalize","Restore",()=>ee("normalize")),hn("close","Close",()=>t.close())),r.append(i,s,l),n.append(r);const u=document.createElement("div");u.className="jsPanel-content",u.append(e.content);const h=document.createElement("div");h.className="jsPanel-ftr",e.footerToolbar&&(h.classList.add("active"),h.append(e.footerToolbar)),t.append(n,u,h);for(const N of["n","s","e","w","ne","nw","se","sw"]){const Q=document.createElement("div");Q.className="eda-resize",Q.dataset.edge=N,t.append(Q)}if(t.style.zIndex=String(bc()),e.container.append(t),e.panelSize)t.style.width=`${e.panelSize.w}px`,t.style.height=`${e.panelSize.h}px`;else{const N=e.contentSize??{w:720,h:360};t.style.width=`${N.w}px`,t.style.height=`${N.h+n.offsetHeight+h.offsetHeight}px`}const p=e.position??"center",g=t.offsetWidth,w=e.container.clientWidth;p==="center"?(t.style.left=`${Math.max(0,(w-g)/2)}px`,t.style.top=`${Math.max(0,(e.container.clientHeight-t.offsetHeight)/2)}px`):"centerTopOffset"in p?(t.style.left=`${Math.max(0,(w-g)/2)}px`,t.style.top=`${p.centerTopOffset}px`):(t.style.left=`${p.x}px`,t.style.top=`${p.y}px`);let y=xw(e.boot),$=M(),x=null,A=null,L=null;function M(){return{x:t.offsetLeft,y:t.offsetTop,w:t.offsetWidth,h:t.offsetHeight}}function F(N){t.style.left=`${N.x}px`,t.style.top=`${N.y}px`,t.style.width=`${N.w}px`,t.style.height=`${N.h}px`}function K(){const N=e.viewport?.getState()??{x:0,y:0,scale:1};t.style.left="0px",t.style.top="0px",t.style.width=`${e.container.clientWidth}px`,t.style.height=`${e.container.clientHeight}px`,t.style.transformOrigin="0 0",t.style.transform=`translate(${-N.x/N.scale}px, ${-N.y/N.scale}px) scale(${1/N.scale})`}function W(){const N=e.viewport?.getState()??{x:0,y:0,scale:1},Q=N.scale||1;return{x:-N.x/Q,y:-N.y/Q,w:e.container.clientWidth/Q,h:e.container.clientHeight/Q}}function ie(){K(),A??=e.viewport?.subscribe(K)??null,!L&&typeof ResizeObserver<"u"&&(L=new ResizeObserver(K),L.observe(e.container))}function q(){A?.(),A=null,L?.disconnect(),L=null,t.style.transform="",t.style.transformOrigin=""}function V(){const N=document.createElement("div");N.className="jsPanel-replacement",N.id=`${e.id}-min`,N.style.setProperty("--eda-panel-color",e.color??"#01579b");const Q=document.createElement("div");Q.className="jsPanel-headerlogo",Q.innerHTML=i.innerHTML;const de=document.createElement("span");return de.className="jsPanel-title",de.textContent=o.textContent,N.append(Q,de,hn("normalize","Restore",()=>{ee("normalize"),t.front()}),hn("close","Close",()=>t.close())),N.addEventListener("click",Ee=>{Ee.target.closest("button")||(ee("normalize"),t.front())}),N}function ae(N){switch(N==="maximized"&&y.status!=="maximized"&&q(),N==="minimized"&&y.status!=="minimized"&&(x?.remove(),x=null,t.style.display=""),y.status){case"minimized":{N==="normalized"?$=M():N==="smallified"&&($={...$,x:t.offsetLeft,y:t.offsetTop}),t.style.display="none";const Q=e.minimizeTo?document.querySelector(e.minimizeTo):null;x=V(),(Q??e.container).append(x);break}case"maximized":N==="normalized"?$=M():N==="smallified"&&($={...$,x:t.offsetLeft,y:t.offsetTop}),ie();break;case"smallified":$=M(),t.style.height=`${n.offsetHeight}px`;break;case"normalized":N==="smallified"?$={...$,x:t.offsetLeft,y:t.offsetTop}:N==="maximized"&&Mi()&&($=W()),F($);break}t.dataset.status=y.status}function ee(N){const Q=y;y=mc(y,N),y.status!==Q.status&&(ae(Q.status),e.onstatuschange?.(t))}Object.defineProperty(t,"status",{get:()=>y.status}),t.minimize=()=>ee("minimize"),t.maximize=(N,Q)=>{ee("maximize"),Q!==!0&&t.front()},t.normalize=()=>ee("normalize"),t.smallify=()=>ee("smallify"),t.front=(N,Q)=>{t.style.zIndex=String(bc()),Q!==!1&&e.onfronted?.()},t.close=()=>{y.status!=="closed"&&(y=mc(y,"close"),x?.remove(),q(),Co.delete(t),t.remove(),e.onclosed?.())},t.setHeaderTitle=N=>{o.textContent=N;const Q=x?.querySelector(".jsPanel-title");Q&&(Q.textContent=N)},t.setHeaderLogo=N=>{i.innerHTML=N;const Q=x?.querySelector(".jsPanel-headerlogo");Q&&(Q.innerHTML=N)},t.centerInViewport=()=>{if(y.status!=="normalized"&&y.status!=="smallified")return;const N=W(),Q=t.offsetWidth,de=t.offsetHeight;F({x:N.x+Math.max(0,(N.w-Q)/2),y:N.y+Math.max(0,(N.h-de)/2),w:Q,h:de})},t.persistFlags=()=>kw(y),Co.add(t),t.addEventListener("pointerdown",()=>{Sw(t)||t.front()},!0);const ce=N=>{N.addEventListener("pointerdown",Q=>{if(Q.button!==0||gc(Q)||y.status==="maximized"||y.status==="minimized")return;const de=M(),Ee=e.viewport?.getState().scale??1,ze=Q.clientX,kt=Q.clientY;let fe=!1;const Ue=Ye=>{fe=!0;const be=vw(de,Ye.clientX-ze,Ye.clientY-kt,Ee);t.style.left=`${be.x}px`,t.style.top=`${be.y}px`},Ae=()=>{N.removeEventListener("pointermove",Ue),N.removeEventListener("pointerup",Ae),N.removeEventListener("pointercancel",Ae),fe&&e.onmoved?.()};N.setPointerCapture(Q.pointerId),N.addEventListener("pointermove",Ue),N.addEventListener("pointerup",Ae),N.addEventListener("pointercancel",Ae)})};ce(s),ce(i),ce(h);for(const N of t.querySelectorAll(".eda-resize"))N.addEventListener("pointerdown",Q=>{if(Q.button!==0||y.status!=="normalized")return;const de=N.dataset.edge,Ee=M(),ze=e.viewport?.getState().scale??1,kt=Q.clientX,fe=Q.clientY;let Ue=!1;const Ae=be=>{Ue=!0,F($w(Ee,de,be.clientX-kt,be.clientY-fe,ze,Cd,_d))},Ye=()=>{N.removeEventListener("pointermove",Ae),N.removeEventListener("pointerup",Ye),N.removeEventListener("pointercancel",Ye),Ue&&e.onresized?.()};N.setPointerCapture(Q.pointerId),N.addEventListener("pointermove",Ae),N.addEventListener("pointerup",Ye),N.addEventListener("pointercancel",Ye)});return n.addEventListener("dblclick",N=>{gc(N)||(y.status==="maximized"?ee("normalize"):t.maximize())}),y.status!=="normalized"?ae("normalized"):t.dataset.status="normalized",t}function xi(e){return e.source?e.source.type==="url"?"referenced":"connected":e.origin?"imported":"normal"}function wc(e){return!!(e.source||e.origin)}const gr='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" role="img"',yc={normal:`<svg ${gr} aria-label="Local table"><title>Local table</title><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,imported:`<svg ${gr} aria-label="Imported table (snapshot)"><title>Imported table (snapshot)</title><rect x="3" y="11" width="18" height="10" rx="1"/><line x1="7" y1="15" x2="7" y2="17"/><line x1="12" y1="15" x2="12" y2="17"/><line x1="17" y1="15" x2="17" y2="17"/><path d="M12 2v7"/><polyline points="8 6 12 9 16 6"/></svg>`,referenced:`<svg ${gr} aria-label="Referenced table (read-only)"><title>Referenced table (read-only)</title><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"/></svg>`,connected:`<svg ${gr} aria-label="Connected table (live)"><title>Connected table (live)</title><line x1="9" y1="2" x2="9" y2="7"/><line x1="15" y1="2" x2="15" y2="7"/><rect x="6" y="7" width="12" height="7" rx="2"/><path d="M9 14v3a3 3 0 0 0 6 0v-3"/></svg>`},Tw=`<svg ${gr} aria-label="View"><title>View</title><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;var Iw=Object.defineProperty,Aw=Object.getOwnPropertyDescriptor,os=(e,t,n,r)=>{for(var i=r>1?void 0:r?Aw(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Iw(t,n,i),i};function Rw(e,t,n){(Ct.instance??Dw()).show(e,t,n)}function Ow(e){if(!e)return null;const t=xi(e);if(t==="connected"||t==="referenced"){const n=e.source?.type??"remote",r=e.source?.writable?"Edits you make are written back to the source.":"It is read-only — edits are not saved back to the source.";return{label:`Connected (live ${n})`,note:`This table is connected to a live ${n} backend: its rows are fetched from the source on demand and are not stored locally. ${r} Closing its window just disconnects the view — the source data is untouched.`}}return t==="imported"?{label:"Imported (snapshot)",note:"This table is a local snapshot imported once from its origin. The rows live in this browser, so edits stay local; use Refresh to re-fetch the latest data from the origin.",...e.origin?{url:e.origin.url}:{}}:{label:"Local",note:"This table was created in the app and is stored locally in your browser."}}function Dw(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let Ct=class extends ve{constructor(){super(...arguments),this.name="",this.info=null,this.provenance=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),Ct.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ct.instance===this&&(Ct.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&gt(this.dialogEl,e)}show(e,t,n){this.name=e,this.info=t,this.provenance=n??null,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,n){if(!t&&!n)return re;const r=n?C`<a href=${n} target="_blank" rel="noopener noreferrer">${t||n}</a>`:C`${t}`;return C`<dt>${e}</dt>
      <dd>${r}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl),n=Ow(this.provenance);return C`
      <dialog @cancel=${this.close} @keydown=${mt}>
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
                      </div>`:re}
                </div>`:re}
            ${e?.descriptionHtml?C`<div class="desc">${On(e.descriptionHtml)}</div>`:e?.description?C`<div class="desc">${e.description}</div>`:re}
            ${t?C`<dl>
                  ${this.row("Source",e?.source,e?.sourceUrl)}
                  ${this.row("License",e?.license,e?.licenseUrl)}
                  ${this.row("About",e?.about,e?.aboutUrl)}
                </dl>`:re}
            ${!e?.description&&!e?.descriptionHtml&&!t&&!n?C`<p class="empty">No additional information.</p>`:re}
          </div>
        </form>
      </dialog>
    `}};Ct.instance=null;Ct.styles=[pt,ke`
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
    `];os([B()],Ct.prototype,"name",2);os([B()],Ct.prototype,"info",2);os([B()],Ct.prototype,"provenance",2);Ct=os([Se("table-info-dialog")],Ct);const Pw=.25,Lw=4;function Mw(e){return Math.min(Lw,Math.max(Pw,e))}function vc(e,t,n){return{x:e.x+t,y:e.y+n,scale:e.scale}}const hr={x:0,y:0,scale:1};function $c(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function jw(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function Nw(e,t){let n={...hr};t.style.transformOrigin="0 0";const r=new Set,i=()=>{t.style.transform=`translate(${n.x}px, ${n.y}px) scale(${n.scale})`;for(const N of r)N({...n})};let s="none",o={...hr},l=0,u=0,h=0,p=0,g=0,w=0;const y=(N,Q)=>{const de=e.getBoundingClientRect();return{x:N-de.left,y:Q-de.top}},$=N=>{if(N.touches.length===2){s="pinch",o={...n};const[Q,de]=[N.touches[0],N.touches[1]];h=$c(Q,de)||1;const Ee=y((Q.clientX+de.clientX)/2,(Q.clientY+de.clientY)/2);p=(Ee.x-n.x)/n.scale,g=(Ee.y-n.y)/n.scale,N.preventDefault();return}if(N.touches.length===1&&!jw(N.target)){const Q=N.timeStamp;if(Q-w<300){n={...hr},i(),w=0,s="none",N.preventDefault();return}w=Q,s="pan",o={...n},l=N.touches[0].clientX,u=N.touches[0].clientY}else s="none"},x=N=>{if(s==="pan"&&N.touches.length===1){const Q=N.touches[0];n=vc(o,Q.clientX-l,Q.clientY-u),i(),N.preventDefault()}else if(s==="pinch"&&N.touches.length>=2){const[Q,de]=[N.touches[0],N.touches[1]],Ee=Mw(o.scale*($c(Q,de)/h)),ze=y((Q.clientX+de.clientX)/2,(Q.clientY+de.clientY)/2);n={x:ze.x-p*Ee,y:ze.y-g*Ee,scale:Ee},i(),N.preventDefault()}},A=N=>{N.touches.length===0?s="none":N.touches.length===1&&s==="pinch"&&(s="pan",o={...n},l=N.touches[0].clientX,u=N.touches[0].clientY)};let L=!1,M={...hr},F=0,K=0,W=!1;const ie=(N,Q)=>{const de=e.getBoundingClientRect();return N>=de.left&&N<=de.right&&Q>=de.top&&Q<=de.bottom},q=N=>{if(!L)return;const Q=N.clientX-F,de=N.clientY-K;!W&&Math.hypot(Q,de)<4||(W=!0,document.body.style.cursor="grabbing",n=vc(M,Q,de),i(),N.preventDefault())},V=()=>{L&&(L=!1,document.body.style.cursor="",window.removeEventListener("mousemove",q,!0),window.removeEventListener("mouseup",ae,!0))};function ae(){V()}const ee=N=>{N.button===2&&ie(N.clientX,N.clientY)&&(L=!0,W=!1,M={...n},F=N.clientX,K=N.clientY,window.addEventListener("mousemove",q,!0),window.addEventListener("mouseup",ae,!0))},ce=N=>{W&&(N.preventDefault(),W=!1)};return e.addEventListener("touchstart",$,{passive:!1}),e.addEventListener("touchmove",x,{passive:!1}),e.addEventListener("touchend",A),e.addEventListener("touchcancel",A),window.addEventListener("mousedown",ee,!0),window.addEventListener("contextmenu",ce,!0),{snapshot:()=>({...n}),reset:()=>{n={...hr},i()},restore:N=>{n={...N},i()},subscribe:N=>(r.add(N),()=>r.delete(N)),dispose:()=>{e.removeEventListener("touchstart",$),e.removeEventListener("touchmove",x),e.removeEventListener("touchend",A),e.removeEventListener("touchcancel",A),window.removeEventListener("mousedown",ee,!0),window.removeEventListener("contextmenu",ce,!0),V()}}}const bi=new Map;function as(e,t){const r=(bi.get(e)??Promise.resolve()).then(t,t);return bi.set(e,r),r.finally(()=>{bi.get(e)===r&&bi.delete(e)}),r}let so=0;function Sd(){return so=Math.max(Date.now(),so+1),so}const ls=new Map;function Ed(e,t){ls.set(e,t)}function cs(e){ls.delete(e)}function zw(e){return ls.has(e)}function Uw(e){try{ls.get(e)?.()}catch{}}const Nn=(()=>{const e=new URLSearchParams(location.search).get("minimize");return e===null?!1:!/^(0|false|no)$/i.test(e)})();function Fw(e){return e.filter(t=>!t.minimized).slice().sort((t,n)=>(t.z??-1/0)-(n.z??-1/0)).map(t=>t.id)}let xc=!1;async function Bw(){xc||(xc=!0,document.addEventListener("easydb:restack-windows",()=>void kc())),await kc()}async function kc(){if(Nn)return;const e=await oe();for(let t=0;t<=12;t++){const[n,r]=await Promise.all([e.store.tables.find(),e.store.viewInstances.find()]),i=[...n.filter(o=>o.workspaceId===e.workspaceId&&!o.windowGeometry?.closed).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0})),...r.filter(o=>o.workspaceId===e.workspaceId&&o.open).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0}))],s=Fw(i);if(t<12&&!s.every(o=>zw(o))){await new Promise(o=>setTimeout(o,80));continue}for(const o of s)Uw(o);return}}var qw=Object.defineProperty,Hw=Object.getOwnPropertyDescriptor,jr=(e,t,n,r)=>{for(var i=r>1?void 0:r?Hw(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&qw(t,n,i),i};let vn=class extends ve{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return C`<button
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
    />`}};vn.styles=[bt,ke`
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
    `];jr([ft({type:String})],vn.prototype,"tableId",2);jr([B()],vn.prototype,"query",2);jr([B()],vn.prototype,"open",2);jr([Pt("input")],vn.prototype,"inputEl",2);vn=jr([Se("panel-search")],vn);var Kw=Object.defineProperty,Vw=Object.getOwnPropertyDescriptor,qn=(e,t,n,r)=>{for(var i=r>1?void 0:r?Vw(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Kw(t,n,i),i};let Jt=class extends ve{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const n=t?.currentTarget??void 0,r=await oe();try{await Promise.resolve(e.onClick(r.api,{tableId:this.tableId,anchor:n}))}catch(i){console.error(`[table-button:${e.id}]`,i)}}}async connectedCallback(){super.connectedCallback();const e=await oe();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(n=>n.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await oe();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await oe(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const n={};for(const r of t.columns)n[r.field]=Ww(r);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:n,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}render(){return C`
      ${this.table?.readonly?re:C`<button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
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
              ${e.icon?e.icon.trimStart().startsWith("<svg")?C`<span class="icon-svg">${No(e.icon)}</span>`:C`<span class="mi sm">${e.icon}</span>`:C`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Jt.styles=[bt,ke`
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
    `];qn([ft({type:String})],Jt.prototype,"tableId",2);qn([ft({type:Boolean})],Jt.prototype,"active",2);qn([B()],Jt.prototype,"rowCount",2);qn([B()],Jt.prototype,"tableButtons",2);qn([B()],Jt.prototype,"table",2);Jt=qn([Se("panel-footer")],Jt);function Ww(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function oo(e){return e.title?.trim()?e.title.trim():e.name}function Gw(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Yw(e){const t=document.querySelector("app-shell")?.shadowRoot,n=t?.querySelector("header"),r=t?.querySelector("footer");n&&(e.style.top=`${n.offsetHeight}px`),r&&(e.style.bottom=`${r.offsetHeight}px`)}const Xt=new Map,Td=new Set;let Cc=!1,Id=null;function Ni(){return Id}function Er(){return{getState:()=>Ni()?.snapshot()??{x:0,y:0,scale:1},subscribe:e=>Ni()?.subscribe(e)??(()=>{})}}async function Ad(){const e=await oe();await Promise.all([...Xt.keys()].map(t=>ki(t,e)))}function Rd(e){const t=Xt.get(e);return t?(t.status==="minimized"&&t.normalize(),t.front(),!0):(Qw(e),!0)}async function Qw(e){const t=await oe(),n=await t.store.tables.findOne(e);n?.windowGeometry?.closed&&await t.store.tables.patch(e,{windowGeometry:{...n.windowGeometry,closed:!1},updatedAt:Date.now()})}async function Od(e){const t=await oe();await ny(e,t)}async function Dd(){if(Cc)return;Cc=!0;const e=await oe(),t=document.getElementById("easydb-panels"),n=document.getElementById("easydb-panels-viewport");if(t&&n){Id=Nw(t,n);const i=()=>Yw(t);i(),window.addEventListener("resize",i);const s=document.querySelector("app-shell")?.shadowRoot,o=s?.querySelector("header"),l=s?.querySelector("footer");if(typeof ResizeObserver<"u"&&(o||l)){const u=new ResizeObserver(i);o&&u.observe(o),l&&u.observe(l)}}const r=(await e.store.tables.find()).filter(i=>i.workspaceId===e.workspaceId);r.sort(Li);for(const i of r)i.windowGeometry?.closed||_c(i,e);e.store.tables.subscribe(i=>{const s=i.filter(u=>u.workspaceId===e.workspaceId),o=new Map(s.map(u=>[u.id,u]));for(const[u,h]of Xt){const p=o.get(u);if(!p||p.windowGeometry?.closed){Xt.delete(u),cs(u),Td.add(u);try{h.status!=="closed"&&h.close()}catch{}}}const l=s.filter(u=>!Xt.has(u.id)&&!u.windowGeometry?.closed).sort(Li);for(const u of l)_c(u,e)}),Bw()}const Pd=720,Ld=360;function _c(e,t){const n=`panel-${Md(e.id)}`,r=Gw(),i=yw(e.windowGeometry),s=Nn||i?.minimized===!0,o=()=>{const ee=document.createElement("data-table");return ee.tableId=e.id,ee.style.height="100%",ee},l=s?document.createElement("div"):o();let u=s?null:l,h=oo(e),p=-1,g=-1;const w=()=>{F.setHeaderTitle(h+Nu(p,g))},y=ee=>{const ce=ee.detail;ce.key===e.id&&(p=ce.count,g=ce.total,w())};document.addEventListener(Oi,y);const $=()=>{L.active=!1,u?.remove(),u=null},x=()=>{if(u)return;const ee=document.getElementById(n)?.querySelector(".jsPanel-content");if(!ee)return;ee.replaceChildren();const ce=o();ee.appendChild(ce),u=ce,L.active=!0},A=document.createElement("panel-search");A.tableId=e.id;const L=document.createElement("panel-footer");L.tableId=e.id,L.active=!s;const M=async()=>{if(document.removeEventListener(Oi,y),Xt.delete(e.id),cs(e.id),Td.delete(e.id))return;const ee=await t.store.tables.findOne(e.id);if(!ee)return;const ce=ee.windowGeometry??{x:60,y:60,w:720,h:360,z:1,minimized:!1,maximized:!1};await t.store.tables.patch(e.id,{windowGeometry:{...ce,closed:!0},updatedAt:Date.now()})},F=ji({id:n,container:r,title:h,logo:yc[xi(e)],color:"#01579b",content:l,footerToolbar:L,...i?{panelSize:{w:i.w,h:i.h},position:{x:i.x,y:i.y}}:{contentSize:{w:Pd,h:Ld},position:Jw()},minimizeTo:"#easydb-minimized-dock",viewport:Er(),boot:{minimized:s,maximized:!Nn&&i?.maximized===!0},onmoved:()=>void ki(e.id,t),onresized:()=>void ki(e.id,t),onfronted:()=>void ey(e.id,t),onstatuschange:ee=>{ee.status==="minimized"?$():(ee.status==="normalized"||ee.status==="maximized")&&x(),ki(e.id,t)},onclosed:()=>void M()});Xt.set(e.id,F),Ed(e.id,()=>F.front(void 0,!1));const K=document.getElementById(n),W=K?.querySelector(".jsPanel-controlbar");W&&W.prepend(A),wc(e)&&K?.classList.add("eda-refreshable");let ie=null;const q=document.createElement("button");q.type="button",q.title="Table info",q.setAttribute("aria-label","Table info"),q.className="eda-info-btn",q.textContent="ⓘ",q.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",q.addEventListener("click",ee=>{ee.stopPropagation(),ie&&Rw(h,ie.info??{},{source:ie.source,origin:ie.origin})}),W?.prepend(q);const V=ee=>{ie=ee??null;const ce=!!(ee?.info||ee?.source||ee?.origin);q.style.display=ce?"inline-flex":"none"};V(e);let ae=xi(e);t.store.tables.subscribe(ee=>{const ce=ee.find(Q=>Q.id===e.id);if(!ce)return;V(ce),oo(ce)!==h&&(h=oo(ce),w());const N=xi(ce);N!==ae&&(ae=N,F.setHeaderLogo(yc[N]),K?.classList.toggle("eda-refreshable",wc(ce)))})}let Xw=0;function Jw(){const e=Xw++;return{x:40+e%8*30,y:80+e%8*30}}function ki(e,t){return as(`table:${e}`,()=>Zw(e,t))}async function Zw(e,t){const n=document.getElementById(`panel-${Md(e)}`);if(!n)return;const r=Xt.get(e),i=r?.status??"normalized",s=r?.persistFlags()??{minimized:!1,maximized:!1};try{const l=(await t.store.tables.findOne(e))?.windowGeometry,u=Nn?l?.minimized??!1:s.minimized,h=Nn?l?.maximized??!1:s.maximized;let p=n.offsetLeft,g=n.offsetTop,w=n.offsetWidth,y=n.offsetHeight;(i==="minimized"||i==="maximized")&&(l?(p=l.x,g=l.y,w=l.w,y=l.h):(p=0,g=0,w=Pd,y=Ld)),p<=-9e3&&(p=l?.x??40);const x={x:p,y:g,w,h:y,z:l?.z??0,minimized:u,maximized:h};await t.store.tables.patch(e,{windowGeometry:x,updatedAt:Date.now()})}catch{}}function ey(e,t){return as(`table:${e}`,()=>ty(e,t))}async function ty(e,t){try{const n=await t.store.tables.findOne(e);if(!n)return;const r=n.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...r,z:Sd()},updatedAt:Date.now()})}catch{}}async function ny(e,t){if(!(await t.store.tables.findOne(e))?.source){const r=t.store.rows(e),i=await r.find();await r.bulkRemove(i.map(s=>s.id))}await t.store.tables.remove(e)}function Md(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}const ry=Object.freeze(Object.defineProperty({__proto__:null,FORCE_MINIMIZED:Nn,currentPanZoom:Ni,deleteTable:Od,focusTableWindow:Rd,initWindowManager:Dd,persistTablePanelGeometry:Ad,shellViewport:Er},Symbol.toStringTag,{value:"Module"})),iy=/<\/?[a-z][a-z0-9]*(\s[^<>]*)?\/?>|&[a-z][a-z0-9]*;|&#\d+;|&#x[0-9a-f]+;/i;function jd(e){return iy.test(e)}function sy(e){return e.replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&apos;|&#39;/gi,"'").replace(/&nbsp;/gi," ").replace(/&#x([0-9a-f]+);/gi,(t,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(t,n)=>String.fromCodePoint(Number(n))).replace(/&amp;/gi,"&")}function oy(e){if(typeof document<"u"){const t=document.createElement("div");return t.innerHTML=e,t.textContent??""}return sy(e.replace(/<[^>]*>/g,""))}function ay(e){return(jd(e)?oy(e):e).replace(/\s+/g," ").trim()}const ly={id:"html-preview",name:"HTML Preview",type:"cell-renderer",version:"0.3.0",description:`Shows a cell's HTML as a plain-text preview (first N characters); click to edit the raw HTML in a dialog, or use the popup icon to view the full rendered HTML in a window. Apply by setting a column's renderer to "html-preview". For direct in-cell rendering use the "html" renderer instead.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-preview.ts"};let _o=30;async function Sc(e){const t=await e.settings.get("html-preview","maxChars");typeof t=="number"&&Number.isFinite(t)&&t>0&&(_o=Math.floor(t))}function cy(e){customElements.get("html-preview-cell")||customElements.define("html-preview-cell",uy),e.ui.registerCellRenderer("html-preview","html-preview-cell"),e.ui.registerSettings("html-preview","HTML Preview",[{key:"maxChars",label:"Max characters shown",type:"number",default:30,scope:"workspace",description:"HTML-preview cells show the first N characters of the text; use the popup icon on the right to open the full rendered HTML in a window. Applies to cells rendered after the change (reload to refresh all)."}]),Sc(e),e.events.on("app:ready",()=>void Sc(e))}function Ec(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let Tc=0;class uy extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML"}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.render())}get value(){return this._value}set column(t){this._label=t?.label??"HTML"}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const o=document.createElement("span");o.style.cssText="color:#9ca3af;cursor:text",o.textContent="empty",o.title="Click to edit the HTML",o.addEventListener("click",()=>this.openEditor()),this.append(o);return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%";const n=document.createElement("span"),r=ay(this._value);n.textContent=r.length>_o?r.slice(0,_o)+"…":r,n.title="Click to edit the HTML",n.style.cssText="flex:0 1 auto;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:text",n.addEventListener("click",o=>{o.stopPropagation(),this.openEditor()});const i=document.createElement("span");i.style.cssText="flex:1 1 auto";const s=document.createElement("button");s.type="button",s.title="Open the HTML in a window",s.setAttribute("aria-label","Open the HTML in a window"),s.innerHTML='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>',s.style.cssText="flex:none;display:inline-flex;align-items:center;justify-content:center;padding:1px;background:none;border:0;color:#9ca3af;cursor:pointer;line-height:0",s.addEventListener("mouseenter",()=>s.style.color="#4b5563"),s.addEventListener("mouseleave",()=>s.style.color="#9ca3af"),s.addEventListener("click",o=>{o.stopPropagation(),this.openWindow()}),t.append(n,i,s),this.append(t)}openWindow(){const t=document.createElement("div");if(t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box",jd(this._value))t.innerHTML=this._value;else{const n=document.createElement("pre");n.style.cssText="white-space:pre-wrap;word-break:break-word;margin:0;font-family:ui-monospace, monospace;",n.textContent=this._value,t.append(n)}ji({id:`easydb-html-popup-${++Tc}`,container:Ec(),title:this._label,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:{centerTopOffset:60},boot:{maximized:Mi()},minimizeTo:"#easydb-minimized-dock",viewport:Er()})}openEditor(){const t=document.createElement("div");t.style.cssText="display:flex;flex-direction:column;gap:0.5rem;height:100%;box-sizing:border-box;padding:0.5rem";const n=document.createElement("textarea");n.value=this._value,n.style.cssText="flex:1 1 auto;width:100%;box-sizing:border-box;resize:none;font-family:monospace;font-size:0.85rem";const r=document.createElement("div");r.style.cssText="display:flex;justify-content:flex-end;gap:0.5rem;flex:none";const i=document.createElement("button");i.type="button",i.textContent="Cancel",i.style.cssText="padding:0.3rem 0.8rem;cursor:pointer";const s=document.createElement("button");s.type="button",s.textContent="Save",s.style.cssText="padding:0.3rem 0.8rem;cursor:pointer;background:#7c3aed;color:#fff;border:0;border-radius:0.25rem",r.append(i,s),t.append(n,r);const o=ji({id:`easydb-html-edit-${++Tc}`,container:Ec(),title:`Edit ${this._label}`,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:"center",boot:{maximized:Mi()},minimizeTo:"#easydb-minimized-dock",viewport:Er()});i.addEventListener("click",()=>o.close()),s.addEventListener("click",()=>{this._value=n.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:n.value},bubbles:!0,composed:!0})),o.close(),this.render()}),n.addEventListener("keydown",l=>{l.key==="Enter"&&(l.ctrlKey||l.metaKey)?(l.preventDefault(),s.click()):l.key==="Escape"&&(l.preventDefault(),o.close())}),setTimeout(()=>n.focus(),0)}}const dy=Object.freeze(Object.defineProperty({__proto__:null,init:cy,meta:ly},Symbol.toStringTag,{value:"Module"})),hy={id:"html-render",name:"HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's value directly as HTML (unescaped, in full, no popup). Apply by setting a column's renderer to "html". For a truncated preview use "html-preview".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-render.ts"};function fy(e){customElements.get("html-render-cell")||customElements.define("html-render-cell",py),e.ui.registerCellRenderer("html","html-render-cell")}class py extends HTMLElement{constructor(){super(...arguments),this._value="",this.editing=!1}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.editing||this.render())}get value(){return this._value}connectedCallback(){this.editing||this.render()}render(){this.innerHTML="";const t=document.createElement("span");t.style.cssText="display:inline-block;min-width:1ch;cursor:text",t.title="Click to edit",this._value?t.innerHTML=this._value:(t.style.color="#9ca3af",t.textContent="empty"),t.addEventListener("click",()=>this.beginEdit()),this.append(t)}beginEdit(){this.editing=!0,this.innerHTML="";const t=document.createElement("input");t.type="text",t.value=this._value,t.style.cssText="width:100%;box-sizing:border-box";let n=!1;const r=()=>{n||(n=!0,this.editing=!1,this._value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:t.value},bubbles:!0,composed:!0})),this.render())};t.addEventListener("blur",r),t.addEventListener("keydown",i=>{i.key==="Enter"?(i.preventDefault(),t.blur()):i.key==="Escape"&&(i.preventDefault(),n=!0,this.editing=!1,this.render())}),this.append(t),t.focus(),t.select()}}const my=Object.freeze(Object.defineProperty({__proto__:null,init:fy,meta:hy},Symbol.toStringTag,{value:"Module"})),gy={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function by(e){customElements.get("cell-link")||customElements.define("cell-link",wy),e.ui.registerCellRenderer("link","cell-link")}class wy extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._editor=null,this._raw=null}set value(t){const n=t==null?"":String(t);this._value!==n&&(this._value=n,this._editing=!1,this.render())}get value(){return this._value}set rawValue(t){const n=t==null?"":String(t);this._raw!==n&&(this._raw=n,this._editing&&this.render())}get rawValue(){return this._raw??this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="",this._editor=null;const t=this._value,n=this._editing?null:yy(t),r=!this._editing&&!n?vy(t):null,i=!this._editing&&!n&&!r?$y(t):null;if(n||r||i){const s=document.createElement("span");s.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const o=document.createElement("a");o.href=n?t:r?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,n&&(o.target="_blank",o.rel="noopener noreferrer"),o.textContent=t,o.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",o.title=n?`Open ${t}`:r?`Email ${t}`:`Call ${t}`;const l=document.createElement("button");l.type="button",l.title="Edit",l.textContent="✎",l.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",l.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),this._editing=!0,this.render()}),s.append(o,l),this.append(s)}else{const s=document.createElement("input");s.type="text",s.value=this.rawValue,s.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",s.addEventListener("change",()=>{this._editor===s&&this.commit(s.value)}),s.addEventListener("keydown",o=>{o.key==="Enter"?(o.preventDefault(),this.commit(s.value)):o.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),s.addEventListener("blur",()=>{this._editor===s&&this.commit(s.value)}),this.append(s),this._editor=s,this._editing&&setTimeout(()=>{s.focus(),s.select()},0)}}commit(t){const n=t!==this.rawValue;this._raw===null?this._value=t:this._raw=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function yy(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function vy(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function $y(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const n=t.replace(/\D/g,"");if(n.length<7||n.length>15)return null;const r=/[ ()\-.]/.test(t),i=t.startsWith("+");return!r&&!i&&n.length<10?null:t}const xy=Object.freeze(Object.defineProperty({__proto__:null,init:by,meta:gy},Symbol.toStringTag,{value:"Module"})),wr={id:"auto-renderer",name:"Auto Renderer",type:"cell-renderer",version:"0.1.0",description:"After any import, gives columns a renderer based on their values: link for URLs, image for image URLs, html-preview for markup or long text.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 3 8 6.5 4.5 8 8 9.5 9.5 13 11 9.5 14.5 8 11 6.5 9.5 3z"/><path d="M17.5 12 16.75 14 15 14.75 16.75 15.5 17.5 17.5 18.25 15.5 20 14.75 18.25 14 17.5 12z"/><path d="M4 17h9"/><path d="M4 21h6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-renderer.ts"},ky=120,Nd=50,Cy=/\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)(\?|#|$)/i,_y=/<[a-z][a-z0-9-]*(\s[^<>]*)?\/?>/i;function zd(e){return/^https?:\/\/\S+$/i.test(e)}function Sy(e){return/^data:image\//i.test(e)?!0:zd(e)&&Cy.test(e)}function Ud(e,t){if(e!=="string")return;const n=[];for(const i of t){if(i==null)continue;const s=typeof i=="string"?i.trim():String(i).trim();s&&n.push(s)}if(n.length===0)return;if(n.every(Sy))return"image";if(n.every(zd))return"link";if(n.some(i=>_y.test(i))||n.reduce((i,s)=>i+s.length,0)/n.length>ky)return"html-preview"}function xa(e,t){return t.length===0?[...e]:e.map(n=>{if(n.renderer)return n;const r=Ud(n.type,t.map(i=>i[n.field]));return r?{...n,renderer:r}:n})}function Ey(e){e.events.on("import:after",({tableId:t})=>{Ty(e,t)}),e.ui.registerColumnEditorAction({id:"auto-renderer:guess",label:"Guess renderers",icon:"auto_fix_high",tooltip:"Pick a renderer for each column from what its values look like",async run(t,{columns:n,tableId:r}){if(!r)return t.ui.dialogs.toast("Guessing needs rows to look at — import or add data first.",{kind:"info",title:wr.name}),null;const i=(await t.store.rows(r).find()).slice(0,Nd);if(i.length===0)return t.ui.dialogs.toast("This table has no rows to learn from yet.",{kind:"info",title:wr.name}),null;const s=n.map(({renderer:u,...h})=>h),o=xa(s,i.map(u=>u.data)),l=o.filter((u,h)=>u.renderer!==n[h]?.renderer).length;return t.ui.dialogs.toast(l===0?"No renderer fits these values — columns left as they are.":`Set ${l} renderer${l===1?"":"s"}. Press Save to keep them.`,{kind:l===0?"info":"success",title:wr.name}),o}})}async function Ty(e,t){try{const n=await e.store.tables.findOne(t);if(!n||n.columns.length===0||n.columns.every(s=>s.renderer))return;const r=(await e.store.rows(t).find()).slice(0,Nd);if(r.length===0)return;const i=xa(n.columns,r.map(s=>s.data));if(i.every((s,o)=>s.renderer===n.columns[o]?.renderer))return;await e.store.tables.upsert({...n,columns:i,updatedAt:Date.now()})}catch(n){e.events.emit("plugin:error",{url:wr.id,phase:"runtime",error:n})}}const Iy=Object.freeze(Object.defineProperty({__proto__:null,inferRenderer:Ud,init:Ey,meta:wr,withInferredRenderers:xa},Symbol.toStringTag,{value:"Module"})),Ay={id:"delete-table",name:"Delete Table",type:"ui",version:"0.1.0",description:"Adds a trash button to each table window that permanently deletes the table and its rows (with confirmation).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/delete-table.ts"};function Ry(e){e.ui.registerTableButton({id:"delete-table:delete",label:"Delete",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="#7f1d1d" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',tooltip:"Delete this table permanently",onClick:async(t,n)=>{const r=await t.store.tables.findOne(n.tableId);!r||!await t.ui.dialogs.confirm(r.source?`Delete the live table "${r.name}"? Its data stays on the server — only the local connection is removed.`:`Permanently delete table "${r.name}" and all its rows? This can't be undone.`,"Delete table")||(await Od(n.tableId),t.ui.dialogs.toast(`Deleted "${r.name}".`,{kind:"success",title:"Delete table"}))}})}const Oy=Object.freeze(Object.defineProperty({__proto__:null,init:Ry,meta:Ay},Symbol.toStringTag,{value:"Module"})),Dy={id:"table-copy",name:"Copy Table",type:"ui",version:"0.1.0",description:"Adds a Copy button to each table window: duplicate it as-is, or snapshot its Raw / Visible data into a new plain table. Works on projections too — that is how you freeze one.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/table-copy.ts"};function Py(e){e.ui.registerTableButton({id:"table-copy:copy",label:"Copy",icon:"content_copy",tooltip:"Copy this table — as a duplicate, or as a snapshot of its data",onClick:(t,{tableId:n})=>void My(t,n)})}function Ly(e,t){const n=e.source?.type==="projection";if(t==="duplicate")return n?"a second projection over the same sources (still live)":e.source?"another connection to the same source (still live)":"a full copy of its columns and rows";const r=t==="raw"?"every column and row":"the visible columns and filtered rows";return e.source?`a plain table holding ${r} as they are right now`:`a plain table holding ${r}`}async function My(e,t){const n=await e.store.tables.findOne(t);if(!n)return;const r=await e.ui.dialogs.choice(`Copy "${n.name}" — what should the copy contain?`,["Duplicate","Raw Data","Visible Data"],"Copy table");if(!r)return;const i=r==="Duplicate"?"duplicate":r==="Raw Data"?"raw":"visible";try{const s=await Fd(e,n,i);e.ui.dialogs.toast(`Copied "${n.name}" to "${s.name}" — ${Ly(n,i)}.`,{kind:"success",title:"Copy table"})}catch(s){e.ui.dialogs.toast(`Could not copy "${n.name}": ${s?.message??String(s)}`,{kind:"error",title:"Copy table"})}}async function Fd(e,t,n){const r=e.workspaceId();if(!r)throw new Error("table-copy: no active workspace");const i=Ki(await Qo(e,r),`${t.name} copy`),s=xe(),o=Date.now(),l={id:s,workspaceId:r,name:i,code:De(i),view:t.view,...t.title?{title:`${t.title} copy`}:{},...t.labelColumn?{labelColumn:t.labelColumn}:{},...t.info?{info:t.info}:{},updatedAt:o};if(n==="duplicate"){const h={...l,columns:t.columns,...t.sortBy?{sortBy:t.sortBy}:{},...t.sortColumn?{sortColumn:t.sortColumn,sortAsc:t.sortAsc??!0}:{},...t.filters?{filters:t.filters}:{},...t.deletedColumns?{deletedColumns:t.deletedColumns}:{},...t.readonly?{readonly:!0}:{},...t.source?{source:t.source}:{},...t.origin?{origin:t.origin}:{}};return await e.store.tables.insert(h),t.source||await Ic(e,t.id,s,p=>p),h}const u={...l,columns:hd(t,n).map(jy),...n==="raw"&&t.filters?{filters:t.filters}:{},...n==="raw"&&t.sortBy?{sortBy:t.sortBy}:{},...n==="raw"&&t.sortColumn?{sortColumn:t.sortColumn,sortAsc:t.sortAsc??!0}:{},...t.origin?{origin:t.origin}:{}};return await e.store.tables.insert(u),await Ic(e,t.id,s,h=>fd(t,h,n)),u}function jy(e){if(!e.readonly)return e;const t={...e};return delete t.readonly,t}async function Ic(e,t,n,r){const i=r(await e.store.rows(t).find());if(i.length===0)return;const s=Date.now();await e.store.rows(n).bulkInsert(i.map(o=>({id:xe(),tableId:n,data:{...o.data},updatedAt:s})))}const Ny=Object.freeze(Object.defineProperty({__proto__:null,copyTable:Fd,init:Py,meta:Dy},Symbol.toStringTag,{value:"Module"}));var zy=Object.defineProperty,Uy=Object.getOwnPropertyDescriptor,ka=(e,t,n,r)=>{for(var i=r>1?void 0:r?Uy(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&zy(t,n,i),i};function Bd(e,t){return(_t.instance??Fy()).open(e,t)}function Fy(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let _t=class extends ve{constructor(){super(...arguments),this.rows=[],this.subject="",this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((n,r)=>{const i=this.rows[r],s=i.field.trim(),o=i.label.trim()||s;return{...n,field:s,label:o,hidden:i.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),_t.instance=this}disconnectedCallback(){super.disconnectedCallback(),_t.instance===this&&(_t.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&gt(this.dialogEl,e)}open(e,t){return this.source=e,this.subject=t??"",this.rows=e.map(n=>({field:n.field,label:n.label,hidden:!!n.hidden})),new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((n,r)=>{const i=n.field.trim().toLowerCase();if(i===""){e.add(r);return}(t.get(i)??t.set(i,[]).get(i)).push(r)});for(const n of t.values())if(n.length>1)for(const r of n)e.add(r);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,n){this.rows=this.rows.map((r,i)=>i===e?{...r,[t]:n}:r)}setHidden(e,t){this.rows=this.rows.map((n,r)=>r===e?{...n,hidden:t}:n)}render(){const e=this.invalidIndices(),t=e.size;return C`
      <dialog @cancel=${this.onCancel} @keydown=${mt}>
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
                    @input=${i=>this.updateRow(r,"field",i.target.value)}
                  />
                  <input
                    .value=${n.label}
                    aria-label=${`Column ${r+1} label`}
                    @input=${i=>this.updateRow(r,"label",i.target.value)}
                  />
                  <div class="hidecell">
                    <input
                      type="checkbox"
                      .checked=${n.hidden}
                      aria-label=${`Hide column ${r+1}`}
                      @change=${i=>this.setHidden(r,i.target.checked)}
                    />
                  </div>
                `)}
            </div>
            <p class="err">
              ${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:re}
            </p>
          </div>
        </form>
      </dialog>
    `}};_t.instance=null;_t.styles=[pt,ke`
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
    `];ka([B()],_t.prototype,"rows",2);ka([B()],_t.prototype,"subject",2);_t=ka([Se("column-names-dialog")],_t);const By=Object.freeze(Object.defineProperty({__proto__:null,get ColumnNamesDialog(){return _t},editColumnNames:Bd},Symbol.toStringTag,{value:"Module"}));async function qy(e,t,n){const r=t.origin?.url;if(!r)throw new Error(`"${t.name}" has no source URL to reload from.`);const i={api:e,fetchText:(W,ie)=>Rr(e,W,ie??`Reading ${t.name}…`,{maxBytes:null}),panel:{}},s=await n.list(i,{kind:"url",url:r});if(s.length===0)throw new Error(`Nothing to read at ${r} any more.`);const o=s.find(W=>W.name===t.name)??(s.length===1?s[0]:void 0);if(!o)throw new Error(`"${t.name}" is no longer one of the tables at ${r}.`);let l=[];const u=[];for await(const W of n.read(i,o))W.columns?.length&&(l=W.columns),u.push(...W.rows);const{columns:h,newFields:p}=Hi(t.columns,l,t.deletedColumns??[]),g=t.origin?.pks??[],w=new Set(l.map(W=>W.field)),y=t.columns.map(W=>W.field).filter(W=>!w.has(W)&&!g.includes(W)),$=(t.deletedColumns??[]).filter(W=>w.has(W)),x=e.store.rows(t.id),A=await x.find(),{data:L,merged:M}=Lu({oldRows:A.map(W=>({data:W.data})),freshRows:u,pks:g,userAddedFields:y,deletedRemoteFields:$}),F=Date.now();h.length>0&&await e.store.tables.patch(t.id,{columns:h,updatedAt:F}),await x.bulkRemove(A.map(W=>W.id));const K=L.map(W=>({id:xe(),tableId:t.id,data:W,updatedAt:F}));return await x.bulkInsert(K),{rowCount:K.length,newFields:p,merged:M}}var Hy=Object.defineProperty,Ky=Object.getOwnPropertyDescriptor,He=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ky(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Hy(t,n,i),i};const Vy="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",Wy="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",Gy='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',Ac=[{label:"Northwind — sample database (JSON dump)",url:Vy,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:Wy,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],Yy={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function Qy(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:Gy,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>Jy(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:n})=>Xy(t,n)})}async function Xy(e,t){const n=await e.store.tables.findOne(t);if(n?.origin?.url)try{const r=await Ca(n.origin.type);if(!r)throw new Error(`No importer is installed that can read a "${n.origin.type}" source.`);const i=await qy(e,n,r),s=[];i.newFields.length>0&&s.push(`${i.newFields.length} new column${i.newFields.length===1?"":"s"}`),!i.merged&&i.rowCount>0&&s.push("rows replaced (no primary key to match on)"),e.ui.dialogs.toast(`Refreshed "${n.name}" (${i.rowCount.toLocaleString()} rows)${s.length?` — ${s.join(", ")}`:""}.`,{kind:i.newFields.length>0?"warning":"success",title:"Refresh"})}catch(r){e.ui.dialogs.toast(`Couldn't refresh "${n.name}": ${r.message}`,{kind:"error",title:"Refresh"})}}async function Jy(e,t="auto"){const r=await(_e.instance??sv()).open({presetKind:t,async listDatabases(x){const A=ht(x);return ca(L=>e.backend.fetch(L),A.base)},async listTables(){const x=e.workspaceId();return(await e.store.tables.find()).filter(A=>A.workspaceId===x&&!A.source).map(A=>({id:A.id,name:A.name})).sort((A,L)=>A.name.localeCompare(L.name))}});if(!r)return;const{url:i,file:s,kind:o,dbChosen:l,editColumns:u,maxRows:h,mode:p,panel:g,target:w}=r,y=s?.name??i,$=u?(x,A)=>Bd(x,A):void 0;typeof g.separator=="string"&&g.separator;try{if(o==="sql"){await Zy(e,{url:i,file:s,label:y,maxRows:h,mode:p,target:w,panel:g,editHook:$});return}const x=await Ca(o);if(x){const A=o==="json"?await ev(e,i,s,h,p):null;if(A?.isDump&&await e.ui.dialogs.confirm(`"${y}" is a workspace dump, not a plain table. Restore it — tables, window layout, views and filters? Choose Cancel to import only its tables as data.`,"Restore workspace")){await Jo(e,A.text,y,{maxRows:h,editColumns:$,...s?{}:{originUrl:i}});return}const L=s?s.name:zt(i),M=A?{kind:"text",text:A.text,name:L}:s?{kind:"file",file:s}:{kind:"url",url:i},F=await Vi(e,x,M,{mode:p,target:w,maxRows:h,panel:g,...A&&!s?{origin:{type:x.id,url:i}}:{},...$?{editColumns:K=>$(K)}:{}});x.ownToasts||qd(e,F,y);return}if(p==="reference"&&!s){o==="datasette"?await iv(e,i):await Hd(e,i,o);return}await es(e,i,{skipTablePicker:l,maxRows:h,editColumns:$})}catch(x){e.ui.dialogs.toast(`Could not import ${y}: ${x.message}`,{kind:"error",title:"Import"})}}async function Zy(e,t){const{url:n,file:r,label:i,maxRows:s,mode:o,target:l,panel:u,editHook:h}=t;if(o==="reference")throw new Error("A .sql script cannot be referenced live — it is a script to run, not a rows endpoint. Import it as a Copy instead.");const p=r?await r.text():await Rr(e,n,`Reading ${zt(n)}…`,s!=null?{maxBytes:null}:{});if(ia(p)){const y=await sa(e,p,{maxRows:s,target:l,...h?{editColumns:h}:{}});oa(e,y,i);return}const g=await Ca("sql");if(!g)throw new Error("The SQL importer is not installed.");const w=await Vi(e,g,{kind:"text",text:p,name:r?r.name:zt(n)},{mode:o,target:l,maxRows:s,panel:u,...r?{}:{origin:{type:g.id,url:n}},...h?{editColumns:y=>h(y)}:{}});qd(e,w,i)}async function ev(e,t,n,r,i){if(i==="reference")return null;const s=n?await n.text():await Rr(e,t,`Reading ${zt(t)}…`,r!=null?{maxBytes:null}:{});try{return{text:s,isDump:Xo(JSON.parse(s))}}catch{return{text:s,isDump:!1}}}async function Ca(e){const{registries:t}=await oe();return t.importers.find(n=>n.id===e&&n.supports?.kernel===!0)}function qd(e,t,n){if(t.cancelled&&t.landed.length===0)return;const r=t.landed.reduce((o,l)=>o+l.rowCount,0),i=t.landed.length===1?`"${t.landed[0].tableName}"`:`${t.landed.length} tables from ${n}`;if(t.landed.length>0){const o=t.failed.length>0?` — ${t.failed.length} failed`:"";e.ui.dialogs.toast(`Imported ${i} (${r.toLocaleString()} rows)${o}.`,{kind:t.failed.length>0?"warning":"success",title:"Import"});return}const s=t.failed.map(o=>`${o.name}: ${o.error}`).join("; ");e.ui.dialogs.toast(`Could not import ${n}${s?` — ${s}`:""}.`,{kind:"error",title:"Import"})}function tv(e){const t=JSON.parse(e),n=r=>Array.isArray(r)&&r.every(i=>i!=null&&typeof i=="object"&&!Array.isArray(i));if(n(t))return t;if(t&&typeof t=="object"){const r=t;for(const i of["rows","records","data"])if(n(r[i]))return r[i];for(const i of Object.values(r))if(n(i))return i}return[]}function nv(e){const t=tv(e).slice(0,50),n=i=>typeof i=="number"?"number":typeof i=="boolean"?"boolean":"string",r=new Map;for(const i of t)for(const[s,o]of Object.entries(i))!r.has(s)&&o!=null?r.set(s,n(o)):r.has(s)||r.set(s,"string");return[...r.entries()].map(([i,s])=>({field:i,label:i,type:s}))}function rv(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}.json?_size=max`}async function iv(e,t){const n=ht(t),i=await ma(l=>e.backend.fetch(l),n,"Reference");if(i===null)return;if(i.length===0)throw new Error("No tables found to reference at that URL.");let s=0;const o=[];for(const l of i)try{await Hd(e,rv(n.base,l.db,l.table),"json",{nameHint:`${l.db}/${l.table}`,silent:!0}),s++}catch(u){o.push(`${l.table}: ${u.message}`)}e.ui.dialogs.toast(`Referenced ${s} table${s===1?"":"s"}${o.length?` — ${o.length} failed`:""}.`,{kind:o.length?"warning":"success",title:"Reference"})}async function Hd(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("No active workspace.");const s=r.nameHint??zt(t),o=await Rr(e,t,`Reading ${s}…`,{maxBytes:null}),l=n==="csv"?Un(o).columns:nv(o);if(l.length===0)throw new Error("No columns found in the referenced data.");const u=new Set((await e.store.tables.find()).filter(g=>g.workspaceId===i).map(g=>g.name.toLowerCase()));let h=s;for(let g=2;u.has(h.toLowerCase());g++)h=`${s}-${g}`;const p={id:xe(),workspaceId:i,name:h,code:De(h),columns:l,view:"table",source:{type:"url",config:{url:t,format:n}},readonly:!0,updatedAt:Date.now()};await e.store.tables.insert(p),r.silent||e.ui.dialogs.toast(`Referenced ${h} — live, read-only.`,{kind:"success",title:"Reference"})}function sv(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function ov(e){try{const t=new URL(e),n=t.hostname.toLowerCase(),r=[...t.searchParams.keys()].some(s=>s.startsWith("_")),i=n.includes("datasette")||r;return!r&&/\.(csv|tsv|tab)$/i.test(t.pathname)?"csv":!r&&/\.sql$/i.test(t.pathname)?"sql":!r&&/\.json$/i.test(t.pathname)?"json":i?"datasette":"json"}catch{return"json"}}function Rc(e,t){if(t!=="datasette"||!e)return!1;try{const n=ht(e);return!n.db&&!n.table}catch{return!1}}function av(e){return/\.(csv|tsv|tab)$/i.test(e)?"csv":/\.sql$/i.test(e)?"sql":"json"}let _e=class extends ve{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.targetKind="new",this.targetTableId="",this.tables=[],this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.panelEl=null,this.mountedPanel="",this.panelGeneration=0,this.formats=[],this.acceptAttr=".txt",this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const n=this.resolvedKind,r=this.maxRows,i=this.editColumns&&this.mode==="copy",s=this.panelValue(),o=this.supportsTarget?this.target:{kind:"new"},l=this.file?"copy":this.mode;if(this.file){this.finish({url:"",file:this.file,kind:n,editColumns:i,maxRows:r,mode:l,panel:s,target:o});return}const u=n==="datasette"&&!!this.selectedDb&&Rc(t,n),h=u?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:h,kind:n,dbChosen:u,editColumns:i,maxRows:r,mode:l,panel:s,target:o})}}get supportsTarget(){return this.formats.find(e=>e.id===this.resolvedKind)?.kernel===!0}get target(){return this.mode==="reference"||this.targetKind==="new"||!this.targetTableId?{kind:"new"}:{kind:this.targetKind,tableId:this.targetTableId}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?av(this.file.name):ov(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),_e.instance=this}disconnectedCallback(){super.disconnectedCallback(),_e.instance===this&&(_e.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&gt(this.dialogEl,e)}updated(){const e=this.shadowRoot?.querySelector(".panel-slot");if(!e){this.panelEl=null,this.mountedPanel="";return}const t=this.activePanelTag,n=t?`${t}#${this.panelGeneration}`:"";if(n===this.mountedPanel||(e.replaceChildren(),this.panelEl=null,this.mountedPanel=n,!t))return;const r=document.createElement(t);r.addEventListener("change",()=>this.requestUpdate()),e.appendChild(r),this.panelEl=r}get activePanelTag(){return this.formats.find(e=>e.id===this.resolvedKind)?.panel}get activeLabel(){return this.formats.find(e=>e.id===this.resolvedKind)?.label??this.resolvedKind}panelValue(){const e=this.panelEl?.value;return e&&typeof e=="object"?e:{}}async loadFormats(){const{registries:e}=await oe(),t=[...e.importers].sort((i,s)=>(i.order??Number.MAX_SAFE_INTEGER)-(s.order??Number.MAX_SAFE_INTEGER)).map(i=>({id:i.id,label:i.label,panel:i.panel,kernel:i.supports?.kernel})),n=t.some(i=>i.id==="datasette")?t:[...t,{id:"datasette",label:"Datasette (table or instance)"}];this.formats=n;const r=new Set([".txt"]);for(const i of e.importers)for(const s of i.accept??[])r.add(s);this.acceptAttr=[...r].join(",")}open(e){this.targetKind="new",this.targetTableId="",this.tables=[],e?.listTables?.().then(n=>{this.tables=n}),this.url="",this.kind=e?.presetKind??"auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.panelGeneration+=1,this.resetDbList(),this.listDatabases=e?.listDatabases??null;const t=this.loadFormats();return new Promise(n=>{this.resolveFn=n,t.then(()=>this.updateComplete).then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const n=Ac[t];n&&(this.url=n.url,this.kind=n.kind)}onFileChange(e){const n=e.target.files?.[0]??null;this.file=n,n&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!Rc(this.url.trim(),this.resolvedKind)?re:C`
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
      ${this.dbError?C`<p class="hint error">${this.dbError}</p>`:re}
    `}renderTarget(){if(!this.supportsTarget||this.mode==="reference")return re;const e=this.targetKind!=="new";return C`
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
              </select>`:re}
        </div>
      </label>
      ${e?C`<p class="hint">
            The table keeps its own columns. Values map onto them the way the format requires — a
            CSV by column position, so its header names need not match.
          </p>`:re}
    `}renderPluginBlock(){const e=this.renderDbPicker();return!!!this.activePanelTag&&e===re?re:C`
      <fieldset class="block">
        <legend>${this.activeLabel} options</legend>
        <div class="panel-slot"></div>
        ${e}
      </fieldset>
    `}render(){return C`
      <dialog @cancel=${this.onCancel} @keydown=${mt}>
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
                  ${Ac.map((e,t)=>C`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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
                  </p>`:re}

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
              ${this.file?C`<p class="hint">Uploaded files can only be imported as a Copy.</p>`:re}
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
                  </p>`:re}

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
      ${re}
    `}};_e.instance=null;_e.styles=[pt,ke`
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
    `];He([B()],_e.prototype,"url",2);He([B()],_e.prototype,"kind",2);He([B()],_e.prototype,"presetIdx",2);He([B()],_e.prototype,"dbList",2);He([B()],_e.prototype,"dbLoading",2);He([B()],_e.prototype,"dbError",2);He([B()],_e.prototype,"selectedDb",2);He([B()],_e.prototype,"editColumns",2);He([B()],_e.prototype,"file",2);He([B()],_e.prototype,"maxRowsInput",2);He([B()],_e.prototype,"mode",2);He([B()],_e.prototype,"targetKind",2);He([B()],_e.prototype,"targetTableId",2);He([B()],_e.prototype,"tables",2);He([B()],_e.prototype,"formats",2);He([B()],_e.prototype,"acceptAttr",2);_e=He([Se("import-dialog")],_e);const lv=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return _e},init:Qy,meta:Yy},Symbol.toStringTag,{value:"Module"})),cv={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},uv=6e4;let Oc=null,So=!1;const ao=new Map;function dv(e){Oc===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(Oc=setInterval(()=>{Kd(e)},uv)))}async function Kd(e){if(So)return;const t=e.workspaceId();if(!t)return;const n=await yd(e);if(n)try{await hv(e,n,t)}catch(r){console.warn("[auto-sync]",r)}}async function hv(e,t,n){const r=await ts(e),i=await vd(e,n),s=await fetch(`${t}/sync/${encodeURIComponent(n)}`);if(s.status===404){await Dc(e,t,n,r,null);return}if(!s.ok)return;const o=ns(s.headers.get("ETag")),l=await s.text();if(fc(r)===fc(l)){o&&o!==i&&await yn(e,n,o);return}if(o&&o===i){await Dc(e,t,n,r,i);return}if(!(o&&ao.get(n)===o)){So=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${n}". Pull and replace your local copy?`,"auto-sync")){const h=JSON.parse(l),p=await $d(e,n,h);o&&await yn(e,n,o),ao.delete(n),e.ui.dialogs.toast(`Pulled ${p} table${p===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else o&&ao.set(n,o)}finally{So=!1}}}async function Dc(e,t,n,r,i){const s={"Content-Type":"application/json"};i&&(s["If-Match"]=`"${i}"`);const o=await fetch(`${t}/sync/${encodeURIComponent(n)}`,{method:"PUT",headers:s,body:r});if(o.ok){const l=ns(o.headers.get("ETag"));l&&await yn(e,n,l);return}if(o.status===412){const l=await o.json().catch(()=>({}));l.currentEtag&&await yn(e,n,l.currentEtag)}}const Vd=Object.freeze(Object.defineProperty({__proto__:null,load:dv,meta:cv,tick:Kd},Symbol.toStringTag,{value:"Module"}));var fv=Object.defineProperty,pv=Object.getOwnPropertyDescriptor,$t=(e,t,n,r)=>{for(var i=r>1?void 0:r?pv(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&fv(t,n,i),i};let et=class extends ve{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()},this.onInputChange=async e=>{const t=e.target;if(!(t instanceof HTMLInputElement)||!t.classList.contains("eda-input")||!this.instance||this.instance.readonly===!0)return;const n=t.getAttribute("data-eda-row"),r=t.getAttribute("data-eda-field"),i=t.getAttribute("data-eda-type")??"string";if(!n||!r)return;const s=this.allRows.find(u=>u.id===n);if(!s)return;let o;if(i==="boolean")o=t.checked;else if(i==="number"){const u=Number(t.value);o=t.value.trim()===""?null:Number.isNaN(u)?t.value:u}else o=t.value;await(await oe()).store.rows(this.instance.tableId).patch(n,{data:{...s.data,[r]:o},updatedAt:Date.now()})},this.onPillClick=async e=>{const t=e.target;if(!(t instanceof HTMLElement)||!t.classList.contains("eda-filter-pill")||!this.instance)return;const n=t.getAttribute("data-eda-filter-field"),r=t.getAttribute("data-eda-filter-value");if(!n||r==null)return;const i=$b(this.instance.pillFilters?.[n],r),s={...this.instance.pillFilters??{},[n]:i};await(await oe()).store.viewInstances.patch(this.instance.id,{pillFilters:s,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:s},this.recompute()}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await oe(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const n=await e.store.tables.findOne(t.tableId);this.tableColumns=n?.columns??[],n&&t.tableName!==n.name&&e.store.viewInstances.patch(t.id,{tableName:n.name});const r=new Map(this.tableColumns.map(s=>[s.field,s]));this.columns=t.visibleColumns.map(s=>r.get(s)??{field:s,label:s,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(s=>{const o=s.find(l=>l.id===this.viewInstanceId);if(o){if(o.tableId!==this.instance?.tableId){this.instance=o,this.reload();return}this.instance=o,this.recompute()}});const i=e.store.rows(t.tableId);this.rowsUnsub=i.subscribe(s=>{this.allRows=s,this.recompute()}),this.allRows=await i.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;const e=vb(this.allRows,this.tableColumns),t=dd(e,this.instance);let n=t;const r=this.searchQuery.trim(),i=this.globalQuery.trim();r&&(n=Ri(n,r,this.tableColumns)),i&&(n=Ri(n,i,this.tableColumns));const s=this.instance.limit??0;s>0&&n.length>s&&(n=n.slice(0,s)),this.rows=n,this.templateOn&&ju(this.viewInstanceId,n.length,t.length)}async removePill(e,t){if(!this.instance)return;const n=xb(this.instance.pillFilters?.[e],t),r={...this.instance.pillFilters??{}};n===""?delete r[e]:r[e]=n,await(await oe()).store.viewInstances.patch(this.instance.id,{pillFilters:r,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:r},this.recompute()}async setSortColumn(e){if(!this.instance)return;await(await oe()).store.viewInstances.patch(this.instance.id,{sortColumn:e||void 0,updatedAt:Date.now()}),this.instance={...this.instance,sortColumn:e||void 0},this.recompute()}async toggleSortDir(){if(!this.instance?.sortColumn)return;const e=!(this.instance.sortAsc??!0);await(await oe()).store.viewInstances.patch(this.instance.id,{sortAsc:e,updatedAt:Date.now()}),this.instance={...this.instance,sortAsc:e},this.recompute()}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await oe()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||Ao(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&Ao(this.instance.tableId,{editInstanceId:this.instance.id})}async deleteView(){if(!this.instance)return;const e=await oe();await e.api.ui.dialogs.confirm(`Delete the view "${this.instance.name}"? The table and its rows stay.`,"Delete view")&&await e.store.viewInstances.remove(this.instance.id)}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,r=t.includes(e)?t.filter(s=>s!==e):[...t,e];if(r.length===0)return;await(await oe()).store.viewInstances.patch(this.instance.id,{visibleColumns:r,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:r}}renderTable(){return this.rows.length===0?C`<div class="vw-empty">No rows.</div>`:C`
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
    `}renderTemplated(){const e=this.template;if(!e)return C`<div class="vw-empty">This view's template is missing.</div>`;if(Cb(e.rowHtml)){const t=this.instance?.mapping??{},n=new Map(this.tableColumns.map(o=>[o.field,o])),r=this.instance?.readonly===!0,i=this.rows.map(o=>wb(e.rowHtml,o,t,{columns:n,readonly:r})).join(""),s=(e.headerHtml??"")+i+(e.footerHtml??"");return C`<div class="vw-root">${On(s)}</div>`}return C`<div class="vw-root">
      ${e.headerHtml?.trim()?C`<div class="vw-html">${On(e.headerHtml)}</div>`:re}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?C`<div class="vw-html">${On(e.footerHtml)}</div>`:re}
    </div>`}renderSortBar(){if(!this.instance)return re;const e=this.tableColumns.filter(r=>r.sortable!==!1),t=this.instance.sortColumn??"",n=this.instance.sortAsc??!0;return C`<div class="vw-sortbar">
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
    </div>`}renderPillBar(){const e=this.instance?.pillFilters;if(!e)return re;const t=[];for(const[n,r]of Object.entries(e))if(r)for(const i of Dr(r))i.term&&t.push({field:n,value:i.term});return t.length===0?re:C`<div class="vw-pillbar">
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
    </div>`}renderFooter(){if(!this.instance)return re;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return C`<div class="vw-footer">
      ${!e&&this.showColsMenu?C`<div class="cols-menu">
            ${this.tableColumns.map(n=>C`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(n.field)}
                    @change=${()=>void this.toggleColumn(n.field)}
                  />${n.label||n.field}</label
                >`)}
          </div>`:re}
      ${e?re:C`<button
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
          </button>`:re}
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
        </div>`;return C`${e?this.renderSortBar():re}${this.renderPillBar()}${t}${this.renderFooter()}`}};et.styles=[bt,ke`
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
    `];$t([ft({type:String})],et.prototype,"viewInstanceId",2);$t([B()],et.prototype,"loaded",2);$t([B()],et.prototype,"error",2);$t([B()],et.prototype,"instance",2);$t([B()],et.prototype,"template",2);$t([B()],et.prototype,"columns",2);$t([B()],et.prototype,"tableColumns",2);$t([B()],et.prototype,"rows",2);$t([B()],et.prototype,"showColsMenu",2);$t([B()],et.prototype,"searchQuery",2);$t([B()],et.prototype,"globalQuery",2);et=$t([Se("view-window")],et);const it=new Map;async function mv(){await Promise.all([...it.keys()].map(e=>Ci(e)))}function Wd(e){const t=it.get(e);if(!t)return!1;const n=t.panel;return n.status==="minimized"&&n.normalize(),Mi()?n.status!=="maximized"&&n.maximize():n.centerInViewport(),n.front(),!0}const Eo=new Set;async function Gd(e){if(Wd(e))return;Eo.add(e);const t=await oe(),n=await t.store.viewInstances.findOne(e);if(!n){Eo.delete(e);return}if(n.open){Io(n,t),Yd(e);return}await t.store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()})}function Yd(e){Eo.delete(e)&&Wd(e)}let Pc=!1;function To(e){e.panel.setHeaderTitle(e.name+Nu(e.count,e.total))}function gv(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function bv(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Qd(e){return`view-panel-${bv(e)}`}async function wv(){if(Pc)return;Pc=!0;const e=await oe(),t=r=>r.filter(i=>i.workspaceId===e.workspaceId&&i.open),n=t(await e.store.viewInstances.find()).sort(Li);for(const r of n)Io(r,e);e.store.viewInstances.subscribe(r=>{const i=new Map(t(r).map(o=>[o.id,o]));for(const o of[...it.keys()])i.has(o)||vv(o);const s=[...i.values()].filter(o=>!it.has(o.id)).sort(Li);for(const o of s)Io(o,e)}),e.store.tables.subscribe(r=>void yv(e,r)),document.addEventListener(Oi,r=>{const i=r.detail,s=it.get(i.key);s&&s.el&&(s.count=i.count,s.total=i.total,To(s))}),document.addEventListener("easydb:reload-view",r=>{const i=r.detail?.instanceId;if(!i)return;const s=it.get(i);s&&(async()=>{const o=await e.store.viewInstances.findOne(i);o&&(s.name=o.name,To(s)),s.el?.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of it.values())r?.reload()})}async function yv(e,t){const n=t.filter(o=>o.workspaceId===e.workspaceId),r=new Set(n.map(o=>o.id)),i=new Map;for(const o of n)i.has(o.name)||i.set(o.name,o);const s=await e.store.viewInstances.find();for(const o of s){if(o.workspaceId!==e.workspaceId||r.has(o.tableId)||!o.tableName)continue;const l=i.get(o.tableName);l&&await e.store.viewInstances.patch(o.id,{tableId:l.id,updatedAt:Date.now()})}}function Io(e,t){if(it.has(e.id))return;const n=Qd(e.id),r=e.windowGeometry,i=r?.minimized===!0,s=()=>{const y=document.createElement("view-window");return y.viewInstanceId=e.id,y.style.height="100%",y},o=i?document.createElement("div"):s();let l;const u=()=>{l&&(l.el?.remove(),l.el=null,l.count=-1,l.total=-1,To(l))},h=()=>{if(!l||l.el)return;const y=document.getElementById(n)?.querySelector(".jsPanel-content");if(!y)return;y.replaceChildren();const $=s();y.appendChild($),l.el=$},p=ji({id:n,container:gv(),title:e.name,logo:Tw,color:"#0891b2",content:o,...r?{panelSize:{w:r.w,h:r.h},position:{x:r.x,y:r.y}}:{contentSize:{w:480,h:520},position:{centerTopOffset:60}},minimizeTo:"#easydb-minimized-dock",viewport:Er(),boot:{minimized:r?.minimized===!0,maximized:r?.maximized===!0},onmoved:()=>void Ci(e.id),onresized:()=>void Ci(e.id),onfronted:()=>void $v(e.id,t),onstatuschange:y=>{y.status==="minimized"?u():(y.status==="normalized"||y.status==="maximized")&&h(),Ci(e.id)},onclosed:()=>{it.delete(e.id),cs(e.id),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});l={panel:p,el:i?null:o,name:e.name,count:-1,total:-1},it.set(e.id,l),Ed(e.id,()=>p.front(void 0,!1));const g=document.getElementById(n),w=document.createElement("panel-search");w.tableId=e.id,g?.querySelector(".jsPanel-controlbar")?.prepend(w),Yd(e.id)}function vv(e){const t=it.get(e);if(t){it.delete(e),cs(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}function $v(e,t){return as(`view:${e}`,()=>xv(e,t))}async function xv(e,t){try{const n=await t.store.viewInstances.findOne(e);if(!n)return;const r=n.windowGeometry??{x:0,y:0,w:480,h:520,z:0,minimized:!1,maximized:!1};await t.store.viewInstances.patch(e,{windowGeometry:{...r,z:Sd()},updatedAt:Date.now()})}catch{}}function Ci(e){return as(`view:${e}`,()=>kv(e))}async function kv(e){const t=document.getElementById(Qd(e)),n=it.get(e);if(!t||!n)return;const{minimized:r,maximized:i}=n.panel.persistFlags();try{const s=await oe(),o=(await s.store.viewInstances.findOne(e))?.windowGeometry;let l=t.offsetLeft,u=t.offsetTop,h=t.offsetWidth,p=t.offsetHeight;(r||i)&&o&&(l=o.x,u=o.y,h=o.w,p=o.h),l<=-9e3&&(l=o?.x??40);const g={x:l,y:u,w:h,h:p,z:o?.z??0,minimized:r,maximized:i};await s.store.viewInstances.patch(e,{windowGeometry:g,updatedAt:Date.now()})}catch{}}var Cv=Object.defineProperty,_v=Object.getOwnPropertyDescriptor,Hn=(e,t,n,r)=>{for(var i=r>1?void 0:r?_v(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Cv(t,n,i),i};function Ao(e,t){(lt.instance??Sv()).open(e,t)}function Sv(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function lo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let lt=class extends ve{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),lt.instance=this}disconnectedCallback(){super.disconnectedCallback(),lt.instance===this&&(lt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&gt(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const n=this.templates.find(r=>r.id===t.editTemplateId);n&&this.editTemplate(n)}else if(t?.editInstanceId){const n=this.instances.find(r=>r.id===t.editInstanceId);n&&await this.editInstance(n)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await oe(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(n=>n.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((n,r)=>n.name.localeCompare(r.name))}async openInstance(e){this.close(),await Gd(e)}async editInstance(e){const n=await(await oe()).store.viewTemplates.findOne(e.templateId),r=n?lc(n.headerHtml,n.rowHtml,n.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:n?.name??"template",name:e.name,tokens:r,mapping:{...e.mapping},limit:e.limit??0,readonly:e.readonly??!1},this.mode="instance"}async deleteInstance(e){await(await oe()).store.viewInstances.remove(e),await this.refresh()}async copyInstance(e){const t=await oe(),n=this.columns.filter(i=>!i.hidden).map(i=>i.field),r={...e,id:lo(),name:`${e.name} copy`,visibleColumns:n,open:!1,windowGeometry:void 0,updatedAt:Date.now()};await t.store.viewInstances.insert(r),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async deleteTemplate(e){const t=await oe();await t.api.ui.dialogs.confirm(e.builtin?`Delete the built-in template "${e.name}"? It will not be seeded again in this workspace. Views already created from it keep working.`:`Delete the template "${e.name}"? Views already created from it keep working.`,e.builtin?"Delete built-in template":"Delete template")&&(await t.store.viewTemplates.remove(e.id),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh())}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await oe(),n=this.templates.find(r=>r.id!==e.id&&r.name.trim().toLowerCase()===e.name.trim().toLowerCase());if(n){await t.api.ui.dialogs.alert(`A template called “${n.name}” already exists. Pick another name.`,"Duplicate template name");return}if(e.id){const r=this.templates.find(i=>i.id===e.id)?.builtin;await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,...r?{builtin:!1}:{},updatedAt:Date.now()})}else await t.store.viewTemplates.insert({id:lo(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()});document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=lc(e.headerHtml,e.rowHtml,e.footerHtml),n={};for(const r of t)n[r]=this.autoMap(r);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:n,limit:0,readonly:!1},this.mode="instance"}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),n=this.columns.find(g=>g.field.toLowerCase()===t||(g.label??"").toLowerCase()===t);if(n)return n.field;const r=/^check(\d+)$/i.exec(e);if(r){const g=Number(r[1])-1;return this.columns.filter(y=>y.type==="boolean")[g]?.field??""}if(["done","complete","completed","checked","check","read","active","enabled","starred","flag","ok"].includes(t))return this.firstColumn(g=>g.type==="boolean");const s=this.table?.labelColumn;if(s&&(t==="title"||t==="name"||t==="label"))return s;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(g=>g.type==="date"||g.type==="datetime");const l=["url","link","href","website","homepage","uri","site","web"];if(l.includes(t)){const g=this.firstColumn(w=>w.renderer==="link");return g||this.firstColumn(w=>{const y=w.field.toLowerCase(),$=(w.label??"").toLowerCase();return l.some(x=>y.includes(x)||$.includes(x))})}const u=g=>w=>{const y=w.field.toLowerCase(),$=(w.label??"").toLowerCase();return g.some(x=>y.includes(x)||$.includes(x))},h=["image","img","photo","picture","pic","thumbnail","thumb","avatar","cover","poster","logo","icon"];if(h.includes(t)){const g=this.firstColumn(y=>y.renderer==="image");if(g)return g;const w=this.firstColumn(u(h));return w||this.firstColumn(u(["url","src","href","link"]))}if(["email","mail","e-mail"].includes(t))return this.firstColumn(u(["mail"]));if(["phone","tel","telephone","mobile","cell","cellphone"].includes(t))return this.firstColumn(u(["phone","tel","mobile","cell"]));const p=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(p.includes(t)){const g=this.firstColumn(x=>{if(x.type!=="string")return!1;const A=x.field.toLowerCase(),L=(x.label??"").toLowerCase();return p.some(M=>A.includes(M)||L.includes(M))});if(g)return g;const w=this.columns.filter(x=>x.type==="string"),y=w[0];if(!y)return"";let $=y;for(const x of w)(x.max??0)>($.max??0)&&($=x);return $.field}return""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await oe();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},limit:e.limit>0?e.limit:void 0,readonly:e.readonly,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const n=this.columns.filter(i=>!i.hidden).map(i=>i.field),r={id:lo(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:n,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{},...e.readonly?{readonly:!0}:{}};await t.store.viewInstances.insert(r),await this.openInstance(r.id)}renderList(){return C`
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
                ${e.builtin?C`<span class="badge">built-in</span>`:re}
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
      <dialog @cancel=${this.close} @keydown=${mt}>
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
    `}};lt.instance=null;lt.styles=[pt,ke`
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
    `];Hn([B()],lt.prototype,"mode",2);Hn([B()],lt.prototype,"instances",2);Hn([B()],lt.prototype,"templates",2);Hn([B()],lt.prototype,"tDraft",2);Hn([B()],lt.prototype,"iDraft",2);lt=Hn([Se("views-dialog")],lt);const Ev={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},Tv="grid_view",Iv={slug:"rss",name:"RSS Feed",header:'<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>','<div style="display:flex;gap:16px;margin-top:8px;">$input.CHECK1$input.CHECK2</div>',"</div>"].join(""),footer:"</div>"},Av={slug:"todo-list",name:"Todo List",header:'<div style="display:flex;flex-direction:column;gap:6px;padding:12px;max-width:720px;margin:0 auto;">',row:['<div style="display:flex;align-items:center;gap:10px;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;background:#ffffff;">',"$input.DONE",'<span style="flex:1;font-weight:500;color:#111827;">$TITLE</span>','<span style="color:#6b7280;font-size:0.8rem;white-space:nowrap;">$DUE</span>',"</div>"].join(""),footer:"</div>"},Rv={slug:"gallery",name:"Gallery",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;padding:12px;">',row:['<figure style="margin:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$LINK" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;color:inherit;">','<img src="$IMAGE" alt="$TITLE" loading="lazy" style="width:100%;height:150px;object-fit:cover;display:block;background:#f3f4f6;" />','<figcaption style="padding:6px 8px;font-size:0.85rem;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">$TITLE</figcaption>',"</a>","</figure>"].join(""),footer:"</div>"},Ov={slug:"contact-cards",name:"Contact Cards",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:10px;padding:12px 14px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<div style="font-weight:600;color:#111827;font-size:0.95rem;">$NAME</div>','<a href="mailto:$EMAIL" style="color:#2563eb;text-decoration:none;font-size:0.85rem;word-break:break-all;">$EMAIL</a>','<div style="color:#6b7280;font-size:0.85rem;margin-top:2px;">$PHONE</div>',"</div>"].join(""),footer:"</div>"},Dv=[Iv,Av,Rv,Ov];function Pv(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:Tv,tooltip:"Views -- display this table through a template",onClick:(t,{tableId:n})=>Ao(n)})}async function Lv(e){await jv(e)}function Mv(e){let t=5381;const n=`${e.header} ${e.row} ${e.footer}`;for(let r=0;r<n.length;r++)t=(t<<5)+t+n.charCodeAt(r)|0;return(t>>>0).toString(36)}async function jv(e){const t=e.workspaceId();if(!t)return;const n=await e.store.viewTemplates.find({workspaceId:t});for(const r of Dv)await Nv(e,t,r,n)}async function Nv(e,t,n,r){const i=`views:seeded:${n.slug}:${t}`,s=`views:sig:${n.slug}:${t}`,o=Mv(n),l=r.find(h=>h.builtin&&h.name===n.name);if(l){(await e.store.settings.findOne(s))?.value!==o&&(await e.store.viewTemplates.patch(l.id,{headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,updatedAt:Date.now()}),await e.store.settings.upsert({name:s,value:o})),await e.store.settings.upsert({name:i,value:!0});return}(await e.store.settings.findOne(i))?.value||(await e.store.viewTemplates.insert({id:zv(),workspaceId:t,name:n.name,headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({name:i,value:!0}),await e.store.settings.upsert({name:s,value:o}))}function zv(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Uv=Object.freeze(Object.defineProperty({__proto__:null,init:Pv,load:Lv,meta:Ev},Symbol.toStringTag,{value:"Module"})),Fv={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function Bv(e){e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,n)=>{const i=Array.from(t.dataTransfer?.files??[]).find(l=>l.name.toLowerCase()==="secrets.txt");if(!i)return!1;const s=await i.text(),o=Object.keys(xr(s)).length;return qi().trim().length>0&&!await n.ui.dialogs.confirm(`Replace your current secrets with ${o} secret${o===1?"":"s"} from "${i.name}"?`,"Import secrets")||(au(s),n.ui.dialogs.toast(`Imported ${o} secret${o===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const qv=Object.freeze(Object.defineProperty({__proto__:null,init:Bv,meta:Fv},Symbol.toStringTag,{value:"Module"}));class Yt extends Error{constructor(t="this cell is derived"){super(`Projection is read-only — ${t}. Edit a base-table column, or import a copy.`),this.name="ProjectionReadOnlyError"}}function Hv(e){const t=e;return!t||!Array.isArray(t.sources)||!Array.isArray(t.columns)?{version:1,sources:[],columns:[]}:t}function Kv(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function Vv(e,t){const n=Hv(t.source?.config),r=new Set;let i=[],s=!1,o=null;const l=new Map;let u=null,h=!1;function p(M){const F=new Map;for(const W of M)F.has(W.name)||F.set(W.name,W);const K=new Map;for(const W of n.sources){const ie=F.get(W.tableName);ie&&K.set(W.alias,ie.id)}return K}async function g(){return p(await e.tables.find({workspaceId:t.workspaceId}))}async function w(){const M=await e.tables.find({workspaceId:t.workspaceId});if(Zp(t.id,M))return[];const F=p(M),K={};for(const W of n.sources){const ie=F.get(W.alias);if(!ie)return[];K[W.alias]=await e.rows(ie).find()}return Kp(n,K).map(W=>({...W,tableId:t.id}))}async function y(){const M=await w();return i=M,s=!0,M}function $(){return o||(o=(async()=>{try{return await y()}finally{o=null}})(),o)}async function x(){const M=await g(),F=new Set(M.values());for(const[K,W]of l)F.has(K)||(W(),l.delete(K));for(const K of F)l.has(K)||l.set(K,e.rows(K).subscribe(A))}function A(){h||(h=!0,queueMicrotask(async()=>{h=!1,await x();const M=s?await y():await $();for(const F of r)F(M)}))}async function L(M,F){const K=Or(n),W={};let ie=null;for(const[N,Q]of Object.entries(F)){if(!K.has(N))continue;const de=nm(n,M,N);de&&(ie=de.baseRowId,W[de.field]=Q)}if(!ie||Object.keys(W).length===0)throw new Yt;const q=await g(),V=n.sources[0]?.alias,ae=V?q.get(V):void 0;if(!ae)throw new Yt("the base table is not available");const ee=e.rows(ae),ce=await ee.findOne(ie);if(!ce)throw new Yt("the underlying row no longer exists");return await ee.patch(ie,{data:{...ce.data,...W},updatedAt:Date.now()}),{id:M,tableId:t.id,data:F,updatedAt:Date.now()}}return{async find(M){const F=s?i:await $();return!M||Object.keys(M).length===0?F:F.filter(K=>Kv(K,M))},async findOne(M){return(s?i:await $()).find(K=>K.id===M)??null},async insert(){throw new Yt("rows are derived from other tables")},async bulkInsert(){throw new Yt("rows are derived from other tables")},async upsert(M){return L(M.id,M.data)},async patch(M,F){if(!F.data)throw new Yt("a cell edit must carry row data");return L(M,F.data)},async remove(){throw new Yt("rows are derived from other tables")},async bulkRemove(){throw new Yt("rows are derived from other tables")},subscribe(M){return r.add(M),u||(u=e.tables.subscribe(A)),s?M(i):A(),()=>{if(r.delete(M),r.size===0){u?.(),u=null;for(const F of l.values())F();l.clear(),s=!1}}},async refresh(){await x();const M=await y();for(const F of r)F(M)}}}function Wv(e,t){const n=e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")||"col";let r=n,i=2;for(;t.has(r);)r=`${n}_${i++}`;return t.add(r),r}function Gv(e){for(let t=0;;t++){const n=String.fromCharCode(97+t%26)+(t>=26?String(Math.floor(t/26)):"");if(!e.some(r=>r.alias===n))return n}}function Yv(e,t,n){const r=t.sources.map(l=>{const u=n.find(w=>w.name===l.tableName),h={alias:l.alias,tableId:u?.id??"",tableName:l.tableName,columns:u?.columns??[]},p=l.join?.on??[],g=p[0];return l.join&&g&&(h.join={type:l.join.type,thisField:g.field,otherAlias:g.eqAlias,otherField:g.eqField},p.length>1&&(h.extraOn=p.slice(1))),h}),i=t.columns.map(l=>{const u={include:!0,outField:l.field,label:l.label??l.field};return l.from.kind==="source"?{...u,alias:l.from.alias,field:l.from.field,computed:!1}:{...u,script:l.from.script,computed:!0}}),s=[],o=new Set;r.forEach((l,u)=>{const h=r.slice(0,u).filter(p=>p.tableName===l.tableName).length;for(const p of l.columns){const g=i.filter(w=>!w.computed&&w.alias===l.alias&&w.field===p.field&&!o.has(w));if(g.length>0)for(const w of g)o.add(w),s.push(w);else s.push({include:!1,alias:l.alias,field:p.field,computed:!1,label:h>0?`${p.label} (${l.alias})`:p.label})}});for(const l of i)!l.computed&&!o.has(l)&&s.push(l);for(const l of i)l.computed&&s.push(l);return{name:e,sources:r,columns:s,...t.limit?{limit:t.limit}:{},original:t}}function Qv(e,t){const n=Gv(e.sources),r=e.sources.length===0,i=e.sources.filter(l=>l.tableName===t.name).length;let s;if(!r){const l=e.sources.flatMap(h=>h.join?[{alias:h.join.otherAlias,field:h.join.otherField},...(h.extraOn??[]).map(p=>({alias:p.eqAlias,field:p.eqField}))]:[]),u=tm({tableName:t.name,fields:t.columns.map(h=>h.field),pks:t.columns.filter(h=>h.unique).map(h=>h.field)},e.sources.map(h=>({alias:h.alias,tableName:h.tableName,fields:h.columns.map(p=>p.field),pks:h.columns.filter(p=>p.unique).map(p=>p.field)})),l);s={type:"left",thisField:u?.thisField??t.columns[0]?.field??"",otherAlias:u?.otherAlias??e.sources[0]?.alias??"",otherField:u?.otherField??""}}const o={alias:n,tableId:t.id,tableName:t.name,columns:t.columns,...s?{join:s}:{}};return{...e,sources:[...e.sources,o],columns:[...e.columns,...t.columns.map(l=>({include:!0,alias:n,field:l.field,computed:!1,label:i>0?`${l.label} (${n})`:l.label}))]}}function Xv(e,t){const n=new Set([t]);for(let r=!0;r;){r=!1;for(const i of e.sources){if(n.has(i.alias)||!i.join)continue;[i.join.otherAlias,...(i.extraOn??[]).map(o=>o.eqAlias)].some(o=>n.has(o))&&(n.add(i.alias),r=!0)}}return{...e,sources:e.sources.filter(r=>!n.has(r.alias)),columns:e.columns.filter(r=>r.computed||!r.alias||!n.has(r.alias))}}function Jv(e){return{...e,columns:[...e.columns,{include:!0,computed:!0,label:"computed",script:`function render(row) {
  return "";
}`}]}}function Zv(e){const t=e.name.trim();if(!t)return{ok:!1,error:"Give the projection a name."};if(e.sources.length===0)return{ok:!1,error:"Add at least one source table."};const n=e.columns.filter(u=>u.include);if(n.length===0)return{ok:!1,error:"Select at least one column."};for(let u=0;u<e.sources.length;u++){const h=e.sources[u];if(!h?.join)continue;if(!h.join.thisField||!h.join.otherField)return{ok:!1,error:`Set both join keys for "${h.tableName}".`};const p=new Set(e.sources.slice(0,u).map(w=>w.alias));if([h.join.otherAlias,...(h.extraOn??[]).map(w=>w.eqAlias)].some(w=>!p.has(w)))return{ok:!1,error:`The join for "${h.tableName}" refers to a table that is no longer part of this projection.`}}const r=new Set(e.sources.map(u=>u.alias)),i=new Set,s=[];for(const u of n){let h;if(u.outField&&!i.has(u.outField)?(h=u.outField,i.add(h)):h=Wv(u.computed?"computed":u.field??"col",i),u.computed){s.push({field:h,from:{kind:"script",script:u.script??""}});continue}const p=u.alias,g=u.field;if(!p||!g||!r.has(p))return{ok:!1,error:`Column "${u.label??u.field}" belongs to a table that is no longer part of this projection.`};s.push({field:h,from:{kind:"source",alias:p,field:g}})}const o=e.sources.map(u=>{const h={alias:u.alias,tableName:u.tableName};return u.join&&(h.join={type:u.join.type,on:[{field:u.join.thisField,eqAlias:u.join.otherAlias,eqField:u.join.otherField},...u.extraOn??[]]}),h}),l={...e.original??{},version:1,sources:o,columns:s};return e.limit!=null&&e.limit>0?l.limit=Math.floor(e.limit):delete l.limit,{ok:!0,name:t,spec:l}}var e0=Object.defineProperty,t0=Object.getOwnPropertyDescriptor,Kn=(e,t,n,r)=>{for(var i=r>1?void 0:r?t0(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&e0(t,n,i),i};let ct=class extends ve{constructor(){super(...arguments),this.name="",this.limit="",this.sources=[],this.columns=[],this.error="",this.candidates=[],this.editing=!1,this.originalSpec=null,this.dialogEl=null,this.submit=async e=>{e.preventDefault(),this.error="";const t=this.buildSpec();if(!(!t||!this.onSave)){try{await this.onSave(t.name,t.spec)}catch(n){this.error=n?.message??String(n);return}this.dialogEl?.close()}}}connectedCallback(){super.connectedCallback(),ct.instance=this}disconnectedCallback(){super.disconnectedCallback(),ct.instance===this&&(ct.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&gt(this.dialogEl,e)}open(e){this.candidates=e.candidates,this.onSave=e.onSave,this.error="",this.editing=!!e.initial,this.originalSpec=null,this.name="",this.limit="",this.sources=[],this.columns=[],e.initial?this.loadFrom(e.initial.name,e.initial.spec):e.base&&(this.name=`${e.base.name} view`,this.addCandidateAsSource(e.base)),this.updateComplete.then(()=>this.dialogEl?.showModal())}modelOf(){const e=Number(this.limit);return{name:this.name,sources:this.sources,columns:this.columns,...this.limit.trim()!==""&&Number.isFinite(e)&&e>0?{limit:Math.floor(e)}:{},...this.originalSpec?{original:this.originalSpec}:{}}}applyModel(e){this.name=e.name,this.sources=e.sources,this.columns=e.columns,this.limit=e.limit!=null&&e.limit>0?String(e.limit):""}loadFrom(e,t){this.originalSpec=t,this.applyModel(Yv(e,t,this.candidates))}addSource(e){const t=this.candidates.find(n=>n.id===e);t&&this.addCandidateAsSource(t)}addCandidateAsSource(e){this.applyModel(Qv(this.modelOf(),e))}removeSource(e){this.applyModel(Xv(this.modelOf(),e))}addComputed(){this.applyModel(Jv(this.modelOf()))}patchSource(e,t){this.sources=this.sources.map(n=>n.alias===e&&n.join?{...n,join:{...n.join,...t}}:n)}buildSpec(){const e=Zv(this.modelOf());return e.ok?{name:e.name,spec:e.spec}:(this.error=e.error,null)}aliasesBefore(e){const t=this.sources.findIndex(n=>n.alias===e);return this.sources.slice(0,t)}render(){const e=this.sources[0];return C`
      <dialog @cancel=${()=>this.dialogEl?.close()} @keydown=${mt}>
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
                ${e?C`<span class="hint">A table may be joined more than once.</span>`:re}
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
          ${t?re:C`<button type="button" class="icon-btn" title="Remove this join" aria-label="Remove ${e.tableName}" @click=${()=>this.removeSource(e.alias)}>×</button>`}
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
                @change=${n=>{const[r,i]=n.target.value.split(".");this.patchSource(e.alias,{otherAlias:r??"",otherField:i??""})}}
              >
                ${this.aliasesBefore(e.alias).flatMap(n=>n.columns.map(r=>C`<option value=${`${n.alias}.${r.field}`} ?selected=${n.alias===e.join?.otherAlias&&r.field===e.join?.otherField}>${n.alias}.${r.field}</option>`))}
              </select>
            </div>`:""}
      </div>
    `}renderSourceColumns(e){const t=this.columns.map((r,i)=>({c:r,i})).filter(({c:r})=>!r.computed&&r.alias===e.alias);if(t.length===0)return re;const n=t.every(({c:r})=>r.include);return C`
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
          ${t.map(({c:r,i})=>C`
              <label class="tick ${r.include?"":"off"}" title=${`${r.alias}.${r.field}`}>
                <input type="checkbox" .checked=${r.include} @change=${s=>this.setColumn(i,{include:s.target.checked})} />
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
                    @click=${()=>{this.columns=this.columns.filter((r,i)=>i!==n)}}
                  >
                    ×
                  </button>
                </div>
              `)}
      </div>
    `}setColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}};ct.instance=null;ct.styles=[pt,ke`
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
    `];Kn([B()],ct.prototype,"name",2);Kn([B()],ct.prototype,"limit",2);Kn([B()],ct.prototype,"sources",2);Kn([B()],ct.prototype,"columns",2);Kn([B()],ct.prototype,"error",2);ct=Kn([Se("projection-dialog")],ct);const n0={id:"projection",name:"Projection (virtual tables)",type:"source",version:"0.1.0",description:'Virtual tables ("Projections") whose rows are derived live from other tables — database views and JOINs that look and act like tables.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h7v10H4z"/><path d="M13 7h7v10h-7z"/><path d="M11 12h2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/projection.ts"};function r0(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"projection",create:t=>Vv(e.store,t)}),e.ui.registerTableButton({id:"projection:new",label:"New Projection",icon:"add_box",tooltip:"Create a virtual table using THIS table as the base (view / JOIN)",onClick:(t,{tableId:n})=>void Lc(t,{baseTableId:n})}),e.ui.registerTableButton({id:"projection:edit",label:"Edit Join",icon:"call_merge",tooltip:"Edit this projection’s sources, joins and which columns it includes",visible:t=>t.source?.type==="projection",onClick:(t,{tableId:n})=>void Lc(t,{editTableId:n})})}async function i0(e,t,n,r,i){const s=await e.store.tables.find({workspaceId:t}),o=new Map;for(const u of s)o.has(u.name)||o.set(u.name,u);const l={};for(const u of n.sources)l[u.alias]=o.get(u.tableName)?.columns??[];return Tu(n,l,r,i)}async function Lc(e,t){const n=e.workspaceId();if(!n)return;const r=await e.store.tables.find({workspaceId:n}),i=l=>({id:l.id,name:l.name,columns:l.columns}),s=ct.instance??s0();if(t.editTableId){const l=r.find(u=>u.id===t.editTableId)??null;if(!l||l.source?.type!=="projection")return;s.open({candidates:r.filter(u=>u.id!==l.id).map(i),initial:{name:l.name,spec:l.source.config},onSave:Mc(e,n,l)});return}const o=r.find(l=>l.id===t.baseTableId);o&&s.open({base:i(o),candidates:r.map(i),onSave:Mc(e,n,null,o)})}function Mc(e,t,n,r){return async(i,s)=>{const o=await i0(e,t,s,n?.columns??[],n?.deletedColumns??[]),l=Or(s).size===0,u={type:"projection",config:s};n?await e.store.tables.patch(n.id,{name:i,columns:o,source:u,readonly:l,updatedAt:Date.now()}):await e.store.tables.insert({id:xe(),workspaceId:t,name:i,code:De(i),columns:o,view:"table",source:u,readonly:l,...r?Xp(s,r):{},updatedAt:Date.now()})}}function s0(){const e=document.createElement("projection-dialog");return document.body.appendChild(e),e}const o0=Object.freeze(Object.defineProperty({__proto__:null,init:r0,meta:n0},Symbol.toStringTag,{value:"Module"})),a0={id:"command-palette-button",name:"Command Palette Button",type:"ui",version:"0.1.0",description:"Header “>” button that opens the command palette (also Ctrl/⌘K).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/command-palette-button.ts"};function l0(e){e.ui.registerHeaderButton({id:"command-palette:open",label:"Commands",icon:"chevron_right",tooltip:"Open the command palette (Ctrl/⌘K)",onClick:()=>e.ui.openCommandPalette()})}const c0=Object.freeze(Object.defineProperty({__proto__:null,init:l0,meta:a0},Symbol.toStringTag,{value:"Module"})),u0=[qv,Qb,pp,zp,xm,Im,Ng,Zg,ob,yp,Tb,pb,Fb,Wb,tw,ow,uw,pw,ww,dy,my,xy,Iy,Oy,Ny,lv,Vd,Uv,o0,c0];function d0(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const Xd=u0.map(e=>{const t=d0(e);return{id:t.id,meta:t,module:e}}),h0=Xd;function Ro(e){return`builtin:${e}`}async function f0(e){const t=[];for(const n of Xd)if(!await p0(e,n)){t.push(n);try{await n.module.init?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"init",error:r})}}return async()=>{for(const n of t)try{await n.module.load?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"load",error:r})}}}async function p0(e,t){return t.meta.fixed?!1:yt==="all-optional"?!0:(await e.store.plugins.findOne(Ro(t.id)))?.enabled===!1}function Jd(e){return e.filter(t=>t.status!=="minimized")}function m0(e,t,n){if(e<=0)return[];const r=Math.ceil(Math.sqrt(e)),i=Math.ceil(e/r),s=(t.w-n*(r+1))/r,o=(t.h-n*(i+1))/i;return Array.from({length:e},(l,u)=>{const h=u%r,p=Math.floor(u/r);return{x:t.x+n+h*(s+n),y:t.y+n+p*(o+n),w:s,h:o}})}function Vn(){return Ew()}function g0(){for(const e of Vn())e.close?.()}function b0(){for(const e of Vn())e.minimize?.()}function w0(){for(const e of Vn())e.normalize?.()}function y0(){for(const e of Vn())e.maximize?.()}function Zd(){const e=document.getElementById("easydb-panels"),t=e?.clientWidth??window.innerWidth,n=e?.clientHeight??window.innerHeight,r=Ni()?.snapshot(),i=r?.scale&&r.scale>0?r.scale:1,s=r?.x??0,o=r?.y??0;return{x:-s/i,y:-o/i,w:t/i,h:n/i}}function eh(e,t,n,r,i){e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(n)}px`,e.style.width=`${Math.round(r)}px`,e.style.height=`${Math.round(i)}px`}function v0(){const e=Jd(Vn()).reverse();if(e.length===0)return;const t=Zd(),n=32,r=Math.min(680,Math.max(320,t.w*.6)),i=Math.min(480,Math.max(240,t.h*.6));e.forEach((s,o)=>{s.normalize?.(),eh(s,t.x+24+o*n,t.y+24+o*n,r,i)}),th()}function th(){Ad(),mv()}function $0(){const e=Jd(Vn()).reverse();if(e.length===0)return;const n=m0(e.length,Zd(),8);e.forEach((r,i)=>{r.normalize?.();const s=n[i];s&&eh(r,s.x,s.y,s.w,s.h)}),th()}function x0(e){const t=[{id:"windows:minimize-all",title:"Minimize all windows",icon:"remove",run:b0},{id:"windows:restore-all",title:"Restore all windows",icon:"crop_square",run:w0},{id:"windows:maximize-all",title:"Maximize all windows",icon:"fullscreen",run:y0},{id:"windows:cascade",title:"Cascade windows",icon:"view_agenda",run:v0},{id:"windows:tile",title:"Tile windows",icon:"grid_view",run:$0},{id:"windows:close-all",title:"Close all windows",icon:"close",run:g0}];for(const i of t)e.ui.registerCommand({id:i.id,title:i.title,group:"Windows",icon:i.icon,run:i.run});const n="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md",r="https://github.com/cawoodm/easydbaccess/tree/main/docs";e.ui.registerCommand({id:"app:search",title:"Search all tables",group:"App",icon:"search",keywords:["find","global search","filter"],run:()=>{document.dispatchEvent(new CustomEvent("easydb:focus-search"))}}),e.ui.registerCommand({id:"app:plugins",title:"Plugins",group:"App",icon:"extension",keywords:["plugin manager","install","extensions"],run:i=>i.ui.openPluginManager()}),e.ui.registerCommand({id:"app:changelog",title:"Changelog",group:"App",icon:"history",keywords:["releases","version","whats new"],run:()=>{window.open(n,"_blank","noopener")}}),e.ui.registerCommand({id:"app:docs",title:"Documentation",group:"App",icon:"menu_book",keywords:["docs","help","guide","manual"],run:()=>{window.open(r,"_blank","noopener")}})}async function k0(e){if(yt==="url-plugins"||yt==="all-optional")return async()=>{};const t=e.workspaceId();if(!t)return async()=>{};const r=(await e.store.workspaces.findOne(t))?.pluginUrls??[],i=[];for(const s of r)try{const o=await e.store.plugins.findOne(s);if(o&&o.enabled===!1)continue;let l=o?.cachedBody??"";if(l)C0(e,s,l);else{try{l=await nh(s)}catch(p){await e.store.plugins.upsert({url:s,enabled:o?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${p.message}`}),e.events.emit("plugin:error",{url:s,phase:"fetch",error:p});continue}await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),cachedBody:l})}const u=new Blob([l],{type:"text/javascript"}),h=URL.createObjectURL(u);try{const p=await import(h);await p.init?.(e),i.push({url:s,mod:p})}finally{setTimeout(()=>URL.revokeObjectURL(h),5e3)}}catch(o){await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),lastError:`init: ${o.message}`}),e.events.emit("plugin:error",{url:s,phase:"init",error:o})}return async()=>{for(const{url:s,mod:o}of i)try{await o.load?.(e)}catch(l){await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),lastError:`load: ${l.message}`}),e.events.emit("plugin:error",{url:s,phase:"load",error:l})}}}async function nh(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const n=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(n))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return n}function C0(e,t,n){return(async()=>{try{const r=await nh(t);if(r===n)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:r})}catch{}})()}let co=null;function oe(){return co||(co=_0()),co}async function _0(){const e=await ru();let t="";const n=Tf(e,()=>t),r=Af(),i=jf(),s=new Map;n.tables.subscribe(A=>{s.clear();for(const L of A)s.set(L.id,L)});const o={...n.tables,insert:A=>(s.set(A.id,A),n.tables.insert(A)),upsert:A=>(s.set(A.id,A),n.tables.upsert(A))};let l=null;const u={get backend(){if(!l)throw new Error("[host] row-source ctx used before app init completed");return l.backend},events:r,settings:n.settings,workspaceId:()=>w},h=If({base:{...n,tables:o},providers:i.rowSources,tableById:A=>s.get(A),ctx:u}),p=S0(),g=await h.workspaces.find();let w;if(p){const A=ih(p),L=g.find(M=>M.id===A||M.name===p);L?w=L.id:w=(await h.workspaces.insert({id:A,name:p,createdAt:Date.now(),pluginUrls:[]})).id}else{const A=E0(),L=A?g.find(M=>M.id===A):void 0;L?w=L.id:g.length>0?w=g[0].id:w=(await h.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}t=w,T0(w);const y=Bf({store:h,events:r,registries:i,workspaceId:()=>w});l=y,x0(y),r.on("import:after",({source:A,tableId:L,rowCount:M})=>{A!=="datasette"&&y.store.tables.findOne(L).then(F=>{y.ui.dialogs.toast(`Imported ${M} row${M===1?"":"s"} into "${F?.name??L}".`,{kind:"success",title:A.toUpperCase()+" import"})})}),r.on("plugin:error",({url:A,phase:L,error:M})=>{y.ui.dialogs.toast(`[${L}] ${M?.message??String(M)}`,{kind:"error",title:`Plugin: ${A}`})});const $=await f0(y),x=await k0(y);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:w}),await $(),await x(),yt==="all-optional"?y.ui.dialogs.toast("Safe mode is ON: only fixed built-ins (Settings, core rendering) loaded. All other built-in plugins and URL-installed plugins are disabled for this session only — nothing was changed. Disable the culprit below, then reload without ?safemode.",{kind:"warning",title:"Safe mode"}):yt==="url-plugins"&&y.ui.dialogs.toast("Safe mode (URL plugins) is ON: URL-installed plugins were not loaded this session. Built-in plugins are unaffected. Reload without ?safemode1 to restore them.",{kind:"warning",title:"Safe mode"}),yt!=="off"&&y.ui.openPluginManager()}),globalThis.api=y,{store:h,events:r,workspaceId:w,registries:i,api:y}}function S0(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const rh="eda:lastWorkspaceId";function E0(){try{return globalThis.localStorage?.getItem(rh)??null}catch{return null}}function T0(e){try{globalThis.localStorage?.setItem(rh,e)}catch{}}function ih(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var I0=Object.defineProperty,A0=Object.getOwnPropertyDescriptor,us=(e,t,n,r)=>{for(var i=r>1?void 0:r?A0(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&I0(t,n,i),i};let zn=class extends ve{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&gt(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let n;try{n=Un(this.text)}catch(o){this.errorMsg=`Couldn't parse the CSV: ${o.message}`;return}if(n.columns.length===0||n.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const r=await oe(),i=crypto.randomUUID();await r.store.tables.insert({id:i,workspaceId:r.workspaceId,name:t,code:De(t),columns:n.columns,view:"table",updatedAt:Date.now()});const s=n.rows.map(o=>({id:crypto.randomUUID(),tableId:i,data:o,updatedAt:Date.now()}));await r.store.rows(i).bulkInsert(s),r.api.ui.dialogs.toast(`Imported ${n.rows.length} row${n.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return C`
      <dialog @cancel=${this.close} @keydown=${mt}>
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
    `}};zn.styles=[pt,ke`
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
    `];us([B()],zn.prototype,"name",2);us([B()],zn.prototype,"text",2);us([B()],zn.prototype,"errorMsg",2);zn=us([Se("csv-paste-dialog")],zn);const _a=new Set;let jc=!1;function R0(){return _a.size>0}function O0(e){_a.add(e),P0()}function D0(e){_a.delete(e)}function sh(e,t){const n=()=>{t.open&&O0(e)};t.addEventListener("input",n),t.addEventListener("change",n),t.addEventListener("close",()=>D0(e))}function P0(){jc||(jc=!0,window.addEventListener("beforeunload",e=>{R0()&&(e.preventDefault(),e.returnValue="")}))}var L0=Object.defineProperty,M0=Object.getOwnPropertyDescriptor,Sa=(e,t,n,r)=>{for(var i=r>1?void 0:r?M0(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&L0(t,n,i),i};const j0=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return the value this column should display.
  return row.name ?? '';
}
`;let Ot=class extends ve{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),Ot.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ot.instance===this&&(Ot.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&gt(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:j0,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(n=>{this.resolver=n})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return C`
      <dialog @cancel=${this.onCancel} @keydown=${mt}>
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
    `}};Ot.instance=null;Ot.styles=[pt,ke`
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
    `];Sa([B()],Ot.prototype,"text",2);Sa([B()],Ot.prototype,"columnLabel",2);Ot=Sa([Se("script-editor-dialog")],Ot);function Nc(e){const t={...e.orig??{},field:e.field.trim(),label:e.label.trim()||e.field.trim(),type:e.type};return e.renderer?t.renderer=e.renderer:delete t.renderer,e.script?t.script=e.script:delete t.script,e.max!=null&&e.max>0?t.max=e.max:delete t.max,e.unique?t.unique=!0:delete t.unique,e.notnull?t.notnull=!0:delete t.notnull,e.hidden?t.hidden=!0:delete t.hidden,e.sortable===!1?t.sortable=!1:delete t.sortable,e.filterable===!1?t.filterable=!1:delete t.filterable,t}function oh(e){if(e.source?.type!=="projection")return null;const t=e.source.config;return t&&Array.isArray(t.sources)?t:null}function N0(e,t,n,r){return{projections:t.filter(s=>{if(s.id===r)return!1;const o=oh(s);return!!o&&o.sources.some(l=>l.tableName===e)}),views:n.filter(s=>s.tableName===e)}}function z0(e,t,n){return e.sources.some(r=>r.tableName===t)?{...e,sources:e.sources.map(r=>r.tableName===t?{...r,tableName:n}:r)}:null}function U0(e){const t=[];return e.projections.length>0&&t.push(`${zc(e.projections.length,"projection")} (${Uc(e.projections.map(n=>n.name))})`),e.views.length>0&&t.push(`${zc(e.views.length,"view")} (${Uc(e.views.map(n=>n.name||"untitled"))})`),t.length>0?t.join(" and "):null}function zc(e,t){return`${e} ${t}${e===1?"":"s"}`}function Uc(e){const t=e.slice(0,3).map(n=>`"${n}"`);return e.length>3?`${t.join(", ")} and ${e.length-3} more`:t.join(", ")}var F0=Object.defineProperty,B0=Object.getOwnPropertyDescriptor,Xe=(e,t,n,r)=>{for(var i=r>1?void 0:r?B0(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&F0(t,n,i),i};const q0=["string","number","boolean","date","datetime"];async function H0(e,t,n,r){const i=await oe(),s=(await i.store.viewInstances.find()).filter(o=>o.tableId===e||o.tableName===t);for(const o of s)o.tableName!==n&&await i.store.viewInstances.patch(o.id,{tableName:n,updatedAt:Date.now()});for(const o of r?.projections??[]){const l=oh(o),u=l&&z0(l,t,n);u&&await i.store.tables.patch(o.id,{source:{type:"projection",config:u},updatedAt:Date.now()})}}function K0(e,t,n){const r=`Renaming "${e}" to "${t}" affects ${n}.

They reference this table by name, so they will be updated to point at "${t}". Continue?`,i=st.instance;return i?i.confirm(r,"Rename table"):Promise.resolve(window.confirm(r))}let Be=class extends ve{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.columnActions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&gt(this.dialogEl,e),this.dialogEl&&sh("columns-editor",this.dialogEl)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const n=await oe();if(this.rendererOptions=[...n.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.columnActions=[...n.registries.columnEditorActions],this.rendererSubUnsub=n.events.on("app:ready",()=>{this.rendererOptions=[...n.registries.cellRenderers.keys()].sort(),this.columnActions=[...n.registries.columnEditorActions]}),e){const r=await oe(),i=await r.store.tables.findOne(e);if(!i)return;this.mode="edit",this.editTableId=e,this.name=i.name,this.tableTitle=i.title??"",this.tableReadonly=!!i.readonly,this.columns=i.columns.map(o=>({field:o.field,label:o.label,type:o.type,renderer:o.renderer,script:o.script,max:o.max,unique:o.unique,notnull:o.notnull,hidden:o.hidden,sortable:o.sortable,filterable:o.filterable,origField:o.field,orig:o}));const s=await r.store.rows(e).find();this.previewRows=s.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,n)=>n!==e)}moveColumn(e,t){const n=e+t;if(n<0||n>=this.columns.length)return;const r=[...this.columns],[i]=r.splice(e,1);r.splice(n,0,i),this.columns=r}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,n){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const r=n.getBoundingClientRect(),i=e.clientY<r.top+r.height/2;this.dropTargetIdx=t,this.dropEdge=i?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const n=this.dragSrcIdx,r=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,n===null||n===t||!r)return;const i=[...this.columns],[s]=i.splice(n,1);let o=t+(n<t?-1:0);r==="after"&&(o+=1),i.splice(o,0,s),this.columns=i}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}async runColumnAction(e){this.errorMsg="";const t=await oe();try{const n=await e.run(t.api,{columns:this.columns.map(i=>Nc(i)),...this.editTableId?{tableId:this.editTableId}:{}});if(!n)return;const r=new Map(n.map(i=>[i.field,i]));this.columns=this.columns.map(i=>{const s=r.get(i.field);return s?{...i,label:s.label??i.label,type:s.type??i.type,renderer:s.renderer,script:s.script}:i})}catch(n){this.errorMsg=`${e.label} failed: ${n.message}`}}async editScript(e){const t=Ot.instance;if(!t)return;const n=this.columns[e];if(!n)return;const r=await t.open(n.script??"",n.label||n.field);r!==null&&this.patchColumn(e,{script:r.trim()?r:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const n=await oe(),r=(await n.store.tables.find()).filter(h=>h.workspaceId===n.workspaceId),i=t.toLowerCase(),s=r.find(h=>h.name.toLowerCase()===i&&h.id!==this.editTableId);if(s){this.errorMsg=`A table named "${s.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const o=new Set;for(const h of this.columns){const p=h.field.trim();if(!p){this.errorMsg="Column field names cannot be empty.";return}if(o.has(p)){this.errorMsg=`Duplicate column field: ${p}`;return}o.add(p)}const l=this.tableTitle.trim(),u=this.columns.map(Nc);if(this.mode==="edit"&&this.editTableId){const h=this.editTableId,p=await n.store.tables.findOne(h),g=new Map((p?.columns??[]).map(q=>[q.field,q])),w=u.filter(q=>{const V=g.get(q.field);return q.unique&&!V?.unique||q.notnull&&!V?.notnull||q.max&&q.max>0&&q.max!==V?.max});if(w.length>0){const q=await n.store.rows(h).find(),V=G0(w,q);if(V.length>0){this.errorMsg=`Cannot save: ${V.length} existing ${V.length===1?"row violates":"rows violate"} the new constraints.
${V.slice(0,5).join(`
`)}${V.length>5?`
…and ${V.length-5} more.`:""}`;return}}const y=new Set(this.columns.map(q=>q.origField).filter(q=>!!q)),$=new Set(u.map(q=>q.field)),x=(p?.columns??[]).map(q=>q.field).filter(q=>!y.has(q)),A=p?.deletedColumns??[],L=[...new Set([...A,...x])].filter(q=>!$.has(q));let M=null;if(p&&p.name!==t){const q=(await n.store.viewInstances.find()).filter(ae=>ae.workspaceId===n.workspaceId);M=N0(p.name,r,q,h);const V=U0(M);if(V&&!await K0(p.name,t,V))return}const F={name:t,title:l,columns:u,readonly:this.tableReadonly,updatedAt:Date.now()};(L.length>0||A.length>0)&&(F.deletedColumns=L);const K=p?.name;await n.store.tables.patch(h,F);const W=x.filter(q=>!$.has(q)),ie=this.fieldRenames();if(!p?.source&&(W.length>0||ie.length>0)){const q=await n.store.rows(h).find();for(const V of q){let ae=!1,ee={...V.data};const ce=Il(ee,ie);ce&&(ee=ce,ae=!0);for(const N of W)N in ee&&(delete ee[N],ae=!0);ae&&await n.store.rows(h).patch(V.id,{data:ee,updatedAt:Date.now()})}}K!==void 0&&K!==t&&await H0(h,K,t,M)}else await n.store.tables.insert({id:xe(),workspaceId:n.workspaceId,name:t,title:l,code:De(t),columns:u,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return C`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=this.fieldRenames(),t=e.length>0?this.previewRows.map(i=>({...i,data:Il(i.data,e)??i.data})):this.previewRows,n=new Map;for(const i of this.columns){if(!i.unique)continue;const s=new Set,o=new Set;for(const l of t){const u=l.data[i.field];u==null||u===""||(s.has(u)&&o.add(u),s.add(u))}n.set(i.field,o)}const r=this.columns.filter(i=>!i.hidden);return C`
      <div class="preview">
        <h3>
          Live preview — first ${this.previewRows.length}
          row${this.previewRows.length===1?"":"s"}
        </h3>
        <table>
          <thead>
            <tr>
              ${r.map(i=>C`<th title=${i.field}>${i.label||i.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${t.map(i=>C`
                <tr>
                  ${r.map(s=>{const o=i.data[s.field],l=W0(s,o,n.get(s.field));return C`<td class=${l?"violation":""} title=${l??""}>
                      ${V0(o)}
                    </td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}fieldRenames(){return this.mode!=="edit"?[]:this.columns.filter(e=>e.origField&&e.origField!==e.field.trim()).map(e=>({from:e.origField,to:e.field.trim()}))}renameDetected(){return this.fieldRenames().length>0}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return C`
      <dialog @cancel=${this.close} @keydown=${mt}>
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
              ${this.columns.map((n,r)=>{const i=this.dragSrcIdx===r,s=this.dropTargetIdx===r,o=s&&this.dropEdge==="before"?" drop-before":s&&this.dropEdge==="after"?" drop-after":"";return C`
                  <div
                    class=${`col-row${i?" drag-source":""}${o}`}
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
                      ${q0.map(l=>C`<option value=${l} ?selected=${l===n.type}>${l}</option>`)}
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
    `}};Be.styles=[bt,pt,ke`
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
    `];Xe([B()],Be.prototype,"mode",2);Xe([B()],Be.prototype,"editTableId",2);Xe([B()],Be.prototype,"name",2);Xe([B()],Be.prototype,"tableTitle",2);Xe([B()],Be.prototype,"tableReadonly",2);Xe([B()],Be.prototype,"columns",2);Xe([B()],Be.prototype,"errorMsg",2);Xe([B()],Be.prototype,"noticeMsg",2);Xe([B()],Be.prototype,"dragSrcIdx",2);Xe([B()],Be.prototype,"dropTargetIdx",2);Xe([B()],Be.prototype,"dropEdge",2);Xe([B()],Be.prototype,"previewRows",2);Xe([B()],Be.prototype,"rendererOptions",2);Xe([B()],Be.prototype,"columnActions",2);Be=Xe([Se("new-table-dialog")],Be);function V0(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function W0(e,t,n){const r=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&r)return`${e.label}: empty`;if(r)return null;if(e.type==="number"&&typeof t!="number"){const i=Number(t);if(!Number.isFinite(i))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!r){const i=new Date(String(t));if(Number.isNaN(i.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&n?.has(t)?`${e.label}: duplicate`:null}function G0(e,t){const n=[];for(const r of e)if(r.notnull&&t.forEach((i,s)=>{const o=i.data[r.field];(o==null||typeof o=="string"&&o.trim()==="")&&n.push(`Row ${s+1}: ${r.label} is empty.`)}),r.max!=null&&r.max>0&&t.forEach((i,s)=>{const o=i.data[r.field];typeof o=="string"&&o.length>r.max?n.push(`Row ${s+1}: ${r.label} length ${o.length} > max ${r.max}.`):typeof o=="number"&&o>r.max&&n.push(`Row ${s+1}: ${r.label} value ${o} > max ${r.max}.`)}),r.unique){const i=new Map;t.forEach((s,o)=>{const l=s.data[r.field];l==null||l===""||(i.has(l)?n.push(`Row ${o+1}: ${r.label} duplicates row ${i.get(l)+1} ("${String(l)}").`):i.set(l,o))})}return n}var Y0=Object.defineProperty,Q0=Object.getOwnPropertyDescriptor,Je=(e,t,n,r)=>{for(var i=r>1?void 0:r?Q0(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Y0(t,n,i),i};const X0='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',J0=C`<span class="mi sm">extension</span>`,Fc="plugin:catalogUrls";function wi(){return new URL("/easydbaccess3/plugins/catalog.json",location.origin).toString()}const Z0=[["installed","Installed"],["built-in","Built-in"],["fixed","Fixed"]],ah=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],e$=new Map(ah),t$={off:"Filter by status — click: only enabled → only disabled → off",on:"Showing only enabled plugins — click to show only disabled",not:"Showing only disabled plugins — click to clear"};let qe=class extends ve{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[wi()],this.activeCatalogUrl=wi(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&gt(this.dialogEl,e)}async open(){const e=await oe(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const n=await e.store.plugins.find();this.records=new Map(n.map(s=>[s.url,s]));const r=await e.store.settings.findOne(Fc),i=Array.isArray(r?.value)?r.value.filter(s=>typeof s=="string"):[];this.catalogUrls=i.length>0?i:[wi()],this.activeCatalogUrl=this.catalogUrls[0]??wi(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json(),r=Array.isArray(n.plugins)?n.plugins:[];this.catalog=r.map(i=>({...i,absUrl:new URL(i.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const n=(await(await oe()).store.settings.findOne("server-sync:url"))?.value;if(typeof n!="string"||n.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const i=`${n.replace(/\/+$/,"")}/plugins/registry`;try{const s=await fetch(i,{cache:"no-store"});if(!s.ok)throw new Error(`HTTP ${s.status}`);const o=await s.json(),l=Array.isArray(o.plugins)?o.plugins:[];this.serverCatalog=l.map(u=>({...u,absUrl:new URL(u.url,i).toString()})),this.serverCatalogError=null}catch(s){this.serverCatalog=[],this.serverCatalogError=s.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await oe()).store.settings.upsert({name:Fc,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await oe()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const n=await oe();await n.store.workspaces.patch(n.workspaceId,{pluginUrls:this.urls}),await n.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const n=await oe(),r=this.records.get(e);await n.store.plugins.upsert({...r??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...r,url:e,enabled:t,lastFetched:r?.lastFetched??0}))}async removePlugin(e){const t=await oe();this.urls=this.urls.filter(n=>n!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const n=await oe(),r=Ro(e),i=this.records.get(r);await n.store.plugins.upsert({...i??{url:r,lastFetched:0},url:r,enabled:t,lastFetched:i?.lastFetched??0}),this.records=new Map(this.records.set(r,{...i,url:r,enabled:t,lastFetched:i?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await oe()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await oe();try{const n=await fetch(e.absUrl,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status} ${n.statusText}`);const r=await n.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:r});const i=new Blob([r],{type:"text/javascript"}),s=URL.createObjectURL(i);try{const l=await import(s);await l.init?.(t.api),await l.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(s),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const o=await t.store.plugins.find();this.records=new Map(o.map(l=>[l.url,l])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(n){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${n.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${n.message}`,{kind:"error",title:"Plugin error"})}finally{const n=new Set(this.installing);n.delete(e.absUrl),this.installing=n}}renderTri(e,t,n,r="",i){const s=i?i[t??"off"]:t==="on"?`Showing only ${e} plugins — click to exclude`:t==="not"?`Hiding ${e} plugins — click to clear`:`Filter by ${e} — click: show only → exclude → off`;return C`
      <button
        type="button"
        class=${`tri${r?` ${r}`:""}${t?` ${t}`:""}`}
        title=${s}
        aria-pressed=${t!==void 0}
        @click=${n}
      >
        <span class="tri-mark">${t==="on"?"✓":t==="not"?"≠":""}</span>${e}
      </button>
    `}cycleState(e,t){const n=e.get(t),r=new Map(e);return n===void 0?r.set(t,"on"):n==="on"?r.set(t,"not"):r.delete(t),r}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}cycleStatusFilter(){this.statusFilter=this.statusFilter===void 0?"on":this.statusFilter==="on"?"not":void 0}buildRows(){const e=new Map,t=new Map;for(const{id:n,meta:r}of h0){const i=r.fixed?!0:this.records.get(Ro(n))?.enabled!==!1,s=!r.fixed&&yt==="all-optional",o=r.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${n}`,{id:n,name:r.name,...r.type?{type:r.type}:{},...r.description?{meta:r.description}:{meta:"Built-in plugin"},...r.author?{author:r.author}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},categories:new Set(o),enabled:i,status:i&&!s?"enabled":"disabled",fixed:!!r.fixed,...s?{skipped:!0}:{}})}for(const n of[...this.catalog,...this.serverCatalog]){const r=this.urls.includes(n.absUrl),i=this.records.get(n.absUrl),s=r?["available","installed"]:["available"],o=e.get(n.id),l=i?.enabled!==!1,u=r&&yt!=="off";e.set(n.id,{id:n.id,name:n.name,url:n.absUrl,...n.type?{type:n.type}:{},...n.icon?{icon:n.icon}:{},...n.repo?{repo:n.repo}:{},...n.author?{author:n.author}:{},meta:n.description??n.absUrl,categories:o?new Set([...o.categories,...s]):new Set(s),enabled:l,...r?{status:l&&!u?"enabled":"disabled"}:{},...u?{skipped:!0}:{},installing:this.installing.has(n.absUrl)}),t.set(n.absUrl,n.id)}for(const n of this.urls){const r=t.get(n);if(r){e.get(r).categories.add("installed");continue}const i=this.records.get(n),s=i?.lastFetched?new Date(i.lastFetched).toLocaleString():"never",o=i?.enabled!==!1;e.set(`url:${n}`,{id:n,name:n,urlOnly:!0,url:n,meta:i?.lastError??`Last fetched: ${s}`,metaIsError:!!i?.lastError,categories:new Set(["installed"]),enabled:o,status:o&&yt==="off"?"enabled":"disabled",...yt!=="off"?{skipped:!0}:{}})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),n=[],r=[];for(const[u,h]of this.filterStates)(h==="on"?n:r).push(u);const i=[],s=[];for(const[u,h]of this.typeFilters)(h==="on"?i:s).push(u);const o=this.statusFilter==="on"?"enabled":this.statusFilter==="not"?"disabled":void 0,l=e.filter(u=>!(n.length&&!n.some(h=>u.categories.has(h))||r.some(h=>u.categories.has(h))||i.length&&!(u.type&&i.includes(u.type))||u.type&&s.includes(u.type)||o&&u.status!==o));return t?l.filter(u=>[u.id,u.name,u.type,u.meta,u.author].some(h=>h?.toLowerCase().includes(t))):l}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),n=!!e.url&&e.categories.has("installed"),r=!!e.url&&!e.categories.has("installed");return C`
      <div
        class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}${e.skipped?" skipped":""}`}
      >
        <span class="row-icon">${e.icon?On(e.icon):J0}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?C`<span class="row-id">${e.id}</span>`:""}${e.type?C`<span class="row-type" title="Plugin type"
                  >${e$.get(e.type)??e.type}</span
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
              >${On(X0)}</a
            >`:C`<span></span>`}
        ${e.fixed?C`<span class="mi sm lock-icon" title="Always on — cannot be disabled">lock</span>`:t?C`<label
                class="switch"
                title=${e.skipped?"Your saved setting — safe mode is what stopped this plugin loading now":"Enable / disable"}
              >
                <input
                  type="checkbox"
                  .checked=${e.enabled}
                  @change=${i=>this.onRowToggle(e,i.target.checked)}
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
      <dialog @cancel=${this.close} @keydown=${mt}>
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
                ${Z0.map(([t,n])=>this.renderTri(n,this.filterStates.get(t),()=>this.cycleFilter(t)))}
                ${this.renderTri("Enabled",this.statusFilter,()=>this.cycleStatusFilter(),"status",t$)}
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
              ${ah.map(([t,n])=>this.renderTri(n,this.typeFilters.get(t),()=>this.cycleTypeFilter(t)))}
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
    `}};qe.styles=[bt,pt,ke`
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
    `];Je([B()],qe.prototype,"urls",2);Je([B()],qe.prototype,"records",2);Je([B()],qe.prototype,"addUrl",2);Je([B()],qe.prototype,"catalog",2);Je([B()],qe.prototype,"catalogError",2);Je([B()],qe.prototype,"serverCatalog",2);Je([B()],qe.prototype,"serverCatalogError",2);Je([B()],qe.prototype,"installing",2);Je([B()],qe.prototype,"catalogUrls",2);Je([B()],qe.prototype,"activeCatalogUrl",2);Je([B()],qe.prototype,"search",2);Je([B()],qe.prototype,"filterStates",2);Je([B()],qe.prototype,"typeFilters",2);Je([B()],qe.prototype,"statusFilter",2);qe=Je([Se("plugin-manager-dialog")],qe);var n$=Object.defineProperty,r$=Object.getOwnPropertyDescriptor,Ft=(e,t,n,r)=>{for(var i=r>1?void 0:r?r$(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&n$(t,n,i),i};const fr="__general__";let Ze=class extends ve{constructor(){super(...arguments),this.tabs=[],this.active=fr,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.secretError="",this.openHelp="",this.dialogEl=null,this.attemptClose=e=>{const t=this.invalidSecrets();if(t.length>0){e?.preventDefault();const r=t[0];this.active=r.tab.id,this.secretError=`“${r.field.label}” must be empty or a \${secret:name} reference. Move the value into the secrets store (General tab) and reference it, so the raw secret is never saved or synced.`;return}const n=this.danglingSecrets();if(n.length>0){e?.preventDefault();const r=n[0];this.active=r.tab.id;const i=r.names.map(s=>`“${s}”`).join(", ");this.secretError=`“${r.field.label}” references ${i}, which the secrets store does not have. Add it in the General tab or correct the name — an unknown reference is passed on as the literal \${secret:name} text.`;return}this.secretError="",this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.attemptClose()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&gt(this.dialogEl,e),this.dialogEl&&sh("settings",this.dialogEl)}async open(){const e=await oe(),t=[...e.registries.settings];this.tabs=t.map(([s,o])=>({id:s,name:o.name,fields:o.fields}));const n=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=n?.title??"";const r={},i={};for(const s of this.tabs)for(const o of s.fields){const l=`${s.id}:${o.key}`,u=await e.api.settings.placement(s.id,o.key);u==="user"?(r[l]=Bo(l),i[l]="user"):u==="workspace"?(r[l]=(await e.store.settings.findOne(l))?.value,i[l]="workspace"):(r[l]=o.default,i[l]=o.scope??"workspace")}this.values=r,this.placements=i,this.secretsText=qi(),this.active=fr,await this.updateComplete,this.dialogEl?.showModal()}static rawSecret(e){return typeof e=="string"&&e!==""&&!e.includes("${secret:")}invalidSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields)n.type==="secret"&&Ze.rawSecret(this.values[`${t.id}:${n.key}`])&&e.push({tab:t,field:n});return e}static secretRefs(e){return typeof e!="string"?[]:[...e.matchAll(/\$\{secret:([^}]*)\}/g)].map(t=>(t[1]??"").trim())}missingRefs(e){const t=new Set(Object.keys(xr(this.secretsText)));return Ze.secretRefs(e).filter(n=>!t.has(n))}danglingSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields){const r=this.missingRefs(this.values[`${t.id}:${n.key}`]);r.length>0&&e.push({tab:t,field:n,names:r})}return e}async setValue(e,t,n){const r=`${e.id}:${t.key}`;this.values={...this.values,[r]:n},this.clearSecretErrorIfFixed(),await(await oe()).api.settings.set(e.id,t.key,n,this.placements[r])}async toggleScope(e,t,n){const r=`${e.id}:${t.key}`,i=n?"user":"workspace";this.placements={...this.placements,[r]:i},await(await oe()).api.settings.set(e.id,t.key,this.values[r],i)}clearSecretErrorIfFixed(){this.secretError&&this.invalidSecrets().length===0&&this.danglingSecrets().length===0&&(this.secretError="")}onSecretsInput(e){this.secretsText=e.target.value,au(this.secretsText),this.clearSecretErrorIfFixed()}downloadSecrets(){const e=new Blob([this.secretsText],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="secrets.txt",n.click(),URL.revokeObjectURL(t)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await oe();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const n=`${e.id}:${t.key}`,r=this.values[n];switch(t.type){case"text":return C`<textarea
          .value=${String(r??"")}
          @change=${i=>this.setValue(e,t,i.target.value)}
        ></textarea>`;case"number":return C`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${i=>{const s=i.target.value;this.setValue(e,t,s===""?void 0:Number(s))}}
        />`;case"boolean":return C`<label class="scope"
          ><input
            type="checkbox"
            .checked=${!!r}
            @change=${i=>this.setValue(e,t,i.target.checked)}
          />
          enabled</label
        >`;case"date":return C`<input
          type="date"
          .value=${String(r??"")}
          @change=${i=>this.setValue(e,t,i.target.value)}
        />`;case"secret":return this.renderSecretControl(e,t,r);case"option":return C`<div class="radios">
          ${(t.options??[]).map(i=>C`<label
              ><input
                type="radio"
                name=${n}
                .checked=${r===i}
                @change=${()=>this.setValue(e,t,i)}
              />${i}</label
            >`)}
        </div>`;case"selection":{const i=Array.isArray(r)?r:[];return C`<div class="checks">
          ${(t.options??[]).map(s=>C`<label
              ><input
                type="checkbox"
                .checked=${i.includes(s)}
                @change=${o=>{const u=o.target.checked?[...i,s]:i.filter(h=>h!==s);this.setValue(e,t,u)}}
              />${s}</label
            >`)}
        </div>`}case"string":default:return C`<input
          type="text"
          .value=${String(r??"")}
          @change=${i=>this.setValue(e,t,i.target.value)}
        />`}}renderSecretControl(e,t,n){const r=Object.keys(xr(this.secretsText)),i=Ze.rawSecret(n)||this.missingRefs(n).length>0;return C`<div class="secret-row">
      <input
        type="text"
        class=${i?"invalid":""}
        placeholder="value or \${secret:name}"
        .value=${String(n??"")}
        @change=${s=>this.setValue(e,t,s.target.value)}
      />
      ${r.length>0?C`<select
            title="Insert a secret reference"
            @change=${s=>{const o=s.target.value;o&&this.setValue(e,t,`\${secret:${o}}`),s.target.value=""}}
          >
            <option value="">🔑 secret…</option>
            ${r.map(s=>C`<option value=${s}>${s}</option>`)}
          </select>`:re}
    </div>`}renderField(e,t){const n=`${e.id}:${t.key}`,r=!!(t.help||t.helpUrl),i=this.openHelp===n;return C`<div class="field">
      <div class="field-head">
        <label>${t.label}</label>
        ${r?C`<button
              type="button"
              class="help-btn"
              aria-label=${`Help for ${t.label}`}
              aria-expanded=${i?"true":"false"}
              title=${t.help??"More about this setting"}
              @click=${()=>this.openHelp=i?"":n}
            >
              <span class="mi sm" aria-hidden="true">info</span>
            </button>`:re}
        <label class="scope" title="Store on this device only (not synced)">
          <input
            type="checkbox"
            .checked=${this.placements[n]==="user"}
            @change=${s=>this.toggleScope(e,t,s.target.checked)}
          />
          user
        </label>
      </div>
      ${r&&i?C`<div class="help-panel">
            ${t.help?C`<p>${t.help}</p>`:re}
            ${t.helpUrl?C`<a href=${t.helpUrl} target="_blank" rel="noopener noreferrer"
                  >${t.helpLinkLabel||i$(t.helpUrl)}</a
                >`:re}
          </div>`:re}
      ${this.renderControl(e,t)}
      ${t.description?C`<p class="desc">${t.description}</p>`:re}
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
    `:re}render(){return C`
      <dialog @cancel=${this.attemptClose} @keydown=${mt}>
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
          ${this.secretError?C`<div class="secret-error" role="alert">${this.secretError}</div>`:re}
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
    `}};Ze.styles=[bt,pt,ke`
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
    `];Ft([B()],Ze.prototype,"tabs",2);Ft([B()],Ze.prototype,"active",2);Ft([B()],Ze.prototype,"values",2);Ft([B()],Ze.prototype,"placements",2);Ft([B()],Ze.prototype,"secretsText",2);Ft([B()],Ze.prototype,"workspaceTitle",2);Ft([B()],Ze.prototype,"secretError",2);Ft([B()],Ze.prototype,"openHelp",2);Ze=Ft([Se("settings-dialog")],Ze);function i$(e){try{return new URL(e).host}catch{return e}}const lh=5,Bc="palette:recent",ch="Recent";function s$(e,t,n=lh){return[t,...e.filter(r=>r!==t)].slice(0,n)}function o$(e){return Array.isArray(e)?e.filter(t=>typeof t=="string").slice(0,lh):[]}function a$(e,t){if(t.length===0)return e;const n=new Map(e.map(s=>[s.id,s])),r=[];for(const s of t){const o=n.get(s);o&&r.push({...o,group:ch})}if(r.length===0)return e;const i=new Set(r.map(s=>s.id));return[...r,...e.filter(s=>!i.has(s.id))]}var l$=Object.defineProperty,c$=Object.getOwnPropertyDescriptor,Wn=(e,t,n,r)=>{for(var i=r>1?void 0:r?c$(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&l$(t,n,i),i};const u$={[ch]:-1,Windows:0,Actions:1,App:2,Tables:3,Views:4};function qc(e){return u$[e]??3}function d$(e){return e?e.trimStart().startsWith("<svg")?C`<span class="cmd-svg">${No(e)}</span>`:C`<span class="mi sm">${e}</span>`:C`<span class="mi sm">chevron_right</span>`}let Zt=class extends ve{constructor(){super(...arguments),this.search="",this.items=[],this.selected=0,this.api=null,this.recentIds=[],this.onDialogClick=e=>{if(e.detail===0||!this.dialogEl)return;const t=this.dialogEl.getBoundingClientRect();e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom||this.close()}}async open(){const e=await oe();this.api=e.api,this.recentIds=o$((await e.api.store.settings.findOne(Bc))?.value),this.items=await this.buildItems(),this.search="",this.selected=0,await this.updateComplete,this.dialogEl&&!this.dialogEl.open&&this.dialogEl.showModal(),this.inputEl?.focus()}async buildItems(){const e=await oe(),t=e.api,n=[];for(const s of e.registries.commands)n.push({id:s.id,title:s.title,group:s.group??"Commands",...s.icon?{icon:s.icon}:{},haystack:[s.title,s.group,...s.keywords??[]].join(" ").toLowerCase(),run:()=>s.run(t)});for(const s of[...e.registries.headerButtons,...e.registries.footerButtons])n.push({id:`button:${s.id}`,title:s.label,group:"Actions",...s.icon?{icon:s.icon}:{},haystack:`${s.label} ${s.tooltip??""}`.toLowerCase(),run:()=>s.onClick(t)});const r=await t.store.tables.find({workspaceId:e.workspaceId});r.sort((s,o)=>s.name.localeCompare(o.name));for(const s of r)n.push({id:`goto:${s.id}`,title:`Go to: ${s.name}`,group:"Tables",icon:"table_chart",haystack:`${s.name} go to table`.toLowerCase(),run:()=>{Rd(s.id)}});const i=await t.store.viewInstances.find({workspaceId:e.workspaceId});i.sort((s,o)=>s.name.localeCompare(o.name));for(const s of i)n.push({id:`goto-view:${s.id}`,title:`Go to view: ${s.name}`,group:"Views",icon:"view_quilt",haystack:`${s.name} go to view`.toLowerCase(),run:async()=>{await Gd(s.id)}});return a$(n,this.recentIds).map((s,o)=>({it:s,i:o})).sort((s,o)=>qc(s.it.group)-qc(o.it.group)||s.i-o.i).map(({it:s})=>s)}get filtered(){const e=this.search.trim().toLowerCase();return e?this.items.filter(t=>t.haystack.includes(e)):this.items}close(){this.dialogEl?.close()}onInput(e){this.search=e.target.value,this.selected=0}onKeydown(e){const t=this.filtered;if(e.key==="ArrowDown")e.preventDefault(),this.selected=t.length?(this.selected+1)%t.length:0;else if(e.key==="ArrowUp")e.preventDefault(),this.selected=t.length?(this.selected-1+t.length)%t.length:0;else if(e.key==="Enter"){e.preventDefault();const n=t[this.selected];n&&this.execute(n)}}async execute(e){this.close(),this.remember(e.id);try{await e.run()}catch(t){console.error(`[command:${e.id}]`,t)}}async remember(e){this.recentIds=s$(this.recentIds,e);try{await this.api?.store.settings.upsert({name:Bc,value:this.recentIds})}catch(t){console.warn("[command-palette] could not save recent commands",t)}}render(){const e=this.filtered;let t="";return C`
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
          ${e.length===0?C`<div class="empty">No matching commands.</div>`:e.map((n,r)=>{const i=n.group!==t?(t=n.group,n.group):null;return C`
                  ${i?C`<div class="group-head">${i}</div>`:""}
                  <div
                    class=${`item${r===this.selected?" sel":""}`}
                    @mousemove=${()=>this.selected=r}
                    @click=${()=>this.execute(n)}
                  >
                    ${d$(n.icon)}
                    <span class="title">${n.title}</span>
                  </div>
                `})}
        </div>
      </dialog>
    `}};Zt.styles=[bt,ke`
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
    `];Wn([B()],Zt.prototype,"search",2);Wn([B()],Zt.prototype,"items",2);Wn([B()],Zt.prototype,"selected",2);Wn([Pt("dialog")],Zt.prototype,"dialogEl",2);Wn([Pt("input")],Zt.prototype,"inputEl",2);Zt=Wn([Se("command-palette-dialog")],Zt);var h$=Object.defineProperty,f$=Object.getOwnPropertyDescriptor,uh=(e,t,n,r)=>{for(var i=r>1?void 0:r?f$(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&h$(t,n,i),i};let zi=class extends ve{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await oe();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(n=>this.tables=n.filter(r=>r.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(n=>n.workspaceId===this.workspaceId),await Dd(),await wv()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?C``:C`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};zi.styles=ke`
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
  `;uh([B()],zi.prototype,"tables",2);zi=uh([Se("table-list")],zi);function yi(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function p$(e,t){const{from:n,to:r,name:i,mode:s}=t,o=await e.workspaces.get(n);if(await e.workspaces.put({id:r,name:i,createdAt:Date.now(),pluginUrls:s==="empty"?[]:[...o?.pluginUrls??[]]}),s==="empty")return r;if(s==="all"){const u=await e.tables.where("workspaceId").equals(n).toArray(),h=new Map;for(const y of u){const $=yi();h.set(y.id,$),await e.tables.put({...y,id:$,workspaceId:r,updatedAt:Date.now()})}for(const[y,$]of h){const x=await e.rows.where("tableId").equals(y).toArray();x.length>0&&await e.rows.bulkPut(x.map(A=>({...A,id:yi(),tableId:$})))}const p=await e.viewTemplates.where("workspaceId").equals(n).toArray(),g=new Map;for(const y of p){const $=yi();g.set(y.id,$),await e.viewTemplates.put({...y,id:$,workspaceId:r})}const w=await e.viewInstances.where("workspaceId").equals(n).toArray();for(const y of w){const $=h.get(y.tableId);$&&await e.viewInstances.put({...y,id:yi(),workspaceId:r,tableId:$,templateId:g.get(y.templateId)??y.templateId})}}const l=await e.settings.where("workspaceId").equals(n).toArray();for(const u of l)await e.settings.put({...u,key:pn(r,u.name),workspaceId:r,name:u.name});return r}var m$=Object.defineProperty,g$=Object.getOwnPropertyDescriptor,Ea=(e,t,n,r)=>{for(var i=r>1?void 0:r?g$(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&m$(t,n,i),i};const Hc="Clone everything (tables, views, settings)",Kc="Clone settings only (no data)",b$="Empty workspace";let Tr=class extends ve{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await oe();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(i=>i.id===e);if(!t)return;const n=new URLSearchParams(location.search);n.set("space",t.name);const r=`${location.pathname}?${n.toString()}${location.hash}`;location.assign(r)}async addWorkspace(){const e=await oe(),t=await e.api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const n=await e.api.ui.dialogs.choice(`What should "${t.trim()}" start with?`,[Hc,Kc,b$],"New workspace");if(!n)return;const r=n===Hc?"all":n===Kc?"settings":"empty",i=ih(t.trim());await p$(ru(),{from:e.workspaceId,to:i,name:t.trim(),mode:r});const s=new URLSearchParams(location.search);s.set("space",t.trim()),location.assign(`${location.pathname}?${s.toString()}${location.hash}`)}render(){return C`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>C`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};Tr.styles=[bt,ke`
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
    `];Ea([B()],Tr.prototype,"workspaces",2);Ea([B()],Tr.prototype,"current",2);Tr=Ea([Se("workspace-selector")],Tr);var Vc=Object.freeze,dh=Object.defineProperty,w$=Object.getOwnPropertyDescriptor,xt=(e,t,n,r)=>{for(var i=r>1?void 0:r?w$(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&dh(t,n,i),i},y$=(e,t)=>Vc(dh(e,"raw",{value:Vc(e.slice())})),Wc;function Gc(e){return e?e.trimStart().startsWith("<svg")?C`<span class="icon-svg" aria-hidden="true">${No(e)}</span>`:C`<span class="mi sm" aria-hidden="true">${e}</span>`:""}let tt=class extends ve{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.onOpenCommandPalette=()=>{this.commandPaletteDialog?.open()},this.onGlobalKeydown=e=>{(e.ctrlKey||e.metaKey)&&!e.altKey&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.commandPaletteDialog?.open())},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{Qc(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!Qc(e))return;e.preventDefault();const t=await oe(),n=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:n,event:e});for(const r of[...t.registries.dropHandlers])try{if(await r(e,t.api))return}catch(i){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:i})}},this.runSlot=(e,t)=>{if(!this.api)return;const n=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:n})).catch(r=>{console.error(`[footer-button:${e.id}]`,r)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),document.addEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.addEventListener("easydb:focus-search",this.openSearch),document.addEventListener("keydown",this.onGlobalKeydown),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),document.removeEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.removeEventListener("easydb:focus-search",this.openSearch),document.removeEventListener("keydown",this.onGlobalKeydown),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await oe();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const n=t.find(r=>r.id===e.workspaceId);this.workspaceTitle=n?.title?.trim()??"",v$(this.workspaceTitle)})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return C`
        <button class="icon-btn" title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
          ${Gc(e.icon)}
        </button>
      `;const n=t==="header"||e.variant==="primary"?"primary":"slot";return C`
      <button class=${n} title=${e.tooltip??e.label} @click=${r=>this.runSlot(e,r)}>
        ${Gc(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return C(Wc||(Wc=y$([`
      <header>
        <strong
          >`,`
          <a
            class="version-link"
            href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener"
            title="View the changelog on GitHub"
            ><span class="version">v0.0.262</span></a
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
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};tt.styles=[bt,ke`
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
    `];xt([Pt("new-table-dialog")],tt.prototype,"dialog",2);xt([Pt("csv-paste-dialog")],tt.prototype,"csvPasteDialog",2);xt([Pt("plugin-manager-dialog")],tt.prototype,"pluginManagerDialog",2);xt([Pt("settings-dialog")],tt.prototype,"settingsDialog",2);xt([Pt("command-palette-dialog")],tt.prototype,"commandPaletteDialog",2);xt([Pt("input.search")],tt.prototype,"searchInput",2);xt([B()],tt.prototype,"footerButtons",2);xt([B()],tt.prototype,"headerButtons",2);xt([B()],tt.prototype,"searchQuery",2);xt([B()],tt.prototype,"searchOpen",2);xt([B()],tt.prototype,"workspaceTitle",2);tt=xt([Se("app-shell")],tt);const Yc=document.title;function v$(e){const t=e.trim();document.title=t?`${t} — ${Yc}`:Yc}function Qc(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([oe(),ut(()=>Promise.resolve().then(()=>Vd),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{re as A,ke as a,C as b,mt as c,pt as d,ve as i,gt as m,B as r,Se as t};
//# sourceMappingURL=index-Bv_9LllG.js.map
